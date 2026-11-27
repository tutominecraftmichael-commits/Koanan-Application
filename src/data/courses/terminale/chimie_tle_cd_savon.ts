import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 5 : Fabrication d'un savon » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1312
export const CHIMIE_TLE_CD_L05_SAVON: CurriculumChapter = {
  "id": "terminale_c_chimie_l05_savon",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 5,
  "title": "Leçon 5 : Fabrication d'un savon",
  "summary": "On définit la saponification d'un ester, on découvre les triglycérides des corps gras, puis on écrit l'équation-bilan de la fabrication d'un savon et on décrit sa préparation au laboratoire.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1312",
  "points": [
    {
      "id": "terminale_c_chimie_l05_savon_p01",
      "order": 1,
      "title": "La saponification des esters",
      "summary": "Un ester réagit avec les ions hydroxyde d'une base forte : lente et totale.",
      "conceptExplanation": "La saponification d'un ester est la réaction de cet ester avec des ions hydroxyde OH⁻ provenant d'une base forte (soude, potasse).\nElle donne un ion carboxylate et un alcool : R–COOR' + OH⁻ → R–COO⁻ + R'–OH.\nLa réaction de saponification est lente et totale.\nElle se distingue donc de l'hydrolyse d'un ester (avec l'eau), qui est limitée.",
      "keyRule": "Saponification = ester + OH⁻ → carboxylate + alcool ; réaction lente mais totale.",
      "formulas": [
        {
          "name": "Équation générale de la saponification",
          "formula": "\\mathrm{R-COOR' + OH^- \\longrightarrow R-COO^- + R'-OH}",
          "note": "Les ions OH⁻ proviennent d'une base forte."
        }
      ],
      "workedExample": {
        "title": "Saponification de l'acétate d'éthyle par la soude (exercice 2)",
        "statement": "Écris l'équation-bilan de la saponification de l'acétate d'éthyle (éthanoate d'éthyle) par la soude.",
        "methodSteps": [
          "L'ester est CH₃–CO–O–CH₂–CH₃ et la base forte fournit les ions (Na⁺ + OH⁻).",
          "Le groupe –COO⁻ se retrouve dans l'acétate de sodium : (CH₃–COO⁻ + Na⁺).",
          "La partie alcool de l'ester est libérée : l'éthanol CH₃–CH₂–OH."
        ],
        "conclusion": "CH₃–CO–O–CH₂–CH₃ + (Na⁺ + OH⁻) → (CH₃–COO⁻ + Na⁺) + CH₃–CH₂–OH, comme dans la résolution de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la saponification",
          "stepTheme": "Définition de la saponification",
          "stepBadge": "Définition de la saponification",
          "paragraphText": "• Saponification d'un ester : réaction de cet ester avec des ions hydroxyde OH⁻ provenant d'une base forte.\nLes produits sont un ion carboxylate et un alcool.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p01_q1",
            "type": "mcq",
            "prompt": "La saponification d'un ester est sa réaction avec :",
            "options": [
              "Des ions hydroxyde d'une base forte",
              "De l'eau pure",
              "Un acide fort",
              "Du dioxygène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du résumé : l'ester réagit avec les ions OH⁻ d'une base forte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Lente et totale",
          "stepTheme": "Lente et totale",
          "stepBadge": "Lente et totale",
          "paragraphText": "La réaction de saponification est lente et totale.\n« Totale » signifie que l'ester est entièrement transformé, contrairement à l'hydrolyse qui atteint un équilibre limité.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p01_q2",
            "type": "mcq",
            "prompt": "Les caractéristiques de la réaction de saponification sont :",
            "options": [
              "Rapide et limitée",
              "Lente et totale",
              "Rapide et totale",
              "Lente et limitée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé et l'exercice 2 donnent la même réponse : la saponification est lente et totale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les produits : un carboxylate et un alcool",
          "stepTheme": "Les produits : un carboxylate et un alcool",
          "stepBadge": "Les produits : un carboxylate et un alcool",
          "paragraphText": "L'équation générale R–COOR' + OH⁻ → R–COO⁻ + R'–OH montre les deux produits.\nL'ion carboxylate, associé à Na⁺, est un savon lorsque R est une longue chaîne d'acide gras.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p01_q3",
            "type": "mcq",
            "prompt": "Les produits de la saponification d'un ester sont :",
            "options": [
              "Un acide carboxylique et un alcool",
              "Un ester et de l'eau",
              "Un ion carboxylate et un alcool",
              "Un amide et un alcool"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En milieu basique, le produit est l'ion carboxylate (et non l'acide), accompagné de l'alcool R'–OH."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre saponification et hydrolyse",
          "stepTheme": "Ne pas confondre saponification et hydrolyse",
          "stepBadge": "Ne pas confondre saponification et hydrolyse",
          "paragraphText": "Piège : l'hydrolyse d'un ester (avec l'eau) est lente, réversible et limitée, et redonne l'acide.\nLa saponification (avec OH⁻) est lente mais totale, et donne le carboxylate.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p01_q4",
            "type": "mcq",
            "prompt": "Ce qui distingue la saponification de l'hydrolyse d'un ester, c'est que la saponification :",
            "options": [
              "Est plus rapide",
              "Donne l'acide carboxylique",
              "Est réversible",
              "Est totale et donne un ion carboxylate"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec les ions hydroxyde, la réaction va jusqu'au bout et le produit est l'ion carboxylate."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La base forte utilisée : la soude",
          "stepTheme": "La base forte utilisée : la soude",
          "stepBadge": "La base forte utilisée : la soude",
          "paragraphText": "Au laboratoire du résumé, la base forte utilisée est la soude, solution d'hydroxyde de sodium (Na⁺ + OH⁻).\nLes carboxylates obtenus sont alors des carboxylates de sodium : ce sont les savons durs.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p01_q5",
            "type": "mcq",
            "prompt": "Dans la fabrication d'un savon au laboratoire, les ions OH⁻ sont apportés par :",
            "options": [
              "La soude, solution d'hydroxyde de sodium",
              "L'acide chlorhydrique",
              "Le chlorure de sodium",
              "L'éthanol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La description de la préparation du résumé utilise la soude comme base forte."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Écrire une équation de saponification",
          "stepTheme": "Écrire une équation de saponification",
          "stepBadge": "Écrire une équation de saponification",
          "paragraphText": "Méthode : couper l'ester en ses deux parties ; la partie acide devient R–COO⁻ (avec Na⁺) et la partie alcool devient R'–OH.\nUn ion OH⁻ est consommé par molécule d'ester.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p01_q6",
            "type": "mcq",
            "prompt": "La saponification d'une mole d'ester simple consomme :",
            "options": [
              "Deux moles d'ions OH⁻",
              "Une mole d'ions OH⁻",
              "Trois moles d'ions OH⁻",
              "Aucun ion OH⁻"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'équation générale montre un ion OH⁻ pour un ester : R–COOR' + OH⁻ → R–COO⁻ + R'–OH."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l05_savon_p01_q1",
          "type": "mcq",
          "prompt": "La saponification d'un ester est sa réaction avec :",
          "options": [
            "Des ions hydroxyde d'une base forte",
            "De l'eau pure",
            "Un acide fort",
            "Du dioxygène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du résumé : l'ester réagit avec les ions OH⁻ d'une base forte."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p01_q2",
          "type": "mcq",
          "prompt": "Les caractéristiques de la réaction de saponification sont :",
          "options": [
            "Rapide et limitée",
            "Lente et totale",
            "Rapide et totale",
            "Lente et limitée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé et l'exercice 2 donnent la même réponse : la saponification est lente et totale."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p01_q3",
          "type": "mcq",
          "prompt": "Les produits de la saponification d'un ester sont :",
          "options": [
            "Un acide carboxylique et un alcool",
            "Un ester et de l'eau",
            "Un ion carboxylate et un alcool",
            "Un amide et un alcool"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En milieu basique, le produit est l'ion carboxylate (et non l'acide), accompagné de l'alcool R'–OH."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p01_q4",
          "type": "mcq",
          "prompt": "Ce qui distingue la saponification de l'hydrolyse d'un ester, c'est que la saponification :",
          "options": [
            "Est plus rapide",
            "Donne l'acide carboxylique",
            "Est réversible",
            "Est totale et donne un ion carboxylate"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec les ions hydroxyde, la réaction va jusqu'au bout et le produit est l'ion carboxylate."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p01_q5",
          "type": "mcq",
          "prompt": "Dans la fabrication d'un savon au laboratoire, les ions OH⁻ sont apportés par :",
          "options": [
            "La soude, solution d'hydroxyde de sodium",
            "L'acide chlorhydrique",
            "Le chlorure de sodium",
            "L'éthanol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La description de la préparation du résumé utilise la soude comme base forte."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p01_q6",
          "type": "mcq",
          "prompt": "La saponification d'une mole d'ester simple consomme :",
          "options": [
            "Deux moles d'ions OH⁻",
            "Une mole d'ions OH⁻",
            "Trois moles d'ions OH⁻",
            "Aucun ion OH⁻"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'équation générale montre un ion OH⁻ pour un ester : R–COOR' + OH⁻ → R–COO⁻ + R'–OH."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l05_savon_p02",
      "order": 2,
      "title": "Les triglycérides : les triesters des corps gras",
      "summary": "Les graisses et les huiles sont des triesters du glycérol et des acides gras.",
      "conceptExplanation": "Les triesters, ou triglycérides, font partie des corps gras : ce sont les constituants des graisses et des huiles.\nIls proviennent des acides gras et du propan-1,2,3-triol (le glycérol) : chaque triglycéride associe trois acides gras à un glycérol.\nExemples d'acides gras du résumé : l'acide butyrique CH₃(CH₂)₂COOH et l'acide palmitique CH₃(CH₂)₁₄COOH.\nLa butyrine est le triglycéride de l'acide butyrique, et la palmitine celui de l'acide palmitique.",
      "keyRule": "Triglycéride = glycérol + 3 acides gras ; c'est un triester, donc il réagira avec 3 ions OH⁻ en saponification.",
      "formulas": [
        {
          "name": "Acide palmitique (acide gras)",
          "formula": "\\mathrm{CH_3-(CH_2)_{14}-COOH}",
          "note": "L'acide gras de l'huile de palme."
        },
        {
          "name": "Glycérol (propan-1,2,3-triol)",
          "formula": "\\mathrm{HO-CH_2-CH(OH)-CH_2-OH}",
          "note": "Le trialcool dont dérivent les triglycérides."
        }
      ],
      "workedExample": {
        "title": "La butyrine (exercice 3)",
        "statement": "La butyrine est le triester de l'acide butyrique et du glycérol. Quel savon obtient-on par sa saponification avec la soude ?",
        "methodSteps": [
          "La butyrine associe trois acides butyriques C₃H₇–COOH à un glycérol.",
          "La saponification coupe les trois liaisons ester et libère le glycérol.",
          "Chaque acide butyrique devient un ion butanoate, associé à Na⁺."
        ],
        "conclusion": "Le savon obtenu est le butanoate de sodium, C₃H₇–COO⁻ + Na⁺, comme dans la solution de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un triester du glycérol",
          "stepTheme": "Un triester du glycérol",
          "stepBadge": "Un triester du glycérol",
          "paragraphText": "• Triglycéride (ou triester) : ester formé à partir du glycérol (propan-1,2,3-triol) et de trois acides gras.\nLes triglycérides sont les constituants des graisses et des huiles.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p02_q1",
            "type": "mcq",
            "prompt": "Les triglycérides sont les constituants :",
            "options": [
              "Des graisses et des huiles",
              "Des protéines",
              "Des sucres",
              "Des matières plastiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé indique que les triesters font partie des corps gras et constituent les graisses et les huiles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les acides gras",
          "stepTheme": "Les acides gras",
          "stepBadge": "Les acides gras",
          "paragraphText": "• Acide gras : acide carboxylique à longue chaîne carbonée, comme l'acide palmitique CH₃(CH₂)₁₄COOH ou l'acide butyrique CH₃(CH₂)₂COOH.\nCe sont eux qui donnent aux savons leurs longues chaînes.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p02_q2",
            "type": "mcq",
            "prompt": "L'acide palmitique, acide gras de l'huile de palme, a pour formule :",
            "options": [
              "CH₃(CH₂)₂COOH",
              "CH₃(CH₂)₁₄COOH",
              "CH₃–COOH",
              "C₆H₅–COOH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau du résumé donne CH₃(CH₂)₁₄COOH pour l'acide palmitique, et CH₃(CH₂)₂COOH pour l'acide butyrique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Trois fonctions ester par molécule",
          "stepTheme": "Trois fonctions ester par molécule",
          "stepBadge": "Trois fonctions ester par molécule",
          "paragraphText": "Le glycérol possède trois groupes –OH : chacun peut former une liaison ester avec un acide gras.\nUn triglycéride contient donc trois fonctions ester, d'où le préfixe « tri ».",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p02_q3",
            "type": "mcq",
            "prompt": "Un triglycéride contient combien de fonctions ester ?",
            "options": [
              "Une seule",
              "Deux",
              "Trois",
              "Quatre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le glycérol est un trialcool : ses trois groupes –OH sont estérifiés par trois acides gras."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Butyrine et palmitine : le nom vient de l'acide gras",
          "stepTheme": "Butyrine et palmitine : le nom vient de l'acide gras",
          "stepBadge": "Butyrine et palmitine : le nom vient de l'acide gras",
          "paragraphText": "Piège : confondre les noms des triglycérides.\nLa butyrine vient de l'acide butyrique et la palmitine de l'acide palmitique ; dans les deux cas, l'alcool est le glycérol.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p02_q4",
            "type": "mcq",
            "prompt": "La palmitine est le triglycéride formé à partir :",
            "options": [
              "De l'acide butyrique et de l'éthanol",
              "De l'acide palmitique et du méthanol",
              "De l'acide stéarique et du glycérol",
              "De l'acide palmitique et du glycérol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Tous les triglycérides dérivent du glycérol ; la palmitine dérive de l'acide palmitique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'huile de palme et la palmitine",
          "stepTheme": "L'huile de palme et la palmitine",
          "stepBadge": "L'huile de palme et la palmitine",
          "paragraphText": "Le résumé prend l'exemple de l'huile de palme, qui contient la palmitine.\nSa saponification donne le palmitate de sodium, de formule (C₁₅H₃₁COO⁻ ; Na⁺).",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p02_q5",
            "type": "mcq",
            "prompt": "Le savon obtenu à partir de l'huile de palme est :",
            "options": [
              "Le palmitate de sodium",
              "Le butanoate de sodium",
              "Le stéarate de potassium",
              "L'acétate de sodium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'huile de palme contient la palmitine, dont la partie acide devient le palmitate de sodium."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le glycérol, l'alcool des corps gras",
          "stepTheme": "Le glycérol, l'alcool des corps gras",
          "stepBadge": "Le glycérol, l'alcool des corps gras",
          "paragraphText": "Le glycérol est le propane-1,2,3-triol : HO–CH₂–CH(OH)–CH₂–OH.\nC'est un polyalcool (un triol), que l'on retrouvera comme produit de la saponification des triglycérides.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p02_q6",
            "type": "mcq",
            "prompt": "Le glycérol est :",
            "options": [
              "Un acide gras",
              "Le propan-1,2,3-triol, un trialcool",
              "Un ester",
              "Une base forte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'exercice 3 du résumé donne le glycérol comme le propane-1,2,3-triol, de formule HO–CH₂–CH(OH)–CH₂–OH."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l05_savon_p02_q1",
          "type": "mcq",
          "prompt": "Les triglycérides sont les constituants :",
          "options": [
            "Des graisses et des huiles",
            "Des protéines",
            "Des sucres",
            "Des matières plastiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé indique que les triesters font partie des corps gras et constituent les graisses et les huiles."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p02_q2",
          "type": "mcq",
          "prompt": "L'acide palmitique, acide gras de l'huile de palme, a pour formule :",
          "options": [
            "CH₃(CH₂)₂COOH",
            "CH₃(CH₂)₁₄COOH",
            "CH₃–COOH",
            "C₆H₅–COOH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau du résumé donne CH₃(CH₂)₁₄COOH pour l'acide palmitique, et CH₃(CH₂)₂COOH pour l'acide butyrique."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p02_q3",
          "type": "mcq",
          "prompt": "Un triglycéride contient combien de fonctions ester ?",
          "options": [
            "Une seule",
            "Deux",
            "Trois",
            "Quatre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le glycérol est un trialcool : ses trois groupes –OH sont estérifiés par trois acides gras."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p02_q4",
          "type": "mcq",
          "prompt": "La palmitine est le triglycéride formé à partir :",
          "options": [
            "De l'acide butyrique et de l'éthanol",
            "De l'acide palmitique et du méthanol",
            "De l'acide stéarique et du glycérol",
            "De l'acide palmitique et du glycérol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Tous les triglycérides dérivent du glycérol ; la palmitine dérive de l'acide palmitique."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p02_q5",
          "type": "mcq",
          "prompt": "Le savon obtenu à partir de l'huile de palme est :",
          "options": [
            "Le palmitate de sodium",
            "Le butanoate de sodium",
            "Le stéarate de potassium",
            "L'acétate de sodium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'huile de palme contient la palmitine, dont la partie acide devient le palmitate de sodium."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p02_q6",
          "type": "mcq",
          "prompt": "Le glycérol est :",
          "options": [
            "Un acide gras",
            "Le propan-1,2,3-triol, un trialcool",
            "Un ester",
            "Une base forte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'exercice 3 du résumé donne le glycérol comme le propane-1,2,3-triol, de formule HO–CH₂–CH(OH)–CH₂–OH."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l05_savon_p03",
      "order": 3,
      "title": "L'équation-bilan de la fabrication d'un savon",
      "summary": "Un triglycéride + 3 soude → du glycérol + 3 carboxylates de sodium (le savon).",
      "conceptExplanation": "La fabrication d'un savon est la saponification d'un triglycéride par la soude.\nL'équation-bilan montre qu'un triglycéride réagit avec trois ions hydroxyde (3 (Na⁺ + OH⁻)).\nLes produits sont le glycérol (le polyalcool libéré) et trois carboxylates de sodium : c'est le savon.\nAvec l'huile de palme, le savon obtenu est le palmitate de sodium (C₁₅H₃₁COO⁻ ; Na⁺).",
      "keyRule": "1 triglycéride + 3 OH⁻ → 1 glycérol + 3 savons : les coefficients 3 viennent des trois fonctions ester.",
      "formulas": [
        {
          "name": "Saponification d'un triglycéride par la soude",
          "formula": "\\mathrm{(R-COO)_3C_3H_5 + 3\\,(Na^+ + OH^-) \\longrightarrow C_3H_5(OH)_3 + 3\\,(R-COO^- + Na^+)}",
          "note": "Les trois carboxylates de sodium constituent le savon ; C₃H₅(OH)₃ est le glycérol."
        }
      ],
      "workedExample": {
        "title": "Les produits de la saponification de la palmitine",
        "statement": "Nomme les produits de la saponification de la palmitine (de l'huile de table) par la soude.",
        "methodSteps": [
          "La palmitine est le triglycéride de l'acide palmitique : elle réagit avec 3 (Na⁺ + OH⁻).",
          "Les trois liaisons ester sont coupées : le glycérol est libéré.",
          "Les trois parties acides deviennent trois palmitates de sodium."
        ],
        "conclusion": "On obtient le glycérol et le palmitate de sodium, le savon, comme dans la résolution de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Trois ions hydroxyde par triglycéride",
          "stepTheme": "Trois ions hydroxyde par triglycéride",
          "stepBadge": "Trois ions hydroxyde par triglycéride",
          "paragraphText": "L'équation-bilan du résumé fait intervenir 3 (Na⁺ + OH⁻) pour un triglycéride.\nChaque fonction ester consomme un ion hydroxyde, et il y en a trois.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p03_q1",
            "type": "mcq",
            "prompt": "La saponification d'une mole de triglycéride consomme :",
            "options": [
              "Une mole d'ions OH⁻",
              "Deux moles d'ions OH⁻",
              "Trois moles d'ions OH⁻",
              "Six moles d'ions OH⁻"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le triglycéride a trois fonctions ester : il faut 3 (Na⁺ + OH⁻) dans l'équation-bilan."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Trois molécules de savon formées",
          "stepTheme": "Trois molécules de savon formées",
          "stepBadge": "Trois molécules de savon formées",
          "paragraphText": "En conséquence, une mole de triglycéride donne trois moles de carboxylate de sodium (savon).\nLa relation s'écrit 3n(triglycéride) = n(savon), relation utilisée dans la situation d'évaluation.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p03_q2",
            "type": "mcq",
            "prompt": "À partir d'une mole de triglycéride, la saponification produit :",
            "options": [
              "Trois moles de savon et une mole de glycérol",
              "Une mole de savon et trois moles de glycérol",
              "Trois moles de savon et trois moles de glycérol",
              "Une mole de savon et une mole d'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bilan donne 3 carboxylates (savon) et 1 glycérol pour 1 triglycéride."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le savon est un carboxylate de sodium",
          "stepTheme": "Le savon est un carboxylate de sodium",
          "stepBadge": "Le savon est un carboxylate de sodium",
          "paragraphText": "• Savon : carboxylate de sodium (ou de potassium) d'un acide gras.\nLe résumé écrit le palmitate de sodium sous la forme (C₁₅H₃₁COO⁻ ; Na⁺).",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p03_q3",
            "type": "mcq",
            "prompt": "Chimiquement, un savon est :",
            "options": [
              "Un ester d'acide gras",
              "Un carboxylate de sodium ou de potassium d'un acide gras",
              "Un acide gras pur",
              "Un triglycéride purifié"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le savon est le sel de sodium (ou de potassium) d'un acide gras, formé lors de la saponification."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le glycérol est un produit, pas un réactif",
          "stepTheme": "Le glycérol est un produit, pas un réactif",
          "stepBadge": "Le glycérol est un produit, pas un réactif",
          "paragraphText": "Piège : dans l'équation de saponification, le glycérol est du côté des produits.\nLes réactifs sont le triglycéride et la soude ; le glycérol est l'alcool libéré par la coupure des esters.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p03_q4",
            "type": "mcq",
            "prompt": "Dans la saponification d'un triglycéride, le glycérol est :",
            "options": [
              "Le réactif basique",
              "Le catalyseur",
              "Le solvant",
              "Un produit de la réaction"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le glycérol est le polyalcool libéré : il figure parmi les produits, avec le savon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Relation entre quantités de matière",
          "stepTheme": "Relation entre quantités de matière",
          "stepBadge": "Relation entre quantités de matière",
          "paragraphText": "L'équation-bilan donne les relations : 3n(huile) = n(savon) et n(huile) = n(glycérol).\nCe sont elles qui permettent de calculer les masses de savon et de glycérol dans la situation d'évaluation.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p03_q5",
            "type": "mcq",
            "prompt": "Si on saponifie 0,10 mol de triglycéride, la quantité de savon obtenue est :",
            "options": [
              "0,30 mol",
              "0,10 mol",
              "0,033 mol",
              "0,60 mol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la relation 3n(huile) = n(savon), on obtient 3 × 0,10 = 0,30 mol de savon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le stéarate de sodium (exercice 5)",
          "stepTheme": "Le stéarate de sodium (exercice 5)",
          "stepBadge": "Le stéarate de sodium (exercice 5)",
          "paragraphText": "Dans l'exercice 5 du résumé, la stéarine (triglycéride de l'acide stéarique, à 18 carbones) est traitée par un excès de soude.\nLe produit solide, le stéarate de sodium, a pour nom d'usage : un savon.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p03_q6",
            "type": "mcq",
            "prompt": "Le stéarate de sodium, obtenu par saponification de la stéarine, est :",
            "options": [
              "Un détergent liquide",
              "Un savon",
              "Un acide gras",
              "Un triglycéride"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La résolution de l'exercice 5 donne son nom d'usage : le stéarate de sodium est un savon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l05_savon_p03_q1",
          "type": "mcq",
          "prompt": "La saponification d'une mole de triglycéride consomme :",
          "options": [
            "Une mole d'ions OH⁻",
            "Deux moles d'ions OH⁻",
            "Trois moles d'ions OH⁻",
            "Six moles d'ions OH⁻"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le triglycéride a trois fonctions ester : il faut 3 (Na⁺ + OH⁻) dans l'équation-bilan."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p03_q2",
          "type": "mcq",
          "prompt": "À partir d'une mole de triglycéride, la saponification produit :",
          "options": [
            "Trois moles de savon et une mole de glycérol",
            "Une mole de savon et trois moles de glycérol",
            "Trois moles de savon et trois moles de glycérol",
            "Une mole de savon et une mole d'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bilan donne 3 carboxylates (savon) et 1 glycérol pour 1 triglycéride."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p03_q3",
          "type": "mcq",
          "prompt": "Chimiquement, un savon est :",
          "options": [
            "Un ester d'acide gras",
            "Un carboxylate de sodium ou de potassium d'un acide gras",
            "Un acide gras pur",
            "Un triglycéride purifié"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le savon est le sel de sodium (ou de potassium) d'un acide gras, formé lors de la saponification."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p03_q4",
          "type": "mcq",
          "prompt": "Dans la saponification d'un triglycéride, le glycérol est :",
          "options": [
            "Le réactif basique",
            "Le catalyseur",
            "Le solvant",
            "Un produit de la réaction"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le glycérol est le polyalcool libéré : il figure parmi les produits, avec le savon."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p03_q5",
          "type": "mcq",
          "prompt": "Si on saponifie 0,10 mol de triglycéride, la quantité de savon obtenue est :",
          "options": [
            "0,30 mol",
            "0,10 mol",
            "0,033 mol",
            "0,60 mol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la relation 3n(huile) = n(savon), on obtient 3 × 0,10 = 0,30 mol de savon."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p03_q6",
          "type": "mcq",
          "prompt": "Le stéarate de sodium, obtenu par saponification de la stéarine, est :",
          "options": [
            "Un détergent liquide",
            "Un savon",
            "Un acide gras",
            "Un triglycéride"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La résolution de l'exercice 5 donne son nom d'usage : le stéarate de sodium est un savon."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l05_savon_p04",
      "order": 4,
      "title": "La préparation d'un savon au laboratoire",
      "summary": "Reflux de l'huile avec la soude, relargage au chlorure de sodium, filtration : le protocole du résumé.",
      "conceptExplanation": "Au laboratoire, pour fabriquer un savon, on chauffe à reflux de l'huile additionnée de soude, en solution dans de l'alcool.\nÀ la fin du chauffage, le mélange obtenu est versé dans une solution concentrée de chlorure de sodium : le savon, très peu soluble dans ces conditions, précipite (c'est le relargage).\nAprès filtration et rinçage, on peut vérifier que le solide obtenu a des propriétés détergentes : il dissout la saleté.\nLe chauffage à reflux accélère la saponification, qui est une réaction lente.",
      "keyRule": "Reflux (huile + soude dans l'alcool), puis relargage dans l'eau salée concentrée, puis filtration et rinçage.",
      "formulas": [],
      "workedExample": {
        "title": "Pourquoi le savon précipite dans l'eau salée",
        "statement": "Explique le rôle de la solution concentrée de chlorure de sodium à la fin de la préparation.",
        "methodSteps": [
          "Après le reflux, le savon formé est mélangé au glycérol, à l'eau et à la soude restante.",
          "Dans une solution concentrée de chlorure de sodium, le savon est très peu soluble.",
          "Il précipite donc en un solide, que l'on sépare par filtration, puis que l'on rince."
        ],
        "conclusion": "L'eau salée concentrée fait précipiter le savon : c'est l'étape de relargage décrite dans le résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le chauffage à reflux",
          "stepTheme": "Le chauffage à reflux",
          "stepBadge": "Le chauffage à reflux",
          "paragraphText": "On chauffe à reflux l'huile additionnée de soude (en solution dans de l'alcool).\nLe reflux permet de chauffer longtemps sans perdre les vapeurs, ce qui convient à la saponification, réaction lente.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p04_q1",
            "type": "mcq",
            "prompt": "Lors de la préparation d'un savon au laboratoire, on chauffe à reflux :",
            "options": [
              "De l'huile avec de la soude en solution dans de l'alcool",
              "De l'huile avec de l'acide chlorhydrique",
              "Du glycérol avec de la soude",
              "Un ester avec de l'eau pure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première phrase de la description de la préparation du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l'alcool dans le mélange",
          "stepTheme": "Le rôle de l'alcool dans le mélange",
          "stepBadge": "Le rôle de l'alcool dans le mélange",
          "paragraphText": "La soude est introduite en solution dans de l'alcool : cela favorise le contact entre l'huile (corps gras) et la solution basique.\nLe mélange réactionnel devient ainsi plus homogène pendant le chauffage.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p04_q2",
            "type": "mcq",
            "prompt": "Dans le protocole du résumé, la soude est utilisée :",
            "options": [
              "En poudre sèche",
              "En solution dans de l'alcool",
              "En solution dans l'huile",
              "En solution dans l'acide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé précise que l'huile est additionnée de soude en solution dans de l'alcool."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le relargage dans l'eau salée",
          "stepTheme": "Le relargage dans l'eau salée",
          "stepBadge": "Le relargage dans l'eau salée",
          "paragraphText": "À la fin du chauffage, le mélange est versé dans une solution concentrée de chlorure de sodium.\nLe savon, très peu soluble dans ces conditions, précipite : c'est le relargage.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p04_q3",
            "type": "mcq",
            "prompt": "Le mélange réactionnel est versé dans une solution concentrée de chlorure de sodium pour :",
            "options": [
              "Accélérer la réaction",
              "Neutraliser la soude",
              "Faire précipiter le savon, peu soluble dans l'eau salée",
              "Dissoudre le savon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé explique que le savon, très peu soluble dans l'eau salée concentrée, y précipite."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Filtration et rinçage",
          "stepTheme": "Filtration et rinçage",
          "stepBadge": "Filtration et rinçage",
          "paragraphText": "Après le relargage, on filtre pour récupérer le solide, puis on le rince.\nOn peut alors vérifier que le solide obtenu a des propriétés détergentes : il dissout la saleté.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p04_q4",
            "type": "mcq",
            "prompt": "Après filtration et rinçage, on vérifie que le solide obtenu :",
            "options": [
              "Est un acide gras",
              "Se dissout dans l'huile",
              "Est du chlorure de sodium",
              "A des propriétés détergentes et dissout la saleté"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La description du résumé se termine par ce test : le solide obtenu dissout la saleté, c'est bien un savon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Pourquoi chauffer si la réaction est totale ?",
          "stepTheme": "Pourquoi chauffer si la réaction est totale ?",
          "stepBadge": "Pourquoi chauffer si la réaction est totale ?",
          "paragraphText": "Piège : une réaction totale n'est pas forcément rapide.\nLa saponification est totale mais lente : le chauffage à reflux sert à l'accélérer, pas à la rendre possible.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p04_q5",
            "type": "mcq",
            "prompt": "On chauffe à reflux lors de la saponification parce que la réaction est :",
            "options": [
              "Lente, bien que totale",
              "Impossible à froid",
              "Endothermique",
              "Réversible"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La saponification est lente et totale ; le chauffage augmente sa vitesse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les usages industriels de la saponification",
          "stepTheme": "Les usages industriels de la saponification",
          "stepBadge": "Les usages industriels de la saponification",
          "paragraphText": "D'après la documentation du résumé, la saponification des corps gras est utilisée industriellement pour fabriquer des savons, des résines glycérophtaliques, des produits cosmétiques et des explosifs.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savon_p04_q6",
            "type": "mcq",
            "prompt": "Selon la documentation du résumé, la saponification industrielle sert notamment à fabriquer :",
            "options": [
              "Des engrais",
              "Des savons et des produits cosmétiques",
              "Des matières plastiques uniquement",
              "Des médicaments uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La documentation cite les savons, les résines glycérophtaliques, les produits cosmétiques et les explosifs."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l05_savon_p04_q1",
          "type": "mcq",
          "prompt": "Lors de la préparation d'un savon au laboratoire, on chauffe à reflux :",
          "options": [
            "De l'huile avec de la soude en solution dans de l'alcool",
            "De l'huile avec de l'acide chlorhydrique",
            "Du glycérol avec de la soude",
            "Un ester avec de l'eau pure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première phrase de la description de la préparation du résumé."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p04_q2",
          "type": "mcq",
          "prompt": "Dans le protocole du résumé, la soude est utilisée :",
          "options": [
            "En poudre sèche",
            "En solution dans de l'alcool",
            "En solution dans l'huile",
            "En solution dans l'acide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé précise que l'huile est additionnée de soude en solution dans de l'alcool."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p04_q3",
          "type": "mcq",
          "prompt": "Le mélange réactionnel est versé dans une solution concentrée de chlorure de sodium pour :",
          "options": [
            "Accélérer la réaction",
            "Neutraliser la soude",
            "Faire précipiter le savon, peu soluble dans l'eau salée",
            "Dissoudre le savon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé explique que le savon, très peu soluble dans l'eau salée concentrée, y précipite."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p04_q4",
          "type": "mcq",
          "prompt": "Après filtration et rinçage, on vérifie que le solide obtenu :",
          "options": [
            "Est un acide gras",
            "Se dissout dans l'huile",
            "Est du chlorure de sodium",
            "A des propriétés détergentes et dissout la saleté"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La description du résumé se termine par ce test : le solide obtenu dissout la saleté, c'est bien un savon."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p04_q5",
          "type": "mcq",
          "prompt": "On chauffe à reflux lors de la saponification parce que la réaction est :",
          "options": [
            "Lente, bien que totale",
            "Impossible à froid",
            "Endothermique",
            "Réversible"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La saponification est lente et totale ; le chauffage augmente sa vitesse."
        },
        {
          "id": "terminale_c_chimie_l05_savon_p04_q6",
          "type": "mcq",
          "prompt": "Selon la documentation du résumé, la saponification industrielle sert notamment à fabriquer :",
          "options": [
            "Des engrais",
            "Des savons et des produits cosmétiques",
            "Des matières plastiques uniquement",
            "Des médicaments uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La documentation cite les savons, les résines glycérophtaliques, les produits cosmétiques et les explosifs."
        }
      ]
    }
  ]
};
