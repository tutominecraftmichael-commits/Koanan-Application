import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère C_L5_La fécondation chez les mammifères.pdf (Mon école à la maison ; le document l’intitule « Leçon 2 ») ». Première C et D (programme de SVT commun).
// Fichier généré (scratchpad build_1re_c_svt_b.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_C_L05_FECONDATION_MAMMIFERES: CurriculumChapter = {
  "id": "premiere_c_svt_l05_fecondation_mammiferes",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "orderForGrades": {
    "premiere_d": 10
  },
  "order": 5,
  "title": "Leçon 5 : La fécondation chez les mammifères",
  "summary": "Migration et rencontre des gamètes, capacitation, pénétration d’un spermatozoïde, activation de l’ovocyte II, pronucléi et caryogamie, rôles de la fécondation et transmission du VIH de la mère à l’enfant.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "SVT 1ère C_L5_La fécondation chez les mammifères.pdf (Mon école à la maison ; le document l’intitule « Leçon 2 »)",
  "points": [
    {
      "id": "premiere_c_svt_l05_fecondation_mammiferes_p01",
      "order": 1,
      "title": "La migration et la rencontre des gamètes",
      "summary": "L’ovocyte II descend la trompe, les spermatozoïdes remontent ; sélection et capacitation.",
      "conceptExplanation": "Situation : des élèves de 1re C du Lycée classique d’Abidjan préparent un exposé : l’ovule est fécondé par un spermatozoïde dans les voies génitales de la femme, puis se forme un nouvel individu, qui peut parfois naître séropositif.\n- Migration du gamète femelle : à l’ovulation, l’ovocyte II (haploïde) est capté par le pavillon de la trompe, puis poussé par les cils vibratiles jusqu’à l’ampoule, où a lieu la fécondation.\n- Migration des gamètes mâles : 200 à 350 millions de spermatozoïdes sont déposés dans le vagin. Grâce à leur flagelle, ils traversent le vagin, le col de l’utérus, l’utérus puis la trompe jusqu’à l’ampoule.\n- Leur nombre se réduit fortement : l’acidité du vagin en détruit une grande partie, la glaire cervicale arrête les spermatozoïdes anormaux, des cellules phagocytaires de l’utérus en détruisent d’autres. Seules quelques centaines atteignent l’ovocyte II.\n- Pendant ce trajet, les spermatozoïdes acquièrent leur pouvoir fécondant : c’est la capacitation.\n- Rencontre : quelques spermatozoïdes arrivent au contact de l’ovocyte II dans l’ampoule.\n- Correction du document : dans la situation d’évaluation 2, il donne la capacitation comme « conséquence » de la réduction du nombre de spermatozoïdes. La capacitation a lieu pendant la migration, mais la conséquence de cette sélection est que seuls quelques centaines de spermatozoïdes, les plus aptes, atteignent l’ovocyte.",
      "keyRule": "Ovocyte II : pavillon → ampoule (cils). Spermatozoïdes : vagin → col → utérus → trompe (flagelle), sélection et capacitation. Fécondation dans l’ampoule.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la réduction du nombre de spermatozoïdes",
        "statement": "Sur 300 millions de spermatozoïdes déposés, quelques centaines seulement atteignent l’ovocyte. Pourquoi ?",
        "methodSteps": [
          "L’acidité du vagin en détruit beaucoup ; la glaire cervicale arrête les anormaux.",
          "Des cellules phagocytaires de l’utérus en détruisent d’autres, et le trajet est long."
        ],
        "conclusion": "Seuls les spermatozoïdes les plus aptes, capacités, arrivent dans l’ampoule."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Ovocyte II",
          "stepTheme": "Migration",
          "stepTitle": "Le trajet de l’ovocyte II",
          "paragraphText": "À l’ovulation, l’**ovocyte II** est capté par le **pavillon** de la trompe puis poussé par les **cils vibratiles** jusqu’à l’**ampoule**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q1",
            "type": "mcq",
            "prompt": "Après l’ovulation, qu’est-ce qui fait avancer l’ovocyte II dans la trompe ?",
            "options": [
              "Les mouvements des cils vibratiles de la trompe",
              "Son propre flagelle",
              "Les contractions du vagin",
              "La glaire cervicale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ovocyte II n’a pas de flagelle."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les étapes de la fécondation",
            "caption": "De la rencontre des gamètes à la première division de la cellule-œuf, dans l’ampoule de la trompe.",
            "svgContent": "<svg viewBox=\"0 0 560 250\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Migration, rencontre, pénétration, activation, pronucléi, caryogamie, zygote, stade 2 cellules\"><rect x=\"10\" y=\"20\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"72.5\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">1. Migration</text><text x=\"72.5\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">des gamètes</text><line x1=\"137\" y1=\"48\" x2=\"138.0\" y2=\"48.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"147,48 138.0,43.0 138.0,53.0\" fill=\"#94A3B8\"/><rect x=\"150\" y=\"20\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"212.5\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">2. Rencontre</text><text x=\"212.5\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">dans l’ampoule</text><line x1=\"277\" y1=\"48\" x2=\"278.0\" y2=\"48.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"287,48 278.0,43.0 278.0,53.0\" fill=\"#94A3B8\"/><rect x=\"290\" y=\"20\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"352.5\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">3. Pénétration</text><text x=\"352.5\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">d’un spermatozoïde</text><line x1=\"417\" y1=\"48\" x2=\"418.0\" y2=\"48.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"427,48 418.0,43.0 418.0,53.0\" fill=\"#94A3B8\"/><rect x=\"430\" y=\"20\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"492.5\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">4. Activation</text><text x=\"492.5\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">de l’ovocyte II</text><line x1=\"492\" y1=\"78\" x2=\"492.0\" y2=\"103.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"492,112 497.0,103.0 487.0,103.0\" fill=\"#94A3B8\"/><rect x=\"430\" y=\"116\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"492.5\" y=\"140.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">5. Pronucléi</text><text x=\"492.5\" y=\"155.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">♂ et ♀ (n)</text><line x1=\"428\" y1=\"144\" x2=\"427.0\" y2=\"144.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"418,144 427.0,149.0 427.0,139.0\" fill=\"#94A3B8\"/><rect x=\"290\" y=\"116\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"352.5\" y=\"140.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">6. Caryogamie</text><text x=\"352.5\" y=\"155.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">fusion des noyaux</text><line x1=\"288\" y1=\"144\" x2=\"287.0\" y2=\"144.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"278,144 287.0,149.0 287.0,139.0\" fill=\"#94A3B8\"/><rect x=\"150\" y=\"116\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"212.5\" y=\"140.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">7. Zygote</text><text x=\"212.5\" y=\"155.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">cellule-œuf (2n)</text><line x1=\"148\" y1=\"144\" x2=\"147.0\" y2=\"144.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"138,144 147.0,149.0 147.0,139.0\" fill=\"#94A3B8\"/><rect x=\"10\" y=\"116\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"72.5\" y=\"140.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">8. Stade</text><text x=\"72.5\" y=\"155.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">2 cellules</text><text x=\"280\" y=\"205\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">Activation : granules corticaux → membrane de fécondation (pas de polyspermie)</text><text x=\"280\" y=\"222\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">et fin de la méiose (2e globule polaire) : l’ovocyte II devient ovule</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Ampoule",
          "stepTheme": "Lieu",
          "stepTitle": "Où a lieu la fécondation ?",
          "paragraphText": "La fécondation a lieu dans l’**ampoule**, la partie large de la **trompe**, près de l’ovaire.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q2",
            "type": "mcq",
            "prompt": "Dans quelle partie des voies génitales de la femme a lieu la fécondation ?",
            "options": [
              "Dans l’ampoule de la trompe",
              "Dans le vagin",
              "Dans l’ovaire",
              "Dans le col de l’utérus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’embryon descend ensuite vers l’utérus."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Spermatozoïdes",
          "stepTheme": "Migration",
          "stepTitle": "La remontée des spermatozoïdes",
          "paragraphText": "Grâce à leur **flagelle**, les spermatozoïdes traversent le **vagin**, le **col**, l’**utérus** puis la **trompe** jusqu’à l’ampoule.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q3",
            "type": "mcq",
            "prompt": "Dans quel ordre les spermatozoïdes traversent-ils les voies génitales de la femme ?",
            "options": [
              "Vagin, col de l’utérus, utérus, trompe",
              "Utérus, vagin, trompe, col",
              "Trompe, utérus, col, vagin",
              "Ovaire, trompe, utérus, vagin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ils remontent du vagin vers la trompe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Sélection",
          "stepTheme": "Réduction",
          "stepTitle": "Peu de spermatozoïdes arrivent",
          "paragraphText": "Sur **200 à 350 millions** de spermatozoïdes déposés, seules **quelques centaines** atteignent l’ovocyte : acidité du vagin, glaire cervicale, cellules phagocytaires.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q4",
            "type": "mcq",
            "prompt": "Sur 300 millions de spermatozoïdes déposés dans le vagin, combien en arrive-t-il environ près de l’ovocyte II ?",
            "options": [
              "Quelques centaines",
              "Les 300 millions",
              "Environ 100 millions",
              "Aucun"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La plupart sont éliminés en chemin."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La sélection des spermatozoïdes dans les voies génitales",
            "caption": "Sur 200 à 350 millions de spermatozoïdes déposés, seules quelques centaines atteignent l’ovocyte II.",
            "tableData": {
              "headers": [
                "Lieu",
                "Obstacle",
                "Effet"
              ],
              "rows": [
                [
                  "Vagin",
                  "Milieu acide",
                  "Une grande partie des spermatozoïdes est détruite"
                ],
                [
                  "Col de l’utérus",
                  "Glaire cervicale",
                  "Les spermatozoïdes anormaux sont arrêtés"
                ],
                [
                  "Utérus",
                  "Cellules phagocytaires",
                  "Des spermatozoïdes sont détruits comme éléments étrangers"
                ],
                [
                  "Trompes",
                  "Long trajet jusqu’à l’ampoule",
                  "Quelques centaines arrivent, capacités (pouvoir fécondant)"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Capacitation",
          "stepTheme": "Pouvoir fécondant",
          "stepTitle": "La capacitation",
          "paragraphText": "Pendant leur remontée, les spermatozoïdes acquièrent leur **pouvoir fécondant** : c’est la **capacitation**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’acquisition du pouvoir fécondant par les spermatozoïdes dans les voies génitales de la femme ?",
            "options": [
              "La capacitation",
              "La caryogamie",
              "La polyspermie",
              "L’ovulation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité 2 : 3-d."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Glaire",
          "stepTheme": "Rôle",
          "stepTitle": "Le rôle de la glaire cervicale",
          "paragraphText": "Au niveau du **col de l’utérus**, la **glaire cervicale** arrête les spermatozoïdes **anormaux**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q6",
            "type": "mcq",
            "prompt": "Quel est le rôle de la glaire cervicale dans la sélection des spermatozoïdes ?",
            "options": [
              "Elle arrête les spermatozoïdes anormaux au niveau du col",
              "Elle nourrit tous les spermatozoïdes",
              "Elle détruit l’ovocyte II",
              "Elle produit les spermatozoïdes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’acidité du vagin et les phagocytes de l’utérus éliminent les autres."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q1",
          "type": "mcq",
          "prompt": "Après l’ovulation, qu’est-ce qui fait avancer l’ovocyte II dans la trompe ?",
          "options": [
            "Les mouvements des cils vibratiles de la trompe",
            "Son propre flagelle",
            "Les contractions du vagin",
            "La glaire cervicale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ovocyte II n’a pas de flagelle."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q2",
          "type": "mcq",
          "prompt": "Dans quelle partie des voies génitales de la femme a lieu la fécondation ?",
          "options": [
            "Dans l’ampoule de la trompe",
            "Dans le vagin",
            "Dans l’ovaire",
            "Dans le col de l’utérus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’embryon descend ensuite vers l’utérus."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q3",
          "type": "mcq",
          "prompt": "Dans quel ordre les spermatozoïdes traversent-ils les voies génitales de la femme ?",
          "options": [
            "Vagin, col de l’utérus, utérus, trompe",
            "Utérus, vagin, trompe, col",
            "Trompe, utérus, col, vagin",
            "Ovaire, trompe, utérus, vagin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ils remontent du vagin vers la trompe."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q4",
          "type": "mcq",
          "prompt": "Sur 300 millions de spermatozoïdes déposés dans le vagin, combien en arrive-t-il environ près de l’ovocyte II ?",
          "options": [
            "Quelques centaines",
            "Les 300 millions",
            "Environ 100 millions",
            "Aucun"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La plupart sont éliminés en chemin."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’acquisition du pouvoir fécondant par les spermatozoïdes dans les voies génitales de la femme ?",
          "options": [
            "La capacitation",
            "La caryogamie",
            "La polyspermie",
            "L’ovulation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité 2 : 3-d."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q6",
          "type": "mcq",
          "prompt": "Quel est le rôle de la glaire cervicale dans la sélection des spermatozoïdes ?",
          "options": [
            "Elle arrête les spermatozoïdes anormaux au niveau du col",
            "Elle nourrit tous les spermatozoïdes",
            "Elle détruit l’ovocyte II",
            "Elle produit les spermatozoïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’acidité du vagin et les phagocytes de l’utérus éliminent les autres."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l05_fecondation_mammiferes_p02",
      "order": 2,
      "title": "La pénétration d’un spermatozoïde et l’activation de l’ovocyte",
      "summary": "Reconnaissance, réaction acrosomique, fusion, granules corticaux et fin de la méiose.",
      "conceptExplanation": "- Autour de l’ovocyte II : la corona radiata (cellules folliculaires) et la zone pellucide. Les spermatozoïdes se faufilent entre les cellules folliculaires et atteignent la zone pellucide, où a lieu une reconnaissance entre gamètes de la même espèce.\n- Les enzymes de l’acrosome digèrent un passage dans la zone pellucide (réaction acrosomique). La membrane du spermatozoïde fusionne alors avec celle de l’ovocyte II, et le noyau du spermatozoïde entre dans l’ovocyte.\n- Cette pénétration active l’ovocyte II :\n- les granules corticaux libèrent leur contenu sous la zone pellucide, qui forme la membrane de fécondation, imperméable aux autres spermatozoïdes : la polyspermie est empêchée ;\n- la méiose, bloquée en métaphase II, s’achève : l’ovocyte expulse le 2e globule polaire et devient l’ovule.\n- Correction du document : il écrit que le spermatozoïde « digère la membrane de l’ovocyte II ». Les enzymes de l’acrosome digèrent la zone pellucide ; la membrane de l’ovocyte, elle, fusionne avec celle du spermatozoïde.",
      "keyRule": "Acrosome → passage dans la zone pellucide ; fusion des membranes ; activation : membrane de fécondation (pas de polyspermie) + 2e globule polaire (ovule).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer pourquoi un seul spermatozoïde entre",
        "statement": "Plusieurs spermatozoïdes entourent l’ovocyte II, mais un seul y pénètre. Pourquoi ?",
        "methodSteps": [
          "Dès qu’un spermatozoïde pénètre, l’ovocyte est activé.",
          "Les granules corticaux libèrent leur contenu et forment la membrane de fécondation, infranchissable."
        ],
        "conclusion": "La polyspermie est empêchée : un seul spermatozoïde féconde l’ovocyte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Acrosome",
          "stepTheme": "Enzymes",
          "stepTitle": "Le rôle de l’acrosome",
          "paragraphText": "Les **enzymes de l’acrosome** digèrent un passage dans la **zone pellucide** : c’est la **réaction acrosomique**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q1",
            "type": "mcq",
            "prompt": "Quel est le rôle des enzymes contenues dans l’acrosome du spermatozoïde ?",
            "options": [
              "Digérer un passage dans la zone pellucide de l’ovocyte",
              "Faire battre le flagelle",
              "Produire l’ATP du spermatozoïde",
              "Former la membrane de fécondation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’acrosome est un « capuchon » d’enzymes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "Fusion",
          "stepTheme": "Erreur du document",
          "stepTitle": "Digérer ou fusionner ?",
          "paragraphText": "Le document dit que le spermatozoïde « **digère la membrane** de l’ovocyte ». En fait, les enzymes digèrent la **zone pellucide** ; puis la membrane du spermatozoïde **fusionne** avec celle de l’ovocyte.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q2",
            "type": "mcq",
            "prompt": "Comment le noyau du spermatozoïde entre-t-il dans l’ovocyte II, une fois la zone pellucide traversée ?",
            "options": [
              "La membrane du spermatozoïde fusionne avec celle de l’ovocyte",
              "Les enzymes détruisent toute la membrane de l’ovocyte",
              "L’ovocyte avale plusieurs spermatozoïdes",
              "Le spermatozoïde traverse l’ovocyte de part en part"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fusion des membranes laisse entrer le noyau."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Activation",
          "stepTheme": "Ovocyte II",
          "stepTitle": "L’activation de l’ovocyte",
          "paragraphText": "La pénétration **active** l’ovocyte II : réaction des **granules corticaux** et **fin de la méiose**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q3",
            "type": "mcq",
            "prompt": "Que provoque la pénétration d’un spermatozoïde dans l’ovocyte II ?",
            "options": [
              "L’activation de l’ovocyte : réaction corticale et fin de la méiose",
              "La mort immédiate de l’ovocyte",
              "Une nouvelle ovulation",
              "La formation d’un nouveau follicule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité 2 : l’activation correspond à la reprise et à l’achèvement de la méiose."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Granules corticaux",
          "stepTheme": "Polyspermie",
          "stepTitle": "Un seul spermatozoïde",
          "paragraphText": "Les **granules corticaux** libèrent leur contenu : il se forme la **membrane de fécondation**, imperméable aux autres spermatozoïdes. La **polyspermie** est empêchée.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q4",
            "type": "mcq",
            "prompt": "Comment l’ovocyte empêche-t-il l’entrée de plusieurs spermatozoïdes (polyspermie) ?",
            "options": [
              "Les granules corticaux forment une membrane de fécondation imperméable",
              "Il se déplace plus vite que les spermatozoïdes",
              "Il détruit tous les spermatozoïdes avant la rencontre",
              "Il ferme la trompe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Polyspermie = entrée de plusieurs spermatozoïdes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "2e globule polaire",
          "stepTheme": "Méiose",
          "stepTitle": "L’ovocyte II devient ovule",
          "paragraphText": "La méiose, bloquée en **métaphase II**, s’achève : l’ovocyte expulse le **2e globule polaire** et devient l’**ovule**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q5",
            "type": "mcq",
            "prompt": "Une cellule entourée de cellules folliculaires porte deux globules polaires. De quelle cellule s’agit-il ?",
            "options": [
              "D’un ovule, dont la méiose est achevée",
              "D’un ovocyte II bloqué en métaphase II",
              "D’un ovocyte I",
              "D’un spermatozoïde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un globule polaire : ovocyte II ; deux : ovule."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Ordre",
          "stepTheme": "Activité 3",
          "stepTitle": "Remettre les étapes dans l’ordre",
          "paragraphText": "Ordre : **migration → rencontre → reconnaissance → pénétration d’un seul spermatozoïde → éclatement des granules corticaux → fusion des noyaux → zygote**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q6",
            "type": "mcq",
            "prompt": "Quelle étape vient juste après la pénétration d’un seul spermatozoïde dans l’ovocyte II ?",
            "options": [
              "L’éclatement des granules corticaux",
              "La migration des gamètes",
              "La rencontre des gamètes",
              "Le stade 2 cellules"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : F-D-A-G-C-B-E."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q1",
          "type": "mcq",
          "prompt": "Quel est le rôle des enzymes contenues dans l’acrosome du spermatozoïde ?",
          "options": [
            "Digérer un passage dans la zone pellucide de l’ovocyte",
            "Faire battre le flagelle",
            "Produire l’ATP du spermatozoïde",
            "Former la membrane de fécondation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’acrosome est un « capuchon » d’enzymes."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q2",
          "type": "mcq",
          "prompt": "Comment le noyau du spermatozoïde entre-t-il dans l’ovocyte II, une fois la zone pellucide traversée ?",
          "options": [
            "La membrane du spermatozoïde fusionne avec celle de l’ovocyte",
            "Les enzymes détruisent toute la membrane de l’ovocyte",
            "L’ovocyte avale plusieurs spermatozoïdes",
            "Le spermatozoïde traverse l’ovocyte de part en part"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fusion des membranes laisse entrer le noyau."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q3",
          "type": "mcq",
          "prompt": "Que provoque la pénétration d’un spermatozoïde dans l’ovocyte II ?",
          "options": [
            "L’activation de l’ovocyte : réaction corticale et fin de la méiose",
            "La mort immédiate de l’ovocyte",
            "Une nouvelle ovulation",
            "La formation d’un nouveau follicule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité 2 : l’activation correspond à la reprise et à l’achèvement de la méiose."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q4",
          "type": "mcq",
          "prompt": "Comment l’ovocyte empêche-t-il l’entrée de plusieurs spermatozoïdes (polyspermie) ?",
          "options": [
            "Les granules corticaux forment une membrane de fécondation imperméable",
            "Il se déplace plus vite que les spermatozoïdes",
            "Il détruit tous les spermatozoïdes avant la rencontre",
            "Il ferme la trompe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Polyspermie = entrée de plusieurs spermatozoïdes."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q5",
          "type": "mcq",
          "prompt": "Une cellule entourée de cellules folliculaires porte deux globules polaires. De quelle cellule s’agit-il ?",
          "options": [
            "D’un ovule, dont la méiose est achevée",
            "D’un ovocyte II bloqué en métaphase II",
            "D’un ovocyte I",
            "D’un spermatozoïde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un globule polaire : ovocyte II ; deux : ovule."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q6",
          "type": "mcq",
          "prompt": "Quelle étape vient juste après la pénétration d’un seul spermatozoïde dans l’ovocyte II ?",
          "options": [
            "L’éclatement des granules corticaux",
            "La migration des gamètes",
            "La rencontre des gamètes",
            "Le stade 2 cellules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : F-D-A-G-C-B-E."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l05_fecondation_mammiferes_p03",
      "order": 3,
      "title": "Des pronucléi à la cellule-œuf",
      "summary": "Pronucléi mâle et femelle, caryogamie, zygote diploïde, premières divisions.",
      "conceptExplanation": "- Formation des pronucléi : le noyau de l’ovule gonfle et devient le pronucléus femelle (n) ; celui du spermatozoïde gonfle aussi et devient le pronucléus mâle (n).\n- Caryogamie (amphimixie) : les deux pronucléi se rapprochent et fusionnent. Il se forme une cellule-œuf ou zygote, diploïde (2n) : le nombre de chromosomes de l’espèce est rétabli.\n- La cellule-œuf se divise ensuite par mitoses : stade 2 cellules, puis 4, 8… et, après des semaines de développement, un nouvel individu.\n- Définition : la fécondation est l’union d’un gamète mâle haploïde et d’un gamète femelle haploïde, qui donne une cellule-œuf diploïde (2n).\n- Correction du document : dans l’exercice des lapines, l’ordre donné (6-1-3-5-2) oublie le dessin 4 (formation des pronucléi). L’ordre complet est 6-1-4-3-5-2 : rencontre, pénétration, pronucléi, fusion, anaphase de la 1re division, stade 2 cellules.",
      "keyRule": "Pronucléus ♂ (n) + pronucléus ♀ (n) → caryogamie → zygote (2n) → mitoses → embryon.",
      "formulas": [],
      "workedExample": {
        "title": "Compter les chromosomes du zygote",
        "statement": "Chez l’Homme, combien de chromosomes portent chaque pronucléus et la cellule-œuf ?",
        "methodSteps": [
          "Chaque gamète est haploïde : 23 chromosomes par pronucléus.",
          "La caryogamie réunit les deux lots : 23 + 23."
        ],
        "conclusion": "La cellule-œuf a 46 chromosomes (2n) : la diploïdie est rétablie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Pronucléi",
          "stepTheme": "Noyaux",
          "stepTitle": "Les pronucléi",
          "paragraphText": "Dans l’ovule, le noyau femelle et le noyau du spermatozoïde **gonflent** : ce sont les **pronucléi** femelle et mâle, chacun **haploïde** (n).",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on les noyaux du spermatozoïde et de l’ovule qui gonflent dans l’ovule après la pénétration ?",
            "options": [
              "Les pronucléi mâle et femelle",
              "Les globules polaires",
              "Les granules corticaux",
              "Les chromatides"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pronucléus : « avant-noyau »."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les étapes de la fécondation",
            "caption": "De la rencontre des gamètes à la première division de la cellule-œuf, dans l’ampoule de la trompe.",
            "svgContent": "<svg viewBox=\"0 0 560 250\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Migration, rencontre, pénétration, activation, pronucléi, caryogamie, zygote, stade 2 cellules\"><rect x=\"10\" y=\"20\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"72.5\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">1. Migration</text><text x=\"72.5\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">des gamètes</text><line x1=\"137\" y1=\"48\" x2=\"138.0\" y2=\"48.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"147,48 138.0,43.0 138.0,53.0\" fill=\"#94A3B8\"/><rect x=\"150\" y=\"20\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"212.5\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">2. Rencontre</text><text x=\"212.5\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">dans l’ampoule</text><line x1=\"277\" y1=\"48\" x2=\"278.0\" y2=\"48.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"287,48 278.0,43.0 278.0,53.0\" fill=\"#94A3B8\"/><rect x=\"290\" y=\"20\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"352.5\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">3. Pénétration</text><text x=\"352.5\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">d’un spermatozoïde</text><line x1=\"417\" y1=\"48\" x2=\"418.0\" y2=\"48.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"427,48 418.0,43.0 418.0,53.0\" fill=\"#94A3B8\"/><rect x=\"430\" y=\"20\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"492.5\" y=\"44.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">4. Activation</text><text x=\"492.5\" y=\"59.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">de l’ovocyte II</text><line x1=\"492\" y1=\"78\" x2=\"492.0\" y2=\"103.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"492,112 497.0,103.0 487.0,103.0\" fill=\"#94A3B8\"/><rect x=\"430\" y=\"116\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"492.5\" y=\"140.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">5. Pronucléi</text><text x=\"492.5\" y=\"155.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">♂ et ♀ (n)</text><line x1=\"428\" y1=\"144\" x2=\"427.0\" y2=\"144.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"418,144 427.0,149.0 427.0,139.0\" fill=\"#94A3B8\"/><rect x=\"290\" y=\"116\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"352.5\" y=\"140.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">6. Caryogamie</text><text x=\"352.5\" y=\"155.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">fusion des noyaux</text><line x1=\"288\" y1=\"144\" x2=\"287.0\" y2=\"144.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"278,144 287.0,149.0 287.0,139.0\" fill=\"#94A3B8\"/><rect x=\"150\" y=\"116\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"212.5\" y=\"140.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">7. Zygote</text><text x=\"212.5\" y=\"155.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">cellule-œuf (2n)</text><line x1=\"148\" y1=\"144\" x2=\"147.0\" y2=\"144.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"138,144 147.0,149.0 147.0,139.0\" fill=\"#94A3B8\"/><rect x=\"10\" y=\"116\" width=\"125\" height=\"56\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"72.5\" y=\"140.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">8. Stade</text><text x=\"72.5\" y=\"155.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">2 cellules</text><text x=\"280\" y=\"205\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">Activation : granules corticaux → membrane de fécondation (pas de polyspermie)</text><text x=\"280\" y=\"222\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">et fin de la méiose (2e globule polaire) : l’ovocyte II devient ovule</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Caryogamie",
          "stepTheme": "Fusion",
          "stepTitle": "La caryogamie",
          "paragraphText": "La **fusion** des deux pronucléi s’appelle la **caryogamie** (ou amphimixie).",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la fusion des noyaux des gamètes mâle et femelle ?",
            "options": [
              "La caryogamie",
              "La capacitation",
              "La polyspermie",
              "La spermiogenèse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Caryo- : noyau ; -gamie : union."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Zygote",
          "stepTheme": "2n",
          "stepTitle": "La cellule-œuf diploïde",
          "paragraphText": "La caryogamie donne une **cellule-œuf** ou **zygote** **diploïde** (2n) : chez l’Homme, 23 + 23 = **46** chromosomes.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q3",
            "type": "mcq",
            "prompt": "Chez l’Homme, chaque pronucléus contient 23 chromosomes. Combien de chromosomes contient la cellule-œuf ?",
            "options": [
              "46",
              "23",
              "92",
              "24"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La diploïdie est rétablie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Divisions",
          "stepTheme": "Développement",
          "stepTitle": "Les premières divisions",
          "paragraphText": "La cellule-œuf se divise par **mitoses** : **stade 2 cellules**, puis 4, 8… jusqu’à former un **nouvel individu**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q4",
            "type": "mcq",
            "prompt": "Par quel type de division la cellule-œuf se divise-t-elle pour donner l’embryon ?",
            "options": [
              "Par mitoses",
              "Par méiose",
              "Par caryogamie",
              "Par capacitation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toutes les cellules de l’embryon sont 2n."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Lapines",
          "stepTheme": "Exercice 1",
          "stepTitle": "Remettre les dessins dans l’ordre",
          "paragraphText": "Rencontre (6), pénétration (1), **formation des pronucléi (4)**, fusion (3), anaphase de la 1re division (5), stade 2 cellules (2) : **6-1-4-3-5-2**. Le corrigé du document oublie le dessin 4.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q5",
            "type": "mcq",
            "prompt": "Dans l’exercice des lapines, les dessins montrent : 6 rencontre des gamètes, 1 pénétration, 4 formation des pronucléi, 3 fusion des pronucléi, 5 anaphase de la 1re division, 2 stade 2 cellules. Quel est l’ordre chronologique ?",
            "options": [
              "6-1-4-3-5-2",
              "6-1-3-5-2",
              "1-6-3-4-2-5",
              "2-5-3-4-1-6"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les pronucléi se forment avant de fusionner."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Fécondation",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce que la fécondation ?",
          "paragraphText": "La **fécondation** est l’union d’un gamète **mâle** et d’un gamète **femelle**, tous deux **haploïdes**, qui donne une cellule-œuf **diploïde**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q6",
            "type": "mcq",
            "prompt": "Qu’est-ce que la fécondation ?",
            "options": [
              "L’union de deux gamètes haploïdes qui donne une cellule-œuf diploïde",
              "La division d’une cellule diploïde en quatre",
              "L’expulsion de l’ovocyte par l’ovaire",
              "La formation des spermatozoïdes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "n + n = 2n."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les noyaux du spermatozoïde et de l’ovule qui gonflent dans l’ovule après la pénétration ?",
          "options": [
            "Les pronucléi mâle et femelle",
            "Les globules polaires",
            "Les granules corticaux",
            "Les chromatides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pronucléus : « avant-noyau »."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la fusion des noyaux des gamètes mâle et femelle ?",
          "options": [
            "La caryogamie",
            "La capacitation",
            "La polyspermie",
            "La spermiogenèse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Caryo- : noyau ; -gamie : union."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q3",
          "type": "mcq",
          "prompt": "Chez l’Homme, chaque pronucléus contient 23 chromosomes. Combien de chromosomes contient la cellule-œuf ?",
          "options": [
            "46",
            "23",
            "92",
            "24"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La diploïdie est rétablie."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q4",
          "type": "mcq",
          "prompt": "Par quel type de division la cellule-œuf se divise-t-elle pour donner l’embryon ?",
          "options": [
            "Par mitoses",
            "Par méiose",
            "Par caryogamie",
            "Par capacitation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toutes les cellules de l’embryon sont 2n."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q5",
          "type": "mcq",
          "prompt": "Dans l’exercice des lapines, les dessins montrent : 6 rencontre des gamètes, 1 pénétration, 4 formation des pronucléi, 3 fusion des pronucléi, 5 anaphase de la 1re division, 2 stade 2 cellules. Quel est l’ordre chronologique ?",
          "options": [
            "6-1-4-3-5-2",
            "6-1-3-5-2",
            "1-6-3-4-2-5",
            "2-5-3-4-1-6"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les pronucléi se forment avant de fusionner."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q6",
          "type": "mcq",
          "prompt": "Qu’est-ce que la fécondation ?",
          "options": [
            "L’union de deux gamètes haploïdes qui donne une cellule-œuf diploïde",
            "La division d’une cellule diploïde en quatre",
            "L’expulsion de l’ovocyte par l’ovaire",
            "La formation des spermatozoïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "n + n = 2n."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l05_fecondation_mammiferes_p04",
      "order": 4,
      "title": "Le rôle de la fécondation et le VIH",
      "summary": "Diploïdie, caryotype, sexe, diversité ; transmission du VIH de la mère à l’enfant.",
      "conceptExplanation": "- La fécondation rétablit la diploïdie en réunissant les chromosomes des deux gamètes.\n- Avec la méiose, elle assure la permanence du caryotype de l’espèce de génération en génération, et donc la pérennité de l’espèce.\n- La rencontre des gamètes se fait au hasard : chaque individu est différent de ses parents et des autres : c’est le polymorphisme (la diversité) des individus.\n- Elle détermine le sexe : chez l’Homme, l’ovule porte toujours un X ; le spermatozoïde apporte un X (fille) ou un Y (garçon).\n- Elle donne un nouvel individu.\n- VIH : une femme séropositive peut transmettre le virus à son enfant pendant la grossesse (par le placenta), pendant l’accouchement et pendant l’allaitement. Ce ne sont pas les gamètes qui transmettent le virus lors de la fécondation. Un dépistage pendant la grossesse et un traitement antirétroviral de la mère et du bébé réduisent ce risque à moins de 2 %.",
      "keyRule": "Fécondation : nouvel individu, diploïdie rétablie, caryotype conservé, sexe déterminé, individus tous différents. VIH mère-enfant : grossesse, accouchement, allaitement.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la détermination du sexe",
        "statement": "Pourquoi est-ce le spermatozoïde qui détermine le sexe de l’enfant ?",
        "methodSteps": [
          "L’ovule porte toujours un chromosome X.",
          "Le spermatozoïde porte soit un X, soit un Y."
        ],
        "conclusion": "Spermatozoïde X → fille (XX) ; spermatozoïde Y → garçon (XY)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepBadge": "Diploïdie",
          "stepTheme": "Rôle 1",
          "stepTitle": "Rétablir la diploïdie",
          "paragraphText": "La fécondation **rétablit le nombre diploïde** de chromosomes de l’espèce (2n), divisé par deux lors de la méiose.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q1",
            "type": "mcq",
            "prompt": "Quel rôle la fécondation joue-t-elle sur le nombre de chromosomes ?",
            "options": [
              "Elle rétablit le nombre diploïde (2n) de l’espèce",
              "Elle divise ce nombre par deux",
              "Elle le multiplie par quatre",
              "Elle ne le change pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Méiose : 2n → n ; fécondation : n + n → 2n."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Étapes et importance de la fécondation",
            "caption": "Activité : ranger chaque expression dans la bonne colonne.",
            "tableData": {
              "headers": [
                "Étapes",
                "Importance"
              ],
              "rows": [
                [
                  "Rencontre des gamètes",
                  "Obtention d’un nouvel individu"
                ],
                [
                  "Pénétration d’un spermatozoïde",
                  "Rétablissement de la diploïdie (2n)"
                ],
                [
                  "Formation des pronucléi",
                  "Permanence du caryotype de l’espèce"
                ],
                [
                  "Fusion des noyaux (caryogamie)",
                  "Détermination du sexe (X ou Y apporté par le spermatozoïde)"
                ],
                [
                  "Division de la cellule-œuf",
                  "Polymorphisme : des individus tous différents"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Caryotype",
          "stepTheme": "Rôle 2",
          "stepTitle": "Un caryotype constant",
          "paragraphText": "Méiose et fécondation, en alternance, assurent la **permanence du caryotype** de l’espèce de génération en génération.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q2",
            "type": "mcq",
            "prompt": "Quels phénomènes assurent ensemble la conservation du caryotype de l’espèce de génération en génération ?",
            "options": [
              "La méiose et la fécondation",
              "La mitose seule",
              "La capacitation et l’ovulation",
              "La digestion et la respiration"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’un divise par deux, l’autre rétablit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Diversité",
          "stepTheme": "Rôle 3",
          "stepTitle": "Des individus tous différents",
          "paragraphText": "Les gamètes se rencontrent **au hasard** : chaque enfant est **différent** de ses parents et de ses frères et sœurs. C’est le **polymorphisme**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q3",
            "type": "mcq",
            "prompt": "Pourquoi deux enfants des mêmes parents (non jumeaux) sont-ils différents ?",
            "options": [
              "Parce que des gamètes différents se rencontrent au hasard à chaque fécondation",
              "Parce qu’ils n’ont pas les mêmes parents",
              "Parce que la fécondation copie un seul parent",
              "Parce que leurs cellules sont haploïdes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les brassages de la méiose et le hasard de la fécondation s’ajoutent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Sexe",
          "stepTheme": "Rôle 4",
          "stepTitle": "Le sexe de l’enfant",
          "paragraphText": "L’ovule porte toujours un **X** ; le spermatozoïde apporte un **X** (fille, XX) ou un **Y** (garçon, XY).",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q4",
            "type": "mcq",
            "prompt": "Un spermatozoïde portant un chromosome Y féconde un ovule. Quel sera le sexe de l’enfant ?",
            "options": [
              "Un garçon (XY)",
              "Une fille (XX)",
              "On ne peut pas savoir",
              "Le sexe dépend de l’ovule seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le spermatozoïde qui détermine le sexe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "VIH",
          "stepTheme": "Mère-enfant",
          "stepTitle": "La transmission du VIH de la mère à l’enfant",
          "paragraphText": "Une mère séropositive peut transmettre le **VIH** à son enfant pendant la **grossesse** (placenta), l’**accouchement** et l’**allaitement**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q5",
            "type": "mcq",
            "prompt": "À quels moments une mère séropositive peut-elle transmettre le VIH à son enfant ?",
            "options": [
              "Pendant la grossesse, l’accouchement et l’allaitement",
              "Seulement au moment de la fécondation, par l’ovule",
              "Jamais",
              "Seulement par la salive, plus tard"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce ne sont pas les gamètes qui portent le virus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Prévention",
          "stepTheme": "Santé",
          "stepTitle": "Réduire le risque",
          "paragraphText": "Un **dépistage** pendant la grossesse et un **traitement antirétroviral** de la mère et du bébé réduisent le risque de transmission à **moins de 2 %**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q6",
            "type": "mcq",
            "prompt": "Comment réduire fortement le risque de transmission du VIH d’une mère séropositive à son bébé ?",
            "options": [
              "Par le dépistage et un traitement antirétroviral de la mère et du bébé",
              "En ne faisant rien",
              "Par des tisanes",
              "En évitant seulement le soleil"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le dépistage précoce permet de traiter à temps."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q1",
          "type": "mcq",
          "prompt": "Quel rôle la fécondation joue-t-elle sur le nombre de chromosomes ?",
          "options": [
            "Elle rétablit le nombre diploïde (2n) de l’espèce",
            "Elle divise ce nombre par deux",
            "Elle le multiplie par quatre",
            "Elle ne le change pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Méiose : 2n → n ; fécondation : n + n → 2n."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q2",
          "type": "mcq",
          "prompt": "Quels phénomènes assurent ensemble la conservation du caryotype de l’espèce de génération en génération ?",
          "options": [
            "La méiose et la fécondation",
            "La mitose seule",
            "La capacitation et l’ovulation",
            "La digestion et la respiration"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’un divise par deux, l’autre rétablit."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q3",
          "type": "mcq",
          "prompt": "Pourquoi deux enfants des mêmes parents (non jumeaux) sont-ils différents ?",
          "options": [
            "Parce que des gamètes différents se rencontrent au hasard à chaque fécondation",
            "Parce qu’ils n’ont pas les mêmes parents",
            "Parce que la fécondation copie un seul parent",
            "Parce que leurs cellules sont haploïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les brassages de la méiose et le hasard de la fécondation s’ajoutent."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q4",
          "type": "mcq",
          "prompt": "Un spermatozoïde portant un chromosome Y féconde un ovule. Quel sera le sexe de l’enfant ?",
          "options": [
            "Un garçon (XY)",
            "Une fille (XX)",
            "On ne peut pas savoir",
            "Le sexe dépend de l’ovule seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le spermatozoïde qui détermine le sexe."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q5",
          "type": "mcq",
          "prompt": "À quels moments une mère séropositive peut-elle transmettre le VIH à son enfant ?",
          "options": [
            "Pendant la grossesse, l’accouchement et l’allaitement",
            "Seulement au moment de la fécondation, par l’ovule",
            "Jamais",
            "Seulement par la salive, plus tard"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce ne sont pas les gamètes qui portent le virus."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q6",
          "type": "mcq",
          "prompt": "Comment réduire fortement le risque de transmission du VIH d’une mère séropositive à son bébé ?",
          "options": [
            "Par le dépistage et un traitement antirétroviral de la mère et du bébé",
            "En ne faisant rien",
            "Par des tisanes",
            "En évitant seulement le soleil"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dépistage précoce permet de traiter à temps."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l05_fecondation_mammiferes_p05",
      "order": 5,
      "title": "Évaluation : ovocyte, ovule et stérilité",
      "summary": "Reconnaître ovocyte II et ovule ; comprendre une stérilité tubaire.",
      "conceptExplanation": "- Situation 1 : deux structures observées pendant la fécondation chez l’espèce humaine. Cellule A : un seul globule polaire, noyau en division bloqué en métaphase II, spermatozoïdes autour, granules corticaux : c’est l’ovocyte II. Cellule B : deux globules polaires, méiose achevée : c’est l’ovule.\n- Transformations : la pénétration d’un spermatozoïde dans l’ovocyte II déclenche la libération des granules corticaux (membrane de fécondation, pas de polyspermie) puis l’expulsion du 2e globule polaire : l’ovocyte II devient un ovule.\n- Exercice 5 : une femme stérile depuis des années. La coupe de son ovaire montre des follicules (primordial, primaire, secondaire, mûr) et un corps jaune : ses ovaires fonctionnent et elle ovule. L’examen de l’appareil génital montre des trompes obstruées : spermatozoïdes et ovocyte ne peuvent pas se rencontrer.\n- Activité 2 : caryogamie = fusion des noyaux ; activation = reprise et achèvement de la méiose ; capacitation = acquisition du pouvoir fécondant ; polyspermie = entrée de plusieurs spermatozoïdes.",
      "keyRule": "Un globule polaire : ovocyte II. Deux : ovule. Ovaires qui fonctionnent + trompes bouchées = stérilité par absence de rencontre des gamètes.",
      "formulas": [],
      "workedExample": {
        "title": "Trouver l’origine d’une stérilité",
        "statement": "Une femme a des follicules mûrs et un corps jaune, mais ses trompes sont bouchées. Pourquoi est-elle stérile ?",
        "methodSteps": [
          "Le corps jaune prouve qu’elle ovule.",
          "Les trompes bouchées empêchent la rencontre de l’ovocyte et des spermatozoïdes."
        ],
        "conclusion": "La stérilité vient des trompes, pas des ovaires."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Cellule A",
          "stepTheme": "Situation 1",
          "stepTitle": "Reconnaître l’ovocyte II",
          "paragraphText": "Un **seul globule polaire** et une méiose bloquée en **métaphase II** : la cellule est un **ovocyte II**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q1",
            "type": "mcq",
            "prompt": "Une cellule entourée de spermatozoïdes porte un seul globule polaire et un noyau bloqué en métaphase II. Qu’est-ce que c’est ?",
            "options": [
              "Un ovocyte II",
              "Un ovule",
              "Une cellule-œuf au stade 2 cellules",
              "Un spermatocyte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La méiose n’est pas encore achevée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Transformation",
          "stepTheme": "Situation 1",
          "stepTitle": "De l’ovocyte II à l’ovule",
          "paragraphText": "Après la pénétration : **granules corticaux** libérés (membrane de fécondation), puis **2e globule polaire** expulsé : l’ovocyte II devient **ovule**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q2",
            "type": "mcq",
            "prompt": "Qu’est-ce qui transforme l’ovocyte II en ovule ?",
            "options": [
              "La pénétration d’un spermatozoïde, qui déclenche la fin de la méiose",
              "L’ovulation seule",
              "La capacitation",
              "La formation du corps jaune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans fécondation, l’ovocyte II ne termine pas sa méiose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Associer",
          "stepTheme": "Activité 2",
          "stepTitle": "Les mots de la fécondation",
          "paragraphText": "**Caryogamie** : fusion des noyaux. **Activation** : reprise et fin de la méiose. **Capacitation** : pouvoir fécondant. **Polyspermie** : entrée de plusieurs spermatozoïdes.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q3",
            "type": "mcq",
            "prompt": "Que désigne le mot « polyspermie » ?",
            "options": [
              "L’entrée de plusieurs spermatozoïdes dans l’ovocyte II",
              "La fusion des noyaux",
              "L’acquisition du pouvoir fécondant",
              "La production de nombreux spermatozoïdes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 1-b, 2-c, 3-d, 4-a."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Corps jaune",
          "stepTheme": "Exercice 5",
          "stepTitle": "Les ovaires fonctionnent",
          "paragraphText": "La coupe de l’ovaire montre des **follicules** à tous les stades et un **corps jaune** : la femme **ovule** normalement.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q4",
            "type": "mcq",
            "prompt": "Dans l’ovaire d’une femme stérile, on observe un follicule mûr et un corps jaune. Que peut-on en déduire ?",
            "options": [
              "Ses ovaires fonctionnent et elle ovule",
              "Elle n’ovule jamais",
              "Elle n’a pas d’ovaire",
              "Elle produit des spermatozoïdes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corps jaune se forme après l’ovulation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Trompes",
          "stepTheme": "Exercice 5",
          "stepTitle": "Des trompes bouchées",
          "paragraphText": "Si les **trompes** sont **obstruées**, l’ovocyte et les spermatozoïdes ne peuvent pas se **rencontrer** : la femme est stérile.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q5",
            "type": "mcq",
            "prompt": "Une femme ovule normalement, mais ses trompes sont bouchées. Pourquoi est-elle stérile ?",
            "options": [
              "Les gamètes ne peuvent pas se rencontrer dans l’ampoule",
              "Ses ovaires ne produisent pas d’ovocytes",
              "Son utérus n’a pas d’endomètre",
              "Elle n’a pas de règles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fécondation a lieu dans la trompe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Ordre",
          "stepTheme": "Activité 1",
          "stepTitle": "Ordonner les phénomènes",
          "paragraphText": "Ordre : **migration (2) → rencontre (5) → pénétration (4) → activation (6) → caryogamie (1) → stade 2 cellules (3)**.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q6",
            "type": "mcq",
            "prompt": "Range dans l’ordre : 1 caryogamie, 2 migration des gamètes, 3 stade 2 cellules, 4 pénétration d’un spermatozoïde, 5 rencontre des gamètes, 6 activation de l’ovocyte II.",
            "options": [
              "2-5-4-6-1-3",
              "2-4-5-6-1-3",
              "5-2-4-1-6-3",
              "2-5-6-4-3-1"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé du document : 2-5-4-6-1-3."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q1",
          "type": "mcq",
          "prompt": "Une cellule entourée de spermatozoïdes porte un seul globule polaire et un noyau bloqué en métaphase II. Qu’est-ce que c’est ?",
          "options": [
            "Un ovocyte II",
            "Un ovule",
            "Une cellule-œuf au stade 2 cellules",
            "Un spermatocyte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La méiose n’est pas encore achevée."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q2",
          "type": "mcq",
          "prompt": "Qu’est-ce qui transforme l’ovocyte II en ovule ?",
          "options": [
            "La pénétration d’un spermatozoïde, qui déclenche la fin de la méiose",
            "L’ovulation seule",
            "La capacitation",
            "La formation du corps jaune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans fécondation, l’ovocyte II ne termine pas sa méiose."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q3",
          "type": "mcq",
          "prompt": "Que désigne le mot « polyspermie » ?",
          "options": [
            "L’entrée de plusieurs spermatozoïdes dans l’ovocyte II",
            "La fusion des noyaux",
            "L’acquisition du pouvoir fécondant",
            "La production de nombreux spermatozoïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 1-b, 2-c, 3-d, 4-a."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q4",
          "type": "mcq",
          "prompt": "Dans l’ovaire d’une femme stérile, on observe un follicule mûr et un corps jaune. Que peut-on en déduire ?",
          "options": [
            "Ses ovaires fonctionnent et elle ovule",
            "Elle n’ovule jamais",
            "Elle n’a pas d’ovaire",
            "Elle produit des spermatozoïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corps jaune se forme après l’ovulation."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q5",
          "type": "mcq",
          "prompt": "Une femme ovule normalement, mais ses trompes sont bouchées. Pourquoi est-elle stérile ?",
          "options": [
            "Les gamètes ne peuvent pas se rencontrer dans l’ampoule",
            "Ses ovaires ne produisent pas d’ovocytes",
            "Son utérus n’a pas d’endomètre",
            "Elle n’a pas de règles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fécondation a lieu dans la trompe."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q6",
          "type": "mcq",
          "prompt": "Range dans l’ordre : 1 caryogamie, 2 migration des gamètes, 3 stade 2 cellules, 4 pénétration d’un spermatozoïde, 5 rencontre des gamètes, 6 activation de l’ovocyte II.",
          "options": [
            "2-5-4-6-1-3",
            "2-4-5-6-1-3",
            "5-2-4-1-6-3",
            "2-5-6-4-3-1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé du document : 2-5-4-6-1-3."
        }
      ]
    }
  ]
};
