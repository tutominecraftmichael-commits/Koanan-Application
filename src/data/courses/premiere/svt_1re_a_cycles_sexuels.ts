import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère A_L4_Les cycles sexuels chez la femme.pdf (Mon école à la maison ; le document l’intitule « Leçon 2 ») ». Première A1 et A2.
// Fichier généré (scratchpad build_1re_a_svt_b.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_A_L04_CYCLES_SEXUELS_FEMME: CurriculumChapter = {
  "id": "premiere_a1_svt_l04_cycles_sexuels_femme",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 4,
  "title": "Leçon 4 : Les cycles sexuels chez la femme",
  "summary": "Cycle ovarien (follicules, ovulation, corps jaune), cycle utérin (règles, dentelle utérine), cycle hormonal (œstradiol, progestérone, FSH, LH), régulation par l’hypothalamus et l’antéhypophyse, rétrocontrôles et anomalies de la reproduction.",
  "officialVolumeHours": 7,
  "contentVersion": 2,
  "source": "SVT 1ère A_L4_Les cycles sexuels chez la femme.pdf (Mon école à la maison ; le document l’intitule « Leçon 2 »)",
  "points": [
    {
      "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01",
      "order": 1,
      "title": "Le cycle de l’ovaire",
      "summary": "Phase folliculaire, ovulation au 14e jour, phase lutéale et corps jaune.",
      "conceptExplanation": "Situation : une élève de 4e constate chaque mois un écoulement de sang par le vagin pendant au moins trois jours. Le gynécologue lui explique que c’est la manifestation extérieure du fonctionnement de l’appareil reproducteur de la femme.\n- L’appareil reproducteur de la femme fonctionne de façon cyclique : environ 28 jours. Trois cycles se déroulent en même temps : le cycle ovarien, le cycle utérin et le cycle hormonal. Chacun comprend deux phases séparées par l’ovulation.\n- Phase folliculaire (avant l’ovulation) : plusieurs follicules grandissent, un seul arrive à maturité. Elle dure 14 jours pour un cycle régulier de 28 jours.\n- Ovulation, vers le 14e jour : la paroi du follicule mûr se rompt et l’ovocyte II est expulsé.\n- Phase lutéale ou lutéinique (après l’ovulation) : le follicule rompu se referme et devient le corps jaune. Sans fécondation, le corps jaune dégénère en fin de cycle (corps blanc) ; s’il y a fécondation, il persiste.",
      "keyRule": "Phase folliculaire (follicules) → ovulation au 14e jour (ovocyte II expulsé) → phase lutéale (corps jaune).",
      "formulas": [],
      "workedExample": {
        "title": "Situer l’ovulation",
        "statement": "Dans un cycle régulier de 28 jours, quand a lieu l’ovulation et que devient ensuite le follicule ?",
        "methodSteps": [
          "La phase folliculaire dure 14 jours : l’ovulation a lieu vers le 14e jour.",
          "Le follicule rompu devient le corps jaune pendant la phase lutéale."
        ],
        "conclusion": "Ovulation vers le 14e jour, puis corps jaune jusqu’à la fin du cycle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Cycle sexuel",
          "stepTheme": "Trois cycles",
          "stepTitle": "Un fonctionnement cyclique",
          "paragraphText": "L’appareil reproducteur de la femme fonctionne par **cycles** d’environ **28 jours**. Trois cycles se déroulent **en même temps** : **ovarien**, **utérin** et **hormonal**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q1",
            "type": "mcq",
            "prompt": "Chez la femme, quels cycles se déroulent en même temps au cours d’un cycle sexuel ?",
            "options": [
              "Le cycle ovarien, le cycle utérin et le cycle hormonal",
              "Le cycle cardiaque et le cycle respiratoire",
              "Seulement le cycle des règles",
              "Le cycle du sommeil"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ovaire, utérus et hormones changent ensemble."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les hormones au cours d’un cycle de 28 jours",
            "caption": "En haut, les hormones de l’antéhypophyse ; en bas, les hormones de l’ovaire. Le pic de LH, vers le 13e jour, déclenche l’ovulation (14e jour).",
            "svgContent": "<svg viewBox=\"0 0 560 315\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Courbes de LH, FSH, œstradiol et progestérone au cours d’un cycle de 28 jours\"><line x1=\"60\" y1=\"120\" x2=\"520\" y2=\"120\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"282\" x2=\"520\" y2=\"282\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"18\" x2=\"290\" y2=\"290\" stroke=\"#94A3B8\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 5\"/><text x=\"290\" y=\"14\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">ovulation</text><polyline points=\"60.0,110.0 240.7,108.0 265.4,90.0 281.8,30.0 298.2,95.0 322.9,112.0 520.0,112.0\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"60.0,108.0 125.7,96.0 191.4,101.0 257.1,98.0 281.8,80.0 306.4,108.0 520.0,110.0\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-dasharray=\"6 4\"/><text x=\"267\" y=\"40\" font-size=\"11.5\" text-anchor=\"end\" font-weight=\"800\" fill=\"#F59E0B\">LH</text><text x=\"125.71428571428571\" y=\"88\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">FSH</text><text x=\"54\" y=\"70\" font-size=\"10\" text-anchor=\"end\" font-weight=\"700\" fill=\"currentColor\">Hypophyse</text><polyline points=\"60.0,262.0 158.6,250.0 224.3,215.0 257.1,170.0 290.0,225.0 322.9,238.0 405.0,205.0 470.7,235.0 520.0,262.0\" fill=\"none\" stroke=\"#8B5CF6\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"60.0,274.0 290.0,272.0 339.3,238.0 405.0,172.0 454.3,200.0 520.0,270.0\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"216.07142857142856\" y=\"186\" font-size=\"11.5\" text-anchor=\"end\" font-weight=\"800\" fill=\"#8B5CF6\">Œstradiol</text><text x=\"429.6428571428571\" y=\"166\" font-size=\"11.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#10B981\">Progestérone</text><text x=\"54\" y=\"225\" font-size=\"10\" text-anchor=\"end\" font-weight=\"700\" fill=\"currentColor\">Ovaire</text><text x=\"76.42857142857143\" y=\"300\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">J1</text><text x=\"175\" y=\"300\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">J7</text><text x=\"290\" y=\"300\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">J14</text><text x=\"404.99999999999994\" y=\"300\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">J21</text><text x=\"520\" y=\"300\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">J28</text><text x=\"175\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">phase folliculaire</text><text x=\"404.99999999999994\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">phase lutéale</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Phase folliculaire",
          "stepTheme": "Avant l’ovulation",
          "stepTitle": "La phase folliculaire",
          "paragraphText": "Pendant la **phase folliculaire**, plusieurs **follicules grandissent** dans l’ovaire ; **un seul** arrive à **maturité**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q2",
            "type": "mcq",
            "prompt": "Que se passe-t-il dans l’ovaire pendant la phase folliculaire ?",
            "options": [
              "Des follicules grandissent et un seul arrive à maturité",
              "Le corps jaune dégénère",
              "L’ovocyte est fécondé",
              "L’endomètre se détache"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Folliculaire : c’est la phase des follicules."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Ovulation",
          "stepTheme": "Définition",
          "stepTitle": "L’ovulation",
          "paragraphText": "L’**ovulation** est la **rupture du follicule mûr** et l’**expulsion de l’ovocyte II**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q3",
            "type": "mcq",
            "prompt": "Qu’est-ce que l’ovulation ?",
            "options": [
              "La rupture du follicule mûr et l’expulsion de l’ovocyte II",
              "L’écoulement de sang des règles",
              "La formation du corps jaune",
              "L’épaississement de l’endomètre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ovocyte quitte l’ovaire au moment de l’ovulation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "14e jour",
          "stepTheme": "Date",
          "stepTitle": "Le jour de l’ovulation",
          "paragraphText": "Dans un cycle régulier de **28 jours**, la phase folliculaire dure 14 jours : l’ovulation a lieu vers le **14e jour**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q4",
            "type": "mcq",
            "prompt": "Pour un cycle régulier de 28 jours, vers quel jour a lieu l’ovulation ?",
            "options": [
              "Vers le 14e jour",
              "Le 1er jour",
              "Le 28e jour",
              "Le 7e jour"
            ],
            "correctAnswerIndex": 0,
            "explanation": "28 jours : 14 jours avant, 14 jours après l’ovulation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Corps jaune",
          "stepTheme": "Après l’ovulation",
          "stepTitle": "Le corps jaune",
          "paragraphText": "Après l’ovulation, le **follicule rompu** se referme et devient le **corps jaune** : c’est la **phase lutéale** (ou lutéinique).",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q5",
            "type": "mcq",
            "prompt": "Que devient le follicule rompu après l’ovulation ?",
            "options": [
              "Il se transforme en corps jaune",
              "Il redevient un jeune follicule",
              "Il est expulsé avec l’ovocyte",
              "Il devient l’endomètre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lutéal vient de « luteus », jaune."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Corps blanc",
          "stepTheme": "Sans fécondation",
          "stepTitle": "Le sort du corps jaune",
          "paragraphText": "Sans fécondation, le corps jaune **dégénère** en fin de cycle et devient un **corps blanc**. S’il y a fécondation, il **persiste**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q6",
            "type": "mcq",
            "prompt": "À la fin d’un cycle sans fécondation, que devient le corps jaune ?",
            "options": [
              "Il dégénère et devient un corps blanc",
              "Il persiste et grossit",
              "Il libère un nouvel ovocyte",
              "Il se transforme en follicule mûr"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corps jaune ne persiste qu’en cas de fécondation."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Deux phases",
          "stepTheme": "Repère",
          "stepTitle": "Ce qui sépare les deux phases",
          "paragraphText": "Les deux phases du cycle, **folliculaire** puis **lutéale**, sont séparées par l’**ovulation**, et non par les règles.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q7",
            "type": "mcq",
            "prompt": "Quel événement sépare la phase folliculaire de la phase lutéale (lutéinique) ?",
            "options": [
              "L’ovulation",
              "Les règles",
              "La fécondation",
              "La nidation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avant l’ovulation : folliculaire ; après : lutéale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q1",
          "type": "mcq",
          "prompt": "Chez la femme, quels cycles se déroulent en même temps au cours d’un cycle sexuel ?",
          "options": [
            "Le cycle ovarien, le cycle utérin et le cycle hormonal",
            "Le cycle cardiaque et le cycle respiratoire",
            "Seulement le cycle des règles",
            "Le cycle du sommeil"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ovaire, utérus et hormones changent ensemble."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q2",
          "type": "mcq",
          "prompt": "Que se passe-t-il dans l’ovaire pendant la phase folliculaire ?",
          "options": [
            "Des follicules grandissent et un seul arrive à maturité",
            "Le corps jaune dégénère",
            "L’ovocyte est fécondé",
            "L’endomètre se détache"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Folliculaire : c’est la phase des follicules."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q3",
          "type": "mcq",
          "prompt": "Qu’est-ce que l’ovulation ?",
          "options": [
            "La rupture du follicule mûr et l’expulsion de l’ovocyte II",
            "L’écoulement de sang des règles",
            "La formation du corps jaune",
            "L’épaississement de l’endomètre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ovocyte quitte l’ovaire au moment de l’ovulation."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q4",
          "type": "mcq",
          "prompt": "Pour un cycle régulier de 28 jours, vers quel jour a lieu l’ovulation ?",
          "options": [
            "Vers le 14e jour",
            "Le 1er jour",
            "Le 28e jour",
            "Le 7e jour"
          ],
          "correctAnswerIndex": 0,
          "explanation": "28 jours : 14 jours avant, 14 jours après l’ovulation."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q5",
          "type": "mcq",
          "prompt": "Que devient le follicule rompu après l’ovulation ?",
          "options": [
            "Il se transforme en corps jaune",
            "Il redevient un jeune follicule",
            "Il est expulsé avec l’ovocyte",
            "Il devient l’endomètre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lutéal vient de « luteus », jaune."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q6",
          "type": "mcq",
          "prompt": "À la fin d’un cycle sans fécondation, que devient le corps jaune ?",
          "options": [
            "Il dégénère et devient un corps blanc",
            "Il persiste et grossit",
            "Il libère un nouvel ovocyte",
            "Il se transforme en follicule mûr"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corps jaune ne persiste qu’en cas de fécondation."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p01_q7",
          "type": "mcq",
          "prompt": "Quel événement sépare la phase folliculaire de la phase lutéale (lutéinique) ?",
          "options": [
            "L’ovulation",
            "Les règles",
            "La fécondation",
            "La nidation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avant l’ovulation : folliculaire ; après : lutéale."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02",
      "order": 2,
      "title": "Le cycle de l’utérus",
      "summary": "Règles, épaississement de l’endomètre, dentelle utérine.",
      "conceptExplanation": "- Au début du cycle (phase folliculaire), l’endomètre (muqueuse de l’utérus) se détache : c’est la desquamation, accompagnée d’un écoulement de sang : les menstrues ou règles, qui durent 3 à 5 jours en moyenne. Le premier jour des règles est le premier jour du cycle.\n- Après les règles, l’endomètre s’épaissit progressivement et se creuse de glandes en doigts de gant, dans lesquelles apparaissent des vaisseaux.\n- Pendant la phase lutéale, l’endomètre continue à s’épaissir jusqu’à son maximum : vaisseaux spiralés, glandes tortueuses qui sécrètent du mucus et du glycogène. Il prend l’aspect d’une dentelle : la dentelle utérine, prête à accueillir un embryon (nidation).\n- Sans fécondation, l’endomètre se détache vers le 28e jour : de nouvelles règles commencent.",
      "keyRule": "Règles (desquamation) → endomètre qui s’épaissit (doigts de gant) → dentelle utérine → règles s’il n’y a pas fécondation.",
      "formulas": [],
      "workedExample": {
        "title": "Décrire l’endomètre au 21e jour",
        "statement": "À quoi ressemble l’endomètre au 21e jour d’un cycle de 28 jours ?",
        "methodSteps": [
          "Le 21e jour est en phase lutéale.",
          "L’endomètre est très épais, ses vaisseaux sont spiralés et ses glandes tortueuses."
        ],
        "conclusion": "C’est la dentelle utérine, prête pour une éventuelle nidation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Menstrues",
          "stepTheme": "Règles",
          "stepTitle": "Les règles",
          "paragraphText": "Au début du cycle, l’**endomètre se détache** (desquamation) avec un **écoulement de sang** : ce sont les **menstrues** ou **règles**, qui durent 3 à 5 jours.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q1",
            "type": "mcq",
            "prompt": "Que sont les menstrues (règles) ?",
            "options": [
              "La destruction de la muqueuse utérine accompagnée d’un écoulement de sang",
              "L’ovulation",
              "La formation du corps jaune",
              "La fécondation de l’ovocyte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la manifestation visible du cycle."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le cycle sexuel en un coup d’œil (cycle de 28 jours)",
            "caption": "Les cycles de l’ovaire, de l’utérus et des hormones se déroulent en même temps.",
            "tableData": {
              "headers": [
                "Moment",
                "Ovaire",
                "Utérus (endomètre)",
                "Hormones"
              ],
              "rows": [
                [
                  "Règles (jours 1 à 4 environ)",
                  "Début de croissance des follicules",
                  "Desquamation et écoulement de sang",
                  "Œstradiol et progestérone au plus bas"
                ],
                [
                  "Phase folliculaire (jours 1 à 14)",
                  "Croissance des follicules, un seul mûrit",
                  "Épaississement, glandes en doigts de gant",
                  "Œstradiol en hausse (pic vers le 12e jour), progestérone faible"
                ],
                [
                  "Ovulation (14e jour)",
                  "Rupture du follicule mûr, expulsion de l’ovocyte II",
                  "Endomètre épais",
                  "Pic de LH (et de FSH) vers le 13e jour"
                ],
                [
                  "Phase lutéale (jours 15 à 28)",
                  "Corps jaune, puis corps blanc sans fécondation",
                  "Dentelle utérine",
                  "Progestérone élevée (pic vers le 21e jour), second pic d’œstradiol"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "Jour 1",
          "stepTheme": "Compter",
          "stepTitle": "Le premier jour du cycle",
          "paragraphText": "On compte le cycle à partir du **premier jour des règles**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q2",
            "type": "mcq",
            "prompt": "À partir de quel jour compte-t-on le début d’un cycle sexuel ?",
            "options": [
              "Le premier jour des règles",
              "Le jour de l’ovulation",
              "Le dernier jour des règles",
              "Le jour de la fécondation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Jour 1 = premier jour des règles."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Épaississement",
          "stepTheme": "Phase folliculaire",
          "stepTitle": "L’endomètre se reconstruit",
          "paragraphText": "Après les règles, l’endomètre **s’épaissit** et se creuse de **glandes en doigts de gant**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q3",
            "type": "mcq",
            "prompt": "Après les règles, pendant la phase folliculaire, comment évolue l’endomètre ?",
            "options": [
              "Il s’épaissit et se creuse de glandes en doigts de gant",
              "Il disparaît totalement",
              "Il reste détruit jusqu’à la fin du cycle",
              "Il devient un corps jaune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’endomètre se reconstruit après chaque règles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Dentelle utérine",
          "stepTheme": "Phase lutéale",
          "stepTitle": "La dentelle utérine",
          "paragraphText": "En phase lutéale, l’endomètre est **très épais**, avec des **vaisseaux spiralés** et des **glandes tortueuses** qui sécrètent mucus et glycogène : c’est la **dentelle utérine**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’aspect de l’endomètre en phase lutéale, très épais, avec des glandes tortueuses et des vaisseaux spiralés ?",
            "options": [
              "La dentelle utérine",
              "Le corps jaune",
              "Le follicule mûr",
              "La glaire cervicale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Son aspect rappelle une dentelle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Nidation",
          "stepTheme": "Rôle",
          "stepTitle": "À quoi sert la dentelle utérine ?",
          "paragraphText": "La dentelle utérine est prête à **accueillir l’embryon** : c’est la **nidation**, s’il y a eu fécondation.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q5",
            "type": "mcq",
            "prompt": "À quoi sert la dentelle utérine ?",
            "options": [
              "À accueillir l’embryon (nidation) s’il y a eu fécondation",
              "À produire les ovocytes",
              "À fabriquer la FSH",
              "À évacuer les règles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’embryon s’implante dans cette muqueuse riche."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Fin du cycle",
          "stepTheme": "28e jour",
          "stepTitle": "Sans fécondation",
          "paragraphText": "Sans fécondation, l’endomètre se **détache** vers le **28e jour** : de **nouvelles règles** commencent un nouveau cycle.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q6",
            "type": "mcq",
            "prompt": "En l’absence de fécondation, que se passe-t-il vers le 28e jour du cycle ?",
            "options": [
              "L’endomètre se détache : de nouvelles règles commencent",
              "L’ovulation a lieu",
              "Le corps jaune grossit",
              "L’endomètre devient une dentelle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fin d’un cycle est le début du suivant."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Classer",
          "stepTheme": "Exercice 3",
          "stepTitle": "Ce qui se passe pendant les règles",
          "paragraphText": "Pendant les **règles** : **desquamation** de la muqueuse utérine, taux d’**œstradiol** et de **progestérone au plus bas**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q7",
            "type": "mcq",
            "prompt": "Pendant les menstrues, quels événements observe-t-on ?",
            "options": [
              "La desquamation de la muqueuse utérine et des taux d’œstradiol et de progestérone au plus bas",
              "La formation du corps jaune et un pic de LH",
              "L’expulsion de l’ovocyte II",
              "Un pic de progestérone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les hormones ovariennes sont au plus bas : l’endomètre n’est plus entretenu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q1",
          "type": "mcq",
          "prompt": "Que sont les menstrues (règles) ?",
          "options": [
            "La destruction de la muqueuse utérine accompagnée d’un écoulement de sang",
            "L’ovulation",
            "La formation du corps jaune",
            "La fécondation de l’ovocyte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la manifestation visible du cycle."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q2",
          "type": "mcq",
          "prompt": "À partir de quel jour compte-t-on le début d’un cycle sexuel ?",
          "options": [
            "Le premier jour des règles",
            "Le jour de l’ovulation",
            "Le dernier jour des règles",
            "Le jour de la fécondation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Jour 1 = premier jour des règles."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q3",
          "type": "mcq",
          "prompt": "Après les règles, pendant la phase folliculaire, comment évolue l’endomètre ?",
          "options": [
            "Il s’épaissit et se creuse de glandes en doigts de gant",
            "Il disparaît totalement",
            "Il reste détruit jusqu’à la fin du cycle",
            "Il devient un corps jaune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’endomètre se reconstruit après chaque règles."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’aspect de l’endomètre en phase lutéale, très épais, avec des glandes tortueuses et des vaisseaux spiralés ?",
          "options": [
            "La dentelle utérine",
            "Le corps jaune",
            "Le follicule mûr",
            "La glaire cervicale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Son aspect rappelle une dentelle."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q5",
          "type": "mcq",
          "prompt": "À quoi sert la dentelle utérine ?",
          "options": [
            "À accueillir l’embryon (nidation) s’il y a eu fécondation",
            "À produire les ovocytes",
            "À fabriquer la FSH",
            "À évacuer les règles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’embryon s’implante dans cette muqueuse riche."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q6",
          "type": "mcq",
          "prompt": "En l’absence de fécondation, que se passe-t-il vers le 28e jour du cycle ?",
          "options": [
            "L’endomètre se détache : de nouvelles règles commencent",
            "L’ovulation a lieu",
            "Le corps jaune grossit",
            "L’endomètre devient une dentelle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fin d’un cycle est le début du suivant."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p02_q7",
          "type": "mcq",
          "prompt": "Pendant les menstrues, quels événements observe-t-on ?",
          "options": [
            "La desquamation de la muqueuse utérine et des taux d’œstradiol et de progestérone au plus bas",
            "La formation du corps jaune et un pic de LH",
            "L’expulsion de l’ovocyte II",
            "Un pic de progestérone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les hormones ovariennes sont au plus bas : l’endomètre n’est plus entretenu."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03",
      "order": 3,
      "title": "Le cycle des hormones",
      "summary": "Œstradiol et progestérone (ovaire) ; FSH et LH (antéhypophyse) ; le pic de LH.",
      "conceptExplanation": "- Hormones ovariennes : l’œstradiol et la progestérone. Hormones hypophysaires (antéhypophyse) : la FSH (hormone folliculo-stimulante) et la LH (hormone lutéinisante).\n- Œstradiol : faible au début, il augmente pendant la phase folliculaire et atteint un pic vers le 12e jour, puis diminue ; il remonte à un second pic vers le 21e jour, puis baisse en fin de cycle.\n- Progestérone : très faible et constante pendant la phase folliculaire ; elle augmente pendant la phase lutéale (produite par le corps jaune), avec un pic vers le 21e jour, puis baisse.\n- FSH : faible au départ, elle augmente, et atteint un pic juste avant l’ovulation, vers le 13e jour. Elle permet la croissance et la maturation des follicules.\n- LH : faible au début, elle augmente brusquement et atteint un pic vers le 13e jour, plus haut que celui de la FSH. Ce pic déclenche l’ovulation. En phase lutéale, FSH et LH sont faibles.\n- Vocabulaire : le document écrit « hormone lutéinique » ; le nom exact de la LH est hormone lutéinisante (elle transforme le follicule rompu en corps jaune).",
      "keyRule": "Ovaire : œstradiol (pic J12) et progestérone (pic J21). Antéhypophyse : FSH (follicules) et LH (pic J13 → ovulation).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’ovulation par les hormones",
        "statement": "Pourquoi l’ovulation a-t-elle lieu vers le 14e jour ?",
        "methodSteps": [
          "La FSH a fait mûrir un follicule pendant la phase folliculaire.",
          "Vers le 13e jour, un pic de LH provoque la rupture du follicule mûr."
        ],
        "conclusion": "Le pic de LH déclenche l’ovulation le lendemain environ."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Hormones",
          "stepTheme": "Deux sources",
          "stepTitle": "Les hormones du cycle",
          "paragraphText": "L’**ovaire** produit l’**œstradiol** et la **progestérone** ; l’**antéhypophyse** produit la **FSH** et la **LH**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q1",
            "type": "mcq",
            "prompt": "Quelles hormones sont produites par les ovaires ?",
            "options": [
              "L’œstradiol et la progestérone",
              "La FSH et la LH",
              "La GnRH",
              "L’insuline"
            ],
            "correctAnswerIndex": 0,
            "explanation": "FSH et LH viennent de l’antéhypophyse."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les hormones au cours d’un cycle de 28 jours",
            "caption": "En haut, les hormones de l’antéhypophyse ; en bas, les hormones de l’ovaire. Le pic de LH, vers le 13e jour, déclenche l’ovulation (14e jour).",
            "svgContent": "<svg viewBox=\"0 0 560 315\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Courbes de LH, FSH, œstradiol et progestérone au cours d’un cycle de 28 jours\"><line x1=\"60\" y1=\"120\" x2=\"520\" y2=\"120\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"282\" x2=\"520\" y2=\"282\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"18\" x2=\"290\" y2=\"290\" stroke=\"#94A3B8\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 5\"/><text x=\"290\" y=\"14\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">ovulation</text><polyline points=\"60.0,110.0 240.7,108.0 265.4,90.0 281.8,30.0 298.2,95.0 322.9,112.0 520.0,112.0\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"60.0,108.0 125.7,96.0 191.4,101.0 257.1,98.0 281.8,80.0 306.4,108.0 520.0,110.0\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-dasharray=\"6 4\"/><text x=\"267\" y=\"40\" font-size=\"11.5\" text-anchor=\"end\" font-weight=\"800\" fill=\"#F59E0B\">LH</text><text x=\"125.71428571428571\" y=\"88\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">FSH</text><text x=\"54\" y=\"70\" font-size=\"10\" text-anchor=\"end\" font-weight=\"700\" fill=\"currentColor\">Hypophyse</text><polyline points=\"60.0,262.0 158.6,250.0 224.3,215.0 257.1,170.0 290.0,225.0 322.9,238.0 405.0,205.0 470.7,235.0 520.0,262.0\" fill=\"none\" stroke=\"#8B5CF6\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"60.0,274.0 290.0,272.0 339.3,238.0 405.0,172.0 454.3,200.0 520.0,270.0\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"216.07142857142856\" y=\"186\" font-size=\"11.5\" text-anchor=\"end\" font-weight=\"800\" fill=\"#8B5CF6\">Œstradiol</text><text x=\"429.6428571428571\" y=\"166\" font-size=\"11.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#10B981\">Progestérone</text><text x=\"54\" y=\"225\" font-size=\"10\" text-anchor=\"end\" font-weight=\"700\" fill=\"currentColor\">Ovaire</text><text x=\"76.42857142857143\" y=\"300\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">J1</text><text x=\"175\" y=\"300\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">J7</text><text x=\"290\" y=\"300\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">J14</text><text x=\"404.99999999999994\" y=\"300\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">J21</text><text x=\"520\" y=\"300\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">J28</text><text x=\"175\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">phase folliculaire</text><text x=\"404.99999999999994\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">phase lutéale</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Œstradiol",
          "stepTheme": "Pics",
          "stepTitle": "L’œstradiol",
          "paragraphText": "L’**œstradiol** augmente pendant la phase folliculaire et atteint un **pic vers le 12e jour** ; il a un **second pic vers le 21e jour**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q2",
            "type": "mcq",
            "prompt": "D’après les courbes d’un cycle de 28 jours, quand l’œstradiol atteint-il son premier pic ?",
            "options": [
              "Vers le 12e jour, juste avant l’ovulation",
              "Le 1er jour",
              "Le 28e jour",
              "Il n’a jamais de pic"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Premier pic avant l’ovulation, second en phase lutéale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Progestérone",
          "stepTheme": "Phase lutéale",
          "stepTitle": "La progestérone",
          "paragraphText": "La **progestérone** reste faible avant l’ovulation ; produite par le **corps jaune**, elle est **élevée en phase lutéale** (pic vers le 21e jour).",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q3",
            "type": "mcq",
            "prompt": "Pendant quelle phase le taux de progestérone est-il élevé ?",
            "options": [
              "La phase lutéale, grâce au corps jaune",
              "La phase folliculaire",
              "Pendant les règles",
              "Il est élevé tout le cycle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pas de corps jaune, pas de progestérone."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Pic de LH",
          "stepTheme": "Ovulation",
          "stepTitle": "Le pic de LH",
          "paragraphText": "La **LH** augmente **brusquement** vers le **13e jour** : ce **pic de LH déclenche l’ovulation**. Il est plus haut que celui de la FSH.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q4",
            "type": "mcq",
            "prompt": "Quel événement hormonal déclenche l’ovulation ?",
            "options": [
              "Le pic de LH",
              "Le pic de progestérone",
              "La chute de la FSH",
              "Le début des règles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pic de LH précède de peu l’ovulation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "FSH",
          "stepTheme": "Rôle",
          "stepTitle": "Le rôle de la FSH",
          "paragraphText": "La **FSH** (hormone folliculo-stimulante) permet la **croissance** et la **maturation des follicules**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q5",
            "type": "mcq",
            "prompt": "Quel est le rôle de la FSH ?",
            "options": [
              "Elle stimule la croissance et la maturation des follicules",
              "Elle déclenche les règles",
              "Elle est produite par l’ovaire",
              "Elle forme directement la dentelle utérine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Folliculo-stimulante : elle stimule les follicules."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Activité",
          "stepTitle": "D’où viennent la FSH et la LH ?",
          "paragraphText": "« La FSH et la LH sont des hormones ovariennes » : **faux**. Elles sont produites par l’**antéhypophyse** et agissent sur l’ovaire.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q6",
            "type": "mcq",
            "prompt": "« La FSH et la LH sont des hormones ovariennes. » Vrai ou faux ?",
            "options": [
              "Faux : elles sont produites par l’antéhypophyse",
              "Vrai",
              "Faux : elles sont produites par l’utérus",
              "Vrai, mais seulement après l’ovulation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elles agissent SUR l’ovaire mais n’en viennent pas."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "LH",
          "stepTheme": "Vocabulaire",
          "stepTitle": "Le vrai nom de la LH",
          "paragraphText": "Le document écrit « hormone lutéinique » : le nom exact est **hormone lutéinisante**. Elle provoque l’ovulation et la formation du **corps jaune**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q7",
            "type": "mcq",
            "prompt": "Que signifie LH, et quel est son rôle ?",
            "options": [
              "Hormone lutéinisante : elle provoque l’ovulation et la formation du corps jaune",
              "Hormone de la lactation : elle produit le lait",
              "Hormone de libération : elle vient de l’hypothalamus",
              "Hormone utérine : elle produit les règles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lutéinisante : elle forme le corps jaune (corpus luteum)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q1",
          "type": "mcq",
          "prompt": "Quelles hormones sont produites par les ovaires ?",
          "options": [
            "L’œstradiol et la progestérone",
            "La FSH et la LH",
            "La GnRH",
            "L’insuline"
          ],
          "correctAnswerIndex": 0,
          "explanation": "FSH et LH viennent de l’antéhypophyse."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q2",
          "type": "mcq",
          "prompt": "D’après les courbes d’un cycle de 28 jours, quand l’œstradiol atteint-il son premier pic ?",
          "options": [
            "Vers le 12e jour, juste avant l’ovulation",
            "Le 1er jour",
            "Le 28e jour",
            "Il n’a jamais de pic"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Premier pic avant l’ovulation, second en phase lutéale."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q3",
          "type": "mcq",
          "prompt": "Pendant quelle phase le taux de progestérone est-il élevé ?",
          "options": [
            "La phase lutéale, grâce au corps jaune",
            "La phase folliculaire",
            "Pendant les règles",
            "Il est élevé tout le cycle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pas de corps jaune, pas de progestérone."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q4",
          "type": "mcq",
          "prompt": "Quel événement hormonal déclenche l’ovulation ?",
          "options": [
            "Le pic de LH",
            "Le pic de progestérone",
            "La chute de la FSH",
            "Le début des règles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pic de LH précède de peu l’ovulation."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q5",
          "type": "mcq",
          "prompt": "Quel est le rôle de la FSH ?",
          "options": [
            "Elle stimule la croissance et la maturation des follicules",
            "Elle déclenche les règles",
            "Elle est produite par l’ovaire",
            "Elle forme directement la dentelle utérine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Folliculo-stimulante : elle stimule les follicules."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q6",
          "type": "mcq",
          "prompt": "« La FSH et la LH sont des hormones ovariennes. » Vrai ou faux ?",
          "options": [
            "Faux : elles sont produites par l’antéhypophyse",
            "Vrai",
            "Faux : elles sont produites par l’utérus",
            "Vrai, mais seulement après l’ovulation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elles agissent SUR l’ovaire mais n’en viennent pas."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p03_q7",
          "type": "mcq",
          "prompt": "Que signifie LH, et quel est son rôle ?",
          "options": [
            "Hormone lutéinisante : elle provoque l’ovulation et la formation du corps jaune",
            "Hormone de la lactation : elle produit le lait",
            "Hormone de libération : elle vient de l’hypothalamus",
            "Hormone utérine : elle produit les règles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lutéinisante : elle forme le corps jaune (corpus luteum)."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04",
      "order": 4,
      "title": "La régulation hormonale du cycle",
      "summary": "Hypothalamus, antéhypophyse, ovaires, utérus ; rétrocontrôles négatif et positif ; anomalies.",
      "conceptExplanation": "- Ablation de l’antéhypophyse : ovaires atrophiés, cycle ovarien arrêté ; une greffe le fait reprendre. L’antéhypophyse commande les ovaires par voie sanguine, avec la FSH et la LH (gonadostimulines).\n- Stimulation de l’hypothalamus ou injection de ses extraits : sécrétion de FSH et de LH. L’hypothalamus commande l’antéhypophyse par une hormone, la GnRH.\n- Ablation des ovaires : arrêt du cycle utérin ; des extraits ovariens le font reprendre. Les ovaires commandent l’utérus par l’œstradiol et la progestérone.\n- Fortes doses d’œstradiol et de progestérone : FSH et LH faibles. Les hormones ovariennes freinent l’antéhypophyse : rétrocontrôle négatif.\n- Fortes doses d’œstradiol seul : FSH et LH importantes. C’est un rétrocontrôle positif : il explique le pic de LH avant l’ovulation, quand l’œstradiol est très élevé.\n- Chaîne : hypothalamus (GnRH) → antéhypophyse (FSH, LH) → ovaires (œstradiol, progestérone) → utérus ; et action en retour des ovaires.\n- Anomalie : chez Madame E, qui n’arrive pas à avoir d’enfant, pas de pic de FSH ni de LH, faible pic d’œstradiol, pas de pic de progestérone : pas d’ovulation, endomètre insuffisant ; risque de stérilité et d’avortement spontané.\n- Correction du document : pour l’expérience 6 (œstradiol seul), il conclut à un rétrocontrôle négatif « car la sécrétion de FSH et de LH est faible » ; or le résultat montre une sécrétion importante : c’est un rétrocontrôle positif.",
      "keyRule": "Hypothalamus → GnRH → antéhypophyse → FSH, LH → ovaires → œstradiol, progestérone → utérus. Œstradiol + progestérone : freinent (négatif) ; beaucoup d’œstradiol seul : stimule (positif).",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter une ablation",
        "statement": "L’ablation des ovaires arrête le cycle utérin ; des extraits ovariens le rétablissent. Concluez.",
        "methodSteps": [
          "Sans ovaires, l’utérus ne fonctionne plus : les ovaires le commandent.",
          "Des extraits suffisent : la commande passe par des substances transportées par le sang."
        ],
        "conclusion": "Les ovaires commandent l’utérus par des hormones : l’œstradiol et la progestérone."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Antéhypophyse",
          "stepTheme": "Expériences 1 et 2",
          "stepTitle": "L’antéhypophyse commande l’ovaire",
          "paragraphText": "Sans **antéhypophyse**, les ovaires s’**atrophient** et le cycle s’arrête ; une **greffe** le fait reprendre : elle agit par des **hormones** transportées par le sang, la **FSH** et la **LH**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q1",
            "type": "mcq",
            "prompt": "Chez une femelle, l’ablation de l’antéhypophyse entraîne l’atrophie des ovaires et l’arrêt du cycle ovarien ; une greffe d’antéhypophyse rétablit le cycle. Que conclure ?",
            "options": [
              "L’antéhypophyse commande les ovaires par des hormones transportées par le sang",
              "Les ovaires commandent l’antéhypophyse",
              "L’antéhypophyse n’a aucun rôle",
              "Les ovaires fonctionnent seuls"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une greffe (sans nerfs) suffit : la commande passe par le sang."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expériences sur la régulation du cycle",
            "caption": "Ablations, greffes et injections montrent qui commande qui.",
            "tableData": {
              "headers": [
                "Expérience",
                "Résultat",
                "Conclusion"
              ],
              "rows": [
                [
                  "Ablation de l’antéhypophyse",
                  "Ovaires atrophiés, cycle ovarien arrêté",
                  "L’antéhypophyse commande les ovaires"
                ],
                [
                  "Greffe d’antéhypophyse après ablation",
                  "Le cycle ovarien reprend",
                  "Elle agit par le sang : FSH et LH"
                ],
                [
                  "Stimulation ou extraits d’hypothalamus",
                  "Sécrétion de FSH et de LH",
                  "L’hypothalamus agit par la GnRH"
                ],
                [
                  "Ablation des ovaires, puis extraits ovariens",
                  "Cycle utérin arrêté, puis reprise",
                  "Les ovaires commandent l’utérus : œstradiol, progestérone"
                ],
                [
                  "Fortes doses d’œstradiol + progestérone",
                  "FSH et LH faibles",
                  "Rétrocontrôle négatif"
                ],
                [
                  "Fortes doses d’œstradiol seul",
                  "FSH et LH importantes",
                  "Rétrocontrôle positif (pic de LH)"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "GnRH",
          "stepTheme": "Expérience 3",
          "stepTitle": "L’hypothalamus commande l’antéhypophyse",
          "paragraphText": "Stimuler l’**hypothalamus** ou injecter ses extraits fait sécréter **FSH et LH** : l’hypothalamus agit sur l’antéhypophyse par la **GnRH**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q2",
            "type": "mcq",
            "prompt": "La stimulation de l’hypothalamus augmente la sécrétion de FSH et de LH ; des extraits d’hypothalamus ont le même effet. Par quelle hormone l’hypothalamus agit-il sur l’antéhypophyse ?",
            "options": [
              "La GnRH",
              "La progestérone",
              "L’œstradiol",
              "La LH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "GnRH : hormone de libération des gonadotrophines."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Ovaires et utérus",
          "stepTheme": "Expérience 4",
          "stepTitle": "Les ovaires commandent l’utérus",
          "paragraphText": "Sans ovaires, le cycle utérin s’**arrête** ; des **extraits ovariens** le font reprendre : les ovaires agissent par l’**œstradiol** et la **progestérone**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q3",
            "type": "mcq",
            "prompt": "L’ablation des ovaires arrête le cycle utérin ; l’injection d’extraits ovariens le fait reprendre. Comment les ovaires commandent-ils l’utérus ?",
            "options": [
              "Par des hormones : l’œstradiol et la progestérone",
              "Par des nerfs",
              "Ils ne le commandent pas",
              "Par la FSH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Des extraits suffisent : ce sont des hormones."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Rétrocontrôle négatif",
          "stepTheme": "Expérience 5",
          "stepTitle": "Les ovaires freinent l’hypophyse",
          "paragraphText": "Beaucoup d’**œstradiol et de progestérone** dans le sang **diminue** la sécrétion de FSH et de LH : c’est un **rétrocontrôle négatif**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q4",
            "type": "mcq",
            "prompt": "On injecte de fortes quantités d’œstradiol et de progestérone à une femelle : sa sécrétion de FSH et de LH devient faible. Comment appelle-t-on cette action des hormones ovariennes ?",
            "options": [
              "Un rétrocontrôle négatif",
              "Un rétrocontrôle positif",
              "Une ovulation",
              "Une nidation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Négatif : l’effet en retour diminue la sécrétion."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Rétrocontrôle positif",
          "stepTheme": "Erreur du document",
          "stepTitle": "Quand l’œstradiol stimule",
          "paragraphText": "Le document conclut « rétrocontrôle **négatif** » pour l’expérience 6 : c’est **faux**. Beaucoup d’**œstradiol seul** fait **augmenter** FSH et LH : **rétrocontrôle positif**, à l’origine du **pic de LH**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q5",
            "type": "mcq",
            "prompt": "On injecte de fortes quantités d’œstradiol seul à une femelle : sa sécrétion de FSH et de LH devient importante. De quel rétrocontrôle s’agit-il ?",
            "options": [
              "Un rétrocontrôle positif, comme celui qui provoque le pic de LH avant l’ovulation",
              "Un rétrocontrôle négatif",
              "Aucun rétrocontrôle",
              "Une ablation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La sécrétion augmente : le rétrocontrôle est positif."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "La chaîne",
          "stepTheme": "Schéma",
          "stepTitle": "Qui commande qui ?",
          "paragraphText": "**Hypothalamus** (GnRH) → **antéhypophyse** (FSH, LH) → **ovaires** (œstradiol, progestérone) → **utérus** ; les ovaires agissent **en retour** sur l’hypothalamus et l’antéhypophyse.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q6",
            "type": "mcq",
            "prompt": "Dans quel ordre les organes se commandent-ils dans la régulation du cycle sexuel ?",
            "options": [
              "Hypothalamus → antéhypophyse → ovaires → utérus",
              "Utérus → ovaires → hypothalamus → antéhypophyse",
              "Ovaires → hypothalamus → utérus → antéhypophyse",
              "Antéhypophyse → utérus → hypothalamus → ovaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "De haut en bas, chaque organe commande le suivant."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La régulation hormonale du cycle",
            "caption": "Chaque organe commande le suivant par une hormone transportée par le sang ; les hormones de l’ovaire agissent en retour sur l’hypothalamus et l’antéhypophyse.",
            "svgContent": "<svg viewBox=\"0 0 560 300\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Hypothalamus, GnRH, antéhypophyse, FSH et LH, ovaires, œstradiol et progestérone, utérus, rétrocontrôle\"><rect x=\"150\" y=\"10\" width=\"220\" height=\"46\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"260\" y=\"37\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Hypothalamus</text><line x1=\"260\" y1=\"58\" x2=\"260.0\" y2=\"75.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"260,84 265.0,75.0 255.0,75.0\" fill=\"#94A3B8\"/><text x=\"270\" y=\"76\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">GnRH</text><rect x=\"150\" y=\"88\" width=\"220\" height=\"46\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"260\" y=\"115\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Antéhypophyse</text><line x1=\"260\" y1=\"136\" x2=\"260.0\" y2=\"153.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"260,162 265.0,153.0 255.0,153.0\" fill=\"#94A3B8\"/><text x=\"270\" y=\"154\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">FSH, LH</text><rect x=\"150\" y=\"166\" width=\"220\" height=\"46\" rx=\"10\" fill=\"#EC4899\" fill-opacity=\"0.14\" stroke=\"#EC4899\" stroke-width=\"2\"/><text x=\"260\" y=\"185.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Ovaires</text><text x=\"260\" y=\"200.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">follicules, ovulation, corps jaune</text><line x1=\"260\" y1=\"214\" x2=\"260.0\" y2=\"231.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"260,240 265.0,231.0 255.0,231.0\" fill=\"#94A3B8\"/><text x=\"270\" y=\"232\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">œstradiol, progestérone</text><rect x=\"150\" y=\"244\" width=\"220\" height=\"46\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"260\" y=\"263.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Utérus</text><text x=\"260\" y=\"278.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">endomètre</text><path d=\"M372 189 L470 189 L470 60 L381 60\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\"/><line x1=\"395\" y1=\"60\" x2=\"382.0\" y2=\"60.0\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"373,60 382.0,65.0 382.0,55.0\" fill=\"#F59E0B\"/><line x1=\"470\" y1=\"111\" x2=\"381\" y2=\"111\" stroke=\"#F59E0B\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\"/><line x1=\"395\" y1=\"111\" x2=\"382.0\" y2=\"111.0\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"373,111 382.0,116.0 382.0,106.0\" fill=\"#F59E0B\"/><text x=\"478\" y=\"130\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#F59E0B\">rétro-</text><text x=\"478\" y=\"144\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#F59E0B\">contrôle</text></svg>"
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Madame E",
          "stepTheme": "Anomalie",
          "stepTitle": "Une femme qui n’arrive pas à avoir d’enfant",
          "paragraphText": "Chez Madame E : **pas de pic de LH** → **pas d’ovulation** ; **pas de pic de progestérone** → endomètre **non préparé** à la nidation. Risques : **stérilité**, **avortement spontané**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q7",
            "type": "mcq",
            "prompt": "Chez Madame E, qui n’arrive pas à avoir d’enfant, les dosages montrent : pas de pic de FSH ni de LH, un pic d’œstradiol faible, pas de pic de progestérone. Pourquoi n’est-elle pas enceinte ?",
            "options": [
              "Sans pic de LH, pas d’ovulation ; sans progestérone, l’endomètre n’est pas prêt pour la nidation",
              "Elle a trop d’hormones",
              "Son cycle est parfaitement normal",
              "Elle ovule deux fois par cycle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une insuffisance d’hormones peut causer la stérilité."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "methode",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Activité",
          "stepTitle": "GnRH ou FSH : qui commande ?",
          "paragraphText": "« La FSH déclenche la sécrétion de GnRH » : **faux**. C’est la **GnRH** (hypothalamus) qui déclenche la sécrétion de **FSH et de LH**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q8",
            "type": "mcq",
            "prompt": "« La FSH déclenche la sécrétion de GnRH. » Vrai ou faux ?",
            "options": [
              "Faux : c’est la GnRH qui déclenche la sécrétion de FSH et de LH",
              "Vrai",
              "Faux : la FSH n’a aucun lien avec l’hypophyse",
              "Vrai, seulement pendant les règles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’hypothalamus est au sommet de la chaîne."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q1",
          "type": "mcq",
          "prompt": "Chez une femelle, l’ablation de l’antéhypophyse entraîne l’atrophie des ovaires et l’arrêt du cycle ovarien ; une greffe d’antéhypophyse rétablit le cycle. Que conclure ?",
          "options": [
            "L’antéhypophyse commande les ovaires par des hormones transportées par le sang",
            "Les ovaires commandent l’antéhypophyse",
            "L’antéhypophyse n’a aucun rôle",
            "Les ovaires fonctionnent seuls"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une greffe (sans nerfs) suffit : la commande passe par le sang."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q2",
          "type": "mcq",
          "prompt": "La stimulation de l’hypothalamus augmente la sécrétion de FSH et de LH ; des extraits d’hypothalamus ont le même effet. Par quelle hormone l’hypothalamus agit-il sur l’antéhypophyse ?",
          "options": [
            "La GnRH",
            "La progestérone",
            "L’œstradiol",
            "La LH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "GnRH : hormone de libération des gonadotrophines."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q3",
          "type": "mcq",
          "prompt": "L’ablation des ovaires arrête le cycle utérin ; l’injection d’extraits ovariens le fait reprendre. Comment les ovaires commandent-ils l’utérus ?",
          "options": [
            "Par des hormones : l’œstradiol et la progestérone",
            "Par des nerfs",
            "Ils ne le commandent pas",
            "Par la FSH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Des extraits suffisent : ce sont des hormones."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q4",
          "type": "mcq",
          "prompt": "On injecte de fortes quantités d’œstradiol et de progestérone à une femelle : sa sécrétion de FSH et de LH devient faible. Comment appelle-t-on cette action des hormones ovariennes ?",
          "options": [
            "Un rétrocontrôle négatif",
            "Un rétrocontrôle positif",
            "Une ovulation",
            "Une nidation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Négatif : l’effet en retour diminue la sécrétion."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q5",
          "type": "mcq",
          "prompt": "On injecte de fortes quantités d’œstradiol seul à une femelle : sa sécrétion de FSH et de LH devient importante. De quel rétrocontrôle s’agit-il ?",
          "options": [
            "Un rétrocontrôle positif, comme celui qui provoque le pic de LH avant l’ovulation",
            "Un rétrocontrôle négatif",
            "Aucun rétrocontrôle",
            "Une ablation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sécrétion augmente : le rétrocontrôle est positif."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q6",
          "type": "mcq",
          "prompt": "Dans quel ordre les organes se commandent-ils dans la régulation du cycle sexuel ?",
          "options": [
            "Hypothalamus → antéhypophyse → ovaires → utérus",
            "Utérus → ovaires → hypothalamus → antéhypophyse",
            "Ovaires → hypothalamus → utérus → antéhypophyse",
            "Antéhypophyse → utérus → hypothalamus → ovaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "De haut en bas, chaque organe commande le suivant."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q7",
          "type": "mcq",
          "prompt": "Chez Madame E, qui n’arrive pas à avoir d’enfant, les dosages montrent : pas de pic de FSH ni de LH, un pic d’œstradiol faible, pas de pic de progestérone. Pourquoi n’est-elle pas enceinte ?",
          "options": [
            "Sans pic de LH, pas d’ovulation ; sans progestérone, l’endomètre n’est pas prêt pour la nidation",
            "Elle a trop d’hormones",
            "Son cycle est parfaitement normal",
            "Elle ovule deux fois par cycle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une insuffisance d’hormones peut causer la stérilité."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p04_q8",
          "type": "mcq",
          "prompt": "« La FSH déclenche la sécrétion de GnRH. » Vrai ou faux ?",
          "options": [
            "Faux : c’est la GnRH qui déclenche la sécrétion de FSH et de LH",
            "Vrai",
            "Faux : la FSH n’a aucun lien avec l’hypophyse",
            "Vrai, seulement pendant les règles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’hypothalamus est au sommet de la chaîne."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05",
      "order": 5,
      "title": "Évaluation : la courbe d’une hormone ovarienne",
      "summary": "Lire une courbe sur deux cycles, reconnaître la progestérone et son rôle.",
      "conceptExplanation": "Situation : le professeur donne la courbe du taux sanguin d’une hormone ovarienne chez une femme, sur deux cycles. Règles le 7 juin, le 5 juillet et le 2 août : chaque cycle dure 28 jours.\n- Analyse : du 7 au 20 juin, le taux est faible (environ 1 ng/mL) ; il augmente fortement ensuite jusqu’à environ 14 ng/mL vers la fin juin, reste élevé, puis chute brutalement juste avant les règles du 5 juillet. Le même profil se répète au cycle suivant (montée après le 18 juillet).\n- Le 20 juin est le 14e jour du cycle : c’est l’ovulation. L’hormone est donc faible en phase folliculaire et élevée en phase lutéale : c’est la progestérone, produite par le corps jaune.\n- Explication : après l’ovulation, le corps jaune sécrète la progestérone ; sans fécondation, il dégénère en fin de cycle et la progestérone chute, ce qui déclenche la desquamation de l’endomètre (règles).\n- Rôle : la progestérone, avec l’œstradiol, transforme l’endomètre en dentelle utérine prête pour la nidation.\n- Le document ne donne pas de corrigé pour cette évaluation : ce qui précède est la réponse attendue.\n- Exercice 3 (classer les événements) : phase folliculaire : œstradiol qui augmente jusqu’à son maximum, progestérone faible et constante, premier pic de FSH ; ovulation : pic de LH, expulsion de l’ovocyte II ; phase lutéale : formation du corps jaune ; menstrues : desquamation, œstradiol et progestérone au plus bas.",
      "keyRule": "Faible avant l’ovulation, élevée après, chute avant les règles : c’est la progestérone du corps jaune.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier l’hormone de la courbe",
        "statement": "Une hormone ovarienne est faible du 7 au 20 juin, élevée fin juin, et chute avant les règles du 5 juillet. Laquelle ?",
        "methodSteps": [
          "Règles le 7 juin : le 20 juin est le 14e jour, jour de l’ovulation.",
          "L’hormone n’est abondante qu’après l’ovulation, quand le corps jaune existe."
        ],
        "conclusion": "C’est la progestérone, sécrétée par le corps jaune."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Durée",
          "stepTheme": "Lire la courbe",
          "stepTitle": "Calculer la durée du cycle",
          "paragraphText": "Règles le **7 juin**, le **5 juillet** et le **2 août** : du 7 juin au 5 juillet il y a **28 jours**, comme du 5 juillet au 2 août.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q1",
            "type": "mcq",
            "prompt": "Sur une courbe, les règles commencent le 7 juin, le 5 juillet puis le 2 août. Quelle est la durée du cycle de cette femme ?",
            "options": [
              "28 jours",
              "30 jours",
              "14 jours",
              "35 jours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "23 jours restants en juin + 5 jours en juillet = 28 jours."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Une hormone ovarienne sur deux cycles",
            "caption": "Taux faible pendant la phase folliculaire, très élevé pendant la phase lutéale, puis chute juste avant les règles.",
            "svgContent": "<svg viewBox=\"0 0 560 270\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Taux d’une hormone ovarienne du 7 juin au 2 août : faible puis élevé à chaque cycle\"><line x1=\"60\" y1=\"230\" x2=\"530\" y2=\"230\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"46\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"54\" y=\"188\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">4</text><text x=\"54\" y=\"142\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">8</text><text x=\"54\" y=\"96\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">12</text><text x=\"54\" y=\"50\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">16</text><text x=\"56\" y=\"26\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">ng/mL</text><polyline points=\"60.0,218.5 85.2,212.8 110.4,224.3 169.1,212.8 219.5,74.8 236.3,69.0 261.4,69.0 290.8,218.5 295.0,218.5 320.2,212.8 345.4,224.3 404.1,212.8 454.5,74.8 471.3,69.0 496.4,69.0 525.8,218.5 530.0,218.5\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"235\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"60\" y=\"248\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">7 juin</text><line x1=\"169.10714285714283\" y1=\"230\" x2=\"169.10714285714283\" y2=\"235\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"169.10714285714283\" y=\"248\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">20 juin</text><line x1=\"295\" y1=\"230\" x2=\"295\" y2=\"235\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"295\" y=\"248\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">5 juil.</text><line x1=\"404.10714285714283\" y1=\"230\" x2=\"404.10714285714283\" y2=\"235\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"404.10714285714283\" y=\"248\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">18 juil.</text><line x1=\"530\" y1=\"230\" x2=\"530\" y2=\"235\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"530\" y=\"248\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">2 août</text><text x=\"60\" y=\"263\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">règles</text><text x=\"295\" y=\"263\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">règles</text><text x=\"530\" y=\"263\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">règles</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Analyse",
          "stepTheme": "Phases",
          "stepTitle": "Quand le taux est-il élevé ?",
          "paragraphText": "Le taux est **faible** jusqu’au 20 juin, puis **élevé** jusqu’à la fin du cycle : il est élevé pendant la **phase lutéale**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q2",
            "type": "mcq",
            "prompt": "Le taux d’une hormone ovarienne est faible (environ 1 ng/mL) du 7 au 20 juin, monte jusqu’à environ 14 ng/mL vers la fin juin, puis chute juste avant les règles du 5 juillet. À quelle phase correspond le taux élevé ?",
            "options": [
              "À la phase lutéale, après l’ovulation",
              "À la phase folliculaire",
              "Aux règles",
              "À aucune phase"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Après le 20 juin (ovulation), on est en phase lutéale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Ovulation",
          "stepTheme": "Calcul",
          "stepTitle": "La date de l’ovulation",
          "paragraphText": "Le **7 juin** est le 1er jour ; le **14e jour** est le **20 juin** (7 + 13) : c’est la date de l’**ovulation**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q3",
            "type": "mcq",
            "prompt": "Les règles ont commencé le 7 juin et le cycle dure 28 jours. Vers quelle date a lieu l’ovulation (14e jour) ?",
            "options": [
              "Vers le 20 juin",
              "Le 7 juin",
              "Le 5 juillet",
              "Le 30 juin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le 7 juin compte déjà pour le 1er jour : 7 + 13 = 20."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Progestérone",
          "stepTheme": "Identifier",
          "stepTitle": "De quelle hormone s’agit-il ?",
          "paragraphText": "Une hormone **faible avant l’ovulation**, **abondante en phase lutéale** et qui **chute avant les règles** : c’est la **progestérone**.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q4",
            "type": "mcq",
            "prompt": "Une hormone ovarienne reste faible avant l’ovulation, devient très abondante pendant la phase lutéale puis chute juste avant les règles. De quelle hormone s’agit-il ?",
            "options": [
              "La progestérone",
              "L’œstradiol",
              "La FSH",
              "La LH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’œstradiol, lui, a déjà un pic avant l’ovulation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Rôle",
          "stepTheme": "Déduire",
          "stepTitle": "Le rôle de la progestérone",
          "paragraphText": "La progestérone, avec l’œstradiol, transforme l’endomètre en **dentelle utérine** prête à accueillir l’embryon.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q5",
            "type": "mcq",
            "prompt": "Quel est le rôle de la progestérone dans le cycle sexuel ?",
            "options": [
              "Elle prépare l’endomètre en dentelle utérine pour la nidation",
              "Elle déclenche l’ovulation",
              "Elle fait mûrir les follicules",
              "Elle produit la GnRH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Progestérone : « pro-gestation », elle prépare la grossesse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Chute",
          "stepTheme": "Expliquer",
          "stepTitle": "Pourquoi la progestérone chute",
          "paragraphText": "Sans fécondation, le **corps jaune dégénère** : la progestérone **chute**, l’endomètre se détache et les **règles** arrivent.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q6",
            "type": "mcq",
            "prompt": "Pourquoi le taux de progestérone chute-t-il juste avant les règles quand il n’y a pas eu de fécondation ?",
            "options": [
              "Parce que le corps jaune qui la produit dégénère",
              "Parce que l’ovulation recommence",
              "Parce que la FSH augmente",
              "Parce que l’endomètre s’épaissit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Plus de corps jaune, plus de progestérone."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Classer",
          "stepTheme": "Exercice 3",
          "stepTitle": "Un événement de la phase folliculaire",
          "paragraphText": "Phase folliculaire : œstradiol qui augmente, **progestérone faible et constante**, premier pic de FSH. Ovulation : pic de LH, expulsion de l’ovocyte II. Phase lutéale : corps jaune.",
          "exercise": {
            "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q7",
            "type": "mcq",
            "prompt": "Lequel de ces événements se déroule pendant la phase folliculaire ?",
            "options": [
              "Le taux de progestérone reste faible et constant",
              "La formation du corps jaune",
              "L’expulsion de l’ovocyte II",
              "Le taux de progestérone atteint son pic"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avant l’ovulation, il n’y a pas encore de corps jaune pour produire la progestérone."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q1",
          "type": "mcq",
          "prompt": "Sur une courbe, les règles commencent le 7 juin, le 5 juillet puis le 2 août. Quelle est la durée du cycle de cette femme ?",
          "options": [
            "28 jours",
            "30 jours",
            "14 jours",
            "35 jours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "23 jours restants en juin + 5 jours en juillet = 28 jours."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q2",
          "type": "mcq",
          "prompt": "Le taux d’une hormone ovarienne est faible (environ 1 ng/mL) du 7 au 20 juin, monte jusqu’à environ 14 ng/mL vers la fin juin, puis chute juste avant les règles du 5 juillet. À quelle phase correspond le taux élevé ?",
          "options": [
            "À la phase lutéale, après l’ovulation",
            "À la phase folliculaire",
            "Aux règles",
            "À aucune phase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Après le 20 juin (ovulation), on est en phase lutéale."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q3",
          "type": "mcq",
          "prompt": "Les règles ont commencé le 7 juin et le cycle dure 28 jours. Vers quelle date a lieu l’ovulation (14e jour) ?",
          "options": [
            "Vers le 20 juin",
            "Le 7 juin",
            "Le 5 juillet",
            "Le 30 juin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le 7 juin compte déjà pour le 1er jour : 7 + 13 = 20."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q4",
          "type": "mcq",
          "prompt": "Une hormone ovarienne reste faible avant l’ovulation, devient très abondante pendant la phase lutéale puis chute juste avant les règles. De quelle hormone s’agit-il ?",
          "options": [
            "La progestérone",
            "L’œstradiol",
            "La FSH",
            "La LH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’œstradiol, lui, a déjà un pic avant l’ovulation."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q5",
          "type": "mcq",
          "prompt": "Quel est le rôle de la progestérone dans le cycle sexuel ?",
          "options": [
            "Elle prépare l’endomètre en dentelle utérine pour la nidation",
            "Elle déclenche l’ovulation",
            "Elle fait mûrir les follicules",
            "Elle produit la GnRH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Progestérone : « pro-gestation », elle prépare la grossesse."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q6",
          "type": "mcq",
          "prompt": "Pourquoi le taux de progestérone chute-t-il juste avant les règles quand il n’y a pas eu de fécondation ?",
          "options": [
            "Parce que le corps jaune qui la produit dégénère",
            "Parce que l’ovulation recommence",
            "Parce que la FSH augmente",
            "Parce que l’endomètre s’épaissit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plus de corps jaune, plus de progestérone."
        },
        {
          "id": "premiere_a1_svt_l04_cycles_sexuels_femme_p05_q7",
          "type": "mcq",
          "prompt": "Lequel de ces événements se déroule pendant la phase folliculaire ?",
          "options": [
            "Le taux de progestérone reste faible et constant",
            "La formation du corps jaune",
            "L’expulsion de l’ovocyte II",
            "Le taux de progestérone atteint son pic"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avant l’ovulation, il n’y a pas encore de corps jaune pour produire la progestérone."
        }
      ]
    }
  ]
};
