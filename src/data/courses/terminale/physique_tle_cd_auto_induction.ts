import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 10 : Auto-induction » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1338
export const PHYSIQUE_TLE_CD_L10_AUTO_INDUCTION: CurriculumChapter = {
  "id": "terminale_c_physique_l10_auto_induction",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 10,
  "title": "Leçon 10 : Auto-induction",
  "summary": "La bobine s'oppose aux variations du courant qui la traverse : flux propre Φp = L·i, f.é.m. d'auto-induction e = −L·di/dt, tension u = r·i + L·di/dt et énergie emmagasinée ½·L·i².",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1338",
  "points": [
    {
      "id": "terminale_c_physique_l10_auto_induction_p01",
      "order": 1,
      "title": "Mise en évidence de l'auto-induction",
      "summary": "Retard à l'allumage et à l'extinction d'une lampe en série avec une bobine : la bobine s'oppose à l'établissement et à l'annulation du courant.",
      "conceptExplanation": "Deux lampes identiques sont montées en parallèle : L1 en série avec une résistance R (égale à la résistance de la bobine), L2 en série avec la bobine.\nÀ la fermeture de l'interrupteur K, L1 s'allume instantanément tandis que L2 s'allume progressivement ; à l'ouverture, L1 s'éteint avant L2.\nConclusion du résumé : la bobine s'oppose à l'installation et à l'annulation du courant électrique dans le circuit — ce phénomène porte le nom d'auto-induction.\nÀ l'oscilloscope, la tension uBM = R·i aux bornes d'un conducteur ohmique a la même forme que i(t) : le régime pendant lequel i varie est le régime transitoire, celui où i est constant (i = Imax) est le régime permanent ; l'auto-induction résulte de la variation du flux magnétique à travers la bobine elle-même.",
      "keyRule": "Auto-induction : la bobine s'oppose à toute variation du courant qui la traverse — établissement retardé, annulation retardée.",
      "formulas": [
        {
          "name": "Cause du phénomène",
          "formula": "\\text{Auto-induction} = \\text{induction de la bobine par son propre champ}",
          "note": "Le flux qui varie est le flux propre de la bobine (§1.2.4)."
        }
      ],
      "workedExample": {
        "title": "Les phrases de l'exercice 1, remises en ordre",
        "statement": "Réarrange les mots pour former deux phrases correctes sur l'auto-induction.",
        "methodSteps": [
          "Première phrase : « Une bobine placée dans un circuit s'oppose à l'établissement d'un courant ou à sa rupture ; ce phénomène porte le nom d'auto-induction. »",
          "Deuxième phrase : « La variation de l'intensité du courant dans un circuit comportant une bobine fait apparaître dans la bobine une f.é.m. e appelée force électromotrice d'auto-induction. »"
        ],
        "conclusion": "Ce sont les deux phrases de la correction de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le retard à l'allumage de L2",
          "stepTheme": "Le retard à l'allumage de L2",
          "stepBadge": "Le retard à l'allumage de L2",
          "paragraphText": "À la fermeture de K, la lampe L1, en série avec la résistance, s'allume instantanément.\nLa lampe L2, en série avec la bobine, s'allume progressivement : le courant dans sa branche met un certain temps à s'établir.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p01_q1",
            "type": "mcq",
            "prompt": "À la fermeture de l'interrupteur, la lampe en série avec la bobine s'allume :",
            "options": [
              "Progressivement, alors que celle en série avec la résistance s'allume instantanément",
              "Instantanément, avant l'autre",
              "Jamais",
              "En clignotant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première observation du §1.1.2 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le retard à l'extinction",
          "stepTheme": "Le retard à l'extinction",
          "stepBadge": "Le retard à l'extinction",
          "paragraphText": "À l'ouverture de K, l'expérience montre la réciproque : L1 s'éteint avant L2.\nLa bobine s'oppose aussi à l'annulation du courant : elle le maintient un instant dans sa branche.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p01_q2",
            "type": "mcq",
            "prompt": "À l'ouverture de l'interrupteur, on observe que :",
            "options": [
              "L2 s'éteint la première",
              "L1 s'éteint avant L2",
              "Les deux lampes restent allumées",
              "L2 explose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deuxième observation du §1.1.2 : la bobine retarde aussi la disparition du courant."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La définition de l'auto-induction",
          "stepTheme": "La définition de l'auto-induction",
          "stepBadge": "La définition de l'auto-induction",
          "paragraphText": "• Auto-induction : phénomène par lequel une bobine s'oppose à l'établissement et à l'annulation du courant électrique qui la traverse.\nLa cause est interne : c'est la variation du flux magnétique créé par la bobine à travers elle-même.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p01_q3",
            "type": "mcq",
            "prompt": "L'auto-induction est le phénomène par lequel une bobine :",
            "options": [
              "Amplifie le courant",
              "Transforme le courant continu en alternatif",
              "S'oppose à l'installation et à l'annulation du courant qui la traverse",
              "Supprime la résistance du circuit"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la conclusion du §1.1.3, reprise dans la phrase de l'exercice 1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Régime transitoire et régime permanent",
          "stepTheme": "Régime transitoire et régime permanent",
          "stepBadge": "Régime transitoire et régime permanent",
          "paragraphText": "Le régime au cours duquel l'intensité varie (croît ou décroît) est appelé régime transitoire.\nLe régime où i est devenu constant, égal à Imax, est appelé régime permanent : l'auto-induction n'y joue plus aucun rôle.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p01_q4",
            "type": "mcq",
            "prompt": "Le régime au cours duquel l'intensité du courant varie est appelé :",
            "options": [
              "Régime permanent",
              "Régime continu",
              "Régime établi",
              "Régime transitoire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque du §1.2.3 du résumé ; en régime permanent, i = Imax est constant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Visualiser i(t) grâce à u = R·i",
          "stepTheme": "Visualiser i(t) grâce à u = R·i",
          "stepBadge": "Visualiser i(t) grâce à u = R·i",
          "paragraphText": "Un oscilloscope ne visualise que des tensions : on branche une voie aux bornes d'un conducteur ohmique de résistance R en série avec la bobine.\nComme uBM = R·i, la courbe de uBM a exactement la même forme que celle de i(t).",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p01_q5",
            "type": "mcq",
            "prompt": "Pour visualiser l'intensité i(t) à l'oscilloscope, on utilise la tension aux bornes d'un conducteur ohmique car :",
            "options": [
              "u = R·i a la même forme que i(t)",
              "L'oscilloscope mesure directement les courants",
              "La résistance amplifie le signal",
              "i est toujours constant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le N.B. du §1.2.1 du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La cause : le flux propre qui varie",
          "stepTheme": "La cause : le flux propre qui varie",
          "stepBadge": "La cause : le flux propre qui varie",
          "paragraphText": "Piège : l'auto-induction n'est pas due à un champ extérieur, comme l'induction des leçons précédentes.\nLe résumé conclut qu'elle résulte de la variation du flux magnétique à travers la bobine, flux créé par la bobine elle-même.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p01_q6",
            "type": "mcq",
            "prompt": "L'auto-induction dans une bobine résulte :",
            "options": [
              "D'un aimant extérieur mobile",
              "De la variation du flux magnétique créé par la bobine à travers elle-même",
              "Du champ magnétique terrestre",
              "De la chaleur du conducteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion du §1.2.4 : « propre » signifie créé par le circuit lui-même."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l10_auto_induction_p01_q1",
          "type": "mcq",
          "prompt": "À la fermeture de l'interrupteur, la lampe en série avec la bobine s'allume :",
          "options": [
            "Progressivement, alors que celle en série avec la résistance s'allume instantanément",
            "Instantanément, avant l'autre",
            "Jamais",
            "En clignotant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première observation du §1.1.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p01_q2",
          "type": "mcq",
          "prompt": "À l'ouverture de l'interrupteur, on observe que :",
          "options": [
            "L2 s'éteint la première",
            "L1 s'éteint avant L2",
            "Les deux lampes restent allumées",
            "L2 explose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deuxième observation du §1.1.2 : la bobine retarde aussi la disparition du courant."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p01_q3",
          "type": "mcq",
          "prompt": "L'auto-induction est le phénomène par lequel une bobine :",
          "options": [
            "Amplifie le courant",
            "Transforme le courant continu en alternatif",
            "S'oppose à l'installation et à l'annulation du courant qui la traverse",
            "Supprime la résistance du circuit"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la conclusion du §1.1.3, reprise dans la phrase de l'exercice 1."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p01_q4",
          "type": "mcq",
          "prompt": "Le régime au cours duquel l'intensité du courant varie est appelé :",
          "options": [
            "Régime permanent",
            "Régime continu",
            "Régime établi",
            "Régime transitoire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque du §1.2.3 du résumé ; en régime permanent, i = Imax est constant."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p01_q5",
          "type": "mcq",
          "prompt": "Pour visualiser l'intensité i(t) à l'oscilloscope, on utilise la tension aux bornes d'un conducteur ohmique car :",
          "options": [
            "u = R·i a la même forme que i(t)",
            "L'oscilloscope mesure directement les courants",
            "La résistance amplifie le signal",
            "i est toujours constant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le N.B. du §1.2.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p01_q6",
          "type": "mcq",
          "prompt": "L'auto-induction dans une bobine résulte :",
          "options": [
            "D'un aimant extérieur mobile",
            "De la variation du flux magnétique créé par la bobine à travers elle-même",
            "Du champ magnétique terrestre",
            "De la chaleur du conducteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion du §1.2.4 : « propre » signifie créé par le circuit lui-même."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l10_auto_induction_p02",
      "order": 2,
      "title": "Flux propre et inductance d'une bobine",
      "summary": "Φp = L·i : l'inductance L = Φp/i, en henrys, vaut μ₀·N²·S/ℓ pour un solénoïde.",
      "conceptExplanation": "On appelle flux magnétique propre Φp le flux créé par le champ magnétique de la bobine à travers sa propre surface : Φp = B·S·cos θ, grandeur algébrique.\nPour un solénoïde de N spires, de longueur ℓ et de section S, le champ intérieur B = μ₀·(N/ℓ)·I donne un flux total Φp = μ₀·(N²/ℓ)·S·I : le flux propre est proportionnel à l'intensité.\nL'inductance L de la bobine est le quotient du flux propre par l'intensité : L = Φp/I = μ₀·(N²/ℓ)·S ; elle s'exprime en henrys (H).\nDans l'exercice d'application 1 (N = 100 spires, ℓ = 40 cm, S = 20 cm², I = 100 mA), le champ intérieur vaut B = 3,14 × 10⁻⁵ T ; dans l'exercice d'application 2 (ℓ = 0,5 m, diamètre 5 cm, 2 × 10⁴ spires), l'inductance vaut L = 1,97 H.",
      "keyRule": "L = Φp/I = μ₀·N²·S/ℓ : une caractéristique de la bobine seule (géométrie), indépendante du courant.",
      "formulas": [
        {
          "name": "Inductance d'une bobine",
          "formula": "L = \\frac{\\phi_p}{I}",
          "note": "En henrys (H) ; Φp est le flux propre, en webers."
        },
        {
          "name": "Inductance d'un solénoïde",
          "formula": "L = \\mu_0 \\frac{N^2}{\\ell} S",
          "note": "N spires, longueur ℓ, section S d'une spire."
        }
      ],
      "workedExample": {
        "title": "L'exercice d'application 2 : un QCM d'inductance",
        "statement": "Un solénoïde de longueur ℓ = 0,5 m et de diamètre d = 5 cm comporte 2 × 10⁴ spires. Son inductance vaut-elle 0,97 H, 1,5 H ou 1,97 H ?",
        "methodSteps": [
          "La section d'une spire est S = π·(d/2)².",
          "On applique L = μ₀·(N²/ℓ)·S avec N = 2 × 10⁴ et ℓ = 0,5 m.",
          "Le calcul conduit à la proposition (c) : L = 1,97 H."
        ],
        "conclusion": "C'est la réponse de l'exercice d'application 2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le flux propre Φp",
          "stepTheme": "Le flux propre Φp",
          "stepBadge": "Le flux propre Φp",
          "paragraphText": "• Flux magnétique propre : flux créé par le champ magnétique de la bobine à travers la surface fermée qu'elle délimite.\nIl se calcule comme un flux ordinaire, Φp = B·S·cos θ, mais le champ est celui de la bobine elle-même.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p02_q1",
            "type": "mcq",
            "prompt": "Le flux propre d'une bobine est le flux :",
            "options": [
              "Créé par un aimant extérieur à travers la bobine",
              "Créé par le champ magnétique de la bobine à travers sa propre surface",
              "Du courant dans le fil",
              "Toujours nul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §2.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le flux propre est proportionnel à I",
          "stepTheme": "Le flux propre est proportionnel à I",
          "stepBadge": "Le flux propre est proportionnel à I",
          "paragraphText": "Pour un solénoïde, B est proportionnel à I, donc le flux total l'est aussi : Φp = μ₀·(N²/ℓ)·S·I.\nLe coefficient de proportionnalité entre Φp et I est précisément l'inductance L.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p02_q2",
            "type": "mcq",
            "prompt": "Le flux propre d'une bobine est proportionnel à l'intensité du courant qui la traverse car :",
            "options": [
              "La section des spires grandit avec I",
              "Le champ B créé par la bobine est lui-même proportionnel à I",
              "La longueur de la bobine varie",
              "Le nombre de spires augmente"
            ],
            "correctAnswerIndex": 1,
            "explanation": "B = μ₀·(N/ℓ)·I : toute la géométrie étant fixe, Φp suit I (§2.1)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'inductance L et son unité, le henry",
          "stepTheme": "L'inductance L et son unité, le henry",
          "stepBadge": "L'inductance L et son unité, le henry",
          "paragraphText": "• Inductance : quotient du flux propre par l'intensité du courant qui traverse la bobine, L = Φp/I.\nElle s'exprime en henrys (H) et ne dépend que de la géométrie de la bobine (et de son noyau éventuel).",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p02_q3",
            "type": "mcq",
            "prompt": "L'inductance d'une bobine est définie par :",
            "options": [
              "L = Φp × I",
              "L = I/Φp",
              "L = Φp/I, exprimée en henrys",
              "L = Φp − I"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §2.2 : L est le coefficient de proportionnalité entre Φp et I."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La formule du solénoïde : L = μ₀·N²·S/ℓ",
          "stepTheme": "La formule du solénoïde : L = μ₀·N²·S/ℓ",
          "stepBadge": "La formule du solénoïde : L = μ₀·N²·S/ℓ",
          "paragraphText": "En combinant Φp = μ₀·(N²/ℓ)·S·I et L = Φp/I, on obtient l'inductance du solénoïde.\nElle croît avec le carré du nombre de spires et avec la section, et diminue quand la bobine s'allonge.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p02_q4",
            "type": "mcq",
            "prompt": "L'inductance d'un solénoïde de N spires, de longueur ℓ et de section S vaut :",
            "options": [
              "$L = \\mu_0 N S/\\ell$",
              "$L = \\mu_0 N^2 S/\\ell$",
              "$L = \\mu_0 N^2 \\ell/S$",
              "$L = N^2 S/(\\mu_0 \\ell)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le N² vient du double rôle des spires : elles créent le champ et elles sont traversées par le flux (§2.2)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice d'application 1 : le champ du solénoïde",
          "stepTheme": "L'exercice d'application 1 : le champ du solénoïde",
          "stepBadge": "L'exercice d'application 1 : le champ du solénoïde",
          "paragraphText": "Le solénoïde de l'exercice d'application 1 compte 100 spires sur 40 cm, parcourues par 100 mA.\nLa solution donne les caractéristiques du champ intérieur : direction l'axe, sens de la face sud vers la face nord, et norme B = 3,14 × 10⁻⁵ T.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p02_q5",
            "type": "mcq",
            "prompt": "Le champ à l'intérieur du solénoïde de l'exercice d'application 1 (100 spires ; 40 cm ; 100 mA) vaut :",
            "options": [
              "3,14 × 10⁻⁵ T",
              "3,14 × 10⁻³ T",
              "6,1 × 10⁻³ T",
              "1,97 T"
            ],
            "correctAnswerIndex": 0,
            "explanation": "B = μ₀·(N/ℓ)·I donne 3,14 × 10⁻⁵ T ; 6,1 × 10⁻³ T est le champ de l'exercice 5, 1,97 H une inductance."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L ne dépend pas du courant",
          "stepTheme": "L ne dépend pas du courant",
          "stepBadge": "L ne dépend pas du courant",
          "paragraphText": "Piège : doubler le courant double le flux propre, mais leur rapport L reste inchangé.\nL'inductance est une propriété de la bobine (spires, longueur, section), pas du régime de fonctionnement.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p02_q6",
            "type": "mcq",
            "prompt": "Si le courant dans une bobine double, son inductance :",
            "options": [
              "Double",
              "Est divisée par deux",
              "Ne change pas : Φp double aussi, et L = Φp/I reste constant",
              "Devient nulle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le sens de la remarque du §2.2 : L est un coefficient de proportionnalité propre à la bobine."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l10_auto_induction_p02_q1",
          "type": "mcq",
          "prompt": "Le flux propre d'une bobine est le flux :",
          "options": [
            "Créé par un aimant extérieur à travers la bobine",
            "Créé par le champ magnétique de la bobine à travers sa propre surface",
            "Du courant dans le fil",
            "Toujours nul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §2.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p02_q2",
          "type": "mcq",
          "prompt": "Le flux propre d'une bobine est proportionnel à l'intensité du courant qui la traverse car :",
          "options": [
            "La section des spires grandit avec I",
            "Le champ B créé par la bobine est lui-même proportionnel à I",
            "La longueur de la bobine varie",
            "Le nombre de spires augmente"
          ],
          "correctAnswerIndex": 1,
          "explanation": "B = μ₀·(N/ℓ)·I : toute la géométrie étant fixe, Φp suit I (§2.1)."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p02_q3",
          "type": "mcq",
          "prompt": "L'inductance d'une bobine est définie par :",
          "options": [
            "L = Φp × I",
            "L = I/Φp",
            "L = Φp/I, exprimée en henrys",
            "L = Φp − I"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §2.2 : L est le coefficient de proportionnalité entre Φp et I."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p02_q4",
          "type": "mcq",
          "prompt": "L'inductance d'un solénoïde de N spires, de longueur ℓ et de section S vaut :",
          "options": [
            "$L = \\mu_0 N S/\\ell$",
            "$L = \\mu_0 N^2 S/\\ell$",
            "$L = \\mu_0 N^2 \\ell/S$",
            "$L = N^2 S/(\\mu_0 \\ell)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le N² vient du double rôle des spires : elles créent le champ et elles sont traversées par le flux (§2.2)."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p02_q5",
          "type": "mcq",
          "prompt": "Le champ à l'intérieur du solénoïde de l'exercice d'application 1 (100 spires ; 40 cm ; 100 mA) vaut :",
          "options": [
            "3,14 × 10⁻⁵ T",
            "3,14 × 10⁻³ T",
            "6,1 × 10⁻³ T",
            "1,97 T"
          ],
          "correctAnswerIndex": 0,
          "explanation": "B = μ₀·(N/ℓ)·I donne 3,14 × 10⁻⁵ T ; 6,1 × 10⁻³ T est le champ de l'exercice 5, 1,97 H une inductance."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p02_q6",
          "type": "mcq",
          "prompt": "Si le courant dans une bobine double, son inductance :",
          "options": [
            "Double",
            "Est divisée par deux",
            "Ne change pas : Φp double aussi, et L = Φp/I reste constant",
            "Devient nulle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le sens de la remarque du §2.2 : L est un coefficient de proportionnalité propre à la bobine."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l10_auto_induction_p03",
      "order": 3,
      "title": "La force électromotrice d'auto-induction",
      "summary": "e = −L·di/dt : la bobine se comporte comme un générateur en opposition ; e est nulle dès que le courant est constant.",
      "conceptExplanation": "La variation du flux propre engendre une force électromotrice induite : la bobine se comporte comme un générateur en opposition avec le générateur d'alimentation du circuit.\nComme Φp = L·i, la loi de Faraday donne la f.é.m. d'auto-induction : e = −dΦp/dt = −L·(di/dt), en volts.\nElle est proportionnelle à la rapidité de variation du courant et s'annule quand le courant est constant.\nDans l'exercice d'application 3 (L = 12 mH), un courant croissant à 4 A/s donne e = −48 mV, un palier donne e = 0, et une décroissance à −6 A/s donne e = +72 mV ; dans l'exercice 4 (L = 0,1 H), les valeurs sont −0,4 V et +0,6 V.",
      "keyRule": "e = −L·di/dt : signe opposé à la variation ; courant constant ⇒ e = 0.",
      "formulas": [
        {
          "name": "f.é.m. d'auto-induction",
          "formula": "e = -L \\frac{di}{dt}",
          "note": "En volts ; L en henrys, di/dt en A/s."
        }
      ],
      "workedExample": {
        "title": "L'exercice d'application 3 : trois intervalles, trois valeurs",
        "statement": "Une bobine de L = 12 mH et de résistance négligeable est parcourue par un courant qui croît de 4 A/s, reste constant, puis décroît de 6 A/s. Calcule la f.é.m. sur chaque intervalle.",
        "methodSteps": [
          "Croissance : e = −L × 4 = −48 mV.",
          "Palier : di/dt = 0, donc e = 0 V.",
          "Décroissance : e = −L × (−6) = +72 mV : la f.é.m. change de signe et soutient le courant."
        ],
        "conclusion": "Ce sont les trois valeurs de la solution de l'exercice d'application 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'expression e = −L·di/dt",
          "stepTheme": "L'expression e = −L·di/dt",
          "stepBadge": "L'expression e = −L·di/dt",
          "paragraphText": "La loi de Faraday appliquée au flux propre Φp = L·i donne immédiatement la f.é.m. d'auto-induction.\nSon expression e = −L·(di/dt) fait intervenir l'inductance et la pente du courant, en volts.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p03_q1",
            "type": "mcq",
            "prompt": "La f.é.m. d'auto-induction d'une bobine d'inductance L vaut :",
            "options": [
              "$e = -L \\times di/dt$",
              "$e = L \\times i$",
              "$e = -L/i$",
              "$e = L \\times di/dt$ avec le signe plus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'expression du §2.3, héritée de e = −dΦ/dt avec Φp = L·i."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un générateur en opposition",
          "stepTheme": "Un générateur en opposition",
          "stepBadge": "Un générateur en opposition",
          "paragraphText": "Le résumé décrit la bobine en régime transitoire comme un générateur en opposition avec le générateur d'alimentation.\nÀ l'établissement du courant, sa f.é.m. freine la croissance ; à la rupture, elle tend au contraire à maintenir le courant.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p03_q2",
            "type": "mcq",
            "prompt": "Lors de l'établissement du courant, la f.é.m. d'auto-induction agit comme :",
            "options": [
              "Un générateur qui aide l'alimentation",
              "Un générateur en opposition, qui freine la croissance du courant",
              "Une résistance nulle",
              "Un interrupteur ouvert"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'interprétation du §2.3 : manifestation directe de la loi de Lenz."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Courant constant : e = 0",
          "stepTheme": "Courant constant : e = 0",
          "stepBadge": "Courant constant : e = 0",
          "paragraphText": "Piège : une bobine parcourue par un courant constant, même intense, ne présente aucune f.é.m. d'auto-induction.\nSeule la variation compte : sur les paliers des graphes i(t), e s'annule systématiquement.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p03_q3",
            "type": "mcq",
            "prompt": "Une bobine traversée par un courant constant de 10 A a une f.é.m. d'auto-induction :",
            "options": [
              "Très grande",
              "Égale à 10 V",
              "Nulle, car di/dt = 0",
              "Égale à L × 10"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le cas du régime permanent : e = −L·0 = 0, comme sur le palier de l'exercice d'application 3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'exercice d'application 3 : −48 mV, 0, +72 mV",
          "stepTheme": "L'exercice d'application 3 : −48 mV, 0, +72 mV",
          "stepBadge": "L'exercice d'application 3 : −48 mV, 0, +72 mV",
          "paragraphText": "Pour L = 12 mH : la croissance à 4 A/s donne e = −48 mV ; le palier donne 0.\nLa décroissance à −6 A/s donne e = +72 mV : remarquez que la valeur absolue est plus grande car la pente est plus forte.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p03_q4",
            "type": "mcq",
            "prompt": "Quand le courant décroît à −6 A/s dans la bobine de 12 mH, la f.é.m. vaut :",
            "options": [
              "−48 mV",
              "−72 mV",
              "0 V",
              "+72 mV"
            ],
            "correctAnswerIndex": 3,
            "explanation": "e = −L·(di/dt) avec di/dt négatif donne un e positif : solution de l'exercice d'application 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 4 : −0,4 V et +0,6 V",
          "stepTheme": "L'exercice 4 : −0,4 V et +0,6 V",
          "stepBadge": "L'exercice 4 : −0,4 V et +0,6 V",
          "paragraphText": "Dans l'exercice 4, une bobine de 0,1 H est parcourue par un courant triangulaire d'amplitude 12 mA.\nLa correction obtient e = −0,4 V sur les montées (pente 4 A/s en unités du graphe) et e = +0,6 V sur les descentes (pente −6).",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p03_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 4 (L = 0,1 H), la f.é.m. pendant les phases de décroissance du courant vaut :",
            "options": [
              "+0,6 V",
              "−0,4 V",
              "−0,6 V",
              "0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "e = −0,1 × (−6) = +0,6 V : le signe positif traduit le soutien du courant par la bobine."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une variation brutale donne une grande f.é.m.",
          "stepTheme": "Une variation brutale donne une grande f.é.m.",
          "stepBadge": "Une variation brutale donne une grande f.é.m.",
          "paragraphText": "La f.é.m. est proportionnelle à la pente di/dt : une rupture brusque du courant la rend très grande.\nC'est l'origine de l'étincelle de rupture décrite dans la documentation de fin de leçon.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p03_q6",
            "type": "mcq",
            "prompt": "La f.é.m. d'auto-induction est d'autant plus grande que :",
            "options": [
              "Le courant est intense et constant",
              "La variation du courant est rapide (forte pente di/dt)",
              "La résistance est faible",
              "Le circuit est ouvert depuis longtemps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "e = −L·di/dt : seule la rapidité de la variation compte, pas la valeur du courant."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l10_auto_induction_p03_q1",
          "type": "mcq",
          "prompt": "La f.é.m. d'auto-induction d'une bobine d'inductance L vaut :",
          "options": [
            "$e = -L \\times di/dt$",
            "$e = L \\times i$",
            "$e = -L/i$",
            "$e = L \\times di/dt$ avec le signe plus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'expression du §2.3, héritée de e = −dΦ/dt avec Φp = L·i."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p03_q2",
          "type": "mcq",
          "prompt": "Lors de l'établissement du courant, la f.é.m. d'auto-induction agit comme :",
          "options": [
            "Un générateur qui aide l'alimentation",
            "Un générateur en opposition, qui freine la croissance du courant",
            "Une résistance nulle",
            "Un interrupteur ouvert"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'interprétation du §2.3 : manifestation directe de la loi de Lenz."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p03_q3",
          "type": "mcq",
          "prompt": "Une bobine traversée par un courant constant de 10 A a une f.é.m. d'auto-induction :",
          "options": [
            "Très grande",
            "Égale à 10 V",
            "Nulle, car di/dt = 0",
            "Égale à L × 10"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le cas du régime permanent : e = −L·0 = 0, comme sur le palier de l'exercice d'application 3."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p03_q4",
          "type": "mcq",
          "prompt": "Quand le courant décroît à −6 A/s dans la bobine de 12 mH, la f.é.m. vaut :",
          "options": [
            "−48 mV",
            "−72 mV",
            "0 V",
            "+72 mV"
          ],
          "correctAnswerIndex": 3,
          "explanation": "e = −L·(di/dt) avec di/dt négatif donne un e positif : solution de l'exercice d'application 3."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p03_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 4 (L = 0,1 H), la f.é.m. pendant les phases de décroissance du courant vaut :",
          "options": [
            "+0,6 V",
            "−0,4 V",
            "−0,6 V",
            "0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "e = −0,1 × (−6) = +0,6 V : le signe positif traduit le soutien du courant par la bobine."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p03_q6",
          "type": "mcq",
          "prompt": "La f.é.m. d'auto-induction est d'autant plus grande que :",
          "options": [
            "Le courant est intense et constant",
            "La variation du courant est rapide (forte pente di/dt)",
            "La résistance est faible",
            "Le circuit est ouvert depuis longtemps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "e = −L·di/dt : seule la rapidité de la variation compte, pas la valeur du courant."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l10_auto_induction_p04",
      "order": 4,
      "title": "La tension aux bornes d'une bobine",
      "summary": "uAB = r·i + L·di/dt ; inductance pure si r = 0 ; en régime permanent, la bobine se comporte comme une simple résistance.",
      "conceptExplanation": "Une bobine réelle est modélisée par une inductance L en série avec sa résistance interne r ; la convention du résumé donne uAB = r·i − e.\nEn remplaçant e par −L·(di/dt), on obtient la loi d'Ohm pour une bobine : uAB = r·i + L·(di/dt).\nSi r = 0, la bobine est une inductance pure et uAB = −e = L·(di/dt).\nEn régime continu ou permanent, I est constant : le terme en di/dt disparaît et la bobine se comporte comme une résistance pure, UAB = r·I — c'est pourquoi une bobine ne « bloque » pas le courant continu établi.",
      "keyRule": "u = r·i + L·di/dt ; régime permanent ⇒ u = r·I ; r = 0 ⇒ u = L·di/dt.",
      "formulas": [
        {
          "name": "Tension aux bornes d'une bobine",
          "formula": "u_{AB} = r i + L \\frac{di}{dt}",
          "note": "Avec uAB = r·i − e et e = −L·di/dt (§3.2)."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 4 : i = 5 − 2,5t",
        "statement": "Une bobine de L = 0,5 H et r = 8 Ω est parcourue par un courant d'intensité i = 5 − 2,5t (en ampères). Détermine la tension à ses bornes, puis sa valeur à t = 1 s.",
        "methodSteps": [
          "La dérivée du courant est constante : di/dt = −2,5 A/s.",
          "u = r·i + L·(di/dt) donne u = 38,75 − 20t.",
          "À t = 1 s : u = 18,75 V."
        ],
        "conclusion": "Ce sont les deux résultats de la solution de l'activité d'application 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La loi d'Ohm pour une bobine",
          "stepTheme": "La loi d'Ohm pour une bobine",
          "stepBadge": "La loi d'Ohm pour une bobine",
          "paragraphText": "La tension aux bornes d'une bobine comporte deux termes : la chute ohmique r·i et le terme d'auto-induction.\nOn écrit uAB = r·i + L·(di/dt), valable à tout instant, en régime transitoire comme en régime permanent.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p04_q1",
            "type": "mcq",
            "prompt": "La tension aux bornes d'une bobine (L, r) parcourue par un courant variable i est :",
            "options": [
              "$u = r i + L \\times di/dt$",
              "$u = r i$ dans tous les cas",
              "$u = L \\times i$",
              "$u = r i - L \\times i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la loi d'Ohm du §3.2, obtenue à partir de uAB = r·i − e."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas de l'inductance pure (r = 0)",
          "stepTheme": "Le cas de l'inductance pure (r = 0)",
          "stepBadge": "Le cas de l'inductance pure (r = 0)",
          "paragraphText": "Si la résistance interne est nulle ou négligeable, la bobine est une inductance pure.\nLa remarque du résumé donne alors uAB = −e, c'est-à-dire uAB = L·(di/dt).",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p04_q2",
            "type": "mcq",
            "prompt": "Pour une bobine de résistance négligeable, la tension à ses bornes vaut :",
            "options": [
              "u = 0",
              "u = L·di/dt, c'est-à-dire −e",
              "u = r·i",
              "u = L·i"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première remarque du §3.2 ; elle est utilisée dans les exercices 5 et 6 (uAC = L·di/dt)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "En régime permanent : une simple résistance",
          "stepTheme": "En régime permanent : une simple résistance",
          "stepBadge": "En régime permanent : une simple résistance",
          "paragraphText": "En régime continu ou permanent, l'intensité est constante : le terme L·di/dt est nul.\nLa bobine se comporte alors comme une résistance pure : UAB = r·I.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p04_q3",
            "type": "mcq",
            "prompt": "En régime permanent (courant constant), une bobine réelle se comporte comme :",
            "options": [
              "Un circuit ouvert",
              "Un générateur",
              "Une résistance pure : UAB = r·I",
              "Un court-circuit dans tous les cas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la deuxième remarque du §3.2 ; si de plus r = 0, elle devient un court-circuit en régime permanent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'activité 4 : u = 18,75 V à t = 1 s",
          "stepTheme": "L'activité 4 : u = 18,75 V à t = 1 s",
          "stepBadge": "L'activité 4 : u = 18,75 V à t = 1 s",
          "paragraphText": "Avec i = 5 − 2,5t, la tension calculée dans l'activité 4 est u = 38,75 − 20t.\nÀ la date t = 1 s, elle vaut donc u = 18,75 V.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p04_q4",
            "type": "mcq",
            "prompt": "La tension aux bornes de la bobine de l'activité 4 (L = 0,5 H ; r = 8 Ω ; i = 5 − 2,5t) à t = 1 s vaut :",
            "options": [
              "38,75 V",
              "20 V",
              "2,5 V",
              "18,75 V"
            ],
            "correctAnswerIndex": 3,
            "explanation": "u = 38,75 − 20 × 1 = 18,75 V dans la solution de l'activité 4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 3 : u = 2,835 V",
          "stepTheme": "L'exercice 3 : u = 2,835 V",
          "stepBadge": "L'exercice 3 : u = 2,835 V",
          "paragraphText": "Dans l'exercice 3, la bobine (R = 4 Ω, L = 0,5 H) est parcourue par i = 0,63·t.\nLa correction calcule la tension à t = 1 s : u = r·i + L·(di/dt) = 2,835 V, les deux termes contribuant.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p04_q5",
            "type": "mcq",
            "prompt": "La tension aux bornes de la bobine de l'exercice 3 à t = 1 s (i = 0,63t) vaut :",
            "options": [
              "2,835 V",
              "0,63 V",
              "4 V",
              "0,315 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "u = 4 × 0,63 + 0,5 × 0,63 dans la correction, soit 2,835 V."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le terme r·i",
          "stepTheme": "Ne pas oublier le terme r·i",
          "stepBadge": "Ne pas oublier le terme r·i",
          "paragraphText": "Piège : pour une bobine réelle, la tension n'est pas seulement le terme d'auto-induction.\nOublier r·i fausse tous les calculs en régime variable ; il ne disparaît que si l'énoncé dit la résistance négligeable.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p04_q6",
            "type": "mcq",
            "prompt": "La tension aux bornes d'une bobine réelle en régime variable comprend :",
            "options": [
              "Uniquement le terme L·di/dt",
              "Le terme ohmique r·i et le terme d'auto-induction L·di/dt",
              "Uniquement le terme r·i",
              "Aucun des deux termes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la structure même de la loi d'Ohm du §3.2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l10_auto_induction_p04_q1",
          "type": "mcq",
          "prompt": "La tension aux bornes d'une bobine (L, r) parcourue par un courant variable i est :",
          "options": [
            "$u = r i + L \\times di/dt$",
            "$u = r i$ dans tous les cas",
            "$u = L \\times i$",
            "$u = r i - L \\times i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la loi d'Ohm du §3.2, obtenue à partir de uAB = r·i − e."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p04_q2",
          "type": "mcq",
          "prompt": "Pour une bobine de résistance négligeable, la tension à ses bornes vaut :",
          "options": [
            "u = 0",
            "u = L·di/dt, c'est-à-dire −e",
            "u = r·i",
            "u = L·i"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première remarque du §3.2 ; elle est utilisée dans les exercices 5 et 6 (uAC = L·di/dt)."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p04_q3",
          "type": "mcq",
          "prompt": "En régime permanent (courant constant), une bobine réelle se comporte comme :",
          "options": [
            "Un circuit ouvert",
            "Un générateur",
            "Une résistance pure : UAB = r·I",
            "Un court-circuit dans tous les cas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la deuxième remarque du §3.2 ; si de plus r = 0, elle devient un court-circuit en régime permanent."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p04_q4",
          "type": "mcq",
          "prompt": "La tension aux bornes de la bobine de l'activité 4 (L = 0,5 H ; r = 8 Ω ; i = 5 − 2,5t) à t = 1 s vaut :",
          "options": [
            "38,75 V",
            "20 V",
            "2,5 V",
            "18,75 V"
          ],
          "correctAnswerIndex": 3,
          "explanation": "u = 38,75 − 20 × 1 = 18,75 V dans la solution de l'activité 4."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p04_q5",
          "type": "mcq",
          "prompt": "La tension aux bornes de la bobine de l'exercice 3 à t = 1 s (i = 0,63t) vaut :",
          "options": [
            "2,835 V",
            "0,63 V",
            "4 V",
            "0,315 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "u = 4 × 0,63 + 0,5 × 0,63 dans la correction, soit 2,835 V."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p04_q6",
          "type": "mcq",
          "prompt": "La tension aux bornes d'une bobine réelle en régime variable comprend :",
          "options": [
            "Uniquement le terme L·di/dt",
            "Le terme ohmique r·i et le terme d'auto-induction L·di/dt",
            "Uniquement le terme r·i",
            "Aucun des deux termes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la structure même de la loi d'Ohm du §3.2."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l10_auto_induction_p05",
      "order": 5,
      "title": "L'énergie emmagasinée dans une bobine",
      "summary": "E = ½·L·i² : la puissance reçue se partage entre l'effet Joule (r·i²) et l'énergie magnétique stockée, restituée à la rupture.",
      "conceptExplanation": "La puissance électrique reçue par une bobine est P = uAB·i = r·i² + L·i·(di/dt), que le résumé réécrit r·i² + d(½·L·i²)/dt.\nLe premier terme est la puissance dissipée par effet Joule ; le second est la puissance emmagasinée par la bobine.\nL'énergie magnétique emmagasinée par une bobine parcourue par un courant i est donc E = ½·L·i².\nDans l'activité d'application 6 (L = 1,5 H, I = 2 A), elle vaut E = 3 J, et elle est multipliée par 4 lorsque l'intensité double ; dans l'exercice 3, elle vaut 9,92 × 10⁻² J à t = 1 s.",
      "keyRule": "E = ½·L·i² : proportionnelle au carré du courant — doubler i quadruple l'énergie stockée.",
      "formulas": [
        {
          "name": "Énergie emmagasinée dans une bobine",
          "formula": "E = \\frac{1}{2} L i^2",
          "note": "En joules ; restituée au circuit lors de l'annulation du courant."
        },
        {
          "name": "Puissance reçue par une bobine",
          "formula": "P = r i^2 + \\frac{d}{dt}\\left(\\frac{1}{2} L i^2\\right)",
          "note": "Effet Joule + variation de l'énergie stockée (§4.1)."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 6 : doubler le courant",
        "statement": "Calcule l'énergie emmagasinée dans une bobine de L = 1,5 H parcourue par I = 2 A, et dis ce qu'elle devient si l'intensité double.",
        "methodSteps": [
          "E = ½·L·I² donne 3 J.",
          "Si I passe à 4 A, le terme I² est multiplié par 4.",
          "L'énergie emmagasinée est donc multipliée par 4 : elle passe à 12 J."
        ],
        "conclusion": "Ce sont les réponses de la solution de l'activité d'application 6."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule E = ½·L·i²",
          "stepTheme": "La formule E = ½·L·i²",
          "stepBadge": "La formule E = ½·L·i²",
          "paragraphText": "L'énergie emmagasinée par une bobine ne dépend que de son inductance et du courant qui la traverse à l'instant considéré.\nElle vaut E = ½·L·i², en joules, comme l'énergie cinétique dépend de ½·m·v².",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p05_q1",
            "type": "mcq",
            "prompt": "L'énergie emmagasinée dans une bobine d'inductance L parcourue par un courant i vaut :",
            "options": [
              "$E = \\frac{1}{2} L i^2$",
              "$E = L \\times i$",
              "$E = \\frac{1}{2} L^2 i$",
              "$E = L i^2$ sans le facteur un demi"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le résultat du §4.2 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le partage de la puissance : Joule et stockage",
          "stepTheme": "Le partage de la puissance : Joule et stockage",
          "stepBadge": "Le partage de la puissance : Joule et stockage",
          "paragraphText": "La puissance reçue P = r·i² + d(½·L·i²)/dt se partage en deux parts.\nLe terme r·i² est dissipé par effet Joule ; l'autre fait varier l'énergie magnétique stockée dans la bobine.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p05_q2",
            "type": "mcq",
            "prompt": "Dans la puissance reçue par une bobine, le terme r·i² correspond à :",
            "options": [
              "L'énergie emmagasinée",
              "La puissance dissipée par effet Joule",
              "La f.é.m. d'auto-induction",
              "La puissance du générateur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'identification du §4.1 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Doubler le courant quadruple l'énergie",
          "stepTheme": "Doubler le courant quadruple l'énergie",
          "stepBadge": "Doubler le courant quadruple l'énergie",
          "paragraphText": "L'énergie varie comme le carré de l'intensité : la solution de l'activité 6 le souligne.\nSi le courant est multiplié par 2, l'énergie stockée est multipliée par 4 ; par 3, elle est multipliée par 9.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p05_q3",
            "type": "mcq",
            "prompt": "Si l'intensité du courant dans une bobine double, son énergie emmagasinée est multipliée par :",
            "options": [
              "2",
              "8",
              "4",
              "Elle ne change pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "E varie en i² : c'est la seconde réponse de l'activité d'application 6."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'activité 6 : E = 3 J",
          "stepTheme": "L'activité 6 : E = 3 J",
          "stepBadge": "L'activité 6 : E = 3 J",
          "paragraphText": "Pour une inductance de 1,5 H et un courant de 2 A, l'énergie stockée est déjà de quelques joules.\nLa solution calcule E = 3 J : c'est l'énergie que la bobine restituera si le courant s'annule.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p05_q4",
            "type": "mcq",
            "prompt": "L'énergie emmagasinée dans la bobine de l'activité 6 (L = 1,5 H ; I = 2 A) vaut :",
            "options": [
              "1,5 J",
              "6 J",
              "0,75 J",
              "3 J"
            ],
            "correctAnswerIndex": 3,
            "explanation": "E = ½ × 1,5 × 2² = 3 J dans la solution de l'activité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 3 : E à t = 1 s",
          "stepTheme": "L'exercice 3 : E à t = 1 s",
          "stepBadge": "L'exercice 3 : E à t = 1 s",
          "paragraphText": "Dans l'exercice 3, le courant croît selon i = 0,63·t : à t = 1 s, il vaut 0,63 A.\nLa correction calcule alors l'énergie emmagasinée dans la bobine de 0,5 H : E = 9,92 × 10⁻² J.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p05_q5",
            "type": "mcq",
            "prompt": "L'énergie emmagasinée dans la bobine de l'exercice 3 à t = 1 s vaut environ :",
            "options": [
              "9,92 × 10⁻² J",
              "2,835 J",
              "0,63 J",
              "1 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "E = ½·L·i² avec i(1) = 0,63 A donne 9,92 × 10⁻² J ; 2,835 V est la tension calculée à la question précédente."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'énergie stockée est restituée à la rupture",
          "stepTheme": "L'énergie stockée est restituée à la rupture",
          "stepBadge": "L'énergie stockée est restituée à la rupture",
          "paragraphText": "Piège : l'énergie magnétique n'est pas perdue ; elle est stockée tant que le courant circule.\nQuand le courant s'annule, la bobine la restitue au circuit — d'où les étincelles possibles à l'ouverture si la restitution est brutale.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p05_q6",
            "type": "mcq",
            "prompt": "Lorsque le courant s'annule dans une bobine, son énergie emmagasinée :",
            "options": [
              "Disparaît sans effet",
              "Est restituée au circuit (elle peut produire une étincelle à la rupture)",
              "Se transforme en masse",
              "Reste stockée indéfiniment"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le mécanisme derrière le retard à l'extinction de L2 et l'étincelle de rupture de la documentation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l10_auto_induction_p05_q1",
          "type": "mcq",
          "prompt": "L'énergie emmagasinée dans une bobine d'inductance L parcourue par un courant i vaut :",
          "options": [
            "$E = \\frac{1}{2} L i^2$",
            "$E = L \\times i$",
            "$E = \\frac{1}{2} L^2 i$",
            "$E = L i^2$ sans le facteur un demi"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le résultat du §4.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p05_q2",
          "type": "mcq",
          "prompt": "Dans la puissance reçue par une bobine, le terme r·i² correspond à :",
          "options": [
            "L'énergie emmagasinée",
            "La puissance dissipée par effet Joule",
            "La f.é.m. d'auto-induction",
            "La puissance du générateur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'identification du §4.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p05_q3",
          "type": "mcq",
          "prompt": "Si l'intensité du courant dans une bobine double, son énergie emmagasinée est multipliée par :",
          "options": [
            "2",
            "8",
            "4",
            "Elle ne change pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "E varie en i² : c'est la seconde réponse de l'activité d'application 6."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p05_q4",
          "type": "mcq",
          "prompt": "L'énergie emmagasinée dans la bobine de l'activité 6 (L = 1,5 H ; I = 2 A) vaut :",
          "options": [
            "1,5 J",
            "6 J",
            "0,75 J",
            "3 J"
          ],
          "correctAnswerIndex": 3,
          "explanation": "E = ½ × 1,5 × 2² = 3 J dans la solution de l'activité."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p05_q5",
          "type": "mcq",
          "prompt": "L'énergie emmagasinée dans la bobine de l'exercice 3 à t = 1 s vaut environ :",
          "options": [
            "9,92 × 10⁻² J",
            "2,835 J",
            "0,63 J",
            "1 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "E = ½·L·i² avec i(1) = 0,63 A donne 9,92 × 10⁻² J ; 2,835 V est la tension calculée à la question précédente."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p05_q6",
          "type": "mcq",
          "prompt": "Lorsque le courant s'annule dans une bobine, son énergie emmagasinée :",
          "options": [
            "Disparaît sans effet",
            "Est restituée au circuit (elle peut produire une étincelle à la rupture)",
            "Se transforme en masse",
            "Reste stockée indéfiniment"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le mécanisme derrière le retard à l'extinction de L2 et l'étincelle de rupture de la documentation."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l10_auto_induction_p06",
      "order": 6,
      "title": "Déterminations pratiques et étincelle de rupture",
      "summary": "On détermine L par le flux propre ou par la tension u = L·di/dt ; la documentation explique l'étincelle de rupture et ses remèdes.",
      "conceptExplanation": "Plusieurs voies mènent à l'inductance : par le flux propre (L = Φp/i, comme dans la situation d'évaluation où Φp = L·i = 10⁻³ Wb pour L = 5 mH et i = 0,2 A), ou par la géométrie du solénoïde.\nDans l'exercice 5, le solénoïde (N = 400 spires, ℓ = 41,2 cm) parcouru par 5 A crée un champ B = 6,1 × 10⁻³ T ; de résistance négligeable, sa tension est u = L·di/dt : avec L = 10⁻³ H, elle vaut 0,05 V quand le courant croît à 50 A/s et −0,2 V quand il décroît à −200 A/s.\nLa documentation décrit l'étincelle de rupture : en débranchant brusquement un appareil à bobines, de fortes étincelles apparaissent à la prise — utilisées dans les allumeurs, mais parasites pour la radio.\nOn y remédie en plaçant en parallèle aux bornes de la bobine une résistance et une diode, ou un condensateur aux bornes de l'interrupteur.",
      "keyRule": "L se mesure par Φp/i ou par u/(di/dt) ; à la rupture, la bobine restitue son énergie — parfois en étincelle.",
      "formulas": [
        {
          "name": "Flux propre à partir de L",
          "formula": "\\phi_p = L \\times i",
          "note": "Le calcul de la situation d'évaluation : 5 mH sous 0,2 A donnent 10⁻³ Wb."
        },
        {
          "name": "Tension d'une inductance pure",
          "formula": "u = L \\frac{di}{dt}",
          "note": "Utilisée dans l'exercice 5 pour tracer u(t) à partir de i(t)."
        }
      ],
      "workedExample": {
        "title": "La situation d'évaluation : le flux propre de la bobine de TP",
        "statement": "Une bobine sans noyau a une inductance L = 5 mH et une résistance r = 2 Ω. Calcule son flux propre quand elle est parcourue par un courant de 0,2 A.",
        "methodSteps": [
          "Par définition de l'inductance, Φp = L·i.",
          "Avec L = 5 × 10⁻³ H et i = 0,2 A, on obtient Φp = 1 × 10⁻³ Wb.",
          "Ce flux ne varie — et n'induit de f.é.m. — que sur les intervalles où le courant visualisé varie."
        ],
        "conclusion": "C'est le calcul demandé à la question 2 de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le flux propre de la situation : 10⁻³ Wb",
          "stepTheme": "Le flux propre de la situation : 10⁻³ Wb",
          "stepBadge": "Le flux propre de la situation : 10⁻³ Wb",
          "paragraphText": "La bobine de la situation d'évaluation a une inductance de 5 mH.\nParcourue par 0,2 A, son flux propre vaut Φp = L·i = 10⁻³ Wb.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p06_q1",
            "type": "mcq",
            "prompt": "Le flux propre de la bobine de la situation (L = 5 mH ; i = 0,2 A) vaut :",
            "options": [
              "10⁻³ Wb",
              "1 Wb",
              "25 × 10⁻³ Wb",
              "0,2 Wb"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Φp = L·i = 5 × 10⁻³ × 0,2 = 10⁻³ Wb (question 2 de la situation)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 5 : le champ du solénoïde de 400 spires",
          "stepTheme": "L'exercice 5 : le champ du solénoïde de 400 spires",
          "stepBadge": "L'exercice 5 : le champ du solénoïde de 400 spires",
          "paragraphText": "Le solénoïde de l'exercice 5 compte 400 spires sur 41,2 cm, parcourues par un courant continu de 5 A.\nLa correction calcule le champ intérieur : B = 6,1 × 10⁻³ T, avant d'en déduire flux propre et inductance.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p06_q2",
            "type": "mcq",
            "prompt": "Le champ créé par le solénoïde de l'exercice 5 (400 spires ; 41,2 cm ; 5 A) vaut environ :",
            "options": [
              "3,14 × 10⁻⁵ T",
              "6,1 × 10⁻³ T",
              "3 mT exactement comme l'exercice 6",
              "1,97 T"
            ],
            "correctAnswerIndex": 1,
            "explanation": "B = μ₀·(N/ℓ)·I donne 6,1 × 10⁻³ T dans la correction de l'exercice 5."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La tension en créneaux de l'exercice 5",
          "stepTheme": "La tension en créneaux de l'exercice 5",
          "stepBadge": "La tension en créneaux de l'exercice 5",
          "paragraphText": "La résistance du solénoïde étant négligeable, uAC = L·di/dt : la tension suit la pente du courant.\nAvec L = 10⁻³ H : montée à 50 A/s ⇒ u = 0,05 V ; descente à −200 A/s ⇒ u = −0,2 V.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p06_q3",
            "type": "mcq",
            "prompt": "Pendant la décroissance rapide du courant (−200 A/s) dans l'exercice 5 (L = 10⁻³ H, r négligeable), la tension vaut :",
            "options": [
              "+0,05 V",
              "0 V",
              "−0,2 V",
              "+0,2 V"
            ],
            "correctAnswerIndex": 2,
            "explanation": "u = L·di/dt = 10⁻³ × (−200) = −0,2 V dans la correction ; +0,05 V correspond à la montée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'étincelle de rupture (documentation)",
          "stepTheme": "L'étincelle de rupture (documentation)",
          "stepBadge": "L'étincelle de rupture (documentation)",
          "paragraphText": "• Étincelle de rupture : forte étincelle qui apparaît lorsqu'on débranche brusquement des appareils comportant des moteurs, donc des bobines.\nElle provient de la très grande f.é.m. d'auto-induction créée par l'annulation rapide du courant.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p06_q4",
            "type": "mcq",
            "prompt": "L'étincelle de rupture observée en débranchant un appareil à moteur est due :",
            "options": [
              "Au champ magnétique terrestre",
              "À un défaut de la prise",
              "À la foudre",
              "À la forte f.é.m. d'auto-induction des bobines lors de l'annulation brusque du courant"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'explication de la documentation qui clôt le résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les remèdes contre les étincelles parasites",
          "stepTheme": "Les remèdes contre les étincelles parasites",
          "stepBadge": "Les remèdes contre les étincelles parasites",
          "paragraphText": "La documentation indique comment atténuer le phénomène, gênant pour les moteurs et les récepteurs radio.\nOn place en parallèle aux bornes de la bobine une résistance et une diode, ou un condensateur aux bornes de l'interrupteur.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p06_q5",
            "type": "mcq",
            "prompt": "Pour supprimer les étincelles de rupture parasites, la documentation propose de placer :",
            "options": [
              "Une résistance et une diode en parallèle aux bornes de la bobine, ou un condensateur aux bornes de l'interrupteur",
              "Un fusible plus gros",
              "Un aimant près de l'interrupteur",
              "Rien : le phénomène est inévitable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les deux remèdes cités dans la documentation (source : Eurin, Terminales C, E)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les étincelles provoquent des parasites radio",
          "stepTheme": "Les étincelles provoquent des parasites radio",
          "stepBadge": "Les étincelles provoquent des parasites radio",
          "paragraphText": "Les étincelles de rupture provoquent des ondes électromagnétiques interceptées par l'antenne des récepteurs radio.\nÀ l'inverse, le même phénomène est exploité utilement dans les allumeurs.",
          "exercise": {
            "id": "terminale_c_physique_l10_auto_induction_p06_q6",
            "type": "mcq",
            "prompt": "Les étincelles de rupture sont gênantes pour les récepteurs radio car elles :",
            "options": [
              "Coupent l'alimentation",
              "Provoquent des ondes électromagnétiques captées par l'antenne",
              "Aimantent les haut-parleurs",
              "Font fondre les fusibles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la dernière précision de la documentation du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l10_auto_induction_p06_q1",
          "type": "mcq",
          "prompt": "Le flux propre de la bobine de la situation (L = 5 mH ; i = 0,2 A) vaut :",
          "options": [
            "10⁻³ Wb",
            "1 Wb",
            "25 × 10⁻³ Wb",
            "0,2 Wb"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Φp = L·i = 5 × 10⁻³ × 0,2 = 10⁻³ Wb (question 2 de la situation)."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p06_q2",
          "type": "mcq",
          "prompt": "Le champ créé par le solénoïde de l'exercice 5 (400 spires ; 41,2 cm ; 5 A) vaut environ :",
          "options": [
            "3,14 × 10⁻⁵ T",
            "6,1 × 10⁻³ T",
            "3 mT exactement comme l'exercice 6",
            "1,97 T"
          ],
          "correctAnswerIndex": 1,
          "explanation": "B = μ₀·(N/ℓ)·I donne 6,1 × 10⁻³ T dans la correction de l'exercice 5."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p06_q3",
          "type": "mcq",
          "prompt": "Pendant la décroissance rapide du courant (−200 A/s) dans l'exercice 5 (L = 10⁻³ H, r négligeable), la tension vaut :",
          "options": [
            "+0,05 V",
            "0 V",
            "−0,2 V",
            "+0,2 V"
          ],
          "correctAnswerIndex": 2,
          "explanation": "u = L·di/dt = 10⁻³ × (−200) = −0,2 V dans la correction ; +0,05 V correspond à la montée."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p06_q4",
          "type": "mcq",
          "prompt": "L'étincelle de rupture observée en débranchant un appareil à moteur est due :",
          "options": [
            "Au champ magnétique terrestre",
            "À un défaut de la prise",
            "À la foudre",
            "À la forte f.é.m. d'auto-induction des bobines lors de l'annulation brusque du courant"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'explication de la documentation qui clôt le résumé."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p06_q5",
          "type": "mcq",
          "prompt": "Pour supprimer les étincelles de rupture parasites, la documentation propose de placer :",
          "options": [
            "Une résistance et une diode en parallèle aux bornes de la bobine, ou un condensateur aux bornes de l'interrupteur",
            "Un fusible plus gros",
            "Un aimant près de l'interrupteur",
            "Rien : le phénomène est inévitable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les deux remèdes cités dans la documentation (source : Eurin, Terminales C, E)."
        },
        {
          "id": "terminale_c_physique_l10_auto_induction_p06_q6",
          "type": "mcq",
          "prompt": "Les étincelles de rupture sont gênantes pour les récepteurs radio car elles :",
          "options": [
            "Coupent l'alimentation",
            "Provoquent des ondes électromagnétiques captées par l'antenne",
            "Aimantent les haut-parleurs",
            "Font fondre les fusibles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la dernière précision de la documentation du résumé."
        }
      ]
    }
  ]
};
