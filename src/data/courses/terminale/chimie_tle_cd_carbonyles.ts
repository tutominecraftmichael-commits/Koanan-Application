import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 2 : Composés carbonylés : aldéhydes et cétones » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1315
export const CHIMIE_TLE_CD_L02_CARBONYLES: CurriculumChapter = {
  "id": "terminale_c_chimie_l02_carbonyles",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 2,
  "title": "Leçon 2 : Composés carbonylés : aldéhydes et cétones",
  "summary": "On définit les composés carbonylés (aldéhydes et cétones), on apprend à les nommer, puis on découvre leurs tests de caractérisation : le test commun à la 2,4-DNPH et les tests qui distinguent les aldéhydes, seuls réducteurs.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1315",
  "points": [
    {
      "id": "terminale_c_chimie_l02_carbonyles_p01",
      "order": 1,
      "title": "Définition d'un composé carbonylé",
      "summary": "Le groupe carbonyle, la formule générale et la différence entre aldéhyde et cétone.",
      "conceptExplanation": "Un composé carbonylé est un composé organique oxygéné comportant le groupe carbonyle C=O.\nLeur formule brute générale est $\\mathrm{C_nH_{2n}O}$, où n est le nombre d'atomes de carbone.\nLes aldéhydes et les cétones sont des composés carbonylés : dans un aldéhyde, le groupe carbonyle est en bout de chaîne, lié à un atome d'hydrogène (formule générale R–CHO) ; dans une cétone, il est lié à deux groupements alkyles, au milieu de la chaîne.",
      "keyRule": "Carbonyle en bout de chaîne avec un H → aldéhyde ; carbonyle entre deux groupements alkyles → cétone.",
      "formulas": [
        {
          "name": "Formule brute générale des composés carbonylés",
          "formula": "\\mathrm{C_nH_{2n}O}",
          "note": "n est le nombre d'atomes de carbone."
        },
        {
          "name": "Formule générale d'un aldéhyde",
          "formula": "\\mathrm{R-CHO}",
          "note": "R est un groupement alkyle ou un atome d'hydrogène."
        },
        {
          "name": "Formule générale d'une cétone",
          "formula": "\\mathrm{R_1-CO-R_2}",
          "note": "R₁ et R₂ sont des groupements alkyles, différents de H."
        }
      ],
      "workedExample": {
        "title": "Reconnaître l'éthanal et la propanone",
        "statement": "Parmi les composés CH₃–CHO et CH₃–CO–CH₃, lequel est un aldéhyde et lequel est une cétone ?",
        "methodSteps": [
          "Dans CH₃–CHO, le groupe carbonyle est en bout de chaîne et porte un atome d'hydrogène : c'est un aldéhyde, l'éthanal.",
          "Dans CH₃–CO–CH₃, le groupe carbonyle est lié à deux groupements méthyle : c'est une cétone, la propanone."
        ],
        "conclusion": "La position du groupe carbonyle suffit à distinguer aldéhyde et cétone."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le groupe carbonyle",
          "stepTheme": "Le groupe carbonyle",
          "stepBadge": "Le groupe carbonyle",
          "paragraphText": "• Groupe carbonyle : le groupe C=O, un atome de carbone lié par une double liaison à un atome d'oxygène.\nUn composé carbonylé est un composé organique oxygéné qui comporte ce groupe.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p01_q1",
            "type": "mcq",
            "prompt": "Un composé carbonylé est un composé organique oxygéné qui comporte :",
            "options": [
              "Le groupe hydroxyle –OH",
              "Le groupe carbonyle C=O",
              "Le groupe carboxyle –COOH",
              "Le groupe amine –NH₂"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du résumé : le groupe carbonyle C=O caractérise les aldéhydes et les cétones."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule brute générale",
          "stepTheme": "La formule brute générale",
          "stepBadge": "La formule brute générale",
          "paragraphText": "La formule brute générale des composés carbonylés est $\\mathrm{C_nH_{2n}O}$.\nElle est la même pour les aldéhydes et pour les cétones : un aldéhyde et une cétone de même nombre de carbones sont donc isomères.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p01_q2",
            "type": "mcq",
            "prompt": "Quelle est la formule brute générale d'un composé carbonylé comportant n atomes de carbone ?",
            "options": [
              "$\\mathrm{C_nH_{2n+2}O}$",
              "$\\mathrm{C_nH_{2n}O_2}$",
              "$\\mathrm{C_nH_{2n}O}$",
              "$\\mathrm{C_nH_{2n-2}O}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé donne $\\mathrm{C_nH_{2n}O}$ : un seul atome d'oxygène, celui du groupe carbonyle. ($\\mathrm{C_nH_{2n+2}O}$ est la formule des alcools.)"
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'aldéhyde : le carbonyle en bout de chaîne",
          "stepTheme": "L'aldéhyde : le carbonyle en bout de chaîne",
          "stepBadge": "L'aldéhyde : le carbonyle en bout de chaîne",
          "paragraphText": "• Aldéhyde : composé carbonylé dont le groupe carbonyle est en bout de chaîne, lié à un atome d'hydrogène.\nSa formule générale s'écrit R–CHO.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p01_q3",
            "type": "mcq",
            "prompt": "Dans un aldéhyde, le groupe carbonyle est :",
            "options": [
              "En bout de chaîne, lié à un atome d'hydrogène",
              "Au milieu de la chaîne, entre deux carbones",
              "Lié à un groupe hydroxyle",
              "Absent de la molécule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La formule générale R–CHO montre que le carbonyle d'un aldéhyde porte un hydrogène et termine la chaîne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La cétone : le carbonyle au milieu de la chaîne",
          "stepTheme": "La cétone : le carbonyle au milieu de la chaîne",
          "stepBadge": "La cétone : le carbonyle au milieu de la chaîne",
          "paragraphText": "• Cétone : composé carbonylé dont le groupe carbonyle est lié à deux groupements alkyles R₁ et R₂, différents d'un atome d'hydrogène.\nSa formule générale s'écrit R₁–CO–R₂.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p01_q4",
            "type": "mcq",
            "prompt": "Dans une cétone, le groupe carbonyle est lié à :",
            "options": [
              "Un atome d'hydrogène et un groupement alkyle",
              "Un groupe hydroxyle",
              "Deux atomes d'hydrogène",
              "Deux groupements alkyles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule générale R₁–CO–R₂ impose deux groupements alkyles, différents de H, de part et d'autre du carbonyle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Aldéhyde ou cétone : regarder la place du carbonyle",
          "stepTheme": "Aldéhyde ou cétone : regarder la place du carbonyle",
          "stepBadge": "Aldéhyde ou cétone : regarder la place du carbonyle",
          "paragraphText": "Piège : le propanal et la propanone ont la même formule brute $\\mathrm{C_3H_6O}$.\nOn les distingue par la position du carbonyle : en bout de chaîne pour le propanal (aldéhyde), au milieu pour la propanone (cétone).",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p01_q5",
            "type": "mcq",
            "prompt": "Le composé CH₃–CH₂–CHO est :",
            "options": [
              "Une cétone",
              "Un aldéhyde",
              "Un alcool",
              "Un acide carboxylique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le groupe –CHO est en bout de chaîne : c'est le propanal, un aldéhyde."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux solvants cétoniques courants",
          "stepTheme": "Deux solvants cétoniques courants",
          "stepBadge": "Deux solvants cétoniques courants",
          "paragraphText": "D'après la documentation du résumé, certaines cétones sont d'un emploi courant comme solvants : l'acétone (propan-2-one) et la butan-2-one.\nLes aldéhydes, trop réactifs, ne sont pas utilisés comme solvants.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p01_q6",
            "type": "mcq",
            "prompt": "D'après la documentation du résumé, l'acétone est :",
            "options": [
              "Un aldéhyde utilisé comme solvant",
              "La propan-2-one, une cétone utilisée comme solvant",
              "Un alcool utilisé comme solvant",
              "Un acide carboxylique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'acétone est la propan-2-one (propanone), une cétone couramment employée comme solvant polaire aprotique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_carbonyles_p01_q1",
          "type": "mcq",
          "prompt": "Un composé carbonylé est un composé organique oxygéné qui comporte :",
          "options": [
            "Le groupe hydroxyle –OH",
            "Le groupe carbonyle C=O",
            "Le groupe carboxyle –COOH",
            "Le groupe amine –NH₂"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du résumé : le groupe carbonyle C=O caractérise les aldéhydes et les cétones."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p01_q2",
          "type": "mcq",
          "prompt": "Quelle est la formule brute générale d'un composé carbonylé comportant n atomes de carbone ?",
          "options": [
            "$\\mathrm{C_nH_{2n+2}O}$",
            "$\\mathrm{C_nH_{2n}O_2}$",
            "$\\mathrm{C_nH_{2n}O}$",
            "$\\mathrm{C_nH_{2n-2}O}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé donne $\\mathrm{C_nH_{2n}O}$ : un seul atome d'oxygène, celui du groupe carbonyle. ($\\mathrm{C_nH_{2n+2}O}$ est la formule des alcools.)"
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p01_q3",
          "type": "mcq",
          "prompt": "Dans un aldéhyde, le groupe carbonyle est :",
          "options": [
            "En bout de chaîne, lié à un atome d'hydrogène",
            "Au milieu de la chaîne, entre deux carbones",
            "Lié à un groupe hydroxyle",
            "Absent de la molécule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formule générale R–CHO montre que le carbonyle d'un aldéhyde porte un hydrogène et termine la chaîne."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p01_q4",
          "type": "mcq",
          "prompt": "Dans une cétone, le groupe carbonyle est lié à :",
          "options": [
            "Un atome d'hydrogène et un groupement alkyle",
            "Un groupe hydroxyle",
            "Deux atomes d'hydrogène",
            "Deux groupements alkyles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule générale R₁–CO–R₂ impose deux groupements alkyles, différents de H, de part et d'autre du carbonyle."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p01_q5",
          "type": "mcq",
          "prompt": "Le composé CH₃–CH₂–CHO est :",
          "options": [
            "Une cétone",
            "Un aldéhyde",
            "Un alcool",
            "Un acide carboxylique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le groupe –CHO est en bout de chaîne : c'est le propanal, un aldéhyde."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p01_q6",
          "type": "mcq",
          "prompt": "D'après la documentation du résumé, l'acétone est :",
          "options": [
            "Un aldéhyde utilisé comme solvant",
            "La propan-2-one, une cétone utilisée comme solvant",
            "Un alcool utilisé comme solvant",
            "Un acide carboxylique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'acétone est la propan-2-one (propanone), une cétone couramment employée comme solvant polaire aprotique."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l02_carbonyles_p02",
      "order": 2,
      "title": "Nomenclature des aldéhydes et des cétones",
      "summary": "Nommer un aldéhyde (suffixe « al ») et une cétone (suffixe « one », indice le plus faible).",
      "conceptExplanation": "On nomme un aldéhyde en remplaçant le « e » final du nom de l'alcane correspondant par le suffixe « al » ; le carbone fonctionnel est affecté de l'indice 1, sans qu'on ait besoin de l'écrire.\nOn nomme une cétone en remplaçant le « e » final par le suffixe « one », précédé de l'indice de position du carbone fonctionnel, qui reçoit l'indice le plus faible.\nExemples du résumé : éthanal, propanal, propanone (propan-2-one), butan-2-one.",
      "keyRule": "Aldéhyde : suffixe « al », carbone fonctionnel toujours n°1. Cétone : suffixe « one » avec l'indice le plus faible.",
      "formulas": [],
      "workedExample": {
        "title": "Nommer le composé (C) de l'activité d'application",
        "statement": "Nomme le composé (C) du résumé : CH₃–CH(CH₃)–CO–CH₃.",
        "methodSteps": [
          "Le groupe carbonyle est au milieu de la chaîne, entre deux groupements alkyles : c'est une cétone.",
          "La chaîne principale compte 4 carbones et le carbonyle est sur le carbone n°2 : le nom de base est butan-2-one.",
          "Un groupement méthyle est porté par le carbone n°3 : on ajoute le préfixe 3-méthyl."
        ],
        "conclusion": "Le composé (C) est la 3-méthylbutan-2-one, comme dans la correction du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Nommer un aldéhyde",
          "stepTheme": "Nommer un aldéhyde",
          "stepBadge": "Nommer un aldéhyde",
          "paragraphText": "Règle : on remplace le « e » final du nom de l'alcane correspondant par le suffixe « al ».\nLe carbone fonctionnel (celui du –CHO) est affecté de l'indice 1 : CH₃–CHO est l'éthanal, CH₃–CH₂–CHO le propanal.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p02_q1",
            "type": "mcq",
            "prompt": "Quel suffixe utilise-t-on pour nommer un aldéhyde ?",
            "options": [
              "Le suffixe « ol »",
              "Le suffixe « one »",
              "Le suffixe « al »",
              "Le suffixe « oïque »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un aldéhyde se nomme avec le suffixe « al » (éthanal, propanal) ; « ol » est pour les alcools, « one » pour les cétones, « oïque » pour les acides."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Nommer une cétone",
          "stepTheme": "Nommer une cétone",
          "stepBadge": "Nommer une cétone",
          "paragraphText": "Règle : on remplace le « e » final du nom de l'alcane correspondant par le suffixe « one », précédé de l'indice de position du carbone fonctionnel.\nLe carbone fonctionnel est affecté de l'indice le plus faible : CH₃–CO–CH₂–CH₃ est la butan-2-one.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p02_q2",
            "type": "mcq",
            "prompt": "Le composé CH₃–CO–CH₃ se nomme :",
            "options": [
              "Le propanal",
              "La propanone",
              "Le propanol",
              "L'acide propanoïque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une cétone à 3 carbones : la propanone (propan-2-one), aussi appelée acétone."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "L'indice 1 de l'aldéhyde ne s'écrit pas",
          "stepTheme": "L'indice 1 de l'aldéhyde ne s'écrit pas",
          "stepBadge": "L'indice 1 de l'aldéhyde ne s'écrit pas",
          "paragraphText": "Piège : chercher l'indice du carbonyle dans le nom d'un aldéhyde.\nLe carbone fonctionnel d'un aldéhyde est toujours le carbone n°1, puisqu'il est en bout de chaîne : aucun indice n'est nécessaire.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p02_q3",
            "type": "mcq",
            "prompt": "Dans le nom d'un aldéhyde, l'indice du carbone fonctionnel :",
            "options": [
              "Vaut toujours 1, car le carbonyle est en bout de chaîne",
              "Doit être le plus grand possible",
              "Vaut toujours 2",
              "Se choisit librement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le groupe –CHO termine la chaîne : son carbone est nécessairement le carbone n°1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le méthanal (activité d'application, composé A)",
          "stepTheme": "Le méthanal (activité d'application, composé A)",
          "stepBadge": "Le méthanal (activité d'application, composé A)",
          "paragraphText": "Le composé (A) de l'activité d'application est H–CHO, l'aldéhyde à un seul carbone.\nLa correction du résumé le nomme : méthanal.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p02_q4",
            "type": "mcq",
            "prompt": "Le composé H–CHO se nomme :",
            "options": [
              "L'éthanal",
              "Le méthanol",
              "Le méthanal",
              "L'acide méthanoïque"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un seul carbone et un groupe –CHO : c'est le méthanal, d'après la correction de l'activité d'application."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le 2-méthylpropanal (activité d'application, composé B)",
          "stepTheme": "Le 2-méthylpropanal (activité d'application, composé B)",
          "stepBadge": "Le 2-méthylpropanal (activité d'application, composé B)",
          "paragraphText": "Le composé (B) de l'activité d'application est (CH₃)₂CH–CHO : chaîne de 3 carbones portant le –CHO, avec un méthyle sur le carbone n°2.\nLa correction le nomme : 2-méthylpropanal.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p02_q5",
            "type": "mcq",
            "prompt": "Le composé (CH₃)₂CH–CHO se nomme :",
            "options": [
              "La butanone",
              "Le butanal",
              "Le 2-méthylpropanal",
              "Le 2-méthylpropanol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le –CHO est en bout d'une chaîne de 3 carbones ramifiée en position 2 : c'est le 2-méthylpropanal."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "L'indice le plus faible pour une cétone",
          "stepTheme": "L'indice le plus faible pour une cétone",
          "stepBadge": "L'indice le plus faible pour une cétone",
          "paragraphText": "Pour une cétone, on numérote la chaîne de façon que le carbone fonctionnel reçoive l'indice le plus faible.\nCH₃–CO–CH₂–CH₃ se nomme donc butan-2-one et non butan-3-one.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p02_q6",
            "type": "mcq",
            "prompt": "Le composé CH₃–CO–CH₂–CH₃ se nomme :",
            "options": [
              "La butan-3-one",
              "Le butanal",
              "La butan-2-one",
              "Le butan-2-ol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le carbonyle reçoit l'indice le plus faible, ici 2 : c'est la butan-2-one (butanone)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_carbonyles_p02_q1",
          "type": "mcq",
          "prompt": "Quel suffixe utilise-t-on pour nommer un aldéhyde ?",
          "options": [
            "Le suffixe « ol »",
            "Le suffixe « one »",
            "Le suffixe « al »",
            "Le suffixe « oïque »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un aldéhyde se nomme avec le suffixe « al » (éthanal, propanal) ; « ol » est pour les alcools, « one » pour les cétones, « oïque » pour les acides."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p02_q2",
          "type": "mcq",
          "prompt": "Le composé CH₃–CO–CH₃ se nomme :",
          "options": [
            "Le propanal",
            "La propanone",
            "Le propanol",
            "L'acide propanoïque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une cétone à 3 carbones : la propanone (propan-2-one), aussi appelée acétone."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p02_q3",
          "type": "mcq",
          "prompt": "Dans le nom d'un aldéhyde, l'indice du carbone fonctionnel :",
          "options": [
            "Vaut toujours 1, car le carbonyle est en bout de chaîne",
            "Doit être le plus grand possible",
            "Vaut toujours 2",
            "Se choisit librement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le groupe –CHO termine la chaîne : son carbone est nécessairement le carbone n°1."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p02_q4",
          "type": "mcq",
          "prompt": "Le composé H–CHO se nomme :",
          "options": [
            "L'éthanal",
            "Le méthanol",
            "Le méthanal",
            "L'acide méthanoïque"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un seul carbone et un groupe –CHO : c'est le méthanal, d'après la correction de l'activité d'application."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p02_q5",
          "type": "mcq",
          "prompt": "Le composé (CH₃)₂CH–CHO se nomme :",
          "options": [
            "La butanone",
            "Le butanal",
            "Le 2-méthylpropanal",
            "Le 2-méthylpropanol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le –CHO est en bout d'une chaîne de 3 carbones ramifiée en position 2 : c'est le 2-méthylpropanal."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p02_q6",
          "type": "mcq",
          "prompt": "Le composé CH₃–CO–CH₂–CH₃ se nomme :",
          "options": [
            "La butan-3-one",
            "Le butanal",
            "La butan-2-one",
            "Le butan-2-ol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le carbonyle reçoit l'indice le plus faible, ici 2 : c'est la butan-2-one (butanone)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l02_carbonyles_p03",
      "order": 3,
      "title": "Le test commun : la 2,4-DNPH",
      "summary": "Caractériser les composés carbonylés grâce au précipité jaune-orangé avec la 2,4-DNPH.",
      "conceptExplanation": "La 2,4-dinitrophénylhydrazine (2,4-DNPH) est le réactif commun de caractérisation des composés carbonylés.\nEn présence d'un composé carbonylé, aldéhyde ou cétone, elle donne un précipité jaune-orangé.\nCe test dit donc qu'un composé est carbonylé, mais il ne permet pas de distinguer un aldéhyde d'une cétone.",
      "keyRule": "2,4-DNPH → précipité jaune-orangé = composé carbonylé (aldéhyde ou cétone, sans distinction).",
      "formulas": [],
      "workedExample": {
        "title": "Le composé A de l'exercice 5",
        "statement": "Un composé A de formule $\\mathrm{C_4H_8O}$ réagit avec la 2,4-DNPH. Que peut-on conclure ?",
        "methodSteps": [
          "La réaction avec la 2,4-DNPH caractérise le groupe carbonyle.",
          "Le composé A possède donc un groupe carbonyle : c'est un composé carbonylé.",
          "Pour savoir si c'est un aldéhyde ou une cétone, il faudra un autre test, par exemple la liqueur de Fehling."
        ],
        "conclusion": "A est un composé carbonylé ; le test à la DNPH ne dit pas encore si c'est un aldéhyde ou une cétone."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le réactif : la 2,4-DNPH",
          "stepTheme": "Le réactif : la 2,4-DNPH",
          "stepBadge": "Le réactif : la 2,4-DNPH",
          "paragraphText": "• 2,4-DNPH : 2,4-dinitrophénylhydrazine, le réactif du test commun aux composés carbonylés.\nC'est la propriété commune des aldéhydes et des cétones présentée dans le résumé.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p03_q1",
            "type": "mcq",
            "prompt": "Quel réactif permet de caractériser l'ensemble des composés carbonylés ?",
            "options": [
              "La liqueur de Fehling",
              "Le réactif de Schiff",
              "La 2,4-dinitrophénylhydrazine",
              "Le réactif de Tollens"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La 2,4-DNPH est le test commun aux aldéhydes et aux cétones ; Fehling, Tollens et Schiff ne réagissent qu'avec les aldéhydes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le précipité jaune-orangé",
          "stepTheme": "Le précipité jaune-orangé",
          "stepBadge": "Le précipité jaune-orangé",
          "paragraphText": "En présence d'un composé carbonylé, la 2,4-DNPH donne un précipité jaune-orangé.\nL'apparition de ce précipité est la signature expérimentale du groupe carbonyle.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p03_q2",
            "type": "mcq",
            "prompt": "En présence d'un composé carbonylé, la 2,4-DNPH donne :",
            "options": [
              "Un précipité jaune-orangé",
              "Un miroir d'argent",
              "Un précipité rouge brique",
              "Une coloration rose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le précipité jaune-orangé est le résultat du test à la DNPH ; le miroir d'argent vient de Tollens, le précipité rouge brique de Fehling et la coloration rose de Schiff."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le test est positif pour les aldéhydes et les cétones",
          "stepTheme": "Le test est positif pour les aldéhydes et les cétones",
          "stepBadge": "Le test est positif pour les aldéhydes et les cétones",
          "paragraphText": "D'après le tableau de l'activité d'application du résumé, aldéhyde et cétone donnent tous deux le précipité jaune-orangé avec la 2,4-DNPH.\nC'est pour cela qu'on parle de test commun.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p03_q3",
            "type": "mcq",
            "prompt": "Avec la 2,4-DNPH, on observe un précipité jaune-orangé pour :",
            "options": [
              "Les aldéhydes uniquement",
              "Les cétones uniquement",
              "Les aldéhydes et les cétones",
              "Les alcools uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le test est commun aux deux familles de composés carbonylés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "La DNPH ne distingue pas aldéhyde et cétone",
          "stepTheme": "La DNPH ne distingue pas aldéhyde et cétone",
          "stepBadge": "La DNPH ne distingue pas aldéhyde et cétone",
          "paragraphText": "Piège : conclure « c'est un aldéhyde » après un test positif à la DNPH.\nLe test prouve seulement la présence du groupe carbonyle ; il faut un test différenciant (Fehling, Tollens ou Schiff) pour aller plus loin.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p03_q4",
            "type": "mcq",
            "prompt": "Un composé donne un précipité jaune-orangé avec la 2,4-DNPH. On peut affirmer que ce composé est :",
            "options": [
              "Un aldéhyde",
              "Une cétone",
              "Un composé carbonylé, sans pouvoir préciser davantage",
              "Un alcool"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le test commun caractérise le groupe carbonyle, présent dans les aldéhydes comme dans les cétones."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Classer des composés (exercice 1)",
          "stepTheme": "Classer des composés (exercice 1)",
          "stepBadge": "Classer des composés (exercice 1)",
          "paragraphText": "Dans l'exercice 1 du résumé, on classe : butanal, CH₃–CH₂–CH₂–OH, CH₃–CH₂–CHO, CH₃–CH₂–COOH, butanone et CH₃–CO–CH₃.\nLa solution retient comme composés carbonylés : le butanal, CH₃–CH₂–CHO, la butanone et CH₃–CO–CH₃.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p03_q5",
            "type": "mcq",
            "prompt": "Parmi les composés suivants, lequel n'est pas un composé carbonylé ?",
            "options": [
              "Le butanal",
              "La butanone",
              "CH₃–CH₂–CHO",
              "CH₃–CH₂–COOH"
            ],
            "correctAnswerIndex": 3,
            "explanation": "CH₃–CH₂–COOH est un acide carboxylique (groupe –COOH) ; les trois autres possèdent le groupe carbonyle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La stratégie de caractérisation",
          "stepTheme": "La stratégie de caractérisation",
          "stepBadge": "La stratégie de caractérisation",
          "paragraphText": "Méthode : on commence par le test à la 2,4-DNPH pour établir que le composé est carbonylé.\nEnsuite seulement, on cherche à distinguer aldéhyde et cétone avec les tests différenciants.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p03_q6",
            "type": "mcq",
            "prompt": "Pour caractériser un composé oxygéné inconnu, le premier test à réaliser est :",
            "options": [
              "Le test à la 2,4-DNPH, qui révèle le groupe carbonyle",
              "Le test de Schiff, qui révèle les cétones",
              "La combustion complète",
              "Le test au sodium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le test commun à la DNPH établit d'abord la présence du groupe carbonyle ; les autres tests servent ensuite à différencier."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_carbonyles_p03_q1",
          "type": "mcq",
          "prompt": "Quel réactif permet de caractériser l'ensemble des composés carbonylés ?",
          "options": [
            "La liqueur de Fehling",
            "Le réactif de Schiff",
            "La 2,4-dinitrophénylhydrazine",
            "Le réactif de Tollens"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La 2,4-DNPH est le test commun aux aldéhydes et aux cétones ; Fehling, Tollens et Schiff ne réagissent qu'avec les aldéhydes."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p03_q2",
          "type": "mcq",
          "prompt": "En présence d'un composé carbonylé, la 2,4-DNPH donne :",
          "options": [
            "Un précipité jaune-orangé",
            "Un miroir d'argent",
            "Un précipité rouge brique",
            "Une coloration rose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le précipité jaune-orangé est le résultat du test à la DNPH ; le miroir d'argent vient de Tollens, le précipité rouge brique de Fehling et la coloration rose de Schiff."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p03_q3",
          "type": "mcq",
          "prompt": "Avec la 2,4-DNPH, on observe un précipité jaune-orangé pour :",
          "options": [
            "Les aldéhydes uniquement",
            "Les cétones uniquement",
            "Les aldéhydes et les cétones",
            "Les alcools uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le test est commun aux deux familles de composés carbonylés."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p03_q4",
          "type": "mcq",
          "prompt": "Un composé donne un précipité jaune-orangé avec la 2,4-DNPH. On peut affirmer que ce composé est :",
          "options": [
            "Un aldéhyde",
            "Une cétone",
            "Un composé carbonylé, sans pouvoir préciser davantage",
            "Un alcool"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le test commun caractérise le groupe carbonyle, présent dans les aldéhydes comme dans les cétones."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p03_q5",
          "type": "mcq",
          "prompt": "Parmi les composés suivants, lequel n'est pas un composé carbonylé ?",
          "options": [
            "Le butanal",
            "La butanone",
            "CH₃–CH₂–CHO",
            "CH₃–CH₂–COOH"
          ],
          "correctAnswerIndex": 3,
          "explanation": "CH₃–CH₂–COOH est un acide carboxylique (groupe –COOH) ; les trois autres possèdent le groupe carbonyle."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p03_q6",
          "type": "mcq",
          "prompt": "Pour caractériser un composé oxygéné inconnu, le premier test à réaliser est :",
          "options": [
            "Le test à la 2,4-DNPH, qui révèle le groupe carbonyle",
            "Le test de Schiff, qui révèle les cétones",
            "La combustion complète",
            "Le test au sodium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le test commun à la DNPH établit d'abord la présence du groupe carbonyle ; les autres tests servent ensuite à différencier."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l02_carbonyles_p04",
      "order": 4,
      "title": "Distinguer les aldéhydes des cétones",
      "summary": "Schiff, Tollens et Fehling : trois tests positifs pour les seuls aldéhydes, qui sont réducteurs.",
      "conceptExplanation": "Trois tests distinguent les aldéhydes des cétones.\nAvec le réactif de Schiff (incolore), un aldéhyde donne une coloration rose ; une cétone ne donne rien.\nAvec le réactif de Tollens, l'aldéhyde est oxydé en ion carboxylate et l'ion diammine argent est réduit en argent métallique : c'est le miroir d'argent.\nAvec la liqueur de Fehling, l'aldéhyde réduit les ions cuivre II en oxyde de cuivre I : on observe un précipité rouge brique.\nConclusion du résumé : les aldéhydes sont des réducteurs, ce qui n'est pas le cas des cétones.",
      "keyRule": "Schiff rose, Tollens miroir d'argent, Fehling précipité rouge brique : les trois tests ne sont positifs qu'avec les aldéhydes.",
      "formulas": [],
      "workedExample": {
        "title": "Le tableau des tests (activité d'application)",
        "statement": "Complète : que donnent un aldéhyde et une cétone avec chacun des quatre réactifs du résumé ?",
        "methodSteps": [
          "2,4-DNPH : précipité jaune-orangé pour l'aldéhyde comme pour la cétone.",
          "Liqueur de Fehling : précipité rouge brique pour l'aldéhyde, rien pour la cétone.",
          "Réactif de Tollens : miroir d'argent pour l'aldéhyde, rien pour la cétone.",
          "Réactif de Schiff : coloration rose pour l'aldéhyde, rien pour la cétone."
        ],
        "conclusion": "Seul le test à la DNPH est commun ; les trois autres distinguent les aldéhydes des cétones."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le réactif de Schiff",
          "stepTheme": "Le réactif de Schiff",
          "stepBadge": "Le réactif de Schiff",
          "paragraphText": "En présence d'un aldéhyde, le réactif de Schiff, qui est incolore, vire au rose.\nEn présence d'une cétone, il ne se passe rien.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p04_q1",
            "type": "mcq",
            "prompt": "En présence d'un aldéhyde, le réactif de Schiff :",
            "options": [
              "Donne un précipité jaune-orangé",
              "Vire au rose",
              "Donne un miroir d'argent",
              "Reste incolore"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le virage au rose du réactif de Schiff est caractéristique des aldéhydes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le réactif de Tollens : le miroir d'argent",
          "stepTheme": "Le réactif de Tollens : le miroir d'argent",
          "stepBadge": "Le réactif de Tollens : le miroir d'argent",
          "paragraphText": "Les aldéhydes réduisent le réactif de Tollens : en milieu basique, l'aldéhyde est oxydé en ion carboxylate et l'ion diammine argent [Ag(NH₃)₂]⁺ est réduit en argent métallique.\nL'argent se dépose sur les parois du tube : c'est le miroir d'argent.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p04_q2",
            "type": "mcq",
            "prompt": "Le test de Tollens positif se reconnaît à :",
            "options": [
              "Un précipité rouge brique",
              "Une coloration rose",
              "Un miroir d'argent",
              "Un dégagement gazeux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'ion diammine argent est réduit en argent métallique, qui forme un miroir sur les parois du tube."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La liqueur de Fehling : le précipité rouge brique",
          "stepTheme": "La liqueur de Fehling : le précipité rouge brique",
          "stepBadge": "La liqueur de Fehling : le précipité rouge brique",
          "paragraphText": "Les aldéhydes réduisent la liqueur de Fehling : les ions cuivre II sont réduits en oxyde de cuivre I (Cu₂O) et l'aldéhyde est oxydé en ion carboxylate.\nOn observe un précipité rouge brique.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p04_q3",
            "type": "mcq",
            "prompt": "Avec la liqueur de Fehling, un aldéhyde donne :",
            "options": [
              "Un précipité rouge brique d'oxyde de cuivre I",
              "Un miroir d'argent",
              "Un précipité jaune-orangé",
              "Une coloration rose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les ions Cu²⁺ sont réduits en Cu₂O, l'oxyde de cuivre I, précipité rouge brique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Les cétones ne réduisent ni Fehling, ni Tollens, ni Schiff",
          "stepTheme": "Les cétones ne réduisent ni Fehling, ni Tollens, ni Schiff",
          "stepBadge": "Les cétones ne réduisent ni Fehling, ni Tollens, ni Schiff",
          "paragraphText": "Piège : croire qu'une cétone, elle aussi carbonylée, réduit la liqueur de Fehling ou le réactif de Tollens.\nL'exercice 2 du résumé le confirme : ces affirmations sont fausses ; avec une cétone, les trois tests différenciants ne donnent rien.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p04_q4",
            "type": "mcq",
            "prompt": "Une cétone réduit-elle la liqueur de Fehling ?",
            "options": [
              "Oui, en donnant un précipité rouge brique",
              "Oui, en donnant un miroir d'argent",
              "Oui, en virant au rose",
              "Non, les cétones ne sont pas réductrices"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Conclusion du résumé : les aldéhydes sont des réducteurs, ce qui n'est pas le cas des cétones."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les aldéhydes sont des réducteurs",
          "stepTheme": "Les aldéhydes sont des réducteurs",
          "stepBadge": "Les aldéhydes sont des réducteurs",
          "paragraphText": "• Réducteur : espèce chimique qui cède des électrons et réduit une autre espèce en s'oxydant.\nDans les tests de Tollens et de Fehling, l'aldéhyde s'oxyde en ion carboxylate pendant que l'ion argent ou l'ion cuivre II est réduit.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p04_q5",
            "type": "mcq",
            "prompt": "Dans le test de Tollens, l'aldéhyde joue le rôle :",
            "options": [
              "D'oxydant : il capte les électrons",
              "De réducteur : il cède des électrons et s'oxyde en ion carboxylate",
              "De catalyseur",
              "D'indicateur coloré"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'aldéhyde est oxydé en ion carboxylate et réduit l'ion diammine argent en argent métallique : c'est un réducteur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le composé C₂H₄O de l'exercice 3",
          "stepTheme": "Le composé C₂H₄O de l'exercice 3",
          "stepBadge": "Le composé C₂H₄O de l'exercice 3",
          "paragraphText": "L'exercice 3 du résumé étudie un composé carbonylé A de formule $\\mathrm{C_2H_4O}$.\nLa solution établit que A est l'éthanal, qui donne avec le réactif de Tollens un miroir d'argent.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p04_q6",
            "type": "mcq",
            "prompt": "Le seul composé carbonylé de formule $\\mathrm{C_2H_4O}$ est l'éthanal. Avec le réactif de Tollens, on observe :",
            "options": [
              "Rien du tout",
              "Un précipité rouge brique",
              "Un miroir d'argent",
              "Une coloration rose"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'éthanal est un aldéhyde : il réduit le réactif de Tollens et donne un miroir d'argent (solution de l'exercice 3)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_carbonyles_p04_q1",
          "type": "mcq",
          "prompt": "En présence d'un aldéhyde, le réactif de Schiff :",
          "options": [
            "Donne un précipité jaune-orangé",
            "Vire au rose",
            "Donne un miroir d'argent",
            "Reste incolore"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le virage au rose du réactif de Schiff est caractéristique des aldéhydes."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p04_q2",
          "type": "mcq",
          "prompt": "Le test de Tollens positif se reconnaît à :",
          "options": [
            "Un précipité rouge brique",
            "Une coloration rose",
            "Un miroir d'argent",
            "Un dégagement gazeux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'ion diammine argent est réduit en argent métallique, qui forme un miroir sur les parois du tube."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p04_q3",
          "type": "mcq",
          "prompt": "Avec la liqueur de Fehling, un aldéhyde donne :",
          "options": [
            "Un précipité rouge brique d'oxyde de cuivre I",
            "Un miroir d'argent",
            "Un précipité jaune-orangé",
            "Une coloration rose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions Cu²⁺ sont réduits en Cu₂O, l'oxyde de cuivre I, précipité rouge brique."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p04_q4",
          "type": "mcq",
          "prompt": "Une cétone réduit-elle la liqueur de Fehling ?",
          "options": [
            "Oui, en donnant un précipité rouge brique",
            "Oui, en donnant un miroir d'argent",
            "Oui, en virant au rose",
            "Non, les cétones ne sont pas réductrices"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Conclusion du résumé : les aldéhydes sont des réducteurs, ce qui n'est pas le cas des cétones."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p04_q5",
          "type": "mcq",
          "prompt": "Dans le test de Tollens, l'aldéhyde joue le rôle :",
          "options": [
            "D'oxydant : il capte les électrons",
            "De réducteur : il cède des électrons et s'oxyde en ion carboxylate",
            "De catalyseur",
            "D'indicateur coloré"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'aldéhyde est oxydé en ion carboxylate et réduit l'ion diammine argent en argent métallique : c'est un réducteur."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p04_q6",
          "type": "mcq",
          "prompt": "Le seul composé carbonylé de formule $\\mathrm{C_2H_4O}$ est l'éthanal. Avec le réactif de Tollens, on observe :",
          "options": [
            "Rien du tout",
            "Un précipité rouge brique",
            "Un miroir d'argent",
            "Une coloration rose"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'éthanal est un aldéhyde : il réduit le réactif de Tollens et donne un miroir d'argent (solution de l'exercice 3)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l02_carbonyles_p05",
      "order": 5,
      "title": "Les équations d'oxydoréduction des aldéhydes",
      "summary": "Écrire les demi-équations et les équations-bilans des réactions avec Tollens et Fehling.",
      "conceptExplanation": "Les réactions des aldéhydes avec les réactifs de Tollens et de Fehling sont des oxydoréductions en milieu basique.\nDans les deux cas, la demi-équation d'oxydation est la même : l'aldéhyde R–CHO est oxydé en ion carboxylate R–COO⁻ en cédant 2 électrons.\nAvec Tollens, l'ion diammine argent est réduit en argent métallique ; avec Fehling, les ions cuivre II sont réduits en oxyde de cuivre I.",
      "keyRule": "Même demi-équation d'oxydation pour l'aldéhyde ; seule la demi-équation de réduction change (Ag avec Tollens, Cu₂O avec Fehling).",
      "formulas": [
        {
          "name": "Oxydation de l'aldéhyde (demi-équation)",
          "formula": "\\mathrm{R-CHO + 3\\,OH^- \\longrightarrow R-COO^- + 2\\,H_2O + 2\\,e^-}",
          "note": "L'aldéhyde est oxydé en ion carboxylate."
        },
        {
          "name": "Réaction avec le réactif de Tollens (bilan)",
          "formula": "\\mathrm{R-CHO + 2\\,[Ag(NH_3)_2]^+ + 3\\,OH^- \\longrightarrow 2\\,Ag + R-COO^- + 4\\,NH_3 + 2\\,H_2O}",
          "note": "L'argent métallique forme le miroir d'argent."
        },
        {
          "name": "Réaction avec la liqueur de Fehling (bilan)",
          "formula": "\\mathrm{R-CHO + 2\\,Cu^{2+} + 5\\,OH^- \\longrightarrow Cu_2O + R-COO^- + 3\\,H_2O}",
          "note": "Cu₂O est le précipité rouge brique."
        }
      ],
      "workedExample": {
        "title": "Équation-bilan de l'éthanal avec la liqueur de Fehling (exercice 3)",
        "statement": "Écris l'équation-bilan de la réaction de l'éthanal CH₃–CHO avec la liqueur de Fehling.",
        "methodSteps": [
          "Demi-équation d'oxydation : CH₃–CHO + 3 OH⁻ → CH₃–COO⁻ + 2 H₂O + 2 e⁻.",
          "Demi-équation de réduction : 2 Cu²⁺ + 2 OH⁻ + 2 e⁻ → Cu₂O + H₂O.",
          "On additionne les deux demi-équations en éliminant les électrons."
        ],
        "conclusion": "On obtient : CH₃–CHO + 2 Cu²⁺ + 5 OH⁻ → Cu₂O + CH₃–COO⁻ + 3 H₂O, comme dans la solution de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La demi-équation d'oxydation de l'aldéhyde",
          "stepTheme": "La demi-équation d'oxydation de l'aldéhyde",
          "stepBadge": "La demi-équation d'oxydation de l'aldéhyde",
          "paragraphText": "En milieu basique, l'aldéhyde est oxydé en ion carboxylate : $\\mathrm{R-CHO + 3\\,OH^- \\longrightarrow R-COO^- + 2\\,H_2O + 2\\,e^-}$.\nCette demi-équation est commune aux réactions avec Tollens et avec Fehling.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p05_q1",
            "type": "mcq",
            "prompt": "Dans les tests de Tollens et de Fehling, l'aldéhyde est oxydé en :",
            "options": [
              "Ion carboxylate",
              "Dioxyde de carbone",
              "Alcool primaire",
              "Cétone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La demi-équation d'oxydation transforme R–CHO en ion carboxylate R–COO⁻."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La demi-équation de réduction de Tollens",
          "stepTheme": "La demi-équation de réduction de Tollens",
          "stepBadge": "La demi-équation de réduction de Tollens",
          "paragraphText": "L'ion diammine argent du réactif de Tollens est réduit en argent métallique : $\\mathrm{[Ag(NH_3)_2]^+ + e^- \\longrightarrow Ag + 2\\,NH_3}$.\nComme l'aldéhyde cède 2 électrons, cette demi-équation est multipliée par 2 dans le bilan.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p05_q2",
            "type": "mcq",
            "prompt": "Dans le réactif de Tollens, l'espèce réduite en argent métallique est :",
            "options": [
              "L'ion argent libre Ag⁺",
              "L'ion diammine argent [Ag(NH₃)₂]⁺",
              "L'ion hydroxyde OH⁻",
              "L'ammoniac NH₃"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé précise que c'est l'ion diammine argent I, présent dans le réactif de Tollens, qui est réduit en argent métallique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La demi-équation de réduction de Fehling",
          "stepTheme": "La demi-équation de réduction de Fehling",
          "stepBadge": "La demi-équation de réduction de Fehling",
          "paragraphText": "Dans la liqueur de Fehling, les ions cuivre II sont réduits en oxyde de cuivre I : $\\mathrm{2\\,Cu^{2+} + 2\\,OH^- + 2\\,e^- \\longrightarrow Cu_2O + H_2O}$.\nCu₂O est le précipité rouge brique observé.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p05_q3",
            "type": "mcq",
            "prompt": "Dans la liqueur de Fehling, les ions cuivre II sont réduits en :",
            "options": [
              "Cuivre métallique",
              "Oxyde de cuivre II",
              "Oxyde de cuivre I, Cu₂O",
              "Ion cuivre I libre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le produit de la réduction est l'oxyde de cuivre I, Cu₂O, précipité rouge brique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Construire l'équation-bilan",
          "stepTheme": "Construire l'équation-bilan",
          "stepBadge": "Construire l'équation-bilan",
          "paragraphText": "Méthode : écrire la demi-équation d'oxydation et la demi-équation de réduction, égaliser le nombre d'électrons échangés, puis additionner.\nPour Tollens comme pour Fehling, l'aldéhyde cède 2 électrons : les coefficients du bilan en découlent.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p05_q4",
            "type": "mcq",
            "prompt": "Combien d'électrons un aldéhyde cède-t-il lors de son oxydation en ion carboxylate ?",
            "options": [
              "1 électron",
              "4 électrons",
              "3 électrons",
              "2 électrons"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La demi-équation d'oxydation du résumé fait apparaître 2 e⁻ : l'aldéhyde cède 2 électrons."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le milieu basique est indispensable",
          "stepTheme": "Le milieu basique est indispensable",
          "stepBadge": "Le milieu basique est indispensable",
          "paragraphText": "Piège : écrire ces équations en milieu acide.\nLes réactions de Tollens et de Fehling se déroulent en milieu basique : les ions OH⁻ figurent dans les demi-équations et dans les bilans.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p05_q5",
            "type": "mcq",
            "prompt": "Les réactions d'un aldéhyde avec les réactifs de Tollens et de Fehling ont lieu :",
            "options": [
              "En milieu basique",
              "En milieu acide",
              "En milieu neutre uniquement",
              "En présence d'alumine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé précise « en milieu basique » pour les deux réactions, et les ions OH⁻ apparaissent dans les équations."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le bilan avec Tollens",
          "stepTheme": "Le bilan avec Tollens",
          "stepBadge": "Le bilan avec Tollens",
          "paragraphText": "En additionnant les demi-équations, le résumé obtient le bilan : $\\mathrm{R-CHO + 2\\,[Ag(NH_3)_2]^+ + 3\\,OH^- \\longrightarrow 2\\,Ag + R-COO^- + 4\\,NH_3 + 2\\,H_2O}$.\nDeux atomes d'argent se déposent pour un aldéhyde oxydé.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p05_q6",
            "type": "mcq",
            "prompt": "Dans l'équation-bilan de la réaction d'un aldéhyde avec le réactif de Tollens, le coefficient de l'argent métallique formé est :",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'aldéhyde cède 2 électrons, et chaque ion diammine argent n'en capte qu'un : il se forme 2 atomes d'argent."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_carbonyles_p05_q1",
          "type": "mcq",
          "prompt": "Dans les tests de Tollens et de Fehling, l'aldéhyde est oxydé en :",
          "options": [
            "Ion carboxylate",
            "Dioxyde de carbone",
            "Alcool primaire",
            "Cétone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La demi-équation d'oxydation transforme R–CHO en ion carboxylate R–COO⁻."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p05_q2",
          "type": "mcq",
          "prompt": "Dans le réactif de Tollens, l'espèce réduite en argent métallique est :",
          "options": [
            "L'ion argent libre Ag⁺",
            "L'ion diammine argent [Ag(NH₃)₂]⁺",
            "L'ion hydroxyde OH⁻",
            "L'ammoniac NH₃"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé précise que c'est l'ion diammine argent I, présent dans le réactif de Tollens, qui est réduit en argent métallique."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p05_q3",
          "type": "mcq",
          "prompt": "Dans la liqueur de Fehling, les ions cuivre II sont réduits en :",
          "options": [
            "Cuivre métallique",
            "Oxyde de cuivre II",
            "Oxyde de cuivre I, Cu₂O",
            "Ion cuivre I libre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le produit de la réduction est l'oxyde de cuivre I, Cu₂O, précipité rouge brique."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p05_q4",
          "type": "mcq",
          "prompt": "Combien d'électrons un aldéhyde cède-t-il lors de son oxydation en ion carboxylate ?",
          "options": [
            "1 électron",
            "4 électrons",
            "3 électrons",
            "2 électrons"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La demi-équation d'oxydation du résumé fait apparaître 2 e⁻ : l'aldéhyde cède 2 électrons."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p05_q5",
          "type": "mcq",
          "prompt": "Les réactions d'un aldéhyde avec les réactifs de Tollens et de Fehling ont lieu :",
          "options": [
            "En milieu basique",
            "En milieu acide",
            "En milieu neutre uniquement",
            "En présence d'alumine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé précise « en milieu basique » pour les deux réactions, et les ions OH⁻ apparaissent dans les équations."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p05_q6",
          "type": "mcq",
          "prompt": "Dans l'équation-bilan de la réaction d'un aldéhyde avec le réactif de Tollens, le coefficient de l'argent métallique formé est :",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'aldéhyde cède 2 électrons, et chaque ion diammine argent n'en capte qu'un : il se forme 2 atomes d'argent."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l02_carbonyles_p06",
      "order": 6,
      "title": "Identifier un composé carbonylé inconnu",
      "summary": "Combiner analyse élémentaire et tests pour déterminer la nature d'un composé carbonylé.",
      "conceptExplanation": "La démarche de la situation d'évaluation combine plusieurs informations.\nL'analyse élémentaire (masse molaire, pourcentages, nombre d'atomes d'oxygène) donne la formule brute, de la forme $\\mathrm{C_nH_{2n}O}$ pour un composé carbonylé.\nLe test à la 2,4-DNPH confirme le groupe carbonyle ; un test de Fehling positif désigne un aldéhyde, un test négatif une cétone.\nLa connaissance de la chaîne (linéaire ou ramifiée) permet enfin de nommer le composé.",
      "keyRule": "Formule brute par l'analyse, famille par la DNPH, aldéhyde ou cétone par Fehling, nom par la structure de la chaîne.",
      "formulas": [
        {
          "name": "Masse molaire d'un composé carbonylé",
          "formula": "M = 14n + 16",
          "note": "M en g/mol, n = nombre d'atomes de carbone."
        }
      ],
      "workedExample": {
        "title": "Le composé A de la situation d'évaluation",
        "statement": "Un composé A a une masse molaire de 72 g/mol, contient 66,7 % de carbone et un seul atome d'oxygène. Il donne un précipité jaune-orangé avec la 2,4-DNPH, un test positif avec la liqueur de Fehling, et sa chaîne est linéaire. Identifie A.",
        "methodSteps": [
          "Le test à la DNPH montre que A est un composé carbonylé ; sa formule est donc de la forme $\\mathrm{C_nH_{2n}O}$.",
          "La masse molaire donne $14n + 16 = 72$, soit $n = 4$ : la formule brute est $\\mathrm{C_4H_8O}$ (le pourcentage de carbone, 66,7 %, le confirme).",
          "Le test de Fehling est positif : A est un aldéhyde.",
          "Sa chaîne est linéaire : A est le butanal, CH₃–CH₂–CH₂–CHO."
        ],
        "conclusion": "A est le butanal ; avec la liqueur de Fehling, on observe un précipité rouge brique de Cu₂O."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Trouver la formule brute par la masse molaire",
          "stepTheme": "Trouver la formule brute par la masse molaire",
          "stepBadge": "Trouver la formule brute par la masse molaire",
          "paragraphText": "Pour un composé carbonylé $\\mathrm{C_nH_{2n}O}$, la masse molaire vaut $M = 14n + 16$.\nConnaître M permet donc de calculer n et d'écrire la formule brute.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p06_q1",
            "type": "mcq",
            "prompt": "Un composé carbonylé a une masse molaire de $72\\ \\mathrm{g/mol}$. Sa formule brute est :",
            "options": [
              "$\\mathrm{C_3H_6O}$",
              "$\\mathrm{C_4H_8O}$",
              "$\\mathrm{C_5H_{10}O}$",
              "$\\mathrm{C_4H_8O_2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On résout $14n + 16 = 72$, soit $n = 4$ : la formule brute est $\\mathrm{C_4H_8O}$, comme dans la situation d'évaluation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Confirmer avec le pourcentage de carbone",
          "stepTheme": "Confirmer avec le pourcentage de carbone",
          "stepBadge": "Confirmer avec le pourcentage de carbone",
          "paragraphText": "Dans la situation d'évaluation, le composé contient 66,7 % de carbone en masse.\nCe pourcentage, combiné à la masse molaire 72 g/mol, correspond à 4 atomes de carbone par molécule.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p06_q2",
            "type": "mcq",
            "prompt": "Le composé A de la situation d'évaluation (M = 72 g/mol ; 66,7 % de carbone ; un seul atome d'oxygène) contient :",
            "options": [
              "3 atomes de carbone et 6 d'hydrogène",
              "5 atomes de carbone et 10 d'hydrogène",
              "4 atomes de carbone et 8 d'hydrogène",
              "4 atomes de carbone et 10 d'hydrogène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La résolution du résumé donne x = 4 carbones et y = 8 hydrogènes : la formule brute est $\\mathrm{C_4H_8O}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Fehling positif : un aldéhyde",
          "stepTheme": "Fehling positif : un aldéhyde",
          "stepBadge": "Fehling positif : un aldéhyde",
          "paragraphText": "Une fois la famille carbonylée établie par la DNPH, le test de Fehling tranche : positif pour un aldéhyde, négatif pour une cétone.\nDans la situation d'évaluation, le test est positif : A est un aldéhyde.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p06_q3",
            "type": "mcq",
            "prompt": "Un composé carbonylé donne un test positif avec la liqueur de Fehling. C'est donc :",
            "options": [
              "Un aldéhyde",
              "Une cétone",
              "Un alcool",
              "Un acide carboxylique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seuls les aldéhydes réduisent la liqueur de Fehling."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Fehling négatif : une cétone (exercice 5)",
          "stepTheme": "Fehling négatif : une cétone (exercice 5)",
          "stepBadge": "Fehling négatif : une cétone (exercice 5)",
          "paragraphText": "Dans l'exercice 5 du résumé, le composé A ($\\mathrm{C_4H_8O}$) réagit avec la 2,4-DNPH mais donne un test négatif avec la liqueur de Fehling.\nLa solution conclut que A est une cétone : la butanone, CH₃–CO–CH₂–CH₃.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p06_q4",
            "type": "mcq",
            "prompt": "Un composé réagit avec la 2,4-DNPH mais pas avec la liqueur de Fehling. C'est :",
            "options": [
              "Un aldéhyde",
              "Un alcool primaire",
              "Un acide carboxylique",
              "Une cétone"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Carbonylé (DNPH positif) mais non réducteur (Fehling négatif) : c'est une cétone."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La combustion donne la formule, pas la fonction",
          "stepTheme": "La combustion donne la formule, pas la fonction",
          "stepBadge": "La combustion donne la formule, pas la fonction",
          "paragraphText": "Piège : dans l'exercice 5, la combustion d'une mole de A fournit 4 moles de CO₂ et 4 moles d'eau, ce qui donne la formule $\\mathrm{C_4H_8O}$.\nMais cette formule convient à un aldéhyde (butanal) comme à une cétone (butanone) : seuls les tests tranchent.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p06_q5",
            "type": "mcq",
            "prompt": "La combustion complète d'un composé donne sa formule brute $\\mathrm{C_4H_8O}$. Pour savoir si c'est un aldéhyde ou une cétone, il faut :",
            "options": [
              "Refaire une combustion",
              "Réaliser un test différenciant comme la liqueur de Fehling",
              "Mesurer sa masse volumique",
              "Regarder sa couleur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Aldéhydes et cétones isomères ont la même formule brute ; un test comme Fehling (ou Tollens, ou Schiff) permet de les distinguer."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le produit B de l'exercice 4",
          "stepTheme": "Le produit B de l'exercice 4",
          "stepBadge": "Le produit B de l'exercice 4",
          "paragraphText": "Dans l'exercice 4 du résumé, un alcool saturé A ($\\mathrm{C_3H_8O}$) est oxydé en un composé B qui réagit avec la 2,4-DNPH et possède des propriétés réductrices.\nLa solution conclut que B est un aldéhyde, le propanal, et donc que A est le propan-1-ol.",
          "exercise": {
            "id": "terminale_c_chimie_l02_carbonyles_p06_q6",
            "type": "mcq",
            "prompt": "Un composé réagit avec la 2,4-DNPH et possède des propriétés réductrices. C'est :",
            "options": [
              "Une cétone",
              "Un aldéhyde",
              "Un éther-oxyde",
              "Un alcool tertiaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Être carbonylé (DNPH) et réducteur est la signature d'un aldéhyde ; les cétones ne sont pas réductrices."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_carbonyles_p06_q1",
          "type": "mcq",
          "prompt": "Un composé carbonylé a une masse molaire de $72\\ \\mathrm{g/mol}$. Sa formule brute est :",
          "options": [
            "$\\mathrm{C_3H_6O}$",
            "$\\mathrm{C_4H_8O}$",
            "$\\mathrm{C_5H_{10}O}$",
            "$\\mathrm{C_4H_8O_2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On résout $14n + 16 = 72$, soit $n = 4$ : la formule brute est $\\mathrm{C_4H_8O}$, comme dans la situation d'évaluation."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p06_q2",
          "type": "mcq",
          "prompt": "Le composé A de la situation d'évaluation (M = 72 g/mol ; 66,7 % de carbone ; un seul atome d'oxygène) contient :",
          "options": [
            "3 atomes de carbone et 6 d'hydrogène",
            "5 atomes de carbone et 10 d'hydrogène",
            "4 atomes de carbone et 8 d'hydrogène",
            "4 atomes de carbone et 10 d'hydrogène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La résolution du résumé donne x = 4 carbones et y = 8 hydrogènes : la formule brute est $\\mathrm{C_4H_8O}$."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p06_q3",
          "type": "mcq",
          "prompt": "Un composé carbonylé donne un test positif avec la liqueur de Fehling. C'est donc :",
          "options": [
            "Un aldéhyde",
            "Une cétone",
            "Un alcool",
            "Un acide carboxylique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seuls les aldéhydes réduisent la liqueur de Fehling."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p06_q4",
          "type": "mcq",
          "prompt": "Un composé réagit avec la 2,4-DNPH mais pas avec la liqueur de Fehling. C'est :",
          "options": [
            "Un aldéhyde",
            "Un alcool primaire",
            "Un acide carboxylique",
            "Une cétone"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Carbonylé (DNPH positif) mais non réducteur (Fehling négatif) : c'est une cétone."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p06_q5",
          "type": "mcq",
          "prompt": "La combustion complète d'un composé donne sa formule brute $\\mathrm{C_4H_8O}$. Pour savoir si c'est un aldéhyde ou une cétone, il faut :",
          "options": [
            "Refaire une combustion",
            "Réaliser un test différenciant comme la liqueur de Fehling",
            "Mesurer sa masse volumique",
            "Regarder sa couleur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Aldéhydes et cétones isomères ont la même formule brute ; un test comme Fehling (ou Tollens, ou Schiff) permet de les distinguer."
        },
        {
          "id": "terminale_c_chimie_l02_carbonyles_p06_q6",
          "type": "mcq",
          "prompt": "Un composé réagit avec la 2,4-DNPH et possède des propriétés réductrices. C'est :",
          "options": [
            "Une cétone",
            "Un aldéhyde",
            "Un éther-oxyde",
            "Un alcool tertiaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Être carbonylé (DNPH) et réducteur est la signature d'un aldéhyde ; les cétones ne sont pas réductrices."
        }
      ]
    }
  ]
};
