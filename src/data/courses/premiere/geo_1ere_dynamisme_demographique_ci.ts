import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Dynamisme démographique et qualité de la vie en Côte d'Ivoire » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2001
export const GEO_1ERE_T1_L01_DYNAMISME_DEMOGRAPHIQUE_CI: CurriculumChapter = {
  "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci",
  "subjectId": "histoire_geo",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 1,
  "title": "Thème 1, leçon 1 : Dynamisme démographique et qualité de la vie en Côte d'Ivoire",
  "summary": "La Côte d'Ivoire connaît une croissance démographique rapide, une population jeune, inégalement répartie et très mobile : la leçon explique ce dynamisme, son incidence sur le bien-être des populations et les tentatives de solutions pour améliorer la qualité de la vie.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2001",
  "points": [
    {
      "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01",
      "order": 1,
      "title": "L'évolution de la population ivoirienne : deux phases",
      "summary": "Décrire l'évolution de la population ivoirienne, lente de 1920 à 1960 puis rapide de 1960 à 2014.",
      "conceptExplanation": "La Côte d'Ivoire est située en Afrique occidentale humide, sur une superficie de 322 462 km². Depuis 1960, sa population n'a cessé de croître : elle est passée de 2 millions d'habitants en 1920 à plus de 23 millions aujourd'hui.\nD'une façon générale, l'allure de la courbe de la population ivoirienne est ascendante, ce qui veut dire que la population croît. On observe deux phases dans cette croissance démographique : de 1920 à 1960, une croissance lente, la population évolue lentement ; de 1960 à 2014, une croissance rapide, la population croît rapidement.\nLe tableau de la documentation (INS, RGPH 2014) donne : 2 000 000 d'habitants en 1920, 2 200 000 en 1940, 3 780 000 en 1960, 5 240 000 en 1970, 8 060 000 en 1980, 13 000 000 en 1990, 15 366 000 en 2000 et 23 000 000 en 2014.",
      "keyRule": "Deux phases : croissance lente de 1920 à 1960, puis croissance rapide de 1960 à 2014.",
      "formulas": [],
      "workedExample": {
        "title": "Lire la courbe d'évolution de la population ivoirienne",
        "statement": "À partir du tableau INS (RGPH 2014) reproduit dans la documentation de la leçon, décris l'évolution de la population ivoirienne de 1920 à 2014 et dégage ses deux phases.",
        "methodSteps": [
          "Je relève les repères : 2 millions d'habitants en 1920, 3 780 000 en 1960, 23 millions en 2014.",
          "Je constate que l'allure générale de la courbe est ascendante : la population croît.",
          "Je distingue la première phase, de 1920 à 1960 : la croissance est lente, la population évolue lentement.",
          "Je distingue la seconde phase, de 1960 à 2014 : la croissance est rapide, la population croît rapidement."
        ],
        "conclusion": "La population ivoirienne croît en deux temps : lentement jusqu'en 1960, puis rapidement de 1960 à 2014."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une courbe ascendante",
          "stepTheme": "Une courbe ascendante",
          "stepBadge": "Une courbe ascendante",
          "paragraphText": "• Allure ascendante : la courbe de la population ivoirienne monte, ce qui veut dire que la population croît.\nLa population passe de 2 millions d'habitants en 1920 à plus de 23 millions aujourd'hui.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q1",
            "type": "mcq",
            "prompt": "Que signifie l'allure ascendante de la courbe de la population ivoirienne ?",
            "options": [
              "La population croît",
              "La population reste stable",
              "La population diminue",
              "La population vieillit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une courbe ascendante traduit une population qui croît : de 2 millions en 1920 à plus de 23 millions aujourd'hui."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La phase lente : 1920-1960",
          "stepTheme": "La phase lente : 1920-1960",
          "stepBadge": "La phase lente : 1920-1960",
          "paragraphText": "De 1920 à 1960, la croissance est lente : la population évolue lentement.\nElle passe de 2 millions d'habitants en 1920 à 3 780 000 en 1960, selon le tableau INS du RGPH 2014.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q2",
            "type": "mcq",
            "prompt": "Comment est la croissance de la population ivoirienne de 1920 à 1960 ?",
            "options": [
              "Rapide",
              "Lente",
              "Négative",
              "Nulle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon distingue une première phase de croissance lente, de 1920 à 1960."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La phase rapide : 1960-2014",
          "stepTheme": "La phase rapide : 1960-2014",
          "stepBadge": "La phase rapide : 1960-2014",
          "paragraphText": "De 1960 à 2014, la croissance est rapide : la population croît rapidement.\nElle passe de 3 780 000 habitants en 1960 à 23 millions en 2014.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q3",
            "type": "mcq",
            "prompt": "De 1960 à 2014, la population ivoirienne connaît :",
            "options": [
              "Une décroissance",
              "Une croissance lente",
              "Une croissance rapide",
              "Une stagnation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la seconde phase dégagée par la leçon : de 1960 à 2014, la population croît rapidement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Repérer les phases sur la courbe",
          "stepTheme": "Repérer les phases sur la courbe",
          "stepBadge": "Repérer les phases sur la courbe",
          "paragraphText": "Méthode : pour décrire une courbe d'évolution, on observe d'abord son allure générale, puis on découpe la période en phases selon le rythme de la croissance.\nIci : allure ascendante, puis deux phases, lente puis rapide.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q4",
            "type": "mcq",
            "prompt": "Pour décrire la courbe d'évolution d'une population, on commence par :",
            "options": [
              "Calculer la densité",
              "Classer les régions par densité",
              "Construire la pyramide des âges",
              "Observer l'allure générale de la courbe, puis repérer les phases"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'allure générale (ascendante) se lit d'abord ; le découpage en phases vient ensuite."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une croissance toujours rapide",
          "stepTheme": "Une croissance toujours rapide",
          "stepBadge": "Une croissance toujours rapide",
          "paragraphText": "Piège : affirmer que la population ivoirienne a toujours connu une croissance rapide.\nC'est faux : la croissance est lente de 1920 à 1960, et ne devient rapide qu'après 1960.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation est fausse ?",
            "options": [
              "La population compte plus de 23 millions d'habitants aujourd'hui",
              "La population ivoirienne a toujours connu une croissance rapide",
              "La croissance est lente de 1920 à 1960",
              "La courbe de la population est ascendante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La croissance rapide ne commence qu'en 1960 ; avant, de 1920 à 1960, elle est lente."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les repères du RGPH 2014",
          "stepTheme": "Les repères du RGPH 2014",
          "stepBadge": "Les repères du RGPH 2014",
          "paragraphText": "Exemple de repères chiffrés donnés dans la documentation de la leçon (INS, RGPH 2014) : 5 240 000 habitants en 1970, 8 060 000 en 1980, 13 000 000 en 1990.\nL'accélération entre 1970 et 1990 illustre la phase de croissance rapide.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q6",
            "type": "mcq",
            "prompt": "Selon le tableau INS (RGPH 2014), la population ivoirienne en 1990 est de :",
            "options": [
              "8 060 000 habitants",
              "5 240 000 habitants",
              "13 000 000 habitants",
              "23 000 000 habitants"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau donne 13 000 000 d'habitants en 1990, entre 8 060 000 en 1980 et 15 366 000 en 2000."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q1",
          "type": "mcq",
          "prompt": "Que signifie l'allure ascendante de la courbe de la population ivoirienne ?",
          "options": [
            "La population croît",
            "La population reste stable",
            "La population diminue",
            "La population vieillit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une courbe ascendante traduit une population qui croît : de 2 millions en 1920 à plus de 23 millions aujourd'hui."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q2",
          "type": "mcq",
          "prompt": "Comment est la croissance de la population ivoirienne de 1920 à 1960 ?",
          "options": [
            "Rapide",
            "Lente",
            "Négative",
            "Nulle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon distingue une première phase de croissance lente, de 1920 à 1960."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q3",
          "type": "mcq",
          "prompt": "De 1960 à 2014, la population ivoirienne connaît :",
          "options": [
            "Une décroissance",
            "Une croissance lente",
            "Une croissance rapide",
            "Une stagnation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la seconde phase dégagée par la leçon : de 1960 à 2014, la population croît rapidement."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q4",
          "type": "mcq",
          "prompt": "Pour décrire la courbe d'évolution d'une population, on commence par :",
          "options": [
            "Calculer la densité",
            "Classer les régions par densité",
            "Construire la pyramide des âges",
            "Observer l'allure générale de la courbe, puis repérer les phases"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'allure générale (ascendante) se lit d'abord ; le découpage en phases vient ensuite."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation est fausse ?",
          "options": [
            "La population compte plus de 23 millions d'habitants aujourd'hui",
            "La population ivoirienne a toujours connu une croissance rapide",
            "La croissance est lente de 1920 à 1960",
            "La courbe de la population est ascendante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La croissance rapide ne commence qu'en 1960 ; avant, de 1920 à 1960, elle est lente."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q6",
          "type": "mcq",
          "prompt": "Selon le tableau INS (RGPH 2014), la population ivoirienne en 1990 est de :",
          "options": [
            "8 060 000 habitants",
            "5 240 000 habitants",
            "13 000 000 habitants",
            "23 000 000 habitants"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau donne 13 000 000 d'habitants en 1990, entre 8 060 000 en 1980 et 15 366 000 en 2000."
        }
      ]
    },
    {
      "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02",
      "order": 2,
      "title": "Les facteurs de la croissance : accroissement naturel et migrations",
      "summary": "Expliquer la croissance par l'accroissement naturel élevé et par une forte immigration.",
      "conceptExplanation": "Les naissances sont un facteur très important de la croissance de la population. Pour connaître le nombre de naissances d'une population donnée, on calcule le taux de natalité : le nombre de naissances divisé par la population totale, multiplié par 100. La différence entre le taux de natalité et le taux de mortalité donne le taux d'accroissement naturel.\nLe taux d'accroissement naturel en Côte d'Ivoire est estimé à 2,6 %, soit 26 pour mille. C'est un taux élevé, qui témoigne d'une natalité élevée et d'un taux de mortalité en baisse. Les facteurs de cette croissance sont : le progrès de la médecine, qui aide à éradiquer les épidémies et les pandémies grâce aux mesures préventives et curatives ; l'amélioration des conditions d'hygiène et de vie des populations ; le progrès agricole, qui permet de satisfaire les besoins alimentaires et de lutter contre la famine ; les grossesses précoces et les mariages précoces ; les pratiques natalistes des populations.\nLes migrations jouent aussi : la Côte d'Ivoire, terre d'accueil par sa longue tradition fraternelle et hospitalière, attire de nombreux migrants en quête de meilleures conditions d'existence et surtout d'emplois. La population étrangère s'élève à 5 491 972 habitants en 2014, soit 24,2 % de la population totale. Cette forte immigration est favorisée par la stabilité politique et économique du pays, la politique d'ouverture des frontières avec l'extérieur (politique d'Houphouët-Boigny) et le niveau de développement du pays, dans l'agriculture, l'industrie et le commerce, qui attirent une forte main-d'œuvre.",
      "keyRule": "Accroissement naturel élevé (2,6 %) plus forte immigration : voilà les deux moteurs de la croissance ivoirienne.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer les facteurs de la croissance démographique",
        "statement": "La situation d'évaluation n°1 de la leçon demande : explique les facteurs de la croissance démographique en Côte d'Ivoire.",
        "methodSteps": [
          "Je pars de l'accroissement naturel : le taux d'accroissement naturel est la différence entre le taux de natalité et le taux de mortalité ; il est estimé à 2,6 % en Côte d'Ivoire.",
          "J'explique la baisse de la mortalité : progrès de la médecine, amélioration des conditions d'hygiène et de vie, progrès agricole contre la famine.",
          "J'explique la natalité élevée : grossesses précoces, mariages précoces et pratiques natalistes des populations.",
          "J'ajoute les migrations : 5 491 972 étrangers en 2014, soit 24,2 % de la population totale, attirés par la stabilité, l'ouverture des frontières et les emplois."
        ],
        "conclusion": "La croissance tient à un accroissement naturel élevé et à une immigration importante, favorisée par la stabilité et le développement du pays."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le taux d'accroissement naturel",
          "stepTheme": "Le taux d'accroissement naturel",
          "stepBadge": "Le taux d'accroissement naturel",
          "paragraphText": "• Taux d'accroissement naturel : différence entre le taux de natalité et le taux de mortalité.\nEn Côte d'Ivoire, il est estimé à 2,6 %, soit 26 pour mille : c'est un taux élevé.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q1",
            "type": "mcq",
            "prompt": "Le taux d'accroissement naturel s'obtient par :",
            "options": [
              "La différence entre le taux de natalité et le taux de mortalité",
              "Le taux de natalité multiplié par le taux de mortalité",
              "Le nombre de naissances divisé par la superficie",
              "La somme des migrations"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon le définit comme la différence entre le taux de natalité et le taux de mortalité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un taux élevé : 2,6 %",
          "stepTheme": "Un taux élevé : 2,6 %",
          "stepBadge": "Un taux élevé : 2,6 %",
          "paragraphText": "Le taux d'accroissement naturel de 2,6 % témoigne d'une natalité élevée et d'un taux de mortalité en baisse.\nCe sont les deux traits de l'accroissement naturel ivoirien.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q2",
            "type": "mcq",
            "prompt": "Le taux d'accroissement naturel de 2,6 % en Côte d'Ivoire témoigne :",
            "options": [
              "D'une natalité faible et d'une mortalité élevée",
              "D'une natalité élevée et d'un taux de mortalité en baisse",
              "D'une immigration nulle",
              "D'une population vieillissante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un accroissement naturel élevé combine natalité élevée et mortalité en baisse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi la mortalité baisse",
          "stepTheme": "Pourquoi la mortalité baisse",
          "stepBadge": "Pourquoi la mortalité baisse",
          "paragraphText": "La baisse de la mortalité tient au progrès de la médecine, qui aide à éradiquer les épidémies et les pandémies grâce aux mesures préventives et curatives.\nElle tient aussi à l'amélioration des conditions d'hygiène et de vie et au progrès agricole, qui permet de satisfaire les besoins alimentaires et de lutter contre la famine.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q3",
            "type": "mcq",
            "prompt": "Lequel de ces facteurs fait baisser la mortalité ?",
            "options": [
              "Les mariages précoces",
              "Les pratiques natalistes",
              "Le progrès de la médecine, avec des mesures préventives et curatives",
              "Les grossesses précoces"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le progrès de la médecine éradique épidémies et pandémies ; mariages et grossesses précoces agissent, eux, sur la natalité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les pratiques natalistes",
          "stepTheme": "Les pratiques natalistes",
          "stepBadge": "Les pratiques natalistes",
          "paragraphText": "• Pratiques natalistes : pratiques des populations qui encouragent les naissances.\nAvec les grossesses précoces et les mariages précoces, elles entretiennent une natalité élevée.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q4",
            "type": "mcq",
            "prompt": "Les pratiques natalistes des populations sont :",
            "options": [
              "Des politiques de limitation des naissances",
              "Des méthodes contraceptives",
              "Des mesures de planning familial",
              "Des pratiques qui encouragent les naissances"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Nataliste signifie favorable aux naissances : ces pratiques entretiennent la natalité élevée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le taux de 5,6 % de l'activité",
          "stepTheme": "Le taux de 5,6 % de l'activité",
          "stepBadge": "Le taux de 5,6 % de l'activité",
          "paragraphText": "Piège : l'activité d'application n°1 propose l'affirmation « le taux d'accroissement naturel en Côte d'Ivoire est estimé à 5,6 % ».\nCette affirmation est fausse : le taux donné par la leçon est de 2,6 %.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q5",
            "type": "mcq",
            "prompt": "Le taux d'accroissement naturel en Côte d'Ivoire est estimé à :",
            "options": [
              "5,6 %",
              "2,6 %",
              "0,6 %",
              "12,6 %"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon donne 2,6 %, soit 26 pour mille ; le chiffre de 5,6 % de l'activité est un distracteur faux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "5 491 972 étrangers en 2014",
          "stepTheme": "5 491 972 étrangers en 2014",
          "stepBadge": "5 491 972 étrangers en 2014",
          "paragraphText": "Exemple chiffré de la leçon : la population étrangère s'élève à 5 491 972 habitants en 2014, soit 24,2 % de la population totale.\nCes migrants viennent en quête de meilleures conditions d'existence et surtout d'emplois.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q6",
            "type": "mcq",
            "prompt": "En 2014, la population étrangère en Côte d'Ivoire représente :",
            "options": [
              "2,6 % de la population totale",
              "61,3 % de la population totale",
              "24,2 % de la population totale",
              "5,6 % de la population totale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "5 491 972 habitants, soit 24,2 % de la population totale : l'immigration participe considérablement à la croissance."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q1",
          "type": "mcq",
          "prompt": "Le taux d'accroissement naturel s'obtient par :",
          "options": [
            "La différence entre le taux de natalité et le taux de mortalité",
            "Le taux de natalité multiplié par le taux de mortalité",
            "Le nombre de naissances divisé par la superficie",
            "La somme des migrations"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon le définit comme la différence entre le taux de natalité et le taux de mortalité."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q2",
          "type": "mcq",
          "prompt": "Le taux d'accroissement naturel de 2,6 % en Côte d'Ivoire témoigne :",
          "options": [
            "D'une natalité faible et d'une mortalité élevée",
            "D'une natalité élevée et d'un taux de mortalité en baisse",
            "D'une immigration nulle",
            "D'une population vieillissante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un accroissement naturel élevé combine natalité élevée et mortalité en baisse."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q3",
          "type": "mcq",
          "prompt": "Lequel de ces facteurs fait baisser la mortalité ?",
          "options": [
            "Les mariages précoces",
            "Les pratiques natalistes",
            "Le progrès de la médecine, avec des mesures préventives et curatives",
            "Les grossesses précoces"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le progrès de la médecine éradique épidémies et pandémies ; mariages et grossesses précoces agissent, eux, sur la natalité."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q4",
          "type": "mcq",
          "prompt": "Les pratiques natalistes des populations sont :",
          "options": [
            "Des politiques de limitation des naissances",
            "Des méthodes contraceptives",
            "Des mesures de planning familial",
            "Des pratiques qui encouragent les naissances"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Nataliste signifie favorable aux naissances : ces pratiques entretiennent la natalité élevée."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q5",
          "type": "mcq",
          "prompt": "Le taux d'accroissement naturel en Côte d'Ivoire est estimé à :",
          "options": [
            "5,6 %",
            "2,6 %",
            "0,6 %",
            "12,6 %"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon donne 2,6 %, soit 26 pour mille ; le chiffre de 5,6 % de l'activité est un distracteur faux."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p02_q6",
          "type": "mcq",
          "prompt": "En 2014, la population étrangère en Côte d'Ivoire représente :",
          "options": [
            "2,6 % de la population totale",
            "61,3 % de la population totale",
            "24,2 % de la population totale",
            "5,6 % de la population totale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "5 491 972 habitants, soit 24,2 % de la population totale : l'immigration participe considérablement à la croissance."
        }
      ]
    },
    {
      "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03",
      "order": 3,
      "title": "Une population jeune : la pyramide des âges",
      "summary": "Lire la pyramide des âges ivoirienne : base large, flancs concaves, sommet effilé.",
      "conceptExplanation": "La structure d'une population est la composition de cette population selon l'âge et le sexe, les secteurs d'activités, la religion, la profession, etc. Pour étudier la structure d'une population, il faut construire la pyramide des âges de cette population.\nLa pyramide des âges de la population ivoirienne a une forme triangulaire, caractérisée par une base large, des flancs concaves et un sommet effilé. La base large exprime une extrême jeunesse de la population : en Côte d'Ivoire, les jeunes de 0 à 25 ans constituent la population la plus nombreuse, soit 61,3 %. Cette jeunesse s'explique par la forte natalité et les nombreuses migrations.\nLes flancs concaves ou rétrécis sont l'expression d'une population adulte (30 à 64 ans) moins nombreuse. Le sommet effilé symbolise la faible proportion de personnes âgées (vieillards ou troisième âge), moins représentées à cause de la faible espérance de vie en Côte d'Ivoire : 51 ans pour les femmes et 48 ans pour les hommes (PNUD 2013).\nPar ailleurs, la population masculine est supérieure à la population féminine, soit 11 277 469 hommes contre 10 879 638 femmes.",
      "keyRule": "Pyramide triangulaire : base large égale jeunesse nombreuse, flancs concaves égale adultes moins nombreux, sommet effilé égale vieillards rares.",
      "formulas": [],
      "workedExample": {
        "title": "Décrire la pyramide des âges de la Côte d'Ivoire",
        "statement": "La documentation de la leçon fournit la répartition de la population ivoirienne par sexe et par tranche d'âge. Décris la forme de la pyramide des âges et interprète chacune de ses parties.",
        "methodSteps": [
          "Je nomme la forme générale : une forme triangulaire.",
          "J'interprète la base large : extrême jeunesse, les 0 à 25 ans forment 61,3 % de la population, du fait de la forte natalité et des migrations.",
          "J'interprète les flancs concaves : les adultes de 30 à 64 ans sont moins nombreux.",
          "J'interprète le sommet effilé : les personnes âgées sont peu représentées, car l'espérance de vie est faible, 51 ans pour les femmes et 48 ans pour les hommes."
        ],
        "conclusion": "Chaque partie de la pyramide se lit comme un fait démographique : jeunesse à la base, adultes réduits sur les flancs, vieillards rares au sommet."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La structure d'une population",
          "stepTheme": "La structure d'une population",
          "stepBadge": "La structure d'une population",
          "paragraphText": "• Structure d'une population : composition de cette population selon l'âge et le sexe, les secteurs d'activités, la religion, la profession, etc.\nPour l'étudier, il faut construire la pyramide des âges.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q1",
            "type": "mcq",
            "prompt": "Pour étudier la structure d'une population, il faut construire :",
            "options": [
              "La pyramide des âges",
              "La courbe d'évolution",
              "La carte des densités",
              "Le tableau des migrations"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La pyramide des âges est l'outil d'étude de la structure par âge et par sexe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une forme triangulaire",
          "stepTheme": "Une forme triangulaire",
          "stepBadge": "Une forme triangulaire",
          "paragraphText": "La pyramide des âges ivoirienne a une forme triangulaire.\nElle se caractérise par une base large, des flancs concaves et un sommet effilé.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q2",
            "type": "mcq",
            "prompt": "La pyramide des âges de la Côte d'Ivoire a une forme :",
            "options": [
              "En urne",
              "Triangulaire, avec base large, flancs concaves et sommet effilé",
              "En ogive",
              "Rectangulaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la forme décrite par la leçon : triangulaire, base large, flancs concaves, sommet effilé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "61,3 % de jeunes",
          "stepTheme": "61,3 % de jeunes",
          "stepBadge": "61,3 % de jeunes",
          "paragraphText": "Exemple chiffré : les jeunes de 0 à 25 ans constituent la population la plus nombreuse, soit 61,3 %.\nCette jeunesse s'explique par la forte natalité et les nombreuses migrations.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q3",
            "type": "mcq",
            "prompt": "Les jeunes de 0 à 25 ans représentent en Côte d'Ivoire :",
            "options": [
              "24,2 % de la population",
              "31,5 % de la population",
              "61,3 % de la population",
              "83,7 % de la population"
            ],
            "correctAnswerIndex": 2,
            "explanation": "61,3 % : c'est la part des 0 à 25 ans, lue à la base large de la pyramide."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Flancs concaves et sommet effilé",
          "stepTheme": "Flancs concaves et sommet effilé",
          "stepBadge": "Flancs concaves et sommet effilé",
          "paragraphText": "Les flancs concaves ou rétrécis expriment une population adulte (30 à 64 ans) moins nombreuse.\nLe sommet effilé symbolise la faible proportion de personnes âgées.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q4",
            "type": "mcq",
            "prompt": "Que symbolise le sommet effilé de la pyramide ?",
            "options": [
              "Une forte proportion de vieillards",
              "Une immigration importante",
              "Une natalité élevée",
              "Une faible proportion de personnes âgées"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sommet effilé égale vieillards peu nombreux, à cause de la faible espérance de vie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Inverser hommes et femmes",
          "stepTheme": "Inverser hommes et femmes",
          "stepBadge": "Inverser hommes et femmes",
          "paragraphText": "Piège : la population masculine est supérieure à la population féminine en Côte d'Ivoire.\nLes chiffres de la leçon : 11 277 469 hommes contre 10 879 638 femmes.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q5",
            "type": "mcq",
            "prompt": "En Côte d'Ivoire, selon la leçon :",
            "options": [
              "Les femmes sont plus nombreuses que les hommes",
              "La population masculine est supérieure à la population féminine",
              "Hommes et femmes sont exactement aussi nombreux",
              "On ne connaît pas la répartition par sexe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "11 277 469 hommes contre 10 879 638 femmes : les hommes sont plus nombreux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'espérance de vie selon le PNUD 2013",
          "stepTheme": "L'espérance de vie selon le PNUD 2013",
          "stepBadge": "L'espérance de vie selon le PNUD 2013",
          "paragraphText": "Exemple de donnée citée par la leçon : l'espérance de vie est de 51 ans pour les femmes et de 48 ans pour les hommes (PNUD 2013).\nCette faiblesse explique la faible proportion de personnes âgées.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q6",
            "type": "mcq",
            "prompt": "Selon le PNUD 2013 cité par la leçon, l'espérance de vie des femmes en Côte d'Ivoire est de :",
            "options": [
              "48 ans",
              "80 ans",
              "51 ans",
              "61 ans"
            ],
            "correctAnswerIndex": 2,
            "explanation": "51 ans pour les femmes et 48 ans pour les hommes : des espérances de vie faibles."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q1",
          "type": "mcq",
          "prompt": "Pour étudier la structure d'une population, il faut construire :",
          "options": [
            "La pyramide des âges",
            "La courbe d'évolution",
            "La carte des densités",
            "Le tableau des migrations"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La pyramide des âges est l'outil d'étude de la structure par âge et par sexe."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q2",
          "type": "mcq",
          "prompt": "La pyramide des âges de la Côte d'Ivoire a une forme :",
          "options": [
            "En urne",
            "Triangulaire, avec base large, flancs concaves et sommet effilé",
            "En ogive",
            "Rectangulaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la forme décrite par la leçon : triangulaire, base large, flancs concaves, sommet effilé."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q3",
          "type": "mcq",
          "prompt": "Les jeunes de 0 à 25 ans représentent en Côte d'Ivoire :",
          "options": [
            "24,2 % de la population",
            "31,5 % de la population",
            "61,3 % de la population",
            "83,7 % de la population"
          ],
          "correctAnswerIndex": 2,
          "explanation": "61,3 % : c'est la part des 0 à 25 ans, lue à la base large de la pyramide."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q4",
          "type": "mcq",
          "prompt": "Que symbolise le sommet effilé de la pyramide ?",
          "options": [
            "Une forte proportion de vieillards",
            "Une immigration importante",
            "Une natalité élevée",
            "Une faible proportion de personnes âgées"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sommet effilé égale vieillards peu nombreux, à cause de la faible espérance de vie."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q5",
          "type": "mcq",
          "prompt": "En Côte d'Ivoire, selon la leçon :",
          "options": [
            "Les femmes sont plus nombreuses que les hommes",
            "La population masculine est supérieure à la population féminine",
            "Hommes et femmes sont exactement aussi nombreux",
            "On ne connaît pas la répartition par sexe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "11 277 469 hommes contre 10 879 638 femmes : les hommes sont plus nombreux."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q6",
          "type": "mcq",
          "prompt": "Selon le PNUD 2013 cité par la leçon, l'espérance de vie des femmes en Côte d'Ivoire est de :",
          "options": [
            "48 ans",
            "80 ans",
            "51 ans",
            "61 ans"
          ],
          "correctAnswerIndex": 2,
          "explanation": "51 ans pour les femmes et 48 ans pour les hommes : des espérances de vie faibles."
        }
      ]
    },
    {
      "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04",
      "order": 4,
      "title": "Une population inégalement répartie et très mobile",
      "summary": "Décrire les trois zones de peuplement, leurs facteurs, et la forte mobilité des populations.",
      "conceptExplanation": "La densité de la population est le nombre d'habitants au km². En Côte d'Ivoire, la densité de la population est de 71,32 habitants au km² ; elle se calcule en divisant la population par la superficie. Cependant, cette population est inégalement répartie sur le territoire national.\nOn distingue trois grandes zones de peuplement : les zones de fortes densités, comme les zones forestières, les régions du sud et les grandes villes, avec une densité supérieure ou égale à 80 habitants au km² ; les régions de moyennes densités, entre 50 et 70 habitants au km², dans les régions d'activités intenses et les villes moyennes à l'Ouest, à l'Est et au Centre ; les zones de faibles densités, avec moins de 50 habitants au km², situées au Centre et au Nord.\nCette inégale répartition est liée à plusieurs facteurs : des facteurs naturels (la formation forestière du sud attire les populations à la recherche de terres fertiles pour la création des plantations) ; des raisons historiques (les conquêtes de Samory Touré provoquent les fuites des populations du nord vers les zones de refuge, forestières et montagneuses) ; l'inégale répartition des infrastructures socio-économiques (présence de ports, de grandes écoles, d'universités) ; des raisons économiques liées à la quête d'emploi (les industries, les activités liées au transport, le commerce).\nLa population ivoirienne se distingue également par sa forte mobilité : forte migration interne des populations des zones nord et centre vers le sud, exode rural massif, et immigration importante des populations de la sous-région, en quête d'un mieux-être.",
      "keyRule": "Densité moyenne de 71,32 habitants au km², mais trois zones contrastées : le sud forestier dense, le Centre et le Nord peu denses.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les zones de peuplement ivoiriennes",
        "statement": "Classe les régions suivantes dans les trois zones de peuplement définies par la leçon : les zones forestières du sud et les grandes villes ; les villes moyennes de l'Ouest, de l'Est et du Centre ; les régions du Centre et du Nord peu peuplées.",
        "methodSteps": [
          "Je rappelle les seuils : fortes densités à partir de 80 habitants au km², moyennes densités entre 50 et 70, faibles densités en dessous de 50.",
          "Je range les zones forestières du sud et les grandes villes dans les fortes densités.",
          "Je range les villes moyennes de l'Ouest, de l'Est et du Centre dans les moyennes densités.",
          "Je range les régions du Centre et du Nord peu peuplées dans les faibles densités."
        ],
        "conclusion": "Le classement par seuils de densité fait apparaître le contraste entre le sud forestier dense et le Centre-Nord peu dense."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La densité de population",
          "stepTheme": "La densité de population",
          "stepBadge": "La densité de population",
          "paragraphText": "• Densité de la population : nombre d'habitants au km².\nElle se calcule en divisant la population par la superficie ; en Côte d'Ivoire, elle est de 71,32 habitants au km².",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q1",
            "type": "mcq",
            "prompt": "La densité de la population est :",
            "options": [
              "Le nombre d'habitants au km²",
              "Le nombre de naissances pour mille habitants",
              "La part des jeunes dans la population",
              "Le nombre de migrants par an"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Densité égale population divisée par superficie, exprimée en habitants au km²."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les trois zones de peuplement",
          "stepTheme": "Les trois zones de peuplement",
          "stepBadge": "Les trois zones de peuplement",
          "paragraphText": "• Fortes densités : 80 habitants au km² ou plus, zones forestières, sud et grandes villes.\n• Moyennes densités : entre 50 et 70 habitants au km², Ouest, Est et Centre.\n• Faibles densités : moins de 50 habitants au km², Centre et Nord.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q2",
            "type": "mcq",
            "prompt": "Les zones de fortes densités en Côte d'Ivoire ont une densité :",
            "options": [
              "Inférieure à 50 habitants au km²",
              "Supérieure ou égale à 80 habitants au km²",
              "Entre 50 et 70 habitants au km²",
              "Égale à la moyenne nationale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le seuil des fortes densités est de 80 habitants au km² ou plus."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le facteur naturel : la forêt du sud",
          "stepTheme": "Le facteur naturel : la forêt du sud",
          "stepBadge": "Le facteur naturel : la forêt du sud",
          "paragraphText": "Exemple de facteur donné par la leçon : la formation forestière du sud attire depuis longtemps les populations à la recherche de terres fertiles pour la création des plantations.\nC'est un facteur naturel de la concentration des populations au sud.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q3",
            "type": "mcq",
            "prompt": "La concentration des populations dans le sud forestier s'explique d'abord par :",
            "options": [
              "Les conquêtes de Samory Touré",
              "La présence des universités",
              "La recherche de terres fertiles pour les plantations",
              "La quête d'emploi dans le commerce"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Facteur naturel : les terres fertiles de la forêt du sud attirent les planteurs."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le facteur historique : Samory Touré",
          "stepTheme": "Le facteur historique : Samory Touré",
          "stepBadge": "Le facteur historique : Samory Touré",
          "paragraphText": "Raison historique citée par la leçon : les conquêtes de Samory Touré provoquent les fuites des populations du nord vers les zones de refuge, zones forestières et montagneuses.\nCe facteur a durablement vidé certaines régions du nord.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q4",
            "type": "mcq",
            "prompt": "Les conquêtes de Samory Touré ont provoqué :",
            "options": [
              "L'arrivée des Européens sur la côte",
              "La création des plantations au sud",
              "La construction des ports",
              "Les fuites des populations du nord vers les zones de refuge"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le facteur historique de l'inégale répartition donné par la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Croire la population également répartie",
          "stepTheme": "Croire la population également répartie",
          "stepBadge": "Croire la population également répartie",
          "paragraphText": "Piège : la population ivoirienne n'est pas également répartie sur le territoire national.\nLa densité moyenne de 71,32 habitants au km² masque de forts contrastes entre le sud dense et le Centre-Nord peu dense.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation est juste ?",
            "options": [
              "La population ivoirienne est également répartie sur le territoire",
              "La population ivoirienne est inégalement répartie sur le territoire national",
              "Le district d'Abidjan fait partie des régions faiblement peuplées",
              "La densité est partout de 71,32 habitants au km²"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La moyenne nationale masque trois zones très contrastées : c'est une répartition inégale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une population très mobile",
          "stepTheme": "Une population très mobile",
          "stepBadge": "Une population très mobile",
          "paragraphText": "Exemple de mobilité décrit par la leçon : forte migration interne des populations des zones nord et centre vers le sud, exode rural massif.\nS'y ajoute une immigration importante des populations de la sous-région, en quête d'un mieux-être.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q6",
            "type": "mcq",
            "prompt": "La forte mobilité de la population ivoirienne se traduit par :",
            "options": [
              "Des départs massifs vers l'Europe uniquement",
              "Une population qui ne se déplace jamais",
              "Des migrations internes du nord et du centre vers le sud et un exode rural massif",
              "Une immigration nulle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Migrations internes vers le sud, exode rural massif et immigration sous-régionale : la population est très mobile."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q1",
          "type": "mcq",
          "prompt": "La densité de la population est :",
          "options": [
            "Le nombre d'habitants au km²",
            "Le nombre de naissances pour mille habitants",
            "La part des jeunes dans la population",
            "Le nombre de migrants par an"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Densité égale population divisée par superficie, exprimée en habitants au km²."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q2",
          "type": "mcq",
          "prompt": "Les zones de fortes densités en Côte d'Ivoire ont une densité :",
          "options": [
            "Inférieure à 50 habitants au km²",
            "Supérieure ou égale à 80 habitants au km²",
            "Entre 50 et 70 habitants au km²",
            "Égale à la moyenne nationale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le seuil des fortes densités est de 80 habitants au km² ou plus."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q3",
          "type": "mcq",
          "prompt": "La concentration des populations dans le sud forestier s'explique d'abord par :",
          "options": [
            "Les conquêtes de Samory Touré",
            "La présence des universités",
            "La recherche de terres fertiles pour les plantations",
            "La quête d'emploi dans le commerce"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Facteur naturel : les terres fertiles de la forêt du sud attirent les planteurs."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q4",
          "type": "mcq",
          "prompt": "Les conquêtes de Samory Touré ont provoqué :",
          "options": [
            "L'arrivée des Européens sur la côte",
            "La création des plantations au sud",
            "La construction des ports",
            "Les fuites des populations du nord vers les zones de refuge"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le facteur historique de l'inégale répartition donné par la leçon."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation est juste ?",
          "options": [
            "La population ivoirienne est également répartie sur le territoire",
            "La population ivoirienne est inégalement répartie sur le territoire national",
            "Le district d'Abidjan fait partie des régions faiblement peuplées",
            "La densité est partout de 71,32 habitants au km²"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La moyenne nationale masque trois zones très contrastées : c'est une répartition inégale."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p04_q6",
          "type": "mcq",
          "prompt": "La forte mobilité de la population ivoirienne se traduit par :",
          "options": [
            "Des départs massifs vers l'Europe uniquement",
            "Une population qui ne se déplace jamais",
            "Des migrations internes du nord et du centre vers le sud et un exode rural massif",
            "Une immigration nulle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Migrations internes vers le sud, exode rural massif et immigration sous-régionale : la population est très mobile."
        }
      ]
    },
    {
      "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05",
      "order": 5,
      "title": "La notion de qualité de la vie",
      "summary": "Définir la qualité de la vie : conditions élémentaires, infrastructures et environnement.",
      "conceptExplanation": "La qualité de la vie est l'ensemble des conditions élémentaires nécessaires pour mener une vie convenable.\nElle suppose l'équipement des zones de résidence en infrastructures socio-économiques adéquates pour l'épanouissement des hommes. Exemples donnés par la leçon : les marchés, les banques, les écoles, les centres de santé, les centres de loisir, etc.\nElle prend également en compte le volet environnemental, c'est-à-dire les espaces verts, les canalisations, la gestion des ordures ménagères, l'assainissement.",
      "keyRule": "Qualité de la vie égale conditions élémentaires d'une vie convenable : infrastructures socio-économiques et environnement sain.",
      "formulas": [],
      "workedExample": {
        "title": "Appliquer la notion de qualité de la vie",
        "statement": "L'activité d'application n°3 de la leçon fait compléter un texte à trous sur la qualité de la vie. Reconstitue l'idée centrale de ce texte.",
        "methodSteps": [
          "Je rappelle la définition : la qualité de la vie est l'ensemble des conditions élémentaires nécessaires pour mener une vie convenable.",
          "Je cite les équipements attendus : marchés, banques, écoles, centres de santé, centres de loisir.",
          "J'ajoute le volet environnemental : espaces verts, canalisations, gestion des ordures ménagères, assainissement.",
          "Je conclus que l'État doit assurer une bonne qualité de la vie, améliorer les infrastructures sanitaires et créer des emplois."
        ],
        "conclusion": "La qualité de la vie se juge aux infrastructures présentes dans la zone de résidence et à la qualité de l'environnement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La qualité de la vie",
          "stepTheme": "La qualité de la vie",
          "stepBadge": "La qualité de la vie",
          "paragraphText": "• Qualité de la vie : ensemble des conditions élémentaires nécessaires pour mener une vie convenable.\nElle suppose l'équipement des zones de résidence en infrastructures socio-économiques adéquates pour l'épanouissement des hommes.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q1",
            "type": "mcq",
            "prompt": "La qualité de la vie est :",
            "options": [
              "L'ensemble des conditions élémentaires nécessaires pour mener une vie convenable",
              "La richesse d'un pays",
              "Le taux de croissance de la population",
              "Le nombre de villes d'un pays"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition exacte de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les infrastructures citées",
          "stepTheme": "Les infrastructures citées",
          "stepBadge": "Les infrastructures citées",
          "paragraphText": "Exemples d'infrastructures socio-économiques donnés par la leçon : les marchés, les banques, les écoles, les centres de santé, les centres de loisir.\nLeur présence dans une zone de résidence conditionne l'épanouissement des hommes.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces infrastructures est citée par la leçon comme élément de la qualité de la vie ?",
            "options": [
              "Les casernes militaires",
              "Les centres de santé",
              "Les stades de football uniquement",
              "Les péages routiers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Marchés, banques, écoles, centres de santé et centres de loisir sont les exemples de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le volet environnemental",
          "stepTheme": "Le volet environnemental",
          "stepBadge": "Le volet environnemental",
          "paragraphText": "La qualité de la vie prend également en compte le volet environnemental.\nIl s'agit des espaces verts, des canalisations, de la gestion des ordures ménagères et de l'assainissement.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q3",
            "type": "mcq",
            "prompt": "Le volet environnemental de la qualité de la vie comprend :",
            "options": [
              "Les banques et les marchés",
              "Les écoles et les centres de loisir",
              "Les espaces verts, les canalisations, la gestion des ordures ménagères et l'assainissement",
              "Les ports et les universités"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Espaces verts, canalisations, ordures ménagères et assainissement : c'est le volet environnemental."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Évaluer la qualité de vie d'un quartier",
          "stepTheme": "Évaluer la qualité de vie d'un quartier",
          "stepBadge": "Évaluer la qualité de vie d'un quartier",
          "paragraphText": "Méthode : pour apprécier la qualité de la vie dans une zone de résidence, on vérifie ses équipements socio-économiques, puis son environnement.\nUn quartier sans école, sans centre de santé et sans assainissement offre une mauvaise qualité de la vie.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q4",
            "type": "mcq",
            "prompt": "Pour évaluer la qualité de la vie d'une zone de résidence, on examine :",
            "options": [
              "Uniquement le nombre d'habitants",
              "Uniquement sa densité",
              "Uniquement son ancienneté",
              "Ses infrastructures socio-économiques et son environnement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La définition impose ce double examen : équipements et environnement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Réduire la qualité de vie aux équipements",
          "stepTheme": "Réduire la qualité de vie aux équipements",
          "stepBadge": "Réduire la qualité de vie aux équipements",
          "paragraphText": "Piège : limiter la qualité de la vie aux seules infrastructures et oublier l'environnement.\nLa leçon inclut expressément le volet environnemental : espaces verts, canalisations, ordures, assainissement.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q5",
            "type": "mcq",
            "prompt": "Quelle conception de la qualité de la vie est incomplète ?",
            "options": [
              "Celle qui inclut les écoles et les centres de santé",
              "Celle qui ne retient que les infrastructures et ignore l'environnement",
              "Celle qui inclut les espaces verts et l'assainissement",
              "Celle qui parle de vie convenable"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Oublier le volet environnemental, c'est tronquer la définition de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des zones de résidence équipées",
          "stepTheme": "Des zones de résidence équipées",
          "stepBadge": "Des zones de résidence équipées",
          "paragraphText": "Exemple d'application : une zone de résidence équipée d'un marché, d'une école, d'un centre de santé et de canalisations offre les conditions d'une vie convenable.\nC'est l'illustration directe de la définition de la leçon.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q6",
            "type": "mcq",
            "prompt": "Une zone de résidence bien équipée en écoles, centres de santé et assainissement illustre :",
            "options": [
              "L'explosion démographique",
              "L'exode rural",
              "Une bonne qualité de la vie",
              "La macrocéphalie urbaine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ces équipements sont précisément les conditions élémentaires d'une vie convenable."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q1",
          "type": "mcq",
          "prompt": "La qualité de la vie est :",
          "options": [
            "L'ensemble des conditions élémentaires nécessaires pour mener une vie convenable",
            "La richesse d'un pays",
            "Le taux de croissance de la population",
            "Le nombre de villes d'un pays"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition exacte de la leçon."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces infrastructures est citée par la leçon comme élément de la qualité de la vie ?",
          "options": [
            "Les casernes militaires",
            "Les centres de santé",
            "Les stades de football uniquement",
            "Les péages routiers"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Marchés, banques, écoles, centres de santé et centres de loisir sont les exemples de la leçon."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q3",
          "type": "mcq",
          "prompt": "Le volet environnemental de la qualité de la vie comprend :",
          "options": [
            "Les banques et les marchés",
            "Les écoles et les centres de loisir",
            "Les espaces verts, les canalisations, la gestion des ordures ménagères et l'assainissement",
            "Les ports et les universités"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Espaces verts, canalisations, ordures ménagères et assainissement : c'est le volet environnemental."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q4",
          "type": "mcq",
          "prompt": "Pour évaluer la qualité de la vie d'une zone de résidence, on examine :",
          "options": [
            "Uniquement le nombre d'habitants",
            "Uniquement sa densité",
            "Uniquement son ancienneté",
            "Ses infrastructures socio-économiques et son environnement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La définition impose ce double examen : équipements et environnement."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q5",
          "type": "mcq",
          "prompt": "Quelle conception de la qualité de la vie est incomplète ?",
          "options": [
            "Celle qui inclut les écoles et les centres de santé",
            "Celle qui ne retient que les infrastructures et ignore l'environnement",
            "Celle qui inclut les espaces verts et l'assainissement",
            "Celle qui parle de vie convenable"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Oublier le volet environnemental, c'est tronquer la définition de la leçon."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p05_q6",
          "type": "mcq",
          "prompt": "Une zone de résidence bien équipée en écoles, centres de santé et assainissement illustre :",
          "options": [
            "L'explosion démographique",
            "L'exode rural",
            "Une bonne qualité de la vie",
            "La macrocéphalie urbaine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ces équipements sont précisément les conditions élémentaires d'une vie convenable."
        }
      ]
    },
    {
      "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06",
      "order": 6,
      "title": "L'impact de l'explosion démographique : les problèmes socio-économiques",
      "summary": "Montrer comment la croissance rapide dégrade éducation, santé, logement et emploi.",
      "conceptExplanation": "La population ivoirienne est à moitié jeune, ce qui représente une charge pour l'État, qui doit assurer leur éducation (à travers la construction d'écoles), améliorer leur santé et créer des emplois. Or la vitesse des investissements et des réalisations est inférieure au rythme de croissance de la population ; par conséquent, les jeunes déscolarisés sont en proie au chômage, à la drogue, à la délinquance juvénile, à la criminalité, à la cybercriminalité, au VIH SIDA et aux enfants en conflit avec la loi.\nLes ressources financières de l'État ne parviennent pas à assurer une bonne qualité de vie aux populations. Celles-ci sont confrontées à un certain nombre de difficultés : l'insuffisance de la couverture sanitaire (4 CHU : Bouaké, Yopougon, Cocody, Treichville et Angré) ; l'insuffisance et le coût élevé des logements ; la prolifération des quartiers précaires ; la pauvreté ; la cherté de la vie.",
      "keyRule": "Quand la population croît plus vite que les investissements, éducation, santé, logement et emploi se dégradent.",
      "formulas": [],
      "workedExample": {
        "title": "Relier problèmes socio-économiques et problèmes environnementaux",
        "statement": "L'activité d'application n°2 des exercices demande de relier chaque fait à sa catégorie : accentuation de la pauvreté, pollution de l'air, propagation du VIH SIDA, augmentation du chômage, insuffisance des prestations de santé, taux élevé d'analphabétisme.",
        "methodSteps": [
          "Je classe l'accentuation de la pauvreté parmi les problèmes socio-économiques.",
          "Je classe la propagation du VIH SIDA, l'augmentation du chômage, l'insuffisance des prestations de santé et le taux élevé d'analphabétisme parmi les problèmes socio-économiques.",
          "Je classe la pollution de l'air parmi les problèmes environnementaux.",
          "Je vérifie qu'aucun fait n'est rangé dans les deux catégories à la fois."
        ],
        "conclusion": "Cinq faits relèvent des problèmes socio-économiques et un seul, la pollution de l'air, des problèmes environnementaux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une population jeune, une charge pour l'État",
          "stepTheme": "Une population jeune, une charge pour l'État",
          "stepBadge": "Une population jeune, une charge pour l'État",
          "paragraphText": "La population ivoirienne est à moitié jeune, ce qui représente une charge pour l'État.\nL'État doit assurer l'éducation des jeunes par la construction d'écoles, améliorer leur santé et créer des emplois.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q1",
            "type": "mcq",
            "prompt": "Pourquoi la jeunesse de la population est-elle une charge pour l'État ?",
            "options": [
              "Parce que l'État doit assurer leur éducation, améliorer leur santé et créer des emplois",
              "Parce que les jeunes ne travaillent pas",
              "Parce que les jeunes quittent le pays",
              "Parce que les jeunes refusent l'école"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Éducation, santé et emploi des jeunes sont des charges que l'État doit financer."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des investissements plus lents que la croissance",
          "stepTheme": "Des investissements plus lents que la croissance",
          "stepBadge": "Des investissements plus lents que la croissance",
          "paragraphText": "La vitesse des investissements et des réalisations est inférieure au rythme de croissance de la population.\nC'est ce déséquilibre qui dégrade la qualité de la vie.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q2",
            "type": "mcq",
            "prompt": "Le déséquilibre central décrit par la leçon est :",
            "options": [
              "Les investissements dépassent la croissance de la population",
              "La vitesse des investissements est inférieure au rythme de croissance de la population",
              "La population diminue pendant que les investissements augmentent",
              "Les investissements sont inexistants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Population rapide, investissements lents : le déséquilibre est au cœur de l'impact décrit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les jeunes déscolarisés en proie aux fléaux",
          "stepTheme": "Les jeunes déscolarisés en proie aux fléaux",
          "stepBadge": "Les jeunes déscolarisés en proie aux fléaux",
          "paragraphText": "Exemple de conséquence donnée par la leçon : les jeunes déscolarisés sont en proie au chômage, à la drogue, à la délinquance juvénile, à la criminalité, à la cybercriminalité et au VIH SIDA.\nLa leçon cite aussi les enfants en conflit avec la loi.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q3",
            "type": "mcq",
            "prompt": "Selon la leçon, les jeunes déscolarisés sont en proie :",
            "options": [
              "Uniquement au chômage",
              "À l'émigration uniquement",
              "Au chômage, à la drogue, à la délinquance juvénile, à la criminalité et à la cybercriminalité",
              "À la famine uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon énumère chômage, drogue, délinquance, criminalité, cybercriminalité et VIH SIDA."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Quatre CHU insuffisants",
          "stepTheme": "Quatre CHU insuffisants",
          "stepBadge": "Quatre CHU insuffisants",
          "paragraphText": "Exemple chiffré de l'insuffisance sanitaire : la couverture sanitaire se limite à 4 CHU, à Bouaké, Yopougon, Cocody, Treichville et Angré.\nLa liste qui suit ce chiffre cite Bouaké, Yopougon, Cocody, Treichville et Angré.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q4",
            "type": "mcq",
            "prompt": "L'insuffisance de la couverture sanitaire se traduit par :",
            "options": [
              "Un nombre excessif d'hôpitaux",
              "Seulement 4 CHU pour tout le pays",
              "Aucun problème de santé",
              "La gratuité totale des soins"
            ],
            "correctAnswerIndex": 3,
            "explanation": "4 CHU seulement : c'est l'illustration de l'insuffisance de la couverture sanitaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre cause et conséquence",
          "stepTheme": "Confondre cause et conséquence",
          "stepBadge": "Confondre cause et conséquence",
          "paragraphText": "Piège : prendre la pauvreté ou les quartiers précaires pour des causes de la croissance démographique.\nDans la leçon, ce sont des conséquences de l'explosion démographique, au même titre que la cherté de la vie.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q5",
            "type": "mcq",
            "prompt": "Lequel de ces faits est une conséquence de l'explosion démographique, et non une cause ?",
            "options": [
              "Le progrès de la médecine",
              "La prolifération des quartiers précaires",
              "Les pratiques natalistes",
              "L'amélioration de l'hygiène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quartiers précaires, pauvreté et cherté de la vie sont des conséquences ; médecine et natalisme sont des facteurs de croissance."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Logement, pauvreté, cherté de la vie",
          "stepTheme": "Logement, pauvreté, cherté de la vie",
          "stepBadge": "Logement, pauvreté, cherté de la vie",
          "paragraphText": "Autres difficultés énumérées par la leçon : l'insuffisance et le coût élevé des logements, la prolifération des quartiers précaires, la pauvreté et la cherté de la vie.\nElles découlent de ressources financières de l'État insuffisantes pour assurer une bonne qualité de vie.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces difficultés est citée par la leçon ?",
            "options": [
              "La baisse des prix des logements",
              "L'abondance de logements sociaux",
              "L'insuffisance et le coût élevé des logements",
              "La disparition des quartiers précaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Logements insuffisants et coûteux : c'est l'une des difficultés listées par la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q1",
          "type": "mcq",
          "prompt": "Pourquoi la jeunesse de la population est-elle une charge pour l'État ?",
          "options": [
            "Parce que l'État doit assurer leur éducation, améliorer leur santé et créer des emplois",
            "Parce que les jeunes ne travaillent pas",
            "Parce que les jeunes quittent le pays",
            "Parce que les jeunes refusent l'école"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Éducation, santé et emploi des jeunes sont des charges que l'État doit financer."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q2",
          "type": "mcq",
          "prompt": "Le déséquilibre central décrit par la leçon est :",
          "options": [
            "Les investissements dépassent la croissance de la population",
            "La vitesse des investissements est inférieure au rythme de croissance de la population",
            "La population diminue pendant que les investissements augmentent",
            "Les investissements sont inexistants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Population rapide, investissements lents : le déséquilibre est au cœur de l'impact décrit."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q3",
          "type": "mcq",
          "prompt": "Selon la leçon, les jeunes déscolarisés sont en proie :",
          "options": [
            "Uniquement au chômage",
            "À l'émigration uniquement",
            "Au chômage, à la drogue, à la délinquance juvénile, à la criminalité et à la cybercriminalité",
            "À la famine uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon énumère chômage, drogue, délinquance, criminalité, cybercriminalité et VIH SIDA."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q4",
          "type": "mcq",
          "prompt": "L'insuffisance de la couverture sanitaire se traduit par :",
          "options": [
            "Un nombre excessif d'hôpitaux",
            "Seulement 4 CHU pour tout le pays",
            "Aucun problème de santé",
            "La gratuité totale des soins"
          ],
          "correctAnswerIndex": 3,
          "explanation": "4 CHU seulement : c'est l'illustration de l'insuffisance de la couverture sanitaire."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q5",
          "type": "mcq",
          "prompt": "Lequel de ces faits est une conséquence de l'explosion démographique, et non une cause ?",
          "options": [
            "Le progrès de la médecine",
            "La prolifération des quartiers précaires",
            "Les pratiques natalistes",
            "L'amélioration de l'hygiène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Quartiers précaires, pauvreté et cherté de la vie sont des conséquences ; médecine et natalisme sont des facteurs de croissance."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces difficultés est citée par la leçon ?",
          "options": [
            "La baisse des prix des logements",
            "L'abondance de logements sociaux",
            "L'insuffisance et le coût élevé des logements",
            "La disparition des quartiers précaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Logements insuffisants et coûteux : c'est l'une des difficultés listées par la leçon."
        }
      ]
    },
    {
      "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07",
      "order": 7,
      "title": "Un environnement de plus en plus menacé",
      "summary": "Lister les atteintes à l'environnement liées à la forte croissance démographique.",
      "conceptExplanation": "L'explosion démographique dégrade aussi l'environnement. La leçon énumère : la destruction des espaces verts ; la destruction du milieu naturel (la faune et la flore) ; la savanisation ; la pollution de l'environnement ; la prolifération des maladies (typhoïde, choléra, paludisme…) ; le non-traitement des eaux usées.\nLe document 3 de la leçon (Ministère du Plan et du Développement, REPCI 2006) précise que les actions des hommes sur l'environnement sont d'autant plus intenses que la croissance démographique est forte : déforestation préoccupante, dégradation des sols et savanisation des régions forestières, surexploitation des ressources halieutiques, braconnage et dégradation de l'environnement urbain. Le manque de moyens financiers de l'État et des communes ne permet pas d'améliorer les conditions de vie d'une population en forte croissance.",
      "keyRule": "Plus la croissance démographique est forte, plus les atteintes à l'environnement sont intenses.",
      "formulas": [],
      "workedExample": {
        "title": "Classer facteurs et conséquences de la croissance",
        "statement": "L'activité d'application n°3 des exercices donne une liste mêlée : progrès de la médecine, déforestation, exode rural, poids de la religion, immigration, chômage, forte natalité, pollution des eaux, polygamie, insalubrité, grossesses précoces, cherté de la vie. Classe ces éléments en facteurs et en conséquences.",
        "methodSteps": [
          "Je range parmi les facteurs : le progrès de la médecine, l'exode rural, le poids de la religion, l'immigration, la forte natalité, la polygamie et les grossesses précoces.",
          "Je range parmi les conséquences : la déforestation, le chômage, la pollution des eaux, l'insalubrité et la cherté de la vie.",
          "Je distingue dans les conséquences celles qui touchent l'environnement : déforestation, pollution des eaux, insalubrité.",
          "Je vérifie que chaque élément de la liste est classé une seule fois."
        ],
        "conclusion": "Le classement sépare les moteurs de la croissance de ses effets, dont plusieurs dégradent directement l'environnement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La savanisation",
          "stepTheme": "La savanisation",
          "stepBadge": "La savanisation",
          "paragraphText": "• Savanisation : transformation de régions forestières en savane, citée par le document 3 parmi les atteintes à l'environnement.\nElle accompagne la déforestation et la dégradation des sols.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q1",
            "type": "mcq",
            "prompt": "La savanisation des régions forestières est :",
            "options": [
              "Une atteinte à l'environnement liée aux activités humaines",
              "Une mesure de protection de la forêt",
              "Une forme de reboisement",
              "Un type de migration"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document 3 la range parmi les graves atteintes à l'environnement, avec la déforestation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des atteintes proportionnelles à la croissance",
          "stepTheme": "Des atteintes proportionnelles à la croissance",
          "stepBadge": "Des atteintes proportionnelles à la croissance",
          "paragraphText": "Selon le document 3 de la leçon, les actions des hommes sur l'environnement sont d'autant plus intenses que la croissance démographique est forte.\nLes contraintes que le développement fait subir à l'environnement peuvent à leur tour contrarier l'amélioration du bien-être des populations.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q2",
            "type": "mcq",
            "prompt": "D'après le document 3, les atteintes à l'environnement sont d'autant plus intenses que :",
            "options": [
              "La population diminue",
              "La croissance démographique est forte",
              "Les communes sont riches",
              "L'agriculture recule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le lien direct établi par le document : forte croissance, fortes pressions sur l'environnement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les maladies liées à l'environnement dégradé",
          "stepTheme": "Les maladies liées à l'environnement dégradé",
          "stepBadge": "Les maladies liées à l'environnement dégradé",
          "paragraphText": "Exemple donné par la leçon : la prolifération des maladies comme la typhoïde, le choléra et le paludisme.\nS'y ajoute le non-traitement des eaux usées.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q3",
            "type": "mcq",
            "prompt": "La prolifération de quelles maladies est citée parmi les problèmes environnementaux ?",
            "options": [
              "Le diabète et l'hypertension",
              "La rougeole et la varicelle",
              "La typhoïde, le choléra et le paludisme",
              "Aucune maladie n'est citée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Typhoïde, choléra et paludisme : ce sont les exemples de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Déforestation et braconnage",
          "stepTheme": "Déforestation et braconnage",
          "stepBadge": "Déforestation et braconnage",
          "paragraphText": "Exemples du document 3 : déforestation préoccupante, dégradation des sols, surexploitation des ressources halieutiques et braconnage.\nCes atteintes touchent le milieu rural, orienté vers l'agriculture et l'exploitation des ressources naturelles.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q4",
            "type": "mcq",
            "prompt": "Lequel de ces faits est cité dans le document 3 ?",
            "options": [
              "La construction de parcs et réserves",
              "Le reboisement massif",
              "Le traitement des eaux usées",
              "Le braconnage et la surexploitation des ressources halieutiques"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Braconnage et surexploitation halieutique figurent dans la liste des atteintes du document 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le traitement des eaux usées présenté comme acquis",
          "stepTheme": "Le traitement des eaux usées présenté comme acquis",
          "stepBadge": "Le traitement des eaux usées présenté comme acquis",
          "paragraphText": "Piège : la leçon parle du non-traitement des eaux usées, et non de leur traitement.\nC'est une carence qui pollue l'environnement et favorise les maladies.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q5",
            "type": "mcq",
            "prompt": "Que dit exactement la leçon au sujet des eaux usées ?",
            "options": [
              "Elles sont toutes traitées",
              "Leur non-traitement fait partie des problèmes",
              "Elles sont recyclées en eau potable",
              "Elles ne posent aucun problème"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le non-traitement des eaux usées est listé parmi les menaces sur l'environnement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Destruction des espaces verts et du milieu naturel",
          "stepTheme": "Destruction des espaces verts et du milieu naturel",
          "stepBadge": "Destruction des espaces verts et du milieu naturel",
          "paragraphText": "La leçon cite la destruction des espaces verts et la destruction du milieu naturel, c'est-à-dire la faune et la flore.\nLa pollution de l'environnement complète cette liste d'atteintes.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q6",
            "type": "mcq",
            "prompt": "La destruction du milieu naturel concerne, selon la leçon :",
            "options": [
              "Uniquement les routes",
              "Uniquement les bâtiments",
              "La faune et la flore",
              "Les seuls quartiers précaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Milieu naturel détruit égale faune et flore détruites, selon la parenthèse de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q1",
          "type": "mcq",
          "prompt": "La savanisation des régions forestières est :",
          "options": [
            "Une atteinte à l'environnement liée aux activités humaines",
            "Une mesure de protection de la forêt",
            "Une forme de reboisement",
            "Un type de migration"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document 3 la range parmi les graves atteintes à l'environnement, avec la déforestation."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q2",
          "type": "mcq",
          "prompt": "D'après le document 3, les atteintes à l'environnement sont d'autant plus intenses que :",
          "options": [
            "La population diminue",
            "La croissance démographique est forte",
            "Les communes sont riches",
            "L'agriculture recule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le lien direct établi par le document : forte croissance, fortes pressions sur l'environnement."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q3",
          "type": "mcq",
          "prompt": "La prolifération de quelles maladies est citée parmi les problèmes environnementaux ?",
          "options": [
            "Le diabète et l'hypertension",
            "La rougeole et la varicelle",
            "La typhoïde, le choléra et le paludisme",
            "Aucune maladie n'est citée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Typhoïde, choléra et paludisme : ce sont les exemples de la leçon."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q4",
          "type": "mcq",
          "prompt": "Lequel de ces faits est cité dans le document 3 ?",
          "options": [
            "La construction de parcs et réserves",
            "Le reboisement massif",
            "Le traitement des eaux usées",
            "Le braconnage et la surexploitation des ressources halieutiques"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Braconnage et surexploitation halieutique figurent dans la liste des atteintes du document 3."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q5",
          "type": "mcq",
          "prompt": "Que dit exactement la leçon au sujet des eaux usées ?",
          "options": [
            "Elles sont toutes traitées",
            "Leur non-traitement fait partie des problèmes",
            "Elles sont recyclées en eau potable",
            "Elles ne posent aucun problème"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le non-traitement des eaux usées est listé parmi les menaces sur l'environnement."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p07_q6",
          "type": "mcq",
          "prompt": "La destruction du milieu naturel concerne, selon la leçon :",
          "options": [
            "Uniquement les routes",
            "Uniquement les bâtiments",
            "La faune et la flore",
            "Les seuls quartiers précaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Milieu naturel détruit égale faune et flore détruites, selon la parenthèse de la leçon."
        }
      ]
    },
    {
      "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08",
      "order": 8,
      "title": "Les actions en faveur de l'amélioration de la qualité de la vie",
      "summary": "Présenter les mesures pour freiner l'explosion démographique et préserver la qualité de la vie.",
      "conceptExplanation": "Pour freiner l'explosion démographique en Côte d'Ivoire, l'État doit mener des actions vigoureuses : la sensibilisation des populations, en les exhortant à utiliser des méthodes contraceptives ; encourager le planning familial pour espacer les naissances ; la lutte contre les pratiques culturelles encourageant les naissances (mariages précoces) ; la scolarisation de la jeune fille ; la lutte contre les grossesses en milieu scolaire.\nPour préserver la qualité de la vie des populations, le rythme de la croissance démographique doit être proportionnel aux ressources financières et naturelles disponibles. Pour y parvenir, il faudrait : rationnaliser l'exploitation de la forêt et des eaux ; pratiquer une agriculture intensive moins dévoreuse de l'espace ; renforcer la création des parcs et réserves ; améliorer les services d'assainissement ; construire des logements sociaux pour les économiquement faibles ; rentabiliser le capital humain ; améliorer l'offre des services sociaux de base (électricité, eau potable, centres de santé, éducation…).",
      "keyRule": "Deux volets de solutions : freiner les naissances et faire correspondre la croissance aux ressources disponibles.",
      "formulas": [],
      "workedExample": {
        "title": "Répondre à l'expert de la situation d'évaluation n°2",
        "statement": "Un expert en démographie cité dans la leçon affirme : pour préserver la qualité de la vie, le rythme de la croissance démographique doit être proportionnel aux ressources financières et naturelles disponibles, en rentabilisant le capital humain et en améliorant l'offre des services sociaux de base. Explique ce passage.",
        "methodSteps": [
          "Je définis l'exigence : la croissance de la population ne doit pas dépasser les ressources financières et naturelles disponibles.",
          "J'explique « rentabiliser le capital humain » : tirer le meilleur parti des hommes et des femmes, notamment par la formation.",
          "J'explique « améliorer l'offre des services sociaux de base » : électricité, eau potable, centres de santé, éducation.",
          "Je relie aux autres mesures de préservation : forêt et eaux rationnalisées, agriculture intensive, parcs et réserves, assainissement, logements sociaux."
        ],
        "conclusion": "La solution de l'expert combine maîtrise démographique, valorisation des hommes et renforcement des services de base."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le planning familial",
          "stepTheme": "Le planning familial",
          "stepBadge": "Le planning familial",
          "paragraphText": "• Planning familial : espacement des naissances, encouragé par l'État pour freiner l'explosion démographique.\nIl s'accompagne de la sensibilisation à l'utilisation des méthodes contraceptives.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q1",
            "type": "mcq",
            "prompt": "Encourager le planning familial vise à :",
            "options": [
              "Espacer les naissances",
              "Multiplier les naissances",
              "Interdire toute naissance",
              "Encourager les mariages précoces"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le planning familial sert à espacer les naissances, selon la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Freiner : les mesures démographiques",
          "stepTheme": "Freiner : les mesures démographiques",
          "stepBadge": "Freiner : les mesures démographiques",
          "paragraphText": "Mesures pour freiner l'explosion démographique : sensibilisation aux méthodes contraceptives, planning familial, lutte contre les mariages précoces, scolarisation de la jeune fille, lutte contre les grossesses en milieu scolaire.\nCe sont des actions vigoureuses que l'État doit mener.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces mesures vise à freiner l'explosion démographique ?",
            "options": [
              "La construction de logements sociaux",
              "La scolarisation de la jeune fille",
              "La création de parcs et réserves",
              "L'amélioration de l'assainissement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La scolarisation de la jeune fille est une mesure de freinage ; les autres relèvent de la préservation de la qualité de la vie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Préserver : croissance et ressources proportionnelles",
          "stepTheme": "Préserver : croissance et ressources proportionnelles",
          "stepBadge": "Préserver : croissance et ressources proportionnelles",
          "paragraphText": "Pour préserver la qualité de la vie, le rythme de la croissance démographique doit être proportionnel aux ressources financières et naturelles disponibles.\nC'est le principe posé par la leçon et repris par l'expert de la situation d'évaluation n°2.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q3",
            "type": "mcq",
            "prompt": "Le principe de préservation posé par la leçon est :",
            "options": [
              "Les ressources doivent diminuer",
              "La croissance doit toujours dépasser les ressources",
              "La croissance doit être proportionnelle aux ressources financières et naturelles disponibles",
              "La population doit doubler chaque année"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Proportionnalité entre croissance démographique et ressources : c'est le principe directeur des solutions."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les logements sociaux",
          "stepTheme": "Les logements sociaux",
          "stepBadge": "Les logements sociaux",
          "paragraphText": "Exemple de mesure de préservation : la construction de logements sociaux pour les économiquement faibles.\nElle répond à l'insuffisance et au coût élevé des logements constatés parmi les problèmes.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q4",
            "type": "mcq",
            "prompt": "La construction de logements sociaux s'adresse, selon la leçon :",
            "options": [
              "Aux fonctionnaires uniquement",
              "Aux étudiants uniquement",
              "Aux étrangers uniquement",
              "Aux économiquement faibles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les logements sociaux visent les économiquement faibles, frappés par le coût élevé des logements."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre les deux volets de solutions",
          "stepTheme": "Confondre les deux volets de solutions",
          "stepBadge": "Confondre les deux volets de solutions",
          "paragraphText": "Piège : ranger la scolarisation de la jeune fille parmi les mesures de préservation de l'environnement, ou les parcs et réserves parmi les mesures de freinage des naissances.\nFreiner concerne les naissances ; préserver concerne les ressources, l'environnement et les services.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q5",
            "type": "mcq",
            "prompt": "Le renforcement de la création des parcs et réserves relève :",
            "options": [
              "Des mesures pour freiner les naissances",
              "Des mesures de préservation de la qualité de la vie",
              "Des causes de l'explosion démographique",
              "Des problèmes socio-économiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Parcs et réserves protègent les ressources : c'est une mesure de préservation, pas de freinage des naissances."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Rentabiliser le capital humain",
          "stepTheme": "Rentabiliser le capital humain",
          "stepBadge": "Rentabiliser le capital humain",
          "paragraphText": "Exemple de mesure citée deux fois dans la leçon, dans le cours et dans la situation d'évaluation n°2 : rentabiliser le capital humain.\nElle accompagne l'amélioration de l'offre des services sociaux de base : électricité, eau potable, centres de santé, éducation.",
          "exercise": {
            "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q6",
            "type": "mcq",
            "prompt": "Améliorer l'offre des services sociaux de base, c'est notamment développer :",
            "options": [
              "Les seules routes",
              "Les seuls centres de loisir",
              "L'électricité, l'eau potable, les centres de santé et l'éducation",
              "Les seuls marchés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les quatre services énumérés par la leçon entre parenthèses."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q1",
          "type": "mcq",
          "prompt": "Encourager le planning familial vise à :",
          "options": [
            "Espacer les naissances",
            "Multiplier les naissances",
            "Interdire toute naissance",
            "Encourager les mariages précoces"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le planning familial sert à espacer les naissances, selon la leçon."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces mesures vise à freiner l'explosion démographique ?",
          "options": [
            "La construction de logements sociaux",
            "La scolarisation de la jeune fille",
            "La création de parcs et réserves",
            "L'amélioration de l'assainissement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La scolarisation de la jeune fille est une mesure de freinage ; les autres relèvent de la préservation de la qualité de la vie."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q3",
          "type": "mcq",
          "prompt": "Le principe de préservation posé par la leçon est :",
          "options": [
            "Les ressources doivent diminuer",
            "La croissance doit toujours dépasser les ressources",
            "La croissance doit être proportionnelle aux ressources financières et naturelles disponibles",
            "La population doit doubler chaque année"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Proportionnalité entre croissance démographique et ressources : c'est le principe directeur des solutions."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q4",
          "type": "mcq",
          "prompt": "La construction de logements sociaux s'adresse, selon la leçon :",
          "options": [
            "Aux fonctionnaires uniquement",
            "Aux étudiants uniquement",
            "Aux étrangers uniquement",
            "Aux économiquement faibles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les logements sociaux visent les économiquement faibles, frappés par le coût élevé des logements."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q5",
          "type": "mcq",
          "prompt": "Le renforcement de la création des parcs et réserves relève :",
          "options": [
            "Des mesures pour freiner les naissances",
            "Des mesures de préservation de la qualité de la vie",
            "Des causes de l'explosion démographique",
            "Des problèmes socio-économiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Parcs et réserves protègent les ressources : c'est une mesure de préservation, pas de freinage des naissances."
        },
        {
          "id": "premiere_hg_geographie_t1_l01_dynamisme_demographique_ci_p08_q6",
          "type": "mcq",
          "prompt": "Améliorer l'offre des services sociaux de base, c'est notamment développer :",
          "options": [
            "Les seules routes",
            "Les seuls centres de loisir",
            "L'électricité, l'eau potable, les centres de santé et l'éducation",
            "Les seuls marchés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les quatre services énumérés par la leçon entre parenthèses."
        }
      ]
    }
  ]
};
