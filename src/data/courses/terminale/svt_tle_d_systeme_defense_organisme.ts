import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 6 : Le système de défense de l'organisme » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2886
export const SVT_TLE_D_L06_SYSTEME_DEFENSE_ORGANISME: CurriculumChapter = {
  "id": "terminale_d_svt_l06_systeme_defense_organisme",
  "subjectId": "svt",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 6,
  "title": "Leçon 6 : Le système de défense de l'organisme",
  "summary": "L’organisme se défend d’abord de façon non spécifique par ses barrières, la réaction inflammatoire et la phagocytose, puis de façon spécifique par les anticorps et les lymphocytes, selon un mécanisme en trois phases fondé sur la reconnaissance du soi et du non soi.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2886",
  "points": [
    {
      "id": "terminale_d_svt_l06_systeme_defense_organisme_p01",
      "order": 1,
      "title": "Les barrières naturelles, première ligne de défense",
      "summary": "Distinguer les barrières mécaniques, chimiques et biologiques qui arrêtent les microbes avant l’infection.",
      "conceptExplanation": "La peau et les muqueuses représentent des barrières naturelles de l’organisme et constituent sa première ligne de défense, capables d’arrêter les microbes avant une véritable infection.\nLes barrières mécaniques sont la peau et les muqueuses nasales et bronchiques, dont le mucus enveloppe les bactéries qui peuvent être refoulées à l’extérieur grâce à des cils vibratiles.\nLes barrières chimiques comprennent la sueur de pH 3,5, les larmes, le mucus nasal et la salive contenant les lysozymes, l’acide gastrique de pH compris entre 1 et 2, les sécrétions alcalines du duodénum de pH 8, le sperme et les sécrétions vaginales.\nLa barrière biologique est formée de bactéries non pathogènes qui vivent dans le tube digestif en y maintenant des conditions défavorables pour de nombreux microbes.\nUne plaie est une ouverture dans la peau donnant accès aux microbes : elle fait franchir cette première ligne.",
      "keyRule": "Peau et muqueuses égale première ligne : barrières mécaniques, chimiques et biologiques avant toute infection.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les exemples du document sur les barrières",
        "statement": "Classe les exemples des documents 2 et 3 : couche cornée de la peau, sueur acide, lysozyme des larmes, acide gastrique, sécrétions du duodénum et bactéries du tube digestif, en barrières mécaniques, chimiques ou biologiques.",
        "methodSteps": [
          "La peau constamment renouvelée et imperméable grâce à sa couche cornée est une barrière mécanique.",
          "La sueur de pH 3,5, le lysozyme des larmes et de la salive, l’acide gastrique de pH 1 à 2 et les sécrétions alcalines de pH 8 sont des barrières chimiques.",
          "Les bactéries non pathogènes du tube digestif forment la barrière biologique."
        ],
        "conclusion": "C’est le classement des exemples détaillés dans les documents de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La première ligne de défense",
          "stepTheme": "La première ligne de défense",
          "stepBadge": "La première ligne de défense",
          "paragraphText": "La peau et les muqueuses constituent la première ligne de défense de l’organisme.\nElles sont capables d’arrêter les microbes avant une véritable infection.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q1",
            "type": "mcq",
            "prompt": "La première ligne de défense de l’organisme est constituée par :",
            "options": [
              "Les ganglions lymphatiques",
              "La peau et les muqueuses, barrières naturelles",
              "Les anticorps circulants",
              "Les lymphocytes mémoires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation des résultats sur la piqûre d’épine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les barrières mécaniques",
          "stepTheme": "Les barrières mécaniques",
          "stepBadge": "Les barrières mécaniques",
          "paragraphText": "• Barrières mécaniques : la peau et les muqueuses nasales et bronchiques.\nLe mucus de ces muqueuses enveloppe les bactéries, refoulées à l’extérieur grâce à des cils vibratiles.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q2",
            "type": "mcq",
            "prompt": "Parmi les éléments suivants, lequel est une barrière mécanique ?",
            "options": [
              "La sueur acide",
              "Le lysozyme des larmes",
              "La peau, avec sa couche cornée",
              "Les bactéries du tube digestif"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La peau est citée comme barrière mécanique, imperméable grâce à sa couche cornée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les barrières chimiques et leurs pH",
          "stepTheme": "Les barrières chimiques et leurs pH",
          "stepBadge": "Les barrières chimiques et leurs pH",
          "paragraphText": "La sueur a un pH de 3,5 et l’acide gastrique un pH compris entre 1 et 2.\nLes sécrétions alcalines du duodénum amènent le milieu à un pH de 8, changement brutal défavorable à de nombreux microbes.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q3",
            "type": "mcq",
            "prompt": "Le pH de l’acide gastrique, barrière chimique de l’estomac, est compris entre :",
            "options": [
              "3 et 4",
              "1 et 2",
              "7 et 8",
              "8 et 9"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Valeur donnée dans la liste des barrières chimiques et dans le document 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La barrière biologique",
          "stepTheme": "La barrière biologique",
          "stepBadge": "La barrière biologique",
          "paragraphText": "• Barrière biologique : bactéries non pathogènes qui vivent dans le tube digestif.\nElles y maintiennent des conditions défavorables pour de nombreux microbes pathogènes.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q4",
            "type": "mcq",
            "prompt": "La barrière biologique de l’organisme est assurée par :",
            "options": [
              "Les globules blancs du sang",
              "Des bactéries non pathogènes du tube digestif",
              "L’acide gastrique",
              "Les cils vibratiles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Troisième type de barrière distingué dans l’interprétation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le lysozyme est une barrière chimique",
          "stepTheme": "Le lysozyme est une barrière chimique",
          "stepBadge": "Le lysozyme est une barrière chimique",
          "paragraphText": "Piège : classer les larmes et la salive parmi les barrières mécaniques parce qu’elles sont liquides.\nLa leçon les range parmi les barrières chimiques car elles contiennent le lysozyme, enzyme qui dégrade la paroi de certaines bactéries.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q5",
            "type": "mcq",
            "prompt": "Les larmes et la salive protègent grâce au lysozyme : ce sont des barrières :",
            "options": [
              "Mécaniques",
              "Chimiques",
              "Biologiques",
              "Ganglionnaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document 2 précise que le lysozyme provoque la mort de certaines bactéries en dégradant leur paroi externe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La plaie créée par une épine",
          "stepTheme": "La plaie créée par une épine",
          "stepBadge": "La plaie créée par une épine",
          "paragraphText": "Une plaie est une ouverture dans la peau donnant accès aux microbes.\nL’ouverture de la peau à la suite de la piqûre par une épine favorise donc l’entrée des bactéries dans l’organisme et déclenche la réaction locale.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q6",
            "type": "mcq",
            "prompt": "Une piqûre d’épine favorise l’infection parce qu’elle :",
            "options": [
              "Renforce la couche cornée",
              "Crée une ouverture dans la peau donnant accès aux microbes",
              "Produit des anticorps",
              "Détruit les ganglions lymphatiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Première phrase de l’interprétation des résultats sur la plaie."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q1",
          "type": "mcq",
          "prompt": "La première ligne de défense de l’organisme est constituée par :",
          "options": [
            "Les ganglions lymphatiques",
            "La peau et les muqueuses, barrières naturelles",
            "Les anticorps circulants",
            "Les lymphocytes mémoires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation des résultats sur la piqûre d’épine."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q2",
          "type": "mcq",
          "prompt": "Parmi les éléments suivants, lequel est une barrière mécanique ?",
          "options": [
            "La sueur acide",
            "Le lysozyme des larmes",
            "La peau, avec sa couche cornée",
            "Les bactéries du tube digestif"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La peau est citée comme barrière mécanique, imperméable grâce à sa couche cornée."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q3",
          "type": "mcq",
          "prompt": "Le pH de l’acide gastrique, barrière chimique de l’estomac, est compris entre :",
          "options": [
            "3 et 4",
            "1 et 2",
            "7 et 8",
            "8 et 9"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Valeur donnée dans la liste des barrières chimiques et dans le document 2."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q4",
          "type": "mcq",
          "prompt": "La barrière biologique de l’organisme est assurée par :",
          "options": [
            "Les globules blancs du sang",
            "Des bactéries non pathogènes du tube digestif",
            "L’acide gastrique",
            "Les cils vibratiles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Troisième type de barrière distingué dans l’interprétation."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q5",
          "type": "mcq",
          "prompt": "Les larmes et la salive protègent grâce au lysozyme : ce sont des barrières :",
          "options": [
            "Mécaniques",
            "Chimiques",
            "Biologiques",
            "Ganglionnaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document 2 précise que le lysozyme provoque la mort de certaines bactéries en dégradant leur paroi externe."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p01_q6",
          "type": "mcq",
          "prompt": "Une piqûre d’épine favorise l’infection parce qu’elle :",
          "options": [
            "Renforce la couche cornée",
            "Crée une ouverture dans la peau donnant accès aux microbes",
            "Produit des anticorps",
            "Détruit les ganglions lymphatiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Première phrase de l’interprétation des résultats sur la plaie."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l06_systeme_defense_organisme_p02",
      "order": 2,
      "title": "Réaction inflammatoire, phagocytose et réactions ganglionnaire et généralisée",
      "summary": "Décrire la réaction locale, les trois étapes de la phagocytose et l’escalade quand les barrières sont franchies.",
      "conceptExplanation": "Au niveau d’une plaie, on constate une dilatation des capillaires sanguins, un mouvement des globules blancs vers le lieu de l’infection, leur agglomération autour des microbes et une enflure de la peau.\nLa réaction locale se manifeste par une chaleur, une rougeur, une douleur, une enflure et une perte des fonctions des tissus : c’est la réaction inflammatoire, où interviennent d’abord les polynucléaires ou microphages, puis les macrophages issus de la différenciation des monocytes.\nLa phagocytose, propriété de reconnaître, d’englober puis de digérer les microbes, se déroule en trois étapes détaillées dans l’activité : l’adhésion, l’absorption dans une vésicule de phagocytose et la digestion par les enzymes lytiques des lysosomes.\nSi les bactéries franchissent la plaie, elles gagnent les ganglions lymphatiques, deuxième barrière, dont le gonflement est l’adénite, accompagnée de lymphangite pour les vaisseaux ; si elles passent dans le sang et envahissent tout l’organisme malgré le foie, c’est la septicémie, et la diffusion de leurs toxines constitue la toxémie.\nCette défense innée, immédiate et non propre à un antigène déterminé, est la défense non spécifique.",
      "keyRule": "Inflammation puis phagocytose en trois étapes ; ganglions égale deuxième barrière, septicémie égale invasion généralisée.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte sur la défense non spécifique (activité d’application)",
        "statement": "Complète le texte de l’activité : la défense non spécifique comporte la réaction inflammatoire, la phagocytose et la réparation tissulaire ; au cours de la phagocytose, le phagocyte fixe l’antigène par adhésion, l’enveloppe dans une vésicule par absorption, puis le détruit par digestion grâce aux enzymes lytiques.",
        "methodSteps": [
          "Les trois phases sont : réaction inflammatoire, phagocytose et réparation tissulaire.",
          "Les cellules attirées par chimiotactisme pénètrent par diapédèse ; les monocytes se transforment en macrophages.",
          "Les trois étapes de la phagocytose sont l’adhésion, l’absorption et la digestion par les enzymes lytiques des lysosomes.",
          "Le tissu endommagé se régénère ensuite grâce au collagène sécrété par les fibroblastes : réparation tissulaire."
        ],
        "conclusion": "C’est le corrigé complet de l’activité d’application sur la défense non spécifique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les signes de la réaction inflammatoire",
          "stepTheme": "Les signes de la réaction inflammatoire",
          "stepBadge": "Les signes de la réaction inflammatoire",
          "paragraphText": "La réaction inflammatoire est la réaction locale au point de la piqûre.\nElle se manifeste par une chaleur, une rougeur, une douleur, une enflure et une perte des fonctions des tissus.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q1",
            "type": "mcq",
            "prompt": "Parmi les manifestations suivantes, laquelle appartient à la réaction inflammatoire décrite ?",
            "options": [
              "La production d’anticorps mémoires",
              "La chaleur, la rougeur, la douleur et l’enflure au point de la plaie",
              "Le rejet d’un greffon",
              "La cytolyse par perforine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Liste des manifestations de la réaction locale dans l’interprétation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Polynucléaires puis macrophages",
          "stepTheme": "Polynucléaires puis macrophages",
          "stepBadge": "Polynucléaires puis macrophages",
          "paragraphText": "Au niveau de la plaie, ce sont d’abord les polynucléaires, ou microphages ou granulocytes, qui interviennent.\nEnsuite viennent les macrophages, grosses cellules très mobiles issues de la différenciation des monocytes, qui continuent et intensifient la lutte.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q2",
            "type": "mcq",
            "prompt": "Les macrophages qui interviennent après les polynucléaires proviennent de la différenciation :",
            "options": [
              "Des lymphocytes B",
              "Des monocytes",
              "Des hématies",
              "Des plasmocytes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Phrase de l’interprétation sur l’ordre d’intervention des phagocytes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les trois étapes de la phagocytose",
          "stepTheme": "Les trois étapes de la phagocytose",
          "stepBadge": "Les trois étapes de la phagocytose",
          "paragraphText": "La phagocytose se déroule en trois étapes selon l’activité corrigée.\n• L’adhésion : le phagocyte fixe l’antigène.\n• L’absorption : la membrane enveloppe l’antigène et forme une vésicule de phagocytose.\n• La digestion : les enzymes lytiques des lysosomes inactivent ou détruisent l’antigène.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q3",
            "type": "mcq",
            "prompt": "La deuxième étape de la phagocytose, la formation d’une vésicule autour de l’antigène, s’appelle :",
            "options": [
              "L’adhésion",
              "L’absorption",
              "La digestion",
              "La réparation tissulaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l’activité sur la défense non spécifique, numéros 6, 7 et 10."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les trois issues de la lutte phagocytaire",
          "stepTheme": "Les trois issues de la lutte phagocytaire",
          "stepBadge": "Les trois issues de la lutte phagocytaire",
          "paragraphText": "Lors de la phagocytose, trois cas peuvent se présenter.\nSoit les bactéries sont phagocytées et l’infection régresse ; soit elles restent intactes et l’infection reste stationnaire ; soit elles sortent vainqueurs et l’infection se poursuit vers les vaisseaux lymphatiques.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q4",
            "type": "mcq",
            "prompt": "Si les bactéries sont phagocytées avec succès, l’infection :",
            "options": [
              "Devient une septicémie",
              "Régresse",
              "Reste toujours généralisée",
              "Produit une adénite définitive"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Premier des trois cas présentés dans l’interprétation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Adénite, lymphangite, septicémie et toxémie",
          "stepTheme": "Adénite, lymphangite, septicémie et toxémie",
          "stepBadge": "Adénite, lymphangite, septicémie et toxémie",
          "paragraphText": "Piège : confondre les quatre termes de l’escalade infectieuse.\nL’adénite est le gonflement des ganglions lymphatiques et la lymphangite celui des vaisseaux lymphatiques ; la septicémie est l’invasion de tout l’organisme par les microbes et la toxémie la diffusion de leurs toxines.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q5",
            "type": "mcq",
            "prompt": "L’invasion de tout l’organisme par les microbes passés dans la circulation sanguine s’appelle :",
            "options": [
              "L’adénite",
              "La lymphangite",
              "La septicémie",
              "La phagocytose"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définitions données dans le passage sur la réaction généralisée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La défense non spécifique",
          "stepTheme": "La défense non spécifique",
          "stepBadge": "La défense non spécifique",
          "paragraphText": "L’intrusion d’un corps étranger entraîne une réaction de défense innée, immédiate et non propre à un antigène déterminé.\nC’est la défense non spécifique de l’organisme, conclusion de toute la première partie.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q6",
            "type": "mcq",
            "prompt": "La défense assurée par les barrières, l’inflammation et la phagocytose est qualifiée de :",
            "options": [
              "Spécifique et acquise",
              "Non spécifique, innée et immédiate",
              "Humorale à anticorps",
              "Cellulaire à lymphocytes tueurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Phrase de définition de la défense non spécifique dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q1",
          "type": "mcq",
          "prompt": "Parmi les manifestations suivantes, laquelle appartient à la réaction inflammatoire décrite ?",
          "options": [
            "La production d’anticorps mémoires",
            "La chaleur, la rougeur, la douleur et l’enflure au point de la plaie",
            "Le rejet d’un greffon",
            "La cytolyse par perforine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Liste des manifestations de la réaction locale dans l’interprétation."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q2",
          "type": "mcq",
          "prompt": "Les macrophages qui interviennent après les polynucléaires proviennent de la différenciation :",
          "options": [
            "Des lymphocytes B",
            "Des monocytes",
            "Des hématies",
            "Des plasmocytes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phrase de l’interprétation sur l’ordre d’intervention des phagocytes."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q3",
          "type": "mcq",
          "prompt": "La deuxième étape de la phagocytose, la formation d’une vésicule autour de l’antigène, s’appelle :",
          "options": [
            "L’adhésion",
            "L’absorption",
            "La digestion",
            "La réparation tissulaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l’activité sur la défense non spécifique, numéros 6, 7 et 10."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q4",
          "type": "mcq",
          "prompt": "Si les bactéries sont phagocytées avec succès, l’infection :",
          "options": [
            "Devient une septicémie",
            "Régresse",
            "Reste toujours généralisée",
            "Produit une adénite définitive"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Premier des trois cas présentés dans l’interprétation."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q5",
          "type": "mcq",
          "prompt": "L’invasion de tout l’organisme par les microbes passés dans la circulation sanguine s’appelle :",
          "options": [
            "L’adénite",
            "La lymphangite",
            "La septicémie",
            "La phagocytose"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définitions données dans le passage sur la réaction généralisée."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p02_q6",
          "type": "mcq",
          "prompt": "La défense assurée par les barrières, l’inflammation et la phagocytose est qualifiée de :",
          "options": [
            "Spécifique et acquise",
            "Non spécifique, innée et immédiate",
            "Humorale à anticorps",
            "Cellulaire à lymphocytes tueurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phrase de définition de la défense non spécifique dans la leçon."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l06_systeme_defense_organisme_p03",
      "order": 3,
      "title": "La défense spécifique : les expériences à l’anatoxine tétanique",
      "summary": "Analyser les expériences 1 à 3 chez la souris et le cobaye pour dégager la spécificité de la défense acquise.",
      "conceptExplanation": "Une anatoxine est une toxine microbienne atténuée qui a perdu son pouvoir pathogène tout en conservant son pouvoir antigénique.\nDans l’expérience 1, la souris témoin recevant seulement la toxine tétanique meurt, la souris A1 traitée à l’anatoxine tétanique puis à la toxine tétanique 15 jours plus tard survit, et la souris A2 traitée à l’anatoxine tétanique puis à la toxine diphtérique meurt.\nL’anatoxine tétanique protège donc contre la toxine tétanique mais pas contre la toxine diphtérique : il s’agit de la défense spécifique ou acquise, ou immunité spécifique.\nDans l’expérience 2, le sérum d’un animal immunisé protège un nouvel animal contre la toxine tétanique, alors que le sérum d’un témoin ne protège pas.\nDans l’expérience 3, contre le bacille de Koch, le sérum d’un cobaye immunisé ne protège pas, tandis que ses lymphocytes vivants protègent le cobaye receveur.",
      "keyRule": "Anatoxine tétanique égale protection contre le tétanos seulement : la spécificité se prouve par l’échec contre la diphtérie.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser l’expérience 1 des souris A1 et A2",
        "statement": "Analyse l’expérience 1 : la souris A1, traitée à l’anatoxine tétanique puis à la toxine tétanique, survit ; la souris A2, traitée à l’anatoxine tétanique puis à la toxine diphtérique, meurt, comme la souris témoin.",
        "methodSteps": [
          "Le témoin sans traitement meurt à la toxine tétanique : il n’est pas protégé.",
          "A1 survit : l’anatoxine tétanique l’a protégé contre la toxine correspondante.",
          "A2 meurt : la même anatoxine ne protège pas contre une autre toxine, la toxine diphtérique.",
          "La protection est donc dirigée contre un corps étranger précis."
        ],
        "conclusion": "C’est l’interprétation de l’expérience 1 : défense spécifique ou acquise."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’anatoxine",
          "stepTheme": "L’anatoxine",
          "stepBadge": "L’anatoxine",
          "paragraphText": "• Anatoxine : toxine microbienne atténuée, qui a perdu son pouvoir pathogène.\nElle conserve en revanche son pouvoir antigénique, c’est-à-dire sa capacité à déclencher la défense spécifique.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q1",
            "type": "mcq",
            "prompt": "Une anatoxine est une toxine qui a perdu :",
            "options": [
              "Son pouvoir antigénique",
              "Son pouvoir pathogène, tout en conservant son pouvoir antigénique",
              "Toute capacité d’injection",
              "Son lien avec le microbe d’origine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition donnée au début de l’interprétation des expériences de spécificité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le résultat de l’expérience 1",
          "stepTheme": "Le résultat de l’expérience 1",
          "stepBadge": "Le résultat de l’expérience 1",
          "paragraphText": "Dans l’expérience 1, les souris témoin et A2 meurent.\nSeule la souris A1, traitée à l’anatoxine tétanique puis à la toxine tétanique, survit.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q2",
            "type": "mcq",
            "prompt": "Dans l’expérience 1, la souris qui survit est :",
            "options": [
              "La souris témoin",
              "La souris A2, traitée puis exposée à la diphtérie",
              "La souris A1, traitée puis exposée à la toxine tétanique",
              "Aucune souris"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultats de l’expérience 1 rapportés dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La preuve de la spécificité",
          "stepTheme": "La preuve de la spécificité",
          "stepBadge": "La preuve de la spécificité",
          "paragraphText": "L’anatoxine tétanique protège l’animal A1 contre la toxine tétanique.\nElle ne protège pas l’animal A2 contre la toxine diphtérique : la défense obtenue est donc spécifique d’un antigène précis.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q3",
            "type": "mcq",
            "prompt": "La mort de la souris A2, pourtant traitée à l’anatoxine tétanique, prouve que :",
            "options": [
              "L’anatoxine est inefficace dans tous les cas",
              "La défense acquise est spécifique et ne protège pas contre la toxine diphtérique",
              "La toxine diphtérique est une anatoxine",
              "Le délai de 15 jours était trop court pour tout effet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de l’expérience 1 : immunité spécifique ou acquise."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le délai de 15 jours dans l’expérience",
          "stepTheme": "Le délai de 15 jours dans l’expérience",
          "stepBadge": "Le délai de 15 jours dans l’expérience",
          "paragraphText": "Dans l’expérience 1, l’injection de toxine intervient 15 jours après celle de l’anatoxine.\nCe délai laisse à l’organisme le temps de mettre en place sa défense spécifique avant l’épreuve.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q4",
            "type": "mcq",
            "prompt": "Dans l’expérience 1, la toxine est injectée après l’anatoxine avec un délai de :",
            "options": [
              "15 minutes",
              "15 jours",
              "15 semaines",
              "Aucun délai, en même temps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Protocole de l’expérience 1 décrit dans la présentation des expériences."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le sérum du témoin ne protège pas",
          "stepTheme": "Le sérum du témoin ne protège pas",
          "stepBadge": "Le sérum du témoin ne protège pas",
          "paragraphText": "Piège de l’expérience 2 : croire que tout sérum injecté protège contre la toxine tétanique.\nLa souris B2, qui a reçu le sérum de la souris témoin non traitée, meurt ; seule B1, qui a reçu le sérum de l’animal immunisé, survit.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q5",
            "type": "mcq",
            "prompt": "Dans l’expérience 2, la souris B2 meurt parce qu’elle a reçu :",
            "options": [
              "Le sérum d’un animal immunisé",
              "Des lymphocytes vivants immunisés",
              "Le sérum d’une souris témoin non traitée, sans protection",
              "Une anatoxine diphtérique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultats et analyse de l’expérience 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Contre le bacille de Koch, les lymphocytes protègent",
          "stepTheme": "Contre le bacille de Koch, les lymphocytes protègent",
          "stepBadge": "Contre le bacille de Koch, les lymphocytes protègent",
          "paragraphText": "Dans l’expérience 3, le cobaye B1, qui a reçu le sérum du cobaye immunisé contre le bacille de Koch, meurt.\nLe cobaye B2, qui a reçu les lymphocytes vivants du cobaye immunisé, survit au bacille de Koch.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q6",
            "type": "mcq",
            "prompt": "Dans l’expérience 3 contre le bacille de Koch, l’élément qui protège le cobaye receveur est :",
            "options": [
              "Le sérum du cobaye immunisé",
              "Les lymphocytes vivants du cobaye immunisé",
              "L’anatoxine tétanique",
              "Le sérum d’un cobaye témoin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats de l’expérience 3, qui annoncent la réponse à médiation cellulaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q1",
          "type": "mcq",
          "prompt": "Une anatoxine est une toxine qui a perdu :",
          "options": [
            "Son pouvoir antigénique",
            "Son pouvoir pathogène, tout en conservant son pouvoir antigénique",
            "Toute capacité d’injection",
            "Son lien avec le microbe d’origine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition donnée au début de l’interprétation des expériences de spécificité."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q2",
          "type": "mcq",
          "prompt": "Dans l’expérience 1, la souris qui survit est :",
          "options": [
            "La souris témoin",
            "La souris A2, traitée puis exposée à la diphtérie",
            "La souris A1, traitée puis exposée à la toxine tétanique",
            "Aucune souris"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultats de l’expérience 1 rapportés dans la leçon."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q3",
          "type": "mcq",
          "prompt": "La mort de la souris A2, pourtant traitée à l’anatoxine tétanique, prouve que :",
          "options": [
            "L’anatoxine est inefficace dans tous les cas",
            "La défense acquise est spécifique et ne protège pas contre la toxine diphtérique",
            "La toxine diphtérique est une anatoxine",
            "Le délai de 15 jours était trop court pour tout effet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de l’expérience 1 : immunité spécifique ou acquise."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q4",
          "type": "mcq",
          "prompt": "Dans l’expérience 1, la toxine est injectée après l’anatoxine avec un délai de :",
          "options": [
            "15 minutes",
            "15 jours",
            "15 semaines",
            "Aucun délai, en même temps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Protocole de l’expérience 1 décrit dans la présentation des expériences."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q5",
          "type": "mcq",
          "prompt": "Dans l’expérience 2, la souris B2 meurt parce qu’elle a reçu :",
          "options": [
            "Le sérum d’un animal immunisé",
            "Des lymphocytes vivants immunisés",
            "Le sérum d’une souris témoin non traitée, sans protection",
            "Une anatoxine diphtérique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultats et analyse de l’expérience 2."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p03_q6",
          "type": "mcq",
          "prompt": "Dans l’expérience 3 contre le bacille de Koch, l’élément qui protège le cobaye receveur est :",
          "options": [
            "Le sérum du cobaye immunisé",
            "Les lymphocytes vivants du cobaye immunisé",
            "L’anatoxine tétanique",
            "Le sérum d’un cobaye témoin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats de l’expérience 3, qui annoncent la réponse à médiation cellulaire."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l06_systeme_defense_organisme_p04",
      "order": 4,
      "title": "Immunité humorale à anticorps et immunité à médiation cellulaire",
      "summary": "Opposer la protection par le sérum et les anticorps à la protection par les lymphocytes vivants.",
      "conceptExplanation": "La protection immédiate et momentanée par le sérum d’un animal immunisé est due à une substance circulant dans le milieu intérieur, formée après l’injection d’anatoxine : c’est la réponse immunitaire humorale ou à médiation humorale, dont les molécules sont les anticorps.\nLes anticorps sont des protéines du groupe des immunoglobulines, dont on distingue cinq classes : IgA, IgE, IgD, IgG et IgM ; ce sont les IgG qui provoquent l’activation du complément, ensemble de protéines du sérum inactives hors immunisation, dont la fixation sur le complexe antigène-anticorps entraîne la lyse des bactéries.\nLes anticorps jouent aussi un rôle dans la phagocytose des bactéries et dans leur lyse par les cellules tueuses ou cellules K : ce sont les véritables effecteurs de l’immunité humorale.\nÀ l’inverse, contre le bacille de Koch, l’élément protecteur n’est pas dans le sérum mais dans les lymphocytes vivants transférés : c’est la réponse immunitaire à médiation cellulaire.\nLes lymphocytes prennent naissance dans la moelle osseuse et acquièrent leur maturité dans la moelle osseuse pour les lymphocytes B et dans le thymus pour les lymphocytes T ; les organes lymphoïdes comme les ganglions lymphatiques et la rate sont les lieux de leur stockage et de leur multiplication.",
      "keyRule": "Sérum qui protège égale immunité humorale à anticorps ; lymphocytes vivants qui protègent égale immunité à médiation cellulaire.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier les deux types de réponse dans les expériences 2 et 3",
        "statement": "À partir des expériences 2 et 3, identifie le type de réponse immunitaire mis en évidence dans chaque cas et son support.",
        "methodSteps": [
          "Expérience 2 : le sérum de l’animal immunisé protège, grâce à une substance circulante : réponse immunitaire humorale, supportée par les anticorps.",
          "Expérience 3 : le sérum ne protège pas contre le bacille de Koch, mais les lymphocytes vivants protègent : réponse immunitaire à médiation cellulaire.",
          "Les deux réponses sont spécifiques, mais leurs effecteurs sont différents."
        ],
        "conclusion": "Ce sont les deux interprétations données par la leçon pour les expériences 2 et 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les anticorps et les immunoglobulines",
          "stepTheme": "Les anticorps et les immunoglobulines",
          "stepBadge": "Les anticorps et les immunoglobulines",
          "paragraphText": "• Anticorps : protéines du groupe des immunoglobulines, molécules de l’immunité humorale.\nOn distingue cinq classes d’immunoglobulines : IgA, IgE, IgD, IgG et IgM.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q1",
            "type": "mcq",
            "prompt": "Les anticorps appartiennent au groupe des protéines appelé :",
            "options": [
              "Complément",
              "Immunoglobulines",
              "Lysozymes",
              "Perforines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Présentation des anticorps dans l’interprétation de l’expérience 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le complément et les IgG",
          "stepTheme": "Le complément et les IgG",
          "stepBadge": "Le complément et les IgG",
          "paragraphText": "Le complément est un ensemble de protéines du sérum, présentes hors de toute immunisation et inactives.\nLe complexe antigène-anticorps active ses fractions, et ce sont les IgG qui provoquent cette activation, qui entraîne la lyse des bactéries.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q2",
            "type": "mcq",
            "prompt": "L’activation du complément, qui aboutit à la lyse des bactéries, est provoquée par :",
            "options": [
              "Les IgA seulement",
              "Les IgG, via le complexe antigène-anticorps",
              "Les lymphocytes T tueurs",
              "Le lysozyme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Passage sur le document d’activation du complément dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La réponse humorale",
          "stepTheme": "La réponse humorale",
          "stepBadge": "La réponse humorale",
          "paragraphText": "• Réponse immunitaire humorale (ou à médiation humorale) : réponse dont les effecteurs sont les anticorps circulant dans le milieu intérieur.\nElle est mise en évidence par la protection transférée par le sérum d’un animal immunisé.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q3",
            "type": "mcq",
            "prompt": "La réponse immunitaire humorale a pour effecteurs :",
            "options": [
              "Les lymphocytes tueurs par contact",
              "Les anticorps circulants",
              "La perforine",
              "Les seuls macrophages"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de l’expérience 2 et définition reprise dans la phase effectrice."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Naissance et maturation des lymphocytes",
          "stepTheme": "Naissance et maturation des lymphocytes",
          "stepBadge": "Naissance et maturation des lymphocytes",
          "paragraphText": "Les cellules de l’immunité prennent naissance dans la moelle osseuse.\nElles acquièrent leur maturité dans la moelle osseuse pour les lymphocytes B et dans le thymus pour les lymphocytes T.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q4",
            "type": "mcq",
            "prompt": "Les lymphocytes T acquièrent leur maturité dans :",
            "options": [
              "La moelle osseuse",
              "La rate",
              "Le thymus",
              "Les ganglions uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Document sur la naissance et la maturation des lymphocytes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le sérum ne contient pas toujours la protection",
          "stepTheme": "Le sérum ne contient pas toujours la protection",
          "stepBadge": "Le sérum ne contient pas toujours la protection",
          "paragraphText": "Piège : déduire de l’expérience 2 que le sérum protège contre tous les microbes.\nContre le bacille de Koch, le sérum de l’immunisé ne protège pas : la protection est portée par les lymphocytes vivants, support de la médiation cellulaire.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q5",
            "type": "mcq",
            "prompt": "Contre le bacille de Koch, l’échec du sérum et le succès des lymphocytes vivants montrent que la protection est :",
            "options": [
              "Humorale à anticorps",
              "À médiation cellulaire",
              "Non spécifique par phagocytose seule",
              "Due aux barrières chimiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de l’expérience 3."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Stockage des lymphocytes",
          "stepTheme": "Stockage des lymphocytes",
          "stepBadge": "Stockage des lymphocytes",
          "paragraphText": "Les organes lymphoïdes sont les lieux de stockage et de multiplication des lymphocytes.\nLa leçon cite les ganglions lymphatiques et la rate comme exemples de ces organes.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q6",
            "type": "mcq",
            "prompt": "Un lieu de stockage et de multiplication des lymphocytes cité par la leçon est :",
            "options": [
              "Le foie uniquement",
              "Les ganglions lymphatiques et la rate",
              "La peau",
              "Le tube digestif seul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Phrase sur les organes lymphoïdes après la maturation des lymphocytes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q1",
          "type": "mcq",
          "prompt": "Les anticorps appartiennent au groupe des protéines appelé :",
          "options": [
            "Complément",
            "Immunoglobulines",
            "Lysozymes",
            "Perforines"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Présentation des anticorps dans l’interprétation de l’expérience 2."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q2",
          "type": "mcq",
          "prompt": "L’activation du complément, qui aboutit à la lyse des bactéries, est provoquée par :",
          "options": [
            "Les IgA seulement",
            "Les IgG, via le complexe antigène-anticorps",
            "Les lymphocytes T tueurs",
            "Le lysozyme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Passage sur le document d’activation du complément dans la leçon."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q3",
          "type": "mcq",
          "prompt": "La réponse immunitaire humorale a pour effecteurs :",
          "options": [
            "Les lymphocytes tueurs par contact",
            "Les anticorps circulants",
            "La perforine",
            "Les seuls macrophages"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de l’expérience 2 et définition reprise dans la phase effectrice."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q4",
          "type": "mcq",
          "prompt": "Les lymphocytes T acquièrent leur maturité dans :",
          "options": [
            "La moelle osseuse",
            "La rate",
            "Le thymus",
            "Les ganglions uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Document sur la naissance et la maturation des lymphocytes."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q5",
          "type": "mcq",
          "prompt": "Contre le bacille de Koch, l’échec du sérum et le succès des lymphocytes vivants montrent que la protection est :",
          "options": [
            "Humorale à anticorps",
            "À médiation cellulaire",
            "Non spécifique par phagocytose seule",
            "Due aux barrières chimiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de l’expérience 3."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p04_q6",
          "type": "mcq",
          "prompt": "Un lieu de stockage et de multiplication des lymphocytes cité par la leçon est :",
          "options": [
            "Le foie uniquement",
            "Les ganglions lymphatiques et la rate",
            "La peau",
            "Le tube digestif seul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phrase sur les organes lymphoïdes après la maturation des lymphocytes."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l06_systeme_defense_organisme_p05",
      "order": 5,
      "title": "Soi, non soi, CMH et greffes",
      "summary": "Définir le soi biologique, le rôle du complexe majeur d’histocompatibilité et les quatre types de greffes.",
      "conceptExplanation": "Une greffe est un transfert de tissu ou d’un fragment d’organe : dans un même organisme, c’est une autogreffe ; entre deux organismes d’espèce différente, une hétérogreffe ; entre deux vrais jumeaux, une isogreffe ; entre deux organismes de la même espèce, une homogreffe ou allogreffe. Une greffe d’organe entier est une transplantation.\nLorsqu’on pratique une autogreffe ou une isogreffe, il n’y a pas de rejet et le greffon s’intègre ; avec une hétérogreffe ou une homogreffe, il y a rejet du greffon.\nL’intégration est due à la reconnaissance du greffon par des protéines de surface propres à l’organisme, qui constituent le complexe majeur d’histocompatibilité ou CMH, appelé HLA chez l’homme.\nLe soi est l’ensemble des molécules propres à l’individu, résultat de l’expression de son génome, en particulier les marqueurs de son identité biologique : le groupe sanguin du système ABO et le CMH. Tout ce qui n’est pas toléré et déclenche une réaction immunitaire correspond au non soi, et toute substance dont l’introduction déclenche une réaction immunitaire est un antigène, dont la partie active est le déterminant antigénique ou épitope.",
      "keyRule": "Même CMH égale intégration du greffon, CMH différent égale rejet : le soi se reconnaît, le non soi se combat.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser les greffes de la situation d’évaluation",
        "statement": "Dans le document de la situation d’évaluation, l’autogreffe et l’isogreffe sont intégrées sans rejet, tandis que l’allogreffe et la xénogreffe sont rejetées. Interprète ces résultats et déduis le type de réaction mis en jeu.",
        "methodSteps": [
          "L’acceptation du greffon est due à sa reconnaissance par le CMH du receveur, quand donneur et receveur portent le même CMH.",
          "Le rejet s’explique par la non-reconnaissance du greffon par le CMH : le greffon est du non soi et n’est pas toléré.",
          "Le type de réaction mis en jeu dans l’acceptation ou le rejet de greffe est une réaction immunitaire à médiation cellulaire."
        ],
        "conclusion": "Ce sont l’analyse, l’interprétation et la déduction du corrigé de la situation d’évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les quatre types de greffes",
          "stepTheme": "Les quatre types de greffes",
          "stepBadge": "Les quatre types de greffes",
          "paragraphText": "La leçon définit quatre types de greffes selon le donneur et le receveur.\n• Autogreffe : dans un même organisme.\n• Isogreffe : entre deux vrais jumeaux.\n• Homogreffe ou allogreffe : entre deux organismes de la même espèce.\n• Hétérogreffe : entre deux organismes d’espèce différente.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q1",
            "type": "mcq",
            "prompt": "Une greffe entre deux vrais jumeaux s’appelle une :",
            "options": [
              "Autogreffe",
              "Hétérogreffe",
              "Isogreffe",
              "Allogreffe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définitions des types de greffes dans l’interprétation des expériences de greffes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Greffes intégrées et greffes rejetées",
          "stepTheme": "Greffes intégrées et greffes rejetées",
          "stepBadge": "Greffes intégrées et greffes rejetées",
          "paragraphText": "L’autogreffe et l’isogreffe ne donnent pas de rejet : le greffon s’intègre.\nL’hétérogreffe et l’homogreffe ou allogreffe donnent un rejet du greffon.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q2",
            "type": "mcq",
            "prompt": "Le type de greffe qui entraîne un rejet, d’après les résultats, est :",
            "options": [
              "L’autogreffe",
              "L’isogreffe",
              "L’homogreffe ou allogreffe entre organismes de même espèce non jumeaux",
              "Aucune greffe n’est jamais rejetée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse des résultats du document sur les différents types de greffes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le CMH ou HLA",
          "stepTheme": "Le CMH ou HLA",
          "stepBadge": "Le CMH ou HLA",
          "paragraphText": "• Complexe majeur d’histocompatibilité (CMH), ou HLA : protéines à la surface des membranes des cellules, propres à l’organisme.\nElles interviennent comme des récepteurs capables de reconnaître ce qui appartient à l’organisme, le soi.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q3",
            "type": "mcq",
            "prompt": "Le système de reconnaissance du soi formé par les protéines membranaires s’appelle :",
            "options": [
              "Le complément",
              "Le complexe majeur d’histocompatibilité ou HLA",
              "Le système ABO seul",
              "L’interleukine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation des résultats des greffes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Soi, non soi et antigène",
          "stepTheme": "Soi, non soi et antigène",
          "stepBadge": "Soi, non soi et antigène",
          "paragraphText": "• Soi : ensemble de molécules propres à l’individu, marqueurs de son identité biologique comme le système ABO et le CMH.\n• Non soi : tout ce qui n’est pas toléré par l’organisme et déclenche une réaction immunitaire.\n• Antigène : toute substance dont l’introduction dans l’organisme déclenche une réaction immunitaire.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q4",
            "type": "mcq",
            "prompt": "D’après le texte à compléter corrigé, les molécules étrangères à un organisme donné constituent le :",
            "options": [
              "Soi",
              "Non soi",
              "CMH du receveur",
              "Groupe sanguin ABO"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l’activité sur la reconnaissance du soi et du non soi, numéro 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les antigènes des hématies",
          "stepTheme": "Les antigènes des hématies",
          "stepBadge": "Les antigènes des hématies",
          "paragraphText": "Piège du texte à compléter : confondre les antigènes du CMH et ceux des globules rouges.\nLes antigènes portés par les hématies sont appelés agglutinogènes, tandis que les antigènes du CMH ou système HLA sont présents sur toutes les cellules sanguines à part les hématies.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q5",
            "type": "mcq",
            "prompt": "Les antigènes portés par les hématies sont appelés :",
            "options": [
              "Épitopes",
              "Agglutinogènes",
              "Immunoglobulines",
              "Interleukines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l’activité sur le soi et le non soi, numéro 6."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La transplantation",
          "stepTheme": "La transplantation",
          "stepBadge": "La transplantation",
          "paragraphText": "Une greffe peut concerner un organe entier.\nDans ce cas, la leçon précise que cette greffe porte un nom particulier : c’est une transplantation.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q6",
            "type": "mcq",
            "prompt": "Une greffe portant sur un organe entier s’appelle une :",
            "options": [
              "Autogreffe dans tous les cas",
              "Transplantation",
              "Phagocytose",
              "Sérothérapie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Phrase de l’interprétation des expériences de greffes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q1",
          "type": "mcq",
          "prompt": "Une greffe entre deux vrais jumeaux s’appelle une :",
          "options": [
            "Autogreffe",
            "Hétérogreffe",
            "Isogreffe",
            "Allogreffe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définitions des types de greffes dans l’interprétation des expériences de greffes."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q2",
          "type": "mcq",
          "prompt": "Le type de greffe qui entraîne un rejet, d’après les résultats, est :",
          "options": [
            "L’autogreffe",
            "L’isogreffe",
            "L’homogreffe ou allogreffe entre organismes de même espèce non jumeaux",
            "Aucune greffe n’est jamais rejetée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse des résultats du document sur les différents types de greffes."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q3",
          "type": "mcq",
          "prompt": "Le système de reconnaissance du soi formé par les protéines membranaires s’appelle :",
          "options": [
            "Le complément",
            "Le complexe majeur d’histocompatibilité ou HLA",
            "Le système ABO seul",
            "L’interleukine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation des résultats des greffes."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q4",
          "type": "mcq",
          "prompt": "D’après le texte à compléter corrigé, les molécules étrangères à un organisme donné constituent le :",
          "options": [
            "Soi",
            "Non soi",
            "CMH du receveur",
            "Groupe sanguin ABO"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l’activité sur la reconnaissance du soi et du non soi, numéro 2."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q5",
          "type": "mcq",
          "prompt": "Les antigènes portés par les hématies sont appelés :",
          "options": [
            "Épitopes",
            "Agglutinogènes",
            "Immunoglobulines",
            "Interleukines"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l’activité sur le soi et le non soi, numéro 6."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p05_q6",
          "type": "mcq",
          "prompt": "Une greffe portant sur un organe entier s’appelle une :",
          "options": [
            "Autogreffe dans tous les cas",
            "Transplantation",
            "Phagocytose",
            "Sérothérapie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phrase de l’interprétation des expériences de greffes."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l06_systeme_defense_organisme_p06",
      "order": 6,
      "title": "Le mécanisme en trois phases et la coopération cellulaire",
      "summary": "Décrire l’induction, l’amplification et la phase effectrice des réponses humorale et cellulaire.",
      "conceptExplanation": "Les réactions immunitaires se déroulent en trois étapes : l’identification de l’antigène, l’activation et la différenciation des lymphocytes, et la phase effectrice.\nPendant la phase de reconnaissance ou d’induction, le macrophage identifie l’antigène comme non soi, le phagocyte et le dégrade pour en extraire le déterminant antigénique, qu’il présente aux lymphocytes ; les macrophages et les lymphocytes B jouent le rôle de cellules présentatrices de l’antigène et les macrophages sécrètent une interleukine qui attire les lymphocytes.\nPendant la phase d’activation et de différenciation, les lymphocytes reconnus se divisent par mitose dans les organes lymphoïdes périphériques : les lymphocytes B se différencient en plasmocytes producteurs d’anticorps et en lymphocytes B mémoires, et les lymphocytes T en lymphocytes mémoires, régulateurs, cytotoxiques, à lymphokine et T4.\nPendant la phase effectrice, la réponse à médiation cellulaire repose sur les lymphocytes T cytotoxiques qui, par contact direct et libération de perforine créant des pores, provoquent la cytolyse des cellules porteuses de l’antigène ; la réponse à médiation humorale repose sur les plasmocytes et les anticorps circulants, qui forment avec l’antigène un complexe immun neutralisant.\nQuel que soit le type de réponse, il existe une collaboration entre macrophages, lymphocytes T et lymphocytes B : c’est la coopération cellulaire.",
      "keyRule": "Trois phases à retenir : induction par présentation de l’antigène, amplification par division et différenciation, phase effectrice humorale ou cellulaire.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir les affirmations justes sur le mécanisme (activité d’application)",
        "statement": "Parmi les affirmations de l’activité : les plasmocytes produisent des anticorps ; les plasmocytes sécrètent des immunoglobulines ; la réponse humorale part des lymphocytes B et a pour effecteurs les anticorps circulants ; la réponse cellulaire a pour supports les lymphocytes T8 cytotoxiques et mémoires. Vérifie-les.",
        "methodSteps": [
          "Les lymphocytes B eux-mêmes ne sécrètent pas directement les anticorps dans la formulation retenue : ce sont les plasmocytes qui les produisent.",
          "Les plasmocytes produisent bien des anticorps, qui sont des immunoglobulines.",
          "La réponse humorale part des lymphocytes B et ses effecteurs sont les anticorps circulants ; la réponse cellulaire repose sur les lymphocytes T8 cytotoxiques et mémoires.",
          "Le corrigé retient donc les affirmations 1, 3, 4, 5 et 7, la présence de l’antigène étant détectée par les lymphocytes B selon l’affirmation 1."
        ],
        "conclusion": "Ce sont les réponses retenues par le corrigé de l’activité : 1, 3, 4, 5 et 7."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La phase d’induction",
          "stepTheme": "La phase d’induction",
          "stepBadge": "La phase d’induction",
          "paragraphText": "• Phase de reconnaissance ou d’induction : le macrophage identifie l’antigène comme non soi, le phagocyte et le dégrade pour en extraire le déterminant antigénique.\nIl présente ensuite ce déterminant aux lymphocytes, qui deviennent actifs.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q1",
            "type": "mcq",
            "prompt": "Pendant la phase d’induction, le macrophage présente aux lymphocytes :",
            "options": [
              "Des anticorps tout prêts",
              "Le déterminant antigénique extrait de l’antigène phagocyté",
              "De la perforine",
              "Des agglutinogènes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Description de la première étape du mécanisme des réponses immunitaires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les cellules présentatrices de l’antigène",
          "stepTheme": "Les cellules présentatrices de l’antigène",
          "stepBadge": "Les cellules présentatrices de l’antigène",
          "paragraphText": "Les macrophages présentent l’antigène aux lymphocytes après phagocytose et sécrètent une interleukine qui attire les lymphocytes B et T.\nLes lymphocytes B, capables de détecter directement un antigène libre, jouent aussi le rôle de cellules présentatrices de l’antigène.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q2",
            "type": "mcq",
            "prompt": "Les cellules présentatrices de l’antigène, d’après la leçon, sont :",
            "options": [
              "Uniquement les polynucléaires",
              "Les macrophages et les lymphocytes B",
              "Les plasmocytes seulement",
              "Les hématies"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dernière phrase de l’interprétation des greffes sur la présentation de l’antigène."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La différenciation des lymphocytes B",
          "stepTheme": "La différenciation des lymphocytes B",
          "stepBadge": "La différenciation des lymphocytes B",
          "paragraphText": "Après activation, les lymphocytes B se différencient en deux types de cellules.\n• Les plasmocytes, qui produisent les anticorps rejetés dans le sang, avec développement des organites de synthèse des protéines.\n• Les lymphocytes B mémoires, à l’origine de la réponse secondaire plus rapide.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q3",
            "type": "mcq",
            "prompt": "Les plasmocytes, issus des lymphocytes B, sont les cellules qui :",
            "options": [
              "Détruisent les cellules infectées par contact",
              "Produisent les anticorps",
              "Présentent uniquement l’antigène sans sécrétion",
              "Deviennent des macrophages"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Description de la phase d’activation et de différenciation pour les lymphocytes B."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La cytolyse par la perforine",
          "stepTheme": "La cytolyse par la perforine",
          "stepBadge": "La cytolyse par la perforine",
          "paragraphText": "Les lymphocytes T cytotoxiques se fixent par contact direct sur les cellules porteuses de l’antigène spécifique.\nIls libèrent une enzyme, la perforine, qui s’incorpore à la membrane et y constitue des pores ; l’eau entre, la cellule gonfle et éclate : c’est la cytolyse.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q4",
            "type": "mcq",
            "prompt": "La destruction des cellules cibles par les lymphocytes cytotoxiques s’appelle :",
            "options": [
              "La phagocytose",
              "La cytolyse, par les pores de la perforine",
              "La neutralisation par complexe immun",
              "L’adénite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Description de la phase effectrice de la réponse à médiation cellulaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Quelle réponse pour quel adversaire",
          "stepTheme": "Quelle réponse pour quel adversaire",
          "stepBadge": "Quelle réponse pour quel adversaire",
          "paragraphText": "Piège : employer indifféremment les deux réponses effectrices.\nLa leçon précise que la réponse cellulaire est adaptée aux cellules hébergeant des virus ou d’autres parasites intracellulaires, tandis que la réponse humorale est mieux adaptée contre les bactéries extracellulaires et les molécules libres étrangères comme les toxines.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q5",
            "type": "mcq",
            "prompt": "La réponse immunitaire à médiation humorale est mieux adaptée contre :",
            "options": [
              "Les cellules hébergeant des virus",
              "Les bactéries extracellulaires et les molécules libres comme les toxines",
              "Les greffons d’organes",
              "Les parasites intracellulaires seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dernières phrases de la description des deux réponses de la phase effectrice."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La coopération cellulaire et les organes lymphoïdes",
          "stepTheme": "La coopération cellulaire et les organes lymphoïdes",
          "stepBadge": "La coopération cellulaire et les organes lymphoïdes",
          "paragraphText": "Quel que soit le type de réponse, macrophages, lymphocytes T et lymphocytes B collaborent : c’est la coopération cellulaire.\nLa multiplication des lymphocytes sensibilisés se fait dans les organes lymphoïdes périphériques, la rate et les ganglions lymphatiques, organes secondaires ou périphériques du tableau des organes lymphoïdes.",
          "exercise": {
            "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q6",
            "type": "mcq",
            "prompt": "Les organes où les lymphocytes s’activent et prolifèrent pendant la réponse sont :",
            "options": [
              "Les organes lymphoïdes périphériques, rate et ganglions lymphatiques",
              "Uniquement le thymus",
              "La moelle osseuse seule pour toutes les étapes",
              "La peau et les muqueuses"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Phase d’amplification et tableau des organes lymphoïdes : la rate et les ganglions sont les lieux d’activation et de prolifération."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q1",
          "type": "mcq",
          "prompt": "Pendant la phase d’induction, le macrophage présente aux lymphocytes :",
          "options": [
            "Des anticorps tout prêts",
            "Le déterminant antigénique extrait de l’antigène phagocyté",
            "De la perforine",
            "Des agglutinogènes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Description de la première étape du mécanisme des réponses immunitaires."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q2",
          "type": "mcq",
          "prompt": "Les cellules présentatrices de l’antigène, d’après la leçon, sont :",
          "options": [
            "Uniquement les polynucléaires",
            "Les macrophages et les lymphocytes B",
            "Les plasmocytes seulement",
            "Les hématies"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dernière phrase de l’interprétation des greffes sur la présentation de l’antigène."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q3",
          "type": "mcq",
          "prompt": "Les plasmocytes, issus des lymphocytes B, sont les cellules qui :",
          "options": [
            "Détruisent les cellules infectées par contact",
            "Produisent les anticorps",
            "Présentent uniquement l’antigène sans sécrétion",
            "Deviennent des macrophages"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Description de la phase d’activation et de différenciation pour les lymphocytes B."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q4",
          "type": "mcq",
          "prompt": "La destruction des cellules cibles par les lymphocytes cytotoxiques s’appelle :",
          "options": [
            "La phagocytose",
            "La cytolyse, par les pores de la perforine",
            "La neutralisation par complexe immun",
            "L’adénite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Description de la phase effectrice de la réponse à médiation cellulaire."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q5",
          "type": "mcq",
          "prompt": "La réponse immunitaire à médiation humorale est mieux adaptée contre :",
          "options": [
            "Les cellules hébergeant des virus",
            "Les bactéries extracellulaires et les molécules libres comme les toxines",
            "Les greffons d’organes",
            "Les parasites intracellulaires seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dernières phrases de la description des deux réponses de la phase effectrice."
        },
        {
          "id": "terminale_d_svt_l06_systeme_defense_organisme_p06_q6",
          "type": "mcq",
          "prompt": "Les organes où les lymphocytes s’activent et prolifèrent pendant la réponse sont :",
          "options": [
            "Les organes lymphoïdes périphériques, rate et ganglions lymphatiques",
            "Uniquement le thymus",
            "La moelle osseuse seule pour toutes les étapes",
            "La peau et les muqueuses"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Phase d’amplification et tableau des organes lymphoïdes : la rate et les ganglions sont les lieux d’activation et de prolifération."
        }
      ]
    }
  ]
};
