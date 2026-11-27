import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Les révolutions industrielles » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=878
export const HIST_1ERE_T1_L02_REVOLUTIONS_INDUSTRIELLES: CurriculumChapter = {
  "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles",
  "subjectId": "histoire_geo",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 2,
  "title": "Thème 1, leçon 2 : Les révolutions industrielles",
  "summary": "Parties de l'Angleterre, les révolutions industrielles font passer le monde de la production artisanale à la production par machines ; la leçon présente leurs facteurs, les caractères des deux révolutions et leurs conséquences sur la production, l'économie et la société.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=878",
  "points": [
    {
      "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01",
      "order": 1,
      "title": "Les facteurs financiers et naturels",
      "summary": "Identifier deux facteurs des révolutions industrielles : l'accumulation des capitaux et l'abondance des ressources naturelles.",
      "conceptExplanation": "L'Europe a accumulé d'énormes capitaux tirés du grand commerce atlantique. Ces capitaux sont placés dans les banques et financent la recherche et l'industrialisation.\nLes ressources naturelles sont abondantes. Le charbon, ou houille, est la première source d'énergie : il est abondant, facile à extraire et à transporter. Le fer voit sa production croître grâce aux nouvelles techniques, comme la fonte au coke, et ce matériau remplace le bois dans l'industrie. Le coton est une matière première importée, mais abondante et très prisée pour la qualité de sa fibre.",
      "keyRule": "Sans capitaux accumulés ni ressources abondantes comme la houille, le fer et le coton, pas de révolution industrielle.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le rôle des capitaux atlantiques",
        "statement": "Dans la situation d'évaluation, un tuteur affirme que les révolutions industrielles ont été possibles grâce à un ensemble de conditions économiques et scientifiques que réunissait l'Angleterre. Retrouve la condition financière.",
        "methodSteps": [
          "L'Europe a accumulé d'énormes capitaux tirés du grand commerce atlantique.",
          "Ces capitaux sont placés dans les banques.",
          "Ils financent la recherche et l'industrialisation."
        ],
        "conclusion": "L'accumulation financière est un facteur déclencheur : elle fournit l'argent nécessaire aux machines et aux usines."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'accumulation des capitaux",
          "stepTheme": "L'accumulation des capitaux",
          "stepBadge": "L'accumulation des capitaux",
          "paragraphText": "• Accumulation financière : l'Europe a accumulé d'énormes capitaux tirés du grand commerce atlantique.\nCes capitaux sont placés dans les banques et financent la recherche et l'industrialisation.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q1",
            "type": "mcq",
            "prompt": "Les capitaux à l'origine des révolutions industrielles proviennent :",
            "options": [
              "Du grand commerce atlantique",
              "Des seuls impôts des colonies",
              "De la vente des terres agricoles",
              "Des cotisations des syndicats"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon indique que l'Europe a accumulé d'énormes capitaux tirés du grand commerce atlantique, placés dans les banques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La houille, première source d'énergie",
          "stepTheme": "La houille, première source d'énergie",
          "stepBadge": "La houille, première source d'énergie",
          "paragraphText": "• Houille ou charbon : première source d'énergie des révolutions industrielles.\nElle est abondante, facile à extraire et à transporter, ce qui en fait un facteur naturel déterminant.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q2",
            "type": "mcq",
            "prompt": "La houille est présentée comme :",
            "options": [
              "Une matière première importée rare",
              "La première source d'énergie, abondante et facile à extraire et à transporter",
              "Un produit de l'industrie chimique",
              "Un métal qui remplace le bois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, le charbon est la première source d'énergie, abondante, facile à extraire et à transporter."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le fer remplace le bois",
          "stepTheme": "Le fer remplace le bois",
          "stepBadge": "Le fer remplace le bois",
          "paragraphText": "Le fer voit sa production croître grâce aux nouvelles techniques, comme la fonte au coke.\nCe matériau remplace le bois dans l'industrie.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q3",
            "type": "mcq",
            "prompt": "Grâce aux nouvelles techniques, le fer remplace dans l'industrie :",
            "options": [
              "Le coton",
              "Le pétrole",
              "Le bois",
              "La houille"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise que le fer, dont la production croît grâce à la fonte au coke, remplace le bois dans l'industrie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le coton, matière première prisée",
          "stepTheme": "Le coton, matière première prisée",
          "stepBadge": "Le coton, matière première prisée",
          "paragraphText": "• Coton : matière première importée, mais abondante et très prisée pour la qualité de sa fibre.\nIl alimente l'industrie textile, secteur des premières innovations.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q4",
            "type": "mcq",
            "prompt": "Le coton est recherché surtout pour :",
            "options": [
              "Sa production d'énergie",
              "La qualité de sa fibre",
              "Son usage dans la métallurgie",
              "Sa fabrication de vaccins"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon présente le coton comme une matière première importée, abondante et très prisée pour la qualité de sa fibre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre facteur financier et facteur technique",
          "stepTheme": "Confondre facteur financier et facteur technique",
          "stepBadge": "Confondre facteur financier et facteur technique",
          "paragraphText": "Piège : la machine à vapeur est un progrès technique, pas le facteur financier.\nLe facteur financier, ce sont les capitaux du grand commerce atlantique placés dans les banques pour financer la recherche et l'industrialisation.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q5",
            "type": "mcq",
            "prompt": "Quel élément relève du facteur financier ?",
            "options": [
              "La machine à vapeur de James Watt",
              "Le coke de la métallurgie",
              "Les capitaux du grand commerce atlantique placés dans les banques",
              "Le vaccin contre la rage"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les capitaux accumulés et placés dans les banques constituent le facteur financier ; les inventions relèvent des progrès techniques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des capitaux qui financent l'industrialisation",
          "stepTheme": "Des capitaux qui financent l'industrialisation",
          "stepBadge": "Des capitaux qui financent l'industrialisation",
          "paragraphText": "Exemple : les capitaux placés dans les banques financent la recherche et l'industrialisation.\nC'est ce financement qui permet de construire les usines et d'acheter les machines.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q6",
            "type": "mcq",
            "prompt": "Selon la leçon, les capitaux placés dans les banques servent à :",
            "options": [
              "Financer la recherche et l'industrialisation",
              "Supprimer les usines",
              "Interdire le commerce atlantique",
              "Payer uniquement les salaires agricoles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon indique que ces capitaux financent la recherche et l'industrialisation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q1",
          "type": "mcq",
          "prompt": "Les capitaux à l'origine des révolutions industrielles proviennent :",
          "options": [
            "Du grand commerce atlantique",
            "Des seuls impôts des colonies",
            "De la vente des terres agricoles",
            "Des cotisations des syndicats"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon indique que l'Europe a accumulé d'énormes capitaux tirés du grand commerce atlantique, placés dans les banques."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q2",
          "type": "mcq",
          "prompt": "La houille est présentée comme :",
          "options": [
            "Une matière première importée rare",
            "La première source d'énergie, abondante et facile à extraire et à transporter",
            "Un produit de l'industrie chimique",
            "Un métal qui remplace le bois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, le charbon est la première source d'énergie, abondante, facile à extraire et à transporter."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q3",
          "type": "mcq",
          "prompt": "Grâce aux nouvelles techniques, le fer remplace dans l'industrie :",
          "options": [
            "Le coton",
            "Le pétrole",
            "Le bois",
            "La houille"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise que le fer, dont la production croît grâce à la fonte au coke, remplace le bois dans l'industrie."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q4",
          "type": "mcq",
          "prompt": "Le coton est recherché surtout pour :",
          "options": [
            "Sa production d'énergie",
            "La qualité de sa fibre",
            "Son usage dans la métallurgie",
            "Sa fabrication de vaccins"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon présente le coton comme une matière première importée, abondante et très prisée pour la qualité de sa fibre."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q5",
          "type": "mcq",
          "prompt": "Quel élément relève du facteur financier ?",
          "options": [
            "La machine à vapeur de James Watt",
            "Le coke de la métallurgie",
            "Les capitaux du grand commerce atlantique placés dans les banques",
            "Le vaccin contre la rage"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les capitaux accumulés et placés dans les banques constituent le facteur financier ; les inventions relèvent des progrès techniques."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p01_q6",
          "type": "mcq",
          "prompt": "Selon la leçon, les capitaux placés dans les banques servent à :",
          "options": [
            "Financer la recherche et l'industrialisation",
            "Supprimer les usines",
            "Interdire le commerce atlantique",
            "Payer uniquement les salaires agricoles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon indique que ces capitaux financent la recherche et l'industrialisation."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02",
      "order": 2,
      "title": "Des progrès techniques déterminants",
      "summary": "Présenter les inventions et découvertes qui ont rendu les révolutions industrielles possibles.",
      "conceptExplanation": "L'invention de la machine à vapeur par James Watt en 1769 et du métier à tisser mécanique par Richard Arkwright permettent de remplacer la force animale et humaine et de mécaniser le tissage du coton. Les progrès de la métallurgie viennent avec la découverte du coke : le coke apparaît en Angleterre et découle de la houille transformée dans un four ; il remplace le charbon de bois, qui était la première source d'énergie.\nLe courant électrique est découvert par André-Marie Ampère en 1820. Le pétrole est utilisé comme source d'énergie dans les industries à partir de 1850. Les découvertes de Louis Pasteur, le vaccin contre la rage en 1885 et la pasteurisation en 1867, permettent de conserver les aliments et de lutter contre les maladies. La découverte de la radioactivité en 1896 par Henri Becquerel va permettre des avancées dans la médecine. La révolution des transports passe par l'ouverture des canaux de Suez et de Panama et par la construction des grands voiliers.",
      "keyRule": "Chaque invention a son inventeur et sa date dans la leçon : Watt 1769, Ampère 1820, Pasteur 1867 et 1885, Becquerel 1896.",
      "formulas": [],
      "workedExample": {
        "title": "Relier les inventions à leurs inventeurs",
        "statement": "L'activité d'application demande de relier : caméra, dynamite, vaccin contre la rage, moteur à explosion et machine à vapeur à Diesel, Louis Pasteur, James Watt, Alfred Nobel et les frères Lumière.",
        "methodSteps": [
          "La machine à vapeur revient à James Watt.",
          "Le vaccin contre la rage revient à Louis Pasteur.",
          "La dynamite revient à Alfred Nobel.",
          "Le moteur à explosion est associé à Diesel dans l'activité, et la caméra aux frères Lumière."
        ],
        "conclusion": "Relier correctement chaque invention à son inventeur vérifie la maîtrise des progrès techniques de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La machine à vapeur de James Watt",
          "stepTheme": "La machine à vapeur de James Watt",
          "stepBadge": "La machine à vapeur de James Watt",
          "paragraphText": "• Machine à vapeur : invention de James Watt en 1769.\nAvec le métier à tisser mécanique de Richard Arkwright, elle permet de remplacer la force animale et humaine et de mécaniser le tissage du coton.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q1",
            "type": "mcq",
            "prompt": "La machine à vapeur a été inventée par :",
            "options": [
              "John Kay",
              "James Watt, en 1769",
              "André-Marie Ampère",
              "Louis Pasteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'activité d'application le confirme : l'affirmation attribuant la machine à vapeur à John Kay est fausse ; elle est de James Watt, en 1769."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le coke dans la métallurgie",
          "stepTheme": "Le coke dans la métallurgie",
          "stepBadge": "Le coke dans la métallurgie",
          "paragraphText": "• Coke : il découle de la houille transformée dans un four et apparaît en Angleterre.\nIl remplace le charbon de bois, qui était la première source d'énergie, et fait progresser la métallurgie.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q2",
            "type": "mcq",
            "prompt": "Le coke est obtenu :",
            "options": [
              "À partir du pétrole raffiné",
              "À partir du coton compressé",
              "De la houille transformée dans un four",
              "Par la fonte du fer seul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Selon la leçon, le coke découle de la houille transformée dans un four et remplace le charbon de bois."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'électricité et le pétrole",
          "stepTheme": "L'électricité et le pétrole",
          "stepBadge": "L'électricité et le pétrole",
          "paragraphText": "Le courant électrique est découvert par André-Marie Ampère en 1820.\nLe pétrole est utilisé comme source d'énergie dans les industries à partir de 1850.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q3",
            "type": "mcq",
            "prompt": "Le courant électrique est découvert en 1820 par :",
            "options": [
              "Henri Becquerel",
              "Richard Arkwright",
              "James Watt",
              "André-Marie Ampère"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la découverte attribuée à André-Marie Ampère en 1820 dans la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les découvertes de Louis Pasteur",
          "stepTheme": "Les découvertes de Louis Pasteur",
          "stepBadge": "Les découvertes de Louis Pasteur",
          "paragraphText": "Exemple : Louis Pasteur met au point la pasteurisation en 1867, qui permet de conserver les aliments.\nIl découvre aussi le vaccin contre la rage en 1885, qui permet de lutter contre les maladies.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q4",
            "type": "mcq",
            "prompt": "La pasteurisation, découverte par Louis Pasteur en 1867, permet :",
            "options": [
              "De mécaniser le tissage",
              "De conserver les aliments",
              "De produire de l'acier",
              "D'ouvrir des canaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que la pasteurisation permet de conserver les aliments ; le vaccin contre la rage, en 1885, lutte contre les maladies."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Dater la radioactivité",
          "stepTheme": "Dater la radioactivité",
          "stepBadge": "Dater la radioactivité",
          "paragraphText": "Piège : la radioactivité n'est pas découverte au XVIIIe siècle.\nElle est découverte en 1896 par Henri Becquerel et va permettre des avancées dans la médecine.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q5",
            "type": "mcq",
            "prompt": "La radioactivité est découverte :",
            "options": [
              "En 1769 par James Watt",
              "En 1820 par Ampère",
              "En 1896 par Henri Becquerel",
              "En 1850 par Pasteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon date la découverte de la radioactivité de 1896 et l'attribue à Henri Becquerel."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La révolution des transports",
          "stepTheme": "La révolution des transports",
          "stepBadge": "La révolution des transports",
          "paragraphText": "La leçon range parmi les progrès la révolution des transports.\nElle passe par l'ouverture des canaux de Suez et de Panama et par la construction des grands voiliers.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q6",
            "type": "mcq",
            "prompt": "La révolution des transports citée dans la leçon comprend :",
            "options": [
              "L'ouverture des canaux de Suez et de Panama",
              "La seule invention du vaccin",
              "La découverte du coke",
              "La pasteurisation des aliments"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les éléments de transport donnés par la leçon : canaux de Suez et de Panama et grands voiliers."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q1",
          "type": "mcq",
          "prompt": "La machine à vapeur a été inventée par :",
          "options": [
            "John Kay",
            "James Watt, en 1769",
            "André-Marie Ampère",
            "Louis Pasteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'activité d'application le confirme : l'affirmation attribuant la machine à vapeur à John Kay est fausse ; elle est de James Watt, en 1769."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q2",
          "type": "mcq",
          "prompt": "Le coke est obtenu :",
          "options": [
            "À partir du pétrole raffiné",
            "À partir du coton compressé",
            "De la houille transformée dans un four",
            "Par la fonte du fer seul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Selon la leçon, le coke découle de la houille transformée dans un four et remplace le charbon de bois."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q3",
          "type": "mcq",
          "prompt": "Le courant électrique est découvert en 1820 par :",
          "options": [
            "Henri Becquerel",
            "Richard Arkwright",
            "James Watt",
            "André-Marie Ampère"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la découverte attribuée à André-Marie Ampère en 1820 dans la leçon."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q4",
          "type": "mcq",
          "prompt": "La pasteurisation, découverte par Louis Pasteur en 1867, permet :",
          "options": [
            "De mécaniser le tissage",
            "De conserver les aliments",
            "De produire de l'acier",
            "D'ouvrir des canaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que la pasteurisation permet de conserver les aliments ; le vaccin contre la rage, en 1885, lutte contre les maladies."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q5",
          "type": "mcq",
          "prompt": "La radioactivité est découverte :",
          "options": [
            "En 1769 par James Watt",
            "En 1820 par Ampère",
            "En 1896 par Henri Becquerel",
            "En 1850 par Pasteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon date la découverte de la radioactivité de 1896 et l'attribue à Henri Becquerel."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p02_q6",
          "type": "mcq",
          "prompt": "La révolution des transports citée dans la leçon comprend :",
          "options": [
            "L'ouverture des canaux de Suez et de Panama",
            "La seule invention du vaccin",
            "La découverte du coke",
            "La pasteurisation des aliments"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les éléments de transport donnés par la leçon : canaux de Suez et de Panama et grands voiliers."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03",
      "order": 3,
      "title": "La première révolution industrielle",
      "summary": "Caractériser la première révolution : née en Angleterre, fondée sur le charbon, la machine à vapeur et le textile.",
      "conceptExplanation": "La première révolution industrielle est née en Angleterre dans le dernier tiers du XVIIIe siècle. Son essor a été rapide avec l'invention de la machine à vapeur par James Watt en 1769, qui fonctionne avec la houille, ou charbon de terre, comme source d'énergie.\nLe travail artisanal est remplacé par les machines. Les premières innovations ont lieu dans l'artisanat et surtout dans le textile et la mécanique : la machine à filer de Richard Arkwright et la machine à tisser de Cartwright révolutionnent le métier à tisser.\nLe tableau de la leçon précise : période de 1780 à 1810, pays initiateur le Royaume-Uni, énergie dominante le charbon et la machine à vapeur, activités dominantes le textile, la fonte et le développement du chemin de fer. La population active voit diminuer le secteur primaire et augmenter le secteur secondaire. Sur le plan social : exode rural, urbanisation accélérée, croissance de la classe ouvrière et de la bourgeoisie d'affaires.",
      "keyRule": "Première révolution : Angleterre, dernier tiers du XVIIIe siècle, charbon et vapeur, textile d'abord.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le tableau de la première révolution",
        "statement": "À partir du tableau de la leçon, retrouve le pays initiateur, l'énergie dominante et les activités dominantes de la première révolution industrielle.",
        "methodSteps": [
          "Pays initiateur : le Royaume-Uni.",
          "Énergie dominante : le charbon et la machine à vapeur.",
          "Activités dominantes : les textiles, la fonte, le développement du chemin de fer et de la machine à vapeur."
        ],
        "conclusion": "Le tableau résume la première révolution : une révolution anglaise du charbon, de la vapeur et du textile."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Naissance en Angleterre",
          "stepTheme": "Naissance en Angleterre",
          "stepBadge": "Naissance en Angleterre",
          "paragraphText": "• Première révolution industrielle : née en Angleterre dans le dernier tiers du XVIIIe siècle.\nElle désigne le passage de la production artisanale à une production avec l'utilisation des machines.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q1",
            "type": "mcq",
            "prompt": "La première révolution industrielle est née :",
            "options": [
              "En Allemagne au XIXe siècle",
              "En Angleterre dans le dernier tiers du XVIIIe siècle",
              "Aux États-Unis en 1900",
              "En France au Moyen Âge"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon et son activité d'application le confirment : la première révolution industrielle a vu le jour en Angleterre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le charbon et la machine à vapeur",
          "stepTheme": "Le charbon et la machine à vapeur",
          "stepBadge": "Le charbon et la machine à vapeur",
          "paragraphText": "L'énergie dominante de la première révolution est le charbon, avec la machine à vapeur de James Watt, de 1769.\nLa machine à vapeur fonctionne avec la houille, ou charbon de terre, comme source d'énergie.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q2",
            "type": "mcq",
            "prompt": "La première révolution industrielle est soutenue par :",
            "options": [
              "Le pétrole uniquement",
              "L'électricité uniquement",
              "La houille, avec la machine à vapeur",
              "La seule force humaine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'exercice de la leçon le valide : la première révolution est soutenue par la houille."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le textile mécanisé",
          "stepTheme": "Le textile mécanisé",
          "stepBadge": "Le textile mécanisé",
          "paragraphText": "Exemple : les premières innovations ont lieu dans l'artisanat et surtout dans le textile et la mécanique.\nLa machine à filer de Richard Arkwright et la machine à tisser de Cartwright révolutionnent le métier à tisser, et le travail artisanal est remplacé par les machines.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q3",
            "type": "mcq",
            "prompt": "Les premières innovations de la première révolution concernent surtout :",
            "options": [
              "La chimie et l'automobile",
              "Le textile et la mécanique",
              "L'aviation",
              "La médecine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, les premières innovations ont lieu dans le textile et la mécanique, avec les machines d'Arkwright et de Cartwright."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Lire les traits sociaux du tableau",
          "stepTheme": "Lire les traits sociaux du tableau",
          "stepBadge": "Lire les traits sociaux du tableau",
          "paragraphText": "Le tableau de la leçon décrit les aspects sociaux de la première révolution.\nOn y lit : exode rural, urbanisation accélérée, croissance de la classe ouvrière et de la bourgeoisie d'affaires ; la population active diminue dans le secteur primaire et augmente dans le secteur secondaire.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q4",
            "type": "mcq",
            "prompt": "D'après le tableau de la leçon, la première révolution entraîne :",
            "options": [
              "Une baisse de la population urbaine",
              "Un retour massif à l'artisanat",
              "Un exode rural et une urbanisation accélérée",
              "La disparition de la classe ouvrière"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les aspects sociaux du tableau : exode rural, urbanisation accélérée, croissance de la classe ouvrière et de la bourgeoisie d'affaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre les deux révolutions",
          "stepTheme": "Confondre les deux révolutions",
          "stepBadge": "Confondre les deux révolutions",
          "paragraphText": "Piège : le pétrole et l'électricité ne caractérisent pas la première révolution.\nIls marquent la seconde ; la première repose sur le charbon et la machine à vapeur, en Angleterre.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q5",
            "type": "mcq",
            "prompt": "Quel couple caractérise la première révolution industrielle ?",
            "options": [
              "Pétrole et moteur à explosion",
              "Électricité et automobile",
              "Charbon et machine à vapeur",
              "Acier et industries chimiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La première révolution est celle du charbon et de la vapeur ; pétrole, électricité, acier et chimie relèvent de la seconde."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La révolution industrielle comme passage",
          "stepTheme": "La révolution industrielle comme passage",
          "stepBadge": "La révolution industrielle comme passage",
          "paragraphText": "• Révolution industrielle : période allant du XVIIIe au début du XXe siècle, passage de la production artisanale à une production avec l'utilisation des machines.\nElle est partie de l'Angleterre avant de s'étendre au reste du monde.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q6",
            "type": "mcq",
            "prompt": "La révolution industrielle désigne :",
            "options": [
              "Le retour à la production artisanale",
              "Le passage de la production artisanale à une production avec l'utilisation des machines",
              "La seule ouverture des canaux",
              "La baisse de la population européenne"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de l'introduction de la leçon : un passage de l'artisanat à la machine, parti de l'Angleterre."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q1",
          "type": "mcq",
          "prompt": "La première révolution industrielle est née :",
          "options": [
            "En Allemagne au XIXe siècle",
            "En Angleterre dans le dernier tiers du XVIIIe siècle",
            "Aux États-Unis en 1900",
            "En France au Moyen Âge"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon et son activité d'application le confirment : la première révolution industrielle a vu le jour en Angleterre."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q2",
          "type": "mcq",
          "prompt": "La première révolution industrielle est soutenue par :",
          "options": [
            "Le pétrole uniquement",
            "L'électricité uniquement",
            "La houille, avec la machine à vapeur",
            "La seule force humaine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'exercice de la leçon le valide : la première révolution est soutenue par la houille."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q3",
          "type": "mcq",
          "prompt": "Les premières innovations de la première révolution concernent surtout :",
          "options": [
            "La chimie et l'automobile",
            "Le textile et la mécanique",
            "L'aviation",
            "La médecine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, les premières innovations ont lieu dans le textile et la mécanique, avec les machines d'Arkwright et de Cartwright."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q4",
          "type": "mcq",
          "prompt": "D'après le tableau de la leçon, la première révolution entraîne :",
          "options": [
            "Une baisse de la population urbaine",
            "Un retour massif à l'artisanat",
            "Un exode rural et une urbanisation accélérée",
            "La disparition de la classe ouvrière"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les aspects sociaux du tableau : exode rural, urbanisation accélérée, croissance de la classe ouvrière et de la bourgeoisie d'affaires."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q5",
          "type": "mcq",
          "prompt": "Quel couple caractérise la première révolution industrielle ?",
          "options": [
            "Pétrole et moteur à explosion",
            "Électricité et automobile",
            "Charbon et machine à vapeur",
            "Acier et industries chimiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La première révolution est celle du charbon et de la vapeur ; pétrole, électricité, acier et chimie relèvent de la seconde."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p03_q6",
          "type": "mcq",
          "prompt": "La révolution industrielle désigne :",
          "options": [
            "Le retour à la production artisanale",
            "Le passage de la production artisanale à une production avec l'utilisation des machines",
            "La seule ouverture des canaux",
            "La baisse de la population européenne"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de l'introduction de la leçon : un passage de l'artisanat à la machine, parti de l'Angleterre."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04",
      "order": 4,
      "title": "La deuxième révolution industrielle",
      "summary": "Caractériser la seconde révolution : nouvelles énergies, nombreuses innovations et extension au monde.",
      "conceptExplanation": "La deuxième révolution industrielle débute dans la seconde moitié du XIXe siècle en Amérique du Nord et en Allemagne. Elle va ensuite s'étendre à toute l'Europe et au Japon. Elle est marquée par l'utilisation de nouvelles sources d'énergie comme le pétrole, l'électricité et le moteur à explosion. Cette nouvelle révolution est une révolution technique, marquée par l'invention de plusieurs machines et diverses découvertes dans de nombreux domaines.\nLe tableau de la leçon précise : pays initiateurs les États-Unis, sur la côte Est, et l'Allemagne, en Rhénanie ; énergie dominante le début du pétrole et l'électricité ; activités dominantes de nombreuses innovations techniques et scientifiques, la sidérurgie avec l'acier, l'automobile, les constructions navales, les industries chimiques et les agro-industries. La structure économique connaît une forte capitalisation, une concentration financière et industrielle et un travail mécanisé. Sur le plan social : prédominance de la population urbaine, essor des classes moyennes et hausse du niveau de vie.",
      "keyRule": "Deuxième révolution : seconde moitié du XIXe siècle, Amérique du Nord et Allemagne, pétrole, électricité et moteur à explosion.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer les deux révolutions à partir des tableaux",
        "statement": "Compare les énergies dominantes des deux révolutions d'après les tableaux de la leçon.",
        "methodSteps": [
          "Première révolution : charbon et machine à vapeur.",
          "Deuxième révolution : début du pétrole et électricité, avec le moteur à explosion.",
          "La seconde ajoute la sidérurgie, l'automobile, les constructions navales et les industries chimiques."
        ],
        "conclusion": "Le changement d'énergie dominante est le critère le plus simple pour distinguer les deux révolutions."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Début et extension de la seconde révolution",
          "stepTheme": "Début et extension de la seconde révolution",
          "stepBadge": "Début et extension de la seconde révolution",
          "paragraphText": "• Deuxième révolution industrielle : elle débute dans la seconde moitié du XIXe siècle en Amérique du Nord et en Allemagne.\nElle s'étend ensuite à toute l'Europe et au Japon.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q1",
            "type": "mcq",
            "prompt": "La deuxième révolution industrielle débute :",
            "options": [
              "En Angleterre au XVIIIe siècle",
              "Dans la seconde moitié du XIXe siècle, en Amérique du Nord et en Allemagne",
              "En France au Moyen Âge",
              "En Afrique au XXe siècle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon situe le début de la seconde révolution dans la seconde moitié du XIXe siècle, en Amérique du Nord et en Allemagne."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les nouvelles sources d'énergie",
          "stepTheme": "Les nouvelles sources d'énergie",
          "stepBadge": "Les nouvelles sources d'énergie",
          "paragraphText": "La seconde révolution est marquée par l'utilisation de nouvelles sources d'énergie.\nCe sont le pétrole, l'électricité et le moteur à explosion.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q2",
            "type": "mcq",
            "prompt": "Les nouvelles énergies de la deuxième révolution sont :",
            "options": [
              "Le charbon de bois seul",
              "La force animale",
              "Le pétrole, l'électricité et le moteur à explosion",
              "La seule houille"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les trois nouvelles sources d'énergie citées par la leçon pour la seconde révolution."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La sidérurgie et l'automobile",
          "stepTheme": "La sidérurgie et l'automobile",
          "stepBadge": "La sidérurgie et l'automobile",
          "paragraphText": "Exemple d'activités dominantes de la seconde révolution, d'après le tableau : la sidérurgie avec l'acier et l'automobile.\nS'y ajoutent les constructions navales, les industries chimiques et les agro-industries.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q3",
            "type": "mcq",
            "prompt": "Parmi ces activités, laquelle domine dans la deuxième révolution ?",
            "options": [
              "Le tissage artisanal",
              "La sidérurgie avec l'acier et l'automobile",
              "La fonte au charbon de bois",
              "Le commerce des esclaves"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau de la leçon cite la sidérurgie, l'automobile, les constructions navales, les industries chimiques et les agro-industries."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Une révolution technique",
          "stepTheme": "Une révolution technique",
          "stepBadge": "Une révolution technique",
          "paragraphText": "La leçon qualifie la seconde révolution de révolution technique.\nElle est marquée par l'invention de plusieurs machines et diverses découvertes dans de nombreux domaines.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q4",
            "type": "mcq",
            "prompt": "La deuxième révolution est qualifiée de révolution technique parce qu'elle est marquée par :",
            "options": [
              "Le retour aux ateliers familiaux",
              "L'invention de plusieurs machines et diverses découvertes dans de nombreux domaines",
              "La baisse des innovations",
              "La seule croissance agricole"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la justification donnée par la leçon : multiplication des machines et des découvertes dans de nombreux domaines."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La seconde révolution soutenue par la seule électricité",
          "stepTheme": "La seconde révolution soutenue par la seule électricité",
          "stepBadge": "La seconde révolution soutenue par la seule électricité",
          "paragraphText": "Piège tiré des exercices : l'affirmation « la deuxième révolution industrielle est soutenue uniquement par l'énergie électrique » est fausse.\nElle repose aussi sur le pétrole et le moteur à explosion.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q5",
            "type": "mcq",
            "prompt": "La deuxième révolution industrielle repose :",
            "options": [
              "Uniquement sur l'électricité",
              "Sur le pétrole, l'électricité et le moteur à explosion",
              "Uniquement sur la houille",
              "Sur la force humaine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon cite trois nouvelles sources d'énergie ; réduire la seconde révolution à la seule électricité est l'erreur signalée dans les exercices."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Forte capitalisation et classes moyennes",
          "stepTheme": "Forte capitalisation et classes moyennes",
          "stepBadge": "Forte capitalisation et classes moyennes",
          "paragraphText": "Le tableau de la seconde révolution indique une forte capitalisation et une concentration financière et industrielle.\nSur le plan social : prédominance de la population urbaine, essor des classes moyennes et hausse du niveau de vie.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q6",
            "type": "mcq",
            "prompt": "D'après le tableau, la deuxième révolution s'accompagne :",
            "options": [
              "D'une faible capitalisation",
              "D'une baisse du niveau de vie",
              "D'une forte capitalisation et de l'essor des classes moyennes",
              "D'un retour de la population à la campagne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les traits du tableau : forte capitalisation, concentration, prédominance urbaine, essor des classes moyennes et hausse du niveau de vie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q1",
          "type": "mcq",
          "prompt": "La deuxième révolution industrielle débute :",
          "options": [
            "En Angleterre au XVIIIe siècle",
            "Dans la seconde moitié du XIXe siècle, en Amérique du Nord et en Allemagne",
            "En France au Moyen Âge",
            "En Afrique au XXe siècle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon situe le début de la seconde révolution dans la seconde moitié du XIXe siècle, en Amérique du Nord et en Allemagne."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q2",
          "type": "mcq",
          "prompt": "Les nouvelles énergies de la deuxième révolution sont :",
          "options": [
            "Le charbon de bois seul",
            "La force animale",
            "Le pétrole, l'électricité et le moteur à explosion",
            "La seule houille"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les trois nouvelles sources d'énergie citées par la leçon pour la seconde révolution."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q3",
          "type": "mcq",
          "prompt": "Parmi ces activités, laquelle domine dans la deuxième révolution ?",
          "options": [
            "Le tissage artisanal",
            "La sidérurgie avec l'acier et l'automobile",
            "La fonte au charbon de bois",
            "Le commerce des esclaves"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau de la leçon cite la sidérurgie, l'automobile, les constructions navales, les industries chimiques et les agro-industries."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q4",
          "type": "mcq",
          "prompt": "La deuxième révolution est qualifiée de révolution technique parce qu'elle est marquée par :",
          "options": [
            "Le retour aux ateliers familiaux",
            "L'invention de plusieurs machines et diverses découvertes dans de nombreux domaines",
            "La baisse des innovations",
            "La seule croissance agricole"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la justification donnée par la leçon : multiplication des machines et des découvertes dans de nombreux domaines."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q5",
          "type": "mcq",
          "prompt": "La deuxième révolution industrielle repose :",
          "options": [
            "Uniquement sur l'électricité",
            "Sur le pétrole, l'électricité et le moteur à explosion",
            "Uniquement sur la houille",
            "Sur la force humaine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon cite trois nouvelles sources d'énergie ; réduire la seconde révolution à la seule électricité est l'erreur signalée dans les exercices."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p04_q6",
          "type": "mcq",
          "prompt": "D'après le tableau, la deuxième révolution s'accompagne :",
          "options": [
            "D'une faible capitalisation",
            "D'une baisse du niveau de vie",
            "D'une forte capitalisation et de l'essor des classes moyennes",
            "D'un retour de la population à la campagne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les traits du tableau : forte capitalisation, concentration, prédominance urbaine, essor des classes moyennes et hausse du niveau de vie."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05",
      "order": 5,
      "title": "Nouveaux modes de production et organisation économique",
      "summary": "Décrire les conséquences productives : taylorisation, standardisation et trois formes de concentration.",
      "conceptExplanation": "La forte demande de consommation, due à l'augmentation de la population, exige de nouveaux modes de production. La taylorisation, ou taylorisme, ou travail à la chaîne, est l'organisation scientifique du travail qui consiste à spécialiser toutes les tâches ou techniques de production ; ce système a été inventé par l'ingénieur américain Frederick Taylor dans les années 1880 pour avoir un rendement maximum. La standardisation est la production d'objets identiques en grand nombre à partir d'un modèle.\nUne nouvelle organisation économique apparaît. La concentration verticale consiste à regrouper des entreprises qui sont complémentaires dans la fabrication de produits. La concentration horizontale est le regroupement des entreprises qui fabriquent le même produit. La concentration géographique consiste à installer l'industrie à proximité des sources de matières premières ou d'énergies.",
      "keyRule": "Taylorisme égale spécialisation des tâches pour un rendement maximum ; standardisation égale objets identiques en grand nombre.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte de l'activité d'application",
        "statement": "L'activité d'application demande de compléter un texte avec : concentration verticale, explosion urbaine, révolution des transports, exode rural et taylorisation. Une forme d'organisation permet de spécialiser les tâches : laquelle ?",
        "methodSteps": [
          "Spécialiser les tâches relève de l'organisation scientifique du travail.",
          "Cette organisation est la taylorisation, inventée par Frederick Taylor.",
          "La concentration verticale, elle, regroupe des entreprises complémentaires dans la fabrication d'un produit."
        ],
        "conclusion": "Dans le texte à compléter, la spécialisation des tâches correspond à la taylorisation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La taylorisation de Frederick Taylor",
          "stepTheme": "La taylorisation de Frederick Taylor",
          "stepBadge": "La taylorisation de Frederick Taylor",
          "paragraphText": "• Taylorisation ou travail à la chaîne : organisation scientifique du travail qui consiste à spécialiser toutes les tâches ou techniques de production.\nCe système a été inventé par l'ingénieur américain Frederick Taylor dans les années 1880 pour avoir un rendement maximum.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q1",
            "type": "mcq",
            "prompt": "La taylorisation consiste à :",
            "options": [
              "Produire des objets identiques à partir d'un modèle",
              "Spécialiser toutes les tâches de production pour un rendement maximum",
              "Regrouper les entreprises du même produit",
              "Installer l'usine près des matières premières"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la taylorisation comme l'organisation scientifique du travail par spécialisation des tâches, inventée par Frederick Taylor dans les années 1880."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La standardisation",
          "stepTheme": "La standardisation",
          "stepBadge": "La standardisation",
          "paragraphText": "• Standardisation : production d'objets identiques en grand nombre à partir d'un modèle.\nElle répond à la forte demande de consommation due à l'augmentation de la population.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q2",
            "type": "mcq",
            "prompt": "La standardisation, c'est :",
            "options": [
              "L'organisation scientifique du travail",
              "La spécialisation des tâches",
              "La production d'objets identiques en grand nombre à partir d'un modèle",
              "Le regroupement des entreprises complémentaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition de la leçon ; l'exercice précise d'ailleurs que définir la standardisation comme l'organisation scientifique du travail est une confusion."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La concentration verticale",
          "stepTheme": "La concentration verticale",
          "stepBadge": "La concentration verticale",
          "paragraphText": "• Concentration verticale : regrouper des entreprises qui sont complémentaires dans la fabrication de produits.\nElle permet à plusieurs entreprises intervenant dans la fabrication d'un produit de maximiser leurs profits.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q3",
            "type": "mcq",
            "prompt": "La concentration verticale regroupe des entreprises :",
            "options": [
              "Qui fabriquent le même produit",
              "Complémentaires dans la fabrication de produits",
              "Installées loin des matières premières",
              "Uniquement agricoles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, la concentration verticale réunit des entreprises complémentaires dans la fabrication de produits."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les concentrations horizontale et géographique",
          "stepTheme": "Les concentrations horizontale et géographique",
          "stepBadge": "Les concentrations horizontale et géographique",
          "paragraphText": "• Concentration horizontale : regroupement des entreprises qui fabriquent le même produit.\n• Concentration géographique : installer l'industrie à proximité des sources de matières premières ou d'énergies.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q4",
            "type": "mcq",
            "prompt": "La concentration horizontale est le regroupement d'entreprises qui :",
            "options": [
              "Sont complémentaires",
              "Fabriquent le même produit",
              "Se situent près des énergies",
              "Produisent des objets identiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la concentration horizontale par le regroupement des entreprises fabriquant le même produit."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre standardisation et travail à la chaîne",
          "stepTheme": "Confondre standardisation et travail à la chaîne",
          "stepBadge": "Confondre standardisation et travail à la chaîne",
          "paragraphText": "Piège tiré des exercices : l'affirmation « la standardisation, c'est l'organisation scientifique du travail afin de produire en masse » mélange deux notions.\nL'organisation scientifique du travail est la taylorisation ; la standardisation produit des objets identiques à partir d'un modèle.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q5",
            "type": "mcq",
            "prompt": "L'organisation scientifique du travail correspond à :",
            "options": [
              "La standardisation",
              "La concentration géographique",
              "La taylorisation",
              "La fonte au coke"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le taylorisme, ou travail à la chaîne, qui est l'organisation scientifique du travail selon la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un rendement maximum recherché",
          "stepTheme": "Un rendement maximum recherché",
          "stepBadge": "Un rendement maximum recherché",
          "paragraphText": "Exemple : Frederick Taylor invente son système dans les années 1880 pour avoir un rendement maximum.\nLa forte demande de consommation, due à l'augmentation de la population, exigeait ces nouveaux modes de production.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q6",
            "type": "mcq",
            "prompt": "Le système de Taylor vise :",
            "options": [
              "Un rendement maximum",
              "Une baisse de la production",
              "Le retour à l'artisanat",
              "La suppression des machines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon précise que Taylor invente la taylorisation pour obtenir un rendement maximum."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q1",
          "type": "mcq",
          "prompt": "La taylorisation consiste à :",
          "options": [
            "Produire des objets identiques à partir d'un modèle",
            "Spécialiser toutes les tâches de production pour un rendement maximum",
            "Regrouper les entreprises du même produit",
            "Installer l'usine près des matières premières"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la taylorisation comme l'organisation scientifique du travail par spécialisation des tâches, inventée par Frederick Taylor dans les années 1880."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q2",
          "type": "mcq",
          "prompt": "La standardisation, c'est :",
          "options": [
            "L'organisation scientifique du travail",
            "La spécialisation des tâches",
            "La production d'objets identiques en grand nombre à partir d'un modèle",
            "Le regroupement des entreprises complémentaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition de la leçon ; l'exercice précise d'ailleurs que définir la standardisation comme l'organisation scientifique du travail est une confusion."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q3",
          "type": "mcq",
          "prompt": "La concentration verticale regroupe des entreprises :",
          "options": [
            "Qui fabriquent le même produit",
            "Complémentaires dans la fabrication de produits",
            "Installées loin des matières premières",
            "Uniquement agricoles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, la concentration verticale réunit des entreprises complémentaires dans la fabrication de produits."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q4",
          "type": "mcq",
          "prompt": "La concentration horizontale est le regroupement d'entreprises qui :",
          "options": [
            "Sont complémentaires",
            "Fabriquent le même produit",
            "Se situent près des énergies",
            "Produisent des objets identiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la concentration horizontale par le regroupement des entreprises fabriquant le même produit."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q5",
          "type": "mcq",
          "prompt": "L'organisation scientifique du travail correspond à :",
          "options": [
            "La standardisation",
            "La concentration géographique",
            "La taylorisation",
            "La fonte au coke"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le taylorisme, ou travail à la chaîne, qui est l'organisation scientifique du travail selon la leçon."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p05_q6",
          "type": "mcq",
          "prompt": "Le système de Taylor vise :",
          "options": [
            "Un rendement maximum",
            "Une baisse de la production",
            "Le retour à l'artisanat",
            "La suppression des machines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon précise que Taylor invente la taylorisation pour obtenir un rendement maximum."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06",
      "order": 6,
      "title": "Les transformations économiques et sociales",
      "summary": "Apprécier les transformations : révolution agricole, explosion démographique et urbaine, transports et deux classes sociales.",
      "conceptExplanation": "Les progrès techniques et scientifiques entraînent, dans le domaine agricole, une forte augmentation de la production due à la mécanisation et à l'utilisation des engrais et des pesticides : c'est la révolution agricole. L'explosion démographique est marquée par l'amélioration de la qualité de la vie, par la baisse de la mortalité infantile et l'augmentation de l'espérance de vie ; elle favorise l'émigration vers le nouveau monde. Le développement des industries entraîne le développement des villes : on assiste à une explosion urbaine due à l'exode rural.\nLa révolution des transports, avec les trains et les bateaux à vapeur, entraîne le déplacement de plus en plus rapide des populations. La société est désormais divisée en deux classes sociales opposées : la bourgeoisie, ceux qui détiennent les moyens de production, et le prolétariat, ceux qui vendent leur force de travail. Enfin, la création d'écoles et les activités de loisirs, comme le théâtre, le cinéma et le phonographe, entraînent le recul de l'analphabétisme et l'acquisition de nouvelles connaissances.",
      "keyRule": "Mécanisation agricole, explosion démographique puis urbaine, transports rapides et société divisée en bourgeoisie et prolétariat.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la chaîne démographie et urbanisation",
        "statement": "Explique comment l'explosion démographique et l'exode rural conduisent à l'explosion urbaine, selon la leçon.",
        "methodSteps": [
          "L'amélioration de la qualité de la vie fait baisser la mortalité infantile et augmenter l'espérance de vie : c'est l'explosion démographique.",
          "Le développement des industries attire les populations des campagnes : c'est l'exode rural.",
          "Les villes se développent sous cet afflux : c'est l'explosion urbaine."
        ],
        "conclusion": "L'explosion urbaine est consécutive à l'explosion démographique et à l'exode rural, comme le demande l'activité d'application."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La révolution agricole",
          "stepTheme": "La révolution agricole",
          "stepBadge": "La révolution agricole",
          "paragraphText": "• Révolution agricole : forte augmentation de la production agricole due à la mécanisation et à l'utilisation des engrais et des pesticides.\nElle résulte des progrès techniques et scientifiques.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q1",
            "type": "mcq",
            "prompt": "La révolution agricole se caractérise par :",
            "options": [
              "Une baisse de la production",
              "Une forte augmentation de la production grâce à la mécanisation et aux engrais",
              "La disparition des machines agricoles",
              "Le retour aux grands voiliers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, la mécanisation et l'utilisation des engrais et des pesticides entraînent une forte augmentation de la production agricole."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'explosion démographique",
          "stepTheme": "L'explosion démographique",
          "stepBadge": "L'explosion démographique",
          "paragraphText": "L'explosion démographique est marquée par l'amélioration de la qualité de la vie.\nElle se traduit par la baisse de la mortalité infantile et l'augmentation de l'espérance de vie, et favorise l'émigration vers le nouveau monde.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q2",
            "type": "mcq",
            "prompt": "L'explosion démographique se traduit par :",
            "options": [
              "Une hausse de la mortalité infantile",
              "Une baisse de l'espérance de vie",
              "La baisse de la mortalité infantile et l'augmentation de l'espérance de vie",
              "La fin de l'émigration"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les deux signes donnés par la leçon : baisse de la mortalité infantile et augmentation de l'espérance de vie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'explosion urbaine et l'exode rural",
          "stepTheme": "L'explosion urbaine et l'exode rural",
          "stepBadge": "L'explosion urbaine et l'exode rural",
          "paragraphText": "• Explosion urbaine : développement des villes entraîné par le développement des industries.\nElle est due à l'exode rural, le départ des populations des campagnes vers les villes.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q3",
            "type": "mcq",
            "prompt": "L'explosion urbaine est due :",
            "options": [
              "À la révolution des transports seule",
              "À l'exode rural lié au développement des industries",
              "À la baisse de la population",
              "À la fermeture des usines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon relie le développement des villes au développement des industries et à l'exode rural."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Trains et bateaux à vapeur",
          "stepTheme": "Trains et bateaux à vapeur",
          "stepBadge": "Trains et bateaux à vapeur",
          "paragraphText": "Exemple : la révolution des transports repose sur le développement des trains et des bateaux à vapeur.\nElle entraîne le déplacement de plus en plus rapide des populations et a permis de réduire les distances entre les lieux.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q4",
            "type": "mcq",
            "prompt": "La révolution des transports entraîne :",
            "options": [
              "Le déplacement de plus en plus rapide des populations",
              "La disparition des villes",
              "La baisse des échanges",
              "Le retour du travail artisanal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Selon la leçon, les trains et les bateaux à vapeur rendent les déplacements des populations de plus en plus rapides."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La croissance démographique, source et conséquence",
          "stepTheme": "La croissance démographique, source et conséquence",
          "stepBadge": "La croissance démographique, source et conséquence",
          "paragraphText": "Piège tiré des exercices : la croissance démographique n'est pas seulement une cause.\nL'affirmation validée par la leçon est que la croissance démographique est à la fois source et conséquence des révolutions industrielles.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q5",
            "type": "mcq",
            "prompt": "Selon les exercices de la leçon, la croissance démographique est :",
            "options": [
              "Sans lien avec les révolutions industrielles",
              "Uniquement une cause externe",
              "Source et conséquence des révolutions industrielles",
              "Un obstacle qui a arrêté l'industrialisation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon la présente comme source, par la demande de consommation, et comme conséquence, par l'amélioration de la qualité de la vie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Bourgeoisie et prolétariat",
          "stepTheme": "Bourgeoisie et prolétariat",
          "stepBadge": "Bourgeoisie et prolétariat",
          "paragraphText": "La société de cette époque est désormais divisée en deux classes sociales opposées.\n• Bourgeoisie : ceux qui détiennent les moyens de production.\n• Prolétariat : ceux qui vendent leur force de travail. S'ajoutent le recul de l'analphabétisme grâce aux écoles et aux loisirs comme le théâtre, le cinéma et le phonographe.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q6",
            "type": "mcq",
            "prompt": "Le prolétariat est composé de ceux qui :",
            "options": [
              "Détiennent les moyens de production",
              "Vendent leur force de travail",
              "Possèdent les banques",
              "Dirigent les grandes entreprises"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon oppose la bourgeoisie, détentrice des moyens de production, au prolétariat, qui vend sa force de travail."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q1",
          "type": "mcq",
          "prompt": "La révolution agricole se caractérise par :",
          "options": [
            "Une baisse de la production",
            "Une forte augmentation de la production grâce à la mécanisation et aux engrais",
            "La disparition des machines agricoles",
            "Le retour aux grands voiliers"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, la mécanisation et l'utilisation des engrais et des pesticides entraînent une forte augmentation de la production agricole."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q2",
          "type": "mcq",
          "prompt": "L'explosion démographique se traduit par :",
          "options": [
            "Une hausse de la mortalité infantile",
            "Une baisse de l'espérance de vie",
            "La baisse de la mortalité infantile et l'augmentation de l'espérance de vie",
            "La fin de l'émigration"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les deux signes donnés par la leçon : baisse de la mortalité infantile et augmentation de l'espérance de vie."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q3",
          "type": "mcq",
          "prompt": "L'explosion urbaine est due :",
          "options": [
            "À la révolution des transports seule",
            "À l'exode rural lié au développement des industries",
            "À la baisse de la population",
            "À la fermeture des usines"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon relie le développement des villes au développement des industries et à l'exode rural."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q4",
          "type": "mcq",
          "prompt": "La révolution des transports entraîne :",
          "options": [
            "Le déplacement de plus en plus rapide des populations",
            "La disparition des villes",
            "La baisse des échanges",
            "Le retour du travail artisanal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Selon la leçon, les trains et les bateaux à vapeur rendent les déplacements des populations de plus en plus rapides."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q5",
          "type": "mcq",
          "prompt": "Selon les exercices de la leçon, la croissance démographique est :",
          "options": [
            "Sans lien avec les révolutions industrielles",
            "Uniquement une cause externe",
            "Source et conséquence des révolutions industrielles",
            "Un obstacle qui a arrêté l'industrialisation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon la présente comme source, par la demande de consommation, et comme conséquence, par l'amélioration de la qualité de la vie."
        },
        {
          "id": "premiere_hg_histoire_t1_l02_revolutions_industrielles_p06_q6",
          "type": "mcq",
          "prompt": "Le prolétariat est composé de ceux qui :",
          "options": [
            "Détiennent les moyens de production",
            "Vendent leur force de travail",
            "Possèdent les banques",
            "Dirigent les grandes entreprises"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon oppose la bourgeoisie, détentrice des moyens de production, au prolétariat, qui vend sa force de travail."
        }
      ]
    }
  ]
};
