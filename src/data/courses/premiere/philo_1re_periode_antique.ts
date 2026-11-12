import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo 1ère_Leç 6_Présentation de lhistoire de la philosophie.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_1RE_L06_PERIODE_ANTIQUE: CurriculumChapter = {
  "id": "premiere_philo_histoire_l06_periode_antique",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 6,
  "title": "Leçon 6 : Histoire de la philosophie, la période antique",
  "summary": "Les quatre périodes ; présocratiques (Héraclite, Parménide), socratiques (sophistes et Calliclès, Socrate et Platon, Aristote), post-socratiques (Pyrrhon, Épicure, Épictète).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "Philo 1ère_Leç 6_Présentation de lhistoire de la philosophie.pdf",
  "points": [
    {
      "id": "premiere_philo_histoire_l06_periode_antique_p01",
      "order": 1,
      "title": "Les grandes périodes et l'Antiquité",
      "summary": "Quatre périodes ; l'Antiquité, ses trois sous-périodes et ses trois questions.",
      "conceptExplanation": "L'histoire de la philosophie est celle des grandes doctrines, idées et théories des philosophes à travers leurs époques. Elle suit l'histoire de l'humanité et se divise en quatre grandes périodes :\n1. la période antique (l'Antiquité) ;\n2. le Moyen Âge et la Renaissance ;\n3. la période moderne ;\n4. la période contemporaine.\n\nL'Antiquité s'étend du VIe siècle avant J.-C. au Ve siècle après J.-C. En philosophie, elle se divise en trois sous-périodes, chacune avec sa grande question :\n- la période présocratique (avant Socrate) : la question ontologique, c'est-à-dire la question de l'Être (Héraclite, Parménide) ;\n- la période socratique (Socrate et ses contemporains) : la question de la vérité (les sophistes, Socrate, Platon, Aristote) ;\n- la période post-socratique (après Socrate, Platon et Aristote) : la question du bonheur (Pyrrhon, Épicure, les stoïciens).\n\nRepère : Socrate a vécu de 470 à 399 avant J.-C. C'est lui qui sert de borne pour nommer les sous-périodes.\n\nSituation du programme : un élève surnommé « Platon » affirme que Platon est un philosophe moderne. C'est faux : Platon (427-347 av. J.-C.) appartient à la période antique, sous-période socratique.",
      "keyRule": "Antiquité (VIe s. av. J.-C. – Ve s. apr. J.-C.) = présocratiques (l'Être) → socratiques (la vérité) → post-socratiques (le bonheur).",
      "formulas": [],
      "workedExample": {
        "title": "Platon, moderne ou antique ?",
        "statement": "Un élève dit que Platon (427-347 av. J.-C.) est un philosophe moderne. A-t-il raison ?",
        "methodSteps": [
          "Platon a vécu au IVe siècle avant J.-C., donc dans l'Antiquité (VIe s. av. J.-C. – Ve s. apr. J.-C.).",
          "Il est l'élève de Socrate : il appartient à la période socratique."
        ],
        "conclusion": "Non : Platon est un philosophe antique, de la période socratique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Quatre périodes",
          "stepTheme": "Quatre périodes",
          "stepBadge": "Quatre périodes",
          "paragraphText": "L'histoire de la philosophie se divise en quatre grandes périodes : l'Antiquité, le Moyen Âge et la Renaissance, la période moderne, la période contemporaine.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p01_q1",
            "type": "mcq",
            "prompt": "Quelles sont, dans l'ordre, les quatre grandes périodes de l'histoire de la philosophie ?",
            "options": [
              "Antiquité ; Moyen Âge et Renaissance ; période moderne ; période contemporaine",
              "Préhistoire ; Antiquité ; Moyen Âge ; Renaissance",
              "Période moderne ; Antiquité ; Moyen Âge ; période contemporaine",
              "Présocratique ; socratique ; post-socratique ; moderne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Présocratique, socratique et post-socratique sont les sous-périodes de l'Antiquité seulement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les dates de l'Antiquité",
          "stepTheme": "Les dates de l'Antiquité",
          "stepBadge": "Les dates de l'Antiquité",
          "paragraphText": "L'Antiquité s'étend du VIe siècle avant J.-C. au Ve siècle après J.-C.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p01_q2",
            "type": "mcq",
            "prompt": "En histoire de la philosophie, de quand à quand s'étend la période antique ?",
            "options": [
              "Du Ier au Xe siècle après J.-C.",
              "Du VIe siècle avant J.-C. au Ve siècle après J.-C.",
              "Du XVe au XVIIIe siècle",
              "Du XIXe siècle à nos jours"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle commence avec les premiers penseurs grecs et finit au Ve siècle après J.-C."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Trois sous-périodes",
          "stepTheme": "Trois sous-périodes",
          "stepBadge": "Trois sous-périodes",
          "paragraphText": "L'Antiquité philosophique compte trois sous-périodes : présocratique, socratique, post-socratique.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p01_q3",
            "type": "mcq",
            "prompt": "En quelles trois sous-périodes divise-t-on l'Antiquité philosophique ?",
            "options": [
              "Moderne, contemporaine, actuelle",
              "Présocratique, socratique, post-socratique",
              "Grecque, romaine, africaine",
              "Ancienne, moyenne, nouvelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Socrate sert de repère : avant lui, avec lui, après lui."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Trois grandes questions",
          "stepTheme": "Trois grandes questions",
          "stepBadge": "Trois grandes questions",
          "paragraphText": "Présocratiques : la question de l'Être. Socratiques : la question de la vérité. Post-socratiques : la question du bonheur.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p01_q4",
            "type": "mcq",
            "prompt": "Dans l'Antiquité, quelle est la grande question de la période post-socratique (Pyrrhon, Épicure, les stoïciens) ?",
            "options": [
              "La question de l'Être",
              "La question de la vérité",
              "La question du bonheur",
              "La question de la technique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Après Socrate, la philosophie devient une recherche de la paix intérieure, du bonheur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'ontologie",
          "stepTheme": "L'ontologie",
          "stepBadge": "L'ontologie",
          "paragraphText": "L'ontologie est la science qui s'interroge sur la signification de l'Être. C'est la question majeure des présocratiques.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p01_q5",
            "type": "mcq",
            "prompt": "Les présocratiques (Héraclite, Parménide) se posent la question ontologique. Qu'est-ce que l'ontologie ?",
            "options": [
              "L'étude des animaux",
              "La science qui s'interroge sur la signification de l'Être",
              "L'art de bien parler",
              "L'étude du bonheur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Onto » vient du grec « ce qui est » : l'ontologie étudie l'Être."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Socrate, la borne",
          "stepTheme": "Socrate, la borne",
          "stepBadge": "Socrate, la borne",
          "paragraphText": "Socrate (470-399 av. J.-C.) sert de repère : les présocratiques sont les penseurs d'avant lui.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi appelle-t-on « présocratiques » des penseurs comme Héraclite et Parménide ?",
            "options": [
              "Parce qu'ils ont critiqué Socrate",
              "Parce que leurs courants de pensée sont antérieurs à Socrate (470-399 av. J.-C.)",
              "Parce qu'ils étaient élèves de Socrate",
              "Parce qu'ils vivaient à Rome"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Pré » signifie « avant » : avant Socrate."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Platon n'est pas moderne",
          "stepTheme": "Platon n'est pas moderne",
          "stepBadge": "Platon n'est pas moderne",
          "paragraphText": "Platon (427-347 av. J.-C.) est un philosophe antique de la période socratique, pas un moderne.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p01_q7",
            "type": "mcq",
            "prompt": "Un élève affirme que Platon (427-347 av. J.-C.), élève de Socrate, est un philosophe moderne. À quelle période et sous-période Platon appartient-il en réalité ?",
            "options": [
              "Période moderne",
              "Antiquité, période présocratique",
              "Antiquité, période socratique",
              "Période contemporaine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il vit au IVe siècle av. J.-C. et suit l'enseignement de Socrate."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p01_q1",
          "type": "mcq",
          "prompt": "Quelles sont, dans l'ordre, les quatre grandes périodes de l'histoire de la philosophie ?",
          "options": [
            "Antiquité ; Moyen Âge et Renaissance ; période moderne ; période contemporaine",
            "Préhistoire ; Antiquité ; Moyen Âge ; Renaissance",
            "Période moderne ; Antiquité ; Moyen Âge ; période contemporaine",
            "Présocratique ; socratique ; post-socratique ; moderne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Présocratique, socratique et post-socratique sont les sous-périodes de l'Antiquité seulement."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p01_q2",
          "type": "mcq",
          "prompt": "En histoire de la philosophie, de quand à quand s'étend la période antique ?",
          "options": [
            "Du Ier au Xe siècle après J.-C.",
            "Du VIe siècle avant J.-C. au Ve siècle après J.-C.",
            "Du XVe au XVIIIe siècle",
            "Du XIXe siècle à nos jours"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle commence avec les premiers penseurs grecs et finit au Ve siècle après J.-C."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p01_q3",
          "type": "mcq",
          "prompt": "En quelles trois sous-périodes divise-t-on l'Antiquité philosophique ?",
          "options": [
            "Moderne, contemporaine, actuelle",
            "Présocratique, socratique, post-socratique",
            "Grecque, romaine, africaine",
            "Ancienne, moyenne, nouvelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Socrate sert de repère : avant lui, avec lui, après lui."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p01_q4",
          "type": "mcq",
          "prompt": "Dans l'Antiquité, quelle est la grande question de la période post-socratique (Pyrrhon, Épicure, les stoïciens) ?",
          "options": [
            "La question de l'Être",
            "La question de la vérité",
            "La question du bonheur",
            "La question de la technique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Après Socrate, la philosophie devient une recherche de la paix intérieure, du bonheur."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p01_q5",
          "type": "mcq",
          "prompt": "Les présocratiques (Héraclite, Parménide) se posent la question ontologique. Qu'est-ce que l'ontologie ?",
          "options": [
            "L'étude des animaux",
            "La science qui s'interroge sur la signification de l'Être",
            "L'art de bien parler",
            "L'étude du bonheur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Onto » vient du grec « ce qui est » : l'ontologie étudie l'Être."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi appelle-t-on « présocratiques » des penseurs comme Héraclite et Parménide ?",
          "options": [
            "Parce qu'ils ont critiqué Socrate",
            "Parce que leurs courants de pensée sont antérieurs à Socrate (470-399 av. J.-C.)",
            "Parce qu'ils étaient élèves de Socrate",
            "Parce qu'ils vivaient à Rome"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Pré » signifie « avant » : avant Socrate."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p01_q7",
          "type": "mcq",
          "prompt": "Un élève affirme que Platon (427-347 av. J.-C.), élève de Socrate, est un philosophe moderne. À quelle période et sous-période Platon appartient-il en réalité ?",
          "options": [
            "Période moderne",
            "Antiquité, période présocratique",
            "Antiquité, période socratique",
            "Période contemporaine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il vit au IVe siècle av. J.-C. et suit l'enseignement de Socrate."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l06_periode_antique_p02",
      "order": 2,
      "title": "Héraclite : tout change",
      "summary": "Pour Héraclite, l'Être est instabilité et mouvement.",
      "conceptExplanation": "Texte support (Héraclite, Fragments) :\n« On ne peut pas descendre deux fois dans le même fleuve. Ni toucher deux fois une substance périssable dans le même état, car elle se disperse et se réunit de nouveau par la promptitude et la rapidité de sa métamorphose : la matière, sans commencer ni finir, en même temps naît et meurt, survient et disparaît. Ce qui est en nous est toujours un et le même : vie et mort, veille et sommeil, jeunesse et vieillesse ; car le changement de l'un donne l'autre et réciproquement. Le monde est une harmonie de tensions tour à tour tendues et détendues, comme celle de la lyre et de l'arc. »\n\nL'auteur : Héraclite d'Éphèse (vers 540 – vers 470 av. J.-C.), philosophe présocratique grec, d'une famille noble. On l'a surnommé « l'Obscur » à cause de ses écrits énigmatiques. Trois concepts clés : le logos, l'harmonie des contraires et le devenir. Son œuvre nous est parvenue sous forme de fragments.\n\nExplication des mots :\n- « On ne peut pas descendre deux fois dans le même fleuve » : l'écoulement, le changement perpétuel ;\n- substance périssable : réalité qui se détruit dans le temps ;\n- métamorphose : changement de forme ou d'état ;\n- harmonie : union qui naît de la liaison des contraires ;\n- la lyre : instrument de musique à cordes pincées de l'Antiquité ; l'arc : arme dont la corde est tendue.\n\nPosition : pour Héraclite, l'Être se caractérise par l'instabilité et le mouvement. Tout devient.",
      "keyRule": "Héraclite : « On ne peut pas descendre deux fois dans le même fleuve » → l'Être est devenir, mouvement, harmonie des contraires.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l'image du fleuve",
        "statement": "Explique la phrase d'Héraclite : « On ne peut pas descendre deux fois dans le même fleuve. »",
        "methodSteps": [
          "L'eau du fleuve coule sans cesse : la deuxième fois, ce n'est plus la même eau.",
          "Nous-mêmes avons changé entre-temps."
        ],
        "conclusion": "Tout change sans arrêt : l'Être est devenir et mouvement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "L'image du fleuve",
          "stepTheme": "L'image du fleuve",
          "stepBadge": "L'image du fleuve",
          "paragraphText": "« On ne peut pas descendre deux fois dans le même fleuve » traduit l'écoulement, le changement perpétuel.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p02_q1",
            "type": "mcq",
            "prompt": "Héraclite écrit : « On ne peut pas descendre deux fois dans le même fleuve. » Quelle idée cette phrase traduit-elle ?",
            "options": [
              "Le fleuve est dangereux",
              "Tout change sans cesse : l'écoulement, le changement perpétuel",
              "L'eau est éternelle",
              "Il ne faut pas se baigner"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'eau a coulé et nous avons changé : rien ne reste identique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La position d'Héraclite",
          "stepTheme": "La position d'Héraclite",
          "stepBadge": "La position d'Héraclite",
          "paragraphText": "Pour Héraclite, l'Être se caractérise par l'instabilité et le mouvement.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p02_q2",
            "type": "mcq",
            "prompt": "Selon Héraclite d'Éphèse, philosophe présocratique, qu'est-ce qui caractérise l'Être ?",
            "options": [
              "L'immobilité et l'éternité",
              "L'instabilité et le mouvement",
              "Le silence",
              "Le plaisir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la philosophie du devenir."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les trois concepts",
          "stepTheme": "Les trois concepts",
          "stepBadge": "Les trois concepts",
          "paragraphText": "La philosophie d'Héraclite s'articule autour du logos, de l'harmonie des contraires et du devenir.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p02_q3",
            "type": "mcq",
            "prompt": "Autour de quels trois concepts clés s'articule la philosophie d'Héraclite ?",
            "options": [
              "Le logos, l'harmonie des contraires, le devenir",
              "L'Être, le Non-Être, l'immobilité",
              "Le plaisir, la mort, les désirs",
              "L'induction, la démonstration, la sensation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les autres listes correspondent à Parménide, Épicure et Aristote."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'harmonie des contraires",
          "stepTheme": "L'harmonie des contraires",
          "stepBadge": "L'harmonie des contraires",
          "paragraphText": "« Le monde est une harmonie de tensions tour à tour tendues et détendues, comme celle de la lyre et de l'arc. »",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p02_q4",
            "type": "mcq",
            "prompt": "Héraclite écrit : « Le monde est une harmonie de tensions tour à tour tendues et détendues, comme celle de la lyre et de l'arc. » Que signifie ici « harmonie » ?",
            "options": [
              "Une belle musique",
              "L'union qui naît de la liaison des contraires",
              "Le silence complet",
              "L'absence de mouvement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La corde de la lyre ou de l'arc fonctionne grâce à des forces opposées."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les contraires se changent",
          "stepTheme": "Les contraires se changent",
          "stepBadge": "Les contraires se changent",
          "paragraphText": "« Vie et mort, veille et sommeil, jeunesse et vieillesse ; car le changement de l'un donne l'autre et réciproquement. »",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p02_q5",
            "type": "mcq",
            "prompt": "Dans le fragment d'Héraclite « vie et mort, veille et sommeil, jeunesse et vieillesse ; car le changement de l'un donne l'autre et réciproquement », quelle idée est exprimée ?",
            "options": [
              "Les contraires restent séparés pour toujours",
              "Les contraires passent l'un dans l'autre : c'est le devenir",
              "La mort n'existe pas",
              "Le sommeil est inutile"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque état se change en son contraire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "« L'Obscur »",
          "stepTheme": "« L'Obscur »",
          "stepBadge": "« L'Obscur »",
          "paragraphText": "Héraclite d'Éphèse (vers 540 – vers 470 av. J.-C.) est surnommé « l'Obscur » à cause de ses écrits énigmatiques, parvenus en fragments.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p02_q6",
            "type": "mcq",
            "prompt": "Pourquoi le philosophe présocratique Héraclite d'Éphèse a-t-il été surnommé « l'Obscur » ?",
            "options": [
              "Parce qu'il vivait dans une caverne",
              "À cause de la nature énigmatique de ses écrits",
              "Parce qu'il était aveugle",
              "Parce qu'il travaillait la nuit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ses fragments sont courts et difficiles à interpréter."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre",
          "stepTheme": "Ne pas confondre",
          "stepBadge": "Ne pas confondre",
          "paragraphText": "Héraclite (le mouvement) s'oppose à Parménide (l'immobilité). Ils sont contemporains.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p02_q7",
            "type": "mcq",
            "prompt": "Lequel de ces deux présocratiques a soutenu que « on ne peut pas descendre deux fois dans le même fleuve », c'est-à-dire que tout change ?",
            "options": [
              "Parménide",
              "Héraclite",
              "Épicure",
              "Aristote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Parménide soutient au contraire que l'Être est immobile."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p02_q1",
          "type": "mcq",
          "prompt": "Héraclite écrit : « On ne peut pas descendre deux fois dans le même fleuve. » Quelle idée cette phrase traduit-elle ?",
          "options": [
            "Le fleuve est dangereux",
            "Tout change sans cesse : l'écoulement, le changement perpétuel",
            "L'eau est éternelle",
            "Il ne faut pas se baigner"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'eau a coulé et nous avons changé : rien ne reste identique."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p02_q2",
          "type": "mcq",
          "prompt": "Selon Héraclite d'Éphèse, philosophe présocratique, qu'est-ce qui caractérise l'Être ?",
          "options": [
            "L'immobilité et l'éternité",
            "L'instabilité et le mouvement",
            "Le silence",
            "Le plaisir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la philosophie du devenir."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p02_q3",
          "type": "mcq",
          "prompt": "Autour de quels trois concepts clés s'articule la philosophie d'Héraclite ?",
          "options": [
            "Le logos, l'harmonie des contraires, le devenir",
            "L'Être, le Non-Être, l'immobilité",
            "Le plaisir, la mort, les désirs",
            "L'induction, la démonstration, la sensation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les autres listes correspondent à Parménide, Épicure et Aristote."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p02_q4",
          "type": "mcq",
          "prompt": "Héraclite écrit : « Le monde est une harmonie de tensions tour à tour tendues et détendues, comme celle de la lyre et de l'arc. » Que signifie ici « harmonie » ?",
          "options": [
            "Une belle musique",
            "L'union qui naît de la liaison des contraires",
            "Le silence complet",
            "L'absence de mouvement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La corde de la lyre ou de l'arc fonctionne grâce à des forces opposées."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p02_q5",
          "type": "mcq",
          "prompt": "Dans le fragment d'Héraclite « vie et mort, veille et sommeil, jeunesse et vieillesse ; car le changement de l'un donne l'autre et réciproquement », quelle idée est exprimée ?",
          "options": [
            "Les contraires restent séparés pour toujours",
            "Les contraires passent l'un dans l'autre : c'est le devenir",
            "La mort n'existe pas",
            "Le sommeil est inutile"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque état se change en son contraire."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p02_q6",
          "type": "mcq",
          "prompt": "Pourquoi le philosophe présocratique Héraclite d'Éphèse a-t-il été surnommé « l'Obscur » ?",
          "options": [
            "Parce qu'il vivait dans une caverne",
            "À cause de la nature énigmatique de ses écrits",
            "Parce qu'il était aveugle",
            "Parce qu'il travaillait la nuit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ses fragments sont courts et difficiles à interpréter."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p02_q7",
          "type": "mcq",
          "prompt": "Lequel de ces deux présocratiques a soutenu que « on ne peut pas descendre deux fois dans le même fleuve », c'est-à-dire que tout change ?",
          "options": [
            "Parménide",
            "Héraclite",
            "Épicure",
            "Aristote"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Parménide soutient au contraire que l'Être est immobile."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l06_periode_antique_p03",
      "order": 3,
      "title": "Parménide : l'Être est, immobile",
      "summary": "Pour Parménide, l'Être est incréé, impérissable, immobile et éternel.",
      "conceptExplanation": "Texte support (Parménide, De la nature, fragment VIII) :\n« La première [voie] dit que l'Être est, qu'il n'est pas possible qu'il ne soit pas. C'est le chemin de la certitude. Car elle accompagne la vérité. L'autre, c'est : l'Être n'est pas, et nécessairement le Non-Être est. Cette voie est un étroit sentier où l'on ne peut rien apprendre. Car on ne peut saisir par l'esprit le Non-Être (…) c'est la même chose que penser et être. (…) Il nous reste un seul chemin à parcourir. L'Être est. Et il y a une foule de signes que l'Être est incréé, impérissable car seul il est complet, immobile et éternel. »\n\nL'auteur : Parménide d'Élée (né vers 544, mort vers 450 av. J.-C.), contemporain d'Héraclite. Son courant est l'immobilisme. Il est considéré comme le père de l'ontologie éléatique (de la ville d'Élée).\n\nExplication des mots :\n- l'Être : ce qui est, ce qui existe, le réel ;\n- le Non-Être : ce qui n'existe pas ;\n- incréé : qui existe sans avoir été créé ;\n- impérissable : qui ne prend pas fin ;\n- immobile : qui n'est pas en mouvement ;\n- éternel : qui dure toujours.\n\nPosition : pour Parménide, l'Être est incréé, impérissable, immobile et éternel : il ne change pas. Le changement que nous voyons n'est qu'une « opinion trompeuse sur les apparences » (allusion à la pensée d'Héraclite).\n\nDéfinition de l'Être (bilan) : pour Héraclite, l'Être est changeant et mobile ; pour Parménide, il est immobile. En conclusion, l'Être est à la fois l'Un et le Multiple, la permanence et le devenir.",
      "keyRule": "Parménide : « L'Être est, le Non-Être n'est pas » → l'Être est incréé, impérissable, immobile, éternel. Bilan : l'Être est à la fois permanence (Parménide) et devenir (Héraclite).",
      "formulas": [],
      "workedExample": {
        "title": "L'opinion trompeuse",
        "statement": "Parménide dénonce « l'opinion trompeuse sur les apparences », qui croit que tout change. À quelle pensée fait-il allusion ?",
        "methodSteps": [
          "Croire que tout change, c'est la thèse du devenir.",
          "C'est la position d'Héraclite (« on ne peut pas descendre deux fois dans le même fleuve »)."
        ],
        "conclusion": "Il vise la philosophie du mouvement d'Héraclite."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La position de Parménide",
          "stepTheme": "La position de Parménide",
          "stepBadge": "La position de Parménide",
          "paragraphText": "Pour Parménide, l'Être est incréé, impérissable, immobile et éternel : il ne change pas.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p03_q1",
            "type": "mcq",
            "prompt": "Selon Parménide d'Élée, quelles sont les caractéristiques de l'Être ?",
            "options": [
              "Changeant et mobile",
              "Incréé, impérissable, immobile et éternel",
              "Relatif à chaque individu",
              "Inconnaissable"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'immobilisme, opposé au devenir d'Héraclite."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les deux voies",
          "stepTheme": "Les deux voies",
          "stepBadge": "Les deux voies",
          "paragraphText": "Première voie : « l'Être est » (chemin de la certitude). Seconde voie : « l'Être n'est pas » (étroit sentier où l'on ne peut rien apprendre).",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p03_q2",
            "type": "mcq",
            "prompt": "Parménide distingue deux voies : « l'Être est » et « l'Être n'est pas, et nécessairement le Non-Être est ». Laquelle est, selon lui, « le chemin de la certitude » ?",
            "options": [
              "« L'Être n'est pas »",
              "« L'Être est »",
              "Les deux",
              "Aucune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le Non-Être ne peut être ni pensé ni dit : seule la voie « l'Être est » mène à la vérité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Incréé, impérissable",
          "stepTheme": "Incréé, impérissable",
          "stepBadge": "Incréé, impérissable",
          "paragraphText": "Incréé : qui existe sans avoir été créé. Impérissable : qui ne prend pas fin.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p03_q3",
            "type": "mcq",
            "prompt": "Parménide écrit que « l'Être est incréé, impérissable ». Que signifie « incréé » ?",
            "options": [
              "Qui a été fabriqué",
              "Qui existe sans avoir été créé",
              "Qui va disparaître",
              "Qui est invisible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'Être n'a pas de commencement : il n'a pas été créé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Penser et être",
          "stepTheme": "Penser et être",
          "stepBadge": "Penser et être",
          "paragraphText": "« On ne peut saisir par l'esprit le Non-Être (…) c'est la même chose que penser et être. »",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p03_q4",
            "type": "mcq",
            "prompt": "Parménide écrit : « On ne peut saisir par l'esprit le Non-Être (…) c'est la même chose que penser et être. » Que veut-il dire ?",
            "options": [
              "Que le Non-Être est facile à penser",
              "Qu'on ne peut penser que ce qui est ; le Non-Être est impensable",
              "Que penser est inutile",
              "Que tout change"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Penser, c'est toujours penser quelque chose qui est."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Contre l'opinion",
          "stepTheme": "Contre l'opinion",
          "stepBadge": "Contre l'opinion",
          "paragraphText": "Parménide distingue la vérité de « l'opinion trompeuse sur les apparences », qui croit que tout change.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p03_q5",
            "type": "mcq",
            "prompt": "Parménide critique « l'opinion trompeuse sur les apparences », qui croit que tout change. À quel penseur fait-il allusion ?",
            "options": [
              "Platon",
              "Héraclite",
              "Épicure",
              "Aristote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est Héraclite qui soutient que tout est en mouvement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'immobilisme",
          "stepTheme": "L'immobilisme",
          "stepBadge": "L'immobilisme",
          "paragraphText": "Le courant de Parménide est l'immobilisme ; il est le père de l'ontologie éléatique.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p03_q6",
            "type": "mcq",
            "prompt": "Quel est le courant philosophique de Parménide (vers 544 – vers 450 av. J.-C.), qui affirme que l'Être ne change pas ?",
            "options": [
              "Le scepticisme",
              "L'immobilisme",
              "Le stoïcisme",
              "L'épicurisme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'Être est immobile, d'où le nom d'immobilisme."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Le bilan sur l'Être",
          "stepTheme": "Le bilan sur l'Être",
          "stepBadge": "Le bilan sur l'Être",
          "paragraphText": "Pour Héraclite, l'Être change ; pour Parménide, il est immobile. Conclusion : l'Être est à la fois l'Un et le Multiple, la permanence et le devenir.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p03_q7",
            "type": "mcq",
            "prompt": "Pour Héraclite, l'Être est changeant ; pour Parménide, l'Être est immobile. Quelle conclusion le cours tire-t-il sur la définition de l'Être ?",
            "options": [
              "Seul Héraclite a raison",
              "Seul Parménide a raison",
              "L'Être est à la fois l'Un et le Multiple, la permanence et le devenir",
              "L'Être n'existe pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux thèses se complètent."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p03_q1",
          "type": "mcq",
          "prompt": "Selon Parménide d'Élée, quelles sont les caractéristiques de l'Être ?",
          "options": [
            "Changeant et mobile",
            "Incréé, impérissable, immobile et éternel",
            "Relatif à chaque individu",
            "Inconnaissable"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'immobilisme, opposé au devenir d'Héraclite."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p03_q2",
          "type": "mcq",
          "prompt": "Parménide distingue deux voies : « l'Être est » et « l'Être n'est pas, et nécessairement le Non-Être est ». Laquelle est, selon lui, « le chemin de la certitude » ?",
          "options": [
            "« L'Être n'est pas »",
            "« L'Être est »",
            "Les deux",
            "Aucune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le Non-Être ne peut être ni pensé ni dit : seule la voie « l'Être est » mène à la vérité."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p03_q3",
          "type": "mcq",
          "prompt": "Parménide écrit que « l'Être est incréé, impérissable ». Que signifie « incréé » ?",
          "options": [
            "Qui a été fabriqué",
            "Qui existe sans avoir été créé",
            "Qui va disparaître",
            "Qui est invisible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'Être n'a pas de commencement : il n'a pas été créé."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p03_q4",
          "type": "mcq",
          "prompt": "Parménide écrit : « On ne peut saisir par l'esprit le Non-Être (…) c'est la même chose que penser et être. » Que veut-il dire ?",
          "options": [
            "Que le Non-Être est facile à penser",
            "Qu'on ne peut penser que ce qui est ; le Non-Être est impensable",
            "Que penser est inutile",
            "Que tout change"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Penser, c'est toujours penser quelque chose qui est."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p03_q5",
          "type": "mcq",
          "prompt": "Parménide critique « l'opinion trompeuse sur les apparences », qui croit que tout change. À quel penseur fait-il allusion ?",
          "options": [
            "Platon",
            "Héraclite",
            "Épicure",
            "Aristote"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est Héraclite qui soutient que tout est en mouvement."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p03_q6",
          "type": "mcq",
          "prompt": "Quel est le courant philosophique de Parménide (vers 544 – vers 450 av. J.-C.), qui affirme que l'Être ne change pas ?",
          "options": [
            "Le scepticisme",
            "L'immobilisme",
            "Le stoïcisme",
            "L'épicurisme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'Être est immobile, d'où le nom d'immobilisme."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p03_q7",
          "type": "mcq",
          "prompt": "Pour Héraclite, l'Être est changeant ; pour Parménide, l'Être est immobile. Quelle conclusion le cours tire-t-il sur la définition de l'Être ?",
          "options": [
            "Seul Héraclite a raison",
            "Seul Parménide a raison",
            "L'Être est à la fois l'Un et le Multiple, la permanence et le devenir",
            "L'Être n'existe pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux thèses se complètent."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l06_periode_antique_p04",
      "order": 4,
      "title": "Les sophistes et Calliclès",
      "summary": "La vérité devient relative ; Calliclès oppose la nature à la loi.",
      "conceptExplanation": "La période socratique regroupe les penseurs contemporains de Socrate : les sophistes, Socrate lui-même, Platon et Aristote. Leur grande question est celle de la VÉRITÉ.\n\nLes sophistes : maîtres de la rhétorique, professeurs d'éloquence, du discours flatteur et séduisant. Ce sont des « marchands du savoir » : ils se font payer pour enseigner l'art de soutenir une thèse et son contraire. Ils font de l'homme l'unique source de toutes les valeurs : la vérité devient relative à chaque individu. Exemples : Protagoras, Gorgias, Antiphon.\n\nCalliclès : personnage du Gorgias de Platon. On ne sait pas s'il a réellement existé ; beaucoup pensent que Platon l'a créé pour exprimer les idées de sophistes ou de politiciens de son temps.\n\nTexte 1 (Platon, Gorgias) : « Le plus souvent, la nature et la loi sont des termes qui sont en contradiction l'un avec l'autre. (…) Mon avis est que les lois sont établies par les faibles et par ceux qui forment la multitude (…). C'est la nature elle-même qui nous prouve que, en bonne justice, le supérieur doit l'emporter sur l'inférieur et le plus capable sur le moins capable. »\n\nTexte 2 (Platon, Gorgias) : « Pour bien vivre, il faut laisser prendre à ses passions tout l'accroissement possible, au lieu de les réprimer (…). Le luxe, l'incontinence et la liberté, quand ils sont soutenus par la force, constituent la vertu et le bonheur. »\n\nMots : nature = ordre des choses ; loi = règles sociales ; intempérance = absence de mesure ; tempérance = modération ; vertu = valeur morale.\n\nPosition de Calliclès : conformément aux lois de la nature, l'homme doit, par tous les moyens, donner libre cours à ses passions en foulant aux pieds la morale établie, qui est en réalité celle des faibles et des incapables.",
      "keyRule": "Sophistes : la vérité est relative à chacun. Calliclès : la loi est faite par les faibles ; selon la nature, le plus fort doit l'emporter et satisfaire toutes ses passions.",
      "formulas": [],
      "workedExample": {
        "title": "Nature contre loi",
        "statement": "Calliclès dit : « Selon la nature, ce qui est le plus honteux, c'est subir l'injustice ; selon la loi, au contraire, c'est de la commettre. » Explique l'opposition.",
        "methodSteps": [
          "La loi (règle sociale) condamne celui qui commet l'injustice.",
          "La nature, selon Calliclès, méprise celui qui la subit : le faible."
        ],
        "conclusion": "Pour Calliclès, la loi protège les faibles alors que la nature donne raison aux forts."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les sophistes",
          "stepTheme": "Les sophistes",
          "stepBadge": "Les sophistes",
          "paragraphText": "Les sophistes sont des maîtres de la rhétorique, professeurs d'éloquence, qui vendent leur savoir.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p04_q1",
            "type": "mcq",
            "prompt": "Dans l'Antiquité grecque, qui sont les sophistes, contemporains de Socrate ?",
            "options": [
              "Des prêtres",
              "Des maîtres de la rhétorique qui vendent l'art de bien parler",
              "Des soldats",
              "Des disciples de Parménide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont des « marchands du savoir », professeurs d'éloquence."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une vérité relative",
          "stepTheme": "Une vérité relative",
          "stepBadge": "Une vérité relative",
          "paragraphText": "Pour les sophistes, l'homme est l'unique source des valeurs : la vérité devient relative à chaque individu.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p04_q2",
            "type": "mcq",
            "prompt": "Les sophistes font de l'homme l'unique source de toutes les valeurs. Quelle conséquence cela a-t-il pour la vérité ?",
            "options": [
              "La vérité devient universelle",
              "La vérité devient relative à chaque individu",
              "La vérité vient des dieux",
              "La vérité est dans l'Être immobile"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chacun a « sa » vérité : c'est le relativisme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Thèse et contraire",
          "stepTheme": "Thèse et contraire",
          "stepBadge": "Thèse et contraire",
          "paragraphText": "Les sophistes enseignent l'art de soutenir une thèse et son contraire.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p04_q3",
            "type": "mcq",
            "prompt": "Quel art les sophistes (Protagoras, Gorgias) enseignent-ils à leurs élèves contre de l'argent ?",
            "options": [
              "L'art de soutenir une thèse et son contraire",
              "L'art de soigner",
              "L'art de la guerre",
              "L'art de suspendre son jugement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour eux, ce qui compte, c'est de convaincre, pas de dire vrai."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La loi des faibles",
          "stepTheme": "La loi des faibles",
          "stepBadge": "La loi des faibles",
          "paragraphText": "Calliclès : « les lois sont établies par les faibles et par ceux qui forment la multitude ».",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p04_q4",
            "type": "mcq",
            "prompt": "Dans le Gorgias de Platon, Calliclès affirme : « les lois sont établies par les faibles et par ceux qui forment la multitude ». Selon lui, dans quel but ?",
            "options": [
              "Pour protéger les forts",
              "Dans leur propre intérêt, pour empêcher les forts de l'emporter",
              "Pour honorer les dieux",
              "Pour rechercher la vérité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les faibles font des lois « en vue d'eux-mêmes et à leur profit »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le droit du plus fort",
          "stepTheme": "Le droit du plus fort",
          "stepBadge": "Le droit du plus fort",
          "paragraphText": "Calliclès : « en bonne justice, le supérieur doit l'emporter sur l'inférieur et le plus capable sur le moins capable ».",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p04_q5",
            "type": "mcq",
            "prompt": "Calliclès dit : « c'est la nature elle-même qui nous prouve que, en bonne justice, le supérieur doit l'emporter sur l'inférieur ». Quelle conception de la justice défend-il ?",
            "options": [
              "L'égalité de tous",
              "Le droit du plus fort, fondé sur la nature",
              "La justice divine",
              "La suspension du jugement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour lui, la vraie justice naturelle, c'est la domination du plus fort."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les passions sans frein",
          "stepTheme": "Les passions sans frein",
          "stepBadge": "Les passions sans frein",
          "paragraphText": "« Pour bien vivre, il faut laisser prendre à ses passions tout l'accroissement possible, au lieu de les réprimer. »",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p04_q6",
            "type": "mcq",
            "prompt": "Calliclès affirme : « pour bien vivre, il faut laisser prendre à ses passions tout l'accroissement possible, au lieu de les réprimer ». Quelle est sa position sur le bonheur ?",
            "options": [
              "Le bonheur est dans la modération",
              "Le bonheur consiste à satisfaire toutes ses passions, en méprisant la morale des faibles",
              "Le bonheur vient de l'absence de désirs",
              "Le bonheur est dans la contemplation des Idées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour lui, la tempérance est une invention des faibles."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Calliclès a-t-il existé ?",
          "stepTheme": "Calliclès a-t-il existé ?",
          "stepBadge": "Calliclès a-t-il existé ?",
          "paragraphText": "Calliclès n'est connu que par le Gorgias de Platon : son existence historique est incertaine.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p04_q7",
            "type": "mcq",
            "prompt": "Que sait-on de Calliclès, qui défend le droit du plus fort ?",
            "options": [
              "C'est un roi perse",
              "Il n'est connu que comme personnage du Gorgias de Platon ; son existence historique est incertaine",
              "C'est le maître de Socrate",
              "Il a fondé le Lycée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Platon lui prête les idées de certains sophistes et politiciens."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p04_q1",
          "type": "mcq",
          "prompt": "Dans l'Antiquité grecque, qui sont les sophistes, contemporains de Socrate ?",
          "options": [
            "Des prêtres",
            "Des maîtres de la rhétorique qui vendent l'art de bien parler",
            "Des soldats",
            "Des disciples de Parménide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont des « marchands du savoir », professeurs d'éloquence."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p04_q2",
          "type": "mcq",
          "prompt": "Les sophistes font de l'homme l'unique source de toutes les valeurs. Quelle conséquence cela a-t-il pour la vérité ?",
          "options": [
            "La vérité devient universelle",
            "La vérité devient relative à chaque individu",
            "La vérité vient des dieux",
            "La vérité est dans l'Être immobile"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chacun a « sa » vérité : c'est le relativisme."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p04_q3",
          "type": "mcq",
          "prompt": "Quel art les sophistes (Protagoras, Gorgias) enseignent-ils à leurs élèves contre de l'argent ?",
          "options": [
            "L'art de soutenir une thèse et son contraire",
            "L'art de soigner",
            "L'art de la guerre",
            "L'art de suspendre son jugement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour eux, ce qui compte, c'est de convaincre, pas de dire vrai."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p04_q4",
          "type": "mcq",
          "prompt": "Dans le Gorgias de Platon, Calliclès affirme : « les lois sont établies par les faibles et par ceux qui forment la multitude ». Selon lui, dans quel but ?",
          "options": [
            "Pour protéger les forts",
            "Dans leur propre intérêt, pour empêcher les forts de l'emporter",
            "Pour honorer les dieux",
            "Pour rechercher la vérité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les faibles font des lois « en vue d'eux-mêmes et à leur profit »."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p04_q5",
          "type": "mcq",
          "prompt": "Calliclès dit : « c'est la nature elle-même qui nous prouve que, en bonne justice, le supérieur doit l'emporter sur l'inférieur ». Quelle conception de la justice défend-il ?",
          "options": [
            "L'égalité de tous",
            "Le droit du plus fort, fondé sur la nature",
            "La justice divine",
            "La suspension du jugement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour lui, la vraie justice naturelle, c'est la domination du plus fort."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p04_q6",
          "type": "mcq",
          "prompt": "Calliclès affirme : « pour bien vivre, il faut laisser prendre à ses passions tout l'accroissement possible, au lieu de les réprimer ». Quelle est sa position sur le bonheur ?",
          "options": [
            "Le bonheur est dans la modération",
            "Le bonheur consiste à satisfaire toutes ses passions, en méprisant la morale des faibles",
            "Le bonheur vient de l'absence de désirs",
            "Le bonheur est dans la contemplation des Idées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour lui, la tempérance est une invention des faibles."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p04_q7",
          "type": "mcq",
          "prompt": "Que sait-on de Calliclès, qui défend le droit du plus fort ?",
          "options": [
            "C'est un roi perse",
            "Il n'est connu que comme personnage du Gorgias de Platon ; son existence historique est incertaine",
            "C'est le maître de Socrate",
            "Il a fondé le Lycée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Platon lui prête les idées de certains sophistes et politiciens."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l06_periode_antique_p05",
      "order": 5,
      "title": "Socrate et Platon : l'allégorie de la caverne",
      "summary": "Pour Platon, la vérité n'est pas dans les sensations mais dans les Idées.",
      "conceptExplanation": "Socrate (470-399 av. J.-C.) : sa philosophie repose sur la connaissance de soi : « Connais-toi toi-même ». Elle est surtout une critique radicale des sophistes. Il n'a rien écrit ; il est condamné à boire la ciguë.\n\nPlaton (427-347 av. J.-C.) : citoyen athénien d'une famille noble. À vingt ans, il rencontre Socrate et reste son élève pendant huit ans. Après la condamnation injuste de son maître, il voyage, puis fonde à Athènes son école, l'Académie. Dans ses dialogues, il fait parler Socrate. Œuvres : Apologie de Socrate, Protagoras, Gorgias, Ménon, Cratyle, Banquet, République, Lois.\n\nTexte (La République, livre VII) : « Figure-toi des hommes dans une demeure souterraine, en forme de caverne (…) ; ces hommes sont là depuis leur enfance, les jambes et le cou enchaînés, de sorte qu'ils ne peuvent bouger ni voir ailleurs que devant eux (…) ; la lumière leur vient d'un feu allumé sur une hauteur, au loin derrière eux. (…) De tels hommes n'attribueront de réalité qu'aux ombres des objets fabriqués. »\nSuite : il faut comparer le monde visible à la prison, et la montée hors de la caverne à « l'ascension de l'âme vers le lieu intelligible ». Dans le monde intelligible, l'idée du Bien est perçue la dernière et avec peine ; elle est la cause de tout ce qui est droit et beau.\n\nLecture de l'allégorie :\n- la caverne = le monde sensible (ce que nous voyons) ;\n- les ombres = les apparences, les opinions ;\n- la sortie vers le soleil = l'éducation philosophique, l'ascension de l'âme ;\n- le soleil = l'idée du Bien.\n\nPosition : la vérité ne relève pas des sensations ; elle est intelligible, elle relève de l'Idée. Grâce à la dialectique et par un effort (une ascèse), l'homme accède aux essences, aux principes des choses.",
      "keyRule": "Platon : le sensible est une ombre ; la vérité est dans les Idées (monde intelligible), atteinte par la dialectique.",
      "formulas": [],
      "workedExample": {
        "title": "Lire l'allégorie",
        "statement": "Dans l'allégorie de la caverne, que représentent les prisonniers qui prennent les ombres pour des objets réels ?",
        "methodSteps": [
          "Ils ne voient que des ombres projetées sur la paroi.",
          "Platon dit : « Ils nous ressemblent »."
        ],
        "conclusion": "Ce sont les hommes ordinaires, qui prennent les apparences sensibles pour la vérité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Socrate",
          "stepTheme": "Socrate",
          "stepBadge": "Socrate",
          "paragraphText": "La philosophie de Socrate (470-399 av. J.-C.) repose sur la connaissance de soi : « Connais-toi toi-même ».",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p05_q1",
            "type": "mcq",
            "prompt": "Quelle formule résume la philosophie de Socrate (470-399 av. J.-C.), maître de Platon ?",
            "options": [
              "« Connais-toi toi-même »",
              "« On ne peut pas descendre deux fois dans le même fleuve »",
              "« La mort n'est rien pour nous »",
              "« Il n'y a de science que du général »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les autres formules sont d'Héraclite, d'Épicure et d'Aristote."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Platon, élève de Socrate",
          "stepTheme": "Platon, élève de Socrate",
          "stepBadge": "Platon, élève de Socrate",
          "paragraphText": "Platon (427-347 av. J.-C.) fonde à Athènes son école : l'Académie.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p05_q2",
            "type": "mcq",
            "prompt": "Comment s'appelle l'école que Platon (427-347 av. J.-C.) fonde à Athènes, vers quarante ans ?",
            "options": [
              "Le Lycée",
              "L'Académie",
              "Le Jardin",
              "Le Portique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le Lycée est l'école d'Aristote ; le Jardin, celle d'Épicure ; le Portique, celle des stoïciens."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les prisonniers",
          "stepTheme": "Les prisonniers",
          "stepBadge": "Les prisonniers",
          "paragraphText": "Enchaînés depuis l'enfance, les prisonniers ne voient que les ombres projetées sur la paroi.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p05_q3",
            "type": "mcq",
            "prompt": "Dans l'allégorie de la caverne (Platon, La République, livre VII), des prisonniers enchaînés depuis l'enfance ne voient que des ombres sur la paroi. Que prennent-ils pour la réalité ?",
            "options": [
              "Le soleil",
              "Les ombres des objets",
              "Le feu",
              "Les Idées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« De tels hommes n'attribueront de réalité qu'aux ombres des objets fabriqués. »"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le sens de la caverne",
          "stepTheme": "Le sens de la caverne",
          "stepBadge": "Le sens de la caverne",
          "paragraphText": "La caverne représente le monde sensible ; la sortie vers la lumière, l'ascension de l'âme vers le monde intelligible.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p05_q4",
            "type": "mcq",
            "prompt": "Dans l'allégorie de la caverne de Platon, que représente la montée des prisonniers hors de la caverne, vers la lumière du soleil ?",
            "options": [
              "Un voyage en Égypte",
              "L'ascension de l'âme vers le monde intelligible",
              "La mort du corps",
              "Le retour aux sensations"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Platon le dit lui-même : c'est « l'ascension de l'âme vers le lieu intelligible »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'idée du Bien",
          "stepTheme": "L'idée du Bien",
          "stepBadge": "L'idée du Bien",
          "paragraphText": "Dans le monde intelligible, l'idée du Bien est perçue la dernière et avec peine ; elle est la cause de tout ce qui est droit et beau.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p05_q5",
            "type": "mcq",
            "prompt": "Dans l'allégorie de la caverne, le soleil éclaire tout le monde extérieur. Que représente-t-il dans le monde intelligible, selon Platon ?",
            "options": [
              "L'idée du Bien",
              "Le feu de la caverne",
              "Le corps",
              "L'opinion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'idée du Bien dispense la vérité et l'intelligence, comme le soleil la lumière."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La position de Platon",
          "stepTheme": "La position de Platon",
          "stepBadge": "La position de Platon",
          "paragraphText": "Pour Platon, la vérité ne relève pas des sensations ; elle est intelligible, elle relève de l'Idée, atteinte par la dialectique.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p05_q6",
            "type": "mcq",
            "prompt": "Selon Platon, auteur de l'allégorie de la caverne, où se trouve la vérité ?",
            "options": [
              "Dans les sensations",
              "Dans les Idées, accessibles par la dialectique",
              "Dans l'opinion de chacun",
              "Dans le plaisir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sensible n'est qu'une ombre ; le vrai est intelligible."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Platon contre les sophistes",
          "stepTheme": "Platon contre les sophistes",
          "stepBadge": "Platon contre les sophistes",
          "paragraphText": "Socrate et Platon critiquent les sophistes : pour eux, la vérité n'est pas relative.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p05_q7",
            "type": "mcq",
            "prompt": "Les sophistes disent que la vérité est relative à chacun. Que répondent Socrate et Platon ?",
            "options": [
              "Ils sont d'accord",
              "La vérité est une, universelle, et s'atteint par la raison",
              "La vérité n'existe pas",
              "La vérité est dans le plaisir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La philosophie de Socrate est une critique radicale des sophistes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p05_q1",
          "type": "mcq",
          "prompt": "Quelle formule résume la philosophie de Socrate (470-399 av. J.-C.), maître de Platon ?",
          "options": [
            "« Connais-toi toi-même »",
            "« On ne peut pas descendre deux fois dans le même fleuve »",
            "« La mort n'est rien pour nous »",
            "« Il n'y a de science que du général »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les autres formules sont d'Héraclite, d'Épicure et d'Aristote."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p05_q2",
          "type": "mcq",
          "prompt": "Comment s'appelle l'école que Platon (427-347 av. J.-C.) fonde à Athènes, vers quarante ans ?",
          "options": [
            "Le Lycée",
            "L'Académie",
            "Le Jardin",
            "Le Portique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le Lycée est l'école d'Aristote ; le Jardin, celle d'Épicure ; le Portique, celle des stoïciens."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p05_q3",
          "type": "mcq",
          "prompt": "Dans l'allégorie de la caverne (Platon, La République, livre VII), des prisonniers enchaînés depuis l'enfance ne voient que des ombres sur la paroi. Que prennent-ils pour la réalité ?",
          "options": [
            "Le soleil",
            "Les ombres des objets",
            "Le feu",
            "Les Idées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« De tels hommes n'attribueront de réalité qu'aux ombres des objets fabriqués. »"
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p05_q4",
          "type": "mcq",
          "prompt": "Dans l'allégorie de la caverne de Platon, que représente la montée des prisonniers hors de la caverne, vers la lumière du soleil ?",
          "options": [
            "Un voyage en Égypte",
            "L'ascension de l'âme vers le monde intelligible",
            "La mort du corps",
            "Le retour aux sensations"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Platon le dit lui-même : c'est « l'ascension de l'âme vers le lieu intelligible »."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p05_q5",
          "type": "mcq",
          "prompt": "Dans l'allégorie de la caverne, le soleil éclaire tout le monde extérieur. Que représente-t-il dans le monde intelligible, selon Platon ?",
          "options": [
            "L'idée du Bien",
            "Le feu de la caverne",
            "Le corps",
            "L'opinion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'idée du Bien dispense la vérité et l'intelligence, comme le soleil la lumière."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p05_q6",
          "type": "mcq",
          "prompt": "Selon Platon, auteur de l'allégorie de la caverne, où se trouve la vérité ?",
          "options": [
            "Dans les sensations",
            "Dans les Idées, accessibles par la dialectique",
            "Dans l'opinion de chacun",
            "Dans le plaisir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sensible n'est qu'une ombre ; le vrai est intelligible."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p05_q7",
          "type": "mcq",
          "prompt": "Les sophistes disent que la vérité est relative à chacun. Que répondent Socrate et Platon ?",
          "options": [
            "Ils sont d'accord",
            "La vérité est une, universelle, et s'atteint par la raison",
            "La vérité n'existe pas",
            "La vérité est dans le plaisir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La philosophie de Socrate est une critique radicale des sophistes."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l06_periode_antique_p06",
      "order": 6,
      "title": "Aristote : il n'y a de science que du général",
      "summary": "La science part des sensations, par induction, mais porte sur l'universel.",
      "conceptExplanation": "L'auteur : Aristote, né en 384 av. J.-C. à Stagire (Macédoine). À 18 ans, il suit l'enseignement de Platon ; il en est l'élève et l'ami, mais pas le disciple : « Platon est mon ami, mais je préfère la vérité ». Il rejette la théorie des Idées de Platon pour une philosophie naturaliste, réaliste. Il fonde à Athènes son école : le Lycée. Précepteur d'Alexandre le Grand. Œuvres : la Logique (Organon), la Métaphysique, la Politique, la Rhétorique, la Poétique, l'Éthique à Nicomaque. Il meurt en 322 av. J.-C.\n\nTexte 1 (Seconds Analytiques) : « Si un sens vient à faire défaut, nécessairement une science disparaît (…). Nous n'apprenons que par induction ou par démonstration. Or la démonstration se fait à partir de principes universels, et l'induction, de cas particuliers. (…) Induire est impossible pour qui n'a pas la sensation. »\n\nTexte 2 (Seconds Analytiques) : « Il n'est pas possible non plus d'acquérir par la sensation une connaissance scientifique. (…) La sensation porte nécessairement sur l'individuel, tandis que la science consiste dans la connaissance universelle. (…) Le grand mérite de l'universel, c'est qu'il fait connaître la cause. »\nExemple d'Aristote : sur la Lune, nous VERRIONS l'éclipse, mais nous ne saurions pas sa CAUSE ; c'est l'observation répétée qui permet d'atteindre l'universel.\n\nMots : induction = passer des cas particuliers à une règle générale ; démonstration = déduire à partir de principes universels ; universel = ce qui vaut toujours et partout.\n\nPosition : « Il n'y a de science que du général ». La science, connaissance sûre et certaine, repose sur la définition et la démonstration.\n\nBilan sur la vérité : les doctrines de Platon et d'Aristote semblent opposées, mais poursuivent le même but. Pour eux, comme pour Socrate, la vérité n'est pas multiple : elle est universelle et absolue.",
      "keyRule": "Aristote : la sensation donne le particulier ; l'induction mène à l'universel ; la science (définition + démonstration) porte sur le général et fait connaître la cause.",
      "formulas": [],
      "workedExample": {
        "title": "L'éclipse vue de la Lune",
        "statement": "Aristote écrit que, sur la Lune, nous verrions la Terre cacher le Soleil sans connaître la cause de l'éclipse. Que montre cet exemple ?",
        "methodSteps": [
          "La sensation montre qu'il y a une éclipse, ici et maintenant.",
          "Mais la cause est universelle : elle ne se voit pas, elle se démontre."
        ],
        "conclusion": "La sensation ne suffit pas : la science porte sur l'universel et la cause."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Aristote et Platon",
          "stepTheme": "Aristote et Platon",
          "stepBadge": "Aristote et Platon",
          "paragraphText": "Aristote, élève de Platon, dit : « Platon est mon ami, mais je préfère la vérité ».",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p06_q1",
            "type": "mcq",
            "prompt": "Aristote (384-322 av. J.-C.) a dit : « Platon est mon ami, mais je préfère la vérité ». Que signifie cette phrase ?",
            "options": [
              "Qu'il déteste Platon",
              "Qu'il reste l'ami de Platon mais rejette sa théorie des Idées quand elle lui paraît fausse",
              "Qu'il copie Platon",
              "Que Platon est un sophiste"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il est l'élève et l'ami de Platon, mais pas son disciple."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le Lycée",
          "stepTheme": "Le Lycée",
          "stepBadge": "Le Lycée",
          "paragraphText": "Aristote fonde à Athènes son école : le Lycée. Il fut le précepteur d'Alexandre le Grand.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p06_q2",
            "type": "mcq",
            "prompt": "Quelle école Aristote, précepteur d'Alexandre le Grand, fonde-t-il à Athènes ?",
            "options": [
              "L'Académie",
              "Le Lycée",
              "Le Jardin",
              "L'école d'Élée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le mot « lycée » vient de cette école."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Induction et démonstration",
          "stepTheme": "Induction et démonstration",
          "stepBadge": "Induction et démonstration",
          "paragraphText": "« Nous n'apprenons que par induction ou par démonstration. » L'induction part des cas particuliers ; la démonstration part de principes universels.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p06_q3",
            "type": "mcq",
            "prompt": "Aristote écrit : « Nous n'apprenons que par induction ou par démonstration. » Qu'est-ce que l'induction ?",
            "options": [
              "Déduire à partir d'un principe universel",
              "Passer des cas particuliers à une règle générale",
              "Suspendre son jugement",
              "Contempler les Idées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La démonstration fait l'inverse : elle part de l'universel."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rôle des sens",
          "stepTheme": "Le rôle des sens",
          "stepBadge": "Le rôle des sens",
          "paragraphText": "« Si un sens vient à faire défaut, nécessairement une science disparaît » : sans sensation, pas d'induction.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p06_q4",
            "type": "mcq",
            "prompt": "Aristote écrit : « si un sens vient à faire défaut, nécessairement une science disparaît ». Pourquoi ?",
            "options": [
              "Parce que la science vient des dieux",
              "Parce que l'induction, qui part des cas particuliers, est impossible sans la sensation",
              "Parce que les sens sont inutiles",
              "Parce que la vérité est relative"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Aristote, toute connaissance commence par les sens."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'éclipse",
          "stepTheme": "L'éclipse",
          "stepBadge": "L'éclipse",
          "paragraphText": "Sur la Lune, nous percevrions l'éclipse, mais pas sa cause : la sensation porte sur l'individuel, la science sur l'universel.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p06_q5",
            "type": "mcq",
            "prompt": "Aristote dit que, sur la Lune, nous verrions l'éclipse sans en connaître la cause. Que montre cet exemple ?",
            "options": [
              "Que la Lune est trop loin",
              "Que la sensation seule ne donne pas la science : il faut l'universel, qui fait connaître la cause",
              "Que les éclipses n'existent pas",
              "Que la vérité est relative"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On perçoit le fait ; on démontre la cause."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La position d'Aristote",
          "stepTheme": "La position d'Aristote",
          "stepBadge": "La position d'Aristote",
          "paragraphText": "Pour Aristote, « il n'y a de science que du général » ; la science repose sur la définition et la démonstration.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p06_q6",
            "type": "mcq",
            "prompt": "Quelle formule résume la position d'Aristote, auteur des Seconds Analytiques, sur la science ?",
            "options": [
              "« Il n'y a de science que du général »",
              "« Connais-toi toi-même »",
              "« Tout est relatif »",
              "« Cela ne me regarde pas »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La science porte sur l'universel, ce qui vaut toujours et partout."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Le bilan sur la vérité",
          "stepTheme": "Le bilan sur la vérité",
          "stepBadge": "Le bilan sur la vérité",
          "paragraphText": "Platon et Aristote semblent opposés mais poursuivent le même but : pour eux, comme pour Socrate, la vérité est universelle et absolue.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p06_q7",
            "type": "mcq",
            "prompt": "Platon cherche la vérité dans les Idées, Aristote part des sensations. Sur quel point sont-ils d'accord avec Socrate, contre les sophistes ?",
            "options": [
              "La vérité est relative à chacun",
              "La vérité est universelle et absolue",
              "La vérité n'existe pas",
              "La vérité est dans le plaisir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Leurs méthodes diffèrent, mais le but est le même : une vérité unique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p06_q1",
          "type": "mcq",
          "prompt": "Aristote (384-322 av. J.-C.) a dit : « Platon est mon ami, mais je préfère la vérité ». Que signifie cette phrase ?",
          "options": [
            "Qu'il déteste Platon",
            "Qu'il reste l'ami de Platon mais rejette sa théorie des Idées quand elle lui paraît fausse",
            "Qu'il copie Platon",
            "Que Platon est un sophiste"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il est l'élève et l'ami de Platon, mais pas son disciple."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p06_q2",
          "type": "mcq",
          "prompt": "Quelle école Aristote, précepteur d'Alexandre le Grand, fonde-t-il à Athènes ?",
          "options": [
            "L'Académie",
            "Le Lycée",
            "Le Jardin",
            "L'école d'Élée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le mot « lycée » vient de cette école."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p06_q3",
          "type": "mcq",
          "prompt": "Aristote écrit : « Nous n'apprenons que par induction ou par démonstration. » Qu'est-ce que l'induction ?",
          "options": [
            "Déduire à partir d'un principe universel",
            "Passer des cas particuliers à une règle générale",
            "Suspendre son jugement",
            "Contempler les Idées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La démonstration fait l'inverse : elle part de l'universel."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p06_q4",
          "type": "mcq",
          "prompt": "Aristote écrit : « si un sens vient à faire défaut, nécessairement une science disparaît ». Pourquoi ?",
          "options": [
            "Parce que la science vient des dieux",
            "Parce que l'induction, qui part des cas particuliers, est impossible sans la sensation",
            "Parce que les sens sont inutiles",
            "Parce que la vérité est relative"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Aristote, toute connaissance commence par les sens."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p06_q5",
          "type": "mcq",
          "prompt": "Aristote dit que, sur la Lune, nous verrions l'éclipse sans en connaître la cause. Que montre cet exemple ?",
          "options": [
            "Que la Lune est trop loin",
            "Que la sensation seule ne donne pas la science : il faut l'universel, qui fait connaître la cause",
            "Que les éclipses n'existent pas",
            "Que la vérité est relative"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On perçoit le fait ; on démontre la cause."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p06_q6",
          "type": "mcq",
          "prompt": "Quelle formule résume la position d'Aristote, auteur des Seconds Analytiques, sur la science ?",
          "options": [
            "« Il n'y a de science que du général »",
            "« Connais-toi toi-même »",
            "« Tout est relatif »",
            "« Cela ne me regarde pas »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La science porte sur l'universel, ce qui vaut toujours et partout."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p06_q7",
          "type": "mcq",
          "prompt": "Platon cherche la vérité dans les Idées, Aristote part des sensations. Sur quel point sont-ils d'accord avec Socrate, contre les sophistes ?",
          "options": [
            "La vérité est relative à chacun",
            "La vérité est universelle et absolue",
            "La vérité n'existe pas",
            "La vérité est dans le plaisir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Leurs méthodes diffèrent, mais le but est le même : une vérité unique."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l06_periode_antique_p07",
      "order": 7,
      "title": "Pyrrhon et le scepticisme",
      "summary": "Suspendre son jugement pour atteindre la quiétude (ataraxie).",
      "conceptExplanation": "Les philosophies post-socratiques se développent après Socrate, Platon et Aristote. Elles mettent l'accent sur l'existence humaine : la philosophie devient un exercice spirituel pour atteindre la paix intérieure, synonyme de bonheur. Trois courants : le scepticisme, l'épicurisme, le stoïcisme.\n\nL'auteur : Pyrrhon d'Élis (vers 365 – vers 275 av. J.-C.), fondateur de l'école sceptique, contemporain d'Alexandre et d'Aristote. Il n'a rien écrit. Sa pensée nous est connue par son disciple Timon et, bien plus tard, par Sextus Empiricus (Hypotyposes pyrrhoniennes).\n\nTexte (Sextus Empiricus, Hypotyposes pyrrhoniennes) : « La fin du sceptique est la quiétude (ataraxie) en matière d'opinion et l'équilibre des passions en matière de nécessité. (…) [Le sceptique] est tombé dans des contradictions d'égale force qui l'ont mis dans l'incapacité de juger, si bien qu'il a suspendu son jugement ; à cette suspension du jugement a fait heureusement suite la quiétude. Car celui qui croit qu'une chose est par nature bonne ou mauvaise se trouble à tout propos. (…) Celui qui ne se prononce ni sur ce qui est naturellement bon ni sur ce qui est naturellement mauvais ne fuit rien et ne se dépense pas en vaines poursuites. Aussi connaît-il la quiétude. »\n\nMots :\n- ataraxie : absence de trouble de l'âme, quiétude ;\n- épochè : suspension du jugement ;\n- aphasie : ne rien affirmer, silence.\n\nPosition : l'esprit humain est incapable d'atteindre la vérité ; tous les discours ne sont que des croyances qui troublent l'âme. Il faut donc suspendre son jugement (épochè) et ne rien affirmer (aphasie) pour atteindre la quiétude et le bonheur (ataraxie).\n\nAnecdote : Pyrrhon restait indifférent à tout ; on raconte qu'il ne s'écarta pas de son chemin pour aider son ami Anaxarque tombé dans une fondrière.",
      "keyRule": "Scepticisme : on ne peut atteindre la vérité → suspension du jugement (épochè) + silence (aphasie) → paix de l'âme (ataraxie).",
      "formulas": [],
      "workedExample": {
        "title": "Pourquoi suspendre son jugement ?",
        "statement": "Selon le texte de Sextus Empiricus, pourquoi celui qui croit qu'une chose est bonne par nature n'est-il pas heureux ?",
        "methodSteps": [
          "S'il ne l'a pas, il souffre et la poursuit.",
          "S'il l'a, il a peur de la perdre."
        ],
        "conclusion": "Il est toujours troublé ; seul celui qui ne juge pas connaît la quiétude."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les post-socratiques",
          "stepTheme": "Les post-socratiques",
          "stepBadge": "Les post-socratiques",
          "paragraphText": "Pour les post-socratiques, la philosophie est un exercice spirituel pour atteindre la paix intérieure, synonyme de bonheur.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p07_q1",
            "type": "mcq",
            "prompt": "Quels sont les trois courants de la période post-socratique, qui cherchent la paix intérieure ?",
            "options": [
              "Scepticisme, épicurisme, stoïcisme",
              "Sophistique, platonisme, aristotélisme",
              "Immobilisme, devenir, ontologie",
              "Rationalisme, empirisme, existentialisme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois cherchent le bonheur par des chemins différents."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le fondateur",
          "stepTheme": "Le fondateur",
          "stepBadge": "Le fondateur",
          "paragraphText": "Pyrrhon d'Élis (vers 365 – vers 275 av. J.-C.) est le fondateur de l'école sceptique.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p07_q2",
            "type": "mcq",
            "prompt": "Qui est le chef de file du scepticisme antique, contemporain d'Alexandre et d'Aristote ?",
            "options": [
              "Épicure",
              "Pyrrhon d'Élis",
              "Zénon de Citium",
              "Parménide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On parle aussi de « pyrrhonisme »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Il n'a rien écrit",
          "stepTheme": "Il n'a rien écrit",
          "stepBadge": "Il n'a rien écrit",
          "paragraphText": "Pyrrhon n'a rien écrit : sa pensée nous est parvenue par Timon et par Sextus Empiricus.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p07_q3",
            "type": "mcq",
            "prompt": "Pyrrhon d'Élis n'a rien écrit. Qui a rédigé les Hypotyposes pyrrhoniennes, qui exposent sa pensée ?",
            "options": [
              "Pyrrhon lui-même",
              "Sextus Empiricus",
              "Platon",
              "Épictète"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sextus Empiricus vivait plusieurs siècles après Pyrrhon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'ataraxie",
          "stepTheme": "L'ataraxie",
          "stepBadge": "L'ataraxie",
          "paragraphText": "L'ataraxie est l'absence de trouble de l'âme, la quiétude. C'est la fin (le but) du sceptique.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p07_q4",
            "type": "mcq",
            "prompt": "Sextus Empiricus écrit que « la fin du sceptique est la quiétude (ataraxie) en matière d'opinion ». Que signifie « ataraxie » ?",
            "options": [
              "La colère",
              "L'absence de trouble de l'âme",
              "Le plaisir intense",
              "La richesse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la paix intérieure, le bonheur visé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'épochè",
          "stepTheme": "L'épochè",
          "stepBadge": "L'épochè",
          "paragraphText": "Devant des contradictions d'égale force, le sceptique suspend son jugement : c'est l'épochè.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p07_q5",
            "type": "mcq",
            "prompt": "Selon Sextus Empiricus, devant des « contradictions d'égale force », le sceptique « a suspendu son jugement ». Comment appelle-t-on cette suspension du jugement ?",
            "options": [
              "L'épochè",
              "La dialectique",
              "L'induction",
              "L'intempérance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Épochè : ne se prononcer ni pour ni contre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le trouble de celui qui juge",
          "stepTheme": "Le trouble de celui qui juge",
          "stepBadge": "Le trouble de celui qui juge",
          "paragraphText": "« Celui qui croit qu'une chose est par nature bonne ou mauvaise se trouble à tout propos. »",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p07_q6",
            "type": "mcq",
            "prompt": "Sextus Empiricus écrit : « celui qui croit qu'une chose est par nature bonne ou mauvaise se trouble à tout propos ». Que doit faire le sceptique pour connaître la quiétude ?",
            "options": [
              "Juger de tout avec certitude",
              "Ne se prononcer ni sur ce qui est bon ni sur ce qui est mauvais",
              "Rechercher tous les plaisirs",
              "Obéir aux lois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ne rien juger, c'est ne plus être troublé."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "La position sceptique",
          "stepTheme": "La position sceptique",
          "stepBadge": "La position sceptique",
          "paragraphText": "Pour Pyrrhon, l'esprit humain est incapable d'atteindre la vérité : il faut suspendre son jugement (épochè) et se taire (aphasie) pour atteindre l'ataraxie.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p07_q7",
            "type": "mcq",
            "prompt": "Selon le scepticisme de Pyrrhon, l'homme peut-il atteindre la vérité, et comment devient-il heureux ?",
            "options": [
              "Oui, par la dialectique ; il devient heureux en contemplant les Idées",
              "Non ; il devient heureux en suspendant son jugement et en ne rien affirmant",
              "Oui, par les sensations ; il devient heureux par le plaisir",
              "Oui, par la loi du plus fort"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Épochè et aphasie mènent à l'ataraxie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p07_q1",
          "type": "mcq",
          "prompt": "Quels sont les trois courants de la période post-socratique, qui cherchent la paix intérieure ?",
          "options": [
            "Scepticisme, épicurisme, stoïcisme",
            "Sophistique, platonisme, aristotélisme",
            "Immobilisme, devenir, ontologie",
            "Rationalisme, empirisme, existentialisme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois cherchent le bonheur par des chemins différents."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p07_q2",
          "type": "mcq",
          "prompt": "Qui est le chef de file du scepticisme antique, contemporain d'Alexandre et d'Aristote ?",
          "options": [
            "Épicure",
            "Pyrrhon d'Élis",
            "Zénon de Citium",
            "Parménide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On parle aussi de « pyrrhonisme »."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p07_q3",
          "type": "mcq",
          "prompt": "Pyrrhon d'Élis n'a rien écrit. Qui a rédigé les Hypotyposes pyrrhoniennes, qui exposent sa pensée ?",
          "options": [
            "Pyrrhon lui-même",
            "Sextus Empiricus",
            "Platon",
            "Épictète"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sextus Empiricus vivait plusieurs siècles après Pyrrhon."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p07_q4",
          "type": "mcq",
          "prompt": "Sextus Empiricus écrit que « la fin du sceptique est la quiétude (ataraxie) en matière d'opinion ». Que signifie « ataraxie » ?",
          "options": [
            "La colère",
            "L'absence de trouble de l'âme",
            "Le plaisir intense",
            "La richesse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la paix intérieure, le bonheur visé."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p07_q5",
          "type": "mcq",
          "prompt": "Selon Sextus Empiricus, devant des « contradictions d'égale force », le sceptique « a suspendu son jugement ». Comment appelle-t-on cette suspension du jugement ?",
          "options": [
            "L'épochè",
            "La dialectique",
            "L'induction",
            "L'intempérance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Épochè : ne se prononcer ni pour ni contre."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p07_q6",
          "type": "mcq",
          "prompt": "Sextus Empiricus écrit : « celui qui croit qu'une chose est par nature bonne ou mauvaise se trouble à tout propos ». Que doit faire le sceptique pour connaître la quiétude ?",
          "options": [
            "Juger de tout avec certitude",
            "Ne se prononcer ni sur ce qui est bon ni sur ce qui est mauvais",
            "Rechercher tous les plaisirs",
            "Obéir aux lois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ne rien juger, c'est ne plus être troublé."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p07_q7",
          "type": "mcq",
          "prompt": "Selon le scepticisme de Pyrrhon, l'homme peut-il atteindre la vérité, et comment devient-il heureux ?",
          "options": [
            "Oui, par la dialectique ; il devient heureux en contemplant les Idées",
            "Non ; il devient heureux en suspendant son jugement et en ne rien affirmant",
            "Oui, par les sensations ; il devient heureux par le plaisir",
            "Oui, par la loi du plus fort"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Épochè et aphasie mènent à l'ataraxie."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l06_periode_antique_p08",
      "order": 8,
      "title": "Épicure : la mort n'est rien pour nous",
      "summary": "Se libérer de la peur de la mort et ne satisfaire que les désirs naturels et nécessaires.",
      "conceptExplanation": "L'auteur : Épicure (341-270 av. J.-C.), fondateur de l'épicurisme. Il crée son école à Athènes en 306 av. J.-C. : le Jardin. La plupart de ses ouvrages sont perdus ; il nous reste trois lettres : Lettre à Hérodote (la physique), Lettre à Pythoclès (les phénomènes célestes), Lettre à Ménécée (la morale).\n\nTexte 1 (Lettre à Ménécée) : « Familiarise-toi avec l'idée que la mort n'est rien pour nous, car tout bien et tout mal résident dans la sensation ; or, la mort est la privation complète de cette dernière. (…) Ainsi, celui des maux qui fait le plus frémir n'est rien pour nous, puisque tant que nous existons la mort n'est pas, et que quand la mort est là nous ne sommes plus. »\n\nTexte 2 (Lettre à Ménécée) : « Parmi les désirs, les uns sont naturels, les autres vains, et parmi les désirs naturels, les uns sont nécessaires, les autres naturels seulement. (…) C'est pour cela que nous faisons tout : afin de ne pas souffrir et de n'être pas troublés. (…) Du pain d'orge et de l'eau donnent le plaisir extrême, lorsqu'on les porte à sa bouche dans le besoin. »\n\nClassement des désirs :\n- naturels et nécessaires : manger quand on a faim, boire, s'abriter → à satisfaire ;\n- naturels seulement (non nécessaires) : manger des plats raffinés → avec mesure ;\n- vains : richesse, gloire, pouvoir → à rejeter.\n\nPosition : en se libérant des frayeurs religieuses et de la peur de la mort, et en ne satisfaisant que les désirs naturels et nécessaires, l'homme atteint le bonheur : l'absence de trouble de l'âme (ataraxie) et l'absence de douleur du corps, dans un plaisir simple et mesuré.\n\nAttention : l'épicurisme n'est pas la recherche de tous les plaisirs (c'est plutôt la thèse de Calliclès). C'est un plaisir sobre.",
      "keyRule": "Épicure : la mort n'est rien pour nous ; satisfaire seulement les désirs naturels et nécessaires → ataraxie (plaisir simple, mesuré).",
      "formulas": [],
      "workedExample": {
        "title": "Classer un désir",
        "statement": "Selon Épicure, comment classer le désir de devenir très riche ?",
        "methodSteps": [
          "Il n'est pas naturel : la nature n'exige pas la richesse.",
          "Il est difficile à satisfaire et source de trouble."
        ],
        "conclusion": "C'est un désir vain, à rejeter."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "La mort n'est rien",
          "stepTheme": "La mort n'est rien",
          "stepBadge": "La mort n'est rien",
          "paragraphText": "« Tant que nous existons la mort n'est pas, et quand la mort est là nous ne sommes plus. »",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p08_q1",
            "type": "mcq",
            "prompt": "Épicure écrit dans la Lettre à Ménécée : « tant que nous existons la mort n'est pas, et quand la mort est là nous ne sommes plus ». Quelle conclusion en tire-t-il ?",
            "options": [
              "Il faut craindre la mort",
              "La mort n'est rien pour nous : il est inutile de la craindre",
              "La mort est le plus grand bien",
              "Il faut chercher l'immortalité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ne rencontre jamais sa propre mort : elle ne peut pas nous faire souffrir."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Bien et mal dans la sensation",
          "stepTheme": "Bien et mal dans la sensation",
          "stepBadge": "Bien et mal dans la sensation",
          "paragraphText": "« Tout bien et tout mal résident dans la sensation ; or, la mort est la privation complète de cette dernière. »",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p08_q2",
            "type": "mcq",
            "prompt": "Épicure écrit : « tout bien et tout mal résident dans la sensation ; or, la mort est la privation complète de cette dernière ». Pourquoi la mort ne peut-elle pas être un mal ?",
            "options": [
              "Parce que les dieux nous protègent",
              "Parce que, morts, nous ne sentons plus rien",
              "Parce que l'âme est immortelle",
              "Parce que la mort est rare"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans sensation, il n'y a ni plaisir ni douleur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Trois sortes de désirs",
          "stepTheme": "Trois sortes de désirs",
          "stepBadge": "Trois sortes de désirs",
          "paragraphText": "Épicure distingue les désirs naturels et nécessaires, les désirs naturels seulement, et les désirs vains.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p08_q3",
            "type": "mcq",
            "prompt": "Selon Épicure (Lettre à Ménécée), quels désirs faut-il satisfaire pour être heureux ?",
            "options": [
              "Tous les désirs",
              "Seulement les désirs naturels et nécessaires",
              "Seulement les désirs vains",
              "Aucun désir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ils sont faciles à satisfaire et suppriment la douleur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un désir vain",
          "stepTheme": "Un désir vain",
          "stepBadge": "Un désir vain",
          "paragraphText": "La richesse, la gloire, le pouvoir sont des désirs vains : ils ne sont ni naturels ni nécessaires.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p08_q4",
            "type": "mcq",
            "prompt": "Selon le classement d'Épicure (naturels et nécessaires / naturels seulement / vains), dans quelle catégorie range-t-on le désir de gloire ?",
            "options": [
              "Naturel et nécessaire",
              "Naturel seulement",
              "Vain",
              "Ce n'est pas un désir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La gloire n'est exigée ni par la nature ni par la vie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le pain et l'eau",
          "stepTheme": "Le pain et l'eau",
          "stepBadge": "Le pain et l'eau",
          "paragraphText": "« Du pain d'orge et de l'eau donnent le plaisir extrême, lorsqu'on les porte à sa bouche dans le besoin. »",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p08_q5",
            "type": "mcq",
            "prompt": "Épicure écrit : « du pain d'orge et de l'eau donnent le plaisir extrême, lorsqu'on les porte à sa bouche dans le besoin ». Quelle idée défend-il ?",
            "options": [
              "Il faut manger des plats de luxe",
              "Un plaisir simple suffit au bonheur",
              "Il faut jeûner toujours",
              "L'eau est meilleure que le vin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les mets simples donnent un plaisir égal à un régime somptueux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La position d'Épicure",
          "stepTheme": "La position d'Épicure",
          "stepBadge": "La position d'Épicure",
          "paragraphText": "Libéré de la peur des dieux et de la mort, ne satisfaisant que les désirs naturels et nécessaires, l'homme atteint l'ataraxie : un plaisir simple et mesuré.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p08_q6",
            "type": "mcq",
            "prompt": "Pour Épicure (341-270 av. J.-C.), en quoi consiste le bonheur ?",
            "options": [
              "Dans la satisfaction de toutes les passions",
              "Dans l'absence de trouble de l'âme et de douleur du corps, par un plaisir simple et mesuré",
              "Dans la contemplation de l'idée du Bien",
              "Dans la richesse et le pouvoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Ne pas souffrir et n'être pas troublés » : c'est le but de la vie."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Épicure n'est pas Calliclès",
          "stepTheme": "Épicure n'est pas Calliclès",
          "stepBadge": "Épicure n'est pas Calliclès",
          "paragraphText": "Calliclès veut satisfaire toutes ses passions ; Épicure, au contraire, veut un plaisir sobre et mesuré.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p08_q7",
            "type": "mcq",
            "prompt": "Calliclès dit qu'il faut laisser ses passions grandir sans limite ; Épicure dit qu'il faut se contenter de peu. Lequel des deux défend un plaisir mesuré ?",
            "options": [
              "Calliclès",
              "Épicure",
              "Les deux",
              "Aucun des deux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'épicurisme n'est pas la débauche : c'est la sobriété."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p08_q1",
          "type": "mcq",
          "prompt": "Épicure écrit dans la Lettre à Ménécée : « tant que nous existons la mort n'est pas, et quand la mort est là nous ne sommes plus ». Quelle conclusion en tire-t-il ?",
          "options": [
            "Il faut craindre la mort",
            "La mort n'est rien pour nous : il est inutile de la craindre",
            "La mort est le plus grand bien",
            "Il faut chercher l'immortalité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ne rencontre jamais sa propre mort : elle ne peut pas nous faire souffrir."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p08_q2",
          "type": "mcq",
          "prompt": "Épicure écrit : « tout bien et tout mal résident dans la sensation ; or, la mort est la privation complète de cette dernière ». Pourquoi la mort ne peut-elle pas être un mal ?",
          "options": [
            "Parce que les dieux nous protègent",
            "Parce que, morts, nous ne sentons plus rien",
            "Parce que l'âme est immortelle",
            "Parce que la mort est rare"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans sensation, il n'y a ni plaisir ni douleur."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p08_q3",
          "type": "mcq",
          "prompt": "Selon Épicure (Lettre à Ménécée), quels désirs faut-il satisfaire pour être heureux ?",
          "options": [
            "Tous les désirs",
            "Seulement les désirs naturels et nécessaires",
            "Seulement les désirs vains",
            "Aucun désir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ils sont faciles à satisfaire et suppriment la douleur."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p08_q4",
          "type": "mcq",
          "prompt": "Selon le classement d'Épicure (naturels et nécessaires / naturels seulement / vains), dans quelle catégorie range-t-on le désir de gloire ?",
          "options": [
            "Naturel et nécessaire",
            "Naturel seulement",
            "Vain",
            "Ce n'est pas un désir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La gloire n'est exigée ni par la nature ni par la vie."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p08_q5",
          "type": "mcq",
          "prompt": "Épicure écrit : « du pain d'orge et de l'eau donnent le plaisir extrême, lorsqu'on les porte à sa bouche dans le besoin ». Quelle idée défend-il ?",
          "options": [
            "Il faut manger des plats de luxe",
            "Un plaisir simple suffit au bonheur",
            "Il faut jeûner toujours",
            "L'eau est meilleure que le vin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les mets simples donnent un plaisir égal à un régime somptueux."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p08_q6",
          "type": "mcq",
          "prompt": "Pour Épicure (341-270 av. J.-C.), en quoi consiste le bonheur ?",
          "options": [
            "Dans la satisfaction de toutes les passions",
            "Dans l'absence de trouble de l'âme et de douleur du corps, par un plaisir simple et mesuré",
            "Dans la contemplation de l'idée du Bien",
            "Dans la richesse et le pouvoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Ne pas souffrir et n'être pas troublés » : c'est le but de la vie."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p08_q7",
          "type": "mcq",
          "prompt": "Calliclès dit qu'il faut laisser ses passions grandir sans limite ; Épicure dit qu'il faut se contenter de peu. Lequel des deux défend un plaisir mesuré ?",
          "options": [
            "Calliclès",
            "Épicure",
            "Les deux",
            "Aucun des deux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'épicurisme n'est pas la débauche : c'est la sobriété."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l06_periode_antique_p09",
      "order": 9,
      "title": "Le stoïcisme d'Épictète",
      "summary": "Distinguer ce qui dépend de nous et ce qui n'en dépend pas.",
      "conceptExplanation": "Le stoïcisme : fondé par Zénon de Citium (vers 336 – vers 264 av. J.-C.) à Athènes, sous un portique (en grec « stoa », d'où le nom). Nous le connaissons surtout par des auteurs de l'époque romaine : Sénèque, Épictète et l'empereur Marc Aurèle.\n\nÉpictète (vers 50 – vers 130 apr. J.-C.) : esclave affranchi devenu maître de philosophie. Correction du document : Épictète n'a rien écrit lui-même ; ses leçons ont été notées par son disciple Arrien, qui a rédigé les Entretiens et le Manuel.\n\nTexte (Manuel) : « Des choses, les unes dépendent de nous, les autres ne dépendent pas de nous. Ce qui dépend de nous, ce sont nos jugements, nos tendances, nos désirs, nos aversions, en un mot tout ce qui est opération de notre âme ; ce qui ne dépend pas de nous, c'est le corps, la fortune, les témoignages de considération, les charges publiques (…). Si tu ne regardes comme étant à toi que ce qui est à toi (…) personne ne te contraindra jamais (…) tu n'auras pas d'ennemi. (…) Si l'idée est relative à quelque chose qui ne dépende pas de nous, sois prêt à dire : « Cela ne me regarde pas ». »\n\nPosition : l'homme libre et heureux est celui qui :\n- se conforme à la nature ;\n- suit la raison ;\n- se détache des biens extérieurs ;\n- reste indifférent aux opinions.\n\nComparer les trois écoles du bonheur :\n- scepticisme (Pyrrhon) : suspendre son jugement ;\n- épicurisme (Épicure) : désirs naturels et nécessaires, ne pas craindre la mort ;\n- stoïcisme (Zénon, Épictète) : ne vouloir que ce qui dépend de nous.",
      "keyRule": "Stoïcisme : ce qui dépend de nous (jugements, désirs) / ce qui n'en dépend pas (corps, fortune, opinion d'autrui). Ne s'attacher qu'au premier → liberté et bonheur.",
      "formulas": [],
      "workedExample": {
        "title": "Appliquer la règle stoïcienne",
        "statement": "Un élève est malheureux parce qu'il pleut le jour de la fête. Que lui dirait Épictète ?",
        "methodSteps": [
          "La pluie ne dépend pas de nous.",
          "Notre jugement sur la pluie, lui, dépend de nous."
        ],
        "conclusion": "« Cela ne me regarde pas » : il faut changer son jugement, pas le temps qu'il fait."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le fondateur",
          "stepTheme": "Le fondateur",
          "stepBadge": "Le fondateur",
          "paragraphText": "Le stoïcisme a été fondé par Zénon de Citium (vers 336 – vers 264 av. J.-C.).",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p09_q1",
            "type": "mcq",
            "prompt": "Qui est le fondateur du stoïcisme, l'école dont Épictète, Sénèque et Marc Aurèle sont les représentants romains ?",
            "options": [
              "Pyrrhon d'Élis",
              "Zénon de Citium",
              "Épicure",
              "Calliclès"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Zénon enseignait sous un portique (stoa) à Athènes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Qui a écrit le Manuel ?",
          "stepTheme": "Qui a écrit le Manuel ?",
          "stepBadge": "Qui a écrit le Manuel ?",
          "paragraphText": "Épictète, esclave affranchi, n'a rien écrit : son disciple Arrien a rédigé les Entretiens et le Manuel.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p09_q2",
            "type": "mcq",
            "prompt": "Le Manuel et les Entretiens exposent la pensée du stoïcien Épictète (vers 50 – vers 130 apr. J.-C.). Qui les a rédigés ?",
            "options": [
              "Épictète lui-même",
              "Son disciple Arrien, à partir de ses leçons",
              "Marc Aurèle",
              "Platon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Comme Socrate, Épictète enseignait oralement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Ce qui dépend de nous",
          "stepTheme": "Ce qui dépend de nous",
          "stepBadge": "Ce qui dépend de nous",
          "paragraphText": "« Ce qui dépend de nous, ce sont nos jugements, nos tendances, nos désirs, nos aversions, en un mot tout ce qui est opération de notre âme. »",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p09_q3",
            "type": "mcq",
            "prompt": "Selon Épictète (Manuel), lequel de ces éléments DÉPEND de nous ?",
            "options": [
              "Notre corps",
              "La fortune",
              "Nos jugements",
              "Les charges publiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Seules les opérations de notre âme dépendent de nous."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Ce qui n'en dépend pas",
          "stepTheme": "Ce qui n'en dépend pas",
          "stepBadge": "Ce qui n'en dépend pas",
          "paragraphText": "« Ce qui ne dépend pas de nous, c'est le corps, la fortune, les témoignages de considération, les charges publiques. »",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p09_q4",
            "type": "mcq",
            "prompt": "Selon Épictète, pour qui « ce qui dépend de nous, ce sont nos jugements, nos désirs », lequel de ces éléments NE DÉPEND PAS de nous ?",
            "options": [
              "Nos désirs",
              "Nos aversions",
              "L'opinion que les autres ont de nous",
              "Nos jugements"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les « témoignages de considération » ne dépendent pas de nous."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "« Cela ne me regarde pas »",
          "stepTheme": "« Cela ne me regarde pas »",
          "stepBadge": "« Cela ne me regarde pas »",
          "paragraphText": "Si une idée concerne ce qui ne dépend pas de nous, Épictète conseille de dire : « Cela ne me regarde pas ».",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p09_q5",
            "type": "mcq",
            "prompt": "Épictète conseille : « si l'idée est relative à quelque chose qui ne dépende pas de nous, sois prêt à dire : Cela ne me regarde pas ». Un élève s'inquiète de la pluie annoncée pour sa fête. Que doit-il faire selon Épictète ?",
            "options": [
              "Se mettre en colère contre le ciel",
              "Accepter la pluie, qui ne dépend pas de lui, et régler son propre jugement",
              "Annuler sa vie sociale",
              "Prier pour que le temps change"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le temps ne dépend pas de nous ; notre réaction, si."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'homme libre et heureux",
          "stepTheme": "L'homme libre et heureux",
          "stepBadge": "L'homme libre et heureux",
          "paragraphText": "Le stoïcien se conforme à la nature, suit la raison, se détache des biens extérieurs et reste indifférent aux opinions.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p09_q6",
            "type": "mcq",
            "prompt": "Selon le stoïcisme d'Épictète, quel homme est libre et heureux ?",
            "options": [
              "Celui qui accumule richesses et honneurs",
              "Celui qui suit la raison, se conforme à la nature et se détache des biens extérieurs",
              "Celui qui satisfait toutes ses passions",
              "Celui qui domine les plus faibles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La liberté stoïcienne est intérieure."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Ranger les penseurs",
          "stepTheme": "Ranger les penseurs",
          "stepBadge": "Ranger les penseurs",
          "paragraphText": "Présocratiques : Héraclite, Parménide. Socratiques : sophistes (Protagoras, Gorgias, Antiphon), Socrate, Platon, Aristote. Post-socratiques : Pyrrhon, Épicure, Zénon, Épictète.",
          "exercise": {
            "id": "premiere_philo_histoire_l06_periode_antique_p09_q7",
            "type": "mcq",
            "prompt": "On range des penseurs antiques selon leur sous-période (présocratique, socratique, post-socratique). Quel groupe appartient entièrement à la période post-socratique ?",
            "options": [
              "Héraclite, Parménide",
              "Protagoras, Gorgias, Platon",
              "Pyrrhon, Épicure, Épictète",
              "Socrate, Aristote, Parménide"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ils viennent après Socrate, Platon et Aristote et cherchent le bonheur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p09_q1",
          "type": "mcq",
          "prompt": "Qui est le fondateur du stoïcisme, l'école dont Épictète, Sénèque et Marc Aurèle sont les représentants romains ?",
          "options": [
            "Pyrrhon d'Élis",
            "Zénon de Citium",
            "Épicure",
            "Calliclès"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Zénon enseignait sous un portique (stoa) à Athènes."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p09_q2",
          "type": "mcq",
          "prompt": "Le Manuel et les Entretiens exposent la pensée du stoïcien Épictète (vers 50 – vers 130 apr. J.-C.). Qui les a rédigés ?",
          "options": [
            "Épictète lui-même",
            "Son disciple Arrien, à partir de ses leçons",
            "Marc Aurèle",
            "Platon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Comme Socrate, Épictète enseignait oralement."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p09_q3",
          "type": "mcq",
          "prompt": "Selon Épictète (Manuel), lequel de ces éléments DÉPEND de nous ?",
          "options": [
            "Notre corps",
            "La fortune",
            "Nos jugements",
            "Les charges publiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Seules les opérations de notre âme dépendent de nous."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p09_q4",
          "type": "mcq",
          "prompt": "Selon Épictète, pour qui « ce qui dépend de nous, ce sont nos jugements, nos désirs », lequel de ces éléments NE DÉPEND PAS de nous ?",
          "options": [
            "Nos désirs",
            "Nos aversions",
            "L'opinion que les autres ont de nous",
            "Nos jugements"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les « témoignages de considération » ne dépendent pas de nous."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p09_q5",
          "type": "mcq",
          "prompt": "Épictète conseille : « si l'idée est relative à quelque chose qui ne dépende pas de nous, sois prêt à dire : Cela ne me regarde pas ». Un élève s'inquiète de la pluie annoncée pour sa fête. Que doit-il faire selon Épictète ?",
          "options": [
            "Se mettre en colère contre le ciel",
            "Accepter la pluie, qui ne dépend pas de lui, et régler son propre jugement",
            "Annuler sa vie sociale",
            "Prier pour que le temps change"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le temps ne dépend pas de nous ; notre réaction, si."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p09_q6",
          "type": "mcq",
          "prompt": "Selon le stoïcisme d'Épictète, quel homme est libre et heureux ?",
          "options": [
            "Celui qui accumule richesses et honneurs",
            "Celui qui suit la raison, se conforme à la nature et se détache des biens extérieurs",
            "Celui qui satisfait toutes ses passions",
            "Celui qui domine les plus faibles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La liberté stoïcienne est intérieure."
        },
        {
          "id": "premiere_philo_histoire_l06_periode_antique_p09_q7",
          "type": "mcq",
          "prompt": "On range des penseurs antiques selon leur sous-période (présocratique, socratique, post-socratique). Quel groupe appartient entièrement à la période post-socratique ?",
          "options": [
            "Héraclite, Parménide",
            "Protagoras, Gorgias, Platon",
            "Pyrrhon, Épicure, Épictète",
            "Socrate, Aristote, Parménide"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ils viennent après Socrate, Platon et Aristote et cherchent le bonheur."
        }
      ]
    }
  ]
};
