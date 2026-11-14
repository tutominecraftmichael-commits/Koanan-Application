import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ere_EE_Dissert_littér » séances 1 à 4. Toutes les Premières.
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
  "summary": "Séances 1 à 4 : analyser le sujet (thème, thèse, problématique), rechercher les idées, élaborer le plan détaillé et rédiger une partie du développement, sur les sujets de Roger Caillois et de Romain Rolland.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "1ere_EE_Dissert_littér_S1_Analyser_sujet, S2_Rechercher_idées, S3_Elaborer_plan, S4_Rédiger_partie_dvpment (École numérique)",
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
    },
    {
      "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06",
      "order": 6,
      "title": "Rechercher les idées",
      "summary": "Chercher des idées précises et pertinentes (du côté de l’auteur, de l’œuvre, du lecteur) et les illustrer par des exemples précis.",
      "conceptExplanation": "- Où chercher : dans les différents domaines de la littérature, l’auteur, l’œuvre, le lecteur, en fonction du thème du sujet.\n- Qualités d’une idée : précise, pertinente, en relation étroite avec le sujet et sa problématique. D’anciens sujets de dissertation peuvent aussi fournir des idées.\n- Exemples : chaque idée doit être illustrée par des exemples précis (une œuvre, son auteur, un personnage ou un passage) pour être valable et convaincante.\n- Sujet 1, posé en question : « La littérature n’est-elle pas le reflet de la société ? » Première partie : en quoi la littérature est-elle le reflet de la société ? Sur le plan politique, elle dénonce les dictatures, les rivalités et la démagogie ; sur le plan culturel, elle dénonce des coutumes rétrogrades et l’acculturation, et valorise des cultures méconnues. Seconde partie : quels sont ses autres aspects ? L’expression des sentiments personnels, la recherche du beau, la fiction et l’évasion.\n- Sujet 2 : première partie, en quoi la lecture permet-elle la découverte et la formation de soi ? Seconde partie, est-ce son seul bénéfice ? On découvre aussi les autres, on acquiert des connaissances, on se divertit.",
      "keyRule": "Une idée vaut si elle est précise, pertinente, liée à la problématique… et illustrée par un exemple précis (œuvre, auteur, passage).",
      "formulas": [],
      "workedExample": {
        "title": "Classer des idées pour le sujet 1",
        "statement": "Classer ces exemples dans le plan du sujet 1 : Les Soleils des indépendances (Kourouma) ; Rebelle (Fatou Keïta) ; « Demain dès l’aube » (Hugo) ; La Planète des singes (Pierre Boulle).",
        "methodSteps": [
          "Les Soleils des indépendances dénonce la dictature du parti unique : première partie, plan politique.",
          "Rebelle dénonce le mariage forcé et l’excision : première partie, plan culturel (coutumes rétrogrades).",
          "« Demain dès l’aube » exprime la douleur du poète après la mort de sa fille : seconde partie, sentiments personnels.",
          "La Planète des singes raconte un monde imaginaire dirigé par des singes : seconde partie, fiction et évasion."
        ],
        "conclusion": "Chaque exemple trouve sa place dans une partie et sous un argument précis."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Où chercher",
          "stepTheme": "Auteur, œuvre, lecteur",
          "stepTitle": "Où chercher les idées d’une dissertation ?",
          "paragraphText": "On cherche les idées dans les **différents domaines de la littérature** : **l’auteur**, **l’œuvre**, **le lecteur**, en fonction du thème du sujet. D’anciens sujets de dissertation peuvent aussi aider.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q1",
            "type": "mcq",
            "prompt": "Dans quels domaines faut-il rechercher les idées d’une dissertation littéraire ?",
            "options": [
              "L’auteur, l’œuvre et le lecteur, selon le thème du sujet",
              "Uniquement dans la biographie de l’auteur cité",
              "Uniquement dans le dictionnaire",
              "Dans des faits divers sans rapport avec la littérature"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois pôles de la littérature (auteur, œuvre, lecteur) fournissent les idées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Bonnes idées",
          "stepTheme": "Précises et pertinentes",
          "stepTitle": "Les qualités d’une bonne idée",
          "paragraphText": "Pour avoir de la valeur, une idée doit être **précise**, **pertinente** et en **relation étroite avec le sujet et sa problématique**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q2",
            "type": "mcq",
            "prompt": "Quelles qualités doit avoir une idée pour être utile dans une dissertation ?",
            "options": [
              "Être précise, pertinente et liée étroitement au sujet",
              "Être longue et générale",
              "Être originale même si elle sort du sujet",
              "Être recopiée d’un résumé du texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une idée hors sujet ne compte pas, même si elle est juste."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Sans exemple",
          "stepTheme": "Illustrer toujours",
          "stepTitle": "Une idée sans exemple ne convainc pas",
          "paragraphText": "Une idée doit être **illustrée par des exemples précis** (titre de l’œuvre, auteur, personnage ou passage). Sans exemple, l’argument reste théorique et peu convaincant.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q3",
            "type": "mcq",
            "prompt": "Un élève écrit : « La littérature dénonce les dictatures. » puis passe à une autre idée. Que manque-t-il à son paragraphe ?",
            "options": [
              "Un exemple précis, comme Les Soleils des indépendances d’Ahmadou Kourouma",
              "Une deuxième citation de Roger Caillois",
              "La date de naissance de l’auteur du sujet",
              "Rien : une idée suffit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’exemple rend l’idée concrète et convaincante."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Plan politique",
          "stepTheme": "Sujet 1",
          "stepTitle": "Classer Les Soleils des indépendances",
          "paragraphText": "Dans Les Soleils des indépendances, Ahmadou Kourouma fustige la dictature du parti unique installée après les indépendances : c’est la littérature comme reflet de la vie **politique**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q4",
            "type": "mcq",
            "prompt": "Pour le sujet « La littérature n’est-elle pas le reflet de la société ? », où placer l’exemple : « Les Soleils des indépendances d’Ahmadou Kourouma fustige la dictature du parti unique » ?",
            "options": [
              "Première partie, plan politique : la littérature dénonce les dictatures",
              "Seconde partie : la littérature exprime le beau",
              "Seconde partie : la littérature évoque la fiction",
              "Dans la conclusion, comme ouverture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dénonciation d’une dictature montre que la littérature reflète la société, sur le plan politique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Plan culturel",
          "stepTheme": "Sujet 1",
          "stepTitle": "Classer Rebelle de Fatou Keïta",
          "paragraphText": "Dans Rebelle, Fatou Keïta dénonce l’excision et le mariage forcé (Malimouna s’enfuit pendant sa nuit de noces) : la littérature reflète la société sur le plan **culturel** en dénonçant des coutumes rétrogrades.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q5",
            "type": "mcq",
            "prompt": "Pour le sujet « La littérature n’est-elle pas le reflet de la société ? », quel argument illustre le roman Rebelle de Fatou Keïta, qui dénonce l’excision et le mariage forcé ?",
            "options": [
              "La littérature dénonce certaines coutumes jugées rétrogrades",
              "La littérature exprime les sentiments personnels du poète",
              "La littérature recherche le beau par la forme du poème",
              "La littérature raconte des aventures imaginaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rebelle met en cause des pratiques culturelles : plan culturel de la première partie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Autres aspects",
          "stepTheme": "Sujet 1",
          "stepTitle": "Classer « Demain dès l’aube » de Victor Hugo",
          "paragraphText": "Dans « Demain dès l’aube » (Les Contemplations), Victor Hugo exprime sa douleur après la mort de sa fille : la littérature est aussi l’**expression de sentiments personnels**, ce qui nuance la thèse de Roger Caillois.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q6",
            "type": "mcq",
            "prompt": "Pour le sujet « La littérature n’est-elle pas le reflet de la société ? », à quoi sert l’exemple de « Demain dès l’aube », où Victor Hugo exprime sa douleur après la mort de sa fille ?",
            "options": [
              "À montrer, dans la seconde partie, que la littérature exprime aussi des sentiments personnels",
              "À montrer que la littérature dénonce les dictatures",
              "À montrer que la littérature dénonce l’acculturation",
              "Il ne peut servir à rien dans ce sujet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce poème intime montre un autre aspect de la littérature : c’est l’antithèse."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Sujet 2",
          "stepTheme": "Se divertir",
          "stepTitle": "Classer un roman d’aventure pour le sujet 2",
          "paragraphText": "Pour le sujet de Romain Rolland, la seconde partie montre que la lecture apporte d’autres bénéfices que la connaissance de soi : par exemple le **divertissement**, avec Le Lion de Joseph Kessel ou Témoin à charge d’Agatha Christie.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q7",
            "type": "mcq",
            "prompt": "Pour le sujet « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » (Romain Rolland), quelle idée illustrent Le Lion de Joseph Kessel et Témoin à charge d’Agatha Christie ?",
            "options": [
              "Le lecteur se divertit en lisant (seconde partie)",
              "Le lecteur découvre ses propres défauts et les corrige",
              "Le lecteur s’identifie à un personnage ambitieux",
              "Le lecteur apprend l’histoire de l’empire zoulou"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le roman d’aventure et le roman policier divertissent : un bénéfice qui dépasse la découverte de soi."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q1",
          "type": "mcq",
          "prompt": "Dans quels domaines faut-il rechercher les idées d’une dissertation littéraire ?",
          "options": [
            "L’auteur, l’œuvre et le lecteur, selon le thème du sujet",
            "Uniquement dans la biographie de l’auteur cité",
            "Uniquement dans le dictionnaire",
            "Dans des faits divers sans rapport avec la littérature"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois pôles de la littérature (auteur, œuvre, lecteur) fournissent les idées."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q2",
          "type": "mcq",
          "prompt": "Quelles qualités doit avoir une idée pour être utile dans une dissertation ?",
          "options": [
            "Être précise, pertinente et liée étroitement au sujet",
            "Être longue et générale",
            "Être originale même si elle sort du sujet",
            "Être recopiée d’un résumé du texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une idée hors sujet ne compte pas, même si elle est juste."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q3",
          "type": "mcq",
          "prompt": "Un élève écrit : « La littérature dénonce les dictatures. » puis passe à une autre idée. Que manque-t-il à son paragraphe ?",
          "options": [
            "Un exemple précis, comme Les Soleils des indépendances d’Ahmadou Kourouma",
            "Une deuxième citation de Roger Caillois",
            "La date de naissance de l’auteur du sujet",
            "Rien : une idée suffit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’exemple rend l’idée concrète et convaincante."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q4",
          "type": "mcq",
          "prompt": "Pour le sujet « La littérature n’est-elle pas le reflet de la société ? », où placer l’exemple : « Les Soleils des indépendances d’Ahmadou Kourouma fustige la dictature du parti unique » ?",
          "options": [
            "Première partie, plan politique : la littérature dénonce les dictatures",
            "Seconde partie : la littérature exprime le beau",
            "Seconde partie : la littérature évoque la fiction",
            "Dans la conclusion, comme ouverture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dénonciation d’une dictature montre que la littérature reflète la société, sur le plan politique."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q5",
          "type": "mcq",
          "prompt": "Pour le sujet « La littérature n’est-elle pas le reflet de la société ? », quel argument illustre le roman Rebelle de Fatou Keïta, qui dénonce l’excision et le mariage forcé ?",
          "options": [
            "La littérature dénonce certaines coutumes jugées rétrogrades",
            "La littérature exprime les sentiments personnels du poète",
            "La littérature recherche le beau par la forme du poème",
            "La littérature raconte des aventures imaginaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rebelle met en cause des pratiques culturelles : plan culturel de la première partie."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q6",
          "type": "mcq",
          "prompt": "Pour le sujet « La littérature n’est-elle pas le reflet de la société ? », à quoi sert l’exemple de « Demain dès l’aube », où Victor Hugo exprime sa douleur après la mort de sa fille ?",
          "options": [
            "À montrer, dans la seconde partie, que la littérature exprime aussi des sentiments personnels",
            "À montrer que la littérature dénonce les dictatures",
            "À montrer que la littérature dénonce l’acculturation",
            "Il ne peut servir à rien dans ce sujet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce poème intime montre un autre aspect de la littérature : c’est l’antithèse."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p06_q7",
          "type": "mcq",
          "prompt": "Pour le sujet « On ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler » (Romain Rolland), quelle idée illustrent Le Lion de Joseph Kessel et Témoin à charge d’Agatha Christie ?",
          "options": [
            "Le lecteur se divertit en lisant (seconde partie)",
            "Le lecteur découvre ses propres défauts et les corrige",
            "Le lecteur s’identifie à un personnage ambitieux",
            "Le lecteur apprend l’histoire de l’empire zoulou"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le roman d’aventure et le roman policier divertissent : un bénéfice qui dépasse la découverte de soi."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07",
      "order": 7,
      "title": "Élaborer le plan détaillé",
      "summary": "Construire un plan adapté à la problématique, ordonner les parties et classer idées, arguments et exemples précis.",
      "conceptExplanation": "- Le plan doit être adapté à la problématique du sujet : il permet, pas à pas, d’y répondre.\n- Le plan détaillé classe les idées directrices, les arguments et les exemples. Pour chaque exemple, on note l’œuvre, l’auteur et l’élément précis du texte qui illustre l’idée.\n- Ordre des parties : du plus évident au moins évident, du moins important au plus important. Cet ordre peut varier selon ce que l’auteur du devoir juge le plus important.\n- Plan dialectique (ou antithétique) : première partie, la thèse ; seconde partie, l’antithèse. Il convient aux sujets « expliquez et discutez ».\n- Sujet 1 : thèse, la littérature est le reflet de la société ; antithèse, la littérature a d’autres aspects.\n- Sujet 2 : première partie, la lecture permet la découverte et la formation de soi ; seconde partie, la lecture ouvre à d’autres découvertes en dehors de soi (les autres, les connaissances, le divertissement).\n- Remarque : dans les séances 3 et 4, le document n’écrit plus que « expliquez » pour le sujet 2, mais garde un plan en deux parties. La consigne complète est bien « expliquez et discutez ».",
      "keyRule": "Plan dialectique : thèse puis antithèse. Plan détaillé : pour chaque partie, des arguments et des exemples précis (œuvre, auteur, élément du texte).",
      "formulas": [],
      "workedExample": {
        "title": "Évaluation corrigée : le plan détaillé du sujet 2",
        "statement": "En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler.",
        "methodSteps": [
          "Première partie : en quoi la lecture permet-elle la découverte et la formation de soi ? Le livre est un miroir : on s’identifie aux personnages, à leurs joies et à leurs peines ; on découvre ses travers et on les corrige.",
          "Seconde partie : est-ce son seul bénéfice ? On découvre les autres (cultures, sentiments), on acquiert des connaissances, on se divertit.",
          "Exemples : Le Père Goriot, Phèdre, Les Soleils des indépendances, L’Avare… puis Le monde s’effondre, Une si longue lettre, Germinal, Le Lion…"
        ],
        "conclusion": "Le plan suit la problématique : une partie pour expliquer, une partie pour discuter."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepBadge": "Plan adapté",
          "stepTheme": "Répondre à la problématique",
          "stepTitle": "À quoi doit répondre le plan ?",
          "paragraphText": "Le plan doit être **adapté à la problématique** du sujet : dans son cheminement, il permet de **trouver une réponse** à la question posée.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q1",
            "type": "mcq",
            "prompt": "À quoi le plan d’une dissertation doit-il être adapté ?",
            "options": [
              "À la problématique du sujet, pour y répondre pas à pas",
              "Au nombre de livres que l’élève a lus",
              "À la longueur de la citation",
              "À l’ordre alphabétique des auteurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le plan est le chemin qui mène à la réponse à la problématique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Plan détaillé",
          "stepTheme": "Idées, arguments, exemples",
          "stepTitle": "Ce que contient un plan détaillé",
          "paragraphText": "Le **plan détaillé** classe les **idées directrices**, les **arguments** et les **exemples**. Pour un exemple, il ne suffit pas de citer l’œuvre et l’auteur : on relève aussi **l’élément du texte** qui illustre le propos.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q2",
            "type": "mcq",
            "prompt": "Que doit contenir un plan détaillé de dissertation ?",
            "options": [
              "Les idées directrices, les arguments et des exemples précis tirés des œuvres",
              "Seulement les titres des deux parties",
              "Seulement la liste des auteurs",
              "L’introduction et la conclusion rédigées"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le plan détaillé prépare chaque paragraphe : idée, arguments, exemples."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Plan dialectique",
          "stepTheme": "Thèse puis antithèse",
          "stepTitle": "Qu’est-ce qu’un plan dialectique ?",
          "paragraphText": "Le **plan dialectique** (ou antithétique) présente d’abord la **thèse** (on explique le point de vue de l’auteur), puis l’**antithèse** (on en montre les limites). Il convient aux sujets « expliquez et discutez ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q3",
            "type": "mcq",
            "prompt": "Comment s’organise un plan dialectique ?",
            "options": [
              "Première partie la thèse, seconde partie l’antithèse",
              "Première partie l’antithèse, seconde partie la conclusion",
              "Une seule partie qui résume la citation",
              "Trois parties sur trois auteurs différents"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Thèse puis antithèse : on explique, puis on discute."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Sujet 1",
          "stepTheme": "Les deux parties",
          "stepTitle": "Le plan du sujet de Roger Caillois",
          "paragraphText": "Pour le sujet de Roger Caillois, la thèse est que **la littérature est le reflet de la société** ; l’antithèse, que **la littérature a d’autres aspects** (sentiments personnels, beauté, fiction).",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q4",
            "type": "mcq",
            "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. Quel plan convient ?",
            "options": [
              "1. La littérature est le reflet de la société ; 2. La littérature a d’autres aspects",
              "1. La vie de Roger Caillois ; 2. Ses œuvres",
              "1. Le roman ; 2. Le théâtre ; 3. La poésie",
              "1. Résumé de la citation ; 2. Recopie de la consigne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Plan dialectique : thèse (reflet de la société) puis antithèse (autres aspects)."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Plan détaillé du sujet 1 (plan dialectique)",
            "caption": "Thèse puis antithèse ; chaque argument est illustré par des œuvres précises.",
            "tableData": {
              "headers": [
                "Partie",
                "Arguments",
                "Exemples"
              ],
              "rows": [
                [
                  "1re partie (thèse) : la littérature est le reflet de la société",
                  "Plan politique : elle dénonce les dictatures, les rivalités et la démagogie",
                  "Les Soleils des indépendances (Kourouma) ; Les Voix dans le vent (Dadié) ; On se chamaille pour un siège (Kacou)"
                ],
                [
                  "",
                  "Plan culturel : elle dénonce des coutumes et l’acculturation, valorise des cultures",
                  "Rebelle (Fatou Keïta) ; L’Appel des arènes (Aminata Sow Fall) ; « Prière aux masques » (Senghor)"
                ],
                [
                  "2e partie (antithèse) : la littérature a d’autres aspects",
                  "L’expression des sentiments personnels",
                  "Les Contemplations (Hugo) ; « Le Lac » (Lamartine) ; Climbié (Dadié)"
                ],
                [
                  "",
                  "La recherche du beau, de l’esthétique",
                  "Calligrammes (Apollinaire) ; Le Capitaine Fracasse (Gautier)"
                ],
                [
                  "",
                  "La fiction et l’évasion",
                  "La Planète des singes (Boulle) ; Vingt mille lieues sous les mers (Verne)"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Ordre des parties",
          "stepTheme": "Du moins au plus",
          "stepTitle": "Dans quel ordre ranger les parties ?",
          "paragraphText": "Les grandes parties vont **du plus évident au moins évident**, **du moins important au plus important**. Cet ordre peut varier selon ce que l’auteur du devoir juge le plus important.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q5",
            "type": "mcq",
            "prompt": "Selon le cours, dans quel ordre présenter les grandes parties d’un plan ?",
            "options": [
              "Du plus évident au moins évident, du moins important au plus important",
              "Du plus important au moins important, toujours",
              "Dans l’ordre où les idées sont venues",
              "Dans l’ordre chronologique de publication des œuvres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On garde l’argument le plus fort pour la fin."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Sujet 2",
          "stepTheme": "Seconde partie",
          "stepTitle": "La seconde partie du plan du sujet 2",
          "paragraphText": "Pour le sujet de Romain Rolland, la seconde partie répond à « Est-ce son seul bénéfice ? » : la lecture **ouvre à d’autres découvertes en dehors de soi** (les cultures et les sentiments des autres, les connaissances, le divertissement).",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q6",
            "type": "mcq",
            "prompt": "Voici un sujet : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. Quelle idée directrice convient pour la seconde partie du plan ?",
            "options": [
              "La lecture ouvre à d’autres découvertes en dehors de soi",
              "La lecture permet la découverte et la formation de soi",
              "Le livre est un miroir qui renvoie au lecteur son image",
              "La lecture fait découvrir ses travers et les corriger"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois autres propositions appartiennent à la première partie (l’explication)."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Plan détaillé du sujet 2 (évaluation corrigée)",
            "caption": "Première partie : la découverte de soi ; seconde partie : les autres bénéfices de la lecture.",
            "tableData": {
              "headers": [
                "Partie",
                "Arguments",
                "Exemples"
              ],
              "rows": [
                [
                  "1re partie : la lecture permet la découverte et la formation de soi",
                  "Le livre est un miroir : on s’identifie aux personnages, à leurs joies et à leurs peines",
                  "Le Père Goriot (Balzac) ; Phèdre (Racine) ; Les Soleils des indépendances (Kourouma) ; Soundjata (Niane)"
                ],
                [
                  "",
                  "On découvre ses travers et on les corrige",
                  "L’Avare (Molière) ; « La Cigale et la Fourmi » (La Fontaine) ; Monsieur Thôgô-Gnini (Dadié)"
                ],
                [
                  "2e partie : la lecture ouvre à d’autres découvertes en dehors de soi",
                  "On découvre les cultures et les sentiments des autres",
                  "Le monde s’effondre (Achebe) ; Une si longue lettre (Mariama Bâ) ; Une vie (Maupassant)"
                ],
                [
                  "",
                  "On acquiert des connaissances",
                  "Chaka (Thomas Mofolo) ; L’Enfant noir (Camara Laye) ; Germinal (Zola)"
                ],
                [
                  "",
                  "On se divertit",
                  "Le Lion (Kessel) ; Témoin à charge (Agatha Christie)"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Exemple précis",
          "stepTheme": "Œuvre, auteur, élément",
          "stepTitle": "Un exemple doit citer un élément du texte",
          "paragraphText": "Un bon exemple donne l’**œuvre**, l’**auteur** et l’**élément précis** du texte : « Rebelle de Fatou Keïta : la fuite de Malimouna pendant sa nuit de noces dénonce le mariage forcé. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces notes de plan est un exemple bien rédigé pour l’idée « la littérature dénonce le mariage forcé » ?",
            "options": [
              "Rebelle de Fatou Keïta : la fuite de Malimouna pendant sa nuit de noces dénonce le mariage forcé",
              "Fatou Keïta a écrit des livres",
              "Il existe des romans sur le mariage",
              "Le mariage forcé est un problème"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seul le premier donne l’œuvre, l’auteur et l’élément précis du texte."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q1",
          "type": "mcq",
          "prompt": "À quoi le plan d’une dissertation doit-il être adapté ?",
          "options": [
            "À la problématique du sujet, pour y répondre pas à pas",
            "Au nombre de livres que l’élève a lus",
            "À la longueur de la citation",
            "À l’ordre alphabétique des auteurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le plan est le chemin qui mène à la réponse à la problématique."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q2",
          "type": "mcq",
          "prompt": "Que doit contenir un plan détaillé de dissertation ?",
          "options": [
            "Les idées directrices, les arguments et des exemples précis tirés des œuvres",
            "Seulement les titres des deux parties",
            "Seulement la liste des auteurs",
            "L’introduction et la conclusion rédigées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le plan détaillé prépare chaque paragraphe : idée, arguments, exemples."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q3",
          "type": "mcq",
          "prompt": "Comment s’organise un plan dialectique ?",
          "options": [
            "Première partie la thèse, seconde partie l’antithèse",
            "Première partie l’antithèse, seconde partie la conclusion",
            "Une seule partie qui résume la citation",
            "Trois parties sur trois auteurs différents"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Thèse puis antithèse : on explique, puis on discute."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q4",
          "type": "mcq",
          "prompt": "Voici un sujet : « Toute littérature participe d’une civilisation, aucun livre ne sort des battements d’un cœur. Une littérature existe dans une société et en reçoit l’empreinte. » Expliquez et discutez ce point de vue de Roger Caillois en vous appuyant sur les œuvres que vous avez lues ou étudiées. Quel plan convient ?",
          "options": [
            "1. La littérature est le reflet de la société ; 2. La littérature a d’autres aspects",
            "1. La vie de Roger Caillois ; 2. Ses œuvres",
            "1. Le roman ; 2. Le théâtre ; 3. La poésie",
            "1. Résumé de la citation ; 2. Recopie de la consigne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plan dialectique : thèse (reflet de la société) puis antithèse (autres aspects)."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q5",
          "type": "mcq",
          "prompt": "Selon le cours, dans quel ordre présenter les grandes parties d’un plan ?",
          "options": [
            "Du plus évident au moins évident, du moins important au plus important",
            "Du plus important au moins important, toujours",
            "Dans l’ordre où les idées sont venues",
            "Dans l’ordre chronologique de publication des œuvres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On garde l’argument le plus fort pour la fin."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q6",
          "type": "mcq",
          "prompt": "Voici un sujet : En vous appuyant sur votre expérience personnelle de lecteur d’œuvres littéraires, expliquez et discutez le propos de Romain Rolland selon lequel on ne lit jamais un livre ; on se lit à travers les livres, soit pour se découvrir, soit pour se contrôler. Quelle idée directrice convient pour la seconde partie du plan ?",
          "options": [
            "La lecture ouvre à d’autres découvertes en dehors de soi",
            "La lecture permet la découverte et la formation de soi",
            "Le livre est un miroir qui renvoie au lecteur son image",
            "La lecture fait découvrir ses travers et les corriger"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois autres propositions appartiennent à la première partie (l’explication)."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p07_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces notes de plan est un exemple bien rédigé pour l’idée « la littérature dénonce le mariage forcé » ?",
          "options": [
            "Rebelle de Fatou Keïta : la fuite de Malimouna pendant sa nuit de noces dénonce le mariage forcé",
            "Fatou Keïta a écrit des livres",
            "Il existe des romans sur le mariage",
            "Le mariage forcé est un problème"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seul le premier donne l’œuvre, l’auteur et l’élément précis du texte."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08",
      "order": 8,
      "title": "Rédiger un paragraphe argumentatif",
      "summary": "Construire les paragraphes du développement (idée directrice, arguments, exemples), choisir un raisonnement et insérer les exemples.",
      "conceptExplanation": "- La dissertation compte trois grandes articulations : l’introduction, le développement, la conclusion. Le développement a deux parties, les deux axes du plan.\n- Chaque partie est une succession de paragraphes argumentatifs. Un paragraphe argumentatif développe une seule idée et se signale par la mise en page (un alinéa).\n- Il contient : une phrase qui présente l’idée directrice ; des arguments qui la justifient, reliés par des connecteurs logiques (d’abord, aussi, ensuite, en outre, par ailleurs, enfin) ; des exemples qui illustrent les arguments et les rendent concrets.\n- Si l’on passe à une autre idée directrice, on change de paragraphe.\n- Raisonnement déductif : idée directrice, puis arguments, puis exemples. Raisonnement inductif : exemples, puis arguments, puis idée directrice. Raisonnement par analogie ou par confrontation : mise en parallèle par comparaison ou par opposition.\n- Formules pour introduire un exemple : « Ainsi… », « C’est ainsi que… », « L’exemple de … montre bien cela », « Qu’il suffise de rappeler… », « Ce fait est illustré par… », « Prenons le cas de… », « On peut songer à… ».\n- Une phrase de transition clôt la partie et annonce la suivante, par exemple : « Bien que la littérature soit le reflet de la société, elle regorge d’autres aspects. »",
      "keyRule": "Un paragraphe = une idée directrice + des arguments reliés par des connecteurs + des exemples introduits par une formule (« Prenons le cas de… »).",
      "formulas": [],
      "workedExample": {
        "title": "Analyser un paragraphe rédigé (sujet 1, première partie)",
        "statement": "« La littérature reflète différents aspects de la vie sociale. D’abord, elle dénonce les régimes dictatoriaux. En effet, les gouvernants usent souvent de violences et de pratiques antidémocratiques. C’est le cas de l’œuvre romanesque Les Soleils des indépendances d’Ahmadou Kourouma, où celui-ci fustige la dictature du parti unique. »",
        "methodSteps": [
          "Idée directrice : « La littérature reflète différents aspects de la vie sociale. »",
          "Argument introduit par un connecteur : « D’abord, elle dénonce les régimes dictatoriaux », expliqué par « En effet… ».",
          "Exemple introduit par une formule : « C’est le cas de… Les Soleils des indépendances ».",
          "Ordre idée, argument, exemple : raisonnement déductif."
        ],
        "conclusion": "Le paragraphe suit le schéma déductif et insère son exemple avec une formule adaptée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Paragraphe",
          "stepTheme": "Une idée",
          "stepTitle": "Qu’est-ce qu’un paragraphe argumentatif ?",
          "paragraphText": "Le développement est une **succession de paragraphes argumentatifs**. Un paragraphe argumentatif développe **une idée** et se signale par la **mise en page** (un alinéa).",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’un paragraphe argumentatif dans le développement d’une dissertation ?",
            "options": [
              "Une sous-partie qui développe une idée, signalée par un alinéa",
              "Une liste de titres d’œuvres",
              "Une citation recopiée sans commentaire",
              "Le résumé de toute la dissertation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une idée par paragraphe, signalée par la mise en page."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Composantes",
          "stepTheme": "Idée, arguments, exemples",
          "stepTitle": "Les trois éléments d’un paragraphe",
          "paragraphText": "Chaque paragraphe comporte : une **phrase qui présente l’idée directrice**, des **arguments** qui la justifient, et des **exemples** qui illustrent les arguments.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q2",
            "type": "mcq",
            "prompt": "Quels sont les trois éléments d’un paragraphe argumentatif ?",
            "options": [
              "L’idée directrice, les arguments et les exemples",
              "Le titre, le sous-titre et la date",
              "La citation, la consigne et la problématique",
              "L’introduction, la transition et la conclusion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Idée directrice + arguments + exemples."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Changer de paragraphe",
          "stepTheme": "Une idée par paragraphe",
          "stepTitle": "Quand faut-il changer de paragraphe ?",
          "paragraphText": "Si l’on passe à **une autre idée directrice**, il faut **changer de paragraphe**. Mélanger deux idées dans le même paragraphe rend le devoir confus.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q3",
            "type": "mcq",
            "prompt": "Dans un même paragraphe, un élève parle de la dénonciation des dictatures puis de la valorisation des masques africains. Que doit-il faire ?",
            "options": [
              "Changer de paragraphe, car il passe à une autre idée directrice",
              "Rien : un paragraphe peut contenir toutes les idées",
              "Supprimer les exemples",
              "Mettre les deux idées dans la conclusion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux idées directrices différentes = deux paragraphes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Déductif",
          "stepTheme": "Idée d’abord",
          "stepTitle": "Le raisonnement déductif",
          "paragraphText": "Dans le **raisonnement déductif**, on part de l’**idée directrice**, on la justifie par des **arguments**, puis on l’illustre par des **exemples**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q4",
            "type": "mcq",
            "prompt": "Dans quel ordre se construit un paragraphe au raisonnement déductif ?",
            "options": [
              "Idée directrice, puis arguments, puis exemples",
              "Exemples, puis arguments, puis idée directrice",
              "Exemples seulement",
              "Conclusion, puis idée directrice"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Déductif : de l’idée générale vers les exemples."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Inductif",
          "stepTheme": "Exemples d’abord",
          "stepTitle": "Le raisonnement inductif",
          "paragraphText": "Dans le **raisonnement inductif**, on part des **exemples**, on en tire des **arguments**, et on aboutit à l’**idée directrice**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q5",
            "type": "mcq",
            "prompt": "Un paragraphe commence par trois exemples d’œuvres et se termine par l’idée qu’ils démontrent. Quel raisonnement suit-il ?",
            "options": [
              "Le raisonnement inductif",
              "Le raisonnement déductif",
              "Le raisonnement par analogie",
              "Aucun raisonnement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Inductif : des exemples vers l’idée générale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Insérer un exemple",
          "stepTheme": "Formules",
          "stepTitle": "Comment introduire un exemple ?",
          "paragraphText": "Pour bien insérer un exemple, on utilise des formules : « Ainsi… », « C’est ainsi que… », « L’exemple de … montre bien cela », « Ce fait est illustré par… », « **Prenons le cas de…** », « On peut songer à… ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces formules sert à introduire un exemple dans un paragraphe ?",
            "options": [
              "« Prenons le cas de… »",
              "« En conclusion… »",
              "« Premièrement, la problématique est… »",
              "« Pour résumer le sujet… »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Prenons le cas de… » annonce un exemple ; les autres formules annoncent autre chose."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Connecteurs",
          "stepTheme": "Ajouter un argument",
          "stepTitle": "Relier les arguments entre eux",
          "paragraphText": "Les arguments sont reliés à l’idée directrice par des **connecteurs logiques** : d’abord, aussi, ensuite, **en outre**, par ailleurs, enfin.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q7",
            "type": "mcq",
            "prompt": "Quel connecteur logique permet d’ajouter un nouvel argument dans un paragraphe ?",
            "options": [
              "En outre",
              "Pourtant",
              "Donc",
              "Bien que"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« En outre » ajoute un argument ; « pourtant » et « bien que » opposent, « donc » conclut."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepBadge": "Transition",
          "stepTheme": "Vers l’antithèse",
          "stepTitle": "La phrase de transition entre les deux parties",
          "paragraphText": "À la fin de la première partie, une **phrase de transition** résume ce qui précède et annonce la suite : « Bien que la littérature soit le reflet de la société, elle regorge d’autres aspects. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q8",
            "type": "mcq",
            "prompt": "À quoi sert la phrase « Bien que la littérature soit le reflet de la société, elle regorge d’autres aspects », placée à la fin de la première partie du sujet de Roger Caillois ?",
            "options": [
              "À faire la transition : elle résume la thèse et annonce l’antithèse",
              "À conclure toute la dissertation",
              "À introduire un exemple",
              "À poser la problématique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Bien que… » rappelle la thèse ; « elle regorge d’autres aspects » annonce la seconde partie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’un paragraphe argumentatif dans le développement d’une dissertation ?",
          "options": [
            "Une sous-partie qui développe une idée, signalée par un alinéa",
            "Une liste de titres d’œuvres",
            "Une citation recopiée sans commentaire",
            "Le résumé de toute la dissertation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une idée par paragraphe, signalée par la mise en page."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q2",
          "type": "mcq",
          "prompt": "Quels sont les trois éléments d’un paragraphe argumentatif ?",
          "options": [
            "L’idée directrice, les arguments et les exemples",
            "Le titre, le sous-titre et la date",
            "La citation, la consigne et la problématique",
            "L’introduction, la transition et la conclusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Idée directrice + arguments + exemples."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q3",
          "type": "mcq",
          "prompt": "Dans un même paragraphe, un élève parle de la dénonciation des dictatures puis de la valorisation des masques africains. Que doit-il faire ?",
          "options": [
            "Changer de paragraphe, car il passe à une autre idée directrice",
            "Rien : un paragraphe peut contenir toutes les idées",
            "Supprimer les exemples",
            "Mettre les deux idées dans la conclusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux idées directrices différentes = deux paragraphes."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q4",
          "type": "mcq",
          "prompt": "Dans quel ordre se construit un paragraphe au raisonnement déductif ?",
          "options": [
            "Idée directrice, puis arguments, puis exemples",
            "Exemples, puis arguments, puis idée directrice",
            "Exemples seulement",
            "Conclusion, puis idée directrice"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Déductif : de l’idée générale vers les exemples."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q5",
          "type": "mcq",
          "prompt": "Un paragraphe commence par trois exemples d’œuvres et se termine par l’idée qu’ils démontrent. Quel raisonnement suit-il ?",
          "options": [
            "Le raisonnement inductif",
            "Le raisonnement déductif",
            "Le raisonnement par analogie",
            "Aucun raisonnement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Inductif : des exemples vers l’idée générale."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces formules sert à introduire un exemple dans un paragraphe ?",
          "options": [
            "« Prenons le cas de… »",
            "« En conclusion… »",
            "« Premièrement, la problématique est… »",
            "« Pour résumer le sujet… »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Prenons le cas de… » annonce un exemple ; les autres formules annoncent autre chose."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q7",
          "type": "mcq",
          "prompt": "Quel connecteur logique permet d’ajouter un nouvel argument dans un paragraphe ?",
          "options": [
            "En outre",
            "Pourtant",
            "Donc",
            "Bien que"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« En outre » ajoute un argument ; « pourtant » et « bien que » opposent, « donc » conclut."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p08_q8",
          "type": "mcq",
          "prompt": "À quoi sert la phrase « Bien que la littérature soit le reflet de la société, elle regorge d’autres aspects », placée à la fin de la première partie du sujet de Roger Caillois ?",
          "options": [
            "À faire la transition : elle résume la thèse et annonce l’antithèse",
            "À conclure toute la dissertation",
            "À introduire un exemple",
            "À poser la problématique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Bien que… » rappelle la thèse ; « elle regorge d’autres aspects » annonce la seconde partie."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09",
      "order": 9,
      "title": "Une partie rédigée : analyse et corrections du document",
      "summary": "Étudier les parties rédigées des sujets 1 et 2, repérer leur construction et corriger les erreurs du document.",
      "conceptExplanation": "- Sujet 1, première partie rédigée : la littérature reflète la vie sociale. Elle dénonce les dictatures (Les Soleils des indépendances d’Ahmadou Kourouma ; Les Voix dans le vent de Bernard Dadié, satire du dictateur Nahoubou), les rivalités et la démagogie politiques (On se chamaille pour un siège de Hyacinthe Kacou ; Tribaliques d’Henri Lopes), des coutumes (Rebelle de Fatou Keïta), l’acculturation (L’Appel des arènes d’Aminata Sow Fall) ; elle valorise des cultures (« Prière aux masques » de Senghor).\n- Sujet 2, première partie rédigée : le lecteur s’identifie aux personnages (Rastignac dans Le Père Goriot de Balzac ; Phèdre de Racine), partage leurs joies et leurs peines (Fama dans Les Soleils des indépendances ; Chaka de Senghor ; Soundjata ; L’Ordonnance de Soro Guéfala), découvre ses travers et les corrige (L’Avare de Molière ; « La Cigale et la Fourmi » de La Fontaine ; Monsieur Thôgô-Gnini de Dadié ; « La fuite de la main habile » dans Tribaliques).\n- Corrections du document : Rastignac est un jeune étudiant en droit, pas un « médecin » ; Balzac (et non « Balsac ») ; Hippolyte (et non « Hyppolite »), fils de Thésée, dans Phèdre de Racine ; Jules Verne (et non « Vernes »), et le « monstre » de Vingt mille lieues sous les mers est en réalité le sous-marin Nautilus du capitaine Nemo ; Cheikh Hamidou Kane (et non « Cheick Amidou »), auteur de L’Aventure ambiguë ; Une vie de Maupassant (1883) se déroule dans la première moitié du XIXe siècle, pas à la fin ; L’Enfant noir de Camara Laye raconte une enfance guinéenne des années 1930, donc à l’époque coloniale et non « avant la colonisation » ; Climbié mène son héros jusqu’à Gorée (et non « Goré »), au Sénégal.",
      "keyRule": "Dans un exemple, l’œuvre, l’auteur et le détail cité doivent être exacts : une erreur de personnage ou de date affaiblit l’argument.",
      "formulas": [],
      "workedExample": {
        "title": "Évaluation corrigée : un paragraphe du sujet 2",
        "statement": "« Ensuite, en s’identifiant aux personnages, le lecteur partage leurs peines et leurs joies. Ainsi, la détresse et la frustration de Fama, personnage principal des Soleils des indépendances d’Ahmadou Kourouma, étreignent le cœur dès l’entame de l’œuvre. »",
        "methodSteps": [
          "Connecteur : « Ensuite » ajoute une nouvelle idée.",
          "Idée directrice : le lecteur partage les peines et les joies des personnages.",
          "Formule d’insertion : « Ainsi » introduit l’exemple de Fama."
        ],
        "conclusion": "Paragraphe déductif : idée, puis exemple précis (personnage, œuvre, auteur)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Identifier le raisonnement",
          "stepTheme": "Sujet 1",
          "stepTitle": "Le raisonnement du premier paragraphe",
          "paragraphText": "Le paragraphe commence par l’idée « La littérature reflète différents aspects de la vie sociale », la justifie (« D’abord, elle dénonce les régimes dictatoriaux… En effet… »), puis donne l’exemple des Soleils des indépendances.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q1",
            "type": "mcq",
            "prompt": "Un paragraphe commence par « La littérature reflète différents aspects de la vie sociale », continue par « D’abord, elle dénonce les régimes dictatoriaux. En effet, les gouvernants usent de violences… » et finit par « C’est le cas des Soleils des indépendances d’Ahmadou Kourouma ». Quel raisonnement suit-il ?",
            "options": [
              "Le raisonnement déductif : idée, arguments, exemple",
              "Le raisonnement inductif : exemples, puis idée",
              "Le raisonnement par analogie",
              "Il n’a pas de raisonnement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il part de l’idée générale et finit par l’exemple : c’est déductif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Les Voix dans le vent",
          "stepTheme": "Sujet 1",
          "stepTitle": "Quel argument illustre Les Voix dans le vent ?",
          "paragraphText": "Dans la pièce Les Voix dans le vent, Bernard Dadié fait la **satire du dictateur Nahoubou** : l’exemple illustre la dénonciation des régimes dictatoriaux.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q2",
            "type": "mcq",
            "prompt": "Dans la partie rédigée du sujet de Roger Caillois, quel argument illustre la pièce Les Voix dans le vent de Bernard Dadié, où l’auteur fait la satire du dictateur Nahoubou ?",
            "options": [
              "La littérature dénonce les régimes dictatoriaux",
              "La littérature exprime le beau par la typographie",
              "La littérature valorise le culte des masques",
              "La littérature fait voyager sous les mers"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une satire de dictateur sert l’argument politique de la première partie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Rastignac",
          "stepTheme": "Correction",
          "stepTitle": "Rastignac n’est pas médecin",
          "paragraphText": "Le corrigé présente Eugène de Rastignac comme un « jeune médecin ambitieux » venu « étudier le droit » : c’est contradictoire. Dans Le Père Goriot de **Balzac**, Rastignac est un **étudiant en droit** ambitieux ; l’étudiant en médecine est son ami Bianchon.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q3",
            "type": "mcq",
            "prompt": "Dans Le Père Goriot de Balzac, qui est Eugène de Rastignac ?",
            "options": [
              "Un jeune étudiant en droit ambitieux, venu d’Angoulême à Paris",
              "Un vieux médecin parisien",
              "Le père de Goriot",
              "Un capitaine de navire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rastignac étudie le droit ; le corrigé se trompe en l’appelant « médecin »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Fama",
          "stepTheme": "Sujet 2",
          "stepTitle": "À quoi sert l’exemple de Fama ?",
          "paragraphText": "Dans la partie rédigée du sujet 2, la détresse de **Fama**, héros des Soleils des indépendances, montre que le lecteur **partage les peines et les joies** des personnages auxquels il s’identifie.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q4",
            "type": "mcq",
            "prompt": "Dans le développement du sujet « on se lit à travers les livres » (Romain Rolland), quelle idée illustre la détresse de Fama, personnage principal des Soleils des indépendances d’Ahmadou Kourouma ?",
            "options": [
              "Le lecteur partage les peines et les joies des personnages",
              "Le lecteur se divertit avec un roman policier",
              "Le lecteur découvre la culture ibo",
              "Le lecteur apprend à écrire des calligrammes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En s’identifiant à Fama, le lecteur ressent sa détresse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Se corriger",
          "stepTheme": "Sujet 2",
          "stepTitle": "L’Avare et « La Cigale et la Fourmi »",
          "paragraphText": "La satire fait découvrir au lecteur **ses propres travers** et l’invite à les **corriger** : L’Avare de Molière ridiculise l’avarice, « La Cigale et la Fourmi » de La Fontaine dénonce la paresse.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q5",
            "type": "mcq",
            "prompt": "Dans le développement du sujet de Romain Rolland (« on se lit… pour se contrôler »), quelle idée illustrent L’Avare de Molière et « La Cigale et la Fourmi » de La Fontaine ?",
            "options": [
              "La lecture fait découvrir ses travers et pousse à les corriger",
              "La lecture fait découvrir des cultures lointaines",
              "La lecture apporte des connaissances historiques",
              "La lecture sert seulement à se distraire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La satire de l’avarice et de la paresse invite le lecteur à se corriger."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Une vie",
          "stepTheme": "Correction",
          "stepTitle": "Quand se déroule Une vie de Maupassant ?",
          "paragraphText": "Le document dit qu’Une vie fait découvrir la noblesse « à la fin du XIXe siècle ». Le roman a été publié en **1883**, mais son histoire se déroule dans la **première moitié du XIXe siècle** (à partir de 1819).",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q6",
            "type": "mcq",
            "prompt": "Le roman Une vie de Guy de Maupassant, publié en 1883, raconte la vie de Jeanne, une jeune noble normande. À quelle époque se déroule son histoire ?",
            "options": [
              "Dans la première moitié du XIXe siècle",
              "À la fin du XXe siècle",
              "Au Moyen Âge",
              "Pendant la Seconde Guerre mondiale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’action commence en 1819 : c’est la première moitié du XIXe siècle."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Jules Verne",
          "stepTheme": "Correction",
          "stepTitle": "Le « monstre » de Vingt mille lieues sous les mers",
          "paragraphText": "Le document écrit « Jules VERNES » et parle d’« une bête monstrueuse » en 1866. L’auteur est **Jules Verne**, et le prétendu monstre marin est en réalité le **sous-marin Nautilus** du capitaine Nemo.",
          "exercise": {
            "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q7",
            "type": "mcq",
            "prompt": "Dans Vingt mille lieues sous les mers de Jules Verne, qu’est en réalité le « monstre » qui inquiète les marins en 1866 ?",
            "options": [
              "Le sous-marin Nautilus du capitaine Nemo",
              "Une baleine blanche géante",
              "Un dragon des mers",
              "Un navire négrier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le « monstre » est le Nautilus : le roman reste une fiction d’anticipation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q1",
          "type": "mcq",
          "prompt": "Un paragraphe commence par « La littérature reflète différents aspects de la vie sociale », continue par « D’abord, elle dénonce les régimes dictatoriaux. En effet, les gouvernants usent de violences… » et finit par « C’est le cas des Soleils des indépendances d’Ahmadou Kourouma ». Quel raisonnement suit-il ?",
          "options": [
            "Le raisonnement déductif : idée, arguments, exemple",
            "Le raisonnement inductif : exemples, puis idée",
            "Le raisonnement par analogie",
            "Il n’a pas de raisonnement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il part de l’idée générale et finit par l’exemple : c’est déductif."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q2",
          "type": "mcq",
          "prompt": "Dans la partie rédigée du sujet de Roger Caillois, quel argument illustre la pièce Les Voix dans le vent de Bernard Dadié, où l’auteur fait la satire du dictateur Nahoubou ?",
          "options": [
            "La littérature dénonce les régimes dictatoriaux",
            "La littérature exprime le beau par la typographie",
            "La littérature valorise le culte des masques",
            "La littérature fait voyager sous les mers"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une satire de dictateur sert l’argument politique de la première partie."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q3",
          "type": "mcq",
          "prompt": "Dans Le Père Goriot de Balzac, qui est Eugène de Rastignac ?",
          "options": [
            "Un jeune étudiant en droit ambitieux, venu d’Angoulême à Paris",
            "Un vieux médecin parisien",
            "Le père de Goriot",
            "Un capitaine de navire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rastignac étudie le droit ; le corrigé se trompe en l’appelant « médecin »."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q4",
          "type": "mcq",
          "prompt": "Dans le développement du sujet « on se lit à travers les livres » (Romain Rolland), quelle idée illustre la détresse de Fama, personnage principal des Soleils des indépendances d’Ahmadou Kourouma ?",
          "options": [
            "Le lecteur partage les peines et les joies des personnages",
            "Le lecteur se divertit avec un roman policier",
            "Le lecteur découvre la culture ibo",
            "Le lecteur apprend à écrire des calligrammes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En s’identifiant à Fama, le lecteur ressent sa détresse."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q5",
          "type": "mcq",
          "prompt": "Dans le développement du sujet de Romain Rolland (« on se lit… pour se contrôler »), quelle idée illustrent L’Avare de Molière et « La Cigale et la Fourmi » de La Fontaine ?",
          "options": [
            "La lecture fait découvrir ses travers et pousse à les corriger",
            "La lecture fait découvrir des cultures lointaines",
            "La lecture apporte des connaissances historiques",
            "La lecture sert seulement à se distraire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La satire de l’avarice et de la paresse invite le lecteur à se corriger."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q6",
          "type": "mcq",
          "prompt": "Le roman Une vie de Guy de Maupassant, publié en 1883, raconte la vie de Jeanne, une jeune noble normande. À quelle époque se déroule son histoire ?",
          "options": [
            "Dans la première moitié du XIXe siècle",
            "À la fin du XXe siècle",
            "Au Moyen Âge",
            "Pendant la Seconde Guerre mondiale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’action commence en 1819 : c’est la première moitié du XIXe siècle."
        },
        {
          "id": "premiere_a1_francais_ee_l03_dissertation_litteraire_p09_q7",
          "type": "mcq",
          "prompt": "Dans Vingt mille lieues sous les mers de Jules Verne, qu’est en réalité le « monstre » qui inquiète les marins en 1866 ?",
          "options": [
            "Le sous-marin Nautilus du capitaine Nemo",
            "Une baleine blanche géante",
            "Un dragon des mers",
            "Un navire négrier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le « monstre » est le Nautilus : le roman reste une fiction d’anticipation."
        }
      ]
    }
  ]
};
