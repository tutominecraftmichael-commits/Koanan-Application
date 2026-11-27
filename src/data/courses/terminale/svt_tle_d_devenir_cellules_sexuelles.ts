import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 8 : Le devenir des cellules sexuelles chez les mammifères » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2884
export const SVT_TLE_D_L08_DEVENIR_CELLULES_SEXUELLES: CurriculumChapter = {
  "id": "terminale_d_svt_l08_devenir_cellules_sexuelles",
  "subjectId": "svt",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 8,
  "title": "Leçon 8 : Le devenir des cellules sexuelles chez les mammifères",
  "summary": "La fécondation unit un spermatozoïde et un ovocyte II en une cellule-œuf, dont les divisions successives donnent un embryon qui s’implante dans la muqueuse utérine : c’est la nidation.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2884",
  "points": [
    {
      "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01",
      "order": 1,
      "title": "La migration des gamètes",
      "summary": "Suivre le trajet de l’ovocyte II et des spermatozoïdes jusqu’à l’ampoule de la trompe.",
      "conceptExplanation": "Le gamète femelle, l’ovocyte II, est expulsé par l’ovaire puis capté par le pavillon de la trompe.\nIl est transporté jusqu’à l’ampoule grâce aux contractions de la trompe et aux mouvements des cils vibratiles qui tapissent sa paroi, et il y est maintenu pendant 72 heures environ pour attendre les spermatozoïdes.\nLors de l’accouplement, 100 à 400 millions de spermatozoïdes sont déposés dans l’utérus (chez la rate et la souris) ou dans le vagin (cas de la plupart des mammifères).\nGrâce à leur flagelle, aux contractions de la paroi de l’utérus et aux battements des cils vibratiles, les spermatozoïdes migrent dans la trompe.\nDu col de l’utérus à l’ampoule, ils subissent la sélection et la capacitation : la sélection élimine 99 pour cent d’entre eux au niveau du col (glaire cervicale et acidité naturelle) et au niveau de la jonction utérus-trompe ; la capacitation, élimination de l’enduit protéique déposé au niveau de l’épididyme, leur donne leur pouvoir fécondant.",
      "keyRule": "L’ovocyte II attend environ 72 heures dans l’ampoule, et seuls les spermatozoïdes capacités, après une sélection qui élimine 99 pour cent d’entre eux, peuvent féconder.",
      "formulas": [],
      "workedExample": {
        "title": "Le trajet des deux gamètes jusqu’à l’ampoule",
        "statement": "Décris le devenir de l’ovocyte II après son expulsion par l’ovaire et le sort de la majorité des spermatozoïdes pendant leur migration.",
        "methodSteps": [
          "L’ovocyte II est capté par le pavillon de la trompe et transporté jusqu’à l’ampoule par les contractions de la trompe et les cils vibratiles.",
          "Il reste maintenu dans l’ampoule pendant 72 heures environ, en attente des spermatozoïdes.",
          "Les spermatozoïdes migrent grâce à leur flagelle, aux contractions utérines et aux cils vibratiles, mais 99 pour cent sont éliminés lors de la sélection.",
          "Les survivants subissent la capacitation, qui leur confère le pouvoir fécondant."
        ],
        "conclusion": "Les deux gamètes se rejoignent dans l’ampoule : l’ovocyte II y attend, et les spermatozoïdes n’y parviennent qu’après sélection et capacitation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le gamète femelle : l’ovocyte II",
          "stepTheme": "Le gamète femelle : l’ovocyte II",
          "stepBadge": "Le gamète femelle : l’ovocyte II",
          "paragraphText": "• Ovocyte II : gamète femelle expulsé par l’ovaire lors de l’ovulation.\nIl est capté par le pavillon de la trompe, puis transporté vers l’ampoule de la trompe.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q1",
            "type": "mcq",
            "prompt": "Par quoi l’ovocyte II expulsé par l’ovaire est-il capté ?",
            "options": [
              "Par le pavillon de la trompe",
              "Par le col de l’utérus",
              "Par le corps jaune",
              "Par la glaire cervicale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après la leçon, l’ovocyte II expulsé par l’ovaire est capté par le pavillon de la trompe, puis transporté jusqu’à l’ampoule."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le transport jusqu’à l’ampoule",
          "stepTheme": "Le transport jusqu’à l’ampoule",
          "stepBadge": "Le transport jusqu’à l’ampoule",
          "paragraphText": "Le transport de l’ovocyte II jusqu’à l’ampoule est assuré par les contractions de la trompe et par les mouvements des cils vibratiles qui tapissent la paroi de celle-ci.\nL’ovocyte II ne possède pas d’organe de déplacement propre.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q2",
            "type": "mcq",
            "prompt": "Qu’est-ce qui assure le transport de l’ovocyte II jusqu’à l’ampoule ?",
            "options": [
              "Son propre flagelle",
              "Les contractions de la trompe et les mouvements des cils vibratiles",
              "Le flux sanguin utérin",
              "Les contractions du vagin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que l’ovocyte II est transporté grâce aux contractions de la trompe et aux mouvements des cils vibratiles de sa paroi."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’attente dans l’ampoule : 72 heures",
          "stepTheme": "L’attente dans l’ampoule : 72 heures",
          "stepBadge": "L’attente dans l’ampoule : 72 heures",
          "paragraphText": "Le gamète femelle est maintenu au niveau de l’ampoule pendant 72 heures environ pour attendre les spermatozoïdes.\nC’est donc dans l’ampoule que la rencontre pourra avoir lieu.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q3",
            "type": "mcq",
            "prompt": "Pendant combien de temps environ l’ovocyte II est-il maintenu dans l’ampoule ?",
            "options": [
              "Environ 24 heures",
              "Environ 48 heures",
              "Environ 72 heures",
              "Environ 11 jours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte indique que le gamète femelle est maintenu au niveau de l’ampoule pendant 72 heures environ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La sélection des spermatozoïdes",
          "stepTheme": "La sélection des spermatozoïdes",
          "stepBadge": "La sélection des spermatozoïdes",
          "paragraphText": "• Sélection : élimination de la grande majorité des spermatozoïdes pendant leur migration.\nElle se fait à deux niveaux : au niveau du col de l’utérus, où la glaire cervicale et l’acidité naturelle éliminent 99 pour cent des spermatozoïdes, et au niveau de la jonction utérus-trompe.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q4",
            "type": "mcq",
            "prompt": "Quel pourcentage de spermatozoïdes la sélection élimine-t-elle au niveau du col de l’utérus ?",
            "options": [
              "50 pour cent",
              "90 pour cent",
              "75 pour cent",
              "99 pour cent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon indique que la glaire cervicale et l’acidité naturelle entraînent l’élimination de 99 pour cent des spermatozoïdes au niveau du col."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La capacitation",
          "stepTheme": "La capacitation",
          "stepBadge": "La capacitation",
          "paragraphText": "• Capacitation : élimination de l’enduit protéique déposé au niveau de l’épididyme sur les spermatozoïdes.\nElle permet aux spermatozoïdes d’acquérir leur pouvoir fécondant pendant leur trajet du col de l’utérus à l’ampoule.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q5",
            "type": "mcq",
            "prompt": "La capacitation des spermatozoïdes consiste en :",
            "options": [
              "L’élimination de l’enduit protéique déposé au niveau de l’épididyme",
              "La formation de la membrane de fécondation",
              "La perte du flagelle",
              "La fusion des deux pronucléus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Selon la leçon, la capacitation consiste en l’élimination de l’enduit protéique déposé au niveau de l’épididyme ; elle donne au spermatozoïde son pouvoir fécondant."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le nombre de spermatozoïdes déposés",
          "stepTheme": "Le nombre de spermatozoïdes déposés",
          "stepBadge": "Le nombre de spermatozoïdes déposés",
          "paragraphText": "Piège : confondre le nombre de spermatozoïdes déposés et celui qui atteint l’ampoule.\nLors de l’accouplement, 100 à 400 millions de spermatozoïdes sont déposés, mais la sélection en élimine 99 pour cent avant l’ampoule.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q6",
            "type": "mcq",
            "prompt": "Lors de l’accouplement, combien de spermatozoïdes sont déposés ?",
            "options": [
              "100 à 400 spermatozoïdes",
              "100 à 400 millions de spermatozoïdes",
              "1 à 4 millions de spermatozoïdes",
              "Plusieurs milliards de spermatozoïdes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon donne le chiffre de 100 à 400 millions de spermatozoïdes déposés lors de l’accouplement."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le dépôt selon les espèces",
          "stepTheme": "Le dépôt selon les espèces",
          "stepBadge": "Le dépôt selon les espèces",
          "paragraphText": "Le lieu de dépôt varie selon les mammifères : les spermatozoïdes sont déposés dans l’utérus chez la rate et la souris.\nDans le cas de la plupart des mammifères, ils sont déposés dans le vagin.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q7",
            "type": "mcq",
            "prompt": "Chez la rate et la souris, les spermatozoïdes sont déposés :",
            "options": [
              "Dans la trompe",
              "Dans l’ampoule",
              "Dans le vagin uniquement",
              "Dans l’utérus"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte précise que les spermatozoïdes sont déposés dans l’utérus chez la rate et la souris, et dans le vagin dans le cas de la plupart des mammifères."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q1",
          "type": "mcq",
          "prompt": "Par quoi l’ovocyte II expulsé par l’ovaire est-il capté ?",
          "options": [
            "Par le pavillon de la trompe",
            "Par le col de l’utérus",
            "Par le corps jaune",
            "Par la glaire cervicale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après la leçon, l’ovocyte II expulsé par l’ovaire est capté par le pavillon de la trompe, puis transporté jusqu’à l’ampoule."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q2",
          "type": "mcq",
          "prompt": "Qu’est-ce qui assure le transport de l’ovocyte II jusqu’à l’ampoule ?",
          "options": [
            "Son propre flagelle",
            "Les contractions de la trompe et les mouvements des cils vibratiles",
            "Le flux sanguin utérin",
            "Les contractions du vagin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que l’ovocyte II est transporté grâce aux contractions de la trompe et aux mouvements des cils vibratiles de sa paroi."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q3",
          "type": "mcq",
          "prompt": "Pendant combien de temps environ l’ovocyte II est-il maintenu dans l’ampoule ?",
          "options": [
            "Environ 24 heures",
            "Environ 48 heures",
            "Environ 72 heures",
            "Environ 11 jours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte indique que le gamète femelle est maintenu au niveau de l’ampoule pendant 72 heures environ."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q4",
          "type": "mcq",
          "prompt": "Quel pourcentage de spermatozoïdes la sélection élimine-t-elle au niveau du col de l’utérus ?",
          "options": [
            "50 pour cent",
            "90 pour cent",
            "75 pour cent",
            "99 pour cent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon indique que la glaire cervicale et l’acidité naturelle entraînent l’élimination de 99 pour cent des spermatozoïdes au niveau du col."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q5",
          "type": "mcq",
          "prompt": "La capacitation des spermatozoïdes consiste en :",
          "options": [
            "L’élimination de l’enduit protéique déposé au niveau de l’épididyme",
            "La formation de la membrane de fécondation",
            "La perte du flagelle",
            "La fusion des deux pronucléus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Selon la leçon, la capacitation consiste en l’élimination de l’enduit protéique déposé au niveau de l’épididyme ; elle donne au spermatozoïde son pouvoir fécondant."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q6",
          "type": "mcq",
          "prompt": "Lors de l’accouplement, combien de spermatozoïdes sont déposés ?",
          "options": [
            "100 à 400 spermatozoïdes",
            "100 à 400 millions de spermatozoïdes",
            "1 à 4 millions de spermatozoïdes",
            "Plusieurs milliards de spermatozoïdes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon donne le chiffre de 100 à 400 millions de spermatozoïdes déposés lors de l’accouplement."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p01_q7",
          "type": "mcq",
          "prompt": "Chez la rate et la souris, les spermatozoïdes sont déposés :",
          "options": [
            "Dans la trompe",
            "Dans l’ampoule",
            "Dans le vagin uniquement",
            "Dans l’utérus"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte précise que les spermatozoïdes sont déposés dans l’utérus chez la rate et la souris, et dans le vagin dans le cas de la plupart des mammifères."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02",
      "order": 2,
      "title": "La rencontre des gamètes et la pénétration du spermatozoïde",
      "summary": "Décrire la rencontre dans le tiers supérieur de la trompe, la réaction acrosomique et l’activation de l’ovocyte II.",
      "conceptExplanation": "La rencontre des gamètes mâles et femelles a lieu au niveau du tiers supérieur de la trompe, où les spermatozoïdes entourent l’ovocyte II.\nL’accolement du spermatozoïde capacité à la zone pellucide déclenche la libération des enzymes contenues dans l’acrosome : c’est la réaction acrosomique.\nGrâce aux actions enzymatiques et à la propulsion de son flagelle, le spermatozoïde traverse la zone pellucide, pénètre dans l’espace péri-ovocytaire et arrive dans le cytoplasme ovocytaire.\nCette pénétration déclenche l’activation de l’ovocyte II : formation d’une membrane de fécondation, imperméable aux autres spermatozoïdes, et reprise puis achèvement de la deuxième division de méiose, avec émission du deuxième globule polaire ; l’ovocyte II devient alors un ovule.",
      "keyRule": "Un seul spermatozoïde pénètre : la membrane de fécondation bloque la polyspermie et l’ovocyte II achève sa méiose pour devenir un ovule.",
      "formulas": [],
      "workedExample": {
        "title": "L’activation de l’ovocyte II après la pénétration",
        "statement": "Un spermatozoïde capacité vient de pénétrer dans l’ovocyte II. Décris les deux événements qui caractérisent l’activation de l’ovocyte II.",
        "methodSteps": [
          "Les granules corticaux libèrent leur contenu dans l’espace péri-ovocytaire, ce qui forme la membrane de fécondation.",
          "Cette membrane, imperméable aux autres spermatozoïdes, empêche la polyspermie.",
          "La deuxième division de méiose reprend et s’achève, avec l’émission du deuxième globule polaire.",
          "L’ovocyte II est ainsi devenu un ovule."
        ],
        "conclusion": "L’activation comporte la formation de la membrane de fécondation et l’achèvement de la méiose II : l’ovocyte II devient un ovule."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le lieu de la rencontre",
          "stepTheme": "Le lieu de la rencontre",
          "stepBadge": "Le lieu de la rencontre",
          "paragraphText": "La rencontre des gamètes mâles et femelles a lieu au niveau du tiers supérieur de la trompe.\nLes spermatozoïdes y entourent l’ovocyte II.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q1",
            "type": "mcq",
            "prompt": "Où a lieu la rencontre des gamètes chez les mammifères ?",
            "options": [
              "Dans l’utérus",
              "Au niveau du tiers supérieur de la trompe",
              "Dans l’ovaire",
              "Dans le vagin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après la leçon, la rencontre des gamètes a lieu au niveau du tiers supérieur de la trompe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La réaction acrosomique",
          "stepTheme": "La réaction acrosomique",
          "stepBadge": "La réaction acrosomique",
          "paragraphText": "• Réaction acrosomique : libération des enzymes contenues dans l’acrosome du spermatozoïde.\nElle est déclenchée par l’accolement du spermatozoïde capacité à la zone pellucide.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q2",
            "type": "mcq",
            "prompt": "La réaction acrosomique correspond à :",
            "options": [
              "La fusion des deux pronucléus",
              "La formation du blastocyste",
              "La libération des enzymes contenues dans l’acrosome",
              "L’émission du deuxième globule polaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon définit la réaction acrosomique comme la libération des enzymes contenues dans l’acrosome, déclenchée par l’accolement à la zone pellucide."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La traversée de la zone pellucide",
          "stepTheme": "La traversée de la zone pellucide",
          "stepBadge": "La traversée de la zone pellucide",
          "paragraphText": "Grâce aux actions enzymatiques et à la propulsion de son flagelle, le spermatozoïde traverse la zone pellucide.\nIl pénètre ensuite dans l’espace péri-ovocytaire et arrive dans le cytoplasme ovocytaire.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q3",
            "type": "mcq",
            "prompt": "Le spermatozoïde traverse la zone pellucide grâce :",
            "options": [
              "Aux seuls cils vibratiles de la trompe",
              "À la glaire cervicale",
              "À la membrane de fécondation",
              "Aux actions enzymatiques et à la propulsion de son flagelle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte attribue la traversée de la zone pellucide aux actions enzymatiques et à la propulsion du flagelle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La membrane de fécondation",
          "stepTheme": "La membrane de fécondation",
          "stepBadge": "La membrane de fécondation",
          "paragraphText": "• Membrane de fécondation : membrane formée à partir du contenu des granules corticaux libéré dans l’espace péri-ovocytaire.\nElle est imperméable aux autres spermatozoïdes et empêche ainsi la polyspermie.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q4",
            "type": "mcq",
            "prompt": "La membrane de fécondation a pour rôle :",
            "options": [
              "D’empêcher la polyspermie en étant imperméable aux autres spermatozoïdes",
              "De nourrir l’embryon",
              "De capter l’ovocyte II dans la trompe",
              "De former le placenta"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Selon la leçon, la membrane de fécondation est imperméable aux autres spermatozoïdes, ce qui empêche la polyspermie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L’achèvement de la méiose II",
          "stepTheme": "L’achèvement de la méiose II",
          "stepBadge": "L’achèvement de la méiose II",
          "paragraphText": "La pénétration déclenche aussi la reprise et l’achèvement de la deuxième division de méiose.\nCette division est caractérisée par l’émission du deuxième globule polaire : l’ovocyte II est enfin devenu un ovule.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q5",
            "type": "mcq",
            "prompt": "L’achèvement de la deuxième division de méiose se traduit par :",
            "options": [
              "La formation de la morula",
              "L’émission du deuxième globule polaire",
              "La perte du flagelle du spermatozoïde",
              "La rupture de la zone pellucide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon indique que l’achèvement de la méiose II est caractérisé par l’émission du deuxième globule polaire, l’ovocyte II devenant un ovule."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un seul spermatozoïde fécondant",
          "stepTheme": "Un seul spermatozoïde fécondant",
          "stepBadge": "Un seul spermatozoïde fécondant",
          "paragraphText": "Piège : croire que plusieurs spermatozoïdes peuvent pénétrer dans l’ovocyte II.\nDès la pénétration du premier, la membrane de fécondation rend l’entrée impossible aux autres spermatozoïdes.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q6",
            "type": "mcq",
            "prompt": "La polyspermie est empêchée par :",
            "options": [
              "La sélection au niveau du col de l’utérus",
              "La capacitation",
              "La membrane de fécondation",
              "La zone pellucide seule"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la membrane de fécondation, formée après la pénétration, qui est imperméable aux autres spermatozoïdes et empêche la polyspermie."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Les étapes de la fécondation dans l’ordre",
          "stepTheme": "Les étapes de la fécondation dans l’ordre",
          "stepBadge": "Les étapes de la fécondation dans l’ordre",
          "paragraphText": "La leçon liste les étapes de la fécondation dans cet ordre : la migration des gamètes, puis la rencontre des gamètes.\nViennent ensuite la pénétration d’un spermatozoïde avec activation de l’ovocyte II, et enfin la caryogamie.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q7",
            "type": "mcq",
            "prompt": "Quelle est la dernière étape de la fécondation listée dans la leçon ?",
            "options": [
              "La migration des gamètes",
              "La rencontre des gamètes",
              "La pénétration du spermatozoïde",
              "La caryogamie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les étapes listées sont : migration, rencontre, pénétration et activation, puis caryogamie, qui est donc la dernière."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q1",
          "type": "mcq",
          "prompt": "Où a lieu la rencontre des gamètes chez les mammifères ?",
          "options": [
            "Dans l’utérus",
            "Au niveau du tiers supérieur de la trompe",
            "Dans l’ovaire",
            "Dans le vagin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après la leçon, la rencontre des gamètes a lieu au niveau du tiers supérieur de la trompe."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q2",
          "type": "mcq",
          "prompt": "La réaction acrosomique correspond à :",
          "options": [
            "La fusion des deux pronucléus",
            "La formation du blastocyste",
            "La libération des enzymes contenues dans l’acrosome",
            "L’émission du deuxième globule polaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon définit la réaction acrosomique comme la libération des enzymes contenues dans l’acrosome, déclenchée par l’accolement à la zone pellucide."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q3",
          "type": "mcq",
          "prompt": "Le spermatozoïde traverse la zone pellucide grâce :",
          "options": [
            "Aux seuls cils vibratiles de la trompe",
            "À la glaire cervicale",
            "À la membrane de fécondation",
            "Aux actions enzymatiques et à la propulsion de son flagelle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte attribue la traversée de la zone pellucide aux actions enzymatiques et à la propulsion du flagelle."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q4",
          "type": "mcq",
          "prompt": "La membrane de fécondation a pour rôle :",
          "options": [
            "D’empêcher la polyspermie en étant imperméable aux autres spermatozoïdes",
            "De nourrir l’embryon",
            "De capter l’ovocyte II dans la trompe",
            "De former le placenta"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Selon la leçon, la membrane de fécondation est imperméable aux autres spermatozoïdes, ce qui empêche la polyspermie."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q5",
          "type": "mcq",
          "prompt": "L’achèvement de la deuxième division de méiose se traduit par :",
          "options": [
            "La formation de la morula",
            "L’émission du deuxième globule polaire",
            "La perte du flagelle du spermatozoïde",
            "La rupture de la zone pellucide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon indique que l’achèvement de la méiose II est caractérisé par l’émission du deuxième globule polaire, l’ovocyte II devenant un ovule."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q6",
          "type": "mcq",
          "prompt": "La polyspermie est empêchée par :",
          "options": [
            "La sélection au niveau du col de l’utérus",
            "La capacitation",
            "La membrane de fécondation",
            "La zone pellucide seule"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la membrane de fécondation, formée après la pénétration, qui est imperméable aux autres spermatozoïdes et empêche la polyspermie."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p02_q7",
          "type": "mcq",
          "prompt": "Quelle est la dernière étape de la fécondation listée dans la leçon ?",
          "options": [
            "La migration des gamètes",
            "La rencontre des gamètes",
            "La pénétration du spermatozoïde",
            "La caryogamie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les étapes listées sont : migration, rencontre, pénétration et activation, puis caryogamie, qui est donc la dernière."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03",
      "order": 3,
      "title": "La caryogamie et la formation de la cellule-œuf",
      "summary": "Expliquer la formation des deux pronucléus et leur fusion en un zygote diploïde.",
      "conceptExplanation": "Le noyau de l’ovocyte II devenu ovule se reconstitue, se réhydrate, gonfle et donne le pronucléus femelle.\nDans le même temps, le spermatozoïde abandonne son flagelle et sa pièce intermédiaire, et son noyau gonfle considérablement pour devenir le pronucléus mâle.\nLes deux pronucléus se rapprochent l’un de l’autre vers le centre de l’ovule, leurs enveloppes se rompent et les chromatines mâles et femelles s’unissent : c’est l’amphimixie ou caryogamie.\nCette étape ultime de la fécondation aboutit à la formation d’une cellule-œuf ou zygote.\nLa fécondation est donc la fusion d’un gamète mâle et d’un gamète femelle en une cellule unique, l’œuf : la fusion d’un noyau haploïde d’origine mâle avec un noyau haploïde d’origine femelle donne un noyau diploïde, celui du zygote.",
      "keyRule": "La caryogamie fusionne deux noyaux haploïdes en un noyau diploïde : le zygote est la première cellule du nouvel individu.",
      "formulas": [],
      "workedExample": {
        "title": "De la pénétration à la cellule-œuf",
        "statement": "Décris ce que deviennent les noyaux des deux gamètes après la pénétration du spermatozoïde, jusqu’à la formation du zygote.",
        "methodSteps": [
          "Le noyau de l’ovule se reconstitue, se réhydrate et gonfle : il devient le pronucléus femelle.",
          "Le spermatozoïde abandonne son flagelle et sa pièce intermédiaire ; son noyau gonfle et devient le pronucléus mâle.",
          "Les deux pronucléus se rapprochent vers le centre de l’ovule et leurs enveloppes se rompent.",
          "Les chromatines mâles et femelles s’unissent : c’est la caryogamie, qui forme la cellule-œuf."
        ],
        "conclusion": "La fusion des deux pronucléus haploïdes donne le noyau diploïde du zygote."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le pronucléus femelle",
          "stepTheme": "Le pronucléus femelle",
          "stepBadge": "Le pronucléus femelle",
          "paragraphText": "• Pronucléus femelle : noyau de l’ovocyte II devenu ovule, après qu’il s’est reconstitué, réhydraté et gonflé.\nIl contient le matériel génétique haploïde d’origine maternelle.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q1",
            "type": "mcq",
            "prompt": "Le pronucléus femelle provient :",
            "options": [
              "Du noyau de l’ovule, reconstitué, réhydraté et gonflé",
              "Du noyau du spermatozoïde",
              "Du deuxième globule polaire",
              "Des granules corticaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après la leçon, le noyau de l’ovocyte II devenu ovule se reconstitue, se réhydrate, gonfle et donne le pronucléus femelle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le devenir du spermatozoïde entré",
          "stepTheme": "Le devenir du spermatozoïde entré",
          "stepBadge": "Le devenir du spermatozoïde entré",
          "paragraphText": "Après son entrée, le spermatozoïde abandonne son flagelle et sa pièce intermédiaire.\nSon noyau gonfle considérablement et devient le pronucléus mâle.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q2",
            "type": "mcq",
            "prompt": "Dans l’ovule, le spermatozoïde abandonne :",
            "options": [
              "Son acrosome et son noyau",
              "Son flagelle et sa pièce intermédiaire",
              "Sa membrane plasmique",
              "Son pronucléus"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte indique que le spermatozoïde abandonne son flagelle et sa pièce intermédiaire, tandis que son noyau devient le pronucléus mâle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La caryogamie ou amphimixie",
          "stepTheme": "La caryogamie ou amphimixie",
          "stepBadge": "La caryogamie ou amphimixie",
          "paragraphText": "• Caryogamie (ou amphimixie) : union des chromatines mâles et femelles après rapprochement des deux pronucléus et rupture de leurs enveloppes.\nC’est l’étape ultime de la fécondation, qui aboutit à la formation d’une cellule-œuf ou zygote.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q3",
            "type": "mcq",
            "prompt": "La caryogamie est :",
            "options": [
              "La migration des gamètes dans la trompe",
              "La formation de la membrane de fécondation",
              "L’union des chromatines mâles et femelles, formant la cellule-œuf",
              "La division de l’œuf en morula"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon définit la caryogamie, ou amphimixie, comme l’union des chromatines des deux pronucléus, étape ultime de la fécondation formant le zygote."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La fécondation",
          "stepTheme": "La fécondation",
          "stepBadge": "La fécondation",
          "paragraphText": "• Fécondation : fusion d’un gamète mâle (spermatozoïde) avec un gamète femelle (ovocyte) en une cellule unique, l’œuf.\nC’est précisément la fusion d’un noyau haploïde d’origine mâle avec un noyau haploïde d’origine femelle, donnant un noyau diploïde.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q4",
            "type": "mcq",
            "prompt": "Le noyau du zygote formé par la fécondation est :",
            "options": [
              "Haploïde, comme celui des gamètes",
              "Triploïde",
              "Tétraploïde",
              "Diploïde, par fusion de deux noyaux haploïdes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La fécondation unit un noyau haploïde mâle et un noyau haploïde femelle pour donner un noyau diploïde, celui du zygote."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Caryogamie et pénétration ne se confondent pas",
          "stepTheme": "Caryogamie et pénétration ne se confondent pas",
          "stepBadge": "Caryogamie et pénétration ne se confondent pas",
          "paragraphText": "Piège : confondre la pénétration du spermatozoïde avec la caryogamie.\nLa pénétration fait entrer le spermatozoïde dans le cytoplasme ; la caryogamie, plus tardive, est la fusion des deux pronucléus au centre de l’ovule.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q5",
            "type": "mcq",
            "prompt": "Les deux pronucléus se rapprochent :",
            "options": [
              "Vers le centre de l’ovule",
              "Vers la zone pellucide",
              "Vers le pavillon de la trompe",
              "Vers le col de l’utérus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte précise que les deux pronucléus se rapprochent l’un de l’autre vers le centre de l’ovule avant la rupture de leurs enveloppes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le zygote, résultat de l’union des gamètes",
          "stepTheme": "Le zygote, résultat de l’union des gamètes",
          "stepBadge": "Le zygote, résultat de l’union des gamètes",
          "paragraphText": "La conclusion de la première partie de la leçon le confirme : les mammifères se reproduisent à partir de l’union des gamètes mâles et femelles.\nCette union donne l’œuf fécondé, appelé aussi cellule-œuf ou zygote.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q6",
            "type": "mcq",
            "prompt": "La cellule unique formée à l’issue de la fécondation est appelée :",
            "options": [
              "Morula",
              "Cellule-œuf ou zygote",
              "Blastocyste",
              "Pronucléus"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La caryogamie aboutit à la formation d’une cellule-œuf ou zygote ; la morula et le blastocyste sont des stades ultérieurs de son développement."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q1",
          "type": "mcq",
          "prompt": "Le pronucléus femelle provient :",
          "options": [
            "Du noyau de l’ovule, reconstitué, réhydraté et gonflé",
            "Du noyau du spermatozoïde",
            "Du deuxième globule polaire",
            "Des granules corticaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après la leçon, le noyau de l’ovocyte II devenu ovule se reconstitue, se réhydrate, gonfle et donne le pronucléus femelle."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q2",
          "type": "mcq",
          "prompt": "Dans l’ovule, le spermatozoïde abandonne :",
          "options": [
            "Son acrosome et son noyau",
            "Son flagelle et sa pièce intermédiaire",
            "Sa membrane plasmique",
            "Son pronucléus"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte indique que le spermatozoïde abandonne son flagelle et sa pièce intermédiaire, tandis que son noyau devient le pronucléus mâle."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q3",
          "type": "mcq",
          "prompt": "La caryogamie est :",
          "options": [
            "La migration des gamètes dans la trompe",
            "La formation de la membrane de fécondation",
            "L’union des chromatines mâles et femelles, formant la cellule-œuf",
            "La division de l’œuf en morula"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon définit la caryogamie, ou amphimixie, comme l’union des chromatines des deux pronucléus, étape ultime de la fécondation formant le zygote."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q4",
          "type": "mcq",
          "prompt": "Le noyau du zygote formé par la fécondation est :",
          "options": [
            "Haploïde, comme celui des gamètes",
            "Triploïde",
            "Tétraploïde",
            "Diploïde, par fusion de deux noyaux haploïdes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La fécondation unit un noyau haploïde mâle et un noyau haploïde femelle pour donner un noyau diploïde, celui du zygote."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q5",
          "type": "mcq",
          "prompt": "Les deux pronucléus se rapprochent :",
          "options": [
            "Vers le centre de l’ovule",
            "Vers la zone pellucide",
            "Vers le pavillon de la trompe",
            "Vers le col de l’utérus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte précise que les deux pronucléus se rapprochent l’un de l’autre vers le centre de l’ovule avant la rupture de leurs enveloppes."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p03_q6",
          "type": "mcq",
          "prompt": "La cellule unique formée à l’issue de la fécondation est appelée :",
          "options": [
            "Morula",
            "Cellule-œuf ou zygote",
            "Blastocyste",
            "Pronucléus"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La caryogamie aboutit à la formation d’une cellule-œuf ou zygote ; la morula et le blastocyste sont des stades ultérieurs de son développement."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04",
      "order": 4,
      "title": "La segmentation : de l’œuf à la morula et au blastocyste",
      "summary": "Décrire les divisions de l’œuf pendant son déplacement vers la cavité utérine.",
      "conceptExplanation": "Dès la fécondation réalisée dans la trompe, l’œuf commence à se diviser.\nIl donne un embryon formé de plusieurs cellules, enveloppées par la zone pellucide, appelé la morula.\nPendant sa division, l’embryon se déplace jusqu’à la cavité utérine, alors qu’il ne possède pas d’organe de déplacement.\nL’ensemble des divisions subies par l’œuf au cours de son déplacement est appelé la segmentation de l’œuf.\nLa morula vit deux ou trois jours une vie libre dans la cavité utérine, poursuit ses divisions, puis se creuse d’une cavité pour former le blastocyste, débarrassé de la zone pellucide.",
      "keyRule": "Segmentation pendant le trajet, morula enveloppée de la zone pellucide, puis blastocyste creusé d’une cavité et libéré de la zone pellucide.",
      "formulas": [],
      "workedExample": {
        "title": "Les stades après la fécondation, dans l’ordre",
        "statement": "Range dans l’ordre les stades observés après la fécondation : division de l’œuf, déplacement dans l’oviducte, morula, blastocyste, implantation.",
        "methodSteps": [
          "L’œuf fécondé dans la trompe commence à se diviser : c’est la segmentation.",
          "Tout en se divisant, l’embryon se déplace dans l’oviducte jusqu’à la cavité utérine.",
          "L’embryon multicellulaire enveloppé par la zone pellucide est la morula.",
          "La morula se creuse d’une cavité et devient le blastocyste, qui précède l’implantation."
        ],
        "conclusion": "L’ordre est : segmentation, déplacement, morula, blastocyste, puis implantation dans la muqueuse utérine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La segmentation de l’œuf",
          "stepTheme": "La segmentation de l’œuf",
          "stepBadge": "La segmentation de l’œuf",
          "paragraphText": "• Segmentation : ensemble des divisions subies par l’œuf au cours de son déplacement.\nElle commence dès la fécondation, réalisée dans la trompe.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q1",
            "type": "mcq",
            "prompt": "On appelle segmentation :",
            "options": [
              "L’ensemble des divisions subies par l’œuf au cours de son déplacement",
              "La fusion des deux pronucléus",
              "La migration des spermatozoïdes",
              "La perte de la zone pellucide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon définit la segmentation comme l’ensemble des divisions subies par l’œuf au cours de son déplacement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La morula",
          "stepTheme": "La morula",
          "stepBadge": "La morula",
          "paragraphText": "• Morula : embryon formé de plusieurs cellules, enveloppées par la zone pellucide.\nElle résulte des premières divisions de l’œuf.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q2",
            "type": "mcq",
            "prompt": "La morula est :",
            "options": [
              "Une cellule unique diploïde",
              "Un embryon de plusieurs cellules enveloppées par la zone pellucide",
              "Un embryon creusé d’une cavité",
              "L’embryon implanté dans la muqueuse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après le texte, la division de l’œuf donne un embryon de plusieurs cellules enveloppées par la zone pellucide : la morula."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le déplacement sans organe de déplacement",
          "stepTheme": "Le déplacement sans organe de déplacement",
          "stepBadge": "Le déplacement sans organe de déplacement",
          "paragraphText": "Pendant sa division, l’embryon se déplace jusqu’à la cavité utérine alors qu’il ne possède pas d’organe de déplacement.\nSon trajet se fait dans l’oviducte, c’est-à-dire la trompe.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q3",
            "type": "mcq",
            "prompt": "Pendant la segmentation, l’embryon se déplace :",
            "options": [
              "Grâce à son flagelle",
              "En nageant dans l’utérus",
              "Jusqu’à la cavité utérine, sans posséder d’organe de déplacement",
              "Uniquement après la nidation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon souligne que l’embryon se déplace jusqu’à la cavité utérine alors qu’il ne possède pas d’organe de déplacement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La vie libre de la morula",
          "stepTheme": "La vie libre de la morula",
          "stepBadge": "La vie libre de la morula",
          "paragraphText": "La morula vit deux ou trois jours une vie libre dans la cavité utérine.\nPendant ce temps, elle poursuit ses divisions avant de se transformer.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q4",
            "type": "mcq",
            "prompt": "La morula vit une vie libre dans la cavité utérine pendant :",
            "options": [
              "72 heures exactement dans la trompe",
              "11 jours",
              "6 à 7 jours",
              "Deux ou trois jours"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte indique que la morula vit deux ou trois jours une vie libre dans la cavité utérine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le blastocyste",
          "stepTheme": "Le blastocyste",
          "stepBadge": "Le blastocyste",
          "paragraphText": "• Blastocyste : stade embryonnaire formé lorsque la morula se creuse d’une cavité.\nÀ ce stade, l’embryon est débarrassé de la zone pellucide.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q5",
            "type": "mcq",
            "prompt": "Le blastocyste se forme quand :",
            "options": [
              "La morula se creuse d’une cavité",
              "L’œuf se divise pour la première fois",
              "Les pronucléus fusionnent",
              "Le placenta se forme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Selon la leçon, la morula poursuit ses divisions puis se creuse d’une cavité pour former le blastocyste."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La zone pellucide disparaît avant l’accolement",
          "stepTheme": "La zone pellucide disparaît avant l’accolement",
          "stepBadge": "La zone pellucide disparaît avant l’accolement",
          "paragraphText": "Piège : croire que l’embryon garde sa zone pellucide jusqu’à la nidation.\nLe blastocyste est débarrassé de la zone pellucide, et c’est après la destruction de celle-ci que l’embryon s’accole à la muqueuse utérine.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q6",
            "type": "mcq",
            "prompt": "Au stade blastocyste, l’embryon est :",
            "options": [
              "Toujours enveloppé par la zone pellucide",
              "Débarrassé de la zone pellucide",
              "Déjà relié au placenta",
              "Devenu un ovule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte décrit le blastocyste comme débarrassé de la zone pellucide."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Les résultats observés après la fécondation",
          "stepTheme": "Les résultats observés après la fécondation",
          "stepBadge": "Les résultats observés après la fécondation",
          "paragraphText": "Après la fécondation, la leçon observe successivement : la division de l’œuf, le déplacement de l’embryon dans l’oviducte, la formation de la morula et celle du blastocyste.\nLa dernière observation de cette liste est l’implantation de l’embryon dans la muqueuse de l’utérus.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q7",
            "type": "mcq",
            "prompt": "Parmi ces stades, lequel vient juste avant le blastocyste ?",
            "options": [
              "L’implantation",
              "Le placenta",
              "La morula",
              "La caryogamie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Dans la succession décrite, la morula se forme avant le blastocyste, l’implantation venant ensuite."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q1",
          "type": "mcq",
          "prompt": "On appelle segmentation :",
          "options": [
            "L’ensemble des divisions subies par l’œuf au cours de son déplacement",
            "La fusion des deux pronucléus",
            "La migration des spermatozoïdes",
            "La perte de la zone pellucide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon définit la segmentation comme l’ensemble des divisions subies par l’œuf au cours de son déplacement."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q2",
          "type": "mcq",
          "prompt": "La morula est :",
          "options": [
            "Une cellule unique diploïde",
            "Un embryon de plusieurs cellules enveloppées par la zone pellucide",
            "Un embryon creusé d’une cavité",
            "L’embryon implanté dans la muqueuse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après le texte, la division de l’œuf donne un embryon de plusieurs cellules enveloppées par la zone pellucide : la morula."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q3",
          "type": "mcq",
          "prompt": "Pendant la segmentation, l’embryon se déplace :",
          "options": [
            "Grâce à son flagelle",
            "En nageant dans l’utérus",
            "Jusqu’à la cavité utérine, sans posséder d’organe de déplacement",
            "Uniquement après la nidation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon souligne que l’embryon se déplace jusqu’à la cavité utérine alors qu’il ne possède pas d’organe de déplacement."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q4",
          "type": "mcq",
          "prompt": "La morula vit une vie libre dans la cavité utérine pendant :",
          "options": [
            "72 heures exactement dans la trompe",
            "11 jours",
            "6 à 7 jours",
            "Deux ou trois jours"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte indique que la morula vit deux ou trois jours une vie libre dans la cavité utérine."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q5",
          "type": "mcq",
          "prompt": "Le blastocyste se forme quand :",
          "options": [
            "La morula se creuse d’une cavité",
            "L’œuf se divise pour la première fois",
            "Les pronucléus fusionnent",
            "Le placenta se forme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Selon la leçon, la morula poursuit ses divisions puis se creuse d’une cavité pour former le blastocyste."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q6",
          "type": "mcq",
          "prompt": "Au stade blastocyste, l’embryon est :",
          "options": [
            "Toujours enveloppé par la zone pellucide",
            "Débarrassé de la zone pellucide",
            "Déjà relié au placenta",
            "Devenu un ovule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte décrit le blastocyste comme débarrassé de la zone pellucide."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p04_q7",
          "type": "mcq",
          "prompt": "Parmi ces stades, lequel vient juste avant le blastocyste ?",
          "options": [
            "L’implantation",
            "Le placenta",
            "La morula",
            "La caryogamie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Dans la succession décrite, la morula se forme avant le blastocyste, l’implantation venant ensuite."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05",
      "order": 5,
      "title": "L’implantation et la nidation",
      "summary": "Expliquer l’accolement de l’embryon, son enfouissement dans la muqueuse et le rôle de l’hormone HCG.",
      "conceptExplanation": "L’embryon s’accole à la muqueuse utérine par son pôle embryonnaire, après la destruction de la zone pellucide ; cet accolement se passe le 6e ou 7e jour après la fécondation.\nL’implantation est précédée par une stimulation de la muqueuse par la progestérone, qui enrichit la muqueuse en vaisseaux sanguins et en glandes sécrétant du mucus et du glycogène : la muqueuse est alors apte à accueillir l’embryon.\nDiverses cellules du trophoblaste attaquent la muqueuse utérine par l’intermédiaire d’une enzyme et permettent à l’embryon de pénétrer dans la muqueuse, qui se referme au-dessus de lui : c’est la nidation.\nLa nidation prend fin 11 jours après la fécondation, puis commence la gestation.\nLes cellules externes, le trophoblaste, forment avec les cellules voisines de l’utérus le placenta, qui sécrète l’hormone HCG (Hormone Gonadotrophine Chorionique) ; son passage dans le sang maternel empêche la régression du corps jaune et prolonge son action.",
      "keyRule": "Accolement au 6e ou 7e jour, nidation achevée 11 jours après la fécondation, et HCG qui maintient le corps jaune.",
      "formulas": [],
      "workedExample": {
        "title": "Le calendrier de l’implantation",
        "statement": "Un élève affirme que l’embryon s’implante dès le jour de la fécondation. Corrige son affirmation à l’aide des délais donnés dans la leçon.",
        "methodSteps": [
          "Après la fécondation dans la trompe, l’œuf se divise pendant son déplacement et devient morula puis blastocyste.",
          "L’embryon ne s’accole à la muqueuse utérine que le 6e ou 7e jour après la fécondation, par son pôle embryonnaire.",
          "Il pénètre ensuite dans la muqueuse grâce au trophoblaste : c’est la nidation.",
          "La nidation prend fin 11 jours après la fécondation, puis la gestation commence."
        ],
        "conclusion": "L’implantation n’est pas immédiate : accolement au 6e ou 7e jour et nidation terminée au 11e jour après la fécondation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’accolement de l’embryon",
          "stepTheme": "L’accolement de l’embryon",
          "stepBadge": "L’accolement de l’embryon",
          "paragraphText": "L’embryon s’accole à la muqueuse utérine par son pôle embryonnaire.\nCet accolement a lieu après la destruction de la zone pellucide.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q1",
            "type": "mcq",
            "prompt": "L’embryon s’accole à la muqueuse utérine :",
            "options": [
              "Par son pôle embryonnaire",
              "Par le trophoblaste entier dès la fécondation",
              "Par la zone pellucide",
              "Par le cordon ombilical"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon précise que l’embryon s’accole à la muqueuse utérine par son pôle embryonnaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le jour de l’accolement",
          "stepTheme": "Le jour de l’accolement",
          "stepBadge": "Le jour de l’accolement",
          "paragraphText": "L’accolement de l’embryon à la muqueuse utérine se passe le 6e ou 7e jour après la fécondation.\nAprès l’accolement, l’embryon s’implante dans la muqueuse utérine.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q2",
            "type": "mcq",
            "prompt": "L’accolement de l’embryon a lieu :",
            "options": [
              "Le jour même de la fécondation",
              "Le 6e ou 7e jour après la fécondation",
              "Le 11e jour après la fécondation",
              "Après 72 heures dans l’ampoule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte situe l’accolement le 6e ou 7e jour après la fécondation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La préparation de la muqueuse par la progestérone",
          "stepTheme": "La préparation de la muqueuse par la progestérone",
          "stepBadge": "La préparation de la muqueuse par la progestérone",
          "paragraphText": "L’implantation est précédée par une stimulation de la muqueuse par la progestérone.\nCette stimulation enrichit la muqueuse en vaisseaux sanguins et en glandes sécrétant du mucus et du glycogène, ce qui la rend apte à accueillir l’embryon.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q3",
            "type": "mcq",
            "prompt": "Avant l’implantation, la progestérone stimule la muqueuse en l’enrichissant en :",
            "options": [
              "Fibres musculaires uniquement",
              "Spermatozoïdes",
              "Vaisseaux sanguins et glandes sécrétant mucus et glycogène",
              "Granules corticaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D’après la leçon, la progestérone entraîne un enrichissement de la muqueuse en vaisseaux sanguins et en glandes sécrétant du mucus et du glycogène."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La nidation",
          "stepTheme": "La nidation",
          "stepBadge": "La nidation",
          "paragraphText": "• Nidation : pénétration de l’embryon dans la muqueuse utérine, qui se referme au-dessus de lui.\nDiverses cellules du trophoblaste attaquent la muqueuse par l’intermédiaire d’une enzyme et permettent cette pénétration.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q4",
            "type": "mcq",
            "prompt": "La nidation correspond à :",
            "options": [
              "La formation du blastocyste",
              "La fusion des pronucléus",
              "L’émission du deuxième globule polaire",
              "La pénétration de l’embryon dans la muqueuse utérine, qui se referme au-dessus de lui"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon définit la nidation comme la pénétration de l’embryon dans la muqueuse, celle-ci se refermant au-dessus de l’embryon qui y fait son nid."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La fin de la nidation : 11 jours",
          "stepTheme": "La fin de la nidation : 11 jours",
          "stepBadge": "La fin de la nidation : 11 jours",
          "paragraphText": "Piège : confondre le jour de l’accolement (6e ou 7e jour) avec la fin de la nidation.\nLa nidation prend fin 11 jours après la fécondation, et c’est alors que commence la gestation.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q5",
            "type": "mcq",
            "prompt": "La nidation prend fin :",
            "options": [
              "11 jours après la fécondation",
              "Le 6e jour après la fécondation",
              "Après deux ou trois jours de vie libre",
              "Après 72 heures"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte indique que la nidation prend fin 11 jours après la fécondation, puis commence la gestation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le placenta et l’hormone HCG",
          "stepTheme": "Le placenta et l’hormone HCG",
          "stepBadge": "Le placenta et l’hormone HCG",
          "paragraphText": "Les cellules externes de l’embryon, le trophoblaste, forment avec les cellules voisines de l’utérus le placenta.\nLe placenta sécrète une hormone, l’HCG (Hormone Gonadotrophine Chorionique), dont le passage dans le sang maternel empêche la régression du corps jaune et prolonge son action.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q6",
            "type": "mcq",
            "prompt": "L’hormone HCG sécrétée par le placenta a pour effet :",
            "options": [
              "De déclencher la réaction acrosomique",
              "D’empêcher la régression du corps jaune et de prolonger son action",
              "De provoquer l’ovulation",
              "De détruire la zone pellucide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, le passage de l’HCG dans le sang maternel empêche la régression du corps jaune et prolonge son action."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le trophoblaste à l’œuvre",
          "stepTheme": "Le trophoblaste à l’œuvre",
          "stepBadge": "Le trophoblaste à l’œuvre",
          "paragraphText": "Exemple de la leçon : diverses cellules du trophoblaste attaquent la muqueuse utérine par l’intermédiaire d’une enzyme.\nCette attaque permet à l’embryon de pénétrer dans la muqueuse, qui se referme ensuite au-dessus de lui.",
          "exercise": {
            "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q7",
            "type": "mcq",
            "prompt": "Les cellules du trophoblaste permettent la pénétration de l’embryon grâce à :",
            "options": [
              "Leur flagelle",
              "La progestérone qu’elles sécrètent",
              "Une enzyme qui attaque la muqueuse utérine",
              "Les cils vibratiles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise que les cellules du trophoblaste attaquent la muqueuse utérine par l’intermédiaire d’une enzyme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q1",
          "type": "mcq",
          "prompt": "L’embryon s’accole à la muqueuse utérine :",
          "options": [
            "Par son pôle embryonnaire",
            "Par le trophoblaste entier dès la fécondation",
            "Par la zone pellucide",
            "Par le cordon ombilical"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon précise que l’embryon s’accole à la muqueuse utérine par son pôle embryonnaire."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q2",
          "type": "mcq",
          "prompt": "L’accolement de l’embryon a lieu :",
          "options": [
            "Le jour même de la fécondation",
            "Le 6e ou 7e jour après la fécondation",
            "Le 11e jour après la fécondation",
            "Après 72 heures dans l’ampoule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte situe l’accolement le 6e ou 7e jour après la fécondation."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q3",
          "type": "mcq",
          "prompt": "Avant l’implantation, la progestérone stimule la muqueuse en l’enrichissant en :",
          "options": [
            "Fibres musculaires uniquement",
            "Spermatozoïdes",
            "Vaisseaux sanguins et glandes sécrétant mucus et glycogène",
            "Granules corticaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D’après la leçon, la progestérone entraîne un enrichissement de la muqueuse en vaisseaux sanguins et en glandes sécrétant du mucus et du glycogène."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q4",
          "type": "mcq",
          "prompt": "La nidation correspond à :",
          "options": [
            "La formation du blastocyste",
            "La fusion des pronucléus",
            "L’émission du deuxième globule polaire",
            "La pénétration de l’embryon dans la muqueuse utérine, qui se referme au-dessus de lui"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon définit la nidation comme la pénétration de l’embryon dans la muqueuse, celle-ci se refermant au-dessus de l’embryon qui y fait son nid."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q5",
          "type": "mcq",
          "prompt": "La nidation prend fin :",
          "options": [
            "11 jours après la fécondation",
            "Le 6e jour après la fécondation",
            "Après deux ou trois jours de vie libre",
            "Après 72 heures"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte indique que la nidation prend fin 11 jours après la fécondation, puis commence la gestation."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q6",
          "type": "mcq",
          "prompt": "L’hormone HCG sécrétée par le placenta a pour effet :",
          "options": [
            "De déclencher la réaction acrosomique",
            "D’empêcher la régression du corps jaune et de prolonger son action",
            "De provoquer l’ovulation",
            "De détruire la zone pellucide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, le passage de l’HCG dans le sang maternel empêche la régression du corps jaune et prolonge son action."
        },
        {
          "id": "terminale_d_svt_l08_devenir_cellules_sexuelles_p05_q7",
          "type": "mcq",
          "prompt": "Les cellules du trophoblaste permettent la pénétration de l’embryon grâce à :",
          "options": [
            "Leur flagelle",
            "La progestérone qu’elles sécrètent",
            "Une enzyme qui attaque la muqueuse utérine",
            "Les cils vibratiles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise que les cellules du trophoblaste attaquent la muqueuse utérine par l’intermédiaire d’une enzyme."
        }
      ]
    }
  ]
};
