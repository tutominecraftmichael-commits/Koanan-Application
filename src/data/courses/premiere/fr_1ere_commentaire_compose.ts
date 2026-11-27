import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Le commentaire composé » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=864
export const FR_1ERE_EE_L01_COMMENTAIRE_COMPOSE: CurriculumChapter = {
  "id": "premiere_a1_francais_ee_l01_commentaire_compose",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 1,
  "title": "Leçon 1 : Le commentaire composé",
  "summary": "Des élèves de Première découvrent un sujet de commentaire composé et s’organisent pour analyser le libellé, identifier les centres d’intérêt, rechercher et organiser les idées, puis rédiger l’introduction, un centre d’intérêt et la conclusion. Le support est le texte « Lettres de France » de Sembène Ousmane, où Nafi, épouse déçue, écrit à une amie restée au pays.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=864",
  "points": [
    {
      "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01",
      "order": 1,
      "title": "Analyser le libellé",
      "summary": "Distinguer la consigne et l’information du libellé, puis identifier et expliquer les centres d’intérêt.",
      "conceptExplanation": "L’épreuve du commentaire composé porte sur un texte en prose ou en vers, choisi en raison de sa qualité littéraire. Le candidat rend compte de la lecture personnelle qu’il en fait : l’analyse montre les qualités stylistiques et les richesses thématiques du texte, dans un développement rigoureux et bien argumenté.\nUn libellé comporte deux parties : la consigne, qui indique ce qui doit être fait (un commentaire de texte), et l’information, qui présente les centres d’intérêt, c’est-à-dire les pistes pour effectuer le commentaire. Le libellé peut suggérer deux ou trois centres d’intérêt ; ces indications ne sont ni exhaustives ni contraignantes, mais elles attirent l’attention sur les éléments dont l’examen permet de saisir la signification essentielle du texte.\nPour le texte support « Lettres de France » de Sembène Ousmane, extrait de Voltaïque (1962), le libellé est : « Faites un commentaire composé de ce texte. Étudiez d’abord la désillusion de Nafi après son mariage puis, sa nostalgie du pays natal. » Centre d’intérêt 1 : la désillusion de Nafi après son mariage. Centre d’intérêt 2 : la nostalgie du pays natal. Les deux centres sont liés par un rapport logique de causalité : le rêve d’un bonheur en France après le mariage est brisé, et cela suscite la nostalgie du pays natal.",
      "keyRule": "Un libellé se lit en deux temps : la consigne dit le travail à faire, l’information livre les centres d’intérêt à expliquer puis à traiter, dans l’ordre donné.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser le libellé du texte de Sembène Ousmane",
        "statement": "Libellé : « Faites un commentaire composé de ce texte. Étudiez d’abord la désillusion de Nafi après son mariage puis, sa nostalgie du pays natal. » Distingue ses parties et identifie les centres d’intérêt.",
        "methodSteps": [
          "Consigne : « Faites un commentaire composé de ce texte » — c’est le travail à réaliser.",
          "Information : « la désillusion de Nafi après son mariage » et « sa nostalgie du pays natal » — ce sont les pistes de l’étude.",
          "Centre d’intérêt 1 : la désillusion de Nafi après son mariage.",
          "Centre d’intérêt 2 : la nostalgie du pays natal.",
          "Lien entre les centres : rapport de causalité — le rêve brisé d’un bonheur en France suscite la nostalgie du pays natal."
        ],
        "conclusion": "Le libellé analysé livre les deux centres d’intérêt et leur lien logique, qui deviendront le plan du commentaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La consigne du libellé",
          "stepTheme": "La consigne du libellé",
          "stepBadge": "La consigne du libellé",
          "paragraphText": "• Consigne : partie du libellé qui indique ce qui doit être fait.\nIci : « Faites un commentaire composé de ce texte » — l’exercice demandé est un commentaire de texte.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q1",
            "type": "mcq",
            "prompt": "La consigne du libellé du texte de Sembène Ousmane est :",
            "options": [
              "« La désillusion de Nafi après son mariage »",
              "« Faites un commentaire composé de ce texte »",
              "« Sa nostalgie du pays natal »",
              "« Sembène Ousmane, Voltaïque, 1962 »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Faites un commentaire composé de ce texte » dit le travail à accomplir : c’est la consigne. Les deux autres formulations relèvent de l’information."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’information et les centres d’intérêt",
          "stepTheme": "L’information et les centres d’intérêt",
          "stepBadge": "L’information et les centres d’intérêt",
          "paragraphText": "• Information : partie du libellé qui présente les différents centres d’intérêt.\n• Centres d’intérêt : les pistes pour effectuer le commentaire, suggérées par le libellé, généralement au nombre de deux ou trois.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q2",
            "type": "mcq",
            "prompt": "Dans le libellé, l’information sert à :",
            "options": [
              "Indiquer l’exercice à réaliser",
              "Donner le nom de l’auteur du texte",
              "Présenter les centres d’intérêt, pistes du commentaire",
              "Rédiger la conclusion du devoir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’information présente les centres d’intérêt : pour Nafi, la désillusion après le mariage et la nostalgie du pays natal."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Identifier les centres dans l’ordre du libellé",
          "stepTheme": "Identifier les centres dans l’ordre du libellé",
          "stepBadge": "Identifier les centres dans l’ordre du libellé",
          "paragraphText": "Méthode : relever dans l’information chaque piste, dans l’ordre où le libellé la donne, marqué ici par « d’abord » puis « puis ».\nCentre d’intérêt 1 : la désillusion de Nafi après son mariage. Centre d’intérêt 2 : la nostalgie du pays natal.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q3",
            "type": "mcq",
            "prompt": "Le premier centre d’intérêt du commentaire de « Lettres de France » est :",
            "options": [
              "La nostalgie du pays natal",
              "La vie de Sembène Ousmane au Sénégal",
              "Le mariage traditionnel en Afrique",
              "La désillusion de Nafi après son mariage"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le libellé ordonne l’étude : d’abord la désillusion de Nafi après son mariage, puis sa nostalgie du pays natal."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le lien logique entre les centres",
          "stepTheme": "Le lien logique entre les centres",
          "stepBadge": "Le lien logique entre les centres",
          "paragraphText": "Propriété : les deux centres d’intérêt de ce libellé sont liés par un rapport logique de causalité.\nLe rêve d’un bonheur en France après le mariage est brisé, et c’est cette désillusion qui suscite la nostalgie du pays natal.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q4",
            "type": "mcq",
            "prompt": "Les deux centres d’intérêt du libellé sont liés par un rapport :",
            "options": [
              "D’opposition sans lien entre eux",
              "De causalité : la désillusion suscite la nostalgie",
              "De simple juxtaposition chronologique",
              "D’identité : ils disent exactement la même chose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le lien dégagé par l’analyse du libellé : le rêve brisé en France fait naître la nostalgie du pays natal."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Prendre les indications pour une liste fermée",
          "stepTheme": "Prendre les indications pour une liste fermée",
          "stepBadge": "Prendre les indications pour une liste fermée",
          "paragraphText": "Piège : croire que les indications du libellé sont exhaustives et contraignantes, ou au contraire les ignorer.\nLa leçon précise qu’elles ne sont ni exhaustives ni contraignantes, mais qu’elles attirent l’attention sur les éléments qui permettent de saisir la signification essentielle du texte.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q5",
            "type": "mcq",
            "prompt": "Selon les généralités de la leçon, les indications du libellé sont :",
            "options": [
              "Exhaustives et contraignantes",
              "À ignorer complètement",
              "Ni exhaustives ni contraignantes, mais utiles pour saisir le sens essentiel du texte",
              "Réservées aux textes en vers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les indications orientent la lecture sans la fermer : elles signalent les éléments de structure à examiner en priorité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les centres de « Maturité » (évaluation)",
          "stepTheme": "Les centres de « Maturité » (évaluation)",
          "stepBadge": "Les centres de « Maturité » (évaluation)",
          "paragraphText": "Exemple d’application : pour le poème « Maturité » de Denise Jallais, le libellé demande d’étudier d’abord les différents aspects du bonheur de l’enfance, puis les réalités de l’âge adulte.\nLe corrigé identifie donc : centre 1, les différents aspects du bonheur de l’enfance ; centre 2, les réalités de l’âge adulte.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q6",
            "type": "mcq",
            "prompt": "Dans l’évaluation sur « Maturité », le deuxième centre d’intérêt est :",
            "options": [
              "Les différents aspects du bonheur de l’enfance",
              "Les réalités de l’âge adulte",
              "La poésie féminine contemporaine",
              "La mesure du temps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le libellé de « Maturité » ordonne : d’abord le bonheur de l’enfance, puis les réalités de l’âge adulte."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q1",
          "type": "mcq",
          "prompt": "La consigne du libellé du texte de Sembène Ousmane est :",
          "options": [
            "« La désillusion de Nafi après son mariage »",
            "« Faites un commentaire composé de ce texte »",
            "« Sa nostalgie du pays natal »",
            "« Sembène Ousmane, Voltaïque, 1962 »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Faites un commentaire composé de ce texte » dit le travail à accomplir : c’est la consigne. Les deux autres formulations relèvent de l’information."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q2",
          "type": "mcq",
          "prompt": "Dans le libellé, l’information sert à :",
          "options": [
            "Indiquer l’exercice à réaliser",
            "Donner le nom de l’auteur du texte",
            "Présenter les centres d’intérêt, pistes du commentaire",
            "Rédiger la conclusion du devoir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’information présente les centres d’intérêt : pour Nafi, la désillusion après le mariage et la nostalgie du pays natal."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q3",
          "type": "mcq",
          "prompt": "Le premier centre d’intérêt du commentaire de « Lettres de France » est :",
          "options": [
            "La nostalgie du pays natal",
            "La vie de Sembène Ousmane au Sénégal",
            "Le mariage traditionnel en Afrique",
            "La désillusion de Nafi après son mariage"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le libellé ordonne l’étude : d’abord la désillusion de Nafi après son mariage, puis sa nostalgie du pays natal."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q4",
          "type": "mcq",
          "prompt": "Les deux centres d’intérêt du libellé sont liés par un rapport :",
          "options": [
            "D’opposition sans lien entre eux",
            "De causalité : la désillusion suscite la nostalgie",
            "De simple juxtaposition chronologique",
            "D’identité : ils disent exactement la même chose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le lien dégagé par l’analyse du libellé : le rêve brisé en France fait naître la nostalgie du pays natal."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q5",
          "type": "mcq",
          "prompt": "Selon les généralités de la leçon, les indications du libellé sont :",
          "options": [
            "Exhaustives et contraignantes",
            "À ignorer complètement",
            "Ni exhaustives ni contraignantes, mais utiles pour saisir le sens essentiel du texte",
            "Réservées aux textes en vers"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les indications orientent la lecture sans la fermer : elles signalent les éléments de structure à examiner en priorité."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p01_q6",
          "type": "mcq",
          "prompt": "Dans l’évaluation sur « Maturité », le deuxième centre d’intérêt est :",
          "options": [
            "Les différents aspects du bonheur de l’enfance",
            "Les réalités de l’âge adulte",
            "La poésie féminine contemporaine",
            "La mesure du temps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le libellé de « Maturité » ordonne : d’abord le bonheur de l’enfance, puis les réalités de l’âge adulte."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02",
      "order": 2,
      "title": "Construire le sens du texte",
      "summary": "Dégager le thème, la nature, la tonalité et l’idée générale du texte, puis expliquer chaque centre d’intérêt.",
      "conceptExplanation": "Construire le sens du texte, c’est d’abord le caractériser globalement. Pour « Lettres de France » : le thème est la recherche de l’idéal, la désillusion de l’ailleurs meilleur et la nostalgie du pays ; la nature du texte est le récit ; la tonalité est pathétique et lyrique ; l’idée générale est le regret du bonheur à son arrivée en France.\nIl faut ensuite expliquer chaque centre d’intérêt avant de l’organiser. Centre d’intérêt 1, la désillusion de Nafi après son mariage : Nafi est victime d’un leurre de la part de ses parents et se retrouve en France dans un foyer. Centre d’intérêt 2, la nostalgie du pays natal : face à la vie fade que Nafi découvre en France, elle regrette et plonge dans les souvenirs radieux de son pays d’origine.\nL’explication des centres s’appuie sur le texte lui-même : Nafi confesse « Je suis victime d’un mirage », après que son père lui a montré la photo d’un homme beau et vivant en France ; elle regrette son mariage, trouve que « tout est fade » et se dit « seule, si seule, que les cadavres dans leur tombe me font envie ».",
      "keyRule": "Avant d’organiser un centre, explique-le : thème, nature, tonalité et idée générale donnent le sens global, l’explication de chaque centre donne son contenu.",
      "formulas": [],
      "workedExample": {
        "title": "Construire le sens de « Lettres de France »",
        "statement": "Caractérise le texte de Sembène Ousmane (thème, nature, tonalité, idée générale), puis explique ses deux centres d’intérêt.",
        "methodSteps": [
          "Thème : la recherche de l’idéal, la désillusion de l’ailleurs meilleur, la nostalgie du pays.",
          "Nature du texte : un récit. Tonalité : pathétique et lyrique.",
          "Idée générale : le regret du bonheur à son arrivée en France.",
          "Centre 1 expliqué : Nafi, victime d’un leurre de la part de ses parents, se retrouve en France dans un foyer — c’est sa désillusion.",
          "Centre 2 expliqué : face à la vie fade découverte en France, Nafi regrette et plonge dans les souvenirs radieux de son pays d’origine."
        ],
        "conclusion": "Le sens global et l’explication des centres sont posés : l’organisation détaillée de chaque centre peut commencer."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Thème, nature et tonalité",
          "stepTheme": "Thème, nature et tonalité",
          "stepBadge": "Thème, nature et tonalité",
          "paragraphText": "• Thème : ce dont parle le texte — ici, la recherche de l’idéal, la désillusion de l’ailleurs meilleur et la nostalgie du pays.\n• Nature : le récit. • Tonalité : pathétique et lyrique, car le texte fait partager la souffrance et les sentiments de Nafi.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q1",
            "type": "mcq",
            "prompt": "La tonalité du texte « Lettres de France », selon la leçon, est :",
            "options": [
              "Comique et ironique",
              "Épique et guerrière",
              "Pathétique et lyrique",
              "Didactique et neutre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La souffrance de Nafi et l’expression de ses sentiments donnent au récit une tonalité pathétique et lyrique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’idée générale du texte",
          "stepTheme": "L’idée générale du texte",
          "stepBadge": "L’idée générale du texte",
          "paragraphText": "• Idée générale : le sens d’ensemble que dégage la lecture du texte.\nPour « Lettres de France », la leçon retient : le regret du bonheur à son arrivée en France.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q2",
            "type": "mcq",
            "prompt": "L’idée générale retenue pour « Lettres de France » est :",
            "options": [
              "La réussite de Nafi en France",
              "Le regret du bonheur à son arrivée en France",
              "L’éloge du mariage arrangé",
              "La découverte joyeuse de Paris"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Nafi regrette le bonheur espéré : dès son arrivée en France, le rêve se brise, d’où l’idée générale du regret."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Expliquer le centre 1 : le leurre",
          "stepTheme": "Expliquer le centre 1 : le leurre",
          "stepBadge": "Expliquer le centre 1 : le leurre",
          "paragraphText": "Méthode : expliquer un centre, c’est dire en une phrase claire ce qu’il recouvre dans le texte.\nCentre 1 : Nafi est victime d’un leurre de la part de ses parents et se retrouve en France dans un foyer.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q3",
            "type": "mcq",
            "prompt": "Expliquer le centre « la désillusion de Nafi », c’est dire que :",
            "options": [
              "Nafi choisit librement un mari qu’elle connaît bien",
              "Nafi refuse de partir en France",
              "Nafi célèbre son installation à Paris",
              "Nafi est victime d’un leurre de la part de ses parents et se retrouve en France dans un foyer"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La photo d’un homme beau et vivant en France a servi d’appât : c’est le leurre à l’origine de la désillusion."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Expliquer le centre 2 : le regret du pays",
          "stepTheme": "Expliquer le centre 2 : le regret du pays",
          "stepBadge": "Expliquer le centre 2 : le regret du pays",
          "paragraphText": "Méthode : le centre 2 s’explique par contraste avec la vie découverte en France.\nFace à la vie fade que Nafi découvre en France, elle regrette et plonge dans les souvenirs radieux de son pays d’origine.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q4",
            "type": "mcq",
            "prompt": "Selon l’explication de la leçon, la nostalgie de Nafi naît :",
            "options": [
              "De la vie fade découverte en France, qui la fait plonger dans les souvenirs radieux de son pays",
              "D’une lettre reçue de son mari",
              "De la lecture d’un roman sénégalais",
              "D’un voyage de vacances au pays"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La vie fade en France est le déclencheur : Nafi se réfugie dans les souvenirs radieux de son pays d’origine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre thème et centres d’intérêt",
          "stepTheme": "Confondre thème et centres d’intérêt",
          "stepBadge": "Confondre thème et centres d’intérêt",
          "paragraphText": "Piège : prendre le thème pour un centre d’intérêt, ou traiter un centre sans l’avoir expliqué.\nLe thème est unique et global (la recherche de l’idéal, la désillusion, la nostalgie) ; les centres sont les deux pistes ordonnées par le libellé, et chacun doit être expliqué avant d’être organisé.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q5",
            "type": "mcq",
            "prompt": "Quelle confusion la leçon invite-t-elle à éviter ?",
            "options": [
              "Citer le texte dans le commentaire",
              "Prendre le thème global pour un centre d’intérêt et traiter les centres sans les expliquer",
              "Distinguer la consigne de l’information",
              "Relier les centres par leur lien logique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Thème et centres ne sont pas au même niveau : le thème est global, les centres sont les pistes du libellé, à expliquer d’abord."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Expliquer les centres de « Maturité »",
          "stepTheme": "Expliquer les centres de « Maturité »",
          "stepBadge": "Expliquer les centres de « Maturité »",
          "paragraphText": "Exemple d’application : dans le corrigé de l’évaluation, le centre 1 de « Maturité » est expliqué ainsi : les différentes périodes de l’enfance rimant avec la joie liée à cette période d’insouciance.\nLe centre 2 : les difficultés existentielles pendant la période de prise de conscience.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q6",
            "type": "mcq",
            "prompt": "Dans le corrigé de « Maturité », les « réalités de l’âge adulte » désignent :",
            "options": [
              "Les jeux et les fêtes de l’enfance",
              "La poésie féminine contemporaine",
              "Les difficultés existentielles pendant la période de prise de conscience",
              "Les souvenirs de la grand-mère"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’âge adulte est expliqué comme la période de prise de conscience, avec ses difficultés existentielles, par contraste avec l’insouciance de l’enfance."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q1",
          "type": "mcq",
          "prompt": "La tonalité du texte « Lettres de France », selon la leçon, est :",
          "options": [
            "Comique et ironique",
            "Épique et guerrière",
            "Pathétique et lyrique",
            "Didactique et neutre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La souffrance de Nafi et l’expression de ses sentiments donnent au récit une tonalité pathétique et lyrique."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q2",
          "type": "mcq",
          "prompt": "L’idée générale retenue pour « Lettres de France » est :",
          "options": [
            "La réussite de Nafi en France",
            "Le regret du bonheur à son arrivée en France",
            "L’éloge du mariage arrangé",
            "La découverte joyeuse de Paris"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Nafi regrette le bonheur espéré : dès son arrivée en France, le rêve se brise, d’où l’idée générale du regret."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q3",
          "type": "mcq",
          "prompt": "Expliquer le centre « la désillusion de Nafi », c’est dire que :",
          "options": [
            "Nafi choisit librement un mari qu’elle connaît bien",
            "Nafi refuse de partir en France",
            "Nafi célèbre son installation à Paris",
            "Nafi est victime d’un leurre de la part de ses parents et se retrouve en France dans un foyer"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La photo d’un homme beau et vivant en France a servi d’appât : c’est le leurre à l’origine de la désillusion."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q4",
          "type": "mcq",
          "prompt": "Selon l’explication de la leçon, la nostalgie de Nafi naît :",
          "options": [
            "De la vie fade découverte en France, qui la fait plonger dans les souvenirs radieux de son pays",
            "D’une lettre reçue de son mari",
            "De la lecture d’un roman sénégalais",
            "D’un voyage de vacances au pays"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La vie fade en France est le déclencheur : Nafi se réfugie dans les souvenirs radieux de son pays d’origine."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q5",
          "type": "mcq",
          "prompt": "Quelle confusion la leçon invite-t-elle à éviter ?",
          "options": [
            "Citer le texte dans le commentaire",
            "Prendre le thème global pour un centre d’intérêt et traiter les centres sans les expliquer",
            "Distinguer la consigne de l’information",
            "Relier les centres par leur lien logique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Thème et centres ne sont pas au même niveau : le thème est global, les centres sont les pistes du libellé, à expliquer d’abord."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p02_q6",
          "type": "mcq",
          "prompt": "Dans le corrigé de « Maturité », les « réalités de l’âge adulte » désignent :",
          "options": [
            "Les jeux et les fêtes de l’enfance",
            "La poésie féminine contemporaine",
            "Les difficultés existentielles pendant la période de prise de conscience",
            "Les souvenirs de la grand-mère"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’âge adulte est expliqué comme la période de prise de conscience, avec ses difficultés existentielles, par contraste avec l’insouciance de l’enfance."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03",
      "order": 3,
      "title": "Organiser les centres d’intérêt",
      "summary": "Élaborer le plan détaillé de chaque centre : sous-centres, indices relevés, analyse des procédés et interprétations.",
      "conceptExplanation": "Organiser les centres d’intérêt consiste à élaborer un plan détaillé comportant : les titres, les sous-titres, les idées convergentes se rapportant à chaque sous-titre et les moyens utilisés. Pour chaque centre, le tableau comporte quatre entrées : les sous-centres, les relevés d’indices textuels, l’analyse (le procédé qui porte l’indice) et les interprétations (l’effet de sens dégagé).\nCentre 1, la désillusion de Nafi, compte trois sous-centres. a) La prise de conscience du leurre (la tromperie) : phrases déclaratives renvoyant au mirage — « Mon père m’avait montré une photo d’un homme », « Il était beau sur la photo et il était en France », « Je suis victime d’un mirage » ; interprétation : Nafi découvre la supercherie, le piège dans lequel elle fut attirée. b) La déception : phrases déclaratives se rapportant à son état d’âme — « Dieu que je regrette de m’être mariée », le champ lexical de la désillusion de Paris (« la France », « Paris », « des rues illuminées », « tout est fade »), l’interrogation rhétorique « Quelle est l’écolière qui n’a pas rêvé de la France ? » ; interprétation : Paris, espace paradisiaque rêvé depuis l’enfance, s’est mué en un enfer. c) La solitude et la tristesse : hyperbole et métaphore « Je suis seule, si seule, que les cadavres dans leur tombe me font envie », réitération de l’adjectif « seule » ; interprétation : la vie de Nafi est assimilée à un enfer, elle est isolée dans une société parisienne individualiste.\nCentre 2, la nostalgie du pays natal, compte deux sous-centres. a) L’ambiance africaine : groupe nominal du champ lexical de l’environnement africain — « notre soleil », « les couleurs criardes », « la nonchalance de nos femmes », « le vacarme quotidien », « les notes de kora », « joyeux » ; interprétation : un espace diversifié, plaisant, où règnent la vie, la chaleur humaine et l’harmonie entre l’environnement et la population. b) La solidarité africaine : verbes d’action et de perception au présent de l’indicatif et à l’infinitif matérialisant la collectivité — « ces femmes qui vont au marché en groupes joyeux », « les enfants qui vont aux commissions chaussés des sandales de leur père », « voir les poules se tenir sur une seule patte » ; interprétation : les gestes se font à l’unisson, dans la concorde, et chaque composante de la communauté remplit sa partition, jusqu’aux animaux.",
      "keyRule": "Un centre s’organise en tableau : sous-centres, indices relevés, analyse du procédé, interprétation — jamais d’indice sans procédé ni effet de sens.",
      "formulas": [],
      "workedExample": {
        "title": "Organiser le centre 1 de « Lettres de France »",
        "statement": "Élabore le plan détaillé du centre 1, « la désillusion de Nafi après son mariage », en trois sous-centres.",
        "methodSteps": [
          "Sous-centre a, prise de conscience du leurre : relever « Mon père m’avait montré une photo d’un homme » et « Je suis victime d’un mirage » — phrases déclaratives renvoyant au mirage ; interprétation : Nafi découvre la supercherie.",
          "Sous-centre b, la déception : relever « Dieu que je regrette de m’être mariée » et le champ lexical de la désillusion de Paris ; interprétation : Paris paradisiaque s’est mué en enfer.",
          "Sous-centre c, solitude et tristesse : relever l’hyperbole « Je suis seule, si seule, que les cadavres dans leur tombe me font envie » ; interprétation : une vie assimilée à un enfer, dans l’isolement.",
          "Chaque ligne du tableau suit le même ordre : indice relevé, analyse du procédé, interprétation."
        ],
        "conclusion": "Le plan détaillé du centre 1 est prêt : trois sous-centres documentés, qui deviendront les paragraphes de la rédaction."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le plan détaillé d’un centre",
          "stepTheme": "Le plan détaillé d’un centre",
          "stepBadge": "Le plan détaillé d’un centre",
          "paragraphText": "• Organisation d’un centre d’intérêt : plan détaillé comportant les titres, les sous-titres, les idées convergentes se rapportant à chaque sous-titre et les moyens utilisés.\nLe tableau aligne, pour chaque sous-centre : les indices relevés, leur analyse et leurs interprétations.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q1",
            "type": "mcq",
            "prompt": "Organiser un centre d’intérêt, c’est élaborer :",
            "options": [
              "Un résumé du texte",
              "Un plan détaillé : titres, sous-titres, idées convergentes et moyens utilisés",
              "Une biographie de l’auteur",
              "Une liste de citations sans classement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le plan détaillé classe les sous-centres et, pour chacun, les indices, leur analyse et leurs interprétations."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les quatre entrées du tableau",
          "stepTheme": "Les quatre entrées du tableau",
          "stepBadge": "Les quatre entrées du tableau",
          "paragraphText": "Méthode : chaque ligne du tableau d’organisation comporte quatre entrées, dans cet ordre.\n• Le sous-centre (un aspect du centre)\n• Les relevés d’indices textuels\n• L’analyse : le procédé qui porte l’indice\n• Les interprétations : l’effet de sens dégagé",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q2",
            "type": "mcq",
            "prompt": "Dans le tableau d’organisation, l’analyse porte sur :",
            "options": [
              "Le titre de l’œuvre",
              "La biographie de l’auteur",
              "Le procédé d’écriture qui porte l’indice relevé",
              "La conclusion du commentaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse nomme le procédé (hyperbole, champ lexical, phrase déclarative…) avant que l’interprétation ne dégage l’effet de sens."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le leurre : phrases déclaratives du mirage",
          "stepTheme": "Le leurre : phrases déclaratives du mirage",
          "stepBadge": "Le leurre : phrases déclaratives du mirage",
          "paragraphText": "Exemple : pour le sous-centre « prise de conscience du leurre », les indices « Mon père m’avait montré une photo d’un homme » et « Il était beau sur la photo et il était en France » sont des phrases déclaratives renvoyant au mirage.\nInterprétation : Nafi découvre la supercherie, le piège dans lequel elle fut attirée.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q3",
            "type": "mcq",
            "prompt": "Dans le tableau du centre 1, « Je suis victime d’un mirage » est analysé comme :",
            "options": [
              "Une interrogation rhétorique sur Paris",
              "Une phrase déclarative renvoyant au mirage, au leurre",
              "Un champ lexical de l’ambiance africaine",
              "Une hyperbole de la solitude"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’indice relève du sous-centre du leurre : la phrase déclarative renvoie au mirage dont Nafi se dit victime."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Paris paradisiaque devenu un enfer",
          "stepTheme": "Paris paradisiaque devenu un enfer",
          "stepBadge": "Paris paradisiaque devenu un enfer",
          "paragraphText": "Exemple : le groupe nominal formé de « la France », « Paris », « des rues illuminées » relève du champ lexical de la désillusion de Paris.\nInterprétation du tableau : Paris, espace paradisiaque pour Nafi depuis sa tendre enfance, s’est mué en un enfer, comme le confirme « tout est fade ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q4",
            "type": "mcq",
            "prompt": "Selon le tableau du centre 1, Paris est devenu pour Nafi :",
            "options": [
              "Un lieu de réussite sociale",
              "Un espace paradisiaque enfin atteint",
              "Un enfer, alors qu’il était rêvé comme un paradis",
              "Un simple lieu de passage"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le contraste est au cœur de la déception : l’espace paradisiaque de l’enfance s’est mué en un enfer quotidien."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L’ambiance et la solidarité africaines",
          "stepTheme": "L’ambiance et la solidarité africaines",
          "stepBadge": "L’ambiance et la solidarité africaines",
          "paragraphText": "Propriété : le centre 2 s’organise en deux sous-centres complémentaires.\n• L’ambiance africaine : l’environnement (soleil, couleurs, vacarme, kora) montre un espace de vie et de chaleur humaine\n• La solidarité africaine : les verbes d’action et de perception montrent des gestes accomplis à l’unisson, dans la concorde",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q5",
            "type": "mcq",
            "prompt": "Les indices « ces femmes qui vont au marché en groupes joyeux » relèvent du sous-centre :",
            "options": [
              "La prise de conscience du leurre",
              "La déception de Nafi",
              "La solitude et la tristesse",
              "La solidarité africaine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les femmes allant au marché en groupes joyeux illustrent la collectivité et la concorde : c’est le sous-centre de la solidarité africaine."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Relever un indice sans l’analyser",
          "stepTheme": "Relever un indice sans l’analyser",
          "stepBadge": "Relever un indice sans l’analyser",
          "paragraphText": "Piège : remplir la colonne des indices et laisser les autres vides, ou recopier de longs passages du texte.\nUn indice ne prend sens que par l’analyse du procédé qui le porte et par l’interprétation qu’il autorise ; c’est ce chaînon complet qui alimentera la rédaction.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q6",
            "type": "mcq",
            "prompt": "Quelle ligne de tableau est incomplète et donc inutilisable ?",
            "options": [
              "Indice, hyperbole nommée, interprétation de la détresse",
              "Indice seul, sans analyse ni interprétation",
              "Indice, champ lexical nommé, interprétation de l’ambiance",
              "Indice, phrase déclarative nommée, interprétation du leurre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans analyse ni interprétation, l’indice reste une citation brute : le tableau doit toujours comporter les trois temps."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q1",
          "type": "mcq",
          "prompt": "Organiser un centre d’intérêt, c’est élaborer :",
          "options": [
            "Un résumé du texte",
            "Un plan détaillé : titres, sous-titres, idées convergentes et moyens utilisés",
            "Une biographie de l’auteur",
            "Une liste de citations sans classement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le plan détaillé classe les sous-centres et, pour chacun, les indices, leur analyse et leurs interprétations."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q2",
          "type": "mcq",
          "prompt": "Dans le tableau d’organisation, l’analyse porte sur :",
          "options": [
            "Le titre de l’œuvre",
            "La biographie de l’auteur",
            "Le procédé d’écriture qui porte l’indice relevé",
            "La conclusion du commentaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse nomme le procédé (hyperbole, champ lexical, phrase déclarative…) avant que l’interprétation ne dégage l’effet de sens."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q3",
          "type": "mcq",
          "prompt": "Dans le tableau du centre 1, « Je suis victime d’un mirage » est analysé comme :",
          "options": [
            "Une interrogation rhétorique sur Paris",
            "Une phrase déclarative renvoyant au mirage, au leurre",
            "Un champ lexical de l’ambiance africaine",
            "Une hyperbole de la solitude"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’indice relève du sous-centre du leurre : la phrase déclarative renvoie au mirage dont Nafi se dit victime."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q4",
          "type": "mcq",
          "prompt": "Selon le tableau du centre 1, Paris est devenu pour Nafi :",
          "options": [
            "Un lieu de réussite sociale",
            "Un espace paradisiaque enfin atteint",
            "Un enfer, alors qu’il était rêvé comme un paradis",
            "Un simple lieu de passage"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le contraste est au cœur de la déception : l’espace paradisiaque de l’enfance s’est mué en un enfer quotidien."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q5",
          "type": "mcq",
          "prompt": "Les indices « ces femmes qui vont au marché en groupes joyeux » relèvent du sous-centre :",
          "options": [
            "La prise de conscience du leurre",
            "La déception de Nafi",
            "La solitude et la tristesse",
            "La solidarité africaine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les femmes allant au marché en groupes joyeux illustrent la collectivité et la concorde : c’est le sous-centre de la solidarité africaine."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p03_q6",
          "type": "mcq",
          "prompt": "Quelle ligne de tableau est incomplète et donc inutilisable ?",
          "options": [
            "Indice, hyperbole nommée, interprétation de la détresse",
            "Indice seul, sans analyse ni interprétation",
            "Indice, champ lexical nommé, interprétation de l’ambiance",
            "Indice, phrase déclarative nommée, interprétation du leurre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans analyse ni interprétation, l’indice reste une citation brute : le tableau doit toujours comporter les trois temps."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04",
      "order": 4,
      "title": "Rédiger un centre d’intérêt",
      "summary": "Transformer le plan détaillé d’un centre en paragraphes argumentatifs rédigés, reliés par des transitions.",
      "conceptExplanation": "Le développement du commentaire composé est le lieu où se réalisent l’analyse et l’interprétation du texte. Il comporte en moyenne les deux parties qui correspondent aux deux centres d’intérêt. Chaque partie est séparée de la précédente par une phrase de transition qui résume le premier centre d’intérêt et annonce le deuxième. Chaque centre d’intérêt comporte des sous-centres : un sous-centre aborde un aspect du centre d’intérêt. Il faut être synthétique et ne retenir que les éléments essentiels, employer des mots simples pour éviter la paraphrase, et utiliser des tournures qui traduisent l’effet littéraire, par exemple : « cela apparaît », « cela se traduit par », « il met en évidence », « il met en exergue », « en clair ».\nLa démarche de rédaction du développement est précise : le commentaire est entièrement rédigé ; l’unité de base de la rédaction est le paragraphe ; il faut élaborer au moins deux paragraphes par centre d’intérêt et commencer obligatoirement chaque paragraphe par un alinéa ; ne pas mettre de titre, ne pas numéroter ; construire chaque paragraphe comme un paragraphe argumentatif — énoncer l’idée du paragraphe, citer les indices textuels s’y rapportant, analyser les indices, interpréter les indices ; élaborer une phrase de transition d’un paragraphe à un autre et d’un centre d’intérêt à un autre ; soigner la présentation typographique par des sauts de lignes ; utiliser une langue correcte et soutenue, en évitant les imprécisions et les termes vagues.\nLa rédaction du centre 1 de « Lettres de France » suit cette démarche : la prise de conscience du leurre s’appuie sur les phrases déclaratives « Mon père m’avait montré une photo d’un homme » et « Il était beau sur la photo et il était en France » ; la déception, sur « Dieu que je regrette de m’être mariée », « tout est fade » et « des rues illuminées » ; la solitude, sur la métaphore doublée d’une gradation ascendante « Je suis seule, si seule, que les cadavres dans leur tombe me font envie » et l’hyperbole « Je suis au comble, au fond de ma chute ». La conclusion partielle et la transition ferment le centre : Nafi souffre véritablement dans tout son être et, face à cette pression endurée, elle se mue dans la nostalgie.",
      "keyRule": "Chaque paragraphe de centre suit le même circuit : idée énoncée, indices cités, indices analysés, indices interprétés — puis transition vers la suite.",
      "formulas": [],
      "workedExample": {
        "title": "Rédiger le centre 1 de « Lettres de France »",
        "statement": "Rédige le premier centre d’intérêt, « la désillusion de Nafi après son mariage », à partir de son plan détaillé.",
        "methodSteps": [
          "Paragraphe 1, le leurre : énoncer la prise de conscience, citer « Mon père m’avait montré une photo d’un homme », analyser les phrases déclaratives renvoyant au mirage, interpréter : Nafi découvre la supercherie.",
          "Paragraphe 2, la déception : citer « Dieu que je regrette de m’être mariée » et « tout est fade », interpréter : Paris paradisiaque s’est mué en enfer, dans un quotidien insipide et sans ambiance.",
          "Paragraphe 3, solitude et tristesse : citer la gradation « Je suis seule, si seule, que les cadavres dans leur tombe me font envie », interpréter : une vie assimilée à un enfer, dans une société individualiste.",
          "Conclusion partielle et transition : Nafi souffre dans tout son être ; face à cette pression, elle se mue dans la nostalgie — ce qui annonce le centre 2."
        ],
        "conclusion": "Le centre rédigé transforme le tableau en texte suivi : trois paragraphes argumentatifs, puis la transition vers la nostalgie du pays natal."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le développement et ses deux parties",
          "stepTheme": "Le développement et ses deux parties",
          "stepBadge": "Le développement et ses deux parties",
          "paragraphText": "• Développement du commentaire : lieu où se réalisent l’analyse et l’interprétation du texte.\nIl comporte en moyenne deux parties, qui correspondent aux deux centres d’intérêt, séparées par une phrase de transition.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q1",
            "type": "mcq",
            "prompt": "Le développement du commentaire composé comporte, en moyenne :",
            "options": [
              "Une seule partie sans transition",
              "Deux parties correspondant aux deux centres d’intérêt",
              "Autant de parties que de paragraphes du texte",
              "Une partie par page du texte support"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux centres d’intérêt, deux parties : la transition résume la première et annonce la deuxième."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le paragraphe argumentatif du centre",
          "stepTheme": "Le paragraphe argumentatif du centre",
          "stepBadge": "Le paragraphe argumentatif du centre",
          "paragraphText": "Méthode : chaque paragraphe est construit comme un paragraphe argumentatif, dans cet ordre.\n• Énoncer l’idée du paragraphe\n• Citer les indices textuels s’y rapportant\n• Analyser les indices\n• Interpréter les indices",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q2",
            "type": "mcq",
            "prompt": "Dans un paragraphe de centre d’intérêt, après avoir énoncé l’idée, il faut :",
            "options": [
              "Passer directement au paragraphe suivant",
              "Conclure tout le commentaire",
              "Citer les indices, les analyser, puis les interpréter",
              "Recopier le libellé en entier"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Idée, citation, analyse, interprétation : c’est l’ordre imposé par la démarche de rédaction de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les règles formelles de la rédaction",
          "stepTheme": "Les règles formelles de la rédaction",
          "stepBadge": "Les règles formelles de la rédaction",
          "paragraphText": "Propriété : la rédaction du développement obéit à des règles de présentation strictes.\n• Au moins deux paragraphes par centre d’intérêt\n• Chaque paragraphe commence obligatoirement par un alinéa\n• Pas de titre, pas de numérotation\n• Des sauts de lignes font apparaître les parties et les sous-parties",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q3",
            "type": "mcq",
            "prompt": "Quelle présentation respecte la démarche de la leçon ?",
            "options": [
              "Des paragraphes numérotés avec des titres",
              "Un seul bloc de texte sans alinéa",
              "Des titres pour chaque sous-centre",
              "Au moins deux paragraphes par centre, chacun ouvert par un alinéa, sans titre ni numérotation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Alinéa obligatoire, minimum de deux paragraphes par centre, ni titre ni numérotation : ce sont les règles du récapitulatif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La gradation de la solitude rédigée",
          "stepTheme": "La gradation de la solitude rédigée",
          "stepBadge": "La gradation de la solitude rédigée",
          "paragraphText": "Exemple de rédaction : la solitude de Nafi est rendue par la métaphore doublée d’une gradation ascendante, « Je suis seule, si seule, que les cadavres dans leur tombe me font envie ».\nLa rédaction en tire l’interprétation : la vie de Nafi est assimilée à un enfer, elle a perdu goût à la vie et devient très pessimiste.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q4",
            "type": "mcq",
            "prompt": "Dans la rédaction du centre 1, « Je suis seule, si seule… » est présenté comme :",
            "options": [
              "Une simple phrase déclarative sans effet",
              "Une métaphore doublée d’une gradation ascendante, qui assimile la vie de Nafi à un enfer",
              "Une interrogation rhétorique sur la France",
              "Un champ lexical de l’ambiance africaine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La rédaction nomme le double procédé (métaphore et gradation ascendante) avant d’interpréter : un enfer vécu dans l’isolement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Paraphraser au lieu d’analyser",
          "stepTheme": "Paraphraser au lieu d’analyser",
          "stepBadge": "Paraphraser au lieu d’analyser",
          "paragraphText": "Piège : reformuler le texte avec d’autres mots au lieu de l’analyser, ou multiplier les détails secondaires.\nLa méthodologie demande d’être synthétique, de ne retenir que les éléments essentiels et d’employer des mots simples, précisément pour éviter la paraphrase.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q5",
            "type": "mcq",
            "prompt": "Pour éviter la paraphrase, la méthodologie recommande :",
            "options": [
              "De recopier de longs passages du texte",
              "D’ajouter des détails secondaires nombreux",
              "D’être synthétique, de ne retenir que l’essentiel et d’employer des mots simples",
              "De changer tous les mots du texte par des synonymes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Synthèse et mots simples : on analyse des indices choisis, on ne réécrit pas le texte."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le bonheur de l’enfance dans « Maturité »",
          "stepTheme": "Le bonheur de l’enfance dans « Maturité »",
          "stepBadge": "Le bonheur de l’enfance dans « Maturité »",
          "paragraphText": "Exemple d’application : la rédaction du centre 1 de « Maturité » montre le bonheur de l’enfance par la nature — le champ lexical de la nature (« l’herbe », « l’eau », « le sel », « le soleil ») évoque les plaisirs de la poétesse.\nUne métaphore renforcée par une personnification assimile ensuite les éléments de la nature à des mets délicieux : la poétesse est en extase, comme au paradis. La rédaction se ferme par un bilan et une transition : l’enfance a été un bonheur total, mais cette idylle va faire place aux dures réalités de l’âge adulte.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q6",
            "type": "mcq",
            "prompt": "Dans la rédaction du centre 1 de « Maturité », « l’herbe », « l’eau », « le sel » et « le soleil » forment :",
            "options": [
              "Le champ lexical de la nature, évoquant les plaisirs de l’enfance",
              "Le champ lexical de la vieillesse",
              "Une gradation de la solitude",
              "Le vocabulaire de la prise de conscience"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces groupes nominaux relèvent du champ lexical de la nature et fondent le premier aspect du centre : les plaisirs savourés pendant l’enfance."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q1",
          "type": "mcq",
          "prompt": "Le développement du commentaire composé comporte, en moyenne :",
          "options": [
            "Une seule partie sans transition",
            "Deux parties correspondant aux deux centres d’intérêt",
            "Autant de parties que de paragraphes du texte",
            "Une partie par page du texte support"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux centres d’intérêt, deux parties : la transition résume la première et annonce la deuxième."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q2",
          "type": "mcq",
          "prompt": "Dans un paragraphe de centre d’intérêt, après avoir énoncé l’idée, il faut :",
          "options": [
            "Passer directement au paragraphe suivant",
            "Conclure tout le commentaire",
            "Citer les indices, les analyser, puis les interpréter",
            "Recopier le libellé en entier"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Idée, citation, analyse, interprétation : c’est l’ordre imposé par la démarche de rédaction de la leçon."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q3",
          "type": "mcq",
          "prompt": "Quelle présentation respecte la démarche de la leçon ?",
          "options": [
            "Des paragraphes numérotés avec des titres",
            "Un seul bloc de texte sans alinéa",
            "Des titres pour chaque sous-centre",
            "Au moins deux paragraphes par centre, chacun ouvert par un alinéa, sans titre ni numérotation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Alinéa obligatoire, minimum de deux paragraphes par centre, ni titre ni numérotation : ce sont les règles du récapitulatif."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q4",
          "type": "mcq",
          "prompt": "Dans la rédaction du centre 1, « Je suis seule, si seule… » est présenté comme :",
          "options": [
            "Une simple phrase déclarative sans effet",
            "Une métaphore doublée d’une gradation ascendante, qui assimile la vie de Nafi à un enfer",
            "Une interrogation rhétorique sur la France",
            "Un champ lexical de l’ambiance africaine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La rédaction nomme le double procédé (métaphore et gradation ascendante) avant d’interpréter : un enfer vécu dans l’isolement."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q5",
          "type": "mcq",
          "prompt": "Pour éviter la paraphrase, la méthodologie recommande :",
          "options": [
            "De recopier de longs passages du texte",
            "D’ajouter des détails secondaires nombreux",
            "D’être synthétique, de ne retenir que l’essentiel et d’employer des mots simples",
            "De changer tous les mots du texte par des synonymes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Synthèse et mots simples : on analyse des indices choisis, on ne réécrit pas le texte."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p04_q6",
          "type": "mcq",
          "prompt": "Dans la rédaction du centre 1 de « Maturité », « l’herbe », « l’eau », « le sel » et « le soleil » forment :",
          "options": [
            "Le champ lexical de la nature, évoquant les plaisirs de l’enfance",
            "Le champ lexical de la vieillesse",
            "Une gradation de la solitude",
            "Le vocabulaire de la prise de conscience"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces groupes nominaux relèvent du champ lexical de la nature et fondent le premier aspect du centre : les plaisirs savourés pendant l’enfance."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05",
      "order": 5,
      "title": "Rédiger l’introduction et la conclusion",
      "summary": "Construire l’introduction (perspective générale, présentation du texte, annonce du plan) et la conclusion (bilan, jugement, ouverture).",
      "conceptExplanation": "L’introduction du commentaire composé comporte trois moments. La contextualisation ou perspective générale vise à situer le texte en partant du thème, du genre littéraire ou de la vie de l’auteur. La présentation du texte indique le titre du texte, le nom de l’auteur, le titre de l’œuvre et la date de publication, et dégage l’idée générale du texte. L’annonce du plan énumère brièvement les deux centres d’intérêt, qui correspondent aux différentes parties du développement. La démarche précise : l’introduction tient en un seul paragraphe et un seul alinéa ; elle situe le texte dans son contexte (auteur, époque, œuvre), présente le texte (idée générale, type et forme, intérêt majeur) et annonce le plan de façon claire et nette, dans un style élégant, par exemple avec des questions ou des verbes au futur.\nL’introduction rédigée pour « Lettres de France » illustre cette démarche : généralité sur la recherche de l’idéal guidée par le désir d’un ailleurs meilleur, qui se solde souvent par un désenchantement ; présentation du texte épistolaire « Lettres de France », extrait du recueil de nouvelles Voltaïques de l’écrivain sénégalais Sembène Ousmane ; idée générale, les regrets de Nafi après son mariage, une fois en France ; annonce du plan, la désillusion de Nafi après son mariage a suscité sa nostalgie du pays natal.\nLa conclusion comporte elle aussi trois composantes : le bilan, le jugement personnel et l’ouverture. Pour Nafi : le bilan retient que la désillusion après le mariage a été un véritable enfer ; le jugement estime que, quelle que soit sa situation, Nafi serait bien obligée de s’accommoder à cette nouvelle vie ; l’ouverture rapproche le texte de Sous le voile de la mariée de Mathurin Goli Bi Irié, œuvre dans laquelle Jean Jacques Gozié découvre le caractère égoïste et orgueilleux de sa femme après son mariage. La démarche précise : la conclusion tient en un seul paragraphe et un seul alinéa, fait le bilan de la réflexion sur le sens et l’intérêt du texte, répond aux questions soulevées dans l’introduction et ouvre facultativement sur des perspectives plus larges.",
      "keyRule": "Introduction : perspective générale, présentation du texte, annonce du plan. Conclusion : bilan, jugement personnel, ouverture — chacune en un seul paragraphe.",
      "formulas": [],
      "workedExample": {
        "title": "Introduction et conclusion de « Maturité » (évaluation traitée)",
        "statement": "Rédige l’introduction et la conclusion du commentaire de « Maturité » de Denise Jallais, en suivant les démarches de la leçon.",
        "methodSteps": [
          "Introduction, généralité : l’enfance est une période de bonheur, de joie intense et d’insouciance, source d’inspiration de plusieurs écrits.",
          "Introduction, présentation : « Maturité » de Denise Jallais, extrait de La poésie féminine contemporaine ; idée générale : la poétesse met en opposition deux aspects de sa vie, l’enfance et l’âge adulte.",
          "Introduction, annonce : montrer comment la poétesse présente le bonheur pendant l’enfance et les réalités de l’âge adulte.",
          "Conclusion, bilan : l’enfance a été marquée par les plaisirs de la nature et des festivités, mais l’âge adulte apparaît comme celui de la prise de conscience face aux vicissitudes de la vie.",
          "Conclusion, jugement et ouverture : ces deux aspects font partie intégrante de l’existence humaine ; rapprochement avec « Nuit de Sine » de Léopold Sédar Senghor, extrait de Chants d’ombre, où le poète relate avec nostalgie les réjouissances de son enfance."
        ],
        "conclusion": "Introduction et conclusion de « Maturité » appliquent exactement les deux démarches : trois moments chacune, en un seul paragraphe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les trois moments de l’introduction",
          "stepTheme": "Les trois moments de l’introduction",
          "stepBadge": "Les trois moments de l’introduction",
          "paragraphText": "• Introduction du commentaire composé : un texte en trois moments.\n• La contextualisation ou perspective générale, qui situe le texte à partir du thème, du genre ou de la vie de l’auteur\n• La présentation du texte : titre, auteur, œuvre et date, idée générale\n• L’annonce du plan : les deux centres d’intérêt, brièvement énumérés",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q1",
            "type": "mcq",
            "prompt": "La présentation du texte, dans l’introduction, doit indiquer :",
            "options": [
              "Uniquement le thème du texte",
              "Le titre du texte, l’auteur, l’œuvre et sa date, ainsi que l’idée générale",
              "Les procédés d’écriture du centre 1",
              "Le bilan de l’étude"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Titre, auteur, œuvre, date et idée générale : ce sont les éléments exigés pour la présentation du texte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Un seul paragraphe pour l’introduction",
          "stepTheme": "Un seul paragraphe pour l’introduction",
          "stepBadge": "Un seul paragraphe pour l’introduction",
          "paragraphText": "Méthode : l’introduction tient en un seul paragraphe et en un seul alinéa.\nElle énonce une perspective générale, situe le texte dans son contexte, le présente, puis annonce le plan de façon claire et nette, dans un style élégant et pas trop lourd, par exemple avec des questions ou des verbes au futur.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q2",
            "type": "mcq",
            "prompt": "Selon le récapitulatif, l’introduction doit être rédigée :",
            "options": [
              "En trois paragraphes séparés par des titres",
              "En vers libres",
              "En un seul paragraphe et un seul alinéa, avec une annonce de plan claire et élégante",
              "Sous forme de liste à puces"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un paragraphe, un alinéa : la démarche de l’introduction est explicite dans le récapitulatif de la séance 5."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L’introduction de « Lettres de France »",
          "stepTheme": "L’introduction de « Lettres de France »",
          "stepBadge": "L’introduction de « Lettres de France »",
          "paragraphText": "Exemple : l’introduction rédigée ouvre sur la recherche de l’idéal guidée par le désir d’un ailleurs meilleur, quête qui se solde bien souvent par un désenchantement.\nElle présente ensuite le texte épistolaire « Lettres de France », extrait de Voltaïques de Sembène Ousmane, puis annonce que la désillusion de Nafi a suscité sa nostalgie du pays natal.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q3",
            "type": "mcq",
            "prompt": "La généralité de l’introduction de « Lettres de France » porte sur :",
            "options": [
              "La poésie féminine contemporaine",
              "L’enfance insouciante",
              "La biographie détaillée de Sembène Ousmane",
              "La recherche de l’idéal et le désenchantement qu’elle provoque souvent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La perspective générale part du thème du texte : la quête d’un ailleurs meilleur, qui conduit au désenchantement de Nafi."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les trois composantes de la conclusion",
          "stepTheme": "Les trois composantes de la conclusion",
          "stepBadge": "Les trois composantes de la conclusion",
          "paragraphText": "• Conclusion du commentaire composé : dernier texte du devoir, en trois composantes.\n• Le bilan de l’étude menée\n• Le jugement personnel, ou prise de position\n• L’ouverture, par un rapprochement avec un autre texte",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q4",
            "type": "mcq",
            "prompt": "Le premier élément de la conclusion, selon la leçon, est :",
            "options": [
              "Le bilan de l’étude menée",
              "L’annonce du plan",
              "La présentation de l’auteur",
              "Une nouvelle analyse d’indice"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conclusion s’ouvre par le bilan : pour Nafi, la désillusion après le mariage a été un véritable enfer."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’ouverture sur Goli Bi Irié",
          "stepTheme": "L’ouverture sur Goli Bi Irié",
          "stepBadge": "L’ouverture sur Goli Bi Irié",
          "paragraphText": "Exemple : la conclusion de « Lettres de France » s’ouvre par un rapprochement avec Sous le voile de la mariée de Mathurin Goli Bi Irié.\nDans cette œuvre, Jean Jacques Gozié découvre le caractère égoïste et orgueilleux de sa femme après son mariage : la thématique du désenchantement conjugal est proche.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q5",
            "type": "mcq",
            "prompt": "L’ouverture de la conclusion de « Lettres de France » rapproche le texte :",
            "options": [
              "De « Maturité » de Denise Jallais",
              "De Sous le voile de la mariée de Mathurin Goli Bi Irié",
              "De « Nuit de Sine » de Senghor",
              "Des Fables de La Fontaine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le rapprochement proposé par la conclusion de la leçon : même découverte désenchantée du conjoint après le mariage."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une conclusion qui rouvre l’analyse",
          "stepTheme": "Une conclusion qui rouvre l’analyse",
          "stepBadge": "Une conclusion qui rouvre l’analyse",
          "paragraphText": "Piège : ajouter dans la conclusion une nouvelle analyse d’indices, ou ne pas répondre aux questions de l’introduction.\nLa démarche demande un seul paragraphe qui fait le bilan de la réflexion sur le sens et l’intérêt du texte et répond aux questions soulevées dans l’introduction ; l’ouverture sur des perspectives plus larges reste facultative.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q6",
            "type": "mcq",
            "prompt": "Quelle conclusion est fautive, selon la démarche de la leçon ?",
            "options": [
              "Celle qui fait le bilan en un seul paragraphe",
              "Celle qui prend position sur le sort de Nafi",
              "Celle qui ajoute une nouvelle analyse d’indices jamais étudiés",
              "Celle qui se ferme par un rapprochement avec un autre texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La conclusion bilan et juge, elle n’analyse plus : toute nouvelle étude d’indices appartient au développement."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q1",
          "type": "mcq",
          "prompt": "La présentation du texte, dans l’introduction, doit indiquer :",
          "options": [
            "Uniquement le thème du texte",
            "Le titre du texte, l’auteur, l’œuvre et sa date, ainsi que l’idée générale",
            "Les procédés d’écriture du centre 1",
            "Le bilan de l’étude"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Titre, auteur, œuvre, date et idée générale : ce sont les éléments exigés pour la présentation du texte."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q2",
          "type": "mcq",
          "prompt": "Selon le récapitulatif, l’introduction doit être rédigée :",
          "options": [
            "En trois paragraphes séparés par des titres",
            "En vers libres",
            "En un seul paragraphe et un seul alinéa, avec une annonce de plan claire et élégante",
            "Sous forme de liste à puces"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un paragraphe, un alinéa : la démarche de l’introduction est explicite dans le récapitulatif de la séance 5."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q3",
          "type": "mcq",
          "prompt": "La généralité de l’introduction de « Lettres de France » porte sur :",
          "options": [
            "La poésie féminine contemporaine",
            "L’enfance insouciante",
            "La biographie détaillée de Sembène Ousmane",
            "La recherche de l’idéal et le désenchantement qu’elle provoque souvent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La perspective générale part du thème du texte : la quête d’un ailleurs meilleur, qui conduit au désenchantement de Nafi."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q4",
          "type": "mcq",
          "prompt": "Le premier élément de la conclusion, selon la leçon, est :",
          "options": [
            "Le bilan de l’étude menée",
            "L’annonce du plan",
            "La présentation de l’auteur",
            "Une nouvelle analyse d’indice"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conclusion s’ouvre par le bilan : pour Nafi, la désillusion après le mariage a été un véritable enfer."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q5",
          "type": "mcq",
          "prompt": "L’ouverture de la conclusion de « Lettres de France » rapproche le texte :",
          "options": [
            "De « Maturité » de Denise Jallais",
            "De Sous le voile de la mariée de Mathurin Goli Bi Irié",
            "De « Nuit de Sine » de Senghor",
            "Des Fables de La Fontaine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le rapprochement proposé par la conclusion de la leçon : même découverte désenchantée du conjoint après le mariage."
        },
        {
          "id": "premiere_a1_francais_ee_l01_commentaire_compose_p05_q6",
          "type": "mcq",
          "prompt": "Quelle conclusion est fautive, selon la démarche de la leçon ?",
          "options": [
            "Celle qui fait le bilan en un seul paragraphe",
            "Celle qui prend position sur le sort de Nafi",
            "Celle qui ajoute une nouvelle analyse d’indices jamais étudiés",
            "Celle qui se ferme par un rapprochement avec un autre texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La conclusion bilan et juge, elle n’analyse plus : toute nouvelle étude d’indices appartient au développement."
        }
      ]
    }
  ]
};
