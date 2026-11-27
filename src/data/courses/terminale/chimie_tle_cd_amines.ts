import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 3 : Les amines » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1314
export const CHIMIE_TLE_CD_L03_AMINES: CurriculumChapter = {
  "id": "terminale_c_chimie_l03_amines",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 3,
  "title": "Leçon 3 : Les amines",
  "summary": "On définit les amines à partir de l'ammoniac, on les classe en amines primaires, secondaires et tertiaires, on apprend à les nommer, puis on explique leurs deux propriétés : le caractère basique et le caractère nucléophile.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1314",
  "points": [
    {
      "id": "terminale_c_chimie_l03_amines_p01",
      "order": 1,
      "title": "Définition d'une amine",
      "summary": "Une amine dérive de l'ammoniac par remplacement d'hydrogènes par des groupements alkyles ou aryles.",
      "conceptExplanation": "Une amine résulte du remplacement d'un ou plusieurs atomes d'hydrogène dans la molécule d'ammoniac (NH₃) par un ou plusieurs groupements alkyles ou aryles.\nLes amines saturées ont pour formule brute générale $\\mathrm{C_nH_{2n+3}N}$, où n est le nombre d'atomes de carbone.\nExemples : CH₃–NH₂ et CH₃–NH–CH₃ sont des amines ; CH₃–CH₂–OH, un alcool, ne l'est pas.",
      "keyRule": "Une amine contient toujours un atome d'azote lié à des groupements alkyles (ou aryles) et à des hydrogènes : c'est un dérivé de l'ammoniac.",
      "formulas": [
        {
          "name": "Formule brute générale des amines saturées",
          "formula": "\\mathrm{C_nH_{2n+3}N}",
          "note": "n est le nombre d'atomes de carbone."
        }
      ],
      "workedExample": {
        "title": "Repérer les amines (activité d'application 1)",
        "statement": "Parmi les formules CH₃–NH₂, CH₃–CH₃, CH₃–NH–CH₃, CH₃–CH₂–CH₃, CH₃–CH₂–OH et CH₃–CO–CH₃, lesquelles sont celles d'amines ?",
        "methodSteps": [
          "On cherche les formules qui contiennent un atome d'azote lié à des groupements alkyles : CH₃–NH₂ et CH₃–NH–CH₃.",
          "CH₃–CH₃ et CH₃–CH₂–CH₃ sont des alcanes, CH₃–CH₂–OH est un alcool et CH₃–CO–CH₃ une cétone."
        ],
        "conclusion": "Les amines sont CH₃–NH₂ et CH₃–NH–CH₃, comme dans la solution de l'activité du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une amine dérive de l'ammoniac",
          "stepTheme": "Une amine dérive de l'ammoniac",
          "stepBadge": "Une amine dérive de l'ammoniac",
          "paragraphText": "• Amine : composé obtenu en remplaçant un ou plusieurs atomes d'hydrogène de l'ammoniac NH₃ par un ou plusieurs groupements alkyles ou aryles.\nL'atome d'azote est l'atome caractéristique de la famille.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p01_q1",
            "type": "mcq",
            "prompt": "Une amine résulte du remplacement, dans la molécule d'ammoniac, d'un ou plusieurs atomes d'hydrogène par :",
            "options": [
              "Des groupements alkyles ou aryles",
              "Des atomes d'oxygène",
              "Des groupes hydroxyle",
              "Des atomes de chlore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du résumé : les amines sont les dérivés de l'ammoniac par substitution d'hydrogènes par des groupements alkyles ou aryles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule brute générale des amines saturées",
          "stepTheme": "La formule brute générale des amines saturées",
          "stepBadge": "La formule brute générale des amines saturées",
          "paragraphText": "Les amines saturées ont pour formule brute générale $\\mathrm{C_nH_{2n+3}N}$.\nPar exemple, l'amine saturée à 3 carbones a pour formule $\\mathrm{C_3H_9N}$.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p01_q2",
            "type": "mcq",
            "prompt": "Quelle est la formule brute générale d'une amine saturée comportant n atomes de carbone ?",
            "options": [
              "$\\mathrm{C_nH_{2n+2}O}$",
              "$\\mathrm{C_nH_{2n}O}$",
              "$\\mathrm{C_nH_{2n+3}N}$",
              "$\\mathrm{C_nH_{2n+1}N}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé donne $\\mathrm{C_nH_{2n+3}N}$ pour les amines saturées."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Deux amines simples",
          "stepTheme": "Deux amines simples",
          "stepBadge": "Deux amines simples",
          "paragraphText": "CH₃–NH₂ est l'amine la plus simple : un groupement méthyle a remplacé un hydrogène de l'ammoniac.\nCH₃–NH–CH₃ est une amine où deux hydrogènes ont été remplacés par deux méthyles.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p01_q3",
            "type": "mcq",
            "prompt": "Le composé CH₃–NH–CH₃ est :",
            "options": [
              "Un alcool",
              "Une amine",
              "Un alcane",
              "Une cétone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il contient un atome d'azote lié à deux groupements méthyle et dérive de l'ammoniac : c'est une amine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre amine et amide ou alcool",
          "stepTheme": "Ne pas confondre amine et amide ou alcool",
          "stepBadge": "Ne pas confondre amine et amide ou alcool",
          "paragraphText": "Piège de l'activité 1 : CH₃–CH₂–OH contient de l'oxygène et un –OH, c'est un alcool, pas une amine.\nSans atome d'azote dans la formule, il ne peut pas s'agir d'une amine.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p01_q4",
            "type": "mcq",
            "prompt": "Parmi les composés suivants, lequel n'est pas une amine ?",
            "options": [
              "CH₃–NH₂",
              "CH₃–NH–CH₃",
              "C₂H₅–NH₂",
              "CH₃–CH₂–OH"
            ],
            "correctAnswerIndex": 3,
            "explanation": "CH₃–CH₂–OH est l'éthanol, un alcool : il ne contient pas d'azote."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'azote, atome clé des amines",
          "stepTheme": "L'azote, atome clé des amines",
          "stepBadge": "L'azote, atome clé des amines",
          "paragraphText": "La situation d'apprentissage rappelle que les engrais sont essentiellement composés d'azote, de phosphore et de potassium.\nC'est la structure électronique de l'azote, avec son doublet non liant, qui confère aux amines leurs propriétés particulières.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p01_q5",
            "type": "mcq",
            "prompt": "Les propriétés particulières des amines viennent de la structure électronique de quel atome ?",
            "options": [
              "L'atome d'oxygène",
              "L'atome de carbone",
              "L'atome d'azote",
              "L'atome d'hydrogène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé attribue les propriétés des amines au doublet non liant de l'atome d'azote."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Vérifier une formule brute d'amine",
          "stepTheme": "Vérifier une formule brute d'amine",
          "stepBadge": "Vérifier une formule brute d'amine",
          "paragraphText": "Méthode : une formule proposée est celle d'une amine saturée si elle s'écrit $\\mathrm{C_nH_{2n+3}N}$.\nPour $\\mathrm{C_4H_{11}N}$, on vérifie : 2 × 4 + 3 = 11 hydrogènes, c'est cohérent.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p01_q6",
            "type": "mcq",
            "prompt": "Quelle formule peut être celle d'une amine saturée ?",
            "options": [
              "$\\mathrm{C_4H_{11}N}$",
              "$\\mathrm{C_4H_{10}N}$",
              "$\\mathrm{C_4H_9N}$",
              "$\\mathrm{C_4H_{12}N}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour n = 4, la formule générale $\\mathrm{C_nH_{2n+3}N}$ donne $\\mathrm{C_4H_{11}N}$, qui est d'ailleurs la formule étudiée dans l'exercice 2 du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_amines_p01_q1",
          "type": "mcq",
          "prompt": "Une amine résulte du remplacement, dans la molécule d'ammoniac, d'un ou plusieurs atomes d'hydrogène par :",
          "options": [
            "Des groupements alkyles ou aryles",
            "Des atomes d'oxygène",
            "Des groupes hydroxyle",
            "Des atomes de chlore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du résumé : les amines sont les dérivés de l'ammoniac par substitution d'hydrogènes par des groupements alkyles ou aryles."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p01_q2",
          "type": "mcq",
          "prompt": "Quelle est la formule brute générale d'une amine saturée comportant n atomes de carbone ?",
          "options": [
            "$\\mathrm{C_nH_{2n+2}O}$",
            "$\\mathrm{C_nH_{2n}O}$",
            "$\\mathrm{C_nH_{2n+3}N}$",
            "$\\mathrm{C_nH_{2n+1}N}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé donne $\\mathrm{C_nH_{2n+3}N}$ pour les amines saturées."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p01_q3",
          "type": "mcq",
          "prompt": "Le composé CH₃–NH–CH₃ est :",
          "options": [
            "Un alcool",
            "Une amine",
            "Un alcane",
            "Une cétone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il contient un atome d'azote lié à deux groupements méthyle et dérive de l'ammoniac : c'est une amine."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p01_q4",
          "type": "mcq",
          "prompt": "Parmi les composés suivants, lequel n'est pas une amine ?",
          "options": [
            "CH₃–NH₂",
            "CH₃–NH–CH₃",
            "C₂H₅–NH₂",
            "CH₃–CH₂–OH"
          ],
          "correctAnswerIndex": 3,
          "explanation": "CH₃–CH₂–OH est l'éthanol, un alcool : il ne contient pas d'azote."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p01_q5",
          "type": "mcq",
          "prompt": "Les propriétés particulières des amines viennent de la structure électronique de quel atome ?",
          "options": [
            "L'atome d'oxygène",
            "L'atome de carbone",
            "L'atome d'azote",
            "L'atome d'hydrogène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé attribue les propriétés des amines au doublet non liant de l'atome d'azote."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p01_q6",
          "type": "mcq",
          "prompt": "Quelle formule peut être celle d'une amine saturée ?",
          "options": [
            "$\\mathrm{C_4H_{11}N}$",
            "$\\mathrm{C_4H_{10}N}$",
            "$\\mathrm{C_4H_9N}$",
            "$\\mathrm{C_4H_{12}N}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour n = 4, la formule générale $\\mathrm{C_nH_{2n+3}N}$ donne $\\mathrm{C_4H_{11}N}$, qui est d'ailleurs la formule étudiée dans l'exercice 2 du résumé."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l03_amines_p02",
      "order": 2,
      "title": "Les trois classes d'amine",
      "summary": "Primaire, secondaire ou tertiaire selon le nombre de groupements alkyles liés à l'azote.",
      "conceptExplanation": "Les amines se répartissent en trois classes, selon le nombre de groupements alkyles ou aryles liés à l'atome d'azote.\nUne amine primaire s'écrit R–NH₂ : un seul groupement est lié à l'azote, qui garde deux hydrogènes.\nUne amine secondaire s'écrit R₁–NH–R₂ : deux groupements et un hydrogène sur l'azote.\nUne amine tertiaire s'écrit R₁–N–R₂ avec un troisième groupement R₃ : l'azote ne porte plus d'hydrogène.",
      "keyRule": "On compte les groupements liés à l'azote : 1 → primaire, 2 → secondaire, 3 → tertiaire.",
      "formulas": [
        {
          "name": "Amine primaire",
          "formula": "\\mathrm{R-NH_2}",
          "note": "Un seul groupement alkyle lié à l'azote."
        },
        {
          "name": "Amine secondaire",
          "formula": "\\mathrm{R_1-NH-R_2}",
          "note": "Deux groupements alkyles liés à l'azote."
        },
        {
          "name": "Amine tertiaire",
          "formula": "\\mathrm{R_1R_2R_3N}",
          "note": "Trois groupements alkyles liés à l'azote."
        }
      ],
      "workedExample": {
        "title": "Classer les amines de l'activité d'application 2",
        "statement": "Indique la classe de : a) CH₃–NH–CH₃ ; b) CH₃–N(CH₃)–CH₂–CH₃ ; c) CH₃–NH–CH₂–CH₃ ; d) CH₃–NH₂.",
        "methodSteps": [
          "a) L'azote porte deux groupements méthyle : amine secondaire.",
          "b) L'azote porte trois groupements (deux méthyles et un éthyle) : amine tertiaire.",
          "c) L'azote porte un méthyle et un éthyle : amine secondaire.",
          "d) L'azote porte un seul groupement méthyle : amine primaire."
        ],
        "conclusion": "On retrouve les réponses de la solution du résumé : secondaire, tertiaire, secondaire, primaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Amine primaire",
          "stepTheme": "Amine primaire",
          "stepBadge": "Amine primaire",
          "paragraphText": "• Amine primaire : un seul groupement alkyle est lié à l'atome d'azote, qui porte encore deux atomes d'hydrogène.\nFormule générale : R–NH₂, comme CH₃–NH₂.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p02_q1",
            "type": "mcq",
            "prompt": "Une amine primaire est caractérisée par la formule générale :",
            "options": [
              "R–NH₂",
              "R₁–NH–R₂",
              "R₁R₂R₃N",
              "R–OH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'amine primaire s'écrit R–NH₂ : un seul groupement lié à l'azote."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Amine secondaire",
          "stepTheme": "Amine secondaire",
          "stepBadge": "Amine secondaire",
          "paragraphText": "• Amine secondaire : deux groupements alkyles sont liés à l'atome d'azote, qui porte encore un atome d'hydrogène.\nFormule générale : R₁–NH–R₂, comme CH₃–NH–CH₃.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p02_q2",
            "type": "mcq",
            "prompt": "CH₃–NH–CH₂–CH₃ est une amine :",
            "options": [
              "Primaire",
              "Secondaire",
              "Tertiaire",
              "Ce n'est pas une amine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'azote porte deux groupements (un méthyle et un éthyle) : c'est une amine secondaire, comme dans l'activité 2 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Amine tertiaire",
          "stepTheme": "Amine tertiaire",
          "stepBadge": "Amine tertiaire",
          "paragraphText": "• Amine tertiaire : trois groupements alkyles sont liés à l'atome d'azote, qui ne porte plus aucun atome d'hydrogène.\nExemple de l'activité : CH₃–N(CH₃)–CH₂–CH₃.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p02_q3",
            "type": "mcq",
            "prompt": "Dans une amine tertiaire, l'atome d'azote est lié à :",
            "options": [
              "Un seul groupement alkyle",
              "Deux groupements alkyles et un hydrogène",
              "Trois groupements alkyles, sans hydrogène",
              "Un atome d'oxygène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Trois groupements alkyles remplacent les trois hydrogènes de l'ammoniac : il n'en reste aucun sur l'azote."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Compter les groupements sur l'azote",
          "stepTheme": "Compter les groupements sur l'azote",
          "stepBadge": "Compter les groupements sur l'azote",
          "paragraphText": "Méthode : repérer l'atome d'azote, puis compter les groupements carbone qui lui sont directement liés.\nNe pas compter les hydrogènes : ce sont les groupements alkyles qui décident de la classe.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p02_q4",
            "type": "mcq",
            "prompt": "Pour déterminer la classe d'une amine, on compte :",
            "options": [
              "Les atomes d'hydrogène de la molécule",
              "Les atomes de carbone de la chaîne la plus longue",
              "Les groupements alkyles directement liés à l'atome d'azote",
              "Les atomes d'azote de la molécule"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La classe dépend du nombre de groupements alkyles (ou aryles) liés à l'azote : 1, 2 ou 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une amine tertiaire peut avoir de courtes chaînes",
          "stepTheme": "Une amine tertiaire peut avoir de courtes chaînes",
          "stepBadge": "Une amine tertiaire peut avoir de courtes chaînes",
          "paragraphText": "Piège : « tertiaire » ne décrit pas la taille des chaînes mais le nombre de groupements sur l'azote.\nLa triméthylamine, N(CH₃)₃, est tertiaire avec seulement trois carbones au total.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p02_q5",
            "type": "mcq",
            "prompt": "Le composé N(CH₃)₃, dont l'azote porte trois groupements méthyle, est :",
            "options": [
              "Une amine primaire",
              "Une amine secondaire",
              "Un ammoniac non substitué",
              "Une amine tertiaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Trois groupements alkyles sur l'azote : c'est une amine tertiaire, même si les groupements sont courts."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les classes des isomères de C₄H₁₁N (exercice 2)",
          "stepTheme": "Les classes des isomères de C₄H₁₁N (exercice 2)",
          "stepBadge": "Les classes des isomères de C₄H₁₁N (exercice 2)",
          "paragraphText": "L'exercice 2 du résumé écrit les amines isomères de $\\mathrm{C_4H_{11}N}$ puis les classe.\nSa solution donne quatre amines primaires, deux secondaires (dont la diéthylamine) et une tertiaire (la N,N-diméthyléthylamine).",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p02_q6",
            "type": "mcq",
            "prompt": "D'après l'exercice 2, la diéthylamine (C₂H₅)₂NH est une amine :",
            "options": [
              "Secondaire",
              "Primaire",
              "Tertiaire",
              "Quaternaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'azote de la diéthylamine porte deux groupements éthyle et un hydrogène : c'est une amine secondaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_amines_p02_q1",
          "type": "mcq",
          "prompt": "Une amine primaire est caractérisée par la formule générale :",
          "options": [
            "R–NH₂",
            "R₁–NH–R₂",
            "R₁R₂R₃N",
            "R–OH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'amine primaire s'écrit R–NH₂ : un seul groupement lié à l'azote."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p02_q2",
          "type": "mcq",
          "prompt": "CH₃–NH–CH₂–CH₃ est une amine :",
          "options": [
            "Primaire",
            "Secondaire",
            "Tertiaire",
            "Ce n'est pas une amine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'azote porte deux groupements (un méthyle et un éthyle) : c'est une amine secondaire, comme dans l'activité 2 du résumé."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p02_q3",
          "type": "mcq",
          "prompt": "Dans une amine tertiaire, l'atome d'azote est lié à :",
          "options": [
            "Un seul groupement alkyle",
            "Deux groupements alkyles et un hydrogène",
            "Trois groupements alkyles, sans hydrogène",
            "Un atome d'oxygène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Trois groupements alkyles remplacent les trois hydrogènes de l'ammoniac : il n'en reste aucun sur l'azote."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p02_q4",
          "type": "mcq",
          "prompt": "Pour déterminer la classe d'une amine, on compte :",
          "options": [
            "Les atomes d'hydrogène de la molécule",
            "Les atomes de carbone de la chaîne la plus longue",
            "Les groupements alkyles directement liés à l'atome d'azote",
            "Les atomes d'azote de la molécule"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La classe dépend du nombre de groupements alkyles (ou aryles) liés à l'azote : 1, 2 ou 3."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p02_q5",
          "type": "mcq",
          "prompt": "Le composé N(CH₃)₃, dont l'azote porte trois groupements méthyle, est :",
          "options": [
            "Une amine primaire",
            "Une amine secondaire",
            "Un ammoniac non substitué",
            "Une amine tertiaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Trois groupements alkyles sur l'azote : c'est une amine tertiaire, même si les groupements sont courts."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p02_q6",
          "type": "mcq",
          "prompt": "D'après l'exercice 2, la diéthylamine (C₂H₅)₂NH est une amine :",
          "options": [
            "Secondaire",
            "Primaire",
            "Tertiaire",
            "Quaternaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'azote de la diéthylamine porte deux groupements éthyle et un hydrogène : c'est une amine secondaire."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l03_amines_p03",
      "order": 3,
      "title": "Nomenclature des amines",
      "summary": "Deux méthodes : le suffixe « amine » sur l'alcane, ou le nom en alkylamine, avec les préfixes N- et N,N-.",
      "conceptExplanation": "Première méthode : on nomme les amines en remplaçant le « e » final de l'alcane dont elles proviennent par « amine », avec l'indice de position du groupe NH₂ ; l'atome de carbone lié à l'azote porte le numéro 1.\nSi l'amine est secondaire ou tertiaire, on énonce les autres groupes devant le nom, précédés de la lettre N ou des lettres N,N.\nDeuxième méthode : les amines primaires sont nommées en alkylamines (méthylamine pour CH₃–NH₂), et les autres groupes sont aussi précédés de N ou N,N pour les amines secondaires et tertiaires.",
      "keyRule": "La lettre N désigne les groupements portés par l'azote : N- pour un groupement en plus, N,N- pour deux.",
      "formulas": [],
      "workedExample": {
        "title": "Nommer C₂H₅–NH–CH₃ par les deux méthodes",
        "statement": "Donne les deux noms possibles de l'amine C₂H₅–NH–CH₃.",
        "methodSteps": [
          "L'amine est secondaire : l'azote porte un éthyle et un méthyle.",
          "Première méthode : l'alcane de base est l'éthane ; le groupe supplémentaire (méthyle) est énoncé avec N- : N-méthyléthanamine.",
          "Deuxième méthode : on énonce les deux groupements comme alkylamine : N-méthyléthylamine."
        ],
        "conclusion": "Les deux noms du résumé sont N-méthyléthanamine et N-méthyléthylamine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Première méthode : le suffixe « amine »",
          "stepTheme": "Première méthode : le suffixe « amine »",
          "stepBadge": "Première méthode : le suffixe « amine »",
          "paragraphText": "On remplace le « e » final du nom de l'alcane par « amine », avec l'indice de position du groupe –NH₂ si besoin.\nL'atome de carbone lié à l'azote porte le numéro 1 : CH₃–NH₂ est la méthanamine.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p03_q1",
            "type": "mcq",
            "prompt": "Par la première méthode, CH₃–NH₂ se nomme :",
            "options": [
              "La méthanamine",
              "La méthylamine uniquement",
              "L'éthanamine",
              "La méthanone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé nomme CH₃–NH₂ « méthanamine » par la première méthode (et « méthylamine » par la seconde)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Deuxième méthode : les alkylamines",
          "stepTheme": "Deuxième méthode : les alkylamines",
          "stepBadge": "Deuxième méthode : les alkylamines",
          "paragraphText": "Les amines primaires peuvent être nommées en alkylamines : le groupe alkyle lié au groupe –NH₂ suivi de « amine ».\nExemple : CH₃–NH₂ est la méthylamine.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p03_q2",
            "type": "mcq",
            "prompt": "Par la deuxième méthode, CH₃–CH₂–CH₂–NH₂ se nomme :",
            "options": [
              "La propanamine seulement",
              "La propylamine",
              "La N-méthyléthylamine",
              "La triéthylamine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le groupement lié à –NH₂ est un propyle : en alkylamine, c'est la propylamine (propan-1-amine par la première méthode)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les préfixes N- et N,N-",
          "stepTheme": "Les préfixes N- et N,N-",
          "stepBadge": "Les préfixes N- et N,N-",
          "paragraphText": "Pour une amine secondaire, le groupement supplémentaire porté par l'azote est précédé de la lettre N.\nPour une amine tertiaire, les deux groupements supplémentaires sont précédés des lettres N,N.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p03_q3",
            "type": "mcq",
            "prompt": "Dans le nom d'une amine tertiaire, les groupements supplémentaires portés par l'azote sont précédés de :",
            "options": [
              "La lettre C",
              "Les lettres N,N",
              "L'indice 3",
              "Le mot « ter »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé indique que les autres groupes sont énoncés devant, précédés de la lettre N ou des lettres N,N selon la classe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La N,N-diméthyléthanamine",
          "stepTheme": "La N,N-diméthyléthanamine",
          "stepBadge": "La N,N-diméthyléthanamine",
          "paragraphText": "Le composé CH₃–N(CH₃)–CH₂–CH₃ porte sur son azote deux méthyles en plus de l'éthyle.\nLe résumé le nomme N,N-diméthyléthanamine (première méthode) ou N,N-diméthyléthylamine (deuxième méthode).",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p03_q4",
            "type": "mcq",
            "prompt": "Le composé C₂H₅–N(CH₃)₂ se nomme, par la première méthode :",
            "options": [
              "La N-méthyléthanamine",
              "La triméthylamine",
              "La N,N-diméthyléthanamine",
              "La diéthylamine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'azote porte un éthyle (chaîne de base) et deux méthyles énoncés avec N,N- : c'est la N,N-diméthyléthanamine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le carbone lié à l'azote porte le numéro 1",
          "stepTheme": "Le carbone lié à l'azote porte le numéro 1",
          "stepBadge": "Le carbone lié à l'azote porte le numéro 1",
          "paragraphText": "Piège : numéroter la chaîne d'une amine primaire à partir du mauvais bout.\nLa règle du résumé : l'atome de carbone lié à l'atome d'azote porte le numéro 1 ; c'est ainsi que CH₃–CH(NH₂)–CH₃ est la propan-2-amine.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p03_q5",
            "type": "mcq",
            "prompt": "Dans le nom d'une amine primaire, le carbone qui porte le numéro 1 est :",
            "options": [
              "Le carbone le plus ramifié",
              "Le carbone lié à l'atome d'azote",
              "Le carbone du milieu de la chaîne",
              "Le carbone le plus éloigné de l'azote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé l'énonce : l'atome de carbone lié à l'atome d'azote porte le numéro 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Nommer une amine secondaire (exercice 1)",
          "stepTheme": "Nommer une amine secondaire (exercice 1)",
          "stepBadge": "Nommer une amine secondaire (exercice 1)",
          "paragraphText": "L'exercice 1 du résumé demande le nom de CH₃–NH–CH₂–C₂H₅.\nSa solution donne : N-méthylpropanamine (la plus longue chaîne liée à l'azote sert de base).",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p03_q6",
            "type": "mcq",
            "prompt": "Le composé CH₃–NH–CH₂–CH₂–CH₃ se nomme :",
            "options": [
              "La N-méthylpropanamine",
              "La propylamine",
              "La N,N-diméthyléthanamine",
              "La butanamine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaîne principale propanamine, avec un méthyle sur l'azote énoncé par N- : N-méthylpropanamine, comme dans la solution de l'exercice 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_amines_p03_q1",
          "type": "mcq",
          "prompt": "Par la première méthode, CH₃–NH₂ se nomme :",
          "options": [
            "La méthanamine",
            "La méthylamine uniquement",
            "L'éthanamine",
            "La méthanone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé nomme CH₃–NH₂ « méthanamine » par la première méthode (et « méthylamine » par la seconde)."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p03_q2",
          "type": "mcq",
          "prompt": "Par la deuxième méthode, CH₃–CH₂–CH₂–NH₂ se nomme :",
          "options": [
            "La propanamine seulement",
            "La propylamine",
            "La N-méthyléthylamine",
            "La triéthylamine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le groupement lié à –NH₂ est un propyle : en alkylamine, c'est la propylamine (propan-1-amine par la première méthode)."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p03_q3",
          "type": "mcq",
          "prompt": "Dans le nom d'une amine tertiaire, les groupements supplémentaires portés par l'azote sont précédés de :",
          "options": [
            "La lettre C",
            "Les lettres N,N",
            "L'indice 3",
            "Le mot « ter »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé indique que les autres groupes sont énoncés devant, précédés de la lettre N ou des lettres N,N selon la classe."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p03_q4",
          "type": "mcq",
          "prompt": "Le composé C₂H₅–N(CH₃)₂ se nomme, par la première méthode :",
          "options": [
            "La N-méthyléthanamine",
            "La triméthylamine",
            "La N,N-diméthyléthanamine",
            "La diéthylamine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'azote porte un éthyle (chaîne de base) et deux méthyles énoncés avec N,N- : c'est la N,N-diméthyléthanamine."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p03_q5",
          "type": "mcq",
          "prompt": "Dans le nom d'une amine primaire, le carbone qui porte le numéro 1 est :",
          "options": [
            "Le carbone le plus ramifié",
            "Le carbone lié à l'atome d'azote",
            "Le carbone du milieu de la chaîne",
            "Le carbone le plus éloigné de l'azote"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé l'énonce : l'atome de carbone lié à l'atome d'azote porte le numéro 1."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p03_q6",
          "type": "mcq",
          "prompt": "Le composé CH₃–NH–CH₂–CH₂–CH₃ se nomme :",
          "options": [
            "La N-méthylpropanamine",
            "La propylamine",
            "La N,N-diméthyléthanamine",
            "La butanamine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaîne principale propanamine, avec un méthyle sur l'azote énoncé par N- : N-méthylpropanamine, comme dans la solution de l'exercice 1."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l03_amines_p04",
      "order": 4,
      "title": "Le caractère basique des amines",
      "summary": "Les amines sont des bases faibles grâce au doublet non liant de l'azote.",
      "conceptExplanation": "Les amines sont des bases faibles, du fait du doublet non liant porté par l'atome d'azote.\nCe doublet peut capter un proton de l'eau : l'amine réagit avec l'eau selon un équilibre, en donnant un ion alkylammonium et des ions hydroxyde.\nC'est ce caractère basique qu'on met en évidence par la réaction d'une amine avec l'eau.",
      "keyRule": "Doublet non liant de l'azote → l'amine capte un proton : c'est une base faible.",
      "formulas": [
        {
          "name": "Réaction d'une amine primaire avec l'eau",
          "formula": "\\mathrm{R-NH_2 + H_2O \\rightleftharpoons R-NH_3^+ + OH^-}",
          "note": "Équilibre : l'amine est une base faible."
        },
        {
          "name": "Réaction de la méthylamine avec l'eau",
          "formula": "\\mathrm{CH_3-NH_2 + H_2O \\rightleftharpoons CH_3-NH_3^+ + OH^-}",
          "note": "Équation de l'activité d'application 3."
        }
      ],
      "workedExample": {
        "title": "Équation de la méthylamine avec l'eau (activité d'application 3)",
        "statement": "Écris l'équation-bilan de la réaction de la méthylamine avec l'eau.",
        "methodSteps": [
          "La méthylamine capte un proton de l'eau grâce au doublet non liant de son azote.",
          "Elle se transforme en ion méthylammonium CH₃–NH₃⁺.",
          "L'eau, qui a cédé un proton, devient un ion hydroxyde OH⁻ ; la réaction est un équilibre."
        ],
        "conclusion": "CH₃–NH₂ + H₂O ⇌ CH₃–NH₃⁺ + OH⁻, comme dans la solution de l'activité 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le doublet non liant de l'azote",
          "stepTheme": "Le doublet non liant de l'azote",
          "stepBadge": "Le doublet non liant de l'azote",
          "paragraphText": "• Doublet non liant : paire d'électrons de l'atome d'azote qui n'est engagée dans aucune liaison.\nC'est lui qui explique à la fois le caractère basique et le caractère nucléophile des amines.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p04_q1",
            "type": "mcq",
            "prompt": "Le caractère basique des amines est dû :",
            "options": [
              "Au doublet non liant de l'atome d'azote",
              "À la présence d'un groupe carbonyle",
              "À la longueur de la chaîne carbonée",
              "À la présence de l'oxygène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé l'affirme : les amines sont des bases faibles du fait du doublet non liant sur l'atome d'azote."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des bases faibles",
          "stepTheme": "Des bases faibles",
          "stepBadge": "Des bases faibles",
          "paragraphText": "Les amines sont des bases faibles : leur réaction avec l'eau est un équilibre, symbolisé par la double flèche ⇌.\nElles ne transforment donc qu'une partie des molécules d'eau en ions hydroxyde.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p04_q2",
            "type": "mcq",
            "prompt": "Les amines sont des bases :",
            "options": [
              "Fortes, comme la soude",
              "Faibles",
              "Inexistantes : elles sont neutres",
              "Elles sont acides"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé qualifie les amines de bases faibles, ce que traduit la double flèche d'équilibre dans leur réaction avec l'eau."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La réaction avec l'eau produit des ions hydroxyde",
          "stepTheme": "La réaction avec l'eau produit des ions hydroxyde",
          "stepBadge": "La réaction avec l'eau produit des ions hydroxyde",
          "paragraphText": "Quand une amine réagit avec l'eau, il se forme des ions hydroxyde OH⁻ : la solution devient basique.\nL'amine devient en même temps un ion alkylammonium, par exemple CH₃–NH₃⁺ pour la méthylamine.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p04_q3",
            "type": "mcq",
            "prompt": "La réaction d'une amine avec l'eau produit notamment :",
            "options": [
              "Des ions oxonium H₃O⁺",
              "Du dioxyde de carbone",
              "Des ions hydroxyde OH⁻",
              "Du dihydrogène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'équation du résumé montre la formation d'ions OH⁻ : c'est la marque du caractère basique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Basique ne veut pas dire base forte",
          "stepTheme": "Basique ne veut pas dire base forte",
          "stepBadge": "Basique ne veut pas dire base forte",
          "paragraphText": "Piège : écrire la réaction d'une amine avec l'eau avec une flèche simple, comme si elle était totale.\nLe résumé utilise la double flèche d'équilibre : la réaction est limitée, les amines sont des bases faibles.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p04_q4",
            "type": "mcq",
            "prompt": "Dans l'équation de la réaction d'une amine avec l'eau, on utilise :",
            "options": [
              "Une flèche simple, car la réaction est totale",
              "Aucune flèche",
              "Une flèche de combustion",
              "Une double flèche, car c'est un équilibre"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La double flèche traduit l'équilibre d'une base faible avec l'eau."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La N-méthyléthylamine dans l'eau (exercice 5)",
          "stepTheme": "La N-méthyléthylamine dans l'eau (exercice 5)",
          "stepBadge": "La N-méthyléthylamine dans l'eau (exercice 5)",
          "paragraphText": "Dans l'exercice 5 du résumé, l'amine secondaire C₂H₅–NH–CH₃ réagit avec l'eau.\nLa solution écrit l'équilibre qui donne l'ion correspondant et des ions OH⁻, et nomme la propriété mise en évidence : la propriété basique.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p04_q5",
            "type": "mcq",
            "prompt": "La réaction d'une amine avec l'eau met en évidence :",
            "options": [
              "Sa propriété basique",
              "Sa propriété nucléophile",
              "Son caractère réducteur",
              "Son caractère d'oxydant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la réponse de l'exercice 5 : l'action sur l'eau révèle la propriété basique des amines."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Écrire l'équation d'une amine avec l'eau",
          "stepTheme": "Écrire l'équation d'une amine avec l'eau",
          "stepBadge": "Écrire l'équation d'une amine avec l'eau",
          "paragraphText": "Méthode : ajouter H⁺ (le proton capté) sur l'azote de l'amine, et OH⁻ comme second produit, avec une double flèche.\nPour l'éthylamine : C₂H₅–NH₂ + H₂O ⇌ C₂H₅–NH₃⁺ + OH⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p04_q6",
            "type": "mcq",
            "prompt": "Quand la méthylamine réagit avec l'eau, elle se transforme en :",
            "options": [
              "Ion méthylammonium CH₃–NH₃⁺",
              "Méthanol CH₃–OH",
              "Ion méthanoate",
              "Méthane CH₄"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'azote capte un proton : CH₃–NH₂ devient l'ion méthylammonium CH₃–NH₃⁺ (activité 3 du résumé)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_amines_p04_q1",
          "type": "mcq",
          "prompt": "Le caractère basique des amines est dû :",
          "options": [
            "Au doublet non liant de l'atome d'azote",
            "À la présence d'un groupe carbonyle",
            "À la longueur de la chaîne carbonée",
            "À la présence de l'oxygène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé l'affirme : les amines sont des bases faibles du fait du doublet non liant sur l'atome d'azote."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p04_q2",
          "type": "mcq",
          "prompt": "Les amines sont des bases :",
          "options": [
            "Fortes, comme la soude",
            "Faibles",
            "Inexistantes : elles sont neutres",
            "Elles sont acides"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé qualifie les amines de bases faibles, ce que traduit la double flèche d'équilibre dans leur réaction avec l'eau."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p04_q3",
          "type": "mcq",
          "prompt": "La réaction d'une amine avec l'eau produit notamment :",
          "options": [
            "Des ions oxonium H₃O⁺",
            "Du dioxyde de carbone",
            "Des ions hydroxyde OH⁻",
            "Du dihydrogène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'équation du résumé montre la formation d'ions OH⁻ : c'est la marque du caractère basique."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p04_q4",
          "type": "mcq",
          "prompt": "Dans l'équation de la réaction d'une amine avec l'eau, on utilise :",
          "options": [
            "Une flèche simple, car la réaction est totale",
            "Aucune flèche",
            "Une flèche de combustion",
            "Une double flèche, car c'est un équilibre"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La double flèche traduit l'équilibre d'une base faible avec l'eau."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p04_q5",
          "type": "mcq",
          "prompt": "La réaction d'une amine avec l'eau met en évidence :",
          "options": [
            "Sa propriété basique",
            "Sa propriété nucléophile",
            "Son caractère réducteur",
            "Son caractère d'oxydant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la réponse de l'exercice 5 : l'action sur l'eau révèle la propriété basique des amines."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p04_q6",
          "type": "mcq",
          "prompt": "Quand la méthylamine réagit avec l'eau, elle se transforme en :",
          "options": [
            "Ion méthylammonium CH₃–NH₃⁺",
            "Méthanol CH₃–OH",
            "Ion méthanoate",
            "Méthane CH₄"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'azote capte un proton : CH₃–NH₂ devient l'ion méthylammonium CH₃–NH₃⁺ (activité 3 du résumé)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l03_amines_p05",
      "order": 5,
      "title": "Le caractère nucléophile : la réaction d'Hofmann",
      "summary": "L'alkylation des amines par les dérivés halogénés, jusqu'au sel d'ammonium quaternaire.",
      "conceptExplanation": "Le doublet non liant de l'azote confère aussi aux amines un caractère nucléophile.\nDans la réaction d'Hofmann (alkylation des amines), l'azote, centre nucléophile, attaque le carbone, centre électrophile, d'une molécule halogénée R–X (X = I, Br, Cl…).\nLes alkylations se succèdent : une amine primaire donne une amine secondaire, puis une amine tertiaire, puis un sel d'ammonium quaternaire.",
      "keyRule": "Hofmann : l'azote nucléophile attaque le carbone du dérivé halogéné ; chaque alkylation fait passer à la classe d'amine suivante.",
      "formulas": [
        {
          "name": "Alkylation de la méthylamine (1re étape)",
          "formula": "\\mathrm{CH_3-NH_2 + CH_3-Cl \\longrightarrow CH_3-NH-CH_3 + HCl}",
          "note": "La méthylamine donne la diméthylamine (activité d'application 4)."
        },
        {
          "name": "Formation d'un ammonium quaternaire",
          "formula": "\\mathrm{(C_2H_5)_3N + C_2H_5-I \\longrightarrow [(C_2H_5)_4N]^+ + I^-}",
          "note": "La triéthylamine donne l'iodure de tétraéthylammonium (exercice 4)."
        }
      ],
      "workedExample": {
        "title": "Alkylations successives de la méthylamine (activité d'application 4)",
        "statement": "Écris les étapes de la réaction de la méthylamine avec le chlorométhane, en excès.",
        "methodSteps": [
          "Première alkylation : CH₃–NH₂ + CH₃–Cl → CH₃–NH–CH₃ + HCl ; on obtient la diméthylamine, amine secondaire.",
          "Deuxième alkylation : la diméthylamine réagit encore avec CH₃–Cl et donne la triméthylamine, amine tertiaire.",
          "Troisième alkylation : la triméthylamine donne un sel d'ammonium quaternaire, le chlorure de tétraméthylammonium."
        ],
        "conclusion": "Les alkylations s'enchaînent tant qu'il reste un dérivé halogéné : primaire → secondaire → tertiaire → ammonium quaternaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un centre nucléophile",
          "stepTheme": "Un centre nucléophile",
          "stepBadge": "Un centre nucléophile",
          "paragraphText": "• Nucléophile : espèce qui peut donner son doublet d'électrons pour former une nouvelle liaison.\nGrâce à son doublet non liant, l'azote des amines est un centre nucléophile.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p05_q1",
            "type": "mcq",
            "prompt": "Le caractère nucléophile des amines vient :",
            "options": [
              "Du doublet non liant de l'atome d'azote",
              "De la présence d'un groupe carbonyle",
              "De la liaison C–H",
              "De l'atome d'halogène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé l'énonce : le doublet non liant de l'azote confère aux amines un caractère nucléophile."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La réaction d'Hofmann",
          "stepTheme": "La réaction d'Hofmann",
          "stepBadge": "La réaction d'Hofmann",
          "paragraphText": "• Réaction d'Hofmann : alkylation d'une amine par un dérivé halogéné R–X, où X est un halogène (I, Br, Cl…).\nL'azote attaque le carbone de la molécule halogénée, qui est le centre électrophile.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p05_q2",
            "type": "mcq",
            "prompt": "La réaction d'Hofmann est :",
            "options": [
              "L'oxydation d'une amine",
              "L'alkylation d'une amine par un dérivé halogéné",
              "La combustion d'une amine",
              "L'hydratation d'une amine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé définit la réaction d'Hofmann comme l'alkylation des amines."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'attaque nucléophile pas à pas",
          "stepTheme": "L'attaque nucléophile pas à pas",
          "stepBadge": "L'attaque nucléophile pas à pas",
          "paragraphText": "Dans la réaction d'Hofmann, l'azote (centre nucléophile) attaque le carbone (centre électrophile) de la molécule halogénée.\nL'halogène part alors avec la liaison, sous forme d'ion halogénure ou d'acide halogéné.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p05_q3",
            "type": "mcq",
            "prompt": "Dans la réaction d'Hofmann, le centre nucléophile est :",
            "options": [
              "Le carbone du dérivé halogéné",
              "L'halogène",
              "L'atome d'azote de l'amine",
              "L'atome d'hydrogène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé précise : l'azote, centre nucléophile, attaque le carbone, centre électrophile, de la molécule halogénée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "L'alkylation ne s'arrête pas tout seule",
          "stepTheme": "L'alkylation ne s'arrête pas tout seule",
          "stepBadge": "L'alkylation ne s'arrête pas tout seule",
          "paragraphText": "Piège : croire que la réaction de la méthylamine avec le chlorométhane donne uniquement la diméthylamine.\nL'activité 4 montre que la diméthylamine formée réagit encore, puis la triméthylamine aussi, jusqu'au sel d'ammonium quaternaire.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p05_q4",
            "type": "mcq",
            "prompt": "En présence d'un excès de chlorométhane, la méthylamine peut donner successivement :",
            "options": [
              "Uniquement la diméthylamine",
              "Du méthanol puis du méthanal",
              "Uniquement un alcool",
              "Une amine secondaire, puis tertiaire, puis un sel d'ammonium quaternaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Chaque produit reste une amine nucléophile tant qu'il porte le doublet : les alkylations se succèdent jusqu'à l'ammonium quaternaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'iodure de tétraéthylammonium (exercice 4)",
          "stepTheme": "L'iodure de tétraéthylammonium (exercice 4)",
          "stepBadge": "L'iodure de tétraéthylammonium (exercice 4)",
          "paragraphText": "Dans l'exercice 4 du résumé, la triéthylamine (C₆H₁₅N), amine tertiaire, réagit avec l'iodoéthane.\nOn obtient l'iodure de tétraéthylammonium, un sel d'ammonium quaternaire.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p05_q5",
            "type": "mcq",
            "prompt": "La réaction de la triéthylamine avec l'iodoéthane donne :",
            "options": [
              "L'iodure de tétraéthylammonium",
              "La diéthylamine",
              "Un alcool",
              "L'éthane"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'objectif de l'exercice 4 : préparer l'iodure de tétraéthylammonium par alkylation de la triéthylamine."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Deux propriétés, une même cause",
          "stepTheme": "Deux propriétés, une même cause",
          "stepBadge": "Deux propriétés, une même cause",
          "paragraphText": "Méthode de synthèse : le doublet non liant de l'azote explique les deux propriétés des amines.\nAvec l'eau, il capte un proton (caractère basique) ; avec un dérivé halogéné, il attaque un carbone (caractère nucléophile).",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p05_q6",
            "type": "mcq",
            "prompt": "La réaction d'une amine avec l'iodoéthane met en évidence :",
            "options": [
              "Sa propriété basique",
              "Sa propriété nucléophile",
              "Son caractère acide",
              "Son pouvoir oxydant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'action d'un dérivé halogéné révèle le caractère nucléophile (exercice 5 du résumé) ; l'action de l'eau révèle le caractère basique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_amines_p05_q1",
          "type": "mcq",
          "prompt": "Le caractère nucléophile des amines vient :",
          "options": [
            "Du doublet non liant de l'atome d'azote",
            "De la présence d'un groupe carbonyle",
            "De la liaison C–H",
            "De l'atome d'halogène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé l'énonce : le doublet non liant de l'azote confère aux amines un caractère nucléophile."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p05_q2",
          "type": "mcq",
          "prompt": "La réaction d'Hofmann est :",
          "options": [
            "L'oxydation d'une amine",
            "L'alkylation d'une amine par un dérivé halogéné",
            "La combustion d'une amine",
            "L'hydratation d'une amine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé définit la réaction d'Hofmann comme l'alkylation des amines."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p05_q3",
          "type": "mcq",
          "prompt": "Dans la réaction d'Hofmann, le centre nucléophile est :",
          "options": [
            "Le carbone du dérivé halogéné",
            "L'halogène",
            "L'atome d'azote de l'amine",
            "L'atome d'hydrogène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé précise : l'azote, centre nucléophile, attaque le carbone, centre électrophile, de la molécule halogénée."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p05_q4",
          "type": "mcq",
          "prompt": "En présence d'un excès de chlorométhane, la méthylamine peut donner successivement :",
          "options": [
            "Uniquement la diméthylamine",
            "Du méthanol puis du méthanal",
            "Uniquement un alcool",
            "Une amine secondaire, puis tertiaire, puis un sel d'ammonium quaternaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Chaque produit reste une amine nucléophile tant qu'il porte le doublet : les alkylations se succèdent jusqu'à l'ammonium quaternaire."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p05_q5",
          "type": "mcq",
          "prompt": "La réaction de la triéthylamine avec l'iodoéthane donne :",
          "options": [
            "L'iodure de tétraéthylammonium",
            "La diéthylamine",
            "Un alcool",
            "L'éthane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'objectif de l'exercice 4 : préparer l'iodure de tétraéthylammonium par alkylation de la triéthylamine."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p05_q6",
          "type": "mcq",
          "prompt": "La réaction d'une amine avec l'iodoéthane met en évidence :",
          "options": [
            "Sa propriété basique",
            "Sa propriété nucléophile",
            "Son caractère acide",
            "Son pouvoir oxydant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'action d'un dérivé halogéné révèle le caractère nucléophile (exercice 5 du résumé) ; l'action de l'eau révèle le caractère basique."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l03_amines_p06",
      "order": 6,
      "title": "Identifier une amine inconnue",
      "summary": "Utiliser le pourcentage d'azote pour trouver la formule brute, puis trancher entre les isomères.",
      "conceptExplanation": "Pour une amine primaire saturée, on écrit la formule sous la forme $\\mathrm{C_xH_{2x+1}-NH_2}$, soit $\\mathrm{C_xH_{2x+3}N}$ : sa masse molaire vaut $M = 14x + 17$.\nLe pourcentage massique d'azote donne la masse molaire, car l'azote ne figure qu'une fois dans la molécule.\nOn en déduit x, puis on écrit les isomères possibles et on les distingue par des informations supplémentaires, comme la ramification de la chaîne.",
      "keyRule": "Pour une amine primaire saturée, $M = 14x + 17$ et le pourcentage d'azote vaut $14/M$ : il donne directement la masse molaire.",
      "formulas": [
        {
          "name": "Masse molaire d'une amine primaire saturée",
          "formula": "M = 14x + 17",
          "note": "M en g/mol, x = nombre d'atomes de carbone."
        }
      ],
      "workedExample": {
        "title": "L'amine B de la situation d'évaluation",
        "statement": "Une amine primaire saturée B contient 23,7 % d'azote en masse, et sa chaîne carbonée est ramifiée. Identifie B.",
        "methodSteps": [
          "Le pourcentage d'azote donne la masse molaire : $M = 14 / 0{,}237 \\approx 59\\ \\mathrm{g/mol}$.",
          "On résout $14x + 17 = 59$, soit $x = 3$ : la formule brute est $\\mathrm{C_3H_9N}$.",
          "Les amines primaires possibles sont la propan-1-amine (chaîne linéaire) et la propan-2-amine (chaîne ramifiée).",
          "La chaîne de B est ramifiée : B est la propan-2-amine, CH₃–CH(NH₂)–CH₃."
        ],
        "conclusion": "B est la propan-2-amine, comme dans la solution de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Du pourcentage d'azote à la masse molaire",
          "stepTheme": "Du pourcentage d'azote à la masse molaire",
          "stepBadge": "Du pourcentage d'azote à la masse molaire",
          "paragraphText": "La molécule ne contient qu'un seul atome d'azote, de masse 14 g/mol.\nSi l'azote représente 23,7 % de la masse, la masse molaire vaut $M = 59\\ \\mathrm{g/mol}$ (situation d'évaluation).",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p06_q1",
            "type": "mcq",
            "prompt": "Une amine contient 23,7 % d'azote en masse et un seul atome d'azote par molécule. Sa masse molaire vaut environ :",
            "options": [
              "$45\\ \\mathrm{g/mol}$",
              "$59\\ \\mathrm{g/mol}$",
              "$73\\ \\mathrm{g/mol}$",
              "$31\\ \\mathrm{g/mol}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La solution de la situation d'évaluation donne M = 59 g/mol à partir du pourcentage d'azote."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Trouver le nombre de carbones",
          "stepTheme": "Trouver le nombre de carbones",
          "stepBadge": "Trouver le nombre de carbones",
          "paragraphText": "Pour une amine primaire saturée, $M = 14x + 17$.\nAvec M = 59 g/mol, on obtient x = 3, donc la formule brute $\\mathrm{C_3H_9N}$.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p06_q2",
            "type": "mcq",
            "prompt": "Une amine primaire saturée a une masse molaire de $59\\ \\mathrm{g/mol}$. Sa formule brute est :",
            "options": [
              "$\\mathrm{C_2H_7N}$",
              "$\\mathrm{C_4H_{11}N}$",
              "$\\mathrm{C_3H_9N}$",
              "$\\mathrm{C_3H_7N}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On résout $14x + 17 = 59$, soit x = 3 ; la formule $\\mathrm{C_xH_{2x+3}N}$ donne alors $\\mathrm{C_3H_9N}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Écrire la formule générale d'une amine primaire",
          "stepTheme": "Écrire la formule générale d'une amine primaire",
          "stepBadge": "Écrire la formule générale d'une amine primaire",
          "paragraphText": "Une amine primaire saturée s'écrit $\\mathrm{C_xH_{2x+1}-NH_2}$.\nEn comptant tous les hydrogènes, sa formule brute est $\\mathrm{C_xH_{2x+3}N}$ : le nombre d'hydrogènes vaut y = 2x + 3.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p06_q3",
            "type": "mcq",
            "prompt": "Pour une amine primaire saturée $\\mathrm{C_xH_yN}$, le nombre y d'atomes d'hydrogène vaut :",
            "options": [
              "y = 2x + 1",
              "y = 2x + 3",
              "y = 2x",
              "y = 2x + 2"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le résultat de l'exercice 3 du résumé : y = 2x + 3, en comptant les deux hydrogènes du groupe –NH₂."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les deux amines primaires en C₃",
          "stepTheme": "Les deux amines primaires en C₃",
          "stepBadge": "Les deux amines primaires en C₃",
          "paragraphText": "Pour $\\mathrm{C_3H_9N}$, les amines primaires possibles sont la propan-1-amine (ou propylamine), CH₃–CH₂–CH₂–NH₂, et la propan-2-amine, CH₃–CH(NH₂)–CH₃.\nLa première a une chaîne linéaire, la seconde une chaîne ramifiée.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p06_q4",
            "type": "mcq",
            "prompt": "Parmi les composés suivants, lequel est une amine primaire de formule $\\mathrm{C_3H_9N}$ à chaîne ramifiée ?",
            "options": [
              "La propan-1-amine",
              "La N-méthyléthylamine",
              "La triméthylamine",
              "La propan-2-amine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propan-2-amine est primaire (–NH₂) et sa chaîne est ramifiée ; la N-méthyléthylamine est secondaire et la triméthylamine tertiaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ramifiée ne veut pas dire secondaire",
          "stepTheme": "Ramifiée ne veut pas dire secondaire",
          "stepBadge": "Ramifiée ne veut pas dire secondaire",
          "paragraphText": "Piège : confondre la ramification de la chaîne carbonée avec la classe de l'amine.\nLa propan-2-amine a une chaîne ramifiée mais reste une amine primaire, car son azote ne porte qu'un seul groupement.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p06_q5",
            "type": "mcq",
            "prompt": "La propan-2-amine, CH₃–CH(NH₂)–CH₃, est une amine :",
            "options": [
              "Primaire",
              "Secondaire",
              "Tertiaire",
              "Ce n'est pas une amine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Son azote ne porte qu'un seul groupement alkyle : c'est une amine primaire, malgré la chaîne ramifiée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'amine secondaire de l'exercice 5",
          "stepTheme": "L'amine secondaire de l'exercice 5",
          "stepBadge": "L'amine secondaire de l'exercice 5",
          "paragraphText": "Dans l'exercice 5 du résumé, une amine secondaire contient 61,02 % de carbone et 15,25 % d'hydrogène.\nLa solution trouve la formule $\\mathrm{C_3H_9N}$ et identifie la N-méthyléthylamine, CH₃–CH₂–NH–CH₃.",
          "exercise": {
            "id": "terminale_c_chimie_l03_amines_p06_q6",
            "type": "mcq",
            "prompt": "L'amine secondaire de formule $\\mathrm{C_3H_9N}$ identifiée dans l'exercice 5 est :",
            "options": [
              "La propan-1-amine",
              "La N-méthyléthylamine",
              "La triméthylamine",
              "La propan-2-amine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la solution de l'exercice 5 : CH₃–CH₂–NH–CH₃, la N-méthyléthylamine, amine secondaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_amines_p06_q1",
          "type": "mcq",
          "prompt": "Une amine contient 23,7 % d'azote en masse et un seul atome d'azote par molécule. Sa masse molaire vaut environ :",
          "options": [
            "$45\\ \\mathrm{g/mol}$",
            "$59\\ \\mathrm{g/mol}$",
            "$73\\ \\mathrm{g/mol}$",
            "$31\\ \\mathrm{g/mol}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La solution de la situation d'évaluation donne M = 59 g/mol à partir du pourcentage d'azote."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p06_q2",
          "type": "mcq",
          "prompt": "Une amine primaire saturée a une masse molaire de $59\\ \\mathrm{g/mol}$. Sa formule brute est :",
          "options": [
            "$\\mathrm{C_2H_7N}$",
            "$\\mathrm{C_4H_{11}N}$",
            "$\\mathrm{C_3H_9N}$",
            "$\\mathrm{C_3H_7N}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On résout $14x + 17 = 59$, soit x = 3 ; la formule $\\mathrm{C_xH_{2x+3}N}$ donne alors $\\mathrm{C_3H_9N}$."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p06_q3",
          "type": "mcq",
          "prompt": "Pour une amine primaire saturée $\\mathrm{C_xH_yN}$, le nombre y d'atomes d'hydrogène vaut :",
          "options": [
            "y = 2x + 1",
            "y = 2x + 3",
            "y = 2x",
            "y = 2x + 2"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le résultat de l'exercice 3 du résumé : y = 2x + 3, en comptant les deux hydrogènes du groupe –NH₂."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p06_q4",
          "type": "mcq",
          "prompt": "Parmi les composés suivants, lequel est une amine primaire de formule $\\mathrm{C_3H_9N}$ à chaîne ramifiée ?",
          "options": [
            "La propan-1-amine",
            "La N-méthyléthylamine",
            "La triméthylamine",
            "La propan-2-amine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propan-2-amine est primaire (–NH₂) et sa chaîne est ramifiée ; la N-méthyléthylamine est secondaire et la triméthylamine tertiaire."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p06_q5",
          "type": "mcq",
          "prompt": "La propan-2-amine, CH₃–CH(NH₂)–CH₃, est une amine :",
          "options": [
            "Primaire",
            "Secondaire",
            "Tertiaire",
            "Ce n'est pas une amine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Son azote ne porte qu'un seul groupement alkyle : c'est une amine primaire, malgré la chaîne ramifiée."
        },
        {
          "id": "terminale_c_chimie_l03_amines_p06_q6",
          "type": "mcq",
          "prompt": "L'amine secondaire de formule $\\mathrm{C_3H_9N}$ identifiée dans l'exercice 5 est :",
          "options": [
            "La propan-1-amine",
            "La N-méthyléthylamine",
            "La triméthylamine",
            "La propan-2-amine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la solution de l'exercice 5 : CH₃–CH₂–NH–CH₃, la N-méthyléthylamine, amine secondaire."
        }
      ]
    }
  ]
};
