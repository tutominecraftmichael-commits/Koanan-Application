import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « La dissertation littéraire » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=861
export const FR_1ERE_EE_L02_DISSERTATION: CurriculumChapter = {
  "id": "premiere_a1_francais_ee_l02_dissertation_litteraire",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 2,
  "title": "Leçon 2 : La dissertation littéraire",
  "summary": "Les élèves de Première d’un établissement découvrent des sujets de dissertation littéraire dans le cadre de la préparation d’un concours et s’organisent pour les analyser, rechercher les idées, élaborer un plan, puis rédiger un développement, une introduction et une conclusion. Deux sujets servent de supports : celui de Roger Caillois sur la littérature et la société, et celui de Robert Rolland sur la lecture de soi à travers les livres.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=861",
  "points": [
    {
      "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01",
      "order": 1,
      "title": "Analyser le sujet",
      "summary": "Identifier les parties du sujet, expliquer les mots-clés, puis dégager le thème, la thèse et la problématique.",
      "conceptExplanation": "Les sujets de dissertation sont composés selon deux modèles principaux : soit ils comportent un jugement ou une opinion, parfois donné sous la forme d’une citation avec le nom de l’auteur et la source ; soit le sujet est constitué d’une consigne sans citation, adressée au candidat de façon directe. Dans les deux cas, un sujet de dissertation littéraire comporte deux parties : une information et une consigne. L’information est le jugement ou l’opinion d’un auteur ou d’un critique sur un thème, souvent donnée sous la forme d’une citation. La consigne est formulée à partir d’un groupe verbal sous la forme injonctive à l’impératif ; elle oriente la démarche à mettre en œuvre dans le développement.\nL’analyse du sujet se poursuit par l’identification et l’explication des mots-clés de l’information et de la consigne, dont on dégage le sens en contexte. Pour le sujet 1 de Roger Caillois — « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte » — : toute littérature, c’est tout livre, toute production littéraire (roman, théâtre ou poésie) ; civilisation signifie culture ; participe signifie prendre part, concourir, collaborer, contribuer ; battements d’un cœur est une image (métonymie) pour désigner le sentiment, l’émotion, l’imagination ; existe dans une société signifie liée à une société, à son milieu, ancrage dans la société ; l’empreinte, c’est la marque, le cachet. Reformulation : les productions littéraires ne proviennent pas de l’imagination mais de la société qui les a vu naître et en portent la marque.\nLe thème est la notion sur laquelle porte la réflexion ; on le dégage en se demandant : « De quoi s’agit-il ? », à partir des termes récurrents ou du champ lexical — ici, le rapport entre la littérature et la société. La thèse de l’auteur est l’opinion qu’il soutient sur le thème et qui s’oppose à d’autres thèses possibles ; on la dégage en se demandant : « Quel est le point de vue de l’auteur sur le thème ? » — ici, la production littéraire est influencée, impactée par la société. La problématique est l’ensemble des questions liées au sujet ; une bonne problématique se formule en tenant compte de la thèse de l’auteur et de l’orientation du verbe de la consigne — ici : quel rapport y a-t-il entre la production littéraire et la société ? La société est-elle la seule source d’inspiration du livre ?",
      "keyRule": "Analyse en chaîne : parties du sujet, mots-clés expliqués, reformulation, thème, thèse, problématique — chaque étape prépare la suivante.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser le sujet 2 de Robert Rolland (évaluation traitée)",
        "statement": "Analyse le sujet 2 : « En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Robert Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. »",
        "methodSteps": [
          "Parties du sujet : information, « on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » ; consigne, « expliquez et discutez » en s’appuyant sur son expérience personnelle de lecteur.",
          "Mots-clés : lire un livre, c’est déchiffrer, décoder, pénétrer ; se lire à travers les livres, c’est se découvrir, apprendre à mieux se connaître ; se contrôler, c’est se contenir, se maîtriser, se rectifier, s’amender.",
          "Reformulation : l’œuvre littéraire nous révèle notre propre personne et nous aide à nous rectifier.",
          "Thème : l’apport de la lecture au lecteur. Consigne : expliquer, c’est étayer, donner des justificatifs ; discuter, c’est donner les limites de l’affirmation.",
          "Problématique : l’œuvre littéraire ne se limite-t-elle qu’à nous révéler notre propre personne et qu’à nous aider à nous rectifier ?"
        ],
        "conclusion": "L’analyse complète du sujet 2 dégage thème, thèse et problématique : la recherche des idées peut commencer."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Information et consigne du sujet",
          "stepTheme": "Information et consigne du sujet",
          "stepBadge": "Information et consigne du sujet",
          "paragraphText": "• Information : le jugement ou l’opinion d’un auteur ou d’un critique sur un thème, souvent donné sous la forme d’une citation.\n• Consigne : un groupe verbal à la forme injonctive, à l’impératif, qui oriente la démarche à mettre en œuvre dans le développement.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q1",
            "type": "mcq",
            "prompt": "Dans un sujet de dissertation, la consigne sert à :",
            "options": [
              "Présenter la biographie de l’auteur cité",
              "Orienter la démarche à mettre en œuvre dans le développement",
              "Donner la conclusion du devoir",
              "Choisir le texte support du commentaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La consigne, formulée à l’impératif (expliquez, discutez), commande la démarche du développement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les deux modèles de sujets",
          "stepTheme": "Les deux modèles de sujets",
          "stepBadge": "Les deux modèles de sujets",
          "paragraphText": "• Premier modèle : le sujet comporte un jugement ou une opinion, parfois sous la forme d’une citation avec le nom de l’auteur et la source, comme le sujet 1 de Roger Caillois.\n• Deuxième modèle : le sujet est constitué d’une consigne sans citation, adressée au candidat de façon directe.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q2",
            "type": "mcq",
            "prompt": "Le sujet 1 de la leçon relève du modèle :",
            "options": [
              "De la consigne sans citation adressée directement au candidat",
              "Du jugement donné sous la forme d’une citation avec le nom de l’auteur",
              "Du texte à commenter sans aucun libellé",
              "De la question de cours sans opinion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sujet 1 cite intégralement le point de vue de Roger Caillois avant la consigne « expliquez et discutez »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Expliquer les mots-clés en contexte",
          "stepTheme": "Expliquer les mots-clés en contexte",
          "stepBadge": "Expliquer les mots-clés en contexte",
          "paragraphText": "Méthode : identifier les mots-clés et difficiles de l’information et de la consigne, et en dégager le sens en contexte.\nDans le sujet 1 : civilisation vaut culture ; participe vaut prendre part, contribuer ; l’empreinte vaut la marque, le cachet.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q3",
            "type": "mcq",
            "prompt": "Dans le sujet 1, le mot « empreinte » signifie :",
            "options": [
              "La signature de l’éditeur",
              "L’imprimerie du livre",
              "Le prix du livre en librairie",
              "La marque, le cachet que la société laisse sur la littérature"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’empreinte est la marque de la société sur la production littéraire : c’est le sens en contexte dégagé par l’analyse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La métonymie des battements du cœur",
          "stepTheme": "La métonymie des battements du cœur",
          "stepBadge": "La métonymie des battements du cœur",
          "paragraphText": "Propriété : « battements d’un cœur » est une image, une métonymie, pour désigner le sentiment, l’émotion, l’imagination.\nExpliquer ce mot-clé évite le contresens : Caillois ne parle pas de médecine, mais de la part sensible de l’homme.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q4",
            "type": "mcq",
            "prompt": "« Battements d’un cœur » désigne, dans le sujet 1 :",
            "options": [
              "Le rythme cardiaque au sens médical",
              "Le sentiment, l’émotion, l’imagination",
              "Le nombre de pages d’un livre",
              "La cadence des vers d’un poème"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’explication donnée par la leçon : une métonymie pour le sentiment, l’émotion et l’imagination."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Du thème à la problématique",
          "stepTheme": "Du thème à la problématique",
          "stepBadge": "Du thème à la problématique",
          "paragraphText": "Méthode : le thème se dégage par la question « De quoi s’agit-il ? », à partir des termes récurrents ou du champ lexical.\nLa thèse se dégage par la question « Quel est le point de vue de l’auteur sur le thème ? » La problématique se formule ensuite en tenant compte de la thèse et de l’orientation du verbe de la consigne.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q5",
            "type": "mcq",
            "prompt": "Le thème du sujet 1 est :",
            "options": [
              "La biographie de Roger Caillois",
              "La lecture chez les jeunes",
              "Le rapport entre la littérature et la société",
              "Le théâtre et la prise de conscience"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Littérature, civilisation, société, empreinte : les termes récurrents désignent le rapport entre la littérature et la société."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une problématique sans la consigne",
          "stepTheme": "Une problématique sans la consigne",
          "stepBadge": "Une problématique sans la consigne",
          "paragraphText": "Piège : formuler la problématique à partir de la seule citation, en oubliant le verbe de la consigne.\nUne bonne problématique tient compte à la fois de la thèse de l’auteur et de l’orientation du verbe : pour le sujet 1, « la société est-elle la seule source d’inspiration du livre ? » vient du « discutez ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q6",
            "type": "mcq",
            "prompt": "La problématique du sujet 1 retenue par la leçon est :",
            "options": [
              "Qui est Roger Caillois ?",
              "Quel rapport y a-t-il entre la production littéraire et la société ? La société est-elle la seule source d’inspiration du livre ?",
              "Combien de livres la société produit-elle ?",
              "Pourquoi faut-il lire des romans ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La problématique interroge le rapport littérature et société, puis la limite de la thèse : c’est l’effet du verbe « discutez »."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q1",
          "type": "mcq",
          "prompt": "Dans un sujet de dissertation, la consigne sert à :",
          "options": [
            "Présenter la biographie de l’auteur cité",
            "Orienter la démarche à mettre en œuvre dans le développement",
            "Donner la conclusion du devoir",
            "Choisir le texte support du commentaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La consigne, formulée à l’impératif (expliquez, discutez), commande la démarche du développement."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q2",
          "type": "mcq",
          "prompt": "Le sujet 1 de la leçon relève du modèle :",
          "options": [
            "De la consigne sans citation adressée directement au candidat",
            "Du jugement donné sous la forme d’une citation avec le nom de l’auteur",
            "Du texte à commenter sans aucun libellé",
            "De la question de cours sans opinion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sujet 1 cite intégralement le point de vue de Roger Caillois avant la consigne « expliquez et discutez »."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q3",
          "type": "mcq",
          "prompt": "Dans le sujet 1, le mot « empreinte » signifie :",
          "options": [
            "La signature de l’éditeur",
            "L’imprimerie du livre",
            "Le prix du livre en librairie",
            "La marque, le cachet que la société laisse sur la littérature"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’empreinte est la marque de la société sur la production littéraire : c’est le sens en contexte dégagé par l’analyse."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q4",
          "type": "mcq",
          "prompt": "« Battements d’un cœur » désigne, dans le sujet 1 :",
          "options": [
            "Le rythme cardiaque au sens médical",
            "Le sentiment, l’émotion, l’imagination",
            "Le nombre de pages d’un livre",
            "La cadence des vers d’un poème"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’explication donnée par la leçon : une métonymie pour le sentiment, l’émotion et l’imagination."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q5",
          "type": "mcq",
          "prompt": "Le thème du sujet 1 est :",
          "options": [
            "La biographie de Roger Caillois",
            "La lecture chez les jeunes",
            "Le rapport entre la littérature et la société",
            "Le théâtre et la prise de conscience"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Littérature, civilisation, société, empreinte : les termes récurrents désignent le rapport entre la littérature et la société."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p01_q6",
          "type": "mcq",
          "prompt": "La problématique du sujet 1 retenue par la leçon est :",
          "options": [
            "Qui est Roger Caillois ?",
            "Quel rapport y a-t-il entre la production littéraire et la société ? La société est-elle la seule source d’inspiration du livre ?",
            "Combien de livres la société produit-elle ?",
            "Pourquoi faut-il lire des romans ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La problématique interroge le rapport littérature et société, puis la limite de la thèse : c’est l’effet du verbe « discutez »."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02",
      "order": 2,
      "title": "Rechercher les idées",
      "summary": "Trouver des idées précises et pertinentes, dans les domaines de l’auteur, de l’œuvre et du lecteur, et les illustrer d’exemples.",
      "conceptExplanation": "Pour traiter un sujet de dissertation littéraire, il faut baser son argumentation sur des idées recherchées dans différents domaines de la littérature — l’auteur, l’œuvre, le lecteur — en fonction du thème général du sujet. Ces idées, pour avoir de la valeur, doivent être précises, pertinentes et surtout en relation étroite avec le sujet et sa problématique. D’anciens sujets de dissertation peuvent même servir d’idées. Elles doivent être illustrées par des exemples précis pour être plus valables et plus convaincantes.\nPour le sujet 1, la recherche répond à deux questions. Première partie, en quoi la littérature est-elle le reflet de la société ? Sur le plan idéologique et politique : la littérature dénonce les régimes dictatoriaux (Les soleils des indépendances d’Ahmadou Kourouma ; Les voix dans le vent de Bernard B. Dadié) et les rivalités politiques et la démagogie des hommes politiques (On se chamaille pour un siège de Hyacinthe Kacou ; Tribaliques d’Henri Lopes). Sur le plan culturel : elle dénonce certaines coutumes jugées rétrogrades (Rebelle de Fatou Keïta ; Le respect des morts d’Amadou Koné), elle dénonce l’acculturation du Noir (L’appel des arènes d’Aminata Sow Fall ; L’aventure ambiguë de Cheikh Hamidou Kane), et elle valorise certaines cultures méconnues (« Prières aux masques » dans Chants d’ombre de Léopold Sédar Senghor ; Le monde s’effondre de Chinua Achebe).\nDeuxième partie, quels sont les autres aspects de la littérature ? La littérature est l’expression des sentiments personnels (Les contemplations de Victor Hugo ; Les méditations poétiques d’Alphonse de Lamartine ; Climbié de Bernard Dadié). Elle exprime le beau, l’esthétique (Calligrammes de Guillaume Apollinaire ; Le capitaine Fracasse de Théophile Gautier). Elle évoque la fiction et favorise l’évasion (La planète des singes de Pierre Boulle ; Vingt mille lieues sous les mers de Jules Verne).",
      "keyRule": "Une idée ne vaut que précise, pertinente, liée au sujet et à sa problématique — et toujours illustrée par un exemple précis.",
      "formulas": [],
      "workedExample": {
        "title": "Rechercher les idées du sujet 2 (évaluation traitée)",
        "statement": "À partir du travail fait sur le sujet 1, recherche les idées du sujet 2 de Robert Rolland : la lecture permet-elle seulement de se découvrir et de se contrôler ?",
        "methodSteps": [
          "Première partie, découverte de soi : le livre est un miroir qui renvoie au lecteur son image ; il s’identifie aux personnages, qui traduisent ses rêves et ses ambitions (Eugène de Rastignac dans Le père Goriot de Balzac ; Phèdre de Racine), et à leurs sentiments (Fama dans Les soleils des indépendances ; Chaka de Senghor).",
          "Première partie, correction de soi : la lecture permet de découvrir ses propres travers et de les rectifier, par une prise de conscience (L’Avare de Molière ; « La cigale et la fourmi » de La Fontaine).",
          "Deuxième partie, découverte des autres : le lecteur découvre des cultures différentes de la sienne (Le monde s’effondre d’Achebe ; Une vie de Maupassant) et les sentiments des autres (Une si longue lettre de Mariama Bâ).",
          "Deuxième partie, autres bénéfices : le lecteur acquiert des connaissances intellectuelles (L’enfant noir de Camara Laye ; Germinal d’Émile Zola) et se divertit (les romans d’aventure comme Le lion de Joseph Kessel ; les romans policiers comme Témoin à charge d’Agatha Christie)."
        ],
        "conclusion": "La recherche du sujet 2 équilibre les deux parties de la problématique : se découvrir et se rectifier, mais aussi découvrir les autres, apprendre et se divertir."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les domaines de recherche des idées",
          "stepTheme": "Les domaines de recherche des idées",
          "stepBadge": "Les domaines de recherche des idées",
          "paragraphText": "• Recherche des idées : baser son argumentation sur des idées recherchées dans différents domaines de la littérature, en fonction du thème général du sujet.\nLes domaines nommés par la leçon sont : l’auteur, l’œuvre et le lecteur.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q1",
            "type": "mcq",
            "prompt": "Selon la leçon, les idées d’une dissertation se recherchent dans les domaines :",
            "options": [
              "De l’auteur, de l’œuvre et du lecteur",
              "De la grammaire et de l’orthographe uniquement",
              "Des autres matières scolaires",
              "Des opinions entendues en classe sans vérification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Auteur, œuvre, lecteur : c’est dans ces trois domaines, selon le thème, que l’argumentation puise ses idées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les qualités d’une bonne idée",
          "stepTheme": "Les qualités d’une bonne idée",
          "stepBadge": "Les qualités d’une bonne idée",
          "paragraphText": "Propriété : pour avoir de la valeur, une idée doit être précise, pertinente et surtout en relation étroite avec le sujet et sa problématique.\nLa leçon ajoute que d’anciens sujets de dissertation peuvent même servir d’idées, et que chaque idée doit être illustrée par des exemples précis.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q2",
            "type": "mcq",
            "prompt": "Une idée de dissertation a de la valeur si elle est :",
            "options": [
              "Vague mais nombreuse",
              "Précise, pertinente et en relation étroite avec le sujet et sa problématique",
              "Sans aucun rapport avec la problématique",
              "Toujours tirée d’un seul roman"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Précision, pertinence et lien étroit avec le sujet et sa problématique : ce sont les trois qualités exigées par la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Dénoncer les régimes dictatoriaux",
          "stepTheme": "Dénoncer les régimes dictatoriaux",
          "stepBadge": "Dénoncer les régimes dictatoriaux",
          "paragraphText": "Exemple d’idée du sujet 1 : sur le plan idéologique et politique, la littérature dénonce les régimes dictatoriaux.\nLa recherche l’illustre par Les soleils des indépendances d’Ahmadou Kourouma et Les voix dans le vent de Bernard B. Dadié.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q3",
            "type": "mcq",
            "prompt": "Dans la recherche du sujet 1, Les soleils des indépendances et Les voix dans le vent illustrent :",
            "options": [
              "L’expression des sentiments personnels",
              "La fiction et l’évasion",
              "La dénonciation des régimes dictatoriaux",
              "La valorisation des cultures méconnues"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ces deux œuvres sont rangées par la leçon sous l’argument politique : la dénonciation des régimes dictatoriaux."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Valoriser une culture méconnue",
          "stepTheme": "Valoriser une culture méconnue",
          "stepBadge": "Valoriser une culture méconnue",
          "paragraphText": "Exemple d’idée culturelle : la littérature valorise certaines cultures méconnues.\nLa recherche cite « Prières aux masques » dans Chants d’ombre de Léopold Sédar Senghor et Le monde s’effondre de Chinua Achebe.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q4",
            "type": "mcq",
            "prompt": "« Prières aux masques » de Senghor illustre, dans la recherche du sujet 1 :",
            "options": [
              "La dénonciation de l’acculturation du Noir",
              "La valorisation de certaines cultures méconnues",
              "L’esthétique du calligramme",
              "La démagogie des hommes politiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le poème exalte une culture africaine méconnue : il relève de l’argument de valorisation culturelle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les autres aspects de la littérature",
          "stepTheme": "Les autres aspects de la littérature",
          "stepBadge": "Les autres aspects de la littérature",
          "paragraphText": "Méthode : la deuxième partie de la recherche répond à la limite posée par la problématique — la littérature ne se réduit pas au reflet de la société.\nTrois aspects sont dégagés : l’expression des sentiments personnels, l’expression du beau et de l’esthétique, la fiction qui favorise l’évasion.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q5",
            "type": "mcq",
            "prompt": "La planète des singes de Pierre Boulle illustre, dans la recherche du sujet 1 :",
            "options": [
              "Le reflet de la société africaine",
              "La dénonciation des coutumes rétrogrades",
              "Les sentiments personnels du poète",
              "La fiction, qui favorise l’évasion"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec Vingt mille lieues sous les mers de Jules Verne, ce roman relève de la fiction et de l’évasion, troisième aspect de la deuxième partie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Des exemples sans idée, des idées sans exemple",
          "stepTheme": "Des exemples sans idée, des idées sans exemple",
          "stepBadge": "Des exemples sans idée, des idées sans exemple",
          "paragraphText": "Piège : aligner des titres d’œuvres sans idée directrice, ou affirmer des idées générales sans aucun exemple.\nLa leçon est nette : les idées doivent être illustrées par des exemples précis pour être plus valables et plus convaincantes.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q6",
            "type": "mcq",
            "prompt": "Selon la leçon, pour être valables et convaincantes, les idées doivent être :",
            "options": [
              "Illustrées par des exemples précis",
              "Présentées sans aucun exemple",
              "Copiées d’un ancien devoir sans lien avec le sujet",
              "Formulées de façon très générale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’exemple précis donne à l’idée sa valeur et sa force de conviction : idée et exemple sont inséparables."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q1",
          "type": "mcq",
          "prompt": "Selon la leçon, les idées d’une dissertation se recherchent dans les domaines :",
          "options": [
            "De l’auteur, de l’œuvre et du lecteur",
            "De la grammaire et de l’orthographe uniquement",
            "Des autres matières scolaires",
            "Des opinions entendues en classe sans vérification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Auteur, œuvre, lecteur : c’est dans ces trois domaines, selon le thème, que l’argumentation puise ses idées."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q2",
          "type": "mcq",
          "prompt": "Une idée de dissertation a de la valeur si elle est :",
          "options": [
            "Vague mais nombreuse",
            "Précise, pertinente et en relation étroite avec le sujet et sa problématique",
            "Sans aucun rapport avec la problématique",
            "Toujours tirée d’un seul roman"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Précision, pertinence et lien étroit avec le sujet et sa problématique : ce sont les trois qualités exigées par la leçon."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q3",
          "type": "mcq",
          "prompt": "Dans la recherche du sujet 1, Les soleils des indépendances et Les voix dans le vent illustrent :",
          "options": [
            "L’expression des sentiments personnels",
            "La fiction et l’évasion",
            "La dénonciation des régimes dictatoriaux",
            "La valorisation des cultures méconnues"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ces deux œuvres sont rangées par la leçon sous l’argument politique : la dénonciation des régimes dictatoriaux."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q4",
          "type": "mcq",
          "prompt": "« Prières aux masques » de Senghor illustre, dans la recherche du sujet 1 :",
          "options": [
            "La dénonciation de l’acculturation du Noir",
            "La valorisation de certaines cultures méconnues",
            "L’esthétique du calligramme",
            "La démagogie des hommes politiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le poème exalte une culture africaine méconnue : il relève de l’argument de valorisation culturelle."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q5",
          "type": "mcq",
          "prompt": "La planète des singes de Pierre Boulle illustre, dans la recherche du sujet 1 :",
          "options": [
            "Le reflet de la société africaine",
            "La dénonciation des coutumes rétrogrades",
            "Les sentiments personnels du poète",
            "La fiction, qui favorise l’évasion"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec Vingt mille lieues sous les mers de Jules Verne, ce roman relève de la fiction et de l’évasion, troisième aspect de la deuxième partie."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p02_q6",
          "type": "mcq",
          "prompt": "Selon la leçon, pour être valables et convaincantes, les idées doivent être :",
          "options": [
            "Illustrées par des exemples précis",
            "Présentées sans aucun exemple",
            "Copiées d’un ancien devoir sans lien avec le sujet",
            "Formulées de façon très générale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’exemple précis donne à l’idée sa valeur et sa force de conviction : idée et exemple sont inséparables."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03",
      "order": 3,
      "title": "Élaborer le plan du développement",
      "summary": "Classer les idées en un plan détaillé adapté à la problématique : parties, arguments et exemples précisés.",
      "conceptExplanation": "Le plan doit être adapté à la problématique du sujet, à laquelle, dans son cheminement, il permet de trouver une réponse. Il faut élaborer un plan détaillé qui classe les idées directrices, les arguments et les exemples à utiliser. Au niveau des exemples, il ne s’agit pas de citer seulement les œuvres littéraires et leurs auteurs, mais de relever également l’élément du texte qui illustre les propos. Les grandes parties obéissent à un ordre de présentation qui va du plus évident au moins évident, du moins important au plus important ; l’organisation du plan dépend donc de ce qui est jugé plus important par son auteur et peut varier d’un individu à un autre.\nLe sujet 1 fait appel à un plan dialectique ou antithétique : première partie (la thèse), la littérature est le reflet de la société ; deuxième partie (l’antithèse), la littérature a d’autres aspects. Dans le plan détaillé, chaque exemple est précisé par son élément illustratif : Les soleils des indépendances fustige la dictature née dans la république des Ébènes et celle du Nikinaï aux lendemains des indépendances ; Les voix dans le vent met à nu l’abus de pouvoir de Nahoubou ; dans Tribaliques, la nouvelle « Monsieur le Député » expose la démagogie et le tribalisme ; dans Rebelle, la fuite de Malimouna dans la nuit de noces dénonce le mariage forcé ; dans L’aventure ambiguë, Samba Diallo est déchiré entre les valeurs africaines et occidentales ; « Demain dès l’aube », dans Les contemplations, évoque la douleur de Victor Hugo après la perte de sa fille ; dans Calligrammes, la disposition typographique des poèmes suggère le thème évoqué.",
      "keyRule": "Plan détaillé = idées directrices, arguments, exemples précisés par l’élément du texte qui illustre — le tout ordonné vers la réponse à la problématique.",
      "formulas": [],
      "workedExample": {
        "title": "Le plan détaillé du sujet 2 (évaluation traitée)",
        "statement": "Dégage le plan détaillé du sujet 2 de Robert Rolland, en précisant pour chaque exemple l’élément qui illustre l’argument.",
        "methodSteps": [
          "Type de plan : le sujet 2 admet un plan dialectique — première partie, la lecture permet la découverte et la formation de soi ; deuxième partie, la lecture ouvre à d’autres découvertes en dehors de soi.",
          "Partie 1, identification : le livre est un miroir ; le lecteur s’identifie aux personnages (Rastignac, Phèdre), à leurs joies et peines (Fama ; Chaka), et à l’histoire (le drame de la famille de N’guana dans L’Ordonnance ; Soundjata).",
          "Partie 1, rectification : découvrir ses travers et les rectifier — L’Avare fait découvrir l’avarice, « La cigale et la fourmi » dénonce la paresse.",
          "Partie 2, découverte de l’autre : Le monde s’effondre fait découvrir la culture Ibo, marquée par la virilité, le courage et la méritocratie ; Une vie fait découvrir la noblesse en France à la fin du dix-neuvième siècle et les erreurs de l’éducation des jeunes filles.",
          "Partie 2, connaissances et divertissement : Germinal fait découvrir la France au moment de l’industrialisation ; Le lion et les romans policiers relèvent du divertissement."
        ],
        "conclusion": "Le plan du sujet 2 est dialectique et détaillé : chaque argument est déjà assorti de l’élément d’œuvre qui l’illustrera."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le plan adapté à la problématique",
          "stepTheme": "Le plan adapté à la problématique",
          "stepBadge": "Le plan adapté à la problématique",
          "paragraphText": "• Plan du développement : organisation qui doit être adaptée à la problématique du sujet.\nDans son cheminement, le plan permet de trouver une réponse à la problématique : il n’est pas un classement décoratif, mais un parcours de démonstration.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q1",
            "type": "mcq",
            "prompt": "Le plan du développement doit avant tout être :",
            "options": [
              "Copié sur celui d’un autre sujet",
              "Adapté à la problématique, pour permettre d’y répondre",
              "Ordonné par ordre alphabétique des auteurs",
              "Limité à une seule partie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première phrase de la séance : le plan sert la problématique et conduit à sa réponse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Préciser l’élément qui illustre",
          "stepTheme": "Préciser l’élément qui illustre",
          "stepBadge": "Préciser l’élément qui illustre",
          "paragraphText": "Méthode : dans un plan détaillé, il ne suffit pas de citer les œuvres et leurs auteurs.\nIl faut relever également l’élément du texte qui illustre les propos : pour Rebelle, c’est la fuite de Malimouna dans la nuit de noces, qui dénonce le mariage forcé.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q2",
            "type": "mcq",
            "prompt": "Dans le plan détaillé, un exemple complet comporte :",
            "options": [
              "Le seul titre de l’œuvre",
              "Le seul nom de l’auteur",
              "L’œuvre, son auteur et l’élément du texte qui illustre l’argument",
              "Une appréciation personnelle sans lien avec l’argument"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Titre et auteur ne suffisent pas : l’élément précis (la fuite de Malimouna) est ce qui rattache l’exemple à l’argument."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’ordre des grandes parties",
          "stepTheme": "L’ordre des grandes parties",
          "stepBadge": "L’ordre des grandes parties",
          "paragraphText": "Propriété : les grandes parties obéissent à un ordre de présentation qui va du plus évident au moins évident, du moins important au plus important.\nL’organisation dépend de ce qui est jugé plus important par l’auteur du plan et peut donc varier d’un individu à un autre.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q3",
            "type": "mcq",
            "prompt": "L’ordre des grandes parties va, selon la leçon :",
            "options": [
              "Du plus important au moins important",
              "Du moins important au plus important, du plus évident au moins évident",
              "Dans un ordre imposé, identique pour tous",
              "De la conclusion vers l’introduction"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La progression monte en importance : c’est un choix de l’auteur du plan, qui peut varier d’un individu à l’autre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le plan dialectique du sujet 1",
          "stepTheme": "Le plan dialectique du sujet 1",
          "stepBadge": "Le plan dialectique du sujet 1",
          "paragraphText": "• Plan dialectique ou antithétique : un plan en deux temps opposés et complémentaires.\nPour le sujet 1 : première partie, la thèse — la littérature est le reflet de la société ; deuxième partie, l’antithèse — la littérature a d’autres aspects.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q4",
            "type": "mcq",
            "prompt": "Dans le plan dialectique du sujet 1, la deuxième partie soutient que :",
            "options": [
              "La littérature est uniquement le reflet de la société",
              "La littérature n’a aucun rapport avec la société",
              "La littérature ne sert qu’à divertir",
              "La littérature a d’autres aspects que le reflet de la société"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’antithèse ne nie pas la thèse : elle la limite en montrant les autres aspects de la littérature (sentiments, esthétique, fiction)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Samba Diallo, exemple précisé",
          "stepTheme": "Samba Diallo, exemple précisé",
          "stepBadge": "Samba Diallo, exemple précisé",
          "paragraphText": "Exemple de plan détaillé : pour dénoncer l’acculturation du Noir, le plan cite L’aventure ambiguë de Cheikh Hamidou Kane.\nL’élément précisé est le déchirement de Samba Diallo entre les valeurs africaines et occidentales.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q5",
            "type": "mcq",
            "prompt": "L’élément qui illustre l’acculturation dans L’aventure ambiguë est :",
            "options": [
              "La fuite de Malimouna",
              "Le déchirement de Samba Diallo entre les valeurs africaines et occidentales",
              "La douleur de Hugo après la mort de sa fille",
              "L’abus de pouvoir de Nahoubou"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Samba Diallo, partagé entre deux cultures, incarne l’acculturation dénoncée : c’est l’élément relevé par le plan détaillé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un plan qui cite sans classer",
          "stepTheme": "Un plan qui cite sans classer",
          "stepBadge": "Un plan qui cite sans classer",
          "paragraphText": "Piège : empiler les exemples dans l’ordre où on les a trouvés, sans idées directrices ni arguments.\nLe plan détaillé classe : les idées directrices d’abord, puis les arguments, puis les exemples qui les illustrent.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q6",
            "type": "mcq",
            "prompt": "Un plan détaillé correct classe, dans l’ordre :",
            "options": [
              "Les exemples, puis le sujet, puis la conclusion",
              "Les idées directrices, les arguments, puis les exemples",
              "Les auteurs par ordre alphabétique",
              "Les œuvres de la plus longue à la plus courte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Idées directrices, arguments, exemples : ce classement est la définition même du plan détaillé dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q1",
          "type": "mcq",
          "prompt": "Le plan du développement doit avant tout être :",
          "options": [
            "Copié sur celui d’un autre sujet",
            "Adapté à la problématique, pour permettre d’y répondre",
            "Ordonné par ordre alphabétique des auteurs",
            "Limité à une seule partie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première phrase de la séance : le plan sert la problématique et conduit à sa réponse."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q2",
          "type": "mcq",
          "prompt": "Dans le plan détaillé, un exemple complet comporte :",
          "options": [
            "Le seul titre de l’œuvre",
            "Le seul nom de l’auteur",
            "L’œuvre, son auteur et l’élément du texte qui illustre l’argument",
            "Une appréciation personnelle sans lien avec l’argument"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Titre et auteur ne suffisent pas : l’élément précis (la fuite de Malimouna) est ce qui rattache l’exemple à l’argument."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q3",
          "type": "mcq",
          "prompt": "L’ordre des grandes parties va, selon la leçon :",
          "options": [
            "Du plus important au moins important",
            "Du moins important au plus important, du plus évident au moins évident",
            "Dans un ordre imposé, identique pour tous",
            "De la conclusion vers l’introduction"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La progression monte en importance : c’est un choix de l’auteur du plan, qui peut varier d’un individu à l’autre."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q4",
          "type": "mcq",
          "prompt": "Dans le plan dialectique du sujet 1, la deuxième partie soutient que :",
          "options": [
            "La littérature est uniquement le reflet de la société",
            "La littérature n’a aucun rapport avec la société",
            "La littérature ne sert qu’à divertir",
            "La littérature a d’autres aspects que le reflet de la société"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’antithèse ne nie pas la thèse : elle la limite en montrant les autres aspects de la littérature (sentiments, esthétique, fiction)."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q5",
          "type": "mcq",
          "prompt": "L’élément qui illustre l’acculturation dans L’aventure ambiguë est :",
          "options": [
            "La fuite de Malimouna",
            "Le déchirement de Samba Diallo entre les valeurs africaines et occidentales",
            "La douleur de Hugo après la mort de sa fille",
            "L’abus de pouvoir de Nahoubou"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Samba Diallo, partagé entre deux cultures, incarne l’acculturation dénoncée : c’est l’élément relevé par le plan détaillé."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p03_q6",
          "type": "mcq",
          "prompt": "Un plan détaillé correct classe, dans l’ordre :",
          "options": [
            "Les exemples, puis le sujet, puis la conclusion",
            "Les idées directrices, les arguments, puis les exemples",
            "Les auteurs par ordre alphabétique",
            "Les œuvres de la plus longue à la plus courte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Idées directrices, arguments, exemples : ce classement est la définition même du plan détaillé dans la leçon."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04",
      "order": 4,
      "title": "Rédiger une partie du développement",
      "summary": "Construire des paragraphes argumentatifs complets : idée directrice, arguments reliés par des connecteurs, exemples insérés.",
      "conceptExplanation": "La dissertation littéraire s’élabore en trois grandes articulations : une introduction, un développement et une conclusion. Le développement comporte deux parties constituées par les deux axes du plan. Le développement est une succession de paragraphes argumentatifs. Un paragraphe argumentatif est une sous-partie du développement, constituée d’une idée et signalée par la mise en page. Chaque paragraphe argumentatif doit comporter : une phrase présentant l’idée directrice pour laquelle le paragraphe est construit — si l’on passe à une autre idée directrice, il faut changer de paragraphe ; les arguments qui développent l’idée directrice, reliés par des connecteurs logiques (d’abord, aussi, ensuite, en outre, par ailleurs, enfin) — les arguments justifient l’idée directrice et lui donnent sa validité, et certains peuvent être développés et expliqués ; des exemples qui illustrent l’argument et lui confèrent une dimension plus concrète, moins théorique.\nLe paragraphe peut être construit selon trois modes de raisonnement : le raisonnement déductif (idée directrice, puis arguments, puis exemples) ; le raisonnement inductif (exemples, puis arguments, puis idée directrice) ; le raisonnement par analogie ou par confrontation, qui met en parallèle par comparaison ou par opposition. Pour insérer les exemples, la leçon donne des formules : « Ainsi… », « C’est ainsi que… », « L’exemple de… montre bien cela », « Qu’il suffise de rappeler… », « Ce fait est illustré par… », « Prenons le cas de… », « On peut songer à… ».\nLa première partie rédigée du sujet 1 enchaîne ainsi les paragraphes : la littérature dénonce les régimes dictatoriaux (Les soleils des indépendances fustige la dictature du parti unique ; Les voix dans le vent fait la satire du dictateur Nahoubou) ; elle dénonce aussi les rivalités politiques et la démagogie (On se chamaille pour un siège, combat pour le poste de député ; Tribaliques et ses fausses promesses) ; elle dénonce certaines pratiques culturelles (Rebelle met à nu l’excision et le mariage forcé) ; elle fait la satire de l’acculturation du Noir (L’appel des arènes critique l’attitude des intellectuels sénégalais envers la lutte) ; enfin, elle valorise certaines cultures (« Prière aux masques » chante les bienfaits du masque dans la société africaine). Une phrase de transition clôt la partie : bien que la littérature soit le reflet de la société, elle regorge d’autres aspects.",
      "keyRule": "Paragraphe argumentatif = idée directrice annoncée, arguments enchaînés par des connecteurs, exemples insérés par les formules de la leçon.",
      "formulas": [],
      "workedExample": {
        "title": "Rédiger la première partie du sujet 2 (évaluation traitée)",
        "statement": "Rédige la première partie du développement du sujet 2 : la lecture permet la découverte et la formation de soi.",
        "methodSteps": [
          "Idée directrice : la valeur du livre tient d’abord au processus d’identification ; installé devant un livre, le lecteur est en face d’un miroir qui lui renvoie son image à travers les personnages dont il partage les rêves et les ambitions.",
          "Argument et exemples : le lecteur se reconnaît dans Eugène de Rastignac, jeune ambitieux venu d’Angoulême pour étudier le droit à Paris, et s’assimile à Phèdre, dévorée par sa passion amoureuse pour Hippolyte, le fils de son époux Thésée.",
          "Argument suivant, relié par « ensuite » : en s’identifiant aux personnages, le lecteur partage leurs peines et leurs joies — la détresse de Fama, la trahison subie par Chaka, la fierté devant Soundjata, la peine devant le drame de la famille de N’guana dans L’Ordonnance, qui perd sa fille faute d’argent.",
          "Dernier argument, introduit par « enfin » : la vraisemblance entre le lecteur et les personnages lui permet, quand il s’agit de satire, de découvrir ses propres travers et de les rectifier — L’Avare parodie l’avarice, « La cigale et la fourmi » dénonce la paresse et exhorte au travail."
        ],
        "conclusion": "La partie rédigée enchaîne identification, partage des sentiments et rectification de soi : trois paragraphes argumentatifs complets."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le paragraphe argumentatif",
          "stepTheme": "Le paragraphe argumentatif",
          "stepBadge": "Le paragraphe argumentatif",
          "paragraphText": "• Paragraphe argumentatif : sous-partie du développement, constituée d’une idée et signalée par la mise en page.\nIl comporte une phrase d’idée directrice, des arguments qui la développent et des exemples qui l’illustrent.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q1",
            "type": "mcq",
            "prompt": "Un paragraphe argumentatif doit comporter :",
            "options": [
              "Une idée directrice, des arguments et des exemples",
              "Uniquement des exemples accumulés",
              "Un titre et un numéro de partie",
              "Une citation du sujet en entier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Idée directrice, arguments, exemples : ce sont les trois composantes exigées pour chaque paragraphe argumentatif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Relier les arguments par des connecteurs",
          "stepTheme": "Relier les arguments par des connecteurs",
          "stepBadge": "Relier les arguments par des connecteurs",
          "paragraphText": "Méthode : les arguments sont reliés à l’idée directrice et entre eux par des connecteurs logiques.\nLa leçon cite : d’abord, aussi, ensuite, en outre, par ailleurs, enfin. C’est ainsi que la partie rédigée du sujet 1 progresse d’un paragraphe à l’autre.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q2",
            "type": "mcq",
            "prompt": "Les connecteurs logiques cités par la leçon pour relier les arguments sont :",
            "options": [
              "Parce que, donc, alors uniquement",
              "D’abord, aussi, ensuite, en outre, par ailleurs, enfin",
              "Hier, aujourd’hui, demain",
              "Moi, toi, lui"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ces connecteurs marquent l’enchaînement des arguments à l’intérieur du développement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les trois modes de raisonnement",
          "stepTheme": "Les trois modes de raisonnement",
          "stepBadge": "Les trois modes de raisonnement",
          "paragraphText": "Propriété : un paragraphe peut être construit selon trois modes de raisonnement.\n• Déductif : idée directrice, arguments, exemples\n• Inductif : exemples, arguments, idée directrice\n• Par analogie ou confrontation : mise en parallèle par comparaison ou par opposition",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q3",
            "type": "mcq",
            "prompt": "Le raisonnement inductif ordonne le paragraphe ainsi :",
            "options": [
              "Idée directrice, exemples, silence",
              "Arguments seuls, sans idée ni exemple",
              "Exemples, arguments, idée directrice",
              "Idée directrice, arguments, exemples"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’inductif part des exemples et remonte vers l’idée directrice : c’est le trajet inverse du déductif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Insérer les exemples avec les formules",
          "stepTheme": "Insérer les exemples avec les formules",
          "stepBadge": "Insérer les exemples avec les formules",
          "paragraphText": "Méthode : pour une meilleure insertion des exemples, la leçon donne des formules toutes prêtes.\n« Ainsi… », « C’est ainsi que… », « L’exemple de… montre bien cela », « Qu’il suffise de rappeler… », « Ce fait est illustré par… », « Prenons le cas de… », « On peut songer à… ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q4",
            "type": "mcq",
            "prompt": "Quelle formule la leçon propose-t-elle pour introduire un exemple ?",
            "options": [
              "« À mon avis personnel… »",
              "« Ce fait est illustré par… »",
              "« Comme tout le monde le sait… »",
              "« Passons maintenant à autre chose… »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Ce fait est illustré par… » fait partie des formules d’insertion listées par la leçon, comme « Prenons le cas de… »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Dénoncer la dictature, rédaction du sujet 1",
          "stepTheme": "Dénoncer la dictature, rédaction du sujet 1",
          "stepBadge": "Dénoncer la dictature, rédaction du sujet 1",
          "paragraphText": "Exemple de paragraphe rédigé : la littérature dénonce les régimes dictatoriaux, car les gouvernants usent souvent de violences et de pratiques antidémocratiques.\nLa rédaction cite alors Les soleils des indépendances, où Kourouma fustige la dictature du parti unique, et Les voix dans le vent, satire du dictateur Nahoubou.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q5",
            "type": "mcq",
            "prompt": "Dans la partie rédigée du sujet 1, Nahoubou est le dictateur satirisé dans :",
            "options": [
              "Rebelle de Fatou Keïta",
              "Tribaliques d’Henri Lopes",
              "On se chamaille pour un siège de Kacou",
              "Les voix dans le vent de Bernard B. Dadié"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La pièce de Dadié fait la satire du dictateur Nahoubou : c’est l’exemple développé dans le premier paragraphe rédigé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Mélanger deux idées dans un paragraphe",
          "stepTheme": "Mélanger deux idées dans un paragraphe",
          "stepBadge": "Mélanger deux idées dans un paragraphe",
          "paragraphText": "Piège : traiter deux idées directrices dans le même paragraphe, ou changer d’idée sans changer de paragraphe.\nLa règle de la leçon est stricte : si l’on passe à une autre idée directrice, il faut changer de paragraphe, car le paragraphe est constitué d’une seule idée et signalé par la mise en page.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q6",
            "type": "mcq",
            "prompt": "Selon la leçon, quand on passe à une autre idée directrice, il faut :",
            "options": [
              "Continuer dans le même paragraphe",
              "Changer de paragraphe",
              "Recommencer une introduction",
              "Supprimer les exemples"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une idée directrice par paragraphe : le changement d’idée impose le changement de paragraphe."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q1",
          "type": "mcq",
          "prompt": "Un paragraphe argumentatif doit comporter :",
          "options": [
            "Une idée directrice, des arguments et des exemples",
            "Uniquement des exemples accumulés",
            "Un titre et un numéro de partie",
            "Une citation du sujet en entier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Idée directrice, arguments, exemples : ce sont les trois composantes exigées pour chaque paragraphe argumentatif."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q2",
          "type": "mcq",
          "prompt": "Les connecteurs logiques cités par la leçon pour relier les arguments sont :",
          "options": [
            "Parce que, donc, alors uniquement",
            "D’abord, aussi, ensuite, en outre, par ailleurs, enfin",
            "Hier, aujourd’hui, demain",
            "Moi, toi, lui"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ces connecteurs marquent l’enchaînement des arguments à l’intérieur du développement."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q3",
          "type": "mcq",
          "prompt": "Le raisonnement inductif ordonne le paragraphe ainsi :",
          "options": [
            "Idée directrice, exemples, silence",
            "Arguments seuls, sans idée ni exemple",
            "Exemples, arguments, idée directrice",
            "Idée directrice, arguments, exemples"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’inductif part des exemples et remonte vers l’idée directrice : c’est le trajet inverse du déductif."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q4",
          "type": "mcq",
          "prompt": "Quelle formule la leçon propose-t-elle pour introduire un exemple ?",
          "options": [
            "« À mon avis personnel… »",
            "« Ce fait est illustré par… »",
            "« Comme tout le monde le sait… »",
            "« Passons maintenant à autre chose… »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Ce fait est illustré par… » fait partie des formules d’insertion listées par la leçon, comme « Prenons le cas de… »."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q5",
          "type": "mcq",
          "prompt": "Dans la partie rédigée du sujet 1, Nahoubou est le dictateur satirisé dans :",
          "options": [
            "Rebelle de Fatou Keïta",
            "Tribaliques d’Henri Lopes",
            "On se chamaille pour un siège de Kacou",
            "Les voix dans le vent de Bernard B. Dadié"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La pièce de Dadié fait la satire du dictateur Nahoubou : c’est l’exemple développé dans le premier paragraphe rédigé."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p04_q6",
          "type": "mcq",
          "prompt": "Selon la leçon, quand on passe à une autre idée directrice, il faut :",
          "options": [
            "Continuer dans le même paragraphe",
            "Changer de paragraphe",
            "Recommencer une introduction",
            "Supprimer les exemples"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une idée directrice par paragraphe : le changement d’idée impose le changement de paragraphe."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05",
      "order": 5,
      "title": "Rédiger l’introduction et la conclusion",
      "summary": "Construire l’introduction (amorce, présentation du sujet, annonce du plan) et la conclusion (bilan, prise de position, ouverture).",
      "conceptExplanation": "L’introduction sert à présenter en un paragraphe le sujet et l’organisation du devoir. Elle remplit trois fonctions, qui en constituent les différents moments. L’amorce du sujet indique le thème général : on peut partir d’une réflexion générale sur le genre, l’histoire littéraire, le contexte historique ou culturel, ou appeler l’attention sur un fait paradoxal. La présentation du sujet consiste à citer intégralement l’opinion de l’auteur si elle est courte, ou à la reformuler si elle est longue ; il ne faut jamais se contenter de faire simplement allusion au sujet en le supposant déjà connu du lecteur ou du correcteur. L’annonce du plan met en évidence la problématique du sujet et indique les orientations des grandes parties du développement, sans anticiper sur l’aboutissement de l’argumentation.\nL’introduction rédigée pour le sujet 1 suit ces trois moments : amorce sur les critiques qui ne cessent de réfléchir sur le rôle de l’œuvre littéraire ; présentation intégrale de la citation de Roger Caillois, reformulée ensuite (« en d’autres termes, la littérature est le reflet de la société ») ; annonce sous forme de questions : en quoi l’œuvre littéraire est-elle le reflet de la société ? Quels en sont les autres aspects ?\nLa conclusion présente, en un paragraphe, le bilan de la réflexion et apporte une réponse claire aux questions posées par la problématique. Le bilan des analyses est le résumé de la démonstration, qui rappelle, sans les reprendre à l’identique, les conclusions partielles des grandes parties. La prise de position choisit le point de vue que l’on privilégie : le but de tout travail d’argumentation étant de convaincre, il faut faire un choix et éviter de dire son impuissance à conclure. L’ouverture, qui n’est pas indispensable, élargit le champ argumentatif par une mise en perspective historique, une question découlant de la réponse donnée, ou une citation qui laisse une impression forte. La conclusion rédigée du sujet 1 retient ainsi : la littérature reflète effectivement la société, mais elle présente aussi d’autres aspects (sentiments personnels, esthétique, fiction) ; ce caractère multidimensionnel constitue l’essence de l’œuvre littéraire, qu’il ne serait pas juste de réduire à un seul aspect ; l’ouverture demande s’il ne serait pas judicieux de s’interroger sur l’attente du lecteur.",
      "keyRule": "Introduction : amorce, présentation fidèle du sujet, annonce du plan. Conclusion : bilan, prise de position assumée, ouverture facultative.",
      "formulas": [],
      "workedExample": {
        "title": "Introduction et conclusion du sujet 2 (corrigés de la leçon)",
        "statement": "Rédige l’introduction et la conclusion du sujet 2 de Robert Rolland, en suivant les trois fonctions de chacune.",
        "methodSteps": [
          "Introduction, amorce : l’œuvre littéraire est délaissée depuis quelque temps au profit de la télévision et des nouveaux moyens de communication, cependant les écrivains ne cessent d’encourager la lecture.",
          "Introduction, présentation : citer l’affirmation de Robert Rolland — « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler ».",
          "Introduction, annonce : en quoi l’œuvre littéraire nous révèle-t-elle notre propre personne et nous aide-t-elle à nous rectifier ? N’a-t-elle que cette fonction dans la vie du lecteur ?",
          "Conclusion, bilan et position : le lecteur, en s’identifiant aux personnages et en épousant leurs sentiments et leurs vices, retrouve son humanité profonde et apprend à se rectifier ; mais le livre lui permet également de découvrir les autres, leur culture et leur histoire, ce qui rend sa portée plus grande.",
          "Conclusion, ouverture : eu égard aux nombreuses fonctions de la littérature, ne serait-il pas plus judicieux de découvrir toute l’influence réelle de la lecture sur la société ?"
        ],
        "conclusion": "Les corrigés du sujet 2 montrent les deux textes en miroir : l’introduction pose les deux questions, la conclusion y répond et ouvre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les trois fonctions de l’introduction",
          "stepTheme": "Les trois fonctions de l’introduction",
          "stepBadge": "Les trois fonctions de l’introduction",
          "paragraphText": "• Introduction de dissertation : un paragraphe qui présente le sujet et l’organisation du devoir, en trois moments.\n• L’amorce du sujet : indiquer le thème général\n• La présentation du sujet : citer ou reformuler l’opinion de l’auteur\n• L’annonce du plan : indiquer les orientations des grandes parties",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q1",
            "type": "mcq",
            "prompt": "L’amorce de l’introduction sert à :",
            "options": [
              "Faire le bilan du devoir",
              "Indiquer le thème général du sujet",
              "Prendre position contre l’auteur",
              "Citer un exemple du développement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’amorce ouvre sur le thème général, par une réflexion sur le genre, l’histoire littéraire, le contexte ou un fait paradoxal."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Présenter le sujet sans simple allusion",
          "stepTheme": "Présenter le sujet sans simple allusion",
          "stepBadge": "Présenter le sujet sans simple allusion",
          "paragraphText": "Méthode : présenter le sujet, c’est citer intégralement l’opinion de l’auteur si elle est courte, ou la reformuler si elle est longue.\nIl ne faut jamais se contenter d’une simple allusion, en supposant le sujet déjà connu du lecteur ou du correcteur.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q2",
            "type": "mcq",
            "prompt": "Une présentation du sujet correcte consiste à :",
            "options": [
              "Faire allusion au sujet en le supposant connu",
              "Éviter de mentionner l’auteur cité",
              "Citer intégralement l’opinion si elle est courte, ou la reformuler si elle est longue",
              "Commencer directement par les exemples"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Citation intégrale ou reformulation fidèle : la simple allusion est explicitement interdite par la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Annoncer le plan sans conclure d’avance",
          "stepTheme": "Annoncer le plan sans conclure d’avance",
          "stepBadge": "Annoncer le plan sans conclure d’avance",
          "paragraphText": "Propriété : l’annonce du plan met en évidence la problématique et indique les orientations des grandes parties du développement.\nElle ne doit pas anticiper sur l’aboutissement de l’argumentation : dans l’introduction du sujet 1, les deux parties sont annoncées sous forme de questions.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q3",
            "type": "mcq",
            "prompt": "L’annonce du plan de l’introduction du sujet 1 prend la forme :",
            "options": [
              "D’un bilan définitif",
              "De deux questions : en quoi l’œuvre est-elle le reflet de la société ? Quels en sont les autres aspects ?",
              "D’une liste d’exemples commentés",
              "D’une prise de position tranchée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les questions annoncent les parties sans livrer la réponse : l’aboutissement reste pour la conclusion."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le bilan de la conclusion",
          "stepTheme": "Le bilan de la conclusion",
          "stepBadge": "Le bilan de la conclusion",
          "paragraphText": "• Bilan des analyses : résumé de la démonstration, qui rappelle les conclusions partielles des grandes parties sans les reprendre à l’identique.\nPour le sujet 1 : la littérature reflète la société, mais elle est aussi sentiments personnels, esthétique et fiction — un caractère multidimensionnel qui est son essence.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q4",
            "type": "mcq",
            "prompt": "Le bilan de la conclusion doit rappeler les conclusions partielles :",
            "options": [
              "En les reprenant mot pour mot",
              "Sans les reprendre à l’identique",
              "En ajoutant de nouveaux arguments",
              "En les contredisant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résumer sans recopier : le bilan reformule les conclusions partielles pour répondre à la problématique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Déclarer son impuissance à conclure",
          "stepTheme": "Déclarer son impuissance à conclure",
          "stepBadge": "Déclarer son impuissance à conclure",
          "paragraphText": "Piège : terminer en disant qu’on ne peut pas conclure, ou refuser de choisir entre les thèses.\nLa leçon demande une prise de position : le but de tout travail d’argumentation étant de convaincre, il faut faire un choix, adopter le point de vue que l’on privilégie, et éviter de dire son impuissance à conclure.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q5",
            "type": "mcq",
            "prompt": "Dans la conclusion, la prise de position exige :",
            "options": [
              "De déclarer son impuissance à conclure",
              "De rester neutre sans aucun choix",
              "De répéter la citation du sujet",
              "De faire un choix et d’indiquer le point de vue que l’on privilégie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Convaincre suppose de trancher : la conclusion retient finalement une réponse claire à la problématique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’ouverture de la conclusion du sujet 1",
          "stepTheme": "L’ouverture de la conclusion du sujet 1",
          "stepBadge": "L’ouverture de la conclusion du sujet 1",
          "paragraphText": "Exemple : la conclusion du sujet 1 se ferme par une ouverture sous forme de question.\nAprès le bilan et la position (la littérature est multidimensionnelle), elle demande : pour mieux saisir le rôle de la littérature, ne serait-il pas judicieux de s’interroger sur l’attente du lecteur ?",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q6",
            "type": "mcq",
            "prompt": "L’ouverture de la conclusion du sujet 1 interroge :",
            "options": [
              "L’attente du lecteur",
              "La vie de Victor Hugo",
              "Le prix des livres",
              "La grammaire de la citation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ouverture élargit le débat vers l’attente du lecteur : une question qui découle de la réponse donnée, comme le prévoit la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q1",
          "type": "mcq",
          "prompt": "L’amorce de l’introduction sert à :",
          "options": [
            "Faire le bilan du devoir",
            "Indiquer le thème général du sujet",
            "Prendre position contre l’auteur",
            "Citer un exemple du développement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’amorce ouvre sur le thème général, par une réflexion sur le genre, l’histoire littéraire, le contexte ou un fait paradoxal."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q2",
          "type": "mcq",
          "prompt": "Une présentation du sujet correcte consiste à :",
          "options": [
            "Faire allusion au sujet en le supposant connu",
            "Éviter de mentionner l’auteur cité",
            "Citer intégralement l’opinion si elle est courte, ou la reformuler si elle est longue",
            "Commencer directement par les exemples"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Citation intégrale ou reformulation fidèle : la simple allusion est explicitement interdite par la leçon."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q3",
          "type": "mcq",
          "prompt": "L’annonce du plan de l’introduction du sujet 1 prend la forme :",
          "options": [
            "D’un bilan définitif",
            "De deux questions : en quoi l’œuvre est-elle le reflet de la société ? Quels en sont les autres aspects ?",
            "D’une liste d’exemples commentés",
            "D’une prise de position tranchée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les questions annoncent les parties sans livrer la réponse : l’aboutissement reste pour la conclusion."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q4",
          "type": "mcq",
          "prompt": "Le bilan de la conclusion doit rappeler les conclusions partielles :",
          "options": [
            "En les reprenant mot pour mot",
            "Sans les reprendre à l’identique",
            "En ajoutant de nouveaux arguments",
            "En les contredisant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résumer sans recopier : le bilan reformule les conclusions partielles pour répondre à la problématique."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q5",
          "type": "mcq",
          "prompt": "Dans la conclusion, la prise de position exige :",
          "options": [
            "De déclarer son impuissance à conclure",
            "De rester neutre sans aucun choix",
            "De répéter la citation du sujet",
            "De faire un choix et d’indiquer le point de vue que l’on privilégie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Convaincre suppose de trancher : la conclusion retient finalement une réponse claire à la problématique."
        },
        {
          "id": "premiere_a1_francais_ee_l02_dissertation_litteraire_p05_q6",
          "type": "mcq",
          "prompt": "L’ouverture de la conclusion du sujet 1 interroge :",
          "options": [
            "L’attente du lecteur",
            "La vie de Victor Hugo",
            "Le prix des livres",
            "La grammaire de la citation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ouverture élargit le débat vers l’attente du lecteur : une question qui découle de la réponse donnée, comme le prévoit la leçon."
        }
      ]
    }
  ]
};
