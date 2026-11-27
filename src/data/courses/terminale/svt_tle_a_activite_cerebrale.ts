import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 2 : L'activité cérébrale chez l'Homme » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1763
export const SVT_TLE_A_L02_ACTIVITE_CEREBRALE: CurriculumChapter = {
  "id": "terminale_a1_svt_l02_activite_cerebrale",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 2,
  "title": "Leçon 2 : L'activité cérébrale chez l'Homme",
  "summary": "Le cerveau influence le comportement de l'Homme grâce à ses aires cérébrales réparties en quatre lobes, et selon des mécanismes précis pour la motricité volontaire et pour la mémoire.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1763",
  "points": [
    {
      "id": "terminale_a1_svt_l02_activite_cerebrale_p01",
      "order": 1,
      "title": "Les lobes et les aires motrices",
      "summary": "Localiser les quatre lobes et les aires motrices en avant du sillon de Rolando.",
      "conceptExplanation": "Les aires cérébrales sont réparties dans quatre lobes : le lobe frontal, le lobe pariétal, le lobe occipital et le lobe temporal.\nLes principales aires motrices sont situées en avant du sillon de Rolando. L'aire motrice (ou aire de projection motrice), localisée dans le lobe frontal, intervient dans la commande des mouvements intentionnels. L'aire psychomotrice (ou aire prémotrice), également dans le lobe frontal, comporte les centres des mouvements de l'écriture et du langage parlé et assure la coordination des mouvements.\nQuelques manifestations de l'activité cérébrale sont : le langage, la mémoire, l'affectivité, le niveau de vigilance, la sensibilité, le désir, la conscience et la motricité volontaire.",
      "keyRule": "Aires motrices en avant du sillon de Rolando, dans le lobe frontal : aire motrice pour les mouvements intentionnels, aire psychomotrice pour la coordination, l'écriture et le langage parlé.",
      "formulas": [],
      "workedExample": {
        "title": "Associer lobes et aires (activité d'application 1)",
        "statement": "Associe chaque lobe à ses aires : frontal, occipital, pariétal, temporal ; aires proposées : visuelle, sensibilité générale, motrice, psychomotrice, langage parlé.",
        "methodSteps": [
          "Le lobe frontal porte l'aire motrice et l'aire psychomotrice.",
          "Le lobe occipital porte l'aire visuelle.",
          "Le lobe pariétal porte l'aire de la sensibilité générale.",
          "Le lobe temporal est associé dans le corrigé à l'aire du langage parlé proposée dans l'exercice."
        ],
        "conclusion": "Corrigé de la leçon : frontal-motrice et psychomotrice ; occipital-visuelle ; pariétal-sensibilité générale ; temporal-langage parlé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les quatre lobes du cerveau",
          "stepTheme": "Les quatre lobes du cerveau",
          "stepBadge": "Les quatre lobes du cerveau",
          "paragraphText": "• Lobes cérébraux : les aires cérébrales sont réparties dans quatre lobes, frontal, pariétal, occipital et temporal.\nChaque lobe regroupe des aires aux fonctions particulières.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q1",
            "type": "mcq",
            "prompt": "Combien de lobes répartissent les aires cérébrales ?",
            "options": [
              "Deux lobes",
              "Trois lobes",
              "Quatre lobes",
              "Six lobes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon liste quatre lobes : frontal, pariétal, occipital et temporal."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'aire motrice",
          "stepTheme": "L'aire motrice",
          "stepBadge": "L'aire motrice",
          "paragraphText": "• Aire motrice (aire de projection motrice) : aire localisée dans le lobe frontal, en avant du sillon de Rolando.\nElle intervient dans la commande des mouvements intentionnels.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q2",
            "type": "mcq",
            "prompt": "L'aire motrice intervient dans :",
            "options": [
              "La compréhension des mots écrits",
              "La commande des mouvements intentionnels",
              "L'audition",
              "La mémorisation des souvenirs anciens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le rôle donné dans la leçon pour l'aire motrice du lobe frontal."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'aire psychomotrice",
          "stepTheme": "L'aire psychomotrice",
          "stepBadge": "L'aire psychomotrice",
          "paragraphText": "L'aire psychomotrice, ou aire prémotrice, est localisée dans le lobe frontal.\nElle comporte les centres des mouvements de l'écriture et du langage parlé et assure la coordination des mouvements.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q3",
            "type": "mcq",
            "prompt": "L'aire psychomotrice assure notamment :",
            "options": [
              "La vision des objets",
              "La coordination des mouvements",
              "La sensibilité générale",
              "L'olfaction"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon lui attribue la coordination des mouvements, avec les centres de l'écriture et du langage parlé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le repère du sillon de Rolando",
          "stepTheme": "Le repère du sillon de Rolando",
          "stepBadge": "Le repère du sillon de Rolando",
          "paragraphText": "Les principales aires motrices sont situées en avant du sillon de Rolando.\nLes aires de la sensibilité sont, elles, situées en arrière de ce sillon : c'est le grand partage du cortex.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q4",
            "type": "mcq",
            "prompt": "Les aires motrices sont situées par rapport au sillon de Rolando :",
            "options": [
              "En arrière",
              "En avant",
              "Uniquement en dessous",
              "Dans le cervelet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon place les aires motrices en avant du sillon de Rolando et les aires de la sensibilité en arrière."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Chaque aire a sa fonction",
          "stepTheme": "Chaque aire a sa fonction",
          "stepBadge": "Chaque aire a sa fonction",
          "paragraphText": "Piège : l'activité d'application corrige deux affirmations fausses.\nLe langage chez l'Homme n'est pas contrôlé par les aires auditives, et chaque aire cérébrale ne commande pas n'importe quelle fonction : les aires sont spécialisées.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q5",
            "type": "mcq",
            "prompt": "Selon le corrigé de l'activité d'application, « le langage est contrôlé par les aires auditives » est :",
            "options": [
              "Vrai",
              "Vrai seulement chez l'enfant",
              "Sans réponse possible",
              "Faux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Corrigé de la leçon : affirmation 1 fausse, affirmation 2 fausse, affirmation 3 (la mémoire est une manifestation de l'activité cérébrale) vraie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La mémoire, manifestation cérébrale",
          "stepTheme": "La mémoire, manifestation cérébrale",
          "stepBadge": "La mémoire, manifestation cérébrale",
          "paragraphText": "La mémoire fait partie des manifestations de l'activité cérébrale citées par la leçon.\nElle y figure aux côtés du langage, de l'affectivité, du niveau de vigilance, de la sensibilité, du désir, de la conscience et de la motricité volontaire.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces propositions est une manifestation de l'activité cérébrale selon la leçon ?",
            "options": [
              "La digestion",
              "La mémoire",
              "La croissance des os",
              "La filtration du sang"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La mémoire est citée dans la liste des manifestations de l'activité cérébrale."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q1",
          "type": "mcq",
          "prompt": "Combien de lobes répartissent les aires cérébrales ?",
          "options": [
            "Deux lobes",
            "Trois lobes",
            "Quatre lobes",
            "Six lobes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon liste quatre lobes : frontal, pariétal, occipital et temporal."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q2",
          "type": "mcq",
          "prompt": "L'aire motrice intervient dans :",
          "options": [
            "La compréhension des mots écrits",
            "La commande des mouvements intentionnels",
            "L'audition",
            "La mémorisation des souvenirs anciens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le rôle donné dans la leçon pour l'aire motrice du lobe frontal."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q3",
          "type": "mcq",
          "prompt": "L'aire psychomotrice assure notamment :",
          "options": [
            "La vision des objets",
            "La coordination des mouvements",
            "La sensibilité générale",
            "L'olfaction"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon lui attribue la coordination des mouvements, avec les centres de l'écriture et du langage parlé."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q4",
          "type": "mcq",
          "prompt": "Les aires motrices sont situées par rapport au sillon de Rolando :",
          "options": [
            "En arrière",
            "En avant",
            "Uniquement en dessous",
            "Dans le cervelet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon place les aires motrices en avant du sillon de Rolando et les aires de la sensibilité en arrière."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q5",
          "type": "mcq",
          "prompt": "Selon le corrigé de l'activité d'application, « le langage est contrôlé par les aires auditives » est :",
          "options": [
            "Vrai",
            "Vrai seulement chez l'enfant",
            "Sans réponse possible",
            "Faux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Corrigé de la leçon : affirmation 1 fausse, affirmation 2 fausse, affirmation 3 (la mémoire est une manifestation de l'activité cérébrale) vraie."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p01_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces propositions est une manifestation de l'activité cérébrale selon la leçon ?",
          "options": [
            "La digestion",
            "La mémoire",
            "La croissance des os",
            "La filtration du sang"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La mémoire est citée dans la liste des manifestations de l'activité cérébrale."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l02_activite_cerebrale_p02",
      "order": 2,
      "title": "Les aires de la sensibilité",
      "summary": "Localiser les aires sensorielles en arrière du sillon de Rolando et leurs rôles.",
      "conceptExplanation": "Les aires de la sensibilité sont situées en arrière du sillon de Rolando : l'aire de la sensibilité générale, l'aire psycho-sensorielle et l'aire de compréhension des mots écrits et parlés.\nLes aires visuelle et psycho-visuelle, localisées dans le lobe occipital, sont en relation avec l'œil : elles permettent de voir, de reconnaître les objets et de lire et comprendre des textes écrits dans sa langue.\nLes aires auditive et psycho-auditive, localisées dans le lobe temporal, sont en relation avec l'oreille interne : elles permettent l'audition et la compréhension des mots entendus.\nLa leçon cite aussi l'aire olfactive et l'aire gustative.",
      "keyRule": "En arrière du sillon de Rolando : occipital pour voir et reconnaître, temporal pour entendre et comprendre, plus sensibilité générale et compréhension des mots.",
      "formulas": [],
      "workedExample": {
        "title": "Le camarade victime d'une commotion cérébrale (situation d'évaluation)",
        "statement": "Après un choc à la tête, un élève voit des éclairs lumineux, ne reconnaît plus les membres de sa famille et ne peut plus articuler un mot entendu. Quelles aires sont impliquées ?",
        "methodSteps": [
          "Ne plus reconnaître les visages et voir des éclairs renvoient à l'aire psycho-visuelle, qui permet de reconnaître les objets et les personnes.",
          "Entendre un mot sans pouvoir l'articuler, sans paralysie de la langue, renvoie à l'aire d'articulation du langage verbal.",
          "Le corrigé nomme donc deux aires impliquées : l'aire d'articulation du langage verbal et l'aire psycho-visuelle."
        ],
        "conclusion": "Corrigé de la leçon : lésions au niveau de l'aire psycho-visuelle et de l'aire d'articulation du langage verbal."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les aires visuelle et psycho-visuelle",
          "stepTheme": "Les aires visuelle et psycho-visuelle",
          "stepBadge": "Les aires visuelle et psycho-visuelle",
          "paragraphText": "• Aires visuelle et psycho-visuelle : aires du lobe occipital, en relation avec l'œil.\nElles permettent de voir, de reconnaître les objets et de lire et comprendre des textes écrits dans sa langue.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q1",
            "type": "mcq",
            "prompt": "Les aires visuelle et psycho-visuelle sont localisées dans :",
            "options": [
              "Le lobe frontal",
              "Le lobe temporal",
              "Le lobe occipital",
              "Le lobe pariétal"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon les localise dans le lobe occipital."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les aires auditive et psycho-auditive",
          "stepTheme": "Les aires auditive et psycho-auditive",
          "stepBadge": "Les aires auditive et psycho-auditive",
          "paragraphText": "• Aires auditive et psycho-auditive : aires du lobe temporal, en relation avec l'oreille interne.\nElles permettent l'audition et la compréhension des mots entendus.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q2",
            "type": "mcq",
            "prompt": "L'audition et la compréhension des mots entendus dépendent des aires :",
            "options": [
              "Visuelle et psycho-visuelle",
              "Auditive et psycho-auditive, dans le lobe temporal",
              "Motrice et psychomotrice",
              "Olfactive et gustative"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les aires auditive et psycho-auditive du lobe temporal, en relation avec l'oreille interne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Voir et reconnaître sont deux rôles liés",
          "stepTheme": "Voir et reconnaître sont deux rôles liés",
          "stepBadge": "Voir et reconnaître sont deux rôles liés",
          "paragraphText": "L'aire visuelle permet de voir, tandis que l'aire psycho-visuelle permet de reconnaître ce qui est vu.\nC'est pourquoi une lésion psycho-visuelle peut laisser la vue tout en empêchant la reconnaissance des personnes, comme dans la situation d'évaluation.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q3",
            "type": "mcq",
            "prompt": "Reconnaître les membres de sa famille parmi des visiteurs relève surtout de :",
            "options": [
              "L'aire motrice",
              "L'aire d'articulation du langage verbal",
              "L'aire psycho-visuelle",
              "L'aire auditive"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de la situation d'évaluation attribue la non-reconnaissance des proches à des lésions de l'aire psycho-visuelle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Identifier les aires sur le document",
          "stepTheme": "Identifier les aires sur le document",
          "stepBadge": "Identifier les aires sur le document",
          "paragraphText": "Méthode du corrigé : repérer d'abord le sillon de Rolando, puis classer les aires.\nAires motrices du document : aire motrice, aire motrice des muscles de la langue, aire d'articulation du langage verbal ; aires de la sensibilité : aires visuelle, psycho-visuelle, auditive et psycho-auditive.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q4",
            "type": "mcq",
            "prompt": "Dans le document de la situation d'évaluation, l'aire motrice des muscles de la langue est classée parmi :",
            "options": [
              "Les aires de la sensibilité",
              "Les aires motrices",
              "Les aires visuelles",
              "Les lobes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé la range avec l'aire motrice et l'aire d'articulation du langage verbal, parmi les aires motrices."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Localisations fausses à repérer",
          "stepTheme": "Localisations fausses à repérer",
          "stepBadge": "Localisations fausses à repérer",
          "paragraphText": "Piège de l'activité d'application 2 : plusieurs localisations proposées sont fausses.\nL'aire auditive n'est pas dans le lobe frontal, l'aire motrice n'est pas dans le lobe temporal et la sensibilité générale n'est pas en avant du sillon de Rolando.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q5",
            "type": "mcq",
            "prompt": "Selon le corrigé de l'activité d'application 2, « l'aire psychomotrice est localisée dans le lobe frontal » est :",
            "options": [
              "Faux",
              "Vrai",
              "Vrai seulement à droite",
              "Non traité dans la leçon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé : 1 faux, 2 faux, 3 vrai, 4 vrai, 5 faux. L'aire psychomotrice est bien dans le lobe frontal."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lire et comprendre un texte",
          "stepTheme": "Lire et comprendre un texte",
          "stepBadge": "Lire et comprendre un texte",
          "paragraphText": "Lire et comprendre des textes écrits dans sa langue fait intervenir les aires du lobe occipital.\nLa leçon rattache cette capacité aux aires visuelle et psycho-visuelle, en relation avec l'œil.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q6",
            "type": "mcq",
            "prompt": "Lire et comprendre un texte écrit dépend notamment des aires :",
            "options": [
              "Olfactive et gustative",
              "Auditive et psycho-auditive",
              "Visuelle et psycho-visuelle",
              "Motrice des muscles de la langue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon attribue voir, reconnaître les objets et lire aux aires visuelle et psycho-visuelle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q1",
          "type": "mcq",
          "prompt": "Les aires visuelle et psycho-visuelle sont localisées dans :",
          "options": [
            "Le lobe frontal",
            "Le lobe temporal",
            "Le lobe occipital",
            "Le lobe pariétal"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon les localise dans le lobe occipital."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q2",
          "type": "mcq",
          "prompt": "L'audition et la compréhension des mots entendus dépendent des aires :",
          "options": [
            "Visuelle et psycho-visuelle",
            "Auditive et psycho-auditive, dans le lobe temporal",
            "Motrice et psychomotrice",
            "Olfactive et gustative"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les aires auditive et psycho-auditive du lobe temporal, en relation avec l'oreille interne."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q3",
          "type": "mcq",
          "prompt": "Reconnaître les membres de sa famille parmi des visiteurs relève surtout de :",
          "options": [
            "L'aire motrice",
            "L'aire d'articulation du langage verbal",
            "L'aire psycho-visuelle",
            "L'aire auditive"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de la situation d'évaluation attribue la non-reconnaissance des proches à des lésions de l'aire psycho-visuelle."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q4",
          "type": "mcq",
          "prompt": "Dans le document de la situation d'évaluation, l'aire motrice des muscles de la langue est classée parmi :",
          "options": [
            "Les aires de la sensibilité",
            "Les aires motrices",
            "Les aires visuelles",
            "Les lobes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé la range avec l'aire motrice et l'aire d'articulation du langage verbal, parmi les aires motrices."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q5",
          "type": "mcq",
          "prompt": "Selon le corrigé de l'activité d'application 2, « l'aire psychomotrice est localisée dans le lobe frontal » est :",
          "options": [
            "Faux",
            "Vrai",
            "Vrai seulement à droite",
            "Non traité dans la leçon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé : 1 faux, 2 faux, 3 vrai, 4 vrai, 5 faux. L'aire psychomotrice est bien dans le lobe frontal."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p02_q6",
          "type": "mcq",
          "prompt": "Lire et comprendre un texte écrit dépend notamment des aires :",
          "options": [
            "Olfactive et gustative",
            "Auditive et psycho-auditive",
            "Visuelle et psycho-visuelle",
            "Motrice des muscles de la langue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon attribue voir, reconnaître les objets et lire aux aires visuelle et psycho-visuelle."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l02_activite_cerebrale_p03",
      "order": 3,
      "title": "La motricité volontaire : la phase préparatoire",
      "summary": "Décrire la phase préparatoire de la saisie d'un objet et les structures qu'elle met en jeu.",
      "conceptExplanation": "Tout mouvement implique la contraction de muscles commandés par les motoneurones des nerfs rachidiens et des nerfs crâniens. Quand un sujet saisit un objet placé devant lui, il accomplit un mouvement qui succède à une intention, celle de saisir : c'est un mouvement volontaire.\nLe mécanisme de la motricité volontaire se déroule en plusieurs phases : la phase préparatoire, la phase de programmation et la phase d'exécution.\nAu cours de la phase préparatoire, le sujet localise l'objet à prendre dans l'espace à partir d'informations sensorielles, généralement visuelles. Cette phase met en jeu le cortex cérébral (aires corticales), certaines zones sous-corticales (hypothalamus, système limbique) et cérébelleuses.\nL'hypothalamus reçoit les informations sur l'état interne de l'organisme et peut déclencher des comportements défensifs, alimentaires ou reproducteurs. Le système limbique met en relation les informations reçues avec la mémoire (apprentissage individuel) et l'affectivité et commande les émotions. Les informations recueillies sont ensuite envoyées aux aires d'association du cortex cérébral, où l'on enregistre un potentiel de préparation (ou de disponibilité) 0,8 s avant le mouvement.\nDes lésions du cortex préfrontal entraînent une diminution de l'initiative motrice, de l'attention et de l'imagination.",
      "keyRule": "Phase préparatoire : localiser l'objet grâce aux informations sensorielles, avec cortex, hypothalamus, système limbique et cervelet, jusqu'au potentiel de préparation 0,8 s avant le mouvement.",
      "formulas": [],
      "workedExample": {
        "title": "La saisie d'un objet (texte de la leçon)",
        "statement": "Un sujet saisit un objet placé devant lui. Pourquoi ce mouvement est-il volontaire et par quoi commence-t-il ?",
        "methodSteps": [
          "Le mouvement succède à une intention, celle de saisir : la volonté du sujet intervient.",
          "Il commence par une phase préparatoire : le sujet localise l'objet dans l'espace à partir d'informations sensorielles, généralement visuelles.",
          "Les informations sont traitées par le cortex, les zones sous-corticales et cérébelleuses, puis envoyées aux aires d'association."
        ],
        "conclusion": "La saisie est un mouvement volontaire dont la première phase est la localisation sensorielle de l'objet."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un mouvement volontaire",
          "stepTheme": "Un mouvement volontaire",
          "stepBadge": "Un mouvement volontaire",
          "paragraphText": "• Mouvement volontaire : mouvement qui succède à une intention, comme saisir un objet placé devant soi.\nLe sujet prend la décision de saisir : sa volonté intervient, ce qui distingue ce mouvement d'un simple réflexe.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q1",
            "type": "mcq",
            "prompt": "Un mouvement volontaire se caractérise par le fait qu'il :",
            "options": [
              "Succède à une intention",
              "Est toujours inconscient",
              "Ne fait intervenir aucun muscle",
              "Est commandé uniquement par la moelle épinière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte définit la saisie comme un mouvement qui succède à une intention de saisir."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les muscles commandés par les motoneurones",
          "stepTheme": "Les muscles commandés par les motoneurones",
          "stepBadge": "Les muscles commandés par les motoneurones",
          "paragraphText": "Tout mouvement implique la contraction de muscles commandés par les motoneurones.\nCes motoneurones appartiennent aux nerfs rachidiens et aux nerfs crâniens.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q2",
            "type": "mcq",
            "prompt": "Les muscles d'un mouvement sont commandés par les motoneurones des :",
            "options": [
              "Nerfs rachidiens et nerfs crâniens",
              "Nerfs olfactifs uniquement",
              "Vaisseaux sanguins",
              "Noyaux gris uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première phrase du texte sur la motricité volontaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le potentiel de préparation",
          "stepTheme": "Le potentiel de préparation",
          "stepBadge": "Le potentiel de préparation",
          "paragraphText": "À la surface des aires d'association du cortex cérébral, on enregistre une activité électrique appelée potentiel de préparation, ou de disponibilité.\nElle apparaît 0,8 s avant le mouvement, pendant la phase préparatoire.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q3",
            "type": "mcq",
            "prompt": "Le potentiel de préparation est enregistré :",
            "options": [
              "0,8 s après le mouvement",
              "0,8 s avant le mouvement",
              "Uniquement pendant le sommeil",
              "Dans les muscles du bras"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise : 0,8 s avant le mouvement, à la surface des aires d'association."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Localiser l'objet à prendre",
          "stepTheme": "Localiser l'objet à prendre",
          "stepBadge": "Localiser l'objet à prendre",
          "paragraphText": "Méthode de la phase préparatoire : localiser l'objet dans l'espace à partir d'informations sensorielles.\nSi la localisation est visuelle, le premier traitement se fait au niveau du cortex visuel primaire, puis du cortex visuel secondaire, avant les aires d'association.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q4",
            "type": "mcq",
            "prompt": "Pendant la phase préparatoire, le sujet :",
            "options": [
              "Exécute déjà la prise de l'objet",
              "Programme la force du mouvement",
              "Localise l'objet à prendre dans l'espace à partir d'informations sensorielles",
              "Oublie l'objet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la description de la phase préparatoire dans l'interprétation de la leçon, reprise dans le corrigé de l'activité d'application 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les lésions du cortex préfrontal",
          "stepTheme": "Les lésions du cortex préfrontal",
          "stepBadge": "Les lésions du cortex préfrontal",
          "paragraphText": "Piège : attribuer au cortex préfrontal la seule exécution musculaire.\nSes lésions entraînent une diminution de l'initiative motrice, de l'attention et de l'imagination : il intervient donc en amont du mouvement.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q5",
            "type": "mcq",
            "prompt": "Des lésions du cortex préfrontal entraînent :",
            "options": [
              "Une paralysie complète des jambes",
              "Une diminution de l'initiative motrice, de l'attention et de l'imagination",
              "Une perte de l'audition",
              "Une amélioration de la mémoire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conséquence rapportée dans le texte de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Hypothalamus et comportements de base",
          "stepTheme": "Hypothalamus et comportements de base",
          "stepBadge": "Hypothalamus et comportements de base",
          "paragraphText": "L'hypothalamus reçoit les informations sur l'état interne de l'organisme.\nIl peut déclencher des comportements défensifs, alimentaires ou reproducteurs, en lien avec la préparation de l'action.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q6",
            "type": "mcq",
            "prompt": "L'hypothalamus peut déclencher des comportements :",
            "options": [
              "Uniquement visuels",
              "Défensifs, alimentaires ou reproducteurs",
              "Uniquement langagiers",
              "Sans rapport avec l'état interne"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon cite ces trois types de comportements pour l'hypothalamus."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q1",
          "type": "mcq",
          "prompt": "Un mouvement volontaire se caractérise par le fait qu'il :",
          "options": [
            "Succède à une intention",
            "Est toujours inconscient",
            "Ne fait intervenir aucun muscle",
            "Est commandé uniquement par la moelle épinière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte définit la saisie comme un mouvement qui succède à une intention de saisir."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q2",
          "type": "mcq",
          "prompt": "Les muscles d'un mouvement sont commandés par les motoneurones des :",
          "options": [
            "Nerfs rachidiens et nerfs crâniens",
            "Nerfs olfactifs uniquement",
            "Vaisseaux sanguins",
            "Noyaux gris uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première phrase du texte sur la motricité volontaire."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q3",
          "type": "mcq",
          "prompt": "Le potentiel de préparation est enregistré :",
          "options": [
            "0,8 s après le mouvement",
            "0,8 s avant le mouvement",
            "Uniquement pendant le sommeil",
            "Dans les muscles du bras"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise : 0,8 s avant le mouvement, à la surface des aires d'association."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q4",
          "type": "mcq",
          "prompt": "Pendant la phase préparatoire, le sujet :",
          "options": [
            "Exécute déjà la prise de l'objet",
            "Programme la force du mouvement",
            "Localise l'objet à prendre dans l'espace à partir d'informations sensorielles",
            "Oublie l'objet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la description de la phase préparatoire dans l'interprétation de la leçon, reprise dans le corrigé de l'activité d'application 3."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q5",
          "type": "mcq",
          "prompt": "Des lésions du cortex préfrontal entraînent :",
          "options": [
            "Une paralysie complète des jambes",
            "Une diminution de l'initiative motrice, de l'attention et de l'imagination",
            "Une perte de l'audition",
            "Une amélioration de la mémoire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conséquence rapportée dans le texte de la leçon."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p03_q6",
          "type": "mcq",
          "prompt": "L'hypothalamus peut déclencher des comportements :",
          "options": [
            "Uniquement visuels",
            "Défensifs, alimentaires ou reproducteurs",
            "Uniquement langagiers",
            "Sans rapport avec l'état interne"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon cite ces trois types de comportements pour l'hypothalamus."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l02_activite_cerebrale_p04",
      "order": 4,
      "title": "Programmation et exécution du mouvement",
      "summary": "Décrire la programmation des paramètres du mouvement puis son exécution jusqu'au muscle.",
      "conceptExplanation": "Avant de lancer l'exécution, le système nerveux central programme l'ensemble des paramètres du mouvement en fonction des informations sensorielles reçues et des acquis : la latéralisation, c'est-à-dire le bras à utiliser, la distance à laquelle il faut étendre le bras, la direction du mouvement et la force qui devra être exercée pour prendre l'objet.\nCette phase est assurée par l'aire motrice supplémentaire, qui établit les programmes des actes moteurs plus ou moins complexes, souvent bilatéraux ; le cortex prémoteur, qui intervient dans la préparation posturale du mouvement guidée par les informations sensorielles ; et le cortex pariétal postérieur, qui traite l'information sensorielle liée à la représentation de l'espace.\nAvant l'exécution, il s'opère une prise de décision dont le mécanisme est encore mal connu. Après programmation au niveau des centres corticaux, un message est adressé au niveau médullaire, qui le répercute, par voie motrice, sur les effecteurs qui s'exécutent : c'est la phase d'exécution, qui aboutit au comportement moteur, la prise de l'objet.\nLa motricité volontaire se fait donc selon un mécanisme en trois étapes : préparation, programmation, exécution.",
      "keyRule": "Programmer avant d'exécuter : latéralisation, distance, direction et force sont réglés par les aires motrice supplémentaire, prémotrice et pariétale postérieure, puis le message part vers la moelle et les muscles.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner les trois phases (activité d'application 3)",
        "statement": "Associe chaque phase à sa description : préparation, programmation, exécution ; descriptions : localisation de l'objet, déplacement du message de l'aire d'association vers noyau gris et cervelet, déplacement du message du cortex moteur vers l'effecteur.",
        "methodSteps": [
          "La phase de préparation correspond à la localisation de l'objet à prendre dans l'espace à partir d'informations sensorielles.",
          "La phase de programmation correspond au déplacement du message depuis l'aire d'association jusqu'au noyau gris et au cervelet, selon le corrigé.",
          "La phase d'exécution correspond au déplacement du message depuis le cortex moteur jusqu'à l'effecteur."
        ],
        "conclusion": "Corrigé de la leçon : préparation-localisation ; programmation-message vers noyau gris et cervelet ; exécution-message vers l'effecteur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La latéralisation",
          "stepTheme": "La latéralisation",
          "stepBadge": "La latéralisation",
          "paragraphText": "• Latéralisation : choix du bras à utiliser pour exécuter le mouvement.\nC'est l'un des paramètres programmés avant l'exécution, avec la distance, la direction et la force.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q1",
            "type": "mcq",
            "prompt": "La latéralisation désigne :",
            "options": [
              "Le côté du cerveau qui voit l'objet",
              "Le bras à utiliser",
              "La force du muscle après le mouvement",
              "La position du cervelet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la latéralisation comme le bras à utiliser."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les paramètres programmés",
          "stepTheme": "Les paramètres programmés",
          "stepBadge": "Les paramètres programmés",
          "paragraphText": "Les paramètres programmés sont la latéralisation, la distance d'extension du bras, la direction du mouvement et la force à exercer.\nIls sont fixés en fonction des informations sensorielles reçues et des acquis.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q2",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est un paramètre programmé du mouvement ?",
            "options": [
              "La couleur de l'objet",
              "La force qui devra être exercée pour prendre l'objet",
              "L'heure de la journée",
              "Le nom de l'objet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La force à exercer figure dans la liste des paramètres de la phase de programmation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'aire motrice supplémentaire",
          "stepTheme": "L'aire motrice supplémentaire",
          "stepBadge": "L'aire motrice supplémentaire",
          "paragraphText": "L'aire motrice supplémentaire établit les programmes des actes moteurs plus ou moins complexes.\nCes actes sont souvent bilatéraux, c'est-à-dire qu'ils engagent les deux côtés du corps.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q3",
            "type": "mcq",
            "prompt": "L'aire motrice supplémentaire :",
            "options": [
              "Traite la représentation de l'espace",
              "Assure la préparation posturale uniquement",
              "Établit les programmes des actes moteurs complexes, souvent bilatéraux",
              "Commande directement les muscles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est son rôle dans la phase de programmation décrite par la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le trajet jusqu'à l'effecteur",
          "stepTheme": "Le trajet jusqu'à l'effecteur",
          "stepBadge": "Le trajet jusqu'à l'effecteur",
          "paragraphText": "Méthode : après la programmation corticale, suivre le message.\nIl est adressé au niveau médullaire, qui le répercute par voie motrice sur les effecteurs, c'est-à-dire les muscles qui exécutent le mouvement.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q4",
            "type": "mcq",
            "prompt": "Pendant l'exécution, le message programmé est adressé :",
            "options": [
              "Directement aux yeux",
              "Au niveau médullaire, qui le répercute par voie motrice sur les effecteurs",
              "Uniquement au système limbique",
              "À l'hypothalamus seul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le trajet décrit pour la phase d'exécution, jusqu'au comportement moteur : la prise de l'objet."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La programmation n'est pas la dernière phase",
          "stepTheme": "La programmation n'est pas la dernière phase",
          "stepBadge": "La programmation n'est pas la dernière phase",
          "paragraphText": "Piège corrigé dans l'activité d'application : affirmer que la phase de programmation est la dernière phase est faux.\nL'ordre est préparation, programmation, puis exécution.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q5",
            "type": "mcq",
            "prompt": "L'affirmation « la phase de programmation est la dernière phase de la motricité volontaire » est :",
            "options": [
              "Vraie",
              "Vraie seulement pour la saisie",
              "Sans objet",
              "Fausse, la dernière phase est l'exécution"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Corrigé de l'activité d'application : a faux ; la programmation précède l'exécution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le cortex pariétal postérieur et l'espace",
          "stepTheme": "Le cortex pariétal postérieur et l'espace",
          "stepBadge": "Le cortex pariétal postérieur et l'espace",
          "paragraphText": "Le cortex pariétal postérieur traite l'information sensorielle liée à la représentation de l'espace.\nIl aide ainsi à régler la distance et la direction du geste vers l'objet localisé.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q6",
            "type": "mcq",
            "prompt": "La représentation de l'espace pendant la programmation est traitée par :",
            "options": [
              "Le cortex pariétal postérieur",
              "L'aire motrice supplémentaire",
              "Le cortex prémoteur",
              "La moelle épinière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le rôle attribué au cortex pariétal postérieur dans la phase de programmation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q1",
          "type": "mcq",
          "prompt": "La latéralisation désigne :",
          "options": [
            "Le côté du cerveau qui voit l'objet",
            "Le bras à utiliser",
            "La force du muscle après le mouvement",
            "La position du cervelet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la latéralisation comme le bras à utiliser."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q2",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est un paramètre programmé du mouvement ?",
          "options": [
            "La couleur de l'objet",
            "La force qui devra être exercée pour prendre l'objet",
            "L'heure de la journée",
            "Le nom de l'objet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La force à exercer figure dans la liste des paramètres de la phase de programmation."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q3",
          "type": "mcq",
          "prompt": "L'aire motrice supplémentaire :",
          "options": [
            "Traite la représentation de l'espace",
            "Assure la préparation posturale uniquement",
            "Établit les programmes des actes moteurs complexes, souvent bilatéraux",
            "Commande directement les muscles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est son rôle dans la phase de programmation décrite par la leçon."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q4",
          "type": "mcq",
          "prompt": "Pendant l'exécution, le message programmé est adressé :",
          "options": [
            "Directement aux yeux",
            "Au niveau médullaire, qui le répercute par voie motrice sur les effecteurs",
            "Uniquement au système limbique",
            "À l'hypothalamus seul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le trajet décrit pour la phase d'exécution, jusqu'au comportement moteur : la prise de l'objet."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q5",
          "type": "mcq",
          "prompt": "L'affirmation « la phase de programmation est la dernière phase de la motricité volontaire » est :",
          "options": [
            "Vraie",
            "Vraie seulement pour la saisie",
            "Sans objet",
            "Fausse, la dernière phase est l'exécution"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Corrigé de l'activité d'application : a faux ; la programmation précède l'exécution."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p04_q6",
          "type": "mcq",
          "prompt": "La représentation de l'espace pendant la programmation est traitée par :",
          "options": [
            "Le cortex pariétal postérieur",
            "L'aire motrice supplémentaire",
            "Le cortex prémoteur",
            "La moelle épinière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le rôle attribué au cortex pariétal postérieur dans la phase de programmation."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l02_activite_cerebrale_p05",
      "order": 5,
      "title": "Les types de mémoire et le cas du patient H. M.",
      "summary": "Distinguer mémoire explicite et implicite, court terme et long terme, à partir du cas H. M.",
      "conceptExplanation": "Pour soulager une personne épileptique (H. M.) de sa maladie, un chirurgien procède à une ablation partielle des régions temporales gauche et droite, qui contiennent une structure sous-corticale, l'hippocampe. La lésion de l'hippocampe et des régions avoisinantes soulagea l'épilepsie, mais provoqua une perte immédiate et dévastatrice de la mémoire explicite.\nH. M. garda des capacités intellectuelles et une mémoire à court terme normales. Il conserva ses souvenirs les plus anciens, mais perdit ceux des années qui avaient précédé l'opération. Après l'opération, il perdit toute capacité de former de nouveaux souvenirs.\nEn revanche, sa mémoire implicite, nécessaire pour apprendre comment réaliser certaines tâches, est relativement préservée : en dessinant les contours d'une étoile en se regardant dans un miroir, ses performances sont normales et s'améliorent chaque jour, mais d'un jour à l'autre, il oublie qu'il a déjà pratiqué cette tâche.\nLa mémoire est multiforme : la mémoire explicite, constituée de nos souvenirs autobiographiques, et la mémoire implicite. Elle présente deux aspects : la mémoire à court terme, qui permet de suivre une conversation, et la mémoire à long terme, qui emmagasine les souvenirs, parfois pour la vie. L'hippocampe du système limbique et le cortex sont impliqués dans la mémoire.",
      "keyRule": "Le cas H. M. prouve que l'hippocampe est indispensable pour former de nouveaux souvenirs explicites, alors que la mémoire implicite et la mémoire à court terme peuvent être préservées.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser le cas H. M. (observations cliniques de la leçon)",
        "statement": "Après l'ablation partielle des régions temporales contenant l'hippocampe, qu'observe-t-on chez H. M. ?",
        "methodSteps": [
          "L'épilepsie est soulagée, mais la mémoire explicite subit une perte immédiate et dévastatrice.",
          "La mémoire à court terme et les capacités intellectuelles restent normales ; les souvenirs les plus anciens sont conservés.",
          "Les souvenirs des années précédant l'opération sont perdus et aucun nouveau souvenir ne peut se former.",
          "La mémoire implicite est relativement préservée : la tâche de l'étoile dans le miroir s'améliore chaque jour, sans souvenir conscient de l'avoir pratiquée."
        ],
        "conclusion": "L'hippocampe est indispensable à la formation de nouveaux souvenirs explicites."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La mémoire explicite",
          "stepTheme": "La mémoire explicite",
          "stepBadge": "La mémoire explicite",
          "paragraphText": "• Mémoire explicite : mémoire constituée de nos souvenirs autobiographiques.\nC'est elle qui est dévastée chez H. M. après la lésion de l'hippocampe.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q1",
            "type": "mcq",
            "prompt": "La mémoire explicite est constituée :",
            "options": [
              "Des gestes appris",
              "De nos souvenirs autobiographiques",
              "Des réflexes uniquement",
              "Des mots d'une conversation en cours seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la mémoire explicite par les souvenirs autobiographiques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La mémoire implicite",
          "stepTheme": "La mémoire implicite",
          "stepBadge": "La mémoire implicite",
          "paragraphText": "• Mémoire implicite : mémoire nécessaire pour apprendre comment réaliser certaines tâches.\nChez H. M., elle est relativement préservée malgré la lésion de l'hippocampe.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q2",
            "type": "mcq",
            "prompt": "La mémoire implicite sert à :",
            "options": [
              "Se souvenir des visages",
              "Raconter son autobiographie",
              "Apprendre comment réaliser certaines tâches",
              "Suivre une conversation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition donnée dans l'interprétation des observations cliniques."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Court terme et long terme",
          "stepTheme": "Court terme et long terme",
          "stepBadge": "Court terme et long terme",
          "paragraphText": "La mémoire à court terme permet par exemple de suivre une conversation en gardant à l'esprit les mots qui viennent d'être prononcés.\nLa mémoire à long terme emmagasine les souvenirs, parfois pour la vie.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q3",
            "type": "mcq",
            "prompt": "La mémoire à long terme :",
            "options": [
              "Ne dure que quelques secondes",
              "Emmagasine les souvenirs, parfois pour la vie",
              "Est abolie chez H. M. pour tous les souvenirs",
              "Ne sert qu'aux gestes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon oppose court terme (conversation) et long terme (souvenirs gardés parfois pour la vie)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les structures de la mémoire",
          "stepTheme": "Les structures de la mémoire",
          "stepBadge": "Les structures de la mémoire",
          "paragraphText": "Certaines structures, tels que l'hippocampe du système limbique et le cortex, sont impliquées dans la mémoire.\nLa lésion de l'hippocampe chez H. M. illustre ce rôle de façon spectaculaire.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q4",
            "type": "mcq",
            "prompt": "Quelles structures la leçon dit-elle impliquées dans la mémoire ?",
            "options": [
              "Le cervelet seul",
              "Les nerfs rachidiens",
              "L'hippocampe du système limbique et le cortex",
              "La moelle épinière"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Hippocampe du système limbique et cortex sont les structures citées."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "H. M. n'a pas tout oublié",
          "stepTheme": "H. M. n'a pas tout oublié",
          "stepBadge": "H. M. n'a pas tout oublié",
          "paragraphText": "Piège : croire que H. M. a perdu toute sa mémoire.\nIl garde une mémoire à court terme normale, ses souvenirs les plus anciens et une mémoire implicite relativement préservée ; il perd les souvenirs récents d'avant l'opération et la capacité d'en former de nouveaux.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q5",
            "type": "mcq",
            "prompt": "Après son opération, H. M. :",
            "options": [
              "A perdu tous ses souvenirs, même les plus anciens",
              "Garde ses souvenirs les plus anciens mais ne peut plus en former de nouveaux",
              "Ne peut plus apprendre aucune tâche",
              "A perdu ses capacités intellectuelles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le tableau clinique exact rapporté par la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'étoile dessinée dans le miroir",
          "stepTheme": "L'étoile dessinée dans le miroir",
          "stepBadge": "L'étoile dessinée dans le miroir",
          "paragraphText": "Pour tester H. M., on lui demande de dessiner les contours d'une étoile sans croiser les lignes, en regardant la figure et ses mains dans un miroir.\nSes performances sont normales et s'améliorent chaque jour, preuve d'une mémoire implicite préservée, même s'il oublie avoir déjà pratiqué la tâche.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q6",
            "type": "mcq",
            "prompt": "L'amélioration quotidienne de H. M. à la tâche de l'étoile montre que :",
            "options": [
              "Sa mémoire explicite est intacte",
              "Sa mémoire implicite est relativement préservée",
              "Son hippocampe est guéri",
              "Sa mémoire à court terme est abolie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'apprentissage de la tâche progresse sans souvenir conscient : c'est la mémoire implicite, relativement préservée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q1",
          "type": "mcq",
          "prompt": "La mémoire explicite est constituée :",
          "options": [
            "Des gestes appris",
            "De nos souvenirs autobiographiques",
            "Des réflexes uniquement",
            "Des mots d'une conversation en cours seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la mémoire explicite par les souvenirs autobiographiques."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q2",
          "type": "mcq",
          "prompt": "La mémoire implicite sert à :",
          "options": [
            "Se souvenir des visages",
            "Raconter son autobiographie",
            "Apprendre comment réaliser certaines tâches",
            "Suivre une conversation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition donnée dans l'interprétation des observations cliniques."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q3",
          "type": "mcq",
          "prompt": "La mémoire à long terme :",
          "options": [
            "Ne dure que quelques secondes",
            "Emmagasine les souvenirs, parfois pour la vie",
            "Est abolie chez H. M. pour tous les souvenirs",
            "Ne sert qu'aux gestes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon oppose court terme (conversation) et long terme (souvenirs gardés parfois pour la vie)."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q4",
          "type": "mcq",
          "prompt": "Quelles structures la leçon dit-elle impliquées dans la mémoire ?",
          "options": [
            "Le cervelet seul",
            "Les nerfs rachidiens",
            "L'hippocampe du système limbique et le cortex",
            "La moelle épinière"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Hippocampe du système limbique et cortex sont les structures citées."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q5",
          "type": "mcq",
          "prompt": "Après son opération, H. M. :",
          "options": [
            "A perdu tous ses souvenirs, même les plus anciens",
            "Garde ses souvenirs les plus anciens mais ne peut plus en former de nouveaux",
            "Ne peut plus apprendre aucune tâche",
            "A perdu ses capacités intellectuelles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le tableau clinique exact rapporté par la leçon."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p05_q6",
          "type": "mcq",
          "prompt": "L'amélioration quotidienne de H. M. à la tâche de l'étoile montre que :",
          "options": [
            "Sa mémoire explicite est intacte",
            "Sa mémoire implicite est relativement préservée",
            "Son hippocampe est guéri",
            "Sa mémoire à court terme est abolie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'apprentissage de la tâche progresse sans souvenir conscient : c'est la mémoire implicite, relativement préservée."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l02_activite_cerebrale_p06",
      "order": 6,
      "title": "Le mécanisme mnésique en trois phases",
      "summary": "Décrire l'acquisition, la consolidation et le stockage, puis la restitution du souvenir.",
      "conceptExplanation": "Le mécanisme mnésique comporte trois phases : l'acquisition, la consolidation et le stockage, et la restitution du souvenir.\nLors de l'acquisition, l'information parvient aux structures neuronales spécifiques de l'encéphale sous forme de message nerveux. Dans le cas de la mémoire à court terme, cette information persiste dans les circuits neuroniques fermés, ou circuits réverbérants, capables de réinjections itératives (répétitives) d'une même information. Ces informations rejouées sans cesse produiraient des modifications qui pourraient constituer la mémoire à long terme.\nAprès leur acquisition, les informations enregistrées peuvent disparaître ou être consolidées dans la mémoire à long terme. Cette consolidation exige la mise en place de nouveaux circuits neuroniques. La base biochimique de la mémoire repose sur le codage de plusieurs molécules, notamment des protéines spécifiques qui servent à modifier la structure et les propriétés du neurone.\nLors de la restitution, ou phase de remémoration, le message solliciteur orienté vers les structures de stockage déclencherait la décomposition de la protéine spécifique, qui elle-même libèrerait un médiateur chimique du réseau neuronal concerné.\nLa diminution ou la perte de mémoire est l'amnésie. La mémoire est la faculté de stocker des informations en vue d'une utilisation future.",
      "keyRule": "Trois phases à retenir dans l'ordre : acquisition dans les circuits réverbérants, consolidation avec nouveaux circuits et protéines spécifiques, restitution du souvenir ; l'amnésie est la perte de mémoire.",
      "formulas": [],
      "workedExample": {
        "title": "Se rappeler une chanson qu'on vient d'écouter (situation d'évaluation 2)",
        "statement": "Explique le phénomène qui permet de se rappeler une chanson qu'on vient d'écouter.",
        "methodSteps": [
          "Le phénomène en jeu est l'acquisition, première phase du mécanisme mnésique.",
          "L'information parvient aux structures neuronales spécifiques de l'encéphale sous forme de message nerveux.",
          "Elle persiste dans les circuits neuroniques fermés, ou circuits réverbérants, capables de réinjections itératives d'une même information."
        ],
        "conclusion": "Corrigé de la leçon : c'est l'acquisition, avec persistance de l'information dans les circuits réverbérants."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La mémoire et l'amnésie",
          "stepTheme": "La mémoire et l'amnésie",
          "stepBadge": "La mémoire et l'amnésie",
          "paragraphText": "• Mémoire : faculté de stocker des informations en vue d'une utilisation future.\n• Amnésie : diminution ou perte de mémoire. Les deux termes n'ont donc pas la même signification.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q1",
            "type": "mcq",
            "prompt": "L'amnésie est :",
            "options": [
              "Un synonyme de la mémoire",
              "La diminution ou la perte de mémoire",
              "Une phase du mécanisme mnésique",
              "Un type de circuit neuronique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de la situation d'évaluation 2 : l'amnésie est la diminution ou la perte de mémoire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'acquisition et les circuits réverbérants",
          "stepTheme": "L'acquisition et les circuits réverbérants",
          "stepBadge": "L'acquisition et les circuits réverbérants",
          "paragraphText": "Lors de l'acquisition, l'information persiste, pour la mémoire à court terme, dans des circuits neuroniques fermés.\nCes circuits réverbérants sont capables de réinjections itératives, c'est-à-dire répétitives, d'une même information.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q2",
            "type": "mcq",
            "prompt": "Pendant l'acquisition, l'information à court terme persiste dans :",
            "options": [
              "Les muscles",
              "Des circuits neuroniques fermés, ou circuits réverbérants",
              "Le liquide céphalo-rachidien uniquement",
              "Les nerfs crâniens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le mécanisme décrit pour l'acquisition dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La consolidation exige de nouveaux circuits",
          "stepTheme": "La consolidation exige de nouveaux circuits",
          "stepBadge": "La consolidation exige de nouveaux circuits",
          "paragraphText": "La consolidation des informations dans la mémoire à long terme exige la mise en place de nouveaux circuits neuroniques.\nSans consolidation, les informations enregistrées peuvent disparaître.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q3",
            "type": "mcq",
            "prompt": "La consolidation en mémoire à long terme exige :",
            "options": [
              "La destruction des anciens circuits",
              "Aucun changement dans les neurones",
              "La mise en place de nouveaux circuits neuroniques",
              "L'oubli immédiat"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise que la consolidation exige de nouveaux circuits neuroniques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La base biochimique de la mémoire",
          "stepTheme": "La base biochimique de la mémoire",
          "stepBadge": "La base biochimique de la mémoire",
          "paragraphText": "Méthode : retenir le support moléculaire décrit par la leçon.\nLe codage repose sur plusieurs molécules, notamment des protéines spécifiques qui modifient la structure et les propriétés du neurone.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q4",
            "type": "mcq",
            "prompt": "La base biochimique de la mémoire repose notamment sur :",
            "options": [
              "Des protéines spécifiques qui modifient la structure et les propriétés du neurone",
              "Le glucose sanguin uniquement",
              "Les hormones surrénaliennes",
              "La myéline des nerfs rachidiens"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les protéines spécifiques citées dans la phase de consolidation et stockage."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La restitution est bien la dernière phase",
          "stepTheme": "La restitution est bien la dernière phase",
          "stepBadge": "La restitution est bien la dernière phase",
          "paragraphText": "Piège inverse de l'activité d'application : « la restitution est la dernière phase du mécanisme mnésique » est vrai.\nEn revanche, « l'amnésie et la mnésie ont la même signification » est faux selon le corrigé.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q5",
            "type": "mcq",
            "prompt": "Selon le corrigé de l'activité d'application, « la restitution est la dernière phase du mécanisme mnésique » est :",
            "options": [
              "Faux",
              "Non corrigé",
              "Vrai seulement pour H. M.",
              "Vrai"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Corrigé de la leçon : a faux, b vrai, c faux, d vrai."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La restitution du souvenir",
          "stepTheme": "La restitution du souvenir",
          "stepBadge": "La restitution du souvenir",
          "paragraphText": "Lors de la restitution, un message solliciteur est orienté vers les structures de stockage.\nIl déclencherait la décomposition de la protéine spécifique, qui libèrerait un médiateur chimique du réseau neuronal concerné : le souvenir revient.",
          "exercise": {
            "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q6",
            "type": "mcq",
            "prompt": "La restitution du souvenir est aussi appelée :",
            "options": [
              "Phase d'exécution",
              "Phase de remémoration",
              "Phase préparatoire",
              "Phase d'alarme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon nomme la restitution « phase de remémoration »."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q1",
          "type": "mcq",
          "prompt": "L'amnésie est :",
          "options": [
            "Un synonyme de la mémoire",
            "La diminution ou la perte de mémoire",
            "Une phase du mécanisme mnésique",
            "Un type de circuit neuronique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de la situation d'évaluation 2 : l'amnésie est la diminution ou la perte de mémoire."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q2",
          "type": "mcq",
          "prompt": "Pendant l'acquisition, l'information à court terme persiste dans :",
          "options": [
            "Les muscles",
            "Des circuits neuroniques fermés, ou circuits réverbérants",
            "Le liquide céphalo-rachidien uniquement",
            "Les nerfs crâniens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le mécanisme décrit pour l'acquisition dans la leçon."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q3",
          "type": "mcq",
          "prompt": "La consolidation en mémoire à long terme exige :",
          "options": [
            "La destruction des anciens circuits",
            "Aucun changement dans les neurones",
            "La mise en place de nouveaux circuits neuroniques",
            "L'oubli immédiat"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise que la consolidation exige de nouveaux circuits neuroniques."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q4",
          "type": "mcq",
          "prompt": "La base biochimique de la mémoire repose notamment sur :",
          "options": [
            "Des protéines spécifiques qui modifient la structure et les propriétés du neurone",
            "Le glucose sanguin uniquement",
            "Les hormones surrénaliennes",
            "La myéline des nerfs rachidiens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les protéines spécifiques citées dans la phase de consolidation et stockage."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q5",
          "type": "mcq",
          "prompt": "Selon le corrigé de l'activité d'application, « la restitution est la dernière phase du mécanisme mnésique » est :",
          "options": [
            "Faux",
            "Non corrigé",
            "Vrai seulement pour H. M.",
            "Vrai"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Corrigé de la leçon : a faux, b vrai, c faux, d vrai."
        },
        {
          "id": "terminale_a1_svt_l02_activite_cerebrale_p06_q6",
          "type": "mcq",
          "prompt": "La restitution du souvenir est aussi appelée :",
          "options": [
            "Phase d'exécution",
            "Phase de remémoration",
            "Phase préparatoire",
            "Phase d'alarme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon nomme la restitution « phase de remémoration »."
        }
      ]
    }
  ]
};
