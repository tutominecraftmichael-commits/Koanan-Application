import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère A_L9_LA MISE EN RESERVE DES NUTRIMENTS.pdf (Mon école à la maison) ». Première A1 et A2.
// Fichier généré (scratchpad build_1re_a_svt_c.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_A_L09_MISE_EN_RESERVE_NUTRIMENTS: CurriculumChapter = {
  "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 9,
  "title": "Leçon 9 : La mise en réserve des nutriments dans l’organisme",
  "summary": "Lieux et formes de stockage (glycogène du foie et des muscles, triglycérides du tissu adipeux), rôle du pancréas, insuline et glucagon, régulation de la glycémie et diabète.",
  "officialVolumeHours": 5,
  "contentVersion": 2,
  "source": "SVT 1ère A_L9_LA MISE EN RESERVE DES NUTRIMENTS.pdf (Mon école à la maison)",
  "points": [
    {
      "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01",
      "order": 1,
      "title": "Où les nutriments sont-ils stockés ?",
      "summary": "Glycogène dans le foie et les muscles, triglycérides dans le tissu adipeux.",
      "conceptExplanation": "Situation : une élève de 1re A, privée de déjeuner, réussit pourtant de bonnes performances en EPS l’après-midi. Le professeur explique qu’elle a utilisé les nutriments mis en réserve par son organisme.\n- Les nutriments absorbés par l’intestin passent dans le sang, qui les transporte vers les organes de stockage.\n- Le foie stocke le glucose sous forme de glycogène ; il peut aussi transformer une partie du glucose en graisses.\n- Les muscles stockent le glucose sous forme de glycogène, pour leur propre usage.\n- Le tissu adipeux stocke les acides gras et le glycérol (et une partie du glucose transformée) sous forme de triglycérides, c’est-à-dire de graisses.\n- Les acides aminés servent surtout à fabriquer les protéines du foie, des muscles et des autres organes ; ils ne forment pas une vraie réserve.\n- Correction du document : il écrit que les acides aminés sont stockés « sous forme de glycogène » dans le foie et les muscles ; c’est inexact, le glycogène est fait de glucose. Dans l’activité, il compte faux « le glycérol est stocké sous forme de graisse dans les tissus adipeux » alors qu’il compte juste « les acides gras sont stockés dans les tissus adipeux » : les deux vont ensemble, car un triglycéride est formé d’un glycérol et de trois acides gras.",
      "keyRule": "Foie et muscles : glycogène (à partir du glucose). Tissu adipeux : triglycérides (glycérol + acides gras).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la performance de l’élève",
        "statement": "Privée de déjeuner, une élève réussit bien en EPS. D’où vient son énergie ?",
        "methodSteps": [
          "Ses repas précédents ont permis de stocker du glycogène (foie, muscles) et des graisses (tissu adipeux).",
          "Pendant l’effort, ces réserves sont dégradées pour fournir du glucose et des acides gras à ses cellules."
        ],
        "conclusion": "Ses réserves de nutriments lui ont fourni l’énergie nécessaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Situation",
          "stepTheme": "L’élève sans déjeuner",
          "stepTitle": "Des réserves dans l’organisme",
          "paragraphText": "Une élève **privée de déjeuner** réussit pourtant en EPS : son organisme utilise des **nutriments mis en réserve** lors des repas précédents.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q1",
            "type": "mcq",
            "prompt": "Une élève privée de déjeuner réussit de bonnes performances sportives l’après-midi. D’où vient l’énergie utilisée ?",
            "options": [
              "Des nutriments mis en réserve dans son organisme",
              "De l’eau qu’elle a bue",
              "De l’air seulement",
              "De rien : sans repas, aucun effort n’est possible"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’organisme stocke une partie des nutriments après chaque repas."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Où et sous quelle forme les nutriments sont-ils mis en réserve ?",
            "caption": "Le sang transporte les nutriments absorbés par l’intestin jusqu’aux organes de stockage.",
            "tableData": {
              "headers": [
                "Organe",
                "Forme de réserve",
                "À partir de"
              ],
              "rows": [
                [
                  "Foie",
                  "Glycogène",
                  "Glucose"
                ],
                [
                  "Muscles",
                  "Glycogène",
                  "Glucose"
                ],
                [
                  "Tissu adipeux",
                  "Triglycérides (graisses)",
                  "Acides gras et glycérol, et une partie du glucose"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Glycogène",
          "stepTheme": "Foie",
          "stepTitle": "Le glycogène du foie",
          "paragraphText": "Le **foie** stocke le **glucose** sous forme de **glycogène**, une grosse molécule formée de nombreux glucoses.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q2",
            "type": "mcq",
            "prompt": "Sous quelle forme le foie stocke-t-il le glucose ?",
            "options": [
              "Sous forme de glycogène",
              "Sous forme de triglycérides",
              "Sous forme d’acides aminés",
              "Sous forme d’urée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Glycogène = réserve de glucose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Muscles",
          "stepTheme": "Glycogène",
          "stepTitle": "Le glycogène des muscles",
          "paragraphText": "Les **muscles** stockent aussi le glucose en **glycogène**, qu’ils utilisent pour leur propre effort.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q3",
            "type": "mcq",
            "prompt": "Quels organes stockent le glucose sous forme de glycogène ?",
            "options": [
              "Le foie et les muscles",
              "Le tissu adipeux seulement",
              "Les reins et la peau",
              "Le cerveau et le cœur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 1 : glycogène → foie et muscles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Triglycérides",
          "stepTheme": "Tissu adipeux",
          "stepTitle": "Les graisses du tissu adipeux",
          "paragraphText": "Le **tissu adipeux** stocke les **acides gras** et le **glycérol** sous forme de **triglycérides** (graisses).",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q4",
            "type": "mcq",
            "prompt": "Sous quelle forme le tissu adipeux met-il en réserve les acides gras et le glycérol ?",
            "options": [
              "Sous forme de triglycérides (graisses)",
              "Sous forme de glycogène",
              "Sous forme de protéines",
              "Sous forme de glucose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Triglycéride = 1 glycérol + 3 acides gras."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Glycogène",
          "stepTheme": "Activité",
          "stepTitle": "Pas de glycogène dans le tissu adipeux",
          "paragraphText": "« Le glucose est stocké sous forme de glycogène dans les **adipocytes** » : **faux**. Le glycogène est dans le **foie** et les **muscles** ; les adipocytes stockent des **graisses**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q5",
            "type": "mcq",
            "prompt": "« Le glucose est stocké sous forme de glycogène dans les adipocytes (cellules du tissu adipeux). » Vrai ou faux ?",
            "options": [
              "Faux : le glycogène est stocké dans le foie et les muscles ; les adipocytes stockent des graisses",
              "Vrai",
              "Faux : le glycogène est stocké dans le sang",
              "Vrai, mais seulement la nuit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque organe a sa forme de réserve."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Acides aminés",
          "stepTheme": "Erreur du document",
          "stepTitle": "Les acides aminés ne deviennent pas du glycogène",
          "paragraphText": "Le document dit que les **acides aminés** sont stockés « sous forme de **glycogène** » : c’est inexact. Le glycogène est fait de **glucose** ; les acides aminés servent surtout à fabriquer des **protéines**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q6",
            "type": "mcq",
            "prompt": "À quoi servent surtout les acides aminés apportés par la digestion ?",
            "options": [
              "À fabriquer les protéines des organes, comme celles du foie et des muscles",
              "À former directement du glycogène",
              "À former des triglycérides uniquement",
              "À rien : ils sont tous éliminés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Acides aminés → protéines ; glucose → glycogène."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Relier",
          "stepTheme": "Exercice 1",
          "stepTitle": "Relier réserves et organes",
          "paragraphText": "**Glycogène** → foie **et** muscles. **Triglycérides** → tissu adipeux.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q7",
            "type": "mcq",
            "prompt": "Relie : glycogène (1), triglycérides (2) ; muscles (a), foie (b), tissu adipeux (c). Quelle est la bonne association ?",
            "options": [
              "1-a-b ; 2-c",
              "1-c ; 2-a-b",
              "1-b ; 2-a-c",
              "1-a ; 2-b-c"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le glycogène est dans deux organes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q1",
          "type": "mcq",
          "prompt": "Une élève privée de déjeuner réussit de bonnes performances sportives l’après-midi. D’où vient l’énergie utilisée ?",
          "options": [
            "Des nutriments mis en réserve dans son organisme",
            "De l’eau qu’elle a bue",
            "De l’air seulement",
            "De rien : sans repas, aucun effort n’est possible"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’organisme stocke une partie des nutriments après chaque repas."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q2",
          "type": "mcq",
          "prompt": "Sous quelle forme le foie stocke-t-il le glucose ?",
          "options": [
            "Sous forme de glycogène",
            "Sous forme de triglycérides",
            "Sous forme d’acides aminés",
            "Sous forme d’urée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Glycogène = réserve de glucose."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q3",
          "type": "mcq",
          "prompt": "Quels organes stockent le glucose sous forme de glycogène ?",
          "options": [
            "Le foie et les muscles",
            "Le tissu adipeux seulement",
            "Les reins et la peau",
            "Le cerveau et le cœur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 1 : glycogène → foie et muscles."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q4",
          "type": "mcq",
          "prompt": "Sous quelle forme le tissu adipeux met-il en réserve les acides gras et le glycérol ?",
          "options": [
            "Sous forme de triglycérides (graisses)",
            "Sous forme de glycogène",
            "Sous forme de protéines",
            "Sous forme de glucose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Triglycéride = 1 glycérol + 3 acides gras."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q5",
          "type": "mcq",
          "prompt": "« Le glucose est stocké sous forme de glycogène dans les adipocytes (cellules du tissu adipeux). » Vrai ou faux ?",
          "options": [
            "Faux : le glycogène est stocké dans le foie et les muscles ; les adipocytes stockent des graisses",
            "Vrai",
            "Faux : le glycogène est stocké dans le sang",
            "Vrai, mais seulement la nuit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque organe a sa forme de réserve."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q6",
          "type": "mcq",
          "prompt": "À quoi servent surtout les acides aminés apportés par la digestion ?",
          "options": [
            "À fabriquer les protéines des organes, comme celles du foie et des muscles",
            "À former directement du glycogène",
            "À former des triglycérides uniquement",
            "À rien : ils sont tous éliminés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Acides aminés → protéines ; glucose → glycogène."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q7",
          "type": "mcq",
          "prompt": "Relie : glycogène (1), triglycérides (2) ; muscles (a), foie (b), tissu adipeux (c). Quelle est la bonne association ?",
          "options": [
            "1-a-b ; 2-c",
            "1-c ; 2-a-b",
            "1-b ; 2-a-c",
            "1-a ; 2-b-c"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le glycogène est dans deux organes."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02",
      "order": 2,
      "title": "Le pancréas règle la glycémie",
      "summary": "Ablation, greffe, extraits : le pancréas agit par des hormones.",
      "conceptExplanation": "- La glycémie est le taux de glucose dans le sang ; chez l’Homme, elle reste proche de 1 g/L.\n- Expérience 1 : l’ablation du pancréas d’un chien (pancréatectomie) fait augmenter la glycémie.\n- Expérience 2 : la greffe d’un morceau de pancréas n’importe où sous la peau d’un chien sans pancréas ramène la glycémie à la normale : le greffon n’a aucun nerf, le pancréas agit donc par le sang.\n- Expérience 3 : l’injection d’extraits de pancréas à un chien sans pancréas ramène aussi la glycémie à la normale : le pancréas agit par des substances chimiques.\n- Une hormone est une substance chimique produite par une glande, transportée par le sang, qui agit sur des cellules cibles (ou organes cibles) dont elle modifie le fonctionnement.\n- Le pancréas règle la glycémie grâce à deux hormones produites par les îlots de Langerhans : l’insuline (cellules β) et le glucagon (cellules α).\n- Note : dans l’exercice 2, un chien sans pancréas a aussi des troubles digestifs, dus à l’absence de suc pancréatique ; ils se corrigent en ajoutant des extraits de pancréas à la nourriture, pas par injection comme l’écrit le document.",
      "keyRule": "Sans pancréas : glycémie ↑. Greffe ou extraits : glycémie normale → le pancréas agit par des hormones (insuline, glucagon).",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter la greffe sous la peau",
        "statement": "Un morceau de pancréas greffé sous la peau d’un chien sans pancréas rétablit sa glycémie. Que montre cette expérience ?",
        "methodSteps": [
          "Le greffon n’est relié à aucun nerf.",
          "Il ne peut communiquer avec le reste du corps que par le sang."
        ],
        "conclusion": "Le pancréas règle la glycémie par des substances transportées par le sang : des hormones."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Glycémie",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce que la glycémie ?",
          "paragraphText": "La **glycémie** est le **taux de glucose dans le sang** ; chez l’Homme, elle reste proche de **1 g/L**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q1",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on la glycémie, et quelle est sa valeur normale chez l’Homme ?",
            "options": [
              "Le taux de glucose dans le sang, environ 1 g/L",
              "Le taux de graisses dans le sang, environ 10 g/L",
              "Le nombre de globules rouges, environ 1 g/L",
              "Le taux de glycogène dans le foie, environ 100 g/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Glyc- : sucre ; -émie : dans le sang."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expériences sur le pancréas d’un chien",
            "caption": "Le pancréas règle la glycémie par des substances déversées dans le sang : des hormones.",
            "tableData": {
              "headers": [
                "Expérience",
                "Résultat",
                "Conclusion"
              ],
              "rows": [
                [
                  "Ablation du pancréas",
                  "Glycémie qui augmente (diabète)",
                  "Le pancréas règle la glycémie"
                ],
                [
                  "Greffe d’un morceau de pancréas sous la peau",
                  "Glycémie normale",
                  "Il agit par le sang, pas par des nerfs"
                ],
                [
                  "Injection d’extraits de pancréas",
                  "Glycémie normale",
                  "Il agit par des hormones"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Ablation",
          "stepTheme": "Expérience 1",
          "stepTitle": "Sans pancréas",
          "paragraphText": "L’**ablation du pancréas** d’un chien fait **augmenter** sa glycémie : le pancréas intervient dans la régulation de la glycémie.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q2",
            "type": "mcq",
            "prompt": "On retire le pancréas d’un chien (pancréatectomie). Comment évolue sa glycémie ?",
            "options": [
              "Elle augmente",
              "Elle diminue jusqu’à zéro",
              "Elle ne change pas",
              "Elle devient négative"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans pancréas, le chien devient diabétique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Greffe",
          "stepTheme": "Expérience 2",
          "stepTitle": "Une greffe sous la peau",
          "paragraphText": "Un morceau de pancréas greffé **sous la peau**, sans nerf, **rétablit** la glycémie : le pancréas agit **par le sang**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q3",
            "type": "mcq",
            "prompt": "Un morceau de pancréas greffé n’importe où sous la peau d’un chien sans pancréas ramène sa glycémie à la normale. Que conclure ?",
            "options": [
              "Le pancréas agit par des substances transportées par le sang",
              "Le pancréas agit par des nerfs",
              "La peau fabrique du glucose",
              "La greffe n’a aucun effet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans nerf, seule la voie sanguine reste possible."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Hormone",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’une hormone ?",
          "paragraphText": "Une **hormone** est une substance chimique produite par une **glande**, transportée par le **sang**, qui agit sur des **cellules cibles**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q4",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’une hormone ?",
            "options": [
              "Une substance produite par une glande, transportée par le sang, qui agit sur des cellules cibles",
              "Un nerf qui relie deux organes",
              "Un nutriment stocké dans le foie",
              "Une cellule du sang"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’insuline et le glucagon sont des hormones."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Îlots de Langerhans",
          "stepTheme": "Hormones",
          "stepTitle": "Deux hormones du pancréas",
          "paragraphText": "Les **îlots de Langerhans** du pancréas produisent l’**insuline** (cellules **β**) et le **glucagon** (cellules **α**).",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q5",
            "type": "mcq",
            "prompt": "Quelles cellules du pancréas produisent l’insuline ?",
            "options": [
              "Les cellules β des îlots de Langerhans",
              "Les cellules α des îlots de Langerhans",
              "Les cellules du foie",
              "Les globules rouges"
            ],
            "correctAnswerIndex": 0,
            "explanation": "β → insuline ; α → glucagon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Activité",
          "stepTitle": "Les cellules α",
          "paragraphText": "« Les cellules **α** du pancréas produisent l’insuline » : **faux**. Elles produisent le **glucagon** ; l’insuline vient des cellules **β**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q6",
            "type": "mcq",
            "prompt": "« Les cellules alpha (α) du pancréas produisent l’insuline. » Vrai ou faux ?",
            "options": [
              "Faux : elles produisent le glucagon ; l’insuline vient des cellules β",
              "Vrai",
              "Faux : elles produisent la bile",
              "Vrai, et aussi le glucagon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Retenir : α → glucagon, β → insuline."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q1",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on la glycémie, et quelle est sa valeur normale chez l’Homme ?",
          "options": [
            "Le taux de glucose dans le sang, environ 1 g/L",
            "Le taux de graisses dans le sang, environ 10 g/L",
            "Le nombre de globules rouges, environ 1 g/L",
            "Le taux de glycogène dans le foie, environ 100 g/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Glyc- : sucre ; -émie : dans le sang."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q2",
          "type": "mcq",
          "prompt": "On retire le pancréas d’un chien (pancréatectomie). Comment évolue sa glycémie ?",
          "options": [
            "Elle augmente",
            "Elle diminue jusqu’à zéro",
            "Elle ne change pas",
            "Elle devient négative"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans pancréas, le chien devient diabétique."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q3",
          "type": "mcq",
          "prompt": "Un morceau de pancréas greffé n’importe où sous la peau d’un chien sans pancréas ramène sa glycémie à la normale. Que conclure ?",
          "options": [
            "Le pancréas agit par des substances transportées par le sang",
            "Le pancréas agit par des nerfs",
            "La peau fabrique du glucose",
            "La greffe n’a aucun effet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans nerf, seule la voie sanguine reste possible."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q4",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’une hormone ?",
          "options": [
            "Une substance produite par une glande, transportée par le sang, qui agit sur des cellules cibles",
            "Un nerf qui relie deux organes",
            "Un nutriment stocké dans le foie",
            "Une cellule du sang"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’insuline et le glucagon sont des hormones."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q5",
          "type": "mcq",
          "prompt": "Quelles cellules du pancréas produisent l’insuline ?",
          "options": [
            "Les cellules β des îlots de Langerhans",
            "Les cellules α des îlots de Langerhans",
            "Les cellules du foie",
            "Les globules rouges"
          ],
          "correctAnswerIndex": 0,
          "explanation": "β → insuline ; α → glucagon."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q6",
          "type": "mcq",
          "prompt": "« Les cellules alpha (α) du pancréas produisent l’insuline. » Vrai ou faux ?",
          "options": [
            "Faux : elles produisent le glucagon ; l’insuline vient des cellules β",
            "Vrai",
            "Faux : elles produisent la bile",
            "Vrai, et aussi le glucagon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Retenir : α → glucagon, β → insuline."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03",
      "order": 3,
      "title": "Insuline et glucagon : la régulation de la glycémie",
      "summary": "Insuline hypoglycémiante, glucagon hyperglycémiant, diabète.",
      "conceptExplanation": "- Quand la glycémie dépasse 1 g/L (hyperglycémie, après un repas), les cellules β produisent l’insuline. Elle fait stocker le glucose : en glycogène dans le foie et les muscles, en graisses dans le tissu adipeux. La glycémie redescend : l’insuline est hypoglycémiante.\n- Quand la glycémie descend sous 1 g/L (hypoglycémie, jeûne, effort), les cellules α produisent le glucagon. Il fait libérer par le foie du glucose tiré de son glycogène. La glycémie remonte : le glucagon est hyperglycémiant.\n- Le pancréas est à la fois le détecteur (il mesure la glycémie) et l’émetteur des hormones ; le retour à la normale arrête la sécrétion.\n- En l’absence d’insuline, le glucose ne peut plus être stocké et la glycémie reste trop élevée : c’est le diabète.\n- Correction du document : il écrit que le glucagon fait libérer du glucose « par le foie, les muscles et les tissus adipeux ». En réalité, seul le foie rend du glucose au sang : le glycogène des muscles sert aux muscles eux-mêmes, et le tissu adipeux libère des acides gras, pas du glucose.",
      "keyRule": "Glycémie ↑ → insuline (cellules β) → stockage → glycémie ↓. Glycémie ↓ → glucagon (cellules α) → le foie libère du glucose → glycémie ↑.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le retour à la normale après un repas",
        "statement": "Après un repas, la glycémie monte à 1,5 g/L puis redescend à 1 g/L. Expliquez.",
        "methodSteps": [
          "L’hyperglycémie est détectée par les cellules β, qui sécrètent l’insuline.",
          "L’insuline fait stocker le glucose (glycogène, graisses) : la glycémie redescend."
        ],
        "conclusion": "L’insuline, hormone hypoglycémiante, ramène la glycémie à 1 g/L."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepBadge": "Insuline",
          "stepTheme": "Hypoglycémiante",
          "stepTitle": "L’insuline fait baisser la glycémie",
          "paragraphText": "Quand la glycémie est **trop haute**, l’**insuline** fait **stocker** le glucose (glycogène, graisses) : la glycémie **baisse**. L’insuline est **hypoglycémiante**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q1",
            "type": "mcq",
            "prompt": "Après un repas, la glycémie dépasse 1 g/L. Quelle hormone la fait redescendre, et comment ?",
            "options": [
              "L’insuline, en faisant stocker le glucose dans le foie, les muscles et le tissu adipeux",
              "Le glucagon, en faisant libérer du glucose",
              "L’insuline, en faisant libérer du glucose",
              "Le glucagon, en faisant stocker le glucose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Insuline = stockage = glycémie qui baisse."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La régulation de la glycémie",
            "caption": "Le pancréas détecte l’écart à 1 g/L et envoie l’hormone qui ramène la glycémie à la normale.",
            "svgContent": "<svg viewBox=\"0 0 560 310\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Glycémie élevée : cellules bêta, insuline, stockage ; glycémie basse : cellules alpha, glucagon, libération par le foie\"><rect x=\"185\" y=\"10\" width=\"190\" height=\"50\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"280\" y=\"31.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Glycémie normale</text><text x=\"280\" y=\"46.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">environ 1 g/L</text><line x1=\"225\" y1=\"62\" x2=\"128.6\" y2=\"93.2\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"120,96 130.1,98.0 127.0,88.5\" fill=\"#EF4444\"/><text x=\"150\" y=\"76\" font-size=\"10.5\" text-anchor=\"end\" font-weight=\"800\" fill=\"#EF4444\">glycémie trop haute</text><line x1=\"335\" y1=\"62\" x2=\"431.4\" y2=\"93.2\" stroke=\"#3B82F6\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"440,96 433.0,88.5 429.9,98.0\" fill=\"#3B82F6\"/><text x=\"410\" y=\"76\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#3B82F6\">glycémie trop basse</text><rect x=\"20\" y=\"100\" width=\"200\" height=\"50\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"120\" y=\"121.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Pancréas : cellules β</text><text x=\"120\" y=\"136.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">îlots de Langerhans</text><rect x=\"340\" y=\"100\" width=\"200\" height=\"50\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"440\" y=\"121.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Pancréas : cellules α</text><text x=\"440\" y=\"136.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">îlots de Langerhans</text><line x1=\"120\" y1=\"152\" x2=\"120.0\" y2=\"177.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"120,186 125.0,177.0 115.0,177.0\" fill=\"#94A3B8\"/><text x=\"130\" y=\"174\" font-size=\"11.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#8B5CF6\">insuline</text><line x1=\"440\" y1=\"152\" x2=\"440.0\" y2=\"177.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"440,186 445.0,177.0 435.0,177.0\" fill=\"#94A3B8\"/><text x=\"450\" y=\"174\" font-size=\"11.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#8B5CF6\">glucagon</text><rect x=\"20\" y=\"190\" width=\"200\" height=\"62\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"120\" y=\"210\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Foie, muscles, tissu adipeux</text><text x=\"120\" y=\"225\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">stockent le glucose</text><text x=\"120\" y=\"240\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">glycémie ↓</text><rect x=\"340\" y=\"190\" width=\"200\" height=\"62\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"440\" y=\"210\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Foie</text><text x=\"440\" y=\"225\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">libère du glucose</text><text x=\"440\" y=\"240\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">glycémie ↑</text><path d=\"M120 254 L120 286 L270 286 L270 64\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><path d=\"M440 254 L440 286 L290 286 L290 64\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><line x1=\"270\" y1=\"80\" x2=\"270.0\" y2=\"71.0\" stroke=\"#10B981\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"270,62 265.0,71.0 275.0,71.0\" fill=\"#10B981\"/><line x1=\"290\" y1=\"80\" x2=\"290.0\" y2=\"71.0\" stroke=\"#10B981\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"290,62 285.0,71.0 295.0,71.0\" fill=\"#10B981\"/><text x=\"280\" y=\"304\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">retour à la normale</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Glucagon",
          "stepTheme": "Hyperglycémiant",
          "stepTitle": "Le glucagon fait monter la glycémie",
          "paragraphText": "Quand la glycémie est **trop basse**, le **glucagon** fait **libérer** par le **foie** du glucose tiré de son glycogène : la glycémie **remonte**. Le glucagon est **hyperglycémiant**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q2",
            "type": "mcq",
            "prompt": "Pendant un jeûne, la glycémie descend sous 1 g/L. Quelle hormone la fait remonter ?",
            "options": [
              "Le glucagon, qui fait libérer du glucose par le foie",
              "L’insuline, qui fait stocker le glucose",
              "L’adrénaline seulement",
              "Aucune hormone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Glucagon = libération de glucose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Activité",
          "stepTitle": "Hyperglycémiant ou hypoglycémiant ?",
          "paragraphText": "Le pancréas est **hyperglycémiant** grâce au **glucagon** et **hypoglycémiant** grâce à l’**insuline**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations est exacte ?",
            "options": [
              "Le pancréas est hypoglycémiant grâce à l’insuline",
              "Le pancréas est hyperglycémiant grâce à l’insuline",
              "Le pancréas est hypoglycémiant grâce au glucagon",
              "Le pancréas n’agit pas sur la glycémie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Hypo- : qui fait baisser ; hyper- : qui fait monter."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Le foie",
          "stepTheme": "Erreur du document",
          "stepTitle": "Qui libère du glucose dans le sang ?",
          "paragraphText": "Le document dit que le glucagon fait libérer du glucose par « le foie, les muscles et les tissus adipeux ». En fait, seul le **foie** rend du glucose au sang : le glycogène des **muscles** reste pour les muscles.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q4",
            "type": "mcq",
            "prompt": "Sous l’action du glucagon, quel organe libère du glucose dans le sang ?",
            "options": [
              "Le foie",
              "Les muscles",
              "Le tissu adipeux",
              "Le pancréas lui-même"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le foie est le seul « distributeur » de glucose pour le sang."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Diabète",
          "stepTheme": "Maladie",
          "stepTitle": "Le diabète",
          "paragraphText": "Sans **insuline**, le glucose ne peut plus être stocké : la glycémie reste **trop élevée**. C’est le **diabète**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi une personne qui ne produit plus d’insuline a-t-elle une glycémie trop élevée ?",
            "options": [
              "Sans insuline, le glucose ne peut plus être stocké et s’accumule dans le sang",
              "Elle produit trop de glucagon seulement",
              "Elle mange trop de graisses",
              "Ses muscles fabriquent du glucose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est ce qui arrive au chien sans pancréas."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Régulation",
          "stepTheme": "Schéma",
          "stepTitle": "Une régulation par retour",
          "paragraphText": "Le pancréas **détecte** l’écart à 1 g/L et envoie l’hormone qui **corrige** cet écart ; le **retour à la normale** arrête la sécrétion.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q6",
            "type": "mcq",
            "prompt": "Pourquoi la glycémie reste-t-elle proche de 1 g/L chez une personne en bonne santé ?",
            "options": [
              "Le pancréas détecte chaque écart et sécrète l’hormone qui le corrige",
              "Le glucose ne varie jamais dans le sang",
              "Le foie ne fait que stocker du glucose",
              "Les muscles ne consomment jamais de glucose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est une régulation : écart détecté, écart corrigé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q1",
          "type": "mcq",
          "prompt": "Après un repas, la glycémie dépasse 1 g/L. Quelle hormone la fait redescendre, et comment ?",
          "options": [
            "L’insuline, en faisant stocker le glucose dans le foie, les muscles et le tissu adipeux",
            "Le glucagon, en faisant libérer du glucose",
            "L’insuline, en faisant libérer du glucose",
            "Le glucagon, en faisant stocker le glucose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Insuline = stockage = glycémie qui baisse."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q2",
          "type": "mcq",
          "prompt": "Pendant un jeûne, la glycémie descend sous 1 g/L. Quelle hormone la fait remonter ?",
          "options": [
            "Le glucagon, qui fait libérer du glucose par le foie",
            "L’insuline, qui fait stocker le glucose",
            "L’adrénaline seulement",
            "Aucune hormone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Glucagon = libération de glucose."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations est exacte ?",
          "options": [
            "Le pancréas est hypoglycémiant grâce à l’insuline",
            "Le pancréas est hyperglycémiant grâce à l’insuline",
            "Le pancréas est hypoglycémiant grâce au glucagon",
            "Le pancréas n’agit pas sur la glycémie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Hypo- : qui fait baisser ; hyper- : qui fait monter."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q4",
          "type": "mcq",
          "prompt": "Sous l’action du glucagon, quel organe libère du glucose dans le sang ?",
          "options": [
            "Le foie",
            "Les muscles",
            "Le tissu adipeux",
            "Le pancréas lui-même"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le foie est le seul « distributeur » de glucose pour le sang."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi une personne qui ne produit plus d’insuline a-t-elle une glycémie trop élevée ?",
          "options": [
            "Sans insuline, le glucose ne peut plus être stocké et s’accumule dans le sang",
            "Elle produit trop de glucagon seulement",
            "Elle mange trop de graisses",
            "Ses muscles fabriquent du glucose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est ce qui arrive au chien sans pancréas."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q6",
          "type": "mcq",
          "prompt": "Pourquoi la glycémie reste-t-elle proche de 1 g/L chez une personne en bonne santé ?",
          "options": [
            "Le pancréas détecte chaque écart et sécrète l’hormone qui le corrige",
            "Le glucose ne varie jamais dans le sang",
            "Le foie ne fait que stocker du glucose",
            "Les muscles ne consomment jamais de glucose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est une régulation : écart détecté, écart corrigé."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04",
      "order": 4,
      "title": "Évaluation : la glycémie après 50 g de glucose",
      "summary": "Lire le tableau d’une hyperglycémie provoquée et en déduire le rôle du pancréas.",
      "conceptExplanation": "Situation : un homme en bonne santé, à jeun, avale 50 g de glucose ; on mesure sa glycémie toutes les 30 minutes.\n- Résultats (g/L) : 0 min : 0,95 ; 30 min : 1,55 ; 60 min : 1,35 ; 90 min : 0,95 ; 120 min : 0,80 ; 150 min : 0,85 ; 180 min : 0,90 ; 210 min : 0,90.\n- Lieux de stockage : le foie et les muscles (glycogène), le tissu adipeux (triglycérides).\n- Analyse : la glycémie monte de 0,95 à 1,55 g/L en 30 minutes (absorption du glucose), redescend à 0,95 g/L à 90 minutes, passe un peu sous la normale (0,80 g/L à 120 minutes), puis remonte et se stabilise vers 0,90 g/L.\n- Interprétation : l’hyperglycémie déclenche la sécrétion d’insuline, qui fait stocker le glucose ; la glycémie redescend. La légère hypoglycémie de 120 minutes déclenche la sécrétion de glucagon, qui fait libérer du glucose par le foie ; la glycémie remonte.\n- Déduction : le pancréas est hypoglycémiant (insuline) quand la glycémie est trop haute et hyperglycémiant (glucagon) quand elle est trop basse.\n- Le document ne donne pas le corrigé de cette évaluation : ce qui précède est la réponse attendue.",
      "keyRule": "Montée après le glucose → insuline → descente ; légère hypoglycémie → glucagon → remontée et stabilisation.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser la montée et la descente",
        "statement": "La glycémie passe de 0,95 g/L à 1,55 g/L en 30 minutes, puis revient à 0,95 g/L à 90 minutes. Expliquez.",
        "methodSteps": [
          "Le glucose avalé est absorbé : la glycémie monte.",
          "Le pancréas sécrète de l’insuline, qui fait stocker le glucose : la glycémie redescend."
        ],
        "conclusion": "Le retour à la normale en 90 minutes montre l’action hypoglycémiante de l’insuline."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Lire",
          "stepTheme": "Tableau",
          "stepTitle": "La valeur la plus haute",
          "paragraphText": "La glycémie passe de **0,95 g/L** (avant) à **1,55 g/L** à **30 minutes** : c’est son maximum, dû à l’absorption du glucose.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q1",
            "type": "mcq",
            "prompt": "Un homme à jeun avale 50 g de glucose. Sa glycémie (g/L) vaut : 0 min : 0,95 ; 30 min : 1,55 ; 60 min : 1,35 ; 90 min : 0,95 ; 120 min : 0,80 ; 150 min : 0,85 ; 180 min : 0,90 ; 210 min : 0,90. Quand la glycémie est-elle la plus élevée ?",
            "options": [
              "À 30 minutes, avec 1,55 g/L",
              "À 0 minute, avec 0,95 g/L",
              "À 120 minutes, avec 0,80 g/L",
              "À 210 minutes, avec 0,90 g/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le glucose avalé passe rapidement dans le sang."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Glycémie après avoir avalé 50 g de glucose",
            "caption": "Un homme sain, à jeun, avale 50 g de glucose ; on mesure sa glycémie toutes les 30 minutes.",
            "svgContent": "<svg viewBox=\"0 0 560 280\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Glycémie : 0,95 puis 1,55 à 30 min, 0,95 à 90 min, 0,80 à 120 min, 0,90 à 210 min\"><line x1=\"60\" y1=\"180\" x2=\"530\" y2=\"180\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"180\" x2=\"60\" y2=\"36\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"120\" x2=\"530\" y2=\"120\" stroke=\"#10B981\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 5\"/><text x=\"530\" y=\"114\" font-size=\"10.5\" text-anchor=\"end\" font-weight=\"800\" fill=\"#10B981\">1 g/L</text><text x=\"54\" y=\"172\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">0,6</text><text x=\"54\" y=\"148\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">0,8</text><text x=\"54\" y=\"124\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">1</text><text x=\"54\" y=\"100\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">1,2</text><text x=\"54\" y=\"76\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">1,4</text><text x=\"54\" y=\"52\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">1,6</text><polyline points=\"60.0,126.0 127.1,54.0 194.3,78.0 261.4,126.0 328.6,144.0 395.7,138.0 462.9,132.0 530.0,132.0\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"60.0\" cy=\"126.0\" r=\"3.5\" fill=\"#EF4444\"/><circle cx=\"127.1\" cy=\"54.0\" r=\"3.5\" fill=\"#EF4444\"/><circle cx=\"194.3\" cy=\"78.0\" r=\"3.5\" fill=\"#EF4444\"/><circle cx=\"261.4\" cy=\"126.0\" r=\"3.5\" fill=\"#EF4444\"/><circle cx=\"328.6\" cy=\"144.0\" r=\"3.5\" fill=\"#EF4444\"/><circle cx=\"395.7\" cy=\"138.0\" r=\"3.5\" fill=\"#EF4444\"/><circle cx=\"462.9\" cy=\"132.0\" r=\"3.5\" fill=\"#EF4444\"/><circle cx=\"530.0\" cy=\"132.0\" r=\"3.5\" fill=\"#EF4444\"/><text x=\"60\" y=\"196\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">0</text><text x=\"127.14285714285714\" y=\"196\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">30</text><text x=\"194.28571428571428\" y=\"196\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">60</text><text x=\"261.42857142857144\" y=\"196\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">90</text><text x=\"328.57142857142856\" y=\"196\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">120</text><text x=\"395.7142857142857\" y=\"196\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">150</text><text x=\"462.8571428571429\" y=\"196\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">180</text><text x=\"530\" y=\"196\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">210</text><text x=\"295\" y=\"212\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">temps (minutes)</text><text x=\"56\" y=\"18\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">glycémie (g/L)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Insuline",
          "stepTheme": "Interpréter",
          "stepTitle": "Pourquoi la glycémie redescend",
          "paragraphText": "De 30 à 90 minutes, la glycémie redescend de 1,55 à 0,95 g/L : l’**insuline** sécrétée par le pancréas fait **stocker** le glucose.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q2",
            "type": "mcq",
            "prompt": "Après avoir avalé 50 g de glucose, un homme a une glycémie de 1,55 g/L à 30 minutes, qui redescend à 0,95 g/L à 90 minutes. Quelle hormone explique cette descente ?",
            "options": [
              "L’insuline, qui fait stocker le glucose",
              "Le glucagon, qui fait libérer du glucose",
              "Aucune : le glucose disparaît seul",
              "La progestérone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Hyperglycémie → insuline."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Glucagon",
          "stepTheme": "Interpréter",
          "stepTitle": "La légère remontée",
          "paragraphText": "À 120 minutes, la glycémie descend à **0,80 g/L**, un peu sous la normale ; elle remonte ensuite vers **0,90 g/L** grâce au **glucagon**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q3",
            "type": "mcq",
            "prompt": "Après une hyperglycémie, la glycémie d’un homme descend à 0,80 g/L à 120 minutes, puis remonte à 0,90 g/L. Quelle hormone explique cette remontée ?",
            "options": [
              "Le glucagon, qui fait libérer du glucose par le foie",
              "L’insuline, qui fait stocker le glucose",
              "La FSH",
              "Aucune hormone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Hypoglycémie → glucagon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Déduire",
          "stepTheme": "Question 3",
          "stepTitle": "Le comportement du pancréas",
          "paragraphText": "Le pancréas est **hypoglycémiant** (insuline) quand la glycémie est trop haute et **hyperglycémiant** (glucagon) quand elle est trop basse.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q4",
            "type": "mcq",
            "prompt": "Que déduire du comportement du pancréas vis-à-vis de la glycémie ?",
            "options": [
              "Il sécrète l’insuline quand la glycémie est trop haute et le glucagon quand elle est trop basse",
              "Il ne sécrète que de l’insuline, en permanence",
              "Il ne réagit pas aux variations de la glycémie",
              "Il sécrète le glucagon quand la glycémie est trop haute"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il corrige l’écart dans les deux sens."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Stockage",
          "stepTheme": "Question 1",
          "stepTitle": "Où va le glucose avalé ?",
          "paragraphText": "Le glucose en excès est stocké en **glycogène** dans le **foie** et les **muscles**, et en **graisses** dans le **tissu adipeux**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q5",
            "type": "mcq",
            "prompt": "Après un repas riche en glucose, où l’organisme met-il en réserve l’excès de glucose ?",
            "options": [
              "Dans le foie et les muscles (glycogène) et dans le tissu adipeux (graisses)",
              "Dans les poumons",
              "Dans les os uniquement",
              "Nulle part : il est éliminé par les urines chez une personne saine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chez une personne saine, le glucose n’apparaît pas dans les urines."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q1",
          "type": "mcq",
          "prompt": "Un homme à jeun avale 50 g de glucose. Sa glycémie (g/L) vaut : 0 min : 0,95 ; 30 min : 1,55 ; 60 min : 1,35 ; 90 min : 0,95 ; 120 min : 0,80 ; 150 min : 0,85 ; 180 min : 0,90 ; 210 min : 0,90. Quand la glycémie est-elle la plus élevée ?",
          "options": [
            "À 30 minutes, avec 1,55 g/L",
            "À 0 minute, avec 0,95 g/L",
            "À 120 minutes, avec 0,80 g/L",
            "À 210 minutes, avec 0,90 g/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le glucose avalé passe rapidement dans le sang."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q2",
          "type": "mcq",
          "prompt": "Après avoir avalé 50 g de glucose, un homme a une glycémie de 1,55 g/L à 30 minutes, qui redescend à 0,95 g/L à 90 minutes. Quelle hormone explique cette descente ?",
          "options": [
            "L’insuline, qui fait stocker le glucose",
            "Le glucagon, qui fait libérer du glucose",
            "Aucune : le glucose disparaît seul",
            "La progestérone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Hyperglycémie → insuline."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q3",
          "type": "mcq",
          "prompt": "Après une hyperglycémie, la glycémie d’un homme descend à 0,80 g/L à 120 minutes, puis remonte à 0,90 g/L. Quelle hormone explique cette remontée ?",
          "options": [
            "Le glucagon, qui fait libérer du glucose par le foie",
            "L’insuline, qui fait stocker le glucose",
            "La FSH",
            "Aucune hormone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Hypoglycémie → glucagon."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q4",
          "type": "mcq",
          "prompt": "Que déduire du comportement du pancréas vis-à-vis de la glycémie ?",
          "options": [
            "Il sécrète l’insuline quand la glycémie est trop haute et le glucagon quand elle est trop basse",
            "Il ne sécrète que de l’insuline, en permanence",
            "Il ne réagit pas aux variations de la glycémie",
            "Il sécrète le glucagon quand la glycémie est trop haute"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il corrige l’écart dans les deux sens."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q5",
          "type": "mcq",
          "prompt": "Après un repas riche en glucose, où l’organisme met-il en réserve l’excès de glucose ?",
          "options": [
            "Dans le foie et les muscles (glycogène) et dans le tissu adipeux (graisses)",
            "Dans les poumons",
            "Dans les os uniquement",
            "Nulle part : il est éliminé par les urines chez une personne saine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chez une personne saine, le glucose n’apparaît pas dans les urines."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05",
      "order": 5,
      "title": "Exercice : la greffe de pancréas et la substance S",
      "summary": "Analyser deux courbes de glycémie et identifier l’insuline.",
      "conceptExplanation": "- Expérience 1 : un chien privé de pancréas présente des troubles digestifs et un diabète sucré persistant.\n- Expérience 2 (figure 2) : on lui greffe temporairement un pancréas au cou. Avant la greffe, sa glycémie est très élevée (environ 3,8 g/L). Après la greffe, elle descend en quelques heures jusqu’à environ 1 g/L et y reste. Après la suppression du greffon (vers 10 h), elle remonte.\n- Interprétation : sans pancréas, il n’y a pas d’insuline, la glycémie reste élevée ; le greffon libère de l’insuline dans le sang, la glycémie baisse ; sans greffon, plus d’insuline, la glycémie remonte.\n- Expérience 3 (figure 3) : on injecte sous la peau d’un chien normal 0,5 mg d’une substance S extraite du pancréas. La glycémie, d’environ 0,9 g/L, baisse jusqu’à 0,6 g/L, puis revient vers 1 g/L (la substance est détruite et le glucagon corrige la baisse).\n- La substance S est hypoglycémiante : c’est l’insuline.\n- Corrections du document : la consigne parle des « figures 3 et 4 » alors que les courbes sont les figures 2 et 3 ; le corrigé écrit « après la greffe, la baisse du taux d’insuline » au lieu de « la baisse de la glycémie ».",
      "keyRule": "Greffon de pancréas → glycémie qui baisse ; retrait → glycémie qui remonte. Une substance du pancréas qui fait baisser la glycémie = insuline.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier la substance S",
        "statement": "Injectée à un chien normal, une substance S extraite du pancréas fait baisser sa glycémie de 0,9 à 0,6 g/L. Qu’est-ce que S ?",
        "methodSteps": [
          "S vient du pancréas et fait baisser la glycémie.",
          "La seule hormone hypoglycémiante du pancréas est l’insuline."
        ],
        "conclusion": "La substance S est l’insuline."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Avant la greffe",
          "stepTheme": "Figure 2",
          "stepTitle": "Un chien sans pancréas",
          "paragraphText": "Avant la greffe, la glycémie du chien sans pancréas est **très élevée**, environ **3,8 g/L**, car il n’a **plus d’insuline**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q1",
            "type": "mcq",
            "prompt": "Un chien privé de pancréas a une glycémie d’environ 3,8 g/L. Pourquoi est-elle si élevée ?",
            "options": [
              "Il n’a plus d’insuline pour faire stocker le glucose",
              "Il a trop d’insuline",
              "Il mange trop",
              "Son foie ne libère plus de glucose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est un diabète sucré."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Chien sans pancréas, puis greffe de pancréas au cou",
            "caption": "Figure 2 du document : glycémie avant la greffe, pendant la greffe, puis après la suppression du greffon.",
            "svgContent": "<svg viewBox=\"0 0 560 270\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Glycémie de 3,8 g/L, chute à 1 g/L après la greffe, remontée après suppression du greffon\"><line x1=\"60\" y1=\"230\" x2=\"530\" y2=\"230\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"28.399999999999977\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"54\" y=\"186\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">1</text><text x=\"54\" y=\"138\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">2</text><text x=\"54\" y=\"90\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">3</text><text x=\"54\" y=\"42\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">4</text><polyline points=\"60.0,47.6 93.6,52.4 127.1,42.8 160.7,76.4 194.3,119.6 227.9,143.6 261.4,177.2 295.0,174.8 328.6,182.0 362.1,184.4 395.7,182.0 429.3,182.0 462.9,167.6 496.4,148.4 530.0,105.2\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"127.14285714285714\" y1=\"230\" x2=\"127.14285714285714\" y2=\"28.399999999999977\" stroke=\"#3B82F6\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 5\"/><text x=\"127.14285714285714\" y=\"246\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">greffe</text><line x1=\"395.71428571428567\" y1=\"230\" x2=\"395.71428571428567\" y2=\"28.399999999999977\" stroke=\"#F59E0B\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 5\"/><text x=\"395.71428571428567\" y=\"246\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">suppression</text><text x=\"395.71428571428567\" y=\"259\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">du greffon</text><text x=\"530\" y=\"246\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">14 h</text><text x=\"56\" y=\"14\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">glycémie (g/L)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Greffe",
          "stepTheme": "Figure 2",
          "stepTitle": "Pendant la greffe",
          "paragraphText": "Après la **greffe** de pancréas au cou, la glycémie **descend** jusqu’à environ **1 g/L** : le greffon libère de l’**insuline** dans le sang.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q2",
            "type": "mcq",
            "prompt": "On greffe un pancréas au cou d’un chien sans pancréas ; sa glycémie descend de 3,8 g/L à environ 1 g/L en quelques heures. Pourquoi ?",
            "options": [
              "Le greffon libère de l’insuline dans le sang",
              "Le greffon libère du glucagon",
              "Le chien a cessé de manger",
              "Le cou fabrique du glycogène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’insuline du greffon fait stocker le glucose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Correction",
          "stepTheme": "Erreur du document",
          "stepTitle": "Ce qui baisse après la greffe",
          "paragraphText": "Le corrigé écrit « après la greffe, la baisse du **taux d’insuline** » : c’est la **glycémie** qui baisse, grâce à l’insuline **libérée** par le greffon.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q3",
            "type": "mcq",
            "prompt": "Après la greffe de pancréas, qu’est-ce qui baisse chez le chien ?",
            "options": [
              "Sa glycémie, grâce à l’insuline libérée par le greffon",
              "Son taux d’insuline",
              "Sa température seulement",
              "Son taux de glycogène dans le foie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le taux d’insuline, lui, augmente grâce au greffon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Suppression",
          "stepTheme": "Figure 2",
          "stepTitle": "Après la suppression du greffon",
          "paragraphText": "Quand on **retire le greffon**, la glycémie **remonte** : il n’y a plus d’insuline dans le sang du chien.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q4",
            "type": "mcq",
            "prompt": "On retire le pancréas greffé au cou d’un chien diabétique. Comment évolue sa glycémie ?",
            "options": [
              "Elle remonte, car il n’y a plus d’insuline",
              "Elle descend encore",
              "Elle reste à 1 g/L pour toujours",
              "Elle devient nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’effet de la greffe disparaît avec le greffon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Substance S",
          "stepTheme": "Figure 3",
          "stepTitle": "L’effet de la substance S",
          "paragraphText": "Chez un chien normal, l’injection de **S** fait baisser la glycémie de **0,9** à **0,6 g/L**, puis elle revient vers **1 g/L**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q5",
            "type": "mcq",
            "prompt": "On injecte à un chien normal une substance S extraite du pancréas : sa glycémie passe de 0,9 g/L à 0,6 g/L, puis revient vers 1 g/L. Quel est l’effet de S ?",
            "options": [
              "S est hypoglycémiante : elle fait baisser la glycémie",
              "S est hyperglycémiante",
              "S n’a aucun effet",
              "S fait monter la glycémie à 3,8 g/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La baisse suit l’injection."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Injection de la substance S à un chien normal",
            "caption": "Figure 3 du document : la glycémie baisse jusqu’à 0,6 g/L puis revient vers 1 g/L.",
            "svgContent": "<svg viewBox=\"0 0 560 260\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Glycémie 0,9 puis 0,6 g/L après injection, puis retour vers 1 g/L\"><line x1=\"60\" y1=\"166\" x2=\"530\" y2=\"166\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"166\" x2=\"60\" y2=\"46\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"54\" y=\"138\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">0,6</text><text x=\"54\" y=\"106\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">0,8</text><text x=\"54\" y=\"74\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">1</text><polyline points=\"60.0,82.8 99.2,82.8 138.3,110.0 177.5,126.0 216.7,134.0 255.8,130.8 295.0,124.4 334.2,118.0 373.3,110.0 412.5,94.0 451.7,82.8 490.8,78.0 530.0,81.2\" fill=\"none\" stroke=\"#8B5CF6\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"99.16666666666666\" y1=\"166\" x2=\"99.16666666666666\" y2=\"46\" stroke=\"#EF4444\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 5\"/><text x=\"99.16666666666666\" y=\"182\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">injection de S</text><text x=\"530\" y=\"182\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">12 h</text><text x=\"56\" y=\"16\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">glycémie (g/L)</text></svg>"
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Insuline",
          "stepTheme": "Question 3",
          "stepTitle": "Le nom de la substance S",
          "paragraphText": "Une substance du pancréas qui fait **baisser** la glycémie est l’**insuline**.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q6",
            "type": "mcq",
            "prompt": "Une substance S extraite du pancréas fait baisser la glycémie d’un chien normal. Quelle est cette substance ?",
            "options": [
              "L’insuline",
              "Le glucagon",
              "Le glycogène",
              "La bile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Insuline = hormone hypoglycémiante."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q1",
          "type": "mcq",
          "prompt": "Un chien privé de pancréas a une glycémie d’environ 3,8 g/L. Pourquoi est-elle si élevée ?",
          "options": [
            "Il n’a plus d’insuline pour faire stocker le glucose",
            "Il a trop d’insuline",
            "Il mange trop",
            "Son foie ne libère plus de glucose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est un diabète sucré."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q2",
          "type": "mcq",
          "prompt": "On greffe un pancréas au cou d’un chien sans pancréas ; sa glycémie descend de 3,8 g/L à environ 1 g/L en quelques heures. Pourquoi ?",
          "options": [
            "Le greffon libère de l’insuline dans le sang",
            "Le greffon libère du glucagon",
            "Le chien a cessé de manger",
            "Le cou fabrique du glycogène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’insuline du greffon fait stocker le glucose."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q3",
          "type": "mcq",
          "prompt": "Après la greffe de pancréas, qu’est-ce qui baisse chez le chien ?",
          "options": [
            "Sa glycémie, grâce à l’insuline libérée par le greffon",
            "Son taux d’insuline",
            "Sa température seulement",
            "Son taux de glycogène dans le foie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le taux d’insuline, lui, augmente grâce au greffon."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q4",
          "type": "mcq",
          "prompt": "On retire le pancréas greffé au cou d’un chien diabétique. Comment évolue sa glycémie ?",
          "options": [
            "Elle remonte, car il n’y a plus d’insuline",
            "Elle descend encore",
            "Elle reste à 1 g/L pour toujours",
            "Elle devient nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’effet de la greffe disparaît avec le greffon."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q5",
          "type": "mcq",
          "prompt": "On injecte à un chien normal une substance S extraite du pancréas : sa glycémie passe de 0,9 g/L à 0,6 g/L, puis revient vers 1 g/L. Quel est l’effet de S ?",
          "options": [
            "S est hypoglycémiante : elle fait baisser la glycémie",
            "S est hyperglycémiante",
            "S n’a aucun effet",
            "S fait monter la glycémie à 3,8 g/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La baisse suit l’injection."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p05_q6",
          "type": "mcq",
          "prompt": "Une substance S extraite du pancréas fait baisser la glycémie d’un chien normal. Quelle est cette substance ?",
          "options": [
            "L’insuline",
            "Le glucagon",
            "Le glycogène",
            "La bile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Insuline = hormone hypoglycémiante."
        }
      ]
    }
  ]
};
