import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L2_Les fonctions des gonades.pdf (Côte d’Ivoire – École numérique ; durée non indiquée) ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L02_FONCTIONS_GONADES: CurriculumChapter = {
  "id": "premiere_d_svt_l02_fonctions_gonades",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 2,
  "title": "Leçon 2 : Les fonctions des gonades",
  "summary": "Fonctions exocrine (gamètes) et endocrine (hormones) des testicules et des ovaires, expériences de castration, testostérone, œstrogènes et progestérone, structure du testicule (tubes séminifères) et de l’ovaire (follicules, corps jaune).",
  "officialVolumeHours": 5,
  "contentVersion": 2,
  "source": "SVT 1ère D_L2_Les fonctions des gonades.pdf (Côte d’Ivoire – École numérique ; durée non indiquée)",
  "points": [
    {
      "id": "premiere_d_svt_l02_fonctions_gonades_p01",
      "order": 1,
      "title": "Le rôle des testicules",
      "summary": "Castration, ligature, extraits testiculaires ; testostérone.",
      "conceptExplanation": "Situation : au lycée 2 de Daloa, un élève raconte que sa tante ne peut plus avoir d’enfant depuis qu’on lui a retiré ses deux ovaires. La classe veut connaître le rôle des gonades (testicules et ovaires) et leur structure.\n- Expériences sur 5 lots de rats : témoins ; pubères castrés ; pubères castrés recevant des extraits testiculaires ; impubères castrés ; pubères dont on ligature les spermiductes (canaux déférents).\n- Castration : stérilité et régression des caractères sexuels. Ligature : stérilité, mais caractères sexuels maintenus. Extraits testiculaires : caractères sexuels maintenus malgré la castration. Impubère castré : les caractères sexuels secondaires n’apparaissent pas.\n- Fonction exocrine : les testicules produisent les spermatozoïdes, évacués par les spermiductes. Sans eux (castration) ou s’ils ne peuvent plus sortir (ligature), le rat est stérile.\n- Fonction endocrine : les testicules sécrètent une hormone, la testostérone, produite par les cellules de Leydig et déversée dans le sang. Elle agit sur des organes cibles et assure le développement et le maintien des caractères sexuels.\n- Le testicule est donc une glande mixte (exocrine et endocrine).\n- Correction du document : le protocole numérote « lot 5 » à la fois les rats impubères castrés et les rats ligaturés. D’après les résultats, le lot 4 est celui des impubères castrés et le lot 5 celui des rats ligaturés.",
      "keyRule": "Testicule = glande mixte : spermatozoïdes (exocrine) + testostérone des cellules de Leydig, déversée dans le sang (endocrine).",
      "formulas": [],
      "workedExample": {
        "title": "Comparer castration et ligature",
        "statement": "Un rat castré et un rat ligaturé sont tous deux stériles. Pourquoi seul le castré perd-il ses caractères sexuels ?",
        "methodSteps": [
          "La ligature empêche seulement la sortie des spermatozoïdes ; les testicules sécrètent encore la testostérone.",
          "La castration supprime aussi la testostérone."
        ],
        "conclusion": "Les caractères sexuels dépendent de la testostérone (fonction endocrine) ; la fertilité, des spermatozoïdes (fonction exocrine)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Castration",
          "stepTheme": "Lot 2",
          "stepTitle": "Sans testicules",
          "paragraphText": "Des rats pubères **castrés** deviennent **stériles** et leurs caractères sexuels **régressent**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q1",
            "type": "mcq",
            "prompt": "Des rats pubères castrés deviennent stériles et leurs caractères sexuels régressent. Que montre cette expérience ?",
            "options": [
              "Les testicules sont indispensables à la fertilité et au maintien des caractères sexuels",
              "Les testicules ne servent qu’à la fertilité",
              "Les testicules n’ont aucun rôle",
              "Les caractères sexuels ne dépendent que de l’âge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux rôles disparaissent en même temps."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expériences sur les rats",
            "caption": "Lots 4 et 5 remis dans l’ordre des résultats (le protocole du document numérote les deux « lot 5 »).",
            "tableData": {
              "headers": [
                "Lot",
                "Opération",
                "Résultat"
              ],
              "rows": [
                [
                  "1",
                  "Témoins (pubères et impubères)",
                  "Normaux"
                ],
                [
                  "2",
                  "Pubères castrés",
                  "Stériles ; régression des caractères sexuels primaires et secondaires"
                ],
                [
                  "3",
                  "Pubères castrés + extraits testiculaires",
                  "Stériles ; caractères sexuels maintenus"
                ],
                [
                  "4",
                  "Impubères castrés",
                  "Régression des caractères primaires ; les caractères secondaires n’apparaissent pas"
                ],
                [
                  "5",
                  "Pubères, spermiductes ligaturés",
                  "Stériles ; caractères sexuels maintenus"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Ligature",
          "stepTheme": "Lot 5",
          "stepTitle": "Les spermiductes ligaturés",
          "paragraphText": "Rats **ligaturés** : **stériles**, mais caractères sexuels **maintenus** : les spermatozoïdes ne peuvent plus sortir.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q2",
            "type": "mcq",
            "prompt": "On ligature les spermiductes (canaux déférents) de rats pubères : ils deviennent stériles mais gardent leurs caractères sexuels. Pourquoi sont-ils stériles ?",
            "options": [
              "Les spermatozoïdes produits par les testicules ne peuvent plus être évacués",
              "Les testicules ne produisent plus de testostérone",
              "Les rats n’ont plus de testicules",
              "Leurs caractères sexuels ont disparu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les testicules fonctionnent encore."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Extraits",
          "stepTheme": "Lot 3",
          "stepTitle": "Les extraits testiculaires",
          "paragraphText": "Rats castrés + **extraits testiculaires** : toujours stériles, mais caractères sexuels **maintenus** : les extraits contiennent une **substance chimique**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q3",
            "type": "mcq",
            "prompt": "Des rats castrés reçoivent des injections d’extraits testiculaires : ils restent stériles mais gardent leurs caractères sexuels. Qu’en déduire ?",
            "options": [
              "Les testicules produisent une substance qui maintient les caractères sexuels",
              "Les extraits contiennent des spermatozoïdes vivants",
              "Les extraits rendent les rats fertiles",
              "La castration n’a aucun effet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cette substance est une hormone."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Testostérone",
          "stepTheme": "Hormone",
          "stepTitle": "La testostérone",
          "paragraphText": "La **testostérone** est sécrétée par les **cellules de Leydig** (cellules interstitielles) et déversée dans le **sang**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q4",
            "type": "mcq",
            "prompt": "Quelles cellules du testicule sécrètent la testostérone ?",
            "options": [
              "Les cellules de Leydig (cellules interstitielles)",
              "Les cellules de Sertoli",
              "Les spermatogonies",
              "Les cellules des vésicules séminales"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice : seules les affirmations a et c sont vraies."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Glande mixte",
          "stepTheme": "Deux fonctions",
          "stepTitle": "Exocrine et endocrine",
          "paragraphText": "Le testicule est une **glande mixte** : **exocrine** (spermatozoïdes évacués par les voies génitales) et **endocrine** (testostérone déversée dans le sang).",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q5",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que le testicule est une glande mixte ?",
            "options": [
              "Il produit des spermatozoïdes évacués par les voies génitales et une hormone déversée dans le sang",
              "Il produit seulement des hormones",
              "Il produit seulement des spermatozoïdes",
              "Il produit de la salive et du sang"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exocrine : vers l’extérieur ; endocrine : dans le sang."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Impubères",
          "stepTheme": "Correction du document",
          "stepTitle": "Le lot 4",
          "paragraphText": "Le protocole du document appelle « lot 5 » à la fois les **impubères castrés** et les **ligaturés**. D’après les résultats, les impubères castrés forment le **lot 4**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q6",
            "type": "mcq",
            "prompt": "Des rats impubères (avant la puberté) sont castrés. Quel résultat observe-t-on ?",
            "options": [
              "Leurs caractères sexuels primaires régressent et les caractères secondaires n’apparaissent pas",
              "Leurs caractères sexuels se développent normalement",
              "Ils deviennent fertiles plus tôt",
              "Aucun changement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La testostérone est nécessaire à la puberté."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q1",
          "type": "mcq",
          "prompt": "Des rats pubères castrés deviennent stériles et leurs caractères sexuels régressent. Que montre cette expérience ?",
          "options": [
            "Les testicules sont indispensables à la fertilité et au maintien des caractères sexuels",
            "Les testicules ne servent qu’à la fertilité",
            "Les testicules n’ont aucun rôle",
            "Les caractères sexuels ne dépendent que de l’âge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux rôles disparaissent en même temps."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q2",
          "type": "mcq",
          "prompt": "On ligature les spermiductes (canaux déférents) de rats pubères : ils deviennent stériles mais gardent leurs caractères sexuels. Pourquoi sont-ils stériles ?",
          "options": [
            "Les spermatozoïdes produits par les testicules ne peuvent plus être évacués",
            "Les testicules ne produisent plus de testostérone",
            "Les rats n’ont plus de testicules",
            "Leurs caractères sexuels ont disparu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les testicules fonctionnent encore."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q3",
          "type": "mcq",
          "prompt": "Des rats castrés reçoivent des injections d’extraits testiculaires : ils restent stériles mais gardent leurs caractères sexuels. Qu’en déduire ?",
          "options": [
            "Les testicules produisent une substance qui maintient les caractères sexuels",
            "Les extraits contiennent des spermatozoïdes vivants",
            "Les extraits rendent les rats fertiles",
            "La castration n’a aucun effet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cette substance est une hormone."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q4",
          "type": "mcq",
          "prompt": "Quelles cellules du testicule sécrètent la testostérone ?",
          "options": [
            "Les cellules de Leydig (cellules interstitielles)",
            "Les cellules de Sertoli",
            "Les spermatogonies",
            "Les cellules des vésicules séminales"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice : seules les affirmations a et c sont vraies."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q5",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que le testicule est une glande mixte ?",
          "options": [
            "Il produit des spermatozoïdes évacués par les voies génitales et une hormone déversée dans le sang",
            "Il produit seulement des hormones",
            "Il produit seulement des spermatozoïdes",
            "Il produit de la salive et du sang"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exocrine : vers l’extérieur ; endocrine : dans le sang."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q6",
          "type": "mcq",
          "prompt": "Des rats impubères (avant la puberté) sont castrés. Quel résultat observe-t-on ?",
          "options": [
            "Leurs caractères sexuels primaires régressent et les caractères secondaires n’apparaissent pas",
            "Leurs caractères sexuels se développent normalement",
            "Ils deviennent fertiles plus tôt",
            "Aucun changement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La testostérone est nécessaire à la puberté."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l02_fonctions_gonades_p02",
      "order": 2,
      "title": "Le rôle des ovaires",
      "summary": "Ovariectomie, gestation, ligature des trompes ; œstrogènes et progestérone.",
      "conceptExplanation": "- Expériences sur 6 lots de rates pubères : témoins ; non gravides ovariectomisées ; non gravides ovariectomisées recevant des extraits ovariens ; gravides ovariectomisées ; gravides ovariectomisées recevant des extraits ovariens ; non gravides dont on ligature les trompes.\n- Ovariectomie : stérilité et régression des caractères sexuels. Chez une rate gravide : avortement environ 15 jours plus tard.\n- Extraits ovariens : maintien des caractères sexuels et poursuite normale de la gestation.\n- Ligature des trompes : stérilité, car les ovocytes libérés par l’ovaire ne peuvent plus rencontrer les spermatozoïdes.\n- Fonction exocrine : les ovaires produisent les gamètes femelles (ovocytes).\n- Fonction endocrine : ils sécrètent des hormones, les œstrogènes (par les follicules) et la progestérone (par le corps jaune), qui maintiennent les caractères sexuels et la gestation.\n- Caractères sexuels primaires : les organes génitaux (voies génitales). Caractères sexuels secondaires : les traits visibles qui distinguent le mâle de la femelle (seins, pilosité, voix, silhouette).",
      "keyRule": "Ovaire = glande mixte : ovocytes (exocrine) + œstrogènes des follicules et progestérone du corps jaune (endocrine).",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter l’avortement",
        "statement": "Une rate gestante ovariectomisée avorte, sauf si elle reçoit des extraits ovariens. Concluez.",
        "methodSteps": [
          "Les extraits ovariens remplacent ce que produisaient les ovaires.",
          "Ils contiennent des hormones (surtout la progestérone) qui maintiennent la gestation."
        ],
        "conclusion": "Les ovaires sont nécessaires à la gestation par leurs hormones."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Ovariectomie",
          "stepTheme": "Lot 2",
          "stepTitle": "Sans ovaires",
          "paragraphText": "Des rates **ovariectomisées** deviennent **stériles** et leurs caractères sexuels **régressent**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q1",
            "type": "mcq",
            "prompt": "Des rates non gravides dont on retire les ovaires deviennent stériles et leurs caractères sexuels régressent. Que montre ce résultat ?",
            "options": [
              "Les ovaires sont nécessaires à la fertilité et au maintien des caractères sexuels",
              "Les ovaires ne servent qu’à la gestation",
              "Les ovaires n’ont aucun rôle",
              "La stérilité vient seulement de l’utérus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme pour les testicules : deux rôles."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expériences sur les rates pubères",
            "caption": "Ovariectomie = ablation des ovaires (castration).",
            "tableData": {
              "headers": [
                "Lot",
                "Rates",
                "Opération",
                "Résultat"
              ],
              "rows": [
                [
                  "1",
                  "Gravides et non gravides",
                  "Témoins",
                  "Normales"
                ],
                [
                  "2",
                  "Non gravides",
                  "Ovariectomie",
                  "Stériles ; régression des caractères sexuels"
                ],
                [
                  "3",
                  "Non gravides",
                  "Ovariectomie + extraits ovariens",
                  "Stériles ; caractères sexuels maintenus"
                ],
                [
                  "4",
                  "Gravides",
                  "Ovariectomie",
                  "Avortement 15 jours plus tard"
                ],
                [
                  "5",
                  "Gravides",
                  "Ovariectomie + extraits ovariens",
                  "Gestation normale"
                ],
                [
                  "6",
                  "Non gravides",
                  "Ligature des trompes",
                  "Stériles"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Gestation",
          "stepTheme": "Lots 4 et 5",
          "stepTitle": "Maintenir la gestation",
          "paragraphText": "Rates **gravides** ovariectomisées : **avortement**. Avec des **extraits ovariens** : la gestation **continue**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q2",
            "type": "mcq",
            "prompt": "Des rates gestantes dont on retire les ovaires avortent, mais pas si on leur injecte des extraits ovariens. Que contiennent ces extraits ?",
            "options": [
              "Des hormones ovariennes nécessaires au maintien de la gestation",
              "Des ovocytes",
              "Des spermatozoïdes",
              "Du lait"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Surtout la progestérone."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Trompes",
          "stepTheme": "Lot 6",
          "stepTitle": "Les trompes ligaturées",
          "paragraphText": "Rates aux **trompes ligaturées** : **stériles**, car l’ovocyte ne peut plus rencontrer les spermatozoïdes.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q3",
            "type": "mcq",
            "prompt": "Des rates dont on ligature les trompes deviennent stériles. Pourquoi ?",
            "options": [
              "Les ovocytes libérés par l’ovaire ne peuvent plus rencontrer les spermatozoïdes dans la trompe",
              "Les ovaires ne produisent plus d’hormones",
              "L’utérus est détruit",
              "Leurs caractères sexuels disparaissent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fécondation a lieu dans la trompe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Œstrogènes",
          "stepTheme": "Hormones",
          "stepTitle": "Les œstrogènes",
          "paragraphText": "Les **œstrogènes** sont sécrétés surtout par les **follicules** de l’ovaire.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q4",
            "type": "mcq",
            "prompt": "Quelle structure de l’ovaire sécrète surtout les œstrogènes ?",
            "options": [
              "Les follicules",
              "Le corps jaune seul",
              "Les trompes",
              "L’utérus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 3 : follicules et corps jaune."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Progestérone",
          "stepTheme": "Hormones",
          "stepTitle": "La progestérone",
          "paragraphText": "La **progestérone** est sécrétée par le **corps jaune** ; elle intervient dans la **gestation**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q5",
            "type": "mcq",
            "prompt": "Quelle structure de l’ovaire sécrète la progestérone, indispensable à la gestation ?",
            "options": [
              "Le corps jaune",
              "Le follicule primordial",
              "La trompe",
              "Le vagin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corps jaune vient du follicule après l’ovulation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Glande mixte",
          "stepTheme": "Conclusion",
          "stepTitle": "Les deux fonctions de l’ovaire",
          "paragraphText": "L’ovaire produit des **ovocytes** (fonction **exocrine**) et des **hormones**, œstrogènes et progestérone (fonction **endocrine**).",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q6",
            "type": "mcq",
            "prompt": "Quelles sont les deux fonctions de l’ovaire ?",
            "options": [
              "Produire des ovocytes (exocrine) et des hormones, œstrogènes et progestérone (endocrine)",
              "Produire du lait et des spermatozoïdes",
              "Produire seulement des hormones",
              "Produire seulement des ovocytes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme le testicule, c’est une glande mixte."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q1",
          "type": "mcq",
          "prompt": "Des rates non gravides dont on retire les ovaires deviennent stériles et leurs caractères sexuels régressent. Que montre ce résultat ?",
          "options": [
            "Les ovaires sont nécessaires à la fertilité et au maintien des caractères sexuels",
            "Les ovaires ne servent qu’à la gestation",
            "Les ovaires n’ont aucun rôle",
            "La stérilité vient seulement de l’utérus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme pour les testicules : deux rôles."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q2",
          "type": "mcq",
          "prompt": "Des rates gestantes dont on retire les ovaires avortent, mais pas si on leur injecte des extraits ovariens. Que contiennent ces extraits ?",
          "options": [
            "Des hormones ovariennes nécessaires au maintien de la gestation",
            "Des ovocytes",
            "Des spermatozoïdes",
            "Du lait"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Surtout la progestérone."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q3",
          "type": "mcq",
          "prompt": "Des rates dont on ligature les trompes deviennent stériles. Pourquoi ?",
          "options": [
            "Les ovocytes libérés par l’ovaire ne peuvent plus rencontrer les spermatozoïdes dans la trompe",
            "Les ovaires ne produisent plus d’hormones",
            "L’utérus est détruit",
            "Leurs caractères sexuels disparaissent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fécondation a lieu dans la trompe."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q4",
          "type": "mcq",
          "prompt": "Quelle structure de l’ovaire sécrète surtout les œstrogènes ?",
          "options": [
            "Les follicules",
            "Le corps jaune seul",
            "Les trompes",
            "L’utérus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 3 : follicules et corps jaune."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q5",
          "type": "mcq",
          "prompt": "Quelle structure de l’ovaire sécrète la progestérone, indispensable à la gestation ?",
          "options": [
            "Le corps jaune",
            "Le follicule primordial",
            "La trompe",
            "Le vagin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corps jaune vient du follicule après l’ovulation."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q6",
          "type": "mcq",
          "prompt": "Quelles sont les deux fonctions de l’ovaire ?",
          "options": [
            "Produire des ovocytes (exocrine) et des hormones, œstrogènes et progestérone (endocrine)",
            "Produire du lait et des spermatozoïdes",
            "Produire seulement des hormones",
            "Produire seulement des ovocytes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme le testicule, c’est une glande mixte."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l02_fonctions_gonades_p03",
      "order": 3,
      "title": "La structure du testicule",
      "summary": "Lobules, tubes séminifères, cellules germinales, Sertoli, Leydig.",
      "conceptExplanation": "- Coupe longitudinale : le testicule est entouré d’une enveloppe résistante, l’albuginée. Il est divisé en lobules qui renferment chacun des tubes séminifères.\n- Les tubes séminifères se prolongent par des tubes droits, reliés au réseau de Haller. Celui-ci se continue par les cônes efférents, dans l’épididyme qui coiffe le testicule, puis par le canal épididymaire et le canal déférent.\n- Coupe transversale : chaque tube séminifère est entouré d’une gaine conjonctive ; il a une paroi et une lumière (cavité centrale).\n- De la paroi vers la lumière se succèdent les cellules germinales, de plus en plus mûres : spermatogonies, spermatocytes I, spermatocytes II, spermatides et spermatozoïdes, libérés dans la lumière.\n- Les cellules de Sertoli, grandes cellules qui vont de la paroi à la lumière, soutiennent et nourrissent les cellules germinales.\n- Entre les tubes, le tissu interstitiel contient les cellules de Leydig (testostérone) et des vaisseaux sanguins.\n- Exercice 5 : 1 paroi d’un tube ; 2 capillaire sanguin ; 3 cellule interstitielle (Leydig), qui produit la testostérone ; 4 spermatogonie ; 5 spermatocyte I ; 6 spermatocyte II ; 7 cellule de Sertoli ; 8 spermatozoïde, gamète mâle qui intervient dans la fécondation ; 9 spermatide ; 10 lumière du tube.",
      "keyRule": "Tube séminifère : de la paroi vers la lumière, spermatogonies → spermatocytes I → spermatocytes II → spermatides → spermatozoïdes. Leydig entre les tubes.",
      "formulas": [],
      "workedExample": {
        "title": "Lire une coupe de tube séminifère",
        "statement": "Comment reconnaître les cellules les plus mûres sur une coupe de tube séminifère ?",
        "methodSteps": [
          "Les cellules germinales mûrissent de la paroi vers la lumière.",
          "Les spermatozoïdes, avec leur flagelle, sont au bord de la lumière."
        ],
        "conclusion": "Plus une cellule est proche de la lumière, plus elle est mûre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Tube séminifère",
          "stepTheme": "Coupe",
          "stepTitle": "De la paroi à la lumière",
          "paragraphText": "De la **paroi** vers la **lumière** : **spermatogonies**, **spermatocytes I**, **spermatocytes II**, **spermatides**, **spermatozoïdes**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q1",
            "type": "mcq",
            "prompt": "Dans un tube séminifère, comment les cellules germinales sont-elles disposées de la paroi vers la lumière ?",
            "options": [
              "Spermatogonies, spermatocytes I, spermatocytes II, spermatides, spermatozoïdes",
              "Spermatozoïdes, spermatides, spermatocytes, spermatogonies",
              "Les cellules sont mélangées au hasard",
              "Il n’y a que des cellules de Leydig"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les spermatozoïdes sont libérés dans la lumière."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La paroi d’un tube séminifère",
            "caption": "Les cellules germinales mûrissent de la périphérie vers la lumière du tube. Les cellules de Sertoli (non dessinées) les soutiennent et les nourrissent ; les cellules de Leydig, entre les tubes, sécrètent la testostérone.",
            "svgContent": "<svg viewBox=\"0 0 460 286\" width=\"100%\" style=\"max-width:460px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Paroi d’un tube séminifère : spermatogonies, spermatocytes I et II, spermatides, spermatozoïdes vers la lumière ; cellules de Leydig entre les tubes\"><line x1=\"100\" y1=\"24\" x2=\"301.0\" y2=\"24.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"310,24 301.0,19.0 301.0,29.0\" fill=\"#94A3B8\"/><text x=\"205\" y=\"16\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">de la paroi vers la lumière du tube</text><rect x=\"300\" y=\"34\" width=\"150\" height=\"172\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.06\"/><text x=\"395\" y=\"120\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">lumière</text><text x=\"395\" y=\"134\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">du tube</text><line x1=\"55\" y1=\"34\" x2=\"55\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"28\" cy=\"60\" r=\"9\" fill=\"#EF4444\" fill-opacity=\"0.45\" stroke=\"#EF4444\" stroke-width=\"1.6\"/><circle cx=\"28\" cy=\"120\" r=\"9\" fill=\"#EF4444\" fill-opacity=\"0.45\" stroke=\"#EF4444\" stroke-width=\"1.6\"/><circle cx=\"28\" cy=\"180\" r=\"9\" fill=\"#EF4444\" fill-opacity=\"0.45\" stroke=\"#EF4444\" stroke-width=\"1.6\"/><circle cx=\"75\" cy=\"45\" r=\"8\" fill=\"#3B82F6\" fill-opacity=\"0.3\" stroke=\"#3B82F6\" stroke-width=\"1.6\"/><circle cx=\"75\" cy=\"45\" r=\"2.6666666666666665\" fill=\"#3B82F6\"/><circle cx=\"75\" cy=\"88\" r=\"8\" fill=\"#3B82F6\" fill-opacity=\"0.3\" stroke=\"#3B82F6\" stroke-width=\"1.6\"/><circle cx=\"75\" cy=\"88\" r=\"2.6666666666666665\" fill=\"#3B82F6\"/><circle cx=\"75\" cy=\"131\" r=\"8\" fill=\"#3B82F6\" fill-opacity=\"0.3\" stroke=\"#3B82F6\" stroke-width=\"1.6\"/><circle cx=\"75\" cy=\"131\" r=\"2.6666666666666665\" fill=\"#3B82F6\"/><circle cx=\"75\" cy=\"174\" r=\"8\" fill=\"#3B82F6\" fill-opacity=\"0.3\" stroke=\"#3B82F6\" stroke-width=\"1.6\"/><circle cx=\"75\" cy=\"174\" r=\"2.6666666666666665\" fill=\"#3B82F6\"/><circle cx=\"128\" cy=\"62\" r=\"13\" fill=\"#8B5CF6\" fill-opacity=\"0.3\" stroke=\"#8B5CF6\" stroke-width=\"1.6\"/><circle cx=\"128\" cy=\"62\" r=\"4.333333333333333\" fill=\"#8B5CF6\"/><circle cx=\"128\" cy=\"118\" r=\"13\" fill=\"#8B5CF6\" fill-opacity=\"0.3\" stroke=\"#8B5CF6\" stroke-width=\"1.6\"/><circle cx=\"128\" cy=\"118\" r=\"4.333333333333333\" fill=\"#8B5CF6\"/><circle cx=\"128\" cy=\"174\" r=\"13\" fill=\"#8B5CF6\" fill-opacity=\"0.3\" stroke=\"#8B5CF6\" stroke-width=\"1.6\"/><circle cx=\"128\" cy=\"174\" r=\"4.333333333333333\" fill=\"#8B5CF6\"/><circle cx=\"182\" cy=\"50\" r=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.3\" stroke=\"#F59E0B\" stroke-width=\"1.6\"/><circle cx=\"182\" cy=\"50\" r=\"3.3333333333333335\" fill=\"#F59E0B\"/><circle cx=\"182\" cy=\"95\" r=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.3\" stroke=\"#F59E0B\" stroke-width=\"1.6\"/><circle cx=\"182\" cy=\"95\" r=\"3.3333333333333335\" fill=\"#F59E0B\"/><circle cx=\"182\" cy=\"140\" r=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.3\" stroke=\"#F59E0B\" stroke-width=\"1.6\"/><circle cx=\"182\" cy=\"140\" r=\"3.3333333333333335\" fill=\"#F59E0B\"/><circle cx=\"182\" cy=\"185\" r=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.3\" stroke=\"#F59E0B\" stroke-width=\"1.6\"/><circle cx=\"182\" cy=\"185\" r=\"3.3333333333333335\" fill=\"#F59E0B\"/><circle cx=\"232\" cy=\"45\" r=\"7\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.6\"/><circle cx=\"232\" cy=\"45\" r=\"2.3333333333333335\" fill=\"#10B981\"/><circle cx=\"232\" cy=\"80\" r=\"7\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.6\"/><circle cx=\"232\" cy=\"80\" r=\"2.3333333333333335\" fill=\"#10B981\"/><circle cx=\"232\" cy=\"115\" r=\"7\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.6\"/><circle cx=\"232\" cy=\"115\" r=\"2.3333333333333335\" fill=\"#10B981\"/><circle cx=\"232\" cy=\"150\" r=\"7\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.6\"/><circle cx=\"232\" cy=\"150\" r=\"2.3333333333333335\" fill=\"#10B981\"/><circle cx=\"232\" cy=\"185\" r=\"7\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.6\"/><circle cx=\"232\" cy=\"185\" r=\"2.3333333333333335\" fill=\"#10B981\"/><ellipse cx=\"282\" cy=\"60\" rx=\"7\" ry=\"4.5\" fill=\"#EC4899\" fill-opacity=\"0.6\" stroke=\"#EC4899\" stroke-width=\"1.4\"/><path d=\"M289,60 Q310,52 330,60 T370,60\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><ellipse cx=\"282\" cy=\"100\" rx=\"7\" ry=\"4.5\" fill=\"#EC4899\" fill-opacity=\"0.6\" stroke=\"#EC4899\" stroke-width=\"1.4\"/><path d=\"M289,100 Q310,92 330,100 T370,100\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><ellipse cx=\"282\" cy=\"140\" rx=\"7\" ry=\"4.5\" fill=\"#EC4899\" fill-opacity=\"0.6\" stroke=\"#EC4899\" stroke-width=\"1.4\"/><path d=\"M289,140 Q310,132 330,140 T370,140\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><ellipse cx=\"282\" cy=\"180\" rx=\"7\" ry=\"4.5\" fill=\"#EC4899\" fill-opacity=\"0.6\" stroke=\"#EC4899\" stroke-width=\"1.4\"/><path d=\"M289,180 Q310,172 330,180 T370,180\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><text x=\"75\" y=\"224\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#3B82F6\">spermatogonies (2n)</text><text x=\"235\" y=\"224\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#10B981\">spermatides (n)</text><text x=\"128\" y=\"240\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#8B5CF6\">spermatocytes I (2n)</text><text x=\"295\" y=\"240\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#EC4899\">spermatozoïdes</text><text x=\"182\" y=\"256\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#F59E0B\">spermatocytes II (n)</text><text x=\"8\" y=\"276\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"#EF4444\">en rouge : cellules de Leydig, entre les tubes (testostérone)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Leydig",
          "stepTheme": "Localisation",
          "stepTitle": "Entre les tubes",
          "paragraphText": "Les **cellules de Leydig** se trouvent **entre** les tubes séminifères, près des **vaisseaux sanguins**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q2",
            "type": "mcq",
            "prompt": "Où se trouvent les cellules de Leydig dans le testicule ?",
            "options": [
              "Entre les tubes séminifères, près des vaisseaux sanguins",
              "Dans la lumière des tubes séminifères",
              "Dans l’épididyme",
              "Dans le canal déférent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On les appelle aussi cellules interstitielles."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Vaisseaux",
          "stepTheme": "Explication",
          "stepTitle": "Près du sang",
          "paragraphText": "Les cellules de Leydig sont près des **vaisseaux sanguins** : elles y **déversent** la testostérone.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q3",
            "type": "mcq",
            "prompt": "Pourquoi les cellules de Leydig sont-elles situées près des vaisseaux sanguins ?",
            "options": [
              "Pour déverser la testostérone dans le sang",
              "Pour nourrir les spermatozoïdes de la lumière",
              "Pour évacuer les spermatozoïdes",
              "Pour recevoir le message nerveux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la fonction endocrine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Voies",
          "stepTheme": "Coupe longitudinale",
          "stepTitle": "Le chemin des spermatozoïdes",
          "paragraphText": "**Tube séminifère → tube droit → réseau de Haller → cônes efférents → canal épididymaire → canal déférent**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q4",
            "type": "mcq",
            "prompt": "Dans quel ordre les spermatozoïdes quittent-ils le testicule ?",
            "options": [
              "Tube séminifère → tube droit → réseau de Haller → cônes efférents → épididyme → canal déférent",
              "Canal déférent → épididyme → tube séminifère",
              "Épididyme → tube séminifère → réseau de Haller → canal déférent",
              "Réseau de Haller → canal déférent → tube séminifère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’épididyme coiffe le testicule."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Sertoli",
          "stepTheme": "Rôle",
          "stepTitle": "Les cellules de Sertoli",
          "paragraphText": "Les **cellules de Sertoli** vont de la paroi à la lumière : elles **soutiennent** et **nourrissent** les cellules germinales.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q5",
            "type": "mcq",
            "prompt": "Quel est le rôle des cellules de Sertoli dans le tube séminifère ?",
            "options": [
              "Soutenir et nourrir les cellules qui deviennent des spermatozoïdes",
              "Sécréter la testostérone dans le sang",
              "Produire les ovocytes",
              "Conduire le message nerveux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ne pas confondre avec Leydig."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Exercice 5",
          "stepTheme": "Annoter",
          "stepTitle": "Le gamète mâle",
          "paragraphText": "Sur la coupe : l’élément **8**, libéré dans la **lumière** du tube, est le **spermatozoïde**, gamète mâle qui intervient dans la **fécondation**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q6",
            "type": "mcq",
            "prompt": "Sur une coupe de tubes séminifères, quel élément est le gamète mâle qui intervient dans la fécondation ?",
            "options": [
              "Le spermatozoïde, libéré dans la lumière du tube",
              "La spermatogonie, à la périphérie",
              "La cellule de Leydig",
              "La cellule de Sertoli"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le testicule produit testostérone et gamètes mâles."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q1",
          "type": "mcq",
          "prompt": "Dans un tube séminifère, comment les cellules germinales sont-elles disposées de la paroi vers la lumière ?",
          "options": [
            "Spermatogonies, spermatocytes I, spermatocytes II, spermatides, spermatozoïdes",
            "Spermatozoïdes, spermatides, spermatocytes, spermatogonies",
            "Les cellules sont mélangées au hasard",
            "Il n’y a que des cellules de Leydig"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les spermatozoïdes sont libérés dans la lumière."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q2",
          "type": "mcq",
          "prompt": "Où se trouvent les cellules de Leydig dans le testicule ?",
          "options": [
            "Entre les tubes séminifères, près des vaisseaux sanguins",
            "Dans la lumière des tubes séminifères",
            "Dans l’épididyme",
            "Dans le canal déférent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On les appelle aussi cellules interstitielles."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q3",
          "type": "mcq",
          "prompt": "Pourquoi les cellules de Leydig sont-elles situées près des vaisseaux sanguins ?",
          "options": [
            "Pour déverser la testostérone dans le sang",
            "Pour nourrir les spermatozoïdes de la lumière",
            "Pour évacuer les spermatozoïdes",
            "Pour recevoir le message nerveux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la fonction endocrine."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q4",
          "type": "mcq",
          "prompt": "Dans quel ordre les spermatozoïdes quittent-ils le testicule ?",
          "options": [
            "Tube séminifère → tube droit → réseau de Haller → cônes efférents → épididyme → canal déférent",
            "Canal déférent → épididyme → tube séminifère",
            "Épididyme → tube séminifère → réseau de Haller → canal déférent",
            "Réseau de Haller → canal déférent → tube séminifère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’épididyme coiffe le testicule."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q5",
          "type": "mcq",
          "prompt": "Quel est le rôle des cellules de Sertoli dans le tube séminifère ?",
          "options": [
            "Soutenir et nourrir les cellules qui deviennent des spermatozoïdes",
            "Sécréter la testostérone dans le sang",
            "Produire les ovocytes",
            "Conduire le message nerveux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ne pas confondre avec Leydig."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q6",
          "type": "mcq",
          "prompt": "Sur une coupe de tubes séminifères, quel élément est le gamète mâle qui intervient dans la fécondation ?",
          "options": [
            "Le spermatozoïde, libéré dans la lumière du tube",
            "La spermatogonie, à la périphérie",
            "La cellule de Leydig",
            "La cellule de Sertoli"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le testicule produit testostérone et gamètes mâles."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l02_fonctions_gonades_p04",
      "order": 4,
      "title": "La structure de l’ovaire",
      "summary": "Les follicules, l’ovulation, le corps jaune.",
      "conceptExplanation": "- Coupe d’ovaire : il renferme des follicules à différents stades, entourés de tissu conjonctif. Chaque follicule contient un ovocyte, futur gamète femelle.\n- Follicule primordial : un ovocyte entouré d’une seule couche de cellules folliculaires aplaties.\n- Follicule primaire : une couche de cellules folliculaires cubiques. Follicule secondaire (ou plein) : plusieurs couches de cellules.\n- Follicule cavitaire : une cavité remplie de liquide apparaît, d’abord en forme de croissant.\n- Follicule mûr (de De Graaf) : grande cavité ; l’ovocyte repose sur un petit massif de cellules. Il se rompt et libère l’ovocyte : c’est l’ovulation.\n- Le follicule rompu se transforme en corps jaune, qui sécrète la progestérone (et des œstrogènes).\n- Nuance au document : il attribue la « cavité en forme de croissant » au follicule mûr ; cette forme est celle du jeune follicule cavitaire. Dans le follicule mûr, la cavité est très grande.\n- Exercice 4 : 1 follicules primordiaux ; 2 ovocyte ; 3 follicule primaire ; 4 follicule secondaire ; 5 follicule cavitaire ; 6 follicule rompu ; 7 ovocyte II libéré ; 8 vaisseaux sanguins ; 9 reste de corps jaune ; 10 corps jaune.",
      "keyRule": "Primordial → primaire → secondaire → cavitaire → mûr (De Graaf) → ovulation → corps jaune. Follicules : œstrogènes ; corps jaune : progestérone.",
      "formulas": [],
      "workedExample": {
        "title": "Classer des follicules",
        "statement": "Comment reconnaître un follicule mûr sur une coupe d’ovaire ?",
        "methodSteps": [
          "C’est le plus gros follicule.",
          "Il possède une grande cavité ; l’ovocyte repose sur un petit massif de cellules."
        ],
        "conclusion": "C’est le follicule de De Graaf, prêt à libérer son ovocyte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Follicules",
          "stepTheme": "Coupe d’ovaire",
          "stepTitle": "Des follicules à tous les stades",
          "paragraphText": "L’ovaire contient des follicules : **primordial → primaire → secondaire → cavitaire → mûr (De Graaf)**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q1",
            "type": "mcq",
            "prompt": "Dans quel ordre les follicules se développent-ils dans l’ovaire ?",
            "options": [
              "Primordial → primaire → secondaire → cavitaire → mûr (De Graaf)",
              "Mûr → cavitaire → primordial → primaire",
              "Corps jaune → primordial → mûr",
              "Secondaire → primordial → primaire → mûr"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le follicule grossit et se creuse d’une cavité."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les follicules de l’ovaire",
            "caption": "Chaque follicule contient un ovocyte. Le follicule mûr libère son ovocyte (ovulation) et devient le corps jaune. Follicules : œstrogènes ; corps jaune : progestérone.",
            "svgContent": "<svg viewBox=\"0 0 560 222\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Follicules de l’ovaire : primordial, primaire, secondaire, cavitaire, mûr de De Graaf, puis corps jaune\"><line x1=\"30\" y1=\"26\" x2=\"461.0\" y2=\"26.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"470,26 461.0,21.0 461.0,31.0\" fill=\"#94A3B8\"/><text x=\"250\" y=\"18\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">développement des follicules (à partir de la puberté)</text><circle cx=\"40\" cy=\"95\" r=\"8\" fill=\"#8B5CF6\" fill-opacity=\"0.25\" stroke=\"#8B5CF6\" stroke-width=\"1.8\"/><circle cx=\"40\" cy=\"95\" r=\"2.3\" fill=\"#8B5CF6\"/><circle cx=\"51.5\" cy=\"95.0\" r=\"2.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"48.1\" cy=\"103.1\" r=\"2.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"40.0\" cy=\"106.5\" r=\"2.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"31.9\" cy=\"103.1\" r=\"2.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"28.5\" cy=\"95.0\" r=\"2.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"31.9\" cy=\"86.9\" r=\"2.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"40.0\" cy=\"83.5\" r=\"2.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"48.1\" cy=\"86.9\" r=\"2.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"105\" cy=\"95\" r=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.25\" stroke=\"#8B5CF6\" stroke-width=\"1.8\"/><circle cx=\"105\" cy=\"95\" r=\"2.9\" fill=\"#8B5CF6\"/><circle cx=\"120.0\" cy=\"95.0\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"118.0\" cy=\"102.5\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"112.5\" cy=\"108.0\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"105.0\" cy=\"110.0\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"97.5\" cy=\"108.0\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"92.0\" cy=\"102.5\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"90.0\" cy=\"95.0\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"92.0\" cy=\"87.5\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"97.5\" cy=\"82.0\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"105.0\" cy=\"80.0\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"112.5\" cy=\"82.0\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"118.0\" cy=\"87.5\" r=\"3.6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"185\" cy=\"95\" r=\"11\" fill=\"#8B5CF6\" fill-opacity=\"0.25\" stroke=\"#8B5CF6\" stroke-width=\"1.8\"/><circle cx=\"185\" cy=\"95\" r=\"3.1\" fill=\"#8B5CF6\"/><circle cx=\"202.0\" cy=\"95.0\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"199.7\" cy=\"103.5\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"193.5\" cy=\"109.7\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"185.0\" cy=\"112.0\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"176.5\" cy=\"109.7\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"170.3\" cy=\"103.5\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"168.0\" cy=\"95.0\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"170.3\" cy=\"86.5\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"176.5\" cy=\"80.3\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"185.0\" cy=\"78.0\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"193.5\" cy=\"80.3\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"199.7\" cy=\"86.5\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"210.0\" cy=\"95.0\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"208.5\" cy=\"103.6\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"204.2\" cy=\"111.1\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"197.5\" cy=\"116.7\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"189.3\" cy=\"119.6\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"180.7\" cy=\"119.6\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"172.5\" cy=\"116.7\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"165.8\" cy=\"111.1\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"161.5\" cy=\"103.6\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"160.0\" cy=\"95.0\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"161.5\" cy=\"86.4\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"165.8\" cy=\"78.9\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"172.5\" cy=\"73.3\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"180.7\" cy=\"70.4\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"189.3\" cy=\"70.4\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"197.5\" cy=\"73.3\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"204.2\" cy=\"78.9\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"208.5\" cy=\"86.4\" r=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1\"/><circle cx=\"285\" cy=\"95\" r=\"40\" fill=\"#F59E0B\" fill-opacity=\"0.22\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><ellipse cx=\"300\" cy=\"88\" rx=\"17\" ry=\"22\" fill=\"#3B82F6\" fill-opacity=\"0.18\" stroke=\"#3B82F6\" stroke-width=\"1.4\"/><circle cx=\"266\" cy=\"104\" r=\"11\" fill=\"#8B5CF6\" fill-opacity=\"0.25\" stroke=\"#8B5CF6\" stroke-width=\"1.8\"/><circle cx=\"266\" cy=\"104\" r=\"3.1\" fill=\"#8B5CF6\"/><circle cx=\"400\" cy=\"95\" r=\"52\" fill=\"#F59E0B\" fill-opacity=\"0.22\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><circle cx=\"410\" cy=\"92\" r=\"38\" fill=\"#3B82F6\" fill-opacity=\"0.18\" stroke=\"#3B82F6\" stroke-width=\"1.4\"/><circle cx=\"368\" cy=\"112\" r=\"17\" fill=\"#F59E0B\" fill-opacity=\"0.45\" stroke=\"#F59E0B\" stroke-width=\"1.4\"/><circle cx=\"368\" cy=\"112\" r=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.25\" stroke=\"#8B5CF6\" stroke-width=\"1.8\"/><circle cx=\"368\" cy=\"112\" r=\"2.9\" fill=\"#8B5CF6\"/><circle cx=\"510\" cy=\"95\" r=\"34\" fill=\"#F59E0B\" fill-opacity=\"0.55\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"40\" y=\"170\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">primordial</text><text x=\"105\" y=\"186\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">primaire</text><text x=\"185\" y=\"170\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">secondaire</text><text x=\"285\" y=\"186\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">cavitaire</text><text x=\"400\" y=\"170\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">mûr (De Graaf)</text><text x=\"510\" y=\"186\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">corps jaune</text><text x=\"280\" y=\"212\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">violet : ovocyte ; orange : cellules folliculaires ; bleu : cavité remplie de liquide</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Primordial",
          "stepTheme": "Stade",
          "stepTitle": "Le follicule primordial",
          "paragraphText": "Le **follicule primordial** : un **ovocyte** entouré d’une **seule couche** de cellules folliculaires aplaties.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q2",
            "type": "mcq",
            "prompt": "Comment est formé un follicule primordial ?",
            "options": [
              "D’un ovocyte entouré d’une seule couche de cellules folliculaires aplaties",
              "D’une grande cavité remplie de liquide",
              "D’un corps jaune",
              "De plusieurs ovocytes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le plus petit et le plus nombreux."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "De Graaf",
          "stepTheme": "Stade",
          "stepTitle": "Le follicule mûr",
          "paragraphText": "Le **follicule mûr** a une **grande cavité** ; l’ovocyte repose sur un petit **massif de cellules**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q3",
            "type": "mcq",
            "prompt": "Qu’est-ce qui caractérise le follicule mûr (de De Graaf) ?",
            "options": [
              "Une grande cavité remplie de liquide, l’ovocyte reposant sur un petit massif de cellules",
              "Une seule couche de cellules aplaties",
              "L’absence d’ovocyte",
              "Une masse jaune sans cavité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La cavité en croissant est celle du jeune follicule cavitaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Ovulation",
          "stepTheme": "Corps jaune",
          "stepTitle": "Après l’ovulation",
          "paragraphText": "Le follicule mûr libère son ovocyte (**ovulation**), puis se transforme en **corps jaune**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q4",
            "type": "mcq",
            "prompt": "Que devient le follicule mûr après avoir libéré son ovocyte lors de l’ovulation ?",
            "options": [
              "Il se transforme en corps jaune",
              "Il redevient un follicule primordial",
              "Il devient un spermatozoïde",
              "Il disparaît sans rien produire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corps jaune sécrète la progestérone."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Exercice 4",
          "stepTheme": "Rôles",
          "stepTitle": "Le rôle des follicules",
          "paragraphText": "Les **follicules** assurent la **maturation** et la **libération** de l’ovocyte et sécrètent les **œstrogènes**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q5",
            "type": "mcq",
            "prompt": "Sur une coupe d’ovaire, quel est le rôle des follicules ?",
            "options": [
              "Assurer la maturation et la libération de l’ovocyte, et sécréter des œstrogènes",
              "Sécréter seulement la progestérone",
              "Produire des spermatozoïdes",
              "Stocker le lait"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Fonctions exocrine et endocrine."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Conclusion",
          "stepTheme": "Gonades",
          "stepTitle": "Le rôle des gonades",
          "paragraphText": "Les **gonades** interviennent dans la reproduction en produisant des **gamètes** et des **hormones**, grâce à des structures spécifiques.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q6",
            "type": "mcq",
            "prompt": "Comment les gonades interviennent-elles dans la reproduction des mammifères ?",
            "options": [
              "Elles produisent des gamètes et des hormones grâce à des structures spécifiques",
              "Elles produisent seulement du sang",
              "Elles digèrent les aliments",
              "Elles conduisent le message nerveux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tubes séminifères et Leydig ; follicules et corps jaune."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q1",
          "type": "mcq",
          "prompt": "Dans quel ordre les follicules se développent-ils dans l’ovaire ?",
          "options": [
            "Primordial → primaire → secondaire → cavitaire → mûr (De Graaf)",
            "Mûr → cavitaire → primordial → primaire",
            "Corps jaune → primordial → mûr",
            "Secondaire → primordial → primaire → mûr"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le follicule grossit et se creuse d’une cavité."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q2",
          "type": "mcq",
          "prompt": "Comment est formé un follicule primordial ?",
          "options": [
            "D’un ovocyte entouré d’une seule couche de cellules folliculaires aplaties",
            "D’une grande cavité remplie de liquide",
            "D’un corps jaune",
            "De plusieurs ovocytes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le plus petit et le plus nombreux."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q3",
          "type": "mcq",
          "prompt": "Qu’est-ce qui caractérise le follicule mûr (de De Graaf) ?",
          "options": [
            "Une grande cavité remplie de liquide, l’ovocyte reposant sur un petit massif de cellules",
            "Une seule couche de cellules aplaties",
            "L’absence d’ovocyte",
            "Une masse jaune sans cavité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cavité en croissant est celle du jeune follicule cavitaire."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q4",
          "type": "mcq",
          "prompt": "Que devient le follicule mûr après avoir libéré son ovocyte lors de l’ovulation ?",
          "options": [
            "Il se transforme en corps jaune",
            "Il redevient un follicule primordial",
            "Il devient un spermatozoïde",
            "Il disparaît sans rien produire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corps jaune sécrète la progestérone."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q5",
          "type": "mcq",
          "prompt": "Sur une coupe d’ovaire, quel est le rôle des follicules ?",
          "options": [
            "Assurer la maturation et la libération de l’ovocyte, et sécréter des œstrogènes",
            "Sécréter seulement la progestérone",
            "Produire des spermatozoïdes",
            "Stocker le lait"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Fonctions exocrine et endocrine."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q6",
          "type": "mcq",
          "prompt": "Comment les gonades interviennent-elles dans la reproduction des mammifères ?",
          "options": [
            "Elles produisent des gamètes et des hormones grâce à des structures spécifiques",
            "Elles produisent seulement du sang",
            "Elles digèrent les aliments",
            "Elles conduisent le message nerveux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tubes séminifères et Leydig ; follicules et corps jaune."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l02_fonctions_gonades_p05",
      "order": 5,
      "title": "Évaluation : vésicules séminales et souris",
      "summary": "Exploiter des résultats ; hormones et caractères sexuels.",
      "conceptExplanation": "- Situation d’évaluation : trois lots de rats de même âge (normaux, castrés, castrés recevant 1,5 mg de testostérone). 10 jours après, on pèse leurs vésicules séminales : 1,500 g ; 0,220 g ; 1,750 g.\n- Analyse : la castration fait chuter la masse des vésicules (1,500 → 0,220 g). Avec la testostérone, elle remonte à 1,750 g, environ 8 fois plus que chez les castrés, et même un peu plus que chez les rats normaux.\n- Explication : la testostérone, déversée dans le sang, assure le développement des vésicules séminales. Fonction mise en évidence : la fonction endocrine des testicules.\n- Correction du document : son corrigé dit que les vésicules séminales « sécrètent le sperme ». Elles sécrètent une grande partie du liquide séminal ; le sperme est le mélange des spermatozoïdes et des liquides des vésicules séminales et de la prostate. Le corrigé parle aussi de « légère augmentation » : par rapport aux rats castrés, la masse est multipliée par 8.\n- Exercice 3 (souris femelles) : la castration rend stérile et empêche le développement des caractères sexuels. Une greffe d’ovaires ou des injections d’œstrogènes et de progestérone rétablissent les caractères sexuels, mais pas la fécondité (l’ovaire greffé n’est pas relié aux trompes). Fonctions mises en évidence : endocrine et exocrine.\n- Une hormone est une substance chimique sécrétée par une glande endocrine, transportée par le sang, qui agit à très faible dose sur des organes cibles.\n- Correction du document (exercice 2) : son corrigé donne « vagin, utérus, vagin ». Les voies génitales de la femme dans la liste sont la trompe, l’utérus et le vagin ; l’ovaire est la gonade.",
      "keyRule": "Testostérone → développement des vésicules séminales (fonction endocrine). Vésicules séminales : liquide séminal, pas spermatozoïdes.",
      "formulas": [],
      "workedExample": {
        "title": "Exploiter le tableau des vésicules",
        "statement": "Vésicules séminales : 1,500 g (normaux), 0,220 g (castrés), 1,750 g (castrés + testostérone). Concluez.",
        "methodSteps": [
          "Sans testicules, les vésicules s’atrophient.",
          "La testostérone seule suffit à les faire redévelopper."
        ],
        "conclusion": "Les testicules agissent sur les vésicules séminales par la testostérone : c’est leur fonction endocrine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Vésicules",
          "stepTheme": "Analyse",
          "stepTitle": "L’effet de la testostérone",
          "paragraphText": "Vésicules séminales : **1,500 g** (normaux), **0,220 g** (castrés), **1,750 g** (castrés + testostérone).",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q1",
            "type": "mcq",
            "prompt": "Rats de même âge, 10 jours après l’opération : vésicules séminales de 1,500 g chez les rats normaux, 0,220 g chez les castrés, 1,750 g chez les castrés recevant 1,5 mg de testostérone. Qu’en déduire ?",
            "options": [
              "La testostérone assure le développement des vésicules séminales",
              "La castration fait grossir les vésicules séminales",
              "La testostérone n’a aucun effet",
              "Les vésicules séminales produisent la testostérone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la fonction endocrine des testicules."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Testicules et vésicules séminales",
            "caption": "Rats de même âge, 10 jours après l’opération.",
            "tableData": {
              "headers": [
                "Rats",
                "Masse des vésicules séminales (g)"
              ],
              "rows": [
                [
                  "Normaux",
                  "1,500"
                ],
                [
                  "Castrés",
                  "0,220"
                ],
                [
                  "Castrés + 1,5 mg de testostérone",
                  "1,750"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "8 fois",
          "stepTheme": "Calcul",
          "stepTitle": "Plus qu’une « légère » augmentation",
          "paragraphText": "De **0,220 g** à **1,750 g** : la masse est multipliée par environ **8**. Le corrigé du document parle à tort de « légère augmentation ».",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q2",
            "type": "mcq",
            "prompt": "Chez des rats castrés, les vésicules séminales pèsent 0,220 g ; chez des rats castrés recevant de la testostérone, 1,750 g. Combien de fois plus lourdes sont-elles environ ?",
            "options": [
              "Environ 8 fois",
              "Environ 2 fois",
              "Environ 80 fois",
              "Elles ont la même masse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "1,750 ÷ 0,220 ≈ 8."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Liquide séminal",
          "stepTheme": "Correction du document",
          "stepTitle": "Le rôle des vésicules séminales",
          "paragraphText": "Le corrigé dit que les vésicules « sécrètent le sperme ». Elles sécrètent une partie du **liquide séminal** ; le **sperme** = spermatozoïdes + liquides des vésicules et de la prostate.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q3",
            "type": "mcq",
            "prompt": "Quel est le rôle des vésicules séminales ?",
            "options": [
              "Sécréter une partie du liquide séminal, qui se mêle aux spermatozoïdes pour former le sperme",
              "Produire les spermatozoïdes",
              "Sécréter la testostérone",
              "Stocker l’urine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les spermatozoïdes viennent des testicules."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Souris",
          "stepTheme": "Exercice 3",
          "stepTitle": "La greffe d’ovaires",
          "paragraphText": "Souris castrée + **greffe d’ovaires** : **stérile**, mais caractères sexuels **normaux** : l’ovaire greffé sécrète ses hormones dans le sang.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q4",
            "type": "mcq",
            "prompt": "Des souris femelles castrées puis greffées d’ovaires restent stériles mais retrouvent des caractères sexuels normaux. Pourquoi ?",
            "options": [
              "L’ovaire greffé sécrète ses hormones dans le sang, mais ses ovocytes ne peuvent pas rejoindre les voies génitales",
              "L’ovaire greffé produit des spermatozoïdes",
              "La greffe supprime les hormones",
              "Les souris sont trop jeunes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Fonctions mises en évidence : endocrine et exocrine."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Ovaires et souris femelles",
            "caption": "Fécondité et caractères sexuels selon l’opération.",
            "tableData": {
              "headers": [
                "Souris femelle",
                "Résultat"
              ],
              "rows": [
                [
                  "Témoin",
                  "Féconde ; caractères sexuels primaires et secondaires normaux"
                ],
                [
                  "Castrée",
                  "Stérile ; pas de développement des caractères sexuels"
                ],
                [
                  "Castrée + greffe d’ovaires",
                  "Stérile ; caractères sexuels normaux"
                ],
                [
                  "Castrée + injection d’œstrogènes et de progestérone",
                  "Stérile ; caractères sexuels normaux"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Hormone",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’une hormone ?",
          "paragraphText": "Une **hormone** est sécrétée par une **glande endocrine**, transportée par le **sang**, et agit à **très faible dose** sur des **organes cibles**.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q5",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’une hormone ?",
            "options": [
              "Une substance sécrétée par une glande endocrine, transportée par le sang, qui agit à très faible dose sur des organes cibles",
              "Une cellule sexuelle",
              "Un nerf qui conduit le message nerveux",
              "Un suc digestif déversé dans l’intestin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Testostérone, œstrogènes et progestérone sont des hormones."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Voies génitales",
          "stepTheme": "Correction du document",
          "stepTitle": "Les caractères sexuels primaires",
          "paragraphText": "Dans la liste trompe, pénis, ovaire, vésicule séminale, vagin, utérus, les voies génitales de la femme sont la **trompe**, l’**utérus** et le **vagin**. Le corrigé écrit « vagin, utérus, vagin » et oublie la trompe.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q6",
            "type": "mcq",
            "prompt": "Parmi ces organes : trompe, pénis, ovaire, vésicule séminale, vagin, utérus, lesquels sont des voies génitales de la femme ?",
            "options": [
              "La trompe, l’utérus et le vagin",
              "Le pénis et la vésicule séminale",
              "Le vagin seulement",
              "L’ovaire et le pénis"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ovaire est la gonade, pas une voie génitale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q1",
          "type": "mcq",
          "prompt": "Rats de même âge, 10 jours après l’opération : vésicules séminales de 1,500 g chez les rats normaux, 0,220 g chez les castrés, 1,750 g chez les castrés recevant 1,5 mg de testostérone. Qu’en déduire ?",
          "options": [
            "La testostérone assure le développement des vésicules séminales",
            "La castration fait grossir les vésicules séminales",
            "La testostérone n’a aucun effet",
            "Les vésicules séminales produisent la testostérone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la fonction endocrine des testicules."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q2",
          "type": "mcq",
          "prompt": "Chez des rats castrés, les vésicules séminales pèsent 0,220 g ; chez des rats castrés recevant de la testostérone, 1,750 g. Combien de fois plus lourdes sont-elles environ ?",
          "options": [
            "Environ 8 fois",
            "Environ 2 fois",
            "Environ 80 fois",
            "Elles ont la même masse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "1,750 ÷ 0,220 ≈ 8."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q3",
          "type": "mcq",
          "prompt": "Quel est le rôle des vésicules séminales ?",
          "options": [
            "Sécréter une partie du liquide séminal, qui se mêle aux spermatozoïdes pour former le sperme",
            "Produire les spermatozoïdes",
            "Sécréter la testostérone",
            "Stocker l’urine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les spermatozoïdes viennent des testicules."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q4",
          "type": "mcq",
          "prompt": "Des souris femelles castrées puis greffées d’ovaires restent stériles mais retrouvent des caractères sexuels normaux. Pourquoi ?",
          "options": [
            "L’ovaire greffé sécrète ses hormones dans le sang, mais ses ovocytes ne peuvent pas rejoindre les voies génitales",
            "L’ovaire greffé produit des spermatozoïdes",
            "La greffe supprime les hormones",
            "Les souris sont trop jeunes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Fonctions mises en évidence : endocrine et exocrine."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q5",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’une hormone ?",
          "options": [
            "Une substance sécrétée par une glande endocrine, transportée par le sang, qui agit à très faible dose sur des organes cibles",
            "Une cellule sexuelle",
            "Un nerf qui conduit le message nerveux",
            "Un suc digestif déversé dans l’intestin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Testostérone, œstrogènes et progestérone sont des hormones."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q6",
          "type": "mcq",
          "prompt": "Parmi ces organes : trompe, pénis, ovaire, vésicule séminale, vagin, utérus, lesquels sont des voies génitales de la femme ?",
          "options": [
            "La trompe, l’utérus et le vagin",
            "Le pénis et la vésicule séminale",
            "Le vagin seulement",
            "L’ovaire et le pénis"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ovaire est la gonade, pas une voie génitale."
        }
      ]
    }
  ]
};
