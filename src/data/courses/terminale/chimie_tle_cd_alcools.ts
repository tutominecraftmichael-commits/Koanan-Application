import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 1 : Les alcools » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1317
export const CHIMIE_TLE_CD_L01_ALCOOLS: CurriculumChapter = {
  "id": "terminale_c_chimie_l01_alcools",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 1,
  "title": "Leçon 1 : Les alcools",
  "summary": "On définit un alcool par son groupe hydroxyle, on apprend à le nommer et à le classer, puis on étudie ses préparations (fermentation, hydratation des alcènes) et ses réactions : déshydratations, combustion et oxydation ménagée.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1317",
  "points": [
    {
      "id": "terminale_c_chimie_l01_alcools_p01",
      "order": 1,
      "title": "Définition et nomenclature des alcools",
      "summary": "Définir un alcool, connaître sa formule générale et savoir le nommer.",
      "conceptExplanation": "Un alcool est un composé organique qui possède un groupe hydroxyle (–OH) fixé sur un atome de carbone tétraédrique.\nLe carbone qui porte le groupe hydroxyle est appelé carbone fonctionnel.\nLa formule générale des alcools est R–OH, où R est un groupement alkyle, et leur formule brute générale est $\\mathrm{C_nH_{2n+2}O}$ avec $n \\geq 1$.\nPour nommer un alcool, on remplace le « e » final du nom de l'alcane correspondant par le suffixe « ol », précédé de l'indice de position du groupe hydroxyle, le carbone fonctionnel étant affecté du plus petit indice possible.",
      "keyRule": "Le carbone fonctionnel, celui qui porte le groupe –OH, doit recevoir le plus petit indice possible dans le nom de l'alcool.",
      "formulas": [
        {
          "name": "Formule générale des alcools",
          "formula": "\\mathrm{R-OH}",
          "note": "R est un groupement alkyle."
        },
        {
          "name": "Formule brute générale",
          "formula": "\\mathrm{C_nH_{2n+2}O} \\quad (n \\geq 1)",
          "note": "n est le nombre d'atomes de carbone."
        }
      ],
      "workedExample": {
        "title": "Nommer le composé CH₃–CH(OH)–CH₃",
        "statement": "Donne le nom de l'alcool de formule semi-développée CH₃–CH(OH)–CH₃.",
        "methodSteps": [
          "La chaîne principale compte 3 atomes de carbone : c'est un dérivé du propane.",
          "Le groupe –OH est porté par le carbone n°2, au milieu de la chaîne.",
          "On remplace le « e » final de propane par « ol », précédé de l'indice 2."
        ],
        "conclusion": "Le composé est le propan-2-ol."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un alcool",
          "stepTheme": "Définition d'un alcool",
          "stepBadge": "Définition d'un alcool",
          "paragraphText": "• Alcool : composé organique qui possède un groupe hydroxyle (–OH) fixé sur un atome de carbone tétraédrique.\nC'est la présence de ce groupe –OH qui caractérise la famille des alcools.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q1",
            "type": "mcq",
            "prompt": "Un alcool est un composé organique qui possède :",
            "options": [
              "Un groupe hydroxyle –OH fixé sur un carbone tétraédrique",
              "Un groupe carbonyle C=O en bout de chaîne",
              "Un groupe carboxyle –COOH",
              "Un atome d'halogène fixé sur un carbone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La définition d'un alcool repose sur le groupe hydroxyle –OH porté par un carbone tétraédrique. Le groupe carbonyle caractérise les aldéhydes et les cétones, et le groupe carboxyle les acides carboxyliques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule générale des alcools",
          "stepTheme": "La formule générale des alcools",
          "stepBadge": "La formule générale des alcools",
          "paragraphText": "La formule générale d'un alcool est R–OH, avec R un groupement alkyle.\nSa formule brute générale est $\\mathrm{C_nH_{2n+2}O}$, avec $n \\geq 1$ : un alcool à n atomes de carbone contient 2n+2 atomes d'hydrogène et un seul atome d'oxygène.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q2",
            "type": "mcq",
            "prompt": "Quelle est la formule brute générale d'un alcool comportant n atomes de carbone ?",
            "options": [
              "$\\mathrm{C_nH_{2n}O}$",
              "$\\mathrm{C_nH_{2n+2}}$",
              "$\\mathrm{C_nH_{2n+2}O}$",
              "$\\mathrm{C_nH_{2n-2}O}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un alcool R–OH a pour formule brute générale $\\mathrm{C_nH_{2n+2}O}$ : l'unique atome d'oxygène vient du groupe hydroxyle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le carbone fonctionnel",
          "stepTheme": "Le carbone fonctionnel",
          "stepBadge": "Le carbone fonctionnel",
          "paragraphText": "• Carbone fonctionnel : le carbone qui porte le groupe hydroxyle –OH.\nC'est lui qui détermine la position du groupe dans le nom et la classe de l'alcool.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on le carbone qui porte le groupe hydroxyle d'un alcool ?",
            "options": [
              "Le carbone principal",
              "Le carbone fonctionnel",
              "Le carbone central",
              "Le carbone actif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le carbone porteur du groupe –OH est appelé carbone fonctionnel, car il porte la fonction alcool."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Nommer un alcool",
          "stepTheme": "Nommer un alcool",
          "stepBadge": "Nommer un alcool",
          "paragraphText": "Pour nommer un alcool : on part du nom de l'alcane correspondant, on remplace son « e » final par le suffixe « ol », précédé de l'indice de position du groupe –OH.\nExemple du résumé : CH₃–CH₂–OH est l'éthanol.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q4",
            "type": "mcq",
            "prompt": "Quel est le nom de l'alcool CH₃–CH₂–OH ?",
            "options": [
              "Le méthanal",
              "Le propanol",
              "Le méthanol",
              "L'éthanol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La chaîne compte 2 carbones (éthane) et porte un groupe –OH : c'est l'éthanol."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le plus petit indice pour le carbone fonctionnel",
          "stepTheme": "Le plus petit indice pour le carbone fonctionnel",
          "stepBadge": "Le plus petit indice pour le carbone fonctionnel",
          "paragraphText": "Piège classique : la chaîne doit être numérotée de façon que le carbone fonctionnel reçoive le plus petit indice possible.\nDans le 2-méthylpropan-2-ol, par exemple, le groupe –OH est sur le carbone n°2, qui porte aussi un groupement méthyle.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q5",
            "type": "mcq",
            "prompt": "Dans le 2-méthylpropan-2-ol, sur quel carbone le groupe –OH est-il fixé ?",
            "options": [
              "Sur le carbone n°1",
              "Sur le carbone n°3",
              "Sur le carbone n°2",
              "Sur le groupement méthyle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'indice placé juste avant « ol » est celui du carbone fonctionnel : ici 2. Le « 2- » de « 2-méthyl » situe le groupement méthyle, lui aussi sur le carbone n°2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les polyols",
          "stepTheme": "Les polyols",
          "stepBadge": "Les polyols",
          "paragraphText": "• Polyols (ou polyalcools) : alcools présentant plusieurs groupes hydroxyle dans leur structure.\nExemples du résumé : le glycol et le glycérol.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q6",
            "type": "mcq",
            "prompt": "Le glycérol est un polyol parce qu'il possède :",
            "options": [
              "Un groupe carbonyle",
              "Plusieurs groupes hydroxyle",
              "Une très longue chaîne carbonée",
              "Un atome de chlore"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un polyol est un alcool qui présente plusieurs groupes –OH dans sa structure, comme le glycol et le glycérol."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q1",
          "type": "mcq",
          "prompt": "Un alcool est un composé organique qui possède :",
          "options": [
            "Un groupe hydroxyle –OH fixé sur un carbone tétraédrique",
            "Un groupe carbonyle C=O en bout de chaîne",
            "Un groupe carboxyle –COOH",
            "Un atome d'halogène fixé sur un carbone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition d'un alcool repose sur le groupe hydroxyle –OH porté par un carbone tétraédrique. Le groupe carbonyle caractérise les aldéhydes et les cétones, et le groupe carboxyle les acides carboxyliques."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q2",
          "type": "mcq",
          "prompt": "Quelle est la formule brute générale d'un alcool comportant n atomes de carbone ?",
          "options": [
            "$\\mathrm{C_nH_{2n}O}$",
            "$\\mathrm{C_nH_{2n+2}}$",
            "$\\mathrm{C_nH_{2n+2}O}$",
            "$\\mathrm{C_nH_{2n-2}O}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un alcool R–OH a pour formule brute générale $\\mathrm{C_nH_{2n+2}O}$ : l'unique atome d'oxygène vient du groupe hydroxyle."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le carbone qui porte le groupe hydroxyle d'un alcool ?",
          "options": [
            "Le carbone principal",
            "Le carbone fonctionnel",
            "Le carbone central",
            "Le carbone actif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le carbone porteur du groupe –OH est appelé carbone fonctionnel, car il porte la fonction alcool."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q4",
          "type": "mcq",
          "prompt": "Quel est le nom de l'alcool CH₃–CH₂–OH ?",
          "options": [
            "Le méthanal",
            "Le propanol",
            "Le méthanol",
            "L'éthanol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La chaîne compte 2 carbones (éthane) et porte un groupe –OH : c'est l'éthanol."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q5",
          "type": "mcq",
          "prompt": "Dans le 2-méthylpropan-2-ol, sur quel carbone le groupe –OH est-il fixé ?",
          "options": [
            "Sur le carbone n°1",
            "Sur le carbone n°3",
            "Sur le carbone n°2",
            "Sur le groupement méthyle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'indice placé juste avant « ol » est celui du carbone fonctionnel : ici 2. Le « 2- » de « 2-méthyl » situe le groupement méthyle, lui aussi sur le carbone n°2."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q6",
          "type": "mcq",
          "prompt": "Le glycérol est un polyol parce qu'il possède :",
          "options": [
            "Un groupe carbonyle",
            "Plusieurs groupes hydroxyle",
            "Une très longue chaîne carbonée",
            "Un atome de chlore"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un polyol est un alcool qui présente plusieurs groupes –OH dans sa structure, comme le glycol et le glycérol."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l01_alcools_p02",
      "order": 2,
      "title": "Les trois classes d'alcool",
      "summary": "Classer un alcool (primaire, secondaire, tertiaire) selon le carbone fonctionnel.",
      "conceptExplanation": "Les alcools sont regroupés en trois classes, qui se distinguent par le nombre de groupements alkyles que porte le carbone fonctionnel.\nUn alcool primaire a un carbone fonctionnel lié à un seul groupement alkyle ; un alcool secondaire, à deux groupements alkyles ; un alcool tertiaire, à trois groupements alkyles.\nLa classe commande le comportement de l'alcool, en particulier lors de l'oxydation ménagée.",
      "keyRule": "La classe se lit sur le carbone fonctionnel : 1, 2 ou 3 groupements alkyles donnent un alcool primaire, secondaire ou tertiaire.",
      "formulas": [
        {
          "name": "Alcool primaire",
          "formula": "\\mathrm{R-CH_2-OH}",
          "note": "Le carbone fonctionnel porte un seul groupement alkyle."
        },
        {
          "name": "Alcool secondaire",
          "formula": "\\mathrm{R_1-CH(OH)-R_2}",
          "note": "Le carbone fonctionnel porte deux groupements alkyles."
        },
        {
          "name": "Alcool tertiaire",
          "formula": "\\mathrm{R_1R_2R_3C-OH}",
          "note": "Le carbone fonctionnel porte trois groupements alkyles."
        }
      ],
      "workedExample": {
        "title": "Classe du 2-méthylbutan-2-ol (exercice d'application 1)",
        "statement": "Précise la classe de l'alcool (E) du résumé : le 2-méthylbutan-2-ol, de formule CH₃–C(CH₃)(OH)–CH₂–CH₃.",
        "methodSteps": [
          "On repère le carbone fonctionnel : c'est le carbone n°2, celui qui porte le groupe –OH.",
          "Ce carbone est lié à trois groupements alkyles : deux méthyles et un éthyle.",
          "Trois groupements alkyles sur le carbone fonctionnel donnent un alcool tertiaire."
        ],
        "conclusion": "Le 2-méthylbutan-2-ol est un alcool tertiaire, comme l'indique la solution du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Alcool primaire",
          "stepTheme": "Alcool primaire",
          "stepBadge": "Alcool primaire",
          "paragraphText": "• Alcool primaire : le carbone fonctionnel ne porte qu'un seul groupement alkyle (et deux atomes d'hydrogène).\nExemple : le propan-1-ol, dont le –OH est en bout de chaîne.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q1",
            "type": "mcq",
            "prompt": "Le propan-1-ol est un alcool primaire parce que :",
            "options": [
              "Sa chaîne ne compte qu'un seul carbone",
              "Il ne contient qu'un seul atome d'oxygène",
              "Son carbone fonctionnel ne porte qu'un seul groupement alkyle",
              "Il est le premier alcool de sa série"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La classe dépend du nombre de groupements alkyles portés par le carbone fonctionnel : un seul groupement pour un alcool primaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Alcool secondaire",
          "stepTheme": "Alcool secondaire",
          "stepBadge": "Alcool secondaire",
          "paragraphText": "• Alcool secondaire : le carbone fonctionnel porte deux groupements alkyles (et un seul atome d'hydrogène).\nExemple : le propan-2-ol, dont le –OH est au milieu de la chaîne.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q2",
            "type": "mcq",
            "prompt": "Le propan-2-ol est un alcool :",
            "options": [
              "Primaire",
              "Secondaire",
              "Tertiaire",
              "C'est un polyol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans le propan-2-ol, le carbone fonctionnel (le carbone n°2) porte deux groupements méthyle : c'est un alcool secondaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Alcool tertiaire",
          "stepTheme": "Alcool tertiaire",
          "stepBadge": "Alcool tertiaire",
          "paragraphText": "• Alcool tertiaire : le carbone fonctionnel porte trois groupements alkyles (et aucun atome d'hydrogène).\nExemple : le 2-méthylpropan-2-ol.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q3",
            "type": "mcq",
            "prompt": "Le 2-méthylpropan-2-ol est un alcool :",
            "options": [
              "Tertiaire",
              "Secondaire",
              "Primaire",
              "Ce n'est pas un alcool"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Son carbone fonctionnel porte trois groupements alkyles (trois méthyles) : c'est un alcool tertiaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Déterminer la classe d'un alcool",
          "stepTheme": "Déterminer la classe d'un alcool",
          "stepBadge": "Déterminer la classe d'un alcool",
          "paragraphText": "Méthode : repérer le carbone fonctionnel (celui du –OH), puis compter les groupements alkyles qu'il porte.\nUn groupement → primaire ; deux → secondaire ; trois → tertiaire.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q4",
            "type": "mcq",
            "prompt": "Pour déterminer la classe d'un alcool, il faut compter :",
            "options": [
              "Le nombre total d'atomes de carbone de la molécule",
              "Le nombre d'atomes d'hydrogène de la molécule",
              "Le nombre de groupes –OH de la molécule",
              "Le nombre de groupements alkyles portés par le carbone fonctionnel"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les trois classes se distinguent par le nombre de groupements alkyles que porte le carbone fonctionnel."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La longueur de la chaîne ne donne pas la classe",
          "stepTheme": "La longueur de la chaîne ne donne pas la classe",
          "stepBadge": "La longueur de la chaîne ne donne pas la classe",
          "paragraphText": "Piège : une longue chaîne ne fait pas un alcool tertiaire.\nLe butan-1-ol compte 4 carbones, mais son –OH est en bout de chaîne, sur un carbone qui ne porte qu'un groupement alkyle : il est primaire.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q5",
            "type": "mcq",
            "prompt": "Le butan-1-ol, de formule CH₃–CH₂–CH₂–CH₂–OH, est un alcool :",
            "options": [
              "Tertiaire, car sa chaîne est longue",
              "Secondaire, car il a 4 carbones",
              "Primaire, car son carbone fonctionnel ne porte qu'un groupement alkyle",
              "Ce n'est pas un alcool"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Seul compte le carbone fonctionnel : dans le butan-1-ol, il ne porte qu'un seul groupement alkyle (le reste de la chaîne), donc l'alcool est primaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Nommer et classer (exercice d'application 1)",
          "stepTheme": "Nommer et classer (exercice d'application 1)",
          "stepBadge": "Nommer et classer (exercice d'application 1)",
          "paragraphText": "Dans l'exercice d'application 1 du résumé, le composé (C), de formule (CH₃)₂CH–CH₂–CH₂–OH, est nommé et classé dans la solution.\nSa chaîne principale compte 4 carbones, avec un méthyle sur le carbone n°3 et le –OH sur le carbone n°1.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q6",
            "type": "mcq",
            "prompt": "Le composé (CH₃)₂CH–CH₂–CH₂–OH est :",
            "options": [
              "Le 3-méthylbutan-1-ol, alcool primaire",
              "Le 2-méthylbutan-1-ol, alcool primaire",
              "Le 3-méthylbutan-2-ol, alcool secondaire",
              "Le pentan-1-ol, alcool primaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la solution de l'exercice d'application 1 : le 3-méthylbutan-1-ol, alcool primaire car le –OH est porté par un carbone en bout de chaîne."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q1",
          "type": "mcq",
          "prompt": "Le propan-1-ol est un alcool primaire parce que :",
          "options": [
            "Sa chaîne ne compte qu'un seul carbone",
            "Il ne contient qu'un seul atome d'oxygène",
            "Son carbone fonctionnel ne porte qu'un seul groupement alkyle",
            "Il est le premier alcool de sa série"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La classe dépend du nombre de groupements alkyles portés par le carbone fonctionnel : un seul groupement pour un alcool primaire."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q2",
          "type": "mcq",
          "prompt": "Le propan-2-ol est un alcool :",
          "options": [
            "Primaire",
            "Secondaire",
            "Tertiaire",
            "C'est un polyol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans le propan-2-ol, le carbone fonctionnel (le carbone n°2) porte deux groupements méthyle : c'est un alcool secondaire."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q3",
          "type": "mcq",
          "prompt": "Le 2-méthylpropan-2-ol est un alcool :",
          "options": [
            "Tertiaire",
            "Secondaire",
            "Primaire",
            "Ce n'est pas un alcool"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Son carbone fonctionnel porte trois groupements alkyles (trois méthyles) : c'est un alcool tertiaire."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q4",
          "type": "mcq",
          "prompt": "Pour déterminer la classe d'un alcool, il faut compter :",
          "options": [
            "Le nombre total d'atomes de carbone de la molécule",
            "Le nombre d'atomes d'hydrogène de la molécule",
            "Le nombre de groupes –OH de la molécule",
            "Le nombre de groupements alkyles portés par le carbone fonctionnel"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les trois classes se distinguent par le nombre de groupements alkyles que porte le carbone fonctionnel."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q5",
          "type": "mcq",
          "prompt": "Le butan-1-ol, de formule CH₃–CH₂–CH₂–CH₂–OH, est un alcool :",
          "options": [
            "Tertiaire, car sa chaîne est longue",
            "Secondaire, car il a 4 carbones",
            "Primaire, car son carbone fonctionnel ne porte qu'un groupement alkyle",
            "Ce n'est pas un alcool"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Seul compte le carbone fonctionnel : dans le butan-1-ol, il ne porte qu'un seul groupement alkyle (le reste de la chaîne), donc l'alcool est primaire."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q6",
          "type": "mcq",
          "prompt": "Le composé (CH₃)₂CH–CH₂–CH₂–OH est :",
          "options": [
            "Le 3-méthylbutan-1-ol, alcool primaire",
            "Le 2-méthylbutan-1-ol, alcool primaire",
            "Le 3-méthylbutan-2-ol, alcool secondaire",
            "Le pentan-1-ol, alcool primaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la solution de l'exercice d'application 1 : le 3-méthylbutan-1-ol, alcool primaire car le –OH est porté par un carbone en bout de chaîne."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l01_alcools_p03",
      "order": 3,
      "title": "Méthodes de préparation des alcools",
      "summary": "Préparer un alcool par fermentation ou par hydratation d'un alcène (règle de Markovnikov).",
      "conceptExplanation": "La fermentation des jus sucrés est une première méthode : le glucose, en présence d'enzymes (levures), donne l'éthanol et du dioxyde de carbone.\nUn sucre fermentescible peut fermenter sous l'action des levures (glucose, saccharose, fructose) ; un sucre non fermentescible ne le peut pas (lactose, amidon, sorbitol).\nDeuxième méthode : l'hydratation d'un alcène conduit à un alcool. Lors de cette addition, l'hydrogène se fixe sur le carbone le plus hydrogéné : c'est la règle de Markovnikov.\nLe glycol, lui, se prépare en deux étapes à partir de l'éthylène : oxydation en oxyde d'éthylène, puis hydratation.",
      "keyRule": "Règle de Markovnikov : lors de l'addition d'un composé H–X sur une double liaison C=C, l'hydrogène se fixe sur le carbone de la double liaison le plus hydrogéné.",
      "formulas": [
        {
          "name": "Fermentation du glucose (équation du résumé)",
          "formula": "\\mathrm{C_6H_{12}O_6 \\longrightarrow C_2H_5OH + CO_2}",
          "note": "Équation reproduite telle qu'écrite dans le résumé officiel ; elle se fait en présence d'enzymes."
        },
        {
          "name": "Hydratation de l'éthylène",
          "formula": "\\mathrm{CH_2=CH_2 + H_2O \\longrightarrow CH_3-CH_2-OH}",
          "note": "L'hydratation d'un alcène conduit à un alcool."
        }
      ],
      "workedExample": {
        "title": "Produit majoritaire de l'hydratation du propène (exercice d'application 2)",
        "statement": "Nomme le produit majoritaire obtenu par hydratation du propène.",
        "methodSteps": [
          "Le propène est CH₂=CH–CH₃ : sa double liaison relie un carbone très hydrogéné (CH₂) et un carbone moins hydrogéné (CH).",
          "D'après la règle de Markovnikov, l'hydrogène de l'eau se fixe sur le carbone le plus hydrogéné, donc sur CH₂.",
          "Le groupe –OH se fixe alors sur le carbone central, le carbone n°2."
        ],
        "conclusion": "Le produit majoritaire est le propan-2-ol, comme l'indique la solution du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La fermentation des jus sucrés",
          "stepTheme": "La fermentation des jus sucrés",
          "stepBadge": "La fermentation des jus sucrés",
          "paragraphText": "La fermentation du glucose (C₆H₁₂O₆), en présence d'enzymes, donne l'éthanol et du dioxyde de carbone.\nC'est la méthode utilisée pour préparer les boissons alcoolisées, comme l'a vu la classe en visite dans une brasserie.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q1",
            "type": "mcq",
            "prompt": "La fermentation du glucose en présence d'enzymes produit principalement :",
            "options": [
              "Du méthanol",
              "De l'éthanol",
              "Du propan-2-ol",
              "De l'acide éthanoïque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé indique que la fermentation du glucose donne l'éthanol (et du dioxyde de carbone)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Sucres fermentescibles et non fermentescibles",
          "stepTheme": "Sucres fermentescibles et non fermentescibles",
          "stepBadge": "Sucres fermentescibles et non fermentescibles",
          "paragraphText": "• Sucre fermentescible : sucre qui peut fermenter sous l'action des levures et produire de l'alcool (glucose, saccharose, fructose).\n• Sucre non fermentescible : sucre qui ne fermente pas sous l'action des levures (lactose du lait, amidon, sorbitol).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q2",
            "type": "mcq",
            "prompt": "Parmi les sucres suivants, lequel est fermentescible ?",
            "options": [
              "Le lactose",
              "L'amidon",
              "Le glucose",
              "Le sorbitol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le glucose, le saccharose et le fructose sont fermentescibles ; le lactose, l'amidon et le sorbitol sont cités comme non fermentescibles dans le résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'hydratation d'un alcène",
          "stepTheme": "L'hydratation d'un alcène",
          "stepBadge": "L'hydratation d'un alcène",
          "paragraphText": "L'hydratation d'un alcène, c'est-à-dire l'addition d'une molécule d'eau sur sa double liaison, conduit à un alcool.\nL'eau est de la forme H–X, avec X = OH.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q3",
            "type": "mcq",
            "prompt": "L'hydratation de l'éthylène (éthène) donne :",
            "options": [
              "L'éthanol",
              "Le méthanol",
              "L'éthanal",
              "L'éthane"
            ],
            "correctAnswerIndex": 0,
            "explanation": "CH₂=CH₂ + H₂O → CH₃–CH₂–OH : l'hydratation de l'éthylène donne l'éthanol."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La règle de Markovnikov",
          "stepTheme": "La règle de Markovnikov",
          "stepBadge": "La règle de Markovnikov",
          "paragraphText": "• Règle de Markovnikov : lors de l'addition d'un composé du type H–X sur une double liaison carbone-carbone, l'atome d'hydrogène du composé s'attache à l'atome de carbone de la double liaison qui porte le plus d'atomes d'hydrogène.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q4",
            "type": "mcq",
            "prompt": "D'après la règle de Markovnikov, lors d'une addition H–X sur une double liaison C=C, l'atome d'hydrogène se fixe sur le carbone :",
            "options": [
              "Le moins hydrogéné",
              "Le plus éloigné de la double liaison",
              "Qui porte un groupement méthyle",
              "Qui porte le plus d'atomes d'hydrogène"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'énoncé même de la règle : l'hydrogène va sur le carbone de la double liaison le plus hydrogéné."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le produit majoritaire de l'hydratation du propène",
          "stepTheme": "Le produit majoritaire de l'hydratation du propène",
          "stepBadge": "Le produit majoritaire de l'hydratation du propène",
          "paragraphText": "Piège : croire que l'hydratation du propène donne surtout du propan-1-ol.\nEn appliquant Markovnikov, le –OH se place sur le carbone central : le produit majoritaire est le propan-2-ol.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q5",
            "type": "mcq",
            "prompt": "Le produit majoritaire de l'hydratation du propène est :",
            "options": [
              "Le propan-1-ol",
              "Le propanal",
              "Le propan-2-ol",
              "La propanone"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après la règle de Markovnikov, l'hydrogène se fixe sur le carbone le plus hydrogéné et le –OH sur le carbone n°2 : on obtient majoritairement le propan-2-ol."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La préparation du glycol en deux étapes",
          "stepTheme": "La préparation du glycol en deux étapes",
          "stepBadge": "La préparation du glycol en deux étapes",
          "paragraphText": "Le glycol (éthane-1,2-diol) se prépare en deux étapes : d'abord l'oxydation de l'éthylène par le dioxygène de l'air donne l'oxyde d'éthylène ; ensuite l'hydratation de l'oxyde d'éthylène donne le glycol.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q6",
            "type": "mcq",
            "prompt": "Le glycol, préparé à partir de l'éthylène en deux étapes, est :",
            "options": [
              "Le méthanol",
              "L'éthane-1,2-diol",
              "Le glycérol",
              "L'oxyde de diéthyle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé nomme le glycol : c'est l'éthane-1,2-diol, obtenu par hydratation de l'oxyde d'éthylène."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q1",
          "type": "mcq",
          "prompt": "La fermentation du glucose en présence d'enzymes produit principalement :",
          "options": [
            "Du méthanol",
            "De l'éthanol",
            "Du propan-2-ol",
            "De l'acide éthanoïque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé indique que la fermentation du glucose donne l'éthanol (et du dioxyde de carbone)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q2",
          "type": "mcq",
          "prompt": "Parmi les sucres suivants, lequel est fermentescible ?",
          "options": [
            "Le lactose",
            "L'amidon",
            "Le glucose",
            "Le sorbitol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le glucose, le saccharose et le fructose sont fermentescibles ; le lactose, l'amidon et le sorbitol sont cités comme non fermentescibles dans le résumé."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q3",
          "type": "mcq",
          "prompt": "L'hydratation de l'éthylène (éthène) donne :",
          "options": [
            "L'éthanol",
            "Le méthanol",
            "L'éthanal",
            "L'éthane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "CH₂=CH₂ + H₂O → CH₃–CH₂–OH : l'hydratation de l'éthylène donne l'éthanol."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q4",
          "type": "mcq",
          "prompt": "D'après la règle de Markovnikov, lors d'une addition H–X sur une double liaison C=C, l'atome d'hydrogène se fixe sur le carbone :",
          "options": [
            "Le moins hydrogéné",
            "Le plus éloigné de la double liaison",
            "Qui porte un groupement méthyle",
            "Qui porte le plus d'atomes d'hydrogène"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'énoncé même de la règle : l'hydrogène va sur le carbone de la double liaison le plus hydrogéné."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q5",
          "type": "mcq",
          "prompt": "Le produit majoritaire de l'hydratation du propène est :",
          "options": [
            "Le propan-1-ol",
            "Le propanal",
            "Le propan-2-ol",
            "La propanone"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après la règle de Markovnikov, l'hydrogène se fixe sur le carbone le plus hydrogéné et le –OH sur le carbone n°2 : on obtient majoritairement le propan-2-ol."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q6",
          "type": "mcq",
          "prompt": "Le glycol, préparé à partir de l'éthylène en deux étapes, est :",
          "options": [
            "Le méthanol",
            "L'éthane-1,2-diol",
            "Le glycérol",
            "L'oxyde de diéthyle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé nomme le glycol : c'est l'éthane-1,2-diol, obtenu par hydratation de l'oxyde d'éthylène."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l01_alcools_p04",
      "order": 4,
      "title": "Réactions des alcools : sodium, déshydratations, combustion",
      "summary": "Les réactions de base des alcools : alcoolates, alcènes, éther-oxydes et combustion.",
      "conceptExplanation": "Un alcool réagit avec le sodium pour donner un ion alcoolate et du dihydrogène.\nLa déshydratation d'un alcool peut être intramoléculaire : elle se fait en milieu acide, en présence d'alumine, et conduit à un alcène.\nElle peut aussi être intermoléculaire : deux molécules d'alcool donnent alors un éther-oxyde et de l'eau.\nEnfin, la combustion complète d'un alcool produit du dioxyde de carbone et de l'eau.",
      "keyRule": "Intramoléculaire = un alcène ; intermoléculaire = un éther-oxyde : le préfixe dit si l'eau part d'une seule molécule ou de deux.",
      "formulas": [
        {
          "name": "Réaction avec le sodium",
          "formula": "\\mathrm{R-OH + Na \\longrightarrow RO^- + Na^+ + \\frac{1}{2}\\,H_2}",
          "note": "Il se dégage du dihydrogène."
        },
        {
          "name": "Déshydratation intermoléculaire",
          "formula": "\\mathrm{R-OH + R'-OH \\longrightarrow R-O-R' + H_2O}",
          "note": "Le produit organique est un éther-oxyde."
        },
        {
          "name": "Combustion complète",
          "formula": "\\mathrm{C_nH_{2n+1}OH + \\frac{3n}{2}\\,O_2 \\longrightarrow n\\,CO_2 + (n+1)\\,H_2O}",
          "note": "Équation-bilan générale de la combustion d'un alcool."
        }
      ],
      "workedExample": {
        "title": "Déshydratation intramoléculaire de l'éthanol (exercice 2)",
        "statement": "Nomme le produit de la déshydratation intramoléculaire de l'éthanol en présence d'alumine.",
        "methodSteps": [
          "« Intramoléculaire » signifie qu'une molécule d'eau est éliminée au sein d'une même molécule d'alcool.",
          "La réaction se fait en milieu acide, en présence d'alumine (Al₂O₃).",
          "L'élimination de l'eau crée une double liaison carbone-carbone."
        ],
        "conclusion": "Le produit est l'éthylène (éthène), comme l'indique la solution de l'exercice 2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La réaction avec le sodium",
          "stepTheme": "La réaction avec le sodium",
          "stepBadge": "La réaction avec le sodium",
          "paragraphText": "L'alcool réagit avec le sodium pour donner l'ion alcoolate RO⁻ (et l'ion sodium Na⁺).\nLa réaction s'accompagne d'un dégagement de dihydrogène.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q1",
            "type": "mcq",
            "prompt": "La réaction d'un alcool avec le sodium donne :",
            "options": [
              "Un alcène et de l'eau",
              "Un éther-oxyde et du dihydrogène",
              "Un ion alcoolate et du dihydrogène",
              "Un acide carboxylique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après le résumé, l'alcool réagit avec le sodium pour donner l'ion alcoolate ; l'équation montre aussi le dégagement de dihydrogène."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La déshydratation intramoléculaire",
          "stepTheme": "La déshydratation intramoléculaire",
          "stepBadge": "La déshydratation intramoléculaire",
          "paragraphText": "• Déshydratation intramoléculaire : élimination d'une molécule d'eau au sein d'une même molécule d'alcool ; elle conduit à un alcène.\nElle se fait en milieu acide (sulfurique), en présence d'alumine.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q2",
            "type": "mcq",
            "prompt": "La déshydratation intramoléculaire d'un alcool conduit à :",
            "options": [
              "Un alcène",
              "Un éther-oxyde",
              "Un alcoolate",
              "Un acide carboxylique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'élimination de l'eau au sein de la molécule crée une double liaison : on obtient un alcène."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La déshydratation intermoléculaire",
          "stepTheme": "La déshydratation intermoléculaire",
          "stepBadge": "La déshydratation intermoléculaire",
          "paragraphText": "• Déshydratation intermoléculaire : élimination d'une molécule d'eau entre deux molécules d'alcool ; elle conduit à un éther-oxyde.\nÉquation générale : R–OH + R'–OH → R–O–R' + H₂O.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q3",
            "type": "mcq",
            "prompt": "La déshydratation intermoléculaire de l'éthanol donne :",
            "options": [
              "De l'éthylène et de l'eau",
              "L'oxyde de diéthyle et de l'eau",
              "L'éthanal et du dihydrogène",
              "L'éthanolate de sodium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Entre deux molécules d'éthanol, l'élimination d'eau donne l'oxyde de diéthyle, un éther-oxyde (solution de l'exercice 2 du résumé)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les deux déshydratations",
          "stepTheme": "Ne pas confondre les deux déshydratations",
          "stepBadge": "Ne pas confondre les deux déshydratations",
          "paragraphText": "Piège fréquent : intervertir les produits des deux déshydratations.\nAlcène = intramoléculaire ; éther-oxyde = intermoléculaire.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q4",
            "type": "mcq",
            "prompt": "Pour obtenir un éther-oxyde à partir d'un alcool, il faut réaliser une déshydratation :",
            "options": [
              "Intramoléculaire",
              "Par fermentation",
              "Par combustion",
              "Intermoléculaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'éther-oxyde R–O–R' se forme par élimination d'eau entre deux molécules d'alcool : c'est la déshydratation intermoléculaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La combustion complète des alcools",
          "stepTheme": "La combustion complète des alcools",
          "stepBadge": "La combustion complète des alcools",
          "paragraphText": "La combustion complète d'un alcool, dans le dioxygène, produit du dioxyde de carbone et de l'eau.\nÉquation-bilan générale : $\\mathrm{C_nH_{2n+1}OH + \\frac{3n}{2}\\,O_2 \\longrightarrow n\\,CO_2 + (n+1)\\,H_2O}$.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q5",
            "type": "mcq",
            "prompt": "La combustion complète d'un alcool produit :",
            "options": [
              "Du monoxyde de carbone et du dihydrogène",
              "Du dioxyde de carbone et de l'eau",
              "Un alcène et de l'eau",
              "Du carbone et de la vapeur d'eau uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après l'équation-bilan générale du résumé, les produits de la combustion complète sont CO₂ et H₂O."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'action du sodium sur l'éthanol (exercice 2)",
          "stepTheme": "L'action du sodium sur l'éthanol (exercice 2)",
          "stepBadge": "L'action du sodium sur l'éthanol (exercice 2)",
          "paragraphText": "L'exercice 2 du résumé demande les produits de l'action du sodium solide sur l'éthanol.\nLa solution donne : éthanolate de sodium et dihydrogène.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q6",
            "type": "mcq",
            "prompt": "Le produit organique de l'action du sodium sur l'éthanol est :",
            "options": [
              "L'éthanal",
              "L'acide éthanoïque",
              "L'éthanolate de sodium",
              "L'oxyde de diéthyle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sodium transforme l'éthanol en son alcoolate, l'éthanolate de sodium, avec dégagement de dihydrogène."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q1",
          "type": "mcq",
          "prompt": "La réaction d'un alcool avec le sodium donne :",
          "options": [
            "Un alcène et de l'eau",
            "Un éther-oxyde et du dihydrogène",
            "Un ion alcoolate et du dihydrogène",
            "Un acide carboxylique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après le résumé, l'alcool réagit avec le sodium pour donner l'ion alcoolate ; l'équation montre aussi le dégagement de dihydrogène."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q2",
          "type": "mcq",
          "prompt": "La déshydratation intramoléculaire d'un alcool conduit à :",
          "options": [
            "Un alcène",
            "Un éther-oxyde",
            "Un alcoolate",
            "Un acide carboxylique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'élimination de l'eau au sein de la molécule crée une double liaison : on obtient un alcène."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q3",
          "type": "mcq",
          "prompt": "La déshydratation intermoléculaire de l'éthanol donne :",
          "options": [
            "De l'éthylène et de l'eau",
            "L'oxyde de diéthyle et de l'eau",
            "L'éthanal et du dihydrogène",
            "L'éthanolate de sodium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Entre deux molécules d'éthanol, l'élimination d'eau donne l'oxyde de diéthyle, un éther-oxyde (solution de l'exercice 2 du résumé)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q4",
          "type": "mcq",
          "prompt": "Pour obtenir un éther-oxyde à partir d'un alcool, il faut réaliser une déshydratation :",
          "options": [
            "Intramoléculaire",
            "Par fermentation",
            "Par combustion",
            "Intermoléculaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'éther-oxyde R–O–R' se forme par élimination d'eau entre deux molécules d'alcool : c'est la déshydratation intermoléculaire."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q5",
          "type": "mcq",
          "prompt": "La combustion complète d'un alcool produit :",
          "options": [
            "Du monoxyde de carbone et du dihydrogène",
            "Du dioxyde de carbone et de l'eau",
            "Un alcène et de l'eau",
            "Du carbone et de la vapeur d'eau uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après l'équation-bilan générale du résumé, les produits de la combustion complète sont CO₂ et H₂O."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q6",
          "type": "mcq",
          "prompt": "Le produit organique de l'action du sodium sur l'éthanol est :",
          "options": [
            "L'éthanal",
            "L'acide éthanoïque",
            "L'éthanolate de sodium",
            "L'oxyde de diéthyle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sodium transforme l'éthanol en son alcoolate, l'éthanolate de sodium, avec dégagement de dihydrogène."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l01_alcools_p05",
      "order": 5,
      "title": "L'oxydation ménagée des alcools",
      "summary": "Le produit de l'oxydation dépend de la classe de l'alcool et de la quantité d'oxydant.",
      "conceptExplanation": "L'oxydation ménagée conserve la chaîne carbonée de l'alcool ; son résultat dépend de la classe de l'alcool.\nUn alcool primaire s'oxyde en aldéhyde si l'oxydant est en défaut, et en acide carboxylique si l'oxydant est en excès.\nUn alcool secondaire s'oxyde en cétone.\nUn alcool tertiaire n'est pas oxydable.\nLes oxydants utilisés sont par exemple le dichromate de potassium ou le permanganate de potassium, en milieu acide.",
      "keyRule": "Primaire → aldéhyde (oxydant en défaut) ou acide carboxylique (oxydant en excès) ; secondaire → cétone ; tertiaire → pas d'oxydation : la classe décide du produit.",
      "formulas": [
        {
          "name": "Oxydation de l'éthanol par le dichromate en défaut",
          "formula": "\\mathrm{3\\,CH_3-CH_2-OH + Cr_2O_7^{2-} + 8\\,H_3O^+ \\longrightarrow 3\\,CH_3-CHO + 2\\,Cr^{3+} + 15\\,H_2O}",
          "note": "L'éthanol, alcool primaire, donne l'éthanal."
        },
        {
          "name": "Oxydation du propan-2-ol par le dichromate",
          "formula": "\\mathrm{3\\,CH_3-CHOH-CH_3 + Cr_2O_7^{2-} + 8\\,H_3O^+ \\longrightarrow 3\\,CH_3-CO-CH_3 + 2\\,Cr^{3+} + 15\\,H_2O}",
          "note": "Le propan-2-ol, alcool secondaire, donne la propanone."
        }
      ],
      "workedExample": {
        "title": "Oxydation ménagée du propan-1-ol, oxydant en défaut (exercice 2)",
        "statement": "Donne le nom et la formule du produit de l'oxydation ménagée du propan-1-ol par le permanganate de potassium acidifié en défaut.",
        "methodSteps": [
          "Le propan-1-ol est un alcool primaire.",
          "L'oxydant est en défaut : l'oxydation s'arrête au premier produit, un aldéhyde.",
          "La chaîne garde ses 3 carbones : l'aldéhyde obtenu est le propanal, CH₃–CH₂–CHO."
        ],
        "conclusion": "Le produit est le propanal, comme l'indique la solution de l'exercice 2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Alcool primaire, oxydant en défaut",
          "stepTheme": "Alcool primaire, oxydant en défaut",
          "stepBadge": "Alcool primaire, oxydant en défaut",
          "paragraphText": "Un alcool primaire s'oxyde pour donner un aldéhyde si l'oxydant est en défaut.\nExemple : l'éthanol donne l'éthanal avec le dichromate de potassium en défaut.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q1",
            "type": "mcq",
            "prompt": "L'oxydation ménagée d'un alcool primaire par un oxydant en défaut donne :",
            "options": [
              "Un acide carboxylique",
              "Un aldéhyde",
              "Une cétone",
              "Un éther-oxyde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec un oxydant en défaut, l'alcool primaire s'arrête au stade aldéhyde."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Alcool primaire, oxydant en excès",
          "stepTheme": "Alcool primaire, oxydant en excès",
          "stepBadge": "Alcool primaire, oxydant en excès",
          "paragraphText": "Si l'oxydant est en excès, l'oxydation de l'alcool primaire se poursuit jusqu'à l'acide carboxylique.\nC'est le cas de la situation d'évaluation du résumé : le composé B obtenu fait virer le bleu de bromothymol au jaune, signe d'un acide.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q2",
            "type": "mcq",
            "prompt": "L'oxydation ménagée d'un alcool primaire par un oxydant en excès donne :",
            "options": [
              "Un aldéhyde",
              "Une cétone",
              "Un acide carboxylique",
              "Un alcène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec un oxydant en excès, l'alcool primaire est oxydé jusqu'à l'acide carboxylique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Alcool secondaire : une cétone",
          "stepTheme": "Alcool secondaire : une cétone",
          "stepBadge": "Alcool secondaire : une cétone",
          "paragraphText": "Les alcools secondaires sont oxydables en cétone.\nExemple du résumé : le propan-2-ol donne la propanone par oxydation au dichromate de potassium.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q3",
            "type": "mcq",
            "prompt": "L'oxydation ménagée du propan-2-ol donne :",
            "options": [
              "La propanone",
              "Le propanal",
              "L'acide propanoïque",
              "Le propène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un alcool secondaire s'oxyde en cétone : le propan-2-ol donne la propanone."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Les alcools tertiaires ne sont pas oxydables",
          "stepTheme": "Les alcools tertiaires ne sont pas oxydables",
          "stepBadge": "Les alcools tertiaires ne sont pas oxydables",
          "paragraphText": "Piège : les alcools tertiaires ne sont pas oxydables, car leur carbone fonctionnel ne porte aucun atome d'hydrogène.\nSoumis à un oxydant ménagé, un alcool tertiaire ne donne ni aldéhyde, ni cétone, ni acide.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q4",
            "type": "mcq",
            "prompt": "Le 2-méthylpropan-2-ol, soumis à un oxydant ménagé, donne :",
            "options": [
              "Un aldéhyde",
              "Une cétone",
              "Un acide carboxylique",
              "Aucun produit : il n'est pas oxydable"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé est net : les alcools tertiaires ne sont pas oxydables."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les oxydants de l'oxydation ménagée",
          "stepTheme": "Les oxydants de l'oxydation ménagée",
          "stepBadge": "Les oxydants de l'oxydation ménagée",
          "paragraphText": "L'oxydation ménagée se réalise en milieu acide avec des oxydants comme le dichromate de potassium (ion Cr₂O₇²⁻) ou le permanganate de potassium (ion MnO₄⁻).\nCe sont des réactions d'oxydoréduction : l'oxydant capte les électrons cédés par l'alcool.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q5",
            "type": "mcq",
            "prompt": "Quel réactif est un oxydant utilisé pour l'oxydation ménagée des alcools ?",
            "options": [
              "Le sodium métallique",
              "L'alumine",
              "La solution acidifiée de dichromate de potassium",
              "Les levures"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé utilise le dichromate de potassium (et le permanganate) en milieu acide comme oxydants ; le sodium est un réducteur, l'alumine un catalyseur de déshydratation et les levures servent à la fermentation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître l'acide formé (situation d'évaluation)",
          "stepTheme": "Reconnaître l'acide formé (situation d'évaluation)",
          "stepBadge": "Reconnaître l'acide formé (situation d'évaluation)",
          "paragraphText": "Dans la situation d'évaluation du résumé, l'oxydation en excès de l'alcool A donne un composé B qui fait virer le bleu de bromothymol au jaune.\nLa solution conclut que B est un acide carboxylique, et donc que A est un alcool primaire.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q6",
            "type": "mcq",
            "prompt": "Dans la situation d'évaluation, le composé B fait virer le bleu de bromothymol au jaune. B est donc :",
            "options": [
              "Un aldéhyde",
              "Un acide carboxylique",
              "Une cétone",
              "Un éther-oxyde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le virage au jaune du bleu de bromothymol traduit un milieu acide : B est un acide carboxylique, produit de l'oxydation en excès d'un alcool primaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q1",
          "type": "mcq",
          "prompt": "L'oxydation ménagée d'un alcool primaire par un oxydant en défaut donne :",
          "options": [
            "Un acide carboxylique",
            "Un aldéhyde",
            "Une cétone",
            "Un éther-oxyde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec un oxydant en défaut, l'alcool primaire s'arrête au stade aldéhyde."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q2",
          "type": "mcq",
          "prompt": "L'oxydation ménagée d'un alcool primaire par un oxydant en excès donne :",
          "options": [
            "Un aldéhyde",
            "Une cétone",
            "Un acide carboxylique",
            "Un alcène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec un oxydant en excès, l'alcool primaire est oxydé jusqu'à l'acide carboxylique."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q3",
          "type": "mcq",
          "prompt": "L'oxydation ménagée du propan-2-ol donne :",
          "options": [
            "La propanone",
            "Le propanal",
            "L'acide propanoïque",
            "Le propène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un alcool secondaire s'oxyde en cétone : le propan-2-ol donne la propanone."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q4",
          "type": "mcq",
          "prompt": "Le 2-méthylpropan-2-ol, soumis à un oxydant ménagé, donne :",
          "options": [
            "Un aldéhyde",
            "Une cétone",
            "Un acide carboxylique",
            "Aucun produit : il n'est pas oxydable"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé est net : les alcools tertiaires ne sont pas oxydables."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q5",
          "type": "mcq",
          "prompt": "Quel réactif est un oxydant utilisé pour l'oxydation ménagée des alcools ?",
          "options": [
            "Le sodium métallique",
            "L'alumine",
            "La solution acidifiée de dichromate de potassium",
            "Les levures"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé utilise le dichromate de potassium (et le permanganate) en milieu acide comme oxydants ; le sodium est un réducteur, l'alumine un catalyseur de déshydratation et les levures servent à la fermentation."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q6",
          "type": "mcq",
          "prompt": "Dans la situation d'évaluation, le composé B fait virer le bleu de bromothymol au jaune. B est donc :",
          "options": [
            "Un aldéhyde",
            "Un acide carboxylique",
            "Une cétone",
            "Un éther-oxyde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le virage au jaune du bleu de bromothymol traduit un milieu acide : B est un acide carboxylique, produit de l'oxydation en excès d'un alcool primaire."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l01_alcools_p06",
      "order": 6,
      "title": "Identifier un alcool inconnu",
      "summary": "Déterminer la formule et le nom d'un alcool à partir de sa masse molaire et de son oxydation.",
      "conceptExplanation": "Pour un alcool de formule brute $\\mathrm{C_nH_{2n+2}O}$, la masse molaire vaut $M = 14n + 18$ (en g/mol) : elle permet de trouver le nombre n d'atomes de carbone.\nLe pourcentage massique d'oxygène donne aussi accès à la masse molaire.\nEnsuite, on écrit les isomères possibles et on tranche grâce aux réactions : si l'oxydation en excès donne un acide carboxylique, l'alcool est primaire ; la ramification de l'acide obtenu renseigne sur celle de l'alcool.",
      "keyRule": "Pour un alcool, $M = 14n + 18$ : la masse molaire donne n, puis le produit d'oxydation choisit le bon isomère.",
      "formulas": [
        {
          "name": "Masse molaire d'un alcool",
          "formula": "M = 14n + 18",
          "note": "M en g/mol, n = nombre d'atomes de carbone."
        }
      ],
      "workedExample": {
        "title": "L'alcool A de masse molaire 74 g/mol (situation d'évaluation)",
        "statement": "Un alcool A a une masse molaire de 74 g/mol. Son oxydation ménagée par le permanganate en excès donne un composé B, acide carboxylique à chaîne ramifiée. Détermine le nom de A.",
        "methodSteps": [
          "On résout $14n + 18 = 74$, ce qui donne $n = 4$ : la formule brute de A est $\\mathrm{C_4H_{10}O}$.",
          "L'oxydation en excès donne un acide carboxylique : A est donc un alcool primaire.",
          "L'acide B est ramifié, donc A est ramifié aussi : parmi les alcools primaires en C₄, c'est le 2-méthylpropan-1-ol.",
          "B est alors l'acide 2-méthylpropanoïque."
        ],
        "conclusion": "A est le 2-méthylpropan-1-ol, conformément à la solution de la situation d'évaluation du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "De la masse molaire au nombre de carbones",
          "stepTheme": "De la masse molaire au nombre de carbones",
          "stepBadge": "De la masse molaire au nombre de carbones",
          "paragraphText": "La masse molaire d'un alcool vaut $M = 14n + 18$.\nEn résolvant cette équation, on obtient le nombre n d'atomes de carbone, donc la formule brute.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q1",
            "type": "mcq",
            "prompt": "Un alcool a une masse molaire de $74\\ \\mathrm{g/mol}$. Combien d'atomes de carbone contient sa molécule ?",
            "options": [
              "3 atomes de carbone",
              "4 atomes de carbone",
              "5 atomes de carbone",
              "6 atomes de carbone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On résout $14n + 18 = 74$, soit $14n = 56$ et $n = 4$ : la formule brute est $\\mathrm{C_4H_{10}O}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Utiliser le pourcentage d'oxygène",
          "stepTheme": "Utiliser le pourcentage d'oxygène",
          "stepBadge": "Utiliser le pourcentage d'oxygène",
          "paragraphText": "Dans l'exercice 3 du résumé, un alcool saturé X contient 21,62 % d'oxygène en masse.\nComme l'alcool ne contient qu'un seul atome d'oxygène, ce pourcentage permet de calculer sa masse molaire.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q2",
            "type": "mcq",
            "prompt": "Un alcool saturé contient 21,62 % d'oxygène en masse. Sa masse molaire vaut environ :",
            "options": [
              "$46\\ \\mathrm{g/mol}$",
              "$60\\ \\mathrm{g/mol}$",
              "$74\\ \\mathrm{g/mol}$",
              "$88\\ \\mathrm{g/mol}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution de l'exercice 3 donne $M = 74\\ \\mathrm{g/mol}$, ce qui conduit ensuite à la formule brute $\\mathrm{C_4H_{10}O}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les isomères alcools de C₄H₁₀O",
          "stepTheme": "Les isomères alcools de C₄H₁₀O",
          "stepBadge": "Les isomères alcools de C₄H₁₀O",
          "paragraphText": "D'après la situation d'évaluation, les alcools isomères de formule $\\mathrm{C_4H_{10}O}$ sont : le butan-1-ol, le butan-2-ol, le 2-méthylpropan-1-ol et le 2-méthylpropan-2-ol.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q3",
            "type": "mcq",
            "prompt": "Parmi les composés suivants, lequel est un alcool isomère de formule $\\mathrm{C_4H_{10}O}$ ?",
            "options": [
              "La butanone",
              "Le 2-méthylpropan-2-ol",
              "Le butanal",
              "L'acide butanoïque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le 2-méthylpropan-2-ol figure dans la liste des isomères alcools de $\\mathrm{C_4H_{10}O}$ ; la butanone, le butanal et l'acide butanoïque ont pour formule $\\mathrm{C_4H_8O}$ ou $\\mathrm{C_4H_8O_2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Trancher grâce au produit d'oxydation",
          "stepTheme": "Trancher grâce au produit d'oxydation",
          "stepBadge": "Trancher grâce au produit d'oxydation",
          "paragraphText": "Méthode : si l'oxydation en excès d'un alcool inconnu donne un acide carboxylique, alors cet alcool est nécessairement primaire.\nOn élimine ainsi les isomères secondaires et tertiaires.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q4",
            "type": "mcq",
            "prompt": "L'oxydation en excès de l'alcool A donne un acide carboxylique. On en déduit que A est :",
            "options": [
              "Un alcool primaire",
              "Un alcool secondaire",
              "Un alcool tertiaire",
              "Un polyol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seul un alcool primaire peut être oxydé jusqu'à l'acide carboxylique ; c'est le raisonnement de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La ramification élimine le butan-1-ol",
          "stepTheme": "La ramification élimine le butan-1-ol",
          "stepBadge": "La ramification élimine le butan-1-ol",
          "paragraphText": "Piège : s'arrêter à « alcool primaire en C₄ » et répondre butan-1-ol.\nLe composé B obtenu a une chaîne ramifiée : l'alcool A est donc ramifié lui aussi, ce qui élimine le butan-1-ol, à chaîne linéaire.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q5",
            "type": "mcq",
            "prompt": "L'acide B obtenu est l'acide 2-méthylpropanoïque. L'alcool A de départ est donc :",
            "options": [
              "Le butan-1-ol",
              "Le butan-2-ol",
              "Le 2-méthylpropan-2-ol",
              "Le 2-méthylpropan-1-ol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "A est primaire (il donne un acide) et ramifié (l'acide obtenu est ramifié) : c'est le 2-méthylpropan-1-ol."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'équation-bilan avec le permanganate",
          "stepTheme": "L'équation-bilan avec le permanganate",
          "stepBadge": "L'équation-bilan avec le permanganate",
          "paragraphText": "La solution de la situation d'évaluation écrit l'équation-bilan de l'oxydation de A par l'ion permanganate : $\\mathrm{5\\,CH_3-CH(CH_3)-CH_2-OH + 4\\,MnO_4^- + 12\\,H_3O^+ \\longrightarrow 5\\,CH_3-CH(CH_3)-COOH + 4\\,Mn^{2+} + 23\\,H_2O}$.\nL'ion permanganate y est réduit en ion manganèse Mn²⁺.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q6",
            "type": "mcq",
            "prompt": "Dans l'oxydation d'un alcool par le permanganate de potassium en milieu acide, l'ion permanganate MnO₄⁻ est réduit en :",
            "options": [
              "MnO₂",
              "Mn³⁺",
              "Mn²⁺",
              "Mn métallique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le couple donné dans la situation d'évaluation est MnO₄⁻/Mn²⁺ : en milieu acide, le permanganate est réduit en ion manganèse Mn²⁺."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q1",
          "type": "mcq",
          "prompt": "Un alcool a une masse molaire de $74\\ \\mathrm{g/mol}$. Combien d'atomes de carbone contient sa molécule ?",
          "options": [
            "3 atomes de carbone",
            "4 atomes de carbone",
            "5 atomes de carbone",
            "6 atomes de carbone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On résout $14n + 18 = 74$, soit $14n = 56$ et $n = 4$ : la formule brute est $\\mathrm{C_4H_{10}O}$."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q2",
          "type": "mcq",
          "prompt": "Un alcool saturé contient 21,62 % d'oxygène en masse. Sa masse molaire vaut environ :",
          "options": [
            "$46\\ \\mathrm{g/mol}$",
            "$60\\ \\mathrm{g/mol}$",
            "$74\\ \\mathrm{g/mol}$",
            "$88\\ \\mathrm{g/mol}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution de l'exercice 3 donne $M = 74\\ \\mathrm{g/mol}$, ce qui conduit ensuite à la formule brute $\\mathrm{C_4H_{10}O}$."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q3",
          "type": "mcq",
          "prompt": "Parmi les composés suivants, lequel est un alcool isomère de formule $\\mathrm{C_4H_{10}O}$ ?",
          "options": [
            "La butanone",
            "Le 2-méthylpropan-2-ol",
            "Le butanal",
            "L'acide butanoïque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le 2-méthylpropan-2-ol figure dans la liste des isomères alcools de $\\mathrm{C_4H_{10}O}$ ; la butanone, le butanal et l'acide butanoïque ont pour formule $\\mathrm{C_4H_8O}$ ou $\\mathrm{C_4H_8O_2}$."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q4",
          "type": "mcq",
          "prompt": "L'oxydation en excès de l'alcool A donne un acide carboxylique. On en déduit que A est :",
          "options": [
            "Un alcool primaire",
            "Un alcool secondaire",
            "Un alcool tertiaire",
            "Un polyol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seul un alcool primaire peut être oxydé jusqu'à l'acide carboxylique ; c'est le raisonnement de la situation d'évaluation."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q5",
          "type": "mcq",
          "prompt": "L'acide B obtenu est l'acide 2-méthylpropanoïque. L'alcool A de départ est donc :",
          "options": [
            "Le butan-1-ol",
            "Le butan-2-ol",
            "Le 2-méthylpropan-2-ol",
            "Le 2-méthylpropan-1-ol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "A est primaire (il donne un acide) et ramifié (l'acide obtenu est ramifié) : c'est le 2-méthylpropan-1-ol."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q6",
          "type": "mcq",
          "prompt": "Dans l'oxydation d'un alcool par le permanganate de potassium en milieu acide, l'ion permanganate MnO₄⁻ est réduit en :",
          "options": [
            "MnO₂",
            "Mn³⁺",
            "Mn²⁺",
            "Mn métallique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le couple donné dans la situation d'évaluation est MnO₄⁻/Mn²⁺ : en milieu acide, le permanganate est réduit en ion manganèse Mn²⁺."
        }
      ]
    }
  ]
};
