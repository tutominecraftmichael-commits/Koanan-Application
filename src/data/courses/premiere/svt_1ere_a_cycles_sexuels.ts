import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 4 : Les cycles sexuels chez la femme » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=898
export const SVT_1ERE_A_L04_CYCLES_SEXUELS: CurriculumChapter = {
  "id": "premiere_a1_svt_l04_cycles_sexuels_femme",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 4,
  "title": "Leçon 4 : Les cycles sexuels chez la femme",
  "summary": "Chaque mois, l'écoulement de sang des menstrues manifeste le fonctionnement cyclique de l'appareil reproducteur femelle : cycles ovarien, utérin et hormonal, régulés par la GnRH, la FSH, la LH et les hormones ovariennes.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=898",
  "points": [
    {
      "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01",
      "order": 1,
      "title": "Le cycle ovarien : phase folliculaire, ovulation et phase lutéinique",
      "summary": "Décrire les deux phases du cycle ovarien séparées par l'ovulation au 14e jour d'un cycle de 28 jours.",
      "conceptExplanation": "On observe trois cycles chez la femme : le cycle ovarien, le cycle utérin et le cycle hormonal ; chaque cycle comprend deux phases séparées par l'ovulation.\nPendant la phase folliculaire ou pré-ovulatoire, les follicules croissent et un seul arrive à maturité ; cette phase dure 14 jours pour un cycle régulier de 28 jours. Au 14e jour, la paroi du follicule mûr se rompt et l'ovocyte II est expulsé : c'est l'ovulation.\nPendant la phase lutéinique ou post-ovulatoire, le follicule rompu se referme pour former le corps jaune, qui s'accroît puis dégénère vers la fin du cycle pour donner un corps blanc lorsqu'il n'y a pas eu de fécondation. Le corps jaune persiste lorsqu'il y a fécondation.",
      "keyRule": "Un seul follicule mûrit, l'ovulation a lieu au 14e jour, puis le follicule rompu devient corps jaune, puis corps blanc sans fécondation.",
      "formulas": [],
      "workedExample": {
        "title": "Le devenir du follicule rompu",
        "statement": "Que devient le follicule après l'ovulation, avec et sans fécondation ?",
        "methodSteps": [
          "Après l'ovulation, le follicule rompu se referme et forme le corps jaune.",
          "Sans fécondation, le corps jaune dégénère en corps blanc vers la fin du cycle.",
          "Avec fécondation, le corps jaune persiste."
        ],
        "conclusion": "Analyse du cycle ovarien dans la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les trois cycles observés",
          "stepTheme": "Les trois cycles observés",
          "stepBadge": "Les trois cycles observés",
          "paragraphText": "Les planches relatives aux cycles sexuels montrent trois cycles synchronisés.\nCe sont le cycle ovarien, le cycle utérin et le cycle hormonal.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q1",
            "type": "mcq",
            "prompt": "Les trois cycles observés chez la femme sont :",
            "options": [
              "Ovarien, testiculaire et utérin",
              "Ovarien, utérin et hormonal",
              "Hormonal, sanguin et ovarien",
              "Utérin, vaginal et sanguin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats de l'observation des documents de la partie I."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La phase folliculaire",
          "stepTheme": "La phase folliculaire",
          "stepBadge": "La phase folliculaire",
          "paragraphText": "• Phase folliculaire (pré-ovulatoire) : phase de croissance des follicules, dont un seul arrive à maturité.\nElle dure 14 jours pour un cycle régulier de 28 jours.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q2",
            "type": "mcq",
            "prompt": "Pendant la phase folliculaire :",
            "options": [
              "Tous les follicules arrivent à maturité",
              "Le corps jaune se forme",
              "L'endomètre se desquame uniquement",
              "Les follicules croissent et un seul arrive à maturité"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse du cycle ovarien."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'ovulation au 14e jour",
          "stepTheme": "L'ovulation au 14e jour",
          "stepBadge": "L'ovulation au 14e jour",
          "paragraphText": "Au 14e jour, on observe la rupture de la paroi du follicule mûr.\nL'ovocyte II est alors expulsé : c'est l'ovulation, qui sépare les deux phases de chaque cycle.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q3",
            "type": "mcq",
            "prompt": "L'ovulation correspond à :",
            "options": [
              "La rupture du follicule mûr et l'expulsion de l'ovocyte II, au 14e jour",
              "La formation du corps jaune",
              "La desquamation de l'endomètre",
              "L'apparition des menstrues"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse du cycle ovarien."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le corps jaune",
          "stepTheme": "Le corps jaune",
          "stepBadge": "Le corps jaune",
          "paragraphText": "Pendant la phase lutéinique, le follicule rompu se referme pour former le corps jaune.\nLe corps jaune s'accroît au cours de cette phase post-ovulatoire.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q4",
            "type": "mcq",
            "prompt": "Le corps jaune se forme :",
            "options": [
              "Avant l'ovulation, à partir d'un follicule en croissance",
              "Uniquement pendant les menstrues",
              "Après l'ovulation, à partir du follicule rompu qui se referme",
              "Dans l'utérus"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du cycle ovarien, phase lutéinique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Corps blanc ou corps jaune persistant",
          "stepTheme": "Corps blanc ou corps jaune persistant",
          "stepBadge": "Corps blanc ou corps jaune persistant",
          "paragraphText": "Piège : le devenir du corps jaune dépend de la fécondation.\nSans fécondation, il dégénère vers la fin du cycle en corps blanc ; lorsqu'il y a fécondation, le corps jaune persiste.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q5",
            "type": "mcq",
            "prompt": "Sans fécondation, le corps jaune :",
            "options": [
              "Persiste indéfiniment",
              "Se transforme en follicule mûr",
              "Expulse un second ovocyte",
              "Dégénère vers la fin du cycle pour donner un corps blanc"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse du cycle ovarien, phase lutéinique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un cycle régulier de 28 jours",
          "stepTheme": "Un cycle régulier de 28 jours",
          "stepBadge": "Un cycle régulier de 28 jours",
          "paragraphText": "Pour un cycle régulier de 28 jours, la phase folliculaire dure 14 jours.\nL'ovulation au 14e jour marque donc le milieu du cycle et le début de la phase lutéinique.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q6",
            "type": "mcq",
            "prompt": "Pour un cycle régulier de 28 jours, la phase folliculaire dure :",
            "options": [
              "28 jours",
              "14 jours",
              "7 jours",
              "21 jours"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse du cycle ovarien."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q1",
          "type": "mcq",
          "prompt": "Les trois cycles observés chez la femme sont :",
          "options": [
            "Ovarien, testiculaire et utérin",
            "Ovarien, utérin et hormonal",
            "Hormonal, sanguin et ovarien",
            "Utérin, vaginal et sanguin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats de l'observation des documents de la partie I."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q2",
          "type": "mcq",
          "prompt": "Pendant la phase folliculaire :",
          "options": [
            "Tous les follicules arrivent à maturité",
            "Le corps jaune se forme",
            "L'endomètre se desquame uniquement",
            "Les follicules croissent et un seul arrive à maturité"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse du cycle ovarien."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q3",
          "type": "mcq",
          "prompt": "L'ovulation correspond à :",
          "options": [
            "La rupture du follicule mûr et l'expulsion de l'ovocyte II, au 14e jour",
            "La formation du corps jaune",
            "La desquamation de l'endomètre",
            "L'apparition des menstrues"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse du cycle ovarien."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q4",
          "type": "mcq",
          "prompt": "Le corps jaune se forme :",
          "options": [
            "Avant l'ovulation, à partir d'un follicule en croissance",
            "Uniquement pendant les menstrues",
            "Après l'ovulation, à partir du follicule rompu qui se referme",
            "Dans l'utérus"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du cycle ovarien, phase lutéinique."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q5",
          "type": "mcq",
          "prompt": "Sans fécondation, le corps jaune :",
          "options": [
            "Persiste indéfiniment",
            "Se transforme en follicule mûr",
            "Expulse un second ovocyte",
            "Dégénère vers la fin du cycle pour donner un corps blanc"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse du cycle ovarien, phase lutéinique."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q6",
          "type": "mcq",
          "prompt": "Pour un cycle régulier de 28 jours, la phase folliculaire dure :",
          "options": [
            "28 jours",
            "14 jours",
            "7 jours",
            "21 jours"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse du cycle ovarien."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02",
      "order": 2,
      "title": "Le cycle utérin : desquamation, épaississement et dentelle utérine",
      "summary": "Décrire l'évolution de l'endomètre pendant les deux phases, des menstrues à la dentelle utérine.",
      "conceptExplanation": "Pendant la phase folliculaire, l'épaisseur de l'endomètre diminue : c'est la desquamation ou décapage, qui s'accompagne d'un écoulement de sang, les menstrues, qui durent 3 à 5 jours en moyenne. Après les menstrues, l'endomètre augmente progressivement d'épaisseur et se creuse de glandes en doigts de gant ; des vaisseaux apparaissent à l'intérieur des glandes.\nAu cours de la phase lutéinique, l'épaisseur de l'endomètre continue d'augmenter jusqu'à une épaisseur maximale. Les vaisseaux sanguins sont spiralés, les glandes sont tortueuses, du mucus et du glycogène sont sécrétés : l'endomètre a l'aspect d'une dentelle, on parle de dentelle utérine.\nS'il n'y a pas eu de fécondation, on observe la desquamation de l'endomètre au 28e jour et l'apparition des menstrues.",
      "keyRule": "Menstrues de 3 à 5 jours par desquamation, puis endomètre qui s'épaissit ; en phase lutéinique, vaisseaux spiralés et glandes tortueuses forment la dentelle utérine.",
      "formulas": [],
      "workedExample": {
        "title": "L'endomètre de Madame E (partie anomalies)",
        "statement": "Chez Madame E, le faible taux d'œstradiol empêche une étape du cycle utérin et l'absence de pic de progestérone empêche une autre étape. Lesquelles ?",
        "methodSteps": [
          "Le faible taux d'œstradiol empêche l'épaississement progressif de l'endomètre lors de la phase folliculaire.",
          "L'absence de pic de progestérone empêche la muqueuse utérine d'avoir l'aspect de dentelle utérine favorable à la nidation."
        ],
        "conclusion": "Interprétation des anomalies liées aux cycles sexuels."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les menstrues",
          "stepTheme": "Les menstrues",
          "stepBadge": "Les menstrues",
          "paragraphText": "Pendant la phase folliculaire, l'endomètre se desquame : c'est la desquamation ou décapage.\nElle s'accompagne d'un écoulement de sang : ce sont les menstrues, manifestation extérieure du fonctionnement de l'appareil reproducteur femelle.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q1",
            "type": "mcq",
            "prompt": "Les menstrues correspondent à :",
            "options": [
              "L'expulsion de l'ovocyte II",
              "La formation du corps jaune",
              "La desquamation de l'endomètre accompagnée d'un écoulement de sang",
              "La sécrétion de GnRH"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du cycle utérin et situation d'apprentissage."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La durée moyenne des menstrues",
          "stepTheme": "La durée moyenne des menstrues",
          "stepBadge": "La durée moyenne des menstrues",
          "paragraphText": "L'écoulement de sang des menstrues a une durée moyenne précisée par la leçon.\nElle est de 3 à 5 jours en moyenne.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q2",
            "type": "mcq",
            "prompt": "Les menstrues durent en moyenne :",
            "options": [
              "3 à 5 jours",
              "1 à 2 jours",
              "10 à 12 jours",
              "14 jours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse du cycle utérin, phase folliculaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les glandes en doigts de gant",
          "stepTheme": "Les glandes en doigts de gant",
          "stepBadge": "Les glandes en doigts de gant",
          "paragraphText": "Après les menstrues, l'endomètre augmente progressivement d'épaisseur.\nIl se creuse de glandes en doigts de gant et des vaisseaux apparaissent à l'intérieur des glandes.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q3",
            "type": "mcq",
            "prompt": "Après les menstrues, l'endomètre en reconstruction présente :",
            "options": [
              "Des glandes en doigts de gant et de nouveaux vaisseaux",
              "Une desquamation continue",
              "Uniquement du mucus",
              "Aucun vaisseau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse du cycle utérin, phase folliculaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La dentelle utérine",
          "stepTheme": "La dentelle utérine",
          "stepBadge": "La dentelle utérine",
          "paragraphText": "• Dentelle utérine : aspect de l'endomètre en phase lutéinique, à épaisseur maximale.\nLes vaisseaux sanguins sont spiralés, les glandes tortueuses, du mucus et du glycogène sont sécrétés.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q4",
            "type": "mcq",
            "prompt": "La dentelle utérine se caractérise par :",
            "options": [
              "Un endomètre très mince sans glandes",
              "Un écoulement de sang abondant",
              "Des vaisseaux spiralés, des glandes tortueuses et la sécrétion de mucus et de glycogène",
              "L'absence de vaisseaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du cycle utérin, phase lutéinique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Sans fécondation, retour des menstrues au 28e jour",
          "stepTheme": "Sans fécondation, retour des menstrues au 28e jour",
          "stepBadge": "Sans fécondation, retour des menstrues au 28e jour",
          "paragraphText": "S'il n'y a pas eu de fécondation, l'endomètre préparé ne reçoit aucun œuf.\nOn observe alors sa desquamation au 28e jour et l'apparition des menstrues : un nouveau cycle commence.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q5",
            "type": "mcq",
            "prompt": "Sans fécondation, au 28e jour, on observe :",
            "options": [
              "L'ovulation",
              "La desquamation de l'endomètre et l'apparition des menstrues",
              "La persistance définitive de la dentelle",
              "La formation d'un nouveau follicule mûr expulsé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Fin de l'analyse du cycle utérin."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Ranger les événements par phase (exercice 3)",
          "stepTheme": "Ranger les événements par phase (exercice 3)",
          "stepBadge": "Ranger les événements par phase (exercice 3)",
          "paragraphText": "L'exercice 3 demande de classer les événements du cycle menstruel par phase.\nLa desquamation relève des menstrues, la formation du corps jaune de la phase lutéinique et l'expulsion de l'ovocyte II de la phase ovulatoire.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q6",
            "type": "mcq",
            "prompt": "La formation du corps jaune se situe dans :",
            "options": [
              "Les menstrues",
              "La phase folliculaire",
              "Aucune phase du cycle",
              "La phase lutéinique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corps jaune se forme après l'ovulation, donc en phase lutéinique, comme le classement de l'exercice 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q1",
          "type": "mcq",
          "prompt": "Les menstrues correspondent à :",
          "options": [
            "L'expulsion de l'ovocyte II",
            "La formation du corps jaune",
            "La desquamation de l'endomètre accompagnée d'un écoulement de sang",
            "La sécrétion de GnRH"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du cycle utérin et situation d'apprentissage."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q2",
          "type": "mcq",
          "prompt": "Les menstrues durent en moyenne :",
          "options": [
            "3 à 5 jours",
            "1 à 2 jours",
            "10 à 12 jours",
            "14 jours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse du cycle utérin, phase folliculaire."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q3",
          "type": "mcq",
          "prompt": "Après les menstrues, l'endomètre en reconstruction présente :",
          "options": [
            "Des glandes en doigts de gant et de nouveaux vaisseaux",
            "Une desquamation continue",
            "Uniquement du mucus",
            "Aucun vaisseau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse du cycle utérin, phase folliculaire."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q4",
          "type": "mcq",
          "prompt": "La dentelle utérine se caractérise par :",
          "options": [
            "Un endomètre très mince sans glandes",
            "Un écoulement de sang abondant",
            "Des vaisseaux spiralés, des glandes tortueuses et la sécrétion de mucus et de glycogène",
            "L'absence de vaisseaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du cycle utérin, phase lutéinique."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q5",
          "type": "mcq",
          "prompt": "Sans fécondation, au 28e jour, on observe :",
          "options": [
            "L'ovulation",
            "La desquamation de l'endomètre et l'apparition des menstrues",
            "La persistance définitive de la dentelle",
            "La formation d'un nouveau follicule mûr expulsé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Fin de l'analyse du cycle utérin."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q6",
          "type": "mcq",
          "prompt": "La formation du corps jaune se situe dans :",
          "options": [
            "Les menstrues",
            "La phase folliculaire",
            "Aucune phase du cycle",
            "La phase lutéinique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corps jaune se forme après l'ovulation, donc en phase lutéinique, comme le classement de l'exercice 3."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03",
      "order": 3,
      "title": "Le cycle hormonal : œstradiol, progestérone, FSH et LH",
      "summary": "Suivre l'évolution des hormones ovariennes et hypophysaires au cours du cycle et retenir le rôle déclencheur du pic de LH.",
      "conceptExplanation": "Les hormones ovariennes sont l'œstradiol et la progestérone. Durant la phase folliculaire, le taux d'œstradiol, d'abord faible, augmente progressivement pour atteindre un pic au 12e jour puis diminue, tandis que le taux de progestérone est très faible et constant. Pendant la phase lutéinique, l'œstradiol atteint un second pic vers le 21e jour puis baisse ; la progestérone augmente pour atteindre un pic au 21e jour et baisse à partir du 23e jour.\nLes hormones hypophysaires sont la FSH et la LH. Pendant la phase folliculaire, la FSH atteint un pic vers le 10e jour, puis un second pic au 13e jour, juste avant l'ovulation ; la LH augmente brusquement pour atteindre un pic avant l'ovulation, au 13e jour, supérieur à celui de la FSH. Pendant la phase lutéinique, les taux de FSH et de LH sont faibles, celui de la LH restant supérieur.\nL'activité d'application retient que le pic de LH déclenche l'ovulation et que la FSH permet la maturation des follicules, et qu'il est faux de dire que la FSH et la LH sont des hormones ovariennes ou que la progestérone est élevée en phase folliculaire.",
      "keyRule": "Œstradiol : pic au 12e jour puis second pic au 21e ; progestérone : pic au 21e jour ; FSH : maturation des follicules ; pic de LH au 13e jour : il déclenche l'ovulation.",
      "formulas": [],
      "workedExample": {
        "title": "Vrai ou faux sur les hormones (activité d'application)",
        "statement": "Juge les affirmations : la FSH et la LH sont des hormones ovariennes ; le pic de LH déclenche l'ovulation ; la FSH permet la maturation des follicules ; le taux de progestérone est élevé pendant la phase folliculaire.",
        "methodSteps": [
          "Faux : la FSH et la LH sont des hormones hypophysaires.",
          "Vrai : le pic de LH déclenche l'ovulation et la FSH permet la maturation des follicules.",
          "Faux : la progestérone est très faible et constante pendant la phase folliculaire."
        ],
        "conclusion": "Corrigé de l'activité d'application de la partie I : faux, vrai, vrai, faux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les hormones ovariennes",
          "stepTheme": "Les hormones ovariennes",
          "stepBadge": "Les hormones ovariennes",
          "paragraphText": "Les hormones ovariennes sont sécrétées par les ovaires.\nCe sont l'œstradiol et la progestérone, dont les taux varient au cours du cycle.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q1",
            "type": "mcq",
            "prompt": "Les hormones ovariennes sont :",
            "options": [
              "La FSH et la LH",
              "La GnRH et la FSH",
              "L'œstradiol et la progestérone",
              "Uniquement la LH"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Présentation du cycle hormonal dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le pic d'œstradiol au 12e jour",
          "stepTheme": "Le pic d'œstradiol au 12e jour",
          "stepBadge": "Le pic d'œstradiol au 12e jour",
          "paragraphText": "Durant la phase folliculaire, le taux d'œstradiol augmente progressivement.\nIl atteint un taux maximum (pic) au 12e jour du cycle puis diminue, alors que la progestérone reste très faible et constante.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q2",
            "type": "mcq",
            "prompt": "Pendant la phase folliculaire, le taux d'œstradiol atteint son pic :",
            "options": [
              "Au 12e jour, puis il diminue",
              "Au 21e jour",
              "Au 28e jour",
              "Il reste nul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse du cycle hormonal, hormones ovariennes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le pic de progestérone au 21e jour",
          "stepTheme": "Le pic de progestérone au 21e jour",
          "stepBadge": "Le pic de progestérone au 21e jour",
          "paragraphText": "Pendant la phase lutéinique, le taux de progestérone augmente.\nIl atteint un pic au 21e jour du cycle, en même temps que le second pic d'œstradiol, puis baisse à partir du 23e jour.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q3",
            "type": "mcq",
            "prompt": "Le pic de progestérone se situe :",
            "options": [
              "Au 12e jour",
              "Au 13e jour",
              "Au 1er jour des menstrues uniquement",
              "Au 21e jour du cycle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse du cycle hormonal, phase lutéinique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La FSH et la maturation des follicules",
          "stepTheme": "La FSH et la maturation des follicules",
          "stepBadge": "La FSH et la maturation des follicules",
          "paragraphText": "La FSH est l'Hormone de Stimulation Folliculaire, une hormone hypophysaire.\nL'activité d'application retient qu'elle permet la maturation des follicules ; son taux atteint un pic vers le 10e jour, puis un second pic au 13e jour.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q4",
            "type": "mcq",
            "prompt": "La FSH permet :",
            "options": [
              "La desquamation de l'endomètre",
              "La maturation des follicules",
              "La formation de la dentelle à elle seule",
              "La sécrétion de GnRH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l'activité d'application : affirmation 3 vraie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le pic de LH déclenche l'ovulation",
          "stepTheme": "Le pic de LH déclenche l'ovulation",
          "stepBadge": "Le pic de LH déclenche l'ovulation",
          "paragraphText": "Le taux de LH augmente brusquement pour atteindre un pic avant l'ovulation, au 13e jour du cycle.\nCe pic de LH, supérieur à celui de la FSH, déclenche l'ovulation.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q5",
            "type": "mcq",
            "prompt": "Le pic de LH, au 13e jour, a pour rôle de :",
            "options": [
              "Provoquer les menstrues",
              "Déclencher l'ovulation",
              "Former le corps blanc",
              "Bloquer la maturation des follicules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l'activité d'application : affirmation 2 vraie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La progestérone n'est pas élevée en phase folliculaire",
          "stepTheme": "La progestérone n'est pas élevée en phase folliculaire",
          "stepBadge": "La progestérone n'est pas élevée en phase folliculaire",
          "paragraphText": "Piège corrigé par l'activité : affirmer que le taux de progestérone est élevé pendant la phase folliculaire est faux.\nPendant cette phase, son taux est très faible et constant ; il n'augmente qu'en phase lutéinique, grâce au corps jaune.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q6",
            "type": "mcq",
            "prompt": "Pendant la phase folliculaire, le taux de progestérone est :",
            "options": [
              "Élevé avec un pic au 12e jour",
              "Supérieur à celui de l'œstradiol",
              "Identique à celui de la phase lutéinique",
              "Très faible et constant"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse du cycle hormonal et corrigé de l'activité (affirmation 4 fausse)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q1",
          "type": "mcq",
          "prompt": "Les hormones ovariennes sont :",
          "options": [
            "La FSH et la LH",
            "La GnRH et la FSH",
            "L'œstradiol et la progestérone",
            "Uniquement la LH"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Présentation du cycle hormonal dans la leçon."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q2",
          "type": "mcq",
          "prompt": "Pendant la phase folliculaire, le taux d'œstradiol atteint son pic :",
          "options": [
            "Au 12e jour, puis il diminue",
            "Au 21e jour",
            "Au 28e jour",
            "Il reste nul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse du cycle hormonal, hormones ovariennes."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q3",
          "type": "mcq",
          "prompt": "Le pic de progestérone se situe :",
          "options": [
            "Au 12e jour",
            "Au 13e jour",
            "Au 1er jour des menstrues uniquement",
            "Au 21e jour du cycle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse du cycle hormonal, phase lutéinique."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q4",
          "type": "mcq",
          "prompt": "La FSH permet :",
          "options": [
            "La desquamation de l'endomètre",
            "La maturation des follicules",
            "La formation de la dentelle à elle seule",
            "La sécrétion de GnRH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l'activité d'application : affirmation 3 vraie."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q5",
          "type": "mcq",
          "prompt": "Le pic de LH, au 13e jour, a pour rôle de :",
          "options": [
            "Provoquer les menstrues",
            "Déclencher l'ovulation",
            "Former le corps blanc",
            "Bloquer la maturation des follicules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l'activité d'application : affirmation 2 vraie."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q6",
          "type": "mcq",
          "prompt": "Pendant la phase folliculaire, le taux de progestérone est :",
          "options": [
            "Élevé avec un pic au 12e jour",
            "Supérieur à celui de l'œstradiol",
            "Identique à celui de la phase lutéinique",
            "Très faible et constant"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse du cycle hormonal et corrigé de l'activité (affirmation 4 fausse)."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04",
      "order": 4,
      "title": "La régulation hormonale et les anomalies de reproduction",
      "summary": "Expliquer la chaîne hypothalamus, GnRH, antéhypophyse, FSH et LH, ovaires, avec rétrocontrôles, puis les anomalies de Madame E.",
      "conceptExplanation": "L'hypothalamus libère par voie sanguine la GnRH, qui agit sur l'antéhypophyse ; celle-ci libère la FSH et la LH, les gonadostimulines. L'ablation de l'antéhypophyse entraîne l'atrophie des ovaires et l'arrêt du cycle ovarien, et sa greffe entraîne la reprise : l'antéhypophyse contrôle les ovaires par voie sanguine. La stimulation électrique de l'hypothalamus rend la sécrétion de FSH et de LH importante et les extraits hypothalamiques donnent une sécrétion normale : l'hypothalamus contrôle l'antéhypophyse grâce à la GnRH.\nLa FSH agit sur la croissance et la maturation des follicules ; la LH permet l'ovulation par son pic et la transformation du follicule rompu en corps jaune. Les cellules folliculaires sécrètent l'œstradiol, qui épaissit l'endomètre ; le corps jaune produit œstradiol et progestérone, qui favorisent la dentelle utérine.\nPar rétrocontrôle, les ovaires agissent sur l'antéhypophyse : de fortes quantités d'œstradiol et de progestérone donnent une faible sécrétion de FSH et de LH (feed-back négatif), tandis que de fortes quantités d'œstradiol seul donnent une sécrétion importante de FSH et de LH (feed-back positif), comme le confirment les résultats des expériences 5 et 6 et l'activité sur la régulation (les œstrogènes agissent par rétrocontrôle négatif ou positif ; la sécrétion de FSH et de LH est sous le contrôle de la GnRH).\nChez Madame E, qui a des difficultés pour avoir un enfant, il n'y a pas de pic de progestérone en phase lutéinique, le pic d'œstradiol est faible et il n'y a pas de pic de FSH ni de LH : pas de maturation folliculaire, pas d'ovulation, pas de dentelle favorable à la nidation, d'où des anomalies comme l'avortement spontané et la stérilité, par insuffisance hormonale.",
      "keyRule": "Chaîne de commande : GnRH hypothalamique, FSH et LH hypophysaires, hormones ovariennes, avec rétrocontrôles négatif et positif ; sans pics hormonaux, pas d'ovulation ni de nidation.",
      "formulas": [],
      "workedExample": {
        "title": "Vrai ou faux sur la régulation (activité d'application)",
        "statement": "Juge : la FSH déclenche la sécrétion de GnRH ; les œstrogènes agissent par rétrocontrôle négatif ou positif ; la progestérone agit par rétrocontrôle positif ; la sécrétion de FSH et de LH est sous le contrôle de la GnRH.",
        "methodSteps": [
          "Faux : c'est la GnRH qui contrôle la sécrétion de FSH et de LH, pas l'inverse.",
          "Vrai : les œstrogènes agissent par rétrocontrôle négatif ou positif sur le complexe hypothalamo-hypophysaire.",
          "Faux pour la progestérone en rétrocontrôle positif ; vrai pour le contrôle par la GnRH."
        ],
        "conclusion": "Corrigé de l'activité sur la régulation : faux, vrai, faux, vrai."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La GnRH de l'hypothalamus",
          "stepTheme": "La GnRH de l'hypothalamus",
          "stepBadge": "La GnRH de l'hypothalamus",
          "paragraphText": "• GnRH : Hormone de libération des gonadotrophines, sécrétée par l'hypothalamus.\nVéhiculée par le sang, elle agit sur l'antéhypophyse, qui libère à son tour la FSH et la LH.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q1",
            "type": "mcq",
            "prompt": "La GnRH est sécrétée par :",
            "options": [
              "L'hypothalamus, et elle agit sur l'antéhypophyse",
              "Les ovaires",
              "Le corps jaune",
              "L'endomètre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Interprétation de l'expérience 3 et schéma fonctionnel de la régulation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'antéhypophyse contrôle les ovaires par voie sanguine",
          "stepTheme": "L'antéhypophyse contrôle les ovaires par voie sanguine",
          "stepBadge": "L'antéhypophyse contrôle les ovaires par voie sanguine",
          "paragraphText": "L'ablation de l'antéhypophyse entraîne l'atrophie des ovaires et l'arrêt du cycle ovarien.\nSa greffe après ablation entraîne la reprise du cycle : le contrôle se fait par voie sanguine, grâce à la FSH et à la LH, les gonadostimulines.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q2",
            "type": "mcq",
            "prompt": "La greffe d'antéhypophyse après ablation entraîne :",
            "options": [
              "L'arrêt définitif du cycle",
              "Uniquement des menstrues",
              "La reprise du cycle ovarien, preuve d'un contrôle par voie sanguine",
              "L'atrophie des ovaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Expériences 1 et 2 et leur interprétation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Les rôles respectifs de la FSH et de la LH",
          "stepTheme": "Les rôles respectifs de la FSH et de la LH",
          "stepBadge": "Les rôles respectifs de la FSH et de la LH",
          "paragraphText": "La FSH agit sur la croissance et la maturation des follicules pendant la phase folliculaire.\nLa LH permet l'ovulation par son pic et la transformation du follicule rompu en corps jaune au cours de la phase lutéinique.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q3",
            "type": "mcq",
            "prompt": "Dans la régulation, la LH permet :",
            "options": [
              "Uniquement la croissance des follicules",
              "La sécrétion de GnRH",
              "La desquamation de l'endomètre",
              "L'ovulation par son pic et la transformation du follicule rompu en corps jaune"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Schéma fonctionnel simplifié de la régulation des cycles sexuels."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rétrocontrôle négatif et le rétrocontrôle positif",
          "stepTheme": "Le rétrocontrôle négatif et le rétrocontrôle positif",
          "stepBadge": "Le rétrocontrôle négatif et le rétrocontrôle positif",
          "paragraphText": "L'injection de fortes quantités d'œstradiol et de progestérone donne une faible sécrétion de FSH et de LH : le feed-back est négatif.\nL'injection de fortes quantités d'œstradiol seul donne une sécrétion importante de FSH et de LH : les œstrogènes agissent donc aussi par rétrocontrôle positif, comme le retient l'activité d'application.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q4",
            "type": "mcq",
            "prompt": "De fortes quantités d'œstradiol seul entraînent, selon l'expérience 6 :",
            "options": [
              "Une faible sécrétion de FSH et de LH",
              "Une sécrétion importante de FSH et de LH, donc un rétrocontrôle positif",
              "L'arrêt de la GnRH uniquement",
              "Aucun effet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat de l'expérience 6 et corrigé de l'activité sur la régulation (affirmation 2 vraie)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ce n'est pas la FSH qui déclenche la GnRH",
          "stepTheme": "Ce n'est pas la FSH qui déclenche la GnRH",
          "stepBadge": "Ce n'est pas la FSH qui déclenche la GnRH",
          "paragraphText": "Piège corrigé par l'activité : la FSH ne déclenche pas la sécrétion de GnRH.\nLe sens de la commande est inverse : la sécrétion de FSH et de LH est sous le contrôle de la GnRH hypothalamique.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q5",
            "type": "mcq",
            "prompt": "La sécrétion de FSH et de LH est sous le contrôle :",
            "options": [
              "De la FSH elle-même",
              "De l'endomètre",
              "De la GnRH de l'hypothalamus",
              "Du corps blanc"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Corrigé de l'activité sur la régulation : affirmations 1 fausse et 4 vraie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Madame E : l'absence de pics hormonaux",
          "stepTheme": "Madame E : l'absence de pics hormonaux",
          "stepBadge": "Madame E : l'absence de pics hormonaux",
          "paragraphText": "Chez Madame E, il n'y a pas de pic de FSH ni de LH et le pic d'œstradiol est faible.\nSans pic de FSH, la croissance et la maturation des follicules sont bloquées ; sans pic de LH, il n'y a pas d'ovulation ; elle est exposée à l'avortement spontané et à la stérilité par insuffisance hormonale.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q6",
            "type": "mcq",
            "prompt": "Chez Madame E, l'absence de pic de LH entraîne :",
            "options": [
              "L'absence d'ovulation",
              "Une double ovulation",
              "Une dentelle utérine parfaite",
              "Uniquement des menstrues prolongées"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Interprétation des dosages de Madame E dans la partie sur les anomalies."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q1",
          "type": "mcq",
          "prompt": "La GnRH est sécrétée par :",
          "options": [
            "L'hypothalamus, et elle agit sur l'antéhypophyse",
            "Les ovaires",
            "Le corps jaune",
            "L'endomètre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Interprétation de l'expérience 3 et schéma fonctionnel de la régulation."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q2",
          "type": "mcq",
          "prompt": "La greffe d'antéhypophyse après ablation entraîne :",
          "options": [
            "L'arrêt définitif du cycle",
            "Uniquement des menstrues",
            "La reprise du cycle ovarien, preuve d'un contrôle par voie sanguine",
            "L'atrophie des ovaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Expériences 1 et 2 et leur interprétation."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q3",
          "type": "mcq",
          "prompt": "Dans la régulation, la LH permet :",
          "options": [
            "Uniquement la croissance des follicules",
            "La sécrétion de GnRH",
            "La desquamation de l'endomètre",
            "L'ovulation par son pic et la transformation du follicule rompu en corps jaune"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Schéma fonctionnel simplifié de la régulation des cycles sexuels."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q4",
          "type": "mcq",
          "prompt": "De fortes quantités d'œstradiol seul entraînent, selon l'expérience 6 :",
          "options": [
            "Une faible sécrétion de FSH et de LH",
            "Une sécrétion importante de FSH et de LH, donc un rétrocontrôle positif",
            "L'arrêt de la GnRH uniquement",
            "Aucun effet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat de l'expérience 6 et corrigé de l'activité sur la régulation (affirmation 2 vraie)."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q5",
          "type": "mcq",
          "prompt": "La sécrétion de FSH et de LH est sous le contrôle :",
          "options": [
            "De la FSH elle-même",
            "De l'endomètre",
            "De la GnRH de l'hypothalamus",
            "Du corps blanc"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Corrigé de l'activité sur la régulation : affirmations 1 fausse et 4 vraie."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q6",
          "type": "mcq",
          "prompt": "Chez Madame E, l'absence de pic de LH entraîne :",
          "options": [
            "L'absence d'ovulation",
            "Une double ovulation",
            "Une dentelle utérine parfaite",
            "Uniquement des menstrues prolongées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Interprétation des dosages de Madame E dans la partie sur les anomalies."
        }
      ]
    }
  ]
};
