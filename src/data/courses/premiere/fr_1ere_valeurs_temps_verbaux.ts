import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Les valeurs des temps verbaux » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2348
export const FR_1ERE_PL_L09_VALEURS_TEMPS_VERBAUX: CurriculumChapter = {
  "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 9,
  "title": "Leçon 9 : Les valeurs des temps verbaux",
  "summary": "Séduits par le talent d’un journaliste et d’un orateur, les élèves s’organisent, à partir de textes courts, pour identifier les temps verbaux dans le système du récit et dans celui du discours, analyser leurs valeurs d’emploi et les utiliser en contexte.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2348",
  "points": [
    {
      "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01",
      "order": 1,
      "title": "Les temps verbaux et le moment de l’énonciation",
      "summary": "Localiser l’événement du verbe par rapport au moment où il est dit ou écrit.",
      "conceptExplanation": "Les temps verbaux indiquent la position de l’événement par rapport à son auteur, c’est-à-dire par rapport au moment où elle est dite ou écrite, mais pas du tout par rapport au moment où elle est lue.\nL’événement donné par le verbe est donc localisé par rapport au moment de l’énonciation.\nC’est ce repère qui permet de distinguer ensuite les deux grands systèmes : le discours et le récit, qui fonctionnent avec des temps différents.",
      "keyRule": "Le repère d’un temps verbal est le moment de l’énonciation, jamais le moment de la lecture.",
      "formulas": [],
      "workedExample": {
        "title": "Repérer l’énonciation dans le texte de Dadié",
        "statement": "Texte support de Bernard Dadié : « J’ai là mon billet, dans la poche. » Par rapport à quel moment le présent situe-t-il l’action ?",
        "methodSteps": [
          "Le locuteur parle à la première personne et montre son billet.",
          "L’action d’avoir le billet se déroule au moment où il parle.",
          "Le temps est donc localisé par rapport au moment de l’énonciation, celui de la parole du locuteur."
        ],
        "conclusion": "Le présent du texte se comprend par rapport au moment où le locuteur s’exprime."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition des temps verbaux",
          "stepTheme": "Définition des temps verbaux",
          "stepBadge": "Définition des temps verbaux",
          "paragraphText": "• Temps verbaux : ils indiquent la position de l’événement par rapport à son auteur.\nL’événement donné par le verbe est localisé par rapport au moment de l’énonciation.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01_q1",
            "type": "mcq",
            "prompt": "Les temps verbaux localisent l’événement par rapport :",
            "options": [
              "Au moment où le texte est lu",
              "Au moment de l’énonciation, où l’événement est dit ou écrit",
              "À la naissance de l’auteur",
              "À la fin du récit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon insiste : par rapport au moment où l’événement est dit ou écrit, pas où il est lu."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Énonciation, pas lecture",
          "stepTheme": "Énonciation, pas lecture",
          "stepBadge": "Énonciation, pas lecture",
          "paragraphText": "Propriété : deux lecteurs lisant le texte à des années différentes partagent le même repère temporel.\nCe repère est fixé une fois pour toutes par l’auteur au moment de l’énonciation.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01_q2",
            "type": "mcq",
            "prompt": "Pourquoi le moment de la lecture ne sert-il pas de repère ?",
            "options": [
              "Parce que le lecteur est toujours en retard",
              "Parce que la leçon pose que l’événement est localisé par rapport au moment où il est dit ou écrit",
              "Parce que les textes n’ont pas de date",
              "Parce que le présent n’existe pas en lecture"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le repère est celui de l’énonciation, indépendant de chaque lecture."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Identifier le moment de l’énonciation",
          "stepTheme": "Identifier le moment de l’énonciation",
          "stepBadge": "Identifier le moment de l’énonciation",
          "paragraphText": "Méthode : repérer qui parle ou écrit, et à quel moment de son propre discours.\nLes marques de la première personne et les déictiques comme « hier » ou « là » aident à situer ce moment.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01_q3",
            "type": "mcq",
            "prompt": "Dans « Je le sortirai jusqu’à ce qu’il en soit fatigué », le futur se situe par rapport :",
            "options": [
              "Au passé du récit",
              "Au moment où le locuteur parle de son billet",
              "Au moment où le lecteur ouvrira le livre",
              "À un moment inconnu et sans repère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le locuteur projette l’action après son moment de parole : c’est un futur d’énonciation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Confondre auteur et lecteur",
          "stepTheme": "Confondre auteur et lecteur",
          "stepBadge": "Confondre auteur et lecteur",
          "paragraphText": "Piège : calculer les temps du texte à partir de sa propre lecture.\nUn passé du texte reste un passé par rapport à l’énonciation de l’auteur, même si le lecteur lit le texte aujourd’hui.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01_q4",
            "type": "mcq",
            "prompt": "Calculer les temps d’un texte depuis le moment de sa lecture est une erreur car :",
            "options": [
              "Les livres sont anciens",
              "Le repère imposé par la leçon est le moment de l’énonciation de l’auteur",
              "Le lecteur ne connaît pas l’auteur",
              "Les temps changent à chaque lecture"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le repère temporel appartient à l’énonciation, pas à la réception du texte."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le billet de Bernard Dadié",
          "stepTheme": "Le billet de Bernard Dadié",
          "stepBadge": "Le billet de Bernard Dadié",
          "paragraphText": "Exemple : dans le texte de Dadié, le locuteur sort constamment son billet, le regarde, le remet à sa place.\nToutes ces actions au présent se déroulent au moment même où il raconte la scène à son interlocuteur.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01_q5",
            "type": "mcq",
            "prompt": "Dans le texte de Dadié, les présents « je le sors », « je le regarde » décrivent des actions :",
            "options": [
              "Accomplies des années avant l’écriture",
              "Qui se déroulent au moment où le locuteur parle",
              "Imaginaires et impossibles",
              "Postérieures à la lecture du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le présent du discours vaut au moment de l’énonciation du locuteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01_q1",
          "type": "mcq",
          "prompt": "Les temps verbaux localisent l’événement par rapport :",
          "options": [
            "Au moment où le texte est lu",
            "Au moment de l’énonciation, où l’événement est dit ou écrit",
            "À la naissance de l’auteur",
            "À la fin du récit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon insiste : par rapport au moment où l’événement est dit ou écrit, pas où il est lu."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01_q2",
          "type": "mcq",
          "prompt": "Pourquoi le moment de la lecture ne sert-il pas de repère ?",
          "options": [
            "Parce que le lecteur est toujours en retard",
            "Parce que la leçon pose que l’événement est localisé par rapport au moment où il est dit ou écrit",
            "Parce que les textes n’ont pas de date",
            "Parce que le présent n’existe pas en lecture"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le repère est celui de l’énonciation, indépendant de chaque lecture."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01_q3",
          "type": "mcq",
          "prompt": "Dans « Je le sortirai jusqu’à ce qu’il en soit fatigué », le futur se situe par rapport :",
          "options": [
            "Au passé du récit",
            "Au moment où le locuteur parle de son billet",
            "Au moment où le lecteur ouvrira le livre",
            "À un moment inconnu et sans repère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le locuteur projette l’action après son moment de parole : c’est un futur d’énonciation."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01_q4",
          "type": "mcq",
          "prompt": "Calculer les temps d’un texte depuis le moment de sa lecture est une erreur car :",
          "options": [
            "Les livres sont anciens",
            "Le repère imposé par la leçon est le moment de l’énonciation de l’auteur",
            "Le lecteur ne connaît pas l’auteur",
            "Les temps changent à chaque lecture"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le repère temporel appartient à l’énonciation, pas à la réception du texte."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p01_q5",
          "type": "mcq",
          "prompt": "Dans le texte de Dadié, les présents « je le sors », « je le regarde » décrivent des actions :",
          "options": [
            "Accomplies des années avant l’écriture",
            "Qui se déroulent au moment où le locuteur parle",
            "Imaginaires et impossibles",
            "Postérieures à la lecture du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le présent du discours vaut au moment de l’énonciation du locuteur."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02",
      "order": 2,
      "title": "Discours et récit : deux types d’écrits, deux systèmes",
      "summary": "Distinguer le discours, où le locuteur est présent, du récit, où il semble s’effacer.",
      "conceptExplanation": "Le discours et le récit sont deux types de textes différents. Le discours se caractérise par la présence du locuteur dans son texte : il utilise la première personne pour s’exprimer (je, nous, me, moi, notre…). Il se caractérise aussi parfois par la présence du destinataire à travers la deuxième personne (tu, vous, vos, votre…).\nDans le récit, le locuteur semble s’effacer dans son texte : il utilise les pronoms de la troisième personne (il, elle, lui…).\nCes deux types de textes fonctionnent avec des systèmes verbaux différents : le discours autour du présent, le récit autour des temps du passé.",
      "keyRule": "Je et tu signalent le discours ; il et elle signalent le récit où le locuteur s’efface.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les deux textes supports",
        "statement": "Texte 1 de Dadié : un locuteur dit « je » et s’adresse à un « tu ». Texte 2 de Sadji : une jeune fille désignée par « elle ». Lequel est un discours, lequel est un récit ?",
        "methodSteps": [
          "Texte 1 : première personne et destinataire présent, le locuteur est dans son texte : discours.",
          "Texte 2 : troisième personne, le narrateur semble s’effacer : récit.",
          "Chaque texte relèvera donc d’un système de temps différent."
        ],
        "conclusion": "Les pronoms personnels permettent de classer les textes avant même d’étudier leurs temps."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le discours : le locuteur présent",
          "stepTheme": "Le discours : le locuteur présent",
          "stepBadge": "Le discours : le locuteur présent",
          "paragraphText": "• Discours : type de texte caractérisé par la présence du locuteur dans son texte.\nIl s’exprime à la première personne : je, nous, me, moi, notre.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02_q1",
            "type": "mcq",
            "prompt": "Le discours se reconnaît d’abord à :",
            "options": [
              "L’effacement complet du locuteur",
              "La présence du locuteur, qui s’exprime à la première personne",
              "L’usage exclusif du passé simple",
              "L’absence de destinataire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Je, nous, me, moi : le locuteur est présent dans le discours."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le récit : le locuteur effacé",
          "stepTheme": "Le récit : le locuteur effacé",
          "stepBadge": "Le récit : le locuteur effacé",
          "paragraphText": "• Récit : type de texte où le locuteur semble s’effacer.\nIl utilise les pronoms de la troisième personne : il, elle, lui.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02_q2",
            "type": "mcq",
            "prompt": "Dans le récit, le locuteur :",
            "options": [
              "S’adresse sans cesse au lecteur",
              "Semble s’effacer et utilise la troisième personne",
              "Parle toujours à la première personne",
              "Emploie tu et vous"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il, elle, lui : le récit fait comme si personne ne racontait."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La présence du destinataire",
          "stepTheme": "La présence du destinataire",
          "stepBadge": "La présence du destinataire",
          "paragraphText": "Propriété : le discours se caractérise aussi parfois par la présence du destinataire.\nElle se marque par la deuxième personne : tu, vous, vos, votre.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02_q3",
            "type": "mcq",
            "prompt": "La présence du destinataire dans un discours se marque par :",
            "options": [
              "Il et elle",
              "Tu, vous, vos, votre",
              "Le passé simple",
              "Le plus-que-parfait"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La deuxième personne installe l’interlocuteur dans le discours."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Classer un texte sur son seul titre",
          "stepTheme": "Classer un texte sur son seul titre",
          "stepBadge": "Classer un texte sur son seul titre",
          "paragraphText": "Piège : décider discours ou récit d’après le genre affiché du livre.\nSeules les marques dans le texte — personnes et système de temps — permettent le classement.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02_q4",
            "type": "mcq",
            "prompt": "Pour classer un texte en discours ou en récit, il faut examiner :",
            "options": [
              "Son titre et sa couverture",
              "Les personnes employées et son système de temps",
              "Le nombre de pages",
              "La célébrité de l’auteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le classement repose sur les marques textuelles : locuteur présent ou effacé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Maïmouna d’Abdoulaye Sadji",
          "stepTheme": "Maïmouna d’Abdoulaye Sadji",
          "stepBadge": "Maïmouna d’Abdoulaye Sadji",
          "paragraphText": "Exemple : « La jeune fille ne sut que répondre. Elle n’eut pas su non plus dire ce qu’elle éprouvait. »\nLa troisième personne et les temps du passé font de ce texte support un récit.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02_q5",
            "type": "mcq",
            "prompt": "Le texte de Sadji est un récit car :",
            "options": [
              "Le locuteur y dit je à chaque phrase",
              "Il emploie la troisième personne et les temps du récit",
              "Il s’adresse au lecteur avec tu",
              "Il ne contient aucun verbe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Elle », « sut », « eut » : marques du récit dans le texte support."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02_q1",
          "type": "mcq",
          "prompt": "Le discours se reconnaît d’abord à :",
          "options": [
            "L’effacement complet du locuteur",
            "La présence du locuteur, qui s’exprime à la première personne",
            "L’usage exclusif du passé simple",
            "L’absence de destinataire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Je, nous, me, moi : le locuteur est présent dans le discours."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02_q2",
          "type": "mcq",
          "prompt": "Dans le récit, le locuteur :",
          "options": [
            "S’adresse sans cesse au lecteur",
            "Semble s’effacer et utilise la troisième personne",
            "Parle toujours à la première personne",
            "Emploie tu et vous"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il, elle, lui : le récit fait comme si personne ne racontait."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02_q3",
          "type": "mcq",
          "prompt": "La présence du destinataire dans un discours se marque par :",
          "options": [
            "Il et elle",
            "Tu, vous, vos, votre",
            "Le passé simple",
            "Le plus-que-parfait"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La deuxième personne installe l’interlocuteur dans le discours."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02_q4",
          "type": "mcq",
          "prompt": "Pour classer un texte en discours ou en récit, il faut examiner :",
          "options": [
            "Son titre et sa couverture",
            "Les personnes employées et son système de temps",
            "Le nombre de pages",
            "La célébrité de l’auteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le classement repose sur les marques textuelles : locuteur présent ou effacé."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p02_q5",
          "type": "mcq",
          "prompt": "Le texte de Sadji est un récit car :",
          "options": [
            "Le locuteur y dit je à chaque phrase",
            "Il emploie la troisième personne et les temps du récit",
            "Il s’adresse au lecteur avec tu",
            "Il ne contient aucun verbe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Elle », « sut », « eut » : marques du récit dans le texte support."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03",
      "order": 3,
      "title": "Les temps du discours et leurs valeurs",
      "summary": "Présent de référence, futur simple et passé composé dans le système du discours.",
      "conceptExplanation": "Dans le discours, les temps verbaux dominants sont le présent, le futur simple et le passé composé.\nLe présent est le temps de référence du discours : il traduit une action qui se déroule au moment où l’on parle, rend l’action plus vivante et plus touchante, et tient pour vérité les propos du locuteur. Exemple : « J’ai là mon billet ».\nLe futur simple exprime une action qui n’est pas encore produite mais qui est certaine de se produire ; il peut également exprimer une obligation, une injonction. Exemple : « Je le sortirai ».\nLe passé composé évoque des faits passés mais encore proches du présent, ou dont les conséquences sont encore sensibles dans le présent. Exemple : « Combien de fois l’ai-je sorti depuis hier ? »",
      "keyRule": "Discours égale présent de référence, futur certain, passé composé proche du présent.",
      "formulas": [],
      "workedExample": {
        "title": "Les trois temps du texte de Dadié",
        "statement": "Relève dans le texte de Dadié un présent, un futur et un passé composé, avec leur valeur.",
        "methodSteps": [
          "Présent : « j’ai là mon billet » — action au moment de la parole, qui tient les propos pour vrais.",
          "Futur simple : « je le sortirai » — action non encore produite mais certaine.",
          "Passé composé : « combien de fois l’ai-je sorti depuis hier » — fait passé proche, aux conséquences encore sensibles."
        ],
        "conclusion": "Les trois temps dominants du discours sont réunis dans le seul texte support."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le présent, temps de référence",
          "stepTheme": "Le présent, temps de référence",
          "stepBadge": "Le présent, temps de référence",
          "paragraphText": "• Présent du discours : temps de référence du système du discours.\nIl traduit une action qui se déroule au moment où l’on parle.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03_q1",
            "type": "mcq",
            "prompt": "Le présent est, dans le discours :",
            "options": [
              "Un temps secondaire et rare",
              "Le temps de référence, pour une action au moment où l’on parle",
              "Le temps de base du récit",
              "Un temps uniquement écrit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon fait du présent le centre du système du discours."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un présent vivant et authentique",
          "stepTheme": "Un présent vivant et authentique",
          "stepBadge": "Un présent vivant et authentique",
          "paragraphText": "Propriété : le présent rend l’action plus vivante, plus touchante, en réduisant la distance qu’un temps passé établirait.\nIl tient pour vérité les propos du locuteur et donne une valeur authentique au discours.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03_q2",
            "type": "mcq",
            "prompt": "Selon la leçon, le présent du discours a aussi pour effet de :",
            "options": [
              "Éloigner l’action du lecteur",
              "Tenir pour vérité les propos du locuteur et authentifier le discours",
              "Transformer le discours en récit",
              "Supprimer le locuteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Vivacité et valeur de vérité : ce sont les valeurs du présent relevées par la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le futur simple : certitude ou injonction",
          "stepTheme": "Le futur simple : certitude ou injonction",
          "stepBadge": "Le futur simple : certitude ou injonction",
          "paragraphText": "Propriété : le futur simple exprime une action non encore produite mais certaine de se produire.\nIl peut également exprimer une obligation, une injonction.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03_q3",
            "type": "mcq",
            "prompt": "Outre la certitude d’une action à venir, le futur simple peut exprimer :",
            "options": [
              "Un regret du passé",
              "Une obligation, une injonction",
              "Une description de décor",
              "Une habitude ancienne"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Certitude et valeur d’injonction : les deux valeurs du futur simple dans la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Confondre passé composé et passé simple",
          "stepTheme": "Confondre passé composé et passé simple",
          "stepBadge": "Confondre passé composé et passé simple",
          "paragraphText": "Piège : traiter le passé composé du discours comme un passé coupé du présent.\nLe passé composé évoque des faits passés encore proches du présent, dont les conséquences sont encore sensibles.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03_q4",
            "type": "mcq",
            "prompt": "Le passé composé du discours évoque des faits :",
            "options": [
              "Totalement coupés du présent et sans aucune conséquence",
              "Passés mais encore proches du présent, aux conséquences encore sensibles",
              "Qui se produiront demain",
              "Purement imaginaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la valeur du passé composé donnée par la leçon, illustrée par le billet sorti depuis hier."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’exercice de Kidi Bebey",
          "stepTheme": "L’exercice de Kidi Bebey",
          "stepBadge": "L’exercice de Kidi Bebey",
          "paragraphText": "Exemple corrigé : dans le texte de Kidi Bebey, « Écoutez », « vous voulez », « vous savez » sont au présent.\nLe corrigé précise que ce présent actualise les faits et donne l’illusion du réel ; « j’ai eu peur », « j’ai senti » sont au passé composé, pour une action achevée dans le temps.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03_q5",
            "type": "mcq",
            "prompt": "Dans le corrigé de l’exercice 2, le présent de « Écoutez, vous voulez, vous savez » a pour valeur de :",
            "options": [
              "Raconter un décor passé",
              "Actualiser les faits et donner l’illusion du réel",
              "Exprimer une injonction future",
              "Marquer une action très ancienne"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Actualisation et illusion du réel : les valeurs relevées par le corrigé de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03_q1",
          "type": "mcq",
          "prompt": "Le présent est, dans le discours :",
          "options": [
            "Un temps secondaire et rare",
            "Le temps de référence, pour une action au moment où l’on parle",
            "Le temps de base du récit",
            "Un temps uniquement écrit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon fait du présent le centre du système du discours."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03_q2",
          "type": "mcq",
          "prompt": "Selon la leçon, le présent du discours a aussi pour effet de :",
          "options": [
            "Éloigner l’action du lecteur",
            "Tenir pour vérité les propos du locuteur et authentifier le discours",
            "Transformer le discours en récit",
            "Supprimer le locuteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Vivacité et valeur de vérité : ce sont les valeurs du présent relevées par la leçon."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03_q3",
          "type": "mcq",
          "prompt": "Outre la certitude d’une action à venir, le futur simple peut exprimer :",
          "options": [
            "Un regret du passé",
            "Une obligation, une injonction",
            "Une description de décor",
            "Une habitude ancienne"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Certitude et valeur d’injonction : les deux valeurs du futur simple dans la leçon."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03_q4",
          "type": "mcq",
          "prompt": "Le passé composé du discours évoque des faits :",
          "options": [
            "Totalement coupés du présent et sans aucune conséquence",
            "Passés mais encore proches du présent, aux conséquences encore sensibles",
            "Qui se produiront demain",
            "Purement imaginaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la valeur du passé composé donnée par la leçon, illustrée par le billet sorti depuis hier."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p03_q5",
          "type": "mcq",
          "prompt": "Dans le corrigé de l’exercice 2, le présent de « Écoutez, vous voulez, vous savez » a pour valeur de :",
          "options": [
            "Raconter un décor passé",
            "Actualiser les faits et donner l’illusion du réel",
            "Exprimer une injonction future",
            "Marquer une action très ancienne"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Actualisation et illusion du réel : les valeurs relevées par le corrigé de la leçon."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04",
      "order": 4,
      "title": "Les temps du récit et leurs valeurs",
      "summary": "Passé simple de base, imparfait de description et plus-que-parfait dans le système du récit.",
      "conceptExplanation": "Les principaux temps du récit sont le passé simple, l’imparfait et le plus-que-parfait.\nLe passé simple est le temps de base du récit : il exprime une action soudaine, brève et rapide ; il a une valeur accomplie et achevée, parce que l’action qu’il exprime est terminée au moment où le narrateur parle. Exemple du texte de Sadji : « Elle comprit ».\nL’imparfait et le plus-que-parfait servent à traduire une action passée qui dure dans le temps. L’imparfait sert à planter le décor de la scène : c’est le temps de la description. Dans le corrigé de la leçon, le récit du texte 2 présente les passés simples « sut, eut, comprit » et les plus-que-parfaits « avait consulté, s’était détachée ».",
      "keyRule": "Récit égale passé simple pour l’action brève et achevée, imparfait pour le décor qui dure.",
      "formulas": [],
      "workedExample": {
        "title": "Les temps du récit chez Sadji",
        "statement": "Dans le texte de Sadji, relève les temps du récit et donne la valeur de « Elle comprit ».",
        "methodSteps": [
          "Passés simples relevés par le corrigé : sut, eut, comprit.",
          "Plus-que-parfaits relevés : avait consulté, s’était détachée.",
          "« Elle comprit » : action soudaine et achevée, valeur accomplie du passé simple, temps de base du récit."
        ],
        "conclusion": "Le texte support illustre le système complet des temps du récit."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le passé simple, temps de base",
          "stepTheme": "Le passé simple, temps de base",
          "stepBadge": "Le passé simple, temps de base",
          "paragraphText": "• Passé simple : temps de base du récit.\nIl exprime une action soudaine, brève et rapide, accomplie et achevée.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04_q1",
            "type": "mcq",
            "prompt": "Le passé simple est défini dans la leçon comme :",
            "options": [
              "Le temps de référence du discours",
              "Le temps de base du récit, pour une action brève et achevée",
              "Le temps de la description lente",
              "Un temps du futur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Temps de base du récit, valeur accomplie et achevée : c’est sa définition."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’imparfait plante le décor",
          "stepTheme": "L’imparfait plante le décor",
          "stepBadge": "L’imparfait plante le décor",
          "paragraphText": "Propriété : l’imparfait sert à traduire une action passée qui dure dans le temps.\nIl sert à planter le décor de la scène : c’est le temps de la description.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04_q2",
            "type": "mcq",
            "prompt": "L’imparfait est, selon la leçon, le temps :",
            "options": [
              "De l’action soudaine et unique",
              "De la description, qui plante le décor de la scène",
              "De l’injonction",
              "Du dialogue uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Durée et description : les valeurs de l’imparfait dans le système du récit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le plus-que-parfait dans le récit",
          "stepTheme": "Le plus-que-parfait dans le récit",
          "stepBadge": "Le plus-que-parfait dans le récit",
          "paragraphText": "Propriété : le plus-que-parfait, avec l’imparfait, traduit une action passée qui dure ou qui est antérieure dans le passé du récit.\nExemples du corrigé : « avait consulté », « s’était détachée ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04_q3",
            "type": "mcq",
            "prompt": "Dans le corrigé du texte de Sadji, « avait consulté » et « s’était détachée » sont :",
            "options": [
              "Des présents",
              "Des futurs simples",
              "Des plus-que-parfaits du récit",
              "Des passés composés du discours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les deux plus-que-parfaits relevés par le corrigé de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Donner au passé simple une valeur de durée",
          "stepTheme": "Donner au passé simple une valeur de durée",
          "stepBadge": "Donner au passé simple une valeur de durée",
          "paragraphText": "Piège : lire le passé simple comme un temps de durée ou d’habitude.\nLa durée relève de l’imparfait ; le passé simple vaut pour l’action brève, rapide et terminée.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04_q4",
            "type": "mcq",
            "prompt": "Quelle valeur ne convient pas au passé simple ?",
            "options": [
              "Action soudaine et brève",
              "Action accomplie et achevée",
              "Action qui dure et plante un décor",
              "Action terminée quand le narrateur parle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La durée descriptive est la valeur de l’imparfait, pas celle du passé simple."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Elle comprit",
          "stepTheme": "Elle comprit",
          "stepBadge": "Elle comprit",
          "paragraphText": "Exemple : « Elle comprit vaguement que Yaye Daro s’était détachée d’elle. »\n« Comprendre » est ici au passé simple (« comprit ») : la prise de conscience survient comme une action ponctuelle dans le récit.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04_q5",
            "type": "mcq",
            "prompt": "Dans « Elle comprit », le passé simple exprime :",
            "options": [
              "Une action soudaine, brève, accomplie",
              "Un décor qui dure",
              "Une action future certaine",
              "Un ordre donné au lecteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’exemple même choisi par la leçon pour le passé simple."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04_q1",
          "type": "mcq",
          "prompt": "Le passé simple est défini dans la leçon comme :",
          "options": [
            "Le temps de référence du discours",
            "Le temps de base du récit, pour une action brève et achevée",
            "Le temps de la description lente",
            "Un temps du futur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Temps de base du récit, valeur accomplie et achevée : c’est sa définition."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04_q2",
          "type": "mcq",
          "prompt": "L’imparfait est, selon la leçon, le temps :",
          "options": [
            "De l’action soudaine et unique",
            "De la description, qui plante le décor de la scène",
            "De l’injonction",
            "Du dialogue uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Durée et description : les valeurs de l’imparfait dans le système du récit."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04_q3",
          "type": "mcq",
          "prompt": "Dans le corrigé du texte de Sadji, « avait consulté » et « s’était détachée » sont :",
          "options": [
            "Des présents",
            "Des futurs simples",
            "Des plus-que-parfaits du récit",
            "Des passés composés du discours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les deux plus-que-parfaits relevés par le corrigé de la leçon."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04_q4",
          "type": "mcq",
          "prompt": "Quelle valeur ne convient pas au passé simple ?",
          "options": [
            "Action soudaine et brève",
            "Action accomplie et achevée",
            "Action qui dure et plante un décor",
            "Action terminée quand le narrateur parle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La durée descriptive est la valeur de l’imparfait, pas celle du passé simple."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p04_q5",
          "type": "mcq",
          "prompt": "Dans « Elle comprit », le passé simple exprime :",
          "options": [
            "Une action soudaine, brève, accomplie",
            "Un décor qui dure",
            "Une action future certaine",
            "Un ordre donné au lecteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’exemple même choisi par la leçon pour le passé simple."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05",
      "order": 5,
      "title": "La rupture à l’intérieur d’un même système",
      "summary": "Passer des temps du passé aux temps du présent sans quitter le même système.",
      "conceptExplanation": "À l’intérieur d’un même système, le récit passe des temps du passé à ceux du présent. Cela permet de distinguer les faits passés, qui créent un effet d’éloignement avec l’emploi du passé simple et de l’imparfait, des faits récents, qui créent un effet de proximité avec l’emploi du présent et du passé composé.\nLe passé composé évoque les faits passés mais encore proches du présent, dont les conséquences sont encore sensibles dans le présent.\nLe plus-que-parfait peut aussi servir au narrateur à faire un commentaire ou une confidence.",
      "keyRule": "Dans un même système, passé égale éloignement, présent et passé composé égalent proximité.",
      "formulas": [],
      "workedExample": {
        "title": "Éloignement et proximité dans un récit",
        "statement": "Un récit emploie le passé simple pour des faits anciens, puis le présent pour un fait récent. Quel effet chaque choix produit-il, selon la séance 2 ?",
        "methodSteps": [
          "Passé simple et imparfait : faits passés, effet d’éloignement.",
          "Présent et passé composé : faits récents, effet de proximité.",
          "Le glissement reste à l’intérieur du même système : c’est une rupture interne."
        ],
        "conclusion": "La rupture interne joue sur la distance temporelle sans changer de type de texte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la rupture interne",
          "stepTheme": "Définition de la rupture interne",
          "stepBadge": "Définition de la rupture interne",
          "paragraphText": "• Rupture à l’intérieur d’un même système : le récit passe des temps du passé à ceux du présent sans changer de système.\nC’est un phénomène de glissement interne au récit.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05_q1",
            "type": "mcq",
            "prompt": "La rupture à l’intérieur d’un même système consiste à :",
            "options": [
              "Passer du récit au dialogue",
              "Passer, dans le même système, des temps du passé à ceux du présent",
              "Changer d’auteur",
              "Supprimer tous les verbes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première rupture étudiée dans la séance 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’effet d’éloignement du passé",
          "stepTheme": "L’effet d’éloignement du passé",
          "stepBadge": "L’effet d’éloignement du passé",
          "paragraphText": "Propriété : le passé simple et l’imparfait créent un effet d’éloignement pour les faits passés.\nLe lecteur perçoit ces faits comme distants du moment présent du récit.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05_q2",
            "type": "mcq",
            "prompt": "L’effet d’éloignement est créé par :",
            "options": [
              "Le présent et le passé composé",
              "Le futur simple seul",
              "Le passé simple et l’imparfait",
              "La deuxième personne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Passé simple et imparfait éloignent ; présent et passé composé rapprochent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’effet de proximité du présent",
          "stepTheme": "L’effet de proximité du présent",
          "stepBadge": "L’effet de proximité du présent",
          "paragraphText": "Propriété : le présent et le passé composé créent un effet de proximité pour les faits récents.\nLe passé composé garde des conséquences encore sensibles dans le présent.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05_q3",
            "type": "mcq",
            "prompt": "L’effet de proximité pour des faits récents est créé par :",
            "options": [
              "Le plus-que-parfait seul",
              "Le présent et le passé composé",
              "Le passé simple seul",
              "L’imparfait de description"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux temps de proximité cités par la séance 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Confondre les deux ruptures",
          "stepTheme": "Confondre les deux ruptures",
          "stepBadge": "Confondre les deux ruptures",
          "paragraphText": "Piège : appeler rupture d’un système à l’autre un simple passage du passé au présent dans le récit.\nLe changement de système suppose un changement de type de texte, par exemple du récit au dialogue.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05_q4",
            "type": "mcq",
            "prompt": "Un passage du passé simple au présent à l’intérieur du récit est :",
            "options": [
              "Une rupture d’un système à l’autre",
              "Une rupture à l’intérieur d’un même système",
              "Une faute de conjugaison obligatoire",
              "Un changement d’auteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Même système, autres temps : rupture interne, selon la séance 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le plus-que-parfait, commentaire du narrateur",
          "stepTheme": "Le plus-que-parfait, commentaire du narrateur",
          "stepBadge": "Le plus-que-parfait, commentaire du narrateur",
          "paragraphText": "Exemple de valeur signalée par la séance : le plus-que-parfait peut servir au narrateur à faire un commentaire ou une confidence.\nLe temps du récit se charge alors d’une présence discrète du narrateur.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05_q5",
            "type": "mcq",
            "prompt": "Selon la séance 2, le plus-que-parfait peut aussi servir au narrateur à :",
            "options": [
              "Donner un ordre au lecteur",
              "Faire un commentaire ou une confidence",
              "Ouvrir un dialogue",
              "Exprimer une certitude future"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Commentaire ou confidence du narrateur : valeur particulière du plus-que-parfait relevée dans la séance."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05_q1",
          "type": "mcq",
          "prompt": "La rupture à l’intérieur d’un même système consiste à :",
          "options": [
            "Passer du récit au dialogue",
            "Passer, dans le même système, des temps du passé à ceux du présent",
            "Changer d’auteur",
            "Supprimer tous les verbes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première rupture étudiée dans la séance 2."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05_q2",
          "type": "mcq",
          "prompt": "L’effet d’éloignement est créé par :",
          "options": [
            "Le présent et le passé composé",
            "Le futur simple seul",
            "Le passé simple et l’imparfait",
            "La deuxième personne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Passé simple et imparfait éloignent ; présent et passé composé rapprochent."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05_q3",
          "type": "mcq",
          "prompt": "L’effet de proximité pour des faits récents est créé par :",
          "options": [
            "Le plus-que-parfait seul",
            "Le présent et le passé composé",
            "Le passé simple seul",
            "L’imparfait de description"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux temps de proximité cités par la séance 2."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05_q4",
          "type": "mcq",
          "prompt": "Un passage du passé simple au présent à l’intérieur du récit est :",
          "options": [
            "Une rupture d’un système à l’autre",
            "Une rupture à l’intérieur d’un même système",
            "Une faute de conjugaison obligatoire",
            "Un changement d’auteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Même système, autres temps : rupture interne, selon la séance 2."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p05_q5",
          "type": "mcq",
          "prompt": "Selon la séance 2, le plus-que-parfait peut aussi servir au narrateur à :",
          "options": [
            "Donner un ordre au lecteur",
            "Faire un commentaire ou une confidence",
            "Ouvrir un dialogue",
            "Exprimer une certitude future"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Commentaire ou confidence du narrateur : valeur particulière du plus-que-parfait relevée dans la séance."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06",
      "order": 6,
      "title": "La rupture d’un système à l’autre et le brouillage",
      "summary": "Passer du récit au dialogue, accueillir un récit dans un discours, et reconnaître les effets de brouillage.",
      "conceptExplanation": "Dans le récit dialogué, on passe d’un type de texte à l’autre : du récit au dialogue ou du dialogue au récit. On passe ainsi d’un système verbal à l’autre. Dans la partie récit, on trouve les verbes au passé simple et à l’imparfait ; dans le dialogue, le présent et ses temps complémentaires.\nIl y a un récit dans un discours lorsque l’auteur d’une lettre se met à raconter une histoire, ou lorsqu’un orateur, un journaliste, un critique recourt à une anecdote, un récit mythique, une fable, une parabole comme exemple pour justifier concrètement ce que le discours démontre théoriquement.\nLe mélange du récit et du discours, qui ne permet pas de les séparer, se nomme effets de « brouillage » : donner au récit l’apparence d’un discours familier en introduisant le registre oral, ou jouer sur le mode parodique avec la tradition romanesque et les conventions littéraires.",
      "keyRule": "Changement de type de texte égale changement de système ; mélange inséparable égale brouillage.",
      "formulas": [],
      "workedExample": {
        "title": "Le récit dialogué de l’exercice 1",
        "statement": "Exercice de la séance : un extrait mêle un récit (« La guerre avait gagné tout le pays », « il était parti avec sa passion ») et des répliques (« Je reviendrai, attends-moi »). Quel phénomène observe-t-on ?",
        "methodSteps": [
          "Partie récit : plus-que-parfait et imparfait, effet duratif et descriptif.",
          "Partie dialogue : présent et futur simple, qui ravivent l’intrigue et lui donnent certitude et vivacité.",
          "Passage du récit au dialogue : rupture d’un système à l’autre, dans un récit dialogué."
        ],
        "conclusion": "Le corrigé nomme ce phénomène : rupture d’un système à l’autre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la rupture entre systèmes",
          "stepTheme": "Définition de la rupture entre systèmes",
          "stepBadge": "Définition de la rupture entre systèmes",
          "paragraphText": "• Rupture d’un système à l’autre : dans le récit dialogué, on passe d’un type de texte à l’autre, donc d’un système verbal à l’autre.\nRécit : passé simple et imparfait ; dialogue : présent et temps complémentaires.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06_q1",
            "type": "mcq",
            "prompt": "La rupture d’un système à l’autre se produit quand :",
            "options": [
              "Le récit passe du passé au présent en restant un récit",
              "On passe du récit au dialogue, donc d’un système verbal à l’autre",
              "L’auteur change de chapitre",
              "Un personnage change de nom"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la séance 2 pour le récit dialogué."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un récit dans un discours",
          "stepTheme": "Un récit dans un discours",
          "stepBadge": "Un récit dans un discours",
          "paragraphText": "Propriété : un discours peut accueillir un récit.\nCas cités : l’auteur d’une lettre qui se met à raconter une histoire ; l’orateur, le journaliste ou le critique qui recourt à une anecdote, un récit mythique, une fable ou une parabole comme exemple.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06_q2",
            "type": "mcq",
            "prompt": "Il y a récit dans un discours lorsque, par exemple :",
            "options": [
              "Le locuteur emploie le présent",
              "Un orateur recourt à une anecdote ou une fable comme exemple pour justifier son propos",
              "Le texte comporte un titre",
              "Le récit reste au passé simple"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’exemple narratif au service de la démonstration : cas décrit par la séance."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les effets de brouillage",
          "stepTheme": "Les effets de brouillage",
          "stepBadge": "Les effets de brouillage",
          "paragraphText": "• Brouillage : mélange du récit et du discours qui ne permet pas de séparer l’un de l’autre.\nIl peut donner au récit l’apparence d’un discours familier, en introduisant le registre oral dans une énonciation écrite.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06_q3",
            "type": "mcq",
            "prompt": "Les effets de « brouillage » désignent :",
            "options": [
              "Une faute d’impression du texte",
              "Le mélange inséparable du récit et du discours",
              "Un dialogue sans récit",
              "Un récit sans aucun temps du passé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le terme est celui de la séance 2 pour le mélange des deux systèmes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Séparer ce que le texte mélange",
          "stepTheme": "Séparer ce que le texte mélange",
          "stepBadge": "Séparer ce que le texte mélange",
          "paragraphText": "Piège : vouloir classer à tout prix chaque phrase d’un texte brouillé en récit pur ou discours pur.\nLe brouillage se reconnaît justement à l’impossibilité de séparer nettement les deux systèmes.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06_q4",
            "type": "mcq",
            "prompt": "Face à un texte en brouillage, la bonne attitude est de :",
            "options": [
              "Forcer un classement phrase par phrase",
              "Reconnaître le mélange inséparable du récit et du discours et ses effets",
              "Ignorer les temps verbaux",
              "Réécrire le texte au passé simple"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le brouillage est un effet recherché : registre oral dans l’écrit, ou jeu parodique avec les conventions romanesques."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les verbes du dialogue dans l’exercice",
          "stepTheme": "Les verbes du dialogue dans l’exercice",
          "stepBadge": "Les verbes du dialogue dans l’exercice",
          "paragraphText": "Exemple corrigé : dans le dialogue de l’exercice 1, on relève les présents « aimons », « pense », « s’aggrave », « je veux » et les futurs « reviendrai », « te retrouverai ».\nSelon le corrigé, ces temps ravivent l’intrigue, l’actualisent et lui donnent un effet de certitude et de vivacité.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06_q5",
            "type": "mcq",
            "prompt": "Selon le corrigé, les temps du dialogue dans cet exercice servent à :",
            "options": [
              "Éloigner définitivement les faits",
              "Raviver l’intrigue, l’actualiser, lui donner certitude et vivacité",
              "Planter un décor ancien",
              "Clore le récit sans suite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les effets relevés par le corrigé de la séance pour le passage au dialogue."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06_q1",
          "type": "mcq",
          "prompt": "La rupture d’un système à l’autre se produit quand :",
          "options": [
            "Le récit passe du passé au présent en restant un récit",
            "On passe du récit au dialogue, donc d’un système verbal à l’autre",
            "L’auteur change de chapitre",
            "Un personnage change de nom"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la séance 2 pour le récit dialogué."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06_q2",
          "type": "mcq",
          "prompt": "Il y a récit dans un discours lorsque, par exemple :",
          "options": [
            "Le locuteur emploie le présent",
            "Un orateur recourt à une anecdote ou une fable comme exemple pour justifier son propos",
            "Le texte comporte un titre",
            "Le récit reste au passé simple"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’exemple narratif au service de la démonstration : cas décrit par la séance."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06_q3",
          "type": "mcq",
          "prompt": "Les effets de « brouillage » désignent :",
          "options": [
            "Une faute d’impression du texte",
            "Le mélange inséparable du récit et du discours",
            "Un dialogue sans récit",
            "Un récit sans aucun temps du passé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le terme est celui de la séance 2 pour le mélange des deux systèmes."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06_q4",
          "type": "mcq",
          "prompt": "Face à un texte en brouillage, la bonne attitude est de :",
          "options": [
            "Forcer un classement phrase par phrase",
            "Reconnaître le mélange inséparable du récit et du discours et ses effets",
            "Ignorer les temps verbaux",
            "Réécrire le texte au passé simple"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le brouillage est un effet recherché : registre oral dans l’écrit, ou jeu parodique avec les conventions romanesques."
        },
        {
          "id": "premiere_a1_francais_pl_l09_valeurs_temps_verbaux_p06_q5",
          "type": "mcq",
          "prompt": "Selon le corrigé, les temps du dialogue dans cet exercice servent à :",
          "options": [
            "Éloigner définitivement les faits",
            "Raviver l’intrigue, l’actualiser, lui donner certitude et vivacité",
            "Planter un décor ancien",
            "Clore le récit sans suite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les effets relevés par le corrigé de la séance pour le passage au dialogue."
        }
      ]
    }
  ]
};
