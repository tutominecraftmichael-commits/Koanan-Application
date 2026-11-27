import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Le commentaire composé » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3748
export const FR_TLE_EE_L02_COMMENTAIRE_COMPOSE: CurriculumChapter = {
  "id": "terminale_a1_francais_ee_l02_commentaire_compose",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 2,
  "title": "Leçon 2 : Le commentaire composé",
  "summary": "À partir du poème « Le palais hanté » d'Edgar Allan Poe, la leçon apprend à faire un commentaire composé : analyser le libellé, construire le sens du texte, organiser et rédiger les centres d'intérêt, l'introduction et la conclusion, jusqu'à la rédaction complète.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3748",
  "points": [
    {
      "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01",
      "order": 1,
      "title": "Analyser le libellé et identifier les centres d'intérêt",
      "summary": "Distinguer l'information et la consigne du libellé, puis en tirer et expliquer les centres d'intérêt.",
      "conceptExplanation": "Un libellé de commentaire composé comporte deux parties : l'information et la consigne. La consigne indique l'exercice à faire ; l'information donne l'orientation de l'étude.\nLes centres d'intérêt sont à chercher dans l'information. Il faut ensuite les expliquer avant de les traiter.\nPour le texte support « Le palais hanté », poème extrait de La Chute de la maison Usher d'Edgar Allan Poe, le libellé demande : « Faites un commentaire composé de ce poème. Étudiez d'abord la gloire ambiante du palais et ensuite, les déboires qu'il subit. » L'information est donc « la gloire ambiante du palais et les déboires qu'il subit », et la consigne est « faites un commentaire composé de ce poème ». Les centres d'intérêt sont : centre d'intérêt 1, la gloire ambiante du palais — le rayonnement qui se dégageait du palais, son rayonnement passé ; centre d'intérêt 2, les déboires du palais — les difficultés, la décadence, le déclin du palais.",
      "keyRule": "Les centres d'intérêt se cherchent dans l'information du libellé, jamais ailleurs : identifie-la, puis explique chaque centre avant de le traiter.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser le libellé du « Palais hanté »",
        "statement": "Libellé : « Faites un commentaire composé de ce poème. Étudiez d'abord la gloire ambiante du palais et ensuite, les déboires qu'il subit. » Distingue les parties du libellé et identifie les centres d'intérêt.",
        "methodSteps": [
          "Consigne : « Faites un commentaire composé de ce poème » — c'est l'exercice à réaliser.",
          "Information : « la gloire ambiante du palais et les déboires qu'il subit » — c'est l'orientation de l'étude.",
          "Centre d'intérêt 1 : la gloire ambiante du palais, c'est-à-dire le rayonnement qui se dégageait du palais, son rayonnement passé.",
          "Centre d'intérêt 2 : les déboires du palais, c'est-à-dire les difficultés, la décadence, le déclin du palais.",
          "L'ordre du libellé impose l'ordre de l'étude : d'abord la gloire, ensuite les déboires."
        ],
        "conclusion": "Le libellé analysé livre les deux centres d'intérêt et leur ordre, qui deviendront le plan du commentaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'information du libellé",
          "stepTheme": "L'information du libellé",
          "stepBadge": "L'information du libellé",
          "paragraphText": "• Information : partie du libellé qui donne l'orientation de l'étude du texte.\nDans le libellé du « Palais hanté », l'information est « la gloire ambiante du palais et les déboires qu'il subit ».",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q1",
            "type": "mcq",
            "prompt": "Dans un libellé de commentaire composé, l'information contient :",
            "options": [
              "L'exercice à réaliser",
              "L'orientation de l'étude, d'où l'on tire les centres d'intérêt",
              "Le nom de l'auteur du texte",
              "La conclusion du commentaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les centres d'intérêt sont à chercher dans l'information : elle donne l'orientation de l'étude."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La consigne du commentaire",
          "stepTheme": "La consigne du commentaire",
          "stepBadge": "La consigne du commentaire",
          "paragraphText": "• Consigne : partie du libellé qui indique l'exercice à accomplir.\nIci : « Faites un commentaire composé de ce poème. »",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q2",
            "type": "mcq",
            "prompt": "La consigne du libellé du « Palais hanté » est :",
            "options": [
              "« La gloire ambiante du palais »",
              "« Les déboires qu'il subit »",
              "« Faites un commentaire composé de ce poème »",
              "« Edgar Allan Poe, La Chute de la maison Usher »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Faites un commentaire composé de ce poème » dit le travail à faire : c'est la consigne. Le reste relève de l'information ou de la présentation du texte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Chercher les centres dans l'information",
          "stepTheme": "Chercher les centres dans l'information",
          "stepBadge": "Chercher les centres dans l'information",
          "paragraphText": "Méthode : les centres d'intérêt sont à chercher dans l'information du libellé.\nChaque élément de l'information, relié aux autres par « d'abord » et « ensuite », devient un centre d'intérêt, dans le même ordre.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q3",
            "type": "mcq",
            "prompt": "Les centres d'intérêt d'un commentaire composé se cherchent :",
            "options": [
              "Dans la biographie de l'auteur",
              "Dans l'information du libellé",
              "Dans la conclusion du texte",
              "Au hasard, selon l'inspiration du candidat"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la règle de la leçon : les centres d'intérêt sont à chercher dans l'information."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Expliquer chaque centre d'intérêt",
          "stepTheme": "Expliquer chaque centre d'intérêt",
          "stepBadge": "Expliquer chaque centre d'intérêt",
          "paragraphText": "Méthode : une fois identifié, chaque centre d'intérêt doit être expliqué.\nLa gloire ambiante du palais : le rayonnement qui se dégageait du palais, son rayonnement passé. Les déboires du palais : les difficultés, la décadence, le déclin du palais.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q4",
            "type": "mcq",
            "prompt": "Expliquer le centre « les déboires du palais », c'est le définir comme :",
            "options": [
              "Le rayonnement passé du palais",
              "La beauté éclatante du palais",
              "Les difficultés, la décadence, le déclin du palais",
              "La qualité de ses habitants"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Déboires signifie ici difficultés, décadence et déclin : c'est l'explication donnée dans l'analyse du libellé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Chercher les centres hors de l'information",
          "stepTheme": "Chercher les centres hors de l'information",
          "stepBadge": "Chercher les centres hors de l'information",
          "paragraphText": "Piège : inventer des centres d'intérêt à partir du titre seul, d'un souvenir de cours ou d'une lecture personnelle du texte.\nSans appui dans l'information, le centre est hors libellé et le commentaire passe à côté de l'étude demandée.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q5",
            "type": "mcq",
            "prompt": "Quel centre d'intérêt serait fautif pour le libellé du « Palais hanté » ?",
            "options": [
              "La gloire ambiante du palais",
              "Les déboires du palais",
              "Le rayonnement passé du palais",
              "La vie sentimentale d'Edgar Allan Poe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La vie de l'auteur ne figure pas dans l'information du libellé : les deux centres sont la gloire ambiante et les déboires du palais."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les centres de « Ma Bohème » (évaluation)",
          "stepTheme": "Les centres de « Ma Bohème » (évaluation)",
          "stepBadge": "Les centres de « Ma Bohème » (évaluation)",
          "paragraphText": "Exemple d'application : pour « Ma Bohème » d'Arthur Rimbaud, le libellé demande de montrer d'une part la misère du poète et, d'autre part, les étonnants pouvoirs de la poésie.\nLes centres identifiés sont donc : centre 1, la misère du poète ; centre 2, les étonnants pouvoirs de la poésie.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q6",
            "type": "mcq",
            "prompt": "Dans l'évaluation sur « Ma Bohème », le premier centre d'intérêt est :",
            "options": [
              "Les étonnants pouvoirs de la poésie",
              "La misère du poète",
              "La guerre franco-prussienne",
              "La vie de Rimbaud à Paris"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le traitement de l'évaluation identifie : centre 1, la misère du poète ; centre 2, les étonnants pouvoirs de la poésie."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q1",
          "type": "mcq",
          "prompt": "Dans un libellé de commentaire composé, l'information contient :",
          "options": [
            "L'exercice à réaliser",
            "L'orientation de l'étude, d'où l'on tire les centres d'intérêt",
            "Le nom de l'auteur du texte",
            "La conclusion du commentaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les centres d'intérêt sont à chercher dans l'information : elle donne l'orientation de l'étude."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q2",
          "type": "mcq",
          "prompt": "La consigne du libellé du « Palais hanté » est :",
          "options": [
            "« La gloire ambiante du palais »",
            "« Les déboires qu'il subit »",
            "« Faites un commentaire composé de ce poème »",
            "« Edgar Allan Poe, La Chute de la maison Usher »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Faites un commentaire composé de ce poème » dit le travail à faire : c'est la consigne. Le reste relève de l'information ou de la présentation du texte."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q3",
          "type": "mcq",
          "prompt": "Les centres d'intérêt d'un commentaire composé se cherchent :",
          "options": [
            "Dans la biographie de l'auteur",
            "Dans l'information du libellé",
            "Dans la conclusion du texte",
            "Au hasard, selon l'inspiration du candidat"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la règle de la leçon : les centres d'intérêt sont à chercher dans l'information."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q4",
          "type": "mcq",
          "prompt": "Expliquer le centre « les déboires du palais », c'est le définir comme :",
          "options": [
            "Le rayonnement passé du palais",
            "La beauté éclatante du palais",
            "Les difficultés, la décadence, le déclin du palais",
            "La qualité de ses habitants"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Déboires signifie ici difficultés, décadence et déclin : c'est l'explication donnée dans l'analyse du libellé."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q5",
          "type": "mcq",
          "prompt": "Quel centre d'intérêt serait fautif pour le libellé du « Palais hanté » ?",
          "options": [
            "La gloire ambiante du palais",
            "Les déboires du palais",
            "Le rayonnement passé du palais",
            "La vie sentimentale d'Edgar Allan Poe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La vie de l'auteur ne figure pas dans l'information du libellé : les deux centres sont la gloire ambiante et les déboires du palais."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p01_q6",
          "type": "mcq",
          "prompt": "Dans l'évaluation sur « Ma Bohème », le premier centre d'intérêt est :",
          "options": [
            "Les étonnants pouvoirs de la poésie",
            "La misère du poète",
            "La guerre franco-prussienne",
            "La vie de Rimbaud à Paris"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le traitement de l'évaluation identifie : centre 1, la misère du poète ; centre 2, les étonnants pouvoirs de la poésie."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02",
      "order": 2,
      "title": "Construire le sens du texte et organiser les centres d'intérêt",
      "summary": "Dégager thème, nature, tonalité et idée générale, puis organiser chaque centre en indices, procédés et interprétations.",
      "conceptExplanation": "Construire le sens du texte, c'est dégager son thème, sa nature, sa tonalité et son idée générale. Pour « Le palais hanté » : le thème est la recherche de l'idéal ou d'un ailleurs meilleur par l'artiste ; la nature du texte est poétique ; la tonalité est pathétique ; l'idée générale est le regret de la gloire passée d'un palais royal, ou le symbolisme de l'ennui sur le poète.\nChaque centre d'intérêt s'organise ensuite en un tableau à trois entrées : les indices textuels relevés dans le texte, les procédés d'écriture qui les portent, et les interprétations qu'ils permettent. Chaque centre se subdivise enfin en thèmes directeurs.\nCentre 1 : thèmes directeurs « un palais somptueux » et « un palais plein d'aura », appuyés sur les champs lexicaux du flamboiement et de la beauté, les êtres de haut rang, la gradation ascendante, les imparfaits de description, la métaphore, l'hypallage, la personnification et l'enjambement. Centre 2 : thèmes directeurs « la décadence » et « l'ensorcellement du palais », appuyés sur les adverbes de temps, le « mais » de rupture, les champs lexicaux de la réminiscence et de la mort, l'interjection de regret, les phrases négatives et le vocabulaire péjoratif.",
      "keyRule": "Pour chaque centre, remplis le tableau en trois colonnes — indices, procédés, interprétations — puis regroupe les indices en thèmes directeurs.",
      "formulas": [],
      "workedExample": {
        "title": "Construire le sens du texte « Le démocrate africain » (évaluation)",
        "statement": "Dans l'évaluation, le texte de Comi M. Toulabour, paru dans Le Monde diplomatique d'octobre 2001, demande de déterminer la thèse développée. Construis le sens global de ce texte argumentatif.",
        "methodSteps": [
          "Thème du texte : la démocratie en Afrique et l'émergence d'une nouvelle culture politique sur le continent.",
          "Premier constat du texte : la démocratie progresse tant bien que mal en Afrique, malgré la lenteur des résultats concrets.",
          "Contexte rappelé : cette nouvelle culture prend corps sur les restes de la culture des dictateurs et des autocrates, et l'aspiration à la liberté d'expression se traduit par des associations, des syndicats, des partis et une presse locale.",
          "Limite soulignée par l'auteur : ce qui frappe, c'est l'absence de catégories sociales qui portent véritablement les idéaux et les valeurs démocratiques.",
          "Idée générale : les progrès démocratiques sont lents, la démocratie reste faite de bricolages perfectibles, et sa consolidation dépendra du rapport des forces entre la société, les individus et les institutions."
        ],
        "conclusion": "Le sens construit — thème, constats et limite — permet de formuler la thèse du texte sans ajouter d'idée étrangère au texte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Thème, nature, tonalité, idée générale",
          "stepTheme": "Thème, nature, tonalité, idée générale",
          "stepBadge": "Thème, nature, tonalité, idée générale",
          "paragraphText": "• Construction du sens : dégager le thème du texte, sa nature, sa tonalité et son idée générale.\nPour « Le palais hanté » : thème, la recherche de l'idéal par l'artiste ; nature, texte poétique ; tonalité, pathétique ; idée générale, le regret de la gloire passée d'un palais royal.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q1",
            "type": "mcq",
            "prompt": "L'idée générale du « Palais hanté », selon la leçon, est :",
            "options": [
              "La célébration d'un palais encore puissant",
              "Le regret de la gloire passée d'un palais royal",
              "La description d'une vallée heureuse",
              "L'éloge des êtres maléfiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Thème, nature poétique, tonalité pathétique et idée générale du regret de la gloire passée : c'est la construction du sens donnée par la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le tableau indices, procédés, interprétations",
          "stepTheme": "Le tableau indices, procédés, interprétations",
          "stepBadge": "Le tableau indices, procédés, interprétations",
          "paragraphText": "Méthode : organiser chaque centre en trois colonnes.\n• Indices textuels : les mots et passages relevés dans le texte\n• Procédés d'écriture : le fait de langue ou la figure qui porte l'indice\n• Interprétations : l'effet de sens dégagé",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q2",
            "type": "mcq",
            "prompt": "Dans l'organisation d'un centre d'intérêt, la deuxième colonne du tableau porte sur :",
            "options": [
              "Les indices textuels",
              "Les thèmes directeurs",
              "Les procédés d'écriture",
              "Les interprétations"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'ordre du tableau de la leçon est : indices textuels, procédés d'écriture, interprétations."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les thèmes directeurs d'un centre",
          "stepTheme": "Les thèmes directeurs d'un centre",
          "stepBadge": "Les thèmes directeurs d'un centre",
          "paragraphText": "Propriété : chaque centre d'intérêt se subdivise en thèmes directeurs, qui regroupent les indices convergents.\nCentre 1 du « Palais hanté » : thème directeur 1, un palais somptueux ; thème directeur 2, un palais plein d'aura. Centre 2 : la décadence, puis l'ensorcellement du palais.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q3",
            "type": "mcq",
            "prompt": "Les deux thèmes directeurs du centre 1 du « Palais hanté » sont :",
            "options": [
              "La décadence et l'ensorcellement",
              "Un palais somptueux et un palais plein d'aura",
              "La misère et les pouvoirs de la poésie",
              "Le passé et le présent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Somptueux et plein d'aura décrivent la gloire du palais ; décadence et ensorcellement appartiennent au centre 2, les déboires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le champ lexical du flamboiement",
          "stepTheme": "Le champ lexical du flamboiement",
          "stepBadge": "Le champ lexical du flamboiement",
          "paragraphText": "Exemple d'organisation : les indices « gloire », « rayonnant », « dorées », « lumineuses » et « s'empourprait » forment le champ lexical du flamboiement.\nInterprétation : la beauté éclatante du palais ; le palais brille, étincelle et frappe la vue.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q4",
            "type": "mcq",
            "prompt": "Les mots « rayonnant », « dorées » et « lumineuses » relèvent, dans le tableau de la leçon, du :",
            "options": [
              "Champ lexical de la mort",
              "Champ lexical de la réminiscence",
              "Vocabulaire péjoratif",
              "Champ lexical du flamboiement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ces indices lumineux forment le champ lexical du flamboiement et fondent l'interprétation : un palais qui brille et frappe la vue."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Citer sans analyser ni interpréter",
          "stepTheme": "Citer sans analyser ni interpréter",
          "stepBadge": "Citer sans analyser ni interpréter",
          "paragraphText": "Piège : relever des citations et s'arrêter là.\nUn indice ne vaut que par le procédé qui le porte et par l'interprétation qu'il autorise ; sans ces deux étapes, le centre d'intérêt n'est pas construit.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q5",
            "type": "mcq",
            "prompt": "Quelle démarche est insuffisante pour organiser un centre d'intérêt ?",
            "options": [
              "Associer chaque indice à un procédé",
              "Regrouper les indices en thèmes directeurs",
              "Lister des citations sans procédé ni interprétation",
              "Dégager l'effet de sens des indices"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La liste de citations brute ne construit rien : il faut le procédé et l'interprétation pour chaque indice."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le contraste du passé et du présent",
          "stepTheme": "Le contraste du passé et du présent",
          "stepBadge": "Le contraste du passé et du présent",
          "paragraphText": "Exemple : le centre 2 s'ouvre sur des indices de rupture — « autrefois », l'adverbe de temps ; « mais », conjonction de coordination à valeur de rupture ; « maintenant », adverbe du présent.\nInterprétation : le passé glorieux contraste radicalement avec le présent terne ; s'y ajoutent le champ lexical de la réminiscence (« souvenir ténébreux », « vieux âges défunts ») et celui de la mort (« défunts », « en robes de deuil », « lugubre »).",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q6",
            "type": "mcq",
            "prompt": "Dans le centre 2, la conjonction « mais » a, selon la leçon, une valeur :",
            "options": [
              "D'addition simple",
              "De rupture, entre le passé glorieux et le présent terne",
              "De cause",
              "De conclusion joyeuse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le « mais » marque la rupture : le passé glorieux contraste radicalement avec le présent terne du palais."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q1",
          "type": "mcq",
          "prompt": "L'idée générale du « Palais hanté », selon la leçon, est :",
          "options": [
            "La célébration d'un palais encore puissant",
            "Le regret de la gloire passée d'un palais royal",
            "La description d'une vallée heureuse",
            "L'éloge des êtres maléfiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Thème, nature poétique, tonalité pathétique et idée générale du regret de la gloire passée : c'est la construction du sens donnée par la leçon."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q2",
          "type": "mcq",
          "prompt": "Dans l'organisation d'un centre d'intérêt, la deuxième colonne du tableau porte sur :",
          "options": [
            "Les indices textuels",
            "Les thèmes directeurs",
            "Les procédés d'écriture",
            "Les interprétations"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'ordre du tableau de la leçon est : indices textuels, procédés d'écriture, interprétations."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q3",
          "type": "mcq",
          "prompt": "Les deux thèmes directeurs du centre 1 du « Palais hanté » sont :",
          "options": [
            "La décadence et l'ensorcellement",
            "Un palais somptueux et un palais plein d'aura",
            "La misère et les pouvoirs de la poésie",
            "Le passé et le présent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Somptueux et plein d'aura décrivent la gloire du palais ; décadence et ensorcellement appartiennent au centre 2, les déboires."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q4",
          "type": "mcq",
          "prompt": "Les mots « rayonnant », « dorées » et « lumineuses » relèvent, dans le tableau de la leçon, du :",
          "options": [
            "Champ lexical de la mort",
            "Champ lexical de la réminiscence",
            "Vocabulaire péjoratif",
            "Champ lexical du flamboiement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ces indices lumineux forment le champ lexical du flamboiement et fondent l'interprétation : un palais qui brille et frappe la vue."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q5",
          "type": "mcq",
          "prompt": "Quelle démarche est insuffisante pour organiser un centre d'intérêt ?",
          "options": [
            "Associer chaque indice à un procédé",
            "Regrouper les indices en thèmes directeurs",
            "Lister des citations sans procédé ni interprétation",
            "Dégager l'effet de sens des indices"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La liste de citations brute ne construit rien : il faut le procédé et l'interprétation pour chaque indice."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p02_q6",
          "type": "mcq",
          "prompt": "Dans le centre 2, la conjonction « mais » a, selon la leçon, une valeur :",
          "options": [
            "D'addition simple",
            "De rupture, entre le passé glorieux et le présent terne",
            "De cause",
            "De conclusion joyeuse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le « mais » marque la rupture : le passé glorieux contraste radicalement avec le présent terne du palais."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03",
      "order": 3,
      "title": "Rédiger les centres d'intérêt",
      "summary": "Transformer le tableau d'un centre en rédaction suivie : annonce, indices expliqués, bilan et transition.",
      "conceptExplanation": "Rédiger un centre d'intérêt, c'est transformer son tableau en texte suivi : annoncer les aspects du centre (ses thèmes directeurs), puis développer chaque aspect en citant les indices, en nommant les procédés et en donnant les interprétations, avant de conclure le centre et d'assurer la transition vers le centre suivant.\nLa rédaction du centre 1 du « Palais hanté » annonce : « La gloire ambiante du palais se présente sous deux aspects, à savoir, un palais somptueux et un palais plein d'aura. » Elle montre d'abord un palais somptueux dans un cadre paisible et enchanteur — groupe nominal doublé du superlatif dans « dans la plus verte de nos vallées », champ lexical de la beauté, qualité des habitants (« monarque », « bons anges », « séraphin », « porphyrogénète ») — puis un palais plein d'aura, à travers le vocabulaire relatif aux sens (« un parfum ailé », « un luth bien accordé », « douce brise ») et la personnification « dressait son front ». Elle se conclut : « En somme, le poète peint un palais magnifique, merveilleux et plein de vie. Cependant, ce beau palais n'a pu garder son lustre d'antan du fait des déboires qu'il a subis. »",
      "keyRule": "Annonce les aspects du centre, rédige chaque aspect à partir du tableau (indice, procédé, interprétation), puis conclus et fais la transition.",
      "formulas": [],
      "workedExample": {
        "title": "Rédiger le centre 1 de « Ma Bohème » (évaluation traitée)",
        "statement": "En t'inspirant de la rédaction du centre 1 du « Palais hanté », rédige le premier paragraphe du centre 1 de « Ma Bohème » : la misère du poète.",
        "methodSteps": [
          "Annonce : la misère du poète transparaît au niveau vestimentaire et financier.",
          "Développement : pour commencer, le poète est très pauvrement vêtu.",
          "Indices cités et regroupés : il a « les poches crevées », une « unique culotte », un « paletot », de « larges trous ».",
          "Interprétation : ces groupes nominaux, qui renvoient au champ lexical de l'habillement, montrent l'indigence du poète, qui s'apparente à un mendiant vu les haillons qu'il porte."
        ],
        "conclusion": "Le paragraphe rédigé transforme le tableau du centre en texte suivi : annonce, indices regroupés, interprétation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Annoncer les aspects du centre",
          "stepTheme": "Annoncer les aspects du centre",
          "stepBadge": "Annoncer les aspects du centre",
          "paragraphText": "• Rédaction d'un centre d'intérêt : texte suivi qui commence par annoncer ses aspects, qui sont ses thèmes directeurs.\nFormule de la leçon : « La gloire ambiante du palais se présente sous deux aspects, à savoir, un palais somptueux et un palais plein d'aura. »",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q1",
            "type": "mcq",
            "prompt": "La première phrase de la rédaction du centre 1 du « Palais hanté » sert à :",
            "options": [
              "Conclure tout le commentaire",
              "Annoncer les deux aspects du centre : un palais somptueux et un palais plein d'aura",
              "Présenter la biographie de Poe",
              "Ouvrir sur un autre poème"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Annoncer les aspects du centre dès la première phrase donne le plan interne de la rédaction qui suit."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Rédiger à partir du tableau",
          "stepTheme": "Rédiger à partir du tableau",
          "stepBadge": "Rédiger à partir du tableau",
          "paragraphText": "Méthode : chaque développement de la rédaction reprend le tableau du centre.\nOn cite l'indice entre guillemets, on nomme le procédé, puis on donne l'interprétation, en liant les phrases entre elles.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q2",
            "type": "mcq",
            "prompt": "Dans la rédaction d'un centre, un indice cité doit être accompagné :",
            "options": [
              "Uniquement de sa référence de vers",
              "D'une remarque biographique",
              "Du procédé qui le porte et de son interprétation",
              "D'une nouvelle citation sans commentaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Indice, procédé, interprétation : la rédaction conserve les trois temps de l'organisation du centre."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un palais somptueux, cadre paisible",
          "stepTheme": "Un palais somptueux, cadre paisible",
          "stepBadge": "Un palais somptueux, cadre paisible",
          "paragraphText": "Exemple de rédaction : le poète décrit un palais somptueux, dans un cadre paisible et enchanteur.\nCela transparaît à travers le groupe nominal doublé du superlatif « la plus » : « dans la plus verte de nos vallées » ; le champ lexical de la beauté (« beau », « majestueux », « superbes », « rayonnant ») révèle un palais qui brille, étincelle et frappe la vue.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q3",
            "type": "mcq",
            "prompt": "Le superlatif dans « dans la plus verte de nos vallées » sert, dans la rédaction, à montrer :",
            "options": [
              "La décadence du palais",
              "Un cadre paisible et enchanteur, digne d'un palais somptueux",
              "La présence d'êtres maléfiques",
              "Le regret du poète"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le groupe nominal doublé du superlatif situe le palais dans le lieu le plus verdoyant : un cadre paisible, enchanteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un palais plein d'aura et les sens",
          "stepTheme": "Un palais plein d'aura et les sens",
          "stepBadge": "Un palais plein d'aura et les sens",
          "paragraphText": "Exemple de rédaction : le palais se caractérise aussi par son aura.\nLe poète mobilise le vocabulaire relatif aux sens — l'odorat (« un parfum ailé »), l'ouïe (« un luth bien accordé »), la vue (« un rayonnant palais »), le toucher (« douce brise ») — et la personnification « dressait son front » : le palais est admiré et fréquenté par des hommes et par des êtres célestes.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q4",
            "type": "mcq",
            "prompt": "La personnification relevée dans la rédaction du centre 1 est :",
            "options": [
              "« Une hideuse multitude »",
              "« Les fenêtres rougeâtres »",
              "« Une musique discordante »",
              "« Dressait son front »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Dressait son front » attribue au palais un geste humain : c'est la personnification citée pour le palais plein d'aura. Les autres indices relèvent du centre 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Conclure le centre et transiter",
          "stepTheme": "Conclure le centre et transiter",
          "stepBadge": "Conclure le centre et transiter",
          "paragraphText": "Méthode : la rédaction d'un centre se termine par un bilan du centre, suivi d'une transition vers le centre suivant.\n« En somme, le poète peint un palais magnifique, merveilleux et plein de vie. Cependant, ce beau palais n'a pu garder son lustre d'antan du fait des déboires qu'il a subis. »",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q5",
            "type": "mcq",
            "prompt": "La fin de la rédaction du centre 1 assure la transition en annonçant :",
            "options": [
              "L'ouverture de la conclusion",
              "Les déboires subis par le palais, objet du centre 2",
              "La biographie de Baudelaire",
              "Un nouveau texte support"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bilan (« en somme ») puis la transition (« cependant ») conduisent du centre 1 au centre 2 : les déboires du palais."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Recopier le tableau sans rédiger",
          "stepTheme": "Recopier le tableau sans rédiger",
          "stepBadge": "Recopier le tableau sans rédiger",
          "paragraphText": "Piège : livrer le tableau indices, procédés, interprétations tel quel, ou aligner les citations sans phrases de liaison.\nLa rédaction est un texte suivi et argumenté : chaque aspect est annoncé, développé et relié aux autres.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q6",
            "type": "mcq",
            "prompt": "Quel défaut la rédaction d'un centre doit-elle éviter ?",
            "options": [
              "Annoncer les aspects du centre",
              "Nommer les procédés des indices cités",
              "Conclure le centre par un bilan",
              "Aligner des citations sans rédaction ni liaison entre elles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans phrases construites ni liaisons, il n'y a pas de rédaction : le tableau est un outil de préparation, pas le devoir."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q1",
          "type": "mcq",
          "prompt": "La première phrase de la rédaction du centre 1 du « Palais hanté » sert à :",
          "options": [
            "Conclure tout le commentaire",
            "Annoncer les deux aspects du centre : un palais somptueux et un palais plein d'aura",
            "Présenter la biographie de Poe",
            "Ouvrir sur un autre poème"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Annoncer les aspects du centre dès la première phrase donne le plan interne de la rédaction qui suit."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q2",
          "type": "mcq",
          "prompt": "Dans la rédaction d'un centre, un indice cité doit être accompagné :",
          "options": [
            "Uniquement de sa référence de vers",
            "D'une remarque biographique",
            "Du procédé qui le porte et de son interprétation",
            "D'une nouvelle citation sans commentaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Indice, procédé, interprétation : la rédaction conserve les trois temps de l'organisation du centre."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q3",
          "type": "mcq",
          "prompt": "Le superlatif dans « dans la plus verte de nos vallées » sert, dans la rédaction, à montrer :",
          "options": [
            "La décadence du palais",
            "Un cadre paisible et enchanteur, digne d'un palais somptueux",
            "La présence d'êtres maléfiques",
            "Le regret du poète"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le groupe nominal doublé du superlatif situe le palais dans le lieu le plus verdoyant : un cadre paisible, enchanteur."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q4",
          "type": "mcq",
          "prompt": "La personnification relevée dans la rédaction du centre 1 est :",
          "options": [
            "« Une hideuse multitude »",
            "« Les fenêtres rougeâtres »",
            "« Une musique discordante »",
            "« Dressait son front »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Dressait son front » attribue au palais un geste humain : c'est la personnification citée pour le palais plein d'aura. Les autres indices relèvent du centre 2."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q5",
          "type": "mcq",
          "prompt": "La fin de la rédaction du centre 1 assure la transition en annonçant :",
          "options": [
            "L'ouverture de la conclusion",
            "Les déboires subis par le palais, objet du centre 2",
            "La biographie de Baudelaire",
            "Un nouveau texte support"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bilan (« en somme ») puis la transition (« cependant ») conduisent du centre 1 au centre 2 : les déboires du palais."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p03_q6",
          "type": "mcq",
          "prompt": "Quel défaut la rédaction d'un centre doit-elle éviter ?",
          "options": [
            "Annoncer les aspects du centre",
            "Nommer les procédés des indices cités",
            "Conclure le centre par un bilan",
            "Aligner des citations sans rédaction ni liaison entre elles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans phrases construites ni liaisons, il n'y a pas de rédaction : le tableau est un outil de préparation, pas le devoir."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04",
      "order": 4,
      "title": "Rédiger l'introduction et la conclusion",
      "summary": "Construire l'introduction (généralité, présentation du texte, annonce des centres) et la conclusion (bilan, jugement, ouverture).",
      "conceptExplanation": "L'introduction rédigée dans la leçon pour « Le palais hanté » suit un enchaînement clair : une généralité d'ouverture — le fantastique, courant littéraire caractérisé par l'intervention du merveilleux et du surnaturel, qui a inspiré plusieurs écrivains dont Edgar Allan Poe ; la présentation du texte — titre « Le palais hanté », œuvre dont il est extrait (La Chute de la maison Usher), idée du texte (le poète exprime son regret à travers la description d'un somptueux palais royal tombé en déclin) ; l'annonce des centres d'intérêt — « nous étudierons la gloire ambiante du palais puis les déboires qu'il subit ».\nLa conclusion rédigée reprend le bilan des deux centres — le palais jouissait d'une grande notoriété en beauté et en fréquentation, ternie et détruite par la présence et les actions d'êtres maléfiques et malfaisants —, dégage la portée du texte — le poète exprime sa désolation et son regret, et le texte présente une grande richesse stylistique et thématique —, puis s'ouvre par un rapprochement avec « L'Ennemi » de Charles Baudelaire, extrait des Fleurs du mal.",
      "keyRule": "Introduction : généralité, présentation du texte, annonce des centres. Conclusion : bilan des centres, portée du texte, ouverture par un rapprochement.",
      "formulas": [],
      "workedExample": {
        "title": "Introduction et conclusion de « Ma Bohème » (évaluation traitée)",
        "statement": "En t'inspirant de l'introduction et de la conclusion du « Palais hanté », rédige celles de « Ma Bohème » d'Arthur Rimbaud.",
        "methodSteps": [
          "Introduction, généralité : la guerre franco-prussienne de 1870 a engendré la misère dans la société française, et cette misère généralisée a inspiré bon nombre d'écrivains, dont Arthur Rimbaud.",
          "Introduction, présentation : dans ce poème intitulé « Ma Bohème », extrait d'Une saison en enfer, le poète, à travers une tonalité lyrique, présente sa situation misérable comme source de son inspiration.",
          "Introduction, annonce : dans un commentaire composé, nous étudierons d'une part la misère du poète, d'autre part les étonnants pouvoirs de la poésie.",
          "Conclusion, bilan et portée : le poète vit dans une indigence totale, ce qui ne constitue pas un frein à son inspiration poétique, et l'ironie du texte participe à sa richesse.",
          "Conclusion, ouverture : le texte se rapproche de « la bohème, c'est le stage de la vie artistique », dans Scènes de la vie de bohème d'Henri Murger."
        ],
        "conclusion": "Les deux textes encadrent le commentaire : l'introduction annonce les centres étudiés, la conclusion les bilan et ouvre sur un rapprochement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Ouvrir par une généralité",
          "stepTheme": "Ouvrir par une généralité",
          "stepBadge": "Ouvrir par une généralité",
          "paragraphText": "Méthode : l'introduction commence par une généralité en rapport avec le texte.\nPour « Le palais hanté », la leçon ouvre sur le fantastique, courant littéraire caractérisé par l'intervention du merveilleux et du surnaturel.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q1",
            "type": "mcq",
            "prompt": "L'introduction du « Palais hanté » s'ouvre sur une généralité portant sur :",
            "options": [
              "La misère en France en 1870",
              "Le fantastique, courant marqué par le merveilleux et le surnaturel",
              "La vie d'Edgar Allan Poe aux États-Unis",
              "Les pouvoirs de la poésie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La généralité de l'exemple porte sur le fantastique, courant qui a inspiré plusieurs écrivains dont Poe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Présenter le texte à étudier",
          "stepTheme": "Présenter le texte à étudier",
          "stepBadge": "Présenter le texte à étudier",
          "paragraphText": "Méthode : après la généralité, présenter le texte — son titre, l'œuvre dont il est extrait, son auteur et son idée principale.\n« Le palais hanté » est extrait de La Chute de la maison Usher ; le poète y exprime son regret à travers la description d'un somptueux palais royal tombé en déclin.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q2",
            "type": "mcq",
            "prompt": "« Le palais hanté » est extrait de :",
            "options": [
              "Une saison en enfer",
              "Les Fleurs du mal",
              "La Chute de la maison Usher",
              "Méditations poétiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La présentation de l'introduction de la leçon situe le poème dans La Chute de la maison Usher d'Edgar Allan Poe."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Annoncer les centres d'intérêt",
          "stepTheme": "Annoncer les centres d'intérêt",
          "stepBadge": "Annoncer les centres d'intérêt",
          "paragraphText": "Méthode : l'introduction se termine par l'annonce des centres d'intérêt, dans l'ordre du libellé.\nFormule de la leçon : « Dans un commentaire composé, nous étudierons la gloire ambiante du palais puis les déboires qu'il subit. »",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q3",
            "type": "mcq",
            "prompt": "L'annonce qui clôt l'introduction du « Palais hanté » présente les centres dans cet ordre :",
            "options": [
              "Les déboires, puis la gloire ambiante",
              "La gloire ambiante du palais, puis les déboires qu'il subit",
              "La misère, puis les pouvoirs de la poésie",
              "Le fantastique, puis le lyrisme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'annonce reprend les centres du libellé dans leur ordre : d'abord la gloire ambiante, ensuite les déboires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La conclusion : bilan, portée, ouverture",
          "stepTheme": "La conclusion : bilan, portée, ouverture",
          "stepBadge": "La conclusion : bilan, portée, ouverture",
          "paragraphText": "• Conclusion du commentaire : dernier texte du devoir, en trois temps.\n• Le bilan des centres étudiés\n• La portée du texte : ce qu'il exprime et sa richesse\n• L'ouverture : un rapprochement avec un autre texte",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q4",
            "type": "mcq",
            "prompt": "Le premier temps de la conclusion du commentaire est :",
            "options": [
              "L'annonce des centres d'intérêt",
              "Une généralité sur un courant littéraire",
              "Le bilan des centres étudiés",
              "La présentation du texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La conclusion commence par le bilan : pour Poe, la notoriété du palais, ternie par les êtres maléfiques."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'ouverture sur Baudelaire",
          "stepTheme": "L'ouverture sur Baudelaire",
          "stepBadge": "L'ouverture sur Baudelaire",
          "paragraphText": "Exemple : la conclusion du « Palais hanté » s'ouvre par un rapprochement.\nLe sentiment de regret du poète a été également abordé par Charles Baudelaire dans son poème intitulé « L'Ennemi », extrait de son recueil Les Fleurs du mal.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q5",
            "type": "mcq",
            "prompt": "L'ouverture de la conclusion du « Palais hanté » rapproche le texte :",
            "options": [
              "De « Ma Bohème » de Rimbaud",
              "De Scènes de la vie de bohème de Murger",
              "D'un poème de Lamartine sur la souffrance",
              "De « L'Ennemi » de Baudelaire, extrait des Fleurs du mal"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le rapprochement proposé par la conclusion de la leçon : même sentiment de regret chez Baudelaire, dans « L'Ennemi »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une introduction sans annonce des centres",
          "stepTheme": "Une introduction sans annonce des centres",
          "stepBadge": "Une introduction sans annonce des centres",
          "paragraphText": "Piège : présenter le texte et s'arrêter avant l'annonce, ou annoncer un plan différent des centres du libellé.\nSans annonce fidèle aux centres, le lecteur ne sait pas quelle étude va suivre et le développement paraît sans cap.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q6",
            "type": "mcq",
            "prompt": "Quelle introduction est fautive ?",
            "options": [
              "Celle qui annonce les centres dans l'ordre du libellé",
              "Celle qui présente le titre et l'œuvre d'origine du texte",
              "Celle qui oublie d'annoncer les centres d'intérêt à la fin",
              "Celle qui s'ouvre par une généralité liée au texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'annonce des centres clôt obligatoirement l'introduction : l'omettre laisse le commentaire sans plan annoncé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q1",
          "type": "mcq",
          "prompt": "L'introduction du « Palais hanté » s'ouvre sur une généralité portant sur :",
          "options": [
            "La misère en France en 1870",
            "Le fantastique, courant marqué par le merveilleux et le surnaturel",
            "La vie d'Edgar Allan Poe aux États-Unis",
            "Les pouvoirs de la poésie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La généralité de l'exemple porte sur le fantastique, courant qui a inspiré plusieurs écrivains dont Poe."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q2",
          "type": "mcq",
          "prompt": "« Le palais hanté » est extrait de :",
          "options": [
            "Une saison en enfer",
            "Les Fleurs du mal",
            "La Chute de la maison Usher",
            "Méditations poétiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La présentation de l'introduction de la leçon situe le poème dans La Chute de la maison Usher d'Edgar Allan Poe."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q3",
          "type": "mcq",
          "prompt": "L'annonce qui clôt l'introduction du « Palais hanté » présente les centres dans cet ordre :",
          "options": [
            "Les déboires, puis la gloire ambiante",
            "La gloire ambiante du palais, puis les déboires qu'il subit",
            "La misère, puis les pouvoirs de la poésie",
            "Le fantastique, puis le lyrisme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'annonce reprend les centres du libellé dans leur ordre : d'abord la gloire ambiante, ensuite les déboires."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q4",
          "type": "mcq",
          "prompt": "Le premier temps de la conclusion du commentaire est :",
          "options": [
            "L'annonce des centres d'intérêt",
            "Une généralité sur un courant littéraire",
            "Le bilan des centres étudiés",
            "La présentation du texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La conclusion commence par le bilan : pour Poe, la notoriété du palais, ternie par les êtres maléfiques."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q5",
          "type": "mcq",
          "prompt": "L'ouverture de la conclusion du « Palais hanté » rapproche le texte :",
          "options": [
            "De « Ma Bohème » de Rimbaud",
            "De Scènes de la vie de bohème de Murger",
            "D'un poème de Lamartine sur la souffrance",
            "De « L'Ennemi » de Baudelaire, extrait des Fleurs du mal"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le rapprochement proposé par la conclusion de la leçon : même sentiment de regret chez Baudelaire, dans « L'Ennemi »."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p04_q6",
          "type": "mcq",
          "prompt": "Quelle introduction est fautive ?",
          "options": [
            "Celle qui annonce les centres dans l'ordre du libellé",
            "Celle qui présente le titre et l'œuvre d'origine du texte",
            "Celle qui oublie d'annoncer les centres d'intérêt à la fin",
            "Celle qui s'ouvre par une généralité liée au texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'annonce des centres clôt obligatoirement l'introduction : l'omettre laisse le commentaire sans plan annoncé."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05",
      "order": 5,
      "title": "Rédiger un commentaire composé complet",
      "summary": "Assembler introduction, centres d'intérêt reliés par une transition et conclusion, sans dissocier le fond de la forme.",
      "conceptExplanation": "Rédiger un commentaire composé complet, c'est assembler les pièces apprises : une introduction (généralité, présentation du texte, idée générale, annonce des centres), le développement des centres d'intérêt, chacun construit sur des indices, des procédés et des interprétations et subdivisé en sous-thèmes, une transition entre les centres, et une conclusion (bilan, jugement, ouverture).\nLe support de la séance 4 est le poème d'Alphonse de Lamartine extrait de l'Épître à Guillemardet (1837), avec le libellé : « Montrez comment le poète, par son lyrisme, se fait l'interprète de la souffrance humaine. » Son idée générale : le refus du poète de se lamenter sur son sort pour s'ouvrir aux peines du monde. Le plan détaillé retient : centre 1, l'épanchement de ses peines dans un lyrisme personnel — rappel du temps passé tourné sur la vie intérieure, aveu de sa faiblesse, mauvaise conscience du poète ; centre 2, l'interprétation de la souffrance humaine par le poète — nouvel élan d'humanisme, héroïsme du poète, vocation sociale du poète. La conclusion retient le dépassement de soi du poète, un langage imagé qui touche la sensibilité du lecteur, et une ouverture sur Aimé Césaire : « Ma bouche sera la bouche des malheurs qui n'ont point de bouche ».",
      "keyRule": "Un commentaire complet enchaîne introduction, centres analysés (jamais d'étude linéaire, jamais le fond séparé de la forme), transition et conclusion.",
      "formulas": [],
      "workedExample": {
        "title": "Le commentaire complet du poème de Lamartine (plan et rédaction collective)",
        "statement": "Pour le poème de Lamartine (Épître à Guillemardet), libellé : « Montrez comment le poète, par son lyrisme, se fait l'interprète de la souffrance humaine. » Assemble le commentaire complet à partir du plan détaillé et de la rédaction collective de la leçon.",
        "methodSteps": [
          "Introduction : généralité sur la prépondérance du thème de l'amour chez Lamartine (Méditations poétiques), présentation du poème extrait de l'Épître à Guillemardet (1837), idée générale (le refus de se lamenter sur son sort pour s'ouvrir aux peines du monde), annonce du plan.",
          "Centre 1, sous-thème 1 : rappel du temps passé tourné sur la vie intérieure — vocatif « Frère », pronoms et possessifs de la première personne, champ lexical des sentiments, allitération en « s » des « angoisses d'un seul esprit ».",
          "Centre 1, sous-thèmes 2 et 3 : aveu de sa faiblesse — comparaison « comme une faible femme », champ lexical des larmes, métaphore de la « fourmi » ; puis mauvaise conscience — hyperbole « ma personnalité remplissait la nature », accumulation « vécu, souffert, aimé, perdu, gémi ».",
          "Transition : à ce passé peu glorieux, le poète entend substituer une vie remplie de sentiments plus altruistes.",
          "Centre 2 : la phrase négative « le temps n'est plus » marque la rupture ; « puis » et « plus tard » situent la mutation ; le cœur « s'est élargi » aux douleurs de ses frères, « tous leurs maux ont coulé dans le sac de mes pleurs » : humanisme, héroïsme et vocation sociale du poète.",
          "Conclusion : bilan (dépassement de soi pour compatir aux souffrances de l'humanité), jugement (langage imagé qui touche la sensibilité du lecteur), ouverture sur Aimé Césaire et les malheurs qui n'ont point de bouche."
        ],
        "conclusion": "Le commentaire complet assemble toutes les pièces : chaque centre est analysé par indices, procédés et interprétations, et relié aux autres."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'architecture du commentaire complet",
          "stepTheme": "L'architecture du commentaire complet",
          "stepBadge": "L'architecture du commentaire complet",
          "paragraphText": "• Commentaire composé complet : introduction, développement en centres d'intérêt, conclusion.\nL'introduction annonce les centres ; le développement les traite par indices, procédés et interprétations ; la conclusion fait le bilan, juge et ouvre.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q1",
            "type": "mcq",
            "prompt": "Un commentaire composé complet enchaîne, dans l'ordre :",
            "options": [
              "Conclusion, centres, introduction",
              "Introduction, centres d'intérêt, conclusion",
              "Étude linéaire vers par vers, sans centres",
              "Résumé du texte, puis opinion libre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'architecture assemblée dans la séance 4 : introduction, centres, conclusion."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "L'introduction complète de Lamartine",
          "stepTheme": "L'introduction complète de Lamartine",
          "stepBadge": "L'introduction complète de Lamartine",
          "paragraphText": "Méthode : l'introduction du support de Lamartine combine généralité, présentation, idée générale et annonce.\nGénéralité sur l'amour dans l'œuvre de Lamartine (Méditations poétiques) ; présentation d'un poème de trois sixains extrait de l'Épître à Guillemardet ; idée générale : le refus de se lamenter sur son sort pour s'ouvrir aux peines du monde ; annonce : l'expression du lyrisme et l'interprétation de la souffrance humaine.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q2",
            "type": "mcq",
            "prompt": "L'idée générale du poème de Lamartine, selon le plan détaillé, est :",
            "options": [
              "Le poète se lamente durablement sur son propre sort",
              "Le poète chante uniquement son amour perdu",
              "Le refus du poète de se lamenter sur son sort pour s'ouvrir aux peines du monde",
              "Le poète décrit un palais tombé en déclin"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le plan détaillé formule ainsi l'idée générale : dépasser ses propres plaintes pour porter les peines du monde."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le lyrisme personnel : je, mon, ma",
          "stepTheme": "Le lyrisme personnel : je, mon, ma",
          "stepBadge": "Le lyrisme personnel : je, mon, ma",
          "paragraphText": "Exemple d'analyse du centre 1 : le poète est au centre de son propre discours.\nIndices : pronoms personnels et adjectifs possessifs (« je », « moi », « mon », « ma »), groupes nominaux du champ lexical des sentiments (« mon âme », « les angoisses », « se plaindre et soupirer ») : une conscience tournée sur elle-même.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q3",
            "type": "mcq",
            "prompt": "Dans le centre 1 du poème de Lamartine, la fréquence de « je », « mon » et « ma » montre :",
            "options": [
              "L'ouverture du poète à la foule",
              "Une conscience tournée sur elle-même, au centre de son discours",
              "La vocation sociale du poète",
              "La rupture avec le passé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ces marques de la première personne fondent l'interprétation du plan : le poète parle de sa propre vie, replié sur ses sentiments."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La transition entre les deux centres",
          "stepTheme": "La transition entre les deux centres",
          "stepBadge": "La transition entre les deux centres",
          "paragraphText": "Méthode : entre les centres, une transition résume le centre achevé et annonce le suivant.\nDans la rédaction collective : à ce passé peu glorieux, le poète entend substituer une vie remplie de sentiments plus altruistes — ce qui ouvre le centre 2.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q4",
            "type": "mcq",
            "prompt": "La transition du commentaire de Lamartine annonce :",
            "options": [
              "Le bilan final du devoir",
              "L'ouverture sur Aimé Césaire",
              "Une vie nouvelle, remplie de sentiments plus altruistes",
              "Le retour au lyrisme personnel"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La transition fait le lien : le passé égocentrique laisse place à l'ouverture altruiste, objet du centre 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "S'élargir aux douleurs de ses frères",
          "stepTheme": "S'élargir aux douleurs de ses frères",
          "stepBadge": "S'élargir aux douleurs de ses frères",
          "paragraphText": "Exemple d'analyse du centre 2 : le cœur du poète, insensible à ses propres misères, « s'est élargi plus tard aux douleurs de mes frères ».\nLes groupes nominaux « tous leurs maux », « la foule », « mes frères », « toutes les douleurs » évoquent la communauté des hommes : le poète a une grande conscience de sa vocation sociale et porte les douleurs sans distinction.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q5",
            "type": "mcq",
            "prompt": "Dans le centre 2, « tous leurs maux », « la foule » et « mes frères » expriment :",
            "options": [
              "Le repli du poète sur lui-même",
              "L'aveu de la faiblesse du poète",
              "La mauvaise conscience du poète",
              "La conscience de la vocation sociale du poète, au service de la communauté humaine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ces indices de la communauté des hommes fondent le sous-thème 3 du centre 2 : la vocation sociale du poète."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Étude linéaire et fond séparé de la forme",
          "stepTheme": "Étude linéaire et fond séparé de la forme",
          "stepBadge": "Étude linéaire et fond séparé de la forme",
          "paragraphText": "Piège majeur, signalé dans le corrigé de la séance 4 : dissocier le fond de la forme, ou faire une étude linéaire du texte.\nLe correcteur sanctionne ces copies : le commentaire composé étudie des centres d'intérêt, en liant toujours le sens (le fond) et les procédés (la forme).",
          "exercise": {
            "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q6",
            "type": "mcq",
            "prompt": "Quelle pratique le correcteur sanctionne-t-il, selon les remarques de la séance 4 ?",
            "options": [
              "Identifier la nature du texte dans l'introduction",
              "Dissocier le fond de la forme ou faire une étude linéaire du texte",
              "Valoriser les indices par leurs procédés",
              "Rapprocher le texte d'un autre auteur en ouverture"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les remarques générales du corrigé sont explicites : toute copie qui dissocie le fond de la forme ou fait une étude linéaire est sanctionnée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q1",
          "type": "mcq",
          "prompt": "Un commentaire composé complet enchaîne, dans l'ordre :",
          "options": [
            "Conclusion, centres, introduction",
            "Introduction, centres d'intérêt, conclusion",
            "Étude linéaire vers par vers, sans centres",
            "Résumé du texte, puis opinion libre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'architecture assemblée dans la séance 4 : introduction, centres, conclusion."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q2",
          "type": "mcq",
          "prompt": "L'idée générale du poème de Lamartine, selon le plan détaillé, est :",
          "options": [
            "Le poète se lamente durablement sur son propre sort",
            "Le poète chante uniquement son amour perdu",
            "Le refus du poète de se lamenter sur son sort pour s'ouvrir aux peines du monde",
            "Le poète décrit un palais tombé en déclin"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le plan détaillé formule ainsi l'idée générale : dépasser ses propres plaintes pour porter les peines du monde."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q3",
          "type": "mcq",
          "prompt": "Dans le centre 1 du poème de Lamartine, la fréquence de « je », « mon » et « ma » montre :",
          "options": [
            "L'ouverture du poète à la foule",
            "Une conscience tournée sur elle-même, au centre de son discours",
            "La vocation sociale du poète",
            "La rupture avec le passé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ces marques de la première personne fondent l'interprétation du plan : le poète parle de sa propre vie, replié sur ses sentiments."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q4",
          "type": "mcq",
          "prompt": "La transition du commentaire de Lamartine annonce :",
          "options": [
            "Le bilan final du devoir",
            "L'ouverture sur Aimé Césaire",
            "Une vie nouvelle, remplie de sentiments plus altruistes",
            "Le retour au lyrisme personnel"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La transition fait le lien : le passé égocentrique laisse place à l'ouverture altruiste, objet du centre 2."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q5",
          "type": "mcq",
          "prompt": "Dans le centre 2, « tous leurs maux », « la foule » et « mes frères » expriment :",
          "options": [
            "Le repli du poète sur lui-même",
            "L'aveu de la faiblesse du poète",
            "La mauvaise conscience du poète",
            "La conscience de la vocation sociale du poète, au service de la communauté humaine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ces indices de la communauté des hommes fondent le sous-thème 3 du centre 2 : la vocation sociale du poète."
        },
        {
          "id": "terminale_a1_francais_ee_l02_commentaire_compose_p05_q6",
          "type": "mcq",
          "prompt": "Quelle pratique le correcteur sanctionne-t-il, selon les remarques de la séance 4 ?",
          "options": [
            "Identifier la nature du texte dans l'introduction",
            "Dissocier le fond de la forme ou faire une étude linéaire du texte",
            "Valoriser les indices par leurs procédés",
            "Rapprocher le texte d'un autre auteur en ouverture"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les remarques générales du corrigé sont explicites : toute copie qui dissocie le fond de la forme ou fait une étude linéaire est sanctionnée."
        }
      ]
    }
  ]
};
