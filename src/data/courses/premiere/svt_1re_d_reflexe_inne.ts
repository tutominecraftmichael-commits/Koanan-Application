import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L1_Les rélexes innés.pdf (Mon école à la maison ; thème « La communication nerveuse » ; le document l’intitule « Leçon 5 ») ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L01_REFLEXE_INNE: CurriculumChapter = {
  "id": "premiere_d_svt_l01_reflexe_inne",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 1,
  "title": "Leçon 1 : Le réflexe inné",
  "summary": "Caractères du réflexe inné (grenouille spinale), organes qui interviennent (récepteur, conducteurs, centre nerveux, effecteur), arc réflexe et trajet de l’influx nerveux, réflexe rotulien et réflexe de retrait.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère D_L1_Les rélexes innés.pdf (Mon école à la maison ; thème « La communication nerveuse » ; le document l’intitule « Leçon 5 »)",
  "points": [
    {
      "id": "premiere_d_svt_l01_reflexe_inne_p01",
      "order": 1,
      "title": "Le réflexe inné et ses caractères",
      "summary": "La grenouille spinale ; brusque, involontaire, inéluctable, stéréotypé.",
      "conceptExplanation": "Situation : une élève de 3e du lycée moderne d’Anyama touche par inattention une casserole chaude de riz. Elle crie et retire brusquement la main ; dans son élan, son bras heurte sa sœur. Elle explique que c’est un réflexe.\n- Expérience : une grenouille spinale (encéphale détruit, moelle épinière intacte) est suspendue à une potence. On trempe son pied gauche dans des solutions acides de concentration croissante.\n- Résultats : avec un acide faible, aucune réaction ; avec un acide plus concentré, elle retire le pied ; plus concentré encore, elle fléchit brusquement toute la patte gauche.\n- Ce mouvement est un réflexe (acte réflexe). Il se produit sans encéphale : il est involontaire et inconscient.\n- Il faut une excitation assez forte (efficace) pour déclencher le réflexe.\n- Le réflexe inné est brusque (très rapide), automatique et involontaire, inéluctable (on ne peut pas l’empêcher), stéréotypé (identique chez tous les individus de l’espèce pour le même excitant), et inné : il existe dès la naissance, sans apprentissage.\n- L’excitant naturel qui le déclenche est appelé stimulus absolu.",
      "keyRule": "Réflexe inné : réponse brusque, involontaire, inéluctable, stéréotypée, présente dès la naissance sans apprentissage, déclenchée par un stimulus efficace.",
      "formulas": [],
      "workedExample": {
        "title": "La main sur la casserole",
        "statement": "Pourquoi le retrait de la main de la casserole chaude est-il un réflexe inné ?",
        "methodSteps": [
          "Il est brusque et se produit avant toute décision : il est involontaire.",
          "Tout le monde réagit de la même façon, sans l’avoir appris."
        ],
        "conclusion": "C’est un réflexe inné, déclenché par la chaleur qui excite la peau."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Réflexe inné",
          "stepTheme": "Définition",
          "stepTitle": "Un mouvement réflexe",
          "paragraphText": "Retirer brusquement la main d’une casserole chaude, sans y penser, est un **réflexe inné** : une réponse **brusque** et **involontaire** à une excitation.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p01_q1",
            "type": "mcq",
            "prompt": "Une élève retire brusquement sa main d’une casserole chaude, avant même d’y avoir pensé. Comment appelle-t-on ce mouvement ?",
            "options": [
              "Un réflexe inné",
              "Un mouvement volontaire",
              "Un réflexe conditionné appris",
              "Une contraction lente et réfléchie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il se produit sans décision consciente."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Grenouille spinale",
          "stepTheme": "Expérience",
          "stepTitle": "La grenouille spinale",
          "paragraphText": "Une **grenouille spinale** a l’**encéphale détruit** mais la **moelle épinière intacte** : elle ne peut plus rien décider.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p01_q2",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on une grenouille spinale ?",
            "options": [
              "Une grenouille dont l’encéphale est détruit mais la moelle épinière intacte",
              "Une grenouille dont la moelle épinière est détruite",
              "Une grenouille endormie à l’éther",
              "Une grenouille dont le nerf sciatique est coupé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Spinale : seule la moelle épinière fonctionne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Seuil",
          "stepTheme": "Résultats",
          "stepTitle": "Une excitation suffisante",
          "paragraphText": "Acide **faible** : aucune réaction. Acide **plus concentré** : retrait du pied, puis **flexion** brusque de toute la patte.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p01_q3",
            "type": "mcq",
            "prompt": "Une grenouille spinale ne réagit pas quand on trempe son pied dans un acide très dilué, mais fléchit la patte quand l’acide est plus concentré. Que montre ce résultat ?",
            "options": [
              "Il faut une excitation assez forte pour déclencher le réflexe",
              "Le réflexe dépend de la volonté de la grenouille",
              "L’acide dilué détruit la moelle épinière",
              "La grenouille a appris à retirer sa patte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’excitation doit être efficace."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La grenouille spinale et l’acide",
            "caption": "Encéphale détruit, moelle épinière intacte ; on trempe le pied gauche dans des solutions acides de plus en plus concentrées.",
            "tableData": {
              "headers": [
                "Concentration de l’acide",
                "Réaction de la grenouille"
              ],
              "rows": [
                [
                  "+ (faible)",
                  "Aucune réaction"
                ],
                [
                  "++",
                  "Retrait du pied gauche"
                ],
                [
                  "+++",
                  "Flexion brusque de toute la patte gauche"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Sans cerveau",
          "stepTheme": "Interprétation",
          "stepTitle": "Un réflexe involontaire",
          "paragraphText": "La grenouille **sans encéphale** réagit encore : le réflexe se fait **sans le cerveau**, donc sans volonté ni conscience.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p01_q4",
            "type": "mcq",
            "prompt": "Une grenouille dont l’encéphale est détruit retire encore sa patte excitée par l’acide. Qu’en déduire ?",
            "options": [
              "Le réflexe se fait sans intervention du cerveau : il est involontaire",
              "Le réflexe a besoin du cerveau",
              "La grenouille décide de retirer sa patte",
              "Le réflexe est appris"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La moelle épinière suffit."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Stéréotypé",
          "stepTheme": "Caractères",
          "stepTitle": "Toujours la même réponse",
          "paragraphText": "Le réflexe inné est **stéréotypé** : il se produit **de la même manière** chez tous les individus de l’espèce, pour le même excitant.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p01_q5",
            "type": "mcq",
            "prompt": "Que signifie qu’un réflexe inné est « stéréotypé » ?",
            "options": [
              "Il se produit de la même manière chez tous les individus de l’espèce pour le même excitant",
              "On peut l’empêcher volontairement",
              "Il change à chaque fois",
              "Il n’apparaît qu’après un apprentissage"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Stéréotypé : toujours identique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Inéluctable",
          "stepTheme": "Caractères",
          "stepTitle": "On ne peut pas l’empêcher",
          "paragraphText": "Le réflexe inné est **inéluctable** : quand l’excitation est efficace, il se produit **toujours**, même si l’on voudrait l’empêcher.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p01_q6",
            "type": "mcq",
            "prompt": "Que signifie qu’un réflexe inné est « inéluctable » ?",
            "options": [
              "Qu’on ne peut pas l’empêcher quand l’excitation est efficace",
              "Qu’il est très lent",
              "Qu’il est volontaire",
              "Qu’il n’existe que chez l’adulte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Inéluctable : inévitable."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p01_q1",
          "type": "mcq",
          "prompt": "Une élève retire brusquement sa main d’une casserole chaude, avant même d’y avoir pensé. Comment appelle-t-on ce mouvement ?",
          "options": [
            "Un réflexe inné",
            "Un mouvement volontaire",
            "Un réflexe conditionné appris",
            "Une contraction lente et réfléchie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il se produit sans décision consciente."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p01_q2",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on une grenouille spinale ?",
          "options": [
            "Une grenouille dont l’encéphale est détruit mais la moelle épinière intacte",
            "Une grenouille dont la moelle épinière est détruite",
            "Une grenouille endormie à l’éther",
            "Une grenouille dont le nerf sciatique est coupé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Spinale : seule la moelle épinière fonctionne."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p01_q3",
          "type": "mcq",
          "prompt": "Une grenouille spinale ne réagit pas quand on trempe son pied dans un acide très dilué, mais fléchit la patte quand l’acide est plus concentré. Que montre ce résultat ?",
          "options": [
            "Il faut une excitation assez forte pour déclencher le réflexe",
            "Le réflexe dépend de la volonté de la grenouille",
            "L’acide dilué détruit la moelle épinière",
            "La grenouille a appris à retirer sa patte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’excitation doit être efficace."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p01_q4",
          "type": "mcq",
          "prompt": "Une grenouille dont l’encéphale est détruit retire encore sa patte excitée par l’acide. Qu’en déduire ?",
          "options": [
            "Le réflexe se fait sans intervention du cerveau : il est involontaire",
            "Le réflexe a besoin du cerveau",
            "La grenouille décide de retirer sa patte",
            "Le réflexe est appris"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La moelle épinière suffit."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p01_q5",
          "type": "mcq",
          "prompt": "Que signifie qu’un réflexe inné est « stéréotypé » ?",
          "options": [
            "Il se produit de la même manière chez tous les individus de l’espèce pour le même excitant",
            "On peut l’empêcher volontairement",
            "Il change à chaque fois",
            "Il n’apparaît qu’après un apprentissage"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Stéréotypé : toujours identique."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p01_q6",
          "type": "mcq",
          "prompt": "Que signifie qu’un réflexe inné est « inéluctable » ?",
          "options": [
            "Qu’on ne peut pas l’empêcher quand l’excitation est efficace",
            "Qu’il est très lent",
            "Qu’il est volontaire",
            "Qu’il n’existe que chez l’adulte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Inéluctable : inévitable."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l01_reflexe_inne_p02",
      "order": 2,
      "title": "Les organes du réflexe",
      "summary": "Récepteur, conducteurs, centre nerveux, effecteur.",
      "conceptExplanation": "- Expérience a : on trempe 2 minutes le pied droit d’une grenouille dans l’éther, puis on l’excite avec de l’acide. Elle ne retire pas sa patte pendant 15 minutes, puis le réflexe revient. L’éther a rendu insensibles les terminaisons nerveuses de la peau : la peau est un récepteur.\n- Expérience b : on sectionne le nerf sciatique droit, puis on trempe le pied droit dans l’acide. La grenouille ne retire plus sa patte, définitivement : le nerf est un conducteur du message nerveux.\n- Expérience c : on détruit complètement la moelle épinière. La grenouille ne retire plus sa patte, définitivement : la moelle épinière est le centre nerveux qui transforme le message sensitif en message moteur.\n- Le retrait de la patte montre que le message est arrivé au muscle, qui se contracte : le muscle est l’effecteur.\n- Le nerf sciatique est un nerf mixte : il contient des fibres sensitives (du récepteur vers la moelle) et des fibres motrices (de la moelle vers le muscle).\n- Les organes du réflexe inné sont donc : un récepteur (peau, œil, oreille, nez, langue), un conducteur sensitif, un centre nerveux, un conducteur moteur et un effecteur (muscle).",
      "keyRule": "Récepteur (peau) → conducteur sensitif → centre nerveux (moelle épinière) → conducteur moteur → effecteur (muscle). Si un maillon manque, pas de réflexe.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter la section du nerf",
        "statement": "Après section du nerf sciatique, la patte excitée ne se retire plus jamais. Pourquoi ?",
        "methodSteps": [
          "Le message nerveux ne peut plus aller du récepteur à la moelle, ni de la moelle au muscle.",
          "Le nerf sciatique est donc un conducteur."
        ],
        "conclusion": "Sans conducteur, le réflexe est impossible."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Éther",
          "stepTheme": "Expérience a",
          "stepTitle": "La peau, récepteur",
          "paragraphText": "Après **2 minutes d’éther**, la peau est **insensible** : pas de réflexe pendant **15 minutes**, puis il revient. La **peau** est le **récepteur**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p02_q1",
            "type": "mcq",
            "prompt": "Le pied d’une grenouille est trempé 2 minutes dans l’éther : pendant 15 minutes, l’acide ne provoque plus de retrait, puis le réflexe revient. Quel organe l’éther a-t-il rendu insensible ?",
            "options": [
              "La peau, récepteur du réflexe",
              "La moelle épinière",
              "Le muscle",
              "Le nerf moteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’effet de l’éther est passager."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les organes du réflexe",
            "caption": "Chaque expérience supprime un maillon et révèle son rôle.",
            "tableData": {
              "headers": [
                "Expérience",
                "Résultat",
                "Organe mis en évidence"
              ],
              "rows": [
                [
                  "Pied 2 minutes dans l’éther, puis acide",
                  "Pas de retrait pendant 15 minutes, puis le réflexe revient",
                  "Récepteur : la peau"
                ],
                [
                  "Section du nerf sciatique",
                  "Plus de retrait, définitivement",
                  "Conducteur : le nerf"
                ],
                [
                  "Destruction de la moelle épinière",
                  "Plus de retrait, définitivement",
                  "Centre nerveux : la moelle"
                ],
                [
                  "Animal intact",
                  "La patte se retire",
                  "Effecteur : le muscle qui se contracte"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Nerf sciatique",
          "stepTheme": "Expérience b",
          "stepTitle": "Le nerf, conducteur",
          "paragraphText": "Après **section du nerf sciatique**, plus aucun retrait : le nerf **conduit** le message nerveux.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p02_q2",
            "type": "mcq",
            "prompt": "Après section du nerf sciatique droit, une grenouille ne retire plus jamais sa patte droite trempée dans l’acide. Quel est le rôle du nerf sciatique ?",
            "options": [
              "Conduire le message nerveux : c’est un conducteur",
              "Recevoir l’excitation",
              "Transformer le message sensitif en message moteur",
              "Se contracter"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Coupé, il ne transmet plus rien."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Moelle épinière",
          "stepTheme": "Expérience c",
          "stepTitle": "Le centre nerveux",
          "paragraphText": "Après **destruction de la moelle épinière**, plus aucun réflexe : la moelle est le **centre nerveux** qui transforme le message **sensitif** en message **moteur**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p02_q3",
            "type": "mcq",
            "prompt": "Après destruction complète de sa moelle épinière, une grenouille ne retire plus du tout sa patte excitée. Quel est le rôle de la moelle épinière dans ce réflexe ?",
            "options": [
              "C’est le centre nerveux qui transforme le message sensitif en message moteur",
              "C’est un récepteur",
              "C’est un effecteur",
              "Elle n’a aucun rôle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le message ne peut plus « faire demi-tour »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Effecteur",
          "stepTheme": "Muscle",
          "stepTitle": "Le muscle, effecteur",
          "paragraphText": "Le **muscle** qui se **contracte** et retire la patte est l’**effecteur** : il exécute la réponse.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p02_q4",
            "type": "mcq",
            "prompt": "Dans le réflexe de retrait de la patte, quel organe est l’effecteur ?",
            "options": [
              "Le muscle, qui se contracte",
              "La peau",
              "La moelle épinière",
              "Le ganglion rachidien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Effecteur : il effectue la réponse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Nerf mixte",
          "stepTheme": "Notion",
          "stepTitle": "Un nerf mixte",
          "paragraphText": "Le nerf sciatique contient des fibres **sensitives** et des fibres **motrices** : c’est un **nerf mixte**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p02_q5",
            "type": "mcq",
            "prompt": "Pourquoi la section du nerf sciatique supprime-t-elle à la fois la sensibilité et le mouvement de la patte ?",
            "options": [
              "Parce que c’est un nerf mixte : il contient des fibres sensitives et des fibres motrices",
              "Parce qu’il contient seulement des fibres motrices",
              "Parce que c’est le centre nerveux",
              "Parce qu’il contient la peau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux sens de conduction passent par lui."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Récepteur ou effecteur",
          "stepTheme": "Distinguer",
          "stepTitle": "Ne pas confondre",
          "paragraphText": "La **peau**, l’**œil**, l’**oreille**, le **nez** et la **langue** sont des récepteurs ; le **muscle** du bras qui retire la main est l’**effecteur**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p02_q6",
            "type": "mcq",
            "prompt": "Dans le réflexe de retrait de la main d’une casserole chaude, lequel de ces organes est l’effecteur ?",
            "options": [
              "Le muscle du bras",
              "La peau de la main",
              "L’œil",
              "La langue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le récepteur reçoit, l’effecteur répond."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p02_q1",
          "type": "mcq",
          "prompt": "Le pied d’une grenouille est trempé 2 minutes dans l’éther : pendant 15 minutes, l’acide ne provoque plus de retrait, puis le réflexe revient. Quel organe l’éther a-t-il rendu insensible ?",
          "options": [
            "La peau, récepteur du réflexe",
            "La moelle épinière",
            "Le muscle",
            "Le nerf moteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’effet de l’éther est passager."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p02_q2",
          "type": "mcq",
          "prompt": "Après section du nerf sciatique droit, une grenouille ne retire plus jamais sa patte droite trempée dans l’acide. Quel est le rôle du nerf sciatique ?",
          "options": [
            "Conduire le message nerveux : c’est un conducteur",
            "Recevoir l’excitation",
            "Transformer le message sensitif en message moteur",
            "Se contracter"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Coupé, il ne transmet plus rien."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p02_q3",
          "type": "mcq",
          "prompt": "Après destruction complète de sa moelle épinière, une grenouille ne retire plus du tout sa patte excitée. Quel est le rôle de la moelle épinière dans ce réflexe ?",
          "options": [
            "C’est le centre nerveux qui transforme le message sensitif en message moteur",
            "C’est un récepteur",
            "C’est un effecteur",
            "Elle n’a aucun rôle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le message ne peut plus « faire demi-tour »."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p02_q4",
          "type": "mcq",
          "prompt": "Dans le réflexe de retrait de la patte, quel organe est l’effecteur ?",
          "options": [
            "Le muscle, qui se contracte",
            "La peau",
            "La moelle épinière",
            "Le ganglion rachidien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Effecteur : il effectue la réponse."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p02_q5",
          "type": "mcq",
          "prompt": "Pourquoi la section du nerf sciatique supprime-t-elle à la fois la sensibilité et le mouvement de la patte ?",
          "options": [
            "Parce que c’est un nerf mixte : il contient des fibres sensitives et des fibres motrices",
            "Parce qu’il contient seulement des fibres motrices",
            "Parce que c’est le centre nerveux",
            "Parce qu’il contient la peau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux sens de conduction passent par lui."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p02_q6",
          "type": "mcq",
          "prompt": "Dans le réflexe de retrait de la main d’une casserole chaude, lequel de ces organes est l’effecteur ?",
          "options": [
            "Le muscle du bras",
            "La peau de la main",
            "L’œil",
            "La langue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le récepteur reçoit, l’effecteur répond."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l01_reflexe_inne_p03",
      "order": 3,
      "title": "L’arc réflexe",
      "summary": "Le trajet de l’influx nerveux ; neurones sensitif, d’association et moteur.",
      "conceptExplanation": "- Une excitation efficace sur un récepteur fait naître un message nerveux, ou influx nerveux : un signal électrique qui parcourt les neurones.\n- Le trajet récepteur → conducteur sensitif → centre nerveux → conducteur moteur → effecteur s’appelle l’arc réflexe.\n- Le neurone sensitif conduit l’influx du récepteur à la moelle épinière ; son corps cellulaire est dans le ganglion rachidien, sur la racine dorsale du nerf rachidien.\n- Dans la substance grise de la moelle, l’influx passe au neurone moteur, directement ou par un neurone d’association (interneurone).\n- Le neurone moteur conduit l’influx de la moelle épinière jusqu’au muscle effecteur.\n- Le réflexe est unilatéral quand la réponse se fait du même côté que l’excitation.\n- Correction du document : il donne la moelle épinière comme centre de tous les réflexes innés, avec des récepteurs comme l’œil et la langue. Les réflexes du tronc et des membres ont leur centre dans la moelle épinière. Mais certains réflexes innés (pupille qui se rétrécit à la lumière, salivation, déglutition) ont leur centre dans le tronc cérébral, à la base de l’encéphale. Aucun réflexe inné ne passe par le cortex cérébral, siège de la volonté.",
      "keyRule": "Arc réflexe : récepteur → neurone sensitif (ganglion rachidien) → moelle épinière (neurone d’association) → neurone moteur → effecteur.",
      "formulas": [],
      "workedExample": {
        "title": "Suivre l’influx nerveux",
        "statement": "Une pointe pique la peau du pied : décris le trajet du message jusqu’au muscle.",
        "methodSteps": [
          "La peau (récepteur) crée l’influx nerveux.",
          "Le nerf sensitif le conduit à la moelle épinière, qui le transforme en influx moteur.",
          "Le nerf moteur le conduit au muscle, qui se contracte."
        ],
        "conclusion": "Pointe → peau → nerf sensitif → moelle épinière → nerf moteur → muscle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Arc réflexe",
          "stepTheme": "Trajet",
          "stepTitle": "L’arc réflexe",
          "paragraphText": "Le trajet **récepteur → nerf sensitif → centre nerveux → nerf moteur → effecteur** s’appelle l’**arc réflexe**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p03_q1",
            "type": "mcq",
            "prompt": "Quel est l’ordre correct du trajet du message nerveux dans un arc réflexe ?",
            "options": [
              "Récepteur → nerf sensitif → centre nerveux → nerf moteur → effecteur",
              "Effecteur → nerf moteur → centre nerveux → nerf sensitif → récepteur",
              "Récepteur → nerf moteur → centre nerveux → nerf sensitif → effecteur",
              "Centre nerveux → récepteur → effecteur → nerf sensitif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le message part du récepteur et finit à l’effecteur."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "L’arc réflexe",
            "caption": "Le message nerveux va du récepteur (peau) au centre nerveux (moelle épinière) par le neurone sensitif, dont le corps cellulaire est dans le ganglion rachidien, puis du centre à l’effecteur (muscle) par le neurone moteur.",
            "svgContent": "<svg viewBox=\"0 0 560 262\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Arc réflexe : peau, neurone sensitif, ganglion rachidien, moelle épinière, neurone d’association, neurone moteur, muscle\"><ellipse cx=\"140\" cy=\"130\" rx=\"98\" ry=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M92,84 Q118,108 140,112 Q162,108 188,84 L198,96 Q172,122 170,130 Q172,140 198,166 L188,178 Q162,152 140,148 Q118,152 92,178 L82,166 Q108,140 110,130 Q108,122 82,96 Z\" fill=\"#8B5CF6\" fill-opacity=\"0.18\" stroke=\"#8B5CF6\" stroke-width=\"1.6\"/><polyline points=\"440.0,75.0 400.0,75.0 330.0,72.0 262.0,82.0 205.0,94.0 180.0,104.0\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><ellipse cx=\"262\" cy=\"82\" rx=\"15\" ry=\"9\" fill=\"#3B82F6\" fill-opacity=\"0.3\" stroke=\"#3B82F6\" stroke-width=\"2\"/><line x1=\"178\" y1=\"106\" x2=\"170\" y2=\"150\" stroke=\"#10B981\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><circle cx=\"178\" cy=\"106\" r=\"4\" fill=\"#10B981\"/><circle cx=\"170\" cy=\"152\" r=\"5\" fill=\"#EF4444\"/><polyline points=\"170.0,152.0 215.0,172.0 330.0,190.0 440.0,205.0\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><ellipse cx=\"472\" cy=\"208\" rx=\"32\" ry=\"14\" fill=\"#EF4444\" fill-opacity=\"0.25\" stroke=\"#EF4444\" stroke-width=\"2\"/><rect x=\"440\" y=\"58\" width=\"90\" height=\"34\" rx=\"6\" fill=\"#F59E0B\" fill-opacity=\"0.18\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"485\" y=\"80\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">peau</text><text x=\"485\" y=\"50\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">récepteur</text><line x1=\"400\" y1=\"75\" x2=\"374.0\" y2=\"73.5\" stroke=\"#3B82F6\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"365,73 373.7,78.5 374.3,68.5\" fill=\"#3B82F6\"/><line x1=\"300\" y1=\"186\" x2=\"336.1\" y2=\"190.8\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"345,192 336.7,185.9 335.4,195.8\" fill=\"#EF4444\"/><text x=\"360\" y=\"58\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">neurone sensitif</text><text x=\"250\" y=\"108\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">ganglion rachidien</text><text x=\"335\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">neurone moteur</text><text x=\"472\" y=\"240\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">effecteur : muscle</text><text x=\"140\" y=\"224\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">neurone d’association</text><text x=\"140\" y=\"242\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">moelle épinière (centre nerveux)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Neurone sensitif",
          "stepTheme": "Rôle",
          "stepTitle": "Vers la moelle",
          "paragraphText": "Le **neurone sensitif** conduit l’influx nerveux **du récepteur vers le centre nerveux**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p03_q2",
            "type": "mcq",
            "prompt": "Dans un arc réflexe, quel est le rôle du neurone sensitif ?",
            "options": [
              "Conduire le message nerveux du récepteur vers le centre nerveux",
              "Conduire le message du centre nerveux vers le muscle",
              "Contracter le muscle",
              "Recevoir l’excitation à la place de la peau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sensitif : il apporte la sensation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Ganglion rachidien",
          "stepTheme": "Localisation",
          "stepTitle": "Le ganglion rachidien",
          "paragraphText": "Les **corps cellulaires** des neurones sensitifs sont dans le **ganglion rachidien**, sur la racine dorsale du nerf rachidien.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p03_q3",
            "type": "mcq",
            "prompt": "Où se trouvent les corps cellulaires des neurones sensitifs d’un réflexe dont le centre est la moelle épinière ?",
            "options": [
              "Dans le ganglion rachidien",
              "Dans le muscle",
              "Dans la peau",
              "Dans le cerveau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le petit renflement du nerf près de la moelle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Neurone d’association",
          "stepTheme": "Relais",
          "stepTitle": "Le neurone d’association",
          "paragraphText": "Dans la **substance grise** de la moelle, un **neurone d’association** relie parfois le neurone sensitif au neurone moteur.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p03_q4",
            "type": "mcq",
            "prompt": "Dans la substance grise de la moelle épinière, quel neurone relie parfois le neurone sensitif au neurone moteur ?",
            "options": [
              "Le neurone d’association (interneurone)",
              "Le neurone moteur seul",
              "Le ganglion rachidien",
              "La fibre musculaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est un relais à l’intérieur du centre nerveux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Influx nerveux",
          "stepTheme": "Notion",
          "stepTitle": "Un signal électrique",
          "paragraphText": "L’**influx nerveux** est un **signal électrique** qui parcourt les neurones à la suite d’une **excitation**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p03_q5",
            "type": "mcq",
            "prompt": "Qu’est-ce que l’influx nerveux ?",
            "options": [
              "Un signal électrique qui parcourt les neurones à la suite d’une excitation",
              "Une hormone transportée par le sang",
              "Un liquide qui coule dans les nerfs",
              "Une contraction du muscle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On l’appelle aussi message nerveux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Centre nerveux",
          "stepTheme": "Correction du document",
          "stepTitle": "Pas toujours la moelle",
          "paragraphText": "Le document place le centre de **tous** les réflexes innés dans la moelle épinière. Les réflexes de l’**œil** (pupille), de la **salivation** ou de la **déglutition** ont leur centre dans le **tronc cérébral**. Jamais dans le **cortex** : un réflexe n’est pas volontaire.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p03_q6",
            "type": "mcq",
            "prompt": "Le réflexe pupillaire (la pupille se rétrécit à la lumière vive) est un réflexe inné. Où se trouve son centre nerveux ?",
            "options": [
              "Dans le tronc cérébral, à la base de l’encéphale",
              "Dans la moelle épinière lombaire",
              "Dans le muscle de l’iris",
              "Dans le cortex, siège de la volonté"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il reste involontaire : le cortex n’intervient pas."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p03_q1",
          "type": "mcq",
          "prompt": "Quel est l’ordre correct du trajet du message nerveux dans un arc réflexe ?",
          "options": [
            "Récepteur → nerf sensitif → centre nerveux → nerf moteur → effecteur",
            "Effecteur → nerf moteur → centre nerveux → nerf sensitif → récepteur",
            "Récepteur → nerf moteur → centre nerveux → nerf sensitif → effecteur",
            "Centre nerveux → récepteur → effecteur → nerf sensitif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le message part du récepteur et finit à l’effecteur."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p03_q2",
          "type": "mcq",
          "prompt": "Dans un arc réflexe, quel est le rôle du neurone sensitif ?",
          "options": [
            "Conduire le message nerveux du récepteur vers le centre nerveux",
            "Conduire le message du centre nerveux vers le muscle",
            "Contracter le muscle",
            "Recevoir l’excitation à la place de la peau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sensitif : il apporte la sensation."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p03_q3",
          "type": "mcq",
          "prompt": "Où se trouvent les corps cellulaires des neurones sensitifs d’un réflexe dont le centre est la moelle épinière ?",
          "options": [
            "Dans le ganglion rachidien",
            "Dans le muscle",
            "Dans la peau",
            "Dans le cerveau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le petit renflement du nerf près de la moelle."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p03_q4",
          "type": "mcq",
          "prompt": "Dans la substance grise de la moelle épinière, quel neurone relie parfois le neurone sensitif au neurone moteur ?",
          "options": [
            "Le neurone d’association (interneurone)",
            "Le neurone moteur seul",
            "Le ganglion rachidien",
            "La fibre musculaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est un relais à l’intérieur du centre nerveux."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p03_q5",
          "type": "mcq",
          "prompt": "Qu’est-ce que l’influx nerveux ?",
          "options": [
            "Un signal électrique qui parcourt les neurones à la suite d’une excitation",
            "Une hormone transportée par le sang",
            "Un liquide qui coule dans les nerfs",
            "Une contraction du muscle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On l’appelle aussi message nerveux."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p03_q6",
          "type": "mcq",
          "prompt": "Le réflexe pupillaire (la pupille se rétrécit à la lumière vive) est un réflexe inné. Où se trouve son centre nerveux ?",
          "options": [
            "Dans le tronc cérébral, à la base de l’encéphale",
            "Dans la moelle épinière lombaire",
            "Dans le muscle de l’iris",
            "Dans le cortex, siège de la volonté"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il reste involontaire : le cortex n’intervient pas."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l01_reflexe_inne_p04",
      "order": 4,
      "title": "Le réflexe rotulien et le réflexe de retrait",
      "summary": "Deux réflexes innés à expliquer : examens médicaux et douleur.",
      "conceptExplanation": "Situation : lors d’un examen médical, le médecin fait asseoir un élève et frappe avec un marteau sous sa rotule. La jambe est projetée en avant.\n- C’est le réflexe rotulien, un réflexe inné.\n- Le choc sur le tendon étire le quadriceps, le muscle de l’avant de la cuisse. Ses récepteurs (les fuseaux neuromusculaires, dans le muscle) créent un influx nerveux sensitif.\n- Le neurone sensitif conduit l’influx à la moelle épinière, où il passe directement au neurone moteur, sans neurone d’association.\n- Le neurone moteur conduit l’influx au quadriceps, qui se contracte : la jambe se tend.\n- Ici, le muscle contient le récepteur et il est aussi l’effecteur.\n- Réflexe de retrait de la main (situation d’évaluation) : les récepteurs de la douleur de la peau (nocicepteurs) envoient l’influx par le neurone sensitif (a) à la moelle ; un neurone d’association (b), dans la substance grise, le transmet au neurone moteur (c), qui commande le muscle fléchisseur du bras.\n- Exercice 2 : sur le schéma de l’arc réflexe, a est la fibre nerveuse sensitive (de la peau vers la moelle), b la fibre nerveuse motrice (de la moelle vers le muscle), c la moelle épinière (centre nerveux).",
      "keyRule": "Rotulien : quadriceps étiré → neurone sensitif → moelle → neurone moteur → quadriceps contracté. Retrait : peau → neurone sensitif → neurone d’association → neurone moteur → fléchisseur.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le coup de marteau",
        "statement": "Pourquoi la jambe se tend-elle quand le médecin frappe sous la rotule ?",
        "methodSteps": [
          "Le choc étire le quadriceps, dont les récepteurs envoient un influx sensitif à la moelle.",
          "La moelle renvoie un influx moteur au quadriceps, qui se contracte."
        ],
        "conclusion": "La contraction du quadriceps projette la jambe en avant : c’est le réflexe rotulien."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Rotulien",
          "stepTheme": "Situation",
          "stepTitle": "Le coup de marteau",
          "paragraphText": "Un choc **sous la rotule** projette la jambe en avant : c’est le **réflexe rotulien**, un réflexe inné.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p04_q1",
            "type": "mcq",
            "prompt": "Un médecin frappe avec un marteau sous la rotule d’un élève assis : sa jambe est projetée en avant. Comment s’appelle cette réaction ?",
            "options": [
              "Le réflexe rotulien, un réflexe inné",
              "Un mouvement volontaire",
              "Un réflexe conditionné",
              "Une paralysie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le médecin vérifie ainsi la moelle épinière et les nerfs."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "Récepteur",
          "stepTheme": "Nuance",
          "stepTitle": "Un récepteur dans le muscle",
          "paragraphText": "Ici, le récepteur n’est pas la peau : ce sont les **fuseaux neuromusculaires** du **quadriceps**, étiré par le choc.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p04_q2",
            "type": "mcq",
            "prompt": "Dans le réflexe rotulien, où se trouvent les récepteurs stimulés par le choc du marteau sous la rotule ?",
            "options": [
              "Dans le muscle de la cuisse (quadriceps), étiré par le choc",
              "Dans la peau du genou seulement",
              "Dans la moelle épinière",
              "Dans le cerveau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le muscle étiré « se sent » étiré."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Quadriceps",
          "stepTheme": "Effecteur",
          "stepTitle": "Le muscle qui répond",
          "paragraphText": "Le **quadriceps** se **contracte** et tend la jambe : il est l’**effecteur**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p04_q3",
            "type": "mcq",
            "prompt": "Dans le réflexe rotulien, quel muscle se contracte pour projeter la jambe en avant ?",
            "options": [
              "Le quadriceps, muscle de l’avant de la cuisse",
              "Le biceps du bras",
              "Le cœur",
              "Le muscle de la langue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le même muscle reçoit l’étirement et répond."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Deux neurones",
          "stepTheme": "Arc court",
          "stepTitle": "Un arc réflexe très court",
          "paragraphText": "Dans le réflexe rotulien, le neurone sensitif est relié **directement** au neurone moteur dans la moelle : **pas** de neurone d’association.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p04_q4",
            "type": "mcq",
            "prompt": "Dans le réflexe rotulien, quels neurones forment l’arc réflexe ?",
            "options": [
              "Un neurone sensitif et un neurone moteur, reliés directement",
              "Un neurone sensitif, un neurone d’association et un neurone moteur",
              "Un seul neurone moteur",
              "Aucun : le muscle réagit seul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est pourquoi ce réflexe est très rapide."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "a, b, c",
          "stepTheme": "Évaluation",
          "stepTitle": "Le réflexe de retrait de la main",
          "paragraphText": "Douleur à la main : **a** = neurone **sensitif**, **b** = neurone **d’association** (substance grise), **c** = neurone **moteur** vers le muscle fléchisseur.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p04_q5",
            "type": "mcq",
            "prompt": "Sur un schéma du réflexe de retrait de la main, a part du récepteur de la douleur vers la moelle, b est dans la substance grise entre a et c, et c va au muscle fléchisseur. Que sont a, b et c ?",
            "options": [
              "a : neurone sensitif ; b : neurone d’association ; c : neurone moteur",
              "a : neurone moteur ; b : neurone sensitif ; c : neurone d’association",
              "a : neurone d’association ; b : neurone moteur ; c : neurone sensitif",
              "a : muscle ; b : peau ; c : moelle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Suivre le sens : récepteur → centre → muscle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Schématiser",
          "stepTheme": "Activité",
          "stepTitle": "Le trajet du message",
          "paragraphText": "Avec : pointe, nerf sensitif, moelle épinière, nerf moteur, muscle → **pointe → peau → nerf sensitif → moelle épinière → nerf moteur → muscle**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p04_q6",
            "type": "mcq",
            "prompt": "Une pointe pique la peau du pied d’une grenouille spinale. Quel trajet suit le message nerveux jusqu’au muscle qui retire le pied ?",
            "options": [
              "Pointe → peau → nerf sensitif → moelle épinière → nerf moteur → muscle",
              "Pointe → muscle → nerf moteur → moelle épinière → nerf sensitif → peau",
              "Pointe → cerveau → muscle",
              "Pointe → moelle épinière → peau → muscle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La pointe est l’excitant ; la peau, le récepteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p04_q1",
          "type": "mcq",
          "prompt": "Un médecin frappe avec un marteau sous la rotule d’un élève assis : sa jambe est projetée en avant. Comment s’appelle cette réaction ?",
          "options": [
            "Le réflexe rotulien, un réflexe inné",
            "Un mouvement volontaire",
            "Un réflexe conditionné",
            "Une paralysie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le médecin vérifie ainsi la moelle épinière et les nerfs."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p04_q2",
          "type": "mcq",
          "prompt": "Dans le réflexe rotulien, où se trouvent les récepteurs stimulés par le choc du marteau sous la rotule ?",
          "options": [
            "Dans le muscle de la cuisse (quadriceps), étiré par le choc",
            "Dans la peau du genou seulement",
            "Dans la moelle épinière",
            "Dans le cerveau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le muscle étiré « se sent » étiré."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p04_q3",
          "type": "mcq",
          "prompt": "Dans le réflexe rotulien, quel muscle se contracte pour projeter la jambe en avant ?",
          "options": [
            "Le quadriceps, muscle de l’avant de la cuisse",
            "Le biceps du bras",
            "Le cœur",
            "Le muscle de la langue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le même muscle reçoit l’étirement et répond."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p04_q4",
          "type": "mcq",
          "prompt": "Dans le réflexe rotulien, quels neurones forment l’arc réflexe ?",
          "options": [
            "Un neurone sensitif et un neurone moteur, reliés directement",
            "Un neurone sensitif, un neurone d’association et un neurone moteur",
            "Un seul neurone moteur",
            "Aucun : le muscle réagit seul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est pourquoi ce réflexe est très rapide."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p04_q5",
          "type": "mcq",
          "prompt": "Sur un schéma du réflexe de retrait de la main, a part du récepteur de la douleur vers la moelle, b est dans la substance grise entre a et c, et c va au muscle fléchisseur. Que sont a, b et c ?",
          "options": [
            "a : neurone sensitif ; b : neurone d’association ; c : neurone moteur",
            "a : neurone moteur ; b : neurone sensitif ; c : neurone d’association",
            "a : neurone d’association ; b : neurone moteur ; c : neurone sensitif",
            "a : muscle ; b : peau ; c : moelle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Suivre le sens : récepteur → centre → muscle."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p04_q6",
          "type": "mcq",
          "prompt": "Une pointe pique la peau du pied d’une grenouille spinale. Quel trajet suit le message nerveux jusqu’au muscle qui retire le pied ?",
          "options": [
            "Pointe → peau → nerf sensitif → moelle épinière → nerf moteur → muscle",
            "Pointe → muscle → nerf moteur → moelle épinière → nerf sensitif → peau",
            "Pointe → cerveau → muscle",
            "Pointe → moelle épinière → peau → muscle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La pointe est l’excitant ; la peau, le récepteur."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l01_reflexe_inne_p05",
      "order": 5,
      "title": "Bilan : vrai ou faux, texte à trous",
      "summary": "Les exercices du document, corrigés.",
      "conceptExplanation": "Le document ne donne pas de corrigé pour ces exercices ; voici les réponses.\n- Exercice 1 (affirmations) : 1 faux, le cerveau n’intervient pas ; 2 vrai, un stimulus efficace déclenche toujours le réflexe ; 3 faux, le muscle est un effecteur ; 4 faux, le nerf moteur conduit le message de la moelle épinière vers le muscle ; 5 vrai, la peau est un récepteur. Affirmations justes : 2 et 5.\n- Exercice 2 (caractéristiques) : le réflexe inné est automatique, inéluctable, provoqué par une excitation, involontaire. Il n’est pas volontaire. Il ne disparaît pas avec l’âge, contrairement au réflexe conditionné, qui s’éteint s’il n’est plus renforcé (seuls quelques réflexes du nouveau-né, comme l’agrippement, disparaissent pendant la croissance).\n- Exercice 3 (texte à trous) : 1 inné ; 2 sensitif ; 3 nerveuses ; 4 sensitifs ; 5 neurone ; 6 moelle épinière ; 7 moteur ; 8 moteur ; 9 effecteur ; 10 unilatéral ; 11 cellules ; 12 excitation.",
      "keyRule": "Le nerf sensitif va du récepteur à la moelle ; le nerf moteur, de la moelle au muscle. Réflexe inné : involontaire, automatique, inéluctable.",
      "formulas": [],
      "workedExample": {
        "title": "Corriger une affirmation",
        "statement": "« Le nerf moteur transmet l’information du muscle à la moelle épinière. » Corrige.",
        "methodSteps": [
          "Le nerf moteur part du centre nerveux.",
          "Il conduit l’influx jusqu’à l’effecteur."
        ],
        "conclusion": "Le nerf moteur transmet l’information de la moelle épinière au muscle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Nerf moteur",
          "stepTheme": "Exercice 1",
          "stepTitle": "Dans quel sens ?",
          "paragraphText": "Le **nerf moteur** conduit le message **de la moelle épinière vers le muscle**, pas l’inverse.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p05_q1",
            "type": "mcq",
            "prompt": "« Le nerf moteur transmet l’information du muscle à la moelle épinière. » Vrai ou faux ?",
            "options": [
              "Faux : le nerf moteur conduit le message de la moelle épinière vers le muscle",
              "Vrai",
              "Faux : il conduit le message du cerveau vers la peau",
              "Vrai, car le muscle est un récepteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le nerf sensitif qui va vers la moelle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Stimulus efficace",
          "stepTheme": "Exercice 1",
          "stepTitle": "Toujours une réponse",
          "paragraphText": "Un **stimulus efficace** déclenche **toujours** le réflexe inné : c’est le caractère **inéluctable**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p05_q2",
            "type": "mcq",
            "prompt": "« Un stimulus efficace déclenche toujours le réflexe inné. » Vrai ou faux ?",
            "options": [
              "Vrai : le réflexe inné est inéluctable",
              "Faux : il ne marche qu’une fois sur deux",
              "Faux : il faut d’abord un apprentissage",
              "Faux : il faut que l’animal le veuille"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Affirmations justes de l’exercice : 2 et 5."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Caractéristiques",
          "stepTheme": "Exercice 2",
          "stepTitle": "L’intrus",
          "paragraphText": "Le réflexe inné est **automatique**, **inéluctable**, **involontaire** et **provoqué par une excitation**. Il n’est **pas volontaire**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p05_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces caractéristiques n’appartient pas au réflexe inné ?",
            "options": [
              "Volontaire",
              "Automatique",
              "Inéluctable",
              "Provoqué par une excitation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Involontaire et volontaire s’opposent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Texte à trous",
          "stepTheme": "Exercice 3",
          "stepTitle": "Compléter le texte",
          "paragraphText": "« L’influx nerveux **sensitif** emprunte le **neurone** sensitif pour être conduit à la **moelle épinière**, où il est transformé en influx nerveux **moteur**. »",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p05_q4",
            "type": "mcq",
            "prompt": "Complète : « L’influx nerveux sensitif emprunte le neurone sensitif pour être conduit à la …, où il est transformé en influx nerveux moteur. »",
            "options": [
              "moelle épinière",
              "peau",
              "fibre musculaire",
              "langue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 6 moelle épinière."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Unilatéral",
          "stepTheme": "Notion",
          "stepTitle": "Du même côté",
          "paragraphText": "Quand seule la patte **excitée** réagit, le réflexe est **unilatéral** : la réponse se fait du **même côté** que l’excitation.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p05_q5",
            "type": "mcq",
            "prompt": "On pince faiblement la patte gauche d’une grenouille spinale : seule la patte gauche se fléchit. Comment qualifie-t-on ce réflexe ?",
            "options": [
              "Unilatéral : la réponse se fait du même côté que l’excitation",
              "Bilatéral",
              "Généralisé à tout le corps",
              "Conditionné"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec une excitation plus forte, les deux pattes peuvent réagir."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Inné ou conditionné",
          "stepTheme": "Distinguer",
          "stepTitle": "Deux sortes de réflexes",
          "paragraphText": "Le réflexe **inné** existe dès la **naissance**, sans apprentissage. Le réflexe **conditionné** s’**acquiert** par apprentissage et peut **s’éteindre**.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexe_inne_p05_q6",
            "type": "mcq",
            "prompt": "Qu’est-ce qui distingue un réflexe inné d’un réflexe conditionné ?",
            "options": [
              "Le réflexe inné existe dès la naissance sans apprentissage ; le réflexe conditionné s’acquiert par apprentissage",
              "Le réflexe inné est volontaire",
              "Le réflexe conditionné existe dès la naissance",
              "Il n’y a aucune différence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le réflexe conditionné peut disparaître s’il n’est plus renforcé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p05_q1",
          "type": "mcq",
          "prompt": "« Le nerf moteur transmet l’information du muscle à la moelle épinière. » Vrai ou faux ?",
          "options": [
            "Faux : le nerf moteur conduit le message de la moelle épinière vers le muscle",
            "Vrai",
            "Faux : il conduit le message du cerveau vers la peau",
            "Vrai, car le muscle est un récepteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le nerf sensitif qui va vers la moelle."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p05_q2",
          "type": "mcq",
          "prompt": "« Un stimulus efficace déclenche toujours le réflexe inné. » Vrai ou faux ?",
          "options": [
            "Vrai : le réflexe inné est inéluctable",
            "Faux : il ne marche qu’une fois sur deux",
            "Faux : il faut d’abord un apprentissage",
            "Faux : il faut que l’animal le veuille"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Affirmations justes de l’exercice : 2 et 5."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p05_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces caractéristiques n’appartient pas au réflexe inné ?",
          "options": [
            "Volontaire",
            "Automatique",
            "Inéluctable",
            "Provoqué par une excitation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Involontaire et volontaire s’opposent."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p05_q4",
          "type": "mcq",
          "prompt": "Complète : « L’influx nerveux sensitif emprunte le neurone sensitif pour être conduit à la …, où il est transformé en influx nerveux moteur. »",
          "options": [
            "moelle épinière",
            "peau",
            "fibre musculaire",
            "langue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 6 moelle épinière."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p05_q5",
          "type": "mcq",
          "prompt": "On pince faiblement la patte gauche d’une grenouille spinale : seule la patte gauche se fléchit. Comment qualifie-t-on ce réflexe ?",
          "options": [
            "Unilatéral : la réponse se fait du même côté que l’excitation",
            "Bilatéral",
            "Généralisé à tout le corps",
            "Conditionné"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec une excitation plus forte, les deux pattes peuvent réagir."
        },
        {
          "id": "premiere_d_svt_l01_reflexe_inne_p05_q6",
          "type": "mcq",
          "prompt": "Qu’est-ce qui distingue un réflexe inné d’un réflexe conditionné ?",
          "options": [
            "Le réflexe inné existe dès la naissance sans apprentissage ; le réflexe conditionné s’acquiert par apprentissage",
            "Le réflexe inné est volontaire",
            "Le réflexe conditionné existe dès la naissance",
            "Il n’y a aucune différence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le réflexe conditionné peut disparaître s’il n’est plus renforcé."
        }
      ]
    }
  ]
};
