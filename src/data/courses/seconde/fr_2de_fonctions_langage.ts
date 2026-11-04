import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1 PL PL 2nde les fonctions du langage.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const FR_2DE_PL_L01_FONCTIONS_LANGAGE: CurriculumChapter = {
  "id": "seconde_a_francais_pl_l01_fonctions_langage",
  "subjectId": "francais",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 6,
  "title": "Perfectionnement de la langue, leçon 1 : Les fonctions du langage",
  "summary": "Les six facteurs de la communication et les six fonctions du langage : les reconnaître et les justifier.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "1 PL PL 2nde les fonctions du langage.pdf",
  "points": [
    {
      "id": "seconde_a_francais_pl_l01_fonctions_langage_p01",
      "order": 1,
      "title": "Les six facteurs de la communication",
      "summary": "Émetteur, destinataire, message, code, canal, référent.",
      "conceptExplanation": "Communiquer, c'est transmettre un message à quelqu'un. Toute communication met en jeu six éléments, appelés facteurs de la communication :\n- l'émetteur (ou destinateur) : celui qui parle ou écrit ;\n- le destinataire (ou récepteur) : celui à qui le message est adressé ;\n- le message : ce qui est dit ou écrit ;\n- le code : la langue ou le système de signes utilisé (le français, le morse, les gestes...) ;\n- le canal (ou contact) : le moyen physique par lequel passe le message (la voix, le téléphone, le papier, l'écran...) ;\n- le référent : ce dont on parle, le sujet du message.\n\nÀ chaque facteur correspond une fonction du langage.\n\nExemple : Z téléphone à S : « Allô S ! Tu sais qu'après-demain, c'est mon anniversaire. J'espère que tu seras présent. » Émetteur : Z ; destinataire : S ; canal : le téléphone ; code : le français ; référent : l'anniversaire de Z.",
      "keyRule": "Six facteurs : émetteur, destinataire, message, code, canal, référent. À chaque facteur correspond une fonction du langage.",
      "formulas": [],
      "workedExample": {
        "title": "Repérer les facteurs",
        "statement": "Dans un poème, Victor Hugo écrit : « Peuples ! écoutez le poète ! » Identifie l'émetteur, le destinataire et le canal.",
        "methodSteps": [
          "Qui parle ? Victor Hugo, le poète.",
          "À qui ? Aux peuples, c'est-à-dire aux lecteurs.",
          "Par quel moyen ? Le poème écrit."
        ],
        "conclusion": "Émetteur : Hugo ; destinataire : les peuples (lecteurs) ; canal : le poème."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Communiquer",
          "stepTheme": "Communiquer",
          "stepBadge": "Communiquer",
          "paragraphText": "Communiquer, c'est transmettre un message à quelqu'un.\nToute communication met en jeu six facteurs.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q1",
            "type": "mcq",
            "prompt": "Combien de facteurs met en jeu toute communication ?",
            "options": [
              "Deux",
              "Quatre",
              "Six",
              "Dix"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Émetteur, destinataire, message, code, canal et référent."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'émetteur",
          "stepTheme": "L'émetteur",
          "stepBadge": "L'émetteur",
          "paragraphText": "L'émetteur, ou destinateur, est celui qui parle ou qui écrit : il produit le message.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on celui qui produit le message ?",
            "options": [
              "L'émetteur",
              "Le destinataire",
              "Le référent",
              "Le canal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'émetteur est la source du message."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le destinataire",
          "stepTheme": "Le destinataire",
          "stepBadge": "Le destinataire",
          "paragraphText": "Le destinataire, ou récepteur, est celui à qui le message est adressé.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q3",
            "type": "mcq",
            "prompt": "Dans « Allô S ! C'est mon anniversaire », dit par Z, qui est le destinataire ?",
            "options": [
              "Z",
              "Le téléphone",
              "L'anniversaire",
              "S"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Z parle à S : S reçoit le message."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le code",
          "stepTheme": "Le code",
          "stepBadge": "Le code",
          "paragraphText": "Le code est la langue ou le système de signes utilisé pour former le message : le français, l'anglais, le morse, la langue des signes...",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q4",
            "type": "mcq",
            "prompt": "Dans un poème écrit en français, quel est le code ?",
            "options": [
              "Le papier du livre",
              "La langue française",
              "Le poète",
              "Le thème du poème"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le code, c'est le système de signes : ici, le français."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le canal",
          "stepTheme": "Le canal",
          "stepBadge": "Le canal",
          "paragraphText": "Le canal, ou contact, est le moyen physique par lequel passe le message : la voix, le téléphone, la lettre, l'écran...",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q5",
            "type": "mcq",
            "prompt": "Quand Z appelle S, quel est le canal ?",
            "options": [
              "La langue française",
              "Le téléphone",
              "L'anniversaire",
              "Z lui-même"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le téléphone transporte le message de Z à S."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le référent",
          "stepTheme": "Le référent",
          "stepBadge": "Le référent",
          "paragraphText": "Le référent est ce dont on parle : le sujet, la réalité évoquée par le message.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q6",
            "type": "mcq",
            "prompt": "Dans l'appel de Z à S, quel est le référent ?",
            "options": [
              "Le téléphone",
              "La langue française",
              "Le récepteur S",
              "L'anniversaire de Z"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Z parle de son anniversaire : c'est le sujet du message."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Canal ou code ?",
          "stepTheme": "Canal ou code ?",
          "stepBadge": "Canal ou code ?",
          "paragraphText": "Ne confonds pas :\n• le code = la langue utilisée (le français) ;\n• le canal = le support qui transporte le message (le téléphone, le papier).",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q7",
            "type": "mcq",
            "prompt": "Dans une lettre écrite en anglais, qu'est-ce qui constitue le canal ?",
            "options": [
              "La lettre sur papier",
              "La langue anglaise",
              "La personne qui écrit",
              "Le sujet de la lettre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'anglais est le code ; la lettre est le canal."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q1",
          "type": "mcq",
          "prompt": "Combien de facteurs met en jeu toute communication ?",
          "options": [
            "Deux",
            "Quatre",
            "Six",
            "Dix"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Émetteur, destinataire, message, code, canal et référent."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on celui qui produit le message ?",
          "options": [
            "L'émetteur",
            "Le destinataire",
            "Le référent",
            "Le canal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'émetteur est la source du message."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q3",
          "type": "mcq",
          "prompt": "Dans « Allô S ! C'est mon anniversaire », dit par Z, qui est le destinataire ?",
          "options": [
            "Z",
            "Le téléphone",
            "L'anniversaire",
            "S"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Z parle à S : S reçoit le message."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q4",
          "type": "mcq",
          "prompt": "Dans un poème écrit en français, quel est le code ?",
          "options": [
            "Le papier du livre",
            "La langue française",
            "Le poète",
            "Le thème du poème"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le code, c'est le système de signes : ici, le français."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q5",
          "type": "mcq",
          "prompt": "Quand Z appelle S, quel est le canal ?",
          "options": [
            "La langue française",
            "Le téléphone",
            "L'anniversaire",
            "Z lui-même"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le téléphone transporte le message de Z à S."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q6",
          "type": "mcq",
          "prompt": "Dans l'appel de Z à S, quel est le référent ?",
          "options": [
            "Le téléphone",
            "La langue française",
            "Le récepteur S",
            "L'anniversaire de Z"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Z parle de son anniversaire : c'est le sujet du message."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p01_q7",
          "type": "mcq",
          "prompt": "Dans une lettre écrite en anglais, qu'est-ce qui constitue le canal ?",
          "options": [
            "La lettre sur papier",
            "La langue anglaise",
            "La personne qui écrit",
            "Le sujet de la lettre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'anglais est le code ; la lettre est le canal."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l01_fonctions_langage_p02",
      "order": 2,
      "title": "Les fonctions expressive et conative",
      "summary": "Le langage centré sur l'émetteur, puis sur le destinataire.",
      "conceptExplanation": "1. La fonction expressive (ou émotive) est liée à l'émetteur. Le message exprime ses sentiments, ses émotions, son opinion.\nIndices : pronoms de la 1re personne (je, me, moi, nous), phrases exclamatives, interjections (oh ! hélas !), mots qui expriment un sentiment ou un jugement (j'espère, j'aime, quelle belle...).\nExemple : « Quelle belle voiture ! »\n\n2. La fonction conative est liée au destinataire. Le message cherche à agir sur lui : lui donner un ordre, le convaincre, le supplier, l'interroger.\nIndices : pronoms de la 2e personne (tu, vous), impératif, apostrophe (« Peuples ! »), questions adressées au destinataire.\nExemple : « Seigneur, garde ta puissante main sur moi. »\n\nRemarque : ces deux fonctions vont souvent ensemble. Dans « J'espère que tu seras présent », Z exprime un souhait (expressive) et invite S à venir (conative).",
      "keyRule": "Expressive : centrée sur l'émetteur (je, exclamation, sentiments). Conative : centrée sur le destinataire (tu, vous, impératif, apostrophe).",
      "formulas": [],
      "workedExample": {
        "title": "Identifier la fonction",
        "statement": "« Mes enfants, rangez vos cahiers ! » Quelle fonction domine ?",
        "methodSteps": [
          "« Mes enfants » est une apostrophe adressée au destinataire.",
          "« Rangez » est à l'impératif : on veut faire agir le destinataire."
        ],
        "conclusion": "La fonction conative domine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction expressive",
          "stepTheme": "La fonction expressive",
          "stepBadge": "La fonction expressive",
          "paragraphText": "La fonction expressive, ou émotive, est liée à l'émetteur : il exprime ses sentiments, ses émotions, son opinion.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q1",
            "type": "mcq",
            "prompt": "À quel facteur de la communication la fonction expressive est-elle liée ?",
            "options": [
              "Au destinataire",
              "Au canal",
              "À l'émetteur",
              "Au code"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Expressive : l'émetteur s'exprime."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Ses indices",
          "stepTheme": "Ses indices",
          "stepBadge": "Ses indices",
          "paragraphText": "Indices de la fonction expressive :\n• je, me, moi, nous ;\n• phrases exclamatives ;\n• interjections (oh ! hélas !) ;\n• mots de sentiment (j'aime, j'espère).",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces phrases relève surtout de la fonction expressive ?",
            "options": [
              "Fermez la porte, s'il vous plaît.",
              "Abidjan est au bord de la lagune Ébrié.",
              "Allô, vous m'entendez bien ?",
              "Hélas ! Comme je suis triste !"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Interjection, exclamation et sentiment : c'est la fonction expressive."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La fonction conative",
          "stepTheme": "La fonction conative",
          "stepBadge": "La fonction conative",
          "paragraphText": "La fonction conative est liée au destinataire : le message cherche à agir sur lui (ordonner, convaincre, supplier, interroger).",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q3",
            "type": "mcq",
            "prompt": "À quel facteur la fonction conative est-elle liée ?",
            "options": [
              "À l'émetteur",
              "Au référent",
              "Au destinataire",
              "Au message"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conative : on cherche à agir sur celui qui reçoit le message."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'impératif",
          "stepTheme": "L'impératif",
          "stepBadge": "L'impératif",
          "paragraphText": "Indices de la fonction conative :\n• tu, vous ;\n• l'impératif ;\n• l'apostrophe (« Peuples ! ») ;\n• les questions posées au destinataire.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q4",
            "type": "mcq",
            "prompt": "Quel indice signale le plus nettement la fonction conative ?",
            "options": [
              "Une interjection comme « hélas »",
              "Un verbe à l'impératif",
              "Une date et un lieu précis",
              "Une rime en fin de vers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'impératif s'adresse directement au destinataire pour le faire agir."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une prière",
          "stepTheme": "Une prière",
          "stepBadge": "Une prière",
          "paragraphText": "« Seigneur, garde ta puissante main sur moi. »\nL'émetteur s'adresse au Seigneur (apostrophe) et lui demande quelque chose (impératif « garde »).",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q5",
            "type": "mcq",
            "prompt": "Quelle fonction domine dans « Seigneur, garde ta puissante main sur moi » ?",
            "options": [
              "La fonction conative",
              "La fonction référentielle",
              "La fonction métalinguistique",
              "La fonction phatique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Apostrophe et impératif : on cherche à agir sur le destinataire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'apostrophe",
          "stepTheme": "L'apostrophe",
          "stepBadge": "L'apostrophe",
          "paragraphText": "L'apostrophe consiste à interpeller directement quelqu'un en le nommant : « Peuples ! », « Mes amis, ... »",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q6",
            "type": "mcq",
            "prompt": "Dans « Peuples ! écoutez le poète ! », que représente « Peuples » ?",
            "options": [
              "Une apostrophe au destinataire",
              "Le référent du message",
              "L'émetteur du message",
              "Le canal de la communication"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le poète interpelle directement les peuples."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Deux fonctions ensemble",
          "stepTheme": "Deux fonctions ensemble",
          "stepBadge": "Deux fonctions ensemble",
          "paragraphText": "Les fonctions expressive et conative vont souvent ensemble.\n« J'espère que tu seras présent » : Z exprime un souhait (je espère) et invite S (tu).",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q7",
            "type": "mcq",
            "prompt": "Quelles fonctions se combinent dans « J'espère que tu seras présent » ?",
            "options": [
              "Phatique et poétique",
              "Expressive et conative",
              "Métalinguistique et référentielle",
              "Poétique et métalinguistique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« J'espère » exprime l'émetteur ; « tu seras présent » vise le destinataire."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q1",
          "type": "mcq",
          "prompt": "À quel facteur de la communication la fonction expressive est-elle liée ?",
          "options": [
            "Au destinataire",
            "Au canal",
            "À l'émetteur",
            "Au code"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Expressive : l'émetteur s'exprime."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces phrases relève surtout de la fonction expressive ?",
          "options": [
            "Fermez la porte, s'il vous plaît.",
            "Abidjan est au bord de la lagune Ébrié.",
            "Allô, vous m'entendez bien ?",
            "Hélas ! Comme je suis triste !"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Interjection, exclamation et sentiment : c'est la fonction expressive."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q3",
          "type": "mcq",
          "prompt": "À quel facteur la fonction conative est-elle liée ?",
          "options": [
            "À l'émetteur",
            "Au référent",
            "Au destinataire",
            "Au message"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conative : on cherche à agir sur celui qui reçoit le message."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q4",
          "type": "mcq",
          "prompt": "Quel indice signale le plus nettement la fonction conative ?",
          "options": [
            "Une interjection comme « hélas »",
            "Un verbe à l'impératif",
            "Une date et un lieu précis",
            "Une rime en fin de vers"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'impératif s'adresse directement au destinataire pour le faire agir."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q5",
          "type": "mcq",
          "prompt": "Quelle fonction domine dans « Seigneur, garde ta puissante main sur moi » ?",
          "options": [
            "La fonction conative",
            "La fonction référentielle",
            "La fonction métalinguistique",
            "La fonction phatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Apostrophe et impératif : on cherche à agir sur le destinataire."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q6",
          "type": "mcq",
          "prompt": "Dans « Peuples ! écoutez le poète ! », que représente « Peuples » ?",
          "options": [
            "Une apostrophe au destinataire",
            "Le référent du message",
            "L'émetteur du message",
            "Le canal de la communication"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le poète interpelle directement les peuples."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p02_q7",
          "type": "mcq",
          "prompt": "Quelles fonctions se combinent dans « J'espère que tu seras présent » ?",
          "options": [
            "Phatique et poétique",
            "Expressive et conative",
            "Métalinguistique et référentielle",
            "Poétique et métalinguistique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« J'espère » exprime l'émetteur ; « tu seras présent » vise le destinataire."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l01_fonctions_langage_p03",
      "order": 3,
      "title": "Les fonctions phatique et référentielle",
      "summary": "Le langage centré sur le contact, puis sur le sujet.",
      "conceptExplanation": "1. La fonction phatique est liée au canal (le contact). Le message sert à établir, maintenir ou vérifier le contact entre l'émetteur et le destinataire, sans apporter d'information nouvelle.\nIndices : « Allô ? », « Vous m'entendez ? », « Tu me suis ? », « Hein ? », « Bon... », les formules de salutation (« Bonjour », « Au revoir »).\nExemple : « Je n'accepterai plus de retard, vous m'entendez ? »\n\n2. La fonction référentielle (ou informative, ou dénotative) est liée au référent. Le message donne une information objective sur le monde : des faits, des lieux, des dates.\nIndices : 3e personne (il, elle, on), présent de vérité générale, données chiffrées, ton neutre.\nExemple : « Le fleuve Sassandra passe par la ville de Soubré. »\nC'est la fonction dominante des manuels, des dictionnaires, des journaux d'information.",
      "keyRule": "Phatique : établir ou vérifier le contact (allô, vous m'entendez ?). Référentielle : informer objectivement sur le sujet (faits, lieux, dates).",
      "formulas": [],
      "workedExample": {
        "title": "Analyser un appel",
        "statement": "« Allô S ! Tu sais qu'après-demain, c'est mon anniversaire. » Quelles fonctions repères-tu ?",
        "methodSteps": [
          "« Allô » établit le contact téléphonique : fonction phatique.",
          "« Après-demain, c'est mon anniversaire » donne une information : fonction référentielle."
        ],
        "conclusion": "Le début de l'appel est phatique, la suite référentielle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction phatique",
          "stepTheme": "La fonction phatique",
          "stepBadge": "La fonction phatique",
          "paragraphText": "La fonction phatique est liée au canal : elle sert à établir, maintenir ou vérifier le contact entre l'émetteur et le destinataire.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q1",
            "type": "mcq",
            "prompt": "À quoi sert la fonction phatique ?",
            "options": [
              "À exprimer des sentiments",
              "À expliquer le sens d'un mot",
              "À établir ou vérifier le contact",
              "À embellir le message"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Phatique = contact."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Allô ?",
          "stepTheme": "Allô ?",
          "stepBadge": "Allô ?",
          "paragraphText": "« Allô ? », « Vous m'entendez ? », « Tu me suis ? », « Bonjour » : ces formules n'apportent pas d'information, elles vérifient ou ouvrent le contact.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q2",
            "type": "mcq",
            "prompt": "Quelle fonction domine dans « Allô ? Tu m'entends bien ? »",
            "options": [
              "La fonction poétique",
              "La fonction référentielle",
              "La fonction métalinguistique",
              "La fonction phatique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On vérifie que la communication passe bien."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "En classe",
          "stepTheme": "En classe",
          "stepBadge": "En classe",
          "paragraphText": "« Je n'accepterai plus de retard, vous m'entendez ? »\n« Vous m'entendez ? » vérifie que le message est bien reçu.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q3",
            "type": "mcq",
            "prompt": "Dans « Je n'accepterai plus de retard, vous m'entendez ? », quelle expression est phatique ?",
            "options": [
              "« Je n'accepterai »",
              "« plus de retard »",
              "« vous m'entendez ? »",
              "« Je n'accepterai plus »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Vous m'entendez ? » sert à vérifier le contact."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La fonction référentielle",
          "stepTheme": "La fonction référentielle",
          "stepBadge": "La fonction référentielle",
          "paragraphText": "La fonction référentielle, ou informative, est liée au référent : elle donne une information objective sur le monde (faits, lieux, dates).",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q4",
            "type": "mcq",
            "prompt": "À quel facteur la fonction référentielle est-elle liée ?",
            "options": [
              "Au canal",
              "À l'émetteur",
              "Au code",
              "Au référent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Référentielle : on parle du sujet, de la réalité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une information",
          "stepTheme": "Une information",
          "stepBadge": "Une information",
          "paragraphText": "« Le fleuve Sassandra passe par la ville de Soubré. »\nPhrase neutre, à la 3e personne, qui donne un fait géographique.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q5",
            "type": "mcq",
            "prompt": "Quelle fonction domine dans « Le fleuve Sassandra passe par la ville de Soubré » ?",
            "options": [
              "La fonction référentielle",
              "La fonction conative",
              "La fonction expressive",
              "La fonction phatique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est une information objective sur un lieu."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Où la trouver ?",
          "stepTheme": "Où la trouver ?",
          "stepBadge": "Où la trouver ?",
          "paragraphText": "La fonction référentielle domine dans les textes qui informent : manuels scolaires, dictionnaires encyclopédiques, articles d'information, bulletins météo.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q6",
            "type": "mcq",
            "prompt": "Dans quel type de texte la fonction référentielle domine-t-elle ?",
            "options": [
              "Une prière",
              "Un bulletin météo",
              "Une chanson d'amour",
              "Un slogan publicitaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bulletin météo informe de façon neutre."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Bonjour n'informe pas",
          "stepTheme": "Bonjour n'informe pas",
          "stepBadge": "Bonjour n'informe pas",
          "paragraphText": "« Bonjour » ou « Au revoir » ne donnent aucune information : ils ouvrent ou ferment le contact.\nIls relèvent de la fonction phatique, pas de la fonction référentielle.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q7",
            "type": "mcq",
            "prompt": "À quelle fonction se rattache la formule « Bonjour, comment ça va ? » dite en arrivant ?",
            "options": [
              "À la fonction référentielle",
              "À la fonction phatique",
              "À la fonction métalinguistique",
              "À la fonction poétique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Cette formule ouvre le contact plus qu'elle n'informe."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q1",
          "type": "mcq",
          "prompt": "À quoi sert la fonction phatique ?",
          "options": [
            "À exprimer des sentiments",
            "À expliquer le sens d'un mot",
            "À établir ou vérifier le contact",
            "À embellir le message"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Phatique = contact."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q2",
          "type": "mcq",
          "prompt": "Quelle fonction domine dans « Allô ? Tu m'entends bien ? »",
          "options": [
            "La fonction poétique",
            "La fonction référentielle",
            "La fonction métalinguistique",
            "La fonction phatique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On vérifie que la communication passe bien."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q3",
          "type": "mcq",
          "prompt": "Dans « Je n'accepterai plus de retard, vous m'entendez ? », quelle expression est phatique ?",
          "options": [
            "« Je n'accepterai »",
            "« plus de retard »",
            "« vous m'entendez ? »",
            "« Je n'accepterai plus »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Vous m'entendez ? » sert à vérifier le contact."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q4",
          "type": "mcq",
          "prompt": "À quel facteur la fonction référentielle est-elle liée ?",
          "options": [
            "Au canal",
            "À l'émetteur",
            "Au code",
            "Au référent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Référentielle : on parle du sujet, de la réalité."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q5",
          "type": "mcq",
          "prompt": "Quelle fonction domine dans « Le fleuve Sassandra passe par la ville de Soubré » ?",
          "options": [
            "La fonction référentielle",
            "La fonction conative",
            "La fonction expressive",
            "La fonction phatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est une information objective sur un lieu."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q6",
          "type": "mcq",
          "prompt": "Dans quel type de texte la fonction référentielle domine-t-elle ?",
          "options": [
            "Une prière",
            "Un bulletin météo",
            "Une chanson d'amour",
            "Un slogan publicitaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bulletin météo informe de façon neutre."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p03_q7",
          "type": "mcq",
          "prompt": "À quelle fonction se rattache la formule « Bonjour, comment ça va ? » dite en arrivant ?",
          "options": [
            "À la fonction référentielle",
            "À la fonction phatique",
            "À la fonction métalinguistique",
            "À la fonction poétique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Cette formule ouvre le contact plus qu'elle n'informe."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l01_fonctions_langage_p04",
      "order": 4,
      "title": "Les fonctions poétique et métalinguistique",
      "summary": "Le langage centré sur le message, puis sur le code.",
      "conceptExplanation": "1. La fonction poétique est liée au message lui-même. On soigne la forme du message pour le rendre beau, frappant ou facile à retenir.\nIndices : figures de style (comparaison, métaphore, personnification...), rimes, rythme, jeux de sonorités, répétitions.\nExemples : « Homme, il est doux comme une femme » (comparaison) ; « Cette femme est une vipère » (métaphore).\nElle n'existe pas qu'en poésie : on la trouve dans les slogans, les proverbes, les chansons.\n\n2. La fonction métalinguistique est liée au code. Le message porte sur la langue elle-même : on explique un mot, on donne une définition, on vérifie qu'on parle bien de la même chose.\nIndices : « c'est-à-dire », « autrement dit », « signifie », « veut dire », guillemets autour d'un mot.\nExemple : « Le mot « pachyderme » signifie « animal à la peau épaisse ». »",
      "keyRule": "Poétique : soin de la forme (figures de style, rimes, rythme). Métalinguistique : on parle de la langue (définir, expliquer un mot).",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer les deux",
        "statement": "« Un oxymore, c'est-à-dire l'union de deux mots contraires, comme « obscure clarté ». » Quelle fonction domine ?",
        "methodSteps": [
          "La phrase explique le sens d'un terme de grammaire.",
          "« c'est-à-dire » introduit une définition."
        ],
        "conclusion": "La fonction métalinguistique domine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction poétique",
          "stepTheme": "La fonction poétique",
          "stepBadge": "La fonction poétique",
          "paragraphText": "La fonction poétique est liée au message : on soigne sa forme pour le rendre beau, frappant ou facile à retenir.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q1",
            "type": "mcq",
            "prompt": "À quel facteur la fonction poétique est-elle liée ?",
            "options": [
              "Au message",
              "Au canal",
              "Au destinataire",
              "Au référent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Poétique : le travail porte sur la forme du message."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Ses indices",
          "stepTheme": "Ses indices",
          "stepBadge": "Ses indices",
          "paragraphText": "Indices de la fonction poétique : figures de style (comparaison, métaphore), rimes, rythme, jeux de sonorités, répétitions.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q2",
            "type": "mcq",
            "prompt": "Quel indice signale la fonction poétique ?",
            "options": [
              "Un verbe à l'impératif",
              "La formule « allô »",
              "L'expression « c'est-à-dire »",
              "Une figure de style"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les figures de style travaillent la forme du message."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une métaphore",
          "stepTheme": "Une métaphore",
          "stepBadge": "Une métaphore",
          "paragraphText": "« Cette femme est une vipère. »\nOn compare la femme à une vipère sans outil de comparaison : c'est une métaphore.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q3",
            "type": "mcq",
            "prompt": "Quelle figure de style trouve-t-on dans « Cette femme est une vipère » ?",
            "options": [
              "Une comparaison avec « comme »",
              "Une énumération",
              "Une métaphore",
              "Une interrogation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La métaphore rapproche deux réalités sans mot outil."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Pas seulement en poésie",
          "stepTheme": "Pas seulement en poésie",
          "stepBadge": "Pas seulement en poésie",
          "paragraphText": "La fonction poétique ne se trouve pas que dans les poèmes : elle est aussi dans les slogans, les proverbes et les chansons.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q4",
            "type": "mcq",
            "prompt": "Dans quel texte trouve-t-on aussi souvent la fonction poétique ?",
            "options": [
              "Dans un annuaire téléphonique",
              "Dans un tableau de chiffres",
              "Dans un slogan publicitaire",
              "Dans un relevé de notes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les slogans jouent sur le rythme et les sons pour être retenus."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La fonction métalinguistique",
          "stepTheme": "La fonction métalinguistique",
          "stepBadge": "La fonction métalinguistique",
          "paragraphText": "La fonction métalinguistique est liée au code : le message porte sur la langue elle-même (définir un mot, expliquer une expression).",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q5",
            "type": "mcq",
            "prompt": "À quel facteur la fonction métalinguistique est-elle liée ?",
            "options": [
              "Au code",
              "Au référent",
              "À l'émetteur",
              "Au message"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Méta-linguistique : un langage qui parle du langage."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une définition",
          "stepTheme": "Une définition",
          "stepBadge": "Une définition",
          "paragraphText": "« Le mot « pachyderme » signifie « animal à la peau épaisse ». »\nLa phrase explique le sens d'un mot.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q6",
            "type": "mcq",
            "prompt": "Quelle fonction domine dans « Le mot « pachyderme » signifie « animal à la peau épaisse » » ?",
            "options": [
              "La fonction phatique",
              "La fonction conative",
              "La fonction expressive",
              "La fonction métalinguistique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On définit un mot : on parle du code."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Les mots qui expliquent",
          "stepTheme": "Les mots qui expliquent",
          "stepBadge": "Les mots qui expliquent",
          "paragraphText": "Indices de la fonction métalinguistique : « c'est-à-dire », « autrement dit », « signifie », « veut dire », un mot placé entre guillemets pour être expliqué.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q7",
            "type": "mcq",
            "prompt": "Quelle expression annonce souvent la fonction métalinguistique ?",
            "options": [
              "« Hélas ! »",
              "« c'est-à-dire »",
              "« Allô ? »",
              "« Écoutez ! »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« C'est-à-dire » introduit une explication."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q1",
          "type": "mcq",
          "prompt": "À quel facteur la fonction poétique est-elle liée ?",
          "options": [
            "Au message",
            "Au canal",
            "Au destinataire",
            "Au référent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Poétique : le travail porte sur la forme du message."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q2",
          "type": "mcq",
          "prompt": "Quel indice signale la fonction poétique ?",
          "options": [
            "Un verbe à l'impératif",
            "La formule « allô »",
            "L'expression « c'est-à-dire »",
            "Une figure de style"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les figures de style travaillent la forme du message."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q3",
          "type": "mcq",
          "prompt": "Quelle figure de style trouve-t-on dans « Cette femme est une vipère » ?",
          "options": [
            "Une comparaison avec « comme »",
            "Une énumération",
            "Une métaphore",
            "Une interrogation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La métaphore rapproche deux réalités sans mot outil."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q4",
          "type": "mcq",
          "prompt": "Dans quel texte trouve-t-on aussi souvent la fonction poétique ?",
          "options": [
            "Dans un annuaire téléphonique",
            "Dans un tableau de chiffres",
            "Dans un slogan publicitaire",
            "Dans un relevé de notes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les slogans jouent sur le rythme et les sons pour être retenus."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q5",
          "type": "mcq",
          "prompt": "À quel facteur la fonction métalinguistique est-elle liée ?",
          "options": [
            "Au code",
            "Au référent",
            "À l'émetteur",
            "Au message"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Méta-linguistique : un langage qui parle du langage."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q6",
          "type": "mcq",
          "prompt": "Quelle fonction domine dans « Le mot « pachyderme » signifie « animal à la peau épaisse » » ?",
          "options": [
            "La fonction phatique",
            "La fonction conative",
            "La fonction expressive",
            "La fonction métalinguistique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On définit un mot : on parle du code."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p04_q7",
          "type": "mcq",
          "prompt": "Quelle expression annonce souvent la fonction métalinguistique ?",
          "options": [
            "« Hélas ! »",
            "« c'est-à-dire »",
            "« Allô ? »",
            "« Écoutez ! »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« C'est-à-dire » introduit une explication."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l01_fonctions_langage_p05",
      "order": 5,
      "title": "Identifier les fonctions dans un texte",
      "summary": "Une méthode par les indices.",
      "conceptExplanation": "Pour identifier la fonction d'un message, on cherche le facteur sur lequel il est centré, à l'aide des indices :\n\n- l'émetteur se montre (je, exclamations, sentiments) → fonction expressive ;\n- on s'adresse au destinataire pour le faire agir (tu, vous, impératif, apostrophe) → fonction conative ;\n- on ouvre ou vérifie le contact (allô, vous m'entendez ?, bonjour) → fonction phatique ;\n- on donne une information objective (faits, lieux, dates, 3e personne) → fonction référentielle ;\n- on travaille la forme (figures de style, rimes, rythme) → fonction poétique ;\n- on explique la langue (définition, « c'est-à-dire ») → fonction métalinguistique.\n\nOn justifie toujours sa réponse en citant l'indice repéré dans le texte.",
      "keyRule": "Chercher le facteur sur lequel le message est centré, repérer l'indice, nommer la fonction, justifier par une citation.",
      "formulas": [],
      "workedExample": {
        "title": "Justifier une réponse",
        "statement": "« Achetez Lumi, le savon qui fait briller ! » Quelle fonction domine ? Justifie.",
        "methodSteps": [
          "« Achetez » est un impératif adressé au client.",
          "Le but est de le pousser à acheter."
        ],
        "conclusion": "La fonction conative domine (impératif « achetez »). On note aussi un jeu de forme, donc une part de fonction poétique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Chercher le centre",
          "stepTheme": "Chercher le centre",
          "stepBadge": "Chercher le centre",
          "paragraphText": "Pour identifier une fonction, demande-toi : sur quel facteur le message est-il centré ? L'émetteur, le destinataire, le contact, le sujet, la forme ou la langue ?",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q1",
            "type": "mcq",
            "prompt": "Quelle est la première question à se poser pour identifier une fonction du langage ?",
            "options": [
              "Combien de mots compte le message ?",
              "Sur quel facteur le message est-il centré ?",
              "Le message est-il long ou court ?",
              "Qui a inventé cette langue ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque fonction correspond à un facteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une émotion",
          "stepTheme": "Une émotion",
          "stepBadge": "Une émotion",
          "paragraphText": "« Oh ! Que je suis heureux de te revoir ! »\nInterjection, exclamation, « je », sentiment de joie.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q2",
            "type": "mcq",
            "prompt": "Quelle fonction domine dans « Oh ! Que je suis heureux de te revoir ! » ?",
            "options": [
              "La fonction référentielle",
              "La fonction métalinguistique",
              "La fonction phatique",
              "La fonction expressive"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'émetteur exprime sa joie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un ordre",
          "stepTheme": "Un ordre",
          "stepBadge": "Un ordre",
          "paragraphText": "« Range ta chambre avant ce soir. »\nImpératif « range », 2e personne « ta ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q3",
            "type": "mcq",
            "prompt": "Quelle fonction domine dans « Range ta chambre avant ce soir » ?",
            "options": [
              "La fonction conative",
              "La fonction poétique",
              "La fonction expressive",
              "La fonction métalinguistique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'impératif cherche à faire agir le destinataire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un fait",
          "stepTheme": "Un fait",
          "stepBadge": "Un fait",
          "paragraphText": "« La Côte d'Ivoire a obtenu son indépendance le 7 août 1960. »\nUne date, un fait, un ton neutre.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q4",
            "type": "mcq",
            "prompt": "Quelle fonction domine dans « La Côte d'Ivoire a obtenu son indépendance le 7 août 1960 » ?",
            "options": [
              "La fonction conative",
              "La fonction phatique",
              "La fonction référentielle",
              "La fonction poétique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est une information historique objective."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un jeu de sons",
          "stepTheme": "Un jeu de sons",
          "stepBadge": "Un jeu de sons",
          "paragraphText": "« Qui vole un œuf vole un bœuf. »\nRépétition de « vole », rime œuf / bœuf, rythme : la forme est travaillée.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q5",
            "type": "mcq",
            "prompt": "Quelle fonction est mise en valeur dans le proverbe « Qui vole un œuf vole un bœuf » ?",
            "options": [
              "La fonction phatique",
              "La fonction métalinguistique",
              "La fonction expressive",
              "La fonction poétique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La rime et la répétition rendent le proverbe facile à retenir."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une explication",
          "stepTheme": "Une explication",
          "stepBadge": "Une explication",
          "paragraphText": "« Autrement dit, un « bouquiniste » est un vendeur de livres d'occasion. »\nOn explique le sens d'un mot.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q6",
            "type": "mcq",
            "prompt": "Quelle fonction domine dans « Autrement dit, un bouquiniste est un vendeur de livres d'occasion » ?",
            "options": [
              "La fonction référentielle",
              "La fonction conative",
              "La fonction métalinguistique",
              "La fonction poétique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Autrement dit » introduit la définition d'un mot."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Justifier",
          "stepTheme": "Justifier",
          "stepBadge": "Justifier",
          "paragraphText": "Une bonne réponse nomme la fonction et cite l'indice qui la prouve.\nExemple : « fonction conative, car le verbe « écoutez » est à l'impératif ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q7",
            "type": "mcq",
            "prompt": "Quelle réponse est la mieux justifiée pour « Écoutez le poète ! » ?",
            "options": [
              "Fonction conative, car la phrase est courte",
              "Fonction conative, car « écoutez » est à l'impératif",
              "Fonction conative, car il s'agit d'un poème",
              "Fonction conative, car c'est Victor Hugo"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La justification doit s'appuyer sur un indice du texte."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q1",
          "type": "mcq",
          "prompt": "Quelle est la première question à se poser pour identifier une fonction du langage ?",
          "options": [
            "Combien de mots compte le message ?",
            "Sur quel facteur le message est-il centré ?",
            "Le message est-il long ou court ?",
            "Qui a inventé cette langue ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque fonction correspond à un facteur."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q2",
          "type": "mcq",
          "prompt": "Quelle fonction domine dans « Oh ! Que je suis heureux de te revoir ! » ?",
          "options": [
            "La fonction référentielle",
            "La fonction métalinguistique",
            "La fonction phatique",
            "La fonction expressive"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'émetteur exprime sa joie."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q3",
          "type": "mcq",
          "prompt": "Quelle fonction domine dans « Range ta chambre avant ce soir » ?",
          "options": [
            "La fonction conative",
            "La fonction poétique",
            "La fonction expressive",
            "La fonction métalinguistique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'impératif cherche à faire agir le destinataire."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q4",
          "type": "mcq",
          "prompt": "Quelle fonction domine dans « La Côte d'Ivoire a obtenu son indépendance le 7 août 1960 » ?",
          "options": [
            "La fonction conative",
            "La fonction phatique",
            "La fonction référentielle",
            "La fonction poétique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est une information historique objective."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q5",
          "type": "mcq",
          "prompt": "Quelle fonction est mise en valeur dans le proverbe « Qui vole un œuf vole un bœuf » ?",
          "options": [
            "La fonction phatique",
            "La fonction métalinguistique",
            "La fonction expressive",
            "La fonction poétique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La rime et la répétition rendent le proverbe facile à retenir."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q6",
          "type": "mcq",
          "prompt": "Quelle fonction domine dans « Autrement dit, un bouquiniste est un vendeur de livres d'occasion » ?",
          "options": [
            "La fonction référentielle",
            "La fonction conative",
            "La fonction métalinguistique",
            "La fonction poétique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Autrement dit » introduit la définition d'un mot."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p05_q7",
          "type": "mcq",
          "prompt": "Quelle réponse est la mieux justifiée pour « Écoutez le poète ! » ?",
          "options": [
            "Fonction conative, car la phrase est courte",
            "Fonction conative, car « écoutez » est à l'impératif",
            "Fonction conative, car il s'agit d'un poème",
            "Fonction conative, car c'est Victor Hugo"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La justification doit s'appuyer sur un indice du texte."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l01_fonctions_langage_p06",
      "order": 6,
      "title": "Plusieurs fonctions dans un message",
      "summary": "Fonction dominante et fonctions secondaires.",
      "conceptExplanation": "Un message remplit souvent plusieurs fonctions à la fois. On distingue alors la fonction dominante (la plus importante) et des fonctions secondaires.\n\nExemple 1 : « Peuples ! écoutez le poète ! » (Victor Hugo, Les Rayons et les Ombres). Apostrophe et impératif → fonction conative ; exclamations qui traduisent l'enthousiasme du poète → fonction expressive.\n\nExemple 2 : « Homme, il est doux comme une femme. » Le vers dit quelque chose du poète (référentielle) et le dit avec une comparaison (poétique).\n\nExemple 3 : l'appel de Z : « Allô S ! » (phatique) ; « après-demain, c'est mon anniversaire » (référentielle) ; « J'espère que tu seras présent » (expressive et conative).\n\nConnaître les fonctions du langage aide à comprendre l'intention d'un texte et à mieux s'exprimer : informer, convaincre, émouvoir, garder le contact, expliquer.",
      "keyRule": "Un message peut avoir plusieurs fonctions : on nomme la dominante, puis les secondaires, en citant les indices.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser un vers",
        "statement": "« Homme, il est doux comme une femme. » Quelles fonctions repères-tu ?",
        "methodSteps": [
          "Le vers décrit le poète : fonction référentielle.",
          "« comme une femme » est une comparaison : fonction poétique."
        ],
        "conclusion": "Fonctions référentielle et poétique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Plusieurs fonctions",
          "stepTheme": "Plusieurs fonctions",
          "stepBadge": "Plusieurs fonctions",
          "paragraphText": "Un même message peut remplir plusieurs fonctions à la fois.\nOn nomme d'abord la fonction dominante, puis les fonctions secondaires.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q1",
            "type": "mcq",
            "prompt": "Un message peut-il remplir plusieurs fonctions du langage ?",
            "options": [
              "Oui, avec une fonction dominante",
              "Non, jamais plus d'une seule",
              "Oui, mais seulement en poésie",
              "Non, sauf au téléphone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les fonctions se combinent souvent."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le vers de Hugo",
          "stepTheme": "Le vers de Hugo",
          "stepBadge": "Le vers de Hugo",
          "paragraphText": "« Peuples ! écoutez le poète ! »\n• Apostrophe et impératif : fonction conative.\n• Exclamations, enthousiasme du poète : fonction expressive.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q2",
            "type": "mcq",
            "prompt": "Quelles fonctions dominent dans « Peuples ! écoutez le poète ! » ?",
            "options": [
              "Conative et expressive",
              "Phatique et métalinguistique",
              "Référentielle et phatique",
              "Métalinguistique et poétique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le poète interpelle les peuples et exprime son élan."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une comparaison",
          "stepTheme": "Une comparaison",
          "stepBadge": "Une comparaison",
          "paragraphText": "« Homme, il est doux comme une femme. »\n• Information sur le poète : référentielle.\n• Comparaison « comme une femme » : poétique.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q3",
            "type": "mcq",
            "prompt": "Quelle fonction la comparaison « doux comme une femme » met-elle en valeur ?",
            "options": [
              "La fonction phatique",
              "La fonction poétique",
              "La fonction conative",
              "La fonction métalinguistique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La comparaison est une figure de style."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Découper le message",
          "stepTheme": "Découper le message",
          "stepBadge": "Découper le message",
          "paragraphText": "Pour analyser un message long, découpe-le en parties et cherche la fonction de chacune.\nL'appel de Z commence par « Allô » (phatique), puis informe (référentielle), puis invite (conative).",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q4",
            "type": "mcq",
            "prompt": "Dans l'appel de Z, quelle fonction remplit « Allô S ! » ?",
            "options": [
              "La fonction poétique",
              "La fonction métalinguistique",
              "La fonction phatique",
              "La fonction référentielle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Allô » ouvre le contact téléphonique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La publicité",
          "stepTheme": "La publicité",
          "stepBadge": "La publicité",
          "paragraphText": "Un slogan comme « Achetez Lumi, le savon qui fait briller ! » est à la fois :\n• conatif (« achetez ») ;\n• poétique (formule frappante).",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q5",
            "type": "mcq",
            "prompt": "Quelle fonction est souvent dominante dans une publicité ?",
            "options": [
              "La fonction métalinguistique",
              "La fonction phatique",
              "La fonction référentielle pure",
              "La fonction conative"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La publicité veut pousser le destinataire à acheter."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "À quoi ça sert ?",
          "stepTheme": "À quoi ça sert ?",
          "stepBadge": "À quoi ça sert ?",
          "paragraphText": "Connaître les fonctions du langage aide à comprendre l'intention d'un texte : informer, convaincre, émouvoir, garder le contact ou expliquer.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q6",
            "type": "mcq",
            "prompt": "À quoi sert l'étude des fonctions du langage ?",
            "options": [
              "À apprendre l'orthographe des mots",
              "À conjuguer les verbes irréguliers",
              "À comprendre l'intention d'un message",
              "À compter les syllabes d'un vers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les fonctions révèlent ce que l'émetteur veut faire avec son message."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Expressive ou conative ?",
          "stepTheme": "Expressive ou conative ?",
          "stepBadge": "Expressive ou conative ?",
          "paragraphText": "Attention : « je » signale l'émetteur (expressive), « tu/vous » et l'impératif signalent le destinataire (conative).\n« Je t'en supplie, viens ! » combine les deux.",
          "exercise": {
            "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q7",
            "type": "mcq",
            "prompt": "Dans « Je t'en supplie, viens ! », quel mot signale la fonction conative ?",
            "options": [
              "« Je »",
              "« supplie »",
              "« en »",
              "« viens »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'impératif « viens » s'adresse au destinataire."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q1",
          "type": "mcq",
          "prompt": "Un message peut-il remplir plusieurs fonctions du langage ?",
          "options": [
            "Oui, avec une fonction dominante",
            "Non, jamais plus d'une seule",
            "Oui, mais seulement en poésie",
            "Non, sauf au téléphone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les fonctions se combinent souvent."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q2",
          "type": "mcq",
          "prompt": "Quelles fonctions dominent dans « Peuples ! écoutez le poète ! » ?",
          "options": [
            "Conative et expressive",
            "Phatique et métalinguistique",
            "Référentielle et phatique",
            "Métalinguistique et poétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le poète interpelle les peuples et exprime son élan."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q3",
          "type": "mcq",
          "prompt": "Quelle fonction la comparaison « doux comme une femme » met-elle en valeur ?",
          "options": [
            "La fonction phatique",
            "La fonction poétique",
            "La fonction conative",
            "La fonction métalinguistique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La comparaison est une figure de style."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q4",
          "type": "mcq",
          "prompt": "Dans l'appel de Z, quelle fonction remplit « Allô S ! » ?",
          "options": [
            "La fonction poétique",
            "La fonction métalinguistique",
            "La fonction phatique",
            "La fonction référentielle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Allô » ouvre le contact téléphonique."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q5",
          "type": "mcq",
          "prompt": "Quelle fonction est souvent dominante dans une publicité ?",
          "options": [
            "La fonction métalinguistique",
            "La fonction phatique",
            "La fonction référentielle pure",
            "La fonction conative"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La publicité veut pousser le destinataire à acheter."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q6",
          "type": "mcq",
          "prompt": "À quoi sert l'étude des fonctions du langage ?",
          "options": [
            "À apprendre l'orthographe des mots",
            "À conjuguer les verbes irréguliers",
            "À comprendre l'intention d'un message",
            "À compter les syllabes d'un vers"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les fonctions révèlent ce que l'émetteur veut faire avec son message."
        },
        {
          "id": "seconde_a_francais_pl_l01_fonctions_langage_p06_q7",
          "type": "mcq",
          "prompt": "Dans « Je t'en supplie, viens ! », quel mot signale la fonction conative ?",
          "options": [
            "« Je »",
            "« supplie »",
            "« en »",
            "« viens »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'impératif « viens » s'adresse au destinataire."
        }
      ]
    }
  ]
};
