import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Hydrocarbures saturés : les alcanes » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Hydrocarbures saturés : les alcanes » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const CHIMIE_1ERE_CD_L01_ALCANES: CurriculumChapter = {
  "id": "premiere_c_chimie_l01_alcanes",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 1,
  "title": "Leçon 1 : Hydrocarbures saturés : les alcanes",
  "summary": "Les alcanes sont des hydrocarbures saturés dont tous les carbones sont tétraédriques : on étudie leur structure, leur nomenclature, les cyclanes et l'isomérie de chaîne, puis leur combustion et leur chloration.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Hydrocarbures saturés : les alcanes » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_chimie_l01_alcanes_p01",
      "order": 1,
      "title": "Généralités et structure du méthane",
      "summary": "Liaison covalente, valence, formule générale des alcanes et géométrie tétraédrique du méthane.",
      "conceptExplanation": "Une liaison covalente s'établit entre deux atomes par la mise en commun de deux de leurs électrons célibataires, de manière à former un doublet de liaison.\nLa valence d'un atome est le nombre de liaisons de covalence qu'il peut former avec d'autres atomes.\nLes alcanes sont des hydrocarbures dont tous les atomes de carbone ont une structure tétraédrique. Leur formule brute générale est $\\mathrm{C_nH_{2n+2}}$ avec $n \\geq 1$.\nLe méthane, de formule brute $\\mathrm{CH_4}$, est le plus simple des alcanes : l'atome de carbone, au centre d'un tétraèdre régulier, est lié à 4 atomes d'hydrogène situés aux sommets. La longueur de liaison C–H vaut 109 pm et l'angle de liaison HCH vaut 109°28'.",
      "keyRule": "Alcane signifie carbones tétraédriques et formule brute $\\mathrm{C_nH_{2n+2}}$ : pour n carbones, il y a toujours 2n+2 hydrogènes.",
      "formulas": [
        {
          "name": "Formule brute générale des alcanes",
          "formula": "\\mathrm{C_nH_{2n+2}} \\quad (n \\geq 1)",
          "note": "n est le nombre d'atomes de carbone."
        },
        {
          "name": "Méthane",
          "formula": "\\mathrm{CH_4}",
          "note": "Le plus simple des alcanes."
        }
      ],
      "workedExample": {
        "title": "Formule brute de l'alcane à 5 carbones du tableau du document",
        "statement": "À l'aide de la formule générale et du tableau du document, donne le nom et la formule brute de l'alcane linéaire à 5 atomes de carbone.",
        "methodSteps": [
          "On prend $n = 5$ dans la formule générale $\\mathrm{C_nH_{2n+2}}$.",
          "Le nombre d'hydrogènes est $2 \\times 5 + 2 = 12$.",
          "Le préfixe pour 5 carbones est « pent », suivi de « ane »."
        ],
        "conclusion": "C'est le pentane, de formule brute $\\mathrm{C_5H_{12}}$, comme dans le tableau du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La liaison covalente",
          "stepTheme": "La liaison covalente",
          "stepBadge": "La liaison covalente",
          "paragraphText": "• Liaison covalente : liaison qui s'établit entre deux atomes par la mise en commun de deux de leurs électrons célibataires.\nCette mise en commun forme un doublet de liaison entre les deux atomes.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p01_q1",
            "type": "mcq",
            "prompt": "Une liaison covalente se forme par :",
            "options": [
              "La mise en commun de deux électrons célibataires, un par atome",
              "Le transfert définitif d'un électron d'un atome à l'autre",
              "La mise en commun de quatre électrons",
              "L'attraction entre deux noyaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après le document, la liaison covalente résulte de la mise en commun de deux électrons célibataires, formant un doublet de liaison."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La valence d'un atome",
          "stepTheme": "La valence d'un atome",
          "stepBadge": "La valence d'un atome",
          "paragraphText": "• Valence d'un atome : nombre de liaisons de covalence que cet atome peut former avec d'autres atomes.\nLe carbone, qui forme 4 liaisons dans le méthane, est tétravalent.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p01_q2",
            "type": "mcq",
            "prompt": "La valence d'un atome est :",
            "options": [
              "Son nombre d'électrons total",
              "Le nombre de liaisons de covalence qu'il peut former",
              "Sa masse atomique",
              "Le nombre de protons de son noyau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du document : la valence compte les liaisons de covalence qu'un atome peut former."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La formule brute générale des alcanes",
          "stepTheme": "La formule brute générale des alcanes",
          "stepBadge": "La formule brute générale des alcanes",
          "paragraphText": "Les alcanes sont des hydrocarbures dont tous les atomes de carbone ont une structure tétraédrique.\nLeur formule brute générale est $\\mathrm{C_nH_{2n+2}}$, avec $n \\geq 1$.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la formule brute d'un alcane comportant 4 atomes de carbone ?",
            "options": [
              "$\\mathrm{C_4H_8}$",
              "$\\mathrm{C_4H_6}$",
              "$\\mathrm{C_4H_{12}}$",
              "$\\mathrm{C_4H_{10}}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec $n = 4$ : $2n+2 = 10$ hydrogènes, d'où $\\mathrm{C_4H_{10}}$, le butane."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La structure tétraédrique du méthane",
          "stepTheme": "La structure tétraédrique du méthane",
          "stepBadge": "La structure tétraédrique du méthane",
          "paragraphText": "Dans le méthane, l'atome de carbone est situé au centre d'un tétraèdre régulier dont les sommets sont occupés par les 4 atomes d'hydrogène.\nOn dit que le carbone a une structure tétraédrique.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p01_q4",
            "type": "mcq",
            "prompt": "Dans la molécule de méthane, l'atome de carbone occupe :",
            "options": [
              "Un sommet du tétraèdre",
              "Le centre d'un tétraèdre régulier",
              "Le milieu d'une arête",
              "Un plan carré avec les hydrogènes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document précise que le carbone est au centre du tétraèdre et les 4 hydrogènes aux sommets."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Angle et longueur de liaison dans le méthane",
          "stepTheme": "Angle et longueur de liaison dans le méthane",
          "stepBadge": "Angle et longueur de liaison dans le méthane",
          "paragraphText": "Piège : ne pas confondre les valeurs du méthane avec celles d'autres géométries.\nLe document donne une longueur de liaison C–H de 109 pm et un angle de liaison HCH de 109°28'.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p01_q5",
            "type": "mcq",
            "prompt": "L'angle de liaison HCH dans le méthane vaut :",
            "options": [
              "90°",
              "120°",
              "109°28'",
              "180°"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'angle tétraédrique du méthane vaut 109°28' ; 120° concerne le carbone trigonal des alcènes et 180° le carbone digonal des alcynes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le méthane, plus simple des alcanes",
          "stepTheme": "Le méthane, plus simple des alcanes",
          "stepBadge": "Le méthane, plus simple des alcanes",
          "paragraphText": "Le méthane est le plus simple des alcanes, avec un seul atome de carbone.\nSa formule brute est $\\mathrm{CH_4}$, ce qui correspond bien à $\\mathrm{C_nH_{2n+2}}$ pour $n = 1$.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p01_q6",
            "type": "mcq",
            "prompt": "Le plus simple des alcanes est :",
            "options": [
              "L'éthane, $\\mathrm{C_2H_6}$",
              "Le propane, $\\mathrm{C_3H_8}$",
              "Le butane, $\\mathrm{C_4H_{10}}$",
              "Le méthane, $\\mathrm{CH_4}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec un seul carbone, le méthane $\\mathrm{CH_4}$ est le premier et le plus simple des alcanes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l01_alcanes_p01_q1",
          "type": "mcq",
          "prompt": "Une liaison covalente se forme par :",
          "options": [
            "La mise en commun de deux électrons célibataires, un par atome",
            "Le transfert définitif d'un électron d'un atome à l'autre",
            "La mise en commun de quatre électrons",
            "L'attraction entre deux noyaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après le document, la liaison covalente résulte de la mise en commun de deux électrons célibataires, formant un doublet de liaison."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p01_q2",
          "type": "mcq",
          "prompt": "La valence d'un atome est :",
          "options": [
            "Son nombre d'électrons total",
            "Le nombre de liaisons de covalence qu'il peut former",
            "Sa masse atomique",
            "Le nombre de protons de son noyau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du document : la valence compte les liaisons de covalence qu'un atome peut former."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la formule brute d'un alcane comportant 4 atomes de carbone ?",
          "options": [
            "$\\mathrm{C_4H_8}$",
            "$\\mathrm{C_4H_6}$",
            "$\\mathrm{C_4H_{12}}$",
            "$\\mathrm{C_4H_{10}}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec $n = 4$ : $2n+2 = 10$ hydrogènes, d'où $\\mathrm{C_4H_{10}}$, le butane."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p01_q4",
          "type": "mcq",
          "prompt": "Dans la molécule de méthane, l'atome de carbone occupe :",
          "options": [
            "Un sommet du tétraèdre",
            "Le centre d'un tétraèdre régulier",
            "Le milieu d'une arête",
            "Un plan carré avec les hydrogènes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document précise que le carbone est au centre du tétraèdre et les 4 hydrogènes aux sommets."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p01_q5",
          "type": "mcq",
          "prompt": "L'angle de liaison HCH dans le méthane vaut :",
          "options": [
            "90°",
            "120°",
            "109°28'",
            "180°"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'angle tétraédrique du méthane vaut 109°28' ; 120° concerne le carbone trigonal des alcènes et 180° le carbone digonal des alcynes."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p01_q6",
          "type": "mcq",
          "prompt": "Le plus simple des alcanes est :",
          "options": [
            "L'éthane, $\\mathrm{C_2H_6}$",
            "Le propane, $\\mathrm{C_3H_8}$",
            "Le butane, $\\mathrm{C_4H_{10}}$",
            "Le méthane, $\\mathrm{CH_4}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec un seul carbone, le méthane $\\mathrm{CH_4}$ est le premier et le plus simple des alcanes."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l01_alcanes_p02",
      "order": 2,
      "title": "L'éthane et la chaîne carbonée",
      "summary": "Structure de l'éthane et définition des chaînes carbonées linéaires et ramifiées.",
      "conceptExplanation": "L'éthane a pour formule brute $\\mathrm{C_2H_6}$ et pour formule semi-développée $\\mathrm{CH_3-CH_3}$. Ses deux atomes de carbone sont tétragonaux.\nLes deux groupes méthyle peuvent tourner l'un par rapport à l'autre, l'axe de rotation étant l'axe de la liaison C–C.\nOn appelle chaîne carbonée, ou squelette carboné, l'enchaînement des atomes de carbone qui constituent une molécule organique.\nUne chaîne est linéaire si les carbones se suivent sans former de boucle ; elle est ramifiée si au moins un atome de carbone, appelé carbone ramifié, est lié à trois ou quatre autres atomes de carbone.",
      "keyRule": "On lit d'abord le squelette : chaîne linéaire si les carbones se suivent, ramifiée dès qu'un carbone est lié à trois ou quatre autres carbones.",
      "formulas": [
        {
          "name": "Éthane",
          "formula": "\\mathrm{C_2H_6}",
          "note": "Formule semi-développée : CH₃–CH₃."
        }
      ],
      "workedExample": {
        "title": "Décrire la molécule d'éthane",
        "statement": "Donne la formule brute, la formule semi-développée de l'éthane et précise le mouvement possible de ses deux groupes méthyle.",
        "methodSteps": [
          "L'éthane compte 2 carbones : la formule générale donne $\\mathrm{C_2H_6}$.",
          "Chaque carbone porte 3 hydrogènes, d'où la formule semi-développée CH₃–CH₃.",
          "Les deux groupes méthyle peuvent tourner l'un par rapport à l'autre autour de l'axe de la liaison C–C."
        ],
        "conclusion": "L'éthane est $\\mathrm{CH_3-CH_3}$ et ses groupes méthyle tournent autour de la liaison C–C."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La chaîne carbonée",
          "stepTheme": "La chaîne carbonée",
          "stepBadge": "La chaîne carbonée",
          "paragraphText": "• Chaîne carbonée (ou squelette carboné) : l'enchaînement des atomes de carbone qui constituent une molécule organique.\nC'est elle qui sert de base à la nomenclature.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p02_q1",
            "type": "mcq",
            "prompt": "On appelle chaîne carbonée :",
            "options": [
              "L'enchaînement des atomes de carbone d'une molécule organique",
              "L'ensemble des atomes d'hydrogène",
              "La liste des liaisons doubles",
              "Le groupe fonctionnel d'une molécule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, la chaîne carbonée est l'enchaînement des atomes de carbone de la molécule."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule de l'éthane",
          "stepTheme": "La formule de l'éthane",
          "stepBadge": "La formule de l'éthane",
          "paragraphText": "L'éthane est l'alcane à 2 atomes de carbone, tous deux tétragonaux.\nSa formule brute est $\\mathrm{C_2H_6}$ et sa formule semi-développée est CH₃–CH₃.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p02_q2",
            "type": "mcq",
            "prompt": "La formule brute de l'éthane est :",
            "options": [
              "$\\mathrm{C_2H_4}$",
              "$\\mathrm{C_2H_6}$",
              "$\\mathrm{C_2H_2}$",
              "$\\mathrm{CH_4}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour $n = 2$, $2n+2 = 6$ : l'éthane est $\\mathrm{C_2H_6}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La rotation autour de la liaison C–C",
          "stepTheme": "La rotation autour de la liaison C–C",
          "stepBadge": "La rotation autour de la liaison C–C",
          "paragraphText": "Dans l'éthane, les deux groupes méthyle –CH₃ peuvent tourner l'un par rapport à l'autre.\nL'axe de cette rotation est l'axe de la liaison simple C–C.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p02_q3",
            "type": "mcq",
            "prompt": "Dans l'éthane, les deux groupes méthyle peuvent tourner autour de :",
            "options": [
              "L'axe d'une liaison C–H",
              "Un axe extérieur à la molécule",
              "L'axe de la liaison C–C",
              "Ils ne peuvent pas tourner"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document indique que l'axe de rotation est celui de la liaison carbone-carbone."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La chaîne linéaire",
          "stepTheme": "La chaîne linéaire",
          "stepBadge": "La chaîne linéaire",
          "paragraphText": "• Chaîne linéaire : chaîne constituée d'atomes de carbone liés les uns à la suite des autres, sans former de boucle.\nLe butane CH₃–CH₂–CH₂–CH₃ en est un exemple.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p02_q4",
            "type": "mcq",
            "prompt": "Une chaîne carbonée est dite linéaire si :",
            "options": [
              "Elle contient une double liaison",
              "Elle forme une boucle fermée",
              "Elle contient un carbone ramifié",
              "Les carbones se suivent sans former de boucle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une chaîne linéaire enchaîne les carbones à la suite, sans boucle ni ramification."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Reconnaître une chaîne ramifiée",
          "stepTheme": "Reconnaître une chaîne ramifiée",
          "stepBadge": "Reconnaître une chaîne ramifiée",
          "paragraphText": "Piège : une chaîne n'est pas ramifiée parce qu'elle est longue, mais parce qu'un de ses carbones est lié à trois ou quatre autres carbones.\nCe carbone particulier est appelé carbone ramifié.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p02_q5",
            "type": "mcq",
            "prompt": "Une chaîne carbonée est ramifiée si au moins un de ses carbones est lié à :",
            "options": [
              "Un seul autre carbone",
              "Trois ou quatre autres atomes de carbone",
              "Un atome d'oxygène",
              "Quatre atomes d'hydrogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après le document, le carbone ramifié est lié à trois ou quatre autres atomes de carbone."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La formule semi-développée de l'éthane",
          "stepTheme": "La formule semi-développée de l'éthane",
          "stepBadge": "La formule semi-développée de l'éthane",
          "paragraphText": "La formule semi-développée condense chaque groupe : pour l'éthane, on écrit CH₃–CH₃.\nElle montre la liaison entre les deux carbones, chacun portant 3 hydrogènes.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p02_q6",
            "type": "mcq",
            "prompt": "La formule semi-développée de l'éthane s'écrit :",
            "options": [
              "CH₃–CH₃",
              "CH₂=CH₂",
              "CH≡CH",
              "CH₃–CH₂–CH₃"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux carbones simplement liés portant chacun 3 hydrogènes : CH₃–CH₃. Les autres formules sont celles de l'éthène, de l'éthyne et du propane."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l01_alcanes_p02_q1",
          "type": "mcq",
          "prompt": "On appelle chaîne carbonée :",
          "options": [
            "L'enchaînement des atomes de carbone d'une molécule organique",
            "L'ensemble des atomes d'hydrogène",
            "La liste des liaisons doubles",
            "Le groupe fonctionnel d'une molécule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, la chaîne carbonée est l'enchaînement des atomes de carbone de la molécule."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p02_q2",
          "type": "mcq",
          "prompt": "La formule brute de l'éthane est :",
          "options": [
            "$\\mathrm{C_2H_4}$",
            "$\\mathrm{C_2H_6}$",
            "$\\mathrm{C_2H_2}$",
            "$\\mathrm{CH_4}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour $n = 2$, $2n+2 = 6$ : l'éthane est $\\mathrm{C_2H_6}$."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p02_q3",
          "type": "mcq",
          "prompt": "Dans l'éthane, les deux groupes méthyle peuvent tourner autour de :",
          "options": [
            "L'axe d'une liaison C–H",
            "Un axe extérieur à la molécule",
            "L'axe de la liaison C–C",
            "Ils ne peuvent pas tourner"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document indique que l'axe de rotation est celui de la liaison carbone-carbone."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p02_q4",
          "type": "mcq",
          "prompt": "Une chaîne carbonée est dite linéaire si :",
          "options": [
            "Elle contient une double liaison",
            "Elle forme une boucle fermée",
            "Elle contient un carbone ramifié",
            "Les carbones se suivent sans former de boucle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une chaîne linéaire enchaîne les carbones à la suite, sans boucle ni ramification."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p02_q5",
          "type": "mcq",
          "prompt": "Une chaîne carbonée est ramifiée si au moins un de ses carbones est lié à :",
          "options": [
            "Un seul autre carbone",
            "Trois ou quatre autres atomes de carbone",
            "Un atome d'oxygène",
            "Quatre atomes d'hydrogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après le document, le carbone ramifié est lié à trois ou quatre autres atomes de carbone."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p02_q6",
          "type": "mcq",
          "prompt": "La formule semi-développée de l'éthane s'écrit :",
          "options": [
            "CH₃–CH₃",
            "CH₂=CH₂",
            "CH≡CH",
            "CH₃–CH₂–CH₃"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux carbones simplement liés portant chacun 3 hydrogènes : CH₃–CH₃. Les autres formules sont celles de l'éthène, de l'éthyne et du propane."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l01_alcanes_p03",
      "order": 3,
      "title": "Nommer les alcanes linéaires et les groupes alkyles",
      "summary": "Préfixe + ane pour les alcanes linéaires, et groupes alkyles obtenus par perte d'un hydrogène.",
      "conceptExplanation": "Les quatre premiers alcanes ont un nom consacré par l'usage : méthane ($n = 1$), éthane ($n = 2$), propane ($n = 3$) et butane ($n = 4$).\nPour les suivants, le nom de l'alcane linéaire s'obtient par : préfixe + ane, le préfixe indiquant le nombre d'atomes de carbone. Exemples du tableau : 5 carbones, pentane $\\mathrm{C_5H_{12}}$ ; 6, hexane ; 7, heptane ; 8, octane ; 9, nonane ; 10, décane.\nUn groupe alkyle dérive d'un alcane par la perte d'un atome d'hydrogène. On le nomme avec le préfixe du nombre de carbones et le suffixe « -yle » : méthyle CH₃–, éthyle CH₃–CH₂–, propyle CH₃–CH₂–CH₂–, isopropyle.",
      "keyRule": "Linéaire : préfixe du nombre de carbones + « ane » ; alkyle : même préfixe + « yle », après perte d'un hydrogène.",
      "formulas": [
        {
          "name": "Groupe méthyle",
          "formula": "\\mathrm{CH_3-}",
          "note": "Alkyle à 1 carbone."
        },
        {
          "name": "Groupe éthyle",
          "formula": "\\mathrm{CH_3-CH_2-}",
          "note": "Alkyle à 2 carbones."
        }
      ],
      "workedExample": {
        "title": "Nommer l'alcane linéaire à 8 carbones",
        "statement": "Donne le nom et la formule brute de l'alcane à chaîne linéaire comportant 8 atomes de carbone.",
        "methodSteps": [
          "Le préfixe pour 8 carbones est « oct », d'après le tableau du document.",
          "On ajoute le suffixe « ane » : on obtient l'octane.",
          "La formule générale donne $2 \\times 8 + 2 = 18$ hydrogènes."
        ],
        "conclusion": "C'est l'octane, de formule brute $\\mathrm{C_8H_{18}}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le groupe alkyle",
          "stepTheme": "Le groupe alkyle",
          "stepBadge": "Le groupe alkyle",
          "paragraphText": "• Groupe alkyle : groupe qui dérive d'un alcane par la perte d'un atome d'hydrogène.\nOn le nomme en ajoutant le suffixe « -yle » au préfixe indiquant le nombre de carbones.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p03_q1",
            "type": "mcq",
            "prompt": "Un groupe alkyle s'obtient à partir d'un alcane par :",
            "options": [
              "L'ajout d'un atome de carbone",
              "La perte d'un atome d'hydrogène",
              "L'ajout d'un groupe hydroxyle",
              "La perte d'un atome de carbone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, un groupe alkyle dérive d'un alcane qui a perdu un atome d'hydrogène."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Préfixe + ane",
          "stepTheme": "Préfixe + ane",
          "stepBadge": "Préfixe + ane",
          "paragraphText": "Pour les alcanes linéaires au-delà de 4 carbones, le nom est formé du préfixe indiquant le nombre de carbones, suivi de « ane ».\nExemple : « hex » pour 6 carbones donne l'hexane.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p03_q2",
            "type": "mcq",
            "prompt": "L'alcane linéaire à 6 atomes de carbone se nomme :",
            "options": [
              "Le pentane",
              "L'heptane",
              "L'hexane",
              "Le décane"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le préfixe « hex » (6 carbones) + « ane » donne l'hexane, $\\mathrm{C_6H_{14}}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Nommer un alcane linéaire",
          "stepTheme": "Nommer un alcane linéaire",
          "stepBadge": "Nommer un alcane linéaire",
          "paragraphText": "Méthode : compter les atomes de carbone de la chaîne, choisir le préfixe correspondant, puis ajouter « ane ».\nPour 7 carbones, le préfixe est « hept ».",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p03_q3",
            "type": "mcq",
            "prompt": "Le nom de l'alcane linéaire à 7 atomes de carbone est :",
            "options": [
              "L'octane",
              "Le nonane",
              "Le butane",
              "L'heptane"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sept carbones : préfixe « hept » + « ane » = heptane, $\\mathrm{C_7H_{16}}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les quatre premiers alcanes",
          "stepTheme": "Les quatre premiers alcanes",
          "stepBadge": "Les quatre premiers alcanes",
          "paragraphText": "Les quatre premiers alcanes ont un nom consacré par l'usage, à connaître par cœur.\nCe sont le méthane, l'éthane, le propane et le butane, pour 1 à 4 carbones.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p03_q4",
            "type": "mcq",
            "prompt": "L'alcane linéaire à 3 atomes de carbone est :",
            "options": [
              "Le propane",
              "Le méthane",
              "Le pentane",
              "L'éthane"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Trois carbones correspondent au propane, $\\mathrm{C_3H_8}$, l'un des quatre premiers noms consacrés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le groupe isopropyle",
          "stepTheme": "Le groupe isopropyle",
          "stepBadge": "Le groupe isopropyle",
          "paragraphText": "Piège : le groupe propyle est linéaire, CH₃–CH₂–CH₂–, alors que le groupe isopropyle est ramifié.\nDans l'isopropyle, le carbone central, lié aux deux méthyles, est celui qui se rattache au reste de la molécule.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p03_q5",
            "type": "mcq",
            "prompt": "Le groupe isopropyle correspond à la formule :",
            "options": [
              "$\\mathrm{CH_3-CH_2-CH_2-}$",
              "$\\mathrm{CH_3-CH(CH_3)-}$",
              "$\\mathrm{CH_3-}$",
              "$\\mathrm{CH_3-CH_2-}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'isopropyle est le propyle ramifié : un carbone central lié à deux groupes méthyle. La première formule est celle du propyle linéaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le groupe éthyle",
          "stepTheme": "Le groupe éthyle",
          "stepBadge": "Le groupe éthyle",
          "paragraphText": "Le groupe éthyle dérive de l'éthane par perte d'un hydrogène.\nSa formule est CH₃–CH₂–, avec le suffixe « -yle ».",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p03_q6",
            "type": "mcq",
            "prompt": "Le groupe éthyle a pour formule :",
            "options": [
              "$\\mathrm{CH_3-}$",
              "$\\mathrm{CH_3-CH_2-CH_2-}$",
              "$\\mathrm{CH_3-CH_2-}$",
              "$\\mathrm{-CH_2-CH_2-}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'éthyle compte 2 carbones après perte d'un hydrogène de l'éthane : CH₃–CH₂–."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l01_alcanes_p03_q1",
          "type": "mcq",
          "prompt": "Un groupe alkyle s'obtient à partir d'un alcane par :",
          "options": [
            "L'ajout d'un atome de carbone",
            "La perte d'un atome d'hydrogène",
            "L'ajout d'un groupe hydroxyle",
            "La perte d'un atome de carbone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, un groupe alkyle dérive d'un alcane qui a perdu un atome d'hydrogène."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p03_q2",
          "type": "mcq",
          "prompt": "L'alcane linéaire à 6 atomes de carbone se nomme :",
          "options": [
            "Le pentane",
            "L'heptane",
            "L'hexane",
            "Le décane"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le préfixe « hex » (6 carbones) + « ane » donne l'hexane, $\\mathrm{C_6H_{14}}$."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p03_q3",
          "type": "mcq",
          "prompt": "Le nom de l'alcane linéaire à 7 atomes de carbone est :",
          "options": [
            "L'octane",
            "Le nonane",
            "Le butane",
            "L'heptane"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sept carbones : préfixe « hept » + « ane » = heptane, $\\mathrm{C_7H_{16}}$."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p03_q4",
          "type": "mcq",
          "prompt": "L'alcane linéaire à 3 atomes de carbone est :",
          "options": [
            "Le propane",
            "Le méthane",
            "Le pentane",
            "L'éthane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trois carbones correspondent au propane, $\\mathrm{C_3H_8}$, l'un des quatre premiers noms consacrés."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p03_q5",
          "type": "mcq",
          "prompt": "Le groupe isopropyle correspond à la formule :",
          "options": [
            "$\\mathrm{CH_3-CH_2-CH_2-}$",
            "$\\mathrm{CH_3-CH(CH_3)-}$",
            "$\\mathrm{CH_3-}$",
            "$\\mathrm{CH_3-CH_2-}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'isopropyle est le propyle ramifié : un carbone central lié à deux groupes méthyle. La première formule est celle du propyle linéaire."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p03_q6",
          "type": "mcq",
          "prompt": "Le groupe éthyle a pour formule :",
          "options": [
            "$\\mathrm{CH_3-}$",
            "$\\mathrm{CH_3-CH_2-CH_2-}$",
            "$\\mathrm{CH_3-CH_2-}$",
            "$\\mathrm{-CH_2-CH_2-}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'éthyle compte 2 carbones après perte d'un hydrogène de l'éthane : CH₃–CH₂–."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l01_alcanes_p04",
      "order": 4,
      "title": "Nommer les alcanes ramifiés",
      "summary": "Chaîne principale la plus longue, numérotation aux plus petits indices et ramifications par ordre alphabétique.",
      "conceptExplanation": "Pour nommer un alcane ramifié, on suit trois étapes.\nD'abord, on recherche la chaîne la plus longue, appelée chaîne principale : son nombre d'atomes de carbone détermine le nom de l'alcane.\nEnsuite, on numérote la chaîne principale de sorte que les indices de position des groupes alkyles soient les plus petits possibles.\nEnfin, le nom est constitué des noms des ramifications, précédés de leur indice de position suivi d'un tiret, puis du nom de la chaîne principale. Les ramifications sont indiquées par ordre alphabétique et on supprime le « e » final de leur nom.\nDans le cas de plusieurs substituants identiques, on utilise les préfixes di, tri, tétra. Exemples du document : 2-méthylbutane, 4-éthyl-2-méthylhexane et 2,2,3-triméthylbutane.",
      "keyRule": "La chaîne la plus longue d'abord, la numérotation aux plus petits indices ensuite, les ramifications par ordre alphabétique enfin.",
      "formulas": [],
      "workedExample": {
        "title": "Nommer l'alcane ramifié de l'exemple du document",
        "statement": "Un alcane possède une chaîne principale de 4 carbones et un groupe méthyle sur le carbone n°2. Donne son nom, comme dans les exemples du document.",
        "methodSteps": [
          "La chaîne la plus longue compte 4 carbones : c'est un butane.",
          "La ramification est un méthyle, situé sur le carbone n°2.",
          "On écrit l'indice, un tiret, le nom de la ramification sans son « e » final, puis « butane »."
        ],
        "conclusion": "Le composé est le 2-méthylbutane."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La chaîne principale",
          "stepTheme": "La chaîne principale",
          "stepBadge": "La chaîne principale",
          "paragraphText": "Première étape : rechercher la chaîne la plus longue, appelée chaîne principale.\nSon nombre d'atomes de carbone détermine le nom de base de l'alcane ramifié.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p04_q1",
            "type": "mcq",
            "prompt": "Dans la nomenclature d'un alcane ramifié, le nom de base est déterminé par :",
            "options": [
              "Le nombre total de carbones de la molécule",
              "La chaîne carbonée la plus longue",
              "La ramification la plus grosse",
              "Le nombre de ramifications"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la longueur de la chaîne principale, la plus longue, qui donne le nom de l'alcane."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Numéroter la chaîne principale",
          "stepTheme": "Numéroter la chaîne principale",
          "stepBadge": "Numéroter la chaîne principale",
          "paragraphText": "Deuxième étape : numéroter la chaîne principale de sorte que les indices de position des groupes alkyles soient les plus petits possibles.\nOn choisit donc le sens de numérotation le plus favorable.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p04_q2",
            "type": "mcq",
            "prompt": "On numérote la chaîne principale de façon que les indices des ramifications soient :",
            "options": [
              "Les plus grands possibles",
              "Égaux entre eux",
              "Les plus petits possibles",
              "Toujours impairs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La règle impose les indices de position les plus petits possibles pour les groupes alkyles."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'ordre alphabétique des ramifications",
          "stepTheme": "L'ordre alphabétique des ramifications",
          "stepBadge": "L'ordre alphabétique des ramifications",
          "paragraphText": "Le nom de l'alcane cite les ramifications par ordre alphabétique, chacune précédée de son indice de position.\nOn supprime le « e » final du nom de chaque ramification, comme dans 4-éthyl-2-méthylhexane.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p04_q3",
            "type": "mcq",
            "prompt": "Dans le nom d'un alcane ramifié, les ramifications sont citées :",
            "options": [
              "Par taille croissante",
              "Dans l'ordre de leur découverte",
              "Par ordre alphabétique",
              "Sans indice de position"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document impose l'ordre alphabétique, avec l'indice de position devant chaque ramification."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Plusieurs substituants identiques",
          "stepTheme": "Plusieurs substituants identiques",
          "stepBadge": "Plusieurs substituants identiques",
          "paragraphText": "Quand plusieurs ramifications sont identiques, on utilise les préfixes di, tri, tétra devant leur nom.\nChaque position est indiquée : par exemple 2,2,3-triméthylbutane porte trois groupes méthyle.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p04_q4",
            "type": "mcq",
            "prompt": "Le composé 2,2,3-triméthylbutane possède :",
            "options": [
              "Deux groupes méthyle",
              "Trois groupes éthyle",
              "Un seul groupe méthyle répété dans le nom",
              "Trois groupes méthyle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le préfixe « tri » indique trois groupes méthyle, aux positions 2, 2 et 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le bon exemple du document",
          "stepTheme": "Le bon exemple du document",
          "stepBadge": "Le bon exemple du document",
          "paragraphText": "Piège : confondre la chaîne principale avec une ramification fausse le nom entier.\nDans l'exemple du document, la plus longue chaîne compte 6 carbones avec un éthyle en 4 et un méthyle en 2.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p04_q5",
            "type": "mcq",
            "prompt": "Le nom donné dans le document à l'alcane de chaîne principale à 6 carbones portant un éthyle en position 4 et un méthyle en position 2 est :",
            "options": [
              "Le 4-éthyl-2-méthylhexane",
              "Le 2-éthyl-4-méthylhexane",
              "Le 4-éthyl-2-méthylpentane",
              "Le 3-éthyl-5-méthylhexane"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaîne principale : hexane ; ramifications par ordre alphabétique : éthyl en 4, méthyl en 2, d'où 4-éthyl-2-méthylhexane."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Nommer un alcane de l'activité d'application",
          "stepTheme": "Nommer un alcane de l'activité d'application",
          "stepBadge": "Nommer un alcane de l'activité d'application",
          "paragraphText": "L'activité d'application du document demande de nommer plusieurs alcanes, dont une chaîne linéaire de 4 carbones.\nSa solution est simplement le nom consacré pour 4 carbones.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p04_q6",
            "type": "mcq",
            "prompt": "D'après la solution de l'activité d'application, la chaîne linéaire CH₃–CH₂–CH₂–CH₃ se nomme :",
            "options": [
              "Le propane",
              "Le butane",
              "Le 2-méthylbutane",
              "Le pentane"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quatre carbones en ligne : c'est le butane, sans aucune ramification."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l01_alcanes_p04_q1",
          "type": "mcq",
          "prompt": "Dans la nomenclature d'un alcane ramifié, le nom de base est déterminé par :",
          "options": [
            "Le nombre total de carbones de la molécule",
            "La chaîne carbonée la plus longue",
            "La ramification la plus grosse",
            "Le nombre de ramifications"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la longueur de la chaîne principale, la plus longue, qui donne le nom de l'alcane."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p04_q2",
          "type": "mcq",
          "prompt": "On numérote la chaîne principale de façon que les indices des ramifications soient :",
          "options": [
            "Les plus grands possibles",
            "Égaux entre eux",
            "Les plus petits possibles",
            "Toujours impairs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La règle impose les indices de position les plus petits possibles pour les groupes alkyles."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p04_q3",
          "type": "mcq",
          "prompt": "Dans le nom d'un alcane ramifié, les ramifications sont citées :",
          "options": [
            "Par taille croissante",
            "Dans l'ordre de leur découverte",
            "Par ordre alphabétique",
            "Sans indice de position"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document impose l'ordre alphabétique, avec l'indice de position devant chaque ramification."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p04_q4",
          "type": "mcq",
          "prompt": "Le composé 2,2,3-triméthylbutane possède :",
          "options": [
            "Deux groupes méthyle",
            "Trois groupes éthyle",
            "Un seul groupe méthyle répété dans le nom",
            "Trois groupes méthyle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le préfixe « tri » indique trois groupes méthyle, aux positions 2, 2 et 3."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p04_q5",
          "type": "mcq",
          "prompt": "Le nom donné dans le document à l'alcane de chaîne principale à 6 carbones portant un éthyle en position 4 et un méthyle en position 2 est :",
          "options": [
            "Le 4-éthyl-2-méthylhexane",
            "Le 2-éthyl-4-méthylhexane",
            "Le 4-éthyl-2-méthylpentane",
            "Le 3-éthyl-5-méthylhexane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaîne principale : hexane ; ramifications par ordre alphabétique : éthyl en 4, méthyl en 2, d'où 4-éthyl-2-méthylhexane."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p04_q6",
          "type": "mcq",
          "prompt": "D'après la solution de l'activité d'application, la chaîne linéaire CH₃–CH₂–CH₂–CH₃ se nomme :",
          "options": [
            "Le propane",
            "Le butane",
            "Le 2-méthylbutane",
            "Le pentane"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Quatre carbones en ligne : c'est le butane, sans aucune ramification."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l01_alcanes_p05",
      "order": 5,
      "title": "Les cyclanes et l'isomérie de chaîne",
      "summary": "Cyclanes de formule $\\mathrm{C_nH_{2n}}$ et isomères de chaîne de même formule brute.",
      "conceptExplanation": "Les cyclanes, ou cycloalcanes, sont les hydrocarbures dans lesquels les liaisons carbone-carbone sont des liaisons simples et dont la chaîne carbonée se referme sur elle-même.\nLeur formule brute générale est $\\mathrm{C_nH_{2n}}$. Le nom d'un cyclane non ramifié s'obtient en faisant précéder du préfixe « cyclo » le nom de l'alcane linéaire correspondant : cyclopropane, cyclopentane.\nPour les cyclanes ramifiés, on utilise les mêmes règles que pour les alcanes ramifiés, par exemple le 1-éthyl-3-méthylcyclopentane.\nOn appelle isomères de chaîne des composés qui possèdent la même formule brute mais des formules semi-développées différentes. Pour $\\mathrm{C_5H_{12}}$ : le n-pentane, le 2-méthylbutane et le 2,2-diméthylpropane.",
      "keyRule": "Un cycle fait perdre deux hydrogènes : cyclane $\\mathrm{C_nH_{2n}}$ contre alcane $\\mathrm{C_nH_{2n+2}}$ ; mêmes formules brutes mais semi-développées différentes = isomères de chaîne.",
      "formulas": [
        {
          "name": "Formule brute générale des cyclanes",
          "formula": "\\mathrm{C_nH_{2n}}",
          "note": "La fermeture du cycle enlève 2 hydrogènes par rapport à l'alcane."
        }
      ],
      "workedExample": {
        "title": "Les trois isomères de formule $\\mathrm{C_5H_{12}}$",
        "statement": "Donne les noms des isomères de chaîne de formule brute $\\mathrm{C_5H_{12}}$, comme dans l'activité d'application du document.",
        "methodSteps": [
          "Chaîne linéaire de 5 carbones : c'est le n-pentane.",
          "Chaîne de 4 carbones avec un méthyle sur le carbone n°2 : c'est le 2-méthylbutane.",
          "Chaîne de 3 carbones avec deux méthyles sur le carbone central : c'est le 2,2-diméthylpropane."
        ],
        "conclusion": "Les trois isomères sont le n-pentane, le 2-méthylbutane et le 2,2-diméthylpropane : même formule brute, formules semi-développées différentes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un cyclane",
          "stepTheme": "Définition d'un cyclane",
          "stepBadge": "Définition d'un cyclane",
          "paragraphText": "• Cyclane (ou cycloalcane) : hydrocarbure dont les liaisons carbone-carbone sont des liaisons simples et dont la chaîne carbonée se referme sur elle-même.\nLe cyclopropane et le cyclopentane sont cités dans le document.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p05_q1",
            "type": "mcq",
            "prompt": "Un cyclane est un hydrocarbure dont :",
            "options": [
              "La chaîne contient une double liaison",
              "La chaîne carbonée se referme sur elle-même, avec des liaisons simples",
              "La chaîne est toujours ramifiée",
              "La formule contient un oxygène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition insiste sur deux points : liaisons simples uniquement et chaîne refermée en cycle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule brute des cyclanes",
          "stepTheme": "La formule brute des cyclanes",
          "stepBadge": "La formule brute des cyclanes",
          "paragraphText": "La formule brute générale des cyclanes est $\\mathrm{C_nH_{2n}}$.\nElle diffère de celle des alcanes acycliques, $\\mathrm{C_nH_{2n+2}}$, de deux hydrogènes.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p05_q2",
            "type": "mcq",
            "prompt": "Un cyclane comportant 5 atomes de carbone a pour formule brute :",
            "options": [
              "$\\mathrm{C_5H_{12}}$",
              "$\\mathrm{C_5H_8}$",
              "$\\mathrm{C_5H_{10}}$",
              "$\\mathrm{C_5H_5}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec $\\mathrm{C_nH_{2n}}$ et $n = 5$, on obtient $\\mathrm{C_5H_{10}}$, celle du cyclopentane."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Nommer un cyclane",
          "stepTheme": "Nommer un cyclane",
          "stepBadge": "Nommer un cyclane",
          "paragraphText": "Méthode : faire précéder du préfixe « cyclo » le nom de l'alcane linéaire correspondant au nombre de carbones du cycle.\nUn cycle de 5 carbones donne ainsi le cyclopentane.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p05_q3",
            "type": "mcq",
            "prompt": "Le cycle saturé à 3 atomes de carbone se nomme :",
            "options": [
              "Le cyclopropane",
              "Le propane",
              "Le cyclobutane",
              "Le propène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Préfixe « cyclo » + propane (3 carbones) = cyclopropane."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les isomères de chaîne",
          "stepTheme": "Les isomères de chaîne",
          "stepBadge": "Les isomères de chaîne",
          "paragraphText": "• Isomères de chaîne : composés qui possèdent la même formule brute mais des formules semi-développées différentes.\nLe n-butane et le 2-méthylpropane, tous deux $\\mathrm{C_4H_{10}}$, en sont un exemple du document.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p05_q4",
            "type": "mcq",
            "prompt": "Deux isomères de chaîne se distinguent par :",
            "options": [
              "Leur formule brute",
              "Le nombre de leurs atomes d'oxygène",
              "Leurs formules semi-développées, à formule brute identique",
              "La présence d'une double liaison"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du document : même formule brute, formules semi-développées différentes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre alcane et cyclane",
          "stepTheme": "Ne pas confondre alcane et cyclane",
          "stepBadge": "Ne pas confondre alcane et cyclane",
          "paragraphText": "Piège : appliquer $\\mathrm{C_nH_{2n+2}}$ à un cycle donne deux hydrogènes de trop.\nLa fermeture de la chaîne en cycle impose la formule $\\mathrm{C_nH_{2n}}$ pour les cyclanes.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p05_q5",
            "type": "mcq",
            "prompt": "Quelle formule brute correspond à un cyclane à 6 carbones ?",
            "options": [
              "$\\mathrm{C_6H_{14}}$",
              "$\\mathrm{C_6H_{12}}$",
              "$\\mathrm{C_6H_6}$",
              "$\\mathrm{C_6H_{16}}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Cyclane : $\\mathrm{C_nH_{2n}}$, soit $\\mathrm{C_6H_{12}}$ pour $n = 6$ ; $\\mathrm{C_6H_{14}}$ serait l'hexane acyclique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un cyclane ramifié du document",
          "stepTheme": "Un cyclane ramifié du document",
          "stepBadge": "Un cyclane ramifié du document",
          "paragraphText": "Pour les cyclanes à chaîne ramifiée, on applique les mêmes règles que pour les alcanes ramifiés.\nLe document nomme par exemple un cyclopentane portant un éthyle en 1 et un méthyle en 3.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p05_q6",
            "type": "mcq",
            "prompt": "Le nom du cyclopentane portant un groupe éthyle en position 1 et un groupe méthyle en position 3 est :",
            "options": [
              "Le 1-méthyl-3-éthylcyclopentane",
              "Le 3-éthyl-1-méthylpentane",
              "Le 1-éthyl-3-méthylcyclopentane",
              "L'éthylméthylpentane"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'exemple du document : 1-éthyl-3-méthylcyclopentane, ramifications citées par ordre alphabétique sur le cycle."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l01_alcanes_p05_q1",
          "type": "mcq",
          "prompt": "Un cyclane est un hydrocarbure dont :",
          "options": [
            "La chaîne contient une double liaison",
            "La chaîne carbonée se referme sur elle-même, avec des liaisons simples",
            "La chaîne est toujours ramifiée",
            "La formule contient un oxygène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition insiste sur deux points : liaisons simples uniquement et chaîne refermée en cycle."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p05_q2",
          "type": "mcq",
          "prompt": "Un cyclane comportant 5 atomes de carbone a pour formule brute :",
          "options": [
            "$\\mathrm{C_5H_{12}}$",
            "$\\mathrm{C_5H_8}$",
            "$\\mathrm{C_5H_{10}}$",
            "$\\mathrm{C_5H_5}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec $\\mathrm{C_nH_{2n}}$ et $n = 5$, on obtient $\\mathrm{C_5H_{10}}$, celle du cyclopentane."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p05_q3",
          "type": "mcq",
          "prompt": "Le cycle saturé à 3 atomes de carbone se nomme :",
          "options": [
            "Le cyclopropane",
            "Le propane",
            "Le cyclobutane",
            "Le propène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Préfixe « cyclo » + propane (3 carbones) = cyclopropane."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p05_q4",
          "type": "mcq",
          "prompt": "Deux isomères de chaîne se distinguent par :",
          "options": [
            "Leur formule brute",
            "Le nombre de leurs atomes d'oxygène",
            "Leurs formules semi-développées, à formule brute identique",
            "La présence d'une double liaison"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du document : même formule brute, formules semi-développées différentes."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p05_q5",
          "type": "mcq",
          "prompt": "Quelle formule brute correspond à un cyclane à 6 carbones ?",
          "options": [
            "$\\mathrm{C_6H_{14}}$",
            "$\\mathrm{C_6H_{12}}$",
            "$\\mathrm{C_6H_6}$",
            "$\\mathrm{C_6H_{16}}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Cyclane : $\\mathrm{C_nH_{2n}}$, soit $\\mathrm{C_6H_{12}}$ pour $n = 6$ ; $\\mathrm{C_6H_{14}}$ serait l'hexane acyclique."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p05_q6",
          "type": "mcq",
          "prompt": "Le nom du cyclopentane portant un groupe éthyle en position 1 et un groupe méthyle en position 3 est :",
          "options": [
            "Le 1-méthyl-3-éthylcyclopentane",
            "Le 3-éthyl-1-méthylpentane",
            "Le 1-éthyl-3-méthylcyclopentane",
            "L'éthylméthylpentane"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'exemple du document : 1-éthyl-3-méthylcyclopentane, ramifications citées par ordre alphabétique sur le cycle."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l01_alcanes_p06",
      "order": 6,
      "title": "La combustion des alcanes",
      "summary": "Combustion complète en dioxyde de carbone et eau, et combustion incomplète quand le dioxygène manque.",
      "conceptExplanation": "La combustion complète des alcanes a pour équation-bilan générale : $\\mathrm{C_nH_{2n+2} + \\frac{3n+1}{2}\\,O_2 \\longrightarrow n\\,CO_2 + (n+1)\\,H_2O}$. Elle produit du dioxyde de carbone et de l'eau.\nExemple du document, pour le butane : $\\mathrm{C_4H_{10} + \\frac{13}{2}\\,O_2 \\longrightarrow 4\\,CO_2 + 5\\,H_2O}$.\nLorsque le dioxygène est en défaut, la combustion est incomplète. Les produits de la réaction sont alors : l'eau, le dioxyde de carbone, le carbone et le monoxyde de carbone CO, gaz dangereux.",
      "keyRule": "Complète si le dioxygène suffit : seuls $\\mathrm{CO_2}$ et $\\mathrm{H_2O}$ se forment ; incomplète s'il manque : carbone et monoxyde de carbone apparaissent en plus.",
      "formulas": [
        {
          "name": "Combustion complète (équation générale)",
          "formula": "\\mathrm{C_nH_{2n+2} + \\frac{3n+1}{2}\\,O_2 \\longrightarrow n\\,CO_2 + (n+1)\\,H_2O}",
          "note": "Produits : dioxyde de carbone et eau."
        },
        {
          "name": "Combustion complète du butane",
          "formula": "\\mathrm{C_4H_{10} + \\frac{13}{2}\\,O_2 \\longrightarrow 4\\,CO_2 + 5\\,H_2O}",
          "note": "Exemple du document, avec n = 4."
        }
      ],
      "workedExample": {
        "title": "Équation de la combustion complète de l'éthane",
        "statement": "Écris l'équation-bilan de la combustion complète de l'éthane, comme dans l'activité d'application du document.",
        "methodSteps": [
          "L'éthane correspond à $n = 2$ dans l'équation générale.",
          "Le coefficient du dioxygène est $\\frac{3 \\times 2 + 1}{2}$, soit $\\frac{7}{2}$.",
          "On forme $n = 2$ molécules de $\\mathrm{CO_2}$ et $n+1 = 3$ molécules d'eau."
        ],
        "conclusion": "L'équation est $\\mathrm{C_2H_6 + \\frac{7}{2}\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$, conformément à la solution du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La combustion complète",
          "stepTheme": "La combustion complète",
          "stepBadge": "La combustion complète",
          "paragraphText": "• Combustion complète : combustion réalisée avec un dioxygène en quantité suffisante.\nPour un alcane, elle produit uniquement du dioxyde de carbone et de l'eau.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p06_q1",
            "type": "mcq",
            "prompt": "La combustion complète d'un alcane produit :",
            "options": [
              "Du dioxyde de carbone et de l'eau",
              "Du carbone et du monoxyde de carbone",
              "Un alcène et de l'eau",
              "Du dihydrogène et du dioxyde de carbone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'équation-bilan générale ne donne que $\\mathrm{CO_2}$ et $\\mathrm{H_2O}$ en produits."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'équation-bilan générale",
          "stepTheme": "L'équation-bilan générale",
          "stepBadge": "L'équation-bilan générale",
          "paragraphText": "L'équation générale fait intervenir le coefficient $\\frac{3n+1}{2}$ devant le dioxygène.\nElle donne $n$ molécules de dioxyde de carbone et $n+1$ molécules d'eau.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p06_q2",
            "type": "mcq",
            "prompt": "Dans l'équation générale de combustion complète d'un alcane, le nombre de molécules d'eau formées est :",
            "options": [
              "$n$",
              "$2n$",
              "$n+1$",
              "$2n+2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'équation du document produit $(n+1)\\,\\mathrm{H_2O}$ : chaque hydrogène supplémentaire par rapport à $\\mathrm{C_nH_{2n}}$ compte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Équilibrer la combustion du butane",
          "stepTheme": "Équilibrer la combustion du butane",
          "stepBadge": "Équilibrer la combustion du butane",
          "paragraphText": "Méthode : appliquer l'équation générale avec $n = 4$ pour le butane.\nLe coefficient du dioxygène devient $\\frac{13}{2}$, celui du dioxyde de carbone 4 et celui de l'eau 5.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p06_q3",
            "type": "mcq",
            "prompt": "L'équation-bilan de la combustion complète du butane est :",
            "options": [
              "$\\mathrm{C_4H_{10} + 5\\,O_2 \\longrightarrow 4\\,CO_2 + 5\\,H_2O}$",
              "$\\mathrm{C_4H_{10} + \\frac{9}{2}\\,O_2 \\longrightarrow 4\\,CO_2 + 4\\,H_2O}$",
              "$\\mathrm{C_4H_{10} + 6\\,O_2 \\longrightarrow 4\\,CO_2 + 6\\,H_2O}$",
              "$\\mathrm{C_4H_{10} + \\frac{13}{2}\\,O_2 \\longrightarrow 4\\,CO_2 + 5\\,H_2O}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'exemple du document : le bilan des oxygènes donne 13 atomes à gauche comme à droite, soit $\\frac{13}{2}\\,\\mathrm{O_2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La combustion incomplète",
          "stepTheme": "La combustion incomplète",
          "stepBadge": "La combustion incomplète",
          "paragraphText": "• Combustion incomplète : combustion qui se produit lorsque le dioxygène est en défaut.\nSes produits sont l'eau, le dioxyde de carbone, le carbone et le monoxyde de carbone.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p06_q4",
            "type": "mcq",
            "prompt": "La combustion d'un alcane devient incomplète lorsque :",
            "options": [
              "La température est trop élevée",
              "Le dioxygène est en défaut",
              "L'alcane est ramifié",
              "La réaction a lieu à la lumière"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document est explicite : c'est le défaut de dioxygène qui rend la combustion incomplète."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les produits dangereux de l'incomplète",
          "stepTheme": "Les produits dangereux de l'incomplète",
          "stepBadge": "Les produits dangereux de l'incomplète",
          "paragraphText": "Piège : croire que la combustion incomplète ne donne que de l'eau et du dioxyde de carbone.\nElle forme aussi du carbone et du monoxyde de carbone CO, un gaz toxique.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p06_q5",
            "type": "mcq",
            "prompt": "Parmi les produits suivants, lequel n'apparaît que lors d'une combustion incomplète ?",
            "options": [
              "L'eau",
              "Le dioxyde de carbone",
              "Le monoxyde de carbone",
              "La vapeur d'eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le monoxyde de carbone, comme le carbone, caractérise la combustion incomplète ; eau et dioxyde de carbone se forment dans les deux cas."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Identifier un alcane par sa combustion (exercice 4)",
          "stepTheme": "Identifier un alcane par sa combustion (exercice 4)",
          "stepBadge": "Identifier un alcane par sa combustion (exercice 4)",
          "paragraphText": "Dans l'exercice 4 du document, la combustion complète de 3,6 g d'un alcane donne 11 g de dioxyde de carbone et 5,4 g d'eau.\nLe bilan molaire conduit à $n = 5$ : l'alcane est de formule $\\mathrm{C_5H_{12}}$.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p06_q6",
            "type": "mcq",
            "prompt": "Dans l'exercice 4 du document, l'alcane identifié par sa combustion a pour formule brute :",
            "options": [
              "$\\mathrm{C_4H_{10}}$",
              "$\\mathrm{C_5H_{12}}$",
              "$\\mathrm{C_3H_8}$",
              "$\\mathrm{C_6H_{14}}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les quantités de matière de $\\mathrm{CO_2}$ (0,25 mol) et d'eau (0,3 mol) donnent $n = 5$, soit $\\mathrm{C_5H_{12}}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l01_alcanes_p06_q1",
          "type": "mcq",
          "prompt": "La combustion complète d'un alcane produit :",
          "options": [
            "Du dioxyde de carbone et de l'eau",
            "Du carbone et du monoxyde de carbone",
            "Un alcène et de l'eau",
            "Du dihydrogène et du dioxyde de carbone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équation-bilan générale ne donne que $\\mathrm{CO_2}$ et $\\mathrm{H_2O}$ en produits."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p06_q2",
          "type": "mcq",
          "prompt": "Dans l'équation générale de combustion complète d'un alcane, le nombre de molécules d'eau formées est :",
          "options": [
            "$n$",
            "$2n$",
            "$n+1$",
            "$2n+2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'équation du document produit $(n+1)\\,\\mathrm{H_2O}$ : chaque hydrogène supplémentaire par rapport à $\\mathrm{C_nH_{2n}}$ compte."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p06_q3",
          "type": "mcq",
          "prompt": "L'équation-bilan de la combustion complète du butane est :",
          "options": [
            "$\\mathrm{C_4H_{10} + 5\\,O_2 \\longrightarrow 4\\,CO_2 + 5\\,H_2O}$",
            "$\\mathrm{C_4H_{10} + \\frac{9}{2}\\,O_2 \\longrightarrow 4\\,CO_2 + 4\\,H_2O}$",
            "$\\mathrm{C_4H_{10} + 6\\,O_2 \\longrightarrow 4\\,CO_2 + 6\\,H_2O}$",
            "$\\mathrm{C_4H_{10} + \\frac{13}{2}\\,O_2 \\longrightarrow 4\\,CO_2 + 5\\,H_2O}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'exemple du document : le bilan des oxygènes donne 13 atomes à gauche comme à droite, soit $\\frac{13}{2}\\,\\mathrm{O_2}$."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p06_q4",
          "type": "mcq",
          "prompt": "La combustion d'un alcane devient incomplète lorsque :",
          "options": [
            "La température est trop élevée",
            "Le dioxygène est en défaut",
            "L'alcane est ramifié",
            "La réaction a lieu à la lumière"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document est explicite : c'est le défaut de dioxygène qui rend la combustion incomplète."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p06_q5",
          "type": "mcq",
          "prompt": "Parmi les produits suivants, lequel n'apparaît que lors d'une combustion incomplète ?",
          "options": [
            "L'eau",
            "Le dioxyde de carbone",
            "Le monoxyde de carbone",
            "La vapeur d'eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le monoxyde de carbone, comme le carbone, caractérise la combustion incomplète ; eau et dioxyde de carbone se forment dans les deux cas."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p06_q6",
          "type": "mcq",
          "prompt": "Dans l'exercice 4 du document, l'alcane identifié par sa combustion a pour formule brute :",
          "options": [
            "$\\mathrm{C_4H_{10}}$",
            "$\\mathrm{C_5H_{12}}$",
            "$\\mathrm{C_3H_8}$",
            "$\\mathrm{C_6H_{14}}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les quantités de matière de $\\mathrm{CO_2}$ (0,25 mol) et d'eau (0,3 mol) donnent $n = 5$, soit $\\mathrm{C_5H_{12}}$."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l01_alcanes_p07",
      "order": 7,
      "title": "La chloration du méthane et les dérivés chlorés",
      "summary": "Substitution photochimique successive des hydrogènes du méthane et usages des quatre dérivés chlorés.",
      "conceptExplanation": "La chloration du méthane se fait en présence de lumière : c'est une réaction photochimique.\nAu cours de cette réaction, chaque atome de chlore se substitue, c'est-à-dire remplace, à un atome d'hydrogène. Il se forme successivement quatre produits : le monochlorométhane $\\mathrm{CH_3Cl}$, le dichlorométhane $\\mathrm{CH_2Cl_2}$, le trichlorométhane $\\mathrm{CHCl_3}$ et le tétrachlorométhane $\\mathrm{CCl_4}$, avec formation de chlorure d'hydrogène HCl à chaque étape.\nCes dérivés chlorés ont des usages importants : le monochlorométhane est un agent de réfrigération, le dichlorométhane un solvant, le trichlorométhane (chloroforme) un solvant et un intermédiaire de synthèse, autrefois anesthésique, et le tétrachlorométhane un excellent solvant du brome et de certains corps gras.\nLe document signale que certains dérivés halogénés contenant du chlore ou du fluor, comme les fréons, sont des gaz à effet de serre.",
      "keyRule": "Chloration = substitution sous l'effet de la lumière : les 4 hydrogènes du méthane sont remplacés un à un, jusqu'à $\\mathrm{CCl_4}$.",
      "formulas": [
        {
          "name": "Première chloration du méthane",
          "formula": "\\mathrm{CH_4 + Cl_2 \\longrightarrow CH_3Cl + HCl}",
          "note": "Réaction photochimique, en présence de lumière."
        },
        {
          "name": "Tétrachlorométhane",
          "formula": "\\mathrm{CCl_4}",
          "note": "Produit de la substitution des 4 hydrogènes."
        }
      ],
      "workedExample": {
        "title": "Les quatre étapes de la chloration du méthane",
        "statement": "Écris la suite des produits obtenus quand on chlore le méthane jusqu'au bout, en présence de lumière.",
        "methodSteps": [
          "Première substitution : $\\mathrm{CH_4 + Cl_2 \\longrightarrow CH_3Cl + HCl}$, le monochlorométhane.",
          "Deuxième substitution : on obtient le dichlorométhane $\\mathrm{CH_2Cl_2}$.",
          "Troisième puis quatrième substitutions : on obtient le trichlorométhane $\\mathrm{CHCl_3}$, puis le tétrachlorométhane $\\mathrm{CCl_4}$."
        ],
        "conclusion": "Les quatre dérivés sont $\\mathrm{CH_3Cl}$, $\\mathrm{CH_2Cl_2}$, $\\mathrm{CHCl_3}$ et $\\mathrm{CCl_4}$, chacun accompagné de HCl."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une réaction de substitution",
          "stepTheme": "Une réaction de substitution",
          "stepBadge": "Une réaction de substitution",
          "paragraphText": "• Substitution : réaction au cours de laquelle un atome en remplace un autre dans une molécule.\nDans la chloration du méthane, chaque atome de chlore se substitue à un atome d'hydrogène.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p07_q1",
            "type": "mcq",
            "prompt": "Dans la chloration du méthane, l'atome de chlore :",
            "options": [
              "S'additionne à une double liaison",
              "Se substitue à un atome d'hydrogène",
              "Remplace l'atome de carbone",
              "Fait apparaître un groupe hydroxyle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le mécanisme décrit par le document : le chlore prend la place d'un hydrogène, qui part dans HCl."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une réaction photochimique",
          "stepTheme": "Une réaction photochimique",
          "stepBadge": "Une réaction photochimique",
          "paragraphText": "La chloration du méthane se fait en présence de lumière.\nOn dit pour cela que c'est une réaction photochimique.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p07_q2",
            "type": "mcq",
            "prompt": "La chloration du méthane nécessite :",
            "options": [
              "Un catalyseur au nickel",
              "De l'acide sulfurique concentré",
              "La présence de lumière",
              "Une température de plusieurs centaines de degrés seule"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document précise que la chloration du méthane se fait en présence de lumière : c'est une réaction photochimique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les produits successifs",
          "stepTheme": "Les produits successifs",
          "stepBadge": "Les produits successifs",
          "paragraphText": "Les substitutions se succèdent : monochlorométhane, puis dichlorométhane, puis trichlorométhane, puis tétrachlorométhane.\nChaque étape consomme une molécule de dichlore et libère une molécule de HCl.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p07_q3",
            "type": "mcq",
            "prompt": "Le dichlorométhane a pour formule :",
            "options": [
              "$\\mathrm{CH_3Cl}$",
              "$\\mathrm{CH_2Cl_2}$",
              "$\\mathrm{CHCl_3}$",
              "$\\mathrm{CCl_4}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux hydrogènes ont été remplacés par deux chlores : $\\mathrm{CH_2Cl_2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les usages des dérivés chlorés",
          "stepTheme": "Les usages des dérivés chlorés",
          "stepBadge": "Les usages des dérivés chlorés",
          "paragraphText": "Le document attribue un usage à chaque dérivé : réfrigération pour le monochlorométhane, solvant pour le dichlorométhane.\nLe chloroforme sert aujourd'hui de solvant et d'intermédiaire de synthèse.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p07_q4",
            "type": "mcq",
            "prompt": "Le monochlorométhane est utilisé comme :",
            "options": [
              "Anesthésique général",
              "Solvant du brome",
              "Agent de réfrigération",
              "Carburant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document indique que le monochlorométhane, gaz très liquéfiable, sert d'agent de réfrigération grâce à la fraîcheur produite par son évaporation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le chloroforme n'est plus un anesthésique courant",
          "stepTheme": "Le chloroforme n'est plus un anesthésique courant",
          "stepBadge": "Le chloroforme n'est plus un anesthésique courant",
          "paragraphText": "Piège : le trichlorométhane, ou chloroforme, était autrefois utilisé comme anesthésique général en médecine.\nLe document précise qu'il sert aujourd'hui de solvant et d'intermédiaire de synthèse d'autres composés organiques.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p07_q5",
            "type": "mcq",
            "prompt": "Aujourd'hui, le trichlorométhane (chloroforme) est principalement utilisé comme :",
            "options": [
              "Agent de réfrigération",
              "Carburant automobile",
              "Anesthésique général courant",
              "Solvant et intermédiaire de synthèse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Son usage d'anesthésique appartient au passé ; le document lui donne les rôles actuels de solvant et d'intermédiaire de synthèse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le tétrachlorométhane, solvant",
          "stepTheme": "Le tétrachlorométhane, solvant",
          "stepBadge": "Le tétrachlorométhane, solvant",
          "paragraphText": "Le tétrachlorométhane est le produit de la substitution des quatre hydrogènes du méthane.\nLe document le présente comme un excellent solvant, utilisé en chimie organique pour la dissolution du brome et de certains corps gras.",
          "exercise": {
            "id": "premiere_c_chimie_l01_alcanes_p07_q6",
            "type": "mcq",
            "prompt": "Le tétrachlorométhane est surtout connu dans le document comme :",
            "options": [
              "Un excellent solvant du brome et de certains corps gras",
              "Un agent de réfrigération",
              "Un anesthésique",
              "Un gaz à effet de serre uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'usage donné par le document pour $\\mathrm{CCl_4}$ ; ce sont les fréons qui sont cités comme gaz à effet de serre."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l01_alcanes_p07_q1",
          "type": "mcq",
          "prompt": "Dans la chloration du méthane, l'atome de chlore :",
          "options": [
            "S'additionne à une double liaison",
            "Se substitue à un atome d'hydrogène",
            "Remplace l'atome de carbone",
            "Fait apparaître un groupe hydroxyle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le mécanisme décrit par le document : le chlore prend la place d'un hydrogène, qui part dans HCl."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p07_q2",
          "type": "mcq",
          "prompt": "La chloration du méthane nécessite :",
          "options": [
            "Un catalyseur au nickel",
            "De l'acide sulfurique concentré",
            "La présence de lumière",
            "Une température de plusieurs centaines de degrés seule"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document précise que la chloration du méthane se fait en présence de lumière : c'est une réaction photochimique."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p07_q3",
          "type": "mcq",
          "prompt": "Le dichlorométhane a pour formule :",
          "options": [
            "$\\mathrm{CH_3Cl}$",
            "$\\mathrm{CH_2Cl_2}$",
            "$\\mathrm{CHCl_3}$",
            "$\\mathrm{CCl_4}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux hydrogènes ont été remplacés par deux chlores : $\\mathrm{CH_2Cl_2}$."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p07_q4",
          "type": "mcq",
          "prompt": "Le monochlorométhane est utilisé comme :",
          "options": [
            "Anesthésique général",
            "Solvant du brome",
            "Agent de réfrigération",
            "Carburant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document indique que le monochlorométhane, gaz très liquéfiable, sert d'agent de réfrigération grâce à la fraîcheur produite par son évaporation."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p07_q5",
          "type": "mcq",
          "prompt": "Aujourd'hui, le trichlorométhane (chloroforme) est principalement utilisé comme :",
          "options": [
            "Agent de réfrigération",
            "Carburant automobile",
            "Anesthésique général courant",
            "Solvant et intermédiaire de synthèse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Son usage d'anesthésique appartient au passé ; le document lui donne les rôles actuels de solvant et d'intermédiaire de synthèse."
        },
        {
          "id": "premiere_c_chimie_l01_alcanes_p07_q6",
          "type": "mcq",
          "prompt": "Le tétrachlorométhane est surtout connu dans le document comme :",
          "options": [
            "Un excellent solvant du brome et de certains corps gras",
            "Un agent de réfrigération",
            "Un anesthésique",
            "Un gaz à effet de serre uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'usage donné par le document pour $\\mathrm{CCl_4}$ ; ce sont les fréons qui sont cités comme gaz à effet de serre."
        }
      ]
    }
  ]
};
