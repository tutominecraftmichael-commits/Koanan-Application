import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère C_L9_Ecosystème naturel et agrosystème.pdf (Mon école à la maison) ». Première C et D (programme de SVT commun).
// Fichier généré (scratchpad build_1re_c_svt_c.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_C_L09_ECOSYSTEME_NATUREL_AGROSYSTEME: CurriculumChapter = {
  "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "orderForGrades": {
    "premiere_d": 14
  },
  "order": 9,
  "title": "Leçon 9 : L’écosystème naturel et l’agrosystème",
  "summary": "Caractéristiques d’une forêt naturelle et d’un champ cultivé, biomasse et énergie par niveau trophique, pyramides des énergies, productivités primaires brute et nette, rendements théorique et réel, apports extérieurs des agrosystèmes.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère C_L9_Ecosystème naturel et agrosystème.pdf (Mon école à la maison)",
  "points": [
    {
      "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01",
      "order": 1,
      "title": "Écosystème naturel et agrosystème",
      "summary": "Biodiversité, strates, niveaux trophiques, cycle de la matière.",
      "conceptExplanation": "Situation : le club environnement du lycée moderne de San Pedro visite un champ de manioc et une forêt galerie au bord d’un cours d’eau. Les êtres vivants recensés sont différents d’un milieu à l’autre.\n- Un écosystème est un milieu (biotope) et l’ensemble des êtres vivants qui y vivent (biocénose), avec leurs relations.\n- La forêt naturelle n’est pas exploitée : grande biodiversité, plusieurs strates (arbres, arbustes, herbes), tous les niveaux trophiques (producteurs, consommateurs de 1er, 2e, 3e ordre, décomposeurs). La matière circule en cycle fermé : ce qui est produit retourne au sol par les décomposeurs.\n- Le champ de maïs est exploité : monoculture, une seule strate, producteurs dominants, consommateurs rares (éliminés). Le cycle de la matière est ouvert : une partie de la matière est exportée par les récoltes, et l’Homme apporte de l’eau et des engrais. C’est un agrosystème, ou écosystème agro-industriel.\n- Dans les deux, l’énergie circule des producteurs vers les consommateurs.\n- Activité : forêt = arbres, arbustes, arbrisseaux, herbes, champignons, animaux ; palmeraie = beaucoup de palmiers, peu d’espèces végétales, animaux rares.\n- Correction du document : dans l’exercice d’application 1, le corrigé associe « exploité » à l’écosystème naturel. C’est l’agrosystème qui est exploité ; l’écosystème naturel a le transfert d’énergie et de matière, la biodiversité et un cycle fermé ; l’agrosystème a le transfert d’énergie, l’exploitation et la monoculture.",
      "keyRule": "Naturel : non exploité, biodiversité, plusieurs strates, tous les niveaux trophiques, cycle fermé. Agrosystème : exploité, monoculture, une strate, cycle ouvert (exportations, apports).",
      "formulas": [],
      "workedExample": {
        "title": "Classer un écosystème",
        "statement": "Une palmeraie compte beaucoup de palmiers, peu d’espèces végétales et de rares animaux. Quel type d’écosystème ?",
        "methodSteps": [
          "Peu d’espèces, une plante dominante : c’est une culture.",
          "L’Homme l’exploite et en exporte les récoltes."
        ],
        "conclusion": "C’est un agrosystème."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Écosystème",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’un écosystème ?",
          "paragraphText": "Un **écosystème** est formé d’un **milieu** (biotope) et des **êtres vivants** qui y vivent (biocénose), avec leurs relations.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q1",
            "type": "mcq",
            "prompt": "De quoi un écosystème est-il formé ?",
            "options": [
              "D’un milieu et des êtres vivants qui y vivent, avec leurs relations",
              "Seulement des animaux d’un lieu",
              "Seulement des plantes cultivées",
              "Seulement du sol et de l’eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Biotope + biocénose = écosystème."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Forêt naturelle et champ de maïs",
            "caption": "Deux écosystèmes, deux fonctionnements.",
            "tableData": {
              "headers": [
                "",
                "Forêt naturelle (écosystème naturel)",
                "Champ de maïs (agrosystème)"
              ],
              "rows": [
                [
                  "Exploitation",
                  "Non exploitée",
                  "Exploité par l’Homme"
                ],
                [
                  "Espèces",
                  "Grande biodiversité",
                  "Monoculture (maïs)"
                ],
                [
                  "Strates",
                  "Plusieurs : arbres, arbustes, herbes",
                  "Une seule"
                ],
                [
                  "Niveaux trophiques",
                  "Tous présents",
                  "Producteurs dominants, consommateurs rares"
                ],
                [
                  "Cycle de la matière",
                  "Fermé",
                  "Ouvert : récoltes exportées, engrais et eau apportés"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Forêt",
          "stepTheme": "Naturel",
          "stepTitle": "La forêt naturelle",
          "paragraphText": "La **forêt naturelle** : **non exploitée**, grande **biodiversité**, **plusieurs strates**, **tous** les niveaux trophiques.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces caractéristiques appartient à une forêt naturelle ?",
            "options": [
              "Une grande biodiversité avec plusieurs strates",
              "La monoculture",
              "Une seule strate",
              "Des consommateurs éliminés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est un écosystème naturel."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Champ",
          "stepTheme": "Agrosystème",
          "stepTitle": "Le champ de maïs",
          "paragraphText": "Le **champ de maïs** : **exploité**, **monoculture**, une **seule strate**, producteurs dominants, consommateurs **rares**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on un écosystème cultivé par l’Homme, comme un champ de maïs ?",
            "options": [
              "Un agrosystème (écosystème agro-industriel)",
              "Un écosystème naturel",
              "Un biotope",
              "Une biocénose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Agro- : relatif aux champs."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Cycle de la matière",
          "stepTheme": "Différence",
          "stepTitle": "Fermé ou ouvert ?",
          "paragraphText": "Dans la **forêt**, la matière revient au sol : cycle **fermé**. Dans le **champ**, les **récoltes** sont exportées et l’Homme apporte **engrais** et **eau** : cycle **ouvert**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q4",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que le cycle de la matière est ouvert dans un agrosystème ?",
            "options": [
              "Parce qu’une partie de la matière est exportée par les récoltes et que l’Homme apporte engrais et eau",
              "Parce qu’il n’y a pas de producteurs",
              "Parce que la matière ne circule pas du tout",
              "Parce que les décomposeurs sont plus nombreux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans la forêt, rien ne sort : cycle fermé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Exploité",
          "stepTheme": "Erreur du document",
          "stepTitle": "Quel écosystème est exploité ?",
          "paragraphText": "Le corrigé du document associe « **exploité** » à l’écosystème naturel : c’est une erreur. C’est l’**agrosystème** qui est exploité par l’Homme.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces caractéristiques appartient à l’agrosystème et non à l’écosystème naturel ?",
            "options": [
              "Il est exploité par l’Homme",
              "Il a un cycle de la matière fermé",
              "Il a une grande biodiversité",
              "Il a plusieurs strates"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé juste : 1-a, 1-c, 1-d, 1-f ; 2-a, 2-b, 2-e."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Palmeraie",
          "stepTheme": "Activité",
          "stepTitle": "Une palmeraie",
          "paragraphText": "Une **palmeraie** : beaucoup de **palmiers**, **peu d’espèces** végétales, **animaux rares** : c’est un **agrosystème**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q6",
            "type": "mcq",
            "prompt": "Une palmeraie compte beaucoup de palmiers, peu d’espèces végétales et de rares animaux. De quel type d’écosystème s’agit-il ?",
            "options": [
              "Un agrosystème",
              "Un écosystème naturel",
              "Une forêt galerie",
              "Un océan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une plante dominante : une culture."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q1",
          "type": "mcq",
          "prompt": "De quoi un écosystème est-il formé ?",
          "options": [
            "D’un milieu et des êtres vivants qui y vivent, avec leurs relations",
            "Seulement des animaux d’un lieu",
            "Seulement des plantes cultivées",
            "Seulement du sol et de l’eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Biotope + biocénose = écosystème."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces caractéristiques appartient à une forêt naturelle ?",
          "options": [
            "Une grande biodiversité avec plusieurs strates",
            "La monoculture",
            "Une seule strate",
            "Des consommateurs éliminés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est un écosystème naturel."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on un écosystème cultivé par l’Homme, comme un champ de maïs ?",
          "options": [
            "Un agrosystème (écosystème agro-industriel)",
            "Un écosystème naturel",
            "Un biotope",
            "Une biocénose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Agro- : relatif aux champs."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q4",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que le cycle de la matière est ouvert dans un agrosystème ?",
          "options": [
            "Parce qu’une partie de la matière est exportée par les récoltes et que l’Homme apporte engrais et eau",
            "Parce qu’il n’y a pas de producteurs",
            "Parce que la matière ne circule pas du tout",
            "Parce que les décomposeurs sont plus nombreux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans la forêt, rien ne sort : cycle fermé."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces caractéristiques appartient à l’agrosystème et non à l’écosystème naturel ?",
          "options": [
            "Il est exploité par l’Homme",
            "Il a un cycle de la matière fermé",
            "Il a une grande biodiversité",
            "Il a plusieurs strates"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé juste : 1-a, 1-c, 1-d, 1-f ; 2-a, 2-b, 2-e."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q6",
          "type": "mcq",
          "prompt": "Une palmeraie compte beaucoup de palmiers, peu d’espèces végétales et de rares animaux. De quel type d’écosystème s’agit-il ?",
          "options": [
            "Un agrosystème",
            "Un écosystème naturel",
            "Une forêt galerie",
            "Un océan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une plante dominante : une culture."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02",
      "order": 2,
      "title": "Biomasse et pyramides des énergies",
      "summary": "Calculer biomasse et énergie par niveau trophique ; pyramides.",
      "conceptExplanation": "- La biomasse est la masse de matière organique (sèche) des êtres vivants d’un niveau trophique, par unité de surface et de temps.\n- On mesure, sur 1 m² et en un an, la matière sèche des êtres vivants d’un écosystème naturel et d’un agrosystème. Les producteurs de l’écosystème naturel en utilisent 1 200 g pour leur respiration ; ceux de l’agrosystème 183 g.\n- Écosystème naturel : producteurs 1 675 + 15 = 1 690 g, plus 1 200 g de respiration = 2 890 g ; consommateurs I (mammifères et insectes végétariens) 90 + 10 = 100 g ; consommateurs II (mammifères carnivores, reptiles) 15 + 5 = 20 g ; décomposeurs (lombrics) 60 g ; total 3 070 g.\n- Agrosystème : producteurs 1 700 + 46 = 1 746 g, plus 183 g = 1 929 g ; consommateurs I (chenilles, criquets, vaches) 6 + 90,2 = 96,2 g ; consommateurs II (oiseaux) 0,6 g ; total 2 025,8 g.\n- Énergie : 1 g de matière végétale = 20 kJ ; 1 g de matière animale = 23,5 kJ. Producteurs naturels : 2 890 × 20 = 57 800 kJ ; consommateurs I : 100 × 23,5 = 2 350 kJ ; etc.\n- Dans les deux écosystèmes, l’énergie diminue fortement d’un niveau trophique au suivant : la pyramide des énergies a une base large et un sommet étroit. Une grande partie de l’énergie est perdue à chaque niveau (respiration, chaleur, déchets).\n- Correction du document : son analyse compare la forêt à « la prairie » ; il s’agit de l’agrosystème (champ).",
      "keyRule": "Énergie = biomasse × valeur énergétique (20 kJ/g végétal, 23,5 kJ/g animal). L’énergie diminue à chaque niveau trophique : pyramide.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer l’énergie des consommateurs I",
        "statement": "Les consommateurs I de la forêt ont une biomasse de 100 g/m²/an. Quelle énergie, à 23,5 kJ par gramme ?",
        "methodSteps": [
          "Énergie = biomasse × valeur énergétique.",
          "100 × 23,5 = 2 350."
        ],
        "conclusion": "2 350 kJ/m²/an."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Biomasse",
          "stepTheme": "Définition",
          "stepTitle": "La biomasse",
          "paragraphText": "La **biomasse** est la **masse de matière organique** des êtres vivants d’un niveau trophique, par unité de **surface** et de **temps**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q1",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on la biomasse d’un niveau trophique ?",
            "options": [
              "La masse de matière organique de ses êtres vivants, par unité de surface et de temps",
              "Le nombre d’espèces",
              "L’énergie solaire reçue",
              "La température du milieu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On l’exprime par exemple en g/m²/an."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Biomasse et énergie par niveau trophique (par m² et par an)",
            "caption": "Producteurs : production totale, respiration comprise. 1 g de matière végétale = 20 kJ ; 1 g de matière animale = 23,5 kJ.",
            "tableData": {
              "headers": [
                "Niveau",
                "Naturel : biomasse (g)",
                "Naturel : énergie (kJ)",
                "Agrosystème : biomasse (g)",
                "Agrosystème : énergie (kJ)"
              ],
              "rows": [
                [
                  "Producteurs",
                  2890,
                  57800,
                  1929,
                  38580
                ],
                [
                  "Consommateurs I",
                  100,
                  2350,
                  "96,2",
                  "2 260,7"
                ],
                [
                  "Consommateurs II",
                  20,
                  470,
                  "0,6",
                  "14,1"
                ],
                [
                  "Décomposeurs",
                  60,
                  1410,
                  "—",
                  "—"
                ],
                [
                  "Total",
                  3070,
                  "",
                  "2 025,8",
                  ""
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Producteurs",
          "stepTheme": "Calcul",
          "stepTitle": "La biomasse des producteurs",
          "paragraphText": "Producteurs de la forêt : **1 675 + 15 = 1 690 g**, plus **1 200 g** utilisés en respiration : **2 890 g/m²/an** au total.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q2",
            "type": "mcq",
            "prompt": "Dans une forêt, les végétaux arborescents ont 1 675 g/m²/an, les herbacés 15 g/m²/an, et les végétaux utilisent 1 200 g pour leur respiration. Quelle est leur production totale ?",
            "options": [
              "2 890 g/m²/an",
              "1 690 g/m²/an",
              "1 200 g/m²/an",
              "3 070 g/m²/an"
            ],
            "correctAnswerIndex": 0,
            "explanation": "1 675 + 15 + 1 200 = 2 890."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Énergie",
          "stepTheme": "Calcul",
          "stepTitle": "Convertir en énergie",
          "paragraphText": "Énergie = **biomasse × valeur énergétique**. Producteurs : 2 890 × **20** = **57 800 kJ** ; consommateurs I : 100 × **23,5** = **2 350 kJ**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q3",
            "type": "mcq",
            "prompt": "Les consommateurs I d’une forêt ont une biomasse de 100 g/m²/an. Sachant que 1 g de matière animale vaut 23,5 kJ, quelle est leur énergie ?",
            "options": [
              "2 350 kJ/m²/an",
              "2 000 kJ/m²/an",
              "123,5 kJ/m²/an",
              "57 800 kJ/m²/an"
            ],
            "correctAnswerIndex": 0,
            "explanation": "100 × 23,5 = 2 350."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Agrosystème",
          "stepTheme": "Calcul",
          "stepTitle": "Les consommateurs du champ",
          "paragraphText": "Agrosystème : consommateurs I = chenilles et criquets (**6 g**) + vaches (**90,2 g**) = **96,2 g** ; consommateurs II = oiseaux (**0,6 g**).",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q4",
            "type": "mcq",
            "prompt": "Dans un agrosystème, les chenilles et criquets ont 6 g/m²/an et les vaches 90,2 g/m²/an. Quelle est la biomasse des consommateurs I ?",
            "options": [
              "96,2 g/m²/an",
              "84,2 g/m²/an",
              "6 g/m²/an",
              "90,8 g/m²/an"
            ],
            "correctAnswerIndex": 0,
            "explanation": "6 + 90,2 = 96,2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Pyramide",
          "stepTheme": "Analyse",
          "stepTitle": "L’énergie diminue à chaque niveau",
          "paragraphText": "Dans les deux écosystèmes, l’**énergie diminue fortement** d’un niveau trophique au suivant : la pyramide a une **base large** et un **sommet étroit**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q5",
            "type": "mcq",
            "prompt": "Pourquoi la pyramide des énergies a-t-elle toujours une base large et un sommet étroit ?",
            "options": [
              "Parce qu’une grande partie de l’énergie est perdue à chaque niveau (respiration, chaleur, déchets)",
              "Parce que les consommateurs sont plus gros que les producteurs",
              "Parce que l’énergie augmente vers le sommet",
              "Parce que les producteurs ne reçoivent pas d’énergie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule une petite fraction passe au niveau suivant."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Pyramides des énergies",
            "caption": "Largeur proportionnelle à l’énergie (échelle compressée pour les consommateurs). L’énergie diminue fortement d’un niveau à l’autre.",
            "svgContent": "<svg viewBox=\"0 0 560 220\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Pyramides des énergies de la forêt et du champ de maïs\"><text x=\"140\" y=\"20\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">Écosystème naturel</text><rect x=\"20\" y=\"160\" width=\"240\" height=\"30\" fill=\"#10B981\" fill-opacity=\"0.35\" stroke=\"#10B981\" stroke-width=\"1.6\"/><text x=\"140\" y=\"180\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">P : 57 800 kJ</text><rect x=\"110\" y=\"125\" width=\"60\" height=\"30\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1.6\"/><text x=\"140\" y=\"145\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">C I : 2 350</text><rect x=\"128\" y=\"90\" width=\"24\" height=\"30\" fill=\"#EF4444\" fill-opacity=\"0.35\" stroke=\"#EF4444\" stroke-width=\"1.6\"/><text x=\"160\" y=\"109\" font-size=\"10\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">C II : 470</text><text x=\"420\" y=\"20\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">Agrosystème (maïs)</text><rect x=\"340\" y=\"160\" width=\"160\" height=\"30\" fill=\"#10B981\" fill-opacity=\"0.35\" stroke=\"#10B981\" stroke-width=\"1.6\"/><text x=\"420\" y=\"180\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">P : 38 580 kJ</text><rect x=\"390\" y=\"125\" width=\"60\" height=\"30\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1.6\"/><text x=\"420\" y=\"145\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">C I : 2 260,7</text><rect x=\"416\" y=\"90\" width=\"8\" height=\"30\" fill=\"#EF4444\" fill-opacity=\"0.35\" stroke=\"#EF4444\" stroke-width=\"1.6\"/><text x=\"430\" y=\"109\" font-size=\"10\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">C II : 14,1</text><text x=\"280\" y=\"210\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">P : producteurs ; C I : consommateurs primaires ; C II : consommateurs secondaires</text></svg>"
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Comparer",
          "stepTheme": "Analyse",
          "stepTitle": "Forêt ou champ ?",
          "paragraphText": "La **biomasse totale** de la forêt (**3 070 g/m²/an**) dépasse celle du champ (**2 025,8 g/m²/an**). Le document parle de « prairie » : il s’agit bien de l’**agrosystème**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q6",
            "type": "mcq",
            "prompt": "Biomasse totale : forêt 3 070 g/m²/an, champ de maïs 2 025,8 g/m²/an. Que peut-on dire ?",
            "options": [
              "La biomasse de la forêt est supérieure à celle du champ",
              "La biomasse du champ est supérieure",
              "Elles sont égales",
              "Le champ n’a pas de biomasse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La forêt a plus d’espèces et de niveaux trophiques."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q1",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on la biomasse d’un niveau trophique ?",
          "options": [
            "La masse de matière organique de ses êtres vivants, par unité de surface et de temps",
            "Le nombre d’espèces",
            "L’énergie solaire reçue",
            "La température du milieu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On l’exprime par exemple en g/m²/an."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q2",
          "type": "mcq",
          "prompt": "Dans une forêt, les végétaux arborescents ont 1 675 g/m²/an, les herbacés 15 g/m²/an, et les végétaux utilisent 1 200 g pour leur respiration. Quelle est leur production totale ?",
          "options": [
            "2 890 g/m²/an",
            "1 690 g/m²/an",
            "1 200 g/m²/an",
            "3 070 g/m²/an"
          ],
          "correctAnswerIndex": 0,
          "explanation": "1 675 + 15 + 1 200 = 2 890."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q3",
          "type": "mcq",
          "prompt": "Les consommateurs I d’une forêt ont une biomasse de 100 g/m²/an. Sachant que 1 g de matière animale vaut 23,5 kJ, quelle est leur énergie ?",
          "options": [
            "2 350 kJ/m²/an",
            "2 000 kJ/m²/an",
            "123,5 kJ/m²/an",
            "57 800 kJ/m²/an"
          ],
          "correctAnswerIndex": 0,
          "explanation": "100 × 23,5 = 2 350."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q4",
          "type": "mcq",
          "prompt": "Dans un agrosystème, les chenilles et criquets ont 6 g/m²/an et les vaches 90,2 g/m²/an. Quelle est la biomasse des consommateurs I ?",
          "options": [
            "96,2 g/m²/an",
            "84,2 g/m²/an",
            "6 g/m²/an",
            "90,8 g/m²/an"
          ],
          "correctAnswerIndex": 0,
          "explanation": "6 + 90,2 = 96,2."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q5",
          "type": "mcq",
          "prompt": "Pourquoi la pyramide des énergies a-t-elle toujours une base large et un sommet étroit ?",
          "options": [
            "Parce qu’une grande partie de l’énergie est perdue à chaque niveau (respiration, chaleur, déchets)",
            "Parce que les consommateurs sont plus gros que les producteurs",
            "Parce que l’énergie augmente vers le sommet",
            "Parce que les producteurs ne reçoivent pas d’énergie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule une petite fraction passe au niveau suivant."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q6",
          "type": "mcq",
          "prompt": "Biomasse totale : forêt 3 070 g/m²/an, champ de maïs 2 025,8 g/m²/an. Que peut-on dire ?",
          "options": [
            "La biomasse de la forêt est supérieure à celle du champ",
            "La biomasse du champ est supérieure",
            "Elles sont égales",
            "Le champ n’a pas de biomasse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La forêt a plus d’espèces et de niveaux trophiques."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03",
      "order": 3,
      "title": "Productivité et rendements",
      "summary": "Productivités primaires brute et nette ; rendements théorique et réel.",
      "conceptExplanation": "- La production primaire est la quantité de matière organique produite par les végétaux. Ramenée à l’unité de surface et de temps, c’est la productivité.\n- Productivité primaire brute : toute la matière fabriquée par photosynthèse. Productivité primaire nette : ce qui reste après la respiration des végétaux ; c’est ce qui est mis à la disposition des consommateurs de 1er ordre. Nette = brute − respiration.\n- Forêt : brute 2 890, nette 2 890 − 1 200 = 1 690 g/m²/an. Champ : brute 1 929, nette 1 929 − 183 = 1 746 g/m²/an. La forêt a une productivité brute plus grande, mais le champ a une productivité nette plus grande.\n- Rendement théorique = énergie produite ÷ énergie solaire reçue × 100. Forêt : 205 ÷ 5 242 000 × 100 ≈ 0,004 % ; champ : 125 ÷ 1 672 000 × 100 ≈ 0,007 %.\n- Rendement réel = énergie produite ÷ énergie ingérée × 100. Forêt : 205 ÷ 5 850 × 100 ≈ 3,5 % ; champ : 125 ÷ 6 051 × 100 ≈ 2 %.\n- Correction du document : ses tableaux de productivité sont exprimés en « g/m²/ha » ; l’unité est g/m²/an.",
      "keyRule": "Productivité nette = brute − respiration. Rendement théorique = produit ÷ solaire ; rendement réel = produit ÷ ingéré.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la productivité nette du champ",
        "statement": "Productivité brute du champ : 1 929 g/m²/an ; respiration des végétaux : 183 g/m²/an. Productivité nette ?",
        "methodSteps": [
          "Nette = brute − respiration.",
          "1 929 − 183 = 1 746."
        ],
        "conclusion": "1 746 g/m²/an."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Productivité",
          "stepTheme": "Définition",
          "stepTitle": "La productivité",
          "paragraphText": "La **productivité** est la quantité de **matière organique** produite par les végétaux par unité de **surface** et de **temps** : c’est la vitesse de production de la biomasse végétale.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce que la productivité d’un écosystème ?",
            "options": [
              "La quantité de matière organique produite par unité de surface et de temps",
              "Le nombre d’animaux par hectare",
              "L’énergie solaire reçue",
              "La masse totale des animaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On l’exprime en g/m²/an ou en t/ha/an."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Productivité et rendements",
            "caption": "Productivité nette = productivité brute − respiration des végétaux.",
            "tableData": {
              "headers": [
                "",
                "Écosystème naturel (forêt)",
                "Agrosystème (champ de maïs)"
              ],
              "rows": [
                [
                  "Productivité brute (g/m²/an)",
                  2890,
                  1929
                ],
                [
                  "Respiration des végétaux (g/m²/an)",
                  1200,
                  183
                ],
                [
                  "Productivité nette (g/m²/an)",
                  1690,
                  1746
                ],
                [
                  "Rendement théorique (énergie produite ÷ énergie solaire)",
                  "205 ÷ 5 242 000 ≈ 0,004 %",
                  "125 ÷ 1 672 000 ≈ 0,007 %"
                ],
                [
                  "Rendement réel (énergie produite ÷ énergie ingérée)",
                  "205 ÷ 5 850 ≈ 3,5 %",
                  "125 ÷ 6 051 ≈ 2 %"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Brute et nette",
          "stepTheme": "Distinction",
          "stepTitle": "Productivité brute ou nette ?",
          "paragraphText": "**Brute** : toute la matière fabriquée par photosynthèse. **Nette** : ce qui reste après la **respiration** des végétaux, disponible pour les **herbivores**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q2",
            "type": "mcq",
            "prompt": "Comment obtient-on la productivité primaire nette ?",
            "options": [
              "En retirant de la productivité brute la matière utilisée par la respiration des végétaux",
              "En ajoutant la respiration à la productivité brute",
              "En mesurant la masse des animaux",
              "En mesurant l’énergie solaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Nette = brute − respiration."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Calcul",
          "stepTheme": "Forêt",
          "stepTitle": "La productivité nette de la forêt",
          "paragraphText": "Forêt : **2 890 − 1 200 = 1 690 g/m²/an**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q3",
            "type": "mcq",
            "prompt": "La productivité brute d’une forêt est de 2 890 g/m²/an et ses végétaux en utilisent 1 200 g pour respirer. Quelle est sa productivité nette ?",
            "options": [
              "1 690 g/m²/an",
              "4 090 g/m²/an",
              "2 890 g/m²/an",
              "1 200 g/m²/an"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La forêt respire beaucoup : sa nette est plus faible que celle du champ (1 746)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Rendement théorique",
          "stepTheme": "Calcul",
          "stepTitle": "Le rendement théorique",
          "paragraphText": "Rendement théorique = **énergie produite ÷ énergie solaire** × 100. Champ : 125 ÷ 1 672 000 × 100 ≈ **0,007 %**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q4",
            "type": "mcq",
            "prompt": "Un champ de maïs reçoit 1 672 000 kJ/m²/an d’énergie solaire et produit 125 kJ/m²/an. Quel est son rendement théorique (énergie produite ÷ énergie solaire × 100) ?",
            "options": [
              "Environ 0,007 %",
              "Environ 7 %",
              "Environ 0,7 %",
              "Environ 2 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule une infime partie de l’énergie solaire est stockée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Rendement réel",
          "stepTheme": "Calcul",
          "stepTitle": "Le rendement réel",
          "paragraphText": "Rendement réel = **énergie produite ÷ énergie ingérée** × 100. Forêt : 205 ÷ 5 850 × 100 ≈ **3,5 %** ; champ : ≈ **2 %**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q5",
            "type": "mcq",
            "prompt": "Une forêt produit 205 kJ/m²/an pour 5 850 kJ/m²/an d’énergie ingérée. Quel est son rendement réel (produite ÷ ingérée × 100) ?",
            "options": [
              "Environ 3,5 %",
              "Environ 0,004 %",
              "Environ 35 %",
              "Environ 28 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "205 ÷ 5 850 ≈ 0,035."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Unités",
          "stepTheme": "Erreur du document",
          "stepTitle": "g/m²/ha ou g/m²/an ?",
          "paragraphText": "Le document écrit la productivité en « **g/m²/ha** » : cette unité n’a pas de sens. Une productivité se mesure en **g/m²/an** (ou t/ha/an).",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q6",
            "type": "mcq",
            "prompt": "Dans quelle unité exprime-t-on correctement une productivité primaire ?",
            "options": [
              "En g/m²/an",
              "En g/m²/ha",
              "En kJ seulement",
              "En nombre d’espèces"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une quantité par surface et par temps."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce que la productivité d’un écosystème ?",
          "options": [
            "La quantité de matière organique produite par unité de surface et de temps",
            "Le nombre d’animaux par hectare",
            "L’énergie solaire reçue",
            "La masse totale des animaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On l’exprime en g/m²/an ou en t/ha/an."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q2",
          "type": "mcq",
          "prompt": "Comment obtient-on la productivité primaire nette ?",
          "options": [
            "En retirant de la productivité brute la matière utilisée par la respiration des végétaux",
            "En ajoutant la respiration à la productivité brute",
            "En mesurant la masse des animaux",
            "En mesurant l’énergie solaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Nette = brute − respiration."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q3",
          "type": "mcq",
          "prompt": "La productivité brute d’une forêt est de 2 890 g/m²/an et ses végétaux en utilisent 1 200 g pour respirer. Quelle est sa productivité nette ?",
          "options": [
            "1 690 g/m²/an",
            "4 090 g/m²/an",
            "2 890 g/m²/an",
            "1 200 g/m²/an"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La forêt respire beaucoup : sa nette est plus faible que celle du champ (1 746)."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q4",
          "type": "mcq",
          "prompt": "Un champ de maïs reçoit 1 672 000 kJ/m²/an d’énergie solaire et produit 125 kJ/m²/an. Quel est son rendement théorique (énergie produite ÷ énergie solaire × 100) ?",
          "options": [
            "Environ 0,007 %",
            "Environ 7 %",
            "Environ 0,7 %",
            "Environ 2 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule une infime partie de l’énergie solaire est stockée."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q5",
          "type": "mcq",
          "prompt": "Une forêt produit 205 kJ/m²/an pour 5 850 kJ/m²/an d’énergie ingérée. Quel est son rendement réel (produite ÷ ingérée × 100) ?",
          "options": [
            "Environ 3,5 %",
            "Environ 0,004 %",
            "Environ 35 %",
            "Environ 28 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "205 ÷ 5 850 ≈ 0,035."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q6",
          "type": "mcq",
          "prompt": "Dans quelle unité exprime-t-on correctement une productivité primaire ?",
          "options": [
            "En g/m²/an",
            "En g/m²/ha",
            "En kJ seulement",
            "En nombre d’espèces"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une quantité par surface et par temps."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04",
      "order": 4,
      "title": "Évaluation : énergie et chaînes alimentaires",
      "summary": "Pourcentages d’énergie, longueur des chaînes, productivité d’une forêt de chênes.",
      "conceptExplanation": "- Situation 1 : dans une forêt, énergie solaire incidente 2 000 000 kJ/m²/an ; énergie emmagasinée : producteurs 38 500, consommateurs I 9 000, consommateurs II 40 kJ/m²/an.\n- Pourcentages de l’énergie solaire : producteurs 38 500 ÷ 2 000 000 × 100 ≈ 1,93 % ; consommateurs I 9 000 ÷ 2 000 000 × 100 = 0,45 % ; consommateurs II 40 ÷ 2 000 000 × 100 = 0,002 %.\n- Les pertes d’énergie augmentent d’un niveau à l’autre : les chaînes alimentaires courtes sont plus rentables que les longues. C’est pourquoi il faut beaucoup plus de végétaux pour nourrir des carnivores que des herbivores.\n- Situation 2 : une forêt de chênes (Pologne) a une biomasse de 4 895.10⁶ kJ. Chaque année, elle produit 59,3.10⁶ kJ de feuilles, 84,4.10⁶ kJ de bois et 15,4.10⁶ kJ de racines ; 1 g de matière végétale vaut 17 kJ. Productivité : (59,3 + 84,4 + 15,4).10⁶ = 159,1.10⁶ kJ par an, soit 159,1.10⁶ ÷ 17 ≈ 9,36.10⁶ g par an. Pourcentage par rapport à la biomasse : 159,1 ÷ 4 895 × 100 ≈ 3,25 %.\n- Corrections du document : il calcule 1,2 % pour les producteurs (38 500 ÷ 2 000 000 × 100 = 1,925 %, soit environ 1,93 %). Pour la forêt de chênes, il oublie presque les racines (« 14,4 ÷ 17 = 0,84 g » au lieu de 15,4.10⁶ ÷ 17 ≈ 905 882 g) : il trouve 8,45.10⁶ g et 2,93 %, au lieu de 9,36.10⁶ g et 3,25 %.",
      "keyRule": "Pourcentage = énergie du niveau ÷ énergie solaire × 100. Plus la chaîne est longue, plus l’énergie perdue est grande : les chaînes courtes sont plus rentables.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la part des producteurs",
        "statement": "Énergie solaire : 2 000 000 kJ/m²/an ; producteurs : 38 500 kJ/m²/an. Pourcentage ?",
        "methodSteps": [
          "38 500 ÷ 2 000 000 = 0,019 25.",
          "× 100 = 1,925 %."
        ],
        "conclusion": "Les producteurs stockent environ 1,93 % de l’énergie solaire (et non 1,2 %)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "piege",
          "stepBadge": "Producteurs",
          "stepTheme": "Erreur du document",
          "stepTitle": "Le pourcentage des producteurs",
          "paragraphText": "Producteurs : **38 500 ÷ 2 000 000 × 100 ≈ 1,93 %**. Le corrigé du document écrit **1,2 %** : c’est une erreur de calcul.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q1",
            "type": "mcq",
            "prompt": "Dans une forêt, les producteurs emmagasinent 38 500 kJ/m²/an sur 2 000 000 kJ/m²/an d’énergie solaire incidente. Quel pourcentage cela représente-t-il ?",
            "options": [
              "Environ 1,93 %",
              "Environ 1,2 %",
              "Environ 19 %",
              "Environ 0,45 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "38 500 ÷ 20 000 = 1,925."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Consommateurs",
          "stepTheme": "Calcul",
          "stepTitle": "Le pourcentage des consommateurs I",
          "paragraphText": "Consommateurs I : **9 000 ÷ 2 000 000 × 100 = 0,45 %** ; consommateurs II : 40 ÷ 2 000 000 × 100 = **0,002 %**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q2",
            "type": "mcq",
            "prompt": "Les consommateurs I d’une forêt emmagasinent 9 000 kJ/m²/an sur 2 000 000 kJ/m²/an d’énergie solaire. Quel pourcentage ?",
            "options": [
              "0,45 %",
              "4,5 %",
              "0,002 %",
              "45 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "9 000 ÷ 20 000 = 0,45."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Chaînes courtes",
          "stepTheme": "Conclusion",
          "stepTitle": "Des chaînes plus rentables",
          "paragraphText": "L’énergie se perd à chaque niveau : les **chaînes alimentaires courtes** sont **plus rentables** que les longues.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q3",
            "type": "mcq",
            "prompt": "Pourquoi nourrir des populations avec des végétaux est-il plus efficace qu’avec de la viande ?",
            "options": [
              "Parce qu’une chaîne courte perd moins d’énergie qu’une chaîne longue",
              "Parce que les végétaux contiennent plus d’énergie que le soleil",
              "Parce que la viande ne contient pas d’énergie",
              "Parce que les animaux ne respirent pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque niveau en plus divise l’énergie disponible."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Productivité",
          "stepTheme": "Situation 2",
          "stepTitle": "La productivité d’une forêt",
          "paragraphText": "La **productivité** d’une forêt est la quantité de matière végétale qu’elle produit sur une surface donnée **pendant une année**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q4",
            "type": "mcq",
            "prompt": "Une forêt de chênes produit chaque année des feuilles, du bois et des racines. Comment calcule-t-on sa productivité annuelle ?",
            "options": [
              "En additionnant la matière produite en un an par les feuilles, le bois et les racines",
              "En mesurant seulement les feuilles",
              "En comptant les animaux",
              "En mesurant la biomasse totale de la forêt"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On convertit l’énergie en masse : 17 kJ par gramme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Calcul",
          "stepTheme": "Erreur du document",
          "stepTitle": "Ne pas oublier les racines",
          "paragraphText": "Production : (59,3 + 84,4 + **15,4**).10⁶ = **159,1.10⁶ kJ**, soit ≈ **9,36.10⁶ g/an** ; part de la biomasse : 159,1 ÷ 4 895 × 100 ≈ **3,25 %**. Le document oublie les racines et trouve 2,93 %.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q5",
            "type": "mcq",
            "prompt": "Une forêt de chênes de biomasse 4 895.10⁶ kJ produit chaque année 59,3.10⁶ kJ de feuilles, 84,4.10⁶ kJ de bois et 15,4.10⁶ kJ de racines. Quel pourcentage de la biomasse cette production représente-t-elle ?",
            "options": [
              "Environ 3,25 %",
              "Environ 2,93 %",
              "Environ 32,5 %",
              "Environ 0,3 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "159,1 ÷ 4 895 ≈ 0,0325."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Taï",
          "stepTheme": "Approfondissement",
          "stepTitle": "La productivité d’une parcelle de Taï",
          "paragraphText": "Augmentation des parties vivantes en un an : arbres **+60**, arbustes **+20,5**, herbes **+0,5**, racines **+23,6** = **104,6 kg** pour 100 m², soit ≈ **10,5 t/ha/an**. La **litière**, matière morte qui se décompose, n’est pas comptée.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q6",
            "type": "mcq",
            "prompt": "Sur 100 m² de forêt, en un an : arbres +60 kg, arbustes +20,5 kg, herbes +0,5 kg, racines +23,6 kg (la litière, matière morte, a diminué). Quelle est la productivité de la parcelle ?",
            "options": [
              "Environ 104,6 kg pour 100 m², soit environ 10,5 t/ha/an",
              "Environ 2 440 kg pour 100 m²",
              "Environ 1 kg par hectare",
              "Environ 3 300 kg pour 100 m²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "60 + 20,5 + 0,5 + 23,6 = 104,6 kg."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Biomasse d’une parcelle de 100 m² de forêt (kg de matière sèche)",
            "caption": "Exercice d’approfondissement : forêt classée de Taï.",
            "tableData": {
              "headers": [
                "",
                "1re année",
                "2e année",
                "Variation"
              ],
              "rows": [
                [
                  "Arbres",
                  2440,
                  2500,
                  "+60"
                ],
                [
                  "Arbustes",
                  185,
                  "205,5",
                  "+20,5"
                ],
                [
                  "Herbes",
                  13,
                  "13,5",
                  "+0,5"
                ],
                [
                  "Racines",
                  "566,7",
                  "590,3",
                  "+23,6"
                ],
                [
                  "Litière (matière morte)",
                  "53,3",
                  "35,8",
                  "−17,5"
                ]
              ]
            }
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q1",
          "type": "mcq",
          "prompt": "Dans une forêt, les producteurs emmagasinent 38 500 kJ/m²/an sur 2 000 000 kJ/m²/an d’énergie solaire incidente. Quel pourcentage cela représente-t-il ?",
          "options": [
            "Environ 1,93 %",
            "Environ 1,2 %",
            "Environ 19 %",
            "Environ 0,45 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "38 500 ÷ 20 000 = 1,925."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q2",
          "type": "mcq",
          "prompt": "Les consommateurs I d’une forêt emmagasinent 9 000 kJ/m²/an sur 2 000 000 kJ/m²/an d’énergie solaire. Quel pourcentage ?",
          "options": [
            "0,45 %",
            "4,5 %",
            "0,002 %",
            "45 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "9 000 ÷ 20 000 = 0,45."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q3",
          "type": "mcq",
          "prompt": "Pourquoi nourrir des populations avec des végétaux est-il plus efficace qu’avec de la viande ?",
          "options": [
            "Parce qu’une chaîne courte perd moins d’énergie qu’une chaîne longue",
            "Parce que les végétaux contiennent plus d’énergie que le soleil",
            "Parce que la viande ne contient pas d’énergie",
            "Parce que les animaux ne respirent pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque niveau en plus divise l’énergie disponible."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q4",
          "type": "mcq",
          "prompt": "Une forêt de chênes produit chaque année des feuilles, du bois et des racines. Comment calcule-t-on sa productivité annuelle ?",
          "options": [
            "En additionnant la matière produite en un an par les feuilles, le bois et les racines",
            "En mesurant seulement les feuilles",
            "En comptant les animaux",
            "En mesurant la biomasse totale de la forêt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On convertit l’énergie en masse : 17 kJ par gramme."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q5",
          "type": "mcq",
          "prompt": "Une forêt de chênes de biomasse 4 895.10⁶ kJ produit chaque année 59,3.10⁶ kJ de feuilles, 84,4.10⁶ kJ de bois et 15,4.10⁶ kJ de racines. Quel pourcentage de la biomasse cette production représente-t-elle ?",
          "options": [
            "Environ 3,25 %",
            "Environ 2,93 %",
            "Environ 32,5 %",
            "Environ 0,3 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "159,1 ÷ 4 895 ≈ 0,0325."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q6",
          "type": "mcq",
          "prompt": "Sur 100 m² de forêt, en un an : arbres +60 kg, arbustes +20,5 kg, herbes +0,5 kg, racines +23,6 kg (la litière, matière morte, a diminué). Quelle est la productivité de la parcelle ?",
          "options": [
            "Environ 104,6 kg pour 100 m², soit environ 10,5 t/ha/an",
            "Environ 2 440 kg pour 100 m²",
            "Environ 1 kg par hectare",
            "Environ 3 300 kg pour 100 m²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "60 + 20,5 + 0,5 + 23,6 = 104,6 kg."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05",
      "order": 5,
      "title": "Les apports extérieurs d’un agrosystème",
      "summary": "Machines, carburant, engrais, irrigation : une productivité qui coûte.",
      "conceptExplanation": "- Situation : un tableau compare un agrosystème et un écosystème naturel. L’agrosystème reçoit des apports extérieurs (machinisme, carburant, semences, engrais, irrigation, insecticides, herbicides, séchage, électricité et transport) ; l’écosystème naturel n’en reçoit aucun.\n- La productivité (biomasse produite) de l’agrosystème (116 237) est plus grande que celle de l’écosystème naturel (93 000), mais au prix d’apports importants, dont la somme (63 611) n’est pas négligeable.\n- L’agrosystème fournit une récolte (environ 9 t par hectare et par an) : la biomasse exportée. Dans l’écosystème naturel, la récolte est nulle : toute la production est utilisée sur place par les êtres vivants, car le cycle de la matière est fermé.\n- Intérêt d’un agrosystème : produire beaucoup de nourriture récoltable pour l’Homme. Ses limites : il dépend d’apports coûteux (énergie, engrais, pesticides), appauvrit la biodiversité et peut polluer les sols et les eaux.\n- Productivité primaire : la photosynthèse des végétaux est la source de toute la matière organique des deux écosystèmes.",
      "keyRule": "Agrosystème : productivité élevée et récolte exportée, grâce à des apports extérieurs. Écosystème naturel : aucun apport, aucune exportation, cycle fermé.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la récolte nulle de la forêt",
        "statement": "Pourquoi la biomasse exportée d’un écosystème naturel est-elle nulle ?",
        "methodSteps": [
          "Personne n’y récolte de production.",
          "La matière produite est consommée puis décomposée sur place : le cycle est fermé."
        ],
        "conclusion": "Rien ne sort de l’écosystème naturel : la récolte vaut 0."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Apports",
          "stepTheme": "Analyse",
          "stepTitle": "Les apports extérieurs",
          "paragraphText": "L’agrosystème reçoit des **apports extérieurs** : machines, carburant, semences, **engrais**, **irrigation**, insecticides, herbicides, séchage, transport. L’écosystème naturel n’en reçoit **aucun**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q1",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est un apport extérieur typique d’un agrosystème ?",
            "options": [
              "Les engrais",
              "La lumière du soleil",
              "Les décomposeurs du sol",
              "La pluie naturelle seule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont des apports de l’Homme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Productivité",
          "stepTheme": "Comparer",
          "stepTitle": "Une productivité plus grande",
          "paragraphText": "La productivité de l’agrosystème (**116 237**) dépasse celle de l’écosystème naturel (**93 000**), grâce aux apports de l’Homme.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q2",
            "type": "mcq",
            "prompt": "Dans le tableau, la productivité d’un agrosystème vaut 116 237 et celle d’un écosystème naturel 93 000 (mêmes unités). Pourquoi l’agrosystème produit-il plus ?",
            "options": [
              "Grâce aux apports extérieurs : engrais, irrigation, machines…",
              "Parce qu’il a plus d’espèces",
              "Parce qu’il reçoit plus de soleil",
              "Parce qu’il n’a pas de producteurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces apports ont un coût en énergie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Récolte nulle",
          "stepTheme": "Question 2",
          "stepTitle": "Pourquoi rien n’est exporté de la forêt",
          "paragraphText": "Dans l’écosystème naturel, la **récolte** vaut **0** : toute la production est **utilisée sur place** par les êtres vivants, le cycle de la matière est **fermé**.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q3",
            "type": "mcq",
            "prompt": "Pourquoi la biomasse exportée (récolte) d’un écosystème naturel est-elle nulle ?",
            "options": [
              "Parce que sa production est utilisée sur place : le cycle de la matière est fermé",
              "Parce qu’il ne produit rien",
              "Parce que tous ses végétaux sont morts",
              "Parce qu’il est trop petit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rien n’est retiré par l’Homme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Intérêt",
          "stepTheme": "Question 3",
          "stepTitle": "L’intérêt d’un agrosystème",
          "paragraphText": "L’agrosystème permet de **produire beaucoup** de matière **récoltable** pour nourrir les populations.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q4",
            "type": "mcq",
            "prompt": "Quel est le principal intérêt d’un agrosystème ?",
            "options": [
              "Produire beaucoup de nourriture récoltable pour l’Homme",
              "Augmenter la biodiversité",
              "Fermer le cycle de la matière",
              "Supprimer tout apport d’énergie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est un écosystème très productif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Limites",
          "stepTheme": "Nuance",
          "stepTitle": "Les limites d’un agrosystème",
          "paragraphText": "Ses apports sont **coûteux** (énergie, engrais, pesticides), il **réduit la biodiversité** et peut **polluer** les sols et les eaux.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces propositions est une limite des agrosystèmes ?",
            "options": [
              "Ils dépendent d’apports coûteux et peuvent polluer les sols et les eaux",
              "Ils ne produisent aucune récolte",
              "Ils n’ont pas besoin de lumière",
              "Ils augmentent toujours la biodiversité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’où l’intérêt d’une agriculture raisonnée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Texte à trous",
          "stepTheme": "Exercice 2",
          "stepTitle": "Compléter le texte",
          "paragraphText": "« La forêt, **écosystème** constitué essentiellement d’arbres, pourrait être considérée comme **naturelle** si l’Homme n’intervenait pas. **L’agrosystème** est cultivé par l’Homme. Une comparaison des **rendements** permet de les distinguer. »",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q6",
            "type": "mcq",
            "prompt": "Complète : « La forêt, … constitué essentiellement d’arbres, pourrait être considérée comme naturelle si l’Homme n’intervenait aucunement. »",
            "options": [
              "écosystème",
              "rendement",
              "agrosystème",
              "monoculture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 1 écosystème, 2 naturelle, 3 l’agrosystème, 4 rendements."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q1",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est un apport extérieur typique d’un agrosystème ?",
          "options": [
            "Les engrais",
            "La lumière du soleil",
            "Les décomposeurs du sol",
            "La pluie naturelle seule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont des apports de l’Homme."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q2",
          "type": "mcq",
          "prompt": "Dans le tableau, la productivité d’un agrosystème vaut 116 237 et celle d’un écosystème naturel 93 000 (mêmes unités). Pourquoi l’agrosystème produit-il plus ?",
          "options": [
            "Grâce aux apports extérieurs : engrais, irrigation, machines…",
            "Parce qu’il a plus d’espèces",
            "Parce qu’il reçoit plus de soleil",
            "Parce qu’il n’a pas de producteurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces apports ont un coût en énergie."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q3",
          "type": "mcq",
          "prompt": "Pourquoi la biomasse exportée (récolte) d’un écosystème naturel est-elle nulle ?",
          "options": [
            "Parce que sa production est utilisée sur place : le cycle de la matière est fermé",
            "Parce qu’il ne produit rien",
            "Parce que tous ses végétaux sont morts",
            "Parce qu’il est trop petit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rien n’est retiré par l’Homme."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q4",
          "type": "mcq",
          "prompt": "Quel est le principal intérêt d’un agrosystème ?",
          "options": [
            "Produire beaucoup de nourriture récoltable pour l’Homme",
            "Augmenter la biodiversité",
            "Fermer le cycle de la matière",
            "Supprimer tout apport d’énergie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est un écosystème très productif."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces propositions est une limite des agrosystèmes ?",
          "options": [
            "Ils dépendent d’apports coûteux et peuvent polluer les sols et les eaux",
            "Ils ne produisent aucune récolte",
            "Ils n’ont pas besoin de lumière",
            "Ils augmentent toujours la biodiversité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’où l’intérêt d’une agriculture raisonnée."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p05_q6",
          "type": "mcq",
          "prompt": "Complète : « La forêt, … constitué essentiellement d’arbres, pourrait être considérée comme naturelle si l’Homme n’intervenait aucunement. »",
          "options": [
            "écosystème",
            "rendement",
            "agrosystème",
            "monoculture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 1 écosystème, 2 naturelle, 3 l’agrosystème, 4 rendements."
        }
      ]
    }
  ]
};
