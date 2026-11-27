import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « L'Organisation des Nations Unies (ONU) » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2136
export const HIST_TLE_T1_L01_ONU: CurriculumChapter = {
  "id": "terminale_hg_histoire_t1_l01_onu",
  "subjectId": "histoire_geo",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d",
    "terminale_a1",
    "terminale_a2"
  ],
  "order": 1,
  "title": "Thème 1, leçon 1 : L'Organisation des Nations Unies (ONU)",
  "summary": "À partir de la crise post-électorale ivoirienne de 2010, décrire les étapes de la création de l'ONU, expliquer le fonctionnement de ses organes et apprécier le bilan de ses actions.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2136",
  "points": [
    {
      "id": "terminale_hg_histoire_t1_l01_onu_p01",
      "order": 1,
      "title": "La création de l'ONU : une construction progressive",
      "summary": "De la Charte de l'Atlantique à la conférence de San Francisco, sept rencontres entre 1941 et 1945 préparent la naissance de l'ONU.",
      "conceptExplanation": "La Seconde Guerre mondiale consacre l'échec de la Société des Nations (SDN) : elle n'a pas su empêcher la guerre. Dès lors, les Alliés jettent les bases d'une nouvelle organisation en vue du maintien de la paix et de la sécurité internationale : l'ONU (Organisation des Nations Unies).\nL'ONU est l'aboutissement d'une série de rencontres et de grandes conférences entre les Alliés entre 1941 et 1945. L'organisation commence à fonctionner officiellement le 24 octobre 1945. Les conclusions de chaque rencontre constituent un pas vers la création de l'ONU.\nLes plus importantes de ces rencontres sont : Terre-Neuve (14 août 1941, Charte de l'Atlantique), Washington (1er janvier 1942, Déclaration des Nations Unies), Moscou (19 au 30 octobre 1943) et Téhéran (novembre-décembre 1943), Dumbarton Oaks (septembre-octobre 1944), Yalta (4 au 11 février 1945) et Potsdam (juillet-août 1945), puis San Francisco (26 avril au 26 juin 1945, Charte de l'ONU, 50 États dont 4 pays africains : Afrique du Sud, Égypte, Liberia, Éthiopie).",
      "keyRule": "1941 Terre-Neuve, 1942 Washington, 1943 Moscou et Téhéran, 1944 Dumbarton Oaks, 1945 Yalta, Potsdam puis San Francisco : l'ONU naît par étapes et fonctionne officiellement le 24 octobre 1945.",
      "formulas": [],
      "workedExample": {
        "title": "Remettre dans l'ordre les étapes de la création de l'ONU",
        "statement": "Remets dans l'ordre chronologique : Conférence de Yalta, Conférence de San Francisco, Conférence de Dumbarton Oaks, Conférences de Moscou et de Téhéran.",
        "methodSteps": [
          "Conférences de Moscou et de Téhéran (octobre-décembre 1943) : l'idée de créer l'ONU est réaffirmée, avec le principe d'égalité souveraine et l'objectif de sécurité.",
          "Conférence de Dumbarton Oaks (septembre-octobre 1944) : on y définit les organes et le fonctionnement de l'ONU.",
          "Conférence de Yalta (4 au 11 février 1945) : on y résout la question du droit de véto.",
          "Conférence de San Francisco (26 avril au 26 juin 1945) : 50 États signent la Charte de l'ONU."
        ],
        "conclusion": "Moscou et Téhéran, Dumbarton Oaks, Yalta, San Francisco : chaque conférence prépare la suivante, jusqu'à la Charte de l'ONU."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'échec de la SDN",
          "stepTheme": "L'échec de la SDN",
          "stepBadge": "L'échec de la SDN",
          "paragraphText": "• La SDN : la Société des Nations, créée après la Première Guerre mondiale pour maintenir la paix.\n• La Seconde Guerre mondiale consacre son échec : elle n'a pas empêché la guerre.\n• Les Alliés décident donc de créer une nouvelle organisation, plus solide, pour le maintien de la paix et de la sécurité internationale : l'ONU.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p01_q1",
            "type": "mcq",
            "prompt": "Pourquoi les Alliés créent-ils l'ONU après la Seconde Guerre mondiale ?",
            "options": [
              "Parce que la SDN a échoué à maintenir la paix",
              "Parce que la SDN a été dissoute par l'URSS",
              "Pour remplacer la Cour internationale de justice",
              "Pour créer une armée mondiale unique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Seconde Guerre mondiale consacre l'échec de la SDN, qui n'a pas su empêcher la guerre : les Alliés créent l'ONU pour maintenir la paix et la sécurité internationale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Terre-Neuve, 14 août 1941",
          "stepTheme": "Terre-Neuve, 14 août 1941",
          "stepBadge": "Terre-Neuve, 14 août 1941",
          "paragraphText": "• Première rencontre : le 14 août 1941, à Terre-Neuve.\n• Signataires : F. D. Roosevelt (États-Unis) et W. Churchill (Royaume-Uni).\n• Décision importante : la Charte de l'Atlantique — l'idée de créer l'ONU, l'évocation des principes de démocratie, de liberté et de l'objectif de sécurité.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p01_q2",
            "type": "mcq",
            "prompt": "Quelle rencontre marque la première étape de la création de l'ONU ?",
            "options": [
              "La conférence de San Francisco",
              "La conférence de Yalta",
              "La rencontre de Terre-Neuve du 14 août 1941",
              "La conférence de Potsdam"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le 14 août 1941, à Terre-Neuve, Roosevelt et Churchill signent la Charte de l'Atlantique, qui évoque l'idée de créer l'ONU : c'est la première étape du processus."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Washington, 1er janvier 1942",
          "stepTheme": "Washington, 1er janvier 1942",
          "stepBadge": "Washington, 1er janvier 1942",
          "paragraphText": "• Deuxième rencontre : le 1er janvier 1942, à Washington.\n• Signataires : F. D. Roosevelt, W. Churchill et 26 nations antifascistes.\n• Décision importante : la Déclaration des Nations Unies, qui donne son nom à la future organisation.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p01_q3",
            "type": "mcq",
            "prompt": "Que se passe-t-il le 1er janvier 1942 à Washington ?",
            "options": [
              "La signature de la Charte de l'ONU",
              "La Déclaration des Nations Unies par 26 nations antifascistes",
              "La création du Conseil de sécurité",
              "L'élection du premier secrétaire général"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le 1er janvier 1942, à Washington, Roosevelt, Churchill et 26 nations antifascistes adoptent la Déclaration des Nations Unies."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Moscou, Téhéran et Dumbarton Oaks",
          "stepTheme": "Moscou, Téhéran et Dumbarton Oaks",
          "stepBadge": "Moscou, Téhéran et Dumbarton Oaks",
          "paragraphText": "• Moscou (19 au 30 octobre 1943) et Téhéran (novembre-décembre 1943) : l'idée de créer l'ONU est réaffirmée ; le principe d'égalité souveraine et l'objectif de sécurité sont évoqués.\n• Dumbarton Oaks (septembre-octobre 1944) : on y définit les organes et le fonctionnement de l'ONU.\n• Signataires de ces rencontres : Roosevelt, Churchill, Staline et, pour Moscou et Téhéran, Mao Zedong (Chine).",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p01_q4",
            "type": "mcq",
            "prompt": "Que définit la conférence de Dumbarton Oaks (septembre-octobre 1944) ?",
            "options": [
              "La date de création de l'ONU",
              "La liste des États membres fondateurs",
              "Le droit de véto",
              "Les organes et le fonctionnement de l'ONU"
            ],
            "correctAnswerIndex": 3,
            "explanation": "À Dumbarton Oaks, en septembre-octobre 1944, les Alliés définissent les organes et le fonctionnement de la future ONU."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Yalta, Potsdam et le droit de véto",
          "stepTheme": "Yalta, Potsdam et le droit de véto",
          "stepBadge": "Yalta, Potsdam et le droit de véto",
          "paragraphText": "• Yalta (4 au 11 février 1945) et Potsdam (juillet-août 1945) : on y résout la question du droit de véto et on prend des décisions concernant l'Allemagne.\n• Piège d'examen : ne pas confondre les deux dates de 1945 — la Charte de l'ONU est signée le 26 juin 1945 à San Francisco, mais l'ONU ne commence à fonctionner officiellement que le 24 octobre 1945.\n• Les signataires de Yalta et de Potsdam sont Truman (qui remplace Roosevelt, mort en avril 1945), Churchill et Staline.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p01_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation est exacte ?",
            "options": [
              "L'ONU commence à fonctionner le 26 juin 1945",
              "L'ONU commence à fonctionner officiellement le 24 octobre 1945",
              "La Charte de l'ONU est signée le 24 octobre 1945",
              "L'ONU est créée à Yalta en février 1945"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La Charte est signée le 26 juin 1945 à San Francisco, mais l'ONU ne commence à fonctionner officiellement que le 24 octobre 1945. Yalta ne crée pas l'ONU : on y règle la question du véto."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "San Francisco et les 50 États fondateurs",
          "stepTheme": "San Francisco et les 50 États fondateurs",
          "stepBadge": "San Francisco et les 50 États fondateurs",
          "paragraphText": "• Dernière rencontre : du 26 avril au 26 juin 1945, à San Francisco (États-Unis).\n• 50 États y participent, dont 4 pays africains : l'Afrique du Sud, l'Égypte, le Liberia et l'Éthiopie.\n• La Charte de l'ONU y est adoptée, puis ratifiée par les États-Unis, la Grande-Bretagne, l'URSS, la Chine et la France.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p01_q6",
            "type": "mcq",
            "prompt": "Combien d'États participent à la conférence de San Francisco, et combien de pays africains parmi eux ?",
            "options": [
              "50 États dont 4 pays africains",
              "26 États dont 2 pays africains",
              "193 États dont 54 pays africains",
              "15 États dont 5 pays africains"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À San Francisco, 50 États adoptent la Charte de l'ONU, dont 4 pays africains : l'Afrique du Sud, l'Égypte, le Liberia et l'Éthiopie."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p01_q1",
          "type": "mcq",
          "prompt": "Pourquoi les Alliés créent-ils l'ONU après la Seconde Guerre mondiale ?",
          "options": [
            "Parce que la SDN a échoué à maintenir la paix",
            "Parce que la SDN a été dissoute par l'URSS",
            "Pour remplacer la Cour internationale de justice",
            "Pour créer une armée mondiale unique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Seconde Guerre mondiale consacre l'échec de la SDN, qui n'a pas su empêcher la guerre : les Alliés créent l'ONU pour maintenir la paix et la sécurité internationale."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p01_q2",
          "type": "mcq",
          "prompt": "Quelle rencontre marque la première étape de la création de l'ONU ?",
          "options": [
            "La conférence de San Francisco",
            "La conférence de Yalta",
            "La rencontre de Terre-Neuve du 14 août 1941",
            "La conférence de Potsdam"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le 14 août 1941, à Terre-Neuve, Roosevelt et Churchill signent la Charte de l'Atlantique, qui évoque l'idée de créer l'ONU : c'est la première étape du processus."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p01_q3",
          "type": "mcq",
          "prompt": "Que se passe-t-il le 1er janvier 1942 à Washington ?",
          "options": [
            "La signature de la Charte de l'ONU",
            "La Déclaration des Nations Unies par 26 nations antifascistes",
            "La création du Conseil de sécurité",
            "L'élection du premier secrétaire général"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le 1er janvier 1942, à Washington, Roosevelt, Churchill et 26 nations antifascistes adoptent la Déclaration des Nations Unies."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p01_q4",
          "type": "mcq",
          "prompt": "Que définit la conférence de Dumbarton Oaks (septembre-octobre 1944) ?",
          "options": [
            "La date de création de l'ONU",
            "La liste des États membres fondateurs",
            "Le droit de véto",
            "Les organes et le fonctionnement de l'ONU"
          ],
          "correctAnswerIndex": 3,
          "explanation": "À Dumbarton Oaks, en septembre-octobre 1944, les Alliés définissent les organes et le fonctionnement de la future ONU."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p01_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation est exacte ?",
          "options": [
            "L'ONU commence à fonctionner le 26 juin 1945",
            "L'ONU commence à fonctionner officiellement le 24 octobre 1945",
            "La Charte de l'ONU est signée le 24 octobre 1945",
            "L'ONU est créée à Yalta en février 1945"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La Charte est signée le 26 juin 1945 à San Francisco, mais l'ONU ne commence à fonctionner officiellement que le 24 octobre 1945. Yalta ne crée pas l'ONU : on y règle la question du véto."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p01_q6",
          "type": "mcq",
          "prompt": "Combien d'États participent à la conférence de San Francisco, et combien de pays africains parmi eux ?",
          "options": [
            "50 États dont 4 pays africains",
            "26 États dont 2 pays africains",
            "193 États dont 54 pays africains",
            "15 États dont 5 pays africains"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À San Francisco, 50 États adoptent la Charte de l'ONU, dont 4 pays africains : l'Afrique du Sud, l'Égypte, le Liberia et l'Éthiopie."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t1_l01_onu_p02",
      "order": 2,
      "title": "Les objectifs et les principes de l'ONU",
      "summary": "Quatre objectifs, dont le maintien de la paix, et cinq principes, dont l'égalité souveraine et la non-ingérence.",
      "conceptExplanation": "La Charte de l'ONU fixe à l'organisation quatre objectifs.\n• Maintenir la paix et la sécurité internationale.\n• Promouvoir la souveraineté et l'auto-détermination des peuples.\n• Promouvoir les droits de l'homme, des peuples et les libertés fondamentales.\n• Promouvoir la coopération internationale dans tous les domaines et l'harmonisation des efforts vers des fins communes.\nLa Charte fixe aussi cinq principes que les États membres doivent respecter.\n• Égalité souveraine de tous les États membres.\n• Remplir de bonne foi ses obligations vis-à-vis de l'ONU.\n• Règlement des différends internationaux par des moyens pacifiques.\n• S'abstenir de recourir dans les relations internationales à la menace ou à la force.\n• La non-ingérence dans les affaires intérieures des États membres.\nLe principal objectif est de maintenir la paix et la sécurité internationale : c'est la raison d'être de l'ONU, créée après l'échec de la SDN.",
      "keyRule": "Objectifs : paix, souveraineté des peuples, droits de l'homme, coopération. Principes : égalité souveraine, bonne foi, règlement pacifique, pas de menace ni de force, non-ingérence.",
      "formulas": [],
      "workedExample": {
        "title": "Vrai ou faux : objectifs et principes",
        "statement": "Dis si chaque affirmation est vraie ou fausse : 1. L'ONU est une initiative française. 2. La Déclaration des Nations Unies a été adoptée le 1er janvier 1942. 3. Le principal objectif de l'ONU est de maintenir la paix et la sécurité internationale. 4. L'égalité souveraine de tous les États membres est un objectif de l'ONU. 5. La non-ingérence dans les affaires intérieures des États membres est un principe de l'ONU.",
        "methodSteps": [
          "1. Faux : l'ONU est une initiative des Alliés, lancée par Roosevelt et Churchill à Terre-Neuve en 1941.",
          "2. Vrai : la Déclaration des Nations Unies est adoptée le 1er janvier 1942 à Washington.",
          "3. Vrai : maintenir la paix et la sécurité internationale est le principal objectif de l'ONU.",
          "4. Faux : l'égalité souveraine est un principe de l'ONU, pas un objectif.",
          "5. Vrai : la non-ingérence dans les affaires intérieures des États membres est bien un principe de l'ONU."
        ],
        "conclusion": "Objectifs et principes ne se confondent pas : la paix, la souveraineté des peuples, les droits de l'homme et la coopération sont des objectifs ; l'égalité souveraine, la bonne foi, le règlement pacifique, l'abstention de la force et la non-ingérence sont des principes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le principal objectif : la paix",
          "stepTheme": "Le principal objectif : la paix",
          "stepBadge": "Le principal objectif : la paix",
          "paragraphText": "• Le principal objectif de l'ONU est de maintenir la paix et la sécurité internationale.\n• C'est la raison d'être de l'organisation, créée après l'échec de la SDN face à la Seconde Guerre mondiale.\n• Tous les autres objectifs servent ce but premier : éviter une nouvelle guerre mondiale.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p02_q1",
            "type": "mcq",
            "prompt": "Quel est le principal objectif de l'ONU ?",
            "options": [
              "Promouvoir la coopération culturelle",
              "Maintenir la paix et la sécurité internationale",
              "Créer une monnaie unique",
              "Contrôler les frontières des États"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le principal objectif de l'ONU, fixé par sa Charte, est de maintenir la paix et la sécurité internationale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les quatre objectifs",
          "stepTheme": "Les quatre objectifs",
          "stepBadge": "Les quatre objectifs",
          "paragraphText": "• Maintenir la paix et la sécurité internationale.\n• Promouvoir la souveraineté et l'auto-détermination des peuples.\n• Promouvoir les droits de l'homme, des peuples et les libertés fondamentales.\n• Promouvoir la coopération internationale dans tous les domaines et l'harmonisation des efforts vers des fins communes.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p02_q2",
            "type": "mcq",
            "prompt": "Lequel des éléments suivants est un objectif de l'ONU ?",
            "options": [
              "La non-ingérence dans les affaires intérieures des États",
              "Promouvoir la souveraineté et l'auto-détermination des peuples",
              "Le règlement pacifique des différends",
              "Remplir de bonne foi ses obligations"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Promouvoir la souveraineté et l'auto-détermination des peuples est l'un des quatre objectifs de l'ONU. Les trois autres propositions sont des principes, pas des objectifs."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'égalité souveraine",
          "stepTheme": "L'égalité souveraine",
          "stepBadge": "L'égalité souveraine",
          "paragraphText": "• Premier principe de la Charte : l'égalité souveraine de tous les États membres.\n• Tous les États membres sont égaux en droits, qu'ils soient grands ou petits, riches ou pauvres.\n• C'est ce principe qui donne à chaque État une voix à l'Assemblée générale.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p02_q3",
            "type": "mcq",
            "prompt": "Que signifie le principe d'égalité souveraine ?",
            "options": [
              "Tous les États membres sont égaux en droits",
              "Seuls les membres permanents du Conseil de sécurité sont égaux",
              "Les États les plus riches ont plus de voix",
              "L'Assemblée générale décide à la place des États"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'égalité souveraine signifie que tous les États membres sont égaux en droits, quelle que soit leur taille ou leur richesse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les cinq principes",
          "stepTheme": "Les cinq principes",
          "stepBadge": "Les cinq principes",
          "paragraphText": "• Égalité souveraine de tous les États membres.\n• Remplir de bonne foi ses obligations vis-à-vis de l'ONU.\n• Règlement des différends internationaux par des moyens pacifiques.\n• S'abstenir de recourir dans les relations internationales à la menace ou à la force.\n• La non-ingérence dans les affaires intérieures des États membres.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p02_q4",
            "type": "mcq",
            "prompt": "Lequel des éléments suivants est un principe de l'ONU ?",
            "options": [
              "Promouvoir les droits de l'homme",
              "La non-ingérence dans les affaires intérieures des États membres",
              "Promouvoir la coopération internationale",
              "Maintenir la paix et la sécurité internationale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La non-ingérence dans les affaires intérieures des États membres est l'un des cinq principes de la Charte. Les trois autres propositions sont des objectifs."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre objectifs et principes",
          "stepTheme": "Ne pas confondre objectifs et principes",
          "stepBadge": "Ne pas confondre objectifs et principes",
          "paragraphText": "• Piège classique à l'examen : l'égalité souveraine et la non-ingérence sont des principes, pas des objectifs.\n• Autre piège : le règlement pacifique des différends est un principe, alors que la promotion de la coopération internationale est un objectif.\n• Astuce : un objectif dit ce que l'ONU veut atteindre (la paix, les droits de l'homme, la coopération) ; un principe dit comment les États doivent se comporter (égalité, bonne foi, non-ingérence).",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p02_q5",
            "type": "mcq",
            "prompt": "« L'égalité souveraine de tous les États membres est un objectif de l'ONU. » Cette affirmation est-elle vraie ou fausse ?",
            "options": [
              "Vraie, c'est un objectif",
              "Fausse, c'est un principe",
              "Vraie, c'est le principal objectif",
              "Fausse, l'égalité souveraine n'existe pas à l'ONU"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Fausse : l'égalité souveraine de tous les États membres est un principe de la Charte, pas un objectif. Les objectifs sont la paix, la souveraineté des peuples, les droits de l'homme et la coopération."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La Côte d'Ivoire et l'ONU en 2010",
          "stepTheme": "La Côte d'Ivoire et l'ONU en 2010",
          "stepBadge": "La Côte d'Ivoire et l'ONU en 2010",
          "paragraphText": "• En 2010, la Côte d'Ivoire traverse une crise post-électorale après les élections présidentielles.\n• Le pays sollicite l'ONU pour superviser les élections présidentielles et certifier les résultats du scrutin.\n• Malgré la présence de l'ONU, la crise n'a pas été évitée : c'est le point de départ de la leçon, qui invite à dresser le bilan de l'organisation.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p02_q6",
            "type": "mcq",
            "prompt": "En 2010, pourquoi la Côte d'Ivoire sollicite-t-elle l'ONU ?",
            "options": [
              "Pour superviser les élections présidentielles et certifier les résultats",
              "Pour obtenir un prêt du FMI",
              "Pour adhérer au Conseil de sécurité",
              "Pour organiser une conférence internationale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En 2010, la Côte d'Ivoire sollicite l'ONU pour superviser les élections présidentielles et certifier les résultats du scrutin, dans le cadre de la crise post-électorale."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p02_q1",
          "type": "mcq",
          "prompt": "Quel est le principal objectif de l'ONU ?",
          "options": [
            "Promouvoir la coopération culturelle",
            "Maintenir la paix et la sécurité internationale",
            "Créer une monnaie unique",
            "Contrôler les frontières des États"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le principal objectif de l'ONU, fixé par sa Charte, est de maintenir la paix et la sécurité internationale."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p02_q2",
          "type": "mcq",
          "prompt": "Lequel des éléments suivants est un objectif de l'ONU ?",
          "options": [
            "La non-ingérence dans les affaires intérieures des États",
            "Promouvoir la souveraineté et l'auto-détermination des peuples",
            "Le règlement pacifique des différends",
            "Remplir de bonne foi ses obligations"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Promouvoir la souveraineté et l'auto-détermination des peuples est l'un des quatre objectifs de l'ONU. Les trois autres propositions sont des principes, pas des objectifs."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p02_q3",
          "type": "mcq",
          "prompt": "Que signifie le principe d'égalité souveraine ?",
          "options": [
            "Tous les États membres sont égaux en droits",
            "Seuls les membres permanents du Conseil de sécurité sont égaux",
            "Les États les plus riches ont plus de voix",
            "L'Assemblée générale décide à la place des États"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'égalité souveraine signifie que tous les États membres sont égaux en droits, quelle que soit leur taille ou leur richesse."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p02_q4",
          "type": "mcq",
          "prompt": "Lequel des éléments suivants est un principe de l'ONU ?",
          "options": [
            "Promouvoir les droits de l'homme",
            "La non-ingérence dans les affaires intérieures des États membres",
            "Promouvoir la coopération internationale",
            "Maintenir la paix et la sécurité internationale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La non-ingérence dans les affaires intérieures des États membres est l'un des cinq principes de la Charte. Les trois autres propositions sont des objectifs."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p02_q5",
          "type": "mcq",
          "prompt": "« L'égalité souveraine de tous les États membres est un objectif de l'ONU. » Cette affirmation est-elle vraie ou fausse ?",
          "options": [
            "Vraie, c'est un objectif",
            "Fausse, c'est un principe",
            "Vraie, c'est le principal objectif",
            "Fausse, l'égalité souveraine n'existe pas à l'ONU"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Fausse : l'égalité souveraine de tous les États membres est un principe de la Charte, pas un objectif. Les objectifs sont la paix, la souveraineté des peuples, les droits de l'homme et la coopération."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p02_q6",
          "type": "mcq",
          "prompt": "En 2010, pourquoi la Côte d'Ivoire sollicite-t-elle l'ONU ?",
          "options": [
            "Pour superviser les élections présidentielles et certifier les résultats",
            "Pour obtenir un prêt du FMI",
            "Pour adhérer au Conseil de sécurité",
            "Pour organiser une conférence internationale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En 2010, la Côte d'Ivoire sollicite l'ONU pour superviser les élections présidentielles et certifier les résultats du scrutin, dans le cadre de la crise post-électorale."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t1_l01_onu_p03",
      "order": 3,
      "title": "L'Assemblée générale, le Conseil de sécurité et le Secrétariat général",
      "summary": "Trois organes principaux : l'Assemblée générale délibère, le Conseil de sécurité exécute, le Secrétariat général administre.",
      "conceptExplanation": "L'ONU fonctionne grâce à six organes principaux. Les trois premiers sont l'Assemblée générale, le Conseil de sécurité et le Secrétariat général.\n• L'Assemblée générale est l'organe de délibération de l'ONU. Elle regroupe les pays membres, aujourd'hui au nombre de 193 (le Sud-Soudan, 193e État membre, devenu indépendant le 09 juillet 2011). Elle se réunit une fois par an en session ordinaire et peut se réunir en session extraordinaire à la demande du Conseil de sécurité, du secrétariat ou des membres. Chaque État membre dispose d'une voix pendant les délibérations. Les décisions prises n'ont aucun caractère contraignant. Elle vote le budget, élit le secrétaire général, les membres et dirigeants des autres organes et institutions spécialisées, et se prononce sur l'adhésion de nouveaux membres.\n• Le Conseil de sécurité est l'organe exécutif des Nations Unies. Il se compose de cinq membres permanents (États-Unis, France, Grande-Bretagne, Russie, Chine) qui disposent d'un droit de véto, et de dix membres non permanents élus pour deux ans. Il peut se réunir à tout moment. Les décisions sont prises à la majorité simple en l'absence du droit de véto. Il intervient pour les questions de maintien de la paix et de la sécurité internationale. Lorsque la paix est menacée, sa réaction est graduelle : d'abord des résolutions pour un règlement pacifique du conflit, puis, en cas d'échec, des sanctions économiques ou militaires (embargo), et en dernier recours l'intervention armée (les casques bleus).\n• Le Secrétariat général est l'organe administratif de l'ONU. Il est dirigé par un secrétaire général élu par l'Assemblée générale sur recommandation du Conseil de sécurité. Son mandat dure cinq ans, renouvelable. Le secrétaire général assure l'administration générale de l'ONU, convoque les Assemblées générales et attire l'attention de l'Assemblée générale et du Conseil de sécurité sur toutes les situations qui nécessitent l'intervention de l'ONU.\nLes secrétaires généraux depuis la création : Trygve Lie (Norvège, 1946-1952), Dag Hammarskjöld (Suède, 1953-1961), Sithu U Than (Birmanie, 1961-1971), Kurt Waldheim (Autriche, 1972-1981), Javier Perez De Cuellar (Pérou, 1982-1991), Boutros Boutros-Ghali (Égypte, 1992-1996), Kofi Annan (Ghana, 1997-2006), Ban Ki-moon (Corée du Sud, janvier 2007-décembre 2016), Antonio Guterres (Portugal, depuis janvier 2017).",
      "keyRule": "Assemblée générale : elle délibère (193 États, une voix chacun, décisions non contraignantes). Conseil de sécurité : il exécute (5 permanents avec véto + 10 non permanents). Secrétariat général : il administre (mandat de 5 ans).",
      "formulas": [],
      "workedExample": {
        "title": "Relier chaque organe à son rôle",
        "statement": "Relie chaque organe de l'ONU au rôle qui lui est assigné : Assemblée générale, Conseil de sécurité, Secrétariat général, OMS, FAO. Rôles proposés : vote du budget de l'ONU ; vote de résolutions et sanctions pour la paix ; assure l'administration de l'ONU ; lutte contre les épidémies et les pandémies ; lutte contre la faim et la malnutrition.",
        "methodSteps": [
          "Assemblée générale → vote du budget de l'ONU : c'est elle qui vote le budget.",
          "Conseil de sécurité → vote de résolutions et sanctions pour la paix : c'est l'organe exécutif, chargé du maintien de la paix.",
          "Secrétariat général → assure l'administration de l'ONU : c'est l'organe administratif.",
          "OMS → lutte contre les épidémies et les pandémies : c'est l'Organisation mondiale de la santé.",
          "FAO → lutte contre la faim et la malnutrition : c'est l'organisation pour l'alimentation et l'agriculture."
        ],
        "conclusion": "Chaque organe a son rôle : délibérer pour l'Assemblée générale, exécuter pour le Conseil de sécurité, administrer pour le Secrétariat général, et des missions spécialisées pour l'OMS et la FAO."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'Assemblée générale, organe de délibération",
          "stepTheme": "L'Assemblée générale, organe de délibération",
          "stepBadge": "L'Assemblée générale, organe de délibération",
          "paragraphText": "• L'Assemblée générale est l'organe de délibération de l'ONU.\n• Elle regroupe les pays membres, aujourd'hui au nombre de 193 (le Sud-Soudan, 193e État membre, devenu indépendant le 09 juillet 2011).\n• Elle se réunit une fois par an en session ordinaire et peut se réunir en session extraordinaire à la demande du Conseil de sécurité, du secrétariat ou des membres.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p03_q1",
            "type": "mcq",
            "prompt": "Quel est le rôle de l'Assemblée générale ?",
            "options": [
              "Exécuter les décisions de l'ONU",
              "Délibérer : elle est l'organe de délibération de l'ONU",
              "Administrer le Secrétariat général",
              "Juger les différends entre États"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'Assemblée générale est l'organe de délibération de l'ONU : elle discute et vote, mais ses décisions n'ont aucun caractère contraignant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "193 États, une voix chacun",
          "stepTheme": "193 États, une voix chacun",
          "stepBadge": "193 États, une voix chacun",
          "paragraphText": "• Chaque État membre dispose d'une voix pendant les délibérations : l'égalité souveraine s'applique aussi dans le vote.\n• Les décisions prises par l'Assemblée générale n'ont aucun caractère contraignant.\n• Elle vote le budget, élit le secrétaire général, les membres et dirigeants des autres organes et institutions spécialisées, et se prononce sur l'adhésion de nouveaux membres.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p03_q2",
            "type": "mcq",
            "prompt": "Combien d'États membres l'Assemblée générale regroupe-t-elle, et combien de voix chaque État a-t-il ?",
            "options": [
              "54 États, une voix chacun",
              "193 États, une voix chacun",
              "15 États, une voix chacun",
              "50 États, deux voix chacun"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'Assemblée générale regroupe 193 États membres et chaque État dispose d'une voix pendant les délibérations."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le Conseil de sécurité, organe exécutif",
          "stepTheme": "Le Conseil de sécurité, organe exécutif",
          "stepBadge": "Le Conseil de sécurité, organe exécutif",
          "paragraphText": "• Le Conseil de sécurité est l'organe exécutif des Nations Unies.\n• Il se compose de cinq membres permanents (États-Unis, France, Grande-Bretagne, Russie, Chine) qui disposent d'un droit de véto, et de dix membres non permanents élus pour deux ans.\n• Il peut se réunir à tout moment et intervient pour les questions de maintien de la paix et de la sécurité internationale.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p03_q3",
            "type": "mcq",
            "prompt": "Qui compose le Conseil de sécurité ?",
            "options": [
              "15 juges élus pour 9 ans",
              "5 membres permanents avec droit de véto et 10 membres non permanents élus pour 2 ans",
              "54 États élus pour 3 ans",
              "193 États membres"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le Conseil de sécurité compte 5 membres permanents (États-Unis, France, Grande-Bretagne, Russie, Chine) avec droit de véto, et 10 membres non permanents élus pour deux ans."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La réaction graduelle du Conseil de sécurité",
          "stepTheme": "La réaction graduelle du Conseil de sécurité",
          "stepBadge": "La réaction graduelle du Conseil de sécurité",
          "paragraphText": "• Lorsque la paix est menacée, la réaction du Conseil de sécurité est graduelle.\n• D'abord, des résolutions pour un règlement pacifique du conflit.\n• En cas d'échec, des sanctions économiques ou militaires (embargo) sont prises.\n• Le dernier recours est l'intervention armée (les casques bleus).",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p03_q4",
            "type": "mcq",
            "prompt": "Quand la paix est menacée, comment le Conseil de sécurité réagit-il ?",
            "options": [
              "Il intervient immédiatement par la force armée",
              "Il exclut l'État fautif de l'ONU",
              "Il réagit graduellement : résolutions, puis sanctions, puis intervention armée en dernier recours",
              "Il attend la décision de l'Assemblée générale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La réaction du Conseil de sécurité est graduelle : d'abord des résolutions pour un règlement pacifique, puis des sanctions économiques ou militaires, et en dernier recours l'intervention armée (les casques bleus)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le droit de véto",
          "stepTheme": "Le droit de véto",
          "stepBadge": "Le droit de véto",
          "paragraphText": "• Les cinq membres permanents disposent d'un droit de véto.\n• Les décisions du Conseil de sécurité sont prises à la majorité simple en l'absence du droit de véto.\n• Piège : un seul véto suffit à bloquer une décision, même si tous les autres membres sont d'accord. C'est l'une des limites majeures de l'ONU, étudiée dans le point 6.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p03_q5",
            "type": "mcq",
            "prompt": "Que se passe-t-il si un membre permanent du Conseil de sécurité oppose son véto ?",
            "options": [
              "La décision est quand même adoptée à la majorité simple",
              "La décision est bloquée",
              "Le membre permanent est exclu du Conseil",
              "L'Assemblée générale annule le véto"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les décisions sont prises à la majorité simple en l'absence du droit de véto : un véto d'un membre permanent bloque donc la décision."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le Secrétariat général et ses secrétaires",
          "stepTheme": "Le Secrétariat général et ses secrétaires",
          "stepBadge": "Le Secrétariat général et ses secrétaires",
          "paragraphText": "• Le Secrétariat général est l'organe administratif de l'ONU.\n• Il est dirigé par un secrétaire général élu par l'Assemblée générale sur recommandation du Conseil de sécurité, pour un mandat de cinq ans renouvelable.\n• Il assure l'administration générale de l'ONU, convoque les Assemblées générales et attire l'attention de l'Assemblée générale et du Conseil de sécurité sur les situations qui nécessitent l'intervention de l'ONU.\n• Exemples de secrétaires généraux : Kofi Annan (Ghana, 1997-2006), Ban Ki-moon (Corée du Sud, 2007-2016), Antonio Guterres (Portugal, depuis janvier 2017).",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p03_q6",
            "type": "mcq",
            "prompt": "Qui dirige le Secrétariat général, et pour quelle durée de mandat ?",
            "options": [
              "Le président de l'Assemblée générale, pour 1 an",
              "Le secrétaire général, élu pour 5 ans renouvelables",
              "Le président du Conseil de sécurité, pour 2 ans",
              "Le directeur de l'UNESCO, pour 9 ans"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le Secrétariat général est dirigé par un secrétaire général élu par l'Assemblée générale sur recommandation du Conseil de sécurité, pour un mandat de cinq ans renouvelable."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p03_q1",
          "type": "mcq",
          "prompt": "Quel est le rôle de l'Assemblée générale ?",
          "options": [
            "Exécuter les décisions de l'ONU",
            "Délibérer : elle est l'organe de délibération de l'ONU",
            "Administrer le Secrétariat général",
            "Juger les différends entre États"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'Assemblée générale est l'organe de délibération de l'ONU : elle discute et vote, mais ses décisions n'ont aucun caractère contraignant."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p03_q2",
          "type": "mcq",
          "prompt": "Combien d'États membres l'Assemblée générale regroupe-t-elle, et combien de voix chaque État a-t-il ?",
          "options": [
            "54 États, une voix chacun",
            "193 États, une voix chacun",
            "15 États, une voix chacun",
            "50 États, deux voix chacun"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'Assemblée générale regroupe 193 États membres et chaque État dispose d'une voix pendant les délibérations."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p03_q3",
          "type": "mcq",
          "prompt": "Qui compose le Conseil de sécurité ?",
          "options": [
            "15 juges élus pour 9 ans",
            "5 membres permanents avec droit de véto et 10 membres non permanents élus pour 2 ans",
            "54 États élus pour 3 ans",
            "193 États membres"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le Conseil de sécurité compte 5 membres permanents (États-Unis, France, Grande-Bretagne, Russie, Chine) avec droit de véto, et 10 membres non permanents élus pour deux ans."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p03_q4",
          "type": "mcq",
          "prompt": "Quand la paix est menacée, comment le Conseil de sécurité réagit-il ?",
          "options": [
            "Il intervient immédiatement par la force armée",
            "Il exclut l'État fautif de l'ONU",
            "Il réagit graduellement : résolutions, puis sanctions, puis intervention armée en dernier recours",
            "Il attend la décision de l'Assemblée générale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La réaction du Conseil de sécurité est graduelle : d'abord des résolutions pour un règlement pacifique, puis des sanctions économiques ou militaires, et en dernier recours l'intervention armée (les casques bleus)."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p03_q5",
          "type": "mcq",
          "prompt": "Que se passe-t-il si un membre permanent du Conseil de sécurité oppose son véto ?",
          "options": [
            "La décision est quand même adoptée à la majorité simple",
            "La décision est bloquée",
            "Le membre permanent est exclu du Conseil",
            "L'Assemblée générale annule le véto"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les décisions sont prises à la majorité simple en l'absence du droit de véto : un véto d'un membre permanent bloque donc la décision."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p03_q6",
          "type": "mcq",
          "prompt": "Qui dirige le Secrétariat général, et pour quelle durée de mandat ?",
          "options": [
            "Le président de l'Assemblée générale, pour 1 an",
            "Le secrétaire général, élu pour 5 ans renouvelables",
            "Le président du Conseil de sécurité, pour 2 ans",
            "Le directeur de l'UNESCO, pour 9 ans"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le Secrétariat général est dirigé par un secrétaire général élu par l'Assemblée générale sur recommandation du Conseil de sécurité, pour un mandat de cinq ans renouvelable."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t1_l01_onu_p04",
      "order": 4,
      "title": "Les autres organes et les institutions spécialisées",
      "summary": "Le Conseil économique et social, la Cour internationale de justice, le Conseil de tutelle et les organismes spécialisés complètent le système des Nations Unies.",
      "conceptExplanation": "Outre l'Assemblée générale, le Conseil de sécurité et le Secrétariat général, l'ONU compte trois autres organes principaux et de nombreux organismes spécialisés. Ensemble, ils forment le système des Nations Unies.\n• Le Conseil économique et social est l'organe de coordination de toutes les activités ayant trait à la démocratie sociale et aux questions économiques. Il est composé de cinquante-quatre États élus par l'Assemblée générale pour trois ans et renouvelé par tiers tous les ans. Il est divisé en plusieurs commissions (droits de l'homme, lutte contre la drogue, établissement de statistiques, etc.).\n• La Cour internationale de justice est l'organe judiciaire de l'ONU. Elle se compose de quinze juges élus par l'Assemblée générale pour un mandat de neuf ans et renouvelée par tiers tous les trois ans. Elle règle les questions d'ordre juridique entre les États. Son siège est à La Haye (Pays-Bas).\n• Le Conseil de tutelle est composé de six(15) membres élus par l'Assemblée générale. Son rôle est de contrôler l'administration des territoires placés sous mandat des Nations Unies : anciens territoires sous mandat de la SDN, le Timor-Oriental (ex-province indonésienne en 2002), le Kosovo (ex-province serbe en 1999).\n• Les organismes spécialisés à caractère social, culturel et humanitaire : UNESCO (Paris, 1946) — Organisation des Nations Unies pour l'Éducation, la Science et la Culture ; FAO (Rome, 1945) — Food and Agricultural Organisation ; OMS (Genève, 1948) — Organisation mondiale de la santé ; OIT (Genève, 1946) — Organisation internationale du travail ; HCR (Genève, 1950) — Haut-Commissariat des Nations Unies pour les réfugiés ; HCDH (Genève, 1993) — Haut-Commissariat des Nations Unies aux droits de l'homme.\n• Les organismes à caractère technique : AIEA (Vienne, 1957) — Agence internationale de l'énergie atomique ; OACI (Montréal, 1947) — Organisation de l'aviation civile internationale ; UPU (Berne, 1874) — Union postale universelle.\n• Les organismes à caractère économique : FMI (Washington, 1944) — Fonds monétaire international ; Banque mondiale (Washington, 1944) ; GATT (1947, Genève) — General Agreement on Trade and Tarif — devenu CNUCED (Conférence des Nations Unies pour le commerce et le développement) en 1964.",
      "keyRule": "Six organes principaux au total : Assemblée générale, Conseil de sécurité, Secrétariat général, Conseil économique et social, Cour internationale de justice, Conseil de tutelle — plus les organismes spécialisés (UNESCO, FAO, OMS, FMI, Banque mondiale…).",
      "formulas": [],
      "workedExample": {
        "title": "Classer les organismes spécialisés",
        "statement": "Classe chaque organisme dans sa catégorie : UNESCO, FAO, OMS, OIT, HCR, HCDH, AIEA, OACI, UPU, FMI, Banque mondiale, GATT. Catégories : social, culturel et humanitaire ; technique ; économique.",
        "methodSteps": [
          "Social, culturel et humanitaire : UNESCO (éducation, science, culture), FAO (alimentation, agriculture), OMS (santé), OIT (travail), HCR (réfugiés), HCDH (droits de l'homme).",
          "Technique : AIEA (énergie atomique), OACI (aviation civile), UPU (poste).",
          "Économique : FMI et Banque mondiale (finances, Washington, 1944), GATT (commerce, devenu CNUCED en 1964)."
        ],
        "conclusion": "Trois familles d'organismes spécialisés : les organismes sociaux, culturels et humanitaires (UNESCO, FAO, OMS…), les organismes techniques (AIEA, OACI, UPU) et les organismes économiques (FMI, Banque mondiale, GATT)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le Conseil économique et social",
          "stepTheme": "Le Conseil économique et social",
          "stepBadge": "Le Conseil économique et social",
          "paragraphText": "• Le Conseil économique et social est l'organe de coordination de toutes les activités ayant trait à la démocratie sociale et aux questions économiques.\n• Il est composé de cinquante-quatre États élus par l'Assemblée générale pour trois ans et renouvelé par tiers tous les ans.\n• Il est divisé en plusieurs commissions (droits de l'homme, lutte contre la drogue, établissement de statistiques, etc.).",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p04_q1",
            "type": "mcq",
            "prompt": "Quel est le rôle du Conseil économique et social ?",
            "options": [
              "Juger les différends entre États",
              "Coordonner les activités liées à la démocratie sociale et aux questions économiques",
              "Contrôler les territoires sous tutelle",
              "Voter le budget de l'ONU"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le Conseil économique et social coordonne toutes les activités ayant trait à la démocratie sociale et aux questions économiques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La Cour internationale de justice",
          "stepTheme": "La Cour internationale de justice",
          "stepBadge": "La Cour internationale de justice",
          "paragraphText": "• La Cour internationale de justice est l'organe judiciaire de l'ONU.\n• Elle se compose de quinze juges élus par l'Assemblée générale pour un mandat de neuf ans et renouvelée par tiers tous les trois ans.\n• Elle règle les questions d'ordre juridique entre les États. Son siège est à La Haye (Pays-Bas).",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p04_q2",
            "type": "mcq",
            "prompt": "Où siège la Cour internationale de justice, et de combien de juges est-elle composée ?",
            "options": [
              "À New York, 5 juges",
              "À La Haye, 15 juges élus pour 9 ans",
              "À Genève, 54 juges",
              "À Paris, 10 juges"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La Cour internationale de justice siège à La Haye (Pays-Bas) et se compose de quinze juges élus pour un mandat de neuf ans."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le Conseil de tutelle",
          "stepTheme": "Le Conseil de tutelle",
          "stepBadge": "Le Conseil de tutelle",
          "paragraphText": "• Le Conseil de tutelle est composé de six(15) membres élus par l'Assemblée générale.\n• Son rôle est de contrôler l'administration des territoires placés sous mandat des Nations Unies : anciens territoires sous mandat de la SDN, le Timor-Oriental (ex-province indonésienne en 2002), le Kosovo (ex-province serbe en 1999).",
          "konanTip": "Le document source imprime « six(15) membres » : c'est une coquille du manuel d'origine, reproduite telle quelle.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p04_q3",
            "type": "mcq",
            "prompt": "Quel est le rôle du Conseil de tutelle ?",
            "options": [
              "Contrôler l'administration des territoires placés sous mandat des Nations Unies",
              "Élire le secrétaire général",
              "Coordonner la lutte contre la drogue",
              "Voter les résolutions du Conseil de sécurité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Conseil de tutelle contrôle l'administration des territoires placés sous mandat des Nations Unies, comme le Timor-Oriental et le Kosovo."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les organismes sociaux, culturels et humanitaires",
          "stepTheme": "Les organismes sociaux, culturels et humanitaires",
          "stepBadge": "Les organismes sociaux, culturels et humanitaires",
          "paragraphText": "• UNESCO (Paris, 1946) : éducation, science et culture.\n• FAO (Rome, 1945) : alimentation et agriculture.\n• OMS (Genève, 1948) : santé ; OIT (Genève, 1946) : travail ; HCR (Genève, 1950) : réfugiés ; HCDH (Genève, 1993) : droits de l'homme.\n• Le fonctionnement de l'ONU repose sur cet ensemble d'organes et d'institutions : c'est le système des Nations Unies.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p04_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces institutions est un organisme spécialisé de l'ONU à caractère social, culturel et humanitaire ?",
            "options": [
              "L'AIEA",
              "L'UNESCO, dont le siège est à Paris",
              "Le GATT",
              "L'UPU"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'UNESCO (Organisation des Nations Unies pour l'éducation, la science et la culture), dont le siège est à Paris, est un organisme à caractère social, culturel et humanitaire. L'AIEA et l'UPU sont techniques, le GATT est économique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les organismes techniques et économiques",
          "stepTheme": "Les organismes techniques et économiques",
          "stepBadge": "Les organismes techniques et économiques",
          "paragraphText": "• Organismes à caractère technique : AIEA (Vienne, 1957, énergie atomique), OACI (Montréal, 1947, aviation civile), UPU (Berne, 1874, poste).\n• Organismes à caractère économique : FMI (Washington, 1944, Fonds monétaire international) et Banque mondiale (Washington, 1944), GATT (1947, Genève) devenu CNUCED en 1964.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p04_q5",
            "type": "mcq",
            "prompt": "Lequel de ces organismes est à caractère économique ?",
            "options": [
              "L'OMS",
              "L'UNESCO",
              "Le FMI, créé à Washington en 1944",
              "L'OACI"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le FMI (Fonds monétaire international), créé à Washington en 1944, est un organisme à caractère économique. L'OMS et l'UNESCO sont sociaux et humanitaires, l'OACI est technique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Retenir les sièges et les dates",
          "stepTheme": "Retenir les sièges et les dates",
          "stepBadge": "Retenir les sièges et les dates",
          "paragraphText": "• Astuce de révision : retiens les sièges par association — Paris pour la culture (UNESCO), Rome pour l'alimentation (FAO), Genève pour la santé et les droits (OMS, OIT, HCR, HCDH), Vienne pour l'atome (AIEA), Washington pour l'argent (FMI, Banque mondiale).\n• Les dates à connaître : UPU 1874 (la plus ancienne), FMI et Banque mondiale 1944, FAO 1945, UNESCO et OIT 1946, OACI 1947, OMS 1948, HCR 1950, AIEA 1957, HCDH 1993.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p04_q6",
            "type": "mcq",
            "prompt": "Où se trouve le siège de l'UNESCO ?",
            "options": [
              "À Genève",
              "À Rome",
              "À Paris",
              "À Vienne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le siège de l'UNESCO (Organisation des Nations Unies pour l'éducation, la science et la culture) est à Paris."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p04_q1",
          "type": "mcq",
          "prompt": "Quel est le rôle du Conseil économique et social ?",
          "options": [
            "Juger les différends entre États",
            "Coordonner les activités liées à la démocratie sociale et aux questions économiques",
            "Contrôler les territoires sous tutelle",
            "Voter le budget de l'ONU"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le Conseil économique et social coordonne toutes les activités ayant trait à la démocratie sociale et aux questions économiques."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p04_q2",
          "type": "mcq",
          "prompt": "Où siège la Cour internationale de justice, et de combien de juges est-elle composée ?",
          "options": [
            "À New York, 5 juges",
            "À La Haye, 15 juges élus pour 9 ans",
            "À Genève, 54 juges",
            "À Paris, 10 juges"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La Cour internationale de justice siège à La Haye (Pays-Bas) et se compose de quinze juges élus pour un mandat de neuf ans."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p04_q3",
          "type": "mcq",
          "prompt": "Quel est le rôle du Conseil de tutelle ?",
          "options": [
            "Contrôler l'administration des territoires placés sous mandat des Nations Unies",
            "Élire le secrétaire général",
            "Coordonner la lutte contre la drogue",
            "Voter les résolutions du Conseil de sécurité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Conseil de tutelle contrôle l'administration des territoires placés sous mandat des Nations Unies, comme le Timor-Oriental et le Kosovo."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p04_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces institutions est un organisme spécialisé de l'ONU à caractère social, culturel et humanitaire ?",
          "options": [
            "L'AIEA",
            "L'UNESCO, dont le siège est à Paris",
            "Le GATT",
            "L'UPU"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'UNESCO (Organisation des Nations Unies pour l'éducation, la science et la culture), dont le siège est à Paris, est un organisme à caractère social, culturel et humanitaire. L'AIEA et l'UPU sont techniques, le GATT est économique."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p04_q5",
          "type": "mcq",
          "prompt": "Lequel de ces organismes est à caractère économique ?",
          "options": [
            "L'OMS",
            "L'UNESCO",
            "Le FMI, créé à Washington en 1944",
            "L'OACI"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le FMI (Fonds monétaire international), créé à Washington en 1944, est un organisme à caractère économique. L'OMS et l'UNESCO sont sociaux et humanitaires, l'OACI est technique."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p04_q6",
          "type": "mcq",
          "prompt": "Où se trouve le siège de l'UNESCO ?",
          "options": [
            "À Genève",
            "À Rome",
            "À Paris",
            "À Vienne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le siège de l'UNESCO (Organisation des Nations Unies pour l'éducation, la science et la culture) est à Paris."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t1_l01_onu_p05",
      "order": 5,
      "title": "Les succès de l'ONU",
      "summary": "Maintien de la paix, droits de l'homme, démocratie, progrès économique, social et humanitaire : les réussites de l'organisation.",
      "conceptExplanation": "Le bilan de l'ONU comprend des succès dans plusieurs domaines.\n• Le maintien de la paix et de la sécurité internationale. La prévention des conflits : le parrainage d'accords internationaux sur le désarmement et la dénucléarisation, le contrôle avec l'AIEA du nucléaire, les médiations ou actions diplomatiques du secrétaire général sur recommandations de l'Assemblée générale et selon les résolutions du Conseil de sécurité, la supervision des processus électoraux. Le règlement des conflits : les pressions du Conseil de sécurité sur les belligérants (prises de résolutions contraignantes, menace de sanction). Exemples : la Côte d'Ivoire (2002), le Liberia (2001). L'envoi des forces d'interposition ou d'intervention (les casques bleus) : la Corée (1950), l'Égypte (1956), le Congo (1961), Cuba (1962), le Koweït (1990), la Côte d'Ivoire 2003. L'ONU obtient le prix Nobel de la paix en 1988.\n• Les actions relatives aux droits de l'homme. La législation et l'application des droits de l'homme : la Déclaration universelle des droits de l'homme le 10 décembre 1948, les actions pour l'indépendance des États africains, la lutte contre les tortures et l'esclavage, l'institution d'un Tribunal pénal international (TPI) pour le Rwanda et le Burundi, et de la CPI. La CPI a jugé des responsables de violations des droits de l'homme (Slobodan Milosevic, Radovan Karadzic, Charles Taylor, Jean-Pierre Bemba). La promotion de la démocratie : l'ONU apporte une assistance technique et envoie des observateurs aux États en période électorale. Exemples : Guinée (2010), Côte d'Ivoire (2010).\n• Les actions pour le progrès économique, social et humanitaire. La lutte contre la pauvreté et le sous-développement : l'ONU intervient par le biais des institutions financières et techniques (FMI, Banque mondiale, PNUD, ONUDI). Les actions de progrès social : assistance financière et matérielle dans l'éducation et la culture avec l'UNICEF et l'UNESCO, les actions de l'OMS dans le domaine de la santé, la lutte contre le réchauffement climatique (la conférence de Rio en 1992). L'action humanitaire sous toutes ses formes : l'intervention des organismes spécialisés en cas de guerre, de catastrophe naturelle, de famine.",
      "keyRule": "Les succès de l'ONU : la paix (prévention et règlement des conflits, casques bleus), les droits de l'homme (DUDH 1948, CPI), la démocratie (observateurs électoraux) et le progrès économique, social et humanitaire.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les succès et les échecs de l'ONU",
        "statement": "Classe dans le tableau les succès et échecs suivants de l'ONU : 1. Persistance de la pauvreté dans le monde. 2. Diffusion du droit international humanitaire (DIH). 3. Octroi de subventions aux pays touchés par la pandémie de Covid-19. 4. Persistance de la faim dans le monde. 5. Soutien aux réfugiés dans le monde. 6. Appui aux cantines scolaires (PAM) en Côte d'Ivoire. 7. Utilisation abusive du droit de véto.",
        "methodSteps": [
          "Succès : 2. Diffusion du droit international humanitaire (DIH) — une avancée du droit.",
          "Succès : 3. Octroi de subventions aux pays touchés par la pandémie de Covid-19 — une aide concrète.",
          "Succès : 5. Soutien aux réfugiés dans le monde et 6. Appui aux cantines scolaires (PAM) en Côte d'Ivoire — l'action humanitaire.",
          "Échecs : 1. Persistance de la pauvreté dans le monde et 4. Persistance de la faim dans le monde — les insuffisances économiques et humanitaires.",
          "Échec : 7. Utilisation abusive du droit de véto — un problème institutionnel."
        ],
        "conclusion": "Succès : diffusion du DIH, subventions Covid-19, soutien aux réfugiés, cantines scolaires du PAM. Échecs : persistance de la pauvreté et de la faim, usage abusif du véto."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La prévention des conflits",
          "stepTheme": "La prévention des conflits",
          "stepBadge": "La prévention des conflits",
          "paragraphText": "• Premier succès : la prévention des conflits.\n• Le parrainage d'accords internationaux sur le désarmement et la dénucléarisation, le contrôle du nucléaire avec l'AIEA.\n• Les médiations ou actions diplomatiques du secrétaire général, sur recommandations de l'Assemblée générale et selon les résolutions du Conseil de sécurité, et la supervision des processus électoraux.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p05_q1",
            "type": "mcq",
            "prompt": "Comment l'ONU prévient-elle les conflits ?",
            "options": [
              "En envoyant des casques bleus dans tous les pays",
              "Par le parrainage d'accords de désarmement et de dénucléarisation, le contrôle du nucléaire par l'AIEA, les médiations et la supervision des élections",
              "En excluant les États en conflit",
              "En interdisant toute armée nationale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ONU prévient les conflits par le parrainage d'accords de désarmement et de dénucléarisation, le contrôle du nucléaire par l'AIEA, les médiations du secrétaire général et la supervision des processus électoraux."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le règlement des conflits et les casques bleus",
          "stepTheme": "Le règlement des conflits et les casques bleus",
          "stepBadge": "Le règlement des conflits et les casques bleus",
          "paragraphText": "• Le règlement des conflits : les pressions du Conseil de sécurité sur les belligérants (prises de résolutions contraignantes, menace de sanction). Exemples : la Côte d'Ivoire (2002), le Liberia (2001).\n• L'envoi des forces d'interposition ou d'intervention (les casques bleus) : la Corée (1950), l'Égypte (1956), le Congo (1961), Cuba (1962), le Koweït (1990), la Côte d'Ivoire 2003.\n• L'ONU obtient le prix Nobel de la paix en 1988.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p05_q2",
            "type": "mcq",
            "prompt": "Dans quel pays les casques bleus sont-ils intervenus en 1950 ?",
            "options": [
              "En Corée",
              "En Côte d'Ivoire",
              "Au Koweït",
              "Au Congo"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les casques bleus sont intervenus en Corée en 1950, puis en Égypte (1956), au Congo (1961), à Cuba (1962), au Koweït (1990) et en Côte d'Ivoire (2003)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les droits de l'homme",
          "stepTheme": "Les droits de l'homme",
          "stepBadge": "Les droits de l'homme",
          "paragraphText": "• La Déclaration universelle des droits de l'homme est adoptée le 10 décembre 1948.\n• Les actions pour l'indépendance des États africains, la lutte contre les tortures et l'esclavage.\n• L'institution d'un Tribunal pénal international (TPI) pour le Rwanda et le Burundi, et de la CPI, qui a jugé des responsables de violations des droits de l'homme (Slobodan Milosevic, Radovan Karadzic, Charles Taylor, Jean-Pierre Bemba).",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p05_q3",
            "type": "mcq",
            "prompt": "Quand la Déclaration universelle des droits de l'homme est-elle adoptée ?",
            "options": [
              "Le 24 octobre 1945",
              "Le 10 décembre 1948",
              "Le 26 juin 1945",
              "Le 1er janvier 1942"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La Déclaration universelle des droits de l'homme est adoptée le 10 décembre 1948."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La promotion de la démocratie",
          "stepTheme": "La promotion de la démocratie",
          "stepBadge": "La promotion de la démocratie",
          "paragraphText": "• L'ONU apporte une assistance technique et envoie des observateurs aux États en période électorale.\n• Exemples : Guinée (2010), Côte d'Ivoire (2010).\n• C'est l'une des actions de l'ONU en faveur des droits de l'homme et de la démocratie.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p05_q4",
            "type": "mcq",
            "prompt": "Comment l'ONU promeut-elle la démocratie ?",
            "options": [
              "En imposant un régime politique aux États",
              "En apportant une assistance technique et en envoyant des observateurs aux élections",
              "En excluant les États non démocratiques",
              "En nommant les présidents des États membres"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ONU promeut la démocratie en apportant une assistance technique et en envoyant des observateurs aux États en période électorale, comme en Guinée et en Côte d'Ivoire en 2010."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Succès ou échec ? Le piège du classement",
          "stepTheme": "Succès ou échec ? Le piège du classement",
          "stepBadge": "Succès ou échec ? Le piège du classement",
          "paragraphText": "• Piège d'examen : tout ce qui commence par « persistance » est un échec (persistance de la pauvreté, persistance de la faim), alors que les aides concrètes sont des succès.\n• Succès : la diffusion du droit international humanitaire, l'octroi de subventions aux pays touchés par la pandémie de Covid-19, le soutien aux réfugiés, l'appui aux cantines scolaires (PAM) en Côte d'Ivoire.\n• Échec : l'utilisation abusive du droit de véto, qui paralyse le Conseil de sécurité.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p05_q5",
            "type": "mcq",
            "prompt": "Lequel des éléments suivants est un succès de l'ONU ?",
            "options": [
              "La persistance de la pauvreté dans le monde",
              "L'octroi de subventions aux pays touchés par la pandémie de Covid-19",
              "L'utilisation abusive du droit de véto",
              "La persistance de la faim dans le monde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'octroi de subventions aux pays touchés par la pandémie de Covid-19 est un succès de l'action humanitaire de l'ONU. La persistance de la pauvreté et de la faim, ainsi que l'usage abusif du véto, sont des échecs."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le prix Nobel de la paix 1988",
          "stepTheme": "Le prix Nobel de la paix 1988",
          "stepBadge": "Le prix Nobel de la paix 1988",
          "paragraphText": "• En 1988, l'ONU obtient le prix Nobel de la paix pour son action en faveur du maintien de la paix.\n• C'est la reconnaissance internationale de ses succès dans le règlement des conflits.\n• Autres succès à retenir : la lutte contre la pauvreté et le sous-développement (FMI, Banque mondiale, PNUD, ONUDI), l'éducation et la culture (UNICEF, UNESCO), la santé (OMS), la lutte contre le réchauffement climatique (conférence de Rio en 1992) et l'action humanitaire en cas de guerre, de catastrophe naturelle ou de famine.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p05_q6",
            "type": "mcq",
            "prompt": "Quelle distinction l'ONU obtient-elle en 1988 ?",
            "options": [
              "Le prix Nobel de littérature",
              "Le prix Nobel de la paix",
              "Le prix Nobel d'économie",
              "Le prix Nobel de chimie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ONU obtient le prix Nobel de la paix en 1988, en reconnaissance de son action pour le maintien de la paix."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p05_q1",
          "type": "mcq",
          "prompt": "Comment l'ONU prévient-elle les conflits ?",
          "options": [
            "En envoyant des casques bleus dans tous les pays",
            "Par le parrainage d'accords de désarmement et de dénucléarisation, le contrôle du nucléaire par l'AIEA, les médiations et la supervision des élections",
            "En excluant les États en conflit",
            "En interdisant toute armée nationale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ONU prévient les conflits par le parrainage d'accords de désarmement et de dénucléarisation, le contrôle du nucléaire par l'AIEA, les médiations du secrétaire général et la supervision des processus électoraux."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p05_q2",
          "type": "mcq",
          "prompt": "Dans quel pays les casques bleus sont-ils intervenus en 1950 ?",
          "options": [
            "En Corée",
            "En Côte d'Ivoire",
            "Au Koweït",
            "Au Congo"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les casques bleus sont intervenus en Corée en 1950, puis en Égypte (1956), au Congo (1961), à Cuba (1962), au Koweït (1990) et en Côte d'Ivoire (2003)."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p05_q3",
          "type": "mcq",
          "prompt": "Quand la Déclaration universelle des droits de l'homme est-elle adoptée ?",
          "options": [
            "Le 24 octobre 1945",
            "Le 10 décembre 1948",
            "Le 26 juin 1945",
            "Le 1er janvier 1942"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La Déclaration universelle des droits de l'homme est adoptée le 10 décembre 1948."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p05_q4",
          "type": "mcq",
          "prompt": "Comment l'ONU promeut-elle la démocratie ?",
          "options": [
            "En imposant un régime politique aux États",
            "En apportant une assistance technique et en envoyant des observateurs aux élections",
            "En excluant les États non démocratiques",
            "En nommant les présidents des États membres"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ONU promeut la démocratie en apportant une assistance technique et en envoyant des observateurs aux États en période électorale, comme en Guinée et en Côte d'Ivoire en 2010."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p05_q5",
          "type": "mcq",
          "prompt": "Lequel des éléments suivants est un succès de l'ONU ?",
          "options": [
            "La persistance de la pauvreté dans le monde",
            "L'octroi de subventions aux pays touchés par la pandémie de Covid-19",
            "L'utilisation abusive du droit de véto",
            "La persistance de la faim dans le monde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'octroi de subventions aux pays touchés par la pandémie de Covid-19 est un succès de l'action humanitaire de l'ONU. La persistance de la pauvreté et de la faim, ainsi que l'usage abusif du véto, sont des échecs."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p05_q6",
          "type": "mcq",
          "prompt": "Quelle distinction l'ONU obtient-elle en 1988 ?",
          "options": [
            "Le prix Nobel de littérature",
            "Le prix Nobel de la paix",
            "Le prix Nobel d'économie",
            "Le prix Nobel de chimie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ONU obtient le prix Nobel de la paix en 1988, en reconnaissance de son action pour le maintien de la paix."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t1_l01_onu_p06",
      "order": 6,
      "title": "Les limites de l'ONU",
      "summary": "Précarité de la paix, problèmes institutionnels, échecs des casques bleus, insuffisances en matière de droits de l'homme et dans les domaines économique, social et humanitaire.",
      "conceptExplanation": "Le bilan de l'ONU comporte aussi des limites.\n• La précarité de la paix et de la sécurité. Le non-respect des décisions de l'ONU : les attaques contre l'ONU et la contestation des résolutions (Irak, Côte d'Ivoire, Kosovo). Les problèmes institutionnels : l'usage abusif du droit de véto par les membres permanents du Conseil de sécurité, le retard des cotisations, l'absence de pouvoir du secrétaire général, la lenteur, la passivité de l'ONU, l'impuissance pendant la guerre froide, la toute-puissance des USA utilisant l'ONU à sa guise, l'importance des charges administratives, l'ampleur et les coûts des opérations de l'ONU dans le monde, le non-respect des principes de l'ONU. L'échec des casques bleus : la Somalie, la crise israélo-palestinienne. La persistance des conflits et le terrorisme international : la guerre israélo-palestinienne, l'Afghanistan, l'Ouest-africain.\n• Les insuffisances en matière de droits de l'homme. Le non-respect des droits de l'homme est fréquent, à travers l'oppression des libertés (liberté d'expression), le déficit en démocratie dans de nombreux pays, etc.\n• Les insuffisances dans les domaines économique, social et humanitaire. Au niveau économique : un écart de plus en plus grand entre pays riches et pays pauvres. Au niveau social : la pauvreté est grandissante. Au niveau humanitaire : l'insuffisance des secours de l'ONU face aux catastrophes, la famine, le réchauffement climatique, la pandémie du SIDA, le débordement avec la COVID.",
      "keyRule": "Les limites de l'ONU : le véto abusif, l'impuissance face aux grandes puissances, l'échec des casques bleus (Somalie, crise israélo-palestinienne) et la persistance de la pauvreté, de la faim et des conflits.",
      "formulas": [],
      "workedExample": {
        "title": "Juger les propositions sur le bilan de l'ONU",
        "statement": "Voici des propositions relatives au bilan de l'ONU depuis sa création. Dis lesquelles sont justes : 1. L'ONU n'a pas pu empêcher le génocide des Tutsi au Rwanda en 1994. 2. La faiblesse de l'ONU réside dans le fait qu'elle n'a pas de force armée. 3. L'usage du droit de véto par les cinq membres permanents est de plus en plus contesté à travers le monde. 4. L'ONU a réussi à s'interposer entre plusieurs forces belligérantes pour arrêter des conflits armés. 5. L'ONU n'agit que par l'adoption de résolutions, ce qui l'a rendue inefficace. 6. L'Afrique siège au Conseil de sécurité de l'ONU.",
        "methodSteps": [
          "1. Juste : la présence des casques bleus n'a pas pu empêcher le génocide rwandais de 1994.",
          "2. Fausse : l'ONU dispose des casques bleus, sa force d'interposition et d'intervention armée, envoyée en Corée, en Égypte, au Congo, au Koweït ou en Côte d'Ivoire.",
          "3. Juste : l'usage abusif du droit de véto est l'un des problèmes institutionnels majeurs de l'ONU.",
          "4. Juste : l'ONU s'est interposée entre plusieurs forces belligérantes pour arrêter des conflits armés, comme en Corée en 1950 ou au Koweït en 1990.",
          "5. Fausse : l'ONU n'agit pas que par des résolutions — elle envoie aussi des casques bleus, fournit une aide humanitaire et mène des actions de développement.",
          "6. À nuancer : des États africains siègent comme membres non permanents du Conseil de sécurité, mais l'Afrique ne dispose d'aucun siège permanent — les dirigeants africains réclament d'ailleurs un poste de membre permanent pour le continent."
        ],
        "conclusion": "Le bilan est nuancé : des succès réels (interpositions, aide humanitaire) et des limites graves (Rwanda 1994, véto abusif, absence de siège permanent pour l'Afrique)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le non-respect des décisions de l'ONU",
          "stepTheme": "Le non-respect des décisions de l'ONU",
          "stepBadge": "Le non-respect des décisions de l'ONU",
          "paragraphText": "• Première limite : la précarité de la paix et de la sécurité.\n• Le non-respect des décisions de l'ONU : les attaques contre l'ONU et la contestation des résolutions.\n• Exemples donnés par le cours : l'Irak, la Côte d'Ivoire, le Kosovo.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p06_q1",
            "type": "mcq",
            "prompt": "Quels exemples le cours donne-t-il du non-respect des décisions de l'ONU ?",
            "options": [
              "La Corée, l'Égypte et le Congo",
              "L'Irak, la Côte d'Ivoire et le Kosovo",
              "La Guinée, le Liberia et le Rwanda",
              "La Somalie, l'Afghanistan et l'Ouest-africain"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cours cite l'Irak, la Côte d'Ivoire et le Kosovo comme exemples d'attaques contre l'ONU et de contestation de ses résolutions."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les problèmes institutionnels",
          "stepTheme": "Les problèmes institutionnels",
          "stepBadge": "Les problèmes institutionnels",
          "paragraphText": "• L'usage abusif du droit de véto par les membres permanents du Conseil de sécurité.\n• Le retard des cotisations, l'absence de pouvoir du secrétaire général, la lenteur et la passivité de l'ONU.\n• L'impuissance pendant la guerre froide, la toute-puissance des USA utilisant l'ONU à sa guise, l'importance des charges administratives, l'ampleur et les coûts des opérations de l'ONU dans le monde, le non-respect des principes de l'ONU.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p06_q2",
            "type": "mcq",
            "prompt": "Lequel des éléments suivants est un problème institutionnel de l'ONU ?",
            "options": [
              "Le nombre trop élevé d'États membres",
              "L'usage abusif du droit de véto par les membres permanents",
              "Le siège de l'ONU à New York",
              "Le nombre de langues officielles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'usage abusif du droit de véto par les membres permanents du Conseil de sécurité est l'un des problèmes institutionnels majeurs de l'ONU, avec le retard des cotisations et l'absence de pouvoir du secrétaire général."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'échec des casques bleus",
          "stepTheme": "L'échec des casques bleus",
          "stepBadge": "L'échec des casques bleus",
          "paragraphText": "• Les casques bleus ont connu des succès, mais aussi des échecs.\n• Échecs cités par le cours : la Somalie et la crise israélo-palestinienne.\n• La présence des casques bleus n'a pas pu empêcher le génocide des Tutsi au Rwanda en 1994.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p06_q3",
            "type": "mcq",
            "prompt": "Dans quels cas les casques bleus ont-ils échoué, selon le cours ?",
            "options": [
              "En Corée et en Égypte",
              "En Somalie et dans la crise israélo-palestinienne",
              "Au Koweït et au Congo",
              "En Côte d'Ivoire et au Liberia"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cours cite la Somalie et la crise israélo-palestinienne comme des échecs des casques bleus. La Corée, l'Égypte, le Koweït et le Congo sont au contraire des exemples d'interventions réussies."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La persistance des conflits et le terrorisme",
          "stepTheme": "La persistance des conflits et le terrorisme",
          "stepBadge": "La persistance des conflits et le terrorisme",
          "paragraphText": "• Malgré l'action de l'ONU, les conflits persistent et le terrorisme international se développe.\n• Exemples : la guerre israélo-palestinienne, l'Afghanistan, l'Ouest-africain.\n• L'action de l'ONU dans le conflit israélo-arabe s'est faite par l'adoption de résolutions, sans parvenir à régler durablement le conflit.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p06_q4",
            "type": "mcq",
            "prompt": "Quels conflits persistent malgré l'action de l'ONU ?",
            "options": [
              "La guerre israélo-palestinienne, l'Afghanistan et l'Ouest-africain",
              "La guerre de Corée et la guerre du Vietnam",
              "La guerre du Golfe et la guerre des Balkans",
              "La crise de Cuba et la crise de Suez"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cours cite la guerre israélo-palestinienne, l'Afghanistan et l'Ouest-africain comme des conflits qui persistent malgré l'action de l'ONU."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les insuffisances en matière de droits de l'homme",
          "stepTheme": "Les insuffisances en matière de droits de l'homme",
          "stepBadge": "Les insuffisances en matière de droits de l'homme",
          "paragraphText": "• Le non-respect des droits de l'homme est fréquent, malgré la Déclaration universelle de 1948.\n• L'oppression des libertés (liberté d'expression) et le déficit en démocratie dans de nombreux pays.\n• Piège : ne pas confondre les succès (la DUDH, la CPI) et les limites (le non-respect fréquent de ces droits sur le terrain).",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p06_q5",
            "type": "mcq",
            "prompt": "Quelle insuffisance l'ONU connaît-elle en matière de droits de l'homme ?",
            "options": [
              "L'absence de Déclaration universelle des droits de l'homme",
              "Le non-respect fréquent des droits de l'homme et le déficit de démocratie dans de nombreux pays",
              "L'absence de Cour internationale de justice",
              "L'interdiction des observateurs électoraux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Malgré la Déclaration universelle des droits de l'homme de 1948, leur non-respect est fréquent, avec l'oppression des libertés et un déficit de démocratie dans de nombreux pays."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les insuffisances économiques, sociales et humanitaires",
          "stepTheme": "Les insuffisances économiques, sociales et humanitaires",
          "stepBadge": "Les insuffisances économiques, sociales et humanitaires",
          "paragraphText": "• Au niveau économique : un écart de plus en plus grand entre pays riches et pays pauvres.\n• Au niveau social : la pauvreté est grandissante.\n• Au niveau humanitaire : l'insuffisance des secours de l'ONU face aux catastrophes, la famine, le réchauffement climatique, la pandémie du SIDA et le débordement avec la COVID.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p06_q6",
            "type": "mcq",
            "prompt": "Que constate le cours au niveau économique ?",
            "options": [
              "Un écart de plus en plus grand entre pays riches et pays pauvres",
              "La disparition de la pauvreté",
              "L'égalité économique entre tous les États",
              "La fin des famines dans le monde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au niveau économique, le cours constate un écart de plus en plus grand entre pays riches et pays pauvres, et une pauvreté grandissante au niveau social."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p06_q1",
          "type": "mcq",
          "prompt": "Quels exemples le cours donne-t-il du non-respect des décisions de l'ONU ?",
          "options": [
            "La Corée, l'Égypte et le Congo",
            "L'Irak, la Côte d'Ivoire et le Kosovo",
            "La Guinée, le Liberia et le Rwanda",
            "La Somalie, l'Afghanistan et l'Ouest-africain"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cours cite l'Irak, la Côte d'Ivoire et le Kosovo comme exemples d'attaques contre l'ONU et de contestation de ses résolutions."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p06_q2",
          "type": "mcq",
          "prompt": "Lequel des éléments suivants est un problème institutionnel de l'ONU ?",
          "options": [
            "Le nombre trop élevé d'États membres",
            "L'usage abusif du droit de véto par les membres permanents",
            "Le siège de l'ONU à New York",
            "Le nombre de langues officielles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'usage abusif du droit de véto par les membres permanents du Conseil de sécurité est l'un des problèmes institutionnels majeurs de l'ONU, avec le retard des cotisations et l'absence de pouvoir du secrétaire général."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p06_q3",
          "type": "mcq",
          "prompt": "Dans quels cas les casques bleus ont-ils échoué, selon le cours ?",
          "options": [
            "En Corée et en Égypte",
            "En Somalie et dans la crise israélo-palestinienne",
            "Au Koweït et au Congo",
            "En Côte d'Ivoire et au Liberia"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cours cite la Somalie et la crise israélo-palestinienne comme des échecs des casques bleus. La Corée, l'Égypte, le Koweït et le Congo sont au contraire des exemples d'interventions réussies."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p06_q4",
          "type": "mcq",
          "prompt": "Quels conflits persistent malgré l'action de l'ONU ?",
          "options": [
            "La guerre israélo-palestinienne, l'Afghanistan et l'Ouest-africain",
            "La guerre de Corée et la guerre du Vietnam",
            "La guerre du Golfe et la guerre des Balkans",
            "La crise de Cuba et la crise de Suez"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cours cite la guerre israélo-palestinienne, l'Afghanistan et l'Ouest-africain comme des conflits qui persistent malgré l'action de l'ONU."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p06_q5",
          "type": "mcq",
          "prompt": "Quelle insuffisance l'ONU connaît-elle en matière de droits de l'homme ?",
          "options": [
            "L'absence de Déclaration universelle des droits de l'homme",
            "Le non-respect fréquent des droits de l'homme et le déficit de démocratie dans de nombreux pays",
            "L'absence de Cour internationale de justice",
            "L'interdiction des observateurs électoraux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Malgré la Déclaration universelle des droits de l'homme de 1948, leur non-respect est fréquent, avec l'oppression des libertés et un déficit de démocratie dans de nombreux pays."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p06_q6",
          "type": "mcq",
          "prompt": "Que constate le cours au niveau économique ?",
          "options": [
            "Un écart de plus en plus grand entre pays riches et pays pauvres",
            "La disparition de la pauvreté",
            "L'égalité économique entre tous les États",
            "La fin des famines dans le monde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au niveau économique, le cours constate un écart de plus en plus grand entre pays riches et pays pauvres, et une pauvreté grandissante au niveau social."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t1_l01_onu_p07",
      "order": 7,
      "title": "Les réformes souhaitables et le bilan mitigé",
      "summary": "Réformer le Conseil de sécurité, démocratiser le fonctionnement de l'ONU et prévenir les conflits : le bilan est mitigé, des réformes structurelles profondes sont demandées.",
      "conceptExplanation": "Face aux limites constatées, le cours propose des réformes et des actions souhaitables.\n• Une réforme du Conseil de sécurité est indispensable, notamment l'usage du droit de véto.\n• Il est indispensable de démocratiser le fonctionnement de l'ONU par le renforcement des pouvoirs de l'Assemblée générale, plus représentative des membres, et du secrétariat, plus présent sur la scène internationale.\n• Il est souhaitable de mettre l'accent sur les missions de prévention des conflits, de s'ingérer dans les crises pour la protection des populations civiles et d'initier de grands projets de développement pour les pays pauvres.\nConclusion de la leçon : créée pour principalement préserver la paix et la sécurité mondiales au sortir de la Deuxième Guerre mondiale, l'ONU connaît des succès certains. Cependant, des problèmes demeurent. Alors, des voix s'élèvent pour demander des réformes structurelles profondes.\nC'est ce bilan mitigé qu'un officiel résume ainsi, lors du 74e anniversaire de l'ONU : « L'ONU est née de la volonté des vainqueurs de la seconde guerre mondiale. Après environ 75 ans d'existence, il faut avoir le courage de l'avouer, elle ne reflète plus la réalité du moment. Au-delà de cet aspect, le bilan de l'organisation est mitigé. De nombreux défis restent à relever. »",
      "keyRule": "Bilan mitigé : des succès certains, des problèmes qui demeurent — la réponse du cours est la réforme (véto, Assemblée générale, prévention), pas la disparition de l'ONU.",
      "formulas": [],
      "workedExample": {
        "title": "Discuter le bilan mitigé de l'ONU",
        "statement": "Situation d'évaluation : lors de la célébration du 74e anniversaire de l'ONU à New York, un officiel déclare : « L'ONU est née de la volonté des vainqueurs de la seconde guerre mondiale. Après environ 75 ans d'existence, il faut avoir le courage de l'avouer, elle ne reflète plus la réalité du moment. Au-delà de cet aspect, le bilan de l'organisation est mitigé. De nombreux défis restent à relever. » Consignes : 1. Dis de quel problème parle l'officiel. 2. Explique le passage : « l'ONU est née de la volonté des vainqueurs de la seconde guerre mondiale ». 3. Partages-tu le point de vue de l'auteur selon lequel « le bilan de l'ONU est mitigé » ? Justifie ta réponse.",
        "methodSteps": [
          "1. Le problème : la représentativité et le bilan de l'ONU après environ 75 ans d'existence — l'organisation ne refléterait plus la réalité du moment.",
          "2. Explication : l'ONU a été créée par les Alliés vainqueurs de la Seconde Guerre mondiale (Roosevelt, Churchill, Staline) ; les cinq membres permanents du Conseil de sécurité, avec droit de véto, sont les grandes puissances de 1945, et ce sont elles qui ont écrit la Charte à San Francisco.",
          "3. Point de vue : oui, le bilan est mitigé. Succès certains : maintien de la paix (casques bleus, Nobel de la paix 1988), droits de l'homme (DUDH 1948, CPI), aide humanitaire. Problèmes qui demeurent : usage abusif du véto, impuissance face à certaines crises (Rwanda 1994, crise israélo-palestinienne), persistance de la pauvreté et de la faim.",
          "4. Conclusion de l'argumentation : c'est pourquoi des voix s'élèvent pour demander des réformes structurelles profondes, notamment du Conseil de sécurité."
        ],
        "conclusion": "Le bilan mitigé se justifie en deux temps : des succès certains d'un côté, des limites graves de l'autre — d'où la demande de réformes, et non la disparition de l'ONU."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Réformer le Conseil de sécurité",
          "stepTheme": "Réformer le Conseil de sécurité",
          "stepBadge": "Réformer le Conseil de sécurité",
          "paragraphText": "• Une réforme du Conseil de sécurité est indispensable, notamment l'usage du droit de véto.\n• Le véto, utilisé de façon abusive par les membres permanents, paralyse souvent les décisions.\n• La question de l'élargissement du Conseil se pose aussi : des puissances comme l'Inde, le Brésil, le Mexique ou le Nigeria, ainsi que l'Afrique, réclament une place de membre permanent.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p07_q1",
            "type": "mcq",
            "prompt": "Quelle réforme du Conseil de sécurité le cours juge-t-il indispensable ?",
            "options": [
              "Supprimer le Conseil de sécurité",
              "Réformer l'usage du droit de véto",
              "Augmenter le nombre de membres permanents à 15",
              "Transférer ses pouvoirs à l'Assemblée générale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une réforme du Conseil de sécurité est indispensable, notamment l'usage du droit de véto, dont l'usage abusif paralyse les décisions."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Démocratiser le fonctionnement de l'ONU",
          "stepTheme": "Démocratiser le fonctionnement de l'ONU",
          "stepBadge": "Démocratiser le fonctionnement de l'ONU",
          "paragraphText": "• Il est indispensable de démocratiser le fonctionnement de l'ONU.\n• Pour cela, il faut renforcer les pouvoirs de l'Assemblée générale, plus représentative des membres, et du secrétariat, plus présent sur la scène internationale.\n• Aujourd'hui, l'Assemblée générale délibère mais ses décisions n'ont aucun caractère contraignant, et le secrétaire général n'a pas de pouvoir propre.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p07_q2",
            "type": "mcq",
            "prompt": "Comment démocratiser le fonctionnement de l'ONU, selon le cours ?",
            "options": [
              "En renforçant les pouvoirs de l'Assemblée générale et du secrétariat",
              "En supprimant l'Assemblée générale",
              "En donnant le véto à tous les États",
              "En réduisant le nombre d'États membres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il faut démocratiser le fonctionnement de l'ONU en renforçant les pouvoirs de l'Assemblée générale, plus représentative des membres, et du secrétariat, plus présent sur la scène internationale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Prévenir les conflits et protéger les civils",
          "stepTheme": "Prévenir les conflits et protéger les civils",
          "stepBadge": "Prévenir les conflits et protéger les civils",
          "paragraphText": "• Il est souhaitable de mettre l'accent sur les missions de prévention des conflits.\n• Il faut s'ingérer dans les crises pour la protection des populations civiles.\n• Il faut aussi initier de grands projets de développement pour les pays pauvres.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p07_q3",
            "type": "mcq",
            "prompt": "Sur quoi faut-il mettre l'accent, selon le cours ?",
            "options": [
              "Sur les missions de prévention des conflits et la protection des populations civiles",
              "Sur l'augmentation des cotisations",
              "Sur la création de nouvelles institutions",
              "Sur la réduction du nombre de casques bleus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il faut mettre l'accent sur les missions de prévention des conflits, s'ingérer dans les crises pour la protection des populations civiles et initier de grands projets de développement pour les pays pauvres."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le bilan mitigé",
          "stepTheme": "Le bilan mitigé",
          "stepBadge": "Le bilan mitigé",
          "paragraphText": "• Conclusion de la leçon : créée pour principalement préserver la paix et la sécurité mondiales au sortir de la Deuxième Guerre mondiale, l'ONU connaît des succès certains.\n• Cependant, des problèmes demeurent.\n• Alors, des voix s'élèvent pour demander des réformes structurelles profondes.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p07_q4",
            "type": "mcq",
            "prompt": "Quel bilan le cours fait-il de l'ONU ?",
            "options": [
              "Un bilan entièrement positif",
              "Un bilan entièrement négatif",
              "Un bilan mitigé : des succès certains, mais des problèmes qui demeurent",
              "Un bilan impossible à établir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le cours conclut à un bilan mitigé : l'ONU connaît des succès certains, mais des problèmes demeurent, d'où la demande de réformes structurelles profondes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "« L'ONU devrait disparaître » : le piège",
          "stepTheme": "« L'ONU devrait disparaître » : le piège",
          "stepBadge": "« L'ONU devrait disparaître » : le piège",
          "paragraphText": "• Piège d'examen : face aux limites de l'ONU, certains disent qu'elle « aurait suffisamment montré ses limites et devait disparaître ».\n• La position du cours n'est pas la disparition : malgré ses limites, l'ONU a des succès réels (maintien de la paix, droits de l'homme, aide humanitaire) et doit être réformée, pas supprimée.\n• Pour argumenter : cite les succès (casques bleus, DUDH 1948, Nobel de la paix 1988, aide humanitaire) puis les limites (véto, Rwanda 1994, pauvreté persistante) et conclus par la réforme.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p07_q5",
            "type": "mcq",
            "prompt": "Que réponds-tu à l'opinion selon laquelle « l'ONU aurait suffisamment montré ses limites et devait disparaître » ?",
            "options": [
              "On est d'accord : l'ONU n'a servi à rien",
              "On n'est pas d'accord : malgré ses limites, l'ONU a des succès réels et doit être réformée, pas supprimée",
              "On est d'accord : les casques bleus n'ont jamais rien fait",
              "On n'est pas d'accord : l'ONU n'a aucune limite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cours ne conclut pas à la disparition de l'ONU : malgré ses limites, elle a des succès certains (paix, droits de l'homme, aide humanitaire) et des voix s'élèvent pour demander des réformes structurelles profondes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "« Elle ne reflète plus la réalité du moment »",
          "stepTheme": "« Elle ne reflète plus la réalité du moment »",
          "stepBadge": "« Elle ne reflète plus la réalité du moment »",
          "paragraphText": "• Lors du 74e anniversaire de l'ONU, un officiel déclare : « L'ONU est née de la volonté des vainqueurs de la seconde guerre mondiale. Après environ 75 ans d'existence, il faut avoir le courage de l'avouer, elle ne reflète plus la réalité du moment. »\n• Pourquoi ? Parce que les cinq membres permanents avec droit de véto sont les grandes puissances de 1945, alors que le monde a changé : de nouveaux pays (Inde, Brésil, Nigeria…) et l'Afrique demandent une place.\n• Le bilan reste mitigé et de nombreux défis restent à relever.",
          "exercise": {
            "id": "terminale_hg_histoire_t1_l01_onu_p07_q6",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que l'ONU « ne reflète plus la réalité du moment » ?",
            "options": [
              "Parce que l'ONU n'a connu que des échecs",
              "Parce que, malgré des succès certains, des problèmes demeurent et les membres permanents de 1945 ne représentent plus le monde d'aujourd'hui",
              "Parce que l'ONU a trop d'États membres",
              "Parce que le secrétaire général l'a demandé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ONU est née de la volonté des vainqueurs de 1945 : ses cinq membres permanents sont les grandes puissances de l'époque, alors que le monde a changé. D'où un bilan mitigé et la demande de réformes structurelles profondes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p07_q1",
          "type": "mcq",
          "prompt": "Quelle réforme du Conseil de sécurité le cours juge-t-il indispensable ?",
          "options": [
            "Supprimer le Conseil de sécurité",
            "Réformer l'usage du droit de véto",
            "Augmenter le nombre de membres permanents à 15",
            "Transférer ses pouvoirs à l'Assemblée générale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une réforme du Conseil de sécurité est indispensable, notamment l'usage du droit de véto, dont l'usage abusif paralyse les décisions."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p07_q2",
          "type": "mcq",
          "prompt": "Comment démocratiser le fonctionnement de l'ONU, selon le cours ?",
          "options": [
            "En renforçant les pouvoirs de l'Assemblée générale et du secrétariat",
            "En supprimant l'Assemblée générale",
            "En donnant le véto à tous les États",
            "En réduisant le nombre d'États membres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il faut démocratiser le fonctionnement de l'ONU en renforçant les pouvoirs de l'Assemblée générale, plus représentative des membres, et du secrétariat, plus présent sur la scène internationale."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p07_q3",
          "type": "mcq",
          "prompt": "Sur quoi faut-il mettre l'accent, selon le cours ?",
          "options": [
            "Sur les missions de prévention des conflits et la protection des populations civiles",
            "Sur l'augmentation des cotisations",
            "Sur la création de nouvelles institutions",
            "Sur la réduction du nombre de casques bleus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il faut mettre l'accent sur les missions de prévention des conflits, s'ingérer dans les crises pour la protection des populations civiles et initier de grands projets de développement pour les pays pauvres."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p07_q4",
          "type": "mcq",
          "prompt": "Quel bilan le cours fait-il de l'ONU ?",
          "options": [
            "Un bilan entièrement positif",
            "Un bilan entièrement négatif",
            "Un bilan mitigé : des succès certains, mais des problèmes qui demeurent",
            "Un bilan impossible à établir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le cours conclut à un bilan mitigé : l'ONU connaît des succès certains, mais des problèmes demeurent, d'où la demande de réformes structurelles profondes."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p07_q5",
          "type": "mcq",
          "prompt": "Que réponds-tu à l'opinion selon laquelle « l'ONU aurait suffisamment montré ses limites et devait disparaître » ?",
          "options": [
            "On est d'accord : l'ONU n'a servi à rien",
            "On n'est pas d'accord : malgré ses limites, l'ONU a des succès réels et doit être réformée, pas supprimée",
            "On est d'accord : les casques bleus n'ont jamais rien fait",
            "On n'est pas d'accord : l'ONU n'a aucune limite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cours ne conclut pas à la disparition de l'ONU : malgré ses limites, elle a des succès certains (paix, droits de l'homme, aide humanitaire) et des voix s'élèvent pour demander des réformes structurelles profondes."
        },
        {
          "id": "terminale_hg_histoire_t1_l01_onu_p07_q6",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que l'ONU « ne reflète plus la réalité du moment » ?",
          "options": [
            "Parce que l'ONU n'a connu que des échecs",
            "Parce que, malgré des succès certains, des problèmes demeurent et les membres permanents de 1945 ne représentent plus le monde d'aujourd'hui",
            "Parce que l'ONU a trop d'États membres",
            "Parce que le secrétaire général l'a demandé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ONU est née de la volonté des vainqueurs de 1945 : ses cinq membres permanents sont les grandes puissances de l'époque, alors que le monde a changé. D'où un bilan mitigé et la demande de réformes structurelles profondes."
        }
      ]
    }
  ]
};
