import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère A_L1_Le Reflexe conditionnel.pdf (Mon école à la maison) ». Première A1 et A2.
// Fichier généré (scratchpad build_1re_a_svt.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_A_L01_REFLEXE_CONDITIONNEL: CurriculumChapter = {
  "id": "premiere_a1_svt_l01_reflexe_conditionnel",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 1,
  "title": "Leçon 1 : Le réflexe conditionnel",
  "summary": "Expérience de Pavlov, stimulus absolu, neutre et conditionnel, réflexe inné et réflexe conditionnel, nouvelle liaison nerveuse dans le cortex, conditions d’installation, extinction et avantages.",
  "officialVolumeHours": 3.5,
  "contentVersion": 2,
  "source": "SVT 1ère A_L1_Le Reflexe conditionnel.pdf (Mon école à la maison)",
  "points": [
    {
      "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01",
      "order": 1,
      "title": "L’expérience de Pavlov",
      "summary": "Un son d’abord sans effet finit par faire saliver un chien : certains réflexes s’apprennent.",
      "conceptExplanation": "Situation : un élève de 1re A donne à manger à son chien chaque jour dans une assiette rouge. Deux mois après, le chien salive dès qu’il voit son maître avec l’assiette rouge. Les élèves veulent comprendre ce comportement.\n- Un réflexe est une réaction involontaire, inconsciente, brusque et automatique, déclenchée par une stimulation appropriée.\n- Dispositif de Pavlov : un chien affamé est maintenu debout par des sangles dans un local isolé (bruit, lumière et température constants). Un tube fin fixé sur un de ses canaux salivaires (fistule) permet de mesurer précisément la salive. Un métronome est déclenché à distance.\n- Résultats : la nourriture dans la bouche provoque la salivation en quelques secondes ; le son du métronome seul ne provoque pas de salivation ; après plusieurs associations « son puis nourriture », le son seul suffit à faire saliver ; quatre jours plus tard, le son seul répété sans nourriture fait diminuer la salivation jusqu’à zéro.\n- Analyse : le son seul n’a d’abord aucun effet ; associé plusieurs fois à la nourriture, il déclenche la salivation ; présenté seul de nombreuses fois, il perd cet effet.\n- Conclusion : certains réflexes se mettent en place après un apprentissage.",
      "keyRule": "Son seul : rien. Son + nourriture répétés : le son seul fait saliver. Son seul répété sans nourriture : la salivation disparaît.",
      "formulas": [],
      "workedExample": {
        "title": "Lire les résultats de Pavlov",
        "statement": "Le métronome seul ne fait pas saliver un chien. Après plusieurs associations métronome + nourriture, il le fait saliver. Que conclure ?",
        "methodSteps": [
          "Avant : le son n’a aucun effet sur la salivation.",
          "Après des associations répétées : le son seul déclenche la salivation."
        ],
        "conclusion": "La salivation au son a été apprise : certains réflexes se mettent en place après un apprentissage."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Réflexe",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’un réflexe ?",
          "paragraphText": "Un **réflexe** est une réaction **involontaire**, **inconsciente**, brusque et **automatique**, déclenchée par une stimulation appropriée.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on une réaction involontaire, inconsciente et automatique déclenchée par une stimulation ?",
            "options": [
              "Un réflexe",
              "Un mouvement volontaire",
              "Un raisonnement",
              "Une décision réfléchie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le réflexe se fait sans que l’on décide : il est automatique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Dispositif",
          "stepTheme": "Pavlov",
          "stepTitle": "Le dispositif de Pavlov",
          "paragraphText": "Le chien affamé est sanglé dans un local isolé du bruit. Un **tube fixé sur un canal salivaire** (fistule) recueille et **mesure la salive** ; un **métronome** est déclenché à distance.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q2",
            "type": "mcq",
            "prompt": "Dans le dispositif de Pavlov, à quoi sert le tube fin fixé sur un canal salivaire du chien ?",
            "options": [
              "À mesurer précisément la quantité de salive sécrétée",
              "À nourrir le chien pendant l’expérience",
              "À faire entendre le son du métronome",
              "À empêcher le chien de bouger"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tube gradué permet une mesure précise de la sécrétion de salive."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Nourriture",
          "stepTheme": "Résultat 1",
          "stepTitle": "La nourriture fait saliver",
          "paragraphText": "Quand on donne directement à manger au chien affamé, la **salive coule** au bout de quelques secondes.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q3",
            "type": "mcq",
            "prompt": "Dans l’expérience de Pavlov, on donne directement à manger à un chien affamé. Que se passe-t-il ?",
            "options": [
              "La salive se met à couler au bout de quelques secondes",
              "Rien ne se passe",
              "Le chien dresse seulement les oreilles",
              "Le chien s’endort aussitôt"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La nourriture dans la bouche déclenche la salivation sans apprentissage."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Son seul",
          "stepTheme": "Résultat 2",
          "stepTitle": "Le son seul ne fait pas saliver",
          "paragraphText": "Avant tout apprentissage, le **son du métronome seul** ne provoque **pas de salivation** : le chien dresse simplement les oreilles.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q4",
            "type": "mcq",
            "prompt": "Avant tout apprentissage, Pavlov fait entendre au chien le métronome seul, sans nourriture. Quel résultat obtient-il ?",
            "options": [
              "Pas de salivation : le chien dresse seulement les oreilles",
              "Une forte salivation",
              "Le chien se met à manger",
              "Le chien se met à vomir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au départ, le son n’a aucun effet sur la salivation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Association",
          "stepTheme": "Résultat 3",
          "stepTitle": "Le son associé à la nourriture",
          "paragraphText": "Pavlov fait entendre le métronome et donne **aussitôt après** à manger, **plusieurs fois de suite**. Ensuite, le **son seul** suffit à provoquer la salivation.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q5",
            "type": "mcq",
            "prompt": "Pavlov fait entendre le métronome puis donne aussitôt à manger au chien, plusieurs fois de suite. Ensuite il fait entendre le métronome seul. Que constate-t-il ?",
            "options": [
              "Le son seul provoque la salivation",
              "Le son seul ne provoque toujours rien",
              "Le chien refuse désormais de manger",
              "Le chien ne peut plus saliver du tout"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Après les associations répétées, le son déclenche seul la salivation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Extinction",
          "stepTheme": "Résultat 4",
          "stepTitle": "Le son seul, répété sans nourriture",
          "paragraphText": "Quatre jours plus tard, le son est présenté **seul** à plusieurs reprises, **sans nourriture** : la salivation **diminue** puis **disparaît**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q6",
            "type": "mcq",
            "prompt": "Un chien salive au seul son du métronome. On lui fait ensuite entendre le métronome seul de nombreuses fois, sans jamais lui donner de nourriture. Que devient sa salivation ?",
            "options": [
              "Elle diminue puis disparaît",
              "Elle augmente à chaque fois",
              "Elle reste identique pour toujours",
              "Elle devient un réflexe inné"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans renforcement par la nourriture, le réflexe acquis s’efface."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Analyse",
          "stepTheme": "Conclusion",
          "stepTitle": "Ce que montre l’expérience",
          "paragraphText": "Le son, **sans effet au départ**, déclenche la salivation après avoir été **associé plusieurs fois** à la nourriture : **certains réflexes se mettent en place après un apprentissage**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q7",
            "type": "mcq",
            "prompt": "Un son, d’abord sans effet, finit par faire saliver un chien après avoir été associé plusieurs fois à la nourriture. Que montre cette expérience ?",
            "options": [
              "Certains réflexes se mettent en place après un apprentissage",
              "Tous les réflexes existent dès la naissance",
              "Le son est une forme de nourriture",
              "Le chien a perdu le contrôle de sa bouche"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La salivation au son n’existait pas au départ : elle a été apprise."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on une réaction involontaire, inconsciente et automatique déclenchée par une stimulation ?",
          "options": [
            "Un réflexe",
            "Un mouvement volontaire",
            "Un raisonnement",
            "Une décision réfléchie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le réflexe se fait sans que l’on décide : il est automatique."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q2",
          "type": "mcq",
          "prompt": "Dans le dispositif de Pavlov, à quoi sert le tube fin fixé sur un canal salivaire du chien ?",
          "options": [
            "À mesurer précisément la quantité de salive sécrétée",
            "À nourrir le chien pendant l’expérience",
            "À faire entendre le son du métronome",
            "À empêcher le chien de bouger"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tube gradué permet une mesure précise de la sécrétion de salive."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q3",
          "type": "mcq",
          "prompt": "Dans l’expérience de Pavlov, on donne directement à manger à un chien affamé. Que se passe-t-il ?",
          "options": [
            "La salive se met à couler au bout de quelques secondes",
            "Rien ne se passe",
            "Le chien dresse seulement les oreilles",
            "Le chien s’endort aussitôt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La nourriture dans la bouche déclenche la salivation sans apprentissage."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q4",
          "type": "mcq",
          "prompt": "Avant tout apprentissage, Pavlov fait entendre au chien le métronome seul, sans nourriture. Quel résultat obtient-il ?",
          "options": [
            "Pas de salivation : le chien dresse seulement les oreilles",
            "Une forte salivation",
            "Le chien se met à manger",
            "Le chien se met à vomir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au départ, le son n’a aucun effet sur la salivation."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q5",
          "type": "mcq",
          "prompt": "Pavlov fait entendre le métronome puis donne aussitôt à manger au chien, plusieurs fois de suite. Ensuite il fait entendre le métronome seul. Que constate-t-il ?",
          "options": [
            "Le son seul provoque la salivation",
            "Le son seul ne provoque toujours rien",
            "Le chien refuse désormais de manger",
            "Le chien ne peut plus saliver du tout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Après les associations répétées, le son déclenche seul la salivation."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q6",
          "type": "mcq",
          "prompt": "Un chien salive au seul son du métronome. On lui fait ensuite entendre le métronome seul de nombreuses fois, sans jamais lui donner de nourriture. Que devient sa salivation ?",
          "options": [
            "Elle diminue puis disparaît",
            "Elle augmente à chaque fois",
            "Elle reste identique pour toujours",
            "Elle devient un réflexe inné"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans renforcement par la nourriture, le réflexe acquis s’efface."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q7",
          "type": "mcq",
          "prompt": "Un son, d’abord sans effet, finit par faire saliver un chien après avoir été associé plusieurs fois à la nourriture. Que montre cette expérience ?",
          "options": [
            "Certains réflexes se mettent en place après un apprentissage",
            "Tous les réflexes existent dès la naissance",
            "Le son est une forme de nourriture",
            "Le chien a perdu le contrôle de sa bouche"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La salivation au son n’existait pas au départ : elle a été apprise."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02",
      "order": 2,
      "title": "Réflexe inné et réflexe conditionnel",
      "summary": "Stimulus absolu, neutre et conditionnel ; réflexe inné, réflexe acquis et extinction.",
      "conceptExplanation": "- Avant l’apprentissage : la viande déclenche immédiatement la salivation. C’est le stimulus absolu (ou inconditionnel) ; la salivation qu’il provoque est un réflexe inné, dû à des voies nerveuses présentes dès la naissance.\n- Pendant l’apprentissage : le son, stimulus neutre au départ (il ne fait pas saliver), est associé plusieurs fois à la viande. Il arrive progressivement à déclencher seul la salivation.\n- Après l’apprentissage : le son est devenu un stimulus conditionnel ; la salivation qu’il déclenche est un réflexe conditionnel (ou acquis).\n- Le réflexe conditionnel résulte d’un apprentissage ou d’une éducation ; il varie d’un individu à l’autre ; il est temporaire.\n- Extinction : si le conditionnement n’est pas entretenu (stimulus conditionnel présenté seul, sans stimulus absolu), le réflexe conditionnel disparaît.\n- Dans la situation de départ, l’assiette rouge est devenue un stimulus conditionnel pour le chien.",
      "keyRule": "Stimulus absolu → réflexe inné. Stimulus neutre + absolu répétés → stimulus conditionnel → réflexe conditionnel. Pas d’entretien → extinction.",
      "formulas": [],
      "workedExample": {
        "title": "Nommer les stimuli de la situation de départ",
        "statement": "Un chien nourri chaque jour dans une assiette rouge salive dès qu’il voit l’assiette. Nommez la nourriture et l’assiette rouge.",
        "methodSteps": [
          "La nourriture fait saliver sans apprentissage : stimulus absolu.",
          "L’assiette rouge ne faisait pas saliver au début (stimulus neutre) ; associée chaque jour à la nourriture, elle fait saliver seule."
        ],
        "conclusion": "L’assiette rouge est devenue un stimulus conditionnel ; la salivation qu’elle déclenche est un réflexe conditionnel."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Stimulus absolu",
          "stepTheme": "Définition",
          "stepTitle": "Le stimulus absolu",
          "paragraphText": "La viande déclenche la salivation **dès la première fois**, sans apprentissage : c’est le **stimulus absolu** (ou **inconditionnel**).",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q1",
            "type": "mcq",
            "prompt": "Dans l’expérience de Pavlov, la viande déclenche la salivation dès la première fois, sans aucun apprentissage. Comment appelle-t-on la viande ?",
            "options": [
              "Un stimulus absolu (inconditionnel)",
              "Un stimulus neutre",
              "Un stimulus conditionnel",
              "Un réflexe acquis"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il agit sans apprentissage : il est absolu."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les étapes de l’expérience de Pavlov",
            "caption": "Le son, d’abord sans effet, finit par déclencher seul la salivation après de nombreuses associations avec la nourriture.",
            "tableData": {
              "headers": [
                "Étape",
                "Stimulus présenté",
                "Salivation ?",
                "Nom du stimulus"
              ],
              "rows": [
                [
                  "1",
                  "Nourriture dans la bouche",
                  "Oui",
                  "Stimulus absolu"
                ],
                [
                  "2",
                  "Son du métronome seul",
                  "Non",
                  "Stimulus neutre"
                ],
                [
                  "3",
                  "Son puis nourriture, plusieurs fois",
                  "Oui",
                  "Association répétée"
                ],
                [
                  "4",
                  "Son seul, après l’apprentissage",
                  "Oui",
                  "Stimulus conditionnel"
                ],
                [
                  "5",
                  "Son seul répété, sans nourriture",
                  "Diminue puis cesse",
                  "Extinction"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Réflexe inné",
          "stepTheme": "Dès la naissance",
          "stepTitle": "Le réflexe inné",
          "paragraphText": "La salivation provoquée par la nourriture est un **réflexe inné** : les **voies nerveuses** qui la commandent **existent dès la naissance**, chez tous les individus de l’espèce.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q2",
            "type": "mcq",
            "prompt": "Pourquoi la salivation provoquée par de la nourriture dans la bouche est-elle un réflexe inné ?",
            "options": [
              "Les voies nerveuses qui la commandent existent dès la naissance",
              "Elle a été apprise par un dressage",
              "Elle demande au chien de réfléchir",
              "Elle n’existe que chez quelques chiens"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Inné = présent dès la naissance, sans apprentissage."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Stimulus neutre",
          "stepTheme": "Au départ",
          "stepTitle": "Le stimulus neutre",
          "paragraphText": "Au départ, le son du métronome **ne provoque pas la salivation** : pour ce réflexe, c’est un **stimulus neutre**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q3",
            "type": "mcq",
            "prompt": "Au début de l’expérience de Pavlov, le son du métronome seul ne fait pas saliver le chien (il dresse seulement les oreilles). Comment appelle-t-on alors ce son, pour le réflexe de salivation ?",
            "options": [
              "Un stimulus neutre",
              "Un stimulus absolu",
              "Un stimulus conditionnel",
              "Un réflexe inné"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il ne déclenche pas la réaction étudiée : il est neutre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Stimulus conditionnel",
          "stepTheme": "Après",
          "stepTitle": "Le stimulus conditionnel",
          "paragraphText": "Après de nombreuses associations, le son déclenche **seul** la salivation : il est devenu un **stimulus conditionnel**, et la salivation obtenue est un **réflexe conditionnel** (ou **acquis**).",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q4",
            "type": "mcq",
            "prompt": "Après de nombreuses associations son + nourriture, le son seul fait saliver le chien. Comment nomme-t-on maintenant le son et la salivation qu’il déclenche ?",
            "options": [
              "Stimulus conditionnel ; réflexe conditionnel",
              "Stimulus absolu ; réflexe inné",
              "Stimulus neutre ; réflexe inné",
              "Stimulus absolu ; réflexe conditionnel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le son a acquis son effet par apprentissage : il est conditionnel."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Caractères",
          "stepTheme": "À retenir",
          "stepTitle": "Les caractères du réflexe conditionnel",
          "paragraphText": "Le réflexe conditionnel est **acquis** (apprentissage ou éducation), **individuel** (il varie d’un individu à l’autre) et **temporaire** (il disparaît s’il n’est pas entretenu).",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q5",
            "type": "mcq",
            "prompt": "Lequel de ces caractères appartient au réflexe conditionnel ?",
            "options": [
              "Il est acquis par apprentissage et varie d’un individu à l’autre",
              "Il existe dès la naissance chez tous les individus",
              "Il ne disparaît jamais",
              "Il ne passe pas par le système nerveux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Acquis, individuel et temporaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Extinction",
          "stepTheme": "Sans entretien",
          "stepTitle": "L’extinction",
          "paragraphText": "Si le stimulus conditionnel est présenté **seul** de nombreuses fois, **sans** le stimulus absolu, le réflexe conditionnel **disparaît** : c’est l’**extinction**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q6",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la disparition d’un réflexe conditionnel lorsque le stimulus conditionnel est présenté seul de nombreuses fois, sans le stimulus absolu ?",
            "options": [
              "L’extinction",
              "Le conditionnement",
              "L’apprentissage",
              "Le réflexe inné"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un réflexe conditionnel non entretenu s’éteint."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Conditionnement puis extinction",
            "caption": "Pendant les associations son + viande, la salive obtenue par le son augmente ; quand le son est présenté seul, sans viande, elle diminue jusqu’à disparaître.",
            "svgContent": "<svg viewBox=\"0 0 540 230\" width=\"100%\" style=\"max-width:540px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Courbe : la salive augmente pendant les associations puis diminue quand le son est seul\"><line x1=\"60\" y1=\"190\" x2=\"520\" y2=\"190\" stroke=\"#94A3B8\" stroke-width=\"2\"/><line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"20\" stroke=\"#94A3B8\" stroke-width=\"2\"/><line x1=\"290\" y1=\"25\" x2=\"290\" y2=\"190\" stroke=\"#94A3B8\" stroke-width=\"1.2\" stroke-dasharray=\"5 5\"/><path d=\"M62 188 Q120 70 288 52\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M292 52 Q330 160 500 186\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"175\" y=\"36\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#10B981\">Son + viande</text><text x=\"175\" y=\"50\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">(conditionnement)</text><text x=\"410\" y=\"70\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#EF4444\">Son seul</text><text x=\"410\" y=\"84\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">(extinction)</text><text x=\"290\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">Nombre de présentations des stimuli</text><text x=\"20\" y=\"105\" font-size=\"11\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">Salive</text></svg>"
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Inné ou acquis ?",
          "stepTheme": "Situation",
          "stepTitle": "Le chien et l’assiette rouge",
          "paragraphText": "Saliver avec la nourriture dans la bouche : réflexe **inné**. Saliver en voyant l’**assiette rouge** dans laquelle on mange chaque jour : réflexe **conditionnel** (l’assiette est un stimulus conditionnel).",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q7",
            "type": "mcq",
            "prompt": "Un chien nourri chaque jour dans une assiette rouge se met à saliver dès qu’il voit son maître avec l’assiette rouge. De quel réflexe s’agit-il ?",
            "options": [
              "Un réflexe conditionnel : l’assiette rouge est devenue un stimulus conditionnel",
              "Un réflexe inné : l’assiette rouge est un stimulus absolu",
              "Un mouvement volontaire du chien",
              "Un réflexe présent chez le chien dès sa naissance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’assiette ne faisait pas saliver au début : l’effet a été appris."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepBadge": "Lumière rouge",
          "stepTheme": "Application",
          "stepTitle": "Conditionner avec une lumière",
          "paragraphText": "On fait clignoter une **lumière rouge** puis on présente de la viande, **plusieurs fois**. Ensuite, la **lumière seule** fait saliver le chien.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q8",
            "type": "mcq",
            "prompt": "Pour conditionner un chien, on fait clignoter une lumière rouge puis on lui présente de la viande, et on répète cette association plusieurs fois. Ensuite on fait clignoter la lumière rouge seule. Que fait le chien ?",
            "options": [
              "Il salive",
              "Il ne salive pas",
              "Il s’endort",
              "Il ne voit plus la lumière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La lumière est devenue un stimulus conditionnel."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q1",
          "type": "mcq",
          "prompt": "Dans l’expérience de Pavlov, la viande déclenche la salivation dès la première fois, sans aucun apprentissage. Comment appelle-t-on la viande ?",
          "options": [
            "Un stimulus absolu (inconditionnel)",
            "Un stimulus neutre",
            "Un stimulus conditionnel",
            "Un réflexe acquis"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il agit sans apprentissage : il est absolu."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q2",
          "type": "mcq",
          "prompt": "Pourquoi la salivation provoquée par de la nourriture dans la bouche est-elle un réflexe inné ?",
          "options": [
            "Les voies nerveuses qui la commandent existent dès la naissance",
            "Elle a été apprise par un dressage",
            "Elle demande au chien de réfléchir",
            "Elle n’existe que chez quelques chiens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Inné = présent dès la naissance, sans apprentissage."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q3",
          "type": "mcq",
          "prompt": "Au début de l’expérience de Pavlov, le son du métronome seul ne fait pas saliver le chien (il dresse seulement les oreilles). Comment appelle-t-on alors ce son, pour le réflexe de salivation ?",
          "options": [
            "Un stimulus neutre",
            "Un stimulus absolu",
            "Un stimulus conditionnel",
            "Un réflexe inné"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il ne déclenche pas la réaction étudiée : il est neutre."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q4",
          "type": "mcq",
          "prompt": "Après de nombreuses associations son + nourriture, le son seul fait saliver le chien. Comment nomme-t-on maintenant le son et la salivation qu’il déclenche ?",
          "options": [
            "Stimulus conditionnel ; réflexe conditionnel",
            "Stimulus absolu ; réflexe inné",
            "Stimulus neutre ; réflexe inné",
            "Stimulus absolu ; réflexe conditionnel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le son a acquis son effet par apprentissage : il est conditionnel."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q5",
          "type": "mcq",
          "prompt": "Lequel de ces caractères appartient au réflexe conditionnel ?",
          "options": [
            "Il est acquis par apprentissage et varie d’un individu à l’autre",
            "Il existe dès la naissance chez tous les individus",
            "Il ne disparaît jamais",
            "Il ne passe pas par le système nerveux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Acquis, individuel et temporaire."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q6",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la disparition d’un réflexe conditionnel lorsque le stimulus conditionnel est présenté seul de nombreuses fois, sans le stimulus absolu ?",
          "options": [
            "L’extinction",
            "Le conditionnement",
            "L’apprentissage",
            "Le réflexe inné"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un réflexe conditionnel non entretenu s’éteint."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q7",
          "type": "mcq",
          "prompt": "Un chien nourri chaque jour dans une assiette rouge se met à saliver dès qu’il voit son maître avec l’assiette rouge. De quel réflexe s’agit-il ?",
          "options": [
            "Un réflexe conditionnel : l’assiette rouge est devenue un stimulus conditionnel",
            "Un réflexe inné : l’assiette rouge est un stimulus absolu",
            "Un mouvement volontaire du chien",
            "Un réflexe présent chez le chien dès sa naissance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’assiette ne faisait pas saliver au début : l’effet a été appris."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q8",
          "type": "mcq",
          "prompt": "Pour conditionner un chien, on fait clignoter une lumière rouge puis on lui présente de la viande, et on répète cette association plusieurs fois. Ensuite on fait clignoter la lumière rouge seule. Que fait le chien ?",
          "options": [
            "Il salive",
            "Il ne salive pas",
            "Il s’endort",
            "Il ne voit plus la lumière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La lumière est devenue un stimulus conditionnel."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03",
      "order": 3,
      "title": "Le mécanisme : une nouvelle liaison nerveuse",
      "summary": "Arc réflexe inné (bulbe) et circuit du réflexe conditionnel (cortex).",
      "conceptExplanation": "- Un réflexe met en jeu : un récepteur (où naît le message nerveux), une fibre nerveuse sensitive ou afférente, un centre nerveux, une fibre nerveuse motrice ou efférente, un effecteur (qui réalise la réponse).\n- Réflexe inné de salivation : la nourriture stimule la langue (récepteur) ; le message sensitif est conduit par la fibre sensitive jusqu’au centre salivaire du bulbe rachidien ; il y est transformé en message moteur, conduit par la fibre motrice jusqu’aux glandes salivaires (effecteurs). Le cerveau n’intervient pas.\n- Pendant l’apprentissage : le son stimule l’oreille ; le message gagne l’aire auditive du cortex par la fibre auditive. Après plusieurs répétitions, une nouvelle liaison nerveuse s’établit progressivement, dans le cortex cérébral, entre l’aire auditive et l’aire gustative (reliée au centre salivaire).\n- Après l’apprentissage : cette liaison est fonctionnelle ; le son seul déclenche la salivation par le trajet oreille → aire auditive → nouvelle liaison → aire gustative → centre salivaire → glandes salivaires.\n- Le réflexe conditionnel nécessite donc le cortex cérébral ; le réflexe inné de salivation n’utilise que le bulbe.",
      "keyRule": "Récepteur → fibre sensitive → centre nerveux → fibre motrice → effecteur. Réflexe conditionnel = nouvelle liaison dans le cortex (aire auditive ↔ aire gustative).",
      "formulas": [],
      "workedExample": {
        "title": "Classer les éléments du réflexe de Pavlov",
        "statement": "Classez : bulbe rachidien, glande salivaire, neurone moteur, neurone d’association, oreille interne, neurone sensitif.",
        "methodSteps": [
          "Centre nerveux : le bulbe rachidien. Effecteur : la glande salivaire.",
          "Structures nerveuses : neurones moteur, d’association et sensitif. Récepteur : l’oreille interne."
        ],
        "conclusion": "Chaque élément a sa place dans le circuit : récepteur, conducteurs, centre, effecteur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Récepteur",
          "stepTheme": "Arc réflexe",
          "stepTitle": "Les éléments d’un réflexe",
          "paragraphText": "Un réflexe met en jeu un **récepteur** (où naît le message), une **fibre sensitive**, un **centre nerveux**, une **fibre motrice** et un **effecteur** (qui réalise la réponse).",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q1",
            "type": "mcq",
            "prompt": "Dans un réflexe, comment s’appelle l’organe qui reçoit la stimulation et dans lequel naît le message nerveux ?",
            "options": [
              "Le récepteur",
              "L’effecteur",
              "Le centre nerveux",
              "La fibre motrice"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le message naît dans le récepteur ; l’effecteur réalise la réponse."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le réflexe inné de salivation",
            "caption": "Le message naît dans la langue, passe par le centre salivaire du bulbe rachidien et commande les glandes salivaires. Le cerveau n’intervient pas.",
            "svgContent": "<svg viewBox=\"0 0 560 215\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Viande, langue, centre salivaire du bulbe, glandes salivaires, salivation\"><rect x=\"20\" y=\"25\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"90\" y=\"49.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Viande</text><text x=\"90\" y=\"64.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">stimulus absolu</text><line x1=\"162\" y1=\"53\" x2=\"197.0\" y2=\"53.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"206,53 197.0,48.0 197.0,58.0\" fill=\"#94A3B8\"/><rect x=\"210\" y=\"25\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"280\" y=\"49.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Langue</text><text x=\"280\" y=\"64.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">récepteur</text><line x1=\"352\" y1=\"53\" x2=\"387.0\" y2=\"53.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"396,53 387.0,48.0 387.0,58.0\" fill=\"#94A3B8\"/><text x=\"374\" y=\"40\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">fibre</text><text x=\"374\" y=\"72\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">sensitive</text><rect x=\"400\" y=\"25\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"470\" y=\"49.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Centre salivaire</text><text x=\"470\" y=\"64.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">bulbe rachidien</text><line x1=\"470\" y1=\"83\" x2=\"470.0\" y2=\"126.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"470,135 475.0,126.0 465.0,126.0\" fill=\"#94A3B8\"/><text x=\"478\" y=\"112\" font-size=\"10\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">fibre motrice</text><rect x=\"400\" y=\"139\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"470\" y=\"163.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Glandes salivaires</text><text x=\"470\" y=\"178.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">effecteur</text><line x1=\"398\" y1=\"167\" x2=\"363.0\" y2=\"167.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"354,167 363.0,172.0 363.0,162.0\" fill=\"#94A3B8\"/><rect x=\"210\" y=\"139\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#94A3B8\" fill-opacity=\"0.14\" stroke=\"#94A3B8\" stroke-width=\"2\"/><text x=\"280\" y=\"163.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Salivation</text><text x=\"280\" y=\"178.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">réponse</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Centre bulbaire",
          "stepTheme": "Réflexe inné",
          "stepTitle": "Le centre du réflexe inné",
          "paragraphText": "Dans le réflexe **inné** de salivation, le centre nerveux est le **centre salivaire du bulbe rachidien**. Le cerveau n’intervient pas.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q2",
            "type": "mcq",
            "prompt": "Dans le réflexe inné de salivation (nourriture dans la bouche), quel est le centre nerveux ?",
            "options": [
              "Le centre salivaire du bulbe rachidien",
              "L’aire auditive du cortex",
              "Le cervelet",
              "L’oreille interne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le centre salivaire est situé dans le bulbe rachidien."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Trajet",
          "stepTheme": "Sens du message",
          "stepTitle": "Le trajet du message",
          "paragraphText": "Le message **sensitif** va du récepteur au centre ; le centre le transforme en message **moteur**, conduit jusqu’à l’effecteur.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q3",
            "type": "mcq",
            "prompt": "Dans le réflexe inné de salivation, quel trajet suit le message nerveux ?",
            "options": [
              "Langue → fibre sensitive → bulbe → fibre motrice → glandes salivaires",
              "Glandes salivaires → fibre motrice → bulbe → langue",
              "Oreille → fibre motrice → langue",
              "Bulbe → langue → glandes salivaires → cerveau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Du récepteur (langue) vers l’effecteur (glandes salivaires)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Nouvelle liaison",
          "stepTheme": "Apprentissage",
          "stepTitle": "Une liaison se forme dans le cortex",
          "paragraphText": "À force de répétitions, une **nouvelle liaison nerveuse** s’établit dans le **cortex cérébral**, entre l’**aire auditive** et l’**aire gustative**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q4",
            "type": "mcq",
            "prompt": "Pendant le conditionnement de Pavlov (son + nourriture répétés), où se forme la nouvelle liaison nerveuse ?",
            "options": [
              "Dans le cortex cérébral, entre l’aire auditive et l’aire gustative",
              "Dans la langue",
              "Dans les glandes salivaires",
              "Dans l’oreille interne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le conditionnement crée un nouveau chemin entre deux aires du cortex."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le réflexe conditionnel de salivation",
            "caption": "Après l’apprentissage, une nouvelle liaison nerveuse relie, dans le cortex, l’aire auditive à l’aire gustative : le son seul déclenche la salivation.",
            "svgContent": "<svg viewBox=\"0 0 560 285\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Son, oreille, aire auditive, nouvelle liaison, aire gustative, centre salivaire, glandes salivaires, salivation\"><rect x=\"20\" y=\"20\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"90\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Son</text><text x=\"90\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">stimulus conditionnel</text><line x1=\"162\" y1=\"48\" x2=\"197.0\" y2=\"48.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"206,48 197.0,43.0 197.0,53.0\" fill=\"#94A3B8\"/><rect x=\"210\" y=\"20\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"280\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Oreille</text><text x=\"280\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">récepteur</text><line x1=\"352\" y1=\"48\" x2=\"387.0\" y2=\"48.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"396,48 387.0,43.0 387.0,53.0\" fill=\"#94A3B8\"/><text x=\"374\" y=\"36\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">fibre</text><text x=\"374\" y=\"68\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">auditive</text><rect x=\"400\" y=\"20\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"470\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Aire auditive</text><text x=\"470\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">cortex</text><line x1=\"470\" y1=\"78\" x2=\"470.0\" y2=\"109.0\" stroke=\"#10B981\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-dasharray=\"6 5\"/><polygon points=\"470,118 475.0,109.0 465.0,109.0\" fill=\"#10B981\"/><text x=\"478\" y=\"102\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#10B981\">nouvelle liaison</text><rect x=\"400\" y=\"122\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"470\" y=\"146.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Aire gustative</text><text x=\"470\" y=\"161.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">cortex</text><line x1=\"398\" y1=\"150\" x2=\"363.0\" y2=\"150.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"354,150 363.0,155.0 363.0,145.0\" fill=\"#94A3B8\"/><rect x=\"210\" y=\"122\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"280\" y=\"146.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Centre salivaire</text><text x=\"280\" y=\"161.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">bulbe rachidien</text><line x1=\"280\" y1=\"180\" x2=\"280.0\" y2=\"201.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"280,210 285.0,201.0 275.0,201.0\" fill=\"#94A3B8\"/><text x=\"288\" y=\"199\" font-size=\"10\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">fibre motrice</text><rect x=\"210\" y=\"214\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"280\" y=\"238.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Glandes salivaires</text><text x=\"280\" y=\"253.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">effecteur</text><line x1=\"208\" y1=\"242\" x2=\"173.0\" y2=\"242.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"164,242 173.0,247.0 173.0,237.0\" fill=\"#94A3B8\"/><rect x=\"20\" y=\"214\" width=\"140\" height=\"56\" rx=\"10\" fill=\"#94A3B8\" fill-opacity=\"0.14\" stroke=\"#94A3B8\" stroke-width=\"2\"/><text x=\"90\" y=\"238.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Salivation</text><text x=\"90\" y=\"253.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">réponse</text></svg>"
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Cortex",
          "stepTheme": "Différence",
          "stepTitle": "Le cerveau est indispensable",
          "paragraphText": "Le réflexe **conditionnel** fait intervenir le **cortex cérébral** ; le réflexe **inné** de salivation n’utilise que le **bulbe rachidien**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q5",
            "type": "mcq",
            "prompt": "Quelle différence de centre nerveux y a-t-il entre le réflexe inné et le réflexe conditionnel de salivation ?",
            "options": [
              "Le réflexe conditionnel fait intervenir le cortex cérébral, le réflexe inné seulement le bulbe",
              "Les deux ne font intervenir que le bulbe",
              "Le réflexe inné passe par le cortex, pas le réflexe conditionnel",
              "Aucun des deux ne passe par un centre nerveux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La nouvelle liaison se trouve dans le cortex."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Après",
          "stepTheme": "Trajet conditionnel",
          "stepTitle": "Le trajet du réflexe conditionnel",
          "paragraphText": "Après le conditionnement : **oreille** → aire auditive → **nouvelle liaison** → aire gustative → centre salivaire → **glandes salivaires** → salivation.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q6",
            "type": "mcq",
            "prompt": "Après le conditionnement de Pavlov, quel trajet suit le message déclenché par le son seul ?",
            "options": [
              "Oreille → aire auditive → nouvelle liaison → centre salivaire → glandes salivaires",
              "Langue → bulbe → glandes salivaires",
              "Oreille → glandes salivaires, directement",
              "Glandes salivaires → oreille → cerveau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le son passe par le cortex grâce à la nouvelle liaison."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Classer",
          "stepTheme": "Récepteur",
          "stepTitle": "Le récepteur du son",
          "paragraphText": "Dans le réflexe conditionnel au son : **récepteur** = oreille interne ; **centre nerveux** = bulbe ; **effecteur** = glande salivaire ; neurones sensitif, d’association et moteur = **structures nerveuses**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q7",
            "type": "mcq",
            "prompt": "Dans le réflexe conditionnel de salivation au son du métronome, quel élément joue le rôle de récepteur ?",
            "options": [
              "L’oreille interne",
              "Le bulbe rachidien",
              "La glande salivaire",
              "Le neurone moteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est dans l’oreille interne que naît le message provoqué par le son."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepBadge": "Effecteur",
          "stepTheme": "Rôles",
          "stepTitle": "Le rôle des glandes salivaires",
          "paragraphText": "Viande : stimulus absolu. Son : stimulus neutre puis conditionnel. Oreille : récepteur. Centre salivaire : centre nerveux. **Glandes salivaires : effecteurs**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q8",
            "type": "mcq",
            "prompt": "Dans le réflexe conditionnel de salivation de Pavlov, quel rôle jouent les glandes salivaires ?",
            "options": [
              "Organes effecteurs",
              "Organes récepteurs",
              "Stimulus absolu",
              "Centre nerveux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elles réalisent la réponse : la sécrétion de salive."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q1",
          "type": "mcq",
          "prompt": "Dans un réflexe, comment s’appelle l’organe qui reçoit la stimulation et dans lequel naît le message nerveux ?",
          "options": [
            "Le récepteur",
            "L’effecteur",
            "Le centre nerveux",
            "La fibre motrice"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le message naît dans le récepteur ; l’effecteur réalise la réponse."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q2",
          "type": "mcq",
          "prompt": "Dans le réflexe inné de salivation (nourriture dans la bouche), quel est le centre nerveux ?",
          "options": [
            "Le centre salivaire du bulbe rachidien",
            "L’aire auditive du cortex",
            "Le cervelet",
            "L’oreille interne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre salivaire est situé dans le bulbe rachidien."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q3",
          "type": "mcq",
          "prompt": "Dans le réflexe inné de salivation, quel trajet suit le message nerveux ?",
          "options": [
            "Langue → fibre sensitive → bulbe → fibre motrice → glandes salivaires",
            "Glandes salivaires → fibre motrice → bulbe → langue",
            "Oreille → fibre motrice → langue",
            "Bulbe → langue → glandes salivaires → cerveau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Du récepteur (langue) vers l’effecteur (glandes salivaires)."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q4",
          "type": "mcq",
          "prompt": "Pendant le conditionnement de Pavlov (son + nourriture répétés), où se forme la nouvelle liaison nerveuse ?",
          "options": [
            "Dans le cortex cérébral, entre l’aire auditive et l’aire gustative",
            "Dans la langue",
            "Dans les glandes salivaires",
            "Dans l’oreille interne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le conditionnement crée un nouveau chemin entre deux aires du cortex."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q5",
          "type": "mcq",
          "prompt": "Quelle différence de centre nerveux y a-t-il entre le réflexe inné et le réflexe conditionnel de salivation ?",
          "options": [
            "Le réflexe conditionnel fait intervenir le cortex cérébral, le réflexe inné seulement le bulbe",
            "Les deux ne font intervenir que le bulbe",
            "Le réflexe inné passe par le cortex, pas le réflexe conditionnel",
            "Aucun des deux ne passe par un centre nerveux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La nouvelle liaison se trouve dans le cortex."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q6",
          "type": "mcq",
          "prompt": "Après le conditionnement de Pavlov, quel trajet suit le message déclenché par le son seul ?",
          "options": [
            "Oreille → aire auditive → nouvelle liaison → centre salivaire → glandes salivaires",
            "Langue → bulbe → glandes salivaires",
            "Oreille → glandes salivaires, directement",
            "Glandes salivaires → oreille → cerveau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le son passe par le cortex grâce à la nouvelle liaison."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q7",
          "type": "mcq",
          "prompt": "Dans le réflexe conditionnel de salivation au son du métronome, quel élément joue le rôle de récepteur ?",
          "options": [
            "L’oreille interne",
            "Le bulbe rachidien",
            "La glande salivaire",
            "Le neurone moteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est dans l’oreille interne que naît le message provoqué par le son."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q8",
          "type": "mcq",
          "prompt": "Dans le réflexe conditionnel de salivation de Pavlov, quel rôle jouent les glandes salivaires ?",
          "options": [
            "Organes effecteurs",
            "Organes récepteurs",
            "Stimulus absolu",
            "Centre nerveux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elles réalisent la réponse : la sécrétion de salive."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04",
      "order": 4,
      "title": "Conditions d’installation et avantages",
      "summary": "Ordre des stimuli, répétition, entretien ; automatismes, éducation, dressage.",
      "conceptExplanation": "- Conditions d’obtention et de maintien d’un réflexe conditionnel :\n- le stimulus neutre doit toujours être associé au stimulus absolu ;\n- le stimulus neutre doit précéder de peu le stimulus absolu (le son, puis la viande) ;\n- l’association doit être répétée plusieurs fois, toujours dans le même ordre ;\n- une fois acquis, le réflexe doit être entretenu, sinon il s’éteint.\n- Avantages : les réflexes conditionnels permettent l’adaptation de l’individu à son milieu et donnent naissance à des comportements automatiques (marche, écriture, langage, lecture, natation, conduite d’une voiture). Ils servent à l’éducation de l’Homme et au dressage des animaux (chiens policiers, chiens guides d’aveugles, chiens de chasse, animaux de spectacle).\n- Correction du document : il écrit que « le stimulus absolu précède toujours le stimulus neutre ». C’est l’inverse : les schémas du même document le montrent, le son (stimulus neutre) doit venir juste avant la viande (stimulus absolu).",
      "keyRule": "Stimulus neutre juste AVANT le stimulus absolu, association répétée dans le même ordre, réflexe entretenu.",
      "formulas": [],
      "workedExample": {
        "title": "Conditionner un chien à une sonnette",
        "statement": "On veut qu’un chien salive au son d’une sonnette. Comment procéder ?",
        "methodSteps": [
          "Faire sonner la sonnette, puis donner aussitôt la nourriture.",
          "Répéter cette association de nombreuses fois, toujours dans le même ordre, puis l’entretenir de temps en temps."
        ],
        "conclusion": "La sonnette devient un stimulus conditionnel qui déclenche seul la salivation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepBadge": "Ordre",
          "stepTheme": "Condition 1",
          "stepTitle": "Le stimulus neutre d’abord",
          "paragraphText": "Pour installer le réflexe, le **stimulus neutre** (le son) doit **précéder de peu** le **stimulus absolu** (la viande).",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q1",
            "type": "mcq",
            "prompt": "Pour installer un réflexe conditionnel, dans quel ordre présente-t-on les deux stimuli ?",
            "options": [
              "Le stimulus neutre juste avant le stimulus absolu",
              "Le stimulus absolu longtemps avant le stimulus neutre",
              "Le stimulus neutre seul, jamais le stimulus absolu",
              "N’importe quand, l’ordre ne compte pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le son annonce la viande : il doit venir juste avant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Répétition",
          "stepTheme": "Condition 2",
          "stepTitle": "Répéter l’association",
          "paragraphText": "L’association doit être **répétée plusieurs fois**, toujours **dans le même ordre**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q2",
            "type": "mcq",
            "prompt": "Une seule association son + nourriture suffit-elle à installer le réflexe conditionnel de salivation chez un chien ?",
            "options": [
              "Non : l’association doit être répétée plusieurs fois dans le même ordre",
              "Oui : une seule fois suffit toujours",
              "Non : il faut donner la nourriture sans le son",
              "Oui : si le chien n’a pas faim"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La nouvelle liaison s’établit progressivement, par répétition."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Entretien",
          "stepTheme": "Condition 3",
          "stepTitle": "Entretenir le réflexe",
          "paragraphText": "Une fois acquis, le réflexe conditionnel doit être **entretenu** (renforcé de temps en temps par le stimulus absolu), sinon il **s’éteint**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q3",
            "type": "mcq",
            "prompt": "Un réflexe conditionnel installé chez un chien n’est plus jamais renforcé par le stimulus absolu. Que risque-t-il de se passer ?",
            "options": [
              "Il s’éteint progressivement (extinction)",
              "Il devient un réflexe inné",
              "Il se renforce tout seul",
              "Il se transmet aux chiots"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans entretien, la liaison nouvelle cesse de fonctionner."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Correction",
          "stepTheme": "Erreur du document",
          "stepTitle": "Attention à l’ordre des stimuli",
          "paragraphText": "Le document écrit que « le stimulus absolu précède le stimulus neutre » : c’est **faux**. Ses propres schémas montrent le **son avant la viande**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q4",
            "type": "mcq",
            "prompt": "Un élève affirme : « Pour conditionner un chien, on donne d’abord la viande, puis on fait entendre le son. » A-t-il raison ?",
            "options": [
              "Non : le son (stimulus neutre) doit précéder la viande (stimulus absolu)",
              "Oui : la viande doit toujours venir en premier",
              "Oui : l’ordre n’a aucune importance",
              "Non : il ne faut jamais donner de viande"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le stimulus neutre doit annoncer le stimulus absolu."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Automatismes",
          "stepTheme": "Chez l’Homme",
          "stepTitle": "Des automatismes utiles",
          "paragraphText": "Les réflexes conditionnels donnent des **automatismes** : marcher, écrire, lire, nager, **conduire une voiture**. Ils servent aussi à l’**éducation** (langage, écriture, lecture).",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q5",
            "type": "mcq",
            "prompt": "Parmi ces comportements, lequel repose sur des réflexes conditionnels acquis par apprentissage ?",
            "options": [
              "Conduire une voiture",
              "Retirer la main d’un objet brûlant chez le nouveau-né",
              "Le battement du cœur",
              "Saliver quand on a de la nourriture dans la bouche"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conduite s’apprend ; les trois autres réactions sont innées ou automatiques dès la naissance."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Dressage",
          "stepTheme": "Chez l’animal",
          "stepTitle": "Le dressage des animaux",
          "paragraphText": "Le **dressage** repose sur les réflexes conditionnels : chiens policiers (drogue, bombes), chiens guides d’aveugles, chiens de chasse, animaux de spectacle.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q6",
            "type": "mcq",
            "prompt": "Un chien policier aboie dès qu’il sent l’odeur d’une drogue cachée dans une valise. Sur quoi repose ce comportement ?",
            "options": [
              "Un réflexe conditionnel installé par dressage",
              "Un réflexe inné présent chez tous les chiens",
              "Le hasard",
              "Une maladie du chien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le chien a été dressé à associer cette odeur à une récompense."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Classer",
          "stepTheme": "Homme et animal",
          "stepTitle": "Un avantage commun",
          "paragraphText": "Chez l’animal : dressage, recherche de drogue ou de bombes. Chez l’Homme : automatismes comme la conduite. **Chez les deux** : apprentissage associatif, communication, signaux sociaux, **adaptation au milieu**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q7",
            "type": "mcq",
            "prompt": "Lequel de ces avantages des réflexes conditionnels concerne à la fois l’Homme et l’animal ?",
            "options": [
              "L’adaptation de l’individu à son milieu",
              "La conduite d’une voiture",
              "Le dressage pour les spectacles",
              "La lecture d’un livre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tout être vivant capable d’apprendre s’adapte ainsi à son milieu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q1",
          "type": "mcq",
          "prompt": "Pour installer un réflexe conditionnel, dans quel ordre présente-t-on les deux stimuli ?",
          "options": [
            "Le stimulus neutre juste avant le stimulus absolu",
            "Le stimulus absolu longtemps avant le stimulus neutre",
            "Le stimulus neutre seul, jamais le stimulus absolu",
            "N’importe quand, l’ordre ne compte pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le son annonce la viande : il doit venir juste avant."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q2",
          "type": "mcq",
          "prompt": "Une seule association son + nourriture suffit-elle à installer le réflexe conditionnel de salivation chez un chien ?",
          "options": [
            "Non : l’association doit être répétée plusieurs fois dans le même ordre",
            "Oui : une seule fois suffit toujours",
            "Non : il faut donner la nourriture sans le son",
            "Oui : si le chien n’a pas faim"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La nouvelle liaison s’établit progressivement, par répétition."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q3",
          "type": "mcq",
          "prompt": "Un réflexe conditionnel installé chez un chien n’est plus jamais renforcé par le stimulus absolu. Que risque-t-il de se passer ?",
          "options": [
            "Il s’éteint progressivement (extinction)",
            "Il devient un réflexe inné",
            "Il se renforce tout seul",
            "Il se transmet aux chiots"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans entretien, la liaison nouvelle cesse de fonctionner."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q4",
          "type": "mcq",
          "prompt": "Un élève affirme : « Pour conditionner un chien, on donne d’abord la viande, puis on fait entendre le son. » A-t-il raison ?",
          "options": [
            "Non : le son (stimulus neutre) doit précéder la viande (stimulus absolu)",
            "Oui : la viande doit toujours venir en premier",
            "Oui : l’ordre n’a aucune importance",
            "Non : il ne faut jamais donner de viande"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le stimulus neutre doit annoncer le stimulus absolu."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q5",
          "type": "mcq",
          "prompt": "Parmi ces comportements, lequel repose sur des réflexes conditionnels acquis par apprentissage ?",
          "options": [
            "Conduire une voiture",
            "Retirer la main d’un objet brûlant chez le nouveau-né",
            "Le battement du cœur",
            "Saliver quand on a de la nourriture dans la bouche"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conduite s’apprend ; les trois autres réactions sont innées ou automatiques dès la naissance."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q6",
          "type": "mcq",
          "prompt": "Un chien policier aboie dès qu’il sent l’odeur d’une drogue cachée dans une valise. Sur quoi repose ce comportement ?",
          "options": [
            "Un réflexe conditionnel installé par dressage",
            "Un réflexe inné présent chez tous les chiens",
            "Le hasard",
            "Une maladie du chien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le chien a été dressé à associer cette odeur à une récompense."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q7",
          "type": "mcq",
          "prompt": "Lequel de ces avantages des réflexes conditionnels concerne à la fois l’Homme et l’animal ?",
          "options": [
            "L’adaptation de l’individu à son milieu",
            "La conduite d’une voiture",
            "Le dressage pour les spectacles",
            "La lecture d’un livre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tout être vivant capable d’apprendre s’adapte ainsi à son milieu."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05",
      "order": 5,
      "title": "Évaluation : le singe et la souris",
      "summary": "Exploiter des résultats de conditionnement : compter, expliquer, schématiser.",
      "conceptExplanation": "Situation : pour nourrir des singes dans les satellites, on les dresse en laboratoire. Devant le singe sanglé, un voyant et une touche : si le singe appuie pendant que le voyant est allumé, une trappe libère de la nourriture. On réalise 7 séries de 8 essais et on mesure le temps entre l’allumage et l’appui (« - » = pas d’appui pendant les 20 secondes).\n- Nombre d’essais sans appui : série 1 : 5 ; série 2 : 2 ; série 3 : 1 ; séries 4 à 7 : 0. Le temps de réponse diminue (15 à 20 s au début, 2 à 5 s à la fin).\n- Explication : l’association répétée du voyant (stimulus neutre) et de la nourriture (stimulus absolu) a établi une nouvelle liaison nerveuse entre l’aire visuelle et l’aire motrice du cortex. Dès la 4e série, le singe appuie à chaque allumage : c’est un réflexe conditionnel (conditionnement où l’animal agit lui-même pour obtenir la récompense, comme dans la boîte de Skinner).\n- Trajet : lumière → œil → nerf sensitif → aire visuelle → nouvelle liaison → aire motrice → neurone d’association → moelle épinière → nerf moteur → muscles → appui de la main.\n- Exercice de la souris : un courant électrique fait fléchir la patte (stimulus absolu) ; une lumière lui fait seulement tourner le regard (stimulus neutre). Après les essais 5 à 9 (lumière + courant), la lumière seule fait fléchir la patte (essais 10 à 13) : elle est devenue stimulus conditionnel. Dès le 14e essai, plus de flexion : extinction.\n- Correction du document : dans le corrigé de la souris, il est écrit « car le son est un stimulus neutre » ; il n’y a pas de son dans cette expérience, c’est la lumière qui est le stimulus neutre.",
      "keyRule": "Échecs qui tombent à 0 et réponses plus rapides = conditionnement installé. Lumière seule sans renforcement = extinction.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le comportement du singe",
        "statement": "Dès la 4e série, le singe appuie à chaque allumage du voyant. Expliquez.",
        "methodSteps": [
          "Le voyant (stimulus neutre) a été associé plusieurs fois à la nourriture (stimulus absolu).",
          "Une nouvelle liaison nerveuse s’est établie entre l’aire visuelle et l’aire motrice."
        ],
        "conclusion": "Le voyant est devenu un stimulus conditionnel : l’appui est un réflexe conditionnel."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Compter",
          "stepTheme": "Tableau",
          "stepTitle": "Compter les échecs par série",
          "paragraphText": "On compte, pour chaque série de 8 essais, les « - » (pas d’appui en 20 s) : **5, 2, 1, 0, 0, 0, 0**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q1",
            "type": "mcq",
            "prompt": "Dans l’expérience du singe, on note les essais où il n’appuie pas sur la touche pendant les 20 s où le voyant est allumé. Série 1 : essais 1, 2, 4, 5 et 7 sans appui ; série 2 : essais 2 et 5 ; série 3 : essai 8 ; séries 4 à 7 : appui à chaque essai. Quelle suite obtient-on pour les séries 1 à 7 ?",
            "options": [
              "5 ; 2 ; 1 ; 0 ; 0 ; 0 ; 0",
              "3 ; 6 ; 7 ; 8 ; 8 ; 8 ; 8",
              "5 ; 2 ; 1 ; 1 ; 0 ; 0 ; 0",
              "1 ; 2 ; 5 ; 0 ; 0 ; 0 ; 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Série 1 : 5 essais sans appui ; série 2 : 2 ; série 3 : 1 ; ensuite aucun."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le singe et le voyant lumineux",
            "caption": "Nombre d’essais (sur 8) où le singe n’appuie pas sur la touche pendant les 20 secondes où le voyant reste allumé.",
            "tableData": {
              "headers": [
                "Série",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
              ],
              "rows": [
                [
                  "Essais sans appui",
                  5,
                  2,
                  1,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Temps",
          "stepTheme": "Analyse",
          "stepTitle": "Le singe répond de plus en plus vite",
          "paragraphText": "Le temps entre l’allumage et l’appui passe de **15 à 20 s** au début à **2 à 5 s** à la fin : le singe **apprend**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q2",
            "type": "mcq",
            "prompt": "Dans l’expérience du singe, le temps entre l’allumage du voyant et l’appui sur la touche passe d’environ 15 à 20 s (séries 1 et 2) à 2 à 5 s (série 7). Que montre cette évolution ?",
            "options": [
              "Le singe apprend : il répond de plus en plus vite au voyant",
              "Le singe se fatigue au fil des séries",
              "Le voyant éclaire de moins en moins",
              "Le singe n’a plus faim"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Des réponses plus rapides et sans échec traduisent un apprentissage."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Explication",
          "stepTheme": "Cortex",
          "stepTitle": "Pourquoi plus aucun échec dès la 4e série ?",
          "paragraphText": "L’association répétée voyant + nourriture a établi une **nouvelle liaison nerveuse** entre l’**aire visuelle** et l’**aire motrice** du cortex.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q3",
            "type": "mcq",
            "prompt": "Dès la 4e série, le singe appuie sur la touche à chaque allumage du voyant, sans aucun échec. Comment l’expliquer ?",
            "options": [
              "Une nouvelle liaison nerveuse s’est établie entre l’aire visuelle et l’aire motrice du cortex",
              "Le singe voit beaucoup mieux qu’avant",
              "Le voyant libère la nourriture tout seul",
              "Un réflexe inné vient d’apparaître"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la nouvelle liaison corticale qui rend la réponse automatique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Trajet",
          "stepTheme": "Schéma",
          "stepTitle": "Le trajet de l’influx chez le singe",
          "paragraphText": "Lumière → **œil** → aire visuelle → **nouvelle liaison** → aire motrice → moelle épinière → nerf moteur → **muscles** → appui.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q4",
            "type": "mcq",
            "prompt": "Quel est le trajet de l’influx nerveux quand le singe conditionné appuie sur la touche à la vue du voyant allumé ?",
            "options": [
              "Œil → aire visuelle → aire motrice → moelle épinière → nerf moteur → muscles",
              "Muscles → moelle épinière → aire motrice → œil",
              "Œil → muscles, directement",
              "Oreille → bulbe → glandes salivaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Du récepteur (œil) à l’effecteur (muscles), en passant par le cortex."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Trajet de l’influx chez le singe conditionné",
            "caption": "La lumière, devenue stimulus conditionnel, déclenche l’appui sur la touche grâce à la nouvelle liaison entre l’aire visuelle et l’aire motrice.",
            "svgContent": "<svg viewBox=\"0 0 560 222\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Lumière, œil, aire visuelle, nouvelle liaison, aire motrice, moelle épinière, muscles, appui\"><rect x=\"10\" y=\"30\" width=\"115\" height=\"54\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"67.5\" y=\"53.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Lumière</text><text x=\"67.5\" y=\"68.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">stimulus</text><line x1=\"127\" y1=\"57\" x2=\"138.0\" y2=\"57.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"147,57 138.0,52.0 138.0,62.0\" fill=\"#94A3B8\"/><rect x=\"150\" y=\"30\" width=\"115\" height=\"54\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"207.5\" y=\"53.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Œil</text><text x=\"207.5\" y=\"68.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">récepteur</text><line x1=\"267\" y1=\"57\" x2=\"278.0\" y2=\"57.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"287,57 278.0,52.0 278.0,62.0\" fill=\"#94A3B8\"/><rect x=\"290\" y=\"30\" width=\"115\" height=\"54\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"347.5\" y=\"53.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Aire visuelle</text><text x=\"347.5\" y=\"68.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">cortex</text><line x1=\"407\" y1=\"57\" x2=\"423.0\" y2=\"57.0\" stroke=\"#10B981\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-dasharray=\"6 5\"/><polygon points=\"432,57 423.0,52.0 423.0,62.0\" fill=\"#10B981\"/><text x=\"420\" y=\"20\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">nouvelle liaison</text><rect x=\"435\" y=\"30\" width=\"115\" height=\"54\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"492.5\" y=\"53.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Aire motrice</text><text x=\"492.5\" y=\"68.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">cortex</text><line x1=\"492\" y1=\"86\" x2=\"492.0\" y2=\"127.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"492,136 497.0,127.0 487.0,127.0\" fill=\"#94A3B8\"/><rect x=\"435\" y=\"140\" width=\"115\" height=\"54\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"492.5\" y=\"163.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Moelle épinière</text><text x=\"492.5\" y=\"178.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\"></text><line x1=\"433\" y1=\"167\" x2=\"417.0\" y2=\"167.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"408,167 417.0,172.0 417.0,162.0\" fill=\"#94A3B8\"/><text x=\"420\" y=\"212\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">nerf moteur</text><rect x=\"290\" y=\"140\" width=\"115\" height=\"54\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"347.5\" y=\"163.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Muscles</text><text x=\"347.5\" y=\"178.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">effecteurs</text><line x1=\"288\" y1=\"167\" x2=\"277.0\" y2=\"167.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"268,167 277.0,172.0 277.0,162.0\" fill=\"#94A3B8\"/><rect x=\"150\" y=\"140\" width=\"115\" height=\"54\" rx=\"10\" fill=\"#94A3B8\" fill-opacity=\"0.14\" stroke=\"#94A3B8\" stroke-width=\"2\"/><text x=\"207.5\" y=\"163.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Appui</text><text x=\"207.5\" y=\"178.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">sur la touche</text></svg>"
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Souris",
          "stepTheme": "Exercice 3",
          "stepTitle": "Nommer les stimuli chez la souris",
          "paragraphText": "Le **courant** fait fléchir la patte sans apprentissage : **stimulus absolu**. La **lumière**, d’abord sans effet sur la patte, la fait fléchir après les associations : **stimulus conditionnel**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q5",
            "type": "mcq",
            "prompt": "Une souris fléchit la patte quand on lui envoie une faible décharge électrique ; une lumière seule lui fait seulement tourner le regard. Après plusieurs associations lumière + courant, la lumière seule fait fléchir la patte. Comment nomme-t-on alors le courant et la lumière ?",
            "options": [
              "Courant : stimulus absolu ; lumière : stimulus conditionnel",
              "Courant : stimulus neutre ; lumière : stimulus absolu",
              "Les deux sont des stimuli absolus",
              "Courant : stimulus conditionnel ; lumière : stimulus neutre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La lumière a acquis son effet par apprentissage."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Souris",
          "stepTheme": "Extinction",
          "stepTitle": "La flexion disparaît",
          "paragraphText": "Lumière seule : flexion du **10e au 13e** essai, puis **plus de flexion** dès le **14e** essai : c’est l’**extinction**.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q6",
            "type": "mcq",
            "prompt": "Après le conditionnement, une souris fléchit la patte à la lumière seule du 10e au 13e essai, puis ne la fléchit plus à partir du 14e essai (lumière toujours seule, sans courant). Quel phénomène observe-t-on ?",
            "options": [
              "L’extinction du réflexe conditionnel",
              "L’apparition d’un réflexe inné",
              "Le renforcement du réflexe",
              "Une blessure de la patte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans courant pour renforcer l’association, le réflexe s’éteint."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Correction",
          "stepTheme": "Erreur du document",
          "stepTitle": "La lumière, pas le son",
          "paragraphText": "Le corrigé du document parle d’un « **son** » neutre : il n’y a **pas de son** dans l’expérience de la souris. C’est la **lumière** qui est le stimulus neutre au départ.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q7",
            "type": "mcq",
            "prompt": "Dans l’expérience de la souris (lumière et courant électrique), au 1er essai la lumière seule ne fait pas fléchir la patte. Pourquoi ?",
            "options": [
              "Parce que la lumière est encore un stimulus neutre pour ce réflexe",
              "Parce que le son est un stimulus neutre",
              "Parce que le courant électrique est trop fort",
              "Parce que la souris est aveugle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avant l’apprentissage, la lumière ne déclenche pas la flexion."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q1",
          "type": "mcq",
          "prompt": "Dans l’expérience du singe, on note les essais où il n’appuie pas sur la touche pendant les 20 s où le voyant est allumé. Série 1 : essais 1, 2, 4, 5 et 7 sans appui ; série 2 : essais 2 et 5 ; série 3 : essai 8 ; séries 4 à 7 : appui à chaque essai. Quelle suite obtient-on pour les séries 1 à 7 ?",
          "options": [
            "5 ; 2 ; 1 ; 0 ; 0 ; 0 ; 0",
            "3 ; 6 ; 7 ; 8 ; 8 ; 8 ; 8",
            "5 ; 2 ; 1 ; 1 ; 0 ; 0 ; 0",
            "1 ; 2 ; 5 ; 0 ; 0 ; 0 ; 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Série 1 : 5 essais sans appui ; série 2 : 2 ; série 3 : 1 ; ensuite aucun."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q2",
          "type": "mcq",
          "prompt": "Dans l’expérience du singe, le temps entre l’allumage du voyant et l’appui sur la touche passe d’environ 15 à 20 s (séries 1 et 2) à 2 à 5 s (série 7). Que montre cette évolution ?",
          "options": [
            "Le singe apprend : il répond de plus en plus vite au voyant",
            "Le singe se fatigue au fil des séries",
            "Le voyant éclaire de moins en moins",
            "Le singe n’a plus faim"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Des réponses plus rapides et sans échec traduisent un apprentissage."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q3",
          "type": "mcq",
          "prompt": "Dès la 4e série, le singe appuie sur la touche à chaque allumage du voyant, sans aucun échec. Comment l’expliquer ?",
          "options": [
            "Une nouvelle liaison nerveuse s’est établie entre l’aire visuelle et l’aire motrice du cortex",
            "Le singe voit beaucoup mieux qu’avant",
            "Le voyant libère la nourriture tout seul",
            "Un réflexe inné vient d’apparaître"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la nouvelle liaison corticale qui rend la réponse automatique."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q4",
          "type": "mcq",
          "prompt": "Quel est le trajet de l’influx nerveux quand le singe conditionné appuie sur la touche à la vue du voyant allumé ?",
          "options": [
            "Œil → aire visuelle → aire motrice → moelle épinière → nerf moteur → muscles",
            "Muscles → moelle épinière → aire motrice → œil",
            "Œil → muscles, directement",
            "Oreille → bulbe → glandes salivaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Du récepteur (œil) à l’effecteur (muscles), en passant par le cortex."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q5",
          "type": "mcq",
          "prompt": "Une souris fléchit la patte quand on lui envoie une faible décharge électrique ; une lumière seule lui fait seulement tourner le regard. Après plusieurs associations lumière + courant, la lumière seule fait fléchir la patte. Comment nomme-t-on alors le courant et la lumière ?",
          "options": [
            "Courant : stimulus absolu ; lumière : stimulus conditionnel",
            "Courant : stimulus neutre ; lumière : stimulus absolu",
            "Les deux sont des stimuli absolus",
            "Courant : stimulus conditionnel ; lumière : stimulus neutre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La lumière a acquis son effet par apprentissage."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q6",
          "type": "mcq",
          "prompt": "Après le conditionnement, une souris fléchit la patte à la lumière seule du 10e au 13e essai, puis ne la fléchit plus à partir du 14e essai (lumière toujours seule, sans courant). Quel phénomène observe-t-on ?",
          "options": [
            "L’extinction du réflexe conditionnel",
            "L’apparition d’un réflexe inné",
            "Le renforcement du réflexe",
            "Une blessure de la patte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans courant pour renforcer l’association, le réflexe s’éteint."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p05_q7",
          "type": "mcq",
          "prompt": "Dans l’expérience de la souris (lumière et courant électrique), au 1er essai la lumière seule ne fait pas fléchir la patte. Pourquoi ?",
          "options": [
            "Parce que la lumière est encore un stimulus neutre pour ce réflexe",
            "Parce que le son est un stimulus neutre",
            "Parce que le courant électrique est trop fort",
            "Parce que la souris est aveugle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avant l’apprentissage, la lumière ne déclenche pas la flexion."
        }
      ]
    }
  ]
};
