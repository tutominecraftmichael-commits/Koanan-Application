import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 10 : Réactions acido-basiques – Solutions tampons » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1343
export const CHIMIE_TLE_CD_L10_REACTIONS_ACIDOBASIQUES: CurriculumChapter = {
  "id": "terminale_c_chimie_l10_reactions_acidobasiques",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 10,
  "title": "Leçon 10 : Réactions acido-basiques – Solutions tampons",
  "summary": "On caractérise les réactions entre acides et bases (fort/fort, faible/fort, fort/faible), on exploite les courbes de dosage pH-métrique avec l'équivalence et la demi-équivalence, puis on définit et prépare les solutions tampons.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1343",
  "points": [
    {
      "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01",
      "order": 1,
      "title": "Réaction entre un acide fort et une base forte",
      "summary": "Une réaction exothermique et totale, d'équation H₃O⁺ + OH⁻ → 2 H₂O.",
      "conceptExplanation": "Le mélange d'une solution d'acide chlorhydrique et d'une solution de soude s'échauffe (la température passe de 20 °C à 34 °C dans l'expérience du résumé) : la réaction entre un acide fort et une base forte est exothermique.\nElle est aussi totale : en mélangeant Va = 20 mL d'acide chlorhydrique (Ca = 10⁻² mol/L, pH = 2) et Vb = 10 mL de soude (Cb = 10⁻² mol/L), on obtient un mélange de pH = 2,5, et la quantité d'ions H₃O⁺ ayant réagi est exactement égale à la quantité d'ions OH⁻ ajoutée.\nSon équation-bilan est H₃O⁺ + OH⁻ → 2 H₂O, entre les espèces effectivement présentes.",
      "keyRule": "Acide fort + base forte : réaction totale et exothermique, équation H₃O⁺ + OH⁻ → 2 H₂O.",
      "formulas": [
        {
          "name": "Équation-bilan acide fort + base forte",
          "formula": "\\mathrm{H_3O^+ + OH^- \\rightarrow 2\\,H_2O}",
          "note": "Seule réaction à écrire : Na⁺ et Cl⁻ sont spectateurs."
        }
      ],
      "workedExample": {
        "title": "La preuve du caractère total (mélange du résumé)",
        "statement": "Avant mélange : n(H₃O⁺) = Ca·Va = 2 × 10⁻⁴ mol et n(OH⁻) = Cb·Vb = 10⁻⁴ mol. Après mélange (pH = 2,5), il reste n(H₃O⁺) = 10⁻⁴ mol et n(OH⁻) ≈ 0. Que conclure ?",
        "methodSteps": [
          "Quantité de H₃O⁺ ayant réagi : 2 × 10⁻⁴ − 10⁻⁴ = 10⁻⁴ mol.",
          "C'est exactement la quantité d'ions OH⁻ ajoutée (10⁻⁴ mol).",
          "Les ions hydroxyde ont donc réagi en totalité."
        ],
        "conclusion": "La réaction entre l'acide chlorhydrique et l'hydroxyde de sodium est totale, comme le conclut le résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Une réaction exothermique",
          "stepTheme": "Une réaction exothermique",
          "stepBadge": "Une réaction exothermique",
          "paragraphText": "Lors du mélange des solutions de HCl et de NaOH, le thermomètre montre une élévation de température (de 20 °C à 34 °C).\nLe résumé en conclut que la réaction entre un acide fort et une base forte est exothermique.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q1",
            "type": "mcq",
            "prompt": "La réaction entre un acide fort et une base forte est :",
            "options": [
              "Totale et exothermique",
              "Totale et endothermique",
              "Limitée et exothermique",
              "Limitée et athermique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Réponse c de l'exercice 1 : la température s'élève (exothermique) et les réactifs en défaut disparaissent (totale)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une réaction totale",
          "stepTheme": "Une réaction totale",
          "stepBadge": "Une réaction totale",
          "paragraphText": "L'étude quantitative du mélange montre que la quantité de matière de H₃O⁺ ayant réagi égale la quantité de matière de OH⁻ ajoutée.\nLa réaction entre un acide fort et une base forte est donc totale.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q2",
            "type": "mcq",
            "prompt": "Dans le mélange du résumé (pH final 2,5), la quantité d'ions OH⁻ restant après réaction est :",
            "options": [
              "Égale à celle de H₃O⁺",
              "Pratiquement nulle (≈ 10⁻¹³ mol)",
              "Égale à la quantité initiale",
              "Le double de la quantité de H₃O⁺"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau du résumé donne n(OH⁻) ≈ 10⁻¹³ mol après réaction : les ions hydroxyde ont quasiment tous réagi."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'équation-bilan entre H₃O⁺ et OH⁻",
          "stepTheme": "L'équation-bilan entre H₃O⁺ et OH⁻",
          "stepBadge": "L'équation-bilan entre H₃O⁺ et OH⁻",
          "paragraphText": "En solution, l'acide chlorhydrique est présent sous forme d'ions H₃O⁺ et la soude sous forme d'ions OH⁻ (Na⁺ et Cl⁻ sont spectateurs).\nL'équation-bilan s'écrit donc : H₃O⁺ + OH⁻ → 2 H₂O.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q3",
            "type": "mcq",
            "prompt": "L'équation-bilan de la réaction entre l'acide chlorhydrique et la soude s'écrit :",
            "options": [
              "HCl + NaOH → NaCl + H₂O",
              "H⁺ + OH⁻ → H₂O seulement",
              "H₃O⁺ + OH⁻ → 2 H₂O",
              "Na⁺ + Cl⁻ → NaCl"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé écrit la réaction entre les espèces réellement présentes en solution : H₃O⁺ + OH⁻ → 2 H₂O."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Les ions spectateurs",
          "stepTheme": "Les ions spectateurs",
          "stepBadge": "Les ions spectateurs",
          "paragraphText": "Piège : faire réagir Na⁺ et Cl⁻ dans l'équation-bilan.\nCes ions sont présents avant et après la réaction sans être modifiés : ce sont des ions spectateurs, ils n'apparaissent pas dans l'équation.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q4",
            "type": "mcq",
            "prompt": "Dans la réaction HCl + NaOH en solution, les ions spectateurs sont :",
            "options": [
              "H₃O⁺ et OH⁻",
              "H₃O⁺ et Cl⁻",
              "OH⁻ et Na⁺",
              "Na⁺ et Cl⁻"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Na⁺ et Cl⁻ se retrouvent inchangés dans la composition du mélange à l'équivalence ; seuls H₃O⁺ et OH⁻ réagissent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le montage du dosage pH-métrique",
          "stepTheme": "Le montage du dosage pH-métrique",
          "stepBadge": "Le montage du dosage pH-métrique",
          "paragraphText": "Pour suivre l'évolution du pH, on verse la solution titrante à la burette graduée dans le bécher contenant la solution à doser.\nLe bécher, muni d'un barreau aimanté sur agitateur magnétique, contient l'électrode du pH-mètre.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q5",
            "type": "mcq",
            "prompt": "Dans le montage de dosage du résumé, la solution versée progressivement se trouve :",
            "options": [
              "Dans la burette graduée",
              "Dans le bécher",
              "Dans le pH-mètre",
              "Dans une fiole jaugée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le schéma du dispositif expérimental place la solution de soude dans la burette et la solution d'acide dans le bécher."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Après l'équivalence, une asymptote",
          "stepTheme": "Après l'équivalence, une asymptote",
          "stepBadge": "Après l'équivalence, une asymptote",
          "paragraphText": "Dans la troisième partie de la courbe pH = f(Vb), le pH varie très peu.\nLa courbe tend vers une asymptote horizontale d'équation pH = pKe + log Cb : le pH tend vers celui de la base forte versée.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q6",
            "type": "mcq",
            "prompt": "Quand on verse un grand excès de soude, le pH du mélange tend vers :",
            "options": [
              "7",
              "Celui de la solution de soude versée, pH = pKe + log Cb",
              "0",
              "Le pKa de l'acide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'asymptote de la troisième partie de la courbe décrite dans l'analyse du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q1",
          "type": "mcq",
          "prompt": "La réaction entre un acide fort et une base forte est :",
          "options": [
            "Totale et exothermique",
            "Totale et endothermique",
            "Limitée et exothermique",
            "Limitée et athermique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Réponse c de l'exercice 1 : la température s'élève (exothermique) et les réactifs en défaut disparaissent (totale)."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q2",
          "type": "mcq",
          "prompt": "Dans le mélange du résumé (pH final 2,5), la quantité d'ions OH⁻ restant après réaction est :",
          "options": [
            "Égale à celle de H₃O⁺",
            "Pratiquement nulle (≈ 10⁻¹³ mol)",
            "Égale à la quantité initiale",
            "Le double de la quantité de H₃O⁺"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau du résumé donne n(OH⁻) ≈ 10⁻¹³ mol après réaction : les ions hydroxyde ont quasiment tous réagi."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q3",
          "type": "mcq",
          "prompt": "L'équation-bilan de la réaction entre l'acide chlorhydrique et la soude s'écrit :",
          "options": [
            "HCl + NaOH → NaCl + H₂O",
            "H⁺ + OH⁻ → H₂O seulement",
            "H₃O⁺ + OH⁻ → 2 H₂O",
            "Na⁺ + Cl⁻ → NaCl"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé écrit la réaction entre les espèces réellement présentes en solution : H₃O⁺ + OH⁻ → 2 H₂O."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q4",
          "type": "mcq",
          "prompt": "Dans la réaction HCl + NaOH en solution, les ions spectateurs sont :",
          "options": [
            "H₃O⁺ et OH⁻",
            "H₃O⁺ et Cl⁻",
            "OH⁻ et Na⁺",
            "Na⁺ et Cl⁻"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Na⁺ et Cl⁻ se retrouvent inchangés dans la composition du mélange à l'équivalence ; seuls H₃O⁺ et OH⁻ réagissent."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q5",
          "type": "mcq",
          "prompt": "Dans le montage de dosage du résumé, la solution versée progressivement se trouve :",
          "options": [
            "Dans la burette graduée",
            "Dans le bécher",
            "Dans le pH-mètre",
            "Dans une fiole jaugée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le schéma du dispositif expérimental place la solution de soude dans la burette et la solution d'acide dans le bécher."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p01_q6",
          "type": "mcq",
          "prompt": "Quand on verse un grand excès de soude, le pH du mélange tend vers :",
          "options": [
            "7",
            "Celui de la solution de soude versée, pH = pKe + log Cb",
            "0",
            "Le pKa de l'acide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'asymptote de la troisième partie de la courbe décrite dans l'analyse du résumé."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02",
      "order": 2,
      "title": "L'équivalence acido-basique (acide fort – base forte)",
      "summary": "Ca·Va = Cb·VbE, point d'inflexion déterminé par les tangentes parallèles, et pH = 7 à l'équivalence.",
      "conceptExplanation": "L'équivalence acido-basique est l'état du mélange des réactifs dans les proportions stœchiométriques indiquées par l'équation-bilan.\nÀ l'équivalence, la quantité de matière d'acide introduite égale la quantité de matière de base ajoutée : Ca·Va = Cb·VbE.\nLa courbe pH = f(Vb) est croissante, comporte trois parties et présente un point d'inflexion E, le point d'équivalence, déterminé graphiquement par la méthode des tangentes parallèles ; le saut de pH a lieu entre 19 et 21 mL dans l'expérience.\nPour l'exemple du résumé, E a pour coordonnées VbE = 20 mL et pHE = 7 : à l'équivalence, on obtient une solution neutre de chlorure de sodium ([Na⁺] = [Cl⁻] = 5 × 10⁻³ mol/L).",
      "keyRule": "Équivalence : n(acide) = n(base), soit Ca·Va = Cb·VbE ; pour fort/fort, pHE = 7 à 25 °C.",
      "formulas": [
        {
          "name": "Relation d'équivalence",
          "formula": "C_a \\times V_a = C_b \\times V_{bE}",
          "note": "VbE est le volume de base versé à l'équivalence."
        },
        {
          "name": "Concentration du sel à l'équivalence",
          "formula": "C = \\frac{C_a V_a}{V_a + V_{bE}}",
          "note": "Pour la solution de chlorure de sodium obtenue à l'équivalence."
        }
      ],
      "workedExample": {
        "title": "Retrouver Cb dans la situation d'évaluation",
        "statement": "On verse de l'acide chlorhydrique (Ca = 10⁻² mol/L) dans Vb = 50 mL de soude de concentration inconnue. Le point d'équivalence, obtenu par les tangentes parallèles, est VaE = 16,6 mL avec pHE = 7. Détermine Cb.",
        "methodSteps": [
          "À l'équivalence : Ca·VaE = Cb·Vb.",
          "Cb = Ca × VaE/Vb, avec les valeurs de l'énoncé.",
          "On obtient Cb = 3,32 × 10⁻³ mol/L."
        ],
        "conclusion": "C'est la concentration calculée dans la résolution de la situation d'évaluation du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l'équivalence",
          "stepTheme": "Définition de l'équivalence",
          "stepBadge": "Définition de l'équivalence",
          "paragraphText": "• Équivalence acido-basique : état du mélange des réactifs dans les proportions stœchiométriques indiquées par l'équation-bilan de la réaction.\nNi acide ni base n'est alors en excès.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q1",
            "type": "mcq",
            "prompt": "L'équivalence acido-basique est atteinte lorsque les réactifs sont mélangés :",
            "options": [
              "En volumes égaux",
              "Dans les proportions stœchiométriques de l'équation-bilan",
              "Avec la base en large excès",
              "À pH = 7 dans tous les cas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §2.6.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La relation Ca·Va = Cb·VbE",
          "stepTheme": "La relation Ca·Va = Cb·VbE",
          "stepBadge": "La relation Ca·Va = Cb·VbE",
          "paragraphText": "À l'équivalence, n(H₃O⁺) introduite égale n(OH⁻) ajoutée.\nComme n = C × V pour chaque solution, on obtient la relation d'équivalence Ca·Va = Cb·VbE.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q2",
            "type": "mcq",
            "prompt": "À l'équivalence d'un dosage acide fort/base forte, on a la relation :",
            "options": [
              "Ca·Va = Cb·VbE",
              "Ca + Va = Cb + VbE",
              "Ca/Va = Cb/VbE",
              "Ca·VbE = Cb·Va dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la relation d'équivalence du résumé : égalité des quantités de matière d'acide et de base."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La méthode des tangentes parallèles",
          "stepTheme": "La méthode des tangentes parallèles",
          "stepBadge": "La méthode des tangentes parallèles",
          "paragraphText": "Le point d'équivalence E est le point d'inflexion de la courbe de dosage.\nOn le détermine graphiquement à l'aide de la méthode des tangentes parallèles, comme le prescrit le résumé.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q3",
            "type": "mcq",
            "prompt": "Le point d'équivalence sur la courbe pH = f(Vb) se détermine par :",
            "options": [
              "La méthode des tangentes parallèles",
              "La lecture du pH initial",
              "Le calcul du pKa",
              "La zone de virage d'un indicateur uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la méthode indiquée au §2.6.3 ; la documentation mentionne aussi la méthode de la dérivée dpH/dV."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le saut de pH",
          "stepTheme": "Le saut de pH",
          "stepBadge": "Le saut de pH",
          "paragraphText": "Dans la deuxième partie de la courbe (19 mL ≤ Vb ≤ 21 mL), on observe un « saut de pH ».\nLa courbe y change de concavité et présente son point d'inflexion E.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q4",
            "type": "mcq",
            "prompt": "Le saut de pH de la courbe fort/fort se produit :",
            "options": [
              "Au tout début du dosage",
              "Au voisinage du point d'équivalence",
              "Après un large excès de base",
              "Il n'existe pas pour ce dosage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse de la courbe place le saut entre 19 et 21 mL, autour de E (VbE = 20 mL)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "pH = 7 à l'équivalence fort/fort",
          "stepTheme": "pH = 7 à l'équivalence fort/fort",
          "stepBadge": "pH = 7 à l'équivalence fort/fort",
          "paragraphText": "À l'équivalence, [H₃O⁺] = [OH⁻] = √Ke = 10⁻⁷ mol/L, donc pHE = 7 à 25 °C.\nOn obtient une solution neutre de chlorure de sodium : c'est aussi la réponse de l'exercice 2 (le pH à l'équivalence est neutre).",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q5",
            "type": "mcq",
            "prompt": "À l'équivalence du dosage d'un acide fort par une base forte (25 °C), le mélange est :",
            "options": [
              "Acide",
              "Basique",
              "Neutre, de pH 7",
              "Une solution tampon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sel formé (NaCl) est neutre et [H₃O⁺] = [OH⁻] : pHE = 7 (exercice 2 du résumé)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La composition à l'équivalence",
          "stepTheme": "La composition à l'équivalence",
          "stepBadge": "La composition à l'équivalence",
          "paragraphText": "À l'équivalence de l'exemple, les ions présents sont Na⁺, Cl⁻, H₃O⁺ et OH⁻, avec [Na⁺] = [Cl⁻] = 5 × 10⁻³ mol/L.\nLes concentrations de H₃O⁺ et OH⁻ sont, elles, de 10⁻⁷ mol/L seulement.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q6",
            "type": "mcq",
            "prompt": "À l'équivalence de l'exemple du résumé, [Na⁺] et [Cl⁻] valent :",
            "options": [
              "10⁻⁷ mol/L",
              "10⁻² mol/L",
              "0 mol/L",
              "5 × 10⁻³ mol/L"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Chaque concentration vaut Ca·Va/(Va + VbE) = 5 × 10⁻³ mol/L d'après le calcul du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q1",
          "type": "mcq",
          "prompt": "L'équivalence acido-basique est atteinte lorsque les réactifs sont mélangés :",
          "options": [
            "En volumes égaux",
            "Dans les proportions stœchiométriques de l'équation-bilan",
            "Avec la base en large excès",
            "À pH = 7 dans tous les cas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §2.6.1 du résumé."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q2",
          "type": "mcq",
          "prompt": "À l'équivalence d'un dosage acide fort/base forte, on a la relation :",
          "options": [
            "Ca·Va = Cb·VbE",
            "Ca + Va = Cb + VbE",
            "Ca/Va = Cb/VbE",
            "Ca·VbE = Cb·Va dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la relation d'équivalence du résumé : égalité des quantités de matière d'acide et de base."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q3",
          "type": "mcq",
          "prompt": "Le point d'équivalence sur la courbe pH = f(Vb) se détermine par :",
          "options": [
            "La méthode des tangentes parallèles",
            "La lecture du pH initial",
            "Le calcul du pKa",
            "La zone de virage d'un indicateur uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la méthode indiquée au §2.6.3 ; la documentation mentionne aussi la méthode de la dérivée dpH/dV."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q4",
          "type": "mcq",
          "prompt": "Le saut de pH de la courbe fort/fort se produit :",
          "options": [
            "Au tout début du dosage",
            "Au voisinage du point d'équivalence",
            "Après un large excès de base",
            "Il n'existe pas pour ce dosage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse de la courbe place le saut entre 19 et 21 mL, autour de E (VbE = 20 mL)."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q5",
          "type": "mcq",
          "prompt": "À l'équivalence du dosage d'un acide fort par une base forte (25 °C), le mélange est :",
          "options": [
            "Acide",
            "Basique",
            "Neutre, de pH 7",
            "Une solution tampon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sel formé (NaCl) est neutre et [H₃O⁺] = [OH⁻] : pHE = 7 (exercice 2 du résumé)."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p02_q6",
          "type": "mcq",
          "prompt": "À l'équivalence de l'exemple du résumé, [Na⁺] et [Cl⁻] valent :",
          "options": [
            "10⁻⁷ mol/L",
            "10⁻² mol/L",
            "0 mol/L",
            "5 × 10⁻³ mol/L"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Chaque concentration vaut Ca·Va/(Va + VbE) = 5 × 10⁻³ mol/L d'après le calcul du résumé."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03",
      "order": 3,
      "title": "Réaction entre un acide faible et une base forte",
      "summary": "Réaction totale et exothermique entre l'acide faible et les ions OH⁻ ; à l'équivalence, la solution est basique.",
      "conceptExplanation": "La réaction entre un acide faible et une base forte est exothermique et totale, comme le montre l'étude du mélange d'acide éthanoïque et de soude de pH = 4,2 : les ions OH⁻ introduits ont quasiment tous réagi, et la quantité d'acide disparue égale celle des ions OH⁻.\nLa réaction se déroule donc entre l'acide faible et l'ion hydroxyde : AH + OH⁻ → A⁻ + H₂O, ou BH⁺ + OH⁻ → B + H₂O pour un acide de type BH⁺.\nLa courbe de dosage de l'acide éthanoïque par la soude est croissante, comporte quatre parties et deux points d'inflexion : F (demi-équivalence) et E (équivalence).\nÀ l'équivalence (VbE = 22,2 mL dans l'exemple), pHE = 8,7 : la solution est basique, car les espèces majoritaires sont CH₃COO⁻ et Na⁺, c'est-à-dire une solution d'éthanoate de sodium.",
      "keyRule": "Acide faible + base forte : réaction totale sur OH⁻ ; pH à l'équivalence > 7 car il reste la base conjuguée.",
      "formulas": [
        {
          "name": "Équation acide faible + base forte",
          "formula": "\\mathrm{AH + OH^- \\rightarrow A^- + H_2O}",
          "note": "Pour un acide de type BH⁺ : BH⁺ + OH⁻ → B + H₂O."
        },
        {
          "name": "Relation d'équivalence (acide faible dosé)",
          "formula": "C_a \\times V_a = C_b \\times V_{bE}",
          "note": "Même relation que pour un acide fort."
        }
      ],
      "workedExample": {
        "title": "Le mélange de pH = 4,2 : les ions de l'eau",
        "statement": "On verse 1 mL de soude concentrée sur 20 mL d'acide éthanoïque (Ca = 10⁻² mol/L) ; le pH du mélange vaut 4,2. Détermine [H₃O⁺] et [OH⁻] dans le mélange.",
        "methodSteps": [
          "[H₃O⁺] = 10^(−pH) = 10^(−4,2) ≈ 6,3 × 10⁻⁵ mol/L.",
          "[OH⁻] = Ke/[H₃O⁺] ≈ 1,6 × 10⁻¹⁰ mol/L.",
          "La valeur infime de [OH⁻] montre que les ions hydroxyde versés ont quasiment tous réagi."
        ],
        "conclusion": "Ce sont les concentrations calculées dans l'exploitation du résumé, qui conclut au caractère total de la réaction."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Totale et exothermique, comme fort/fort",
          "stepTheme": "Totale et exothermique, comme fort/fort",
          "stepBadge": "Totale et exothermique, comme fort/fort",
          "paragraphText": "L'expérience du thermomètre montre une élévation de température lors du mélange d'acide éthanoïque et de soude.\nLa conclusion du résumé (§1.3) : la réaction entre un acide faible et une base forte est exothermique et totale.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q1",
            "type": "mcq",
            "prompt": "La réaction entre un acide faible et une base forte est :",
            "options": [
              "Limitée et exothermique",
              "Totale et exothermique",
              "Totale et endothermique",
              "Limitée et athermique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion du résumé : les ions OH⁻ introduits réagissent en totalité avec l'acide faible."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La réaction a lieu avec OH⁻, pas avec NaOH",
          "stepTheme": "La réaction a lieu avec OH⁻, pas avec NaOH",
          "stepBadge": "La réaction a lieu avec OH⁻, pas avec NaOH",
          "paragraphText": "L'interprétation du résumé : la quantité de CH₃COOH disparue égale celle des OH⁻ introduits et disparus.\nLa réaction se déroule donc entre l'acide éthanoïque et l'ion hydroxyde : CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q2",
            "type": "mcq",
            "prompt": "L'équation-bilan de la réaction entre l'acide éthanoïque et la soude est :",
            "options": [
              "CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O",
              "CH₃COOH + Na⁺ → CH₃COONa + H⁺",
              "CH₃COOH + H₂O → CH₃COO⁻ + H₃O⁺",
              "CH₃COOH + OH⁻ ⇌ CH₃COO⁻ + H₂O (équilibre)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé écrit une flèche simple : la réaction avec la base forte est totale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas d'un acide de type BH⁺",
          "stepTheme": "Le cas d'un acide de type BH⁺",
          "stepBadge": "Le cas d'un acide de type BH⁺",
          "paragraphText": "Pour un acide faible de type BH⁺ (comme NH₄⁺), l'équation avec une base forte s'écrit : BH⁺ + OH⁻ → B + H₂O.\nLe produit est la base conjuguée B, neutre, et non un anion.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q3",
            "type": "mcq",
            "prompt": "L'équation de la réaction d'un acide faible de type BH⁺ avec une base forte est :",
            "options": [
              "BH⁺ + OH⁻ → B⁻ + H₂O",
              "BH⁺ + OH⁻ ⇌ BHOH + H⁺",
              "BH⁺ + OH⁻ → B + H₂O",
              "BH⁺ + H₂O → B + H₃O⁺"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la seconde équation générale donnée dans la conclusion du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une courbe à quatre parties et deux points d'inflexion",
          "stepTheme": "Une courbe à quatre parties et deux points d'inflexion",
          "stepBadge": "Une courbe à quatre parties et deux points d'inflexion",
          "paragraphText": "L'exploitation de la courbe de dosage de l'acide éthanoïque annonce quatre parties et deux points d'inflexion, E et F.\nF est le point de demi-équivalence et E le point d'équivalence, où se produit le saut de pH (entre 21 et 23 mL).",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q4",
            "type": "mcq",
            "prompt": "La courbe de dosage d'un acide faible par une base forte présente :",
            "options": [
              "Trois parties et un point d'inflexion",
              "Deux parties et aucun point d'inflexion",
              "Un saut de pH au tout début",
              "Quatre parties et deux points d'inflexion (E et F)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'exploitation du résumé ; l'exercice 2 confirme la même structure (quatre parties, deux points d'inflexion) pour la courbe d'un dosage impliquant des espèces faibles."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "À l'équivalence : pHE = 8,7, solution basique",
          "stepTheme": "À l'équivalence : pHE = 8,7, solution basique",
          "stepBadge": "À l'équivalence : pHE = 8,7, solution basique",
          "paragraphText": "Par la méthode des tangentes parallèles, le résumé obtient E (VbE = 22,2 mL ; pHE = 8,7).\nRemarque du résumé : à l'équivalence acido-basique, le pH vaut 8,7 : la solution est donc basique.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q5",
            "type": "mcq",
            "prompt": "À l'équivalence du dosage de l'acide éthanoïque par la soude, le pH vaut 8,7 car :",
            "options": [
              "Il reste de la soude en excès",
              "Les espèces majoritaires sont CH₃COO⁻ et Na⁺ : une solution d'éthanoate de sodium, basique",
              "Le pH à l'équivalence vaut toujours 8,7",
              "L'acide n'a pas réagi"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion du §2.6 : à l'équivalence, tout l'acide est converti en sa base conjuguée, qui rend la solution basique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le pH à l'équivalence dépend des couples (exercice 2)",
          "stepTheme": "Le pH à l'équivalence dépend des couples (exercice 2)",
          "stepBadge": "Le pH à l'équivalence dépend des couples (exercice 2)",
          "paragraphText": "L'exercice 2 récapitule : fort/fort → pH neutre (7) ; acide fort sur base faible → pH acide (< 7).\nEt pour un acide faible sur une base forte → pH basique (> 7), comme le 8,7 de l'exemple.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q6",
            "type": "mcq",
            "prompt": "Lorsqu'on fait réagir un acide fort sur une base faible, le pH à l'équivalence est :",
            "options": [
              "Acide (inférieur à 7 à 25 °C)",
              "Neutre (égal à 7)",
              "Basique (supérieur à 7)",
              "Toujours égal au pKa"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Réponse de l'exercice 2 : à l'équivalence, il reste l'acide conjugué de la base faible, d'où un mélange acide."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q1",
          "type": "mcq",
          "prompt": "La réaction entre un acide faible et une base forte est :",
          "options": [
            "Limitée et exothermique",
            "Totale et exothermique",
            "Totale et endothermique",
            "Limitée et athermique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion du résumé : les ions OH⁻ introduits réagissent en totalité avec l'acide faible."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q2",
          "type": "mcq",
          "prompt": "L'équation-bilan de la réaction entre l'acide éthanoïque et la soude est :",
          "options": [
            "CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O",
            "CH₃COOH + Na⁺ → CH₃COONa + H⁺",
            "CH₃COOH + H₂O → CH₃COO⁻ + H₃O⁺",
            "CH₃COOH + OH⁻ ⇌ CH₃COO⁻ + H₂O (équilibre)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé écrit une flèche simple : la réaction avec la base forte est totale."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q3",
          "type": "mcq",
          "prompt": "L'équation de la réaction d'un acide faible de type BH⁺ avec une base forte est :",
          "options": [
            "BH⁺ + OH⁻ → B⁻ + H₂O",
            "BH⁺ + OH⁻ ⇌ BHOH + H⁺",
            "BH⁺ + OH⁻ → B + H₂O",
            "BH⁺ + H₂O → B + H₃O⁺"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la seconde équation générale donnée dans la conclusion du résumé."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q4",
          "type": "mcq",
          "prompt": "La courbe de dosage d'un acide faible par une base forte présente :",
          "options": [
            "Trois parties et un point d'inflexion",
            "Deux parties et aucun point d'inflexion",
            "Un saut de pH au tout début",
            "Quatre parties et deux points d'inflexion (E et F)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'exploitation du résumé ; l'exercice 2 confirme la même structure (quatre parties, deux points d'inflexion) pour la courbe d'un dosage impliquant des espèces faibles."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q5",
          "type": "mcq",
          "prompt": "À l'équivalence du dosage de l'acide éthanoïque par la soude, le pH vaut 8,7 car :",
          "options": [
            "Il reste de la soude en excès",
            "Les espèces majoritaires sont CH₃COO⁻ et Na⁺ : une solution d'éthanoate de sodium, basique",
            "Le pH à l'équivalence vaut toujours 8,7",
            "L'acide n'a pas réagi"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion du §2.6 : à l'équivalence, tout l'acide est converti en sa base conjuguée, qui rend la solution basique."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p03_q6",
          "type": "mcq",
          "prompt": "Lorsqu'on fait réagir un acide fort sur une base faible, le pH à l'équivalence est :",
          "options": [
            "Acide (inférieur à 7 à 25 °C)",
            "Neutre (égal à 7)",
            "Basique (supérieur à 7)",
            "Toujours égal au pKa"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Réponse de l'exercice 2 : à l'équivalence, il reste l'acide conjugué de la base faible, d'où un mélange acide."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04",
      "order": 4,
      "title": "Demi-équivalence, concentrations, et acide fort – base faible",
      "summary": "À la demi-équivalence, pH = pKa ; le saut de pH croît avec la concentration ; la réaction fort/faible est aussi totale.",
      "conceptExplanation": "À la demi-équivalence, le volume de base versé vaut la moitié du volume équivalent : $V_{bF} = V_{bE}/2$, soit 11,1 mL dans l'exemple du dosage de l'acide éthanoïque.\nLe résumé y lit pH = 4,8 : à la demi-équivalence, le pH de la solution est égal au pKa du couple acide/base mis en jeu, ce qui permet de déterminer graphiquement le pKa.\nL'influence des concentrations : le point d'équivalence change avec les concentrations, le point de demi-équivalence reste le même (pH = pKa), et le saut de pH augmente avec la concentration.\nLa réaction entre un acide fort et une base faible est elle aussi totale et exothermique : A⁻ + H₃O⁺ → AH + H₂O, ou B + H₃O⁺ → BH⁺ + H₂O.",
      "keyRule": "Demi-équivalence : V = VE/2 et pH = pKa — la méthode graphique pour mesurer un pKa.",
      "formulas": [
        {
          "name": "Volume à la demi-équivalence",
          "formula": "V_{bF} = \\frac{V_{bE}}{2}",
          "note": "Au point F, la moitié de l'acide a été convertie en base conjuguée."
        },
        {
          "name": "Équations acide fort + base faible",
          "formula": "\\mathrm{A^- + H_3O^+ \\rightarrow AH + H_2O} \\quad ; \\quad \\mathrm{B + H_3O^+ \\rightarrow BH^+ + H_2O}",
          "note": "Réaction totale et exothermique."
        }
      ],
      "workedExample": {
        "title": "Identifier une base faible par son pKa (exercice 5)",
        "statement": "On dose 20 cm³ d'une base faible B inconnue par de l'acide chlorhydrique (Ca = 10⁻¹ mol/L). La courbe donne E (VaE = 20 mL ; pHE = 5,2) et, à la demi-équivalence (Va = 10 mL), pH = 9,2. Identifie B parmi les couples du tableau (pKa : éthylammonium 10,67 ; méthylammonium 10,72 ; ammonium 9,20 ; hydrogénocarbonate 10,3).",
        "methodSteps": [
          "À l'équivalence : Cb = Ca·VaE/Vb = 0,1 mol/L.",
          "À la demi-équivalence, pH = pKa du couple : pKa = 9,2.",
          "Le tableau associe le pKa 9,20 au couple ion ammonium/ammoniac."
        ],
        "conclusion": "La base faible B est l'ammoniac : c'est la solution de l'exercice 5 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le point de demi-équivalence F",
          "stepTheme": "Le point de demi-équivalence F",
          "stepBadge": "Le point de demi-équivalence F",
          "paragraphText": "• Demi-équivalence : point atteint quand le volume de base versé vaut la moitié du volume équivalent, VbF = VbE/2.\nDans l'exemple, VbE = 22,2 mL donne VbF = 11,1 mL.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q1",
            "type": "mcq",
            "prompt": "Si le volume équivalent d'un dosage vaut 22,2 mL, le volume à la demi-équivalence vaut :",
            "options": [
              "11,1 mL",
              "22,2 mL",
              "44,4 mL",
              "5,55 mL"
            ],
            "correctAnswerIndex": 0,
            "explanation": "VbF = VbE/2 = 11,1 mL : c'est la valeur F du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "À la demi-équivalence, pH = pKa",
          "stepTheme": "À la demi-équivalence, pH = pKa",
          "stepBadge": "À la demi-équivalence, pH = pKa",
          "paragraphText": "Le résumé lit au point F un pH de 4,8, égal au pKa du couple CH₃COOH/CH₃COO⁻.\nÀ la demi-équivalence, la moitié de l'acide est convertie : [A] = [B], donc pH = pKa d'après la relation de la leçon 9.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q2",
            "type": "mcq",
            "prompt": "À la demi-équivalence d'un dosage d'acide faible, le pH de la solution est égal :",
            "options": [
              "À 7",
              "Au pKa du couple mis en jeu",
              "Au pH initial",
              "À 14 − pKa"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque du §2.7 : le point de demi-équivalence permet de déterminer graphiquement le pKa."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'effet des concentrations sur la courbe",
          "stepTheme": "L'effet des concentrations sur la courbe",
          "stepBadge": "L'effet des concentrations sur la courbe",
          "paragraphText": "En comparant les courbes pour Ca = Cb = 10⁻¹, 10⁻² et 10⁻³ mol/L, le résumé constate trois effets.\nLe point d'équivalence change, le point de demi-équivalence reste le même, et le saut de pH augmente avec la concentration.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q3",
            "type": "mcq",
            "prompt": "Quand la concentration des solutions augmente, le saut de pH au voisinage de l'équivalence :",
            "options": [
              "Diminue",
              "Disparaît",
              "Augmente",
              "Ne change jamais"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'une des trois conclusions du §3 du résumé ; en solution très diluée, le saut devient à peine visible."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le point de demi-équivalence ne bouge pas",
          "stepTheme": "Le point de demi-équivalence ne bouge pas",
          "stepBadge": "Le point de demi-équivalence ne bouge pas",
          "paragraphText": "Piège : croire que tout change avec la concentration.\nLe résumé souligne que le point de demi-équivalence reste le même (pH = pKa), car le pKa ne dépend que du couple et de la température.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q4",
            "type": "mcq",
            "prompt": "Quand on change les concentrations du dosage, le point de demi-équivalence :",
            "options": [
              "Se déplace vers les pH acides",
              "Se déplace vers les pH basiques",
              "Disparaît",
              "Reste le même : pH = pKa"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la deuxième conclusion du §3 : seul le point d'équivalence et le saut de pH changent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Acide fort + base faible : totale et exothermique",
          "stepTheme": "Acide fort + base faible : totale et exothermique",
          "stepBadge": "Acide fort + base faible : totale et exothermique",
          "paragraphText": "Le §III du résumé donne les mêmes caractéristiques : la réaction entre un acide fort et une base faible est totale et exothermique.\nSon équation s'écrit avec H₃O⁺ comme réactif : B + H₃O⁺ → BH⁺ + H₂O pour une base de type B.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q5",
            "type": "mcq",
            "prompt": "L'équation-bilan de la réaction de l'ammoniac avec l'acide chlorhydrique est :",
            "options": [
              "NH₃ + H₃O⁺ → NH₄⁺ + H₂O",
              "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻",
              "NH₃ + Cl⁻ → NH₂Cl + H₂",
              "NH₄⁺ + OH⁻ → NH₃ + H₂O"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'équation de l'exercice 3 (et du dosage 1 de l'exercice 4) : la base faible capte le proton de H₃O⁺, réaction totale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le dosage d'une base faible : courbe décroissante (exercice 4)",
          "stepTheme": "Le dosage d'une base faible : courbe décroissante (exercice 4)",
          "stepBadge": "Le dosage d'une base faible : courbe décroissante (exercice 4)",
          "paragraphText": "Dans l'exercice 4, la courbe 1 (pHE = 5,4) est décroissante, avec quatre parties et deux points d'inflexion.\nLa solution l'identifie comme le dosage d'une base faible par un acide fort : A est l'acide chlorhydrique et l'autre flacon contient l'ammoniac.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q6",
            "type": "mcq",
            "prompt": "Un dosage dont la courbe est décroissante, avec un pHE de 5,4 (acide), correspond à :",
            "options": [
              "Un acide fort dosé par une base forte",
              "Une base faible dosée par un acide fort",
              "Une base forte dosée par un acide fort",
              "Un acide faible dosé par une base forte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après la solution de l'exercice 4 : courbe décroissante (on verse l'acide) et équivalence acide car il reste NH₄⁺, acide faible."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q1",
          "type": "mcq",
          "prompt": "Si le volume équivalent d'un dosage vaut 22,2 mL, le volume à la demi-équivalence vaut :",
          "options": [
            "11,1 mL",
            "22,2 mL",
            "44,4 mL",
            "5,55 mL"
          ],
          "correctAnswerIndex": 0,
          "explanation": "VbF = VbE/2 = 11,1 mL : c'est la valeur F du résumé."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q2",
          "type": "mcq",
          "prompt": "À la demi-équivalence d'un dosage d'acide faible, le pH de la solution est égal :",
          "options": [
            "À 7",
            "Au pKa du couple mis en jeu",
            "Au pH initial",
            "À 14 − pKa"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque du §2.7 : le point de demi-équivalence permet de déterminer graphiquement le pKa."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q3",
          "type": "mcq",
          "prompt": "Quand la concentration des solutions augmente, le saut de pH au voisinage de l'équivalence :",
          "options": [
            "Diminue",
            "Disparaît",
            "Augmente",
            "Ne change jamais"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'une des trois conclusions du §3 du résumé ; en solution très diluée, le saut devient à peine visible."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q4",
          "type": "mcq",
          "prompt": "Quand on change les concentrations du dosage, le point de demi-équivalence :",
          "options": [
            "Se déplace vers les pH acides",
            "Se déplace vers les pH basiques",
            "Disparaît",
            "Reste le même : pH = pKa"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la deuxième conclusion du §3 : seul le point d'équivalence et le saut de pH changent."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q5",
          "type": "mcq",
          "prompt": "L'équation-bilan de la réaction de l'ammoniac avec l'acide chlorhydrique est :",
          "options": [
            "NH₃ + H₃O⁺ → NH₄⁺ + H₂O",
            "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻",
            "NH₃ + Cl⁻ → NH₂Cl + H₂",
            "NH₄⁺ + OH⁻ → NH₃ + H₂O"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'équation de l'exercice 3 (et du dosage 1 de l'exercice 4) : la base faible capte le proton de H₃O⁺, réaction totale."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p04_q6",
          "type": "mcq",
          "prompt": "Un dosage dont la courbe est décroissante, avec un pHE de 5,4 (acide), correspond à :",
          "options": [
            "Un acide fort dosé par une base forte",
            "Une base faible dosée par un acide fort",
            "Une base forte dosée par un acide fort",
            "Un acide faible dosé par une base forte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après la solution de l'exercice 4 : courbe décroissante (on verse l'acide) et équivalence acide car il reste NH₄⁺, acide faible."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05",
      "order": 5,
      "title": "Solutions tampons : composition et propriétés",
      "summary": "Un mélange équimolaire d'un acide faible et de sa base conjuguée, de pH égal au pKa, qui résiste aux variations de pH.",
      "conceptExplanation": "Au cours d'une réaction entre un acide faible et une base forte (ou entre une base faible et un acide fort), la solution obtenue à la demi-équivalence est appelée solution tampon.\nUne solution tampon est constituée d'un mélange équimolaire d'un acide faible et de sa base conjuguée : [Acide] = [Base conjuguée] et pH = pKa du couple.\nL'expérience du résumé (tampon CH₃COOH/CH₃COO⁻ de pH = 4,8) montre qu'après ajout de quelques gouttes de soude, le pH passe à 4,9 ; avec quelques gouttes d'acide chlorhydrique, à 4,7 ; après dilution avec quelques cm³ d'eau, à 4,82.\nUne solution tampon est donc une solution aqueuse dont le pH varie peu suite à une dilution modérée ou à l'addition modérée d'un acide ou d'une base.",
      "keyRule": "Tampon = acide faible + base conjuguée en quantités égales ; pH = pKa et pH quasi constant.",
      "formulas": [
        {
          "name": "Condition d'une solution tampon",
          "formula": "\\mathrm{[A]} = \\mathrm{[B]} \\quad \\Rightarrow \\quad \\mathrm{pH} = \\mathrm{p}K_a",
          "note": "A : acide faible ; B : sa base conjuguée, en quantités égales dans le mélange."
        }
      ],
      "workedExample": {
        "title": "L'expérience du tampon à pH = 4,8",
        "statement": "Un tampon préparé à partir de 5 mL d'acide éthanoïque et 5 mL d'éthanoate de sodium, tous deux à 10⁻² mol/L, a un pH de 4,8. Qu'observe-t-on après ajout de quelques gouttes de soude à 0,1 mol/L, puis d'acide chlorhydrique, puis d'eau ?",
        "methodSteps": [
          "Avec la soude : pH = 4,9 (augmentation de 0,1 seulement).",
          "Avec l'acide chlorhydrique : pH = 4,7 (diminution de 0,1).",
          "Avec l'eau (dilution modérée) : pH = 4,82, pratiquement inchangé."
        ],
        "conclusion": "Le pH varie très peu dans les trois cas : c'est la propriété définissant une solution tampon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Composition d'une solution tampon",
          "stepTheme": "Composition d'une solution tampon",
          "stepBadge": "Composition d'une solution tampon",
          "paragraphText": "• Solution tampon : mélange équimolaire d'un acide faible et de sa base conjuguée.\nOn l'obtient notamment à la demi-équivalence d'un dosage impliquant un couple faible.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q1",
            "type": "mcq",
            "prompt": "Une solution tampon est constituée :",
            "options": [
              "D'un mélange équimolaire d'un acide faible et de sa base conjuguée",
              "D'un acide fort seul",
              "D'une base forte seule",
              "D'un sel neutre et d'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la composition donnée au §IV.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le pH d'un tampon vaut le pKa",
          "stepTheme": "Le pH d'un tampon vaut le pKa",
          "stepBadge": "Le pH d'un tampon vaut le pKa",
          "paragraphText": "Comme [Acide] = [Base conjuguée], la relation pH = pKa + log([B]/[A]) donne pH = pKa.\nPour le tampon éthanoïque de l'expérience, pKa = 4,8 et le pH mesuré est bien 4,8.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q2",
            "type": "mcq",
            "prompt": "Le pH d'une solution tampon est égal :",
            "options": [
              "À 7",
              "Au pKa du couple acide/base en présence",
              "Au pH de l'acide pur",
              "À 14 − pKa"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première caractéristique listée au §IV.1 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Résistance à l'ajout d'une base",
          "stepTheme": "Résistance à l'ajout d'une base",
          "stepBadge": "Résistance à l'ajout d'une base",
          "paragraphText": "Après l'addition de quelques gouttes de soude à 0,1 mol/L, le pH du tampon passe de 4,8 à 4,9.\nLe résumé conclut que le pH d'un tampon augmente peu suite à l'addition modérée d'une base.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q3",
            "type": "mcq",
            "prompt": "Dans l'expérience du résumé, l'ajout modéré de soude fait passer le pH du tampon de 4,8 à :",
            "options": [
              "12",
              "7",
              "4,9 seulement",
              "2"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau des observations donne pH = 4,9 : la variation est très faible, c'est l'effet tampon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Résistance à l'ajout d'un acide et à la dilution",
          "stepTheme": "Résistance à l'ajout d'un acide et à la dilution",
          "stepBadge": "Résistance à l'ajout d'un acide et à la dilution",
          "paragraphText": "Avec quelques gouttes d'acide chlorhydrique, le pH descend seulement à 4,7 ; avec quelques cm³ d'eau, il passe à 4,82.\nLe pH d'un tampon varie donc peu aussi lors d'une dilution modérée.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations sur une solution tampon est correcte ?",
            "options": [
              "Son pH chute fortement quand on la dilue",
              "Son pH est toujours égal à 7",
              "Elle ne contient que des espèces fortes",
              "Son pH varie peu lors d'une dilution modérée ou d'un ajout modéré d'acide ou de base"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la conclusion du §IV.2.2, reprise dans les propriétés de l'exercice 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "« Modérée » : la limite de l'effet tampon",
          "stepTheme": "« Modérée » : la limite de l'effet tampon",
          "stepBadge": "« Modérée » : la limite de l'effet tampon",
          "paragraphText": "Piège : croire que le pH d'un tampon ne change jamais.\nLe résumé qualifie toujours les ajouts et la dilution de « modérés » : au-delà, l'acide ou la base du couple est épuisé et l'effet tampon disparaît.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q5",
            "type": "mcq",
            "prompt": "L'effet tampon protège le pH seulement si les ajouts d'acide ou de base sont :",
            "options": [
              "Modérés",
              "Très importants",
              "Nuls",
              "Effectués à chaud"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé répète « addition modérée » et « dilution modérée » dans toutes les propriétés des tampons."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le point F de l'exercice 4 est un tampon",
          "stepTheme": "Le point F de l'exercice 4 est un tampon",
          "stepBadge": "Le point F de l'exercice 4 est un tampon",
          "paragraphText": "Dans l'exercice 4, le point F de la courbe 1 (demi-équivalence du dosage de l'ammoniac) correspond à une solution tampon.\nLa solution y rappelle ses propriétés : pH quasi constant lors d'ajouts modérés ou d'une dilution modérée.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q6",
            "type": "mcq",
            "prompt": "Au point de demi-équivalence F d'un dosage impliquant un couple faible, la solution obtenue est :",
            "options": [
              "Une solution neutre",
              "Une solution tampon",
              "Un acide fort",
              "Un précipité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À la demi-équivalence, [acide] = [base conjuguée] : c'est la définition même du tampon (§IV.1 et exercice 4)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q1",
          "type": "mcq",
          "prompt": "Une solution tampon est constituée :",
          "options": [
            "D'un mélange équimolaire d'un acide faible et de sa base conjuguée",
            "D'un acide fort seul",
            "D'une base forte seule",
            "D'un sel neutre et d'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la composition donnée au §IV.1 du résumé."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q2",
          "type": "mcq",
          "prompt": "Le pH d'une solution tampon est égal :",
          "options": [
            "À 7",
            "Au pKa du couple acide/base en présence",
            "Au pH de l'acide pur",
            "À 14 − pKa"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première caractéristique listée au §IV.1 du résumé."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q3",
          "type": "mcq",
          "prompt": "Dans l'expérience du résumé, l'ajout modéré de soude fait passer le pH du tampon de 4,8 à :",
          "options": [
            "12",
            "7",
            "4,9 seulement",
            "2"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau des observations donne pH = 4,9 : la variation est très faible, c'est l'effet tampon."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations sur une solution tampon est correcte ?",
          "options": [
            "Son pH chute fortement quand on la dilue",
            "Son pH est toujours égal à 7",
            "Elle ne contient que des espèces fortes",
            "Son pH varie peu lors d'une dilution modérée ou d'un ajout modéré d'acide ou de base"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la conclusion du §IV.2.2, reprise dans les propriétés de l'exercice 3."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q5",
          "type": "mcq",
          "prompt": "L'effet tampon protège le pH seulement si les ajouts d'acide ou de base sont :",
          "options": [
            "Modérés",
            "Très importants",
            "Nuls",
            "Effectués à chaud"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé répète « addition modérée » et « dilution modérée » dans toutes les propriétés des tampons."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p05_q6",
          "type": "mcq",
          "prompt": "Au point de demi-équivalence F d'un dosage impliquant un couple faible, la solution obtenue est :",
          "options": [
            "Une solution neutre",
            "Une solution tampon",
            "Un acide fort",
            "Un précipité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À la demi-équivalence, [acide] = [base conjuguée] : c'est la définition même du tampon (§IV.1 et exercice 4)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06",
      "order": 6,
      "title": "Préparation et intérêt des solutions tampons",
      "summary": "Trois méthodes de préparation, toutes fondées sur la demi-équivalence ou le mélange équimolaire, et des usages en chimie et en biologie.",
      "conceptExplanation": "Première méthode : mélanger un acide faible et une base forte jusqu'à la demi-équivalence, donc n(OH⁻) = n(acide)/2 ; exemple du résumé : 2 mL de soude à 0,5 mol/L dans 20 mL d'acide éthanoïque à 0,1 mol/L donnent un tampon de pH = 4,8.\nDeuxième méthode : mélanger un acide fort et une base faible jusqu'à la demi-équivalence ; exemple : 10 mL d'acide chlorhydrique à 0,4 mol/L dans 40 mL d'ammoniac à 0,2 mol/L donnent un tampon de pH = 9,2.\nTroisième méthode : mélanger directement des quantités égales d'un acide faible et de sa base conjuguée (Ca·Va = Cb·Vb) ; exemple : 750 mL d'acide méthanoïque à 0,1 mol/L et 250 mL de méthanoate de sodium à 0,3 mol/L donnent 1 L de tampon de pH = 3,8.\nIntérêt des tampons : en chimie, l'étalonnage des pH-mètres et le contrôle du pH des réactions d'oxydoréduction ; en biologie, favoriser les réactions enzymatiques et l'assimilation des nutriments par le sang.",
      "keyRule": "Préparer un tampon = obtenir [acide] = [base conjuguée], par demi-équivalence ou par mélange équimolaire direct.",
      "formulas": [
        {
          "name": "Condition de demi-équivalence (méthode 1)",
          "formula": "C_b \\times V_b = \\frac{C_a \\times V_a}{2}",
          "note": "Base forte ajoutée à un acide faible jusqu'à la demi-équivalence."
        },
        {
          "name": "Mélange équimolaire direct (méthode 3)",
          "formula": "C_a \\times V_a = C_b \\times V_b",
          "note": "Quantités égales d'acide faible et de sa base conjuguée."
        }
      ],
      "workedExample": {
        "title": "Le volume d'acide pour tamponner l'ammoniac (exercice 3)",
        "statement": "Une solution d'ammoniac (Cb = 4 × 10⁻² mol/L, Vb = 20 mL) a un pKa de couple de 9,2. Quel volume d'acide chlorhydrique (Ca = 3 × 10⁻² mol/L) faut-il ajouter pour obtenir une solution de pH = 9,2 ?",
        "methodSteps": [
          "Un pH de 9,2, égal au pKa, correspond à la demi-équivalence : il faut convertir la moitié de l'ammoniac.",
          "Condition : Ca·Va = Cb·Vb/2.",
          "Le calcul donne Va = 13,33 mL."
        ],
        "conclusion": "La solution obtenue est un tampon : son pH varie peu lors d'une dilution modérée ou d'un ajout modéré d'acide ou de base (exercice 3)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Méthode 1 : acide faible + base forte à la demi-équivalence",
          "stepTheme": "Méthode 1 : acide faible + base forte à la demi-équivalence",
          "stepBadge": "Méthode 1 : acide faible + base forte à la demi-équivalence",
          "paragraphText": "On ajoute une base forte à un acide faible jusqu'à la demi-équivalence : n(OH⁻) = n(acide)/2.\nExemple du résumé : pour 20 mL d'acide éthanoïque à 0,1 mol/L, il faut Vb = 2 mL de soude à 0,5 mol/L pour un tampon de pH = 4,8 (le pKa du couple).",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q1",
            "type": "mcq",
            "prompt": "Pour préparer un tampon par la méthode 1, la quantité de base forte ajoutée doit être :",
            "options": [
              "Égale à celle de l'acide faible",
              "La moitié de celle de l'acide faible (demi-équivalence)",
              "Le double de celle de l'acide faible",
              "Nulle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La condition écrite dans le résumé est n(OH⁻) = n(A)/2, soit Cb·Vb = Ca·Va/2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Méthode 2 : acide fort + base faible à la demi-équivalence",
          "stepTheme": "Méthode 2 : acide fort + base faible à la demi-équivalence",
          "stepBadge": "Méthode 2 : acide fort + base faible à la demi-équivalence",
          "paragraphText": "On ajoute un acide fort à une base faible jusqu'à la demi-équivalence : n(H₃O⁺) = n(base)/2.\nExemple du résumé : Va = 10 mL d'acide chlorhydrique à 0,4 mol/L dans 40 mL d'ammoniac à 0,2 mol/L donnent un tampon de pH = 9,2.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q2",
            "type": "mcq",
            "prompt": "Dans l'activité du résumé (méthode 2), le volume d'acide chlorhydrique à ajouter aux 40 mL d'ammoniac vaut :",
            "options": [
              "40 mL",
              "20 mL",
              "10 mL",
              "5 mL"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution de l'activité donne Va = Cb·Vb/(2·Ca) = 10 mL : la moitié de l'ammoniac est convertie en NH₄⁺."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Méthode 3 : le mélange équimolaire direct",
          "stepTheme": "Méthode 3 : le mélange équimolaire direct",
          "stepBadge": "Méthode 3 : le mélange équimolaire direct",
          "paragraphText": "On mélange directement l'acide faible et sa base conjuguée en quantités égales : Ca·Va = Cb·Vb.\nExemple du résumé : 750 mL d'acide méthanoïque à 0,1 mol/L et 250 mL de méthanoate de sodium à 0,3 mol/L donnent 1 L de tampon de pH = 3,8, le pKa du couple.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q3",
            "type": "mcq",
            "prompt": "Dans l'exemple de la méthode 3, les volumes à mélanger pour 1 L de tampon sont :",
            "options": [
              "500 mL d'acide et 500 mL de base conjuguée",
              "250 mL d'acide et 750 mL de base conjuguée",
              "900 mL d'acide et 100 mL de base conjuguée",
              "750 mL d'acide méthanoïque et 250 mL de méthanoate de sodium"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les concentrations diffèrent (0,1 et 0,3 mol/L) : l'égalité des quantités Ca·Va = Cb·Vb donne Va = 750 mL et Vb = 250 mL."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Équimolaire ne veut pas dire volumes égaux",
          "stepTheme": "Équimolaire ne veut pas dire volumes égaux",
          "stepBadge": "Équimolaire ne veut pas dire volumes égaux",
          "paragraphText": "Piège illustré par la méthode 3 : si les concentrations sont différentes, les volumes à mélanger ne sont pas égaux.\nCe qui doit être égal, ce sont les quantités de matière : Ca·Va = Cb·Vb.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q4",
            "type": "mcq",
            "prompt": "Un mélange équimolaire d'un acide et de sa base conjuguée signifie que :",
            "options": [
              "Les quantités de matière des deux espèces sont égales",
              "Les volumes sont toujours égaux",
              "Les concentrations sont toujours égales",
              "Le pH vaut 7"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Équimolaire porte sur les quantités de matière ; avec des concentrations différentes, les volumes diffèrent (750 mL contre 250 mL dans l'exemple)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Intérêt des tampons en chimie",
          "stepTheme": "Intérêt des tampons en chimie",
          "stepBadge": "Intérêt des tampons en chimie",
          "paragraphText": "Le résumé cite deux usages en chimie : l'étalonnage des pH-mètres.\nEt le contrôle du pH lors des réactions d'oxydoréduction, qui exigent un pH stable.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q5",
            "type": "mcq",
            "prompt": "En chimie, les solutions tampons servent notamment à :",
            "options": [
              "Nettoyer la verrerie",
              "Étalonner les pH-mètres et contrôler le pH de certaines réactions",
              "Préparer des précipités",
              "Augmenter la température des réactions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux intérêts en chimie listés au §IV.4 du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Intérêt des tampons en biologie",
          "stepTheme": "Intérêt des tampons en biologie",
          "stepBadge": "Intérêt des tampons en biologie",
          "paragraphText": "En biologie, le résumé indique que les tampons favorisent les réactions enzymatiques des médicaments.\nIls favorisent aussi l'assimilation des nutriments par le sang, dont ils atténuent la saveur acide.",
          "exercise": {
            "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q6",
            "type": "mcq",
            "prompt": "En biologie, l'intérêt des solutions tampons est de :",
            "options": [
              "Stériliser le sang",
              "Remplacer les médicaments",
              "Favoriser les réactions enzymatiques et l'assimilation des nutriments par le sang",
              "Colorer les solutions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les intérêts en biologie donnés par le résumé : le maintien d'un pH stable est vital pour les milieux biologiques."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q1",
          "type": "mcq",
          "prompt": "Pour préparer un tampon par la méthode 1, la quantité de base forte ajoutée doit être :",
          "options": [
            "Égale à celle de l'acide faible",
            "La moitié de celle de l'acide faible (demi-équivalence)",
            "Le double de celle de l'acide faible",
            "Nulle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La condition écrite dans le résumé est n(OH⁻) = n(A)/2, soit Cb·Vb = Ca·Va/2."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q2",
          "type": "mcq",
          "prompt": "Dans l'activité du résumé (méthode 2), le volume d'acide chlorhydrique à ajouter aux 40 mL d'ammoniac vaut :",
          "options": [
            "40 mL",
            "20 mL",
            "10 mL",
            "5 mL"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution de l'activité donne Va = Cb·Vb/(2·Ca) = 10 mL : la moitié de l'ammoniac est convertie en NH₄⁺."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q3",
          "type": "mcq",
          "prompt": "Dans l'exemple de la méthode 3, les volumes à mélanger pour 1 L de tampon sont :",
          "options": [
            "500 mL d'acide et 500 mL de base conjuguée",
            "250 mL d'acide et 750 mL de base conjuguée",
            "900 mL d'acide et 100 mL de base conjuguée",
            "750 mL d'acide méthanoïque et 250 mL de méthanoate de sodium"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les concentrations diffèrent (0,1 et 0,3 mol/L) : l'égalité des quantités Ca·Va = Cb·Vb donne Va = 750 mL et Vb = 250 mL."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q4",
          "type": "mcq",
          "prompt": "Un mélange équimolaire d'un acide et de sa base conjuguée signifie que :",
          "options": [
            "Les quantités de matière des deux espèces sont égales",
            "Les volumes sont toujours égaux",
            "Les concentrations sont toujours égales",
            "Le pH vaut 7"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Équimolaire porte sur les quantités de matière ; avec des concentrations différentes, les volumes diffèrent (750 mL contre 250 mL dans l'exemple)."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q5",
          "type": "mcq",
          "prompt": "En chimie, les solutions tampons servent notamment à :",
          "options": [
            "Nettoyer la verrerie",
            "Étalonner les pH-mètres et contrôler le pH de certaines réactions",
            "Préparer des précipités",
            "Augmenter la température des réactions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux intérêts en chimie listés au §IV.4 du résumé."
        },
        {
          "id": "terminale_c_chimie_l10_reactions_acidobasiques_p06_q6",
          "type": "mcq",
          "prompt": "En biologie, l'intérêt des solutions tampons est de :",
          "options": [
            "Stériliser le sang",
            "Remplacer les médicaments",
            "Favoriser les réactions enzymatiques et l'assimilation des nutriments par le sang",
            "Colorer les solutions"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les intérêts en biologie donnés par le résumé : le maintien d'un pH stable est vital pour les milieux biologiques."
        }
      ]
    }
  ]
};
