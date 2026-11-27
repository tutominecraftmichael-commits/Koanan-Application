import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « La dissertation littéraire » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3754
export const FR_TLE_EE_L01_DISSERTATION: CurriculumChapter = {
  "id": "terminale_a1_francais_ee_l01_dissertation_litteraire",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 1,
  "title": "Leçon 1 : La dissertation littéraire",
  "summary": "À partir de sujets sur la fonction de l'écrivain et sur le plaisir de lire, la leçon apprend à traiter une dissertation littéraire : analyser le sujet, rechercher les idées, élaborer un plan, puis rédiger le développement, l'introduction et la conclusion.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3754",
  "points": [
    {
      "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01",
      "order": 1,
      "title": "Analyser le sujet",
      "summary": "Distinguer l'information et la consigne, puis comprendre le sujet pour dégager sa problématique.",
      "conceptExplanation": "La dissertation littéraire est un sujet de réflexion qui porte sur un problème d'ordre littéraire touchant à la poésie, au théâtre, au roman.\nL'analyse du sujet consiste à distinguer, dans un premier temps, les différentes parties du sujet : l'information et la consigne. L'information est la partie du sujet qui contient le thème à développer et la thèse de l'auteur. La consigne est la tâche à accomplir : elle permet de choisir le type de plan à adopter dans le développement.\nPour comprendre le sujet, il faut déterminer le thème abordé à partir de l'analyse de l'information, identifier les mots ou expressions clés puis les expliquer en contexte, reformuler le sujet, et poser le problème que soulève le sujet, c'est-à-dire la problématique.\nDans le sujet 1, tiré de L'extase matérielle de Jean Marie Le Clézio (1967), l'information est « l'écrivain est celui qui montre du doigt une parcelle du monde » : le thème est la fonction de l'écrivain, et la thèse est que l'écrivain montre du doigt une parcelle du monde.",
      "keyRule": "Avant toute recherche d'idées, distingue l'information et la consigne, explique les mots clés, reformule le sujet et pose la problématique.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser le sujet 3 de Roland Barthes (évaluation corrigée)",
        "statement": "Dans Le Degré zéro de l'écriture, Roland Barthes affirme : « L'univers poétique est rempli de tourments qui font des poètes des gens qui n'ont jamais souri. » Expliquez et discutez cette opinion. Relevez les composantes du sujet, le thème, la reformulation et la problématique.",
        "methodSteps": [
          "Composantes : l'information est l'univers poétique rempli de tourments qui font des poètes des gens qui n'ont jamais souri ; la consigne est « expliquez et discutez ».",
          "Thème abordé : la source de l'inspiration poétique.",
          "Reformulation de la thèse : le sujet semble confiner la poésie dans l'expression des sentiments douloureux qui fait du poète un être malheureux.",
          "Problématique : en quoi la souffrance fait-elle du poète un être malheureux ?",
          "Problématique, second aspect : la création poétique n'a-t-elle pas d'autres sources d'inspiration que la souffrance ?"
        ],
        "conclusion": "L'analyse complète donne le thème, la thèse reformulée et une problématique en deux questions, qui commande tout le devoir."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'information du sujet",
          "stepTheme": "L'information du sujet",
          "stepBadge": "L'information du sujet",
          "paragraphText": "• Information : partie du sujet qui contient le thème à développer et la thèse de l'auteur.\nDans le sujet 1, l'information est « l'écrivain est celui qui montre du doigt une parcelle du monde ».",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q1",
            "type": "mcq",
            "prompt": "Dans un sujet de dissertation, l'information contient :",
            "options": [
              "La tâche à accomplir uniquement",
              "Le thème à développer et la thèse de l'auteur",
              "Le plan du développement",
              "Les exemples à utiliser"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit l'information comme la partie du sujet qui contient le thème à développer et la thèse de l'auteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La consigne : expliquez et discutez",
          "stepTheme": "La consigne : expliquez et discutez",
          "stepBadge": "La consigne : expliquez et discutez",
          "paragraphText": "• Consigne : tâche à accomplir ; elle permet de choisir le type de plan à adopter dans le développement.\n« Expliquez » signifie étayer la thèse de l'auteur ; « discutez » signifie montrer les limites, les insuffisances de cette thèse.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q2",
            "type": "mcq",
            "prompt": "Dans la consigne « expliquez et discutez », discuter consiste à :",
            "options": [
              "Répéter la thèse de l'auteur",
              "Illustrer la thèse par des exemples",
              "Montrer les limites ou les insuffisances de la thèse de l'auteur",
              "Reformuler le sujet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Expliquer, c'est étayer la thèse ; discuter, c'est en montrer les limites et les insuffisances."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Expliquer les mots clés en contexte",
          "stepTheme": "Expliquer les mots clés en contexte",
          "stepBadge": "Expliquer les mots clés en contexte",
          "paragraphText": "Méthode : identifier les mots ou expressions clés du sujet, puis les expliquer en contexte.\nDans le sujet 1 : l'écrivain est la personne qui écrit des œuvres littéraires ; montrer du doigt signifie présenter, exposer, dénoncer une situation ; une parcelle du monde désigne certains aspects, certaines réalités de la société.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q3",
            "type": "mcq",
            "prompt": "Dans le sujet de Le Clézio, « montrer du doigt » signifie :",
            "options": [
              "Cacher une situation",
              "Présenter, exposer, dénoncer une situation",
              "Écrire un roman",
              "Lire une œuvre littéraire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'explication en contexte donnée dans la leçon : montrer du doigt, c'est présenter, exposer, dénoncer une situation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Reformuler et poser la problématique",
          "stepTheme": "Reformuler et poser la problématique",
          "stepBadge": "Reformuler et poser la problématique",
          "paragraphText": "Méthode : après l'explication des mots clés, reformuler le sujet, puis poser le problème qu'il soulève.\nSujet 1 reformulé : le rôle de l'écrivain est de mettre à nu certaines réalités sociales. Problématique : quelle est la fonction de l'écrivain dans la société ? Est-ce son unique fonction ?",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q4",
            "type": "mcq",
            "prompt": "La reformulation du sujet 1 de Le Clézio, selon la leçon, est :",
            "options": [
              "Le rôle de l'écrivain est de mettre à nu certaines réalités sociales",
              "Lire les romans procure du plaisir",
              "Le poète n'a jamais souri",
              "Le roman est une œuvre d'imagination en prose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Après explication des mots clés — montrer du doigt : dénoncer ; parcelle du monde : certaines réalités de la société — le sujet se reformule ainsi."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre information et consigne",
          "stepTheme": "Confondre information et consigne",
          "stepBadge": "Confondre information et consigne",
          "paragraphText": "Piège : prendre la citation de l'auteur pour la consigne, ou la consigne pour le thème.\nL'information porte le thème et la thèse ; la consigne dit le travail à faire, par exemple « expliquez et discutez ».",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces parties est la consigne du sujet 2 de Georges Sand ?",
            "options": [
              "« Lire les romans, c'est apprendre à se donner du plaisir »",
              "Le Roman, Édition du Seuil, 1971",
              "Le thème du plaisir de lire",
              "« Expliquez et discutez » cette affirmation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La consigne est la tâche à accomplir : expliquez et discutez. La citation de Georges Sand est l'information."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le sujet 2 de Georges Sand analysé",
          "stepTheme": "Le sujet 2 de Georges Sand analysé",
          "stepBadge": "Le sujet 2 de Georges Sand analysé",
          "paragraphText": "Exemple d'application donné dans la leçon : pour le sujet 2, l'information est « Lire les romans, c'est apprendre à se donner du plaisir ».\nLes mots clés y sont expliqués : le roman est une œuvre d'imagination constituée par un récit en prose d'une certaine longueur ; le plaisir est un sentiment, une sensation agréable, un divertissement. Problématique : en quoi la lecture d'un roman procure-t-elle du plaisir au lecteur ? Le roman n'a-t-il pas d'autres effets sur le lecteur ?",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q6",
            "type": "mcq",
            "prompt": "Dans le sujet de Georges Sand, le mot « plaisir » est expliqué comme :",
            "options": [
              "Une œuvre d'imagination en prose",
              "Un sentiment, une sensation agréable, un divertissement",
              "La fonction de l'écrivain",
              "Une parcelle du monde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'explication en contexte du mot clé « plaisir » dans l'application de la leçon sur le sujet 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q1",
          "type": "mcq",
          "prompt": "Dans un sujet de dissertation, l'information contient :",
          "options": [
            "La tâche à accomplir uniquement",
            "Le thème à développer et la thèse de l'auteur",
            "Le plan du développement",
            "Les exemples à utiliser"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit l'information comme la partie du sujet qui contient le thème à développer et la thèse de l'auteur."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q2",
          "type": "mcq",
          "prompt": "Dans la consigne « expliquez et discutez », discuter consiste à :",
          "options": [
            "Répéter la thèse de l'auteur",
            "Illustrer la thèse par des exemples",
            "Montrer les limites ou les insuffisances de la thèse de l'auteur",
            "Reformuler le sujet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Expliquer, c'est étayer la thèse ; discuter, c'est en montrer les limites et les insuffisances."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q3",
          "type": "mcq",
          "prompt": "Dans le sujet de Le Clézio, « montrer du doigt » signifie :",
          "options": [
            "Cacher une situation",
            "Présenter, exposer, dénoncer une situation",
            "Écrire un roman",
            "Lire une œuvre littéraire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'explication en contexte donnée dans la leçon : montrer du doigt, c'est présenter, exposer, dénoncer une situation."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q4",
          "type": "mcq",
          "prompt": "La reformulation du sujet 1 de Le Clézio, selon la leçon, est :",
          "options": [
            "Le rôle de l'écrivain est de mettre à nu certaines réalités sociales",
            "Lire les romans procure du plaisir",
            "Le poète n'a jamais souri",
            "Le roman est une œuvre d'imagination en prose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Après explication des mots clés — montrer du doigt : dénoncer ; parcelle du monde : certaines réalités de la société — le sujet se reformule ainsi."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces parties est la consigne du sujet 2 de Georges Sand ?",
          "options": [
            "« Lire les romans, c'est apprendre à se donner du plaisir »",
            "Le Roman, Édition du Seuil, 1971",
            "Le thème du plaisir de lire",
            "« Expliquez et discutez » cette affirmation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La consigne est la tâche à accomplir : expliquez et discutez. La citation de Georges Sand est l'information."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p01_q6",
          "type": "mcq",
          "prompt": "Dans le sujet de Georges Sand, le mot « plaisir » est expliqué comme :",
          "options": [
            "Une œuvre d'imagination en prose",
            "Un sentiment, une sensation agréable, un divertissement",
            "La fonction de l'écrivain",
            "Une parcelle du monde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'explication en contexte du mot clé « plaisir » dans l'application de la leçon sur le sujet 2."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02",
      "order": 2,
      "title": "Rechercher les idées",
      "summary": "Trouver, pêle-mêle, les arguments et les exemples qui répondent au problème posé par le sujet.",
      "conceptExplanation": "La recherche des idées consiste à trouver des arguments pêle-mêle qui répondent au problème posé par le sujet. Cette étape se fait sans que les idées ne soient ordonnées.\nPour éviter de faire un hors-sujet, il faut se rappeler la thèse, la problématique du sujet et le champ de recherche des idées. En fonction de l'orientation — champ de recherche des exemples : roman, poésie, théâtre ou même la littérature — il faut se rappeler les œuvres lues ou étudiées qui traitent du problème relevé dans l'analyse du sujet.\nPour le sujet 1, la leçon trouve notamment : l'écrivain expose des aspects néfastes des pratiques socio-culturelles (Rebelle de Fatou Keïta, dénonciation de l'excision) ; il est le défenseur des victimes de discriminations ou d'injustices sociales (Le vieux nègre et la médaille de Ferdinand Oyono, à travers Méka) ; il dénonce les abus des pouvoirs politiques (Les Châtiments de Victor Hugo) ; il dénonce les travers sociaux (Dom Juan de Molière et le libertinage des nobles).",
      "keyRule": "Cherche les idées pêle-mêle, mais garde toujours sous les yeux la thèse, la problématique et le champ de recherche pour éviter le hors-sujet.",
      "formulas": [],
      "workedExample": {
        "title": "Rechercher les idées du sujet 3 de Barthes (évaluation corrigée)",
        "statement": "Pour le sujet 3 sur les tourments des poètes, rappelle le problème posé, puis recherche les idées liées à cette problématique.",
        "methodSteps": [
          "Le problème posé est celui de l'inspiration poétique.",
          "Côté souffrance : la souffrance causée par les situations difficiles de la vie.",
          "Côté souffrance : la souffrance causée par les angoisses existentielles.",
          "Côté souffrance : la souffrance causée par les guerres.",
          "Autres sources possibles : la beauté inspire le poète, l'amour inspire le poète, la nature est une source d'inspiration."
        ],
        "conclusion": "La recherche fournit, sans ordre, des idées des deux côtés de la problématique : la souffrance et les autres sources d'inspiration."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Des arguments pêle-mêle",
          "stepTheme": "Des arguments pêle-mêle",
          "stepBadge": "Des arguments pêle-mêle",
          "paragraphText": "• Recherche des idées : étape qui consiste à trouver des arguments pêle-mêle qui répondent au problème posé par le sujet.\nÀ ce stade, les idées ne sont pas encore ordonnées : l'ordre viendra avec l'élaboration du plan.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q1",
            "type": "mcq",
            "prompt": "La recherche des idées se fait :",
            "options": [
              "En rédigeant directement les paragraphes",
              "En trouvant des arguments pêle-mêle, sans les ordonner",
              "En écrivant l'introduction d'abord",
              "En classant les idées par ordre d'importance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que cette étape se fait sans que les idées ne soient ordonnées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Éviter le hors-sujet",
          "stepTheme": "Éviter le hors-sujet",
          "stepBadge": "Éviter le hors-sujet",
          "paragraphText": "Méthode : pour éviter de faire un hors-sujet, se rappeler trois repères pendant la recherche.\n• La thèse du sujet\n• La problématique du sujet\n• Le champ de recherche des idées",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q2",
            "type": "mcq",
            "prompt": "Pour éviter le hors-sujet pendant la recherche des idées, il faut se rappeler :",
            "options": [
              "Uniquement les œuvres préférées",
              "La thèse, la problématique et le champ de recherche des idées",
              "Le nombre de paragraphes à rédiger",
              "La conclusion du devoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois repères indiqués par la leçon pour rester dans le sujet."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le champ de recherche des exemples",
          "stepTheme": "Le champ de recherche des exemples",
          "stepBadge": "Le champ de recherche des exemples",
          "paragraphText": "Le champ de recherche des exemples oriente le choix des œuvres : roman, poésie, théâtre ou même la littérature en général.\nIl faut alors se rappeler les œuvres lues ou étudiées qui traitent du problème relevé dans l'analyse du sujet.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q3",
            "type": "mcq",
            "prompt": "Selon la leçon, les exemples de la recherche doivent être cherchés parmi :",
            "options": [
              "Des œuvres inventées pour le devoir",
              "Des œuvres quelconques sans rapport avec le problème",
              "Les œuvres lues ou étudiées qui traitent du problème du sujet",
              "Les seules œuvres poétiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La recherche s'appuie sur les œuvres lues ou étudiées qui traitent du problème relevé dans l'analyse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Dénoncer les injustices : Oyono",
          "stepTheme": "Dénoncer les injustices : Oyono",
          "stepBadge": "Dénoncer les injustices : Oyono",
          "paragraphText": "Exemple de la recherche pour le sujet 1 : l'écrivain est le défenseur des victimes de discriminations ou d'injustices sociales.\nIllustration : Le vieux nègre et la médaille de Ferdinand Oyono met à nu les injustices subies par les Noirs pendant la colonisation, à travers le personnage de Méka.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q4",
            "type": "mcq",
            "prompt": "Dans la recherche du sujet 1, Le vieux nègre et la médaille illustre :",
            "options": [
              "Le plaisir de lire un roman",
              "La défense des victimes de discriminations ou d'injustices sociales",
              "La recherche du beau",
              "Le divertissement du lecteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'œuvre d'Oyono met à nu, à travers Méka, les injustices subies par les Noirs pendant la colonisation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ordonner trop tôt ou partir hors champ",
          "stepTheme": "Ordonner trop tôt ou partir hors champ",
          "stepBadge": "Ordonner trop tôt ou partir hors champ",
          "paragraphText": "Piège : vouloir déjà classer et rédiger pendant la recherche, ou puiser des exemples hors du champ indiqué par le sujet.\nLa recherche livre des idées en vrac, dans le champ du sujet ; le classement est l'étape suivante, celle du plan.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q5",
            "type": "mcq",
            "prompt": "Quel comportement est une erreur pendant la recherche des idées ?",
            "options": [
              "Noter les arguments au fur et à mesure",
              "Se rappeler la problématique",
              "Chercher des exemples sans rapport avec le problème du sujet",
              "Mobiliser les œuvres étudiées en classe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Des exemples sans rapport avec le problème relèvent du hors-sujet : la recherche reste guidée par la thèse, la problématique et le champ de recherche."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Rebelle et Dom Juan dans la recherche",
          "stepTheme": "Rebelle et Dom Juan dans la recherche",
          "stepBadge": "Rebelle et Dom Juan dans la recherche",
          "paragraphText": "Deux autres idées trouvées pour le sujet 1 : l'écrivain expose les aspects néfastes des pratiques socio-culturelles, comme l'excision dénoncée dans Rebelle de Fatou Keïta.\nIl dénonce aussi les travers sociaux : Dom Juan de Molière expose le libertinage dont font preuve les nobles de la société française du XVIIe siècle.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q6",
            "type": "mcq",
            "prompt": "Rebelle de Fatou Keïta est cité dans la recherche du sujet 1 pour :",
            "options": [
              "Le divertissement du lecteur",
              "L'expression de l'amour",
              "La beauté du style",
              "La dénonciation de l'excision, pratique culturelle odieuse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Rebelle illustre l'exposition des aspects néfastes des pratiques socio-culturelles : la dénonciation de l'excision des filles."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q1",
          "type": "mcq",
          "prompt": "La recherche des idées se fait :",
          "options": [
            "En rédigeant directement les paragraphes",
            "En trouvant des arguments pêle-mêle, sans les ordonner",
            "En écrivant l'introduction d'abord",
            "En classant les idées par ordre d'importance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que cette étape se fait sans que les idées ne soient ordonnées."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q2",
          "type": "mcq",
          "prompt": "Pour éviter le hors-sujet pendant la recherche des idées, il faut se rappeler :",
          "options": [
            "Uniquement les œuvres préférées",
            "La thèse, la problématique et le champ de recherche des idées",
            "Le nombre de paragraphes à rédiger",
            "La conclusion du devoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois repères indiqués par la leçon pour rester dans le sujet."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q3",
          "type": "mcq",
          "prompt": "Selon la leçon, les exemples de la recherche doivent être cherchés parmi :",
          "options": [
            "Des œuvres inventées pour le devoir",
            "Des œuvres quelconques sans rapport avec le problème",
            "Les œuvres lues ou étudiées qui traitent du problème du sujet",
            "Les seules œuvres poétiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La recherche s'appuie sur les œuvres lues ou étudiées qui traitent du problème relevé dans l'analyse."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q4",
          "type": "mcq",
          "prompt": "Dans la recherche du sujet 1, Le vieux nègre et la médaille illustre :",
          "options": [
            "Le plaisir de lire un roman",
            "La défense des victimes de discriminations ou d'injustices sociales",
            "La recherche du beau",
            "Le divertissement du lecteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'œuvre d'Oyono met à nu, à travers Méka, les injustices subies par les Noirs pendant la colonisation."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q5",
          "type": "mcq",
          "prompt": "Quel comportement est une erreur pendant la recherche des idées ?",
          "options": [
            "Noter les arguments au fur et à mesure",
            "Se rappeler la problématique",
            "Chercher des exemples sans rapport avec le problème du sujet",
            "Mobiliser les œuvres étudiées en classe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Des exemples sans rapport avec le problème relèvent du hors-sujet : la recherche reste guidée par la thèse, la problématique et le champ de recherche."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p02_q6",
          "type": "mcq",
          "prompt": "Rebelle de Fatou Keïta est cité dans la recherche du sujet 1 pour :",
          "options": [
            "Le divertissement du lecteur",
            "L'expression de l'amour",
            "La beauté du style",
            "La dénonciation de l'excision, pratique culturelle odieuse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Rebelle illustre l'exposition des aspects néfastes des pratiques socio-culturelles : la dénonciation de l'excision des filles."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03",
      "order": 3,
      "title": "Élaborer un plan",
      "summary": "Regrouper les idées convergentes, les hiérarchiser et choisir le plan imposé par la consigne.",
      "conceptExplanation": "Pour réussir l'élaboration du plan, il faut regrouper toutes les idées convergentes et trouver des titres correspondants. Il faut aussi hiérarchiser ces idées, c'est-à-dire les classer selon un ordre logique et d'importance.\nL'élaboration du plan est fonction du verbe de la consigne. En se référant à la consigne « expliquez et discutez », le plan qui s'impose est le plan dialectique. La thèse est la justification de la pensée de l'auteur ; l'antithèse présente les limites ou les insuffisances de la thèse.\nPour le sujet 1, la thèse — le rôle de l'écrivain consiste à dénoncer certaines tares sociales — se déploie sur les plans politique (mauvaise gouvernance, abus du pouvoir), social (inégalités, injustices), culturel (pratiques culturelles néfastes, désorganisation de la structure culturelle locale) et dans la critique des mœurs. Après la transition — peut-on confiner l'écrivain dans l'unique fonction de dénonciateur ? — l'antithèse présente les autres rôles assignés à l'écrivain : expression des sentiments personnels, divertissement, recherche du beau et de l'esthétique.",
      "keyRule": "Regroupe les idées convergentes, hiérarchise-les, et laisse la consigne choisir le plan : « expliquez et discutez » impose le plan dialectique.",
      "formulas": [],
      "workedExample": {
        "title": "Élaborer le plan de la thèse du sujet 3 (évaluation corrigée)",
        "statement": "Élabore le plan détaillé de la thèse du sujet 3 de Barthes : l'univers poétique rempli de tourments.",
        "methodSteps": [
          "Grande idée 1 : la souffrance causée par les situations difficiles de la vie — perte d'un être cher (Les Contemplations de Victor Hugo, qui pleure sa fille Léopoldine), amour malheureux (Les Nuits d'Alfred de Musset), amour impossible (Phèdre de Jean Racine).",
          "Grande idée 2 : la souffrance causée par les angoisses existentielles — fuite du temps (« Le Lac » de Lamartine), mal de vivre (le « Spleen » dans Les Fleurs du mal de Baudelaire).",
          "Grande idée 2, suite : la souffrance morale provoquée par les guerres (« Le Dormeur du Val » d'Arthur Rimbaud, guerre franco-prussienne de 1870)."
        ],
        "conclusion": "Les idées de la recherche, regroupées par convergence, forment un plan de thèse en deux grandes parties illustrées."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Regrouper et hiérarchiser",
          "stepTheme": "Regrouper et hiérarchiser",
          "stepBadge": "Regrouper et hiérarchiser",
          "paragraphText": "• Élaboration du plan : regrouper toutes les idées convergentes et trouver des titres correspondants.\nIl faut aussi hiérarchiser ces idées, c'est-à-dire les classer selon un ordre logique et d'importance.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q1",
            "type": "mcq",
            "prompt": "Élaborer un plan consiste d'abord à :",
            "options": [
              "Rédiger les paragraphes dans l'ordre venu",
              "Regrouper les idées convergentes et les hiérarchiser selon un ordre logique et d'importance",
              "Écrire la conclusion du devoir",
              "Choisir les citations de l'introduction"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux opérations définies par la leçon : regroupement des idées convergentes et hiérarchisation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le plan dépend de la consigne",
          "stepTheme": "Le plan dépend de la consigne",
          "stepBadge": "Le plan dépend de la consigne",
          "paragraphText": "Méthode : l'élaboration du plan est fonction du verbe de la consigne.\nAvec « expliquez et discutez », le plan qui s'impose est le plan dialectique, en thèse puis antithèse.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q2",
            "type": "mcq",
            "prompt": "Avec la consigne « expliquez et discutez », le plan qui s'impose est :",
            "options": [
              "Le plan analytique",
              "Le plan par énumération libre",
              "Le plan dialectique",
              "Aucun plan n'est nécessaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon rattache le plan dialectique à la consigne « expliquez et discutez » : expliquer relève de la thèse, discuter de l'antithèse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Thèse et antithèse",
          "stepTheme": "Thèse et antithèse",
          "stepBadge": "Thèse et antithèse",
          "paragraphText": "• Thèse : justification de la pensée de l'auteur.\n• Antithèse : partie qui présente les limites ou les insuffisances de la thèse.\nDans le sujet 1, la thèse soutient que l'écrivain dénonce des tares sociales ; l'antithèse présente ses autres rôles.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q3",
            "type": "mcq",
            "prompt": "L'antithèse, dans un plan dialectique, présente :",
            "options": [
              "La justification de la pensée de l'auteur",
              "Les limites ou les insuffisances de la thèse",
              "L'annonce du plan",
              "La reformulation du sujet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La thèse justifie la pensée ; l'antithèse en présente les limites ou les insuffisances."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Un plan qui reste une liste d'idées",
          "stepTheme": "Un plan qui reste une liste d'idées",
          "stepBadge": "Un plan qui reste une liste d'idées",
          "paragraphText": "Piège : recopier la recherche pêle-mêle en guise de plan.\nSans regroupement par convergence, sans titres et sans hiérarchie, il n'y a pas de plan, seulement une liste désordonnée.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q4",
            "type": "mcq",
            "prompt": "Quel défaut fait échouer l'élaboration du plan ?",
            "options": [
              "Donner des titres aux regroupements d'idées",
              "Classer les idées par ordre logique",
              "Garder les idées convergentes ensemble",
              "Recopier les idées pêle-mêle sans les regrouper ni les hiérarchiser"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un plan suppose des regroupements titrés et hiérarchisés ; la liste pêle-mêle est l'étape précédente, celle de la recherche."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La thèse du sujet 1 : dénoncer",
          "stepTheme": "La thèse du sujet 1 : dénoncer",
          "stepBadge": "La thèse du sujet 1 : dénoncer",
          "paragraphText": "Exemple : la thèse du sujet 1 classe la dénonciation sur plusieurs plans.\n• Plan politique : mauvaise gouvernance (Tribaliques d'Henri Lopes), abus du pouvoir (Les Châtiments de Victor Hugo)\n• Plan social : inégalités (Ville cruelle d'Eza Boto), injustices (Le vieux nègre et la médaille)\n• Plan culturel : pratiques néfastes (Rebelle) et critique des mœurs (Dom Juan)",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q5",
            "type": "mcq",
            "prompt": "Dans le plan de la thèse du sujet 1, Tribaliques d'Henri Lopes est rangé :",
            "options": [
              "Dans la recherche du beau",
              "Dans le divertissement",
              "Sur le plan politique, pour la mauvaise gouvernance",
              "Dans l'expression des sentiments personnels"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Tribaliques dénonce détournements des deniers publics et corruption des dirigeants : c'est le plan politique de la thèse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'antithèse du sujet 1 : d'autres rôles",
          "stepTheme": "L'antithèse du sujet 1 : d'autres rôles",
          "stepBadge": "L'antithèse du sujet 1 : d'autres rôles",
          "paragraphText": "Exemple : après la transition « peut-on confiner l'écrivain dans l'unique fonction de dénonciateur ? », l'antithèse présente les autres rôles de l'écrivain.\n• Expression des sentiments personnels : l'amour (Phèdre de Racine, « À une passante » de Baudelaire), la haine (Les Frasques d'Ebinto)\n• Divertissement : comique et humour (L'Avare de Molière), évasion et rêve (L'Île aux trésors de Stevenson)\n• Recherche du beau et de l'esthétique : le style, la beauté typographique (Calligrammes d'Apollinaire)",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q6",
            "type": "mcq",
            "prompt": "Dans le plan du sujet 1, L'Île aux trésors de Stevenson illustre, dans l'antithèse :",
            "options": [
              "La dénonciation des abus du pouvoir",
              "L'évasion et le rêve, rôle de divertissement de l'écrivain",
              "La critique des pratiques culturelles",
              "La mauvaise gouvernance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'Île aux trésors est cité pour le plaisir lié à l'aventure : un rôle de divertissement, donc dans l'antithèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q1",
          "type": "mcq",
          "prompt": "Élaborer un plan consiste d'abord à :",
          "options": [
            "Rédiger les paragraphes dans l'ordre venu",
            "Regrouper les idées convergentes et les hiérarchiser selon un ordre logique et d'importance",
            "Écrire la conclusion du devoir",
            "Choisir les citations de l'introduction"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux opérations définies par la leçon : regroupement des idées convergentes et hiérarchisation."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q2",
          "type": "mcq",
          "prompt": "Avec la consigne « expliquez et discutez », le plan qui s'impose est :",
          "options": [
            "Le plan analytique",
            "Le plan par énumération libre",
            "Le plan dialectique",
            "Aucun plan n'est nécessaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon rattache le plan dialectique à la consigne « expliquez et discutez » : expliquer relève de la thèse, discuter de l'antithèse."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q3",
          "type": "mcq",
          "prompt": "L'antithèse, dans un plan dialectique, présente :",
          "options": [
            "La justification de la pensée de l'auteur",
            "Les limites ou les insuffisances de la thèse",
            "L'annonce du plan",
            "La reformulation du sujet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La thèse justifie la pensée ; l'antithèse en présente les limites ou les insuffisances."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q4",
          "type": "mcq",
          "prompt": "Quel défaut fait échouer l'élaboration du plan ?",
          "options": [
            "Donner des titres aux regroupements d'idées",
            "Classer les idées par ordre logique",
            "Garder les idées convergentes ensemble",
            "Recopier les idées pêle-mêle sans les regrouper ni les hiérarchiser"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un plan suppose des regroupements titrés et hiérarchisés ; la liste pêle-mêle est l'étape précédente, celle de la recherche."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q5",
          "type": "mcq",
          "prompt": "Dans le plan de la thèse du sujet 1, Tribaliques d'Henri Lopes est rangé :",
          "options": [
            "Dans la recherche du beau",
            "Dans le divertissement",
            "Sur le plan politique, pour la mauvaise gouvernance",
            "Dans l'expression des sentiments personnels"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Tribaliques dénonce détournements des deniers publics et corruption des dirigeants : c'est le plan politique de la thèse."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p03_q6",
          "type": "mcq",
          "prompt": "Dans le plan du sujet 1, L'Île aux trésors de Stevenson illustre, dans l'antithèse :",
          "options": [
            "La dénonciation des abus du pouvoir",
            "L'évasion et le rêve, rôle de divertissement de l'écrivain",
            "La critique des pratiques culturelles",
            "La mauvaise gouvernance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'Île aux trésors est cité pour le plaisir lié à l'aventure : un rôle de divertissement, donc dans l'antithèse."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04",
      "order": 4,
      "title": "Rédiger le développement",
      "summary": "Rédiger chaque idée en paragraphe argumentatif selon un schéma rigoureux, avec des transitions.",
      "conceptExplanation": "La rédaction du développement demande beaucoup de rigueur. Chaque idée constitue une sous-partie du développement. Ce développement doit être présenté en paragraphes argumentatifs, et chaque paragraphe doit obéir au schéma suivant : présentation de l'idée directrice ; explication ou démonstration de l'idée directrice ; insertion et explication de l'exemple ; phrase conclusive et annonce de l'argument suivant.\nUne transition est nécessaire pour passer d'une grande partie du développement à une autre : elle consiste à résumer brièvement ce qui précède et à annoncer ce qui va suivre.\nLa rédaction collective de la leçon applique ce schéma au sujet 1 : au plan politique, la mauvaise gouvernance se reconnaît aux détournements des deniers publics et à la corruption (Tribaliques d'Henri Lopes, Les Voix dans le vent de Bernard Dadié et le roi Nahoubou 1er) ; au plan social, les inégalités sont évoquées dans Ville cruelle d'Eza Boto, avec le « tanga nord » d'une minorité de riches opposé au « tanga sud » d'une majorité pauvre, et les injustices frappent Méka dans Le vieux nègre et la médaille.",
      "keyRule": "Chaque paragraphe suit le même schéma : idée directrice, explication, exemple inséré et expliqué, phrase conclusive qui annonce la suite.",
      "formulas": [],
      "workedExample": {
        "title": "Rédiger l'argument 1 du sujet 3 (évaluation corrigée)",
        "statement": "En rappelant le schéma du paragraphe argumentatif, rédige l'argument 1 du sujet 3 : le poète tire son inspiration des souffrances causées par les situations difficiles de la vie.",
        "methodSteps": [
          "Présentation de l'argument : le poète tire sa source d'inspiration de ses expériences de souffrances causées par des situations difficiles de la vie.",
          "Premier appui : la perte d'un être cher — Victor Hugo s'inspire de la disparition de sa fille dans « Demain dès l'aube », extrait des Contemplations, et exprime sa douleur.",
          "Deuxième appui : l'amour malheureux — Alfred de Musset évoque dans Les Nuits sa séparation d'avec sa bien-aimée.",
          "Troisième appui : l'amour impossible — dans Phèdre de Jean Racine, Phèdre éprouve un amour interdit pour Hippolyte, son beau-fils.",
          "Phrase conclusive : cette souffrance dont s'inspire le poète s'étend à d'autres aspects, ce qui annonce l'argument suivant."
        ],
        "conclusion": "Le paragraphe rédigé suit le schéma : idée présentée, exemples insérés et expliqués, conclusion qui enchaîne."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le paragraphe argumentatif",
          "stepTheme": "Le paragraphe argumentatif",
          "stepBadge": "Le paragraphe argumentatif",
          "paragraphText": "• Paragraphe argumentatif : unité du développement construite autour d'une idée, qui constitue une sous-partie du développement.\nLe développement entier est présenté en paragraphes argumentatifs et demande beaucoup de rigueur.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q1",
            "type": "mcq",
            "prompt": "Dans le développement, chaque idée constitue :",
            "options": [
              "Une phrase de l'introduction",
              "Une sous-partie du développement, traitée en paragraphe argumentatif",
              "Un centre d'intérêt du commentaire",
              "Une partie de la conclusion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon pose que chaque idée constitue une sous-partie du développement, rédigée en paragraphe argumentatif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le schéma en quatre temps",
          "stepTheme": "Le schéma en quatre temps",
          "stepBadge": "Le schéma en quatre temps",
          "paragraphText": "Méthode : chaque paragraphe obéit au schéma suivant.\n• Présentation de l'idée directrice\n• Explication ou démonstration de l'idée directrice\n• Insertion et explication de l'exemple\n• Phrase conclusive et annonce de l'argument suivant",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q2",
            "type": "mcq",
            "prompt": "Quel est le troisième temps du schéma du paragraphe argumentatif ?",
            "options": [
              "La présentation de l'idée directrice",
              "La phrase conclusive",
              "L'insertion et l'explication de l'exemple",
              "L'annonce du plan"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'ordre du schéma est : présenter l'idée, l'expliquer ou la démontrer, insérer et expliquer l'exemple, conclure en annonçant la suite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La transition entre grandes parties",
          "stepTheme": "La transition entre grandes parties",
          "stepBadge": "La transition entre grandes parties",
          "paragraphText": "Méthode : une transition est nécessaire pour passer d'une grande partie du développement à une autre.\nElle consiste à résumer brièvement ce qui précède et à annoncer ce qui va suivre.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q3",
            "type": "mcq",
            "prompt": "La transition entre la thèse et l'antithèse consiste à :",
            "options": [
              "Répéter l'introduction",
              "Résumer brièvement ce qui précède et annoncer ce qui va suivre",
              "Donner un nouvel exemple sans lien",
              "Présenter l'opinion personnelle du candidat"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la transition donnée par la leçon : résumé de ce qui précède, annonce de ce qui suit."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le paragraphe politique du sujet 1",
          "stepTheme": "Le paragraphe politique du sujet 1",
          "stepBadge": "Le paragraphe politique du sujet 1",
          "paragraphText": "Exemple de rédaction collective : au plan politique, la mauvaise gouvernance se reconnaît par les détournements des deniers publics et la corruption.\nTribaliques d'Henri Lopes est l'expression d'un réquisitoire contre ces maux qui minent les sociétés africaines modernes ; Les Voix dans le vent de Bernard Dadié présente le roi Nahoubou 1er dans ses excès d'abus de pouvoir.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q4",
            "type": "mcq",
            "prompt": "Dans la rédaction collective, Nahoubou 1er est le roi présenté dans :",
            "options": [
              "Ville cruelle d'Eza Boto",
              "Les Châtiments de Victor Hugo",
              "Rebelle de Fatou Keïta",
              "Les Voix dans le vent de Bernard Dadié"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le roi Nahoubou 1er, avec ses excès d'abus de pouvoir matérialisés par de nombreux rituels, figure dans Les Voix dans le vent de Bernard Dadié."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un exemple cité sans explication",
          "stepTheme": "Un exemple cité sans explication",
          "stepBadge": "Un exemple cité sans explication",
          "paragraphText": "Piège : aligner le nom d'une œuvre sans l'insérer dans le raisonnement ni l'expliquer.\nLe schéma exige l'insertion et l'explication de l'exemple : l'exemple doit prouver l'idée directrice du paragraphe.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q5",
            "type": "mcq",
            "prompt": "Quelle pratique contredit le schéma du paragraphe argumentatif ?",
            "options": [
              "Expliquer l'exemple après l'avoir inséré",
              "Citer une œuvre sans l'expliquer ni la rattacher à l'idée",
              "Terminer par une phrase conclusive",
              "Présenter l'idée directrice en tête du paragraphe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Citer sans expliquer ne démontre rien : l'exemple doit être inséré puis expliqué au service de l'idée directrice."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le paragraphe social : tanga nord et tanga sud",
          "stepTheme": "Le paragraphe social : tanga nord et tanga sud",
          "stepBadge": "Le paragraphe social : tanga nord et tanga sud",
          "paragraphText": "Exemple de rédaction : sur le plan social, les inégalités sont évoquées par Eza Boto dans Ville cruelle.\nIl présente le « tanga nord » d'une minorité de riches opposée au « tanga sud » composé de la majorité des pauvres ; s'y ajoutent les injustices dont est victime le petit peuple, comme Méka dans Le vieux nègre et la médaille de Ferdinand Oyono.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q6",
            "type": "mcq",
            "prompt": "Dans Ville cruelle, le « tanga sud » désigne, selon la rédaction de la leçon :",
            "options": [
              "Une minorité de riches",
              "Le quartier des dirigeants corrompus",
              "La majorité des pauvres",
              "Les nobles du XVIIe siècle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le « tanga sud » est opposé au « tanga nord » des riches : c'est le cadre de vie de la majorité pauvre et indigente."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q1",
          "type": "mcq",
          "prompt": "Dans le développement, chaque idée constitue :",
          "options": [
            "Une phrase de l'introduction",
            "Une sous-partie du développement, traitée en paragraphe argumentatif",
            "Un centre d'intérêt du commentaire",
            "Une partie de la conclusion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon pose que chaque idée constitue une sous-partie du développement, rédigée en paragraphe argumentatif."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q2",
          "type": "mcq",
          "prompt": "Quel est le troisième temps du schéma du paragraphe argumentatif ?",
          "options": [
            "La présentation de l'idée directrice",
            "La phrase conclusive",
            "L'insertion et l'explication de l'exemple",
            "L'annonce du plan"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'ordre du schéma est : présenter l'idée, l'expliquer ou la démontrer, insérer et expliquer l'exemple, conclure en annonçant la suite."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q3",
          "type": "mcq",
          "prompt": "La transition entre la thèse et l'antithèse consiste à :",
          "options": [
            "Répéter l'introduction",
            "Résumer brièvement ce qui précède et annoncer ce qui va suivre",
            "Donner un nouvel exemple sans lien",
            "Présenter l'opinion personnelle du candidat"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la transition donnée par la leçon : résumé de ce qui précède, annonce de ce qui suit."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q4",
          "type": "mcq",
          "prompt": "Dans la rédaction collective, Nahoubou 1er est le roi présenté dans :",
          "options": [
            "Ville cruelle d'Eza Boto",
            "Les Châtiments de Victor Hugo",
            "Rebelle de Fatou Keïta",
            "Les Voix dans le vent de Bernard Dadié"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le roi Nahoubou 1er, avec ses excès d'abus de pouvoir matérialisés par de nombreux rituels, figure dans Les Voix dans le vent de Bernard Dadié."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q5",
          "type": "mcq",
          "prompt": "Quelle pratique contredit le schéma du paragraphe argumentatif ?",
          "options": [
            "Expliquer l'exemple après l'avoir inséré",
            "Citer une œuvre sans l'expliquer ni la rattacher à l'idée",
            "Terminer par une phrase conclusive",
            "Présenter l'idée directrice en tête du paragraphe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Citer sans expliquer ne démontre rien : l'exemple doit être inséré puis expliqué au service de l'idée directrice."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p04_q6",
          "type": "mcq",
          "prompt": "Dans Ville cruelle, le « tanga sud » désigne, selon la rédaction de la leçon :",
          "options": [
            "Une minorité de riches",
            "Le quartier des dirigeants corrompus",
            "La majorité des pauvres",
            "Les nobles du XVIIe siècle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le « tanga sud » est opposé au « tanga nord » des riches : c'est le cadre de vie de la majorité pauvre et indigente."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05",
      "order": 5,
      "title": "Rédiger l'introduction et la conclusion",
      "summary": "Construire, en un seul paragraphe chacune, une introduction en quatre étapes et une conclusion en trois étapes.",
      "conceptExplanation": "L'introduction se rédige en un seul paragraphe et comprend : la perspective générale, qui part d'une généralité en rapport avec le thème, d'un constat ou d'une citation, et qui doit déboucher naturellement sur l'étape suivante ; l'annonce du sujet, présenté sous sa forme initiale s'il est court et reformulé s'il est long ; la problématique, qui dégage les différents aspects du problème posé ; l'annonce du plan, qui dit simplement et clairement les grands points du développement.\nTout comme l'introduction, la conclusion se rédige en un seul paragraphe et comprend trois étapes : le bilan, synthèse ou rappel des grandes idées du développement ; l'opinion personnelle, jugement porté sur l'affirmation développée ou dépassement des deux thèses pour les concilier ; l'ouverture, qui considère un aspect du sujet pour en faire une autre préoccupation.\nL'exemple d'introduction du sujet 1 part d'une citation d'Aimé Césaire : « Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix, la liberté de celles qui s'affaissent au cachot du désespoir ».",
      "keyRule": "Introduction en un paragraphe et en quatre étapes ; conclusion en un paragraphe et en trois étapes : bilan, opinion personnelle, ouverture.",
      "formulas": [],
      "workedExample": {
        "title": "Introduction et conclusion du sujet 3 (évaluation corrigée)",
        "statement": "Rédige l'introduction et la conclusion du sujet 3 de Barthes sur les tourments des poètes, en suivant les composantes apprises.",
        "methodSteps": [
          "Introduction, perspective générale : la poésie lyrique fait la part belle à l'expression des sentiments personnels, et les poètes lyriques trouvent leur inspiration dans l'épanchement de leurs états d'âme.",
          "Introduction, annonce du sujet et problématique : c'est ce qui a motivé Roland Barthes lorsqu'il affirme que la création poétique découle des sentiments douloureux qui font du poète un être malheureux ; le problème est celui de l'influence de la souffrance sur le poète.",
          "Introduction, annonce du plan : montrer d'une part la souffrance comme source de la création poétique, d'autre part les limites de cette assertion.",
          "Conclusion, bilan : le poète s'inspire des difficultés liées à la vie, et l'œuvre devient le réceptacle de ses expériences douloureuses.",
          "Conclusion, opinion et ouverture : le poète s'inspire aussi de la joie, de l'amour et des sujets sociaux, diversité qui fait la noblesse du genre poétique ; l'ouverture demande si l'œuvre poétique répond aux aspirations des citoyens modernes."
        ],
        "conclusion": "Introduction et conclusion du sujet 3 respectent les étapes : généralité, sujet, problématique et plan d'un côté ; bilan, opinion et ouverture de l'autre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les composantes de l'introduction",
          "stepTheme": "Les composantes de l'introduction",
          "stepBadge": "Les composantes de l'introduction",
          "paragraphText": "• Introduction : texte rédigé en un seul paragraphe, en quatre étapes.\n• La perspective générale\n• L'annonce du sujet\n• La problématique\n• L'annonce du plan",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q1",
            "type": "mcq",
            "prompt": "Combien d'étapes compte l'introduction d'une dissertation, selon la leçon ?",
            "options": [
              "Trois étapes",
              "Quatre étapes",
              "Cinq étapes",
              "Deux étapes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Perspective générale, annonce du sujet, problématique et annonce du plan : quatre étapes, en un seul paragraphe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La perspective générale",
          "stepTheme": "La perspective générale",
          "stepBadge": "La perspective générale",
          "paragraphText": "Méthode : la perspective générale part d'une généralité en rapport avec le thème abordé, d'un constat en rapport avec le problème posé, ou d'une citation en rapport avec le sujet.\nCette partie doit déboucher naturellement sur l'annonce du sujet.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q2",
            "type": "mcq",
            "prompt": "La perspective générale peut partir :",
            "options": [
              "Du bilan du développement",
              "D'une généralité, d'un constat ou d'une citation en rapport avec le sujet",
              "De l'opinion personnelle du candidat",
              "D'un exemple du développement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Généralité, constat ou citation liés au thème : la perspective générale ouvre l'introduction et mène naturellement au sujet."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Annoncer le sujet et le plan",
          "stepTheme": "Annoncer le sujet et le plan",
          "stepBadge": "Annoncer le sujet et le plan",
          "paragraphText": "Méthode : dans l'annonce du sujet, le sujet se présente sous sa forme initiale s'il est court et doit être reformulé s'il est long.\nDans l'annonce du plan, il s'agit de dire simplement et clairement le travail à faire, c'est-à-dire les grands points du développement.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q3",
            "type": "mcq",
            "prompt": "Si le sujet est long, son annonce dans l'introduction doit :",
            "options": [
              "Le recopier intégralement sans changement",
              "Le reformuler",
              "Le remplacer par la problématique",
              "L'omettre pour gagner du temps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La règle de la leçon : sujet court, forme initiale ; sujet long, reformulation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les étapes de la conclusion",
          "stepTheme": "Les étapes de la conclusion",
          "stepBadge": "Les étapes de la conclusion",
          "paragraphText": "• Conclusion : texte rédigé en un seul paragraphe, en trois étapes.\n• Le bilan : synthèse ou rappel des grandes idées du développement\n• L'opinion personnelle : jugement sur l'affirmation, ou dépassement des deux thèses pour les concilier\n• L'ouverture : un aspect du sujet devient une autre préoccupation",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q4",
            "type": "mcq",
            "prompt": "L'ouverture, dernière étape de la conclusion, consiste à :",
            "options": [
              "Rappeler les grandes idées du développement",
              "Porter un jugement sur l'affirmation",
              "Considérer un aspect du sujet pour en faire une autre préoccupation",
              "Annoncer les grands points du développement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le bilan rappelle, l'opinion personnelle juge ou dépasse, et l'ouverture fait d'un aspect du sujet une autre préoccupation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Plusieurs paragraphes ou étapes oubliées",
          "stepTheme": "Plusieurs paragraphes ou étapes oubliées",
          "stepBadge": "Plusieurs paragraphes ou étapes oubliées",
          "paragraphText": "Piège : rédiger l'introduction ou la conclusion en plusieurs paragraphes, ou sauter une étape.\nIntroduction et conclusion se rédigent chacune en un seul paragraphe, avec toutes leurs étapes enchaînées.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q5",
            "type": "mcq",
            "prompt": "Quelle rédaction est fautive, selon la leçon ?",
            "options": [
              "Une introduction en un seul paragraphe avec ses quatre étapes",
              "Une conclusion en un seul paragraphe avec bilan, opinion et ouverture",
              "Une introduction en trois paragraphes séparés, sans annonce du plan",
              "Une annonce du plan simple et claire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'introduction est un seul paragraphe comprenant l'annonce du plan ; la morceler et oublier le plan est fautif."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'introduction du sujet 1 par Césaire",
          "stepTheme": "L'introduction du sujet 1 par Césaire",
          "stepBadge": "L'introduction du sujet 1 par Césaire",
          "paragraphText": "Exemple : l'introduction du sujet 1 part de la citation d'Aimé Césaire sur la bouche des malheurs qui n'ont point de bouche.\nElle enchaîne : Le Clézio ne dit pas autre chose quand il affirme que le rôle primordial de l'écrivain est de stigmatiser les maux liés aux conditions de l'existence humaine ; problématique : peut-on dire que le rôle de l'écrivain se limite uniquement à dévoiler les tares de la société ? ; annonce du plan en deux temps.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q6",
            "type": "mcq",
            "prompt": "La perspective générale de l'introduction du sujet 1 part :",
            "options": [
              "D'un exemple de Ville cruelle",
              "D'une citation d'Aimé Césaire sur la bouche des malheurs",
              "Du bilan du développement",
              "De la définition du roman"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'exemple de la leçon ouvre par la citation de Césaire, qui précise le rôle de l'écrivain et débouche sur le sujet de Le Clézio."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q1",
          "type": "mcq",
          "prompt": "Combien d'étapes compte l'introduction d'une dissertation, selon la leçon ?",
          "options": [
            "Trois étapes",
            "Quatre étapes",
            "Cinq étapes",
            "Deux étapes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Perspective générale, annonce du sujet, problématique et annonce du plan : quatre étapes, en un seul paragraphe."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q2",
          "type": "mcq",
          "prompt": "La perspective générale peut partir :",
          "options": [
            "Du bilan du développement",
            "D'une généralité, d'un constat ou d'une citation en rapport avec le sujet",
            "De l'opinion personnelle du candidat",
            "D'un exemple du développement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Généralité, constat ou citation liés au thème : la perspective générale ouvre l'introduction et mène naturellement au sujet."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q3",
          "type": "mcq",
          "prompt": "Si le sujet est long, son annonce dans l'introduction doit :",
          "options": [
            "Le recopier intégralement sans changement",
            "Le reformuler",
            "Le remplacer par la problématique",
            "L'omettre pour gagner du temps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La règle de la leçon : sujet court, forme initiale ; sujet long, reformulation."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q4",
          "type": "mcq",
          "prompt": "L'ouverture, dernière étape de la conclusion, consiste à :",
          "options": [
            "Rappeler les grandes idées du développement",
            "Porter un jugement sur l'affirmation",
            "Considérer un aspect du sujet pour en faire une autre préoccupation",
            "Annoncer les grands points du développement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le bilan rappelle, l'opinion personnelle juge ou dépasse, et l'ouverture fait d'un aspect du sujet une autre préoccupation."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q5",
          "type": "mcq",
          "prompt": "Quelle rédaction est fautive, selon la leçon ?",
          "options": [
            "Une introduction en un seul paragraphe avec ses quatre étapes",
            "Une conclusion en un seul paragraphe avec bilan, opinion et ouverture",
            "Une introduction en trois paragraphes séparés, sans annonce du plan",
            "Une annonce du plan simple et claire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'introduction est un seul paragraphe comprenant l'annonce du plan ; la morceler et oublier le plan est fautif."
        },
        {
          "id": "terminale_a1_francais_ee_l01_dissertation_litteraire_p05_q6",
          "type": "mcq",
          "prompt": "La perspective générale de l'introduction du sujet 1 part :",
          "options": [
            "D'un exemple de Ville cruelle",
            "D'une citation d'Aimé Césaire sur la bouche des malheurs",
            "Du bilan du développement",
            "De la définition du roman"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'exemple de la leçon ouvre par la citation de Césaire, qui précise le rôle de l'écrivain et débouche sur le sujet de Le Clézio."
        }
      ]
    }
  ]
};
