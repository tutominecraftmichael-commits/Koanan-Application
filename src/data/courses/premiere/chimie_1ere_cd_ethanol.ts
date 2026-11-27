import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « L'éthanol » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « L'éthanol » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const CHIMIE_1ERE_CD_L06_ETHANOL: CurriculumChapter = {
  "id": "premiere_c_chimie_l06_ethanol",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 6,
  "title": "Leçon 6 : L'éthanol",
  "summary": "On explique les deux procédés d'obtention de l'éthanol (fermentation des jus sucrés et hydratation de l'éthylène), puis on étudie sa combustion et son oxydation ménagée, qui donne successivement l'éthanal et l'acide éthanoïque.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « L'éthanol » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_chimie_l06_ethanol_p01",
      "order": 1,
      "title": "Obtention de l'éthanol",
      "summary": "Préparer l'éthanol par fermentation des jus sucrés ou par hydratation de l'éthylène.",
      "conceptExplanation": "L'éthanol s'obtient d'abord par fermentation des jus sucrés, tels que le vin ou la bière : le glucose contenu dans certains composés se transforme en éthanol sous l'action des enzymes, avec dégagement de dioxyde de carbone.\nIl s'obtient aussi par hydratation de l'éthylène : en présence d'acide sulfurique $\\mathrm{H_2SO_4}$ comme catalyseur, l'éthylène réagit avec l'eau pour donner l'éthanol $\\mathrm{CH_3-CH_2-OH}$.\nC'est l'éthanol qui est contenu, en dose importante, dans la boisson traditionnelle appelée « koutoukou », fabriquée à partir du vin de palme.",
      "keyRule": "Fermentation : glucose vers éthanol plus dioxyde de carbone ; hydratation : éthylène plus eau vers éthanol, avec l'acide sulfurique comme catalyseur.",
      "formulas": [
        {
          "name": "Fermentation du glucose",
          "formula": "\\mathrm{C_6H_{12}O_6 \\longrightarrow 2\\,C_2H_5OH + 2\\,CO_2}",
          "note": "Sous l'action des enzymes."
        },
        {
          "name": "Hydratation de l'éthylène",
          "formula": "\\mathrm{CH_2=CH_2 + H_2O \\longrightarrow CH_3-CH_2-OH}",
          "note": "Catalyseur : acide sulfurique."
        }
      ],
      "workedExample": {
        "title": "Identifier les composés d'une chaîne de réactions (exercice 1)",
        "statement": "On donne la suite : A réagit avec le dihydrogène et donne l'éthylène ; l'éthylène réagit avec l'eau et donne B ; B réagit avec le dioxygène et donne C et de l'eau ; C donne ensuite D, l'acide éthanoïque. Identifie B et C.",
        "methodSteps": [
          "B est le produit de l'hydratation de l'éthylène : c'est donc l'éthanol, $\\mathrm{CH_3-CH_2-OH}$.",
          "C est le premier produit de l'oxydation de l'éthanol, avant l'acide éthanoïque : c'est l'éthanal.",
          "A, qui donne l'éthylène par hydrogénation, est l'acétylène (éthyne), $\\mathrm{CH \\equiv CH}$."
        ],
        "conclusion": "B est l'éthanol et C est l'éthanal, comme dans la solution de l'exercice 1 du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fermentation des jus sucrés",
          "stepTheme": "La fermentation des jus sucrés",
          "stepBadge": "La fermentation des jus sucrés",
          "paragraphText": "• Fermentation : transformation du glucose contenu dans les jus sucrés en éthanol, sous l'action des enzymes.\nC'est ainsi que l'on obtient l'éthanol du vin, de la bière ou du vin de palme.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p01_q1",
            "type": "mcq",
            "prompt": "Lors de la fermentation des jus sucrés, le glucose se transforme en éthanol sous l'action :",
            "options": [
              "De l'acide sulfurique",
              "Des enzymes",
              "Du cuivre incandescent",
              "Du dioxygène de l'air"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document indique que le glucose se transforme en éthanol sous l'action des enzymes. L'acide sulfurique est le catalyseur de l'hydratation de l'éthylène, et le cuivre celui de l'oxydation ménagée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'équation de la fermentation",
          "stepTheme": "L'équation de la fermentation",
          "stepBadge": "L'équation de la fermentation",
          "paragraphText": "L'équation-bilan de la fermentation du glucose est : $\\mathrm{C_6H_{12}O_6 \\longrightarrow 2\\,C_2H_5OH + 2\\,CO_2}$.\nUne molécule de glucose donne donc deux molécules d'éthanol et deux molécules de dioxyde de carbone.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p01_q2",
            "type": "mcq",
            "prompt": "D'après l'équation de fermentation, une molécule de glucose $\\mathrm{C_6H_{12}O_6}$ donne :",
            "options": [
              "Une molécule d'éthanol et une molécule de dioxyde de carbone",
              "Deux molécules d'éthanol et deux molécules de dioxyde de carbone",
              "Deux molécules d'éthanol et une molécule d'eau",
              "Trois molécules d'éthanol et deux molécules de dioxyde de carbone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les coefficients de l'équation-bilan sont 2 devant l'éthanol et 2 devant le dioxyde de carbone : $\\mathrm{C_6H_{12}O_6 \\longrightarrow 2\\,C_2H_5OH + 2\\,CO_2}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'hydratation de l'éthylène",
          "stepTheme": "L'hydratation de l'éthylène",
          "stepBadge": "L'hydratation de l'éthylène",
          "paragraphText": "• Hydratation de l'éthylène : réaction de l'éthylène avec l'eau, qui conduit à la formation de l'éthanol.\nL'éthylène $\\mathrm{CH_2=CH_2}$ devient ainsi $\\mathrm{CH_3-CH_2-OH}$.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p01_q3",
            "type": "mcq",
            "prompt": "L'hydratation de l'éthylène conduit à la formation :",
            "options": [
              "De l'éthanal",
              "De l'acide éthanoïque",
              "Du dioxyde de carbone",
              "De l'éthanol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'addition d'eau sur l'éthylène donne l'éthanol : $\\mathrm{CH_2=CH_2 + H_2O \\longrightarrow CH_3-CH_2-OH}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le rôle de l'acide sulfurique",
          "stepTheme": "Le rôle de l'acide sulfurique",
          "stepBadge": "Le rôle de l'acide sulfurique",
          "paragraphText": "L'hydratation de l'éthylène se fait en présence d'acide sulfurique $\\mathrm{H_2SO_4}$, qui joue le rôle de catalyseur.\nLe catalyseur figure au-dessus de la flèche de l'équation-bilan : il n'est ni un réactif consommé, ni un produit formé.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p01_q4",
            "type": "mcq",
            "prompt": "Dans l'hydratation de l'éthylène, l'acide sulfurique joue le rôle :",
            "options": [
              "De catalyseur",
              "De réactif principal",
              "De produit de la réaction",
              "De solvant de l'éthanol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document précise que l'hydratation a lieu en présence d'acide sulfurique comme catalyseur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les deux procédés",
          "stepTheme": "Ne pas confondre les deux procédés",
          "stepBadge": "Ne pas confondre les deux procédés",
          "paragraphText": "Piège : attribuer le dioxyde de carbone à l'hydratation.\nLe dioxyde de carbone n'apparaît que dans la fermentation du glucose ; l'hydratation de l'éthylène ne forme que de l'éthanol, sans autre produit.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p01_q5",
            "type": "mcq",
            "prompt": "Lequel de ces deux procédés produit aussi du dioxyde de carbone ?",
            "options": [
              "L'hydratation de l'éthylène",
              "Aucun des deux",
              "La fermentation des jus sucrés",
              "Les deux procédés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Seule la fermentation dégage du dioxyde de carbone : $\\mathrm{C_6H_{12}O_6 \\longrightarrow 2\\,C_2H_5OH + 2\\,CO_2}$. L'hydratation ne donne que l'éthanol."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le koutoukou, boisson au vin de palme",
          "stepTheme": "Le koutoukou, boisson au vin de palme",
          "stepBadge": "Le koutoukou, boisson au vin de palme",
          "paragraphText": "Dans la situation d'apprentissage, les élèves visitent un chantier de fabrication du « koutoukou », boisson traditionnelle obtenue à partir du vin de palme.\nIls apprennent que cette boisson contient une dose importante d'éthanol, issu de la fermentation des jus sucrés.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p01_q6",
            "type": "mcq",
            "prompt": "L'éthanol contenu dans le koutoukou, fabriqué à partir du vin de palme, provient :",
            "options": [
              "De l'hydratation de l'éthylène",
              "De la combustion du vin de palme",
              "De l'oxydation par le cuivre",
              "De la fermentation des jus sucrés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le vin de palme est un jus sucré : son éthanol vient de la fermentation, comme le montre la situation d'apprentissage du document."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l06_ethanol_p01_q1",
          "type": "mcq",
          "prompt": "Lors de la fermentation des jus sucrés, le glucose se transforme en éthanol sous l'action :",
          "options": [
            "De l'acide sulfurique",
            "Des enzymes",
            "Du cuivre incandescent",
            "Du dioxygène de l'air"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document indique que le glucose se transforme en éthanol sous l'action des enzymes. L'acide sulfurique est le catalyseur de l'hydratation de l'éthylène, et le cuivre celui de l'oxydation ménagée."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p01_q2",
          "type": "mcq",
          "prompt": "D'après l'équation de fermentation, une molécule de glucose $\\mathrm{C_6H_{12}O_6}$ donne :",
          "options": [
            "Une molécule d'éthanol et une molécule de dioxyde de carbone",
            "Deux molécules d'éthanol et deux molécules de dioxyde de carbone",
            "Deux molécules d'éthanol et une molécule d'eau",
            "Trois molécules d'éthanol et deux molécules de dioxyde de carbone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les coefficients de l'équation-bilan sont 2 devant l'éthanol et 2 devant le dioxyde de carbone : $\\mathrm{C_6H_{12}O_6 \\longrightarrow 2\\,C_2H_5OH + 2\\,CO_2}$."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p01_q3",
          "type": "mcq",
          "prompt": "L'hydratation de l'éthylène conduit à la formation :",
          "options": [
            "De l'éthanal",
            "De l'acide éthanoïque",
            "Du dioxyde de carbone",
            "De l'éthanol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'addition d'eau sur l'éthylène donne l'éthanol : $\\mathrm{CH_2=CH_2 + H_2O \\longrightarrow CH_3-CH_2-OH}$."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p01_q4",
          "type": "mcq",
          "prompt": "Dans l'hydratation de l'éthylène, l'acide sulfurique joue le rôle :",
          "options": [
            "De catalyseur",
            "De réactif principal",
            "De produit de la réaction",
            "De solvant de l'éthanol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document précise que l'hydratation a lieu en présence d'acide sulfurique comme catalyseur."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p01_q5",
          "type": "mcq",
          "prompt": "Lequel de ces deux procédés produit aussi du dioxyde de carbone ?",
          "options": [
            "L'hydratation de l'éthylène",
            "Aucun des deux",
            "La fermentation des jus sucrés",
            "Les deux procédés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Seule la fermentation dégage du dioxyde de carbone : $\\mathrm{C_6H_{12}O_6 \\longrightarrow 2\\,C_2H_5OH + 2\\,CO_2}$. L'hydratation ne donne que l'éthanol."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p01_q6",
          "type": "mcq",
          "prompt": "L'éthanol contenu dans le koutoukou, fabriqué à partir du vin de palme, provient :",
          "options": [
            "De l'hydratation de l'éthylène",
            "De la combustion du vin de palme",
            "De l'oxydation par le cuivre",
            "De la fermentation des jus sucrés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le vin de palme est un jus sucré : son éthanol vient de la fermentation, comme le montre la situation d'apprentissage du document."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l06_ethanol_p02",
      "order": 2,
      "title": "Combustion de l'éthanol dans l'air",
      "summary": "Écrire l'équation de combustion complète de l'éthanol et l'exploiter dans des calculs.",
      "conceptExplanation": "La combustion de l'éthanol dans le dioxygène de l'air donne de l'eau et du dioxyde de carbone.\nSon équation-bilan est : $\\mathrm{CH_3-CH_2-OH + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$, que l'on écrit aussi avec la formule brute : $\\mathrm{C_2H_6O + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$.\nGrâce au bilan molaire tiré de cette équation, on calcule le volume de dioxygène nécessaire et les masses des produits formés.",
      "keyRule": "Combustion complète de l'éthanol : 1 mol d'éthanol consomme 3 mol de dioxygène et produit 2 mol de dioxyde de carbone et 3 mol d'eau.",
      "formulas": [
        {
          "name": "Combustion de l'éthanol",
          "formula": "\\mathrm{C_2H_6O + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}",
          "note": "Produits : dioxyde de carbone et eau."
        }
      ],
      "workedExample": {
        "title": "Combustion complète de 4,5 g d'éthanol (exercice 5)",
        "statement": "On réalise la combustion complète de $4{,}5$ g d'éthanol dans le dioxygène. Le volume molaire gazeux vaut $22{,}4$ L par mol et la masse molaire de l'éthanol vaut $46$ g par mol. Détermine le volume de dioxygène nécessaire et les masses des produits.",
        "methodSteps": [
          "La quantité d'éthanol vaut $n = \\frac{4{,}5}{46}$ mol, soit environ $0{,}098$ mol.",
          "Volume de dioxygène : il faut 3 mol de dioxygène par mole d'éthanol, donc $V = 3 \\times n \\times 22{,}4$, soit $6{,}57$ L.",
          "Masse de dioxyde de carbone : 2 mol par mole d'éthanol, soit $m = 2 \\times n \\times 44$, donc $8{,}61$ g.",
          "Masse d'eau : 3 mol par mole d'éthanol, soit $m = 3 \\times n \\times 18$, donc $5{,}28$ g."
        ],
        "conclusion": "On retrouve les résultats du corrigé de l'exercice 5 : $6{,}57$ L de dioxygène, $8{,}61$ g de dioxyde de carbone et $5{,}28$ g d'eau."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La combustion complète",
          "stepTheme": "La combustion complète",
          "stepBadge": "La combustion complète",
          "paragraphText": "• Combustion complète : réaction d'un composé avec le dioxygène de l'air, qui donne du dioxyde de carbone et de l'eau.\nPour l'éthanol, les deux réactifs sont l'éthanol et le dioxygène.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p02_q1",
            "type": "mcq",
            "prompt": "Les produits de la combustion complète de l'éthanol sont :",
            "options": [
              "L'éthanal et l'eau",
              "Le dioxyde de carbone et l'eau",
              "Le monoxyde de carbone et l'eau",
              "Le carbone et le dihydrogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document indique que la combustion de l'éthanol dans le dioxygène donne de l'eau et du dioxyde de carbone. Le monoxyde de carbone correspondrait à une combustion incomplète."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'équation-bilan de combustion",
          "stepTheme": "L'équation-bilan de combustion",
          "stepBadge": "L'équation-bilan de combustion",
          "paragraphText": "L'équation-bilan équilibrée est : $\\mathrm{C_2H_6O + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$.\nOn y compte bien 2 atomes de carbone, 6 atomes d'hydrogène et 7 atomes d'oxygène de chaque côté.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p02_q2",
            "type": "mcq",
            "prompt": "Dans l'équation de combustion de l'éthanol, le coefficient du dioxygène $\\mathrm{O_2}$ est :",
            "options": [
              "1",
              "2",
              "3",
              "5"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'équation équilibrée est $\\mathrm{C_2H_6O + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$ : le coefficient du dioxygène est 3."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Exploiter le bilan molaire",
          "stepTheme": "Exploiter le bilan molaire",
          "stepBadge": "Exploiter le bilan molaire",
          "paragraphText": "Méthode : on lit les proportions dans l'équation-bilan, puis on relie les quantités de matière entre elles.\nPour l'éthanol, la quantité de dioxygène vaut 3 fois celle de l'éthanol, celle du dioxyde de carbone 2 fois, et celle de l'eau 3 fois.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p02_q3",
            "type": "mcq",
            "prompt": "Si on brûle $0{,}10$ mol d'éthanol, la quantité de dioxyde de carbone formée est :",
            "options": [
              "$0{,}10$ mol",
              "$0{,}30$ mol",
              "$0{,}20$ mol",
              "$0{,}05$ mol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après l'équation-bilan, 1 mol d'éthanol donne 2 mol de dioxyde de carbone : pour $0{,}10$ mol d'éthanol, on obtient $0{,}20$ mol de dioxyde de carbone."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La chaîne carbonée est détruite",
          "stepTheme": "La chaîne carbonée est détruite",
          "stepBadge": "La chaîne carbonée est détruite",
          "paragraphText": "Contrairement à l'oxydation ménagée, la combustion complète détruit la chaîne carbonée de l'éthanol.\nC'est pour cela que ses produits sont des molécules minérales simples : le dioxyde de carbone et l'eau (exercice 3 du document).",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p02_q4",
            "type": "mcq",
            "prompt": "D'après l'exercice 3 du document, la combustion complète de l'éthanol permet de :",
            "options": [
              "Conserver sa chaîne carbonée",
              "Détruire sa chaîne carbonée",
              "Transformer sa chaîne carbonée en cycle",
              "Former un aldéhyde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La solution de l'exercice 3 distingue les deux réactions : l'oxydation ménagée conserve la chaîne carbonée, la combustion complète la détruit."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le monoxyde de carbone n'est pas le produit",
          "stepTheme": "Le monoxyde de carbone n'est pas le produit",
          "stepBadge": "Le monoxyde de carbone n'est pas le produit",
          "paragraphText": "Piège proposé dans l'exercice 3 : dire que la combustion complète produit de l'eau et du monoxyde de carbone.\nC'est faux : en combustion complète, avec le dioxygène en quantité suffisante, le carbone donne du dioxyde de carbone $\\mathrm{CO_2}$.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p02_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation sur la combustion complète de l'éthanol est correcte ?",
            "options": [
              "Elle produit de l'eau et du monoxyde de carbone",
              "Elle produit de l'eau et du dioxyde de carbone",
              "Elle produit de l'éthanal et de l'eau",
              "Elle conserve la chaîne carbonée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La combustion complète donne de l'eau et du dioxyde de carbone. L'éthanal est le produit de l'oxydation ménagée, pas de la combustion."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Volume de dioxygène pour 4,5 g d'éthanol",
          "stepTheme": "Volume de dioxygène pour 4,5 g d'éthanol",
          "stepBadge": "Volume de dioxygène pour 4,5 g d'éthanol",
          "paragraphText": "Dans l'exercice 5, les élèves brûlent $4{,}5$ g d'éthanol, soit environ $0{,}098$ mol.\nLe corrigé trouve un volume de dioxygène nécessaire de $6{,}57$ L, avec un volume molaire de $22{,}4$ L par mol.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p02_q6",
            "type": "mcq",
            "prompt": "D'après le corrigé de l'exercice 5, le volume de dioxygène nécessaire pour brûler $4{,}5$ g d'éthanol est :",
            "options": [
              "$2{,}19$ L",
              "$4{,}38$ L",
              "$13{,}14$ L",
              "$6{,}57$ L"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il faut 3 mol de dioxygène par mole d'éthanol : $V = 3 \\times \\frac{4{,}5}{46} \\times 22{,}4$, soit $6{,}57$ L."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l06_ethanol_p02_q1",
          "type": "mcq",
          "prompt": "Les produits de la combustion complète de l'éthanol sont :",
          "options": [
            "L'éthanal et l'eau",
            "Le dioxyde de carbone et l'eau",
            "Le monoxyde de carbone et l'eau",
            "Le carbone et le dihydrogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document indique que la combustion de l'éthanol dans le dioxygène donne de l'eau et du dioxyde de carbone. Le monoxyde de carbone correspondrait à une combustion incomplète."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p02_q2",
          "type": "mcq",
          "prompt": "Dans l'équation de combustion de l'éthanol, le coefficient du dioxygène $\\mathrm{O_2}$ est :",
          "options": [
            "1",
            "2",
            "3",
            "5"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'équation équilibrée est $\\mathrm{C_2H_6O + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$ : le coefficient du dioxygène est 3."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p02_q3",
          "type": "mcq",
          "prompt": "Si on brûle $0{,}10$ mol d'éthanol, la quantité de dioxyde de carbone formée est :",
          "options": [
            "$0{,}10$ mol",
            "$0{,}30$ mol",
            "$0{,}20$ mol",
            "$0{,}05$ mol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après l'équation-bilan, 1 mol d'éthanol donne 2 mol de dioxyde de carbone : pour $0{,}10$ mol d'éthanol, on obtient $0{,}20$ mol de dioxyde de carbone."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p02_q4",
          "type": "mcq",
          "prompt": "D'après l'exercice 3 du document, la combustion complète de l'éthanol permet de :",
          "options": [
            "Conserver sa chaîne carbonée",
            "Détruire sa chaîne carbonée",
            "Transformer sa chaîne carbonée en cycle",
            "Former un aldéhyde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La solution de l'exercice 3 distingue les deux réactions : l'oxydation ménagée conserve la chaîne carbonée, la combustion complète la détruit."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p02_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation sur la combustion complète de l'éthanol est correcte ?",
          "options": [
            "Elle produit de l'eau et du monoxyde de carbone",
            "Elle produit de l'eau et du dioxyde de carbone",
            "Elle produit de l'éthanal et de l'eau",
            "Elle conserve la chaîne carbonée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La combustion complète donne de l'eau et du dioxyde de carbone. L'éthanal est le produit de l'oxydation ménagée, pas de la combustion."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p02_q6",
          "type": "mcq",
          "prompt": "D'après le corrigé de l'exercice 5, le volume de dioxygène nécessaire pour brûler $4{,}5$ g d'éthanol est :",
          "options": [
            "$2{,}19$ L",
            "$4{,}38$ L",
            "$13{,}14$ L",
            "$6{,}57$ L"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il faut 3 mol de dioxygène par mole d'éthanol : $V = 3 \\times \\frac{4{,}5}{46} \\times 22{,}4$, soit $6{,}57$ L."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l06_ethanol_p03",
      "order": 3,
      "title": "Oxydation ménagée : la lampe sans flamme",
      "summary": "Identifier les produits successifs de l'oxydation ménagée de l'éthanol : l'éthanal puis l'acide éthanoïque.",
      "conceptExplanation": "Dans l'expérience de la lampe « sans flamme », l'éthanol gazeux réagit avec le dioxygène de l'air en présence d'un fil de cuivre porté à incandescence, qui sert de catalyseur.\nTrois observations guident l'interprétation : le cuivre reste incandescent, ce qui indique une réaction très exothermique ; le réactif de Schiff devient rose, ce qui révèle un aldéhyde, l'éthanal ; le papier pH devient rouge, ce qui révèle un composé acide, l'acide éthanoïque.\nL'éthanol s'oxyde donc d'abord en éthanal, puis l'éthanal s'oxyde en acide éthanoïque. Remarque du document : l'oxydation ménagée conserve la chaîne carbonée.",
      "keyRule": "Oxydation ménagée de l'éthanol : éthanal d'abord (réactif de Schiff rose), puis acide éthanoïque (papier pH rouge), avec conservation de la chaîne carbonée.",
      "formulas": [
        {
          "name": "Éthanol en éthanal",
          "formula": "\\mathrm{CH_3-CH_2-OH + \\frac{1}{2}\\,O_2 \\xrightarrow{Cu} CH_3-CHO + H_2O}",
          "note": "Première étape, en présence de cuivre."
        },
        {
          "name": "Éthanal en acide éthanoïque",
          "formula": "\\mathrm{CH_3-CHO + \\frac{1}{2}\\,O_2 \\xrightarrow{Cu} CH_3-COOH}",
          "note": "Deuxième étape de l'oxydation."
        }
      ],
      "workedExample": {
        "title": "Identifier les composés B et C (situation d'évaluation)",
        "statement": "L'oxydation d'un alcool A dans le dioxygène de l'air, en présence de cuivre incandescent, donne un composé B qui rosit le réactif de Schiff, puis un composé C qui colore en rouge un papier indicateur de pH. Identifie B et C.",
        "methodSteps": [
          "Le réactif de Schiff qui rosit caractérise un aldéhyde : B est donc un aldéhyde.",
          "Le papier pH qui rougit caractérise un acide : C est donc un acide carboxylique.",
          "A est l'éthanol, donc B est son aldéhyde à 2 carbones, l'éthanal $\\mathrm{CH_3-CHO}$, et C est l'acide éthanoïque $\\mathrm{CH_3-COOH}$."
        ],
        "conclusion": "B est l'éthanal et C est l'acide éthanoïque, les deux produits successifs de l'oxydation ménagée de l'éthanol."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'oxydation ménagée",
          "stepTheme": "L'oxydation ménagée",
          "stepBadge": "L'oxydation ménagée",
          "paragraphText": "• Oxydation ménagée : oxydation douce qui conserve la chaîne carbonée du composé.\nPour l'éthanol, elle se fait avec le dioxygène de l'air, en présence de cuivre incandescent comme catalyseur.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p03_q1",
            "type": "mcq",
            "prompt": "L'oxydation ménagée de l'éthanol se caractérise par :",
            "options": [
              "La destruction de la chaîne carbonée",
              "La conservation de la chaîne carbonée",
              "La formation de dioxyde de carbone et d'eau",
              "La transformation de la chaîne en cycle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque du document et la réponse de l'exercice 3 : l'oxydation ménagée conserve la chaîne carbonée, contrairement à la combustion."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une réaction très exothermique",
          "stepTheme": "Une réaction très exothermique",
          "stepBadge": "Une réaction très exothermique",
          "paragraphText": "Dans l'expérience, le fil de cuivre reste incandescent alors qu'on ne le chauffe plus : c'est la lampe « sans flamme ».\nLe document en déduit que la réaction est très exothermique : elle dégage assez de chaleur pour maintenir le cuivre incandescent.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p03_q2",
            "type": "mcq",
            "prompt": "Le fait que le fil de cuivre reste incandescent montre que l'oxydation de l'éthanol est :",
            "options": [
              "Endothermique",
              "Lente et limitée",
              "Très exothermique",
              "Athermique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après l'interprétation du document, le cuivre incandescent (lampe sans flamme) indique que la réaction est très exothermique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le réactif de Schiff révèle l'éthanal",
          "stepTheme": "Le réactif de Schiff révèle l'éthanal",
          "stepBadge": "Le réactif de Schiff révèle l'éthanal",
          "paragraphText": "• Test au réactif de Schiff : le papier imbibé de réactif de Schiff devient rose en présence d'un aldéhyde.\nIci, il révèle la formation de l'éthanal $\\mathrm{CH_3-CHO}$, premier produit de l'oxydation de l'éthanol.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p03_q3",
            "type": "mcq",
            "prompt": "La coloration rose du réactif de Schiff indique la formation :",
            "options": [
              "D'un acide carboxylique",
              "D'un alcool",
              "D'un aldéhyde, l'éthanal",
              "D'une cétone"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document interprète le rosissement du réactif de Schiff comme la formation d'un aldéhyde : l'éthanal."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le papier pH révèle l'acide éthanoïque",
          "stepTheme": "Le papier pH révèle l'acide éthanoïque",
          "stepBadge": "Le papier pH révèle l'acide éthanoïque",
          "paragraphText": "Le papier pH devient rouge : le milieu est acide, avec un pH inférieur à 7.\nCela indique la formation d'un composé acide, l'acide éthanoïque $\\mathrm{CH_3-COOH}$, produit de l'oxydation de l'éthanal.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p03_q4",
            "type": "mcq",
            "prompt": "La coloration rouge du papier pH indique la formation :",
            "options": [
              "De l'acide éthanoïque",
              "De l'éthanal",
              "De l'eau",
              "Du dioxyde de carbone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un papier pH rouge signale un composé acide (pH inférieur à 7) : ici l'acide éthanoïque, second produit de l'oxydation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'ordre des deux produits",
          "stepTheme": "L'ordre des deux produits",
          "stepBadge": "L'ordre des deux produits",
          "paragraphText": "Piège : inverser l'ordre des produits de l'oxydation.\nL'éthanol donne d'abord l'éthanal, et c'est l'éthanal qui s'oxyde ensuite en acide éthanoïque, jamais l'inverse.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p03_q5",
            "type": "mcq",
            "prompt": "Dans l'oxydation ménagée de l'éthanol, l'ordre de formation des produits est :",
            "options": [
              "Acide éthanoïque, puis éthanal",
              "Éthanal, puis acide éthanoïque",
              "Acide éthanoïque directement, sans intermédiaire",
              "Éthanal et acide éthanoïque en même temps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'éthanol s'oxyde d'abord en éthanal, puis l'éthanal s'oxyde en acide éthanoïque, selon les deux équations-bilans du document."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Retrouver le type d'oxydation (exercice 4)",
          "stepTheme": "Retrouver le type d'oxydation (exercice 4)",
          "stepBadge": "Retrouver le type d'oxydation (exercice 4)",
          "paragraphText": "Dans l'exercice 4, l'oxydation d'un alcool par le dioxygène de l'air donne un composé de formule brute $\\mathrm{C_2H_4O_2}$.\nLa solution nomme ce composé : c'est l'acide éthanoïque, et l'alcool de départ est donc l'éthanol.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p03_q6",
            "type": "mcq",
            "prompt": "D'après la solution de l'exercice 4, le type d'oxydation utilisé pour passer de l'éthanol à l'acide éthanoïque est :",
            "options": [
              "La combustion complète",
              "L'oxydation forte",
              "La déshydratation",
              "L'oxydation ménagée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La solution de l'exercice 4 répond : type d'oxydation, oxydation ménagée. Elle conserve la chaîne à 2 carbones de l'éthanol."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l06_ethanol_p03_q1",
          "type": "mcq",
          "prompt": "L'oxydation ménagée de l'éthanol se caractérise par :",
          "options": [
            "La destruction de la chaîne carbonée",
            "La conservation de la chaîne carbonée",
            "La formation de dioxyde de carbone et d'eau",
            "La transformation de la chaîne en cycle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque du document et la réponse de l'exercice 3 : l'oxydation ménagée conserve la chaîne carbonée, contrairement à la combustion."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p03_q2",
          "type": "mcq",
          "prompt": "Le fait que le fil de cuivre reste incandescent montre que l'oxydation de l'éthanol est :",
          "options": [
            "Endothermique",
            "Lente et limitée",
            "Très exothermique",
            "Athermique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après l'interprétation du document, le cuivre incandescent (lampe sans flamme) indique que la réaction est très exothermique."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p03_q3",
          "type": "mcq",
          "prompt": "La coloration rose du réactif de Schiff indique la formation :",
          "options": [
            "D'un acide carboxylique",
            "D'un alcool",
            "D'un aldéhyde, l'éthanal",
            "D'une cétone"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document interprète le rosissement du réactif de Schiff comme la formation d'un aldéhyde : l'éthanal."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p03_q4",
          "type": "mcq",
          "prompt": "La coloration rouge du papier pH indique la formation :",
          "options": [
            "De l'acide éthanoïque",
            "De l'éthanal",
            "De l'eau",
            "Du dioxyde de carbone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un papier pH rouge signale un composé acide (pH inférieur à 7) : ici l'acide éthanoïque, second produit de l'oxydation."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p03_q5",
          "type": "mcq",
          "prompt": "Dans l'oxydation ménagée de l'éthanol, l'ordre de formation des produits est :",
          "options": [
            "Acide éthanoïque, puis éthanal",
            "Éthanal, puis acide éthanoïque",
            "Acide éthanoïque directement, sans intermédiaire",
            "Éthanal et acide éthanoïque en même temps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'éthanol s'oxyde d'abord en éthanal, puis l'éthanal s'oxyde en acide éthanoïque, selon les deux équations-bilans du document."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p03_q6",
          "type": "mcq",
          "prompt": "D'après la solution de l'exercice 4, le type d'oxydation utilisé pour passer de l'éthanol à l'acide éthanoïque est :",
          "options": [
            "La combustion complète",
            "L'oxydation forte",
            "La déshydratation",
            "L'oxydation ménagée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La solution de l'exercice 4 répond : type d'oxydation, oxydation ménagée. Elle conserve la chaîne à 2 carbones de l'éthanol."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l06_ethanol_p04",
      "order": 4,
      "title": "Identifier un alcool à partir de sa masse molaire",
      "summary": "Déterminer la formule brute d'un alcool ou d'un acide à partir de sa masse molaire.",
      "conceptExplanation": "La formule brute générale d'un alcool à $n$ atomes de carbone est $\\mathrm{C_nH_{2n+2}O}$.\nSa masse molaire vaut donc $M = 14n + 18$ en grammes par mole, ce qui permet de retrouver $n$ quand on connaît $M$.\nLa même démarche sert pour les acides carboxyliques, de formule brute générale $\\mathrm{C_nH_{2n}O_2}$ et de masse molaire $M = 14n + 32$, comme dans l'exercice 2 du document.",
      "keyRule": "Pour un alcool, $M = 14n + 18$ : on isole $n$, on écrit la formule brute, puis la formule semi-développée et le nom.",
      "formulas": [
        {
          "name": "Formule brute générale d'un alcool",
          "formula": "\\mathrm{C_nH_{2n+2}O}",
          "note": "n est le nombre d'atomes de carbone."
        },
        {
          "name": "Masse molaire d'un alcool",
          "formula": "M = 14n + 18",
          "note": "M en grammes par mole."
        },
        {
          "name": "Masse molaire d'un acide carboxylique",
          "formula": "M = 14n + 32",
          "note": "Pour un acide de formule $\\mathrm{C_nH_{2n}O_2}$."
        }
      ],
      "workedExample": {
        "title": "L'alcool A de masse molaire 46 g par mol (situation d'évaluation)",
        "statement": "Un alcool A a une masse molaire $M_A = 46$ g par mol. Détermine sa formule brute, sa formule semi-développée et son nom, avec $M(C) = 12$, $M(H) = 1$ et $M(O) = 16$ g par mol.",
        "methodSteps": [
          "On écrit la masse molaire en fonction de n : $M_A = 14n + 18$.",
          "On isole n : $n = \\frac{46 - 18}{14}$, soit $n = 2$.",
          "La formule brute est donc $\\mathrm{C_2H_6O}$ et la formule semi-développée $\\mathrm{CH_3-CH_2-OH}$."
        ],
        "conclusion": "L'alcool A est l'éthanol, comme dans le corrigé de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule brute générale d'un alcool",
          "stepTheme": "La formule brute générale d'un alcool",
          "stepBadge": "La formule brute générale d'un alcool",
          "paragraphText": "• Formule brute générale d'un alcool : $\\mathrm{C_nH_{2n+2}O}$, où n est le nombre d'atomes de carbone.\nC'est la réponse à la première question de la situation d'évaluation.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p04_q1",
            "type": "mcq",
            "prompt": "La formule brute générale d'un alcool comportant n atomes de carbone est :",
            "options": [
              "$\\mathrm{C_nH_{2n}O}$",
              "$\\mathrm{C_nH_{2n+2}O}$",
              "$\\mathrm{C_nH_{2n}O_2}$",
              "$\\mathrm{C_nH_{2n+2}}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un alcool ne contient qu'un seul atome d'oxygène, celui du groupe hydroxyle : sa formule brute générale est $\\mathrm{C_nH_{2n+2}O}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Passer de la masse molaire à n",
          "stepTheme": "Passer de la masse molaire à n",
          "stepBadge": "Passer de la masse molaire à n",
          "paragraphText": "Méthode : on calcule la masse molaire en fonction de n, soit $M = 12n + (2n+2) + 16$, donc $M = 14n + 18$.\nOn résout ensuite l'équation pour trouver n, qui doit être un nombre entier.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p04_q2",
            "type": "mcq",
            "prompt": "La masse molaire d'un alcool de formule $\\mathrm{C_nH_{2n+2}O}$ s'écrit, en grammes par mole :",
            "options": [
              "$M = 14n + 32$",
              "$M = 12n + 18$",
              "$M = 14n + 18$",
              "$M = 16n + 14$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On compte $12n$ pour le carbone, $2n+2$ pour l'hydrogène et $16$ pour l'oxygène : le total est $14n + 18$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'alcool de masse molaire 46 est l'éthanol",
          "stepTheme": "L'alcool de masse molaire 46 est l'éthanol",
          "stepBadge": "L'alcool de masse molaire 46 est l'éthanol",
          "paragraphText": "Pour $M = 46$ g par mole, on obtient $n = 2$.\nLa formule brute est $\\mathrm{C_2H_6O}$, la formule semi-développée $\\mathrm{CH_3-CH_2-OH}$ : c'est l'éthanol.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p04_q3",
            "type": "mcq",
            "prompt": "Un alcool a une masse molaire de $46$ g par mole. Son nombre d'atomes de carbone est :",
            "options": [
              "$n = 1$",
              "$n = 2$",
              "$n = 3$",
              "$n = 4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $M = 14n + 18$, on obtient $n = \\frac{46 - 18}{14} = 2$ : il s'agit de l'éthanol, $\\mathrm{C_2H_6O}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le cas des acides carboxyliques (exercice 2)",
          "stepTheme": "Le cas des acides carboxyliques (exercice 2)",
          "stepBadge": "Le cas des acides carboxyliques (exercice 2)",
          "paragraphText": "Un acide carboxylique a pour formule brute générale $\\mathrm{C_nH_{2n}O_2}$, donc une masse molaire $M = 14n + 32$.\nDans l'exercice 2, l'acide C a une masse molaire de $60$ g par mole, ce qui donne $n = 2$.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p04_q4",
            "type": "mcq",
            "prompt": "D'après l'exercice 2, un acide carboxylique de masse molaire $60$ g par mole a pour formule brute :",
            "options": [
              "$\\mathrm{C_2H_4O_2}$",
              "$\\mathrm{C_3H_6O_2}$",
              "$\\mathrm{C_2H_6O}$",
              "$\\mathrm{CH_2O_2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $M = 14n + 32 = 60$, on trouve $n = 2$, donc $\\mathrm{C_2H_4O_2}$ : c'est l'acide éthanoïque, $\\mathrm{CH_3-COOH}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre alcool et aldéhyde",
          "stepTheme": "Ne pas confondre alcool et aldéhyde",
          "stepBadge": "Ne pas confondre alcool et aldéhyde",
          "paragraphText": "Piège : un aldéhyde a pour formule brute générale $\\mathrm{C_nH_{2n}O}$, avec deux hydrogènes de moins qu'un alcool.\nDans l'exercice 2, le corps A de formule $\\mathrm{C_nH_{2n}O}$ qui s'oxyde en acide est donc un aldéhyde : l'éthanal.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p04_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 2, le corps A de formule brute générale $\\mathrm{C_nH_{2n}O}$, qui s'oxyde en acide carboxylique, est :",
            "options": [
              "Un alcool",
              "Une cétone",
              "Un ester",
              "Un aldéhyde, l'éthanal"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule $\\mathrm{C_nH_{2n}O}$ est celle des aldéhydes ; la solution de l'exercice 2 conclut que A est l'éthanal, $\\mathrm{CH_3-CHO}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "De la formule brute au nom",
          "stepTheme": "De la formule brute au nom",
          "stepBadge": "De la formule brute au nom",
          "paragraphText": "Méthode complète : déterminer n, écrire la formule brute, puis la formule semi-développée, et enfin le nom.\nPour un alcool saturé à 2 carbones, la seule formule semi-développée possible est $\\mathrm{CH_3-CH_2-OH}$, l'éthanol.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p04_q6",
            "type": "mcq",
            "prompt": "La formule semi-développée correspondant à la formule brute $\\mathrm{C_2H_6O}$ d'un alcool est :",
            "options": [
              "$\\mathrm{CH_3-CHO}$",
              "$\\mathrm{CH_3-CH_2-OH}$",
              "$\\mathrm{CH_3-COOH}$",
              "$\\mathrm{CH_2=CH_2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le groupe hydroxyle –OH doit apparaître : $\\mathrm{CH_3-CH_2-OH}$ est l'éthanol. Les autres propositions sont un aldéhyde, un acide et un alcène."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l06_ethanol_p04_q1",
          "type": "mcq",
          "prompt": "La formule brute générale d'un alcool comportant n atomes de carbone est :",
          "options": [
            "$\\mathrm{C_nH_{2n}O}$",
            "$\\mathrm{C_nH_{2n+2}O}$",
            "$\\mathrm{C_nH_{2n}O_2}$",
            "$\\mathrm{C_nH_{2n+2}}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un alcool ne contient qu'un seul atome d'oxygène, celui du groupe hydroxyle : sa formule brute générale est $\\mathrm{C_nH_{2n+2}O}$."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p04_q2",
          "type": "mcq",
          "prompt": "La masse molaire d'un alcool de formule $\\mathrm{C_nH_{2n+2}O}$ s'écrit, en grammes par mole :",
          "options": [
            "$M = 14n + 32$",
            "$M = 12n + 18$",
            "$M = 14n + 18$",
            "$M = 16n + 14$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On compte $12n$ pour le carbone, $2n+2$ pour l'hydrogène et $16$ pour l'oxygène : le total est $14n + 18$."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p04_q3",
          "type": "mcq",
          "prompt": "Un alcool a une masse molaire de $46$ g par mole. Son nombre d'atomes de carbone est :",
          "options": [
            "$n = 1$",
            "$n = 2$",
            "$n = 3$",
            "$n = 4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $M = 14n + 18$, on obtient $n = \\frac{46 - 18}{14} = 2$ : il s'agit de l'éthanol, $\\mathrm{C_2H_6O}$."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p04_q4",
          "type": "mcq",
          "prompt": "D'après l'exercice 2, un acide carboxylique de masse molaire $60$ g par mole a pour formule brute :",
          "options": [
            "$\\mathrm{C_2H_4O_2}$",
            "$\\mathrm{C_3H_6O_2}$",
            "$\\mathrm{C_2H_6O}$",
            "$\\mathrm{CH_2O_2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $M = 14n + 32 = 60$, on trouve $n = 2$, donc $\\mathrm{C_2H_4O_2}$ : c'est l'acide éthanoïque, $\\mathrm{CH_3-COOH}$."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p04_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 2, le corps A de formule brute générale $\\mathrm{C_nH_{2n}O}$, qui s'oxyde en acide carboxylique, est :",
          "options": [
            "Un alcool",
            "Une cétone",
            "Un ester",
            "Un aldéhyde, l'éthanal"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule $\\mathrm{C_nH_{2n}O}$ est celle des aldéhydes ; la solution de l'exercice 2 conclut que A est l'éthanal, $\\mathrm{CH_3-CHO}$."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p04_q6",
          "type": "mcq",
          "prompt": "La formule semi-développée correspondant à la formule brute $\\mathrm{C_2H_6O}$ d'un alcool est :",
          "options": [
            "$\\mathrm{CH_3-CHO}$",
            "$\\mathrm{CH_3-CH_2-OH}$",
            "$\\mathrm{CH_3-COOH}$",
            "$\\mathrm{CH_2=CH_2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le groupe hydroxyle –OH doit apparaître : $\\mathrm{CH_3-CH_2-OH}$ est l'éthanol. Les autres propositions sont un aldéhyde, un acide et un alcène."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l06_ethanol_p05",
      "order": 5,
      "title": "Dangers liés à la consommation d'alcool",
      "summary": "Connaître les risques de l'éthanol pour la santé et le rôle de l'alcootest.",
      "conceptExplanation": "L'éthanol contenu dans la plupart des boissons alcoolisées est dangereux à forte dose.\nD'après le document, une consommation excessive peut entraîner des troubles de la mémoire et certaines maladies, telles que le diabète et la cirrhose du foie.\nLa partie Documentation précise que l'éthanol est éliminé essentiellement par le foie (95 pour cent), qu'un verre standard contient environ 10 grammes d'alcool pur, et que les agents de surveillance de la circulation routière utilisent des tests appelés alcootests pour déceler l'excès d'éthanol chez certains conducteurs.",
      "keyRule": "L'éthanol est dangereux à forte dose : troubles de la mémoire, diabète et cirrhose du foie ; l'alcootest sert à déceler son excès chez les conducteurs.",
      "formulas": [],
      "workedExample": {
        "title": "L'effet d'un repas sur l'absorption (Documentation)",
        "statement": "D'après la Documentation du document, compare le temps d'atteinte de la concentration maximale d'éthanol dans le sang chez un sujet à jeun et chez un sujet qui mange.",
        "methodSteps": [
          "Après consommation, 70 à 80 pour cent de l'éthanol est absorbé au niveau du duodénum et du jéjunum.",
          "La nourriture ralentit la vidange gastrique et prolonge la présence de l'éthanol dans l'estomac.",
          "Le temps d'atteinte de la concentration maximale est alors doublé : 90 minutes en moyenne pendant un repas, contre 45 minutes à jeun."
        ],
        "conclusion": "Manger ralentit l'absorption de l'éthanol : le pic est atteint en 90 minutes au lieu de 45 minutes à jeun."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un produit dangereux à forte dose",
          "stepTheme": "Un produit dangereux à forte dose",
          "stepBadge": "Un produit dangereux à forte dose",
          "paragraphText": "• Éthanol : alcool contenu dans la plupart des boissons alcoolisées, dangereux à forte dose.\nLe document le présente comme un produit psychoactif, dont les effets dépendent surtout de l'alcoolémie.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p05_q1",
            "type": "mcq",
            "prompt": "D'après le document, l'éthanol des boissons alcoolisées est dangereux :",
            "options": [
              "Uniquement sous forme pure",
              "À forte dose",
              "Uniquement chez les conducteurs",
              "Seulement dans le koutoukou"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document affirme que l'éthanol contenu dans la plupart des boissons alcoolisées est dangereux à forte dose."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les maladies liées à l'excès d'alcool",
          "stepTheme": "Les maladies liées à l'excès d'alcool",
          "stepBadge": "Les maladies liées à l'excès d'alcool",
          "paragraphText": "La consommation excessive d'alcool peut entraîner des troubles de la mémoire.\nElle peut aussi provoquer certaines maladies citées par le document : le diabète et la cirrhose du foie.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p05_q2",
            "type": "mcq",
            "prompt": "Parmi les conséquences d'une consommation excessive d'alcool, le document cite :",
            "options": [
              "La myopie et l'asthme",
              "Les troubles de la mémoire, le diabète et la cirrhose du foie",
              "Uniquement les accidents de la route",
              "L'amélioration des réflexes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document cite les troubles de mémoire, le diabète et la cirrhose de foie comme conséquences d'une consommation excessive."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'alcootest",
          "stepTheme": "L'alcootest",
          "stepBadge": "L'alcootest",
          "paragraphText": "• Alcootest : test réalisé par les agents de surveillance de la circulation routière pour déceler l'excès d'éthanol dans l'organisme de certains conducteurs de véhicules.\nIl vise à limiter les accidents liés à l'alcool au volant.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p05_q3",
            "type": "mcq",
            "prompt": "L'alcootest permet aux agents de la circulation de :",
            "options": [
              "Mesurer la vitesse des véhicules",
              "Fabriquer de l'éthanol",
              "Déceler l'excès d'éthanol dans l'organisme des conducteurs",
              "Vérifier la qualité des boissons vendues"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après le document, les alcootests servent à déceler l'excès d'éthanol dans l'organisme de certains conducteurs."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'élimination par le foie",
          "stepTheme": "L'élimination par le foie",
          "stepBadge": "L'élimination par le foie",
          "paragraphText": "D'après la Documentation, l'alcool est éliminé essentiellement par le foie, à 95 pour cent.\nLes 5 pour cent restants sont éliminés par les reins, la peau, les poumons et la salive.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p05_q4",
            "type": "mcq",
            "prompt": "D'après la Documentation, l'éthanol est éliminé essentiellement :",
            "options": [
              "Par les poumons, à 95 pour cent",
              "Par les reins, à 95 pour cent",
              "Par la peau, à 95 pour cent",
              "Par le foie, à 95 pour cent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La Documentation indique une élimination essentiellement hépatique : 95 pour cent par le foie, 5 pour cent par les reins, la peau, les poumons et la salive."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le verre standard",
          "stepTheme": "Le verre standard",
          "stepBadge": "Le verre standard",
          "paragraphText": "Piège : croire qu'un verre de vin contient moins d'alcool pur qu'un verre d'alcool fort.\nLa Documentation précise qu'un verre standard contient approximativement 10 grammes d'alcool pur, quel que soit le type de boisson alcoolisée.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p05_q5",
            "type": "mcq",
            "prompt": "Un verre standard contient approximativement, quel que soit le type de boisson :",
            "options": [
              "10 grammes d'alcool pur",
              "1 gramme d'alcool pur",
              "50 grammes d'alcool pur",
              "100 grammes d'alcool pur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Documentation donne environ 10 grammes d'alcool pur par verre standard, pour le vin, la bière, les apéritifs ou les alcools forts."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'absorption après consommation",
          "stepTheme": "L'absorption après consommation",
          "stepBadge": "L'absorption après consommation",
          "paragraphText": "Après consommation, 70 à 80 pour cent de l'éthanol est absorbé au niveau du duodénum et du jéjunum.\nL'éthanol se distribue ensuite en quelques minutes vers les organes très vascularisés : le cerveau, les poumons et le foie.",
          "exercise": {
            "id": "premiere_c_chimie_l06_ethanol_p05_q6",
            "type": "mcq",
            "prompt": "D'après la Documentation, l'éthanol franchit facilement la barrière placentaire, ce qui signifie que chez une femme enceinte :",
            "options": [
              "L'éthanol ne peut pas atteindre le fœtus",
              "Les concentrations chez le fœtus sont proches de celles de la mère",
              "Le fœtus élimine l'éthanol plus vite que la mère",
              "L'éthanol reste uniquement dans l'estomac"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La Documentation précise que les concentrations dans le liquide amniotique et chez le fœtus sont proches des concentrations plasmatiques de la mère."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l06_ethanol_p05_q1",
          "type": "mcq",
          "prompt": "D'après le document, l'éthanol des boissons alcoolisées est dangereux :",
          "options": [
            "Uniquement sous forme pure",
            "À forte dose",
            "Uniquement chez les conducteurs",
            "Seulement dans le koutoukou"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document affirme que l'éthanol contenu dans la plupart des boissons alcoolisées est dangereux à forte dose."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p05_q2",
          "type": "mcq",
          "prompt": "Parmi les conséquences d'une consommation excessive d'alcool, le document cite :",
          "options": [
            "La myopie et l'asthme",
            "Les troubles de la mémoire, le diabète et la cirrhose du foie",
            "Uniquement les accidents de la route",
            "L'amélioration des réflexes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document cite les troubles de mémoire, le diabète et la cirrhose de foie comme conséquences d'une consommation excessive."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p05_q3",
          "type": "mcq",
          "prompt": "L'alcootest permet aux agents de la circulation de :",
          "options": [
            "Mesurer la vitesse des véhicules",
            "Fabriquer de l'éthanol",
            "Déceler l'excès d'éthanol dans l'organisme des conducteurs",
            "Vérifier la qualité des boissons vendues"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après le document, les alcootests servent à déceler l'excès d'éthanol dans l'organisme de certains conducteurs."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p05_q4",
          "type": "mcq",
          "prompt": "D'après la Documentation, l'éthanol est éliminé essentiellement :",
          "options": [
            "Par les poumons, à 95 pour cent",
            "Par les reins, à 95 pour cent",
            "Par la peau, à 95 pour cent",
            "Par le foie, à 95 pour cent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La Documentation indique une élimination essentiellement hépatique : 95 pour cent par le foie, 5 pour cent par les reins, la peau, les poumons et la salive."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p05_q5",
          "type": "mcq",
          "prompt": "Un verre standard contient approximativement, quel que soit le type de boisson :",
          "options": [
            "10 grammes d'alcool pur",
            "1 gramme d'alcool pur",
            "50 grammes d'alcool pur",
            "100 grammes d'alcool pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Documentation donne environ 10 grammes d'alcool pur par verre standard, pour le vin, la bière, les apéritifs ou les alcools forts."
        },
        {
          "id": "premiere_c_chimie_l06_ethanol_p05_q6",
          "type": "mcq",
          "prompt": "D'après la Documentation, l'éthanol franchit facilement la barrière placentaire, ce qui signifie que chez une femme enceinte :",
          "options": [
            "L'éthanol ne peut pas atteindre le fœtus",
            "Les concentrations chez le fœtus sont proches de celles de la mère",
            "Le fœtus élimine l'éthanol plus vite que la mère",
            "L'éthanol reste uniquement dans l'estomac"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La Documentation précise que les concentrations dans le liquide amniotique et chez le fœtus sont proches des concentrations plasmatiques de la mère."
        }
      ]
    }
  ]
};
