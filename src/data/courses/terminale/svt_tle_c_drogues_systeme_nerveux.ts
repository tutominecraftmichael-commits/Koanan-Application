import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 2 : Les drogues et le système nerveux » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2127
export const SVT_TLE_C_L02_DROGUES_SYSTEME_NERVEUX: CurriculumChapter = {
  "id": "terminale_c_svt_l02_drogues_systeme_nerveux",
  "subjectId": "svt",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 2,
  "title": "Leçon 2 : Les drogues et le système nerveux",
  "summary": "On montre que les drogues ont divers modes d’action sur le système nerveux, excitateurs ou inhibiteurs au niveau de la synapse, et que leur consommation a des conséquences sur l’homme et la société.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2127",
  "points": [
    {
      "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01",
      "order": 1,
      "title": "Des drogues excitatrices et des drogues inhibitrices",
      "summary": "Les expériences sur le ganglion de phasme montrent que la nicotine excite et que le diazépam inhibe l’activité nerveuse.",
      "conceptExplanation": "On stimule le ganglion nerveux de phasme, un insecte, plongé dans différentes solutions. Dans l’expérience témoin, avec un liquide physiologique, l’amplitude et la fréquence des potentiels d’action sont normales.\nAvec la nicotine, l’amplitude et la fréquence des potentiels d’action sont élevées. La nicotine entraîne donc une augmentation de l’excitation : elle a un effet excitateur sur le système nerveux, ou effet psychostimulant.\nAvec le diazépam, l’amplitude et la fréquence des potentiels d’action sont faibles. Le diazépam diminue l’activité du ganglion : il a un effet inhibiteur sur le système nerveux, ou effet psychodépressif.\nCertaines drogues ont donc un effet excitateur et d’autres un effet inhibiteur sur le système nerveux.",
      "keyRule": "Nicotine = amplitude et fréquence élevées donc psychostimulant ; diazépam = amplitude et fréquence faibles donc psychodépressif.",
      "formulas": [],
      "workedExample": {
        "title": "Expériences sur le ganglion de phasme",
        "statement": "Compare l’activité du ganglion dans le liquide physiologique, dans la nicotine et dans le diazépam, puis conclus sur l’effet de chaque substance.",
        "methodSteps": [
          "L’expérience témoin donne une amplitude et une fréquence normales : c’est la référence.",
          "La nicotine augmente amplitude et fréquence par rapport au témoin.",
          "Le diazépam diminue amplitude et fréquence par rapport au témoin."
        ],
        "conclusion": "La nicotine est excitatrice et le diazépam inhibiteur du système nerveux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d’une drogue psychostimulante",
          "stepTheme": "Définition d’une drogue psychostimulante",
          "stepBadge": "Définition d’une drogue psychostimulante",
          "paragraphText": "• Drogue psychostimulante : drogue à effet excitateur qui augmente l’amplitude et la fréquence des potentiels d’action.\nLa nicotine est l’exemple étudié dans les expériences sur le ganglion de phasme.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q1",
            "type": "mcq",
            "prompt": "La nicotine est une drogue :",
            "options": [
              "Inhibitrice",
              "Psychodépressive",
              "Psychostimulante",
              "Sans effet sur le ganglion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle augmente amplitude et fréquence, ce qui traduit une augmentation de l’excitation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Définition d’une drogue psychodépressive",
          "stepTheme": "Définition d’une drogue psychodépressive",
          "stepBadge": "Définition d’une drogue psychodépressive",
          "paragraphText": "• Drogue psychodépressive : drogue à effet inhibiteur qui diminue l’amplitude et la fréquence des potentiels d’action.\nLe diazépam est l’exemple étudié : il inhibe l’activité des ganglions nerveux.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q2",
            "type": "mcq",
            "prompt": "Le diazépam provoque :",
            "options": [
              "Une augmentation de la fréquence des potentiels",
              "Une inhibition de l’activité des ganglions nerveux",
              "Une hyperexcitabilité",
              "Une libération continue de dopamine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé interprète la baisse d’amplitude et de fréquence comme une inhibition."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Comparer à l’expérience témoin",
          "stepTheme": "Comparer à l’expérience témoin",
          "stepBadge": "Comparer à l’expérience témoin",
          "paragraphText": "Méthode : on compare toujours l’amplitude et la fréquence obtenues avec une drogue à celles de l’expérience témoin en liquide physiologique.\nUne augmentation signe un effet excitateur, une diminution signe un effet inhibiteur.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q3",
            "type": "mcq",
            "prompt": "L’expérience témoin sert à :",
            "options": [
              "Remplacer toutes les autres expériences",
              "Fournir les valeurs normales de référence",
              "Montrer l’effet de la cocaïne",
              "Bloquer la synapse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La comparaison au témoin permet l’analyse des expériences 2 et 3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les deux indicateurs : amplitude et fréquence",
          "stepTheme": "Les deux indicateurs : amplitude et fréquence",
          "stepBadge": "Les deux indicateurs : amplitude et fréquence",
          "paragraphText": "Les résultats sont lus sur deux indicateurs : l’amplitude et la fréquence des potentiels d’action émis par le ganglion.\nNicotine : amplitude et fréquence élevées ; diazépam : amplitude et fréquence faibles.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q4",
            "type": "mcq",
            "prompt": "Avec le diazépam, amplitude et fréquence sont :",
            "options": [
              "Normales",
              "Élevées",
              "Faibles",
              "Nulles définitivement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le résultat de l’expérience 3 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser nicotine et diazépam",
          "stepTheme": "Ne pas inverser nicotine et diazépam",
          "stepBadge": "Ne pas inverser nicotine et diazépam",
          "paragraphText": "Piège : inverser les deux substances fausse toute la conclusion.\nLa nicotine excite, le diazépam calme : les sujets très agités et les sujets très calmes du centre de désintoxication illustrent ces deux effets opposés.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q5",
            "type": "mcq",
            "prompt": "Un drogué très agité a plutôt consommé une drogue :",
            "options": [
              "Psychodépressive",
              "Excitatrice",
              "Analgésique seule",
              "Sans effet nerveux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La situation d’apprentissage relie l’agitation au type de drogue consommée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les comportements au centre de désintoxication",
          "stepTheme": "Les comportements au centre de désintoxication",
          "stepBadge": "Les comportements au centre de désintoxication",
          "paragraphText": "Exemple de la situation d’apprentissage : certains drogués sont très agités, d’autres très calmes ou ont l’air absent.\nLe guide explique que leur comportement dépend du type de drogues consommées.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q6",
            "type": "mcq",
            "prompt": "La diversité des comportements observés s’explique par :",
            "options": [
              "L’heure de la visite",
              "Le type de drogues consommées",
              "La taille du centre",
              "Le nombre d’élèves"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la réponse du guide dans la situation d’apprentissage."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q1",
          "type": "mcq",
          "prompt": "La nicotine est une drogue :",
          "options": [
            "Inhibitrice",
            "Psychodépressive",
            "Psychostimulante",
            "Sans effet sur le ganglion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle augmente amplitude et fréquence, ce qui traduit une augmentation de l’excitation."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q2",
          "type": "mcq",
          "prompt": "Le diazépam provoque :",
          "options": [
            "Une augmentation de la fréquence des potentiels",
            "Une inhibition de l’activité des ganglions nerveux",
            "Une hyperexcitabilité",
            "Une libération continue de dopamine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé interprète la baisse d’amplitude et de fréquence comme une inhibition."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q3",
          "type": "mcq",
          "prompt": "L’expérience témoin sert à :",
          "options": [
            "Remplacer toutes les autres expériences",
            "Fournir les valeurs normales de référence",
            "Montrer l’effet de la cocaïne",
            "Bloquer la synapse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La comparaison au témoin permet l’analyse des expériences 2 et 3."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q4",
          "type": "mcq",
          "prompt": "Avec le diazépam, amplitude et fréquence sont :",
          "options": [
            "Normales",
            "Élevées",
            "Faibles",
            "Nulles définitivement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le résultat de l’expérience 3 du résumé."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q5",
          "type": "mcq",
          "prompt": "Un drogué très agité a plutôt consommé une drogue :",
          "options": [
            "Psychodépressive",
            "Excitatrice",
            "Analgésique seule",
            "Sans effet nerveux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La situation d’apprentissage relie l’agitation au type de drogue consommée."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p01_q6",
          "type": "mcq",
          "prompt": "La diversité des comportements observés s’explique par :",
          "options": [
            "L’heure de la visite",
            "Le type de drogues consommées",
            "La taille du centre",
            "Le nombre d’élèves"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la réponse du guide dans la situation d’apprentissage."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02",
      "order": 2,
      "title": "Les modes d’action des drogues excitatrices",
      "summary": "Les drogues excitatrices agissent à la synapse en favorisant la libération du neuromédiateur ou en empêchant sa recapture.",
      "conceptExplanation": "Les drogues à effet excitateur ont deux modes d’action : certaines favorisent une libération continue du neuromédiateur dans la fente synaptique, tandis que d’autres empêchent la recapture du neuromédiateur par le neurone présynaptique.\nPar la libération de neuromédiateurs tels que la dopamine et la noradrénaline dans la fente synaptique, la transmission de l’influx reste libre : il en résulte une excitation prolongée et maintenue. Les amphétamines illustrent ce mode d’action.\nLa cocaïne s’oppose à la recapture de la dopamine : les neuromédiateurs non recapturés atteignent une forte concentration dans la fente et provoquent une stimulation anormalement prolongée du neurone postsynaptique, avec un potentiel postsynaptique excitateur très élevé.\nLes sujets qui consomment ces drogues sont dans un état d’excitation physique et psychique intense.",
      "keyRule": "Excitation prolongée = plus de neuromédiateur disponible dans la fente, par libération continue ou par blocage de la recapture.",
      "formulas": [],
      "workedExample": {
        "title": "Amphétamine et cocaïne (situation d’évaluation corrigée)",
        "statement": "Relève le site d’action de l’amphétamine et de la cocaïne et explique l’action de chacune.",
        "methodSteps": [
          "Le site d’action des deux drogues est la synapse, au niveau du neurone présynaptique.",
          "L’amphétamine favorise la libération du neuromédiateur dans la fente : sa concentration élevée stimule en permanence le neurone postsynaptique.",
          "La cocaïne empêche la réabsorption du neuromédiateur : la stimulation postsynaptique est anormalement prolongée."
        ],
        "conclusion": "Les deux drogues ont des effets excitateurs ou psychostimulants, par deux mécanismes différents."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Libération continue du neuromédiateur",
          "stepTheme": "Libération continue du neuromédiateur",
          "stepBadge": "Libération continue du neuromédiateur",
          "paragraphText": "• Libération continue : mode d’action excitateur où la drogue favorise la libération du neuromédiateur, comme la dopamine, dans la fente synaptique.\nIl en résulte une excitation prolongée et maintenue, illustrée par les amphétamines.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q1",
            "type": "mcq",
            "prompt": "Les amphétamines agissent en :",
            "options": [
              "Bloquant les récepteurs postsynaptiques",
              "Favorisant la libération du neuromédiateur dans la fente",
              "Bloquant la libération du neuromédiateur",
              "Détruisant la dopamine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le premier mode d’action excitateur du document 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Empêchement de la recapture",
          "stepTheme": "Empêchement de la recapture",
          "stepBadge": "Empêchement de la recapture",
          "paragraphText": "• Empêchement de la recapture : mode d’action où la drogue s’oppose à la recapture du neuromédiateur par le neurone présynaptique.\nLa cocaïne, qui s’oppose à la recapture de la dopamine, a des effets excitateurs ou psychostimulants.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q2",
            "type": "mcq",
            "prompt": "La cocaïne s’oppose à la recapture de :",
            "options": [
              "La sérotonine",
              "La substance P",
              "La dopamine",
              "L’enképhaline"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé nomme explicitement la dopamine pour la cocaïne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Conséquence : un PPSE très élevé",
          "stepTheme": "Conséquence : un PPSE très élevé",
          "stepBadge": "Conséquence : un PPSE très élevé",
          "paragraphText": "Quand les neuromédiateurs s’accumulent dans la fente, le nombre de récepteurs en activité est beaucoup plus important.\nLe potentiel postsynaptique excitateur qui en résulte est très élevé, avec une hyperexcitabilité.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q3",
            "type": "mcq",
            "prompt": "L’accumulation du neuromédiateur dans la fente entraîne :",
            "options": [
              "Une absence de message postsynaptique",
              "Un potentiel postsynaptique excitateur très élevé",
              "Des récepteurs bloqués",
              "Une insensibilité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le classement de l’exercice 1 corrigé pour les drogues excitatrices."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Distinguer les deux modes excitateurs",
          "stepTheme": "Distinguer les deux modes excitateurs",
          "stepBadge": "Distinguer les deux modes excitateurs",
          "paragraphText": "Méthode : si la drogue augmente la libération, elle agit en amont dans le bouton présynaptique ; si elle bloque la recapture, le neuromédiateur libéré normalement reste plus longtemps dans la fente.\nDans les deux cas, la stimulation postsynaptique est prolongée.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q4",
            "type": "mcq",
            "prompt": "Le point commun des deux modes excitateurs est :",
            "options": [
              "La destruction des récepteurs",
              "La stimulation prolongée du neurone postsynaptique",
              "Le blocage de la transmission",
              "La baisse de dopamine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Libération continue et blocage de recapture aboutissent au même effet excitateur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La cocaïne ne bloque pas la libération",
          "stepTheme": "La cocaïne ne bloque pas la libération",
          "stepBadge": "La cocaïne ne bloque pas la libération",
          "paragraphText": "Piège : la cocaïne n’empêche pas la libération du neuromédiateur, elle empêche sa recapture.\nLe blocage de la libération est au contraire un mode d’action inhibiteur, illustré par la morphine.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q5",
            "type": "mcq",
            "prompt": "Empêcher la recapture du neuromédiateur a pour effet :",
            "options": [
              "De vider rapidement la fente",
              "D’augmenter sa concentration dans la fente",
              "De bloquer les récepteurs",
              "D’arrêter toute excitation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les neuromédiateurs non recapturés atteignent une forte concentration dans la fente."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La cocaïne chez le rat (exercice 3 corrigé)",
          "stepTheme": "La cocaïne chez le rat (exercice 3 corrigé)",
          "stepBadge": "La cocaïne chez le rat (exercice 3 corrigé)",
          "paragraphText": "Exemple : chez les rats ayant reçu de la cocaïne, la concentration de dopamine dans la fente augmente de 30 pour cent à 230 pour cent 40 minutes après l’injection, puis chute jusqu’à environ 30 pour cent à la 140e minute.\nChez les rats sans injection, elle reste constante à environ 30 pour cent.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q6",
            "type": "mcq",
            "prompt": "Chez le rat sans cocaïne, la concentration de dopamine dans la fente est :",
            "options": [
              "En forte hausse à 230 pour cent",
              "Constante à environ 30 pour cent",
              "Nulle",
              "En chute continue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’analyse du document 2 de l’exercice 3 corrigé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q1",
          "type": "mcq",
          "prompt": "Les amphétamines agissent en :",
          "options": [
            "Bloquant les récepteurs postsynaptiques",
            "Favorisant la libération du neuromédiateur dans la fente",
            "Bloquant la libération du neuromédiateur",
            "Détruisant la dopamine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le premier mode d’action excitateur du document 1."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q2",
          "type": "mcq",
          "prompt": "La cocaïne s’oppose à la recapture de :",
          "options": [
            "La sérotonine",
            "La substance P",
            "La dopamine",
            "L’enképhaline"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé nomme explicitement la dopamine pour la cocaïne."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q3",
          "type": "mcq",
          "prompt": "L’accumulation du neuromédiateur dans la fente entraîne :",
          "options": [
            "Une absence de message postsynaptique",
            "Un potentiel postsynaptique excitateur très élevé",
            "Des récepteurs bloqués",
            "Une insensibilité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le classement de l’exercice 1 corrigé pour les drogues excitatrices."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q4",
          "type": "mcq",
          "prompt": "Le point commun des deux modes excitateurs est :",
          "options": [
            "La destruction des récepteurs",
            "La stimulation prolongée du neurone postsynaptique",
            "Le blocage de la transmission",
            "La baisse de dopamine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Libération continue et blocage de recapture aboutissent au même effet excitateur."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q5",
          "type": "mcq",
          "prompt": "Empêcher la recapture du neuromédiateur a pour effet :",
          "options": [
            "De vider rapidement la fente",
            "D’augmenter sa concentration dans la fente",
            "De bloquer les récepteurs",
            "D’arrêter toute excitation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les neuromédiateurs non recapturés atteignent une forte concentration dans la fente."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p02_q6",
          "type": "mcq",
          "prompt": "Chez le rat sans cocaïne, la concentration de dopamine dans la fente est :",
          "options": [
            "En forte hausse à 230 pour cent",
            "Constante à environ 30 pour cent",
            "Nulle",
            "En chute continue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’analyse du document 2 de l’exercice 3 corrigé."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03",
      "order": 3,
      "title": "Les modes d’action des drogues inhibitrices",
      "summary": "Les drogues inhibitrices ralentissent le système nerveux en bloquant la libération du neuromédiateur ou sa fixation sur les récepteurs.",
      "conceptExplanation": "Les drogues à effet inhibiteur ont deux modes d’action au niveau d’une synapse : certaines bloquent la libération du neuromédiateur dans la fente synaptique, tandis que d’autres empêchent la fixation du neuromédiateur sur son site.\nLa morphine bloque au niveau de la membrane présynaptique la libération de la substance P, présentée dans le résumé avec l’enképhaline, responsable de la douleur : il en résulte une insensibilité.\nD’autres drogues se fixent sur les récepteurs de la membrane postsynaptique pour empêcher la fixation du neuromédiateur : l’influx nerveux n’est donc pas transmis, d’où l’état dépressif de l’individu. Le LSD inhibe l’action de la sérotonine et les tranquillisants bloquent la transmission des messages.\nLes effets inhibiteurs regroupent donc l’insensibilité, les récepteurs bloqués et l’absence de message postsynaptique.",
      "keyRule": "Inhibition = le message ne passe plus : libération bloquée présynaptiquement ou récepteurs bloqués postsynaptiquement.",
      "formulas": [],
      "workedExample": {
        "title": "La morphine et la douleur",
        "statement": "Explique comment la morphine produit une insensibilité à la douleur d’après le résumé.",
        "methodSteps": [
          "La morphine agit au niveau de la membrane présynaptique.",
          "Elle bloque la libération de la substance P, neuromédiateur lié à la douleur.",
          "Sans libération de ce neuromédiateur, le message de douleur n’est pas transmis : c’est l’insensibilité."
        ],
        "conclusion": "La morphine est une drogue inhibitrice qui bloque la libération du neuromédiateur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Blocage de la libération du neuromédiateur",
          "stepTheme": "Blocage de la libération du neuromédiateur",
          "stepBadge": "Blocage de la libération du neuromédiateur",
          "paragraphText": "• Blocage de la libération : mode d’action inhibiteur où la drogue empêche la sortie du neuromédiateur dans la fente synaptique.\nLa morphine bloque ainsi la libération de la substance P responsable de la douleur.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q1",
            "type": "mcq",
            "prompt": "La morphine bloque la libération de :",
            "options": [
              "La dopamine",
              "La sérotonine",
              "La substance P",
              "La noradrénaline"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’exemple donné pour le blocage présynaptique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Blocage du site de fixation",
          "stepTheme": "Blocage du site de fixation",
          "stepBadge": "Blocage du site de fixation",
          "paragraphText": "• Blocage du site de fixation : mode d’action inhibiteur où la drogue se fixe sur les récepteurs postsynaptiques et empêche la fixation du neuromédiateur.\nL’influx nerveux n’est alors pas transmis à la cellule postsynaptique.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q2",
            "type": "mcq",
            "prompt": "Quand les récepteurs postsynaptiques sont bloqués, l’influx nerveux :",
            "options": [
              "Est transmis plus vite",
              "N’est pas transmis à la cellule postsynaptique",
              "Devient un PPSE très élevé",
              "Libère plus de dopamine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé relie ce blocage à l’état dépressif de l’individu."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le LSD et la sérotonine",
          "stepTheme": "Le LSD et la sérotonine",
          "stepBadge": "Le LSD et la sérotonine",
          "paragraphText": "Le LSD, acide lysergique diéthylamide, inhibe l’action de la sérotonine.\nLes tranquillisants, eux, bloquent la transmission des messages.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q3",
            "type": "mcq",
            "prompt": "Le LSD inhibe l’action de :",
            "options": [
              "La dopamine",
              "L’enképhaline",
              "La sérotonine",
              "La substance P"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la phrase exacte du résumé sur le LSD."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les effets inhibiteurs à reconnaître",
          "stepTheme": "Les effets inhibiteurs à reconnaître",
          "stepBadge": "Les effets inhibiteurs à reconnaître",
          "paragraphText": "L’exercice 1 corrigé classe du côté inhibiteur : l’insensibilité, les récepteurs bloqués et l’absence de message postsynaptique.\nCes trois signes s’opposent à l’hyperexcitabilité des drogues excitatrices.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q4",
            "type": "mcq",
            "prompt": "Parmi les effets suivants, lequel est inhibiteur ?",
            "options": [
              "L’hyperexcitabilité",
              "Le PPSE très élevé",
              "L’absence de message postsynaptique",
              "Le nombre élevé de complexes récepteur-neurotransmetteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de l’exercice 1 place l’absence de message postsynaptique chez les inhibitrices."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Opiacées et récepteurs des enképhalines",
          "stepTheme": "Opiacées et récepteurs des enképhalines",
          "stepBadge": "Opiacées et récepteurs des enképhalines",
          "paragraphText": "Piège de l’exercice 2 : les drogues opiacées comme l’opium, la morphine et l’héroïne sont de puissants analgésiques.\nGrâce à une conformation spatiale très proche de celle des neurotransmetteurs comme les enképhalines, elles se fixent sur les mêmes récepteurs.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q5",
            "type": "mcq",
            "prompt": "Les opiacées se fixent sur les mêmes récepteurs que :",
            "options": [
              "La dopamine",
              "Les enképhalines",
              "La sérotonine",
              "L’acétylcholine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le texte complété de l’exercice 2 corrigé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’insensibilité produite par la morphine",
          "stepTheme": "L’insensibilité produite par la morphine",
          "stepBadge": "L’insensibilité produite par la morphine",
          "paragraphText": "Exemple : en bloquant la libération de la substance P, la morphine empêche le message douloureux d’être transmis.\nLe sujet devient insensible à la douleur, effet recherché des analgésiques mais obtenu ici par une drogue.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q6",
            "type": "mcq",
            "prompt": "L’insensibilité dans le résumé résulte :",
            "options": [
              "D’une libération continue de dopamine",
              "D’un blocage de la libération du neuromédiateur de la douleur",
              "D’une recapture empêchée",
              "D’un PPSE très élevé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’insensibilité se manifeste quand la libération présynaptique est bloquée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q1",
          "type": "mcq",
          "prompt": "La morphine bloque la libération de :",
          "options": [
            "La dopamine",
            "La sérotonine",
            "La substance P",
            "La noradrénaline"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’exemple donné pour le blocage présynaptique."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q2",
          "type": "mcq",
          "prompt": "Quand les récepteurs postsynaptiques sont bloqués, l’influx nerveux :",
          "options": [
            "Est transmis plus vite",
            "N’est pas transmis à la cellule postsynaptique",
            "Devient un PPSE très élevé",
            "Libère plus de dopamine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé relie ce blocage à l’état dépressif de l’individu."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q3",
          "type": "mcq",
          "prompt": "Le LSD inhibe l’action de :",
          "options": [
            "La dopamine",
            "L’enképhaline",
            "La sérotonine",
            "La substance P"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la phrase exacte du résumé sur le LSD."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q4",
          "type": "mcq",
          "prompt": "Parmi les effets suivants, lequel est inhibiteur ?",
          "options": [
            "L’hyperexcitabilité",
            "Le PPSE très élevé",
            "L’absence de message postsynaptique",
            "Le nombre élevé de complexes récepteur-neurotransmetteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de l’exercice 1 place l’absence de message postsynaptique chez les inhibitrices."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q5",
          "type": "mcq",
          "prompt": "Les opiacées se fixent sur les mêmes récepteurs que :",
          "options": [
            "La dopamine",
            "Les enképhalines",
            "La sérotonine",
            "L’acétylcholine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le texte complété de l’exercice 2 corrigé."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p03_q6",
          "type": "mcq",
          "prompt": "L’insensibilité dans le résumé résulte :",
          "options": [
            "D’une libération continue de dopamine",
            "D’un blocage de la libération du neuromédiateur de la douleur",
            "D’une recapture empêchée",
            "D’un PPSE très élevé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’insensibilité se manifeste quand la libération présynaptique est bloquée."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04",
      "order": 4,
      "title": "Les conséquences des drogues sur l’organisme",
      "summary": "La consommation régulière de drogue dégrade l’organisme du consommateur, notamment ses neurones.",
      "conceptExplanation": "Le texte du résumé indique que la consommation de drogue a un effet à la fois sur le fonctionnement de l’organisme de l’intéressé et sur la société toute entière.\nAu niveau de l’organisme du consommateur, elle entraîne la dégénérescence des neurones et l’amaigrissement du sujet.\nLa dégénérescence des neurones se traduit notamment par la perte de mémoire, la crise de nerfs et la folie, cités dans l’analyse du texte.\nLa consommation des drogues a donc effectivement des conséquences sur l’homme, au-delà de l’effet immédiat sur le système nerveux.",
      "keyRule": "Sur l’organisme, la drogue entraîne dégénérescence des neurones et amaigrissement du sujet.",
      "formulas": [],
      "workedExample": {
        "title": "Exploiter le texte sur les conséquences",
        "statement": "À partir du texte du résumé, relève les conséquences de la consommation régulière de drogue sur l’organisme du consommateur.",
        "methodSteps": [
          "On repère d’abord la phrase sur le fonctionnement de l’organisme de l’intéressé.",
          "On relève la dégénérescence des neurones et l’amaigrissement du sujet.",
          "On précise les manifestations citées : perte de mémoire, crise de nerfs et folie."
        ],
        "conclusion": "Les conséquences organiques sont la dégénérescence des neurones et l’amaigrissement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dégénérescence des neurones",
          "stepTheme": "La dégénérescence des neurones",
          "stepBadge": "La dégénérescence des neurones",
          "paragraphText": "• Dégénérescence des neurones : dégradation des cellules nerveuses entraînée par la consommation régulière de drogue.\nElle est citée en premier parmi les conséquences sur l’organisme.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q1",
            "type": "mcq",
            "prompt": "La première conséquence organique citée est :",
            "options": [
              "L’éclatement de la famille",
              "La dégénérescence des neurones",
              "La délinquance",
              "L’insécurité sociale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte et son analyse placent la dégénérescence des neurones au niveau de l’organisme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les manifestations de la dégénérescence",
          "stepTheme": "Les manifestations de la dégénérescence",
          "stepBadge": "Les manifestations de la dégénérescence",
          "paragraphText": "L’analyse du texte associe la dégénérescence des neurones à la perte de mémoire, à la crise de nerfs et à la folie.\nCes manifestations montrent que le système nerveux lui-même est atteint durablement.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q2",
            "type": "mcq",
            "prompt": "La dégénérescence des neurones se manifeste notamment par :",
            "options": [
              "Une meilleure mémoire",
              "La perte de mémoire, la crise de nerfs et la folie",
              "Un amaigrissement seul",
              "Une excitation passagère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois manifestations listées dans l’analyse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’amaigrissement du sujet",
          "stepTheme": "L’amaigrissement du sujet",
          "stepBadge": "L’amaigrissement du sujet",
          "paragraphText": "Le consommateur régulier maigrit : l’amaigrissement du sujet est la seconde conséquence organique relevée dans le texte.\nElle accompagne la dégradation du fonctionnement de l’organisme.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q3",
            "type": "mcq",
            "prompt": "L’amaigrissement du sujet est une conséquence :",
            "options": [
              "Sociale",
              "Familiale",
              "Sur l’organisme du consommateur",
              "Uniquement scolaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé le classe au niveau de l’organisme du consommateur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Séparer conséquences organiques et sociales",
          "stepTheme": "Séparer conséquences organiques et sociales",
          "stepBadge": "Séparer conséquences organiques et sociales",
          "paragraphText": "Méthode : dans le texte, on trie les conséquences en deux groupes, celles qui touchent l’organisme et celles qui touchent la société.\nCe tri est celui de l’analyse du résumé et évite les confusions dans une réponse.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q4",
            "type": "mcq",
            "prompt": "La délinquance doit être classée parmi les conséquences :",
            "options": [
              "Organiques",
              "Nerveuses immédiates",
              "Sociales",
              "Mécaniques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse place la délinquance au niveau social."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L’effet immédiat ne résume pas les conséquences",
          "stepTheme": "L’effet immédiat ne résume pas les conséquences",
          "stepBadge": "L’effet immédiat ne résume pas les conséquences",
          "paragraphText": "Piège : l’excitation ou le calme ressentis juste après la prise ne sont pas les seules conséquences.\nLe résumé insiste sur les effets durables de la consommation régulière sur l’organisme et la société.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q5",
            "type": "mcq",
            "prompt": "Le texte du résumé porte sur les conséquences de la consommation :",
            "options": [
              "D’une seule prise exceptionnelle",
              "Régulière de la drogue",
              "Uniquement médicale encadrée",
              "Sans lien avec le système nerveux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’introduction du texte précise la consommation régulière."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Du centre de désintoxication aux conséquences durables",
          "stepTheme": "Du centre de désintoxication aux conséquences durables",
          "stepBadge": "Du centre de désintoxication aux conséquences durables",
          "paragraphText": "Exemple : les drogués en traitement dans le centre visité par le club santé illustrent que la consommation conduit à un état nécessitant des soins.\nLeur prise en charge relève des mesures curatives citées en conclusion générale.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q6",
            "type": "mcq",
            "prompt": "Les personnes en traitement dans le centre suivent une démarche :",
            "options": [
              "Préventive par sensibilisation",
              "Curative de désintoxication",
              "Uniquement sportive",
              "Judiciaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion générale cite la cure de désintoxication parmi les mesures curatives."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q1",
          "type": "mcq",
          "prompt": "La première conséquence organique citée est :",
          "options": [
            "L’éclatement de la famille",
            "La dégénérescence des neurones",
            "La délinquance",
            "L’insécurité sociale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte et son analyse placent la dégénérescence des neurones au niveau de l’organisme."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q2",
          "type": "mcq",
          "prompt": "La dégénérescence des neurones se manifeste notamment par :",
          "options": [
            "Une meilleure mémoire",
            "La perte de mémoire, la crise de nerfs et la folie",
            "Un amaigrissement seul",
            "Une excitation passagère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois manifestations listées dans l’analyse."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q3",
          "type": "mcq",
          "prompt": "L’amaigrissement du sujet est une conséquence :",
          "options": [
            "Sociale",
            "Familiale",
            "Sur l’organisme du consommateur",
            "Uniquement scolaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé le classe au niveau de l’organisme du consommateur."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q4",
          "type": "mcq",
          "prompt": "La délinquance doit être classée parmi les conséquences :",
          "options": [
            "Organiques",
            "Nerveuses immédiates",
            "Sociales",
            "Mécaniques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse place la délinquance au niveau social."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q5",
          "type": "mcq",
          "prompt": "Le texte du résumé porte sur les conséquences de la consommation :",
          "options": [
            "D’une seule prise exceptionnelle",
            "Régulière de la drogue",
            "Uniquement médicale encadrée",
            "Sans lien avec le système nerveux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’introduction du texte précise la consommation régulière."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p04_q6",
          "type": "mcq",
          "prompt": "Les personnes en traitement dans le centre suivent une démarche :",
          "options": [
            "Préventive par sensibilisation",
            "Curative de désintoxication",
            "Uniquement sportive",
            "Judiciaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion générale cite la cure de désintoxication parmi les mesures curatives."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05",
      "order": 5,
      "title": "Les conséquences sociales et la lutte contre la drogue",
      "summary": "La drogue dégrade aussi la vie sociale, mais on peut lutter par des mesures préventives et curatives.",
      "conceptExplanation": "Sur le plan social, la consommation de drogue provoque la délinquance, la dégradation des mœurs, l’insécurité sociale et l’éclatement de la famille.\nLa conclusion générale du résumé propose de lutter contre la consommation de la drogue en adoptant certaines mesures.\nLes mesures préventives sont : faire une large sensibilisation sur les méfaits de la drogue et préconiser une vie sans drogue.\nLes mesures curatives sont : procéder à une cure de désintoxication et faire une rééducation.\nLa visite du club santé dans un centre de désintoxication s’inscrit dans cette logique de sensibilisation et de prise en charge.",
      "keyRule": "Prévenir par la sensibilisation et une vie sans drogue ; guérir par la désintoxication et la rééducation.",
      "formulas": [],
      "workedExample": {
        "title": "Proposer des moyens pour éviter la consommation",
        "statement": "Les élèves du club santé cherchent des moyens pour éviter la consommation de drogue. Propose les mesures du résumé en les classant.",
        "methodSteps": [
          "On distingue d’abord les mesures qui empêchent la consommation : ce sont les mesures préventives.",
          "On cite la large sensibilisation sur les méfaits de la drogue et la préconisation d’une vie sans drogue.",
          "On ajoute, pour les personnes déjà dépendantes, les mesures curatives : cure de désintoxication et rééducation."
        ],
        "conclusion": "La lutte combine prévention et mesures curatives."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les conséquences sociales de la drogue",
          "stepTheme": "Les conséquences sociales de la drogue",
          "stepBadge": "Les conséquences sociales de la drogue",
          "paragraphText": "Au niveau social, le résumé cite la délinquance, la dégradation des mœurs, l’insécurité sociale et l’éclatement de la famille.\nCes conséquences touchent la société toute entière, pas seulement le consommateur.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q1",
            "type": "mcq",
            "prompt": "Parmi les conséquences suivantes, laquelle est sociale ?",
            "options": [
              "La dégénérescence des neurones",
              "L’amaigrissement",
              "L’éclatement de la famille",
              "La perte de mémoire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’éclatement de la famille est classé au niveau social dans l’analyse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les mesures préventives",
          "stepTheme": "Les mesures préventives",
          "stepBadge": "Les mesures préventives",
          "paragraphText": "• Mesures préventives : faire une large sensibilisation sur les méfaits de la drogue et préconiser une vie sans drogue.\nElles visent à éviter la consommation avant qu’elle ne commence.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q2",
            "type": "mcq",
            "prompt": "Faire une large sensibilisation sur les méfaits de la drogue est une mesure :",
            "options": [
              "Curative",
              "Préventive",
              "Inhibitrice",
              "Psychostimulante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion générale la classe parmi les mesures préventives."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les mesures curatives",
          "stepTheme": "Les mesures curatives",
          "stepBadge": "Les mesures curatives",
          "paragraphText": "• Mesures curatives : procéder à une cure de désintoxication et faire une rééducation.\nElles s’adressent aux personnes déjà consommatrices, comme celles du centre visité.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q3",
            "type": "mcq",
            "prompt": "Une cure de désintoxication est une mesure :",
            "options": [
              "Préventive",
              "Sociale seulement",
              "Curative",
              "Excitatrice"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle figure dans les mesures curatives de la conclusion générale."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Classer une mesure proposée",
          "stepTheme": "Classer une mesure proposée",
          "stepBadge": "Classer une mesure proposée",
          "paragraphText": "Méthode : si la mesure empêche de commencer, elle est préventive ; si elle soigne une dépendance installée, elle est curative.\nPréconiser une vie sans drogue est donc préventif, la rééducation est curative.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q4",
            "type": "mcq",
            "prompt": "Préconiser une vie sans drogue relève des mesures :",
            "options": [
              "Curatives",
              "Préventives",
              "Inhibitrices",
              "Analgésiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la seconde mesure préventive citée dans le résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre prévention et cure",
          "stepTheme": "Ne pas confondre prévention et cure",
          "stepBadge": "Ne pas confondre prévention et cure",
          "paragraphText": "Piège : la sensibilisation ne soigne pas un drogué déjà dépendant, et la désintoxication ne sensibilise pas les non-consommateurs.\nLes deux types de mesures sont complémentaires mais distincts.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q5",
            "type": "mcq",
            "prompt": "La rééducation d’un ancien consommateur est une mesure :",
            "options": [
              "Préventive",
              "Curative",
              "Excitatrice",
              "Sans rapport avec la lutte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion générale cite la rééducation parmi les mesures curatives."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le rôle du club santé",
          "stepTheme": "Le rôle du club santé",
          "stepBadge": "Le rôle du club santé",
          "paragraphText": "Exemple de la situation d’apprentissage : le club santé de l’établissement organise une sortie dans un centre de désintoxication.\nCette démarche informe les élèves et les prépare à proposer des moyens pour éviter la consommation.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q6",
            "type": "mcq",
            "prompt": "La sortie du club santé vise d’abord à :",
            "options": [
              "Consommer des drogues sous contrôle",
              "S’informer sur les drogues et proposer des moyens d’éviter leur consommation",
              "Fermer le centre",
              "Tester la nicotine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’objectif énoncé dans la situation d’apprentissage."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q1",
          "type": "mcq",
          "prompt": "Parmi les conséquences suivantes, laquelle est sociale ?",
          "options": [
            "La dégénérescence des neurones",
            "L’amaigrissement",
            "L’éclatement de la famille",
            "La perte de mémoire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’éclatement de la famille est classé au niveau social dans l’analyse."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q2",
          "type": "mcq",
          "prompt": "Faire une large sensibilisation sur les méfaits de la drogue est une mesure :",
          "options": [
            "Curative",
            "Préventive",
            "Inhibitrice",
            "Psychostimulante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion générale la classe parmi les mesures préventives."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q3",
          "type": "mcq",
          "prompt": "Une cure de désintoxication est une mesure :",
          "options": [
            "Préventive",
            "Sociale seulement",
            "Curative",
            "Excitatrice"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle figure dans les mesures curatives de la conclusion générale."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q4",
          "type": "mcq",
          "prompt": "Préconiser une vie sans drogue relève des mesures :",
          "options": [
            "Curatives",
            "Préventives",
            "Inhibitrices",
            "Analgésiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la seconde mesure préventive citée dans le résumé."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q5",
          "type": "mcq",
          "prompt": "La rééducation d’un ancien consommateur est une mesure :",
          "options": [
            "Préventive",
            "Curative",
            "Excitatrice",
            "Sans rapport avec la lutte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion générale cite la rééducation parmi les mesures curatives."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p05_q6",
          "type": "mcq",
          "prompt": "La sortie du club santé vise d’abord à :",
          "options": [
            "Consommer des drogues sous contrôle",
            "S’informer sur les drogues et proposer des moyens d’éviter leur consommation",
            "Fermer le centre",
            "Tester la nicotine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’objectif énoncé dans la situation d’apprentissage."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06",
      "order": 6,
      "title": "Amphétamine et cocaïne : deux excitateurs à distinguer",
      "summary": "La situation d’évaluation et l’exercice 3 demandent de distinguer précisément l’action de l’amphétamine et celle de la cocaïne.",
      "conceptExplanation": "Le corrigé de la situation d’évaluation indique que l’amphétamine et la cocaïne agissent au niveau de la synapse.\nL’amphétamine agit au niveau du neurone présynaptique en favorisant la libération du neuromédiateur dans la fente synaptique : la concentration élevée du neuromédiateur exerce une stimulation permanente du neurone postsynaptique.\nLa cocaïne agit également au niveau du neurone présynaptique en empêchant la réabsorption du neuromédiateur, ce qui a pour conséquence une stimulation anormalement prolongée du neurone postsynaptique.\nOn en déduit que l’amphétamine et la cocaïne ont des effets excitateurs ou psychostimulants, même si leurs mécanismes diffèrent. L’exercice 3 ajoute que, dans son corrigé, les molécules de cocaïne provoquent la libération continue de la dopamine dans la fente selon l’interprétation du document 2.",
      "keyRule": "Même effet psychostimulant, deux mécanismes : l’amphétamine libère plus, la cocaïne empêche la recapture.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’effet de l’amphétamine et de la cocaïne (situation d’évaluation)",
        "statement": "Le professeur affirme que les deux drogues ont les mêmes effets. Explique l’action de chacune puis déduis leur effet commun.",
        "methodSteps": [
          "Le site d’action des deux drogues est la synapse, au niveau présynaptique.",
          "L’amphétamine favorise la libération du neuromédiateur et la cocaïne empêche sa réabsorption.",
          "Dans les deux cas, le neurone postsynaptique est stimulé de façon prolongée."
        ],
        "conclusion": "Les deux drogues sont excitatrices ou psychostimulantes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le site d’action commun : la synapse",
          "stepTheme": "Le site d’action commun : la synapse",
          "stepBadge": "Le site d’action commun : la synapse",
          "paragraphText": "Le corrigé relève que l’amphétamine et la cocaïne agissent au niveau de la synapse.\nC’est le site où se joue la transmission du message nerveux entre neurones.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q1",
            "type": "mcq",
            "prompt": "Le site d’action de l’amphétamine et de la cocaïne est :",
            "options": [
              "Le ganglion seul",
              "La synapse",
              "Le muscle",
              "Le noyau du neurone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la réponse à la première question de la situation d’évaluation corrigée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’action propre de l’amphétamine",
          "stepTheme": "L’action propre de l’amphétamine",
          "stepBadge": "L’action propre de l’amphétamine",
          "paragraphText": "L’amphétamine favorise la libération du neuromédiateur dans la fente synaptique.\nLa concentration élevée du neuromédiateur exerce une stimulation permanente du neurone postsynaptique.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q2",
            "type": "mcq",
            "prompt": "L’amphétamine agit en :",
            "options": [
              "Empêchant la réabsorption du neuromédiateur",
              "Favorisant la libération du neuromédiateur",
              "Bloquant les récepteurs",
              "Bloquant la libération"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’explication du corrigé pour l’amphétamine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’action propre de la cocaïne",
          "stepTheme": "L’action propre de la cocaïne",
          "stepBadge": "L’action propre de la cocaïne",
          "paragraphText": "La cocaïne empêche la réabsorption du neuromédiateur par le neurone présynaptique.\nLa conséquence est une stimulation anormalement prolongée du neurone postsynaptique.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q3",
            "type": "mcq",
            "prompt": "La cocaïne agit en :",
            "options": [
              "Favorisant uniquement la libération",
              "Empêchant la réabsorption du neuromédiateur",
              "Hydrolysant la dopamine",
              "Bloquant la substance P"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’explication du corrigé pour la cocaïne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Répondre en trois temps à la situation",
          "stepTheme": "Répondre en trois temps à la situation",
          "stepBadge": "Répondre en trois temps à la situation",
          "paragraphText": "Méthode du corrigé : relever d’abord le site d’action, expliquer ensuite l’action de chaque drogue séparément, puis déduire l’effet commun.\nCette progression évite de confondre mécanisme et effet.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q4",
            "type": "mcq",
            "prompt": "La déduction finale de la situation d’évaluation est que les deux drogues sont :",
            "options": [
              "Inhibitrices",
              "Psychodépressives",
              "Excitatrices ou psychostimulantes",
              "Analgésiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé conclut à des effets excitateurs ou psychostimulants."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Même effet ne veut pas dire même mécanisme",
          "stepTheme": "Même effet ne veut pas dire même mécanisme",
          "stepBadge": "Même effet ne veut pas dire même mécanisme",
          "paragraphText": "Piège : dire que les deux drogues ont les mêmes effets ne signifie pas qu’elles agissent de la même façon.\nL’une favorise la libération, l’autre empêche la réabsorption : les mécanismes restent distincts.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q5",
            "type": "mcq",
            "prompt": "L’amphétamine et la cocaïne se distinguent par :",
            "options": [
              "Leur site d’action, muscle contre synapse",
              "Leur mécanisme, libération favorisée contre recapture empêchée",
              "Leur effet, excitateur contre inhibiteur",
              "Leur absence d’effet nerveux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé distingue les deux mécanismes pour un même effet excitateur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le fonctionnement normal rappelé par l’exercice 3",
          "stepTheme": "Le fonctionnement normal rappelé par l’exercice 3",
          "stepBadge": "Le fonctionnement normal rappelé par l’exercice 3",
          "paragraphText": "Exemple : le corrigé de l’exercice 3 rappelle qu’en fonctionnement normal, l’arrivée du message ouvre les canaux calciques, l’entrée de Ca2+ provoque la libération par exocytose, puis les neuromédiateurs libérés sont réabsorbés par le bouton présynaptique.\nC’est cette réabsorption que la cocaïne perturbe.",
          "exercise": {
            "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q6",
            "type": "mcq",
            "prompt": "En fonctionnement normal, après fixation, les neuromédiateurs libérés sont :",
            "options": [
              "Détruits définitivement dans la fente",
              "Réabsorbés par le bouton présynaptique",
              "Transformés en ATP",
              "Stockés dans le muscle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la fin du rappel du fonctionnement normal dans le corrigé de l’exercice 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q1",
          "type": "mcq",
          "prompt": "Le site d’action de l’amphétamine et de la cocaïne est :",
          "options": [
            "Le ganglion seul",
            "La synapse",
            "Le muscle",
            "Le noyau du neurone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la réponse à la première question de la situation d’évaluation corrigée."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q2",
          "type": "mcq",
          "prompt": "L’amphétamine agit en :",
          "options": [
            "Empêchant la réabsorption du neuromédiateur",
            "Favorisant la libération du neuromédiateur",
            "Bloquant les récepteurs",
            "Bloquant la libération"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’explication du corrigé pour l’amphétamine."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q3",
          "type": "mcq",
          "prompt": "La cocaïne agit en :",
          "options": [
            "Favorisant uniquement la libération",
            "Empêchant la réabsorption du neuromédiateur",
            "Hydrolysant la dopamine",
            "Bloquant la substance P"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’explication du corrigé pour la cocaïne."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q4",
          "type": "mcq",
          "prompt": "La déduction finale de la situation d’évaluation est que les deux drogues sont :",
          "options": [
            "Inhibitrices",
            "Psychodépressives",
            "Excitatrices ou psychostimulantes",
            "Analgésiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé conclut à des effets excitateurs ou psychostimulants."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q5",
          "type": "mcq",
          "prompt": "L’amphétamine et la cocaïne se distinguent par :",
          "options": [
            "Leur site d’action, muscle contre synapse",
            "Leur mécanisme, libération favorisée contre recapture empêchée",
            "Leur effet, excitateur contre inhibiteur",
            "Leur absence d’effet nerveux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé distingue les deux mécanismes pour un même effet excitateur."
        },
        {
          "id": "terminale_c_svt_l02_drogues_systeme_nerveux_p06_q6",
          "type": "mcq",
          "prompt": "En fonctionnement normal, après fixation, les neuromédiateurs libérés sont :",
          "options": [
            "Détruits définitivement dans la fente",
            "Réabsorbés par le bouton présynaptique",
            "Transformés en ATP",
            "Stockés dans le muscle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la fin du rappel du fonctionnement normal dans le corrigé de l’exercice 3."
        }
      ]
    }
  ]
};
