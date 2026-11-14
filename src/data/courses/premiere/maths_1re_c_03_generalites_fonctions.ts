import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 3 : Généralités sur les fonctions.pdf » (format v2).
export const MATHS_1RE_C_L03_GENERALITES_FONCTIONS: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l03_generalites_fonctions',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 3,
  title: 'Leçon 3 : Généralités sur les fonctions',
  summary:
    'Applications injectives, surjectives et bijectives, bijection réciproque et symétrie par rapport à y = x, restriction, opérations, comparaison, composition de fonctions et représentations de fonctions associées.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: '1ère C - Leçon 3 : Généralités sur les fonctions.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Applications et applications injectives
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01',
      order: 1,
      title: 'Applications et applications injectives',
      summary: 'Savoir définir une application et démontrer qu’elle est injective (ou non injective).',
      conceptExplanation:
        "Une **application** $f$ d'un ensemble $E$ (ensemble de départ) dans un ensemble $F$ (ensemble d'arrivée) associe à **tout** élément $x\\in E$ un unique élément $y=f(x)\\in F$ ($y$ est l'image de $x$, et $x$ est un antécédent de $y$).\n\nUne application $f: E \\to F$ est dite **injective** (ou est une injection) lorsque tout élément $y\\in F$ admet **au plus un antécédent** dans $E$ par $f$.\n\n**Deux méthodes pour prouver l'injectivité :**\n1. Montrer que pour tout $b\\in F$, l'équation $f(x)=b$ d'inconnue $x\\in E$ admet au plus une solution ($0$ ou $1$).\n2. Utiliser la caractérisation : pour tous $a, b \\in E$, $f(a)=f(b) \\implies a=b$.",
      keyRule:
        'Injective = au plus un antécédent. Pour le prouver : montrer que f(a) = f(b) ⇒ a = b (ou pour un contre-exemple, trouver a ≠ b avec f(a) = f(b)).',
      formulas: [
        { name: 'Caractérisation de l’injectivité', formula: '\\forall a,b \\in E,\\quad f(a) = f(b) \\implies a = b' },
      ],
      workedExample: {
        title: 'Montrer que f(x) = (2x + 1)/(x − 1) est injective sur ℝ\\{1}',
        statement: 'Soit $f: \\mathbb{R}\\setminus\\{1\\} \\to \\mathbb{R}$ définie par $f(x)=\\dfrac{2x+1}{x-1}$. Justifie que $f$ est injective.',
        methodSteps: [
          'Soient $a$ et $b$ deux réels de $\\mathbb{R}\\setminus\\{1\\}$ tels que $f(a)=f(b)$.',
          '$\\dfrac{2a+1}{a-1} = \\dfrac{2b+1}{b-1} \\implies (2a+1)(b-1) = (2b+1)(a-1)$.',
          'En développant : $2ab - 2a + b - 1 = 2ab + a - 2b - 1 \\implies 3a = 3b \\implies a = b$.',
        ],
        conclusion: 'Tout $a,b$ vérifiant $f(a)=f(b)$ vérifient $a=b$, donc $f$ est injective.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Application',
          stepTitle: 'Quand une fonction est-elle une application ?',
          paragraphText:
            'Une fonction $f: E \\to F$ est une application si et seulement si tout élément de $E$ possède une image dans $F$, c’est-à-dire $D_f = E$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q1',
            type: 'mcq',
            prompt: 'La fonction $g: x \\mapsto \\dfrac{1}{x}$ est-elle une application de $\\mathbb{R}$ dans $\\mathbb{R}$ ?',
            options: [
              'Oui, car $0$ a une image dans $\\mathbb{R}$',
              'Non, car $0 \\in \\mathbb{R}$ n’a pas d’image ; c’est une application de $\\mathbb{R}\\setminus\\{0\\}$ dans $\\mathbb{R}$',
              'Oui, car elle est croissante',
              'Non, car $g(x)$ ne peut pas être nul',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pour être une application sur $E$, il faut $D_g = E$. Or $D_g = \\mathbb{R}\\setminus\\{0\\} \\neq \\mathbb{R}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Injection',
          stepTitle: 'Tout élément de F a au plus un antécédent',
          paragraphText:
            '« Au plus un antécédent » signifie $0$ antécédent ou $1$ seul antécédent : deux éléments distincts de $E$ ne peuvent jamais avoir la même image.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q2',
            type: 'mcq',
            prompt: "Que signifie qu'une application $f: E \\to F$ est injective ?",
            options: [
              'Tout élément de $F$ admet au moins un antécédent dans $E$',
              'Tout élément de $F$ admet au plus un antécédent dans $E$',
              'Tout élément de $E$ admet deux images dans $F$',
              'Tout élément de $F$ admet exactement deux antécédents',
            ],
            correctAnswerIndex: 1,
            explanation: 'Une injection associe à des éléments distincts de $E$ des images distinctes : chaque $y\\in F$ a $0$ ou $1$ antécédent.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode 1',
          stepTheme: 'Équation f(x) = y',
          stepTitle: 'Résoudre f(x) = y sur l’ensemble de départ',
          paragraphText:
            'Pour $f: [0\\,;+\\infty[ \\to \\mathbb{R}$ définie par $f(x)=\\sqrt{x}+1$, on résout $\\sqrt{x}+1=y$ : si $y < 1$, aucune solution ; si $y\\ge 1$, une unique solution $x=(y-1)^2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q3',
            type: 'mcq',
            prompt: "Pour $f: [0\\,;+\\infty[ \\to \\mathbb{R}$ définie par $f(x)=\\sqrt{x}+1$, combien d'antécédents admet $y=0$ ?",
            options: [
              '$0$ antécédent, ce qui est compatible avec l’injectivité',
              '$1$ antécédent : $x=1$',
              '$2$ antécédents',
              '$0$ antécédent, donc $f$ n’est pas injective',
            ],
            correctAnswerIndex: 0,
            explanation: 'Pour $y=0$, $\\sqrt{x}=-1$ n’a aucune solution ($0$ antécédent). L’injectivité autorise $0$ ou $1$ antécédent !',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode 2',
          stepTheme: 'f(a) = f(b) ⇒ a = b',
          stepTitle: 'Utiliser l’implication f(a) = f(b) ⇒ a = b',
          paragraphText:
            'C’est la méthode la plus rapide pour les fonctions homographiques ou affines : on part de $f(a)=f(b)$ et on montre que $a=b$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q4',
            type: 'mcq',
            prompt: 'Soit $f: \\mathbb{R}\\setminus\\{1\\} \\to \\mathbb{R}$, $f(x)=\\dfrac{2x+1}{x-1}$. En partant de $f(a)=f(b)$, que donne le produit en croix simplifié ?',
            options: ['$a + b = 0$', '$3a = 3b$, donc $a = b$', '$ab = 1$', '$a = -b$'],
            correctAnswerIndex: 1,
            explanation: '$(2a+1)(b-1) = (2b+1)(a-1) \\iff 2ab-2a+b-1 = 2ab+a-2b-1 \\iff 3b = 3a \\iff a=b$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Contre-exemple',
          stepTitle: 'Attention à l’ensemble de départ pour x ↦ x²',
          paragraphText:
            'Une même expression peut être injective sur un domaine et non injective sur un autre ! Sur $\\mathbb{R}^*$ ou $\\mathbb{R}$, $f(-2)=f(2)=4$ donc $x\\mapsto x^2$ n’est pas injective.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q5',
            type: 'mcq',
            prompt: 'Sur lequel de ces ensembles de départ la fonction $x \\mapsto x^2$ N’est-ELLE PAS injective ?',
            options: ['$[0\\,;+\\infty[$', '$]-\\infty\\,;0]$', '$\\mathbb{R}^*$', '$[1\\,;+\\infty[$'],
            correctAnswerIndex: 2,
            explanation: 'Sur $\\mathbb{R}^*$, $1 \\neq -1$ mais $1^2 = (-1)^2 = 1$ : $1$ a deux antécédents ! Sur $[0;+\\infty[$ ou $]-\\infty;0]$, elle est injective.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Bilan',
          stepTheme: 'Injective, pas surjective',
          stepTitle: 'Injective mais pas surjective',
          paragraphText:
            'Dans $f: \\mathbb{R}\\setminus\\{-2\\} \\to \\mathbb{R}$, $f(x)=\\dfrac{5x+3}{x+2}$, l’équation $f(x)=y$ donne $x=\\dfrac{3-2y}{y-5}$ pour tout $y\\neq 5$, et aucune solution pour $y=5$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q6',
            type: 'mcq',
            prompt: 'Pour $f: \\mathbb{R}\\setminus\\{-2\\} \\to \\mathbb{R}$, $f(x)=\\dfrac{5x+3}{x+2}$, pourquoi $f$ est-elle injective ?',
            options: [
              'Parce que $5$ n’a aucun antécédent et tout $y\\neq 5$ en a un unique',
              'Parce que $5$ a une infinité d’antécédents',
              'Parce que $D_f = \\mathbb{R}$',
              'Parce que $f$ est décroissante',
            ],
            correctAnswerIndex: 0,
            explanation: 'Tout élément de $\\mathbb{R}$ a soit $0$ antécédent (pour $y=5$), soit $1$ unique antécédent ($y\\neq 5$), soit au plus un antécédent.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q1',
          type: 'mcq',
          prompt: 'La fonction $g: x \\mapsto \\dfrac{1}{x}$ est-elle une application de $\\mathbb{R}$ dans $\\mathbb{R}$ ?',
          options: [
            'Oui, car $0$ a une image dans $\\mathbb{R}$',
            'Non, car $0 \\in \\mathbb{R}$ n’a pas d’image ; c’est une application de $\\mathbb{R}\\setminus\\{0\\}$ dans $\\mathbb{R}$',
            'Oui, car elle est croissante',
            'Non, car $g(x)$ ne peut pas être nul',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pour être une application sur $E$, il faut $D_g = E$. Or $D_g = \\mathbb{R}\\setminus\\{0\\} \\neq \\mathbb{R}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q2',
          type: 'mcq',
          prompt: "Que signifie qu'une application $f: E \\to F$ est injective ?",
          options: [
            'Tout élément de $F$ admet au moins un antécédent dans $E$',
            'Tout élément de $F$ admet au plus un antécédent dans $E$',
            'Tout élément de $E$ admet deux images dans $F$',
            'Tout élément de $F$ admet exactement deux antécédents',
          ],
          correctAnswerIndex: 1,
          explanation: 'Une injection associe à des éléments distincts de $E$ des images distinctes : chaque $y\\in F$ a $0$ ou $1$ antécédent.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q3',
          type: 'mcq',
          prompt: "Pour $f: [0\\,;+\\infty[ \\to \\mathbb{R}$ définie par $f(x)=\\sqrt{x}+1$, combien d'antécédents admet $y=0$ ?",
          options: [
            '$0$ antécédent, ce qui est compatible avec l’injectivité',
            '$1$ antécédent : $x=1$',
            '$2$ antécédents',
            '$0$ antécédent, donc $f$ n’est pas injective',
          ],
          correctAnswerIndex: 0,
          explanation: 'Pour $y=0$, $\\sqrt{x}=-1$ n’a aucune solution ($0$ antécédent). L’injectivité autorise $0$ ou $1$ antécédent !',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q4',
          type: 'mcq',
          prompt: 'Soit $f: \\mathbb{R}\\setminus\\{1\\} \\to \\mathbb{R}$, $f(x)=\\dfrac{2x+1}{x-1}$. En partant de $f(a)=f(b)$, que donne le produit en croix simplifié ?',
          options: ['$a + b = 0$', '$3a = 3b$, donc $a = b$', '$ab = 1$', '$a = -b$'],
          correctAnswerIndex: 1,
          explanation: '$(2a+1)(b-1) = (2b+1)(a-1) \\iff 2ab-2a+b-1 = 2ab+a-2b-1 \\iff 3b = 3a \\iff a=b$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q5',
          type: 'mcq',
          prompt: 'Sur lequel de ces ensembles de départ la fonction $x \\mapsto x^2$ N’est-ELLE PAS injective ?',
          options: ['$[0\\,;+\\infty[$', '$]-\\infty\\,;0]$', '$\\mathbb{R}^*$', '$[1\\,;+\\infty[$'],
          correctAnswerIndex: 2,
          explanation: 'Sur $\\mathbb{R}^*$, $1 \\neq -1$ mais $1^2 = (-1)^2 = 1$ : $1$ a deux antécédents ! Sur $[0;+\\infty[$ ou $]-\\infty;0]$, elle est injective.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p01_q6',
          type: 'mcq',
          prompt: 'Pour $f: \\mathbb{R}\\setminus\\{-2\\} \\to \\mathbb{R}$, $f(x)=\\dfrac{5x+3}{x+2}$, pourquoi $f$ est-elle injective ?',
          options: [
            'Parce que $5$ n’a aucun antécédent et tout $y\\neq 5$ en a un unique',
            'Parce que $5$ a une infinité d’antécédents',
            'Parce que $D_f = \\mathbb{R}$',
            'Parce que $f$ est décroissante',
          ],
          correctAnswerIndex: 0,
          explanation: 'Tout élément de $\\mathbb{R}$ a soit $0$ antécédent (pour $y=5$), soit $1$ unique antécédent ($y\\neq 5$), soit au plus un antécédent.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Applications surjectives et bijectives
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02',
      order: 2,
      title: 'Applications surjectives et bijectives',
      summary: 'Démontrer qu’une application est surjective (≥ 1 antécédent) ou bijective (1 unique antécédent).',
      conceptExplanation:
        "- Une application $f: E \\to F$ est **surjective** lorsque tout élément $y\\in F$ admet **au moins un antécédent** dans $E$ (autrement dit, pour tout $b\\in F$, l'équation $f(x)=b$ admet au moins une solution dans $E$).\n- Une application $f: E \\to F$ est **bijective** (ou est une bijection) lorsque tout élément $y\\in F$ admet **un unique antécédent** dans $E$.\n\n**Propriété :** $f$ est bijective si et seulement si $f$ est **à la fois injective et surjective**.\n\n**Méthode graphique (sur un intervalle $K$ vers $L$) :** $f$ est bijective de $K$ vers $L$ si toute droite horizontale $y=b$ (avec $b\\in L$) coupe la courbe $(C_f)$ en un **unique** point d'abscisse dans $K$.",
      keyRule:
        'Surjective = au moins un antécédent ; Bijective = un unique antécédent (= injective ET surjective).',
      formulas: [
        { name: 'Bijection', formula: '\\text{Bijective} \\iff \\text{Injective et Surjective}' },
      ],
      workedExample: {
        title: 'Montrer que f: ℝ → [1; +∞[, f(x) = x² + 1 est surjective',
        statement: 'Soit $f: \\mathbb{R} \\to [1\\,;+\\infty[$ définie par $f(x)=x^2+1$. Justifie que $f$ est surjective.',
        methodSteps: [
          'Soit $y \\in [1\\,;+\\infty[$. On cherche $x \\in \\mathbb{R}$ tel que $f(x)=y$.',
          '$x^2 + 1 = y \\iff x^2 = y - 1$.',
          'Comme $y \\ge 1$, on a $y - 1 \\ge 0$, donc $x = \\sqrt{y-1}$ ou $x = -\\sqrt{y-1}$ sont solutions dans $\\mathbb{R}$.',
        ],
        conclusion: 'Tout $y \\in [1\\,;+\\infty[$ admet au moins un antécédent dans $\\mathbb{R}$, donc $f$ est surjective.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Surjection',
          stepTheme: 'Application surjective',
          stepTitle: 'Au moins un antécédent pour tout y de F',
          paragraphText:
            'Pour démontrer que $f: E \\to F$ est surjective, on prend un élément quelconque $b \\in F$ et on prouve que l’équation $f(x)=b$ a au moins une solution dans $E$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q1',
            type: 'mcq',
            prompt: "Pour $f: \\mathbb{R} \\to ]-\\infty\\,;1]$ définie par $f(x)=1-x^2$, quelles solutions a $f(x)=b$ pour tout $b\\in ]-\\infty\\,;1]$ ?",
            options: [
              'Aucune solution si $b < 1$',
              '$x = \\sqrt{1-b}$ ou $x = -\\sqrt{1-b}$ (car $1-b \\ge 0$), donc $f$ est surjective',
              'Uniquement $x = \\sqrt{b-1}$',
              '$x = 1 - b^2$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pour $b \\le 1$, on a $1-b \\ge 0$ : l’équation $1-x^2=b \\iff x^2=1-b$ admet au moins une solution réelle.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Surjective mais non injective',
          stepTitle: 'Surjective ne veut pas toujours dire bijective',
          paragraphText:
            "Dans $f: \\mathbb{R}\\to [1\\,;+\\infty[$, $f(x)=x^2+1$, $y=5$ admet deux antécédents ($2$ et $-2$). L'application est surjective, mais pas injective, donc pas bijective.",
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q2',
            type: 'mcq',
            prompt: "L'application $f: \\mathbb{R} \\to ]-\\infty\\,;1]$ définie par $f(x)=1-x^2$ est-elle bijective ?",
            options: [
              'Oui, car elle est surjective',
              'Non, car $0$ (par exemple) a deux antécédents : $-1$ et $1$',
              'Non, car $1$ n’a aucun antécédent',
              'Oui, car sa courbe est une parabole',
            ],
            correctAnswerIndex: 1,
            explanation: 'Elle est surjective sur $]-\\infty\\,;1]$, mais pas injective sur $\\mathbb{R}$ ($f(-1)=f(1)=0$), donc pas bijective.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Bijection',
          stepTheme: 'Application bijective',
          stepTitle: 'Un unique antécédent pour tout y de F',
          paragraphText:
            'Si on restreint le départ de $x\\mapsto x^2$ à $]-\\infty\\,;0]$ et qu’on choisit $[0\\,;+\\infty[$ à l’arrivée, chaque $y\\ge 0$ n’a plus qu’un **seul** antécédent négatif ou nul : $x=-\\sqrt{y}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q3',
            type: 'mcq',
            prompt: 'Soit $f: ]-\\infty\\,;0] \\to [0\\,;+\\infty[$ définie par $f(x)=x^2$. Pour $y\\in[0\\,;+\\infty[$, quel est l’unique antécédent de $y$ dans $]-\\infty\\,;0]$ ?',
            options: ['$x = \\sqrt{y}$', '$x = -\\sqrt{y}$', '$x = y^2$', '$x = -y^2$'],
            correctAnswerIndex: 1,
            explanation: '$x^2=y$ donne $x=\\sqrt{y}$ ou $x=-\\sqrt{y}$ ; comme $x\\in ]-\\infty\\,;0]$, on retient l’unique solution $x=-\\sqrt{y}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Graphique',
          stepTheme: 'Test de la droite horizontale',
          stepTitle: 'Vérifier graphiquement une bijection',
          paragraphText:
            'Une fonction représentée par $(C_f)$ sur un intervalle $K$ vers $f(K)$ est bijective si toute droite horizontale $y=b$ ($b\\in f(K)$) coupe $(C_f)$ en un seul point d’abscisse dans $K$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q4',
            type: 'mcq',
            prompt: 'Comment reconnaît-on graphiquement qu’une fonction $f: K \\to L$ est bijective ?',
            options: [
              'Toute droite verticale coupe $(C_f)$ en deux points',
              'Toute droite horizontale $y=b$ ($b\\in L$) coupe $(C_f)$ en un unique point d’abscisse dans $K$',
              'La courbe passe par l’origine $(0\\,;0)$',
              'La courbe est symétrique par rapport à $(OJ)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Chaque ordonnée $b\\in L$ correspond à une unique abscisse $x_0\\in K$, donc la droite $y=b$ coupe $(C_f)$ en exactement un point.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Contre-exemple',
          stepTheme: 'Injective, non surjective',
          stepTitle: 'Identifier pourquoi f(x) = (5x+3)/(x+2) vers ℝ échoue',
          paragraphText:
            'Pour $f: \\mathbb{R}\\setminus\\{-2\\} \\to \\mathbb{R}$, $f(x)=\\dfrac{5x+3}{x+2}$, l’équation $f(x)=5$ conduit à $5x+3=5x+10 \\iff 3=10$ : $5$ n’a pas d’antécédent !',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q5',
            type: 'mcq',
            prompt: 'Pour $f: \\mathbb{R}\\setminus\\{-2\\} \\to \\mathbb{R}$, $f(x)=\\dfrac{5x+3}{x+2}$, quel réel de l’ensemble d’arrivée n’a aucun antécédent ?',
            options: ['$-2$', '$0$', '$5$', '$\\dfrac{3}{2}$'],
            correctAnswerIndex: 2,
            explanation: '$f(x)=y \\iff x = \\dfrac{3-2y}{y-5}$, ce qui est impossible pour $y=5$. Donc $f$ n’est pas surjective sur $\\mathbb{R}$, ni bijective.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Bilan',
          stepTheme: 'Rendre bijective',
          stepTitle: 'Adapter les ensembles de départ et d’arrivée',
          paragraphText:
            'En retirant la valeur sans antécédent ($5$ ici, ou $2$ pour $\\frac{2x-3}{x-1}$), une application homographique devient bijective.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q6',
            type: 'mcq',
            prompt: 'Soit $g: \\mathbb{R}\\setminus\\{1\\} \\to \\mathbb{R}\\setminus\\{2\\}$ telle que $g(x)=\\dfrac{2x-3}{x-1}$. Pour tout $b\\in\\mathbb{R}\\setminus\\{2\\}$, quelle est l’unique solution de $g(x)=b$ ?',
            options: [
              '$x = \\dfrac{3-b}{2-b}$',
              '$x = \\dfrac{2b-3}{b-1}$',
              '$x = \\dfrac{3+b}{2+b}$',
              '$x = \\dfrac{b-3}{2-b}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\dfrac{2x-3}{x-1}=b \\iff 2x-3=bx-b \\iff x(2-b)=3-b \\iff x=\\dfrac{3-b}{2-b} \\in \\mathbb{R}\\setminus\\{1\\}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q1',
          type: 'mcq',
          prompt: "Pour $f: \\mathbb{R} \\to ]-\\infty\\,;1]$ définie par $f(x)=1-x^2$, quelles solutions a $f(x)=b$ pour tout $b\\in ]-\\infty\\,;1]$ ?",
          options: [
            'Aucune solution si $b < 1$',
            '$x = \\sqrt{1-b}$ ou $x = -\\sqrt{1-b}$ (car $1-b \\ge 0$), donc $f$ est surjective',
            'Uniquement $x = \\sqrt{b-1}$',
            '$x = 1 - b^2$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pour $b \\le 1$, on a $1-b \\ge 0$ : l’équation $1-x^2=b \\iff x^2=1-b$ admet au moins une solution réelle.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q2',
          type: 'mcq',
          prompt: "L'application $f: \\mathbb{R} \\to ]-\\infty\\,;1]$ définie par $f(x)=1-x^2$ est-elle bijective ?",
          options: [
            'Oui, car elle est surjective',
            'Non, car $0$ (par exemple) a deux antécédents : $-1$ et $1$',
            'Non, car $1$ n’a aucun antécédent',
            'Oui, car sa courbe est une parabole',
          ],
          correctAnswerIndex: 1,
          explanation: 'Elle est surjective sur $]-\\infty\\,;1]$, mais pas injective sur $\\mathbb{R}$ ($f(-1)=f(1)=0$), donc pas bijective.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q3',
          type: 'mcq',
          prompt: 'Soit $f: ]-\\infty\\,;0] \\to [0\\,;+\\infty[$ définie par $f(x)=x^2$. Pour $y\\in[0\\,;+\\infty[$, quel est l’unique antécédent de $y$ dans $]-\\infty\\,;0]$ ?',
          options: ['$x = \\sqrt{y}$', '$x = -\\sqrt{y}$', '$x = y^2$', '$x = -y^2$'],
          correctAnswerIndex: 1,
          explanation: '$x^2=y$ donne $x=\\sqrt{y}$ ou $x=-\\sqrt{y}$ ; comme $x\\in ]-\\infty\\,;0]$, on retient l’unique solution $x=-\\sqrt{y}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q4',
          type: 'mcq',
          prompt: 'Comment reconnaît-on graphiquement qu’une fonction $f: K \\to L$ est bijective ?',
          options: [
            'Toute droite verticale coupe $(C_f)$ en deux points',
            'Toute droite horizontale $y=b$ ($b\\in L$) coupe $(C_f)$ en un unique point d’abscisse dans $K$',
            'La courbe passe par l’origine $(0\\,;0)$',
            'La courbe est symétrique par rapport à $(OJ)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Chaque ordonnée $b\\in L$ correspond à une unique abscisse $x_0\\in K$, donc la droite $y=b$ coupe $(C_f)$ en exactement un point.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q5',
          type: 'mcq',
          prompt: 'Pour $f: \\mathbb{R}\\setminus\\{-2\\} \\to \\mathbb{R}$, $f(x)=\\dfrac{5x+3}{x+2}$, quel réel de l’ensemble d’arrivée n’a aucun antécédent ?',
          options: ['$-2$', '$0$', '$5$', '$\\dfrac{3}{2}$'],
          correctAnswerIndex: 2,
          explanation: '$f(x)=y \\iff x = \\dfrac{3-2y}{y-5}$, ce qui est impossible pour $y=5$. Donc $f$ n’est pas surjective sur $\\mathbb{R}$, ni bijective.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p02_q6',
          type: 'mcq',
          prompt: 'Soit $g: \\mathbb{R}\\setminus\\{1\\} \\to \\mathbb{R}\\setminus\\{2\\}$ telle que $g(x)=\\dfrac{2x-3}{x-1}$. Pour tout $b\\in\\mathbb{R}\\setminus\\{2\\}$, quelle est l’unique solution de $g(x)=b$ ?',
          options: [
            '$x = \\dfrac{3-b}{2-b}$',
            '$x = \\dfrac{2b-3}{b-1}$',
            '$x = \\dfrac{3+b}{2+b}$',
            '$x = \\dfrac{b-3}{2-b}$',
          ],
          correctAnswerIndex: 0,
          explanation: '$\\dfrac{2x-3}{x-1}=b \\iff 2x-3=bx-b \\iff x(2-b)=3-b \\iff x=\\dfrac{3-b}{2-b} \\in \\mathbb{R}\\setminus\\{1\\}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Bijection réciproque et symétrie graphique
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03',
      order: 3,
      title: 'Bijection réciproque et symétrie graphique',
      summary: 'Déterminer f⁻¹(x) et construire sa courbe par symétrie par rapport à la droite y = x.',
      conceptExplanation:
        "Soit $f: E \\to F$ une bijection. On appelle **bijection réciproque** de $f$, notée $f^{-1}$, l'application de $F$ dans $E$ qui à tout $y\\in F$ associe son unique antécédent $x\\in E$ par $f$ :\n$$y = f(x) \\iff x = f^{-1}(y).$$\nSi $f^{-1}$ est la bijection réciproque de $f$, alors $f$ est celle de $f^{-1}$.\n\n**Propriété graphique :** dans un repère orthonormé, les courbes représentatives $(C_f)$ et $(C_{f^{-1}})$ sont **symétriques par rapport à la première bissectrice** (la droite d'équation $y=x$).",
      keyRule:
        'Pour expliciter f⁻¹(x), on résout f(t) = x (en t ∈ E), puis on écrit f⁻¹(x) = t. Graphiquement, (Cf⁻¹) est le symétrique de (Cf) par rapport à y = x.',
      formulas: [
        { name: 'Bijection réciproque', formula: 'f^{-1}: F \\to E,\\quad f^{-1}(y) = x \\iff f(x) = y' },
        { name: 'Symétrie des courbes', formula: 'M(a\\,;b) \\in (C_f) \\iff M\'(b\\,;a) \\in (C_{f^{-1}})' },
      ],
      workedExample: {
        title: 'Expliciter f⁻¹ pour f(x) = x² − 2x − 3 sur ]−∞ ; 1]',
        statement: 'Soit $f: ]-\\infty\\,;1] \\to [-4\\,;+\\infty[$ définie par $f(x)=x^2-2x-3$. Montre que $f$ est bijective et explicite $f^{-1}(x)$.',
        methodSteps: [
          'Soit $y \\in [-4\\,;+\\infty[$ et $x \\in ]-\\infty\\,;1]$.',
          '$x^2 - 2x - 3 = y \\iff (x-1)^2 - 4 = y \\iff (x-1)^2 = y+4$.',
          'Comme $x \\le 1$, on a $x-1 \\le 0$, donc $x - 1 = -\\sqrt{y+4} \\iff x = 1 - \\sqrt{y+4}$.',
        ],
        conclusion: '$f$ est bijective et $f^{-1}: [-4\\,;+\\infty[ \\to ]-\\infty\\,;1]$ est donnée par $f^{-1}(x) = 1 - \\sqrt{x+4}$.',
      },
      visualSchema: {
        type: 'function_plot',
        title: 'Courbes de f(x) = √x et de sa réciproque f⁻¹(x) = x² sur ℝ⁺',
        caption: 'Symétrie par rapport à la première bissectrice y = x.',
        plot: {
          xMin: 0,
          xMax: 5,
          yMin: 0,
          yMax: 5,
          xStep: 1,
          yStep: 1,
          curves: [
            { label: 'f(x)=sqrt(x)', color: 'blue', pieces: [{ expr: 'sqrt(x)', from: 0, to: 5 }] },
            { label: 'f^-1(x)=x^2', color: 'orange', pieces: [{ expr: 'x^2', from: 0, to: 2.24 }] },
            { label: 'y=x', color: 'slate', pieces: [{ expr: 'x', from: 0, to: 5 }] },
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Sens de f⁻¹',
          stepTitle: 'Inverser ensemble de départ et ensemble d’arrivée',
          paragraphText:
            'Si $f$ va de $E$ vers $F$, alors $f^{-1}$ va en sens inverse : de $F$ vers $E$. Et la bijection réciproque de $f^{-1}$ est $f$ elle-même.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q1',
            type: 'mcq',
            prompt: 'Soit $f: ]-\\infty\\,;0] \\to [0\\,;+\\infty[$ définie par $f(x)=x^2$. Quels sont l’ensemble de départ, l’arrivée et l’expression de $f^{-1}$ ?',
            options: [
              '$f^{-1}: [0\\,;+\\infty[ \\to ]-\\infty\\,;0]$ et $f^{-1}(x) = \\sqrt{x}$',
              '$f^{-1}: [0\\,;+\\infty[ \\to ]-\\infty\\,;0]$ et $f^{-1}(x) = -\\sqrt{x}$',
              '$f^{-1}: ]-\\infty\\,;0] \\to [0\\,;+\\infty[$ et $f^{-1}(x) = -\\sqrt{x}$',
              '$f^{-1}(x) = \\dfrac{1}{x^2}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$f^{-1}$ va de $[0\\,;+\\infty[$ dans $]-\\infty\\,;0]$ et associe à $x\\ge 0$ son unique antécédent négatif ou nul : $-\\sqrt{x}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calculer f⁻¹(x)',
          stepTitle: 'Mettre sous forme canonique pour inverser un trinôme',
          paragraphText:
            'Pour inverser $x^2-2x-3=y$, on complète le carré : $x^2-2x-3 = (x-1)^2 - 4$, puis on choisit le signe devant $\\sqrt{y+4}$ selon l’intervalle de départ.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q2',
            type: 'mcq',
            prompt: 'Pour $f: ]-\\infty\\,;1] \\to [-4\\,;+\\infty[$, $f(x)=x^2-2x-3$, que vaut $f^{-1}(x)$ pour tout $x \\in [-4\\,;+\\infty[$ ?',
            options: [
              '$f^{-1}(x) = 1 + \\sqrt{x+4}$',
              '$f^{-1}(x) = 1 - \\sqrt{x+4}$',
              '$f^{-1}(x) = -1 - \\sqrt{x+4}$',
              '$f^{-1}(x) = \\sqrt{x^2-2x-3}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$(x-1)^2 = y+4$ et $x\\le 1 \\implies x-1\\le 0 \\implies x-1 = -\\sqrt{y+4}$, donc $f^{-1}(x) = 1 - \\sqrt{x+4}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Inverser une homographique',
          stepTitle: 'Réciproque d’une fonction rationnelle',
          paragraphText:
            'On résout $\\dfrac{2t-3}{t-1}=x$ en isolant $t$ en fonction de $x$, en veillant à préciser les nouveaux ensembles de départ et d’arrivée.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q3',
            type: 'mcq',
            prompt: 'Soit $g: \\mathbb{R}\\setminus\\{1\\} \\to \\mathbb{R}\\setminus\\{2\\}$, $g(x)=\\dfrac{2x-3}{x-1}$. Que vaut $g^{-1}(x)$ ?',
            options: [
              '$g^{-1}: \\mathbb{R}\\setminus\\{2\\} \\to \\mathbb{R}\\setminus\\{1\\}$, $g^{-1}(x) = \\dfrac{3-x}{2-x}$',
              '$g^{-1}: \\mathbb{R}\\setminus\\{1\\} \\to \\mathbb{R}\\setminus\\{2\\}$, $g^{-1}(x) = \\dfrac{x-1}{2x-3}$',
              '$g^{-1}: \\mathbb{R}\\setminus\\{2\\} \\to \\mathbb{R}\\setminus\\{1\\}$, $g^{-1}(x) = \\dfrac{3+x}{2+x}$',
              '$g^{-1}(x) = \\dfrac{2x-3}{x-1}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\dfrac{2t-3}{t-1}=x \\iff t(2-x) = 3-x \\iff t = \\dfrac{3-x}{2-x}$ pour tout $x \\in \\mathbb{R}\\setminus\\{2\\}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Graphique',
          stepTheme: 'Première bissectrice',
          stepTitle: 'Symétrie par rapport à la droite y = x',
          paragraphText:
            'Si le point $M(a\\,;b)$ appartient à $(C_f)$, alors $b=f(a) \\iff a=f^{-1}(b)$, donc le point $M\'(b\\,;a)$ appartient à $(C_{f^{-1}})$ : c’est le symétrique de $M$ par rapport à la droite $y=x$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q4',
            type: 'mcq',
            prompt: 'Dans un repère orthonormé, par quelle transformation passe-t-on de $(C_f)$ à $(C_{f^{-1}})$ ?',
            options: [
              'La symétrie orthogonale par rapport à l’axe $(OI)$',
              'La symétrie orthogonale par rapport à la droite d’équation $y=x$ (première bissectrice)',
              'La symétrie centrale de centre $O$',
              'La translation de vecteur $\\overrightarrow{OI}+\\overrightarrow{OJ}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Échanger $x$ et $y$ revient géométriquement à effectuer la symétrie par rapport à la première bissectrice $y=x$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Image d’un point par symétrie',
          stepTitle: 'Placer des points de (Cf⁻¹) à partir de (Cf)',
          paragraphText:
            'Pour tracer $(C_{f^{-1}})$, il suffit de lire quelques points $(x\\,;y)$ sur $(C_f)$ et de placer leurs symétriques $(y\\,;x)$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q5',
            type: 'mcq',
            prompt: 'La courbe $(C_f)$ d’une bijection passe par les points $(0\\,;1)$ et $(2\\,;4)$. Par quels points passe obligatoirement $(C_{f^{-1}})$ ?',
            options: [
              '$(0\\,;-1)$ et $(2\\,;-4)$',
              '$(1\\,;0)$ et $(4\\,;2)$',
              '$(-1\\,;0)$ et $(-4\\,;-2)$',
              '$(0\\,;1)$ et $(2\\,;4)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Par symétrie par rapport à $y=x$, $(0\\,;1) \\mapsto (1\\,;0)$ et $(2\\,;4) \\mapsto (4\\,;2)$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Notation f⁻¹ vs 1/f',
          stepTitle: 'Ne pas confondre f⁻¹(x) et 1/f(x)',
          paragraphText:
            'Attention ! $f^{-1}(x)$ désigne la **bijection réciproque** (fonction qui « défait » $f$), jamais l’inverse numérique $\\dfrac{1}{f(x)}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q6',
            type: 'mcq',
            prompt: 'Si $f: \\mathbb{R}^+ \\to \\mathbb{R}^+$ est définie par $f(x)=\\sqrt{x}$, que vaut $f^{-1}(3)$ ?',
            options: ['$\\dfrac{1}{\\sqrt{3}}$', '$9$', '$\\sqrt{3}$', '$-3$'],
            correctAnswerIndex: 1,
            explanation: 'La bijection réciproque de $\\sqrt{x}$ sur $\\mathbb{R}^+$ est $f^{-1}(x)=x^2$, donc $f^{-1}(3) = 3^2 = 9$ (et non $1/\\sqrt{3}$).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q1',
          type: 'mcq',
          prompt: 'Soit $f: ]-\\infty\\,;0] \\to [0\\,;+\\infty[$ définie par $f(x)=x^2$. Quels sont l’ensemble de départ, l’arrivée et l’expression de $f^{-1}$ ?',
          options: [
            '$f^{-1}: [0\\,;+\\infty[ \\to ]-\\infty\\,;0]$ et $f^{-1}(x) = \\sqrt{x}$',
            '$f^{-1}: [0\\,;+\\infty[ \\to ]-\\infty\\,;0]$ et $f^{-1}(x) = -\\sqrt{x}$',
            '$f^{-1}: ]-\\infty\\,;0] \\to [0\\,;+\\infty[$ et $f^{-1}(x) = -\\sqrt{x}$',
            '$f^{-1}(x) = \\dfrac{1}{x^2}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$f^{-1}$ va de $[0\\,;+\\infty[$ dans $]-\\infty\\,;0]$ et associe à $x\\ge 0$ son unique antécédent négatif ou nul : $-\\sqrt{x}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q2',
          type: 'mcq',
          prompt: 'Pour $f: ]-\\infty\\,;1] \\to [-4\\,;+\\infty[$, $f(x)=x^2-2x-3$, que vaut $f^{-1}(x)$ pour tout $x \\in [-4\\,;+\\infty[$ ?',
          options: [
            '$f^{-1}(x) = 1 + \\sqrt{x+4}$',
            '$f^{-1}(x) = 1 - \\sqrt{x+4}$',
            '$f^{-1}(x) = -1 - \\sqrt{x+4}$',
            '$f^{-1}(x) = \\sqrt{x^2-2x-3}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$(x-1)^2 = y+4$ et $x\\le 1 \\implies x-1\\le 0 \\implies x-1 = -\\sqrt{y+4}$, donc $f^{-1}(x) = 1 - \\sqrt{x+4}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q3',
          type: 'mcq',
          prompt: 'Soit $g: \\mathbb{R}\\setminus\\{1\\} \\to \\mathbb{R}\\setminus\\{2\\}$, $g(x)=\\dfrac{2x-3}{x-1}$. Que vaut $g^{-1}(x)$ ?',
          options: [
            '$g^{-1}: \\mathbb{R}\\setminus\\{2\\} \\to \\mathbb{R}\\setminus\\{1\\}$, $g^{-1}(x) = \\dfrac{3-x}{2-x}$',
            '$g^{-1}: \\mathbb{R}\\setminus\\{1\\} \\to \\mathbb{R}\\setminus\\{2\\}$, $g^{-1}(x) = \\dfrac{x-1}{2x-3}$',
            '$g^{-1}: \\mathbb{R}\\setminus\\{2\\} \\to \\mathbb{R}\\setminus\\{1\\}$, $g^{-1}(x) = \\dfrac{3+x}{2+x}$',
            '$g^{-1}(x) = \\dfrac{2x-3}{x-1}$',
          ],
          correctAnswerIndex: 0,
          explanation: '$\\dfrac{2t-3}{t-1}=x \\iff t(2-x) = 3-x \\iff t = \\dfrac{3-x}{2-x}$ pour tout $x \\in \\mathbb{R}\\setminus\\{2\\}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q4',
          type: 'mcq',
          prompt: 'Dans un repère orthonormé, par quelle transformation passe-t-on de $(C_f)$ à $(C_{f^{-1}})$ ?',
          options: [
            'La symétrie orthogonale par rapport à l’axe $(OI)$',
            'La symétrie orthogonale par rapport à la droite d’équation $y=x$ (première bissectrice)',
            'La symétrie centrale de centre $O$',
            'La translation de vecteur $\\overrightarrow{OI}+\\overrightarrow{OJ}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Échanger $x$ et $y$ revient géométriquement à effectuer la symétrie par rapport à la première bissectrice $y=x$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q5',
          type: 'mcq',
          prompt: 'La courbe $(C_f)$ d’une bijection passe par les points $(0\\,;1)$ et $(2\\,;4)$. Par quels points passe obligatoirement $(C_{f^{-1}})$ ?',
          options: [
            '$(0\\,;-1)$ et $(2\\,;-4)$',
            '$(1\\,;0)$ et $(4\\,;2)$',
            '$(-1\\,;0)$ et $(-4\\,;-2)$',
            '$(0\\,;1)$ et $(2\\,;4)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Par symétrie par rapport à $y=x$, $(0\\,;1) \\mapsto (1\\,;0)$ et $(2\\,;4) \\mapsto (4\\,;2)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p03_q6',
          type: 'mcq',
          prompt: 'Si $f: \\mathbb{R}^+ \\to \\mathbb{R}^+$ est définie par $f(x)=\\sqrt{x}$, que vaut $f^{-1}(3)$ ?',
          options: ['$\\dfrac{1}{\\sqrt{3}}$', '$9$', '$\\sqrt{3}$', '$-3$'],
          correctAnswerIndex: 1,
          explanation: 'La bijection réciproque de $\\sqrt{x}$ sur $\\mathbb{R}^+$ est $f^{-1}(x)=x^2$, donc $f^{-1}(3) = 3^2 = 9$ (et non $1/\\sqrt{3}$).',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Restriction et opérations sur les fonctions
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04',
      order: 4,
      title: 'Restriction et opérations sur les fonctions',
      summary: 'Déterminer la restriction d’une fonction à un sous-ensemble et les ensembles de définition de f+g, fg, f/g.',
      conceptExplanation:
        "**Restriction :** soit $f: E \\to F$ une fonction et $A$ une partie non vide de $D_f$. On appelle restriction de $f$ à $A$ l'application $g: A \\to F$ définie pour tout $x\\in A$ par $g(x)=f(x)$.\n\n**Opérations sur deux fonctions $f$ et $g$ de $\\mathbb{R}$ vers $\\mathbb{R}$ :**\n- Somme $f+g$ : $D_{f+g} = D_f \\cap D_g$ et $(f+g)(x)=f(x)+g(x)$.\n- Produit $fg$ : $D_{fg} = D_f \\cap D_g$ et $(fg)(x)=f(x)\\times g(x)$.\n- Quotient $\\dfrac{f}{g}$ : $D_{\\frac{f}{g}} = D_f \\cap D_g \\cap \\{x\\in\\mathbb{R} \\mid g(x)\\neq 0\\}$ et $\\left(\\dfrac{f}{g}\\right)(x)=\\dfrac{f(x)}{g(x)}$.",
      keyRule:
        'Toujours déterminer D_{f+g}, D_{fg} ou D_{f/g} AVANT de simplifier algébriquement les expressions !',
      formulas: [
        { name: 'Ensemble de définition (somme/produit)', formula: 'D_{f+g} = D_{fg} = D_f \\cap D_g' },
        { name: 'Ensemble de définition (quotient)', formula: 'D_{f/g} = D_f \\cap D_g \\cap \\{x \\mid g(x)\\neq 0\\}' },
      ],
      workedExample: {
        title: 'Restriction de h(x) = 3 − |2 − x| à ]−∞ ; 2]',
        statement: 'Soit $h(x) = 3 - |2-x|$ sur $\\mathbb{R}$. Détermine la restriction $f$ de $h$ à $]-\\infty\\,;2]$.',
        methodSteps: [
          'Pour $x \\in ]-\\infty\\,;2]$, on a $x \\le 2$, donc $2 - x \\ge 0$.',
          'D’après la définition de la valeur absolue, $|2-x| = 2-x$ sur $]-\\infty\\,;2]$.',
          'Donc $f(x) = 3 - (2-x) = x + 1$.',
        ],
        conclusion: 'La restriction de $h$ à $]-\\infty\\,;2]$ est $f(x) = x + 1$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Restriction',
          stepTheme: 'Restriction par morceaux',
          stepTitle: 'Lire la restriction d’une fonction définie par morceaux',
          paragraphText:
            'Lorsqu’une fonction $f$ a des formules différentes sur deux intervalles, sa restriction à un intervalle donné est simplement la formule valable sur cet intervalle.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q1',
            type: 'mcq',
            prompt:
              'Soit $f(x) = x+1$ si $x\\le 1$ et $f(x) = \\sqrt{x+3}$ si $x>1$. Quelle est la restriction de $f$ à $]1\\,;+\\infty[$ ?',
            options: [
              '$g(x) = x+1$ sur $]1\\,;+\\infty[$',
              '$h(x) = \\sqrt{x+3}$ sur $]1\\,;+\\infty[$',
              '$h(x) = x+1+\\sqrt{x+3}$',
              '$h(x) = \\sqrt{x+1}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Sur $]1\\,;+\\infty[$, on a $x>1$, donc $f(x)$ coïncide avec $h(x) = \\sqrt{x+3}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Valeur absolue',
          stepTheme: 'Simplifier |2 − x|',
          stepTitle: 'Restriction d’une fonction avec valeur absolue',
          paragraphText:
            'Pour exprimer une fonction avec $|A(x)|$ sans valeur absolue sur un intervalle, on étudie le signe de $A(x)$ sur cet intervalle.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q2',
            type: 'mcq',
            prompt: 'Soit $h(x) = 3 - |2-x|$ sur $\\mathbb{R}$. Quelle est l’expression de sa restriction à $[2\\,;+\\infty[$ ?',
            options: ['$x + 1$', '$5 - x$', '$x - 5$', '$1 - x$'],
            correctAnswerIndex: 1,
            explanation: 'Sur $[2\\,;+\\infty[$, $2-x \\le 0$ donc $|2-x| = -(2-x) = x-2$. Ainsi $h(x) = 3 - (x-2) = 5 - x$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Domaine avant simplification',
          stepTitle: 'Ne pas oublier la valeur interdite après simplification !',
          paragraphText:
            'Si $f(x)=\\dfrac{x+1}{x-1}$ et $g(x)=x-1$, le produit vaut $(fg)(x)=x+1$, mais son domaine reste $D_f\\cap D_g = \\mathbb{R}\\setminus\\{1\\}$, jamais $\\mathbb{R}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q3',
            type: 'mcq',
            prompt: 'Soient $f(x)=\\dfrac{x+1}{x-1}$ et $g(x)=x-1$. Quel est l’ensemble de définition $D_{fg}$ et l’expression de $(fg)(x)$ ?',
            options: [
              '$D_{fg} = \\mathbb{R}$ et $(fg)(x)=x+1$',
              '$D_{fg} = \\mathbb{R}\\setminus\\{1\\}$ et $(fg)(x)=x+1$',
              '$D_{fg} = \\mathbb{R}\\setminus\\{-1\\,;1\\}$ et $(fg)(x)=x+1$',
              '$D_{fg} = \\mathbb{R}\\setminus\\{1\\}$ et $(fg)(x)=\\dfrac{x+1}{x-1}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$D_f = \\mathbb{R}\\setminus\\{1\\}$ et $D_g = \\mathbb{R}$, donc $D_{fg} = D_f \\cap D_g = \\mathbb{R}\\setminus\\{1\\}$. Pour $x\\neq 1$, $(fg)(x)=x+1$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Opérations',
          stepTheme: 'Intersection des domaines',
          stepTitle: 'Domaine de f + g, f − g et f × g',
          paragraphText:
            'Soient $f(x)=\\sqrt{x-1}$ ($D_f = [1\\,;+\\infty[$) et $g(x)=\\dfrac{x^2+1}{\\sqrt{x-1}}$ ($D_g = ]1\\,;+\\infty[$). Leur intersection est $]1\\,;+\\infty[$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q4',
            type: 'mcq',
            prompt: 'Avec $f(x)=\\sqrt{x-1}$ et $g(x)=\\dfrac{x^2+1}{\\sqrt{x-1}}$, que vaut $D_{f+g}$ et que vaut $(f+g)(x)$ ?',
            options: [
              '$D_{f+g} = [1\\,;+\\infty[$ et $(f+g)(x) = \\dfrac{x^2+x}{\\sqrt{x-1}}$',
              '$D_{f+g} = ]1\\,;+\\infty[$ et $(f+g)(x) = \\dfrac{x^2+x}{\\sqrt{x-1}}$',
              '$D_{f+g} = ]1\\,;+\\infty[$ et $(f+g)(x) = \\dfrac{x^2+2}{\\sqrt{x-1}}$',
              '$D_{f+g} = \\mathbb{R}\\setminus\\{1\\}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$D_f\\cap D_g = ]1\\,;+\\infty[$ et $\\sqrt{x-1} + \\dfrac{x^2+1}{\\sqrt{x-1}} = \\dfrac{(x-1)+x^2+1}{\\sqrt{x-1}} = \\dfrac{x^2+x}{\\sqrt{x-1}}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Quotient',
          stepTheme: 'Calculer (f/g)(x)',
          stepTitle: 'Simplifier le quotient f / g',
          paragraphText:
            'Diviser par $g(x) = \\dfrac{x^2+1}{\\sqrt{x-1}}$ revient à multiplier par son inverse $\\dfrac{\\sqrt{x-1}}{x^2+1}$ (ici $x^2+1\\neq 0$ pour tout $x$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q5',
            type: 'mcq',
            prompt: 'Toujours avec $f(x)=\\sqrt{x-1}$ et $g(x)=\\dfrac{x^2+1}{\\sqrt{x-1}}$, que vaut $\\left(\\dfrac{f}{g}\\right)(x)$ sur $]1\\,;+\\infty[$ ?',
            options: [
              '$\\dfrac{x-1}{x^2+1}$',
              '$\\dfrac{x^2+1}{x-1}$',
              '$x^2+1$',
              '$\\dfrac{1}{x^2+1}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\dfrac{f(x)}{g(x)} = \\sqrt{x-1} \\times \\dfrac{\\sqrt{x-1}}{x^2+1} = \\dfrac{x-1}{x^2+1}$ sur $]1\\,;+\\infty[$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Différence',
          stepTheme: 'Calculer (f−g)(x)',
          stepTitle: 'Attention au signe moins devant le numérateur',
          paragraphText:
            'Lorsqu’on calcule $(f-g)(x)$ au même dénominateur, le signe moins s’applique à **tout** le numérateur de $g$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q6',
            type: 'mcq',
            prompt: 'Avec $f(x)=\\sqrt{x-1}$ et $g(x)=\\dfrac{x^2+1}{\\sqrt{x-1}}$, que vaut $(f-g)(x)$ sur $]1\\,;+\\infty[$ ?',
            options: [
              '$\\dfrac{-x^2+x-2}{\\sqrt{x-1}}$',
              '$\\dfrac{-x^2+x}{\\sqrt{x-1}}$',
              '$\\dfrac{x^2-x+2}{\\sqrt{x-1}}$',
              '$\\dfrac{x-x^2-1}{\\sqrt{x-1}}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$(f-g)(x) = \\dfrac{(x-1)-(x^2+1)}{\\sqrt{x-1}} = \\dfrac{-x^2+x-2}{\\sqrt{x-1}}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q1',
          type: 'mcq',
          prompt:
            'Soit $f(x) = x+1$ si $x\\le 1$ et $f(x) = \\sqrt{x+3}$ si $x>1$. Quelle est la restriction de $f$ à $]1\\,;+\\infty[$ ?',
          options: [
            '$g(x) = x+1$ sur $]1\\,;+\\infty[$',
            '$h(x) = \\sqrt{x+3}$ sur $]1\\,;+\\infty[$',
            '$h(x) = x+1+\\sqrt{x+3}$',
            '$h(x) = \\sqrt{x+1}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Sur $]1\\,;+\\infty[$, on a $x>1$, donc $f(x)$ coïncide avec $h(x) = \\sqrt{x+3}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q2',
          type: 'mcq',
          prompt: 'Soit $h(x) = 3 - |2-x|$ sur $\\mathbb{R}$. Quelle est l’expression de sa restriction à $[2\\,;+\\infty[$ ?',
          options: ['$x + 1$', '$5 - x$', '$x - 5$', '$1 - x$'],
          correctAnswerIndex: 1,
          explanation: 'Sur $[2\\,;+\\infty[$, $2-x \\le 0$ donc $|2-x| = -(2-x) = x-2$. Ainsi $h(x) = 3 - (x-2) = 5 - x$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q3',
          type: 'mcq',
          prompt: 'Soient $f(x)=\\dfrac{x+1}{x-1}$ et $g(x)=x-1$. Quel est l’ensemble de définition $D_{fg}$ et l’expression de $(fg)(x)$ ?',
          options: [
            '$D_{fg} = \\mathbb{R}$ et $(fg)(x)=x+1$',
            '$D_{fg} = \\mathbb{R}\\setminus\\{1\\}$ et $(fg)(x)=x+1$',
            '$D_{fg} = \\mathbb{R}\\setminus\\{-1\\,;1\\}$ et $(fg)(x)=x+1$',
            '$D_{fg} = \\mathbb{R}\\setminus\\{1\\}$ et $(fg)(x)=\\dfrac{x+1}{x-1}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$D_f = \\mathbb{R}\\setminus\\{1\\}$ et $D_g = \\mathbb{R}$, donc $D_{fg} = D_f \\cap D_g = \\mathbb{R}\\setminus\\{1\\}$. Pour $x\\neq 1$, $(fg)(x)=x+1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q4',
          type: 'mcq',
          prompt: 'Avec $f(x)=\\sqrt{x-1}$ et $g(x)=\\dfrac{x^2+1}{\\sqrt{x-1}}$, que vaut $D_{f+g}$ et que vaut $(f+g)(x)$ ?',
          options: [
            '$D_{f+g} = [1\\,;+\\infty[$ et $(f+g)(x) = \\dfrac{x^2+x}{\\sqrt{x-1}}$',
            '$D_{f+g} = ]1\\,;+\\infty[$ et $(f+g)(x) = \\dfrac{x^2+x}{\\sqrt{x-1}}$',
            '$D_{f+g} = ]1\\,;+\\infty[$ et $(f+g)(x) = \\dfrac{x^2+2}{\\sqrt{x-1}}$',
            '$D_{f+g} = \\mathbb{R}\\setminus\\{1\\}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$D_f\\cap D_g = ]1\\,;+\\infty[$ et $\\sqrt{x-1} + \\dfrac{x^2+1}{\\sqrt{x-1}} = \\dfrac{(x-1)+x^2+1}{\\sqrt{x-1}} = \\dfrac{x^2+x}{\\sqrt{x-1}}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q5',
          type: 'mcq',
          prompt: 'Toujours avec $f(x)=\\sqrt{x-1}$ et $g(x)=\\dfrac{x^2+1}{\\sqrt{x-1}}$, que vaut $\\left(\\dfrac{f}{g}\\right)(x)$ sur $]1\\,;+\\infty[$ ?',
          options: [
            '$\\dfrac{x-1}{x^2+1}$',
            '$\\dfrac{x^2+1}{x-1}$',
            '$x^2+1$',
            '$\\dfrac{1}{x^2+1}$',
          ],
          correctAnswerIndex: 0,
          explanation: '$\\dfrac{f(x)}{g(x)} = \\sqrt{x-1} \\times \\dfrac{\\sqrt{x-1}}{x^2+1} = \\dfrac{x-1}{x^2+1}$ sur $]1\\,;+\\infty[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p04_q6',
          type: 'mcq',
          prompt: 'Avec $f(x)=\\sqrt{x-1}$ et $g(x)=\\dfrac{x^2+1}{\\sqrt{x-1}}$, que vaut $(f-g)(x)$ sur $]1\\,;+\\infty[$ ?',
          options: [
            '$\\dfrac{-x^2+x-2}{\\sqrt{x-1}}$',
            '$\\dfrac{-x^2+x}{\\sqrt{x-1}}$',
            '$\\dfrac{x^2-x+2}{\\sqrt{x-1}}$',
            '$\\dfrac{x-x^2-1}{\\sqrt{x-1}}$',
          ],
          correctAnswerIndex: 0,
          explanation: '$(f-g)(x) = \\dfrac{(x-1)-(x^2+1)}{\\sqrt{x-1}} = \\dfrac{-x^2+x-2}{\\sqrt{x-1}}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Comparaison de deux fonctions
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05',
      order: 5,
      title: 'Comparaison de deux fonctions',
      summary: 'Comparer f et g sur un intervalle I algébriquement (signe de f(x) − g(x)) ou graphiquement.',
      conceptExplanation:
        "Soient $f$ et $g$ deux fonctions définies sur un intervalle $I$ de $\\mathbb{R}$.\n- $f \\le g$ sur $I$ signifie que pour tout $x\\in I$, $f(x) \\le g(x)$.\n- $f \\ge g$ sur $I$ signifie que pour tout $x\\in I$, $f(x) \\ge g(x)$.\n\n**Méthode algébrique :** on calcule la différence $f(x)-g(x)$ puis on étudie son signe sur $I$ :\n- si $f(x)-g(x)\\le 0$ sur $I$, alors $f\\le g$ sur $I$ ;\n- si $f(x)-g(x)\\ge 0$ sur $I$, alors $f\\ge g$ sur $I$.\n\n**Méthode graphique :** $(C_f)$ au-dessous de $(C_g)$ sur $I$ signifie $f\\le g$ ; $(C_f)$ au-dessus de $(C_g)$ sur $I$ signifie $f\\ge g$.",
      keyRule:
        'Pour comparer f et g sur I, étudie toujours le signe de f(x) − g(x) (et pense aux identités remarquables ou au discriminant !).',
      formulas: [
        { name: 'Méthode de la différence', formula: 'f(x) - g(x) \\ge 0 \\text{ sur } I \\iff f \\ge g \\text{ sur } I' },
      ],
      workedExample: {
        title: 'Justifier que ∀x ∈ ℝ, x² + 1 ≥ 2x',
        statement: 'Justifie que pour tout réel $x$, $x^2+1 \\ge 2x$.',
        methodSteps: [
          'Pour tout $x\\in\\mathbb{R}$, on calcule la différence : $(x^2+1) - 2x = x^2 - 2x + 1$.',
          'On reconnaît une identité remarquable : $x^2 - 2x + 1 = (x-1)^2$.',
          'Un carré est toujours positif ou nul : $(x-1)^2 \\ge 0$.',
        ],
        conclusion: 'Ainsi $x^2 + 1 - 2x \\ge 0$, donc $\\forall x\\in\\mathbb{R}$, $x^2+1 \\ge 2x$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'f ≤ g sur I',
          stepTitle: 'Sens de f ≤ g et f ≥ g sur un intervalle',
          paragraphText:
            'Dire que $f \\le g$ sur $I$ signifie que **pour chaque** $x\\in I$, l’inégalité $f(x)\\le g(x)$ est vraie (il ne suffit pas qu’elle soit vraie en un point !).',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q1',
            type: 'mcq',
            prompt: 'Que faut-il montrer pour prouver que $f \\ge g$ sur un intervalle $I$ ?',
            options: [
              'Il existe un réel $x_0\\in I$ tel que $f(x_0)\\ge g(x_0)$',
              'Pour tout $x\\in I$, $f(x) - g(x) \\ge 0$',
              'Pour tout $x\\in I$, $f(x) > 0$ et $g(x) > 0$',
              '$f(0) \\ge g(0)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Par définition, $f\\ge g$ sur $I$ équivaut à $\\forall x\\in I$, $f(x)\\ge g(x)$, soit $f(x)-g(x)\\ge 0$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Forme canonique',
          stepTheme: 'Majorant d’un trinôme',
          stepTitle: 'Utiliser la forme canonique pour majorer f(x)',
          paragraphText:
            'Pour montrer $f(x) \\le 3$ quand $f(x)=2-x^2+2x$, on met sous forme canonique : $f(x) = 3 - (x-1)^2$, puis on étudie $f(x)-3 = -(x-1)^2 \\le 0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q2',
            type: 'mcq',
            prompt: 'Comment s’écrit $f(x) = 2 - x^2 + 2x$ sous forme canonique, et que vaut $f(x) - 3$ ?',
            options: [
              '$f(x) = 3 - (x-1)^2$ et $f(x)-3 = -(x-1)^2 \\le 0$',
              '$f(x) = 3 - (x+1)^2$ et $f(x)-3 = -(x+1)^2 \\le 0$',
              '$f(x) = 1 - (x-1)^2$ et $f(x)-3 = -(x-1)^2 - 2$',
              '$f(x) = 3 + (x-1)^2$ et $f(x)-3 = (x-1)^2 \\ge 0$',
            ],
            correctAnswerIndex: 0,
            explanation: '$-(x^2-2x)+2 = -(x^2-2x+1-1)+2 = -(x-1)^2+3$, donc $f(x)-3 = -(x-1)^2 \\le 0$, d’où $f(x)\\le 3$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Graphique',
          stepTheme: 'Position des courbes',
          stepTitle: 'Traduire la position relative de (Cf) et (Cg)',
          paragraphText:
            'Graphiquement, comparer deux fonctions sur un intervalle revient à regarder quelle courbe est au-dessus de l’autre.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q3',
            type: 'mcq',
            prompt: 'Sur l’intervalle $[0\\,;1]$, la courbe de $f(x)=x^2$ est située au-dessous de celle de $g(x)=x$. Qu’en déduit-on ?',
            options: [
              '$f \\ge g$ sur $[0\\,;1]$',
              '$f \\le g$ sur $[0\\,;1]$',
              '$f = g$ sur $[0\\,;1]$',
              'On ne peut pas comparer $f$ et $g$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Si $(C_f)$ est au-dessous de $(C_g)$ sur $I$, alors pour tout $x\\in I$, $f(x)\\le g(x)$, soit $f\\le g$ sur $I$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Tableau de signes',
          stepTheme: 'Comparer sur plusieurs intervalles',
          stepTitle: 'Quand f − g change de signe',
          paragraphText:
            'Lorsque $f(x)-g(x)$ change de signe, l’ordre entre $f$ et $g$ s’inverse d’un intervalle à l’autre.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q4',
            type: 'mcq',
            prompt: 'Sur quel intervalle a-t-on $x^2 \\ge x$ pour $x \\in \\mathbb{R}$ ?',
            options: [
              '$[0\\,;1]$',
              '$]-\\infty\\,;0] \\cup [1\\,;+\\infty[$',
              '$]0\\,;1[$',
              '$[1\\,;+\\infty[$ uniquement',
            ],
            correctAnswerIndex: 1,
            explanation: '$x^2 - x = x(x-1) \\ge 0$ pour $x \\le 0$ ou $x \\ge 1$, c’est-à-dire à l’extérieur des racines $0$ et $1$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Discriminant',
          stepTheme: 'Inégalité vraie sur ℝ',
          stepTitle: 'Utiliser le discriminant pour comparer deux trinômes',
          paragraphText:
            'Si $f(x)-g(x) = ax^2+bx+c$ avec $\\Delta < 0$ et $a>0$, alors $f(x)-g(x) > 0$ sur tout $\\mathbb{R}$, donc $f > g$ sur $\\mathbb{R}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q5',
            type: 'mcq',
            prompt: 'Compare $f(x) = x^2 + 3$ et $g(x) = 2x + 1$ sur $\\mathbb{R}$.',
            options: [
              '$f(x) > g(x)$ pour tout $x\\in\\mathbb{R}$',
              '$f(x) < g(x)$ pour tout $x\\in\\mathbb{R}$',
              '$f(x) \\ge g(x)$ seulement pour $x\\ge 1$',
              '$f$ et $g$ se coupent en deux points',
            ],
            correctAnswerIndex: 0,
            explanation: '$f(x)-g(x) = x^2 - 2x + 2 = (x-1)^2 + 1 \\ge 1 > 0$ pour tout $x\\in\\mathbb{R}$, donc $f > g$ sur $\\mathbb{R}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Signe du produit vs signe de la différence',
          stepTitle: 'Attention aux inégalités avec fraction : mettre au même dénominateur',
          paragraphText:
            'Pour comparer $\\dfrac{1}{x}$ et $1$, ne jamais multiplier par $x$ sans connaître son signe : on étudie le signe de $\\dfrac{1}{x} - 1 = \\dfrac{1-x}{x}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q6',
            type: 'mcq',
            prompt: 'Sur quel(s) intervalle(s) a-t-on $\\dfrac{1}{x} \\ge 1$ ?',
            options: ['$[1\\,;+\\infty[$', '$]0\\,;1]$', '$]-\\infty\\,;0[\\cup[1\\,;+\\infty[$', '$]0\\,;+\\infty[$'],
            correctAnswerIndex: 1,
            explanation: '$\\dfrac{1}{x}-1 = \\dfrac{1-x}{x} \\ge 0$ : numérateur $\\ge 0$ pour $x\\le 1$ et dénominateur $> 0$ pour $x>0$, donc $x\\in]0\\,;1]$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q1',
          type: 'mcq',
          prompt: 'Que faut-il montrer pour prouver que $f \\ge g$ sur un intervalle $I$ ?',
          options: [
            'Il existe un réel $x_0\\in I$ tel que $f(x_0)\\ge g(x_0)$',
            'Pour tout $x\\in I$, $f(x) - g(x) \\ge 0$',
            'Pour tout $x\\in I$, $f(x) > 0$ et $g(x) > 0$',
            '$f(0) \\ge g(0)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Par définition, $f\\ge g$ sur $I$ équivaut à $\\forall x\\in I$, $f(x)\\ge g(x)$, soit $f(x)-g(x)\\ge 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q2',
          type: 'mcq',
          prompt: 'Comment s’écrit $f(x) = 2 - x^2 + 2x$ sous forme canonique, et que vaut $f(x) - 3$ ?',
          options: [
            '$f(x) = 3 - (x-1)^2$ et $f(x)-3 = -(x-1)^2 \\le 0$',
            '$f(x) = 3 - (x+1)^2$ et $f(x)-3 = -(x+1)^2 \\le 0$',
            '$f(x) = 1 - (x-1)^2$ et $f(x)-3 = -(x-1)^2 - 2$',
            '$f(x) = 3 + (x-1)^2$ et $f(x)-3 = (x-1)^2 \\ge 0$',
          ],
          correctAnswerIndex: 0,
          explanation: '$-(x^2-2x)+2 = -(x^2-2x+1-1)+2 = -(x-1)^2+3$, donc $f(x)-3 = -(x-1)^2 \\le 0$, d’où $f(x)\\le 3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q3',
          type: 'mcq',
          prompt: 'Sur l’intervalle $[0\\,;1]$, la courbe de $f(x)=x^2$ est située au-dessous de celle de $g(x)=x$. Qu’en déduit-on ?',
          options: [
            '$f \\ge g$ sur $[0\\,;1]$',
            '$f \\le g$ sur $[0\\,;1]$',
            '$f = g$ sur $[0\\,;1]$',
            'On ne peut pas comparer $f$ et $g$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Si $(C_f)$ est au-dessous de $(C_g)$ sur $I$, alors pour tout $x\\in I$, $f(x)\\le g(x)$, soit $f\\le g$ sur $I$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q4',
          type: 'mcq',
          prompt: 'Sur quel intervalle a-t-on $x^2 \\ge x$ pour $x \\in \\mathbb{R}$ ?',
          options: [
            '$[0\\,;1]$',
            '$]-\\infty\\,;0] \\cup [1\\,;+\\infty[$',
            '$]0\\,;1[$',
            '$[1\\,;+\\infty[$ uniquement',
          ],
          correctAnswerIndex: 1,
          explanation: '$x^2 - x = x(x-1) \\ge 0$ pour $x \\le 0$ ou $x \\ge 1$, c’est-à-dire à l’extérieur des racines $0$ et $1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q5',
          type: 'mcq',
          prompt: 'Compare $f(x) = x^2 + 3$ et $g(x) = 2x + 1$ sur $\\mathbb{R}$.',
          options: [
            '$f(x) > g(x)$ pour tout $x\\in\\mathbb{R}$',
            '$f(x) < g(x)$ pour tout $x\\in\\mathbb{R}$',
            '$f(x) \\ge g(x)$ seulement pour $x\\ge 1$',
            '$f$ et $g$ se coupent en deux points',
          ],
          correctAnswerIndex: 0,
          explanation: '$f(x)-g(x) = x^2 - 2x + 2 = (x-1)^2 + 1 \\ge 1 > 0$ pour tout $x\\in\\mathbb{R}$, donc $f > g$ sur $\\mathbb{R}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p05_q6',
          type: 'mcq',
          prompt: 'Sur quel(s) intervalle(s) a-t-on $\\dfrac{1}{x} \\ge 1$ ?',
          options: ['$[1\\,;+\\infty[$', '$]0\\,;1]$', '$]-\\infty\\,;0[\\cup[1\\,;+\\infty[$', '$]0\\,;+\\infty[$'],
          correctAnswerIndex: 1,
          explanation: '$\\dfrac{1}{x}-1 = \\dfrac{1-x}{x} \\ge 0$ : numérateur $\\ge 0$ pour $x\\le 1$ et dénominateur $> 0$ pour $x>0$, donc $x\\in]0\\,;1]$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Composition de fonctions et composée avec la réciproque
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06',
      order: 6,
      title: 'Composition de fonctions et composée avec la réciproque',
      summary: 'Déterminer D_{g∘f}, expliciter (g∘f)(x), et utiliser f⁻¹∘f = id_E et f∘f⁻¹ = id_F.',
      conceptExplanation:
        "Soient $E, F, G$ trois parties de $\\mathbb{R}$, $f: E\\to F$ et $g: F\\to G$. La **composée** de $f$ par $g$ est la fonction notée $g\\circ f$ définie par :\n$$(g\\circ f)(x) = g\\big(f(x)\\big).$$\n**Ensemble de définition :**\n$$x \\in D_{g\\circ f} \\iff x \\in D_f \\text{ et } f(x) \\in D_g.$$\n\n**Propriété avec la bijection réciproque :** si $f: E\\to F$ est une bijection et $f^{-1}: F\\to E$ sa réciproque, alors :\n- $f^{-1}\\circ f = \\mathrm{id}_E$ (application identique de $E$ : $\\forall x\\in E, f^{-1}(f(x)) = x$) ;\n- $f\\circ f^{-1} = \\mathrm{id}_F$ (application identique de $F$ : $\\forall y\\in F, f(f^{-1}(y)) = y$).",
      keyRule:
        'x ∈ D_{g∘f} ⇔ x ∈ D_f ET f(x) ∈ D_g. Et attention à l’ordre : dans g∘f(x) = g(f(x)), on applique f d’abord, puis g !',
      formulas: [
        { name: 'Ensemble de définition de g∘f', formula: 'x \\in D_{g\\circ f} \\iff x \\in D_f \\text{ et } f(x) \\in D_g' },
        { name: 'Réciproque par composition', formula: 'f^{-1}\\circ f = \\mathrm{id}_E,\\qquad f\\circ f^{-1} = \\mathrm{id}_F' },
      ],
      workedExample: {
        title: 'Domaine et expression de g∘f pour f(x) = 1/x² et g(x) = (x+2)/(x−1)',
        statement: 'Soient $f(x)=\\dfrac{1}{x^2}$ et $g(x)=\\dfrac{x+2}{x-1}$. Détermine $D_{g\\circ f}$ puis explicite $(g\\circ f)(x)$.',
        methodSteps: [
          '$D_f = \\mathbb{R}^*$ et $D_g = \\mathbb{R}\\setminus\\{1\\}$.',
          '$x\\in D_{g\\circ f} \\iff x\\neq 0 \\text{ et } \\dfrac{1}{x^2} \\neq 1 \\iff x\\neq 0 \\text{ et } x^2\\neq 1 \\iff x \\in \\mathbb{R}\\setminus\\{-1\\,;0\\,;1\\}$.',
          '$(g\\circ f)(x) = \\dfrac{\\frac{1}{x^2}+2}{\\frac{1}{x^2}-1} = \\dfrac{1+2x^2}{1-x^2} = -\\dfrac{2x^2+1}{x^2-1}$.',
        ],
        conclusion: '$D_{g\\circ f} = \\mathbb{R}^*\\setminus\\{-1\\,;1\\}$ et $(g\\circ f)(x) = -\\dfrac{2x^2+1}{x^2-1}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Calculer (g∘f)(x)',
          stepTitle: 'Lire (g∘f)(x) = g(f(x)) dans le bon ordre',
          paragraphText:
            'Pour calculer $g\\circ f(x) = g(f(x))$, on remplace chaque $x$ dans l’expression de $g$ par tout le bloc $f(x)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q1',
            type: 'mcq',
            prompt: 'Soient $f(x)=x^2+x-2$ et $g(x)=\\sqrt{x}$. Que vaut $(f\\circ g)(x)$ pour $x \\ge 0$ ?',
            options: [
              '$\\sqrt{x^2+x-2}$',
              '$x + \\sqrt{x} - 2$',
              '$x^2 + \\sqrt{x} - 2$',
              '$(\\sqrt{x}-2)^2$',
            ],
            correctAnswerIndex: 1,
            explanation: '$(f\\circ g)(x) = f(g(x)) = (\\sqrt{x})^2 + \\sqrt{x} - 2 = x + \\sqrt{x} - 2$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Domaine de g∘f',
          stepTitle: 'Trouver l’ensemble de définition D_{g∘f}',
          paragraphText:
            'On écrit les deux conditions : $x\\in D_f$ ET $f(x)\\in D_g$. L’ensemble de définition est l’intersection des solutions obtenues.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q2',
            type: 'mcq',
            prompt: 'Avec $f(x)=x^2+x-2$ et $g(x)=\\sqrt{x}$, quel est l’ensemble de définition $D_{g\\circ f}$ ?',
            options: [
              '$[0\\,;+\\infty[$',
              '$]-\\infty\\,;-2] \\cup [1\\,;+\\infty[$',
              '$[-2\\,;1]$',
              '$\\mathbb{R}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$x\\in D_{g\\circ f} \\iff x^2+x-2 \\ge 0$. Les racines de $x^2+x-2$ sont $-2$ et $1$, donc $x\\in ]-\\infty\\,;-2] \\cup [1\\,;+\\infty[$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Calcul',
          stepTheme: 'Simplifier g(f(x))',
          stepTitle: 'Simplifier une composée de fonctions rationnelles',
          paragraphText:
            'Pour $f(x)=\\dfrac{1}{x^2}$ et $g(x)=\\dfrac{x+2}{x-1}$, on multiplie numérateur et dénominateur par $x^2$ ($x\\neq 0$) pour supprimer les fractions à deux étages.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q3',
            type: 'mcq',
            prompt: 'Soient $f(x)=\\dfrac{1}{x^2}$ et $g(x)=\\dfrac{x+2}{x-1}$. Quel est $D_{g\\circ f}$ ?',
            options: [
              '$\\mathbb{R}\\setminus\\{0\\,;1\\}$',
              '$\\mathbb{R}\\setminus\\{-1\\,;0\\,;1\\}$',
              '$\\mathbb{R}\\setminus\\{-1\\,;1\\}$',
              '$\\mathbb{R}^*$',
            ],
            correctAnswerIndex: 1,
            explanation: '$x\\neq 0$ (pour $f$) et $\\dfrac{1}{x^2}\\neq 1 \\iff x\\neq -1$ et $x\\neq 1$ (pour $g$). D’où $\\mathbb{R}\\setminus\\{-1\\,;0\\,;1\\}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'g∘f ≠ f∘g',
          stepTitle: 'La composition n’est pas commutative',
          paragraphText:
            'En général, $g\\circ f \\neq f\\circ g$ ! Compare les domaines et les formules de $f\\circ g$ et $g\\circ f$ avant de conclure.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q4',
            type: 'mcq',
            prompt: 'Soient $f(x)=x+1$ et $g(x)=x^2$. Compare $(g\\circ f)(x)$ et $(f\\circ g)(x)$.',
            options: [
              'Ils sont égaux à $x^2+1$',
              '$(g\\circ f)(x) = (x+1)^2$ alors que $(f\\circ g)(x) = x^2+1$',
              '$(g\\circ f)(x) = x^2+1$ alors que $(f\\circ g)(x) = (x+1)^2$',
              'Aucun des deux n’est défini sur $\\mathbb{R}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$(g\\circ f)(x) = g(x+1) = (x+1)^2$, tandis que $(f\\circ g)(x) = f(x^2) = x^2+1$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Identité',
          stepTheme: 'f⁻¹∘f et f∘f⁻¹',
          stepTitle: 'Composée d’une bijection et de sa réciproque',
          paragraphText:
            'Réciproquement, si $f: E\\to F$ et $g: F\\to E$ vérifient $g\\circ f = \\mathrm{id}_E$ et $f\\circ g = \\mathrm{id}_F$, alors $f$ est bijective et $g = f^{-1}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q5',
            type: 'mcq',
            prompt: 'Si $f: \\mathbb{R}^+ \\to \\mathbb{R}^+$ est $f(x)=\\sqrt{x}$ et $f^{-1}(x)=x^2$, que valent $(f\\circ f^{-1})(x)$ et $(f^{-1}\\circ f)(x)$ pour $x\\ge 0$ ?',
            options: [
              '$x^2$ et $\\sqrt{x}$',
              'Tous deux égaux à $x$',
              '$1$ et $0$',
              '$|x|$ et $-x$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pour $x\\ge 0$, $\\sqrt{x^2}=x$ et $(\\sqrt{x})^2=x$ : on retrouve l’application identique de $\\mathbb{R}^+$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Situation',
          stepTheme: 'Fonction involutive g∘g = id',
          stepTitle: 'Application au partage symétrique d’une parcelle',
          paragraphText:
            'Pour $g: \\mathbb{R}^* \\to \\mathbb{R}^*$ définie par $g(x)=\\dfrac{1}{x}$, on a $(g\\circ g)(x) = \\dfrac{1}{1/x} = x$ : donc $g\\circ g = \\mathrm{id}_{\\mathbb{R}^*}$, ainsi $g$ est bijective et sa propre réciproque ($g^{-1}=g$) !',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q6',
            type: 'mcq',
            prompt: 'Le lac a pour contour $(C_g)$ avec $g(x)=\\dfrac{1}{x}$ sur $\\mathbb{R}^*$. Pourquoi les deux parts de terrain de part et d’autre de la piste $y=x$ ont-elles la même aire ?',
            options: [
              'Parce que $g\\circ g = \\mathrm{id}_{\\mathbb{R}^*}$, donc $g^{-1}=g$ et $(C_g)$ est symétrique par rapport à la première bissectrice $y=x$',
              'Parce que $g(x)=x$',
              'Parce que $g$ est paire',
              'Parce que $g$ n’est pas définie en $0$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Comme $g^{-1}=g$, la courbe $(C_g)$ est sa propre symétrique par rapport à la droite $y=x$, donc la piste coupe le domaine en deux parties symétriques de même aire.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q1',
          type: 'mcq',
          prompt: 'Soient $f(x)=x^2+x-2$ et $g(x)=\\sqrt{x}$. Que vaut $(f\\circ g)(x)$ pour $x \\ge 0$ ?',
          options: [
            '$\\sqrt{x^2+x-2}$',
            '$x + \\sqrt{x} - 2$',
            '$x^2 + \\sqrt{x} - 2$',
            '$(\\sqrt{x}-2)^2$',
          ],
          correctAnswerIndex: 1,
          explanation: '$(f\\circ g)(x) = f(g(x)) = (\\sqrt{x})^2 + \\sqrt{x} - 2 = x + \\sqrt{x} - 2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q2',
          type: 'mcq',
          prompt: 'Avec $f(x)=x^2+x-2$ et $g(x)=\\sqrt{x}$, quel est l’ensemble de définition $D_{g\\circ f}$ ?',
          options: [
            '$[0\\,;+\\infty[$',
            '$]-\\infty\\,;-2] \\cup [1\\,;+\\infty[$',
            '$[-2\\,;1]$',
            '$\\mathbb{R}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$x\\in D_{g\\circ f} \\iff x^2+x-2 \\ge 0$. Les racines de $x^2+x-2$ sont $-2$ et $1$, donc $x\\in ]-\\infty\\,;-2] \\cup [1\\,;+\\infty[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q3',
          type: 'mcq',
          prompt: 'Soient $f(x)=\\dfrac{1}{x^2}$ et $g(x)=\\dfrac{x+2}{x-1}$. Quel est $D_{g\\circ f}$ ?',
          options: [
            '$\\mathbb{R}\\setminus\\{0\\,;1\\}$',
            '$\\mathbb{R}\\setminus\\{-1\\,;0\\,;1\\}$',
            '$\\mathbb{R}\\setminus\\{-1\\,;1\\}$',
            '$\\mathbb{R}^*$',
          ],
          correctAnswerIndex: 1,
          explanation: '$x\\neq 0$ (pour $f$) et $\\dfrac{1}{x^2}\\neq 1 \\iff x\\neq -1$ et $x\\neq 1$ (pour $g$). D’où $\\mathbb{R}\\setminus\\{-1\\,;0\\,;1\\}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q4',
          type: 'mcq',
          prompt: 'Soient $f(x)=x+1$ et $g(x)=x^2$. Compare $(g\\circ f)(x)$ et $(f\\circ g)(x)$.',
          options: [
            'Ils sont égaux à $x^2+1$',
            '$(g\\circ f)(x) = (x+1)^2$ alors que $(f\\circ g)(x) = x^2+1$',
            '$(g\\circ f)(x) = x^2+1$ alors que $(f\\circ g)(x) = (x+1)^2$',
            'Aucun des deux n’est défini sur $\\mathbb{R}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$(g\\circ f)(x) = g(x+1) = (x+1)^2$, tandis que $(f\\circ g)(x) = f(x^2) = x^2+1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q5',
          type: 'mcq',
          prompt: 'Si $f: \\mathbb{R}^+ \\to \\mathbb{R}^+$ est $f(x)=\\sqrt{x}$ et $f^{-1}(x)=x^2$, que valent $(f\\circ f^{-1})(x)$ et $(f^{-1}\\circ f)(x)$ pour $x\\ge 0$ ?',
          options: [
            '$x^2$ et $\\sqrt{x}$',
            'Tous deux égaux à $x$',
            '$1$ et $0$',
            '$|x|$ et $-x$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pour $x\\ge 0$, $\\sqrt{x^2}=x$ et $(\\sqrt{x})^2=x$ : on retrouve l’application identique de $\\mathbb{R}^+$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p06_q6',
          type: 'mcq',
          prompt: 'Le lac a pour contour $(C_g)$ avec $g(x)=\\dfrac{1}{x}$ sur $\\mathbb{R}^*$. Pourquoi les deux parts de terrain de part et d’autre de la piste $y=x$ ont-elles la même aire ?',
          options: [
            'Parce que $g\\circ g = \\mathrm{id}_{\\mathbb{R}^*}$, donc $g^{-1}=g$ et $(C_g)$ est symétrique par rapport à la première bissectrice $y=x$',
            'Parce que $g(x)=x$',
            'Parce que $g$ est paire',
            'Parce que $g$ n’est pas définie en $0$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Comme $g^{-1}=g$, la courbe $(C_g)$ est sa propre symétrique par rapport à la droite $y=x$, donc la piste coupe le domaine en deux parties symétriques de même aire.',
        },
      ],
    },

    // ========================================================================
    // POINT 7 : Représentations graphiques de fonctions associées
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07',
      order: 7,
      title: 'Représentations graphiques de fonctions associées',
      summary: 'Construire la courbe de f(x−a)+b par translation, et celles de f(−x), −f(x), −f(−x) par symétrie.',
      conceptExplanation:
        "Dans le plan muni d'un repère orthogonal $(O, I, J)$, soit $(C_f)$ la courbe représentative de $f$ et $a, b \\in \\mathbb{R}$ :\n- **$x \\mapsto f(x-a)$** : $(C_g)$ est l'image de $(C_f)$ par la translation de vecteur $a\\overrightarrow{OI}$.\n- **$x \\mapsto f(x)+b$** : $(C_g)$ est l'image de $(C_f)$ par la translation de vecteur $b\\overrightarrow{OJ}$.\n- **$x \\mapsto f(x-a)+b$** : $(C_g)$ est l'image de $(C_f)$ par la translation de vecteur $a\\overrightarrow{OI} + b\\overrightarrow{OJ}$.\n- **$x \\mapsto f(-x)$** : symétrie orthogonale $S_{(OJ)}$ d'axe $(OJ)$.\n- **$x \\mapsto -f(x)$** : symétrie orthogonale $S_{(OI)}$ d'axe $(OI)$.\n- **$x \\mapsto -f(-x)$** : symétrie centrale $S_O$ de centre $O$.",
      keyRule:
        'Piège classique : g(x) = f(x − a) + b correspond au vecteur (+a ; +b), donc g(x) = f(x + 2) − 3 = f(x − (−2)) + (−3) donne le vecteur (−2 ; −3) !',
      formulas: [
        { name: 'Translation', formula: 'g(x) = f(x-a)+b \\implies \\vec{u} = a\\overrightarrow{OI} + b\\overrightarrow{OJ}' },
        { name: 'Symétries', formula: 'f(-x) \\to S_{(OJ)},\\quad -f(x) \\to S_{(OI)},\\quad -f(-x) \\to S_O' },
      ],
      workedExample: {
        title: 'Tracer g(x) = x² − 4x + 8 à partir de f(x) = x²',
        statement: 'Montre que $g(x) = f(x-2)+4$ avec $f(x)=x^2$, puis déduis la transformation qui envoie $(C_f)$ sur $(C_g)$.',
        methodSteps: [
          '$f(x-2)+4 = (x-2)^2 + 4 = x^2 - 4x + 4 + 4 = x^2 - 4x + 8 = g(x)$.',
          'C’est de la forme $f(x-a)+b$ avec $a=2$ et $b=4$.',
        ],
        conclusion: '$(C_g)$ est l’image de $(C_f)$ par la translation de vecteur $2\\overrightarrow{OI} + 4\\overrightarrow{OJ}$.',
      },
      visualSchema: {
        type: 'function_plot',
        title: 'Translation de (Cf) : x² vers (Cg) : (x−2)² + 4',
        caption: 'Le sommet (0 ; 0) est translaté par u⃗(2 ; 4) vers le point (2 ; 4).',
        plot: {
          xMin: -3,
          xMax: 6,
          yMin: 0,
          yMax: 10,
          xStep: 1,
          yStep: 2,
          curves: [
            { label: 'f(x)=x^2', color: 'blue', pieces: [{ expr: 'x^2', from: -3, to: 3 }] },
            { label: 'g(x)=(x-2)^2+4', color: 'green', pieces: [{ expr: '(x-2)^2+4', from: -0.4, to: 4.4 }] },
          ],
          points: [
            { x: 0, y: 0, label: 'O(0;0)', filled: true, color: 'blue' },
            { x: 2, y: 4, label: 'S(2;4)', filled: true, color: 'green' },
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Translation',
          stepTheme: 'f(x − a) + b',
          stepTitle: 'Lire les coordonnées du vecteur de translation',
          paragraphText:
            'Si $g(x)=f(x-a)+b$, chaque point $M(x\\,;y)$ de $(C_f)$ est déplacé en $M\'(x+a\\,;y+b)$ sur $(C_g)$ par le vecteur $\\vec{u}(a\\,;b) = a\\overrightarrow{OI}+b\\overrightarrow{OJ}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q1',
            type: 'mcq',
            prompt: 'Soit $g(x) = f(x-3) + 1$. Par quelle translation obtient-on $(C_g)$ à partir de $(C_f)$ ?',
            options: [
              'Vecteur $\\vec{u}(-3\\,;1)$',
              'Vecteur $\\vec{u}(3\\,;1)$',
              'Vecteur $\\vec{u}(3\\,;-1)$',
              'Vecteur $\\vec{u}(1\\,;3)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Dans $f(x-a)+b$, on lit directement $a=3$ et $b=1$, donc le vecteur est $\\vec{u}(3\\,;1)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Signe devant a',
          stepTitle: 'Attention quand l’expression contient f(x + k)',
          paragraphText:
            'Si on voit $f(x+2)$, il faut réécrire $x+2 = x - (-2)$, donc l’abscisse du vecteur de translation est $-2$ (décalage vers la gauche) !',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q2',
            type: 'mcq',
            prompt: 'Par quelle translation obtient-on la courbe de $g(x) = f(x+2) - 5$ à partir de $(C_f)$ ?',
            options: [
              'Vecteur $\\vec{u}(2\\,;-5)$',
              'Vecteur $\\vec{u}(-2\\,;-5)$',
              'Vecteur $\\vec{u}(-2\\,;5)$',
              'Vecteur $\\vec{u}(2\\,;5)$',
            ],
            correctAnswerIndex: 1,
            explanation: '$g(x) = f(x - (-2)) + (-5)$, donc $a=-2$ et $b=-5$ : vecteur $\\vec{u}(-2\\,;-5)$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Trinôme et parabole',
          stepTitle: 'Mettre un trinôme sous forme f(x − a) + b',
          paragraphText:
            'Grâce à la forme canonique, toute fonction $x^2 + px + q$ s’écrit $(x-a)^2 + b = f(x-a)+b$ avec $f(x)=x^2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q3',
            type: 'mcq',
            prompt: 'Soit $g(x) = x^2 - 4x + 8$ et $f(x) = x^2$. Comment exprime-t-on $g(x)$ en fonction de $f$, et quel est le vecteur ?',
            options: [
              '$g(x) = f(x-2) + 4$, vecteur $2\\overrightarrow{OI} + 4\\overrightarrow{OJ}$',
              '$g(x) = f(x+2) + 4$, vecteur $-2\\overrightarrow{OI} + 4\\overrightarrow{OJ}$',
              '$g(x) = f(x-4) + 8$, vecteur $4\\overrightarrow{OI} + 8\\overrightarrow{OJ}$',
              '$g(x) = f(x-2) + 8$, vecteur $2\\overrightarrow{OI} + 8\\overrightarrow{OJ}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$x^2-4x+8 = (x-2)^2 + 4 = f(x-2)+4$, d’où la translation de vecteur $2\\overrightarrow{OI}+4\\overrightarrow{OJ}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Symétrie (OJ)',
          stepTheme: 'Courbe de f(−x)',
          stepTitle: 'Passer de x à −x : symétrie d’axe (OJ)',
          paragraphText:
            'Si $M(x\\,;y) \\in (C_f)$, alors $M\'(-x\\,;y)$ a pour image $f(-(-x))=f(x)=y$ par $x\\mapsto f(-x)$ : on change $x$ en $-x$ en gardant $y$, c’est la symétrie d’axe $(OJ)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q4',
            type: 'mcq',
            prompt: 'Par quelle transformation passe-t-on de la courbe de $f$ à celle de $h: x \\mapsto f(-x)$ ?',
            options: [
              'La symétrie orthogonale d’axe $(OI)$',
              'La symétrie orthogonale d’axe $(OJ)$',
              'La symétrie centrale de centre $O$',
              'La translation de vecteur $-\\overrightarrow{OI}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Changer l’abscisse $x$ en $-x$ à ordonnée constante correspond à la symétrie par rapport à l’axe des ordonnées $(OJ)$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Symétries (OI) et O',
          stepTheme: '−f(x) et −f(−x)',
          stepTitle: 'Distinguer −f(x), f(−x) et −f(−x)',
          paragraphText:
            'Pour $-f(x)$, seule l’ordonnée $y$ change de signe : symétrie d’axe $(OI)$. Pour $-f(-x)$, $x$ et $y$ changent tous deux de signe : symétrie centrale de centre $O$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q5',
            type: 'mcq',
            prompt: 'Quelle transformation géométrique envoie $(C_f)$ sur la courbe de $k: x \\mapsto -f(-x)$ ?',
            options: [
              'La symétrie orthogonale d’axe $(OI)$',
              'La symétrie orthogonale d’axe $(OJ)$',
              'La symétrie centrale de centre $O$',
              'La symétrie par rapport à la droite $y=x$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Le point $(x\\,;y)$ devient $(-x\\,;-y)$ : c’est la symétrie centrale $S_O$ de centre $O$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Points images',
          stepTheme: 'Coordonnées transformées',
          stepTitle: 'Trouver les images de points précis',
          paragraphText:
            'Avec les coordonnées des sommets ou points clés $A, B, C$ de $(C_f)$, on calcule immédiatement leurs images $A\', B\', C\'$ sur $(C_g)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q6',
            type: 'mcq',
            prompt: 'La courbe $(C)$ passe par $A(1\\,;0)$, $B(3\\,;2)$ et $C(4\\,;-1)$. Quelles sont leurs images par la translation de vecteur $\\vec{u}(3\\,;1)$ pour $g(x)=f(x-3)+1$ ?',
            options: [
              '$A\'(4\\,;1)$, $B\'(6\\,;3)$, $C\'(7\\,;0)$',
              '$A\'(-2\\,;-1)$, $B\'(0\\,;1)$, $C\'(1\\,;-2)$',
              '$A\'(4\\,;-1)$, $B\'(6\\,;1)$, $C\'(7\\,;-2)$',
              '$A\'(3\\,;1)$, $B\'(9\\,;2)$, $C\'(12\\,;-1)$',
            ],
            correctAnswerIndex: 0,
            explanation: 'On ajoute $(3\\,;1)$ à chaque point : $(1+3\\,;0+1)=(4\\,;1)$, $(3+3\\,;2+1)=(6\\,;3)$, $(4+3\\,;-1+1)=(7\\,;0)$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q1',
          type: 'mcq',
          prompt: 'Soit $g(x) = f(x-3) + 1$. Par quelle translation obtient-on $(C_g)$ à partir de $(C_f)$ ?',
          options: [
            'Vecteur $\\vec{u}(-3\\,;1)$',
            'Vecteur $\\vec{u}(3\\,;1)$',
            'Vecteur $\\vec{u}(3\\,;-1)$',
            'Vecteur $\\vec{u}(1\\,;3)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Dans $f(x-a)+b$, on lit directement $a=3$ et $b=1$, donc le vecteur est $\\vec{u}(3\\,;1)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q2',
          type: 'mcq',
          prompt: 'Par quelle translation obtient-on la courbe de $g(x) = f(x+2) - 5$ à partir de $(C_f)$ ?',
          options: [
            'Vecteur $\\vec{u}(2\\,;-5)$',
            'Vecteur $\\vec{u}(-2\\,;-5)$',
            'Vecteur $\\vec{u}(-2\\,;5)$',
            'Vecteur $\\vec{u}(2\\,;5)$',
          ],
          correctAnswerIndex: 1,
          explanation: '$g(x) = f(x - (-2)) + (-5)$, donc $a=-2$ et $b=-5$ : vecteur $\\vec{u}(-2\\,;-5)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q3',
          type: 'mcq',
          prompt: 'Soit $g(x) = x^2 - 4x + 8$ et $f(x) = x^2$. Comment exprime-t-on $g(x)$ en fonction de $f$, et quel est le vecteur ?',
          options: [
            '$g(x) = f(x-2) + 4$, vecteur $2\\overrightarrow{OI} + 4\\overrightarrow{OJ}$',
            '$g(x) = f(x+2) + 4$, vecteur $-2\\overrightarrow{OI} + 4\\overrightarrow{OJ}$',
            '$g(x) = f(x-4) + 8$, vecteur $4\\overrightarrow{OI} + 8\\overrightarrow{OJ}$',
            '$g(x) = f(x-2) + 8$, vecteur $2\\overrightarrow{OI} + 8\\overrightarrow{OJ}$',
          ],
          correctAnswerIndex: 0,
          explanation: '$x^2-4x+8 = (x-2)^2 + 4 = f(x-2)+4$, d’où la translation de vecteur $2\\overrightarrow{OI}+4\\overrightarrow{OJ}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q4',
          type: 'mcq',
          prompt: 'Par quelle transformation passe-t-on de la courbe de $f$ à celle de $h: x \\mapsto f(-x)$ ?',
          options: [
            'La symétrie orthogonale d’axe $(OI)$',
            'La symétrie orthogonale d’axe $(OJ)$',
            'La symétrie centrale de centre $O$',
            'La translation de vecteur $-\\overrightarrow{OI}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Changer l’abscisse $x$ en $-x$ à ordonnée constante correspond à la symétrie par rapport à l’axe des ordonnées $(OJ)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q5',
          type: 'mcq',
          prompt: 'Quelle transformation géométrique envoie $(C_f)$ sur la courbe de $k: x \\mapsto -f(-x)$ ?',
          options: [
            'La symétrie orthogonale d’axe $(OI)$',
            'La symétrie orthogonale d’axe $(OJ)$',
            'La symétrie centrale de centre $O$',
            'La symétrie par rapport à la droite $y=x$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Le point $(x\\,;y)$ devient $(-x\\,;-y)$ : c’est la symétrie centrale $S_O$ de centre $O$.',
        },
        {
          id: 'premiere_c_maths_numerique_l03_generalites_fonctions_p07_q6',
          type: 'mcq',
          prompt: 'La courbe $(C)$ passe par $A(1\\,;0)$, $B(3\\,;2)$ et $C(4\\,;-1)$. Quelles sont leurs images par la translation de vecteur $\\vec{u}(3\\,;1)$ pour $g(x)=f(x-3)+1$ ?',
          options: [
            '$A\'(4\\,;1)$, $B\'(6\\,;3)$, $C\'(7\\,;0)$',
            '$A\'(-2\\,;-1)$, $B\'(0\\,;1)$, $C\'(1\\,;-2)$',
            '$A\'(4\\,;-1)$, $B\'(6\\,;1)$, $C\'(7\\,;-2)$',
            '$A\'(3\\,;1)$, $B\'(9\\,;2)$, $C\'(12\\,;-1)$',
          ],
          correctAnswerIndex: 0,
          explanation: 'On ajoute $(3\\,;1)$ à chaque point : $(1+3\\,;0+1)=(4\\,;1)$, $(3+3\\,;2+1)=(6\\,;3)$, $(4+3\\,;-1+1)=(7\\,;0)$.',
        },
      ],
    },
  ],
};

