import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT TA_L2_Lactivité cérébrale chez lHomme.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const SVT_TLE_A_L02_ACTIVITE_CEREBRALE: CurriculumChapter = {
  "id": "terminale_a_svt_l02_activite_cerebrale",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 2,
  "title": "Leçon 2 : L'activité cérébrale chez l'Homme",
  "summary": "Lobes et aires cérébrales (motrices et sensibles), mécanisme de la motricité volontaire (préparation, programmation, exécution), la mémoire (cas H. M., phases mnésiques) et cas cliniques.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "SVT TA_L2_Lactivité cérébrale chez lHomme.pdf",
  "points": [
    {
      "id": "terminale_a_svt_l02_activite_cerebrale_p01",
      "order": 1,
      "title": "Les lobes et les aires motrices",
      "summary": "Quatre lobes ; les aires motrices sont en avant du sillon de Rolando.",
      "conceptExplanation": "Situation : le père d'un élève a des troubles de la marche (alors que ses jambes sentent les piqûres), des difficultés à parler et des pertes de mémoire, mais il reste conscient. L'hôpital trouve des lésions au cerveau. Le cerveau influence donc le comportement de l'homme.\n\nLes quatre lobes de chaque hémisphère cérébral :\n- le lobe frontal (à l'avant) ;\n- le lobe pariétal (en haut, en arrière du sillon de Rolando) ;\n- le lobe occipital (à l'arrière) ;\n- le lobe temporal (sur le côté, sous la scissure de Sylvius).\nLe sillon (ou scissure) de Rolando sépare le lobe frontal du lobe pariétal.\n\nLes aires motrices sont situées EN AVANT du sillon de Rolando, dans le lobe frontal :\n- l'aire motrice (aire de projection motrice) : elle commande les mouvements volontaires (intentionnels) ;\n- l'aire psychomotrice (aire prémotrice) : elle contient le centre des mouvements de l'écriture et le centre du langage parlé (aire de Broca), et assure la coordination des mouvements ;\n- l'aire motrice supplémentaire : elle programme les actes moteurs complexes ;\n- l'aire préfrontale : elle intervient dans l'initiative, l'attention, l'imagination.\n\nCorrection d'un exercice du document : l'aire du langage parlé (aire de Broca) est dans le lobe FRONTAL, pas dans le lobe temporal. Le lobe temporal contient l'aire auditive.",
      "keyRule": "Avant le sillon de Rolando (lobe frontal) : aires motrices (motrice, psychomotrice avec l'écriture et le langage parlé). Le langage parlé (Broca) est frontal.",
      "formulas": [],
      "workedExample": {
        "title": "Où est la lésion ?",
        "statement": "Un patient sent bien les piqûres sur ses jambes mais ne peut plus les bouger volontairement. Quelle aire est probablement atteinte ?",
        "methodSteps": [
          "La sensibilité est conservée : les aires de la sensibilité fonctionnent.",
          "Le mouvement volontaire est perdu : c'est l'aire motrice, en avant du sillon de Rolando."
        ],
        "conclusion": "L'aire motrice (lobe frontal) est probablement lésée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les quatre lobes",
          "stepTheme": "Les quatre lobes",
          "stepBadge": "Les quatre lobes",
          "paragraphText": "Les aires cérébrales sont réparties dans quatre lobes : frontal, pariétal, occipital et temporal.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p01_q1",
            "type": "mcq",
            "prompt": "Dans quels quatre lobes du cerveau les aires cérébrales sont-elles réparties ?",
            "options": [
              "Frontal, pariétal, occipital, temporal",
              "Cervelet, bulbe, moelle, hypophyse",
              "Droit, gauche, haut, bas",
              "Limbique, réticulé, cortical, médullaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque hémisphère cérébral comprend ces quatre lobes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le sillon de Rolando",
          "stepTheme": "Le sillon de Rolando",
          "stepBadge": "Le sillon de Rolando",
          "paragraphText": "Les aires motrices sont en avant du sillon de Rolando ; les aires de la sensibilité sont en arrière.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p01_q2",
            "type": "mcq",
            "prompt": "Par rapport au sillon de Rolando, où sont situées les principales aires motrices du cerveau ?",
            "options": [
              "En avant du sillon de Rolando",
              "En arrière du sillon de Rolando",
              "Dans le cervelet",
              "Dans la moelle épinière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elles sont dans le lobe frontal ; la sensibilité est en arrière."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'aire motrice",
          "stepTheme": "L'aire motrice",
          "stepBadge": "L'aire motrice",
          "paragraphText": "L'aire motrice (aire de projection motrice), dans le lobe frontal, commande les mouvements intentionnels.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p01_q3",
            "type": "mcq",
            "prompt": "Quel est le rôle de l'aire motrice (aire de projection motrice), située dans le lobe frontal en avant du sillon de Rolando ?",
            "options": [
              "Elle commande les mouvements volontaires (intentionnels)",
              "Elle permet de voir",
              "Elle permet d'entendre",
              "Elle permet de sentir les odeurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sa lésion paralyse les mouvements volontaires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'aire psychomotrice",
          "stepTheme": "L'aire psychomotrice",
          "stepBadge": "L'aire psychomotrice",
          "paragraphText": "L'aire psychomotrice (prémotrice) contient les centres de l'écriture et du langage parlé et coordonne les mouvements.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p01_q4",
            "type": "mcq",
            "prompt": "L'aire psychomotrice (ou aire prémotrice), dans le lobe frontal, contient deux centres importants. Lesquels ?",
            "options": [
              "Le centre de la vision et de l'audition",
              "Le centre des mouvements de l'écriture et le centre du langage parlé",
              "Le centre du goût et de l'odorat",
              "Le centre de la mémoire et du sommeil"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle assure aussi la coordination des mouvements."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le langage parlé",
          "stepTheme": "Le langage parlé",
          "stepBadge": "Le langage parlé",
          "paragraphText": "L'aire du langage parlé (aire de Broca) est dans le lobe frontal ; le lobe temporal contient l'aire auditive.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p01_q5",
            "type": "mcq",
            "prompt": "Dans quel lobe se trouve l'aire du langage parlé (aire de Broca), qui permet d'articuler les mots ?",
            "options": [
              "Le lobe frontal",
              "Le lobe temporal",
              "Le lobe occipital",
              "Le lobe pariétal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un exercice du document la place dans le lobe temporal : c'est une erreur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Associer lobes et aires",
          "stepTheme": "Associer lobes et aires",
          "stepBadge": "Associer lobes et aires",
          "paragraphText": "Frontal : aire motrice, aire psychomotrice, aire du langage parlé. Occipital : aire visuelle. Pariétal : aire de la sensibilité générale.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p01_q6",
            "type": "mcq",
            "prompt": "On associe des lobes (frontal, occipital, pariétal) à des aires (aire visuelle, aire de la sensibilité générale, aire motrice). Quelle association est juste ?",
            "options": [
              "Frontal – aire visuelle ; occipital – aire motrice ; pariétal – sensibilité générale",
              "Frontal – aire motrice ; occipital – aire visuelle ; pariétal – sensibilité générale",
              "Frontal – sensibilité générale ; occipital – aire motrice ; pariétal – aire visuelle",
              "Les trois aires sont dans le lobe temporal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La vision est à l'arrière (occipital), le mouvement à l'avant (frontal)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Localiser une lésion",
          "stepTheme": "Localiser une lésion",
          "stepBadge": "Localiser une lésion",
          "paragraphText": "Si la sensibilité est conservée mais que le mouvement volontaire est perdu, c'est l'aire motrice qui est atteinte.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p01_q7",
            "type": "mcq",
            "prompt": "Un homme a des troubles de la marche alors que ses jambes sont sensibles aux piqûres. Les examens montrent une lésion du cerveau. Quelle aire est probablement atteinte ?",
            "options": [
              "L'aire de la sensibilité générale",
              "L'aire motrice",
              "L'aire visuelle",
              "L'aire olfactive"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il sent (sensibilité intacte) mais ne commande plus bien ses mouvements."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p01_q1",
          "type": "mcq",
          "prompt": "Dans quels quatre lobes du cerveau les aires cérébrales sont-elles réparties ?",
          "options": [
            "Frontal, pariétal, occipital, temporal",
            "Cervelet, bulbe, moelle, hypophyse",
            "Droit, gauche, haut, bas",
            "Limbique, réticulé, cortical, médullaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque hémisphère cérébral comprend ces quatre lobes."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p01_q2",
          "type": "mcq",
          "prompt": "Par rapport au sillon de Rolando, où sont situées les principales aires motrices du cerveau ?",
          "options": [
            "En avant du sillon de Rolando",
            "En arrière du sillon de Rolando",
            "Dans le cervelet",
            "Dans la moelle épinière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elles sont dans le lobe frontal ; la sensibilité est en arrière."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p01_q3",
          "type": "mcq",
          "prompt": "Quel est le rôle de l'aire motrice (aire de projection motrice), située dans le lobe frontal en avant du sillon de Rolando ?",
          "options": [
            "Elle commande les mouvements volontaires (intentionnels)",
            "Elle permet de voir",
            "Elle permet d'entendre",
            "Elle permet de sentir les odeurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sa lésion paralyse les mouvements volontaires."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p01_q4",
          "type": "mcq",
          "prompt": "L'aire psychomotrice (ou aire prémotrice), dans le lobe frontal, contient deux centres importants. Lesquels ?",
          "options": [
            "Le centre de la vision et de l'audition",
            "Le centre des mouvements de l'écriture et le centre du langage parlé",
            "Le centre du goût et de l'odorat",
            "Le centre de la mémoire et du sommeil"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle assure aussi la coordination des mouvements."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p01_q5",
          "type": "mcq",
          "prompt": "Dans quel lobe se trouve l'aire du langage parlé (aire de Broca), qui permet d'articuler les mots ?",
          "options": [
            "Le lobe frontal",
            "Le lobe temporal",
            "Le lobe occipital",
            "Le lobe pariétal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un exercice du document la place dans le lobe temporal : c'est une erreur."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p01_q6",
          "type": "mcq",
          "prompt": "On associe des lobes (frontal, occipital, pariétal) à des aires (aire visuelle, aire de la sensibilité générale, aire motrice). Quelle association est juste ?",
          "options": [
            "Frontal – aire visuelle ; occipital – aire motrice ; pariétal – sensibilité générale",
            "Frontal – aire motrice ; occipital – aire visuelle ; pariétal – sensibilité générale",
            "Frontal – sensibilité générale ; occipital – aire motrice ; pariétal – aire visuelle",
            "Les trois aires sont dans le lobe temporal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La vision est à l'arrière (occipital), le mouvement à l'avant (frontal)."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p01_q7",
          "type": "mcq",
          "prompt": "Un homme a des troubles de la marche alors que ses jambes sont sensibles aux piqûres. Les examens montrent une lésion du cerveau. Quelle aire est probablement atteinte ?",
          "options": [
            "L'aire de la sensibilité générale",
            "L'aire motrice",
            "L'aire visuelle",
            "L'aire olfactive"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il sent (sensibilité intacte) mais ne commande plus bien ses mouvements."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l02_activite_cerebrale_p02",
      "order": 2,
      "title": "Les aires de la sensibilité",
      "summary": "En arrière du sillon de Rolando : sentir, voir, entendre, comprendre.",
      "conceptExplanation": "Les aires de la sensibilité sont situées EN ARRIÈRE du sillon de Rolando :\n- l'aire de la sensibilité générale (lobe pariétal) : sensations du corps (toucher, douleur, chaud, froid) ;\n- l'aire psycho-sensorielle : interprète ces sensations ;\n- l'aire de compréhension des mots écrits et parlés ;\n- les aires visuelle et psycho-visuelle (lobe occipital), reliées à l'œil : voir, reconnaître les objets et les visages, lire et comprendre un texte ;\n- les aires auditive et psycho-auditive (lobe temporal), reliées à l'oreille interne : entendre et comprendre les mots entendus ;\n- l'aire olfactive (odorat) et l'aire gustative (goût).\n\nUne aire « de projection » (visuelle, auditive) reçoit le message des sens ; une aire « psycho- » (d'association) l'interprète et le reconnaît.\n\nManifestations de l'activité cérébrale : le langage, la mémoire, l'affectivité, le niveau de vigilance, la sensibilité, le désir, la conscience, la motricité volontaire.\n\nActivité d'application (corrigé) :\n- « Le langage est contrôlé par les aires auditives » : faux ;\n- « Chaque aire commande n'importe quelle fonction » : faux, chaque aire a une fonction précise ;\n- « La mémoire est une manifestation de l'activité cérébrale » : vrai.",
      "keyRule": "Après le sillon de Rolando : sensibilité générale (pariétal), vision (occipital), audition (temporal). Aire de projection = recevoir ; aire psycho- = interpréter.",
      "formulas": [],
      "workedExample": {
        "title": "Voir sans reconnaître",
        "statement": "Après un choc à la tête, un élève voit les visages de sa famille mais ne les reconnaît pas. Quelle aire est atteinte ?",
        "methodSteps": [
          "Il voit : l'aire visuelle (de projection) fonctionne.",
          "Il ne reconnaît pas : c'est l'interprétation qui manque."
        ],
        "conclusion": "L'aire psycho-visuelle (lobe occipital) est atteinte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "En arrière de Rolando",
          "stepTheme": "En arrière de Rolando",
          "stepBadge": "En arrière de Rolando",
          "paragraphText": "Les aires de la sensibilité sont situées en arrière du sillon de Rolando.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p02_q1",
            "type": "mcq",
            "prompt": "Vrai ou faux : « L'aire de la sensibilité générale est localisée en avant du sillon de Rolando. »",
            "options": [
              "Vrai",
              "Faux : elle est en arrière du sillon de Rolando, dans le lobe pariétal",
              "Faux : elle est dans le cervelet",
              "Faux : elle est dans le lobe occipital"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En avant : le mouvement ; en arrière : la sensibilité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La vision",
          "stepTheme": "La vision",
          "stepBadge": "La vision",
          "paragraphText": "Les aires visuelle et psycho-visuelle, dans le lobe occipital, permettent de voir, de reconnaître les objets et de lire.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p02_q2",
            "type": "mcq",
            "prompt": "Dans quel lobe du cerveau se trouvent les aires visuelle et psycho-visuelle, reliées à l'œil ?",
            "options": [
              "Le lobe frontal",
              "Le lobe occipital",
              "Le lobe temporal",
              "Le lobe pariétal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La vision est traitée à l'arrière du cerveau."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'audition",
          "stepTheme": "L'audition",
          "stepBadge": "L'audition",
          "paragraphText": "Les aires auditive et psycho-auditive, dans le lobe temporal, permettent d'entendre et de comprendre les mots entendus.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p02_q3",
            "type": "mcq",
            "prompt": "Vrai ou faux : « L'aire auditive est localisée dans le lobe frontal du cerveau. »",
            "options": [
              "Vrai",
              "Faux : elle est dans le lobe temporal",
              "Faux : elle est dans le lobe occipital",
              "Faux : elle est dans le cervelet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le lobe temporal est sur le côté, près de l'oreille."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Projection et association",
          "stepTheme": "Projection et association",
          "stepBadge": "Projection et association",
          "paragraphText": "L'aire de projection reçoit le message des sens ; l'aire psycho- (d'association) l'interprète et le reconnaît.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p02_q4",
            "type": "mcq",
            "prompt": "Après un choc à la tête, un élève voit les visages des membres de sa famille mais ne les reconnaît pas. Quelle aire est atteinte ?",
            "options": [
              "L'aire visuelle de projection",
              "L'aire psycho-visuelle",
              "L'aire motrice",
              "L'aire gustative"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il voit, donc l'aire visuelle marche ; il ne reconnaît pas : c'est l'aire psycho-visuelle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Entendre sans comprendre",
          "stepTheme": "Entendre sans comprendre",
          "stepBadge": "Entendre sans comprendre",
          "paragraphText": "L'aire auditive permet d'entendre les sons ; l'aire psycho-auditive permet de comprendre les mots entendus.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p02_q5",
            "type": "mcq",
            "prompt": "Un patient entend bien les sons mais ne comprend plus le sens des mots qu'on lui dit. Quelle aire est probablement atteinte ?",
            "options": [
              "L'aire auditive",
              "L'aire psycho-auditive",
              "L'aire motrice",
              "L'aire visuelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'audition fonctionne, mais pas l'interprétation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les manifestations",
          "stepTheme": "Les manifestations",
          "stepBadge": "Les manifestations",
          "paragraphText": "Manifestations de l'activité cérébrale : langage, mémoire, affectivité, vigilance, sensibilité, désir, conscience, motricité volontaire.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p02_q6",
            "type": "mcq",
            "prompt": "Vrai ou faux : « La mémoire est une manifestation de l'activité cérébrale. »",
            "options": [
              "Vrai",
              "Faux : c'est une fonction du cœur",
              "Faux : c'est une fonction des muscles",
              "Faux : c'est une hormone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme le langage, la conscience, l'affectivité, la motricité volontaire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Chaque aire a sa fonction",
          "stepTheme": "Chaque aire a sa fonction",
          "stepBadge": "Chaque aire a sa fonction",
          "paragraphText": "Chaque aire cérébrale a une fonction précise : une aire ne commande pas n'importe quelle fonction.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p02_q7",
            "type": "mcq",
            "prompt": "Vrai ou faux : « Chaque aire cérébrale commande n'importe quelle fonction de l'organisme. »",
            "options": [
              "Vrai",
              "Faux : chaque aire a une fonction précise (vision, audition, mouvement…)",
              "Vrai, sauf pour la vision",
              "Vrai, sauf pour le langage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est pourquoi une lésion localisée entraîne un trouble précis."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p02_q1",
          "type": "mcq",
          "prompt": "Vrai ou faux : « L'aire de la sensibilité générale est localisée en avant du sillon de Rolando. »",
          "options": [
            "Vrai",
            "Faux : elle est en arrière du sillon de Rolando, dans le lobe pariétal",
            "Faux : elle est dans le cervelet",
            "Faux : elle est dans le lobe occipital"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En avant : le mouvement ; en arrière : la sensibilité."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p02_q2",
          "type": "mcq",
          "prompt": "Dans quel lobe du cerveau se trouvent les aires visuelle et psycho-visuelle, reliées à l'œil ?",
          "options": [
            "Le lobe frontal",
            "Le lobe occipital",
            "Le lobe temporal",
            "Le lobe pariétal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La vision est traitée à l'arrière du cerveau."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p02_q3",
          "type": "mcq",
          "prompt": "Vrai ou faux : « L'aire auditive est localisée dans le lobe frontal du cerveau. »",
          "options": [
            "Vrai",
            "Faux : elle est dans le lobe temporal",
            "Faux : elle est dans le lobe occipital",
            "Faux : elle est dans le cervelet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le lobe temporal est sur le côté, près de l'oreille."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p02_q4",
          "type": "mcq",
          "prompt": "Après un choc à la tête, un élève voit les visages des membres de sa famille mais ne les reconnaît pas. Quelle aire est atteinte ?",
          "options": [
            "L'aire visuelle de projection",
            "L'aire psycho-visuelle",
            "L'aire motrice",
            "L'aire gustative"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il voit, donc l'aire visuelle marche ; il ne reconnaît pas : c'est l'aire psycho-visuelle."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p02_q5",
          "type": "mcq",
          "prompt": "Un patient entend bien les sons mais ne comprend plus le sens des mots qu'on lui dit. Quelle aire est probablement atteinte ?",
          "options": [
            "L'aire auditive",
            "L'aire psycho-auditive",
            "L'aire motrice",
            "L'aire visuelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'audition fonctionne, mais pas l'interprétation."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p02_q6",
          "type": "mcq",
          "prompt": "Vrai ou faux : « La mémoire est une manifestation de l'activité cérébrale. »",
          "options": [
            "Vrai",
            "Faux : c'est une fonction du cœur",
            "Faux : c'est une fonction des muscles",
            "Faux : c'est une hormone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme le langage, la conscience, l'affectivité, la motricité volontaire."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p02_q7",
          "type": "mcq",
          "prompt": "Vrai ou faux : « Chaque aire cérébrale commande n'importe quelle fonction de l'organisme. »",
          "options": [
            "Vrai",
            "Faux : chaque aire a une fonction précise (vision, audition, mouvement…)",
            "Vrai, sauf pour la vision",
            "Vrai, sauf pour le langage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est pourquoi une lésion localisée entraîne un trouble précis."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l02_activite_cerebrale_p03",
      "order": 3,
      "title": "La motricité volontaire : la phase préparatoire",
      "summary": "Saisir un objet : localiser, s'informer, se préparer.",
      "conceptExplanation": "Texte (Biologie Tle D, collection ADN) : « Tout mouvement implique la contraction de muscles commandés par les motoneurones des nerfs rachidiens et des nerfs crâniens. Quand, par exemple, un sujet saisit un objet placé devant lui, il accomplit un mouvement qui succède à une intention, celle de saisir : c'est un mouvement volontaire. (…) Des lésions du cortex préfrontal entraînent une diminution de l'initiative motrice, de l'attention et de l'imagination. L'activité électrique des noyaux gris se modifie avant que le sujet commence le mouvement. »\n\nLe mécanisme de la motricité volontaire (prise d'un objet) comporte trois phases : la phase préparatoire, la phase de programmation, la phase d'exécution.\n\nLa phase préparatoire :\n- le sujet localise l'objet dans l'espace à partir d'informations sensorielles, généralement visuelles ;\n- elle met en jeu le cortex cérébral, des zones sous-corticales (hypothalamus, système limbique) et le cervelet ;\n- l'hypothalamus reçoit les informations sur l'état interne de l'organisme (faim, soif…) et peut déclencher des comportements défensifs, alimentaires ou reproducteurs ;\n- le système limbique relie les informations reçues à la mémoire et à l'affectivité ; il commande les émotions ;\n- les informations arrivent aux aires d'association du cortex, où l'on enregistre une activité électrique appelée POTENTIEL DE PRÉPARATION (ou de disponibilité), environ 0,8 s avant le mouvement ;\n- si l'objet est localisé par la vue, l'information est traitée d'abord dans le cortex visuel primaire, puis secondaire, puis dans les aires d'association.",
      "keyRule": "Motricité volontaire : préparation → programmation → exécution. Préparation = localiser l'objet ; potentiel de préparation environ 0,8 s avant le mouvement.",
      "formulas": [],
      "workedExample": {
        "title": "Volontaire ou réflexe ?",
        "statement": "Un élève décide de prendre son stylo sur la table. Est-ce un mouvement volontaire ?",
        "methodSteps": [
          "Le mouvement succède à une intention : celle de prendre le stylo.",
          "La volonté intervient (décision)."
        ],
        "conclusion": "Oui : c'est un mouvement volontaire, préparé, programmé puis exécuté."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un mouvement volontaire",
          "stepTheme": "Un mouvement volontaire",
          "stepBadge": "Un mouvement volontaire",
          "paragraphText": "Un mouvement volontaire succède à une intention : par exemple, saisir un objet placé devant soi.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p03_q1",
            "type": "mcq",
            "prompt": "Le texte du manuel dit : « Quand un sujet saisit un objet placé devant lui, il accomplit un mouvement qui succède à une intention, celle de saisir. » Comment appelle-t-on ce type de mouvement ?",
            "options": [
              "Un réflexe",
              "Un mouvement volontaire",
              "Un mouvement automatique involontaire",
              "Une réaction émotionnelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La volonté intervient : le sujet décide de saisir l'objet."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Trois phases",
          "stepTheme": "Trois phases",
          "stepBadge": "Trois phases",
          "paragraphText": "Le mécanisme de la motricité volontaire se déroule en trois phases : préparatoire, programmation, exécution.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p03_q2",
            "type": "mcq",
            "prompt": "Quelles sont, dans l'ordre, les trois phases du mécanisme de la motricité volontaire (par exemple, prendre un objet) ?",
            "options": [
              "Exécution, programmation, préparation",
              "Préparation, programmation, exécution",
              "Acquisition, consolidation, restitution",
              "Alarme, résistance, épuisement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Acquisition-consolidation-restitution, ce sont les phases de la mémoire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Localiser l'objet",
          "stepTheme": "Localiser l'objet",
          "stepBadge": "Localiser l'objet",
          "paragraphText": "Pendant la phase préparatoire, le sujet localise l'objet dans l'espace à partir d'informations sensorielles, surtout visuelles.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p03_q3",
            "type": "mcq",
            "prompt": "Dans la motricité volontaire, à quelle phase correspond « la localisation de l'objet à prendre dans l'espace à partir d'informations sensorielles » ?",
            "options": [
              "La phase préparatoire",
              "La phase de programmation",
              "La phase d'exécution",
              "La phase de restitution"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avant de bouger, il faut savoir où est l'objet."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le cortex préfrontal",
          "stepTheme": "Le cortex préfrontal",
          "stepBadge": "Le cortex préfrontal",
          "paragraphText": "« Des lésions du cortex préfrontal entraînent une diminution de l'initiative motrice, de l'attention et de l'imagination. »",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p03_q4",
            "type": "mcq",
            "prompt": "Le manuel indique que « des lésions du cortex préfrontal entraînent une diminution de l'initiative motrice, de l'attention et de l'imagination ». Quel est donc le rôle du cortex préfrontal ?",
            "options": [
              "Il intervient dans la décision et l'initiative du mouvement",
              "Il commande la digestion",
              "Il produit l'adrénaline",
              "Il permet d'entendre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est là que naît en partie l'intention d'agir."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Hypothalamus et système limbique",
          "stepTheme": "Hypothalamus et système limbique",
          "stepBadge": "Hypothalamus et système limbique",
          "paragraphText": "L'hypothalamus renseigne sur l'état interne (faim, soif) ; le système limbique relie les informations à la mémoire et à l'affectivité.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p03_q5",
            "type": "mcq",
            "prompt": "Pendant la phase préparatoire, quelle structure reçoit les informations sur l'état interne de l'organisme et peut déclencher des comportements alimentaires ou défensifs ?",
            "options": [
              "L'hypothalamus",
              "La rétine",
              "Le muscle",
              "La moelle épinière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le système limbique, lui, relie l'information à la mémoire et aux émotions."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le potentiel de préparation",
          "stepTheme": "Le potentiel de préparation",
          "stepBadge": "Le potentiel de préparation",
          "paragraphText": "On enregistre à la surface du cortex une activité électrique, le potentiel de préparation, environ 0,8 s avant le mouvement.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p03_q6",
            "type": "mcq",
            "prompt": "À la surface du cortex, on enregistre une activité électrique appelée « potentiel de préparation » (ou de disponibilité). Quand apparaît-elle ?",
            "options": [
              "Environ 0,8 seconde avant le mouvement",
              "Une heure après le mouvement",
              "Pendant le sommeil seulement",
              "Jamais"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cerveau se prépare avant que le muscle ne bouge."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Le trajet visuel",
          "stepTheme": "Le trajet visuel",
          "stepBadge": "Le trajet visuel",
          "paragraphText": "Si l'objet est repéré par la vue : cortex visuel primaire → cortex visuel secondaire → aires d'association.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p03_q7",
            "type": "mcq",
            "prompt": "Un élève repère des yeux un ballon avant de le saisir. Dans quel ordre l'information visuelle est-elle traitée dans le cortex pendant la phase préparatoire ?",
            "options": [
              "Aires d'association → cortex visuel primaire → secondaire",
              "Cortex visuel primaire → cortex visuel secondaire → aires d'association",
              "Cortex moteur → muscle → œil",
              "Cervelet → moelle → œil"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'information est d'abord reçue, puis analysée, puis intégrée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p03_q1",
          "type": "mcq",
          "prompt": "Le texte du manuel dit : « Quand un sujet saisit un objet placé devant lui, il accomplit un mouvement qui succède à une intention, celle de saisir. » Comment appelle-t-on ce type de mouvement ?",
          "options": [
            "Un réflexe",
            "Un mouvement volontaire",
            "Un mouvement automatique involontaire",
            "Une réaction émotionnelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La volonté intervient : le sujet décide de saisir l'objet."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p03_q2",
          "type": "mcq",
          "prompt": "Quelles sont, dans l'ordre, les trois phases du mécanisme de la motricité volontaire (par exemple, prendre un objet) ?",
          "options": [
            "Exécution, programmation, préparation",
            "Préparation, programmation, exécution",
            "Acquisition, consolidation, restitution",
            "Alarme, résistance, épuisement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Acquisition-consolidation-restitution, ce sont les phases de la mémoire."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p03_q3",
          "type": "mcq",
          "prompt": "Dans la motricité volontaire, à quelle phase correspond « la localisation de l'objet à prendre dans l'espace à partir d'informations sensorielles » ?",
          "options": [
            "La phase préparatoire",
            "La phase de programmation",
            "La phase d'exécution",
            "La phase de restitution"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avant de bouger, il faut savoir où est l'objet."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p03_q4",
          "type": "mcq",
          "prompt": "Le manuel indique que « des lésions du cortex préfrontal entraînent une diminution de l'initiative motrice, de l'attention et de l'imagination ». Quel est donc le rôle du cortex préfrontal ?",
          "options": [
            "Il intervient dans la décision et l'initiative du mouvement",
            "Il commande la digestion",
            "Il produit l'adrénaline",
            "Il permet d'entendre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est là que naît en partie l'intention d'agir."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p03_q5",
          "type": "mcq",
          "prompt": "Pendant la phase préparatoire, quelle structure reçoit les informations sur l'état interne de l'organisme et peut déclencher des comportements alimentaires ou défensifs ?",
          "options": [
            "L'hypothalamus",
            "La rétine",
            "Le muscle",
            "La moelle épinière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le système limbique, lui, relie l'information à la mémoire et aux émotions."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p03_q6",
          "type": "mcq",
          "prompt": "À la surface du cortex, on enregistre une activité électrique appelée « potentiel de préparation » (ou de disponibilité). Quand apparaît-elle ?",
          "options": [
            "Environ 0,8 seconde avant le mouvement",
            "Une heure après le mouvement",
            "Pendant le sommeil seulement",
            "Jamais"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cerveau se prépare avant que le muscle ne bouge."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p03_q7",
          "type": "mcq",
          "prompt": "Un élève repère des yeux un ballon avant de le saisir. Dans quel ordre l'information visuelle est-elle traitée dans le cortex pendant la phase préparatoire ?",
          "options": [
            "Aires d'association → cortex visuel primaire → secondaire",
            "Cortex visuel primaire → cortex visuel secondaire → aires d'association",
            "Cortex moteur → muscle → œil",
            "Cervelet → moelle → œil"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'information est d'abord reçue, puis analysée, puis intégrée."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l02_activite_cerebrale_p04",
      "order": 4,
      "title": "Programmation et exécution du mouvement",
      "summary": "Régler les paramètres du geste, puis envoyer l'ordre aux muscles.",
      "conceptExplanation": "La phase de programmation : avant d'exécuter un mouvement, le système nerveux central programme ses paramètres, selon les informations sensorielles reçues et les acquis :\n- la latéralisation : quel bras utiliser ;\n- la distance à laquelle il faut étendre le bras ;\n- la direction du mouvement ;\n- la force à exercer pour prendre l'objet.\nElle est assurée par :\n- l'aire motrice supplémentaire : elle établit les programmes des actes moteurs plus ou moins complexes, souvent des deux côtés ;\n- le cortex prémoteur (aire prémotrice) : il prépare la posture du mouvement, guidé par les informations sensorielles ;\n- le cortex pariétal postérieur : il traite l'information liée à la représentation de l'espace.\n\nLa phase d'exécution : une prise de décision a lieu (son mécanisme est encore mal connu). Puis le message part des centres corticaux (cortex moteur) vers la moelle épinière, qui le transmet par une voie motrice aux effecteurs (muscles), qui se contractent.\n\nTrajet de l'influx (prise d'un objet) : stimuli externes → cortex sensitif → zones sous-corticales et cervelet (coordination des mouvements automatiques) → thalamus et zones psychomotrices → centre de décision → cortex moteur → moelle épinière → muscle → prise de l'objet.\n\nCas clinique (AVC) : le débit sanguin est plus élevé dans les zones actives. Pression simple du pouce et de l'index : aire motrice (et aire des mouvements de l'écriture). Séquence complexe des doigts : aire psychomotrice en plus. Simple représentation mentale du mouvement : seule l'aire psychomotrice (zone de programmation) est active. Les aires de l'arrière du cerveau ne sont pas actives car ces tâches ne sollicitent pas les aires de la sensibilité.",
      "keyRule": "Programmation : quel bras, quelle distance, quelle direction, quelle force (aire motrice supplémentaire, cortex prémoteur, cortex pariétal postérieur). Exécution : cortex moteur → moelle épinière → muscles.",
      "formulas": [],
      "workedExample": {
        "title": "Associer phase et description",
        "statement": "Associe : 1-préparation, 2-programmation, 3-exécution à : a-message de l'aire d'association vers les noyaux gris et le cervelet ; b-message du cortex moteur jusqu'à l'effecteur ; c-localisation de l'objet à partir d'informations sensorielles.",
        "methodSteps": [
          "Localiser l'objet, c'est se préparer : 1-c.",
          "Les noyaux gris et le cervelet règlent le geste : 2-a.",
          "Le cortex moteur envoie l'ordre au muscle : 3-b."
        ],
        "conclusion": "1-c ; 2-a ; 3-b."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les paramètres du geste",
          "stepTheme": "Les paramètres du geste",
          "stepBadge": "Les paramètres du geste",
          "paragraphText": "Pendant la programmation, le système nerveux central règle : le bras à utiliser, la distance, la direction et la force.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p04_q1",
            "type": "mcq",
            "prompt": "Pour prendre un verre sur la table, le cerveau choisit le bras, la distance, la direction et la force du geste. À quelle phase de la motricité volontaire cela correspond-il ?",
            "options": [
              "La phase préparatoire",
              "La phase de programmation",
              "La phase d'exécution",
              "La phase de consolidation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On programme les paramètres avant d'exécuter."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La latéralisation",
          "stepTheme": "La latéralisation",
          "stepBadge": "La latéralisation",
          "paragraphText": "La latéralisation est le choix du bras à utiliser.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p04_q2",
            "type": "mcq",
            "prompt": "Parmi les paramètres programmés avant un mouvement (latéralisation, distance, direction, force), que désigne la latéralisation ?",
            "options": [
              "Le choix du bras à utiliser",
              "La vitesse du cœur",
              "La couleur de l'objet",
              "Le poids de l'objet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Droite ou gauche : c'est la latéralisation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les aires de la programmation",
          "stepTheme": "Les aires de la programmation",
          "stepBadge": "Les aires de la programmation",
          "paragraphText": "La programmation est assurée par l'aire motrice supplémentaire, le cortex prémoteur et le cortex pariétal postérieur.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p04_q3",
            "type": "mcq",
            "prompt": "Quelle aire établit les programmes des actes moteurs plus ou moins complexes pendant la phase de programmation ?",
            "options": [
              "L'aire motrice supplémentaire",
              "L'aire visuelle",
              "L'aire olfactive",
              "L'aire auditive"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cortex prémoteur prépare la posture ; le cortex pariétal postérieur traite l'espace."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'exécution",
          "stepTheme": "L'exécution",
          "stepBadge": "L'exécution",
          "paragraphText": "Après la décision, le message va du cortex moteur à la moelle épinière, puis par une voie motrice aux muscles.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p04_q4",
            "type": "mcq",
            "prompt": "Pendant la phase d'exécution d'un mouvement volontaire, quel est le trajet du message nerveux ?",
            "options": [
              "Muscle → moelle épinière → cortex moteur",
              "Cortex moteur → moelle épinière → muscle (effecteur)",
              "Œil → cortex visuel → œil",
              "Hypophyse → sang → muscle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La moelle épinière relaie l'ordre vers les muscles."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La dernière phase",
          "stepTheme": "La dernière phase",
          "stepBadge": "La dernière phase",
          "paragraphText": "La programmation n'est pas la dernière phase : c'est l'exécution.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p04_q5",
            "type": "mcq",
            "prompt": "Vrai ou faux : « La phase de programmation est la dernière phase du mécanisme de la motricité volontaire. »",
            "options": [
              "Vrai",
              "Faux : la dernière phase est l'exécution",
              "Faux : la dernière phase est la préparation",
              "Faux : il n'y a qu'une seule phase"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ordre : préparation, programmation, exécution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Penser un mouvement",
          "stepTheme": "Penser un mouvement",
          "stepBadge": "Penser un mouvement",
          "paragraphText": "Quand un patient se représente mentalement un mouvement sans le faire, seule la zone de programmation (aire psychomotrice) s'active.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p04_q6",
            "type": "mcq",
            "prompt": "Chez un patient, on mesure le débit sanguin du cerveau (plus il est élevé, plus la zone est active). Quand il imagine un mouvement des doigts sans le faire, seule une zone à l'avant de l'aire motrice s'active. Laquelle ?",
            "options": [
              "L'aire psychomotrice (zone de programmation)",
              "L'aire visuelle",
              "L'aire auditive",
              "L'aire de la sensibilité générale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On programme le geste, mais on ne l'exécute pas : l'aire motrice reste peu active."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "L'arrière du cerveau",
          "stepTheme": "L'arrière du cerveau",
          "stepBadge": "L'arrière du cerveau",
          "paragraphText": "Pendant ces tâches motrices, l'arrière du cerveau n'est pas actif : les aires de la sensibilité, en arrière de Rolando, ne sont pas sollicitées.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p04_q7",
            "type": "mcq",
            "prompt": "Pendant que le patient presse son pouce contre son index, aucune zone n'est active à l'arrière du cerveau (vers la nuque). Pourquoi ?",
            "options": [
              "Parce que l'arrière du cerveau est mort",
              "Parce que ces tâches motrices ne sollicitent pas les aires de la sensibilité, situées en arrière du sillon de Rolando",
              "Parce que le cervelet travaille seul",
              "Parce que le patient dort"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les tâches demandées sollicitent les aires motrices, à l'avant."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p04_q1",
          "type": "mcq",
          "prompt": "Pour prendre un verre sur la table, le cerveau choisit le bras, la distance, la direction et la force du geste. À quelle phase de la motricité volontaire cela correspond-il ?",
          "options": [
            "La phase préparatoire",
            "La phase de programmation",
            "La phase d'exécution",
            "La phase de consolidation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On programme les paramètres avant d'exécuter."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p04_q2",
          "type": "mcq",
          "prompt": "Parmi les paramètres programmés avant un mouvement (latéralisation, distance, direction, force), que désigne la latéralisation ?",
          "options": [
            "Le choix du bras à utiliser",
            "La vitesse du cœur",
            "La couleur de l'objet",
            "Le poids de l'objet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Droite ou gauche : c'est la latéralisation."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p04_q3",
          "type": "mcq",
          "prompt": "Quelle aire établit les programmes des actes moteurs plus ou moins complexes pendant la phase de programmation ?",
          "options": [
            "L'aire motrice supplémentaire",
            "L'aire visuelle",
            "L'aire olfactive",
            "L'aire auditive"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cortex prémoteur prépare la posture ; le cortex pariétal postérieur traite l'espace."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p04_q4",
          "type": "mcq",
          "prompt": "Pendant la phase d'exécution d'un mouvement volontaire, quel est le trajet du message nerveux ?",
          "options": [
            "Muscle → moelle épinière → cortex moteur",
            "Cortex moteur → moelle épinière → muscle (effecteur)",
            "Œil → cortex visuel → œil",
            "Hypophyse → sang → muscle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La moelle épinière relaie l'ordre vers les muscles."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p04_q5",
          "type": "mcq",
          "prompt": "Vrai ou faux : « La phase de programmation est la dernière phase du mécanisme de la motricité volontaire. »",
          "options": [
            "Vrai",
            "Faux : la dernière phase est l'exécution",
            "Faux : la dernière phase est la préparation",
            "Faux : il n'y a qu'une seule phase"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ordre : préparation, programmation, exécution."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p04_q6",
          "type": "mcq",
          "prompt": "Chez un patient, on mesure le débit sanguin du cerveau (plus il est élevé, plus la zone est active). Quand il imagine un mouvement des doigts sans le faire, seule une zone à l'avant de l'aire motrice s'active. Laquelle ?",
          "options": [
            "L'aire psychomotrice (zone de programmation)",
            "L'aire visuelle",
            "L'aire auditive",
            "L'aire de la sensibilité générale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On programme le geste, mais on ne l'exécute pas : l'aire motrice reste peu active."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p04_q7",
          "type": "mcq",
          "prompt": "Pendant que le patient presse son pouce contre son index, aucune zone n'est active à l'arrière du cerveau (vers la nuque). Pourquoi ?",
          "options": [
            "Parce que l'arrière du cerveau est mort",
            "Parce que ces tâches motrices ne sollicitent pas les aires de la sensibilité, situées en arrière du sillon de Rolando",
            "Parce que le cervelet travaille seul",
            "Parce que le patient dort"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les tâches demandées sollicitent les aires motrices, à l'avant."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l02_activite_cerebrale_p05",
      "order": 5,
      "title": "La mémoire : le cas H. M.",
      "summary": "Mémoire explicite et implicite ; court terme et long terme ; rôle de l'hippocampe.",
      "conceptExplanation": "Observation clinique (Serge Laroche, Université Paris-Sud) : pour soulager un épileptique, H. M., un chirurgien enlève une partie des régions temporales gauche et droite, qui contiennent l'hippocampe.\n- L'épilepsie est soulagée, mais H. M. perd immédiatement sa mémoire explicite.\n- Il garde ses capacités intellectuelles et une mémoire à court terme normale.\n- Il garde ses souvenirs les plus anciens, mais perd ceux des années qui ont précédé l'opération.\n- Après l'opération, il ne peut plus former de nouveaux souvenirs : il ne reconnaît ni le nom ni le visage des infirmières qu'il voit tous les jours.\n- Sa mémoire implicite est préservée : il apprend à dessiner une étoile en regardant dans un miroir, ses performances s'améliorent chaque jour, mais il oublie qu'il a déjà fait cet exercice.\n\nCe qu'on en déduit : il existe plusieurs types de mémoire.\n- La mémoire explicite : nos souvenirs autobiographiques (faits, événements, visages, noms) ; on peut les raconter.\n- La mémoire implicite : celle des savoir-faire, nécessaire pour apprendre à réaliser certaines tâches (faire du vélo, écrire).\n- La mémoire à court terme : elle garde l'information quelques secondes (suivre une conversation).\n- La mémoire à long terme : elle stocke les souvenirs, parfois pour toute la vie.\n\nL'hippocampe (système limbique) et le cortex sont impliqués dans la mémoire. La mémoire est la faculté de stocker des informations en vue d'une utilisation future. La diminution ou la perte de mémoire s'appelle l'AMNÉSIE.",
      "keyRule": "Mémoire explicite (souvenirs) et implicite (savoir-faire) ; court terme et long terme. L'hippocampe est indispensable pour former de nouveaux souvenirs. Amnésie = perte de mémoire.",
      "formulas": [],
      "workedExample": {
        "title": "Quelle mémoire ?",
        "statement": "H. M. dessine de mieux en mieux une étoile vue dans un miroir, mais ne se souvient pas avoir déjà fait l'exercice. Quelle mémoire fonctionne, laquelle est perdue ?",
        "methodSteps": [
          "Ses performances s'améliorent : le savoir-faire est appris (mémoire implicite).",
          "Il ne se souvient pas de l'expérience : le souvenir conscient manque (mémoire explicite)."
        ],
        "conclusion": "La mémoire implicite fonctionne ; la mémoire explicite (nouveaux souvenirs) est perdue."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "L'opération de H. M.",
          "stepTheme": "L'opération de H. M.",
          "stepBadge": "L'opération de H. M.",
          "paragraphText": "Pour soigner son épilepsie, on enlève à H. M. une partie des régions temporales contenant l'hippocampe. Il perd alors sa mémoire explicite.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p05_q1",
            "type": "mcq",
            "prompt": "Après l'ablation des régions temporales contenant l'hippocampe, le patient H. M. ne peut plus former de nouveaux souvenirs. Quelle structure est donc indispensable à la formation des souvenirs ?",
            "options": [
              "L'hippocampe",
              "Le cervelet",
              "L'aire visuelle",
              "La moelle épinière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'hippocampe fait partie du système limbique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Mémoire explicite",
          "stepTheme": "Mémoire explicite",
          "stepBadge": "Mémoire explicite",
          "paragraphText": "La mémoire explicite est constituée de nos souvenirs autobiographiques : faits, événements, noms, visages.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p05_q2",
            "type": "mcq",
            "prompt": "Après son opération, H. M. ne se souvient ni du nom ni du visage des infirmières qu'il voit chaque jour. Quel type de mémoire a-t-il perdu ?",
            "options": [
              "La mémoire implicite",
              "La mémoire explicite",
              "La mémoire à court terme",
              "Aucune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les noms et les visages sont des souvenirs conscients : mémoire explicite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Mémoire implicite",
          "stepTheme": "Mémoire implicite",
          "stepBadge": "Mémoire implicite",
          "paragraphText": "La mémoire implicite est nécessaire pour apprendre à réaliser certaines tâches : ce sont les savoir-faire.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p05_q3",
            "type": "mcq",
            "prompt": "H. M. dessine chaque jour un peu mieux une étoile vue dans un miroir, mais il oublie qu'il a déjà fait l'exercice. Quelle mémoire est préservée chez lui ?",
            "options": [
              "La mémoire explicite",
              "La mémoire implicite (savoir-faire)",
              "Aucune mémoire",
              "La mémoire des visages"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il apprend le geste sans se souvenir de l'avoir appris."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Court terme",
          "stepTheme": "Court terme",
          "stepBadge": "Court terme",
          "paragraphText": "La mémoire à court terme permet par exemple de suivre une conversation en gardant à l'esprit les mots qui viennent d'être prononcés.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p05_q4",
            "type": "mcq",
            "prompt": "Pendant une conversation, vous gardez en tête les mots que votre ami vient de prononcer pour comprendre sa phrase. Quelle mémoire utilisez-vous ?",
            "options": [
              "La mémoire à court terme",
              "La mémoire à long terme",
              "La mémoire implicite",
              "Aucune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle garde l'information quelques secondes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Long terme",
          "stepTheme": "Long terme",
          "stepBadge": "Long terme",
          "paragraphText": "La mémoire à long terme emmagasine les souvenirs, parfois pour la vie.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p05_q5",
            "type": "mcq",
            "prompt": "Un grand-père se souvient encore de son village d'enfance, soixante ans plus tard. Quelle mémoire est en jeu ?",
            "options": [
              "La mémoire à court terme",
              "La mémoire à long terme",
              "Le potentiel de préparation",
              "L'aire motrice"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle stocke les souvenirs parfois pour toute la vie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les anciens souvenirs",
          "stepTheme": "Les anciens souvenirs",
          "stepBadge": "Les anciens souvenirs",
          "paragraphText": "H. M. a gardé ses souvenirs les plus anciens et une mémoire à court terme normale, mais il ne forme plus de nouveaux souvenirs durables.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p05_q6",
            "type": "mcq",
            "prompt": "H. M. garde ses souvenirs les plus anciens et une mémoire à court terme normale, mais ne peut plus former de nouveaux souvenirs. Que montre ce cas ?",
            "options": [
              "Qu'il n'existe qu'une seule mémoire",
              "Qu'il existe plusieurs types de mémoire, qui peuvent être atteints séparément",
              "Que la mémoire est dans le cœur",
              "Que la mémoire ne dépend pas du cerveau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une lésion peut supprimer une forme de mémoire et en épargner une autre."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Amnésie et mnésie",
          "stepTheme": "Amnésie et mnésie",
          "stepBadge": "Amnésie et mnésie",
          "paragraphText": "La mnésie (du grec mnêmê) concerne la mémoire ; l'amnésie est la diminution ou la perte de la mémoire.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p05_q7",
            "type": "mcq",
            "prompt": "Vrai ou faux : « L'amnésie et la mnésie ont la même signification. »",
            "options": [
              "Vrai",
              "Faux : l'amnésie est la perte de mémoire, la mnésie désigne la mémoire",
              "Vrai, ce sont deux maladies",
              "Faux : la mnésie est une hormone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le préfixe « a- » marque l'absence."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p05_q1",
          "type": "mcq",
          "prompt": "Après l'ablation des régions temporales contenant l'hippocampe, le patient H. M. ne peut plus former de nouveaux souvenirs. Quelle structure est donc indispensable à la formation des souvenirs ?",
          "options": [
            "L'hippocampe",
            "Le cervelet",
            "L'aire visuelle",
            "La moelle épinière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'hippocampe fait partie du système limbique."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p05_q2",
          "type": "mcq",
          "prompt": "Après son opération, H. M. ne se souvient ni du nom ni du visage des infirmières qu'il voit chaque jour. Quel type de mémoire a-t-il perdu ?",
          "options": [
            "La mémoire implicite",
            "La mémoire explicite",
            "La mémoire à court terme",
            "Aucune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les noms et les visages sont des souvenirs conscients : mémoire explicite."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p05_q3",
          "type": "mcq",
          "prompt": "H. M. dessine chaque jour un peu mieux une étoile vue dans un miroir, mais il oublie qu'il a déjà fait l'exercice. Quelle mémoire est préservée chez lui ?",
          "options": [
            "La mémoire explicite",
            "La mémoire implicite (savoir-faire)",
            "Aucune mémoire",
            "La mémoire des visages"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il apprend le geste sans se souvenir de l'avoir appris."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p05_q4",
          "type": "mcq",
          "prompt": "Pendant une conversation, vous gardez en tête les mots que votre ami vient de prononcer pour comprendre sa phrase. Quelle mémoire utilisez-vous ?",
          "options": [
            "La mémoire à court terme",
            "La mémoire à long terme",
            "La mémoire implicite",
            "Aucune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle garde l'information quelques secondes."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p05_q5",
          "type": "mcq",
          "prompt": "Un grand-père se souvient encore de son village d'enfance, soixante ans plus tard. Quelle mémoire est en jeu ?",
          "options": [
            "La mémoire à court terme",
            "La mémoire à long terme",
            "Le potentiel de préparation",
            "L'aire motrice"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle stocke les souvenirs parfois pour toute la vie."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p05_q6",
          "type": "mcq",
          "prompt": "H. M. garde ses souvenirs les plus anciens et une mémoire à court terme normale, mais ne peut plus former de nouveaux souvenirs. Que montre ce cas ?",
          "options": [
            "Qu'il n'existe qu'une seule mémoire",
            "Qu'il existe plusieurs types de mémoire, qui peuvent être atteints séparément",
            "Que la mémoire est dans le cœur",
            "Que la mémoire ne dépend pas du cerveau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une lésion peut supprimer une forme de mémoire et en épargner une autre."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p05_q7",
          "type": "mcq",
          "prompt": "Vrai ou faux : « L'amnésie et la mnésie ont la même signification. »",
          "options": [
            "Vrai",
            "Faux : l'amnésie est la perte de mémoire, la mnésie désigne la mémoire",
            "Vrai, ce sont deux maladies",
            "Faux : la mnésie est une hormone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le préfixe « a- » marque l'absence."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l02_activite_cerebrale_p06",
      "order": 6,
      "title": "Le mécanisme de la mémoire et les cas cliniques",
      "summary": "Acquisition, consolidation et stockage, restitution ; la commotion cérébrale.",
      "conceptExplanation": "Le mécanisme de la mémoire (mécanisme mnésique) comporte 3 phases :\n\n1. L'acquisition : l'information arrive aux structures nerveuses de l'encéphale sous forme de message nerveux. Pour la mémoire à court terme, elle persiste dans des circuits de neurones fermés (circuits réverbérants), qui renvoient plusieurs fois la même information. Exemple : se rappeler une chanson qu'on vient d'écouter.\n\n2. La consolidation et le stockage : les informations de la mémoire à court terme peuvent disparaître ou être consolidées dans la mémoire à long terme. Cette consolidation demande la mise en place de nouveaux circuits de neurones ; elle repose sur la fabrication de protéines spécifiques qui modifient la structure et les propriétés des neurones.\n\n3. La restitution (remémoration) : un message « solliciteur » est envoyé vers les structures de stockage et réactive le réseau de neurones qui garde le souvenir (le document propose l'hypothèse de la libération d'un médiateur chimique).\n\nCas clinique (commotion cérébrale) : après un choc à la tête au football, un élève voit des éclairs lumineux et ne reconnaît plus sa famille ; il entend les mots mais ne peut pas les articuler, alors que sa langue n'est pas paralysée.\n- voir des éclairs et ne pas reconnaître les visages : lésion de l'aire visuelle et psycho-visuelle (lobe occipital) ;\n- entendre sans pouvoir articuler : lésion de l'aire d'articulation du langage verbal (aire de Broca, lobe frontal).\n\nConclusion générale : l'activité cérébrale commande certaines réactions de l'homme (motricité volontaire, mémoire, langage) selon un mécanisme, à partir des aires cérébrales.",
      "keyRule": "Mémoire : acquisition (circuits réverbérants) → consolidation et stockage (nouveaux circuits, protéines) → restitution. Une lésion localisée donne un trouble précis.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer une commotion",
        "statement": "Après un choc à la tête, un élève entend les mots que dit le médecin mais ne peut pas les prononcer, alors que sa langue bouge normalement. Explique.",
        "methodSteps": [
          "Il entend : les aires auditives fonctionnent.",
          "Les muscles de la langue ne sont pas paralysés : ce n'est pas l'aire motrice de la langue.",
          "Il ne peut pas articuler les mots : c'est le centre du langage parlé qui est touché."
        ],
        "conclusion": "Lésion de l'aire d'articulation du langage verbal (aire de Broca)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Trois phases",
          "stepTheme": "Trois phases",
          "stepBadge": "Trois phases",
          "paragraphText": "Le mécanisme mnésique comporte trois phases : acquisition, consolidation et stockage, restitution.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p06_q1",
            "type": "mcq",
            "prompt": "Quelles sont, dans l'ordre, les trois phases du mécanisme de la mémoire ?",
            "options": [
              "Restitution, acquisition, stockage",
              "Acquisition, consolidation et stockage, restitution",
              "Préparation, programmation, exécution",
              "Alarme, adaptation, épuisement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Préparation-programmation-exécution, c'est la motricité volontaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les circuits réverbérants",
          "stepTheme": "Les circuits réverbérants",
          "stepBadge": "Les circuits réverbérants",
          "paragraphText": "Pendant l'acquisition, l'information de la mémoire à court terme persiste dans des circuits de neurones fermés qui la renvoient plusieurs fois.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p06_q2",
            "type": "mcq",
            "prompt": "Vous vous rappelez une chanson que vous venez d'écouter. Selon le cours, l'information persiste dans des « circuits réverbérants ». De quelle phase de la mémoire s'agit-il ?",
            "options": [
              "L'acquisition",
              "La restitution",
              "L'exécution",
              "La programmation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les circuits fermés réinjectent la même information de façon répétée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Consolider",
          "stepTheme": "Consolider",
          "stepBadge": "Consolider",
          "paragraphText": "La consolidation dans la mémoire à long terme exige de nouveaux circuits de neurones et la fabrication de protéines spécifiques.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p06_q3",
            "type": "mcq",
            "prompt": "Selon le cours, sur quoi repose la consolidation d'un souvenir dans la mémoire à long terme ?",
            "options": [
              "Sur la mise en place de nouveaux circuits de neurones et la fabrication de protéines spécifiques",
              "Sur la sécrétion d'adrénaline",
              "Sur la contraction des muscles",
              "Sur la digestion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le neurone change de structure et de propriétés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "La dernière phase",
          "stepTheme": "La dernière phase",
          "stepBadge": "La dernière phase",
          "paragraphText": "La restitution (remémoration) est la dernière phase du mécanisme mnésique.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p06_q4",
            "type": "mcq",
            "prompt": "Vrai ou faux : « La restitution est la dernière phase du mécanisme mnésique (acquisition, consolidation et stockage, restitution). »",
            "options": [
              "Vrai",
              "Faux : c'est l'acquisition",
              "Faux : c'est le stockage",
              "Faux : c'est l'exécution"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On restitue un souvenir déjà acquis et stocké."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Ne pas reconnaître",
          "stepTheme": "Ne pas reconnaître",
          "stepBadge": "Ne pas reconnaître",
          "paragraphText": "Voir des éclairs et ne pas reconnaître ses proches après un choc : lésion de l'aire visuelle et psycho-visuelle.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p06_q5",
            "type": "mcq",
            "prompt": "Après un choc violent à la tête lors d'un match, un élève voit des éclairs lumineux et ne reconnaît plus les membres de sa famille. Quelle aire est atteinte ?",
            "options": [
              "L'aire psycho-visuelle (lobe occipital)",
              "L'aire auditive",
              "L'aire gustative",
              "L'aire motrice de la jambe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La reconnaissance de ce qu'on voit dépend de l'aire psycho-visuelle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Ne pas articuler",
          "stepTheme": "Ne pas articuler",
          "stepBadge": "Ne pas articuler",
          "paragraphText": "Entendre un mot mais ne pas pouvoir l'articuler, alors que la langue n'est pas paralysée : lésion de l'aire d'articulation du langage verbal.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p06_q6",
            "type": "mcq",
            "prompt": "Le même élève entend le mot que le médecin lui demande de dire, mais ne peut pas l'articuler, alors que les muscles de sa langue ne sont pas paralysés. Quelle aire est atteinte ?",
            "options": [
              "L'aire auditive",
              "L'aire d'articulation du langage verbal (aire de Broca)",
              "L'aire visuelle",
              "L'aire olfactive"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il entend (aire auditive intacte) ; la langue bouge (aire motrice de la langue intacte)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "La mémoire",
          "stepTheme": "La mémoire",
          "stepBadge": "La mémoire",
          "paragraphText": "La mémoire est la faculté de stocker des informations en vue d'une utilisation future.",
          "exercise": {
            "id": "terminale_a_svt_l02_activite_cerebrale_p06_q7",
            "type": "mcq",
            "prompt": "Un élève de Tle D demande à son ami de Tle A de définir la mémoire. Quelle est la bonne définition ?",
            "options": [
              "La faculté de stocker des informations en vue d'une utilisation future",
              "La perte des souvenirs",
              "La commande des muscles",
              "La production d'hormones"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La perte des souvenirs, c'est l'amnésie."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p06_q1",
          "type": "mcq",
          "prompt": "Quelles sont, dans l'ordre, les trois phases du mécanisme de la mémoire ?",
          "options": [
            "Restitution, acquisition, stockage",
            "Acquisition, consolidation et stockage, restitution",
            "Préparation, programmation, exécution",
            "Alarme, adaptation, épuisement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Préparation-programmation-exécution, c'est la motricité volontaire."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p06_q2",
          "type": "mcq",
          "prompt": "Vous vous rappelez une chanson que vous venez d'écouter. Selon le cours, l'information persiste dans des « circuits réverbérants ». De quelle phase de la mémoire s'agit-il ?",
          "options": [
            "L'acquisition",
            "La restitution",
            "L'exécution",
            "La programmation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les circuits fermés réinjectent la même information de façon répétée."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p06_q3",
          "type": "mcq",
          "prompt": "Selon le cours, sur quoi repose la consolidation d'un souvenir dans la mémoire à long terme ?",
          "options": [
            "Sur la mise en place de nouveaux circuits de neurones et la fabrication de protéines spécifiques",
            "Sur la sécrétion d'adrénaline",
            "Sur la contraction des muscles",
            "Sur la digestion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le neurone change de structure et de propriétés."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p06_q4",
          "type": "mcq",
          "prompt": "Vrai ou faux : « La restitution est la dernière phase du mécanisme mnésique (acquisition, consolidation et stockage, restitution). »",
          "options": [
            "Vrai",
            "Faux : c'est l'acquisition",
            "Faux : c'est le stockage",
            "Faux : c'est l'exécution"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On restitue un souvenir déjà acquis et stocké."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p06_q5",
          "type": "mcq",
          "prompt": "Après un choc violent à la tête lors d'un match, un élève voit des éclairs lumineux et ne reconnaît plus les membres de sa famille. Quelle aire est atteinte ?",
          "options": [
            "L'aire psycho-visuelle (lobe occipital)",
            "L'aire auditive",
            "L'aire gustative",
            "L'aire motrice de la jambe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La reconnaissance de ce qu'on voit dépend de l'aire psycho-visuelle."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p06_q6",
          "type": "mcq",
          "prompt": "Le même élève entend le mot que le médecin lui demande de dire, mais ne peut pas l'articuler, alors que les muscles de sa langue ne sont pas paralysés. Quelle aire est atteinte ?",
          "options": [
            "L'aire auditive",
            "L'aire d'articulation du langage verbal (aire de Broca)",
            "L'aire visuelle",
            "L'aire olfactive"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il entend (aire auditive intacte) ; la langue bouge (aire motrice de la langue intacte)."
        },
        {
          "id": "terminale_a_svt_l02_activite_cerebrale_p06_q7",
          "type": "mcq",
          "prompt": "Un élève de Tle D demande à son ami de Tle A de définir la mémoire. Quelle est la bonne définition ?",
          "options": [
            "La faculté de stocker des informations en vue d'une utilisation future",
            "La perte des souvenirs",
            "La commande des muscles",
            "La production d'hormones"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La perte des souvenirs, c'est l'amnésie."
        }
      ]
    }
  ]
};
