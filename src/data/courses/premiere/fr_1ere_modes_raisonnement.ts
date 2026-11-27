import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Les modes de raisonnement » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2346
export const FR_1ERE_PL_L07_MODES_RAISONNEMENT: CurriculumChapter = {
  "id": "premiere_a1_francais_pl_l07_modes_raisonnement",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 7,
  "title": "Leçon 7 : Les modes de raisonnement",
  "summary": "Au cours d’un débat organisé par le club littéraire, les élèves s’exercent, à partir de quelques phrases, à dégager les différents modes de raisonnement, à analyser leur valeur d’emploi et à les utiliser en contexte.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2346",
  "points": [
    {
      "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01",
      "order": 1,
      "title": "Le raisonnement dans l’argumentation",
      "summary": "Définir le raisonnement et comprendre son rôle dans la stratégie argumentative.",
      "conceptExplanation": "On appelle raisonnement la manière d’organiser son discours dans le cadre d’une argumentation.\nIl y a plusieurs modes de raisonnement dans un texte et ils aident le lecteur à mieux comprendre la stratégie argumentative du locuteur.\nRepérer le type de raisonnement utilisé dans un texte permet donc de mieux comprendre comment l’auteur conduit sa démonstration et où se situe sa thèse.",
      "keyRule": "Repère toujours le mode de raisonnement : il révèle la stratégie argumentative du locuteur.",
      "formulas": [],
      "workedExample": {
        "title": "Repérer la logique d’un texte support",
        "statement": "Dans le texte 3 des supports, la thèse « Les hommes sont supérieurs aux animaux » est placée au début du texte. Quelle est la logique du locuteur, selon la correction de la leçon ?",
        "methodSteps": [
          "Thèse identifiée : les hommes sont supérieurs aux animaux.",
          "Logique relevée : le locuteur oppose les hommes aux animaux.",
          "Position de la thèse : au début du texte."
        ],
        "conclusion": "Identifier thèse, logique et position de la thèse permet de décrire le raisonnement d’un texte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du raisonnement",
          "stepTheme": "Définition du raisonnement",
          "stepBadge": "Définition du raisonnement",
          "paragraphText": "• Raisonnement : manière d’organiser son discours dans le cadre d’une argumentation.\nIl existe plusieurs modes de raisonnement dans un texte.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01_q1",
            "type": "mcq",
            "prompt": "On appelle raisonnement :",
            "options": [
              "La manière d’organiser son discours dans une argumentation",
              "Une simple liste de citations",
              "La biographie de l’auteur",
              "Un résumé du texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la leçon : le raisonnement est la manière d’organiser son discours argumentatif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Comprendre la stratégie du locuteur",
          "stepTheme": "Comprendre la stratégie du locuteur",
          "stepBadge": "Comprendre la stratégie du locuteur",
          "paragraphText": "Propriété : les modes de raisonnement aident le lecteur à mieux comprendre la stratégie argumentative du locuteur.\nRepérer le type de raisonnement utilisé éclaire la démonstration.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01_q2",
            "type": "mcq",
            "prompt": "Repérer le mode de raisonnement d’un texte permet de :",
            "options": [
              "Traduire le texte",
              "Mieux comprendre la stratégie argumentative du locuteur",
              "Connaître la vie de l’auteur",
              "Compter les paragraphes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon le dit : repérer le raisonnement aide à comprendre la stratégie argumentative."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Identifier thèse, logique et position",
          "stepTheme": "Identifier thèse, logique et position",
          "stepBadge": "Identifier thèse, logique et position",
          "paragraphText": "Méthode d’analyse proposée dans les exercices : identifier la thèse de l’auteur, retracer la logique empruntée pour la démonstration, puis situer la place de la thèse dans le texte.\nLa thèse peut être au début ou à la fin du texte.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01_q3",
            "type": "mcq",
            "prompt": "Dans l’analyse d’un texte argumentatif, on identifie successivement :",
            "options": [
              "L’auteur, l’éditeur, la date",
              "La thèse, la logique de la démonstration, la place de la thèse",
              "Les personnages et les lieux",
              "Les rimes et les strophes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois tâches de l’exercice 2 de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Confondre thèse et exemple",
          "stepTheme": "Confondre thèse et exemple",
          "stepBadge": "Confondre thèse et exemple",
          "paragraphText": "Piège : prendre un exemple ou un cas particulier pour la thèse du texte.\nLa thèse est l’idée défendue ; les cas cités servent seulement à l’appuyer ou à la démontrer.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01_q4",
            "type": "mcq",
            "prompt": "Quel énoncé est une thèse et non un simple exemple ?",
            "options": [
              "Akissi s’est jetée à la mer",
              "Henri est un cultivateur",
              "Tous ceux qui se jettent à la mer en sortent mouillés, idée défendue par accumulation de cas",
              "Il a voté dimanche"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux premiers énoncés sont des cas particuliers ; la thèse est l’idée générale que le locuteur défend."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La thèse en début ou en fin de texte",
          "stepTheme": "La thèse en début ou en fin de texte",
          "stepBadge": "La thèse en début ou en fin de texte",
          "paragraphText": "Exemple : dans le texte 1 des supports, la thèse « Tous les artisans sont des personnes manuelles » se trouve à la fin du texte.\nDans le texte 3, la thèse « Les hommes sont supérieurs aux animaux » est au début du texte.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01_q5",
            "type": "mcq",
            "prompt": "Dans le texte 1 des supports, la thèse se trouve :",
            "options": [
              "Au début du texte",
              "Au milieu du texte",
              "À la fin du texte",
              "Hors du texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La correction de la leçon situe la thèse du texte 1 à la fin."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01_q1",
          "type": "mcq",
          "prompt": "On appelle raisonnement :",
          "options": [
            "La manière d’organiser son discours dans une argumentation",
            "Une simple liste de citations",
            "La biographie de l’auteur",
            "Un résumé du texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la leçon : le raisonnement est la manière d’organiser son discours argumentatif."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01_q2",
          "type": "mcq",
          "prompt": "Repérer le mode de raisonnement d’un texte permet de :",
          "options": [
            "Traduire le texte",
            "Mieux comprendre la stratégie argumentative du locuteur",
            "Connaître la vie de l’auteur",
            "Compter les paragraphes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon le dit : repérer le raisonnement aide à comprendre la stratégie argumentative."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01_q3",
          "type": "mcq",
          "prompt": "Dans l’analyse d’un texte argumentatif, on identifie successivement :",
          "options": [
            "L’auteur, l’éditeur, la date",
            "La thèse, la logique de la démonstration, la place de la thèse",
            "Les personnages et les lieux",
            "Les rimes et les strophes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois tâches de l’exercice 2 de la leçon."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01_q4",
          "type": "mcq",
          "prompt": "Quel énoncé est une thèse et non un simple exemple ?",
          "options": [
            "Akissi s’est jetée à la mer",
            "Henri est un cultivateur",
            "Tous ceux qui se jettent à la mer en sortent mouillés, idée défendue par accumulation de cas",
            "Il a voté dimanche"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux premiers énoncés sont des cas particuliers ; la thèse est l’idée générale que le locuteur défend."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p01_q5",
          "type": "mcq",
          "prompt": "Dans le texte 1 des supports, la thèse se trouve :",
          "options": [
            "Au début du texte",
            "Au milieu du texte",
            "À la fin du texte",
            "Hors du texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La correction de la leçon situe la thèse du texte 1 à la fin."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02",
      "order": 2,
      "title": "Le raisonnement par induction",
      "summary": "Partir d’un cas particulier pour arriver à une conclusion générale.",
      "conceptExplanation": "Le raisonnement par induction est un mode de raisonnement au travers duquel l’on part d’une remarque sur un cas particulier vers une conclusion générale.\nExemple de la leçon : Akissi s’est jetée à la mer et est sortie mouillée, Gnagne s’est jeté à la mer et en est sorti tout mouillé, Wassia s’est jetée à la mer et en est sortie trempée ; conclusion générale : tous ceux qui se jettent à la mer en sortent mouillés.\nAutre illustration : chez Ionesco, l’observation des gens qui courent affairés dans les rues des grandes villes conduit à la conclusion générale sur l’homme moderne, universel, l’homme pressé.",
      "keyRule": "Induction : du cas particulier observé, on monte vers la conclusion générale.",
      "formulas": [],
      "workedExample": {
        "title": "L’induction des baigneurs",
        "statement": "Texte support : Akissi, Gnagne et Wassia se sont jetés à la mer et en sont sortis mouillés. Quelle conclusion générale le raisonnement tire-t-il ?",
        "methodSteps": [
          "Cas particuliers : trois personnes se jettent à la mer.",
          "Point commun observé : chacune en sort mouillée.",
          "Conclusion générale : tous ceux qui se jettent à la mer en sortent mouillés."
        ],
        "conclusion": "Partir de cas particuliers pour conclure en général, c’est raisonner par induction."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l’induction",
          "stepTheme": "Définition de l’induction",
          "stepBadge": "Définition de l’induction",
          "paragraphText": "• Induction : mode de raisonnement où l’on part d’une remarque sur un cas particulier vers une conclusion générale.\nLe mouvement va du particulier au général.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02_q1",
            "type": "mcq",
            "prompt": "Le raisonnement par induction part :",
            "options": [
              "D’une remarque générale vers un cas particulier",
              "D’un cas particulier vers une conclusion générale",
              "D’une comparaison entre deux réalités",
              "D’une contradiction absurde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la leçon : du cas particulier à la conclusion générale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Accumuler les cas particuliers",
          "stepTheme": "Accumuler les cas particuliers",
          "stepBadge": "Accumuler les cas particuliers",
          "paragraphText": "Propriété : l’induction s’appuie souvent sur plusieurs cas particuliers qui présentent le même trait.\nPlus les cas convergent, plus la conclusion générale paraît fondée dans le texte.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02_q2",
            "type": "mcq",
            "prompt": "Dans le texte des baigneurs, la conclusion générale repose sur :",
            "options": [
              "Un seul cas isolé sans observation",
              "Une définition de dictionnaire",
              "Trois cas particuliers qui se ressemblent : Akissi, Gnagne et Wassia sortent mouillés de la mer",
              "Une comparaison avec un lion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Trois cas particuliers convergents fondent la généralisation : tous ceux qui se jettent à la mer en sortent mouillés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Reconnaître une induction",
          "stepTheme": "Reconnaître une induction",
          "stepBadge": "Reconnaître une induction",
          "paragraphText": "Méthode : repérer d’abord les cas particuliers cités, puis la phrase de conclusion générale qui les dépasse.\nLe mot « tous » dans la conclusion est souvent un indice de généralisation.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02_q3",
            "type": "mcq",
            "prompt": "Quel indice signale la conclusion générale dans le texte des baigneurs ?",
            "options": [
              "Le prénom Akissi",
              "Le mot « tous » : tous ceux qui se jettent à la mer",
              "Le verbe se jeter",
              "Le mot mer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Tous » marque le passage des cas particuliers à la loi générale : c’est la conclusion de l’induction."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Inverser induction et déduction",
          "stepTheme": "Inverser induction et déduction",
          "stepBadge": "Inverser induction et déduction",
          "paragraphText": "Piège : appeler induction un raisonnement qui part d’une remarque générale.\nSi le point de départ est général et l’arrivée particulière, il s’agit d’une déduction, pas d’une induction.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02_q4",
            "type": "mcq",
            "prompt": "Partir de « tout ce qui vit est appelé à mourir » pour conclure sur l’être humain, c’est :",
            "options": [
              "Une induction",
              "Une déduction",
              "Une analogie",
              "Un sous-entendu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le départ est une remarque générale appliquée à un cas particulier : c’est une déduction, exemple même de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’homme pressé d’Ionesco",
          "stepTheme": "L’homme pressé d’Ionesco",
          "stepBadge": "L’homme pressé d’Ionesco",
          "paragraphText": "Exemple : Ionesco observe les gens qui courent affairés dans les rues, les yeux fixés à terre, faisant machinalement un trajet connu.\nIl conclut : dans toutes les grandes villes du monde, c’est pareil ; l’homme moderne, universel, c’est l’homme pressé.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02_q5",
            "type": "mcq",
            "prompt": "Le texte d’Ionesco cité dans la leçon illustre l’induction car :",
            "options": [
              "Il part d’une loi générale sur l’homme",
              "Il observe des passants particuliers puis conclut sur l’homme moderne en général",
              "Il compare l’homme à un lion",
              "Il ne contient aucune conclusion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Des observations particulières dans les rues, l’auteur monte à une conclusion générale sur l’homme moderne : induction."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02_q1",
          "type": "mcq",
          "prompt": "Le raisonnement par induction part :",
          "options": [
            "D’une remarque générale vers un cas particulier",
            "D’un cas particulier vers une conclusion générale",
            "D’une comparaison entre deux réalités",
            "D’une contradiction absurde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la leçon : du cas particulier à la conclusion générale."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02_q2",
          "type": "mcq",
          "prompt": "Dans le texte des baigneurs, la conclusion générale repose sur :",
          "options": [
            "Un seul cas isolé sans observation",
            "Une définition de dictionnaire",
            "Trois cas particuliers qui se ressemblent : Akissi, Gnagne et Wassia sortent mouillés de la mer",
            "Une comparaison avec un lion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Trois cas particuliers convergents fondent la généralisation : tous ceux qui se jettent à la mer en sortent mouillés."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02_q3",
          "type": "mcq",
          "prompt": "Quel indice signale la conclusion générale dans le texte des baigneurs ?",
          "options": [
            "Le prénom Akissi",
            "Le mot « tous » : tous ceux qui se jettent à la mer",
            "Le verbe se jeter",
            "Le mot mer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Tous » marque le passage des cas particuliers à la loi générale : c’est la conclusion de l’induction."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02_q4",
          "type": "mcq",
          "prompt": "Partir de « tout ce qui vit est appelé à mourir » pour conclure sur l’être humain, c’est :",
          "options": [
            "Une induction",
            "Une déduction",
            "Une analogie",
            "Un sous-entendu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le départ est une remarque générale appliquée à un cas particulier : c’est une déduction, exemple même de la leçon."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p02_q5",
          "type": "mcq",
          "prompt": "Le texte d’Ionesco cité dans la leçon illustre l’induction car :",
          "options": [
            "Il part d’une loi générale sur l’homme",
            "Il observe des passants particuliers puis conclut sur l’homme moderne en général",
            "Il compare l’homme à un lion",
            "Il ne contient aucune conclusion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Des observations particulières dans les rues, l’auteur monte à une conclusion générale sur l’homme moderne : induction."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03",
      "order": 3,
      "title": "Le raisonnement par déduction",
      "summary": "Partir d’une remarque générale pour en déduire un fait particulier.",
      "conceptExplanation": "Le raisonnement par déduction est un mode de raisonnement où l’on part d’une remarque générale pour en déduire un fait particulier.\nExemple de la leçon : tout ce qui vit est appelé à mourir ; or l’être humain vit ; donc il est appelé à mourir un jour.\nChez Bergson, le point de départ général est qu’il n’y a pas de comique en dehors de ce qui est proprement humain ; on en déduit qu’un paysage ne sera jamais risible et que l’on rit d’un animal seulement parce qu’on surprend chez lui une attitude d’homme.",
      "keyRule": "Déduction : d’une remarque générale, on descend vers le fait particulier avec « donc ».",
      "formulas": [],
      "workedExample": {
        "title": "Déduire la mortalité de l’homme",
        "statement": "Raisonnement de la leçon : « Tout ce qui vit est appelé à mourir. Or l’être humain vit. » Quelle conclusion en déduire ?",
        "methodSteps": [
          "Remarque générale : tout ce qui vit est appelé à mourir.",
          "Cas rattaché à la règle : l’être humain vit.",
          "Conclusion particulière : donc il est appelé à mourir un jour."
        ],
        "conclusion": "La déduction applique une remarque générale à un cas particulier."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la déduction",
          "stepTheme": "Définition de la déduction",
          "stepBadge": "Définition de la déduction",
          "paragraphText": "• Déduction : mode de raisonnement où l’on part d’une remarque générale pour en déduire un fait particulier.\nLe mouvement est inverse de celui de l’induction.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03_q1",
            "type": "mcq",
            "prompt": "Le raisonnement par déduction part :",
            "options": [
              "D’un cas particulier vers une loi générale",
              "D’une remarque générale pour en déduire un fait particulier",
              "D’une image poétique",
              "D’un dialogue de théâtre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition de la leçon : du général, on déduit le particulier."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Or et donc : les articulations",
          "stepTheme": "Or et donc : les articulations",
          "stepBadge": "Or et donc : les articulations",
          "paragraphText": "Propriété : la déduction de l’exemple s’articule en trois temps marqués par l’énoncé de la règle, « or » qui rattache le cas, et « donc » qui livre la conclusion.\nExemple : tout ce qui vit est appelé à mourir ; or l’être humain vit ; donc il est appelé à mourir.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03_q2",
            "type": "mcq",
            "prompt": "Dans l’exemple de la leçon, le mot qui introduit la conclusion déduite est :",
            "options": [
              "Cependant",
              "Donc",
              "En revanche",
              "Par exemple"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Donc il est appelé à mourir un jour » : « donc » marque la conclusion de la déduction."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Appliquer la règle au cas",
          "stepTheme": "Appliquer la règle au cas",
          "stepBadge": "Appliquer la règle au cas",
          "paragraphText": "Méthode : vérifier que le cas particulier entre bien dans la remarque générale.\nL’être humain vit : il entre donc dans « tout ce qui vit » et hérite de la propriété énoncée.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03_q3",
            "type": "mcq",
            "prompt": "Pour déduire correctement, il faut d’abord vérifier que :",
            "options": [
              "Le cas particulier entre dans la remarque générale",
              "La conclusion est plus générale que le départ",
              "L’auteur est célèbre",
              "Le texte est un poème"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans ce rattachement du cas à la règle générale, la déduction ne tient pas."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Conclure au-delà de la règle",
          "stepTheme": "Conclure au-delà de la règle",
          "stepBadge": "Conclure au-delà de la règle",
          "paragraphText": "Piège : tirer du cas une conclusion que la remarque générale ne contient pas.\nDe « Henri est un cultivateur », on ne peut pas déduire avec certitude, par la seule règle des cultivateurs, tout ce que l’exemple plaisant de la leçon suggère ; la déduction exige une règle qui couvre vraiment le cas.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03_q4",
            "type": "mcq",
            "prompt": "Une déduction est fautive quand :",
            "options": [
              "Elle part d’une remarque générale",
              "Sa conclusion dépasse ce que la remarque générale permet d’affirmer",
              "Elle utilise le mot donc",
              "Elle concerne un cas particulier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion déduite doit rester contenue dans la remarque générale de départ."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le comique selon Bergson",
          "stepTheme": "Le comique selon Bergson",
          "stepBadge": "Le comique selon Bergson",
          "paragraphText": "Exemple : Bergson pose qu’il n’y a pas de comique en dehors de ce qui est proprement humain.\nIl en déduit qu’un paysage ne sera jamais risible, et que l’on rit d’un animal parce qu’on surprend chez lui une attitude d’homme ou une expression humaine.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03_q5",
            "type": "mcq",
            "prompt": "Chez Bergson, on rit d’un animal parce que :",
            "options": [
              "L’animal est toujours comique par lui-même",
              "Le paysage est risible",
              "On surprend chez lui une attitude d’homme ou une expression humaine",
              "Le chapeau est en feutre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la déduction tirée de la remarque générale : pas de comique hors de l’humain."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03_q1",
          "type": "mcq",
          "prompt": "Le raisonnement par déduction part :",
          "options": [
            "D’un cas particulier vers une loi générale",
            "D’une remarque générale pour en déduire un fait particulier",
            "D’une image poétique",
            "D’un dialogue de théâtre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition de la leçon : du général, on déduit le particulier."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03_q2",
          "type": "mcq",
          "prompt": "Dans l’exemple de la leçon, le mot qui introduit la conclusion déduite est :",
          "options": [
            "Cependant",
            "Donc",
            "En revanche",
            "Par exemple"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Donc il est appelé à mourir un jour » : « donc » marque la conclusion de la déduction."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03_q3",
          "type": "mcq",
          "prompt": "Pour déduire correctement, il faut d’abord vérifier que :",
          "options": [
            "Le cas particulier entre dans la remarque générale",
            "La conclusion est plus générale que le départ",
            "L’auteur est célèbre",
            "Le texte est un poème"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans ce rattachement du cas à la règle générale, la déduction ne tient pas."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03_q4",
          "type": "mcq",
          "prompt": "Une déduction est fautive quand :",
          "options": [
            "Elle part d’une remarque générale",
            "Sa conclusion dépasse ce que la remarque générale permet d’affirmer",
            "Elle utilise le mot donc",
            "Elle concerne un cas particulier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion déduite doit rester contenue dans la remarque générale de départ."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p03_q5",
          "type": "mcq",
          "prompt": "Chez Bergson, on rit d’un animal parce que :",
          "options": [
            "L’animal est toujours comique par lui-même",
            "Le paysage est risible",
            "On surprend chez lui une attitude d’homme ou une expression humaine",
            "Le chapeau est en feutre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la déduction tirée de la remarque générale : pas de comique hors de l’humain."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04",
      "order": 4,
      "title": "Le raisonnement par analogie",
      "summary": "Comparer deux réalités pour en tirer une conclusion générale.",
      "conceptExplanation": "Le raisonnement par analogie est un mode de raisonnement à travers lequel l’on compare deux réalités pour en tirer une conclusion générale.\nExemple de la leçon : le lion, comme tous les félins, est un carnivore — la comparaison du lion aux autres félins fonde la conclusion.\nAutre exemple cité : pour convaincre qu’il est légitime que certains hommes commandent et que d’autres obéissent, le texte invite à regarder les hiérarchies dans le monde animal : la réalité animale sert de terme de comparaison à la réalité humaine.",
      "keyRule": "Analogie : deux réalités comparées, une conclusion tirée de leur ressemblance.",
      "formulas": [],
      "workedExample": {
        "title": "Le lion et les félins",
        "statement": "Exemple de la leçon : « Le lion, comme tous les félins, est un carnivore. » Identifie les deux réalités comparées et la conclusion.",
        "methodSteps": [
          "Première réalité : le lion.",
          "Deuxième réalité : les autres félins, auxquels le lion est comparé.",
          "Conclusion tirée de la comparaison : le lion est un carnivore."
        ],
        "conclusion": "Comparer le lion aux félins pour conclure sur le lion, c’est raisonner par analogie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l’analogie",
          "stepTheme": "Définition de l’analogie",
          "stepBadge": "Définition de l’analogie",
          "paragraphText": "• Analogie : mode de raisonnement où l’on compare deux réalités pour en tirer une conclusion générale.\nLa ressemblance entre les deux réalités sert d’appui à la conclusion.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04_q1",
            "type": "mcq",
            "prompt": "Le raisonnement par analogie consiste à :",
            "options": [
              "Partir d’un cas particulier vers une loi",
              "Partir d’une loi vers un cas",
              "Comparer deux réalités pour en tirer une conclusion générale",
              "Opposer deux thèses sans conclusion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition de la leçon : comparaison de deux réalités, puis conclusion."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La ressemblance comme appui",
          "stepTheme": "La ressemblance comme appui",
          "stepBadge": "La ressemblance comme appui",
          "paragraphText": "Propriété : l’analogie ne vaut que par la ressemblance réelle entre les deux réalités comparées.\nLe lion est rapproché des félins parce qu’il appartient à la même famille d’animaux.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04_q2",
            "type": "mcq",
            "prompt": "Dans l’exemple du lion, la comparaison est possible parce que :",
            "options": [
              "Le lion ressemble aux félins, dont il fait partie",
              "Le lion est un animal domestique",
              "Tous les animaux sont carnivores",
              "Le mot comme suffit toujours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La ressemblance entre le lion et les autres félins fonde la conclusion de l’analogie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Repérer les deux réalités comparées",
          "stepTheme": "Repérer les deux réalités comparées",
          "stepBadge": "Repérer les deux réalités comparées",
          "paragraphText": "Méthode : identifier la réalité dont on parle, puis la réalité à laquelle elle est comparée, souvent introduite par « comme ».\nEnsuite seulement, formuler la conclusion que l’auteur en tire.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04_q3",
            "type": "mcq",
            "prompt": "Dans « Le lion, comme tous les félins, est un carnivore », la réalité de comparaison est :",
            "options": [
              "Le lion",
              "Tous les félins",
              "Le carnivore",
              "La savane"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le lion est comparé à « tous les félins » : c’est le second terme de l’analogie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Analogie sans ressemblance pertinente",
          "stepTheme": "Analogie sans ressemblance pertinente",
          "stepBadge": "Analogie sans ressemblance pertinente",
          "paragraphText": "Piège : rapprocher deux réalités qui ne se ressemblent pas sur le point discuté.\nUne comparaison décorative ne démontre rien si la ressemblance ne porte pas sur la propriété conclue.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04_q4",
            "type": "mcq",
            "prompt": "Une analogie est faible quand :",
            "options": [
              "Les deux réalités se ressemblent sur le point en question",
              "La conclusion suit la comparaison",
              "Les deux réalités ne se ressemblent pas sur la propriété que l’on veut conclure",
              "Elle comporte deux termes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sans ressemblance pertinente sur la propriété conclue, l’analogie ne prouve rien."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les hiérarchies dans le monde animal",
          "stepTheme": "Les hiérarchies dans le monde animal",
          "stepBadge": "Les hiérarchies dans le monde animal",
          "paragraphText": "Exemple cité par la leçon : « Il est légitime que certains hommes commandent et que d’autres obéissent. Il suffit pour s’en convaincre de regarder les hiérarchies dans le monde animal. »\nLa société humaine est comparée au monde animal pour conclure sur le commandement et l’obéissance.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04_q5",
            "type": "mcq",
            "prompt": "Dans cet exemple, le monde animal sert à :",
            "options": [
              "Décrire un paysage",
              "Servir de réalité de comparaison pour conclure sur les hommes",
              "Raconter une fable sans thèse",
              "Définir le mot hiérarchie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’auteur compare les hommes au monde animal : c’est le fonctionnement de l’analogie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04_q1",
          "type": "mcq",
          "prompt": "Le raisonnement par analogie consiste à :",
          "options": [
            "Partir d’un cas particulier vers une loi",
            "Partir d’une loi vers un cas",
            "Comparer deux réalités pour en tirer une conclusion générale",
            "Opposer deux thèses sans conclusion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition de la leçon : comparaison de deux réalités, puis conclusion."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04_q2",
          "type": "mcq",
          "prompt": "Dans l’exemple du lion, la comparaison est possible parce que :",
          "options": [
            "Le lion ressemble aux félins, dont il fait partie",
            "Le lion est un animal domestique",
            "Tous les animaux sont carnivores",
            "Le mot comme suffit toujours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La ressemblance entre le lion et les autres félins fonde la conclusion de l’analogie."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04_q3",
          "type": "mcq",
          "prompt": "Dans « Le lion, comme tous les félins, est un carnivore », la réalité de comparaison est :",
          "options": [
            "Le lion",
            "Tous les félins",
            "Le carnivore",
            "La savane"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le lion est comparé à « tous les félins » : c’est le second terme de l’analogie."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04_q4",
          "type": "mcq",
          "prompt": "Une analogie est faible quand :",
          "options": [
            "Les deux réalités se ressemblent sur le point en question",
            "La conclusion suit la comparaison",
            "Les deux réalités ne se ressemblent pas sur la propriété que l’on veut conclure",
            "Elle comporte deux termes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sans ressemblance pertinente sur la propriété conclue, l’analogie ne prouve rien."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p04_q5",
          "type": "mcq",
          "prompt": "Dans cet exemple, le monde animal sert à :",
          "options": [
            "Décrire un paysage",
            "Servir de réalité de comparaison pour conclure sur les hommes",
            "Raconter une fable sans thèse",
            "Définir le mot hiérarchie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’auteur compare les hommes au monde animal : c’est le fonctionnement de l’analogie."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05",
      "order": 5,
      "title": "Identifier le mode de raisonnement d’un extrait",
      "summary": "Appliquer la grille d’identification aux extraits des exercices et de l’évaluation.",
      "conceptExplanation": "Les exercices de la leçon demandent d’identifier, dans des extraits, les types de raisonnement utilisés, puis la thèse, la logique et la place de la thèse.\nDans l’évaluation, l’extrait sur les sources d’eau accumule un constat répété — toutes les fois où l’on a découvert une source d’eau, on a découvert une existence humaine — avant d’affirmer que les hommes aiment s’installer au bord des cours d’eau et que les cours d’eau sont des sources de vie : le départ par des constats répétés relève de la démarche inductive.\nDans l’exercice sur la classe, les cas particuliers (Inès dort en cours, Affiba ne fait plus rien, Yacouba n’a plus ses affaires) débouchent sur la conclusion générale : c’est la catastrophe dans cette classe.",
      "keyRule": "Pour identifier un mode : cherche le point de départ (particulier, général ou comparaison), puis la conclusion.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier le raisonnement de l’évaluation",
        "statement": "Évaluation : « Toutes les fois où l’on a découvert l’existence d’une source d’eau, on a découvert une existence humaine. Les hommes aiment s’installer au bord des cours d’eau. » Détermine le mode de raisonnement et justifie.",
        "methodSteps": [
          "Point de départ : un constat répété sur des cas observés, chaque découverte d’eau accompagne une présence humaine.",
          "Mouvement : des constats répétés, on passe à une affirmation générale sur les hommes et les cours d’eau.",
          "Mode identifié : le raisonnement par induction."
        ],
        "conclusion": "Des cas observés répétés vers une conclusion générale : c’est une induction."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le point de départ décide du mode",
          "stepTheme": "Le point de départ décide du mode",
          "stepBadge": "Le point de départ décide du mode",
          "paragraphText": "• Règle d’identification : le mode se reconnaît au point de départ et au sens du mouvement.\nParticulier vers général : induction ; général vers particulier : déduction ; comparaison : analogie.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05_q1",
            "type": "mcq",
            "prompt": "Un raisonnement qui part de cas particuliers vers une conclusion générale est :",
            "options": [
              "Une déduction",
              "Une induction",
              "Une analogie",
              "Un présupposé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Particulier vers général : c’est la définition même de l’induction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Justifier son identification",
          "stepTheme": "Justifier son identification",
          "stepBadge": "Justifier son identification",
          "paragraphText": "Méthode : pour justifier, citer le point de départ et la conclusion du texte, puis nommer le mode.\nUne identification sans justification tirée du texte ne vaut pas démonstration.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05_q2",
            "type": "mcq",
            "prompt": "Une bonne justification d’identification doit :",
            "options": [
              "Nommer le mode sans citer le texte",
              "Citer le point de départ et la conclusion, puis nommer le mode",
              "Raconter la vie de l’auteur",
              "Recopier tout l’extrait"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La justification s’appuie sur le départ et l’arrivée du raisonnement, relevés dans le texte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La catastrophe dans la classe",
          "stepTheme": "La catastrophe dans la classe",
          "stepBadge": "La catastrophe dans la classe",
          "paragraphText": "Propriété de l’exercice : Inès dort en cours, Affiba ne fait plus rien, Yacouba n’a plus ses affaires.\nCes trois cas particuliers conduisent à la conclusion générale : c’est la catastrophe dans cette classe.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05_q3",
            "type": "mcq",
            "prompt": "Dans cet extrait d’exercice, la phrase « C’est la catastrophe dans cette classe » est :",
            "options": [
              "Un cas particulier",
              "La conclusion générale tirée de trois cas particuliers",
              "Une comparaison animale",
              "Une remarque générale de départ"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Trois élèves cités, puis un jugement sur toute la classe : la phrase conclut une induction."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Se fier à un seul mot indice",
          "stepTheme": "Se fier à un seul mot indice",
          "stepBadge": "Se fier à un seul mot indice",
          "paragraphText": "Piège : décider du mode sur la seule présence du mot « donc ».\n« Donc » peut apparaître dans plusieurs modes ; seul le mouvement d’ensemble, du départ à la conclusion, tranche.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05_q4",
            "type": "mcq",
            "prompt": "Pourquoi le seul mot « donc » ne suffit-il pas à identifier le mode ?",
            "options": [
              "Parce qu’il est toujours faux",
              "Parce qu’il faut examiner le mouvement du raisonnement, du point de départ à la conclusion",
              "Parce qu’il n’apparaît jamais dans les textes",
              "Parce qu’il remplace la thèse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le mode se juge sur le mouvement complet du raisonnement, pas sur un mot isolé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’augmentation des ouvriers",
          "stepTheme": "L’augmentation des ouvriers",
          "stepBadge": "L’augmentation des ouvriers",
          "paragraphText": "Exemple d’exercice : les ouvriers de l’usine de Clermont ont été augmentés ; il n’y a pas de raison que nous n’ayons pas nous aussi une augmentation.\nLe locuteur compare la situation de son entreprise à celle de Clermont pour réclamer la même conclusion.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05_q5",
            "type": "mcq",
            "prompt": "Le raisonnement de cet extrait repose d’abord sur :",
            "options": [
              "Une comparaison entre deux situations semblables, celle de Clermont et la nôtre",
              "Une définition du mot usine",
              "Un récit au passé simple",
              "Une liste de prénoms"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Il n’y a pas de raison que nous n’ayons pas nous aussi » : la comparaison des deux situations porte la revendication, démarche analogique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05_q1",
          "type": "mcq",
          "prompt": "Un raisonnement qui part de cas particuliers vers une conclusion générale est :",
          "options": [
            "Une déduction",
            "Une induction",
            "Une analogie",
            "Un présupposé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Particulier vers général : c’est la définition même de l’induction."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05_q2",
          "type": "mcq",
          "prompt": "Une bonne justification d’identification doit :",
          "options": [
            "Nommer le mode sans citer le texte",
            "Citer le point de départ et la conclusion, puis nommer le mode",
            "Raconter la vie de l’auteur",
            "Recopier tout l’extrait"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La justification s’appuie sur le départ et l’arrivée du raisonnement, relevés dans le texte."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05_q3",
          "type": "mcq",
          "prompt": "Dans cet extrait d’exercice, la phrase « C’est la catastrophe dans cette classe » est :",
          "options": [
            "Un cas particulier",
            "La conclusion générale tirée de trois cas particuliers",
            "Une comparaison animale",
            "Une remarque générale de départ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Trois élèves cités, puis un jugement sur toute la classe : la phrase conclut une induction."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05_q4",
          "type": "mcq",
          "prompt": "Pourquoi le seul mot « donc » ne suffit-il pas à identifier le mode ?",
          "options": [
            "Parce qu’il est toujours faux",
            "Parce qu’il faut examiner le mouvement du raisonnement, du point de départ à la conclusion",
            "Parce qu’il n’apparaît jamais dans les textes",
            "Parce qu’il remplace la thèse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le mode se juge sur le mouvement complet du raisonnement, pas sur un mot isolé."
        },
        {
          "id": "premiere_a1_francais_pl_l07_modes_raisonnement_p05_q5",
          "type": "mcq",
          "prompt": "Le raisonnement de cet extrait repose d’abord sur :",
          "options": [
            "Une comparaison entre deux situations semblables, celle de Clermont et la nôtre",
            "Une définition du mot usine",
            "Un récit au passé simple",
            "Une liste de prénoms"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Il n’y a pas de raison que nous n’ayons pas nous aussi » : la comparaison des deux situations porte la revendication, démarche analogique."
        }
      ]
    }
  ]
};
