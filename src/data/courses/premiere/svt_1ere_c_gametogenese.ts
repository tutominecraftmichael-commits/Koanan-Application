import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 4 : La gamétogénèse chez les mammifères » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=937
export const SVT_1ERE_C_L04_GAMETOGENESE: CurriculumChapter = {
  "id": "premiere_c_svt_l04_gametogenese_mammiferes",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 4,
  "title": "Leçon 4 : La gamétogénèse chez les mammifères",
  "summary": "On détermine le rôle des gonades dans la production des cellules sexuelles, on décrit les étapes de la gamétogenèse et on compare la spermatogenèse et l’ovogenèse.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=937",
  "points": [
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01",
      "order": 1,
      "title": "Les gonades produisent les cellules sexuelles",
      "summary": "Les expériences de castration, de ligature et de destruction des tubes séminifères ou d’ovariectomie montrent que testicules et ovaires produisent les gamètes : c’est leur fonction exocrine.",
      "conceptExplanation": "La castration d’un rat pubère, la ligature des spermiductes et la destruction des tubes séminifères provoquent la stérilité du rat ; l’ovariectomie d’une rate pubère et la ligature des oviductes entraînent la stérilité de la rate.\nLes testicules produisent les cellules sexuelles mâles et assurent le développement des caractères sexuels ; la ligature des spermiductes empêche la sortie des spermatozoïdes fabriqués par les testicules, et les tubes séminifères sont le lieu de production des spermatozoïdes à l’intérieur des testicules.\nL’ablation des ovaires provoque l’arrêt de la production des cellules sexuelles femelles (ovocytes II), et la ligature des oviductes empêche la progression des ovocytes II dans les conduits génitaux.\nLes gonades mâles et femelles produisent donc effectivement les cellules sexuelles : c’est la fonction exocrine des gonades.",
      "keyRule": "Stérilité après ablation ou ligature : la preuve expérimentale du rôle des gonades.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter le tableau d’expériences",
        "statement": "On détruit par rayons X les tubes séminifères d’un rat : il devient stérile. Qu’en déduit-on ?",
        "methodSteps": [
          "La stérilité suit la destruction des tubes séminifères.",
          "Ces tubes sont donc nécessaires à la production des spermatozoïdes.",
          "Ils sont le lieu de production des spermatozoïdes dans les testicules."
        ],
        "conclusion": "Les tubes séminifères produisent les spermatozoïdes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction exocrine des gonades",
          "stepTheme": "La fonction exocrine des gonades",
          "stepBadge": "La fonction exocrine des gonades",
          "paragraphText": "• Fonction exocrine des gonades : production des cellules sexuelles par les gonades.\nTesticules chez le mâle et ovaires chez la femelle assurent cette fonction.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q1",
            "type": "mcq",
            "prompt": "La production des cellules sexuelles par les gonades est leur fonction :",
            "options": [
              "Exocrine",
              "Endocrine uniquement",
              "Digestive",
              "Respiratoire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conclusion de la partie I nomme fonction exocrine des gonades la production des cellules sexuelles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’effet de la castration",
          "stepTheme": "L’effet de la castration",
          "stepBadge": "L’effet de la castration",
          "paragraphText": "La castration d’un rat pubère provoque sa stérilité.\nCela montre que les testicules sont nécessaires à la production des gamètes mâles.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q2",
            "type": "mcq",
            "prompt": "La castration d’un rat pubère entraîne :",
            "options": [
              "Aucun effet",
              "La production d’ovocytes",
              "Sa stérilité",
              "Une fertilité accrue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le résultat numéro 01 du tableau d’expériences."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La ligature des spermiductes",
          "stepTheme": "La ligature des spermiductes",
          "stepBadge": "La ligature des spermiductes",
          "paragraphText": "La ligature des spermiductes à la sortie des testicules rend le rat stérile.\nElle empêche la sortie des spermatozoïdes fabriqués par les testicules.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q3",
            "type": "mcq",
            "prompt": "La ligature des spermiductes empêche :",
            "options": [
              "La méiose dans l’ovaire",
              "La sortie des spermatozoïdes fabriqués par les testicules",
              "La fabrication des ovocytes",
              "Le développement des caractères sexuels seuls"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation précise que la ligature empêche la sortie des spermatozoïdes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les tubes séminifères, lieu de production",
          "stepTheme": "Les tubes séminifères, lieu de production",
          "stepBadge": "Les tubes séminifères, lieu de production",
          "paragraphText": "• Tubes séminifères : structures à l’intérieur des testicules où sont produits les spermatozoïdes.\nLeur destruction par rayons X rend le rat stérile.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q4",
            "type": "mcq",
            "prompt": "Le lieu de production des spermatozoïdes dans les testicules est :",
            "options": [
              "L’épididyme seul",
              "Le spermiducte",
              "La cellule de Leydig seule",
              "Les tubes séminifères"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé dit que les tubes séminifères sont le lieu de production des spermatozoïdes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ovariectomie et ligature des oviductes",
          "stepTheme": "Ovariectomie et ligature des oviductes",
          "stepBadge": "Ovariectomie et ligature des oviductes",
          "paragraphText": "Piège : les deux gestes n’agissent pas au même niveau chez la rate.\nL’ovariectomie arrête la production des ovocytes II ; la ligature des oviductes empêche leur progression dans les conduits génitaux.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q5",
            "type": "mcq",
            "prompt": "La ligature des oviductes chez la rate empêche :",
            "options": [
              "La puberté",
              "La formation des follicules seuls",
              "La progression des ovocytes II dans les conduits génitaux",
              "La production des spermatozoïdes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’interprétation attribue à la ligature des oviductes le blocage de la progression des ovocytes II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le follicule mûr annoté",
          "stepTheme": "Le follicule mûr annoté",
          "stepBadge": "Le follicule mûr annoté",
          "paragraphText": "Exemple d’annotation d’un follicule mûr : granulosa, corona radiata, ovocyte, thèque interne, thèque externe, cumulus oophorus et liquide folliculaire.\nLe follicule mûr est observé dans l’ovaire d’une jeune femme.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q6",
            "type": "mcq",
            "prompt": "Dans un follicule mûr, le liquide folliculaire se trouve dans :",
            "options": [
              "La cavité du follicule, avec l’ovocyte entouré de la granulosa",
              "La cellule de Sertoli",
              "Le tube séminifère",
              "Le spermiducte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’activité d’application annote le follicule mûr avec granulosa, ovocyte, thèques, cumulus et liquide folliculaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q1",
          "type": "mcq",
          "prompt": "La production des cellules sexuelles par les gonades est leur fonction :",
          "options": [
            "Exocrine",
            "Endocrine uniquement",
            "Digestive",
            "Respiratoire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conclusion de la partie I nomme fonction exocrine des gonades la production des cellules sexuelles."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q2",
          "type": "mcq",
          "prompt": "La castration d’un rat pubère entraîne :",
          "options": [
            "Aucun effet",
            "La production d’ovocytes",
            "Sa stérilité",
            "Une fertilité accrue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le résultat numéro 01 du tableau d’expériences."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q3",
          "type": "mcq",
          "prompt": "La ligature des spermiductes empêche :",
          "options": [
            "La méiose dans l’ovaire",
            "La sortie des spermatozoïdes fabriqués par les testicules",
            "La fabrication des ovocytes",
            "Le développement des caractères sexuels seuls"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation précise que la ligature empêche la sortie des spermatozoïdes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q4",
          "type": "mcq",
          "prompt": "Le lieu de production des spermatozoïdes dans les testicules est :",
          "options": [
            "L’épididyme seul",
            "Le spermiducte",
            "La cellule de Leydig seule",
            "Les tubes séminifères"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé dit que les tubes séminifères sont le lieu de production des spermatozoïdes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q5",
          "type": "mcq",
          "prompt": "La ligature des oviductes chez la rate empêche :",
          "options": [
            "La puberté",
            "La formation des follicules seuls",
            "La progression des ovocytes II dans les conduits génitaux",
            "La production des spermatozoïdes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’interprétation attribue à la ligature des oviductes le blocage de la progression des ovocytes II."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q6",
          "type": "mcq",
          "prompt": "Dans un follicule mûr, le liquide folliculaire se trouve dans :",
          "options": [
            "La cavité du follicule, avec l’ovocyte entouré de la granulosa",
            "La cellule de Sertoli",
            "Le tube séminifère",
            "Le spermiducte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’activité d’application annote le follicule mûr avec granulosa, ovocyte, thèques, cumulus et liquide folliculaire."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02",
      "order": 2,
      "title": "La spermatogenèse : multiplication, accroissement, maturation et différenciation",
      "summary": "À partir des spermatogonies diploïdes, la spermatogenèse enchaîne multiplication, accroissement, maturation par méiose, puis différenciation de la spermatide en spermatozoïde.",
      "conceptExplanation": "À la puberté, les spermatogonies, cellules souches des gamètes mâles situées à la périphérie de chaque tube séminifère, se multiplient activement : ce sont des cellules diploïdes, c’est la phase de multiplication.\nLes spermatocytes I obtenus à la suite de la croissance des spermatogonies sont également diploïdes : c’est la phase d’accroissement.\nLors de la phase de maturation, le spermatocyte I subit la première division de méiose pour donner deux spermatocytes II haploïdes (division réductionnelle) ; le spermatocyte II subit la deuxième division pour donner deux spermatides (division équationnelle).\nLa spermatide subit de profondes transformations au cours de la phase de différenciation ou spermiogenèse pour donner le spermatozoïde, le gamète mâle.",
      "keyRule": "Un spermatocyte I donne, après méiose et différenciation, quatre spermatozoïdes.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte de la spermatogenèse",
        "statement": "Les cellules mères à la périphérie du tube séminifère subissent des mitoses, grandissent, puis la méiose donne des spermatides. Nomme les phases.",
        "methodSteps": [
          "Les cellules mères sont les spermatogonies et leurs mitoses sont la phase de multiplication.",
          "Leur croissance donne des spermatocytes I : phase d’accroissement.",
          "Le passage d’un spermatocyte I à quatre spermatides constitue la phase de maturation."
        ],
        "conclusion": "Multiplication, accroissement puis maturation se succèdent dans le tube séminifère."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les spermatogonies, cellules souches",
          "stepTheme": "Les spermatogonies, cellules souches",
          "stepBadge": "Les spermatogonies, cellules souches",
          "paragraphText": "• Spermatogonies : cellules souches des gamètes mâles, diploïdes, situées à la périphérie de chaque tube séminifère.\nLeur multiplication active commence à la puberté.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q1",
            "type": "mcq",
            "prompt": "Les spermatogonies sont des cellules :",
            "options": [
              "Haploïdes situées dans l’ovaire",
              "Sans noyau",
              "Déjà des spermatozoïdes",
              "Diploïdes situées à la périphérie du tube séminifère"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé décrit les spermatogonies comme diploïdes, à la périphérie du tube séminifère."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La phase d’accroissement",
          "stepTheme": "La phase d’accroissement",
          "stepBadge": "La phase d’accroissement",
          "paragraphText": "Les spermatocytes I sont obtenus à la suite de la croissance des spermatogonies.\nIls restent diploïdes pendant la phase d’accroissement.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q2",
            "type": "mcq",
            "prompt": "Le spermatocyte I est une cellule :",
            "options": [
              "Sans chromosome",
              "Diploïde",
              "Issue de la fécondation",
              "Haploïde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé précise que les spermatocytes I obtenus par croissance sont également diploïdes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La maturation par la méiose",
          "stepTheme": "La maturation par la méiose",
          "stepBadge": "La maturation par la méiose",
          "paragraphText": "Méthode : suivre les deux divisions : le spermatocyte I donne deux spermatocytes II haploïdes, puis chaque spermatocyte II donne deux spermatides.\nLa première division est réductionnelle, la deuxième équationnelle.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q3",
            "type": "mcq",
            "prompt": "La première division de méiose du spermatocyte I donne :",
            "options": [
              "Deux spermatocytes II haploïdes",
              "Deux spermatogonies",
              "Quatre spermatozoïdes",
              "Une spermatide unique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le déroulement de la phase de maturation décrit dans le résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La spermiogenèse",
          "stepTheme": "La spermiogenèse",
          "stepBadge": "La spermiogenèse",
          "paragraphText": "• Spermiogenèse : phase de différenciation au cours de laquelle la spermatide subit de profondes transformations pour donner le spermatozoïde.\nC’est la dernière phase, propre à la spermatogenèse.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q4",
            "type": "mcq",
            "prompt": "La spermatide devient spermatozoïde au cours de :",
            "options": [
              "La phase de multiplication",
              "La phase d’accroissement",
              "La spermiogenèse, phase de différenciation",
              "L’ovulation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé nomme spermiogenèse la différenciation de la spermatide en spermatozoïde."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Quatre cellules chez le mâle",
          "stepTheme": "Quatre cellules chez le mâle",
          "stepBadge": "Quatre cellules chez le mâle",
          "paragraphText": "Piège : la spermatogenèse ne donne pas une seule cellule par spermatocyte I.\nAprès les deux divisions, un spermatocyte I aboutit à quatre spermatides, donc quatre spermatozoïdes après différenciation.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q5",
            "type": "mcq",
            "prompt": "À partir d’un spermatocyte I, on obtient finalement :",
            "options": [
              "Deux spermatozoïdes",
              "Quatre spermatozoïdes",
              "Aucun gamète",
              "Un seul spermatozoïde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau de comparaison retient quatre cellules sexuelles à partir d’un spermatocyte I."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’accroissement moyen chez le mâle",
          "stepTheme": "L’accroissement moyen chez le mâle",
          "stepBadge": "L’accroissement moyen chez le mâle",
          "paragraphText": "Exemple de différence : lors de la phase d’accroissement, l’augmentation de volume est moyenne chez le mâle.\nElle sera importante chez la femelle, par accumulation de réserves.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q6",
            "type": "mcq",
            "prompt": "Chez le mâle, l’augmentation de volume à l’accroissement est :",
            "options": [
              "Infinie",
              "Importante",
              "Nulle",
              "Moyenne"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le tableau de comparaison indique une augmentation moyenne pour la spermatogenèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q1",
          "type": "mcq",
          "prompt": "Les spermatogonies sont des cellules :",
          "options": [
            "Haploïdes situées dans l’ovaire",
            "Sans noyau",
            "Déjà des spermatozoïdes",
            "Diploïdes situées à la périphérie du tube séminifère"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé décrit les spermatogonies comme diploïdes, à la périphérie du tube séminifère."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q2",
          "type": "mcq",
          "prompt": "Le spermatocyte I est une cellule :",
          "options": [
            "Sans chromosome",
            "Diploïde",
            "Issue de la fécondation",
            "Haploïde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé précise que les spermatocytes I obtenus par croissance sont également diploïdes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q3",
          "type": "mcq",
          "prompt": "La première division de méiose du spermatocyte I donne :",
          "options": [
            "Deux spermatocytes II haploïdes",
            "Deux spermatogonies",
            "Quatre spermatozoïdes",
            "Une spermatide unique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le déroulement de la phase de maturation décrit dans le résumé."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q4",
          "type": "mcq",
          "prompt": "La spermatide devient spermatozoïde au cours de :",
          "options": [
            "La phase de multiplication",
            "La phase d’accroissement",
            "La spermiogenèse, phase de différenciation",
            "L’ovulation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé nomme spermiogenèse la différenciation de la spermatide en spermatozoïde."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q5",
          "type": "mcq",
          "prompt": "À partir d’un spermatocyte I, on obtient finalement :",
          "options": [
            "Deux spermatozoïdes",
            "Quatre spermatozoïdes",
            "Aucun gamète",
            "Un seul spermatozoïde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau de comparaison retient quatre cellules sexuelles à partir d’un spermatocyte I."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q6",
          "type": "mcq",
          "prompt": "Chez le mâle, l’augmentation de volume à l’accroissement est :",
          "options": [
            "Infinie",
            "Importante",
            "Nulle",
            "Moyenne"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le tableau de comparaison indique une augmentation moyenne pour la spermatogenèse."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03",
      "order": 3,
      "title": "L’ovogenèse : une production discontinue et un seul ovocyte par ovocyte I",
      "summary": "L’ovogenèse débute avant la naissance, marque un long repos, puis la maturation à la puberté donne un seul ovocyte II et des globules polaires, avec une deuxième division bloquée en métaphase II.",
      "conceptExplanation": "Avant la naissance, chez le fœtus de la jeune fille, les ovogonies, cellules souches diploïdes, se divisent par de nombreuses mitoses pour donner plusieurs ovogonies filles : c’est la phase de multiplication.\nChaque ovogonie subit un important accroissement de volume, par accumulation de réserves nutritives, et devient un ovocyte de premier ordre ou ovocyte I, toujours diploïde, qui s’entoure de cellules folliculaires pour constituer le follicule primordial ; après la naissance, les ovocytes I entrent dans une longue période de repos.\nÀ la puberté débute la phase de maturation : la première division de méiose donne une grosse cellule haploïde, l’ovocyte II, et une très petite cellule, le premier globule polaire. La deuxième division, équationnelle, reste bloquée à la métaphase II et ne reprendra qu’à la fécondation.\nOn obtient donc, à partir d’un ovocyte I, une seule cellule sexuelle, l’ovotide ou ovocyte II.",
      "keyRule": "Chez la femelle : début avant la naissance, repos, puis un seul ovocyte utile par ovocyte I.",
      "formulas": [],
      "workedExample": {
        "title": "L’évolution du nombre de cellules chez la femme",
        "statement": "Le nombre d’ovogonies et d’ovocytes augmente pendant la vie embryonnaire puis diminue jusqu’à s’annuler vers 60 ans. Explique cette évolution.",
        "methodSteps": [
          "L’augmentation est due à la multiplication des ovogonies souches par mitoses pendant la vie embryonnaire.",
          "La diminution est due à l’atrésie puis à la transformation progressive des ovogonies.",
          "La production des gamètes femelles est donc discontinue."
        ],
        "conclusion": "L’ovogenèse est discontinue chez la femme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les ovogonies avant la naissance",
          "stepTheme": "Les ovogonies avant la naissance",
          "stepBadge": "Les ovogonies avant la naissance",
          "paragraphText": "• Ovogonies : cellules souches diploïdes de la lignée femelle.\nElles se multiplient par mitoses avant la naissance, chez le fœtus.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q1",
            "type": "mcq",
            "prompt": "La phase de multiplication de l’ovogenèse a lieu :",
            "options": [
              "Uniquement à la ménopause",
              "Uniquement à la puberté",
              "Avant la naissance, chez le fœtus",
              "Après la fécondation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé place la multiplication des ovogonies avant la naissance."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’accroissement important de l’ovocyte I",
          "stepTheme": "L’accroissement important de l’ovocyte I",
          "stepBadge": "L’accroissement important de l’ovocyte I",
          "paragraphText": "Chaque ovogonie subit un important accroissement de volume par accumulation de réserves nutritives.\nElle devient un ovocyte I diploïde entouré de cellules folliculaires : le follicule primordial.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q2",
            "type": "mcq",
            "prompt": "L’ovocyte I se forme par :",
            "options": [
              "Un important accroissement de volume de l’ovogonie",
              "La fécondation",
              "La spermiogenèse",
              "Une division réductionnelle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé décrit l’accroissement important par accumulation de réserves nutritives."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le long repos après la naissance",
          "stepTheme": "Le long repos après la naissance",
          "stepBadge": "Le long repos après la naissance",
          "paragraphText": "Après la naissance, les ovocytes I entrent dans une longue période de repos.\nLa maturation ne débute qu’à la puberté.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q3",
            "type": "mcq",
            "prompt": "Après la naissance, les ovocytes I :",
            "options": [
              "Disparaissent en un jour",
              "Achèvent immédiatement la méiose",
              "Se transforment en spermatozoïdes",
              "Entrent dans une longue période de repos"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’étape décrite entre l’accroissement et la puberté."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La première division donne l’ovocyte II",
          "stepTheme": "La première division donne l’ovocyte II",
          "stepBadge": "La première division donne l’ovocyte II",
          "paragraphText": "Méthode : la première division de méiose de l’ovocyte I est inégale.\nElle donne une grosse cellule haploïde, l’ovocyte II, et une très petite cellule, le premier globule polaire.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q4",
            "type": "mcq",
            "prompt": "La première division de l’ovocyte I donne :",
            "options": [
              "Deux ovocytes égaux",
              "Une grosse cellule, l’ovocyte II, et le premier globule polaire",
              "Quatre ovotides",
              "Un follicule primordial"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé décrit cette division inégale et ses deux produits."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La deuxième division est bloquée",
          "stepTheme": "La deuxième division est bloquée",
          "stepBadge": "La deuxième division est bloquée",
          "paragraphText": "Piège : la méiose femelle ne s’achève pas avant la fécondation.\nLa deuxième division reste bloquée à la métaphase II et ne reprendra qu’à la fécondation.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q5",
            "type": "mcq",
            "prompt": "La deuxième division de l’ovogenèse reste bloquée à :",
            "options": [
              "La métaphase II",
              "L’anaphase II",
              "La télophase I",
              "La prophase I"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé précise le blocage à la métaphase (métaphase II)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une seule cellule sexuelle par ovocyte I",
          "stepTheme": "Une seule cellule sexuelle par ovocyte I",
          "stepBadge": "Une seule cellule sexuelle par ovocyte I",
          "paragraphText": "Exemple chiffré de la comparaison : à partir d’un ovocyte I, on n’obtient qu’une seule cellule sexuelle.\nC’est l’ovotide ou ovocyte II, contrairement aux quatre spermatozoïdes du mâle.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q6",
            "type": "mcq",
            "prompt": "À partir d’un ovocyte I, on obtient :",
            "options": [
              "Aucune cellule",
              "Quatre ovules",
              "Une seule cellule sexuelle",
              "Deux ovocytes II"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau de comparaison retient une seule cellule sexuelle à partir d’un ovocyte I."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q1",
          "type": "mcq",
          "prompt": "La phase de multiplication de l’ovogenèse a lieu :",
          "options": [
            "Uniquement à la ménopause",
            "Uniquement à la puberté",
            "Avant la naissance, chez le fœtus",
            "Après la fécondation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé place la multiplication des ovogonies avant la naissance."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q2",
          "type": "mcq",
          "prompt": "L’ovocyte I se forme par :",
          "options": [
            "Un important accroissement de volume de l’ovogonie",
            "La fécondation",
            "La spermiogenèse",
            "Une division réductionnelle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé décrit l’accroissement important par accumulation de réserves nutritives."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q3",
          "type": "mcq",
          "prompt": "Après la naissance, les ovocytes I :",
          "options": [
            "Disparaissent en un jour",
            "Achèvent immédiatement la méiose",
            "Se transforment en spermatozoïdes",
            "Entrent dans une longue période de repos"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’étape décrite entre l’accroissement et la puberté."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q4",
          "type": "mcq",
          "prompt": "La première division de l’ovocyte I donne :",
          "options": [
            "Deux ovocytes égaux",
            "Une grosse cellule, l’ovocyte II, et le premier globule polaire",
            "Quatre ovotides",
            "Un follicule primordial"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé décrit cette division inégale et ses deux produits."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q5",
          "type": "mcq",
          "prompt": "La deuxième division de l’ovogenèse reste bloquée à :",
          "options": [
            "La métaphase II",
            "L’anaphase II",
            "La télophase I",
            "La prophase I"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé précise le blocage à la métaphase (métaphase II)."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q6",
          "type": "mcq",
          "prompt": "À partir d’un ovocyte I, on obtient :",
          "options": [
            "Aucune cellule",
            "Quatre ovules",
            "Une seule cellule sexuelle",
            "Deux ovocytes II"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau de comparaison retient une seule cellule sexuelle à partir d’un ovocyte I."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04",
      "order": 4,
      "title": "La méiose : deux divisions, brassages et biodiversité",
      "summary": "La méiose enchaîne une division réductionnelle et une division équationnelle ; les brassages inter et intra-chromosomiques créent la biodiversité, et une méiose atypique peut donner des anomalies comme la trisomie 21.",
      "conceptExplanation": "La méiose est un processus par lequel une cellule sexuelle diploïde subit deux divisions pour donner quatre cellules sexuelles haploïdes différentes entre elles et différentes de la cellule mère.\nLa première division est dite réductionnelle : prophase I (appariemment des homologues), métaphase I, anaphase I (séparation des homologues) et télophase I ; les chromosomes homologues sont équitablement répartis et chaque cellule fille contient la moitié du nombre de chromosomes de la cellule mère. La deuxième division est qualifiée d’équationnelle : prophase II, métaphase II, anaphase II (séparation des chromatides) et télophase II.\nLa biodiversité se fait par des brassages : le brassage interchromosomique, disposition aléatoire des chromosomes en métaphase I, et le brassage intrachromosomique ou crossing-over, échange de portions de chromosomes homologues à la prophase I.\nSi la séparation des chromosomes ne se fait pas normalement, on parle de méiose atypique, qui entraîne des gamètes anormaux et des anomalies ou aberrations chromosomiques, par exemple la trisomie 21.",
      "keyRule": "Réductionnelle puis équationnelle : la méiose divise par deux puis répartit les chromatides.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les étapes de la méiose",
        "statement": "On donne des étapes mêlées : interphase, début de prophase I, anaphase I, télophase I, métaphase II, anaphase II, télophase II. Replace-les dans l’ordre de la première puis de la deuxième division.",
        "methodSteps": [
          "La première division enchaîne prophase I, métaphase I, anaphase I et télophase I.",
          "La deuxième division enchaîne prophase II, métaphase II, anaphase II et télophase II.",
          "La méiose permet la biodiversité à travers les brassages."
        ],
        "conclusion": "Deux divisions successives, chacune en quatre phases."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la méiose",
          "stepTheme": "Définition de la méiose",
          "stepBadge": "Définition de la méiose",
          "paragraphText": "• Méiose : processus par lequel une cellule sexuelle diploïde subit deux divisions pour donner quatre cellules sexuelles haploïdes.\nCes cellules sont différentes entre elles et différentes de la cellule mère.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q1",
            "type": "mcq",
            "prompt": "La méiose donne, à partir d’une cellule diploïde :",
            "options": [
              "Deux cellules diploïdes identiques",
              "Quatre cellules haploïdes différentes",
              "Une seule cellule haploïde",
              "Quatre cellules diploïdes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée dans l’interprétation de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La première division est réductionnelle",
          "stepTheme": "La première division est réductionnelle",
          "stepBadge": "La première division est réductionnelle",
          "paragraphText": "Pendant la première division, les chromosomes homologues se séparent.\nChaque cellule fille contient la moitié du nombre de chromosomes de la cellule mère : la division est réductionnelle.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q2",
            "type": "mcq",
            "prompt": "La première division est dite réductionnelle car :",
            "options": [
              "Elle multiplie les chromosomes",
              "Elle supprime le noyau",
              "Elle sépare les chromatides",
              "Elle réduit de moitié le nombre de chromosomes des cellules filles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé explique la réduction par la répartition des homologues et la moitié des chromosomes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’anaphase I sépare les homologues",
          "stepTheme": "L’anaphase I sépare les homologues",
          "stepBadge": "L’anaphase I sépare les homologues",
          "paragraphText": "À l’anaphase I, les chromosomes homologues s’éloignent l’un de l’autre vers les pôles opposés.\nÀ l’anaphase II, ce sont les chromatides de chaque chromosome qui se séparent.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q3",
            "type": "mcq",
            "prompt": "À l’anaphase I, ce qui se sépare, ce sont :",
            "options": [
              "Les follicules",
              "Les chromatides sœurs",
              "Les chromosomes homologues",
              "Les globules polaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé décrit l’éloignement des chromosomes homologues à l’anaphase I."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le brassage interchromosomique",
          "stepTheme": "Le brassage interchromosomique",
          "stepBadge": "Le brassage interchromosomique",
          "paragraphText": "• Brassage interchromosomique : disposition aléatoire des chromosomes dans la cellule en métaphase I.\nIl est à l’origine de gamètes recombinés ou parentaux et d’une grande diversité.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q4",
            "type": "mcq",
            "prompt": "Le brassage interchromosomique se produit lors de :",
            "options": [
              "La métaphase I, par disposition aléatoire des homologues",
              "La télophase II uniquement",
              "La fécondation seule",
              "La multiplication des spermatogonies"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte de l’exercice 2 place les chromosomes homologues disposés aléatoirement à la métaphase I."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le crossing-over",
          "stepTheme": "Le crossing-over",
          "stepBadge": "Le crossing-over",
          "paragraphText": "• Brassage intrachromosomique ou crossing-over : échange de portions de chromosomes homologues à la prophase I.\nIl échange des fragments entre chromatides d’origine paternelle et maternelle.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q5",
            "type": "mcq",
            "prompt": "Le crossing-over est un échange de portions entre chromosomes homologues à :",
            "options": [
              "L’anaphase II",
              "La télophase II",
              "La métaphase II",
              "La prophase I"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé situe le crossing-over à la prophase I."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La méiose atypique",
          "stepTheme": "La méiose atypique",
          "stepBadge": "La méiose atypique",
          "paragraphText": "Piège : une mauvaise séparation des chromosomes n’est pas sans conséquence.\nOn parle de méiose atypique, qui entraîne des gamètes anormaux et des aberrations chromosomiques comme la trisomie 21.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q6",
            "type": "mcq",
            "prompt": "Une méiose atypique peut entraîner :",
            "options": [
              "La formation du follicule",
              "Des anomalies chromosomiques comme la trisomie 21",
              "Des gamètes parfaitement normaux",
              "La spermiogenèse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé cite la trisomie 21 comme exemple d’anomalie liée à une méiose atypique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q1",
          "type": "mcq",
          "prompt": "La méiose donne, à partir d’une cellule diploïde :",
          "options": [
            "Deux cellules diploïdes identiques",
            "Quatre cellules haploïdes différentes",
            "Une seule cellule haploïde",
            "Quatre cellules diploïdes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée dans l’interprétation de la partie II."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q2",
          "type": "mcq",
          "prompt": "La première division est dite réductionnelle car :",
          "options": [
            "Elle multiplie les chromosomes",
            "Elle supprime le noyau",
            "Elle sépare les chromatides",
            "Elle réduit de moitié le nombre de chromosomes des cellules filles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé explique la réduction par la répartition des homologues et la moitié des chromosomes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q3",
          "type": "mcq",
          "prompt": "À l’anaphase I, ce qui se sépare, ce sont :",
          "options": [
            "Les follicules",
            "Les chromatides sœurs",
            "Les chromosomes homologues",
            "Les globules polaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé décrit l’éloignement des chromosomes homologues à l’anaphase I."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q4",
          "type": "mcq",
          "prompt": "Le brassage interchromosomique se produit lors de :",
          "options": [
            "La métaphase I, par disposition aléatoire des homologues",
            "La télophase II uniquement",
            "La fécondation seule",
            "La multiplication des spermatogonies"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte de l’exercice 2 place les chromosomes homologues disposés aléatoirement à la métaphase I."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q5",
          "type": "mcq",
          "prompt": "Le crossing-over est un échange de portions entre chromosomes homologues à :",
          "options": [
            "L’anaphase II",
            "La télophase II",
            "La métaphase II",
            "La prophase I"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé situe le crossing-over à la prophase I."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q6",
          "type": "mcq",
          "prompt": "Une méiose atypique peut entraîner :",
          "options": [
            "La formation du follicule",
            "Des anomalies chromosomiques comme la trisomie 21",
            "Des gamètes parfaitement normaux",
            "La spermiogenèse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé cite la trisomie 21 comme exemple d’anomalie liée à une méiose atypique."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05",
      "order": 5,
      "title": "Comparer la spermatogenèse et l’ovogenèse",
      "summary": "Les deux gamétogenèses partagent multiplication, accroissement et maturation par mitoses et méiose, mais diffèrent par la différenciation, le nombre de gamètes, le volume et le rythme dans le temps.",
      "conceptExplanation": "Ressemblances : existence des phases de multiplication, d’accroissement et de maturation, et déroulement par mitose et méiose pour les deux gamétogenèses.\nDifférences : la spermatogenèse possède une phase de différenciation, absente dans l’ovogenèse ; à partir d’un spermatocyte I on obtient quatre cellules sexuelles (spermatozoïdes), alors qu’à partir d’un ovocyte I on n’obtient qu’une seule cellule sexuelle (ovocyte II ou ovotide).\nL’augmentation de volume lors de l’accroissement est moyenne dans la spermatogenèse et importante dans l’ovogenèse. La spermatogenèse débute à la puberté et est continue, alors que l’ovogenèse débute pendant la vie embryonnaire, est discontinue et s’arrête à la ménopause. La méiose donne des cellules identiques dans la spermatogenèse et des cellules différentes dans l’ovogenèse, selon le tableau du résumé.",
      "keyRule": "Comparer, c’est opposer différenciation, nombre de gamètes, volume, début et continuité.",
      "formulas": [],
      "workedExample": {
        "title": "Réaliser le tableau de comparaison",
        "statement": "Construis le tableau comparant les deux phénomènes demandés dans la situation d’évaluation.",
        "methodSteps": [
          "Ressemblances : multiplication, accroissement, maturation, mitoses et méiose.",
          "Différence majeure : différenciation présente chez le mâle, absente chez la femelle.",
          "Différence de bilan : quatre spermatozoïdes contre une seule cellule sexuelle femelle."
        ],
        "conclusion": "Le tableau oppose point par point les deux gamétogenèses."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les phases communes",
          "stepTheme": "Les phases communes",
          "stepBadge": "Les phases communes",
          "paragraphText": "Les deux gamétogenèses présentent les phases de multiplication, d’accroissement et de maturation.\nElles se déroulent toutes par mitose et méiose.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q1",
            "type": "mcq",
            "prompt": "Les phases communes aux deux gamétogenèses sont :",
            "options": [
              "Multiplication, accroissement et maturation",
              "Uniquement la différenciation",
              "Uniquement la fécondation",
              "Ovulation et ponte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la ligne Ressemblances du tableau de comparaison."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La différenciation, différence majeure",
          "stepTheme": "La différenciation, différence majeure",
          "stepBadge": "La différenciation, différence majeure",
          "paragraphText": "La spermatogenèse possède une phase de différenciation.\nL’ovogenèse n’en possède pas : elle s’achève par la maturation.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q2",
            "type": "mcq",
            "prompt": "La phase de différenciation existe :",
            "options": [
              "Uniquement dans l’ovogenèse",
              "Dans aucune des deux",
              "Uniquement dans la spermatogenèse",
              "Dans les deux gamétogenèses"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau oppose existence de la différenciation côté spermatogenèse et absence côté ovogenèse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Début et continuité",
          "stepTheme": "Début et continuité",
          "stepBadge": "Début et continuité",
          "paragraphText": "La spermatogenèse débute à la puberté et est continue.\nL’ovogenèse débute pendant la vie embryonnaire, est discontinue et s’arrête à la ménopause.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q3",
            "type": "mcq",
            "prompt": "L’ovogenèse se caractérise par un début :",
            "options": [
              "À la fécondation",
              "Pendant la vie embryonnaire, en discontinu, jusqu’à la ménopause",
              "À la puberté, en continu",
              "Après la ménopause"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la différence de rythme inscrite dans le tableau de comparaison."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le volume d’accroissement",
          "stepTheme": "Le volume d’accroissement",
          "stepBadge": "Le volume d’accroissement",
          "paragraphText": "Piège : l’accroissement n’a pas la même ampleur des deux côtés.\nIl est moyen chez le mâle et important chez la femelle, par accumulation de réserves nutritives.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q4",
            "type": "mcq",
            "prompt": "L’augmentation de volume à l’accroissement est importante dans :",
            "options": [
              "La spermatogenèse",
              "Aucune des deux",
              "La méiose atypique",
              "L’ovogenèse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le tableau attribue l’augmentation importante à l’ovogenèse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Nommer les documents A et B",
          "stepTheme": "Nommer les documents A et B",
          "stepBadge": "Nommer les documents A et B",
          "paragraphText": "Exemple de la situation d’évaluation : le document A présente la spermatogenèse et le document B l’ovogenèse.\nLes deux phénomènes sont ensuite comparés dans le corrigé.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q5",
            "type": "mcq",
            "prompt": "Dans la situation d’évaluation, le phénomène de formation des gamètes femelles est :",
            "options": [
              "La spermiogenèse",
              "La caryogamie",
              "L’ovogenèse",
              "La spermatogenèse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé nomme document B : l’ovogenèse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les étapes cochées du tableau",
          "stepTheme": "Les étapes cochées du tableau",
          "stepBadge": "Les étapes cochées du tableau",
          "paragraphText": "Dans l’exercice 1, la phase de différenciation n’est cochée que pour la spermatogenèse.\nMultiplication, accroissement et maturation sont cochés pour les deux.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q6",
            "type": "mcq",
            "prompt": "Selon le corrigé de l’exercice 1, la phase de différenciation concerne :",
            "options": [
              "La spermatogenèse seulement",
              "Aucune",
              "L’ovogenèse seulement",
              "Les deux également"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tableau corrigé place la différenciation uniquement du côté de la spermatogenèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q1",
          "type": "mcq",
          "prompt": "Les phases communes aux deux gamétogenèses sont :",
          "options": [
            "Multiplication, accroissement et maturation",
            "Uniquement la différenciation",
            "Uniquement la fécondation",
            "Ovulation et ponte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la ligne Ressemblances du tableau de comparaison."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q2",
          "type": "mcq",
          "prompt": "La phase de différenciation existe :",
          "options": [
            "Uniquement dans l’ovogenèse",
            "Dans aucune des deux",
            "Uniquement dans la spermatogenèse",
            "Dans les deux gamétogenèses"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau oppose existence de la différenciation côté spermatogenèse et absence côté ovogenèse."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q3",
          "type": "mcq",
          "prompt": "L’ovogenèse se caractérise par un début :",
          "options": [
            "À la fécondation",
            "Pendant la vie embryonnaire, en discontinu, jusqu’à la ménopause",
            "À la puberté, en continu",
            "Après la ménopause"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la différence de rythme inscrite dans le tableau de comparaison."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q4",
          "type": "mcq",
          "prompt": "L’augmentation de volume à l’accroissement est importante dans :",
          "options": [
            "La spermatogenèse",
            "Aucune des deux",
            "La méiose atypique",
            "L’ovogenèse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le tableau attribue l’augmentation importante à l’ovogenèse."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q5",
          "type": "mcq",
          "prompt": "Dans la situation d’évaluation, le phénomène de formation des gamètes femelles est :",
          "options": [
            "La spermiogenèse",
            "La caryogamie",
            "L’ovogenèse",
            "La spermatogenèse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé nomme document B : l’ovogenèse."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q6",
          "type": "mcq",
          "prompt": "Selon le corrigé de l’exercice 1, la phase de différenciation concerne :",
          "options": [
            "La spermatogenèse seulement",
            "Aucune",
            "L’ovogenèse seulement",
            "Les deux également"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tableau corrigé place la différenciation uniquement du côté de la spermatogenèse."
        }
      ]
    }
  ]
};
