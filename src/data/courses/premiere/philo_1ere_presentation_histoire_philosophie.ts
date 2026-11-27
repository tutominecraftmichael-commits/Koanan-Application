import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Présentation de l'histoire de la philosophie » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3725
export const PHILO_1ERE_L06_PRESENTATION_HISTOIRE_PHILOSOPHIE: CurriculumChapter = {
  "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 6,
  "title": "Leçon 6 : Présentation de l'histoire de la philosophie",
  "summary": "L'histoire de la philosophie est celle des grandes doctrines formulées par les philosophes à travers leurs époques ; la leçon présente ses quatre grandes périodes et étudie en détail la période antique, ses questions ontologique, de la vérité et du bonheur.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3725",
  "points": [
    {
      "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01",
      "order": 1,
      "title": "Présentation de l'histoire de la philosophie et de l'Antiquité",
      "summary": "Définir l'histoire de la philosophie, nommer ses quatre périodes et situer l'Antiquité et ses trois préoccupations.",
      "conceptExplanation": "L'histoire de la philosophie renvoie à celle des grandes doctrines, des idées et des théories formulées par les philosophes à travers leurs époques. Cette histoire n'est pas indépendante de celle de l'humanité telle que présentée par les historiens, les sociologues et les scientifiques.\nElle se subdivise en quatre grandes périodes : la période antique ou antiquité, le Moyen Âge et la Renaissance, la période moderne et la période contemporaine.\nL'antiquité est la période de l'histoire qui s'étend du VIe siècle avant J.-C. au Ve siècle après J.-C. Du point de vue philosophique, elle se subdivise en trois sous-périodes : la période présocratique, la période socratique et la période post-socratique. Elle est marquée par trois préoccupations majeures : la question ontologique, la question de la vérité et la question du bonheur.",
      "keyRule": "Quatre grandes périodes structurent l'histoire de la philosophie, et l'Antiquité pose trois questions : l'Être, la vérité et le bonheur.",
      "formulas": [],
      "workedExample": {
        "title": "Trancher le débat sur Platon (situation d'apprentissage)",
        "statement": "Après le premier trimestre, le chef de la classe de première A2 du lycée moderne 3 de Gagnoa, qui se fait appeler « Platon », affirme que Platon est un philosophe moderne ; ses camarades soutiennent qu'il est de la période antique. Qui a raison ?",
        "methodSteps": [
          "L'Antiquité s'étend du VIe siècle avant J.-C. au Ve siècle après J.-C. et comprend la période socratique.",
          "Platon, élève de Socrate, appartient aux penseurs socratiques étudiés dans la période antique.",
          "La période moderne est une période bien postérieure, distincte de l'Antiquité dans la subdivision en quatre périodes."
        ],
        "conclusion": "Les camarades ont raison : Platon est un philosophe de la période antique, et non un philosophe moderne."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'histoire de la philosophie",
          "stepTheme": "L'histoire de la philosophie",
          "stepBadge": "L'histoire de la philosophie",
          "paragraphText": "• Histoire de la philosophie : histoire des grandes doctrines, des idées et des théories formulées par les philosophes à travers leurs époques.\nElle n'est pas indépendante de l'histoire de l'humanité présentée par les historiens, les sociologues et les scientifiques.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q1",
            "type": "mcq",
            "prompt": "L'histoire de la philosophie renvoie à :",
            "options": [
              "L'histoire des rois et des guerres uniquement",
              "L'histoire des grandes doctrines, des idées et des théories formulées par les philosophes à travers leurs époques",
              "L'histoire des découvertes techniques",
              "L'histoire des religions uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition donnée au début de la leçon : doctrines, idées et théories des philosophes à travers leurs époques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les quatre grandes périodes",
          "stepTheme": "Les quatre grandes périodes",
          "stepBadge": "Les quatre grandes périodes",
          "paragraphText": "L'histoire de la philosophie se subdivise en quatre grandes périodes.\n• La période antique ou antiquité\n• Le Moyen Âge et la Renaissance\n• La période moderne\n• La période contemporaine",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q2",
            "type": "mcq",
            "prompt": "Combien de grandes périodes compte l'histoire de la philosophie selon la leçon ?",
            "options": [
              "Trois périodes",
              "Cinq périodes",
              "Quatre périodes",
              "Deux périodes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Antiquité, Moyen Âge et Renaissance, période moderne, période contemporaine : quatre grandes périodes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les bornes de l'Antiquité",
          "stepTheme": "Les bornes de l'Antiquité",
          "stepBadge": "Les bornes de l'Antiquité",
          "paragraphText": "• Antiquité : période de l'histoire qui s'étend du VIe siècle avant J.-C. au Ve siècle après J.-C.\nC'est la première des quatre grandes périodes de l'histoire de la philosophie.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q3",
            "type": "mcq",
            "prompt": "L'Antiquité s'étend :",
            "options": [
              "Du XVIe siècle au XVIIIe siècle",
              "Du XIXe siècle à nos jours",
              "Du VIe siècle au XVe siècle après J.-C.",
              "Du VIe siècle avant J.-C. au Ve siècle après J.-C."
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon fixe les bornes de l'Antiquité du VIe siècle avant J.-C. au Ve siècle après J.-C."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les trois sous-périodes de l'Antiquité",
          "stepTheme": "Les trois sous-périodes de l'Antiquité",
          "stepBadge": "Les trois sous-périodes de l'Antiquité",
          "paragraphText": "Du point de vue philosophique, l'Antiquité se subdivise en trois sous-périodes.\n• La période présocratique, avant Socrate\n• La période socratique\n• La période post-socratique, après Socrate, Platon et Aristote",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q4",
            "type": "mcq",
            "prompt": "Quelle sous-période vient avant Socrate dans l'Antiquité ?",
            "options": [
              "La période présocratique",
              "La période post-socratique",
              "La période moderne",
              "La Renaissance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les présocratiques sont les courants de pensée avant Socrate (470-399 avant J.-C.)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre les trois préoccupations",
          "stepTheme": "Confondre les trois préoccupations",
          "stepBadge": "Confondre les trois préoccupations",
          "paragraphText": "Piège : attribuer à l'Antiquité des questions qui ne sont pas les siennes dans la leçon.\nSes trois préoccupations majeures sont la question ontologique, la question de la vérité et la question du bonheur.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces questions n'est pas une préoccupation majeure de l'Antiquité selon la leçon ?",
            "options": [
              "La question ontologique",
              "La question de la vérité",
              "La question du bonheur",
              "La question de la source de la connaissance"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La source de la connaissance est la préoccupation de la période moderne ; l'Antiquité traite de l'Être, de la vérité et du bonheur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le débat de Gagnoa sur Platon",
          "stepTheme": "Le débat de Gagnoa sur Platon",
          "stepBadge": "Le débat de Gagnoa sur Platon",
          "paragraphText": "Exemple : la situation d'apprentissage oppose un élève qui dit Platon moderne et ses camarades qui le disent antique.\nLa recherche sur les auteurs de la période antique et leurs conceptions permet de trancher en faveur des camarades.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q6",
            "type": "mcq",
            "prompt": "Dans la situation d'apprentissage, Platon doit être rangé :",
            "options": [
              "Dans la période contemporaine",
              "Dans la période antique",
              "Dans la période moderne",
              "Au Moyen Âge"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Platon fait partie des penseurs socratiques de l'Antiquité, élève de Socrate."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q1",
          "type": "mcq",
          "prompt": "L'histoire de la philosophie renvoie à :",
          "options": [
            "L'histoire des rois et des guerres uniquement",
            "L'histoire des grandes doctrines, des idées et des théories formulées par les philosophes à travers leurs époques",
            "L'histoire des découvertes techniques",
            "L'histoire des religions uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition donnée au début de la leçon : doctrines, idées et théories des philosophes à travers leurs époques."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q2",
          "type": "mcq",
          "prompt": "Combien de grandes périodes compte l'histoire de la philosophie selon la leçon ?",
          "options": [
            "Trois périodes",
            "Cinq périodes",
            "Quatre périodes",
            "Deux périodes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Antiquité, Moyen Âge et Renaissance, période moderne, période contemporaine : quatre grandes périodes."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q3",
          "type": "mcq",
          "prompt": "L'Antiquité s'étend :",
          "options": [
            "Du XVIe siècle au XVIIIe siècle",
            "Du XIXe siècle à nos jours",
            "Du VIe siècle au XVe siècle après J.-C.",
            "Du VIe siècle avant J.-C. au Ve siècle après J.-C."
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon fixe les bornes de l'Antiquité du VIe siècle avant J.-C. au Ve siècle après J.-C."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q4",
          "type": "mcq",
          "prompt": "Quelle sous-période vient avant Socrate dans l'Antiquité ?",
          "options": [
            "La période présocratique",
            "La période post-socratique",
            "La période moderne",
            "La Renaissance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les présocratiques sont les courants de pensée avant Socrate (470-399 avant J.-C.)."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces questions n'est pas une préoccupation majeure de l'Antiquité selon la leçon ?",
          "options": [
            "La question ontologique",
            "La question de la vérité",
            "La question du bonheur",
            "La question de la source de la connaissance"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La source de la connaissance est la préoccupation de la période moderne ; l'Antiquité traite de l'Être, de la vérité et du bonheur."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p01_q6",
          "type": "mcq",
          "prompt": "Dans la situation d'apprentissage, Platon doit être rangé :",
          "options": [
            "Dans la période contemporaine",
            "Dans la période antique",
            "Dans la période moderne",
            "Au Moyen Âge"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Platon fait partie des penseurs socratiques de l'Antiquité, élève de Socrate."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02",
      "order": 2,
      "title": "La question ontologique : Héraclite et le devenir",
      "summary": "Comprendre l'ontologie et la thèse d'Héraclite : l'Être est instabilité, mouvement et harmonie des contraires.",
      "conceptExplanation": "Le thème majeur de la période présocratique est la question ontologique. L'ontologie se définit comme la science qui s'interroge sur la signification de l'Être.\nHéraclite est un philosophe présocratique grec né vers 540 avant J.-C. à Éphèse et mort vers 470 avant J.-C. Issu d'une famille noble d'Éphèse, il se fait surnommer « l'obscur » à cause de la nature énigmatique de ses écrits. Sa philosophie s'articule autour de trois concepts clés : le logos, l'harmonie des contraires et le devenir. Ses œuvres nous sont parvenues sous forme de fragments.\nDans le texte support, il affirme : « On ne peut pas descendre deux fois dans le même fleuve », phrase qui traduit l'écoulement, l'instabilité, le mouvement, le changement perpétuel. Le monde est une harmonie de tensions tour à tour tendues et détendues, comme celle de la lyre et de l'arc. Pour Héraclite, l'Être se caractérise par l'instabilité et le mouvement.",
      "keyRule": "Pour Héraclite, tout coule : l'Être est devenir, mouvement et harmonie des contraires.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la phrase du fleuve d'Héraclite",
        "statement": "À partir du texte support, explique « On ne peut pas descendre deux fois dans le même fleuve » et dégage la position d'Héraclite sur l'Être.",
        "methodSteps": [
          "La phrase traduit l'écoulement, l'instabilité, le mouvement et le changement perpétuel.",
          "La substance périssable se disperse et se réunit sans cesse par la promptitude de sa métamorphose, c'est-à-dire sa transformation.",
          "Le monde est une harmonie née de la liaison des contraires, comme les tensions de la lyre et de l'arc."
        ],
        "conclusion": "Pour Héraclite, l'Être se caractérise par l'instabilité et le mouvement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'ontologie",
          "stepTheme": "L'ontologie",
          "stepBadge": "L'ontologie",
          "paragraphText": "• Ontologie : science qui s'interroge sur la signification de l'Être.\nLa question ontologique est le thème majeur de la période présocratique, époque des courants de pensée avant Socrate.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q1",
            "type": "mcq",
            "prompt": "L'ontologie se définit comme :",
            "options": [
              "La science qui s'interroge sur la signification de l'Être",
              "L'art de soutenir une thèse et son contraire",
              "La recherche du bonheur",
              "L'étude des cités et des lois"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la leçon : l'ontologie interroge la signification de l'Être."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Héraclite, philosophe présocratique",
          "stepTheme": "Héraclite, philosophe présocratique",
          "stepBadge": "Héraclite, philosophe présocratique",
          "paragraphText": "Héraclite, philosophe présocratique grec né vers 540 avant J.-C. à Éphèse et mort vers 470 avant J.-C., est surnommé « l'obscur » à cause de la nature énigmatique de ses écrits.\nSes œuvres nous sont parvenues sous forme de fragments.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q2",
            "type": "mcq",
            "prompt": "Pourquoi Héraclite est-il surnommé « l'obscur » ?",
            "options": [
              "Parce qu'il n'a rien écrit",
              "Parce qu'il vivait caché",
              "À cause de la nature énigmatique de ses écrits",
              "Parce qu'il était esclave"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le surnom vient de la nature énigmatique de ses écrits, parvenus sous forme de fragments."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les trois concepts clés d'Héraclite",
          "stepTheme": "Les trois concepts clés d'Héraclite",
          "stepBadge": "Les trois concepts clés d'Héraclite",
          "paragraphText": "La philosophie d'Héraclite s'articule autour de trois concepts clés.\n• Le logos\n• L'harmonie des contraires\n• Le devenir",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q3",
            "type": "mcq",
            "prompt": "Quels sont les trois concepts clés de la philosophie d'Héraclite ?",
            "options": [
              "L'Être, le Non-Être et la certitude",
              "Le logos, l'harmonie des contraires et le devenir",
              "La cité terrestre, la cité céleste et la charité",
              "L'induction, la démonstration et la sensation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Logos, harmonie des contraires et devenir : ce sont les trois concepts clés énoncés dans la présentation de l'auteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le fleuve qu'on ne descend pas deux fois",
          "stepTheme": "Le fleuve qu'on ne descend pas deux fois",
          "stepBadge": "Le fleuve qu'on ne descend pas deux fois",
          "paragraphText": "Exemple du texte support : « On ne peut pas descendre deux fois dans le même fleuve. »\nCette phrase traduit l'écoulement, l'instabilité, le mouvement, le changement perpétuel de la matière qui, sans commencer ni finir, naît et meurt.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q4",
            "type": "mcq",
            "prompt": "La phrase du fleuve chez Héraclite traduit :",
            "options": [
              "La permanence de l'Être",
              "L'immobilité du monde",
              "La certitude absolue",
              "L'écoulement et le changement perpétuel"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le fleuve toujours différent illustre l'instabilité et le mouvement qui caractérisent l'Être chez Héraclite."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'harmonie n'est pas l'absence de tensions",
          "stepTheme": "L'harmonie n'est pas l'absence de tensions",
          "stepBadge": "L'harmonie n'est pas l'absence de tensions",
          "paragraphText": "Piège : croire que l'harmonie supprime les contraires chez Héraclite.\nLe monde est une harmonie de tensions tour à tour tendues et détendues, comme celle de la lyre et de l'arc : l'harmonie naît de la liaison des contraires.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q5",
            "type": "mcq",
            "prompt": "Chez Héraclite, l'harmonie du monde est :",
            "options": [
              "L'absence totale de tensions",
              "Une harmonie de tensions, comme celle de la lyre et de l'arc",
              "Le repos éternel des choses",
              "La suppression des contraires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La lyre et l'arc produisent leur effet par la tension des contraires : l'harmonie naît de leur liaison."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La position d'Héraclite sur l'Être",
          "stepTheme": "La position d'Héraclite sur l'Être",
          "stepBadge": "La position d'Héraclite sur l'Être",
          "paragraphText": "• Position d'Héraclite : l'Être se caractérise par l'instabilité et le mouvement.\nVie et mort, veille et sommeil, jeunesse et vieillesse : le changement de l'un donne l'autre et réciproquement.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q6",
            "type": "mcq",
            "prompt": "Pour Héraclite, l'Être se caractérise par :",
            "options": [
              "L'instabilité et le mouvement",
              "L'immobilité et l'éternité",
              "La complétude sans changement",
              "Le silence et l'indifférence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'identification de la position de l'auteur dans la leçon : instabilité et mouvement."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q1",
          "type": "mcq",
          "prompt": "L'ontologie se définit comme :",
          "options": [
            "La science qui s'interroge sur la signification de l'Être",
            "L'art de soutenir une thèse et son contraire",
            "La recherche du bonheur",
            "L'étude des cités et des lois"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la leçon : l'ontologie interroge la signification de l'Être."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q2",
          "type": "mcq",
          "prompt": "Pourquoi Héraclite est-il surnommé « l'obscur » ?",
          "options": [
            "Parce qu'il n'a rien écrit",
            "Parce qu'il vivait caché",
            "À cause de la nature énigmatique de ses écrits",
            "Parce qu'il était esclave"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le surnom vient de la nature énigmatique de ses écrits, parvenus sous forme de fragments."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q3",
          "type": "mcq",
          "prompt": "Quels sont les trois concepts clés de la philosophie d'Héraclite ?",
          "options": [
            "L'Être, le Non-Être et la certitude",
            "Le logos, l'harmonie des contraires et le devenir",
            "La cité terrestre, la cité céleste et la charité",
            "L'induction, la démonstration et la sensation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Logos, harmonie des contraires et devenir : ce sont les trois concepts clés énoncés dans la présentation de l'auteur."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q4",
          "type": "mcq",
          "prompt": "La phrase du fleuve chez Héraclite traduit :",
          "options": [
            "La permanence de l'Être",
            "L'immobilité du monde",
            "La certitude absolue",
            "L'écoulement et le changement perpétuel"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le fleuve toujours différent illustre l'instabilité et le mouvement qui caractérisent l'Être chez Héraclite."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q5",
          "type": "mcq",
          "prompt": "Chez Héraclite, l'harmonie du monde est :",
          "options": [
            "L'absence totale de tensions",
            "Une harmonie de tensions, comme celle de la lyre et de l'arc",
            "Le repos éternel des choses",
            "La suppression des contraires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La lyre et l'arc produisent leur effet par la tension des contraires : l'harmonie naît de leur liaison."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p02_q6",
          "type": "mcq",
          "prompt": "Pour Héraclite, l'Être se caractérise par :",
          "options": [
            "L'instabilité et le mouvement",
            "L'immobilité et l'éternité",
            "La complétude sans changement",
            "Le silence et l'indifférence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'identification de la position de l'auteur dans la leçon : instabilité et mouvement."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03",
      "order": 3,
      "title": "Parménide : l'Être immobile et éternel",
      "summary": "Comprendre la thèse immobiliste de Parménide et la définition de l'Être qui conclut la confrontation avec Héraclite.",
      "conceptExplanation": "Parménide est né vers 544 et est mort vers 450 avant J.-C. C'est un philosophe contemporain d'Héraclite. Son courant philosophique est l'immobilisme. Il est considéré comme le père de l'ontologie éléatique.\nDans son texte, il n'y a que deux voies d'investigation : la première dit que l'Être est et qu'il n'est pas possible qu'il ne soit pas, c'est le chemin de la certitude qui accompagne la vérité ; l'autre dit que l'Être n'est pas, mais on ne peut saisir par l'esprit le Non-Être, puisqu'il est hors de notre portée, ni l'exprimer par des paroles, car c'est la même chose que penser et être.\nL'Être est incréé, impérissable, immobile et éternel : il est à la fois tout entier dans l'instant présent, un et continu. Pour Parménide, l'Être ne change pas.\nEn conclusion de la confrontation : pour Héraclite, l'Être est changeant et mobile, tandis que pour Parménide, l'Être ne change pas, il est immobile. L'Être est à la fois l'Un et le Multiple, la permanence et le devenir.",
      "keyRule": "Pour Parménide, l'Être est : incréé, impérissable, immobile et éternel ; le Non-Être est impensable.",
      "formulas": [],
      "workedExample": {
        "title": "Présenter la doctrine de Parménide (situation d'évaluation 1)",
        "statement": "Le prochain devoir portera sur Parménide, penseur présocratique. Le texte d'appui dit : « La vérité c'est que l'Etre est, le non-Etre n'est pas. » Donne les caractéristiques de l'Être et explique sa thèse.",
        "methodSteps": [
          "L'Être est éternel et indestructible, il est immuable.",
          "Le Non-Être n'est pas : il est contradictoire et impensable.",
          "L'opinion trompeuse croit que tout change : c'est la pensée d'Héraclite à laquelle Parménide fait allusion.",
          "Le philosophe doit laisser le monde des apparences pour celui de la certitude que donne l'immuable vérité."
        ],
        "conclusion": "La thèse de Parménide : l'Être est un, éternel et immobile, et seul le chemin de la certitude conduit à la vérité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Parménide, père de l'ontologie éléatique",
          "stepTheme": "Parménide, père de l'ontologie éléatique",
          "stepBadge": "Parménide, père de l'ontologie éléatique",
          "paragraphText": "Parménide (vers 544 à vers 450 avant J.-C.), contemporain d'Héraclite, a pour courant philosophique l'immobilisme.\nIl est considéré comme le père de l'ontologie éléatique.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q1",
            "type": "mcq",
            "prompt": "Parménide est considéré comme :",
            "options": [
              "Le fondateur de l'école sceptique",
              "Le père de l'ontologie éléatique",
              "Le fondateur de l'épicurisme",
              "Un maître de la rhétorique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La présentation de l'auteur le dit : père de l'ontologie éléatique, son courant est l'immobilisme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les deux voies d'investigation",
          "stepTheme": "Les deux voies d'investigation",
          "stepBadge": "Les deux voies d'investigation",
          "paragraphText": "Le texte distingue deux seules voies d'investigation.\n• La première dit que l'Être est : c'est le chemin de la certitude, qui accompagne la vérité.\n• L'autre dit que l'Être n'est pas : étroit sentier où l'on ne peut rien apprendre.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q2",
            "type": "mcq",
            "prompt": "Le chemin de la certitude, chez Parménide, est celui qui dit :",
            "options": [
              "Que l'Être n'est pas",
              "Que le Non-Être est nécessaire",
              "Que tout change sans cesse",
              "Que l'Être est et qu'il n'est pas possible qu'il ne soit pas"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Dire que l'Être est est le chemin de la certitude, car elle accompagne la vérité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les caractères de l'Être parménidien",
          "stepTheme": "Les caractères de l'Être parménidien",
          "stepBadge": "Les caractères de l'Être parménidien",
          "paragraphText": "• Incréé : qui existe sans avoir été créé.\n• Impérissable : qui ne disparaît pas, qui ne prend pas fin.\n• Immobile : qui n'est pas en mouvement.\n• Éternel : qui dure toujours, qui est permanent.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q3",
            "type": "mcq",
            "prompt": "Les caractères de l'Être chez Parménide sont :",
            "options": [
              "Incréé, impérissable, immobile et éternel",
              "Changeant, mobile et périssable",
              "Multiple, discontinu et temporaire",
              "Relatif à chaque individu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte accumule les signes : l'Être est incréé, impérissable, immobile, éternel, un et continu."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Penser ou exprimer le Non-Être",
          "stepTheme": "Penser ou exprimer le Non-Être",
          "stepBadge": "Penser ou exprimer le Non-Être",
          "paragraphText": "Piège : traiter le Non-Être comme une chose pensable chez Parménide.\nOn ne peut saisir par l'esprit le Non-Être, puisqu'il est hors de notre portée, ni l'exprimer par des paroles : c'est la même chose que penser et être.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi le Non-Être est-il rejeté par Parménide ?",
            "options": [
              "Parce qu'il est trop difficile à imaginer",
              "Parce qu'il est caché dans la caverne",
              "Parce qu'on ne peut ni le saisir par l'esprit ni l'exprimer par des paroles",
              "Parce qu'il dépend des sensations"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le Non-Être n'est rien : impensable et inexprimable, il faut dire et penser que l'Être est."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'Être tout entier dans l'instant présent",
          "stepTheme": "L'Être tout entier dans l'instant présent",
          "stepBadge": "L'Être tout entier dans l'instant présent",
          "paragraphText": "Exemple du texte : « On peut dire qu'il a été ou qu'il sera, puisqu'il est à la fois tout entier dans l'instant présent, un, continu. »\nL'Être ne devient pas : il est, complet et sans division.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q5",
            "type": "mcq",
            "prompt": "Selon le texte, l'Être est dans l'instant présent :",
            "options": [
              "Divisé et discontinu",
              "Tout entier, un et continu",
              "En train de naître et de mourir",
              "Relatif aux opinions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tout entier, un, continu : ces trois caractères excluent tout changement de l'Être."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Définition conclusive de l'Être",
          "stepTheme": "Définition conclusive de l'Être",
          "stepBadge": "Définition conclusive de l'Être",
          "paragraphText": "Conclusion de la confrontation : pour Héraclite, l'Être est changeant et mobile ; pour Parménide, l'Être ne change pas, il est immobile.\nEn conclusion, l'Être est à la fois l'Un et le Multiple, la permanence et le devenir.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q6",
            "type": "mcq",
            "prompt": "La leçon conclut que l'Être est à la fois :",
            "options": [
              "La vérité et l'opinion",
              "Le plaisir et la douleur uniquement",
              "L'Un et le Multiple, la permanence et le devenir",
              "La nature et la loi"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La définition finale réunit les deux thèses opposées : Un et Multiple, permanence et devenir."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q1",
          "type": "mcq",
          "prompt": "Parménide est considéré comme :",
          "options": [
            "Le fondateur de l'école sceptique",
            "Le père de l'ontologie éléatique",
            "Le fondateur de l'épicurisme",
            "Un maître de la rhétorique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La présentation de l'auteur le dit : père de l'ontologie éléatique, son courant est l'immobilisme."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q2",
          "type": "mcq",
          "prompt": "Le chemin de la certitude, chez Parménide, est celui qui dit :",
          "options": [
            "Que l'Être n'est pas",
            "Que le Non-Être est nécessaire",
            "Que tout change sans cesse",
            "Que l'Être est et qu'il n'est pas possible qu'il ne soit pas"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Dire que l'Être est est le chemin de la certitude, car elle accompagne la vérité."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q3",
          "type": "mcq",
          "prompt": "Les caractères de l'Être chez Parménide sont :",
          "options": [
            "Incréé, impérissable, immobile et éternel",
            "Changeant, mobile et périssable",
            "Multiple, discontinu et temporaire",
            "Relatif à chaque individu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte accumule les signes : l'Être est incréé, impérissable, immobile, éternel, un et continu."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi le Non-Être est-il rejeté par Parménide ?",
          "options": [
            "Parce qu'il est trop difficile à imaginer",
            "Parce qu'il est caché dans la caverne",
            "Parce qu'on ne peut ni le saisir par l'esprit ni l'exprimer par des paroles",
            "Parce qu'il dépend des sensations"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le Non-Être n'est rien : impensable et inexprimable, il faut dire et penser que l'Être est."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q5",
          "type": "mcq",
          "prompt": "Selon le texte, l'Être est dans l'instant présent :",
          "options": [
            "Divisé et discontinu",
            "Tout entier, un et continu",
            "En train de naître et de mourir",
            "Relatif aux opinions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tout entier, un, continu : ces trois caractères excluent tout changement de l'Être."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p03_q6",
          "type": "mcq",
          "prompt": "La leçon conclut que l'Être est à la fois :",
          "options": [
            "La vérité et l'opinion",
            "Le plaisir et la douleur uniquement",
            "L'Un et le Multiple, la permanence et le devenir",
            "La nature et la loi"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La définition finale réunit les deux thèses opposées : Un et Multiple, permanence et devenir."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04",
      "order": 4,
      "title": "La relativité de la vérité : les sophistes et Calliclès",
      "summary": "Comprendre qui sont les sophistes et la position de Calliclès : la loi de la nature contre la loi des faibles.",
      "conceptExplanation": "On entend par socratiques l'ensemble représenté par les penseurs contemporains de Socrate : les sophistes, Socrate lui-même, Platon et Aristote. Les pensées de cette période sont relatives au problème de la vérité.\nContemporains de Socrate, les sophistes sont des maîtres de la rhétorique, c'est-à-dire des professeurs d'éloquence, du discours flatteur et séduisant. Ce sont des marchands du savoir qui apprennent à leurs élèves la dialectique, c'est-à-dire l'art de soutenir une thèse et son contraire. Ils font la promotion de l'homme, unique source de toutes les valeurs : la vérité, c'est-à-dire la connaissance, devient relative à chaque individu.\nL'existence historique de Calliclès est incertaine : seul Platon en fait le personnage principal de son dialogue le Gorgias, et les spécialistes concluent qu'il est une fiction, une créature de Platon, qui lui prête les idées de sophistes ayant réellement vécu tels que Critias, Alcibiade, Protagoras et Gorgias.\nPour Calliclès, selon la nature, il est juste que le plus fort commande au plus faible ; les lois sont établies par les faibles et la multitude à leur profit. Pour bien vivre, il faut laisser prendre à ses passions tout l'accroissement possible au lieu de les réprimer. Pour Calliclès, conformément aux lois de la nature, l'homme doit, par tous les moyens, donner libre cours à ses passions en foulant aux pieds la morale conventionnelle établie, qui est en réalité celle des faibles et des incapables.",
      "keyRule": "Chez les sophistes, la vérité devient relative à chaque individu ; chez Calliclès, la nature donne raison au plus fort contre la loi des faibles.",
      "formulas": [],
      "workedExample": {
        "title": "Résumer la position de Calliclès dans le Gorgias",
        "statement": "À partir des deux textes de Platon, dégage la position de Calliclès sur la nature, la loi et les passions.",
        "methodSteps": [
          "Nature et loi sont en contradiction : selon la nature, le plus honteux est de subir l'injustice ; selon la loi, c'est de la commettre.",
          "Les lois sont établies par les faibles et la multitude, en vue d'eux-mêmes et à leur profit.",
          "La nature elle-même prouve qu'en bonne justice, le supérieur doit l'emporter sur l'inférieur et le plus capable sur le moins capable.",
          "Pour bien vivre, il faut laisser à ses passions tout l'accroissement possible, au lieu de les réprimer."
        ],
        "conclusion": "Calliclès oppose la loi de la nature, qui consacre le plus fort, à la morale conventionnelle des faibles, et prône le libre cours des passions."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les sophistes, maîtres de la rhétorique",
          "stepTheme": "Les sophistes, maîtres de la rhétorique",
          "stepBadge": "Les sophistes, maîtres de la rhétorique",
          "paragraphText": "• Sophistes : maîtres de la rhétorique, professeurs d'éloquence, du discours flatteur et séduisant.\nMarchands du savoir, ils apprennent à leurs élèves la dialectique, l'art de soutenir une thèse et son contraire.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q1",
            "type": "mcq",
            "prompt": "Les sophistes sont définis dans la leçon comme :",
            "options": [
              "Des fondateurs d'écoles sceptiques",
              "Des maîtres de la rhétorique, marchands du savoir",
              "Des Pères de l'Église",
              "Des élèves d'Aristote au Lycée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Maîtres de la rhétorique et marchands du savoir : c'est la présentation des sophistes dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La vérité relative à chaque individu",
          "stepTheme": "La vérité relative à chaque individu",
          "stepBadge": "La vérité relative à chaque individu",
          "paragraphText": "Les sophistes font la promotion de l'homme, unique source de toutes les valeurs.\nDu coup, la vérité, c'est-à-dire la connaissance, devient relative à chaque individu.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q2",
            "type": "mcq",
            "prompt": "Chez les sophistes, la vérité devient :",
            "options": [
              "Universelle et absolue",
              "Intelligible et éternelle",
              "Relative à chaque individu",
              "Impossible à distinguer de la science"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'homme étant l'unique source de toutes les valeurs, la vérité est relative à chaque individu."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Calliclès, une fiction de Platon",
          "stepTheme": "Calliclès, une fiction de Platon",
          "stepBadge": "Calliclès, une fiction de Platon",
          "paragraphText": "L'existence historique de Calliclès est incertaine car son nom n'est mentionné nulle part ; seul Platon en fait le personnage principal du Gorgias.\nLes spécialistes concluent qu'il est une fiction, une créature de Platon, qui lui prête les idées de sophistes ayant réellement vécu.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q3",
            "type": "mcq",
            "prompt": "Calliclès est, selon la présentation de la leçon :",
            "options": [
              "Un élève historique de Socrate",
              "Le fondateur du stoïcisme",
              "Un roi de Macédoine",
              "Une fiction de Platon, qui lui prête les idées de sophistes réels"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Personnage du Gorgias, Calliclès est tenu pour une création de Platon prêtée à des idées sophistiques réelles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Nature contre loi : le plus fort commande",
          "stepTheme": "Nature contre loi : le plus fort commande",
          "stepBadge": "Nature contre loi : le plus fort commande",
          "paragraphText": "Exemple du texte 1 : la nature montre, chez les animaux comme dans les cités, qu'il est juste que le plus fort commande au plus faible et l'emporte sur lui.\nLes lois, au contraire, sont établies par les faibles et la multitude, à leur profit.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q4",
            "type": "mcq",
            "prompt": "Selon Calliclès, les lois sont établies par :",
            "options": [
              "Les faibles et la multitude, à leur profit",
              "Les plus forts et les plus capables",
              "Les philosophes désintéressés",
              "Les dieux de la cité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le cœur du texte 1 : les faibles établissent les lois pour se protéger et brider les plus forts."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Bien vivre n'est pas réprimer ses passions",
          "stepTheme": "Bien vivre n'est pas réprimer ses passions",
          "stepBadge": "Bien vivre n'est pas réprimer ses passions",
          "paragraphText": "Piège : prêter à Calliclès l'éloge de la tempérance.\nPour lui, ce qui est beau et juste suivant la nature, c'est de laisser prendre à ses passions tout l'accroissement possible, au lieu de les réprimer, et de remplir tous ses désirs.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q5",
            "type": "mcq",
            "prompt": "Pour Calliclès, bien vivre consiste à :",
            "options": [
              "Réprimer toutes ses passions",
              "Pratiquer la tempérance et la modération",
              "Laisser à ses passions tout l'accroissement possible et satisfaire ses désirs",
              "Suspendre son jugement sur tout"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte 2 le dit en toute franchise : le luxe, l'incontinence et la liberté soutenus par la force constituent la vertu et le bonheur selon Calliclès."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La position de Calliclès résumée",
          "stepTheme": "La position de Calliclès résumée",
          "stepBadge": "La position de Calliclès résumée",
          "paragraphText": "Position de Calliclès : conformément aux lois de la nature, l'homme doit, par tous les moyens, donner libre cours à ses passions.\nIl foule aux pieds la morale conventionnelle établie, qui est en réalité celle des faibles et des incapables.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q6",
            "type": "mcq",
            "prompt": "La morale conventionnelle est, pour Calliclès :",
            "options": [
              "La loi de la nature elle-même",
              "Celle des faibles et des incapables",
              "La voie de la certitude",
              "Un don de Dieu aux hommes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il oppose la morale conventionnelle des faibles aux lois de la nature qui consacrent le plus fort."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q1",
          "type": "mcq",
          "prompt": "Les sophistes sont définis dans la leçon comme :",
          "options": [
            "Des fondateurs d'écoles sceptiques",
            "Des maîtres de la rhétorique, marchands du savoir",
            "Des Pères de l'Église",
            "Des élèves d'Aristote au Lycée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Maîtres de la rhétorique et marchands du savoir : c'est la présentation des sophistes dans la leçon."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q2",
          "type": "mcq",
          "prompt": "Chez les sophistes, la vérité devient :",
          "options": [
            "Universelle et absolue",
            "Intelligible et éternelle",
            "Relative à chaque individu",
            "Impossible à distinguer de la science"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'homme étant l'unique source de toutes les valeurs, la vérité est relative à chaque individu."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q3",
          "type": "mcq",
          "prompt": "Calliclès est, selon la présentation de la leçon :",
          "options": [
            "Un élève historique de Socrate",
            "Le fondateur du stoïcisme",
            "Un roi de Macédoine",
            "Une fiction de Platon, qui lui prête les idées de sophistes réels"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Personnage du Gorgias, Calliclès est tenu pour une création de Platon prêtée à des idées sophistiques réelles."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q4",
          "type": "mcq",
          "prompt": "Selon Calliclès, les lois sont établies par :",
          "options": [
            "Les faibles et la multitude, à leur profit",
            "Les plus forts et les plus capables",
            "Les philosophes désintéressés",
            "Les dieux de la cité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le cœur du texte 1 : les faibles établissent les lois pour se protéger et brider les plus forts."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q5",
          "type": "mcq",
          "prompt": "Pour Calliclès, bien vivre consiste à :",
          "options": [
            "Réprimer toutes ses passions",
            "Pratiquer la tempérance et la modération",
            "Laisser à ses passions tout l'accroissement possible et satisfaire ses désirs",
            "Suspendre son jugement sur tout"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte 2 le dit en toute franchise : le luxe, l'incontinence et la liberté soutenus par la force constituent la vertu et le bonheur selon Calliclès."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p04_q6",
          "type": "mcq",
          "prompt": "La morale conventionnelle est, pour Calliclès :",
          "options": [
            "La loi de la nature elle-même",
            "Celle des faibles et des incapables",
            "La voie de la certitude",
            "Un don de Dieu aux hommes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il oppose la morale conventionnelle des faibles aux lois de la nature qui consacrent le plus fort."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05",
      "order": 5,
      "title": "Platon et Aristote : la vérité universelle",
      "summary": "Opposer la vérité intelligible de Platon et la science de l'universel d'Aristote à la vérité relative des sophistes.",
      "conceptExplanation": "Platon (427-347 avant J.-C.), citoyen athénien d'une famille noble, rencontre Socrate à vingt ans et sera son élève pendant huit ans. À quarante ans, il fonde à Athènes son école philosophique appelée Académie. Dans ses dialogues, Platon restitue les enseignements de Socrate, dont la philosophie repose sur la connaissance de soi : « Connais-toi, toi-même ». Elle est surtout une critique radicale des sophistes.\nDans l'allégorie de la caverne (La République, livre VII), des prisonniers enchaînés depuis l'enfance prennent les ombres projetées sur la paroi pour des objets réels. La montée vers la région supérieure figure l'ascension de l'âme vers le lieu intelligible, où l'Idée du Bien est perçue la dernière et avec peine. La vérité ne relève pas des sensations ; elle est intelligible, c'est-à-dire relève de l'Idée : l'homme, grâce à la dialectique et par une ascèse, accède aux essences, aux principes des choses.\nAristote, né en 384 avant J.-C. à Stagire, suit dès 18 ans les enseignements de Platon, rejette la théorie des Idées pour une philosophie naturaliste et réaliste, et fonde à Athènes sa propre école appelée Lycée. Il déclare : « Platon est mon ami, mais je préfère la vérité ». Pour Aristote, on n'apprend que par induction ou par démonstration ; la sensation porte sur l'individuel, tandis que la science consiste dans la connaissance universelle : « Il n'y a de science que du général ». La connaissance sûre et certaine repose sur la définition et la démonstration.\nLes doctrines de Platon et d'Aristote semblent opposées mais poursuivent le même but : la vérité. Pour tous les deux, aussi bien que pour Socrate, la vérité n'est pas multiple ; elle est universelle et absolue.",
      "keyRule": "Contre la vérité relative des sophistes, Platon et Aristote affirment une vérité une, universelle et absolue.",
      "formulas": [],
      "workedExample": {
        "title": "Appliquer l'allégorie de la caverne",
        "statement": "Dans La République, livre VII, que représentent la caverne, les ombres et la montée vers la lumière, et quelle est la position de Platon sur la vérité ?",
        "methodSteps": [
          "Les prisonniers enchaînés prennent les ombres projetées par le feu pour des objets réels : image de l'ignorance.",
          "Le monde que nous découvre la vue est comparable au séjour de la prison, et la lumière du feu à la puissance du soleil.",
          "La montée dans la région supérieure figure l'ascension de l'âme vers le lieu intelligible.",
          "Dans le monde intelligible, l'Idée du Bien est perçue la dernière et avec peine ; elle dispense la vérité et l'intelligence."
        ],
        "conclusion": "Pour Platon, la vérité ne relève pas des sensations : elle est intelligible et s'atteint par la dialectique et l'ascèse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Platon, élève de Socrate et fondateur de l'Académie",
          "stepTheme": "Platon, élève de Socrate et fondateur de l'Académie",
          "stepBadge": "Platon, élève de Socrate et fondateur de l'Académie",
          "paragraphText": "Platon (427-347 avant J.-C.), citoyen athénien, rencontre Socrate à vingt ans et reste son élève huit ans.\nÀ quarante ans, il fonde à Athènes son école philosophique appelée Académie ; ses dialogues restituent les enseignements de Socrate.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q1",
            "type": "mcq",
            "prompt": "L'école philosophique fondée par Platon à Athènes s'appelle :",
            "options": [
              "Le Lycée",
              "L'Académie",
              "Le Jardin",
              "L'école sceptique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Platon fonde l'Académie à quarante ans ; le Lycée est l'école d'Aristote."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les prisonniers de la caverne",
          "stepTheme": "Les prisonniers de la caverne",
          "stepBadge": "Les prisonniers de la caverne",
          "paragraphText": "Exemple : des hommes enchaînés depuis l'enfance dans une caverne ne voient que les ombres projetées par un feu sur la paroi.\nDe tels hommes n'attribueront de réalité qu'aux ombres des objets fabriqués.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q2",
            "type": "mcq",
            "prompt": "Les prisonniers de la caverne prennent pour réels :",
            "options": [
              "Les objets portés le long du mur",
              "Le soleil hors de la caverne",
              "Les ombres projetées sur la paroi",
              "Les Idées intelligibles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Enchaînés la tête immobile, ils n'ont jamais vu autre chose que les ombres et les prennent pour des objets réels."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La vérité intelligible chez Platon",
          "stepTheme": "La vérité intelligible chez Platon",
          "stepBadge": "La vérité intelligible chez Platon",
          "paragraphText": "• Position de Platon : la vérité ne relève pas des sensations ; elle est intelligible, c'est-à-dire relève de l'Idée.\nL'homme, grâce à la dialectique et par une ascèse, accède aux essences, aux principes des choses.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q3",
            "type": "mcq",
            "prompt": "Pour Platon, l'homme accède aux essences grâce :",
            "options": [
              "À la rhétorique et au discours flatteur",
              "À la sensation répétée uniquement",
              "À l'indifférence absolue",
              "À la dialectique et à une ascèse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Dialectique et ascèse conduisent l'âme du monde visible au lieu intelligible où réside la vérité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Aristote : induction et démonstration",
          "stepTheme": "Aristote : induction et démonstration",
          "stepBadge": "Aristote : induction et démonstration",
          "paragraphText": "Pour Aristote, nous n'apprenons que par induction ou par démonstration.\nLa démonstration se fait à partir de principes universels, et l'induction de cas particuliers ; mais induire est impossible pour qui n'a pas la sensation.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q4",
            "type": "mcq",
            "prompt": "Selon Aristote, on n'apprend que par :",
            "options": [
              "L'induction ou la démonstration",
              "L'opinion et l'habitude",
              "La suspension du jugement",
              "Les passions et les désirs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'ouverture du texte 1 des Seconds analytiques cité dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La sensation ne donne pas la science",
          "stepTheme": "La sensation ne donne pas la science",
          "stepBadge": "La sensation ne donne pas la science",
          "paragraphText": "Piège : croire que percevoir suffit à connaître scientifiquement chez Aristote.\nLa sensation porte nécessairement sur l'individuel, tandis que la science consiste dans la connaissance universelle : l'universel, ce qui est toujours et partout, ne peut pas être perçu.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi n'y a-t-il pas de science par la sensation seule, chez Aristote ?",
            "options": [
              "Parce que les sens sont toujours faux",
              "Parce que la sensation porte sur l'individuel alors que la science est connaissance de l'universel",
              "Parce que la démonstration est impossible",
              "Parce que l'universel est une opinion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Même percevoir un triangle ne donne pas la science : il faudrait encore la démonstration de l'universel."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une vérité universelle et absolue",
          "stepTheme": "Une vérité universelle et absolue",
          "stepBadge": "Une vérité universelle et absolue",
          "paragraphText": "Caractérisation finale : les doctrines de Platon et d'Aristote semblent opposées mais poursuivent le même but, la vérité.\nPour tous les deux, aussi bien que pour Socrate, la vérité n'est pas multiple ; elle est universelle et absolue.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q6",
            "type": "mcq",
            "prompt": "Pour Platon, Aristote et Socrate, la vérité est :",
            "options": [
              "Relative à chaque individu",
              "Multiple et changeante",
              "Universelle et absolue",
              "Inaccessible et inexistante"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la conclusion de la partie : contre les sophistes, la vérité est une, universelle et absolue."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q1",
          "type": "mcq",
          "prompt": "L'école philosophique fondée par Platon à Athènes s'appelle :",
          "options": [
            "Le Lycée",
            "L'Académie",
            "Le Jardin",
            "L'école sceptique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Platon fonde l'Académie à quarante ans ; le Lycée est l'école d'Aristote."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q2",
          "type": "mcq",
          "prompt": "Les prisonniers de la caverne prennent pour réels :",
          "options": [
            "Les objets portés le long du mur",
            "Le soleil hors de la caverne",
            "Les ombres projetées sur la paroi",
            "Les Idées intelligibles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Enchaînés la tête immobile, ils n'ont jamais vu autre chose que les ombres et les prennent pour des objets réels."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q3",
          "type": "mcq",
          "prompt": "Pour Platon, l'homme accède aux essences grâce :",
          "options": [
            "À la rhétorique et au discours flatteur",
            "À la sensation répétée uniquement",
            "À l'indifférence absolue",
            "À la dialectique et à une ascèse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Dialectique et ascèse conduisent l'âme du monde visible au lieu intelligible où réside la vérité."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q4",
          "type": "mcq",
          "prompt": "Selon Aristote, on n'apprend que par :",
          "options": [
            "L'induction ou la démonstration",
            "L'opinion et l'habitude",
            "La suspension du jugement",
            "Les passions et les désirs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'ouverture du texte 1 des Seconds analytiques cité dans la leçon."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi n'y a-t-il pas de science par la sensation seule, chez Aristote ?",
          "options": [
            "Parce que les sens sont toujours faux",
            "Parce que la sensation porte sur l'individuel alors que la science est connaissance de l'universel",
            "Parce que la démonstration est impossible",
            "Parce que l'universel est une opinion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Même percevoir un triangle ne donne pas la science : il faudrait encore la démonstration de l'universel."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p05_q6",
          "type": "mcq",
          "prompt": "Pour Platon, Aristote et Socrate, la vérité est :",
          "options": [
            "Relative à chaque individu",
            "Multiple et changeante",
            "Universelle et absolue",
            "Inaccessible et inexistante"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la conclusion de la partie : contre les sophistes, la vérité est une, universelle et absolue."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06",
      "order": 6,
      "title": "Le bonheur post-socratique : le scepticisme de Pyrrhon",
      "summary": "Comprendre le scepticisme : suspension du jugement, aphasie et ataraxie comme voie du bonheur.",
      "conceptExplanation": "Les philosophies post-socratiques sont les courants de pensée qui se sont développés après Socrate, Platon et Aristote. Ces doctrines mettent l'accent sur l'existence humaine : pour leurs philosophes, la philosophie est un exercice spirituel pour atteindre la paix intérieure, synonyme de bonheur.\nPyrrhon (365-275 avant J.-C.) est le fondateur de l'école sceptique. Il est contemporain d'Alexandre et d'Aristote. Il n'a rien écrit ni enseigné ; sa pensée nous a été transmise par Timon et Sextus Empiricus, auteur des Hypotyposes pyrrhoniennes.\nSelon le texte de Sextus Empiricus, la fin du sceptique est la quiétude (ataraxie) en matière d'opinion et l'équilibre des passions en matière de nécessité. Le sceptique, tombé dans des contradictions d'égale force, s'est mis dans l'incapacité de juger et a suspendu son jugement ; à cette suspension du jugement a fait suite la quiétude. Celui qui croit qu'une chose est par nature bonne ou mauvaise se trouble à tout propos.\nPosition de l'auteur : la vérité n'existe pas car l'esprit humain est incapable de l'atteindre. Tous les discours ne sont que des croyances qui troublent l'âme. Le silence absolu (aphasie) est requis, tout comme la suspension du jugement (épochè), pour atteindre une vie équilibrée, synonyme de quiétude et de bonheur (ataraxie).",
      "keyRule": "Scepticisme : suspendre son jugement (épochè) et garder le silence (aphasie) pour atteindre la quiétude (ataraxie).",
      "formulas": [],
      "workedExample": {
        "title": "Résumer la doctrine sceptique du bonheur (situation d'évaluation 2)",
        "statement": "Un texte présente Pyrrhon, véritable fondateur de l'école sceptique, qui pense avoir trouvé le secret du bonheur. Résume sa doctrine en propositions.",
        "methodSteps": [
          "Sur toutes les questions, il faut suspendre son jugement, ne rien affirmer, ne rien dire : c'est le doute universel des sophistes repris et systématisé.",
          "Tout ce qui passe pour vérité n'est qu'habitude et convention : convention le juste et l'injuste, convention le beau et le laid.",
          "Il faut distinguer les phénomènes et les causes, qui restent inconnaissables.",
          "Conséquence pratique : l'indifférence absolue à tout, car rien n'est absolument bon ou mauvais en soi ; c'est le secret du bonheur."
        ],
        "conclusion": "Le bonheur sceptique naît de la suspension du jugement et de l'indifférence, vécues par Pyrrhon avec une égalité d'humeur inaltérable."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les philosophies post-socratiques",
          "stepTheme": "Les philosophies post-socratiques",
          "stepBadge": "Les philosophies post-socratiques",
          "paragraphText": "• Philosophies post-socratiques : courants de pensée développés après Socrate, Platon et Aristote.\nElles mettent l'accent sur l'existence humaine : la philosophie y est un exercice spirituel pour atteindre la paix intérieure, synonyme de bonheur.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q1",
            "type": "mcq",
            "prompt": "Les philosophies post-socratiques mettent l'accent sur :",
            "options": [
              "La question ontologique uniquement",
              "L'existence humaine et la paix intérieure",
              "La fondation des cités",
              "La théorie des Idées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Scepticisme, épicurisme et stoïcisme cherchent comment atteindre le bonheur, paix intérieure de l'âme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Pyrrhon, fondateur de l'école sceptique",
          "stepTheme": "Pyrrhon, fondateur de l'école sceptique",
          "stepBadge": "Pyrrhon, fondateur de l'école sceptique",
          "paragraphText": "Pyrrhon (365-275 avant J.-C.), fondateur de l'école sceptique, contemporain d'Alexandre et d'Aristote, n'a rien écrit ni enseigné.\nSa pensée nous a été transmise par Timon et Sextus Empiricus.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q2",
            "type": "mcq",
            "prompt": "La pensée de Pyrrhon nous est connue grâce à :",
            "options": [
              "Ses dialogues conservés",
              "Son école appelée Lycée",
              "Timon et Sextus Empiricus",
              "Platon, son maître"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pyrrhon n'ayant rien écrit, Timon et Sextus Empiricus ont transmis sa pensée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La fin du sceptique : l'ataraxie",
          "stepTheme": "La fin du sceptique : l'ataraxie",
          "stepBadge": "La fin du sceptique : l'ataraxie",
          "paragraphText": "• Ataraxie : quiétude en matière d'opinion, à laquelle s'ajoute l'équilibre des passions en matière de nécessité.\nLa fin est le terme dernier des désirs : on ne saurait lui assigner une nouvelle fin.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q3",
            "type": "mcq",
            "prompt": "La fin du sceptique est :",
            "options": [
              "La gloire auprès des hommes",
              "La satisfaction de toutes les passions",
              "La connaissance de l'universel",
              "La quiétude en matière d'opinion et l'équilibre des passions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte de Sextus Empiricus définit ainsi la fin visée par le sceptique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "De la contradiction à la suspension du jugement",
          "stepTheme": "De la contradiction à la suspension du jugement",
          "stepBadge": "De la contradiction à la suspension du jugement",
          "paragraphText": "Démarche du sceptique : philosopher sur les jugements, tomber dans des contradictions d'égale force, se trouver incapable de juger.\nIl suspend alors son jugement, et à cette suspension fait suite la quiétude en matière d'opinions.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q4",
            "type": "mcq",
            "prompt": "Chez le sceptique, la quiétude survient après :",
            "options": [
              "La suspension du jugement",
              "L'affirmation d'une vérité absolue",
              "La poursuite des biens extérieurs",
              "La démonstration universelle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les contradictions d'égale force conduisent à suspendre le jugement, et la quiétude suit heureusement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Croire une chose bonne ou mauvaise par nature trouble l'âme",
          "stepTheme": "Croire une chose bonne ou mauvaise par nature trouble l'âme",
          "stepBadge": "Croire une chose bonne ou mauvaise par nature trouble l'âme",
          "paragraphText": "Piège : chercher le bonheur en poursuivant ce qu'on croit un bien par nature.\nCelui qui croit qu'une chose est par nature bonne ou mauvaise se trouble à tout propos : il craint de perdre le bien et poursuit sans mesure ce qu'il croit être un bienfait.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q5",
            "type": "mcq",
            "prompt": "Selon le texte, celui qui croit une chose par nature bonne ou mauvaise :",
            "options": [
              "Atteint immédiatement la quiétude",
              "Se trouble à tout propos et craint de perdre son bien",
              "Devient indifférent à tout",
              "Suspend son jugement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le trouble décrit par Sextus Empiricus, à l'opposé de la quiétude du sceptique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Épochè et aphasie",
          "stepTheme": "Épochè et aphasie",
          "stepBadge": "Épochè et aphasie",
          "paragraphText": "• Épochè : suspension du jugement.\n• Aphasie : silence absolu.\nPour l'auteur, la vérité n'existe pas car l'esprit humain est incapable de l'atteindre ; épochè et aphasie conduisent à la quiétude, synonyme de bonheur.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q6",
            "type": "mcq",
            "prompt": "L'épochè désigne, dans la position sceptique :",
            "options": [
              "La démonstration par l'universel",
              "L'amour de Dieu",
              "La suspension du jugement",
              "La satisfaction des désirs naturels"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Épochè (suspension du jugement) et aphasie (silence absolu) sont requises pour la vie équilibrée du sceptique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q1",
          "type": "mcq",
          "prompt": "Les philosophies post-socratiques mettent l'accent sur :",
          "options": [
            "La question ontologique uniquement",
            "L'existence humaine et la paix intérieure",
            "La fondation des cités",
            "La théorie des Idées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Scepticisme, épicurisme et stoïcisme cherchent comment atteindre le bonheur, paix intérieure de l'âme."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q2",
          "type": "mcq",
          "prompt": "La pensée de Pyrrhon nous est connue grâce à :",
          "options": [
            "Ses dialogues conservés",
            "Son école appelée Lycée",
            "Timon et Sextus Empiricus",
            "Platon, son maître"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pyrrhon n'ayant rien écrit, Timon et Sextus Empiricus ont transmis sa pensée."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q3",
          "type": "mcq",
          "prompt": "La fin du sceptique est :",
          "options": [
            "La gloire auprès des hommes",
            "La satisfaction de toutes les passions",
            "La connaissance de l'universel",
            "La quiétude en matière d'opinion et l'équilibre des passions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte de Sextus Empiricus définit ainsi la fin visée par le sceptique."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q4",
          "type": "mcq",
          "prompt": "Chez le sceptique, la quiétude survient après :",
          "options": [
            "La suspension du jugement",
            "L'affirmation d'une vérité absolue",
            "La poursuite des biens extérieurs",
            "La démonstration universelle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les contradictions d'égale force conduisent à suspendre le jugement, et la quiétude suit heureusement."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q5",
          "type": "mcq",
          "prompt": "Selon le texte, celui qui croit une chose par nature bonne ou mauvaise :",
          "options": [
            "Atteint immédiatement la quiétude",
            "Se trouble à tout propos et craint de perdre son bien",
            "Devient indifférent à tout",
            "Suspend son jugement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le trouble décrit par Sextus Empiricus, à l'opposé de la quiétude du sceptique."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p06_q6",
          "type": "mcq",
          "prompt": "L'épochè désigne, dans la position sceptique :",
          "options": [
            "La démonstration par l'universel",
            "L'amour de Dieu",
            "La suspension du jugement",
            "La satisfaction des désirs naturels"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Épochè (suspension du jugement) et aphasie (silence absolu) sont requises pour la vie équilibrée du sceptique."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07",
      "order": 7,
      "title": "Épicurisme et stoïcisme : deux voies du bonheur",
      "summary": "Comparer l'épicurisme des désirs naturels nécessaires et le stoïcisme du partage entre ce qui dépend de nous et ce qui n'en dépend pas.",
      "conceptExplanation": "Épicure (341-270 avant J.-C.) est le fondateur de l'épicurisme, appelé aussi hédonisme. Il crée sa propre école en 306 avant J.-C. De ses nombreux ouvrages perdus, seuls nous sont parvenus la Lettre à Hérodote sur la physique, la Lettre à Pythoclès sur les phénomènes naturels et la Lettre à Ménécée sur la morale.\nDans la Lettre à Ménécée, il enseigne que la mort n'est rien pour nous, car tout bien et tout mal résident dans la sensation, et la mort est la privation complète de la sensation : tant que nous existons, la mort n'est pas là, et quand la mort est là, nous ne sommes plus. Il distingue parmi les désirs les désirs naturels et les désirs vains, et parmi les désirs naturels, les nécessaires et les naturels seulement ; les désirs nécessaires le sont pour le bonheur, pour l'absence de souffrances du corps ou pour la vie même. En se libérant des frayeurs religieuses et de l'idée de la mort, et en satisfaisant uniquement les désirs naturels nécessaires, l'homme atteint le bonheur (ataraxie), absence de trouble et plaisir simple, mesuré.\nZénon de Cittium (336-264 avant J.-C.) est le fondateur du stoïcisme, connu à travers des auteurs romains : Sénèque, Marc-Aurèle et Épictète. Épictète (50-130 après J.-C.), esclave affranchi, auteur des Entretiens et du Manuel, distingue ce qui dépend de nous — nos jugements, nos tendances, nos désirs, nos aversions, tout ce qui est opération de notre âme — et ce qui ne dépend pas de nous : le corps, la fortune, les témoignages de considération, les charges publiques. L'homme libre et heureux se conforme à la nature, suit la raison, se détache des biens extérieurs et fait preuve d'une indifférence totale à l'égard des opinions.",
      "keyRule": "Épicure : satisfaire seulement les désirs naturels nécessaires ; stoïcisme : ne regarder comme à soi que ce qui dépend de nous.",
      "formulas": [],
      "workedExample": {
        "title": "Définir les trois doctrines du bonheur (activité d'application)",
        "statement": "L'activité d'application demande de définir le scepticisme, le stoïcisme et l'épicurisme et de citer leur chef de file. Réponds pour l'épicurisme et le stoïcisme.",
        "methodSteps": [
          "Épicurisme : doctrine d'Épicure ; en satisfaisant uniquement les désirs naturels nécessaires et en se libérant de la peur de la mort, l'homme atteint l'ataraxie, plaisir simple et mesuré.",
          "Stoïcisme : doctrine fondée par Zénon de Cittium ; l'homme heureux distingue ce qui dépend de lui de ce qui n'en dépend pas et se conforme à la nature et à la raison.",
          "Le scepticisme, troisième doctrine, a pour chef de file Pyrrhon et repose sur la suspension du jugement."
        ],
        "conclusion": "Trois doctrines post-socratiques, trois chefs de file — Pyrrhon, Épicure, Zénon — et une même visée : le bonheur comme paix de l'âme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Épicure et la mort qui n'est rien pour nous",
          "stepTheme": "Épicure et la mort qui n'est rien pour nous",
          "stepBadge": "Épicure et la mort qui n'est rien pour nous",
          "paragraphText": "Épicure (341-270 avant J.-C.), fondateur de l'épicurisme ou hédonisme, enseigne : la mort n'est rien pour nous.\nTout bien et tout mal résident dans la sensation ; or la mort est la privation complète de la sensation.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q1",
            "type": "mcq",
            "prompt": "Pourquoi la mort n'est-elle rien pour nous, chez Épicure ?",
            "options": [
              "Parce que l'âme est immortelle",
              "Parce que tant que nous existons la mort n'est pas là, et quand elle est là nous ne sommes plus",
              "Parce que les dieux nous protègent",
              "Parce que le jugement est suspendu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La mort n'a aucun rapport ni avec les vivants ni avec les morts : elle ne peut donc pas nous troubler."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La classification des désirs chez Épicure",
          "stepTheme": "La classification des désirs chez Épicure",
          "stepBadge": "La classification des désirs chez Épicure",
          "paragraphText": "Parmi les désirs, les uns sont naturels, les autres vains ; parmi les désirs naturels, les uns sont nécessaires, les autres naturels seulement.\nLes désirs nécessaires le sont pour le bonheur, pour l'absence de souffrances du corps, ou pour la vie même.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q2",
            "type": "mcq",
            "prompt": "Chez Épicure, les désirs nécessaires le sont :",
            "options": [
              "Pour la gloire et la domination",
              "Pour le bonheur, pour l'absence de souffrances du corps, ou pour la vie même",
              "Pour l'accumulation des richesses",
              "Pour la vie publique uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la classification de la Lettre à Ménécée : seuls les désirs naturels nécessaires doivent être satisfaits."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le pain d'orge et l'eau : le plaisir simple",
          "stepTheme": "Le pain d'orge et l'eau : le plaisir simple",
          "stepBadge": "Le pain d'orge et l'eau : le plaisir simple",
          "paragraphText": "Exemple de la Lettre à Ménécée : les mets simples donnent un plaisir égal à celui d'un régime somptueux, une fois supprimée la douleur du besoin.\nDu pain d'orge et de l'eau donnent le plaisir extrême lorsqu'on les porte à sa bouche dans le besoin.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q3",
            "type": "mcq",
            "prompt": "L'exemple du pain d'orge et de l'eau montre que :",
            "options": [
              "Le plaisir exige un régime somptueux",
              "Il faut poursuivre les désirs vains",
              "Les mets simples donnent un plaisir égal au régime somptueux quand le besoin est supprimé",
              "La sensation est sans rapport avec le bonheur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le plaisir épicurien est simple et mesuré : ce qui est naturel est facile à se procurer, ce qui est vain est difficile à obtenir."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Ce qui dépend de nous selon Épictète",
          "stepTheme": "Ce qui dépend de nous selon Épictète",
          "stepBadge": "Ce qui dépend de nous selon Épictète",
          "paragraphText": "• Ce qui dépend de nous : nos jugements, nos tendances, nos désirs, nos aversions, en un mot tout ce qui est opération de notre âme.\n• Ce qui ne dépend pas de nous : le corps, la fortune, les témoignages de considération, les charges publiques.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q4",
            "type": "mcq",
            "prompt": "Selon Épictète, lequel de ces éléments dépend de nous ?",
            "options": [
              "La fortune",
              "Le corps",
              "Les charges publiques",
              "Nos jugements et nos désirs"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Jugements, tendances, désirs et aversions sont opérations de notre âme : ils dépendent de nous et sont libres par nature."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Prendre pour sien ce qui est à autrui",
          "stepTheme": "Prendre pour sien ce qui est à autrui",
          "stepBadge": "Prendre pour sien ce qui est à autrui",
          "paragraphText": "Piège dénoncé par Épictète : regarder comme libre ce qui de sa nature est esclave, et comme étant à toi ce qui est à autrui.\nAlors tu seras contrarié, dans le deuil, troublé, et tu t'en prendras aux dieux et aux hommes.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q5",
            "type": "mcq",
            "prompt": "Si l'on prend pour sien ce qui ne dépend pas de nous, on sera, selon Épictète :",
            "options": [
              "Contrarié, troublé, et l'on s'en prendra aux dieux et aux hommes",
              "Libre et sans empêchement",
              "Assuré du bonheur",
              "Indifférent à tout"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La confusion entre les deux domaines est la source du trouble ; la distinction correcte rend libre et heureux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'homme libre et heureux chez les stoïciens",
          "stepTheme": "L'homme libre et heureux chez les stoïciens",
          "stepBadge": "L'homme libre et heureux chez les stoïciens",
          "paragraphText": "L'homme libre et heureux, dans la position stoïcienne rapportée par la leçon, se conforme à la nature et suit la raison.\nIl se détache des biens extérieurs et fait preuve d'une indifférence totale à l'égard des opinions. Zénon de Cittium est le fondateur du stoïcisme.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q6",
            "type": "mcq",
            "prompt": "L'homme stoïcien libre et heureux est celui qui :",
            "options": [
              "Donne libre cours à toutes ses passions",
              "Se conforme à la nature, suit la raison et se détache des biens extérieurs",
              "Recherche la gloire auprès des hommes",
              "Satisfait ses désirs vains"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conformité à la nature, raison, détachement des biens extérieurs et indifférence aux opinions : c'est la position stoïcienne de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q1",
          "type": "mcq",
          "prompt": "Pourquoi la mort n'est-elle rien pour nous, chez Épicure ?",
          "options": [
            "Parce que l'âme est immortelle",
            "Parce que tant que nous existons la mort n'est pas là, et quand elle est là nous ne sommes plus",
            "Parce que les dieux nous protègent",
            "Parce que le jugement est suspendu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La mort n'a aucun rapport ni avec les vivants ni avec les morts : elle ne peut donc pas nous troubler."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q2",
          "type": "mcq",
          "prompt": "Chez Épicure, les désirs nécessaires le sont :",
          "options": [
            "Pour la gloire et la domination",
            "Pour le bonheur, pour l'absence de souffrances du corps, ou pour la vie même",
            "Pour l'accumulation des richesses",
            "Pour la vie publique uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la classification de la Lettre à Ménécée : seuls les désirs naturels nécessaires doivent être satisfaits."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q3",
          "type": "mcq",
          "prompt": "L'exemple du pain d'orge et de l'eau montre que :",
          "options": [
            "Le plaisir exige un régime somptueux",
            "Il faut poursuivre les désirs vains",
            "Les mets simples donnent un plaisir égal au régime somptueux quand le besoin est supprimé",
            "La sensation est sans rapport avec le bonheur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le plaisir épicurien est simple et mesuré : ce qui est naturel est facile à se procurer, ce qui est vain est difficile à obtenir."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q4",
          "type": "mcq",
          "prompt": "Selon Épictète, lequel de ces éléments dépend de nous ?",
          "options": [
            "La fortune",
            "Le corps",
            "Les charges publiques",
            "Nos jugements et nos désirs"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Jugements, tendances, désirs et aversions sont opérations de notre âme : ils dépendent de nous et sont libres par nature."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q5",
          "type": "mcq",
          "prompt": "Si l'on prend pour sien ce qui ne dépend pas de nous, on sera, selon Épictète :",
          "options": [
            "Contrarié, troublé, et l'on s'en prendra aux dieux et aux hommes",
            "Libre et sans empêchement",
            "Assuré du bonheur",
            "Indifférent à tout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La confusion entre les deux domaines est la source du trouble ; la distinction correcte rend libre et heureux."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l06_presentation_histoire_philosophie_p07_q6",
          "type": "mcq",
          "prompt": "L'homme stoïcien libre et heureux est celui qui :",
          "options": [
            "Donne libre cours à toutes ses passions",
            "Se conforme à la nature, suit la raison et se détache des biens extérieurs",
            "Recherche la gloire auprès des hommes",
            "Satisfait ses désirs vains"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conformité à la nature, raison, détachement des biens extérieurs et indifférence aux opinions : c'est la position stoïcienne de la leçon."
        }
      ]
    }
  ]
};
