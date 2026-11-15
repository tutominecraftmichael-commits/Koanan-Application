import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L7_Les mouvements des plaques lithosphériques.pdf (Mon école à la maison ; thème « La géodynamique interne » ; le document l’intitule « Leçon 2 ») ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt_c.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L07_MOUVEMENTS_PLAQUES: CurriculumChapter = {
  "id": "premiere_d_svt_l07_mouvements_plaques",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 7,
  "title": "Leçon 7 : Les mouvements des plaques lithosphériques",
  "summary": "Répartition des séismes et des volcans, plaques lithosphériques, fond océanique et dorsale, accrétion et expansion, courants de convection, divergence, convergence et coulissement, subduction, collision et obduction.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère D_L7_Les mouvements des plaques lithosphériques.pdf (Mon école à la maison ; thème « La géodynamique interne » ; le document l’intitule « Leçon 2 »)",
  "points": [
    {
      "id": "premiere_d_svt_l07_mouvements_plaques_p01",
      "order": 1,
      "title": "Séismes, volcans et plaques",
      "summary": "Des zones actives qui découpent la lithosphère en plaques.",
      "conceptExplanation": "Situation : un élève voit à la télévision des alpinistes sur l’Himalaya, entre l’Inde et l’Asie. Le commentateur explique que cette chaîne est née de la rencontre de la plaque indienne et de la plaque asiatique. La classe veut identifier les plaques, expliquer leurs mouvements et leurs conséquences.\n- Sur une carte du monde, les séismes et les volcans se trouvent dans les mêmes zones : autour du Pacifique (zone circum-pacifique, la « ceinture de feu »), le long des dorsales des océans Atlantique et Indien, et des Açores à l’Indonésie (fosse de Java) en passant par la Méditerranée.\n- Ces zones actives et instables découpent la lithosphère en grands blocs rigides et stables : les plaques lithosphériques.\n- Une plaque lithosphérique est une partie rigide et mobile de la lithosphère, limitée par des zones actives (séismes, volcans).\n- Sept grandes plaques : eurasiatique, africaine, australo-indienne, nord-américaine, sud-américaine, pacifique, antarctique. Plaques plus petites : arabique, Nazca, Caraïbes, Cocos, Philippines.\n- Une plaque peut être océanique (Pacifique), continentale (arabique, en grande partie) ou à la fois océanique et continentale (africaine).\n- Corrections du document : son titre « Les mouvements des plaques se produisent grâce aux séismes » renverse les rôles. Les séismes et les volcans ne font pas bouger les plaques : ce sont des conséquences de leurs mouvements, qui marquent leurs limites. Sur sa carte, l’océan du nord est l’océan glacial Arctique, pas « antarctique ».",
      "keyRule": "Séismes et volcans marquent les limites des plaques ; ils ne les font pas bouger. Plaque : bloc rigide et mobile de la lithosphère.",
      "formulas": [],
      "workedExample": {
        "title": "Délimiter les plaques",
        "statement": "Comment repère-t-on les limites des plaques sur une carte ?",
        "methodSteps": [
          "On repère les zones où se concentrent les séismes et les volcans.",
          "Entre ces zones actives, la lithosphère est stable : ce sont les plaques."
        ],
        "conclusion": "Les alignements de séismes et de volcans dessinent les limites des plaques."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Répartition",
          "stepTheme": "Carte",
          "stepTitle": "Séismes et volcans au même endroit",
          "paragraphText": "Séismes et volcans se concentrent dans **les mêmes zones** : autour du **Pacifique**, le long des **dorsales**, et de la **Méditerranée** à l’Indonésie.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p01_q1",
            "type": "mcq",
            "prompt": "Sur une carte du monde, comment sont répartis les séismes et les volcans ?",
            "options": [
              "Ils sont concentrés dans les mêmes zones étroites, comme le pourtour du Pacifique et les dorsales",
              "Ils sont répartis au hasard sur tout le globe",
              "Ils sont tous au centre des continents",
              "Ils sont seulement aux pôles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces zones actives sont les limites des plaques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Plaque",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’une plaque ?",
          "paragraphText": "Une **plaque lithosphérique** est un bloc **rigide** et **mobile** de la lithosphère, limité par des **zones actives** (séismes, volcans).",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p01_q2",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’une plaque lithosphérique ?",
            "options": [
              "Un bloc rigide et mobile de la lithosphère, limité par des zones de séismes et de volcans",
              "Un continent seulement",
              "Un océan seulement",
              "Une couche liquide du manteau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une plaque peut porter un continent et un océan."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les plaques lithosphériques",
            "caption": "Sept grandes plaques et quelques plaques plus petites.",
            "tableData": {
              "headers": [
                "Grandes plaques",
                "Plaques plus petites"
              ],
              "rows": [
                [
                  "Eurasiatique",
                  "Arabique"
                ],
                [
                  "Africaine",
                  "Nazca"
                ],
                [
                  "Australo-indienne",
                  "Caraïbes (Antilles)"
                ],
                [
                  "Nord-américaine",
                  "Cocos"
                ],
                [
                  "Sud-américaine",
                  "Philippines"
                ],
                [
                  "Pacifique",
                  "—"
                ],
                [
                  "Antarctique",
                  "—"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Ceinture de feu",
          "stepTheme": "Zones actives",
          "stepTitle": "Le pourtour du Pacifique",
          "paragraphText": "La **zone circum-pacifique**, ou « **ceinture de feu** », entoure l’océan Pacifique : on y trouve de nombreux volcans et séismes.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p01_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la zone de volcans et de séismes qui entoure l’océan Pacifique ?",
            "options": [
              "La ceinture de feu (zone circum-pacifique)",
              "La dorsale atlantique",
              "Le rift est-africain",
              "La plaine abyssale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Japon, Indonésie, Andes, Alaska…"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Types",
          "stepTheme": "Classer",
          "stepTitle": "Océanique ou continentale ?",
          "paragraphText": "La plaque **pacifique** est surtout **océanique** ; la plaque **africaine** porte un continent et une partie d’océan : elle est **océano-continentale**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p01_q4",
            "type": "mcq",
            "prompt": "La plaque africaine porte le continent africain et une partie des océans Atlantique et Indien. Comment la qualifie-t-on ?",
            "options": [
              "Océano-continentale",
              "Uniquement océanique",
              "Uniquement continentale",
              "Ce n’est pas une plaque"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La plaque pacifique, elle, est surtout océanique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Cause ou conséquence",
          "stepTheme": "Correction du document",
          "stepTitle": "Les séismes ne poussent pas les plaques",
          "paragraphText": "Le document dit que les plaques bougent « **grâce aux séismes** ». C’est l’inverse : les **séismes** et les **volcans** sont des **conséquences** du mouvement des plaques.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p01_q5",
            "type": "mcq",
            "prompt": "Quel est le lien entre les séismes et le mouvement des plaques ?",
            "options": [
              "Les séismes sont des conséquences des mouvements des plaques, à leurs limites",
              "Les séismes font avancer les plaques",
              "Les séismes n’ont aucun lien avec les plaques",
              "Les séismes se produisent au centre des plaques seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le moteur est la chaleur interne du globe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Plaques",
          "stepTheme": "Activité",
          "stepTitle": "Nommer les grandes plaques",
          "paragraphText": "Les **7 grandes plaques** : eurasiatique, africaine, australo-indienne, nord-américaine, sud-américaine, pacifique, antarctique.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p01_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces plaques est une petite plaque, et non une des sept grandes plaques ?",
            "options": [
              "La plaque Nazca",
              "La plaque africaine",
              "La plaque pacifique",
              "La plaque eurasiatique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Nazca est à l’ouest de l’Amérique du Sud."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p01_q1",
          "type": "mcq",
          "prompt": "Sur une carte du monde, comment sont répartis les séismes et les volcans ?",
          "options": [
            "Ils sont concentrés dans les mêmes zones étroites, comme le pourtour du Pacifique et les dorsales",
            "Ils sont répartis au hasard sur tout le globe",
            "Ils sont tous au centre des continents",
            "Ils sont seulement aux pôles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces zones actives sont les limites des plaques."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p01_q2",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’une plaque lithosphérique ?",
          "options": [
            "Un bloc rigide et mobile de la lithosphère, limité par des zones de séismes et de volcans",
            "Un continent seulement",
            "Un océan seulement",
            "Une couche liquide du manteau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une plaque peut porter un continent et un océan."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p01_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la zone de volcans et de séismes qui entoure l’océan Pacifique ?",
          "options": [
            "La ceinture de feu (zone circum-pacifique)",
            "La dorsale atlantique",
            "Le rift est-africain",
            "La plaine abyssale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Japon, Indonésie, Andes, Alaska…"
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p01_q4",
          "type": "mcq",
          "prompt": "La plaque africaine porte le continent africain et une partie des océans Atlantique et Indien. Comment la qualifie-t-on ?",
          "options": [
            "Océano-continentale",
            "Uniquement océanique",
            "Uniquement continentale",
            "Ce n’est pas une plaque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La plaque pacifique, elle, est surtout océanique."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p01_q5",
          "type": "mcq",
          "prompt": "Quel est le lien entre les séismes et le mouvement des plaques ?",
          "options": [
            "Les séismes sont des conséquences des mouvements des plaques, à leurs limites",
            "Les séismes font avancer les plaques",
            "Les séismes n’ont aucun lien avec les plaques",
            "Les séismes se produisent au centre des plaques seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le moteur est la chaleur interne du globe."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p01_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces plaques est une petite plaque, et non une des sept grandes plaques ?",
          "options": [
            "La plaque Nazca",
            "La plaque africaine",
            "La plaque pacifique",
            "La plaque eurasiatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Nazca est à l’ouest de l’Amérique du Sud."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l07_mouvements_plaques_p02",
      "order": 2,
      "title": "Le fond océanique",
      "summary": "Plateau continental, talus, plaine abyssale, dorsale et rift.",
      "conceptExplanation": "- Du continent vers le centre de l’océan Atlantique, on trouve : le plateau continental (relief plat, peu profond, qui prolonge le continent), le talus (forte pente), la plaine abyssale (relief plat, vers 5 000 m de profondeur), puis la dorsale médio-océanique.\n- La dorsale est une chaîne de montagnes sous-marine. Son axe est creusé d’un fossé, le rift, large de 25 à 50 km.\n- Le plancher océanique est formé, du bas vers le haut, de péridotites, de gabbros, de basaltes en filons, de basaltes en coussins (pillow-lavas) et d’une couche de sédiments : il est de nature basaltique.\n- Les fosses océaniques sont des dépressions étroites et très profondes (plus de 10 km parfois), en bordure de certains continents ou le long d’arcs d’îles, là où une plaque plonge sous une autre.\n- Correction du document : il place les fosses « au milieu des océans ». Au milieu des océans se trouve le rift de la dorsale ; les fosses sont en bordure des océans, dans les zones de subduction (fosse du Pérou-Chili, fosses du Japon).",
      "keyRule": "Du continent au centre de l’océan : plateau continental, talus, plaine abyssale, dorsale (avec le rift). Plancher : péridotites, gabbros, basaltes, sédiments.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner les roches du plancher",
        "statement": "Péridotites (A), basaltes en coussins (B), basaltes en filons (C), gabbros (D) : ordre du bas vers le haut ?",
        "methodSteps": [
          "En bas, le manteau : péridotites.",
          "Puis gabbros, basaltes en filons, et en haut les basaltes en coussins."
        ],
        "conclusion": "A – D – C – B."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Profil",
          "stepTheme": "Topographie",
          "stepTitle": "Du continent au centre de l’océan",
          "paragraphText": "Du continent vers l’axe de l’océan : **plateau continental**, **talus**, **plaine abyssale**, **dorsale**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p02_q1",
            "type": "mcq",
            "prompt": "Dans l’océan Atlantique, quel relief trouve-t-on au centre, à égale distance de l’Amérique du Sud et de l’Afrique ?",
            "options": [
              "Une dorsale médio-océanique",
              "Une plaine abyssale",
              "Un plateau continental",
              "Une fosse océanique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle forme une chaîne de montagnes sous-marine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Rift",
          "stepTheme": "Dorsale",
          "stepTitle": "Le fossé de la dorsale",
          "paragraphText": "L’axe de la dorsale est creusé d’un **fossé** de **25 à 50 km** de large : le **rift**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p02_q2",
            "type": "mcq",
            "prompt": "Comment s’appelle le fossé situé dans l’axe d’une dorsale océanique ?",
            "options": [
              "Le rift",
              "La fosse",
              "Le talus",
              "La plaine abyssale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est là que sort le magma."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Talus et plaine",
          "stepTheme": "Reliefs",
          "stepTitle": "Pentes et plaines",
          "paragraphText": "Le **talus** est un relief à **forte pente** à la limite océan-continent ; la **plaine abyssale** est un relief **plat** et profond.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p02_q3",
            "type": "mcq",
            "prompt": "Quel relief du fond océanique est plat et situé vers 5 000 m de profondeur, entre le talus et la dorsale ?",
            "options": [
              "La plaine abyssale",
              "Le plateau continental",
              "Le rift",
              "La fosse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le plateau continental, lui, est peu profond."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Roches",
          "stepTheme": "Activité",
          "stepTitle": "Les roches du plancher",
          "paragraphText": "Du bas vers le haut : **péridotites**, **gabbros**, **basaltes en filons**, **basaltes en coussins**, **sédiments**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p02_q4",
            "type": "mcq",
            "prompt": "Péridotites (A), basaltes en coussins (B), basaltes en filons (C), gabbros (D) : quel est leur ordre dans le plancher océanique, du bas vers le haut ?",
            "options": [
              "A – D – C – B",
              "B – C – D – A",
              "D – A – B – C",
              "A – B – C – D"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les basaltes en coussins se forment au contact de l’eau."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les roches du plancher océanique",
            "caption": "Du bas vers le haut (activité d’application : A – D – C – B).",
            "tableData": {
              "headers": [
                "Position",
                "Roche"
              ],
              "rows": [
                [
                  "En haut",
                  "Sédiments"
                ],
                [
                  "",
                  "Basaltes en coussins (pillow-lavas) – B"
                ],
                [
                  "",
                  "Basaltes en filons – C"
                ],
                [
                  "",
                  "Gabbros – D"
                ],
                [
                  "En bas",
                  "Péridotites (manteau) – A"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Basaltique",
          "stepTheme": "Nature",
          "stepTitle": "Un plancher basaltique",
          "paragraphText": "Le plancher océanique est de nature **basaltique** : basaltes et gabbros viennent d’un **magma** issu du manteau.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p02_q5",
            "type": "mcq",
            "prompt": "De quelle nature est principalement la croûte océanique ?",
            "options": [
              "Basaltique (basaltes et gabbros)",
              "Granitique",
              "Calcaire",
              "Sableuse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La croûte continentale, elle, est surtout granitique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Fosse ou rift",
          "stepTheme": "Correction du document",
          "stepTitle": "Où sont les fosses ?",
          "paragraphText": "Le document place les fosses « au **milieu** des océans ». Au milieu se trouve le **rift** ; les **fosses** sont en **bordure** des océans, là où une plaque **plonge** sous une autre.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p02_q6",
            "type": "mcq",
            "prompt": "Où se trouvent les fosses océaniques, les zones les plus profondes des océans ?",
            "options": [
              "En bordure de certains continents ou d’arcs d’îles, là où une plaque plonge sous une autre",
              "Au milieu des océans, dans l’axe des dorsales",
              "Sur les plateaux continentaux",
              "Au centre des continents"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exemple : fosse du Pérou-Chili, le long des Andes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p02_q1",
          "type": "mcq",
          "prompt": "Dans l’océan Atlantique, quel relief trouve-t-on au centre, à égale distance de l’Amérique du Sud et de l’Afrique ?",
          "options": [
            "Une dorsale médio-océanique",
            "Une plaine abyssale",
            "Un plateau continental",
            "Une fosse océanique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle forme une chaîne de montagnes sous-marine."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p02_q2",
          "type": "mcq",
          "prompt": "Comment s’appelle le fossé situé dans l’axe d’une dorsale océanique ?",
          "options": [
            "Le rift",
            "La fosse",
            "Le talus",
            "La plaine abyssale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est là que sort le magma."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p02_q3",
          "type": "mcq",
          "prompt": "Quel relief du fond océanique est plat et situé vers 5 000 m de profondeur, entre le talus et la dorsale ?",
          "options": [
            "La plaine abyssale",
            "Le plateau continental",
            "Le rift",
            "La fosse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le plateau continental, lui, est peu profond."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p02_q4",
          "type": "mcq",
          "prompt": "Péridotites (A), basaltes en coussins (B), basaltes en filons (C), gabbros (D) : quel est leur ordre dans le plancher océanique, du bas vers le haut ?",
          "options": [
            "A – D – C – B",
            "B – C – D – A",
            "D – A – B – C",
            "A – B – C – D"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les basaltes en coussins se forment au contact de l’eau."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p02_q5",
          "type": "mcq",
          "prompt": "De quelle nature est principalement la croûte océanique ?",
          "options": [
            "Basaltique (basaltes et gabbros)",
            "Granitique",
            "Calcaire",
            "Sableuse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La croûte continentale, elle, est surtout granitique."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p02_q6",
          "type": "mcq",
          "prompt": "Où se trouvent les fosses océaniques, les zones les plus profondes des océans ?",
          "options": [
            "En bordure de certains continents ou d’arcs d’îles, là où une plaque plonge sous une autre",
            "Au milieu des océans, dans l’axe des dorsales",
            "Sur les plateaux continentaux",
            "Au centre des continents"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exemple : fosse du Pérou-Chili, le long des Andes."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l07_mouvements_plaques_p03",
      "order": 3,
      "title": "Accrétion et expansion océanique",
      "summary": "Un plancher qui se renouvelle à partir de la dorsale.",
      "conceptExplanation": "- L’âge du plancher de l’Atlantique est symétrique de part et d’autre du rift : il est très jeune au centre et de plus en plus ancien en s’éloignant (jusqu’à 190 millions d’années environ près des continents).\n- Au rift, du magma basaltique monte du manteau par des fissures. Il se refroidit et forme une nouvelle croûte océanique. Une nouvelle fissure s’ouvre, du magma remonte, et ainsi de suite : c’est l’accrétion.\n- La nouvelle croûte repousse les plus anciennes de chaque côté : le fond océanique s’élargit, c’est l’expansion océanique. L’Atlantique s’élargit de quelques centimètres par an.\n- Les sédiments sont de plus en plus épais en s’éloignant de la dorsale, car le plancher y est plus ancien et a reçu des sédiments plus longtemps.\n- L’expansion entraîne les plaques : c’est la tectonique des plaques. La dorsale en est le siège, mais pas le moteur.\n- Nuance au document : son activité dit que la lave sort « en permanence » à la dorsale. Les émissions sont discontinues (fissure après fissure) ; c’est à l’échelle des temps géologiques que l’accrétion paraît continue.",
      "keyRule": "Accrétion : formation de croûte océanique au rift. Expansion : élargissement du fond océanique. Âges symétriques, croissants en s’éloignant du rift.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter la symétrie des âges",
        "statement": "Pourquoi le plancher est-il de plus en plus âgé en s’éloignant du rift, des deux côtés ?",
        "methodSteps": [
          "La croûte se forme au rift, puis elle est repoussée de chaque côté.",
          "Plus elle est loin du rift, plus elle s’est formée il y a longtemps."
        ],
        "conclusion": "Le plancher océanique se renouvelle à partir de la dorsale : c’est l’expansion océanique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Âges",
          "stepTheme": "Analyse",
          "stepTitle": "Une symétrie des âges",
          "paragraphText": "L’âge du plancher est **symétrique** par rapport au rift : **jeune** au centre, de plus en plus **ancien** en s’éloignant.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p03_q1",
            "type": "mcq",
            "prompt": "Comment varie l’âge du plancher de l’océan Atlantique quand on s’éloigne du rift de la dorsale ?",
            "options": [
              "Il augmente, de façon symétrique des deux côtés du rift",
              "Il diminue en s’éloignant du rift",
              "Il est le même partout",
              "Il n’augmente que vers l’Afrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les plus vieux planchers sont près des continents."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Accrétion et expansion océanique",
            "caption": "Le magma qui remonte au rift forme une nouvelle croûte océanique ; elle écarte les plus anciennes de part et d’autre.",
            "svgContent": "<svg viewBox=\"0 0 560 226\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Dorsale océanique : le magma remonte au rift, le plancher le plus récent est au centre, de plus en plus âgé en s’éloignant, de façon symétrique\"><rect x=\"286\" y=\"110\" width=\"40\" height=\"26\" fill=\"#EF4444\" fill-opacity=\"0.55\" stroke=\"#EF4444\" stroke-width=\"1\"/><rect x=\"234\" y=\"110\" width=\"40\" height=\"26\" fill=\"#EF4444\" fill-opacity=\"0.55\" stroke=\"#EF4444\" stroke-width=\"1\"/><rect x=\"326\" y=\"110\" width=\"40\" height=\"26\" fill=\"#F59E0B\" fill-opacity=\"0.5\" stroke=\"#F59E0B\" stroke-width=\"1\"/><rect x=\"194\" y=\"110\" width=\"40\" height=\"26\" fill=\"#F59E0B\" fill-opacity=\"0.5\" stroke=\"#F59E0B\" stroke-width=\"1\"/><rect x=\"366\" y=\"110\" width=\"40\" height=\"26\" fill=\"#10B981\" fill-opacity=\"0.4\" stroke=\"#10B981\" stroke-width=\"1\"/><rect x=\"154\" y=\"110\" width=\"40\" height=\"26\" fill=\"#10B981\" fill-opacity=\"0.4\" stroke=\"#10B981\" stroke-width=\"1\"/><rect x=\"406\" y=\"110\" width=\"40\" height=\"26\" fill=\"#3B82F6\" fill-opacity=\"0.35\" stroke=\"#3B82F6\" stroke-width=\"1\"/><rect x=\"114\" y=\"110\" width=\"40\" height=\"26\" fill=\"#3B82F6\" fill-opacity=\"0.35\" stroke=\"#3B82F6\" stroke-width=\"1\"/><rect x=\"446\" y=\"110\" width=\"40\" height=\"26\" fill=\"#8B5CF6\" fill-opacity=\"0.3\" stroke=\"#8B5CF6\" stroke-width=\"1\"/><rect x=\"74\" y=\"110\" width=\"40\" height=\"26\" fill=\"#8B5CF6\" fill-opacity=\"0.3\" stroke=\"#8B5CF6\" stroke-width=\"1\"/><path d=\"M274,110 L280,98 L286,110 Z\" fill=\"#EF4444\"/><line x1=\"280\" y1=\"200\" x2=\"280.0\" y2=\"151.0\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"280,142 275.0,151.0 285.0,151.0\" fill=\"#EF4444\"/><text x=\"280\" y=\"216\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">remontée de magma</text><line x1=\"330\" y1=\"92\" x2=\"461.0\" y2=\"92.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"470,92 461.0,87.0 461.0,97.0\" fill=\"#94A3B8\"/><line x1=\"230\" y1=\"92\" x2=\"99.0\" y2=\"92.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"90,92 99.0,97.0 99.0,87.0\" fill=\"#94A3B8\"/><text x=\"280\" y=\"80\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">rift (dorsale)</text><text x=\"70\" y=\"156\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">plus ancien</text><text x=\"490\" y=\"156\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">plus ancien</text><text x=\"280\" y=\"40\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">Les bandes de même âge sont symétriques de part et d’autre du rift</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Accrétion",
          "stepTheme": "Mécanisme",
          "stepTitle": "Fabriquer du plancher",
          "paragraphText": "Au rift, du **magma basaltique** remonte, se refroidit et forme une **nouvelle croûte** : c’est l’**accrétion**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p03_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la formation de nouvelle croûte océanique à partir du magma qui remonte au rift ?",
            "options": [
              "L’accrétion",
              "La subduction",
              "L’érosion",
              "La collision"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle se fait fissure après fissure."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Expansion",
          "stepTheme": "Mécanisme",
          "stepTitle": "Un océan qui s’élargit",
          "paragraphText": "La croûte nouvelle **repousse** les plus anciennes : le fond océanique **s’élargit**. C’est l’**expansion océanique**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p03_q3",
            "type": "mcq",
            "prompt": "Pourquoi l’océan Atlantique s’élargit-il de quelques centimètres par an ?",
            "options": [
              "Parce que de la nouvelle croûte se forme au rift et repousse les plus anciennes de chaque côté",
              "Parce que le niveau de la mer monte",
              "Parce que les continents fondent",
              "Parce que les fosses se remplissent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’expansion des fonds océaniques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Sédiments",
          "stepTheme": "Indice",
          "stepTitle": "Des sédiments plus épais au loin",
          "paragraphText": "Les **sédiments** sont de plus en plus **épais** en s’éloignant de la dorsale : le plancher y est plus **ancien**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi la couche de sédiments est-elle plus épaisse loin de la dorsale qu’à côté ?",
            "options": [
              "Parce que le plancher y est plus ancien et a reçu des sédiments plus longtemps",
              "Parce que le courant y est plus fort",
              "Parce que la dorsale produit des sédiments",
              "Parce que l’eau y est plus chaude"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est un indice de l’expansion."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Siège",
          "stepTheme": "Notion",
          "stepTitle": "Siège mais pas moteur",
          "paragraphText": "La dorsale est le **siège** de la tectonique des plaques, mais pas son **moteur** : le moteur est la **chaleur interne** du globe.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p03_q5",
            "type": "mcq",
            "prompt": "Quel est le moteur du mouvement des plaques lithosphériques ?",
            "options": [
              "La chaleur interne du globe, qui entretient des courants de convection",
              "Les dorsales elles-mêmes",
              "Les séismes",
              "Le vent et les marées"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Conclusion générale du document."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Pas en permanence",
          "stepTheme": "Nuance",
          "stepTitle": "Une lave qui sort par épisodes",
          "paragraphText": "Le document dit que la lave sort « **en permanence** » à la dorsale. Les émissions sont **discontinues**, fissure après fissure ; à l’échelle des **temps géologiques**, l’accrétion paraît continue.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p03_q6",
            "type": "mcq",
            "prompt": "À une dorsale, comment la lave est-elle émise ?",
            "options": [
              "Par épisodes, fissure après fissure, ce qui forme peu à peu une croûte continue",
              "Sans aucune interruption, comme une rivière",
              "Jamais : la dorsale est inactive",
              "Seulement une fois tous les 100 millions d’années"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque fissure se referme en se refroidissant."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p03_q1",
          "type": "mcq",
          "prompt": "Comment varie l’âge du plancher de l’océan Atlantique quand on s’éloigne du rift de la dorsale ?",
          "options": [
            "Il augmente, de façon symétrique des deux côtés du rift",
            "Il diminue en s’éloignant du rift",
            "Il est le même partout",
            "Il n’augmente que vers l’Afrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les plus vieux planchers sont près des continents."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p03_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la formation de nouvelle croûte océanique à partir du magma qui remonte au rift ?",
          "options": [
            "L’accrétion",
            "La subduction",
            "L’érosion",
            "La collision"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle se fait fissure après fissure."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p03_q3",
          "type": "mcq",
          "prompt": "Pourquoi l’océan Atlantique s’élargit-il de quelques centimètres par an ?",
          "options": [
            "Parce que de la nouvelle croûte se forme au rift et repousse les plus anciennes de chaque côté",
            "Parce que le niveau de la mer monte",
            "Parce que les continents fondent",
            "Parce que les fosses se remplissent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’expansion des fonds océaniques."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi la couche de sédiments est-elle plus épaisse loin de la dorsale qu’à côté ?",
          "options": [
            "Parce que le plancher y est plus ancien et a reçu des sédiments plus longtemps",
            "Parce que le courant y est plus fort",
            "Parce que la dorsale produit des sédiments",
            "Parce que l’eau y est plus chaude"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est un indice de l’expansion."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p03_q5",
          "type": "mcq",
          "prompt": "Quel est le moteur du mouvement des plaques lithosphériques ?",
          "options": [
            "La chaleur interne du globe, qui entretient des courants de convection",
            "Les dorsales elles-mêmes",
            "Les séismes",
            "Le vent et les marées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Conclusion générale du document."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p03_q6",
          "type": "mcq",
          "prompt": "À une dorsale, comment la lave est-elle émise ?",
          "options": [
            "Par épisodes, fissure après fissure, ce qui forme peu à peu une croûte continue",
            "Sans aucune interruption, comme une rivière",
            "Jamais : la dorsale est inactive",
            "Seulement une fois tous les 100 millions d’années"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque fissure se referme en se refroidissant."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l07_mouvements_plaques_p04",
      "order": 4,
      "title": "Le moteur : la convection",
      "summary": "Courants de convection et trois types de mouvements.",
      "conceptExplanation": "- Expérience : des grains de riz dans de l’eau chauffée montent au-dessus de la flamme, s’étalent en surface puis redescendent sur les côtés : ils suivent des boucles. Ils sont entraînés par des courants de convection.\n- La convection est un transfert de chaleur d’une zone chaude vers une zone froide par le déplacement de la matière elle-même.\n- L’intérieur du globe est chaud ; sa chaleur vient surtout de la désintégration d’éléments radioactifs du manteau (uranium, thorium, potassium 40). Le manteau, solide mais capable de se déformer très lentement, est animé de courants de convection qui entraînent les plaques : ce sont des forces tectoniques.\n- Trois types de mouvements : la divergence (les plaques s’écartent : dorsales, ouverture des océans), la convergence (les plaques se rapprochent : subduction, collision) et le coulissement ou décrochement (les plaques glissent l’une le long de l’autre).\n- Corrections du document :\n- il inverse les définitions : il écrit que la convergence « sépare » et que la divergence « rapproche » les plaques. C’est le contraire ;\n- son texte à trous dit que les plaques glissent sur « l’asthénosphère liquide » : l’asthénosphère est solide, mais assez chaude pour se déformer lentement ;\n- son corrigé parle de « fission » des isotopes radioactifs : il s’agit de leur désintégration naturelle.",
      "keyRule": "Chaleur interne (radioactivité) → courants de convection dans le manteau → mouvements des plaques. Divergence : écartement ; convergence : rapprochement ; coulissement : glissement latéral.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’expérience du riz",
        "statement": "Pourquoi les grains de riz tournent-ils en boucle dans l’eau chauffée ?",
        "methodSteps": [
          "L’eau chauffée au fond devient plus légère et monte ; refroidie en surface, elle redescend.",
          "Ces courants de convection entraînent les grains de riz."
        ],
        "conclusion": "De la même façon, les courants de convection du manteau entraînent les plaques."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Riz",
          "stepTheme": "Expérience",
          "stepTitle": "Des grains qui tournent",
          "paragraphText": "Dans l’eau chauffée, les **grains de riz** montent au-dessus de la flamme et redescendent sur les côtés : ils suivent des **courants de convection**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p04_q1",
            "type": "mcq",
            "prompt": "Dans un ballon d’eau chauffé par-dessous, des grains de riz montent au centre et redescendent sur les côtés. Qu’est-ce qui les entraîne ?",
            "options": [
              "Des courants de convection de l’eau, de la zone chaude vers la zone froide",
              "Le vent",
              "Le poids des grains seulement",
              "Une réaction chimique du riz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’eau chaude, plus légère, monte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Convection",
          "stepTheme": "Définition",
          "stepTitle": "La convection",
          "paragraphText": "La **convection** transporte la **chaleur** d’une zone **chaude** vers une zone **froide** par le **déplacement de la matière** elle-même.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p04_q2",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’un courant de convection ?",
            "options": [
              "Un déplacement de matière qui transporte la chaleur d’une zone chaude vers une zone froide",
              "Un courant électrique dans les roches",
              "Un vent à la surface du sol",
              "Une vague dans l’océan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans le manteau, il est extrêmement lent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Radioactivité",
          "stepTheme": "Origine",
          "stepTitle": "D’où vient la chaleur ?",
          "paragraphText": "La chaleur interne vient surtout de la **désintégration** d’éléments **radioactifs** du manteau : **uranium**, **thorium**, **potassium 40**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p04_q3",
            "type": "mcq",
            "prompt": "D’où vient principalement la chaleur interne du globe qui entretient la convection du manteau ?",
            "options": [
              "De la désintégration d’éléments radioactifs comme l’uranium, le thorium et le potassium 40",
              "Du Soleil",
              "Des volcans",
              "Du frottement des océans"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé parle à tort de « fission »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Divergence",
          "stepTheme": "Erreur du document",
          "stepTitle": "Qui écarte, qui rapproche ?",
          "paragraphText": "Le document **inverse** les définitions. La **divergence** **écarte** les plaques (dorsales) ; la **convergence** les **rapproche** (subduction, collision).",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p04_q4",
            "type": "mcq",
            "prompt": "Que se passe-t-il entre deux plaques en mouvement de divergence ?",
            "options": [
              "Elles s’écartent l’une de l’autre, comme à une dorsale",
              "Elles se rapprochent",
              "Elles glissent côte à côte",
              "Elles restent immobiles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dé-verger : partir dans des directions opposées."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les trois types de mouvements",
            "caption": "Divergence : les plaques s’écartent. Convergence : elles se rapprochent. Coulissement (décrochement) : elles glissent l’une le long de l’autre.",
            "svgContent": "<svg viewBox=\"0 0 560 128\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Trois types de mouvements : divergence, convergence et coulissement des plaques\"><rect x=\"20\" y=\"50\" width=\"70\" height=\"28\" rx=\"4\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.8\"/><rect x=\"96\" y=\"50\" width=\"70\" height=\"28\" rx=\"4\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.8\"/><line x1=\"70\" y1=\"64\" x2=\"49.0\" y2=\"64.0\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"40,64 49.0,69.0 49.0,59.0\" fill=\"#EF4444\"/><line x1=\"116\" y1=\"64\" x2=\"137.0\" y2=\"64.0\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"146,64 137.0,59.0 137.0,69.0\" fill=\"#EF4444\"/><text x=\"93\" y=\"30\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">divergence</text><text x=\"93\" y=\"104\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">les plaques s’écartent</text><text x=\"93\" y=\"118\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">(dorsale)</text><rect x=\"206\" y=\"50\" width=\"70\" height=\"28\" rx=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.3\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><rect x=\"282\" y=\"50\" width=\"70\" height=\"28\" rx=\"4\" fill=\"#F59E0B\" fill-opacity=\"0.3\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><line x1=\"226\" y1=\"64\" x2=\"251.0\" y2=\"64.0\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"260,64 251.0,59.0 251.0,69.0\" fill=\"#EF4444\"/><line x1=\"332\" y1=\"64\" x2=\"307.0\" y2=\"64.0\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"298,64 307.0,69.0 307.0,59.0\" fill=\"#EF4444\"/><text x=\"279\" y=\"30\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">convergence</text><text x=\"279\" y=\"104\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">les plaques se rapprochent</text><text x=\"279\" y=\"118\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">(subduction, collision)</text><rect x=\"392\" y=\"36\" width=\"140\" height=\"28\" rx=\"4\" fill=\"#3B82F6\" fill-opacity=\"0.3\" stroke=\"#3B82F6\" stroke-width=\"1.8\"/><rect x=\"392\" y=\"70\" width=\"140\" height=\"28\" rx=\"4\" fill=\"#3B82F6\" fill-opacity=\"0.3\" stroke=\"#3B82F6\" stroke-width=\"1.8\"/><line x1=\"500\" y1=\"50\" x2=\"439.0\" y2=\"50.0\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"430,50 439.0,55.0 439.0,45.0\" fill=\"#EF4444\"/><line x1=\"424\" y1=\"84\" x2=\"485.0\" y2=\"84.0\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"494,84 485.0,79.0 485.0,89.0\" fill=\"#EF4444\"/><text x=\"462\" y=\"22\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">coulissement</text><text x=\"462\" y=\"118\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">les plaques glissent côte à côte</text></svg>"
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Coulissement",
          "stepTheme": "Mouvement",
          "stepTitle": "Glisser côte à côte",
          "paragraphText": "Dans un **coulissement** (ou décrochement), deux plaques **glissent horizontalement** l’une le long de l’autre.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p04_q5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on le mouvement de deux plaques qui glissent horizontalement l’une le long de l’autre ?",
            "options": [
              "Un coulissement (décrochement)",
              "Une divergence",
              "Une subduction",
              "Une accrétion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exemple : la faille de San Andreas, en Californie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Asthénosphère",
          "stepTheme": "Erreur du document",
          "stepTitle": "L’asthénosphère n’est pas liquide",
          "paragraphText": "Le texte à trous dit que les plaques glissent sur « l’asthénosphère **liquide** ». L’asthénosphère est **solide**, mais assez chaude pour se **déformer lentement**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p04_q6",
            "type": "mcq",
            "prompt": "Sur quoi les plaques lithosphériques se déplacent-elles ?",
            "options": [
              "Sur l’asthénosphère, solide mais capable de se déformer lentement",
              "Sur une couche de lave liquide",
              "Sur le noyau externe",
              "Sur l’océan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les ondes S la traversent : elle n’est pas liquide."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p04_q1",
          "type": "mcq",
          "prompt": "Dans un ballon d’eau chauffé par-dessous, des grains de riz montent au centre et redescendent sur les côtés. Qu’est-ce qui les entraîne ?",
          "options": [
            "Des courants de convection de l’eau, de la zone chaude vers la zone froide",
            "Le vent",
            "Le poids des grains seulement",
            "Une réaction chimique du riz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’eau chaude, plus légère, monte."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p04_q2",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’un courant de convection ?",
          "options": [
            "Un déplacement de matière qui transporte la chaleur d’une zone chaude vers une zone froide",
            "Un courant électrique dans les roches",
            "Un vent à la surface du sol",
            "Une vague dans l’océan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le manteau, il est extrêmement lent."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p04_q3",
          "type": "mcq",
          "prompt": "D’où vient principalement la chaleur interne du globe qui entretient la convection du manteau ?",
          "options": [
            "De la désintégration d’éléments radioactifs comme l’uranium, le thorium et le potassium 40",
            "Du Soleil",
            "Des volcans",
            "Du frottement des océans"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé parle à tort de « fission »."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p04_q4",
          "type": "mcq",
          "prompt": "Que se passe-t-il entre deux plaques en mouvement de divergence ?",
          "options": [
            "Elles s’écartent l’une de l’autre, comme à une dorsale",
            "Elles se rapprochent",
            "Elles glissent côte à côte",
            "Elles restent immobiles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dé-verger : partir dans des directions opposées."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p04_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le mouvement de deux plaques qui glissent horizontalement l’une le long de l’autre ?",
          "options": [
            "Un coulissement (décrochement)",
            "Une divergence",
            "Une subduction",
            "Une accrétion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exemple : la faille de San Andreas, en Californie."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p04_q6",
          "type": "mcq",
          "prompt": "Sur quoi les plaques lithosphériques se déplacent-elles ?",
          "options": [
            "Sur l’asthénosphère, solide mais capable de se déformer lentement",
            "Sur une couche de lave liquide",
            "Sur le noyau externe",
            "Sur l’océan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ondes S la traversent : elle n’est pas liquide."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l07_mouvements_plaques_p05",
      "order": 5,
      "title": "Les conséquences : subduction, collision, obduction",
      "summary": "Ce qui se passe quand deux plaques se rencontrent.",
      "conceptExplanation": "- Subduction : la lithosphère océanique, plus dense, plonge sous une autre plaque (continentale ou océanique). On y trouve une fosse océanique, des séismes, des volcans, du métamorphisme et des chaînes de montagnes de subduction (les Andes).\n- Collision : deux lithosphères continentales, trop légères pour plonger, se heurtent ; les roches se plissent et forment une chaîne de collision (l’Himalaya, entre l’Inde et l’Asie).\n- Obduction : un morceau de lithosphère océanique est charrié par-dessus le bord d’un continent (exemple : les ophiolites d’Oman).\n- Corrections du document :\n- il écrit qu’« une plaque océanique plus légère s’enfonce sous une plaque continentale plus dense » : c’est l’inverse, la plaque océanique est la plus dense, c’est pourquoi elle plonge ;\n- il décrit l’obduction comme une plaque qui « s’enfonce totalement puis monte » : dans l’obduction, la lithosphère océanique ne plonge pas, elle chevauche le continent ;\n- le corrigé de l’activité 2 marque « faux » la collision de deux plaques continentales et la formation d’une chaîne de montagnes : ces deux conséquences sont vraies (exemple : l’Himalaya) ;\n- la situation d’évaluation 2 dit que la Méditerranée s’élargit et le corrigé parle de « distension ». La Méditerranée se referme, car l’Afrique se rapproche de l’Europe ; c’est l’Atlantique ou la mer Rouge qui s’élargissent.\n- Activité 3 : pangée → supercontinent formé à la fin de l’ère primaire ; volcan → relief d’où sort le magma ; marge active → limite de plaque à séismes et volcans ; plaque lithosphérique → bloc rigide de la lithosphère ; dorsale → montagne sous-marine.",
      "keyRule": "Subduction : l’océanique (dense) plonge. Collision : deux continentales se heurtent (Himalaya). Obduction : de la lithosphère océanique chevauche un continent.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’Himalaya",
        "statement": "Pourquoi l’Himalaya s’est-il formé entre l’Inde et l’Asie ?",
        "methodSteps": [
          "L’océan qui séparait l’Inde de l’Asie a disparu par subduction.",
          "Les deux continents, trop légers pour plonger, sont entrés en collision ; les roches se sont plissées et soulevées."
        ],
        "conclusion": "L’Himalaya est une chaîne de collision."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "piege",
          "stepBadge": "Densité",
          "stepTheme": "Erreur du document",
          "stepTitle": "Quelle plaque plonge ?",
          "paragraphText": "Le document dit qu’une plaque océanique « plus **légère** » plonge sous une continentale « plus **dense** ». C’est l’inverse : la lithosphère **océanique** est la plus **dense**, c’est pour cela qu’elle **plonge**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p05_q1",
            "type": "mcq",
            "prompt": "Lors d’une subduction sous un continent, pourquoi est-ce la plaque océanique qui plonge ?",
            "options": [
              "Parce que la lithosphère océanique est plus dense que la lithosphère continentale",
              "Parce qu’elle est plus légère",
              "Parce qu’elle est plus chaude",
              "Parce qu’elle est plus épaisse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La lithosphère continentale, légère, « flotte »."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Subduction et collision",
            "caption": "La lithosphère océanique, plus dense, plonge sous la continentale : c’est la subduction. Deux lithosphères continentales, trop légères pour plonger, se heurtent : c’est la collision.",
            "svgContent": "<svg viewBox=\"0 0 560 148\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Subduction d’une plaque océanique sous une plaque continentale et collision de deux plaques continentales\"><text x=\"140\" y=\"18\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">Subduction</text><path d=\"M10,60 L140,60 L140,72 L10,72 Z\" fill=\"#3B82F6\" fill-opacity=\"0.35\" stroke=\"#3B82F6\" stroke-width=\"1.6\"/><path d=\"M140,60 Q170,64 200,110 L188,116 Q160,74 140,72 Z\" fill=\"#3B82F6\" fill-opacity=\"0.35\" stroke=\"#3B82F6\" stroke-width=\"1.6\"/><path d=\"M150,46 L270,46 L270,70 L170,70 Q156,58 150,46 Z\" fill=\"#F59E0B\" fill-opacity=\"0.4\" stroke=\"#F59E0B\" stroke-width=\"1.6\"/><path d=\"M212,46 L222,30 L232,46 Z\" fill=\"#EF4444\"/><text x=\"60\" y=\"88\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">plaque océanique (dense)</text><text x=\"238\" y=\"38\" font-size=\"9.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">plaque continentale</text><text x=\"146\" y=\"136\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">fosse, séismes, volcans</text><text x=\"420\" y=\"18\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">Collision</text><path d=\"M290,70 L405,70 L420,40 L435,70 L550,70 L550,90 L290,90 Z\" fill=\"#F59E0B\" fill-opacity=\"0.4\" stroke=\"#F59E0B\" stroke-width=\"1.6\"/><line x1=\"300\" y1=\"104\" x2=\"371.0\" y2=\"104.0\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"380,104 371.0,99.0 371.0,109.0\" fill=\"#EF4444\"/><line x1=\"540\" y1=\"104\" x2=\"469.0\" y2=\"104.0\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"460,104 469.0,109.0 469.0,99.0\" fill=\"#EF4444\"/><text x=\"420\" y=\"126\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">deux plaques continentales :</text><text x=\"420\" y=\"140\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">chaîne de montagnes (Himalaya)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Subduction",
          "stepTheme": "Conséquences",
          "stepTitle": "Ce que crée la subduction",
          "paragraphText": "La **subduction** crée une **fosse**, des **séismes**, des **volcans** et des **chaînes de montagnes** comme les **Andes**.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p05_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces conséquences est typique d’une zone de subduction ?",
            "options": [
              "Une fosse océanique avec des séismes et des volcans",
              "Un rift avec émission de basalte",
              "Une plaine abyssale plate",
              "Un plateau continental"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exemple : la côte ouest de l’Amérique du Sud."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Collision",
          "stepTheme": "Conséquences",
          "stepTitle": "Deux continents se heurtent",
          "paragraphText": "Quand deux lithosphères **continentales** se rencontrent, elles se heurtent : c’est la **collision**, qui forme une **chaîne de montagnes** (Himalaya).",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p05_q3",
            "type": "mcq",
            "prompt": "L’Himalaya s’est formé à la rencontre de la plaque indienne et de la plaque asiatique, toutes deux continentales. De quel phénomène s’agit-il ?",
            "options": [
              "D’une collision",
              "D’une accrétion",
              "D’une divergence",
              "D’une subduction sous un océan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Aucune des deux plaques ne plonge vraiment."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Obduction",
          "stepTheme": "Correction du document",
          "stepTitle": "Monter sur le continent",
          "paragraphText": "Le document décrit l’**obduction** comme une plaque qui « s’enfonce puis monte ». Dans l’obduction, un morceau de lithosphère **océanique** **chevauche** le bord d’un **continent**, sans plonger.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p05_q4",
            "type": "mcq",
            "prompt": "Qu’est-ce que l’obduction ?",
            "options": [
              "Le chevauchement d’un continent par un morceau de lithosphère océanique",
              "Le plongement d’une plaque océanique sous un continent",
              "L’écartement de deux plaques",
              "La rencontre de deux continents"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exemple : les ophiolites d’Oman."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Activité 2",
          "stepTheme": "Erreur du document",
          "stepTitle": "La collision est bien une conséquence",
          "paragraphText": "Le corrigé marque « **faux** » la collision de deux plaques continentales et la formation d’une chaîne de montagnes. Ces deux conséquences sont **vraies** (Himalaya).",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p05_q5",
            "type": "mcq",
            "prompt": "« Les mouvements des plaques peuvent provoquer la collision de deux plaques continentales et la formation d’une chaîne de montagnes. » Vrai ou faux ?",
            "options": [
              "Vrai, comme pour l’Himalaya",
              "Faux, les continents ne se rencontrent jamais",
              "Faux, seules les plaques océaniques bougent",
              "Vrai, mais seulement sous l’océan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité 2 corrigée : 1 F, 2 V, 3 V, 4 F, 5 F, 6 V."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Méditerranée",
          "stepTheme": "Erreur du document",
          "stepTitle": "La Méditerranée se referme",
          "paragraphText": "Le document dit que la **Méditerranée** s’élargit. C’est faux : l’**Afrique** se rapproche de l’**Europe**, la Méditerranée **se referme**. C’est l’**Atlantique** qui s’élargit.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_p05_q6",
            "type": "mcq",
            "prompt": "L’Afrique se rapproche lentement de l’Europe. Qu’arrive-t-il à la mer Méditerranée ?",
            "options": [
              "Elle se referme peu à peu",
              "Elle s’élargit chaque année",
              "Elle ne change pas",
              "Elle devient un océan comme l’Atlantique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’où les séismes et volcans d’Italie et de Grèce."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p05_q1",
          "type": "mcq",
          "prompt": "Lors d’une subduction sous un continent, pourquoi est-ce la plaque océanique qui plonge ?",
          "options": [
            "Parce que la lithosphère océanique est plus dense que la lithosphère continentale",
            "Parce qu’elle est plus légère",
            "Parce qu’elle est plus chaude",
            "Parce qu’elle est plus épaisse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La lithosphère continentale, légère, « flotte »."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p05_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces conséquences est typique d’une zone de subduction ?",
          "options": [
            "Une fosse océanique avec des séismes et des volcans",
            "Un rift avec émission de basalte",
            "Une plaine abyssale plate",
            "Un plateau continental"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exemple : la côte ouest de l’Amérique du Sud."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p05_q3",
          "type": "mcq",
          "prompt": "L’Himalaya s’est formé à la rencontre de la plaque indienne et de la plaque asiatique, toutes deux continentales. De quel phénomène s’agit-il ?",
          "options": [
            "D’une collision",
            "D’une accrétion",
            "D’une divergence",
            "D’une subduction sous un océan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aucune des deux plaques ne plonge vraiment."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p05_q4",
          "type": "mcq",
          "prompt": "Qu’est-ce que l’obduction ?",
          "options": [
            "Le chevauchement d’un continent par un morceau de lithosphère océanique",
            "Le plongement d’une plaque océanique sous un continent",
            "L’écartement de deux plaques",
            "La rencontre de deux continents"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exemple : les ophiolites d’Oman."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p05_q5",
          "type": "mcq",
          "prompt": "« Les mouvements des plaques peuvent provoquer la collision de deux plaques continentales et la formation d’une chaîne de montagnes. » Vrai ou faux ?",
          "options": [
            "Vrai, comme pour l’Himalaya",
            "Faux, les continents ne se rencontrent jamais",
            "Faux, seules les plaques océaniques bougent",
            "Vrai, mais seulement sous l’océan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité 2 corrigée : 1 F, 2 V, 3 V, 4 F, 5 F, 6 V."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_p05_q6",
          "type": "mcq",
          "prompt": "L’Afrique se rapproche lentement de l’Europe. Qu’arrive-t-il à la mer Méditerranée ?",
          "options": [
            "Elle se referme peu à peu",
            "Elle s’élargit chaque année",
            "Elle ne change pas",
            "Elle devient un océan comme l’Atlantique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’où les séismes et volcans d’Italie et de Grèce."
        }
      ]
    }
  ]
};
