import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 5 : Le système de défense de l'organisme » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2124
export const SVT_TLE_C_L05_SYSTEME_DEFENSE_ORGANISME: CurriculumChapter = {
  "id": "terminale_c_svt_l05_systeme_defense_organisme",
  "subjectId": "svt",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 5,
  "title": "Leçon 5 : Le système de défense de l'organisme",
  "summary": "L’organisme se défend contre les corps étrangers par une défense non spécifique innée et par une défense spécifique à médiation humorale ou cellulaire, selon un mécanisme en trois phases.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2124",
  "points": [
    {
      "id": "terminale_c_svt_l05_systeme_defense_organisme_p01",
      "order": 1,
      "title": "Les barrières naturelles et la réaction inflammatoire",
      "summary": "La peau et les muqueuses forment la première ligne de défense et leur franchissement déclenche une réaction inflammatoire locale.",
      "conceptExplanation": "La peau et les muqueuses représentent des barrières naturelles de l’organisme et constituent la première ligne de défense, capables d’arrêter les microbes avant une véritable infection.\nOn distingue les barrières mécaniques comme la peau et les muqueuses nasales et bronchiques, les barrières chimiques comme la sueur de pH 3,5, les larmes, le mucus et la salive contenant des lysozymes, l’acide gastrique de pH compris entre 1 et 2, les sécrétions alcalines du duodénum de pH 8, le sperme et les sécrétions vaginales, et la barrière biologique des bactéries non pathogènes du tube digestif.\nL’ouverture de la peau après une piqûre d’épine favorise l’entrée des bactéries. La réaction locale qui se produit se manifeste par une chaleur, une rougeur, une douleur, une enflure et une perte des fonctions des tissus : c’est la réaction inflammatoire.\nAu niveau du doigt piqué, on observe en plus une dilatation des capillaires sanguins et une agglomération des globules blancs autour des microbes.",
      "keyRule": "Première ligne = barrières mécaniques, chimiques et biologiques ; leur franchissement déclenche l’inflammation locale.",
      "formulas": [],
      "workedExample": {
        "title": "L’état du doigt avant et après piqûre d’épine",
        "statement": "Compare l’état du doigt avant et après la piqûre et interprète les changements observés.",
        "methodSteps": [
          "Avant la piqûre, les capillaires ont une taille normale et le doigt une forme normale.",
          "Après la piqûre, les capillaires se dilatent, les globules blancs s’agglomèrent autour des microbes et la peau enfle.",
          "Ces signes correspondent à la réaction inflammatoire locale après franchissement de la barrière cutanée."
        ],
        "conclusion": "La piqûre ouvre la peau et déclenche la défense non spécifique locale."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les barrières mécaniques",
          "stepTheme": "Les barrières mécaniques",
          "stepBadge": "Les barrières mécaniques",
          "paragraphText": "• Barrières mécaniques : la peau et les muqueuses nasales et bronchiques.\nLa peau, constamment renouvelée, est imperméable à la plupart des microbes grâce à sa couche cornée.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q1",
            "type": "mcq",
            "prompt": "La peau est une barrière :",
            "options": [
              "Chimique",
              "Biologique",
              "Mécanique",
              "Spécifique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé la classe parmi les barrières mécaniques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les barrières chimiques",
          "stepTheme": "Les barrières chimiques",
          "stepBadge": "Les barrières chimiques",
          "paragraphText": "• Barrières chimiques : sueur de pH 3,5, larmes, mucus et salive à lysozymes, acide gastrique de pH 1 à 2, sécrétions alcalines du duodénum de pH 8, sperme et sécrétions vaginales.\nLeurs propriétés chimiques s’opposent au développement de nombreux microbes.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q2",
            "type": "mcq",
            "prompt": "Le lysozyme se trouve notamment dans :",
            "options": [
              "Le sang uniquement",
              "Les larmes, le mucus nasal et la salive",
              "Les ganglions uniquement",
              "La moelle osseuse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document 2 cite ces trois sécrétions contenant le lysozyme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La barrière biologique",
          "stepTheme": "La barrière biologique",
          "stepBadge": "La barrière biologique",
          "paragraphText": "• Barrière biologique : bactéries non pathogènes qui vivent dans le tube digestif en y maintenant des conditions défavorables pour de nombreux microbes.\nElles occupent le milieu et limitent l’installation des microbes pathogènes.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q3",
            "type": "mcq",
            "prompt": "La barrière biologique est constituée par :",
            "options": [
              "Des anticorps",
              "Des bactéries non pathogènes du tube digestif",
              "Des lymphocytes T",
              "De l’acide gastrique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La réaction inflammatoire",
          "stepTheme": "La réaction inflammatoire",
          "stepBadge": "La réaction inflammatoire",
          "paragraphText": "• Réaction inflammatoire : réaction locale au point d’entrée des microbes, manifestée par chaleur, rougeur, douleur, enflure et perte des fonctions des tissus.\nElle suit le franchissement de la peau, par exemple après une piqûre d’épine.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q4",
            "type": "mcq",
            "prompt": "Un signe de la réaction inflammatoire est :",
            "options": [
              "La production d’anticorps spécifiques",
              "La rougeur et l’enflure locales",
              "Le rejet de greffe",
              "La cytolyse par perforine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les manifestations listées dans le résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Première ligne ne veut pas dire défense spécifique",
          "stepTheme": "Première ligne ne veut pas dire défense spécifique",
          "stepBadge": "Première ligne ne veut pas dire défense spécifique",
          "paragraphText": "Piège : les barrières naturelles appartiennent à la défense non spécifique, innée et immédiate.\nElles arrêtent les microbes sans tenir compte de leur nature précise.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q5",
            "type": "mcq",
            "prompt": "Les barrières naturelles font partie de la défense :",
            "options": [
              "Spécifique acquise",
              "Non spécifique innée",
              "Humorale",
              "Cellulaire à lymphocytes T"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé conclut à une défense innée, immédiate et non propre à un antigène déterminé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le doigt piqué par une épine",
          "stepTheme": "Le doigt piqué par une épine",
          "stepBadge": "Le doigt piqué par une épine",
          "paragraphText": "Exemple : après la piqûre, les capillaires se dilatent et les globules blancs s’agglomèrent autour des microbes, avec enflure de la peau.\nAvant la piqûre, tous les éléments étaient dans les capillaires et le doigt avait une forme normale.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q6",
            "type": "mcq",
            "prompt": "Après la piqûre, les globules blancs :",
            "options": [
              "Restent tous dans les capillaires sans bouger",
              "S’agglomèrent autour des microbes",
              "Se transforment en anticorps",
              "Disparaissent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le tableau de l’état du doigt après piqûre."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q1",
          "type": "mcq",
          "prompt": "La peau est une barrière :",
          "options": [
            "Chimique",
            "Biologique",
            "Mécanique",
            "Spécifique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé la classe parmi les barrières mécaniques."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q2",
          "type": "mcq",
          "prompt": "Le lysozyme se trouve notamment dans :",
          "options": [
            "Le sang uniquement",
            "Les larmes, le mucus nasal et la salive",
            "Les ganglions uniquement",
            "La moelle osseuse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document 2 cite ces trois sécrétions contenant le lysozyme."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q3",
          "type": "mcq",
          "prompt": "La barrière biologique est constituée par :",
          "options": [
            "Des anticorps",
            "Des bactéries non pathogènes du tube digestif",
            "Des lymphocytes T",
            "De l’acide gastrique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition du résumé."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q4",
          "type": "mcq",
          "prompt": "Un signe de la réaction inflammatoire est :",
          "options": [
            "La production d’anticorps spécifiques",
            "La rougeur et l’enflure locales",
            "Le rejet de greffe",
            "La cytolyse par perforine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les manifestations listées dans le résumé."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q5",
          "type": "mcq",
          "prompt": "Les barrières naturelles font partie de la défense :",
          "options": [
            "Spécifique acquise",
            "Non spécifique innée",
            "Humorale",
            "Cellulaire à lymphocytes T"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé conclut à une défense innée, immédiate et non propre à un antigène déterminé."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p01_q6",
          "type": "mcq",
          "prompt": "Après la piqûre, les globules blancs :",
          "options": [
            "Restent tous dans les capillaires sans bouger",
            "S’agglomèrent autour des microbes",
            "Se transforment en anticorps",
            "Disparaissent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le tableau de l’état du doigt après piqûre."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l05_systeme_defense_organisme_p02",
      "order": 2,
      "title": "La phagocytose et les étapes de l’infection",
      "summary": "Les polynucléaires puis les macrophages phagocytent les microbes ; si les barrières tombent, l’infection peut devenir généralisée.",
      "conceptExplanation": "À la plaie, ce sont d’abord les polynucléaires, ou microphages ou encore granulocytes, qui interviennent. Ensuite viennent de grosses cellules très mobiles, les macrophages, qui proviennent de la différenciation des monocytes et qui continuent et intensifient la lutte.\nLes polynucléaires et les macrophages sont capables de reconnaître, d’englober puis de digérer les microbes : cette propriété est la phagocytose, d’où le nom de phagocytes.\nLors de la phagocytose, trois cas peuvent se présenter : les bactéries sont phagocytées et l’infection régresse ; les bactéries restent intactes et l’infection reste stationnaire ; ou les bactéries sortent vainqueurs, prolifèrent et gagnent les ganglions lymphatiques, seconde barrière, avec adénite et lymphangite.\nSi les bactéries franchissent les ganglions puis résistent au foie, elles envahissent tout l’organisme : c’est la réaction généralisée ou septicémie. Quand les microbes sécrètent des toxines qui diffusent, on parle de toxémie.",
      "keyRule": "Phagocytose par polynucléaires puis macrophages ; échec successif des barrières conduit à la septicémie.",
      "formulas": [],
      "workedExample": {
        "title": "Les trois issues de la phagocytose",
        "statement": "Décris les trois cas possibles lors de la phagocytose des bactéries à une plaie.",
        "methodSteps": [
          "Premier cas : les bactéries sont phagocytées et l’infection régresse.",
          "Deuxième cas : les bactéries restent intactes et l’infection reste stationnaire.",
          "Troisième cas : les bactéries vainquent, prolifèrent et gagnent les vaisseaux et ganglions lymphatiques."
        ],
        "conclusion": "L’issue de la phagocytose décide de l’évolution locale ou généralisée de l’infection."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la phagocytose",
          "stepTheme": "Définition de la phagocytose",
          "stepBadge": "Définition de la phagocytose",
          "paragraphText": "• Phagocytose : propriété de reconnaître, d’englober puis de digérer les microbes.\nElle est exercée par les phagocytes, c’est-à-dire les macrophages et les polynucléaires.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q1",
            "type": "mcq",
            "prompt": "La phagocytose consiste à :",
            "options": [
              "Produire des anticorps",
              "Reconnaître, englober puis digérer les microbes",
              "Bloquer les récepteurs",
              "Sécréter de la perforine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’ordre d’intervention des phagocytes",
          "stepTheme": "L’ordre d’intervention des phagocytes",
          "stepBadge": "L’ordre d’intervention des phagocytes",
          "paragraphText": "Ce sont d’abord les polynucléaires qui interviennent au niveau de la plaie.\nEnsuite, les macrophages, issus de la différenciation des monocytes, continuent et intensifient la lutte.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q2",
            "type": "mcq",
            "prompt": "Les premiers phagocytes à intervenir à la plaie sont :",
            "options": [
              "Les macrophages",
              "Les polynucléaires ou microphages",
              "Les plasmocytes",
              "Les lymphocytes B"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé dit que c’est d’abord les polynucléaires."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Adénite et lymphangite",
          "stepTheme": "Adénite et lymphangite",
          "stepBadge": "Adénite et lymphangite",
          "paragraphText": "• Adénite : gonflement douloureux des ganglions lymphatiques entrés en action. • Lymphangite : gonflement des vaisseaux lymphatiques.\nCette réaction ganglionnaire correspond à la seconde barrière de l’organisme.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q3",
            "type": "mcq",
            "prompt": "La seconde barrière après la plaie est constituée par :",
            "options": [
              "Le foie seul",
              "Les ganglions lymphatiques",
              "La peau",
              "Les anticorps circulants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé nomme les ganglions comme seconde barrière."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Septicémie et toxémie",
          "stepTheme": "Septicémie et toxémie",
          "stepBadge": "Septicémie et toxémie",
          "paragraphText": "• Septicémie ou réaction généralisée : invasion de tout l’organisme par les microbes passés dans la circulation sanguine. • Toxémie : diffusion dans l’organisme des toxines sécrétées par les microbes.\nUne toxine est une substance produite par un microbe, à pouvoir pathogène.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q4",
            "type": "mcq",
            "prompt": "La septicémie correspond à :",
            "options": [
              "Une simple enflure locale",
              "L’invasion de tout l’organisme par les microbes",
              "La seule diffusion de toxines",
              "Un rejet de greffe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la réaction généralisée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Stationnaire ne veut pas dire guéri",
          "stepTheme": "Stationnaire ne veut pas dire guéri",
          "stepBadge": "Stationnaire ne veut pas dire guéri",
          "paragraphText": "Piège : si les bactéries restent intactes sans être détruites, l’infection reste dans un état stationnaire et peut se multiplier plus tard.\nElle n’a ni régressé ni encore gagné l’organisme entier.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q5",
            "type": "mcq",
            "prompt": "Si les bactéries restent intactes après la phagocytose, l’infection :",
            "options": [
              "Régresse toujours",
              "Reste stationnaire",
              "Devient une septicémie immédiate",
              "Est transformée en toxémie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le deuxième cas décrit dans le résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le foie, dernière résistance avant la septicémie",
          "stepTheme": "Le foie, dernière résistance avant la septicémie",
          "stepBadge": "Le foie, dernière résistance avant la septicémie",
          "paragraphText": "Exemple : si les bactéries franchissent les ganglions, elles passent dans la circulation sanguine et le foie oppose une dernière résistance grâce à ses phagocytes mobilisés.\nSi le foie est vaincu, c’est la septicémie.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q6",
            "type": "mcq",
            "prompt": "La dernière résistance avant l’invasion générale est opposée par :",
            "options": [
              "La peau",
              "Le foie et ses phagocytes",
              "Les larmes",
              "Le thymus"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’étape décrite juste avant la septicémie."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q1",
          "type": "mcq",
          "prompt": "La phagocytose consiste à :",
          "options": [
            "Produire des anticorps",
            "Reconnaître, englober puis digérer les microbes",
            "Bloquer les récepteurs",
            "Sécréter de la perforine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition du résumé."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q2",
          "type": "mcq",
          "prompt": "Les premiers phagocytes à intervenir à la plaie sont :",
          "options": [
            "Les macrophages",
            "Les polynucléaires ou microphages",
            "Les plasmocytes",
            "Les lymphocytes B"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé dit que c’est d’abord les polynucléaires."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q3",
          "type": "mcq",
          "prompt": "La seconde barrière après la plaie est constituée par :",
          "options": [
            "Le foie seul",
            "Les ganglions lymphatiques",
            "La peau",
            "Les anticorps circulants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé nomme les ganglions comme seconde barrière."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q4",
          "type": "mcq",
          "prompt": "La septicémie correspond à :",
          "options": [
            "Une simple enflure locale",
            "L’invasion de tout l’organisme par les microbes",
            "La seule diffusion de toxines",
            "Un rejet de greffe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la réaction généralisée."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q5",
          "type": "mcq",
          "prompt": "Si les bactéries restent intactes après la phagocytose, l’infection :",
          "options": [
            "Régresse toujours",
            "Reste stationnaire",
            "Devient une septicémie immédiate",
            "Est transformée en toxémie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le deuxième cas décrit dans le résumé."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p02_q6",
          "type": "mcq",
          "prompt": "La dernière résistance avant l’invasion générale est opposée par :",
          "options": [
            "La peau",
            "Le foie et ses phagocytes",
            "Les larmes",
            "Le thymus"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’étape décrite juste avant la septicémie."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l05_systeme_defense_organisme_p03",
      "order": 3,
      "title": "La défense spécifique mise en évidence par les expériences sur les souris",
      "summary": "L’anatoxine tétanique protège contre la toxine tétanique mais pas contre la toxine diphtérique : la défense est spécifique.",
      "conceptExplanation": "Dans l’expérience 1, la souris témoin qui reçoit seulement la toxine tétanique meurt. La souris A1, qui reçoit l’anatoxine tétanique puis 15 jours plus tard la toxine tétanique, survit ; la souris A2, traitée à l’anatoxine tétanique puis recevant la toxine diphtérique, meurt.\nOn appelle anatoxine une toxine microbienne atténuée, qui a perdu son pouvoir pathogène tout en conservant son pouvoir antigénique.\nL’anatoxine tétanique protège donc contre la toxine tétanique mais pas contre la toxine diphtérique : il s’agit de la défense spécifique ou acquise, ou immunité spécifique.\nLa campagne de vaccination contre le tétanos de la situation d’apprentissage repose sur ce principe : préparer l’organisme à se défendre contre un corps étranger précis, en tenant compte de sa nature.",
      "keyRule": "Spécifique veut dire : protection contre l’antigène précis qui a immunisé, pas contre un autre.",
      "formulas": [],
      "workedExample": {
        "title": "Expérience 1 : anatoxine et toxines",
        "statement": "Analyse le sort des souris témoin, A1 et A2 et conclus sur la nature de la défense mise en évidence.",
        "methodSteps": [
          "La souris témoin meurt après la toxine tétanique et A2 meurt après la toxine diphtérique malgré l’anatoxine tétanique.",
          "A1 survit à la toxine tétanique après anatoxine tétanique.",
          "La protection ne vaut donc que pour l’antigène correspondant : la défense est spécifique."
        ],
        "conclusion": "L’organisme se défend contre un corps étranger précis en tenant compte de sa nature."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d’une anatoxine",
          "stepTheme": "Définition d’une anatoxine",
          "stepBadge": "Définition d’une anatoxine",
          "paragraphText": "• Anatoxine : toxine microbienne atténuée qui a perdu son pouvoir pathogène tout en conservant son pouvoir antigénique.\nL’anatoxine tétanique est utilisée pour immuniser dans les expériences.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q1",
            "type": "mcq",
            "prompt": "Une anatoxine a conservé son pouvoir :",
            "options": [
              "Pathogène",
              "Antigénique",
              "Toxique mortel",
              "Phagocytaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de l’interprétation de l’expérience 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le résultat décisif de l’expérience 1",
          "stepTheme": "Le résultat décisif de l’expérience 1",
          "stepBadge": "Le résultat décisif de l’expérience 1",
          "paragraphText": "La souris A1 traitée à l’anatoxine tétanique survit à la toxine tétanique, alors que A2 meurt après la toxine diphtérique.\nLe témoin non traité meurt aussi après la toxine tétanique.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q2",
            "type": "mcq",
            "prompt": "La souris A1 survit car elle avait reçu :",
            "options": [
              "La toxine diphtérique",
              "L’anatoxine tétanique correspondant à la toxine injectée ensuite",
              "Le sérum d’un témoin",
              "Des lymphocytes de cobaye"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’analyse de l’expérience 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Définition de la défense spécifique",
          "stepTheme": "Définition de la défense spécifique",
          "stepBadge": "Définition de la défense spécifique",
          "paragraphText": "• Défense spécifique ou acquise : défense dirigée contre un corps étranger précis, en tenant compte de sa nature.\nElle s’oppose à la défense non spécifique qui ne tient pas compte de la nature des corps étrangers.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q3",
            "type": "mcq",
            "prompt": "La défense spécifique est aussi appelée défense :",
            "options": [
              "Innée",
              "Acquise",
              "Mécanique",
              "Chimique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé emploie défense spécifique ou acquise."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Conclure à la spécificité",
          "stepTheme": "Conclure à la spécificité",
          "stepBadge": "Conclure à la spécificité",
          "paragraphText": "Méthode : si le traitement protège contre un antigène et pas contre un autre, la défense est spécifique.\nC’est la comparaison A1 contre A2 qui permet cette conclusion.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q4",
            "type": "mcq",
            "prompt": "Pour conclure à une défense spécifique, il faut observer :",
            "options": [
              "Une protection contre tous les microbes sans distinction",
              "Une protection contre l’antigène correspondant mais pas contre un autre",
              "Uniquement une inflammation",
              "Uniquement une phagocytose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "A1 survit au tétanique et A2 meurt au diphtérique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L’anatoxine n’est pas la toxine active",
          "stepTheme": "L’anatoxine n’est pas la toxine active",
          "stepBadge": "L’anatoxine n’est pas la toxine active",
          "paragraphText": "Piège : l’anatoxine a perdu son pouvoir pathogène ; elle ne rend pas malade comme la toxine.\nC’est précisément ce qui permet son usage pour immuniser, comme dans la vaccination antitétanique.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q5",
            "type": "mcq",
            "prompt": "L’anatoxine se distingue de la toxine car elle a perdu :",
            "options": [
              "Son pouvoir antigénique",
              "Son pouvoir pathogène",
              "Toute ressemblance avec la toxine",
              "Son lien avec le tétanos"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle conserve le pouvoir antigénique mais perd le pouvoir pathogène."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La vaccination contre le tétanos",
          "stepTheme": "La vaccination contre le tétanos",
          "stepBadge": "La vaccination contre le tétanos",
          "paragraphText": "Exemple de la situation d’apprentissage : le médecin affirme que le vaccin permettra à l’organisme des élèves vaccinés de se défendre contre le tétanos.\nIl s’agit d’une défense préparée contre un antigène précis.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q6",
            "type": "mcq",
            "prompt": "La vaccination contre le tétanos prépare une défense :",
            "options": [
              "Non spécifique contre tous les microbes",
              "Spécifique contre le tétanos",
              "Uniquement mécanique",
              "Uniquement par phagocytose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le lien entre la situation d’apprentissage et l’expérience 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q1",
          "type": "mcq",
          "prompt": "Une anatoxine a conservé son pouvoir :",
          "options": [
            "Pathogène",
            "Antigénique",
            "Toxique mortel",
            "Phagocytaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de l’interprétation de l’expérience 1."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q2",
          "type": "mcq",
          "prompt": "La souris A1 survit car elle avait reçu :",
          "options": [
            "La toxine diphtérique",
            "L’anatoxine tétanique correspondant à la toxine injectée ensuite",
            "Le sérum d’un témoin",
            "Des lymphocytes de cobaye"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’analyse de l’expérience 1."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q3",
          "type": "mcq",
          "prompt": "La défense spécifique est aussi appelée défense :",
          "options": [
            "Innée",
            "Acquise",
            "Mécanique",
            "Chimique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé emploie défense spécifique ou acquise."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q4",
          "type": "mcq",
          "prompt": "Pour conclure à une défense spécifique, il faut observer :",
          "options": [
            "Une protection contre tous les microbes sans distinction",
            "Une protection contre l’antigène correspondant mais pas contre un autre",
            "Uniquement une inflammation",
            "Uniquement une phagocytose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "A1 survit au tétanique et A2 meurt au diphtérique."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q5",
          "type": "mcq",
          "prompt": "L’anatoxine se distingue de la toxine car elle a perdu :",
          "options": [
            "Son pouvoir antigénique",
            "Son pouvoir pathogène",
            "Toute ressemblance avec la toxine",
            "Son lien avec le tétanos"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle conserve le pouvoir antigénique mais perd le pouvoir pathogène."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p03_q6",
          "type": "mcq",
          "prompt": "La vaccination contre le tétanos prépare une défense :",
          "options": [
            "Non spécifique contre tous les microbes",
            "Spécifique contre le tétanos",
            "Uniquement mécanique",
            "Uniquement par phagocytose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le lien entre la situation d’apprentissage et l’expérience 1."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l05_systeme_defense_organisme_p04",
      "order": 4,
      "title": "La réponse immunitaire à médiation humorale et les anticorps",
      "summary": "Le sérum d’un animal immunisé protège grâce aux anticorps, protéines immunoglobulines produites par les plasmocytes.",
      "conceptExplanation": "Dans l’expérience 2, la souris B1 qui reçoit le sérum d’une souris traitée à l’anatoxine tétanique survit à la toxine tétanique, tandis que B2, qui reçoit le sérum d’une souris témoin, meurt.\nOn peut donc protéger immédiatement et momentanément un animal en lui injectant le sérum d’un animal préalablement immunisé. Cette protection est due à une substance circulant dans le milieu intérieur, formée après l’injection d’anatoxine : c’est la réponse immunitaire humorale ou à médiation humorale.\nLes molécules de cette immunité sont les anticorps, protéines du groupe des immunoglobulines. On distingue 5 classes : IgA, IgE, IgD, IgG et IgM.\nLes anticorps jouent un rôle dans la phagocytose des bactéries, dans la lyse par les cellules tueuses et dans la lyse par activation du complément. Ce sont les IgG qui provoquent l’activation du complément, ensemble de protéines du sérum inactives hors immunisation, activées par le complexe antigène-anticorps et entraînant la lyse. Les anticorps sont donc les véritables effecteurs de l’immunité humorale.",
      "keyRule": "Humorale = anticorps circulants dans le sérum ; les IgG activent le complément qui lyse les bactéries.",
      "formulas": [],
      "workedExample": {
        "title": "Expérience 2 : le transfert par le sérum",
        "statement": "Explique pourquoi B1 survit et B2 meurt après injection de toxine tétanique, et nomme le type de réponse immunitaire.",
        "methodSteps": [
          "B1 a reçu le sérum d’un animal immunisé, qui contient la substance protectrice formée après l’anatoxine.",
          "B2 a reçu le sérum d’un témoin non traité, sans cette substance, et meurt.",
          "La protection par une substance du sérum définit la réponse immunitaire à médiation humorale."
        ],
        "conclusion": "Les effecteurs de cette réponse sont les anticorps."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la réponse humorale",
          "stepTheme": "Définition de la réponse humorale",
          "stepBadge": "Définition de la réponse humorale",
          "paragraphText": "• Réponse immunitaire humorale : réponse assurée par une substance circulant dans le milieu intérieur, transférée par le sérum d’un animal immunisé.\nSes molécules effectrices sont les anticorps.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q1",
            "type": "mcq",
            "prompt": "La réponse humorale est transférée par :",
            "options": [
              "Des lymphocytes vivants uniquement",
              "Le sérum d’un animal immunisé",
              "La peau",
              "Des macrophages seuls"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation de l’expérience 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les anticorps et leurs classes",
          "stepTheme": "Les anticorps et leurs classes",
          "stepBadge": "Les anticorps et leurs classes",
          "paragraphText": "• Anticorps : protéines du groupe des immunoglobulines, effecteurs de l’immunité humorale.\nOn distingue 5 classes : IgA, IgE, IgD, IgG et IgM.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q2",
            "type": "mcq",
            "prompt": "Combien de classes d’immunoglobulines le résumé distingue-t-il ?",
            "options": [
              "3 classes",
              "5 classes : IgA, IgE, IgD, IgG et IgM",
              "2 classes",
              "8 classes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La liste du résumé comporte exactement ces 5 classes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle du complément",
          "stepTheme": "Le rôle du complément",
          "stepBadge": "Le rôle du complément",
          "paragraphText": "Le complément est un ensemble de protéines du sérum, présentes hors de toute immunisation et inactives.\nLe complexe antigène-anticorps active ses fractions, ce qui entraîne la lyse des bactéries et autres antigènes particulaires.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q3",
            "type": "mcq",
            "prompt": "Le complément est activé par :",
            "options": [
              "Le seul macrophage",
              "Le complexe antigène-anticorps",
              "La perforine",
              "Le CMH seul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé parle de fixation et d’activation par le complexe immun."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les IgG et le complément",
          "stepTheme": "Les IgG et le complément",
          "stepBadge": "Les IgG et le complément",
          "paragraphText": "Ce sont les IgG qui provoquent l’activation du complément selon le résumé.\nLes anticorps aident aussi la phagocytose et la lyse par les cellules tueuses.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q4",
            "type": "mcq",
            "prompt": "Les immunoglobulines qui provoquent l’activation du complément sont :",
            "options": [
              "Les IgA",
              "Les IgE",
              "Les IgG",
              "Les IgD"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la phrase précise du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Protection par sérum : immédiate mais momentanée",
          "stepTheme": "Protection par sérum : immédiate mais momentanée",
          "stepBadge": "Protection par sérum : immédiate mais momentanée",
          "paragraphText": "Piège : le sérum protège immédiatement, mais seulement momentanément, car l’animal receveur n’a pas fabriqué lui-même ses anticorps.\nIl ne faut pas la confondre avec l’immunisation durable par anatoxine.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q5",
            "type": "mcq",
            "prompt": "La protection par injection de sérum est décrite comme :",
            "options": [
              "Lente et définitive",
              "Immédiate et momentanée",
              "Uniquement cellulaire",
              "Sans anticorps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux adjectifs du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les plasmocytes producteurs d’anticorps",
          "stepTheme": "Les plasmocytes producteurs d’anticorps",
          "stepBadge": "Les plasmocytes producteurs d’anticorps",
          "paragraphText": "Exemple de l’exercice 3 corrigé : chez l’individu infecté par le bacille tétanique, les lymphocytes B se transforment en partie en plasmocytes producteurs d’anticorps antitétaniques, dont le taux augmente.\nChez le non infecté, sans plasmocytes nouveaux, le taux reste nul.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q6",
            "type": "mcq",
            "prompt": "Les anticorps antitétaniques sont sécrétés par :",
            "options": [
              "Les macrophages seuls",
              "Les plasmocytes issus des lymphocytes B",
              "Les polynucléaires",
              "Les lymphocytes T cytotoxiques seuls"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la déduction du corrigé de l’exercice 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q1",
          "type": "mcq",
          "prompt": "La réponse humorale est transférée par :",
          "options": [
            "Des lymphocytes vivants uniquement",
            "Le sérum d’un animal immunisé",
            "La peau",
            "Des macrophages seuls"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation de l’expérience 2."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q2",
          "type": "mcq",
          "prompt": "Combien de classes d’immunoglobulines le résumé distingue-t-il ?",
          "options": [
            "3 classes",
            "5 classes : IgA, IgE, IgD, IgG et IgM",
            "2 classes",
            "8 classes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La liste du résumé comporte exactement ces 5 classes."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q3",
          "type": "mcq",
          "prompt": "Le complément est activé par :",
          "options": [
            "Le seul macrophage",
            "Le complexe antigène-anticorps",
            "La perforine",
            "Le CMH seul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé parle de fixation et d’activation par le complexe immun."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q4",
          "type": "mcq",
          "prompt": "Les immunoglobulines qui provoquent l’activation du complément sont :",
          "options": [
            "Les IgA",
            "Les IgE",
            "Les IgG",
            "Les IgD"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la phrase précise du résumé."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q5",
          "type": "mcq",
          "prompt": "La protection par injection de sérum est décrite comme :",
          "options": [
            "Lente et définitive",
            "Immédiate et momentanée",
            "Uniquement cellulaire",
            "Sans anticorps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux adjectifs du résumé."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p04_q6",
          "type": "mcq",
          "prompt": "Les anticorps antitétaniques sont sécrétés par :",
          "options": [
            "Les macrophages seuls",
            "Les plasmocytes issus des lymphocytes B",
            "Les polynucléaires",
            "Les lymphocytes T cytotoxiques seuls"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la déduction du corrigé de l’exercice 3."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l05_systeme_defense_organisme_p05",
      "order": 5,
      "title": "La réponse immunitaire à médiation cellulaire et les lymphocytes",
      "summary": "Contre le bacille de Koch, seuls les lymphocytes vivants transfèrent la protection ; B et T naissent dans la moelle et mûrissent en des lieux différents.",
      "conceptExplanation": "Dans l’expérience 3, le cobaye B1 qui reçoit le sérum d’un cobaye immunisé contre le bacille de Koch meurt, alors que B2, qui reçoit des lymphocytes vivants du cobaye immunisé, survit au bacille de Koch.\nL’élément protecteur n’est donc pas un constituant du sérum : ce sont les lymphocytes transférés qui sont le support de la protection. Il s’agit de la réponse immunitaire à médiation cellulaire.\nLes cellules de l’immunité, les lymphocytes, prennent naissance dans la moelle osseuse et acquièrent leur maturité dans des lieux différents : la moelle osseuse pour les lymphocytes B et le thymus pour les lymphocytes T.\nLes organes lymphoïdes comme les ganglions lymphatiques et la rate sont les lieux de leur stockage et de leur multiplication.",
      "keyRule": "Cellulaire = lymphocytes vivants comme support ; B mûrissent dans la moelle, T dans le thymus.",
      "formulas": [],
      "workedExample": {
        "title": "Expérience 3 : sérum contre lymphocytes contre le bacille de Koch",
        "statement": "Compare le sort de B1 et B2 et conclus sur le support de la protection contre le bacille de Koch.",
        "methodSteps": [
          "B1 reçoit du sérum d’immunisé et meurt : le sérum ne protège pas ici.",
          "B2 reçoit des lymphocytes vivants d’immunisé et survit.",
          "Le support de la protection est donc cellulaire : ce sont les lymphocytes."
        ],
        "conclusion": "Il s’agit de la réponse immunitaire à médiation cellulaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la réponse cellulaire",
          "stepTheme": "Définition de la réponse cellulaire",
          "stepBadge": "Définition de la réponse cellulaire",
          "paragraphText": "• Réponse immunitaire à médiation cellulaire : réponse dont le support de protection est constitué par les lymphocytes vivants transférés.\nElle est mise en évidence contre le bacille de Koch dans l’expérience 3.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q1",
            "type": "mcq",
            "prompt": "Contre le bacille de Koch, la protection est transférée par :",
            "options": [
              "Le sérum seul",
              "Les lymphocytes vivants",
              "Les anticorps seuls",
              "Le complément"
            ],
            "correctAnswerIndex": 1,
            "explanation": "B2 survit grâce aux lymphocytes, B1 meurt malgré le sérum."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Naissance et maturation des lymphocytes",
          "stepTheme": "Naissance et maturation des lymphocytes",
          "stepBadge": "Naissance et maturation des lymphocytes",
          "paragraphText": "Les lymphocytes naissent dans la moelle osseuse.\nIls mûrissent dans la moelle osseuse pour les B et dans le thymus pour les T.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q2",
            "type": "mcq",
            "prompt": "Les lymphocytes T acquièrent leur maturité dans :",
            "options": [
              "La rate",
              "Le thymus",
              "Les ganglions uniquement",
              "Le foie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document 13 oppose moelle pour B et thymus pour T."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Stockage et multiplication des lymphocytes",
          "stepTheme": "Stockage et multiplication des lymphocytes",
          "stepBadge": "Stockage et multiplication des lymphocytes",
          "paragraphText": "Les organes lymphoïdes, ganglions lymphatiques et rate, sont les lieux de stockage et de multiplication des lymphocytes.\nC’est aussi là que se fait l’amplification lors d’une réponse.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q3",
            "type": "mcq",
            "prompt": "Les lieux de stockage et de multiplication des lymphocytes sont :",
            "options": [
              "La peau et les muqueuses",
              "Les ganglions lymphatiques et la rate",
              "Le sperme et les larmes",
              "Uniquement le sang"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la phrase qui suit le document 13."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Distinguer humorale et cellulaire par le transfert",
          "stepTheme": "Distinguer humorale et cellulaire par le transfert",
          "stepBadge": "Distinguer humorale et cellulaire par le transfert",
          "paragraphText": "Méthode : si le sérum transfère la protection, la réponse est humorale ; si seuls les lymphocytes vivants la transfèrent, elle est cellulaire.\nLes expériences 2 et 3 sont construites en miroir pour cette distinction.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q4",
            "type": "mcq",
            "prompt": "Si seul le transfert de lymphocytes protège, la réponse est :",
            "options": [
              "Humorale",
              "Cellulaire",
              "Non spécifique",
              "Mécanique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la conclusion de l’expérience 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les lymphocytes T ne produisent pas d’anticorps",
          "stepTheme": "Les lymphocytes T ne produisent pas d’anticorps",
          "stepBadge": "Les lymphocytes T ne produisent pas d’anticorps",
          "paragraphText": "Piège de l’exercice 1 corrigé : l’affirmation selon laquelle les lymphocytes T peuvent produire des anticorps est fausse.\nLes anticorps sont produits par les plasmocytes issus des lymphocytes B ; les affirmations sur la coopération cellulaire et les anticorps du sérum sont vraies.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q5",
            "type": "mcq",
            "prompt": "D’après le corrigé de l’exercice 1, les lymphocytes T produisent des anticorps :",
            "options": [
              "Vrai",
              "Faux",
              "Uniquement contre le tétanos",
              "Uniquement dans le sérum"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé répond faux à cette affirmation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le bacille de Koch comme antigène intracellulaire",
          "stepTheme": "Le bacille de Koch comme antigène intracellulaire",
          "stepBadge": "Le bacille de Koch comme antigène intracellulaire",
          "paragraphText": "Exemple : la réponse cellulaire est adaptée aux cellules hébergeant des virus ou autres parasites intracellulaires, selon la phase effectrice.\nLe bacille de Koch illustre ce type de cible dans l’expérience 3.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q6",
            "type": "mcq",
            "prompt": "La réponse cellulaire est particulièrement adaptée contre :",
            "options": [
              "Les toxines libres seules",
              "Les cellules hébergeant des parasites intracellulaires",
              "Les barrières chimiques",
              "Les greffes de peau seules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la précision de la troisième étape du mécanisme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q1",
          "type": "mcq",
          "prompt": "Contre le bacille de Koch, la protection est transférée par :",
          "options": [
            "Le sérum seul",
            "Les lymphocytes vivants",
            "Les anticorps seuls",
            "Le complément"
          ],
          "correctAnswerIndex": 1,
          "explanation": "B2 survit grâce aux lymphocytes, B1 meurt malgré le sérum."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q2",
          "type": "mcq",
          "prompt": "Les lymphocytes T acquièrent leur maturité dans :",
          "options": [
            "La rate",
            "Le thymus",
            "Les ganglions uniquement",
            "Le foie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document 13 oppose moelle pour B et thymus pour T."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q3",
          "type": "mcq",
          "prompt": "Les lieux de stockage et de multiplication des lymphocytes sont :",
          "options": [
            "La peau et les muqueuses",
            "Les ganglions lymphatiques et la rate",
            "Le sperme et les larmes",
            "Uniquement le sang"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la phrase qui suit le document 13."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q4",
          "type": "mcq",
          "prompt": "Si seul le transfert de lymphocytes protège, la réponse est :",
          "options": [
            "Humorale",
            "Cellulaire",
            "Non spécifique",
            "Mécanique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la conclusion de l’expérience 3."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q5",
          "type": "mcq",
          "prompt": "D’après le corrigé de l’exercice 1, les lymphocytes T produisent des anticorps :",
          "options": [
            "Vrai",
            "Faux",
            "Uniquement contre le tétanos",
            "Uniquement dans le sérum"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé répond faux à cette affirmation."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p05_q6",
          "type": "mcq",
          "prompt": "La réponse cellulaire est particulièrement adaptée contre :",
          "options": [
            "Les toxines libres seules",
            "Les cellules hébergeant des parasites intracellulaires",
            "Les barrières chimiques",
            "Les greffes de peau seules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la précision de la troisième étape du mécanisme."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l05_systeme_defense_organisme_p06",
      "order": 6,
      "title": "Les greffes, le soi et le non-soi, le CMH",
      "summary": "Autogreffe et isogreffe sont intégrées, hétérogreffe et homogreffe sont rejetées : l’organisme reconnaît le soi grâce au CMH.",
      "conceptExplanation": "Une greffe est un transfert de tissu ou d’un fragment d’organe dans un même organisme, autogreffe, ou entre deux organismes d’espèce différente, hétérogreffe, ou entre deux vrais jumeaux, isogreffe, ou encore entre deux organismes de la même espèce, homogreffe ou allogreffe. La greffe d’un organe entier est une transplantation.\nLorsqu’on pratique une autogreffe ou une isogreffe, il n’y a pas de rejet et le greffon est intégré. Si on pratique une hétérogreffe ou une homogreffe, il y a rejet du greffon.\nL’intégration est due à la reconnaissance par des protéines de surface propres à l’organisme, qui constituent le Complexe Majeur d’Histocompatibilité ou CMH, aussi appelé Human Leucocyte Antigen ou HLA. Le soi est l’ensemble des molécules propres à l’individu, notamment le groupe sanguin ABO et le CMH.\nLe rejet s’explique par la non-reconnaissance du greffon par le CMH : tout ce qui n’est pas toléré et déclenche une réaction immunitaire correspond au non-soi, et toute substance dont l’introduction déclenche une réaction immunitaire est un antigène.",
      "keyRule": "Même CMH = intégration ; CMH différent reconnu comme non-soi = rejet du greffon.",
      "formulas": [],
      "workedExample": {
        "title": "Les quatre types de greffes et leur sort",
        "statement": "Classe autogreffe, isogreffe, hétérogreffe et homogreffe selon qu’il y a intégration ou rejet, et explique ce résultat par le CMH.",
        "methodSteps": [
          "Autogreffe et isogreffe : pas de rejet, intégration du greffon.",
          "Hétérogreffe et homogreffe : rejet du greffon.",
          "L’explication est la reconnaissance ou non du greffon par le CMH du receveur."
        ],
        "conclusion": "L’organisme distingue le soi du non-soi grâce au CMH."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les quatre types de greffes",
          "stepTheme": "Les quatre types de greffes",
          "stepBadge": "Les quatre types de greffes",
          "paragraphText": "• Autogreffe : dans un même organisme. • Hétérogreffe : entre espèces différentes. • Isogreffe : entre vrais jumeaux. • Homogreffe ou allogreffe : entre organismes de la même espèce.\nLa greffe d’un organe entier est une transplantation.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q1",
            "type": "mcq",
            "prompt": "Une greffe entre vrais jumeaux est une :",
            "options": [
              "Autogreffe",
              "Hétérogreffe",
              "Isogreffe",
              "Homogreffe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition de l’interprétation des greffes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Intégration ou rejet selon le type",
          "stepTheme": "Intégration ou rejet selon le type",
          "stepBadge": "Intégration ou rejet selon le type",
          "paragraphText": "Autogreffe et isogreffe ne donnent pas de rejet : le greffon est intégré.\nHétérogreffe et homogreffe donnent un rejet du greffon.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q2",
            "type": "mcq",
            "prompt": "Il y a rejet du greffon lors d’une :",
            "options": [
              "Autogreffe",
              "Isogreffe",
              "Homogreffe ou allogreffe",
              "Transplantation de soi à soi"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’analyse des résultats des expériences de greffes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le CMH ou HLA",
          "stepTheme": "Le CMH ou HLA",
          "stepBadge": "Le CMH ou HLA",
          "paragraphText": "• Complexe Majeur d’Histocompatibilité, CMH ou Human Leucocyte Antigen, HLA : protéines de surface propres à l’organisme qui interviennent comme récepteurs capables de reconnaître ce qui appartient à l’organisme, le soi.\nQuand donneur et receveur portent le même CMH, il y a intégration.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q3",
            "type": "mcq",
            "prompt": "Le CMH est aussi appelé :",
            "options": [
              "IgG",
              "HLA",
              "PPSE",
              "AMP"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé donne Human Leucocyte Antigen, HLA."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Soi, non-soi et antigène",
          "stepTheme": "Soi, non-soi et antigène",
          "stepBadge": "Soi, non-soi et antigène",
          "paragraphText": "• Soi : ensemble de molécules propres à l’individu, marqueurs de son identité biologique comme le groupe sanguin ABO et le CMH. • Non-soi : tout ce qui n’est pas toléré et déclenche une réaction immunitaire. • Antigène : toute substance dont l’introduction déclenche une réaction immunitaire.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q4",
            "type": "mcq",
            "prompt": "Une substance dont l’introduction déclenche une réaction immunitaire est un :",
            "options": [
              "Anticorps",
              "Antigène",
              "Lysozyme",
              "Plasmocyte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée après l’étude des greffes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un CMH différent n’est pas reconnu comme soi",
          "stepTheme": "Un CMH différent n’est pas reconnu comme soi",
          "stepBadge": "Un CMH différent n’est pas reconnu comme soi",
          "paragraphText": "Piège de l’exercice 1 corrigé : une cellule ayant un CMH différent n’est pas reconnue comme un soi par les lymphocytes T ; l’affirmation contraire est fausse.\nLa différence de CMH déclenche au contraire la réaction de rejet.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q5",
            "type": "mcq",
            "prompt": "D’après le corrigé, un CMH différent est reconnu comme soi par les lymphocytes T :",
            "options": [
              "Vrai",
              "Faux",
              "Uniquement pour une autogreffe",
              "Uniquement chez les jumeaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé répond faux à cette affirmation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les cellules présentatrices de l’antigène",
          "stepTheme": "Les cellules présentatrices de l’antigène",
          "stepBadge": "Les cellules présentatrices de l’antigène",
          "paragraphText": "Exemple : les macrophages phagocytent et dégradent l’antigène pour en extraire les déterminants antigéniques ou épitopes, qu’ils présentent aux lymphocytes.\nLes lymphocytes B peuvent aussi détecter directement un antigène libre : macrophages et lymphocytes B sont des cellules présentatrices de l’antigène.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q6",
            "type": "mcq",
            "prompt": "Les cellules présentatrices de l’antigène citées sont :",
            "options": [
              "Les polynucléaires seuls",
              "Les macrophages et les lymphocytes B",
              "Les plasmocytes seuls",
              "Les cellules du foie seules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la fin de l’interprétation des greffes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q1",
          "type": "mcq",
          "prompt": "Une greffe entre vrais jumeaux est une :",
          "options": [
            "Autogreffe",
            "Hétérogreffe",
            "Isogreffe",
            "Homogreffe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition de l’interprétation des greffes."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q2",
          "type": "mcq",
          "prompt": "Il y a rejet du greffon lors d’une :",
          "options": [
            "Autogreffe",
            "Isogreffe",
            "Homogreffe ou allogreffe",
            "Transplantation de soi à soi"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’analyse des résultats des expériences de greffes."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q3",
          "type": "mcq",
          "prompt": "Le CMH est aussi appelé :",
          "options": [
            "IgG",
            "HLA",
            "PPSE",
            "AMP"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé donne Human Leucocyte Antigen, HLA."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q4",
          "type": "mcq",
          "prompt": "Une substance dont l’introduction déclenche une réaction immunitaire est un :",
          "options": [
            "Anticorps",
            "Antigène",
            "Lysozyme",
            "Plasmocyte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée après l’étude des greffes."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q5",
          "type": "mcq",
          "prompt": "D’après le corrigé, un CMH différent est reconnu comme soi par les lymphocytes T :",
          "options": [
            "Vrai",
            "Faux",
            "Uniquement pour une autogreffe",
            "Uniquement chez les jumeaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé répond faux à cette affirmation."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p06_q6",
          "type": "mcq",
          "prompt": "Les cellules présentatrices de l’antigène citées sont :",
          "options": [
            "Les polynucléaires seuls",
            "Les macrophages et les lymphocytes B",
            "Les plasmocytes seuls",
            "Les cellules du foie seules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la fin de l’interprétation des greffes."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l05_systeme_defense_organisme_p07",
      "order": 7,
      "title": "Le mécanisme des réponses immunitaires en trois phases",
      "summary": "Reconnaissance de l’antigène, activation et différenciation des lymphocytes, puis phase effectrice humorale ou cellulaire, avec coopération cellulaire.",
      "conceptExplanation": "Les réactions immunitaires se déroulent en trois étapes : l’identification de l’antigène, l’activation et la différenciation des lymphocytes, et la phase effectrice.\nPremière étape, la phase de reconnaissance ou d’induction : le macrophage identifie l’antigène comme non-soi, le phagocyte, le dégrade pour en extraire le déterminant antigénique et le présente aux lymphocytes, qui deviennent actifs. Les lymphocytes T reconnaissent le déterminant grâce au récepteur de l’antigène et au récepteur du CMH.\nDeuxième étape, la phase d’activation, de différenciation et de multiplication dans les organes lymphoïdes périphériques : les lymphocytes B se différencient en plasmocytes producteurs d’anticorps et en lymphocytes B mémoires ; les lymphocytes T se différencient en lymphocytes T mémoires, régulateurs helpers ou suppresseurs, cytotoxiques, à lymphokines et T4.\nTroisième étape, la phase effectrice : en médiation cellulaire, les lymphocytes T cytotoxiques, stimulés par les interleukines des T4, tuent par contact grâce à la perforine qui crée des pores, d’où gonflement et cytolyse ; en médiation humorale, les anticorps des plasmocytes forment un complexe immun qui neutralise l’antigène. Dans tous les cas, macrophages, lymphocytes T et B coopèrent : c’est la coopération cellulaire.",
      "keyRule": "Trois phases à retenir dans l’ordre : reconnaissance, activation-différenciation, phase effectrice.",
      "formulas": [],
      "workedExample": {
        "title": "Les anticorps du nouveau-né (situation d’évaluation)",
        "statement": "À partir des courbes d’anticorps maternels et de l’enfant, justifie la protection du fœtus et la sensibilité de l’enfant entre le 5e et le 8e mois.",
        "methodSteps": [
          "Les anticorps d’origine maternelle augmentent jusqu’à la naissance puis diminuent et s’annulent entre 6 et 8 mois.",
          "Les anticorps produits par l’enfant augmentent dès la naissance mais restent encore faibles les premiers mois.",
          "Vers le 4e ou 5e mois, les deux protections réunies sont insuffisantes, d’où la grande sensibilité aux infections."
        ],
        "conclusion": "La protection du nouveau-né illustre la réponse humorale et le rôle des anticorps maternels."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La phase de reconnaissance",
          "stepTheme": "La phase de reconnaissance",
          "stepBadge": "La phase de reconnaissance",
          "paragraphText": "• Phase de reconnaissance ou d’induction : le macrophage identifie l’antigène comme non-soi, le phagocyte et en présente le déterminant antigénique aux lymphocytes.\nLes lymphocytes concernés deviennent alors actifs.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q1",
            "type": "mcq",
            "prompt": "La première étape des réactions immunitaires est :",
            "options": [
              "La phase effectrice",
              "La phase de reconnaissance de l’antigène",
              "La cytolyse",
              "La production d’anticorps seule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première des trois étapes de l’analyse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La différenciation des lymphocytes B",
          "stepTheme": "La différenciation des lymphocytes B",
          "stepBadge": "La différenciation des lymphocytes B",
          "paragraphText": "Après activation, les lymphocytes B se différencient en plasmocytes qui produisent les anticorps rejetés dans le sang.\nIls donnent aussi des lymphocytes B mémoires, à l’origine d’une réponse secondaire plus rapide.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q2",
            "type": "mcq",
            "prompt": "Les lymphocytes B se différencient notamment en :",
            "options": [
              "Lymphocytes cytotoxiques",
              "Plasmocytes producteurs d’anticorps",
              "Macrophages",
              "Polynucléaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la différenciation décrite en deuxième étape."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La différenciation des lymphocytes T",
          "stepTheme": "La différenciation des lymphocytes T",
          "stepBadge": "La différenciation des lymphocytes T",
          "paragraphText": "Les lymphocytes T se différencient en lymphocytes T mémoires, régulateurs helpers ou suppresseurs, cytotoxiques, à lymphokines et T4 qui induisent la réponse.\nLeur maturation a eu lieu dans le thymus.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q3",
            "type": "mcq",
            "prompt": "Parmi les différenciations suivantes, laquelle concerne les lymphocytes T ?",
            "options": [
              "Plasmocytes",
              "Lymphocytes cytotoxiques",
              "Macrophages",
              "Cellules présentatrices seules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les lymphocytes cytotoxiques sont une différenciation des T."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La phase effectrice cellulaire et la perforine",
          "stepTheme": "La phase effectrice cellulaire et la perforine",
          "stepBadge": "La phase effectrice cellulaire et la perforine",
          "paragraphText": "• Phase effectrice cellulaire : les lymphocytes T cytotoxiques agissent par contact direct et libèrent la perforine, qui s’incorpore à la membrane des cellules à tuer.\nDes pores permettent à l’eau d’entrer : les cellules gonflent et éclatent, c’est la cytolyse.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q4",
            "type": "mcq",
            "prompt": "La cytolyse cellulaire est provoquée par des pores formés grâce à :",
            "options": [
              "La perforine",
              "Le lysozyme",
              "L’acétylcholine",
              "La myokinase"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document 19 et le texte décrivent ce mécanisme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La phase effectrice humorale",
          "stepTheme": "La phase effectrice humorale",
          "stepBadge": "La phase effectrice humorale",
          "paragraphText": "• Phase effectrice humorale : les plasmocytes sécrètent des anticorps qui se fixent sur l’antigène et forment un complexe immun.\nCe complexe provoque la neutralisation de l’antigène ; cette réponse est mieux adaptée contre les bactéries extracellulaires et les toxines libres.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q5",
            "type": "mcq",
            "prompt": "La réponse humorale est mieux adaptée contre :",
            "options": [
              "Les parasites intracellulaires seuls",
              "Les bactéries extracellulaires et les molécules libres comme les toxines",
              "Les greffes uniquement",
              "Les barrières mécaniques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la précision finale sur la RIMH."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Oublier la coopération cellulaire",
          "stepTheme": "Oublier la coopération cellulaire",
          "stepBadge": "Oublier la coopération cellulaire",
          "paragraphText": "Piège : quel que soit le type de réponse, il existe une collaboration entre macrophages, lymphocytes T et lymphocytes B.\nPrésenter la RIMH et la RIMC comme totalement indépendantes est donc faux.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q6",
            "type": "mcq",
            "prompt": "La coopération cellulaire associe :",
            "options": [
              "Uniquement les plasmocytes",
              "Macrophages, lymphocytes T et lymphocytes B",
              "Uniquement les polynucléaires",
              "La peau et les muqueuses"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la conclusion du mécanisme et l’affirmation vraie de l’exercice 1."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La mémoire immunitaire",
          "stepTheme": "La mémoire immunitaire",
          "stepBadge": "La mémoire immunitaire",
          "paragraphText": "Exemple : les lymphocytes B et T mémoires gardent le souvenir de la première stimulation par les antigènes.\nIls sont à l’origine de la réponse immunitaire secondaire, plus rapide et constituée d’anticorps pour les B mémoires.",
          "exercise": {
            "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q7",
            "type": "mcq",
            "prompt": "Les lymphocytes mémoires servent à :",
            "options": [
              "Empêcher toute réponse secondaire",
              "Produire une réponse secondaire plus rapide",
              "Remplacer les barrières naturelles",
              "Bloquer le CMH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le rôle décrit en phase de différenciation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q1",
          "type": "mcq",
          "prompt": "La première étape des réactions immunitaires est :",
          "options": [
            "La phase effectrice",
            "La phase de reconnaissance de l’antigène",
            "La cytolyse",
            "La production d’anticorps seule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première des trois étapes de l’analyse."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q2",
          "type": "mcq",
          "prompt": "Les lymphocytes B se différencient notamment en :",
          "options": [
            "Lymphocytes cytotoxiques",
            "Plasmocytes producteurs d’anticorps",
            "Macrophages",
            "Polynucléaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la différenciation décrite en deuxième étape."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q3",
          "type": "mcq",
          "prompt": "Parmi les différenciations suivantes, laquelle concerne les lymphocytes T ?",
          "options": [
            "Plasmocytes",
            "Lymphocytes cytotoxiques",
            "Macrophages",
            "Cellules présentatrices seules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les lymphocytes cytotoxiques sont une différenciation des T."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q4",
          "type": "mcq",
          "prompt": "La cytolyse cellulaire est provoquée par des pores formés grâce à :",
          "options": [
            "La perforine",
            "Le lysozyme",
            "L’acétylcholine",
            "La myokinase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document 19 et le texte décrivent ce mécanisme."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q5",
          "type": "mcq",
          "prompt": "La réponse humorale est mieux adaptée contre :",
          "options": [
            "Les parasites intracellulaires seuls",
            "Les bactéries extracellulaires et les molécules libres comme les toxines",
            "Les greffes uniquement",
            "Les barrières mécaniques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la précision finale sur la RIMH."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q6",
          "type": "mcq",
          "prompt": "La coopération cellulaire associe :",
          "options": [
            "Uniquement les plasmocytes",
            "Macrophages, lymphocytes T et lymphocytes B",
            "Uniquement les polynucléaires",
            "La peau et les muqueuses"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la conclusion du mécanisme et l’affirmation vraie de l’exercice 1."
        },
        {
          "id": "terminale_c_svt_l05_systeme_defense_organisme_p07_q7",
          "type": "mcq",
          "prompt": "Les lymphocytes mémoires servent à :",
          "options": [
            "Empêcher toute réponse secondaire",
            "Produire une réponse secondaire plus rapide",
            "Remplacer les barrières naturelles",
            "Bloquer le CMH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le rôle décrit en phase de différenciation."
        }
      ]
    }
  ]
};
