import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 3 : Le fonctionnement du muscle strié squelettique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2889
export const SVT_TLE_D_L03_FONCTIONNEMENT_MUSCLE_STRIE: CurriculumChapter = {
  "id": "terminale_d_svt_l03_fonctionnement_muscle_strie",
  "subjectId": "svt",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 3,
  "title": "Leçon 3 : Le fonctionnement du muscle strié squelettique",
  "summary": "Le muscle strié squelettique se contracte grâce à sa structure en sarcomères, par glissement des filaments d’actine le long des filaments de myosine, sous l’action des ions calcium et de l’énergie de l’ATP régénérée en permanence.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2889",
  "points": [
    {
      "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01",
      "order": 1,
      "title": "La structure du muscle : fibres, sarcomère et filaments",
      "summary": "Décrire le muscle, la fibre musculaire, le sarcomère et ses deux types de filaments.",
      "conceptExplanation": "Le muscle frais est constitué de plusieurs fibres musculaires regroupées en faisceaux de fibres musculaires.\nUne fibre musculaire est une cellule géante allongée comportant plusieurs noyaux, des fibrilles et des striations transversales ; l’ensemble baigne dans le sarcoplasme entouré du sarcolemme.\nÀ fort grossissement, la fibre présente une alternance de bande sombre, appelée bande B dans le texte, et de bande claire, appelée bande A dans le texte ; la bande sombre est traversée par la zone H et la bande claire par la strie Z.\nLa portion de fibre comprise entre deux stries Z consécutives est le sarcomère.\nLe sarcomère contient deux types de filaments : les filaments fins d’actine, constitués de troponine, de tropomyosine et d’actine G, et les filaments épais de myosine, constitués uniquement de molécules de myosine.",
      "keyRule": "Le sarcomère, entre deux stries Z, est l’unité où actine et myosine rendent la contraction possible.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier les éléments d’une fibre musculaire striée",
        "statement": "Sur l’ultrastructure d’une fibre musculaire, nomme la portion comprise entre deux stries Z et les deux types de filaments qu’elle contient.",
        "methodSteps": [
          "La portion entre deux stries Z consécutives est le sarcomère.",
          "Il contient des filaments fins d’actine.",
          "Il contient aussi des filaments épais de myosine."
        ],
        "conclusion": "Ce sont les définitions de l’analyse des documents sur la structure du muscle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Du muscle aux faisceaux de fibres",
          "stepTheme": "Du muscle aux faisceaux de fibres",
          "stepBadge": "Du muscle aux faisceaux de fibres",
          "paragraphText": "Le muscle frais est constitué de plusieurs fibres musculaires.\nCes fibres sont regroupées en faisceaux de fibres musculaires, avec des vaisseaux sanguins et du tissu conjonctif.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q1",
            "type": "mcq",
            "prompt": "Le muscle frais est constitué de :",
            "options": [
              "Une seule fibre géante",
              "Plusieurs fibres musculaires regroupées en faisceaux",
              "Uniquement de vaisseaux sanguins",
              "Sarcomères sans fibres"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Première phrase de l’analyse des résultats sur la structure."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La fibre musculaire",
          "stepTheme": "La fibre musculaire",
          "stepBadge": "La fibre musculaire",
          "paragraphText": "• Fibre musculaire : cellule géante allongée comportant plusieurs noyaux, des fibrilles et des striations transversales.\nSon contenu, le sarcoplasme, est entouré d’une membrane, le sarcolemme.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q2",
            "type": "mcq",
            "prompt": "La fibre musculaire est une cellule qui comporte :",
            "options": [
              "Un seul noyau et aucune striation",
              "Plusieurs noyaux et des striations transversales",
              "Uniquement du sarcoplasme sans membrane",
              "Des filaments sans fibrilles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Description de la fibre observée au microscope dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le sarcomère",
          "stepTheme": "Le sarcomère",
          "stepBadge": "Le sarcomère",
          "paragraphText": "• Sarcomère : portion de fibre comprise entre deux stries Z consécutives.\nC’est dans le sarcomère que s’observent les modifications de la contraction.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q3",
            "type": "mcq",
            "prompt": "Le sarcomère est délimité par :",
            "options": [
              "Deux zones H",
              "Deux stries Z consécutives",
              "Deux sarcolemmes",
              "Deux noyaux de la fibre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition donnée dans l’analyse de la structure."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Bandes, zone H et strie Z",
          "stepTheme": "Bandes, zone H et strie Z",
          "stepBadge": "Bandes, zone H et strie Z",
          "paragraphText": "Dans le texte de la leçon, la bande sombre est appelée bande B et la bande claire bande A.\nLa bande sombre est traversée par la zone H, alors que la bande claire est traversée par la strie Z.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q4",
            "type": "mcq",
            "prompt": "D’après le texte de la leçon, la zone H traverse :",
            "options": [
              "La bande claire",
              "La bande sombre",
              "La strie Z elle-même",
              "Le sarcolemme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte précise que la bande sombre est traversée par la zone H et la bande claire par la strie Z."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les filaments fins ne sont pas que de l’actine",
          "stepTheme": "Les filaments fins ne sont pas que de l’actine",
          "stepBadge": "Les filaments fins ne sont pas que de l’actine",
          "paragraphText": "Piège : réduire les filaments fins à la seule actine.\nLa leçon précise qu’ils sont constitués d’un agencement de trois protéines : la troponine, la tropomyosine et l’actine G, tandis que les filaments épais sont constitués uniquement de molécules de myosine.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q5",
            "type": "mcq",
            "prompt": "Les filaments fins d’actine sont constitués de :",
            "options": [
              "Myosine uniquement",
              "Troponine, tropomyosine et actine G",
              "Actine G uniquement, sans autre protéine",
              "Calcium et ATP"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Composition des filaments fins donnée dans l’analyse de la structure."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les filaments épais de myosine",
          "stepTheme": "Les filaments épais de myosine",
          "stepBadge": "Les filaments épais de myosine",
          "paragraphText": "Les filaments épais du sarcomère sont les filaments de myosine.\nLa leçon précise qu’ils sont constitués uniquement de molécules de myosine, contrairement aux filaments fins qui associent trois protéines.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q6",
            "type": "mcq",
            "prompt": "Les filaments épais de myosine sont constitués :",
            "options": [
              "De troponine et de tropomyosine",
              "D’actine G seulement",
              "Uniquement de molécules de myosine",
              "De calcium"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Phrase de la leçon sur la composition des filaments épais."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q1",
          "type": "mcq",
          "prompt": "Le muscle frais est constitué de :",
          "options": [
            "Une seule fibre géante",
            "Plusieurs fibres musculaires regroupées en faisceaux",
            "Uniquement de vaisseaux sanguins",
            "Sarcomères sans fibres"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Première phrase de l’analyse des résultats sur la structure."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q2",
          "type": "mcq",
          "prompt": "La fibre musculaire est une cellule qui comporte :",
          "options": [
            "Un seul noyau et aucune striation",
            "Plusieurs noyaux et des striations transversales",
            "Uniquement du sarcoplasme sans membrane",
            "Des filaments sans fibrilles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Description de la fibre observée au microscope dans la leçon."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q3",
          "type": "mcq",
          "prompt": "Le sarcomère est délimité par :",
          "options": [
            "Deux zones H",
            "Deux stries Z consécutives",
            "Deux sarcolemmes",
            "Deux noyaux de la fibre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition donnée dans l’analyse de la structure."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q4",
          "type": "mcq",
          "prompt": "D’après le texte de la leçon, la zone H traverse :",
          "options": [
            "La bande claire",
            "La bande sombre",
            "La strie Z elle-même",
            "Le sarcolemme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte précise que la bande sombre est traversée par la zone H et la bande claire par la strie Z."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q5",
          "type": "mcq",
          "prompt": "Les filaments fins d’actine sont constitués de :",
          "options": [
            "Myosine uniquement",
            "Troponine, tropomyosine et actine G",
            "Actine G uniquement, sans autre protéine",
            "Calcium et ATP"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Composition des filaments fins donnée dans l’analyse de la structure."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p01_q6",
          "type": "mcq",
          "prompt": "Les filaments épais de myosine sont constitués :",
          "options": [
            "De troponine et de tropomyosine",
            "D’actine G seulement",
            "Uniquement de molécules de myosine",
            "De calcium"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Phrase de la leçon sur la composition des filaments épais."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02",
      "order": 2,
      "title": "Le mécanisme de la contraction : attachement, glissement, détachement",
      "summary": "Expliquer le rôle des ions calcium et de l’ATP dans les trois phases de la contraction du sarcomère.",
      "conceptExplanation": "Le passage du sarcomère au repos au sarcomère contracté se caractérise par le raccourcissement de la zone H, la diminution du sarcomère, la réduction de la longueur de la bande claire et la constance de la longueur de la bande sombre ; la longueur de l’actine et de la myosine ne change pas.\nAu repos, la tropomyosine masque les sites d’attachement actomyosine.\nLorsque le muscle est excité, les ions calcium du réticulum sarcoplasmique sont libérés, se fixent sur la troponine qui repousse la tropomyosine et démasque les sites ; l’ATP se fixe sur la tête de myosine et la liaison ou pont actomyosine s’établit : c’est la phase d’attachement.\nL’actine active ensuite la myosine qui hydrolyse l’ATP en ADP plus phosphate inorganique plus énergie ; cette énergie fait pivoter la tête de myosine et glisser l’actine : c’est la phase de glissement. Une nouvelle molécule d’ATP rompt la liaison : c’est la phase de détachement, suivie du relâchement quand les ions calcium sont réabsorbés.",
      "keyRule": "Calcium égale démasquage des sites, hydrolyse de l’ATP égale pivotement et glissement, nouvel ATP égale détachement.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte sur la plaque motrice et la contraction (exercice 1 de consolidation)",
        "statement": "Complète la fin du texte de l’exercice 1 : les ions calcium se fixent sur la troponine pour libérer le site d’attachement de la tête de myosine ; la tête fixe l’ATP et se lie à l’actine ; l’hydrolyse fournit l’énergie du pivotement ; une nouvelle molécule d’ATP provoque le détachement.",
        "methodSteps": [
          "Les ions calcium libérés dans le sarcoplasme se fixent sur les troponines et libèrent le site d’attachement.",
          "La tête de myosine fixe une molécule d’ATP et se fixe à l’actine : c’est la phase d’attachement, le pont actomyosine.",
          "L’hydrolyse de l’ATP fournit l’énergie du pivotement de la tête et du glissement des filaments fins entre les filaments épais.",
          "Une nouvelle molécule d’ATP se fixe : détachement, retour à l’état initial et repompage actif des ions calcium, c’est la relaxation."
        ],
        "conclusion": "Ce sont les réponses attendues dans le texte à compléter de l’exercice 1, avec les mots fournis par l’énoncé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qui change dans le sarcomère contracté",
          "stepTheme": "Ce qui change dans le sarcomère contracté",
          "stepBadge": "Ce qui change dans le sarcomère contracté",
          "paragraphText": "Lors de la contraction, la zone H se raccourcit et la longueur du sarcomère diminue.\nLa bande claire se réduit, mais la longueur de la bande sombre reste constante.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q1",
            "type": "mcq",
            "prompt": "Lors du passage du sarcomère au repos au sarcomère contracté, on observe :",
            "options": [
              "Un allongement de la zone H",
              "Le raccourcissement de la zone H et la diminution du sarcomère",
              "L’allongement des filaments d’actine",
              "L’augmentation de la bande sombre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Liste des modifications donnée dans l’analyse des documents du mécanisme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La longueur des filaments ne change pas",
          "stepTheme": "La longueur des filaments ne change pas",
          "stepBadge": "La longueur des filaments ne change pas",
          "paragraphText": "La leçon insiste : la longueur de l’actine et de la myosine ne change pas pendant la contraction.\nLe raccourcissement du sarcomère vient du glissement des filaments les uns par rapport aux autres, pas de leur contraction propre.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q2",
            "type": "mcq",
            "prompt": "Pendant la contraction du sarcomère, la longueur des filaments d’actine et de myosine :",
            "options": [
              "Diminue de moitié",
              "Augmente",
              "Ne change pas",
              "Devient nulle dans la zone H"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Dernière modification listée dans l’analyse : la longueur de l’actine et de la myosine ne change pas."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La phase d’attachement",
          "stepTheme": "La phase d’attachement",
          "stepBadge": "La phase d’attachement",
          "paragraphText": "• Phase d’attachement : établissement de la liaison ou pont actomyosine, après démasquage des sites.\nLes ions calcium se fixent sur la troponine, qui repousse la tropomyosine, et l’ATP se fixe sur la tête de myosine.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q3",
            "type": "mcq",
            "prompt": "La phase d’attachement correspond à :",
            "options": [
              "La rupture de la liaison actomyosine",
              "L’établissement du pont actomyosine après action des ions calcium",
              "La réabsorption des ions calcium",
              "Le relâchement complet du muscle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation des résultats sur le mécanisme de la contraction."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La phase de glissement ou pivotement",
          "stepTheme": "La phase de glissement ou pivotement",
          "stepBadge": "La phase de glissement ou pivotement",
          "paragraphText": "Pendant le glissement, l’actine active la myosine qui hydrolyse l’ATP fixé en produisant ADP, phosphate inorganique et énergie.\nCette énergie fait pivoter la tête de myosine et fait glisser les filaments d’actine le long de la myosine, avec diminution de la zone H.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q4",
            "type": "mcq",
            "prompt": "L’énergie du pivotement de la tête de myosine provient de :",
            "options": [
              "La synthèse d’ATP",
              "L’hydrolyse de l’ATP en ADP plus phosphate inorganique plus énergie",
              "La réabsorption du calcium",
              "La fermentation lactique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la phase de glissement dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Au repos, les sites sont masqués",
          "stepTheme": "Au repos, les sites sont masqués",
          "stepBadge": "Au repos, les sites sont masqués",
          "paragraphText": "Piège : croire qu’au repos l’actine et la myosine sont déjà liées et prêtes à glisser.\nAu repos, la tropomyosine masque les sites d’attachement actomyosine et les deux filaments ne sont pas liés.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q5",
            "type": "mcq",
            "prompt": "Au repos, les sites d’attachement actomyosine sont :",
            "options": [
              "Démasqués par les ions calcium",
              "Masqués par la tropomyosine",
              "Occupés par l’ATP hydrolysé",
              "Détruits"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Première phrase de l’interprétation du mécanisme : au repos, la tropomyosine masque les sites."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La phase de détachement et le relâchement",
          "stepTheme": "La phase de détachement et le relâchement",
          "stepBadge": "La phase de détachement et le relâchement",
          "paragraphText": "Une nouvelle molécule d’ATP se fixe sur la tête de myosine et la liaison actomyosine se rompt : c’est le détachement.\nLes ions calcium sont ensuite réabsorbés et le muscle se relâche.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q6",
            "type": "mcq",
            "prompt": "Le détachement de l’actine et de la myosine est provoqué par :",
            "options": [
              "La fixation d’une nouvelle molécule d’ATP sur la tête de myosine",
              "L’hydrolyse du calcium",
              "L’arrivée d’un nouvel influx sans ATP",
              "La disparition de la troponine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Interprétation de la phase de détachement dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q1",
          "type": "mcq",
          "prompt": "Lors du passage du sarcomère au repos au sarcomère contracté, on observe :",
          "options": [
            "Un allongement de la zone H",
            "Le raccourcissement de la zone H et la diminution du sarcomère",
            "L’allongement des filaments d’actine",
            "L’augmentation de la bande sombre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Liste des modifications donnée dans l’analyse des documents du mécanisme."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q2",
          "type": "mcq",
          "prompt": "Pendant la contraction du sarcomère, la longueur des filaments d’actine et de myosine :",
          "options": [
            "Diminue de moitié",
            "Augmente",
            "Ne change pas",
            "Devient nulle dans la zone H"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Dernière modification listée dans l’analyse : la longueur de l’actine et de la myosine ne change pas."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q3",
          "type": "mcq",
          "prompt": "La phase d’attachement correspond à :",
          "options": [
            "La rupture de la liaison actomyosine",
            "L’établissement du pont actomyosine après action des ions calcium",
            "La réabsorption des ions calcium",
            "Le relâchement complet du muscle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation des résultats sur le mécanisme de la contraction."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q4",
          "type": "mcq",
          "prompt": "L’énergie du pivotement de la tête de myosine provient de :",
          "options": [
            "La synthèse d’ATP",
            "L’hydrolyse de l’ATP en ADP plus phosphate inorganique plus énergie",
            "La réabsorption du calcium",
            "La fermentation lactique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la phase de glissement dans la leçon."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q5",
          "type": "mcq",
          "prompt": "Au repos, les sites d’attachement actomyosine sont :",
          "options": [
            "Démasqués par les ions calcium",
            "Masqués par la tropomyosine",
            "Occupés par l’ATP hydrolysé",
            "Détruits"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Première phrase de l’interprétation du mécanisme : au repos, la tropomyosine masque les sites."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p02_q6",
          "type": "mcq",
          "prompt": "Le détachement de l’actine et de la myosine est provoqué par :",
          "options": [
            "La fixation d’une nouvelle molécule d’ATP sur la tête de myosine",
            "L’hydrolyse du calcium",
            "L’arrivée d’un nouvel influx sans ATP",
            "La disparition de la troponine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Interprétation de la phase de détachement dans la leçon."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03",
      "order": 3,
      "title": "Phénomènes électriques : potentiel d’action musculaire et myogramme",
      "summary": "Relier le potentiel de membrane musculaire, l’électromyogramme et les trois phases du myogramme.",
      "conceptExplanation": "Le potentiel de repos musculaire est de moins 85 millivolts.\nLe potentiel d’action musculaire ou électromyogramme se situe dans le temps de latence de la secousse et précède toujours le myogramme, car c’est lui qui déclenche la contraction musculaire.\nLe myogramme, obtenu grâce au myographe, comprend trois étapes : le temps de latence, la phase de contraction et la phase de relâchement.\nLe potentiel de membrane musculaire est dû à une inégale répartition des ions sodium et potassium de part et d’autre de la membrane, maintenue par la pompe ionique sodium-potassium ATPase ; la dépolarisation est due à une entrée massive de sodium et la repolarisation à une sortie de potassium.",
      "keyRule": "L’électromyogramme précède toujours le myogramme : le phénomène électrique déclenche le phénomène mécanique.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer pourquoi le potentiel d’action précède le myogramme",
        "statement": "Sur l’enregistrement simultané des aspects électrique et mécanique, le potentiel d’action se place dans le temps de latence de la secousse. Explique cette position.",
        "methodSteps": [
          "Le potentiel d’action musculaire apparaît avant toute réponse mécanique, pendant le temps de latence.",
          "Il provoque les mouvements ioniques puis la libération des ions calcium à l’origine de la contraction.",
          "Le myogramme ne peut donc commencer qu’après lui."
        ],
        "conclusion": "Interprétation de la leçon : le potentiel d’action précède le myogramme car c’est lui qui déclenche la contraction."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le potentiel de repos musculaire",
          "stepTheme": "Le potentiel de repos musculaire",
          "stepBadge": "Le potentiel de repos musculaire",
          "paragraphText": "• Potentiel de repos musculaire : valeur du potentiel de membrane de la fibre musculaire au repos.\nLa leçon donne une valeur de moins 85 millivolts, qui varie de moins 85 à moins 20 millivolts lors de l’activité selon le texte.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q1",
            "type": "mcq",
            "prompt": "Le potentiel de repos musculaire vaut, d’après la leçon :",
            "options": [
              "Moins 70 millivolts",
              "Moins 85 millivolts",
              "0 millivolt",
              "Plus 85 millivolts"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse des résultats de l’expérience comparant les aspects mécanique et électrique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Électromyogramme et myogramme",
          "stepTheme": "Électromyogramme et myogramme",
          "stepBadge": "Électromyogramme et myogramme",
          "paragraphText": "• Électromyogramme : enregistrement du potentiel d’action musculaire, aspect électrique de la contraction.\n• Myogramme : enregistrement mécanique de la secousse, obtenu grâce au myographe.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q2",
            "type": "mcq",
            "prompt": "Le myogramme est obtenu grâce à un dispositif appelé :",
            "options": [
              "L’oscilloscope",
              "Le cardiographe",
              "Le myographe",
              "L’électrocardiographe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise que le myogramme est obtenu grâce au myographe."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les trois phases du myogramme",
          "stepTheme": "Les trois phases du myogramme",
          "stepBadge": "Les trois phases du myogramme",
          "paragraphText": "Le myogramme comprend trois étapes.\n• Le temps de latence.\n• La phase de contraction.\n• La phase de relâchement.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q3",
            "type": "mcq",
            "prompt": "Les trois étapes du myogramme sont, dans l’ordre :",
            "options": [
              "Contraction, latence, relâchement",
              "Latence, contraction, relâchement",
              "Relâchement, latence, contraction",
              "Latence, relâchement, contraction"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Liste des trois étapes donnée dans l’analyse des résultats."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’électromyogramme précède le myogramme",
          "stepTheme": "L’électromyogramme précède le myogramme",
          "stepBadge": "L’électromyogramme précède le myogramme",
          "paragraphText": "Le potentiel d’action musculaire se situe dans le temps de latence de la secousse.\nL’électromyogramme précède donc toujours le myogramme.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q4",
            "type": "mcq",
            "prompt": "Sur les enregistrements, l’électromyogramme se situe :",
            "options": [
              "Après la phase de relâchement",
              "Dans le temps de latence de la secousse, avant le myogramme",
              "Uniquement après la contraction",
              "En même temps que la fin du myogramme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse des résultats de l’expérience de comparaison des deux aspects."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ce n’est pas la contraction qui crée le potentiel",
          "stepTheme": "Ce n’est pas la contraction qui crée le potentiel",
          "stepBadge": "Ce n’est pas la contraction qui crée le potentiel",
          "paragraphText": "Piège : inverser la cause et l’effet entre phénomène électrique et phénomène mécanique.\nLa leçon dit que le potentiel d’action précède le myogramme car c’est lui qui déclenche la contraction musculaire.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q5",
            "type": "mcq",
            "prompt": "Le potentiel d’action précède le myogramme parce que :",
            "options": [
              "La contraction produit d’abord le potentiel",
              "C’est lui qui déclenche la contraction musculaire",
              "Le myographe est plus lent que l’électrode sans raison",
              "La secousse crée les ions calcium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dernière phrase de l’interprétation des résultats électriques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Dépolarisation et repolarisation musculaires",
          "stepTheme": "Dépolarisation et repolarisation musculaires",
          "stepBadge": "Dépolarisation et repolarisation musculaires",
          "paragraphText": "La dépolarisation musculaire est due à une entrée massive de sodium dans la fibre après ouverture des canaux voltage dépendants à sodium.\nLa repolarisation est due à une sortie de potassium après ouverture des canaux voltage dépendants à potassium et fermeture des canaux à sodium.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q6",
            "type": "mcq",
            "prompt": "La repolarisation de la fibre musculaire est due à :",
            "options": [
              "Une entrée massive de sodium",
              "Une sortie de potassium de la fibre musculaire",
              "Une entrée de calcium seulement",
              "L’hydrolyse de l’ATP"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation des résultats sur le potentiel de membrane musculaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q1",
          "type": "mcq",
          "prompt": "Le potentiel de repos musculaire vaut, d’après la leçon :",
          "options": [
            "Moins 70 millivolts",
            "Moins 85 millivolts",
            "0 millivolt",
            "Plus 85 millivolts"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse des résultats de l’expérience comparant les aspects mécanique et électrique."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q2",
          "type": "mcq",
          "prompt": "Le myogramme est obtenu grâce à un dispositif appelé :",
          "options": [
            "L’oscilloscope",
            "Le cardiographe",
            "Le myographe",
            "L’électrocardiographe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise que le myogramme est obtenu grâce au myographe."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q3",
          "type": "mcq",
          "prompt": "Les trois étapes du myogramme sont, dans l’ordre :",
          "options": [
            "Contraction, latence, relâchement",
            "Latence, contraction, relâchement",
            "Relâchement, latence, contraction",
            "Latence, relâchement, contraction"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Liste des trois étapes donnée dans l’analyse des résultats."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q4",
          "type": "mcq",
          "prompt": "Sur les enregistrements, l’électromyogramme se situe :",
          "options": [
            "Après la phase de relâchement",
            "Dans le temps de latence de la secousse, avant le myogramme",
            "Uniquement après la contraction",
            "En même temps que la fin du myogramme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse des résultats de l’expérience de comparaison des deux aspects."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q5",
          "type": "mcq",
          "prompt": "Le potentiel d’action précède le myogramme parce que :",
          "options": [
            "La contraction produit d’abord le potentiel",
            "C’est lui qui déclenche la contraction musculaire",
            "Le myographe est plus lent que l’électrode sans raison",
            "La secousse crée les ions calcium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dernière phrase de l’interprétation des résultats électriques."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p03_q6",
          "type": "mcq",
          "prompt": "La repolarisation de la fibre musculaire est due à :",
          "options": [
            "Une entrée massive de sodium",
            "Une sortie de potassium de la fibre musculaire",
            "Une entrée de calcium seulement",
            "L’hydrolyse de l’ATP"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation des résultats sur le potentiel de membrane musculaire."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04",
      "order": 4,
      "title": "Réponses aux stimulations successives : secousses, tétanos et fatigue",
      "summary": "Décrire les réponses du muscle à deux puis à plusieurs stimulations successives et la fatigue musculaire.",
      "conceptExplanation": "Lorsque la deuxième stimulation intervient après la secousse précédente, on obtient une deuxième secousse de même amplitude ; lorsqu’elle intervient pendant la phase de relâchement, la deuxième secousse est d’amplitude plus grande ; lorsqu’elle intervient pendant la phase de contraction, on obtient une seule secousse d’amplitude plus élevée.\nL’augmentation d’amplitude s’explique par le phénomène de sommation des réponses des différentes fibres musculaires.\nAvec plusieurs stimulations pendant les phases de relâchement, on obtient une courbe en dents de scie appelée tétanos imparfait, fusion incomplète des réponses ; pendant les phases de contraction, on obtient une courbe en plateau appelée tétanos parfait, fusion complète.\nUn muscle qui reçoit plusieurs stimulations pendant une longue durée se fatigue : sa secousse présente une amplitude faible et des durées de contraction et de relâchement plus longues ; la fatigue est à l’origine de crampes et de douleurs musculaires.\nLa conclusion précise que le muscle obéit à la loi de sommation alors que la fibre musculaire obéit à la loi du tout ou rien.",
      "keyRule": "Dents de scie égale tétanos imparfait, plateau égale tétanos parfait ; muscle égale sommation, fibre égale tout ou rien.",
      "formulas": [],
      "workedExample": {
        "title": "Associer les figures de réponses aux stimulations (exercice 2 de consolidation)",
        "statement": "Fais correspondre les trois types de réponses aux stimulations efficaces : secousse isolée, tétanos imparfait en dents de scie et tétanos parfait en plateau.",
        "methodSteps": [
          "Une stimulation isolée donne une secousse isolée avec latence, contraction et relâchement.",
          "Des stimulations pendant les relâchements donnent une courbe en dents de scie : tétanos imparfait.",
          "Des stimulations pendant les contractions donnent une courbe en plateau : tétanos parfait."
        ],
        "conclusion": "C’est la correspondance demandée dans l’exercice 2 de consolidation de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux secousses séparées",
          "stepTheme": "Deux secousses séparées",
          "stepBadge": "Deux secousses séparées",
          "paragraphText": "Lorsque la deuxième stimulation intervient après la fin de la secousse précédente, le muscle a retrouvé sa polarité.\nOn obtient alors une deuxième secousse de même amplitude que la précédente.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q1",
            "type": "mcq",
            "prompt": "Si la deuxième stimulation arrive après la fin de la première secousse, la deuxième secousse est :",
            "options": [
              "D’amplitude plus grande",
              "Absente",
              "De même amplitude que la précédente",
              "Fusionnée en plateau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse des réponses du muscle à deux stimulations successives."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Stimulation pendant le relâchement",
          "stepTheme": "Stimulation pendant le relâchement",
          "stepBadge": "Stimulation pendant le relâchement",
          "paragraphText": "Lorsque la deuxième stimulation intervient pendant la phase de relâchement de la secousse précédente, la réponse se superpose à la fin de la première.\nOn obtient une deuxième secousse d’amplitude plus grande que la précédente.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q2",
            "type": "mcq",
            "prompt": "Une stimulation pendant la phase de relâchement donne une deuxième secousse :",
            "options": [
              "D’amplitude plus grande que la précédente",
              "D’amplitude nulle",
              "Identique mais retardée d’une minute",
              "Sans aucune superposition"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse des réponses à deux stimulations successives."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le tétanos imparfait",
          "stepTheme": "Le tétanos imparfait",
          "stepBadge": "Le tétanos imparfait",
          "paragraphText": "• Tétanos imparfait : courbe en dents de scie obtenue quand les stimulations sont portées pendant la phase de relâchement des secousses précédentes.\nIl correspond à une fusion incomplète des réponses des fibres musculaires.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q3",
            "type": "mcq",
            "prompt": "La courbe en dents de scie correspond au :",
            "options": [
              "Tétanos parfait",
              "Tétanos imparfait, fusion incomplète des réponses",
              "Repos du muscle",
              "Muscle fatigué sans stimulation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation des réponses à plusieurs stimulations successives."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le tétanos parfait",
          "stepTheme": "Le tétanos parfait",
          "stepBadge": "Le tétanos parfait",
          "paragraphText": "• Tétanos parfait : courbe sous forme de plateau obtenue quand les stimulations sont portées pendant la phase de contraction des secousses précédentes.\nIl correspond à une fusion complète des réponses des fibres musculaires.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q4",
            "type": "mcq",
            "prompt": "Le tétanos parfait se reconnaît à :",
            "options": [
              "Une courbe en dents de scie",
              "Une seule secousse isolée",
              "Une courbe sous forme de plateau, fusion complète des réponses",
              "Une amplitude qui tombe à zéro"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation des réponses à plusieurs stimulations successives."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Muscle et fibre n’obéissent pas à la même loi",
          "stepTheme": "Muscle et fibre n’obéissent pas à la même loi",
          "stepBadge": "Muscle et fibre n’obéissent pas à la même loi",
          "paragraphText": "Piège : attribuer la loi du tout ou rien au muscle entier.\nLa conclusion de la partie stimulations dit que le muscle obéit à la loi de sommation, alors que la fibre musculaire obéit à la loi du tout ou rien.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q5",
            "type": "mcq",
            "prompt": "D’après la conclusion de la leçon, le muscle entier obéit à la loi de :",
            "options": [
              "Tout ou rien",
              "Sommation",
              "Markovnikov",
              "L’extinction"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la partie sur les stimulations successives."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La secousse d’un muscle fatigué",
          "stepTheme": "La secousse d’un muscle fatigué",
          "stepBadge": "La secousse d’un muscle fatigué",
          "paragraphText": "Lorsqu’un muscle reçoit plusieurs stimulations pendant une longue durée, il se fatigue.\nSa secousse présente alors une amplitude faible et une durée de contraction et de relâchement plus longue ; la fatigue est à l’origine de crampes et de douleurs musculaires.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q6",
            "type": "mcq",
            "prompt": "La secousse d’un muscle fatigué présente :",
            "options": [
              "Une amplitude plus forte et plus brève",
              "Une amplitude faible et des phases de contraction et de relâchement plus longues",
              "Aucune différence avec un muscle normal",
              "Un plateau de tétanos parfait permanent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Description de la réponse comparée d’un muscle normal et d’un muscle fatigué."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q1",
          "type": "mcq",
          "prompt": "Si la deuxième stimulation arrive après la fin de la première secousse, la deuxième secousse est :",
          "options": [
            "D’amplitude plus grande",
            "Absente",
            "De même amplitude que la précédente",
            "Fusionnée en plateau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse des réponses du muscle à deux stimulations successives."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q2",
          "type": "mcq",
          "prompt": "Une stimulation pendant la phase de relâchement donne une deuxième secousse :",
          "options": [
            "D’amplitude plus grande que la précédente",
            "D’amplitude nulle",
            "Identique mais retardée d’une minute",
            "Sans aucune superposition"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse des réponses à deux stimulations successives."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q3",
          "type": "mcq",
          "prompt": "La courbe en dents de scie correspond au :",
          "options": [
            "Tétanos parfait",
            "Tétanos imparfait, fusion incomplète des réponses",
            "Repos du muscle",
            "Muscle fatigué sans stimulation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation des réponses à plusieurs stimulations successives."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q4",
          "type": "mcq",
          "prompt": "Le tétanos parfait se reconnaît à :",
          "options": [
            "Une courbe en dents de scie",
            "Une seule secousse isolée",
            "Une courbe sous forme de plateau, fusion complète des réponses",
            "Une amplitude qui tombe à zéro"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation des réponses à plusieurs stimulations successives."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q5",
          "type": "mcq",
          "prompt": "D’après la conclusion de la leçon, le muscle entier obéit à la loi de :",
          "options": [
            "Tout ou rien",
            "Sommation",
            "Markovnikov",
            "L’extinction"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la partie sur les stimulations successives."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p04_q6",
          "type": "mcq",
          "prompt": "La secousse d’un muscle fatigué présente :",
          "options": [
            "Une amplitude plus forte et plus brève",
            "Une amplitude faible et des phases de contraction et de relâchement plus longues",
            "Aucune différence avec un muscle normal",
            "Un plateau de tétanos parfait permanent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Description de la réponse comparée d’un muscle normal et d’un muscle fatigué."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05",
      "order": 5,
      "title": "L’énergie de la contraction : mesures et voies rapides de régénération de l’ATP",
      "summary": "Comparer le muscle au repos et en activité, puis décrire les deux voies rapides de régénération de l’ATP.",
      "conceptExplanation": "En activité, les quantités de dioxygène utilisé, de dioxyde de carbone produit et d’acide lactique produit augmentent, alors que la quantité de glycogène diminue ; la quantité d’ATP reste constante, de 4 à 6 milligrammes par gramme de muscle frais, au repos comme en activité.\nL’ATP reste constante parce qu’elle est régénérée ou renouvelée.\nIl existe deux voies rapides : la voie de la myokinase, qui transforme deux ADP en ATP plus AMP, et la voie de la phosphocréatinase, où l’ADP plus la phosphocréatine donnent ATP plus créatine.\nLe muscle en activité consomme du dioxygène et produit des déchets tels que le dioxyde de carbone et l’acide lactique ; la diminution du glycogène vient de sa décomposition en glucose pour produire de l’énergie.",
      "keyRule": "ATP constante ne veut pas dire ATP inutilisée : elle est hydrolysée puis aussitôt régénérée, d’abord par les voies rapides.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser le tableau des constituants du muscle au repos et en activité",
        "statement": "Dans le tableau de la leçon, le dioxygène utilisé passe de 0,307 litre au repos à 5,207 litres en activité, le dioxyde de carbone produit de 0,220 à 5,950 litres, et l’ATP reste de 4 à 6 milligrammes par gramme. Analyse ces variations.",
        "methodSteps": [
          "Le muscle en activité consomme beaucoup plus de dioxygène et rejette beaucoup plus de dioxyde de carbone que le muscle au repos.",
          "L’acide lactique, absent au repos dans le tableau, apparaît en activité à 1,958 gramme.",
          "L’ATP ne varie pas : elle est régénérée au fur et à mesure de son utilisation."
        ],
        "conclusion": "Ce sont les analyses et interprétations du tableau de mesure des constituants du muscle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La constance de l’ATP",
          "stepTheme": "La constance de l’ATP",
          "stepBadge": "La constance de l’ATP",
          "paragraphText": "Dans le tableau, l’ATP utilisé vaut 4 à 6 milligrammes par gramme de muscle frais, au repos comme en activité.\nCette constance s’explique par la régénération permanente de l’ATP.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q1",
            "type": "mcq",
            "prompt": "La quantité d’ATP du muscle en activité, par rapport au repos, est :",
            "options": [
              "Beaucoup plus élevée",
              "Nulle",
              "Constante, car l’ATP est régénérée",
              "Toujours en diminution définitive"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du tableau et interprétation : l’ATP reste constante parce qu’elle est renouvelée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Consommation et productions en activité",
          "stepTheme": "Consommation et productions en activité",
          "stepBadge": "Consommation et productions en activité",
          "paragraphText": "En activité, la quantité de dioxygène utilisé augmente fortement, de même que le dioxyde de carbone produit.\nL’acide lactique produit passe de 0 gramme au repos à 1,958 gramme en activité dans le tableau.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q2",
            "type": "mcq",
            "prompt": "En activité, d’après le tableau de la leçon, le muscle produit :",
            "options": [
              "Moins de dioxyde de carbone qu’au repos",
              "De l’acide lactique, absent au repos",
              "Des protides en grande quantité",
              "Aucun déchet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Valeurs du tableau : acide lactique 0 gramme au repos et 1,958 gramme en activité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le sort du glycogène",
          "stepTheme": "Le sort du glycogène",
          "stepBadge": "Le sort du glycogène",
          "paragraphText": "En activité, la quantité de glycogène diminue.\nLa leçon explique cette diminution par la décomposition du glycogène en molécules de glucose pour la production d’énergie.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q3",
            "type": "mcq",
            "prompt": "La diminution du glycogène en activité est due à :",
            "options": [
              "Sa transformation en protides",
              "Sa décomposition en glucose pour produire de l’énergie",
              "Son élimination dans l’urine",
              "Sa conversion en acide lactique sans glucose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation du tableau des constituants du muscle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La voie de la myokinase",
          "stepTheme": "La voie de la myokinase",
          "stepBadge": "La voie de la myokinase",
          "paragraphText": "• Voie de la myokinase : voie rapide de régénération où deux molécules d’ADP donnent une molécule d’ATP et une molécule d’AMP, sous l’action de la myokinase.\nC’est l’une des deux voies rapides citées par la leçon.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q4",
            "type": "mcq",
            "prompt": "La voie de la myokinase régénère l’ATP à partir de :",
            "options": [
              "Glucose et dioxygène",
              "Deux ADP donnant ATP plus AMP",
              "Phosphocréatine seulement",
              "Acide lactique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Équation de la voie de la myokinase donnée dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les deux voies rapides",
          "stepTheme": "Ne pas confondre les deux voies rapides",
          "stepBadge": "Ne pas confondre les deux voies rapides",
          "paragraphText": "Piège : attribuer la phosphocréatine à la myokinase.\nLa phosphocréatine intervient dans la voie de la phosphocréatinase, où ADP plus phosphocréatine donnent ATP plus créatine.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q5",
            "type": "mcq",
            "prompt": "Dans la voie de la phosphocréatinase, l’ADP se combine avec :",
            "options": [
              "L’AMP",
              "La phosphocréatine, pour donner ATP plus créatine",
              "Le glycogène directement",
              "L’acide pyruvique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Équation de la voie de la phosphocréatinase donnée dans la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les protides dans le tableau",
          "stepTheme": "Les protides dans le tableau",
          "stepBadge": "Les protides dans le tableau",
          "paragraphText": "Le tableau indique des protides utilisés de 0 au repos comme en activité.\nLe muscle en activité n’utilise donc pas les protides comme source mesurée dans cette expérience, mais bien les glucides.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q6",
            "type": "mcq",
            "prompt": "D’après le tableau, les protides utilisés par le muscle en activité valent :",
            "options": [
              "8,432 grammes",
              "1,958 gramme",
              "0, comme au repos",
              "5,950 litres"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ligne des protides du tableau de mesure des constituants du muscle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q1",
          "type": "mcq",
          "prompt": "La quantité d’ATP du muscle en activité, par rapport au repos, est :",
          "options": [
            "Beaucoup plus élevée",
            "Nulle",
            "Constante, car l’ATP est régénérée",
            "Toujours en diminution définitive"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du tableau et interprétation : l’ATP reste constante parce qu’elle est renouvelée."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q2",
          "type": "mcq",
          "prompt": "En activité, d’après le tableau de la leçon, le muscle produit :",
          "options": [
            "Moins de dioxyde de carbone qu’au repos",
            "De l’acide lactique, absent au repos",
            "Des protides en grande quantité",
            "Aucun déchet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Valeurs du tableau : acide lactique 0 gramme au repos et 1,958 gramme en activité."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q3",
          "type": "mcq",
          "prompt": "La diminution du glycogène en activité est due à :",
          "options": [
            "Sa transformation en protides",
            "Sa décomposition en glucose pour produire de l’énergie",
            "Son élimination dans l’urine",
            "Sa conversion en acide lactique sans glucose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation du tableau des constituants du muscle."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q4",
          "type": "mcq",
          "prompt": "La voie de la myokinase régénère l’ATP à partir de :",
          "options": [
            "Glucose et dioxygène",
            "Deux ADP donnant ATP plus AMP",
            "Phosphocréatine seulement",
            "Acide lactique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Équation de la voie de la myokinase donnée dans la leçon."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q5",
          "type": "mcq",
          "prompt": "Dans la voie de la phosphocréatinase, l’ADP se combine avec :",
          "options": [
            "L’AMP",
            "La phosphocréatine, pour donner ATP plus créatine",
            "Le glycogène directement",
            "L’acide pyruvique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Équation de la voie de la phosphocréatinase donnée dans la leçon."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p05_q6",
          "type": "mcq",
          "prompt": "D’après le tableau, les protides utilisés par le muscle en activité valent :",
          "options": [
            "8,432 grammes",
            "1,958 gramme",
            "0, comme au repos",
            "5,950 litres"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ligne des protides du tableau de mesure des constituants du muscle."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06",
      "order": 6,
      "title": "Les voies lentes : glycolyse, fermentation lactique et respiration cellulaire",
      "summary": "Comparer les rendements en ATP de la fermentation lactique et de la respiration cellulaire selon la leçon.",
      "conceptExplanation": "Les voies lentes débutent par la dégradation du glucose en deux acides pyruviques avec production de 8 molécules d’ATP : c’est la glycolyse, selon le texte de la leçon.\nLes deux acides pyruviques peuvent rester dans le hyaloplasme et subir la fermentation lactique ou voie anaérobie, en absence d’oxygène ; le texte indique que cette fermentation entraîne la perte de 8 molécules d’ATP et que cette voie produit 2 ATP selon le calcul écrit dans le texte.\nLes deux acides pyruviques peuvent aussi pénétrer dans la mitochondrie et subir le cycle de Krebs en présence d’oxygène : c’est la voie aérobie ou respiration cellulaire, qui produit du dioxyde de carbone et de l’eau.\nChaque acide pyruvique produit 15 molécules d’ATP, soit 30 ATP pour les deux ; la respiration cellulaire produit au total 8 ATP plus 30 ATP, soit 38 ATP, selon l’équation bilan de la dégradation du glucose donnée par la leçon.",
      "keyRule": "Selon le texte : fermentation lactique égale 2 ATP nets affichés, respiration cellulaire égale 38 ATP au total.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer le bilan de la respiration cellulaire selon la leçon",
        "statement": "À partir des nombres du texte, calcule le nombre total de molécules d’ATP produites par la respiration cellulaire d’une molécule de glucose.",
        "methodSteps": [
          "La glycolyse produit 8 molécules d’ATP en dégradant le glucose en deux acides pyruviques.",
          "Chaque acide pyruvique produit 15 ATP dans la mitochondrie, soit 15 fois 2 égale 30 ATP.",
          "Le total de la respiration cellulaire est donc 8 plus 30, soit 38 ATP."
        ],
        "conclusion": "C’est le calcul écrit dans la partie sur les voies lentes, avec l’équation bilan du glucose."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La glycolyse selon la leçon",
          "stepTheme": "La glycolyse selon la leçon",
          "stepBadge": "La glycolyse selon la leçon",
          "paragraphText": "• Glycolyse : dégradation du glucose en deux acides pyruviques.\nLe texte de la leçon lui attribue une production de 8 molécules d’ATP.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q1",
            "type": "mcq",
            "prompt": "La glycolyse dégrade le glucose en :",
            "options": [
              "Un seul acide lactique directement",
              "Deux acides pyruviques, avec production de 8 ATP selon le texte",
              "Dioxyde de carbone et eau sans ATP",
              "Glycogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Présentation des voies lentes dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La fermentation lactique, voie anaérobie",
          "stepTheme": "La fermentation lactique, voie anaérobie",
          "stepBadge": "La fermentation lactique, voie anaérobie",
          "paragraphText": "• Fermentation lactique (ou voie anaérobie) : devenir des acides pyruviques restés dans le hyaloplasme, en absence d’oxygène.\nLe texte indique que cette voie produit 2 ATP selon le calcul qu’il écrit.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q2",
            "type": "mcq",
            "prompt": "La fermentation lactique se déroule :",
            "options": [
              "Dans la mitochondrie, avec dioxygène",
              "Dans le hyaloplasme, en absence d’oxygène",
              "Dans le réticulum sarcoplasmique",
              "Uniquement au repos"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon oppose la voie anaérobie du hyaloplasme à la voie aérobie de la mitochondrie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La voie aérobie dans la mitochondrie",
          "stepTheme": "La voie aérobie dans la mitochondrie",
          "stepBadge": "La voie aérobie dans la mitochondrie",
          "paragraphText": "Les acides pyruviques qui pénètrent dans la mitochondrie subissent le cycle de Krebs en présence d’oxygène.\nC’est la voie aérobie ou respiration cellulaire ou voie oxydative, qui produit du dioxyde de carbone et de l’eau.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q3",
            "type": "mcq",
            "prompt": "La respiration cellulaire des acides pyruviques a lieu :",
            "options": [
              "Dans le hyaloplasme sans oxygène",
              "Dans la mitochondrie, en présence d’oxygène",
              "Dans le sarcolemme",
              "Dans les vaisseaux sanguins"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Présentation de la voie aérobie dans la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rendement par acide pyruvique",
          "stepTheme": "Le rendement par acide pyruvique",
          "stepBadge": "Le rendement par acide pyruvique",
          "paragraphText": "Chaque acide pyruvique produit 15 molécules d’ATP dans la voie aérobie.\nPour les deux acides pyruviques issus d’un glucose, le nombre produit est donc de 30 ATP.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q4",
            "type": "mcq",
            "prompt": "Pour deux acides pyruviques, la production d’ATP dans la mitochondrie vaut :",
            "options": [
              "15 ATP au total",
              "8 ATP",
              "30 ATP",
              "2 ATP"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Calcul du texte : 15 ATP fois 2 égale 30 ATP."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le total de la respiration n’est pas 30 ATP",
          "stepTheme": "Le total de la respiration n’est pas 30 ATP",
          "stepBadge": "Le total de la respiration n’est pas 30 ATP",
          "paragraphText": "Piège : oublier les ATP de la glycolyse dans le bilan total.\nLa leçon additionne les 8 ATP de la glycolyse et les 30 ATP des deux acides pyruviques pour obtenir le total de la respiration cellulaire.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q5",
            "type": "mcq",
            "prompt": "Le total d’ATP de la respiration cellulaire, selon la leçon, vaut :",
            "options": [
              "30 ATP",
              "38 ATP, soit 8 plus 30",
              "8 ATP seulement",
              "2 ATP"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Phrase du texte : la respiration cellulaire produit 8 ATP plus 30 ATP, soit 38 ATP."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’équation bilan de la dégradation du glucose",
          "stepTheme": "L’équation bilan de la dégradation du glucose",
          "stepBadge": "L’équation bilan de la dégradation du glucose",
          "paragraphText": "La leçon écrit la dégradation d’une molécule de glucose par la respiration cellulaire avec du dioxygène.\nLes produits formés sont le dioxyde de carbone, l’eau et 38 ATP.",
          "exercise": {
            "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q6",
            "type": "mcq",
            "prompt": "Dans l’équation bilan de la leçon, la respiration cellulaire du glucose produit :",
            "options": [
              "De l’acide lactique et 2 ATP seulement",
              "Du dioxyde de carbone, de l’eau et 38 ATP",
              "De la créatine et de l’AMP",
              "Uniquement de la chaleur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Équation bilan donnée à la fin de la partie sur les voies lentes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q1",
          "type": "mcq",
          "prompt": "La glycolyse dégrade le glucose en :",
          "options": [
            "Un seul acide lactique directement",
            "Deux acides pyruviques, avec production de 8 ATP selon le texte",
            "Dioxyde de carbone et eau sans ATP",
            "Glycogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Présentation des voies lentes dans la leçon."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q2",
          "type": "mcq",
          "prompt": "La fermentation lactique se déroule :",
          "options": [
            "Dans la mitochondrie, avec dioxygène",
            "Dans le hyaloplasme, en absence d’oxygène",
            "Dans le réticulum sarcoplasmique",
            "Uniquement au repos"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon oppose la voie anaérobie du hyaloplasme à la voie aérobie de la mitochondrie."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q3",
          "type": "mcq",
          "prompt": "La respiration cellulaire des acides pyruviques a lieu :",
          "options": [
            "Dans le hyaloplasme sans oxygène",
            "Dans la mitochondrie, en présence d’oxygène",
            "Dans le sarcolemme",
            "Dans les vaisseaux sanguins"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Présentation de la voie aérobie dans la leçon."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q4",
          "type": "mcq",
          "prompt": "Pour deux acides pyruviques, la production d’ATP dans la mitochondrie vaut :",
          "options": [
            "15 ATP au total",
            "8 ATP",
            "30 ATP",
            "2 ATP"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Calcul du texte : 15 ATP fois 2 égale 30 ATP."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q5",
          "type": "mcq",
          "prompt": "Le total d’ATP de la respiration cellulaire, selon la leçon, vaut :",
          "options": [
            "30 ATP",
            "38 ATP, soit 8 plus 30",
            "8 ATP seulement",
            "2 ATP"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phrase du texte : la respiration cellulaire produit 8 ATP plus 30 ATP, soit 38 ATP."
        },
        {
          "id": "terminale_d_svt_l03_fonctionnement_muscle_strie_p06_q6",
          "type": "mcq",
          "prompt": "Dans l’équation bilan de la leçon, la respiration cellulaire du glucose produit :",
          "options": [
            "De l’acide lactique et 2 ATP seulement",
            "Du dioxyde de carbone, de l’eau et 38 ATP",
            "De la créatine et de l’AMP",
            "Uniquement de la chaleur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Équation bilan donnée à la fin de la partie sur les voies lentes."
        }
      ]
    }
  ]
};
