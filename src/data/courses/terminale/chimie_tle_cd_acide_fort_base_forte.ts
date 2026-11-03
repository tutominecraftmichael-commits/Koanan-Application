import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « TleCDE_Chimie_L07_Acide_fort_base_forte.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const CHIMIE_TLE_CD_L07_ACIDE_FORT_BASE_FORTE: CurriculumChapter = {
  "id": "terminale_c_chimie_l07_acide_fort_base_forte",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 7,
  "title": "Leçon 7 : Acide fort – Base forte",
  "summary": "Le chlorure d'hydrogène et l'hydroxyde de sodium dans l'eau, le pH des solutions fortes, les dilutions et les mélanges.",
  "officialVolumeHours": 3,
  "contentVersion": 2,
  "source": "TleCDE_Chimie_L07_Acide_fort_base_forte.pdf",
  "points": [
    {
      "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01",
      "order": 1,
      "title": "Le chlorure d'hydrogène dans l'eau",
      "summary": "On découvre ce qui se passe quand le gaz HCl se dissout dans l'eau pour donner l'acide chlorhydrique.",
      "conceptExplanation": "Le chlorure d'hydrogène HCl est un gaz très soluble dans l'eau.\nSa dissolution est exothermique : elle dégage de la chaleur.\nOn obtient une solution aqueuse d'acide chlorhydrique.\nCette solution conduit le courant : elle contient des ions H₃O⁺ et Cl⁻.\nLa réaction de HCl avec l'eau est totale : l'acide chlorhydrique est un acide fort.",
      "keyRule": "Dans l'eau, HCl réagit totalement : HCl + H₂O → H₃O⁺ + Cl⁻, avec une flèche simple et sans molécules HCl restantes.",
      "formulas": [
        {
          "name": "Ionisation du chlorure d'hydrogène",
          "formula": "\\mathrm{HCl} + \\mathrm{H_2O} \\longrightarrow \\mathrm{H_3O^+} + \\mathrm{Cl^-}",
          "note": "Flèche simple : la réaction est totale."
        }
      ],
      "workedExample": {
        "title": "L'expérience du jet d'eau",
        "statement": "Un ballon rempli de chlorure d'hydrogène gazeux est retourné sur une cuve d'eau contenant quelques gouttes de BBT. L'eau monte en jet dans le ballon et devient jaune. Interprète l'expérience.",
        "methodSteps": [
          "L'eau monte en jet : le gaz HCl se dissout très vite et en grande quantité. HCl est donc très soluble dans l'eau.",
          "Le BBT devient jaune : la solution obtenue est acide.",
          "On teste la solution avec un circuit électrique : elle conduit le courant, elle contient donc des ions H₃O⁺ et Cl⁻.",
          "La réaction est totale : HCl + H₂O → H₃O⁺ + Cl⁻."
        ],
        "conclusion": "La dissolution de HCl dans l'eau donne l'acide chlorhydrique, une solution ionique et acide. Comme la réaction est totale, c'est un acide fort."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Au labo du lycée",
          "stepTheme": "Au labo du lycée",
          "stepBadge": "Au labo du lycée",
          "paragraphText": "Au labo de son lycée, Koffi lit deux étiquettes.\n• Flacon 1 : « Acide chlorhydrique – détartrant – décapant ».\n• Flacon 2 : « Lessive de soude – décapant ».\nLe laborantin explique : on s'en sert pour déboucher les éviers et faire briller les carreaux.",
          "konanTip": "La lessive de soude contient de l'hydroxyde de sodium NaOH : c'est une base, pas un acide.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q1",
            "type": "mcq",
            "prompt": "Lequel de ces produits contient de l'acide chlorhydrique ?",
            "options": [
              "La lessive de soude",
              "L'eau de Javel",
              "Le détartrant",
              "Le sel de cuisine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'étiquette « acide chlorhydrique – détartrant » l'indique. La lessive de soude contient de l'hydroxyde de sodium, une base."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le chlorure d'hydrogène HCl",
          "stepTheme": "Le chlorure d'hydrogène HCl",
          "stepBadge": "Le chlorure d'hydrogène HCl",
          "paragraphText": "• Chlorure d'hydrogène : HCl, un gaz dans les conditions ordinaires.\nIl est très soluble dans l'eau : dans l'expérience du jet d'eau, l'eau monte en jet dans le ballon rempli de HCl.\n• Acide chlorhydrique : la solution aqueuse de chlorure d'hydrogène.",
          "konanTip": "HCl pur = gaz. HCl dissous dans l'eau = acide chlorhydrique.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q2",
            "type": "mcq",
            "prompt": "Dans les conditions ordinaires, le chlorure d'hydrogène pur est :",
            "options": [
              "un gaz",
              "un liquide",
              "un solide blanc",
              "une solution aqueuse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le chlorure d'hydrogène HCl est un gaz. C'est sa solution dans l'eau, l'acide chlorhydrique, qui est une solution aqueuse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une dissolution exothermique",
          "stepTheme": "Une dissolution exothermique",
          "stepBadge": "Une dissolution exothermique",
          "paragraphText": "La dissolution de HCl dans l'eau est exothermique.\n• Exothermique : la transformation dégage de la chaleur.\nLe récipient s'échauffe pendant la dissolution.",
          "konanTip": "Exo = vers l'extérieur : la chaleur sort du système.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q3",
            "type": "mcq",
            "prompt": "Pendant la dissolution du chlorure d'hydrogène dans l'eau, que constate-t-on en touchant le récipient ?",
            "options": [
              "Il se refroidit",
              "Sa température ne change pas",
              "Il gèle",
              "Il s'échauffe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dissolution de HCl est exothermique : elle libère de la chaleur, donc le récipient s'échauffe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Prouver que la solution est ionique",
          "stepTheme": "Prouver que la solution est ionique",
          "stepBadge": "Prouver que la solution est ionique",
          "paragraphText": "Méthode : on place la solution dans un circuit avec une pile et une lampe (ou un ampèremètre).\nLa lampe s'allume : la solution conduit le courant électrique.\nUne solution qui conduit le courant contient des ions : elle est ionique.\nAu passage, le BBT jaune montre que la solution est acide.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q4",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que la solution d'acide chlorhydrique est ionique ?",
            "options": [
              "Parce que HCl est un gaz",
              "Parce qu'elle conduit le courant électrique",
              "Parce que sa dissolution dégage de la chaleur",
              "Parce qu'elle est incolore"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le courant électrique est transporté par des ions dans une solution. Si la solution conduit le courant, elle contient des ions : elle est ionique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les ions de l'acide chlorhydrique",
          "stepTheme": "Les ions de l'acide chlorhydrique",
          "stepBadge": "Les ions de l'acide chlorhydrique",
          "paragraphText": "L'acide chlorhydrique contient deux sortes d'ions majoritaires.\n• Ion hydronium : H₃O⁺, responsable du caractère acide.\n• Ion chlorure : Cl⁻.",
          "konanTip": "Écris toujours H₃O⁺ et non H⁺ dans les équations du cours.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q5",
            "type": "mcq",
            "prompt": "Quels ions l'acide chlorhydrique contient-il majoritairement ?",
            "options": [
              "H⁺ et Cl₂",
              "OH⁻ et Cl⁻",
              "H₃O⁺ et Cl⁻",
              "Na⁺ et Cl⁻"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La réaction de HCl avec l'eau produit des ions hydronium H₃O⁺ et des ions chlorure Cl⁻. Na⁺ et OH⁻ viennent de la soude, et Cl₂ est le dichlore, une molécule."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une réaction totale",
          "stepTheme": "Une réaction totale",
          "stepBadge": "Une réaction totale",
          "paragraphText": "La réaction d'ionisation de HCl dans l'eau est totale.\nOn l'écrit avec une flèche simple :\nHCl + H₂O → H₃O⁺ + Cl⁻\nC'est pourquoi l'acide chlorhydrique est un acide fort.",
          "formula": {
            "name": "Équation-bilan",
            "formula": "\\mathrm{HCl} + \\mathrm{H_2O} \\longrightarrow \\mathrm{H_3O^+} + \\mathrm{Cl^-}",
            "note": "Flèche simple = réaction totale."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q6",
            "type": "mcq",
            "prompt": "Quelle est l'équation-bilan de la réaction du chlorure d'hydrogène avec l'eau ?",
            "options": [
              "HCl + H₂O ⇄ H₃O⁺ + Cl⁻",
              "HCl + H₂O → H₃O⁺ + Cl⁻",
              "HCl + H₂O → H₂Cl⁺ + OH⁻",
              "HCl + OH⁻ → H₂O + Cl⁻"
            ],
            "correctAnswerIndex": 1,
            "explanation": "HCl cède un proton à l'eau, ce qui donne H₃O⁺ et Cl⁻. La réaction est totale, donc on utilise une flèche simple et non une double flèche. La dernière équation est une réaction avec une base, pas avec l'eau."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Totale : plus de molécules HCl",
          "stepTheme": "Totale : plus de molécules HCl",
          "stepBadge": "Totale : plus de molécules HCl",
          "paragraphText": "Piège fréquent : croire qu'il reste un peu de HCl dans la solution.\nRéaction totale signifie que toutes les molécules HCl ont réagi.\nDans l'acide chlorhydrique, on trouve H₂O, H₃O⁺, Cl⁻ (et très peu de OH⁻), mais plus de molécules HCl.",
          "konanTip": "Dans l'inventaire des espèces d'un acide fort, n'écris jamais la molécule de l'acide.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q7",
            "type": "mcq",
            "prompt": "Quelle espèce chimique est absente d'une solution d'acide chlorhydrique ?",
            "options": [
              "Les ions H₃O⁺",
              "Les ions Cl⁻",
              "Les molécules H₂O",
              "Les molécules HCl"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La réaction de HCl avec l'eau est totale : toutes les molécules HCl ont été transformées en ions H₃O⁺ et Cl⁻. L'eau, elle, est le solvant, donc elle est toujours présente."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q1",
          "type": "mcq",
          "prompt": "Lequel de ces produits contient de l'acide chlorhydrique ?",
          "options": [
            "La lessive de soude",
            "L'eau de Javel",
            "Le détartrant",
            "Le sel de cuisine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'étiquette « acide chlorhydrique – détartrant » l'indique. La lessive de soude contient de l'hydroxyde de sodium, une base."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q2",
          "type": "mcq",
          "prompt": "Dans les conditions ordinaires, le chlorure d'hydrogène pur est :",
          "options": [
            "un gaz",
            "un liquide",
            "un solide blanc",
            "une solution aqueuse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le chlorure d'hydrogène HCl est un gaz. C'est sa solution dans l'eau, l'acide chlorhydrique, qui est une solution aqueuse."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q3",
          "type": "mcq",
          "prompt": "Pendant la dissolution du chlorure d'hydrogène dans l'eau, que constate-t-on en touchant le récipient ?",
          "options": [
            "Il se refroidit",
            "Sa température ne change pas",
            "Il gèle",
            "Il s'échauffe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dissolution de HCl est exothermique : elle libère de la chaleur, donc le récipient s'échauffe."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q4",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que la solution d'acide chlorhydrique est ionique ?",
          "options": [
            "Parce que HCl est un gaz",
            "Parce qu'elle conduit le courant électrique",
            "Parce que sa dissolution dégage de la chaleur",
            "Parce qu'elle est incolore"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le courant électrique est transporté par des ions dans une solution. Si la solution conduit le courant, elle contient des ions : elle est ionique."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q5",
          "type": "mcq",
          "prompt": "Quels ions l'acide chlorhydrique contient-il majoritairement ?",
          "options": [
            "H⁺ et Cl₂",
            "OH⁻ et Cl⁻",
            "H₃O⁺ et Cl⁻",
            "Na⁺ et Cl⁻"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La réaction de HCl avec l'eau produit des ions hydronium H₃O⁺ et des ions chlorure Cl⁻. Na⁺ et OH⁻ viennent de la soude, et Cl₂ est le dichlore, une molécule."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q6",
          "type": "mcq",
          "prompt": "Quelle est l'équation-bilan de la réaction du chlorure d'hydrogène avec l'eau ?",
          "options": [
            "HCl + H₂O ⇄ H₃O⁺ + Cl⁻",
            "HCl + H₂O → H₃O⁺ + Cl⁻",
            "HCl + H₂O → H₂Cl⁺ + OH⁻",
            "HCl + OH⁻ → H₂O + Cl⁻"
          ],
          "correctAnswerIndex": 1,
          "explanation": "HCl cède un proton à l'eau, ce qui donne H₃O⁺ et Cl⁻. La réaction est totale, donc on utilise une flèche simple et non une double flèche. La dernière équation est une réaction avec une base, pas avec l'eau."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p01_q7",
          "type": "mcq",
          "prompt": "Quelle espèce chimique est absente d'une solution d'acide chlorhydrique ?",
          "options": [
            "Les ions H₃O⁺",
            "Les ions Cl⁻",
            "Les molécules H₂O",
            "Les molécules HCl"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La réaction de HCl avec l'eau est totale : toutes les molécules HCl ont été transformées en ions H₃O⁺ et Cl⁻. L'eau, elle, est le solvant, donc elle est toujours présente."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02",
      "order": 2,
      "title": "Acide fort : définition et exemples",
      "summary": "Reconnaître un acide fort, citer les acides forts du programme et écrire leur réaction totale avec l'eau.",
      "conceptExplanation": "Un acide HA est fort s'il réagit totalement avec l'eau : HA + H₂O → H₃O⁺ + A⁻.\nCette réaction d'ionisation est exothermique, rapide et totale.\nMonoacides forts : HCl, HNO₃, HBr, HI (et aussi HClO₄).\nDiacide fort : H₂SO₄, l'acide sulfurique.\nAttention : HF n'est pas un acide fort, sa réaction avec l'eau est limitée.\nDans la solution, il ne reste aucune molécule HA : seulement H₃O⁺, A⁻, OH⁻ (très minoritaire) et H₂O.",
      "keyRule": "Un acide fort réagit totalement avec l'eau : on écrit une flèche simple et la molécule HA disparaît de la solution.",
      "formulas": [
        {
          "name": "Ionisation d'un acide fort HA",
          "formula": "\\mathrm{HA} + \\mathrm{H_2O} \\longrightarrow \\mathrm{H_3O^+} + \\mathrm{A^-}",
          "note": "Flèche simple : la réaction est totale."
        }
      ],
      "workedExample": {
        "title": "Mélange d'acide chlorhydrique et d'acide nitrique",
        "statement": "Au laboratoire, un groupe mélange une solution d'acide chlorhydrique et une solution d'acide nitrique. Écris la formule de chaque acide, l'équation-bilan de son ionisation dans l'eau, puis la liste des espèces présentes dans le mélange.",
        "methodSteps": [
          "Formules : acide chlorhydrique HCl ; acide nitrique HNO₃.",
          "Ces deux acides sont forts : leur réaction avec l'eau est totale, on utilise une flèche simple.",
          "HCl + H₂O → H₃O⁺ + Cl⁻",
          "HNO₃ + H₂O → H₃O⁺ + NO₃⁻",
          "Les molécules HCl et HNO₃ ont disparu. On ajoute les ions OH⁻ (très minoritaires, dus à l'eau) et le solvant H₂O."
        ],
        "conclusion": "Espèces présentes dans le mélange : H₃O⁺ ; Cl⁻ ; NO₃⁻ ; OH⁻ ; H₂O."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Qu'est-ce qu'un acide fort ?",
          "stepTheme": "Qu'est-ce qu'un acide fort ?",
          "stepBadge": "Qu'est-ce qu'un acide fort ?",
          "paragraphText": "• Acide fort : un acide HA est fort s'il réagit totalement avec l'eau.\nL'équation-bilan s'écrit : HA + H₂O → H₃O⁺ + A⁻.\nA⁻ est la base conjuguée de l'acide HA.",
          "formula": {
            "name": "Réaction d'un acide fort avec l'eau",
            "formula": "\\mathrm{HA} + \\mathrm{H_2O} \\longrightarrow \\mathrm{H_3O^+} + \\mathrm{A^-}",
            "note": "Réaction totale : flèche simple."
          },
          "konanTip": "« Fort » ne veut pas dire « concentré » : c'est la réaction avec l'eau qui est totale.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la définition correcte d'un acide fort ?",
            "options": [
              "Un acide très concentré",
              "Un acide qui réagit totalement avec l'eau",
              "Un acide dont le pH vaut toujours 1",
              "Un acide qui réagit partiellement avec l'eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un acide HA est fort si sa réaction avec l'eau est totale. La force d'un acide ne dépend ni de sa concentration ni d'une valeur fixe du pH ; une réaction partielle correspond à un acide faible."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les 3 caractères de l'ionisation",
          "stepTheme": "Les 3 caractères de l'ionisation",
          "stepBadge": "Les 3 caractères de l'ionisation",
          "paragraphText": "La réaction d'un acide fort avec l'eau a trois caractéristiques :\n• Exothermique : elle libère de la chaleur.\n• Rapide : elle se fait presque instantanément.\n• Totale : tout l'acide HA réagit.",
          "konanTip": "Retiens le trio « exothermique, rapide, totale » : c'est une question classique de situation d'évaluation.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q2",
            "type": "mcq",
            "prompt": "Parmi ces propositions, laquelle ne caractérise PAS la réaction d'ionisation d'un acide fort dans l'eau ?",
            "options": [
              "Exothermique",
              "Rapide",
              "Totale",
              "Limitée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La réaction d'un acide fort avec l'eau est exothermique, rapide et totale. Une réaction limitée caractérise un acide faible."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les monoacides forts à connaître",
          "stepTheme": "Les monoacides forts à connaître",
          "stepBadge": "Les monoacides forts à connaître",
          "paragraphText": "Chacun de ces acides cède un seul proton H⁺ :\n• HCl : acide chlorhydrique (le détartrant vendu en bouteille).\n• HNO₃ : acide nitrique.\n• HBr : acide bromhydrique ; HI : acide iodhydrique.\nOn peut aussi citer HClO₄, l'acide perchlorique.",
          "konanTip": "Ne confonds pas HNO₃ (acide nitrique) avec NH₃ (ammoniac, une base).",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q3",
            "type": "mcq",
            "prompt": "Quelle est la formule de l'acide nitrique ?",
            "options": [
              "HNO₃",
              "HNO₂",
              "NH₃",
              "HCl"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'acide nitrique a pour formule HNO₃. HNO₂ est l'acide nitreux (un acide faible), NH₃ est l'ammoniac (une base) et HCl est l'acide chlorhydrique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Écrire l'équation-bilan",
          "stepTheme": "Écrire l'équation-bilan",
          "stepBadge": "Écrire l'équation-bilan",
          "paragraphText": "1. L'acide HA cède un proton H⁺ à l'eau.\n2. L'eau devient H₃O⁺, l'acide devient sa base conjuguée A⁻.\n3. On met une flèche simple, car la réaction est totale.\nExemple : HBr + H₂O → H₃O⁺ + Br⁻.",
          "konanTip": "Vérifie la conservation des charges : 0 à gauche, (+1) + (−1) = 0 à droite.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q4",
            "type": "mcq",
            "prompt": "Quelle est l'équation-bilan de la réaction de l'acide nitrique avec l'eau ?",
            "options": [
              "HNO₃ + H₂O → H₃O⁺ + NO₃²⁻",
              "HNO₃ + H₂O → H₂NO₃⁺ + OH⁻",
              "HNO₃ + H₂O → H₃O⁺ + NO₃⁻",
              "HNO₃ + H₂O ⇌ H₃O⁺ + NO₃⁻"
            ],
            "correctAnswerIndex": 2,
            "explanation": "HNO₃ cède un proton à l'eau : il se forme H₃O⁺ et l'ion nitrate NO₃⁻ (une seule charge négative). La réaction est totale, d'où la flèche simple et non la double flèche."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège : HF n'est pas un acide fort",
          "stepTheme": "Piège : HF n'est pas un acide fort",
          "stepBadge": "Piège : HF n'est pas un acide fort",
          "paragraphText": "HF (acide fluorhydrique) ressemble à HCl, HBr et HI.\nPourtant, sa réaction avec l'eau est limitée : c'est un acide FAIBLE.\nCertains documents le classent à tort parmi les acides forts : ne recopie pas cette erreur.",
          "konanTip": "Dans la famille HF, HCl, HBr, HI, seul HF est faible.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q5",
            "type": "mcq",
            "prompt": "Lequel de ces acides n'est PAS un acide fort ?",
            "options": [
              "HCl",
              "HF",
              "HBr",
              "HI"
            ],
            "correctAnswerIndex": 1,
            "explanation": "HF, l'acide fluorhydrique, réagit de façon limitée avec l'eau (pKa ≈ 3,2) : c'est un acide faible. HCl, HBr et HI réagissent totalement avec l'eau."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Un diacide fort : H₂SO₄",
          "stepTheme": "Un diacide fort : H₂SO₄",
          "stepBadge": "Un diacide fort : H₂SO₄",
          "paragraphText": "• Diacide fort : un acide fort capable de céder deux protons H⁺.\nExemple au programme : H₂SO₄, l'acide sulfurique.\nHCl, HNO₃, HBr et HI ne cèdent qu'un proton : ce sont des monoacides forts.",
          "konanTip": "Mono = un proton cédé ; di = deux protons cédés.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q6",
            "type": "mcq",
            "prompt": "Comment classe-t-on l'acide sulfurique H₂SO₄ ?",
            "options": [
              "Diacide fort",
              "Monoacide fort",
              "Acide faible",
              "Base forte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'acide sulfurique H₂SO₄ peut céder deux protons H⁺ : c'est le diacide fort du programme. Ce n'est ni un monoacide, ni un acide faible, ni une base."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Inventaire des espèces en solution",
          "stepTheme": "Inventaire des espèces en solution",
          "stepBadge": "Inventaire des espèces en solution",
          "paragraphText": "Pour une solution d'acide fort HA, on liste :\n• les ions formés : H₃O⁺ et A⁻ ;\n• les ions OH⁻, très minoritaires, dus à l'eau ;\n• le solvant H₂O.\nLa molécule HA n'apparaît pas : elle a totalement réagi.",
          "konanTip": "Dans une solution acide, n'oublie jamais OH⁻ : il est minoritaire, mais il existe.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q7",
            "type": "mcq",
            "prompt": "Quel est l'inventaire complet et correct des espèces présentes dans une solution aqueuse d'acide bromhydrique HBr ?",
            "options": [
              "H₃O⁺ ; Br⁻ ; HBr ; H₂O",
              "H₃O⁺ ; Br⁻ ; H₂O",
              "H₃O⁺ ; Br⁻ ; OH⁻ ; H₂O",
              "H₃O⁺ ; Br₂ ; OH⁻ ; H₂O"
            ],
            "correctAnswerIndex": 2,
            "explanation": "HBr est un acide fort : il a totalement réagi, il ne reste donc aucune molécule HBr. On trouve H₃O⁺, l'ion bromure Br⁻, les ions OH⁻ (très minoritaires) et l'eau. Br₂ (le dibrome) n'est pas formé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la définition correcte d'un acide fort ?",
          "options": [
            "Un acide très concentré",
            "Un acide qui réagit totalement avec l'eau",
            "Un acide dont le pH vaut toujours 1",
            "Un acide qui réagit partiellement avec l'eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un acide HA est fort si sa réaction avec l'eau est totale. La force d'un acide ne dépend ni de sa concentration ni d'une valeur fixe du pH ; une réaction partielle correspond à un acide faible."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q2",
          "type": "mcq",
          "prompt": "Parmi ces propositions, laquelle ne caractérise PAS la réaction d'ionisation d'un acide fort dans l'eau ?",
          "options": [
            "Exothermique",
            "Rapide",
            "Totale",
            "Limitée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La réaction d'un acide fort avec l'eau est exothermique, rapide et totale. Une réaction limitée caractérise un acide faible."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q3",
          "type": "mcq",
          "prompt": "Quelle est la formule de l'acide nitrique ?",
          "options": [
            "HNO₃",
            "HNO₂",
            "NH₃",
            "HCl"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'acide nitrique a pour formule HNO₃. HNO₂ est l'acide nitreux (un acide faible), NH₃ est l'ammoniac (une base) et HCl est l'acide chlorhydrique."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q4",
          "type": "mcq",
          "prompt": "Quelle est l'équation-bilan de la réaction de l'acide nitrique avec l'eau ?",
          "options": [
            "HNO₃ + H₂O → H₃O⁺ + NO₃²⁻",
            "HNO₃ + H₂O → H₂NO₃⁺ + OH⁻",
            "HNO₃ + H₂O → H₃O⁺ + NO₃⁻",
            "HNO₃ + H₂O ⇌ H₃O⁺ + NO₃⁻"
          ],
          "correctAnswerIndex": 2,
          "explanation": "HNO₃ cède un proton à l'eau : il se forme H₃O⁺ et l'ion nitrate NO₃⁻ (une seule charge négative). La réaction est totale, d'où la flèche simple et non la double flèche."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q5",
          "type": "mcq",
          "prompt": "Lequel de ces acides n'est PAS un acide fort ?",
          "options": [
            "HCl",
            "HF",
            "HBr",
            "HI"
          ],
          "correctAnswerIndex": 1,
          "explanation": "HF, l'acide fluorhydrique, réagit de façon limitée avec l'eau (pKa ≈ 3,2) : c'est un acide faible. HCl, HBr et HI réagissent totalement avec l'eau."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q6",
          "type": "mcq",
          "prompt": "Comment classe-t-on l'acide sulfurique H₂SO₄ ?",
          "options": [
            "Diacide fort",
            "Monoacide fort",
            "Acide faible",
            "Base forte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'acide sulfurique H₂SO₄ peut céder deux protons H⁺ : c'est le diacide fort du programme. Ce n'est ni un monoacide, ni un acide faible, ni une base."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p02_q7",
          "type": "mcq",
          "prompt": "Quel est l'inventaire complet et correct des espèces présentes dans une solution aqueuse d'acide bromhydrique HBr ?",
          "options": [
            "H₃O⁺ ; Br⁻ ; HBr ; H₂O",
            "H₃O⁺ ; Br⁻ ; H₂O",
            "H₃O⁺ ; Br⁻ ; OH⁻ ; H₂O",
            "H₃O⁺ ; Br₂ ; OH⁻ ; H₂O"
          ],
          "correctAnswerIndex": 2,
          "explanation": "HBr est un acide fort : il a totalement réagi, il ne reste donc aucune molécule HBr. On trouve H₃O⁺, l'ion bromure Br⁻, les ions OH⁻ (très minoritaires) et l'eau. Br₂ (le dibrome) n'est pas formé."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03",
      "order": 3,
      "title": "pH d'une solution de monoacide fort",
      "summary": "On relie le pH d'un monoacide fort à sa concentration, puis on calcule les concentrations de toutes les espèces de la solution.",
      "conceptExplanation": "Pour un monoacide fort de concentration $C_a$, à 25 °C : $pH = -\\log C_a$, soit $C_a = 10^{-pH}$.\nCette relation n'est valable que si $10^{-6} \\leq C_a \\leq 10^{-2}$ mol·L⁻¹.\nPour montrer qu'un acide est fort, on compare le pH mesuré à $-\\log C$ : s'ils sont égaux, l'acide est fort.\nOn calcule [OH⁻] avec le produit ionique : $[OH^-] = \\frac{K_e}{[H_3O^+]}$.\nL'électroneutralité donne la concentration de l'anion : [A⁻] ≈ [H₃O⁺] = $C_a$.",
      "keyRule": "Pour un monoacide fort, [H₃O⁺] = $C_a$, donc $pH = -\\log C_a$, à condition que $10^{-6} \\leq C_a \\leq 10^{-2}$ mol·L⁻¹.",
      "formulas": [
        {
          "name": "pH d'un monoacide fort",
          "formula": "\\mathrm{pH} = -\\log C_a \\iff C_a = 10^{-\\mathrm{pH}}",
          "note": "Valable à 25 °C pour 10⁻⁶ ≤ Cₐ ≤ 10⁻² mol·L⁻¹."
        },
        {
          "name": "Produit ionique de l'eau",
          "formula": "[\\mathrm{OH^-}] = \\frac{K_e}{[\\mathrm{H_3O^+}]} \\quad \\text{avec} \\quad K_e = 10^{-14}",
          "note": "À 25 °C."
        },
        {
          "name": "Électroneutralité (cas de HBr)",
          "formula": "[\\mathrm{H_3O^+}] = [\\mathrm{OH^-}] + [\\mathrm{Br^-}]",
          "note": "Comme [OH⁻] est négligeable, [Br⁻] ≈ [H₃O⁺]."
        }
      ],
      "workedExample": {
        "title": "Exercice 1 : la solution de bromure d'hydrogène",
        "statement": "Une solution de bromure d'hydrogène HBr de concentration $C = 10^{-2}$ mol·L⁻¹ a un pH = 2 à 25 °C. On donne $K_e = 10^{-14}$. Montre que HBr est un acide fort, puis calcule les concentrations des espèces chimiques présentes.",
        "methodSteps": [
          "On calcule $-\\log C = -\\log(10^{-2}) = 2$. C'est égal au pH mesuré : $pH = -\\log C$, donc HBr est un acide fort.",
          "Équation-bilan : HBr + H₂O → H₃O⁺ + Br⁻. Espèces présentes : H₃O⁺, Br⁻, OH⁻ et H₂O.",
          "[H₃O⁺] = $10^{-pH} = 10^{-2}$ mol·L⁻¹.",
          "[OH⁻] = $\\frac{K_e}{[H_3O^+]} = \\frac{10^{-14}}{10^{-2}} = 10^{-12}$ mol·L⁻¹.",
          "Électroneutralité : [H₃O⁺] = [OH⁻] + [Br⁻]. Or [OH⁻] est très petite devant [H₃O⁺], donc [Br⁻] ≈ [H₃O⁺] = $10^{-2}$ mol·L⁻¹."
        ],
        "conclusion": "HBr est un acide fort. Dans la solution : [H₃O⁺] = [Br⁻] = $10^{-2}$ mol·L⁻¹ et [OH⁻] = $10^{-12}$ mol·L⁻¹."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le pH d'un monoacide fort",
          "stepTheme": "Le pH d'un monoacide fort",
          "stepBadge": "Le pH d'un monoacide fort",
          "paragraphText": "Un monoacide fort réagit totalement avec l'eau : chaque molécule donne un ion H₃O⁺.\nDonc [H₃O⁺] = $C_a$, la concentration de l'acide.\n• Relation à retenir : $pH = -\\log C_a$, à 25 °C.",
          "formula": {
            "name": "pH d'un monoacide fort",
            "formula": "\\mathrm{pH} = -\\log C_a",
            "note": "Cₐ en mol·L⁻¹."
          },
          "konanTip": "$C_a = 10^{-n}$ donne directement pH = n.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q1",
            "type": "mcq",
            "prompt": "Quel est le pH d'une solution d'acide chlorhydrique de concentration $C_a = 10^{-3}$ mol·L⁻¹, à 25 °C ?",
            "options": [
              "pH = -3",
              "pH = 3",
              "pH = 11",
              "pH = 0,001"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'acide chlorhydrique est un acide fort : $pH = -\\log C_a = -\\log(10^{-3}) = 3$. Le pH 11 serait celui d'une base, et 0,001 est la concentration, pas le pH."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Retrouver la concentration à partir du pH",
          "stepTheme": "Retrouver la concentration à partir du pH",
          "stepBadge": "Retrouver la concentration à partir du pH",
          "paragraphText": "On inverse la relation : $C_a = 10^{-pH}$.\n• Étape 1 : on écrit $C_a = 10^{-pH}$ avec la valeur du pH.\n• Étape 2 : on calcule à la calculatrice avec la touche $10^x$.\nN'oublie pas le signe moins dans l'exposant.",
          "formula": {
            "name": "Concentration d'un monoacide fort",
            "formula": "C_a = 10^{-\\mathrm{pH}}",
            "note": "Résultat en mol·L⁻¹."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q2",
            "type": "mcq",
            "prompt": "Une solution d'acide nitrique HNO₃ a un pH = 2,5 à 25 °C. Que vaut sa concentration $C_a$ ?",
            "options": [
              "$C_a = 10^{2,5} \\approx 316$ mol·L⁻¹",
              "$C_a = 2,5 \\times 10^{-3}$ mol·L⁻¹",
              "$C_a = 3,16 \\times 10^{-3}$ mol·L⁻¹",
              "$C_a = 3,16 \\times 10^{-12}$ mol·L⁻¹"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'acide nitrique est un acide fort : $C_a = 10^{-pH} = 10^{-2,5} \\approx 3,16 \\times 10^{-3}$ mol·L⁻¹. Oublier le signe moins donne 316, ce qui est absurde."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Attention au domaine de validité",
          "stepTheme": "Attention au domaine de validité",
          "stepBadge": "Attention au domaine de validité",
          "paragraphText": "La relation $pH = -\\log C_a$ n'est valable que si $10^{-6} \\leq C_a \\leq 10^{-2}$ mol·L⁻¹.\nPiège : pour $C_a = 10^{-8}$ mol·L⁻¹, la formule donnerait pH = 8, donc une solution basique.\nC'est impossible : une solution d'acide ne peut pas être basique.",
          "konanTip": "Avant d'appliquer la formule, vérifie toujours que $C_a$ est entre $10^{-6}$ et $10^{-2}$ mol·L⁻¹.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q3",
            "type": "mcq",
            "prompt": "Pour laquelle de ces solutions d'acide chlorhydrique peut-on utiliser la relation $pH = -\\log C_a$ ?",
            "options": [
              "$C_a = 5 \\times 10^{-4}$ mol·L⁻¹",
              "$C_a = 10^{-8}$ mol·L⁻¹",
              "$C_a = 1$ mol·L⁻¹",
              "$C_a = 5 \\times 10^{-1}$ mol·L⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule $5 \\times 10^{-4}$ mol·L⁻¹ est comprise entre $10^{-6}$ et $10^{-2}$ mol·L⁻¹. Les trois autres valeurs sont soit trop petites, soit trop grandes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Montrer qu'un acide est fort",
          "stepTheme": "Montrer qu'un acide est fort",
          "stepBadge": "Montrer qu'un acide est fort",
          "paragraphText": "• Étape 1 : on calcule $-\\log C$ avec la concentration de l'acide.\n• Étape 2 : on compare le résultat au pH mesuré.\n• Étape 3 : si $pH = -\\log C$, l'acide est fort.\nExemple : HBr à $C = 10^{-2}$ mol·L⁻¹ a un pH = 2.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q4",
            "type": "mcq",
            "prompt": "Une solution de bromure d'hydrogène HBr de concentration $C = 10^{-2}$ mol·L⁻¹ a un pH = 2 à 25 °C. Quelle conclusion faut-il tirer ?",
            "options": [
              "HBr est un acide faible, car son pH est inférieur à 7",
              "On ne peut pas conclure sans connaître le volume de la solution",
              "HBr est une base forte",
              "HBr est un acide fort, car $pH = -\\log C = 2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$-\\log C = -\\log(10^{-2}) = 2$, ce qui est égal au pH mesuré. Le pH et la concentration vérifient $pH = -\\log C$ : HBr est un acide fort. Le volume n'intervient pas dans le pH."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer [OH⁻] avec le produit ionique",
          "stepTheme": "Calculer [OH⁻] avec le produit ionique",
          "stepBadge": "Calculer [OH⁻] avec le produit ionique",
          "paragraphText": "Même dans une solution acide, il reste un tout petit peu d'ions OH⁻.\n• Étape 1 : [H₃O⁺] = $10^{-pH}$.\n• Étape 2 : [OH⁻] = $\\frac{K_e}{[H_3O^+]}$, avec $K_e = 10^{-14}$ à 25 °C.",
          "formula": {
            "name": "Produit ionique de l'eau",
            "formula": "[\\mathrm{OH^-}] = \\frac{K_e}{[\\mathrm{H_3O^+}]}",
            "note": "Kₑ = 10⁻¹⁴ à 25 °C."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q5",
            "type": "mcq",
            "prompt": "Dans une solution de HBr de pH = 2 à 25 °C, que vaut la concentration des ions hydroxyde OH⁻ ?",
            "options": [
              "[OH⁻] = $10^{-2}$ mol·L⁻¹",
              "[OH⁻] = $10^{-12}$ mol·L⁻¹",
              "[OH⁻] = $10^{12}$ mol·L⁻¹",
              "[OH⁻] = $10^{-14}$ mol·L⁻¹"
            ],
            "correctAnswerIndex": 1,
            "explanation": "[H₃O⁺] = $10^{-2}$ mol·L⁻¹, donc [OH⁻] = $\\frac{10^{-14}}{10^{-2}} = 10^{-12}$ mol·L⁻¹. On divise les puissances de 10 : on soustrait les exposants, $-14 - (-2) = -12$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'électroneutralité donne [Br⁻]",
          "stepTheme": "L'électroneutralité donne [Br⁻]",
          "stepBadge": "L'électroneutralité donne [Br⁻]",
          "paragraphText": "• Électroneutralité : une solution contient autant de charges + que de charges -.\nPour HBr : [H₃O⁺] = [OH⁻] + [Br⁻].\nOr [OH⁻] = $10^{-12}$ mol·L⁻¹ est très petite devant [H₃O⁺] = $10^{-2}$ mol·L⁻¹.\nDonc [Br⁻] ≈ [H₃O⁺] = C.",
          "formula": {
            "name": "Électroneutralité",
            "formula": "[\\mathrm{H_3O^+}] = [\\mathrm{OH^-}] + [\\mathrm{Br^-}]",
            "note": "Ions positifs à gauche, ions négatifs à droite."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q6",
            "type": "mcq",
            "prompt": "Dans une solution de HBr de concentration $C = 10^{-2}$ mol·L⁻¹, que vaut la concentration des ions bromure Br⁻ ?",
            "options": [
              "[Br⁻] = $10^{-2}$ mol·L⁻¹",
              "[Br⁻] = $10^{-12}$ mol·L⁻¹",
              "[Br⁻] = 0 mol·L⁻¹",
              "[Br⁻] = $2 \\times 10^{-2}$ mol·L⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "[Br⁻] = [H₃O⁺] - [OH⁻] = $10^{-2} - 10^{-12} \\approx 10^{-2}$ mol·L⁻¹. Chaque molécule de HBr donne un seul ion Br⁻ : la réaction totale n'en fait ni disparaître ni doubler."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Exemple : l'acide iodhydrique",
          "stepTheme": "Exemple : l'acide iodhydrique",
          "stepBadge": "Exemple : l'acide iodhydrique",
          "paragraphText": "Au labo d'un lycée d'Abidjan, Aya mesure le pH d'une solution d'acide iodhydrique HI : pH = 3,7.\nHI est un acide fort : $C = 10^{-3,7} \\approx 2,0 \\times 10^{-4}$ mol·L⁻¹.\nCette valeur est bien entre $10^{-6}$ et $10^{-2}$ : la formule s'applique.\nComme pour HBr : [I⁻] ≈ [H₃O⁺] = C.",
          "konanTip": "Pour tout monoacide fort HA : [A⁻] = [H₃O⁺] = $C_a$.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q7",
            "type": "mcq",
            "prompt": "Dans la solution d'acide iodhydrique de pH = 3,7, que vaut la concentration des ions iodure I⁻ ?",
            "options": [
              "[I⁻] = $3,7 \\times 10^{-4}$ mol·L⁻¹",
              "[I⁻] = $5,0 \\times 10^{-11}$ mol·L⁻¹",
              "[I⁻] = $4,0 \\times 10^{-4}$ mol·L⁻¹",
              "[I⁻] = $2,0 \\times 10^{-4}$ mol·L⁻¹"
            ],
            "correctAnswerIndex": 3,
            "explanation": "[H₃O⁺] = $10^{-3,7} \\approx 2,0 \\times 10^{-4}$ mol·L⁻¹ et, par électroneutralité, [I⁻] ≈ [H₃O⁺]. La valeur $5,0 \\times 10^{-11}$ mol·L⁻¹ est celle de [OH⁻], pas celle de [I⁻]."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q1",
          "type": "mcq",
          "prompt": "Quel est le pH d'une solution d'acide chlorhydrique de concentration $C_a = 10^{-3}$ mol·L⁻¹, à 25 °C ?",
          "options": [
            "pH = -3",
            "pH = 3",
            "pH = 11",
            "pH = 0,001"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'acide chlorhydrique est un acide fort : $pH = -\\log C_a = -\\log(10^{-3}) = 3$. Le pH 11 serait celui d'une base, et 0,001 est la concentration, pas le pH."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q2",
          "type": "mcq",
          "prompt": "Une solution d'acide nitrique HNO₃ a un pH = 2,5 à 25 °C. Que vaut sa concentration $C_a$ ?",
          "options": [
            "$C_a = 10^{2,5} \\approx 316$ mol·L⁻¹",
            "$C_a = 2,5 \\times 10^{-3}$ mol·L⁻¹",
            "$C_a = 3,16 \\times 10^{-3}$ mol·L⁻¹",
            "$C_a = 3,16 \\times 10^{-12}$ mol·L⁻¹"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'acide nitrique est un acide fort : $C_a = 10^{-pH} = 10^{-2,5} \\approx 3,16 \\times 10^{-3}$ mol·L⁻¹. Oublier le signe moins donne 316, ce qui est absurde."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q3",
          "type": "mcq",
          "prompt": "Pour laquelle de ces solutions d'acide chlorhydrique peut-on utiliser la relation $pH = -\\log C_a$ ?",
          "options": [
            "$C_a = 5 \\times 10^{-4}$ mol·L⁻¹",
            "$C_a = 10^{-8}$ mol·L⁻¹",
            "$C_a = 1$ mol·L⁻¹",
            "$C_a = 5 \\times 10^{-1}$ mol·L⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule $5 \\times 10^{-4}$ mol·L⁻¹ est comprise entre $10^{-6}$ et $10^{-2}$ mol·L⁻¹. Les trois autres valeurs sont soit trop petites, soit trop grandes."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q4",
          "type": "mcq",
          "prompt": "Une solution de bromure d'hydrogène HBr de concentration $C = 10^{-2}$ mol·L⁻¹ a un pH = 2 à 25 °C. Quelle conclusion faut-il tirer ?",
          "options": [
            "HBr est un acide faible, car son pH est inférieur à 7",
            "On ne peut pas conclure sans connaître le volume de la solution",
            "HBr est une base forte",
            "HBr est un acide fort, car $pH = -\\log C = 2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$-\\log C = -\\log(10^{-2}) = 2$, ce qui est égal au pH mesuré. Le pH et la concentration vérifient $pH = -\\log C$ : HBr est un acide fort. Le volume n'intervient pas dans le pH."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q5",
          "type": "mcq",
          "prompt": "Dans une solution de HBr de pH = 2 à 25 °C, que vaut la concentration des ions hydroxyde OH⁻ ?",
          "options": [
            "[OH⁻] = $10^{-2}$ mol·L⁻¹",
            "[OH⁻] = $10^{-12}$ mol·L⁻¹",
            "[OH⁻] = $10^{12}$ mol·L⁻¹",
            "[OH⁻] = $10^{-14}$ mol·L⁻¹"
          ],
          "correctAnswerIndex": 1,
          "explanation": "[H₃O⁺] = $10^{-2}$ mol·L⁻¹, donc [OH⁻] = $\\frac{10^{-14}}{10^{-2}} = 10^{-12}$ mol·L⁻¹. On divise les puissances de 10 : on soustrait les exposants, $-14 - (-2) = -12$."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q6",
          "type": "mcq",
          "prompt": "Dans une solution de HBr de concentration $C = 10^{-2}$ mol·L⁻¹, que vaut la concentration des ions bromure Br⁻ ?",
          "options": [
            "[Br⁻] = $10^{-2}$ mol·L⁻¹",
            "[Br⁻] = $10^{-12}$ mol·L⁻¹",
            "[Br⁻] = 0 mol·L⁻¹",
            "[Br⁻] = $2 \\times 10^{-2}$ mol·L⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "[Br⁻] = [H₃O⁺] - [OH⁻] = $10^{-2} - 10^{-12} \\approx 10^{-2}$ mol·L⁻¹. Chaque molécule de HBr donne un seul ion Br⁻ : la réaction totale n'en fait ni disparaître ni doubler."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p03_q7",
          "type": "mcq",
          "prompt": "Dans la solution d'acide iodhydrique de pH = 3,7, que vaut la concentration des ions iodure I⁻ ?",
          "options": [
            "[I⁻] = $3,7 \\times 10^{-4}$ mol·L⁻¹",
            "[I⁻] = $5,0 \\times 10^{-11}$ mol·L⁻¹",
            "[I⁻] = $4,0 \\times 10^{-4}$ mol·L⁻¹",
            "[I⁻] = $2,0 \\times 10^{-4}$ mol·L⁻¹"
          ],
          "correctAnswerIndex": 3,
          "explanation": "[H₃O⁺] = $10^{-3,7} \\approx 2,0 \\times 10^{-4}$ mol·L⁻¹ et, par électroneutralité, [I⁻] ≈ [H₃O⁺]. La valeur $5,0 \\times 10^{-11}$ mol·L⁻¹ est celle de [OH⁻], pas celle de [I⁻]."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04",
      "order": 4,
      "title": "Base forte : l'hydroxyde de sodium et ses cousines",
      "summary": "On découvre la soude NaOH, la définition d'une base forte et les principales bases fortes à connaître.",
      "conceptExplanation": "L'hydroxyde de sodium NaOH (la soude) est un solide blanc, très soluble dans l'eau.\nSa dissolution est exothermique : la solution s'échauffe.\nDans l'eau, NaOH se dissocie totalement : NaOH → Na⁺ + OH⁻.\nUne base est forte si sa réaction avec l'eau est totale : BOH → B⁺ + OH⁻ ou B⁻ + H₂O → BH + OH⁻.\nMonobases fortes : NaOH, KOH, l'ion éthanolate C₂H₅O⁻. Dibase forte : Ca(OH)₂.",
      "keyRule": "Une base forte réagit totalement avec l'eau et libère des ions hydroxyde OH⁻ : on l'écrit avec une flèche simple.",
      "formulas": [
        {
          "name": "Base forte de type BOH",
          "formula": "\\mathrm{BOH} \\rightarrow \\mathrm{B^{+}} + \\mathrm{OH^{-}}",
          "note": "Exemples : NaOH, KOH (réaction totale dans l'eau)."
        },
        {
          "name": "Base forte de type B⁻",
          "formula": "\\mathrm{B^{-}} + \\mathrm{H_{2}O} \\rightarrow \\mathrm{BH} + \\mathrm{OH^{-}}",
          "note": "Exemple : l'ion éthanolate C₂H₅O⁻ donne C₂H₅OH et OH⁻."
        }
      ],
      "workedExample": {
        "title": "Dissolution de l'hydroxyde de potassium",
        "statement": "On dissout des pastilles d'hydroxyde de potassium KOH dans de l'eau. La solution obtenue conduit le courant et s'échauffe. KOH est une base forte. Écris l'équation de la réaction et cite les ions présents.",
        "methodSteps": [
          "KOH est de type BOH, avec B = K.",
          "La base est forte : la réaction est totale, on utilise une flèche simple.",
          "Équation : KOH → K⁺ + OH⁻ (dans l'eau).",
          "Les ions présents sont K⁺ et OH⁻ (et, en quantité négligeable, H₃O⁺ issu de l'eau)."
        ],
        "conclusion": "La solution de potasse contient des ions K⁺ et OH⁻ : ce sont les ions OH⁻ qui la rendent basique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La soude, NaOH",
          "stepTheme": "La soude, NaOH",
          "stepBadge": "La soude, NaOH",
          "paragraphText": "• Hydroxyde de sodium : NaOH, aussi appelé soude.\nC'est un solide blanc, vendu en pastilles ou en paillettes.\nIl est très soluble dans l'eau.\n• Dissolution exothermique : la solution s'échauffe quand on dissout NaOH.",
          "konanTip": "La soude est corrosive : on la manipule avec des gants et des lunettes.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q1",
            "type": "mcq",
            "prompt": "Quel est l'aspect de l'hydroxyde de sodium NaOH pur ?",
            "options": [
              "Un gaz incolore",
              "Un liquide jaune",
              "Un solide blanc",
              "Un solide bleu"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'hydroxyde de sodium pur est un solide blanc, très soluble dans l'eau. Sa dissolution dégage de la chaleur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une dissociation totale",
          "stepTheme": "Une dissociation totale",
          "stepBadge": "Une dissociation totale",
          "paragraphText": "La solution de soude conduit le courant électrique.\nElle contient donc des ions : Na⁺ et OH⁻.\nNaOH se dissocie totalement dans l'eau :\nNaOH → Na⁺ + OH⁻.",
          "formula": {
            "name": "Dissociation de la soude",
            "formula": "\\mathrm{NaOH} \\rightarrow \\mathrm{Na^{+}} + \\mathrm{OH^{-}}",
            "note": "Réaction totale dans l'eau : il ne reste plus de NaOH."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q2",
            "type": "mcq",
            "prompt": "Quels ions trouve-t-on majoritairement dans une solution de soude ?",
            "options": [
              "Na⁺ et OH⁻",
              "Na⁺ et H₃O⁺",
              "Na⁻ et OH⁺",
              "Na et O²⁻"
            ],
            "correctAnswerIndex": 0,
            "explanation": "NaOH se dissocie totalement : NaOH → Na⁺ + OH⁻. Le sodium donne l'ion positif Na⁺ et le groupe hydroxyde donne l'ion négatif OH⁻."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Définition d'une base forte",
          "stepTheme": "Définition d'une base forte",
          "stepBadge": "Définition d'une base forte",
          "paragraphText": "• Base forte : base qui réagit totalement avec l'eau.\nPour une base BOH : BOH → B⁺ + OH⁻.\nLa réaction est totale : on écrit une flèche simple.\nLa double flèche est réservée aux réactions limitées.",
          "konanTip": "Base forte = flèche simple. Au BAC, une double flèche ici coûte des points.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q3",
            "type": "mcq",
            "prompt": "KOH est une base forte. Quelle équation traduit sa réaction dans l'eau ?",
            "options": [
              "KOH ⇄ K⁺ + OH⁻",
              "KOH → K⁻ + OH⁺",
              "KOH + H₂O → KH + O₂",
              "KOH → K⁺ + OH⁻"
            ],
            "correctAnswerIndex": 3,
            "explanation": "KOH est de type BOH : il libère K⁺ et OH⁻. La réaction étant totale, on utilise une flèche simple, pas une double flèche."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Base forte de type B⁻",
          "stepTheme": "Base forte de type B⁻",
          "stepBadge": "Base forte de type B⁻",
          "paragraphText": "Certaines bases fortes sont des anions B⁻.\nElles arrachent un proton à l'eau : B⁻ + H₂O → BH + OH⁻.\n• Ion éthanolate : C₂H₅O⁻ + H₂O → C₂H₅OH + OH⁻.\nOn obtient de l'éthanol et des ions OH⁻.",
          "formula": {
            "name": "Ion éthanolate dans l'eau",
            "formula": "\\mathrm{C_{2}H_{5}O^{-}} + \\mathrm{H_{2}O} \\rightarrow \\mathrm{C_{2}H_{5}OH} + \\mathrm{OH^{-}}",
            "note": "Réaction totale : l'ion éthanolate est une base forte."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q4",
            "type": "mcq",
            "prompt": "Que donne la réaction totale de l'ion éthanolate C₂H₅O⁻ avec l'eau ?",
            "options": [
              "C₂H₅O⁺ + H₂O",
              "C₂H₅OH + OH⁻",
              "C₂H₅OH + H₃O⁺",
              "C₂H₄ + OH⁻"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ion éthanolate capte un proton H⁺ de l'eau : il devient l'éthanol C₂H₅OH, et l'eau devient l'ion OH⁻. C₂H₅O⁻ + H₂O → C₂H₅OH + OH⁻."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Monobases et dibases fortes",
          "stepTheme": "Monobases et dibases fortes",
          "stepBadge": "Monobases et dibases fortes",
          "paragraphText": "• Monobase forte : libère 1 ion OH⁻ par entité. Exemples : NaOH, KOH, C₂H₅O⁻.\n• Dibase forte : libère 2 ions OH⁻ par entité.\nExemple : Ca(OH)₂ → Ca²⁺ + 2 OH⁻.",
          "formula": {
            "name": "Dissociation de l'hydroxyde de calcium",
            "formula": "\\mathrm{Ca(OH)_{2}} \\rightarrow \\mathrm{Ca^{2+}} + 2\\,\\mathrm{OH^{-}}",
            "note": "Une entité Ca(OH)₂ libère deux ions OH⁻."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces espèces est une dibase forte ?",
            "options": [
              "KOH",
              "NaOH",
              "Ca(OH)₂",
              "C₂H₅O⁻"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ca(OH)₂ → Ca²⁺ + 2 OH⁻ : une entité libère deux ions OH⁻, c'est une dibase. KOH, NaOH et C₂H₅O⁻ ne libèrent qu'un seul OH⁻ : ce sont des monobases."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La famille des bases fortes",
          "stepTheme": "La famille des bases fortes",
          "stepBadge": "La famille des bases fortes",
          "paragraphText": "Les hydroxydes alcalins et alcalino-terreux sont des bases fortes.\nExemples : NaOH, KOH, CsOH, Ca(OH)₂, Ba(OH)₂.\nLeurs oxydes aussi : Na₂O, K₂O, CaO.\nExemple : CaO + H₂O → Ca²⁺ + 2 OH⁻.",
          "konanTip": "L'ammoniac NH₃ est une base, mais une base faible : il n'est pas dans cette liste.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q6",
            "type": "mcq",
            "prompt": "Parmi ces espèces, laquelle est une base forte ?",
            "options": [
              "L'ammoniac NH₃",
              "Le chlorure d'hydrogène HCl",
              "L'éthanol C₂H₅OH",
              "L'hydroxyde de césium CsOH"
            ],
            "correctAnswerIndex": 3,
            "explanation": "CsOH est un hydroxyde alcalin : il se dissocie totalement, CsOH → Cs⁺ + OH⁻. NH₃ est une base faible, HCl est un acide fort et l'éthanol n'est pas une base forte."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "OH⁻ ou H₃O⁺ ?",
          "stepTheme": "OH⁻ ou H₃O⁺ ?",
          "stepBadge": "OH⁻ ou H₃O⁺ ?",
          "paragraphText": "Erreur classique : confondre les deux ions de l'eau.\n• OH⁻ (ion hydroxyde) : il est responsable du caractère basique.\n• H₃O⁺ (ion hydronium) : il est responsable du caractère acide.\nUne base forte libère des ions OH⁻, jamais des ions H₃O⁺.",
          "konanTip": "Base → OH⁻ ; Acide → H₃O⁺. Na⁺ et K⁺ sont seulement des ions spectateurs.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q7",
            "type": "mcq",
            "prompt": "Quel ion rend la lessive de soude basique ?",
            "options": [
              "H₃O⁺",
              "OH⁻",
              "Na⁺",
              "H⁺"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La soude se dissocie en Na⁺ et OH⁻. C'est l'ion hydroxyde OH⁻ qui donne le caractère basique ; Na⁺ est spectateur, et H₃O⁺ (ou H⁺) caractérise les acides."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q1",
          "type": "mcq",
          "prompt": "Quel est l'aspect de l'hydroxyde de sodium NaOH pur ?",
          "options": [
            "Un gaz incolore",
            "Un liquide jaune",
            "Un solide blanc",
            "Un solide bleu"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'hydroxyde de sodium pur est un solide blanc, très soluble dans l'eau. Sa dissolution dégage de la chaleur."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q2",
          "type": "mcq",
          "prompt": "Quels ions trouve-t-on majoritairement dans une solution de soude ?",
          "options": [
            "Na⁺ et OH⁻",
            "Na⁺ et H₃O⁺",
            "Na⁻ et OH⁺",
            "Na et O²⁻"
          ],
          "correctAnswerIndex": 0,
          "explanation": "NaOH se dissocie totalement : NaOH → Na⁺ + OH⁻. Le sodium donne l'ion positif Na⁺ et le groupe hydroxyde donne l'ion négatif OH⁻."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q3",
          "type": "mcq",
          "prompt": "KOH est une base forte. Quelle équation traduit sa réaction dans l'eau ?",
          "options": [
            "KOH ⇄ K⁺ + OH⁻",
            "KOH → K⁻ + OH⁺",
            "KOH + H₂O → KH + O₂",
            "KOH → K⁺ + OH⁻"
          ],
          "correctAnswerIndex": 3,
          "explanation": "KOH est de type BOH : il libère K⁺ et OH⁻. La réaction étant totale, on utilise une flèche simple, pas une double flèche."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q4",
          "type": "mcq",
          "prompt": "Que donne la réaction totale de l'ion éthanolate C₂H₅O⁻ avec l'eau ?",
          "options": [
            "C₂H₅O⁺ + H₂O",
            "C₂H₅OH + OH⁻",
            "C₂H₅OH + H₃O⁺",
            "C₂H₄ + OH⁻"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ion éthanolate capte un proton H⁺ de l'eau : il devient l'éthanol C₂H₅OH, et l'eau devient l'ion OH⁻. C₂H₅O⁻ + H₂O → C₂H₅OH + OH⁻."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces espèces est une dibase forte ?",
          "options": [
            "KOH",
            "NaOH",
            "Ca(OH)₂",
            "C₂H₅O⁻"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ca(OH)₂ → Ca²⁺ + 2 OH⁻ : une entité libère deux ions OH⁻, c'est une dibase. KOH, NaOH et C₂H₅O⁻ ne libèrent qu'un seul OH⁻ : ce sont des monobases."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q6",
          "type": "mcq",
          "prompt": "Parmi ces espèces, laquelle est une base forte ?",
          "options": [
            "L'ammoniac NH₃",
            "Le chlorure d'hydrogène HCl",
            "L'éthanol C₂H₅OH",
            "L'hydroxyde de césium CsOH"
          ],
          "correctAnswerIndex": 3,
          "explanation": "CsOH est un hydroxyde alcalin : il se dissocie totalement, CsOH → Cs⁺ + OH⁻. NH₃ est une base faible, HCl est un acide fort et l'éthanol n'est pas une base forte."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p04_q7",
          "type": "mcq",
          "prompt": "Quel ion rend la lessive de soude basique ?",
          "options": [
            "H₃O⁺",
            "OH⁻",
            "Na⁺",
            "H⁺"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La soude se dissocie en Na⁺ et OH⁻. C'est l'ion hydroxyde OH⁻ qui donne le caractère basique ; Na⁺ est spectateur, et H₃O⁺ (ou H⁺) caractérise les acides."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05",
      "order": 5,
      "title": "pH d'une solution de monobase forte",
      "summary": "Calculer le pH d'une monobase forte, retrouver sa concentration et prouver qu'une base est forte.",
      "conceptExplanation": "• Formule : pour une monobase forte de concentration $C_b$, à 25 °C, $pH = 14 + \\log C_b$.\n• Réciproque : $C_b = 10^{pH-14}$ (et non $10^{14-pH}$).\n• Validité : $10^{-6} \\leq C_b \\leq 10^{-2}$ mol·L⁻¹.\n• Base forte : si $14 + \\log C_b$ est égal au pH mesuré, la base est forte.\n• Masse à dissoudre : $m = M \\cdot C \\cdot V$, avec V en litres.",
      "keyRule": "Pour une monobase forte à 25 °C, $pH = 14 + \\log C_b$, donc $C_b = 10^{pH-14}$.",
      "formulas": [
        {
          "name": "pH d'une monobase forte",
          "formula": "pH = 14 + \\log C_b",
          "note": "À 25 °C, pour $10^{-6} \\leq C_b \\leq 10^{-2}$ mol·L⁻¹."
        },
        {
          "name": "Concentration à partir du pH",
          "formula": "C_b = 10^{pH-14}",
          "note": "C_b en mol·L⁻¹."
        },
        {
          "name": "Masse de soluté à dissoudre",
          "formula": "m = M \\cdot C \\cdot V",
          "note": "M en g·mol⁻¹, C en mol·L⁻¹, V en L."
        }
      ],
      "workedExample": {
        "title": "Préparer une soude de pH = 11,5",
        "statement": "On veut préparer 100 mL d'une solution d'hydroxyde de sodium (NaOH) de pH = 11,5 à 25 °C. Quelle masse de NaOH faut-il dissoudre ? On donne $M(NaOH) = 40$ g·mol⁻¹.",
        "methodSteps": [
          "NaOH est une base forte : $C = 10^{pH-14} = 10^{11,5-14} = 10^{-2,5} = 3,16 \\times 10^{-3}$ mol·L⁻¹.",
          "On convertit le volume : $V = 100$ mL $= 0,100$ L.",
          "Quantité de matière : $n = C \\cdot V = 3,16 \\times 10^{-3} \\times 0,100 = 3,16 \\times 10^{-4}$ mol.",
          "Masse : $m = n \\cdot M = 3,16 \\times 10^{-4} \\times 40 = 1,26 \\times 10^{-2}$ g."
        ],
        "conclusion": "Il faut dissoudre $1,26 \\times 10^{-2}$ g de NaOH, soit 12,6 mg, pour obtenir 100 mL de solution."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule du pH d'une base forte",
          "stepTheme": "La formule du pH d'une base forte",
          "stepBadge": "La formule du pH d'une base forte",
          "paragraphText": "Une monobase forte libère un ion OH⁻ par entité dissoute.\nDonc [OH⁻] = $C_b$.\n• À 25 °C : $pH = 14 + \\log C_b$.\nLe pH d'une base est toujours supérieur à 7.",
          "formula": {
            "name": "pH d'une monobase forte",
            "formula": "pH = 14 + \\log C_b",
            "note": "Valable à 25 °C."
          },
          "konanTip": "Pour un acide fort on écrit $-\\log C_a$ ; pour une base forte, on écrit $14 + \\log C_b$.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q1",
            "type": "mcq",
            "prompt": "À 25 °C, quel est le pH d'une solution d'hydroxyde de sodium de concentration $C_b = 10^{-3}$ mol·L⁻¹ ?",
            "options": [
              "3",
              "11",
              "-11",
              "17"
            ],
            "correctAnswerIndex": 1,
            "explanation": "NaOH est une base forte : $pH = 14 + \\log(10^{-3}) = 14 - 3 = 11$. La valeur 3 serait le pH d'un acide fort de même concentration."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Retrouver C à partir du pH",
          "stepTheme": "Retrouver C à partir du pH",
          "stepBadge": "Retrouver C à partir du pH",
          "paragraphText": "On part de $pH = 14 + \\log C_b$, donc $\\log C_b = pH - 14$.\n• Réciproque : $C_b = 10^{pH-14}$.\nAttention : écrire $10^{14-pH}$ est une erreur classique.\nVérifie toujours : $C_b$ doit être inférieure à 1 mol·L⁻¹.",
          "formula": {
            "name": "Concentration d'une monobase forte",
            "formula": "C_b = 10^{pH-14}",
            "note": "L'exposant est négatif car pH < 14."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q2",
            "type": "mcq",
            "prompt": "Une solution de potasse (KOH, base forte) a un pH égal à 12 à 25 °C. Que vaut sa concentration $C_b$ ?",
            "options": [
              "$10^{2}$ mol·L⁻¹",
              "$10^{-12}$ mol·L⁻¹",
              "$10^{-14}$ mol·L⁻¹",
              "$10^{-2}$ mol·L⁻¹"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$C_b = 10^{pH-14} = 10^{12-14} = 10^{-2}$ mol·L⁻¹. La réponse $10^{2}$ vient de la formule fausse $10^{14-pH}$, et $10^{-12}$ mol·L⁻¹ est [H₃O⁺], pas $C_b$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Montrer qu'une base est forte",
          "stepTheme": "Montrer qu'une base est forte",
          "stepBadge": "Montrer qu'une base est forte",
          "paragraphText": "1. On calcule $14 + \\log C$ avec la concentration de l'énoncé.\n2. On compare au pH mesuré.\n3. S'ils sont égaux, la base est forte.\n• Exemple : KOH à $2 \\times 10^{-3}$ mol·L⁻¹, pH mesuré = 11,3.",
          "konanTip": "Utilise exactement la concentration donnée, sans l'arrondir à une puissance de 10.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q3",
            "type": "mcq",
            "prompt": "Une solution de KOH de concentration $C = 2 \\times 10^{-3}$ mol·L⁻¹ a un pH mesuré de 11,3. Quel calcul permet de montrer que KOH est une base forte ?",
            "options": [
              "$14 + \\log(2 \\times 10^{-3}) = 11,3$",
              "$14 + \\log(10^{-2}) = 12$",
              "$-\\log(2 \\times 10^{-3}) = 2,7$",
              "$14 - \\log(2 \\times 10^{-3}) = 16,7$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$14 + \\log(2 \\times 10^{-3}) = 14 - 2,70 = 11,3$, ce qui est égal au pH mesuré : KOH est une base forte. Il faut utiliser la concentration de l'énoncé, et non $10^{-2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une soude de pH = 11,5",
          "stepTheme": "Une soude de pH = 11,5",
          "stepBadge": "Une soude de pH = 11,5",
          "paragraphText": "Un laborantin d'un lycée d'Abidjan veut une soude de pH = 11,5.\nNaOH est une base forte : $C = 10^{pH-14}$.\n• Calcul : $C = 10^{11,5-14} = 10^{-2,5}$.\nÀ la calculatrice : $10^{-2,5} \\approx 3,16 \\times 10^{-3}$ mol·L⁻¹.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q4",
            "type": "mcq",
            "prompt": "Une solution d'hydroxyde de sodium a un pH de 11,5 à 25 °C. Quelle est sa concentration C ?",
            "options": [
              "$3,16 \\times 10^{-12}$ mol·L⁻¹",
              "$10^{2,5}$ mol·L⁻¹",
              "$3,16 \\times 10^{-3}$ mol·L⁻¹",
              "$11,5 \\times 10^{-3}$ mol·L⁻¹"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$C = 10^{11,5-14} = 10^{-2,5} = 3,16 \\times 10^{-3}$ mol·L⁻¹. La valeur $3,16 \\times 10^{-12}$ mol·L⁻¹ correspond à [H₃O⁺] $= 10^{-11,5}$, pas à C."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer la masse à dissoudre",
          "stepTheme": "Calculer la masse à dissoudre",
          "stepBadge": "Calculer la masse à dissoudre",
          "paragraphText": "1. Quantité de matière : $n = C \\cdot V$.\n2. Masse : $m = n \\cdot M$.\n• Formule directe : $m = M \\cdot C \\cdot V$.\nLe volume V doit être en litres : 100 mL = 0,100 L.",
          "formula": {
            "name": "Masse de soluté",
            "formula": "m = M \\cdot C \\cdot V",
            "note": "M(NaOH) = 40 g·mol⁻¹ ; V en L."
          },
          "konanTip": "Une erreur d'unité sur V décale le résultat d'un facteur 1000 ou 100 : vérifie toujours les litres.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q5",
            "type": "mcq",
            "prompt": "Quelle masse de NaOH ($M = 40$ g·mol⁻¹) faut-il dissoudre pour préparer 100 mL de solution à $3,16 \\times 10^{-3}$ mol·L⁻¹ ?",
            "options": [
              "1,26 g",
              "$1,26 \\times 10^{-2}$ g",
              "126 g",
              "0,126 g"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$m = M \\cdot C \\cdot V = 40 \\times 3,16 \\times 10^{-3} \\times 0,100 = 1,26 \\times 10^{-2}$ g, soit 12,6 mg. Le résultat 1,26 g vient d'un volume mal converti."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le domaine de validité",
          "stepTheme": "Le domaine de validité",
          "stepBadge": "Le domaine de validité",
          "paragraphText": "La formule n'est valable que si $10^{-6} \\leq C_b \\leq 10^{-2}$ mol·L⁻¹.\nPour une soude très diluée à $10^{-8}$ mol·L⁻¹, elle donne pH = 6.\n• Absurde : une base ne peut pas rendre l'eau acide.\nIci, les ions OH⁻ de l'eau elle-même ne sont plus négligeables.",
          "konanTip": "Avant d'appliquer une formule de pH, vérifie que la concentration est dans le domaine de validité.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q6",
            "type": "mcq",
            "prompt": "Pour une soude de concentration $10^{-8}$ mol·L⁻¹, un élève écrit $pH = 14 + \\log(10^{-8}) = 6$. Pourquoi ce résultat est-il impossible ?",
            "options": [
              "Le calcul est juste, le pH vaut bien 6",
              "Il fallait trouver pH = 8",
              "$K_e$ change pour les solutions diluées",
              "Une base ne peut pas donner une solution acide"
            ],
            "correctAnswerIndex": 3,
            "explanation": "pH = 6 signifie une solution acide, ce qui est impossible en ajoutant une base à l'eau. La concentration $10^{-8}$ mol·L⁻¹ est hors du domaine de validité, donc la formule ne s'applique pas."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Ions H₃O⁺ dans une base forte",
          "stepTheme": "Ions H₃O⁺ dans une base forte",
          "stepBadge": "Ions H₃O⁺ dans une base forte",
          "paragraphText": "Même dans une base, il reste un peu d'ions H₃O⁺.\n• Produit ionique de l'eau à 25 °C : [H₃O⁺] × [OH⁻] = $10^{-14}$.\nDans une soude à $10^{-2}$ mol·L⁻¹ : [OH⁻] = $10^{-2}$ mol·L⁻¹.\nDonc [H₃O⁺] $= 10^{-14} / 10^{-2}$.",
          "formula": {
            "name": "Produit ionique de l'eau",
            "formula": "[H_3O^+] \\times [OH^-] = K_e = 10^{-14}",
            "note": "À 25 °C."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q7",
            "type": "mcq",
            "prompt": "Dans une solution d'hydroxyde de sodium à $10^{-2}$ mol·L⁻¹ (25 °C), que vaut [H₃O⁺] ?",
            "options": [
              "$10^{-12}$ mol·L⁻¹",
              "$10^{-2}$ mol·L⁻¹",
              "$10^{2}$ mol·L⁻¹",
              "0 mol·L⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "[H₃O⁺] $= 10^{-14} / 10^{-2} = 10^{-12}$ mol·L⁻¹. On retrouve bien $pH = 12 = 14 + \\log(10^{-2})$. [H₃O⁺] n'est jamais nulle dans l'eau."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q1",
          "type": "mcq",
          "prompt": "À 25 °C, quel est le pH d'une solution d'hydroxyde de sodium de concentration $C_b = 10^{-3}$ mol·L⁻¹ ?",
          "options": [
            "3",
            "11",
            "-11",
            "17"
          ],
          "correctAnswerIndex": 1,
          "explanation": "NaOH est une base forte : $pH = 14 + \\log(10^{-3}) = 14 - 3 = 11$. La valeur 3 serait le pH d'un acide fort de même concentration."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q2",
          "type": "mcq",
          "prompt": "Une solution de potasse (KOH, base forte) a un pH égal à 12 à 25 °C. Que vaut sa concentration $C_b$ ?",
          "options": [
            "$10^{2}$ mol·L⁻¹",
            "$10^{-12}$ mol·L⁻¹",
            "$10^{-14}$ mol·L⁻¹",
            "$10^{-2}$ mol·L⁻¹"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$C_b = 10^{pH-14} = 10^{12-14} = 10^{-2}$ mol·L⁻¹. La réponse $10^{2}$ vient de la formule fausse $10^{14-pH}$, et $10^{-12}$ mol·L⁻¹ est [H₃O⁺], pas $C_b$."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q3",
          "type": "mcq",
          "prompt": "Une solution de KOH de concentration $C = 2 \\times 10^{-3}$ mol·L⁻¹ a un pH mesuré de 11,3. Quel calcul permet de montrer que KOH est une base forte ?",
          "options": [
            "$14 + \\log(2 \\times 10^{-3}) = 11,3$",
            "$14 + \\log(10^{-2}) = 12$",
            "$-\\log(2 \\times 10^{-3}) = 2,7$",
            "$14 - \\log(2 \\times 10^{-3}) = 16,7$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$14 + \\log(2 \\times 10^{-3}) = 14 - 2,70 = 11,3$, ce qui est égal au pH mesuré : KOH est une base forte. Il faut utiliser la concentration de l'énoncé, et non $10^{-2}$."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q4",
          "type": "mcq",
          "prompt": "Une solution d'hydroxyde de sodium a un pH de 11,5 à 25 °C. Quelle est sa concentration C ?",
          "options": [
            "$3,16 \\times 10^{-12}$ mol·L⁻¹",
            "$10^{2,5}$ mol·L⁻¹",
            "$3,16 \\times 10^{-3}$ mol·L⁻¹",
            "$11,5 \\times 10^{-3}$ mol·L⁻¹"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$C = 10^{11,5-14} = 10^{-2,5} = 3,16 \\times 10^{-3}$ mol·L⁻¹. La valeur $3,16 \\times 10^{-12}$ mol·L⁻¹ correspond à [H₃O⁺] $= 10^{-11,5}$, pas à C."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q5",
          "type": "mcq",
          "prompt": "Quelle masse de NaOH ($M = 40$ g·mol⁻¹) faut-il dissoudre pour préparer 100 mL de solution à $3,16 \\times 10^{-3}$ mol·L⁻¹ ?",
          "options": [
            "1,26 g",
            "$1,26 \\times 10^{-2}$ g",
            "126 g",
            "0,126 g"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$m = M \\cdot C \\cdot V = 40 \\times 3,16 \\times 10^{-3} \\times 0,100 = 1,26 \\times 10^{-2}$ g, soit 12,6 mg. Le résultat 1,26 g vient d'un volume mal converti."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q6",
          "type": "mcq",
          "prompt": "Pour une soude de concentration $10^{-8}$ mol·L⁻¹, un élève écrit $pH = 14 + \\log(10^{-8}) = 6$. Pourquoi ce résultat est-il impossible ?",
          "options": [
            "Le calcul est juste, le pH vaut bien 6",
            "Il fallait trouver pH = 8",
            "$K_e$ change pour les solutions diluées",
            "Une base ne peut pas donner une solution acide"
          ],
          "correctAnswerIndex": 3,
          "explanation": "pH = 6 signifie une solution acide, ce qui est impossible en ajoutant une base à l'eau. La concentration $10^{-8}$ mol·L⁻¹ est hors du domaine de validité, donc la formule ne s'applique pas."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p05_q7",
          "type": "mcq",
          "prompt": "Dans une solution d'hydroxyde de sodium à $10^{-2}$ mol·L⁻¹ (25 °C), que vaut [H₃O⁺] ?",
          "options": [
            "$10^{-12}$ mol·L⁻¹",
            "$10^{-2}$ mol·L⁻¹",
            "$10^{2}$ mol·L⁻¹",
            "0 mol·L⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "[H₃O⁺] $= 10^{-14} / 10^{-2} = 10^{-12}$ mol·L⁻¹. On retrouve bien $pH = 12 = 14 + \\log(10^{-2})$. [H₃O⁺] n'est jamais nulle dans l'eau."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06",
      "order": 6,
      "title": "Dilutions et mélanges de solutions fortes",
      "summary": "On calcule le pH après une dilution ou après le mélange de deux acides forts ou de deux bases fortes, en raisonnant sur les quantités de matière.",
      "conceptExplanation": "Lors d'une dilution, la quantité de soluté se conserve : $C_1 V_1 = C_2 V_2$, avec $V_2 = V_1 + V_e$.\nDiluer 10 fois un acide fort augmente son pH de 1 ; diluer 10 fois une base forte diminue son pH de 1.\nPour mélanger deux acides forts, on additionne les quantités de H₃O⁺ puis on divise par le volume total.\nPour mélanger deux bases fortes, on fait de même avec les quantités de OH⁻.\nLe pH n'est pas additif : le pH du mélange est compris entre les pH des solutions mélangées.",
      "keyRule": "Dans une dilution ou un mélange, on additionne des quantités de matière, jamais des concentrations ni des pH.",
      "formulas": [
        {
          "name": "Dilution",
          "formula": "C_1 V_1 = C_2 V_2 \\quad \\text{avec} \\quad V_2 = V_1 + V_e",
          "note": "La quantité de soluté se conserve ; Vₑ est le volume d'eau ajouté."
        },
        {
          "name": "Mélange de deux acides forts",
          "formula": "[\\mathrm{H_3O^+}] = \\frac{C_1 V_1 + C_2 V_2}{V_1 + V_2}",
          "note": "Puis pH = -log[H₃O⁺]."
        },
        {
          "name": "Mélange de deux bases fortes",
          "formula": "[\\mathrm{OH^-}] = \\frac{C_1 V_1 + C_2 V_2}{V_1 + V_2}",
          "note": "Puis pH = 14 + log[OH⁻], à 25 °C."
        }
      ],
      "workedExample": {
        "title": "Situation d'évaluation : mélange de deux acides forts",
        "statement": "On mélange $V_1 = 100$ mL d'acide chlorhydrique S₁ de pH₁ = 2 et $V_2 = 200$ mL d'acide nitrique S₂ de pH₂ = 4, à 25 °C ($K_e = 10^{-14}$). Calcule la concentration de chaque ion présent dans le mélange, puis son pH.",
        "methodSteps": [
          "Concentrations des acides : $C_1 = 10^{-2}$ mol·L⁻¹ et $C_2 = 10^{-4}$ mol·L⁻¹.",
          "Volume total : $V = V_1 + V_2 = 0,1 + 0,2 = 0,3$ L.",
          "[H₃O⁺] = $\\frac{C_1V_1 + C_2V_2}{V} = \\frac{10^{-3} + 2 \\times 10^{-5}}{0,3} = 3,4 \\times 10^{-3}$ mol·L⁻¹.",
          "[Cl⁻] = $\\frac{C_1V_1}{V} = \\frac{10^{-3}}{0,3} = 3,33 \\times 10^{-3}$ mol·L⁻¹ et [NO₃⁻] = $\\frac{C_2V_2}{V} = \\frac{2 \\times 10^{-5}}{0,3} = 6,67 \\times 10^{-5}$ mol·L⁻¹.",
          "[OH⁻] = $\\frac{K_e}{[H_3O^+]} = \\frac{10^{-14}}{3,4 \\times 10^{-3}} = 2,94 \\times 10^{-12}$ mol·L⁻¹.",
          "$pH = -\\log(3,4 \\times 10^{-3}) = 2,47 \\approx 2,5$."
        ],
        "conclusion": "Le mélange a un pH d'environ 2,5 : il est compris entre 2 et 4, et plus proche de 2, car l'acide chlorhydrique apporte presque tous les ions H₃O⁺."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La dilution conserve la matière",
          "stepTheme": "La dilution conserve la matière",
          "stepBadge": "La dilution conserve la matière",
          "paragraphText": "• Dilution : on ajoute de l'eau à une solution, sans ajouter de soluté.\nLa quantité de soluté ne change pas : $C_1 V_1 = C_2 V_2$.\nLe nouveau volume vaut $V_2 = V_1 + V_e$, où $V_e$ est le volume d'eau ajouté.\nDiluer 10 fois, c'est diviser la concentration par 10.",
          "formula": {
            "name": "Conservation de la quantité de matière",
            "formula": "C_1 V_1 = C_2 V_2",
            "note": "Vₑ = V₂ - V₁ est le volume d'eau ajouté."
          },
          "konanTip": "Diluer 10 fois un acide fort fait monter son pH de 1, tant que la concentration reste au-dessus de 10⁻⁶ mol·L⁻¹.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q1",
            "type": "mcq",
            "prompt": "On dilue 10 fois une solution d'acide chlorhydrique de pH = 2, à 25 °C. Quel est le pH de la solution obtenue ?",
            "options": [
              "pH = 20",
              "pH = 3",
              "pH = 1",
              "pH = 2,1"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avant : $C_1 = 10^{-2}$ mol·L⁻¹. Après une dilution par 10 : $C_2 = 10^{-3}$ mol·L⁻¹, donc $pH = -\\log(10^{-3}) = 3$. La solution est moins acide : son pH augmente, mais il ne se multiplie pas par 10."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer le volume d'eau à ajouter",
          "stepTheme": "Calculer le volume d'eau à ajouter",
          "stepBadge": "Calculer le volume d'eau à ajouter",
          "paragraphText": "• Étape 1 : on calcule la concentration visée avec le pH voulu.\n• Étape 2 : on calcule $V_2 = \\frac{C_1 V_1}{C_2}$.\n• Étape 3 : on en déduit $V_e = V_2 - V_1$.\nExemple : KOH à $2 \\times 10^{-3}$ mol·L⁻¹, $V_1 = 20$ mL, on veut pH = 11.",
          "formula": {
            "name": "Volume d'eau ajouté",
            "formula": "V_e = \\frac{C_1 V_1}{C_2} - V_1",
            "note": "Pour une base forte, C₂ = 10^(pH₂ - 14)."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q2",
            "type": "mcq",
            "prompt": "On veut obtenir une solution de pH = 11 à partir de $V_1 = 20$ mL de potasse KOH à $2 \\times 10^{-3}$ mol·L⁻¹. Quel volume d'eau faut-il ajouter ?",
            "options": [
              "20 mL",
              "40 mL",
              "10 mL",
              "200 mL"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$C_2 = 10^{11-14} = 10^{-3}$ mol·L⁻¹, donc $V_2 = \\frac{2 \\times 10^{-3} \\times 20}{10^{-3}} = 40$ mL. On ajoute $V_e = 40 - 20 = 20$ mL d'eau. 40 mL est le volume final, pas le volume d'eau ajouté."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Mélanger deux acides forts",
          "stepTheme": "Mélanger deux acides forts",
          "stepBadge": "Mélanger deux acides forts",
          "paragraphText": "• Étape 1 : quantité de H₃O⁺ apportée par chaque acide : $C_1V_1$ et $C_2V_2$.\n• Étape 2 : on additionne ces quantités.\n• Étape 3 : on divise par le volume total $V_1 + V_2$.\nOn obtient [H₃O⁺] = $\\frac{C_1V_1 + C_2V_2}{V_1 + V_2}$, puis le pH.",
          "formula": {
            "name": "Mélange de deux acides forts",
            "formula": "[\\mathrm{H_3O^+}] = \\frac{C_1 V_1 + C_2 V_2}{V_1 + V_2}",
            "note": "Les volumes sont en litres, les concentrations en mol·L⁻¹."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q3",
            "type": "mcq",
            "prompt": "On mélange un volume $V_1$ d'un acide fort de concentration $C_1$ et un volume $V_2$ d'un autre acide fort de concentration $C_2$. Quelle expression donne [H₃O⁺] dans le mélange ?",
            "options": [
              "[H₃O⁺] = $C_1 + C_2$",
              "[H₃O⁺] = $\\frac{C_1 + C_2}{2}$",
              "[H₃O⁺] = $\\frac{C_1V_1 + C_2V_2}{V_1 + V_2}$",
              "[H₃O⁺] = $\\frac{C_1V_1 + C_2V_2}{V_1}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On additionne les quantités de matière $C_1V_1 + C_2V_2$, puis on divise par le volume total $V_1 + V_2$. Additionner les concentrations ou en faire la moyenne simple ne tient pas compte des volumes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Acide chlorhydrique et acide nitrique",
          "stepTheme": "Acide chlorhydrique et acide nitrique",
          "stepBadge": "Acide chlorhydrique et acide nitrique",
          "paragraphText": "Au labo, un groupe mélange 100 mL d'acide chlorhydrique de pH = 2 et 200 mL d'acide nitrique de pH = 4.\n$C_1 = 10^{-2}$ mol·L⁻¹ et $C_2 = 10^{-4}$ mol·L⁻¹.\n$n(H_3O^+) = 10^{-2} \\times 0,1 + 10^{-4} \\times 0,2 = 1,02 \\times 10^{-3}$ mol.\nLe volume total vaut 0,3 L.",
          "konanTip": "Convertis toujours les volumes en litres avant de calculer.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q4",
            "type": "mcq",
            "prompt": "On mélange 100 mL d'acide chlorhydrique de pH = 2 et 200 mL d'acide nitrique de pH = 4, à 25 °C. Quel est le pH du mélange ?",
            "options": [
              "pH = 6",
              "pH = 3",
              "pH = 2",
              "pH ≈ 2,5"
            ],
            "correctAnswerIndex": 3,
            "explanation": "[H₃O⁺] = $\\frac{1,02 \\times 10^{-3}}{0,3} = 3,4 \\times 10^{-3}$ mol·L⁻¹, donc $pH = -\\log(3,4 \\times 10^{-3}) = 2,47 \\approx 2,5$. La valeur 6 est la somme des pH, et 3 leur moyenne : ces deux raisonnements sont faux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les ions spectateurs du mélange",
          "stepTheme": "Les ions spectateurs du mélange",
          "stepBadge": "Les ions spectateurs du mélange",
          "paragraphText": "Chaque anion ne vient que d'un seul acide.\n• Cl⁻ vient de HCl : [Cl⁻] = $\\frac{C_1V_1}{V}$.\n• NO₃⁻ vient de HNO₃ : [NO₃⁻] = $\\frac{C_2V_2}{V}$.\nEnfin, [OH⁻] = $\\frac{K_e}{[H_3O^+]}$ = $2,94 \\times 10^{-12}$ mol·L⁻¹ dans ce mélange.",
          "konanTip": "Vérifie avec l'électroneutralité : [H₃O⁺] ≈ [Cl⁻] + [NO₃⁻].",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q5",
            "type": "mcq",
            "prompt": "Dans le mélange de 100 mL d'acide chlorhydrique à $10^{-2}$ mol·L⁻¹ et de 200 mL d'acide nitrique à $10^{-4}$ mol·L⁻¹, que vaut [Cl⁻] ?",
            "options": [
              "[Cl⁻] = $10^{-2}$ mol·L⁻¹",
              "[Cl⁻] = $3,33 \\times 10^{-3}$ mol·L⁻¹",
              "[Cl⁻] = $10^{-3}$ mol·L⁻¹",
              "[Cl⁻] = $3,4 \\times 10^{-3}$ mol·L⁻¹"
            ],
            "correctAnswerIndex": 1,
            "explanation": "[Cl⁻] = $\\frac{10^{-2} \\times 0,1}{0,3} = 3,33 \\times 10^{-3}$ mol·L⁻¹. $10^{-2}$ oublie la dilution, $10^{-3}$ est la quantité en mol, et $3,4 \\times 10^{-3}$ est [H₃O⁺], qui compte aussi les ions apportés par HNO₃."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Mélanger deux bases fortes",
          "stepTheme": "Mélanger deux bases fortes",
          "stepBadge": "Mélanger deux bases fortes",
          "paragraphText": "Même méthode, avec les ions OH⁻.\nExemple : 100 mL de soude NaOH à $10^{-2}$ mol·L⁻¹ et 75 mL de potasse KOH à $1,5 \\times 10^{-2}$ mol·L⁻¹.\n$n(OH^-) = 10^{-3} + 1,125 \\times 10^{-3} = 2,125 \\times 10^{-3}$ mol.\nPuis [OH⁻] = $\\frac{n}{V_1 + V_2}$ et $pH = 14 + \\log[OH^-]$.",
          "formula": {
            "name": "Mélange de deux bases fortes",
            "formula": "[\\mathrm{OH^-}] = \\frac{C_1 V_1 + C_2 V_2}{V_1 + V_2}",
            "note": "Puis pH = 14 + log[OH⁻], à 25 °C."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q6",
            "type": "mcq",
            "prompt": "On mélange 100 mL de NaOH à $10^{-2}$ mol·L⁻¹ et 75 mL de KOH à $1,5 \\times 10^{-2}$ mol·L⁻¹, à 25 °C. Quel est le pH du mélange ?",
            "options": [
              "pH = 24,18",
              "pH = 12,18",
              "pH = 12,08",
              "pH = 1,92"
            ],
            "correctAnswerIndex": 2,
            "explanation": "[OH⁻] = $\\frac{2,125 \\times 10^{-3}}{0,175} = 1,21 \\times 10^{-2}$ mol·L⁻¹, donc $pH = 14 + \\log(1,21 \\times 10^{-2}) = 14 - 1,92 = 12,08$. 12,18 est le pH de la potasse seule, et 1,92 est $-\\log[OH^-]$, pas le pH."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le pH ne s'additionne pas",
          "stepTheme": "Le pH ne s'additionne pas",
          "stepBadge": "Le pH ne s'additionne pas",
          "paragraphText": "Erreur classique : croire que le pH d'un mélange est la somme des pH.\nSoude de pH = 12 et potasse de pH = 12,18 : la somme vaut 24,18, ce qui est impossible.\nLe vrai pH du mélange vaut 12,08.\n• À retenir : le pH d'un mélange est compris entre les pH des solutions mélangées.",
          "konanTip": "Un pH supérieur à 14 dans une solution diluée doit t'alerter : il y a une erreur.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q7",
            "type": "mcq",
            "prompt": "On mélange une solution de soude de pH = 12 et une solution de potasse de pH = 12,18, à 25 °C. Quelle valeur peut être le pH du mélange ?",
            "options": [
              "pH = 12,08",
              "pH = 24,18",
              "pH = 0,18",
              "pH = 13"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pH d'un mélange de deux bases fortes est compris entre leurs pH, ici entre 12 et 12,18. Seule la valeur 12,08 convient. 24,18 est la somme des pH et 0,18 leur différence : le pH n'est ni additif ni soustractif."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q1",
          "type": "mcq",
          "prompt": "On dilue 10 fois une solution d'acide chlorhydrique de pH = 2, à 25 °C. Quel est le pH de la solution obtenue ?",
          "options": [
            "pH = 20",
            "pH = 3",
            "pH = 1",
            "pH = 2,1"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avant : $C_1 = 10^{-2}$ mol·L⁻¹. Après une dilution par 10 : $C_2 = 10^{-3}$ mol·L⁻¹, donc $pH = -\\log(10^{-3}) = 3$. La solution est moins acide : son pH augmente, mais il ne se multiplie pas par 10."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q2",
          "type": "mcq",
          "prompt": "On veut obtenir une solution de pH = 11 à partir de $V_1 = 20$ mL de potasse KOH à $2 \\times 10^{-3}$ mol·L⁻¹. Quel volume d'eau faut-il ajouter ?",
          "options": [
            "20 mL",
            "40 mL",
            "10 mL",
            "200 mL"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$C_2 = 10^{11-14} = 10^{-3}$ mol·L⁻¹, donc $V_2 = \\frac{2 \\times 10^{-3} \\times 20}{10^{-3}} = 40$ mL. On ajoute $V_e = 40 - 20 = 20$ mL d'eau. 40 mL est le volume final, pas le volume d'eau ajouté."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q3",
          "type": "mcq",
          "prompt": "On mélange un volume $V_1$ d'un acide fort de concentration $C_1$ et un volume $V_2$ d'un autre acide fort de concentration $C_2$. Quelle expression donne [H₃O⁺] dans le mélange ?",
          "options": [
            "[H₃O⁺] = $C_1 + C_2$",
            "[H₃O⁺] = $\\frac{C_1 + C_2}{2}$",
            "[H₃O⁺] = $\\frac{C_1V_1 + C_2V_2}{V_1 + V_2}$",
            "[H₃O⁺] = $\\frac{C_1V_1 + C_2V_2}{V_1}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On additionne les quantités de matière $C_1V_1 + C_2V_2$, puis on divise par le volume total $V_1 + V_2$. Additionner les concentrations ou en faire la moyenne simple ne tient pas compte des volumes."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q4",
          "type": "mcq",
          "prompt": "On mélange 100 mL d'acide chlorhydrique de pH = 2 et 200 mL d'acide nitrique de pH = 4, à 25 °C. Quel est le pH du mélange ?",
          "options": [
            "pH = 6",
            "pH = 3",
            "pH = 2",
            "pH ≈ 2,5"
          ],
          "correctAnswerIndex": 3,
          "explanation": "[H₃O⁺] = $\\frac{1,02 \\times 10^{-3}}{0,3} = 3,4 \\times 10^{-3}$ mol·L⁻¹, donc $pH = -\\log(3,4 \\times 10^{-3}) = 2,47 \\approx 2,5$. La valeur 6 est la somme des pH, et 3 leur moyenne : ces deux raisonnements sont faux."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q5",
          "type": "mcq",
          "prompt": "Dans le mélange de 100 mL d'acide chlorhydrique à $10^{-2}$ mol·L⁻¹ et de 200 mL d'acide nitrique à $10^{-4}$ mol·L⁻¹, que vaut [Cl⁻] ?",
          "options": [
            "[Cl⁻] = $10^{-2}$ mol·L⁻¹",
            "[Cl⁻] = $3,33 \\times 10^{-3}$ mol·L⁻¹",
            "[Cl⁻] = $10^{-3}$ mol·L⁻¹",
            "[Cl⁻] = $3,4 \\times 10^{-3}$ mol·L⁻¹"
          ],
          "correctAnswerIndex": 1,
          "explanation": "[Cl⁻] = $\\frac{10^{-2} \\times 0,1}{0,3} = 3,33 \\times 10^{-3}$ mol·L⁻¹. $10^{-2}$ oublie la dilution, $10^{-3}$ est la quantité en mol, et $3,4 \\times 10^{-3}$ est [H₃O⁺], qui compte aussi les ions apportés par HNO₃."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q6",
          "type": "mcq",
          "prompt": "On mélange 100 mL de NaOH à $10^{-2}$ mol·L⁻¹ et 75 mL de KOH à $1,5 \\times 10^{-2}$ mol·L⁻¹, à 25 °C. Quel est le pH du mélange ?",
          "options": [
            "pH = 24,18",
            "pH = 12,18",
            "pH = 12,08",
            "pH = 1,92"
          ],
          "correctAnswerIndex": 2,
          "explanation": "[OH⁻] = $\\frac{2,125 \\times 10^{-3}}{0,175} = 1,21 \\times 10^{-2}$ mol·L⁻¹, donc $pH = 14 + \\log(1,21 \\times 10^{-2}) = 14 - 1,92 = 12,08$. 12,18 est le pH de la potasse seule, et 1,92 est $-\\log[OH^-]$, pas le pH."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p06_q7",
          "type": "mcq",
          "prompt": "On mélange une solution de soude de pH = 12 et une solution de potasse de pH = 12,18, à 25 °C. Quelle valeur peut être le pH du mélange ?",
          "options": [
            "pH = 12,08",
            "pH = 24,18",
            "pH = 0,18",
            "pH = 13"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pH d'un mélange de deux bases fortes est compris entre leurs pH, ici entre 12 et 12,18. Seule la valeur 12,08 convient. 24,18 est la somme des pH et 0,18 leur différence : le pH n'est ni additif ni soustractif."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07",
      "order": 7,
      "title": "Entraînement type BAC",
      "summary": "Un exercice de concours complet sur un mélange de trois acides forts, résolu pas à pas.",
      "conceptExplanation": "Dans un mélange d'acides forts, les quantités de H₃O⁺ apportées s'additionnent.\nLe volume d'un gaz dissous ne s'ajoute pas au volume de la solution.\nOn calcule d'abord n(H₃O⁺) total, puis on divise par le volume total.\nUn ion spectateur (Cl⁻, NO₃⁻, Br⁻) garde sa quantité de matière lors d'une dilution.\nOn s'en sert pour retrouver un volume d'eau ajouté.\nEnfin, un acide fort est corrosif : on le manipule toujours avec gants et lunettes.",
      "keyRule": "Additionne les quantités de matière, jamais les concentrations, puis divise par le volume total de la solution.",
      "formulas": [
        {
          "name": "Quantité de matière d'un gaz",
          "formula": "n = \\frac{v}{V_m}",
          "note": "v et V_m dans la même unité (L et L·mol⁻¹)."
        },
        {
          "name": "Concentration dans un mélange d'acides forts",
          "formula": "[H_3O^+] = \\frac{C_1V_1 + C_2V_2 + n_3}{V_{total}}",
          "note": "Valable car chaque acide fort réagit totalement avec l'eau."
        },
        {
          "name": "pH d'une solution",
          "formula": "pH = -\\log [H_3O^+]",
          "note": "[H_3O^+] en mol·L⁻¹."
        }
      ],
      "workedExample": {
        "title": "Exercice de concours : les mélanges S₁ et S₂",
        "statement": "On mélange 50 mL de chlorure d'hydrogène à $10^{-3}$ mol·L⁻¹, 75 mL d'acide nitrique à $10^{-4}$ mol·L⁻¹, 0,6 mL de HBr gazeux ($V_m = 24$ L·mol⁻¹) et 75 mL d'eau : c'est S₁. On ajoute ensuite de l'eau pour obtenir S₂, où $[NO_3^-] = 2 \\times 10^{-5}$ mol·L⁻¹. Un camarade annonce pH = 3,38 pour S₁ et pH = 4,21 pour S₂. A-t-il raison ?",
        "methodSteps": [
          "$n(HBr) = 0,6 \\times 10^{-3}/24 = 2,5 \\times 10^{-5}$ mol.",
          "$n(H_3O^+) = 5 \\times 10^{-5} + 7,5 \\times 10^{-6} + 2,5 \\times 10^{-5} = 8,25 \\times 10^{-5}$ mol.",
          "V(S₁) = 50 + 75 + 75 = 200 mL, donc $[H_3O^+] = 4,125 \\times 10^{-4}$ mol·L⁻¹ et pH = 3,38.",
          "$V_{total} = 7,5 \\times 10^{-6}/2 \\times 10^{-5} = 0,375$ L, donc $V_e = 175$ mL.",
          "$[H_3O^+] = 8,25 \\times 10^{-5}/0,375 = 2,2 \\times 10^{-4}$ mol·L⁻¹, donc pH(S₂) = 3,66."
        ],
        "conclusion": "Le camarade a raison pour S₁ (pH = 3,38) mais se trompe pour S₂ : le pH vaut 3,66 et non 4,21."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Quantité de matière d'un gaz dissous",
          "stepTheme": "Quantité de matière d'un gaz dissous",
          "stepBadge": "Quantité de matière d'un gaz dissous",
          "paragraphText": "On dissout 0,6 mL de bromure d'hydrogène HBr gazeux dans le mélange.\n• Formule : $n = v/V_m$, avec v en litres.\n• Calcul : $n = 0,6 \\times 10^{-3}/24 = 2,5 \\times 10^{-5}$ mol.\nHBr est un acide fort : il donne autant de H₃O⁺.",
          "formula": {
            "name": "Quantité de matière d'un gaz",
            "formula": "n = \\frac{v}{V_m}",
            "note": "Convertis d'abord v en litres : 0,6 mL = 0,6 × 10⁻³ L."
          },
          "konanTip": "Avant tout calcul, mets v et V_m dans la même unité.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q1",
            "type": "mcq",
            "prompt": "On dissout 0,6 mL de HBr gazeux ($V_m = 24$ L·mol⁻¹). Quelle est la quantité de matière de HBr ?",
            "options": [
              "$2,5 \\times 10^{-2}$ mol",
              "14,4 mol",
              "$2,5 \\times 10^{-5}$ mol",
              "$4 \\times 10^{-4}$ mol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$n = v/V_m = 0,6 \\times 10^{-3}/24 = 2,5 \\times 10^{-5}$ mol. Avec v laissé en mL, on trouverait $2,5 \\times 10^{-2}$ mol, mille fois trop."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Le volume du gaz ne compte pas",
          "stepTheme": "Le volume du gaz ne compte pas",
          "stepBadge": "Le volume du gaz ne compte pas",
          "paragraphText": "Le gaz HBr se dissout dans l'eau : il n'augmente pas le volume de la solution.\nSeuls les volumes de liquides s'additionnent.\n• V(S₁) = 50 + 75 + 75 = 200 mL.\nNe pas oublier les 75 mL d'eau ajoutés !",
          "konanTip": "Liste tous les liquides versés, et seulement eux.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q2",
            "type": "mcq",
            "prompt": "S₁ contient 50 mL de HCl, 75 mL de HNO₃, 0,6 mL de HBr gazeux et 75 mL d'eau. Quel est le volume de S₁ ?",
            "options": [
              "200 mL",
              "200,6 mL",
              "125 mL",
              "275 mL"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le gaz dissous n'ajoute pas de volume : V = 50 + 75 + 75 = 200 mL. Oublier l'eau donne 125 mL, compter le gaz donne 200,6 mL."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le pH du mélange S₁",
          "stepTheme": "Le pH du mélange S₁",
          "stepBadge": "Le pH du mélange S₁",
          "paragraphText": "Les trois acides forts apportent chacun leurs ions H₃O⁺.\n• $n = 5 \\times 10^{-5} + 7,5 \\times 10^{-6} + 2,5 \\times 10^{-5} = 8,25 \\times 10^{-5}$ mol.\n• $[H_3O^+] = 8,25 \\times 10^{-5}/0,200 = 4,125 \\times 10^{-4}$ mol·L⁻¹.\n• $pH = -\\log(4,125 \\times 10^{-4}) = 3,38$.",
          "formula": {
            "name": "Mélange d'acides forts",
            "formula": "[H_3O^+] = \\frac{C_1V_1 + C_2V_2 + n_3}{V_{total}}",
            "note": "On additionne des quantités de matière, pas des concentrations."
          },
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q3",
            "type": "mcq",
            "prompt": "Dans S₁ (V = 200 mL), $n(H_3O^+) = 8,25 \\times 10^{-5}$ mol. Quel est le pH de S₁ ?",
            "options": [
              "4,21",
              "3,00",
              "2,38",
              "3,38"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$[H_3O^+] = 8,25 \\times 10^{-5}/0,200 = 4,125 \\times 10^{-4}$ mol·L⁻¹, donc $pH = -\\log(4,125 \\times 10^{-4}) = 3,38$. La valeur 3,00 ne tient compte que de l'acide chlorhydrique non dilué."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer [OH⁻] avec le produit ionique",
          "stepTheme": "Calculer [OH⁻] avec le produit ionique",
          "stepBadge": "Calculer [OH⁻] avec le produit ionique",
          "paragraphText": "Même dans un acide, il reste un peu d'ions OH⁻.\n• Produit ionique : $[H_3O^+] \\times [OH^-] = K_e = 10^{-14}$ à 25 °C.\n• $[OH^-] = 10^{-14}/4,125 \\times 10^{-4} = 2,42 \\times 10^{-11}$ mol·L⁻¹.\nVérifie l'exposant : $-14 - (-4) = -10$, puis $10^{-10}/4,125 \\approx 2,42 \\times 10^{-11}$.",
          "formula": {
            "name": "Produit ionique de l'eau",
            "formula": "[OH^-] = \\frac{K_e}{[H_3O^+]}",
            "note": "K_e = 10⁻¹⁴ à 25 °C."
          },
          "konanTip": "En milieu acide, [OH⁻] est toujours très petit devant [H₃O⁺].",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q4",
            "type": "mcq",
            "prompt": "Dans S₁, $[H_3O^+] = 4,125 \\times 10^{-4}$ mol·L⁻¹. Que vaut $[OH^-]$ à 25 °C ?",
            "options": [
              "$2,42 \\times 10^{-19}$ mol·L⁻¹",
              "$2,42 \\times 10^{-11}$ mol·L⁻¹",
              "$4,125 \\times 10^{-4}$ mol·L⁻¹",
              "$2,42 \\times 10^{-10}$ mol·L⁻¹"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$[OH^-] = 10^{-14}/(4,125 \\times 10^{-4}) = 2,42 \\times 10^{-11}$ mol·L⁻¹. L'exposant $-19$ vient d'une erreur de signe sur les puissances de 10."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Concentration d'un ion spectateur",
          "stepTheme": "Concentration d'un ion spectateur",
          "stepBadge": "Concentration d'un ion spectateur",
          "paragraphText": "Les ions Cl⁻, NO₃⁻ et Br⁻ ne réagissent pas : ce sont des ions spectateurs.\nLeur quantité de matière ne change pas, seul le volume augmente.\n• $[Cl^-] = C_1V_1/V = 5 \\times 10^{-5}/0,200 = 2,5 \\times 10^{-4}$ mol·L⁻¹.\n• De même : $[NO_3^-] = 3,75 \\times 10^{-5}$ et $[Br^-] = 1,25 \\times 10^{-4}$ mol·L⁻¹.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q5",
            "type": "mcq",
            "prompt": "S₁ (200 mL) contient 50 mL d'acide chlorhydrique à $10^{-3}$ mol·L⁻¹. Que vaut $[Cl^-]$ dans S₁ ?",
            "options": [
              "$10^{-3}$ mol·L⁻¹",
              "$5 \\times 10^{-5}$ mol·L⁻¹",
              "$2,5 \\times 10^{-4}$ mol·L⁻¹",
              "$1,25 \\times 10^{-4}$ mol·L⁻¹"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$n(Cl^-) = 10^{-3} \\times 0,050 = 5 \\times 10^{-5}$ mol, dilués dans 0,200 L : $[Cl^-] = 2,5 \\times 10^{-4}$ mol·L⁻¹. $5 \\times 10^{-5}$ est une quantité de matière, pas une concentration."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Retrouver le volume d'eau ajouté",
          "stepTheme": "Retrouver le volume d'eau ajouté",
          "stepBadge": "Retrouver le volume d'eau ajouté",
          "paragraphText": "Pour obtenir S₂, on ajoute un volume $V_e$ d'eau à S₁.\nOn veut $[NO_3^-] = 2 \\times 10^{-5}$ mol·L⁻¹, avec $n(NO_3^-) = 7,5 \\times 10^{-6}$ mol inchangé.\n• $V_{total} = 7,5 \\times 10^{-6}/2 \\times 10^{-5} = 0,375$ L.\n• $V_e = 0,375 - 0,200 = 0,175$ L, soit 175 mL.",
          "konanTip": "Un ion spectateur est un bon témoin de la dilution.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q6",
            "type": "mcq",
            "prompt": "On ajoute de l'eau à S₁ (200 mL, $n(NO_3^-) = 7,5 \\times 10^{-6}$ mol) pour avoir $[NO_3^-] = 2 \\times 10^{-5}$ mol·L⁻¹. Quel volume d'eau faut-il ajouter ?",
            "options": [
              "175 mL",
              "0,175 mL",
              "375 mL",
              "75 mL"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$V_{total} = 7,5 \\times 10^{-6}/(2 \\times 10^{-5}) = 0,375$ L, donc $V_e = 0,375 - 0,200 = 0,175$ L = 175 mL. 375 mL est le volume total, pas le volume d'eau ajouté."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le pH de S₂ : qui a raison ?",
          "stepTheme": "Le pH de S₂ : qui a raison ?",
          "stepBadge": "Le pH de S₂ : qui a raison ?",
          "paragraphText": "L'eau ajoutée ne change pas $n(H_3O^+) = 8,25 \\times 10^{-5}$ mol.\n• $[H_3O^+] = 8,25 \\times 10^{-5}/0,375 = 2,2 \\times 10^{-4}$ mol·L⁻¹.\n• $pH = -\\log(2,2 \\times 10^{-4}) = 3,66$.\nLe camarade avait trouvé 4,21 pour S₂ : il s'est trompé. Pour S₁, il avait raison.",
          "konanTip": "Une dilution d'acide fait monter le pH, mais de moins d'une unité ici.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q7",
            "type": "mcq",
            "prompt": "S₂ a un volume de 375 mL et contient $8,25 \\times 10^{-5}$ mol d'ions H₃O⁺. Quel est son pH ?",
            "options": [
              "4,21",
              "3,38",
              "4,66",
              "3,66"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$[H_3O^+] = 8,25 \\times 10^{-5}/0,375 = 2,2 \\times 10^{-4}$ mol·L⁻¹, donc $pH = -\\log(2,2 \\times 10^{-4}) = 3,66$. 3,38 est le pH de S₁, avant dilution."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "propriete",
          "stepTitle": "Manipuler un acide fort en sécurité",
          "stepTheme": "Manipuler un acide fort en sécurité",
          "stepBadge": "Manipuler un acide fort en sécurité",
          "paragraphText": "Les acides forts concentrés sont corrosifs pour la peau et les yeux.\n• Réaction acide fort + base forte : totale, rapide et exothermique.\nLa chaleur dégagée peut provoquer des projections.\nOn porte donc toujours blouse, gants et lunettes de protection.",
          "konanTip": "Pour diluer, on verse toujours l'acide dans l'eau, jamais l'inverse.",
          "exercise": {
            "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q8",
            "type": "mcq",
            "prompt": "Quelle précaution est indispensable pour manipuler de l'acide chlorhydrique concentré ?",
            "options": [
              "Le sentir pour l'identifier",
              "Porter des gants et des lunettes",
              "Le chauffer avant de l'utiliser",
              "Verser l'eau dans l'acide concentré"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un acide fort est corrosif et sa réaction avec une base forte est exothermique, avec un risque de projections. Gants et lunettes protègent la peau et les yeux."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q1",
          "type": "mcq",
          "prompt": "On dissout 0,6 mL de HBr gazeux ($V_m = 24$ L·mol⁻¹). Quelle est la quantité de matière de HBr ?",
          "options": [
            "$2,5 \\times 10^{-2}$ mol",
            "14,4 mol",
            "$2,5 \\times 10^{-5}$ mol",
            "$4 \\times 10^{-4}$ mol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$n = v/V_m = 0,6 \\times 10^{-3}/24 = 2,5 \\times 10^{-5}$ mol. Avec v laissé en mL, on trouverait $2,5 \\times 10^{-2}$ mol, mille fois trop."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q2",
          "type": "mcq",
          "prompt": "S₁ contient 50 mL de HCl, 75 mL de HNO₃, 0,6 mL de HBr gazeux et 75 mL d'eau. Quel est le volume de S₁ ?",
          "options": [
            "200 mL",
            "200,6 mL",
            "125 mL",
            "275 mL"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le gaz dissous n'ajoute pas de volume : V = 50 + 75 + 75 = 200 mL. Oublier l'eau donne 125 mL, compter le gaz donne 200,6 mL."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q3",
          "type": "mcq",
          "prompt": "Dans S₁ (V = 200 mL), $n(H_3O^+) = 8,25 \\times 10^{-5}$ mol. Quel est le pH de S₁ ?",
          "options": [
            "4,21",
            "3,00",
            "2,38",
            "3,38"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$[H_3O^+] = 8,25 \\times 10^{-5}/0,200 = 4,125 \\times 10^{-4}$ mol·L⁻¹, donc $pH = -\\log(4,125 \\times 10^{-4}) = 3,38$. La valeur 3,00 ne tient compte que de l'acide chlorhydrique non dilué."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q4",
          "type": "mcq",
          "prompt": "Dans S₁, $[H_3O^+] = 4,125 \\times 10^{-4}$ mol·L⁻¹. Que vaut $[OH^-]$ à 25 °C ?",
          "options": [
            "$2,42 \\times 10^{-19}$ mol·L⁻¹",
            "$2,42 \\times 10^{-11}$ mol·L⁻¹",
            "$4,125 \\times 10^{-4}$ mol·L⁻¹",
            "$2,42 \\times 10^{-10}$ mol·L⁻¹"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$[OH^-] = 10^{-14}/(4,125 \\times 10^{-4}) = 2,42 \\times 10^{-11}$ mol·L⁻¹. L'exposant $-19$ vient d'une erreur de signe sur les puissances de 10."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q5",
          "type": "mcq",
          "prompt": "S₁ (200 mL) contient 50 mL d'acide chlorhydrique à $10^{-3}$ mol·L⁻¹. Que vaut $[Cl^-]$ dans S₁ ?",
          "options": [
            "$10^{-3}$ mol·L⁻¹",
            "$5 \\times 10^{-5}$ mol·L⁻¹",
            "$2,5 \\times 10^{-4}$ mol·L⁻¹",
            "$1,25 \\times 10^{-4}$ mol·L⁻¹"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$n(Cl^-) = 10^{-3} \\times 0,050 = 5 \\times 10^{-5}$ mol, dilués dans 0,200 L : $[Cl^-] = 2,5 \\times 10^{-4}$ mol·L⁻¹. $5 \\times 10^{-5}$ est une quantité de matière, pas une concentration."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q6",
          "type": "mcq",
          "prompt": "On ajoute de l'eau à S₁ (200 mL, $n(NO_3^-) = 7,5 \\times 10^{-6}$ mol) pour avoir $[NO_3^-] = 2 \\times 10^{-5}$ mol·L⁻¹. Quel volume d'eau faut-il ajouter ?",
          "options": [
            "175 mL",
            "0,175 mL",
            "375 mL",
            "75 mL"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$V_{total} = 7,5 \\times 10^{-6}/(2 \\times 10^{-5}) = 0,375$ L, donc $V_e = 0,375 - 0,200 = 0,175$ L = 175 mL. 375 mL est le volume total, pas le volume d'eau ajouté."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q7",
          "type": "mcq",
          "prompt": "S₂ a un volume de 375 mL et contient $8,25 \\times 10^{-5}$ mol d'ions H₃O⁺. Quel est son pH ?",
          "options": [
            "4,21",
            "3,38",
            "4,66",
            "3,66"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$[H_3O^+] = 8,25 \\times 10^{-5}/0,375 = 2,2 \\times 10^{-4}$ mol·L⁻¹, donc $pH = -\\log(2,2 \\times 10^{-4}) = 3,66$. 3,38 est le pH de S₁, avant dilution."
        },
        {
          "id": "terminale_c_chimie_l07_acide_fort_base_forte_p07_q8",
          "type": "mcq",
          "prompt": "Quelle précaution est indispensable pour manipuler de l'acide chlorhydrique concentré ?",
          "options": [
            "Le sentir pour l'identifier",
            "Porter des gants et des lunettes",
            "Le chauffer avant de l'utiliser",
            "Verser l'eau dans l'acide concentré"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un acide fort est corrosif et sa réaction avec une base forte est exothermique, avec un risque de projections. Gants et lunettes protègent la peau et les yeux."
        }
      ]
    }
  ]
};
