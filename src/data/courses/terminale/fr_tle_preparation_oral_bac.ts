import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Préparation à l'épreuve orale de français au Baccalauréat » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=505
export const FR_TLE_SF_L12_PREPARATION_ORAL_BAC: CurriculumChapter = {
  "id": "terminale_a1_francais_sf_l12_preparation_oral_bac",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 12,
  "title": "Leçon 12 : Préparation à l'épreuve orale de français au Baccalauréat",
  "summary": "L'épreuve orale de français au Baccalauréat est un exposé sur un texte étudié en classe : elle évalue l'aptitude du candidat à communiquer à l'oral et sa maîtrise de la lecture méthodique, de la situation du texte jusqu'au bilan, avant un entretien avec l'examinateur.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=505",
  "points": [
    {
      "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01",
      "order": 1,
      "title": "Présentation de l'épreuve et dispositions avant l'épreuve",
      "summary": "Comprendre ce qu'est l'épreuve orale et remplir les conditions demandées avant le jour de l'examen.",
      "conceptExplanation": "D'après le document du professeur Kadio Bosson, l'épreuve orale de français au Baccalauréat est une évaluation en rapport avec l'étude de l'œuvre intégrale et le groupement de textes. C'est un exposé oral qui vise, d'une part, à évaluer l'aptitude du candidat à communiquer à l'oral et, d'autre part, à vérifier son niveau de maîtrise de la lecture méthodique.\nAvant l'épreuve, le candidat doit remplir un certain nombre de conditions : retirer sa convocation et vérifier que les informations qui y figurent sont correctes (par exemple les langues mentionnées, conformes au choix opéré) ; retirer la liste des textes étudiés en classe, signée par le professeur de Français et contresignée par le chef d'établissement (les candidats libres retirent cette liste à la DRENETFP ou DREN où ils ont été inscrits) ; se rendre dans son centre pour prendre connaissance de la programmation établie par le secrétariat.\nLe jour de l'épreuve, l'uniforme scolaire (tenue officielle de l'école) est exigé pour les candidats officiels ; les candidats libres portent une tenue décente. Une fois dans la salle, le candidat présente sa convocation, sa pièce d'identité et la liste des textes étudiés, puis émarge. Il adopte une attitude courtoise et respectueuse.",
      "keyRule": "Avant l'épreuve : convocation vérifiée, liste des textes signée et contresignée, tenue correcte, pièces présentées dans la salle.",
      "formulas": [],
      "workedExample": {
        "title": "Un candidat officiel se prépare",
        "statement": "Un candidat officiel veut être en règle le jour de l'oral. Que doit-il avoir fait et que doit-il présenter ?",
        "methodSteps": [
          "Il retire sa convocation et vérifie que toutes les informations qui y figurent sont correctes, par exemple les langues mentionnées.",
          "Il retire la liste des textes étudiés en classe, signée par le professeur de Français et contresignée par le chef d'établissement.",
          "Il se rend dans son centre pour prendre connaissance de la programmation établie par le secrétariat.",
          "Le jour de l'épreuve, il porte l'uniforme scolaire exigé pour les candidats officiels.",
          "Dans la salle, il présente sa convocation, sa pièce d'identité et la liste des textes, puis il émarge."
        ],
        "conclusion": "La préparation de l'oral commence avant la salle d'examen : documents retirés et vérifiés, tenue conforme, pièces présentées."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une épreuve en deux visées",
          "stepTheme": "Une épreuve en deux visées",
          "stepBadge": "Une épreuve en deux visées",
          "paragraphText": "• Épreuve orale de français : évaluation en rapport avec l'étude de l'œuvre intégrale et le groupement de textes.\nCet exposé oral vise à évaluer l'aptitude du candidat à communiquer à l'oral et à vérifier son niveau de maîtrise de la lecture méthodique.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q1",
            "type": "mcq",
            "prompt": "L'épreuve orale de français vise notamment à vérifier :",
            "options": [
              "La vitesse d'écriture du candidat",
              "Le niveau de maîtrise de la lecture méthodique",
              "La mémoire des dates de l'histoire littéraire uniquement",
              "La capacité à réciter un texte par cœur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document de présentation donne deux visées : l'aptitude à communiquer à l'oral et la maîtrise de la lecture méthodique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La liste des textes étudiés",
          "stepTheme": "La liste des textes étudiés",
          "stepBadge": "La liste des textes étudiés",
          "paragraphText": "• Liste des textes étudiés en classe : document à retirer avant l'épreuve, signé par le professeur de Français et contresigné par le chef d'établissement.\nLes candidats libres retirent la liste de ces textes à la DRENETFP où ils ont été inscrits.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q2",
            "type": "mcq",
            "prompt": "La liste des textes étudiés en classe doit être :",
            "options": [
              "Signée par le candidat seul",
              "Rédigée le jour de l'épreuve",
              "Signée par le professeur de Français et contresignée par le chef d'établissement",
              "Fournie par l'examinateur dans la salle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la condition indiquée dans les deux documents : signature du professeur de Français et contresignature du chef d'établissement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas des candidats libres",
          "stepTheme": "Le cas des candidats libres",
          "stepBadge": "Le cas des candidats libres",
          "paragraphText": "Les candidats libres retirent la liste des textes à la DRENETFP (ou DREN) où ils ont été inscrits.\nLe jour de l'épreuve, ils ne portent pas l'uniforme scolaire, mais ils sont priés de porter une tenue décente.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q3",
            "type": "mcq",
            "prompt": "Pour un candidat libre, le jour de l'épreuve :",
            "options": [
              "L'uniforme scolaire est exigé",
              "Une tenue décente est demandée",
              "Aucune tenue n'est précisée",
              "Il retire sa liste dans la salle d'examen"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'uniforme est exigé pour les candidats officiels ; les candidats libres portent une tenue décente."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Vérifier sa convocation",
          "stepTheme": "Vérifier sa convocation",
          "stepBadge": "Vérifier sa convocation",
          "paragraphText": "Méthode : retirer sa convocation et s'assurer que toutes les informations qui y figurent sont correctes.\nLe document cite en exemple les langues mentionnées sur la convocation : vérifier si elles sont conformes au choix opéré. Il faut aussi se rendre dans son centre pour prendre connaissance de la programmation établie par le secrétariat.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q4",
            "type": "mcq",
            "prompt": "En retirant sa convocation, le candidat doit notamment vérifier :",
            "options": [
              "Le nom de l'examinateur",
              "Que les langues mentionnées sont conformes au choix opéré",
              "La note obtenue à l'écrit",
              "Le texte qu'il devra présenter"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'exemple donné dans les dispositions organisationnelles : contrôler les informations de la convocation, dont les langues."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ce qu'on présente dans la salle",
          "stepTheme": "Ce qu'on présente dans la salle",
          "stepBadge": "Ce qu'on présente dans la salle",
          "paragraphText": "Piège : oublier l'un des trois documents demandés dans la salle.\nUne fois dans la salle, le candidat présente sa convocation, sa pièce d'identité et la liste des textes étudiés en classe, puis il émarge.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q5",
            "type": "mcq",
            "prompt": "Une fois dans la salle, le candidat présente :",
            "options": [
              "Sa convocation, sa pièce d'identité et la liste des textes étudiés",
              "Uniquement sa convocation",
              "Son cahier de cours et ses brouillons",
              "La liste des textes et un certificat de scolarité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux documents de la leçon énumèrent les mêmes trois pièces : convocation, pièce d'identité et liste des textes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'attitude dès l'entrée",
          "stepTheme": "L'attitude dès l'entrée",
          "stepBadge": "L'attitude dès l'entrée",
          "paragraphText": "L'attitude fait partie des dispositions : le candidat adopte une attitude courtoise et respectueuse dès son entrée dans la salle.\nCette courtoisie vaut pour toute l'épreuve, exposé et entretien compris.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q6",
            "type": "mcq",
            "prompt": "Quelle attitude le candidat doit-il adopter dans la salle ?",
            "options": [
              "Une attitude indifférente",
              "Une attitude courtoise et respectueuse",
              "Une attitude familière avec l'examinateur",
              "Le silence complet jusqu'à l'exposé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon demande une attitude courtoise et respectueuse, dès la présentation des pièces."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q1",
          "type": "mcq",
          "prompt": "L'épreuve orale de français vise notamment à vérifier :",
          "options": [
            "La vitesse d'écriture du candidat",
            "Le niveau de maîtrise de la lecture méthodique",
            "La mémoire des dates de l'histoire littéraire uniquement",
            "La capacité à réciter un texte par cœur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document de présentation donne deux visées : l'aptitude à communiquer à l'oral et la maîtrise de la lecture méthodique."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q2",
          "type": "mcq",
          "prompt": "La liste des textes étudiés en classe doit être :",
          "options": [
            "Signée par le candidat seul",
            "Rédigée le jour de l'épreuve",
            "Signée par le professeur de Français et contresignée par le chef d'établissement",
            "Fournie par l'examinateur dans la salle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la condition indiquée dans les deux documents : signature du professeur de Français et contresignature du chef d'établissement."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q3",
          "type": "mcq",
          "prompt": "Pour un candidat libre, le jour de l'épreuve :",
          "options": [
            "L'uniforme scolaire est exigé",
            "Une tenue décente est demandée",
            "Aucune tenue n'est précisée",
            "Il retire sa liste dans la salle d'examen"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'uniforme est exigé pour les candidats officiels ; les candidats libres portent une tenue décente."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q4",
          "type": "mcq",
          "prompt": "En retirant sa convocation, le candidat doit notamment vérifier :",
          "options": [
            "Le nom de l'examinateur",
            "Que les langues mentionnées sont conformes au choix opéré",
            "La note obtenue à l'écrit",
            "Le texte qu'il devra présenter"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'exemple donné dans les dispositions organisationnelles : contrôler les informations de la convocation, dont les langues."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q5",
          "type": "mcq",
          "prompt": "Une fois dans la salle, le candidat présente :",
          "options": [
            "Sa convocation, sa pièce d'identité et la liste des textes étudiés",
            "Uniquement sa convocation",
            "Son cahier de cours et ses brouillons",
            "La liste des textes et un certificat de scolarité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux documents de la leçon énumèrent les mêmes trois pièces : convocation, pièce d'identité et liste des textes."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p01_q6",
          "type": "mcq",
          "prompt": "Quelle attitude le candidat doit-il adopter dans la salle ?",
          "options": [
            "Une attitude indifférente",
            "Une attitude courtoise et respectueuse",
            "Une attitude familière avec l'examinateur",
            "Le silence complet jusqu'à l'exposé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon demande une attitude courtoise et respectueuse, dès la présentation des pièces."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02",
      "order": 2,
      "title": "Les quinze minutes de préparation et l'exposé",
      "summary": "Utiliser le temps de préparation pour construire, en notes synthétiques, un exposé de quinze minutes bien articulé.",
      "conceptExplanation": "Pendant l'épreuve, le candidat est appelé à intervenir sur un extrait d'un des passages étudiés en classe. Il a droit à quinze minutes de préparation après le choix du texte, parmi ceux étudiés en classe.\nCe temps de préparation doit lui permettre de dégager les grandes lignes de son exposé oral en suivant la démarche de la lecture méthodique, et de noter, de façon synthétique et bien lisible, les informations qui lui permettront aisément de dérouler sa présentation. Il doit éviter de vouloir reprendre mot à mot l'étude du texte telle que faite en classe.\nL'exposé dure ensuite quinze minutes : il doit montrer que le candidat maîtrise les différentes étapes de la lecture méthodique. Ces étapes doivent être articulées logiquement pendant la présentation, c'est-à-dire qu'il faut établir des transitions entre les différentes parties et éviter une présentation décousue et mécanique. Le document donne des exemples de transitions : annoncer que l'on situe d'abord le passage, puis que l'on procède à sa lecture expressive, puis que l'on retient une hypothèse générale que l'on scinde en deux axes de lecture.",
      "keyRule": "Quinze minutes pour préparer des notes synthétiques, quinze minutes pour exposer avec des transitions : jamais de récitation mot à mot.",
      "formulas": [],
      "workedExample": {
        "title": "Préparer son exposé en quinze minutes",
        "statement": "Le candidat vient de choisir son texte. Comment doit-il employer ses quinze minutes de préparation ?",
        "methodSteps": [
          "Il dégage les grandes lignes de son exposé en suivant la démarche de la lecture méthodique.",
          "Il note, de façon synthétique et bien lisible, les informations qui lui permettront de dérouler sa présentation.",
          "Il ne cherche pas à reprendre mot à mot l'étude du texte telle que faite en classe.",
          "Il prépare des transitions pour articuler logiquement les étapes pendant l'exposé de quinze minutes."
        ],
        "conclusion": "Le temps de préparation sert à construire un plan d'exposé clair et personnel, pas à recopier le cours."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Quinze minutes de préparation",
          "stepTheme": "Quinze minutes de préparation",
          "stepBadge": "Quinze minutes de préparation",
          "paragraphText": "• Temps de préparation : quinze minutes accordées au candidat après le choix du texte, parmi ceux étudiés en classe.\nLe candidat intervient sur un extrait d'un des passages étudiés en classe.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q1",
            "type": "mcq",
            "prompt": "Le candidat a droit, après le choix du texte, à :",
            "options": [
              "Cinq minutes de préparation",
              "Trente minutes de préparation",
              "Quinze minutes de préparation",
              "Aucune préparation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux documents de la leçon donnent le même temps : quinze minutes de préparation après le choix du texte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Un exposé de quinze minutes",
          "stepTheme": "Un exposé de quinze minutes",
          "stepBadge": "Un exposé de quinze minutes",
          "paragraphText": "• Exposé : présentation orale de quinze minutes du texte choisi, sous forme de lecture méthodique.\nIl doit montrer que le candidat maîtrise les différentes étapes de la lecture méthodique.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q2",
            "type": "mcq",
            "prompt": "L'exposé du candidat dure :",
            "options": [
              "Quinze minutes",
              "Cinq minutes",
              "Trente minutes",
              "Le temps de l'entretien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon fixe la durée de l'exposé à quinze minutes, comme celle de la préparation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Noter de façon synthétique",
          "stepTheme": "Noter de façon synthétique",
          "stepBadge": "Noter de façon synthétique",
          "paragraphText": "Méthode : pendant la préparation, noter de façon synthétique et bien lisible les informations qui permettront de dérouler aisément la présentation.\nCes notes sont un appui pour parler, pas un texte à lire mot à mot.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q3",
            "type": "mcq",
            "prompt": "Pendant la préparation, les notes du candidat doivent être :",
            "options": [
              "Une copie intégrale du cours",
              "Synthétiques et bien lisibles",
              "Écrites uniquement au crayon",
              "Limitées à la première page du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon demande des notes synthétiques et bien lisibles, qui permettent de dérouler aisément la présentation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le mot à mot interdit",
          "stepTheme": "Le mot à mot interdit",
          "stepBadge": "Le mot à mot interdit",
          "paragraphText": "Piège : vouloir reprendre mot à mot l'étude du texte telle que faite en classe.\nLa leçon le déconseille explicitement : l'exposé est une présentation personnelle construite pendant la préparation, pas une récitation du cours.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q4",
            "type": "mcq",
            "prompt": "Pendant sa préparation, le candidat doit éviter :",
            "options": [
              "De dégager les grandes lignes de son exposé",
              "De suivre la démarche de la lecture méthodique",
              "De noter ses informations de façon lisible",
              "De reprendre mot à mot l'étude du texte faite en classe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la mise en garde exacte de la leçon : éviter de vouloir reprendre mot à mot l'étude faite en classe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La présentation décousue",
          "stepTheme": "La présentation décousue",
          "stepBadge": "La présentation décousue",
          "paragraphText": "Piège : enchaîner les étapes de façon décousue et mécanique, en annonçant sèchement situation, lecture, hypothèse générale, etc.\nLe document demande d'établir des transitions entre les différentes parties pour articuler logiquement la présentation.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q5",
            "type": "mcq",
            "prompt": "Pendant l'exposé, le candidat doit éviter :",
            "options": [
              "Une présentation décousue et mécanique, sans transitions",
              "D'articuler logiquement les étapes",
              "De situer le passage avant sa lecture",
              "De formuler une hypothèse générale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document complémentaire insiste : établir des transitions et éviter une présentation décousue et mécanique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une transition réussie",
          "stepTheme": "Une transition réussie",
          "stepBadge": "Une transition réussie",
          "paragraphText": "Exemple de transition donné dans le document : après avoir situé le texte, annoncer que l'on procédera à sa lecture expressive.\nAutre exemple : annoncer que l'on retient, après lecture, une hypothèse générale que l'on scindera en deux axes de lecture.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces phrases est une transition du type recommandé par la leçon ?",
            "options": [
              "Situation, lecture, hypothèse générale.",
              "Maintenant que le texte est situé, nous allons procéder à sa lecture expressive.",
              "Je passe à la suite.",
              "Le texte est terminé, je commence l'entretien."
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'exemple de transition donné dans le document : elle relie logiquement la situation à la lecture expressive."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q1",
          "type": "mcq",
          "prompt": "Le candidat a droit, après le choix du texte, à :",
          "options": [
            "Cinq minutes de préparation",
            "Trente minutes de préparation",
            "Quinze minutes de préparation",
            "Aucune préparation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux documents de la leçon donnent le même temps : quinze minutes de préparation après le choix du texte."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q2",
          "type": "mcq",
          "prompt": "L'exposé du candidat dure :",
          "options": [
            "Quinze minutes",
            "Cinq minutes",
            "Trente minutes",
            "Le temps de l'entretien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon fixe la durée de l'exposé à quinze minutes, comme celle de la préparation."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q3",
          "type": "mcq",
          "prompt": "Pendant la préparation, les notes du candidat doivent être :",
          "options": [
            "Une copie intégrale du cours",
            "Synthétiques et bien lisibles",
            "Écrites uniquement au crayon",
            "Limitées à la première page du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon demande des notes synthétiques et bien lisibles, qui permettent de dérouler aisément la présentation."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q4",
          "type": "mcq",
          "prompt": "Pendant sa préparation, le candidat doit éviter :",
          "options": [
            "De dégager les grandes lignes de son exposé",
            "De suivre la démarche de la lecture méthodique",
            "De noter ses informations de façon lisible",
            "De reprendre mot à mot l'étude du texte faite en classe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la mise en garde exacte de la leçon : éviter de vouloir reprendre mot à mot l'étude faite en classe."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q5",
          "type": "mcq",
          "prompt": "Pendant l'exposé, le candidat doit éviter :",
          "options": [
            "Une présentation décousue et mécanique, sans transitions",
            "D'articuler logiquement les étapes",
            "De situer le passage avant sa lecture",
            "De formuler une hypothèse générale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document complémentaire insiste : établir des transitions et éviter une présentation décousue et mécanique."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p02_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces phrases est une transition du type recommandé par la leçon ?",
          "options": [
            "Situation, lecture, hypothèse générale.",
            "Maintenant que le texte est situé, nous allons procéder à sa lecture expressive.",
            "Je passe à la suite.",
            "Le texte est terminé, je commence l'entretien."
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'exemple de transition donné dans le document : elle relie logiquement la situation à la lecture expressive."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03",
      "order": 3,
      "title": "Situer le texte et lire de façon expressive",
      "summary": "Présenter le passage à partir du paratexte et le lire avec une bonne diction, en épousant son rythme, son sens et sa tonalité.",
      "conceptExplanation": "La première étape de la lecture méthodique est la présentation, ou situation du texte. Le candidat présente le passage à partir du paratexte, évoque les faits importants ou l'événement majeur qui précèdent et qui facilitent la compréhension du passage, et rappelle l'axe d'étude. Il évoque aussi la partie et/ou le chapitre, le tableau ou l'acte et la scène dont le passage est extrait.\nLe document complémentaire illustre le rappel de l'axe d'étude par un exemple : l'expression de la révolte dans la poésie française du XIXe siècle dans Les Fleurs du Mal de Charles Baudelaire.\nVient ensuite la lecture expressive du texte : c'est une bonne lecture, caractérisée par une bonne diction et par sa capacité à épouser le texte, par le respect du rythme des énoncés, le respect du sens du texte et de sa tonalité. Le document complémentaire résume cette exigence : lecture expressive et bonne articulation.",
      "keyRule": "Situer, c'est donner le paratexte, les faits qui précèdent et l'axe d'étude ; lire, c'est épouser le rythme, le sens et la tonalité du texte.",
      "formulas": [],
      "workedExample": {
        "title": "Situer « L'Ennemi », le texte support de la leçon",
        "statement": "Le texte support de la leçon est « L'Ennemi » de Charles Baudelaire. Quels éléments du paratexte le candidat peut-il donner pour le situer ?",
        "methodSteps": [
          "Il nomme l'auteur : Charles Baudelaire.",
          "Il nomme le recueil : Les Fleurs du mal, et précise qu'il s'agit du poème X, publié en 1857.",
          "Il évoque ce qui précède le passage et facilite sa compréhension, selon la place du poème dans le recueil.",
          "Il rappelle l'axe d'étude sous lequel le texte a été étudié en classe."
        ],
        "conclusion": "La situation s'appuie sur le paratexte (auteur, recueil, date), sur le contexte du passage et sur le rappel de l'axe d'étude."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La présentation ou situation",
          "stepTheme": "La présentation ou situation",
          "stepBadge": "La présentation ou situation",
          "paragraphText": "• Situation du texte : première étape de la lecture méthodique, qui présente le passage à étudier.\nElle s'appuie sur les informations du paratexte, sur les faits qui précèdent le passage et sur le rappel de l'axe d'étude.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q1",
            "type": "mcq",
            "prompt": "La situation du texte est :",
            "options": [
              "La dernière étape de l'exposé",
              "La première étape de la lecture méthodique",
              "Une partie de l'entretien",
              "Le résumé final de l'étude"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La situation ouvre la lecture méthodique, avant la lecture expressive et l'hypothèse générale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le paratexte",
          "stepTheme": "Le paratexte",
          "stepBadge": "Le paratexte",
          "paragraphText": "• Paratexte : ensemble des informations qui accompagnent le texte, comme le nom de l'auteur, le titre du recueil et la date.\nPour le texte support de la leçon, le paratexte donne : Charles Baudelaire, Les Fleurs du mal, poème X, 1857.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q2",
            "type": "mcq",
            "prompt": "Le paratexte du texte support de la leçon indique :",
            "options": [
              "Seydou Badian, Sous l'orage, 1963",
              "Jean Giono, Les Vraies richesses, 1937",
              "Charles Baudelaire, Les Fleurs du mal, 1857",
              "Un auteur anonyme, sans date"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la signature portée sous le poème « L'Ennemi », texte support de la leçon : Charles Baudelaire, Les Fleurs du mal, poème X, 1857."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Évoquer ce qui précède",
          "stepTheme": "Évoquer ce qui précède",
          "stepBadge": "Évoquer ce qui précède",
          "paragraphText": "Méthode : pour situer, évoquer les faits importants ou l'événement majeur qui ont précédé le passage et qui facilitent sa compréhension.\nLe candidat évoque aussi la partie et/ou le chapitre, le tableau ou l'acte et la scène dont le passage est extrait, et il rappelle l'axe d'étude.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q3",
            "type": "mcq",
            "prompt": "Pour situer le passage, le candidat doit notamment :",
            "options": [
              "Résumer tout le recueil",
              "Évoquer l'événement majeur qui a précédé et rappeler l'axe d'étude",
              "Donner son avis personnel sur l'auteur",
              "Lire le texte une seconde fois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon demande l'événement majeur qui a précédé, la partie ou le chapitre concerné, et le rappel de l'axe d'étude."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La lecture expressive",
          "stepTheme": "La lecture expressive",
          "stepBadge": "La lecture expressive",
          "paragraphText": "La lecture expressive est une bonne lecture, caractérisée par une bonne diction.\nElle épouse le texte par le respect du rythme des énoncés, le respect du sens du texte et de sa tonalité.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q4",
            "type": "mcq",
            "prompt": "Une lecture expressive se caractérise par :",
            "options": [
              "Une lecture rapide et monotone",
              "Une bonne diction et le respect du rythme, du sens et de la tonalité du texte",
              "Une lecture silencieuse du passage",
              "La suppression des passages difficiles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la leçon : bonne diction, respect du rythme des énoncés, du sens et de la tonalité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Situer ne suffit pas sans l'axe d'étude",
          "stepTheme": "Situer ne suffit pas sans l'axe d'étude",
          "stepBadge": "Situer ne suffit pas sans l'axe d'étude",
          "paragraphText": "Piège : donner l'auteur et le titre, puis passer directement à la lecture.\nLa situation est incomplète sans le rappel de l'axe d'étude, qui commande toute la suite de l'exposé et auquel le bilan sera confronté.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q5",
            "type": "mcq",
            "prompt": "Une situation complète comprend obligatoirement :",
            "options": [
              "Uniquement le nom de l'auteur",
              "Uniquement la date du texte",
              "Le rappel de l'axe d'étude",
              "Le jugement critique sur le texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le rappel de l'axe d'étude figure dans les deux documents parmi les éléments de la situation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un axe d'étude rappelé",
          "stepTheme": "Un axe d'étude rappelé",
          "stepBadge": "Un axe d'étude rappelé",
          "paragraphText": "Exemple donné dans le document complémentaire pour le rappel de l'axe d'étude : l'expression de la révolte dans la poésie française du XIXe siècle.\nCet axe est illustré dans Les Fleurs du Mal de Charles Baudelaire.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q6",
            "type": "mcq",
            "prompt": "L'exemple d'axe d'étude donné dans le document complémentaire porte sur :",
            "options": [
              "La description de la nature dans le roman",
              "L'expression de la révolte dans la poésie française du XIXe siècle",
              "La comédie classique au XVIIe siècle",
              "Le récit de voyage contemporain"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'exemple exact du document : l'expression de la révolte dans la poésie française du XIXe siècle, dans Les Fleurs du Mal."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q1",
          "type": "mcq",
          "prompt": "La situation du texte est :",
          "options": [
            "La dernière étape de l'exposé",
            "La première étape de la lecture méthodique",
            "Une partie de l'entretien",
            "Le résumé final de l'étude"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La situation ouvre la lecture méthodique, avant la lecture expressive et l'hypothèse générale."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q2",
          "type": "mcq",
          "prompt": "Le paratexte du texte support de la leçon indique :",
          "options": [
            "Seydou Badian, Sous l'orage, 1963",
            "Jean Giono, Les Vraies richesses, 1937",
            "Charles Baudelaire, Les Fleurs du mal, 1857",
            "Un auteur anonyme, sans date"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la signature portée sous le poème « L'Ennemi », texte support de la leçon : Charles Baudelaire, Les Fleurs du mal, poème X, 1857."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q3",
          "type": "mcq",
          "prompt": "Pour situer le passage, le candidat doit notamment :",
          "options": [
            "Résumer tout le recueil",
            "Évoquer l'événement majeur qui a précédé et rappeler l'axe d'étude",
            "Donner son avis personnel sur l'auteur",
            "Lire le texte une seconde fois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon demande l'événement majeur qui a précédé, la partie ou le chapitre concerné, et le rappel de l'axe d'étude."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q4",
          "type": "mcq",
          "prompt": "Une lecture expressive se caractérise par :",
          "options": [
            "Une lecture rapide et monotone",
            "Une bonne diction et le respect du rythme, du sens et de la tonalité du texte",
            "Une lecture silencieuse du passage",
            "La suppression des passages difficiles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la leçon : bonne diction, respect du rythme des énoncés, du sens et de la tonalité."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q5",
          "type": "mcq",
          "prompt": "Une situation complète comprend obligatoirement :",
          "options": [
            "Uniquement le nom de l'auteur",
            "Uniquement la date du texte",
            "Le rappel de l'axe d'étude",
            "Le jugement critique sur le texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le rappel de l'axe d'étude figure dans les deux documents parmi les éléments de la situation."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p03_q6",
          "type": "mcq",
          "prompt": "L'exemple d'axe d'étude donné dans le document complémentaire porte sur :",
          "options": [
            "La description de la nature dans le roman",
            "L'expression de la révolte dans la poésie française du XIXe siècle",
            "La comédie classique au XVIIe siècle",
            "Le récit de voyage contemporain"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'exemple exact du document : l'expression de la révolte dans la poésie française du XIXe siècle, dans Les Fleurs du Mal."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04",
      "order": 4,
      "title": "Formuler l'hypothèse générale et les axes de lecture",
      "summary": "Construire l'hypothèse générale à partir de la typologie, de la tonalité et de la thématique, puis la scinder en deux axes de lecture.",
      "conceptExplanation": "L'hypothèse générale doit être formulée à partir de trois éléments : la typologie du texte (récit, poème, portrait, dialogue, etc.), la tonalité, c'est-à-dire l'impression générale qui se dégage du texte (comique, lyrique, épique, réaliste, etc.), et la thématique, c'est-à-dire le sujet abordé.\nLe document complémentaire illustre chaque élément : pour la typologie, un sonnet ; pour la tonalité, lyrique ; pour la thématique, la dédramatisation de la mort.\nL'hypothèse générale est ensuite scindée en deux axes de lecture, qui serviront à la vérifier. Dans l'exemple du document : axe de lecture n°1, un sonnet lyrique ; axe de lecture n°2, l'expression de la dédramatisation de la mort.",
      "keyRule": "Hypothèse générale = typologie + tonalité + thématique, puis deux axes de lecture qui la déploient.",
      "formulas": [],
      "workedExample": {
        "title": "L'hypothèse générale de l'exemple du document",
        "statement": "Le document complémentaire formule une hypothèse générale sur un poème. Retrouve ses trois composantes et ses deux axes.",
        "methodSteps": [
          "Typologie : le texte est un sonnet, poème à forme fixe.",
          "Tonalité : l'impression générale qui se dégage du texte est lyrique.",
          "Thématique : le sujet abordé est la dédramatisation de la mort.",
          "Axe de lecture n°1 : un sonnet lyrique.",
          "Axe de lecture n°2 : l'expression de la dédramatisation de la mort."
        ],
        "conclusion": "L'hypothèse générale assemble typologie, tonalité et thématique ; les deux axes la scindent pour la vérification."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'hypothèse générale",
          "stepTheme": "L'hypothèse générale",
          "stepBadge": "L'hypothèse générale",
          "paragraphText": "• Hypothèse générale : formulation, après la lecture du texte, de ce que l'étude va vérifier.\nElle se formule à partir de la typologie du texte, de sa tonalité et de sa thématique.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q1",
            "type": "mcq",
            "prompt": "L'hypothèse générale se formule à partir :",
            "options": [
              "Du nombre de pages du recueil",
              "De la typologie, de la tonalité et de la thématique du texte",
              "Des questions de l'examinateur",
              "Du bilan de l'étude"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois éléments énumérés dans les deux documents de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La tonalité",
          "stepTheme": "La tonalité",
          "stepBadge": "La tonalité",
          "paragraphText": "• Tonalité : impression générale qui se dégage du texte.\nLa leçon cite par exemple les tonalités comique, lyrique, épique et réaliste.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q2",
            "type": "mcq",
            "prompt": "La tonalité d'un texte désigne :",
            "options": [
              "Le nombre de vers du poème",
              "Le sujet abordé par le texte",
              "L'impression générale qui se dégage du texte",
              "La partie du recueil où il figure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La tonalité est définie dans la leçon comme l'impression générale qui se dégage du texte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La thématique",
          "stepTheme": "La thématique",
          "stepBadge": "La thématique",
          "paragraphText": "• Thématique : sujet abordé par le texte.\nDans l'exemple du document complémentaire, la thématique est la dédramatisation de la mort.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q3",
            "type": "mcq",
            "prompt": "Dans l'exemple du document, la thématique retenue est :",
            "options": [
              "La dédramatisation de la mort",
              "La célébration de la nature",
              "La critique de la bourgeoisie",
              "Le voyage et l'exotisme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la thématique de l'exemple : un sonnet lyrique évoquant la dédramatisation de la mort."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Scinder en deux axes",
          "stepTheme": "Scinder en deux axes",
          "stepBadge": "Scinder en deux axes",
          "paragraphText": "Méthode : une fois l'hypothèse générale formulée, la scinder en deux axes de lecture.\nDans l'exemple : axe n°1, un sonnet lyrique ; axe n°2, l'expression de la dédramatisation de la mort. Chaque axe sera ensuite vérifié par des entrées.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q4",
            "type": "mcq",
            "prompt": "Dans l'exemple du document, l'axe de lecture n°2 est :",
            "options": [
              "Un sonnet lyrique",
              "La structure en quatrains et tercets",
              "L'expression de la dédramatisation de la mort",
              "La lecture expressive du poème"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'axe n°1 porte sur la forme et la tonalité (un sonnet lyrique) ; l'axe n°2 porte sur la thématique (la dédramatisation de la mort)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre typologie et thématique",
          "stepTheme": "Confondre typologie et thématique",
          "stepBadge": "Confondre typologie et thématique",
          "paragraphText": "Piège : prendre le sujet du texte pour son type.\nLa typologie dit ce qu'est le texte (récit, poème, portrait, dialogue) ; la thématique dit de quoi il parle. Les deux entrent dans l'hypothèse générale, mais ce ne sont pas les mêmes éléments.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q5",
            "type": "mcq",
            "prompt": "« Un sonnet » relève, dans l'hypothèse générale, de :",
            "options": [
              "La thématique",
              "La tonalité",
              "L'axe d'étude",
              "La typologie du texte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le sonnet est un type de poème : c'est l'élément de typologie de l'exemple, comme le récit, le portrait ou le dialogue cités dans la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La tonalité de l'exemple",
          "stepTheme": "La tonalité de l'exemple",
          "stepBadge": "La tonalité de l'exemple",
          "paragraphText": "Dans l'exemple du document complémentaire, l'hypothèse générale retient la tonalité lyrique.\nLe poème y est donc présenté comme un sonnet lyrique, avant la vérification par les axes.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q6",
            "type": "mcq",
            "prompt": "Dans l'exemple du document, la tonalité retenue est :",
            "options": [
              "Comique",
              "Épique",
              "Lyrique",
              "Réaliste"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'exemple associe le sonnet à la tonalité lyrique : axe n°1, un sonnet lyrique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q1",
          "type": "mcq",
          "prompt": "L'hypothèse générale se formule à partir :",
          "options": [
            "Du nombre de pages du recueil",
            "De la typologie, de la tonalité et de la thématique du texte",
            "Des questions de l'examinateur",
            "Du bilan de l'étude"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois éléments énumérés dans les deux documents de la leçon."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q2",
          "type": "mcq",
          "prompt": "La tonalité d'un texte désigne :",
          "options": [
            "Le nombre de vers du poème",
            "Le sujet abordé par le texte",
            "L'impression générale qui se dégage du texte",
            "La partie du recueil où il figure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La tonalité est définie dans la leçon comme l'impression générale qui se dégage du texte."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q3",
          "type": "mcq",
          "prompt": "Dans l'exemple du document, la thématique retenue est :",
          "options": [
            "La dédramatisation de la mort",
            "La célébration de la nature",
            "La critique de la bourgeoisie",
            "Le voyage et l'exotisme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la thématique de l'exemple : un sonnet lyrique évoquant la dédramatisation de la mort."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q4",
          "type": "mcq",
          "prompt": "Dans l'exemple du document, l'axe de lecture n°2 est :",
          "options": [
            "Un sonnet lyrique",
            "La structure en quatrains et tercets",
            "L'expression de la dédramatisation de la mort",
            "La lecture expressive du poème"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'axe n°1 porte sur la forme et la tonalité (un sonnet lyrique) ; l'axe n°2 porte sur la thématique (la dédramatisation de la mort)."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q5",
          "type": "mcq",
          "prompt": "« Un sonnet » relève, dans l'hypothèse générale, de :",
          "options": [
            "La thématique",
            "La tonalité",
            "L'axe d'étude",
            "La typologie du texte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le sonnet est un type de poème : c'est l'élément de typologie de l'exemple, comme le récit, le portrait ou le dialogue cités dans la leçon."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p04_q6",
          "type": "mcq",
          "prompt": "Dans l'exemple du document, la tonalité retenue est :",
          "options": [
            "Comique",
            "Épique",
            "Lyrique",
            "Réaliste"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'exemple associe le sonnet à la tonalité lyrique : axe n°1, un sonnet lyrique."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05",
      "order": 5,
      "title": "Vérifier l'hypothèse, puis faire le bilan",
      "summary": "Vérifier chaque axe par le tableau entrées, indices, analyses, interprétations, puis conclure par un bilan confronté à l'axe d'étude.",
      "conceptExplanation": "La vérification de l'hypothèse générale consiste à formuler et à justifier les axes de lecture, en exploitant des entrées : pour chaque entrée, le candidat repère des indices textuels, les analyse et les interprète en relation avec l'axe de lecture.\nLe document complémentaire présente cette vérification sous forme de tableau à quatre colonnes : entrées, indices, analyses, interprétations. Pour l'entrée « la structure du texte », les indices sont la répartition des vers (V1 à V4, V5 à V8, V9 à V11, V12 à V14) : l'analyse relève deux quatrains et deux tercets, et l'interprétation conclut que cette structure prouve que le poème est un poème à forme fixe, appelé spécifiquement sonnet. Pour l'entrée « l'énonciation », les indices sont les pronoms et adjectifs de la première personne (je, me, moi, mes, ma, mon) : ils marquent le moi du poète, qui exprime ses sentiments particuliers. On passe ensuite à l'étude du second axe sur le même modèle.\nL'exposé se termine par le bilan : le résultat de l'étude, ce que cette étude a permis de mettre en évidence, confronté avec l'axe d'étude pour cerner la particularité du texte par rapport aux autres textes étudiés selon le même axe. La grille précise que le bilan comporte un jugement critique sur le texte et une ouverture thématique ou littéraire.",
      "keyRule": "Vérifier, c'est passer pour chaque entrée des indices à l'analyse, puis à l'interprétation ; le bilan confronte le résultat à l'axe d'étude.",
      "formulas": [],
      "workedExample": {
        "title": "Vérifier l'axe n°1 par la structure du texte",
        "statement": "Dans l'exemple du document, comment l'entrée « la structure du texte » vérifie-t-elle l'axe « un sonnet lyrique » ?",
        "methodSteps": [
          "Entrée : la structure du texte.",
          "Indices : les vers V1 à V4, V5 à V8, puis V9 à V11 et V12 à V14.",
          "Analyse : le poème est composé de deux quatrains et de deux tercets.",
          "Interprétation : cette structure prouve que le poème est un poème à forme fixe, appelé spécifiquement sonnet."
        ],
        "conclusion": "La vérification suit toujours le même chemin : entrée, indices relevés, analyse, interprétation en relation avec l'axe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La vérification de l'hypothèse",
          "stepTheme": "La vérification de l'hypothèse",
          "stepBadge": "La vérification de l'hypothèse",
          "paragraphText": "• Vérification de l'hypothèse générale : étape où les axes de lecture sont formulés et justifiés par l'exploitation des entrées.\nPour chaque entrée, le candidat repère des indices, les analyse et les interprète en relation avec l'axe de lecture.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q1",
            "type": "mcq",
            "prompt": "Vérifier l'hypothèse générale consiste à :",
            "options": [
              "Lire le texte une seconde fois",
              "Exploiter des entrées en repérant, analysant et interprétant des indices",
              "Poser des questions à l'examinateur",
              "Résumer le texte en quelques phrases"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la démarche de la leçon : détermination des axes, choix des entrées, exploitation et interprétation cohérente des entrées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le tableau à quatre colonnes",
          "stepTheme": "Le tableau à quatre colonnes",
          "stepBadge": "Le tableau à quatre colonnes",
          "paragraphText": "• Tableau de vérification : présentation de l'étude de chaque axe en quatre colonnes.\nCes colonnes sont : entrées, indices, analyses, interprétations.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q2",
            "type": "mcq",
            "prompt": "Le tableau de vérification du document comporte les colonnes :",
            "options": [
              "Auteur, titre, date, résumé",
              "Entrées, indices, analyses, interprétations",
              "Questions, réponses, notes, bilan",
              "Introduction, développement, conclusion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les quatre colonnes du tableau donné dans le document complémentaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "L'entrée « structure du texte »",
          "stepTheme": "L'entrée « structure du texte »",
          "stepBadge": "L'entrée « structure du texte »",
          "paragraphText": "Méthode : pour l'entrée « la structure du texte », relever la répartition des vers du poème.\nV1 à V4 et V5 à V8 forment deux quatrains ; V9 à V11 et V12 à V14 forment deux tercets.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q3",
            "type": "mcq",
            "prompt": "Dans l'exemple, les vers V9 à V11 et V12 à V14 forment :",
            "options": [
              "Deux quatrains",
              "Un distique et un quatrain",
              "Deux tercets",
              "Une strophe unique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'analyse du tableau relève deux quatrains (V1-V8) et deux tercets (V9-V14), structure du sonnet."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'entrée « énonciation »",
          "stepTheme": "L'entrée « énonciation »",
          "stepBadge": "L'entrée « énonciation »",
          "paragraphText": "Pour l'entrée « l'énonciation », les indices sont les pronoms personnels et adjectifs possessifs de la première personne : je, me, moi, mes, ma, mon.\nL'interprétation du tableau : ces indices marquent le moi du poète, qui exprime ses sentiments particuliers.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q4",
            "type": "mcq",
            "prompt": "Les indices de l'entrée « énonciation » marquent, selon le tableau :",
            "options": [
              "La présence du lecteur",
              "Le moi du poète qui exprime ses sentiments particuliers",
              "La voix d'un personnage de théâtre",
              "L'absence de l'auteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'interprétation donnée dans le tableau de vérification du document complémentaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "S'arrêter aux indices",
          "stepTheme": "S'arrêter aux indices",
          "stepBadge": "S'arrêter aux indices",
          "paragraphText": "Piège : relever des indices sans les analyser ni les interpréter.\nLa grille d'évaluation demande l'exploitation et l'interprétation cohérente des entrées en relation avec l'axe de lecture : un relevé brut ne vérifie rien.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q5",
            "type": "mcq",
            "prompt": "Pour que la vérification soit complète, les indices doivent être :",
            "options": [
              "Seulement relevés dans le texte",
              "Recopiés sans commentaire",
              "Analysés et interprétés en relation avec l'axe de lecture",
              "Classés par ordre alphabétique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La grille exige le choix des entrées, puis leur exploitation et leur interprétation cohérente en relation avec l'axe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le bilan de l'étude",
          "stepTheme": "Le bilan de l'étude",
          "stepBadge": "Le bilan de l'étude",
          "paragraphText": "Le bilan consiste à faire le résumé de ce que l'étude du texte a permis de mettre en évidence.\nIl confronte ensuite ce résultat avec l'axe d'étude, pour cerner la particularité du texte par rapport aux autres textes étudiés selon le même axe.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q6",
            "type": "mcq",
            "prompt": "Le bilan de l'étude sert notamment à :",
            "options": [
              "Présenter l'auteur du texte",
              "Cerner la particularité du texte par rapport aux autres textes étudiés selon le même axe",
              "Formuler l'hypothèse générale",
              "Choisir le texte de l'entretien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la fonction du bilan selon la leçon : confronter le résultat de l'étude à l'axe d'étude pour dégager la particularité du texte."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q1",
          "type": "mcq",
          "prompt": "Vérifier l'hypothèse générale consiste à :",
          "options": [
            "Lire le texte une seconde fois",
            "Exploiter des entrées en repérant, analysant et interprétant des indices",
            "Poser des questions à l'examinateur",
            "Résumer le texte en quelques phrases"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la démarche de la leçon : détermination des axes, choix des entrées, exploitation et interprétation cohérente des entrées."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q2",
          "type": "mcq",
          "prompt": "Le tableau de vérification du document comporte les colonnes :",
          "options": [
            "Auteur, titre, date, résumé",
            "Entrées, indices, analyses, interprétations",
            "Questions, réponses, notes, bilan",
            "Introduction, développement, conclusion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les quatre colonnes du tableau donné dans le document complémentaire."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q3",
          "type": "mcq",
          "prompt": "Dans l'exemple, les vers V9 à V11 et V12 à V14 forment :",
          "options": [
            "Deux quatrains",
            "Un distique et un quatrain",
            "Deux tercets",
            "Une strophe unique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'analyse du tableau relève deux quatrains (V1-V8) et deux tercets (V9-V14), structure du sonnet."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q4",
          "type": "mcq",
          "prompt": "Les indices de l'entrée « énonciation » marquent, selon le tableau :",
          "options": [
            "La présence du lecteur",
            "Le moi du poète qui exprime ses sentiments particuliers",
            "La voix d'un personnage de théâtre",
            "L'absence de l'auteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'interprétation donnée dans le tableau de vérification du document complémentaire."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q5",
          "type": "mcq",
          "prompt": "Pour que la vérification soit complète, les indices doivent être :",
          "options": [
            "Seulement relevés dans le texte",
            "Recopiés sans commentaire",
            "Analysés et interprétés en relation avec l'axe de lecture",
            "Classés par ordre alphabétique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La grille exige le choix des entrées, puis leur exploitation et leur interprétation cohérente en relation avec l'axe."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p05_q6",
          "type": "mcq",
          "prompt": "Le bilan de l'étude sert notamment à :",
          "options": [
            "Présenter l'auteur du texte",
            "Cerner la particularité du texte par rapport aux autres textes étudiés selon le même axe",
            "Formuler l'hypothèse générale",
            "Choisir le texte de l'entretien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la fonction du bilan selon la leçon : confronter le résultat de l'étude à l'axe d'étude pour dégager la particularité du texte."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06",
      "order": 6,
      "title": "L'entretien et la grille d'évaluation",
      "summary": "Savoir ce que l'entretien peut porter et comment l'épreuve est notée : lecture méthodique sur 12, entretien sur 8.",
      "conceptExplanation": "Après l'exposé, le professeur interrogateur (ou examinateur) pose des questions au candidat. Dans le document de série A, l'entretien porte sur la culture littéraire : le texte est un prétexte pour poser des questions sur tout ce que le candidat a étudié en français au secondaire. Le document complémentaire précise que les questions portent aussi bien sur la connaissance de l'œuvre intégrale ou du groupement de textes que sur la démarche de la lecture méthodique et les procédés d'écriture mis en œuvre. Tout cela doit se dérouler dans une atmosphère de courtoisie, de respect de l'examinateur et avec une articulation bien distincte.\nLa grille d'évaluation partage la note en deux : la lecture méthodique est notée sur 12 et l'entretien sur 8. Pour la lecture méthodique : présentation et situation du texte sur 2, lecture expressive sur 2, formulation de l'hypothèse générale sur 2, vérification de l'hypothèse générale sur 4 (détermination des axes, choix des entrées, exploitation et interprétation cohérente), bilan sur 2 (jugement critique sur le texte et ouverture thématique ou littéraire). Pour l'entretien : correction de la langue et aisance de l'expression sur 2, connaissance de l'œuvre ou du groupement de textes sur 2, capacité d'analyse et de réflexion sur 2, tenue vestimentaire sur 2.",
      "keyRule": "Lecture méthodique sur 12, entretien sur 8 : la vérification de l'hypothèse pèse le plus lourd, avec 4 points.",
      "formulas": [],
      "workedExample": {
        "title": "Lire la grille avant l'épreuve",
        "statement": "Un candidat veut savoir où se gagnent le plus de points dans l'exposé. Que lui apprend la grille d'évaluation ?",
        "methodSteps": [
          "La lecture méthodique est notée sur 12 : présentation sur 2, lecture expressive sur 2, hypothèse générale sur 2, vérification sur 4, bilan sur 2.",
          "La vérification de l'hypothèse générale est donc l'élément le mieux noté de l'exposé, avec 4 points.",
          "L'entretien est noté sur 8 : langue et aisance sur 2, connaissance de l'œuvre ou du groupement de textes sur 2, analyse et réflexion sur 2, tenue vestimentaire sur 2."
        ],
        "conclusion": "La grille montre que la vérification de l'hypothèse (4 points) et la tenue, y compris vestimentaire, comptent autant que le reste doit être soigné."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'entretien",
          "stepTheme": "L'entretien",
          "stepBadge": "L'entretien",
          "paragraphText": "• Entretien : seconde partie de l'épreuve, après l'exposé, pendant laquelle le professeur interrogateur pose des questions au candidat.\nLe texte présenté sert de prétexte à des questions sur tout ce que le candidat a étudié en français au secondaire.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q1",
            "type": "mcq",
            "prompt": "Pendant l'entretien, les questions peuvent porter sur :",
            "options": [
              "Uniquement le passage présenté",
              "Tout ce que le candidat a étudié en français au secondaire",
              "Les autres matières de la classe de terminale",
              "La vie personnelle du candidat"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document de série A précise que le texte est un prétexte pour interroger le candidat sur tout son programme de français du secondaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les deux parties de la note",
          "stepTheme": "Les deux parties de la note",
          "stepBadge": "Les deux parties de la note",
          "paragraphText": "La grille d'évaluation partage l'épreuve en deux parties notées séparément.\nLa lecture méthodique est notée sur 12 et l'entretien sur 8.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q2",
            "type": "mcq",
            "prompt": "Selon la grille, la lecture méthodique et l'entretien sont notés respectivement :",
            "options": [
              "Sur 10 et sur 10",
              "Sur 8 et sur 12",
              "Sur 12 et sur 8",
              "Sur 20 et sur 20"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Lecture méthodique sur 12, entretien sur 8 : c'est le partage indiqué par la grille d'évaluation de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'élément le mieux noté",
          "stepTheme": "L'élément le mieux noté",
          "stepBadge": "L'élément le mieux noté",
          "paragraphText": "Dans la lecture méthodique, la vérification de l'hypothèse générale est notée sur 4.\nElle couvre la détermination des axes de lecture, le choix des entrées et l'exploitation et l'interprétation cohérente des entrées en relation avec l'axe de lecture.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q3",
            "type": "mcq",
            "prompt": "L'élément de l'exposé noté sur 4 est :",
            "options": [
              "La présentation du texte",
              "La lecture expressive",
              "La formulation de l'hypothèse générale",
              "La vérification de l'hypothèse générale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Présentation, lecture et hypothèse valent 2 points chacune ; la vérification de l'hypothèse vaut 4 points."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le contenu du bilan noté",
          "stepTheme": "Le contenu du bilan noté",
          "stepBadge": "Le contenu du bilan noté",
          "paragraphText": "La grille note le bilan de l'étude sur 2.\nElle y attend un jugement critique sur le texte et une ouverture thématique ou littéraire.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q4",
            "type": "mcq",
            "prompt": "Dans le bilan, la grille attend :",
            "options": [
              "Un jugement critique sur le texte et une ouverture thématique ou littéraire",
              "Une nouvelle lecture du texte",
              "La liste des textes étudiés en classe",
              "Un résumé de la vie de l'auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les deux éléments du bilan énumérés dans la grille : jugement critique et ouverture thématique ou littéraire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La tenue est aussi notée",
          "stepTheme": "La tenue est aussi notée",
          "stepBadge": "La tenue est aussi notée",
          "paragraphText": "Piège : croire que seule la prestation orale compte dans l'entretien.\nLa grille attribue 2 points à la tenue vestimentaire, aux côtés de la correction de la langue, de la connaissance de l'œuvre et de la capacité d'analyse et de réflexion.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q5",
            "type": "mcq",
            "prompt": "Dans l'entretien, la tenue vestimentaire est notée :",
            "options": [
              "Sur 2",
              "Elle n'est pas notée",
              "Sur 4",
              "Uniquement pour les candidats libres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La grille de l'entretien (sur 8) comprend la tenue vestimentaire pour 2 points, comme les trois autres éléments."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des questions d'entretien possibles",
          "stepTheme": "Des questions d'entretien possibles",
          "stepBadge": "Des questions d'entretien possibles",
          "paragraphText": "Exemple de portée de l'entretien selon le document complémentaire : la connaissance de l'œuvre intégrale ou du groupement de textes.\nLes questions portent aussi sur la démarche de la lecture méthodique et sur les procédés d'écriture mis en œuvre, dans une articulation bien distincte et le respect de l'examinateur.",
          "exercise": {
            "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q6",
            "type": "mcq",
            "prompt": "Parmi ces sujets, lequel relève de l'entretien selon le document complémentaire ?",
            "options": [
              "Les procédés d'écriture mis en œuvre dans le texte",
              "Le règlement intérieur de l'établissement",
              "Les résultats des autres candidats",
              "La programmation du centre d'examen"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document cite la connaissance de l'œuvre ou du groupement de textes, la démarche de la lecture méthodique et les procédés d'écriture."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q1",
          "type": "mcq",
          "prompt": "Pendant l'entretien, les questions peuvent porter sur :",
          "options": [
            "Uniquement le passage présenté",
            "Tout ce que le candidat a étudié en français au secondaire",
            "Les autres matières de la classe de terminale",
            "La vie personnelle du candidat"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document de série A précise que le texte est un prétexte pour interroger le candidat sur tout son programme de français du secondaire."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q2",
          "type": "mcq",
          "prompt": "Selon la grille, la lecture méthodique et l'entretien sont notés respectivement :",
          "options": [
            "Sur 10 et sur 10",
            "Sur 8 et sur 12",
            "Sur 12 et sur 8",
            "Sur 20 et sur 20"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Lecture méthodique sur 12, entretien sur 8 : c'est le partage indiqué par la grille d'évaluation de la leçon."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q3",
          "type": "mcq",
          "prompt": "L'élément de l'exposé noté sur 4 est :",
          "options": [
            "La présentation du texte",
            "La lecture expressive",
            "La formulation de l'hypothèse générale",
            "La vérification de l'hypothèse générale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Présentation, lecture et hypothèse valent 2 points chacune ; la vérification de l'hypothèse vaut 4 points."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q4",
          "type": "mcq",
          "prompt": "Dans le bilan, la grille attend :",
          "options": [
            "Un jugement critique sur le texte et une ouverture thématique ou littéraire",
            "Une nouvelle lecture du texte",
            "La liste des textes étudiés en classe",
            "Un résumé de la vie de l'auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les deux éléments du bilan énumérés dans la grille : jugement critique et ouverture thématique ou littéraire."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q5",
          "type": "mcq",
          "prompt": "Dans l'entretien, la tenue vestimentaire est notée :",
          "options": [
            "Sur 2",
            "Elle n'est pas notée",
            "Sur 4",
            "Uniquement pour les candidats libres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La grille de l'entretien (sur 8) comprend la tenue vestimentaire pour 2 points, comme les trois autres éléments."
        },
        {
          "id": "terminale_a1_francais_sf_l12_preparation_oral_bac_p06_q6",
          "type": "mcq",
          "prompt": "Parmi ces sujets, lequel relève de l'entretien selon le document complémentaire ?",
          "options": [
            "Les procédés d'écriture mis en œuvre dans le texte",
            "Le règlement intérieur de l'établissement",
            "Les résultats des autres candidats",
            "La programmation du centre d'examen"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document cite la connaissance de l'œuvre ou du groupement de textes, la démarche de la lecture méthodique et les procédés d'écriture."
        }
      ]
    }
  ]
};
