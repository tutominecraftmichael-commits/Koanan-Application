import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Estérification et hydrolyse d'un ester » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Estérification et hydrolyse d'un ester » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const CHIMIE_1ERE_CD_L07_ESTERIFICATION_HYDROLYSE: CurriculumChapter = {
  "id": "premiere_c_chimie_l07_esterification_hydrolyse",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 7,
  "title": "Leçon 7 : Estérification et hydrolyse d'un ester",
  "summary": "On définit les réactions d'estérification et d'hydrolyse d'un ester, réactions lentes, limitées et athermiques, puis on explique la notion d'équilibre chimique et on apprend à calculer et à améliorer le rendement de ces réactions.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Estérification et hydrolyse d'un ester » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01",
      "order": 1,
      "title": "La réaction d'estérification",
      "summary": "Définir l'estérification et écrire son équation-bilan, dans le cas général et pour l'éthanoate d'éthyle.",
      "conceptExplanation": "La réaction d'estérification est la réaction entre un acide carboxylique et un alcool ; elle conduit à la formation d'un ester et d'eau.\nDans le cas général : $\\mathrm{R-COOH + R'-OH \\rightleftharpoons R-COO-R' + H_2O}$.\nExemple du document : l'acide éthanoïque réagit avec l'éthanol pour donner l'éthanoate d'éthyle et de l'eau. Les esters sont les composés, d'origine animale ou végétale, utilisés dans certains parfums et produits cosmétiques.",
      "keyRule": "Estérification : acide carboxylique plus alcool donne ester plus eau.",
      "formulas": [
        {
          "name": "Équation générale de l'estérification",
          "formula": "\\mathrm{R-COOH + R'-OH \\rightleftharpoons R-COO-R' + H_2O}",
          "note": "R et R' sont des groupements alkyles."
        },
        {
          "name": "Formation de l'éthanoate d'éthyle",
          "formula": "\\mathrm{CH_3COOH + C_2H_5OH \\rightleftharpoons CH_3COOC_2H_5 + H_2O}",
          "note": "Acide éthanoïque plus éthanol."
        }
      ],
      "workedExample": {
        "title": "Préparer l'éthanoate d'éthyle (exercice 1)",
        "statement": "On souhaite préparer un ester, l'éthanoate d'éthyle. Nomme les réactifs nécessaires et écris l'équation-bilan de la réaction.",
        "methodSteps": [
          "Le nom de l'ester indique l'acide de départ : éthanoate renvoie à l'acide éthanoïque.",
          "La partie « d'éthyle » renvoie à l'alcool de départ : l'éthanol.",
          "On écrit alors : $\\mathrm{CH_3COOH + C_2H_5OH \\rightleftharpoons CH_3COOC_2H_5 + H_2O}$."
        ],
        "conclusion": "Les réactifs sont l'acide éthanoïque et l'éthanol, comme dans la solution de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l'estérification",
          "stepTheme": "Définition de l'estérification",
          "stepBadge": "Définition de l'estérification",
          "paragraphText": "• Estérification : réaction entre un acide carboxylique et un alcool.\nElle conduit à la formation d'un ester et de l'eau.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q1",
            "type": "mcq",
            "prompt": "La réaction d'estérification met en jeu :",
            "options": [
              "Un ester et de l'eau",
              "Un acide carboxylique et un alcool",
              "Deux alcools",
              "Un acide carboxylique et une cétone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, l'estérification est la réaction entre un acide carboxylique et un alcool ; elle forme un ester et de l'eau. L'ester et l'eau sont les réactifs de l'hydrolyse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les produits de l'estérification",
          "stepTheme": "Les produits de l'estérification",
          "stepBadge": "Les produits de l'estérification",
          "paragraphText": "Les produits de l'estérification sont toujours un ester et de l'eau.\nLe groupement caractéristique de l'ester, rappelé dans la Documentation, s'écrit sous la forme $\\mathrm{R-COO-R'}$.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q2",
            "type": "mcq",
            "prompt": "Les produits de la réaction d'estérification sont :",
            "options": [
              "Un ester et de l'eau",
              "Un acide et un alcool",
              "Du dioxyde de carbone et de l'eau",
              "Un aldéhyde et de l'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'estérification d'un acide carboxylique par un alcool donne un ester et de l'eau. L'acide et l'alcool sont les produits de l'hydrolyse, la réaction inverse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Écrire l'équation dans le cas général",
          "stepTheme": "Écrire l'équation dans le cas général",
          "stepBadge": "Écrire l'équation dans le cas général",
          "paragraphText": "Méthode : écrire l'acide sous la forme $\\mathrm{R-COOH}$ et l'alcool sous la forme $\\mathrm{R'-OH}$.\nL'ester formé s'écrit $\\mathrm{R-COO-R'}$ : le groupement R' de l'alcool se retrouve de l'autre côté de l'oxygène de la fonction ester.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q3",
            "type": "mcq",
            "prompt": "Dans l'équation générale, l'ester formé à partir de $\\mathrm{R-COOH}$ et $\\mathrm{R'-OH}$ s'écrit :",
            "options": [
              "$\\mathrm{R-OH}$",
              "$\\mathrm{R'-COOH}$",
              "$\\mathrm{R-COO-R'}$",
              "$\\mathrm{R-CO-R'}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'ester conserve le groupement R de l'acide et le groupement R' de l'alcool, reliés par la fonction ester : $\\mathrm{R-COO-R'}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'exemple de l'éthanoate d'éthyle",
          "stepTheme": "L'exemple de l'éthanoate d'éthyle",
          "stepBadge": "L'exemple de l'éthanoate d'éthyle",
          "paragraphText": "Exemple du document : l'acide éthanoïque réagit avec l'éthanol.\nOn obtient l'éthanoate d'éthyle $\\mathrm{CH_3COOC_2H_5}$ et de l'eau.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q4",
            "type": "mcq",
            "prompt": "La réaction entre l'acide éthanoïque et l'éthanol donne :",
            "options": [
              "Le méthanoate d'éthyle",
              "L'éthanoate de méthyle",
              "L'acide éthanoïque hydraté",
              "L'éthanoate d'éthyle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'exemple du document et l'activité d'application 1 : l'acide éthanoïque et l'éthanol donnent l'éthanoate d'éthyle et de l'eau."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre avec l'hydrolyse",
          "stepTheme": "Ne pas confondre avec l'hydrolyse",
          "stepBadge": "Ne pas confondre avec l'hydrolyse",
          "paragraphText": "Piège : un mélange d'ester et d'eau n'est pas une estérification.\nL'ester et l'eau sont les réactifs de l'hydrolyse, réaction inverse de l'estérification.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q5",
            "type": "mcq",
            "prompt": "La réaction entre un ester et l'eau est :",
            "options": [
              "Une estérification",
              "Une combustion",
              "Une hydrolyse",
              "Une fermentation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La réaction de l'eau sur un ester est l'hydrolyse d'un ester ; elle donne un alcool et un acide carboxylique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les esters dans les parfums",
          "stepTheme": "Les esters dans les parfums",
          "stepBadge": "Les esters dans les parfums",
          "paragraphText": "• Ester : composé souvent odorant, présent dans les produits cosmétiques et les parfums visités dans la situation d'apprentissage.\nLa Documentation ajoute que les esters carboxyliques ont souvent une odeur agréable et sont à l'origine de l'arôme naturel de nombreux fruits.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q6",
            "type": "mcq",
            "prompt": "D'après la Documentation, les esters sont très utilisés en parfumerie parce qu'ils :",
            "options": [
              "Ont souvent une odeur agréable",
              "Sont tous incolores et inodores",
              "Réagissent vivement avec l'air",
              "Sont des acides forts"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Documentation indique que les esters carboxyliques ont souvent une odeur agréable et servent aux arômes synthétiques et à la parfumerie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q1",
          "type": "mcq",
          "prompt": "La réaction d'estérification met en jeu :",
          "options": [
            "Un ester et de l'eau",
            "Un acide carboxylique et un alcool",
            "Deux alcools",
            "Un acide carboxylique et une cétone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, l'estérification est la réaction entre un acide carboxylique et un alcool ; elle forme un ester et de l'eau. L'ester et l'eau sont les réactifs de l'hydrolyse."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q2",
          "type": "mcq",
          "prompt": "Les produits de la réaction d'estérification sont :",
          "options": [
            "Un ester et de l'eau",
            "Un acide et un alcool",
            "Du dioxyde de carbone et de l'eau",
            "Un aldéhyde et de l'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'estérification d'un acide carboxylique par un alcool donne un ester et de l'eau. L'acide et l'alcool sont les produits de l'hydrolyse, la réaction inverse."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q3",
          "type": "mcq",
          "prompt": "Dans l'équation générale, l'ester formé à partir de $\\mathrm{R-COOH}$ et $\\mathrm{R'-OH}$ s'écrit :",
          "options": [
            "$\\mathrm{R-OH}$",
            "$\\mathrm{R'-COOH}$",
            "$\\mathrm{R-COO-R'}$",
            "$\\mathrm{R-CO-R'}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'ester conserve le groupement R de l'acide et le groupement R' de l'alcool, reliés par la fonction ester : $\\mathrm{R-COO-R'}$."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q4",
          "type": "mcq",
          "prompt": "La réaction entre l'acide éthanoïque et l'éthanol donne :",
          "options": [
            "Le méthanoate d'éthyle",
            "L'éthanoate de méthyle",
            "L'acide éthanoïque hydraté",
            "L'éthanoate d'éthyle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'exemple du document et l'activité d'application 1 : l'acide éthanoïque et l'éthanol donnent l'éthanoate d'éthyle et de l'eau."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q5",
          "type": "mcq",
          "prompt": "La réaction entre un ester et l'eau est :",
          "options": [
            "Une estérification",
            "Une combustion",
            "Une hydrolyse",
            "Une fermentation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La réaction de l'eau sur un ester est l'hydrolyse d'un ester ; elle donne un alcool et un acide carboxylique."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p01_q6",
          "type": "mcq",
          "prompt": "D'après la Documentation, les esters sont très utilisés en parfumerie parce qu'ils :",
          "options": [
            "Ont souvent une odeur agréable",
            "Sont tous incolores et inodores",
            "Réagissent vivement avec l'air",
            "Sont des acides forts"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Documentation indique que les esters carboxyliques ont souvent une odeur agréable et servent aux arômes synthétiques et à la parfumerie."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02",
      "order": 2,
      "title": "Caractéristiques de l'estérification",
      "summary": "Montrer, à partir du suivi de la quantité d'ester formé, que l'estérification est lente, limitée et athermique.",
      "conceptExplanation": "On mélange de façon équimolaire l'acide éthanoïque (1 mol) et l'éthanol (1 mol), en présence d'acide sulfurique concentré, et on chauffe à 100 degrés. Par dosage acido-basique, on suit la quantité d'ester formé au cours du temps.\nLa quantité d'ester augmente lentement, puis reste constante à $0{,}67$ mol à partir d'environ 30 heures, alors qu'il reste $0{,}33$ mol d'acide et d'alcool.\nConclusion du document : la réaction d'estérification est une réaction lente, limitée et athermique, car elle ne consomme ni ne produit de la chaleur.",
      "keyRule": "Estérification : lente, limitée (arrêt à 0,67 mol d'ester pour un mélange équimolaire d'1 mol) et athermique.",
      "formulas": [
        {
          "name": "Limite du mélange équimolaire",
          "formula": "n_{ester} = 0{,}67\\ \\mathrm{mol}",
          "note": "Pour 1 mol d'acide et 1 mol d'alcool au départ."
        }
      ],
      "workedExample": {
        "title": "Lire le tableau de suivi de l'estérification",
        "statement": "Dans le tableau du document, donne les quantités d'acide restant, d'alcool restant, d'ester formé et d'eau formée au bout de 10 heures, puis au bout de 70 heures.",
        "methodSteps": [
          "À 10 heures, la ligne du tableau donne : acide restant $0{,}5$ mol, alcool restant $0{,}5$ mol, ester formé $0{,}5$ mol et eau formée $0{,}5$ mol.",
          "À 70 heures, on lit : acide restant $0{,}33$ mol, alcool restant $0{,}33$ mol, ester formé $0{,}67$ mol et eau formée $0{,}67$ mol.",
          "Entre 30 heures et 80 heures, ces quantités ne changent plus : la réaction s'est arrêtée avant d'être totale."
        ],
        "conclusion": "La réaction est lente, car elle dure des dizaines d'heures, et limitée, car elle s'arrête à $0{,}67$ mol d'ester formé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une réaction athermique",
          "stepTheme": "Une réaction athermique",
          "stepBadge": "Une réaction athermique",
          "paragraphText": "• Réaction athermique : réaction qui ne consomme ni ne produit de la chaleur.\nC'est la remarque du document au sujet de l'estérification.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q1",
            "type": "mcq",
            "prompt": "L'estérification est dite athermique parce qu'elle :",
            "options": [
              "Dégage beaucoup de chaleur",
              "Absorbe beaucoup de chaleur",
              "Ne consomme ni ne produit de la chaleur",
              "Se fait uniquement à froid"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la remarque du document : cette réaction ne consomme ni ne produit de la chaleur, elle est dite athermique (réponse de l'exercice 2)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une réaction lente",
          "stepTheme": "Une réaction lente",
          "stepBadge": "Une réaction lente",
          "paragraphText": "Le tableau montre que la quantité d'ester formé n'atteint sa valeur limite qu'après environ 30 heures de chauffage.\nLa réaction d'estérification est donc une réaction lente.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q2",
            "type": "mcq",
            "prompt": "D'après l'exercice 2 du document, la réaction d'estérification est :",
            "options": [
              "Rapide et totale",
              "Lente et limitée",
              "Rapide et limitée",
              "Lente et totale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La solution de l'exercice 2 retient deux qualificatifs : l'estérification est lente et limitée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une réaction limitée",
          "stepTheme": "Une réaction limitée",
          "stepBadge": "Une réaction limitée",
          "paragraphText": "• Réaction limitée : réaction qui s'arrête avant la disparition totale des réactifs.\nIci, il reste $0{,}33$ mol d'acide et $0{,}33$ mol d'alcool alors que la quantité d'ester ne dépasse pas $0{,}67$ mol.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q3",
            "type": "mcq",
            "prompt": "Pour un mélange équimolaire d'1 mol d'acide et d'1 mol d'alcool, la quantité maximale d'ester formé est :",
            "options": [
              "$1$ mol",
              "$0{,}50$ mol",
              "$0{,}67$ mol",
              "$0{,}33$ mol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau montre un palier à $0{,}67$ mol d'ester formé, avec $0{,}33$ mol d'acide et d'alcool restants : la réaction est limitée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Suivre la réaction par dosage",
          "stepTheme": "Suivre la réaction par dosage",
          "stepBadge": "Suivre la réaction par dosage",
          "paragraphText": "Méthode du document : à différentes dates, on détermine les quantités de matière par dosage acido-basique.\nOn trace ensuite la courbe de la quantité d'ester formé en fonction du temps et on y lit le palier correspondant à l'état final.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q4",
            "type": "mcq",
            "prompt": "Dans l'expérience du document, les quantités de matière au cours du temps sont déterminées par :",
            "options": [
              "Une pesée de l'ester",
              "Un dosage acido-basique",
              "Une mesure de température",
              "Un alcootest"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document précise que, par dosage acido-basique, on détermine à différentes dates les quantités de matière d'ester formé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le palier ne signifie pas une réaction totale",
          "stepTheme": "Le palier ne signifie pas une réaction totale",
          "stepBadge": "Le palier ne signifie pas une réaction totale",
          "paragraphText": "Piège : croire que, la courbe devenant horizontale, tous les réactifs ont disparu.\nAu palier, il reste encore $0{,}33$ mol d'acide et $0{,}33$ mol d'alcool : la réaction est limitée, pas totale.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q5",
            "type": "mcq",
            "prompt": "Lorsque la quantité d'ester formé devient constante à $0{,}67$ mol, la quantité d'acide restant vaut :",
            "options": [
              "$0$ mol",
              "$1$ mol",
              "$0{,}67$ mol",
              "$0{,}33$ mol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le tableau donne, au palier, $0{,}33$ mol d'acide restant et $0{,}33$ mol d'alcool restant, pour $0{,}67$ mol d'ester formé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les conditions de l'expérience",
          "stepTheme": "Les conditions de l'expérience",
          "stepBadge": "Les conditions de l'expérience",
          "paragraphText": "L'expérience est réalisée avec un mélange équimolaire d'acide éthanoïque et d'éthanol, en présence d'acide sulfurique concentré.\nLe mélange est chauffé à 100 degrés, et pourtant la réaction reste lente et limitée.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q6",
            "type": "mcq",
            "prompt": "Dans l'expérience de suivi, le mélange d'acide éthanoïque et d'éthanol est chauffé à :",
            "options": [
              "100 degrés",
              "25 degrés",
              "200 degrés",
              "0 degré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document indique que le mélange est chauffé à 100 degrés, en présence d'acide sulfurique concentré."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q1",
          "type": "mcq",
          "prompt": "L'estérification est dite athermique parce qu'elle :",
          "options": [
            "Dégage beaucoup de chaleur",
            "Absorbe beaucoup de chaleur",
            "Ne consomme ni ne produit de la chaleur",
            "Se fait uniquement à froid"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la remarque du document : cette réaction ne consomme ni ne produit de la chaleur, elle est dite athermique (réponse de l'exercice 2)."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q2",
          "type": "mcq",
          "prompt": "D'après l'exercice 2 du document, la réaction d'estérification est :",
          "options": [
            "Rapide et totale",
            "Lente et limitée",
            "Rapide et limitée",
            "Lente et totale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La solution de l'exercice 2 retient deux qualificatifs : l'estérification est lente et limitée."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q3",
          "type": "mcq",
          "prompt": "Pour un mélange équimolaire d'1 mol d'acide et d'1 mol d'alcool, la quantité maximale d'ester formé est :",
          "options": [
            "$1$ mol",
            "$0{,}50$ mol",
            "$0{,}67$ mol",
            "$0{,}33$ mol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau montre un palier à $0{,}67$ mol d'ester formé, avec $0{,}33$ mol d'acide et d'alcool restants : la réaction est limitée."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q4",
          "type": "mcq",
          "prompt": "Dans l'expérience du document, les quantités de matière au cours du temps sont déterminées par :",
          "options": [
            "Une pesée de l'ester",
            "Un dosage acido-basique",
            "Une mesure de température",
            "Un alcootest"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document précise que, par dosage acido-basique, on détermine à différentes dates les quantités de matière d'ester formé."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q5",
          "type": "mcq",
          "prompt": "Lorsque la quantité d'ester formé devient constante à $0{,}67$ mol, la quantité d'acide restant vaut :",
          "options": [
            "$0$ mol",
            "$1$ mol",
            "$0{,}67$ mol",
            "$0{,}33$ mol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le tableau donne, au palier, $0{,}33$ mol d'acide restant et $0{,}33$ mol d'alcool restant, pour $0{,}67$ mol d'ester formé."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p02_q6",
          "type": "mcq",
          "prompt": "Dans l'expérience de suivi, le mélange d'acide éthanoïque et d'éthanol est chauffé à :",
          "options": [
            "100 degrés",
            "25 degrés",
            "200 degrés",
            "0 degré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document indique que le mélange est chauffé à 100 degrés, en présence d'acide sulfurique concentré."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03",
      "order": 3,
      "title": "La réaction d'hydrolyse d'un ester",
      "summary": "Définir l'hydrolyse d'un ester, écrire son équation et donner ses caractéristiques.",
      "conceptExplanation": "La réaction d'hydrolyse d'un ester est la réaction de l'eau sur un ester ; on obtient un alcool et un acide carboxylique.\nDans le cas général : $\\mathrm{R-COO-R' + H_2O \\rightleftharpoons R-COOH + R'-OH}$. C'est la réaction inverse de l'estérification.\nPour un mélange équimolaire d'éthanoate d'éthyle et d'eau, le suivi montre que la quantité d'ester restante se stabilise à $0{,}67$ mol, avec $0{,}33$ mol d'acide et d'alcool formés. Conclusion du document : l'hydrolyse d'un ester est une réaction lente, réversible, limitée et athermique.",
      "keyRule": "Hydrolyse : ester plus eau donne acide carboxylique plus alcool ; réaction lente, réversible, limitée et athermique.",
      "formulas": [
        {
          "name": "Équation générale de l'hydrolyse",
          "formula": "\\mathrm{R-COO-R' + H_2O \\rightleftharpoons R-COOH + R'-OH}",
          "note": "Inverse de l'estérification."
        },
        {
          "name": "Hydrolyse de l'éthanoate d'éthyle",
          "formula": "\\mathrm{CH_3COOC_2H_5 + H_2O \\rightleftharpoons CH_3COOH + C_2H_5OH}",
          "note": "Produits : acide éthanoïque et éthanol."
        }
      ],
      "workedExample": {
        "title": "Hydrolyse du propanoate d'isopropyle (activité d'application 1)",
        "statement": "Écris l'équation-bilan de la réaction entre le propanoate d'isopropyle et l'eau, et précise le nom de cette réaction.",
        "methodSteps": [
          "On reconnaît un ester qui réagit avec l'eau : c'est une hydrolyse d'ester.",
          "L'hydrolyse redonne l'acide dont vient le nom « propanoate » : l'acide propanoïque.",
          "Elle redonne aussi l'alcool correspondant à « isopropyle » : le propan-2-ol."
        ],
        "conclusion": "La réaction est l'hydrolyse de l'ester, qui redonne l'acide propanoïque et le propan-2-ol, comme dans la solution de l'activité d'application 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l'hydrolyse d'un ester",
          "stepTheme": "Définition de l'hydrolyse d'un ester",
          "stepBadge": "Définition de l'hydrolyse d'un ester",
          "paragraphText": "• Hydrolyse d'un ester : réaction de l'eau sur un ester.\nOn obtient un alcool et un acide carboxylique.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q1",
            "type": "mcq",
            "prompt": "La réaction d'hydrolyse d'un ester est la réaction :",
            "options": [
              "D'un acide sur un alcool",
              "De l'eau sur un ester",
              "Du dioxygène sur un ester",
              "D'un ester sur un autre ester"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, l'hydrolyse d'un ester est la réaction de l'eau sur un ester ; elle donne un alcool et un acide carboxylique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les produits de l'hydrolyse",
          "stepTheme": "Les produits de l'hydrolyse",
          "stepBadge": "Les produits de l'hydrolyse",
          "paragraphText": "L'hydrolyse redonne exactement les deux composés qui avaient servi à préparer l'ester.\nAinsi, l'éthanoate d'éthyle et l'eau redonnent l'acide éthanoïque et l'éthanol.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q2",
            "type": "mcq",
            "prompt": "L'hydrolyse de l'éthanoate d'éthyle donne :",
            "options": [
              "L'acide éthanoïque et l'éthanol",
              "L'acide méthanoïque et le méthanol",
              "L'éthanal et l'eau",
              "L'acide éthanoïque et le méthanol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'exemple du document : l'éthanoate d'éthyle plus l'eau redonnent l'acide éthanoïque et l'éthanol."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les caractéristiques de l'hydrolyse",
          "stepTheme": "Les caractéristiques de l'hydrolyse",
          "stepBadge": "Les caractéristiques de l'hydrolyse",
          "paragraphText": "Conclusion du document : la réaction d'hydrolyse d'un ester est lente, réversible, limitée et athermique.\nElle partage donc les caractéristiques de l'estérification, avec en plus le caractère réversible mis en avant.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q3",
            "type": "mcq",
            "prompt": "D'après la conclusion du document, l'hydrolyse d'un ester est une réaction :",
            "options": [
              "Rapide, totale et exothermique",
              "Lente, réversible, limitée et athermique",
              "Rapide, irréversible et limitée",
              "Lente, totale et endothermique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document conclut mot pour mot que l'hydrolyse d'un ester est une réaction lente, réversible, limitée et athermique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Lire le tableau de suivi de l'hydrolyse",
          "stepTheme": "Lire le tableau de suivi de l'hydrolyse",
          "stepBadge": "Lire le tableau de suivi de l'hydrolyse",
          "paragraphText": "Méthode : on suit cette fois la quantité d'ester restante au cours du temps.\nPour 1 mol d'ester et 1 mol d'eau au départ, elle descend à $0{,}67$ mol et ne bouge plus à partir de 20 heures environ, avec $0{,}33$ mol d'acide formé.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q4",
            "type": "mcq",
            "prompt": "Pour un mélange équimolaire d'ester et d'eau (1 mol chacun), la quantité d'ester restante à l'état final est :",
            "options": [
              "$0$ mol",
              "$0{,}33$ mol",
              "$1$ mol",
              "$0{,}67$ mol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le tableau de l'hydrolyse donne un palier à $0{,}67$ mol d'ester restante, avec $0{,}33$ mol d'acide et $0{,}33$ mol d'alcool formés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le même état final dans les deux sens",
          "stepTheme": "Le même état final dans les deux sens",
          "stepBadge": "Le même état final dans les deux sens",
          "paragraphText": "Piège : croire que l'hydrolyse va plus loin que l'estérification.\nLe document souligne qu'en juxtaposant les deux courbes, on constate qu'elles ont la même limite : c'est dans ces conditions que l'on aboutit à un équilibre chimique.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q5",
            "type": "mcq",
            "prompt": "En juxtaposant les courbes d'estérification et d'hydrolyse, le document constate que :",
            "options": [
              "L'hydrolyse est totale, pas l'estérification",
              "Elles ont la même limite",
              "L'estérification est beaucoup plus rapide",
              "Les deux réactions sont irréversibles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux courbes ont la même limite : on aboutit au même état final, l'équilibre chimique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Retrouver l'acide et l'alcool d'un ester",
          "stepTheme": "Retrouver l'acide et l'alcool d'un ester",
          "stepBadge": "Retrouver l'acide et l'alcool d'un ester",
          "paragraphText": "Exemple de l'exercice 3 : l'ester de formule brute $\\mathrm{C_4H_8O_2}$ appelé éthanoate d'éthyle provient de l'acide éthanoïque et de l'éthanol.\nSon hydrolyse redonne donc ces deux composés.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q6",
            "type": "mcq",
            "prompt": "L'éthanoate d'éthyle, de formule brute $\\mathrm{C_4H_8O_2}$, est préparé à partir :",
            "options": [
              "De l'acide éthanoïque et de l'éthanol",
              "De l'acide méthanoïque et du propan-1-ol",
              "De l'acide propanoïque et du méthanol",
              "De l'acide éthanoïque et du méthanol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Parmi les cas de l'exercice 3, l'éthanoate d'éthyle correspond au couple acide éthanoïque et éthanol."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q1",
          "type": "mcq",
          "prompt": "La réaction d'hydrolyse d'un ester est la réaction :",
          "options": [
            "D'un acide sur un alcool",
            "De l'eau sur un ester",
            "Du dioxygène sur un ester",
            "D'un ester sur un autre ester"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, l'hydrolyse d'un ester est la réaction de l'eau sur un ester ; elle donne un alcool et un acide carboxylique."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q2",
          "type": "mcq",
          "prompt": "L'hydrolyse de l'éthanoate d'éthyle donne :",
          "options": [
            "L'acide éthanoïque et l'éthanol",
            "L'acide méthanoïque et le méthanol",
            "L'éthanal et l'eau",
            "L'acide éthanoïque et le méthanol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'exemple du document : l'éthanoate d'éthyle plus l'eau redonnent l'acide éthanoïque et l'éthanol."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q3",
          "type": "mcq",
          "prompt": "D'après la conclusion du document, l'hydrolyse d'un ester est une réaction :",
          "options": [
            "Rapide, totale et exothermique",
            "Lente, réversible, limitée et athermique",
            "Rapide, irréversible et limitée",
            "Lente, totale et endothermique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document conclut mot pour mot que l'hydrolyse d'un ester est une réaction lente, réversible, limitée et athermique."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q4",
          "type": "mcq",
          "prompt": "Pour un mélange équimolaire d'ester et d'eau (1 mol chacun), la quantité d'ester restante à l'état final est :",
          "options": [
            "$0$ mol",
            "$0{,}33$ mol",
            "$1$ mol",
            "$0{,}67$ mol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le tableau de l'hydrolyse donne un palier à $0{,}67$ mol d'ester restante, avec $0{,}33$ mol d'acide et $0{,}33$ mol d'alcool formés."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q5",
          "type": "mcq",
          "prompt": "En juxtaposant les courbes d'estérification et d'hydrolyse, le document constate que :",
          "options": [
            "L'hydrolyse est totale, pas l'estérification",
            "Elles ont la même limite",
            "L'estérification est beaucoup plus rapide",
            "Les deux réactions sont irréversibles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux courbes ont la même limite : on aboutit au même état final, l'équilibre chimique."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p03_q6",
          "type": "mcq",
          "prompt": "L'éthanoate d'éthyle, de formule brute $\\mathrm{C_4H_8O_2}$, est préparé à partir :",
          "options": [
            "De l'acide éthanoïque et de l'éthanol",
            "De l'acide méthanoïque et du propan-1-ol",
            "De l'acide propanoïque et du méthanol",
            "De l'acide éthanoïque et du méthanol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Parmi les cas de l'exercice 3, l'éthanoate d'éthyle correspond au couple acide éthanoïque et éthanol."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04",
      "order": 4,
      "title": "La notion d'équilibre chimique",
      "summary": "Expliquer pourquoi l'estérification et l'hydrolyse sont deux réactions réversibles qui conduisent à un équilibre chimique.",
      "conceptExplanation": "Les réactions d'estérification et d'hydrolyse d'un ester sont deux réactions qui se déroulent simultanément : pendant que l'acide et l'alcool se transforment en ester et en eau, l'ester et l'eau formés se transforment en acide et en alcool. On dit que ces réactions sont réversibles.\nOn atteint un moment où les quantités de matière des réactifs et des produits n'évoluent plus dans le milieu réactionnel : on parle d'équilibre chimique.\nCet équilibre se traduit par une double flèche en sens inverse dans l'équation-bilan de la réaction.",
      "keyRule": "Équilibre chimique : les deux réactions opposées se déroulent simultanément et les quantités de matière restent constantes ; on l'écrit avec une double flèche.",
      "formulas": [
        {
          "name": "Équation à l'équilibre",
          "formula": "\\mathrm{R-COOH + R'-OH \\rightleftharpoons R-COO-R' + H_2O}",
          "note": "Le sens direct est l'estérification, le sens inverse l'hydrolyse."
        }
      ],
      "workedExample": {
        "title": "Le même équilibre atteint des deux côtés",
        "statement": "Compare l'état final obtenu en partant d'un mélange équimolaire d'acide éthanoïque et d'éthanol, puis en partant d'un mélange équimolaire d'éthanoate d'éthyle et d'eau.",
        "methodSteps": [
          "Côté estérification : l'état final contient $0{,}67$ mol d'ester et $0{,}33$ mol d'acide restant.",
          "Côté hydrolyse : l'état final contient $0{,}67$ mol d'ester restant et $0{,}33$ mol d'acide formé.",
          "Les deux mélanges aboutissent donc à la même composition : c'est le même équilibre chimique."
        ],
        "conclusion": "L'équilibre chimique est le même, qu'on l'atteigne par l'estérification ou par l'hydrolyse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Des réactions réversibles",
          "stepTheme": "Des réactions réversibles",
          "stepBadge": "Des réactions réversibles",
          "paragraphText": "• Réactions réversibles : deux réactions opposées qui se déroulent simultanément dans le même milieu.\nIci, l'estérification et l'hydrolyse d'un ester sont réversibles l'une de l'autre.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q1",
            "type": "mcq",
            "prompt": "On dit que l'estérification et l'hydrolyse sont réversibles parce qu'elles :",
            "options": [
              "Se déroulent simultanément, chacune dans un sens opposé",
              "Sont toutes les deux totales",
              "Nécessitent le même catalyseur",
              "Produisent de la chaleur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document explique que les deux réactions se déroulent simultanément : les produits de l'une sont les réactifs de l'autre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'équilibre chimique",
          "stepTheme": "L'équilibre chimique",
          "stepBadge": "L'équilibre chimique",
          "paragraphText": "• Équilibre chimique : état atteint lorsque les quantités de matière des réactifs et des produits n'évoluent plus dans le milieu réactionnel.\nLes deux réactions opposées continuent, mais leurs effets se compensent.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q2",
            "type": "mcq",
            "prompt": "On parle d'équilibre chimique lorsque :",
            "options": [
              "Tous les réactifs ont disparu",
              "Les quantités de matière des réactifs et des produits n'évoluent plus",
              "La température ne peut plus changer",
              "La réaction devient rapide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du document : à l'équilibre chimique, les quantités de matière restent constantes dans le milieu réactionnel."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La double flèche dans l'équation",
          "stepTheme": "La double flèche dans l'équation",
          "stepBadge": "La double flèche dans l'équation",
          "paragraphText": "L'équilibre chimique se traduit par la double flèche en sens inverse dans l'équation-bilan.\nLe document place au-dessus de la flèche le mot « Estérification » et au-dessous le mot « Hydrolyse ».",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q3",
            "type": "mcq",
            "prompt": "Dans l'équation-bilan à l'équilibre, la double flèche indique :",
            "options": [
              "Que la réaction est très rapide",
              "Que deux réactions opposées ont lieu en même temps",
              "Que les coefficients sont doublés",
              "Que la réaction dégage de la chaleur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document précise que l'équilibre chimique se traduit par la double flèche en sens inverse : estérification dans un sens, hydrolyse dans l'autre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Reconnaître le sens d'une réaction",
          "stepTheme": "Reconnaître le sens d'une réaction",
          "stepBadge": "Reconnaître le sens d'une réaction",
          "paragraphText": "Méthode de l'activité d'application 1 : regarder les réactifs de départ.\nAcide plus alcool, c'est une estérification ; ester plus eau, c'est une hydrolyse.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q4",
            "type": "mcq",
            "prompt": "La réaction $\\mathrm{CH_3COOH + C_2H_5OH \\rightleftharpoons CH_3COOC_2H_5 + H_2O}$ lue de gauche à droite est :",
            "options": [
              "Une hydrolyse",
              "Une combustion",
              "Une estérification",
              "Une fermentation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la solution de l'activité d'application 1 : l'acide éthanoïque et l'éthanol donnent un ester et de l'eau, c'est une estérification."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'équilibre n'est pas l'arrêt des réactions",
          "stepTheme": "L'équilibre n'est pas l'arrêt des réactions",
          "stepBadge": "L'équilibre n'est pas l'arrêt des réactions",
          "paragraphText": "Piège : croire qu'à l'équilibre, plus rien ne réagit.\nLe document dit que les deux réactions se déroulent simultanément ; ce sont les quantités de matière qui n'évoluent plus, pas les réactions qui s'arrêtent.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q5",
            "type": "mcq",
            "prompt": "À l'équilibre chimique, on peut affirmer que :",
            "options": [
              "Les deux réactions se sont complètement arrêtées",
              "Les quantités de matière restent constantes alors que les deux réactions se poursuivent",
              "Il ne reste que des produits",
              "Il ne reste que des réactifs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les réactions réversibles se déroulent simultanément ; à l'équilibre, ce sont leurs bilans qui se compensent, donc les quantités de matière n'évoluent plus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Composition du mélange à l'équilibre",
          "stepTheme": "Composition du mélange à l'équilibre",
          "stepBadge": "Composition du mélange à l'équilibre",
          "paragraphText": "Pour le mélange équimolaire d'acide éthanoïque et d'éthanol, l'équilibre contient $0{,}67$ mol d'ester et $0{,}67$ mol d'eau formés.\nIl contient aussi $0{,}33$ mol d'acide et $0{,}33$ mol d'alcool restants.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q6",
            "type": "mcq",
            "prompt": "À l'équilibre, pour 1 mol d'acide et 1 mol d'alcool au départ, la quantité d'eau formée est :",
            "options": [
              "$0{,}33$ mol",
              "$1$ mol",
              "$0$ mol",
              "$0{,}67$ mol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le tableau de suivi donne, au palier, autant d'eau formée que d'ester formé : $0{,}67$ mol."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q1",
          "type": "mcq",
          "prompt": "On dit que l'estérification et l'hydrolyse sont réversibles parce qu'elles :",
          "options": [
            "Se déroulent simultanément, chacune dans un sens opposé",
            "Sont toutes les deux totales",
            "Nécessitent le même catalyseur",
            "Produisent de la chaleur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document explique que les deux réactions se déroulent simultanément : les produits de l'une sont les réactifs de l'autre."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q2",
          "type": "mcq",
          "prompt": "On parle d'équilibre chimique lorsque :",
          "options": [
            "Tous les réactifs ont disparu",
            "Les quantités de matière des réactifs et des produits n'évoluent plus",
            "La température ne peut plus changer",
            "La réaction devient rapide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du document : à l'équilibre chimique, les quantités de matière restent constantes dans le milieu réactionnel."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q3",
          "type": "mcq",
          "prompt": "Dans l'équation-bilan à l'équilibre, la double flèche indique :",
          "options": [
            "Que la réaction est très rapide",
            "Que deux réactions opposées ont lieu en même temps",
            "Que les coefficients sont doublés",
            "Que la réaction dégage de la chaleur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document précise que l'équilibre chimique se traduit par la double flèche en sens inverse : estérification dans un sens, hydrolyse dans l'autre."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q4",
          "type": "mcq",
          "prompt": "La réaction $\\mathrm{CH_3COOH + C_2H_5OH \\rightleftharpoons CH_3COOC_2H_5 + H_2O}$ lue de gauche à droite est :",
          "options": [
            "Une hydrolyse",
            "Une combustion",
            "Une estérification",
            "Une fermentation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la solution de l'activité d'application 1 : l'acide éthanoïque et l'éthanol donnent un ester et de l'eau, c'est une estérification."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q5",
          "type": "mcq",
          "prompt": "À l'équilibre chimique, on peut affirmer que :",
          "options": [
            "Les deux réactions se sont complètement arrêtées",
            "Les quantités de matière restent constantes alors que les deux réactions se poursuivent",
            "Il ne reste que des produits",
            "Il ne reste que des réactifs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les réactions réversibles se déroulent simultanément ; à l'équilibre, ce sont leurs bilans qui se compensent, donc les quantités de matière n'évoluent plus."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p04_q6",
          "type": "mcq",
          "prompt": "À l'équilibre, pour 1 mol d'acide et 1 mol d'alcool au départ, la quantité d'eau formée est :",
          "options": [
            "$0{,}33$ mol",
            "$1$ mol",
            "$0$ mol",
            "$0{,}67$ mol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le tableau de suivi donne, au palier, autant d'eau formée que d'ester formé : $0{,}67$ mol."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05",
      "order": 5,
      "title": "Rendement de l'estérification et de l'hydrolyse",
      "summary": "Calculer le rendement d'une estérification ou d'une hydrolyse à partir des quantités de matière.",
      "conceptExplanation": "Pour un mélange équimolaire d'acide et d'alcool, le rendement de l'estérification est le quotient de la quantité de matière d'ester formé par la quantité de matière d'acide initial.\nPour un mélange équimolaire d'ester et d'eau, le rendement de l'hydrolyse est le quotient du nombre de moles d'acide formé par le nombre de moles d'ester initial.\nDans les exemples du document, le rendement de l'estérification vaut 67 pour cent et celui de l'hydrolyse 33 pour cent, pour des mélanges équimolaires.",
      "keyRule": "Rendement : quantité de produit formé divisée par la quantité de réactif initial de référence (acide pour l'estérification, ester pour l'hydrolyse).",
      "formulas": [
        {
          "name": "Rendement de l'estérification",
          "formula": "\\rho = \\frac{n_E}{n_0(A)}",
          "note": "nE : ester formé ; n0(A) : acide initial."
        },
        {
          "name": "Rendement de l'hydrolyse",
          "formula": "\\rho = \\frac{n_A}{n_0(E)}",
          "note": "nA : acide formé ; n0(E) : ester initial."
        }
      ],
      "workedExample": {
        "title": "Rendement de la réaction acide éthanoïque et propan-1-ol (activité 2)",
        "statement": "On fait réagir l'acide éthanoïque et le propan-1-ol. Un mélange équimolaire d'1 mol de chaque réactif donne $0{,}67$ mol d'ester à l'équilibre chimique. Calcule le rendement de la réaction.",
        "methodSteps": [
          "On identifie la quantité d'ester formé : $n_E = 0{,}67$ mol.",
          "On identifie la quantité d'acide initial : $n_0(A) = 1$ mol.",
          "On applique le quotient : le rendement vaut $0{,}67$, soit 67 pour cent."
        ],
        "conclusion": "Le rendement est de 67 pour cent, comme dans la solution de l'activité d'application 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du rendement",
          "stepTheme": "Définition du rendement",
          "stepBadge": "Définition du rendement",
          "paragraphText": "• Rendement d'une réaction limitée : quotient de la quantité de produit effectivement formé par la quantité de réactif initial de référence.\nIl s'exprime souvent en pour cent, comme les 67 pour cent de l'activité d'application 2.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q1",
            "type": "mcq",
            "prompt": "Le rendement de l'estérification est le quotient :",
            "options": [
              "De la quantité d'acide formé par la quantité d'ester initial",
              "De la quantité d'ester formé par la quantité d'acide initial",
              "De la quantité d'eau formée par la quantité d'alcool final",
              "De la quantité d'alcool restant par la quantité d'acide restant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document définit le rendement de l'estérification comme la quantité de matière d'ester formé divisée par la quantité de matière d'acide initial."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer un rendement d'estérification",
          "stepTheme": "Calculer un rendement d'estérification",
          "stepBadge": "Calculer un rendement d'estérification",
          "paragraphText": "Méthode : relever la quantité d'ester formé à l'équilibre, relever la quantité d'acide initial, puis faire le quotient.\nPour l'activité d'application 2, on obtient $0{,}67$, soit 67 pour cent.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q2",
            "type": "mcq",
            "prompt": "Un mélange équimolaire d'1 mol d'acide et d'1 mol d'alcool donne $0{,}67$ mol d'ester. Le rendement est :",
            "options": [
              "33 pour cent",
              "50 pour cent",
              "67 pour cent",
              "100 pour cent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le quotient de $0{,}67$ mol d'ester formé par 1 mol d'acide initial vaut $0{,}67$, soit 67 pour cent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rendement de l'hydrolyse équimolaire",
          "stepTheme": "Le rendement de l'hydrolyse équimolaire",
          "stepBadge": "Le rendement de l'hydrolyse équimolaire",
          "paragraphText": "Pour l'hydrolyse, le rendement se calcule avec l'acide formé et l'ester initial.\nDans le tableau du document, 1 mol d'ester donne $0{,}33$ mol d'acide : le rendement de l'hydrolyse équimolaire est donc de 33 pour cent.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q3",
            "type": "mcq",
            "prompt": "Pour un mélange équimolaire d'ester et d'eau, le rendement de l'hydrolyse du document vaut :",
            "options": [
              "67 pour cent",
              "33 pour cent",
              "50 pour cent",
              "0 pour cent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La quantité d'acide formé est de $0{,}33$ mol pour 1 mol d'ester initial : le rendement vaut $0{,}33$, soit 33 pour cent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Rendement à partir d'une masse d'ester (exercice 5)",
          "stepTheme": "Rendement à partir d'une masse d'ester (exercice 5)",
          "stepBadge": "Rendement à partir d'une masse d'ester (exercice 5)",
          "paragraphText": "Dans l'exercice 5, on prépare le 2-méthylpropanoate d'éthyle à partir de $0{,}15$ mol d'acide et $0{,}15$ mol d'alcool.\nLa masse d'ester formée est de $11{,}6$ g ; avec une masse molaire de $116$ g par mole, cela fait $0{,}10$ mol d'ester.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q4",
            "type": "mcq",
            "prompt": "D'après l'exercice 5, le rendement de cette estérification, pour $0{,}10$ mol d'ester formé et $0{,}15$ mol d'acide initial, est :",
            "options": [
              "33 pour cent",
              "50 pour cent",
              "100 pour cent",
              "67 pour cent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le quotient de $0{,}10$ mol par $0{,}15$ mol vaut environ $0{,}67$, soit 67 pour cent, comme dans la solution de l'exercice 5."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le bon réactif au dénominateur",
          "stepTheme": "Le bon réactif au dénominateur",
          "stepBadge": "Le bon réactif au dénominateur",
          "paragraphText": "Piège : échanger les références des deux rendements.\nEstérification : dénominateur égal à l'acide initial ; hydrolyse : dénominateur égal à l'ester initial.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q5",
            "type": "mcq",
            "prompt": "Pour le rendement de l'hydrolyse, la quantité placée au dénominateur est :",
            "options": [
              "La quantité d'ester initial",
              "La quantité d'acide formé",
              "La quantité d'eau formée",
              "La quantité d'alcool initial"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document définit le rendement de l'hydrolyse comme le nombre de moles d'acide formé divisé par le nombre de moles d'ester initial."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Passer d'une masse à une quantité de matière",
          "stepTheme": "Passer d'une masse à une quantité de matière",
          "stepBadge": "Passer d'une masse à une quantité de matière",
          "paragraphText": "Méthode de l'exercice 5 : si l'on connaît la masse d'ester formé, on divise par sa masse molaire pour obtenir la quantité de matière.\nIci, $11{,}6$ g divisés par $116$ g par mole donnent $0{,}10$ mol.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q6",
            "type": "mcq",
            "prompt": "La masse molaire du 2-méthylpropanoate d'éthyle, de formule $\\mathrm{C_6H_{12}O_2}$, vaut :",
            "options": [
              "$100$ g par mole",
              "$116$ g par mole",
              "$88$ g par mole",
              "$130$ g par mole"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $6 \\times 12 + 12 \\times 1 + 2 \\times 16$, soit $116$ g par mole, comme dans la solution de l'exercice 5."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q1",
          "type": "mcq",
          "prompt": "Le rendement de l'estérification est le quotient :",
          "options": [
            "De la quantité d'acide formé par la quantité d'ester initial",
            "De la quantité d'ester formé par la quantité d'acide initial",
            "De la quantité d'eau formée par la quantité d'alcool final",
            "De la quantité d'alcool restant par la quantité d'acide restant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document définit le rendement de l'estérification comme la quantité de matière d'ester formé divisée par la quantité de matière d'acide initial."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q2",
          "type": "mcq",
          "prompt": "Un mélange équimolaire d'1 mol d'acide et d'1 mol d'alcool donne $0{,}67$ mol d'ester. Le rendement est :",
          "options": [
            "33 pour cent",
            "50 pour cent",
            "67 pour cent",
            "100 pour cent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le quotient de $0{,}67$ mol d'ester formé par 1 mol d'acide initial vaut $0{,}67$, soit 67 pour cent."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q3",
          "type": "mcq",
          "prompt": "Pour un mélange équimolaire d'ester et d'eau, le rendement de l'hydrolyse du document vaut :",
          "options": [
            "67 pour cent",
            "33 pour cent",
            "50 pour cent",
            "0 pour cent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La quantité d'acide formé est de $0{,}33$ mol pour 1 mol d'ester initial : le rendement vaut $0{,}33$, soit 33 pour cent."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q4",
          "type": "mcq",
          "prompt": "D'après l'exercice 5, le rendement de cette estérification, pour $0{,}10$ mol d'ester formé et $0{,}15$ mol d'acide initial, est :",
          "options": [
            "33 pour cent",
            "50 pour cent",
            "100 pour cent",
            "67 pour cent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le quotient de $0{,}10$ mol par $0{,}15$ mol vaut environ $0{,}67$, soit 67 pour cent, comme dans la solution de l'exercice 5."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q5",
          "type": "mcq",
          "prompt": "Pour le rendement de l'hydrolyse, la quantité placée au dénominateur est :",
          "options": [
            "La quantité d'ester initial",
            "La quantité d'acide formé",
            "La quantité d'eau formée",
            "La quantité d'alcool initial"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document définit le rendement de l'hydrolyse comme le nombre de moles d'acide formé divisé par le nombre de moles d'ester initial."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p05_q6",
          "type": "mcq",
          "prompt": "La masse molaire du 2-méthylpropanoate d'éthyle, de formule $\\mathrm{C_6H_{12}O_2}$, vaut :",
          "options": [
            "$100$ g par mole",
            "$116$ g par mole",
            "$88$ g par mole",
            "$130$ g par mole"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $6 \\times 12 + 12 \\times 1 + 2 \\times 16$, soit $116$ g par mole, comme dans la solution de l'exercice 5."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06",
      "order": 6,
      "title": "Améliorer le rendement et préparer un ester",
      "summary": "Améliorer le rendement par un réactif en excès ou en empêchant la réaction inverse, et appliquer au calcul des masses formées.",
      "conceptExplanation": "Remarque du document : le rendement peut être amélioré par ajout d'un réactif en excès ou par empêchement de la réaction inverse.\nPour l'estérification, on peut par exemple enlever l'eau ou distiller l'ester au fur et à mesure qu'il se forme. Pour l'hydrolyse, l'exercice 4 montre qu'un excès d'eau fait passer le rendement de 33 pour cent à 70 pour cent.\nL'acide sulfurique, lui, est un catalyseur : d'après la situation d'évaluation, il augmente la vitesse de la réaction, sans être le moyen d'améliorer le rendement cité par le document.",
      "keyRule": "Pour améliorer le rendement : mettre un réactif en excès ou empêcher la réaction inverse (enlever l'eau, distiller l'ester).",
      "formulas": [
        {
          "name": "Masse d'ester formé",
          "formula": "m_E = \\rho \\times n_0(A) \\times M_E",
          "note": "Application de la situation d'évaluation."
        }
      ],
      "workedExample": {
        "title": "L'ester à odeur de banane (situation d'évaluation)",
        "statement": "On prépare l'éthanoate de 3-méthylbutyle, à odeur de banane mûre, dans une ampoule contenant $0{,}15$ mol d'acide carboxylique et $0{,}45$ mol d'alcool, avec un rendement de 67 pour cent. La masse molaire de l'ester vaut $130$ g par mole. Détermine les masses d'ester et d'eau formées.",
        "methodSteps": [
          "La quantité d'ester formé vaut le rendement multiplié par la quantité d'acide initial : $0{,}67 \\times 0{,}15$ mol, soit environ $0{,}10$ mol.",
          "Masse d'ester : $0{,}67 \\times 0{,}15 \\times 130$, soit $13{,}1$ g.",
          "La quantité d'eau formée est la même que celle de l'ester, donc masse d'eau : $0{,}67 \\times 0{,}15 \\times 18$, soit $1{,}81$ g."
        ],
        "conclusion": "On forme $13{,}1$ g d'ester et $1{,}81$ g d'eau, comme dans la solution de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un réactif en excès",
          "stepTheme": "Un réactif en excès",
          "stepBadge": "Un réactif en excès",
          "paragraphText": "• Réactif en excès : réactif introduit en quantité supérieure à celle de l'autre réactif, pour déplacer l'équilibre.\nLe document cite l'ajout d'un réactif en excès comme premier moyen d'améliorer le rendement.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q1",
            "type": "mcq",
            "prompt": "D'après le document, un premier moyen d'améliorer le rendement est :",
            "options": [
              "D'ajouter un réactif en excès",
              "De refroidir le mélange",
              "D'arrêter le chauffage plus tôt",
              "D'ajouter de l'eau au mélange d'estérification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La remarque du document cite l'ajout d'un réactif en excès et l'empêchement de la réaction inverse comme moyens d'améliorer le rendement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Empêcher la réaction inverse",
          "stepTheme": "Empêcher la réaction inverse",
          "stepBadge": "Empêcher la réaction inverse",
          "paragraphText": "Méthode pour l'estérification : enlever l'eau formée, ou distiller l'ester au fur et à mesure qu'il se forme.\nEn retirant un produit, on empêche la réaction inverse, l'hydrolyse, de le reconsommer.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q2",
            "type": "mcq",
            "prompt": "Pour améliorer le rendement d'une estérification, le document propose par exemple de :",
            "options": [
              "Ajouter de l'eau en continu",
              "Enlever l'eau ou distiller l'ester au fur et à mesure de sa formation",
              "Laisser le mélange refroidir à l'air libre",
              "Diluer l'acide avec de l'eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux exemples du document : enlèvement de l'eau ou distillation de l'ester au fur et à mesure qu'il se forme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'excès d'eau dans l'hydrolyse (exercice 4)",
          "stepTheme": "L'excès d'eau dans l'hydrolyse (exercice 4)",
          "stepBadge": "L'excès d'eau dans l'hydrolyse (exercice 4)",
          "paragraphText": "Dans l'exercice 4, on mélange 5 mol d'eau et 1 mol de butanoate d'éthyle ; à l'équilibre, il y a $0{,}7$ mol d'acide présent.\nLe rendement de l'hydrolyse atteint alors 70 pour cent, contre 33 pour cent pour un mélange équimolaire.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q3",
            "type": "mcq",
            "prompt": "D'après l'exercice 4, avec 5 mol d'eau pour 1 mol d'ester, le rendement de l'hydrolyse vaut :",
            "options": [
              "33 pour cent",
              "50 pour cent",
              "70 pour cent",
              "100 pour cent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La quantité d'acide formé est de $0{,}7$ mol pour 1 mol d'ester initial : le rendement vaut $0{,}70$, soit 70 pour cent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le butanoate d'éthyle de l'exercice 4",
          "stepTheme": "Le butanoate d'éthyle de l'exercice 4",
          "stepBadge": "Le butanoate d'éthyle de l'exercice 4",
          "paragraphText": "La première question de l'exercice 4 demande la formule brute du butanoate d'éthyle.\nLa solution donne $\\mathrm{C_6H_{12}O_2}$ : 4 carbones pour la partie butanoate et 2 carbones pour la partie éthyle.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q4",
            "type": "mcq",
            "prompt": "La formule brute du butanoate d'éthyle est :",
            "options": [
              "$\\mathrm{C_4H_8O_2}$",
              "$\\mathrm{C_6H_{12}O_2}$",
              "$\\mathrm{C_6H_{12}O}$",
              "$\\mathrm{C_5H_{10}O_2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse de l'exercice 4 : le butanoate d'éthyle a pour formule brute $\\mathrm{C_6H_{12}O_2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le catalyseur n'améliore pas le rendement",
          "stepTheme": "Le catalyseur n'améliore pas le rendement",
          "stepBadge": "Le catalyseur n'améliore pas le rendement",
          "paragraphText": "Piège : présenter l'acide sulfurique comme le moyen d'améliorer le rendement.\nD'après la situation d'évaluation, l'acide sulfurique est un catalyseur qui augmente la vitesse de la réaction ; les moyens d'améliorer le rendement cités sont l'excès de réactif et l'empêchement de la réaction inverse.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q5",
            "type": "mcq",
            "prompt": "Le rôle de l'acide sulfurique dans la préparation d'un ester est :",
            "options": [
              "D'améliorer le rendement à 100 pour cent",
              "De fournir l'oxygène de l'ester",
              "D'être le réactif limitant",
              "D'être un catalyseur qui augmente la vitesse de la réaction"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la réponse donnée dans la situation d'évaluation et dans l'exercice 5 : l'acide sulfurique est un catalyseur, il augmente la vitesse de la réaction."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Masse d'ester à odeur de banane",
          "stepTheme": "Masse d'ester à odeur de banane",
          "stepBadge": "Masse d'ester à odeur de banane",
          "paragraphText": "Dans la situation d'évaluation, l'ester préparé est l'éthanoate de 3-méthylbutyle, utilisé pour aromatiser certains sirops.\nSa masse molaire vaut $130$ g par mole et la masse formée à la limite de l'estérification est de $13{,}1$ g.",
          "exercise": {
            "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q6",
            "type": "mcq",
            "prompt": "D'après la situation d'évaluation, la masse d'eau formée en même temps que les $13{,}1$ g d'ester est :",
            "options": [
              "$1{,}81$ g",
              "$13{,}1$ g",
              "$0{,}18$ g",
              "$18$ g"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La quantité d'eau formée égale celle de l'ester, soit $0{,}67 \\times 0{,}15$ mol ; multipliée par $18$ g par mole, elle donne $1{,}81$ g."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q1",
          "type": "mcq",
          "prompt": "D'après le document, un premier moyen d'améliorer le rendement est :",
          "options": [
            "D'ajouter un réactif en excès",
            "De refroidir le mélange",
            "D'arrêter le chauffage plus tôt",
            "D'ajouter de l'eau au mélange d'estérification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La remarque du document cite l'ajout d'un réactif en excès et l'empêchement de la réaction inverse comme moyens d'améliorer le rendement."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q2",
          "type": "mcq",
          "prompt": "Pour améliorer le rendement d'une estérification, le document propose par exemple de :",
          "options": [
            "Ajouter de l'eau en continu",
            "Enlever l'eau ou distiller l'ester au fur et à mesure de sa formation",
            "Laisser le mélange refroidir à l'air libre",
            "Diluer l'acide avec de l'eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux exemples du document : enlèvement de l'eau ou distillation de l'ester au fur et à mesure qu'il se forme."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q3",
          "type": "mcq",
          "prompt": "D'après l'exercice 4, avec 5 mol d'eau pour 1 mol d'ester, le rendement de l'hydrolyse vaut :",
          "options": [
            "33 pour cent",
            "50 pour cent",
            "70 pour cent",
            "100 pour cent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La quantité d'acide formé est de $0{,}7$ mol pour 1 mol d'ester initial : le rendement vaut $0{,}70$, soit 70 pour cent."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q4",
          "type": "mcq",
          "prompt": "La formule brute du butanoate d'éthyle est :",
          "options": [
            "$\\mathrm{C_4H_8O_2}$",
            "$\\mathrm{C_6H_{12}O_2}$",
            "$\\mathrm{C_6H_{12}O}$",
            "$\\mathrm{C_5H_{10}O_2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse de l'exercice 4 : le butanoate d'éthyle a pour formule brute $\\mathrm{C_6H_{12}O_2}$."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q5",
          "type": "mcq",
          "prompt": "Le rôle de l'acide sulfurique dans la préparation d'un ester est :",
          "options": [
            "D'améliorer le rendement à 100 pour cent",
            "De fournir l'oxygène de l'ester",
            "D'être le réactif limitant",
            "D'être un catalyseur qui augmente la vitesse de la réaction"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la réponse donnée dans la situation d'évaluation et dans l'exercice 5 : l'acide sulfurique est un catalyseur, il augmente la vitesse de la réaction."
        },
        {
          "id": "premiere_c_chimie_l07_esterification_hydrolyse_p06_q6",
          "type": "mcq",
          "prompt": "D'après la situation d'évaluation, la masse d'eau formée en même temps que les $13{,}1$ g d'ester est :",
          "options": [
            "$1{,}81$ g",
            "$13{,}1$ g",
            "$0{,}18$ g",
            "$18$ g"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La quantité d'eau formée égale celle de l'ester, soit $0{,}67 \\times 0{,}15$ mol ; multipliée par $18$ g par mole, elle donne $1{,}81$ g."
        }
      ]
    }
  ]
};
