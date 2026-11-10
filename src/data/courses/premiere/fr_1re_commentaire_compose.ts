import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ere_EE_Com_composé_S_1_2_3, S_4 et S_5 (École numérique) » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const FR_1RE_EE_L02_COMMENTAIRE_COMPOSE: CurriculumChapter = {
  "id": "premiere_a1_francais_ee_l02_commentaire_compose",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 2,
  "title": "Expression écrite, leçon 2 : Le commentaire composé",
  "summary": "Analyser le libellé, construire le sens du texte, organiser les centres d'intérêt, rédiger un centre d'intérêt, l'introduction et la conclusion.",
  "officialVolumeHours": 5,
  "contentVersion": 2,
  "source": "1ere_EE_Com_composé_S_1_2_3, S_4 et S_5 (École numérique)",
  "points": [
    {
      "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01",
      "order": 1,
      "title": "Le commentaire composé et son libellé",
      "summary": "Ce qu'on attend de l'exercice, et les deux parties du libellé.",
      "conceptExplanation": "Le commentaire composé porte sur un texte en prose ou en vers, choisi pour sa qualité littéraire. Tu rends compte de ta lecture personnelle : tu montres les qualités stylistiques (les procédés d'écriture) et les richesses thématiques (les idées) du texte, dans un développement rigoureux et bien argumenté.\n\nLe libellé (le sujet) comporte deux parties :\n- la consigne : ce qu'il faut faire (« Faites un commentaire composé de ce texte ») ;\n- l'information : les pistes de lecture, appelées centres d'intérêt (souvent deux, parfois trois).\n\nExemple : « Faites un commentaire composé de ce texte. Étudiez d'abord la désillusion de Nafi après son mariage puis, sa nostalgie du pays natal. »\n- Centre d'intérêt 1 : la désillusion de Nafi après son mariage ;\n- Centre d'intérêt 2 : la nostalgie du pays natal.\n\nLes centres d'intérêt sont liés par un rapport logique. Ici, c'est la cause : le rêve d'un bonheur en France est brisé, et cela provoque la nostalgie du pays natal.\n\nLes indications du libellé ne sont ni exhaustives ni contraignantes, mais elles donnent le plan du devoir.",
      "keyRule": "Libellé = consigne (ce qu'il faut faire) + information (les centres d'intérêt). Les mots « d'abord… puis… » donnent l'ordre des parties.",
      "formulas": [],
      "workedExample": {
        "title": "Découper un libellé",
        "statement": "« Faites un commentaire composé de ce poème. Étudiez d'abord les différents aspects du bonheur de l'enfance puis, les réalités de l'âge adulte. »",
        "methodSteps": [
          "Consigne : « Faites un commentaire composé de ce poème. »",
          "Centre d'intérêt 1 : les différents aspects du bonheur de l'enfance.",
          "Centre d'intérêt 2 : les réalités de l'âge adulte.",
          "Rapport logique : l'opposition (le bonheur d'avant contre les difficultés d'aujourd'hui)."
        ],
        "conclusion": "Le devoir aura deux parties, dans cet ordre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'exercice",
          "stepTheme": "L'exercice",
          "stepBadge": "L'exercice",
          "paragraphText": "Le commentaire composé porte sur un texte en prose ou en vers. Tu y montres les qualités stylistiques et les richesses thématiques du texte, dans un développement argumenté.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q1",
            "type": "mcq",
            "prompt": "Que doit montrer l'élève dans un commentaire composé ?",
            "options": [
              "Un résumé du texte dans l'ordre des lignes",
              "Les qualités stylistiques et les richesses thématiques du texte",
              "La biographie complète de l'auteur",
              "Son accord ou son désaccord avec l'auteur, sans citer le texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On analyse le style (les procédés) et les thèmes (les idées), avec des preuves tirées du texte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les deux parties du libellé",
          "stepTheme": "Les deux parties du libellé",
          "stepBadge": "Les deux parties du libellé",
          "paragraphText": "Le libellé a deux parties : la consigne, qui dit ce qu'il faut faire, et l'information, qui donne les centres d'intérêt.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q2",
            "type": "mcq",
            "prompt": "Libellé : « Faites un commentaire composé de ce texte. Étudiez d'abord la désillusion de Nafi après son mariage puis, sa nostalgie du pays natal. » Quelle est la consigne ?",
            "options": [
              "« la nostalgie du pays natal »",
              "« la désillusion de Nafi après son mariage »",
              "« Faites un commentaire composé de ce texte »",
              "« Lettres de France »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La consigne indique le travail demandé ; les deux autres groupes sont les centres d'intérêt."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les centres d'intérêt",
          "stepTheme": "Les centres d'intérêt",
          "stepBadge": "Les centres d'intérêt",
          "paragraphText": "Les centres d'intérêt sont les pistes de lecture du texte. Ils deviennent les grandes parties du développement.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q3",
            "type": "mcq",
            "prompt": "« Étudiez d'abord la désillusion de Nafi après son mariage puis, sa nostalgie du pays natal. » Quel est le centre d'intérêt 2 ?",
            "options": [
              "La nostalgie du pays natal",
              "La désillusion de Nafi",
              "Le mariage forcé",
              "La vie à Paris"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Puis » introduit le deuxième centre d'intérêt."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'ordre des parties",
          "stepTheme": "L'ordre des parties",
          "stepBadge": "L'ordre des parties",
          "paragraphText": "Les mots « d'abord… puis… » fixent l'ordre du devoir : on traite le premier centre d'intérêt, puis le second.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q4",
            "type": "mcq",
            "prompt": "Libellé sur le poème « Maturité » de Denise Jallais : « Étudiez d'abord les différents aspects du bonheur de l'enfance, puis les réalités de l'âge adulte. » Quel centre d'intérêt traite-t-on en premier ?",
            "options": [
              "Les réalités de l'âge adulte",
              "La vie de Denise Jallais",
              "Les différents aspects du bonheur de l'enfance",
              "La versification du poème"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le libellé dit « Étudiez d'abord les différents aspects du bonheur de l'enfance »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le lien entre les centres",
          "stepTheme": "Le lien entre les centres",
          "stepBadge": "Le lien entre les centres",
          "paragraphText": "Les centres d'intérêt sont liés par un rapport logique. Chez Nafi, c'est la cause : la déception en France provoque la nostalgie du pays natal.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q5",
            "type": "mcq",
            "prompt": "Dans « Lettres de France » (Sembène Ousmane), Nafi, déçue par sa vie de femme mariée en France, regrette son pays natal. Le libellé demande d'étudier sa désillusion puis sa nostalgie. Quel rapport logique unit ces deux centres d'intérêt ?",
            "options": [
              "Un rapport de but",
              "Un rapport de comparaison",
              "Un rapport d'hypothèse",
              "Un rapport de cause : la désillusion provoque la nostalgie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le rêve brisé en France fait naître le regret du pays natal."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un autre rapport",
          "stepTheme": "Un autre rapport",
          "stepBadge": "Un autre rapport",
          "paragraphText": "Dans « Maturité », les deux centres d'intérêt s'opposent : le bonheur insouciant de l'enfance face aux réalités dures de l'âge adulte.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q6",
            "type": "mcq",
            "prompt": "Dans le poème « Maturité », Denise Jallais évoque le bonheur insouciant de l'enfance puis les dures réalités de l'âge adulte. Quel rapport logique unit ces deux centres d'intérêt ?",
            "options": [
              "L'opposition",
              "La cause",
              "L'addition",
              "La conséquence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Avant, c'était la fête / Mais finie la pulpe douce de l'inconscience » : le « mais » marque l'opposition."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Des pistes, pas une prison",
          "stepTheme": "Des pistes, pas une prison",
          "stepBadge": "Des pistes, pas une prison",
          "paragraphText": "Les indications du libellé ne sont ni exhaustives ni contraignantes : elles guident ta lecture, mais tu dois toi-même chercher dans le texte les indices qui les justifient.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q7",
            "type": "mcq",
            "prompt": "Que signifie « les indications du libellé ne sont pas exhaustives » ?",
            "options": [
              "Il ne faut pas les suivre",
              "Elles donnent tout le contenu du devoir",
              "Elles ne disent pas tout : c'est à toi de trouver les indices dans le texte",
              "Elles changent à chaque lecture"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le libellé donne le plan ; le contenu (indices, analyses) vient de ta lecture du texte."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q1",
          "type": "mcq",
          "prompt": "Que doit montrer l'élève dans un commentaire composé ?",
          "options": [
            "Un résumé du texte dans l'ordre des lignes",
            "Les qualités stylistiques et les richesses thématiques du texte",
            "La biographie complète de l'auteur",
            "Son accord ou son désaccord avec l'auteur, sans citer le texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On analyse le style (les procédés) et les thèmes (les idées), avec des preuves tirées du texte."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q2",
          "type": "mcq",
          "prompt": "Libellé : « Faites un commentaire composé de ce texte. Étudiez d'abord la désillusion de Nafi après son mariage puis, sa nostalgie du pays natal. » Quelle est la consigne ?",
          "options": [
            "« la nostalgie du pays natal »",
            "« la désillusion de Nafi après son mariage »",
            "« Faites un commentaire composé de ce texte »",
            "« Lettres de France »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La consigne indique le travail demandé ; les deux autres groupes sont les centres d'intérêt."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q3",
          "type": "mcq",
          "prompt": "« Étudiez d'abord la désillusion de Nafi après son mariage puis, sa nostalgie du pays natal. » Quel est le centre d'intérêt 2 ?",
          "options": [
            "La nostalgie du pays natal",
            "La désillusion de Nafi",
            "Le mariage forcé",
            "La vie à Paris"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Puis » introduit le deuxième centre d'intérêt."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q4",
          "type": "mcq",
          "prompt": "Libellé sur le poème « Maturité » de Denise Jallais : « Étudiez d'abord les différents aspects du bonheur de l'enfance, puis les réalités de l'âge adulte. » Quel centre d'intérêt traite-t-on en premier ?",
          "options": [
            "Les réalités de l'âge adulte",
            "La vie de Denise Jallais",
            "Les différents aspects du bonheur de l'enfance",
            "La versification du poème"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le libellé dit « Étudiez d'abord les différents aspects du bonheur de l'enfance »."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q5",
          "type": "mcq",
          "prompt": "Dans « Lettres de France » (Sembène Ousmane), Nafi, déçue par sa vie de femme mariée en France, regrette son pays natal. Le libellé demande d'étudier sa désillusion puis sa nostalgie. Quel rapport logique unit ces deux centres d'intérêt ?",
          "options": [
            "Un rapport de but",
            "Un rapport de comparaison",
            "Un rapport d'hypothèse",
            "Un rapport de cause : la désillusion provoque la nostalgie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le rêve brisé en France fait naître le regret du pays natal."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q6",
          "type": "mcq",
          "prompt": "Dans le poème « Maturité », Denise Jallais évoque le bonheur insouciant de l'enfance puis les dures réalités de l'âge adulte. Quel rapport logique unit ces deux centres d'intérêt ?",
          "options": [
            "L'opposition",
            "La cause",
            "L'addition",
            "La conséquence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Avant, c'était la fête / Mais finie la pulpe douce de l'inconscience » : le « mais » marque l'opposition."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p01_q7",
          "type": "mcq",
          "prompt": "Que signifie « les indications du libellé ne sont pas exhaustives » ?",
          "options": [
            "Il ne faut pas les suivre",
            "Elles donnent tout le contenu du devoir",
            "Elles ne disent pas tout : c'est à toi de trouver les indices dans le texte",
            "Elles changent à chaque lecture"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le libellé donne le plan ; le contenu (indices, analyses) vient de ta lecture du texte."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02",
      "order": 2,
      "title": "Construire le sens du texte",
      "summary": "Thème, nature du texte, tonalité, idée générale et explication des centres d'intérêt.",
      "conceptExplanation": "Avant d'écrire, on construit le sens du texte en répondant à cinq questions.\n\n1. Le thème : de quoi parle le texte ? Pour Nafi : la recherche de l'idéal, la désillusion de l'ailleurs meilleur, la nostalgie du pays.\n2. La nature du texte : récit, poème, lettre, théâtre… Le texte de Nafi est un récit à la première personne, sous forme de lettre (texte épistolaire).\n3. La tonalité : l'émotion dominante. Nafi exprime sa souffrance et ses sentiments : tonalité pathétique et lyrique.\n4. L'idée générale : le texte résumé en une phrase. Pour Nafi : le regret du bonheur perdu à son arrivée en France.\n5. L'explication des centres d'intérêt : ce que chacun veut dire, avec tes propres mots.\n- CI 1, la désillusion : Nafi a été victime d'un leurre et se retrouve en France dans un foyer qui la déçoit.\n- CI 2, la nostalgie : face à la vie fade qu'elle découvre en France, elle plonge dans les souvenirs radieux de son pays.\n\nPour « Maturité » de Denise Jallais : CI 1, les différents moments de l'enfance liés à la joie et à l'insouciance ; CI 2, les difficultés de l'existence au moment de la prise de conscience.",
      "keyRule": "Construire le sens : thème, nature, tonalité, idée générale, puis expliquer chaque centre d'intérêt avec ses propres mots.",
      "formulas": [],
      "workedExample": {
        "title": "L'idée générale de « Maturité »",
        "statement": "Formule l'idée générale du poème.",
        "methodSteps": [
          "Le poème parle d'abord de l'enfance (« Avant, c'était la fête »).",
          "Puis de l'âge adulte (« Je suis une grande personne »)."
        ],
        "conclusion": "La poétesse oppose deux moments de sa vie : l'enfance heureuse et l'âge adulte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le thème",
          "stepTheme": "Le thème",
          "stepBadge": "Le thème",
          "paragraphText": "Le thème, c'est le sujet dont parle le texte. Pour Nafi : la recherche de l'idéal, la désillusion de l'ailleurs meilleur et la nostalgie du pays.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q1",
            "type": "mcq",
            "prompt": "Dans « Lettres de France » (Sembène Ousmane), Nafi, partie en France après son mariage, est déçue par sa nouvelle vie et regrette son pays natal. Quel est le thème de ce texte ?",
            "options": [
              "La désillusion de l'ailleurs meilleur et la nostalgie du pays",
              "La beauté de Paris la nuit",
              "Le travail des immigrés en France",
              "Le rôle du père dans l'éducation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Nafi rêvait de la France ; elle y est déçue et regrette son pays."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La nature du texte",
          "stepTheme": "La nature du texte",
          "stepBadge": "La nature du texte",
          "paragraphText": "La nature du texte, c'est sa forme : récit, poème, lettre, scène de théâtre… Nafi répond par écrit à une amie : c'est un récit sous forme de lettre (texte épistolaire).",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q2",
            "type": "mcq",
            "prompt": "« Maturité » de Denise Jallais est un texte écrit en vers, en strophes, qui évoque l'enfance et l'âge adulte. Quelle est la nature de ce texte ?",
            "options": [
              "Une lettre",
              "Un poème",
              "Une scène de théâtre",
              "Un article de journal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il est écrit en vers, avec des retours à la ligne et des reprises (« Avant… »)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La tonalité",
          "stepTheme": "La tonalité",
          "stepBadge": "La tonalité",
          "paragraphText": "La tonalité est l'émotion dominante. Nafi exprime ses sentiments et sa souffrance (« Je suis seule, si seule ») : la tonalité est pathétique et lyrique.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q3",
            "type": "mcq",
            "prompt": "Dans sa lettre (« Lettres de France »), Nafi écrit : « Je suis seule, si seule, que les cadavres dans leur tombe me font envie. » Quelle tonalité domine ?",
            "options": [
              "Comique",
              "Épique",
              "Pathétique et lyrique",
              "Didactique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle dit ses sentiments (lyrique) et sa souffrance touche le lecteur (pathétique)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'idée générale",
          "stepTheme": "L'idée générale",
          "stepBadge": "L'idée générale",
          "paragraphText": "L'idée générale résume le texte en une phrase. Pour Nafi : le regret du bonheur à son arrivée en France.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q4",
            "type": "mcq",
            "prompt": "Dans le poème « Maturité », Denise Jallais évoque d'abord le bonheur insouciant de son enfance, puis les difficultés qu'elle découvre en devenant adulte. Quelle est l'idée générale du poème ?",
            "options": [
              "La poétesse décrit le jardin de sa grand-mère",
              "La poétesse raconte une fête de Pâques",
              "La poétesse refuse de grandir",
              "La poétesse oppose deux moments de sa vie : l'enfance et l'âge adulte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'idée générale couvre tout le texte, pas un seul détail."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Expliquer le centre d'intérêt 1",
          "stepTheme": "Expliquer le centre d'intérêt 1",
          "stepBadge": "Expliquer le centre d'intérêt 1",
          "paragraphText": "Expliquer un centre d'intérêt, c'est dire avec tes mots ce qu'il signifie. « La désillusion de Nafi » : Nafi a été victime d'un leurre et se retrouve dans un foyer en France qui la déçoit.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q5",
            "type": "mcq",
            "prompt": "Dans « Lettres de France », Nafi a épousé un homme qu'elle n'avait vu qu'en photo ; arrivée en France, elle découvre une vie qui la déçoit. Que signifie le centre d'intérêt « la désillusion de Nafi après son mariage » ?",
            "options": [
              "Nafi est heureuse d'être en France",
              "Nafi a été trompée par un mirage et découvre une réalité décevante",
              "Nafi veut divorcer pour épouser un autre homme",
              "Nafi raconte son voyage en avion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Je suis victime d'un mirage » : la réalité ne correspond pas au rêve."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Expliquer le centre d'intérêt 2",
          "stepTheme": "Expliquer le centre d'intérêt 2",
          "stepBadge": "Expliquer le centre d'intérêt 2",
          "paragraphText": "« La nostalgie du pays natal » : face à la vie fade qu'elle découvre en France, Nafi regrette son pays et plonge dans ses souvenirs radieux.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q6",
            "type": "mcq",
            "prompt": "Le poème « Maturité » de Denise Jallais oppose le bonheur insouciant de l'enfance aux « réalités de l'âge adulte ». Que désignent ces réalités ?",
            "options": [
              "Les difficultés de l'existence au moment de la prise de conscience",
              "Les jeux de l'enfance",
              "Les fêtes de Pâques",
              "Les voyages en mer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Adulte, la poétesse doit « charrier les cadavres » et « mesurer le temps »."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Thème ou idée générale ?",
          "stepTheme": "Thème ou idée générale ?",
          "stepBadge": "Thème ou idée générale ?",
          "paragraphText": "Le thème est un sujet (souvent un groupe nominal : « la nostalgie du pays »). L'idée générale est une phrase qui dit ce que le texte affirme sur ce sujet.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces formules est une idée générale, et non un simple thème ?",
            "options": [
              "L'enfance",
              "Le temps qui passe",
              "La nostalgie",
              "Nafi regrette son mariage et le bonheur perdu de son pays"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est une phrase complète qui résume ce que dit le texte."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q1",
          "type": "mcq",
          "prompt": "Dans « Lettres de France » (Sembène Ousmane), Nafi, partie en France après son mariage, est déçue par sa nouvelle vie et regrette son pays natal. Quel est le thème de ce texte ?",
          "options": [
            "La désillusion de l'ailleurs meilleur et la nostalgie du pays",
            "La beauté de Paris la nuit",
            "Le travail des immigrés en France",
            "Le rôle du père dans l'éducation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Nafi rêvait de la France ; elle y est déçue et regrette son pays."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q2",
          "type": "mcq",
          "prompt": "« Maturité » de Denise Jallais est un texte écrit en vers, en strophes, qui évoque l'enfance et l'âge adulte. Quelle est la nature de ce texte ?",
          "options": [
            "Une lettre",
            "Un poème",
            "Une scène de théâtre",
            "Un article de journal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il est écrit en vers, avec des retours à la ligne et des reprises (« Avant… »)."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q3",
          "type": "mcq",
          "prompt": "Dans sa lettre (« Lettres de France »), Nafi écrit : « Je suis seule, si seule, que les cadavres dans leur tombe me font envie. » Quelle tonalité domine ?",
          "options": [
            "Comique",
            "Épique",
            "Pathétique et lyrique",
            "Didactique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle dit ses sentiments (lyrique) et sa souffrance touche le lecteur (pathétique)."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q4",
          "type": "mcq",
          "prompt": "Dans le poème « Maturité », Denise Jallais évoque d'abord le bonheur insouciant de son enfance, puis les difficultés qu'elle découvre en devenant adulte. Quelle est l'idée générale du poème ?",
          "options": [
            "La poétesse décrit le jardin de sa grand-mère",
            "La poétesse raconte une fête de Pâques",
            "La poétesse refuse de grandir",
            "La poétesse oppose deux moments de sa vie : l'enfance et l'âge adulte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'idée générale couvre tout le texte, pas un seul détail."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q5",
          "type": "mcq",
          "prompt": "Dans « Lettres de France », Nafi a épousé un homme qu'elle n'avait vu qu'en photo ; arrivée en France, elle découvre une vie qui la déçoit. Que signifie le centre d'intérêt « la désillusion de Nafi après son mariage » ?",
          "options": [
            "Nafi est heureuse d'être en France",
            "Nafi a été trompée par un mirage et découvre une réalité décevante",
            "Nafi veut divorcer pour épouser un autre homme",
            "Nafi raconte son voyage en avion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Je suis victime d'un mirage » : la réalité ne correspond pas au rêve."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q6",
          "type": "mcq",
          "prompt": "Le poème « Maturité » de Denise Jallais oppose le bonheur insouciant de l'enfance aux « réalités de l'âge adulte ». Que désignent ces réalités ?",
          "options": [
            "Les difficultés de l'existence au moment de la prise de conscience",
            "Les jeux de l'enfance",
            "Les fêtes de Pâques",
            "Les voyages en mer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Adulte, la poétesse doit « charrier les cadavres » et « mesurer le temps »."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p02_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces formules est une idée générale, et non un simple thème ?",
          "options": [
            "L'enfance",
            "Le temps qui passe",
            "La nostalgie",
            "Nafi regrette son mariage et le bonheur perdu de son pays"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est une phrase complète qui résume ce que dit le texte."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03",
      "order": 3,
      "title": "Organiser les centres d'intérêt",
      "summary": "Le plan détaillé : sous-centres, indices textuels, analyse et interprétation.",
      "conceptExplanation": "Organiser les centres d'intérêt, c'est construire un plan détaillé au brouillon. Pour chaque centre d'intérêt, on remplit un tableau à quatre colonnes :\n- les sous-centres : les différents aspects du centre d'intérêt ;\n- les indices textuels : les citations précises, avec leur ligne (ou leur vers) ;\n- l'analyse : le procédé d'écriture (phrase déclarative, interrogation rhétorique, champ lexical, métaphore, hyperbole, gradation…) ;\n- l'interprétation : l'effet de sens, ce que cela révèle.\n\nExemple, CI 1 « La désillusion de Nafi » :\n- a) La prise de conscience du leurre : « Je suis victime d'un mirage » (l. 2) ; phrases déclaratives ; Nafi découvre le piège dans lequel elle est tombée.\n- b) La déception : « Dieu que je regrette de m'être mariée » (l. 1), « Tout est fade » (l. 9) ; phrases déclaratives et champ lexical de la désillusion ; le Paris rêvé est devenu un enfer.\n- c) La solitude et la tristesse : « Je suis seule, si seule, que les cadavres dans leur tombe me font envie » (l. 17) ; hyperbole, répétition de « seule » ; Nafi est isolée, pessimiste.\n\nCI 2 « La nostalgie du pays natal » :\n- a) L'ambiance africaine : « notre soleil », « les couleurs criardes », « les notes de kora » ; champ lexical de l'environnement africain ; un espace vivant et chaleureux.\n- b) La solidarité africaine : « ces femmes qui vont au marché en groupes joyeux » ; verbes d'action et de perception ; une société où chacun vit avec les autres.",
      "keyRule": "Plan détaillé : sous-centre → indice textuel (avec la ligne) → analyse (le procédé) → interprétation (l'effet de sens).",
      "formulas": [],
      "workedExample": {
        "title": "Remplir une ligne du tableau",
        "statement": "Sous-centre « la solitude » : traite l'indice « Je suis seule, si seule, que les cadavres dans leur tombe me font envie ».",
        "methodSteps": [
          "Indice : la citation, ligne 17.",
          "Analyse : hyperbole et répétition de l'adjectif « seule ».",
          "Interprétation : la vie de Nafi est un enfer ; elle est isolée et pessimiste."
        ],
        "conclusion": "Une ligne complète = un indice, son procédé, son effet de sens."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le plan détaillé",
          "stepTheme": "Le plan détaillé",
          "stepBadge": "Le plan détaillé",
          "paragraphText": "Organiser les centres d'intérêt, c'est faire un plan détaillé : des titres, des sous-titres (sous-centres), les idées de chaque sous-titre et les moyens d'écriture qui les montrent.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on les différents aspects d'un centre d'intérêt ?",
            "options": [
              "Les consignes",
              "Les transitions",
              "Les sous-centres",
              "Les généralités"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque centre d'intérêt se divise en sous-centres (a, b, c…)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les quatre colonnes",
          "stepTheme": "Les quatre colonnes",
          "stepBadge": "Les quatre colonnes",
          "paragraphText": "Le tableau de préparation a quatre colonnes : sous-centres, indices textuels, analyse, interprétation.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q2",
            "type": "mcq",
            "prompt": "Le tableau de préparation d'un commentaire a quatre colonnes : sous-centres, indices textuels, analyse, interprétation. Dans quelle colonne écrit-on « hyperbole et répétition de l'adjectif seule » ?",
            "options": [
              "Interprétation",
              "Analyse",
              "Indices textuels",
              "Sous-centres"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse nomme le procédé d'écriture."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Les indices textuels",
          "stepTheme": "Les indices textuels",
          "stepBadge": "Les indices textuels",
          "paragraphText": "Un indice textuel est une citation exacte du texte, entre guillemets, avec sa ligne ou son vers : « Tout est fade » (l. 9).",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q3",
            "type": "mcq",
            "prompt": "Lequel est un indice textuel bien relevé ?",
            "options": [
              "« Je suis victime d'un mirage » (l. 2)",
              "Nafi est triste",
              "Le texte parle de la France",
              "Il y a une métaphore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un indice est une citation précise et localisée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'interprétation",
          "stepTheme": "L'interprétation",
          "stepBadge": "L'interprétation",
          "paragraphText": "L'interprétation dit l'effet de sens : ce que le procédé révèle. « Les notes de kora », « notre soleil » montrent un espace africain vivant, chaleureux, qui favorise l'épanouissement.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q4",
            "type": "mcq",
            "prompt": "Dans « Lettres de France », Nafi, loin de son pays, écrit : « Je suis seule, si seule, que les cadavres dans leur tombe me font envie. » Quelle interprétation convient ?",
            "options": [
              "Nafi aime visiter les cimetières",
              "Nafi a beaucoup d'amis à Paris",
              "La vie de Nafi est un enfer : elle est isolée et pessimiste",
              "Nafi décrit les rues illuminées"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'hyperbole (envier les morts) traduit une détresse extrême."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un sous-centre du CI 1",
          "stepTheme": "Un sous-centre du CI 1",
          "stepBadge": "Un sous-centre du CI 1",
          "paragraphText": "CI 1, sous-centre a) La prise de conscience du leurre : « Mon père m'avait montré une photo d'un homme » (l. 2). Nafi découvre le piège dans lequel on l'a attirée.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q5",
            "type": "mcq",
            "prompt": "Dans « Lettres de France », Nafi regrette son mariage et sa nouvelle vie en France. Quel indice illustre le mieux le sous-centre « la déception » ?",
            "options": [
              "« les notes de kora »",
              "« Dieu que je regrette de m'être mariée » (l. 1)",
              "« ces femmes qui vont au marché en groupes joyeux »",
              "« voir les poules se tenir sur une seule patte »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les trois autres indices décrivent le pays natal (CI 2)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les sous-centres du CI 2",
          "stepTheme": "Les sous-centres du CI 2",
          "stepBadge": "Les sous-centres du CI 2",
          "paragraphText": "CI 2 « La nostalgie du pays natal » : a) l'ambiance africaine (le soleil, les couleurs, la kora) ; b) la solidarité africaine (les femmes qui vont au marché en groupes joyeux).",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q6",
            "type": "mcq",
            "prompt": "Dans « Lettres de France », Nafi se souvient de son pays : le soleil, la kora, « ces femmes qui vont au marché en groupes joyeux ». Cette dernière citation illustre quel sous-centre ?",
            "options": [
              "La prise de conscience du leurre",
              "La solitude et la tristesse",
              "La déception",
              "La solidarité africaine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les gestes faits ensemble montrent une vie collective et solidaire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas paraphraser",
          "stepTheme": "Ne pas paraphraser",
          "stepBadge": "Ne pas paraphraser",
          "paragraphText": "Paraphraser, c'est répéter le texte avec d'autres mots, sans analyser. Une interprétation doit toujours s'appuyer sur un procédé repéré.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q7",
            "type": "mcq",
            "prompt": "À propos de la lettre de Nafi (« Lettres de France »), laquelle de ces phrases est une paraphrase, et non une analyse ?",
            "options": [
              "Nafi dit qu'elle est seule et que tout est fade.",
              "L'hyperbole « les cadavres […] me font envie » traduit sa détresse.",
              "Le champ lexical du soleil et des couleurs peint un pays chaleureux.",
              "L'interrogation « Pourquoi ? » montre qu'elle se reproche son choix."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle redit le texte sans nommer de procédé ni dégager d'effet de sens."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les différents aspects d'un centre d'intérêt ?",
          "options": [
            "Les consignes",
            "Les transitions",
            "Les sous-centres",
            "Les généralités"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque centre d'intérêt se divise en sous-centres (a, b, c…)."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q2",
          "type": "mcq",
          "prompt": "Le tableau de préparation d'un commentaire a quatre colonnes : sous-centres, indices textuels, analyse, interprétation. Dans quelle colonne écrit-on « hyperbole et répétition de l'adjectif seule » ?",
          "options": [
            "Interprétation",
            "Analyse",
            "Indices textuels",
            "Sous-centres"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse nomme le procédé d'écriture."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q3",
          "type": "mcq",
          "prompt": "Lequel est un indice textuel bien relevé ?",
          "options": [
            "« Je suis victime d'un mirage » (l. 2)",
            "Nafi est triste",
            "Le texte parle de la France",
            "Il y a une métaphore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un indice est une citation précise et localisée."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q4",
          "type": "mcq",
          "prompt": "Dans « Lettres de France », Nafi, loin de son pays, écrit : « Je suis seule, si seule, que les cadavres dans leur tombe me font envie. » Quelle interprétation convient ?",
          "options": [
            "Nafi aime visiter les cimetières",
            "Nafi a beaucoup d'amis à Paris",
            "La vie de Nafi est un enfer : elle est isolée et pessimiste",
            "Nafi décrit les rues illuminées"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'hyperbole (envier les morts) traduit une détresse extrême."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q5",
          "type": "mcq",
          "prompt": "Dans « Lettres de France », Nafi regrette son mariage et sa nouvelle vie en France. Quel indice illustre le mieux le sous-centre « la déception » ?",
          "options": [
            "« les notes de kora »",
            "« Dieu que je regrette de m'être mariée » (l. 1)",
            "« ces femmes qui vont au marché en groupes joyeux »",
            "« voir les poules se tenir sur une seule patte »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les trois autres indices décrivent le pays natal (CI 2)."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q6",
          "type": "mcq",
          "prompt": "Dans « Lettres de France », Nafi se souvient de son pays : le soleil, la kora, « ces femmes qui vont au marché en groupes joyeux ». Cette dernière citation illustre quel sous-centre ?",
          "options": [
            "La prise de conscience du leurre",
            "La solitude et la tristesse",
            "La déception",
            "La solidarité africaine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les gestes faits ensemble montrent une vie collective et solidaire."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p03_q7",
          "type": "mcq",
          "prompt": "À propos de la lettre de Nafi (« Lettres de France »), laquelle de ces phrases est une paraphrase, et non une analyse ?",
          "options": [
            "Nafi dit qu'elle est seule et que tout est fade.",
            "L'hyperbole « les cadavres […] me font envie » traduit sa détresse.",
            "Le champ lexical du soleil et des couleurs peint un pays chaleureux.",
            "L'interrogation « Pourquoi ? » montre qu'elle se reproche son choix."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle redit le texte sans nommer de procédé ni dégager d'effet de sens."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04",
      "order": 4,
      "title": "Rédiger un centre d'intérêt",
      "summary": "Des paragraphes argumentatifs : idée, citation, analyse, interprétation, puis transition.",
      "conceptExplanation": "Le développement est le lieu de l'analyse et de l'interprétation. Il comporte en général deux parties, une par centre d'intérêt.\n\nRègles de rédaction :\n- le commentaire est entièrement rédigé : pas de titres, pas de numéros, pas de tirets ;\n- l'unité de base est le paragraphe : au moins deux paragraphes par centre d'intérêt, un par sous-centre ;\n- chaque paragraphe commence par un alinéa ;\n- on saute des lignes pour bien séparer les parties.\n\nChaque paragraphe est construit comme un paragraphe argumentatif :\n1. énoncer l'idée (le sous-centre) ;\n2. citer les indices textuels entre guillemets, avec la ligne ou le vers ;\n3. analyser : nommer le procédé ;\n4. interpréter : dire l'effet de sens.\n\nTournures utiles : « cela apparaît à travers… », « cela se traduit par… », « l'auteur met en évidence… », « il met en exergue… ».\n\nTransitions : une phrase relie deux paragraphes. À la fin du centre d'intérêt, une conclusion partielle résume ce qui précède et annonce le centre suivant : « En somme, l'enfance heureuse de la poétesse a été un moment de bonheur total. En revanche, cette idylle va faire place aux dures réalités de l'âge adulte. »",
      "keyRule": "Un paragraphe = idée + citation (avec la ligne) + procédé + effet de sens. Fin de partie : conclusion partielle + transition.",
      "formulas": [],
      "workedExample": {
        "title": "Un paragraphe sur la nature dans « Maturité »",
        "statement": "Rédige le début du paragraphe sur la nature.",
        "methodSteps": [
          "Idée : « Les différents aspects du bonheur de l'enfance sont mis en scène par le biais de la nature. »",
          "Citation et procédé : « En effet, le champ lexical de la nature, « l'herbe » (v. 9), « l'eau » (v. 10), « le soleil » (v. 11)… »",
          "Effet de sens : « … évoque les plaisirs simples savourés pendant l'enfance. »"
        ],
        "conclusion": "Le paragraphe avance de l'idée vers la preuve, puis vers le sens."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le rôle du développement",
          "stepTheme": "Le rôle du développement",
          "stepBadge": "Le rôle du développement",
          "paragraphText": "Le développement est le lieu de l'analyse et de l'interprétation du texte. Il comporte en général une partie par centre d'intérêt.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q1",
            "type": "mcq",
            "prompt": "Combien de parties compte en général le développement d'un commentaire à deux centres d'intérêt ?",
            "options": [
              "Une seule",
              "Trois, toujours",
              "Autant que de paragraphes du texte",
              "Deux, une par centre d'intérêt"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Chaque centre d'intérêt devient une partie du développement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Entièrement rédigé",
          "stepTheme": "Entièrement rédigé",
          "stepBadge": "Entièrement rédigé",
          "paragraphText": "Le commentaire est entièrement rédigé : on n'écrit ni titres, ni numéros, ni tirets. Chaque paragraphe commence par un alinéa.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q2",
            "type": "mcq",
            "prompt": "Sur la copie, comment présente-t-on le centre d'intérêt 1 ?",
            "options": [
              "Avec le titre « I. La désillusion de Nafi »",
              "En paragraphes rédigés, sans titre ni numéro",
              "Sous forme de tableau",
              "En liste à tirets"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Titres et tableaux restent au brouillon ; la copie est rédigée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le paragraphe argumentatif",
          "stepTheme": "Le paragraphe argumentatif",
          "stepBadge": "Le paragraphe argumentatif",
          "paragraphText": "Chaque paragraphe suit quatre temps : l'idée, la citation (avec la ligne ou le vers), l'analyse du procédé, l'interprétation.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q3",
            "type": "mcq",
            "prompt": "Quel est le bon ordre dans un paragraphe de commentaire ?",
            "options": [
              "Interprétation, idée, citation, analyse",
              "Citation, interprétation, idée, analyse",
              "Idée, citation, analyse, interprétation",
              "Analyse, idée, interprétation, citation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On annonce l'idée, on la prouve par le texte, on nomme le procédé, puis on en tire le sens."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un paragraphe sur Nafi",
          "stepTheme": "Un paragraphe sur Nafi",
          "stepBadge": "Un paragraphe sur Nafi",
          "paragraphText": "« Par conséquent, Nafi sombre dans la solitude. L'hyperbole « Je suis seule, si seule, que les cadavres dans leur tombe me font envie » (l. 17) traduit que sa vie est devenue un enfer. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q4",
            "type": "mcq",
            "prompt": "Paragraphe de commentaire : « Par conséquent, Nafi sombre dans la solitude. L'hyperbole « Je suis seule, si seule, que les cadavres dans leur tombe me font envie » (l. 17) traduit que sa vie est devenue un enfer. » Quelle partie est l'interprétation ?",
            "options": [
              "« sa vie est devenue un enfer »",
              "« L'hyperbole »",
              "« (l. 17) »",
              "« Par conséquent »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'effet de sens tiré du procédé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les tournures utiles",
          "stepTheme": "Les tournures utiles",
          "stepBadge": "Les tournures utiles",
          "paragraphText": "Pour relier un procédé à son effet, on utilise : « cela se traduit par », « cela apparaît à travers », « l'auteur met en évidence », « il met en exergue ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q5",
            "type": "mcq",
            "prompt": "Quelle tournure introduit le mieux un effet de sens ?",
            "options": [
              "« Je pense que peut-être »",
              "« L'auteur met en évidence »",
              "« Il était une fois »",
              "« Premièrement, deuxièmement »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle relie clairement le procédé à ce qu'il montre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La transition",
          "stepTheme": "La transition",
          "stepBadge": "La transition",
          "paragraphText": "À la fin d'un centre d'intérêt, la conclusion partielle résume ce qui précède et annonce la suite : « En somme, l'enfance a été un moment de bonheur total. En revanche, cette idylle va faire place aux dures réalités de l'âge adulte. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q6",
            "type": "mcq",
            "prompt": "Quel est le double rôle de la phrase de transition entre deux centres d'intérêt ?",
            "options": [
              "Citer l'auteur et donner la date",
              "Poser la problématique et l'ouverture",
              "Résumer le centre d'intérêt traité et annoncer le suivant",
              "Donner son avis personnel"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle ferme la première partie et ouvre la seconde."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Citer avec précision",
          "stepTheme": "Citer avec précision",
          "stepBadge": "Citer avec précision",
          "paragraphText": "Une citation se met entre guillemets et se localise (ligne ou vers). Une affirmation sans citation n'est pas une preuve.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q7",
            "type": "mcq",
            "prompt": "Quelle phrase cite correctement le poème « Maturité » ?",
            "options": [
              "La poétesse parle de fleurs.",
              "Le poème évoque la nature, comme l'herbe et l'eau.",
              "Il y a beaucoup de nature au début.",
              "Le champ lexical de la nature, « l'herbe » (v. 9), « l'eau » (v. 10), évoque les plaisirs de l'enfance."
            ],
            "correctAnswerIndex": 3,
            "explanation": "Citation entre guillemets, vers indiqués, procédé nommé et effet de sens."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q1",
          "type": "mcq",
          "prompt": "Combien de parties compte en général le développement d'un commentaire à deux centres d'intérêt ?",
          "options": [
            "Une seule",
            "Trois, toujours",
            "Autant que de paragraphes du texte",
            "Deux, une par centre d'intérêt"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Chaque centre d'intérêt devient une partie du développement."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q2",
          "type": "mcq",
          "prompt": "Sur la copie, comment présente-t-on le centre d'intérêt 1 ?",
          "options": [
            "Avec le titre « I. La désillusion de Nafi »",
            "En paragraphes rédigés, sans titre ni numéro",
            "Sous forme de tableau",
            "En liste à tirets"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Titres et tableaux restent au brouillon ; la copie est rédigée."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q3",
          "type": "mcq",
          "prompt": "Quel est le bon ordre dans un paragraphe de commentaire ?",
          "options": [
            "Interprétation, idée, citation, analyse",
            "Citation, interprétation, idée, analyse",
            "Idée, citation, analyse, interprétation",
            "Analyse, idée, interprétation, citation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On annonce l'idée, on la prouve par le texte, on nomme le procédé, puis on en tire le sens."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q4",
          "type": "mcq",
          "prompt": "Paragraphe de commentaire : « Par conséquent, Nafi sombre dans la solitude. L'hyperbole « Je suis seule, si seule, que les cadavres dans leur tombe me font envie » (l. 17) traduit que sa vie est devenue un enfer. » Quelle partie est l'interprétation ?",
          "options": [
            "« sa vie est devenue un enfer »",
            "« L'hyperbole »",
            "« (l. 17) »",
            "« Par conséquent »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'effet de sens tiré du procédé."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q5",
          "type": "mcq",
          "prompt": "Quelle tournure introduit le mieux un effet de sens ?",
          "options": [
            "« Je pense que peut-être »",
            "« L'auteur met en évidence »",
            "« Il était une fois »",
            "« Premièrement, deuxièmement »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle relie clairement le procédé à ce qu'il montre."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q6",
          "type": "mcq",
          "prompt": "Quel est le double rôle de la phrase de transition entre deux centres d'intérêt ?",
          "options": [
            "Citer l'auteur et donner la date",
            "Poser la problématique et l'ouverture",
            "Résumer le centre d'intérêt traité et annoncer le suivant",
            "Donner son avis personnel"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle ferme la première partie et ouvre la seconde."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p04_q7",
          "type": "mcq",
          "prompt": "Quelle phrase cite correctement le poème « Maturité » ?",
          "options": [
            "La poétesse parle de fleurs.",
            "Le poème évoque la nature, comme l'herbe et l'eau.",
            "Il y a beaucoup de nature au début.",
            "Le champ lexical de la nature, « l'herbe » (v. 9), « l'eau » (v. 10), évoque les plaisirs de l'enfance."
          ],
          "correctAnswerIndex": 3,
          "explanation": "Citation entre guillemets, vers indiqués, procédé nommé et effet de sens."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05",
      "order": 5,
      "title": "Rédiger l'introduction",
      "summary": "Généralité, présentation du texte, idée générale, annonce du plan, en un seul paragraphe.",
      "conceptExplanation": "L'introduction s'écrit en un seul paragraphe, avec un seul alinéa. Elle comporte trois étapes.\n\n1. La généralité (ou perspective générale) : une phrase qui situe le texte à partir de son thème, de son genre ou de la vie de l'auteur.\n2. La présentation du texte : le titre du texte, le nom de l'auteur, le titre de l'œuvre et sa date, puis l'idée générale.\n3. L'annonce du plan : on énonce brièvement les centres d'intérêt, dans l'ordre, avec élégance (verbe au futur ou question).\n\nExemple rédigé (Nafi) :\n« La recherche de l'idéal, guidée par le désir d'un ailleurs meilleur, conduit souvent les hommes au désenchantement (généralité). C'est dans cette perspective que s'inscrit ce texte épistolaire intitulé « Lettres de France », extrait du recueil de nouvelles Voltaïque de l'écrivain sénégalais Sembène Ousmane (présentation). Ce texte relate les regrets de Nafi après son mariage, une fois en France (idée générale). Dans un commentaire composé, nous montrerons que la désillusion de Nafi après son mariage suscite sa nostalgie du pays natal (annonce du plan). »\n\nSur la copie, le titre de l'œuvre se souligne (Voltaïque) ; le titre du texte se met entre guillemets (« Lettres de France »).",
      "keyRule": "Introduction = un seul paragraphe : généralité → présentation (titre, auteur, œuvre, date, idée générale) → annonce du plan.",
      "formulas": [],
      "workedExample": {
        "title": "Les composantes de l'introduction de « Maturité »",
        "statement": "Prépare les éléments de l'introduction.",
        "methodSteps": [
          "Généralité : l'enfance, moment d'insouciance et de joie.",
          "Présentation : « Maturité », Denise Jallais, La poésie féminine contemporaine (1969).",
          "Idée générale : la poétesse oppose deux moments de sa vie.",
          "Annonce du plan : le bonheur de l'enfance, puis les réalités de l'âge adulte."
        ],
        "conclusion": "On rédige ensuite ces quatre éléments en un seul paragraphe fluide."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un seul paragraphe",
          "stepTheme": "Un seul paragraphe",
          "stepBadge": "Un seul paragraphe",
          "paragraphText": "L'introduction s'écrit en un seul paragraphe, avec un seul alinéa, et compte trois étapes : la généralité, la présentation du texte, l'annonce du plan.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q1",
            "type": "mcq",
            "prompt": "Combien de paragraphes compte l'introduction d'un commentaire composé ?",
            "options": [
              "Trois, un par étape",
              "Un seul",
              "Deux",
              "Autant que de centres d'intérêt"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les trois étapes s'enchaînent dans un seul paragraphe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La généralité",
          "stepTheme": "La généralité",
          "stepBadge": "La généralité",
          "paragraphText": "La généralité situe le texte à partir de son thème, de son genre ou de la vie de l'auteur. Pour « Maturité » : « L'enfance est une période de joie intense et d'insouciance. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q2",
            "type": "mcq",
            "prompt": "« Lettres de France » (Sembène Ousmane) : Nafi, partie en France après son mariage, est déçue et regrette son pays natal. Laquelle est une bonne généralité pour introduire ce texte ?",
            "options": [
              "La recherche d'un ailleurs meilleur conduit souvent au désenchantement.",
              "Nafi est une jeune femme mariée.",
              "Dans un commentaire composé, nous étudierons deux centres d'intérêt.",
              "Ligne 17, Nafi dit qu'elle est seule."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle part du thème, de façon large, avant de parler du texte lui-même."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La présentation du texte",
          "stepTheme": "La présentation du texte",
          "stepBadge": "La présentation du texte",
          "paragraphText": "On donne le titre du texte, l'auteur, le titre de l'œuvre et sa date : « Lettres de France », extrait de Voltaïque (1962) de Sembène Ousmane.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q3",
            "type": "mcq",
            "prompt": "Quel élément ne fait PAS partie de la présentation du texte ?",
            "options": [
              "Le nom de l'auteur",
              "Le titre de l'œuvre et sa date",
              "Le titre du texte",
              "Le jugement personnel sur le texte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le jugement personnel appartient à la conclusion."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'idée générale",
          "stepTheme": "L'idée générale",
          "stepBadge": "L'idée générale",
          "paragraphText": "La présentation se termine par l'idée générale : « Ce texte relate les regrets de Nafi après son mariage, une fois en France. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q4",
            "type": "mcq",
            "prompt": "Où place-t-on l'idée générale dans l'introduction ?",
            "options": [
              "Tout au début, avant la généralité",
              "Après l'annonce du plan",
              "Après la présentation de l'auteur et de l'œuvre, avant l'annonce du plan",
              "Dans la conclusion seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ordre : généralité, présentation (dont l'idée générale), annonce du plan."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'annonce du plan",
          "stepTheme": "L'annonce du plan",
          "stepBadge": "L'annonce du plan",
          "paragraphText": "L'annonce du plan énonce les centres d'intérêt dans l'ordre, avec élégance : « Nous montrerons comment la poétesse présente le bonheur de l'enfance, puis les réalités de l'âge adulte. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q5",
            "type": "mcq",
            "prompt": "Le poème « Maturité » de Denise Jallais a deux centres d'intérêt : le bonheur de l'enfance, puis les réalités de l'âge adulte. Quelle phrase est une bonne annonce du plan ?",
            "options": [
              "Nous montrerons comment la poétesse présente le bonheur de l'enfance, puis les réalités de l'âge adulte.",
              "I. L'enfance ; II. L'âge adulte.",
              "Ce poème est très beau.",
              "Denise Jallais est née en France."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle reprend les deux centres d'intérêt, dans l'ordre, en une phrase rédigée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Titres soulignés, textes entre guillemets",
          "stepTheme": "Titres soulignés, textes entre guillemets",
          "stepBadge": "Titres soulignés, textes entre guillemets",
          "paragraphText": "Sur la copie manuscrite, le titre de l'œuvre (le livre) se souligne ; le titre du texte (l'extrait, le poème) se met entre guillemets.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q6",
            "type": "mcq",
            "prompt": "Le texte « Lettres de France » est extrait du recueil Voltaïque (1962) de Sembène Ousmane. Sur une copie manuscrite, comment écrit-on le titre du recueil Voltaïque ?",
            "options": [
              "Entre guillemets",
              "En majuscules seulement",
              "Souligné",
              "Entre parenthèses"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le titre d'une œuvre se souligne à la main ; « Lettres de France », le texte, se met entre guillemets."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître les étapes",
          "stepTheme": "Reconnaître les étapes",
          "stepBadge": "Reconnaître les étapes",
          "paragraphText": "« C'est dans cette perspective que s'inscrit ce texte épistolaire intitulé « Lettres de France », de Sembène Ousmane. » Cette phrase relie la généralité à la présentation du texte.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q7",
            "type": "mcq",
            "prompt": "« Dans un commentaire composé, nous montrerons que la désillusion de Nafi suscite sa nostalgie du pays natal. » Quelle étape est-ce ?",
            "options": [
              "La généralité",
              "L'annonce du plan",
              "La présentation de l'auteur",
              "Le bilan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La phrase reprend les deux centres d'intérêt : c'est l'annonce du plan."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q1",
          "type": "mcq",
          "prompt": "Combien de paragraphes compte l'introduction d'un commentaire composé ?",
          "options": [
            "Trois, un par étape",
            "Un seul",
            "Deux",
            "Autant que de centres d'intérêt"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les trois étapes s'enchaînent dans un seul paragraphe."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q2",
          "type": "mcq",
          "prompt": "« Lettres de France » (Sembène Ousmane) : Nafi, partie en France après son mariage, est déçue et regrette son pays natal. Laquelle est une bonne généralité pour introduire ce texte ?",
          "options": [
            "La recherche d'un ailleurs meilleur conduit souvent au désenchantement.",
            "Nafi est une jeune femme mariée.",
            "Dans un commentaire composé, nous étudierons deux centres d'intérêt.",
            "Ligne 17, Nafi dit qu'elle est seule."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle part du thème, de façon large, avant de parler du texte lui-même."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q3",
          "type": "mcq",
          "prompt": "Quel élément ne fait PAS partie de la présentation du texte ?",
          "options": [
            "Le nom de l'auteur",
            "Le titre de l'œuvre et sa date",
            "Le titre du texte",
            "Le jugement personnel sur le texte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le jugement personnel appartient à la conclusion."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q4",
          "type": "mcq",
          "prompt": "Où place-t-on l'idée générale dans l'introduction ?",
          "options": [
            "Tout au début, avant la généralité",
            "Après l'annonce du plan",
            "Après la présentation de l'auteur et de l'œuvre, avant l'annonce du plan",
            "Dans la conclusion seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ordre : généralité, présentation (dont l'idée générale), annonce du plan."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q5",
          "type": "mcq",
          "prompt": "Le poème « Maturité » de Denise Jallais a deux centres d'intérêt : le bonheur de l'enfance, puis les réalités de l'âge adulte. Quelle phrase est une bonne annonce du plan ?",
          "options": [
            "Nous montrerons comment la poétesse présente le bonheur de l'enfance, puis les réalités de l'âge adulte.",
            "I. L'enfance ; II. L'âge adulte.",
            "Ce poème est très beau.",
            "Denise Jallais est née en France."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle reprend les deux centres d'intérêt, dans l'ordre, en une phrase rédigée."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q6",
          "type": "mcq",
          "prompt": "Le texte « Lettres de France » est extrait du recueil Voltaïque (1962) de Sembène Ousmane. Sur une copie manuscrite, comment écrit-on le titre du recueil Voltaïque ?",
          "options": [
            "Entre guillemets",
            "En majuscules seulement",
            "Souligné",
            "Entre parenthèses"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le titre d'une œuvre se souligne à la main ; « Lettres de France », le texte, se met entre guillemets."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p05_q7",
          "type": "mcq",
          "prompt": "« Dans un commentaire composé, nous montrerons que la désillusion de Nafi suscite sa nostalgie du pays natal. » Quelle étape est-ce ?",
          "options": [
            "La généralité",
            "L'annonce du plan",
            "La présentation de l'auteur",
            "Le bilan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La phrase reprend les deux centres d'intérêt : c'est l'annonce du plan."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06",
      "order": 6,
      "title": "Rédiger la conclusion",
      "summary": "Bilan, prise de position et ouverture (rapprochement), en un seul paragraphe.",
      "conceptExplanation": "La conclusion s'écrit, elle aussi, en un seul paragraphe avec un seul alinéa. Elle comporte trois éléments.\n\n1. Le bilan : il résume les résultats de l'analyse et répond à ce qu'annonçait l'introduction. On l'introduit par « En somme », « Au terme de notre étude »…\n2. La prise de position (jugement personnel) : ton avis argumenté sur le texte ou sur la situation.\n3. L'ouverture (rapprochement) : un lien avec un autre texte, une autre œuvre, un autre auteur qui traite d'un thème proche. Elle est facultative mais appréciée.\n\nExemple rédigé (« Maturité ») :\n« Au terme de notre étude, nous retenons que l'enfance de la poétesse a été marquée par des plaisirs inouïs : la découverte de la nature et les fêtes. Cependant, l'âge adulte apparaît comme celui de la prise de conscience face aux difficultés de la vie (bilan). Ces deux aspects font partie intégrante de l'existence humaine (prise de position). Nous pouvons rapprocher ce poème de « Nuit de Sine », extrait de Chants d'ombre de Léopold Sédar Senghor, où le poète évoque avec nostalgie les réjouissances de son enfance (rapprochement). »\n\nPour Nafi, on peut rapprocher le texte du roman Sous le voile de la mariée de Mathurin Goli Bi Irié, qui raconte aussi une désillusion après le mariage.",
      "keyRule": "Conclusion = un seul paragraphe : bilan (« En somme… ») → prise de position → ouverture (rapprochement avec une autre œuvre).",
      "formulas": [],
      "workedExample": {
        "title": "Les composantes de la conclusion sur Nafi",
        "statement": "Prépare les éléments de la conclusion.",
        "methodSteps": [
          "Bilan : la désillusion de Nafi après son mariage a été un véritable enfer.",
          "Prise de position : quelle que soit sa situation, Nafi devra s'accommoder de cette nouvelle vie.",
          "Ouverture : Sous le voile de la mariée de Mathurin Goli Bi Irié traite aussi d'une désillusion après le mariage."
        ],
        "conclusion": "On les rédige en un seul paragraphe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les trois éléments",
          "stepTheme": "Les trois éléments",
          "stepBadge": "Les trois éléments",
          "paragraphText": "La conclusion, en un seul paragraphe, comporte trois éléments : le bilan, la prise de position et l'ouverture.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q1",
            "type": "mcq",
            "prompt": "Quels sont les trois éléments de la conclusion ?",
            "options": [
              "Généralité, présentation, annonce du plan",
              "Idée, citation, interprétation",
              "Bilan, prise de position, ouverture",
              "Thème, tonalité, idée générale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Généralité, présentation et annonce du plan sont les étapes de l'introduction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le bilan",
          "stepTheme": "Le bilan",
          "stepBadge": "Le bilan",
          "paragraphText": "Le bilan résume les résultats de l'analyse et répond à ce qu'annonçait l'introduction. Il commence souvent par « En somme » ou « Au terme de notre étude ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q2",
            "type": "mcq",
            "prompt": "Le commentaire de « Lettres de France » a étudié la désillusion de Nafi après son mariage, puis sa nostalgie du pays natal. Quelle phrase est un bon bilan ?",
            "options": [
              "En somme, Nafi, désillusionnée après son mariage, vit un véritable enfer et regrette son pays natal.",
              "Sembène Ousmane est un écrivain sénégalais.",
              "Le mariage est une institution importante.",
              "Nous étudierons d'abord la désillusion de Nafi."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle reprend les deux centres d'intérêt étudiés : la désillusion et la nostalgie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La prise de position",
          "stepTheme": "La prise de position",
          "stepBadge": "La prise de position",
          "paragraphText": "La prise de position est ton jugement personnel, argumenté : « Ces deux aspects de la vie font partie intégrante de l'existence humaine. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q3",
            "type": "mcq",
            "prompt": "« Quelle que soit sa situation, Nafi serait bien obligée de s'accommoder de cette nouvelle vie. » Quel élément de la conclusion est-ce ?",
            "options": [
              "Le bilan",
              "L'ouverture",
              "L'annonce du plan",
              "La prise de position"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est un avis personnel sur la situation de Nafi."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'ouverture",
          "stepTheme": "L'ouverture",
          "stepBadge": "L'ouverture",
          "paragraphText": "L'ouverture (ou rapprochement) relie le texte à une autre œuvre qui traite d'un thème proche. Elle est facultative mais valorise la copie.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q4",
            "type": "mcq",
            "prompt": "Avec quelle œuvre peut-on rapprocher « Maturité », qui évoque le bonheur de l'enfance ?",
            "options": [
              "Un manuel de mathématiques",
              "« Nuit de Sine » de Léopold Sédar Senghor",
              "Un article sur la météo",
              "Le règlement intérieur du lycée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans « Nuit de Sine », Senghor évoque avec nostalgie les réjouissances de son enfance."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un rapprochement pour Nafi",
          "stepTheme": "Un rapprochement pour Nafi",
          "stepBadge": "Un rapprochement pour Nafi",
          "paragraphText": "Le texte de Sembène Ousmane peut être rapproché de Sous le voile de la mariée de Mathurin Goli Bi Irié, où le héros découvre après son mariage le vrai caractère de sa femme.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q5",
            "type": "mcq",
            "prompt": "Dans « Lettres de France », Nafi est déçue après son mariage ; dans Sous le voile de la mariée de Mathurin Goli Bi Irié, le héros découvre après son mariage le vrai caractère de sa femme. Pourquoi rapprocher ces deux œuvres ?",
            "options": [
              "Parce que les deux se passent à Paris",
              "Parce qu'ils ont le même auteur",
              "Parce que les deux œuvres parlent d'une désillusion après le mariage",
              "Parce qu'ils ont été écrits la même année"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le rapprochement repose sur un thème commun."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Répondre à l'introduction",
          "stepTheme": "Répondre à l'introduction",
          "stepBadge": "Répondre à l'introduction",
          "paragraphText": "Le bilan doit répondre à l'annonce du plan : si l'introduction annonçait le bonheur de l'enfance puis les réalités de l'âge adulte, le bilan reprend ces deux aspects.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q6",
            "type": "mcq",
            "prompt": "À quoi le bilan de la conclusion doit-il répondre ?",
            "options": [
              "À ce qu'annonçait l'introduction",
              "À la biographie de l'auteur",
              "À une nouvelle question sans rapport",
              "Au nombre de vers du poème"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'introduction annonce, le développement prouve, la conclusion fait le bilan."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas de nouvelle analyse",
          "stepTheme": "Pas de nouvelle analyse",
          "stepBadge": "Pas de nouvelle analyse",
          "paragraphText": "La conclusion n'apporte pas de nouvelles citations ni de nouveaux procédés : toute l'analyse se fait dans le développement.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q7",
            "type": "mcq",
            "prompt": "Que faut-il éviter dans la conclusion ?",
            "options": [
              "Le mot « En somme »",
              "Un avis personnel",
              "Un rapprochement avec une autre œuvre",
              "Une nouvelle analyse de procédés avec de nouvelles citations"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les analyses appartiennent au développement ; la conclusion fait le bilan."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q1",
          "type": "mcq",
          "prompt": "Quels sont les trois éléments de la conclusion ?",
          "options": [
            "Généralité, présentation, annonce du plan",
            "Idée, citation, interprétation",
            "Bilan, prise de position, ouverture",
            "Thème, tonalité, idée générale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Généralité, présentation et annonce du plan sont les étapes de l'introduction."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q2",
          "type": "mcq",
          "prompt": "Le commentaire de « Lettres de France » a étudié la désillusion de Nafi après son mariage, puis sa nostalgie du pays natal. Quelle phrase est un bon bilan ?",
          "options": [
            "En somme, Nafi, désillusionnée après son mariage, vit un véritable enfer et regrette son pays natal.",
            "Sembène Ousmane est un écrivain sénégalais.",
            "Le mariage est une institution importante.",
            "Nous étudierons d'abord la désillusion de Nafi."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle reprend les deux centres d'intérêt étudiés : la désillusion et la nostalgie."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q3",
          "type": "mcq",
          "prompt": "« Quelle que soit sa situation, Nafi serait bien obligée de s'accommoder de cette nouvelle vie. » Quel élément de la conclusion est-ce ?",
          "options": [
            "Le bilan",
            "L'ouverture",
            "L'annonce du plan",
            "La prise de position"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est un avis personnel sur la situation de Nafi."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q4",
          "type": "mcq",
          "prompt": "Avec quelle œuvre peut-on rapprocher « Maturité », qui évoque le bonheur de l'enfance ?",
          "options": [
            "Un manuel de mathématiques",
            "« Nuit de Sine » de Léopold Sédar Senghor",
            "Un article sur la météo",
            "Le règlement intérieur du lycée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans « Nuit de Sine », Senghor évoque avec nostalgie les réjouissances de son enfance."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q5",
          "type": "mcq",
          "prompt": "Dans « Lettres de France », Nafi est déçue après son mariage ; dans Sous le voile de la mariée de Mathurin Goli Bi Irié, le héros découvre après son mariage le vrai caractère de sa femme. Pourquoi rapprocher ces deux œuvres ?",
          "options": [
            "Parce que les deux se passent à Paris",
            "Parce qu'ils ont le même auteur",
            "Parce que les deux œuvres parlent d'une désillusion après le mariage",
            "Parce qu'ils ont été écrits la même année"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le rapprochement repose sur un thème commun."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q6",
          "type": "mcq",
          "prompt": "À quoi le bilan de la conclusion doit-il répondre ?",
          "options": [
            "À ce qu'annonçait l'introduction",
            "À la biographie de l'auteur",
            "À une nouvelle question sans rapport",
            "Au nombre de vers du poème"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'introduction annonce, le développement prouve, la conclusion fait le bilan."
        },
        {
          "id": "premiere_a1_francais_ee_l02_commentaire_compose_p06_q7",
          "type": "mcq",
          "prompt": "Que faut-il éviter dans la conclusion ?",
          "options": [
            "Le mot « En somme »",
            "Un avis personnel",
            "Un rapprochement avec une autre œuvre",
            "Une nouvelle analyse de procédés avec de nouvelles citations"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les analyses appartiennent au développement ; la conclusion fait le bilan."
        }
      ]
    }
  ]
};
