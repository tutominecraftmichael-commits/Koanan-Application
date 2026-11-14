import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ere_EE_Dissert_littér_S1_Analyser_sujet » (séance 1). Toutes les Premières.
// Fichier généré (scratchpad build_1re_fr_l03.mjs) : modifier le générateur plutôt que ce fichier.
export const FR_1RE_EE_L03_DISSERTATION_LITTERAIRE: CurriculumChapter = {
  "id": "premiere_a1_francais_ee_l03_dissertation_litteraire",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 3,
  "title": "Expression écrite, leçon 3 : La dissertation littéraire",
  "summary": "Séance 1 : analyser un sujet de dissertation littéraire (types de sujets, information et consigne, mots-clés et reformulation, thème, thèse, problématique).",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "1ere_EE_Dissert_littér_S1_Analyser_sujet.pdf",
  "points": [
    {
      "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01",
      "order": 1,
      "title": "La dissertation littéraire et les types de sujets",
      "summary": "Savoir ce qu’est une dissertation littéraire et reconnaître les deux modèles de sujets.",
      "conceptExplanation": "Situation : des élèves de Première préparent un concours. Ils découvrent deux sujets de dissertation littéraire et veulent apprendre à les analyser, à rechercher les idées, à faire un plan et à rédiger.\n- La dissertation littéraire : une réflexion organisée sur une question de littérature, appuyée sur des œuvres lues ou étudiées.\n- Premier modèle de sujet : un jugement ou une opinion, souvent donné sous forme de citation entre guillemets, avec le nom de l’auteur et parfois la source.\n- Second modèle de sujet : une consigne adressée directement au candidat, sans citation entre guillemets ; l’opinion à discuter est alors intégrée à la consigne (« le propos de … selon lequel … »).\n- Sujet 1 : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées.\n- Sujet 2 : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler.\n- Corrections du document : l’auteur cité au sujet 1 s’écrit Roger Caillois (et non « Caillos ») ; la phrase du sujet 2 est de Romain Rolland (et non « Robert Rolland »).",
      "keyRule": "Deux modèles de sujets : une citation suivie d’une consigne, ou une consigne directe qui intègre l’opinion à discuter.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître le modèle d’un sujet",
        "statement": "Classer les deux sujets de la situation d’apprentissage selon leur modèle.",
        "methodSteps": [
          "Sujet 1 : il commence par une citation entre guillemets, suivie d’une consigne qui nomme l’auteur (Roger Caillois) : premier modèle.",
          "Sujet 2 : il s’adresse directement à l’élève (« En vous appuyant sur… ») et rapporte l’opinion de Romain Rolland sans guillemets : second modèle."
        ],
        "conclusion": "Dans les deux cas, il y a une opinion à expliquer et à discuter."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "L’exercice",
          "stepTheme": "Dissertation littéraire",
          "stepTitle": "Qu’est-ce qu’une dissertation littéraire ?",
          "paragraphText": "La **dissertation littéraire** est une **réflexion organisée** sur une question de littérature. L’élève y défend des idées avec des arguments et des exemples tirés des **œuvres** qu’il a lues ou étudiées.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’une dissertation littéraire ?",
            "options": [
              "Une réflexion organisée sur une question littéraire, appuyée sur des œuvres",
              "Le résumé d’un texte en un quart de sa longueur",
              "L’explication d’un texte ligne après ligne",
              "La biographie détaillée d’un écrivain"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On réfléchit à une question (souvent une opinion sur la littérature) et on argumente avec des exemples d’œuvres."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Premier modèle",
          "stepTheme": "Sujet avec citation",
          "stepTitle": "Le sujet qui commence par une citation",
          "paragraphText": "Le premier modèle de sujet comporte un **jugement ou une opinion**, souvent donné sous forme de **citation entre guillemets**, avec le nom de l’auteur, puis une consigne.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q2",
            "type": "mcq",
            "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. À quel modèle de sujet appartient-il ?",
            "options": [
              "Un sujet qui comporte une opinion donnée sous forme de citation, suivie d’une consigne",
              "Une consigne adressée directement à l’élève, sans aucune citation",
              "Un sujet de commentaire composé",
              "Un sujet de résumé de texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La phrase entre guillemets est la citation de Roger Caillois ; la consigne vient ensuite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Second modèle",
          "stepTheme": "Consigne directe",
          "stepTitle": "Le sujet formulé comme une consigne directe",
          "paragraphText": "Le second modèle est une **consigne adressée directement** au candidat (« En vous appuyant sur… »). Il n’y a pas de citation entre guillemets : l’opinion est **rapportée dans la consigne**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q3",
            "type": "mcq",
            "prompt": "Voici un sujet : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. À quel modèle de sujet appartient-il ?",
            "options": [
              "Une consigne adressée directement à l’élève, sans citation entre guillemets",
              "Une citation entre guillemets suivie du nom de l’auteur",
              "Un sujet de commentaire composé",
              "Un sujet sans aucune opinion à discuter"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sujet commence par « En vous appuyant sur… » et rapporte le propos de Romain Rolland sans guillemets."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Opinion cachée",
          "stepTheme": "Pas de guillemets",
          "stepTitle": "Sans guillemets, il y a quand même une opinion",
          "paragraphText": "Attention : même sans guillemets, le second modèle contient une **opinion à discuter**. Dans le sujet 2, c’est le propos de Romain Rolland, introduit par « selon lequel ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q4",
            "type": "mcq",
            "prompt": "Voici un sujet : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. Ce sujet contient-il une opinion à expliquer et à discuter ?",
            "options": [
              "Oui : le propos de Romain Rolland, rapporté dans la consigne",
              "Non : il n’y a pas de guillemets, donc pas d’opinion",
              "Non : l’élève doit seulement raconter ses lectures",
              "Oui : mais elle se trouve dans un document joint"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Selon lequel on ne lit jamais un livre… » introduit l’opinion de l’auteur, même sans guillemets."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Les auteurs",
          "stepTheme": "Correction des noms",
          "stepTitle": "Qui a écrit « on se lit à travers les livres » ?",
          "paragraphText": "Le document écrit « Robert Rolland » et « Roger Caillos » : ce sont des erreurs. La phrase « On ne lit jamais un livre ; on se lit à travers les livres » est de l’écrivain français **Romain Rolland** ; l’auteur du sujet 1 s’écrit **Roger Caillois**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q5",
            "type": "mcq",
            "prompt": "Quel écrivain a affirmé : « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » ?",
            "options": [
              "Romain Rolland",
              "Roger Caillois",
              "Léopold Sédar Senghor",
              "Victor Hugo"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est Romain Rolland (prix Nobel de littérature 1915) ; le document l’appelle « Robert » par erreur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "S’appuyer sur",
          "stepTheme": "Les œuvres",
          "stepTitle": "Sur quoi s’appuyer pour argumenter ?",
          "paragraphText": "La consigne précise toujours **sur quoi s’appuyer** : les œuvres lues ou étudiées (sujet 1), ou l’expérience personnelle de lecteur (sujet 2). Les exemples doivent venir de là.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q6",
            "type": "mcq",
            "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. Sur quoi l’élève doit-il s’appuyer pour argumenter ?",
            "options": [
              "Sur les œuvres qu’il a lues ou étudiées",
              "Uniquement sur sa vie familiale",
              "Sur des statistiques et des sondages",
              "Sur la biographie de Roger Caillois"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La consigne le dit : « en vous appuyant sur les œuvres que vous avez lues ou étudiées »."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’une dissertation littéraire ?",
          "options": [
            "Une réflexion organisée sur une question littéraire, appuyée sur des œuvres",
            "Le résumé d’un texte en un quart de sa longueur",
            "L’explication d’un texte ligne après ligne",
            "La biographie détaillée d’un écrivain"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On réfléchit à une question (souvent une opinion sur la littérature) et on argumente avec des exemples d’œuvres."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q2",
          "type": "mcq",
          "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. À quel modèle de sujet appartient-il ?",
          "options": [
            "Un sujet qui comporte une opinion donnée sous forme de citation, suivie d’une consigne",
            "Une consigne adressée directement à l’élève, sans aucune citation",
            "Un sujet de commentaire composé",
            "Un sujet de résumé de texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La phrase entre guillemets est la citation de Roger Caillois ; la consigne vient ensuite."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q3",
          "type": "mcq",
          "prompt": "Voici un sujet : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. À quel modèle de sujet appartient-il ?",
          "options": [
            "Une consigne adressée directement à l’élève, sans citation entre guillemets",
            "Une citation entre guillemets suivie du nom de l’auteur",
            "Un sujet de commentaire composé",
            "Un sujet sans aucune opinion à discuter"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sujet commence par « En vous appuyant sur… » et rapporte le propos de Romain Rolland sans guillemets."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q4",
          "type": "mcq",
          "prompt": "Voici un sujet : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. Ce sujet contient-il une opinion à expliquer et à discuter ?",
          "options": [
            "Oui : le propos de Romain Rolland, rapporté dans la consigne",
            "Non : il n’y a pas de guillemets, donc pas d’opinion",
            "Non : l’élève doit seulement raconter ses lectures",
            "Oui : mais elle se trouve dans un document joint"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Selon lequel on ne lit jamais un livre… » introduit l’opinion de l’auteur, même sans guillemets."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q5",
          "type": "mcq",
          "prompt": "Quel écrivain a affirmé : « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » ?",
          "options": [
            "Romain Rolland",
            "Roger Caillois",
            "Léopold Sédar Senghor",
            "Victor Hugo"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est Romain Rolland (prix Nobel de littérature 1915) ; le document l’appelle « Robert » par erreur."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p01_q6",
          "type": "mcq",
          "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. Sur quoi l’élève doit-il s’appuyer pour argumenter ?",
          "options": [
            "Sur les œuvres qu’il a lues ou étudiées",
            "Uniquement sur sa vie familiale",
            "Sur des statistiques et des sondages",
            "Sur la biographie de Roger Caillois"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La consigne le dit : « en vous appuyant sur les œuvres que vous avez lues ou étudiées »."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02",
      "order": 2,
      "title": "Les deux parties du sujet : l’information et la consigne",
      "summary": "Distinguer l’information (l’opinion à étudier) et la consigne (le travail demandé), et comprendre « expliquez » et « discutez ».",
      "conceptExplanation": "- L’information : le jugement ou l’opinion d’un auteur ou d’un critique sur un thème, souvent donné sous forme de citation.\n- La consigne : un groupe verbal à l’impératif (forme injonctive) qui dit ce qu’il faut faire et oriente la démarche du développement.\n- Expliquer : étayer, justifier l’opinion avec des arguments et des exemples qui montrent qu’elle est fondée.\n- Discuter : montrer les limites de l’opinion, la nuancer.\n- Sujet 1 : l’information est la citation de Roger Caillois ; la consigne est « Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées ».",
      "keyRule": "Sujet = information (l’opinion) + consigne (verbes à l’impératif). Expliquer = justifier ; discuter = montrer les limites.",
      "formulas": [],
      "workedExample": {
        "title": "Découper le sujet 1",
        "statement": "« Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées.",
        "methodSteps": [
          "Information : « Toute littérature participe d’une civilisation… et en reçoit l’empreinte. »",
          "Consigne : « Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. »",
          "Verbes de la consigne : expliquer (justifier la thèse) puis discuter (en montrer les limites)."
        ],
        "conclusion": "Le devoir aura deux grands mouvements : justifier la thèse, puis la nuancer."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "L’information",
          "stepTheme": "L’opinion à étudier",
          "stepTitle": "Qu’appelle-t-on l’information ?",
          "paragraphText": "L’**information** est le **jugement ou l’opinion** d’un auteur ou d’un critique sur un thème. Elle est souvent donnée sous forme de citation.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q1",
            "type": "mcq",
            "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. Que représente la phrase placée entre guillemets ?",
            "options": [
              "L’information : l’opinion d’un auteur sur un thème",
              "La consigne : le travail à faire",
              "La problématique du devoir",
              "La conclusion du devoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La citation de Roger Caillois est l’information : c’est l’opinion à étudier."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "La consigne",
          "stepTheme": "Verbes à l’impératif",
          "stepTitle": "Comment reconnaître la consigne ?",
          "paragraphText": "La **consigne** est formulée par un **groupe verbal à l’impératif** (forme injonctive) : « Expliquez », « Discutez », « Commentez »… Elle **oriente la démarche** du développement.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q2",
            "type": "mcq",
            "prompt": "Comment la consigne d’un sujet de dissertation est-elle formulée ?",
            "options": [
              "Par un groupe verbal à l’impératif qui dit ce qu’il faut faire",
              "Par une citation entre guillemets",
              "Par une question posée à l’auteur",
              "Par le titre d’une œuvre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La consigne s’adresse à l’élève à l’impératif et indique le travail demandé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Repérer la consigne",
          "stepTheme": "Sujet 1",
          "stepTitle": "Trouver la consigne dans le sujet 1",
          "paragraphText": "Dans le sujet 1, tout ce qui suit la citation est la consigne : elle donne les verbes (expliquez, discutez) et les appuis (les œuvres lues ou étudiées).",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q3",
            "type": "mcq",
            "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. Quelle est la consigne de ce sujet ?",
            "options": [
              "« Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées »",
              "« Toute littérature participe d’une civilisation »",
              "« Une littérature existe dans une société et en reçoit l’empreinte »",
              "« Aucun livre ne sort des battements d’un cœur »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois autres propositions font partie de l’information (la citation)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Expliquer",
          "stepTheme": "Justifier",
          "stepTitle": "Que demande le verbe « expliquez » ?",
          "paragraphText": "**Expliquer**, c’est **étayer** l’opinion : donner des justificatifs, des arguments et des exemples qui montrent qu’elle est fondée.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q4",
            "type": "mcq",
            "prompt": "Dans un sujet de dissertation, que demande le verbe « expliquez » ?",
            "options": [
              "Justifier l’opinion par des arguments et des exemples",
              "Montrer les limites de l’opinion",
              "Résumer le sujet en une phrase",
              "Raconter la vie de l’auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Expliquer = étayer, justifier ; c’est discuter qui consiste à montrer les limites."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Discuter",
          "stepTheme": "Nuancer",
          "stepTitle": "Que demande le verbe « discutez » ?",
          "paragraphText": "**Discuter**, c’est **donner les limites** de l’affirmation : montrer dans quels cas elle n’est pas tout à fait vraie, la nuancer.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q5",
            "type": "mcq",
            "prompt": "Dans un sujet de dissertation, que demande le verbe « discutez » ?",
            "options": [
              "Montrer les limites de l’affirmation",
              "Recopier l’affirmation",
              "Approuver l’affirmation sans réserve",
              "Changer de sujet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Discuter, c’est nuancer la thèse en montrant ses limites."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Deux mouvements",
          "stepTheme": "Expliquer puis discuter",
          "stepTitle": "Ne pas sauter l’explication",
          "paragraphText": "« Expliquez et discutez » impose **deux mouvements** : d’abord justifier la thèse, ensuite la nuancer. Réfuter l’auteur dès le début, sans avoir expliqué sa thèse, est hors sujet.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q6",
            "type": "mcq",
            "prompt": "Pour le sujet « « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. », un élève consacre tout son devoir à montrer que Roger Caillois a tort. Quelle erreur commet-il ?",
            "options": [
              "Il oublie d’expliquer la thèse avant de la discuter",
              "Aucune : discuter veut dire réfuter entièrement",
              "Il aurait dû seulement résumer la citation",
              "Il aurait dû parler d’un autre auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La consigne demande d’abord d’expliquer (justifier la thèse), puis de discuter (la nuancer)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Sujet 2",
          "stepTheme": "L’information",
          "stepTitle": "Repérer l’information dans le sujet 2",
          "paragraphText": "Dans le sujet 2, l’information n’est pas entre guillemets : c’est le propos de Romain Rolland, rapporté après « selon lequel ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q7",
            "type": "mcq",
            "prompt": "Voici un sujet : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. Quelle est l’information de ce sujet ?",
            "options": [
              "« On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler »",
              "« En vous appuyant sur votre expérience personnelle de lecteur »",
              "« Expliquez et discutez le propos »",
              "« d’œuvres littéraires »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’opinion de Romain Rolland ; le reste est la consigne."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q1",
          "type": "mcq",
          "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. Que représente la phrase placée entre guillemets ?",
          "options": [
            "L’information : l’opinion d’un auteur sur un thème",
            "La consigne : le travail à faire",
            "La problématique du devoir",
            "La conclusion du devoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La citation de Roger Caillois est l’information : c’est l’opinion à étudier."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q2",
          "type": "mcq",
          "prompt": "Comment la consigne d’un sujet de dissertation est-elle formulée ?",
          "options": [
            "Par un groupe verbal à l’impératif qui dit ce qu’il faut faire",
            "Par une citation entre guillemets",
            "Par une question posée à l’auteur",
            "Par le titre d’une œuvre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La consigne s’adresse à l’élève à l’impératif et indique le travail demandé."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q3",
          "type": "mcq",
          "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. Quelle est la consigne de ce sujet ?",
          "options": [
            "« Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées »",
            "« Toute littérature participe d’une civilisation »",
            "« Une littérature existe dans une société et en reçoit l’empreinte »",
            "« Aucun livre ne sort des battements d’un cœur »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois autres propositions font partie de l’information (la citation)."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q4",
          "type": "mcq",
          "prompt": "Dans un sujet de dissertation, que demande le verbe « expliquez » ?",
          "options": [
            "Justifier l’opinion par des arguments et des exemples",
            "Montrer les limites de l’opinion",
            "Résumer le sujet en une phrase",
            "Raconter la vie de l’auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Expliquer = étayer, justifier ; c’est discuter qui consiste à montrer les limites."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q5",
          "type": "mcq",
          "prompt": "Dans un sujet de dissertation, que demande le verbe « discutez » ?",
          "options": [
            "Montrer les limites de l’affirmation",
            "Recopier l’affirmation",
            "Approuver l’affirmation sans réserve",
            "Changer de sujet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Discuter, c’est nuancer la thèse en montrant ses limites."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q6",
          "type": "mcq",
          "prompt": "Pour le sujet « « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. », un élève consacre tout son devoir à montrer que Roger Caillois a tort. Quelle erreur commet-il ?",
          "options": [
            "Il oublie d’expliquer la thèse avant de la discuter",
            "Aucune : discuter veut dire réfuter entièrement",
            "Il aurait dû seulement résumer la citation",
            "Il aurait dû parler d’un autre auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La consigne demande d’abord d’expliquer (justifier la thèse), puis de discuter (la nuancer)."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p02_q7",
          "type": "mcq",
          "prompt": "Voici un sujet : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. Quelle est l’information de ce sujet ?",
          "options": [
            "« On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler »",
            "« En vous appuyant sur votre expérience personnelle de lecteur »",
            "« Expliquez et discutez le propos »",
            "« d’œuvres littéraires »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’opinion de Romain Rolland ; le reste est la consigne."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03",
      "order": 3,
      "title": "Expliquer les mots-clés et reformuler",
      "summary": "Donner le sens des mots-clés dans le contexte du sujet, puis reformuler l’opinion avec ses propres mots.",
      "conceptExplanation": "- Mots-clés : les mots importants ou difficiles de l’information et de la consigne. On en donne le sens dans le contexte du sujet, pas seulement le sens du dictionnaire.\n- Sujet 1 : « toute littérature » = toute production littéraire (roman, théâtre, poésie) ; « participe » = prend part, contribue ; « civilisation » = culture ; « battements d’un cœur » = image (métonymie) du sentiment, de l’émotion, de l’imagination ; « existe dans une société » = est liée à un milieu, ancrée dans une société ; « empreinte » = marque, cachet.\n- Reformulation du sujet 1 : les productions littéraires ne proviennent pas de l’imagination mais de la société qui les a vues naître et dont elles portent la marque.\n- Sujet 2 : « on se lit » = on se décode, on apprend à mieux se connaître ; « se découvrir » = se révéler, se dévoiler ; « se contrôler » = se maîtriser, se corriger, s’amender.\n- Reformulation du sujet 2 : l’œuvre littéraire nous révèle à nous-mêmes et nous aide à nous corriger.",
      "keyRule": "Expliquer chaque mot-clé dans le contexte du sujet, puis redire l’opinion de l’auteur avec ses propres mots (reformulation).",
      "formulas": [],
      "workedExample": {
        "title": "Reformuler la citation de Roger Caillois",
        "statement": "« Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. »",
        "methodSteps": [
          "Expliquer les mots-clés : civilisation = culture ; battements d’un cœur = sentiment, imagination ; empreinte = marque.",
          "Assembler les sens : la littérature vient de la société, pas de l’imagination seule, et elle en porte la marque.",
          "Rédiger : « Les productions littéraires ne proviennent pas de l’imagination mais de la société qui les a vues naître et dont elles portent la marque. »"
        ],
        "conclusion": "La reformulation prouve que l’on a compris le sujet avant de le discuter."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Mots-clés",
          "stepTheme": "Sens en contexte",
          "stepTitle": "Qu’appelle-t-on les mots-clés d’un sujet ?",
          "paragraphText": "Les **mots-clés** sont les mots importants ou difficiles de l’information et de la consigne. On en dégage le **sens dans le contexte** du sujet.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q1",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on les mots-clés d’un sujet de dissertation ?",
            "options": [
              "Les mots importants ou difficiles dont on dégage le sens dans le contexte du sujet",
              "Tous les mots de la citation, expliqués un par un dans le dictionnaire",
              "Les noms des auteurs cités",
              "Les mots qu’on recopiera dans la conclusion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ne garde que les mots porteurs de sens, et on les explique dans le contexte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Civilisation",
          "stepTheme": "Sujet 1",
          "stepTitle": "Le sens de « civilisation » dans le sujet 1",
          "paragraphText": "Dans la citation de Roger Caillois, « civilisation » désigne la **culture** d’un peuple : ses valeurs, ses coutumes, son mode de vie.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q2",
            "type": "mcq",
            "prompt": "Dans la phrase « Toute littérature participe d’une civilisation », quel est le sens du mot « civilisation » ?",
            "options": [
              "La culture",
              "La ville moderne",
              "La politesse",
              "Le progrès technique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ici, « civilisation » veut dire « culture »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Une image",
          "stepTheme": "Battements d’un cœur",
          "stepTitle": "Ne pas prendre une image au pied de la lettre",
          "paragraphText": "« Les battements d’un cœur » ne désignent pas ici le rythme cardiaque : c’est une **image** (une métonymie) pour le **sentiment, l’émotion, l’imagination** de l’écrivain.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q3",
            "type": "mcq",
            "prompt": "Dans la phrase « aucun livre ne sort des battements d’un cœur », que désignent « les battements d’un cœur » ?",
            "options": [
              "Le sentiment, l’émotion, l’imagination de l’écrivain",
              "Le rythme cardiaque mesuré par un médecin",
              "La vitesse de lecture du lecteur",
              "Le nombre de pages d’un livre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est une image : le cœur représente les sentiments et l’imagination."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Empreinte",
          "stepTheme": "Sujet 1",
          "stepTitle": "Le sens de « empreinte » dans le sujet 1",
          "paragraphText": "« Une littérature … reçoit l’**empreinte** » de la société : elle en porte la **marque**, le **cachet**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q4",
            "type": "mcq",
            "prompt": "Dans la phrase « Une littérature existe dans une société et en reçoit l’empreinte », que signifie « l’empreinte » ?",
            "options": [
              "La marque, le cachet",
              "Une trace de pas",
              "Un emprunt d’argent",
              "Une impression d’imprimerie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La littérature porte la marque de la société où elle naît."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Reformuler",
          "stepTheme": "Sujet 1",
          "stepTitle": "Reformuler l’opinion de Roger Caillois",
          "paragraphText": "La **reformulation** redit l’opinion de l’auteur **avec ses propres mots**, à partir du sens des mots-clés. Elle ne doit ni ajouter ni changer l’idée.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q5",
            "type": "mcq",
            "prompt": "Quelle phrase reformule le mieux : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte » ?",
            "options": [
              "Les œuvres littéraires ne viennent pas de l’imagination mais de la société, dont elles portent la marque",
              "Les œuvres littéraires naissent uniquement des sentiments de l’écrivain",
              "La littérature n’a aucun rapport avec la société",
              "Les livres doivent parler de médecine et du cœur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la reformulation donnée par le document : la société marque la littérature."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Se contrôler",
          "stepTheme": "Sujet 2",
          "stepTitle": "Le sens de « se contrôler » dans le sujet 2",
          "paragraphText": "Dans le propos de Romain Rolland, « se contrôler » veut dire **se maîtriser, se corriger, s’amender** grâce à ce que l’on découvre de soi dans les livres.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q6",
            "type": "mcq",
            "prompt": "Dans la phrase « on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler », que signifie « se contrôler » ?",
            "options": [
              "Se maîtriser, se corriger",
              "Vérifier ses billets de train",
              "Surveiller les autres lecteurs",
              "Compter les livres que l’on a lus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Se contrôler = se contenir, se maîtriser, rectifier, s’amender."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Reformuler",
          "stepTheme": "Sujet 2",
          "stepTitle": "Reformuler le propos de Romain Rolland",
          "paragraphText": "En assemblant le sens des mots-clés, on obtient : l’œuvre littéraire nous **révèle à nous-mêmes** et nous **aide à nous corriger**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q7",
            "type": "mcq",
            "prompt": "Quelle phrase reformule le mieux : « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » ?",
            "options": [
              "L’œuvre littéraire nous révèle à nous-mêmes et nous aide à nous corriger",
              "Il ne faut jamais lire de livres",
              "Les livres servent seulement à se divertir",
              "Lire un livre, c’est le recopier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la reformulation du corrigé : la lecture est découverte et correction de soi."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q1",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on les mots-clés d’un sujet de dissertation ?",
          "options": [
            "Les mots importants ou difficiles dont on dégage le sens dans le contexte du sujet",
            "Tous les mots de la citation, expliqués un par un dans le dictionnaire",
            "Les noms des auteurs cités",
            "Les mots qu’on recopiera dans la conclusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ne garde que les mots porteurs de sens, et on les explique dans le contexte."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q2",
          "type": "mcq",
          "prompt": "Dans la phrase « Toute littérature participe d’une civilisation », quel est le sens du mot « civilisation » ?",
          "options": [
            "La culture",
            "La ville moderne",
            "La politesse",
            "Le progrès technique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ici, « civilisation » veut dire « culture »."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q3",
          "type": "mcq",
          "prompt": "Dans la phrase « aucun livre ne sort des battements d’un cœur », que désignent « les battements d’un cœur » ?",
          "options": [
            "Le sentiment, l’émotion, l’imagination de l’écrivain",
            "Le rythme cardiaque mesuré par un médecin",
            "La vitesse de lecture du lecteur",
            "Le nombre de pages d’un livre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est une image : le cœur représente les sentiments et l’imagination."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q4",
          "type": "mcq",
          "prompt": "Dans la phrase « Une littérature existe dans une société et en reçoit l’empreinte », que signifie « l’empreinte » ?",
          "options": [
            "La marque, le cachet",
            "Une trace de pas",
            "Un emprunt d’argent",
            "Une impression d’imprimerie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La littérature porte la marque de la société où elle naît."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q5",
          "type": "mcq",
          "prompt": "Quelle phrase reformule le mieux : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte » ?",
          "options": [
            "Les œuvres littéraires ne viennent pas de l’imagination mais de la société, dont elles portent la marque",
            "Les œuvres littéraires naissent uniquement des sentiments de l’écrivain",
            "La littérature n’a aucun rapport avec la société",
            "Les livres doivent parler de médecine et du cœur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la reformulation donnée par le document : la société marque la littérature."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q6",
          "type": "mcq",
          "prompt": "Dans la phrase « on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler », que signifie « se contrôler » ?",
          "options": [
            "Se maîtriser, se corriger",
            "Vérifier ses billets de train",
            "Surveiller les autres lecteurs",
            "Compter les livres que l’on a lus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Se contrôler = se contenir, se maîtriser, rectifier, s’amender."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p03_q7",
          "type": "mcq",
          "prompt": "Quelle phrase reformule le mieux : « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » ?",
          "options": [
            "L’œuvre littéraire nous révèle à nous-mêmes et nous aide à nous corriger",
            "Il ne faut jamais lire de livres",
            "Les livres servent seulement à se divertir",
            "Lire un livre, c’est le recopier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la reformulation du corrigé : la lecture est découverte et correction de soi."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04",
      "order": 4,
      "title": "Dégager le thème et la thèse",
      "summary": "Trouver le thème (de quoi s’agit-il ?) et la thèse (quel est le point de vue de l’auteur ?), sans les confondre.",
      "conceptExplanation": "- Thème : la notion sur laquelle porte la réflexion. On le trouve en se demandant « De quoi s’agit-il ? », à partir des mots qui reviennent ou d’un champ lexical. Sujet 1 : le rapport entre la littérature et la société.\n- Thèse : l’opinion, le point de vue que l’auteur soutient sur ce thème, et qui s’oppose à d’autres thèses possibles. On la trouve en se demandant « Quel est le point de vue de l’auteur sur le thème ? ». Sujet 1 : la production littéraire est influencée par la société.\n- Sujet 2 : thème = l’apport de la lecture au lecteur ; thèse = on lit pour se découvrir et pour se corriger.\n- Ne pas confondre : le thème se dit en un groupe nominal (une notion), la thèse en une phrase qui prend position.",
      "keyRule": "Thème = « De quoi s’agit-il ? » (un groupe nominal). Thèse = « Quel est le point de vue de l’auteur ? » (une phrase qui prend position).",
      "formulas": [],
      "workedExample": {
        "title": "Thème et thèse du sujet 1",
        "statement": "« Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées.",
        "methodSteps": [
          "De quoi s’agit-il ? De littérature et de société : thème = le rapport entre la littérature et la société.",
          "Quel est le point de vue de Roger Caillois ? Thèse = la production littéraire est influencée, marquée par la société.",
          "Thèse opposée possible : la littérature naît aussi de l’imagination et des sentiments personnels de l’écrivain."
        ],
        "conclusion": "La thèse opposée servira à la partie « discutez »."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Le thème",
          "stepTheme": "De quoi s’agit-il ?",
          "stepTitle": "Comment trouver le thème d’un sujet ?",
          "paragraphText": "Le **thème** est la notion sur laquelle porte la réflexion. Pour le trouver, on se pose la question : **« De quoi s’agit-il ? »**, en s’aidant des mots qui reviennent.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q1",
            "type": "mcq",
            "prompt": "Quelle question faut-il se poser pour dégager le thème d’un sujet de dissertation ?",
            "options": [
              "« De quoi s’agit-il ? »",
              "« Quel est le point de vue de l’auteur ? »",
              "« Quand l’auteur est-il né ? »",
              "« Combien de parties faut-il faire ? »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« De quoi s’agit-il ? » donne le thème ; « Quel est le point de vue de l’auteur ? » donne la thèse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Thème",
          "stepTheme": "Sujet 1",
          "stepTitle": "Le thème du sujet de Roger Caillois",
          "paragraphText": "Dans la citation de Roger Caillois reviennent les mots « littérature », « livre », « civilisation », « société » : le thème est le **rapport entre la littérature et la société**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q2",
            "type": "mcq",
            "prompt": "Quel est le thème du sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte » ?",
            "options": [
              "Le rapport entre la littérature et la société",
              "La santé du cœur",
              "La vie de Roger Caillois",
              "L’histoire de l’imprimerie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les mots « littérature » et « société » reviennent : le thème est leur rapport."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "La thèse",
          "stepTheme": "Point de vue de l’auteur",
          "stepTitle": "Comment trouver la thèse de l’auteur ?",
          "paragraphText": "La **thèse** est l’**opinion** que l’auteur soutient sur le thème, et qui s’oppose à d’autres thèses possibles. On la trouve en se demandant : **« Quel est le point de vue de l’auteur sur le thème ? »**",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q3",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on la thèse de l’auteur dans un sujet de dissertation ?",
            "options": [
              "Le point de vue qu’il soutient sur le thème",
              "Le titre de son œuvre la plus connue",
              "La liste des mots difficiles du sujet",
              "Le plan du devoir de l’élève"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La thèse est une prise de position sur le thème."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Thèse",
          "stepTheme": "Sujet 1",
          "stepTitle": "La thèse de Roger Caillois",
          "paragraphText": "Pour Roger Caillois, la littérature ne sort pas de l’imagination seule : elle **reçoit l’empreinte de la société**. Sa thèse : la production littéraire est **influencée par la société**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q4",
            "type": "mcq",
            "prompt": "Quelle est la thèse de l’auteur dans : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte » ?",
            "options": [
              "La production littéraire est influencée par la société",
              "La littérature naît uniquement de l’imagination",
              "La société n’a aucune influence sur les livres",
              "Il faut lire beaucoup de livres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’auteur affirme que la société marque la littérature."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Thème ou thèse ?",
          "stepTheme": "Ne pas confondre",
          "stepTitle": "Un thème n’est pas une thèse",
          "paragraphText": "Le **thème** se dit en un **groupe nominal** (« la littérature et la société »). La **thèse** est une **phrase qui prend position** (« la littérature est marquée par la société »).",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q5",
            "type": "mcq",
            "prompt": "L’expression « la littérature et la société » est-elle le thème ou la thèse du sujet de Roger Caillois ?",
            "options": [
              "Le thème, car c’est une notion sans prise de position",
              "La thèse, car elle donne l’opinion de l’auteur",
              "La consigne, car elle dit ce qu’il faut faire",
              "La problématique, car elle pose une question"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une notion sans verbe ni prise de position est un thème."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Thème",
          "stepTheme": "Sujet 2",
          "stepTitle": "Le thème du sujet de Romain Rolland",
          "paragraphText": "Le propos de Romain Rolland porte sur ce que la lecture apporte à celui qui lit : le thème est **l’apport de la lecture au lecteur**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q6",
            "type": "mcq",
            "prompt": "Quel est le thème du propos de Romain Rolland : « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » ?",
            "options": [
              "L’apport de la lecture au lecteur",
              "Le prix des livres",
              "L’écriture des romans",
              "La vie de Romain Rolland"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il s’agit de ce que la lecture apporte au lecteur."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Thèse",
          "stepTheme": "Sujet 2",
          "stepTitle": "La thèse de Romain Rolland",
          "paragraphText": "Pour Romain Rolland, lire, c’est se lire soi-même : on lit **pour se découvrir et pour se corriger**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q7",
            "type": "mcq",
            "prompt": "Quelle est la thèse de Romain Rolland dans : « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » ?",
            "options": [
              "On lit pour se découvrir et pour se corriger",
              "On lit seulement pour se divertir",
              "Il ne faut pas lire de livres",
              "Les livres n’apprennent rien au lecteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La lecture sert à la découverte et à la correction de soi."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepBadge": "Thèse opposée",
          "stepTheme": "Préparer « discutez »",
          "stepTitle": "Quelle thèse s’oppose à celle de Roger Caillois ?",
          "paragraphText": "Une thèse s’oppose toujours à d’autres thèses possibles. Face à Roger Caillois, on peut soutenir que la littérature naît **aussi de l’imagination et des sentiments personnels** de l’écrivain : c’est la base de la partie « discutez ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q8",
            "type": "mcq",
            "prompt": "Roger Caillois soutient que la littérature reçoit l’empreinte de la société. Quelle thèse peut lui être opposée dans la partie « discutez » ?",
            "options": [
              "La littérature naît aussi de l’imagination et des sentiments personnels de l’écrivain",
              "La littérature reçoit l’empreinte de la société",
              "La société produit tous les livres sans écrivain",
              "Les écrivains ne vivent dans aucune société"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La thèse opposée met en avant l’imagination et la sensibilité de l’auteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q1",
          "type": "mcq",
          "prompt": "Quelle question faut-il se poser pour dégager le thème d’un sujet de dissertation ?",
          "options": [
            "« De quoi s’agit-il ? »",
            "« Quel est le point de vue de l’auteur ? »",
            "« Quand l’auteur est-il né ? »",
            "« Combien de parties faut-il faire ? »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« De quoi s’agit-il ? » donne le thème ; « Quel est le point de vue de l’auteur ? » donne la thèse."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q2",
          "type": "mcq",
          "prompt": "Quel est le thème du sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte » ?",
          "options": [
            "Le rapport entre la littérature et la société",
            "La santé du cœur",
            "La vie de Roger Caillois",
            "L’histoire de l’imprimerie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les mots « littérature » et « société » reviennent : le thème est leur rapport."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q3",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on la thèse de l’auteur dans un sujet de dissertation ?",
          "options": [
            "Le point de vue qu’il soutient sur le thème",
            "Le titre de son œuvre la plus connue",
            "La liste des mots difficiles du sujet",
            "Le plan du devoir de l’élève"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La thèse est une prise de position sur le thème."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q4",
          "type": "mcq",
          "prompt": "Quelle est la thèse de l’auteur dans : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte » ?",
          "options": [
            "La production littéraire est influencée par la société",
            "La littérature naît uniquement de l’imagination",
            "La société n’a aucune influence sur les livres",
            "Il faut lire beaucoup de livres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’auteur affirme que la société marque la littérature."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q5",
          "type": "mcq",
          "prompt": "L’expression « la littérature et la société » est-elle le thème ou la thèse du sujet de Roger Caillois ?",
          "options": [
            "Le thème, car c’est une notion sans prise de position",
            "La thèse, car elle donne l’opinion de l’auteur",
            "La consigne, car elle dit ce qu’il faut faire",
            "La problématique, car elle pose une question"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une notion sans verbe ni prise de position est un thème."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q6",
          "type": "mcq",
          "prompt": "Quel est le thème du propos de Romain Rolland : « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » ?",
          "options": [
            "L’apport de la lecture au lecteur",
            "Le prix des livres",
            "L’écriture des romans",
            "La vie de Romain Rolland"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il s’agit de ce que la lecture apporte au lecteur."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q7",
          "type": "mcq",
          "prompt": "Quelle est la thèse de Romain Rolland dans : « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » ?",
          "options": [
            "On lit pour se découvrir et pour se corriger",
            "On lit seulement pour se divertir",
            "Il ne faut pas lire de livres",
            "Les livres n’apprennent rien au lecteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La lecture sert à la découverte et à la correction de soi."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p04_q8",
          "type": "mcq",
          "prompt": "Roger Caillois soutient que la littérature reçoit l’empreinte de la société. Quelle thèse peut lui être opposée dans la partie « discutez » ?",
          "options": [
            "La littérature naît aussi de l’imagination et des sentiments personnels de l’écrivain",
            "La littérature reçoit l’empreinte de la société",
            "La société produit tous les livres sans écrivain",
            "Les écrivains ne vivent dans aucune société"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La thèse opposée met en avant l’imagination et la sensibilité de l’auteur."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05",
      "order": 5,
      "title": "Formuler la problématique",
      "summary": "Formuler la problématique d’un sujet à partir de la thèse et des verbes de la consigne, et maîtriser l’ordre des étapes de l’analyse.",
      "conceptExplanation": "- Problématique : l’ensemble des questions ou des problèmes posés par le sujet. Une bonne problématique tient compte de la thèse de l’auteur et de l’orientation du verbe de la consigne.\n- On la formule sous forme de questions, à partir du sujet et de la consigne : elles déterminent le problème à résoudre dans le devoir.\n- Sujet 1 : « Quel rapport y a-t-il entre la production littéraire et la société ? La société est-elle la seule source d’inspiration du livre ? » La première question correspond à « expliquez », la seconde à « discutez ».\n- Sujet 2 : « L’œuvre littéraire ne se limite-t-elle qu’à nous révéler notre propre personne et à nous aider à nous corriger ? » ou « En quoi la lecture permet-elle la découverte et la formation de soi, et est-ce son seul bénéfice ? »\n- Démarche d’analyse : identifier l’information et la consigne, expliquer les mots-clés, reformuler, dégager le thème puis la thèse, comprendre les verbes de la consigne, formuler la problématique.",
      "keyRule": "Problématique = questions tirées de la thèse et des verbes de la consigne : une question pour expliquer, une question pour discuter.",
      "formulas": [],
      "workedExample": {
        "title": "Évaluation formative corrigée : analyser le sujet 2",
        "statement": "En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler.",
        "methodSteps": [
          "Information : « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler ». Consigne : expliquez et discutez, en vous appuyant sur votre expérience de lecteur.",
          "Mots-clés : se lire = mieux se connaître ; se découvrir = se révéler ; se contrôler = se maîtriser, se corriger.",
          "Thème : l’apport de la lecture au lecteur. Thèse : on lit pour se découvrir et se corriger.",
          "Problématique : la lecture ne sert-elle qu’à nous révéler à nous-mêmes et à nous corriger ?"
        ],
        "conclusion": "Le devoir expliquera d’abord en quoi la lecture forme le lecteur, puis montrera ses autres apports (plaisir, connaissance du monde…)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Problématique",
          "stepTheme": "Les questions du sujet",
          "stepTitle": "Qu’est-ce que la problématique ?",
          "paragraphText": "La **problématique** est l’**ensemble des questions** ou des problèmes posés par le sujet. C’est le problème que le devoir va résoudre.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q1",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on la problématique d’un sujet de dissertation ?",
            "options": [
              "L’ensemble des questions ou des problèmes posés par le sujet",
              "Le résumé de la citation",
              "La liste des œuvres à citer",
              "La conclusion du devoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La problématique pose sous forme de questions le problème à résoudre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Bien la formuler",
          "stepTheme": "Thèse + verbe",
          "stepTitle": "Ce dont tient compte une bonne problématique",
          "paragraphText": "Une bonne problématique tient compte de **deux éléments** : la **thèse de l’auteur** et l’**orientation du verbe de la consigne** (expliquer, discuter…).",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q2",
            "type": "mcq",
            "prompt": "De quoi une bonne problématique doit-elle tenir compte ?",
            "options": [
              "De la thèse de l’auteur et de l’orientation du verbe de la consigne",
              "Uniquement du nom de l’auteur",
              "Du nombre de mots de la citation",
              "Des goûts personnels de l’élève seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Thèse + verbe de la consigne = problématique adaptée au sujet."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Sujet 1",
          "stepTheme": "Deux questions",
          "stepTitle": "La problématique du sujet de Roger Caillois",
          "paragraphText": "Pour « expliquez », on interroge le rapport littérature-société ; pour « discutez », on se demande si la société est la seule source du livre.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q3",
            "type": "mcq",
            "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. Quelle problématique convient ?",
            "options": [
              "Quel rapport y a-t-il entre la production littéraire et la société ? La société est-elle la seule source d’inspiration du livre ?",
              "Qui était Roger Caillois ?",
              "Combien de livres faut-il lire pour réussir ?",
              "Pourquoi le cœur bat-il ?"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la problématique du document : une question pour expliquer, une pour discuter."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Une vraie question",
          "stepTheme": "Pas trop large",
          "stepTitle": "Éviter une problématique hors sujet",
          "paragraphText": "La problématique doit rester liée à la **thèse précise** du sujet. Une question trop générale (« Qu’est-ce que la littérature ? ») ou une simple affirmation ne conviennent pas.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q4",
            "type": "mcq",
            "prompt": "Pour le sujet de Roger Caillois sur la littérature et la société, laquelle de ces formulations est une mauvaise problématique ?",
            "options": [
              "« Qu’est-ce que la littérature ? », trop générale et sans lien avec la thèse",
              "« La société est-elle la seule source d’inspiration du livre ? »",
              "« Quel rapport y a-t-il entre la production littéraire et la société ? »",
              "« La littérature reçoit-elle toujours l’empreinte de la société ? »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une question trop large ne permet pas de traiter la thèse de l’auteur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Sujet 2",
          "stepTheme": "Problématique",
          "stepTitle": "La problématique du sujet de Romain Rolland",
          "paragraphText": "Le corrigé propose : « L’œuvre littéraire ne se limite-t-elle qu’à nous révéler notre propre personne et à nous aider à nous corriger ? »",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q5",
            "type": "mcq",
            "prompt": "Voici un sujet : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. Quelle problématique convient ?",
            "options": [
              "La lecture ne sert-elle qu’à nous révéler à nous-mêmes et à nous aider à nous corriger ?",
              "Combien coûte un livre ?",
              "Romain Rolland a-t-il obtenu un prix ?",
              "Faut-il lire le soir ou le matin ?"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle reprend la thèse (se découvrir, se corriger) et ouvre la discussion (« ne … que »)."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Fiche d’analyse du sujet 2 (Romain Rolland)",
            "caption": "Évaluation formative corrigée : même démarche que pour le sujet 1.",
            "tableData": {
              "headers": [
                "Étape",
                "Sujet 2"
              ],
              "rows": [
                [
                  "Information",
                  "« On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler »"
                ],
                [
                  "Consigne",
                  "Expliquez et discutez, en vous appuyant sur votre expérience de lecteur"
                ],
                [
                  "Mots-clés",
                  "se lire = mieux se connaître ; se découvrir = se révéler ; se contrôler = se maîtriser, se corriger"
                ],
                [
                  "Reformulation",
                  "L’œuvre littéraire nous révèle à nous-mêmes et nous aide à nous corriger"
                ],
                [
                  "Thème",
                  "L’apport de la lecture au lecteur"
                ],
                [
                  "Thèse",
                  "On lit pour se découvrir et pour se corriger"
                ],
                [
                  "Problématique",
                  "La lecture ne sert-elle qu’à nous révéler à nous-mêmes et à nous corriger ?"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "La démarche",
          "stepTheme": "Ordre des étapes",
          "stepTitle": "Dans quel ordre analyser un sujet ?",
          "paragraphText": "On analyse un sujet dans cet ordre : identifier l’**information** et la **consigne**, expliquer les **mots-clés**, **reformuler**, dégager le **thème** puis la **thèse**, comprendre les verbes, formuler la **problématique**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q6",
            "type": "mcq",
            "prompt": "Quelle étape vient en dernier dans l’analyse d’un sujet de dissertation ?",
            "options": [
              "La formulation de la problématique",
              "L’explication des mots-clés",
              "L’identification de l’information et de la consigne",
              "La reformulation de l’opinion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La problématique s’appuie sur tout le reste : elle vient en dernier."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Fiche d’analyse du sujet 1 (Roger Caillois)",
            "caption": "Les étapes de l’analyse, dans l’ordre : de l’identification des parties jusqu’à la problématique.",
            "tableData": {
              "headers": [
                "Étape",
                "Sujet 1"
              ],
              "rows": [
                [
                  "Information",
                  "« Toute littérature participe d’une civilisation… et en reçoit l’empreinte. »"
                ],
                [
                  "Consigne",
                  "Expliquez et discutez, en vous appuyant sur les œuvres lues ou étudiées"
                ],
                [
                  "Mots-clés",
                  "civilisation = culture ; battements d’un cœur = sentiment, imagination ; empreinte = marque"
                ],
                [
                  "Reformulation",
                  "Les œuvres ne viennent pas de l’imagination mais de la société, dont elles portent la marque"
                ],
                [
                  "Thème",
                  "Le rapport entre la littérature et la société"
                ],
                [
                  "Thèse",
                  "La production littéraire est influencée par la société"
                ],
                [
                  "Problématique",
                  "Quel rapport entre la littérature et la société ? La société est-elle la seule source d’inspiration du livre ?"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Lien avec la consigne",
          "stepTheme": "Discuter",
          "stepTitle": "Quelle question correspond à « discutez » ?",
          "paragraphText": "Dans la problématique du sujet 1, la question « La société est-elle la seule source d’inspiration du livre ? » prépare la **discussion** : elle invite à chercher les limites de la thèse.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q7",
            "type": "mcq",
            "prompt": "Dans la problématique « Quel rapport y a-t-il entre la production littéraire et la société ? La société est-elle la seule source d’inspiration du livre ? », à quel verbe de la consigne correspond la seconde question ?",
            "options": [
              "À « discutez » : elle cherche les limites de la thèse",
              "À « expliquez » : elle justifie la thèse",
              "À aucun verbe de la consigne",
              "Au nom de l’auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Est-elle la seule… ? » invite à nuancer : c’est la partie « discutez »."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q1",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on la problématique d’un sujet de dissertation ?",
          "options": [
            "L’ensemble des questions ou des problèmes posés par le sujet",
            "Le résumé de la citation",
            "La liste des œuvres à citer",
            "La conclusion du devoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La problématique pose sous forme de questions le problème à résoudre."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q2",
          "type": "mcq",
          "prompt": "De quoi une bonne problématique doit-elle tenir compte ?",
          "options": [
            "De la thèse de l’auteur et de l’orientation du verbe de la consigne",
            "Uniquement du nom de l’auteur",
            "Du nombre de mots de la citation",
            "Des goûts personnels de l’élève seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Thèse + verbe de la consigne = problématique adaptée au sujet."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q3",
          "type": "mcq",
          "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. Quelle problématique convient ?",
          "options": [
            "Quel rapport y a-t-il entre la production littéraire et la société ? La société est-elle la seule source d’inspiration du livre ?",
            "Qui était Roger Caillois ?",
            "Combien de livres faut-il lire pour réussir ?",
            "Pourquoi le cœur bat-il ?"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la problématique du document : une question pour expliquer, une pour discuter."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q4",
          "type": "mcq",
          "prompt": "Pour le sujet de Roger Caillois sur la littérature et la société, laquelle de ces formulations est une mauvaise problématique ?",
          "options": [
            "« Qu’est-ce que la littérature ? », trop générale et sans lien avec la thèse",
            "« La société est-elle la seule source d’inspiration du livre ? »",
            "« Quel rapport y a-t-il entre la production littéraire et la société ? »",
            "« La littérature reçoit-elle toujours l’empreinte de la société ? »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une question trop large ne permet pas de traiter la thèse de l’auteur."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q5",
          "type": "mcq",
          "prompt": "Voici un sujet : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. Quelle problématique convient ?",
          "options": [
            "La lecture ne sert-elle qu’à nous révéler à nous-mêmes et à nous aider à nous corriger ?",
            "Combien coûte un livre ?",
            "Romain Rolland a-t-il obtenu un prix ?",
            "Faut-il lire le soir ou le matin ?"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle reprend la thèse (se découvrir, se corriger) et ouvre la discussion (« ne … que »)."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q6",
          "type": "mcq",
          "prompt": "Quelle étape vient en dernier dans l’analyse d’un sujet de dissertation ?",
          "options": [
            "La formulation de la problématique",
            "L’explication des mots-clés",
            "L’identification de l’information et de la consigne",
            "La reformulation de l’opinion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La problématique s’appuie sur tout le reste : elle vient en dernier."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p05_q7",
          "type": "mcq",
          "prompt": "Dans la problématique « Quel rapport y a-t-il entre la production littéraire et la société ? La société est-elle la seule source d’inspiration du livre ? », à quel verbe de la consigne correspond la seconde question ?",
          "options": [
            "À « discutez » : elle cherche les limites de la thèse",
            "À « expliquez » : elle justifie la thèse",
            "À aucun verbe de la consigne",
            "Au nom de l’auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Est-elle la seule… ? » invite à nuancer : c’est la partie « discutez »."
        }
      ]
    }
  ]
};
