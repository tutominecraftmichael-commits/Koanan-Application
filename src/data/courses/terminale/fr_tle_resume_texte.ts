import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Tle_EE_Résumé_Texte_Argu, séances 2, 3 et 4 (École numérique) » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const FR_TLE_EE_L03_RESUME_TEXTE: CurriculumChapter = {
  "id": "terminale_francais_ee_l03_resume_texte",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 3,
  "title": "Expression écrite, leçon 3 : Le résumé de texte argumentatif",
  "summary": "Identifier la situation d'argumentation, la stratégie et la structure du texte, sélectionner et enchaîner les idées essentielles, les reformuler, puis rédiger le résumé au quart.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Tle_EE_Résumé_Texte_Argu, séances 2, 3 et 4 (École numérique)",
  "points": [
    {
      "id": "terminale_francais_ee_l03_resume_texte_p01",
      "order": 1,
      "title": "La situation d'argumentation",
      "summary": "Thème, thèse et visée argumentative : comprendre le texte avant de le résumer.",
      "conceptExplanation": "Résumer un texte argumentatif, c'est le réduire (le plus souvent au quart de sa longueur) en gardant ses idées essentielles, dans leur ordre, avec le point de vue et les pronoms de l'auteur. On ne donne pas son avis.\n\nAvant tout, on identifie la situation d'argumentation :\n- le thème : ce dont parle le texte (un nom ou un groupe nominal) ;\n- la thèse : l'opinion que défend l'auteur (une phrase) ;\n- la visée argumentative : ce que l'auteur veut obtenir de son lecteur (le convaincre, l'amener à agir).\n\nTexte 1 (sur l'immigration clandestine) :\n- thème : l'immigration clandestine ;\n- thèse : « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine » ;\n- visée : convaincre les gouvernants de créer les conditions pour que la jeunesse reste, notamment par la création d'emplois.\n\nTexte 2 (« La voie de la beauté aux conséquences dangereuses », Clément Winsavi, Fraternité Matin, 9 octobre 2013) :\n- thème : la dépigmentation ;\n- thèse : les utilisateurs de produits dépigmentants exposent leur vie et doivent en prendre conscience ;\n- visée : amener ces utilisateurs à abandonner cette pratique aux conséquences multiples.\n\nCorrections du document : « prendre en conscience » s'écrit « prendre conscience » ; « afin d'abonner cette pratique » doit se lire « afin d'abandonner cette pratique ».",
      "keyRule": "Thème = de quoi parle le texte. Thèse = ce que pense l'auteur. Visée = ce qu'il veut obtenir du lecteur.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier la situation d'argumentation",
        "statement": "Texte 2 : « La voie de la beauté aux conséquences dangereuses » (Clément Winsavi).",
        "methodSteps": [
          "Thème : la dépigmentation.",
          "Thèse : ceux qui utilisent des produits dépigmentants exposent leur vie et doivent en prendre conscience.",
          "Visée : les amener à abandonner cette pratique."
        ],
        "conclusion": "Thème, thèse et visée donnent le fil conducteur du futur résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Résumer un texte",
          "stepTheme": "Résumer un texte",
          "stepBadge": "Résumer un texte",
          "paragraphText": "Résumer un texte argumentatif, c'est le réduire (souvent au quart) en gardant ses idées essentielles, dans l'ordre, avec le point de vue de l'auteur.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p01_q1",
            "type": "mcq",
            "prompt": "Au baccalauréat, que doit faire l'élève quand on lui demande le résumé d'un texte argumentatif ?",
            "options": [
              "Le réduire (souvent au quart) en gardant ses idées essentielles, dans l'ordre, avec le point de vue de l'auteur",
              "Donner son avis personnel sur le texte",
              "Recopier les phrases les plus belles du texte",
              "Raconter la vie de l'auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé est fidèle : il réduit le texte sans le commenter."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le thème",
          "stepTheme": "Le thème",
          "stepBadge": "Le thème",
          "paragraphText": "Le thème est ce dont parle le texte : un nom ou un groupe nominal.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p01_q2",
            "type": "mcq",
            "prompt": "Un texte constate que « l'océan Atlantique est devenu le cimetière de milliers d'émigrants » et cherche pourquoi des jeunes Africains partent vers l'Europe, « même clandestin ». Quel est son thème ?",
            "options": [
              "La pêche en Afrique",
              "L'immigration clandestine",
              "Le tourisme aux Canaries",
              "La guerre en Europe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte parle des départs clandestins vers l'Europe : l'immigration clandestine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La thèse",
          "stepTheme": "La thèse",
          "stepBadge": "La thèse",
          "paragraphText": "La thèse est l'opinion que défend l'auteur. Dans le texte 1, c'est l'idée que réduire la pauvreté est la meilleure arme contre l'immigration clandestine.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p01_q3",
            "type": "mcq",
            "prompt": "Parmi ces phrases du texte 1 sur l'immigration clandestine, laquelle exprime la thèse de l'auteur ?",
            "options": [
              "« Dans les dernières années, l'océan Atlantique est devenu le cimetière de milliers d'émigrants »",
              "« La seconde cause de migration est bien sûr l'injustice sociale et la grande précarité »",
              "« Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine »",
              "« Il faut d'abord prendre davantage conscience des nombreuses difficultés que les migrants rencontrent »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'opinion centrale que tout le texte veut démontrer ; les autres phrases sont des constats ou des arguments."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La visée argumentative",
          "stepTheme": "La visée argumentative",
          "stepBadge": "La visée argumentative",
          "paragraphText": "La visée est ce que l'auteur veut obtenir : ici, convaincre les gouvernants de retenir la jeunesse par la création d'emplois.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p01_q4",
            "type": "mcq",
            "prompt": "Texte 1, thèse : « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine. » Quelle est la visée argumentative de l'auteur ?",
            "options": [
              "Encourager les jeunes à partir en Europe",
              "Raconter un voyage en barque de pêche",
              "Décrire les paysages des Canaries",
              "Convaincre les gouvernants de retenir la jeunesse en créant des emplois"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'auteur veut faire agir les dirigeants : créer les conditions pour que les jeunes restent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le thème du texte 2",
          "stepTheme": "Le thème du texte 2",
          "stepBadge": "Le thème du texte 2",
          "paragraphText": "Le texte 2, « La voie de la beauté aux conséquences dangereuses », a pour thème la dépigmentation.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p01_q5",
            "type": "mcq",
            "prompt": "Texte 2 : « La voie de la beauté aux conséquences dangereuses » (Clément Winsavi, Fraternité Matin, 2013) parle de femmes et d'hommes qui s'éclaircissent la peau avec des produits. Quel est son thème ?",
            "options": [
              "La dépigmentation",
              "La coiffure",
              "La mode vestimentaire",
              "Le maquillage de scène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "S'éclaircir la peau avec des produits, c'est la dépigmentation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La thèse du texte 2",
          "stepTheme": "La thèse du texte 2",
          "stepBadge": "La thèse du texte 2",
          "paragraphText": "Thèse du texte 2 : les utilisateurs de produits dépigmentants exposent leur vie et doivent en prendre conscience.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p01_q6",
            "type": "mcq",
            "prompt": "Texte 2 de Clément Winsavi sur la dépigmentation : quelle est la thèse de l'auteur ?",
            "options": [
              "Le teint clair est le seul vrai critère de beauté",
              "Les utilisateurs de produits dépigmentants exposent leur vie et doivent en prendre conscience",
              "Les hommes ne se dépigmentent jamais",
              "La dépigmentation est sans danger quand on la pratique par plaisir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'auteur dénonce les dangers de la pratique et appelle à une prise de conscience."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Thème ou thèse ?",
          "stepTheme": "Thème ou thèse ?",
          "stepBadge": "Thème ou thèse ?",
          "paragraphText": "Le thème est un sujet (un nom : « la dépigmentation ») ; la thèse est une opinion sur ce sujet (une phrase complète).",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p01_q7",
            "type": "mcq",
            "prompt": "Texte 2 : « la dépigmentation » et « les utilisateurs de produits dépigmentants exposent leur vie ». Lequel est le thème, lequel est la thèse ?",
            "options": [
              "Le premier est le thème, le second est la thèse",
              "Le premier est la thèse, le second est le thème",
              "Les deux sont des thèmes",
              "Les deux sont des thèses"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un groupe nominal donne le sujet (thème) ; une phrase qui prend position donne la thèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_francais_ee_l03_resume_texte_p01_q1",
          "type": "mcq",
          "prompt": "Au baccalauréat, que doit faire l'élève quand on lui demande le résumé d'un texte argumentatif ?",
          "options": [
            "Le réduire (souvent au quart) en gardant ses idées essentielles, dans l'ordre, avec le point de vue de l'auteur",
            "Donner son avis personnel sur le texte",
            "Recopier les phrases les plus belles du texte",
            "Raconter la vie de l'auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé est fidèle : il réduit le texte sans le commenter."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p01_q2",
          "type": "mcq",
          "prompt": "Un texte constate que « l'océan Atlantique est devenu le cimetière de milliers d'émigrants » et cherche pourquoi des jeunes Africains partent vers l'Europe, « même clandestin ». Quel est son thème ?",
          "options": [
            "La pêche en Afrique",
            "L'immigration clandestine",
            "Le tourisme aux Canaries",
            "La guerre en Europe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte parle des départs clandestins vers l'Europe : l'immigration clandestine."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p01_q3",
          "type": "mcq",
          "prompt": "Parmi ces phrases du texte 1 sur l'immigration clandestine, laquelle exprime la thèse de l'auteur ?",
          "options": [
            "« Dans les dernières années, l'océan Atlantique est devenu le cimetière de milliers d'émigrants »",
            "« La seconde cause de migration est bien sûr l'injustice sociale et la grande précarité »",
            "« Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine »",
            "« Il faut d'abord prendre davantage conscience des nombreuses difficultés que les migrants rencontrent »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'opinion centrale que tout le texte veut démontrer ; les autres phrases sont des constats ou des arguments."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p01_q4",
          "type": "mcq",
          "prompt": "Texte 1, thèse : « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine. » Quelle est la visée argumentative de l'auteur ?",
          "options": [
            "Encourager les jeunes à partir en Europe",
            "Raconter un voyage en barque de pêche",
            "Décrire les paysages des Canaries",
            "Convaincre les gouvernants de retenir la jeunesse en créant des emplois"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'auteur veut faire agir les dirigeants : créer les conditions pour que les jeunes restent."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p01_q5",
          "type": "mcq",
          "prompt": "Texte 2 : « La voie de la beauté aux conséquences dangereuses » (Clément Winsavi, Fraternité Matin, 2013) parle de femmes et d'hommes qui s'éclaircissent la peau avec des produits. Quel est son thème ?",
          "options": [
            "La dépigmentation",
            "La coiffure",
            "La mode vestimentaire",
            "Le maquillage de scène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "S'éclaircir la peau avec des produits, c'est la dépigmentation."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p01_q6",
          "type": "mcq",
          "prompt": "Texte 2 de Clément Winsavi sur la dépigmentation : quelle est la thèse de l'auteur ?",
          "options": [
            "Le teint clair est le seul vrai critère de beauté",
            "Les utilisateurs de produits dépigmentants exposent leur vie et doivent en prendre conscience",
            "Les hommes ne se dépigmentent jamais",
            "La dépigmentation est sans danger quand on la pratique par plaisir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'auteur dénonce les dangers de la pratique et appelle à une prise de conscience."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p01_q7",
          "type": "mcq",
          "prompt": "Texte 2 : « la dépigmentation » et « les utilisateurs de produits dépigmentants exposent leur vie ». Lequel est le thème, lequel est la thèse ?",
          "options": [
            "Le premier est le thème, le second est la thèse",
            "Le premier est la thèse, le second est le thème",
            "Les deux sont des thèmes",
            "Les deux sont des thèses"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un groupe nominal donne le sujet (thème) ; une phrase qui prend position donne la thèse."
        }
      ]
    },
    {
      "id": "terminale_francais_ee_l03_resume_texte_p02",
      "order": 2,
      "title": "La stratégie argumentative",
      "summary": "Indices d'énonciation, temps, connecteurs logiques et modalisateurs.",
      "conceptExplanation": "La stratégie argumentative est l'ensemble des procédés d'écriture que l'auteur utilise pour soutenir son point de vue ou réfuter un autre point de vue. Elle comprend son mode de raisonnement.\n\nDans le texte 1, on l'observe à plusieurs niveaux.\n- Les indices de personne : « ils » renvoie aux migrants ; « on » et « nous » sont des pronoms inclusifs (tout le monde, l'auteur compris) ; « elle » renvoie à l'Afrique ; l'adjectif possessif « leur ».\n- Les indices temporels : le passé composé, le présent de l'indicatif, le futur antérieur.\n- Les connecteurs logiques : « mais », « or » (opposition) ; « aussi », « de plus » (addition) ; « parce que » (cause) ; « donc » (conséquence) ; « si même » (concession).\n- Les modalisateurs : des mots qui montrent le degré de certitude ou le jugement de l'auteur : « bien sûr », « on ne peut nier que », « il faut reconnaître que », « il est certain que », « il est évident que ».\n\nPourquoi c'est utile : le résumé doit garder le même système d'énonciation (mêmes pronoms, mêmes temps) et des liens logiques clairs.\n\nCorrections du document : il place les connecteurs logiques sous le titre « modalisateurs » ; ce sont deux outils différents. Il dit aussi que « si même » évoque une évidence : dans « si même le risque de mort ne dissuade pas les clandestins », « si même » veut dire « même si » : c'est une concession.",
      "keyRule": "Stratégie argumentative = indices de personne + temps + connecteurs logiques (liens entre idées) + modalisateurs (certitude, jugement de l'auteur).",
      "formulas": [],
      "workedExample": {
        "title": "Analyser un connecteur",
        "statement": "« Il est donc urgent d'aider au développement des droits humains, de la démocratie, du syndicalisme… »",
        "methodSteps": [
          "Repérer le connecteur : « donc ».",
          "Nommer le rapport : la conséquence.",
          "Comprendre : après les causes, l'auteur tire une solution."
        ],
        "conclusion": "« donc » annonce la conséquence logique de ce qui précède."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La stratégie argumentative",
          "stepTheme": "La stratégie argumentative",
          "stepBadge": "La stratégie argumentative",
          "paragraphText": "La stratégie argumentative est l'ensemble des procédés d'écriture et le raisonnement que l'auteur utilise pour défendre ou réfuter un point de vue.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p02_q1",
            "type": "mcq",
            "prompt": "Dans l'analyse d'un texte argumentatif, qu'appelle-t-on la « stratégie argumentative » ?",
            "options": [
              "Le nombre de paragraphes du texte",
              "L'ensemble des procédés d'écriture et le raisonnement que l'auteur utilise pour défendre ou réfuter un point de vue",
              "La biographie de l'auteur",
              "Le nom du journal qui publie le texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle regroupe les moyens (pronoms, connecteurs, modalisateurs…) mis au service de la thèse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le pronom « ils »",
          "stepTheme": "Le pronom « ils »",
          "stepBadge": "Le pronom « ils »",
          "paragraphText": "Dans le texte 1, le pronom « ils » renvoie aux migrants.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p02_q2",
            "type": "mcq",
            "prompt": "Dans le texte 1 sur l'immigration clandestine, le pronom « ils » désigne un groupe de personnes. Lequel ?",
            "options": [
              "Les migrants",
              "Les gouvernants européens",
              "Les pêcheurs des Canaries",
              "Les lecteurs du texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« ils » reprend les migrants dont parle tout le texte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les pronoms inclusifs",
          "stepTheme": "Les pronoms inclusifs",
          "stepBadge": "Les pronoms inclusifs",
          "paragraphText": "« on » et « nous » sont des pronoms inclusifs : ils désignent tout le monde, l'auteur compris.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p02_q3",
            "type": "mcq",
            "prompt": "Dans un texte argumentatif, l'auteur écrit « nous » et « on » pour désigner tout le monde, lui compris. Comment appelle-t-on ces pronoms ?",
            "options": [
              "Des pronoms relatifs",
              "Des pronoms démonstratifs",
              "Des pronoms inclusifs",
              "Des pronoms exclusifs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ils incluent l'auteur et le lecteur : ils rendent le problème commun à tous."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un connecteur d'opposition",
          "stepTheme": "Un connecteur d'opposition",
          "stepBadge": "Un connecteur d'opposition",
          "paragraphText": "« mais » et « or » marquent l'opposition, la rupture d'une logique.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p02_q4",
            "type": "mcq",
            "prompt": "« Dans les dernières années, l'océan Atlantique est devenu le cimetière de milliers d'émigrants. Mais les difficultés qu'ils rencontrent dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode. » Quel rapport logique exprime « mais » ?",
            "options": [
              "L'opposition",
              "La cause",
              "L'addition",
              "La conséquence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Malgré le danger de mort, les jeunes partent : « mais » oppose les deux idées."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un connecteur de conséquence",
          "stepTheme": "Un connecteur de conséquence",
          "stepBadge": "Un connecteur de conséquence",
          "paragraphText": "« donc » exprime la conséquence.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p02_q5",
            "type": "mcq",
            "prompt": "« Il est donc urgent d'aider au développement des droits humains, de la démocratie, du syndicalisme et de la protection de l'environnement des pays africains. » Quel rapport logique exprime « donc » ?",
            "options": [
              "La cause",
              "La conséquence",
              "L'opposition",
              "Le temps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« donc » tire la conséquence de ce qui précède."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les modalisateurs",
          "stepTheme": "Les modalisateurs",
          "stepBadge": "Les modalisateurs",
          "paragraphText": "Les modalisateurs montrent le degré de certitude ou le jugement de l'auteur : « bien sûr », « on ne peut nier que », « il est certain que », « il est évident que ».",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p02_q6",
            "type": "mcq",
            "prompt": "« On ne peut nier que l'immigration irrégulière constitue l'une des principales préoccupations des pouvoirs publics. » Que montre l'expression « on ne peut nier que » ?",
            "options": [
              "C'est un connecteur de cause",
              "C'est un indice de lieu",
              "C'est une question posée au lecteur",
              "C'est un modalisateur : l'auteur exprime sa certitude"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'auteur présente l'idée comme indiscutable : c'est un modalisateur de certitude."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "« Si même » : une concession",
          "stepTheme": "« Si même » : une concession",
          "stepBadge": "« Si même » : une concession",
          "paragraphText": "Le document dit que « si même » évoque une évidence. En fait, « si même le risque de mort ne dissuade pas » veut dire « même si » : c'est une concession.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p02_q7",
            "type": "mcq",
            "prompt": "« Si même le risque de mort ne dissuade pas les clandestins, comment agir ? » Le document dit que « si même » évoque une évidence. Quel rapport ce connecteur exprime-t-il vraiment ?",
            "options": [
              "Une concession : « même si » le risque de mort ne les arrête pas",
              "Une cause",
              "Une addition",
              "Un but"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On admet un fait (le risque de mort n'arrête pas les clandestins) avant de chercher une solution : c'est une concession."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_francais_ee_l03_resume_texte_p02_q1",
          "type": "mcq",
          "prompt": "Dans l'analyse d'un texte argumentatif, qu'appelle-t-on la « stratégie argumentative » ?",
          "options": [
            "Le nombre de paragraphes du texte",
            "L'ensemble des procédés d'écriture et le raisonnement que l'auteur utilise pour défendre ou réfuter un point de vue",
            "La biographie de l'auteur",
            "Le nom du journal qui publie le texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle regroupe les moyens (pronoms, connecteurs, modalisateurs…) mis au service de la thèse."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p02_q2",
          "type": "mcq",
          "prompt": "Dans le texte 1 sur l'immigration clandestine, le pronom « ils » désigne un groupe de personnes. Lequel ?",
          "options": [
            "Les migrants",
            "Les gouvernants européens",
            "Les pêcheurs des Canaries",
            "Les lecteurs du texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« ils » reprend les migrants dont parle tout le texte."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p02_q3",
          "type": "mcq",
          "prompt": "Dans un texte argumentatif, l'auteur écrit « nous » et « on » pour désigner tout le monde, lui compris. Comment appelle-t-on ces pronoms ?",
          "options": [
            "Des pronoms relatifs",
            "Des pronoms démonstratifs",
            "Des pronoms inclusifs",
            "Des pronoms exclusifs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ils incluent l'auteur et le lecteur : ils rendent le problème commun à tous."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p02_q4",
          "type": "mcq",
          "prompt": "« Dans les dernières années, l'océan Atlantique est devenu le cimetière de milliers d'émigrants. Mais les difficultés qu'ils rencontrent dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode. » Quel rapport logique exprime « mais » ?",
          "options": [
            "L'opposition",
            "La cause",
            "L'addition",
            "La conséquence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Malgré le danger de mort, les jeunes partent : « mais » oppose les deux idées."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p02_q5",
          "type": "mcq",
          "prompt": "« Il est donc urgent d'aider au développement des droits humains, de la démocratie, du syndicalisme et de la protection de l'environnement des pays africains. » Quel rapport logique exprime « donc » ?",
          "options": [
            "La cause",
            "La conséquence",
            "L'opposition",
            "Le temps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« donc » tire la conséquence de ce qui précède."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p02_q6",
          "type": "mcq",
          "prompt": "« On ne peut nier que l'immigration irrégulière constitue l'une des principales préoccupations des pouvoirs publics. » Que montre l'expression « on ne peut nier que » ?",
          "options": [
            "C'est un connecteur de cause",
            "C'est un indice de lieu",
            "C'est une question posée au lecteur",
            "C'est un modalisateur : l'auteur exprime sa certitude"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'auteur présente l'idée comme indiscutable : c'est un modalisateur de certitude."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p02_q7",
          "type": "mcq",
          "prompt": "« Si même le risque de mort ne dissuade pas les clandestins, comment agir ? » Le document dit que « si même » évoque une évidence. Quel rapport ce connecteur exprime-t-il vraiment ?",
          "options": [
            "Une concession : « même si » le risque de mort ne les arrête pas",
            "Une cause",
            "Une addition",
            "Un but"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On admet un fait (le risque de mort n'arrête pas les clandestins) avant de chercher une solution : c'est une concession."
        }
      ]
    },
    {
      "id": "terminale_francais_ee_l03_resume_texte_p03",
      "order": 3,
      "title": "La structure du texte",
      "summary": "Découper le texte en séquences argumentatives et leur donner un titre.",
      "conceptExplanation": "La structure du texte est son organisation, son articulation. Elle permet de repérer les séquences argumentatives (les grandes parties). Pour la dégager, on se laisse guider par les paragraphes, les connecteurs logiques et les indices d'énonciation.\n\nTexte 1 (immigration clandestine) :\n- 1re partie, « Dans les dernières années… même clandestin » : l'immigration clandestine et ses conséquences ;\n- 2e partie, « Pourquoi un tel afflux… une véritable violence économique » : les causes de l'immigration clandestine ;\n- 3e partie, « Si même le risque de mort… l'Afrique doit en tirer les leçons » : les propositions de solutions.\n\nTexte 2 (dépigmentation) :\n- paragraphes 1 et 2 : la généralisation de la dépigmentation ;\n- paragraphes 3, 4 et 5 : les effets néfastes de la dépigmentation.\n\nLes champs lexicaux aident aussi :\n- champ lexical de l'immigration : « les immigrants », « gagner les Canaries », « les clandestins », « la traversée », « barque de pêche », « préférer l'exode », « afflux d'immigrés », « vers l'Occident » ;\n- champ lexical de la pauvreté et du développement : « accentuation du sous-développement », « la dévaluation des monnaies », « la faim », « conflits », « créer des emplois ».\n\nCorrection du document : il appelle les deux listes « champ lexical propre au thème » ; la seconde est en réalité le champ lexical de la pauvreté (les causes) et des solutions.",
      "keyRule": "Structure = les grandes parties du texte. Repères : paragraphes, connecteurs logiques, indices d'énonciation. Chaque partie reçoit un titre.",
      "formulas": [],
      "workedExample": {
        "title": "Dégager la structure du texte 1",
        "statement": "Le texte 1 décrit l'immigration clandestine, en cherche les causes puis propose des solutions.",
        "methodSteps": [
          "Repérer les changements : la question « Pourquoi un tel afflux ? » ouvre une nouvelle partie.",
          "Repérer « Si même le risque de mort… comment agir ? » : le texte passe aux solutions.",
          "Donner un titre à chaque partie : constat et conséquences, causes, solutions."
        ],
        "conclusion": "Trois parties : l'immigration clandestine et ses conséquences, ses causes, les solutions."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "À quoi sert la structure ?",
          "stepTheme": "À quoi sert la structure ?",
          "stepBadge": "À quoi sert la structure ?",
          "paragraphText": "La structure permet de repérer les séquences argumentatives, c'est-à-dire les grandes parties du texte.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p03_q1",
            "type": "mcq",
            "prompt": "Que permet de repérer la structure d'un texte argumentatif ?",
            "options": [
              "Ses séquences argumentatives, c'est-à-dire ses grandes parties",
              "Ses fautes d'orthographe",
              "Le nombre exact de ses mots",
              "Le nom de son éditeur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La structure montre comment l'argumentation est organisée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les repères",
          "stepTheme": "Les repères",
          "stepBadge": "Les repères",
          "paragraphText": "Pour dégager la structure, on s'appuie sur les paragraphes, les connecteurs logiques et les indices d'énonciation.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p03_q2",
            "type": "mcq",
            "prompt": "Pour dégager la structure d'un texte argumentatif, sur quoi peut-on s'appuyer ?",
            "options": [
              "La longueur des mots",
              "Les paragraphes, les connecteurs logiques et les indices d'énonciation",
              "La ponctuation seulement",
              "Le titre seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un nouveau paragraphe, un connecteur ou un changement de pronom signale souvent une nouvelle partie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La 1re partie du texte 1",
          "stepTheme": "La 1re partie du texte 1",
          "stepBadge": "La 1re partie du texte 1",
          "paragraphText": "1re partie, « Dans les dernières années… même clandestin » : l'immigration clandestine et ses conséquences.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p03_q3",
            "type": "mcq",
            "prompt": "Texte 1, 1re partie « Dans les dernières années… même clandestin » : on y lit que l'Atlantique est devenu « le cimetière de milliers d'émigrants » et que des jeunes préfèrent « l'exode, même clandestin ». Quel titre donner à cette partie ?",
            "options": [
              "Les propositions de solutions",
              "Les causes de l'immigration clandestine",
              "L'immigration clandestine et ses conséquences",
              "L'histoire des îles Canaries"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La partie constate le phénomène et ses morts : l'immigration clandestine et ses conséquences."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La 2e partie du texte 1",
          "stepTheme": "La 2e partie du texte 1",
          "stepBadge": "La 2e partie du texte 1",
          "paragraphText": "2e partie, « Pourquoi un tel afflux… une véritable violence économique » : les causes de l'immigration clandestine.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p03_q4",
            "type": "mcq",
            "prompt": "Texte 1, 2e partie : elle commence par la question « Pourquoi un tel afflux ? » et parle du sous-développement, de l'injustice sociale et des conflits. Quel titre convient à cette partie ?",
            "options": [
              "Les causes de l'immigration clandestine",
              "Les propositions de solutions",
              "Les conséquences de l'immigration",
              "La beauté de l'Europe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Pourquoi » annonce une recherche des causes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La 3e partie du texte 1",
          "stepTheme": "La 3e partie du texte 1",
          "stepBadge": "La 3e partie du texte 1",
          "paragraphText": "3e partie, « Si même le risque de mort… l'Afrique doit en tirer les leçons » : les propositions de solutions.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p03_q5",
            "type": "mcq",
            "prompt": "Texte 1, 3e partie « Si même le risque de mort… l'Afrique doit en tirer les leçons » : on y lit « il est donc urgent d'aider au développement » et « les Occidentaux doivent aussi aider à créer de l'emploi ». Quel titre lui donner ?",
            "options": [
              "Les causes de l'immigration clandestine",
              "L'immigration clandestine et ses conséquences",
              "Le voyage vers les Canaries",
              "Les propositions de solutions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Il est urgent d'aider », « doivent aider à créer de l'emploi » : ce sont des solutions."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La structure du texte 2",
          "stepTheme": "La structure du texte 2",
          "stepBadge": "La structure du texte 2",
          "paragraphText": "Texte 2 : paragraphes 1 et 2, la généralisation de la dépigmentation ; paragraphes 3 à 5, ses effets néfastes.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p03_q6",
            "type": "mcq",
            "prompt": "Texte 2 sur la dépigmentation : les paragraphes 1 et 2 montrent que la pratique gagne les femmes et les hommes ; les paragraphes 3 à 5 parlent de beauté dégradée et de risques pour la vie. Quelles sont les deux parties du texte ?",
            "options": [
              "Les effets néfastes, puis la généralisation de la dépigmentation",
              "La généralisation de la dépigmentation, puis ses effets néfastes",
              "L'histoire des produits, puis leur prix",
              "La beauté noire, puis la mode européenne"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ordre du texte : d'abord la pratique qui se répand, ensuite ses dangers."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Un champ lexical",
          "stepTheme": "Un champ lexical",
          "stepBadge": "Un champ lexical",
          "paragraphText": "« les immigrants », « gagner les Canaries », « la traversée », « barque de pêche », « préférer l'exode » forment le champ lexical de l'immigration.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p03_q7",
            "type": "mcq",
            "prompt": "Texte 1 : « les immigrants », « gagner les Canaries », « la traversée », « barque de pêche », « préférer l'exode ». À quel champ lexical appartiennent ces mots ?",
            "options": [
              "L'immigration, le voyage des migrants",
              "La pauvreté",
              "La fête",
              "L'école"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tous ces mots parlent du départ et de la traversée des migrants."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_francais_ee_l03_resume_texte_p03_q1",
          "type": "mcq",
          "prompt": "Que permet de repérer la structure d'un texte argumentatif ?",
          "options": [
            "Ses séquences argumentatives, c'est-à-dire ses grandes parties",
            "Ses fautes d'orthographe",
            "Le nombre exact de ses mots",
            "Le nom de son éditeur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La structure montre comment l'argumentation est organisée."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p03_q2",
          "type": "mcq",
          "prompt": "Pour dégager la structure d'un texte argumentatif, sur quoi peut-on s'appuyer ?",
          "options": [
            "La longueur des mots",
            "Les paragraphes, les connecteurs logiques et les indices d'énonciation",
            "La ponctuation seulement",
            "Le titre seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un nouveau paragraphe, un connecteur ou un changement de pronom signale souvent une nouvelle partie."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p03_q3",
          "type": "mcq",
          "prompt": "Texte 1, 1re partie « Dans les dernières années… même clandestin » : on y lit que l'Atlantique est devenu « le cimetière de milliers d'émigrants » et que des jeunes préfèrent « l'exode, même clandestin ». Quel titre donner à cette partie ?",
          "options": [
            "Les propositions de solutions",
            "Les causes de l'immigration clandestine",
            "L'immigration clandestine et ses conséquences",
            "L'histoire des îles Canaries"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La partie constate le phénomène et ses morts : l'immigration clandestine et ses conséquences."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p03_q4",
          "type": "mcq",
          "prompt": "Texte 1, 2e partie : elle commence par la question « Pourquoi un tel afflux ? » et parle du sous-développement, de l'injustice sociale et des conflits. Quel titre convient à cette partie ?",
          "options": [
            "Les causes de l'immigration clandestine",
            "Les propositions de solutions",
            "Les conséquences de l'immigration",
            "La beauté de l'Europe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Pourquoi » annonce une recherche des causes."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p03_q5",
          "type": "mcq",
          "prompt": "Texte 1, 3e partie « Si même le risque de mort… l'Afrique doit en tirer les leçons » : on y lit « il est donc urgent d'aider au développement » et « les Occidentaux doivent aussi aider à créer de l'emploi ». Quel titre lui donner ?",
          "options": [
            "Les causes de l'immigration clandestine",
            "L'immigration clandestine et ses conséquences",
            "Le voyage vers les Canaries",
            "Les propositions de solutions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Il est urgent d'aider », « doivent aider à créer de l'emploi » : ce sont des solutions."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p03_q6",
          "type": "mcq",
          "prompt": "Texte 2 sur la dépigmentation : les paragraphes 1 et 2 montrent que la pratique gagne les femmes et les hommes ; les paragraphes 3 à 5 parlent de beauté dégradée et de risques pour la vie. Quelles sont les deux parties du texte ?",
          "options": [
            "Les effets néfastes, puis la généralisation de la dépigmentation",
            "La généralisation de la dépigmentation, puis ses effets néfastes",
            "L'histoire des produits, puis leur prix",
            "La beauté noire, puis la mode européenne"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ordre du texte : d'abord la pratique qui se répand, ensuite ses dangers."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p03_q7",
          "type": "mcq",
          "prompt": "Texte 1 : « les immigrants », « gagner les Canaries », « la traversée », « barque de pêche », « préférer l'exode ». À quel champ lexical appartiennent ces mots ?",
          "options": [
            "L'immigration, le voyage des migrants",
            "La pauvreté",
            "La fête",
            "L'école"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tous ces mots parlent du départ et de la traversée des migrants."
        }
      ]
    },
    {
      "id": "terminale_francais_ee_l03_resume_texte_p04",
      "order": 4,
      "title": "Sélectionner les idées essentielles",
      "summary": "Garder les idées directrices, supprimer exemples, digressions et répétitions.",
      "conceptExplanation": "Sélectionner les idées essentielles (IE), c'est garder dans chaque séquence argumentative les idées directrices et supprimer :\n- les exemples illustratifs ;\n- les digressions ;\n- les commentaires ;\n- les parenthèses ;\n- les insistances et les répétitions ;\n- les citations ;\n- les expansions (énumérations, détails).\n\nIdées essentielles du texte 1, dans l'ordre :\n- IE1 : l'océan Atlantique est devenu le cimetière de milliers d'émigrants ;\n- IE2 : mais les difficultés rencontrées dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode, même clandestin ;\n- IE3 : depuis la décolonisation, le sous-développement s'accentue ;\n- IE4 : la seconde cause est l'injustice sociale et la grande précarité ;\n- IE5 : la lutte pour le pouvoir et les richesses a ouvert des conflits de plus en plus dévastateurs ;\n- IE6 : l'immigration irrégulière est l'une des principales préoccupations des pays industrialisés ;\n- IE7 : ces migrations sont d'abord la conséquence de la surexploitation des écosystèmes et d'une main-d'œuvre pauvre et mal protégée ;\n- IE8 : si même le risque de mort ne dissuade pas les clandestins, il faut d'abord prendre conscience de leurs difficultés ;\n- IE9 : il est donc urgent d'aider au développement des droits humains, de la démocratie, du syndicalisme et de la protection de l'environnement ;\n- IE10 : la plupart des migrants préféreraient rester dans leur pays ;\n- IE11 : les Occidentaux doivent aussi aider à créer de l'emploi en Afrique ;\n- IE12 : réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine (la thèse) ;\n- IE13 : les États africains doivent cesser d'agir comme au temps où l'Europe avait besoin de main-d'œuvre bon marché.\n\nCorrection du document : sa première liste numérote 12 idées et ajoute la 13e sans numéro ; elle s'appelle IE13 plus loin.",
      "keyRule": "Garder : les idées directrices, dans l'ordre du texte, et toujours la thèse. Supprimer : exemples, digressions, commentaires, parenthèses, répétitions, citations, expansions.",
      "formulas": [],
      "workedExample": {
        "title": "Réduire une phrase à son idée essentielle",
        "statement": "« Les Occidentaux doivent aussi aider à créer de l'emploi chez eux, en investissant dans l'industrie, le textile, l'agriculture, la pêche, l'élevage… »",
        "methodSteps": [
          "Repérer l'idée directrice : les Occidentaux doivent aider à créer des emplois en Afrique.",
          "Repérer l'expansion : la liste des secteurs (industrie, textile, agriculture…).",
          "Supprimer l'expansion, garder l'idée."
        ],
        "conclusion": "IE : les Occidentaux doivent aussi aider à créer de l'emploi en Afrique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu'on supprime",
          "stepTheme": "Ce qu'on supprime",
          "stepBadge": "Ce qu'on supprime",
          "paragraphText": "On supprime les exemples illustratifs, les digressions, les commentaires, les parenthèses, les répétitions, les citations et les expansions.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p04_q1",
            "type": "mcq",
            "prompt": "Pour sélectionner les idées essentielles d'un texte argumentatif, que faut-il supprimer ?",
            "options": [
              "Les exemples illustratifs, digressions, commentaires, parenthèses, répétitions, citations et expansions",
              "Les arguments principaux",
              "La thèse de l'auteur",
              "Les connecteurs qui annoncent la conclusion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ne garde que les idées directrices ; tout ce qui illustre ou répète disparaît."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Supprimer une énumération",
          "stepTheme": "Supprimer une énumération",
          "stepBadge": "Supprimer une énumération",
          "paragraphText": "Une énumération qui détaille une idée est une expansion : on la supprime et on garde l'idée.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p04_q2",
            "type": "mcq",
            "prompt": "Texte 1 : « Les Occidentaux doivent aussi aider à créer de l'emploi chez eux, en investissant dans l'industrie, le textile, l'agriculture, la pêche, l'élevage… » Que peut-on supprimer en sélectionnant l'idée essentielle ?",
            "options": [
              "« créer de l'emploi »",
              "« les Occidentaux »",
              "L'énumération « l'industrie, le textile, l'agriculture, la pêche, l'élevage »",
              "Rien : tout est essentiel"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La liste des secteurs détaille l'idée ; l'idée essentielle est l'aide à la création d'emplois."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Supprimer une parenthèse",
          "stepTheme": "Supprimer une parenthèse",
          "stepBadge": "Supprimer une parenthèse",
          "paragraphText": "Les parenthèses ajoutent une précision secondaire : on les supprime.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p04_q3",
            "type": "mcq",
            "prompt": "Texte 2 : « Au premier rang, l'esthétique qu'elle (la femme) escomptait est dégradée. » Quel élément faut-il supprimer en priorité ?",
            "options": [
              "Le mot « esthétique »",
              "La parenthèse « (la femme) »",
              "Le groupe « est dégradée »",
              "Le verbe « escomptait » seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une parenthèse n'est jamais essentielle ; l'idée est que la beauté espérée se dégrade."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Repérer un exemple",
          "stepTheme": "Repérer un exemple",
          "stepBadge": "Repérer un exemple",
          "paragraphText": "Les exemples illustratifs précisent une idée : dans le résumé, on les remplace par l'idée qu'ils illustrent.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p04_q4",
            "type": "mcq",
            "prompt": "Texte 2 : « Telles les femmes, des hommes se dépigmentent la peau. Certains le font juste par plaisir, d'autres se disent artistes. » Quelle partie est un exemple illustratif, moins essentiel ?",
            "options": [
              "« des hommes se dépigmentent la peau »",
              "Toute la première phrase",
              "Aucune : on recopie tout",
              "« Certains le font juste par plaisir, d'autres se disent artistes »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le plaisir et les artistes sont des exemples ; l'idée essentielle est que les hommes aussi se dépigmentent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Une idée directrice",
          "stepTheme": "Une idée directrice",
          "stepBadge": "Une idée directrice",
          "paragraphText": "IE1 pose le constat de départ : l'Atlantique est devenu le cimetière de milliers d'émigrants.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p04_q5",
            "type": "mcq",
            "prompt": "Texte 1, IE1 : « Dans les dernières années, l'océan Atlantique est devenu le cimetière de milliers d'émigrants. » Pourquoi est-ce une idée essentielle ?",
            "options": [
              "Elle pose le constat de départ du texte : les nombreux morts de l'immigration clandestine",
              "C'est une digression",
              "C'est une citation d'un autre auteur",
              "C'est un exemple sans importance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tout le texte part de ce constat dramatique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Garder l'ordre",
          "stepTheme": "Garder l'ordre",
          "stepBadge": "Garder l'ordre",
          "paragraphText": "Les idées essentielles se gardent dans l'ordre du texte : le résumé suit le raisonnement de l'auteur.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p04_q6",
            "type": "mcq",
            "prompt": "Le texte 1 compte 13 idées essentielles, de IE1 (l'Atlantique « cimetière » des émigrants) à IE13 (les États africains doivent changer d'attitude). Dans quel ordre faut-il les garder ?",
            "options": [
              "Des plus courtes aux plus longues",
              "Dans l'ordre du texte",
              "Dans l'ordre alphabétique",
              "Dans l'ordre que l'on préfère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé respecte l'ordre des idées : il suit le raisonnement de l'auteur."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne jamais supprimer la thèse",
          "stepTheme": "Ne jamais supprimer la thèse",
          "stepBadge": "Ne jamais supprimer la thèse",
          "paragraphText": "IE12, « réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine », est la thèse : elle doit rester.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p04_q7",
            "type": "mcq",
            "prompt": "En sélectionnant les idées essentielles du texte 1, un élève supprime la phrase « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine ». A-t-il raison ?",
            "options": [
              "Oui : c'est un exemple",
              "Oui : c'est une répétition",
              "Non : c'est la thèse de l'auteur, elle doit être gardée",
              "Oui : c'est une digression"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sans la thèse, le résumé perd l'idée principale du texte."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_francais_ee_l03_resume_texte_p04_q1",
          "type": "mcq",
          "prompt": "Pour sélectionner les idées essentielles d'un texte argumentatif, que faut-il supprimer ?",
          "options": [
            "Les exemples illustratifs, digressions, commentaires, parenthèses, répétitions, citations et expansions",
            "Les arguments principaux",
            "La thèse de l'auteur",
            "Les connecteurs qui annoncent la conclusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ne garde que les idées directrices ; tout ce qui illustre ou répète disparaît."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p04_q2",
          "type": "mcq",
          "prompt": "Texte 1 : « Les Occidentaux doivent aussi aider à créer de l'emploi chez eux, en investissant dans l'industrie, le textile, l'agriculture, la pêche, l'élevage… » Que peut-on supprimer en sélectionnant l'idée essentielle ?",
          "options": [
            "« créer de l'emploi »",
            "« les Occidentaux »",
            "L'énumération « l'industrie, le textile, l'agriculture, la pêche, l'élevage »",
            "Rien : tout est essentiel"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La liste des secteurs détaille l'idée ; l'idée essentielle est l'aide à la création d'emplois."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p04_q3",
          "type": "mcq",
          "prompt": "Texte 2 : « Au premier rang, l'esthétique qu'elle (la femme) escomptait est dégradée. » Quel élément faut-il supprimer en priorité ?",
          "options": [
            "Le mot « esthétique »",
            "La parenthèse « (la femme) »",
            "Le groupe « est dégradée »",
            "Le verbe « escomptait » seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une parenthèse n'est jamais essentielle ; l'idée est que la beauté espérée se dégrade."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p04_q4",
          "type": "mcq",
          "prompt": "Texte 2 : « Telles les femmes, des hommes se dépigmentent la peau. Certains le font juste par plaisir, d'autres se disent artistes. » Quelle partie est un exemple illustratif, moins essentiel ?",
          "options": [
            "« des hommes se dépigmentent la peau »",
            "Toute la première phrase",
            "Aucune : on recopie tout",
            "« Certains le font juste par plaisir, d'autres se disent artistes »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le plaisir et les artistes sont des exemples ; l'idée essentielle est que les hommes aussi se dépigmentent."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p04_q5",
          "type": "mcq",
          "prompt": "Texte 1, IE1 : « Dans les dernières années, l'océan Atlantique est devenu le cimetière de milliers d'émigrants. » Pourquoi est-ce une idée essentielle ?",
          "options": [
            "Elle pose le constat de départ du texte : les nombreux morts de l'immigration clandestine",
            "C'est une digression",
            "C'est une citation d'un autre auteur",
            "C'est un exemple sans importance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tout le texte part de ce constat dramatique."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p04_q6",
          "type": "mcq",
          "prompt": "Le texte 1 compte 13 idées essentielles, de IE1 (l'Atlantique « cimetière » des émigrants) à IE13 (les États africains doivent changer d'attitude). Dans quel ordre faut-il les garder ?",
          "options": [
            "Des plus courtes aux plus longues",
            "Dans l'ordre du texte",
            "Dans l'ordre alphabétique",
            "Dans l'ordre que l'on préfère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé respecte l'ordre des idées : il suit le raisonnement de l'auteur."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p04_q7",
          "type": "mcq",
          "prompt": "En sélectionnant les idées essentielles du texte 1, un élève supprime la phrase « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine ». A-t-il raison ?",
          "options": [
            "Oui : c'est un exemple",
            "Oui : c'est une répétition",
            "Non : c'est la thèse de l'auteur, elle doit être gardée",
            "Oui : c'est une digression"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sans la thèse, le résumé perd l'idée principale du texte."
        }
      ]
    },
    {
      "id": "terminale_francais_ee_l03_resume_texte_p05",
      "order": 5,
      "title": "L'enchaînement logique des idées",
      "summary": "Relier les idées essentielles par les bons connecteurs.",
      "conceptExplanation": "Une fois sélectionnées, les idées essentielles sont reliées par des connecteurs logiques. Ils montrent les rapports entre les idées et rendent le résumé cohérent.\n\nLes grandes familles :\n- opposition : mais, cependant, toutefois, néanmoins, or ;\n- addition : de plus, en outre, aussi ;\n- cause : parce que, car, étant donné que, en effet ;\n- conséquence : donc, par conséquent, alors, ainsi ;\n- concession : même si, bien que ;\n- temps : depuis.\n\nEnchaînement proposé pour le texte 1 :\n- IE1, puis « mais, néanmoins, cependant » avant IE2 ;\n- « depuis » avant IE3, puis IE4 ;\n- « de plus, en outre » avant IE5 ;\n- « toutefois, cependant » avant IE6, puis IE7 ;\n- « même si » avant IE8 ;\n- « il est donc » avant IE9, puis IE10 ;\n- « mais » avant IE11 ;\n- « alors, en effet » avant IE12 ;\n- « par conséquent » avant IE13.\n\nCorrection du document : avant IE8, il propose « même si » ou « étant donné que ». Ces connecteurs ne sont pas synonymes : « même si » exprime la concession, « étant donné que » la cause. C'est « même si » qui rend le sens de « si même le risque de mort ne dissuade pas ».\n\nPour le texte 2, l'exercice demande les connecteurs sans donner de corrigé. On peut proposer : « de plus » entre les paragraphes 1 et 2 ; « donc » pour le paragraphe 3 (le texte dit « n'est donc pas sans conséquences ») ; « en outre » pour le paragraphe 4 ; « ainsi » pour le paragraphe 5.",
      "keyRule": "Opposition : mais, cependant. Addition : de plus, en outre. Cause : car, en effet. Conséquence : donc, par conséquent. Concession : même si.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir un connecteur",
        "statement": "IE4 : « la seconde cause de migration est l'injustice sociale ». IE5 : « la lutte pour le pouvoir a ouvert des conflits ».",
        "methodSteps": [
          "Comparer les deux idées : ce sont deux causes de l'immigration.",
          "Nommer le rapport : on ajoute une cause à une autre, c'est l'addition.",
          "Choisir le connecteur : « de plus » ou « en outre »."
        ],
        "conclusion": "« L'injustice sociale pousse au départ. De plus, les conflits… »"
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le rôle des connecteurs",
          "stepTheme": "Le rôle des connecteurs",
          "stepBadge": "Le rôle des connecteurs",
          "paragraphText": "Les connecteurs logiques montrent les rapports entre les idées et rendent le résumé cohérent.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p05_q1",
            "type": "mcq",
            "prompt": "Dans un résumé de texte, pourquoi relie-t-on les idées essentielles par des connecteurs logiques ?",
            "options": [
              "Pour montrer les rapports entre les idées et rendre le résumé cohérent",
              "Pour allonger le résumé",
              "Pour remplacer la thèse",
              "Pour séparer le résumé en paragraphes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans connecteurs, le résumé devient une liste d'idées sans lien."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Ajouter une cause",
          "stepTheme": "Ajouter une cause",
          "stepBadge": "Ajouter une cause",
          "paragraphText": "Quand deux idées sont deux causes, on les relie par un connecteur d'addition : « de plus », « en outre ».",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p05_q2",
            "type": "mcq",
            "prompt": "Texte 1 : IE4 « la seconde cause de migration est l'injustice sociale et la grande précarité », puis IE5 « la lutte pour le pouvoir et l'accès aux richesses ont ouvert des conflits ». Quel connecteur relie le mieux IE4 à IE5 ?",
            "options": [
              "Cependant",
              "De plus",
              "Par conséquent",
              "Bref"
            ],
            "correctAnswerIndex": 1,
            "explanation": "IE5 ajoute une autre cause : c'est l'addition."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Marquer un changement",
          "stepTheme": "Marquer un changement",
          "stepBadge": "Marquer un changement",
          "paragraphText": "Quand le texte passe à une autre perspective, on utilise un connecteur d'opposition : « toutefois », « cependant ».",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p05_q3",
            "type": "mcq",
            "prompt": "IE5 parle des conflits qui poussent à partir ; IE6 dit « on ne peut nier que l'immigration irrégulière constitue l'une des principales préoccupations des pouvoirs publics des pays industrialisés ». Le texte change de point de vue. Quel connecteur proposer entre IE5 et IE6 ?",
            "options": [
              "En outre",
              "Car",
              "Toutefois",
              "De plus"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On passe des causes au regard des pays d'accueil : « toutefois » marque ce changement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Tirer une conséquence",
          "stepTheme": "Tirer une conséquence",
          "stepBadge": "Tirer une conséquence",
          "paragraphText": "« par conséquent » introduit une conséquence.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p05_q4",
            "type": "mcq",
            "prompt": "Texte 1 : IE12 « réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine », puis IE13 « les États africains doivent cesser d'agir comme dans les années de prospérité ». Quel connecteur de conséquence introduit IE13 ?",
            "options": [
              "Par conséquent",
              "Mais",
              "De plus",
              "Parce que"
            ],
            "correctAnswerIndex": 0,
            "explanation": "IE13 est la conséquence pratique de la thèse : « par conséquent »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les familles de connecteurs",
          "stepTheme": "Les familles de connecteurs",
          "stepBadge": "Les familles de connecteurs",
          "paragraphText": "Opposition : mais, cependant, toutefois, néanmoins. Conséquence : donc, par conséquent. Addition : de plus, en outre. Cause : parce que, car.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p05_q5",
            "type": "mcq",
            "prompt": "Parmi ces séries de connecteurs, laquelle exprime uniquement l'opposition ?",
            "options": [
              "Donc, par conséquent, alors",
              "De plus, en outre, aussi",
              "Parce que, car, étant donné que",
              "Mais, cependant, toutefois, néanmoins"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les quatre mots de cette série marquent une opposition."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Relier IE1 et IE2",
          "stepTheme": "Relier IE1 et IE2",
          "stepBadge": "Relier IE1 et IE2",
          "paragraphText": "Le danger de mort n'arrête pas les départs : IE1 et IE2 s'opposent. On les relie par « mais », « néanmoins » ou « cependant ».",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p05_q6",
            "type": "mcq",
            "prompt": "IE1 « l'océan Atlantique est devenu le cimetière de milliers d'émigrants » ; IE2 « les difficultés qu'ils rencontrent dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode, même clandestin ». Quel connecteur relie IE1 et IE2 ?",
            "options": [
              "Donc",
              "Néanmoins",
              "De plus",
              "Car"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Malgré la mort, ils partent : c'est une opposition."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Deux connecteurs différents",
          "stepTheme": "Deux connecteurs différents",
          "stepBadge": "Deux connecteurs différents",
          "paragraphText": "« même si » exprime la concession, « étant donné que » la cause : ils ne sont pas synonymes. Avant IE8, seul « même si » convient.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p05_q7",
            "type": "mcq",
            "prompt": "Avant IE8 « Si même le risque de mort ne dissuade pas les clandestins, comment agir ? », le document propose « même si » ou « étant donné que ». Ces deux connecteurs ont-ils le même sens ?",
            "options": [
              "Non : « même si » exprime la concession, « étant donné que » exprime la cause",
              "Oui : ils expriment tous deux la cause",
              "Oui : ils expriment tous deux l'opposition",
              "Non : « même si » exprime le temps"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Changer de connecteur peut changer le sens : il faut choisir celui qui respecte le texte."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_francais_ee_l03_resume_texte_p05_q1",
          "type": "mcq",
          "prompt": "Dans un résumé de texte, pourquoi relie-t-on les idées essentielles par des connecteurs logiques ?",
          "options": [
            "Pour montrer les rapports entre les idées et rendre le résumé cohérent",
            "Pour allonger le résumé",
            "Pour remplacer la thèse",
            "Pour séparer le résumé en paragraphes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans connecteurs, le résumé devient une liste d'idées sans lien."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p05_q2",
          "type": "mcq",
          "prompt": "Texte 1 : IE4 « la seconde cause de migration est l'injustice sociale et la grande précarité », puis IE5 « la lutte pour le pouvoir et l'accès aux richesses ont ouvert des conflits ». Quel connecteur relie le mieux IE4 à IE5 ?",
          "options": [
            "Cependant",
            "De plus",
            "Par conséquent",
            "Bref"
          ],
          "correctAnswerIndex": 1,
          "explanation": "IE5 ajoute une autre cause : c'est l'addition."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p05_q3",
          "type": "mcq",
          "prompt": "IE5 parle des conflits qui poussent à partir ; IE6 dit « on ne peut nier que l'immigration irrégulière constitue l'une des principales préoccupations des pouvoirs publics des pays industrialisés ». Le texte change de point de vue. Quel connecteur proposer entre IE5 et IE6 ?",
          "options": [
            "En outre",
            "Car",
            "Toutefois",
            "De plus"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On passe des causes au regard des pays d'accueil : « toutefois » marque ce changement."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p05_q4",
          "type": "mcq",
          "prompt": "Texte 1 : IE12 « réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine », puis IE13 « les États africains doivent cesser d'agir comme dans les années de prospérité ». Quel connecteur de conséquence introduit IE13 ?",
          "options": [
            "Par conséquent",
            "Mais",
            "De plus",
            "Parce que"
          ],
          "correctAnswerIndex": 0,
          "explanation": "IE13 est la conséquence pratique de la thèse : « par conséquent »."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p05_q5",
          "type": "mcq",
          "prompt": "Parmi ces séries de connecteurs, laquelle exprime uniquement l'opposition ?",
          "options": [
            "Donc, par conséquent, alors",
            "De plus, en outre, aussi",
            "Parce que, car, étant donné que",
            "Mais, cependant, toutefois, néanmoins"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les quatre mots de cette série marquent une opposition."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p05_q6",
          "type": "mcq",
          "prompt": "IE1 « l'océan Atlantique est devenu le cimetière de milliers d'émigrants » ; IE2 « les difficultés qu'ils rencontrent dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode, même clandestin ». Quel connecteur relie IE1 et IE2 ?",
          "options": [
            "Donc",
            "Néanmoins",
            "De plus",
            "Car"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Malgré la mort, ils partent : c'est une opposition."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p05_q7",
          "type": "mcq",
          "prompt": "Avant IE8 « Si même le risque de mort ne dissuade pas les clandestins, comment agir ? », le document propose « même si » ou « étant donné que ». Ces deux connecteurs ont-ils le même sens ?",
          "options": [
            "Non : « même si » exprime la concession, « étant donné que » exprime la cause",
            "Oui : ils expriment tous deux la cause",
            "Oui : ils expriment tous deux l'opposition",
            "Non : « même si » exprime le temps"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Changer de connecteur peut changer le sens : il faut choisir celui qui respecte le texte."
        }
      ]
    },
    {
      "id": "terminale_francais_ee_l03_resume_texte_p06",
      "order": 6,
      "title": "Reformuler les idées essentielles",
      "summary": "Dire les idées avec ses propres mots, sans en changer le sens.",
      "conceptExplanation": "Reformuler les idées essentielles, c'est les reprendre dans une expression personnelle sans en changer le sens.\n\nOn peut utiliser :\n- des synonymes (« l'immigration irrégulière » devient « l'immigration clandestine ») ;\n- des mots englobants (génériques) pour remplacer une énumération.\n\nOn peut transformer :\n- des phrases complexes en phrases simples ;\n- des phrases interrogatives directes en phrases interrogatives indirectes, ou en affirmations.\n\nExemples du texte 1 :\n- IE1 et IE2 sont fondues : « Depuis quelque temps, de nombreux Africains, conscients des risques et au péril de leur vie, préfèrent émigrer en Europe pour fuir les problèmes rencontrés chez eux. » ;\n- IE3 : « Après les indépendances, la situation d'extrême pauvreté des pays africains motive davantage l'immigration des jeunes vers l'Occident. » ;\n- IE8 (« comment agir ? ») : « Au regard de leur obstination, il faut envisager des solutions au phénomène de l'immigration clandestine. »\n\nExemples du texte 2 :\n- paragraphe 2, « Certains le font juste par plaisir, d'autres se disent artistes » : « Les hommes ne sont pas en reste : ils le font pour des raisons également futiles. » ;\n- paragraphe 3 : « La première conséquence est d'ordre esthétique : la dégradation de la beauté. » ;\n- paragraphe 5 : « Une prise de conscience s'impose donc pour ne pas compromettre sa vie. »\n\nAttention : la numérotation des idées change entre la séance 2 (IE1 à IE13) et la séance 3 (IE1-2 fusionnées, puis IE3 à IE13, sans IE12). La thèse n'est pas oubliée : elle est fondue dans l'idée « l'Europe devrait aider l'Afrique à se développer si elle veut lutter contre l'immigration clandestine ».",
      "keyRule": "Reformuler = ses propres mots, même sens. Outils : synonymes, mots englobants, phrases simples, pas de question directe.",
      "formulas": [],
      "workedExample": {
        "title": "Reformuler avec un mot englobant",
        "statement": "« Certains le font juste par plaisir, d'autres se disent artistes. »",
        "methodSteps": [
          "Repérer l'énumération : le plaisir, le métier d'artiste.",
          "Trouver ce qu'ils ont en commun : des raisons sans importance, futiles.",
          "Remplacer l'énumération par ce mot englobant."
        ],
        "conclusion": "« Les hommes le font pour des raisons futiles. »"
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Reformuler",
          "stepTheme": "Reformuler",
          "stepBadge": "Reformuler",
          "paragraphText": "Reformuler, c'est reprendre une idée avec ses propres mots, sans en changer le sens.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p06_q1",
            "type": "mcq",
            "prompt": "Dans un résumé de texte, que signifie « reformuler » une idée essentielle ?",
            "options": [
              "La recopier mot pour mot",
              "La reprendre avec ses propres mots sans en changer le sens",
              "Donner son opinion sur elle",
              "La supprimer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé est rédigé dans une expression personnelle, mais fidèle au texte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Un synonyme",
          "stepTheme": "Un synonyme",
          "stepBadge": "Un synonyme",
          "paragraphText": "On peut remplacer un mot par un synonyme : « l'immigration irrégulière » devient « l'immigration clandestine ».",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p06_q2",
            "type": "mcq",
            "prompt": "Texte 1 : « l'immigration irrégulière » devient, dans la reformulation, « l'immigration clandestine ». Quel procédé de reformulation est utilisé ?",
            "options": [
              "Un synonyme",
              "Un mot englobant",
              "Une interrogation indirecte",
              "Une citation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« irrégulière » et « clandestine » ont ici le même sens."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Un mot englobant",
          "stepTheme": "Un mot englobant",
          "stepBadge": "Un mot englobant",
          "paragraphText": "Un mot englobant (générique) remplace une énumération ou une série d'exemples.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p06_q3",
            "type": "mcq",
            "prompt": "Texte 2 : « Certains le font juste par plaisir, d'autres se disent artistes » est reformulé en « pour des raisons également futiles ». Quel procédé de reformulation est utilisé ?",
            "options": [
              "Un synonyme mot à mot",
              "Une phrase interrogative",
              "Un mot englobant qui résume les exemples",
              "Une citation du texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« futiles » regroupe le plaisir et le prétexte artistique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Pas de question directe",
          "stepTheme": "Pas de question directe",
          "stepBadge": "Pas de question directe",
          "paragraphText": "Une question directe du texte se transforme en interrogative indirecte ou en affirmation.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p06_q4",
            "type": "mcq",
            "prompt": "Texte 1, IE8 : « Si même le risque de mort ne dissuade pas les clandestins, comment agir ? » Quelle reformulation respecte les règles du résumé ?",
            "options": [
              "« Comment agir ? se demande l'auteur. »",
              "« L'auteur pose une question. »",
              "« Le risque de mort dissuade les clandestins. »",
              "« Au regard de leur obstination, il faut envisager des solutions à l'immigration clandestine. »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La question devient une affirmation fidèle ; la 3e réponse est un contresens."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Fondre deux idées",
          "stepTheme": "Fondre deux idées",
          "stepBadge": "Fondre deux idées",
          "paragraphText": "IE1 et IE2 peuvent être fondues en une seule phrase fidèle.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p06_q5",
            "type": "mcq",
            "prompt": "IE1 « l'océan Atlantique est devenu le cimetière de milliers d'émigrants » et IE2 « les difficultés qu'ils rencontrent dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode, même clandestin » sont reformulées ensemble. Quelle reformulation est fidèle ?",
            "options": [
              "« Depuis quelque temps, de nombreux Africains, au péril de leur vie, préfèrent émigrer en Europe pour fuir les problèmes rencontrés chez eux. »",
              "« Les Africains partent en Europe pour faire du tourisme. »",
              "« L'océan Atlantique est dangereux pour les pêcheurs. »",
              "« Plus personne ne veut quitter l'Afrique. »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle garde le danger (« au péril de leur vie ») et la cause du départ (les problèmes chez eux)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une phrase simple",
          "stepTheme": "Une phrase simple",
          "stepBadge": "Une phrase simple",
          "paragraphText": "Une phrase complexe peut devenir une phrase simple : « La première conséquence est d'ordre esthétique : la dégradation de la beauté. »",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p06_q6",
            "type": "mcq",
            "prompt": "Texte 2, paragraphe 3 : « La dépigmentation n'est donc pas sans conséquences diverses. Au premier rang, l'esthétique qu'elle (la femme) escomptait est dégradée. » Quelle reformulation simple et fidèle propose le cours ?",
            "options": [
              "« La dépigmentation rend toujours plus belle. »",
              "« La première conséquence est d'ordre esthétique : la dégradation de la beauté. »",
              "« Les femmes escomptent l'esthétique. »",
              "« La dépigmentation n'a aucune conséquence. »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux phrases deviennent une phrase simple qui garde le sens."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas trahir le sens",
          "stepTheme": "Ne pas trahir le sens",
          "stepBadge": "Ne pas trahir le sens",
          "paragraphText": "Reformuler ne doit jamais changer le sens : pas d'ajout, pas de contresens.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p06_q7",
            "type": "mcq",
            "prompt": "Texte 1, IE10 : « Il est certain que la plupart des migrants préféreraient rester dans leur pays d'origine parce qu'ils y ont leur famille, leur culture, leurs racines. » Quelle reformulation trahit le sens ?",
            "options": [
              "« La plupart des migrants voudraient rester chez eux, attachés à leurs racines. »",
              "« Les migrants resteraient volontiers dans leur pays, où sont leurs proches et leur culture. »",
              "« Les migrants n'ont aucun attachement à leur pays. »",
              "« Attachés à leur pays, la plupart des migrants préféreraient ne pas partir. »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte dit l'inverse : les migrants sont attachés à leur pays."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_francais_ee_l03_resume_texte_p06_q1",
          "type": "mcq",
          "prompt": "Dans un résumé de texte, que signifie « reformuler » une idée essentielle ?",
          "options": [
            "La recopier mot pour mot",
            "La reprendre avec ses propres mots sans en changer le sens",
            "Donner son opinion sur elle",
            "La supprimer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé est rédigé dans une expression personnelle, mais fidèle au texte."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p06_q2",
          "type": "mcq",
          "prompt": "Texte 1 : « l'immigration irrégulière » devient, dans la reformulation, « l'immigration clandestine ». Quel procédé de reformulation est utilisé ?",
          "options": [
            "Un synonyme",
            "Un mot englobant",
            "Une interrogation indirecte",
            "Une citation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« irrégulière » et « clandestine » ont ici le même sens."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p06_q3",
          "type": "mcq",
          "prompt": "Texte 2 : « Certains le font juste par plaisir, d'autres se disent artistes » est reformulé en « pour des raisons également futiles ». Quel procédé de reformulation est utilisé ?",
          "options": [
            "Un synonyme mot à mot",
            "Une phrase interrogative",
            "Un mot englobant qui résume les exemples",
            "Une citation du texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« futiles » regroupe le plaisir et le prétexte artistique."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p06_q4",
          "type": "mcq",
          "prompt": "Texte 1, IE8 : « Si même le risque de mort ne dissuade pas les clandestins, comment agir ? » Quelle reformulation respecte les règles du résumé ?",
          "options": [
            "« Comment agir ? se demande l'auteur. »",
            "« L'auteur pose une question. »",
            "« Le risque de mort dissuade les clandestins. »",
            "« Au regard de leur obstination, il faut envisager des solutions à l'immigration clandestine. »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La question devient une affirmation fidèle ; la 3e réponse est un contresens."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p06_q5",
          "type": "mcq",
          "prompt": "IE1 « l'océan Atlantique est devenu le cimetière de milliers d'émigrants » et IE2 « les difficultés qu'ils rencontrent dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode, même clandestin » sont reformulées ensemble. Quelle reformulation est fidèle ?",
          "options": [
            "« Depuis quelque temps, de nombreux Africains, au péril de leur vie, préfèrent émigrer en Europe pour fuir les problèmes rencontrés chez eux. »",
            "« Les Africains partent en Europe pour faire du tourisme. »",
            "« L'océan Atlantique est dangereux pour les pêcheurs. »",
            "« Plus personne ne veut quitter l'Afrique. »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle garde le danger (« au péril de leur vie ») et la cause du départ (les problèmes chez eux)."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p06_q6",
          "type": "mcq",
          "prompt": "Texte 2, paragraphe 3 : « La dépigmentation n'est donc pas sans conséquences diverses. Au premier rang, l'esthétique qu'elle (la femme) escomptait est dégradée. » Quelle reformulation simple et fidèle propose le cours ?",
          "options": [
            "« La dépigmentation rend toujours plus belle. »",
            "« La première conséquence est d'ordre esthétique : la dégradation de la beauté. »",
            "« Les femmes escomptent l'esthétique. »",
            "« La dépigmentation n'a aucune conséquence. »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux phrases deviennent une phrase simple qui garde le sens."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p06_q7",
          "type": "mcq",
          "prompt": "Texte 1, IE10 : « Il est certain que la plupart des migrants préféreraient rester dans leur pays d'origine parce qu'ils y ont leur famille, leur culture, leurs racines. » Quelle reformulation trahit le sens ?",
          "options": [
            "« La plupart des migrants voudraient rester chez eux, attachés à leurs racines. »",
            "« Les migrants resteraient volontiers dans leur pays, où sont leurs proches et leur culture. »",
            "« Les migrants n'ont aucun attachement à leur pays. »",
            "« Attachés à leur pays, la plupart des migrants préféreraient ne pas partir. »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte dit l'inverse : les migrants sont attachés à leur pays."
        }
      ]
    },
    {
      "id": "terminale_francais_ee_l03_resume_texte_p07",
      "order": 7,
      "title": "Rédiger le résumé",
      "summary": "Calculer le nombre de mots et respecter les contraintes de l'exercice.",
      "conceptExplanation": "Avant de rédiger, on calcule le nombre de mots du résumé.\n- Le texte 1 compte 801 mots.\n- Réduction au quart : 801 ÷ 4 = 200,25, soit environ 200 mots.\n- Marge de tolérance de plus ou moins 10 % : 200 × 10 ÷ 100 = 20 mots.\n- Le résumé doit compter entre 180 et 220 mots.\n\nLe résumé collectif du texte 1 compte 194 mots : il respecte la consigne. Il commence ainsi : « Depuis plusieurs années, de nombreux jeunes Africains, conscients des risques et au péril de leur vie, préfèrent émigrer en Europe pour fuir les problèmes rencontrés chez eux. Le constat est qu'après les indépendances, la situation d'extrême pauvreté des pays africains a motivé davantage l'immigration des jeunes vers l'Occident. À cela s'ajoutent les disparités sociales et les conséquences de l'instabilité politique en Afrique. Toutefois, l'immigration clandestine inquiète les dirigeants africains et occidentaux… »\n\nLes contraintes de l'exercice :\n- respecter l'ordre des idées du texte ;\n- rédiger dans une expression personnelle ;\n- éviter le style télégraphique (des phrases complètes, reliées par des connecteurs) ;\n- respecter le système énonciatif : garder les indices de personne et le système verbal du texte (on résume à la place de l'auteur, sans écrire « l'auteur dit que ») ;\n- respecter le nombre de mots demandé, et l'indiquer à la fin ;\n- présenter le résumé en un seul bloc, sans paragraphes.\n\nCorrections du document : « À cela s'ajoute les disparités » doit s'écrire « À cela s'ajoutent les disparités » (le sujet est pluriel) ; « les états africains » prend une majuscule : « les États africains ».",
      "keyRule": "Nombre de mots = mots du texte ÷ 4, avec une marge de ± 10 %. Un seul bloc, l'ordre du texte, des phrases complètes, le système énonciatif de l'auteur.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer le nombre de mots",
        "statement": "Un texte de 801 mots doit être résumé au quart, à 10 % près.",
        "methodSteps": [
          "Diviser par 4 : 801 ÷ 4 = 200,25, soit environ 200 mots.",
          "Calculer la marge : 10 % de 200 = 200 × 10 ÷ 100 = 20 mots.",
          "Encadrer : 200 − 20 = 180 et 200 + 20 = 220."
        ],
        "conclusion": "Le résumé doit compter entre 180 et 220 mots."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Réduire au quart",
          "stepTheme": "Réduire au quart",
          "stepBadge": "Réduire au quart",
          "paragraphText": "Pour réduire au quart, on divise le nombre de mots du texte par 4 : 801 ÷ 4 = 200,25, soit environ 200 mots.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p07_q1",
            "type": "mcq",
            "prompt": "Le texte 1 compte 801 mots et doit être résumé au quart. Combien de mots le résumé vise-t-il, environ ?",
            "options": [
              "400 mots",
              "200 mots",
              "80 mots",
              "267 mots"
            ],
            "correctAnswerIndex": 1,
            "explanation": "801 ÷ 4 = 200,25, soit environ 200 mots."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La marge de tolérance",
          "stepTheme": "La marge de tolérance",
          "stepBadge": "La marge de tolérance",
          "paragraphText": "La marge est de plus ou moins 10 % : 10 % de 200 = 20 mots. Le résumé doit compter entre 180 et 220 mots.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p07_q2",
            "type": "mcq",
            "prompt": "On vise un résumé de 200 mots, avec une marge de tolérance de plus ou moins 10 %. Entre combien de mots le résumé doit-il être compris ?",
            "options": [
              "Entre 180 et 220 mots",
              "Entre 190 et 210 mots",
              "Entre 100 et 300 mots",
              "Entre 200 et 220 mots"
            ],
            "correctAnswerIndex": 0,
            "explanation": "10 % de 200 = 20 ; 200 − 20 = 180 et 200 + 20 = 220."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un autre calcul",
          "stepTheme": "Un autre calcul",
          "stepBadge": "Un autre calcul",
          "paragraphText": "Même méthode pour tout texte : diviser par 4, puis enlever et ajouter 10 % du résultat.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p07_q3",
            "type": "mcq",
            "prompt": "Un texte de 600 mots doit être résumé au quart, avec une marge de plus ou moins 10 %. Quel intervalle de mots faut-il respecter ?",
            "options": [
              "Entre 140 et 160 mots",
              "Entre 150 et 165 mots",
              "Entre 135 et 165 mots",
              "Entre 540 et 660 mots"
            ],
            "correctAnswerIndex": 2,
            "explanation": "600 ÷ 4 = 150 ; 10 % de 150 = 15 ; donc entre 135 et 165 mots."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Vérifier son résumé",
          "stepTheme": "Vérifier son résumé",
          "stepBadge": "Vérifier son résumé",
          "paragraphText": "Le résumé collectif du texte 1 compte 194 mots : c'est bien entre 180 et 220.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p07_q4",
            "type": "mcq",
            "prompt": "Le résumé collectif du texte 1 (801 mots, à résumer au quart à 10 % près) compte 194 mots. Respecte-t-il la consigne ?",
            "options": [
              "Oui : 194 est compris entre 180 et 220",
              "Non : il faut exactement 200 mots",
              "Non : il dépasse 220 mots",
              "Non : il doit compter au moins 801 mots"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'intervalle autorisé est [180 ; 220] : 194 y est."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La présentation",
          "stepTheme": "La présentation",
          "stepBadge": "La présentation",
          "paragraphText": "Le résumé se présente en un seul bloc, sans paragraphes, et suit l'ordre des idées du texte.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p07_q5",
            "type": "mcq",
            "prompt": "Comment doit-on présenter un résumé de texte au baccalauréat ?",
            "options": [
              "En plusieurs paragraphes avec des titres",
              "Sous forme de liste à puces",
              "En commençant par la conclusion du texte",
              "En un seul bloc, sans paragraphes, en suivant l'ordre des idées du texte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un bloc unique, dans l'ordre du texte."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le système énonciatif",
          "stepTheme": "Le système énonciatif",
          "stepBadge": "Le système énonciatif",
          "paragraphText": "On résume à la place de l'auteur, avec ses pronoms et ses temps : on n'écrit pas « l'auteur dit que ».",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p07_q6",
            "type": "mcq",
            "prompt": "Le texte 1 utilise « on » et « nous » et parle au présent. Dans son résumé, un élève écrit : « L'auteur dit que nous devons réduire la pauvreté. » Quelle règle ne respecte-t-il pas ?",
            "options": [
              "Le nombre de mots",
              "Le système énonciatif : on résume à la place de l'auteur, avec ses pronoms, sans écrire « l'auteur dit que »",
              "L'orthographe du mot « pauvreté »",
              "L'ordre alphabétique des idées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé garde la voix de l'auteur ; « l'auteur dit que » transforme le résumé en compte rendu."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le style télégraphique",
          "stepTheme": "Le style télégraphique",
          "stepBadge": "Le style télégraphique",
          "paragraphText": "Le style télégraphique (des mots sans phrases) est interdit : il faut des phrases complètes reliées par des connecteurs.",
          "exercise": {
            "id": "terminale_francais_ee_l03_resume_texte_p07_q7",
            "type": "mcq",
            "prompt": "Un élève écrit dans son résumé : « Immigration clandestine : pauvreté, conflits, injustice. Solutions : emplois, sensibilisation. » Quel défaut a-t-il commis ?",
            "options": [
              "Le style télégraphique : il faut des phrases complètes, reliées par des connecteurs",
              "Il a utilisé trop de connecteurs logiques",
              "Il a fait trop de paragraphes",
              "Il a gardé la thèse de l'auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Des mots isolés ne forment pas un résumé : il faut rédiger."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_francais_ee_l03_resume_texte_p07_q1",
          "type": "mcq",
          "prompt": "Le texte 1 compte 801 mots et doit être résumé au quart. Combien de mots le résumé vise-t-il, environ ?",
          "options": [
            "400 mots",
            "200 mots",
            "80 mots",
            "267 mots"
          ],
          "correctAnswerIndex": 1,
          "explanation": "801 ÷ 4 = 200,25, soit environ 200 mots."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p07_q2",
          "type": "mcq",
          "prompt": "On vise un résumé de 200 mots, avec une marge de tolérance de plus ou moins 10 %. Entre combien de mots le résumé doit-il être compris ?",
          "options": [
            "Entre 180 et 220 mots",
            "Entre 190 et 210 mots",
            "Entre 100 et 300 mots",
            "Entre 200 et 220 mots"
          ],
          "correctAnswerIndex": 0,
          "explanation": "10 % de 200 = 20 ; 200 − 20 = 180 et 200 + 20 = 220."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p07_q3",
          "type": "mcq",
          "prompt": "Un texte de 600 mots doit être résumé au quart, avec une marge de plus ou moins 10 %. Quel intervalle de mots faut-il respecter ?",
          "options": [
            "Entre 140 et 160 mots",
            "Entre 150 et 165 mots",
            "Entre 135 et 165 mots",
            "Entre 540 et 660 mots"
          ],
          "correctAnswerIndex": 2,
          "explanation": "600 ÷ 4 = 150 ; 10 % de 150 = 15 ; donc entre 135 et 165 mots."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p07_q4",
          "type": "mcq",
          "prompt": "Le résumé collectif du texte 1 (801 mots, à résumer au quart à 10 % près) compte 194 mots. Respecte-t-il la consigne ?",
          "options": [
            "Oui : 194 est compris entre 180 et 220",
            "Non : il faut exactement 200 mots",
            "Non : il dépasse 220 mots",
            "Non : il doit compter au moins 801 mots"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'intervalle autorisé est [180 ; 220] : 194 y est."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p07_q5",
          "type": "mcq",
          "prompt": "Comment doit-on présenter un résumé de texte au baccalauréat ?",
          "options": [
            "En plusieurs paragraphes avec des titres",
            "Sous forme de liste à puces",
            "En commençant par la conclusion du texte",
            "En un seul bloc, sans paragraphes, en suivant l'ordre des idées du texte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un bloc unique, dans l'ordre du texte."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p07_q6",
          "type": "mcq",
          "prompt": "Le texte 1 utilise « on » et « nous » et parle au présent. Dans son résumé, un élève écrit : « L'auteur dit que nous devons réduire la pauvreté. » Quelle règle ne respecte-t-il pas ?",
          "options": [
            "Le nombre de mots",
            "Le système énonciatif : on résume à la place de l'auteur, avec ses pronoms, sans écrire « l'auteur dit que »",
            "L'orthographe du mot « pauvreté »",
            "L'ordre alphabétique des idées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé garde la voix de l'auteur ; « l'auteur dit que » transforme le résumé en compte rendu."
        },
        {
          "id": "terminale_francais_ee_l03_resume_texte_p07_q7",
          "type": "mcq",
          "prompt": "Un élève écrit dans son résumé : « Immigration clandestine : pauvreté, conflits, injustice. Solutions : emplois, sensibilisation. » Quel défaut a-t-il commis ?",
          "options": [
            "Le style télégraphique : il faut des phrases complètes, reliées par des connecteurs",
            "Il a utilisé trop de connecteurs logiques",
            "Il a fait trop de paragraphes",
            "Il a gardé la thèse de l'auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Des mots isolés ne forment pas un résumé : il faut rédiger."
        }
      ]
    }
  ]
};
