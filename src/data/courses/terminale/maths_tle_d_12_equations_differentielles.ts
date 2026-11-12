import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const MATHS_TLE_D_L12_EQUATIONS_DIFFERENTIELLES: CurriculumChapter = {
  id: "terminale_d_maths_ch12_equations_differentielles",
  subjectId: "maths",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 12,
  title: "Équations différentielles (Premier et second ordre linéaires à coefficients constants)",
  summary: "Étude théorique et appliquée des équations différentielles : équations linéaires du premier ordre homogènes y' + ay = 0 et avec second membre y' + ay = b ou g(x), équations linéaires du second ordre y'' + my = 0 (selon le signe de m : m = 0, m < 0 et m > 0), conditions initiales et modélisations interdisciplinaires (loi de refroidissement de Newton, dynamique des populations et oscillateurs harmoniques).",
  officialVolumeHours: 6,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - Mathématiques Terminale D / C",
  points: [
    {
      id: "pt1_notion_equations_premier_ordre_homogene",
      order: 1,
      title: "Notion d'équation différentielle et équations linéaires du premier ordre y' + ay = 0",
      summary: "Définition d'une équation différentielle, ordre, distinction avec une équation algébrique, résolution complète de l'équation linéaire homogène y' + ay = 0 et solution unique vérifiant une condition initiale.",
      conceptExplanation: "1. Définition générale d'une équation différentielle :\nOn appelle équation différentielle toute équation dont l'inconnue est une fonction (généralement notée y ou f) et dans laquelle figure au moins une des dérivées successives (y', y'', ...) de la fonction inconnue.\n- L'ordre d'une équation différentielle est l'ordre de la plus haute dérivée qui y figure.\n  • Exemple (E₁) : -2y' + 5y = 0 est une équation différentielle linéaire du premier ordre.\n  • Exemple (E₂) : y'' - 25y = 2x + 1 est une équation différentielle linéaire du second ordre.\n- Résoudre une équation différentielle sur un intervalle K, c'est déterminer l'ensemble de toutes les fonctions définies et dérivables sur K qui vérifient cette équation.\n\n2. Équation différentielle linéaire homogène du premier ordre : y' + ay = 0 (avec a ∈ ℝ) :\n- Propriété fondamentale 1 :\n  Les solutions sur ℝ de l'équation différentielle y' + ay = 0 sont les fonctions de la forme :\n  x ⟼ k · e^(-ax), où k est une constante réelle quelconque (k ∈ ℝ).\n- Démonstration rigoureuse :\n  Soit y une fonction dérivable sur ℝ. Considérons la fonction auxiliaire g(x) = y(x) · e^(ax).\n  En dérivant g par la règle du produit : g'(x) = y'(x) · e^(ax) + y(x) · [a · e^(ax)] = (y'(x) + a y(x)) · e^(ax).\n  Puisque e^(ax) > 0 pour tout x, g'(x) = 0 équivaut à y'(x) + a y(x) = 0.\n  Or une fonction dont la dérivée est identiquement nulle sur ℝ est une fonction constante : g(x) = k (k ∈ ℝ).\n  Par suite, y(x) · e^(ax) = k ⟺ y(x) = k · e^(-ax).\n\n3. Cas particulier a = 0 :\nL'équation devient y' = 0. Les solutions sont les fonctions constantes : x ⟼ k (k ∈ ℝ).\n\n4. Solution vérifiant une condition initiale y(x₀) = y₀ :\nPour tout couple de nombres réels (x₀ ; y₀), il existe une UNIQUE solution f de y' + ay = 0 telle que f(x₀) = y₀.\nEn effet, f(x₀) = y₀ ⟺ k · e^(-a x₀) = y₀ ⟺ k = y₀ · e^(a x₀).\nLa solution unique est donc : f(x) = y₀ · e^(-a(x - x₀)).",
      keyRule: "Les solutions sur ℝ de y' + ay = 0 sont les fonctions x ⟼ k · e^(-ax) (k ∈ ℝ). Avec la condition initiale y(x₀) = y₀, la constante k est unique : k = y₀ · e^(a x₀).",
      formulas: [
        {
          name: "Solution générale de y' + ay = 0",
          formula: "y(x) = k \\cdot e^{-ax} \\quad (k \\in \\mathbb{R})",
          note: "Attention au signe « - » devant la constante a"
        },
        {
          name: "Solution avec condition initiale y(x₀) = y₀",
          formula: "y(x) = y_0 \\cdot e^{-a(x - x_0)}",
          note: "Solution unique traversant le point (x₀, y₀)"
        }
      ],
      workedExample: {
        title: "Résolution avec condition initiale (Document officiel)",
        statement: "On donne l'équation différentielle (E) : y' + 2y = 0.\n1. Déterminer l'ensemble des solutions de (E) sur ℝ.\n2. Déterminer la solution unique f de (E) qui vérifie la condition initiale f(0) = 5.",
        methodSteps: [
          "Étape 1 : Identifier le coefficient a. Ici, a = 2.",
          "Étape 2 : Appliquer la formule générale : les solutions sont de la forme y(x) = k · e^(-ax) = k · e^(-2x), avec k ∈ ℝ.",
          "Étape 3 : Exploiter la condition initiale f(0) = 5 :\nf(0) = k · e^(-2 × 0) = k · e⁰ = k · 1 = k = 5.",
          "Étape 4 : Conclure en donnant l'expression finale de f(x)."
        ],
        conclusion: "La solution unique cherchée est la fonction f définie sur ℝ par f(x) = 5 e^(-2x)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Classification d'une équation : Algébrique vs Différentielle",
        tableData: {
          headers: ["Équation", "Inconnue", "Présence de dérivée ?", "Nature de l'équation"],
          rows: [
            ["2y² + y = 2", "Un nombre réel y", "Non", "Équation algébrique du second degré"],
            ["y' + 4 = 0", "Une fonction y = f(x)", "Oui (dérivée première y')", "Équation différentielle du premier ordre"],
            ["y'' + 2y' + y = 5", "Une fonction y = f(x)", "Oui (dérivée seconde y'' et première y')", "Équation différentielle du second ordre"],
            ["y + 3 = 0", "Un nombre réel y", "Non", "Équation algébrique du premier degré"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_maths_c12_p1_ex1",
          type: "mcq",
          prompt: "Parmi les équations suivantes, laquelle est une équation différentielle du premier ordre ?",
          options: [
            "y' + 4y = 0",
            "y² - 4y + 3 = 0",
            "y'' + 9y = 0",
            "2x + 3 = 7"
          ],
          correctAnswerIndex: 0,
          explanation: "y' + 4y = 0 a pour inconnue une fonction y et fait intervenir sa dérivée première y' : c'est une équation différentielle du premier ordre. y² - 4y + 3 = 0 est une équation algébrique, et y'' + 9y = 0 est du second ordre."
        },
        {
          id: "tle_d_maths_c12_p1_ex2",
          type: "mcq",
          prompt: "Quelles sont les solutions sur ℝ de l'équation différentielle y' + 2y = 0 ?",
          options: [
            "x ⟼ k · e^(-2x), avec k ∈ ℝ",
            "x ⟼ k · e^(2x), avec k ∈ ℝ",
            "x ⟼ -2x + k, avec k ∈ ℝ",
            "x ⟼ k · ln(2x), avec k ∈ ℝ"
          ],
          correctAnswerIndex: 0,
          explanation: "Pour y' + ay = 0 avec a = 2, les solutions sont de la forme k e^(-ax) = k e^(-2x) avec k ∈ ℝ."
        },
        {
          id: "tle_d_maths_c12_p1_ex3",
          type: "mcq",
          prompt: "Résous sur ℝ l'équation différentielle 7y' = 3y.",
          options: [
            "x ⟼ k · e^((3/7)x), avec k ∈ ℝ",
            "x ⟼ k · e^(-(3/7)x), avec k ∈ ℝ",
            "x ⟼ k · e^((7/3)x), avec k ∈ ℝ",
            "x ⟼ (3/7)x + k, avec k ∈ ℝ"
          ],
          correctAnswerIndex: 0,
          explanation: "7y' = 3y ⟺ y' - (3/7)y = 0. Ici a = -3/7, donc les solutions sont k e^(-(-3/7)x) = k e^((3/7)x) avec k ∈ ℝ."
        },
        {
          id: "tle_d_maths_c12_p1_ex4",
          type: "mcq",
          prompt: "Détermine la solution f de l'équation différentielle y' = -2y qui vérifie la condition initiale f(0) = 1.",
          options: [
            "f(x) = e^(-2x)",
            "f(x) = e^(2x)",
            "f(x) = -2e^x",
            "f(x) = 1 - 2x"
          ],
          correctAnswerIndex: 0,
          explanation: "y' = -2y ⟺ y' + 2y = 0, donc f(x) = k e^(-2x). Comme f(0) = 1 ⟺ k e⁰ = k = 1, la solution est f(x) = e^(-2x)."
        },
        {
          id: "tle_d_maths_c12_p1_ex5",
          type: "mcq",
          prompt: "Quelle est la solution f de l'équation y' - (ln 2)y = 0 qui vérifie f(2) = 1/2 ?",
          options: [
            "f(x) = (1/8) · e^(x ln 2)",
            "f(x) = (1/2) · e^(x ln 2)",
            "f(x) = 2 · e^(-x ln 2)",
            "f(x) = e^(x ln 2) - 1/2"
          ],
          correctAnswerIndex: 0,
          explanation: "y' - (ln 2)y = 0 ⟺ a = -ln 2, donc f(x) = k e^(x ln 2). f(2) = 1/2 ⟺ k e^(2 ln 2) = k e^(ln 4) = 4k = 1/2 ⟺ k = 1/8. D'où f(x) = (1/8) e^(x ln 2)."
        },
        {
          id: "tle_d_maths_c12_p1_ex6",
          type: "mcq",
          prompt: "Combien de solutions distinctes de l'équation y' + ay = 0 passent par un point donné A(x₀ ; y₀) du plan ?",
          options: [
            "Une et une seule solution",
            "Une infinité de solutions",
            "Deux solutions symétriques",
            "Aucune solution si y₀ est négatif"
          ],
          correctAnswerIndex: 0,
          explanation: "D'après le théorème de Cauchy-Lipschitz (Propriété 3 du programme officiel), pour tout couple (x₀ ; y₀) ∈ ℝ², il existe une unique solution vérifiant la condition initiale y(x₀) = y₀."
        }
      ]
    },
    {
      id: "pt2_equations_premier_ordre_second_membre",
      order: 2,
      title: "Équations du premier ordre avec second membre y' + ay = b et second membre quelconque",
      summary: "Résolution de l'équation avec second membre constant y' + ay = b, recherche de solution particulière constante (-b/a), condition initiale unique et résolution guidée avec second membre exponentiel g(x).",
      conceptExplanation: "1. Équations différentielles de la forme : y' + ay = b (avec a ∈ ℝ* et b ∈ ℝ*) :\n- Propriété fondamentale 2 :\n  Les solutions sur ℝ de l'équation différentielle y' + ay = b sont les fonctions :\n  x ⟼ k · e^(-ax) + (b / a), avec k ∈ ℝ.\n- Remarque pédagogique :\n  La constante y_p = b / a est une solution constante particulière évidente de l'équation, car y_p' = 0 et 0 + a(b/a) = b.\n  La solution générale est donc la somme de la solution générale de l'équation homogène (k e^(-ax)) et de cette solution particulière (b/a).\n\n2. Cas particulier a = 0 :\nL'équation devient y' = b. Ses solutions sont les primitives de la fonction constante b, c'est-à-dire les fonctions affines : x ⟼ bx + c, avec c ∈ ℝ.\n\n3. Solution unique vérifiant une condition initiale y(x₀) = y₀ :\nPour tout couple (x₀ ; y₀), il existe une unique solution vérifiant y(x₀) = y₀.\nOn résout : k · e^(-a x₀) + (b/a) = y₀ pour déterminer la valeur unique de la constante k.\n\n4. Équations avec second membre non constant (Méthode officielle du Bac CI) :\nDans les sujets de Bac, on rencontre des équations de la forme (E) : y' + ay = g(x), où g(x) est souvent une fonction exponentielle ou polynôme.\nLa méthode canonique en 4 étapes :\n- Étape 1 : Vérifier ou déterminer une solution particulière g (ou h) de (E).\n- Étape 2 : Démontrer le théorème de structure : une fonction f est solution de (E) si et seulement si (f - g) est solution de l'équation homogène associée (E') : y' + ay = 0.\n- Étape 3 : Résoudre l'équation homogène (E') : les solutions de (E') sont h(x) = k · e^(-ax).\n- Étape 4 : En déduire les solutions générales de (E) : f(x) = k · e^(-ax) + g(x). Puis déterminer k si une condition initiale est donnée.",
      keyRule: "Pour y' + ay = b (a ≠ 0) : les solutions sont y(x) = k · e^(-ax) + (b/a). Pour y' + ay = g(x), la solution générale est y(x) = y_homogène(x) + y_particulière(x).",
      formulas: [
        {
          name: "Solution générale de y' + ay = b (a ≠ 0)",
          formula: "y(x) = k \\cdot e^{-ax} + \\frac{b}{a} \\quad (k \\in \\mathbb{R})",
          note: "b/a est la solution particulière constante"
        },
        {
          name: "Principe de superposition des solutions",
          formula: "y_{\\text{générale}} = k \\cdot e^{-ax} + y_{\\text{particulière}}",
          note: "Structure fondamentale des équations différentielles linéaires"
        }
      ],
      workedExample: {
        title: "Résolution complète de y' - 3y = 7 avec f(0) = 1 (Document officiel)",
        statement: "On donne l'équation différentielle (E) : y' - 3y = 7.\n1. Résoudre (E) sur ℝ.\n2. Déterminer la solution f de (E) qui vérifie f(0) = 1.",
        methodSteps: [
          "Étape 1 : Mettre sous forme canonique y' + ay = b.\nIci a = -3 et b = 7.\nLa solution particulière constante est b/a = 7 / (-3) = -7/3.",
          "Étape 2 : Donner la forme générale des solutions sur ℝ :\ny(x) = k · e^(-ax) + b/a = k · e^(-(-3)x) - 7/3 = k · e^(3x) - 7/3, avec k ∈ ℝ.",
          "Étape 3 : Appliquer la condition initiale f(0) = 1 :\nf(0) = 1 ⟺ k · e^(3×0) - 7/3 = 1 ⟺ k - 7/3 = 1 ⟺ k = 1 + 7/3 = 10/3.",
          "Étape 4 : Conclure avec l'expression finale de f(x)."
        ],
        conclusion: "La solution cherchée est la fonction f définie sur ℝ par f(x) = (10/3) e^(3x) - 7/3."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Tableau récapitulatif des solutions du premier ordre",
        tableData: {
          headers: ["Type d'équation", "Conditions sur a et b", "Forme générale des solutions sur ℝ"],
          rows: [
            ["y' + ay = 0", "a ∈ ℝ, b = 0", "x ⟼ k · e^(-ax), k ∈ ℝ"],
            ["y' + ay = b", "a ∈ ℝ*, b ∈ ℝ*", "x ⟼ k · e^(-ax) + (b / a), k ∈ ℝ"],
            ["y' = b", "a = 0, b ∈ ℝ", "x ⟼ bx + c, c ∈ ℝ (primitives)"],
            ["y' + ay = g(x)", "a ∈ ℝ*, second membre g", "x ⟼ k · e^(-ax) + y_p(x), k ∈ ℝ"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_maths_c12_p2_ex1",
          type: "mcq",
          prompt: "Quelle est la solution générale sur ℝ de l'équation différentielle y' + 2y = 6 ?",
          options: [
            "x ⟼ k · e^(-2x) + 3, avec k ∈ ℝ",
            "x ⟼ k · e^(-2x) - 3, avec k ∈ ℝ",
            "x ⟼ k · e^(2x) + 3, avec k ∈ ℝ",
            "x ⟼ 3x + k, avec k ∈ ℝ"
          ],
          correctAnswerIndex: 0,
          explanation: "Ici a = 2 et b = 6. La solution particulière constante est b/a = 6/2 = 3. Les solutions sont donc de la forme y(x) = k e^(-2x) + 3 avec k ∈ ℝ."
        },
        {
          id: "tle_d_maths_c12_p2_ex2",
          type: "mcq",
          prompt: "Quelle est la solution constante particulière de l'équation différentielle 4y' + 12y = 36 ?",
          options: [
            "y = 3",
            "y = 9",
            "y = -3",
            "y = 36"
          ],
          correctAnswerIndex: 0,
          explanation: "4y' + 12y = 36 ⟺ y' + 3y = 9. La constante vérifie 3y = 9 ⟺ y = 3."
        },
        {
          id: "tle_d_maths_c12_p2_ex3",
          type: "mcq",
          prompt: "Soit l'équation différentielle (E) : y' + 2y = e^(-2x). On cherche une solution particulière de la forme g(x) = (Ax + B)e^(-2x). Que valent A et B ?",
          options: [
            "A = 1 et B peut être n'importe quelle constante (on choisit souvent B = 1 ou 0)",
            "A = 2 et B = 0",
            "A = -2 et B = 1",
            "A = 0 et B = 1"
          ],
          correctAnswerIndex: 0,
          explanation: "g'(x) = A e^(-2x) - 2(Ax + B)e^(-2x). Donc g'(x) + 2g(x) = A e^(-2x). Pour que g soit solution de (E), il faut A e^(-2x) = e^(-2x) ⟺ A = 1. La fonction g(x) = (x + 1)e^(-2x) du cours officiel convient parfaitement avec A = 1."
        },
        {
          id: "tle_d_maths_c12_p2_ex4",
          type: "mcq",
          prompt: "On considère l'équation (E) : y' + 3y = 2e^(-x). On pose h(x) = m e^(-x). Pour quelle valeur du réel m la fonction h est-elle solution de (E) ?",
          options: [
            "m = 1",
            "m = 2",
            "m = -1",
            "m = 3"
          ],
          correctAnswerIndex: 0,
          explanation: "h'(x) = -m e^(-x). Alors h'(x) + 3h(x) = -m e^(-x) + 3m e^(-x) = 2m e^(-x). Pour que ce soit égal à 2e^(-x), il faut 2m = 2 ⟺ m = 1."
        },
        {
          id: "tle_d_maths_c12_p2_ex5",
          type: "mcq",
          prompt: "Les solutions de l'équation homogène (E') : y' + 3y = 0 sont y(x) = k e^(-3x). Sachant que h(x) = e^(-x) est une solution particulière de y' + 3y = 2e^(-x), quelles sont les solutions générales de cette équation ?",
          options: [
            "f(x) = k · e^(-3x) + e^(-x), avec k ∈ ℝ",
            "f(x) = k · e^(3x) + e^(-x), avec k ∈ ℝ",
            "f(x) = (k + 1) · e^(-3x), avec k ∈ ℝ",
            "f(x) = k · e^(-3x) - 2e^(-x), avec k ∈ ℝ"
          ],
          correctAnswerIndex: 0,
          explanation: "Par le principe de superposition, la solution générale est la somme de la solution générale de l'équation homogène (k e^(-3x)) et de la solution particulière (e^(-x)) : f(x) = k e^(-3x) + e^(-x)."
        },
        {
          id: "tle_d_maths_c12_p2_ex6",
          type: "mcq",
          prompt: "Quelle est la solution f de y' + 2y = 6 vérifiant la condition initiale f(0) = -2 ?",
          options: [
            "f(x) = -5 e^(-2x) + 3",
            "f(x) = 5 e^(-2x) - 3",
            "f(x) = e^(-2x) - 3",
            "f(x) = -2 e^(-2x)"
          ],
          correctAnswerIndex: 0,
          explanation: "f(x) = k e^(-2x) + 3. f(0) = -2 ⟺ k + 3 = -2 ⟺ k = -5. Donc f(x) = -5 e^(-2x) + 3."
        }
      ]
    },
    {
      id: "pt3_equations_second_ordre_homogene",
      order: 3,
      title: "Équations différentielles linéaires du second ordre y'' + my = 0",
      summary: "Résolution méthodique de l'équation y'' + my = 0 selon le signe du réel m : cas m = 0 (droites affines), cas m < 0 (exponentielles) et cas m > 0 (fonctions trigonométriques), et unicité sous deux conditions initiales.",
      conceptExplanation: "L'équation différentielle linéaire homogène du second ordre à coefficients constants étudiée en Terminale D est de la forme :\n(E) : y'' + my = 0, où m est un nombre réel fixé.\n\nLa nature et la forme des solutions dépendent exclusivement du SIGNE de m :\n\n1. Premier cas : m = 0\nL'équation devient y'' = 0.\n- La dérivée seconde étant nulle, la dérivée première y' est une fonction constante (y'(x) = a).\n- En intégrant une seconde fois, les solutions sur ℝ sont les fonctions affines :\n  x ⟼ ax + b, avec a ∈ ℝ et b ∈ ℝ.\n\n2. Deuxième cas : m < 0\nComme m est strictement négatif, on peut poser m = -ω², avec ω ∈ ℝ* (ω > 0).\nL'équation s'écrit alors : y'' - ω²y = 0.\n- Propriété :\n  Les solutions sur ℝ de l'équation y'' - ω²y = 0 sont les fonctions de la forme :\n  x ⟼ a · e^(-ωx) + b · e^(ωx), avec a ∈ ℝ et b ∈ ℝ.\n- Exemple du cours officiel : y'' - 4y = 0\n  Ici -ω² = -4 ⟺ ω² = 4 ⟺ ω = 2.\n  Les solutions sont les fonctions : x ⟼ a · e^(-2x) + b · e^(2x) (a, b ∈ ℝ).\n\n3. Troisième cas : m > 0\nComme m est strictement positif, on peut poser m = ω², avec ω ∈ ℝ* (ω > 0).\nL'équation s'écrit alors : y'' + ω²y = 0.\n- Propriété :\n  Les solutions sur ℝ de l'équation y'' + ω²y = 0 sont les fonctions de la forme :\n  x ⟼ a · cos(ωx) + b · sin(ωx), avec a ∈ ℝ et b ∈ ℝ.\n- Exemple du cours officiel : y'' + 4y = 0 ⟺ y'' + 2²y = 0 (ω = 2).\n  Les solutions sont les fonctions : x ⟼ a · cos(2x) + b · sin(2x) (a, b ∈ ℝ).\n- Exemple : y'' + 25y = 0 ⟺ y'' + 5²y = 0 (ω = 5).\n  Les solutions sont les fonctions : x ⟼ a · cos(5x) + b · sin(5x) (a, b ∈ ℝ).\n\n4. Solutions vérifiant des conditions initiales (Propriété fondamentale) :\nPour tout triplet de réels (x₀ ; y₀ ; z₀), l'équation différentielle y'' + my = 0 admet une UNIQUE solution f sur ℝ telle que :\n  f(x₀) = y₀   et   f'(x₀) = z₀.\nPour déterminer les deux constantes réelles a et b, on pose le système formé par f(x₀) = y₀ et f'(x₀) = z₀ en calculant soigneusement la dérivée première f'(x).",
      keyRule: "y'' + my = 0 : si m = 0, y = ax + b ; si m = -ω² < 0, y = a e^(-ωx) + b e^(ωx) ; si m = ω² > 0, y = a cos(ωx) + b sin(ωx). Deux conditions initiales (position et dérivée) fixent de manière unique le couple (a, b).",
      formulas: [
        {
          name: "Cas m = 0",
          formula: "y'' = 0 \\iff y(x) = ax + b \\quad (a, b \\in \\mathbb{R})",
          note: "Fonctions affines"
        },
        {
          name: "Cas m < 0 (m = -ω²)",
          formula: "y'' - \\omega^2 y = 0 \\iff y(x) = a \\cdot e^{-\\omega x} + b \\cdot e^{\\omega x} \\quad (a, b \\in \\mathbb{R})",
          note: "Combinaison linéaire d'exponentielles"
        },
        {
          name: "Cas m > 0 (m = ω²)",
          formula: "y'' + \\omega^2 y = 0 \\iff y(x) = a \\cdot \\cos(\\omega x) + b \\cdot \\sin(\\omega x) \\quad (a, b \\in \\mathbb{R})",
          note: "Oscillations sinusoïdales de pulsation ω"
        }
      ],
      workedExample: {
        title: "Résolution avec conditions initiales f(0) = 1 et f'(π/5) = -2 (Document officiel)",
        statement: "Soit l'équation différentielle (E) : y'' + 25y = 0.\n1. Résoudre (E) sur ℝ.\n2. Déterminer la solution f vérifiant : f(0) = 1 et f'(π/5) = -2.",
        methodSteps: [
          "Étape 1 : Identifier m et ω.\nIci m = 25 > 0, donc ω² = 25 ⟺ ω = 5.\nLes solutions sont les fonctions f(x) = a · cos(5x) + b · sin(5x), avec a, b ∈ ℝ.",
          "Étape 2 : Calculer l'expression de la dérivée f'(x) :\nf'(x) = -5a · sin(5x) + 5b · cos(5x).",
          "Étape 3 : Appliquer la première condition initiale f(0) = 1 :\nf(0) = a · cos(0) + b · sin(0) = a · 1 + b · 0 = a = 1.",
          "Étape 4 : Appliquer la deuxième condition initiale f'(π/5) = -2 :\nf'(π/5) = -5(1) · sin(5 × π/5) + 5b · cos(5 × π/5)\n= -5 · sin(π) + 5b · cos(π) = -5(0) + 5b(-1) = -5b.\nOr f'(π/5) = -2 ⟺ -5b = -2 ⟺ b = 2/5.",
          "Étape 5 : Conclure avec l'expression de f(x)."
        ],
        conclusion: "La solution unique est la fonction f définie sur ℝ par f(x) = cos(5x) + (2/5) sin(5x)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Arbre de décision pour la résolution de y'' + my = 0",
        tableData: {
          headers: ["Valeur de m", "Équation réécrite", "Forme générale des solutions", "Nature mathématique"],
          rows: [
            ["m = 0", "y'' = 0", "y(x) = ax + b", "Polynôme du premier degré (droite)"],
            ["m < 0 (m = -ω²)", "y'' - ω²y = 0", "y(x) = a · e^(-ωx) + b · e^(ωx)", "Croissance / décroissance exponentielle"],
            ["m > 0 (m = ω²)", "y'' + ω²y = 0", "y(x) = a · cos(ωx) + b · sin(ωx)", "Fonction périodique sinusoïdale (T = 2π/ω)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_maths_c12_p3_ex1",
          type: "mcq",
          prompt: "Quelles sont les solutions sur ℝ de l'équation différentielle y'' - 9y = 0 ?",
          options: [
            "x ⟼ a · e^(-3x) + b · e^(3x), avec a, b ∈ ℝ",
            "x ⟼ a · cos(3x) + b · sin(3x), avec a, b ∈ ℝ",
            "x ⟼ a · e^(-9x) + b · e^(9x), avec a, b ∈ ℝ",
            "x ⟼ ax + b, avec a, b ∈ ℝ"
          ],
          correctAnswerIndex: 0,
          explanation: "Ici m = -9 < 0. On pose -ω² = -9 ⟺ ω = 3. Les solutions sont donc de la forme a e^(-3x) + b e^(3x)."
        },
        {
          id: "tle_d_maths_c12_p3_ex2",
          type: "mcq",
          prompt: "Quelles sont les solutions sur ℝ de l'équation différentielle y'' + 16y = 0 ?",
          options: [
            "x ⟼ a · cos(4x) + b · sin(4x), avec a, b ∈ ℝ",
            "x ⟼ a · e^(-4x) + b · e^(4x), avec a, b ∈ ℝ",
            "x ⟼ a · cos(16x) + b · sin(16x), avec a, b ∈ ℝ",
            "x ⟼ 4x + b, avec a, b ∈ ℝ"
          ],
          correctAnswerIndex: 0,
          explanation: "Ici m = 16 > 0. On pose ω² = 16 ⟺ ω = 4. Les solutions sont donc les fonctions x ⟼ a cos(4x) + b sin(4x)."
        },
        {
          id: "tle_d_maths_c12_p3_ex3",
          type: "mcq",
          prompt: "Si f(x) = a · cos(2x) + b · sin(2x), quelle est l'expression de sa dérivée première f'(x) ?",
          options: [
            "f'(x) = -2a · sin(2x) + 2b · cos(2x)",
            "f'(x) = 2a · sin(2x) - 2b · cos(2x)",
            "f'(x) = -a · sin(2x) + b · cos(2x)",
            "f'(x) = -4a · cos(2x) - 4b · sin(2x)"
          ],
          correctAnswerIndex: 0,
          explanation: "La dérivée de cos(2x) est -2 sin(2x) et celle de sin(2x) est 2 cos(2x). Donc f'(x) = -2a sin(2x) + 2b cos(2x)."
        },
        {
          id: "tle_d_maths_c12_p3_ex4",
          type: "mcq",
          prompt: "Soit l'équation y'' + 4y = 0 dont les solutions sont f(x) = a cos(2x) + b sin(2x). Si f(0) = 3 et f'(0) = 8, que valent les constantes a et b ?",
          options: [
            "a = 3 et b = 4",
            "a = 3 et b = 8",
            "a = 4 et b = 3",
            "a = -3 et b = 2"
          ],
          correctAnswerIndex: 0,
          explanation: "f(0) = a cos(0) + b sin(0) = a = 3. La dérivée est f'(x) = -2a sin(2x) + 2b cos(2x), donc f'(0) = 2b cos(0) = 2b = 8 ⟺ b = 4. D'où a = 3 et b = 4."
        },
        {
          id: "tle_d_maths_c12_p3_ex5",
          type: "mcq",
          prompt: "Combien de conditions initiales sont rigoureusement nécessaires pour déterminer de façon unique la solution d'une équation différentielle linéaire du second ordre ?",
          options: [
            "Deux conditions initiales (par exemple la valeur de la fonction et de sa dérivée en un point)",
            "Une seule condition initiale suffit",
            "Trois conditions initiales obligatoires",
            "Aucune condition n'est nécessaire"
          ],
          correctAnswerIndex: 0,
          explanation: "Une équation du second ordre possède deux degrés de liberté (deux constantes réelles indépendantes a et b). Il faut donc impérativement deux conditions initiales (souvent y(x₀) et y'(x₀)) pour la déterminer de manière unique."
        },
        {
          id: "tle_d_maths_c12_p3_ex6",
          type: "mcq",
          prompt: "Quelle est la période T des solutions non nulles de l'équation différentielle y'' + 9y = 0 ?",
          options: [
            "T = 2π / 3",
            "T = 3 / (2π)",
            "T = 2π / 9",
            "T = 6π"
          ],
          correctAnswerIndex: 0,
          explanation: "Pour y'' + 9y = 0, la pulsation est ω = √9 = 3 rad/s. La période de cos(3x) et sin(3x) est donc T = 2π / ω = 2π / 3."
        }
      ]
    },
    {
      id: "pt4_modelisation_et_situations_complexes",
      order: 4,
      title: "Modélisation et situations complexes interdisciplinaires",
      summary: "Applications concrètes des équations différentielles : cinétique de dissolution chimique, loi de refroidissement de Newton, dynamique démographique de Malthus/Verhulst et oscillateurs harmoniques en physique.",
      conceptExplanation: "Les équations différentielles constituent l'outil mathématique par excellence pour modéliser l'évolution temporelle des phénomènes physiques, chimiques, biologiques et économiques.\n\n1. Modélisation de la dissolution chimique (Situation d'apprentissage officielle) :\n- Énoncé du problème : Une substance chimique se dissout dans l'eau. La vitesse de dissolution est proportionnelle à la quantité f(t) non encore dissoute à l'instant t : f'(t) = a · f(t) (avec a ≠ 0).\n- À t = 0 min, on a 20 g de substance : f(0) = 20.\n- Les dix premiers grammes se dissolvent en 5 minutes : à t = 5 min, il reste donc 20 - 10 = 10 g, soit f(5) = 10.\n- Résolution :\n  f(t) = k · e^(at). Avec f(0) = 20, on a k = 20, d'où f(t) = 20 e^(at).\n  f(5) = 10 ⟺ 20 e^(5a) = 10 ⟺ e^(5a) = 1/2 ⟺ 5a = ln(1/2) = -ln 2 ⟺ a = -(ln 2) / 5.\n  Expression finale : f(t) = 20 · e^(-(t · ln 2)/5) = 20 · (1/2)^(t/5).\n\n2. Loi de refroidissement de Newton (Exercice officiel de renforcement) :\n- Énoncé : Un corps à la température initiale θ(0) = 70 °C est placé dans une pièce à température ambiante constante θ_amb = 30 °C.\n  On pose la variable d'écart thermique : x(t) = θ(t) - 30. La loi de Newton stipule que x'(t) = -k² · x(t) (k ∈ ℝ*).\n- Résolution :\n  x(t) = C · e^(-k² t) ⟺ θ(t) = C · e^(-k² t) + 30.\n  À t = 0 min : θ(0) = 70 ⟺ C + 30 = 70 ⟺ C = 40.\n  À t = 5 min : θ(5) = 60 °C ⟺ 40 e^(-5k²) + 30 = 60 ⟺ 40 e^(-5k²) = 30 ⟺ e^(-5k²) = 3/4.\n  D'où -k² = (1/5) ln(3/4). Par suite : θ(t) = 40 · e^((t/5) ln(3/4)) + 30.\n- Température au bout de 20 minutes (t = 20) :\n  θ(20) = 40 · e^(4 ln(3/4)) + 30 = 40 · (3/4)⁴ + 30 = 40 · (81/256) + 30 = 12,656 + 30 ≈ 42,66 °C.\n\n3. Modèle démographique et projection de population (Situation complexe officielle) :\n- Énoncé : La vitesse d'accroissement d'une population f(t) (en millions d'habitants) est proportionnelle au nombre d'habitants : f'(t) = a · f(t).\n  En 1990 (t = 0), la population était de 4,75 millions : f(0) = 4,75.\n  En 1995 (t = 5), la population était de 5,5 millions : f(5) = 5,5.\n- Détermination du taux a :\n  f(t) = 4,75 e^(at).\n  f(5) = 5,5 ⟺ 4,75 e^(5a) = 5,5 ⟺ e^(5a) = 5,5 / 4,75 = 550 / 475 = 22 / 19.\n  D'où 5a = ln(22/19) ⟺ a = (1/5) ln(22/19) ≈ 0,0293.\n- Année où la population atteindra 20 millions d'habitants :\n  On pose f(t) = 20 ⟺ 4,75 e^(at) = 20 ⟺ e^(at) = 20 / 4,75 = 2000 / 475 = 80 / 19.\n  at = ln(80/19) ⟺ t = [ln(80/19)] / a = 5 · [ln(80/19)] / [ln(22/19)] ≈ 5 · (1,4376 / 0,1466) ≈ 48,99 ≈ 48 ou 49 ans.\n  Année civile : 1990 + 48 = 2038 (ou 2039).",
      keyRule: "Pour tout phénomène où la vitesse de variation est proportionnelle à la quantité présente, l'équation est f'(t) = a f(t), de solution exponentielle f(t) = f(0) e^(at). La valeur de a se déduit d'une mesure à un instant t > 0.",
      formulas: [
        {
          name: "Loi de croissance / décroissance exponentielle",
          formula: "f(t) = f(0) \\cdot e^{at} \\quad \\text{avec} \\quad a = \\frac{1}{t_1} \\ln\\left(\\frac{f(t_1)}{f(0)}\\right)",
          note: "Modèle malthusien de population et décroissance radioactive"
        },
        {
          name: "Loi de refroidissement de Newton",
          formula: "\\theta(t) = (\\theta(0) - \\theta_{\\text{amb}}) \\cdot e^{-k^2 t} + \\theta_{\\text{amb}}",
          note: "La température converge exponentiellement vers la température ambiante"
        }
      ],
      workedExample: {
        title: "Calcul de l'année d'atteinte de 20 millions d'habitants (Document officiel)",
        statement: "Une population f(t) (en millions) vérifie f'(t) = a f(t) avec f(0) = 4,75 en 1990 et f(5) = 5,5 en 1995.\nDéterminer en quelle année la population atteindra 20 millions d'habitants.",
        methodSteps: [
          "Étape 1 : Exprimer f(t) en fonction de t. f(t) = 4,75 · e^(at).",
          "Étape 2 : Déterminer la constante a avec f(5) = 5,5 :\n4,75 e^(5a) = 5,5 ⟺ e^(5a) = 5,5 / 4,75 = 22 / 19 ⟺ a = (1/5) ln(22/19).",
          "Étape 3 : Poser l'équation pour 20 millions : f(t) = 20 :\n4,75 e^(at) = 20 ⟺ e^(at) = 20 / 4,75 = 80 / 19 ⟺ at = ln(80/19).",
          "Étape 4 : Calculer t :\nt = ln(80/19) / a = 5 · ln(80/19) / ln(22/19) ≈ 5 × 1,4376 / 0,1466 ≈ 48 ans.",
          "Étape 5 : Convertir en année du calendrier :\nAnnée = 1990 + 48 = 2038."
        ],
        conclusion: "La population atteindra les 20 millions d'habitants au cours de l'année 2038."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Modélisations classiques par équations différentielles en Terminale",
        tableData: {
          headers: ["Domaine d'application", "Équation différentielle", "Solution physique / concrète", "Paramètres clés"],
          rows: [
            ["Démographie (Malthus)", "P'(t) = r · P(t)", "P(t) = P₀ · e^(rt)", "r > 0 : taux de natalité net"],
            ["Décroissance radioactive", "N'(t) = -λ · N(t)", "N(t) = N₀ · e^(-λt)", "λ > 0 : constante radioactive, T = ln 2 / λ"],
            ["Refroidissement de Newton", "θ'(t) = -k(θ - θ_amb)", "θ(t) = (θ₀ - θ_amb)e^(-kt) + θ_amb", "k > 0 : conductance thermique"],
            ["Oscillateur mécanique (LC / Ressort)", "x''(t) + ω₀² x(t) = 0", "x(t) = X_m · cos(ω₀t + φ)", "ω₀ = √(k/m) ou 1/√(LC)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_maths_c12_p4_ex1",
          type: "mcq",
          prompt: "Dans un processus de dissolution où f'(t) = a f(t) avec f(0) = 20 g et f(5) = 10 g, quelle est l'expression exacte de la constante a ?",
          options: [
            "a = - (ln 2) / 5",
            "a = (ln 2) / 5",
            "a = - 2 / 5",
            "a = - 5 ln 2"
          ],
          correctAnswerIndex: 0,
          explanation: "f(5) = 20 e^(5a) = 10 ⟺ e^(5a) = 1/2 ⟺ 5a = ln(1/2) = -ln 2 ⟺ a = -(ln 2) / 5."
        },
        {
          id: "tle_d_maths_c12_p4_ex2",
          type: "mcq",
          prompt: "D'après la loi de refroidissement de Newton, quelle est la limite de la température θ(t) du corps lorsque le temps t tend vers +∞ ?",
          options: [
            "La température ambiante θ_amb",
            "0 °C",
            "La température initiale θ(0)",
            "+∞"
          ],
          correctAnswerIndex: 0,
          explanation: "Puisque k² > 0, lim (t → +∞) e^(-k² t) = 0. Donc lim θ(t) = 0 + θ_amb = θ_amb (équilibre thermique avec le milieu extérieur)."
        },
        {
          id: "tle_d_maths_c12_p4_ex3",
          type: "mcq",
          prompt: "Pour la population modélisée par f(t) = 4,75 e^(at) avec a = (1/5) ln(22/19), en quelle année la population franchira-t-elle le cap des 20 millions (année d'origine 1990) ?",
          options: [
            "En 2038",
            "En 2025",
            "En 2050",
            "En 2015"
          ],
          correctAnswerIndex: 0,
          explanation: "La résolution donne t = 5 ln(80/19) / ln(22/19) ≈ 48 ans. 1990 + 48 = 2038."
        },
        {
          id: "tle_d_maths_c12_p4_ex4",
          type: "mcq",
          prompt: "Un échantillon radioactif vérifie N'(t) = -λ N(t). Au bout de combien de temps t_1/2 (demi-vie) la moitié des noyaux initiaux N₀ s'est-elle désintégrée ?",
          options: [
            "t_1/2 = (ln 2) / λ",
            "t_1/2 = λ / (ln 2)",
            "t_1/2 = 1 / (2λ)",
            "t_1/2 = 2 ln(λ)"
          ],
          correctAnswerIndex: 0,
          explanation: "N(t_1/2) = N₀ / 2 ⟺ N₀ e^(-λ t_1/2) = N₀ / 2 ⟺ e^(-λ t_1/2) = 1/2 ⟺ -λ t_1/2 = -ln 2 ⟺ t_1/2 = (ln 2) / λ."
        },
        {
          id: "tle_d_maths_c12_p4_ex5",
          type: "mcq",
          prompt: "En physique, quelle équation différentielle régit la charge q(t) d'un condensateur dans un circuit LC idéal sans résistance ?",
          options: [
            "q''(t) + (1 / (LC)) · q(t) = 0",
            "q'(t) + RC · q(t) = 0",
            "q''(t) - LC · q(t) = 0",
            "q''(t) + R · q'(t) = 0"
          ],
          correctAnswerIndex: 0,
          explanation: "Dans un circuit LC idéal, la loi des mailles donne u_L + u_C = 0 ⟺ L q''(t) + q(t)/C = 0 ⟺ q''(t) + (1/(LC)) q(t) = 0. C'est l'équation harmonique d'ordre 2."
        },
        {
          id: "tle_d_maths_c12_p4_ex6",
          type: "mcq",
          prompt: "Dans un modèle de refroidissement où θ(t) = 40 · e^((t/5) ln(3/4)) + 30, quelle est la température du corps au bout de t = 20 minutes ?",
          options: [
            "Environ 42,66 °C",
            "30 °C",
            "60 °C",
            "52,50 °C"
          ],
          correctAnswerIndex: 0,
          explanation: "Pour t = 20, (20/5) ln(3/4) = 4 ln(3/4) = ln((3/4)⁴) = ln(81/256). Donc θ(20) = 40 × (81/256) + 30 = 12,656 + 30 = 42,656 ≈ 42,66 °C."
        }
      ]
    }
  ]
};

