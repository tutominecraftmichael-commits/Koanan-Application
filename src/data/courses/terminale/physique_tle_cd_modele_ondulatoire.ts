import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 16 : Modèle ondulatoire de la lumière » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1319
export const PHYSIQUE_TLE_CD_L16_MODELE_ONDULATOIRE: CurriculumChapter = {
  "id": "terminale_c_physique_l16_modele_ondulatoire",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 16,
  "title": "Leçon 16 : Modèle ondulatoire de la lumière",
  "summary": "La diffraction et les interférences prouvent le caractère ondulatoire de la lumière : écart angulaire θ = λ/a, interfrange i = λD/a, et une onde électromagnétique de célérité c dans le vide.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1319",
  "points": [
    {
      "id": "terminale_c_physique_l16_modele_ondulatoire_p01",
      "order": 1,
      "title": "Le phénomène de diffraction",
      "summary": "Un faisceau qui traverse un orifice étroit s'étale : c'est la diffraction, manifestation caractéristique des ondes, sensible quand l'ouverture est de l'ordre de λ.",
      "conceptExplanation": "En considérant le modèle du rayon lumineux, on pourrait penser « extraire » un rayon en dirigeant un faisceau sur un orifice très étroit ; mais le faisceau s'étale à la traversée de l'orifice.\nC'est une manifestation du phénomène de diffraction, caractéristique des ondes.\nCe phénomène se manifeste lorsque les dimensions d'une ouverture ou d'un obstacle sont inférieures ou de l'ordre de grandeur de la longueur d'onde.\nLa documentation ajoute deux remarques : plus l'ouverture est petite, plus le phénomène de diffraction est marqué ; et la diffraction met en défaut le principe de propagation rectiligne de la lumière dans un milieu homogène.",
      "keyRule": "Diffraction ⇔ ouverture ou obstacle de dimension ≲ λ ; elle signe le caractère ondulatoire.",
      "formulas": [],
      "workedExample": {
        "title": "La phrase à compléter de l'exercice 2",
        "statement": "Complète : « Le phénomène observé sur l'écran s'appelle ………. ; son importance est liée au rapport de la largeur a de la fente sur la …………… ».",
        "methodSteps": [
          "L'étalement du faisceau laser après la fente est le phénomène étudié dans toute la leçon.",
          "Il est d'autant plus important que la fente est étroite devant la longueur d'onde.",
          "La solution complète : la diffraction ; la longueur d'onde."
        ],
        "conclusion": "C'est la réponse à la question 1 de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un faisceau qui s'étale",
          "stepTheme": "Un faisceau qui s'étale",
          "stepBadge": "Un faisceau qui s'étale",
          "paragraphText": "• Diffraction : étalement d'un faisceau lumineux à la traversée d'un orifice étroit ou au passage d'un obstacle fin.\nLe faisceau ressort élargi, avec une tache centrale encadrée de zones sombres et de taches secondaires.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q1",
            "type": "mcq",
            "prompt": "Le phénomène par lequel un faisceau lumineux s'étale en traversant un orifice étroit s'appelle :",
            "options": [
              "La diffraction",
              "La réfraction",
              "La réflexion",
              "La dispersion par un prisme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le phénomène décrit en ouverture du résumé et de la documentation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La condition : une ouverture de l'ordre de λ",
          "stepTheme": "La condition : une ouverture de l'ordre de λ",
          "stepBadge": "La condition : une ouverture de l'ordre de λ",
          "paragraphText": "La diffraction ne devient notable que si l'ouverture est comparable à la longueur d'onde.\nPour la lumière visible (λ de quelques centaines de nanomètres), il faut donc des fentes ou des fils de quelques dixièmes de millimètre au plus.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q2",
            "type": "mcq",
            "prompt": "Le phénomène de diffraction se manifeste lorsque les dimensions de l'ouverture ou de l'obstacle sont :",
            "options": [
              "Très supérieures à la longueur d'onde",
              "Inférieures ou de l'ordre de grandeur de la longueur d'onde",
              "Égales à la distance à l'écran",
              "Indépendantes de la longueur d'onde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la condition énoncée dans le résumé de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une signature des ondes",
          "stepTheme": "Une signature des ondes",
          "stepBadge": "Une signature des ondes",
          "paragraphText": "La diffraction est caractéristique des ondes : seuls les phénomènes ondulatoires se comportent ainsi aux petites ouvertures.\nSon observation pour la lumière est donc un argument direct en faveur du modèle ondulatoire.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q3",
            "type": "mcq",
            "prompt": "La diffraction de la lumière constitue une preuve de :",
            "options": [
              "Son caractère corpusculaire",
              "Sa propagation uniquement dans le vide",
              "Son caractère ondulatoire",
              "L'existence de l'éther"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé dit que la diffraction est « caractéristique des ondes »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Plus l'ouverture est petite, plus c'est marqué",
          "stepTheme": "Plus l'ouverture est petite, plus c'est marqué",
          "stepBadge": "Plus l'ouverture est petite, plus c'est marqué",
          "paragraphText": "La première remarque de la documentation relie l'ampleur de l'étalement à la taille de l'ouverture.\nL'expérience 3 de la situation d'évaluation le confirme : avec une fente plus étroite (a₃ < a₁), la tache centrale s'élargit (L₃ > L₁).",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q4",
            "type": "mcq",
            "prompt": "Quand on rétrécit la fente dans l'expérience de diffraction, la tache centrale sur l'écran :",
            "options": [
              "Rétrécit",
              "Disparaît",
              "Ne change pas",
              "S'élargit : le phénomène est plus marqué"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque de la documentation, vérifiée par l'expérience 3 de la situation (a₃ < a₁ ⇒ L₃ > L₁)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La propagation rectiligne mise en défaut",
          "stepTheme": "La propagation rectiligne mise en défaut",
          "stepBadge": "La propagation rectiligne mise en défaut",
          "paragraphText": "Si la lumière suivait strictement des rayons droits, l'écran ne recevrait que l'image géométrique de l'ouverture.\nL'étalement observé contredit cette prédiction : c'est la seconde remarque de la documentation.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q5",
            "type": "mcq",
            "prompt": "La diffraction met en défaut :",
            "options": [
              "Le principe de propagation rectiligne de la lumière dans un milieu homogène",
              "La conservation de l'énergie",
              "La loi de la réfraction",
              "Le principe d'inertie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la remarque de la documentation sur la diffraction."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Fente ou trou : pas la même figure",
          "stepTheme": "Fente ou trou : pas la même figure",
          "stepBadge": "Fente ou trou : pas la même figure",
          "paragraphText": "Piège : la figure de diffraction dépend de la forme de l'ouverture — une fente donne des franges parallèles, un trou circulaire donne des anneaux.\nLe résumé présente les deux cas : diffraction par un trou et diffraction par une fente.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q6",
            "type": "mcq",
            "prompt": "La figure de diffraction observée sur l'écran dépend :",
            "options": [
              "Uniquement de la couleur",
              "De la forme et de la taille de l'ouverture (fente, trou…)",
              "Uniquement de la puissance du laser",
              "De la température"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé distingue la diffraction par un trou et celle par une fente, avec des figures différentes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q1",
          "type": "mcq",
          "prompt": "Le phénomène par lequel un faisceau lumineux s'étale en traversant un orifice étroit s'appelle :",
          "options": [
            "La diffraction",
            "La réfraction",
            "La réflexion",
            "La dispersion par un prisme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le phénomène décrit en ouverture du résumé et de la documentation."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q2",
          "type": "mcq",
          "prompt": "Le phénomène de diffraction se manifeste lorsque les dimensions de l'ouverture ou de l'obstacle sont :",
          "options": [
            "Très supérieures à la longueur d'onde",
            "Inférieures ou de l'ordre de grandeur de la longueur d'onde",
            "Égales à la distance à l'écran",
            "Indépendantes de la longueur d'onde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la condition énoncée dans le résumé de la leçon."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q3",
          "type": "mcq",
          "prompt": "La diffraction de la lumière constitue une preuve de :",
          "options": [
            "Son caractère corpusculaire",
            "Sa propagation uniquement dans le vide",
            "Son caractère ondulatoire",
            "L'existence de l'éther"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé dit que la diffraction est « caractéristique des ondes »."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q4",
          "type": "mcq",
          "prompt": "Quand on rétrécit la fente dans l'expérience de diffraction, la tache centrale sur l'écran :",
          "options": [
            "Rétrécit",
            "Disparaît",
            "Ne change pas",
            "S'élargit : le phénomène est plus marqué"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque de la documentation, vérifiée par l'expérience 3 de la situation (a₃ < a₁ ⇒ L₃ > L₁)."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q5",
          "type": "mcq",
          "prompt": "La diffraction met en défaut :",
          "options": [
            "Le principe de propagation rectiligne de la lumière dans un milieu homogène",
            "La conservation de l'énergie",
            "La loi de la réfraction",
            "Le principe d'inertie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la remarque de la documentation sur la diffraction."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p01_q6",
          "type": "mcq",
          "prompt": "La figure de diffraction observée sur l'écran dépend :",
          "options": [
            "Uniquement de la couleur",
            "De la forme et de la taille de l'ouverture (fente, trou…)",
            "Uniquement de la puissance du laser",
            "De la température"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé distingue la diffraction par un trou et celle par une fente, avec des figures différentes."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l16_modele_ondulatoire_p02",
      "order": 2,
      "title": "Diffraction par une fente : θ = λ/a et tache centrale L = 2λD/a",
      "summary": "L'écart angulaire θ vaut λ/a ; la tache centrale, large de L = 2λD/a, permet de mesurer une longueur d'onde ou une largeur de fente.",
      "conceptExplanation": "L'écart angulaire θc est l'angle sous lequel on voit la moitié de la tache centrale de diffraction ; son expression est θc = λ/a.\nPar l'approximation des petits angles (tan θc ≈ θc), la demi-largeur de la tache vaut L/2 = D·θc, d'où la largeur de la tache centrale L = 2λD/a.\nLe TP du résumé (fente de 0,10 mm, laser de 632,8 nm, écran à 2,0 m) donne ainsi une tache centrale de 2,5 cm.\nLa relation sert aussi à mesurer : dans la deuxième situation, la tache de 12,6 mm obtenue avec une fente de 0,200 mm à 2,00 m donne θ = 3,15 × 10⁻³ rad et λ = 630 nm ; dans la situation d'évaluation, les taches de 3,2 cm (λ = 543 nm) et 4,0 cm (même fente) donnent λ₀ = 679 nm pour le pointeur rouge, dans l'intervalle 660–680 nm de sa notice.",
      "keyRule": "θ = λ/a (rad) ; L = 2λD/a : la tache grandit avec λ et D, et rétrécit quand a grandit.",
      "formulas": [
        {
          "name": "Écart angulaire de diffraction (fente)",
          "formula": "\\theta = \\frac{\\lambda}{a}",
          "note": "Angle en radians, sous lequel on voit la moitié de la tache centrale."
        },
        {
          "name": "Largeur de la tache centrale",
          "formula": "L = \\frac{2\\lambda D}{a}",
          "note": "Avec tan θ ≈ θ pour les petits angles."
        }
      ],
      "workedExample": {
        "title": "Le TP du résumé : une tache de 2,5 cm",
        "statement": "Une fente de largeur a = 0,10 mm est éclairée par un laser de longueur d'onde λ = 632,8 nm ; l'écran est à D = 2,0 m. Calcule l'écart angulaire et la largeur de la tache centrale.",
        "methodSteps": [
          "Écart angulaire : θc = λ/a.",
          "Largeur de la tache : L = 2λD/a, le double du produit de θc par D.",
          "La solution obtient L = 2,5 × 10⁻² m."
        ],
        "conclusion": "Ce sont les résultats des questions 2 et 3.2 de l'exercice de TP."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'écart angulaire θc",
          "stepTheme": "L'écart angulaire θc",
          "stepBadge": "L'écart angulaire θc",
          "paragraphText": "• Écart angulaire θc : angle sous lequel on voit la moitié de la tache centrale de diffraction, depuis la fente.\nC'est la définition demandée à la question 1 de l'exercice de TP.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q1",
            "type": "mcq",
            "prompt": "L'écart angulaire θc de diffraction est l'angle sous lequel on voit :",
            "options": [
              "La moitié de la tache centrale de diffraction",
              "Toute la figure de diffraction",
              "La fente elle-même",
              "L'écran entier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la question 1 de l'exercice de TP."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'expression θ = λ/a",
          "stepTheme": "L'expression θ = λ/a",
          "stepBadge": "L'expression θ = λ/a",
          "paragraphText": "Pour une fente de largeur a, l'écart angulaire ne dépend que du rapport de la longueur d'onde à la largeur.\nIl est d'autant plus grand que la fente est étroite ou la longueur d'onde grande.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q2",
            "type": "mcq",
            "prompt": "L'écart angulaire de diffraction par une fente de largeur a vaut :",
            "options": [
              "θ = a/λ",
              "θ = λ/a",
              "θ = λ × a",
              "θ = D/a"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'expression des questions 2 et 3.1 des exercices du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La largeur de la tache centrale L = 2λD/a",
          "stepTheme": "La largeur de la tache centrale L = 2λD/a",
          "stepBadge": "La largeur de la tache centrale L = 2λD/a",
          "paragraphText": "La géométrie donne tan θc = (L/2)/D ; aux petits angles, tan θc ≈ θc = λ/a.\nEn combinant, la tache centrale mesure L = 2λD/a : c'est l'expression à établir dans la situation d'évaluation.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q3",
            "type": "mcq",
            "prompt": "La largeur L de la tache centrale de diffraction (fente a, écran à D) est :",
            "options": [
              "L = λD/a",
              "L = λa/D",
              "L = 2λD/a",
              "L = 2aD/λ"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'expression des questions 3.1 du TP et 2 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Mesurer λ avec une tache : 630 nm",
          "stepTheme": "Mesurer λ avec une tache : 630 nm",
          "stepBadge": "Mesurer λ avec une tache : 630 nm",
          "paragraphText": "Dans la deuxième situation, l = 12,6 mm, D = 2,00 m et a = 0,200 mm.\nL'angle vaut θ = l/(2D) = 3,15 × 10⁻³ rad, et λ = θ × a donne 630 nm : une mesure complète de longueur d'onde par la diffraction.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q4",
            "type": "mcq",
            "prompt": "La longueur d'onde mesurée dans la deuxième situation (tache de 12,6 mm ; a = 0,200 mm ; D = 2,00 m) vaut :",
            "options": [
              "543 nm",
              "679 nm",
              "750 nm",
              "630 nm"
            ],
            "correctAnswerIndex": 3,
            "explanation": "λ = 6,30 × 10⁻⁷ m dans la solution ; 543 nm et 679 nm appartiennent à la situation d'évaluation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le pointeur laser de la situation : λ₀ = 679 nm",
          "stepTheme": "Le pointeur laser de la situation : λ₀ = 679 nm",
          "stepBadge": "Le pointeur laser de la situation : λ₀ = 679 nm",
          "paragraphText": "À fente et distance égales, la largeur de la tache est proportionnelle à λ : L₂/L₁ = λ₀/λ₁.\nAvec L₁ = 3,2 cm pour 543 nm et L₂ = 4,0 cm, on obtient λ₀ ≈ 679 nm, compatible avec la notice du pointeur (rouge, entre 660 et 680 nm).",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q5",
            "type": "mcq",
            "prompt": "La longueur d'onde du pointeur, déduite des taches de 3,2 cm (à 543 nm) et 4,0 cm, vaut environ :",
            "options": [
              "679 nm, dans l'intervalle 660–680 nm de la notice",
              "543 nm",
              "434 nm",
              "850 nm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "λ₀ = λ₁ × L₂/L₁ : c'est le résultat des questions 3.2 et 3.3 de la situation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Cas du trou circulaire : θ = 1,22 λ/a",
          "stepTheme": "Cas du trou circulaire : θ = 1,22 λ/a",
          "stepBadge": "Cas du trou circulaire : θ = 1,22 λ/a",
          "paragraphText": "La documentation donne le résultat analogue pour un trou de diamètre a : l'écart angulaire vaut 1,22 λ/a.\nLe facteur 1,22 vient de la géométrie circulaire de l'ouverture.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q6",
            "type": "mcq",
            "prompt": "Pour un trou circulaire de diamètre a, l'écart angulaire de diffraction vaut :",
            "options": [
              "θ = λ/a",
              "θ = 1,22 λ/a",
              "θ = 2λ/a",
              "θ = λ/(2a)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la formule donnée à la fin de la documentation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q1",
          "type": "mcq",
          "prompt": "L'écart angulaire θc de diffraction est l'angle sous lequel on voit :",
          "options": [
            "La moitié de la tache centrale de diffraction",
            "Toute la figure de diffraction",
            "La fente elle-même",
            "L'écran entier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la question 1 de l'exercice de TP."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q2",
          "type": "mcq",
          "prompt": "L'écart angulaire de diffraction par une fente de largeur a vaut :",
          "options": [
            "θ = a/λ",
            "θ = λ/a",
            "θ = λ × a",
            "θ = D/a"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'expression des questions 2 et 3.1 des exercices du résumé."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q3",
          "type": "mcq",
          "prompt": "La largeur L de la tache centrale de diffraction (fente a, écran à D) est :",
          "options": [
            "L = λD/a",
            "L = λa/D",
            "L = 2λD/a",
            "L = 2aD/λ"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'expression des questions 3.1 du TP et 2 de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q4",
          "type": "mcq",
          "prompt": "La longueur d'onde mesurée dans la deuxième situation (tache de 12,6 mm ; a = 0,200 mm ; D = 2,00 m) vaut :",
          "options": [
            "543 nm",
            "679 nm",
            "750 nm",
            "630 nm"
          ],
          "correctAnswerIndex": 3,
          "explanation": "λ = 6,30 × 10⁻⁷ m dans la solution ; 543 nm et 679 nm appartiennent à la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q5",
          "type": "mcq",
          "prompt": "La longueur d'onde du pointeur, déduite des taches de 3,2 cm (à 543 nm) et 4,0 cm, vaut environ :",
          "options": [
            "679 nm, dans l'intervalle 660–680 nm de la notice",
            "543 nm",
            "434 nm",
            "850 nm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "λ₀ = λ₁ × L₂/L₁ : c'est le résultat des questions 3.2 et 3.3 de la situation."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p02_q6",
          "type": "mcq",
          "prompt": "Pour un trou circulaire de diamètre a, l'écart angulaire de diffraction vaut :",
          "options": [
            "θ = λ/a",
            "θ = 1,22 λ/a",
            "θ = 2λ/a",
            "θ = λ/(2a)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la formule donnée à la fin de la documentation."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l16_modele_ondulatoire_p03",
      "order": 3,
      "title": "Les interférences lumineuses : les fentes d'Young",
      "summary": "Deux trous éclairés par la même source se comportent comme deux sources ponctuelles : la superposition des ondes diffractées crée des franges brillantes et sombres.",
      "conceptExplanation": "Dans le dispositif d'Young, les ondes issues de la source se propagent jusqu'aux deux trous S₁ et S₂.\nAu niveau de chacun d'eux, l'onde qui passe est diffractée : les trous se comportent comme deux sources ponctuelles, synchrones car issues de la même source.\nEn se superposant sur l'écran, les deux ondes interfèrent et forment des franges alternativement brillantes et sombres.\nLe résumé donne la condition générale : on a interférence lorsque deux ondes, de même nature et de fréquence identique, se superposent.",
      "keyRule": "Interférences = superposition de deux ondes de même nature et de même fréquence, issues de sources cohérentes.",
      "formulas": [],
      "workedExample": {
        "title": "Du trou unique aux franges d'Young",
        "statement": "Une source éclaire deux trous voisins S₁ et S₂ ; qu'observe-t-on sur un écran placé derrière, et pourquoi ?",
        "methodSteps": [
          "Chaque trou diffracte l'onde incidente et devient une source ponctuelle.",
          "Les deux ondes émises ont même fréquence et une relation de phase constante.",
          "Leur superposition produit des interférences : des franges brillantes et sombres alternées."
        ],
        "conclusion": "C'est l'interprétation du §2.1 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La condition d'interférence",
          "stepTheme": "La condition d'interférence",
          "stepBadge": "La condition d'interférence",
          "paragraphText": "• Interférence : superposition de deux ondes de même nature et de fréquence identique, donnant une répartition d'intensité non uniforme (franges).\nSans même nature ou sans même fréquence, pas de figure stable.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q1",
            "type": "mcq",
            "prompt": "Il y a interférence lorsque se superposent deux ondes :",
            "options": [
              "De même nature et de fréquence identique",
              "De fréquences très différentes",
              "L'une sonore et l'autre lumineuse",
              "Se déplaçant en sens inverse à des instants différents"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la condition énoncée dans l'interprétation des fentes d'Young."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "S₁ et S₂ : deux sources ponctuelles",
          "stepTheme": "S₁ et S₂ : deux sources ponctuelles",
          "stepBadge": "S₁ et S₂ : deux sources ponctuelles",
          "paragraphText": "Chaque trou, éclairé par la même source, réémet une onde diffractée dans toutes les directions.\nLes deux trous jouent donc le rôle de deux sources secondaires synchrones, condition des interférences stables.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q2",
            "type": "mcq",
            "prompt": "Dans le dispositif des fentes d'Young, les trous S₁ et S₂ se comportent comme :",
            "options": [
              "Deux sources indépendantes quelconques",
              "Deux sources ponctuelles synchrones, car issues de la même source",
              "Deux miroirs",
              "Deux écrans"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'interprétation du §2.1.2 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de la diffraction dans les interférences",
          "stepTheme": "Le rôle de la diffraction dans les interférences",
          "stepBadge": "Le rôle de la diffraction dans les interférences",
          "paragraphText": "C'est la diffraction par chaque trou qui permet aux deux ondes de se recouvrir sur l'écran.\nSans diffraction, les faisceaux resteraient séparés et ne se superposeraient nulle part : pas de franges.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q3",
            "type": "mcq",
            "prompt": "Pour que les ondes issues de S₁ et S₂ puissent se superposer sur l'écran, il faut que chaque trou :",
            "options": [
              "Réfléchisse l'onde",
              "Absorbe l'onde",
              "Diffracte l'onde dans toutes les directions",
              "Arrête l'onde"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé souligne que l'onde passant par chaque trou est diffractée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des franges brillantes et sombres alternées",
          "stepTheme": "Des franges brillantes et sombres alternées",
          "stepBadge": "Des franges brillantes et sombres alternées",
          "paragraphText": "Sur l'écran, l'intensité n'est ni uniforme ni aléatoire : elle forme des bandes régulières.\nSelon le point, les deux ondes arrivent en phase (frange brillante) ou en opposition de phase (frange sombre).",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q4",
            "type": "mcq",
            "prompt": "La figure d'interférences des fentes d'Young est constituée de :",
            "options": [
              "Une tache unique",
              "Des anneaux concentriques",
              "Un éclairement uniforme",
              "Des franges brillantes et sombres alternées"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'observation du §2.1.2, quantifiée au point suivant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Deux lampes indépendantes ne font pas d'interférences",
          "stepTheme": "Deux lampes indépendantes ne font pas d'interférences",
          "stepBadge": "Deux lampes indépendantes ne font pas d'interférences",
          "paragraphText": "Piège : deux sources indépendantes n'ont aucune relation de phase stable ; leurs éventuelles franges bougeraient trop vite pour être vues.\nD'où le montage d'Young : une seule source, divisée en deux par les deux trous.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q5",
            "type": "mcq",
            "prompt": "Pour observer des interférences stables, les deux sources doivent être :",
            "options": [
              "Cohérentes : même fréquence et relation de phase constante",
              "De couleurs différentes",
              "Très puissantes",
              "Très éloignées l'une de l'autre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la condition de l'interprétation : même nature, fréquence identique, sources issues de la même onde."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Interférences : une deuxième preuve ondulatoire",
          "stepTheme": "Interférences : une deuxième preuve ondulatoire",
          "stepBadge": "Interférences : une deuxième preuve ondulatoire",
          "paragraphText": "Comme la diffraction, les interférences n'ont de sens que pour des ondes qui se superposent.\nElles constituent le deuxième phénomène fondateur du modèle ondulatoire de la lumière dans cette leçon.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q6",
            "type": "mcq",
            "prompt": "Les interférences lumineuses confirment, comme la diffraction :",
            "options": [
              "Le modèle corpusculaire seul",
              "Le modèle ondulatoire de la lumière",
              "La propagation rectiligne stricte",
              "L'existence de rayons matériels"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Diffraction et interférences sont les deux manifestations ondulatoires développées dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q1",
          "type": "mcq",
          "prompt": "Il y a interférence lorsque se superposent deux ondes :",
          "options": [
            "De même nature et de fréquence identique",
            "De fréquences très différentes",
            "L'une sonore et l'autre lumineuse",
            "Se déplaçant en sens inverse à des instants différents"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la condition énoncée dans l'interprétation des fentes d'Young."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q2",
          "type": "mcq",
          "prompt": "Dans le dispositif des fentes d'Young, les trous S₁ et S₂ se comportent comme :",
          "options": [
            "Deux sources indépendantes quelconques",
            "Deux sources ponctuelles synchrones, car issues de la même source",
            "Deux miroirs",
            "Deux écrans"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'interprétation du §2.1.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q3",
          "type": "mcq",
          "prompt": "Pour que les ondes issues de S₁ et S₂ puissent se superposer sur l'écran, il faut que chaque trou :",
          "options": [
            "Réfléchisse l'onde",
            "Absorbe l'onde",
            "Diffracte l'onde dans toutes les directions",
            "Arrête l'onde"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé souligne que l'onde passant par chaque trou est diffractée."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q4",
          "type": "mcq",
          "prompt": "La figure d'interférences des fentes d'Young est constituée de :",
          "options": [
            "Une tache unique",
            "Des anneaux concentriques",
            "Un éclairement uniforme",
            "Des franges brillantes et sombres alternées"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'observation du §2.1.2, quantifiée au point suivant."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q5",
          "type": "mcq",
          "prompt": "Pour observer des interférences stables, les deux sources doivent être :",
          "options": [
            "Cohérentes : même fréquence et relation de phase constante",
            "De couleurs différentes",
            "Très puissantes",
            "Très éloignées l'une de l'autre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la condition de l'interprétation : même nature, fréquence identique, sources issues de la même onde."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p03_q6",
          "type": "mcq",
          "prompt": "Les interférences lumineuses confirment, comme la diffraction :",
          "options": [
            "Le modèle corpusculaire seul",
            "Le modèle ondulatoire de la lumière",
            "La propagation rectiligne stricte",
            "L'existence de rayons matériels"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Diffraction et interférences sont les deux manifestations ondulatoires développées dans la leçon."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l16_modele_ondulatoire_p04",
      "order": 4,
      "title": "Différence de marche et interfrange i = λD/a",
      "summary": "δ = a·y/D : franges brillantes si δ = kλ, sombres si δ = (2k+1)λ/2 ; la distance entre deux franges de même nature est l'interfrange i = λD/a.",
      "conceptExplanation": "La différence de marche δ (en mètres) est la différence des distances parcourues par les deux ondes : δ = S₂P − S₁P, et pour un point d'abscisse y sur l'écran, δ = a·y/D.\nSi δ = kλ (k entier relatif), il y a interférences constructives : franges brillantes aux positions y = k·λD/a.\nSi δ = (2k+1)·λ/2, il y a interférences destructives : franges sombres aux positions y = (2k+1)·λD/(2a).\nLa distance entre deux franges brillantes — et aussi entre deux franges sombres — est l'interfrange i = λD/a. Dans l'exercice 1 (a = 0,2 mm, D = 1 m), la 3e frange brillante à 7,5 mm donne i = 2,5 mm et λ = 0,5 µm ; la 3e frange sombre à 7,5 mm, située à 2,5 interfranges du centre, donne λ = 0,6 µm.",
      "keyRule": "δ = kλ ⇒ brillant ; δ = (2k+1)λ/2 ⇒ sombre ; i = λD/a sert à mesurer λ.",
      "formulas": [
        {
          "name": "Différence de marche",
          "formula": "\\delta = S_2P - S_1P = \\frac{a \\cdot y}{D}",
          "note": "a : distance entre les fentes ; D : distance fentes-écran ; y : abscisse du point."
        },
        {
          "name": "Interfrange",
          "formula": "i = \\frac{\\lambda D}{a}",
          "note": "Distance entre deux franges brillantes (ou deux franges sombres) consécutives."
        }
      ],
      "workedExample": {
        "title": "L'exercice 1 : mesurer λ par les franges brillantes",
        "statement": "Deux fentes d'Young sont distantes de 0,2 mm, l'écran est à 1 m. La 3e frange brillante est à 7,5 mm de la frange centrale. Calcule la longueur d'onde.",
        "methodSteps": [
          "La 3e frange brillante est à 3 interfranges du centre : i = 2,5 mm.",
          "On inverse la formule de l'interfrange : λ = a·i/D.",
          "La solution obtient λ = 0,5 µm."
        ],
        "conclusion": "C'est la réponse à la question 1 de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La différence de marche δ",
          "stepTheme": "La différence de marche δ",
          "stepBadge": "La différence de marche δ",
          "paragraphText": "• Différence de marche : δ = S₂P − S₁P, différence des distances parcourues par les deux ondes pour atteindre le point P de l'écran.\nPour les fentes d'Young, elle vaut δ = a·y/D où y est l'abscisse de P.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q1",
            "type": "mcq",
            "prompt": "La différence de marche en un point P de l'écran des fentes d'Young est :",
            "options": [
              "δ = S₂P − S₁P, soit δ = a·y/D",
              "δ = S₂P + S₁P",
              "δ = y × D",
              "δ = λ × D"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition et l'expression du §3 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Interférences constructives : δ = kλ",
          "stepTheme": "Interférences constructives : δ = kλ",
          "stepBadge": "Interférences constructives : δ = kλ",
          "paragraphText": "Si la différence de marche est un nombre entier de longueurs d'onde, les deux ondes arrivent en phase et s'ajoutent.\nOn observe des franges brillantes aux positions y = k·λD/a, avec k ∈ ℤ.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q2",
            "type": "mcq",
            "prompt": "On observe une frange brillante lorsque la différence de marche vérifie :",
            "options": [
              "δ = λ/2",
              "δ = kλ avec k entier relatif",
              "δ = (2k+1)λ/2",
              "δ = 0 uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la condition des interférences constructives du §3 ; δ = 0 n'en est que le cas k = 0 (frange centrale)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Interférences destructives : δ = (2k+1)λ/2",
          "stepTheme": "Interférences destructives : δ = (2k+1)λ/2",
          "stepBadge": "Interférences destructives : δ = (2k+1)λ/2",
          "paragraphText": "Si la différence de marche est un nombre impair de demi-longueurs d'onde, les ondes arrivent en opposition de phase et se détruisent.\nOn observe des franges sombres aux positions y = (2k+1)·λD/(2a).",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q3",
            "type": "mcq",
            "prompt": "On observe une frange sombre lorsque la différence de marche vérifie :",
            "options": [
              "δ = kλ",
              "δ = 2λ",
              "δ = (2k+1)λ/2 avec k entier relatif",
              "δ = λ seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la condition des interférences destructives du §3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'interfrange i = λD/a",
          "stepTheme": "L'interfrange i = λD/a",
          "stepBadge": "L'interfrange i = λD/a",
          "paragraphText": "• Interfrange : distance séparant deux franges brillantes consécutives — et de façon générale deux franges de même nature.\nElle vaut i = λD/a : elle grandit avec λ et D, et diminue quand les fentes s'écartent.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q4",
            "type": "mcq",
            "prompt": "L'interfrange des fentes d'Young (fentes distantes de a, écran à D) vaut :",
            "options": [
              "i = λa/D",
              "i = D/(λa)",
              "i = λD seulement si a = 1",
              "i = λD/a"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la formule du §3, valable pour les franges brillantes comme pour les franges sombres."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 1 : λ = 0,5 µm par la frange brillante",
          "stepTheme": "L'exercice 1 : λ = 0,5 µm par la frange brillante",
          "stepBadge": "L'exercice 1 : λ = 0,5 µm par la frange brillante",
          "paragraphText": "La 3e frange brillante étant à 7,5 mm du centre, l'interfrange vaut le tiers de cette distance : 2,5 mm.\nAvec a = 0,2 mm et D = 1 m, la longueur d'onde calculée est 0,5 µm.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q5",
            "type": "mcq",
            "prompt": "La longueur d'onde trouvée à la question 1 de l'exercice 1 vaut :",
            "options": [
              "0,5 µm",
              "0,6 µm",
              "2,5 mm",
              "0,2 mm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "λ = a·i/D avec i = 2,5 mm : 0,5 µm ; 0,6 µm est la réponse de la question 2 (frange sombre)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La 3e frange sombre est à 2,5 interfranges",
          "stepTheme": "La 3e frange sombre est à 2,5 interfranges",
          "stepBadge": "La 3e frange sombre est à 2,5 interfranges",
          "paragraphText": "Piège : les franges sombres sont décalées d'une demi-interfrange par rapport aux brillantes.\nLa 3e frange sombre se trouve donc à 2,5 interfranges du centre : avec 7,5 mm, i' = 3 mm et λ' = 0,6 µm — exercice 1, question 2.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q6",
            "type": "mcq",
            "prompt": "La 3e frange sombre (k = 2) est située, par rapport à la frange centrale, à une distance de :",
            "options": [
              "3 interfranges",
              "2,5 interfranges",
              "2 interfranges",
              "0,5 interfrange"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Position (2k+1)/2 = 2,5 interfranges pour k = 2 : c'est le calcul de la question 2 de l'exercice 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q1",
          "type": "mcq",
          "prompt": "La différence de marche en un point P de l'écran des fentes d'Young est :",
          "options": [
            "δ = S₂P − S₁P, soit δ = a·y/D",
            "δ = S₂P + S₁P",
            "δ = y × D",
            "δ = λ × D"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition et l'expression du §3 du résumé."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q2",
          "type": "mcq",
          "prompt": "On observe une frange brillante lorsque la différence de marche vérifie :",
          "options": [
            "δ = λ/2",
            "δ = kλ avec k entier relatif",
            "δ = (2k+1)λ/2",
            "δ = 0 uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la condition des interférences constructives du §3 ; δ = 0 n'en est que le cas k = 0 (frange centrale)."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q3",
          "type": "mcq",
          "prompt": "On observe une frange sombre lorsque la différence de marche vérifie :",
          "options": [
            "δ = kλ",
            "δ = 2λ",
            "δ = (2k+1)λ/2 avec k entier relatif",
            "δ = λ seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la condition des interférences destructives du §3."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q4",
          "type": "mcq",
          "prompt": "L'interfrange des fentes d'Young (fentes distantes de a, écran à D) vaut :",
          "options": [
            "i = λa/D",
            "i = D/(λa)",
            "i = λD seulement si a = 1",
            "i = λD/a"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la formule du §3, valable pour les franges brillantes comme pour les franges sombres."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q5",
          "type": "mcq",
          "prompt": "La longueur d'onde trouvée à la question 1 de l'exercice 1 vaut :",
          "options": [
            "0,5 µm",
            "0,6 µm",
            "2,5 mm",
            "0,2 mm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "λ = a·i/D avec i = 2,5 mm : 0,5 µm ; 0,6 µm est la réponse de la question 2 (frange sombre)."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p04_q6",
          "type": "mcq",
          "prompt": "La 3e frange sombre (k = 2) est située, par rapport à la frange centrale, à une distance de :",
          "options": [
            "3 interfranges",
            "2,5 interfranges",
            "2 interfranges",
            "0,5 interfrange"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Position (2k+1)/2 = 2,5 interfranges pour k = 2 : c'est le calcul de la question 2 de l'exercice 1."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l16_modele_ondulatoire_p05",
      "order": 5,
      "title": "L'onde électromagnétique",
      "summary": "Vibration couplée d'un champ électrique et d'un champ magnétique variables ; elle se propage dans le vide à la célérité c, avec λ = c/ν et E = h·ν.",
      "conceptExplanation": "Une onde électromagnétique est le résultat de la vibration couplée d'un champ électrique et d'un champ magnétique variables dans le temps.\nElle est susceptible de se propager dans l'air comme dans le vide, et elle est caractérisée par sa longueur d'onde λ (en mètres) et sa fréquence ν (en hertz), liées par ν = 1/T et λ = v·T, où v est la vitesse de l'onde — dans le vide, v = c.\nLa documentation précise : c = 299 792 458 m/s, on retiendra 3 × 10⁸ m/s ; cette célérité dans le vide ne dépend pas de la fréquence, et celle dans l'air lui est pratiquement égale.\nLes ondes électromagnétiques interagissent avec la matière différemment selon leur fréquence : plus la fréquence est grande, plus l'énergie transportée est grande, E = h·ν avec h = 6,62 × 10⁻³⁴ J·s, la constante de Planck.",
      "keyRule": "Onde EM : champs E et B couplés, propagation dans le vide à c, λ = c/ν, énergie E = h·ν.",
      "formulas": [
        {
          "name": "Longueur d'onde",
          "formula": "\\lambda = \\frac{c}{\\nu} = c \\cdot T",
          "note": "Dans le vide ; ν = 1/T."
        },
        {
          "name": "Énergie transportée",
          "formula": "E = h \\cdot \\nu",
          "note": "h = 6,62 × 10⁻³⁴ J·s, constante de Planck."
        }
      ],
      "workedExample": {
        "title": "L'exercice 3 : λ = c/f pour quatre radiations",
        "statement": "On donne les fréquences de quatre radiations monochromatiques : 7,14 × 10¹⁴ Hz, 5,45 × 10¹⁴ Hz, 5,00 × 10¹⁴ Hz et 4,00 × 10¹⁴ Hz. Donne l'expression de λ et les valeurs en nanomètres.",
        "methodSteps": [
          "Expression : λ = c/f, avec c la célérité dans le vide.",
          "Les calculs donnent respectivement 420 nm, 550 nm, 600 nm et 750 nm.",
          "Ces quatre radiations sont le violet, le vert, le jaune et le rouge."
        ],
        "conclusion": "C'est le tableau complété de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'une onde électromagnétique",
          "stepTheme": "La définition d'une onde électromagnétique",
          "stepBadge": "La définition d'une onde électromagnétique",
          "paragraphText": "• Onde électromagnétique : vibration couplée d'un champ électrique et d'un champ magnétique variables dans le temps.\nPas de support matériel nécessaire : c'est ce qui la distingue des ondes mécaniques.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q1",
            "type": "mcq",
            "prompt": "Une onde électromagnétique est :",
            "options": [
              "La vibration couplée d'un champ électrique et d'un champ magnétique variables dans le temps",
              "Une vibration de la matière",
              "Un déplacement d'électrons dans un fil",
              "Une onde sonore de haute fréquence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §4 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Elle se propage dans le vide",
          "stepTheme": "Elle se propage dans le vide",
          "stepBadge": "Elle se propage dans le vide",
          "paragraphText": "Une onde électromagnétique est susceptible de se propager dans l'air comme dans le vide.\nC'est ainsi que la lumière du Soleil traverse l'espace vide jusqu'à la Terre.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q2",
            "type": "mcq",
            "prompt": "Une onde électromagnétique peut se propager :",
            "options": [
              "Uniquement dans les métaux",
              "Dans l'air comme dans le vide",
              "Uniquement dans l'eau",
              "Uniquement dans les fibres optiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la deuxième phrase de la définition du §4."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "λ = v·T et ν = 1/T",
          "stepTheme": "λ = v·T et ν = 1/T",
          "stepBadge": "λ = v·T et ν = 1/T",
          "paragraphText": "L'onde est caractérisée par sa longueur d'onde λ et sa fréquence ν, inverse de la période.\nPendant une période, l'onde avance d'une longueur d'onde : λ = v·T ; dans le vide, v = c.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q3",
            "type": "mcq",
            "prompt": "La longueur d'onde d'une onde électromagnétique dans le vide s'écrit :",
            "options": [
              "λ = ν/c",
              "λ = c × ν",
              "λ = c/ν",
              "λ = ν × T²"
            ],
            "correctAnswerIndex": 2,
            "explanation": "De λ = v·T et ν = 1/T avec v = c : λ = c/ν (§4)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La célérité c ≈ 3 × 10⁸ m/s, indépendante de ν",
          "stepTheme": "La célérité c ≈ 3 × 10⁸ m/s, indépendante de ν",
          "stepBadge": "La célérité c ≈ 3 × 10⁸ m/s, indépendante de ν",
          "paragraphText": "La documentation donne la valeur exacte c = 299 792 458 m/s, et l'on retient 3 × 10⁸ m/s.\nRemarque importante : dans le vide, cette célérité ne dépend pas de la fréquence de l'onde, et elle est pratiquement la même dans l'air.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q4",
            "type": "mcq",
            "prompt": "La célérité de la lumière dans le vide vaut environ 3 × 10⁸ m/s et elle :",
            "options": [
              "Dépend fortement de la fréquence",
              "Est nulle pour le rouge",
              "Vaut la moitié dans l'air",
              "Ne dépend pas de la fréquence de l'onde"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque de la documentation « Interprétation ondulatoire »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'énergie transportée : E = h·ν",
          "stepTheme": "L'énergie transportée : E = h·ν",
          "stepBadge": "L'énergie transportée : E = h·ν",
          "paragraphText": "Les ondes électromagnétiques interagissent avec la matière de manière différente selon leur fréquence.\nPlus la fréquence est grande, plus l'énergie transportée par l'onde est grande : E = h·ν, où h = 6,62 × 10⁻³⁴ J·s est la constante de Planck.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q5",
            "type": "mcq",
            "prompt": "L'énergie transportée par une onde électromagnétique est :",
            "options": [
              "E = h·ν, proportionnelle à la fréquence",
              "Indépendante de la fréquence",
              "E = h/ν",
              "Toujours la même pour toutes les ondes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la propriété du §4, avec la constante de Planck h = 6,62 × 10⁻³⁴ J·s."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'onde lumineuse : une onde EM visible",
          "stepTheme": "L'onde lumineuse : une onde EM visible",
          "stepBadge": "L'onde lumineuse : une onde EM visible",
          "paragraphText": "• Onde lumineuse : une onde électromagnétique visible.\nC'est la définition demandée à la question 1 de la situation d'évaluation ; la lumière n'est qu'une petite partie du spectre électromagnétique.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q6",
            "type": "mcq",
            "prompt": "Une onde lumineuse est :",
            "options": [
              "Une onde mécanique",
              "Une onde électromagnétique visible",
              "Une onde électromagnétique quelconque",
              "Un courant d'électrons"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §5 du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q1",
          "type": "mcq",
          "prompt": "Une onde électromagnétique est :",
          "options": [
            "La vibration couplée d'un champ électrique et d'un champ magnétique variables dans le temps",
            "Une vibration de la matière",
            "Un déplacement d'électrons dans un fil",
            "Une onde sonore de haute fréquence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §4 du résumé."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q2",
          "type": "mcq",
          "prompt": "Une onde électromagnétique peut se propager :",
          "options": [
            "Uniquement dans les métaux",
            "Dans l'air comme dans le vide",
            "Uniquement dans l'eau",
            "Uniquement dans les fibres optiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la deuxième phrase de la définition du §4."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q3",
          "type": "mcq",
          "prompt": "La longueur d'onde d'une onde électromagnétique dans le vide s'écrit :",
          "options": [
            "λ = ν/c",
            "λ = c × ν",
            "λ = c/ν",
            "λ = ν × T²"
          ],
          "correctAnswerIndex": 2,
          "explanation": "De λ = v·T et ν = 1/T avec v = c : λ = c/ν (§4)."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q4",
          "type": "mcq",
          "prompt": "La célérité de la lumière dans le vide vaut environ 3 × 10⁸ m/s et elle :",
          "options": [
            "Dépend fortement de la fréquence",
            "Est nulle pour le rouge",
            "Vaut la moitié dans l'air",
            "Ne dépend pas de la fréquence de l'onde"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque de la documentation « Interprétation ondulatoire »."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q5",
          "type": "mcq",
          "prompt": "L'énergie transportée par une onde électromagnétique est :",
          "options": [
            "E = h·ν, proportionnelle à la fréquence",
            "Indépendante de la fréquence",
            "E = h/ν",
            "Toujours la même pour toutes les ondes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la propriété du §4, avec la constante de Planck h = 6,62 × 10⁻³⁴ J·s."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p05_q6",
          "type": "mcq",
          "prompt": "Une onde lumineuse est :",
          "options": [
            "Une onde mécanique",
            "Une onde électromagnétique visible",
            "Une onde électromagnétique quelconque",
            "Un courant d'électrons"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §5 du résumé."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l16_modele_ondulatoire_p06",
      "order": 6,
      "title": "Couleur, lumière monochromatique et importance des ondes électromagnétiques",
      "summary": "Une lumière monochromatique est une onde EM sinusoïdale de fréquence donnée : sa couleur est liée à sa fréquence ; les ondes EM servent dans l'industrie et les télécommunications.",
      "conceptExplanation": "On appelle lumière monochromatique une onde électromagnétique progressive sinusoïdale de fréquence donnée ; la couleur de cette lumière est liée à la valeur de sa fréquence.\nComme toutes les ondes périodiques, les ondes électromagnétiques présentent une double périodicité, temporelle et spatiale ; la longueur d'onde dans le vide d'une radiation monochromatique se note λ₀ = c/f.\nLe tableau de l'exercice 3 illustre le lien fréquence-couleur : 420 nm pour le violet, 550 nm pour le vert, 600 nm pour le jaune, 750 nm pour le rouge.\nLa lumière émise par le laser peut être décrite comme une onde électromagnétique sinusoïdale de fréquence donnée, et plus largement on utilise les ondes électromagnétiques dans l'industrie et dans les télécommunications — ondes hertziennes des relais téléphoniques de la situation d'apprentissage.",
      "keyRule": "Monochromatique = une seule fréquence ; la couleur est la signature de cette fréquence.",
      "formulas": [
        {
          "name": "Longueur d'onde dans le vide",
          "formula": "\\lambda_0 = \\frac{c}{f}",
          "note": "Notation λ₀ de la documentation pour une radiation monochromatique."
        }
      ],
      "workedExample": {
        "title": "Associer fréquence, longueur d'onde et couleur",
        "statement": "Complète le tableau de l'exercice 3 : pour 7,14 × 10¹⁴ Hz, 5,45 × 10¹⁴ Hz, 5,00 × 10¹⁴ Hz et 4,00 × 10¹⁴ Hz, donne λ et la couleur.",
        "methodSteps": [
          "On applique λ = c/f à chaque fréquence.",
          "On obtient 420 nm, 550 nm, 600 nm et 750 nm.",
          "Les couleurs correspondantes sont le violet, le vert, le jaune et le rouge : λ croît quand la fréquence décroît."
        ],
        "conclusion": "C'est le tableau complété dans la solution de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La lumière monochromatique",
          "stepTheme": "La lumière monochromatique",
          "stepBadge": "La lumière monochromatique",
          "paragraphText": "• Lumière monochromatique : onde électromagnétique progressive sinusoïdale de fréquence donnée.\nUn laser émet une telle lumière ; la lumière blanche, elle, est un mélange de fréquences.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q1",
            "type": "mcq",
            "prompt": "Une lumière monochromatique est :",
            "options": [
              "Une onde électromagnétique progressive sinusoïdale de fréquence donnée",
              "Un mélange de toutes les couleurs",
              "Une lumière toujours rouge",
              "Une onde mécanique sinusoïdale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la documentation, « Couleur et longueur d'onde »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La couleur est liée à la fréquence",
          "stepTheme": "La couleur est liée à la fréquence",
          "stepBadge": "La couleur est liée à la fréquence",
          "paragraphText": "Deux radiations de fréquences différentes n'ont pas la même couleur.\nC'est la fréquence — grandeur intrinsèque de la radiation — qui détermine la couleur perçue.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q2",
            "type": "mcq",
            "prompt": "La couleur d'une lumière monochromatique est liée à :",
            "options": [
              "Son intensité",
              "La valeur de sa fréquence",
              "La distance de la source",
              "La température de l'écran"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la phrase de la documentation sur la lumière monochromatique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le tableau des couleurs : du violet au rouge",
          "stepTheme": "Le tableau des couleurs : du violet au rouge",
          "stepBadge": "Le tableau des couleurs : du violet au rouge",
          "paragraphText": "Dans l'exercice 3 : 420 nm correspond au violet, 550 nm au vert, 600 nm au jaune, 750 nm au rouge.\nQuand la longueur d'onde augmente, la fréquence diminue et la couleur glisse du violet vers le rouge.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q3",
            "type": "mcq",
            "prompt": "Les radiations de 420 nm, 550 nm, 600 nm et 750 nm sont respectivement :",
            "options": [
              "Rouge, jaune, vert, violet",
              "Vert, violet, rouge, jaune",
              "Violet, vert, jaune, rouge",
              "Jaune, rouge, violet, vert"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le tableau complété de l'exercice 3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La double périodicité des ondes EM",
          "stepTheme": "La double périodicité des ondes EM",
          "stepBadge": "La double périodicité des ondes EM",
          "paragraphText": "Comme toutes les ondes périodiques, les ondes électromagnétiques présentent une double périodicité : temporelle (période T, fréquence ν) et spatiale (longueur d'onde λ).\nLa documentation note λ₀ = c/f la longueur d'onde dans le vide d'une radiation monochromatique.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q4",
            "type": "mcq",
            "prompt": "Les ondes électromagnétiques présentent, comme toutes les ondes périodiques :",
            "options": [
              "Une périodicité uniquement temporelle",
              "Une périodicité uniquement spatiale",
              "Aucune périodicité",
              "Une double périodicité, temporelle et spatiale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque de la documentation, « Longueur d'onde »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le laser : une onde EM sinusoïdale de fréquence donnée",
          "stepTheme": "Le laser : une onde EM sinusoïdale de fréquence donnée",
          "stepBadge": "Le laser : une onde EM sinusoïdale de fréquence donnée",
          "paragraphText": "La documentation le précise : la lumière émise par le laser peut être décrite comme une onde électromagnétique sinusoïdale de fréquence donnée.\nC'est ce qui la rend apte aux expériences de diffraction et d'interférences des points précédents.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q5",
            "type": "mcq",
            "prompt": "La lumière d'un laser peut être décrite comme :",
            "options": [
              "Une onde électromagnétique sinusoïdale de fréquence donnée",
              "Un faisceau de particules uniquement",
              "Une onde sonore",
              "Une suite d'éclairs sans périodicité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la phrase de l'« Interprétation ondulatoire » de la documentation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'importance des ondes électromagnétiques",
          "stepTheme": "L'importance des ondes électromagnétiques",
          "stepBadge": "L'importance des ondes électromagnétiques",
          "paragraphText": "Le résumé conclut : on utilise les ondes électromagnétiques dans l'industrie, dans les télécommunications…\nLa situation d'apprentissage l'illustre par les pylônes relais d'ondes hertziennes de la téléphonie, avec leurs ondes courtes, moyennes et modulations de fréquence.",
          "exercise": {
            "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q6",
            "type": "mcq",
            "prompt": "Les ondes électromagnétiques sont notamment utilisées :",
            "options": [
              "Uniquement pour l'éclairage",
              "Dans l'industrie et les télécommunications (relais hertziens, radio…)",
              "Uniquement en médecine",
              "Uniquement pour chauffer les aliments"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la section « Importance de quelques ondes électromagnétiques » du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q1",
          "type": "mcq",
          "prompt": "Une lumière monochromatique est :",
          "options": [
            "Une onde électromagnétique progressive sinusoïdale de fréquence donnée",
            "Un mélange de toutes les couleurs",
            "Une lumière toujours rouge",
            "Une onde mécanique sinusoïdale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la documentation, « Couleur et longueur d'onde »."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q2",
          "type": "mcq",
          "prompt": "La couleur d'une lumière monochromatique est liée à :",
          "options": [
            "Son intensité",
            "La valeur de sa fréquence",
            "La distance de la source",
            "La température de l'écran"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la phrase de la documentation sur la lumière monochromatique."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q3",
          "type": "mcq",
          "prompt": "Les radiations de 420 nm, 550 nm, 600 nm et 750 nm sont respectivement :",
          "options": [
            "Rouge, jaune, vert, violet",
            "Vert, violet, rouge, jaune",
            "Violet, vert, jaune, rouge",
            "Jaune, rouge, violet, vert"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le tableau complété de l'exercice 3."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q4",
          "type": "mcq",
          "prompt": "Les ondes électromagnétiques présentent, comme toutes les ondes périodiques :",
          "options": [
            "Une périodicité uniquement temporelle",
            "Une périodicité uniquement spatiale",
            "Aucune périodicité",
            "Une double périodicité, temporelle et spatiale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque de la documentation, « Longueur d'onde »."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q5",
          "type": "mcq",
          "prompt": "La lumière d'un laser peut être décrite comme :",
          "options": [
            "Une onde électromagnétique sinusoïdale de fréquence donnée",
            "Un faisceau de particules uniquement",
            "Une onde sonore",
            "Une suite d'éclairs sans périodicité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la phrase de l'« Interprétation ondulatoire » de la documentation."
        },
        {
          "id": "terminale_c_physique_l16_modele_ondulatoire_p06_q6",
          "type": "mcq",
          "prompt": "Les ondes électromagnétiques sont notamment utilisées :",
          "options": [
            "Uniquement pour l'éclairage",
            "Dans l'industrie et les télécommunications (relais hertziens, radio…)",
            "Uniquement en médecine",
            "Uniquement pour chauffer les aliments"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la section « Importance de quelques ondes électromagnétiques » du résumé."
        }
      ]
    }
  ]
};
