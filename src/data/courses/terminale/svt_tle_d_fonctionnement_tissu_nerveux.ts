import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 2 : Le fonctionnement du tissu nerveux » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2890
export const SVT_TLE_D_L02_FONCTIONNEMENT_TISSU_NERVEUX: CurriculumChapter = {
  "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux",
  "subjectId": "svt",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 2,
  "title": "Leçon 2 : Le fonctionnement du tissu nerveux",
  "summary": "Le tissu nerveux, organisé en nerfs et en neurones, propage un message de nature électrique : potentiel de repos, potentiel d’action, propriétés d’excitabilité et de conduction, puis transmission synaptique par des médiateurs chimiques.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2890",
  "points": [
    {
      "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01",
      "order": 1,
      "title": "Organisation du tissu nerveux : nerf, neurone et fibres",
      "summary": "Décrire le nerf, le neurone et les deux types de fibres nerveuses.",
      "conceptExplanation": "Le nerf est formé de faisceaux de fibres nerveuses et de vaisseaux sanguins situés dans un tissu conjonctif, le tout entouré d’une gaine conjonctive ou épinèvre.\nChaque faisceau est entouré par une membrane appelée périnèvre et subdivisé par des endonèvres.\nLe neurone ou cellule nerveuse est une cellule allongée constituée de trois grandes parties : le corps cellulaire ou soma ou péricaryon, l’axone ou cylindraxe et l’arborisation terminale.\nOn distingue deux types de fibres nerveuses : les fibres nerveuses myélinisées et les fibres nerveuses amyélinisées.\nLe neurone représente l’unité fonctionnelle du tissu nerveux.",
      "keyRule": "Nerf égale faisceaux de fibres dans un tissu conjonctif ; neurone égale péricaryon, axone et arborisation terminale.",
      "formulas": [],
      "workedExample": {
        "title": "Annoter la coupe transversale d’un nerf et la structure d’un neurone",
        "statement": "À partir des annotations du document I, identifie les éléments numérotés de la structure du neurone : dendrite, péricaryon, axone, gaine de myéline, nœud de Ranvier et arborisation terminale.",
        "methodSteps": [
          "L’annotation donne : 3 égale dendrite et 4 égale péricaryon, partie qui contient le corps cellulaire.",
          "6 égale axone, 7 égale gaine de myéline et 8 égale nœud de Ranvier, interruption de la gaine.",
          "10 égale arborisation terminale, extrémité ramifiée de l’axone.",
          "Les autres numéros désignent la membrane, le cytoplasme, la cellule gliale et la cellule de Schwann."
        ],
        "conclusion": "Ce sont les annotations du document I de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La composition d’un nerf",
          "stepTheme": "La composition d’un nerf",
          "stepBadge": "La composition d’un nerf",
          "paragraphText": "• Nerf : ensemble formé de faisceaux de fibres nerveuses et de vaisseaux sanguins dans un tissu conjonctif.\nLe tout est entouré d’une gaine conjonctive appelée épinèvre.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q1",
            "type": "mcq",
            "prompt": "Un nerf est formé de :",
            "options": [
              "Neurones sans aucune enveloppe",
              "Faisceaux de fibres nerveuses et de vaisseaux sanguins dans un tissu conjonctif",
              "Uniquement de péricaryons",
              "Cellules musculaires regroupées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’analyse du document I : le nerf contient des faisceaux de fibres et des vaisseaux sanguins, entourés par l’épinèvre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les trois parties du neurone",
          "stepTheme": "Les trois parties du neurone",
          "stepBadge": "Les trois parties du neurone",
          "paragraphText": "Le neurone est constitué de trois grandes parties.\n• Le corps cellulaire ou soma ou péricaryon.\n• L’axone ou cylindraxe.\n• L’arborisation terminale.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q2",
            "type": "mcq",
            "prompt": "Les trois grandes parties du neurone sont :",
            "options": [
              "La dendrite, la myéline et le nœud de Ranvier",
              "Le péricaryon, l’axone et l’arborisation terminale",
              "L’épinèvre, le périnèvre et l’endonèvre",
              "La membrane, le cytoplasme et le noyau seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon liste le corps cellulaire ou péricaryon, l’axone et l’arborisation terminale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Épinèvre, périnèvre et endonèvre",
          "stepTheme": "Épinèvre, périnèvre et endonèvre",
          "stepBadge": "Épinèvre, périnèvre et endonèvre",
          "paragraphText": "Chaque faisceau de fibres nerveuses est entouré par une membrane appelée périnèvre.\nIl est subdivisé par des endonèvres, tandis que l’épinèvre entoure l’ensemble du nerf.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q3",
            "type": "mcq",
            "prompt": "La membrane qui entoure chaque faisceau de fibres nerveuses s’appelle :",
            "options": [
              "L’épinèvre",
              "Le périnèvre",
              "La myéline",
              "Le sarcolemme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le périnèvre entoure chaque faisceau ; l’épinèvre entoure tout le nerf."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Fibres myélinisées et amyélinisées",
          "stepTheme": "Fibres myélinisées et amyélinisées",
          "stepBadge": "Fibres myélinisées et amyélinisées",
          "paragraphText": "On distingue deux types de fibres nerveuses.\n• Les fibres nerveuses myélinisées, pourvues d’une gaine de myéline.\n• Les fibres nerveuses amyélinisées, sans cette gaine.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q4",
            "type": "mcq",
            "prompt": "Les deux types de fibres nerveuses distingués dans la leçon sont :",
            "options": [
              "Les fibres sensitives et motrices",
              "Les fibres myélinisées et les fibres amyélinisées",
              "Les fibres lentes et très lentes seulement",
              "Les axones et les dendrites"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la distinction faite dans l’analyse du document I."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le neurone, unité fonctionnelle",
          "stepTheme": "Le neurone, unité fonctionnelle",
          "stepBadge": "Le neurone, unité fonctionnelle",
          "paragraphText": "Piège : le tissu nerveux est constitué de nerfs, mais son unité fonctionnelle n’est pas le nerf.\nLa conclusion de la leçon précise que le neurone ou cellule nerveuse représente l’unité fonctionnelle du tissu nerveux.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q5",
            "type": "mcq",
            "prompt": "L’unité fonctionnelle du tissu nerveux est :",
            "options": [
              "Le nerf entier",
              "Le faisceau de fibres",
              "Le neurone",
              "Le vaisseau sanguin"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion de la partie A : le neurone représente l’unité fonctionnelle du tissu nerveux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lire les annotations du document I",
          "stepTheme": "Lire les annotations du document I",
          "stepBadge": "Lire les annotations du document I",
          "paragraphText": "L’annotation du document I associe notamment le numéro 7 à la gaine de myéline et le numéro 9 à la cellule de Schwann.\nLe numéro 8 désigne le nœud de Ranvier.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q6",
            "type": "mcq",
            "prompt": "Dans l’annotation du document I, le numéro 7 désigne :",
            "options": [
              "Le péricaryon",
              "La gaine de myéline",
              "L’arborisation terminale",
              "La dendrite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Annotation du document I : 7 égale gaine de myéline, 8 égale nœud de Ranvier, 9 égale cellule de Schwann."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q1",
          "type": "mcq",
          "prompt": "Un nerf est formé de :",
          "options": [
            "Neurones sans aucune enveloppe",
            "Faisceaux de fibres nerveuses et de vaisseaux sanguins dans un tissu conjonctif",
            "Uniquement de péricaryons",
            "Cellules musculaires regroupées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’analyse du document I : le nerf contient des faisceaux de fibres et des vaisseaux sanguins, entourés par l’épinèvre."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q2",
          "type": "mcq",
          "prompt": "Les trois grandes parties du neurone sont :",
          "options": [
            "La dendrite, la myéline et le nœud de Ranvier",
            "Le péricaryon, l’axone et l’arborisation terminale",
            "L’épinèvre, le périnèvre et l’endonèvre",
            "La membrane, le cytoplasme et le noyau seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon liste le corps cellulaire ou péricaryon, l’axone et l’arborisation terminale."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q3",
          "type": "mcq",
          "prompt": "La membrane qui entoure chaque faisceau de fibres nerveuses s’appelle :",
          "options": [
            "L’épinèvre",
            "Le périnèvre",
            "La myéline",
            "Le sarcolemme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le périnèvre entoure chaque faisceau ; l’épinèvre entoure tout le nerf."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q4",
          "type": "mcq",
          "prompt": "Les deux types de fibres nerveuses distingués dans la leçon sont :",
          "options": [
            "Les fibres sensitives et motrices",
            "Les fibres myélinisées et les fibres amyélinisées",
            "Les fibres lentes et très lentes seulement",
            "Les axones et les dendrites"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la distinction faite dans l’analyse du document I."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q5",
          "type": "mcq",
          "prompt": "L’unité fonctionnelle du tissu nerveux est :",
          "options": [
            "Le nerf entier",
            "Le faisceau de fibres",
            "Le neurone",
            "Le vaisseau sanguin"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion de la partie A : le neurone représente l’unité fonctionnelle du tissu nerveux."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p01_q6",
          "type": "mcq",
          "prompt": "Dans l’annotation du document I, le numéro 7 désigne :",
          "options": [
            "Le péricaryon",
            "La gaine de myéline",
            "L’arborisation terminale",
            "La dendrite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Annotation du document I : 7 égale gaine de myéline, 8 égale nœud de Ranvier, 9 égale cellule de Schwann."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02",
      "order": 2,
      "title": "Le potentiel de repos et son origine ionique",
      "summary": "Expliquer le potentiel de repos de moins 70 millivolts et le rôle de la pompe sodium-potassium.",
      "conceptExplanation": "Lorsque les deux électrodes réceptrices sont à la surface de l’axone, on enregistre un balayage horizontal du spot indiquant le potentiel 0 millivolt : c’est le potentiel de référence.\nLorsqu’une électrode est enfoncée dans l’axone, on enregistre une déviation qui se stabilise à moins 70 millivolts : c’est le potentiel de repos ou potentiel de membrane.\nLa surface de l’axone au repos est chargée positivement et l’intérieur négativement.\nL’origine de cette différence de potentiel est une inégale répartition des ions potassium et sodium de part et d’autre de la membrane : le milieu intracellulaire est plus concentré en ions potassium, le milieu extracellulaire plus concentré en ions sodium.\nCe déséquilibre est maintenu grâce à la pompe ionique sodium-potassium.",
      "keyRule": "Moins 70 millivolts au repos : intérieur négatif, extérieur positif, grâce à la répartition inégale des ions et à la pompe sodium-potassium.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter les enregistrements avec les microélectrodes sur l’axone géant de calmar",
        "statement": "Sur un axone géant de calmar, les deux électrodes en surface donnent 0 millivolt, puis une électrode enfoncée dans l’axone donne moins 70 millivolts. Interprète ces deux enregistrements.",
        "methodSteps": [
          "Deux électrodes en surface sont au même potentiel : la différence de potentiel est nulle, c’est le potentiel de référence.",
          "Avec une électrode interne, l’intérieur apparaît électronégatif par rapport à la surface : la différence vaut moins 70 millivolts.",
          "Cette valeur au repos est le potentiel de repos ou potentiel de membrane."
        ],
        "conclusion": "Ce sont les interprétations des figures A-1 et A-2 du document II."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le potentiel de référence",
          "stepTheme": "Le potentiel de référence",
          "stepBadge": "Le potentiel de référence",
          "paragraphText": "• Potentiel de référence (ou potentiel zéro) : balayage horizontal du spot à 0 millivolt quand les deux électrodes sont à la surface de l’axone.\nLes deux points en surface sont au même potentiel, donc la différence de potentiel est nulle.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q1",
            "type": "mcq",
            "prompt": "Quand les deux électrodes réceptrices sont à la surface de l’axone au repos, on enregistre :",
            "options": [
              "Moins 70 millivolts",
              "Plus 70 millivolts",
              "0 millivolt, le potentiel de référence",
              "Un potentiel d’action complet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Figure A-1 : les deux électrodes en surface sont au même potentiel, la différence est nulle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le potentiel de repos",
          "stepTheme": "Le potentiel de repos",
          "stepBadge": "Le potentiel de repos",
          "paragraphText": "• Potentiel de repos (ou potentiel de membrane) : différence de potentiel entre la surface et l’intérieur de la fibre lorsqu’elle est au repos.\nSa valeur enregistrée sur l’axone est de moins 70 millivolts.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q2",
            "type": "mcq",
            "prompt": "Le potentiel de repos d’une fibre nerveuse vaut :",
            "options": [
              "0 millivolt",
              "Moins 70 millivolts",
              "Plus 30 millivolts",
              "Moins 7 millivolts"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La déviation se stabilise à moins 70 millivolts : c’est la valeur du potentiel de repos dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les charges des deux faces au repos",
          "stepTheme": "Les charges des deux faces au repos",
          "stepBadge": "Les charges des deux faces au repos",
          "paragraphText": "Au repos, la surface de l’axone est chargée positivement.\nL’intérieur de l’axone est chargé négativement, ce qui explique le signe négatif du potentiel de repos.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q3",
            "type": "mcq",
            "prompt": "Au repos, les charges de la membrane de l’axone sont :",
            "options": [
              "Surface négative, intérieur positif",
              "Surface positive, intérieur négatif",
              "Les deux faces positives",
              "Les deux faces neutres"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’électrode interne est plus électronégative que l’électrode de surface : intérieur négatif, surface positive."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La répartition inégale des ions",
          "stepTheme": "La répartition inégale des ions",
          "stepBadge": "La répartition inégale des ions",
          "paragraphText": "Le milieu intracellulaire est plus concentré en ions potassium que le milieu extracellulaire.\nLe milieu extracellulaire est plus concentré en ions sodium que le milieu intracellulaire.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q4",
            "type": "mcq",
            "prompt": "Au repos, le milieu intracellulaire est plus concentré en :",
            "options": [
              "Ions sodium",
              "Ions calcium",
              "Ions potassium",
              "Ions chlorure uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon indique que l’intérieur est plus riche en ions potassium et l’extérieur plus riche en ions sodium."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La pompe maintient le déséquilibre",
          "stepTheme": "La pompe maintient le déséquilibre",
          "stepBadge": "La pompe maintient le déséquilibre",
          "paragraphText": "Piège : les mouvements des ions devraient conduire à une égalité des concentrations de part et d’autre de la membrane.\nMais le déséquilibre persiste car la pompe ionique sodium-potassium le maintient en permanence.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q5",
            "type": "mcq",
            "prompt": "Le déséquilibre ionique à l’origine du potentiel de repos est maintenu grâce à :",
            "options": [
              "La gaine de myéline",
              "La pompe ionique sodium-potassium",
              "L’oscilloscope",
              "Les nœuds de Ranvier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon attribue le maintien du déséquilibre à la pompe ionique sodium-potassium."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’axone géant de calmar",
          "stepTheme": "L’axone géant de calmar",
          "stepBadge": "L’axone géant de calmar",
          "paragraphText": "Les expériences de la leçon sont réalisées sur un axone géant de calmar.\nC’est sur cette préparation que les enregistrements à l’oscilloscope cathodique mettent en évidence la nature électrique du message nerveux.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q6",
            "type": "mcq",
            "prompt": "Les enregistrements du potentiel de repos et du potentiel d’action sont réalisés sur :",
            "options": [
              "Un nerf entier de grenouille",
              "Une fibre musculaire",
              "Un axone géant de calmar",
              "Un cœur isolé"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le principe des expériences du document II repose sur l’axone géant de calmar et l’oscillographe cathodique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q1",
          "type": "mcq",
          "prompt": "Quand les deux électrodes réceptrices sont à la surface de l’axone au repos, on enregistre :",
          "options": [
            "Moins 70 millivolts",
            "Plus 70 millivolts",
            "0 millivolt, le potentiel de référence",
            "Un potentiel d’action complet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Figure A-1 : les deux électrodes en surface sont au même potentiel, la différence est nulle."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q2",
          "type": "mcq",
          "prompt": "Le potentiel de repos d’une fibre nerveuse vaut :",
          "options": [
            "0 millivolt",
            "Moins 70 millivolts",
            "Plus 30 millivolts",
            "Moins 7 millivolts"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La déviation se stabilise à moins 70 millivolts : c’est la valeur du potentiel de repos dans la leçon."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q3",
          "type": "mcq",
          "prompt": "Au repos, les charges de la membrane de l’axone sont :",
          "options": [
            "Surface négative, intérieur positif",
            "Surface positive, intérieur négatif",
            "Les deux faces positives",
            "Les deux faces neutres"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’électrode interne est plus électronégative que l’électrode de surface : intérieur négatif, surface positive."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q4",
          "type": "mcq",
          "prompt": "Au repos, le milieu intracellulaire est plus concentré en :",
          "options": [
            "Ions sodium",
            "Ions calcium",
            "Ions potassium",
            "Ions chlorure uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon indique que l’intérieur est plus riche en ions potassium et l’extérieur plus riche en ions sodium."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q5",
          "type": "mcq",
          "prompt": "Le déséquilibre ionique à l’origine du potentiel de repos est maintenu grâce à :",
          "options": [
            "La gaine de myéline",
            "La pompe ionique sodium-potassium",
            "L’oscilloscope",
            "Les nœuds de Ranvier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon attribue le maintien du déséquilibre à la pompe ionique sodium-potassium."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p02_q6",
          "type": "mcq",
          "prompt": "Les enregistrements du potentiel de repos et du potentiel d’action sont réalisés sur :",
          "options": [
            "Un nerf entier de grenouille",
            "Une fibre musculaire",
            "Un axone géant de calmar",
            "Un cœur isolé"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le principe des expériences du document II repose sur l’axone géant de calmar et l’oscillographe cathodique."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03",
      "order": 3,
      "title": "Le potentiel d’action monophasique et ses phases",
      "summary": "Décrire les phases du potentiel d’action et les mouvements d’ions correspondants.",
      "conceptExplanation": "La courbe obtenue lorsqu’on excite l’axone, une électrode étant enfoncée dans celui-ci, est un potentiel d’action monophasique.\nLe segment A est l’artéfact de stimulation, AB le temps de latence, pendant lequel les canaux sodium et potassium voltage dépendants restent fermés.\nBC est la phase de dépolarisation, due à une entrée massive d’ions sodium par les canaux sodium voltage dépendants ouverts ; CD est la phase de repolarisation, due à une sortie d’ions potassium par les canaux potassium ouverts.\nDE est la phase d’hyperpolarisation, due au fait que les canaux potassium restent longtemps ouverts, avec une sortie excessive d’ions potassium ; EF est la phase de restauration, assurée par la pompe sodium-potassium grâce à l’énergie de l’hydrolyse de l’ATP.\nLe potentiel d’action correspond à une inversion momentanée de la polarité entre les deux faces de la membrane.",
      "keyRule": "Dépolarisation égale entrée de sodium, repolarisation égale sortie de potassium, restauration égale pompe sodium-potassium.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer les phases BC, CD et DE du potentiel d’action monophasique",
        "statement": "Sur l’enregistrement monophasique, explique par les mouvements d’ions les phases BC (dépolarisation), CD (repolarisation) et DE (hyperpolarisation).",
        "methodSteps": [
          "Phase BC : les canaux sodium voltage dépendants s’ouvrent, les ions sodium entrent massivement et la polarité s’inverse.",
          "Phase CD : les canaux sodium se ferment, les canaux potassium s’ouvrent et les ions potassium sortent, ramenant la polarité initiale.",
          "Phase DE : les canaux potassium restent longtemps ouverts, la sortie excessive de potassium fait descendre le potentiel sous le potentiel de repos."
        ],
        "conclusion": "Ce sont les interprétations de la figure B du document II."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’artéfact et le temps de latence",
          "stepTheme": "L’artéfact et le temps de latence",
          "stepBadge": "L’artéfact et le temps de latence",
          "paragraphText": "• Artéfact de stimulation (A) : marque du moment précis de la stimulation qui donne naissance à l’influx nerveux.\n• Temps de latence (AB) : temps mis par l’influx nerveux pour atteindre la première électrode réceptrice ; les canaux sodium et potassium voltage dépendants restent fermés.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q1",
            "type": "mcq",
            "prompt": "Le temps de latence AB correspond au temps mis par l’influx pour :",
            "options": [
              "Traverser toute la synapse",
              "Atteindre la première électrode réceptrice",
              "Restaurer les concentrations ioniques",
              "Ouvrir les canaux potassium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition donnée dans l’interprétation de la figure B."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La dépolarisation : entrée massive de sodium",
          "stepTheme": "La dépolarisation : entrée massive de sodium",
          "stepBadge": "La dépolarisation : entrée massive de sodium",
          "paragraphText": "Pendant la phase BC de dépolarisation, la face externe de la membrane devient électronégative et la face interne électropositive.\nCette phase est due à une entrée massive d’ions sodium dans l’axone, suite à l’ouverture des canaux sodium voltage dépendants.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q2",
            "type": "mcq",
            "prompt": "La dépolarisation du potentiel d’action est due à :",
            "options": [
              "Une sortie massive d’ions potassium",
              "Une entrée massive d’ions sodium par les canaux sodium ouverts",
              "L’arrêt de la pompe sodium-potassium seulement",
              "Une entrée d’ions calcium dans la synapse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la phase BC : ouverture des canaux sodium voltage dépendants et entrée massive de sodium."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La repolarisation : sortie de potassium",
          "stepTheme": "La repolarisation : sortie de potassium",
          "stepBadge": "La repolarisation : sortie de potassium",
          "paragraphText": "Pendant la phase CD de repolarisation, la face externe redevient positive et la face interne négative.\nCette phase s’explique par une sortie d’ions potassium de l’axone, suite à l’ouverture des canaux potassium voltage dépendants, les canaux sodium restant fermés.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q3",
            "type": "mcq",
            "prompt": "La repolarisation est due à :",
            "options": [
              "Une entrée massive de sodium",
              "Une sortie d’ions potassium par les canaux potassium ouverts",
              "Une entrée d’ions calcium",
              "La fermeture de tous les canaux sans mouvement d’ions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la phase CD : sortie de potassium par les canaux potassium voltage dépendants ouverts."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’hyperpolarisation",
          "stepTheme": "L’hyperpolarisation",
          "stepBadge": "L’hyperpolarisation",
          "paragraphText": "La phase DE d’hyperpolarisation fait descendre le spot en dessous du potentiel de repos.\nElle est due au fait que les canaux potassium voltage dépendants restent longtemps ouverts, entraînant une sortie excessive des ions potassium.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q4",
            "type": "mcq",
            "prompt": "L’hyperpolarisation s’explique par :",
            "options": [
              "Une entrée excessive de sodium",
              "La fermeture immédiate des canaux potassium",
              "Des canaux potassium restés longtemps ouverts, avec sortie excessive de potassium",
              "L’action des neurotransmetteurs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’explication de la phase DE dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Inversion momentanée, pas définitive",
          "stepTheme": "Inversion momentanée, pas définitive",
          "stepBadge": "Inversion momentanée, pas définitive",
          "paragraphText": "Piège : le potentiel d’action ne renverse pas durablement la polarité de la membrane.\nLa leçon le définit comme une inversion momentanée de la polarité entre les deux faces de la membrane de l’axone, suivie d’une restauration.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q5",
            "type": "mcq",
            "prompt": "Le potentiel d’action correspond à :",
            "options": [
              "Une disparition définitive du potentiel de repos",
              "Une inversion momentanée de la polarité membranaire",
              "Un potentiel toujours positif",
              "Une absence de mouvements d’ions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de l’interprétation : le potentiel d’action est une inversion momentanée de la polarité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La restauration par la pompe",
          "stepTheme": "La restauration par la pompe",
          "stepBadge": "La restauration par la pompe",
          "paragraphText": "Pendant la phase EF de restauration, la membrane retrouve son potentiel de repos initial.\nLa pompe sodium-potassium fait sortir les ions sodium entrés et fait entrer les ions potassium sortis, contre leur gradient de concentration, grâce à l’énergie produite par l’hydrolyse de l’ATP.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q6",
            "type": "mcq",
            "prompt": "La restauration du potentiel de repos est assurée par la pompe sodium-potassium qui fonctionne :",
            "options": [
              "Sans aucune énergie",
              "Grâce à l’énergie de l’hydrolyse de l’ATP, contre le gradient de concentration",
              "Seulement dans les synapses",
              "Uniquement au repos complet du nerf"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que ce transport actif utilise l’énergie produite par l’hydrolyse de l’ATP."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q1",
          "type": "mcq",
          "prompt": "Le temps de latence AB correspond au temps mis par l’influx pour :",
          "options": [
            "Traverser toute la synapse",
            "Atteindre la première électrode réceptrice",
            "Restaurer les concentrations ioniques",
            "Ouvrir les canaux potassium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition donnée dans l’interprétation de la figure B."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q2",
          "type": "mcq",
          "prompt": "La dépolarisation du potentiel d’action est due à :",
          "options": [
            "Une sortie massive d’ions potassium",
            "Une entrée massive d’ions sodium par les canaux sodium ouverts",
            "L’arrêt de la pompe sodium-potassium seulement",
            "Une entrée d’ions calcium dans la synapse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la phase BC : ouverture des canaux sodium voltage dépendants et entrée massive de sodium."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q3",
          "type": "mcq",
          "prompt": "La repolarisation est due à :",
          "options": [
            "Une entrée massive de sodium",
            "Une sortie d’ions potassium par les canaux potassium ouverts",
            "Une entrée d’ions calcium",
            "La fermeture de tous les canaux sans mouvement d’ions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la phase CD : sortie de potassium par les canaux potassium voltage dépendants ouverts."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q4",
          "type": "mcq",
          "prompt": "L’hyperpolarisation s’explique par :",
          "options": [
            "Une entrée excessive de sodium",
            "La fermeture immédiate des canaux potassium",
            "Des canaux potassium restés longtemps ouverts, avec sortie excessive de potassium",
            "L’action des neurotransmetteurs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’explication de la phase DE dans la leçon."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q5",
          "type": "mcq",
          "prompt": "Le potentiel d’action correspond à :",
          "options": [
            "Une disparition définitive du potentiel de repos",
            "Une inversion momentanée de la polarité membranaire",
            "Un potentiel toujours positif",
            "Une absence de mouvements d’ions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de l’interprétation : le potentiel d’action est une inversion momentanée de la polarité."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p03_q6",
          "type": "mcq",
          "prompt": "La restauration du potentiel de repos est assurée par la pompe sodium-potassium qui fonctionne :",
          "options": [
            "Sans aucune énergie",
            "Grâce à l’énergie de l’hydrolyse de l’ATP, contre le gradient de concentration",
            "Seulement dans les synapses",
            "Uniquement au repos complet du nerf"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que ce transport actif utilise l’énergie produite par l’hydrolyse de l’ATP."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04",
      "order": 4,
      "title": "Excitabilité : rhéobase, temps utile et chronaxie",
      "summary": "Définir les excitations liminaires, infraliminaires et supraliminaires et les trois caractéristiques chiffrées du nerf.",
      "conceptExplanation": "La courbe d’excitabilité du nerf représente les excitations seuils, dites excitations liminaires, qui provoquent l’ouverture des canaux sodium.\nLes excitations en dessous du seuil sont inefficaces : elles sont dites infraliminaires et ne provoquent pas l’ouverture des canaux sodium.\nLes excitations au-dessus du seuil sont efficaces : elles sont dites supraliminaires.\nLa plus petite intensité qui provoque une réponse est l’intensité seuil ou rhéobase : elle vaut 1 volt dans l’expérience. La plus petite durée d’application de la rhéobase pour provoquer une réponse est le temps utile : 1,8 milliseconde. La durée d’application de l’intensité double de la rhéobase, 2 volts, est la chronaxie : 0,6 milliseconde. Plus la chronaxie est petite, plus le nerf est excitable.",
      "keyRule": "1 volt égale rhéobase, 1,8 milliseconde égale temps utile, 0,6 milliseconde égale chronaxie dans l’expérience de la leçon.",
      "formulas": [],
      "workedExample": {
        "title": "Lire la courbe d’excitabilité du nerf",
        "statement": "Sur la courbe d’excitabilité, on lit qu’une intensité de 1 volt appliquée pendant au moins 1,8 milliseconde provoque une réponse, et que 2 volts provoquent une réponse en 0,6 milliseconde. Nomme ces trois valeurs.",
        "methodSteps": [
          "1 volt est la plus petite intensité efficace : c’est la rhéobase ou intensité seuil.",
          "1,8 milliseconde est la plus petite durée d’application de la rhéobase : c’est le temps utile.",
          "0,6 milliseconde est la durée d’application du double de la rhéobase : c’est la chronaxie."
        ],
        "conclusion": "Ce sont les valeurs relevées dans l’analyse et l’interprétation de la courbe d’excitabilité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La rhéobase",
          "stepTheme": "La rhéobase",
          "stepBadge": "La rhéobase",
          "paragraphText": "• Rhéobase (ou intensité seuil ou intensité liminaire) : plus petite intensité de stimulation qui provoque une réponse.\nDans l’expérience de la leçon, elle vaut 1 volt.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q1",
            "type": "mcq",
            "prompt": "La rhéobase est :",
            "options": [
              "La plus grande intensité supportable",
              "La plus petite intensité qui provoque une réponse",
              "Une durée de stimulation",
              "L’intensité double du seuil"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition de la leçon, avec la valeur de 1 volt relevée sur la courbe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le temps utile",
          "stepTheme": "Le temps utile",
          "stepBadge": "Le temps utile",
          "paragraphText": "• Temps utile : plus petite durée d’application de la rhéobase pour provoquer une réponse.\nDans l’expérience, le temps utile vaut 1,8 milliseconde pour la rhéobase de 1 volt.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q2",
            "type": "mcq",
            "prompt": "Le temps utile vaut, dans l’expérience de la leçon :",
            "options": [
              "0,6 milliseconde",
              "1 volt",
              "1,8 milliseconde",
              "2 volts"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse de la courbe : 1 volt provoque une réponse pour une durée minimum de 1,8 milliseconde."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La chronaxie",
          "stepTheme": "La chronaxie",
          "stepBadge": "La chronaxie",
          "paragraphText": "• Chronaxie : durée d’application de l’intensité double de la rhéobase pour provoquer une réponse.\nElle vaut 0,6 milliseconde pour 2 volts, et plus elle est petite, plus le nerf est excitable.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q3",
            "type": "mcq",
            "prompt": "La chronaxie est la durée d’application :",
            "options": [
              "De la rhéobase elle-même",
              "D’une intensité infraliminaire",
              "De l’intensité double de la rhéobase",
              "D’une stimulation quelconque"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définition de la leçon : la chronaxie correspond au double de la rhéobase, ici 2 volts pendant 0,6 milliseconde."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Excitations infraliminaires et supraliminaires",
          "stepTheme": "Excitations infraliminaires et supraliminaires",
          "stepBadge": "Excitations infraliminaires et supraliminaires",
          "paragraphText": "Les excitations en dessous du seuil sont inefficaces : ce sont les excitations infraliminaires, qui ne provoquent pas l’ouverture des canaux sodium.\nLes excitations au-dessus du seuil sont efficaces : ce sont les excitations supraliminaires, qui provoquent cette ouverture.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q4",
            "type": "mcq",
            "prompt": "Une excitation infraliminaire est une excitation qui :",
            "options": [
              "Est située au-dessus du seuil",
              "Provoque toujours une réponse maximale",
              "Est en dessous du seuil et ne provoque pas de réponse",
              "Ouvre les canaux sodium"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la courbe : en dessous de la courbe, pas de réponse ; ce sont les excitations infraliminaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre temps utile et chronaxie",
          "stepTheme": "Confondre temps utile et chronaxie",
          "stepBadge": "Confondre temps utile et chronaxie",
          "paragraphText": "Piège : le temps utile et la chronaxie sont deux durées différentes.\nLe temps utile se mesure avec la rhéobase (1 volt, 1,8 milliseconde) ; la chronaxie se mesure avec le double de la rhéobase (2 volts, 0,6 milliseconde).",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q5",
            "type": "mcq",
            "prompt": "La valeur de 0,6 milliseconde lue sur la courbe correspond à :",
            "options": [
              "Au temps utile de la rhéobase",
              "À la chronaxie, durée pour le double de la rhéobase",
              "À la durée du potentiel d’action",
              "Au temps de latence synaptique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’analyse précise que 0,6 milliseconde est le temps qu’il faut au double de 1 volt pour provoquer une réponse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un nerf plus excitable",
          "stepTheme": "Un nerf plus excitable",
          "stepBadge": "Un nerf plus excitable",
          "paragraphText": "La leçon indique que plus la chronaxie est petite, plus le nerf est excitable.\nLa rhéobase, le temps utile et la chronaxie sont donc les caractéristiques de l’excitabilité du tissu nerveux.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q6",
            "type": "mcq",
            "prompt": "Un nerf dont la chronaxie est plus petite qu’un autre est :",
            "options": [
              "Moins excitable",
              "Inexcitable",
              "Plus excitable",
              "En période réfractaire définitive"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Phrase de la leçon : plus la chronaxie est petite, plus le nerf est excitable."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q1",
          "type": "mcq",
          "prompt": "La rhéobase est :",
          "options": [
            "La plus grande intensité supportable",
            "La plus petite intensité qui provoque une réponse",
            "Une durée de stimulation",
            "L’intensité double du seuil"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition de la leçon, avec la valeur de 1 volt relevée sur la courbe."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q2",
          "type": "mcq",
          "prompt": "Le temps utile vaut, dans l’expérience de la leçon :",
          "options": [
            "0,6 milliseconde",
            "1 volt",
            "1,8 milliseconde",
            "2 volts"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse de la courbe : 1 volt provoque une réponse pour une durée minimum de 1,8 milliseconde."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q3",
          "type": "mcq",
          "prompt": "La chronaxie est la durée d’application :",
          "options": [
            "De la rhéobase elle-même",
            "D’une intensité infraliminaire",
            "De l’intensité double de la rhéobase",
            "D’une stimulation quelconque"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définition de la leçon : la chronaxie correspond au double de la rhéobase, ici 2 volts pendant 0,6 milliseconde."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q4",
          "type": "mcq",
          "prompt": "Une excitation infraliminaire est une excitation qui :",
          "options": [
            "Est située au-dessus du seuil",
            "Provoque toujours une réponse maximale",
            "Est en dessous du seuil et ne provoque pas de réponse",
            "Ouvre les canaux sodium"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la courbe : en dessous de la courbe, pas de réponse ; ce sont les excitations infraliminaires."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q5",
          "type": "mcq",
          "prompt": "La valeur de 0,6 milliseconde lue sur la courbe correspond à :",
          "options": [
            "Au temps utile de la rhéobase",
            "À la chronaxie, durée pour le double de la rhéobase",
            "À la durée du potentiel d’action",
            "Au temps de latence synaptique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’analyse précise que 0,6 milliseconde est le temps qu’il faut au double de 1 volt pour provoquer une réponse."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p04_q6",
          "type": "mcq",
          "prompt": "Un nerf dont la chronaxie est plus petite qu’un autre est :",
          "options": [
            "Moins excitable",
            "Inexcitable",
            "Plus excitable",
            "En période réfractaire définitive"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Phrase de la leçon : plus la chronaxie est petite, plus le nerf est excitable."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05",
      "order": 5,
      "title": "Loi du tout ou rien, sommation et périodes réfractaires",
      "summary": "Opposer la réponse de la fibre isolée et celle du nerf entier, puis décrire les périodes réfractaires absolue et relative.",
      "conceptExplanation": "Au niveau de la fibre nerveuse, en dessous de l’intensité seuil il n’y a aucune réponse, et dès le seuil atteint la réponse est d’amplitude d’emblée maximale : la fibre obéit à la loi du tout ou rien.\nAu niveau du nerf, l’amplitude de la réponse augmente avec l’intensité de stimulation car un nombre de plus en plus grand de fibres sont excitées : c’est le phénomène de recrutement progressif ou sommation.\nAprès une première réponse, le nerf peut perdre son excitabilité : pendant la période réfractaire absolue, il ne répond pas à une deuxième stimulation efficace ; pendant la période réfractaire relative, sa réponse à la deuxième stimulation augmente progressivement.\nLa restauration des concentrations ioniques par la pompe sodium-potassium explique le retour progressif de l’excitabilité.",
      "keyRule": "Fibre égale tout ou rien ; nerf égale sommation par recrutement ; après une réponse, période réfractaire absolue puis relative.",
      "formulas": [],
      "workedExample": {
        "title": "Vrai ou faux sur le nerf et la fibre (exercice 1 de la leçon)",
        "statement": "Juge les affirmations de l’exercice 1 : toutes les fibres sont myélinisées ; la loi du tout ou rien caractérise le fonctionnement d’un nerf ; dans l’organisme, l’influx est transmis dans un seul sens au niveau d’un neurone.",
        "methodSteps": [
          "Toutes les fibres sont myélinisées : faux, il existe aussi des fibres amyélinisées.",
          "La loi du tout ou rien caractérise un nerf : faux, elle caractérise la fibre nerveuse ; le nerf obéit à la sommation.",
          "Dans l’organisme, l’influx est transmis dans un seul sens au niveau d’un neurone : vrai."
        ],
        "conclusion": "Ce sont les corrections attendues d’après les conclusions des parties B, C et D de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La loi du tout ou rien",
          "stepTheme": "La loi du tout ou rien",
          "stepBadge": "La loi du tout ou rien",
          "paragraphText": "• Loi du tout ou rien : lorsque le seuil d’excitabilité est atteint, la fibre nerveuse donne toute sa réponse, d’amplitude d’emblée maximale.\nEn dessous du seuil, elle ne donne aucune réponse.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q1",
            "type": "mcq",
            "prompt": "La loi du tout ou rien s’applique à :",
            "options": [
              "Au nerf entier",
              "À la fibre nerveuse isolée",
              "À la synapse",
              "Au muscle entier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la partie B : la fibre nerveuse obéit à la loi du tout ou rien."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La sommation dans le nerf",
          "stepTheme": "La sommation dans le nerf",
          "stepBadge": "La sommation dans le nerf",
          "paragraphText": "Dans le nerf, de l’intensité seuil à l’intensité maximale, l’amplitude de la réponse augmente progressivement.\nCela montre qu’un nombre croissant de fibres nerveuses, de seuils différents, sont excitées : leurs réponses s’additionnent, c’est la sommation.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q2",
            "type": "mcq",
            "prompt": "L’augmentation progressive de la réponse du nerf avec l’intensité s’explique par :",
            "options": [
              "Une seule fibre qui répond de plus en plus fort",
              "Le recrutement progressif de fibres de seuils différents, dont les réponses s’additionnent",
              "La fatigue du nerf",
              "L’ouverture des synapses"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie B : recrutement progressif des fibres, phénomène de sommation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La période réfractaire absolue",
          "stepTheme": "La période réfractaire absolue",
          "stepBadge": "La période réfractaire absolue",
          "paragraphText": "• Période réfractaire absolue : période pendant laquelle, après une première réponse, le nerf ne répond pas à une deuxième stimulation efficace, même rapprochée.\nLa pompe sodium-potassium n’a pas encore restauré les concentrations ioniques et les canaux sodium sont fermés.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q3",
            "type": "mcq",
            "prompt": "Pendant la période réfractaire absolue, le nerf :",
            "options": [
              "Répond plus fort à la deuxième stimulation",
              "Ne répond pas à la deuxième stimulation efficace",
              "Répond seulement aux stimulations faibles",
              "Produit deux potentiels d’action à la fois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition de la période réfractaire absolue dans la partie C."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La période réfractaire relative",
          "stepTheme": "La période réfractaire relative",
          "stepBadge": "La période réfractaire relative",
          "paragraphText": "Pendant la période réfractaire relative, la réponse du nerf à la deuxième stimulation devient de plus en plus grande.\nLa pompe sodium-potassium rétablit progressivement les concentrations ioniques initiales et les canaux sodium s’ouvrent.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q4",
            "type": "mcq",
            "prompt": "Pendant la période réfractaire relative, la deuxième réponse :",
            "options": [
              "Est totalement absente",
              "Augmente progressivement avec le délai",
              "Est d’emblée maximale dès le début",
              "Ne dépend pas de la pompe sodium-potassium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie C : la réponse croît au fur et à mesure de la restauration ionique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Attribuer le tout ou rien au nerf",
          "stepTheme": "Attribuer le tout ou rien au nerf",
          "stepBadge": "Attribuer le tout ou rien au nerf",
          "paragraphText": "Piège de l’exercice 1 : dire que la loi du tout ou rien caractérise le fonctionnement d’un nerf.\nC’est faux : elle caractérise la fibre, tandis que le nerf, formé de nombreuses fibres, obéit à la loi de sommation.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q5",
            "type": "mcq",
            "prompt": "L’affirmation « la loi du tout ou rien caractérise le fonctionnement d’un nerf » est :",
            "options": [
              "Vraie",
              "Fausse : elle caractérise la fibre nerveuse, le nerf obéit à la sommation",
              "Vraie seulement pour les fibres myélinisées",
              "Sans rapport avec la leçon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les conclusions de la partie B opposent sommation pour le nerf et tout ou rien pour la fibre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Amplitudes relevées dans l’expérience",
          "stepTheme": "Amplitudes relevées dans l’expérience",
          "stepBadge": "Amplitudes relevées dans l’expérience",
          "paragraphText": "Dans l’expérience à intensités croissantes, la réponse de la fibre est d’emblée maximale à 20 millivolts dès le seuil.\nLa réponse du nerf, elle, passe de 20 millivolts à 30 millivolts puis reste constante et maximale à 30 millivolts quand toutes les fibres sont excitées.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q6",
            "type": "mcq",
            "prompt": "Quand toutes les fibres du nerf sont excitées, l’amplitude de sa réponse vaut, dans l’expérience :",
            "options": [
              "20 millivolts et continue d’augmenter",
              "30 millivolts, constante et maximale",
              "0 millivolt",
              "70 millivolts"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la partie B : au-delà de la quatrième intensité, la réponse du nerf est constante et maximale à 30 millivolts."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q1",
          "type": "mcq",
          "prompt": "La loi du tout ou rien s’applique à :",
          "options": [
            "Au nerf entier",
            "À la fibre nerveuse isolée",
            "À la synapse",
            "Au muscle entier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la partie B : la fibre nerveuse obéit à la loi du tout ou rien."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q2",
          "type": "mcq",
          "prompt": "L’augmentation progressive de la réponse du nerf avec l’intensité s’explique par :",
          "options": [
            "Une seule fibre qui répond de plus en plus fort",
            "Le recrutement progressif de fibres de seuils différents, dont les réponses s’additionnent",
            "La fatigue du nerf",
            "L’ouverture des synapses"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie B : recrutement progressif des fibres, phénomène de sommation."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q3",
          "type": "mcq",
          "prompt": "Pendant la période réfractaire absolue, le nerf :",
          "options": [
            "Répond plus fort à la deuxième stimulation",
            "Ne répond pas à la deuxième stimulation efficace",
            "Répond seulement aux stimulations faibles",
            "Produit deux potentiels d’action à la fois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition de la période réfractaire absolue dans la partie C."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q4",
          "type": "mcq",
          "prompt": "Pendant la période réfractaire relative, la deuxième réponse :",
          "options": [
            "Est totalement absente",
            "Augmente progressivement avec le délai",
            "Est d’emblée maximale dès le début",
            "Ne dépend pas de la pompe sodium-potassium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie C : la réponse croît au fur et à mesure de la restauration ionique."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q5",
          "type": "mcq",
          "prompt": "L’affirmation « la loi du tout ou rien caractérise le fonctionnement d’un nerf » est :",
          "options": [
            "Vraie",
            "Fausse : elle caractérise la fibre nerveuse, le nerf obéit à la sommation",
            "Vraie seulement pour les fibres myélinisées",
            "Sans rapport avec la leçon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les conclusions de la partie B opposent sommation pour le nerf et tout ou rien pour la fibre."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p05_q6",
          "type": "mcq",
          "prompt": "Quand toutes les fibres du nerf sont excitées, l’amplitude de sa réponse vaut, dans l’expérience :",
          "options": [
            "20 millivolts et continue d’augmenter",
            "30 millivolts, constante et maximale",
            "0 millivolt",
            "70 millivolts"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la partie B : au-delà de la quatrième intensité, la réponse du nerf est constante et maximale à 30 millivolts."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06",
      "order": 6,
      "title": "Sens et vitesse de conduction de l’influx nerveux",
      "summary": "Comparer la conduction dans les fibres amyéliniques et myélinisées et les facteurs qui influencent la vitesse.",
      "conceptExplanation": "Sur une fibre nerveuse isolée, on enregistre un potentiel d’action de part et d’autre du lieu d’excitation : l’influx se déplace dans les deux sens.\nDans un organisme vivant, l’influx se propage dans un seul sens : dendrites, corps cellulaire, axone, arborisation terminale.\nLes facteurs influençant la vitesse sont la nature de la fibre, son diamètre et la température : la vitesse est plus élevée dans les fibres myélinisées, elle augmente avec le diamètre et avec la température.\nDans les fibres amyéliniques, la dépolarisation se propage de proche en proche par courants locaux : la conduction est lente et continue. Dans les fibres myélinisées, elle saute d’un nœud de Ranvier à un autre : c’est la conduction saltatoire, plus rapide.\nLa vitesse se calcule par le rapport entre la différence des distances et la différence des temps des deux enregistrements.",
      "keyRule": "Conduction continue et lente sans myéline, conduction saltatoire et rapide avec myéline ; vitesse égale différence de distance divisée par différence de temps.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier les fibres du tableau de la situation d’évaluation",
        "statement": "Le tableau donne : fibre A, diamètre 0,5 à 1 micromètre, vitesse 1 à 3 mètres par seconde ; fibre B, diamètre 4 à 8 micromètres, vitesse 24 à 48 mètres par seconde. Analyse la relation entre diamètre et vitesse.",
        "methodSteps": [
          "La fibre B a un diamètre nettement plus grand que la fibre A.",
          "Sa vitesse de propagation est aussi nettement plus élevée : 24 à 48 mètres par seconde contre 1 à 3 mètres par seconde.",
          "Pour des fibres de même nature, la vitesse de l’influx augmente donc avec le diamètre."
        ],
        "conclusion": "C’est l’une des relations établies dans la partie E de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sens de conduction dans l’organisme",
          "stepTheme": "Le sens de conduction dans l’organisme",
          "stepBadge": "Le sens de conduction dans l’organisme",
          "paragraphText": "Dans l’organisme vivant, l’influx nerveux se propage dans un seul sens sur une fibre nerveuse.\nCe sens est : dendrites, corps cellulaire, axone, arborisation terminale.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q1",
            "type": "mcq",
            "prompt": "Dans l’organisme, l’influx nerveux se propage dans le sens :",
            "options": [
              "Axone, corps cellulaire, dendrites",
              "Dendrites, corps cellulaire, axone, arborisation terminale",
              "Arborisation terminale vers les dendrites",
              "Dans les deux sens indifféremment"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la partie D pour la fibre dans l’organisme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La conduction dans les deux sens sur fibre isolée",
          "stepTheme": "La conduction dans les deux sens sur fibre isolée",
          "stepBadge": "La conduction dans les deux sens sur fibre isolée",
          "paragraphText": "Sur une fibre nerveuse isolée, placée hors de l’organisme, on enregistre un potentiel d’action de part et d’autre du lieu d’excitation.\nL’influx s’y déplace donc dans les deux sens.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q2",
            "type": "mcq",
            "prompt": "Sur une fibre nerveuse isolée excitée en un point, on enregistre un potentiel d’action :",
            "options": [
              "D’un seul côté seulement",
              "De part et d’autre du lieu d’excitation",
              "Uniquement au niveau des dendrites",
              "Aucun enregistrement n’est possible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat et interprétation de la partie D."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La conduction saltatoire",
          "stepTheme": "La conduction saltatoire",
          "stepBadge": "La conduction saltatoire",
          "paragraphText": "• Conduction saltatoire : propagation de la dépolarisation par sauts d’un nœud de Ranvier à un autre, dans les fibres myélinisées.\nLa gaine de myéline est un isolant interrompu au niveau des nœuds de Ranvier, où se situent les charges électriques.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q3",
            "type": "mcq",
            "prompt": "La conduction saltatoire est le mode de conduction propre aux fibres :",
            "options": [
              "Amyéliniques, de proche en proche",
              "Myélinisées, par sauts d’un nœud de Ranvier à un autre",
              "Musculaires",
              "Sans membrane"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Théorie de la conduction saltatoire exposée dans la partie E."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les facteurs de la vitesse",
          "stepTheme": "Les facteurs de la vitesse",
          "stepBadge": "Les facteurs de la vitesse",
          "paragraphText": "Les facteurs influençant la vitesse de propagation sont la nature de la fibre, son diamètre et la température.\nLa vitesse augmente avec le diamètre et avec la température, à nature et conditions égales.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q4",
            "type": "mcq",
            "prompt": "Parmi les facteurs suivants, lequel influence la vitesse de conduction d’après la leçon ?",
            "options": [
              "La couleur de la fibre",
              "Le diamètre de la fibre",
              "Le nombre de synapses seulement",
              "La taille de l’oscilloscope"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la partie E : nature, diamètre et température sont les trois facteurs cités."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Croire la conduction plus rapide sans myéline",
          "stepTheme": "Croire la conduction plus rapide sans myéline",
          "stepBadge": "Croire la conduction plus rapide sans myéline",
          "paragraphText": "Piège de l’exercice 1 : affirmer que la vitesse de conduction est plus rapide au niveau des fibres non myélinisées.\nC’est l’inverse : la conduction continue des fibres amyéliniques est lente, la conduction saltatoire des fibres myélinisées est plus rapide.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q5",
            "type": "mcq",
            "prompt": "La vitesse de conduction de l’influx est plus élevée dans les fibres :",
            "options": [
              "Amyéliniques",
              "Myélinisées",
              "Les deux à égalité dans tous les cas",
              "Aucune, la vitesse est toujours nulle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la partie E : la vitesse est plus élevée dans les fibres myélinisées que dans les fibres amyéliniques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calculer une vitesse de conduction",
          "stepTheme": "Calculer une vitesse de conduction",
          "stepBadge": "Calculer une vitesse de conduction",
          "paragraphText": "Pour déterminer la vitesse, on mesure deux distances entre l’électrode excitatrice et deux électrodes réceptrices, et les temps correspondants.\nLa vitesse est le rapport de la différence des distances à la différence des temps des deux potentiels d’action superposés.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q6",
            "type": "mcq",
            "prompt": "La vitesse de conduction se calcule comme :",
            "options": [
              "La somme des distances divisée par la somme des temps",
              "La différence des distances divisée par la différence des temps",
              "Le produit des deux temps",
              "La distance totale multipliée par le temps total"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Formule donnée dans la partie E, avec la différence des distances au numérateur et la différence des temps au dénominateur."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q1",
          "type": "mcq",
          "prompt": "Dans l’organisme, l’influx nerveux se propage dans le sens :",
          "options": [
            "Axone, corps cellulaire, dendrites",
            "Dendrites, corps cellulaire, axone, arborisation terminale",
            "Arborisation terminale vers les dendrites",
            "Dans les deux sens indifféremment"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la partie D pour la fibre dans l’organisme."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q2",
          "type": "mcq",
          "prompt": "Sur une fibre nerveuse isolée excitée en un point, on enregistre un potentiel d’action :",
          "options": [
            "D’un seul côté seulement",
            "De part et d’autre du lieu d’excitation",
            "Uniquement au niveau des dendrites",
            "Aucun enregistrement n’est possible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat et interprétation de la partie D."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q3",
          "type": "mcq",
          "prompt": "La conduction saltatoire est le mode de conduction propre aux fibres :",
          "options": [
            "Amyéliniques, de proche en proche",
            "Myélinisées, par sauts d’un nœud de Ranvier à un autre",
            "Musculaires",
            "Sans membrane"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Théorie de la conduction saltatoire exposée dans la partie E."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q4",
          "type": "mcq",
          "prompt": "Parmi les facteurs suivants, lequel influence la vitesse de conduction d’après la leçon ?",
          "options": [
            "La couleur de la fibre",
            "Le diamètre de la fibre",
            "Le nombre de synapses seulement",
            "La taille de l’oscilloscope"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la partie E : nature, diamètre et température sont les trois facteurs cités."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q5",
          "type": "mcq",
          "prompt": "La vitesse de conduction de l’influx est plus élevée dans les fibres :",
          "options": [
            "Amyéliniques",
            "Myélinisées",
            "Les deux à égalité dans tous les cas",
            "Aucune, la vitesse est toujours nulle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la partie E : la vitesse est plus élevée dans les fibres myélinisées que dans les fibres amyéliniques."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p06_q6",
          "type": "mcq",
          "prompt": "La vitesse de conduction se calcule comme :",
          "options": [
            "La somme des distances divisée par la somme des temps",
            "La différence des distances divisée par la différence des temps",
            "Le produit des deux temps",
            "La distance totale multipliée par le temps total"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Formule donnée dans la partie E, avec la différence des distances au numérateur et la différence des temps au dénominateur."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07",
      "order": 7,
      "title": "La transmission synaptique et les médiateurs chimiques",
      "summary": "Décrire les types de synapses et les étapes de la transmission, des ions calcium à l’hydrolyse de l’acétylcholine.",
      "conceptExplanation": "Une synapse est une zone de contact composée d’un élément présynaptique et d’un élément postsynaptique séparés par une fente synaptique.\nEntre neurones, on distingue les jonctions axo-axonique, axo-dendritique et axo-somatique ; entre un neurone et une cellule musculaire, la jonction neuro-musculaire ou plaque motrice.\nÀ l’arrivée de l’influx au bouton synaptique, les canaux calcium s’ouvrent, les ions calcium entrent et provoquent la libération par exocytose des neurotransmetteurs, comme l’acétylcholine, stockés dans les vésicules synaptiques.\nL’acétylcholine se fixe sur ses récepteurs postsynaptiques, ouvre les canaux sodium chimio-dépendants et provoque la dépolarisation postsynaptique ; elle est ensuite hydrolysée par l’acétylcholinestérase en acétate et en choline, la choline étant réabsorbée.\nSi les neurotransmetteurs provoquent une dépolarisation, la synapse est excitatrice et le potentiel obtenu est un potentiel postsynaptique excitateur ; s’ils provoquent une hyperpolarisation, la synapse est inhibitrice et le potentiel est un potentiel postsynaptique inhibiteur.",
      "keyRule": "À la synapse, le message électrique devient chimique : calcium, exocytose, fixation, dépolarisation ou hyperpolarisation, puis hydrolyse du médiateur.",
      "formulas": [],
      "workedExample": {
        "title": "Remettre en ordre le fonctionnement d’une synapse excitatrice (exercice 2)",
        "statement": "Remets dans l’ordre chronologique : exocytose du neuromédiateur, entrée des ions sodium, entrée des ions calcium, fixation du neuromédiateur sur les récepteurs postsynaptiques, naissance du potentiel d’action postsynaptique, dépolarisation postsynaptique, arrivée du potentiel d’action présynaptique.",
        "methodSteps": [
          "Arrivée du potentiel d’action à l’extrémité du neurone présynaptique.",
          "Entrée des ions calcium, puis exocytose du neuromédiateur dans la fente synaptique.",
          "Fixation du neuromédiateur sur les récepteurs postsynaptiques, entrée des ions sodium et dépolarisation de la membrane postsynaptique.",
          "Naissance du potentiel d’action sur la membrane postsynaptique."
        ],
        "conclusion": "L’ordre chronologique est : arrivée du potentiel, calcium, exocytose, fixation, sodium, dépolarisation, potentiel d’action."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les types de jonctions entre neurones",
          "stepTheme": "Les types de jonctions entre neurones",
          "stepBadge": "Les types de jonctions entre neurones",
          "paragraphText": "La figure 1 du document III présente trois types de contact entre neurones.\n• Jonction axo-axonique, entre deux axones.\n• Jonction axo-dendritique, entre un axone et une dendrite.\n• Jonction axo-somatique, entre un axone et le corps cellulaire ou soma.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q1",
            "type": "mcq",
            "prompt": "Une jonction entre l’axone d’un neurone et la dendrite d’un autre neurone s’appelle :",
            "options": [
              "Jonction axo-axonique",
              "Jonction axo-dendritique",
              "Jonction axo-somatique",
              "Plaque motrice"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse du document III, figure 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La plaque motrice",
          "stepTheme": "La plaque motrice",
          "stepBadge": "La plaque motrice",
          "paragraphText": "• Plaque motrice (ou jonction neuro-musculaire) : zone de contact entre un neurone et une cellule musculaire.\nElle présente, comme toute synapse, un élément présynaptique, une fente synaptique et un élément postsynaptique.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q2",
            "type": "mcq",
            "prompt": "La zone de contact entre un neurone et une cellule musculaire s’appelle :",
            "options": [
              "Jonction axo-somatique",
              "Nœud de Ranvier",
              "Plaque motrice ou jonction neuro-musculaire",
              "Péricaryon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Figure 2 du document III : ultrastructure d’une plaque motrice."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Les premières étapes de la transmission",
          "stepTheme": "Les premières étapes de la transmission",
          "stepBadge": "Les premières étapes de la transmission",
          "paragraphText": "La transmission commence par l’arrivée de l’influx nerveux au bouton synaptique.\nElle se poursuit par l’entrée des ions calcium dans le bouton, puis la libération des neurotransmetteurs dans la fente synaptique par exocytose.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q3",
            "type": "mcq",
            "prompt": "Juste après l’arrivée de l’influx au bouton synaptique, l’étape suivante est :",
            "options": [
              "L’hydrolyse du neuromédiateur",
              "L’entrée des ions calcium dans le bouton synaptique",
              "La recapture du neurotransmetteur",
              "La contraction définitive du muscle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Étapes 1 à 3 de l’analyse du document IV."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l’acétylcholine à la plaque motrice",
          "stepTheme": "Le rôle de l’acétylcholine à la plaque motrice",
          "stepBadge": "Le rôle de l’acétylcholine à la plaque motrice",
          "paragraphText": "L’acétylcholine libérée se fixe sur son récepteur spécifique de la membrane postsynaptique.\nCela provoque l’ouverture des canaux sodium chimio-dépendants, l’entrée massive des ions sodium et la dépolarisation, d’où la naissance d’un potentiel d’action musculaire.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q4",
            "type": "mcq",
            "prompt": "À la plaque motrice, la fixation de l’acétylcholine sur ses récepteurs provoque :",
            "options": [
              "Une sortie massive de potassium seulement",
              "L’ouverture des canaux sodium et la dépolarisation postsynaptique",
              "Une hyperpolarisation systématique",
              "La destruction immédiate de la fibre musculaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation du document IV pour la synapse neuro-musculaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L’arrêt de la contraction par hydrolyse",
          "stepTheme": "L’arrêt de la contraction par hydrolyse",
          "stepBadge": "L’arrêt de la contraction par hydrolyse",
          "paragraphText": "Piège : la contraction ne s’arrête pas par disparition spontanée de l’acétylcholine dans le sang.\nElle s’arrête lorsque l’acétylcholine est hydrolysée en acétate et en choline par l’acétylcholinestérase ; la choline est ensuite réabsorbée par le bouton synaptique.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q5",
            "type": "mcq",
            "prompt": "La contraction musculaire s’arrête lorsque l’acétylcholine est :",
            "options": [
              "Transformée en adrénaline",
              "Hydrolysée par l’acétylcholinestérase en acétate et en choline",
              "Stockée définitivement dans le muscle",
              "Expulsée par les nœuds de Ranvier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation du document IV : rôle de l’acétylcholinestérase et réabsorption de la choline."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Synapse excitatrice et synapse inhibitrice",
          "stepTheme": "Synapse excitatrice et synapse inhibitrice",
          "stepBadge": "Synapse excitatrice et synapse inhibitrice",
          "paragraphText": "Si les neurotransmetteurs ouvrent les canaux sodium et dépolarisent la membrane postsynaptique, la synapse est dite excitatrice et le potentiel obtenu est un potentiel postsynaptique excitateur.\nSi les neurotransmetteurs entraînent une sortie de potassium ou une entrée de chlorure avec hyperpolarisation, la synapse est dite inhibitrice et le potentiel est un potentiel postsynaptique inhibiteur, sans potentiel d’action.",
          "exercise": {
            "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q6",
            "type": "mcq",
            "prompt": "Une synapse dont le médiateur provoque une hyperpolarisation postsynaptique est une synapse :",
            "options": [
              "Excitatrice, avec potentiel postsynaptique excitateur",
              "Inhibitrice, avec potentiel postsynaptique inhibiteur",
              "Neuro-musculaire dans tous les cas",
              "Axo-axonique obligatoirement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Distinction faite à la fin de l’interprétation du document IV."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q1",
          "type": "mcq",
          "prompt": "Une jonction entre l’axone d’un neurone et la dendrite d’un autre neurone s’appelle :",
          "options": [
            "Jonction axo-axonique",
            "Jonction axo-dendritique",
            "Jonction axo-somatique",
            "Plaque motrice"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse du document III, figure 1."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q2",
          "type": "mcq",
          "prompt": "La zone de contact entre un neurone et une cellule musculaire s’appelle :",
          "options": [
            "Jonction axo-somatique",
            "Nœud de Ranvier",
            "Plaque motrice ou jonction neuro-musculaire",
            "Péricaryon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Figure 2 du document III : ultrastructure d’une plaque motrice."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q3",
          "type": "mcq",
          "prompt": "Juste après l’arrivée de l’influx au bouton synaptique, l’étape suivante est :",
          "options": [
            "L’hydrolyse du neuromédiateur",
            "L’entrée des ions calcium dans le bouton synaptique",
            "La recapture du neurotransmetteur",
            "La contraction définitive du muscle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Étapes 1 à 3 de l’analyse du document IV."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q4",
          "type": "mcq",
          "prompt": "À la plaque motrice, la fixation de l’acétylcholine sur ses récepteurs provoque :",
          "options": [
            "Une sortie massive de potassium seulement",
            "L’ouverture des canaux sodium et la dépolarisation postsynaptique",
            "Une hyperpolarisation systématique",
            "La destruction immédiate de la fibre musculaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation du document IV pour la synapse neuro-musculaire."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q5",
          "type": "mcq",
          "prompt": "La contraction musculaire s’arrête lorsque l’acétylcholine est :",
          "options": [
            "Transformée en adrénaline",
            "Hydrolysée par l’acétylcholinestérase en acétate et en choline",
            "Stockée définitivement dans le muscle",
            "Expulsée par les nœuds de Ranvier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation du document IV : rôle de l’acétylcholinestérase et réabsorption de la choline."
        },
        {
          "id": "terminale_d_svt_l02_fonctionnement_tissu_nerveux_p07_q6",
          "type": "mcq",
          "prompt": "Une synapse dont le médiateur provoque une hyperpolarisation postsynaptique est une synapse :",
          "options": [
            "Excitatrice, avec potentiel postsynaptique excitateur",
            "Inhibitrice, avec potentiel postsynaptique inhibiteur",
            "Neuro-musculaire dans tous les cas",
            "Axo-axonique obligatoirement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Distinction faite à la fin de l’interprétation du document IV."
        }
      ]
    }
  ]
};
