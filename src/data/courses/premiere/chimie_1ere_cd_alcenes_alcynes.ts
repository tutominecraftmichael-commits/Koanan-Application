import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Hydrocarbures insaturés : alcènes et alcynes » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Hydrocarbures insaturés : alcènes et alcynes » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const CHIMIE_1ERE_CD_L02_ALCENES_ALCYNES: CurriculumChapter = {
  "id": "premiere_c_chimie_l02_alcenes_alcynes",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 2,
  "title": "Leçon 2 : Hydrocarbures insaturés : alcènes et alcynes",
  "summary": "Les alcènes portent une double liaison et les alcynes une triple liaison : on étudie leur structure, leur nomenclature et leurs isoméries, puis leurs combustions, leurs réactions d'addition et la polymérisation.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Hydrocarbures insaturés : alcènes et alcynes » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_chimie_l02_alcenes_alcynes_p01",
      "order": 1,
      "title": "Structure et nomenclature des alcènes",
      "summary": "Molécule plane de l'éthylène, carbone trigonal, formule $\\mathrm{C_nH_{2n}}$ et suffixe « ène ».",
      "conceptExplanation": "L'éthylène, ou éthène, est le plus simple des alcènes. Sa formule brute est $\\mathrm{C_2H_4}$ et sa formule semi-développée $\\mathrm{CH_2=CH_2}$.\nSa molécule est plane : chaque atome de carbone est lié à trois autres atomes, le carbone est dit trigonal, avec des angles de 120°. Du fait de la double liaison, la rotation autour de la liaison carbone-carbone est impossible, ce qui rend la molécule très rigide.\nLes alcènes sont des hydrocarbures possédant une double liaison carbone-carbone. Leur formule brute générale est $\\mathrm{C_nH_{2n}}$.\nPour nommer un alcène, la chaîne principale est la plus longue comportant la double liaison ; la présence de la double liaison est indiquée par le suffixe « ène » précédé d'un indice de position, et la numérotation donne les indices les plus petits possibles aux carbones de la double liaison. Exemples : but-1-ène, but-2-ène, 3-méthylbut-1-ène, 3-éthylpent-2-ène.",
      "keyRule": "Alcène = double liaison, carbone trigonal, molécule plane et rigide, formule $\\mathrm{C_nH_{2n}}$ et suffixe « ène ».",
      "formulas": [
        {
          "name": "Formule brute générale des alcènes",
          "formula": "\\mathrm{C_nH_{2n}}",
          "note": "Une double liaison C=C."
        },
        {
          "name": "Éthylène (éthène)",
          "formula": "\\mathrm{CH_2=CH_2}",
          "note": "Le plus simple des alcènes, C₂H₄."
        }
      ],
      "workedExample": {
        "title": "Nommer l'alcène CH₃–CH=CH–CH₃",
        "statement": "Donne le nom de l'alcène de formule semi-développée CH₃–CH=CH–CH₃, exemple du document.",
        "methodSteps": [
          "La chaîne principale compte 4 carbones et contient la double liaison : racine « but ».",
          "La double liaison commence au carbone n°2 dans le sens de numérotation le plus favorable.",
          "On ajoute l'indice de position et le suffixe « ène »."
        ],
        "conclusion": "Le composé est le but-2-ène."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un alcène",
          "stepTheme": "Définition d'un alcène",
          "stepBadge": "Définition d'un alcène",
          "paragraphText": "• Alcène : hydrocarbure possédant une double liaison carbone-carbone.\nCette double liaison est la marque de l'insaturation des alcènes.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q1",
            "type": "mcq",
            "prompt": "Un alcène est un hydrocarbure qui possède :",
            "options": [
              "Uniquement des liaisons simples",
              "Une triple liaison carbone-carbone",
              "Une double liaison carbone-carbone",
              "Un atome d'oxygène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par définition, les alcènes possèdent une double liaison C=C."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La molécule d'éthylène est plane et rigide",
          "stepTheme": "La molécule d'éthylène est plane et rigide",
          "stepBadge": "La molécule d'éthylène est plane et rigide",
          "paragraphText": "L'éthylène est le plus simple des alcènes, de formule brute $\\mathrm{C_2H_4}$.\nSa molécule est plane et, du fait de la double liaison, la rotation autour de la liaison carbone-carbone est impossible : la molécule est très rigide.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q2",
            "type": "mcq",
            "prompt": "Du fait de la double liaison, la molécule d'éthylène est :",
            "options": [
              "Libre de tourner autour de la liaison C–C",
              "Plane et très rigide",
              "Tétraédrique",
              "Linéaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document indique que la molécule est plane et que la rotation autour de la double liaison est impossible."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le carbone trigonal",
          "stepTheme": "Le carbone trigonal",
          "stepBadge": "Le carbone trigonal",
          "paragraphText": "Dans l'éthylène, chaque atome de carbone est lié à trois autres atomes.\nLe carbone est alors dit trigonal, avec des angles de liaison de 120°.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q3",
            "type": "mcq",
            "prompt": "Dans l'éthylène, le carbone est dit trigonal parce qu'il est lié à :",
            "options": [
              "Quatre autres atomes",
              "Deux autres atomes",
              "Trois autres atomes",
              "Un seul autre atome"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque carbone de l'éthylène est lié à trois atomes : l'autre carbone et deux hydrogènes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La formule générale des alcènes",
          "stepTheme": "La formule générale des alcènes",
          "stepBadge": "La formule générale des alcènes",
          "paragraphText": "La formule brute générale des alcènes est $\\mathrm{C_nH_{2n}}$.\nElle contient deux hydrogènes de moins que l'alcane correspondant, à cause de la double liaison.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q4",
            "type": "mcq",
            "prompt": "Un alcène comportant 5 atomes de carbone a pour formule brute :",
            "options": [
              "$\\mathrm{C_5H_{12}}$",
              "$\\mathrm{C_5H_{10}}$",
              "$\\mathrm{C_5H_8}$",
              "$\\mathrm{C_5H_5}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $\\mathrm{C_nH_{2n}}$ et $n = 5$, on obtient $\\mathrm{C_5H_{10}}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Numéroter à partir de la double liaison",
          "stepTheme": "Numéroter à partir de la double liaison",
          "stepBadge": "Numéroter à partir de la double liaison",
          "paragraphText": "Piège : numéroter la chaîne sans tenir compte de la double liaison peut donner un indice trop grand.\nLa numérotation doit donner les indices les plus petits possibles aux carbones qui portent la double liaison.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q5",
            "type": "mcq",
            "prompt": "Pour nommer un alcène, la numérotation de la chaîne principale doit donner :",
            "options": [
              "Les plus grands indices à la double liaison",
              "Le plus petit indice au groupe méthyle",
              "Les indices les plus petits possibles aux carbones de la double liaison",
              "L'indice 1 au carbone central"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La règle du document vise les carbones trigonaux de la double liaison : indices les plus petits possibles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le but-1-ène et le but-2-ène",
          "stepTheme": "Le but-1-ène et le but-2-ène",
          "stepBadge": "Le but-1-ène et le but-2-ène",
          "paragraphText": "Les exemples du document montrent deux alcènes à 4 carbones.\nLa position de la double liaison change le nom : but-1-ène si elle commence au carbone n°1, but-2-ène si elle commence au carbone n°2.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q6",
            "type": "mcq",
            "prompt": "L'alcène CH₂=CH–CH₂–CH₃ se nomme :",
            "options": [
              "Le but-2-ène",
              "Le but-1-ène",
              "Le 3-méthylbut-1-ène",
              "Le butane"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La double liaison commence dès le carbone n°1 : c'est le but-1-ène."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q1",
          "type": "mcq",
          "prompt": "Un alcène est un hydrocarbure qui possède :",
          "options": [
            "Uniquement des liaisons simples",
            "Une triple liaison carbone-carbone",
            "Une double liaison carbone-carbone",
            "Un atome d'oxygène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par définition, les alcènes possèdent une double liaison C=C."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q2",
          "type": "mcq",
          "prompt": "Du fait de la double liaison, la molécule d'éthylène est :",
          "options": [
            "Libre de tourner autour de la liaison C–C",
            "Plane et très rigide",
            "Tétraédrique",
            "Linéaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document indique que la molécule est plane et que la rotation autour de la double liaison est impossible."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q3",
          "type": "mcq",
          "prompt": "Dans l'éthylène, le carbone est dit trigonal parce qu'il est lié à :",
          "options": [
            "Quatre autres atomes",
            "Deux autres atomes",
            "Trois autres atomes",
            "Un seul autre atome"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque carbone de l'éthylène est lié à trois atomes : l'autre carbone et deux hydrogènes."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q4",
          "type": "mcq",
          "prompt": "Un alcène comportant 5 atomes de carbone a pour formule brute :",
          "options": [
            "$\\mathrm{C_5H_{12}}$",
            "$\\mathrm{C_5H_{10}}$",
            "$\\mathrm{C_5H_8}$",
            "$\\mathrm{C_5H_5}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $\\mathrm{C_nH_{2n}}$ et $n = 5$, on obtient $\\mathrm{C_5H_{10}}$."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q5",
          "type": "mcq",
          "prompt": "Pour nommer un alcène, la numérotation de la chaîne principale doit donner :",
          "options": [
            "Les plus grands indices à la double liaison",
            "Le plus petit indice au groupe méthyle",
            "Les indices les plus petits possibles aux carbones de la double liaison",
            "L'indice 1 au carbone central"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La règle du document vise les carbones trigonaux de la double liaison : indices les plus petits possibles."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p01_q6",
          "type": "mcq",
          "prompt": "L'alcène CH₂=CH–CH₂–CH₃ se nomme :",
          "options": [
            "Le but-2-ène",
            "Le but-1-ène",
            "Le 3-méthylbut-1-ène",
            "Le butane"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La double liaison commence dès le carbone n°1 : c'est le but-1-ène."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l02_alcenes_alcynes_p02",
      "order": 2,
      "title": "Les isoméries des alcènes",
      "summary": "Isomérie de position de la double liaison et isomérie Z-E autour de la double liaison.",
      "conceptExplanation": "Les isomères de position diffèrent par la position de la double liaison dans la chaîne carbonée : le but-1-ène et le but-2-ène, tous deux $\\mathrm{C_4H_8}$, en sont l'exemple du document.\nDeux isomères Z et E diffèrent par la disposition des atomes dans l'espace autour de la double liaison.\nPour le but-2-ène, l'isomère (Z), aussi appelé cis, a ses deux groupes méthyle du même côté de la double liaison ; l'isomère (E), aussi appelé trans, les a de côtés opposés.\nL'activité d'application du document nomme ainsi un (E)-hex-2-ène et un (Z)-hex-2-ène selon la disposition des groupes autour de la double liaison.",
      "keyRule": "Même formule brute : si seule la place de la double liaison change, c'est une isomérie de position ; si c'est la disposition dans l'espace autour d'elle, c'est une isomérie Z-E.",
      "formulas": [
        {
          "name": "But-1-ène et but-2-ène",
          "formula": "\\mathrm{C_4H_8}",
          "note": "Isomères de position de la double liaison."
        }
      ],
      "workedExample": {
        "title": "Distinguer (Z) et (E) pour le but-2-ène",
        "statement": "Pour le but-2-ène, précise la disposition des deux groupes méthyle dans l'isomère (Z) et dans l'isomère (E).",
        "methodSteps": [
          "On regarde la disposition des groupes autour de la double liaison, qui ne permet aucune rotation.",
          "Si les deux méthyles sont du même côté, c'est la disposition cis.",
          "S'ils sont de côtés opposés, c'est la disposition trans."
        ],
        "conclusion": "L'isomère (Z) est le cis-but-2-ène et l'isomère (E) est le trans-but-2-ène, comme l'indique le document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'isomérie de position",
          "stepTheme": "L'isomérie de position",
          "stepBadge": "L'isomérie de position",
          "paragraphText": "• Isomères de position : isomères qui diffèrent par la position de la double liaison dans la chaîne carbonée.\nLe but-1-ène et le but-2-ène illustrent cette isomérie.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q1",
            "type": "mcq",
            "prompt": "Les isomères de position diffèrent par :",
            "options": [
              "Leur formule brute",
              "La position de la double liaison dans la chaîne",
              "Le nombre d'atomes de carbone",
              "La présence d'un cycle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du document, illustrée par le but-1-ène et le but-2-ène."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'isomérie Z-E",
          "stepTheme": "L'isomérie Z-E",
          "stepBadge": "L'isomérie Z-E",
          "paragraphText": "• Isomères Z et E : isomères qui diffèrent par la disposition des atomes dans l'espace autour de la double liaison.\nCette isomérie existe parce que la rotation autour de la double liaison est impossible.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q2",
            "type": "mcq",
            "prompt": "Deux isomères Z et E diffèrent par :",
            "options": [
              "La longueur de leur chaîne",
              "Leur formule brute",
              "La disposition des atomes dans l'espace autour de la double liaison",
              "La position d'un groupe méthyle en bout de chaîne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La définition porte sur la géométrie autour de la double liaison, pas sur la formule brute, identique pour les deux isomères."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le (Z)-but-2-ène ou cis",
          "stepTheme": "Le (Z)-but-2-ène ou cis",
          "stepBadge": "Le (Z)-but-2-ène ou cis",
          "paragraphText": "Dans le (Z)-but-2-ène, les deux groupes méthyle sont du même côté de la double liaison.\nLe document donne son autre nom : cis-but-2-ène.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q3",
            "type": "mcq",
            "prompt": "Le (Z)-but-2-ène est aussi appelé :",
            "options": [
              "Trans-but-2-ène",
              "Cis-but-2-ène",
              "But-1-ène",
              "2-méthylpropène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Z correspond à la disposition cis : les méthyles sont du même côté."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le (E)-but-2-ène ou trans",
          "stepTheme": "Le (E)-but-2-ène ou trans",
          "stepBadge": "Le (E)-but-2-ène ou trans",
          "paragraphText": "Dans le (E)-but-2-ène, les deux groupes méthyle sont de côtés opposés par rapport à la double liaison.\nLe document donne son autre nom : trans-but-2-ène.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q4",
            "type": "mcq",
            "prompt": "Le (E)-but-2-ène est aussi appelé :",
            "options": [
              "Cis-but-2-ène",
              "But-2-yne",
              "Trans-but-2-ène",
              "Cyclobutane"
            ],
            "correctAnswerIndex": 2,
            "explanation": "E correspond à la disposition trans : les méthyles sont de côtés opposés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Position ou géométrie ?",
          "stepTheme": "Position ou géométrie ?",
          "stepBadge": "Position ou géométrie ?",
          "paragraphText": "Piège : le but-1-ène et le but-2-ène ne sont pas des isomères Z-E l'un de l'autre.\nIls diffèrent par la place de la double liaison : ce sont des isomères de position.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q5",
            "type": "mcq",
            "prompt": "Le but-1-ène et le but-2-ène sont des isomères :",
            "options": [
              "Z et E",
              "De position",
              "De chaîne seulement, sans rapport avec la double liaison",
              "Ce ne sont pas des isomères"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Même formule brute $\\mathrm{C_4H_8}$, mais double liaison en position 1 ou 2 : isomérie de position."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les hex-2-ènes de l'activité d'application",
          "stepTheme": "Les hex-2-ènes de l'activité d'application",
          "stepBadge": "Les hex-2-ènes de l'activité d'application",
          "paragraphText": "L'activité d'application du document demande de nommer deux molécules d'hex-2-ène et de préciser l'isomère (Z) et l'isomère (E).\nLa solution distingue le (E)-hex-2-ène du (Z)-hex-2-ène selon la disposition des groupes autour de la double liaison.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q6",
            "type": "mcq",
            "prompt": "Dans l'activité d'application, les deux molécules nommées sont :",
            "options": [
              "Le (E)-hex-2-ène et le (Z)-hex-2-ène",
              "Deux isomères de position",
              "L'hex-1-ène et l'hex-3-ène",
              "Un alcène et un alcyne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La solution du document nomme un (E)-hex-2-ène et un (Z)-hex-2-ène : même position de double liaison, géométries différentes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q1",
          "type": "mcq",
          "prompt": "Les isomères de position diffèrent par :",
          "options": [
            "Leur formule brute",
            "La position de la double liaison dans la chaîne",
            "Le nombre d'atomes de carbone",
            "La présence d'un cycle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du document, illustrée par le but-1-ène et le but-2-ène."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q2",
          "type": "mcq",
          "prompt": "Deux isomères Z et E diffèrent par :",
          "options": [
            "La longueur de leur chaîne",
            "Leur formule brute",
            "La disposition des atomes dans l'espace autour de la double liaison",
            "La position d'un groupe méthyle en bout de chaîne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La définition porte sur la géométrie autour de la double liaison, pas sur la formule brute, identique pour les deux isomères."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q3",
          "type": "mcq",
          "prompt": "Le (Z)-but-2-ène est aussi appelé :",
          "options": [
            "Trans-but-2-ène",
            "Cis-but-2-ène",
            "But-1-ène",
            "2-méthylpropène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Z correspond à la disposition cis : les méthyles sont du même côté."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q4",
          "type": "mcq",
          "prompt": "Le (E)-but-2-ène est aussi appelé :",
          "options": [
            "Cis-but-2-ène",
            "But-2-yne",
            "Trans-but-2-ène",
            "Cyclobutane"
          ],
          "correctAnswerIndex": 2,
          "explanation": "E correspond à la disposition trans : les méthyles sont de côtés opposés."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q5",
          "type": "mcq",
          "prompt": "Le but-1-ène et le but-2-ène sont des isomères :",
          "options": [
            "Z et E",
            "De position",
            "De chaîne seulement, sans rapport avec la double liaison",
            "Ce ne sont pas des isomères"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Même formule brute $\\mathrm{C_4H_8}$, mais double liaison en position 1 ou 2 : isomérie de position."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p02_q6",
          "type": "mcq",
          "prompt": "Dans l'activité d'application, les deux molécules nommées sont :",
          "options": [
            "Le (E)-hex-2-ène et le (Z)-hex-2-ène",
            "Deux isomères de position",
            "L'hex-1-ène et l'hex-3-ène",
            "Un alcène et un alcyne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La solution du document nomme un (E)-hex-2-ène et un (Z)-hex-2-ène : même position de double liaison, géométries différentes."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l02_alcenes_alcynes_p03",
      "order": 3,
      "title": "Structure et nomenclature des alcynes",
      "summary": "Molécule linéaire de l'acétylène, carbone digonal, formule $\\mathrm{C_nH_{2n-2}}$ et suffixe « yne ».",
      "conceptExplanation": "L'acétylène, ou éthyne, est le plus simple des alcynes. C'est un corps gazeux de formule brute $\\mathrm{C_2H_2}$, de formule semi-développée HC≡CH.\nChaque atome de carbone y est lié à deux autres atomes : le carbone est dit digonal. La molécule est linéaire, avec un angle de 180°, et la rotation autour de la liaison carbone-carbone est impossible.\nLes hydrocarbures comportant une triple liaison carbone-carbone forment la famille des alcynes. Leur formule brute générale est $\\mathrm{C_nH_{2n-2}}$.\nLa nomenclature des alcynes est semblable à celle des alcènes, le suffixe « ène » étant remplacé par « yne ». Exemples : prop-1-yne, but-1-yne, but-2-yne, 4-méthylpent-2-yne. Comme les alcènes, les alcynes présentent une isomérie de chaîne et une isomérie de position.",
      "keyRule": "Alcyne = triple liaison, carbone digonal, molécule linéaire, formule $\\mathrm{C_nH_{2n-2}}$ et suffixe « yne ».",
      "formulas": [
        {
          "name": "Formule brute générale des alcynes",
          "formula": "\\mathrm{C_nH_{2n-2}}",
          "note": "Une triple liaison C≡C."
        },
        {
          "name": "Acétylène (éthyne)",
          "formula": "\\mathrm{HC\\equiv CH}",
          "note": "Le plus simple des alcynes, C₂H₂, gazeux."
        }
      ],
      "workedExample": {
        "title": "Nommer l'alcyne de l'activité d'application",
        "statement": "Nomme l'alcyne CH₃–CH₂–C≡C–CH(CH₃)–CH₃ de l'activité d'application du document.",
        "methodSteps": [
          "La chaîne principale contenant la triple liaison compte 6 carbones : racine « hex ».",
          "La triple liaison commence au carbone n°3, et un méthyle est porté par le carbone n°2 dans le sens donnant les plus petits indices.",
          "On cite la ramification, puis la racine avec l'indice de la triple liaison et le suffixe « yne »."
        ],
        "conclusion": "La solution du document donne le 2-méthylhex-3-yne."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un alcyne",
          "stepTheme": "Définition d'un alcyne",
          "stepBadge": "Définition d'un alcyne",
          "paragraphText": "• Alcyne : hydrocarbure comportant une triple liaison carbone-carbone.\nL'acétylène est le premier représentant de cette famille.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q1",
            "type": "mcq",
            "prompt": "Les alcynes sont les hydrocarbures qui comportent :",
            "options": [
              "Une double liaison C=C",
              "Uniquement des liaisons simples",
              "Une triple liaison carbone-carbone",
              "Un groupe hydroxyle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la présence de la triple liaison C≡C qui définit les alcynes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La molécule d'acétylène est linéaire",
          "stepTheme": "La molécule d'acétylène est linéaire",
          "stepBadge": "La molécule d'acétylène est linéaire",
          "paragraphText": "L'acétylène est un gaz de formule brute $\\mathrm{C_2H_2}$.\nSa molécule est linéaire : les quatre atomes sont alignés, avec un angle de 180°.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q2",
            "type": "mcq",
            "prompt": "La molécule d'acétylène a une géométrie :",
            "options": [
              "Tétraédrique",
              "Plane triangulaire",
              "Coudée à 120°",
              "Linéaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le document décrit une molécule linéaire, conséquence du carbone digonal."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le carbone digonal",
          "stepTheme": "Le carbone digonal",
          "stepBadge": "Le carbone digonal",
          "paragraphText": "Dans l'acétylène, chaque atome de carbone est lié à deux autres atomes.\nLe carbone est alors dit digonal, et la rotation autour de la liaison carbone-carbone est impossible.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q3",
            "type": "mcq",
            "prompt": "Dans l'acétylène, le carbone est dit digonal parce qu'il est lié à :",
            "options": [
              "Quatre autres atomes",
              "Trois autres atomes",
              "Deux autres atomes",
              "Aucun autre atome"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Digonal signifie lié à deux atomes : l'autre carbone et un hydrogène."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La formule générale des alcynes",
          "stepTheme": "La formule générale des alcynes",
          "stepBadge": "La formule générale des alcynes",
          "paragraphText": "La formule brute générale des alcynes est $\\mathrm{C_nH_{2n-2}}$.\nLa triple liaison fait perdre quatre hydrogènes par rapport à l'alcane correspondant.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q4",
            "type": "mcq",
            "prompt": "Un alcyne comportant 4 atomes de carbone a pour formule brute :",
            "options": [
              "$\\mathrm{C_4H_{10}}$",
              "$\\mathrm{C_4H_8}$",
              "$\\mathrm{C_4H_4}$",
              "$\\mathrm{C_4H_6}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec $\\mathrm{C_nH_{2n-2}}$ et $n = 4$, on obtient $\\mathrm{C_4H_6}$, celle du butyne."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le suffixe des alcynes",
          "stepTheme": "Le suffixe des alcynes",
          "stepBadge": "Le suffixe des alcynes",
          "paragraphText": "Piège : garder le suffixe « ène » pour un alcyne confond les deux familles.\nLa nomenclature des alcynes remplace le suffixe « ène » par « yne », le reste des règles étant semblable.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q5",
            "type": "mcq",
            "prompt": "Le suffixe caractéristique des alcynes est :",
            "options": [
              "« ane »",
              "« ène »",
              "« yne »",
              "« ol »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Prop-1-yne, but-2-yne : le suffixe « yne » signale la triple liaison."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le but-2-yne",
          "stepTheme": "Le but-2-yne",
          "stepBadge": "Le but-2-yne",
          "paragraphText": "Le document donne comme exemple d'alcyne la molécule CH₃–C≡C–CH₃.\nSa triple liaison, au centre d'une chaîne de 4 carbones, commence au carbone n°2.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q6",
            "type": "mcq",
            "prompt": "La molécule CH₃–C≡C–CH₃ se nomme :",
            "options": [
              "Le but-2-yne",
              "Le but-1-yne",
              "Le but-2-ène",
              "Le prop-1-yne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Quatre carbones, triple liaison commençant en position 2 : but-2-yne."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q1",
          "type": "mcq",
          "prompt": "Les alcynes sont les hydrocarbures qui comportent :",
          "options": [
            "Une double liaison C=C",
            "Uniquement des liaisons simples",
            "Une triple liaison carbone-carbone",
            "Un groupe hydroxyle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la présence de la triple liaison C≡C qui définit les alcynes."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q2",
          "type": "mcq",
          "prompt": "La molécule d'acétylène a une géométrie :",
          "options": [
            "Tétraédrique",
            "Plane triangulaire",
            "Coudée à 120°",
            "Linéaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le document décrit une molécule linéaire, conséquence du carbone digonal."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q3",
          "type": "mcq",
          "prompt": "Dans l'acétylène, le carbone est dit digonal parce qu'il est lié à :",
          "options": [
            "Quatre autres atomes",
            "Trois autres atomes",
            "Deux autres atomes",
            "Aucun autre atome"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Digonal signifie lié à deux atomes : l'autre carbone et un hydrogène."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q4",
          "type": "mcq",
          "prompt": "Un alcyne comportant 4 atomes de carbone a pour formule brute :",
          "options": [
            "$\\mathrm{C_4H_{10}}$",
            "$\\mathrm{C_4H_8}$",
            "$\\mathrm{C_4H_4}$",
            "$\\mathrm{C_4H_6}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec $\\mathrm{C_nH_{2n-2}}$ et $n = 4$, on obtient $\\mathrm{C_4H_6}$, celle du butyne."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q5",
          "type": "mcq",
          "prompt": "Le suffixe caractéristique des alcynes est :",
          "options": [
            "« ane »",
            "« ène »",
            "« yne »",
            "« ol »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Prop-1-yne, but-2-yne : le suffixe « yne » signale la triple liaison."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p03_q6",
          "type": "mcq",
          "prompt": "La molécule CH₃–C≡C–CH₃ se nomme :",
          "options": [
            "Le but-2-yne",
            "Le but-1-yne",
            "Le but-2-ène",
            "Le prop-1-yne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Quatre carbones, triple liaison commençant en position 2 : but-2-yne."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l02_alcenes_alcynes_p04",
      "order": 4,
      "title": "La combustion des alcènes et des alcynes",
      "summary": "Combustions complètes donnant dioxyde de carbone et eau, avec les équations générales des deux familles.",
      "conceptExplanation": "Lorsque le dioxygène est en quantité suffisante, la combustion des alcènes et des alcynes est complète et les produits formés sont l'eau et le dioxyde de carbone.\nPour un alcène : $\\mathrm{C_nH_{2n} + \\frac{3n}{2}\\,O_2 \\longrightarrow n\\,CO_2 + n\\,H_2O}$. Exemple : $\\mathrm{C_2H_4 + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 2\\,H_2O}$.\nPour un alcyne : $\\mathrm{C_nH_{2n-2} + \\frac{3n-1}{2}\\,O_2 \\longrightarrow n\\,CO_2 + (n-1)\\,H_2O}$. Exemple : $\\mathrm{C_2H_2 + \\frac{5}{2}\\,O_2 \\longrightarrow 2\\,CO_2 + H_2O}$.\nC'est la combustion très chaude de l'acétylène dans le dioxygène qui est utilisée dans le chalumeau soudeur de la situation d'apprentissage.",
      "keyRule": "Même produits pour les deux familles, $\\mathrm{CO_2}$ et $\\mathrm{H_2O}$, mais pas les mêmes coefficients : l'alcyne, plus pauvre en hydrogène, forme une molécule d'eau de moins.",
      "formulas": [
        {
          "name": "Combustion complète d'un alcène",
          "formula": "\\mathrm{C_nH_{2n} + \\frac{3n}{2}\\,O_2 \\longrightarrow n\\,CO_2 + n\\,H_2O}",
          "note": "Exemple : éthylène avec 3 O₂."
        },
        {
          "name": "Combustion complète d'un alcyne",
          "formula": "\\mathrm{C_nH_{2n-2} + \\frac{3n-1}{2}\\,O_2 \\longrightarrow n\\,CO_2 + (n-1)\\,H_2O}",
          "note": "Exemple : acétylène avec 5/2 O₂."
        }
      ],
      "workedExample": {
        "title": "Équation de la combustion complète de l'éthylène",
        "statement": "Écris l'équation-bilan de la combustion complète de l'éthylène à partir de l'équation générale des alcènes.",
        "methodSteps": [
          "L'éthylène correspond à $n = 2$ dans $\\mathrm{C_nH_{2n}}$.",
          "Le coefficient du dioxygène est $\\frac{3 \\times 2}{2}$, soit 3.",
          "On forme 2 molécules de dioxyde de carbone et 2 molécules d'eau."
        ],
        "conclusion": "L'équation est $\\mathrm{C_2H_4 + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 2\\,H_2O}$, celle du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les produits d'une combustion complète",
          "stepTheme": "Les produits d'une combustion complète",
          "stepBadge": "Les produits d'une combustion complète",
          "paragraphText": "• Combustion complète : combustion avec un dioxygène en quantité suffisante.\nPour les alcènes et les alcynes, les seuls produits sont l'eau et le dioxyde de carbone.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q1",
            "type": "mcq",
            "prompt": "La combustion complète d'un alcène produit :",
            "options": [
              "De l'eau et du dioxyde de carbone",
              "Du carbone et du monoxyde de carbone",
              "Un alcane et de l'eau",
              "Du dihydrogène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document donne pour les deux familles les mêmes produits : $\\mathrm{H_2O}$ et $\\mathrm{CO_2}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'équation générale des alcènes",
          "stepTheme": "L'équation générale des alcènes",
          "stepBadge": "L'équation générale des alcènes",
          "paragraphText": "Pour un alcène, le coefficient du dioxygène est $\\frac{3n}{2}$.\nIl se forme autant de molécules d'eau que de molécules de dioxyde de carbone, soit $n$ de chaque.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q2",
            "type": "mcq",
            "prompt": "Dans la combustion complète d'un alcène $\\mathrm{C_nH_{2n}}$, le nombre de molécules d'eau formées est :",
            "options": [
              "$n-1$",
              "$n+1$",
              "$n$",
              "$2n$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'équation du document donne $n\\,\\mathrm{CO_2}$ et $n\\,\\mathrm{H_2O}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Équilibrer la combustion de l'acétylène",
          "stepTheme": "Équilibrer la combustion de l'acétylène",
          "stepBadge": "Équilibrer la combustion de l'acétylène",
          "paragraphText": "Méthode : appliquer l'équation générale des alcynes avec $n = 2$.\nLe coefficient du dioxygène est $\\frac{3 \\times 2 - 1}{2}$, soit $\\frac{5}{2}$, et il se forme une seule molécule d'eau.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q3",
            "type": "mcq",
            "prompt": "L'équation-bilan de la combustion complète de l'acétylène est :",
            "options": [
              "$\\mathrm{C_2H_2 + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 2\\,H_2O}$",
              "$\\mathrm{C_2H_2 + \\frac{5}{2}\\,O_2 \\longrightarrow 2\\,CO_2 + H_2O}$",
              "$\\mathrm{C_2H_2 + 2\\,O_2 \\longrightarrow 2\\,CO_2 + H_2O}$",
              "$\\mathrm{C_2H_2 + \\frac{3}{2}\\,O_2 \\longrightarrow 2\\,CO_2 + H_2O}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bilan des oxygènes exige 5 atomes d'oxygène à gauche : 4 dans les deux $\\mathrm{CO_2}$ et 1 dans l'eau, soit $\\frac{5}{2}\\,\\mathrm{O_2}$. Avec seulement $2\\,\\mathrm{O_2}$, l'équation ne serait pas équilibrée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'eau formée par un alcyne",
          "stepTheme": "L'eau formée par un alcyne",
          "stepBadge": "L'eau formée par un alcyne",
          "paragraphText": "Pour un alcyne, l'équation générale donne $(n-1)$ molécules d'eau.\nC'est une molécule de moins que pour l'alcène de même nombre de carbones, car l'alcyne contient deux hydrogènes de moins.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q4",
            "type": "mcq",
            "prompt": "Dans la combustion complète d'un alcyne $\\mathrm{C_nH_{2n-2}}$, le nombre de molécules d'eau formées est :",
            "options": [
              "$n+1$",
              "$n-1$",
              "$2n-2$",
              "$n$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'équation générale des alcynes du document produit $(n-1)\\,\\mathrm{H_2O}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas appliquer l'équation des alcanes",
          "stepTheme": "Ne pas appliquer l'équation des alcanes",
          "stepBadge": "Ne pas appliquer l'équation des alcanes",
          "paragraphText": "Piège : réutiliser l'équation de combustion des alcanes pour un alcène ou un alcyne fausse les coefficients.\nChaque famille a son équation générale, liée à sa formule brute.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q5",
            "type": "mcq",
            "prompt": "Le coefficient du dioxygène dans la combustion complète d'un alcène $\\mathrm{C_nH_{2n}}$ est :",
            "options": [
              "$\\frac{3n+1}{2}$",
              "$\\frac{3n-1}{2}$",
              "$3n$",
              "$\\frac{3n}{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour les alcènes, le coefficient est $\\frac{3n}{2}$ ; $\\frac{3n+1}{2}$ est celui des alcanes et $\\frac{3n-1}{2}$ celui des alcynes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le chalumeau à acétylène",
          "stepTheme": "Le chalumeau à acétylène",
          "stepBadge": "Le chalumeau à acétylène",
          "paragraphText": "La situation d'apprentissage décrit un chalumeau soudeur alimenté par une bouteille d'acétylène et une bouteille de dioxygène.\nLa flamme bleue produite par la combustion de l'acétylène est très chaude : elle fait fondre le métal et permet les soudures.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q6",
            "type": "mcq",
            "prompt": "Dans la situation d'apprentissage, la flamme du chalumeau provient de la combustion :",
            "options": [
              "Du méthane dans l'air",
              "De l'acétylène dans le dioxygène",
              "Du propane dans le dichlore",
              "De l'éthylène dans l'eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la combustion de l'acétylène, un alcyne, dans le dioxygène qui produit la flamme très chaude du chalumeau."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q1",
          "type": "mcq",
          "prompt": "La combustion complète d'un alcène produit :",
          "options": [
            "De l'eau et du dioxyde de carbone",
            "Du carbone et du monoxyde de carbone",
            "Un alcane et de l'eau",
            "Du dihydrogène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document donne pour les deux familles les mêmes produits : $\\mathrm{H_2O}$ et $\\mathrm{CO_2}$."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q2",
          "type": "mcq",
          "prompt": "Dans la combustion complète d'un alcène $\\mathrm{C_nH_{2n}}$, le nombre de molécules d'eau formées est :",
          "options": [
            "$n-1$",
            "$n+1$",
            "$n$",
            "$2n$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'équation du document donne $n\\,\\mathrm{CO_2}$ et $n\\,\\mathrm{H_2O}$."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q3",
          "type": "mcq",
          "prompt": "L'équation-bilan de la combustion complète de l'acétylène est :",
          "options": [
            "$\\mathrm{C_2H_2 + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 2\\,H_2O}$",
            "$\\mathrm{C_2H_2 + \\frac{5}{2}\\,O_2 \\longrightarrow 2\\,CO_2 + H_2O}$",
            "$\\mathrm{C_2H_2 + 2\\,O_2 \\longrightarrow 2\\,CO_2 + H_2O}$",
            "$\\mathrm{C_2H_2 + \\frac{3}{2}\\,O_2 \\longrightarrow 2\\,CO_2 + H_2O}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bilan des oxygènes exige 5 atomes d'oxygène à gauche : 4 dans les deux $\\mathrm{CO_2}$ et 1 dans l'eau, soit $\\frac{5}{2}\\,\\mathrm{O_2}$. Avec seulement $2\\,\\mathrm{O_2}$, l'équation ne serait pas équilibrée."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q4",
          "type": "mcq",
          "prompt": "Dans la combustion complète d'un alcyne $\\mathrm{C_nH_{2n-2}}$, le nombre de molécules d'eau formées est :",
          "options": [
            "$n+1$",
            "$n-1$",
            "$2n-2$",
            "$n$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'équation générale des alcynes du document produit $(n-1)\\,\\mathrm{H_2O}$."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q5",
          "type": "mcq",
          "prompt": "Le coefficient du dioxygène dans la combustion complète d'un alcène $\\mathrm{C_nH_{2n}}$ est :",
          "options": [
            "$\\frac{3n+1}{2}$",
            "$\\frac{3n-1}{2}$",
            "$3n$",
            "$\\frac{3n}{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour les alcènes, le coefficient est $\\frac{3n}{2}$ ; $\\frac{3n+1}{2}$ est celui des alcanes et $\\frac{3n-1}{2}$ celui des alcynes."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p04_q6",
          "type": "mcq",
          "prompt": "Dans la situation d'apprentissage, la flamme du chalumeau provient de la combustion :",
          "options": [
            "Du méthane dans l'air",
            "De l'acétylène dans le dioxygène",
            "Du propane dans le dichlore",
            "De l'éthylène dans l'eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la combustion de l'acétylène, un alcyne, dans le dioxygène qui produit la flamme très chaude du chalumeau."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l02_alcenes_alcynes_p05",
      "order": 5,
      "title": "Les réactions d'addition sur les alcènes",
      "summary": "Hydrogénation, chloration, action de HCl et hydratation des alcènes, avec la règle d'orientation du document.",
      "conceptExplanation": "En présence d'un catalyseur (nickel ou palladium), les alcènes réagissent avec le dihydrogène pour donner un alcane : c'est l'hydrogénation.\nLes alcènes réagissent aussi avec les dihalogènes : l'éthylène et le dichlore donnent le 1,2-dichloroéthane. Cette chloration peut se produire à l'obscurité ; elle n'est donc pas photochimique, contrairement à la chloration des alcanes. Les alcènes décolorent l'eau de brome : c'est un test caractéristique de la double liaison.\nAvec le chlorure d'hydrogène HCl, le chlore se fixe préférentiellement sur le carbone le moins hydrogéné et l'hydrogène sur le carbone le plus hydrogéné : le propène donne ainsi majoritairement le 2-chloropropane.\nIl en va de même pour l'hydratation, en présence d'acide sulfurique : le groupe hydroxyle se fixe sur le carbone le moins hydrogéné et l'hydrogène sur le plus hydrogéné ; le propène donne majoritairement le propan-2-ol.",
      "keyRule": "Dans les additions de HCl et de l'eau sur un alcène, l'hydrogène va sur le carbone le plus hydrogéné : le groupe Cl ou OH finit donc sur le carbone le moins hydrogéné.",
      "formulas": [
        {
          "name": "Hydrogénation d'un alcène",
          "formula": "\\mathrm{R_1-CH=CH-R_2 + H_2 \\longrightarrow R_1-CH_2-CH_2-R_2}",
          "note": "Catalyseur : nickel ou palladium."
        },
        {
          "name": "Chloration de l'éthylène",
          "formula": "\\mathrm{CH_2=CH_2 + Cl_2 \\longrightarrow CH_2Cl-CH_2Cl}",
          "note": "Produit : 1,2-dichloroéthane."
        }
      ],
      "workedExample": {
        "title": "Produit majoritaire de l'action de HCl sur le propène",
        "statement": "Détermine le produit majoritaire de l'addition du chlorure d'hydrogène sur le propène, selon le document.",
        "methodSteps": [
          "La double liaison du propène relie un carbone très hydrogéné, CH₂, et un carbone moins hydrogéné, CH.",
          "L'hydrogène de HCl se fixe sur le carbone le plus hydrogéné.",
          "Le chlore se fixe donc sur le carbone central, le carbone n°2."
        ],
        "conclusion": "Le produit majoritaire est le 2-chloropropane, le 1-chloropropane ne se formant qu'en faible quantité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une réaction d'addition",
          "stepTheme": "Une réaction d'addition",
          "stepBadge": "Une réaction d'addition",
          "paragraphText": "• Réaction d'addition : réaction au cours de laquelle une molécule s'ajoute sur la double liaison d'un alcène, qui s'ouvre.\nL'hydrogénation, la chloration et l'hydratation des alcènes sont des additions.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q1",
            "type": "mcq",
            "prompt": "L'hydrogénation d'un alcène est une réaction :",
            "options": [
              "De substitution",
              "De polymérisation uniquement",
              "De combustion",
              "D'addition du dihydrogène sur la double liaison"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le dihydrogène s'additionne sur la double liaison, en présence de nickel ou de palladium, pour donner un alcane."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'hydrogénation donne un alcane",
          "stepTheme": "L'hydrogénation donne un alcane",
          "stepBadge": "L'hydrogénation donne un alcane",
          "paragraphText": "En présence d'un catalyseur, nickel ou palladium, un alcène et le dihydrogène donnent un alcane.\nExemple de l'activité : le propène hydrogéné donne le propane.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q2",
            "type": "mcq",
            "prompt": "L'hydrogénation du propène en présence de nickel donne :",
            "options": [
              "Le propan-2-ol",
              "Le 1,2-dibromopropane",
              "Le propane",
              "Le propyne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'addition de $\\mathrm{H_2}$ sature la double liaison : $\\mathrm{CH_2=CH-CH_3 + H_2 \\longrightarrow CH_3-CH_2-CH_3}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La chloration des alcènes n'est pas photochimique",
          "stepTheme": "La chloration des alcènes n'est pas photochimique",
          "stepBadge": "La chloration des alcènes n'est pas photochimique",
          "paragraphText": "La chloration d'un alcène peut se produire à l'obscurité.\nElle n'est donc pas photochimique, contrairement à la chloration des alcanes, qui exige la lumière.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q3",
            "type": "mcq",
            "prompt": "Contrairement à la chloration des alcanes, celle des alcènes :",
            "options": [
              "Exige une lumière intense",
              "Peut se produire à l'obscurité",
              "Donne quatre produits successifs",
              "Est une substitution"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document souligne ce contraste : addition à l'obscurité pour les alcènes, substitution photochimique pour les alcanes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le test à l'eau de brome",
          "stepTheme": "Le test à l'eau de brome",
          "stepBadge": "Le test à l'eau de brome",
          "paragraphText": "Les alcènes décolorent l'eau de brome.\nLe document présente cette décoloration comme un test caractéristique de la double liaison.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q4",
            "type": "mcq",
            "prompt": "La décoloration de l'eau de brome par un hydrocarbure est un test caractéristique :",
            "options": [
              "De la triple liaison uniquement",
              "Des alcanes",
              "De la double liaison",
              "Des cyclanes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le dibrome s'additionne sur la double liaison, ce qui décolore l'eau de brome : c'est le test donné par le document."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'orientation de l'addition de HCl",
          "stepTheme": "L'orientation de l'addition de HCl",
          "stepBadge": "L'orientation de l'addition de HCl",
          "paragraphText": "Piège : placer le chlore sur le carbone le plus hydrogéné inverse le produit majoritaire.\nLe document dit que le chlore se fixe préférentiellement sur le carbone le moins hydrogéné et l'hydrogène sur le plus hydrogéné.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q5",
            "type": "mcq",
            "prompt": "Lors de l'addition de HCl sur le propène, le chlore se fixe préférentiellement sur le carbone :",
            "options": [
              "Le plus hydrogéné",
              "Le moins hydrogéné",
              "En bout de chaîne dans tous les cas",
              "Qui porte déjà un chlore"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'hydrogène va sur le carbone le plus hydrogéné, donc le chlore finit sur le carbone le moins hydrogéné, au centre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'hydratation du but-1-ène",
          "stepTheme": "L'hydratation du but-1-ène",
          "stepBadge": "L'hydratation du but-1-ène",
          "paragraphText": "L'activité d'application fait réagir le but-1-ène avec l'eau, en présence d'acide sulfurique.\nEn appliquant la même orientation que pour le propène, le groupe hydroxyle se place sur le carbone n°2.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q6",
            "type": "mcq",
            "prompt": "D'après la solution de l'activité d'application, l'hydratation du but-1-ène donne majoritairement :",
            "options": [
              "Le butan-1-ol",
              "Le butane",
              "Le butan-2-ol",
              "Le but-2-ène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le groupe –OH se fixe sur le carbone le moins hydrogéné de la double liaison, ici le carbone n°2 : on obtient le butan-2-ol."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q1",
          "type": "mcq",
          "prompt": "L'hydrogénation d'un alcène est une réaction :",
          "options": [
            "De substitution",
            "De polymérisation uniquement",
            "De combustion",
            "D'addition du dihydrogène sur la double liaison"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le dihydrogène s'additionne sur la double liaison, en présence de nickel ou de palladium, pour donner un alcane."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q2",
          "type": "mcq",
          "prompt": "L'hydrogénation du propène en présence de nickel donne :",
          "options": [
            "Le propan-2-ol",
            "Le 1,2-dibromopropane",
            "Le propane",
            "Le propyne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'addition de $\\mathrm{H_2}$ sature la double liaison : $\\mathrm{CH_2=CH-CH_3 + H_2 \\longrightarrow CH_3-CH_2-CH_3}$."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q3",
          "type": "mcq",
          "prompt": "Contrairement à la chloration des alcanes, celle des alcènes :",
          "options": [
            "Exige une lumière intense",
            "Peut se produire à l'obscurité",
            "Donne quatre produits successifs",
            "Est une substitution"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document souligne ce contraste : addition à l'obscurité pour les alcènes, substitution photochimique pour les alcanes."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q4",
          "type": "mcq",
          "prompt": "La décoloration de l'eau de brome par un hydrocarbure est un test caractéristique :",
          "options": [
            "De la triple liaison uniquement",
            "Des alcanes",
            "De la double liaison",
            "Des cyclanes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le dibrome s'additionne sur la double liaison, ce qui décolore l'eau de brome : c'est le test donné par le document."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q5",
          "type": "mcq",
          "prompt": "Lors de l'addition de HCl sur le propène, le chlore se fixe préférentiellement sur le carbone :",
          "options": [
            "Le plus hydrogéné",
            "Le moins hydrogéné",
            "En bout de chaîne dans tous les cas",
            "Qui porte déjà un chlore"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'hydrogène va sur le carbone le plus hydrogéné, donc le chlore finit sur le carbone le moins hydrogéné, au centre."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p05_q6",
          "type": "mcq",
          "prompt": "D'après la solution de l'activité d'application, l'hydratation du but-1-ène donne majoritairement :",
          "options": [
            "Le butan-1-ol",
            "Le butane",
            "Le butan-2-ol",
            "Le but-2-ène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le groupe –OH se fixe sur le carbone le moins hydrogéné de la double liaison, ici le carbone n°2 : on obtient le butan-2-ol."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l02_alcenes_alcynes_p06",
      "order": 6,
      "title": "Les réactions d'addition sur les alcynes",
      "summary": "Hydrogénation selon le catalyseur, dibrome, HCl et hydratation de l'acétylène en éthanal.",
      "conceptExplanation": "En présence de nickel ou de platine, les alcynes réagissent avec le dihydrogène pour donner un alcane : il faut deux molécules de dihydrogène. Avec le palladium comme catalyseur, la réaction s'arrête à l'alcène, avec une seule molécule de dihydrogène.\nLes alcynes réagissent avec les dihalogènes : l'acétylène et deux molécules de dibrome donnent le 1,1,2,2-tétrabromoéthane.\nL'addition du chlorure d'hydrogène sur l'acétylène conduit, avec deux molécules de HCl, au 1,1-dichloroéthane.\nL'hydratation de l'acétylène, en présence d'ions mercuriques $\\mathrm{Hg^{2+}}$, conduit à l'obtention de l'éthanal.",
      "keyRule": "Le catalyseur décide de l'arrêt de l'hydrogénation d'un alcyne : palladium, on s'arrête à l'alcène ; nickel ou platine avec deux $\\mathrm{H_2}$, on va jusqu'à l'alcane.",
      "formulas": [
        {
          "name": "Hydrogénation complète d'un alcyne",
          "formula": "\\mathrm{R_1-C\\equiv C-R_2 + 2\\,H_2 \\longrightarrow R_1-CH_2-CH_2-R_2}",
          "note": "Catalyseur : nickel ou platine."
        },
        {
          "name": "Action du dibrome sur l'acétylène",
          "formula": "\\mathrm{HC\\equiv CH + 2\\,Br_2 \\longrightarrow Br_2HC-CHBr_2}",
          "note": "Produit : 1,1,2,2-tétrabromoéthane."
        },
        {
          "name": "Hydratation de l'acétylène",
          "formula": "\\mathrm{HC\\equiv CH + H_2O \\longrightarrow CH_3-CHO}",
          "note": "En présence d'ions Hg²⁺ ; produit : l'éthanal."
        }
      ],
      "workedExample": {
        "title": "Hydrogénation du propyne selon le catalyseur",
        "statement": "Donne le produit de l'hydrogénation du propyne avec le palladium, puis avec le platine et deux molécules de dihydrogène, d'après l'activité d'application.",
        "methodSteps": [
          "Avec le palladium, l'hydrogénation d'un alcyne s'arrête à l'alcène : le propyne donne le propène.",
          "Avec le platine et $2\\,\\mathrm{H_2}$, l'hydrogénation est complète : on obtient l'alcane.",
          "L'alcane à 3 carbones est le propane."
        ],
        "conclusion": "Le propyne donne le propène avec le palladium, et le propane avec le platine et deux molécules de dihydrogène."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'hydrogénation complète d'un alcyne",
          "stepTheme": "L'hydrogénation complète d'un alcyne",
          "stepBadge": "L'hydrogénation complète d'un alcyne",
          "paragraphText": "• Hydrogénation complète : addition de deux molécules de dihydrogène sur la triple liaison d'un alcyne.\nElle se fait en présence de nickel ou de platine et donne un alcane.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q1",
            "type": "mcq",
            "prompt": "L'hydrogénation complète d'un alcyne en présence de nickel donne :",
            "options": [
              "Un alcène",
              "Un autre alcyne",
              "Un alcool",
              "Un alcane"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec deux molécules de $\\mathrm{H_2}$, la triple liaison est entièrement saturée : on obtient un alcane."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rôle du palladium",
          "stepTheme": "Le rôle du palladium",
          "stepBadge": "Le rôle du palladium",
          "paragraphText": "Avec le palladium comme catalyseur, l'hydrogénation d'un alcyne donne un alcène.\nLa réaction s'arrête à mi-chemin : une seule molécule de dihydrogène s'est additionnée.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q2",
            "type": "mcq",
            "prompt": "Avec le palladium comme catalyseur, l'hydrogénation du but-2-yne donne :",
            "options": [
              "Le but-2-ène",
              "Le butane",
              "Le butan-2-ol",
              "Le but-1-yne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la solution de l'activité d'application : le palladium arrête l'hydrogénation au stade de l'alcène."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'action du dibrome sur l'acétylène",
          "stepTheme": "L'action du dibrome sur l'acétylène",
          "stepBadge": "L'action du dibrome sur l'acétylène",
          "paragraphText": "L'acétylène réagit avec deux molécules de dibrome.\nLe produit obtenu est le 1,1,2,2-tétrabromoéthane, qui porte quatre atomes de brome.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q3",
            "type": "mcq",
            "prompt": "L'action de deux molécules de dibrome sur l'acétylène donne :",
            "options": [
              "Le 1,2-dibromoéthène seulement",
              "Le bromoéthane",
              "Le 1,1,2,2-tétrabromoéthane",
              "Le tétrabromométhane"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux molécules de $\\mathrm{Br_2}$ s'additionnent sur la triple liaison : chaque carbone finit lié à deux bromes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'action de HCl sur l'acétylène",
          "stepTheme": "L'action de HCl sur l'acétylène",
          "stepBadge": "L'action de HCl sur l'acétylène",
          "paragraphText": "L'addition du chlorure d'hydrogène sur l'acétylène conduit à la formation d'un dichloroalcane.\nL'exemple du document est le 1,1-dichloroéthane, obtenu avec deux molécules de HCl.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q4",
            "type": "mcq",
            "prompt": "L'addition de deux molécules de HCl sur l'acétylène donne :",
            "options": [
              "Le 1,1-dichloroéthane",
              "Le chloroéthane",
              "Le 1,2-dichloroéthane",
              "Le tétrachloroéthane"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux chlores se fixent sur le même carbone : on obtient le 1,1-dichloroéthane, $\\mathrm{CH_3-CHCl_2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Deux molécules de HCl, pas une seule",
          "stepTheme": "Deux molécules de HCl, pas une seule",
          "stepBadge": "Deux molécules de HCl, pas une seule",
          "paragraphText": "Piège : écrire une seule molécule de HCl dans l'équation donnant le 1,1-dichloroéthane rend l'équation impossible à équilibrer, car le produit contient deux chlores.\nIl faut donc deux molécules de HCl pour une molécule d'acétylène.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q5",
            "type": "mcq",
            "prompt": "Pour obtenir le 1,1-dichloroéthane à partir de l'acétylène, il faut additionner :",
            "options": [
              "Une molécule de HCl",
              "Deux molécules de HCl",
              "Une molécule de dichlore",
              "Deux molécules de dichlore"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le produit contient deux atomes de chlore : ils proviennent de deux molécules de HCl."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'hydratation de l'acétylène",
          "stepTheme": "L'hydratation de l'acétylène",
          "stepBadge": "L'hydratation de l'acétylène",
          "paragraphText": "L'hydratation de l'acétylène se fait en présence d'ions mercuriques $\\mathrm{Hg^{2+}}$.\nContrairement aux alcènes, qui donnent un alcool, elle conduit ici à l'éthanal.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q6",
            "type": "mcq",
            "prompt": "L'hydratation de l'acétylène en présence d'ions $\\mathrm{Hg^{2+}}$ donne :",
            "options": [
              "L'éthanol",
              "L'éthane",
              "L'acide éthanoïque",
              "L'éthanal"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le résultat donné par le document : l'acétylène hydraté donne l'éthanal."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q1",
          "type": "mcq",
          "prompt": "L'hydrogénation complète d'un alcyne en présence de nickel donne :",
          "options": [
            "Un alcène",
            "Un autre alcyne",
            "Un alcool",
            "Un alcane"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec deux molécules de $\\mathrm{H_2}$, la triple liaison est entièrement saturée : on obtient un alcane."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q2",
          "type": "mcq",
          "prompt": "Avec le palladium comme catalyseur, l'hydrogénation du but-2-yne donne :",
          "options": [
            "Le but-2-ène",
            "Le butane",
            "Le butan-2-ol",
            "Le but-1-yne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la solution de l'activité d'application : le palladium arrête l'hydrogénation au stade de l'alcène."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q3",
          "type": "mcq",
          "prompt": "L'action de deux molécules de dibrome sur l'acétylène donne :",
          "options": [
            "Le 1,2-dibromoéthène seulement",
            "Le bromoéthane",
            "Le 1,1,2,2-tétrabromoéthane",
            "Le tétrabromométhane"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux molécules de $\\mathrm{Br_2}$ s'additionnent sur la triple liaison : chaque carbone finit lié à deux bromes."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q4",
          "type": "mcq",
          "prompt": "L'addition de deux molécules de HCl sur l'acétylène donne :",
          "options": [
            "Le 1,1-dichloroéthane",
            "Le chloroéthane",
            "Le 1,2-dichloroéthane",
            "Le tétrachloroéthane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux chlores se fixent sur le même carbone : on obtient le 1,1-dichloroéthane, $\\mathrm{CH_3-CHCl_2}$."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q5",
          "type": "mcq",
          "prompt": "Pour obtenir le 1,1-dichloroéthane à partir de l'acétylène, il faut additionner :",
          "options": [
            "Une molécule de HCl",
            "Deux molécules de HCl",
            "Une molécule de dichlore",
            "Deux molécules de dichlore"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le produit contient deux atomes de chlore : ils proviennent de deux molécules de HCl."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p06_q6",
          "type": "mcq",
          "prompt": "L'hydratation de l'acétylène en présence d'ions $\\mathrm{Hg^{2+}}$ donne :",
          "options": [
            "L'éthanol",
            "L'éthane",
            "L'acide éthanoïque",
            "L'éthanal"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le résultat donné par le document : l'acétylène hydraté donne l'éthanal."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l02_alcenes_alcynes_p07",
      "order": 7,
      "title": "Les réactions de polymérisation",
      "summary": "Polymère et monomère, polyéthylène, polychlorure de vinyle et polystyrène, avec leurs usages.",
      "conceptExplanation": "On appelle réactions de polymérisation des réactions d'addition de plusieurs molécules identiques. Le composé obtenu est appelé polymère, la molécule initiale étant le monomère.\nLa polymérisation de l'éthylène donne le polyéthylène : $n\\,\\mathrm{CH_2=CH_2 \\longrightarrow (CH_2-CH_2)_n}$. Le groupe $\\mathrm{CH_2-CH_2}$ répété est le motif du polymère et n est le degré de polymérisation. Le polyéthylène sert aux sachets et sacs d'emballage, aux jouets, fûts et casiers et aux bouteilles plastiques.\nLe chlorure de vinyle, ou chloroéthylène $\\mathrm{CH_2=CHCl}$, se polymérise en polychlorure de vinyle, connu sous le nom de PVC, utilisé en tuyauterie et canalisation.\nLe styrène se polymérise pour donner le polystyrène, utilisé pour les emballages anti-chocs, les récipients comme les pots de yaourt et les jouets.",
      "keyRule": "Polymérisation = addition répétée du même monomère : éthylène donne polyéthylène, chlorure de vinyle donne PVC, styrène donne polystyrène.",
      "formulas": [
        {
          "name": "Polymérisation de l'éthylène",
          "formula": "n\\,\\mathrm{CH_2=CH_2 \\longrightarrow (CH_2-CH_2)_n}",
          "note": "Produit : le polyéthylène ; n est le degré de polymérisation."
        },
        {
          "name": "Polymérisation du chlorure de vinyle",
          "formula": "n\\,\\mathrm{CH_2=CHCl \\longrightarrow (CH_2-CHCl)_n}",
          "note": "Produit : le polychlorure de vinyle (PVC)."
        }
      ],
      "workedExample": {
        "title": "Motif et degré de polymérisation du polyéthylène",
        "statement": "Dans l'équation de polymérisation de l'éthylène du document, identifie le monomère, le motif du polymère et la signification de n.",
        "methodSteps": [
          "Le monomère est la molécule qui se répète : l'éthylène $\\mathrm{CH_2=CH_2}$.",
          "Après rupture de la double liaison, le groupe qui se répète dans la chaîne est $\\mathrm{CH_2-CH_2}$ : c'est le motif.",
          "La lettre n, placée en indice, compte combien de motifs s'enchaînent."
        ],
        "conclusion": "Le monomère est l'éthylène, le motif est $\\mathrm{CH_2-CH_2}$ et n est le degré de polymérisation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La polymérisation",
          "stepTheme": "La polymérisation",
          "stepBadge": "La polymérisation",
          "paragraphText": "• Polymérisation : réaction d'addition de plusieurs molécules identiques.\nLe composé obtenu est un polymère, formé à partir de molécules initiales toutes identiques.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q1",
            "type": "mcq",
            "prompt": "On appelle polymérisation :",
            "options": [
              "La substitution d'un hydrogène par un chlore",
              "La rupture d'une molécule en deux",
              "La combustion d'un alcène",
              "L'addition de plusieurs molécules identiques"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la définition du document : des molécules identiques s'additionnent les unes aux autres."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Monomère et polymère",
          "stepTheme": "Monomère et polymère",
          "stepBadge": "Monomère et polymère",
          "paragraphText": "• Monomère : molécule initiale qui se répète lors d'une polymérisation.\n• Polymère : composé obtenu par l'enchaînement d'un grand nombre de monomères.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q2",
            "type": "mcq",
            "prompt": "Dans la polymérisation de l'éthylène, le monomère est :",
            "options": [
              "Le polyéthylène",
              "Le motif répété",
              "L'éthylène",
              "Le degré de polymérisation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La molécule initiale est l'éthylène ; le polyéthylène est le polymère obtenu."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le motif et le degré de polymérisation",
          "stepTheme": "Le motif et le degré de polymérisation",
          "stepBadge": "Le motif et le degré de polymérisation",
          "paragraphText": "Dans le polyéthylène, le groupe $\\mathrm{CH_2-CH_2}$ qui se répète est le motif du polymère.\nLa lettre n est le degré de polymérisation : elle indique combien de motifs contient la chaîne.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q3",
            "type": "mcq",
            "prompt": "Dans la formule $(\\mathrm{CH_2-CH_2})_n$ du polyéthylène, la lettre n représente :",
            "options": [
              "Le nombre d'atomes de carbone du monomère",
              "Le degré de polymérisation",
              "La masse du polymère",
              "Le nombre de doubles liaisons"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document nomme n « degré de polymérisation » et $\\mathrm{CH_2-CH_2}$ « motif du polymère »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les usages du polyéthylène",
          "stepTheme": "Les usages du polyéthylène",
          "stepBadge": "Les usages du polyéthylène",
          "paragraphText": "Le polyéthylène est la matière des sachets et sacs d'emballage.\nLe document cite aussi les jouets, les fûts et casiers et les bouteilles plastiques.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q4",
            "type": "mcq",
            "prompt": "Parmi les objets suivants, lequel est cité dans le document comme usage du polyéthylène ?",
            "options": [
              "Les tuyauteries",
              "Les pots de yaourt",
              "Les sachets et sacs d'emballage",
              "Les emballages anti-chocs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sachets et sacs d'emballage sont cités pour le polyéthylène ; la tuyauterie relève du PVC et les pots de yaourt et emballages anti-chocs du polystyrène."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le PVC vient du chlorure de vinyle",
          "stepTheme": "Le PVC vient du chlorure de vinyle",
          "stepBadge": "Le PVC vient du chlorure de vinyle",
          "paragraphText": "Piège : le polychlorure de vinyle ne se fait pas à partir de l'éthylène, mais du chlorure de vinyle, ou chloroéthylène $\\mathrm{CH_2=CHCl}$.\nC'est le chlore du monomère qui se retrouve dans le nom du polymère.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q5",
            "type": "mcq",
            "prompt": "Le polychlorure de vinyle (PVC) est obtenu par polymérisation :",
            "options": [
              "De l'éthylène",
              "Du styrène",
              "De l'acétylène",
              "Du chlorure de vinyle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le monomère est le chlorure de vinyle $\\mathrm{CH_2=CHCl}$ ; le PVC sert notamment en tuyauterie et canalisation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le polystyrène et ses usages",
          "stepTheme": "Le polystyrène et ses usages",
          "stepBadge": "Le polystyrène et ses usages",
          "paragraphText": "Le styrène se polymérise pour donner le polystyrène.\nLe document cite ses usages : emballages anti-chocs, récipients comme les pots de yaourt, et jouets.",
          "exercise": {
            "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q6",
            "type": "mcq",
            "prompt": "Le polystyrène est notamment utilisé pour :",
            "options": [
              "Les emballages anti-chocs et les pots de yaourt",
              "La tuyauterie et les canalisations",
              "Les bouteilles de gaz",
              "Les sachets d'emballage uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les usages listés dans le document pour le polystyrène."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q1",
          "type": "mcq",
          "prompt": "On appelle polymérisation :",
          "options": [
            "La substitution d'un hydrogène par un chlore",
            "La rupture d'une molécule en deux",
            "La combustion d'un alcène",
            "L'addition de plusieurs molécules identiques"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la définition du document : des molécules identiques s'additionnent les unes aux autres."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q2",
          "type": "mcq",
          "prompt": "Dans la polymérisation de l'éthylène, le monomère est :",
          "options": [
            "Le polyéthylène",
            "Le motif répété",
            "L'éthylène",
            "Le degré de polymérisation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La molécule initiale est l'éthylène ; le polyéthylène est le polymère obtenu."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q3",
          "type": "mcq",
          "prompt": "Dans la formule $(\\mathrm{CH_2-CH_2})_n$ du polyéthylène, la lettre n représente :",
          "options": [
            "Le nombre d'atomes de carbone du monomère",
            "Le degré de polymérisation",
            "La masse du polymère",
            "Le nombre de doubles liaisons"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document nomme n « degré de polymérisation » et $\\mathrm{CH_2-CH_2}$ « motif du polymère »."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q4",
          "type": "mcq",
          "prompt": "Parmi les objets suivants, lequel est cité dans le document comme usage du polyéthylène ?",
          "options": [
            "Les tuyauteries",
            "Les pots de yaourt",
            "Les sachets et sacs d'emballage",
            "Les emballages anti-chocs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sachets et sacs d'emballage sont cités pour le polyéthylène ; la tuyauterie relève du PVC et les pots de yaourt et emballages anti-chocs du polystyrène."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q5",
          "type": "mcq",
          "prompt": "Le polychlorure de vinyle (PVC) est obtenu par polymérisation :",
          "options": [
            "De l'éthylène",
            "Du styrène",
            "De l'acétylène",
            "Du chlorure de vinyle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le monomère est le chlorure de vinyle $\\mathrm{CH_2=CHCl}$ ; le PVC sert notamment en tuyauterie et canalisation."
        },
        {
          "id": "premiere_c_chimie_l02_alcenes_alcynes_p07_q6",
          "type": "mcq",
          "prompt": "Le polystyrène est notamment utilisé pour :",
          "options": [
            "Les emballages anti-chocs et les pots de yaourt",
            "La tuyauterie et les canalisations",
            "Les bouteilles de gaz",
            "Les sachets d'emballage uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les usages listés dans le document pour le polystyrène."
        }
      ]
    }
  ]
};
