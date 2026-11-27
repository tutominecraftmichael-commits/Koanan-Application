import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « La digestion des aliments » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2795
export const SVT_1ERE_D_L11_DIGESTION: CurriculumChapter = {
  "id": "premiere_d_svt_l11_digestion_aliments",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 11,
  "title": "Leçon 11 : La digestion des aliments",
  "summary": "Les aliments sont digérés selon un mécanisme d’hydrolyse catalysé par des enzymes, qui simplifient les molécules en nutriments, et ces enzymes agissent dans des conditions précises de pH et de température, avec une double spécificité.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2795",
  "points": [
    {
      "id": "premiere_d_svt_l11_digestion_aliments_p01",
      "order": 1,
      "title": "La digestion de l’amidon : hydrolyse, amylase salivaire et catalyseurs",
      "summary": "Interpréter l’expérience des tubes d’empois d’amidon et définir l’hydrolyse et le rôle des catalyseurs.",
      "conceptExplanation": "On dispose de trois tubes contenant chacun de l’empois d’amidon : dans le tube A, on ajoute de l’eau distillée ; dans le tube B, de la salive fraîche ; dans le tube C, de l’acide chlorhydrique ; après un bain-marie, on ajoute de la liqueur de Fehling.\nOn observe l’absence de précipité rouge brique dans le tube A, un précipité rouge brique abondant dans le tube B et un faible précipité rouge brique dans le tube C.\nL’eau pure n’a donc aucun effet sur l’amidon, tandis que la salive et l’acide chlorhydrique transforment l’amidon en sucre réducteur, la salive agissant plus rapidement que l’acide.\nLa digestion de l’amidon débute dans la bouche pendant la mastication, grâce à une enzyme de la salive, l’amylase salivaire ; l’action successive des amylases conduit à un sucre plus simple, le maltose, qui peut lui-même être transformé en un sucre encore plus simple, le glucose.\nLa réaction qui permet la décomposition de l’amidon est l’hydrolyse ; l’amylase salivaire est un catalyseur biologique et l’acide chlorhydrique un catalyseur chimique, et les catalyseurs biologiques sont plus efficaces que les catalyseurs chimiques.",
      "keyRule": "Amidon hydrolysé en sucres réducteurs : l’amylase salivaire, catalyseur biologique, agit plus vite que l’acide chlorhydrique.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter les trois tubes d’empois d’amidon",
        "statement": "Trois tubes d’empois d’amidon reçoivent de l’eau distillée, de la salive fraîche ou de l’acide chlorhydrique, puis de la liqueur de Fehling. Interprète les précipités observés.",
        "methodSteps": [
          "Tube A sans précipité : l’eau pure n’a aucun effet sur l’amidon, aucun sucre réducteur ne s’est formé.",
          "Tube B avec un précipité abondant : la salive a transformé l’amidon en sucre réducteur, révélé par la liqueur de Fehling.",
          "Tube C avec un faible précipité : l’acide chlorhydrique transforme aussi l’amidon, mais moins rapidement que la salive."
        ],
        "conclusion": "Ce sont les résultats et l’analyse de l’expérience 1 de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le tube témoin à l’eau distillée",
          "stepTheme": "Le tube témoin à l’eau distillée",
          "stepBadge": "Le tube témoin à l’eau distillée",
          "paragraphText": "Dans le tube A, contenant de l’empois d’amidon et de l’eau distillée, on n’observe pas de précipité rouge brique avec la liqueur de Fehling.\nL’eau pure n’a donc aucun effet sur l’amidon.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q1",
            "type": "mcq",
            "prompt": "Dans le tube A avec de l’eau distillée, le test à la liqueur de Fehling donne :",
            "options": [
              "Pas de précipité rouge brique",
              "Un précipité rouge brique abondant",
              "Un faible précipité rouge brique",
              "Une coloration violette"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le résultat du tube témoin de l’expérience 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le tube à la salive fraîche",
          "stepTheme": "Le tube à la salive fraîche",
          "stepBadge": "Le tube à la salive fraîche",
          "paragraphText": "Dans le tube B, contenant de l’empois d’amidon et de la salive fraîche, on observe un précipité rouge brique abondant.\nLa salive a donc transformé l’amidon en sucre réducteur, détecté par la liqueur de Fehling.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q2",
            "type": "mcq",
            "prompt": "Le précipité rouge brique abondant du tube B révèle la formation :",
            "options": [
              "D’acides aminés",
              "D’acides gras",
              "D’un sucre réducteur à partir de l’amidon",
              "De glycérol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La liqueur de Fehling révèle les sucres réducteurs formés par l’action de la salive."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’acide chlorhydrique agit, mais moins vite",
          "stepTheme": "L’acide chlorhydrique agit, mais moins vite",
          "stepBadge": "L’acide chlorhydrique agit, mais moins vite",
          "paragraphText": "Dans le tube C, avec de l’acide chlorhydrique, on observe un faible précipité rouge brique.\nLa salive et l’acide transforment tous deux l’amidon en sucre réducteur, mais la salive agit plus rapidement que l’acide chlorhydrique.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q3",
            "type": "mcq",
            "prompt": "Comparée à la salive, l’action de l’acide chlorhydrique sur l’amidon est :",
            "options": [
              "Inexistante",
              "Plus lente, avec un faible précipité",
              "Beaucoup plus rapide",
              "Identique en tout point"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la comparaison faite dans l’analyse de l’expérience 1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’hydrolyse de l’amidon",
          "stepTheme": "L’hydrolyse de l’amidon",
          "stepBadge": "L’hydrolyse de l’amidon",
          "paragraphText": "• Hydrolyse : réaction de décomposition d’un aliment, ici l’amidon, qui le transforme en molécules plus simples.\nL’action successive des amylases conduit au maltose, puis à un sucre encore plus simple, le glucose.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q4",
            "type": "mcq",
            "prompt": "La réaction qui permet la décomposition de l’amidon est :",
            "options": [
              "La condensation",
              "La photolyse",
              "L’oxydation complète",
              "L’hydrolyse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le terme donné dans l’interprétation de la digestion de l’amidon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L’amylase salivaire, catalyseur biologique",
          "stepTheme": "L’amylase salivaire, catalyseur biologique",
          "stepBadge": "L’amylase salivaire, catalyseur biologique",
          "paragraphText": "• Amylase salivaire : enzyme de la salive qui commence la digestion de l’amidon dans la bouche, pendant la mastication.\nC’est un catalyseur biologique, alors que l’acide chlorhydrique est un catalyseur chimique de la même réaction.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q5",
            "type": "mcq",
            "prompt": "L’amylase salivaire est :",
            "options": [
              "Un catalyseur chimique",
              "Un sucre réducteur",
              "Une enzyme de la salive, catalyseur biologique",
              "Un produit de la digestion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’interprétation oppose l’amylase, catalyseur biologique, à l’acide chlorhydrique, catalyseur chimique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les catalyseurs biologiques sont plus efficaces",
          "stepTheme": "Les catalyseurs biologiques sont plus efficaces",
          "stepBadge": "Les catalyseurs biologiques sont plus efficaces",
          "paragraphText": "Piège : l’acide chlorhydrique n’est pas inefficace, mais son hydrolyse de l’amidon est plus lente que celle de l’amylase salivaire.\nLa leçon conclut que les catalyseurs biologiques sont plus efficaces que les catalyseurs chimiques.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q6",
            "type": "mcq",
            "prompt": "D’après la leçon, les catalyseurs biologiques sont, par rapport aux catalyseurs chimiques :",
            "options": [
              "Plus efficaces",
              "Moins efficaces",
              "Toujours inefficaces",
              "Sans effet sur la vitesse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’hydrolyse de l’amidon par l’amylase salivaire est plus rapide que celle par l’acide chlorhydrique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q1",
          "type": "mcq",
          "prompt": "Dans le tube A avec de l’eau distillée, le test à la liqueur de Fehling donne :",
          "options": [
            "Pas de précipité rouge brique",
            "Un précipité rouge brique abondant",
            "Un faible précipité rouge brique",
            "Une coloration violette"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le résultat du tube témoin de l’expérience 1."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q2",
          "type": "mcq",
          "prompt": "Le précipité rouge brique abondant du tube B révèle la formation :",
          "options": [
            "D’acides aminés",
            "D’acides gras",
            "D’un sucre réducteur à partir de l’amidon",
            "De glycérol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La liqueur de Fehling révèle les sucres réducteurs formés par l’action de la salive."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q3",
          "type": "mcq",
          "prompt": "Comparée à la salive, l’action de l’acide chlorhydrique sur l’amidon est :",
          "options": [
            "Inexistante",
            "Plus lente, avec un faible précipité",
            "Beaucoup plus rapide",
            "Identique en tout point"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la comparaison faite dans l’analyse de l’expérience 1."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q4",
          "type": "mcq",
          "prompt": "La réaction qui permet la décomposition de l’amidon est :",
          "options": [
            "La condensation",
            "La photolyse",
            "L’oxydation complète",
            "L’hydrolyse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le terme donné dans l’interprétation de la digestion de l’amidon."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q5",
          "type": "mcq",
          "prompt": "L’amylase salivaire est :",
          "options": [
            "Un catalyseur chimique",
            "Un sucre réducteur",
            "Une enzyme de la salive, catalyseur biologique",
            "Un produit de la digestion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’interprétation oppose l’amylase, catalyseur biologique, à l’acide chlorhydrique, catalyseur chimique."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q6",
          "type": "mcq",
          "prompt": "D’après la leçon, les catalyseurs biologiques sont, par rapport aux catalyseurs chimiques :",
          "options": [
            "Plus efficaces",
            "Moins efficaces",
            "Toujours inefficaces",
            "Sans effet sur la vitesse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’hydrolyse de l’amidon par l’amylase salivaire est plus rapide que celle par l’acide chlorhydrique."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l11_digestion_aliments_p02",
      "order": 2,
      "title": "La digestion des protéines et des lipides",
      "summary": "Décrire la simplification des protéines en acides aminés et des lipides en acides gras et glycérol.",
      "conceptExplanation": "On fait ingérer de la viande à un individu, puis on prélève le contenu de son intestin grêle, le chyle, qu’on filtre ; le filtrat incolore devient violet en présence de ninhydrine après chauffage, ce qui révèle la présence de produits de la digestion des protéines.\nLes protéines alimentaires sont digérées au niveau de l’estomac et de l’intestin grêle par des enzymes spécifiques, principalement la pepsine dans l’estomac et la trypsine dans l’intestin, mais aussi d’autres peptidases ; il en résulte des acides aminés libres et des oligopeptides.\nPour les lipides, l’eau pure n’a aucun effet, tandis que les sels biliaires transforment l’huile en une solution homogène constituée de molécules d’acides gras et de glycérol.\nSous l’action de la lipase, les lipides sont transformés en molécules d’acides gras et en molécules de glycérol, en une émulsion où les particules de lipides sont réduites ; cette décomposition se poursuit dans le duodénum, avec la sécrétion biliaire produite dans le foie et stockée dans la vésicule biliaire, et l’action combinée de la bile et des enzymes pancréatiques.\nAu total, les enzymes jouent le rôle de catalyseurs dans les réactions d’hydrolyse permettant une simplification moléculaire des aliments en nutriments.",
      "keyRule": "Protéines vers acides aminés, lipides vers acides gras et glycérol : c’est la simplification moléculaire en nutriments.",
      "formulas": [],
      "workedExample": {
        "title": "Associer chaque aliment au nutriment issu de sa simplification",
        "statement": "Associe chaque aliment au nutriment résultant de sa simplification moléculaire : amidon, lipide, protéine ; nutriments : acide aminé, glycérol, acide gras, glucose.",
        "methodSteps": [
          "L’amidon donne du glucose après simplification moléculaire.",
          "Le lipide donne du glycérol et des acides gras.",
          "La protéine donne des acides aminés."
        ],
        "conclusion": "C’est le corrigé de l’exercice d’application 1 de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le test à la ninhydrine sur le chyle",
          "stepTheme": "Le test à la ninhydrine sur le chyle",
          "stepBadge": "Le test à la ninhydrine sur le chyle",
          "paragraphText": "Le filtrat incolore du chyle intestinal devient violet en présence de ninhydrine après chauffage.\nCette coloration révèle la présence de produits issus de la digestion de la viande, donc des protéines.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q1",
            "type": "mcq",
            "prompt": "La coloration violette avec la ninhydrine sur le filtrat de chyle révèle :",
            "options": [
              "La présence de sucres réducteurs",
              "La présence de lipides intacts",
              "L’absence totale de nutriments",
              "La présence de produits de la digestion des protéines"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le résultat et l’analyse de l’expérience 2, sur la digestion de la viande."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les enzymes de la digestion des protéines",
          "stepTheme": "Les enzymes de la digestion des protéines",
          "stepBadge": "Les enzymes de la digestion des protéines",
          "paragraphText": "Les protéines sont digérées dans l’estomac et l’intestin grêle par des enzymes spécifiques.\nLa leçon cite principalement la pepsine dans l’estomac et la trypsine dans l’intestin, ainsi que d’autres peptidases.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q2",
            "type": "mcq",
            "prompt": "Dans l’estomac, la principale enzyme de la digestion des protéines citée est :",
            "options": [
              "La trypsine",
              "La pepsine",
              "La lipase",
              "L’amylase salivaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La pepsine agit dans l’estomac et la trypsine dans l’intestin, selon l’interprétation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les produits de la digestion des protéines",
          "stepTheme": "Les produits de la digestion des protéines",
          "stepBadge": "Les produits de la digestion des protéines",
          "paragraphText": "La digestion des protéines donne des acides aminés libres et des oligopeptides.\nCes petites molécules sont les nutriments issus de la simplification moléculaire des protéines.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q3",
            "type": "mcq",
            "prompt": "La digestion des protéines produit principalement :",
            "options": [
              "Du glucose et du maltose",
              "Des acides aminés libres et des oligopeptides",
              "Du glycérol uniquement",
              "Des sels biliaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le résultat de l’action des enzymes protéolytiques donné dans la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L’expérience sur l’huile et les sels biliaires",
          "stepTheme": "L’expérience sur l’huile et les sels biliaires",
          "stepBadge": "L’expérience sur l’huile et les sels biliaires",
          "paragraphText": "Avec de l’eau distillée, l’huile reste une solution hétérogène ; avec quelques gouttes de sels biliaires, on obtient une solution homogène.\nCette solution homogène est constituée de molécules d’acides gras et de glycérol.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q4",
            "type": "mcq",
            "prompt": "Avec les sels biliaires, l’huile devient une solution homogène constituée :",
            "options": [
              "D’amidon et de glucose",
              "De protéines intactes",
              "D’eau et de sels minéraux uniquement",
              "De molécules d’acides gras et de glycérol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le résultat de l’expérience 3, sur la digestion de l’huile."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La lipase, la bile et le foie",
          "stepTheme": "La lipase, la bile et le foie",
          "stepBadge": "La lipase, la bile et le foie",
          "paragraphText": "Sous l’action de la lipase, les lipides sont transformés en acides gras et en glycérol, dans une émulsion où les particules sont réduites.\nLa bile, qui aide cette action, est produite dans le foie mais stockée dans la vésicule biliaire, et la décomposition se poursuit dans le duodénum.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q5",
            "type": "mcq",
            "prompt": "La sécrétion biliaire utilisée pour la digestion des lipides est produite dans :",
            "options": [
              "Le foie, puis stockée dans la vésicule biliaire",
              "La vésicule biliaire",
              "Le pancréas uniquement",
              "L’estomac"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon précise que la bile est produite dans le foie et stockée dans la vésicule biliaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La simplification moléculaire en nutriments",
          "stepTheme": "La simplification moléculaire en nutriments",
          "stepBadge": "La simplification moléculaire en nutriments",
          "paragraphText": "Les substances qui découpent les aliments dans le tube digestif sont des enzymes, catalyseurs des réactions d’hydrolyse.\nCes hydrolyses réalisent une simplification moléculaire des aliments en nutriments, utilisables par l’organisme.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q6",
            "type": "mcq",
            "prompt": "Le rôle des enzymes digestives est de catalyser des réactions d’hydrolyse permettant :",
            "options": [
              "La complication des molécules alimentaires",
              "La production d’aliments complexes",
              "La simplification moléculaire des aliments en nutriments",
              "L’arrêt de la digestion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la conclusion de la partie I de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q1",
          "type": "mcq",
          "prompt": "La coloration violette avec la ninhydrine sur le filtrat de chyle révèle :",
          "options": [
            "La présence de sucres réducteurs",
            "La présence de lipides intacts",
            "L’absence totale de nutriments",
            "La présence de produits de la digestion des protéines"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le résultat et l’analyse de l’expérience 2, sur la digestion de la viande."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q2",
          "type": "mcq",
          "prompt": "Dans l’estomac, la principale enzyme de la digestion des protéines citée est :",
          "options": [
            "La trypsine",
            "La pepsine",
            "La lipase",
            "L’amylase salivaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La pepsine agit dans l’estomac et la trypsine dans l’intestin, selon l’interprétation."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q3",
          "type": "mcq",
          "prompt": "La digestion des protéines produit principalement :",
          "options": [
            "Du glucose et du maltose",
            "Des acides aminés libres et des oligopeptides",
            "Du glycérol uniquement",
            "Des sels biliaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le résultat de l’action des enzymes protéolytiques donné dans la leçon."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q4",
          "type": "mcq",
          "prompt": "Avec les sels biliaires, l’huile devient une solution homogène constituée :",
          "options": [
            "D’amidon et de glucose",
            "De protéines intactes",
            "D’eau et de sels minéraux uniquement",
            "De molécules d’acides gras et de glycérol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le résultat de l’expérience 3, sur la digestion de l’huile."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q5",
          "type": "mcq",
          "prompt": "La sécrétion biliaire utilisée pour la digestion des lipides est produite dans :",
          "options": [
            "Le foie, puis stockée dans la vésicule biliaire",
            "La vésicule biliaire",
            "Le pancréas uniquement",
            "L’estomac"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon précise que la bile est produite dans le foie et stockée dans la vésicule biliaire."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q6",
          "type": "mcq",
          "prompt": "Le rôle des enzymes digestives est de catalyser des réactions d’hydrolyse permettant :",
          "options": [
            "La complication des molécules alimentaires",
            "La production d’aliments complexes",
            "La simplification moléculaire des aliments en nutriments",
            "L’arrêt de la digestion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la conclusion de la partie I de la leçon."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l11_digestion_aliments_p03",
      "order": 3,
      "title": "L’influence du pH sur l’activité de l’amylase salivaire",
      "summary": "Lire l’expérience des trois pH et conclure que l’amylase a une activité optimale à pH neutre.",
      "conceptExplanation": "On dispose de trois tubes contenant chacun de l’empois d’amidon à pH neutre au départ : dans le tube A, on ajoute de l’amylase salivaire seule ; dans le tube B, une solution de soude à pH basique et de l’amylase salivaire ; dans le tube C, une solution d’acide citrique à pH acide et de l’amylase salivaire.\nOn teste régulièrement les solutions à la liqueur de Fehling : pour le pH neutre, un précipité rouge brique apparaît au bout d’une minute ; pour le pH acide, un précipité rouge brique apparaît au bout de trois minutes ; pour le pH basique, il n’y a pas de précipité.\nL’amylase a donc une activité optimale à un pH neutre, et son activité est ralentie à un pH acide.\nLe pH neutre est le pH optimal de l’activité de l’amylase car elle a elle-même un pH neutre.",
      "keyRule": "L’amylase salivaire agit le plus vite à pH neutre, plus lentement en milieu acide et pas en milieu basique.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les trois tubes selon la rapidité de la réaction",
        "statement": "Classe les tubes A (pH neutre), B (pH basique) et C (pH acide) selon le délai d’apparition du précipité rouge brique à la liqueur de Fehling.",
        "methodSteps": [
          "Tube A, pH neutre : précipité au bout d’une minute, c’est le plus rapide.",
          "Tube C, pH acide : précipité au bout de trois minutes, la réaction est ralentie.",
          "Tube B, pH basique : pas de précipité, l’amylase est incapable d’agir."
        ],
        "conclusion": "Ce sont les résultats du document 7 de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "À pH neutre, la réaction la plus rapide",
          "stepTheme": "À pH neutre, la réaction la plus rapide",
          "stepBadge": "À pH neutre, la réaction la plus rapide",
          "paragraphText": "Pour le pH neutre, un précipité rouge brique apparaît au bout d’une minute à la liqueur de Fehling.\nC’est le délai le plus court des trois tubes : l’activité de l’amylase y est la plus forte.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q1",
            "type": "mcq",
            "prompt": "À pH neutre, le précipité rouge brique apparaît au bout de :",
            "options": [
              "Une minute",
              "Trois minutes",
              "Quinze minutes",
              "Il n’apparaît jamais"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le résultat du tube A du document 7."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "À pH acide, une activité ralentie",
          "stepTheme": "À pH acide, une activité ralentie",
          "stepBadge": "À pH acide, une activité ralentie",
          "paragraphText": "Pour le pH acide, obtenu avec l’acide citrique, un précipité rouge brique apparaît au bout de trois minutes.\nLa réaction a donc lieu, mais elle est ralentie par rapport au pH neutre.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q2",
            "type": "mcq",
            "prompt": "À pH acide, l’activité de l’amylase salivaire est :",
            "options": [
              "Optimale",
              "Totalement impossible et définitive",
              "Ralentie, avec un précipité au bout de trois minutes",
              "Remplacée par celle de la pepsine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le résultat du tube C et l’analyse de la première série d’expériences."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "À pH basique, aucune réaction",
          "stepTheme": "À pH basique, aucune réaction",
          "stepBadge": "À pH basique, aucune réaction",
          "paragraphText": "Pour le pH basique, obtenu avec la soude, il n’y a pas de précipité rouge brique.\nL’amylase est incapable d’agir à un pH basique dans les conditions de l’expérience.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q3",
            "type": "mcq",
            "prompt": "À pH basique, le test à la liqueur de Fehling donne :",
            "options": [
              "Un précipité immédiat",
              "Pas de précipité rouge brique",
              "Un faible précipité après une minute",
              "Une coloration violette"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le résultat du tube B du document 7."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le pH optimal de l’amylase",
          "stepTheme": "Le pH optimal de l’amylase",
          "stepBadge": "Le pH optimal de l’amylase",
          "paragraphText": "• pH optimal : pH auquel l’activité d’une enzyme est maximale ; pour l’amylase salivaire, c’est le pH neutre.\nLa leçon explique que le pH neutre est le pH optimal de l’amylase car elle a elle-même un pH neutre.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q4",
            "type": "mcq",
            "prompt": "Le pH optimal de l’activité de l’amylase salivaire est :",
            "options": [
              "Un pH très acide",
              "Un pH très basique",
              "N’importe quel pH",
              "Un pH neutre"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la conclusion de l’analyse de la première série d’expériences."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L’amylase salivaire et le milieu acide de l’estomac",
          "stepTheme": "L’amylase salivaire et le milieu acide de l’estomac",
          "stepBadge": "L’amylase salivaire et le milieu acide de l’estomac",
          "paragraphText": "Piège : une enzyme gastrique comme la pepsine n’a pas le même pH optimal que l’amylase salivaire.\nL’exercice d’approfondissement de la leçon montre que l’amylase salivaire ne peut pas agir dans un milieu acide, alors que la pepsine n’agit que dans un milieu acide.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q5",
            "type": "mcq",
            "prompt": "D’après l’exercice d’approfondissement, la pepsine agit :",
            "options": [
              "Uniquement dans un milieu neutre",
              "Uniquement dans un milieu basique",
              "Uniquement dans un milieu acide",
              "Dans tous les milieux également"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé oppose l’amylase salivaire, inactive en milieu acide, à la pepsine, qui n’agit qu’en milieu acide."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Comment on détecte la fin de la réaction",
          "stepTheme": "Comment on détecte la fin de la réaction",
          "stepBadge": "Comment on détecte la fin de la réaction",
          "paragraphText": "On prélève régulièrement des gouttes des solutions et on y ajoute de la liqueur de Fehling.\nLorsque le précipité rouge apparaît, on considère que la réaction a eu lieu, car un sucre réducteur s’est formé.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q6",
            "type": "mcq",
            "prompt": "Dans cette expérience, on considère que la réaction a eu lieu lorsque :",
            "options": [
              "Le premier précipité rouge apparaît au test à la liqueur de Fehling",
              "L’amidon disparaît visiblement",
              "La température du bain-marie change",
              "Le pH devient neutre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le critère de lecture décrit dans la présentation de la première série."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q1",
          "type": "mcq",
          "prompt": "À pH neutre, le précipité rouge brique apparaît au bout de :",
          "options": [
            "Une minute",
            "Trois minutes",
            "Quinze minutes",
            "Il n’apparaît jamais"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le résultat du tube A du document 7."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q2",
          "type": "mcq",
          "prompt": "À pH acide, l’activité de l’amylase salivaire est :",
          "options": [
            "Optimale",
            "Totalement impossible et définitive",
            "Ralentie, avec un précipité au bout de trois minutes",
            "Remplacée par celle de la pepsine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le résultat du tube C et l’analyse de la première série d’expériences."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q3",
          "type": "mcq",
          "prompt": "À pH basique, le test à la liqueur de Fehling donne :",
          "options": [
            "Un précipité immédiat",
            "Pas de précipité rouge brique",
            "Un faible précipité après une minute",
            "Une coloration violette"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le résultat du tube B du document 7."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q4",
          "type": "mcq",
          "prompt": "Le pH optimal de l’activité de l’amylase salivaire est :",
          "options": [
            "Un pH très acide",
            "Un pH très basique",
            "N’importe quel pH",
            "Un pH neutre"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la conclusion de l’analyse de la première série d’expériences."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q5",
          "type": "mcq",
          "prompt": "D’après l’exercice d’approfondissement, la pepsine agit :",
          "options": [
            "Uniquement dans un milieu neutre",
            "Uniquement dans un milieu basique",
            "Uniquement dans un milieu acide",
            "Dans tous les milieux également"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé oppose l’amylase salivaire, inactive en milieu acide, à la pepsine, qui n’agit qu’en milieu acide."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q6",
          "type": "mcq",
          "prompt": "Dans cette expérience, on considère que la réaction a eu lieu lorsque :",
          "options": [
            "Le premier précipité rouge apparaît au test à la liqueur de Fehling",
            "L’amidon disparaît visiblement",
            "La température du bain-marie change",
            "Le pH devient neutre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le critère de lecture décrit dans la présentation de la première série."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l11_digestion_aliments_p04",
      "order": 4,
      "title": "L’influence de la température sur l’activité enzymatique",
      "summary": "Lire l’expérience des trois bains-marie et expliquer inhibition par le froid et dénaturation par la chaleur.",
      "conceptExplanation": "On dispose de trois tubes contenant chacun de l’empois d’amidon, placés dans des bains-marie à des températures différentes, puis on ajoute de l’amylase et on teste régulièrement à la liqueur de Fehling.\nÀ basse température, le précipité rouge brique apparaît au bout de quinze minutes ; à la température du corps, il apparaît au bout de six minutes ; à température élevée, il n’y a aucune apparition du précipité rouge brique, quel que soit le temps passé au bain-marie.\nL’amylase a donc une activité optimale à une température d’environ celle du corps humain, qui est la température corporelle normale.\nLes températures basses inactivent l’enzyme, tandis que les températures élevées la dénaturent ou la détruisent.\nLa situation d’évaluation confirme ce résultat : à température optimale, les tests montrent la disparition de l’amidon et la présence de sucre réducteur, alors qu’à température très basse ou après ébullition, l’amidon persiste et aucun sucre réducteur ne se forme.",
      "keyRule": "Activité enzymatique optimale vers la température du corps : le froid inactive, la chaleur dénature.",
      "formulas": [],
      "workedExample": {
        "title": "Exploiter le tableau de la situation d’évaluation sur la température",
        "statement": "Cinq tubes d’amidon cuit et d’amylase sont testés à l’eau iodée et à la liqueur de Fehling. Identifie les tubes où l’amidon a disparu.",
        "methodSteps": [
          "Tube 1, à la température optimale : test à l’eau iodée négatif et liqueur de Fehling positive, l’amidon a disparu et un sucre réducteur s’est formé.",
          "Tube 4, avec de l’amylase congelée remise à température optimale : mêmes résultats, l’amidon a disparu.",
          "Tubes 2, 3 et 5, à température extrême ou avec une amylase bouillie : l’eau iodée reste positive et la liqueur de Fehling négative, l’amidon persiste."
        ],
        "conclusion": "Ce sont les identifications demandées dans la situation d’évaluation de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "À basse température, une réaction lente",
          "stepTheme": "À basse température, une réaction lente",
          "stepBadge": "À basse température, une réaction lente",
          "paragraphText": "Dans le bain-marie à basse température, le précipité rouge brique apparaît au bout de quinze minutes.\nLa réaction a donc lieu, mais elle est beaucoup plus lente qu’à la température du corps.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q1",
            "type": "mcq",
            "prompt": "À basse température, le précipité rouge brique apparaît au bout de :",
            "options": [
              "Six minutes",
              "Une minute",
              "Il n’apparaît jamais",
              "Quinze minutes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le résultat du premier tube de la deuxième série, document 8."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "À la température du corps, l’optimum",
          "stepTheme": "À la température du corps, l’optimum",
          "stepBadge": "À la température du corps, l’optimum",
          "paragraphText": "Dans le bain-marie à la température du corps, le précipité rouge brique apparaît au bout de six minutes.\nC’est le délai le plus court de la série : l’activité de l’amylase y est optimale.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q2",
            "type": "mcq",
            "prompt": "Le délai le plus court, six minutes, est obtenu à :",
            "options": [
              "Basse température",
              "La température du corps, environ 37 degrés",
              "Température élevée",
              "Température de congélation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le résultat du tube placé à la température corporelle dans le document 8."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "À température élevée, aucune réaction",
          "stepTheme": "À température élevée, aucune réaction",
          "stepBadge": "À température élevée, aucune réaction",
          "paragraphText": "Dans le bain-marie à température élevée, il n’y a aucune apparition du précipité rouge brique, quel que soit le temps mis.\nL’amylase ne produit donc plus de sucre réducteur à cette température.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q3",
            "type": "mcq",
            "prompt": "À température élevée, le test à la liqueur de Fehling donne :",
            "options": [
              "Un précipité en six minutes",
              "Aucun précipité, quel que soit le temps",
              "Un précipité en quinze minutes",
              "Une coloration violette"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le résultat du troisième tube de la deuxième série."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La température optimale de l’amylase",
          "stepTheme": "La température optimale de l’amylase",
          "stepBadge": "La température optimale de l’amylase",
          "paragraphText": "• Température optimale : température à laquelle l’activité de l’enzyme est maximale ; pour l’amylase, elle est d’environ la température corporelle normale.\nLa leçon juge normal cet optimum, du fait que la température corporelle normale est de cet ordre.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q4",
            "type": "mcq",
            "prompt": "La température optimale de l’amylase correspond environ à :",
            "options": [
              "La température de congélation",
              "La température d’ébullition",
              "La température ambiante la plus basse",
              "La température corporelle normale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’interprétation donnée pour la deuxième série d’expériences."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Froid qui inactive, chaleur qui dénature",
          "stepTheme": "Froid qui inactive, chaleur qui dénature",
          "stepBadge": "Froid qui inactive, chaleur qui dénature",
          "paragraphText": "Les températures basses inactivent les enzymes, sans les détruire définitivement.\nLes températures élevées, au contraire, dénaturent ou détruisent les enzymes.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q5",
            "type": "mcq",
            "prompt": "Les températures élevées agissent sur les enzymes en les :",
            "options": [
              "Dénaturant ou en les détruisant",
              "Inactivant temporairement seulement",
              "Activant indéfiniment",
              "Transformant en substrats"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la distinction faite dans l’interprétation : inactivation par le froid, dénaturation par la chaleur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une enzyme bouillie ne retrouve pas son activité",
          "stepTheme": "Une enzyme bouillie ne retrouve pas son activité",
          "stepBadge": "Une enzyme bouillie ne retrouve pas son activité",
          "paragraphText": "Piège : dans la situation d’évaluation, le tube contenant de l’amylase bouillie, replacé ensuite à température optimale, garde un test à l’eau iodée positif et une liqueur de Fehling négative.\nUne fois dénaturée par ébullition, l’enzyme ne digère plus l’amidon, contrairement à une enzyme seulement inactivée par le froid puis réchauffée.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q6",
            "type": "mcq",
            "prompt": "Après ébullition puis retour à la température optimale, l’amylase bouillie :",
            "options": [
              "Retrouve toute son activité",
              "Digère deux fois plus vite",
              "Ne digère plus l’amidon, car elle est dénaturée",
              "Se transforme en glucose"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tube 5 de la situation d’évaluation montre la persistance de l’amidon avec une amylase bouillie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q1",
          "type": "mcq",
          "prompt": "À basse température, le précipité rouge brique apparaît au bout de :",
          "options": [
            "Six minutes",
            "Une minute",
            "Il n’apparaît jamais",
            "Quinze minutes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le résultat du premier tube de la deuxième série, document 8."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q2",
          "type": "mcq",
          "prompt": "Le délai le plus court, six minutes, est obtenu à :",
          "options": [
            "Basse température",
            "La température du corps, environ 37 degrés",
            "Température élevée",
            "Température de congélation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le résultat du tube placé à la température corporelle dans le document 8."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q3",
          "type": "mcq",
          "prompt": "À température élevée, le test à la liqueur de Fehling donne :",
          "options": [
            "Un précipité en six minutes",
            "Aucun précipité, quel que soit le temps",
            "Un précipité en quinze minutes",
            "Une coloration violette"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le résultat du troisième tube de la deuxième série."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q4",
          "type": "mcq",
          "prompt": "La température optimale de l’amylase correspond environ à :",
          "options": [
            "La température de congélation",
            "La température d’ébullition",
            "La température ambiante la plus basse",
            "La température corporelle normale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’interprétation donnée pour la deuxième série d’expériences."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q5",
          "type": "mcq",
          "prompt": "Les températures élevées agissent sur les enzymes en les :",
          "options": [
            "Dénaturant ou en les détruisant",
            "Inactivant temporairement seulement",
            "Activant indéfiniment",
            "Transformant en substrats"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la distinction faite dans l’interprétation : inactivation par le froid, dénaturation par la chaleur."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q6",
          "type": "mcq",
          "prompt": "Après ébullition puis retour à la température optimale, l’amylase bouillie :",
          "options": [
            "Retrouve toute son activité",
            "Digère deux fois plus vite",
            "Ne digère plus l’amidon, car elle est dénaturée",
            "Se transforme en glucose"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tube 5 de la situation d’évaluation montre la persistance de l’amidon avec une amylase bouillie."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l11_digestion_aliments_p05",
      "order": 5,
      "title": "Les propriétés des enzymes : biocatalyseurs et double spécificité",
      "summary": "Définir les enzymes comme biocatalyseurs agissant dans les conditions du vivant, avec une spécificité de substrat et une spécificité d’action.",
      "conceptExplanation": "Les enzymes sont des biocatalyseurs, c’est-à-dire des catalyseurs de réactions biochimiques appartenant au métabolisme.\nElles ont une haute spécificité de substrat : elles agissent sur un substrat spécifique, et l’amylase, par exemple, n’agit que sur l’amidon cuit.\nElles agissent dans les conditions du vivant : en présence d’eau, dans des conditions de température et de pH très douces, les optima étant situés dans les conditions du vivant, et selon la nature de l’aliment.\nLa catalyse enzymatique commence par la formation d’un complexe enzyme-substrat : l’enzyme possède un site dont les caractéristiques permettent au substrat de s’y fixer, puis l’enzyme découpe le substrat en produits plus petits.\nLa conclusion générale ajoute la deuxième spécificité : ces enzymes catalysent uniquement des réactions d’hydrolyse, et une enzyme ne catalyse qu’un seul type de réaction chimique, c’est la spécificité de l’action.\nLes exercices de la leçon confirment que les enzymes sont des molécules organiques dénaturées par la chaleur, que leur activité diminue quand la température baisse et qu’elles ne fournissent pas l’énergie nécessaire aux réactions.",
      "keyRule": "Chaque enzyme a un seul substrat et un seul type de réaction : double spécificité des biocatalyseurs.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le mécanisme du complexe enzyme-substrat",
        "statement": "Dans le document de l’exercice de consolidation, E désigne l’enzyme, S le substrat et P1 et P2 les produits. Explique le mécanisme de l’activité enzymatique.",
        "methodSteps": [
          "L’enzyme E possède un site dont les caractéristiques permettent à la molécule S de s’y fixer.",
          "La fixation du substrat sur l’enzyme permet la formation d’un complexe enzyme-substrat.",
          "Cette association permet à l’enzyme de découper le substrat en deux molécules plus petites, les produits P1 et P2."
        ],
        "conclusion": "C’est le corrigé de l’exercice de consolidation sur le mécanisme enzymatique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les enzymes, des biocatalyseurs",
          "stepTheme": "Les enzymes, des biocatalyseurs",
          "stepBadge": "Les enzymes, des biocatalyseurs",
          "paragraphText": "• Biocatalyseurs : catalyseurs de réactions biochimiques, c’est-à-dire appartenant au métabolisme.\nLes enzymes accélèrent les réactions d’hydrolyse de la digestion sans fournir elles-mêmes l’énergie de la réaction.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q1",
            "type": "mcq",
            "prompt": "Les enzymes sont des biocatalyseurs, c’est-à-dire :",
            "options": [
              "Des catalyseurs de réactions biochimiques du métabolisme",
              "Des catalyseurs chimiques minéraux",
              "Des sources d’énergie pour les réactions",
              "Des produits de la digestion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition donnée dans l’interprétation de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La spécificité de substrat",
          "stepTheme": "La spécificité de substrat",
          "stepBadge": "La spécificité de substrat",
          "paragraphText": "• Spécificité de substrat : chaque enzyme n’hydrolyse qu’un seul type d’aliment, son substrat.\nL’amylase, par exemple, n’agit que sur l’amidon cuit.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q2",
            "type": "mcq",
            "prompt": "La spécificité de substrat signifie que l’amylase :",
            "options": [
              "Agit sur tous les aliments",
              "N’agit que sur les protéines",
              "N’agit que sur l’amidon cuit",
              "Agit sans substrat"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’exemple donné dans l’interprétation et repris dans la conclusion générale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La spécificité d’action",
          "stepTheme": "La spécificité d’action",
          "stepBadge": "La spécificité d’action",
          "paragraphText": "• Spécificité d’action : une enzyme ne catalyse qu’un seul type de réaction chimique.\nLes enzymes digestives catalysent uniquement des réactions d’hydrolyse.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q3",
            "type": "mcq",
            "prompt": "Les enzymes digestives catalysent uniquement des réactions :",
            "options": [
              "De condensation",
              "D’hydrolyse",
              "De combustion",
              "De photolyse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la deuxième spécificité énoncée dans la conclusion générale de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des conditions du vivant",
          "stepTheme": "Des conditions du vivant",
          "stepBadge": "Des conditions du vivant",
          "paragraphText": "Les enzymes agissent dans les conditions du vivant : en présence d’eau et dans des conditions de température et de pH très douces.\nLeurs optima de température et de pH sont situés dans ces conditions, et leur action dépend aussi de la nature de l’aliment.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q4",
            "type": "mcq",
            "prompt": "Les enzymes agissent dans des conditions :",
            "options": [
              "Extrêmes de température et de pH",
              "Sans eau obligatoirement",
              "Uniquement à l’ébullition",
              "Douces de température et de pH, en présence d’eau"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les conditions du vivant listées dans l’interprétation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le complexe enzyme-substrat",
          "stepTheme": "Le complexe enzyme-substrat",
          "stepBadge": "Le complexe enzyme-substrat",
          "paragraphText": "La catalyse enzymatique commence par la formation d’un complexe enzyme-substrat.\nLe substrat se fixe sur un site de l’enzyme dont les caractéristiques le reconnaissent, puis l’enzyme le découpe en produits plus petits.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q5",
            "type": "mcq",
            "prompt": "La catalyse enzymatique commence par la formation :",
            "options": [
              "D’un précipité rouge brique",
              "D’une émulsion de lipides",
              "D’un complexe enzyme-substrat",
              "D’un sucre réducteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’affirmation jugée vraie dans l’exercice d’application 2 de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les enzymes ne fournissent pas d’énergie",
          "stepTheme": "Les enzymes ne fournissent pas d’énergie",
          "stepBadge": "Les enzymes ne fournissent pas d’énergie",
          "paragraphText": "Piège : les enzymes ne fournissent pas l’énergie nécessaire aux réactions chimiques dans l’organisme ; elles les accélèrent en les catalysant.\nL’exercice d’application 2 juge fausse l’affirmation selon laquelle elles fourniraient cette énergie, et vraie celle selon laquelle ce sont des molécules organiques dénaturées par la chaleur.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q6",
            "type": "mcq",
            "prompt": "L’affirmation « les enzymes fournissent l’énergie nécessaire aux réactions » est :",
            "options": [
              "Fausse, selon le corrigé de l’exercice",
              "Vraie, selon le corrigé de l’exercice",
              "Vraie uniquement pour l’amylase",
              "Impossible à trancher"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé de l’exercice d’application 2 répond faux à cette affirmation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q1",
          "type": "mcq",
          "prompt": "Les enzymes sont des biocatalyseurs, c’est-à-dire :",
          "options": [
            "Des catalyseurs de réactions biochimiques du métabolisme",
            "Des catalyseurs chimiques minéraux",
            "Des sources d’énergie pour les réactions",
            "Des produits de la digestion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition donnée dans l’interprétation de la partie II."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q2",
          "type": "mcq",
          "prompt": "La spécificité de substrat signifie que l’amylase :",
          "options": [
            "Agit sur tous les aliments",
            "N’agit que sur les protéines",
            "N’agit que sur l’amidon cuit",
            "Agit sans substrat"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’exemple donné dans l’interprétation et repris dans la conclusion générale."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q3",
          "type": "mcq",
          "prompt": "Les enzymes digestives catalysent uniquement des réactions :",
          "options": [
            "De condensation",
            "D’hydrolyse",
            "De combustion",
            "De photolyse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la deuxième spécificité énoncée dans la conclusion générale de la leçon."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q4",
          "type": "mcq",
          "prompt": "Les enzymes agissent dans des conditions :",
          "options": [
            "Extrêmes de température et de pH",
            "Sans eau obligatoirement",
            "Uniquement à l’ébullition",
            "Douces de température et de pH, en présence d’eau"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les conditions du vivant listées dans l’interprétation."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q5",
          "type": "mcq",
          "prompt": "La catalyse enzymatique commence par la formation :",
          "options": [
            "D’un précipité rouge brique",
            "D’une émulsion de lipides",
            "D’un complexe enzyme-substrat",
            "D’un sucre réducteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’affirmation jugée vraie dans l’exercice d’application 2 de la leçon."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q6",
          "type": "mcq",
          "prompt": "L’affirmation « les enzymes fournissent l’énergie nécessaire aux réactions » est :",
          "options": [
            "Fausse, selon le corrigé de l’exercice",
            "Vraie, selon le corrigé de l’exercice",
            "Vraie uniquement pour l’amylase",
            "Impossible à trancher"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé de l’exercice d’application 2 répond faux à cette affirmation."
        }
      ]
    }
  ]
};
