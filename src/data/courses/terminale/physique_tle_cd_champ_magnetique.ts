import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 6 : Champ magnétique » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1322
export const PHYSIQUE_TLE_CD_L06_CHAMP_MAGNETIQUE: CurriculumChapter = {
  "id": "terminale_c_physique_l06_champ_magnetique",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 6,
  "title": "Leçon 6 : Champ magnétique",
  "summary": "Après la mise en évidence des interactions magnétiques, on définit le vecteur champ magnétique B et ses caractéristiques, les lignes de champ, puis le champ uniforme créé à l'intérieur d'un solénoïde : B = μ₀·n·I.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1322",
  "points": [
    {
      "id": "terminale_c_physique_l06_champ_magnetique_p01",
      "order": 1,
      "title": "Mise en évidence des interactions magnétiques",
      "summary": "Pôles de même nom se repoussent, pôles de noms différents s'attirent — pour les aimants comme pour les bobines parcourues par un courant.",
      "conceptExplanation": "Les expériences du §I montrent les interactions magnétiques : les pôles de même nom de deux aimants se repoussent, les pôles de noms différents s'attirent.\nLe même comportement s'observe avec des bobines parcourues par un courant électrique : les faces de même nom se repoussent, les faces de noms différents s'attirent.\nDans la situation d'apprentissage, une aiguille aimantée dévie lorsqu'elle est proche d'un aimant ou d'une bobine parcourue par un courant : les propriétés du lieu sont modifiées.\nConclusion du résumé : en présence d'un aimant ou d'une bobine parcourue par un courant, on dit qu'il règne un champ magnétique dans la région concernée.",
      "keyRule": "Même nom ⇒ répulsion ; noms différents ⇒ attraction — pour les pôles d'aimants comme pour les faces de bobines.",
      "formulas": [
        {
          "name": "Règle des interactions",
          "formula": "\\text{Même nom : répulsion ; noms différents : attraction}",
          "note": "Valable pour les pôles d'aimants et les faces de bobines parcourues par un courant."
        }
      ],
      "workedExample": {
        "title": "L'aiguille aimantée du réparateur (situation d'apprentissage)",
        "statement": "Un élève observe qu'une aiguille aimantée dévie près d'un aimant ou d'une bobine parcourue par un courant électrique. Qu'en conclure ?",
        "methodSteps": [
          "L'aiguille aimantée est sensible aux interactions magnétiques : elle s'oriente selon le champ présent.",
          "Sa déviation révèle que l'aimant et la bobine parcourue par un courant modifient les propriétés de l'espace environnant.",
          "Aimants et courants sont donc deux sources de champ magnétique."
        ],
        "conclusion": "C'est le point de départ du §I du résumé : la mise en évidence expérimentale du champ magnétique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Deux pôles de même nom se repoussent",
          "stepTheme": "Deux pôles de même nom se repoussent",
          "stepBadge": "Deux pôles de même nom se repoussent",
          "paragraphText": "L'expérience du §I.1 est sans ambiguïté : deux pôles nord, ou deux pôles sud, se repoussent.\nC'est la même règle que pour les charges électriques de même signe.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p01_q1",
            "type": "mcq",
            "prompt": "Deux pôles de même nom de deux aimants :",
            "options": [
              "Se repoussent",
              "S'attirent",
              "N'interagissent pas",
              "Se neutralisent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première observation du §I.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux pôles de noms différents s'attirent",
          "stepTheme": "Deux pôles de noms différents s'attirent",
          "stepBadge": "Deux pôles de noms différents s'attirent",
          "paragraphText": "Un pôle nord et un pôle sud se font face : les deux aimants s'attirent.\nC'est le comportement exploité par la boussole, dont l'aiguille est un petit aimant.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p01_q2",
            "type": "mcq",
            "prompt": "Un pôle nord et un pôle sud de deux aimants proches :",
            "options": [
              "Se repoussent",
              "S'attirent",
              "Se repoussent puis s'attirent",
              "N'ont aucun effet l'un sur l'autre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deuxième observation du §I.1 : les pôles de noms différents s'attirent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les bobines se comportent comme des aimants",
          "stepTheme": "Les bobines se comportent comme des aimants",
          "stepBadge": "Les bobines se comportent comme des aimants",
          "paragraphText": "Une bobine parcourue par un courant possède deux faces qui jouent le rôle de pôles.\nLe résumé note que les faces de même nom de deux bobines se repoussent et que les faces de noms différents s'attirent, exactement comme des aimants.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p01_q3",
            "type": "mcq",
            "prompt": "Deux bobines parcourues par un courant, présentées face à face par leurs faces de même nom :",
            "options": [
              "S'attirent toujours",
              "Ne se voient pas",
              "Se repoussent, comme deux pôles de même nom",
              "Créent un courant dans l'air"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'observation du §I.1 pour les bobines : un courant crée donc un champ magnétique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La conclusion : il règne un champ magnétique",
          "stepTheme": "La conclusion : il règne un champ magnétique",
          "stepBadge": "La conclusion : il règne un champ magnétique",
          "paragraphText": "La présence d'un aimant ou d'une bobine parcourue par un courant modifie les propriétés d'un lieu.\nLe résumé conclut : on dit qu'il règne un champ magnétique dans cette région de l'espace.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p01_q4",
            "type": "mcq",
            "prompt": "Autour d'un aimant ou d'une bobine parcourue par un courant, les propriétés de l'espace sont modifiées : on dit qu'il y règne :",
            "options": [
              "Un champ électrique",
              "Un champ de pesanteur",
              "Un vide absolu",
              "Un champ magnétique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la conclusion du §I.2, qui motive la définition de l'espace champ magnétique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'aiguille aimantée : un détecteur de champ",
          "stepTheme": "L'aiguille aimantée : un détecteur de champ",
          "stepBadge": "L'aiguille aimantée : un détecteur de champ",
          "paragraphText": "Placée dans un champ magnétique, une aiguille aimantée libre dévie et s'oriente.\nC'est l'observation de la situation d'apprentissage : l'aiguille réagit à l'aimant comme à la bobine alimentée.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p01_q5",
            "type": "mcq",
            "prompt": "Dans la situation d'apprentissage, l'aiguille aimantée dévie lorsqu'elle est proche :",
            "options": [
              "D'un aimant ou d'une bobine parcourue par un courant électrique",
              "D'un morceau de bois",
              "D'une règle en plastique frottée seulement",
              "D'un récipient d'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'aiguille révèle la présence d'un champ magnétique, quelle que soit sa source (aimant ou courant)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une bobine non alimentée ne crée pas de champ",
          "stepTheme": "Une bobine non alimentée ne crée pas de champ",
          "stepBadge": "Une bobine non alimentée ne crée pas de champ",
          "paragraphText": "Piège : ce n'est pas la bobine elle-même, mais le courant qui la parcourt, qui crée le champ.\nSans courant, les faces de la bobine n'attirent ni ne repoussent rien : c'est le courant électrique qui est la source.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p01_q6",
            "type": "mcq",
            "prompt": "Une bobine crée un champ magnétique :",
            "options": [
              "En permanence, même sans courant",
              "Uniquement lorsqu'elle est parcourue par un courant électrique",
              "Uniquement si elle contient un noyau de fer",
              "Jamais : seuls les aimants en créent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Toutes les expériences du §I précisent « bobine parcourue par un courant électrique »."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p01_q1",
          "type": "mcq",
          "prompt": "Deux pôles de même nom de deux aimants :",
          "options": [
            "Se repoussent",
            "S'attirent",
            "N'interagissent pas",
            "Se neutralisent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première observation du §I.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p01_q2",
          "type": "mcq",
          "prompt": "Un pôle nord et un pôle sud de deux aimants proches :",
          "options": [
            "Se repoussent",
            "S'attirent",
            "Se repoussent puis s'attirent",
            "N'ont aucun effet l'un sur l'autre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deuxième observation du §I.1 : les pôles de noms différents s'attirent."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p01_q3",
          "type": "mcq",
          "prompt": "Deux bobines parcourues par un courant, présentées face à face par leurs faces de même nom :",
          "options": [
            "S'attirent toujours",
            "Ne se voient pas",
            "Se repoussent, comme deux pôles de même nom",
            "Créent un courant dans l'air"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'observation du §I.1 pour les bobines : un courant crée donc un champ magnétique."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p01_q4",
          "type": "mcq",
          "prompt": "Autour d'un aimant ou d'une bobine parcourue par un courant, les propriétés de l'espace sont modifiées : on dit qu'il y règne :",
          "options": [
            "Un champ électrique",
            "Un champ de pesanteur",
            "Un vide absolu",
            "Un champ magnétique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la conclusion du §I.2, qui motive la définition de l'espace champ magnétique."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p01_q5",
          "type": "mcq",
          "prompt": "Dans la situation d'apprentissage, l'aiguille aimantée dévie lorsqu'elle est proche :",
          "options": [
            "D'un aimant ou d'une bobine parcourue par un courant électrique",
            "D'un morceau de bois",
            "D'une règle en plastique frottée seulement",
            "D'un récipient d'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'aiguille révèle la présence d'un champ magnétique, quelle que soit sa source (aimant ou courant)."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p01_q6",
          "type": "mcq",
          "prompt": "Une bobine crée un champ magnétique :",
          "options": [
            "En permanence, même sans courant",
            "Uniquement lorsqu'elle est parcourue par un courant électrique",
            "Uniquement si elle contient un noyau de fer",
            "Jamais : seuls les aimants en créent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Toutes les expériences du §I précisent « bobine parcourue par un courant électrique »."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l06_champ_magnetique_p02",
      "order": 2,
      "title": "L'espace champ magnétique et le vecteur B",
      "summary": "Le champ est caractérisé en tout point par le vecteur B : direction de l'aiguille aimantée, sens du sud vers le nord de l'aiguille, valeur en teslas.",
      "conceptExplanation": "Un espace champ magnétique est une région de l'espace dont les propriétés sont modifiées par la présence d'un aimant ou d'un conducteur parcouru par un courant électrique.\nLes sources de champ magnétique citées par le résumé sont les aimants, les courants et la Terre.\nEn tout point de cet espace, le champ est caractérisé par un vecteur, le vecteur champ magnétique B : son point d'application est le point M considéré, sa direction est celle de l'axe d'une aiguille aimantée placée en M, et son sens va du pôle sud vers le pôle nord de cette aiguille.\nSa valeur se mesure en tesla (T), à l'aide d'un teslamètre.",
      "keyRule": "B au point M : direction de l'aiguille en M, sens sud → nord de l'aiguille, valeur en tesla (T).",
      "formulas": [
        {
          "name": "Unité du champ magnétique",
          "formula": "B \\text{ en tesla (T), mesuré au teslamètre}",
          "note": "Les champs de la leçon vont de 10⁻⁵ T (champ terrestre) à 10⁻² T (solénoïde)."
        }
      ],
      "workedExample": {
        "title": "Les caractéristiques de B en un point",
        "statement": "Une aiguille aimantée placée en un point M s'oriente horizontalement vers le nord géographique. Donne les caractéristiques du vecteur B en M.",
        "methodSteps": [
          "Point d'application : le point M.",
          "Direction : celle de l'axe de l'aiguille aimantée en M.",
          "Sens : du pôle sud vers le pôle nord de l'aiguille ; valeur : lue au teslamètre, en teslas."
        ],
        "conclusion": "Ce sont les quatre caractéristiques du §II.2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'espace champ magnétique",
          "stepTheme": "L'espace champ magnétique",
          "stepBadge": "L'espace champ magnétique",
          "paragraphText": "• Espace champ magnétique : région de l'espace dont les propriétés sont modifiées par la présence d'un aimant ou d'un conducteur parcouru par un courant électrique.\nC'est dans cette région qu'une aiguille aimantée est déviée.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p02_q1",
            "type": "mcq",
            "prompt": "Un espace champ magnétique est une région de l'espace :",
            "options": [
              "Dont les propriétés sont modifiées par un aimant ou un conducteur parcouru par un courant",
              "Totalement vide de matière",
              "Où la température est uniforme",
              "Traversée par la lumière uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §II.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les sources de champ magnétique",
          "stepTheme": "Les sources de champ magnétique",
          "stepBadge": "Les sources de champ magnétique",
          "paragraphText": "Le résumé liste trois sources de champ magnétique.\nLes aimants, les courants électriques, et la Terre elle-même, dont le champ oriente les boussoles.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p02_q2",
            "type": "mcq",
            "prompt": "D'après le résumé, les sources de champ magnétique sont :",
            "options": [
              "Les charges électriques immobiles",
              "Les aimants, les courants et la Terre",
              "La lumière et la chaleur",
              "Les masses et la gravitation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois sources listées au §II.1 ; une charge immobile ne crée pas de champ magnétique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La direction de B : celle de l'aiguille aimantée",
          "stepTheme": "La direction de B : celle de l'aiguille aimantée",
          "stepBadge": "La direction de B : celle de l'aiguille aimantée",
          "paragraphText": "La direction du vecteur B en un point M est celle de l'axe d'une aiguille aimantée placée en ce point.\nL'aiguille, libre de tourner, s'aligne spontanément sur cette direction.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p02_q3",
            "type": "mcq",
            "prompt": "La direction du vecteur champ magnétique en un point M est :",
            "options": [
              "Celle du fil conducteur le plus proche",
              "Toujours verticale",
              "Celle de l'axe d'une aiguille aimantée placée au point M",
              "Celle du rayon lumineux qui passe en M"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la caractéristique « direction » du §II.2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le sens de B : du sud vers le nord de l'aiguille",
          "stepTheme": "Le sens de B : du sud vers le nord de l'aiguille",
          "stepBadge": "Le sens de B : du sud vers le nord de l'aiguille",
          "paragraphText": "Le sens du vecteur B va du pôle sud vers le pôle nord de l'aiguille aimantée placée au point considéré.\nÀ l'intérieur d'un aimant, B va donc du sud vers le nord ; à l'extérieur, les lignes ressortent par le nord.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p02_q4",
            "type": "mcq",
            "prompt": "Le sens du vecteur champ magnétique est celui qui va :",
            "options": [
              "Du pôle nord vers le pôle sud de l'aiguille",
              "De l'est vers l'ouest",
              "Dans le sens du courant le plus proche",
              "Du pôle sud vers le pôle nord de l'aiguille aimantée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la caractéristique « sens » du §II.2 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La valeur de B : le tesla et le teslamètre",
          "stepTheme": "La valeur de B : le tesla et le teslamètre",
          "stepBadge": "La valeur de B : le tesla et le teslamètre",
          "paragraphText": "La valeur (ou norme) du champ magnétique se mesure en tesla, symbole T.\nL'appareil de mesure est le teslamètre, utilisé dans la situation d'évaluation et l'exercice 5 pour relever B en fonction de I.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p02_q5",
            "type": "mcq",
            "prompt": "Le champ magnétique se mesure en tesla (T) à l'aide :",
            "options": [
              "D'un teslamètre",
              "D'un voltmètre",
              "D'un dynamomètre",
              "D'une boussole graduée en ampères"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'indication du §II.2 : la valeur de B est mesurée au teslamètre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le point d'application : tout point du champ",
          "stepTheme": "Le point d'application : tout point du champ",
          "stepBadge": "Le point d'application : tout point du champ",
          "paragraphText": "Piège : le vecteur B n'existe pas seulement au centre des dispositifs.\nSon point d'application peut être tout point M de l'espace où règne le champ : le champ est défini en tout point.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p02_q6",
            "type": "mcq",
            "prompt": "Le point d'application du vecteur champ magnétique B peut être :",
            "options": [
              "Uniquement le centre de l'aimant",
              "Tout point M de l'espace où règne le champ",
              "Uniquement la surface de la bobine",
              "Le pôle nord seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première caractéristique du §II.2 : le champ est une grandeur définie en tout point de l'espace."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p02_q1",
          "type": "mcq",
          "prompt": "Un espace champ magnétique est une région de l'espace :",
          "options": [
            "Dont les propriétés sont modifiées par un aimant ou un conducteur parcouru par un courant",
            "Totalement vide de matière",
            "Où la température est uniforme",
            "Traversée par la lumière uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §II.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p02_q2",
          "type": "mcq",
          "prompt": "D'après le résumé, les sources de champ magnétique sont :",
          "options": [
            "Les charges électriques immobiles",
            "Les aimants, les courants et la Terre",
            "La lumière et la chaleur",
            "Les masses et la gravitation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois sources listées au §II.1 ; une charge immobile ne crée pas de champ magnétique."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p02_q3",
          "type": "mcq",
          "prompt": "La direction du vecteur champ magnétique en un point M est :",
          "options": [
            "Celle du fil conducteur le plus proche",
            "Toujours verticale",
            "Celle de l'axe d'une aiguille aimantée placée au point M",
            "Celle du rayon lumineux qui passe en M"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la caractéristique « direction » du §II.2."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p02_q4",
          "type": "mcq",
          "prompt": "Le sens du vecteur champ magnétique est celui qui va :",
          "options": [
            "Du pôle nord vers le pôle sud de l'aiguille",
            "De l'est vers l'ouest",
            "Dans le sens du courant le plus proche",
            "Du pôle sud vers le pôle nord de l'aiguille aimantée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la caractéristique « sens » du §II.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p02_q5",
          "type": "mcq",
          "prompt": "Le champ magnétique se mesure en tesla (T) à l'aide :",
          "options": [
            "D'un teslamètre",
            "D'un voltmètre",
            "D'un dynamomètre",
            "D'une boussole graduée en ampères"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'indication du §II.2 : la valeur de B est mesurée au teslamètre."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p02_q6",
          "type": "mcq",
          "prompt": "Le point d'application du vecteur champ magnétique B peut être :",
          "options": [
            "Uniquement le centre de l'aimant",
            "Tout point M de l'espace où règne le champ",
            "Uniquement la surface de la bobine",
            "Le pôle nord seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première caractéristique du §II.2 : le champ est une grandeur définie en tout point de l'espace."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l06_champ_magnetique_p03",
      "order": 3,
      "title": "Lignes de champ et spectres magnétiques",
      "summary": "Une ligne de champ est tangente en chaque point au vecteur B et orientée dans son sens ; leur ensemble forme le spectre magnétique.",
      "conceptExplanation": "Une ligne de champ est une courbe tangente, en chacun de ses points, au vecteur champ magnétique B, et orientée dans le même sens que B.\nUn spectre magnétique est l'ensemble des lignes de champ d'une source ; le résumé montre ceux de l'aimant droit et de l'aimant en U.\nÀ l'extérieur d'un aimant, les lignes sortent par le pôle nord et rentrent par le pôle sud ; elles ne se coupent jamais.\nLa documentation rappelle que le champ magnétique est une grandeur vectorielle — norme, direction et sens définis en tout point de l'espace — et que sa présence se traduit notamment par la force de Lorentz sur les charges électriques en mouvement.",
      "keyRule": "Ligne de champ : tangente à B en tout point, orientée comme B ; lignes serrées = champ intense.",
      "formulas": [
        {
          "name": "Ligne de champ",
          "formula": "\\text{En tout point M de la ligne, } \\vec{B} \\text{ est tangent à la ligne et de même sens}",
          "note": "Le spectre est l'ensemble des lignes de champ d'une source."
        }
      ],
      "workedExample": {
        "title": "Lire un spectre d'aimant droit",
        "statement": "Sur le spectre d'un aimant droit, comment reconnaître le pôle nord et le sens du champ ?",
        "methodSteps": [
          "Les lignes de champ sortent de l'aimant par le pôle nord et y rentrent par le pôle sud.",
          "En un point quelconque, le vecteur B est tangent à la ligne qui y passe.",
          "L'orientation des lignes donne directement le sens de B."
        ],
        "conclusion": "C'est la lecture des spectres du §II.3, utilisée dans l'exercice 1 pour le solénoïde."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'une ligne de champ",
          "stepTheme": "La définition d'une ligne de champ",
          "stepBadge": "La définition d'une ligne de champ",
          "paragraphText": "• Ligne de champ : courbe tangente, en chacun de ses points, au vecteur champ magnétique B.\nElle est orientée dans le même sens que le vecteur B.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p03_q1",
            "type": "mcq",
            "prompt": "Une ligne de champ magnétique est une courbe :",
            "options": [
              "Perpendiculaire au vecteur B en tout point",
              "Qui relie les deux pôles en ligne droite",
              "Tangente en chacun de ses points au vecteur B et orientée dans le même sens que B",
              "Qui entoure les charges électriques immobiles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §II.3 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le spectre magnétique",
          "stepTheme": "Le spectre magnétique",
          "stepBadge": "Le spectre magnétique",
          "paragraphText": "• Spectre magnétique : ensemble des lignes de champ d'une source donnée.\nLe résumé présente les spectres de l'aimant droit et de l'aimant en U, que l'on visualise classiquement avec de la limaille de fer.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p03_q2",
            "type": "mcq",
            "prompt": "Un spectre magnétique est :",
            "options": [
              "L'ensemble des lignes de champ d'une source",
              "La liste des valeurs de B",
              "Un appareil de mesure",
              "Le graphique de B en fonction du temps"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition qui suit celle de ligne de champ au §II.3."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le sens de parcours des lignes autour d'un aimant",
          "stepTheme": "Le sens de parcours des lignes autour d'un aimant",
          "stepBadge": "Le sens de parcours des lignes autour d'un aimant",
          "paragraphText": "À l'extérieur d'un aimant, les lignes de champ vont du pôle nord vers le pôle sud.\nÀ l'intérieur de l'aimant, elles reviennent du sud vers le nord : les lignes de champ sont des courbes fermées.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p03_q3",
            "type": "mcq",
            "prompt": "À l'extérieur d'un aimant, les lignes de champ sont orientées :",
            "options": [
              "Du pôle sud vers le pôle nord",
              "Du pôle nord vers le pôle sud",
              "Dans le sens horaire uniquement",
              "Elles n'ont pas d'orientation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elles sont orientées comme B, qui va du sud vers le nord à l'intérieur de l'aiguille ou de l'aimant, donc du nord vers le sud à l'extérieur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Deux lignes de champ ne se coupent jamais",
          "stepTheme": "Deux lignes de champ ne se coupent jamais",
          "stepBadge": "Deux lignes de champ ne se coupent jamais",
          "paragraphText": "En un point donné, le vecteur B est unique : il n'a qu'une direction et qu'un sens.\nDeux lignes de champ ne peuvent donc pas se croiser, sinon B aurait deux directions au point de croisement.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p03_q4",
            "type": "mcq",
            "prompt": "Deux lignes de champ magnétique peuvent-elles se couper ?",
            "options": [
              "Oui, aux pôles",
              "Oui, si le champ est intense",
              "Non, jamais : le vecteur B est unique en chaque point",
              "Oui, à l'intérieur du solénoïde"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Au point de croisement, B devrait avoir deux directions différentes : impossible."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un champ vectoriel (documentation)",
          "stepTheme": "Un champ vectoriel (documentation)",
          "stepBadge": "Un champ vectoriel (documentation)",
          "paragraphText": "La documentation définit le champ magnétique comme une grandeur ayant le caractère d'un champ vectoriel.\nElle est caractérisée par une norme, une direction et un sens, définis en tout point de l'espace.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p03_q5",
            "type": "mcq",
            "prompt": "D'après la documentation, le champ magnétique est une grandeur vectorielle caractérisée par :",
            "options": [
              "Une norme seulement",
              "Une température et une pression",
              "Une masse et un volume",
              "Une norme, une direction et un sens, en tout point de l'espace"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la première phrase de la documentation (Wikipédia) qui clôt le résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La force de Lorentz (documentation)",
          "stepTheme": "La force de Lorentz (documentation)",
          "stepBadge": "La force de Lorentz (documentation)",
          "paragraphText": "La documentation indique que la présence du champ magnétique se traduit par une force sur les charges électriques en mouvement.\nCette force, dite force de Lorentz, est à l'origine de nombreux effets sur les matériaux (ferromagnétisme, paramagnétisme…).",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p03_q6",
            "type": "mcq",
            "prompt": "D'après la documentation, le champ magnétique exerce la force de Lorentz sur :",
            "options": [
              "Les charges électriques en mouvement",
              "Les charges électriques immobiles",
              "Les masses au repos",
              "Les photons uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'effet cité par la documentation ; une charge immobile ne subit pas de force magnétique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p03_q1",
          "type": "mcq",
          "prompt": "Une ligne de champ magnétique est une courbe :",
          "options": [
            "Perpendiculaire au vecteur B en tout point",
            "Qui relie les deux pôles en ligne droite",
            "Tangente en chacun de ses points au vecteur B et orientée dans le même sens que B",
            "Qui entoure les charges électriques immobiles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §II.3 du résumé."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p03_q2",
          "type": "mcq",
          "prompt": "Un spectre magnétique est :",
          "options": [
            "L'ensemble des lignes de champ d'une source",
            "La liste des valeurs de B",
            "Un appareil de mesure",
            "Le graphique de B en fonction du temps"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition qui suit celle de ligne de champ au §II.3."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p03_q3",
          "type": "mcq",
          "prompt": "À l'extérieur d'un aimant, les lignes de champ sont orientées :",
          "options": [
            "Du pôle sud vers le pôle nord",
            "Du pôle nord vers le pôle sud",
            "Dans le sens horaire uniquement",
            "Elles n'ont pas d'orientation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elles sont orientées comme B, qui va du sud vers le nord à l'intérieur de l'aiguille ou de l'aimant, donc du nord vers le sud à l'extérieur."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p03_q4",
          "type": "mcq",
          "prompt": "Deux lignes de champ magnétique peuvent-elles se couper ?",
          "options": [
            "Oui, aux pôles",
            "Oui, si le champ est intense",
            "Non, jamais : le vecteur B est unique en chaque point",
            "Oui, à l'intérieur du solénoïde"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Au point de croisement, B devrait avoir deux directions différentes : impossible."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p03_q5",
          "type": "mcq",
          "prompt": "D'après la documentation, le champ magnétique est une grandeur vectorielle caractérisée par :",
          "options": [
            "Une norme seulement",
            "Une température et une pression",
            "Une masse et un volume",
            "Une norme, une direction et un sens, en tout point de l'espace"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la première phrase de la documentation (Wikipédia) qui clôt le résumé."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p03_q6",
          "type": "mcq",
          "prompt": "D'après la documentation, le champ magnétique exerce la force de Lorentz sur :",
          "options": [
            "Les charges électriques en mouvement",
            "Les charges électriques immobiles",
            "Les masses au repos",
            "Les photons uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'effet cité par la documentation ; une charge immobile ne subit pas de force magnétique."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l06_champ_magnetique_p04",
      "order": 4,
      "title": "Le solénoïde et son champ intérieur",
      "summary": "Dans un solénoïde long, le champ intérieur est uniforme, porté par l'axe ; son sens est donné par la règle du bonhomme d'Ampère.",
      "conceptExplanation": "Un solénoïde est une bobine dont la longueur L est au moins dix fois supérieure à son rayon (L ≥ 10·R).\nÀ l'intérieur d'un solénoïde infiniment long, le champ magnétique est uniforme : sa direction est celle de l'axe du solénoïde.\nSon sens est donné par la règle du bonhomme d'Ampère, ou par les règles de la main droite : le bonhomme, placé sur le fil de sorte que le courant entre par ses pieds et sorte par sa tête, tend le bras gauche dans le sens du vecteur champ.\nLes deux extrémités du solénoïde se comportent comme les pôles d'un aimant : la face par où sortent les lignes de champ est la face nord, l'autre est la face sud (exercice 1).",
      "keyRule": "Solénoïde : champ intérieur uniforme, direction = l'axe, sens = règle du bonhomme d'Ampère ; face de sortie des lignes = face nord.",
      "formulas": [
        {
          "name": "Condition de solénoïde",
          "formula": "L \\geq 10 \\times R",
          "note": "L longueur de la bobine, R son rayon : c'est la définition du §II.4.1."
        }
      ],
      "workedExample": {
        "title": "Nommer les faces d'un solénoïde (exercice 1)",
        "statement": "Sur le schéma d'un solénoïde parcouru par un courant, comment identifier la face nord et la face sud ?",
        "methodSteps": [
          "On représente d'abord les lignes de champ à l'intérieur du solénoïde, parallèles à son axe.",
          "On oriente ces lignes avec la règle du bonhomme d'Ampère, selon le sens du courant.",
          "La face par laquelle les lignes sortent du solénoïde est la face nord ; celle par laquelle elles entrent est la face sud."
        ],
        "conclusion": "C'est la correction de l'exercice 1 : face nord du côté de la sortie des lignes, face sud du côté de l'entrée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition du solénoïde",
          "stepTheme": "La définition du solénoïde",
          "stepBadge": "La définition du solénoïde",
          "paragraphText": "• Solénoïde : bobine dont la longueur L est au moins dix fois supérieure à son rayon.\nC'est cette géométrie allongée qui garantit un champ intérieur sensiblement uniforme.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p04_q1",
            "type": "mcq",
            "prompt": "Un solénoïde est une bobine dont :",
            "options": [
              "La longueur est au moins 10 fois supérieure à son rayon",
              "Le rayon est 10 fois supérieur à la longueur",
              "Le nombre de spires est inférieur à 10",
              "La longueur est égale au diamètre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §II.4.1, redemandée à la question 1.1 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le champ intérieur est uniforme",
          "stepTheme": "Le champ intérieur est uniforme",
          "stepBadge": "Le champ intérieur est uniforme",
          "paragraphText": "À l'intérieur d'un solénoïde infiniment long, le champ magnétique est uniforme.\nSes lignes de champ y sont des droites parallèles à l'axe et régulièrement espacées.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p04_q2",
            "type": "mcq",
            "prompt": "À l'intérieur d'un long solénoïde parcouru par un courant, le champ magnétique est :",
            "options": [
              "Nul",
              "Uniforme",
              "Perpendiculaire à l'axe",
              "Maximal aux extrémités seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la propriété du §II.4.1 : B garde même direction, même sens et même valeur à l'intérieur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La direction : celle de l'axe",
          "stepTheme": "La direction : celle de l'axe",
          "stepBadge": "La direction : celle de l'axe",
          "paragraphText": "La direction du champ intérieur est celle de l'axe du solénoïde.\nUne aiguille aimantée placée au centre s'aligne donc sur cet axe, comme dans l'exercice 4.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p04_q3",
            "type": "mcq",
            "prompt": "À l'intérieur du solénoïde, la direction du vecteur B est :",
            "options": [
              "Celle des spires",
              "Radiale, vers l'extérieur",
              "Celle de l'axe du solénoïde",
              "Verticale dans tous les cas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la première caractéristique du champ intérieur donnée au §II.4.1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le sens : la règle du bonhomme d'Ampère",
          "stepTheme": "Le sens : la règle du bonhomme d'Ampère",
          "stepBadge": "Le sens : la règle du bonhomme d'Ampère",
          "paragraphText": "Le bonhomme d'Ampère, placé sur le fil de sorte que le courant entre par ses pieds et sorte par sa tête, regarde vers l'intérieur du solénoïde.\nSon bras gauche tendu indique alors le sens du vecteur champ magnétique.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p04_q4",
            "type": "mcq",
            "prompt": "Dans la règle du bonhomme d'Ampère, le sens du vecteur champ est indiqué par :",
            "options": [
              "Le bras droit du bonhomme",
              "Ses pieds",
              "Sa tête",
              "Son bras gauche tendu, le courant entrant par ses pieds et sortant par sa tête"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le N.B. du résumé, sous le §II.4 : on peut aussi utiliser les règles de la main droite."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les faces nord et sud du solénoïde",
          "stepTheme": "Les faces nord et sud du solénoïde",
          "stepBadge": "Les faces nord et sud du solénoïde",
          "paragraphText": "Comme un aimant, le solénoïde possède une face nord et une face sud.\nLes lignes de champ sortent par la face nord et entrent par la face sud : c'est ce que demande l'exercice 1 sur le schéma.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p04_q5",
            "type": "mcq",
            "prompt": "La face nord d'un solénoïde est celle :",
            "options": [
              "Par laquelle les lignes de champ sortent du solénoïde",
              "Par laquelle les lignes de champ entrent",
              "Qui est reliée à la borne négative",
              "Qui ne laisse passer aucune ligne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'identification faite dans la correction de l'exercice 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Inverser le courant inverse le champ",
          "stepTheme": "Inverser le courant inverse le champ",
          "stepBadge": "Inverser le courant inverse le champ",
          "paragraphText": "Piège : les faces nord et sud d'un solénoïde ne sont pas fixes comme celles d'un aimant permanent.\nSi l'on inverse le sens du courant, le bonhomme d'Ampère se retourne : le champ change de sens et les faces s'échangent.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p04_q6",
            "type": "mcq",
            "prompt": "Si l'on inverse le sens du courant dans un solénoïde :",
            "options": [
              "Le champ disparaît",
              "Le champ change de sens, et les faces nord et sud s'échangent",
              "La valeur du champ double",
              "Rien ne change"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sens de B est entièrement déterminé par celui du courant (règle du bonhomme d'Ampère)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p04_q1",
          "type": "mcq",
          "prompt": "Un solénoïde est une bobine dont :",
          "options": [
            "La longueur est au moins 10 fois supérieure à son rayon",
            "Le rayon est 10 fois supérieur à la longueur",
            "Le nombre de spires est inférieur à 10",
            "La longueur est égale au diamètre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §II.4.1, redemandée à la question 1.1 de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p04_q2",
          "type": "mcq",
          "prompt": "À l'intérieur d'un long solénoïde parcouru par un courant, le champ magnétique est :",
          "options": [
            "Nul",
            "Uniforme",
            "Perpendiculaire à l'axe",
            "Maximal aux extrémités seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la propriété du §II.4.1 : B garde même direction, même sens et même valeur à l'intérieur."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p04_q3",
          "type": "mcq",
          "prompt": "À l'intérieur du solénoïde, la direction du vecteur B est :",
          "options": [
            "Celle des spires",
            "Radiale, vers l'extérieur",
            "Celle de l'axe du solénoïde",
            "Verticale dans tous les cas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la première caractéristique du champ intérieur donnée au §II.4.1."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p04_q4",
          "type": "mcq",
          "prompt": "Dans la règle du bonhomme d'Ampère, le sens du vecteur champ est indiqué par :",
          "options": [
            "Le bras droit du bonhomme",
            "Ses pieds",
            "Sa tête",
            "Son bras gauche tendu, le courant entrant par ses pieds et sortant par sa tête"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le N.B. du résumé, sous le §II.4 : on peut aussi utiliser les règles de la main droite."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p04_q5",
          "type": "mcq",
          "prompt": "La face nord d'un solénoïde est celle :",
          "options": [
            "Par laquelle les lignes de champ sortent du solénoïde",
            "Par laquelle les lignes de champ entrent",
            "Qui est reliée à la borne négative",
            "Qui ne laisse passer aucune ligne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'identification faite dans la correction de l'exercice 1."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p04_q6",
          "type": "mcq",
          "prompt": "Si l'on inverse le sens du courant dans un solénoïde :",
          "options": [
            "Le champ disparaît",
            "Le champ change de sens, et les faces nord et sud s'échangent",
            "La valeur du champ double",
            "Rien ne change"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sens de B est entièrement déterminé par celui du courant (règle du bonhomme d'Ampère)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l06_champ_magnetique_p05",
      "order": 5,
      "title": "La valeur du champ dans un solénoïde : B = μ₀·n·I",
      "summary": "B = μ₀·(N/L)·I = μ₀·n·I, avec μ₀ = 4π × 10⁻⁷ SI : le champ est proportionnel à l'intensité et au nombre de spires par mètre.",
      "conceptExplanation": "La valeur du champ à l'intérieur d'un solénoïde est B = μ₀·(N/L)·I, où N est le nombre de spires, L la longueur et I l'intensité du courant.\nEn introduisant le nombre de spires par mètre n = N/L, on écrit plus simplement B = μ₀·n·I.\nLa constante μ₀ est la perméabilité du vide : μ₀ = 4π × 10⁻⁷ en unités SI.\nDans l'exercice d'application, n = 1000 spires/m et I = 2,0 A donnent B = 2,5 × 10⁻³ T ; dans l'exercice 3, un champ de 12,0 mT sous 2,5 A correspond à n = 3819 spires/m, soit N = 3055 spires pour 80 cm, et doubler B (24 mT) exige de doubler le courant (I' = 5 A).",
      "keyRule": "B = μ₀·n·I : proportionnel à I et à n ; sans courant, pas de champ.",
      "formulas": [
        {
          "name": "Champ dans un solénoïde",
          "formula": "B = \\mu_0 \\frac{N}{L} I = \\mu_0 n I",
          "note": "μ₀ = 4π × 10⁻⁷ SI ; n = N/L en spires par mètre."
        }
      ],
      "workedExample": {
        "title": "L'exercice 3 : retrouver n, N puis I'",
        "statement": "Un solénoïde de longueur l = 80 cm, parcouru par I = 2,5 A, génère un champ B = 12,0 mT. Détermine n, puis N, puis l'intensité I' qui donnerait B = 24 mT.",
        "methodSteps": [
          "De B = μ₀·n·I, on tire n = 3819 spires/m.",
          "Le nombre total de spires est N = n·l = 3055 spires.",
          "B étant proportionnel à I, doubler B impose I' = 5 A."
        ],
        "conclusion": "Ce sont les trois résultats de la solution de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule B = μ₀·n·I",
          "stepTheme": "La formule B = μ₀·n·I",
          "stepBadge": "La formule B = μ₀·n·I",
          "paragraphText": "La valeur du champ intérieur dépend de trois grandeurs : la perméabilité du vide, le nombre de spires par mètre et l'intensité.\nElle ne dépend ni du rayon du solénoïde, ni de la position à l'intérieur (champ uniforme).",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p05_q1",
            "type": "mcq",
            "prompt": "La valeur du champ à l'intérieur d'un solénoïde est donnée par :",
            "options": [
              "$B = \\mu_0 n I$",
              "$B = \\mu_0 N L I$",
              "$B = n I/\\mu_0$",
              "$B = \\mu_0 n/I$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la formule du §II.4.1, avec n le nombre de spires par mètre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La perméabilité du vide μ₀",
          "stepTheme": "La perméabilité du vide μ₀",
          "stepBadge": "La perméabilité du vide μ₀",
          "paragraphText": "La constante μ₀ vaut 4π × 10⁻⁷ en unités du Système International.\nC'est elle qui fixe l'échelle des champs créés par les courants dans le vide (ou dans l'air).",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p05_q2",
            "type": "mcq",
            "prompt": "La perméabilité du vide vaut :",
            "options": [
              "μ₀ = 4π × 10⁷ SI",
              "μ₀ = 4π × 10⁻⁷ SI",
              "μ₀ = 1,6 × 10⁻¹⁹ SI",
              "μ₀ = 9 × 10⁹ SI"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la donnée rappelée dans tout le résumé et ses exercices."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'exercice d'application : n = 1000 spires/m, I = 2 A",
          "stepTheme": "L'exercice d'application : n = 1000 spires/m, I = 2 A",
          "stepBadge": "L'exercice d'application : n = 1000 spires/m, I = 2 A",
          "paragraphText": "Pour le solénoïde de l'exercice d'application (n = 1000 spires par mètre, I = 2,0 A), l'application de la formule donne un champ de l'ordre du millitesla.\nOn trouve B = μ₀·n·I = 2,5 × 10⁻³ T.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p05_q3",
            "type": "mcq",
            "prompt": "Le champ créé par un solénoïde de 1000 spires/m parcouru par 2,0 A vaut environ :",
            "options": [
              "2,5 T",
              "2,5 × 10⁻⁶ T",
              "2,5 × 10⁻³ T",
              "25 T"
            ],
            "correctAnswerIndex": 2,
            "explanation": "B = μ₀·n·I avec μ₀ = 4π × 10⁻⁷ : le résultat est de l'ordre de 2,5 mT."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "B est proportionnel à I",
          "stepTheme": "B est proportionnel à I",
          "stepBadge": "B est proportionnel à I",
          "paragraphText": "À solénoïde donné, n et μ₀ sont constants : B est donc proportionnel à l'intensité du courant.\nDoubler le courant double le champ, comme dans l'exercice 3 où passer de 12 mT à 24 mT exige de passer de 2,5 A à 5 A.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p05_q4",
            "type": "mcq",
            "prompt": "Pour doubler le champ dans un solénoïde donné, il faut :",
            "options": [
              "Doubler sa longueur",
              "Diviser le courant par deux",
              "Supprimer la moitié des spires",
              "Doubler l'intensité du courant"
            ],
            "correctAnswerIndex": 3,
            "explanation": "B = μ₀·n·I est proportionnel à I : c'est la conclusion de la question 3 de l'exercice 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 3 : le nombre de spires par mètre",
          "stepTheme": "L'exercice 3 : le nombre de spires par mètre",
          "stepBadge": "L'exercice 3 : le nombre de spires par mètre",
          "paragraphText": "De la mesure B = 12,0 mT sous I = 2,5 A, la solution de l'exercice 3 déduit n = 3819 spires/m.\nPour une longueur de 80 cm, cela représente un total de N = 3055 spires.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p05_q5",
            "type": "mcq",
            "prompt": "Le nombre de spires par mètre du solénoïde de l'exercice 3 (B = 12,0 mT ; I = 2,5 A) vaut environ :",
            "options": [
              "3819 spires/m",
              "1000 spires/m",
              "3055 spires/m",
              "1592 spires/m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "n = B/(μ₀·I) donne 3819 spires/m ; 3055 est le nombre total N de spires, et 1592 celui de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre n et N",
          "stepTheme": "Ne pas confondre n et N",
          "stepBadge": "Ne pas confondre n et N",
          "paragraphText": "Piège fréquent : N est le nombre total de spires, n le nombre de spires par mètre de longueur.\nIls sont reliés par n = N/L, et c'est n qui intervient dans B = μ₀·n·I ; oublier la division par L fausse le calcul d'un facteur L.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p05_q6",
            "type": "mcq",
            "prompt": "Le nombre de spires par mètre n d'un solénoïde de N spires et de longueur L est :",
            "options": [
              "n = N × L",
              "n = N/L",
              "n = L/N",
              "n = N − L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation utilisée dans la situation d'évaluation : N = n·L."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p05_q1",
          "type": "mcq",
          "prompt": "La valeur du champ à l'intérieur d'un solénoïde est donnée par :",
          "options": [
            "$B = \\mu_0 n I$",
            "$B = \\mu_0 N L I$",
            "$B = n I/\\mu_0$",
            "$B = \\mu_0 n/I$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la formule du §II.4.1, avec n le nombre de spires par mètre."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p05_q2",
          "type": "mcq",
          "prompt": "La perméabilité du vide vaut :",
          "options": [
            "μ₀ = 4π × 10⁷ SI",
            "μ₀ = 4π × 10⁻⁷ SI",
            "μ₀ = 1,6 × 10⁻¹⁹ SI",
            "μ₀ = 9 × 10⁹ SI"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la donnée rappelée dans tout le résumé et ses exercices."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p05_q3",
          "type": "mcq",
          "prompt": "Le champ créé par un solénoïde de 1000 spires/m parcouru par 2,0 A vaut environ :",
          "options": [
            "2,5 T",
            "2,5 × 10⁻⁶ T",
            "2,5 × 10⁻³ T",
            "25 T"
          ],
          "correctAnswerIndex": 2,
          "explanation": "B = μ₀·n·I avec μ₀ = 4π × 10⁻⁷ : le résultat est de l'ordre de 2,5 mT."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p05_q4",
          "type": "mcq",
          "prompt": "Pour doubler le champ dans un solénoïde donné, il faut :",
          "options": [
            "Doubler sa longueur",
            "Diviser le courant par deux",
            "Supprimer la moitié des spires",
            "Doubler l'intensité du courant"
          ],
          "correctAnswerIndex": 3,
          "explanation": "B = μ₀·n·I est proportionnel à I : c'est la conclusion de la question 3 de l'exercice 3."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p05_q5",
          "type": "mcq",
          "prompt": "Le nombre de spires par mètre du solénoïde de l'exercice 3 (B = 12,0 mT ; I = 2,5 A) vaut environ :",
          "options": [
            "3819 spires/m",
            "1000 spires/m",
            "3055 spires/m",
            "1592 spires/m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "n = B/(μ₀·I) donne 3819 spires/m ; 3055 est le nombre total N de spires, et 1592 celui de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p05_q6",
          "type": "mcq",
          "prompt": "Le nombre de spires par mètre n d'un solénoïde de N spires et de longueur L est :",
          "options": [
            "n = N × L",
            "n = N/L",
            "n = L/N",
            "n = N − L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation utilisée dans la situation d'évaluation : N = n·L."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l06_champ_magnetique_p06",
      "order": 6,
      "title": "Mesures et compositions de champs",
      "summary": "La courbe B = f(I) permet de déterminer n et N d'un solénoïde inconnu ; le champ terrestre se compose vectoriellement avec celui du solénoïde.",
      "conceptExplanation": "Dans la situation d'évaluation, on mesure B à l'intérieur d'un solénoïde pour plusieurs intensités : la courbe B = f(I) est une droite passant par l'origine, ce qui montre que B est proportionnel à I.\nLe coefficient de proportionnalité vaut k = 2 × 10⁻³ T/A ; par identification avec B = μ₀·n·I, on obtient n = 1592 spires/m, puis N = n·L = 637 spires pour L = 40 cm, soit environ 160 spires par couche pour un bobinage en 4 couches.\nDans l'exercice 4, une aiguille placée au centre d'un solénoïde dévie de α = 30° sous l'effet combiné du champ du solénoïde et du champ magnétique terrestre Bh = 2 × 10⁻⁵ T, perpendiculaire à l'axe : le champ du solénoïde vaut B₀ = Bh·tan α = 1,15 × 10⁻⁵ T et le champ résultant 2,3 × 10⁻⁵ T.",
      "keyRule": "B = f(I) droite par l'origine ⇒ k = μ₀·n ; deux champs perpendiculaires se composent par Pythagore.",
      "formulas": [
        {
          "name": "Coefficient de proportionnalité",
          "formula": "k = \\mu_0 n \\quad \\text{donc} \\quad n = \\frac{k}{\\mu_0}",
          "note": "k est la pente de la droite B = f(I), en T/A."
        },
        {
          "name": "Composition avec le champ terrestre",
          "formula": "B_0 = B_h \\tan\\alpha \\quad ; \\quad B = \\sqrt{B_0^2 + B_h^2}",
          "note": "Cas de l'exercice 4 : les deux champs sont perpendiculaires."
        }
      ],
      "workedExample": {
        "title": "Le solénoïde inconnu de la situation d'évaluation",
        "statement": "Un solénoïde de longueur L = 40 cm, bobiné en 4 couches, donne les mesures B = 1,00 mT pour I = 0,5 A, 2,00 mT pour 1 A, jusqu'à 5,95 mT pour 3 A. Détermine k, n, N et le nombre de spires par couche.",
        "methodSteps": [
          "La courbe B = f(I) est une droite par l'origine : B est proportionnel à I, de coefficient k = 2 × 10⁻³ T/A.",
          "Par identification avec μ₀·n, on trouve n = 1592 spires/m.",
          "N = n·L = 637 spires au total, soit environ 160 spires par couche."
        ],
        "conclusion": "Ce sont les résultats des questions 4.1 à 4.4 de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La droite B = f(I) prouve la proportionnalité",
          "stepTheme": "La droite B = f(I) prouve la proportionnalité",
          "stepBadge": "La droite B = f(I) prouve la proportionnalité",
          "paragraphText": "Les points expérimentaux de la situation d'évaluation s'alignent sur une droite passant par l'origine.\nC'est la signature graphique d'une proportionnalité : B = k·I, avec k constant pour le solénoïde étudié.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p06_q1",
            "type": "mcq",
            "prompt": "La courbe B = f(I) d'un solénoïde est une droite passant par l'origine : cela montre que :",
            "options": [
              "B est proportionnel à I",
              "B est constant",
              "B diminue quand I augmente",
              "B est proportionnel au carré de I"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la question 3 de la situation d'évaluation, reprise à l'exercice 5 partie B."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La situation : k, n et N",
          "stepTheme": "La situation : k, n et N",
          "stepBadge": "La situation : k, n et N",
          "paragraphText": "La pente de la droite vaut k = 2 × 10⁻³ T/A.\nL'identification k = μ₀·n donne n = 1592 spires/m, puis N = n·L = 637 spires pour L = 40 cm.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p06_q2",
            "type": "mcq",
            "prompt": "Dans la situation d'évaluation, le nombre de spires par mètre et le nombre total de spires valent :",
            "options": [
              "n = 637 spires/m et N = 1592",
              "n = 1592 spires/m et N = 637",
              "n = 1000 spires/m et N = 400",
              "n = 3819 spires/m et N = 3055"
            ],
            "correctAnswerIndex": 1,
            "explanation": "n = k/μ₀ = 1592 spires/m et N = n·L avec L = 0,4 m (questions 4.2 et 4.3) ; 3819 et 3055 appartiennent à l'exercice 3."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le nombre de spires par couche",
          "stepTheme": "Le nombre de spires par couche",
          "stepBadge": "Le nombre de spires par couche",
          "paragraphText": "Le bobinage de la situation est réparti sur quatre couches superposées.\nEn divisant le nombre total de spires par le nombre de couches, la solution obtient environ 160 spires par couche.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p06_q3",
            "type": "mcq",
            "prompt": "Le solénoïde de la situation (637 spires en 4 couches) compte environ, par couche :",
            "options": [
              "637 spires",
              "40 spires",
              "160 spires",
              "1592 spires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Question 4.4 : on répartit les 637 spires sur les 4 couches."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Sans courant, il reste le champ terrestre",
          "stepTheme": "Sans courant, il reste le champ terrestre",
          "stepBadge": "Sans courant, il reste le champ terrestre",
          "paragraphText": "Dans l'exercice 4, en l'absence de courant, l'aiguille au centre du solénoïde indique la direction du seul champ présent.\nLa solution nomme ce champ : il s'agit du champ magnétique terrestre, de valeur Bh = 2 × 10⁻⁵ T.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p06_q4",
            "type": "mcq",
            "prompt": "Au centre du solénoïde de l'exercice 4, sans courant, le champ présent est :",
            "options": [
              "Le champ du solénoïde éteint",
              "Un champ nul",
              "Le champ électrique terrestre",
              "Le champ magnétique terrestre, Bh = 2 × 10⁻⁵ T"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la réponse à la question 1 de l'exercice 4 : la Terre est l'une des sources listées au §II.1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La déviation de l'aiguille : une composition de champs",
          "stepTheme": "La déviation de l'aiguille : une composition de champs",
          "stepBadge": "La déviation de l'aiguille : une composition de champs",
          "paragraphText": "Quand le courant passe, l'aiguille s'aligne sur le champ résultant, somme vectorielle du champ terrestre et du champ du solénoïde.\nComme ils sont perpendiculaires, ils forment un triangle rectangle avec le champ résultant, d'où les relations en tan α et Pythagore.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p06_q5",
            "type": "mcq",
            "prompt": "L'aiguille de l'exercice 4 dévie parce que :",
            "options": [
              "Le champ terrestre disparaît",
              "Le champ résultant, combinaison du champ terrestre et de celui du solénoïde, a changé de direction",
              "Le courant chauffe l'aiguille",
              "Le solénoïde devient un aimant permanent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la justification de la question 2 de l'exercice 4 : B = B₀ + Bh (somme vectorielle)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les valeurs de l'exercice 4 (α = 30°)",
          "stepTheme": "Les valeurs de l'exercice 4 (α = 30°)",
          "stepBadge": "Les valeurs de l'exercice 4 (α = 30°)",
          "paragraphText": "Avec Bh = 2 × 10⁻⁵ T et une déviation de 30°, la solution calcule le champ du solénoïde B₀ = Bh·tan α.\nElle obtient B₀ = 1,15 × 10⁻⁵ T, et un champ résultant de 2,3 × 10⁻⁵ T.",
          "exercise": {
            "id": "terminale_c_physique_l06_champ_magnetique_p06_q6",
            "type": "mcq",
            "prompt": "Le champ créé par le solénoïde dans l'exercice 4 (déviation de 30°, Bh = 2 × 10⁻⁵ T) vaut environ :",
            "options": [
              "1,15 × 10⁻⁵ T",
              "2,3 × 10⁻⁵ T",
              "2 × 10⁻⁵ T",
              "1,57 × 10⁻² T"
            ],
            "correctAnswerIndex": 0,
            "explanation": "B₀ = Bh·tan(30°) = 1,15 × 10⁻⁵ T ; 2,3 × 10⁻⁵ T est le champ résultant, somme vectorielle des deux champs."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p06_q1",
          "type": "mcq",
          "prompt": "La courbe B = f(I) d'un solénoïde est une droite passant par l'origine : cela montre que :",
          "options": [
            "B est proportionnel à I",
            "B est constant",
            "B diminue quand I augmente",
            "B est proportionnel au carré de I"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la question 3 de la situation d'évaluation, reprise à l'exercice 5 partie B."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p06_q2",
          "type": "mcq",
          "prompt": "Dans la situation d'évaluation, le nombre de spires par mètre et le nombre total de spires valent :",
          "options": [
            "n = 637 spires/m et N = 1592",
            "n = 1592 spires/m et N = 637",
            "n = 1000 spires/m et N = 400",
            "n = 3819 spires/m et N = 3055"
          ],
          "correctAnswerIndex": 1,
          "explanation": "n = k/μ₀ = 1592 spires/m et N = n·L avec L = 0,4 m (questions 4.2 et 4.3) ; 3819 et 3055 appartiennent à l'exercice 3."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p06_q3",
          "type": "mcq",
          "prompt": "Le solénoïde de la situation (637 spires en 4 couches) compte environ, par couche :",
          "options": [
            "637 spires",
            "40 spires",
            "160 spires",
            "1592 spires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Question 4.4 : on répartit les 637 spires sur les 4 couches."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p06_q4",
          "type": "mcq",
          "prompt": "Au centre du solénoïde de l'exercice 4, sans courant, le champ présent est :",
          "options": [
            "Le champ du solénoïde éteint",
            "Un champ nul",
            "Le champ électrique terrestre",
            "Le champ magnétique terrestre, Bh = 2 × 10⁻⁵ T"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la réponse à la question 1 de l'exercice 4 : la Terre est l'une des sources listées au §II.1."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p06_q5",
          "type": "mcq",
          "prompt": "L'aiguille de l'exercice 4 dévie parce que :",
          "options": [
            "Le champ terrestre disparaît",
            "Le champ résultant, combinaison du champ terrestre et de celui du solénoïde, a changé de direction",
            "Le courant chauffe l'aiguille",
            "Le solénoïde devient un aimant permanent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la justification de la question 2 de l'exercice 4 : B = B₀ + Bh (somme vectorielle)."
        },
        {
          "id": "terminale_c_physique_l06_champ_magnetique_p06_q6",
          "type": "mcq",
          "prompt": "Le champ créé par le solénoïde dans l'exercice 4 (déviation de 30°, Bh = 2 × 10⁻⁵ T) vaut environ :",
          "options": [
            "1,15 × 10⁻⁵ T",
            "2,3 × 10⁻⁵ T",
            "2 × 10⁻⁵ T",
            "1,57 × 10⁻² T"
          ],
          "correctAnswerIndex": 0,
          "explanation": "B₀ = Bh·tan(30°) = 1,15 × 10⁻⁵ T ; 2,3 × 10⁻⁵ T est le champ résultant, somme vectorielle des deux champs."
        }
      ]
    }
  ]
};
