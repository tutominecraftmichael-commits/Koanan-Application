import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Couples oxydants/réducteurs en solution aqueuse. Dosage » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Couples oxydants/réducteurs en solution aqueuse. Dosage » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const CHIMIE_1ERE_CD_L09_COUPLES_DOSAGE: CurriculumChapter = {
  "id": "premiere_c_chimie_l09_couples_dosage",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 9,
  "title": "Leçon 9 : Couples oxydants/réducteurs en solution aqueuse. Dosage",
  "summary": "On étudie des couples oxydant et réducteur en solution aqueuse, on prévoit les réactions grâce aux potentiels normaux et la règle du gamma, puis on réalise un dosage par oxydoréduction.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Couples oxydants/réducteurs en solution aqueuse. Dosage » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_chimie_l09_couples_dosage_p01",
      "order": 1,
      "title": "Le couple du fer et le couple du permanganate",
      "summary": "Les ions fer II sont oxydés par les ions permanganate en milieu acide.",
      "conceptExplanation": "Les ions fer II $Fe^{2+}$, de couleur verte, se transforment en ions fer III $Fe^{3+}$ en libérant un électron chacun : c'est une oxydation. Les ions $Fe^{3+}$ formés donnent, en présence de soude, un hydroxyde de fer III de couleur jaune orangé.\nLes ions permanganate $MnO_4^-$ se transforment en ions $Mn^{2+}$ incolores, en milieu acide, en captant des électrons : c'est une réduction.\nLa réaction entre les deux couples est donc une réaction d'oxydoréduction, dont l'oxydant est $MnO_4^-$ et le réducteur $Fe^{2+}$.",
      "keyRule": "Un réducteur perd des électrons et un oxydant en capte : $Fe^{2+}$ est oxydé, $MnO_4^-$ est réduit.",
      "formulas": [
        {
          "name": "Oxydation du fer II",
          "formula": "Fe^{2+} \\rightarrow Fe^{3+} + e^-"
        },
        {
          "name": "Réduction du permanganate",
          "formula": "MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O"
        },
        {
          "name": "Équation-bilan",
          "formula": "5Fe^{2+} + MnO_4^- + 8H^+ \\rightarrow 5Fe^{3+} + Mn^{2+} + 4H_2O"
        }
      ],
      "workedExample": {
        "title": "Construire l'équation-bilan fer et permanganate",
        "statement": "À partir des deux demi-équations des couples du fer et du permanganate, écris l'équation-bilan de la réaction.",
        "methodSteps": [
          "Oxydation : $Fe^{2+} \\rightarrow Fe^{3+} + e^-$, à multiplier par 5 pour fournir 5 électrons.",
          "Réduction : $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$, qui capte ces 5 électrons.",
          "On additionne en supprimant les électrons, qui ne doivent pas apparaître dans le bilan."
        ],
        "conclusion": "On obtient $5Fe^{2+} + MnO_4^- + 8H^+ \\rightarrow 5Fe^{3+} + Mn^{2+} + 4H_2O$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le couple du fer",
          "stepTheme": "Le couple du fer",
          "stepBadge": "Le couple du fer",
          "paragraphText": "• Couple oxydant et réducteur du fer : l'oxydant est $Fe^{3+}$ et le réducteur est $Fe^{2+}$.\nIls forment le couple $Fe^{3+}$ et $Fe^{2+}$, noté couple du fer dans cette leçon.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p01_q1",
            "type": "mcq",
            "prompt": "Dans le couple du fer, l'oxydant est :",
            "options": [
              "$Fe^{3+}$",
              "$Fe^{2+}$",
              "La soude",
              "L'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$Fe^{3+}$ peut capter un électron pour donner $Fe^{2+}$ : c'est l'oxydant du couple."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'oxydation des ions fer II",
          "stepTheme": "L'oxydation des ions fer II",
          "stepBadge": "L'oxydation des ions fer II",
          "paragraphText": "Les ions $Fe^{2+}$ se transforment en ions $Fe^{3+}$ en libérant un électron chacun.\nPerdre des électrons est une oxydation : $Fe^{2+}$ est donc un réducteur.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p01_q2",
            "type": "mcq",
            "prompt": "La transformation $Fe^{2+} \\rightarrow Fe^{3+} + e^-$ est :",
            "options": [
              "Une réduction",
              "Une oxydation",
              "Une dilution",
              "Une neutralisation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'espèce perd un électron : par définition, elle est oxydée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La réduction du permanganate",
          "stepTheme": "La réduction du permanganate",
          "stepBadge": "La réduction du permanganate",
          "paragraphText": "En milieu acide, l'ion permanganate capte 5 électrons selon $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$.\nL'ion $Mn^{2+}$ obtenu est incolore.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p01_q3",
            "type": "mcq",
            "prompt": "En milieu acide, l'ion $MnO_4^-$ se réduit en :",
            "options": [
              "$MnO_2$",
              "$Mn^{3+}$",
              "$Mn^{2+}$ incolore",
              "$Mn$ métallique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la demi-équation du document : le produit est l'ion $Mn^{2+}$, incolore."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Égaler les électrons échangés",
          "stepTheme": "Égaler les électrons échangés",
          "stepBadge": "Égaler les électrons échangés",
          "paragraphText": "Pour obtenir l'équation-bilan, on multiplie la demi-équation d'oxydation du fer par 5.\nAinsi, les 5 électrons libérés sont exactement les 5 électrons captés par un ion permanganate.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p01_q4",
            "type": "mcq",
            "prompt": "Par quel nombre multiplie-t-on la demi-équation du fer pour équilibrer les électrons avec celle du permanganate ?",
            "options": [
              "Par 8",
              "Par 4",
              "Par 2",
              "Par 5"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le permanganate capte 5 électrons et chaque $Fe^{2+}$ n'en libère qu'un : il faut 5 ions $Fe^{2+}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser oxydant et réducteur",
          "stepTheme": "Ne pas inverser oxydant et réducteur",
          "stepBadge": "Ne pas inverser oxydant et réducteur",
          "paragraphText": "Piège fréquent : celui qui est oxydé n'est pas l'oxydant.\nIci $Fe^{2+}$ est oxydé, donc il est le réducteur, et $MnO_4^-$ est réduit, donc il est l'oxydant.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p01_q5",
            "type": "mcq",
            "prompt": "Dans cette réaction, l'oxydant est :",
            "options": [
              "$MnO_4^-$",
              "$Fe^{2+}$",
              "$Fe^{3+}$",
              "$H^+$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'oxydant est l'espèce qui capte les électrons et qui est réduite : c'est $MnO_4^-$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître les ions fer III",
          "stepTheme": "Reconnaître les ions fer III",
          "stepBadge": "Reconnaître les ions fer III",
          "paragraphText": "Les ions $Fe^{3+}$ formés sont mis en évidence avec la soude.\nIls donnent alors un hydroxyde de fer III de couleur jaune orangé.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p01_q6",
            "type": "mcq",
            "prompt": "En présence de soude, les ions $Fe^{3+}$ donnent un hydroxyde de couleur :",
            "options": [
              "Verte",
              "Jaune orangé",
              "Violette",
              "Bleue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'observation du document : l'hydroxyde de fer III est jaune orangé, alors que $Fe^{2+}$ est vert en solution."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p01_q1",
          "type": "mcq",
          "prompt": "Dans le couple du fer, l'oxydant est :",
          "options": [
            "$Fe^{3+}$",
            "$Fe^{2+}$",
            "La soude",
            "L'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$Fe^{3+}$ peut capter un électron pour donner $Fe^{2+}$ : c'est l'oxydant du couple."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p01_q2",
          "type": "mcq",
          "prompt": "La transformation $Fe^{2+} \\rightarrow Fe^{3+} + e^-$ est :",
          "options": [
            "Une réduction",
            "Une oxydation",
            "Une dilution",
            "Une neutralisation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'espèce perd un électron : par définition, elle est oxydée."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p01_q3",
          "type": "mcq",
          "prompt": "En milieu acide, l'ion $MnO_4^-$ se réduit en :",
          "options": [
            "$MnO_2$",
            "$Mn^{3+}$",
            "$Mn^{2+}$ incolore",
            "$Mn$ métallique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la demi-équation du document : le produit est l'ion $Mn^{2+}$, incolore."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p01_q4",
          "type": "mcq",
          "prompt": "Par quel nombre multiplie-t-on la demi-équation du fer pour équilibrer les électrons avec celle du permanganate ?",
          "options": [
            "Par 8",
            "Par 4",
            "Par 2",
            "Par 5"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le permanganate capte 5 électrons et chaque $Fe^{2+}$ n'en libère qu'un : il faut 5 ions $Fe^{2+}$."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p01_q5",
          "type": "mcq",
          "prompt": "Dans cette réaction, l'oxydant est :",
          "options": [
            "$MnO_4^-$",
            "$Fe^{2+}$",
            "$Fe^{3+}$",
            "$H^+$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'oxydant est l'espèce qui capte les électrons et qui est réduite : c'est $MnO_4^-$."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p01_q6",
          "type": "mcq",
          "prompt": "En présence de soude, les ions $Fe^{3+}$ donnent un hydroxyde de couleur :",
          "options": [
            "Verte",
            "Jaune orangé",
            "Violette",
            "Bleue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'observation du document : l'hydroxyde de fer III est jaune orangé, alors que $Fe^{2+}$ est vert en solution."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l09_couples_dosage_p02",
      "order": 2,
      "title": "Le dichromate oxyde l'éthanol : le principe de l'alcooltest",
      "summary": "Les ions dichromate oxydent l'éthanol en acide éthanoïque, comme dans l'alcooltest.",
      "conceptExplanation": "Les ions dichromate $Cr_2O_7^{2-}$ disparaissent de la solution et il se forme des ions chrome $Cr^{3+}$ : en solution acide, ils captent 6 électrons, c'est une réduction.\nLes électrons captés sont libérés par l'éthanol $CH_3CH_2OH$, qui se transforme en acide éthanoïque $CH_3COOH$ : c'est une oxydation.\nCette réaction est celle de l'alcooltest, qui permet de vérifier l'état d'ivresse d'un automobiliste grâce au changement de couleur du dichromate.",
      "keyRule": "Le dichromate, oxydant fort, capte 6 électrons ; l'éthanol en libère 4 par molécule.",
      "formulas": [
        {
          "name": "Réduction du dichromate",
          "formula": "Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O"
        },
        {
          "name": "Oxydation de l'éthanol",
          "formula": "CH_3CH_2OH + H_2O \\rightarrow CH_3COOH + 4H^+ + 4e^-"
        },
        {
          "name": "Équation-bilan",
          "formula": "2Cr_2O_7^{2-} + 16H^+ + 3CH_3CH_2OH \\rightarrow 4Cr^{3+} + 11H_2O + 3CH_3COOH"
        }
      ],
      "workedExample": {
        "title": "L'équation-bilan de l'alcooltest",
        "statement": "Écris l'équation-bilan de la réaction entre les ions dichromate et l'éthanol en milieu acide.",
        "methodSteps": [
          "Réduction : $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O$, multipliée par 2, soit 12 électrons captés.",
          "Oxydation : $CH_3CH_2OH + H_2O \\rightarrow CH_3COOH + 4H^+ + 4e^-$, multipliée par 3, soit 12 électrons libérés.",
          "On additionne et on simplifie les électrons, les ions $H^+$ et l'eau."
        ],
        "conclusion": "On obtient $2Cr_2O_7^{2-} + 16H^+ + 3CH_3CH_2OH \\rightarrow 4Cr^{3+} + 11H_2O + 3CH_3COOH$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le couple du dichromate",
          "stepTheme": "Le couple du dichromate",
          "stepBadge": "Le couple du dichromate",
          "paragraphText": "• Couple du dichromate : l'oxydant est $Cr_2O_7^{2-}$ et le réducteur est $Cr^{3+}$.\nSa demi-équation de réduction fait intervenir 14 ions $H^+$ et 6 électrons.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p02_q1",
            "type": "mcq",
            "prompt": "Combien d'électrons un ion dichromate capte-t-il en se réduisant en $Cr^{3+}$ ?",
            "options": [
              "6 électrons",
              "2 électrons",
              "4 électrons",
              "14 électrons"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La demi-équation comporte $6e^-$ : 14 est le nombre d'ions $H^+$, pas d'électrons."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le produit de l'oxydation de l'éthanol",
          "stepTheme": "Le produit de l'oxydation de l'éthanol",
          "stepBadge": "Le produit de l'oxydation de l'éthanol",
          "paragraphText": "Dans cette leçon, l'éthanol est oxydé en acide éthanoïque $CH_3COOH$.\nLa demi-équation libère 4 électrons et 4 ions $H^+$ par molécule d'éthanol.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p02_q2",
            "type": "mcq",
            "prompt": "Dans cette leçon, l'éthanol est oxydé en :",
            "options": [
              "Éthanal uniquement, sans autre produit possible",
              "Dioxyde de carbone",
              "Acide éthanoïque $CH_3COOH$",
              "Méthanol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le produit écrit dans la demi-équation du document, avec 4 électrons libérés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Les coefficients du bilan dichromate et éthanol",
          "stepTheme": "Les coefficients du bilan dichromate et éthanol",
          "stepBadge": "Les coefficients du bilan dichromate et éthanol",
          "paragraphText": "Le plus petit échange commun est de 12 électrons : 2 ions dichromate captent 12 électrons et 3 molécules d'éthanol en libèrent 12.\nLe bilan fait donc intervenir 2 dichromates pour 3 éthanols.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p02_q3",
            "type": "mcq",
            "prompt": "Dans l'équation-bilan, les coefficients de $Cr_2O_7^{2-}$ et de $CH_3CH_2OH$ sont respectivement :",
            "options": [
              "1 et 1",
              "3 et 2",
              "2 et 3",
              "6 et 4"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux fois 6 électrons captés égalent trois fois 4 électrons libérés : coefficients 2 et 3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'application : l'alcooltest",
          "stepTheme": "L'application : l'alcooltest",
          "stepBadge": "L'application : l'alcooltest",
          "paragraphText": "La situation d'apprentissage présente l'alcooltest utilisé par les forces de l'ordre.\nIl repose sur la réaction d'oxydoréduction entre l'éthanol expiré et l'ion dichromate, dont la couleur change.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p02_q4",
            "type": "mcq",
            "prompt": "L'alcooltest repose sur la réaction entre l'éthanol et :",
            "options": [
              "Les ions permanganate",
              "Les ions fer II",
              "La soude",
              "Les ions dichromate $Cr_2O_7^{2-}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'information de la revue scientifique citée au début de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le milieu doit être acide",
          "stepTheme": "Le milieu doit être acide",
          "stepBadge": "Le milieu doit être acide",
          "paragraphText": "Piège : la demi-équation du dichromate consomme des ions $H^+$.\nSans milieu acide, l'équilibrage écrit dans la leçon n'est pas valable et la réduction ne se déroule pas de cette façon.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p02_q5",
            "type": "mcq",
            "prompt": "La réduction du dichromate écrite dans la leçon se déroule :",
            "options": [
              "En milieu basique",
              "En milieu acide",
              "Sans eau",
              "À l'état solide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La demi-équation fait intervenir $14H^+$ : le milieu est nécessairement acide."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les potentiels des deux couples",
          "stepTheme": "Les potentiels des deux couples",
          "stepBadge": "Les potentiels des deux couples",
          "paragraphText": "Le document donne $E^\\circ$ du couple du dichromate égal à $1{,}33$ V et celui du couple de l'éthanol égal à $0{,}04$ V.\nLe potentiel le plus élevé correspond à l'oxydant le plus fort, ici le dichromate.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p02_q6",
            "type": "mcq",
            "prompt": "Le potentiel normal du couple du dichromate vaut, d'après la leçon :",
            "options": [
              "$1{,}33$ V",
              "$0{,}04$ V",
              "$0{,}54$ V",
              "$1{,}52$ V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$1{,}33$ V est la valeur du couple du dichromate ; $0{,}04$ V est celle du couple de l'éthanol."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p02_q1",
          "type": "mcq",
          "prompt": "Combien d'électrons un ion dichromate capte-t-il en se réduisant en $Cr^{3+}$ ?",
          "options": [
            "6 électrons",
            "2 électrons",
            "4 électrons",
            "14 électrons"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La demi-équation comporte $6e^-$ : 14 est le nombre d'ions $H^+$, pas d'électrons."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p02_q2",
          "type": "mcq",
          "prompt": "Dans cette leçon, l'éthanol est oxydé en :",
          "options": [
            "Éthanal uniquement, sans autre produit possible",
            "Dioxyde de carbone",
            "Acide éthanoïque $CH_3COOH$",
            "Méthanol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le produit écrit dans la demi-équation du document, avec 4 électrons libérés."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p02_q3",
          "type": "mcq",
          "prompt": "Dans l'équation-bilan, les coefficients de $Cr_2O_7^{2-}$ et de $CH_3CH_2OH$ sont respectivement :",
          "options": [
            "1 et 1",
            "3 et 2",
            "2 et 3",
            "6 et 4"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux fois 6 électrons captés égalent trois fois 4 électrons libérés : coefficients 2 et 3."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p02_q4",
          "type": "mcq",
          "prompt": "L'alcooltest repose sur la réaction entre l'éthanol et :",
          "options": [
            "Les ions permanganate",
            "Les ions fer II",
            "La soude",
            "Les ions dichromate $Cr_2O_7^{2-}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'information de la revue scientifique citée au début de la leçon."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p02_q5",
          "type": "mcq",
          "prompt": "La réduction du dichromate écrite dans la leçon se déroule :",
          "options": [
            "En milieu basique",
            "En milieu acide",
            "Sans eau",
            "À l'état solide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La demi-équation fait intervenir $14H^+$ : le milieu est nécessairement acide."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p02_q6",
          "type": "mcq",
          "prompt": "Le potentiel normal du couple du dichromate vaut, d'après la leçon :",
          "options": [
            "$1{,}33$ V",
            "$0{,}04$ V",
            "$0{,}54$ V",
            "$1{,}52$ V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$1{,}33$ V est la valeur du couple du dichromate ; $0{,}04$ V est celle du couple de l'éthanol."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l09_couples_dosage_p03",
      "order": 3,
      "title": "Prévoir une réaction grâce aux potentiels normaux",
      "summary": "L'oxydant du couple de plus grand potentiel oxyde le réducteur de l'autre couple.",
      "conceptExplanation": "Soient deux couples de potentiels normaux $E_1^\\circ$ et $E_2^\\circ$. Si $E_1^\\circ$ est supérieur à $E_2^\\circ$, alors l'oxydant du premier couple oxyde le réducteur du second couple : c'est la règle du gamma.\nCette réaction peut être considérée comme totale lorsque l'écart entre les potentiels est supérieur ou égal à $0{,}3$ V.\nExemple du document : le diiode, de potentiel $0{,}54$ V, oxyde les ions thiosulfate, dont le couple a un potentiel de $0{,}08$ V.",
      "keyRule": "Règle du gamma : l'oxydant le plus fort réagit avec le réducteur le plus fort, et la réaction est totale si l'écart de potentiels atteint $0{,}3$ V.",
      "formulas": [
        {
          "name": "Condition de totalité",
          "formula": "E_1^\\circ - E_2^\\circ \\geq 0{,}3\\ \\mathrm{V}"
        },
        {
          "name": "Exemple du diiode et du thiosulfate",
          "formula": "I_2 + 2S_2O_3^{2-} \\rightarrow 2I^- + S_4O_6^{2-}"
        }
      ],
      "workedExample": {
        "title": "Prévoir la réaction diiode et thiosulfate",
        "statement": "On donne $E^\\circ$ du couple du diiode égal à $0{,}54$ V et celui du couple du thiosulfate égal à $0{,}08$ V. Prévois la réaction et écris son équation-bilan.",
        "methodSteps": [
          "On compare : $0{,}54$ V est supérieur à $0{,}08$ V, donc l'oxydant le plus fort est $I_2$ et le réducteur le plus fort est $S_2O_3^{2-}$.",
          "L'écart vaut $0{,}46$ V, supérieur à $0{,}3$ V : la réaction peut être considérée comme totale.",
          "Réduction : $I_2 + 2e^- \\rightarrow 2I^-$ ; oxydation : $2S_2O_3^{2-} \\rightarrow S_4O_6^{2-} + 2e^-$."
        ],
        "conclusion": "L'équation-bilan est $I_2 + 2S_2O_3^{2-} \\rightarrow 2I^- + S_4O_6^{2-}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le potentiel normal d'un couple",
          "stepTheme": "Le potentiel normal d'un couple",
          "stepBadge": "Le potentiel normal d'un couple",
          "paragraphText": "• Potentiel normal : valeur $E^\\circ$, en volt, qui caractérise un couple oxydant et réducteur.\nPlus ce potentiel est élevé, plus l'oxydant du couple est fort.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p03_q1",
            "type": "mcq",
            "prompt": "Un couple dont le potentiel normal est le plus élevé possède :",
            "options": [
              "Le réducteur le plus fort",
              "L'oxydant le plus fort",
              "Aucun oxydant",
              "Le potentiel le plus faible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le sens de la règle du gamma utilisée dans toute la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La règle du gamma",
          "stepTheme": "La règle du gamma",
          "stepBadge": "La règle du gamma",
          "paragraphText": "Si le potentiel du premier couple dépasse celui du second, l'oxydant du premier couple oxyde le réducteur du second.\nSur le schéma en gamma, on relie l'oxydant le plus fort au réducteur le plus fort.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p03_q2",
            "type": "mcq",
            "prompt": "Selon la règle du gamma, l'oxydant du couple de plus grand potentiel réagit avec :",
            "options": [
              "L'oxydant de l'autre couple",
              "Son propre réducteur seulement",
              "Le réducteur de l'autre couple",
              "L'eau uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La réaction spontanée oppose toujours l'oxydant le plus fort au réducteur le plus fort."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Quand la réaction est-elle totale ?",
          "stepTheme": "Quand la réaction est-elle totale ?",
          "stepBadge": "Quand la réaction est-elle totale ?",
          "paragraphText": "Le document précise le critère numérique de totalité.\nIl porte sur l'écart entre les deux potentiels normaux, et non sur un seul potentiel.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p03_q3",
            "type": "mcq",
            "prompt": "Une réaction prévue par la règle du gamma peut être considérée comme totale si l'écart des potentiels est :",
            "options": [
              "Inférieur à $0{,}1$ V",
              "Égal à zéro",
              "Négatif",
              "Supérieur ou égal à $0{,}3$ V"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le seuil donné dans la leçon : un écart d'au moins $0{,}3$ V."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le diiode face au thiosulfate",
          "stepTheme": "Le diiode face au thiosulfate",
          "stepBadge": "Le diiode face au thiosulfate",
          "paragraphText": "Le couple du diiode a un potentiel de $0{,}54$ V et celui du thiosulfate de $0{,}08$ V.\nLe diiode est donc l'oxydant le plus fort et il oxyde les ions thiosulfate.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p03_q4",
            "type": "mcq",
            "prompt": "Dans le couple diiode et thiosulfate, le réducteur le plus fort est :",
            "options": [
              "$S_2O_3^{2-}$",
              "$I_2$",
              "$I^-$",
              "$S_4O_6^{2-}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le réducteur le plus fort appartient au couple de plus faible potentiel : c'est l'ion thiosulfate."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La démarche de prévision en trois temps",
          "stepTheme": "La démarche de prévision en trois temps",
          "stepBadge": "La démarche de prévision en trois temps",
          "paragraphText": "• Comparer les deux potentiels normaux.\n• Désigner l'oxydant le plus fort et le réducteur le plus fort.\n• Écrire les deux demi-équations, puis l'équation-bilan en égalant les électrons.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p03_q5",
            "type": "mcq",
            "prompt": "La première opération d'une prévision par les potentiels est de :",
            "options": [
              "Doser la solution",
              "Comparer les potentiels normaux des deux couples",
              "Ajouter un indicateur coloré",
              "Mesurer un volume"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans cette comparaison, on ne peut désigner ni l'oxydant le plus fort ni le réducteur le plus fort."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un écart faible ne donne pas une réaction totale",
          "stepTheme": "Un écart faible ne donne pas une réaction totale",
          "stepBadge": "Un écart faible ne donne pas une réaction totale",
          "paragraphText": "Piège : une réaction peut être prévue sans être totale.\nSi l'écart de potentiels reste inférieur au seuil de la leçon, on ne peut pas la considérer comme totale.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p03_q6",
            "type": "mcq",
            "prompt": "Si l'écart entre les potentiels vaut $0{,}1$ V, la réaction prévue est :",
            "options": [
              "Toujours totale",
              "Impossible à écrire",
              "Non considérée comme totale selon le critère de la leçon",
              "Une électrolyse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le critère de la leçon exige un écart supérieur ou égal à $0{,}3$ V pour parler de réaction totale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p03_q1",
          "type": "mcq",
          "prompt": "Un couple dont le potentiel normal est le plus élevé possède :",
          "options": [
            "Le réducteur le plus fort",
            "L'oxydant le plus fort",
            "Aucun oxydant",
            "Le potentiel le plus faible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le sens de la règle du gamma utilisée dans toute la leçon."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p03_q2",
          "type": "mcq",
          "prompt": "Selon la règle du gamma, l'oxydant du couple de plus grand potentiel réagit avec :",
          "options": [
            "L'oxydant de l'autre couple",
            "Son propre réducteur seulement",
            "Le réducteur de l'autre couple",
            "L'eau uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La réaction spontanée oppose toujours l'oxydant le plus fort au réducteur le plus fort."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p03_q3",
          "type": "mcq",
          "prompt": "Une réaction prévue par la règle du gamma peut être considérée comme totale si l'écart des potentiels est :",
          "options": [
            "Inférieur à $0{,}1$ V",
            "Égal à zéro",
            "Négatif",
            "Supérieur ou égal à $0{,}3$ V"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le seuil donné dans la leçon : un écart d'au moins $0{,}3$ V."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p03_q4",
          "type": "mcq",
          "prompt": "Dans le couple diiode et thiosulfate, le réducteur le plus fort est :",
          "options": [
            "$S_2O_3^{2-}$",
            "$I_2$",
            "$I^-$",
            "$S_4O_6^{2-}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le réducteur le plus fort appartient au couple de plus faible potentiel : c'est l'ion thiosulfate."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p03_q5",
          "type": "mcq",
          "prompt": "La première opération d'une prévision par les potentiels est de :",
          "options": [
            "Doser la solution",
            "Comparer les potentiels normaux des deux couples",
            "Ajouter un indicateur coloré",
            "Mesurer un volume"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans cette comparaison, on ne peut désigner ni l'oxydant le plus fort ni le réducteur le plus fort."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p03_q6",
          "type": "mcq",
          "prompt": "Si l'écart entre les potentiels vaut $0{,}1$ V, la réaction prévue est :",
          "options": [
            "Toujours totale",
            "Impossible à écrire",
            "Non considérée comme totale selon le critère de la leçon",
            "Une électrolyse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le critère de la leçon exige un écart supérieur ou égal à $0{,}3$ V pour parler de réaction totale."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l09_couples_dosage_p04",
      "order": 4,
      "title": "Le dosage par oxydoréduction : définition et principe",
      "summary": "Doser, c'est déterminer la concentration inconnue d'une espèce en solution.",
      "conceptExplanation": "Doser une espèce chimique en solution consiste à déterminer la concentration molaire de cette espèce dans la solution.\nPour un dosage colorimétrique, on place dans un bécher un volume connu de la solution à doser avec quelques gouttes d'un indicateur coloré, et dans la burette la solution qui sert à doser, de concentration connue.\nOn fait tomber cette solution goutte à goutte et on arrête le dosage au changement de couleur du milieu : l'équivalence est alors atteinte, c'est-à-dire que les réactifs sont dans les proportions stœchiométriques.",
      "keyRule": "Équivalence : les réactifs sont introduits dans les proportions stœchiométriques, et on la repère au changement de couleur.",
      "formulas": [
        {
          "name": "Définition du dosage",
          "formula": "C = \\frac{n}{V}",
          "note": "Doser revient à trouver la concentration, donc la quantité de matière contenue dans un volume connu."
        }
      ],
      "workedExample": {
        "title": "Le protocole du dosage colorimétrique",
        "statement": "Décris les étapes du dosage colorimétrique décrites dans la leçon.",
        "methodSteps": [
          "Mettre dans un bécher un volume connu de la solution à doser et y ajouter quelques gouttes d'un indicateur coloré.",
          "Mettre dans la burette la solution qui sert à doser, de concentration connue.",
          "Faire tomber cette solution goutte à goutte dans le bécher, en agitant.",
          "Arrêter le dosage au changement de couleur : l'équivalence est atteinte et on lit le volume versé."
        ],
        "conclusion": "Le volume lu à l'équivalence permet ensuite le calcul de la concentration inconnue."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Doser une espèce chimique",
          "stepTheme": "Doser une espèce chimique",
          "stepBadge": "Doser une espèce chimique",
          "paragraphText": "• Dosage : déterminer la concentration molaire d'une espèce chimique dans une solution.\nLa solution à doser a donc une concentration inconnue au départ.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p04_q1",
            "type": "mcq",
            "prompt": "Doser une espèce chimique en solution consiste à déterminer :",
            "options": [
              "Sa couleur",
              "Sa concentration molaire dans la solution",
              "Sa masse molaire",
              "Sa température"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §3.1 de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le contenu de la burette",
          "stepTheme": "Le contenu de la burette",
          "stepBadge": "Le contenu de la burette",
          "paragraphText": "La burette contient la solution qui sert à doser.\nSa concentration est connue, et son volume versé se lit sur la graduation.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p04_q2",
            "type": "mcq",
            "prompt": "La solution placée dans la burette est :",
            "options": [
              "La solution à doser, de concentration inconnue",
              "De l'eau distillée",
              "La solution qui sert à doser, de concentration connue",
              "L'indicateur coloré pur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le principe du §3.2 : le réactif dosant est connu et versé progressivement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le contenu du bécher",
          "stepTheme": "Le contenu du bécher",
          "stepBadge": "Le contenu du bécher",
          "paragraphText": "Le bécher contient un volume connu de la solution à doser.\nOn y ajoute quelques gouttes d'un indicateur coloré, et un agitateur magnétique homogénéise le mélange.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p04_q3",
            "type": "mcq",
            "prompt": "Dans le bécher, on place :",
            "options": [
              "Uniquement l'indicateur",
              "La burette",
              "Du solide à dissoudre",
              "Un volume connu de la solution à doser"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le volume de la solution à doser doit être connu pour pouvoir calculer sa concentration."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le repérage de l'équivalence",
          "stepTheme": "Le repérage de l'équivalence",
          "stepBadge": "Le repérage de l'équivalence",
          "paragraphText": "On verse la solution dosante goutte à goutte.\nOn s'arrête lorsqu'on remarque un changement de couleur du milieu réactionnel : l'équivalence est atteinte.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p04_q4",
            "type": "mcq",
            "prompt": "On arrête le dosage colorimétrique lorsque :",
            "options": [
              "Le milieu réactionnel change de couleur",
              "Le bécher est plein",
              "La burette est vide",
              "Le mélange se met à bouillir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le changement de couleur est le signal de l'équivalence dans un dosage colorimétrique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'équivalence d'un titrage",
          "stepTheme": "L'équivalence d'un titrage",
          "stepBadge": "L'équivalence d'un titrage",
          "paragraphText": "La documentation de la leçon définit l'équivalence comme l'état du système pour lequel les réactifs sont introduits dans les proportions stœchiométriques.\nC'est à cet instant précis que le bilan molaire devient exploitable.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p04_q5",
            "type": "mcq",
            "prompt": "À l'équivalence d'un titrage, les réactifs sont introduits :",
            "options": [
              "En très grand excès",
              "Dans les proportions stœchiométriques",
              "Sans réagir",
              "En quantités égales en masse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition donnée dans la documentation de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les qualités de la réaction de dosage",
          "stepTheme": "Les qualités de la réaction de dosage",
          "stepBadge": "Les qualités de la réaction de dosage",
          "paragraphText": "Piège signalé par la documentation : la réaction support d'un titrage doit être totale, rapide et spécifique de l'espèce titrée.\nUne réaction lente ou incomplète fausserait le volume équivalent.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p04_q6",
            "type": "mcq",
            "prompt": "La réaction chimique support d'un titrage doit être :",
            "options": [
              "Lente et réversible",
              "Partielle et quelconque",
              "Totale, rapide et spécifique de l'espèce titrée",
              "Une simple dissolution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les trois qualités exigées dans la documentation de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p04_q1",
          "type": "mcq",
          "prompt": "Doser une espèce chimique en solution consiste à déterminer :",
          "options": [
            "Sa couleur",
            "Sa concentration molaire dans la solution",
            "Sa masse molaire",
            "Sa température"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §3.1 de la leçon."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p04_q2",
          "type": "mcq",
          "prompt": "La solution placée dans la burette est :",
          "options": [
            "La solution à doser, de concentration inconnue",
            "De l'eau distillée",
            "La solution qui sert à doser, de concentration connue",
            "L'indicateur coloré pur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le principe du §3.2 : le réactif dosant est connu et versé progressivement."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p04_q3",
          "type": "mcq",
          "prompt": "Dans le bécher, on place :",
          "options": [
            "Uniquement l'indicateur",
            "La burette",
            "Du solide à dissoudre",
            "Un volume connu de la solution à doser"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le volume de la solution à doser doit être connu pour pouvoir calculer sa concentration."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p04_q4",
          "type": "mcq",
          "prompt": "On arrête le dosage colorimétrique lorsque :",
          "options": [
            "Le milieu réactionnel change de couleur",
            "Le bécher est plein",
            "La burette est vide",
            "Le mélange se met à bouillir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le changement de couleur est le signal de l'équivalence dans un dosage colorimétrique."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p04_q5",
          "type": "mcq",
          "prompt": "À l'équivalence d'un titrage, les réactifs sont introduits :",
          "options": [
            "En très grand excès",
            "Dans les proportions stœchiométriques",
            "Sans réagir",
            "En quantités égales en masse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition donnée dans la documentation de la leçon."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p04_q6",
          "type": "mcq",
          "prompt": "La réaction chimique support d'un titrage doit être :",
          "options": [
            "Lente et réversible",
            "Partielle et quelconque",
            "Totale, rapide et spécifique de l'espèce titrée",
            "Une simple dissolution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les trois qualités exigées dans la documentation de la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l09_couples_dosage_p05",
      "order": 5,
      "title": "Dosage des ions fer II par les ions permanganate",
      "summary": "Le permanganate acidifié dose les ions fer II, avec une équivalence violette persistante.",
      "conceptExplanation": "La burette contient une solution de permanganate de potassium acidifiée, de concentration connue ; le bécher contient les ions $Fe^{2+}$, de volume connu et de concentration inconnue.\nÀ l'équivalence, on observe l'apparition de la teinte violette persistante de la solution qui sert à doser : une goutte de permanganate en excès colore tout le mélange.\nLe bilan molaire de l'équation donne alors la relation entre la concentration cherchée et le volume équivalent.",
      "keyRule": "À l'équivalence du dosage du fer II : la quantité de fer II vaut 5 fois celle de permanganate versé.",
      "formulas": [
        {
          "name": "Bilan molaire à l'équivalence",
          "formula": "n(Fe^{2+}) = 5 \\times n(MnO_4^-)"
        },
        {
          "name": "Concentration cherchée",
          "formula": "C_r = \\frac{5 \\times C_0 \\times V_{0eq}}{V_r}",
          "note": "Indice 0 pour la solution dosante connue, indice r pour la solution de fer II à doser."
        }
      ],
      "workedExample": {
        "title": "Concentration des ions fer II (exercice 5 de la leçon)",
        "statement": "La solution de permanganate est obtenue en dissolvant $0{,}2$ g de $KMnO_4$ dans 100 mL d'eau. L'équivalence est obtenue en versant $16{,}5$ mL de cette solution dans 12 mL de solution de fer II. Détermine les deux concentrations, avec $M(KMnO_4) = 158$ g par mol.",
        "methodSteps": [
          "Concentration du permanganate : $C_0 = \\frac{m}{M \\times V}$, ce qui donne $0{,}0126$ mol par litre.",
          "À l'équivalence : $C_r \\times V_r = 5 \\times C_0 \\times V_{0eq}$.",
          "Donc la concentration du fer II vaut $0{,}087$ mol par litre."
        ],
        "conclusion": "La solution dosante vaut $0{,}0126$ mol par litre et la solution de fer II vaut $0{,}087$ mol par litre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le signal de l'équivalence",
          "stepTheme": "Le signal de l'équivalence",
          "stepBadge": "Le signal de l'équivalence",
          "paragraphText": "Pour ce dosage, aucun indicateur ajouté n'est nécessaire : le permanganate est lui-même coloré.\nÀ l'équivalence, sa teinte violette persiste dans le bécher.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p05_q1",
            "type": "mcq",
            "prompt": "À l'équivalence du dosage du fer II par le permanganate, on observe :",
            "options": [
              "Un dégagement gazeux",
              "L'apparition d'une teinte violette persistante",
              "Un précipité noir",
              "La disparition de toute couleur pour toujours"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'observation écrite dans le §3.3 de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le bilan molaire à l'équivalence",
          "stepTheme": "Le bilan molaire à l'équivalence",
          "stepBadge": "Le bilan molaire à l'équivalence",
          "paragraphText": "D'après l'équation-bilan, 5 ions fer II réagissent avec 1 ion permanganate.\nLe bilan molaire traduit exactement ces coefficients.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p05_q2",
            "type": "mcq",
            "prompt": "À l'équivalence, le bilan molaire s'écrit :",
            "options": [
              "$n(Fe^{2+}) = n(MnO_4^-)$",
              "$n(Fe^{2+}) = 8 \\times n(MnO_4^-)$",
              "$n(Fe^{2+}) = 5 \\times n(MnO_4^-)$",
              "$n(MnO_4^-) = 5 \\times n(Fe^{2+})$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le coefficient 5 devant $Fe^{2+}$ dans l'équation-bilan impose ce facteur 5."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le facteur 5",
          "stepTheme": "Ne pas oublier le facteur 5",
          "stepBadge": "Ne pas oublier le facteur 5",
          "paragraphText": "Piège classique : oublier le coefficient stœchiométrique 5 sous-estime la concentration du fer II d'un facteur 5.\nIl faut toujours repartir de l'équation-bilan équilibrée.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p05_q3",
            "type": "mcq",
            "prompt": "Si on oublie le facteur 5 dans le calcul, la concentration trouvée pour le fer II est :",
            "options": [
              "Exacte",
              "Cinq fois trop grande",
              "Indépendante du volume",
              "Cinq fois trop petite"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le facteur 5 vient de l'équation-bilan : sans lui, le résultat est divisé par 5."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La concentration de la solution dosante",
          "stepTheme": "La concentration de la solution dosante",
          "stepBadge": "La concentration de la solution dosante",
          "paragraphText": "Dans l'exercice 5, la solution dosante est préparée à partir de $0{,}2$ g de permanganate de potassium dans 100 mL.\nSa concentration calculée vaut $0{,}0126$ mol par litre.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p05_q4",
            "type": "mcq",
            "prompt": "La concentration de la solution de permanganate de l'exercice 5 vaut :",
            "options": [
              "$0{,}0126$ mol par litre",
              "$0{,}126$ mol par litre",
              "$1{,}26$ mol par litre",
              "$0{,}00126$ mol par litre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle s'obtient par $C = \\frac{m}{M \\times V}$ avec une masse molaire de 158 g par mol et un volume de $0{,}1$ L."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La concentration des ions fer II dosés",
          "stepTheme": "La concentration des ions fer II dosés",
          "stepBadge": "La concentration des ions fer II dosés",
          "paragraphText": "Avec un volume équivalent de $16{,}5$ mL versé dans 12 mL de solution de fer II, la relation d'équivalence donne le résultat de l'exercice 5.\nIl faut convertir les volumes dans la même unité avant le calcul.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p05_q5",
            "type": "mcq",
            "prompt": "La concentration de la solution de fer II de l'exercice 5 vaut environ :",
            "options": [
              "$0{,}017$ mol par litre",
              "$0{,}087$ mol par litre",
              "$0{,}87$ mol par litre",
              "$0{,}0087$ mol par litre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le résultat du corrigé, obtenu avec le facteur 5 et le rapport des volumes $16{,}5$ mL et 12 mL."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le rôle de l'acide dans ce dosage",
          "stepTheme": "Le rôle de l'acide dans ce dosage",
          "stepBadge": "Le rôle de l'acide dans ce dosage",
          "paragraphText": "La solution de permanganate utilisée est acidifiée.\nC'est indispensable, car la demi-équation de réduction du permanganate consomme des ions $H^+$.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p05_q6",
            "type": "mcq",
            "prompt": "La solution de permanganate du dosage est utilisée :",
            "options": [
              "Pure et solide",
              "En milieu basique",
              "Acidifiée",
              "Sans eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le schéma du montage précise « solution de permanganate de potassium acidifiée »."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p05_q1",
          "type": "mcq",
          "prompt": "À l'équivalence du dosage du fer II par le permanganate, on observe :",
          "options": [
            "Un dégagement gazeux",
            "L'apparition d'une teinte violette persistante",
            "Un précipité noir",
            "La disparition de toute couleur pour toujours"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'observation écrite dans le §3.3 de la leçon."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p05_q2",
          "type": "mcq",
          "prompt": "À l'équivalence, le bilan molaire s'écrit :",
          "options": [
            "$n(Fe^{2+}) = n(MnO_4^-)$",
            "$n(Fe^{2+}) = 8 \\times n(MnO_4^-)$",
            "$n(Fe^{2+}) = 5 \\times n(MnO_4^-)$",
            "$n(MnO_4^-) = 5 \\times n(Fe^{2+})$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le coefficient 5 devant $Fe^{2+}$ dans l'équation-bilan impose ce facteur 5."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p05_q3",
          "type": "mcq",
          "prompt": "Si on oublie le facteur 5 dans le calcul, la concentration trouvée pour le fer II est :",
          "options": [
            "Exacte",
            "Cinq fois trop grande",
            "Indépendante du volume",
            "Cinq fois trop petite"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le facteur 5 vient de l'équation-bilan : sans lui, le résultat est divisé par 5."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p05_q4",
          "type": "mcq",
          "prompt": "La concentration de la solution de permanganate de l'exercice 5 vaut :",
          "options": [
            "$0{,}0126$ mol par litre",
            "$0{,}126$ mol par litre",
            "$1{,}26$ mol par litre",
            "$0{,}00126$ mol par litre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle s'obtient par $C = \\frac{m}{M \\times V}$ avec une masse molaire de 158 g par mol et un volume de $0{,}1$ L."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p05_q5",
          "type": "mcq",
          "prompt": "La concentration de la solution de fer II de l'exercice 5 vaut environ :",
          "options": [
            "$0{,}017$ mol par litre",
            "$0{,}087$ mol par litre",
            "$0{,}87$ mol par litre",
            "$0{,}0087$ mol par litre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le résultat du corrigé, obtenu avec le facteur 5 et le rapport des volumes $16{,}5$ mL et 12 mL."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p05_q6",
          "type": "mcq",
          "prompt": "La solution de permanganate du dosage est utilisée :",
          "options": [
            "Pure et solide",
            "En milieu basique",
            "Acidifiée",
            "Sans eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le schéma du montage précise « solution de permanganate de potassium acidifiée »."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l09_couples_dosage_p06",
      "order": 6,
      "title": "Application : du dichromate au diiode, puis au thiosulfate",
      "summary": "Le dichromate libère du diiode, que l'on dose ensuite par le thiosulfate.",
      "conceptExplanation": "Dans la situation d'évaluation, les ions dichromate oxydent en excès les ions iodure : le mélange prend une couleur brun jaune due au diiode formé.\nOn ajoute ensuite une solution de thiosulfate de sodium, qui réagit avec ce diiode selon le couple déjà étudié ; l'ensemble prend une teinte verte due aux ions $Cr^{3+}$.\nEn combinant les deux bilans molaires, on remonte à la concentration inconnue de la solution de dichromate.",
      "keyRule": "Chaîne de calcul : le thiosulfate donne la quantité de diiode, qui donne celle de dichromate par le facteur 3 du bilan.",
      "formulas": [
        {
          "name": "Dichromate et iodure",
          "formula": "Cr_2O_7^{2-} + 6I^- + 14H^+ \\rightarrow 2Cr^{3+} + 3I_2 + 7H_2O"
        },
        {
          "name": "Diiode et thiosulfate",
          "formula": "I_2 + 2S_2O_3^{2-} \\rightarrow 2I^- + S_4O_6^{2-}"
        },
        {
          "name": "Quantité de diiode dosée",
          "formula": "n(I_2) = \\frac{C_2 \\times V_2}{2}"
        }
      ],
      "workedExample": {
        "title": "Concentration du dichromate (situation d'évaluation)",
        "statement": "On mélange 20 mL de solution de dichromate de concentration inconnue avec un excès d'iodure de potassium, puis on dose le diiode formé avec 10 mL de thiosulfate à $0{,}2$ mol par litre. Détermine la concentration du dichromate.",
        "methodSteps": [
          "Quantité de diiode : elle vaut la moitié de celle du thiosulfate, soit $10^{-3}$ mol.",
          "D'après le premier bilan, la quantité de dichromate vaut le tiers de celle du diiode.",
          "On divise cette quantité par le volume de 20 mL de solution de dichromate."
        ],
        "conclusion": "La concentration de la solution de dichromate vaut $0{,}017$ mol par litre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les couples de la première expérience",
          "stepTheme": "Les couples de la première expérience",
          "stepBadge": "Les couples de la première expérience",
          "paragraphText": "La première expérience oppose le couple du dichromate au couple du diiode.\nLes ions iodure sont en excès, donc tout le dichromate réagit.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p06_q1",
            "type": "mcq",
            "prompt": "Les deux couples de la première expérience sont :",
            "options": [
              "Dichromate et chrome III, diiode et iodure",
              "Permanganate et manganèse, fer III et fer II",
              "Thiosulfate seul et eau",
              "Dichromate et thiosulfate uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les couples nommés dans le corrigé de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La couleur brun jaune du mélange",
          "stepTheme": "La couleur brun jaune du mélange",
          "stepBadge": "La couleur brun jaune du mélange",
          "paragraphText": "Après l'ajout d'iodure de potassium en excès, le contenu du bécher prend une couleur brun jaune.\nCette couleur est la signature du diiode formé par oxydation des ions iodure.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p06_q2",
            "type": "mcq",
            "prompt": "La couleur brun jaune de la première expérience est due :",
            "options": [
              "Aux ions $Cr^{3+}$",
              "Au diiode $I_2$ formé",
              "Au thiosulfate",
              "À la soude"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé justifie ainsi la couleur : le diiode en solution est jaune à brun."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Le piège des coefficients 6 et 3",
          "stepTheme": "Le piège des coefficients 6 et 3",
          "stepBadge": "Le piège des coefficients 6 et 3",
          "paragraphText": "Piège : le coefficient 6 est celui des ions iodure consommés, pas celui du diiode formé.\nLa demi-équation du dichromate est multipliée par 1 et celle de l'iodure par 3 : on obtient 3 molécules de diiode pour 1 ion dichromate.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p06_q3",
            "type": "mcq",
            "prompt": "Dans le bilan dichromate et iodure, le coefficient devant $I_2$ est :",
            "options": [
              "1",
              "2",
              "3",
              "6"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Six ions iodure donnent trois molécules de diiode : le coefficient est 3, et 6 est celui de $I^-$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le bilan diiode et thiosulfate",
          "stepTheme": "Le bilan diiode et thiosulfate",
          "stepBadge": "Le bilan diiode et thiosulfate",
          "paragraphText": "La deuxième expérience réutilise le bilan déjà prévu par la règle du gamma.\nUne molécule de diiode réagit avec deux ions thiosulfate.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p06_q4",
            "type": "mcq",
            "prompt": "Le coefficient devant $S_2O_3^{2-}$ dans le bilan avec $I_2$ est :",
            "options": [
              "1",
              "3",
              "6",
              "2"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le bilan est $I_2 + 2S_2O_3^{2-} \\rightarrow 2I^- + S_4O_6^{2-}$ : le coefficient vaut 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La quantité de diiode dosée",
          "stepTheme": "La quantité de diiode dosée",
          "stepBadge": "La quantité de diiode dosée",
          "paragraphText": "Avec 10 mL de thiosulfate à $0{,}2$ mol par litre, la quantité de thiosulfate vaut $2 \\times 10^{-3}$ mol.\nLa quantité de diiode vaut donc la moitié.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p06_q5",
            "type": "mcq",
            "prompt": "La quantité de diiode présente dans la deuxième expérience vaut :",
            "options": [
              "$10^{-3}$ mol",
              "$2 \\times 10^{-3}$ mol",
              "$10^{-2}$ mol",
              "$3 \\times 10^{-3}$ mol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après le bilan, $n(I_2)$ vaut la moitié de la quantité de thiosulfate versée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La concentration du dichromate",
          "stepTheme": "La concentration du dichromate",
          "stepBadge": "La concentration du dichromate",
          "paragraphText": "On divise la quantité de dichromate, égale au tiers de celle du diiode, par les 20 mL de solution.\nLe corrigé obtient la concentration cherchée.",
          "exercise": {
            "id": "premiere_c_chimie_l09_couples_dosage_p06_q6",
            "type": "mcq",
            "prompt": "La concentration de la solution de dichromate de la situation d'évaluation vaut :",
            "options": [
              "$0{,}17$ mol par litre",
              "$0{,}017$ mol par litre",
              "$0{,}0017$ mol par litre",
              "$0{,}4$ mol par litre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le résultat final du corrigé : $0{,}017$ mol par litre."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p06_q1",
          "type": "mcq",
          "prompt": "Les deux couples de la première expérience sont :",
          "options": [
            "Dichromate et chrome III, diiode et iodure",
            "Permanganate et manganèse, fer III et fer II",
            "Thiosulfate seul et eau",
            "Dichromate et thiosulfate uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les couples nommés dans le corrigé de la situation d'évaluation."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p06_q2",
          "type": "mcq",
          "prompt": "La couleur brun jaune de la première expérience est due :",
          "options": [
            "Aux ions $Cr^{3+}$",
            "Au diiode $I_2$ formé",
            "Au thiosulfate",
            "À la soude"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé justifie ainsi la couleur : le diiode en solution est jaune à brun."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p06_q3",
          "type": "mcq",
          "prompt": "Dans le bilan dichromate et iodure, le coefficient devant $I_2$ est :",
          "options": [
            "1",
            "2",
            "3",
            "6"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Six ions iodure donnent trois molécules de diiode : le coefficient est 3, et 6 est celui de $I^-$."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p06_q4",
          "type": "mcq",
          "prompt": "Le coefficient devant $S_2O_3^{2-}$ dans le bilan avec $I_2$ est :",
          "options": [
            "1",
            "3",
            "6",
            "2"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le bilan est $I_2 + 2S_2O_3^{2-} \\rightarrow 2I^- + S_4O_6^{2-}$ : le coefficient vaut 2."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p06_q5",
          "type": "mcq",
          "prompt": "La quantité de diiode présente dans la deuxième expérience vaut :",
          "options": [
            "$10^{-3}$ mol",
            "$2 \\times 10^{-3}$ mol",
            "$10^{-2}$ mol",
            "$3 \\times 10^{-3}$ mol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après le bilan, $n(I_2)$ vaut la moitié de la quantité de thiosulfate versée."
        },
        {
          "id": "premiere_c_chimie_l09_couples_dosage_p06_q6",
          "type": "mcq",
          "prompt": "La concentration de la solution de dichromate de la situation d'évaluation vaut :",
          "options": [
            "$0{,}17$ mol par litre",
            "$0{,}017$ mol par litre",
            "$0{,}0017$ mol par litre",
            "$0{,}4$ mol par litre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le résultat final du corrigé : $0{,}017$ mol par litre."
        }
      ]
    }
  ]
};
