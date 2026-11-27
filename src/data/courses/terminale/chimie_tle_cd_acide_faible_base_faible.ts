import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 8 : Acide faible – Base faible » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1327
export const CHIMIE_TLE_CD_L08_ACIDE_FAIBLE_BASE_FAIBLE: CurriculumChapter = {
  "id": "terminale_c_chimie_l08_acide_faible_base_faible",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 8,
  "title": "Leçon 8 : Acide faible – Base faible",
  "summary": "On montre que l'acide éthanoïque et l'ion éthanoate réagissent partiellement avec l'eau, on définit le coefficient d'ionisation et l'effet de la dilution, puis la notion d'équilibre chimique.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1327",
  "points": [
    {
      "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01",
      "order": 1,
      "title": "L'acide éthanoïque, un acide faible",
      "summary": "L'acide éthanoïque pur ne contient pas d'ions ; en solution, son ionisation par l'eau est partielle.",
      "conceptExplanation": "L'acide éthanoïque (acide acétique) CH₃COOH est un liquide incolore à l'odeur piquante, miscible à l'eau en toutes proportions ; sa dissolution est faiblement exothermique.\nL'expérience de conductibilité montre que l'acide éthanoïque pur ne conduit pas le courant (intensité nulle) : il ne contient pas d'ions.\nSa solution aqueuse à 0,1 mol/L conduit faiblement (4 mA), alors qu'une solution d'acide chlorhydrique de même concentration conduit beaucoup plus (70 mA) : l'ionisation de l'acide éthanoïque par l'eau est donc partielle.\nUn acide est dit faible en solution aqueuse si sa réaction avec l'eau est partielle, c'est-à-dire non totale.",
      "keyRule": "Acide faible = réaction avec l'eau partielle. L'acide éthanoïque est l'exemple de référence.",
      "formulas": [
        {
          "name": "Réaction de l'acide éthanoïque avec l'eau",
          "formula": "\\mathrm{CH_3COOH + H_2O \\rightleftharpoons CH_3COO^- + H_3O^+}",
          "note": "Équilibre : la double flèche traduit le caractère partiel."
        }
      ],
      "workedExample": {
        "title": "Conductibilités comparées",
        "statement": "On mesure l'intensité du courant traversant trois liquides : acide éthanoïque pur, solution d'acide éthanoïque à 0,1 mol/L et solution d'acide chlorhydrique à 0,1 mol/L. On obtient 0 mA, 4 mA et 70 mA. Que conclure ?",
        "methodSteps": [
          "L'acide pur ne conduit pas : il ne contient pas d'ions.",
          "La solution aqueuse conduit : l'eau a ionisé des molécules d'acide éthanoïque.",
          "Elle conduit beaucoup moins que l'acide chlorhydrique : cette ionisation est partielle."
        ],
        "conclusion": "L'ionisation de l'acide éthanoïque par l'eau est partielle : c'est un acide faible."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Présentation de l'acide éthanoïque",
          "stepTheme": "Présentation de l'acide éthanoïque",
          "stepBadge": "Présentation de l'acide éthanoïque",
          "paragraphText": "L'acide éthanoïque, ou acide acétique, a pour formule CH₃COOH.\nD'après le résumé, c'est un liquide incolore possédant une odeur piquante caractéristique, miscible à l'eau en toutes proportions ; sa dissolution est faiblement exothermique.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q1",
            "type": "mcq",
            "prompt": "L'acide éthanoïque pur est :",
            "options": [
              "Un liquide incolore à l'odeur piquante, miscible à l'eau",
              "Un gaz inodore",
              "Un solide ionique blanc",
              "Un liquide coloré non miscible à l'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la description donnée au début du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'acide éthanoïque pur ne conduit pas le courant",
          "stepTheme": "L'acide éthanoïque pur ne conduit pas le courant",
          "stepBadge": "L'acide éthanoïque pur ne conduit pas le courant",
          "paragraphText": "Dans l'expérience de conductibilité, l'intensité traversant l'acide éthanoïque pur est nulle (0 mA).\nLe résumé en déduit que la solution d'acide éthanoïque pur ne contient pas d'ions.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q2",
            "type": "mcq",
            "prompt": "L'intensité nulle mesurée dans l'acide éthanoïque pur montre que :",
            "options": [
              "Il contient beaucoup d'ions",
              "Il ne contient pas d'ions",
              "Il contient des électrons libres",
              "Il est totalement ionisé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans porteurs de charge (ions), le courant ne passe pas : interprétation du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une ionisation partielle en solution",
          "stepTheme": "Une ionisation partielle en solution",
          "stepBadge": "Une ionisation partielle en solution",
          "paragraphText": "À concentration égale (0,1 mol/L), la solution d'acide éthanoïque laisse passer 4 mA, contre 70 mA pour l'acide chlorhydrique.\nL'eau ionise donc les molécules d'acide éthanoïque, mais cette ionisation n'est pas totale : elle est partielle.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q3",
            "type": "mcq",
            "prompt": "La comparaison des intensités (4 mA contre 70 mA à 0,1 mol/L) montre que l'ionisation de l'acide éthanoïque est :",
            "options": [
              "Totale",
              "Nulle",
              "Partielle",
              "Supérieure à celle de l'acide chlorhydrique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution conduit, mais beaucoup moins que l'acide chlorhydrique : l'ionisation est partielle (conclusion du résumé)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Définition d'un acide faible",
          "stepTheme": "Définition d'un acide faible",
          "stepBadge": "Définition d'un acide faible",
          "paragraphText": "• Acide faible : acide dont la réaction avec l'eau, en solution aqueuse, est partielle (elle n'est pas totale).\nExemples donnés par le résumé : acide méthanoïque, acide benzoïque, ion ammonium, ion méthylammonium.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q4",
            "type": "mcq",
            "prompt": "Un acide est dit faible en solution aqueuse si :",
            "options": [
              "Il est peu concentré",
              "Il ne réagit pas avec l'eau",
              "Il est peu soluble",
              "Sa réaction avec l'eau est partielle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la définition du résumé : le critère est le caractère partiel de la réaction avec l'eau, pas la concentration."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Faible ne veut pas dire dilué",
          "stepTheme": "Faible ne veut pas dire dilué",
          "stepBadge": "Faible ne veut pas dire dilué",
          "paragraphText": "Piège : confondre acide faible et acide dilué.\nUn acide faible concentré reste faible : c'est la fraction de molécules ionisées qui est faible, pas forcément la concentration.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q5",
            "type": "mcq",
            "prompt": "Lequel de ces acides est un acide faible, d'après les exemples du résumé ?",
            "options": [
              "L'ion ammonium NH₄⁺",
              "L'acide chlorhydrique",
              "L'acide sulfurique concentré",
              "L'acide nitrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé cite l'ion ammonium (avec l'acide méthanoïque, l'acide benzoïque et l'ion méthylammonium) parmi les acides faibles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'équation-bilan avec l'eau",
          "stepTheme": "L'équation-bilan avec l'eau",
          "stepBadge": "L'équation-bilan avec l'eau",
          "paragraphText": "La dissociation de l'acide éthanoïque dans l'eau donne lieu à un équilibre chimique.\nSon équation-bilan s'écrit avec une double flèche : CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q6",
            "type": "mcq",
            "prompt": "L'équation-bilan de la réaction de l'acide éthanoïque avec l'eau est :",
            "options": [
              "CH₃COOH + H₂O → CH₃COO⁻ + H₃O⁺ (totale)",
              "CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺",
              "CH₃COOH → CH₃⁺ + COOH⁻",
              "CH₃COOH + H₂O ⇌ CH₃COOH₂⁺ + OH⁻"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La double flèche traduit l'équilibre : la réaction est limitée, donc partielle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q1",
          "type": "mcq",
          "prompt": "L'acide éthanoïque pur est :",
          "options": [
            "Un liquide incolore à l'odeur piquante, miscible à l'eau",
            "Un gaz inodore",
            "Un solide ionique blanc",
            "Un liquide coloré non miscible à l'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la description donnée au début du résumé."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q2",
          "type": "mcq",
          "prompt": "L'intensité nulle mesurée dans l'acide éthanoïque pur montre que :",
          "options": [
            "Il contient beaucoup d'ions",
            "Il ne contient pas d'ions",
            "Il contient des électrons libres",
            "Il est totalement ionisé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans porteurs de charge (ions), le courant ne passe pas : interprétation du résumé."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q3",
          "type": "mcq",
          "prompt": "La comparaison des intensités (4 mA contre 70 mA à 0,1 mol/L) montre que l'ionisation de l'acide éthanoïque est :",
          "options": [
            "Totale",
            "Nulle",
            "Partielle",
            "Supérieure à celle de l'acide chlorhydrique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution conduit, mais beaucoup moins que l'acide chlorhydrique : l'ionisation est partielle (conclusion du résumé)."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q4",
          "type": "mcq",
          "prompt": "Un acide est dit faible en solution aqueuse si :",
          "options": [
            "Il est peu concentré",
            "Il ne réagit pas avec l'eau",
            "Il est peu soluble",
            "Sa réaction avec l'eau est partielle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la définition du résumé : le critère est le caractère partiel de la réaction avec l'eau, pas la concentration."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q5",
          "type": "mcq",
          "prompt": "Lequel de ces acides est un acide faible, d'après les exemples du résumé ?",
          "options": [
            "L'ion ammonium NH₄⁺",
            "L'acide chlorhydrique",
            "L'acide sulfurique concentré",
            "L'acide nitrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé cite l'ion ammonium (avec l'acide méthanoïque, l'acide benzoïque et l'ion méthylammonium) parmi les acides faibles."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p01_q6",
          "type": "mcq",
          "prompt": "L'équation-bilan de la réaction de l'acide éthanoïque avec l'eau est :",
          "options": [
            "CH₃COOH + H₂O → CH₃COO⁻ + H₃O⁺ (totale)",
            "CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺",
            "CH₃COOH → CH₃⁺ + COOH⁻",
            "CH₃COOH + H₂O ⇌ CH₃COOH₂⁺ + OH⁻"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La double flèche traduit l'équilibre : la réaction est limitée, donc partielle."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02",
      "order": 2,
      "title": "Étude quantitative d'une solution d'acide faible",
      "summary": "À partir du pH, on détermine toutes les concentrations de la solution S₁ d'acide éthanoïque.",
      "conceptExplanation": "Pour la solution S₁ d'acide éthanoïque de concentration $C_a = 10^{-2}$ mol/L et de pH = 3,4 à 25 °C, les espèces présentes sont les ions H₃O⁺, OH⁻ et CH₃COO⁻, et les molécules H₂O et CH₃COOH.\nDu pH on tire $[H_3O^+] = 10^{-3{,}4} = 3{,}98 \\times 10^{-4}$ mol/L, puis $[OH^-] = 2{,}51 \\times 10^{-11}$ mol/L par le produit ionique.\nL'électroneutralité donne $[CH_3COO^-] = [H_3O^+] - [OH^-] \\approx 3{,}98 \\times 10^{-4}$ mol/L, et la conservation de la matière donne $[CH_3COOH] = C_a - [CH_3COO^-] = 9{,}6 \\times 10^{-3}$ mol/L.\nL'espèce majoritaire est donc CH₃COOH restant, et OH⁻ est ultra-minoritaire.",
      "keyRule": "Méthode : pH → [H₃O⁺] ; Ke → [OH⁻] ; électroneutralité → [A⁻] ; conservation → [AH].",
      "formulas": [
        {
          "name": "Électroneutralité (solution d'acide faible)",
          "formula": "\\mathrm{[H_3O^+]} = \\mathrm{[OH^-]} + \\mathrm{[CH_3COO^-]}",
          "note": "Permet d'obtenir [CH₃COO⁻]."
        },
        {
          "name": "Conservation de la matière",
          "formula": "C_a = \\mathrm{[CH_3COO^-]} + \\mathrm{[CH_3COOH]}",
          "note": "Permet d'obtenir l'acide restant."
        }
      ],
      "workedExample": {
        "title": "Les concentrations de la solution S₁",
        "statement": "Solution S₁ : Ca = 10⁻² mol/L, pH = 3,4. Détermine [H₃O⁺], [OH⁻], [CH₃COO⁻] et [CH₃COOH].",
        "methodSteps": [
          "[H₃O⁺] = 10^(−pH) = 10^(−3,4) ≈ 3,98 × 10⁻⁴ mol/L.",
          "[OH⁻] = Ke/[H₃O⁺] ≈ 2,51 × 10⁻¹¹ mol/L.",
          "Électroneutralité : [CH₃COO⁻] = [H₃O⁺] − [OH⁻] ≈ 3,98 × 10⁻⁴ mol/L.",
          "Conservation : [CH₃COOH] = 10⁻² − 3,98 × 10⁻⁴ ≈ 9,6 × 10⁻³ mol/L."
        ],
        "conclusion": "La quasi-totalité de l'acide reste sous forme moléculaire : l'ionisation est faible."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Inventaire des espèces présentes",
          "stepTheme": "Inventaire des espèces présentes",
          "stepBadge": "Inventaire des espèces présentes",
          "paragraphText": "Première étape de l'étude quantitative : lister les espèces chimiques de la solution S₁.\nLe résumé donne : ions H₃O⁺, OH⁻ et CH₃COO⁻ ; molécules H₂O et CH₃COOH.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q1",
            "type": "mcq",
            "prompt": "Les espèces présentes dans la solution S₁ d'acide éthanoïque sont :",
            "options": [
              "Uniquement CH₃COOH et H₂O",
              "H₃O⁺, OH⁻, CH₃COO⁻, H₂O et CH₃COOH",
              "Na⁺, Cl⁻ et CH₃COOH",
              "CH₃COO⁻ et H₂ uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'inventaire du résumé : trois ions et deux espèces moléculaires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "[H₃O⁺] à partir du pH",
          "stepTheme": "[H₃O⁺] à partir du pH",
          "stepBadge": "[H₃O⁺] à partir du pH",
          "paragraphText": "On exploite la mesure du pH : $[H_3O^+] = 10^{-pH}$.\nPour S₁, pH = 3,4 donne $[H_3O^+] = 3{,}98 \\times 10^{-4}$ mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q2",
            "type": "mcq",
            "prompt": "Pour la solution S₁ (pH = 3,4), la concentration en ions hydronium vaut :",
            "options": [
              "$3{,}98 \\times 10^{-4}$ mol/L",
              "$10^{-2}$ mol/L",
              "$3{,}4$ mol/L",
              "$2{,}51 \\times 10^{-11}$ mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "[H₃O⁺] = 10^(−3,4) ≈ 3,98 × 10⁻⁴ mol/L : valeur du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "[OH⁻] par le produit ionique",
          "stepTheme": "[OH⁻] par le produit ionique",
          "stepBadge": "[OH⁻] par le produit ionique",
          "paragraphText": "Le produit ionique de l'eau donne $[OH^-] = K_e/[H_3O^+]$.\nPour S₁, on obtient $[OH^-] = 2{,}51 \\times 10^{-11}$ mol/L : OH⁻ est l'espèce ultra-minoritaire.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q3",
            "type": "mcq",
            "prompt": "Dans la solution S₁, l'espèce ultra-minoritaire est :",
            "options": [
              "CH₃COOH",
              "H₃O⁺",
              "OH⁻",
              "CH₃COO⁻"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec 2,51 × 10⁻¹¹ mol/L, OH⁻ est très loin derrière les autres espèces : le résumé la qualifie d'ultra-minoritaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "[CH₃COO⁻] par l'électroneutralité",
          "stepTheme": "[CH₃COO⁻] par l'électroneutralité",
          "stepBadge": "[CH₃COO⁻] par l'électroneutralité",
          "paragraphText": "L'électroneutralité s'écrit $[H_3O^+] = [OH^-] + [CH_3COO^-]$.\nComme [OH⁻] est négligeable, $[CH_3COO^-] \\approx [H_3O^+] = 3{,}98 \\times 10^{-4}$ mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q4",
            "type": "mcq",
            "prompt": "Dans S₁, la concentration des ions éthanoate vaut environ :",
            "options": [
              "$10^{-2}$ mol/L",
              "$9{,}6 \\times 10^{-3}$ mol/L",
              "$2{,}51 \\times 10^{-11}$ mol/L",
              "$3{,}98 \\times 10^{-4}$ mol/L"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par électroneutralité, [CH₃COO⁻] ≈ [H₃O⁺] car [OH⁻] est négligeable."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "[CH₃COOH] par conservation de la matière",
          "stepTheme": "[CH₃COOH] par conservation de la matière",
          "stepBadge": "[CH₃COOH] par conservation de la matière",
          "paragraphText": "La conservation de la matière s'écrit $C_a = [CH_3COO^-] + [CH_3COOH]$.\nD'où $[CH_3COOH] = 10^{-2} - 3{,}98 \\times 10^{-4} = 9{,}6 \\times 10^{-3}$ mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q5",
            "type": "mcq",
            "prompt": "La concentration de l'acide éthanoïque restant dans S₁ vaut :",
            "options": [
              "$9{,}6 \\times 10^{-3}$ mol/L",
              "$3{,}98 \\times 10^{-4}$ mol/L",
              "$10^{-2}$ mol/L exactement",
              "$0$ mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par conservation de la matière : Ca − [CH₃COO⁻] ≈ 9,6 × 10⁻³ mol/L."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'espèce majoritaire est l'acide non dissocié",
          "stepTheme": "L'espèce majoritaire est l'acide non dissocié",
          "stepBadge": "L'espèce majoritaire est l'acide non dissocié",
          "paragraphText": "Bilan du résumé : espèce majoritaire CH₃COOH restant ; espèces minoritaires H₃O⁺ et CH₃COO⁻ ; espèce ultra-minoritaire OH⁻.\nC'est la signature d'un acide faible : la forme moléculaire domine largement.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q6",
            "type": "mcq",
            "prompt": "Dans une solution d'acide faible, l'espèce majoritaire est :",
            "options": [
              "L'ion hydronium",
              "L'acide non dissocié (molécules restantes)",
              "L'ion hydroxyde",
              "La base conjuguée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans S₁, [CH₃COOH] = 9,6 × 10⁻³ mol/L écrase les concentrations ioniques : la molécule domine."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q1",
          "type": "mcq",
          "prompt": "Les espèces présentes dans la solution S₁ d'acide éthanoïque sont :",
          "options": [
            "Uniquement CH₃COOH et H₂O",
            "H₃O⁺, OH⁻, CH₃COO⁻, H₂O et CH₃COOH",
            "Na⁺, Cl⁻ et CH₃COOH",
            "CH₃COO⁻ et H₂ uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'inventaire du résumé : trois ions et deux espèces moléculaires."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q2",
          "type": "mcq",
          "prompt": "Pour la solution S₁ (pH = 3,4), la concentration en ions hydronium vaut :",
          "options": [
            "$3{,}98 \\times 10^{-4}$ mol/L",
            "$10^{-2}$ mol/L",
            "$3{,}4$ mol/L",
            "$2{,}51 \\times 10^{-11}$ mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "[H₃O⁺] = 10^(−3,4) ≈ 3,98 × 10⁻⁴ mol/L : valeur du résumé."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q3",
          "type": "mcq",
          "prompt": "Dans la solution S₁, l'espèce ultra-minoritaire est :",
          "options": [
            "CH₃COOH",
            "H₃O⁺",
            "OH⁻",
            "CH₃COO⁻"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec 2,51 × 10⁻¹¹ mol/L, OH⁻ est très loin derrière les autres espèces : le résumé la qualifie d'ultra-minoritaire."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q4",
          "type": "mcq",
          "prompt": "Dans S₁, la concentration des ions éthanoate vaut environ :",
          "options": [
            "$10^{-2}$ mol/L",
            "$9{,}6 \\times 10^{-3}$ mol/L",
            "$2{,}51 \\times 10^{-11}$ mol/L",
            "$3{,}98 \\times 10^{-4}$ mol/L"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par électroneutralité, [CH₃COO⁻] ≈ [H₃O⁺] car [OH⁻] est négligeable."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q5",
          "type": "mcq",
          "prompt": "La concentration de l'acide éthanoïque restant dans S₁ vaut :",
          "options": [
            "$9{,}6 \\times 10^{-3}$ mol/L",
            "$3{,}98 \\times 10^{-4}$ mol/L",
            "$10^{-2}$ mol/L exactement",
            "$0$ mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par conservation de la matière : Ca − [CH₃COO⁻] ≈ 9,6 × 10⁻³ mol/L."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p02_q6",
          "type": "mcq",
          "prompt": "Dans une solution d'acide faible, l'espèce majoritaire est :",
          "options": [
            "L'ion hydronium",
            "L'acide non dissocié (molécules restantes)",
            "L'ion hydroxyde",
            "La base conjuguée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans S₁, [CH₃COOH] = 9,6 × 10⁻³ mol/L écrase les concentrations ioniques : la molécule domine."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03",
      "order": 3,
      "title": "Coefficient d'ionisation et effet de la dilution",
      "summary": "α mesure la fraction dissociée : 4 % pour S₁, et il augmente quand on dilue.",
      "conceptExplanation": "Le coefficient (ou facteur) d'ionisation α est le rapport du nombre de molécules ionisées au nombre total de molécules apportées.\nPour la solution S₁ d'acide éthanoïque, α vaut environ 4 % : sur 100 molécules introduites, seulement 4 se dissocient.\nPour une solution plus diluée ($C'_a = 10^{-4}$ mol/L, pH = 4,4), α atteint 40 %.\nLe facteur d'ionisation augmente donc avec la dilution : c'est l'effet de dilution sur l'ionisation d'un acide faible.",
      "keyRule": "α = molécules ionisées / molécules apportées ; α augmente quand la solution est diluée.",
      "formulas": [
        {
          "name": "Coefficient d'ionisation",
          "formula": "\\alpha = \\frac{n_i}{n_t}",
          "note": "n_i : quantité de molécules ionisées ; n_t : quantité totale apportée. Pour un acide faible, alpha = [H3O+]/Ca dans les cas simples du résumé."
        }
      ],
      "workedExample": {
        "title": "L'acide méthanoïque de la situation d'évaluation",
        "statement": "Une solution d'acide méthanoïque de concentration C = 10⁻² mol/L a un pH de 2,9. L'acide est-il fort ou faible ? Quel est son coefficient d'ionisation ?",
        "methodSteps": [
          "Si l'acide était fort, le pH vaudrait −log C = 2. Or le pH mesuré est 2,9, différent de 2 : l'acide n'est pas fort, il est faible.",
          "[H₃O⁺] = 10^(−2,9) ≈ 1,26 × 10⁻³ mol/L.",
          "α = [H₃O⁺]/C ≈ 0,126, soit environ 12,6 % des molécules dissociées."
        ],
        "conclusion": "L'acide méthanoïque est faible, et la dilution de la solution (20 fois dans la situation) fait augmenter α."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du coefficient d'ionisation",
          "stepTheme": "Définition du coefficient d'ionisation",
          "stepBadge": "Définition du coefficient d'ionisation",
          "paragraphText": "• Coefficient de dissociation α : rapport du nombre de molécules ionisées (ou dissociées) au nombre total de molécules apportées.\nIl est compris entre 0 et 1 : α = 1 pour une ionisation totale.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q1",
            "type": "mcq",
            "prompt": "Le coefficient d'ionisation α est le rapport :",
            "options": [
              "Molécules apportées sur molécules ionisées",
              "Molécules ionisées sur molécules apportées",
              "Ions OH⁻ sur ions H₃O⁺",
              "Volume sur quantité de matière"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du résumé : la fraction des molécules qui se sont dissociées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "α = 4 % pour l'acide éthanoïque à 10⁻² mol/L",
          "stepTheme": "α = 4 % pour l'acide éthanoïque à 10⁻² mol/L",
          "stepBadge": "α = 4 % pour l'acide éthanoïque à 10⁻² mol/L",
          "paragraphText": "Pour S₁, le résumé calcule α à partir de [H₃O⁺] et de Ca.\nConclusion du résumé : sur 100 molécules d'acide éthanoïque introduites, seulement 4 molécules se dissocient.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q2",
            "type": "mcq",
            "prompt": "Pour la solution S₁ d'acide éthanoïque (10⁻² mol/L), le coefficient d'ionisation vaut environ :",
            "options": [
              "4 %",
              "40 %",
              "96 %",
              "100 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "α vaut environ 4 % (rapport de [H₃O⁺] à Ca) : seulement 4 molécules sur 100 se dissocient."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Le test du pH pour reconnaître un acide faible",
          "stepTheme": "Le test du pH pour reconnaître un acide faible",
          "stepBadge": "Le test du pH pour reconnaître un acide faible",
          "paragraphText": "Méthode des exercices : pour un acide de concentration C, si le pH mesuré est différent de −log C, l'acide n'est pas fort.\nPour l'acide méthanoïque (C = 10⁻² mol/L), −log C = 2 alors que le pH vaut 2,9 : il est faible.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q3",
            "type": "mcq",
            "prompt": "Une solution d'acide de concentration 10⁻² mol/L a un pH de 2,9. On en déduit que l'acide est :",
            "options": [
              "Fort, car le pH est acide",
              "Fort, car le pH est proche de 2",
              "Faible, car le pH est différent de −log C = 2",
              "Neutre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le raisonnement de la situation d'évaluation : pH différent de −log C signifie ionisation partielle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La dilution augmente α",
          "stepTheme": "La dilution augmente α",
          "stepBadge": "La dilution augmente α",
          "paragraphText": "Pour une solution d'acide éthanoïque de concentration 10⁻⁴ mol/L (pH = 4,4), le résumé trouve α = 40 %.\nConclusion du résumé : le facteur d'ionisation augmente avec la dilution.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q4",
            "type": "mcq",
            "prompt": "Quand on dilue une solution d'acide faible, son coefficient d'ionisation :",
            "options": [
              "Diminue",
              "Reste constant",
              "Devient nul",
              "Augmente"
            ],
            "correctAnswerIndex": 3,
            "explanation": "De 4 % à 10⁻² mol/L, α passe à 40 % à 10⁻⁴ mol/L : il augmente avec la dilution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Diluer ne rend pas l'acide fort",
          "stepTheme": "Diluer ne rend pas l'acide fort",
          "stepBadge": "Diluer ne rend pas l'acide fort",
          "paragraphText": "Piège : même très dilué, un acide faible ne devient pas fort : α augmente mais reste inférieur à 1.\nÀ 10⁻⁴ mol/L, α = 40 % : plus de la moitié des molécules restent non dissociées.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q5",
            "type": "mcq",
            "prompt": "À 10⁻⁴ mol/L, l'acide éthanoïque (α = 40 %) est :",
            "options": [
              "Toujours un acide faible, partiellement ionisé",
              "Devenu un acide fort",
              "Totalement ionisé",
              "Devenu une base"
            ],
            "correctAnswerIndex": 0,
            "explanation": "α = 40 % < 100 % : l'ionisation reste partielle, l'acide reste faible."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "α d'un acide fort",
          "stepTheme": "α d'un acide fort",
          "stepBadge": "α d'un acide fort",
          "paragraphText": "Par contraste, un acide fort est totalement ionisé : son coefficient d'ionisation vaut 1 (100 %).\nC'est le cas de l'acide chlorhydrique, qui conduit fortement le courant (70 mA à 0,1 mol/L).",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q6",
            "type": "mcq",
            "prompt": "Pour un acide fort en solution aqueuse, le coefficient d'ionisation vaut :",
            "options": [
              "0",
              "1 (ionisation totale)",
              "0,04",
              "Il dépend du pH seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un acide fort est totalement dissocié : toutes les molécules apportées sont ionisées, donc α = 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q1",
          "type": "mcq",
          "prompt": "Le coefficient d'ionisation α est le rapport :",
          "options": [
            "Molécules apportées sur molécules ionisées",
            "Molécules ionisées sur molécules apportées",
            "Ions OH⁻ sur ions H₃O⁺",
            "Volume sur quantité de matière"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du résumé : la fraction des molécules qui se sont dissociées."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q2",
          "type": "mcq",
          "prompt": "Pour la solution S₁ d'acide éthanoïque (10⁻² mol/L), le coefficient d'ionisation vaut environ :",
          "options": [
            "4 %",
            "40 %",
            "96 %",
            "100 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "α vaut environ 4 % (rapport de [H₃O⁺] à Ca) : seulement 4 molécules sur 100 se dissocient."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q3",
          "type": "mcq",
          "prompt": "Une solution d'acide de concentration 10⁻² mol/L a un pH de 2,9. On en déduit que l'acide est :",
          "options": [
            "Fort, car le pH est acide",
            "Fort, car le pH est proche de 2",
            "Faible, car le pH est différent de −log C = 2",
            "Neutre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le raisonnement de la situation d'évaluation : pH différent de −log C signifie ionisation partielle."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q4",
          "type": "mcq",
          "prompt": "Quand on dilue une solution d'acide faible, son coefficient d'ionisation :",
          "options": [
            "Diminue",
            "Reste constant",
            "Devient nul",
            "Augmente"
          ],
          "correctAnswerIndex": 3,
          "explanation": "De 4 % à 10⁻² mol/L, α passe à 40 % à 10⁻⁴ mol/L : il augmente avec la dilution."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q5",
          "type": "mcq",
          "prompt": "À 10⁻⁴ mol/L, l'acide éthanoïque (α = 40 %) est :",
          "options": [
            "Toujours un acide faible, partiellement ionisé",
            "Devenu un acide fort",
            "Totalement ionisé",
            "Devenu une base"
          ],
          "correctAnswerIndex": 0,
          "explanation": "α = 40 % < 100 % : l'ionisation reste partielle, l'acide reste faible."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p03_q6",
          "type": "mcq",
          "prompt": "Pour un acide fort en solution aqueuse, le coefficient d'ionisation vaut :",
          "options": [
            "0",
            "1 (ionisation totale)",
            "0,04",
            "Il dépend du pH seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un acide fort est totalement dissocié : toutes les molécules apportées sont ionisées, donc α = 1."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04",
      "order": 4,
      "title": "L'ion éthanoate, une base faible",
      "summary": "L'éthanoate de sodium se dissout totalement, mais l'ion éthanoate ne réagit que partiellement avec l'eau.",
      "conceptExplanation": "L'éthanoate de sodium (acétate de sodium) CH₃COONa est un solide ionique blanc qui se dissocie totalement dans l'eau : CH₃COONa → CH₃COO⁻ + Na⁺ ; cette dissolution est très exothermique.\nDans la solution, les ions éthanoate formés réagissent avec des molécules d'eau pour donner des molécules d'acide éthanoïque : CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻.\nCette réaction est partielle (limitée) : l'ion éthanoate est donc une base faible.\nUne base est dite faible en solution aqueuse si sa réaction avec l'eau est partielle.",
      "keyRule": "Ne pas confondre : dissolution totale du sel, mais réaction partielle de l'ion éthanoate avec l'eau.",
      "formulas": [
        {
          "name": "Dissolution de l'éthanoate de sodium",
          "formula": "\\mathrm{CH_3COONa \\xrightarrow{H_2O} CH_3COO^- + Na^+}",
          "note": "Réaction totale."
        },
        {
          "name": "Réaction de l'ion éthanoate avec l'eau",
          "formula": "\\mathrm{CH_3COO^- + H_2O \\rightleftharpoons CH_3COOH + OH^-}",
          "note": "Réaction partielle : l'ion éthanoate est une base faible."
        }
      ],
      "workedExample": {
        "title": "Dissolution puis réaction avec l'eau (exercice 3)",
        "statement": "On dissout de l'éthanoate de sodium dans l'eau. Écris l'équation de dissolution, précise le rôle de l'eau dans la réaction de l'ion éthanoate et la nature de la solution.",
        "methodSteps": [
          "Dissolution totale : CH₃COONa → CH₃COO⁻ + Na⁺.",
          "L'ion éthanoate réagit avec l'eau : CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ ; l'eau cède un proton H⁺ à l'ion éthanoate, elle joue le rôle d'acide.",
          "La réaction produit des ions OH⁻ : la solution d'éthanoate de sodium est basique."
        ],
        "conclusion": "Ce sont les réponses de la solution de l'exercice 3 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'éthanoate de sodium, un solide ionique",
          "stepTheme": "L'éthanoate de sodium, un solide ionique",
          "stepBadge": "L'éthanoate de sodium, un solide ionique",
          "paragraphText": "L'éthanoate de sodium, ou acétate de sodium, a pour formule CH₃COONa.\nLe résumé précise que c'est un solide ionique de couleur blanche.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q1",
            "type": "mcq",
            "prompt": "L'éthanoate de sodium est :",
            "options": [
              "Un solide ionique blanc de formule CH₃COONa",
              "Un liquide incolore",
              "Un gaz",
              "Un solide moléculaire jaune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la présentation du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une dissolution totale et très exothermique",
          "stepTheme": "Une dissolution totale et très exothermique",
          "stepBadge": "Une dissolution totale et très exothermique",
          "paragraphText": "L'éthanoate de sodium se dissocie dans l'eau au cours d'une réaction chimique totale : CH₃COONa → CH₃COO⁻ + Na⁺.\nLe résumé ajoute que cette dissolution est une réaction chimique très exothermique.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q2",
            "type": "mcq",
            "prompt": "La dissolution de l'éthanoate de sodium dans l'eau est :",
            "options": [
              "Partielle et endothermique",
              "Totale et très exothermique",
              "Impossible",
              "Totale et sans dégagement de chaleur mentionné"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé la décrit comme une réaction totale, très exothermique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'ion éthanoate réagit avec l'eau",
          "stepTheme": "L'ion éthanoate réagit avec l'eau",
          "stepBadge": "L'ion éthanoate réagit avec l'eau",
          "paragraphText": "Dans la solution, les ions CH₃COO⁻ réagissent avec des molécules d'eau pour donner des molécules d'acide éthanoïque CH₃COOH et des ions OH⁻.\nC'est cette réaction, et non la dissolution, qui est partielle.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q3",
            "type": "mcq",
            "prompt": "En réagissant avec l'eau, l'ion éthanoate donne :",
            "options": [
              "De l'acide chlorhydrique",
              "Des ions H₃O⁺",
              "De l'acide éthanoïque et des ions OH⁻",
              "Du dioxyde de carbone"
            ],
            "correctAnswerIndex": 2,
            "explanation": "CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ : les produits sont l'acide éthanoïque et l'ion hydroxyde."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Définition d'une base faible",
          "stepTheme": "Définition d'une base faible",
          "stepBadge": "Définition d'une base faible",
          "paragraphText": "• Base faible : base dont la réaction avec l'eau, en solution aqueuse, est partielle (elle n'est pas totale).\nExemples du résumé : ammoniac, méthylamine, ion carbonate CO₃²⁻, ion propanoate, ion hypochlorite ClO⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q4",
            "type": "mcq",
            "prompt": "Une base est dite faible en solution aqueuse si :",
            "options": [
              "Elle est insoluble",
              "Elle est diluée",
              "Elle ne contient pas d'ions",
              "Sa réaction avec l'eau est partielle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la définition du résumé, symétrique de celle d'un acide faible."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Reconnaître les bases faibles",
          "stepTheme": "Reconnaître les bases faibles",
          "stepBadge": "Reconnaître les bases faibles",
          "paragraphText": "Les bases faibles citées par le résumé sont souvent des anions (bases conjuguées d'acides faibles) ou des molécules azotées.\nL'ammoniac NH₃ et la méthylamine en font partie.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces espèces est une base faible citée dans le résumé ?",
            "options": [
              "L'ammoniac NH₃",
              "L'ion hydroxyde de la soude",
              "L'ion sodium",
              "L'ion chlorure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé cite l'ammoniac, la méthylamine, l'ion carbonate, l'ion propanoate et l'ion hypochlorite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La solution d'éthanoate de sodium est basique",
          "stepTheme": "La solution d'éthanoate de sodium est basique",
          "stepBadge": "La solution d'éthanoate de sodium est basique",
          "paragraphText": "La réaction de l'ion éthanoate avec l'eau produit des ions OH⁻ : la solution est basique.\nSon pH mesuré dans l'étude quantitative est de 8,4 pour une concentration de 10⁻² mol/L, donc supérieur à 7.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q6",
            "type": "mcq",
            "prompt": "La solution aqueuse d'éthanoate de sodium est :",
            "options": [
              "Acide",
              "Basique, car la réaction avec l'eau produit des ions OH⁻",
              "Neutre",
              "Sans ions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion de l'exercice 3 : la production d'ions OH⁻ rend la solution basique (pH = 8,4)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q1",
          "type": "mcq",
          "prompt": "L'éthanoate de sodium est :",
          "options": [
            "Un solide ionique blanc de formule CH₃COONa",
            "Un liquide incolore",
            "Un gaz",
            "Un solide moléculaire jaune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la présentation du résumé."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q2",
          "type": "mcq",
          "prompt": "La dissolution de l'éthanoate de sodium dans l'eau est :",
          "options": [
            "Partielle et endothermique",
            "Totale et très exothermique",
            "Impossible",
            "Totale et sans dégagement de chaleur mentionné"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé la décrit comme une réaction totale, très exothermique."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q3",
          "type": "mcq",
          "prompt": "En réagissant avec l'eau, l'ion éthanoate donne :",
          "options": [
            "De l'acide chlorhydrique",
            "Des ions H₃O⁺",
            "De l'acide éthanoïque et des ions OH⁻",
            "Du dioxyde de carbone"
          ],
          "correctAnswerIndex": 2,
          "explanation": "CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ : les produits sont l'acide éthanoïque et l'ion hydroxyde."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q4",
          "type": "mcq",
          "prompt": "Une base est dite faible en solution aqueuse si :",
          "options": [
            "Elle est insoluble",
            "Elle est diluée",
            "Elle ne contient pas d'ions",
            "Sa réaction avec l'eau est partielle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la définition du résumé, symétrique de celle d'un acide faible."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces espèces est une base faible citée dans le résumé ?",
          "options": [
            "L'ammoniac NH₃",
            "L'ion hydroxyde de la soude",
            "L'ion sodium",
            "L'ion chlorure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé cite l'ammoniac, la méthylamine, l'ion carbonate, l'ion propanoate et l'ion hypochlorite."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p04_q6",
          "type": "mcq",
          "prompt": "La solution aqueuse d'éthanoate de sodium est :",
          "options": [
            "Acide",
            "Basique, car la réaction avec l'eau produit des ions OH⁻",
            "Neutre",
            "Sans ions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion de l'exercice 3 : la production d'ions OH⁻ rend la solution basique (pH = 8,4)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05",
      "order": 5,
      "title": "Étude quantitative d'une solution de base faible",
      "summary": "La solution S₂ d'éthanoate de sodium : pH = 8,4 et seulement 25 ions sur 100 000 réagissent.",
      "conceptExplanation": "Pour la solution S₂ d'éthanoate de sodium de concentration $C_b = 10^{-2}$ mol/L et de pH = 8,4 à 25 °C, les espèces présentes sont les ions H₃O⁺, OH⁻, Na⁺ et CH₃COO⁻, et les molécules H₂O et CH₃COOH.\nOn obtient $[H_3O^+] = 3{,}98 \\times 10^{-9}$ mol/L, $[OH^-] = 2{,}51 \\times 10^{-6}$ mol/L, $[Na^+] = C_b = 10^{-2}$ mol/L et, par conservation, $[CH_3COOH] = [OH^-] = 2{,}51 \\times 10^{-6}$ mol/L.\nLe coefficient de dissociation vaut α = 2,51 × 10⁻⁶/10⁻² ≈ 0,00025 : sur 100 000 ions éthanoate introduits, seulement 25 ont réagi avec l'eau.",
      "keyRule": "Pour une base faible : [OH⁻] donne la quantité ayant réagi ; α = [OH⁻]/Cb.",
      "formulas": [
        {
          "name": "Conservation de la matière (solution de base faible)",
          "formula": "C_b = \\mathrm{[CH_3COO^-]} + \\mathrm{[CH_3COOH]}",
          "note": "Avec [CH₃COOH] = [OH⁻] d'après l'étude du résumé."
        }
      ],
      "workedExample": {
        "title": "Les concentrations de la solution S₂",
        "statement": "Solution S₂ : Cb = 10⁻² mol/L, pH = 8,4. Détermine [H₃O⁺], [OH⁻], [Na⁺] et [CH₃COOH], puis α.",
        "methodSteps": [
          "[H₃O⁺] = 10^(−8,4) ≈ 3,98 × 10⁻⁹ mol/L.",
          "[OH⁻] = Ke/[H₃O⁺] ≈ 2,51 × 10⁻⁶ mol/L.",
          "[Na⁺] = Cb = 10⁻² mol/L (dissolution totale du sel).",
          "[CH₃COOH] = [OH⁻] = 2,51 × 10⁻⁶ mol/L, et α ≈ 0,00025 (rapport de [OH⁻] à Cb)."
        ],
        "conclusion": "Seulement 25 ions sur 100 000 ont réagi : la réaction de l'ion éthanoate avec l'eau est très limitée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Inventaire des espèces de S₂",
          "stepTheme": "Inventaire des espèces de S₂",
          "stepBadge": "Inventaire des espèces de S₂",
          "paragraphText": "Le résumé liste pour S₂ : ions H₃O⁺, OH⁻, Na⁺ et CH₃COO⁻ ; molécules H₂O et CH₃COOH.\nLa présence de CH₃COOH prouve que l'ion éthanoate a réagi avec l'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q1",
            "type": "mcq",
            "prompt": "Quelle espèce moléculaire, autre que l'eau, est présente dans la solution S₂ d'éthanoate de sodium ?",
            "options": [
              "CH₃COOH, formé par la réaction de l'ion éthanoate avec l'eau",
              "NaOH",
              "HCl",
              "CH₃COONa non dissous"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'inventaire du résumé mentionne CH₃COOH : il provient de la réaction CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Un pH basique mais modéré",
          "stepTheme": "Un pH basique mais modéré",
          "stepBadge": "Un pH basique mais modéré",
          "paragraphText": "Le pH de S₂ vaut 8,4 à 25 °C : la solution est basique, mais faiblement.\nÀ concentration égale, la soude (base forte) donnerait un pH de 12 : l'écart illustre le caractère faible de la base.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q2",
            "type": "mcq",
            "prompt": "Le pH de la solution S₂ d'éthanoate de sodium (10⁻² mol/L) vaut :",
            "options": [
              "3,4",
              "8,4",
              "12",
              "5,6"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la valeur mesurée donnée dans le résumé pour l'étude quantitative de S₂."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "[OH⁻] par le produit ionique",
          "stepTheme": "[OH⁻] par le produit ionique",
          "stepBadge": "[OH⁻] par le produit ionique",
          "paragraphText": "Du pH on tire $[H_3O^+] = 3{,}98 \\times 10^{-9}$ mol/L, puis $[OH^-] = K_e/[H_3O^+] = 2{,}51 \\times 10^{-6}$ mol/L.\nC'est [OH⁻] qui mesure la quantité d'ions éthanoate ayant réagi.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q3",
            "type": "mcq",
            "prompt": "Dans la solution S₂, la concentration en ions hydroxyde vaut :",
            "options": [
              "$10^{-2}$ mol/L",
              "$3{,}98 \\times 10^{-9}$ mol/L",
              "$2{,}51 \\times 10^{-6}$ mol/L",
              "$8{,}4$ mol/L"
            ],
            "correctAnswerIndex": 2,
            "explanation": "[OH⁻] = Ke/[H₃O⁺] ≈ 2,51 × 10⁻⁶ mol/L, d'après l'exploitation du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "[Na⁺] égale à la concentration apportée",
          "stepTheme": "[Na⁺] égale à la concentration apportée",
          "stepBadge": "[Na⁺] égale à la concentration apportée",
          "paragraphText": "La dissolution du sel étant totale, $[Na^+] = C_b = 10^{-2}$ mol/L.\nL'ion sodium est spectateur : il ne réagit pas avec l'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q4",
            "type": "mcq",
            "prompt": "Dans la solution S₂, la concentration des ions sodium vaut :",
            "options": [
              "$2{,}51 \\times 10^{-6}$ mol/L",
              "0 mol/L",
              "$3{,}98 \\times 10^{-9}$ mol/L",
              "$10^{-2}$ mol/L, égale à Cb"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dissolution totale donne [Na⁺] = Cb = 10⁻² mol/L : c'est une donnée de l'étude du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "[CH₃COOH] égale à [OH⁻]",
          "stepTheme": "[CH₃COOH] égale à [OH⁻]",
          "stepBadge": "[CH₃COOH] égale à [OH⁻]",
          "paragraphText": "La conservation de la matière et l'électroneutralité conduisent, dans le résumé, à $[CH_3COOH] = [OH^-] = 2{,}51 \\times 10^{-6}$ mol/L.\nChaque ion éthanoate qui réagit produit en effet une molécule CH₃COOH et un ion OH⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q5",
            "type": "mcq",
            "prompt": "Dans S₂, la concentration de l'acide éthanoïque formé vaut :",
            "options": [
              "$2{,}51 \\times 10^{-6}$ mol/L, égale à [OH⁻]",
              "$10^{-2}$ mol/L",
              "$9{,}6 \\times 10^{-3}$ mol/L",
              "0 mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la conservation de la matière du résumé : [CH₃COOH] = [OH⁻] = 2,51 × 10⁻⁶ mol/L."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "α = 0,00025 : 25 ions sur 100 000",
          "stepTheme": "α = 0,00025 : 25 ions sur 100 000",
          "stepBadge": "α = 0,00025 : 25 ions sur 100 000",
          "paragraphText": "Le coefficient de dissociation de S₂ vaut α ≈ 0,00025.\nLe résumé le traduit ainsi : sur 100 000 ions éthanoate introduits, seulement 25 ions ont réagi avec l'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q6",
            "type": "mcq",
            "prompt": "Le coefficient de dissociation de l'ion éthanoate dans S₂ vaut environ :",
            "options": [
              "0,25",
              "0,00025 (25 ions sur 100 000 réagissent)",
              "0,04",
              "1"
            ],
            "correctAnswerIndex": 1,
            "explanation": "α ≈ 0,00025 (rapport de [OH⁻] à Cb) : la réaction avec l'eau est très partielle, l'ion éthanoate est une base faible."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q1",
          "type": "mcq",
          "prompt": "Quelle espèce moléculaire, autre que l'eau, est présente dans la solution S₂ d'éthanoate de sodium ?",
          "options": [
            "CH₃COOH, formé par la réaction de l'ion éthanoate avec l'eau",
            "NaOH",
            "HCl",
            "CH₃COONa non dissous"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'inventaire du résumé mentionne CH₃COOH : il provient de la réaction CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q2",
          "type": "mcq",
          "prompt": "Le pH de la solution S₂ d'éthanoate de sodium (10⁻² mol/L) vaut :",
          "options": [
            "3,4",
            "8,4",
            "12",
            "5,6"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la valeur mesurée donnée dans le résumé pour l'étude quantitative de S₂."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q3",
          "type": "mcq",
          "prompt": "Dans la solution S₂, la concentration en ions hydroxyde vaut :",
          "options": [
            "$10^{-2}$ mol/L",
            "$3{,}98 \\times 10^{-9}$ mol/L",
            "$2{,}51 \\times 10^{-6}$ mol/L",
            "$8{,}4$ mol/L"
          ],
          "correctAnswerIndex": 2,
          "explanation": "[OH⁻] = Ke/[H₃O⁺] ≈ 2,51 × 10⁻⁶ mol/L, d'après l'exploitation du résumé."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q4",
          "type": "mcq",
          "prompt": "Dans la solution S₂, la concentration des ions sodium vaut :",
          "options": [
            "$2{,}51 \\times 10^{-6}$ mol/L",
            "0 mol/L",
            "$3{,}98 \\times 10^{-9}$ mol/L",
            "$10^{-2}$ mol/L, égale à Cb"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dissolution totale donne [Na⁺] = Cb = 10⁻² mol/L : c'est une donnée de l'étude du résumé."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q5",
          "type": "mcq",
          "prompt": "Dans S₂, la concentration de l'acide éthanoïque formé vaut :",
          "options": [
            "$2{,}51 \\times 10^{-6}$ mol/L, égale à [OH⁻]",
            "$10^{-2}$ mol/L",
            "$9{,}6 \\times 10^{-3}$ mol/L",
            "0 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la conservation de la matière du résumé : [CH₃COOH] = [OH⁻] = 2,51 × 10⁻⁶ mol/L."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p05_q6",
          "type": "mcq",
          "prompt": "Le coefficient de dissociation de l'ion éthanoate dans S₂ vaut environ :",
          "options": [
            "0,25",
            "0,00025 (25 ions sur 100 000 réagissent)",
            "0,04",
            "1"
          ],
          "correctAnswerIndex": 1,
          "explanation": "α ≈ 0,00025 (rapport de [OH⁻] à Cb) : la réaction avec l'eau est très partielle, l'ion éthanoate est une base faible."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06",
      "order": 6,
      "title": "Équilibre chimique et applications",
      "summary": "Deux réactions inverses simultanées conduisent à l'équilibre ; applications à l'éthylamine et au chlorure d'ammonium.",
      "conceptExplanation": "Dans toute solution aqueuse d'acide éthanoïque, deux réactions inverses se produisent simultanément : la dissociation de l'acide et la recombinaison des ions.\nCes deux réactions inverses se limitent mutuellement et conduisent à un état d'équilibre chimique, traduit par la double flèche de l'équation-bilan.\nApplications : l'éthylamine est une base faible car, pour C = 10⁻² mol/L, 14 + log C = 12 diffère de son pH mesuré (11,3) ; l'ion ammonium NH₄⁺ du chlorure d'ammonium est un acide faible, et sa dilution fait passer le pH de 5,3 à 5,8 tout en augmentant α.",
      "keyRule": "Équilibre chimique = deux réactions inverses simultanées qui se limitent mutuellement.",
      "formulas": [
        {
          "name": "Réaction de l'ion ammonium avec l'eau",
          "formula": "\\mathrm{NH_4^+ + H_2O \\rightleftharpoons NH_3 + H_3O^+}",
          "note": "L'ion ammonium est un acide faible (exercice 4)."
        },
        {
          "name": "Réaction de l'éthylamine avec l'eau",
          "formula": "\\mathrm{C_2H_5NH_2 + H_2O \\rightleftharpoons C_2H_5NH_3^+ + OH^-}",
          "note": "L'éthylamine est une base faible (exercice 5)."
        }
      ],
      "workedExample": {
        "title": "Préparer la solution de chlorure d'ammonium (exercice 4)",
        "statement": "On prépare 1 L de solution S₁ de chlorure d'ammonium de concentration C₁ = 5 × 10⁻² mol/L. Quelle masse de solide faut-il peser (M(N) = 14, M(H) = 1, M(Cl) = 35,5) ?",
        "methodSteps": [
          "M(NH₄Cl) = 14 + 4 × 1 + 35,5 = 53,5 g/mol.",
          "n = C₁ × V = 5 × 10⁻² × 1 = 5 × 10⁻² mol.",
          "m = n × M = 53,5 × 5 × 10⁻² ≈ 2,7 g."
        ],
        "conclusion": "Il faut peser 2,7 g de solide : c'est la valeur du corrigé de l'exercice 4 (« Peser 2,7 g de solide »)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux réactions inverses simultanées",
          "stepTheme": "Deux réactions inverses simultanées",
          "stepBadge": "Deux réactions inverses simultanées",
          "paragraphText": "Dans une solution d'acide éthanoïque, la dissociation (1) et la recombinaison des ions (2) se produisent simultanément.\nLe résumé précise que ces deux réactions inverses se limitent mutuellement.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q1",
            "type": "mcq",
            "prompt": "Dans une solution d'acide faible, les deux réactions inverses simultanées :",
            "options": [
              "Se renforcent l'une l'autre",
              "Se limitent mutuellement et conduisent à un équilibre chimique",
              "S'arrêtent dès que l'acide est dissous",
              "N'existent que pour les acides forts"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la notion d'équilibre chimique développée dans la partie 3 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'état d'équilibre chimique",
          "stepTheme": "L'état d'équilibre chimique",
          "stepBadge": "L'état d'équilibre chimique",
          "paragraphText": "• Équilibre chimique : état atteint quand les deux réactions inverses se compensent, avec coexistence des réactifs et des produits.\nIl se traduit dans l'équation-bilan par une double flèche ⇌.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q2",
            "type": "mcq",
            "prompt": "L'équilibre chimique d'un acide faible en solution se reconnaît dans l'équation-bilan par :",
            "options": [
              "Une flèche simple",
              "Un signe égal",
              "Une double flèche, avec coexistence de l'acide et de ses ions",
              "L'absence d'eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La double flèche traduit les deux réactions inverses qui se limitent mutuellement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Le test 14 + log C pour une base (exercice 5)",
          "stepTheme": "Le test 14 + log C pour une base (exercice 5)",
          "stepBadge": "Le test 14 + log C pour une base (exercice 5)",
          "paragraphText": "Pour une base de concentration C, le corrigé de l'exercice 5 compare le pH mesuré à 14 + log C.\nPour l'éthylamine (C = 10⁻² mol/L), 14 + log C = 12 alors que le pH mesuré vaut 11,3 : l'éthylamine est une base faible.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q3",
            "type": "mcq",
            "prompt": "L'éthylamine (C = 10⁻² mol/L, pH = 11,3) est une base faible car :",
            "options": [
              "Son pH est inférieur à 7",
              "14 + log C = 12 est différent du pH mesuré 11,3",
              "Elle est très concentrée",
              "Elle ne réagit pas avec l'eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le raisonnement du corrigé de l'exercice 5 : l'inégalité montre une réaction partielle avec l'eau."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'ion ammonium est un acide faible (exercice 4)",
          "stepTheme": "L'ion ammonium est un acide faible (exercice 4)",
          "stepBadge": "L'ion ammonium est un acide faible (exercice 4)",
          "paragraphText": "La solution S₁ de chlorure d'ammonium (C₁ = 5 × 10⁻² mol/L) a un pH de 5,3.\nLe corrigé montre que l'ion ammonium NH₄⁺ est un acide faible : NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺, ce qui explique le caractère acide de la solution.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q4",
            "type": "mcq",
            "prompt": "La solution de chlorure d'ammonium est acide (pH = 5,3) parce que :",
            "options": [
              "L'ion chlorure réagit avec l'eau",
              "L'ion ammonium NH₄⁺, acide faible, cède un proton à l'eau",
              "Le chlorure d'ammonium contient de l'acide chlorhydrique",
              "L'ion sodium est absent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après l'exercice 3 et le corrigé de l'exercice 4, c'est la réaction de NH₄⁺ avec l'eau qui produit les ions H₃O⁺."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Diluer la solution de NH₄Cl (exercice 4)",
          "stepTheme": "Diluer la solution de NH₄Cl (exercice 4)",
          "stepBadge": "Diluer la solution de NH₄Cl (exercice 4)",
          "paragraphText": "On ajoute 90 mL d'eau distillée à 10 mL de S₁ : la solution est diluée 10 fois.\nLa nouvelle concentration vaut donc C₂ = C₁/10 = 5 × 10⁻³ mol/L, et le pH mesuré passe de 5,3 à 5,8.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q5",
            "type": "mcq",
            "prompt": "Après ajout de 90 mL d'eau à 10 mL de S₁ (C₁ = 5 × 10⁻² mol/L), la concentration C₂ vaut :",
            "options": [
              "$5 \\times 10^{-2}$ mol/L",
              "$5 \\times 10^{-1}$ mol/L",
              "$5 \\times 10^{-3}$ mol/L",
              "$4{,}5 \\times 10^{-2}$ mol/L"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le volume passe de 10 mL à 100 mL : dilution par 10, donc C₂ = 5 × 10⁻³ mol/L (exercice 4)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l'eau peut être acide ou basique (exercice 3)",
          "stepTheme": "Le rôle de l'eau peut être acide ou basique (exercice 3)",
          "stepBadge": "Le rôle de l'eau peut être acide ou basique (exercice 3)",
          "paragraphText": "Dans l'exercice 3, l'eau cède un proton à l'ion éthanoate : elle joue le rôle d'acide.\nAvec l'ion méthylammonium, l'eau arrache un proton : elle joue le rôle de base, et la solution obtenue est acide.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q6",
            "type": "mcq",
            "prompt": "Dans la réaction de l'ion méthylammonium avec l'eau, l'eau joue le rôle :",
            "options": [
              "D'acide, car elle cède un proton",
              "De solvant inerte uniquement",
              "D'oxydant",
              "De base, car elle arrache un proton à l'ion"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la réponse de la solution de l'exercice 3 : l'eau capte le proton de l'ion méthylammonium, elle est basique dans cette réaction."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q1",
          "type": "mcq",
          "prompt": "Dans une solution d'acide faible, les deux réactions inverses simultanées :",
          "options": [
            "Se renforcent l'une l'autre",
            "Se limitent mutuellement et conduisent à un équilibre chimique",
            "S'arrêtent dès que l'acide est dissous",
            "N'existent que pour les acides forts"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la notion d'équilibre chimique développée dans la partie 3 du résumé."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q2",
          "type": "mcq",
          "prompt": "L'équilibre chimique d'un acide faible en solution se reconnaît dans l'équation-bilan par :",
          "options": [
            "Une flèche simple",
            "Un signe égal",
            "Une double flèche, avec coexistence de l'acide et de ses ions",
            "L'absence d'eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La double flèche traduit les deux réactions inverses qui se limitent mutuellement."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q3",
          "type": "mcq",
          "prompt": "L'éthylamine (C = 10⁻² mol/L, pH = 11,3) est une base faible car :",
          "options": [
            "Son pH est inférieur à 7",
            "14 + log C = 12 est différent du pH mesuré 11,3",
            "Elle est très concentrée",
            "Elle ne réagit pas avec l'eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le raisonnement du corrigé de l'exercice 5 : l'inégalité montre une réaction partielle avec l'eau."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q4",
          "type": "mcq",
          "prompt": "La solution de chlorure d'ammonium est acide (pH = 5,3) parce que :",
          "options": [
            "L'ion chlorure réagit avec l'eau",
            "L'ion ammonium NH₄⁺, acide faible, cède un proton à l'eau",
            "Le chlorure d'ammonium contient de l'acide chlorhydrique",
            "L'ion sodium est absent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après l'exercice 3 et le corrigé de l'exercice 4, c'est la réaction de NH₄⁺ avec l'eau qui produit les ions H₃O⁺."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q5",
          "type": "mcq",
          "prompt": "Après ajout de 90 mL d'eau à 10 mL de S₁ (C₁ = 5 × 10⁻² mol/L), la concentration C₂ vaut :",
          "options": [
            "$5 \\times 10^{-2}$ mol/L",
            "$5 \\times 10^{-1}$ mol/L",
            "$5 \\times 10^{-3}$ mol/L",
            "$4{,}5 \\times 10^{-2}$ mol/L"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le volume passe de 10 mL à 100 mL : dilution par 10, donc C₂ = 5 × 10⁻³ mol/L (exercice 4)."
        },
        {
          "id": "terminale_c_chimie_l08_acide_faible_base_faible_p06_q6",
          "type": "mcq",
          "prompt": "Dans la réaction de l'ion méthylammonium avec l'eau, l'eau joue le rôle :",
          "options": [
            "D'acide, car elle cède un proton",
            "De solvant inerte uniquement",
            "D'oxydant",
            "De base, car elle arrache un proton à l'ion"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la réponse de la solution de l'exercice 3 : l'eau capte le proton de l'ion méthylammonium, elle est basique dans cette réaction."
        }
      ]
    }
  ]
};
