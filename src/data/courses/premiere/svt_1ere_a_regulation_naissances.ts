import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 5 : La régulation des naissances » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=899
export const SVT_1ERE_A_L05_REGULATION_NAISSANCES: CurriculumChapter = {
  "id": "premiere_a1_svt_l05_regulation_naissances",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 5,
  "title": "Leçon 5 : La régulation des naissances",
  "summary": "La planification des naissances se fait par des méthodes naturelles, mécaniques et chimiques comme la pilule combinée, et elle apporte des avantages à la famille et à la société.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=899",
  "points": [
    {
      "id": "premiere_a1_svt_l05_regulation_naissances_p01",
      "order": 1,
      "title": "Les méthodes naturelles de contraception",
      "summary": "Présenter le coït interrompu, la méthode d'Ogino-Knaus, la méthode de Billings et la température, fondées sur la période féconde du cycle.",
      "conceptExplanation": "Certains moyens d'éviter les grossesses n'impliquent ni modification chimique, ni chirurgie, ni barrière artificielle entre les spermatozoïdes et l'ovule : ils consistent en l'abstinence sexuelle pendant la période féconde du cycle de la femme.\nLe coït interrompu consiste à retirer le pénis du vagin avant l'éjaculation pour laisser couler le sperme à l'air libre ; son taux d'échec est compris entre 16 et 20 pour cent, dû au manque de maîtrise de soi. L'abstinence sexuelle, qui consiste à s'abstenir de tout rapport sexuel, a un taux d'échec de 0 pour cent.\nLa méthode d'Ogino-Knaus repose sur un principe : l'ovulation se situe toujours 14 jours avant la fin du cycle, quelle que soit sa durée ; la période de fécondité s'étend 3 jours avant et 3 jours après l'ovulation, les 3 jours correspondant à la durée de vie des spermatozoïdes et de l'ovule. Pour un cycle de 28 jours, l'ovulation est au 14e jour et la période féconde va du 11e au 17e jour ; pour un cycle court de 21 jours, l'ovulation est au 7e jour et la période féconde va du 4e au 10e jour ; pour un cycle long de 32 jours, l'ovulation est au 18e jour et la période féconde va du 15e au 21e jour.\nLa méthode de Billings, ou de la glaire cervicale, permet de détecter l'ovulation : juste avant l'ovulation, la glaire est abondante, fluide et perméable aux spermatozoïdes ; en dehors, elle est peu abondante, épaisse et imperméable. La température rectale, prise chaque matin, diminue légèrement le jour de l'ovulation puis augmente brutalement.",
      "keyRule": "Toutes les méthodes naturelles repèrent la période féconde : Ogino par le calcul (ovulation 14 jours avant la fin du cycle), Billings par la glaire, la température par le thermomètre.",
      "formulas": [],
      "workedExample": {
        "title": "Appliquer Ogino-Knaus (situation d'évaluation)",
        "statement": "Une fille utilise la méthode fondée sur la durée du cycle et la période de fécondité. Son cycle est de 29 jours et ses dernières menstrues ont commencé le 10 janvier. Détermine la date probable de l'ovulation et celle des prochaines menstrues.",
        "methodSteps": [
          "La méthode utilisée est la méthode d'Ogino-Knaus.",
          "L'ovulation a lieu 14 jours avant la fin du cycle : pour un cycle de 29 jours, c'est le 15e jour du cycle, donc le 25 janvier.",
          "Les prochaines menstrues arrivent 29 jours après le 10 janvier, soit le 7 février.",
          "Un rapport sexuel le 25 janvier tombe donc le jour même de l'ovulation."
        ],
        "conclusion": "Corrigé de la situation d'évaluation : la jeune fille est considérée enceinte, le rapport ayant eu lieu le jour de l'ovulation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le principe des méthodes naturelles",
          "stepTheme": "Le principe des méthodes naturelles",
          "stepBadge": "Le principe des méthodes naturelles",
          "paragraphText": "Les méthodes naturelles n'impliquent ni modification chimique, ni chirurgie, ni barrière artificielle.\nElles consistent en l'abstinence sexuelle pendant la période féconde du cycle de la femme, repérée par le calcul, la glaire ou la température.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q1",
            "type": "mcq",
            "prompt": "Les méthodes naturelles reposent sur :",
            "options": [
              "Une barrière artificielle permanente",
              "Des hormones de synthèse",
              "Une intervention chirurgicale",
              "L'abstinence pendant la période féconde, repérée sans produit ni chirurgie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Texte adapté présenté dans la partie I-A."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le coït interrompu et son taux d'échec",
          "stepTheme": "Le coït interrompu et son taux d'échec",
          "stepBadge": "Le coït interrompu et son taux d'échec",
          "paragraphText": "Le coït interrompu consiste à retirer le pénis du vagin avant l'éjaculation.\nSon taux d'échec est compris entre 16 et 20 pour cent, dû au manque de maîtrise de soi.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q2",
            "type": "mcq",
            "prompt": "Le taux d'échec du coït interrompu est :",
            "options": [
              "De 0 pour cent",
              "Compris entre 16 et 20 pour cent, par manque de maîtrise de soi",
              "De 100 pour cent",
              "Identique à celui de l'abstinence"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse des méthodes naturelles dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le principe d'Ogino-Knaus",
          "stepTheme": "Le principe d'Ogino-Knaus",
          "stepBadge": "Le principe d'Ogino-Knaus",
          "paragraphText": "• Principe d'Ogino-Knaus : l'ovulation se situe toujours 14 jours avant la fin du cycle (période lutéale), quelle que soit la durée du cycle.\nLa méthode est donc basée sur la connaissance de la durée du cycle et de la période de fécondité.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q3",
            "type": "mcq",
            "prompt": "Selon la méthode d'Ogino-Knaus, l'ovulation se situe :",
            "options": [
              "Toujours au 1er jour du cycle",
              "Uniquement pour les cycles de 28 jours",
              "Toujours 14 jours avant la fin du cycle, quelle que soit sa durée",
              "Après les prochaines menstrues"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse de la méthode d'Ogino-Knaus ; affirmation 2 de l'activité jugée vraie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La période féconde d'un cycle de 28 jours",
          "stepTheme": "La période féconde d'un cycle de 28 jours",
          "stepBadge": "La période féconde d'un cycle de 28 jours",
          "paragraphText": "Pour un cycle moyen de 28 jours, la date de l'ovulation est le 14e jour.\nL'intervalle de fécondité oscille entre le 11e et le 17e jour, soit 3 jours avant et 3 jours après l'ovulation.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q4",
            "type": "mcq",
            "prompt": "Pour un cycle de 28 jours, la période de fécondité va :",
            "options": [
              "Du 11e au 17e jour",
              "Du 1er au 7e jour",
              "Du 20e au 28e jour",
              "Uniquement le 14e jour"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Calcul d'Ogino-Knaus pour les cycles moyens."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La méthode de Billings et la glaire cervicale",
          "stepTheme": "La méthode de Billings et la glaire cervicale",
          "stepBadge": "La méthode de Billings et la glaire cervicale",
          "paragraphText": "La méthode de Billings permet de détecter l'ovulation grâce à la glaire cervicale.\nJuste avant l'ovulation, la glaire est abondante, fluide et perméable aux spermatozoïdes ; en dehors de cette période, elle est peu abondante, épaisse et imperméable.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q5",
            "type": "mcq",
            "prompt": "Juste avant l'ovulation, la glaire cervicale est :",
            "options": [
              "Abondante, fluide et perméable aux spermatozoïdes",
              "Peu abondante et épaisse",
              "Absente",
              "Imperméable aux spermatozoïdes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse de la méthode de Billings dans la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La température rectale",
          "stepTheme": "La température rectale",
          "stepBadge": "La température rectale",
          "paragraphText": "La méthode de la température consiste à prendre la température corporelle chaque matin et à la noter sur un papier millimétré.\nCette température diminue légèrement le jour de l'ovulation puis augmente brutalement.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q6",
            "type": "mcq",
            "prompt": "Le jour de l'ovulation, la température rectale :",
            "options": [
              "Augmente brutalement d'abord",
              "Reste rigoureusement constante",
              "Diminue légèrement, puis augmente brutalement ensuite",
              "Ne peut pas être mesurée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse de la méthode de la température rectale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q1",
          "type": "mcq",
          "prompt": "Les méthodes naturelles reposent sur :",
          "options": [
            "Une barrière artificielle permanente",
            "Des hormones de synthèse",
            "Une intervention chirurgicale",
            "L'abstinence pendant la période féconde, repérée sans produit ni chirurgie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Texte adapté présenté dans la partie I-A."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q2",
          "type": "mcq",
          "prompt": "Le taux d'échec du coït interrompu est :",
          "options": [
            "De 0 pour cent",
            "Compris entre 16 et 20 pour cent, par manque de maîtrise de soi",
            "De 100 pour cent",
            "Identique à celui de l'abstinence"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse des méthodes naturelles dans la leçon."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q3",
          "type": "mcq",
          "prompt": "Selon la méthode d'Ogino-Knaus, l'ovulation se situe :",
          "options": [
            "Toujours au 1er jour du cycle",
            "Uniquement pour les cycles de 28 jours",
            "Toujours 14 jours avant la fin du cycle, quelle que soit sa durée",
            "Après les prochaines menstrues"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse de la méthode d'Ogino-Knaus ; affirmation 2 de l'activité jugée vraie."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q4",
          "type": "mcq",
          "prompt": "Pour un cycle de 28 jours, la période de fécondité va :",
          "options": [
            "Du 11e au 17e jour",
            "Du 1er au 7e jour",
            "Du 20e au 28e jour",
            "Uniquement le 14e jour"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Calcul d'Ogino-Knaus pour les cycles moyens."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q5",
          "type": "mcq",
          "prompt": "Juste avant l'ovulation, la glaire cervicale est :",
          "options": [
            "Abondante, fluide et perméable aux spermatozoïdes",
            "Peu abondante et épaisse",
            "Absente",
            "Imperméable aux spermatozoïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse de la méthode de Billings dans la leçon."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q6",
          "type": "mcq",
          "prompt": "Le jour de l'ovulation, la température rectale :",
          "options": [
            "Augmente brutalement d'abord",
            "Reste rigoureusement constante",
            "Diminue légèrement, puis augmente brutalement ensuite",
            "Ne peut pas être mesurée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse de la méthode de la température rectale."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l05_regulation_naissances_p02",
      "order": 2,
      "title": "Les méthodes mécaniques : stérilet, préservatifs et diaphragme",
      "summary": "Décrire le stérilet, les préservatifs masculin et féminin et le diaphragme, qui empêchent la nidation ou la rencontre des gamètes.",
      "conceptExplanation": "Le stérilet est un petit objet en plastique ou en cuivre de 3 à 5 cm de long, placé dans l'utérus pour une durée de 1 à 10 ans, pour empêcher la nidation du zygote.\nLe préservatif masculin est un étui en caoutchouc très mince qui recouvre le pénis pendant le coït et recueille le sperme pour éviter la fécondation.\nLe diaphragme est une petite coupe de caoutchouc convexe, de diamètre compris entre 60 et 90 mm ; recouvert de spermicide, il recouvre le col de l'utérus et empêche la rencontre des spermatozoïdes avec l'ovule.\nLe préservatif féminin est une gaine souple positionnée dans le vagin avant le rapport sexuel ; lubrifié, il recouvre le col de l'utérus par un anneau et empêche la rencontre des gamètes.",
      "keyRule": "Stérilet dans l'utérus contre la nidation ; préservatifs et diaphragme comme barrières contre la rencontre des gamètes.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître les méthodes mécaniques sur la planche",
        "statement": "La planche observée montre quatre moyens contraceptifs. Lesquels sont des méthodes mécaniques ?",
        "methodSteps": [
          "La planche montre le stérilet, le diaphragme, le préservatif féminin et le préservatif masculin.",
          "Ce sont les quatre méthodes mécaniques analysées dans la partie I-B."
        ],
        "conclusion": "Résultats de l'observation de la planche, partie I-B."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le stérilet",
          "stepTheme": "Le stérilet",
          "stepBadge": "Le stérilet",
          "paragraphText": "• Stérilet : petit objet en plastique ou en cuivre de 3 à 5 cm de long, placé dans l'utérus.\nIl y reste de 1 à 10 ans et empêche la nidation du zygote.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q1",
            "type": "mcq",
            "prompt": "Le stérilet empêche une grossesse en :",
            "options": [
              "Bloquant l'ovulation par les hormones",
              "Empêchant la nidation du zygote dans l'utérus où il est placé",
              "Détruisant les spermatozoïdes dans le vagin",
              "Fermant définitivement les trompes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse des méthodes mécaniques, partie I-B."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le préservatif masculin",
          "stepTheme": "Le préservatif masculin",
          "stepBadge": "Le préservatif masculin",
          "paragraphText": "Le préservatif masculin est un étui en caoutchouc très mince qui recouvre le pénis pendant le coït.\nIl recueille le sperme pour éviter la fécondation.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q2",
            "type": "mcq",
            "prompt": "Le préservatif masculin agit en :",
            "options": [
              "Empêchant la nidation dans l'utérus",
              "Bloquant la sécrétion de FSH",
              "Recouvrant le col de l'utérus",
              "Recouvrant le pénis et recueillant le sperme pour éviter la fécondation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse des méthodes mécaniques, partie I-B."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le diaphragme",
          "stepTheme": "Le diaphragme",
          "stepBadge": "Le diaphragme",
          "paragraphText": "Le diaphragme est une petite coupe de caoutchouc convexe de 60 à 90 mm de diamètre.\nRecouvert de spermicide, il recouvre le col de l'utérus et empêche la rencontre des spermatozoïdes avec l'ovule.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q3",
            "type": "mcq",
            "prompt": "Le diaphragme empêche :",
            "options": [
              "La nidation du zygote",
              "L'ovulation",
              "La rencontre des spermatozoïdes avec l'ovule, en recouvrant le col de l'utérus",
              "La sécrétion de progestérone"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse des méthodes mécaniques et affirmation 6 de l'activité jugée vraie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le préservatif féminin",
          "stepTheme": "Le préservatif féminin",
          "stepBadge": "Le préservatif féminin",
          "paragraphText": "Le préservatif féminin est une gaine souple positionnée dans le vagin avant le rapport sexuel.\nLubrifié, il recouvre le col de l'utérus par un anneau et empêche la rencontre des gamètes.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q4",
            "type": "mcq",
            "prompt": "Le préservatif féminin est :",
            "options": [
              "Une gaine souple placée dans le vagin qui empêche la rencontre des gamètes",
              "Un objet placé dans l'utérus pour 10 ans",
              "Une coupe de caoutchouc de 60 à 90 mm uniquement",
              "Un comprimé d'hormones"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse des méthodes mécaniques, partie I-B."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Mécanique ne veut pas dire hormonale",
          "stepTheme": "Mécanique ne veut pas dire hormonale",
          "stepBadge": "Mécanique ne veut pas dire hormonale",
          "paragraphText": "Piège : le stérilet, les préservatifs et le diaphragme n'apportent aucune hormone.\nLes méthodes chimiques, comme la pilule, font l'objet de la partie suivante de la leçon.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q5",
            "type": "mcq",
            "prompt": "Les méthodes de la planche (stérilet, préservatifs, diaphragme) sont dites mécaniques parce qu'elles :",
            "options": [
              "Contiennent des œstrogènes de synthèse",
              "Nécessitent une prise quotidienne",
              "Bloquent la GnRH",
              "Font barrière ou empêchent la nidation sans hormones"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Conclusion de la partie I-B : la planification se fait par des méthodes mécaniques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La contraception, définition",
          "stepTheme": "La contraception, définition",
          "stepBadge": "La contraception, définition",
          "paragraphText": "La contraception est définie à la fin de la partie I.\nC'est un ensemble de méthodes et moyens utilisés en vue d'empêcher la conception tout en ayant des rapports sexuels.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q6",
            "type": "mcq",
            "prompt": "La contraception est définie comme :",
            "options": [
              "L'interdiction de tout rapport sexuel",
              "L'ensemble des méthodes utilisées pour empêcher la conception tout en ayant des rapports sexuels",
              "Uniquement la pilule",
              "Le traitement de la stérilité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion partielle de la partie I ; affirmation 3 de l'activité jugée vraie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q1",
          "type": "mcq",
          "prompt": "Le stérilet empêche une grossesse en :",
          "options": [
            "Bloquant l'ovulation par les hormones",
            "Empêchant la nidation du zygote dans l'utérus où il est placé",
            "Détruisant les spermatozoïdes dans le vagin",
            "Fermant définitivement les trompes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse des méthodes mécaniques, partie I-B."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q2",
          "type": "mcq",
          "prompt": "Le préservatif masculin agit en :",
          "options": [
            "Empêchant la nidation dans l'utérus",
            "Bloquant la sécrétion de FSH",
            "Recouvrant le col de l'utérus",
            "Recouvrant le pénis et recueillant le sperme pour éviter la fécondation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse des méthodes mécaniques, partie I-B."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q3",
          "type": "mcq",
          "prompt": "Le diaphragme empêche :",
          "options": [
            "La nidation du zygote",
            "L'ovulation",
            "La rencontre des spermatozoïdes avec l'ovule, en recouvrant le col de l'utérus",
            "La sécrétion de progestérone"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse des méthodes mécaniques et affirmation 6 de l'activité jugée vraie."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q4",
          "type": "mcq",
          "prompt": "Le préservatif féminin est :",
          "options": [
            "Une gaine souple placée dans le vagin qui empêche la rencontre des gamètes",
            "Un objet placé dans l'utérus pour 10 ans",
            "Une coupe de caoutchouc de 60 à 90 mm uniquement",
            "Un comprimé d'hormones"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse des méthodes mécaniques, partie I-B."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q5",
          "type": "mcq",
          "prompt": "Les méthodes de la planche (stérilet, préservatifs, diaphragme) sont dites mécaniques parce qu'elles :",
          "options": [
            "Contiennent des œstrogènes de synthèse",
            "Nécessitent une prise quotidienne",
            "Bloquent la GnRH",
            "Font barrière ou empêchent la nidation sans hormones"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Conclusion de la partie I-B : la planification se fait par des méthodes mécaniques."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q6",
          "type": "mcq",
          "prompt": "La contraception est définie comme :",
          "options": [
            "L'interdiction de tout rapport sexuel",
            "L'ensemble des méthodes utilisées pour empêcher la conception tout en ayant des rapports sexuels",
            "Uniquement la pilule",
            "Le traitement de la stérilité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion partielle de la partie I ; affirmation 3 de l'activité jugée vraie."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l05_regulation_naissances_p03",
      "order": 3,
      "title": "La pilule combinée et son mode d'action à trois niveaux",
      "summary": "Expliquer comment la pilule combinée bloque les pics de FSH et de LH, empêche l'ovulation et rend l'utérus impropre à la nidation.",
      "conceptExplanation": "Pendant la prise de pilule, la quantité d'œstrogènes diminue et devient constante, la progestérone disparaît et les pics de FSH et de LH disparaissent, alors qu'au cours d'un cycle sans pilule, les hormones présentent des pics vers le milieu du cycle.\nLes pilules combinées contiennent à la fois les œstrogènes et la progestérone, hormones ovariennes de synthèse. Elles agissent à trois niveaux. Au niveau du complexe hypothalamo-hypophysaire, le taux élevé d'hormones ovariennes exerce un rétrocontrôle négatif sur la production de FSH et de LH : le taux faible de FSH ne permet plus la maturation des follicules et l'absence du pic de LH ne permet aucune ovulation.\nAu niveau des ovaires, la non-maturation des follicules explique le faible taux d'œstrogènes et l'absence d'ovulation empêche la formation du corps jaune, donc la production de progestérone. Au niveau de l'utérus, la dentelle utérine s'atrophie et devient impropre à la nidation, et la glaire cervicale devient épaisse et empêche le passage des spermatozoïdes au niveau du col.",
      "keyRule": "Pilule combinée = rétrocontrôle négatif : plus de pic de FSH ni de LH, pas de maturation, pas d'ovulation, pas de corps jaune, dentelle atrophiée et glaire épaisse.",
      "formulas": [],
      "workedExample": {
        "title": "Lire les courbes avec et sans pilule",
        "statement": "Compare les courbes d'hormones d'un cycle normal et d'un cycle avec prise régulière de pilule. Que constate-t-on ?",
        "methodSteps": [
          "Sans pilule, les quantités d'hormones ovariennes et antéhypophysaires présentent des pics vers le milieu du cycle.",
          "Avec la pilule, les quantités d'hormones diminuent et les pics de sécrétion disparaissent.",
          "C'est ce blocage des pics qui empêche la maturation des follicules et l'ovulation."
        ],
        "conclusion": "Analyse et interprétation des courbes de la partie I-C."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La pilule combinée",
          "stepTheme": "La pilule combinée",
          "stepBadge": "La pilule combinée",
          "paragraphText": "• Pilule combinée : comprimé contenant à la fois les œstrogènes et la progestérone, hormones ovariennes de synthèse.\nSa prise est quotidienne et régulière pendant le cycle contraceptif.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q1",
            "type": "mcq",
            "prompt": "La pilule combinée contient :",
            "options": [
              "Uniquement de la progestérone naturelle",
              "À la fois les œstrogènes et la progestérone de synthèse",
              "De la FSH et de la LH",
              "Aucune hormone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de l'expérience de la partie I-C."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La disparition des pics de FSH et de LH",
          "stepTheme": "La disparition des pics de FSH et de LH",
          "stepBadge": "La disparition des pics de FSH et de LH",
          "paragraphText": "Pendant la prise de la pilule, les pics de FSH et de LH disparaissent.\nLa quantité d'œstrogènes diminue et devient constante et la progestérone disparaît.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q2",
            "type": "mcq",
            "prompt": "Pendant la prise régulière de pilule, les pics de FSH et de LH :",
            "options": [
              "Deviennent plus élevés",
              "Se déplacent au 28e jour",
              "Restent identiques au cycle normal",
              "Disparaissent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Résultats des dosages de la partie I-C."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le rétrocontrôle négatif au niveau hypothalamo-hypophysaire",
          "stepTheme": "Le rétrocontrôle négatif au niveau hypothalamo-hypophysaire",
          "stepBadge": "Le rétrocontrôle négatif au niveau hypothalamo-hypophysaire",
          "paragraphText": "Le taux élevé d'hormones ovariennes apportées par la pilule exerce un rétrocontrôle négatif sur la production de FSH et de LH.\nConséquence : le taux faible de FSH ne permet plus la maturation des follicules ovariens.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q3",
            "type": "mcq",
            "prompt": "Au niveau du complexe hypothalamo-hypophysaire, la pilule agit par :",
            "options": [
              "Un rétrocontrôle négatif qui fait chuter la production de FSH et de LH",
              "Un rétrocontrôle positif qui augmente la FSH",
              "Une action directe sur l'endomètre uniquement",
              "Une stimulation de la GnRH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Interprétation, premier niveau d'action de la pilule."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Pas d'ovulation, pas de corps jaune",
          "stepTheme": "Pas d'ovulation, pas de corps jaune",
          "stepBadge": "Pas d'ovulation, pas de corps jaune",
          "paragraphText": "L'absence du pic de LH ne permet aucune ovulation.\nSans ovulation, il n'y a pas formation de corps jaune, donc plus de production de progestérone par les ovaires.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q4",
            "type": "mcq",
            "prompt": "Sans pic de LH sous pilule, il en résulte :",
            "options": [
              "Une double ovulation",
              "Un corps jaune persistant",
              "Aucune ovulation et pas de formation de corps jaune",
              "Une production accrue de progestérone"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation, deuxième niveau d'action (ovaires)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'action au niveau de l'utérus",
          "stepTheme": "L'action au niveau de l'utérus",
          "stepBadge": "L'action au niveau de l'utérus",
          "paragraphText": "Au niveau de l'utérus, la dentelle utérine s'atrophie et devient impropre à la nidation.\nDe plus, la glaire cervicale devient épaisse et empêche le passage des spermatozoïdes au niveau du col de l'utérus.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q5",
            "type": "mcq",
            "prompt": "Au niveau utérin, la pilule rend :",
            "options": [
              "La dentelle plus épaisse et plus accueillante",
              "La glaire fluide et perméable",
              "L'endomètre identique à un cycle normal",
              "La dentelle atrophiée et impropre à la nidation, avec une glaire cervicale épaisse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Interprétation, troisième niveau d'action (utérus)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La pilule agit à trois niveaux, pas à un seul",
          "stepTheme": "La pilule agit à trois niveaux, pas à un seul",
          "stepBadge": "La pilule agit à trois niveaux, pas à un seul",
          "paragraphText": "Piège : réduire l'action de la pilule au seul blocage de l'ovulation.\nLa leçon décrit trois niveaux complémentaires : complexe hypothalamo-hypophysaire, ovaires et utérus.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q6",
            "type": "mcq",
            "prompt": "Les trois niveaux d'action de la pilule combinée sont :",
            "options": [
              "Foie, reins et utérus",
              "Complexe hypothalamo-hypophysaire, ovaires et utérus",
              "Utérus uniquement",
              "Ovaires, trompes et vagin uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie I-C."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q1",
          "type": "mcq",
          "prompt": "La pilule combinée contient :",
          "options": [
            "Uniquement de la progestérone naturelle",
            "À la fois les œstrogènes et la progestérone de synthèse",
            "De la FSH et de la LH",
            "Aucune hormone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de l'expérience de la partie I-C."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q2",
          "type": "mcq",
          "prompt": "Pendant la prise régulière de pilule, les pics de FSH et de LH :",
          "options": [
            "Deviennent plus élevés",
            "Se déplacent au 28e jour",
            "Restent identiques au cycle normal",
            "Disparaissent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Résultats des dosages de la partie I-C."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q3",
          "type": "mcq",
          "prompt": "Au niveau du complexe hypothalamo-hypophysaire, la pilule agit par :",
          "options": [
            "Un rétrocontrôle négatif qui fait chuter la production de FSH et de LH",
            "Un rétrocontrôle positif qui augmente la FSH",
            "Une action directe sur l'endomètre uniquement",
            "Une stimulation de la GnRH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Interprétation, premier niveau d'action de la pilule."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q4",
          "type": "mcq",
          "prompt": "Sans pic de LH sous pilule, il en résulte :",
          "options": [
            "Une double ovulation",
            "Un corps jaune persistant",
            "Aucune ovulation et pas de formation de corps jaune",
            "Une production accrue de progestérone"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation, deuxième niveau d'action (ovaires)."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q5",
          "type": "mcq",
          "prompt": "Au niveau utérin, la pilule rend :",
          "options": [
            "La dentelle plus épaisse et plus accueillante",
            "La glaire fluide et perméable",
            "L'endomètre identique à un cycle normal",
            "La dentelle atrophiée et impropre à la nidation, avec une glaire cervicale épaisse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Interprétation, troisième niveau d'action (utérus)."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q6",
          "type": "mcq",
          "prompt": "Les trois niveaux d'action de la pilule combinée sont :",
          "options": [
            "Foie, reins et utérus",
            "Complexe hypothalamo-hypophysaire, ovaires et utérus",
            "Utérus uniquement",
            "Ovaires, trompes et vagin uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie I-C."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l05_regulation_naissances_p04",
      "order": 4,
      "title": "Les avantages de la planification familiale",
      "summary": "Dégager les avantages de la contraception pour la santé de la mère et de l'enfant, l'équilibre familial et l'éducation des enfants.",
      "conceptExplanation": "Le planning familial permet aux couples de mettre les écarts souhaités entre les grossesses et de choisir le moment propice pour faire un enfant, par l'espacement des naissances et la limitation du nombre d'enfants.\nIl réduit le risque de grossesse pour les femmes et les couples qui ne veulent pas avoir de bébé, et réduit le nombre de grossesses chez les adolescentes. Les écarts entre les accouchements aident les mères à revenir à la santé normale et à restaurer les nutriments perdus pendant la grossesse ; selon l'OMS, garder un écart entre deux enfants réduit le risque de décès prématuré du nouveau-né.\nL'analyse de la leçon retient : la préservation de la santé de la mère et de l'enfant, l'équilibre familial, la gestion rationnelle des ressources familiales et une meilleure éducation des enfants. La planification familiale élimine aussi la peur d'une grossesse non désirée et peut améliorer la vie sexuelle, les relations au sein du couple et le bien-être de la famille.\nUne méthode contraceptive doit être temporaire, réversible et inoffensive pour le couple et pour les futurs enfants.",
      "keyRule": "Planifier, c'est espacer et choisir : santé de la mère et de l'enfant préservée, équilibre familial, ressources mieux gérées et enfants mieux éduqués.",
      "formulas": [],
      "workedExample": {
        "title": "Relever les avantages (activité d'application)",
        "statement": "Parmi neuf propositions mêlant avantages et inconvénients, relève les avantages de la contraception sur la vie familiale.",
        "methodSteps": [
          "Les propositions retenues sont la préservation de la santé de la mère et de l'enfant, l'équilibre familial, la gestion rationnelle des ressources familiales, la meilleure éducation des enfants et le bien-être familial.",
          "La détérioration de la santé, l'épuisement des ressources et le divorce ne sont pas des avantages."
        ],
        "conclusion": "Corrigé de l'activité de la partie II : propositions 1, 3, 5, 7 et 8."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Espacer les grossesses",
          "stepTheme": "Espacer les grossesses",
          "stepBadge": "Espacer les grossesses",
          "paragraphText": "Le planning familial permet aux couples de mettre les écarts souhaités entre les grossesses.\nPar exemple, attendre que le premier enfant commence l'école maternelle ou disposer d'une maison plus grande avant le deuxième enfant.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q1",
            "type": "mcq",
            "prompt": "Le planning familial permet d'abord aux couples :",
            "options": [
              "D'avoir le maximum d'enfants rapidement",
              "D'éviter définitivement tout enfant",
              "De mettre les écarts souhaités entre les grossesses et de choisir le moment propice",
              "De choisir le sexe des enfants"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Texte sur les avantages du planning familial, partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La santé de la mère restaurée entre deux grossesses",
          "stepTheme": "La santé de la mère restaurée entre deux grossesses",
          "stepBadge": "La santé de la mère restaurée entre deux grossesses",
          "paragraphText": "Les écarts entre les accouchements aident les mères à revenir à la santé normale.\nElles restaurent ainsi les nutriments perdus pendant la période de grossesse.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q2",
            "type": "mcq",
            "prompt": "Les écarts entre les accouchements aident la mère à :",
            "options": [
              "Revenir à la santé normale et restaurer les nutriments perdus pendant la grossesse",
              "Perdre définitivement ses nutriments",
              "Éviter tout suivi médical",
              "Arrêter l'allaitement dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Texte sur les avantages du planning familial."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'avis de l'OMS sur l'écart entre deux enfants",
          "stepTheme": "L'avis de l'OMS sur l'écart entre deux enfants",
          "stepBadge": "L'avis de l'OMS sur l'écart entre deux enfants",
          "paragraphText": "Selon l'OMS, garder un écart entre deux enfants a un effet mesurable sur le nouveau-né.\nCet écart réduit le risque de décès prématuré du nouveau-né.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q3",
            "type": "mcq",
            "prompt": "Selon l'OMS cité par la leçon, garder un écart entre deux enfants :",
            "options": [
              "Réduit le risque de décès prématuré du nouveau-né",
              "Augmente le risque de décès prématuré",
              "N'a aucun effet sur l'enfant",
              "Concerne uniquement la mère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dernière phrase du texte de la partie II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Équilibre familial et ressources",
          "stepTheme": "Équilibre familial et ressources",
          "stepBadge": "Équilibre familial et ressources",
          "paragraphText": "Parmi les avantages analysés figurent l'équilibre familial et la gestion rationnelle des ressources familiales.\nS'y ajoutent la planification des naissances par femme et une meilleure éducation des enfants.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q4",
            "type": "mcq",
            "prompt": "Parmi les avantages analysés par la leçon, on trouve :",
            "options": [
              "L'épuisement des ressources familiales",
              "Le divorce",
              "L'équilibre familial et la gestion rationnelle des ressources familiales",
              "La détérioration de la santé de l'enfant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse de la partie II."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre avantage et inconvénient",
          "stepTheme": "Ne pas confondre avantage et inconvénient",
          "stepBadge": "Ne pas confondre avantage et inconvénient",
          "paragraphText": "L'activité d'application mélange avantages et propositions négatives.\nLa détérioration de la santé de la mère ou de l'enfant, l'épuisement des ressources familiales et le divorce ne font pas partie des avantages retenus au corrigé.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces propositions n'est PAS un avantage de la contraception selon le corrigé ?",
            "options": [
              "La préservation de la santé de la mère et de l'enfant",
              "L'épuisement des ressources familiales",
              "La meilleure éducation des enfants",
              "Le bien-être familial"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l'activité de la partie II : propositions 1, 3, 5, 7 et 8 seulement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Les qualités exigées d'une méthode contraceptive",
          "stepTheme": "Les qualités exigées d'une méthode contraceptive",
          "stepBadge": "Les qualités exigées d'une méthode contraceptive",
          "paragraphText": "La conclusion générale fixe les qualités d'une méthode contraceptive.\nElle doit être temporaire, réversible et inoffensive pour le couple et pour les futurs enfants.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q6",
            "type": "mcq",
            "prompt": "Une méthode contraceptive doit être :",
            "options": [
              "Définitive et irréversible",
              "Réservée aux femmes uniquement dans tous les cas",
              "Efficace mais dangereuse pour les futurs enfants",
              "Temporaire, réversible et inoffensive pour le couple et les futurs enfants"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Conclusion générale de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q1",
          "type": "mcq",
          "prompt": "Le planning familial permet d'abord aux couples :",
          "options": [
            "D'avoir le maximum d'enfants rapidement",
            "D'éviter définitivement tout enfant",
            "De mettre les écarts souhaités entre les grossesses et de choisir le moment propice",
            "De choisir le sexe des enfants"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Texte sur les avantages du planning familial, partie II."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q2",
          "type": "mcq",
          "prompt": "Les écarts entre les accouchements aident la mère à :",
          "options": [
            "Revenir à la santé normale et restaurer les nutriments perdus pendant la grossesse",
            "Perdre définitivement ses nutriments",
            "Éviter tout suivi médical",
            "Arrêter l'allaitement dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Texte sur les avantages du planning familial."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q3",
          "type": "mcq",
          "prompt": "Selon l'OMS cité par la leçon, garder un écart entre deux enfants :",
          "options": [
            "Réduit le risque de décès prématuré du nouveau-né",
            "Augmente le risque de décès prématuré",
            "N'a aucun effet sur l'enfant",
            "Concerne uniquement la mère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dernière phrase du texte de la partie II."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q4",
          "type": "mcq",
          "prompt": "Parmi les avantages analysés par la leçon, on trouve :",
          "options": [
            "L'épuisement des ressources familiales",
            "Le divorce",
            "L'équilibre familial et la gestion rationnelle des ressources familiales",
            "La détérioration de la santé de l'enfant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse de la partie II."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces propositions n'est PAS un avantage de la contraception selon le corrigé ?",
          "options": [
            "La préservation de la santé de la mère et de l'enfant",
            "L'épuisement des ressources familiales",
            "La meilleure éducation des enfants",
            "Le bien-être familial"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l'activité de la partie II : propositions 1, 3, 5, 7 et 8 seulement."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q6",
          "type": "mcq",
          "prompt": "Une méthode contraceptive doit être :",
          "options": [
            "Définitive et irréversible",
            "Réservée aux femmes uniquement dans tous les cas",
            "Efficace mais dangereuse pour les futurs enfants",
            "Temporaire, réversible et inoffensive pour le couple et les futurs enfants"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Conclusion générale de la leçon."
        }
      ]
    }
  ]
};
