import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Les tonalités littéraires » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=506
export const FR_TLE_PL_L08_TONALITES: CurriculumChapter = {
  "id": "terminale_a1_francais_pl_l08_tonalites_litteraires",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 8,
  "title": "Leçon 8 : Les tonalités littéraires",
  "summary": "Les élèves de Terminale s'exercent, à partir des textes supports de Victor Hugo et de Molière, à identifier, analyser et utiliser judicieusement les tonalités littéraires tragique, lyrique et comique.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=506",
  "points": [
    {
      "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01",
      "order": 1,
      "title": "La tonalité tragique",
      "summary": "Définir la tonalité tragique et repérer ses indices dans Le dernier jour d'un condamné de Victor Hugo.",
      "conceptExplanation": "Les tonalités littéraires sont un ensemble de caractéristiques qui permettent d'identifier le ton, la couleur particulière d'un texte. La tonalité tragique vise à inspirer la terreur et la pitié. Elle est très souvent liée au genre théâtral. Elle se caractérise par la mise en valeur d'une sorte de fatalité qui pousse inévitablement l'homme à l'échec, au malheur et/ou à la mort.\nSes indices dans le texte support 1, Le dernier jour d'un condamné de Victor Hugo (1829), sont nombreux : le langage souvent soutenu ; les champs lexicaux de la mort et de la souffrance (« mon testament », « ma mort », « dernier moment », « elle mourra ») ; des passions destructrices ; des sentiments héroïques ; les forces implacables d'ordre passionnel, politique, juridique, social ou moral (« Je suis condamné », « J'admets que je sois justement puni ») ; et des procédés rhétoriques comme la comparaison, la répétition avec énumération (« Je laisse une mère, je laisse une femme, je laisse un enfant »), les exclamations et les oppositions. Sa fonction est de provoquer chez le lecteur l'effroi et la pitié. Ses thèmes principaux sont la mort, la souffrance et la fatalité.",
      "keyRule": "Tragique : fatalité qui mène à l'échec, au malheur ou à la mort, pour inspirer au lecteur terreur, effroi et pitié.",
      "formulas": [],
      "workedExample": {
        "title": "Trois femmes, trois orphelines chez Hugo",
        "statement": "Dans le texte support 1, analyse la tonalité du passage : « Je laisse une mère, je laisse une femme, je laisse un enfant ».",
        "methodSteps": [
          "Le locuteur est un condamné à mort qui rédige son journal avant son exécution.",
          "La répétition avec énumération de « je laisse » insiste sur les trois femmes condamnées à devenir veuves ou orpheline du fait de la loi.",
          "Les champs lexicaux de la mort et de la souffrance dominent : testament, mort, déshonneur, ruine.",
          "La fatalité juridique est implacable : l'homme est condamné et rien ne peut arrêter l'exécution.",
          "L'ensemble vise à provoquer l'effroi et la pitié : c'est la tonalité tragique."
        ],
        "conclusion": "Fatalité, mort et souffrance, soutenues par la répétition et l'énumération, créent la tonalité tragique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une tonalité littéraire",
          "stepTheme": "Une tonalité littéraire",
          "stepBadge": "Une tonalité littéraire",
          "paragraphText": "• Tonalité littéraire : ensemble de caractéristiques qui permettent d'identifier le ton, la couleur particulière d'un texte.\nLe résumé étudie trois tonalités récurrentes : tragique, lyrique et comique.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q1",
            "type": "mcq",
            "prompt": "Une tonalité littéraire permet d'identifier :",
            "options": [
              "Le nombre de pages d'un texte",
              "Le ton et la couleur particulière d'un texte",
              "La date de publication d'un texte",
              "Le prix d'un livre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition d'ouverture du résumé pour les tonalités littéraires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La tonalité tragique",
          "stepTheme": "La tonalité tragique",
          "stepBadge": "La tonalité tragique",
          "paragraphText": "• Tonalité tragique : tonalité qui vise à inspirer la terreur et la pitié.\nElle met en valeur une fatalité qui pousse inévitablement l'homme à l'échec, au malheur et/ou à la mort, et elle est très souvent liée au genre théâtral.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q2",
            "type": "mcq",
            "prompt": "La tonalité tragique vise à inspirer :",
            "options": [
              "L'amusement et le rire",
              "L'exaltation amoureuse uniquement",
              "La terreur et la pitié",
              "L'indifférence du lecteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définition du résumé : terreur et pitié, par une fatalité qui mène à l'échec, au malheur ou à la mort."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les champs lexicaux du tragique",
          "stepTheme": "Les champs lexicaux du tragique",
          "stepBadge": "Les champs lexicaux du tragique",
          "paragraphText": "Parmi les indices du tragique, le résumé relève les champs lexicaux de la mort et de la souffrance.\nDans le texte de Hugo : « mon testament », « ma mort », « dernier moment », « elle mourra ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q3",
            "type": "mcq",
            "prompt": "Parmi les expressions suivantes, laquelle appartient au champ lexical de la mort dans le texte de Hugo ?",
            "options": [
              "Mon testament",
              "Ma pauvre petite Marie qui rit",
              "La guillotine, c'est fort cher",
              "Une chaînette d'or"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé cite mon testament, ma mort, dernier moment et elle mourra comme indices du champ lexical de la mort."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les forces implacables",
          "stepTheme": "Les forces implacables",
          "stepBadge": "Les forces implacables",
          "paragraphText": "Le tragique met en scène des forces implacables d'ordre passionnel, politique, juridique, social ou moral.\nDans le texte de Hugo, la force est juridique : « Je suis condamné », « J'admets que je sois justement puni ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q4",
            "type": "mcq",
            "prompt": "Dans le texte de Hugo, la force implacable qui écrase le condamné est d'ordre :",
            "options": [
              "Naturel uniquement",
              "Comique",
              "Juridique, par la condamnation à mort",
              "Sportif"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé illustre les forces implacables par la condamnation : je suis condamné ; c'est la justice, dit le texte."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le langage soutenu, indice du tragique",
          "stepTheme": "Le langage soutenu, indice du tragique",
          "stepBadge": "Le langage soutenu, indice du tragique",
          "paragraphText": "Piège : un texte en prose et à la première personne peut quand même être tragique.\nLe résumé relève, parmi ses indices, le langage souvent soutenu, illustré par « Je suis condamné aux frais, et tout ce que j'ai y suffira à peine », et rappelle que tout le texte de Hugo en est une illustration.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q5",
            "type": "mcq",
            "prompt": "Selon le résumé, le langage du texte tragique de Hugo est :",
            "options": [
              "Familier et plein de jeux de mots",
              "Souvent soutenu",
              "Uniquement fait d'exclamations comiques",
              "Absent, le texte est sans paroles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le langage souvent soutenu figure en tête des indices textuels de la tonalité tragique dans le résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La répétition de je laisse",
          "stepTheme": "La répétition de je laisse",
          "stepBadge": "La répétition de je laisse",
          "paragraphText": "Exemple du résumé parmi les procédés rhétoriques du tragique : la répétition avec énumération « Je laisse une mère, je laisse une femme, je laisse un enfant ».\nElle précède le constat : trois orphelines de différente espèce, trois veuves du fait de la loi.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q6",
            "type": "mcq",
            "prompt": "Le procédé relevé dans « Je laisse une mère, je laisse une femme, je laisse un enfant » est :",
            "options": [
              "La comparaison amusante",
              "Le jeu de sonorité",
              "Le comique de situation",
              "La répétition avec énumération"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé range cette phrase parmi les procédés rhétoriques de la tonalité tragique : répétition et énumération."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q1",
          "type": "mcq",
          "prompt": "Une tonalité littéraire permet d'identifier :",
          "options": [
            "Le nombre de pages d'un texte",
            "Le ton et la couleur particulière d'un texte",
            "La date de publication d'un texte",
            "Le prix d'un livre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition d'ouverture du résumé pour les tonalités littéraires."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q2",
          "type": "mcq",
          "prompt": "La tonalité tragique vise à inspirer :",
          "options": [
            "L'amusement et le rire",
            "L'exaltation amoureuse uniquement",
            "La terreur et la pitié",
            "L'indifférence du lecteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définition du résumé : terreur et pitié, par une fatalité qui mène à l'échec, au malheur ou à la mort."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q3",
          "type": "mcq",
          "prompt": "Parmi les expressions suivantes, laquelle appartient au champ lexical de la mort dans le texte de Hugo ?",
          "options": [
            "Mon testament",
            "Ma pauvre petite Marie qui rit",
            "La guillotine, c'est fort cher",
            "Une chaînette d'or"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé cite mon testament, ma mort, dernier moment et elle mourra comme indices du champ lexical de la mort."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q4",
          "type": "mcq",
          "prompt": "Dans le texte de Hugo, la force implacable qui écrase le condamné est d'ordre :",
          "options": [
            "Naturel uniquement",
            "Comique",
            "Juridique, par la condamnation à mort",
            "Sportif"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé illustre les forces implacables par la condamnation : je suis condamné ; c'est la justice, dit le texte."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q5",
          "type": "mcq",
          "prompt": "Selon le résumé, le langage du texte tragique de Hugo est :",
          "options": [
            "Familier et plein de jeux de mots",
            "Souvent soutenu",
            "Uniquement fait d'exclamations comiques",
            "Absent, le texte est sans paroles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le langage souvent soutenu figure en tête des indices textuels de la tonalité tragique dans le résumé."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p01_q6",
          "type": "mcq",
          "prompt": "Le procédé relevé dans « Je laisse une mère, je laisse une femme, je laisse un enfant » est :",
          "options": [
            "La comparaison amusante",
            "Le jeu de sonorité",
            "Le comique de situation",
            "La répétition avec énumération"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé range cette phrase parmi les procédés rhétoriques de la tonalité tragique : répétition et énumération."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02",
      "order": 2,
      "title": "La tonalité lyrique",
      "summary": "Reconnaître la tonalité lyrique à l'expression des sentiments et des émotions du locuteur.",
      "conceptExplanation": "Le lyrisme traduit les sentiments et les émotions du locuteur. On retrouve la tonalité lyrique aussi bien dans la poésie, le roman et le théâtre.\nSes caractéristiques, relevées dans le même texte de Victor Hugo, sont : la présence de la première personne du singulier (« je », « mon », « ma ») ; l'emploi d'une ponctuation forte, avec les points d'interrogation, les points d'exclamation et de nombreuses virgules ; et des figures de style comme l'énumération (« Ma pauvre petite Marie qui rit, qui joue, qui chante »), la comparaison (« Elle dort, elle est comme morte ») et l'hyperbole (« La guillotine, c'est fort cher »).\nSes thèmes sont l'amour, la vie, la nature, la solitude, la fuite du temps et la mort. Dans le texte support, le lyrisme affleure dans l'évocation de la fille du condamné, « ma pauvre petite Marie, qui rit, qui joue, qui chante à cette heure et ne pense à rien », dont la pensée fait mal au père : l'émotion personnelle du locuteur y est au premier plan.",
      "keyRule": "Lyrique : le je du locuteur exprime ses sentiments et ses émotions, avec ponctuation forte et figures de style, sur l'amour, la vie, la nature, la solitude, la fuite du temps ou la mort.",
      "formulas": [],
      "workedExample": {
        "title": "Ma pauvre petite Marie, passage lyrique dans un texte tragique",
        "statement": "Dans le texte support 1, montre la tonalité lyrique du passage sur la fille du condamné.",
        "methodSteps": [
          "Le locuteur parle à la première personne : ma fille, mon enfant, ma pauvre petite Marie.",
          "L'énumération « qui rit, qui joue, qui chante » peint l'innocence de l'enfant par les sentiments du père.",
          "L'exclamation finale, « c'est celle-là qui me fait mal », livre directement l'émotion du locuteur avec une ponctuation forte.",
          "Le passage traduit donc les sentiments et les émotions du locuteur : c'est la tonalité lyrique, au sein d'un récit tragique."
        ],
        "conclusion": "Première personne, énumération et exclamation au service de l'émotion du père : tonalité lyrique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La tonalité lyrique",
          "stepTheme": "La tonalité lyrique",
          "stepBadge": "La tonalité lyrique",
          "paragraphText": "• Tonalité lyrique : tonalité où le lyrisme traduit les sentiments et les émotions du locuteur.\nOn la retrouve aussi bien dans la poésie, le roman et le théâtre.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q1",
            "type": "mcq",
            "prompt": "La tonalité lyrique traduit avant tout :",
            "options": [
              "Une fatalité qui mène à la mort",
              "Les sentiments et les émotions du locuteur",
              "Un raisonnement par l'absurde",
              "Les pensées de tous les personnages"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du résumé : le lyrisme est l'expression des sentiments et des émotions du locuteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La première personne du singulier",
          "stepTheme": "La première personne du singulier",
          "stepBadge": "La première personne du singulier",
          "paragraphText": "Première caractéristique du lyrisme selon le résumé : la présence de la première personne du singulier.\nLe texte de Hugo la montre avec « je », « mon » et « ma » dans la bouche du condamné.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q2",
            "type": "mcq",
            "prompt": "La première caractéristique de la tonalité lyrique relevée par le résumé est :",
            "options": [
              "La présence de la première personne du singulier",
              "La présence d'un avare ridicule",
              "La présence d'une condamnation juridique",
              "La présence d'un chiasme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé cite je, mon, ma comme indices de la présence du locuteur qui exprime ses sentiments."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une ponctuation forte",
          "stepTheme": "Une ponctuation forte",
          "stepBadge": "Une ponctuation forte",
          "paragraphText": "Le lyrisme emploie une ponctuation forte, selon le résumé.\nPoints d'interrogation, points d'exclamation et nombreuses virgules traduisent l'émotion dans le texte de Hugo.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q3",
            "type": "mcq",
            "prompt": "La ponctuation forte de la tonalité lyrique comprend notamment :",
            "options": [
              "Uniquement des points finals",
              "Des points d'interrogation, des points d'exclamation et de nombreuses virgules",
              "Uniquement des points de suspension",
              "Aucune ponctuation expressive"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois signes cités par le résumé pour la ponctuation forte du lyrisme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les thèmes du lyrisme",
          "stepTheme": "Les thèmes du lyrisme",
          "stepBadge": "Les thèmes du lyrisme",
          "paragraphText": "Les thèmes de la tonalité lyrique cités par le résumé sont l'amour, la vie, la nature, la solitude, la fuite du temps et la mort.\nLa mort y figure donc aussi, mais traitée comme sentiment personnel du locuteur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q4",
            "type": "mcq",
            "prompt": "Parmi les thèmes suivants, lequel est un thème lyrique selon le résumé ?",
            "options": [
              "La fuite du temps",
              "Le vol d'une cassette",
              "La fête du trône",
              "La navigation maritime"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fuite du temps figure dans la liste du résumé, avec l'amour, la vie, la nature, la solitude et la mort."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Lyrique dans un texte tragique",
          "stepTheme": "Lyrique dans un texte tragique",
          "stepBadge": "Lyrique dans un texte tragique",
          "paragraphText": "Piège : le texte de Hugo est tragique dans son ensemble, ce qui n'empêche pas des passages lyriques.\nLe résumé relève les indices lyriques dans ce même texte : première personne, énumération sur Marie et hyperbole sur la guillotine. Les tonalités peuvent donc coexister dans un texte.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q5",
            "type": "mcq",
            "prompt": "Le relevé du résumé sur le texte de Hugo montre que :",
            "options": [
              "Un texte ne peut avoir qu'une seule tonalité, sans exception",
              "La tonalité lyrique est absente du texte",
              "Des indices lyriques peuvent être relevés dans un texte à dominante tragique",
              "Le lyrisme exige un poème en vers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé tire ses exemples lyriques du texte même de Hugo : énumération, comparaison et hyperbole y sont relevées."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Elle dort, elle est comme morte",
          "stepTheme": "Elle dort, elle est comme morte",
          "stepBadge": "Elle dort, elle est comme morte",
          "paragraphText": "Exemple du résumé pour la comparaison dans la tonalité lyrique : « Elle dort, elle est comme morte », à propos de la femme du condamné devenue folle.\nLa comparaison sert ici l'expression de l'émotion du locuteur sur celle qu'il aime.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q6",
            "type": "mcq",
            "prompt": "La figure relevée par le résumé dans « Elle dort, elle est comme morte » est :",
            "options": [
              "L'énumération",
              "L'hyperbole",
              "La comparaison",
              "Le comique verbal"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé range cette phrase parmi les figures de style de la tonalité lyrique, sous la comparaison."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q1",
          "type": "mcq",
          "prompt": "La tonalité lyrique traduit avant tout :",
          "options": [
            "Une fatalité qui mène à la mort",
            "Les sentiments et les émotions du locuteur",
            "Un raisonnement par l'absurde",
            "Les pensées de tous les personnages"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du résumé : le lyrisme est l'expression des sentiments et des émotions du locuteur."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q2",
          "type": "mcq",
          "prompt": "La première caractéristique de la tonalité lyrique relevée par le résumé est :",
          "options": [
            "La présence de la première personne du singulier",
            "La présence d'un avare ridicule",
            "La présence d'une condamnation juridique",
            "La présence d'un chiasme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé cite je, mon, ma comme indices de la présence du locuteur qui exprime ses sentiments."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q3",
          "type": "mcq",
          "prompt": "La ponctuation forte de la tonalité lyrique comprend notamment :",
          "options": [
            "Uniquement des points finals",
            "Des points d'interrogation, des points d'exclamation et de nombreuses virgules",
            "Uniquement des points de suspension",
            "Aucune ponctuation expressive"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois signes cités par le résumé pour la ponctuation forte du lyrisme."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q4",
          "type": "mcq",
          "prompt": "Parmi les thèmes suivants, lequel est un thème lyrique selon le résumé ?",
          "options": [
            "La fuite du temps",
            "Le vol d'une cassette",
            "La fête du trône",
            "La navigation maritime"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fuite du temps figure dans la liste du résumé, avec l'amour, la vie, la nature, la solitude et la mort."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q5",
          "type": "mcq",
          "prompt": "Le relevé du résumé sur le texte de Hugo montre que :",
          "options": [
            "Un texte ne peut avoir qu'une seule tonalité, sans exception",
            "La tonalité lyrique est absente du texte",
            "Des indices lyriques peuvent être relevés dans un texte à dominante tragique",
            "Le lyrisme exige un poème en vers"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé tire ses exemples lyriques du texte même de Hugo : énumération, comparaison et hyperbole y sont relevées."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p02_q6",
          "type": "mcq",
          "prompt": "La figure relevée par le résumé dans « Elle dort, elle est comme morte » est :",
          "options": [
            "L'énumération",
            "L'hyperbole",
            "La comparaison",
            "Le comique verbal"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé range cette phrase parmi les figures de style de la tonalité lyrique, sous la comparaison."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03",
      "order": 3,
      "title": "La tonalité comique",
      "summary": "Reconnaître la tonalité comique et ses formes dans le monologue d'Harpagon, dans L'Avare de Molière.",
      "conceptExplanation": "La tonalité comique provoque l'amusement et le rire. Les formes du comique jouent sur la fantaisie verbale (le comique verbal), la caricature, c'est-à-dire la peinture grossière des personnes ou des choses, les effets de surprise ou le raisonnement par l'absurde, ce qui ne répond pas à une logique. Cette tonalité se trouve surtout dans les comédies.\nLe texte support 2 est le monologue d'Harpagon, dans L'Avare de Molière (acte IV, scène 7, 1668) : le vieil avare vient de découvrir le vol de sa chère cassette de dix mille écus, enterrée dans son jardin, et crie au voleur. Le résumé y relève le comique de situation : Harpagon se prend lui-même le bras en criant « Arrête. Rends-moi mon argent, coquin... ». Les caractéristiques du comique comprennent aussi les jeux de mots et de sonorité, les répétitions, les énumérations, les comparaisons amusantes, les noms inventés ou déformés, les exagérations, les propos absurdes ou familiers, les antiphrases et les oppositions. Le comique peut développer tous les thèmes.",
      "keyRule": "Comique : amusement et rire par le verbal, la caricature, la surprise ou l'absurde, surtout dans les comédies ; il peut traiter tous les thèmes.",
      "formulas": [],
      "workedExample": {
        "title": "Harpagon se prend lui-même le bras",
        "statement": "Dans le texte support 2, explique pourquoi la scène d'Harpagon est comique.",
        "methodSteps": [
          "Harpagon découvre le vol de sa cassette de dix mille écus et crie au voleur, à l'assassin, au meurtrier.",
          "Ses questions s'enchaînent sans logique : où est-il, où se cache-t-il, où courir, où ne pas courir.",
          "Il finit par se prendre lui-même le bras en ordonnant : « Arrête. Rends-moi mon argent, coquin... ».",
          "Ce geste absurde, relevé par le résumé comme comique de situation, provoque le rire aux dépens de l'avare.",
          "La tonalité est donc comique, dans une comédie de Molière."
        ],
        "conclusion": "Exagérations, questions absurdes et comique de situation font rire : tonalité comique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La tonalité comique",
          "stepTheme": "La tonalité comique",
          "stepBadge": "La tonalité comique",
          "paragraphText": "• Tonalité comique : tonalité qui provoque l'amusement et le rire.\nElle se trouve surtout dans les comédies, comme L'Avare de Molière, texte support 2 du résumé.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q1",
            "type": "mcq",
            "prompt": "La tonalité comique provoque :",
            "options": [
              "La terreur et la pitié",
              "L'amusement et le rire",
              "La méditation sur la fuite du temps",
              "L'effroi devant la fatalité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition du résumé, à opposer à la terreur et à la pitié du tragique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les formes du comique",
          "stepTheme": "Les formes du comique",
          "stepBadge": "Les formes du comique",
          "paragraphText": "Les formes du comique jouent sur la fantaisie verbale, la caricature (peinture grossière des personnes ou des choses), les effets de surprise ou le raisonnement par l'absurde.\nL'absurde est défini par le résumé comme ce qui ne répond pas à une logique.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q2",
            "type": "mcq",
            "prompt": "Parmi les formes du comique citées par le résumé, on trouve :",
            "options": [
              "La fatalité implacable",
              "Le champ lexical de la mort",
              "La caricature et le raisonnement par l'absurde",
              "La ponctuation forte du lyrisme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé cite la fantaisie verbale, la caricature, les effets de surprise et le raisonnement par l'absurde."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le comique de situation d'Harpagon",
          "stepTheme": "Le comique de situation d'Harpagon",
          "stepBadge": "Le comique de situation d'Harpagon",
          "paragraphText": "Exemple du résumé pour le comique de situation : Harpagon se prend lui-même le bras.\nIl crie « Arrête. Rends-moi mon argent, coquin... » en se saisissant comme s'il tenait le voleur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q3",
            "type": "mcq",
            "prompt": "Le geste d'Harpagon qui se prend lui-même le bras relève :",
            "options": [
              "Du comique de situation",
              "De la tonalité tragique",
              "De la tonalité lyrique",
              "Du champ lexical de la souffrance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé identifie explicitement ce geste comme le comique de situation du texte support 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les procédés du comique",
          "stepTheme": "Les procédés du comique",
          "stepBadge": "Les procédés du comique",
          "paragraphText": "Parmi les caractéristiques du comique, le résumé cite les jeux de mots et de sonorité, les répétitions, les énumérations et les comparaisons amusantes.\nIl cite aussi les noms inventés ou déformés, les exagérations, les propos absurdes ou familiers, les antiphrases et les oppositions.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q4",
            "type": "mcq",
            "prompt": "Parmi les procédés suivants, lequel est une caractéristique du comique selon le résumé ?",
            "options": [
              "Les forces implacables juridiques",
              "Les sentiments héroïques",
              "La fatalité qui mène à la mort",
              "Les jeux de mots et les noms inventés ou déformés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Jeux de mots, noms inventés ou déformés et propos absurdes figurent dans la liste des caractéristiques du comique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le comique peut traiter tous les thèmes",
          "stepTheme": "Le comique peut traiter tous les thèmes",
          "stepBadge": "Le comique peut traiter tous les thèmes",
          "paragraphText": "Piège : croire que le comique est limité aux sujets légers ou à un thème précis.\nLe résumé conclut la partie comique en précisant que le comique peut développer tous les thèmes, y compris ici un vol et une perte d'argent vécue comme un drame par Harpagon.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q5",
            "type": "mcq",
            "prompt": "Selon le résumé, les thèmes que le comique peut développer sont :",
            "options": [
              "Uniquement l'amour",
              "Tous les thèmes",
              "Uniquement la mort",
              "Uniquement la nature"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Phrase de conclusion du résumé sur la tonalité comique : le comique peut développer tous les thèmes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Au voleur, au voleur",
          "stepTheme": "Au voleur, au voleur",
          "stepBadge": "Au voleur, au voleur",
          "paragraphText": "Exemple du texte support 2 : Harpagon crie « Au voleur ! au voleur ! à l'assassin ! au meurtrier ! Justice, juste Ciel ! Je suis perdu, je suis assassiné ».\nRépétitions et exagérations s'accumulent : le vol de son argent est vécu comme un assassinat, ce qui fait rire.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q6",
            "type": "mcq",
            "prompt": "L'accumulation « au voleur, à l'assassin, au meurtrier » pour un simple vol d'argent produit le rire par :",
            "options": [
              "La fatalité tragique",
              "L'exagération des réactions d'Harpagon",
              "La solitude du locuteur",
              "La description d'un paysage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les exagérations figurent parmi les caractéristiques du comique : Harpagon traite un vol comme un meurtre."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q1",
          "type": "mcq",
          "prompt": "La tonalité comique provoque :",
          "options": [
            "La terreur et la pitié",
            "L'amusement et le rire",
            "La méditation sur la fuite du temps",
            "L'effroi devant la fatalité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition du résumé, à opposer à la terreur et à la pitié du tragique."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q2",
          "type": "mcq",
          "prompt": "Parmi les formes du comique citées par le résumé, on trouve :",
          "options": [
            "La fatalité implacable",
            "Le champ lexical de la mort",
            "La caricature et le raisonnement par l'absurde",
            "La ponctuation forte du lyrisme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé cite la fantaisie verbale, la caricature, les effets de surprise et le raisonnement par l'absurde."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q3",
          "type": "mcq",
          "prompt": "Le geste d'Harpagon qui se prend lui-même le bras relève :",
          "options": [
            "Du comique de situation",
            "De la tonalité tragique",
            "De la tonalité lyrique",
            "Du champ lexical de la souffrance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé identifie explicitement ce geste comme le comique de situation du texte support 2."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q4",
          "type": "mcq",
          "prompt": "Parmi les procédés suivants, lequel est une caractéristique du comique selon le résumé ?",
          "options": [
            "Les forces implacables juridiques",
            "Les sentiments héroïques",
            "La fatalité qui mène à la mort",
            "Les jeux de mots et les noms inventés ou déformés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Jeux de mots, noms inventés ou déformés et propos absurdes figurent dans la liste des caractéristiques du comique."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q5",
          "type": "mcq",
          "prompt": "Selon le résumé, les thèmes que le comique peut développer sont :",
          "options": [
            "Uniquement l'amour",
            "Tous les thèmes",
            "Uniquement la mort",
            "Uniquement la nature"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phrase de conclusion du résumé sur la tonalité comique : le comique peut développer tous les thèmes."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p03_q6",
          "type": "mcq",
          "prompt": "L'accumulation « au voleur, à l'assassin, au meurtrier » pour un simple vol d'argent produit le rire par :",
          "options": [
            "La fatalité tragique",
            "L'exagération des réactions d'Harpagon",
            "La solitude du locuteur",
            "La description d'un paysage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les exagérations figurent parmi les caractéristiques du comique : Harpagon traite un vol comme un meurtre."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04",
      "order": 4,
      "title": "Comparer et identifier les trois tonalités",
      "summary": "Distinguer tragique, lyrique et comique par leur effet visé, leurs indices et leurs thèmes.",
      "conceptExplanation": "Les trois tonalités étudiées se distinguent d'abord par l'effet recherché : la tonalité tragique vise à inspirer la terreur et la pitié, et sa fonction est de provoquer l'effroi et la pitié ; la tonalité lyrique traduit les sentiments et les émotions du locuteur ; la tonalité comique provoque l'amusement et le rire.\nLeurs indices diffèrent : langage soutenu, champs lexicaux de la mort et de la souffrance, passions destructrices et forces implacables pour le tragique ; première personne du singulier, ponctuation forte et figures comme l'énumération, la comparaison et l'hyperbole pour le lyrique ; comique verbal, caricature, surprise et absurde, avec jeux de mots, répétitions et exagérations pour le comique.\nLeurs thèmes se recoupent parfois : la mort est un thème tragique, mais aussi un thème lyrique avec l'amour, la vie, la nature, la solitude et la fuite du temps, tandis que le comique peut développer tous les thèmes. C'est donc l'effet dominant et les indices d'ensemble qui permettent d'identifier la tonalité d'un texte, comme le demande la situation d'évaluation : produire un texte où la tonalité lyrique domine.",
      "keyRule": "Pour identifier une tonalité, croise l'effet visé (pitié, émotion, rire), les indices textuels et les thèmes : la dominante décide.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les deux textes supports",
        "statement": "Attribue à chaque texte support sa tonalité dominante et justifie en une phrase.",
        "methodSteps": [
          "Texte 1, Hugo : un condamné à mort, la fatalité de l'exécution, la mort et la souffrance provoquent l'effroi et la pitié.",
          "Sa tonalité dominante est donc tragique, même si l'évocation de Marie relève du lyrisme.",
          "Texte 2, Molière : un avare qui se prend lui-même le bras et traite un vol d'assassinat provoque le rire.",
          "Sa tonalité est donc comique, dans une comédie."
        ],
        "conclusion": "Hugo : tragique dominant avec des accents lyriques ; Molière : comique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Partir de l'effet visé",
          "stepTheme": "Partir de l'effet visé",
          "stepBadge": "Partir de l'effet visé",
          "paragraphText": "Méthode : commence par l'effet que le texte cherche à produire sur le lecteur.\nTerreur, effroi et pitié pour le tragique ; expression des sentiments du locuteur pour le lyrique ; amusement et rire pour le comique.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q1",
            "type": "mcq",
            "prompt": "Pour identifier la tonalité dominante d'un texte, le premier repère est :",
            "options": [
              "L'effet visé sur le lecteur",
              "Le nombre de personnages",
              "La date de naissance de l'auteur",
              "La longueur des phrases"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les définitions du résumé sont toutes construites sur l'effet : inspirer, traduire, provoquer."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La mort, thème tragique et lyrique",
          "stepTheme": "La mort, thème tragique et lyrique",
          "stepBadge": "La mort, thème tragique et lyrique",
          "paragraphText": "La mort figure parmi les thèmes principaux du tragique, avec la souffrance et la fatalité.\nElle figure aussi parmi les thèmes du lyrisme, avec l'amour, la vie, la nature, la solitude et la fuite du temps.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q2",
            "type": "mcq",
            "prompt": "Le thème de la mort apparaît, selon le résumé :",
            "options": [
              "Uniquement dans la tonalité comique",
              "Dans la tonalité tragique et aussi parmi les thèmes lyriques",
              "Dans aucune des trois tonalités",
              "Uniquement dans les comédies"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un même thème ne suffit donc pas à trancher : il faut croiser thème, indices et effet dominant."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Un indice isolé ne décide pas",
          "stepTheme": "Un indice isolé ne décide pas",
          "stepBadge": "Un indice isolé ne décide pas",
          "paragraphText": "Piège : l'hyperbole « La guillotine, c'est fort cher » est relevée par le résumé parmi les figures du lyrisme dans le texte de Hugo.\nPourtant le texte reste à dominante tragique : un procédé isolé ne fixe pas la tonalité, c'est l'ensemble des indices et l'effet dominant qui décident.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q3",
            "type": "mcq",
            "prompt": "Un texte à dominante tragique peut contenir une hyperbole relevée comme indice lyrique parce que :",
            "options": [
              "L'hyperbole est toujours tragique",
              "La tonalité se juge sur l'ensemble des indices et sur l'effet dominant, non sur un procédé isolé",
              "Le texte de Hugo est une comédie",
              "Les tonalités sont interchangeables"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé puise ses exemples lyriques dans le texte tragique de Hugo : la dominante se lit dans l'ensemble."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Produire un texte lyrique",
          "stepTheme": "Produire un texte lyrique",
          "stepBadge": "Produire un texte lyrique",
          "paragraphText": "La situation d'évaluation du résumé demande de produire un texte où la tonalité lyrique domine.\nIl faut donc y mettre la première personne, l'expression des sentiments du locuteur, une ponctuation forte et des thèmes comme l'amour, la solitude ou la fuite du temps.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q4",
            "type": "mcq",
            "prompt": "Pour que la tonalité lyrique domine dans un texte produit, il faut notamment :",
            "options": [
              "Cacher les sentiments du locuteur",
              "Employer la première personne et exprimer les sentiments et émotions du locuteur",
              "Raconter un vol à la manière d'Harpagon",
              "Mettre en scène une condamnation à mort"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les caractéristiques du lyrisme selon le résumé : je du locuteur, sentiments, ponctuation forte et figures."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Genres et tonalités",
          "stepTheme": "Genres et tonalités",
          "stepBadge": "Genres et tonalités",
          "paragraphText": "Le résumé associe le tragique très souvent au genre théâtral, et le comique surtout aux comédies.\nLe lyrisme, lui, se retrouve aussi bien dans la poésie, le roman et le théâtre : une tonalité n'est donc pas enfermée dans un seul genre.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q5",
            "type": "mcq",
            "prompt": "Selon le résumé, la tonalité lyrique se retrouve :",
            "options": [
              "Uniquement dans les comédies",
              "Uniquement dans les tragédies",
              "Dans la poésie, le roman et le théâtre",
              "Dans aucun texte en prose"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé le dit pour le lyrisme ; le texte lyrique de référence est d'ailleurs un roman de Hugo."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Justice, c'est la justice",
          "stepTheme": "Justice, c'est la justice",
          "stepBadge": "Justice, c'est la justice",
          "paragraphText": "Dans le texte de Hugo, le condamné conclut son raisonnement sur les trois veuves par : « C'est la justice ».\nCette acceptation d'une force juridique implacable qui ruine des innocentes renforce la fatalité propre à la tonalité tragique.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q6",
            "type": "mcq",
            "prompt": "La phrase « C'est la justice », après l'évocation des innocentes ruinées, renforce surtout :",
            "options": [
              "La tonalité comique",
              "La tonalité lyrique amoureuse",
              "Le comique de situation",
              "La fatalité tragique d'une force juridique implacable"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé range la condamnation et ses effets parmi les forces implacables et les thèmes de la tonalité tragique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q1",
          "type": "mcq",
          "prompt": "Pour identifier la tonalité dominante d'un texte, le premier repère est :",
          "options": [
            "L'effet visé sur le lecteur",
            "Le nombre de personnages",
            "La date de naissance de l'auteur",
            "La longueur des phrases"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les définitions du résumé sont toutes construites sur l'effet : inspirer, traduire, provoquer."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q2",
          "type": "mcq",
          "prompt": "Le thème de la mort apparaît, selon le résumé :",
          "options": [
            "Uniquement dans la tonalité comique",
            "Dans la tonalité tragique et aussi parmi les thèmes lyriques",
            "Dans aucune des trois tonalités",
            "Uniquement dans les comédies"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un même thème ne suffit donc pas à trancher : il faut croiser thème, indices et effet dominant."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q3",
          "type": "mcq",
          "prompt": "Un texte à dominante tragique peut contenir une hyperbole relevée comme indice lyrique parce que :",
          "options": [
            "L'hyperbole est toujours tragique",
            "La tonalité se juge sur l'ensemble des indices et sur l'effet dominant, non sur un procédé isolé",
            "Le texte de Hugo est une comédie",
            "Les tonalités sont interchangeables"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé puise ses exemples lyriques dans le texte tragique de Hugo : la dominante se lit dans l'ensemble."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q4",
          "type": "mcq",
          "prompt": "Pour que la tonalité lyrique domine dans un texte produit, il faut notamment :",
          "options": [
            "Cacher les sentiments du locuteur",
            "Employer la première personne et exprimer les sentiments et émotions du locuteur",
            "Raconter un vol à la manière d'Harpagon",
            "Mettre en scène une condamnation à mort"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les caractéristiques du lyrisme selon le résumé : je du locuteur, sentiments, ponctuation forte et figures."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q5",
          "type": "mcq",
          "prompt": "Selon le résumé, la tonalité lyrique se retrouve :",
          "options": [
            "Uniquement dans les comédies",
            "Uniquement dans les tragédies",
            "Dans la poésie, le roman et le théâtre",
            "Dans aucun texte en prose"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé le dit pour le lyrisme ; le texte lyrique de référence est d'ailleurs un roman de Hugo."
        },
        {
          "id": "terminale_a1_francais_pl_l08_tonalites_litteraires_p04_q6",
          "type": "mcq",
          "prompt": "La phrase « C'est la justice », après l'évocation des innocentes ruinées, renforce surtout :",
          "options": [
            "La tonalité comique",
            "La tonalité lyrique amoureuse",
            "Le comique de situation",
            "La fatalité tragique d'une force juridique implacable"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé range la condamnation et ses effets parmi les forces implacables et les thèmes de la tonalité tragique."
        }
      ]
    }
  ]
};
