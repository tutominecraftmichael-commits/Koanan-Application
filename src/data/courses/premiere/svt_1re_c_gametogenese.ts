import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère C_L4_La gamétogénèse chez les mammifères.pdf (Mon école à la maison ; le document l’intitule « Leçon 5 ») ». Première C et D (programme de SVT commun).
// Fichier généré (scratchpad build_1re_c_svt.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_C_L04_GAMETOGENESE_MAMMIFERES: CurriculumChapter = {
  "id": "premiere_c_svt_l04_gametogenese_mammiferes",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 4,
  "title": "Leçon 4 : La gamétogenèse chez les mammifères",
  "summary": "Rôle des gonades, spermatogenèse et spermatozoïde, ovogenèse, follicules et ovocyte II, méiose, brassages génétiques, comparaison des deux gamétogenèses et évolution du stock d’ovocytes.",
  "officialVolumeHours": 12,
  "contentVersion": 2,
  "source": "SVT 1ère C_L4_La gamétogénèse chez les mammifères.pdf (Mon école à la maison ; le document l’intitule « Leçon 5 »)",
  "points": [
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01",
      "order": 1,
      "title": "Les gonades produisent les gamètes",
      "summary": "Expériences sur le rat et la rate ; testicule, tubes séminifères, ovaire et follicules.",
      "conceptExplanation": "Situation : en récréation, des élèves de 1re C débattent de la puberté et de la production des cellules reproductrices chez le garçon et la fille.\n- Expériences : la castration d’un rat pubère, la ligature de ses spermiductes ou la destruction de ses tubes séminifères par des rayons X le rendent stérile ; l’ablation des ovaires (ovariectomie) ou la ligature des oviductes rend une rate stérile.\n- Interprétation : les testicules produisent les spermatozoïdes, dans les tubes séminifères ; les spermiductes les conduisent vers l’extérieur. Les ovaires produisent les ovocytes ; les oviductes (trompes) les conduisent vers l’utérus. Produire les gamètes est la fonction exocrine des gonades ; les testicules assurent aussi le développement des caractères sexuels (fonction endocrine).\n- Dans un tube séminifère, de la périphérie vers la lumière : spermatogonies, spermatocytes I, spermatocytes II, spermatides, spermatozoïdes ; entre eux, les cellules de Sertoli ; entre les tubes, les cellules de Leydig.\n- Dans l’ovaire, les follicules mûrissent : follicule primordial, primaire, secondaire, tertiaire (cavitaire), puis follicule mûr (de De Graaf) qui libère l’ovocyte II à l’ovulation ; le follicule rompu devient corps jaune, puis corps blanc.\n- Le follicule mûr comprend : la thèque externe, la thèque interne, la granulosa, une cavité remplie de liquide folliculaire, le cumulus oophorus qui porte l’ovocyte, entouré de la corona radiata.",
      "keyRule": "Testicules (tubes séminifères) → spermatozoïdes ; ovaires (follicules) → ovocytes. Gonade enlevée ou conduit ligaturé = stérilité.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter la ligature des spermiductes",
        "statement": "Un rat dont on a ligaturé les spermiductes devient stérile, alors que ses testicules sont intacts. Pourquoi ?",
        "methodSteps": [
          "Ses testicules produisent toujours des spermatozoïdes.",
          "Mais les spermiductes bouchés empêchent ces spermatozoïdes de sortir."
        ],
        "conclusion": "Les spermatozoïdes ne peuvent plus atteindre l’ovocyte : le rat est stérile."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Castration",
          "stepTheme": "Expérience 1",
          "stepTitle": "Sans testicules",
          "paragraphText": "Un rat pubère **castré** devient **stérile** : les **testicules** produisent les cellules sexuelles mâles.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q1",
            "type": "mcq",
            "prompt": "Un rat pubère dont on a retiré les testicules (castration) devient stérile. Que montre cette expérience ?",
            "options": [
              "Les testicules produisent les cellules sexuelles mâles",
              "Les testicules ne servent à rien",
              "Les spermatozoïdes viennent du cerveau",
              "La castration n’a aucun effet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans gonade, plus de gamètes."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expériences sur les gonades du rat et de la rate",
            "caption": "Toutes ces opérations rendent l’animal stérile.",
            "tableData": {
              "headers": [
                "Expérience",
                "Résultat",
                "Ce qu’elle montre"
              ],
              "rows": [
                [
                  "Castration d’un rat pubère",
                  "Stérilité",
                  "Les testicules produisent les spermatozoïdes"
                ],
                [
                  "Ligature des spermiductes",
                  "Stérilité",
                  "Les spermatozoïdes ne peuvent plus sortir"
                ],
                [
                  "Destruction des tubes séminifères (rayons X)",
                  "Stérilité",
                  "Les tubes séminifères sont le lieu de production"
                ],
                [
                  "Ovariectomie d’une rate pubère",
                  "Stérilité",
                  "Les ovaires produisent les ovocytes"
                ],
                [
                  "Ligature des oviductes",
                  "Stérilité",
                  "Les ovocytes ne peuvent plus progresser"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Tubes séminifères",
          "stepTheme": "Expérience 3",
          "stepTitle": "Le lieu de production",
          "paragraphText": "Détruire les **tubes séminifères** par des rayons X rend le rat **stérile** : c’est **dans ces tubes** que se forment les spermatozoïdes.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q2",
            "type": "mcq",
            "prompt": "On détruit, par des rayons X, les tubes séminifères des testicules d’un rat : il devient stérile. Que montre cette expérience ?",
            "options": [
              "Les spermatozoïdes se forment dans les tubes séminifères",
              "Les spermatozoïdes se forment dans les spermiductes",
              "Les rayons X augmentent la fertilité",
              "Les tubes séminifères produisent l’urine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les tubes séminifères sont l’usine à spermatozoïdes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Ligature",
          "stepTheme": "Expériences 2 et 5",
          "stepTitle": "Des conduits bouchés",
          "paragraphText": "Ligaturer les **spermiductes** ou les **oviductes** rend l’animal stérile : les gamètes sont produits mais **ne peuvent plus circuler**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q3",
            "type": "mcq",
            "prompt": "Chez une rate dont les ovaires sont intacts, on ligature les oviductes. Elle devient stérile. Pourquoi ?",
            "options": [
              "Les ovocytes ne peuvent plus progresser vers une éventuelle fécondation",
              "Ses ovaires ne produisent plus d’ovocytes",
              "Ses oviductes produisent des hormones mâles",
              "La rate devient un mâle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les conduits sont indispensables à la rencontre des gamètes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Exocrine",
          "stepTheme": "Fonction",
          "stepTitle": "La fonction exocrine des gonades",
          "paragraphText": "Produire les **gamètes**, libérés vers l’extérieur de la gonade, est la **fonction exocrine** des gonades ; produire des **hormones** dans le sang est leur fonction **endocrine**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la fonction des gonades qui consiste à produire les gamètes ?",
            "options": [
              "La fonction exocrine",
              "La fonction endocrine",
              "La fonction digestive",
              "La fonction respiratoire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exo- : vers l’extérieur ; endo- : dans le sang."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Tube séminifère",
          "stepTheme": "Coupe",
          "stepTitle": "De la périphérie à la lumière",
          "paragraphText": "Dans un tube séminifère, de la **périphérie** vers la **lumière** : spermatogonies → spermatocytes I → spermatocytes II → spermatides → **spermatozoïdes**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q5",
            "type": "mcq",
            "prompt": "Dans une coupe de tube séminifère, où trouve-t-on les spermatozoïdes ?",
            "options": [
              "Près de la lumière du tube, au centre",
              "À la périphérie du tube",
              "Dans les cellules de Leydig",
              "Dans les vaisseaux sanguins"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les cellules progressent vers la lumière en mûrissant."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Follicule mûr",
          "stepTheme": "Activité",
          "stepTitle": "Annoter le follicule mûr",
          "paragraphText": "Follicule mûr : **thèque externe**, **thèque interne**, **granulosa**, **liquide folliculaire**, **cumulus oophorus** portant l’**ovocyte** entouré de la **corona radiata**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q6",
            "type": "mcq",
            "prompt": "Dans un follicule mûr, comment s’appelle l’amas de cellules qui porte l’ovocyte et fait saillie dans la cavité ?",
            "options": [
              "Le cumulus oophorus",
              "La thèque externe",
              "Le corps jaune",
              "La zone corticale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 1 granulosa, 2 corona radiata, 3 ovocyte, 4 thèque interne, 5 thèque externe, 6 cumulus oophorus, 7 liquide folliculaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q1",
          "type": "mcq",
          "prompt": "Un rat pubère dont on a retiré les testicules (castration) devient stérile. Que montre cette expérience ?",
          "options": [
            "Les testicules produisent les cellules sexuelles mâles",
            "Les testicules ne servent à rien",
            "Les spermatozoïdes viennent du cerveau",
            "La castration n’a aucun effet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans gonade, plus de gamètes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q2",
          "type": "mcq",
          "prompt": "On détruit, par des rayons X, les tubes séminifères des testicules d’un rat : il devient stérile. Que montre cette expérience ?",
          "options": [
            "Les spermatozoïdes se forment dans les tubes séminifères",
            "Les spermatozoïdes se forment dans les spermiductes",
            "Les rayons X augmentent la fertilité",
            "Les tubes séminifères produisent l’urine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les tubes séminifères sont l’usine à spermatozoïdes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q3",
          "type": "mcq",
          "prompt": "Chez une rate dont les ovaires sont intacts, on ligature les oviductes. Elle devient stérile. Pourquoi ?",
          "options": [
            "Les ovocytes ne peuvent plus progresser vers une éventuelle fécondation",
            "Ses ovaires ne produisent plus d’ovocytes",
            "Ses oviductes produisent des hormones mâles",
            "La rate devient un mâle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les conduits sont indispensables à la rencontre des gamètes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la fonction des gonades qui consiste à produire les gamètes ?",
          "options": [
            "La fonction exocrine",
            "La fonction endocrine",
            "La fonction digestive",
            "La fonction respiratoire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exo- : vers l’extérieur ; endo- : dans le sang."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q5",
          "type": "mcq",
          "prompt": "Dans une coupe de tube séminifère, où trouve-t-on les spermatozoïdes ?",
          "options": [
            "Près de la lumière du tube, au centre",
            "À la périphérie du tube",
            "Dans les cellules de Leydig",
            "Dans les vaisseaux sanguins"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cellules progressent vers la lumière en mûrissant."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p01_q6",
          "type": "mcq",
          "prompt": "Dans un follicule mûr, comment s’appelle l’amas de cellules qui porte l’ovocyte et fait saillie dans la cavité ?",
          "options": [
            "Le cumulus oophorus",
            "La thèque externe",
            "Le corps jaune",
            "La zone corticale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 1 granulosa, 2 corona radiata, 3 ovocyte, 4 thèque interne, 5 thèque externe, 6 cumulus oophorus, 7 liquide folliculaire."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02",
      "order": 2,
      "title": "La spermatogenèse",
      "summary": "Multiplication, accroissement, maturation et différenciation ; le spermatozoïde.",
      "conceptExplanation": "- La spermatogenèse se déroule dans les tubes séminifères, de façon continue, à partir de la puberté.\n- Multiplication : les spermatogonies (2n), cellules souches situées à la périphérie du tube, se multiplient par mitoses.\n- Accroissement : une spermatogonie grossit légèrement et devient un spermatocyte I (2n).\n- Maturation : le spermatocyte I subit la méiose. La 1re division (réductionnelle) donne 2 spermatocytes II (n) ; la 2e division (équationnelle) donne 4 spermatides (n).\n- Différenciation ou spermiogenèse : chaque spermatide se transforme profondément en spermatozoïde, sans division (formation de l’acrosome à partir de l’appareil de Golgi, du flagelle à partir d’un centriole, regroupement des mitochondries).\n- Le spermatozoïde humain comprend une tête (environ 5 µm) avec le noyau et l’acrosome, une pièce intermédiaire (environ 5 µm) avec le manchon de mitochondries, et une queue ou flagelle (environ 50 µm).\n- Correction du document : dans le texte à trous, il écrit que les spermatocytes II « subissent une autre mitose » ; c’est la 2e division de la méiose. Et il donne « phase de multiplication » pour la case 7 : le passage d’un spermatocyte I à quatre spermatides est la phase de maturation.",
      "keyRule": "Spermatogonie (2n) → spermatocyte I (2n) → 2 spermatocytes II (n) → 4 spermatides (n) → 4 spermatozoïdes.",
      "formulas": [],
      "workedExample": {
        "title": "Compter les spermatozoïdes",
        "statement": "Combien de spermatozoïdes donnent 10 spermatocytes I ?",
        "methodSteps": [
          "Un spermatocyte I donne 2 spermatocytes II, puis 4 spermatides.",
          "Chaque spermatide devient un spermatozoïde."
        ],
        "conclusion": "10 × 4 = 40 spermatozoïdes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Multiplication",
          "stepTheme": "Mitoses",
          "stepTitle": "La phase de multiplication",
          "paragraphText": "Les **spermatogonies** (2n), à la périphérie des tubes séminifères, se **multiplient par mitoses** : c’est la **phase de multiplication**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q1",
            "type": "mcq",
            "prompt": "Comment les spermatogonies se multiplient-elles pendant la phase de multiplication ?",
            "options": [
              "Par mitoses",
              "Par méiose",
              "Par différenciation",
              "Par fécondation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les mitoses conservent 2n chromosomes."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les phases de la gamétogenèse",
            "caption": "Les trois premières phases sont communes ; seule la spermatogenèse a une phase de différenciation.",
            "tableData": {
              "headers": [
                "Phase",
                "Spermatogenèse",
                "Ovogenèse"
              ],
              "rows": [
                [
                  "Multiplication (mitoses)",
                  "Spermatogonies (2n), dès la puberté",
                  "Ovogonies (2n), avant la naissance"
                ],
                [
                  "Accroissement",
                  "Spermatocyte I (2n), légère croissance",
                  "Ovocyte I (2n), forte croissance (réserves)"
                ],
                [
                  "Maturation (méiose)",
                  "2 spermatocytes II (n) puis 4 spermatides (n)",
                  "Ovocyte II (n) + 1er globule polaire ; ovotide et 2e globule polaire à la fécondation"
                ],
                [
                  "Différenciation",
                  "Spermatide → spermatozoïde (spermiogenèse)",
                  "Aucune"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Accroissement",
          "stepTheme": "Spermatocyte I",
          "stepTitle": "La phase d’accroissement",
          "paragraphText": "Une spermatogonie **grossit légèrement** et devient un **spermatocyte I**, encore **diploïde** (2n).",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q2",
            "type": "mcq",
            "prompt": "Quelle cellule se forme à la fin de la phase d’accroissement de la spermatogenèse ?",
            "options": [
              "Le spermatocyte I (2n)",
              "Le spermatocyte II (n)",
              "La spermatide (n)",
              "Le spermatozoïde (n)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’accroissement ne change pas le nombre de chromosomes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Maturation",
          "stepTheme": "Méiose",
          "stepTitle": "La phase de maturation",
          "paragraphText": "Le **spermatocyte I** subit la **méiose** : 1re division → **2 spermatocytes II** (n) ; 2e division → **4 spermatides** (n).",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q3",
            "type": "mcq",
            "prompt": "Combien de spermatides donne un seul spermatocyte I au cours de la méiose ?",
            "options": [
              "4 spermatides haploïdes",
              "2 spermatides diploïdes",
              "1 seule spermatide",
              "8 spermatides"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux divisions successives : 1 → 2 → 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Texte à trous",
          "stepTheme": "Erreur du document",
          "stepTitle": "Maturation, pas multiplication",
          "paragraphText": "Le corrigé du texte à trous donne « phase de **multiplication** » pour le passage d’un spermatocyte I à quatre spermatides : c’est la phase de **maturation**. Et la 2e division est une division de **méiose**, pas une mitose.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q4",
            "type": "mcq",
            "prompt": "Comment s’appelle la phase où un spermatocyte I donne quatre spermatides ?",
            "options": [
              "La phase de maturation",
              "La phase de multiplication",
              "La phase d’accroissement",
              "La phase de différenciation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Maturation = méiose."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Spermiogenèse",
          "stepTheme": "Différenciation",
          "stepTitle": "De la spermatide au spermatozoïde",
          "paragraphText": "Pendant la **différenciation** (**spermiogenèse**), chaque spermatide se transforme en **spermatozoïde**, **sans division** : l’acrosome, le flagelle et le manchon mitochondrial se forment.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q5",
            "type": "mcq",
            "prompt": "Que se passe-t-il pendant la spermiogenèse ?",
            "options": [
              "La spermatide se transforme en spermatozoïde, sans se diviser",
              "La spermatide se divise en deux",
              "Le spermatocyte I subit la méiose",
              "Les spermatogonies se multiplient"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une spermatide = un spermatozoïde."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Spermatozoïde",
          "stepTheme": "Structure",
          "stepTitle": "Le spermatozoïde humain",
          "paragraphText": "Le spermatozoïde a une **tête** (noyau + **acrosome**), une **pièce intermédiaire** (manchon de **mitochondries**) et une **queue** (flagelle) d’environ 50 µm.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q6",
            "type": "mcq",
            "prompt": "Dans quelle partie du spermatozoïde se trouvent les mitochondries qui fournissent l’énergie du mouvement ?",
            "options": [
              "Dans la pièce intermédiaire",
              "Dans l’acrosome",
              "Dans le noyau",
              "Au bout de la queue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le manchon mitochondrial alimente le flagelle."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Calcul",
          "stepTheme": "Application",
          "stepTitle": "Compter les gamètes",
          "paragraphText": "1 spermatocyte I → **4** spermatozoïdes. Donc 10 spermatocytes I → **40** spermatozoïdes.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q7",
            "type": "mcq",
            "prompt": "Combien de spermatozoïdes peuvent donner 10 spermatocytes I ?",
            "options": [
              "40",
              "10",
              "20",
              "80"
            ],
            "correctAnswerIndex": 0,
            "explanation": "10 × 4 = 40."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q1",
          "type": "mcq",
          "prompt": "Comment les spermatogonies se multiplient-elles pendant la phase de multiplication ?",
          "options": [
            "Par mitoses",
            "Par méiose",
            "Par différenciation",
            "Par fécondation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les mitoses conservent 2n chromosomes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q2",
          "type": "mcq",
          "prompt": "Quelle cellule se forme à la fin de la phase d’accroissement de la spermatogenèse ?",
          "options": [
            "Le spermatocyte I (2n)",
            "Le spermatocyte II (n)",
            "La spermatide (n)",
            "Le spermatozoïde (n)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’accroissement ne change pas le nombre de chromosomes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q3",
          "type": "mcq",
          "prompt": "Combien de spermatides donne un seul spermatocyte I au cours de la méiose ?",
          "options": [
            "4 spermatides haploïdes",
            "2 spermatides diploïdes",
            "1 seule spermatide",
            "8 spermatides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux divisions successives : 1 → 2 → 4."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q4",
          "type": "mcq",
          "prompt": "Comment s’appelle la phase où un spermatocyte I donne quatre spermatides ?",
          "options": [
            "La phase de maturation",
            "La phase de multiplication",
            "La phase d’accroissement",
            "La phase de différenciation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Maturation = méiose."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q5",
          "type": "mcq",
          "prompt": "Que se passe-t-il pendant la spermiogenèse ?",
          "options": [
            "La spermatide se transforme en spermatozoïde, sans se diviser",
            "La spermatide se divise en deux",
            "Le spermatocyte I subit la méiose",
            "Les spermatogonies se multiplient"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une spermatide = un spermatozoïde."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q6",
          "type": "mcq",
          "prompt": "Dans quelle partie du spermatozoïde se trouvent les mitochondries qui fournissent l’énergie du mouvement ?",
          "options": [
            "Dans la pièce intermédiaire",
            "Dans l’acrosome",
            "Dans le noyau",
            "Au bout de la queue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le manchon mitochondrial alimente le flagelle."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p02_q7",
          "type": "mcq",
          "prompt": "Combien de spermatozoïdes peuvent donner 10 spermatocytes I ?",
          "options": [
            "40",
            "10",
            "20",
            "80"
          ],
          "correctAnswerIndex": 0,
          "explanation": "10 × 4 = 40."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03",
      "order": 3,
      "title": "L’ovogenèse",
      "summary": "Ovogonies avant la naissance, ovocyte I au repos, ovocyte II bloqué en métaphase II.",
      "conceptExplanation": "- Avant la naissance (vie fœtale), les ovogonies (2n) se multiplient par mitoses : phase de multiplication.\n- Chaque ovogonie grossit beaucoup en accumulant des réserves et devient un ovocyte I (2n) : phase d’accroissement. Il s’entoure de cellules folliculaires et forme un follicule primordial.\n- Les ovocytes I commencent la 1re division de méiose avant la naissance puis restent bloqués en prophase I : c’est une longue période de repos, jusqu’à la puberté.\n- À partir de la puberté, à chaque cycle, un ovocyte I achève la 1re division juste avant l’ovulation : il donne un gros ovocyte II (n) et un petit 1er globule polaire.\n- L’ovocyte II commence la 2e division, qui reste bloquée en métaphase II. C’est l’ovocyte II qui est libéré à l’ovulation. La 2e division ne s’achève qu’en cas de fécondation : elle donne alors l’ovotide (n) et un petit 2e globule polaire.\n- À partir d’un ovocyte I, on obtient donc un seul gamète femelle. Il n’y a pas de phase de différenciation.\n- L’ovocyte II émis est entouré de la zone pellucide et de cellules folliculaires (corona radiata) ; il contient des granules corticaux.\n- Correction du document : il écrit que la 2e division « aboutit à l’ovotide ou ovocyte II » et parle d’« une seule cellule sexuelle qui est l’ovotide ou ovocyte II ». Ce sont deux cellules différentes : l’ovocyte II est la cellule libérée à l’ovulation, bloquée en métaphase II ; l’ovotide n’apparaît qu’après la fécondation.",
      "keyRule": "Ovogonies (avant la naissance) → ovocyte I (repos) → ovocyte II + 1er globule polaire (avant l’ovulation) → ovotide + 2e globule polaire (seulement à la fécondation).",
      "formulas": [],
      "workedExample": {
        "title": "Identifier la cellule libérée à l’ovulation",
        "statement": "Quelle cellule l’ovaire libère-t-il à l’ovulation, et à quel stade ?",
        "methodSteps": [
          "Juste avant l’ovulation, l’ovocyte I a achevé la 1re division : c’est un ovocyte II.",
          "L’ovocyte II est bloqué en métaphase II."
        ],
        "conclusion": "C’est un ovocyte II bloqué en métaphase II ; il ne termine sa méiose qu’à la fécondation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Ovogonies",
          "stepTheme": "Vie fœtale",
          "stepTitle": "La multiplication avant la naissance",
          "paragraphText": "Les **ovogonies** (2n) se multiplient par **mitoses** **avant la naissance**, pendant la vie fœtale.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q1",
            "type": "mcq",
            "prompt": "À quel moment de la vie se multiplient les ovogonies chez la femme ?",
            "options": [
              "Avant la naissance, pendant la vie fœtale",
              "Seulement à la puberté",
              "Tout au long de la vie",
              "Après la ménopause"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toutes les ovogonies se forment avant la naissance."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Spermatogenèse et ovogenèse : la phase de maturation",
            "caption": "Un spermatocyte I donne 4 spermatozoïdes ; un ovocyte I ne donne qu’un seul gamète femelle et des globules polaires.",
            "svgContent": "<svg viewBox=\"0 0 560 315\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Spermatocyte I vers 2 spermatocytes II, 4 spermatides, 4 spermatozoïdes ; ovocyte I vers ovocyte II et globule polaire, puis à la fécondation ovotide et second globule polaire\"><text x=\"140\" y=\"20\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">Spermatogenèse</text><text x=\"420\" y=\"20\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EC4899\">Ovogenèse</text><circle cx=\"140\" cy=\"52\" r=\"18\" fill=\"#3B82F6\" fill-opacity=\"0.25\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"140\" y=\"82\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">spermatocyte I (2n)</text><line x1=\"130\" y1=\"90\" x2=\"102.6\" y2=\"107.2\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"95,112 105.3,111.4 100.0,103.0\" fill=\"#94A3B8\"/><line x1=\"150\" y1=\"90\" x2=\"177.4\" y2=\"107.2\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"185,112 180.0,103.0 174.7,111.4\" fill=\"#94A3B8\"/><circle cx=\"90\" cy=\"125\" r=\"13\" fill=\"#3B82F6\" fill-opacity=\"0.25\" stroke=\"#3B82F6\" stroke-width=\"2\"/><circle cx=\"190\" cy=\"125\" r=\"13\" fill=\"#3B82F6\" fill-opacity=\"0.25\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"140\" y=\"154\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">spermatocytes II (n)</text><line x1=\"90\" y1=\"160\" x2=\"72.0\" y2=\"174.4\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"65,180 75.2,178.3 68.9,170.5\" fill=\"#94A3B8\"/><line x1=\"90\" y1=\"160\" x2=\"108.0\" y2=\"174.4\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"115,180 111.1,170.5 104.8,178.3\" fill=\"#94A3B8\"/><line x1=\"190\" y1=\"160\" x2=\"172.0\" y2=\"174.4\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"165,180 175.2,178.3 168.9,170.5\" fill=\"#94A3B8\"/><line x1=\"190\" y1=\"160\" x2=\"208.0\" y2=\"174.4\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"215,180 211.1,170.5 204.8,178.3\" fill=\"#94A3B8\"/><circle cx=\"65\" cy=\"192\" r=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.25\" stroke=\"#3B82F6\" stroke-width=\"2\"/><circle cx=\"115\" cy=\"192\" r=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.25\" stroke=\"#3B82F6\" stroke-width=\"2\"/><circle cx=\"165\" cy=\"192\" r=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.25\" stroke=\"#3B82F6\" stroke-width=\"2\"/><circle cx=\"215\" cy=\"192\" r=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.25\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"140\" y=\"220\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">4 spermatides (n)</text><line x1=\"65\" y1=\"226\" x2=\"65.0\" y2=\"237.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"65,246 70.0,237.0 60.0,237.0\" fill=\"#94A3B8\"/><line x1=\"115\" y1=\"226\" x2=\"115.0\" y2=\"237.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"115,246 120.0,237.0 110.0,237.0\" fill=\"#94A3B8\"/><line x1=\"165\" y1=\"226\" x2=\"165.0\" y2=\"237.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"165,246 170.0,237.0 160.0,237.0\" fill=\"#94A3B8\"/><line x1=\"215\" y1=\"226\" x2=\"215.0\" y2=\"237.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"215,246 220.0,237.0 210.0,237.0\" fill=\"#94A3B8\"/><ellipse cx=\"65\" cy=\"256\" rx=\"5\" ry=\"7\" fill=\"#3B82F6\"/><line x1=\"65\" y1=\"263\" x2=\"65\" y2=\"285\" stroke=\"#3B82F6\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><ellipse cx=\"115\" cy=\"256\" rx=\"5\" ry=\"7\" fill=\"#3B82F6\"/><line x1=\"115\" y1=\"263\" x2=\"115\" y2=\"285\" stroke=\"#3B82F6\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><ellipse cx=\"165\" cy=\"256\" rx=\"5\" ry=\"7\" fill=\"#3B82F6\"/><line x1=\"165\" y1=\"263\" x2=\"165\" y2=\"285\" stroke=\"#3B82F6\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><ellipse cx=\"215\" cy=\"256\" rx=\"5\" ry=\"7\" fill=\"#3B82F6\"/><line x1=\"215\" y1=\"263\" x2=\"215\" y2=\"285\" stroke=\"#3B82F6\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"140\" y=\"306\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">4 spermatozoïdes (n)</text><circle cx=\"400\" cy=\"58\" r=\"26\" fill=\"#EC4899\" fill-opacity=\"0.25\" stroke=\"#EC4899\" stroke-width=\"2\"/><text x=\"400\" y=\"98\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">ovocyte I (2n)</text><line x1=\"390\" y1=\"104\" x2=\"384.0\" y2=\"116.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"380,124 388.5,118.2 379.6,113.7\" fill=\"#94A3B8\"/><line x1=\"418\" y1=\"104\" x2=\"467.7\" y2=\"124.6\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"476,128 469.6,119.9 465.8,129.2\" fill=\"#94A3B8\"/><circle cx=\"375\" cy=\"148\" r=\"22\" fill=\"#EC4899\" fill-opacity=\"0.25\" stroke=\"#EC4899\" stroke-width=\"2\"/><circle cx=\"482\" cy=\"138\" r=\"7\" fill=\"#EC4899\" fill-opacity=\"0.4\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><text x=\"375\" y=\"184\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">ovocyte II (n), bloqué</text><text x=\"375\" y=\"197\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">en métaphase II</text><text x=\"498\" y=\"142\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">1er GP</text><text x=\"430\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">ovulation, puis fécondation</text><line x1=\"375\" y1=\"222\" x2=\"375.0\" y2=\"231.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"375,240 380.0,231.0 370.0,231.0\" fill=\"#94A3B8\"/><line x1=\"395\" y1=\"222\" x2=\"461.4\" y2=\"243.3\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"470,246 463.0,238.5 459.9,248.0\" fill=\"#94A3B8\"/><circle cx=\"375\" cy=\"262\" r=\"20\" fill=\"#EC4899\" fill-opacity=\"0.25\" stroke=\"#EC4899\" stroke-width=\"2\"/><circle cx=\"478\" cy=\"254\" r=\"6\" fill=\"#EC4899\" fill-opacity=\"0.4\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><text x=\"375\" y=\"294\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">ovotide (n)</text><text x=\"492\" y=\"258\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">2e GP</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Ovocyte I",
          "stepTheme": "Accroissement",
          "stepTitle": "Une grosse cellule au repos",
          "paragraphText": "Chaque ovogonie **grossit beaucoup** (réserves) et devient un **ovocyte I** (2n), qui reste **au repos**, bloqué en prophase I, jusqu’à la puberté.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q2",
            "type": "mcq",
            "prompt": "Que devient une ovogonie pendant la phase d’accroissement ?",
            "options": [
              "Un ovocyte I, beaucoup plus gros, encore diploïde",
              "Un ovocyte II haploïde",
              "Un spermatocyte I",
              "Un globule polaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’accroissement est important dans l’ovogenèse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "1re division",
          "stepTheme": "Avant l’ovulation",
          "stepTitle": "L’ovocyte II et le 1er globule polaire",
          "paragraphText": "Juste avant l’ovulation, l’ovocyte I achève la **1re division** : il donne un **gros ovocyte II** (n) et un **petit 1er globule polaire**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q3",
            "type": "mcq",
            "prompt": "Que donne la 1re division de méiose de l’ovocyte I ?",
            "options": [
              "Un gros ovocyte II et un petit 1er globule polaire",
              "Deux ovocytes II de même taille",
              "Quatre ovules",
              "Une ovogonie et un spermatocyte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La division est inégale."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Ovocyte II",
          "stepTheme": "Erreur du document",
          "stepTitle": "Ovocyte II ou ovotide ?",
          "paragraphText": "Le document confond **ovocyte II** et **ovotide**. La cellule libérée à l’ovulation est l’**ovocyte II**, **bloqué en métaphase II**. L’**ovotide** n’apparaît qu’**après la fécondation**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q4",
            "type": "mcq",
            "prompt": "Quelle cellule est libérée par l’ovaire au moment de l’ovulation ?",
            "options": [
              "Un ovocyte II bloqué en métaphase II",
              "Une ovotide déjà haploïde et achevée",
              "Un ovocyte I",
              "Une ovogonie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La méiose de la femme ne s’achève qu’à la fécondation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Fécondation",
          "stepTheme": "2e division",
          "stepTitle": "La fin de la méiose",
          "paragraphText": "Si un spermatozoïde pénètre l’ovocyte II, la **2e division** s’achève : elle donne l’**ovotide** et un **2e globule polaire**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q5",
            "type": "mcq",
            "prompt": "Qu’est-ce qui déclenche l’achèvement de la 2e division de méiose chez la femme ?",
            "options": [
              "La fécondation",
              "Les règles",
              "La puberté",
              "La ménopause"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans fécondation, l’ovocyte II dégénère."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Compter",
          "stepTheme": "Bilan",
          "stepTitle": "Un seul gamète femelle",
          "paragraphText": "À partir d’**un ovocyte I**, on obtient **un seul** gamète femelle ; les globules polaires dégénèrent.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q6",
            "type": "mcq",
            "prompt": "Combien de gamètes femelles fonctionnels donne un ovocyte I ?",
            "options": [
              "Un seul",
              "Deux",
              "Quatre",
              "Huit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les globules polaires, trop petits, ne sont pas des gamètes."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Ovocyte II",
          "stepTheme": "Structure",
          "stepTitle": "L’ovocyte II émis",
          "paragraphText": "L’ovocyte II est entouré de la **zone pellucide** et de **cellules folliculaires** ; on y voit le **1er globule polaire** et les chromosomes en **métaphase II**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q7",
            "type": "mcq",
            "prompt": "Quelle enveloppe entoure directement l’ovocyte II libéré à l’ovulation, sous les cellules folliculaires ?",
            "options": [
              "La zone pellucide",
              "La thèque externe",
              "L’acrosome",
              "La paroi de l’utérus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le spermatozoïde doit traverser la zone pellucide."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q1",
          "type": "mcq",
          "prompt": "À quel moment de la vie se multiplient les ovogonies chez la femme ?",
          "options": [
            "Avant la naissance, pendant la vie fœtale",
            "Seulement à la puberté",
            "Tout au long de la vie",
            "Après la ménopause"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toutes les ovogonies se forment avant la naissance."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q2",
          "type": "mcq",
          "prompt": "Que devient une ovogonie pendant la phase d’accroissement ?",
          "options": [
            "Un ovocyte I, beaucoup plus gros, encore diploïde",
            "Un ovocyte II haploïde",
            "Un spermatocyte I",
            "Un globule polaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’accroissement est important dans l’ovogenèse."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q3",
          "type": "mcq",
          "prompt": "Que donne la 1re division de méiose de l’ovocyte I ?",
          "options": [
            "Un gros ovocyte II et un petit 1er globule polaire",
            "Deux ovocytes II de même taille",
            "Quatre ovules",
            "Une ovogonie et un spermatocyte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La division est inégale."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q4",
          "type": "mcq",
          "prompt": "Quelle cellule est libérée par l’ovaire au moment de l’ovulation ?",
          "options": [
            "Un ovocyte II bloqué en métaphase II",
            "Une ovotide déjà haploïde et achevée",
            "Un ovocyte I",
            "Une ovogonie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La méiose de la femme ne s’achève qu’à la fécondation."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q5",
          "type": "mcq",
          "prompt": "Qu’est-ce qui déclenche l’achèvement de la 2e division de méiose chez la femme ?",
          "options": [
            "La fécondation",
            "Les règles",
            "La puberté",
            "La ménopause"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans fécondation, l’ovocyte II dégénère."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q6",
          "type": "mcq",
          "prompt": "Combien de gamètes femelles fonctionnels donne un ovocyte I ?",
          "options": [
            "Un seul",
            "Deux",
            "Quatre",
            "Huit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les globules polaires, trop petits, ne sont pas des gamètes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p03_q7",
          "type": "mcq",
          "prompt": "Quelle enveloppe entoure directement l’ovocyte II libéré à l’ovulation, sous les cellules folliculaires ?",
          "options": [
            "La zone pellucide",
            "La thèque externe",
            "L’acrosome",
            "La paroi de l’utérus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le spermatozoïde doit traverser la zone pellucide."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04",
      "order": 4,
      "title": "La méiose",
      "summary": "Deux divisions : réductionnelle puis équationnelle.",
      "conceptExplanation": "- La méiose est une suite de deux divisions qui, à partir d’une cellule diploïde (2n), donne quatre cellules haploïdes (n), différentes entre elles et différentes de la cellule mère.\n- 1re division, réductionnelle :\n- prophase I : les chromosomes s’individualisent, les homologues s’apparient deux à deux (bivalents), l’enveloppe nucléaire disparaît ; des chiasmas apparaissent ;\n- métaphase I : les paires d’homologues se placent de part et d’autre du plan équatorial ;\n- anaphase I : les homologues de chaque paire se séparent et migrent vers des pôles opposés ;\n- télophase I : deux cellules filles, chacune avec n chromosomes à deux chromatides.\n- 2e division, équationnelle, qui suit immédiatement :\n- prophase II puis métaphase II : les chromosomes se placent sur le plan équatorial par leur centromère ;\n- anaphase II : les deux chromatides de chaque chromosome se séparent et deviennent des chromosomes fils ;\n- télophase II : on obtient quatre cellules haploïdes.\n- La 1re division réduit le nombre de chromosomes de moitié (2n → n) ; la 2e sépare les chromatides sans changer ce nombre.",
      "keyRule": "Méiose = 2 divisions. 1re (réductionnelle) : les homologues se séparent, 2n → n. 2e (équationnelle) : les chromatides se séparent.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer anaphase I et anaphase II",
        "statement": "Dans une cellule en anaphase, des chromosomes à deux chromatides migrent vers les pôles. Est-ce l’anaphase I ou II ?",
        "methodSteps": [
          "En anaphase I, ce sont les chromosomes homologues entiers (à deux chromatides) qui se séparent.",
          "En anaphase II, ce sont des chromatides isolées qui migrent."
        ],
        "conclusion": "Des chromosomes à deux chromatides qui migrent : c’est l’anaphase I."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Méiose",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce que la méiose ?",
          "paragraphText": "La **méiose** est une suite de **deux divisions** qui transforme une cellule **diploïde** en **quatre cellules haploïdes**, toutes différentes.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q1",
            "type": "mcq",
            "prompt": "Combien de cellules haploïdes la méiose produit-elle à partir d’une cellule diploïde ?",
            "options": [
              "Quatre",
              "Deux",
              "Une",
              "Huit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux divisions : 1 → 2 → 4."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les étapes de la méiose",
            "caption": "Deux divisions successives : la première est réductionnelle (2n → n), la seconde équationnelle.",
            "tableData": {
              "headers": [
                "Division",
                "Étape",
                "Ce qui se passe"
              ],
              "rows": [
                [
                  "1re (réductionnelle)",
                  "Prophase I",
                  "Chromosomes condensés, homologues appariés (chiasmas, crossing-over)"
                ],
                [
                  "",
                  "Métaphase I",
                  "Les paires d’homologues se placent de part et d’autre du plan équatorial"
                ],
                [
                  "",
                  "Anaphase I",
                  "Les homologues de chaque paire se séparent vers les pôles"
                ],
                [
                  "",
                  "Télophase I",
                  "Deux cellules haploïdes (n chromosomes à deux chromatides)"
                ],
                [
                  "2e (équationnelle)",
                  "Prophase II et métaphase II",
                  "Chromosomes alignés par leur centromère"
                ],
                [
                  "",
                  "Anaphase II",
                  "Les chromatides de chaque chromosome se séparent"
                ],
                [
                  "",
                  "Télophase II",
                  "Quatre cellules haploïdes, toutes différentes"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Prophase I",
          "stepTheme": "Appariement",
          "stepTitle": "La prophase I",
          "paragraphText": "En **prophase I**, les chromosomes homologues **s’apparient deux à deux** et l’enveloppe du noyau disparaît.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q2",
            "type": "mcq",
            "prompt": "À quelle étape de la méiose les chromosomes homologues s’apparient-ils deux à deux ?",
            "options": [
              "En prophase I",
              "En anaphase II",
              "En télophase II",
              "En métaphase II"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est aussi là que se produisent les crossing-over."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Anaphase I",
          "stepTheme": "Séparation",
          "stepTitle": "L’anaphase I",
          "paragraphText": "En **anaphase I**, les **homologues** de chaque paire se **séparent** et migrent vers des pôles opposés.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q3",
            "type": "mcq",
            "prompt": "Que se passe-t-il en anaphase I ?",
            "options": [
              "Les chromosomes homologues de chaque paire se séparent",
              "Les chromatides de chaque chromosome se séparent",
              "L’enveloppe nucléaire se reforme",
              "Les chromosomes se dupliquent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont des chromosomes entiers, à deux chromatides, qui migrent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Réductionnelle",
          "stepTheme": "1re division",
          "stepTitle": "Une division qui réduit",
          "paragraphText": "La **1re division** est **réductionnelle** : chaque cellule fille ne reçoit qu’**un chromosome de chaque paire** (2n → n).",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q4",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que la 1re division de méiose est réductionnelle ?",
            "options": [
              "Elle réduit de moitié le nombre de chromosomes (2n → n)",
              "Elle réduit la taille des chromatides",
              "Elle supprime l’ADN",
              "Elle réduit le nombre de cellules"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un chromosome de chaque paire par cellule."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Anaphase II",
          "stepTheme": "Chromatides",
          "stepTitle": "L’anaphase II",
          "paragraphText": "En **anaphase II**, les **deux chromatides** de chaque chromosome se séparent et deviennent des **chromosomes fils**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q5",
            "type": "mcq",
            "prompt": "Que se passe-t-il en anaphase II ?",
            "options": [
              "Les deux chromatides de chaque chromosome se séparent",
              "Les homologues de chaque paire se séparent",
              "Les chromosomes s’apparient",
              "La cellule fusionne avec une autre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme dans une mitose, mais à partir de n chromosomes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Équationnelle",
          "stepTheme": "2e division",
          "stepTitle": "Une division qui conserve n",
          "paragraphText": "La **2e division** est **équationnelle** : elle sépare les chromatides sans changer le nombre de chromosomes, qui reste **n**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q6",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que la 2e division de méiose est équationnelle ?",
            "options": [
              "Elle sépare les chromatides sans changer le nombre de chromosomes (n)",
              "Elle double le nombre de chromosomes",
              "Elle réduit 2n en n",
              "Elle apparie les homologues"
            ],
            "correctAnswerIndex": 0,
            "explanation": "n → n, avec des chromosomes à une seule chromatide."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Ordre",
          "stepTheme": "Évaluation",
          "stepTitle": "Remettre les étapes dans l’ordre",
          "paragraphText": "Ordre : **prophase I → métaphase I → anaphase I → télophase I → prophase II → métaphase II → anaphase II → télophase II**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q7",
            "type": "mcq",
            "prompt": "Quelle étape vient juste après la métaphase I ?",
            "options": [
              "L’anaphase I",
              "La prophase II",
              "La télophase II",
              "La métaphase II"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pro, méta, ana, télo : deux fois."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q1",
          "type": "mcq",
          "prompt": "Combien de cellules haploïdes la méiose produit-elle à partir d’une cellule diploïde ?",
          "options": [
            "Quatre",
            "Deux",
            "Une",
            "Huit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux divisions : 1 → 2 → 4."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q2",
          "type": "mcq",
          "prompt": "À quelle étape de la méiose les chromosomes homologues s’apparient-ils deux à deux ?",
          "options": [
            "En prophase I",
            "En anaphase II",
            "En télophase II",
            "En métaphase II"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est aussi là que se produisent les crossing-over."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q3",
          "type": "mcq",
          "prompt": "Que se passe-t-il en anaphase I ?",
          "options": [
            "Les chromosomes homologues de chaque paire se séparent",
            "Les chromatides de chaque chromosome se séparent",
            "L’enveloppe nucléaire se reforme",
            "Les chromosomes se dupliquent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont des chromosomes entiers, à deux chromatides, qui migrent."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q4",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que la 1re division de méiose est réductionnelle ?",
          "options": [
            "Elle réduit de moitié le nombre de chromosomes (2n → n)",
            "Elle réduit la taille des chromatides",
            "Elle supprime l’ADN",
            "Elle réduit le nombre de cellules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un chromosome de chaque paire par cellule."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q5",
          "type": "mcq",
          "prompt": "Que se passe-t-il en anaphase II ?",
          "options": [
            "Les deux chromatides de chaque chromosome se séparent",
            "Les homologues de chaque paire se séparent",
            "Les chromosomes s’apparient",
            "La cellule fusionne avec une autre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme dans une mitose, mais à partir de n chromosomes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q6",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que la 2e division de méiose est équationnelle ?",
          "options": [
            "Elle sépare les chromatides sans changer le nombre de chromosomes (n)",
            "Elle double le nombre de chromosomes",
            "Elle réduit 2n en n",
            "Elle apparie les homologues"
          ],
          "correctAnswerIndex": 0,
          "explanation": "n → n, avec des chromosomes à une seule chromatide."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p04_q7",
          "type": "mcq",
          "prompt": "Quelle étape vient juste après la métaphase I ?",
          "options": [
            "L’anaphase I",
            "La prophase II",
            "La télophase II",
            "La métaphase II"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pro, méta, ana, télo : deux fois."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05",
      "order": 5,
      "title": "Brassages génétiques et méiose atypique",
      "summary": "Brassage interchromosomique, crossing-over, diversité ; erreurs de méiose.",
      "conceptExplanation": "- La méiose produit des gamètes génétiquement différents : chaque enfant d’un même couple est unique. C’est l’origine de la diversité des individus.\n- Brassage interchromosomique : en métaphase I, chaque paire d’homologues se place au hasard de part et d’autre du plan équatorial ; les chromosomes d’origine paternelle et maternelle sont donc répartis au hasard entre les gamètes.\n- Brassage intrachromosomique (crossing-over) : en prophase I, des chromatides d’origine paternelle et maternelle d’une même paire échangent des fragments au niveau des chiasmas ; on obtient des chromosomes « mixtes », recombinés.\n- Ces deux brassages donnent des gamètes parentaux et des gamètes recombinés.\n- Méiose atypique : si des chromosomes ne se séparent pas normalement, les gamètes sont anormaux et peuvent donner des anomalies chromosomiques, comme la trisomie 21.\n- Texte à trous (corrigé) : 1 chromosomes homologues ; 2 métaphase I ; 3 gamètes recombinés ; 4 parentaux ; 5 interchromosomique ; 6 chromatides ; 7 prophase I ; 8 grande diversité.",
      "keyRule": "Métaphase I : brassage interchromosomique (paires réparties au hasard). Prophase I : crossing-over (échange de fragments). → gamètes tous différents.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la diversité des enfants d’un couple",
        "statement": "Pourquoi deux frères (non jumeaux) ne sont-ils pas génétiquement identiques ?",
        "methodSteps": [
          "Chaque gamète des parents reçoit une combinaison différente de chromosomes (brassage interchromosomique).",
          "Les crossing-over créent en plus des chromosomes recombinés (brassage intrachromosomique)."
        ],
        "conclusion": "Chaque frère vient de gamètes différents : ils sont génétiquement différents."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Interchromosomique",
          "stepTheme": "Métaphase I",
          "stepTitle": "Le brassage interchromosomique",
          "paragraphText": "En **métaphase I**, chaque paire d’homologues se place **au hasard** : les chromosomes paternels et maternels sont **répartis au hasard** entre les gamètes.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q1",
            "type": "mcq",
            "prompt": "À quelle étape de la méiose a lieu le brassage interchromosomique ?",
            "options": [
              "En métaphase I, par la disposition au hasard des paires",
              "En télophase II",
              "Pendant la fécondation",
              "Pendant la spermiogenèse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque paire « tire à pile ou face »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Crossing-over",
          "stepTheme": "Prophase I",
          "stepTitle": "Le brassage intrachromosomique",
          "paragraphText": "En **prophase I**, des **chromatides** paternelles et maternelles d’une même paire **échangent des fragments** au niveau des **chiasmas** : c’est le **crossing-over**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q2",
            "type": "mcq",
            "prompt": "Qu’est-ce que le crossing-over ?",
            "options": [
              "Un échange de fragments entre chromatides de chromosomes homologues, en prophase I",
              "La séparation des chromatides en anaphase II",
              "La fusion de deux gamètes",
              "La perte d’un chromosome"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On obtient des chromosomes recombinés, « mixtes »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Gamètes",
          "stepTheme": "Résultat",
          "stepTitle": "Parentaux et recombinés",
          "paragraphText": "Les brassages donnent des **gamètes parentaux** (combinaisons des parents) et des **gamètes recombinés** (nouvelles combinaisons).",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on les gamètes portant de nouvelles combinaisons d’allèles, issues des brassages ?",
            "options": [
              "Des gamètes recombinés",
              "Des gamètes parentaux",
              "Des globules polaires",
              "Des ovogonies"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité 2 : 3 gamètes recombinés, 4 parentaux."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Diversité",
          "stepTheme": "Conséquence",
          "stepTitle": "La conséquence de la méiose",
          "paragraphText": "Grâce aux brassages, les gamètes sont **tous différents** : les enfants d’un même couple sont génétiquement **uniques**. C’est la **diversité** des individus.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est la principale conséquence des brassages de la méiose ?",
            "options": [
              "Une grande diversité génétique des individus issus des mêmes parents",
              "Des enfants tous identiques",
              "La disparition des chromosomes",
              "La stérilité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sauf les vrais jumeaux, issus d’un même œuf."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Méiose atypique",
          "stepTheme": "Anomalies",
          "stepTitle": "Quand la méiose se passe mal",
          "paragraphText": "Si des chromosomes **ne se séparent pas** normalement, les gamètes sont **anormaux** : c’est une **méiose atypique**, à l’origine d’anomalies comme la **trisomie 21**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on une méiose au cours de laquelle des chromosomes ne se séparent pas normalement ?",
            "options": [
              "Une méiose atypique",
              "Une mitose",
              "Une spermiogenèse",
              "Un crossing-over"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle produit des gamètes avec un chromosome en trop ou en moins."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Texte à trous",
          "stepTheme": "Activité 2",
          "stepTitle": "Compléter le texte",
          "paragraphText": "Un échange de fragments entre **chromatides** d’origine paternelle et maternelle a lieu à la **prophase I**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q6",
            "type": "mcq",
            "prompt": "Complète : « Un échange de fragments entre … d’origine paternelle et maternelle a lieu à la prophase I. »",
            "options": [
              "chromatides",
              "cellules de Sertoli",
              "globules polaires",
              "spermatogonies"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 6 chromatides ; 7 prophase I."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q1",
          "type": "mcq",
          "prompt": "À quelle étape de la méiose a lieu le brassage interchromosomique ?",
          "options": [
            "En métaphase I, par la disposition au hasard des paires",
            "En télophase II",
            "Pendant la fécondation",
            "Pendant la spermiogenèse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque paire « tire à pile ou face »."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q2",
          "type": "mcq",
          "prompt": "Qu’est-ce que le crossing-over ?",
          "options": [
            "Un échange de fragments entre chromatides de chromosomes homologues, en prophase I",
            "La séparation des chromatides en anaphase II",
            "La fusion de deux gamètes",
            "La perte d’un chromosome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On obtient des chromosomes recombinés, « mixtes »."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les gamètes portant de nouvelles combinaisons d’allèles, issues des brassages ?",
          "options": [
            "Des gamètes recombinés",
            "Des gamètes parentaux",
            "Des globules polaires",
            "Des ovogonies"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité 2 : 3 gamètes recombinés, 4 parentaux."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est la principale conséquence des brassages de la méiose ?",
          "options": [
            "Une grande diversité génétique des individus issus des mêmes parents",
            "Des enfants tous identiques",
            "La disparition des chromosomes",
            "La stérilité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sauf les vrais jumeaux, issus d’un même œuf."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on une méiose au cours de laquelle des chromosomes ne se séparent pas normalement ?",
          "options": [
            "Une méiose atypique",
            "Une mitose",
            "Une spermiogenèse",
            "Un crossing-over"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle produit des gamètes avec un chromosome en trop ou en moins."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p05_q6",
          "type": "mcq",
          "prompt": "Complète : « Un échange de fragments entre … d’origine paternelle et maternelle a lieu à la prophase I. »",
          "options": [
            "chromatides",
            "cellules de Sertoli",
            "globules polaires",
            "spermatogonies"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 6 chromatides ; 7 prophase I."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06",
      "order": 6,
      "title": "Comparer et évaluer",
      "summary": "Tableau comparatif corrigé et évolution du stock d’ovocytes.",
      "conceptExplanation": "- Ressemblances : les deux gamétogenèses comportent multiplication (mitoses), accroissement et maturation (méiose), et donnent des cellules génétiquement différentes.\n- Différences : la spermatogenèse a en plus une phase de différenciation ; elle commence à la puberté et est continue ; l’accroissement est faible ; un spermatocyte I donne 4 spermatozoïdes de même taille. L’ovogenèse commence avant la naissance, est discontinue et s’arrête à la ménopause ; l’accroissement est important ; un ovocyte I donne un seul gamète et des globules polaires (divisions inégales).\n- Évaluation (graphe) : le nombre d’ovogonies et d’ovocytes des deux ovaires augmente jusqu’à environ 7 millions vers le 5e mois de la vie fœtale (multiplication des ovogonies par mitoses), puis diminue : environ 1 à 2 millions à la naissance, quelques centaines de milliers à la puberté, presque zéro vers 50 ans (ménopause).\n- Après le 5e mois, plus aucune ovogonie ne se forme : la baisse est due à la dégénérescence (atrésie) de la plupart des follicules et, à partir de la puberté, aux ovulations (environ 400 dans une vie). La production des gamètes femelles est discontinue et limitée.\n- Corrections du document : son tableau dit que la méiose donne des cellules « identiques » dans la spermatogenèse et « différentes » dans l’ovogenèse ; dans les deux cas, les cellules sont génétiquement différentes, ce qui change c’est leur taille. Son corrigé explique la chute après la naissance par la « transformation progressive des ovogonies » : il n’y a plus d’ovogonies après la naissance ; la chute vient de l’atrésie des follicules et des ovulations.",
      "keyRule": "Spermatogenèse : puberté, continue, 4 gamètes égaux, différenciation. Ovogenèse : avant la naissance, discontinue, 1 gamète + globules polaires, stock qui s’épuise.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la baisse du stock d’ovocytes",
        "statement": "Pourquoi le nombre d’ovocytes baisse-t-il de 7 millions (5e mois de grossesse) à presque zéro vers 50 ans ?",
        "methodSteps": [
          "Après le 5e mois de la vie fœtale, il ne se forme plus d’ovogonies.",
          "La plupart des follicules dégénèrent (atrésie) ; quelques centaines seulement ovulent."
        ],
        "conclusion": "Le stock s’épuise jusqu’à la ménopause : la production de gamètes femelles est discontinue et limitée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepBadge": "Ressemblances",
          "stepTheme": "Tableau",
          "stepTitle": "Ce qui est commun",
          "paragraphText": "Les deux gamétogenèses comportent **multiplication**, **accroissement** et **maturation** (méiose), et donnent des cellules **génétiquement différentes**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q1",
            "type": "mcq",
            "prompt": "Quelles phases sont communes à la spermatogenèse et à l’ovogenèse ?",
            "options": [
              "La multiplication, l’accroissement et la maturation",
              "Seulement la différenciation",
              "Seulement la multiplication",
              "Aucune phase"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule la différenciation est propre à la spermatogenèse."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Spermatogenèse et ovogenèse : comparaison (tableau corrigé)",
            "caption": "Le document écrivait « méiose donnant des cellules identiques » pour la spermatogenèse : c’est la taille des cellules qui diffère, pas leur identité génétique.",
            "tableData": {
              "headers": [
                "",
                "Spermatogenèse",
                "Ovogenèse"
              ],
              "rows": [
                [
                  "Phases",
                  "Multiplication, accroissement, maturation, différenciation",
                  "Multiplication, accroissement, maturation"
                ],
                [
                  "Début et rythme",
                  "Dès la puberté, continue",
                  "Avant la naissance, puis discontinue ; s’arrête à la ménopause"
                ],
                [
                  "Accroissement",
                  "Faible",
                  "Important (réserves)"
                ],
                [
                  "Produit d’une cellule mère",
                  "4 spermatozoïdes",
                  "1 seul gamète et des globules polaires"
                ],
                [
                  "Divisions de la méiose",
                  "Égales : 4 cellules de même taille",
                  "Inégales : 1 grosse cellule et de petits globules polaires"
                ],
                [
                  "Cellules obtenues",
                  "Génétiquement différentes",
                  "Génétiquement différentes"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Rythme",
          "stepTheme": "Différence",
          "stepTitle": "Continue ou discontinue ?",
          "paragraphText": "La **spermatogenèse** commence à la **puberté** et est **continue** ; l’**ovogenèse** commence **avant la naissance**, est **discontinue** et s’arrête à la **ménopause**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations sur l’ovogenèse est exacte ?",
            "options": [
              "Elle commence avant la naissance, est discontinue et s’arrête à la ménopause",
              "Elle commence à la puberté et est continue toute la vie",
              "Elle commence à la ménopause",
              "Elle comporte une phase de différenciation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le contraire de la spermatogenèse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Identiques ?",
          "stepTheme": "Erreur du document",
          "stepTitle": "Des cellules identiques ?",
          "paragraphText": "Le tableau du document dit que la méiose donne des cellules « **identiques** » dans la spermatogenèse : c’est **faux**. Dans les deux cas, les cellules sont **génétiquement différentes** ; ce qui diffère, c’est leur **taille** (divisions égales chez l’homme, inégales chez la femme).",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q3",
            "type": "mcq",
            "prompt": "En quoi la méiose de la spermatogenèse diffère-t-elle de celle de l’ovogenèse ?",
            "options": [
              "Ses divisions sont égales (4 cellules de même taille) au lieu d’être inégales",
              "Elle donne des cellules génétiquement identiques",
              "Elle ne réduit pas le nombre de chromosomes",
              "Elle n’a qu’une seule division"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les brassages existent dans les deux sexes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Pic",
          "stepTheme": "Graphe",
          "stepTitle": "Le maximum du stock",
          "paragraphText": "Le nombre d’ovogonies et d’ovocytes atteint un **maximum d’environ 7 millions** vers le **5e mois** de la vie fœtale.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q4",
            "type": "mcq",
            "prompt": "D’après le graphe, quand le nombre d’ovogonies et d’ovocytes des deux ovaires est-il maximal ?",
            "options": [
              "Vers le 5e mois de la vie fœtale, avec environ 7 millions",
              "À la naissance, avec 20 millions",
              "À la puberté, avec 7 millions",
              "À 50 ans"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La multiplication des ovogonies a lieu avant la naissance."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Nombre d’ovogonies et d’ovocytes dans les deux ovaires",
            "caption": "Le stock maximal (environ 7 millions) est atteint vers le 5e mois de la vie fœtale ; il ne fait ensuite que diminuer jusqu’à la ménopause.",
            "svgContent": "<svg viewBox=\"0 0 560 270\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Nombre de cellules sexuelles : pic de 7 millions au 5e mois de grossesse, environ 2 millions à la naissance, quelques centaines de milliers à la puberté, presque zéro vers 50 ans\"><line x1=\"60\" y1=\"230\" x2=\"530\" y2=\"230\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"30\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"54\" y=\"184\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">2 M</text><text x=\"54\" y=\"134\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">4 M</text><text x=\"54\" y=\"84\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">6 M</text><text x=\"54\" y=\"34\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">8 M</text><polyline points=\"60.0,230.0 75.7,142.5 85.8,55.0 99.2,155.0 108.6,180.0 161.8,220.0 216.7,222.5 295.0,226.3 373.3,228.8 451.7,230.0 530.0,230.0\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"108.56666666666666\" y1=\"230\" x2=\"108.56666666666666\" y2=\"30\" stroke=\"#3B82F6\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 4\"/><text x=\"112.56666666666666\" y=\"115.00000000000001\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#3B82F6\">naissance</text><text x=\"91.85\" y=\"50\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">5e mois de grossesse : ≈ 7 millions</text><text x=\"161.83333333333331\" y=\"246\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">puberté</text><text x=\"451.66666666666663\" y=\"246\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">ménopause</text><text x=\"295\" y=\"262\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">âge (vie fœtale puis années)</text></svg>"
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Atrésie",
          "stepTheme": "Erreur du document",
          "stepTitle": "Pourquoi le stock diminue",
          "paragraphText": "Le corrigé parle de la « transformation des **ovogonies** » après la naissance : il n’y a **plus d’ovogonies** après le 5e mois de la vie fœtale. La baisse vient de l’**atrésie** (dégénérescence) des follicules et des **ovulations**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q5",
            "type": "mcq",
            "prompt": "Après la naissance, pourquoi le nombre d’ovocytes continue-t-il de diminuer ?",
            "options": [
              "À cause de la dégénérescence (atrésie) des follicules et des ovulations",
              "Parce que les ovogonies se multiplient",
              "Parce que les ovocytes deviennent des spermatozoïdes",
              "Il ne diminue pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il ne se forme plus de nouvelles cellules sexuelles chez la femme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Conclusion",
          "stepTheme": "Graphe",
          "stepTitle": "Une production limitée",
          "paragraphText": "Le stock d’ovocytes, constitué avant la naissance, **s’épuise** jusqu’à la **ménopause** : la production des gamètes femelles est **discontinue** et **limitée**.",
          "exercise": {
            "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q6",
            "type": "mcq",
            "prompt": "Que conclure de l’évolution du nombre de cellules sexuelles chez la femme ?",
            "options": [
              "La production des gamètes femelles est discontinue et limitée à un stock formé avant la naissance",
              "La femme produit des ovocytes en continu toute sa vie",
              "Le stock d’ovocytes augmente avec l’âge",
              "Les ovocytes se renouvellent à chaque cycle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Contrairement à l’homme, qui produit des spermatozoïdes en continu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q1",
          "type": "mcq",
          "prompt": "Quelles phases sont communes à la spermatogenèse et à l’ovogenèse ?",
          "options": [
            "La multiplication, l’accroissement et la maturation",
            "Seulement la différenciation",
            "Seulement la multiplication",
            "Aucune phase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule la différenciation est propre à la spermatogenèse."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations sur l’ovogenèse est exacte ?",
          "options": [
            "Elle commence avant la naissance, est discontinue et s’arrête à la ménopause",
            "Elle commence à la puberté et est continue toute la vie",
            "Elle commence à la ménopause",
            "Elle comporte une phase de différenciation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le contraire de la spermatogenèse."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q3",
          "type": "mcq",
          "prompt": "En quoi la méiose de la spermatogenèse diffère-t-elle de celle de l’ovogenèse ?",
          "options": [
            "Ses divisions sont égales (4 cellules de même taille) au lieu d’être inégales",
            "Elle donne des cellules génétiquement identiques",
            "Elle ne réduit pas le nombre de chromosomes",
            "Elle n’a qu’une seule division"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les brassages existent dans les deux sexes."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q4",
          "type": "mcq",
          "prompt": "D’après le graphe, quand le nombre d’ovogonies et d’ovocytes des deux ovaires est-il maximal ?",
          "options": [
            "Vers le 5e mois de la vie fœtale, avec environ 7 millions",
            "À la naissance, avec 20 millions",
            "À la puberté, avec 7 millions",
            "À 50 ans"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La multiplication des ovogonies a lieu avant la naissance."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q5",
          "type": "mcq",
          "prompt": "Après la naissance, pourquoi le nombre d’ovocytes continue-t-il de diminuer ?",
          "options": [
            "À cause de la dégénérescence (atrésie) des follicules et des ovulations",
            "Parce que les ovogonies se multiplient",
            "Parce que les ovocytes deviennent des spermatozoïdes",
            "Il ne diminue pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il ne se forme plus de nouvelles cellules sexuelles chez la femme."
        },
        {
          "id": "premiere_c_svt_l04_gametogenese_mammiferes_p06_q6",
          "type": "mcq",
          "prompt": "Que conclure de l’évolution du nombre de cellules sexuelles chez la femme ?",
          "options": [
            "La production des gamètes femelles est discontinue et limitée à un stock formé avant la naissance",
            "La femme produit des ovocytes en continu toute sa vie",
            "Le stock d’ovocytes augmente avec l’âge",
            "Les ovocytes se renouvellent à chaque cycle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Contrairement à l’homme, qui produit des spermatozoïdes en continu."
        }
      ]
    }
  ]
};
