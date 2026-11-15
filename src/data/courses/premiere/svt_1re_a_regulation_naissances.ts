import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère A_L5_La régulation des naissances.pdf (Mon école à la maison ; durée non indiquée, 5 h estimées) ». Première A1 et A2.
// Fichier généré (scratchpad build_1re_a_svt_b.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_A_L05_REGULATION_NAISSANCES: CurriculumChapter = {
  "id": "premiere_a1_svt_l05_regulation_naissances",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 5,
  "title": "Leçon 5 : La régulation des naissances",
  "summary": "Méthodes contraceptives naturelles (Ogino-Knaus, Billings, températures), mécaniques (préservatifs, diaphragme, stérilet) et chimiques (pilule et son mode d’action), avantages de la planification familiale, calcul de la période féconde.",
  "officialVolumeHours": 5,
  "contentVersion": 2,
  "source": "SVT 1ère A_L5_La régulation des naissances.pdf (Mon école à la maison ; durée non indiquée, 5 h estimées)",
  "points": [
    {
      "id": "premiere_a1_svt_l05_regulation_naissances_p01",
      "order": 1,
      "title": "Les méthodes naturelles",
      "summary": "Abstinence, retrait, Ogino-Knaus, Billings, températures.",
      "conceptExplanation": "Situation : une élève de 1re A retrouve au village une voisine déscolarisée qui a déjà trois enfants (5 ans, 15 mois et 2 mois) ; sa santé et celle des enfants se dégradent. Une sage-femme lui conseille la planification familiale.\n- La contraception est l’ensemble des méthodes et moyens utilisés pour éviter une grossesse tout en ayant des rapports sexuels.\n- Méthodes naturelles (sans produit chimique, sans chirurgie, sans barrière) :\n- l’abstinence sexuelle : aucun rapport ; taux d’échec 0 % ;\n- le coït interrompu (retrait avant l’éjaculation) : 16 à 20 % d’échecs, par manque de maîtrise de soi ;\n- la méthode Ogino-Knaus (calcul) : l’ovulation a lieu environ 14 jours avant la fin du cycle ; la période féconde va de 3 jours avant à 3 jours après l’ovulation (durée de vie des gamètes). Cycle de 21 jours : ovulation le 7e jour, période féconde du 4e au 10e ; 28 jours : 14e jour, du 11e au 17e ; 32 jours : 18e jour, du 15e au 21e ;\n- la méthode de Billings (glaire cervicale) : juste avant l’ovulation, la glaire est abondante, fluide et laisse passer les spermatozoïdes ; en dehors, elle est rare, épaisse et imperméable ;\n- la méthode des températures : la température prise chaque matin baisse légèrement le jour de l’ovulation puis monte et reste plus haute jusqu’à la fin du cycle.\n- Les méthodes de calcul sont peu sûres : la date de l’ovulation peut varier, surtout si les cycles sont irréguliers.",
      "keyRule": "Ogino-Knaus : ovulation = durée du cycle − 14 ; période féconde = ovulation ± 3 jours.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la période féconde (cycle de 21 jours)",
        "statement": "Une femme a un cycle de 21 jours. Quelle est sa période féconde selon Ogino-Knaus ?",
        "methodSteps": [
          "Ovulation : 21 − 14 = 7e jour.",
          "Période féconde : du 7 − 3 = 4e jour au 7 + 3 = 10e jour."
        ],
        "conclusion": "Période féconde du 4e au 10e jour du cycle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Contraception",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce que la contraception ?",
          "paragraphText": "La **contraception** est l’ensemble des **méthodes** qui permettent d’**éviter une grossesse** tout en ayant des rapports sexuels.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce que la contraception ?",
            "options": [
              "L’ensemble des méthodes qui permettent d’éviter une grossesse tout en ayant des rapports sexuels",
              "Un traitement contre la stérilité",
              "La fécondation en laboratoire",
              "Une maladie de l’utérus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Contra-ception : contre la conception d’un enfant."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les méthodes contraceptives",
            "caption": "Contraception : ensemble des méthodes qui permettent d’éviter une grossesse tout en ayant des rapports sexuels.",
            "tableData": {
              "headers": [
                "Type",
                "Exemples",
                "Comment ça agit"
              ],
              "rows": [
                [
                  "Naturelles",
                  "Abstinence, retrait, Ogino-Knaus, Billings, températures",
                  "Pas de rapport (ou pas d’éjaculation dans le vagin) pendant la période féconde"
                ],
                [
                  "Mécaniques",
                  "Préservatifs masculin et féminin, diaphragme, stérilet",
                  "Empêchent la rencontre des gamètes ou la nidation"
                ],
                [
                  "Chimiques",
                  "Pilule, injection de progestatif, spermicides",
                  "Bloquent l’ovulation ou détruisent les spermatozoïdes"
                ],
                [
                  "Chirurgicales",
                  "Ligature des trompes ou des spermiductes",
                  "Définitives en principe"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Abstinence",
          "stepTheme": "0 % d’échec",
          "stepTitle": "L’abstinence",
          "paragraphText": "L’**abstinence sexuelle**, c’est ne pas avoir de rapport sexuel : c’est la seule méthode avec **0 % d’échec**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q2",
            "type": "mcq",
            "prompt": "Quelle méthode naturelle a un taux d’échec de 0 % ?",
            "options": [
              "L’abstinence sexuelle",
              "Le coït interrompu",
              "La méthode des températures",
              "La méthode Ogino-Knaus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans rapport, pas de fécondation possible."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Retrait",
          "stepTheme": "Coït interrompu",
          "stepTitle": "Le retrait avant l’éjaculation",
          "paragraphText": "Le **coït interrompu** consiste à se retirer avant l’éjaculation. Il échoue souvent (**16 à 20 %**) par **manque de maîtrise de soi**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q3",
            "type": "mcq",
            "prompt": "Pourquoi le coït interrompu (retrait avant l’éjaculation) échoue-t-il souvent (16 à 20 % d’échecs) ?",
            "options": [
              "Parce qu’il demande une grande maîtrise de soi, souvent insuffisante",
              "Parce qu’il bloque l’ovulation",
              "Parce qu’il abîme l’utérus",
              "Parce qu’il agit sur les hormones"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le contrôle n’est pas toujours possible."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Ogino-Knaus",
          "stepTheme": "Principe",
          "stepTitle": "La méthode Ogino-Knaus",
          "paragraphText": "Principe : l’**ovulation** a lieu environ **14 jours avant la fin du cycle**, quelle que soit sa durée. La **période féconde** va de **3 jours avant à 3 jours après**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q4",
            "type": "mcq",
            "prompt": "Sur quel principe repose la méthode Ogino-Knaus ?",
            "options": [
              "L’ovulation a lieu environ 14 jours avant la fin du cycle",
              "L’ovulation a lieu le premier jour des règles",
              "L’ovulation a lieu le dernier jour du cycle",
              "Les spermatozoïdes vivent un mois"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la phase lutéale qui dure environ 14 jours."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Cycle de 28 jours",
          "stepTheme": "Calcul",
          "stepTitle": "La période féconde pour 28 jours",
          "paragraphText": "Cycle de **28 jours** : ovulation le **28 − 14 = 14e jour** ; période féconde du **11e au 17e jour**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q5",
            "type": "mcq",
            "prompt": "Selon la méthode Ogino-Knaus, quelle est la période féconde d’une femme dont le cycle dure 28 jours (ovulation le 14e jour, plus ou moins 3 jours) ?",
            "options": [
              "Du 11e au 17e jour",
              "Du 1er au 5e jour",
              "Du 20e au 28e jour",
              "Du 4e au 10e jour"
            ],
            "correctAnswerIndex": 0,
            "explanation": "14 − 3 = 11 et 14 + 3 = 17."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Méthode Ogino-Knaus : la période féconde",
            "caption": "Ovulation environ 14 jours avant la fin du cycle ; période féconde de 3 jours avant à 3 jours après.",
            "tableData": {
              "headers": [
                "Durée du cycle",
                "Jour de l’ovulation",
                "Période féconde"
              ],
              "rows": [
                [
                  "21 jours",
                  "7e jour",
                  "Du 4e au 10e jour"
                ],
                [
                  "28 jours",
                  "14e jour",
                  "Du 11e au 17e jour"
                ],
                [
                  "29 jours",
                  "15e jour",
                  "Du 12e au 18e jour"
                ],
                [
                  "32 jours",
                  "18e jour",
                  "Du 15e au 21e jour"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Cycle de 32 jours",
          "stepTheme": "Calcul",
          "stepTitle": "La période féconde pour 32 jours",
          "paragraphText": "Cycle de **32 jours** : ovulation le **32 − 14 = 18e jour** ; période féconde du **15e au 21e jour**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q6",
            "type": "mcq",
            "prompt": "Selon la méthode Ogino-Knaus (ovulation 14 jours avant la fin du cycle, période féconde de 3 jours avant à 3 jours après), quelle est la période féconde pour un cycle de 32 jours ?",
            "options": [
              "Du 15e au 21e jour",
              "Du 11e au 17e jour",
              "Du 4e au 10e jour",
              "Du 18e au 24e jour"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ovulation 32 − 14 = 18 ; 18 − 3 = 15 et 18 + 3 = 21."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Billings",
          "stepTheme": "Glaire cervicale",
          "stepTitle": "La méthode de Billings",
          "paragraphText": "Juste avant l’ovulation, la **glaire cervicale** est **abondante**, **fluide** et laisse passer les spermatozoïdes ; en dehors, elle est rare et épaisse.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q7",
            "type": "mcq",
            "prompt": "Selon la méthode de Billings, comment est la glaire cervicale juste avant l’ovulation ?",
            "options": [
              "Abondante, fluide et perméable aux spermatozoïdes",
              "Épaisse et peu abondante",
              "Absente",
              "Mélangée de sang"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une glaire fluide signale la période féconde."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepBadge": "Fiabilité",
          "stepTheme": "Attention",
          "stepTitle": "Des méthodes peu sûres",
          "paragraphText": "La date de l’ovulation peut **varier** d’un cycle à l’autre, surtout si les cycles sont **irréguliers** : les méthodes de calcul sont **peu sûres**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p01_q8",
            "type": "mcq",
            "prompt": "Pourquoi la méthode Ogino-Knaus est-elle peu sûre ?",
            "options": [
              "Parce que la date de l’ovulation peut varier, surtout si les cycles sont irréguliers",
              "Parce qu’elle est dangereuse pour la santé",
              "Parce qu’elle protège du SIDA",
              "Parce qu’elle supprime les règles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un cycle plus court ou plus long fausse le calcul."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce que la contraception ?",
          "options": [
            "L’ensemble des méthodes qui permettent d’éviter une grossesse tout en ayant des rapports sexuels",
            "Un traitement contre la stérilité",
            "La fécondation en laboratoire",
            "Une maladie de l’utérus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Contra-ception : contre la conception d’un enfant."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q2",
          "type": "mcq",
          "prompt": "Quelle méthode naturelle a un taux d’échec de 0 % ?",
          "options": [
            "L’abstinence sexuelle",
            "Le coït interrompu",
            "La méthode des températures",
            "La méthode Ogino-Knaus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans rapport, pas de fécondation possible."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q3",
          "type": "mcq",
          "prompt": "Pourquoi le coït interrompu (retrait avant l’éjaculation) échoue-t-il souvent (16 à 20 % d’échecs) ?",
          "options": [
            "Parce qu’il demande une grande maîtrise de soi, souvent insuffisante",
            "Parce qu’il bloque l’ovulation",
            "Parce qu’il abîme l’utérus",
            "Parce qu’il agit sur les hormones"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le contrôle n’est pas toujours possible."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q4",
          "type": "mcq",
          "prompt": "Sur quel principe repose la méthode Ogino-Knaus ?",
          "options": [
            "L’ovulation a lieu environ 14 jours avant la fin du cycle",
            "L’ovulation a lieu le premier jour des règles",
            "L’ovulation a lieu le dernier jour du cycle",
            "Les spermatozoïdes vivent un mois"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la phase lutéale qui dure environ 14 jours."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q5",
          "type": "mcq",
          "prompt": "Selon la méthode Ogino-Knaus, quelle est la période féconde d’une femme dont le cycle dure 28 jours (ovulation le 14e jour, plus ou moins 3 jours) ?",
          "options": [
            "Du 11e au 17e jour",
            "Du 1er au 5e jour",
            "Du 20e au 28e jour",
            "Du 4e au 10e jour"
          ],
          "correctAnswerIndex": 0,
          "explanation": "14 − 3 = 11 et 14 + 3 = 17."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q6",
          "type": "mcq",
          "prompt": "Selon la méthode Ogino-Knaus (ovulation 14 jours avant la fin du cycle, période féconde de 3 jours avant à 3 jours après), quelle est la période féconde pour un cycle de 32 jours ?",
          "options": [
            "Du 15e au 21e jour",
            "Du 11e au 17e jour",
            "Du 4e au 10e jour",
            "Du 18e au 24e jour"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ovulation 32 − 14 = 18 ; 18 − 3 = 15 et 18 + 3 = 21."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q7",
          "type": "mcq",
          "prompt": "Selon la méthode de Billings, comment est la glaire cervicale juste avant l’ovulation ?",
          "options": [
            "Abondante, fluide et perméable aux spermatozoïdes",
            "Épaisse et peu abondante",
            "Absente",
            "Mélangée de sang"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une glaire fluide signale la période féconde."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p01_q8",
          "type": "mcq",
          "prompt": "Pourquoi la méthode Ogino-Knaus est-elle peu sûre ?",
          "options": [
            "Parce que la date de l’ovulation peut varier, surtout si les cycles sont irréguliers",
            "Parce qu’elle est dangereuse pour la santé",
            "Parce qu’elle protège du SIDA",
            "Parce qu’elle supprime les règles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un cycle plus court ou plus long fausse le calcul."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l05_regulation_naissances_p02",
      "order": 2,
      "title": "Les méthodes mécaniques et chirurgicales",
      "summary": "Préservatifs, diaphragme, stérilet, ligature ; ce qui n’est pas une contraception.",
      "conceptExplanation": "- Préservatif masculin : étui en caoutchouc très mince qui recouvre le pénis pendant le rapport et recueille le sperme.\n- Préservatif féminin : gaine souple lubrifiée placée dans le vagin avant le rapport, avec un anneau qui recouvre le col de l’utérus.\n- Les préservatifs, masculin et féminin, sont les seuls moyens qui protègent aussi contre le VIH (SIDA) et les autres infections sexuellement transmissibles.\n- Diaphragme : petite coupe en caoutchouc (60 à 90 mm) enduite de spermicide, qui recouvre le col de l’utérus.\n- Stérilet (dispositif intra-utérin) : petit objet en plastique ou en cuivre de 3 à 5 cm, placé dans l’utérus par un agent de santé pour 1 à 10 ans ; il gêne la fécondation et empêche la nidation.\n- Méthode chirurgicale : ligature des trompes (oviductes) chez la femme ou des spermiductes chez l’homme ; elle est en principe définitive.\n- La FIVETE (fécondation in vitro et transfert d’embryon) n’est pas une contraception : elle sert au contraire à aider un couple à avoir un enfant.",
      "keyRule": "Préservatifs : barrière + protection contre les IST. Diaphragme : col fermé. Stérilet : dans l’utérus, 1 à 10 ans. Ligature : définitive.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir une méthode qui protège du VIH",
        "statement": "Un couple veut éviter une grossesse et se protéger du VIH. Quel moyen choisir ?",
        "methodSteps": [
          "La pilule et le stérilet évitent la grossesse mais ne protègent pas des IST.",
          "Seuls les préservatifs font barrière aux microbes."
        ],
        "conclusion": "Le préservatif (masculin ou féminin), éventuellement associé à une autre méthode."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Préservatif masculin",
          "stepTheme": "Barrière",
          "stepTitle": "Le préservatif masculin",
          "paragraphText": "Le **préservatif masculin** recouvre le pénis et **recueille le sperme** : les spermatozoïdes n’atteignent pas l’ovule.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q1",
            "type": "mcq",
            "prompt": "Comment le préservatif masculin empêche-t-il la fécondation ?",
            "options": [
              "Il recueille le sperme et empêche les spermatozoïdes d’atteindre l’ovule",
              "Il bloque l’ovulation",
              "Il détruit l’ovule",
              "Il modifie les hormones de la femme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est une barrière mécanique."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les méthodes contraceptives",
            "caption": "Contraception : ensemble des méthodes qui permettent d’éviter une grossesse tout en ayant des rapports sexuels.",
            "tableData": {
              "headers": [
                "Type",
                "Exemples",
                "Comment ça agit"
              ],
              "rows": [
                [
                  "Naturelles",
                  "Abstinence, retrait, Ogino-Knaus, Billings, températures",
                  "Pas de rapport (ou pas d’éjaculation dans le vagin) pendant la période féconde"
                ],
                [
                  "Mécaniques",
                  "Préservatifs masculin et féminin, diaphragme, stérilet",
                  "Empêchent la rencontre des gamètes ou la nidation"
                ],
                [
                  "Chimiques",
                  "Pilule, injection de progestatif, spermicides",
                  "Bloquent l’ovulation ou détruisent les spermatozoïdes"
                ],
                [
                  "Chirurgicales",
                  "Ligature des trompes ou des spermiductes",
                  "Définitives en principe"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Préservatif féminin",
          "stepTheme": "Barrière",
          "stepTitle": "Le préservatif féminin",
          "paragraphText": "Le **préservatif féminin** est une gaine souple placée **dans le vagin** avant le rapport ; un anneau recouvre le col de l’utérus.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q2",
            "type": "mcq",
            "prompt": "Où place-t-on le préservatif féminin ?",
            "options": [
              "Dans le vagin, avant le rapport",
              "Dans l’utérus, pour plusieurs années",
              "Sur l’ovaire",
              "Sur le col, après le rapport"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il empêche la rencontre des gamètes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "IST",
          "stepTheme": "Double protection",
          "stepTitle": "Ce qui protège aussi des IST",
          "paragraphText": "Les **préservatifs**, **masculin et féminin**, sont les seuls moyens qui protègent **aussi** contre le **VIH** et les autres infections sexuellement transmissibles.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q3",
            "type": "mcq",
            "prompt": "Quels moyens contraceptifs protègent aussi contre le VIH (SIDA) et les autres infections sexuellement transmissibles ?",
            "options": [
              "Les préservatifs, masculin et féminin",
              "La pilule",
              "Le stérilet",
              "La méthode Ogino-Knaus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ils forment une barrière contre les microbes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Diaphragme",
          "stepTheme": "Col de l’utérus",
          "stepTitle": "Le diaphragme",
          "paragraphText": "Le **diaphragme** est une petite coupe en caoutchouc **enduite de spermicide** qui **recouvre le col de l’utérus**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q4",
            "type": "mcq",
            "prompt": "Que fait le diaphragme, petite coupe en caoutchouc enduite de spermicide ?",
            "options": [
              "Il recouvre le col de l’utérus et empêche les spermatozoïdes d’y entrer",
              "Il bloque l’ovulation",
              "Il se prend par la bouche",
              "Il se place sur le pénis"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il ferme l’entrée de l’utérus."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Stérilet",
          "stepTheme": "Dans l’utérus",
          "stepTitle": "Le stérilet",
          "paragraphText": "Le **stérilet** (plastique ou cuivre, 3 à 5 cm) est placé **dans l’utérus** par un agent de santé pour **1 à 10 ans** ; il empêche la **nidation**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q5",
            "type": "mcq",
            "prompt": "Où le stérilet (dispositif intra-utérin) est-il placé, et pour combien de temps ?",
            "options": [
              "Dans l’utérus, pour 1 à 10 ans",
              "Dans le vagin, pour un seul rapport",
              "Sur le pénis",
              "Dans l’ovaire, pour toute la vie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Intra-utérin : à l’intérieur de l’utérus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Ligature",
          "stepTheme": "Chirurgie",
          "stepTitle": "Une méthode définitive",
          "paragraphText": "La **ligature des trompes** (femme) ou des **spermiductes** (homme) est une opération en principe **définitive**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q6",
            "type": "mcq",
            "prompt": "Quelle méthode contraceptive est en principe définitive ?",
            "options": [
              "La ligature des trompes ou des spermiductes",
              "La pilule",
              "Le préservatif",
              "Le diaphragme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les gamètes ne peuvent plus circuler."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "FIVETE",
          "stepTheme": "Activité",
          "stepTitle": "Ce n’est pas une contraception",
          "paragraphText": "La **FIVETE** (fécondation in vitro et transfert d’embryon) sert à **avoir** un enfant : ce n’est **pas** une méthode contraceptive.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p02_q7",
            "type": "mcq",
            "prompt": "Parmi ces méthodes, laquelle n’est pas une méthode contraceptive ?",
            "options": [
              "La FIVETE (fécondation in vitro et transfert d’embryon)",
              "Le stérilet",
              "Le préservatif",
              "Les spermicides"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La FIVETE aide au contraire la fécondation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q1",
          "type": "mcq",
          "prompt": "Comment le préservatif masculin empêche-t-il la fécondation ?",
          "options": [
            "Il recueille le sperme et empêche les spermatozoïdes d’atteindre l’ovule",
            "Il bloque l’ovulation",
            "Il détruit l’ovule",
            "Il modifie les hormones de la femme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est une barrière mécanique."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q2",
          "type": "mcq",
          "prompt": "Où place-t-on le préservatif féminin ?",
          "options": [
            "Dans le vagin, avant le rapport",
            "Dans l’utérus, pour plusieurs années",
            "Sur l’ovaire",
            "Sur le col, après le rapport"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il empêche la rencontre des gamètes."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q3",
          "type": "mcq",
          "prompt": "Quels moyens contraceptifs protègent aussi contre le VIH (SIDA) et les autres infections sexuellement transmissibles ?",
          "options": [
            "Les préservatifs, masculin et féminin",
            "La pilule",
            "Le stérilet",
            "La méthode Ogino-Knaus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ils forment une barrière contre les microbes."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q4",
          "type": "mcq",
          "prompt": "Que fait le diaphragme, petite coupe en caoutchouc enduite de spermicide ?",
          "options": [
            "Il recouvre le col de l’utérus et empêche les spermatozoïdes d’y entrer",
            "Il bloque l’ovulation",
            "Il se prend par la bouche",
            "Il se place sur le pénis"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il ferme l’entrée de l’utérus."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q5",
          "type": "mcq",
          "prompt": "Où le stérilet (dispositif intra-utérin) est-il placé, et pour combien de temps ?",
          "options": [
            "Dans l’utérus, pour 1 à 10 ans",
            "Dans le vagin, pour un seul rapport",
            "Sur le pénis",
            "Dans l’ovaire, pour toute la vie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Intra-utérin : à l’intérieur de l’utérus."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q6",
          "type": "mcq",
          "prompt": "Quelle méthode contraceptive est en principe définitive ?",
          "options": [
            "La ligature des trompes ou des spermiductes",
            "La pilule",
            "Le préservatif",
            "Le diaphragme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les gamètes ne peuvent plus circuler."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p02_q7",
          "type": "mcq",
          "prompt": "Parmi ces méthodes, laquelle n’est pas une méthode contraceptive ?",
          "options": [
            "La FIVETE (fécondation in vitro et transfert d’embryon)",
            "Le stérilet",
            "Le préservatif",
            "Les spermicides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La FIVETE aide au contraire la fécondation."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l05_regulation_naissances_p03",
      "order": 3,
      "title": "La pilule et son mode d’action",
      "summary": "Pilule combinée : rétrocontrôle négatif, pas d’ovulation, utérus impropre.",
      "conceptExplanation": "- Expérience : on dose les hormones de l’ovaire (œstrogènes, progestérone) et de l’antéhypophyse (FSH, LH) chez une femme, pendant un cycle sans pilule puis un cycle avec pilule. Sans pilule : pics vers le milieu du cycle. Avec pilule : œstradiol bas et constant, progestérone absente, plus de pics de FSH ni de LH.\n- La pilule combinée contient un œstrogène et un progestatif de synthèse ; elle se prend chaque jour.\n- Au niveau de l’hypothalamus et de l’antéhypophyse : le taux élevé d’hormones de synthèse exerce un rétrocontrôle négatif ; il n’y a plus de pics de FSH ni de LH.\n- Au niveau des ovaires : sans assez de FSH, les follicules ne mûrissent pas ; sans pic de LH, il n’y a pas d’ovulation, donc pas de corps jaune ni de progestérone.\n- Au niveau de l’utérus : la muqueuse reste mince, impropre à la nidation ; la glaire cervicale devient épaisse et bloque les spermatozoïdes.\n- Corrections du document : dans le vrai ou faux, le corrigé affirme que le préservatif masculin est « aussi efficace que la pilule ». En usage courant, c’est faux : le préservatif échoue plus souvent (mauvaise pose, déchirure, oubli), mais il protège des IST, ce que la pilule ne fait pas. Le document écrit aussi « la dentelle utérine s’atrophie » : sous pilule, la dentelle utérine ne se forme pas, la muqueuse reste mince.",
      "keyRule": "Pilule = œstrogène + progestatif → rétrocontrôle négatif → pas de pic de LH → pas d’ovulation ; muqueuse impropre, glaire épaisse.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’absence d’ovulation sous pilule",
        "statement": "Pourquoi une femme qui prend la pilule chaque jour n’ovule-t-elle pas ?",
        "methodSteps": [
          "Les hormones de la pilule freinent l’hypothalamus et l’antéhypophyse (rétrocontrôle négatif).",
          "Sans pic de LH, le follicule ne se rompt pas."
        ],
        "conclusion": "Il n’y a pas d’ovulation, donc pas de fécondation possible."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Pilule combinée",
          "stepTheme": "Composition",
          "stepTitle": "Ce que contient la pilule",
          "paragraphText": "La **pilule combinée** contient un **œstrogène** et un **progestatif** de synthèse, pris **chaque jour**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q1",
            "type": "mcq",
            "prompt": "Que contient la pilule contraceptive combinée ?",
            "options": [
              "Un œstrogène et un progestatif de synthèse",
              "De la FSH et de la LH",
              "Des spermicides",
              "Seulement des vitamines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont des hormones proches de celles de l’ovaire."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Comment agit la pilule combinée",
            "caption": "Les hormones de synthèse de la pilule agissent à trois niveaux : hypothalamus et antéhypophyse, ovaires, utérus.",
            "svgContent": "<svg viewBox=\"0 0 560 290\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Pilule : pas de pic de FSH ni de LH, pas d’ovulation, muqueuse impropre et glaire épaisse\"><rect x=\"15\" y=\"108\" width=\"150\" height=\"74\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"90\" y=\"134\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Pilule combinée</text><text x=\"90\" y=\"149\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">œstrogène</text><text x=\"90\" y=\"164\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">+ progestatif</text><line x1=\"167\" y1=\"128\" x2=\"241.7\" y2=\"52.4\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"248,46 238.1,48.9 245.2,55.9\" fill=\"#EF4444\"/><line x1=\"167\" y1=\"145\" x2=\"239.0\" y2=\"145.0\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"248,145 239.0,140.0 239.0,150.0\" fill=\"#EF4444\"/><line x1=\"167\" y1=\"162\" x2=\"241.7\" y2=\"237.6\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"248,244 245.2,234.1 238.1,241.1\" fill=\"#EF4444\"/><text x=\"90\" y=\"72\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">rétrocontrôle</text><text x=\"90\" y=\"86\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">négatif</text><rect x=\"252\" y=\"15\" width=\"290\" height=\"62\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"397\" y=\"42.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Hypothalamus et antéhypophyse</text><text x=\"397\" y=\"57.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">Pas de pic de FSH ni de LH</text><rect x=\"252\" y=\"114\" width=\"290\" height=\"62\" rx=\"10\" fill=\"#EC4899\" fill-opacity=\"0.14\" stroke=\"#EC4899\" stroke-width=\"2\"/><text x=\"397\" y=\"141.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Ovaires</text><text x=\"397\" y=\"156.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">Pas d’ovulation, pas de corps jaune</text><rect x=\"252\" y=\"213\" width=\"290\" height=\"62\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"397\" y=\"240.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Utérus</text><text x=\"397\" y=\"255.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">Muqueuse impropre, glaire épaisse</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Courbes",
          "stepTheme": "Expérience",
          "stepTitle": "Plus de pics hormonaux",
          "paragraphText": "Avec la pilule, les **pics de FSH et de LH disparaissent** ; l’œstradiol reste bas et la progestérone disparaît.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q2",
            "type": "mcq",
            "prompt": "Chez une femme qui prend la pilule chaque jour, que deviennent les pics de FSH et de LH ?",
            "options": [
              "Ils disparaissent",
              "Ils deviennent plus grands",
              "Ils restent normaux",
              "Ils apparaissent deux fois par cycle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les courbes deviennent plates."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Rétrocontrôle",
          "stepTheme": "Hypophyse",
          "stepTitle": "La pilule freine l’hypophyse",
          "paragraphText": "Les hormones de la pilule exercent un **rétrocontrôle négatif** sur l’**hypothalamus** et l’**antéhypophyse**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q3",
            "type": "mcq",
            "prompt": "Pourquoi la pilule fait-elle disparaître les pics de FSH et de LH ?",
            "options": [
              "Ses hormones exercent un rétrocontrôle négatif sur l’hypothalamus et l’antéhypophyse",
              "Elle détruit l’hypophyse",
              "Elle bloque les règles",
              "Elle remplace la FSH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Beaucoup d’hormones ovariennes freinent la sécrétion de FSH et de LH."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Ovaires",
          "stepTheme": "Pas d’ovulation",
          "stepTitle": "Dans l’ovaire",
          "paragraphText": "Sans assez de FSH, les follicules ne mûrissent pas ; **sans pic de LH**, **pas d’ovulation**, donc **pas de corps jaune**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q4",
            "type": "mcq",
            "prompt": "Sans pic de LH, que se passe-t-il dans l’ovaire d’une femme sous pilule ?",
            "options": [
              "Il n’y a pas d’ovulation ni de corps jaune",
              "L’ovulation a lieu deux fois",
              "Les follicules mûrissent plus vite",
              "L’ovaire produit plus de progestérone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pic de LH est indispensable à l’ovulation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Utérus",
          "stepTheme": "Double sécurité",
          "stepTitle": "Dans l’utérus",
          "paragraphText": "La muqueuse utérine reste **impropre à la nidation** et la **glaire cervicale épaisse** bloque les spermatozoïdes.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q5",
            "type": "mcq",
            "prompt": "Quels effets la pilule a-t-elle aussi sur l’utérus ?",
            "options": [
              "La muqueuse devient impropre à la nidation et la glaire épaisse bloque les spermatozoïdes",
              "L’utérus grossit",
              "La muqueuse devient une dentelle parfaite",
              "Aucun effet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La pilule agit à trois niveaux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Activité",
          "stepTitle": "Ovaire ou utérus ?",
          "paragraphText": "« Les hormones de la pilule agissent sur les ovaires en modifiant l’endomètre » : **faux**. L’**endomètre** est la muqueuse de l’**utérus**, pas de l’ovaire.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q6",
            "type": "mcq",
            "prompt": "« Les hormones de la pilule agissent sur les ovaires en modifiant l’endomètre. » Vrai ou faux ?",
            "options": [
              "Faux : l’endomètre est la muqueuse de l’utérus, pas de l’ovaire",
              "Vrai",
              "Faux : la pilule n’agit pas sur l’utérus",
              "Vrai, seulement le premier mois"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Endomètre = utérus."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Efficacité",
          "stepTheme": "Erreur du document",
          "stepTitle": "Préservatif ou pilule : lequel est plus sûr ?",
          "paragraphText": "Le corrigé du document dit le préservatif « **aussi efficace** que la pilule » : en usage courant, c’est **faux** (mauvaise pose, déchirure, oubli). Mais le préservatif **protège des IST**, ce que la pilule ne fait pas.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p03_q7",
            "type": "mcq",
            "prompt": "« Le préservatif masculin est un moyen de contraception aussi efficace que la pilule. » Que faut-il répondre ?",
            "options": [
              "Faux en pratique : il échoue plus souvent, mais il protège aussi des IST, ce que la pilule ne fait pas",
              "Vrai dans tous les cas",
              "Faux : le préservatif ne protège jamais d’une grossesse",
              "Vrai : la pilule protège aussi du SIDA"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque méthode a ses forces ; on peut les associer."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q1",
          "type": "mcq",
          "prompt": "Que contient la pilule contraceptive combinée ?",
          "options": [
            "Un œstrogène et un progestatif de synthèse",
            "De la FSH et de la LH",
            "Des spermicides",
            "Seulement des vitamines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont des hormones proches de celles de l’ovaire."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q2",
          "type": "mcq",
          "prompt": "Chez une femme qui prend la pilule chaque jour, que deviennent les pics de FSH et de LH ?",
          "options": [
            "Ils disparaissent",
            "Ils deviennent plus grands",
            "Ils restent normaux",
            "Ils apparaissent deux fois par cycle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les courbes deviennent plates."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q3",
          "type": "mcq",
          "prompt": "Pourquoi la pilule fait-elle disparaître les pics de FSH et de LH ?",
          "options": [
            "Ses hormones exercent un rétrocontrôle négatif sur l’hypothalamus et l’antéhypophyse",
            "Elle détruit l’hypophyse",
            "Elle bloque les règles",
            "Elle remplace la FSH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Beaucoup d’hormones ovariennes freinent la sécrétion de FSH et de LH."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q4",
          "type": "mcq",
          "prompt": "Sans pic de LH, que se passe-t-il dans l’ovaire d’une femme sous pilule ?",
          "options": [
            "Il n’y a pas d’ovulation ni de corps jaune",
            "L’ovulation a lieu deux fois",
            "Les follicules mûrissent plus vite",
            "L’ovaire produit plus de progestérone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pic de LH est indispensable à l’ovulation."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q5",
          "type": "mcq",
          "prompt": "Quels effets la pilule a-t-elle aussi sur l’utérus ?",
          "options": [
            "La muqueuse devient impropre à la nidation et la glaire épaisse bloque les spermatozoïdes",
            "L’utérus grossit",
            "La muqueuse devient une dentelle parfaite",
            "Aucun effet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La pilule agit à trois niveaux."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q6",
          "type": "mcq",
          "prompt": "« Les hormones de la pilule agissent sur les ovaires en modifiant l’endomètre. » Vrai ou faux ?",
          "options": [
            "Faux : l’endomètre est la muqueuse de l’utérus, pas de l’ovaire",
            "Vrai",
            "Faux : la pilule n’agit pas sur l’utérus",
            "Vrai, seulement le premier mois"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Endomètre = utérus."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p03_q7",
          "type": "mcq",
          "prompt": "« Le préservatif masculin est un moyen de contraception aussi efficace que la pilule. » Que faut-il répondre ?",
          "options": [
            "Faux en pratique : il échoue plus souvent, mais il protège aussi des IST, ce que la pilule ne fait pas",
            "Vrai dans tous les cas",
            "Faux : le préservatif ne protège jamais d’une grossesse",
            "Vrai : la pilule protège aussi du SIDA"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque méthode a ses forces ; on peut les associer."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l05_regulation_naissances_p04",
      "order": 4,
      "title": "Les avantages de la planification familiale",
      "summary": "Espacer les naissances, santé de la mère et de l’enfant, équilibre familial, responsabilité.",
      "conceptExplanation": "- Le planning familial permet aux couples de choisir le moment d’avoir un enfant, d’espacer les naissances et d’en limiter le nombre.\n- Il préserve la santé de la mère (qui récupère entre deux grossesses) et de l’enfant ; selon l’OMS, un bon écart entre deux naissances réduit le risque de décès prématuré du nouveau-né.\n- Il réduit les grossesses chez les adolescentes et chez ceux qui ne peuvent pas s’occuper d’un bébé.\n- Il favorise l’équilibre et le bien-être familial, une gestion rationnelle des ressources et une meilleure éducation des enfants.\n- Une bonne méthode contraceptive doit être réversible (temporaire) et sans danger pour le couple et les futurs enfants.\n- La sexualité pose un problème de responsabilité : il faut être prêt moralement, matériellement et intellectuellement pour élever un enfant.\n- Dans la situation de départ, des grossesses trop rapprochées (5 ans, 15 mois, 2 mois) épuisent la mère et fragilisent les enfants.",
      "keyRule": "Espacer et choisir les naissances : santé de la mère et de l’enfant, équilibre familial, meilleure éducation.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la situation de la voisine",
        "statement": "Une jeune mère a trois enfants de 5 ans, 15 mois et 2 mois ; sa santé se dégrade. Pourquoi la sage-femme lui conseille-t-elle la planification familiale ?",
        "methodSteps": [
          "Les deux dernières grossesses sont très rapprochées : la mère n’a pas eu le temps de récupérer.",
          "Espacer les naissances préserve sa santé et celle des enfants."
        ],
        "conclusion": "La planification familiale lui permettra d’espacer les prochaines naissances."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Espacement",
          "stepTheme": "Avantage",
          "stepTitle": "Espacer les naissances",
          "paragraphText": "La planification familiale permet de **choisir le moment** d’avoir un enfant et d’**espacer les naissances**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q1",
            "type": "mcq",
            "prompt": "Quel est l’un des principaux avantages de la planification familiale ?",
            "options": [
              "Espacer les naissances pour préserver la santé de la mère et de l’enfant",
              "Avoir le plus d’enfants possible très vite",
              "Empêcher toute vie de couple",
              "Remplacer l’école"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’espacement protège la mère et l’enfant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "OMS",
          "stepTheme": "Santé",
          "stepTitle": "Un écart qui sauve des vies",
          "paragraphText": "Selon l’**OMS**, garder un **écart** entre deux enfants **réduit le risque de décès prématuré** du nouveau-né.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q2",
            "type": "mcq",
            "prompt": "Selon l’OMS, quel est l’effet d’un bon écart entre deux naissances ?",
            "options": [
              "Il réduit le risque de décès prématuré du nouveau-né",
              "Il augmente les maladies de l’enfant",
              "Il n’a aucun effet",
              "Il empêche l’allaitement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La mère récupère et le bébé est mieux suivi."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Situation",
          "stepTheme": "Grossesses rapprochées",
          "stepTitle": "La voisine épuisée",
          "paragraphText": "Trois enfants de **5 ans, 15 mois et 2 mois** : les dernières grossesses sont **trop rapprochées**, la mère s’épuise.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q3",
            "type": "mcq",
            "prompt": "Une jeune mère a trois enfants de 5 ans, 15 mois et 2 mois ; sa santé et celle des enfants se dégradent. Qu’est-ce qui explique en partie cette situation ?",
            "options": [
              "Des grossesses trop rapprochées, qui épuisent la mère",
              "Un trop grand écart entre les naissances",
              "L’usage d’une méthode contraceptive",
              "Le fait d’aller à l’école"
            ],
            "correctAnswerIndex": 0,
            "explanation": "15 mois et 2 mois : deux naissances en un peu plus d’un an."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Relever",
          "stepTheme": "Activité",
          "stepTitle": "Un avantage pour la famille",
          "paragraphText": "Avantages : santé de la mère et de l’enfant, **équilibre familial**, **gestion rationnelle des ressources**, meilleure éducation, bien-être familial.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q4",
            "type": "mcq",
            "prompt": "Lequel de ces impacts est un avantage de la contraception pour la vie familiale ?",
            "options": [
              "Une gestion rationnelle des ressources familiales",
              "L’épuisement des ressources familiales",
              "La détérioration de la santé de la mère",
              "Le divorce"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les autres sont des conséquences négatives."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Adolescentes",
          "stepTheme": "Prévention",
          "stepTitle": "Éviter les grossesses précoces",
          "paragraphText": "La planification familiale **réduit les grossesses chez les adolescentes**, qui compromettent souvent leurs études et leur santé.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q5",
            "type": "mcq",
            "prompt": "Que permet la planification familiale chez les adolescentes ?",
            "options": [
              "De réduire les grossesses précoces et non désirées",
              "D’augmenter le nombre de grossesses",
              "D’arrêter l’école",
              "Rien du tout"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme la voisine déscolarisée de la situation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Qualités",
          "stepTheme": "Bonne méthode",
          "stepTitle": "Les qualités d’une méthode",
          "paragraphText": "Une bonne méthode contraceptive doit être **réversible** (temporaire) et **sans danger** pour le couple et les futurs enfants.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q6",
            "type": "mcq",
            "prompt": "Quelles qualités doit avoir une bonne méthode contraceptive ?",
            "options": [
              "Être réversible et sans danger pour le couple et les futurs enfants",
              "Être définitive et douloureuse",
              "Rendre stérile pour toujours",
              "Être la plus chère possible"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le couple doit pouvoir avoir un enfant quand il le décide."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepBadge": "Responsabilité",
          "stepTheme": "Conclusion",
          "stepTitle": "Être prêt à élever un enfant",
          "paragraphText": "Il ne suffit pas de faire des enfants : il faut être prêt **moralement**, **matériellement** et **intellectuellement** pour les élever.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p04_q7",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que la sexualité pose un problème de responsabilité ?",
            "options": [
              "Parce qu’il faut être prêt moralement, matériellement et intellectuellement pour élever un enfant",
              "Parce que les enfants s’élèvent tout seuls",
              "Parce que la contraception est interdite",
              "Parce que seul l’âge compte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un enfant a besoin de parents capables de s’en occuper."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q1",
          "type": "mcq",
          "prompt": "Quel est l’un des principaux avantages de la planification familiale ?",
          "options": [
            "Espacer les naissances pour préserver la santé de la mère et de l’enfant",
            "Avoir le plus d’enfants possible très vite",
            "Empêcher toute vie de couple",
            "Remplacer l’école"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’espacement protège la mère et l’enfant."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q2",
          "type": "mcq",
          "prompt": "Selon l’OMS, quel est l’effet d’un bon écart entre deux naissances ?",
          "options": [
            "Il réduit le risque de décès prématuré du nouveau-né",
            "Il augmente les maladies de l’enfant",
            "Il n’a aucun effet",
            "Il empêche l’allaitement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mère récupère et le bébé est mieux suivi."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q3",
          "type": "mcq",
          "prompt": "Une jeune mère a trois enfants de 5 ans, 15 mois et 2 mois ; sa santé et celle des enfants se dégradent. Qu’est-ce qui explique en partie cette situation ?",
          "options": [
            "Des grossesses trop rapprochées, qui épuisent la mère",
            "Un trop grand écart entre les naissances",
            "L’usage d’une méthode contraceptive",
            "Le fait d’aller à l’école"
          ],
          "correctAnswerIndex": 0,
          "explanation": "15 mois et 2 mois : deux naissances en un peu plus d’un an."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q4",
          "type": "mcq",
          "prompt": "Lequel de ces impacts est un avantage de la contraception pour la vie familiale ?",
          "options": [
            "Une gestion rationnelle des ressources familiales",
            "L’épuisement des ressources familiales",
            "La détérioration de la santé de la mère",
            "Le divorce"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les autres sont des conséquences négatives."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q5",
          "type": "mcq",
          "prompt": "Que permet la planification familiale chez les adolescentes ?",
          "options": [
            "De réduire les grossesses précoces et non désirées",
            "D’augmenter le nombre de grossesses",
            "D’arrêter l’école",
            "Rien du tout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme la voisine déscolarisée de la situation."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q6",
          "type": "mcq",
          "prompt": "Quelles qualités doit avoir une bonne méthode contraceptive ?",
          "options": [
            "Être réversible et sans danger pour le couple et les futurs enfants",
            "Être définitive et douloureuse",
            "Rendre stérile pour toujours",
            "Être la plus chère possible"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le couple doit pouvoir avoir un enfant quand il le décide."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p04_q7",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que la sexualité pose un problème de responsabilité ?",
          "options": [
            "Parce qu’il faut être prêt moralement, matériellement et intellectuellement pour élever un enfant",
            "Parce que les enfants s’élèvent tout seuls",
            "Parce que la contraception est interdite",
            "Parce que seul l’âge compte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un enfant a besoin de parents capables de s’en occuper."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l05_regulation_naissances_p05",
      "order": 5,
      "title": "Évaluation : calculer la période féconde",
      "summary": "Ovulation, période féconde et prochaines règles d’après le calendrier ; conclure prudemment.",
      "conceptExplanation": "Situation : une élève de 1re A utilise une méthode fondée sur la durée de son cycle et sa période de fécondité. Son cycle dure 29 jours, ses dernières règles ont commencé le 10 janvier, et elle a eu un rapport sexuel le 25 janvier.\n- Méthode : c’est la méthode Ogino-Knaus.\n- Ovulation : 29 − 14 = 15e jour du cycle. Le 10 janvier est le 1er jour, donc le 15e jour est le 10 + 14 = 24 janvier.\n- Période féconde : du 12e au 18e jour, soit du 21 au 27 janvier.\n- Prochaines règles : le cycle dure 29 jours, donc le 1er jour du cycle suivant est le 10 janvier + 29 jours = 8 février.\n- Conclusion : le rapport du 25 janvier a eu lieu en pleine période féconde : il y a un risque de grossesse. On ne peut pas dire qu’elle est enceinte : seuls un retard de règles, un test de grossesse ou une consultation le diront.\n- Corrections du document : il calcule « 10 + 15 = 25 janvier » ; or le 10 janvier compte déjà pour le 1er jour, l’ovulation tombe le 24 janvier. Il annonce les prochaines règles le 7 février ; c’est le 8 février. Enfin, il conclut « elle est enceinte » : on ne peut conclure qu’à un risque.",
      "keyRule": "Le jour des règles est le 1er jour : le nᵉ jour du cycle tombe à « date des règles + (n − 1) ». Un rapport en période féconde = risque, pas certitude.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la date d’ovulation",
        "statement": "Cycle de 29 jours, règles le 10 janvier. Date probable de l’ovulation ?",
        "methodSteps": [
          "Ovulation au 29 − 14 = 15e jour.",
          "Le 10 janvier est le 1er jour : 15e jour = 10 + 14 = 24 janvier."
        ],
        "conclusion": "Ovulation probable le 24 janvier ; période féconde du 21 au 27 janvier."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Méthode",
          "stepTheme": "Question 1",
          "stepTitle": "Nommer la méthode",
          "paragraphText": "Une méthode fondée sur la **durée du cycle** et la **période de fécondité** : c’est la méthode **Ogino-Knaus**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p05_q1",
            "type": "mcq",
            "prompt": "Une élève évite les grossesses grâce à la connaissance de la durée de son cycle et de sa période de fécondité. Quelle méthode utilise-t-elle ?",
            "options": [
              "La méthode Ogino-Knaus",
              "La pilule",
              "Le stérilet",
              "La méthode de Billings"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Billings observe la glaire ; Ogino-Knaus calcule."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le calendrier de l’élève (cycle de 29 jours)",
            "caption": "Le 10 janvier est le 1er jour du cycle : le nᵉ jour tombe le 10 + (n − 1) janvier.",
            "tableData": {
              "headers": [
                "Repère",
                "Jour du cycle",
                "Date"
              ],
              "rows": [
                [
                  "Début des règles",
                  "1er jour",
                  "10 janvier"
                ],
                [
                  "Début de la période féconde",
                  "12e jour",
                  "21 janvier"
                ],
                [
                  "Ovulation probable",
                  "15e jour",
                  "24 janvier"
                ],
                [
                  "Rapport sexuel",
                  "16e jour",
                  "25 janvier"
                ],
                [
                  "Fin de la période féconde",
                  "18e jour",
                  "27 janvier"
                ],
                [
                  "Prochaines règles",
                  "1er jour du cycle suivant",
                  "8 février"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Jour d’ovulation",
          "stepTheme": "Question 2",
          "stepTitle": "Le jour du cycle",
          "paragraphText": "Cycle de **29 jours** : ovulation le **29 − 14 = 15e jour**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p05_q2",
            "type": "mcq",
            "prompt": "Selon la méthode Ogino-Knaus, l’ovulation a lieu 14 jours avant la fin du cycle. Pour un cycle de 29 jours, quel jour du cycle a lieu l’ovulation ?",
            "options": [
              "Le 15e jour",
              "Le 14e jour",
              "Le 29e jour",
              "Le 1er jour"
            ],
            "correctAnswerIndex": 0,
            "explanation": "29 − 14 = 15."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Date",
          "stepTheme": "Question 2",
          "stepTitle": "La date de l’ovulation",
          "paragraphText": "Le **10 janvier** est le **1er jour** ; le 15e jour est donc le **10 + 14 = 24 janvier**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p05_q3",
            "type": "mcq",
            "prompt": "Le cycle d’une élève dure 29 jours et ses dernières règles ont commencé le 10 janvier (1er jour du cycle). Selon la méthode Ogino-Knaus, quelle est la date probable de l’ovulation, au 15e jour du cycle ?",
            "options": [
              "Le 24 janvier",
              "Le 25 janvier",
              "Le 15 janvier",
              "Le 29 janvier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ajoute 14 jours, pas 15, au 1er jour."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Erreur d’un jour",
          "stepTheme": "Erreur du document",
          "stepTitle": "Attention au premier jour",
          "paragraphText": "Le document calcule « **10 + 15 = 25 janvier** » : c’est **faux**. Le 10 janvier compte déjà pour le **1er jour** : le 15e jour est le **10 + 14 = 24 janvier**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p05_q4",
            "type": "mcq",
            "prompt": "Un élève calcule : « Règles le 10 janvier, ovulation au 15e jour, donc 10 + 15 = 25 janvier. » Où est l’erreur ?",
            "options": [
              "Le 10 janvier est déjà le 1er jour : le 15e jour est le 10 + 14 = 24 janvier",
              "Il n’y a aucune erreur",
              "Il fallait calculer 10 + 29",
              "Il fallait calculer 15 − 10"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Jour 1 = 10 janvier, jour 2 = 11 janvier… jour 15 = 24 janvier."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Période féconde",
          "stepTheme": "Calcul",
          "stepTitle": "Du 21 au 27 janvier",
          "paragraphText": "Ovulation le 24 janvier ; période féconde de **3 jours avant à 3 jours après** : du **21 au 27 janvier**.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p05_q5",
            "type": "mcq",
            "prompt": "L’ovulation probable d’une élève est le 24 janvier ; selon la méthode Ogino-Knaus, la période féconde va de 3 jours avant à 3 jours après l’ovulation. Quelle est cette période ?",
            "options": [
              "Du 21 au 27 janvier",
              "Du 10 au 16 janvier",
              "Du 24 au 30 janvier",
              "Du 1er au 7 février"
            ],
            "correctAnswerIndex": 0,
            "explanation": "24 − 3 = 21 et 24 + 3 = 27."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Prochaines règles",
          "stepTheme": "Question 3",
          "stepTitle": "La date des prochaines règles",
          "paragraphText": "Le cycle dure **29 jours** : le 1er jour du cycle suivant est le **10 janvier + 29 jours = 8 février** (et non le 7 février comme l’écrit le document).",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p05_q6",
            "type": "mcq",
            "prompt": "Le cycle d’une élève dure 29 jours et ses règles ont commencé le 10 janvier. À quelle date ses prochaines règles devraient-elles commencer ?",
            "options": [
              "Le 8 février",
              "Le 7 février",
              "Le 10 février",
              "Le 29 janvier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "10 janvier + 21 jours = 31 janvier ; + 8 jours = 8 février."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Conclusion",
          "stepTheme": "Question 4",
          "stepTitle": "Enceinte ou pas ?",
          "paragraphText": "Le rapport du 25 janvier tombe **en pleine période féconde** : il y a un **risque** de grossesse. Le document conclut « elle est enceinte » : on ne peut pas l’affirmer ; un **retard de règles** ou un **test** le dira.",
          "exercise": {
            "id": "premiere_a1_svt_l05_regulation_naissances_p05_q7",
            "type": "mcq",
            "prompt": "Une élève a eu un rapport sexuel non protégé le 25 janvier, en pleine période féconde (du 21 au 27 janvier). Que peut-on conclure ?",
            "options": [
              "Il y a un risque de grossesse : seuls un test ou un retard de règles le confirmeront",
              "Elle est certainement enceinte",
              "Elle ne peut pas être enceinte",
              "Elle est stérile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Période féconde = fécondation possible, pas certaine."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p05_q1",
          "type": "mcq",
          "prompt": "Une élève évite les grossesses grâce à la connaissance de la durée de son cycle et de sa période de fécondité. Quelle méthode utilise-t-elle ?",
          "options": [
            "La méthode Ogino-Knaus",
            "La pilule",
            "Le stérilet",
            "La méthode de Billings"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Billings observe la glaire ; Ogino-Knaus calcule."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p05_q2",
          "type": "mcq",
          "prompt": "Selon la méthode Ogino-Knaus, l’ovulation a lieu 14 jours avant la fin du cycle. Pour un cycle de 29 jours, quel jour du cycle a lieu l’ovulation ?",
          "options": [
            "Le 15e jour",
            "Le 14e jour",
            "Le 29e jour",
            "Le 1er jour"
          ],
          "correctAnswerIndex": 0,
          "explanation": "29 − 14 = 15."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p05_q3",
          "type": "mcq",
          "prompt": "Le cycle d’une élève dure 29 jours et ses dernières règles ont commencé le 10 janvier (1er jour du cycle). Selon la méthode Ogino-Knaus, quelle est la date probable de l’ovulation, au 15e jour du cycle ?",
          "options": [
            "Le 24 janvier",
            "Le 25 janvier",
            "Le 15 janvier",
            "Le 29 janvier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ajoute 14 jours, pas 15, au 1er jour."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p05_q4",
          "type": "mcq",
          "prompt": "Un élève calcule : « Règles le 10 janvier, ovulation au 15e jour, donc 10 + 15 = 25 janvier. » Où est l’erreur ?",
          "options": [
            "Le 10 janvier est déjà le 1er jour : le 15e jour est le 10 + 14 = 24 janvier",
            "Il n’y a aucune erreur",
            "Il fallait calculer 10 + 29",
            "Il fallait calculer 15 − 10"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Jour 1 = 10 janvier, jour 2 = 11 janvier… jour 15 = 24 janvier."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p05_q5",
          "type": "mcq",
          "prompt": "L’ovulation probable d’une élève est le 24 janvier ; selon la méthode Ogino-Knaus, la période féconde va de 3 jours avant à 3 jours après l’ovulation. Quelle est cette période ?",
          "options": [
            "Du 21 au 27 janvier",
            "Du 10 au 16 janvier",
            "Du 24 au 30 janvier",
            "Du 1er au 7 février"
          ],
          "correctAnswerIndex": 0,
          "explanation": "24 − 3 = 21 et 24 + 3 = 27."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p05_q6",
          "type": "mcq",
          "prompt": "Le cycle d’une élève dure 29 jours et ses règles ont commencé le 10 janvier. À quelle date ses prochaines règles devraient-elles commencer ?",
          "options": [
            "Le 8 février",
            "Le 7 février",
            "Le 10 février",
            "Le 29 janvier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "10 janvier + 21 jours = 31 janvier ; + 8 jours = 8 février."
        },
        {
          "id": "premiere_a1_svt_l05_regulation_naissances_p05_q7",
          "type": "mcq",
          "prompt": "Une élève a eu un rapport sexuel non protégé le 25 janvier, en pleine période féconde (du 21 au 27 janvier). Que peut-on conclure ?",
          "options": [
            "Il y a un risque de grossesse : seuls un test ou un retard de règles le confirmeront",
            "Elle est certainement enceinte",
            "Elle ne peut pas être enceinte",
            "Elle est stérile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Période féconde = fécondation possible, pas certaine."
        }
      ]
    }
  ]
};
