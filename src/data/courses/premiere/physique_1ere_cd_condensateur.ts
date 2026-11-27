import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Le condensateur » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Le condensateur » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L04_CONDENSATEUR: CurriculumChapter = {
  "id": "premiere_c_physique_l04_condensateur",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 4,
  "title": "Leçon 4 : Le condensateur",
  "summary": "Un condensateur accumule des charges opposées sur ses deux armatures, séparées par un diélectrique ; sa capacité C = Q divisé par U caractérise la charge stockée. La leçon donne la capacité d'un condensateur plan, ses limites d'utilisation, les lois d'association en série et en parallèle, puis l'énergie emmagasinée E = ½ × C × U².",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Le condensateur » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l04_condensateur_p01",
      "order": 1,
      "title": "Généralités : charge et décharge d'un condensateur",
      "summary": "Pendant la charge, les armatures portent des charges opposées QA = −QB ; pendant la décharge, elles redeviennent neutres.",
      "conceptExplanation": "Un condensateur est un ensemble de deux conducteurs dont les surfaces en regard sont proches et séparées par un isolant appelé diélectrique ; le diélectrique peut être de l'air.\nIl existe des condensateurs non polarisés, des condensateurs polarisés (électrochimiques) et des condensateurs à capacité variable.\nPendant la charge (interrupteur en position 1, générateur de 6 V), un courant transitoire circule : des électrons quittent l'armature A, qui se charge positivement (QA), et arrivent sur l'armature B, qui se charge négativement (QB) ; la tension passe de 0 à 6 V et le condensateur est dit chargé.\nLes charges des armatures sont de signes opposés et égales en valeur absolue : QA = −QB. On appelle charge du condensateur la quantité d'électricité portée par l'armature positive : Q = QA = −QB.\nPendant la décharge (position 2), un courant transitoire de sens inverse circule, la tension revient à 0 et les armatures redeviennent neutres : le condensateur est déchargé.",
      "keyRule": "Un condensateur chargé porte QA = −QB ; sa charge est celle de l'armature positive, Q = QA.",
      "formulas": [
        {
          "name": "Charges des armatures",
          "formula": "Q_A = -Q_B \\quad ; \\quad Q = Q_A",
          "note": "Q est la charge du condensateur, portée par l'armature positive."
        }
      ],
      "workedExample": {
        "title": "Le dispositif expérimental du cours : charge puis décharge",
        "statement": "Dans le dispositif du cours, le générateur a une tension normale de 6 V. Décris ce que l'on observe lorsque l'interrupteur K est en position 1, puis en position 2.",
        "methodSteps": [
          "Position 1 : l'aiguille du galvanomètre dévie vers la droite puis revient à sa position initiale, et la tension aux bornes du condensateur passe de 0 à 6 V.",
          "Interprétation : un courant transitoire de charge a circulé ; l'armature A s'est chargée positivement et l'armature B négativement.",
          "Position 2 : l'aiguille dévie vers la gauche puis revient, la tension passe de 6 V à 0 et les armatures redeviennent neutres."
        ],
        "conclusion": "Le condensateur accumule des charges pendant la charge et les restitue pendant la décharge : ce sont les observations des §2.2 et §2.3 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'un condensateur",
          "stepTheme": "La définition d'un condensateur",
          "stepBadge": "La définition d'un condensateur",
          "paragraphText": "• Condensateur : ensemble de deux conducteurs dont les surfaces en regard sont proches et séparées par un isolant appelé diélectrique.\nLe diélectrique peut être simplement de l'air, entre les deux conducteurs appelés armatures.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p01_q1",
            "type": "mcq",
            "prompt": "Un condensateur est constitué de deux conducteurs séparés par :",
            "options": [
              "Un conducteur parfait",
              "Un isolant appelé diélectrique",
              "Un générateur",
              "Un fil de cuivre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §1.1 du résumé : les surfaces en regard des deux conducteurs sont séparées par un diélectrique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les charges des armatures : QA = −QB",
          "stepTheme": "Les charges des armatures : QA = −QB",
          "stepBadge": "Les charges des armatures : QA = −QB",
          "paragraphText": "Pendant la charge, des électrons quittent l'armature A, qui se charge positivement, et arrivent sur l'armature B, qui se charge négativement.\nConclusion du résumé : les charges portées par les armatures d'un condensateur chargé sont de signes opposés et égales en valeur absolue.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p01_q2",
            "type": "mcq",
            "prompt": "Les charges des armatures d'un condensateur chargé vérifient :",
            "options": [
              "QA = QB, de même signe",
              "QA = −QB : signes opposés, même valeur absolue",
              "QA = 0 et QB quelconque",
              "QA + QB est maximal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion du §2.2.3 du résumé : QA = −QB."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La charge du condensateur Q = QA",
          "stepTheme": "La charge du condensateur Q = QA",
          "stepBadge": "La charge du condensateur Q = QA",
          "paragraphText": "• Charge d'un condensateur : quantité d'électricité portée par l'armature positive.\nOn la note Q = QA = −QB ; c'est elle qui intervient dans la relation fondamentale Q = C × U.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p01_q3",
            "type": "mcq",
            "prompt": "On appelle charge d'un condensateur :",
            "options": [
              "La somme des charges des deux armatures",
              "La charge de l'armature négative",
              "La quantité d'électricité portée par l'armature positive",
              "La charge du diélectrique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la conclusion du §2.3.3 du résumé : Q = QA = −QB."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le courant de charge est transitoire",
          "stepTheme": "Le courant de charge est transitoire",
          "stepBadge": "Le courant de charge est transitoire",
          "paragraphText": "Pendant la charge, l'aiguille du galvanomètre dévie puis revient à sa position initiale, pendant que la tension monte de 0 à 6 V.\nLe résumé conclut : lors de la charge (ou de la décharge), on observe un courant transitoire qui s'annule lorsque le condensateur est chargé (ou déchargé).",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p01_q4",
            "type": "mcq",
            "prompt": "Le courant qui circule pendant la charge d'un condensateur est :",
            "options": [
              "Permanent et constant",
              "Transitoire : il s'annule quand le condensateur est chargé",
              "Toujours nul",
              "Croissant sans limite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion du §2.3.3 : le courant de charge (ou de décharge) est transitoire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La décharge : retour à la neutralité",
          "stepTheme": "La décharge : retour à la neutralité",
          "stepBadge": "La décharge : retour à la neutralité",
          "paragraphText": "Pendant la décharge, le courant transitoire circule en sens inverse et les électrons décrivent un mouvement inverse de celui de la charge.\nLes armatures redeviennent neutres (QA = QB = 0) et la tension aux bornes devient nulle : le condensateur est déchargé.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p01_q5",
            "type": "mcq",
            "prompt": "À la fin de la décharge d'un condensateur, on observe :",
            "options": [
              "Une tension de 6 V conservée",
              "Des armatures chargées au maximum",
              "Une tension nulle et des armatures neutres",
              "Un courant permanent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'interprétation du §2.3.2 : QA = QB = 0 et la tension passe de 6 V à 0."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les types de condensateurs",
          "stepTheme": "Ne pas confondre les types de condensateurs",
          "stepBadge": "Ne pas confondre les types de condensateurs",
          "paragraphText": "Le résumé distingue trois symboles : le condensateur non polarisé, le condensateur polarisé (condensateur électrochimique) et le condensateur à capacité variable.\nPiège : un condensateur polarisé a un sens de branchement imposé, contrairement au condensateur non polarisé.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p01_q6",
            "type": "mcq",
            "prompt": "Le condensateur électrochimique est le condensateur :",
            "options": [
              "Non polarisé",
              "À capacité variable",
              "Polarisé",
              "Plan à air"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la légende des symboles du §1.2 : le condensateur polarisé est le condensateur électrochimique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l04_condensateur_p01_q1",
          "type": "mcq",
          "prompt": "Un condensateur est constitué de deux conducteurs séparés par :",
          "options": [
            "Un conducteur parfait",
            "Un isolant appelé diélectrique",
            "Un générateur",
            "Un fil de cuivre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §1.1 du résumé : les surfaces en regard des deux conducteurs sont séparées par un diélectrique."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p01_q2",
          "type": "mcq",
          "prompt": "Les charges des armatures d'un condensateur chargé vérifient :",
          "options": [
            "QA = QB, de même signe",
            "QA = −QB : signes opposés, même valeur absolue",
            "QA = 0 et QB quelconque",
            "QA + QB est maximal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion du §2.2.3 du résumé : QA = −QB."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p01_q3",
          "type": "mcq",
          "prompt": "On appelle charge d'un condensateur :",
          "options": [
            "La somme des charges des deux armatures",
            "La charge de l'armature négative",
            "La quantité d'électricité portée par l'armature positive",
            "La charge du diélectrique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la conclusion du §2.3.3 du résumé : Q = QA = −QB."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p01_q4",
          "type": "mcq",
          "prompt": "Le courant qui circule pendant la charge d'un condensateur est :",
          "options": [
            "Permanent et constant",
            "Transitoire : il s'annule quand le condensateur est chargé",
            "Toujours nul",
            "Croissant sans limite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion du §2.3.3 : le courant de charge (ou de décharge) est transitoire."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p01_q5",
          "type": "mcq",
          "prompt": "À la fin de la décharge d'un condensateur, on observe :",
          "options": [
            "Une tension de 6 V conservée",
            "Des armatures chargées au maximum",
            "Une tension nulle et des armatures neutres",
            "Un courant permanent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'interprétation du §2.3.2 : QA = QB = 0 et la tension passe de 6 V à 0."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p01_q6",
          "type": "mcq",
          "prompt": "Le condensateur électrochimique est le condensateur :",
          "options": [
            "Non polarisé",
            "À capacité variable",
            "Polarisé",
            "Plan à air"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la légende des symboles du §1.2 : le condensateur polarisé est le condensateur électrochimique."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l04_condensateur_p02",
      "order": 2,
      "title": "La capacité d'un condensateur : Q = C × U",
      "summary": "La charge d'un condensateur est proportionnelle à la tension à ses bornes ; le coefficient de proportionnalité est sa capacité C, en farads.",
      "conceptExplanation": "À courant de charge constant (I = 0,05 mA dans l'expérience du cours), la charge de l'armature A vaut qA = I × t et la tension Uc augmente régulièrement.\nLa courbe q = f(Uc) est une droite passant par l'origine, d'équation q = C × Uc : son coefficient directeur vaut environ 0,56 mF dans l'expérience du résumé.\nCe coefficient est la capacité C du condensateur, qui s'exprime en farads (F).\nConclusion : la charge Q d'un condensateur est proportionnelle à tout instant à la tension U à ses bornes, $Q = C \\times U$, soit $U = \\frac{Q}{C}$ ; la relation est valable lors de la charge comme de la décharge.\nOn utilise généralement les sous-multiples du farad : le millifarad (1 mF = 10⁻³ F), le microfarad (1 µF = 10⁻⁶ F), le nanofarad (1 nF = 10⁻⁹ F) et le picofarad (1 pF = 10⁻¹² F).",
      "keyRule": "Q = C × U : la capacité C = Q divisé par U, en farads, caractérise le condensateur.",
      "formulas": [
        {
          "name": "Relation charge-tension",
          "formula": "Q = C \\times U",
          "note": "Q en coulombs, C en farads, U en volts ; on en tire C = Q divisé par U et U = Q divisé par C."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application : une capacité de 5 nF",
        "statement": "La charge Q d'un condensateur est égale à 10⁻⁷ C lorsqu'il est soumis à une tension U = 20 V. Calcule sa capacité.",
        "methodSteps": [
          "De Q = C × U, on tire C = Q divisé par U.",
          "Application numérique : C = 10⁻⁷ divisé par 20, soit 5·10⁻⁹ F.",
          "Convertie en sous-multiple, cette capacité vaut 5 nF."
        ],
        "conclusion": "La capacité vaut 5·10⁻⁹ F, soit 5 nF : c'est la solution de l'activité d'application."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La charge est proportionnelle à la tension",
          "stepTheme": "La charge est proportionnelle à la tension",
          "stepBadge": "La charge est proportionnelle à la tension",
          "paragraphText": "L'exploitation des mesures du §3 donne une courbe q = f(Uc) qui est une droite passant par l'origine.\nSon équation est de la forme q = C × Uc : la charge est proportionnelle à la tension, et C est le coefficient directeur de la droite.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p02_q1",
            "type": "mcq",
            "prompt": "La courbe q = f(Uc) obtenue expérimentalement pour un condensateur est :",
            "options": [
              "Une droite passant par l'origine",
              "Une parabole",
              "Une droite horizontale",
              "Une courbe sans lien avec la tension"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'exploitation du §3.3 : q = f(Uc) est une droite passant par l'origine, d'équation q = C × Uc."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La capacité et son unité, le farad",
          "stepTheme": "La capacité et son unité, le farad",
          "stepBadge": "La capacité et son unité, le farad",
          "paragraphText": "• Capacité d'un condensateur : coefficient de proportionnalité C entre sa charge et la tension à ses bornes, $C = \\frac{Q}{U}$.\nElle s'exprime en farads (F) ; dans l'expérience du cours, le coefficient directeur de la droite vaut environ 0,56 mF.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p02_q2",
            "type": "mcq",
            "prompt": "La capacité d'un condensateur s'exprime en :",
            "options": [
              "Coulombs (C)",
              "Volts (V)",
              "Farads (F)",
              "Ohms (Ω)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le §3.3 précise que la capacité C s'exprime en farads (F)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le calcul de l'activité : C = 5 nF",
          "stepTheme": "Le calcul de l'activité : C = 5 nF",
          "stepBadge": "Le calcul de l'activité : C = 5 nF",
          "paragraphText": "Méthode de l'activité : isoler C dans la relation Q = C × U, puis appliquer les valeurs Q = 10⁻⁷ C et U = 20 V.\nLe résultat, 5·10⁻⁹ F, se convertit naturellement en nanofarads.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p02_q3",
            "type": "mcq",
            "prompt": "Calcule la capacité d'un condensateur portant la charge 10⁻⁷ C sous une tension de 20 V :",
            "options": [
              "5 nF",
              "50 nF",
              "0,5 µF",
              "2·10⁻⁶ F"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C = Q divisé par U = 10⁻⁷ divisé par 20 = 5·10⁻⁹ F = 5 nF (solution de l'activité)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Les sous-multiples du farad",
          "stepTheme": "Les sous-multiples du farad",
          "stepBadge": "Les sous-multiples du farad",
          "paragraphText": "Piège : confondre les exposants des sous-multiples fausse toutes les conversions de capacité.\nLe farad est une grande unité : on utilise généralement ses sous-multiples.\nLe résumé liste : le millifarad (1 mF = 10⁻³ F), le microfarad (1 µF = 10⁻⁶ F), le nanofarad (1 nF = 10⁻⁹ F) et le picofarad (1 pF = 10⁻¹² F).",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p02_q4",
            "type": "mcq",
            "prompt": "Un microfarad vaut :",
            "options": [
              "$10^{-3}$ F",
              "$10^{-9}$ F",
              "$10^{-6}$ F",
              "$10^{-12}$ F"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la remarque du §3.3 : 1 µF = 10⁻⁶ F (10⁻³ pour le mF, 10⁻⁹ pour le nF, 10⁻¹² pour le pF)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 1 : C = 0,1 µF",
          "stepTheme": "L'exercice 1 : C = 0,1 µF",
          "stepBadge": "L'exercice 1 : C = 0,1 µF",
          "paragraphText": "Dans l'exercice 1, un condensateur chargé sous une tension U = 5 V porte une charge q = 0,5 µC.\nLa solution applique C = q divisé par U et obtient une capacité de 0,1 µF.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p02_q5",
            "type": "mcq",
            "prompt": "La capacité du condensateur de l'exercice 1 (q = 0,5 µC sous U = 5 V) vaut :",
            "options": [
              "2,5 µF",
              "0,1 µF",
              "10 µF",
              "0,5 µF"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C = 0,5 µC divisé par 5 V = 0,1 µF (solution de l'exercice 1)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 2 : charge à courant constant",
          "stepTheme": "L'exercice 2 : charge à courant constant",
          "stepBadge": "L'exercice 2 : charge à courant constant",
          "paragraphText": "Dans l'exercice 2, un condensateur de capacité C = 2,2 µF est chargé à courant constant I0 = 5,5 mA pendant 20 ms.\nSa charge vaut q = I0 × Δt, soit 110 µC, et la tension à ses bornes vaut U = q divisé par C, soit 50 V.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p02_q6",
            "type": "mcq",
            "prompt": "La charge et la tension du condensateur de l'exercice 2 (I0 = 5,5 mA pendant 20 ms, C = 2,2 µF) valent :",
            "options": [
              "q = 11 µC et U = 5 V",
              "q = 110 µC et U = 5 V",
              "q = 11 µC et U = 50 V",
              "q = 110 µC et U = 50 V"
            ],
            "correctAnswerIndex": 3,
            "explanation": "q = I0 × Δt = 5,5·10⁻³ × 20·10⁻³ = 110 µC, puis U = q divisé par C = 110 µC divisé par 2,2 µF = 50 V."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l04_condensateur_p02_q1",
          "type": "mcq",
          "prompt": "La courbe q = f(Uc) obtenue expérimentalement pour un condensateur est :",
          "options": [
            "Une droite passant par l'origine",
            "Une parabole",
            "Une droite horizontale",
            "Une courbe sans lien avec la tension"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'exploitation du §3.3 : q = f(Uc) est une droite passant par l'origine, d'équation q = C × Uc."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p02_q2",
          "type": "mcq",
          "prompt": "La capacité d'un condensateur s'exprime en :",
          "options": [
            "Coulombs (C)",
            "Volts (V)",
            "Farads (F)",
            "Ohms (Ω)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le §3.3 précise que la capacité C s'exprime en farads (F)."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p02_q3",
          "type": "mcq",
          "prompt": "Calcule la capacité d'un condensateur portant la charge 10⁻⁷ C sous une tension de 20 V :",
          "options": [
            "5 nF",
            "50 nF",
            "0,5 µF",
            "2·10⁻⁶ F"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C = Q divisé par U = 10⁻⁷ divisé par 20 = 5·10⁻⁹ F = 5 nF (solution de l'activité)."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p02_q4",
          "type": "mcq",
          "prompt": "Un microfarad vaut :",
          "options": [
            "$10^{-3}$ F",
            "$10^{-9}$ F",
            "$10^{-6}$ F",
            "$10^{-12}$ F"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la remarque du §3.3 : 1 µF = 10⁻⁶ F (10⁻³ pour le mF, 10⁻⁹ pour le nF, 10⁻¹² pour le pF)."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p02_q5",
          "type": "mcq",
          "prompt": "La capacité du condensateur de l'exercice 1 (q = 0,5 µC sous U = 5 V) vaut :",
          "options": [
            "2,5 µF",
            "0,1 µF",
            "10 µF",
            "0,5 µF"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C = 0,5 µC divisé par 5 V = 0,1 µF (solution de l'exercice 1)."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p02_q6",
          "type": "mcq",
          "prompt": "La charge et la tension du condensateur de l'exercice 2 (I0 = 5,5 mA pendant 20 ms, C = 2,2 µF) valent :",
          "options": [
            "q = 11 µC et U = 5 V",
            "q = 110 µC et U = 5 V",
            "q = 11 µC et U = 50 V",
            "q = 110 µC et U = 50 V"
          ],
          "correctAnswerIndex": 3,
          "explanation": "q = I0 × Δt = 5,5·10⁻³ × 20·10⁻³ = 110 µC, puis U = q divisé par C = 110 µC divisé par 2,2 µF = 50 V."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l04_condensateur_p03",
      "order": 3,
      "title": "Capacité d'un condensateur plan et limites d'utilisation",
      "summary": "Pour un condensateur plan, C = ε0 × S divisé par d ; au-delà de la tension de claquage, le condensateur est détruit.",
      "conceptExplanation": "Un condensateur est dit plan lorsque ses armatures sont planes et séparées par un diélectrique, en général l'air.\nSi le diélectrique est le vide, sa capacité vaut $C = \\frac{\\varepsilon_0 \\times S}{d}$, où S est la surface d'une armature en mètres carrés, d l'épaisseur du diélectrique et $\\varepsilon_0 = 8{,}84 \\times 10^{-12}$ F/m la permittivité du vide (constante diélectrique).\nSi le diélectrique est quelconque, de permittivité $\\varepsilon = \\varepsilon_0 \\times \\varepsilon_r$ (εr : permittivité relative), la capacité devient $C = \\frac{\\varepsilon \\times S}{d}$.\nLimites d'utilisation : la tension nominale est la tension supportable par le condensateur, qui permet son fonctionnement adéquat ; la tension de claquage est la tension limite au-delà de laquelle le condensateur est détruit, le diélectrique perdant son caractère d'isolant ; le champ disruptif, $E_d = \\frac{U_c}{d}$, est le champ électrostatique au-delà duquel le diélectrique perd son caractère isolant.",
      "keyRule": "Condensateur plan : C croît avec la surface S et avec εr, et diminue quand l'épaisseur d augmente ; ne jamais dépasser la tension de claquage.",
      "formulas": [
        {
          "name": "Capacité d'un condensateur plan (vide)",
          "formula": "C = \\frac{\\varepsilon_0 \\times S}{d}",
          "note": "ε0 = 8,84·10⁻¹² F/m ; S : surface d'une armature ; d : distance entre les armatures."
        },
        {
          "name": "Capacité avec un diélectrique",
          "formula": "C = \\frac{\\varepsilon_0 \\times \\varepsilon_r \\times S}{d}",
          "note": "εr : permittivité relative du diélectrique."
        },
        {
          "name": "Champ disruptif",
          "formula": "E_d = \\frac{U_c}{d}",
          "note": "Uc : tension de claquage ; d : épaisseur du diélectrique."
        }
      ],
      "workedExample": {
        "title": "Lire la formule du condensateur plan",
        "statement": "On dispose d'un condensateur plan dont le diélectrique est le vide. Identifie chaque grandeur de la formule de sa capacité et indique comment la capacité varie si la distance entre les armatures augmente.",
        "methodSteps": [
          "Dans C = ε0 × S divisé par d, ε0 est la permittivité du vide (8,84·10⁻¹² F/m), S la surface d'une armature et d la distance entre les armatures.",
          "La capacité est proportionnelle à S : des armatures plus grandes donnent une plus grande capacité.",
          "La capacité est inversement proportionnelle à d : si la distance entre les armatures augmente, la capacité diminue."
        ],
        "conclusion": "Ce sont les lectures directes de la formule du §3.5 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le condensateur plan",
          "stepTheme": "Le condensateur plan",
          "stepBadge": "Le condensateur plan",
          "paragraphText": "• Condensateur plan : condensateur dont les armatures sont planes, séparées par un diélectrique en général l'air.\nC'est le modèle auquel s'applique la formule de capacité étudiée dans cette partie.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p03_q1",
            "type": "mcq",
            "prompt": "Un condensateur est dit plan lorsque :",
            "options": [
              "Ses armatures sont planes",
              "Ses armatures sont cylindriques",
              "Sa capacité est variable",
              "Il est polarisé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §3.5 du résumé : les armatures sont planes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule C = ε0 × S divisé par d",
          "stepTheme": "La formule C = ε0 × S divisé par d",
          "stepBadge": "La formule C = ε0 × S divisé par d",
          "paragraphText": "Si le diélectrique est le vide, la capacité du condensateur plan vaut $C = \\frac{\\varepsilon_0 \\times S}{d}$.\nLe résumé donne la valeur de la permittivité du vide : ε0 = 8,84·10⁻¹² F/m.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p03_q2",
            "type": "mcq",
            "prompt": "La permittivité du vide ε0 vaut :",
            "options": [
              "$8{,}84 \\times 10^{-12}$ F/m",
              "$8{,}84$ F/m",
              "$36\\pi \\times 10^{9}$ F/m",
              "$1{,}6 \\times 10^{-19}$ F/m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la valeur donnée au §3.5 : ε0 = 8,84·10⁻¹² F/m."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'effet d'un diélectrique quelconque",
          "stepTheme": "L'effet d'un diélectrique quelconque",
          "stepBadge": "L'effet d'un diélectrique quelconque",
          "paragraphText": "Si le diélectrique est quelconque, sa permittivité vaut $\\varepsilon = \\varepsilon_0 \\times \\varepsilon_r$, où εr est la permittivité relative du milieu.\nLa capacité devient $C = \\frac{\\varepsilon \\times S}{d}$ : le diélectrique multiplie la capacité par εr par rapport au vide.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p03_q3",
            "type": "mcq",
            "prompt": "Avec un diélectrique de permittivité relative εr, la capacité d'un condensateur plan devient :",
            "options": [
              "$C = \\frac{\\varepsilon_0 \\times S}{d \\times \\varepsilon_r}$",
              "$C = \\frac{\\varepsilon_0 \\times \\varepsilon_r \\times S}{d}$",
              "$C = \\frac{S}{d}$ sans permittivité",
              "$C = \\varepsilon_r \\times d$ divisé par S"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la formule du §3.5 pour un diélectrique quelconque : ε = ε0 × εr, donc C = ε × S divisé par d."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La tension nominale",
          "stepTheme": "La tension nominale",
          "stepBadge": "La tension nominale",
          "paragraphText": "• Tension nominale : tension supportable par le condensateur.\nElle permet un fonctionnement adéquat du condensateur : c'est la tension à ne pas dépasser en usage normal.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p03_q4",
            "type": "mcq",
            "prompt": "La tension nominale d'un condensateur est :",
            "options": [
              "La tension qui le détruit",
              "La tension supportable, permettant son fonctionnement adéquat",
              "La tension de charge maximale théorique sans limite",
              "La tension du générateur utilisé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §4.1 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La tension de claquage",
          "stepTheme": "La tension de claquage",
          "stepBadge": "La tension de claquage",
          "paragraphText": "• Tension de claquage : tension limite au-delà de laquelle le condensateur est détruit.\nLe diélectrique perd alors son caractère d'isolant : un arc ou une conduction apparaît entre les armatures.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p03_q5",
            "type": "mcq",
            "prompt": "Au-delà de la tension de claquage :",
            "options": [
              "La capacité augmente indéfiniment",
              "Le condensateur fonctionne mieux",
              "Le condensateur est détruit et le diélectrique perd son caractère isolant",
              "La charge devient nulle sans dommage"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §4.2 du résumé : la tension de claquage est la limite de destruction du condensateur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le champ disruptif Ed = Uc divisé par d",
          "stepTheme": "Le champ disruptif Ed = Uc divisé par d",
          "stepBadge": "Le champ disruptif Ed = Uc divisé par d",
          "paragraphText": "Piège : soumettre le condensateur à un champ supérieur au champ disruptif détruit son diélectrique.\n• Champ disruptif : champ électrostatique au-delà duquel le diélectrique perd son caractère isolant ; ce champ n'est pas supportable par le condensateur.\nIl se calcule par $E_d = \\frac{U_c}{d}$, où Uc est la tension de claquage et d l'épaisseur du diélectrique.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p03_q6",
            "type": "mcq",
            "prompt": "Le champ disruptif d'un condensateur se calcule par :",
            "options": [
              "$E_d = U_c \\times d$",
              "$E_d = \\frac{d}{U_c}$",
              "$E_d = \\frac{U_c}{d}$",
              "$E_d = U_c + d$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la relation du §4.3 du résumé : Ed = Uc divisé par d."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un diélectrique multiplie la capacité par εr",
          "stepTheme": "Un diélectrique multiplie la capacité par εr",
          "stepBadge": "Un diélectrique multiplie la capacité par εr",
          "paragraphText": "Exemple tiré des deux formules du §3.5 : pour un même condensateur plan, remplacer le vide par un diélectrique de permittivité relative εr multiplie la capacité par εr.\nAvec un diélectrique de permittivité relative 5, la capacité devient donc cinq fois celle du condensateur à vide.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p03_q7",
            "type": "mcq",
            "prompt": "Un condensateur plan à vide a une capacité C0. On remplace le vide par un diélectrique de permittivité relative εr = 5, sans changer la géométrie. Sa capacité devient :",
            "options": [
              "C0 divisée par 5",
              "5 fois C0",
              "C0, inchangée",
              "25 fois C0"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après les formules du §3.5, C = ε0 × εr × S divisé par d, soit εr fois la capacité à vide : la capacité est multipliée par 5."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l04_condensateur_p03_q1",
          "type": "mcq",
          "prompt": "Un condensateur est dit plan lorsque :",
          "options": [
            "Ses armatures sont planes",
            "Ses armatures sont cylindriques",
            "Sa capacité est variable",
            "Il est polarisé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §3.5 du résumé : les armatures sont planes."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p03_q2",
          "type": "mcq",
          "prompt": "La permittivité du vide ε0 vaut :",
          "options": [
            "$8{,}84 \\times 10^{-12}$ F/m",
            "$8{,}84$ F/m",
            "$36\\pi \\times 10^{9}$ F/m",
            "$1{,}6 \\times 10^{-19}$ F/m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la valeur donnée au §3.5 : ε0 = 8,84·10⁻¹² F/m."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p03_q3",
          "type": "mcq",
          "prompt": "Avec un diélectrique de permittivité relative εr, la capacité d'un condensateur plan devient :",
          "options": [
            "$C = \\frac{\\varepsilon_0 \\times S}{d \\times \\varepsilon_r}$",
            "$C = \\frac{\\varepsilon_0 \\times \\varepsilon_r \\times S}{d}$",
            "$C = \\frac{S}{d}$ sans permittivité",
            "$C = \\varepsilon_r \\times d$ divisé par S"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la formule du §3.5 pour un diélectrique quelconque : ε = ε0 × εr, donc C = ε × S divisé par d."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p03_q4",
          "type": "mcq",
          "prompt": "La tension nominale d'un condensateur est :",
          "options": [
            "La tension qui le détruit",
            "La tension supportable, permettant son fonctionnement adéquat",
            "La tension de charge maximale théorique sans limite",
            "La tension du générateur utilisé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §4.1 du résumé."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p03_q5",
          "type": "mcq",
          "prompt": "Au-delà de la tension de claquage :",
          "options": [
            "La capacité augmente indéfiniment",
            "Le condensateur fonctionne mieux",
            "Le condensateur est détruit et le diélectrique perd son caractère isolant",
            "La charge devient nulle sans dommage"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §4.2 du résumé : la tension de claquage est la limite de destruction du condensateur."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p03_q6",
          "type": "mcq",
          "prompt": "Le champ disruptif d'un condensateur se calcule par :",
          "options": [
            "$E_d = U_c \\times d$",
            "$E_d = \\frac{d}{U_c}$",
            "$E_d = \\frac{U_c}{d}$",
            "$E_d = U_c + d$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la relation du §4.3 du résumé : Ed = Uc divisé par d."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p03_q7",
          "type": "mcq",
          "prompt": "Un condensateur plan à vide a une capacité C0. On remplace le vide par un diélectrique de permittivité relative εr = 5, sans changer la géométrie. Sa capacité devient :",
          "options": [
            "C0 divisée par 5",
            "5 fois C0",
            "C0, inchangée",
            "25 fois C0"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après les formules du §3.5, C = ε0 × εr × S divisé par d, soit εr fois la capacité à vide : la capacité est multipliée par 5."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l04_condensateur_p04",
      "order": 4,
      "title": "Association de condensateurs : parallèle et série",
      "summary": "En parallèle, les capacités s'ajoutent ; en série, ce sont les inverses des capacités qui s'ajoutent.",
      "conceptExplanation": "En association parallèle (en dérivation), tous les condensateurs sont soumis à la même tension et le condensateur équivalent porte la somme des charges : pour n condensateurs en dérivation, $C_{eq} = C_1 + C_2 + \\dots$\nEn association série, le courant est le même partout et les charges des condensateurs sont égales (Q1 = Q2) ; les tensions s'ajoutent, ce qui donne, pour n condensateurs en série : $\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\dots$\nL'activité en parallèle donne C = 0,10 µF + 0,60 µF = 0,70 µF ; celle en série, pour C1 = 2 µF, C2 = 0,5 µF et C3 = 1,5 µF, donne une capacité équivalente d'environ 0,32 µF.",
      "keyRule": "Parallèle : Ceq = somme des capacités. Série : 1 divisé par Ceq = somme des inverses — Ceq est alors plus petite que la plus petite capacité.",
      "formulas": [
        {
          "name": "Association en parallèle",
          "formula": "C_{eq} = C_1 + C_2 + \\dots",
          "note": "Même tension pour tous les condensateurs ; les charges s'ajoutent."
        },
        {
          "name": "Association en série",
          "formula": "\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\dots",
          "note": "Même charge pour tous les condensateurs ; les tensions s'ajoutent."
        }
      ],
      "workedExample": {
        "title": "La situation d'évaluation : association mixte de trois condensateurs",
        "statement": "Les condensateurs C2 = 2 µF et C3 = 4 µF sont montés en dérivation, et cet ensemble est monté en série avec C1 = 3 µF, le tout sous une tension E = 120 V. Détermine la capacité équivalente de l'association, puis sa charge.",
        "methodSteps": [
          "L'association en dérivation de C2 et C3 donne C' = C2 + C3 = 6 µF.",
          "L'association en série de C1 et C' donne C = (C1 × C') divisé par (C1 + C'), soit (3 × 6) divisé par 9 : C = 2 µF.",
          "La charge équivalente vaut q = C × E = 2·10⁻⁶ × 120 = 2,4·10⁻⁴ C."
        ],
        "conclusion": "La capacité équivalente vaut 2 µF et la charge 2,4·10⁻⁴ C : ce sont les résultats de la solution de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "En parallèle, les capacités s'ajoutent",
          "stepTheme": "En parallèle, les capacités s'ajoutent",
          "stepBadge": "En parallèle, les capacités s'ajoutent",
          "paragraphText": "Pour n condensateurs en dérivation, le condensateur équivalent a pour capacité la somme des capacités.\nTous les condensateurs sont soumis à la même tension UAB et leurs charges s'ajoutent sur le condensateur équivalent.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p04_q1",
            "type": "mcq",
            "prompt": "La capacité équivalente à des condensateurs en parallèle vaut :",
            "options": [
              "La somme des inverses des capacités",
              "La somme des capacités",
              "La plus petite des capacités",
              "Le produit des capacités"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la loi du §5.1 : pour n condensateurs en dérivation, Ceq = C1 + C2 + …"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le calcul en parallèle : 0,70 µF",
          "stepTheme": "Le calcul en parallèle : 0,70 µF",
          "stepBadge": "Le calcul en parallèle : 0,70 µF",
          "paragraphText": "Dans l'activité d'application, deux condensateurs de capacités C1 = 0,10 µF et C2 = 0,60 µF sont montés en parallèle.\nLa solution ajoute simplement les deux capacités pour obtenir celle du condensateur équivalent.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p04_q2",
            "type": "mcq",
            "prompt": "La capacité équivalente aux deux condensateurs en parallèle (0,10 µF et 0,60 µF) vaut :",
            "options": [
              "0,70 µF",
              "0,086 µF",
              "0,60 µF",
              "0,50 µF"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C = C1 + C2 = 0,10 + 0,60 = 0,70 µF (solution de l'activité du §5.1)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "En série, tous les condensateurs portent la même charge",
          "stepTheme": "En série, tous les condensateurs portent la même charge",
          "stepBadge": "En série, tous les condensateurs portent la même charge",
          "paragraphText": "• Association en série : montage où les condensateurs sont traversés par le même courant de charge ; ils portent donc des charges égales, Q1 = Q2.\nCe sont les tensions à leurs bornes qui s'ajoutent pour donner la tension totale UAB.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p04_q3",
            "type": "mcq",
            "prompt": "Pour des condensateurs montés en série, la grandeur commune à tous est :",
            "options": [
              "La tension",
              "La charge portée par chacun",
              "La capacité",
              "L'énergie stockée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le §5.2 le précise : en série, le courant est le même partout, d'où Q1 = Q2 pour les condensateurs."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "En série, les inverses des capacités s'ajoutent",
          "stepTheme": "En série, les inverses des capacités s'ajoutent",
          "stepBadge": "En série, les inverses des capacités s'ajoutent",
          "paragraphText": "Piège classique : en série, on n'additionne pas directement les capacités comme en parallèle.\nPour n condensateurs en série, l'inverse de la capacité équivalente est la somme des inverses des capacités.\nLa capacité équivalente est donc toujours plus petite que la plus petite des capacités associées.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p04_q4",
            "type": "mcq",
            "prompt": "La capacité équivalente à des condensateurs en série vérifie :",
            "options": [
              "$C_{eq} = C_1 + C_2$",
              "$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2}$",
              "$C_{eq} = C_1 \\times C_2$",
              "$C_{eq}$ est la plus grande des capacités"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la loi du §5.2 : en série, ce sont les inverses des capacités qui s'ajoutent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Trois condensateurs en série : environ 0,32 µF",
          "stepTheme": "Trois condensateurs en série : environ 0,32 µF",
          "stepBadge": "Trois condensateurs en série : environ 0,32 µF",
          "paragraphText": "Dans l'activité du §5.2, trois condensateurs de capacités C1 = 2 µF, C2 = 0,5 µF et C3 = 1,5 µF sont associés en série.\nLa somme des inverses vaut 0,5 + 2 + 0,667, soit environ 3,17 par µF : la capacité équivalente est donc d'environ 0,32 µF.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p04_q5",
            "type": "mcq",
            "prompt": "La capacité équivalente aux trois condensateurs en série (2 µF ; 0,5 µF ; 1,5 µF) vaut environ :",
            "options": [
              "4 µF",
              "0,32 µF",
              "1,33 µF",
              "0,5 µF"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'inverse de Ceq vaut 0,5 + 2 + 0,667 ≈ 3,17 µF⁻¹, donc Ceq ≈ 0,32 µF."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "L'association mixte de la situation : C = 2 µF",
          "stepTheme": "L'association mixte de la situation : C = 2 µF",
          "stepBadge": "L'association mixte de la situation : C = 2 µF",
          "paragraphText": "Méthode pour une association mixte : traiter d'abord les groupes simples (ici C2 et C3 en dérivation, qui donnent 6 µF), puis l'association restante.\nL'ensemble de 6 µF en série avec C1 = 3 µF donne la capacité équivalente totale de la situation d'évaluation.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p04_q6",
            "type": "mcq",
            "prompt": "La capacité équivalente de l'association de la situation (C1 = 3 µF en série avec C2 = 2 µF et C3 = 4 µF en dérivation) vaut :",
            "options": [
              "9 µF",
              "6 µF",
              "2 µF",
              "1,09 µF"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C2 et C3 en dérivation donnent 6 µF ; en série avec 3 µF : (3 × 6) divisé par (3 + 6) = 2 µF (solution de la situation)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l04_condensateur_p04_q1",
          "type": "mcq",
          "prompt": "La capacité équivalente à des condensateurs en parallèle vaut :",
          "options": [
            "La somme des inverses des capacités",
            "La somme des capacités",
            "La plus petite des capacités",
            "Le produit des capacités"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la loi du §5.1 : pour n condensateurs en dérivation, Ceq = C1 + C2 + …"
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p04_q2",
          "type": "mcq",
          "prompt": "La capacité équivalente aux deux condensateurs en parallèle (0,10 µF et 0,60 µF) vaut :",
          "options": [
            "0,70 µF",
            "0,086 µF",
            "0,60 µF",
            "0,50 µF"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C = C1 + C2 = 0,10 + 0,60 = 0,70 µF (solution de l'activité du §5.1)."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p04_q3",
          "type": "mcq",
          "prompt": "Pour des condensateurs montés en série, la grandeur commune à tous est :",
          "options": [
            "La tension",
            "La charge portée par chacun",
            "La capacité",
            "L'énergie stockée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le §5.2 le précise : en série, le courant est le même partout, d'où Q1 = Q2 pour les condensateurs."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p04_q4",
          "type": "mcq",
          "prompt": "La capacité équivalente à des condensateurs en série vérifie :",
          "options": [
            "$C_{eq} = C_1 + C_2$",
            "$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2}$",
            "$C_{eq} = C_1 \\times C_2$",
            "$C_{eq}$ est la plus grande des capacités"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la loi du §5.2 : en série, ce sont les inverses des capacités qui s'ajoutent."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p04_q5",
          "type": "mcq",
          "prompt": "La capacité équivalente aux trois condensateurs en série (2 µF ; 0,5 µF ; 1,5 µF) vaut environ :",
          "options": [
            "4 µF",
            "0,32 µF",
            "1,33 µF",
            "0,5 µF"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'inverse de Ceq vaut 0,5 + 2 + 0,667 ≈ 3,17 µF⁻¹, donc Ceq ≈ 0,32 µF."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p04_q6",
          "type": "mcq",
          "prompt": "La capacité équivalente de l'association de la situation (C1 = 3 µF en série avec C2 = 2 µF et C3 = 4 µF en dérivation) vaut :",
          "options": [
            "9 µF",
            "6 µF",
            "2 µF",
            "1,09 µF"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C2 et C3 en dérivation donnent 6 µF ; en série avec 3 µF : (3 × 6) divisé par (3 + 6) = 2 µF (solution de la situation)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l04_condensateur_p05",
      "order": 5,
      "title": "Énergie emmagasinée dans un condensateur",
      "summary": "Un condensateur chargé stocke l'énergie E = ½ × Q² divisé par C = ½ × Q × U = ½ × C × U².",
      "conceptExplanation": "L'expérience du cours le montre : lorsqu'on ferme l'interrupteur, un moteur branché aux bornes d'un condensateur initialement chargé se met en marche.\nLe moteur reçoit donc de l'énergie provenant du condensateur chargé : un condensateur chargé emmagasine de l'énergie.\nL'énergie stockée dans un condensateur chargé, de capacité C et de charge Q, est donnée par $E = \\frac{1}{2} \\times \\frac{Q^2}{C}$.\nComme Q = C × U, on obtient les formes équivalentes $E = \\frac{1}{2} \\times Q \\times U$ et $E = \\frac{1}{2} \\times C \\times U^2$, avec l'énergie en joules, la charge en coulombs, la capacité en farads et la tension en volts.",
      "keyRule": "Énergie d'un condensateur chargé : E = ½ × C × U² — choisir la forme selon les données (Q, C ou U).",
      "formulas": [
        {
          "name": "Énergie emmagasinée",
          "formula": "E = \\frac{Q^2}{2C} = \\frac{1}{2} \\times Q \\times U = \\frac{1}{2} \\times C \\times U^2",
          "note": "E en joules, Q en coulombs, C en farads, U en volts."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application : retrouver la tension",
        "statement": "Tu as utilisé un condensateur de capacité C = 2 200 µF pour emmagasiner une énergie électrique E = 58,19 J. Détermine la valeur de la tension U aux bornes du condensateur.",
        "methodSteps": [
          "On part de E = ½ × C × U² et on convertit la capacité : C = 2 200 µF = 2,2·10⁻³ F.",
          "On isole U en prenant la racine carrée du quotient de 2E par C.",
          "U = 230 V."
        ],
        "conclusion": "La tension aux bornes du condensateur vaut 230 V : c'est la solution de l'activité d'application."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La mise en évidence : le condensateur fait tourner un moteur",
          "stepTheme": "La mise en évidence : le condensateur fait tourner un moteur",
          "stepBadge": "La mise en évidence : le condensateur fait tourner un moteur",
          "paragraphText": "Dans l'expérience du cours, un condensateur initialement chargé est branché sur un moteur.\nLorsqu'on ferme l'interrupteur K, le moteur se met en marche : il reçoit de l'énergie provenant du condensateur chargé.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p05_q1",
            "type": "mcq",
            "prompt": "L'expérience du moteur branché sur un condensateur chargé montre que :",
            "options": [
              "Un condensateur chargé emmagasine de l'énergie",
              "Un condensateur ne contient aucune énergie",
              "Le moteur charge le condensateur",
              "L'énergie vient du diélectrique seul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la mise en évidence expérimentale de la partie énergie du résumé : le condensateur chargé fait démarrer le moteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'expression E = ½ × C × U²",
          "stepTheme": "L'expression E = ½ × C × U²",
          "stepBadge": "L'expression E = ½ × C × U²",
          "paragraphText": "• Énergie emmagasinée dans un condensateur : énergie stockée par un condensateur chargé de capacité C sous la tension U ; elle vaut $E = \\frac{1}{2} \\times C \\times U^2$.\nElle croît donc avec le carré de la tension : doubler la tension quadruple l'énergie stockée.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p05_q2",
            "type": "mcq",
            "prompt": "L'énergie emmagasinée dans un condensateur de capacité C sous la tension U vaut :",
            "options": [
              "$E = C \\times U$",
              "$E = \\frac{1}{2} \\times C \\times U^2$",
              "$E = \\frac{C}{U^2}$",
              "$E = C \\times U^2$ sans coefficient"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'expression de la partie énergie du résumé : E = ½ × C × U²."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les formes équivalentes de l'énergie",
          "stepTheme": "Les formes équivalentes de l'énergie",
          "stepBadge": "Les formes équivalentes de l'énergie",
          "paragraphText": "En remplaçant Q par C × U, l'expression $E = \\frac{1}{2} \\times \\frac{Q^2}{C}$ donne les deux autres formes.\nOn a donc le choix entre $E = \\frac{1}{2} \\times \\frac{Q^2}{C}$, $E = \\frac{1}{2} \\times Q \\times U$ et $E = \\frac{1}{2} \\times C \\times U^2$, selon les données de l'exercice.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p05_q3",
            "type": "mcq",
            "prompt": "Parmi les expressions suivantes, laquelle donne aussi l'énergie d'un condensateur chargé ?",
            "options": [
              "$E = Q \\times U$",
              "$E = \\frac{1}{2} \\times Q \\times U$",
              "$E = \\frac{Q}{C}$",
              "$E = Q^2 \\times C$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé donne les formes équivalentes : E = ½ × Q² divisé par C = ½ × Q × U = ½ × C × U²."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le calcul de l'activité : U = 230 V",
          "stepTheme": "Le calcul de l'activité : U = 230 V",
          "stepBadge": "Le calcul de l'activité : U = 230 V",
          "paragraphText": "Pour l'activité (C = 2 200 µF, E = 58,19 J), la capacité doit être convertie en farads : 2,2·10⁻³ F.\nLa solution isole ensuite U en prenant la racine carrée du quotient de 2E par C.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p05_q4",
            "type": "mcq",
            "prompt": "La tension aux bornes du condensateur de l'activité (C = 2 200 µF, E = 58,19 J) vaut :",
            "options": [
              "23 V",
              "115 V",
              "230 V",
              "460 V"
            ],
            "correctAnswerIndex": 2,
            "explanation": "U est la racine carrée de (2 × 58,19) divisé par 2,2·10⁻³, soit 230 V (solution de l'activité)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'énergie de la situation d'évaluation : 1,44·10⁻² J",
          "stepTheme": "L'énergie de la situation d'évaluation : 1,44·10⁻² J",
          "stepBadge": "L'énergie de la situation d'évaluation : 1,44·10⁻² J",
          "paragraphText": "Pour l'association de la situation (capacité équivalente C = 2 µF sous la tension E = 120 V), l'énergie stockée se calcule par $W = \\frac{1}{2} \\times C \\times E^2$.\nLa solution obtient une énergie de 1,44·10⁻² J pour l'ensemble des trois condensateurs.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p05_q5",
            "type": "mcq",
            "prompt": "L'énergie stockée dans le condensateur équivalent de la situation (C = 2 µF sous 120 V) vaut :",
            "options": [
              "$2{,}4 \\times 10^{-4}$ J",
              "$1{,}44 \\times 10^{-2}$ J",
              "$2{,}88 \\times 10^{-2}$ J",
              "$1{,}44$ J"
            ],
            "correctAnswerIndex": 1,
            "explanation": "W = ½ × 2·10⁻⁶ × 120² = 1,44·10⁻² J (solution de la situation d'évaluation)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le partage de charge entre deux condensateurs (exercice 5)",
          "stepTheme": "Le partage de charge entre deux condensateurs (exercice 5)",
          "stepBadge": "Le partage de charge entre deux condensateurs (exercice 5)",
          "paragraphText": "Dans l'exercice 5, un condensateur chargé (charge q0 = 5·10⁻⁴ C sous 100 V) est connecté à deux condensateurs déchargés montés en parallèle, de capacité équivalente C' = 5 µF.\nÀ l'équilibre, la charge se conserve et se partage également entre le condensateur et l'association ; la tension commune tombe à 50 V et l'énergie totale vaut 1,25·10⁻² J.",
          "exercise": {
            "id": "premiere_c_physique_l04_condensateur_p05_q6",
            "type": "mcq",
            "prompt": "La tension commune aux bornes des condensateurs à l'équilibre, dans l'exercice 5, vaut :",
            "options": [
              "100 V",
              "25 V",
              "75 V",
              "50 V"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Après le partage de la charge conservée, chaque ensemble porte 2,5·10⁻⁴ C sous une capacité de 5 µF : la tension commune vaut 50 V (solution de l'exercice 5)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l04_condensateur_p05_q1",
          "type": "mcq",
          "prompt": "L'expérience du moteur branché sur un condensateur chargé montre que :",
          "options": [
            "Un condensateur chargé emmagasine de l'énergie",
            "Un condensateur ne contient aucune énergie",
            "Le moteur charge le condensateur",
            "L'énergie vient du diélectrique seul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la mise en évidence expérimentale de la partie énergie du résumé : le condensateur chargé fait démarrer le moteur."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p05_q2",
          "type": "mcq",
          "prompt": "L'énergie emmagasinée dans un condensateur de capacité C sous la tension U vaut :",
          "options": [
            "$E = C \\times U$",
            "$E = \\frac{1}{2} \\times C \\times U^2$",
            "$E = \\frac{C}{U^2}$",
            "$E = C \\times U^2$ sans coefficient"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'expression de la partie énergie du résumé : E = ½ × C × U²."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p05_q3",
          "type": "mcq",
          "prompt": "Parmi les expressions suivantes, laquelle donne aussi l'énergie d'un condensateur chargé ?",
          "options": [
            "$E = Q \\times U$",
            "$E = \\frac{1}{2} \\times Q \\times U$",
            "$E = \\frac{Q}{C}$",
            "$E = Q^2 \\times C$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé donne les formes équivalentes : E = ½ × Q² divisé par C = ½ × Q × U = ½ × C × U²."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p05_q4",
          "type": "mcq",
          "prompt": "La tension aux bornes du condensateur de l'activité (C = 2 200 µF, E = 58,19 J) vaut :",
          "options": [
            "23 V",
            "115 V",
            "230 V",
            "460 V"
          ],
          "correctAnswerIndex": 2,
          "explanation": "U est la racine carrée de (2 × 58,19) divisé par 2,2·10⁻³, soit 230 V (solution de l'activité)."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p05_q5",
          "type": "mcq",
          "prompt": "L'énergie stockée dans le condensateur équivalent de la situation (C = 2 µF sous 120 V) vaut :",
          "options": [
            "$2{,}4 \\times 10^{-4}$ J",
            "$1{,}44 \\times 10^{-2}$ J",
            "$2{,}88 \\times 10^{-2}$ J",
            "$1{,}44$ J"
          ],
          "correctAnswerIndex": 1,
          "explanation": "W = ½ × 2·10⁻⁶ × 120² = 1,44·10⁻² J (solution de la situation d'évaluation)."
        },
        {
          "id": "premiere_c_physique_l04_condensateur_p05_q6",
          "type": "mcq",
          "prompt": "La tension commune aux bornes des condensateurs à l'équilibre, dans l'exercice 5, vaut :",
          "options": [
            "100 V",
            "25 V",
            "75 V",
            "50 V"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Après le partage de la charge conservée, chaque ensemble porte 2,5·10⁻⁴ C sous une capacité de 5 µF : la tension commune vaut 50 V (solution de l'exercice 5)."
        }
      ]
    }
  ]
};
