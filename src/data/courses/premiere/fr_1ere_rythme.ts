import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Le rythme dans le texte poétique et dans le texte en prose » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1871
export const FR_1ERE_PL_L04_RYTHME: CurriculumChapter = {
  "id": "premiere_a1_francais_pl_l04_rythme",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 4,
  "title": "Leçon 4 : Le rythme dans le texte poétique et dans le texte en prose",
  "summary": "Les élèves de Première A/C du Lycée Classique d’Abidjan, qui éprouvent des difficultés pour analyser le rythme dans les textes poétiques ou en prose, s’exercent à identifier et à analyser les ressources de la prosodie afin de mieux interpréter les textes en contexte.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1871",
  "points": [
    {
      "id": "premiere_a1_francais_pl_l04_rythme_p01",
      "order": 1,
      "title": "L’accent tonique et la naissance du rythme poétique",
      "summary": "Repérer les syllabes accentuées et appliquer la règle d’accentuation selon la terminaison du mot.",
      "conceptExplanation": "Dans la langue, certaines syllabes sont plus marquées que d’autres. Dans « lycée » et « fenêtre », les syllabes marquées sont appelées syllabes accentuées ou toniques ; les autres sont dites atones.\nRègle d’accentuation : quand un mot se termine par une syllabe qui comporte un « e » muet, l’accent tonique porte sur l’avant-dernière syllabe ; ces mots sont appelés mots à terminaison féminine, comme « infamie » et « ennemie ». Dans d’autres cas, l’accent tonique porte sur la dernière syllabe ; ces mots sont appelés à terminaison masculine, comme « désespoir » et « travaux ».\nC’est le retour des accents toniques qui crée le rythme : on les place sur la dernière syllabe tonique d’un mot ou d’un groupe de mots qui forme une unité grammaticale. Exemple : « Ô rage ! Ô désespoir ! Ô vieillesse ennemie ! » (Pierre Corneille, Le Cid).",
      "keyRule": "Le retour des accents toniques crée le rythme : repère d’abord la dernière syllabe tonique de chaque mot ou groupe de mots.",
      "formulas": [],
      "workedExample": {
        "title": "Accentuer « Ô rage ! Ô désespoir ! Ô vieillesse ennemie ! »",
        "statement": "Dans le vers de Corneille (Le Cid) qui sert de support à la leçon, repère les accents toniques et explique la terminaison de « ennemie » et de « désespoir ».",
        "methodSteps": [
          "« Ennemie » se termine par un « e » muet : c’est un mot à terminaison féminine, l’accent porte sur l’avant-dernière syllabe.",
          "« Désespoir » n’a pas de « e » muet final : c’est un mot à terminaison masculine, l’accent porte sur la dernière syllabe.",
          "Les accents toniques se placent sur la dernière syllabe tonique de chaque groupe de mots formant une unité grammaticale.",
          "Leur retour régulier dans le vers crée le rythme."
        ],
        "conclusion": "C’est le retour des accents toniques, placés selon la terminaison des mots, qui crée le rythme du vers."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Syllabes toniques et atones",
          "stepTheme": "Syllabes toniques et atones",
          "stepBadge": "Syllabes toniques et atones",
          "paragraphText": "• Syllabe accentuée ou tonique : syllabe plus marquée que les autres dans un mot.\n• Syllabe atone : syllabe non accentuée.\nExemples de la leçon : « lycée », « fenêtre », où certaines syllabes sont en gras ou en rouge.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p01_q1",
            "type": "mcq",
            "prompt": "Dans un mot, la syllabe accentuée est aussi appelée :",
            "options": [
              "Syllabe atone",
              "Syllabe tonique",
              "Syllabe muette",
              "Syllabe finale dans tous les cas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon appelle syllabes accentuées ou toniques les syllabes plus marquées ; les autres sont atones."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La terminaison féminine",
          "stepTheme": "La terminaison féminine",
          "stepBadge": "La terminaison féminine",
          "paragraphText": "• Mot à terminaison féminine : mot qui se termine par une syllabe comportant un « e » muet.\nL’accent tonique porte alors sur l’avant-dernière syllabe. Exemples : « infamie », « ennemie ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p01_q2",
            "type": "mcq",
            "prompt": "Un mot à terminaison féminine se termine par :",
            "options": [
              "Une consonne sonore",
              "Une syllabe comportant un « e » muet",
              "Un accent aigu",
              "Une syllabe toujours longue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la règle d’accentuation, la terminaison féminine comporte un « e » muet et l’accent tombe sur l’avant-dernière syllabe."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La terminaison masculine",
          "stepTheme": "La terminaison masculine",
          "stepBadge": "La terminaison masculine",
          "paragraphText": "Propriété : dans les autres cas, l’accent tonique porte sur la dernière syllabe.\nCes mots sont appelés à terminaison masculine. Exemples : « désespoir », « travaux ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p01_q3",
            "type": "mcq",
            "prompt": "Dans « désespoir », mot à terminaison masculine, l’accent tonique porte sur :",
            "options": [
              "La première syllabe",
              "L’avant-dernière syllabe",
              "La dernière syllabe",
              "Aucune syllabe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour la terminaison masculine, la règle place l’accent sur la dernière syllabe, comme dans « désespoir » et « travaux »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le retour des accents crée le rythme",
          "stepTheme": "Le retour des accents crée le rythme",
          "stepBadge": "Le retour des accents crée le rythme",
          "paragraphText": "Propriété : c’est le retour des accents toniques qui crée le rythme.\nOn place les accents sur la dernière syllabe tonique d’un mot ou d’un groupe de mots qui forme une unité grammaticale.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p01_q4",
            "type": "mcq",
            "prompt": "Selon la leçon, le rythme naît :",
            "options": [
              "Du nombre de mots du vers",
              "De la rime seule",
              "Du choix du titre",
              "Du retour des accents toniques"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La définition est explicite : c’est le retour des accents toniques qui crée le rythme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre tonique et atone",
          "stepTheme": "Confondre tonique et atone",
          "stepBadge": "Confondre tonique et atone",
          "paragraphText": "Piège : appeler toniques toutes les syllabes ou placer l’accent sans tenir compte du « e » muet final.\nPour « ennemie », l’accent ne porte pas sur la syllabe du « e » muet, mais sur l’avant-dernière syllabe.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p01_q5",
            "type": "mcq",
            "prompt": "Pour le mot « infamie », à terminaison féminine, l’accent tonique porte sur :",
            "options": [
              "La syllabe du « e » muet final",
              "L’avant-dernière syllabe",
              "La première syllabe uniquement",
              "Toutes les syllabes également"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Infamie » est donné comme exemple de terminaison féminine : accent sur l’avant-dernière syllabe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le vers de Corneille, texte support",
          "stepTheme": "Le vers de Corneille, texte support",
          "stepBadge": "Le vers de Corneille, texte support",
          "paragraphText": "Exemple : « Ô rage ! Ô désespoir ! Ô vieillesse ennemie ! » (Pierre Corneille, Le Cid).\nChaque groupe — « rage », « désespoir », « vieillesse ennemie » — reçoit un accent tonique, et leur retour scande le vers.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p01_q6",
            "type": "mcq",
            "prompt": "Le texte 1 de la situation d’apprentissage, support de l’étude du rythme, est extrait :",
            "options": [
              "Des Oraisons funèbres de Bossuet",
              "Du Nœud de vipères de Mauriac",
              "Du Cid de Pierre Corneille",
              "Des Nuits de Musset"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte 1 est signé Pierre Corneille, Le Cid, avec les vers « Ô rage ! Ô désespoir ! »."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p01_q1",
          "type": "mcq",
          "prompt": "Dans un mot, la syllabe accentuée est aussi appelée :",
          "options": [
            "Syllabe atone",
            "Syllabe tonique",
            "Syllabe muette",
            "Syllabe finale dans tous les cas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon appelle syllabes accentuées ou toniques les syllabes plus marquées ; les autres sont atones."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p01_q2",
          "type": "mcq",
          "prompt": "Un mot à terminaison féminine se termine par :",
          "options": [
            "Une consonne sonore",
            "Une syllabe comportant un « e » muet",
            "Un accent aigu",
            "Une syllabe toujours longue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la règle d’accentuation, la terminaison féminine comporte un « e » muet et l’accent tombe sur l’avant-dernière syllabe."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p01_q3",
          "type": "mcq",
          "prompt": "Dans « désespoir », mot à terminaison masculine, l’accent tonique porte sur :",
          "options": [
            "La première syllabe",
            "L’avant-dernière syllabe",
            "La dernière syllabe",
            "Aucune syllabe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour la terminaison masculine, la règle place l’accent sur la dernière syllabe, comme dans « désespoir » et « travaux »."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p01_q4",
          "type": "mcq",
          "prompt": "Selon la leçon, le rythme naît :",
          "options": [
            "Du nombre de mots du vers",
            "De la rime seule",
            "Du choix du titre",
            "Du retour des accents toniques"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La définition est explicite : c’est le retour des accents toniques qui crée le rythme."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p01_q5",
          "type": "mcq",
          "prompt": "Pour le mot « infamie », à terminaison féminine, l’accent tonique porte sur :",
          "options": [
            "La syllabe du « e » muet final",
            "L’avant-dernière syllabe",
            "La première syllabe uniquement",
            "Toutes les syllabes également"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Infamie » est donné comme exemple de terminaison féminine : accent sur l’avant-dernière syllabe."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p01_q6",
          "type": "mcq",
          "prompt": "Le texte 1 de la situation d’apprentissage, support de l’étude du rythme, est extrait :",
          "options": [
            "Des Oraisons funèbres de Bossuet",
            "Du Nœud de vipères de Mauriac",
            "Du Cid de Pierre Corneille",
            "Des Nuits de Musset"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte 1 est signé Pierre Corneille, Le Cid, avec les vers « Ô rage ! Ô désespoir ! »."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l04_rythme_p02",
      "order": 2,
      "title": "Les coupes, la césure et les hémistiches",
      "summary": "Placer les coupes après la syllabe accentuée et reconnaître la césure qui partage l’alexandrin en deux hémistiches.",
      "conceptExplanation": "La coupe se place immédiatement après la syllabe accentuée. Exemple de la leçon : « Ô ra/ge ! Ô désespoir / ! Ô vieilles/se enne/mie ! »\nOn appelle césure la coupe qui partage un alexandrin (vers de douze syllabes) en deux parties égales. Ces deux parties sont appelées hémistiches.\nExemple : « N’ai-je donc tant vécu // que pour cette infamie ? » : la première partie, jusqu’à la césure, est le premier hémistiche ; la seconde partie est le deuxième hémistiche, et chaque hémistiche contient ses propres coupes.\nLa leçon précise l’effet : le rythme, ici, évoque le désespoir régulier du poète qui suscite en lui des inquiétudes.",
      "keyRule": "Coupe après chaque syllabe accentuée ; césure au milieu de l’alexandrin, entre les deux hémistiches.",
      "formulas": [],
      "workedExample": {
        "title": "Mesurer le vers « N’ai-je donc tant vécu que pour cette infamie ? »",
        "statement": "Délimite les coupes, la césure et les hémistiches de ce vers de douze syllabes tiré du texte support.",
        "methodSteps": [
          "Le vers est un alexandrin : il compte douze syllabes.",
          "On place des coupes après les syllabes accentuées à l’intérieur de chaque partie du vers.",
          "La césure, coupe principale, partage le vers en deux parties égales, après « vécu ».",
          "La première partie est le premier hémistiche, la seconde le deuxième hémistiche.",
          "Effet relevé par la leçon : ce rythme évoque le désespoir régulier du poète."
        ],
        "conclusion": "Coupes secondaires et césure centrale organisent l’alexandrin en deux hémistiches égaux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La coupe",
          "stepTheme": "La coupe",
          "stepBadge": "La coupe",
          "paragraphText": "• Coupe : marque placée immédiatement après la syllabe accentuée.\nExemple : « Ô ra/ge ! Ô désespoir / ! Ô vieilles/se enne/mie ! »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p02_q1",
            "type": "mcq",
            "prompt": "La coupe se place :",
            "options": [
              "Avant la syllabe accentuée",
              "Au début du vers seulement",
              "Immédiatement après la syllabe accentuée",
              "À la fin de la strophe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon définit la place de la coupe : immédiatement après la syllabe accentuée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La césure",
          "stepTheme": "La césure",
          "stepBadge": "La césure",
          "paragraphText": "• Césure : coupe qui partage un alexandrin en deux parties égales.\nL’alexandrin est un vers de douze syllabes.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p02_q2",
            "type": "mcq",
            "prompt": "La césure est la coupe qui :",
            "options": [
              "Sépare deux strophes",
              "Partage un alexandrin en deux parties égales",
              "Marque la fin d’un poème",
              "Remplace la rime"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée : la césure partage l’alexandrin (douze syllabes) en deux parties égales."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les hémistiches",
          "stepTheme": "Les hémistiches",
          "stepBadge": "Les hémistiches",
          "paragraphText": "• Hémistiche : chacune des deux parties de l’alexandrin séparées par la césure.\nDans l’exemple, « N’ai-je donc tant vécu » est le premier hémistiche et « que pour cette infamie ? » le second.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p02_q3",
            "type": "mcq",
            "prompt": "Les deux parties égales de l’alexandrin sont appelées :",
            "options": [
              "Des strophes",
              "Des rimes",
              "Des enjambements",
              "Des hémistiches"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les deux parties séparées par la césure sont les hémistiches."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Mesurer un vers : l’exercice de la leçon",
          "stepTheme": "Mesurer un vers : l’exercice de la leçon",
          "stepBadge": "Mesurer un vers : l’exercice de la leçon",
          "paragraphText": "Méthode : pour mesurer un vers, on compte ses syllabes, on place les coupes après les syllabes accentuées, puis on délimite la césure et les hémistiches.\nL’évaluation demande exactement cela pour : « Plus l’offenseur m’est cher et plus grande est l’offense. »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p02_q4",
            "type": "mcq",
            "prompt": "L’évaluation de la leçon demande, pour le vers « Plus l’offenseur m’est cher… », de :",
            "options": [
              "Traduire le vers en prose",
              "Mesurer le vers et délimiter la coupe et les hémistiches",
              "Changer la rime du vers",
              "Compter les mots du vers seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les questions a et b de l’exercice sont : mesurer le vers, puis délimiter la coupe et les hémistiches."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre coupe et césure",
          "stepTheme": "Confondre coupe et césure",
          "stepBadge": "Confondre coupe et césure",
          "paragraphText": "Piège : appeler césure n’importe quelle coupe du vers.\nToutes les coupes se placent après une syllabe accentuée, mais seule la coupe qui partage l’alexandrin en deux parties égales est la césure.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p02_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation distingue correctement la césure ?",
            "options": [
              "Toute coupe est une césure",
              "La césure est la rime du vers",
              "La césure est la coupe qui partage l’alexandrin en deux parties égales",
              "La césure se place toujours en fin de vers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il y a plusieurs coupes dans un vers, mais une seule césure : celle qui partage l’alexandrin en deux hémistiches."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’effet du rythme : un désespoir régulier",
          "stepTheme": "L’effet du rythme : un désespoir régulier",
          "stepBadge": "L’effet du rythme : un désespoir régulier",
          "paragraphText": "Exemple d’interprétation donné par la leçon : dans « N’ai-je donc tant vécu // que pour cette infamie ? », le rythme évoque le désespoir régulier du poète.\nCe retour régulier suscite en lui des inquiétudes.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p02_q6",
            "type": "mcq",
            "prompt": "Selon la leçon, le rythme régulier de ce vers évoque :",
            "options": [
              "La joie triomphante du héros",
              "Le désespoir régulier du poète, qui suscite en lui des inquiétudes",
              "Un effet comique",
              "L’indifférence du personnage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation écrite sous l’exemple : le rythme évoque le désespoir régulier du poète."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p02_q1",
          "type": "mcq",
          "prompt": "La coupe se place :",
          "options": [
            "Avant la syllabe accentuée",
            "Au début du vers seulement",
            "Immédiatement après la syllabe accentuée",
            "À la fin de la strophe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon définit la place de la coupe : immédiatement après la syllabe accentuée."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p02_q2",
          "type": "mcq",
          "prompt": "La césure est la coupe qui :",
          "options": [
            "Sépare deux strophes",
            "Partage un alexandrin en deux parties égales",
            "Marque la fin d’un poème",
            "Remplace la rime"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée : la césure partage l’alexandrin (douze syllabes) en deux parties égales."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p02_q3",
          "type": "mcq",
          "prompt": "Les deux parties égales de l’alexandrin sont appelées :",
          "options": [
            "Des strophes",
            "Des rimes",
            "Des enjambements",
            "Des hémistiches"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les deux parties séparées par la césure sont les hémistiches."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p02_q4",
          "type": "mcq",
          "prompt": "L’évaluation de la leçon demande, pour le vers « Plus l’offenseur m’est cher… », de :",
          "options": [
            "Traduire le vers en prose",
            "Mesurer le vers et délimiter la coupe et les hémistiches",
            "Changer la rime du vers",
            "Compter les mots du vers seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les questions a et b de l’exercice sont : mesurer le vers, puis délimiter la coupe et les hémistiches."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p02_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation distingue correctement la césure ?",
          "options": [
            "Toute coupe est une césure",
            "La césure est la rime du vers",
            "La césure est la coupe qui partage l’alexandrin en deux parties égales",
            "La césure se place toujours en fin de vers"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il y a plusieurs coupes dans un vers, mais une seule césure : celle qui partage l’alexandrin en deux hémistiches."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p02_q6",
          "type": "mcq",
          "prompt": "Selon la leçon, le rythme régulier de ce vers évoque :",
          "options": [
            "La joie triomphante du héros",
            "Le désespoir régulier du poète, qui suscite en lui des inquiétudes",
            "Un effet comique",
            "L’indifférence du personnage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation écrite sous l’exemple : le rythme évoque le désespoir régulier du poète."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l04_rythme_p03",
      "order": 3,
      "title": "L’enjambement, le rejet et le contre-rejet",
      "summary": "Distinguer l’enjambement simple, le rejet qui met un mot en relief et le contre-rejet qui annonce le vers suivant.",
      "conceptExplanation": "On parle d’enjambement lorsque le vers ne s’arrête pas à la rime mais déborde jusqu’à la césure ou la fin du vers suivant. Il traduit souvent un mouvement qui s’amplifie, une durée qui se prolonge. Exemple de la leçon : « Les pieds dans les glaïeuls, il dort – souriant comme sourirait un enfant malade… »\nOn parle de rejet lorsqu’un élément court d’un vers est rejeté au vers suivant ; il permet la mise en relief d’un mot clé. Exemple : « Même il m’est arrivé quelquefois de manger / Le berger. » (Jean de La Fontaine) : le verbe « manger » est mis en évidence par le rejet de son complément.\nOn parle de contre-rejet lorsqu’un élément court annonce, à la fin d’un vers, le début du vers suivant. Exemple : « Souvenir, souvenir, que me veux-tu ? L’automne / faisait voler la grive à travers l’air atone. »",
      "keyRule": "Enjambement : le vers déborde ; rejet : élément court rejeté au vers suivant ; contre-rejet : élément court qui annonce le vers suivant.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier l’enjambement dans les extraits d’évaluation",
        "statement": "L’évaluation demande : quel est l’enjambement présent dans « Et dès lors, je me suis baigné dans le poème / De la mer, infusée d’astres et lactescent » et dans l’extrait des « pieds dans les glaïeuls » ?",
        "methodSteps": [
          "Dans le premier extrait, la phrase commencée au premier vers ne s’arrête pas à sa fin : elle déborde au vers suivant avec « De la mer… », qui complète « le poème ».",
          "Dans le second extrait, « il dort – souriant comme sourirait un enfant malade… » prolonge le mouvement au-delà du point d’arrêt attendu.",
          "Dans les deux cas, le vers déborde jusqu’au vers suivant : c’est un enjambement.",
          "L’effet recherché est celui d’un mouvement qui s’amplifie ou d’une durée qui se prolonge."
        ],
        "conclusion": "Le débordement du sens d’un vers à l’autre, sans arrêt à la rime, caractérise l’enjambement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’enjambement",
          "stepTheme": "L’enjambement",
          "stepBadge": "L’enjambement",
          "paragraphText": "• Enjambement : le vers ne s’arrête pas à la rime mais déborde jusqu’à la césure ou la fin du vers suivant.\nIl traduit souvent un mouvement qui s’amplifie, une durée qui se prolonge.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p03_q1",
            "type": "mcq",
            "prompt": "Il y a enjambement lorsque :",
            "options": [
              "Le vers s’arrête exactement à la rime",
              "Le vers déborde jusqu’à la césure ou la fin du vers suivant",
              "Deux vers ont la même rime",
              "Le poème change de strophe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la leçon : le vers déborde au lieu de s’arrêter à la rime."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’effet de l’enjambement",
          "stepTheme": "L’effet de l’enjambement",
          "stepBadge": "L’effet de l’enjambement",
          "paragraphText": "Propriété : l’enjambement traduit souvent un mouvement qui s’amplifie, une durée qui se prolonge.\nExemple : « Les pieds dans les glaïeuls, il dort – souriant comme sourirait un enfant malade… »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p03_q2",
            "type": "mcq",
            "prompt": "L’enjambement traduit souvent :",
            "options": [
              "Un arrêt brutal",
              "Une rime riche",
              "Un mouvement qui s’amplifie, une durée qui se prolonge",
              "Une faute de syntaxe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon associe l’enjambement à l’amplification du mouvement et à la prolongation de la durée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le rejet",
          "stepTheme": "Le rejet",
          "stepBadge": "Le rejet",
          "paragraphText": "• Rejet : un élément court d’un vers est rejeté au vers suivant.\nIl permet la mise en relief d’un mot clé.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p03_q3",
            "type": "mcq",
            "prompt": "On parle de rejet lorsqu’ :",
            "options": [
              "Un élément court d’un vers est rejeté au vers suivant",
              "Un vers répète le précédent",
              "La césure disparaît",
              "Deux rimes se suivent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Définition de la leçon : l’élément court rejeté au vers suivant forme le rejet."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le rejet chez La Fontaine",
          "stepTheme": "Le rejet chez La Fontaine",
          "stepBadge": "Le rejet chez La Fontaine",
          "paragraphText": "Exemple : « Même il m’est arrivé quelquefois de manger / Le berger. » (Jean de La Fontaine).\nLe rejet de « Le berger » au vers suivant met en évidence le verbe « manger ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p03_q4",
            "type": "mcq",
            "prompt": "Dans l’exemple de La Fontaine, le rejet met en évidence :",
            "options": [
              "Le mot « berger » seul, sans lien avec le vers précédent",
              "Le verbe « manger », mis en relief par le rejet de son complément",
              "Le nom de l’auteur",
              "La césure du vers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que le verbe « manger » est mis en évidence grâce au rejet de « Le berger »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le contre-rejet",
          "stepTheme": "Le contre-rejet",
          "stepBadge": "Le contre-rejet",
          "paragraphText": "• Contre-rejet : un élément court annonce, à la fin d’un vers, le début du vers suivant.\nExemple : « Souvenir, souvenir, que me veux-tu ? L’automne / faisait voler la grive à travers l’air atone. »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p03_q5",
            "type": "mcq",
            "prompt": "Le contre-rejet se reconnaît lorsqu’ :",
            "options": [
              "Un élément court, à la fin d’un vers, annonce le début du vers suivant",
              "Un mot est rejeté après la césure",
              "Le vers compte douze syllabes",
              "La rime est embrassée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans le contre-rejet, l’élément court placé en fin de vers annonce le début du vers suivant, comme « L’automne » annonçant « faisait voler… »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre rejet et contre-rejet",
          "stepTheme": "Confondre rejet et contre-rejet",
          "stepBadge": "Confondre rejet et contre-rejet",
          "paragraphText": "Piège : confondre les deux procédés.\nDans le rejet, l’élément court appartient au vers précédent et est repoussé au début du vers suivant ; dans le contre-rejet, l’élément court placé en fin de vers annonce ce qui va suivre.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p03_q6",
            "type": "mcq",
            "prompt": "Quelle différence oppose rejet et contre-rejet ?",
            "options": [
              "Le rejet concerne la prose, le contre-rejet la poésie",
              "Dans le rejet, l’élément est rejeté au vers suivant ; dans le contre-rejet, il annonce le vers suivant depuis la fin du vers",
              "Le rejet supprime la rime, le contre-rejet la double",
              "Il n’y a aucune différence"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Rejet : élément repoussé au vers suivant. Contre-rejet : élément en fin de vers qui annonce le début du suivant."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p03_q1",
          "type": "mcq",
          "prompt": "Il y a enjambement lorsque :",
          "options": [
            "Le vers s’arrête exactement à la rime",
            "Le vers déborde jusqu’à la césure ou la fin du vers suivant",
            "Deux vers ont la même rime",
            "Le poème change de strophe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la leçon : le vers déborde au lieu de s’arrêter à la rime."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p03_q2",
          "type": "mcq",
          "prompt": "L’enjambement traduit souvent :",
          "options": [
            "Un arrêt brutal",
            "Une rime riche",
            "Un mouvement qui s’amplifie, une durée qui se prolonge",
            "Une faute de syntaxe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon associe l’enjambement à l’amplification du mouvement et à la prolongation de la durée."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p03_q3",
          "type": "mcq",
          "prompt": "On parle de rejet lorsqu’ :",
          "options": [
            "Un élément court d’un vers est rejeté au vers suivant",
            "Un vers répète le précédent",
            "La césure disparaît",
            "Deux rimes se suivent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Définition de la leçon : l’élément court rejeté au vers suivant forme le rejet."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p03_q4",
          "type": "mcq",
          "prompt": "Dans l’exemple de La Fontaine, le rejet met en évidence :",
          "options": [
            "Le mot « berger » seul, sans lien avec le vers précédent",
            "Le verbe « manger », mis en relief par le rejet de son complément",
            "Le nom de l’auteur",
            "La césure du vers"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que le verbe « manger » est mis en évidence grâce au rejet de « Le berger »."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p03_q5",
          "type": "mcq",
          "prompt": "Le contre-rejet se reconnaît lorsqu’ :",
          "options": [
            "Un élément court, à la fin d’un vers, annonce le début du vers suivant",
            "Un mot est rejeté après la césure",
            "Le vers compte douze syllabes",
            "La rime est embrassée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le contre-rejet, l’élément court placé en fin de vers annonce le début du vers suivant, comme « L’automne » annonçant « faisait voler… »."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p03_q6",
          "type": "mcq",
          "prompt": "Quelle différence oppose rejet et contre-rejet ?",
          "options": [
            "Le rejet concerne la prose, le contre-rejet la poésie",
            "Dans le rejet, l’élément est rejeté au vers suivant ; dans le contre-rejet, il annonce le vers suivant depuis la fin du vers",
            "Le rejet supprime la rime, le contre-rejet la double",
            "Il n’y a aucune différence"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Rejet : élément repoussé au vers suivant. Contre-rejet : élément en fin de vers qui annonce le début du suivant."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l04_rythme_p04",
      "order": 4,
      "title": "Les sonorités : assonance et allitération",
      "summary": "Distinguer la répétition d’un son-voyelle (assonance) de la répétition d’un son-consonne (allitération) et interpréter leurs effets.",
      "conceptExplanation": "Les échos sonores entre les mots invitent à mettre ces derniers en relation : il s’établit ainsi un double rapport de son et de sens.\nOn parle d’assonance lorsqu’il y a répétition d’un même son-voyelle ou de sons vocaliques voisins. Exemple : « Tout m’afflige et me nuit, et conspire à me nuire » : l’assonance en « i » révèle la douleur.\nOn appelle allitération la répétition d’un même son-consonne ou de sons consonantiques voisins. Exemple : « Les souffles de la nuit flottaient Galgala » : les allitérations en « f » et « l » évoquent le bruit du souffle.",
      "keyRule": "Voyelle répétée : assonance ; consonne répétée : allitération — et chaque sonorité produit un effet de sens.",
      "formulas": [],
      "workedExample": {
        "title": "Lire l’assonance en « i »",
        "statement": "Analyse la sonorité du vers « Tout m’afflige et me nuit, et conspire à me nuire » donné par la leçon.",
        "methodSteps": [
          "On relève le son qui se répète : le son-voyelle « i », dans « afflige », « nuit », « conspire », « nuire ».",
          "La répétition d’un même son-voyelle est une assonance.",
          "Les échos sonores mettent les mots en relation : un double rapport de son et de sens s’établit.",
          "Effet indiqué par la leçon : cette assonance en « i » révèle la douleur."
        ],
        "conclusion": "L’assonance en « i » unit les mots par le son et révèle la douleur exprimée par le vers."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un double rapport de son et de sens",
          "stepTheme": "Un double rapport de son et de sens",
          "stepBadge": "Un double rapport de son et de sens",
          "paragraphText": "• Échos sonores : répétitions de sons entre les mots d’un vers.\nIls invitent à mettre ces mots en relation : il s’établit ainsi un double rapport de son et de sens.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p04_q1",
            "type": "mcq",
            "prompt": "Les échos sonores entre les mots établissent :",
            "options": [
              "Un rapport de rime uniquement",
              "Un double rapport de son et de sens",
              "Une simple liste de mots",
              "Un effet sans aucun sens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon dit que les échos sonores invitent à relier les mots : double rapport de son et de sens."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’assonance",
          "stepTheme": "L’assonance",
          "stepBadge": "L’assonance",
          "paragraphText": "• Assonance : répétition d’un même son-voyelle ou de sons vocaliques voisins.\nExemple : « Tout m’afflige et me nuit, et conspire à me nuire. »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p04_q2",
            "type": "mcq",
            "prompt": "L’assonance est la répétition :",
            "options": [
              "D’un même son-consonne",
              "De la même rime en fin de vers",
              "D’un même son-voyelle ou de sons vocaliques voisins",
              "Du même mot à chaque vers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Assonance porte sur les voyelles : répétition d’un son-voyelle ou de sons vocaliques voisins."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L’assonance en « i » révèle la douleur",
          "stepTheme": "L’assonance en « i » révèle la douleur",
          "stepBadge": "L’assonance en « i » révèle la douleur",
          "paragraphText": "Exemple : dans « Tout m’afflige et me nuit, et conspire à me nuire », le son « i » se répète.\nLa leçon interprète : cette assonance révèle la douleur.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p04_q3",
            "type": "mcq",
            "prompt": "Dans l’exemple de la leçon, l’assonance en « i » révèle :",
            "options": [
              "La joie",
              "Le bruit du souffle",
              "La douleur",
              "La vitesse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’interprétation donnée : l’assonance en « i » révèle la douleur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’allitération",
          "stepTheme": "L’allitération",
          "stepBadge": "L’allitération",
          "paragraphText": "• Allitération : répétition d’un même son-consonne ou de sons consonantiques voisins.\nExemple : « Les souffles de la nuit flottaient Galgala. »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p04_q4",
            "type": "mcq",
            "prompt": "L’allitération est la répétition :",
            "options": [
              "D’un même son-consonne ou de sons consonantiques voisins",
              "D’un même son-voyelle uniquement",
              "D’une même phrase",
              "D’un même vers entier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Allitération porte sur les consonnes : répétition d’un son-consonne ou de sons consonantiques voisins."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les allitérations en « f » et « l »",
          "stepTheme": "Les allitérations en « f » et « l »",
          "stepBadge": "Les allitérations en « f » et « l »",
          "paragraphText": "Exemple : « Les souffles de la nuit flottaient Galgala. »\nLes allitérations en « f » et « l » évoquent le bruit du souffle.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p04_q5",
            "type": "mcq",
            "prompt": "Dans cet exemple, les allitérations en « f » et « l » évoquent :",
            "options": [
              "La douleur",
              "Le bruit du souffle",
              "Le silence total",
              "La colère du poète"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon interprète ces allitérations comme l’évocation du bruit du souffle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre assonance et allitération",
          "stepTheme": "Confondre assonance et allitération",
          "stepBadge": "Confondre assonance et allitération",
          "paragraphText": "Piège : nommer allitération toute répétition de sons.\nSi le son répété est une voyelle, c’est une assonance ; si c’est une consonne, c’est une allitération.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p04_q6",
            "type": "mcq",
            "prompt": "Le son répété est la voyelle « i » dans plusieurs mots. Il s’agit d’ :",
            "options": [
              "Une allitération",
              "Un contre-rejet",
              "Une assonance",
              "Une césure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le son répété est vocalique : c’est une assonance, comme dans l’exemple en « i » de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p04_q1",
          "type": "mcq",
          "prompt": "Les échos sonores entre les mots établissent :",
          "options": [
            "Un rapport de rime uniquement",
            "Un double rapport de son et de sens",
            "Une simple liste de mots",
            "Un effet sans aucun sens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon dit que les échos sonores invitent à relier les mots : double rapport de son et de sens."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p04_q2",
          "type": "mcq",
          "prompt": "L’assonance est la répétition :",
          "options": [
            "D’un même son-consonne",
            "De la même rime en fin de vers",
            "D’un même son-voyelle ou de sons vocaliques voisins",
            "Du même mot à chaque vers"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Assonance porte sur les voyelles : répétition d’un son-voyelle ou de sons vocaliques voisins."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p04_q3",
          "type": "mcq",
          "prompt": "Dans l’exemple de la leçon, l’assonance en « i » révèle :",
          "options": [
            "La joie",
            "Le bruit du souffle",
            "La douleur",
            "La vitesse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’interprétation donnée : l’assonance en « i » révèle la douleur."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p04_q4",
          "type": "mcq",
          "prompt": "L’allitération est la répétition :",
          "options": [
            "D’un même son-consonne ou de sons consonantiques voisins",
            "D’un même son-voyelle uniquement",
            "D’une même phrase",
            "D’un même vers entier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Allitération porte sur les consonnes : répétition d’un son-consonne ou de sons consonantiques voisins."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p04_q5",
          "type": "mcq",
          "prompt": "Dans cet exemple, les allitérations en « f » et « l » évoquent :",
          "options": [
            "La douleur",
            "Le bruit du souffle",
            "Le silence total",
            "La colère du poète"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon interprète ces allitérations comme l’évocation du bruit du souffle."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p04_q6",
          "type": "mcq",
          "prompt": "Le son répété est la voyelle « i » dans plusieurs mots. Il s’agit d’ :",
          "options": [
            "Une allitération",
            "Un contre-rejet",
            "Une assonance",
            "Une césure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le son répété est vocalique : c’est une assonance, comme dans l’exemple en « i » de la leçon."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l04_rythme_p05",
      "order": 5,
      "title": "Les rimes et leurs dispositions",
      "summary": "Définir la rime et reconnaître les rimes plates, croisées et embrassées d’après leur schéma.",
      "conceptExplanation": "En poésie, la rime est la répétition de sonorités identiques en fin de vers. Pour que deux vers riment, la dernière voyelle accentuée et tout ce qui suit doit se prononcer de la même manière.\nDans la versification classique, les rimes se disposent de différentes manières :\n• Rimes plates ou suivies : A A B B — exemple, le texte 1 de Corneille, Le Cid : « ennemie » et « infamie » (A), « guerriers » et « lauriers » (B).\n• Rimes croisées ou alternées : A B A B — exemple, Alfred de Musset, « Les Nuits » : « misère » et « amère » (A), « douleur » et « malheur » (B).\n• Rimes embrassées : A B B A — exemple, Charles Baudelaire, « L’Horloge » : « avide » et « vide » (A) encadrent « loi » et « souviens-toi » (B).",
      "keyRule": "Rime : même sonorité en fin de vers ; schéma AABB : plates, ABAB : croisées, ABBA : embrassées.",
      "formulas": [],
      "workedExample": {
        "title": "Schématiser les rimes du texte 1 de Corneille",
        "statement": "Détermine la disposition des rimes des quatre vers du texte 1 : « ennemie », « infamie », « guerriers », « lauriers ».",
        "methodSteps": [
          "« Ennemie » et « infamie » ont la même sonorité finale : on leur donne la lettre A.",
          "« Guerriers » et « lauriers » ont une autre sonorité commune : on leur donne la lettre B.",
          "L’ordre obtenu est A A B B : les rimes se suivent deux à deux.",
          "Cette disposition est celle des rimes plates ou suivies."
        ],
        "conclusion": "Le schéma AABB correspond aux rimes plates ou suivies du texte support."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La rime",
          "stepTheme": "La rime",
          "stepBadge": "La rime",
          "paragraphText": "• Rime : répétition de sonorités identiques en fin de vers.\nPour que deux vers riment, la dernière voyelle accentuée et tout ce qui suit doit se prononcer de la même manière.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p05_q1",
            "type": "mcq",
            "prompt": "Pour que deux vers riment, il faut que :",
            "options": [
              "Leurs premiers mots soient identiques",
              "La dernière voyelle accentuée et tout ce qui suit se prononcent de la même manière",
              "Ils aient le même nombre de mots",
              "Ils soient écrits par le même auteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la condition posée par la leçon : identité de prononciation à partir de la dernière voyelle accentuée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les rimes plates ou suivies",
          "stepTheme": "Les rimes plates ou suivies",
          "stepBadge": "Les rimes plates ou suivies",
          "paragraphText": "• Rimes plates ou suivies : disposition A A B B.\nExemple : le texte 1 de Corneille, où « ennemie » rime avec « infamie », puis « guerriers » avec « lauriers ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p05_q2",
            "type": "mcq",
            "prompt": "Le schéma A A B B correspond aux rimes :",
            "options": [
              "Croisées ou alternées",
              "Embrassées",
              "Plates ou suivies",
              "Libres sans disposition"
            ],
            "correctAnswerIndex": 2,
            "explanation": "AABB : les rimes se suivent deux à deux, ce sont les rimes plates ou suivies."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les rimes croisées ou alternées",
          "stepTheme": "Les rimes croisées ou alternées",
          "stepBadge": "Les rimes croisées ou alternées",
          "paragraphText": "• Rimes croisées ou alternées : disposition A B A B.\nExemple de Musset, « Les Nuits » : « misère » (A), « douleur » (B), « amère » (A), « malheur » (B).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p05_q3",
            "type": "mcq",
            "prompt": "Le schéma A B A B correspond aux rimes :",
            "options": [
              "Plates ou suivies",
              "Croisées ou alternées",
              "Embrassées",
              "Internes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "ABAB : les rimes alternent, ce sont les rimes croisées ou alternées."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les rimes embrassées",
          "stepTheme": "Les rimes embrassées",
          "stepBadge": "Les rimes embrassées",
          "paragraphText": "• Rimes embrassées : disposition A B B A.\nExemple de Baudelaire, « L’Horloge » : « avide » (A), « loi » (B), « souviens-toi » (B), « vide » (A).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p05_q4",
            "type": "mcq",
            "prompt": "Le schéma A B B A correspond aux rimes :",
            "options": [
              "Embrassées",
              "Plates ou suivies",
              "Croisées ou alternées",
              "Suivies uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ABBA : la rime A embrasse les deux vers en B, ce sont les rimes embrassées."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Identifier l’exemple de Baudelaire",
          "stepTheme": "Identifier l’exemple de Baudelaire",
          "stepBadge": "Identifier l’exemple de Baudelaire",
          "paragraphText": "Exemple de rimes embrassées donné par la leçon : Charles Baudelaire, « L’Horloge », avec « le temps est un joueur avide » et « la clepsydre se vide » en A.\nLes vers en B sont « c’est la loi » et « souviens-toi ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p05_q5",
            "type": "mcq",
            "prompt": "L’exemple des rimes embrassées est tiré, dans la leçon, de :",
            "options": [
              "Le Cid de Corneille",
              "« Les Nuits » de Musset",
              "« L’Horloge » de Charles Baudelaire",
              "Une fable de La Fontaine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon illustre les rimes embrassées par « L’Horloge » de Charles Baudelaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Lire le schéma dans le désordre",
          "stepTheme": "Lire le schéma dans le désordre",
          "stepBadge": "Lire le schéma dans le désordre",
          "paragraphText": "Piège : nommer la disposition sans écrire le schéma lettre par lettre, dans l’ordre des vers.\nÉcris d’abord A pour la première sonorité, B pour la nouvelle sonorité, puis suis l’ordre réel : AA BB, ABAB ou ABBA décident du nom.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p05_q6",
            "type": "mcq",
            "prompt": "Un quatrain présente l’ordre de rimes A B B A. Le nommer « rimes croisées » est :",
            "options": [
              "Exact, car les rimes se croisent toujours ainsi",
              "Fautif : A B B A désigne les rimes embrassées",
              "Exact seulement chez Baudelaire",
              "Impossible à déterminer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "ABBA est le schéma des rimes embrassées ; les rimes croisées suivent le schéma ABAB."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p05_q1",
          "type": "mcq",
          "prompt": "Pour que deux vers riment, il faut que :",
          "options": [
            "Leurs premiers mots soient identiques",
            "La dernière voyelle accentuée et tout ce qui suit se prononcent de la même manière",
            "Ils aient le même nombre de mots",
            "Ils soient écrits par le même auteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la condition posée par la leçon : identité de prononciation à partir de la dernière voyelle accentuée."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p05_q2",
          "type": "mcq",
          "prompt": "Le schéma A A B B correspond aux rimes :",
          "options": [
            "Croisées ou alternées",
            "Embrassées",
            "Plates ou suivies",
            "Libres sans disposition"
          ],
          "correctAnswerIndex": 2,
          "explanation": "AABB : les rimes se suivent deux à deux, ce sont les rimes plates ou suivies."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p05_q3",
          "type": "mcq",
          "prompt": "Le schéma A B A B correspond aux rimes :",
          "options": [
            "Plates ou suivies",
            "Croisées ou alternées",
            "Embrassées",
            "Internes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "ABAB : les rimes alternent, ce sont les rimes croisées ou alternées."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p05_q4",
          "type": "mcq",
          "prompt": "Le schéma A B B A correspond aux rimes :",
          "options": [
            "Embrassées",
            "Plates ou suivies",
            "Croisées ou alternées",
            "Suivies uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ABBA : la rime A embrasse les deux vers en B, ce sont les rimes embrassées."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p05_q5",
          "type": "mcq",
          "prompt": "L’exemple des rimes embrassées est tiré, dans la leçon, de :",
          "options": [
            "Le Cid de Corneille",
            "« Les Nuits » de Musset",
            "« L’Horloge » de Charles Baudelaire",
            "Une fable de La Fontaine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon illustre les rimes embrassées par « L’Horloge » de Charles Baudelaire."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p05_q6",
          "type": "mcq",
          "prompt": "Un quatrain présente l’ordre de rimes A B B A. Le nommer « rimes croisées » est :",
          "options": [
            "Exact, car les rimes se croisent toujours ainsi",
            "Fautif : A B B A désigne les rimes embrassées",
            "Exact seulement chez Baudelaire",
            "Impossible à déterminer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "ABBA est le schéma des rimes embrassées ; les rimes croisées suivent le schéma ABAB."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l04_rythme_p06",
      "order": 6,
      "title": "Le rythme dans le texte en prose : unités et types de rythme",
      "summary": "Repérer accent et pause en prose, puis distinguer les rythmes binaire, ternaire, croissant et décroissant.",
      "conceptExplanation": "Séance 2 : le rythme dans le texte en prose, à partir de Bossuet (Oraisons funèbres) et de François Mauriac (Le Nœud de vipères).\nLes unités métriques : l’accent d’intensité est celui qui frappe la dernière syllabe accentuée du mot ou du groupe de mots — exemple : « les trompettes…, fifres ». La pause, également appelée coupe, se place après la dernière syllabe accentuée : « Les trompet/tes, les fifres/, les hautbois/, les tambours/, les canons… »\nLes types de rythme : le rythme binaire, lorsque les deux propositions de la phrase ont la même construction — symétrie qui permet le parallélisme ou l’opposition des idées (« Elle a vu ta blessure / et n’a pas pu la fermer »). Le rythme ternaire, quand les trois propositions ont la même construction — effet de parallélisme ou de simultanéité. Le rythme croissant, quand les propositions d’abord courtes deviennent de plus en plus longues — effet d’amplitude (« Va-t’en, chétif insecte, excrément de la terre »). Le rythme décroissant, quand les groupes de mots deviennent de plus en plus courts (« Vous aviez demandé à me voir, / vous m’avez vu, / je m’en vais, / adieu »).\nL’évaluation corrigée classe « C’est là qu’il faut aller vivre, / c’est là qu’il faut aller mourir ! » en rythme binaire (deux temps) et « C’est là qu’il faut aller respirer, / rêver et / allonger les heures… » en rythme ternaire (trois temps). L’exercice 7 de la séance 1 classe de même « J’ai dit à mon cœur, à mon faible cœur » en rythme binaire et « Cette nuit, comme les autres, j’ai pleuré » en rythme ternaire.",
      "keyRule": "En prose : accent d’intensité et pause découpent la phrase ; compte les temps — deux : binaire, trois : ternaire, groupes qui grandissent : croissant, qui raccourcissent : décroissant.",
      "formulas": [],
      "workedExample": {
        "title": "Classer deux phrases de l’évaluation corrigée",
        "statement": "Détermine le rythme de : P1 « C’est là qu’il faut aller vivre, c’est là qu’il faut aller mourir ! » et P2 « C’est là qu’il faut aller respirer, rêver et allonger les heures par l’infini des sensations ».",
        "methodSteps": [
          "P1 se découpe en deux propositions de même construction : « aller vivre » et « aller mourir » — deux temps.",
          "Deux propositions de même construction donnent un rythme binaire, ici avec opposition des idées (vivre / mourir).",
          "P2 se découpe en trois temps : « respirer », « rêver », « allonger les heures… ».",
          "Trois propositions de même construction donnent un rythme ternaire."
        ],
        "conclusion": "P1 est binaire et P2 ternaire : c’est le corrigé donné par la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’accent d’intensité en prose",
          "stepTheme": "L’accent d’intensité en prose",
          "stepBadge": "L’accent d’intensité en prose",
          "paragraphText": "• Accent d’intensité : accent qui frappe la dernière syllabe accentuée du mot ou du groupe de mots.\nExemple de la séance 2 : « les trompettes…, fifres ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p06_q1",
            "type": "mcq",
            "prompt": "En prose, l’accent d’intensité frappe :",
            "options": [
              "La première syllabe de la phrase",
              "La dernière syllabe accentuée du mot ou du groupe de mots",
              "Uniquement les noms propres",
              "Toutes les syllabes également"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La séance 2 définit l’accent d’intensité par la dernière syllabe accentuée du mot ou du groupe de mots."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La pause, ou coupe, en prose",
          "stepTheme": "La pause, ou coupe, en prose",
          "stepBadge": "La pause, ou coupe, en prose",
          "paragraphText": "• Pause : également appelée coupe, elle se place après la dernière syllabe accentuée.\nExemple : « Les trompet/tes, les fifres/, les hautbois/, les tambours/, les canons… »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p06_q2",
            "type": "mcq",
            "prompt": "Dans l’exemple des « trompettes », la pause se place :",
            "options": [
              "Avant chaque groupe de mots",
              "Au milieu d’un mot au hasard",
              "Après la dernière syllabe accentuée",
              "Seulement en fin de phrase"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La pause ou coupe suit la dernière syllabe accentuée, comme après « trompettes » et « fifres »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le rythme binaire",
          "stepTheme": "Le rythme binaire",
          "stepBadge": "Le rythme binaire",
          "paragraphText": "• Rythme binaire : les deux propositions de la phrase ont la même construction.\nOn obtient une symétrie qui permet le parallélisme ou l’opposition des idées. Exemple : « Elle a vu ta blessure / et n’a pas pu la fermer. »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p06_q3",
            "type": "mcq",
            "prompt": "Le rythme binaire repose sur :",
            "options": [
              "Deux propositions de même construction, en symétrie",
              "Trois propositions de même construction",
              "Des propositions de plus en plus longues",
              "L’absence totale de pause"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux propositions de même construction : c’est le rythme binaire, avec parallélisme ou opposition."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le rythme ternaire",
          "stepTheme": "Le rythme ternaire",
          "stepBadge": "Le rythme ternaire",
          "paragraphText": "• Rythme ternaire : les trois propositions de la phrase ont la même construction.\nOn obtient un effet de parallélisme ou de simultanéité. Exemple : « Je n’ai plus rien à apprendre, / j’ai marché plus vite qu’un autre, / et j’ai fait le tour de ma vie. »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p06_q4",
            "type": "mcq",
            "prompt": "Le rythme ternaire repose sur :",
            "options": [
              "Deux temps opposés",
              "Des groupes de plus en plus courts",
              "Une seule proposition très longue",
              "Trois propositions de même construction"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Trois propositions de même construction produisent le rythme ternaire, effet de parallélisme ou de simultanéité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Rythmes croissant et décroissant",
          "stepTheme": "Rythmes croissant et décroissant",
          "stepBadge": "Rythmes croissant et décroissant",
          "paragraphText": "• Rythme croissant : les propositions, d’abord courtes, deviennent de plus en plus longues — effet d’amplitude. Exemple : « Va-t’en, chétif insecte, excrément de la terre. »\n• Rythme décroissant : les groupes de mots deviennent de plus en plus courts. Exemple : « Vous aviez demandé à me voir, / vous m’avez vu, / je m’en vais, / adieu. »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p06_q5",
            "type": "mcq",
            "prompt": "Dans « Va-t’en, chétif insecte, excrément de la terre », les propositions deviennent de plus en plus longues : c’est un rythme :",
            "options": [
              "Décroissant",
              "Croissant, avec effet d’amplitude",
              "Binaire",
              "Ternaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les groupes grandissent de « Va-t’en » à « excrément de la terre » : rythme croissant, effet d’amplitude."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Compter les temps avant de nommer le rythme",
          "stepTheme": "Compter les temps avant de nommer le rythme",
          "stepBadge": "Compter les temps avant de nommer le rythme",
          "paragraphText": "Piège : nommer le rythme d’après l’impression générale sans découper la phrase aux pauses.\nLe corrigé de l’évaluation compte les temps : deux temps pour « aller vivre / aller mourir » (binaire), trois temps pour « respirer / rêver / allonger » (ternaire).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l04_rythme_p06_q6",
            "type": "mcq",
            "prompt": "D’après le corrigé de la leçon, « C’est là qu’il faut aller vivre, / c’est là qu’il faut aller mourir ! » est un rythme :",
            "options": [
              "Ternaire, en trois temps",
              "Croissant",
              "Binaire, en deux temps",
              "Décroissant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé compte deux temps de même construction, avec opposition vivre / mourir : rythme binaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p06_q1",
          "type": "mcq",
          "prompt": "En prose, l’accent d’intensité frappe :",
          "options": [
            "La première syllabe de la phrase",
            "La dernière syllabe accentuée du mot ou du groupe de mots",
            "Uniquement les noms propres",
            "Toutes les syllabes également"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La séance 2 définit l’accent d’intensité par la dernière syllabe accentuée du mot ou du groupe de mots."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p06_q2",
          "type": "mcq",
          "prompt": "Dans l’exemple des « trompettes », la pause se place :",
          "options": [
            "Avant chaque groupe de mots",
            "Au milieu d’un mot au hasard",
            "Après la dernière syllabe accentuée",
            "Seulement en fin de phrase"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La pause ou coupe suit la dernière syllabe accentuée, comme après « trompettes » et « fifres »."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p06_q3",
          "type": "mcq",
          "prompt": "Le rythme binaire repose sur :",
          "options": [
            "Deux propositions de même construction, en symétrie",
            "Trois propositions de même construction",
            "Des propositions de plus en plus longues",
            "L’absence totale de pause"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux propositions de même construction : c’est le rythme binaire, avec parallélisme ou opposition."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p06_q4",
          "type": "mcq",
          "prompt": "Le rythme ternaire repose sur :",
          "options": [
            "Deux temps opposés",
            "Des groupes de plus en plus courts",
            "Une seule proposition très longue",
            "Trois propositions de même construction"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Trois propositions de même construction produisent le rythme ternaire, effet de parallélisme ou de simultanéité."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p06_q5",
          "type": "mcq",
          "prompt": "Dans « Va-t’en, chétif insecte, excrément de la terre », les propositions deviennent de plus en plus longues : c’est un rythme :",
          "options": [
            "Décroissant",
            "Croissant, avec effet d’amplitude",
            "Binaire",
            "Ternaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les groupes grandissent de « Va-t’en » à « excrément de la terre » : rythme croissant, effet d’amplitude."
        },
        {
          "id": "premiere_a1_francais_pl_l04_rythme_p06_q6",
          "type": "mcq",
          "prompt": "D’après le corrigé de la leçon, « C’est là qu’il faut aller vivre, / c’est là qu’il faut aller mourir ! » est un rythme :",
          "options": [
            "Ternaire, en trois temps",
            "Croissant",
            "Binaire, en deux temps",
            "Décroissant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé compte deux temps de même construction, avec opposition vivre / mourir : rythme binaire."
        }
      ]
    }
  ]
};
