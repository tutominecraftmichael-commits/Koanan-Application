import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 02 : Probabilité conditionnelle et variable aléatoire » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2845
export const MATHS_TLE_CD_L02_PROBABILITE: CurriculumChapter = {
  "id": "terminale_c_maths_probabilites_l02_probabilite",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 2,
  "title": "Leçon 2 : Probabilité conditionnelle et variable aléatoire",
  "summary": "Probabilité conditionnelle, événements indépendants, formule des probabilités totales, variable aléatoire, espérance, variance, schéma de Bernoulli, loi binomiale et fonction de répartition.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2845",
  "points": [
    {
      "id": "terminale_c_maths_probabilites_l02_probabilite_p01",
      "order": 1,
      "title": "Probabilité conditionnelle",
      "summary": "La probabilité de A sachant B se calcule en divisant la probabilité de l'intersection par celle de B.",
      "conceptExplanation": "Soit $B$ un évènement d'un univers $\\Omega$ tel que $P(B) \\neq 0$.\nOn appelle probabilité conditionnelle sachant que $B$ est réalisé l'application $P_B$ qui à tout évènement $A$ de $\\Omega$ associe le nombre réel $\\frac{P(A \\cap B)}{P(B)}$.\nCe nombre se note $P_B(A)$ ou $P(A/B)$ et se lit « probabilité de $A$ sachant que $B$ est réalisé » ou « probabilité de $A$ sachant $B$ ».\nAinsi : $P(A/B) = P_B(A) = \\frac{P(A \\cap B)}{P(B)}$.\nConséquence de la définition : soit $A$ et $B$ deux évènements tels que $P(A) \\neq 0$ et $P(B) \\neq 0$. Alors $P(A \\cap B) = P(A) \\times P_A(B)$ et $P(A \\cap B) = P(B) \\times P_B(A)$.",
      "keyRule": "Probabilité conditionnelle : on divise par la probabilité de la condition. Intersection : on multiplie la condition par la conditionnelle.",
      "formulas": [
        {
          "name": "Probabilité conditionnelle",
          "formula": "P_B(A) = P(A/B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) \\neq 0)",
          "note": "On ne divise jamais par une probabilité nulle."
        },
        {
          "name": "Probabilité d'une intersection",
          "formula": "P(A \\cap B) = P(A) \\times P_A(B) = P(B) \\times P_B(A)",
          "note": "On choisit la factorisation la plus utile."
        }
      ],
      "workedExample": {
        "title": "Calculer $P_E(F)$ et $P_F(E)$",
        "statement": "$E$ et $F$ sont deux événements tels que $p(E) = \\frac{1}{2}$, $p(F) = \\frac{3}{4}$ et $p(E \\cap F) = \\frac{2}{5}$. Calcule $p_E(F)$ et $p_F(E)$.",
        "methodSteps": [
          "On applique la définition : $P_E(F) = \\frac{p(E \\cap F)}{p(E)}$.",
          "Donc $P_E(F) = \\frac{2/5}{1/2} = \\frac{4}{5}$.",
          "De même, $P_F(E) = \\frac{p(E \\cap F)}{p(F)} = \\frac{2/5}{3/4} = \\frac{8}{15}$."
        ],
        "conclusion": "$P_E(F) = \\frac{4}{5}$ et $P_F(E) = \\frac{8}{15}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "• Soit $B$ un évènement tel que $P(B) \\neq 0$. La probabilité de $A$ sachant $B$ est $P_B(A) = P(A/B) = \\frac{P(A \\cap B)}{P(B)}$.\n« Sachant $B$ » signifie qu'on se place dans l'univers restreint à $B$ : on ne garde que les cas où $B$ est réalisé.\nLa condition $P(B) \\neq 0$ est indispensable : on ne divise pas par zéro.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q1",
            "type": "mcq",
            "prompt": "Que vaut $P_B(A)$ quand $P(A \\cap B) = 0{,}2$ et $P(B) = 0{,}5$ ?",
            "options": [
              "$0{,}1$",
              "$0{,}2$",
              "$0{,}4$",
              "$0{,}7$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par définition, $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}2}{0{,}5} = 0{,}4$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer une probabilité conditionnelle",
          "stepTheme": "Calculer une probabilité conditionnelle",
          "stepBadge": "Calculer une probabilité conditionnelle",
          "paragraphText": "• On divise la probabilité de l'intersection par la probabilité de la condition.\nExemple du cours : $p(E) = \\frac{1}{2}$, $p(F) = \\frac{3}{4}$, $p(E \\cap F) = \\frac{2}{5}$.\n$P_E(F) = \\frac{2/5}{1/2} = \\frac{4}{5}$ et $P_F(E) = \\frac{2/5}{3/4} = \\frac{8}{15}$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q2",
            "type": "mcq",
            "prompt": "Avec $p(E) = \\frac{1}{2}$, $p(F) = \\frac{3}{4}$ et $p(E \\cap F) = \\frac{2}{5}$, que vaut $P_E(F)$ ?",
            "options": [
              "$\\frac{2}{5}$",
              "$\\frac{3}{5}$",
              "$\\frac{4}{5}$",
              "$\\frac{8}{15}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$P_E(F) = \\frac{p(E \\cap F)}{p(E)} = \\frac{2/5}{1/2} = \\frac{4}{5}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La probabilité d'une intersection",
          "stepTheme": "La probabilité d'une intersection",
          "stepBadge": "La probabilité d'une intersection",
          "paragraphText": "• Conséquence de la définition : $P(A \\cap B) = P(A) \\times P_A(B) = P(B) \\times P_B(A)$.\nCette formule permet de calculer une intersection quand on connaît une probabilité conditionnelle.\nExemple du cours : $p(F) = 0{,}75$ et $p_F(I) = 0{,}45$, donc $p(F \\cap I) = 0{,}45 \\times 0{,}75 = 0{,}3375$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q3",
            "type": "mcq",
            "prompt": "On a $p(F) = 0{,}75$ et $p_F(I) = 0{,}45$. Que vaut $p(F \\cap I)$ ?",
            "options": [
              "$0{,}3$",
              "$0{,}3375$",
              "$0{,}45$",
              "$0{,}75$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$p(F \\cap I) = p_F(I) \\times p(F) = 0{,}45 \\times 0{,}75 = 0{,}3375$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le sondage sur le barrage",
          "stepTheme": "Le sondage sur le barrage",
          "stepBadge": "Le sondage sur le barrage",
          "paragraphText": "• 65 % de la population est contre la construction d'un barrage ; parmi ces opposants, 70 % sont des écologistes. Parmi les non-opposés, 20 % sont des écologistes.\nSoit $C$ l'évènement « contre le barrage » et $E$ l'évènement « écologiste ».\n$P(C \\cap E) = P(C) \\times P_C(E) = 0{,}65 \\times 0{,}70 = 0{,}455$.\n$P(\\bar{C} \\cap E) = P(\\bar{C}) \\times P_{\\bar{C}}(E) = 0{,}35 \\times 0{,}20 = 0{,}07$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q4",
            "type": "mcq",
            "prompt": "65 % de la population est contre le barrage et, parmi ces opposants, 70 % sont des écologistes. Quelle est la probabilité qu'une personne soit contre le barrage ET écologiste ?",
            "options": [
              "$0{,}07$",
              "$0{,}35$",
              "$0{,}455$",
              "$0{,}65$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$P(C \\cap E) = P(C) \\times P_C(E) = 0{,}65 \\times 0{,}70 = 0{,}455$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le restaurant de Mariam",
          "stepTheme": "Le restaurant de Mariam",
          "stepBadge": "Le restaurant de Mariam",
          "paragraphText": "• La probabilité d'une affluence de clients est de $0{,}6$. S'il y a affluence, la probabilité d'un bénéfice est de $0{,}7$ ; sinon, elle est de $0{,}4$.\nSoit $A$ « affluence » et $B$ « bénéfice » : $P(A \\cap B) = P(A) \\times P_A(B) = 0{,}6 \\times 0{,}7 = 0{,}42$.\nC'est la probabilité qu'un jour donné, il y ait affluence de clients et que Mariam réalise un bénéfice.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q5",
            "type": "mcq",
            "prompt": "La probabilité d'une affluence est $0{,}6$ et, s'il y a affluence, la probabilité d'un bénéfice est $0{,}7$. Quelle est la probabilité d'avoir affluence ET bénéfice un jour donné ?",
            "options": [
              "$0{,}28$",
              "$0{,}42$",
              "$0{,}6$",
              "$0{,}7$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P(A \\cap B) = P(A) \\times P_A(B) = 0{,}6 \\times 0{,}7 = 0{,}42$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser la condition",
          "stepTheme": "Ne pas inverser la condition",
          "stepBadge": "Ne pas inverser la condition",
          "paragraphText": "• $P_A(B)$ et $P_B(A)$ sont en général différentes : la condition change tout.\nExemple du cours : $P_E(F) = \\frac{4}{5}$ alors que $P_F(E) = \\frac{8}{15}$.\nPiège classique : « la probabilité qu'il y ait eu affluence sachant qu'il y a eu un bénéfice » n'est pas $0{,}42$ mais $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}42}{0{,}58} = \\frac{21}{29}$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q6",
            "type": "mcq",
            "prompt": "Mariam a réalisé un bénéfice un jour donné ($P(B) = 0{,}58$ et $P(A \\cap B) = 0{,}42$). Quelle est la probabilité qu'il y ait eu une affluence de clients ce jour-là ?",
            "options": [
              "$0{,}42$",
              "$\\frac{21}{29}$",
              "$0{,}58$",
              "$\\frac{29}{21}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}42}{0{,}58} = \\frac{21}{29}$ : on divise par la probabilité de la condition, le bénéfice."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q1",
          "type": "mcq",
          "prompt": "Que vaut $P_B(A)$ quand $P(A \\cap B) = 0{,}2$ et $P(B) = 0{,}5$ ?",
          "options": [
            "$0{,}1$",
            "$0{,}2$",
            "$0{,}4$",
            "$0{,}7$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par définition, $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}2}{0{,}5} = 0{,}4$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q2",
          "type": "mcq",
          "prompt": "Avec $p(E) = \\frac{1}{2}$, $p(F) = \\frac{3}{4}$ et $p(E \\cap F) = \\frac{2}{5}$, que vaut $P_E(F)$ ?",
          "options": [
            "$\\frac{2}{5}$",
            "$\\frac{3}{5}$",
            "$\\frac{4}{5}$",
            "$\\frac{8}{15}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$P_E(F) = \\frac{p(E \\cap F)}{p(E)} = \\frac{2/5}{1/2} = \\frac{4}{5}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q3",
          "type": "mcq",
          "prompt": "On a $p(F) = 0{,}75$ et $p_F(I) = 0{,}45$. Que vaut $p(F \\cap I)$ ?",
          "options": [
            "$0{,}3$",
            "$0{,}3375$",
            "$0{,}45$",
            "$0{,}75$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$p(F \\cap I) = p_F(I) \\times p(F) = 0{,}45 \\times 0{,}75 = 0{,}3375$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q4",
          "type": "mcq",
          "prompt": "65 % de la population est contre le barrage et, parmi ces opposants, 70 % sont des écologistes. Quelle est la probabilité qu'une personne soit contre le barrage ET écologiste ?",
          "options": [
            "$0{,}07$",
            "$0{,}35$",
            "$0{,}455$",
            "$0{,}65$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$P(C \\cap E) = P(C) \\times P_C(E) = 0{,}65 \\times 0{,}70 = 0{,}455$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q5",
          "type": "mcq",
          "prompt": "La probabilité d'une affluence est $0{,}6$ et, s'il y a affluence, la probabilité d'un bénéfice est $0{,}7$. Quelle est la probabilité d'avoir affluence ET bénéfice un jour donné ?",
          "options": [
            "$0{,}28$",
            "$0{,}42$",
            "$0{,}6$",
            "$0{,}7$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P(A \\cap B) = P(A) \\times P_A(B) = 0{,}6 \\times 0{,}7 = 0{,}42$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p01_q6",
          "type": "mcq",
          "prompt": "Mariam a réalisé un bénéfice un jour donné ($P(B) = 0{,}58$ et $P(A \\cap B) = 0{,}42$). Quelle est la probabilité qu'il y ait eu une affluence de clients ce jour-là ?",
          "options": [
            "$0{,}42$",
            "$\\frac{21}{29}$",
            "$0{,}58$",
            "$\\frac{29}{21}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}42}{0{,}58} = \\frac{21}{29}$ : on divise par la probabilité de la condition, le bénéfice."
        }
      ]
    },
    {
      "id": "terminale_c_maths_probabilites_l02_probabilite_p02",
      "order": 2,
      "title": "Événements indépendants",
      "summary": "Deux événements sont indépendants quand la réalisation de l'un n'influence pas l'autre : la probabilité de l'intersection est le produit des probabilités.",
      "conceptExplanation": "Deux évènements $A$ et $B$ d'un même univers sont indépendants lorsque $P(A \\cap B) = P(A) \\times P(B)$.\nConséquence : si $A$ et $B$ sont de probabilités non nulles, $A$ et $B$ sont indépendants si et seulement si $P_B(A) = P(A)$ ou $P_A(B) = P(B)$.\nInterprétation : les évènements $A$ et $B$ sont indépendants lorsque la réalisation de l'un n'influence pas la réalisation de l'autre.\nPropriétés : si $A$ et $B$ sont deux événements indépendants, alors $\\bar{A}$ et $B$ sont indépendants ; $A$ et $\\bar{B}$ sont indépendants ; $\\bar{A}$ et $\\bar{B}$ sont indépendants.\nRemarque : ne pas confondre évènements incompatibles et événements indépendants. Deux événements incompatibles de probabilités non nulles ne peuvent pas être indépendants.",
      "keyRule": "Indépendants : P(A ∩ B) = P(A) × P(B). Incompatibles : P(A ∩ B) = 0. Ce n'est pas la même chose.",
      "formulas": [
        {
          "name": "Indépendance",
          "formula": "A \\text{ et } B \\text{ indépendants } \\iff P(A \\cap B) = P(A) \\times P(B)",
          "note": "Équivaut à P_B(A) = P(A) quand les probabilités sont non nulles."
        }
      ],
      "workedExample": {
        "title": "Deux lancers d'une pièce équilibrée",
        "statement": "On lance une pièce de monnaie parfaitement équilibrée. Soit $A$ l'événement « obtenir Face au premier lancer » et $B$ l'événement « obtenir Face au second lancer ». Justifie que $A$ et $B$ sont deux évènements indépendants.",
        "methodSteps": [
          "L'univers est $\\Omega = \\{(P ; P), (P ; F), (F ; P), (F ; F)\\}$, de cardinal $4$.",
          "$A = \\{(F ; P), (F ; F)\\}$ donc $P(A) = \\frac{2}{4} = \\frac{1}{2}$ ; $B = \\{(P ; F), (F ; F)\\}$ donc $P(B) = \\frac{1}{2}$.",
          "$A \\cap B = \\{(F ; F)\\}$ donc $P(A \\cap B) = \\frac{1}{4}$.",
          "Or $P(A) \\times P(B) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} = P(A \\cap B)$."
        ],
        "conclusion": "$A$ et $B$ sont indépendants : le premier lancer n'influence pas le second."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de l'indépendance",
          "stepTheme": "La définition de l'indépendance",
          "stepBadge": "La définition de l'indépendance",
          "paragraphText": "• Deux évènements $A$ et $B$ sont indépendants lorsque $P(A \\cap B) = P(A) \\times P(B)$.\nC'est la définition à connaître : on vérifie l'égalité entre la probabilité de l'intersection et le produit des probabilités.\nInterprétation : la réalisation de l'un n'influence pas la réalisation de l'autre.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q1",
            "type": "mcq",
            "prompt": "On a $P(A) = 0{,}3$, $P(B) = 0{,}4$ et $P(A \\cap B) = 0{,}12$. Les événements $A$ et $B$ sont-ils indépendants ?",
            "options": [
              "Oui, car $0{,}3 \\times 0{,}4 = 0{,}12$",
              "Non, car $0{,}12 \\neq 0{,}7$",
              "Non, car $P(A \\cap B) \\neq 0$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$P(A) \\times P(B) = 0{,}3 \\times 0{,}4 = 0{,}12 = P(A \\cap B)$ : les événements sont indépendants."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Indépendance et probabilité conditionnelle",
          "stepTheme": "Indépendance et probabilité conditionnelle",
          "stepBadge": "Indépendance et probabilité conditionnelle",
          "paragraphText": "• Si $A$ et $B$ sont de probabilités non nulles, ils sont indépendants si et seulement si $P_B(A) = P(A)$ ou $P_A(B) = P(B)$.\nAutrement dit : savoir que $B$ est réalisé ne change pas la probabilité de $A$.\nC'est le test le plus rapide quand on connaît une probabilité conditionnelle.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q2",
            "type": "mcq",
            "prompt": "On sait que $P(A) = 0{,}5$ et $P_B(A) = 0{,}5$. Que peut-on dire de $A$ et $B$ ?",
            "options": [
              "Ils sont incompatibles",
              "Ils sont indépendants",
              "Ils sont égaux",
              "Ils sont contraires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P_B(A) = P(A)$ : la réalisation de $B$ ne change pas la probabilité de $A$, donc $A$ et $B$ sont indépendants."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les contraires restent indépendants",
          "stepTheme": "Les contraires restent indépendants",
          "stepBadge": "Les contraires restent indépendants",
          "paragraphText": "• Si $A$ et $B$ sont indépendants, alors $\\bar{A}$ et $B$ sont indépendants, $A$ et $\\bar{B}$ sont indépendants, et $\\bar{A}$ et $\\bar{B}$ sont indépendants.\nL'indépendance se conserve quand on prend le contraire d'un des deux événements (ou des deux).",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q3",
            "type": "mcq",
            "prompt": "Si $A$ et $B$ sont indépendants, que peut-on dire de $\\bar{A}$ et $B$ ?",
            "options": [
              "Ils sont incompatibles",
              "Ils sont indépendants",
              "Ils sont égaux",
              "Ils sont disjoints"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Si $A$ et $B$ sont indépendants, alors $\\bar{A}$ et $B$ sont aussi indépendants : l'indépendance se conserve en prenant le contraire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Incompatibles n'est pas indépendants",
          "stepTheme": "Incompatibles n'est pas indépendants",
          "stepBadge": "Incompatibles n'est pas indépendants",
          "paragraphText": "• Ne pas confondre évènements incompatibles et événements indépendants.\nDeux événements incompatibles vérifient $P(A \\cap B) = 0$ : ils ne peuvent pas se réaliser ensemble.\nDeux événements incompatibles de probabilités non nulles ne peuvent pas être indépendants : l'indépendance demanderait $P(A \\cap B) = P(A) \\times P(B) > 0$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q4",
            "type": "mcq",
            "prompt": "Deux événements incompatibles de probabilités non nulles peuvent-ils être indépendants ?",
            "options": [
              "Oui, toujours",
              "Oui, parfois",
              "Non, jamais",
              "Seulement si l'un est certain"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Incompatibles signifie $P(A \\cap B) = 0$, alors que l'indépendance demanderait $P(A \\cap B) = P(A) \\times P(B) > 0$ : c'est impossible."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les deux lancers d'une pièce",
          "stepTheme": "Les deux lancers d'une pièce",
          "stepBadge": "Les deux lancers d'une pièce",
          "paragraphText": "• On lance une pièce équilibrée deux fois. $A$ : « Face au premier lancer », $B$ : « Face au second lancer ».\n$P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{2}$ et $P(A \\cap B) = P(\\{(F ; F)\\}) = \\frac{1}{4}$.\nComme $P(A) \\times P(B) = \\frac{1}{4} = P(A \\cap B)$, les deux événements sont indépendants.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q5",
            "type": "mcq",
            "prompt": "On lance deux fois une pièce équilibrée. Que vaut $P(A \\cap B)$ où $A$ est « Face au 1er lancer » et $B$ « Face au 2e lancer » ?",
            "options": [
              "$\\frac{1}{2}$",
              "$\\frac{1}{3}$",
              "$\\frac{1}{4}$",
              "$\\frac{3}{4}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'univers a $4$ issues équiprobables et une seule donne « Face, Face » : $P(A \\cap B) = \\frac{1}{4}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Vérifier l'indépendance",
          "stepTheme": "Vérifier l'indépendance",
          "stepBadge": "Vérifier l'indépendance",
          "paragraphText": "• Pour justifier que deux événements sont indépendants, on calcule $P(A)$, $P(B)$ et $P(A \\cap B)$, puis on compare $P(A \\cap B)$ et $P(A) \\times P(B)$.\nS'ils sont égaux, les événements sont indépendants ; sinon, ils ne le sont pas.\nPour le dé cubique du cours, « obtenir 6 » a pour probabilité $\\frac{1}{6}$ et « ne pas obtenir 6 » a pour probabilité $\\frac{5}{6}$ : ce sont les deux issues d'une épreuve de Bernoulli.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q6",
            "type": "mcq",
            "prompt": "On a $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Les événements $A$ et $B$ sont-ils indépendants ?",
            "options": [
              "Oui",
              "Non, car $0{,}6 \\times 0{,}5 = 0{,}3 \\neq 0{,}2$",
              "Non, car $P(A \\cap B) = 0$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'indépendance demanderait $P(A \\cap B) = P(A) \\times P(B) = 0{,}3$, or $P(A \\cap B) = 0{,}2$ : les événements ne sont pas indépendants."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q1",
          "type": "mcq",
          "prompt": "On a $P(A) = 0{,}3$, $P(B) = 0{,}4$ et $P(A \\cap B) = 0{,}12$. Les événements $A$ et $B$ sont-ils indépendants ?",
          "options": [
            "Oui, car $0{,}3 \\times 0{,}4 = 0{,}12$",
            "Non, car $0{,}12 \\neq 0{,}7$",
            "Non, car $P(A \\cap B) \\neq 0$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$P(A) \\times P(B) = 0{,}3 \\times 0{,}4 = 0{,}12 = P(A \\cap B)$ : les événements sont indépendants."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q2",
          "type": "mcq",
          "prompt": "On sait que $P(A) = 0{,}5$ et $P_B(A) = 0{,}5$. Que peut-on dire de $A$ et $B$ ?",
          "options": [
            "Ils sont incompatibles",
            "Ils sont indépendants",
            "Ils sont égaux",
            "Ils sont contraires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P_B(A) = P(A)$ : la réalisation de $B$ ne change pas la probabilité de $A$, donc $A$ et $B$ sont indépendants."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q3",
          "type": "mcq",
          "prompt": "Si $A$ et $B$ sont indépendants, que peut-on dire de $\\bar{A}$ et $B$ ?",
          "options": [
            "Ils sont incompatibles",
            "Ils sont indépendants",
            "Ils sont égaux",
            "Ils sont disjoints"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Si $A$ et $B$ sont indépendants, alors $\\bar{A}$ et $B$ sont aussi indépendants : l'indépendance se conserve en prenant le contraire."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q4",
          "type": "mcq",
          "prompt": "Deux événements incompatibles de probabilités non nulles peuvent-ils être indépendants ?",
          "options": [
            "Oui, toujours",
            "Oui, parfois",
            "Non, jamais",
            "Seulement si l'un est certain"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Incompatibles signifie $P(A \\cap B) = 0$, alors que l'indépendance demanderait $P(A \\cap B) = P(A) \\times P(B) > 0$ : c'est impossible."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q5",
          "type": "mcq",
          "prompt": "On lance deux fois une pièce équilibrée. Que vaut $P(A \\cap B)$ où $A$ est « Face au 1er lancer » et $B$ « Face au 2e lancer » ?",
          "options": [
            "$\\frac{1}{2}$",
            "$\\frac{1}{3}$",
            "$\\frac{1}{4}$",
            "$\\frac{3}{4}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'univers a $4$ issues équiprobables et une seule donne « Face, Face » : $P(A \\cap B) = \\frac{1}{4}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p02_q6",
          "type": "mcq",
          "prompt": "On a $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Les événements $A$ et $B$ sont-ils indépendants ?",
          "options": [
            "Oui",
            "Non, car $0{,}6 \\times 0{,}5 = 0{,}3 \\neq 0{,}2$",
            "Non, car $P(A \\cap B) = 0$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'indépendance demanderait $P(A \\cap B) = P(A) \\times P(B) = 0{,}3$, or $P(A \\cap B) = 0{,}2$ : les événements ne sont pas indépendants."
        }
      ]
    },
    {
      "id": "terminale_c_maths_probabilites_l02_probabilite_p03",
      "order": 3,
      "title": "Partition et formule des probabilités totales",
      "summary": "Quand les cas se partagent en une partition, la probabilité totale est la somme des probabilités de chaque branche.",
      "conceptExplanation": "Soit $\\Omega$ un ensemble non vide et $B_1, B_2, \\dots, B_n$ des parties de $\\Omega$ avec $n \\geq 2$.\n$B_1, B_2, \\dots, B_n$ forment une partition de $\\Omega$ signifie que les $B_i$ sont deux à deux disjoints et que $B_1 \\cup B_2 \\cup \\dots \\cup B_n = \\Omega$.\nFormule des probabilités totales : si $B_1, \\dots, B_n$ forment une partition de $\\Omega$ et que chaque $P(B_i)$ est non nulle, alors pour tout évènement $A$ : $P(A) = P(A \\cap B_1) + \\dots + P(A \\cap B_n)$, et pour chaque $i$, $P(A \\cap B_i) = P_{B_i}(A) \\times P(B_i)$.\nUn arbre de probabilités (ou arbre pondéré) est un schéma qui résume une expérience aléatoire connaissant des probabilités conditionnelles : chaque branche porte une probabilité, et la probabilité d'un chemin est le produit des probabilités de ses branches.",
      "keyRule": "Pour calculer P(A), on somme sur tous les cas de la partition : P(A) = somme des P(A ∩ Bi).",
      "formulas": [
        {
          "name": "Formule des probabilités totales",
          "formula": "P(A) = \\sum_{i=1}^{n} P(A \\cap B_i) = \\sum_{i=1}^{n} P_{B_i}(A) \\times P(B_i)",
          "note": "Les Bi forment une partition de l'univers, de probabilités non nulles."
        }
      ],
      "workedExample": {
        "title": "La proportion d'élèves de terminale D",
        "statement": "Une enquête révèle que 25 % des élèves aiment jouer au damier sachant qu'ils sont en terminale C, et un tiers des élèves aiment jouer au damier sachant qu'ils sont en terminale D. 3 élèves sur 10 aiment jouer au damier. Quelle est la proportion d'élèves de terminale D ?",
        "methodSteps": [
          "On note $E$ « l'élève est en terminale D », $R$ « l'élève aime jouer au damier », et $x = P(E)$.",
          "On a $P_E(R) = \\frac{1}{3}$, $P_{\\bar{E}}(R) = \\frac{25}{100}$ et $P(R) = \\frac{3}{10}$.",
          "Par la formule des probabilités totales : $\\frac{3}{10} = \\frac{1}{3}x + \\frac{25}{100}(1-x)$.",
          "On résout : $\\frac{3}{10} = \\frac{x}{12} + \\frac{1}{4}$, donc $\\frac{x}{12} = \\frac{1}{20}$ et $x = \\frac{3}{5}$."
        ],
        "conclusion": "La proportion d'élèves de terminale D est de $\\frac{3}{5}$, soit $60$ %."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une partition de l'univers",
          "stepTheme": "Une partition de l'univers",
          "stepBadge": "Une partition de l'univers",
          "paragraphText": "• Des parties $B_1, \\dots, B_n$ forment une partition de $\\Omega$ si elles sont deux à deux disjointes et si leur réunion est $\\Omega$ tout entier.\nExemple du cours : $A = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8\\}$ et $B = \\{1 ; 2\\}$, $C = \\{3 ; 4 ; 5\\}$, $D = \\{6 ; 7\\}$, $E = \\{8\\}$ forment une partition de $A$.\nUne partition, c'est un découpage sans chevauchement et sans oubli.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q1",
            "type": "mcq",
            "prompt": "Quand dit-on que $B_1, B_2, \\dots, B_n$ forment une partition de $\\Omega$ ?",
            "options": [
              "Quand ils sont tous égaux",
              "Quand ils sont deux à deux disjoints et leur réunion est $\\Omega$",
              "Quand ils sont tous non vides",
              "Quand ils ont le même cardinal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une partition est un découpage de $\\Omega$ en parties deux à deux disjointes dont la réunion est $\\Omega$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule des probabilités totales",
          "stepTheme": "La formule des probabilités totales",
          "stepBadge": "La formule des probabilités totales",
          "paragraphText": "• Si $B_1, \\dots, B_n$ forment une partition de $\\Omega$ (probabilités non nulles), alors pour tout évènement $A$ : $P(A) = P(A \\cap B_1) + \\dots + P(A \\cap B_n)$.\nEt chaque terme se calcule par $P(A \\cap B_i) = P_{B_i}(A) \\times P(B_i)$.\nOn somme sur tous les cas possibles : c'est la loi des « cas disjoints ».",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q2",
            "type": "mcq",
            "prompt": "Que vaut $P(A)$ avec une partition $B_1, B_2$ de $\\Omega$ ?",
            "options": [
              "$P(A \\cap B_1) \\times P(A \\cap B_2)$",
              "$P(A \\cap B_1) + P(A \\cap B_2)$",
              "$P_{B_1}(A) - P_{B_2}(A)$",
              "$P(A \\cap B_1)$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La formule des probabilités totales donne $P(A) = P(A \\cap B_1) + P(A \\cap B_2)$ : on somme sur les cas de la partition."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "L'arbre pondéré",
          "stepTheme": "L'arbre pondéré",
          "stepBadge": "L'arbre pondéré",
          "paragraphText": "• Un arbre de probabilités résume une expérience : chaque branche porte une probabilité conditionnelle, et la probabilité d'un chemin est le produit des probabilités de ses branches.\nExemple du cours : la marque A représente 64 % des ordinateurs vendus, la marque N 36 % ; 30 % des ordinateurs de la marque A sont soldés et 60 % de la marque N sont soldés.\nLa probabilité d'obtenir un ordinateur soldé est $P(S) = 0{,}64 \\times 0{,}30 + 0{,}36 \\times 0{,}60 = 0{,}192 + 0{,}216 = 0{,}408$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q3",
            "type": "mcq",
            "prompt": "La marque A représente 64 % des ventes et 30 % de ses ordinateurs sont soldés ; la marque N représente 36 % des ventes et 60 % de ses ordinateurs sont soldés. Quelle est la probabilité qu'un ordinateur soit soldé ?",
            "options": [
              "$0{,}192$",
              "$0{,}216$",
              "$0{,}408$",
              "$0{,}90$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$P(S) = 0{,}64 \\times 0{,}30 + 0{,}36 \\times 0{,}60 = 0{,}192 + 0{,}216 = 0{,}408$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le sondage sur le barrage (suite)",
          "stepTheme": "Le sondage sur le barrage (suite)",
          "stepBadge": "Le sondage sur le barrage (suite)",
          "paragraphText": "• On a $P(C \\cap E) = 0{,}455$ (contre le barrage et écologiste) et $P(\\bar{C} \\cap E) = 0{,}07$ (non opposé et écologiste).\nPar la formule des probabilités totales, $P(E) = P(C \\cap E) + P(\\bar{C} \\cap E) = 0{,}455 + 0{,}07 = 0{,}525$.\nLa probabilité qu'une personne interrogée soit écologiste est donc de $0{,}525$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q4",
            "type": "mcq",
            "prompt": "Avec $P(C \\cap E) = 0{,}455$ et $P(\\bar{C} \\cap E) = 0{,}07$, que vaut $P(E)$ (la personne est écologiste) ?",
            "options": [
              "$0{,}385$",
              "$0{,}455$",
              "$0{,}525$",
              "$0{,}65$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par la formule des probabilités totales : $P(E) = 0{,}455 + 0{,}07 = 0{,}525$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le bénéfice de Mariam",
          "stepTheme": "Le bénéfice de Mariam",
          "stepBadge": "Le bénéfice de Mariam",
          "paragraphText": "• Affluence avec probabilité $0{,}6$ ; bénéfice avec probabilité $0{,}7$ s'il y a affluence, $0{,}4$ sinon.\n$P(B) = P(A \\cap B) + P(\\bar{A} \\cap B) = 0{,}6 \\times 0{,}7 + 0{,}4 \\times 0{,}4 = 0{,}42 + 0{,}16 = 0{,}58$.\nLa probabilité que Mariam réalise un bénéfice un jour donné est de $0{,}58$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q5",
            "type": "mcq",
            "prompt": "Avec une affluence de probabilité $0{,}6$ (bénéfice alors de probabilité $0{,}7$) et sans affluence (bénéfice de probabilité $0{,}4$), que vaut $P(B)$ ?",
            "options": [
              "$0{,}42$",
              "$0{,}58$",
              "$0{,}7$",
              "$0{,}16$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P(B) = 0{,}6 \\times 0{,}7 + 0{,}4 \\times 0{,}4 = 0{,}42 + 0{,}16 = 0{,}58$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La situation complexe : retrouver la proportion",
          "stepTheme": "La situation complexe : retrouver la proportion",
          "stepBadge": "La situation complexe : retrouver la proportion",
          "paragraphText": "• 25 % des élèves de terminale C aiment le damier, un tiers de ceux de terminale D aussi, et 3 élèves sur 10 aiment le damier.\nEn posant $x = P(E)$ (l'élève est en terminale D), la formule des probabilités totales donne $\\frac{3}{10} = \\frac{1}{3}x + \\frac{25}{100}(1-x)$.\nOn trouve $x = \\frac{3}{5}$ : la proportion d'élèves de terminale D est de $60$ %.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q6",
            "type": "mcq",
            "prompt": "D'après la situation complexe, quelle est la proportion d'élèves de terminale D ?",
            "options": [
              "$\\frac{1}{3}$",
              "$\\frac{3}{10}$",
              "$\\frac{3}{5}$",
              "$\\frac{2}{3}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La formule des probabilités totales donne $\\frac{3}{10} = \\frac{x}{12} + \\frac{1}{4}$, d'où $x = \\frac{3}{5}$, soit $60$ %."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q1",
          "type": "mcq",
          "prompt": "Quand dit-on que $B_1, B_2, \\dots, B_n$ forment une partition de $\\Omega$ ?",
          "options": [
            "Quand ils sont tous égaux",
            "Quand ils sont deux à deux disjoints et leur réunion est $\\Omega$",
            "Quand ils sont tous non vides",
            "Quand ils ont le même cardinal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une partition est un découpage de $\\Omega$ en parties deux à deux disjointes dont la réunion est $\\Omega$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q2",
          "type": "mcq",
          "prompt": "Que vaut $P(A)$ avec une partition $B_1, B_2$ de $\\Omega$ ?",
          "options": [
            "$P(A \\cap B_1) \\times P(A \\cap B_2)$",
            "$P(A \\cap B_1) + P(A \\cap B_2)$",
            "$P_{B_1}(A) - P_{B_2}(A)$",
            "$P(A \\cap B_1)$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La formule des probabilités totales donne $P(A) = P(A \\cap B_1) + P(A \\cap B_2)$ : on somme sur les cas de la partition."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q3",
          "type": "mcq",
          "prompt": "La marque A représente 64 % des ventes et 30 % de ses ordinateurs sont soldés ; la marque N représente 36 % des ventes et 60 % de ses ordinateurs sont soldés. Quelle est la probabilité qu'un ordinateur soit soldé ?",
          "options": [
            "$0{,}192$",
            "$0{,}216$",
            "$0{,}408$",
            "$0{,}90$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$P(S) = 0{,}64 \\times 0{,}30 + 0{,}36 \\times 0{,}60 = 0{,}192 + 0{,}216 = 0{,}408$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q4",
          "type": "mcq",
          "prompt": "Avec $P(C \\cap E) = 0{,}455$ et $P(\\bar{C} \\cap E) = 0{,}07$, que vaut $P(E)$ (la personne est écologiste) ?",
          "options": [
            "$0{,}385$",
            "$0{,}455$",
            "$0{,}525$",
            "$0{,}65$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par la formule des probabilités totales : $P(E) = 0{,}455 + 0{,}07 = 0{,}525$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q5",
          "type": "mcq",
          "prompt": "Avec une affluence de probabilité $0{,}6$ (bénéfice alors de probabilité $0{,}7$) et sans affluence (bénéfice de probabilité $0{,}4$), que vaut $P(B)$ ?",
          "options": [
            "$0{,}42$",
            "$0{,}58$",
            "$0{,}7$",
            "$0{,}16$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P(B) = 0{,}6 \\times 0{,}7 + 0{,}4 \\times 0{,}4 = 0{,}42 + 0{,}16 = 0{,}58$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p03_q6",
          "type": "mcq",
          "prompt": "D'après la situation complexe, quelle est la proportion d'élèves de terminale D ?",
          "options": [
            "$\\frac{1}{3}$",
            "$\\frac{3}{10}$",
            "$\\frac{3}{5}$",
            "$\\frac{2}{3}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La formule des probabilités totales donne $\\frac{3}{10} = \\frac{x}{12} + \\frac{1}{4}$, d'où $x = \\frac{3}{5}$, soit $60$ %."
        }
      ]
    },
    {
      "id": "terminale_c_maths_probabilites_l02_probabilite_p04",
      "order": 4,
      "title": "Variable aléatoire et loi de probabilité",
      "summary": "Une variable aléatoire associe un nombre à chaque issue ; sa loi donne la probabilité de chaque valeur, et la somme vaut 1.",
      "conceptExplanation": "On considère une expérience aléatoire d'univers $\\Omega$ fini.\n• On appelle variable aléatoire toute application $X$ de $\\Omega$ dans $\\mathbb{R}$.\n• Soit $X$ une variable aléatoire qui, à chaque éventualité $e_i$ de $\\Omega$, associe un nombre réel $x_i$. L'ensemble $\\{x_1 ; x_2 ; \\dots ; x_n\\}$ se note $X(\\Omega)$ et s'appelle l'ensemble des valeurs prises par $X$.\n• La loi de probabilité de $X$ est l'application qui, à toute valeur $x_i$ prise par $X$, associe $P(X = x_i)$.\nOn représente une loi de probabilité par un tableau : en première ligne les valeurs $x_i$ rangées dans l'ordre croissant, en seconde ligne les probabilités $p_i = P(X = x_i)$.\nRemarque : $p_1 + p_2 + \\dots + p_n = 1$ : la somme des probabilités d'une loi vaut toujours $1$.",
      "keyRule": "Une loi de probabilité est un tableau : valeurs en ordre croissant, probabilités en dessous, somme égale à 1.",
      "formulas": [
        {
          "name": "Loi de probabilité",
          "formula": "X(\\Omega) = \\{x_1 {;} \\dots {;} x_n\\},\\ P(X = x_i) = p_i,\\ p_1 + \\dots + p_n = 1",
          "note": "Les valeurs xi sont rangées dans l'ordre croissant."
        }
      ],
      "workedExample": {
        "title": "Tirer 3 boules d'une urne (2 blanches, 4 rouges)",
        "statement": "Une urne contient six boules indiscernables au toucher dont deux sont blanches et quatre sont rouges. On tire simultanément trois boules et on note $X$ le nombre de boules blanches tirées. Détermine les valeurs prises par $X$ et établis sa loi de probabilité.",
        "methodSteps": [
          "On peut tirer 0, 1 ou 2 boules blanches : $X(\\Omega) = \\{0 ; 1 ; 2\\}$.",
          "L'univers a $C_6^3 = 20$ tirages possibles.",
          "$P(X = 0) = \\frac{C_4^3}{20} = \\frac{4}{20} = \\frac{1}{5}$ (trois boules rouges).",
          "$P(X = 1) = \\frac{C_2^1 \\times C_4^2}{20} = \\frac{12}{20} = \\frac{3}{5}$ et $P(X = 2) = \\frac{C_2^2 \\times C_4^1}{20} = \\frac{4}{20} = \\frac{1}{5}$.",
          "Vérification : $\\frac{1}{5} + \\frac{3}{5} + \\frac{1}{5} = 1$."
        ],
        "conclusion": "La loi de $X$ est : $P(X = 0) = \\frac{1}{5}$, $P(X = 1) = \\frac{3}{5}$, $P(X = 2) = \\frac{1}{5}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Qu'est-ce qu'une variable aléatoire ?",
          "stepTheme": "Qu'est-ce qu'une variable aléatoire ?",
          "stepBadge": "Qu'est-ce qu'une variable aléatoire ?",
          "paragraphText": "• Une variable aléatoire est une application $X$ de l'univers $\\Omega$ dans $\\mathbb{R}$ : à chaque issue, elle associe un nombre réel.\nL'ensemble des valeurs prises par $X$ se note $X(\\Omega)$.\nExemple : on tire 3 boules d'une urne (2 blanches, 4 rouges) et $X$ compte les boules blanches : $X(\\Omega) = \\{0 ; 1 ; 2\\}$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q1",
            "type": "mcq",
            "prompt": "On tire 3 boules d'une urne contenant 2 boules blanches et 4 rouges, et $X$ compte les boules blanches. Que vaut $X(\\Omega)$ ?",
            "options": [
              "$\\{0 ; 1\\}$",
              "$\\{0 ; 1 ; 2\\}$",
              "$\\{1 ; 2 ; 3\\}$",
              "$\\{0 ; 1 ; 2 ; 3\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On peut tirer 0, 1 ou 2 boules blanches (il n'y en a que 2 dans l'urne) : $X(\\Omega) = \\{0 ; 1 ; 2\\}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La loi de probabilité",
          "stepTheme": "La loi de probabilité",
          "stepBadge": "La loi de probabilité",
          "paragraphText": "• La loi de probabilité de $X$ associe à chaque valeur $x_i$ la probabilité $P(X = x_i)$.\nOn la présente en tableau : valeurs $x_i$ en ordre croissant en première ligne, probabilités $p_i$ en seconde ligne.\nLa somme des probabilités vaut toujours $1$ : c'est un contrôle indispensable.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut la somme des probabilités d'une loi de probabilité ?",
            "options": [
              "$0$",
              "$\\frac{1}{2}$",
              "$1$",
              "Cela dépend de la loi"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme des probabilités d'une loi de probabilité vaut toujours $1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Compter avec les combinaisons",
          "stepTheme": "Compter avec les combinaisons",
          "stepBadge": "Compter avec les combinaisons",
          "paragraphText": "• Pour un tirage simultané, on compte avec les combinaisons $C_n^k$.\nUrne 2 blanches / 4 rouges, tirage de 3 boules : $\\text{Card}(\\Omega) = C_6^3 = 20$.\n$P(X = 0) = \\frac{C_4^3}{20} = \\frac{1}{5}$ ; $P(X = 1) = \\frac{C_2^1 \\times C_4^2}{20} = \\frac{3}{5}$ ; $P(X = 2) = \\frac{C_2^2 \\times C_4^1}{20} = \\frac{1}{5}$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q3",
            "type": "mcq",
            "prompt": "Urne de 2 boules blanches et 4 rouges, tirage simultané de 3 boules. Que vaut $P(X = 1)$ où $X$ est le nombre de boules blanches ?",
            "options": [
              "$\\frac{1}{5}$",
              "$\\frac{1}{4}$",
              "$\\frac{3}{5}$",
              "$\\frac{4}{5}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$P(X = 1) = \\frac{C_2^1 \\times C_4^2}{C_6^3} = \\frac{2 \\times 6}{20} = \\frac{12}{20} = \\frac{3}{5}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une urne de 3 boules blanches et 5 noires",
          "stepTheme": "Une urne de 3 boules blanches et 5 noires",
          "stepBadge": "Une urne de 3 boules blanches et 5 noires",
          "paragraphText": "• On tire simultanément 3 boules d'une urne (3 blanches, 5 noires). Une boule blanche rapporte $+1$ point, une noire fait perdre $1$ point. $X$ est le nombre de points marqués.\nLes tirages possibles sont BBB, BBN, BNN, NNN, soit $X \\in \\{3 ; 1 ; -1 ; -3\\}$.\n$P(X = -3) = \\frac{10}{56}$, $P(X = -1) = \\frac{15}{56}$, $P(X = 1) = \\frac{30}{56}$, $P(X = 3) = \\frac{1}{56}$ : la somme vaut bien $1$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q4",
            "type": "mcq",
            "prompt": "Urne de 3 boules blanches et 5 noires, tirage simultané de 3 boules. Une blanche rapporte $+1$, une noire $-1$. Quelles sont les valeurs prises par $X$ (points marqués) ?",
            "options": [
              "$\\{-3 ; -1 ; 1 ; 3\\}$",
              "$\\{0 ; 1 ; 2 ; 3\\}$",
              "$\\{-3 ; 0 ; 3\\}$",
              "$\\{1 ; 2 ; 3\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "BBB donne $+3$, BBN $+1$, BNN $-1$ et NNN $-3$ : $X(\\Omega) = \\{-3 ; -1 ; 1 ; 3\\}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'exercice du disque : une incohérence du manuel",
          "stepTheme": "L'exercice du disque : une incohérence du manuel",
          "stepBadge": "L'exercice du disque : une incohérence du manuel",
          "paragraphText": "• Exercice du disque : dix morceaux, durées 200 s (×2), 240 s (×3), 260 s (×1), 280 s (×4). L'énoncé dit : « Tous les morceaux ont la même probabilité d'être sélectionnés ».\nDonc chaque morceau a pour probabilité $\\frac{1}{10}$ : $P(\\text{durée } 240 \\text{ s}) = \\frac{3}{10}$ et $P(\\text{durée } > 220 \\text{ s}) = \\frac{8}{10} = \\frac{4}{5}$.\nAttention : le corrigé du manuel calcule $\\frac{280}{2500}$, $\\frac{240}{2500}$… comme si la probabilité était proportionnelle à la durée — ce qui contredit l'énoncé. On suit l'énoncé : sélection uniforme.",
          "konanTip": "Le corrigé du manuel pondère par la durée (280/2500…), mais l'énoncé dit que tous les morceaux ont la même probabilité : on retient la sélection uniforme (1/10 par morceau).",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q5",
            "type": "mcq",
            "prompt": "Dix morceaux, sélection uniforme. Trois morceaux durent 240 s. Quelle est la probabilité de sélectionner un morceau de 240 s ?",
            "options": [
              "$\\frac{3}{10}$",
              "$\\frac{36}{125}$",
              "$\\frac{1}{10}$",
              "$\\frac{240}{2500}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La sélection est uniforme : chaque morceau a pour probabilité $\\frac{1}{10}$, et 3 morceaux durent 240 s, donc $P = \\frac{3}{10}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le temps d'écoute moyen",
          "stepTheme": "Le temps d'écoute moyen",
          "stepBadge": "Le temps d'écoute moyen",
          "paragraphText": "• Pour le disque, $X$ est le temps d'écoute du morceau sélectionné : $X$ prend les valeurs $200$, $240$, $260$, $280$ avec les probabilités $\\frac{2}{10}$, $\\frac{3}{10}$, $\\frac{1}{10}$, $\\frac{4}{10}$.\nL'espérance (voir point suivant) vaut $E(X) = 200 \\times \\frac{2}{10} + 240 \\times \\frac{3}{10} + 260 \\times \\frac{1}{10} + 280 \\times \\frac{4}{10} = 250$ secondes.\nLe temps d'écoute moyen d'un morceau sélectionné au hasard est donc de $250$ secondes.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q6",
            "type": "mcq",
            "prompt": "Pour le disque (durées 200 s ×2, 240 s ×3, 260 s ×1, 280 s ×4, sélection uniforme), que vaut l'espérance du temps d'écoute ?",
            "options": [
              "$240$ s",
              "$250$ s",
              "$253{,}6$ s",
              "$260$ s"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$E(X) = \\frac{200 \\times 2 + 240 \\times 3 + 260 \\times 1 + 280 \\times 4}{10} = \\frac{2500}{10} = 250$ secondes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q1",
          "type": "mcq",
          "prompt": "On tire 3 boules d'une urne contenant 2 boules blanches et 4 rouges, et $X$ compte les boules blanches. Que vaut $X(\\Omega)$ ?",
          "options": [
            "$\\{0 ; 1\\}$",
            "$\\{0 ; 1 ; 2\\}$",
            "$\\{1 ; 2 ; 3\\}$",
            "$\\{0 ; 1 ; 2 ; 3\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On peut tirer 0, 1 ou 2 boules blanches (il n'y en a que 2 dans l'urne) : $X(\\Omega) = \\{0 ; 1 ; 2\\}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut la somme des probabilités d'une loi de probabilité ?",
          "options": [
            "$0$",
            "$\\frac{1}{2}$",
            "$1$",
            "Cela dépend de la loi"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme des probabilités d'une loi de probabilité vaut toujours $1$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q3",
          "type": "mcq",
          "prompt": "Urne de 2 boules blanches et 4 rouges, tirage simultané de 3 boules. Que vaut $P(X = 1)$ où $X$ est le nombre de boules blanches ?",
          "options": [
            "$\\frac{1}{5}$",
            "$\\frac{1}{4}$",
            "$\\frac{3}{5}$",
            "$\\frac{4}{5}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$P(X = 1) = \\frac{C_2^1 \\times C_4^2}{C_6^3} = \\frac{2 \\times 6}{20} = \\frac{12}{20} = \\frac{3}{5}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q4",
          "type": "mcq",
          "prompt": "Urne de 3 boules blanches et 5 noires, tirage simultané de 3 boules. Une blanche rapporte $+1$, une noire $-1$. Quelles sont les valeurs prises par $X$ (points marqués) ?",
          "options": [
            "$\\{-3 ; -1 ; 1 ; 3\\}$",
            "$\\{0 ; 1 ; 2 ; 3\\}$",
            "$\\{-3 ; 0 ; 3\\}$",
            "$\\{1 ; 2 ; 3\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "BBB donne $+3$, BBN $+1$, BNN $-1$ et NNN $-3$ : $X(\\Omega) = \\{-3 ; -1 ; 1 ; 3\\}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q5",
          "type": "mcq",
          "prompt": "Dix morceaux, sélection uniforme. Trois morceaux durent 240 s. Quelle est la probabilité de sélectionner un morceau de 240 s ?",
          "options": [
            "$\\frac{3}{10}$",
            "$\\frac{36}{125}$",
            "$\\frac{1}{10}$",
            "$\\frac{240}{2500}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sélection est uniforme : chaque morceau a pour probabilité $\\frac{1}{10}$, et 3 morceaux durent 240 s, donc $P = \\frac{3}{10}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p04_q6",
          "type": "mcq",
          "prompt": "Pour le disque (durées 200 s ×2, 240 s ×3, 260 s ×1, 280 s ×4, sélection uniforme), que vaut l'espérance du temps d'écoute ?",
          "options": [
            "$240$ s",
            "$250$ s",
            "$253{,}6$ s",
            "$260$ s"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$E(X) = \\frac{200 \\times 2 + 240 \\times 3 + 260 \\times 1 + 280 \\times 4}{10} = \\frac{2500}{10} = 250$ secondes."
        }
      ]
    },
    {
      "id": "terminale_c_maths_probabilites_l02_probabilite_p05",
      "order": 5,
      "title": "Espérance, variance et écart type",
      "summary": "L'espérance est la valeur moyenne, la variance mesure la dispersion autour de cette moyenne, l'écart type est sa racine carrée.",
      "conceptExplanation": "Soit $X$ une variable aléatoire prenant $n$ valeurs $x_1 ; x_2 ; \\dots ; x_n$ avec les probabilités respectives $p_1 ; p_2 ; \\dots ; p_n$.\n• On appelle espérance mathématique ou moyenne de $X$ le nombre réel noté $E(X)$ tel que $E(X) = \\sum_{i=1}^{n} x_i p_i = x_1 p_1 + x_2 p_2 + \\dots + x_n p_n$.\n• On appelle variance de $X$ le nombre réel positif noté $V(X)$ tel que $V(X) = \\sum_{i=1}^{n} (x_i - E(X))^2 p_i$.\n• On appelle écart type de $X$ le nombre réel noté $\\sigma(X)$ tel que $\\sigma(X) = \\sqrt{V(X)}$.\nRemarque : la variance peut aussi se calculer par $V(X) = E(X^2) - [E(X)]^2$.\nInterprétation en termes de jeu : soit $E(X)$ l'espérance du gain algébrique (différence entre la somme perçue et la mise). $E(X)$ est le gain moyen d'un joueur. Si $E(X) > 0$, le jeu est avantageux pour le joueur ; si $E(X) < 0$, le jeu est désavantageux ; si $E(X) = 0$, le jeu est équitable.",
      "keyRule": "Espérance = moyenne pondérée. Variance = moyenne des carrés des écarts (ou E(X²) − E(X)²). Écart type = racine de la variance.",
      "formulas": [
        {
          "name": "Espérance mathématique",
          "formula": "E(X) = \\sum_{i=1}^{n} x_i p_i",
          "note": "C'est la valeur moyenne de X."
        },
        {
          "name": "Variance",
          "formula": "V(X) = \\sum_{i=1}^{n} (x_i - E(X))^2 p_i = E(X^2) - [E(X)]^2",
          "note": "La variance est toujours positive ou nulle."
        },
        {
          "name": "Écart type",
          "formula": "\\sigma(X) = \\sqrt{V(X)}",
          "note": "L'écart type a la même unité que X."
        }
      ],
      "workedExample": {
        "title": "Espérance et écart type d'un jeu de pile ou face",
        "statement": "Un joueur lance trois fois de suite une pièce équilibrée. Il gagne 600 F s'il obtient 3 fois « Face », 300 F s'il obtient exactement 2 fois « Face », 100 F s'il obtient exactement 1 fois « Face », et il perd 1000 F s'il n'obtient que des « Pile ». Soit $X$ le gain du joueur. Calcule $E(X)$ et dis si le jeu est favorable au joueur.",
        "methodSteps": [
          "La loi de $X$ est : $P(X = -1000) = \\frac{1}{8}$, $P(X = 100) = \\frac{3}{8}$, $P(X = 300) = \\frac{3}{8}$, $P(X = 600) = \\frac{1}{8}$.",
          "$E(X) = (-1000) \\times \\frac{1}{8} + 100 \\times \\frac{3}{8} + 300 \\times \\frac{3}{8} + 600 \\times \\frac{1}{8} = \\frac{800}{8} = 100$.",
          "$E(X) = 100 > 0$ : le jeu est favorable au joueur, qui gagne en moyenne $100$ F par partie."
        ],
        "conclusion": "Le gain moyen est de $100$ F : le jeu est avantageux pour le joueur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'espérance mathématique",
          "stepTheme": "L'espérance mathématique",
          "stepBadge": "L'espérance mathématique",
          "paragraphText": "• L'espérance mathématique (ou moyenne) de $X$ est $E(X) = x_1 p_1 + x_2 p_2 + \\dots + x_n p_n$.\nC'est la valeur moyenne que prend $X$ si on répète l'expérience un grand nombre de fois.\nExemple du cours : pour la loi $-1000, 100, 300, 600$ avec les probabilités $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$, on a $E(X) = 100$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q1",
            "type": "mcq",
            "prompt": "La loi de $X$ est : $P(X = -1000) = \\frac{1}{8}$, $P(X = 100) = \\frac{3}{8}$, $P(X = 300) = \\frac{3}{8}$, $P(X = 600) = \\frac{1}{8}$. Que vaut $E(X)$ ?",
            "options": [
              "$0$",
              "$100$",
              "$300$",
              "$600$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$E(X) = \\frac{-1000 + 300 + 900 + 600}{8} = \\frac{800}{8} = 100$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La variance et l'écart type",
          "stepTheme": "La variance et l'écart type",
          "stepBadge": "La variance et l'écart type",
          "paragraphText": "• La variance est $V(X) = \\sum (x_i - E(X))^2 p_i$, ou plus vite $V(X) = E(X^2) - [E(X)]^2$.\nL'écart type est $\\sigma(X) = \\sqrt{V(X)}$ : il mesure la dispersion des valeurs autour de la moyenne.\nPour la loi $-1000, 100, 300, 600$ (probabilités $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$) : $E(X^2) = 207500$, donc $V(X) = 207500 - 100^2 = 197500$ et $\\sigma(X) = \\sqrt{197500} \\approx 444{,}4$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q2",
            "type": "mcq",
            "prompt": "Pour la loi $-1000, 100, 300, 600$ (probabilités $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$), on a $E(X) = 100$ et $E(X^2) = 207500$. Que vaut $V(X)$ ?",
            "options": [
              "$197500$",
              "$207500$",
              "$10000$",
              "$444$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$V(X) = E(X^2) - [E(X)]^2 = 207500 - 10000 = 197500$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Jeu favorable, défavorable ou équitable",
          "stepTheme": "Jeu favorable, défavorable ou équitable",
          "stepBadge": "Jeu favorable, défavorable ou équitable",
          "paragraphText": "• Quand $X$ est le gain algébrique d'un joueur, $E(X)$ est son gain moyen.\nSi $E(X) > 0$, le jeu est avantageux pour le joueur ; si $E(X) < 0$, il est désavantageux ; si $E(X) = 0$, le jeu est équitable.\nExemple : avec $E(X) = 100 > 0$, le jeu de pile ou face du cours est favorable au joueur.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q3",
            "type": "mcq",
            "prompt": "Le gain algébrique $X$ d'un joueur a pour espérance $E(X) = -50$. Que peut-on dire du jeu ?",
            "options": [
              "Il est équitable",
              "Il est avantageux pour le joueur",
              "Il est désavantageux pour le joueur",
              "On ne peut rien dire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$E(X) < 0$ : le joueur perd en moyenne $50$ F par partie, le jeu est désavantageux pour lui."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Rendre un jeu équitable",
          "stepTheme": "Rendre un jeu équitable",
          "stepBadge": "Rendre un jeu équitable",
          "paragraphText": "• Pour rendre un jeu équitable, on ajuste un gain (ou une mise) pour que $E(X) = 0$.\nExemple du cours : si le joueur paie $S$ francs quand il n'obtient que des « Pile », alors $E(X) = \\frac{1800 - S}{8}$.\nLe jeu est équitable quand $E(X) = 0$, soit $S = 1800$ : le joueur doit payer $1800$ F quand il n'obtient que des « Pile ».",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q4",
            "type": "mcq",
            "prompt": "Dans le jeu de pile ou face, si le joueur paie $S$ francs quand il n'obtient que des « Pile », on a $E(X) = \\frac{1800 - S}{8}$. Quelle valeur de $S$ rend le jeu équitable ?",
            "options": [
              "$1000$",
              "$1800$",
              "$600$",
              "$300$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le jeu est équitable quand $E(X) = 0$, soit $1800 - S = 0$, donc $S = 1800$ francs."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Gagner strictement moins de 300 francs",
          "stepTheme": "Gagner strictement moins de 300 francs",
          "stepBadge": "Gagner strictement moins de 300 francs",
          "paragraphText": "• Pour le jeu de pile ou face, la loi de $X$ est : $P(X = -1000) = \\frac{1}{8}$, $P(X = 100) = \\frac{3}{8}$, $P(X = 300) = \\frac{3}{8}$, $P(X = 600) = \\frac{1}{8}$.\n« Gagner strictement moins de 300 F » signifie $X = -1000$ ou $X = 100$.\nDonc $P(X < 300) = \\frac{1}{8} + \\frac{3}{8} = \\frac{1}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q5",
            "type": "mcq",
            "prompt": "Dans le jeu de pile ou face (loi : $-1000$ : $\\frac{1}{8}$, $100$ : $\\frac{3}{8}$, $300$ : $\\frac{3}{8}$, $600$ : $\\frac{1}{8}$), quelle est la probabilité de gagner strictement moins de 300 F ?",
            "options": [
              "$\\frac{1}{8}$",
              "$\\frac{3}{8}$",
              "$\\frac{1}{2}$",
              "$\\frac{7}{8}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Gagner moins de 300 F, c'est $X = -1000$ ou $X = 100$ : $\\frac{1}{8} + \\frac{3}{8} = \\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'espérance de l'urne 2 blanches / 4 rouges",
          "stepTheme": "L'espérance de l'urne 2 blanches / 4 rouges",
          "stepBadge": "L'espérance de l'urne 2 blanches / 4 rouges",
          "paragraphText": "• Pour l'urne (2 blanches, 4 rouges), $X$ = nombre de boules blanches parmi 3 tirées : $P(X = 0) = \\frac{1}{5}$, $P(X = 1) = \\frac{3}{5}$, $P(X = 2) = \\frac{1}{5}$.\n$E(X) = 0 \\times \\frac{1}{5} + 1 \\times \\frac{3}{5} + 2 \\times \\frac{1}{5} = 1$.\nEn moyenne, on tire une boule blanche par tirage de 3 boules.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q6",
            "type": "mcq",
            "prompt": "Urne de 2 boules blanches et 4 rouges, tirage de 3 boules. $X$ = nombre de boules blanches. Que vaut $E(X)$ ?",
            "options": [
              "$0$",
              "$1$",
              "$\\frac{3}{5}$",
              "$2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$E(X) = 0 \\times \\frac{1}{5} + 1 \\times \\frac{3}{5} + 2 \\times \\frac{1}{5} = \\frac{3}{5} + \\frac{2}{5} = 1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q1",
          "type": "mcq",
          "prompt": "La loi de $X$ est : $P(X = -1000) = \\frac{1}{8}$, $P(X = 100) = \\frac{3}{8}$, $P(X = 300) = \\frac{3}{8}$, $P(X = 600) = \\frac{1}{8}$. Que vaut $E(X)$ ?",
          "options": [
            "$0$",
            "$100$",
            "$300$",
            "$600$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$E(X) = \\frac{-1000 + 300 + 900 + 600}{8} = \\frac{800}{8} = 100$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q2",
          "type": "mcq",
          "prompt": "Pour la loi $-1000, 100, 300, 600$ (probabilités $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$), on a $E(X) = 100$ et $E(X^2) = 207500$. Que vaut $V(X)$ ?",
          "options": [
            "$197500$",
            "$207500$",
            "$10000$",
            "$444$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$V(X) = E(X^2) - [E(X)]^2 = 207500 - 10000 = 197500$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q3",
          "type": "mcq",
          "prompt": "Le gain algébrique $X$ d'un joueur a pour espérance $E(X) = -50$. Que peut-on dire du jeu ?",
          "options": [
            "Il est équitable",
            "Il est avantageux pour le joueur",
            "Il est désavantageux pour le joueur",
            "On ne peut rien dire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$E(X) < 0$ : le joueur perd en moyenne $50$ F par partie, le jeu est désavantageux pour lui."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q4",
          "type": "mcq",
          "prompt": "Dans le jeu de pile ou face, si le joueur paie $S$ francs quand il n'obtient que des « Pile », on a $E(X) = \\frac{1800 - S}{8}$. Quelle valeur de $S$ rend le jeu équitable ?",
          "options": [
            "$1000$",
            "$1800$",
            "$600$",
            "$300$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le jeu est équitable quand $E(X) = 0$, soit $1800 - S = 0$, donc $S = 1800$ francs."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q5",
          "type": "mcq",
          "prompt": "Dans le jeu de pile ou face (loi : $-1000$ : $\\frac{1}{8}$, $100$ : $\\frac{3}{8}$, $300$ : $\\frac{3}{8}$, $600$ : $\\frac{1}{8}$), quelle est la probabilité de gagner strictement moins de 300 F ?",
          "options": [
            "$\\frac{1}{8}$",
            "$\\frac{3}{8}$",
            "$\\frac{1}{2}$",
            "$\\frac{7}{8}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Gagner moins de 300 F, c'est $X = -1000$ ou $X = 100$ : $\\frac{1}{8} + \\frac{3}{8} = \\frac{1}{2}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p05_q6",
          "type": "mcq",
          "prompt": "Urne de 2 boules blanches et 4 rouges, tirage de 3 boules. $X$ = nombre de boules blanches. Que vaut $E(X)$ ?",
          "options": [
            "$0$",
            "$1$",
            "$\\frac{3}{5}$",
            "$2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$E(X) = 0 \\times \\frac{1}{5} + 1 \\times \\frac{3}{5} + 2 \\times \\frac{1}{5} = \\frac{3}{5} + \\frac{2}{5} = 1$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_probabilites_l02_probabilite_p06",
      "order": 6,
      "title": "Schéma de Bernoulli, loi binomiale et fonction de répartition",
      "summary": "Répéter n fois une épreuve à deux issues donne un schéma de Bernoulli ; le nombre de succès suit une loi binomiale ; la fonction de répartition cumule les probabilités.",
      "conceptExplanation": "Une épreuve de Bernoulli est une expérience aléatoire ne conduisant qu'à deux éventualités exclusives : l'une est appelée succès (notée $S$) et l'autre échec (notée $\\bar{S}$).\nUn schéma de Bernoulli est une expérience qui consiste à répéter $n$ fois de suite ($n \\geq 2$), de façon indépendante, une même épreuve de Bernoulli.\nLa probabilité $p$ du succès est appelée paramètre de l'épreuve de Bernoulli ; $p$ et $n$ sont les paramètres du schéma de Bernoulli. Si $p$ est la probabilité du succès, celle de l'échec est $1 - p$.\nPropriété : pour un schéma de Bernoulli à $n$ épreuves et $p$ la probabilité du succès, la probabilité d'obtenir exactement $k$ succès est $C_n^k p^k (1-p)^{n-k}$, où $0 \\leq k \\leq n$.\nLoi binomiale : soit un schéma de Bernoulli à $n$ épreuves identiques, $p$ la probabilité du succès et $X$ le nombre de succès au cours des $n$ épreuves. La loi de $X$ est $P(X = k) = C_n^k p^k (1-p)^{n-k}$ : c'est la loi binomiale de paramètres $n$ et $p$, notée $\\mathcal{B}(n ; p)$.\nPour $X$ suivant une loi binomiale de paramètres $n$ et $p$ : $E(X) = np$ et $V(X) = np(1-p)$.\nFonction de répartition : soit $X$ une variable aléatoire et $P$ une probabilité. La fonction de répartition de $X$ est l'application $F$ de $\\mathbb{R}$ dans $[0 ; 1]$ définie par $F(x) = P(X \\leq x)$. C'est une fonction en escalier, croissante.",
      "keyRule": "Loi binomiale : P(X = k) = C(n,k) p^k (1−p)^(n−k), E(X) = np, V(X) = np(1−p).",
      "formulas": [
        {
          "name": "Probabilité de k succès",
          "formula": "P(\\text{exactement } k \\text{ succès}) = C_n^k p^k (1-p)^{n-k}",
          "note": "n épreuves indépendantes, p probabilité de succès."
        },
        {
          "name": "Loi binomiale B(n ; p)",
          "formula": "P(X = k) = C_n^k p^k (1-p)^{n-k},\\ E(X) = np,\\ V(X) = np(1-p)",
          "note": "X est le nombre de succès au cours des n épreuves."
        },
        {
          "name": "Fonction de répartition",
          "formula": "F(x) = P(X \\leq x)",
          "note": "Fonction en escalier, croissante, de R dans [0 ; 1]."
        }
      ],
      "workedExample": {
        "title": "Le feu tricolore",
        "statement": "La probabilité pour que le feu A soit vert est de $\\frac{3}{4}$. Un automobiliste passe 5 fois à ce carrefour. Soit $X$ le nombre de fois où il rencontre le feu vert. Calcule la probabilité qu'il rencontre exactement 3 fois le feu vert, puis l'espérance et la variance de $X$.",
        "methodSteps": [
          "Chaque passage est une épreuve de Bernoulli de succès $p = \\frac{3}{4}$ ; les 5 passages sont indépendants : $X$ suit la loi binomiale $\\mathcal{B}(5 ; \\frac{3}{4})$.",
          "$P(X = 3) = C_5^3 (\\frac{3}{4})^3 (\\frac{1}{4})^2 = 10 \\times \\frac{27}{64} \\times \\frac{1}{16} = \\frac{270}{1024} \\approx 0{,}26$.",
          "$E(X) = np = 5 \\times \\frac{3}{4} = \\frac{15}{4}$ et $V(X) = np(1-p) = 5 \\times \\frac{3}{4} \\times \\frac{1}{4} = \\frac{15}{16}$.",
          "L'arrondi d'ordre zéro de $E(X)$ est $4$ : l'automobiliste rencontre en moyenne $4$ feux verts en passant $5$ fois au carrefour."
        ],
        "conclusion": "$P(X = 3) = \\frac{270}{1024} \\approx 0{,}26$, $E(X) = \\frac{15}{4}$, $V(X) = \\frac{15}{16}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Épreuve et schéma de Bernoulli",
          "stepTheme": "Épreuve et schéma de Bernoulli",
          "stepBadge": "Épreuve et schéma de Bernoulli",
          "paragraphText": "• Une épreuve de Bernoulli ne conduit qu'à deux éventualités exclusives : le succès $S$ (probabilité $p$) et l'échec $\\bar{S}$ (probabilité $1-p$).\nUn schéma de Bernoulli consiste à répéter $n$ fois de suite ($n \\geq 2$), de façon indépendante, une même épreuve de Bernoulli.\nExemple : lancer un dé et s'intéresser à l'apparition du 6 est une épreuve de Bernoulli de probabilité de succès $\\frac{1}{6}$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q1",
            "type": "mcq",
            "prompt": "On lance un dé cubique équilibré et on s'intéresse à l'apparition du 6. Quelle est la probabilité de succès de cette épreuve de Bernoulli ?",
            "options": [
              "$\\frac{1}{2}$",
              "$\\frac{1}{6}$",
              "$\\frac{5}{6}$",
              "$\\frac{1}{3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Obtenir 6 » a pour probabilité $\\frac{1}{6}$ et « ne pas obtenir 6 » a pour probabilité $\\frac{5}{6}$ : c'est une épreuve de Bernoulli de paramètre $\\frac{1}{6}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La probabilité de k succès",
          "stepTheme": "La probabilité de k succès",
          "stepBadge": "La probabilité de k succès",
          "paragraphText": "• Pour un schéma de Bernoulli à $n$ épreuves et $p$ la probabilité du succès, la probabilité d'obtenir exactement $k$ succès est $C_n^k p^k (1-p)^{n-k}$.\nLe coefficient $C_n^k$ compte les façons de placer les $k$ succès parmi les $n$ épreuves ; $p^k (1-p)^{n-k}$ est la probabilité d'une suite donnée.\nExemple : lancer 5 fois un dé et obtenir exactement 4 fois le chiffre 2 : $C_5^4 (\\frac{1}{6})^4 (\\frac{5}{6}) = \\frac{25}{7776}$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q2",
            "type": "mcq",
            "prompt": "On lance 5 fois un dé équilibré. Quelle est la probabilité d'obtenir exactement 4 fois le chiffre 2 ?",
            "options": [
              "$\\frac{5}{7776}$",
              "$\\frac{25}{7776}$",
              "$\\frac{1}{6}$",
              "$\\frac{5}{6}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P = C_5^4 (\\frac{1}{6})^4 (\\frac{5}{6}) = 5 \\times \\frac{5}{6^5} = \\frac{25}{7776}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La loi binomiale",
          "stepTheme": "La loi binomiale",
          "stepBadge": "La loi binomiale",
          "paragraphText": "• Si $X$ est le nombre de succès au cours des $n$ épreuves d'un schéma de Bernoulli de paramètre $p$, alors $P(X = k) = C_n^k p^k (1-p)^{n-k}$ : $X$ suit la loi binomiale de paramètres $n$ et $p$, notée $\\mathcal{B}(n ; p)$.\nPour $X \\sim \\mathcal{B}(n ; p)$ : $E(X) = np$ et $V(X) = np(1-p)$.\nExemple : pour le feu tricolore, $X \\sim \\mathcal{B}(5 ; \\frac{3}{4})$, donc $E(X) = \\frac{15}{4}$ et $V(X) = \\frac{15}{16}$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q3",
            "type": "mcq",
            "prompt": "Soit $X$ suivant la loi binomiale $\\mathcal{B}(5 ; \\frac{3}{4})$. Que valent $E(X)$ et $V(X)$ ?",
            "options": [
              "$E(X) = \\frac{15}{4}$ et $V(X) = \\frac{15}{16}$",
              "$E(X) = \\frac{15}{16}$ et $V(X) = \\frac{15}{4}$",
              "$E(X) = 5$ et $V(X) = \\frac{3}{4}$",
              "$E(X) = \\frac{3}{4}$ et $V(X) = 5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E(X) = np = 5 \\times \\frac{3}{4} = \\frac{15}{4}$ et $V(X) = np(1-p) = 5 \\times \\frac{3}{4} \\times \\frac{1}{4} = \\frac{15}{16}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le feu tricolore : exactement 3 feux verts",
          "stepTheme": "Le feu tricolore : exactement 3 feux verts",
          "stepBadge": "Le feu tricolore : exactement 3 feux verts",
          "paragraphText": "• L'automobiliste passe 5 fois au carrefour, la probabilité d'un feu vert est $\\frac{3}{4}$ : $X \\sim \\mathcal{B}(5 ; \\frac{3}{4})$.\n$P(X = 3) = C_5^3 (\\frac{3}{4})^3 (\\frac{1}{4})^2 = 10 \\times \\frac{27}{64} \\times \\frac{1}{16} = \\frac{270}{1024} \\approx 0{,}26$.\nEn moyenne, il rencontre $E(X) = \\frac{15}{4} \\approx 4$ feux verts sur ses 5 passages.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q4",
            "type": "mcq",
            "prompt": "Un automobiliste passe 5 fois à un feu vert avec probabilité $\\frac{3}{4}$ à chaque passage. Quelle est la probabilité de rencontrer exactement 3 fois le feu vert ?",
            "options": [
              "$\\frac{27}{1024}$",
              "$\\frac{270}{1024}$",
              "$\\frac{3}{4}$",
              "$\\frac{15}{4}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P(X = 3) = C_5^3 (\\frac{3}{4})^3 (\\frac{1}{4})^2 = \\frac{270}{1024} \\approx 0{,}26$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La fonction de répartition",
          "stepTheme": "La fonction de répartition",
          "stepBadge": "La fonction de répartition",
          "paragraphText": "• La fonction de répartition de $X$ est l'application $F$ de $\\mathbb{R}$ dans $[0 ; 1]$ définie par $F(x) = P(X \\leq x)$.\nC'est une fonction en escalier, croissante : elle cumule les probabilités des valeurs inférieures ou égales à $x$.\nExemple du cours (loi $-1000, 100, 300, 600$ avec $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$) : $F(x) = 0$ pour $x < -1000$ ; $F(x) = \\frac{1}{8}$ sur $[-1000 ; 100[$ ; $F(x) = \\frac{1}{2}$ sur $[100 ; 300[$ ; $F(x) = \\frac{7}{8}$ sur $[300 ; 600[$ ; $F(x) = 1$ pour $x \\geq 600$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q5",
            "type": "mcq",
            "prompt": "Pour la loi $-1000, 100, 300, 600$ (probabilités $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$), que vaut $F(200) = P(X \\leq 200)$ ?",
            "options": [
              "$\\frac{1}{8}$",
              "$\\frac{1}{2}$",
              "$\\frac{7}{8}$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$F(200) = P(X \\leq 200) = P(X = -1000) + P(X = 100) = \\frac{1}{8} + \\frac{3}{8} = \\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Mariam : trois jours de bénéfice",
          "stepTheme": "Mariam : trois jours de bénéfice",
          "stepBadge": "Mariam : trois jours de bénéfice",
          "paragraphText": "• La probabilité d'un bénéfice un jour donné est $0{,}58$. Sur 3 jours successifs, le nombre $X$ de jours avec bénéfice suit la loi binomiale $\\mathcal{B}(3 ; 0{,}58)$.\n$P(X = 0) \\approx 0{,}074$, $P(X = 1) \\approx 0{,}307$, $P(X = 2) \\approx 0{,}424$, $P(X = 3) \\approx 0{,}195$ ; $E(X) = 3 \\times 0{,}58 = 1{,}74$.\nLa probabilité de réaliser au moins une fois un bénéfice pendant $n$ jours est $P_n = 1 - (0{,}42)^n$ ; il faut $n \\geq 11$ pour que $P_n \\geq 0{,}9999$.",
          "exercise": {
            "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q6",
            "type": "mcq",
            "prompt": "Mariam réalise un bénéfice un jour donné avec probabilité $0{,}58$. Sur 3 jours, que vaut l'espérance du nombre de jours avec bénéfice ?",
            "options": [
              "$0{,}58$",
              "$1{,}16$",
              "$1{,}74$",
              "$3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le nombre de jours avec bénéfice suit $\\mathcal{B}(3 ; 0{,}58)$ : $E(X) = np = 3 \\times 0{,}58 = 1{,}74$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q1",
          "type": "mcq",
          "prompt": "On lance un dé cubique équilibré et on s'intéresse à l'apparition du 6. Quelle est la probabilité de succès de cette épreuve de Bernoulli ?",
          "options": [
            "$\\frac{1}{2}$",
            "$\\frac{1}{6}$",
            "$\\frac{5}{6}$",
            "$\\frac{1}{3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Obtenir 6 » a pour probabilité $\\frac{1}{6}$ et « ne pas obtenir 6 » a pour probabilité $\\frac{5}{6}$ : c'est une épreuve de Bernoulli de paramètre $\\frac{1}{6}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q2",
          "type": "mcq",
          "prompt": "On lance 5 fois un dé équilibré. Quelle est la probabilité d'obtenir exactement 4 fois le chiffre 2 ?",
          "options": [
            "$\\frac{5}{7776}$",
            "$\\frac{25}{7776}$",
            "$\\frac{1}{6}$",
            "$\\frac{5}{6}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P = C_5^4 (\\frac{1}{6})^4 (\\frac{5}{6}) = 5 \\times \\frac{5}{6^5} = \\frac{25}{7776}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q3",
          "type": "mcq",
          "prompt": "Soit $X$ suivant la loi binomiale $\\mathcal{B}(5 ; \\frac{3}{4})$. Que valent $E(X)$ et $V(X)$ ?",
          "options": [
            "$E(X) = \\frac{15}{4}$ et $V(X) = \\frac{15}{16}$",
            "$E(X) = \\frac{15}{16}$ et $V(X) = \\frac{15}{4}$",
            "$E(X) = 5$ et $V(X) = \\frac{3}{4}$",
            "$E(X) = \\frac{3}{4}$ et $V(X) = 5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E(X) = np = 5 \\times \\frac{3}{4} = \\frac{15}{4}$ et $V(X) = np(1-p) = 5 \\times \\frac{3}{4} \\times \\frac{1}{4} = \\frac{15}{16}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q4",
          "type": "mcq",
          "prompt": "Un automobiliste passe 5 fois à un feu vert avec probabilité $\\frac{3}{4}$ à chaque passage. Quelle est la probabilité de rencontrer exactement 3 fois le feu vert ?",
          "options": [
            "$\\frac{27}{1024}$",
            "$\\frac{270}{1024}$",
            "$\\frac{3}{4}$",
            "$\\frac{15}{4}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P(X = 3) = C_5^3 (\\frac{3}{4})^3 (\\frac{1}{4})^2 = \\frac{270}{1024} \\approx 0{,}26$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q5",
          "type": "mcq",
          "prompt": "Pour la loi $-1000, 100, 300, 600$ (probabilités $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$), que vaut $F(200) = P(X \\leq 200)$ ?",
          "options": [
            "$\\frac{1}{8}$",
            "$\\frac{1}{2}$",
            "$\\frac{7}{8}$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$F(200) = P(X \\leq 200) = P(X = -1000) + P(X = 100) = \\frac{1}{8} + \\frac{3}{8} = \\frac{1}{2}$."
        },
        {
          "id": "terminale_c_maths_probabilites_l02_probabilite_p06_q6",
          "type": "mcq",
          "prompt": "Mariam réalise un bénéfice un jour donné avec probabilité $0{,}58$. Sur 3 jours, que vaut l'espérance du nombre de jours avec bénéfice ?",
          "options": [
            "$0{,}58$",
            "$1{,}16$",
            "$1{,}74$",
            "$3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le nombre de jours avec bénéfice suit $\\mathcal{B}(3 ; 0{,}58)$ : $E(X) = np = 3 \\times 0{,}58 = 1{,}74$."
        }
      ]
    }
  ]
};
