import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 9 : Couple acide/base – Classification » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1326
export const CHIMIE_TLE_CD_L09_COUPLE_ACIDE_BASE: CurriculumChapter = {
  "id": "terminale_c_chimie_l09_couple_acide_base",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 9,
  "title": "Leçon 9 : Couple acide/base – Classification",
  "summary": "On définit les acides et les bases selon Brönsted, la notion de couple acide/base, la constante d'acidité Ka et le pKa, puis les domaines de prédominance et la classification des couples dans l'eau.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1326",
  "points": [
    {
      "id": "terminale_c_chimie_l09_couple_acide_base_p01",
      "order": 1,
      "title": "Acides et bases selon Brönsted, couple acide/base",
      "summary": "Un acide libère un proton, une base le capte ; les deux espèces conjuguées forment un couple.",
      "conceptExplanation": "Selon Brönsted, un acide est une espèce chimique capable de libérer un ou plusieurs protons H⁺, et une base est une espèce chimique capable de capter un ou plusieurs protons H⁺.\nOn écrit symboliquement AH ⇌ A⁻ + H⁺ : dans le sens (1) l'acide AH cède le proton, dans le sens (2) la base A⁻ capte le proton.\nDeux espèces conjuguées qui échangent ainsi un proton constituent un couple acide/base, noté Acide/Base : par exemple CH₃COOH/CH₃COO⁻ ou NH₄⁺/NH₃.\nL'eau intervient dans deux couples, H₃O⁺/H₂O et H₂O/OH⁻ : elle est à la fois acide et base, on dit qu'elle est amphotère (un ampholyte).",
      "keyRule": "Couple acide/base = deux espèces conjuguées qui diffèrent d'un proton H⁺ ; notation Acide/Base.",
      "formulas": [
        {
          "name": "Schéma d'un couple acide/base",
          "formula": "\\mathrm{AH \\rightleftharpoons A^- + H^+}",
          "note": "AH est l'acide, A⁻ sa base conjuguée."
        }
      ],
      "workedExample": {
        "title": "Les couples de l'exercice 3",
        "statement": "Écris les couples acide/base associés aux acides faibles HCOOH, CH₂ClCOOH et (CH₃)₃NH⁺.",
        "methodSteps": [
          "Chaque acide perd un proton H⁺ pour donner sa base conjuguée.",
          "HCOOH donne l'ion méthanoate HCOO⁻ : couple HCOOH/HCOO⁻.",
          "CH₂ClCOOH donne l'ion monochloroéthanoate CH₂ClCOO⁻.",
          "(CH₃)₃NH⁺ donne (CH₃)₃N (l'énoncé le nomme « ion triméthylammonium » dans le tableau, il s'agit de la triméthylamine)."
        ],
        "conclusion": "Ce sont les couples listés dans la solution de l'exercice 3 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un acide libère un proton",
          "stepTheme": "Un acide libère un proton",
          "stepBadge": "Un acide libère un proton",
          "paragraphText": "• Acide (selon Brönsted) : espèce chimique capable de libérer un ou plusieurs protons H⁺.\nC'est la définition demandée à l'exercice 1 du résumé.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p01_q1",
            "type": "mcq",
            "prompt": "Selon Brönsted, un acide est une espèce chimique capable de :",
            "options": [
              "Libérer un ou plusieurs protons H⁺",
              "Capter un ou plusieurs protons H⁺",
              "Libérer des électrons",
              "Capter des ions OH⁻"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du résumé (et la réponse de l'exercice 1)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Une base capte un proton",
          "stepTheme": "Une base capte un proton",
          "stepBadge": "Une base capte un proton",
          "paragraphText": "• Base (selon Brönsted) : espèce chimique capable de capter un ou plusieurs protons H⁺.\nDans le schéma AH ⇌ A⁻ + H⁺, le sens (2) correspond à la base A⁻ qui capte le proton.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p01_q2",
            "type": "mcq",
            "prompt": "Selon Brönsted, une base est une espèce chimique capable de :",
            "options": [
              "Libérer un proton H⁺",
              "Capter un ou plusieurs protons H⁺",
              "Produire de l'eau",
              "Libérer un ion OH⁻ dans tous les cas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Capter un proton : c'est la définition du résumé, symétrique de celle de l'acide."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le couple acide/base",
          "stepTheme": "Le couple acide/base",
          "stepBadge": "Le couple acide/base",
          "paragraphText": "• Couple acide/base : ensemble de deux espèces chimiques conjuguées qui échangent un proton.\nIl se note Acide/Base, l'acide étant toujours écrit en premier : par exemple CH₃COOH/CH₃COO⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p01_q3",
            "type": "mcq",
            "prompt": "Un couple acide/base est constitué de :",
            "options": [
              "Deux acides différents",
              "Deux bases différentes",
              "Deux espèces conjuguées qui échangent un proton",
              "Un acide et un sel"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du résumé : les deux espèces sont conjuguées et liées par l'échange d'un proton."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Exemples de couples",
          "stepTheme": "Exemples de couples",
          "stepBadge": "Exemples de couples",
          "paragraphText": "Le résumé donne comme exemples : CH₃COOH/CH₃COO⁻, HCOOH/HCOO⁻, CH₂ClCOOH/CH₂ClCOO⁻, NH₄⁺/NH₃, CH₃NH₃⁺/CH₃NH₂ et C₂H₅NH₃⁺/C₂H₅NH₂.\nDans chaque couple, l'acide possède un proton de plus que la base.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p01_q4",
            "type": "mcq",
            "prompt": "Le couple acide/base de l'ammoniac est :",
            "options": [
              "NH₃/NH₂⁻",
              "NH₄⁺/NH₄OH",
              "H₃O⁺/NH₃",
              "NH₄⁺/NH₃"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'acide est l'ion ammonium NH₄⁺, qui perd un proton pour donner NH₃ : couple NH₄⁺/NH₃."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les deux couples de l'eau",
          "stepTheme": "Les deux couples de l'eau",
          "stepBadge": "Les deux couples de l'eau",
          "paragraphText": "L'ion hydronium peut céder un proton : couple H₃O⁺/H₂O, où l'eau est la base.\nL'ion hydroxyde peut capter un proton : couple H₂O/OH⁻, où l'eau est l'acide.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p01_q5",
            "type": "mcq",
            "prompt": "Dans le couple H₂O/OH⁻, l'eau joue le rôle :",
            "options": [
              "D'acide, car elle peut céder un proton pour donner OH⁻",
              "De base uniquement",
              "De sel",
              "D'indicateur coloré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé le précise : dans ce couple, l'eau est l'acide et OH⁻ sa base conjuguée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'eau est amphotère",
          "stepTheme": "L'eau est amphotère",
          "stepBadge": "L'eau est amphotère",
          "paragraphText": "• Amphotère (ou ampholyte) : espèce capable de se comporter tantôt comme un acide, tantôt comme une base.\nL'eau a ce double comportement grâce à ses deux couples.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p01_q6",
            "type": "mcq",
            "prompt": "On dit que l'eau est amphotère parce que :",
            "options": [
              "Elle est neutre",
              "Elle peut jouer le rôle d'acide dans un couple et de base dans un autre",
              "Elle contient des ions H₃O⁺",
              "Elle dissout les sels"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'eau est la base du couple H₃O⁺/H₂O et l'acide du couple H₂O/OH⁻ : double comportement décrit dans le résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p01_q1",
          "type": "mcq",
          "prompt": "Selon Brönsted, un acide est une espèce chimique capable de :",
          "options": [
            "Libérer un ou plusieurs protons H⁺",
            "Capter un ou plusieurs protons H⁺",
            "Libérer des électrons",
            "Capter des ions OH⁻"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du résumé (et la réponse de l'exercice 1)."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p01_q2",
          "type": "mcq",
          "prompt": "Selon Brönsted, une base est une espèce chimique capable de :",
          "options": [
            "Libérer un proton H⁺",
            "Capter un ou plusieurs protons H⁺",
            "Produire de l'eau",
            "Libérer un ion OH⁻ dans tous les cas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Capter un proton : c'est la définition du résumé, symétrique de celle de l'acide."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p01_q3",
          "type": "mcq",
          "prompt": "Un couple acide/base est constitué de :",
          "options": [
            "Deux acides différents",
            "Deux bases différentes",
            "Deux espèces conjuguées qui échangent un proton",
            "Un acide et un sel"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du résumé : les deux espèces sont conjuguées et liées par l'échange d'un proton."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p01_q4",
          "type": "mcq",
          "prompt": "Le couple acide/base de l'ammoniac est :",
          "options": [
            "NH₃/NH₂⁻",
            "NH₄⁺/NH₄OH",
            "H₃O⁺/NH₃",
            "NH₄⁺/NH₃"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'acide est l'ion ammonium NH₄⁺, qui perd un proton pour donner NH₃ : couple NH₄⁺/NH₃."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p01_q5",
          "type": "mcq",
          "prompt": "Dans le couple H₂O/OH⁻, l'eau joue le rôle :",
          "options": [
            "D'acide, car elle peut céder un proton pour donner OH⁻",
            "De base uniquement",
            "De sel",
            "D'indicateur coloré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé le précise : dans ce couple, l'eau est l'acide et OH⁻ sa base conjuguée."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p01_q6",
          "type": "mcq",
          "prompt": "On dit que l'eau est amphotère parce que :",
          "options": [
            "Elle est neutre",
            "Elle peut jouer le rôle d'acide dans un couple et de base dans un autre",
            "Elle contient des ions H₃O⁺",
            "Elle dissout les sels"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'eau est la base du couple H₃O⁺/H₂O et l'acide du couple H₂O/OH⁻ : double comportement décrit dans le résumé."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l09_couple_acide_base_p02",
      "order": 2,
      "title": "Constante d'acidité Ka et pKa",
      "summary": "Ka = [B][H₃O⁺]/[A] caractérise le couple ; pKa = −log Ka et pH = pKa + log([B]/[A]).",
      "conceptExplanation": "La constante d'acidité Ka d'un couple acide/base dans l'eau est la constante d'équilibre qui régit l'équilibre entre l'acide et sa base conjuguée : $K_a = [B][H_3O^+]/[A]$.\nKa est sans unité, dépend de la température et est indépendante des autres espèces chimiques présentes en solution.\nLe pKa du couple est défini par $\\mathrm{p}K_a = -\\log K_a$, d'où $K_a = 10^{-pKa}$ et la relation $\\mathrm{pH} = \\mathrm{p}K_a + \\log([B]/[A])$.\nExemples à 25 °C : HCOOH/HCOO⁻ (Ka = 1,8 × 10⁻⁴ ; pKa = 3,7), CH₃COOH/CH₃COO⁻ (1,8 × 10⁻⁵ ; 4,7), NH₄⁺/NH₃ (6,3 × 10⁻¹⁰ ; 9,2), CH₃NH₃⁺/CH₃NH₂ (1,9 × 10⁻¹¹ ; 10,7).",
      "keyRule": "Ka = [B][H₃O⁺]/[A] ; pKa = −log Ka ; pH = pKa + log([B]/[A]).",
      "formulas": [
        {
          "name": "Constante d'acidité",
          "formula": "K_a = \\frac{\\mathrm{[B] \\times [H_3O^+]}}{\\mathrm{[A]}}",
          "note": "A est l'acide du couple, B sa base conjuguée."
        },
        {
          "name": "pKa du couple",
          "formula": "\\mathrm{p}K_a = -\\log K_a",
          "note": "Et réciproquement Ka = 10^(−pKa)."
        },
        {
          "name": "Relation pH – pKa",
          "formula": "\\mathrm{pH} = \\mathrm{p}K_a + \\log \\frac{\\mathrm{[B]}}{\\mathrm{[A]}}",
          "note": "Relation fondamentale pour les mélanges acide + base conjuguée."
        }
      ],
      "workedExample": {
        "title": "Lire le tableau des couples à 25 °C",
        "statement": "D'après le tableau du résumé, quels sont le Ka et le pKa du couple CH₃COOH/CH₃COO⁻ ? Et ceux du couple NH₄⁺/NH₃ ?",
        "methodSteps": [
          "CH₃COOH/CH₃COO⁻ : Ka = 1,8 × 10⁻⁵ et pKa = 4,7.",
          "NH₄⁺/NH₃ : Ka = 6,3 × 10⁻¹⁰ et pKa = 9,2.",
          "On vérifie la cohérence : −log(1,8 × 10⁻⁵) ≈ 4,7 et −log(6,3 × 10⁻¹⁰) ≈ 9,2."
        ],
        "conclusion": "Ce sont les valeurs du tableau du résumé, utilisées dans toute la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la constante d'acidité",
          "stepTheme": "Définition de la constante d'acidité",
          "stepBadge": "Définition de la constante d'acidité",
          "paragraphText": "• Constante d'acidité Ka : constante d'équilibre qui régit l'équilibre chimique entre un acide et sa base conjuguée en solution aqueuse.\nChaque couple acide/base possède son Ka, à une température donnée.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p02_q1",
            "type": "mcq",
            "prompt": "La constante d'acidité Ka d'un couple acide/base est :",
            "options": [
              "La constante d'équilibre entre l'acide et sa base conjuguée dans l'eau",
              "La concentration de l'acide",
              "Le pH de la solution",
              "La constante de l'autoprotolyse de l'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du résumé (§3.1)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'expression de Ka",
          "stepTheme": "L'expression de Ka",
          "stepBadge": "L'expression de Ka",
          "paragraphText": "Pour l'équilibre Acide + H₂O ⇌ Base + H₃O⁺, la constante s'écrit $K_a = [B][H_3O^+]/[A]$.\nL'eau, solvant, n'apparaît pas dans l'expression.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p02_q2",
            "type": "mcq",
            "prompt": "Pour le couple A/B, la constante d'acidité s'écrit :",
            "options": [
              "$K_a = [A]/([B][H_3O^+])$",
              "$K_a = [B][H_3O^+]/[A]$",
              "$K_a = [A][H_3O^+]/[B]$",
              "$K_a = [B]/[A]$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'expression donnée au §3.2 du résumé : produits (base et H₃O⁺) sur l'acide."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les propriétés de Ka",
          "stepTheme": "Les propriétés de Ka",
          "stepBadge": "Les propriétés de Ka",
          "paragraphText": "Remarques du résumé : Ka est sans unité ; Ka dépend de la température ; Ka est indépendante des autres espèces chimiques présentes en solution.\nKa ne dépend donc que du couple et de la température.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p02_q3",
            "type": "mcq",
            "prompt": "La constante d'acidité Ka d'un couple donné dépend :",
            "options": [
              "De la concentration de la solution",
              "Des autres espèces présentes",
              "De la température uniquement (pour un couple donné)",
              "Du volume de la solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après les remarques du résumé : Ka est sans unité, dépend de la température et pas des autres espèces."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le pKa du couple",
          "stepTheme": "Le pKa du couple",
          "stepBadge": "Le pKa du couple",
          "paragraphText": "• pKa : $\\mathrm{p}K_a = -\\log K_a$.\nRéciproquement, $K_a = 10^{-pKa}$ : un grand Ka correspond à un petit pKa.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p02_q4",
            "type": "mcq",
            "prompt": "Si le Ka d'un couple vaut 1,8 × 10⁻⁵, son pKa vaut environ :",
            "options": [
              "5,0",
              "−4,7",
              "1,8",
              "4,7"
            ],
            "correctAnswerIndex": 3,
            "explanation": "pKa = −log(1,8 × 10⁻⁵) ≈ 4,7 : c'est la valeur du tableau pour le couple CH₃COOH/CH₃COO⁻."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La relation pH = pKa + log([B]/[A])",
          "stepTheme": "La relation pH = pKa + log([B]/[A])",
          "stepBadge": "La relation pH = pKa + log([B]/[A])",
          "paragraphText": "De l'expression de Ka, le résumé déduit : $\\mathrm{pH} = \\mathrm{p}K_a + \\log([B]/[A])$.\nElle relie le pH d'un mélange au rapport des concentrations de la base et de l'acide du couple.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p02_q5",
            "type": "mcq",
            "prompt": "Dans un mélange où [B] = [A], la relation pH = pKa + log([B]/[A]) donne :",
            "options": [
              "pH = pKa",
              "pH = 7",
              "pH = 0",
              "pH = 2 × pKa"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Si [B] = [A], le rapport vaut 1 et son logarithme est nul : pH = pKa."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser A et B dans Ka",
          "stepTheme": "Ne pas inverser A et B dans Ka",
          "stepBadge": "Ne pas inverser A et B dans Ka",
          "paragraphText": "Piège : dans l'expression de Ka, l'acide A est au dénominateur et la base B au numérateur, avec [H₃O⁺].\nPour le couple NH₄⁺/NH₃, A désigne NH₄⁺ et B désigne NH₃ : Ka = [NH₃][H₃O⁺]/[NH₄⁺] = 6,3 × 10⁻¹⁰.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p02_q6",
            "type": "mcq",
            "prompt": "Le Ka du couple NH₄⁺/NH₃ à 25 °C vaut, d'après le tableau :",
            "options": [
              "1,8 × 10⁻⁴",
              "6,3 × 10⁻¹⁰",
              "1,9 × 10⁻¹¹",
              "1,8 × 10⁻⁵"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau donne Ka = 6,3 × 10⁻¹⁰ (pKa = 9,2) pour le couple ion ammonium/ammoniac."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p02_q1",
          "type": "mcq",
          "prompt": "La constante d'acidité Ka d'un couple acide/base est :",
          "options": [
            "La constante d'équilibre entre l'acide et sa base conjuguée dans l'eau",
            "La concentration de l'acide",
            "Le pH de la solution",
            "La constante de l'autoprotolyse de l'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du résumé (§3.1)."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p02_q2",
          "type": "mcq",
          "prompt": "Pour le couple A/B, la constante d'acidité s'écrit :",
          "options": [
            "$K_a = [A]/([B][H_3O^+])$",
            "$K_a = [B][H_3O^+]/[A]$",
            "$K_a = [A][H_3O^+]/[B]$",
            "$K_a = [B]/[A]$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'expression donnée au §3.2 du résumé : produits (base et H₃O⁺) sur l'acide."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p02_q3",
          "type": "mcq",
          "prompt": "La constante d'acidité Ka d'un couple donné dépend :",
          "options": [
            "De la concentration de la solution",
            "Des autres espèces présentes",
            "De la température uniquement (pour un couple donné)",
            "Du volume de la solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après les remarques du résumé : Ka est sans unité, dépend de la température et pas des autres espèces."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p02_q4",
          "type": "mcq",
          "prompt": "Si le Ka d'un couple vaut 1,8 × 10⁻⁵, son pKa vaut environ :",
          "options": [
            "5,0",
            "−4,7",
            "1,8",
            "4,7"
          ],
          "correctAnswerIndex": 3,
          "explanation": "pKa = −log(1,8 × 10⁻⁵) ≈ 4,7 : c'est la valeur du tableau pour le couple CH₃COOH/CH₃COO⁻."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p02_q5",
          "type": "mcq",
          "prompt": "Dans un mélange où [B] = [A], la relation pH = pKa + log([B]/[A]) donne :",
          "options": [
            "pH = pKa",
            "pH = 7",
            "pH = 0",
            "pH = 2 × pKa"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si [B] = [A], le rapport vaut 1 et son logarithme est nul : pH = pKa."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p02_q6",
          "type": "mcq",
          "prompt": "Le Ka du couple NH₄⁺/NH₃ à 25 °C vaut, d'après le tableau :",
          "options": [
            "1,8 × 10⁻⁴",
            "6,3 × 10⁻¹⁰",
            "1,9 × 10⁻¹¹",
            "1,8 × 10⁻⁵"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau donne Ka = 6,3 × 10⁻¹⁰ (pKa = 9,2) pour le couple ion ammonium/ammoniac."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l09_couple_acide_base_p03",
      "order": 3,
      "title": "Détermination du pKa du couple CH₃COOH/CH₃COO⁻",
      "summary": "Un mélange acide + base conjuguée de pH = 5,4 donne pKa = 4,80 ; le graphe confirme 4,75.",
      "conceptExplanation": "On mélange Va = 10 mL d'acide éthanoïque (Ca = 10⁻² mol/L) et Vb = 40 mL d'éthanoate de sodium (Cb = 10⁻¹ mol/L) ; le pH du mélange est 5,4 à 25 °C.\nL'étude des concentrations donne $[CH_3COO^-] = 8 \\times 10^{-2}$ mol/L et $[CH_3COOH] = 2 \\times 10^{-3}$ mol/L : tout se passe comme si CH₃COOH et CH₃COO⁻ ne réagissaient pas entre eux.\nLe rapport des quantités vaut CbVb/CaVa = 4, compris entre 1/10 et 10, donc $\\mathrm{p}K_a = \\mathrm{pH} - \\log 4 = 5{,}4 - 0{,}60 = 4{,}80$.\nLa vérification expérimentale (mélanges à concentration égale, volume total 100 mL) donne le graphe pH = f(log(Vb/Va)) : une droite de pente 1 et d'ordonnée à l'origine 4,75, d'où pKa = 4,75 et Ka = 1,78 × 10⁻⁵.",
      "keyRule": "Dans un mélange A + B conjuguée : [B] et [A] sont les concentrations apportées (après dilution), et pKa = pH − log([B]/[A]).",
      "formulas": [
        {
          "name": "Concentrations après mélange",
          "formula": "[B] = \\frac{C_b V_b}{V_a + V_b} \\quad ; \\quad [A] = \\frac{C_a V_a}{V_a + V_b}",
          "note": "Concentrations dans le mélange, valables lorsque le rapport des quantités reste entre 1/10 et 10."
        }
      ],
      "workedExample": {
        "title": "Le calcul du pKa du mélange",
        "statement": "Mélange : Va = 10 mL (Ca = 10⁻² mol/L), Vb = 40 mL (Cb = 10⁻¹ mol/L), pH = 5,4. Détermine le pKa du couple.",
        "methodSteps": [
          "Rapport des quantités : CbVb/CaVa = (10⁻¹ × 40)/(10⁻² × 10) = 4, compris entre 1/10 et 10 : la méthode s'applique.",
          "pKa = pH − log([B]/[A]) = pH − log 4.",
          "pKa = 5,4 − 0,60 = 4,80."
        ],
        "conclusion": "pKa = 4,80 : c'est le résultat de l'étude théorique du résumé, proche de la valeur du tableau (4,7)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les concentrations après mélange",
          "stepTheme": "Les concentrations après mélange",
          "stepBadge": "Les concentrations après mélange",
          "paragraphText": "Par l'électroneutralité et la conservation de la matière, le résumé obtient $[CH_3COO^-] = 8 \\times 10^{-2}$ mol/L et $[CH_3COOH] = 2 \\times 10^{-3}$ mol/L.\nCe sont exactement les concentrations qu'auraient les deux espèces sans réaction entre elles : dilution simple.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p03_q1",
            "type": "mcq",
            "prompt": "Dans le mélange étudié, la concentration des ions éthanoate vaut :",
            "options": [
              "$8 \\times 10^{-2}$ mol/L",
              "$10^{-1}$ mol/L",
              "$2 \\times 10^{-3}$ mol/L",
              "$4 \\times 10^{-2}$ mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le résultat de l'étude du résumé : [CH₃COO⁻] ≈ [Na⁺] = CbVb/(Va + Vb) = 8 × 10⁻² mol/L."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "« Tout se passe comme si » ils ne réagissaient pas",
          "stepTheme": "« Tout se passe comme si » ils ne réagissaient pas",
          "stepBadge": "« Tout se passe comme si » ils ne réagissaient pas",
          "paragraphText": "Remarque du résumé : tout se passe comme si CH₃COOH et CH₃COO⁻ ne réagissaient pas dans le mélange.\nOn calcule donc [A] et [B] par simple dilution des quantités apportées.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p03_q2",
            "type": "mcq",
            "prompt": "Pour calculer [A] et [B] dans le mélange, le résumé considère que :",
            "options": [
              "L'acide réagit totalement sur la base",
              "Tout se passe comme si l'acide et sa base conjuguée ne réagissaient pas",
              "La base disparaît complètement",
              "Le pH vaut toujours 7"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque du résumé, vérifiée par le calcul des concentrations."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La condition sur le rapport des quantités",
          "stepTheme": "La condition sur le rapport des quantités",
          "stepBadge": "La condition sur le rapport des quantités",
          "paragraphText": "La méthode n'est valable que si le rapport [B]/[A] = CbVb/CaVa reste compris entre 1/10 et 10.\nDans l'étude, ce rapport vaut 4 : la condition est vérifiée.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p03_q3",
            "type": "mcq",
            "prompt": "Le rapport CbVb/CaVa du mélange étudié vaut :",
            "options": [
              "0,25",
              "40",
              "4",
              "0,4"
            ],
            "correctAnswerIndex": 2,
            "explanation": "CbVb = 10⁻¹ × 40 et CaVa = 10⁻² × 10 : le rapport vaut 4, donc le logarithme à retrancher est log 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le résultat : pKa = 4,80",
          "stepTheme": "Le résultat : pKa = 4,80",
          "stepBadge": "Le résultat : pKa = 4,80",
          "paragraphText": "On applique $\\mathrm{p}K_a = \\mathrm{pH} - \\log([B]/[A])$ avec pH = 5,4 et un rapport de 4.\nLe résumé obtient pKa = 5,4 − log 4 = 4,80.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p03_q4",
            "type": "mcq",
            "prompt": "Le pKa déterminé pour le couple CH₃COOH/CH₃COO⁻ dans cette étude vaut :",
            "options": [
              "5,40",
              "4,75 uniquement",
              "6,00",
              "4,80"
            ],
            "correctAnswerIndex": 3,
            "explanation": "pKa = 5,4 − log 4 = 4,80 : valeur de l'étude théorique du résumé (le graphe donne ensuite 4,75)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La vérification graphique : une droite de pente 1",
          "stepTheme": "La vérification graphique : une droite de pente 1",
          "stepBadge": "La vérification graphique : une droite de pente 1",
          "paragraphText": "En mélangeant acide et base conjuguée de même concentration (Va + Vb = 100 mL), le graphe pH = f(log(Vb/Va)) est une droite affine.\nSon coefficient directeur vaut α = 1, ce qui confirme la forme pH = pKa + log(Vb/Va) quand Ca = Cb.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p03_q5",
            "type": "mcq",
            "prompt": "Le coefficient directeur de la droite pH = f(log(Vb/Va)) vaut :",
            "options": [
              "1",
              "4,75",
              "0,5",
              "−1"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé calcule α = ΔpH/Δlog(Vb/Va) = 1 : la droite a pour pente 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "L'ordonnée à l'origine donne le pKa",
          "stepTheme": "L'ordonnée à l'origine donne le pKa",
          "stepBadge": "L'ordonnée à l'origine donne le pKa",
          "paragraphText": "L'ordonnée à l'origine de la droite est β = 4,75 : c'est le pH pour log(Vb/Va) = 0, c'est-à-dire Vb = Va.\nPar identification avec pH = pKa + log(Vb/Va), on obtient pKa = 4,75 et Ka = 1,78 × 10⁻⁵.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p03_q6",
            "type": "mcq",
            "prompt": "Par identification à partir du graphe, le couple CH₃COOH/CH₃COO⁻ a pour constantes :",
            "options": [
              "pKa = 5,4 et Ka = 4 × 10⁻⁶",
              "pKa = 4,75 et Ka = 1,78 × 10⁻⁵",
              "pKa = 3,7 et Ka = 1,8 × 10⁻⁴",
              "pKa = 4,80 et Ka = 10⁻⁵"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé identifie β = pKa = 4,75, d'où Ka = 10^(−4,75) ≈ 1,78 × 10⁻⁵."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p03_q1",
          "type": "mcq",
          "prompt": "Dans le mélange étudié, la concentration des ions éthanoate vaut :",
          "options": [
            "$8 \\times 10^{-2}$ mol/L",
            "$10^{-1}$ mol/L",
            "$2 \\times 10^{-3}$ mol/L",
            "$4 \\times 10^{-2}$ mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le résultat de l'étude du résumé : [CH₃COO⁻] ≈ [Na⁺] = CbVb/(Va + Vb) = 8 × 10⁻² mol/L."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p03_q2",
          "type": "mcq",
          "prompt": "Pour calculer [A] et [B] dans le mélange, le résumé considère que :",
          "options": [
            "L'acide réagit totalement sur la base",
            "Tout se passe comme si l'acide et sa base conjuguée ne réagissaient pas",
            "La base disparaît complètement",
            "Le pH vaut toujours 7"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque du résumé, vérifiée par le calcul des concentrations."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p03_q3",
          "type": "mcq",
          "prompt": "Le rapport CbVb/CaVa du mélange étudié vaut :",
          "options": [
            "0,25",
            "40",
            "4",
            "0,4"
          ],
          "correctAnswerIndex": 2,
          "explanation": "CbVb = 10⁻¹ × 40 et CaVa = 10⁻² × 10 : le rapport vaut 4, donc le logarithme à retrancher est log 4."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p03_q4",
          "type": "mcq",
          "prompt": "Le pKa déterminé pour le couple CH₃COOH/CH₃COO⁻ dans cette étude vaut :",
          "options": [
            "5,40",
            "4,75 uniquement",
            "6,00",
            "4,80"
          ],
          "correctAnswerIndex": 3,
          "explanation": "pKa = 5,4 − log 4 = 4,80 : valeur de l'étude théorique du résumé (le graphe donne ensuite 4,75)."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p03_q5",
          "type": "mcq",
          "prompt": "Le coefficient directeur de la droite pH = f(log(Vb/Va)) vaut :",
          "options": [
            "1",
            "4,75",
            "0,5",
            "−1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé calcule α = ΔpH/Δlog(Vb/Va) = 1 : la droite a pour pente 1."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p03_q6",
          "type": "mcq",
          "prompt": "Par identification à partir du graphe, le couple CH₃COOH/CH₃COO⁻ a pour constantes :",
          "options": [
            "pKa = 5,4 et Ka = 4 × 10⁻⁶",
            "pKa = 4,75 et Ka = 1,78 × 10⁻⁵",
            "pKa = 3,7 et Ka = 1,8 × 10⁻⁴",
            "pKa = 4,80 et Ka = 10⁻⁵"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé identifie β = pKa = 4,75, d'où Ka = 10^(−4,75) ≈ 1,78 × 10⁻⁵."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l09_couple_acide_base_p04",
      "order": 4,
      "title": "Domaines de prédominance et indicateurs colorés",
      "summary": "Comparer pH et pKa dit quelle forme prédomine ; les indicateurs colorés changent de teinte dans leur zone de virage.",
      "conceptExplanation": "La relation $\\mathrm{pH} = \\mathrm{p}K_a + \\log([B]/[A])$ permet de déterminer l'espèce prédominante : si pH > pKa, alors [B] > [A] et la base prédomine ; si pH = pKa, les deux espèces sont en quantités égales ; si pH < pKa, l'acide prédomine.\nUn indicateur coloré est une solution contenant un couple HIn/In⁻ dont les deux formes ont des teintes différentes.\nSa zone de virage est l'intervalle [pKai − 1 ; pKai + 1] où les deux couleurs se superposent.\nExemples : hélianthine (rouge → jaune, 3,1–4,4), bleu de bromothymol (jaune → bleu, 6–7,6), phénolphtaléine (incolore → rouge violacée, 8,2–10).",
      "keyRule": "pH < pKa : l'acide domine ; pH > pKa : la base domine ; zone de virage d'un indicateur : pKai ± 1.",
      "formulas": [
        {
          "name": "Relation pour un indicateur coloré",
          "formula": "\\mathrm{pH_i} = \\mathrm{p}K_{a_i} + \\log \\frac{\\mathrm{[In^-]}}{\\mathrm{[HIn]}}",
          "note": "HIn est la forme acide, In⁻ la forme basique de l'indicateur."
        }
      ],
      "workedExample": {
        "title": "Qui prédomine à pH = 6 pour le couple éthanoïque (pKa = 4,8) ?",
        "statement": "Une solution contient le couple CH₃COOH/CH₃COO⁻ (pKa ≈ 4,8) et son pH vaut 6. Quelle espèce prédomine ?",
        "methodSteps": [
          "On compare : pH = 6 > pKa = 4,8.",
          "D'après les domaines de prédominance, [B] > [A]."
        ],
        "conclusion": "La base CH₃COO⁻ prédomine : application directe du schéma du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Si pH > pKa, la base prédomine",
          "stepTheme": "Si pH > pKa, la base prédomine",
          "stepBadge": "Si pH > pKa, la base prédomine",
          "paragraphText": "D'après le résumé : si pH > pKa, alors [B] > [A].\nLa base conjuguée est alors l'espèce prédominante du couple dans la solution.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p04_q1",
            "type": "mcq",
            "prompt": "Pour un couple de pKa = 4,8 dans une solution de pH = 6, l'espèce prédominante est :",
            "options": [
              "La base conjuguée",
              "L'acide",
              "Aucune : les deux sont égales",
              "L'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "pH > pKa implique [B] > [A] : la base prédomine (domaines de prédominance du résumé)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Si pH < pKa, l'acide prédomine",
          "stepTheme": "Si pH < pKa, l'acide prédomine",
          "stepBadge": "Si pH < pKa, l'acide prédomine",
          "paragraphText": "D'après le résumé : si pH < pKa, alors [B] < [A].\nL'acide est alors l'espèce prédominante ; loin du pKa, on a même [B] très inférieure à [A] (« A domine »).",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p04_q2",
            "type": "mcq",
            "prompt": "Pour un couple de pKa = 9,2 dans une solution de pH = 7, l'espèce prédominante est :",
            "options": [
              "La base conjuguée",
              "L'acide",
              "Aucune des deux",
              "L'ion hydroxyde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "pH = 7 < pKa = 9,2 : l'acide prédomine, par exemple NH₄⁺ dans le couple NH₄⁺/NH₃."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "À pH = pKa, quantités égales",
          "stepTheme": "À pH = pKa, quantités égales",
          "stepBadge": "À pH = pKa, quantités égales",
          "paragraphText": "Si pH = pKa, alors [B] = [A] : aucune des deux espèces ne domine.\nC'est le point central du diagramme de prédominance du résumé.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p04_q3",
            "type": "mcq",
            "prompt": "Lorsque le pH d'une solution est égal au pKa du couple présent :",
            "options": [
              "L'acide a disparu",
              "La base a disparu",
              "[B] = [A] : les deux espèces sont en quantités égales",
              "Le pH vaut forcément 7"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le logarithme du rapport vaut zéro, donc [B] = [A] : c'est le cas « aucune espèce ne domine » du schéma."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Définition d'un indicateur coloré",
          "stepTheme": "Définition d'un indicateur coloré",
          "stepBadge": "Définition d'un indicateur coloré",
          "paragraphText": "• Indicateur coloré : solution contenant le couple HIn/In⁻ dont les deux formes (acide et base conjuguée) ont des teintes différentes.\nSon équation avec l'eau est HIn + H₂O ⇌ In⁻ + H₃O⁺.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p04_q4",
            "type": "mcq",
            "prompt": "Un indicateur coloré est caractérisé par :",
            "options": [
              "Une seule couleur quelle que soit la solution",
              "Un précipité coloré",
              "Une odeur caractéristique",
              "Un couple HIn/In⁻ dont les deux formes ont des teintes différentes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la définition du résumé (reprise à l'exercice 1)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La zone de virage",
          "stepTheme": "La zone de virage",
          "stepBadge": "La zone de virage",
          "paragraphText": "• Zone de virage : intervalle de pH compris entre pKai − 1 et pKai + 1.\nEn dessous, la forme acide impose sa couleur ; au-dessus, la forme basique ; dans la zone, les deux couleurs se superposent.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p04_q5",
            "type": "mcq",
            "prompt": "La zone de virage d'un indicateur coloré de pKai donné est l'intervalle :",
            "options": [
              "[pKai − 1 ; pKai + 1]",
              "[0 ; 14]",
              "[pKai ; pKai + 2]",
              "[pKai − 2 ; pKai]"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé définit la zone de virage entre pKai − 1 et pKai + 1 : les deux formes colorées s'y superposent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les principaux indicateurs colorés",
          "stepTheme": "Les principaux indicateurs colorés",
          "stepBadge": "Les principaux indicateurs colorés",
          "paragraphText": "Le tableau du résumé donne : hélianthine, rouge en milieu acide et jaune en milieu basique (3,1–4,4) ; bleu de bromothymol, jaune puis bleu (6–7,6).\nLa phénolphtaléine est incolore en milieu acide et rouge violacée en milieu basique (8,2–10).",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p04_q6",
            "type": "mcq",
            "prompt": "Le bleu de bromothymol (BBT) passe du jaune au bleu dans la zone de virage :",
            "options": [
              "3,1 – 4,4",
              "6 – 7,6",
              "8,2 – 10",
              "0 – 2"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la ligne du BBT dans le tableau des indicateurs du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p04_q1",
          "type": "mcq",
          "prompt": "Pour un couple de pKa = 4,8 dans une solution de pH = 6, l'espèce prédominante est :",
          "options": [
            "La base conjuguée",
            "L'acide",
            "Aucune : les deux sont égales",
            "L'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "pH > pKa implique [B] > [A] : la base prédomine (domaines de prédominance du résumé)."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p04_q2",
          "type": "mcq",
          "prompt": "Pour un couple de pKa = 9,2 dans une solution de pH = 7, l'espèce prédominante est :",
          "options": [
            "La base conjuguée",
            "L'acide",
            "Aucune des deux",
            "L'ion hydroxyde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "pH = 7 < pKa = 9,2 : l'acide prédomine, par exemple NH₄⁺ dans le couple NH₄⁺/NH₃."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p04_q3",
          "type": "mcq",
          "prompt": "Lorsque le pH d'une solution est égal au pKa du couple présent :",
          "options": [
            "L'acide a disparu",
            "La base a disparu",
            "[B] = [A] : les deux espèces sont en quantités égales",
            "Le pH vaut forcément 7"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le logarithme du rapport vaut zéro, donc [B] = [A] : c'est le cas « aucune espèce ne domine » du schéma."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p04_q4",
          "type": "mcq",
          "prompt": "Un indicateur coloré est caractérisé par :",
          "options": [
            "Une seule couleur quelle que soit la solution",
            "Un précipité coloré",
            "Une odeur caractéristique",
            "Un couple HIn/In⁻ dont les deux formes ont des teintes différentes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la définition du résumé (reprise à l'exercice 1)."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p04_q5",
          "type": "mcq",
          "prompt": "La zone de virage d'un indicateur coloré de pKai donné est l'intervalle :",
          "options": [
            "[pKai − 1 ; pKai + 1]",
            "[0 ; 14]",
            "[pKai ; pKai + 2]",
            "[pKai − 2 ; pKai]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé définit la zone de virage entre pKai − 1 et pKai + 1 : les deux formes colorées s'y superposent."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p04_q6",
          "type": "mcq",
          "prompt": "Le bleu de bromothymol (BBT) passe du jaune au bleu dans la zone de virage :",
          "options": [
            "3,1 – 4,4",
            "6 – 7,6",
            "8,2 – 10",
            "0 – 2"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la ligne du BBT dans le tableau des indicateurs du résumé."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l09_couple_acide_base_p05",
      "order": 5,
      "title": "Force d'un acide faible, d'une base faible",
      "summary": "À concentration égale, l'acide le plus fort a le plus grand Ka ; la base la plus forte appartient au couple de plus petit Ka.",
      "conceptExplanation": "On compare deux solutions de même concentration C = 10⁻² mol/L : l'acide méthanoïque (pH = 2,9) et l'acide éthanoïque (pH = 3,4).\nLeurs constantes valent Ka = 1,8 × 10⁻⁴ (pKa = 3,74) pour HCOOH/HCOO⁻ et Ka = 1,65 × 10⁻⁵ (pKa = 4,78) pour CH₃COOH/CH₃COO⁻ : l'acide méthanoïque s'ionise plus, il est plus fort.\nPour les bases, l'ammoniac (pH = 10,6) et la méthylamine (pH = 11,3) à Cb = 10⁻² mol/L donnent Ka = 6,1 × 10⁻¹⁰ (pKa = 9,2) et Ka = 2 × 10⁻¹¹ (pKa = 10,7) : la méthylamine s'ionise plus, elle est plus forte.\nConclusion générale : la force d'un acide faible croît avec le Ka et décroît avec le pKa ; la force d'une base faible croît avec le pKa et décroît avec le Ka.",
      "keyRule": "Acide le plus fort = Ka le plus grand (pKa le plus petit) ; base la plus forte = pKa du couple le plus grand (Ka le plus petit).",
      "formulas": [],
      "workedExample": {
        "title": "Comparer deux acides par leur Ka (exercice 2)",
        "statement": "On donne Ka(HSO₃⁻/SO₃²⁻) = 6,31 × 10⁻⁸ et Ka(CH₃COOH/CH₃COO⁻) = 1,58 × 10⁻⁵. Quel est l'acide faible le plus fort ? Quelle est la base faible la plus forte ?",
        "methodSteps": [
          "On compare : 1,58 × 10⁻⁵ > 6,31 × 10⁻⁸, donc Ka du couple éthanoïque est le plus grand.",
          "L'acide le plus fort est donc CH₃COOH.",
          "La base la plus forte est la base conjuguée du couple de plus petit Ka : SO₃²⁻."
        ],
        "conclusion": "Ce sont les réponses de la solution de l'exercice 2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "À concentration égale, le pH compare les forces",
          "stepTheme": "À concentration égale, le pH compare les forces",
          "stepBadge": "À concentration égale, le pH compare les forces",
          "paragraphText": "L'expérience du résumé compare S₁ (acide méthanoïque) et S₂ (acide éthanoïque), toutes deux à C = 10⁻² mol/L.\nLes pH mesurés sont 2,9 pour S₁ et 3,4 pour S₂ : S₁ contient plus d'ions H₃O⁺.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p05_q1",
            "type": "mcq",
            "prompt": "À concentration égale (10⁻² mol/L), l'acide dont la solution a le pH le plus bas est :",
            "options": [
              "L'acide méthanoïque (pH = 2,9), plus ionisé",
              "L'acide éthanoïque (pH = 3,4)",
              "Les deux acides ont exactement la même force",
              "On ne peut pas conclure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pH le plus bas correspond à la plus grande [H₃O⁺] : l'acide méthanoïque s'ionise plus (§6.1 du résumé)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'acide le plus fort a le plus grand Ka",
          "stepTheme": "L'acide le plus fort a le plus grand Ka",
          "stepBadge": "L'acide le plus fort a le plus grand Ka",
          "paragraphText": "Les constantes calculées valent Ka(HCOOH/HCOO⁻) = 1,8 × 10⁻⁴ et Ka(CH₃COOH/CH₃COO⁻) = 1,65 × 10⁻⁵.\nConclusion du résumé : de deux acides faibles, le plus fort est celui du couple qui a le plus grand Ka, donc le pKa le plus faible.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p05_q2",
            "type": "mcq",
            "prompt": "De deux acides faibles, le plus fort est celui dont le couple a :",
            "options": [
              "Le plus petit Ka",
              "Le plus grand Ka et donc le plus petit pKa",
              "Le plus grand pKa",
              "Un Ka égal à 1"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion du §6.1.4 du résumé, illustrée par HCOOH (Ka = 1,8 × 10⁻⁴) plus fort que CH₃COOH."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La méthylamine est plus forte que l'ammoniac",
          "stepTheme": "La méthylamine est plus forte que l'ammoniac",
          "stepBadge": "La méthylamine est plus forte que l'ammoniac",
          "paragraphText": "À Cb = 10⁻² mol/L, la solution d'ammoniac a un pH de 10,6 et celle de méthylamine un pH de 11,3.\nOn calcule [CH₃NH₃⁺] = 2 × 10⁻³ mol/L, supérieure à [NH₄⁺] = 3,98 × 10⁻⁴ mol/L : la méthylamine s'ionise plus.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p05_q3",
            "type": "mcq",
            "prompt": "La méthylamine est une base plus forte que l'ammoniac car, à concentration égale :",
            "options": [
              "Son pH est plus faible",
              "Elle ne réagit pas avec l'eau",
              "Elle s'ionise davantage : [CH₃NH₃⁺] > [NH₄⁺]",
              "Son couple a un Ka plus grand"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'interprétation du §6.2.3 : plus d'ions formés signifie une base plus forte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La base la plus forte a le plus petit Ka de couple",
          "stepTheme": "La base la plus forte a le plus petit Ka de couple",
          "stepBadge": "La base la plus forte a le plus petit Ka de couple",
          "paragraphText": "Pour les couples des deux bases : Ka(NH₄⁺/NH₃) = 6,1 × 10⁻¹⁰ (pKa = 9,2) et Ka(CH₃NH₃⁺/CH₃NH₂) = 2 × 10⁻¹¹ (pKa = 10,7).\nConclusion du résumé : de deux bases faibles, la plus forte est celle du couple qui a le plus petit Ka, donc le pKa le plus grand.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p05_q4",
            "type": "mcq",
            "prompt": "De deux bases faibles, la plus forte est celle dont le couple a :",
            "options": [
              "Le plus grand Ka",
              "Le plus petit pKa",
              "Un Ka égal à celui de l'eau",
              "Le plus petit Ka et donc le plus grand pKa"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la conclusion du §6.2.4 : la méthylamine (pKa du couple 10,7) est plus forte que l'ammoniac (9,2)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Conclusion générale à retenir",
          "stepTheme": "Conclusion générale à retenir",
          "stepBadge": "Conclusion générale à retenir",
          "paragraphText": "Le résumé conclut : la force d'un acide faible croît avec le Ka et décroît avec le pKa.\nEt symétriquement : la force d'une base faible croît avec le pKa et décroît avec le Ka.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p05_q5",
            "type": "mcq",
            "prompt": "D'après la conclusion générale, la force d'une base faible :",
            "options": [
              "Croît avec le pKa de son couple et décroît avec le Ka",
              "Croît avec le Ka de son couple",
              "Ne dépend ni du Ka ni du pKa",
              "Est toujours supérieure à celle d'un acide faible"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le second point de la conclusion générale (§6.3) du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Déterminer Ka et pKa d'un couple (exercice 5)",
          "stepTheme": "Déterminer Ka et pKa d'un couple (exercice 5)",
          "stepBadge": "Déterminer Ka et pKa d'un couple (exercice 5)",
          "paragraphText": "Pour la méthylamine (C = 10⁻² mol/L, pH = 11,3), l'exercice 5 calcule [OH⁻] = 2 × 10⁻³, [CH₃NH₃⁺] = 2 × 10⁻³ et [CH₃NH₂] = 8 × 10⁻³ mol/L.\nIl en déduit Ka = 2 × 10⁻¹¹ et pKa = 10,7 pour le couple CH₃NH₃⁺/CH₃NH₂.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p05_q6",
            "type": "mcq",
            "prompt": "Dans l'exercice 5, le Ka du couple ion méthylammonium/méthylamine vaut :",
            "options": [
              "$1{,}8 \\times 10^{-5}$",
              "$2 \\times 10^{-11}$, avec un pKa de 10,7",
              "$6{,}3 \\times 10^{-10}$",
              "$1{,}61 \\times 10^{-5}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ka = [CH₃NH₂][H₃O⁺]/[CH₃NH₃⁺] = 2 × 10⁻¹¹, d'où pKa = 10,7 (corrigé de l'exercice 5)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p05_q1",
          "type": "mcq",
          "prompt": "À concentration égale (10⁻² mol/L), l'acide dont la solution a le pH le plus bas est :",
          "options": [
            "L'acide méthanoïque (pH = 2,9), plus ionisé",
            "L'acide éthanoïque (pH = 3,4)",
            "Les deux acides ont exactement la même force",
            "On ne peut pas conclure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pH le plus bas correspond à la plus grande [H₃O⁺] : l'acide méthanoïque s'ionise plus (§6.1 du résumé)."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p05_q2",
          "type": "mcq",
          "prompt": "De deux acides faibles, le plus fort est celui dont le couple a :",
          "options": [
            "Le plus petit Ka",
            "Le plus grand Ka et donc le plus petit pKa",
            "Le plus grand pKa",
            "Un Ka égal à 1"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion du §6.1.4 du résumé, illustrée par HCOOH (Ka = 1,8 × 10⁻⁴) plus fort que CH₃COOH."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p05_q3",
          "type": "mcq",
          "prompt": "La méthylamine est une base plus forte que l'ammoniac car, à concentration égale :",
          "options": [
            "Son pH est plus faible",
            "Elle ne réagit pas avec l'eau",
            "Elle s'ionise davantage : [CH₃NH₃⁺] > [NH₄⁺]",
            "Son couple a un Ka plus grand"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'interprétation du §6.2.3 : plus d'ions formés signifie une base plus forte."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p05_q4",
          "type": "mcq",
          "prompt": "De deux bases faibles, la plus forte est celle dont le couple a :",
          "options": [
            "Le plus grand Ka",
            "Le plus petit pKa",
            "Un Ka égal à celui de l'eau",
            "Le plus petit Ka et donc le plus grand pKa"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la conclusion du §6.2.4 : la méthylamine (pKa du couple 10,7) est plus forte que l'ammoniac (9,2)."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p05_q5",
          "type": "mcq",
          "prompt": "D'après la conclusion générale, la force d'une base faible :",
          "options": [
            "Croît avec le pKa de son couple et décroît avec le Ka",
            "Croît avec le Ka de son couple",
            "Ne dépend ni du Ka ni du pKa",
            "Est toujours supérieure à celle d'un acide faible"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le second point de la conclusion générale (§6.3) du résumé."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p05_q6",
          "type": "mcq",
          "prompt": "Dans l'exercice 5, le Ka du couple ion méthylammonium/méthylamine vaut :",
          "options": [
            "$1{,}8 \\times 10^{-5}$",
            "$2 \\times 10^{-11}$, avec un pKa de 10,7",
            "$6{,}3 \\times 10^{-10}$",
            "$1{,}61 \\times 10^{-5}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ka = [CH₃NH₂][H₃O⁺]/[CH₃NH₃⁺] = 2 × 10⁻¹¹, d'où pKa = 10,7 (corrigé de l'exercice 5)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l09_couple_acide_base_p06",
      "order": 6,
      "title": "Classification des couples acide/base dans l'eau",
      "summary": "H₃O⁺ est le seul acide fort dans l'eau, OH⁻ la base de référence, et la base conjuguée d'un acide faible est faible.",
      "conceptExplanation": "La réaction d'un acide fort avec l'eau est totale : tous les acides forts sont plus forts que H₃O⁺, et H₃O⁺ est le seul acide fort qui puisse exister dans l'eau.\nLes bases conjuguées des acides forts ne réagissent pas avec l'eau : elles sont plus faibles que H₂O et sont dites indifférentes dans l'eau.\nSymétriquement, toutes les bases fortes sont plus fortes que l'ion OH⁻, et les acides conjugués des bases fortes sont indifférents ; le classement relatif des acides forts et des bases fortes est impossible dans l'eau.\nPour les couples faibles : la base conjuguée d'un acide faible est faible, et plus un acide faible est fort, plus sa base conjuguée est faible (et inversement).",
      "keyRule": "Dans l'eau : H₃O⁺ borne les acides forts, OH⁻ borne les bases fortes ; acide faible ⇔ base conjuguée faible.",
      "formulas": [],
      "workedExample": {
        "title": "La situation d'évaluation : pKa du couple méthylammonium",
        "statement": "On mélange 20 mL de méthylamine (C₁ = 0,1 mol/L) et 10 mL de chlorure de méthylammonium (C₂ = 0,2 mol/L) ; le pH du mélange est 10,7. Détermine le Ka et le pKa du couple CH₃NH₃⁺/CH₃NH₂.",
        "methodSteps": [
          "Concentrations du mélange : [CH₃NH₃⁺] ≈ 6,72 × 10⁻² mol/L et [CH₃NH₂] ≈ 6,68 × 10⁻² mol/L, avec [H₃O⁺] = 2 × 10⁻¹¹ mol/L.",
          "Ka = [CH₃NH₂][H₃O⁺]/[CH₃NH₃⁺] ≈ 2 × 10⁻¹¹.",
          "pKa = −log Ka ≈ 10,7."
        ],
        "conclusion": "Le couple a le même pKa (10,7) que dans le tableau du résumé ; comparé à NH₄⁺/NH₃ (pKa = 9,2), la méthylamine est la base la plus forte car son couple a le plus grand pKa (§6.2 et §6.3)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "H₃O⁺, seul acide fort dans l'eau",
          "stepTheme": "H₃O⁺, seul acide fort dans l'eau",
          "stepBadge": "H₃O⁺, seul acide fort dans l'eau",
          "paragraphText": "La réaction d'un acide fort avec l'eau est totale : l'acide est entièrement transformé en H₃O⁺.\nLe résumé conclut que tous les acides forts sont plus forts que H₃O⁺, et que H₃O⁺ est le seul acide fort qui puisse exister dans l'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p06_q1",
            "type": "mcq",
            "prompt": "Dans l'eau, le seul acide fort qui puisse exister est :",
            "options": [
              "L'ion hydronium H₃O⁺",
              "L'acide chlorhydrique moléculaire",
              "L'acide éthanoïque",
              "L'ion ammonium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tout acide fort est totalement converti en H₃O⁺ dans l'eau (§7.1 du résumé)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les bases conjuguées des acides forts sont indifférentes",
          "stepTheme": "Les bases conjuguées des acides forts sont indifférentes",
          "stepBadge": "Les bases conjuguées des acides forts sont indifférentes",
          "paragraphText": "Les bases conjuguées des acides forts ne réagissent pas avec l'eau : elles sont plus faibles que H₂O.\nLe résumé les dit « indifférentes » dans l'eau : c'est le cas de l'ion chlorure Cl⁻, base conjuguée de HCl.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p06_q2",
            "type": "mcq",
            "prompt": "La base conjuguée d'un acide fort, comme Cl⁻ pour HCl, est dans l'eau :",
            "options": [
              "Une base forte",
              "Indifférente : elle ne réagit pas avec l'eau",
              "Un acide faible",
              "Toujours absente"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le §7.1 précise qu'elle est plus faible que H₂O et ne réagit pas avec l'eau."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les bases fortes sont plus fortes que OH⁻",
          "stepTheme": "Les bases fortes sont plus fortes que OH⁻",
          "stepBadge": "Les bases fortes sont plus fortes que OH⁻",
          "paragraphText": "La réaction d'une base forte avec l'eau est totale : elle est entièrement convertie en OH⁻.\nToutes les bases fortes sont donc plus fortes que l'ion OH⁻, et leurs acides conjugués sont indifférents dans l'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p06_q3",
            "type": "mcq",
            "prompt": "Toutes les bases fortes sont plus fortes que :",
            "options": [
              "H₃O⁺",
              "H₂O seulement",
              "L'ion hydroxyde OH⁻",
              "L'ion éthanoate"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le §7.2 du résumé : OH⁻ est la base forte de référence qui subsiste dans l'eau."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Pas de classement des forts dans l'eau",
          "stepTheme": "Pas de classement des forts dans l'eau",
          "stepBadge": "Pas de classement des forts dans l'eau",
          "paragraphText": "Remarque du résumé : le classement relatif des acides forts et des bases fortes est impossible dans l'eau.\nTous sont nivelés : les acides forts sont ramenés à H₃O⁺ et les bases fortes à OH⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p06_q4",
            "type": "mcq",
            "prompt": "Dans l'eau, le classement relatif des acides forts entre eux est :",
            "options": [
              "Donné par leur concentration",
              "Donné par leur pKa",
              "Toujours possible par le pH",
              "Impossible, car ils sont tous convertis en H₃O⁺"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque du §7.2 : l'eau nivelle la force des acides forts (et des bases fortes)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Acide faible, base conjuguée faible",
          "stepTheme": "Acide faible, base conjuguée faible",
          "stepBadge": "Acide faible, base conjuguée faible",
          "paragraphText": "Pour les couples dont l'acide et la base sont faibles, la réaction avec l'eau est partielle et caractérisée par Ka.\nLe résumé précise : la base conjuguée d'un acide faible est faible, et plus un acide faible est fort, plus sa base conjuguée est faible.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p06_q5",
            "type": "mcq",
            "prompt": "Si un acide faible devient plus fort (Ka augmente), sa base conjuguée devient :",
            "options": [
              "Plus faible",
              "Plus forte",
              "Indifférente",
              "Inchangée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la règle du §7.3 : les forces de l'acide et de sa base conjuguée varient en sens inverse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un Ka déterminé par le pH (exercice 4)",
          "stepTheme": "Un Ka déterminé par le pH (exercice 4)",
          "stepBadge": "Un Ka déterminé par le pH (exercice 4)",
          "paragraphText": "Pour une solution d'acide acétique de Ca = 0,1 mol/L et de pH = 2,9, l'exercice 4 trouve [CH₃COO⁻] = 1,26 × 10⁻³ et [CH₃COOH] = 9,87 × 10⁻² mol/L.\nIl en déduit Ka = 1,61 × 10⁻⁵ et pKa = 4,8 pour le couple CH₃COOH/CH₃COO⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l09_couple_acide_base_p06_q6",
            "type": "mcq",
            "prompt": "Dans l'exercice 4, la constante d'acidité du couple acétique déterminée vaut :",
            "options": [
              "$1{,}8 \\times 10^{-4}$",
              "Ka = 1,61 × 10⁻⁵, soit un pKa de 4,8",
              "$6{,}31 \\times 10^{-8}$",
              "$2 \\times 10^{-11}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ka = [H₃O⁺][CH₃COO⁻]/[CH₃COOH] = 1,61 × 10⁻⁵ et pKa = −log Ka = 4,8 (corrigé de l'exercice 4)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p06_q1",
          "type": "mcq",
          "prompt": "Dans l'eau, le seul acide fort qui puisse exister est :",
          "options": [
            "L'ion hydronium H₃O⁺",
            "L'acide chlorhydrique moléculaire",
            "L'acide éthanoïque",
            "L'ion ammonium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tout acide fort est totalement converti en H₃O⁺ dans l'eau (§7.1 du résumé)."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p06_q2",
          "type": "mcq",
          "prompt": "La base conjuguée d'un acide fort, comme Cl⁻ pour HCl, est dans l'eau :",
          "options": [
            "Une base forte",
            "Indifférente : elle ne réagit pas avec l'eau",
            "Un acide faible",
            "Toujours absente"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le §7.1 précise qu'elle est plus faible que H₂O et ne réagit pas avec l'eau."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p06_q3",
          "type": "mcq",
          "prompt": "Toutes les bases fortes sont plus fortes que :",
          "options": [
            "H₃O⁺",
            "H₂O seulement",
            "L'ion hydroxyde OH⁻",
            "L'ion éthanoate"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le §7.2 du résumé : OH⁻ est la base forte de référence qui subsiste dans l'eau."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p06_q4",
          "type": "mcq",
          "prompt": "Dans l'eau, le classement relatif des acides forts entre eux est :",
          "options": [
            "Donné par leur concentration",
            "Donné par leur pKa",
            "Toujours possible par le pH",
            "Impossible, car ils sont tous convertis en H₃O⁺"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque du §7.2 : l'eau nivelle la force des acides forts (et des bases fortes)."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p06_q5",
          "type": "mcq",
          "prompt": "Si un acide faible devient plus fort (Ka augmente), sa base conjuguée devient :",
          "options": [
            "Plus faible",
            "Plus forte",
            "Indifférente",
            "Inchangée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la règle du §7.3 : les forces de l'acide et de sa base conjuguée varient en sens inverse."
        },
        {
          "id": "terminale_c_chimie_l09_couple_acide_base_p06_q6",
          "type": "mcq",
          "prompt": "Dans l'exercice 4, la constante d'acidité du couple acétique déterminée vaut :",
          "options": [
            "$1{,}8 \\times 10^{-4}$",
            "Ka = 1,61 × 10⁻⁵, soit un pKa de 4,8",
            "$6{,}31 \\times 10^{-8}$",
            "$2 \\times 10^{-11}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ka = [H₃O⁺][CH₃COO⁻]/[CH₃COOH] = 1,61 × 10⁻⁵ et pKa = −log Ka = 4,8 (corrigé de l'exercice 4)."
        }
      ]
    }
  ]
};
