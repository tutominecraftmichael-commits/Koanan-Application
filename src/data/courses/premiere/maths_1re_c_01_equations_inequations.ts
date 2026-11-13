import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 1 : Équations et inéquations du second degré dans IR.pdf » (format v2).
export const MATHS_1RE_C_L01_EQUATIONS_INEQUATIONS: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l01_equations_inequations',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 1,
  title: 'Leçon 1 : Équations et inéquations du second degré dans ℝ',
  summary:
    'Discriminant et factorisation, résolution algébrique et graphique, somme et produit des racines, signe du trinôme et inéquations, équations bicarrées et équations ou inéquations irrationnelles.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: '1ère C - Leçon 1 : Équations et inéquations du second degré dans IR.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Discriminant et zéros d'un polynôme du second degré
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l01_equations_inequations_p01',
      order: 1,
      title: "Discriminant et zéros d'un polynôme du second degré",
      summary: "Calculer Δ = b² − 4ac, trouver les zéros éventuels et factoriser P(x) = ax² + bx + c.",
      conceptExplanation:
        "Soit $P$ un polynôme du second degré défini par $P(x)=ax^2+bx+c$ avec $a\\neq 0$. On appelle **discriminant** de $P$ le nombre réel $\\Delta = b^2 - 4ac$.\n\nSelon le signe de $\\Delta$ :\n- **Si $\\Delta > 0$** : $P$ admet deux zéros distincts $x_1 = \\dfrac{-b-\\sqrt{\\Delta}}{2a}$ et $x_2 = \\dfrac{-b+\\sqrt{\\Delta}}{2a}$, et se factorise sous la forme $P(x) = a(x-x_1)(x-x_2)$.\n- **Si $\\Delta = 0$** : $P$ admet un zéro double $x_0 = \\dfrac{-b}{2a}$ et se factorise en $P(x) = a(x-x_0)^2$.\n- **Si $\\Delta < 0$** : $P$ n'admet aucun zéro dans $\\mathbb{R}$ et n'est pas factorisable dans $\\mathbb{R}$.",
      keyRule:
        'Δ = b² − 4ac. Ne jamais oublier le facteur a devant (x − x₁)(x − x₂) lors de la factorisation !',
      formulas: [
        { name: 'Discriminant', formula: '\\Delta = b^2 - 4ac' },
        {
          name: 'Zéros si Δ > 0',
          formula: 'x_1 = \\dfrac{-b - \\sqrt{\\Delta}}{2a},\\quad x_2 = \\dfrac{-b + \\sqrt{\\Delta}}{2a}',
        },
        { name: 'Factorisation (Δ > 0)', formula: 'P(x) = a(x - x_1)(x - x_2)' },
        { name: 'Factorisation (Δ = 0)', formula: 'P(x) = a(x - x_0)^2 \\text{ avec } x_0 = -\\dfrac{b}{2a}' },
      ],
      workedExample: {
        title: 'Zéros et factorisation de R(x) = 2x² + 3x − 5',
        statement: 'Calcule les zéros éventuels de $R(x)=2x^2+3x-5$ puis factorise $R(x)$.',
        methodSteps: [
          'On identifie $a=2$, $b=3$, $c=-5$.',
          'On calcule $\\Delta = 3^2 - 4\\times 2\\times (-5) = 9 + 40 = 49 > 0$.',
          'Les deux zéros sont $x_1 = \\dfrac{-3-7}{4} = -\\dfrac{5}{2}$ et $x_2 = \\dfrac{-3+7}{4} = 1$.',
        ],
        conclusion: '$R(x) = 2\\left(x + \\dfrac{5}{2}\\right)(x - 1)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Le discriminant Δ',
          stepTitle: 'Le discriminant Δ = b² − 4ac',
          paragraphText:
            'Pour $P(x)=ax^2+bx+c$ ($a\\neq 0$), le discriminant vaut $\\Delta = b^2 - 4ac$. Attention aux signes de $a$, $b$ et $c$ dans le produit $4ac$.',
          formula: { name: 'Discriminant', formula: '\\Delta = b^2 - 4ac' },
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q1',
            type: 'mcq',
            prompt: 'Quel est le discriminant du polynôme $P(x) = 3x^2 + 2x - 4$ ?',
            options: ['$-44$', '$52$', '$44$', '$-52$'],
            correctAnswerIndex: 1,
            explanation: '$\\Delta = 2^2 - 4\\times 3\\times (-4) = 4 + 48 = 52$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Cas Δ < 0',
          stepTitle: 'Quand le discriminant est strictement négatif',
          paragraphText:
            "Si $\\Delta < 0$, le polynôme $P$ n'admet aucun zéro réel et ne peut pas se factoriser sous forme d'un produit de facteurs du premier degré dans $\\mathbb{R}$.",
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q2',
            type: 'mcq',
            prompt: 'Soit $P(x) = -2x^2 + x - 3$. Que vaut son discriminant et que peut-on en déduire ?',
            options: [
              '$\\Delta = 25 > 0$ : deux zéros distincts',
              '$\\Delta = -23 < 0$ : aucun zéro réel, non factorisable',
              '$\\Delta = -23 < 0$ : un zéro double',
              '$\\Delta = 0$ : un zéro double',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\Delta = 1^2 - 4\\times(-2)\\times(-3) = 1 - 24 = -23 < 0$, donc $P$ n’a pas de zéro réel.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Cas Δ = 0',
          stepTitle: 'Le zéro double et la forme factorisée',
          paragraphText:
            'Si $\\Delta = 0$, le polynôme admet un unique zéro double $x_0 = -\\dfrac{b}{2a}$ et s’écrit $P(x) = a(x - x_0)^2$.',
          formula: { name: 'Zéro double', formula: 'x_0 = -\\dfrac{b}{2a},\\quad P(x)=a(x-x_0)^2' },
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q3',
            type: 'mcq',
            prompt: 'Quel est le zéro double et la factorisation de $Q(x) = x^2 - 4x + 4$ ?',
            options: [
              '$x_0 = -2$ et $Q(x) = (x+2)^2$',
              '$x_0 = 2$ et $Q(x) = (x-2)^2$',
              '$x_0 = 4$ et $Q(x) = (x-4)^2$',
              '$Q$ n’est pas factorisable',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\Delta = (-4)^2 - 4\\times 1\\times 4 = 0$, $x_0 = \\dfrac{4}{2} = 2$ et $Q(x) = (x-2)^2$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Cas Δ > 0',
          stepTitle: 'Calculer les deux zéros et factoriser',
          paragraphText:
            'Lorsque $\\Delta > 0$, on calcule $x_1 = \\dfrac{-b-\\sqrt{\\Delta}}{2a}$ et $x_2 = \\dfrac{-b+\\sqrt{\\Delta}}{2a}$, puis on écrit $P(x) = a(x-x_1)(x-x_2)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q4',
            type: 'mcq',
            prompt: 'Quelle est la forme factorisée de $R(x) = 2x^2 + 3x - 5$ ?',
            options: [
              '$\\left(x + \\dfrac{5}{2}\\right)(x - 1)$',
              '$2\\left(x - \\dfrac{5}{2}\\right)(x + 1)$',
              '$2\\left(x + \\dfrac{5}{2}\\right)(x - 1)$',
              '$2\\left(x - \\dfrac{5}{2}\\right)(x - 1)$',
            ],
            correctAnswerIndex: 2,
            explanation: '$\\Delta = 49$, $x_1 = -\\dfrac{5}{2}$ et $x_2 = 1$. Avec $a=2$, on obtient $2\\left(x+\\dfrac{5}{2}\\right)(x-1)$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Calcul de Δ',
          stepTitle: 'S’entraîner au calcul du discriminant',
          paragraphText:
            'Un calcul rapide et fiable de $\\Delta = b^2 - 4ac$ évite toute erreur en chaîne sur les racines ou la factorisation.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q5',
            type: 'mcq',
            prompt: 'Quel est le discriminant du polynôme $15x^2 - 27x + 10$ ?',
            options: ['$129$', '$49$', '$9$', '$-129$'],
            correctAnswerIndex: 0,
            explanation: '$\\Delta = (-27)^2 - 4\\times 15\\times 10 = 729 - 600 = 129$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Piège d’examen',
          stepTitle: 'Attention au signe de b et de a devant la parenthèse',
          paragraphText:
            'Dans $-b$, le signe devant $b$ change : si $b=-3$, alors $-b=+3$. Et lors de la factorisation de $ax^2+bx+c$, le coefficient $a$ reste en facteur devant $(x-x_1)(x-x_2)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q6',
            type: 'mcq',
            prompt: 'Combien de racines réelles possède le polynôme $P(x) = -5x^2 + 10x - 5$ ?',
            options: ['$0$', '$1$ racine double ($x_0 = 1$)', '$2$ racines distinctes', '$5$'],
            correctAnswerIndex: 1,
            explanation: '$\\Delta = 10^2 - 4\\times(-5)\\times(-5) = 100 - 100 = 0$, donc $P$ admet une racine double $x_0 = \\dfrac{-10}{-10} = 1$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q1',
          type: 'mcq',
          prompt: 'Quel est le discriminant du polynôme $P(x) = 3x^2 + 2x - 4$ ?',
          options: ['$-44$', '$52$', '$44$', '$-52$'],
          correctAnswerIndex: 1,
          explanation: '$\\Delta = 2^2 - 4\\times 3\\times (-4) = 4 + 48 = 52$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q2',
          type: 'mcq',
          prompt: 'Soit $P(x) = -2x^2 + x - 3$. Que vaut son discriminant et que peut-on en déduire ?',
          options: [
            '$\\Delta = 25 > 0$ : deux zéros distincts',
            '$\\Delta = -23 < 0$ : aucun zéro réel, non factorisable',
            '$\\Delta = -23 < 0$ : un zéro double',
            '$\\Delta = 0$ : un zéro double',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\Delta = 1^2 - 4\\times(-2)\\times(-3) = 1 - 24 = -23 < 0$, donc $P$ n’a pas de zéro réel.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q3',
          type: 'mcq',
          prompt: 'Quel est le zéro double et la factorisation de $Q(x) = x^2 - 4x + 4$ ?',
          options: [
            '$x_0 = -2$ et $Q(x) = (x+2)^2$',
            '$x_0 = 2$ et $Q(x) = (x-2)^2$',
            '$x_0 = 4$ et $Q(x) = (x-4)^2$',
            '$Q$ n’est pas factorisable',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\Delta = (-4)^2 - 4\\times 1\\times 4 = 0$, $x_0 = \\dfrac{4}{2} = 2$ et $Q(x) = (x-2)^2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q4',
          type: 'mcq',
          prompt: 'Quelle est la forme factorisée de $R(x) = 2x^2 + 3x - 5$ ?',
          options: [
            '$\\left(x + \\dfrac{5}{2}\\right)(x - 1)$',
            '$2\\left(x - \\dfrac{5}{2}\\right)(x + 1)$',
            '$2\\left(x + \\dfrac{5}{2}\\right)(x - 1)$',
            '$2\\left(x - \\dfrac{5}{2}\\right)(x - 1)$',
          ],
          correctAnswerIndex: 2,
          explanation: '$\\Delta = 49$, $x_1 = -\\dfrac{5}{2}$ et $x_2 = 1$. Avec $a=2$, on obtient $2\\left(x+\\dfrac{5}{2}\\right)(x-1)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q5',
          type: 'mcq',
          prompt: 'Quel est le discriminant du polynôme $15x^2 - 27x + 10$ ?',
          options: ['$129$', '$49$', '$9$', '$-129$'],
          correctAnswerIndex: 0,
          explanation: '$\\Delta = (-27)^2 - 4\\times 15\\times 10 = 729 - 600 = 129$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p01_q6',
          type: 'mcq',
          prompt: 'Combien de racines réelles possède le polynôme $P(x) = -5x^2 + 10x - 5$ ?',
          options: ['$0$', '$1$ racine double ($x_0 = 1$)', '$2$ racines distinctes', '$5$'],
          correctAnswerIndex: 1,
          explanation: '$\\Delta = 10^2 - 4\\times(-5)\\times(-5) = 100 - 100 = 0$, donc $P$ admet une racine double $x_0 = \\dfrac{-10}{-10} = 1$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Résolution algébrique et graphique d'une équation du 2nd degré
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l01_equations_inequations_p02',
      order: 2,
      title: "Résolution algébrique et graphique d'une équation du second degré",
      summary: 'Résoudre ax² + bx + c = 0 par le calcul ou par lecture des intersections avec (OI).',
      conceptExplanation:
        "Résoudre dans $\\mathbb{R}$ l'équation $ax^2+bx+c=0$ ($a\\neq 0$) revient à déterminer les zéros éventuels du polynôme $P(x)=ax^2+bx+c$.\n\n**Astuce de rapidité :** si $a$ et $c$ sont de signes contraires ($ac < 0$), alors $\\Delta = b^2 - 4ac > 0$ : l'équation admet toujours deux solutions distinctes.\n\n**Résolution graphique :** les solutions de $f(x)=0$ sont les abscisses des points d'intersection de la parabole $(C_f)$ avec l'axe des abscisses $(OI)$ :\n- si $(C_f)$ coupe $(OI)$ en deux points d'abscisses $x_1$ et $x_2$, alors $S=\\{x_1;x_2\\}$ ($\\Delta>0$) ;\n- si $(C_f)$ est tangente à $(OI)$ en $x_0$, alors $S=\\{x_0\\}$ ($\\Delta=0$) ;\n- si $(C_f)$ ne coupe pas $(OI)$, alors $S=\\emptyset$ ($\\Delta<0$).",
      keyRule:
        'Graphiquement, les solutions de f(x) = 0 sont les abscisses des points où (Cf) coupe ou touche l’axe des abscisses (OI).',
      formulas: [
        { name: 'Règle a et c de signes contraires', formula: 'ac < 0 \\implies \\Delta = b^2 - 4ac > 0' },
        { name: 'Interprétation graphique', formula: 'f(x)=0 \\iff M(x\\,;0) \\in (C_f) \\cap (OI)' },
      ],
      workedExample: {
        title: "Résoudre −x² + x + 2 = 0 algébriquement",
        statement: 'Résous dans $\\mathbb{R}$ l’équation $-x^2+x+2=0$.',
        methodSteps: [
          'Ici $a=-1$ et $c=2$ sont de signes contraires, donc $\\Delta > 0$.',
          '$\\Delta = 1^2 - 4(-1)(2) = 9$.',
          '$x_1 = \\dfrac{-1+3}{-2} = -1$ et $x_2 = \\dfrac{-1-3}{-2} = 2$.',
        ],
        conclusion: '$S_{\\mathbb{R}} = \\{-1\\,;2\\}$.',
      },
      visualSchema: {
        type: 'function_plot',
        title: 'Résolution graphique de −x² + x + 2 = 0',
        caption: 'La parabole coupe l’axe (OI) aux abscisses x₁ = −1 et x₂ = 2.',
        plot: {
          xMin: -3,
          xMax: 4,
          yMin: -4,
          yMax: 4,
          xStep: 1,
          yStep: 1,
          curves: [
            { label: 'f(x) = -x^2+x+2', color: 'blue', pieces: [{ expr: '-x^2+x+2', from: -2.2, to: 3.2 }] },
          ],
          points: [
            { x: -1, y: 0, label: 'x1=-1', filled: true, color: 'orange' },
            { x: 2, y: 0, label: 'x2=2', filled: true, color: 'orange' },
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Résolution algébrique',
          stepTitle: 'Résoudre ax² + bx + c = 0 par le discriminant',
          paragraphText:
            "On calcule $\\Delta = b^2 - 4ac$, puis les racines éventuelles. N'oublie pas que le dénominateur est $2a$ (y compris le signe de $a$).",
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q1',
            type: 'mcq',
            prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $-2x^2 + 5x + 3 = 0$ ?",
            options: [
              '$\\left\\{-\\dfrac{1}{2}\\,; 3\\right\\}$',
              '$\\left\\{\\dfrac{1}{2}\\,; -3\\right\\}$',
              '$\\left\\{-3\\,; -\\dfrac{1}{2}\\right\\}$',
              '$\\emptyset$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\Delta = 25 - 4(-2)(3) = 49$. $x_1 = \\dfrac{-5+7}{-4} = -\\dfrac{1}{2}$ et $x_2 = \\dfrac{-5-7}{-4} = 3$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Coefficients irrationnels',
          stepTitle: 'Équation avec des racines carrées',
          paragraphText:
            'La méthode du discriminant fonctionne exactement de la même façon lorsque les coefficients contiennent $\\sqrt{2}$ ou $\\sqrt{3}$ : on simplifie $\\Delta$ comme un carré parfait.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q2',
            type: 'mcq',
            prompt: "Quelles sont les solutions de $\\sqrt{2}\\,x^2 + (1-\\sqrt{2})x - 1 = 0$ (sachant $\\Delta = (1+\\sqrt{2})^2$) ?",
            options: [
              '$\\left\\{-\\dfrac{1}{\\sqrt{2}}\\,; 1\\right\\}$',
              '$\\left\\{\\dfrac{1}{\\sqrt{2}}\\,; -1\\right\\}$',
              '$\\left\\{-1\\,; \\sqrt{2}\\right\\}$',
              '$\\{1\\}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$x_1 = \\dfrac{-(1-\\sqrt{2})-(1+\\sqrt{2})}{2\\sqrt{2}} = -\\dfrac{1}{\\sqrt{2}}$ et $x_2 = \\dfrac{-(1-\\sqrt{2})+(1+\\sqrt{2})}{2\\sqrt{2}} = 1$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Astuce',
          stepTheme: 'Signes de a et c',
          stepTitle: 'Quand a et c sont de signes contraires',
          paragraphText:
            'Si $a$ et $c$ ont des signes opposés, $-4ac > 0$, donc $\\Delta = b^2 - 4ac$ est strictement positif : il y a toujours deux solutions distinctes.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q3',
            type: 'mcq',
            prompt: 'Que peut-on affirmer immédiatement pour l’équation $9x^2 + 4x + 5 = 0$ vs $9x^2 + 4x - 5 = 0$ ?',
            options: [
              '$9x^2+4x+5=0$ a deux solutions car $a>0$ et $c>0$',
              '$9x^2+4x-5=0$ a forcément deux solutions distinctes car $a$ et $c$ sont de signes contraires',
              'Les deux équations ont $\\Delta < 0$',
              'Les deux équations ont une solution double',
            ],
            correctAnswerIndex: 1,
            explanation:
              'Pour $9x^2+4x-5=0$, $a=9$ et $c=-5$ sont de signes contraires donc $\\Delta = 16 + 180 > 0$. Pour $9x^2+4x+5=0$, $\\Delta = 16 - 180 = -164 < 0$ ($S=\\emptyset$).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Graphique',
          stepTheme: 'Lecture graphique (Δ = 0)',
          stepTitle: 'Interpréter une parabole tangente à (OI)',
          paragraphText:
            "Si la courbe $(C_f)$ d'une fonction polynôme du second degré touche l'axe des abscisses en un seul point $(x_0\\,;0)$ sans le traverser, l'équation $f(x)=0$ a une solution unique $S=\\{x_0\\}$.",
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q4',
            type: 'mcq',
            prompt: 'La parabole $(C_f)$ admet un maximum en $(3\\,;0)$ sur l’axe des abscisses et est située sous cet axe ailleurs. Quel est $S_{\\mathbb{R}}$ pour $f(x)=0$ ?',
            options: ['$S = \\emptyset$', '$S = \\{0\\}$', '$S = \\{3\\}$', '$S = \\{0\\,;3\\}$'],
            correctAnswerIndex: 2,
            explanation: 'Le seul point d’intersection avec l’axe $(OI)$ a pour abscisse $3$, donc $S = \\{3\\}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Graphique',
          stepTheme: 'Lecture graphique (Δ < 0)',
          stepTitle: 'Interpréter une parabole qui ne coupe pas (OI)',
          paragraphText:
            "Si une parabole est entièrement située au-dessus de l'axe $(OI)$ (ou entièrement en dessous), l'équation $f(x)=0$ n'a aucune solution : $S=\\emptyset$ et $\\Delta < 0$.",
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q5',
            type: 'mcq',
            prompt: 'Une parabole $(C_g)$ a pour minimum le point $(0\\,;1)$ et est tournée vers le haut. Quel est l’ensemble solution de $g(x)=0$ ?',
            options: ['$S = \\{1\\}$', '$S = \\{0\\}$', '$S = \\emptyset$', '$S = \\{-1\\,;1\\}$'],
            correctAnswerIndex: 2,
            explanation: 'La courbe reste strictement au-dessus de l’axe des abscisses ($g(x)\\ge 1$), donc elle ne coupe pas $(OI)$ : $S = \\emptyset$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Abscisses vs ordonnée',
          stepTitle: 'Ne pas confondre zéro et ordonnée à l’origine',
          paragraphText:
            "Les solutions de $f(x)=0$ se lisent sur l'axe **horizontal** $(OI)$ (où $y=0$), et non sur l'axe vertical $(OJ)$ où $x=0$.",
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q6',
            type: 'mcq',
            prompt: "La parabole de $h(x)=-x^2+x+2$ coupe $(OI)$ en $(-1\\,;0)$ et $(2\\,;0)$ et $(OJ)$ en $(0\\,;2)$. Quelles sont les solutions de $h(x)=0$ ?",
            options: ['$\\{0\\,;2\\}$', '$\\{-1\\,;2\\}$', '$\\{-1\\,;0\\,;2\\}$', '$\\{2\\}$'],
            correctAnswerIndex: 1,
            explanation: 'On lit les abscisses des intersections avec $(OI)$ : $x=-1$ et $x=2$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q1',
          type: 'mcq',
          prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $-2x^2 + 5x + 3 = 0$ ?",
          options: [
            '$\\left\\{-\\dfrac{1}{2}\\,; 3\\right\\}$',
            '$\\left\\{\\dfrac{1}{2}\\,; -3\\right\\}$',
            '$\\left\\{-3\\,; -\\dfrac{1}{2}\\right\\}$',
            '$\\emptyset$',
          ],
          correctAnswerIndex: 0,
          explanation: '$\\Delta = 25 - 4(-2)(3) = 49$. $x_1 = \\dfrac{-5+7}{-4} = -\\dfrac{1}{2}$ et $x_2 = \\dfrac{-5-7}{-4} = 3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q2',
          type: 'mcq',
          prompt: "Quelles sont les solutions de $\\sqrt{2}\\,x^2 + (1-\\sqrt{2})x - 1 = 0$ (sachant $\\Delta = (1+\\sqrt{2})^2$) ?",
          options: [
            '$\\left\\{-\\dfrac{1}{\\sqrt{2}}\\,; 1\\right\\}$',
            '$\\left\\{\\dfrac{1}{\\sqrt{2}}\\,; -1\\right\\}$',
            '$\\left\\{-1\\,; \\sqrt{2}\\right\\}$',
            '$\\{1\\}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$x_1 = \\dfrac{-(1-\\sqrt{2})-(1+\\sqrt{2})}{2\\sqrt{2}} = -\\dfrac{1}{\\sqrt{2}}$ et $x_2 = \\dfrac{-(1-\\sqrt{2})+(1+\\sqrt{2})}{2\\sqrt{2}} = 1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q3',
          type: 'mcq',
          prompt: 'Que peut-on affirmer immédiatement pour l’équation $9x^2 + 4x + 5 = 0$ vs $9x^2 + 4x - 5 = 0$ ?',
          options: [
            '$9x^2+4x+5=0$ a deux solutions car $a>0$ et $c>0$',
            '$9x^2+4x-5=0$ a forcément deux solutions distinctes car $a$ et $c$ sont de signes contraires',
            'Les deux équations ont $\\Delta < 0$',
            'Les deux équations ont une solution double',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Pour $9x^2+4x-5=0$, $a=9$ et $c=-5$ sont de signes contraires donc $\\Delta = 16 + 180 > 0$. Pour $9x^2+4x+5=0$, $\\Delta = 16 - 180 = -164 < 0$ ($S=\\emptyset$).',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q4',
          type: 'mcq',
          prompt: 'La parabole $(C_f)$ admet un maximum en $(3\\,;0)$ sur l’axe des abscisses et est située sous cet axe ailleurs. Quel est $S_{\\mathbb{R}}$ pour $f(x)=0$ ?',
          options: ['$S = \\emptyset$', '$S = \\{0\\}$', '$S = \\{3\\}$', '$S = \\{0\\,;3\\}$'],
          correctAnswerIndex: 2,
          explanation: 'Le seul point d’intersection avec l’axe $(OI)$ a pour abscisse $3$, donc $S = \\{3\\}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q5',
          type: 'mcq',
          prompt: 'Une parabole $(C_g)$ a pour minimum le point $(0\\,;1)$ et est tournée vers le haut. Quel est l’ensemble solution de $g(x)=0$ ?',
          options: ['$S = \\{1\\}$', '$S = \\{0\\}$', '$S = \\emptyset$', '$S = \\{-1\\,;1\\}$'],
          correctAnswerIndex: 2,
          explanation: 'La courbe reste strictement au-dessus de l’axe des abscisses ($g(x)\\ge 1$), donc elle ne coupe pas $(OI)$ : $S = \\emptyset$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p02_q6',
          type: 'mcq',
          prompt: "La parabole de $h(x)=-x^2+x+2$ coupe $(OI)$ en $(-1\\,;0)$ et $(2\\,;0)$ et $(OJ)$ en $(0\\,;2)$. Quelles sont les solutions de $h(x)=0$ ?",
          options: ['$\\{0\\,;2\\}$', '$\\{-1\\,;2\\}$', '$\\{-1\\,;0\\,;2\\}$', '$\\{2\\}$'],
          correctAnswerIndex: 1,
          explanation: 'On lit les abscisses des intersections avec $(OI)$ : $x=-1$ et $x=2$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Somme et produit des solutions
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l01_equations_inequations_p03',
      order: 3,
      title: 'Somme et produit des solutions',
      summary: 'Utiliser x₁ + x₂ = −b/a et x₁x₂ = c/a, et trouver deux réels connaissant S et P.',
      conceptExplanation:
        "**Propriété 1 :** Si l'équation $ax^2+bx+c=0$ ($a\\neq 0$) possède deux solutions $x_1$ et $x_2$ (distinctes ou non), alors :\n$$S = x_1 + x_2 = -\\dfrac{b}{a} \\qquad \\text{et} \\qquad P = x_1 x_2 = \\dfrac{c}{a}.$$\nCela permet de trouver immédiatement la deuxième racine quand on en connaît une.\n\n**Propriété 2 :** Deux nombres réels ont pour somme $S$ et pour produit $P$ **si et seulement si** $S^2 - 4P \\ge 0$. Dans ce cas, ces deux nombres sont les solutions de l'équation :\n$$x^2 - Sx + P = 0.$$",
      keyRule:
        'x₁ + x₂ = −b/a et x₁x₂ = c/a. Réciproquement, deux réels de somme S et produit P existent ssi S² − 4P ≥ 0 et sont solutions de x² − Sx + P = 0.',
      formulas: [
        { name: 'Somme et produit', formula: 'x_1 + x_2 = -\\dfrac{b}{a},\\qquad x_1 x_2 = \\dfrac{c}{a}' },
        { name: 'Existence (S, P)', formula: 'S^2 - 4P \\ge 0 \\implies x^2 - Sx + P = 0' },
      ],
      workedExample: {
        title: 'Trouver deux nombres de somme S = −3 et produit P = −4',
        statement: 'Détermine deux nombres réels, s’ils existent, dont la somme vaut $S=-3$ et le produit $P=-4$.',
        methodSteps: [
          'On vérifie la condition : $S^2 - 4P = (-3)^2 - 4(-4) = 9 + 16 = 25 \\ge 0$. Les deux nombres existent.',
          'Ils sont solutions de $x^2 - Sx + P = 0$, soit $x^2 + 3x - 4 = 0$.',
          '$\\Delta = 25$, donc $x_1 = \\dfrac{-3+5}{2} = 1$ et $x_2 = \\dfrac{-3-5}{2} = -4$.',
        ],
        conclusion: 'Les deux nombres recherchés sont $1$ et $-4$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Somme et produit',
          stepTitle: 'Trouver la seconde racine connaissant la première',
          paragraphText:
            'Si une équation $ax^2+bx+c=0$ admet $x_1$ comme solution, on trouve l’autre solution $x_2$ très vite grâce à $x_1 + x_2 = -\\dfrac{b}{a}$ ou $x_1 x_2 = \\dfrac{c}{a}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q1',
            type: 'mcq',
            prompt: "L'équation $x^2 + 5x + 4 = 0$ admet $-1$ comme solution. Quelle est l'autre solution ?",
            options: ['$4$', '$-4$', '$-5$', '$5$'],
            correctAnswerIndex: 1,
            explanation: 'Par le produit : $-1 \\times x_2 = \\dfrac{4}{1} \\implies x_2 = -4$. (Somme : $-1 + (-4) = -5$.)',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Vérifier sans discriminant',
          stepTitle: 'Reconnaître les solutions à partir de S et P',
          paragraphText:
            'Si deux nombres $A$ et $B$ vérifient $A+B=S$ et $AB=P$, alors $A$ et $B$ sont automatiquement les deux solutions de $x^2 - Sx + P = 0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q2',
            type: 'mcq',
            prompt: 'On vérifie que $A = \\sqrt{3}+2$ et $B = -\\sqrt{3}+2$ vérifient $A+B=4$ et $AB=1$. De quelle équation sont-ils solutions ?',
            options: ['$x^2 + 4x + 1 = 0$', '$x^2 - 4x + 1 = 0$', '$x^2 - 4x - 1 = 0$', '$x^2 - x + 4 = 0$'],
            correctAnswerIndex: 1,
            explanation: 'Avec $S=4$ et $P=1$, $A$ et $B$ sont solutions de $x^2 - Sx + P = 0$, soit $x^2 - 4x + 1 = 0$ (ou $x^2 = 4x - 1$).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Trouver deux réels',
          stepTitle: 'Condition S² − 4P ≥ 0 et résolution de x² − Sx + P = 0',
          paragraphText:
            'Avant de résoudre $x^2 - Sx + P = 0$, on vérifie que son discriminant $\\Delta = S^2 - 4P$ est positif ou nul.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q3',
            type: 'mcq',
            prompt: 'Quels sont les deux nombres réels dont la somme vaut $S = 2\\sqrt{5}$ et le produit $P = 3$ ?',
            options: [
              '$\\sqrt{5} - \\sqrt{2}$ et $\\sqrt{5} + \\sqrt{2}$',
              '$\\sqrt{5} - 3$ et $\\sqrt{5} + 3$',
              '$2\\sqrt{5}$ et $3$',
              'Aucun couple réel n’existe',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$S^2 - 4P = 20 - 12 = 8 \\ge 0$. L’équation $x^2 - 2\\sqrt{5}x + 3 = 0$ a $\\Delta = 8$, d’où $\\dfrac{2\\sqrt{5}\\pm 2\\sqrt{2}}{2} = \\sqrt{5} \\pm \\sqrt{2}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Signe devant S',
          stepTitle: 'Attention au signe moins dans x² − Sx + P = 0',
          paragraphText:
            'Dans $x^2 - Sx + P = 0$, c’est **$-S$** qui est devant $x$ : si la somme $S$ est positive (par exemple $S=28$), l’équation s’écrit $x^2 - 28x + P = 0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q4',
            type: 'mcq',
            prompt: 'Détermine deux réels dont la somme est $S = 28$ et le produit $P = 195$.',
            options: ['$12$ et $16$', '$13$ et $15$', '$11$ et $17$', '$9$ et $19$'],
            correctAnswerIndex: 1,
            explanation: '$x^2 - 28x + 195 = 0$ donne $\\Delta = 784 - 780 = 4$, soit $x = \\dfrac{28 \\pm 2}{2}$ : $13$ et $15$ ($13\\times 15 = 195$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Système',
          stepTheme: 'Système symétrique',
          stepTitle: 'Se ramener à (S, P) avec x² + y² = (x + y)² − 2xy',
          paragraphText:
            "Pour résoudre un système du type $\\begin{cases}x+y=a\\\\ x^2+y^2=b\\end{cases}$, on utilise $(x+y)^2 = x^2+y^2+2xy$ pour trouver le produit $P=xy$, puis on résout $t^2 - St + P = 0$.",
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q5',
            type: 'mcq',
            prompt: 'Quels sont les couples $(x\\,;y)$ solutions du système $\\begin{cases}x+y=2\\\\ x^2+y^2=34\\end{cases}$ ?',
            options: [
              '$(5\\,;-3)$ et $(-3\\,;5)$',
              '$(5\\,;3)$ et $(3\\,;5)$',
              '$(-5\\,;3)$ et $(3\\,;-5)$',
              '$(2\\,;32)$ et $(32\\,;2)$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$(x+y)^2 = 4 = 34 + 2xy \\implies xy = -15$. Les nombres $x$ et $y$ sont solutions de $t^2 - 2t - 15 = 0$, soit $5$ et $-3$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Problème',
          stepTheme: 'Mise en équation',
          stepTitle: 'Problème géométrique : dimensions d’un jardin',
          paragraphText:
            'Beaucoup de problèmes d’aire et de périmètre donnent directement le produit $P=L\\times \\ell$ et la somme $S=L+\\ell$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q6',
            type: 'mcq',
            prompt:
              "Un jardin rectangulaire a pour aire $360\\text{ m}^2$. En augmentant $L$ et $\\ell$ de $6\\text{ m}$ chacun, l'aire devient $630\\text{ m}^2$ (soit $L+\\ell=39$). Quelles sont $L$ et $\\ell$ ?",
            options: ['$L=24\\text{ m}$ et $\\ell=15\\text{ m}$', '$L=24\\text{ m}$ et $\\ell=14\\text{ m}$', '$L=30\\text{ m}$ et $\\ell=12\\text{ m}$', '$L=20\\text{ m}$ et $\\ell=18\\text{ m}$'],
            correctAnswerIndex: 0,
            explanation:
              '$L$ et $\\ell$ sont solutions de $x^2 - 39x + 360 = 0$ : $\\Delta = 1521 - 1440 = 81$, donc $L = \\dfrac{39+9}{2} = 24\\text{ m}$ et $\\ell = \\dfrac{39-9}{2} = 15\\text{ m}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q1',
          type: 'mcq',
          prompt: "L'équation $x^2 + 5x + 4 = 0$ admet $-1$ comme solution. Quelle est l'autre solution ?",
          options: ['$4$', '$-4$', '$-5$', '$5$'],
          correctAnswerIndex: 1,
          explanation: 'Par le produit : $-1 \\times x_2 = \\dfrac{4}{1} \\implies x_2 = -4$. (Somme : $-1 + (-4) = -5$.)',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q2',
          type: 'mcq',
          prompt: 'On vérifie que $A = \\sqrt{3}+2$ et $B = -\\sqrt{3}+2$ vérifient $A+B=4$ et $AB=1$. De quelle équation sont-ils solutions ?',
          options: ['$x^2 + 4x + 1 = 0$', '$x^2 - 4x + 1 = 0$', '$x^2 - 4x - 1 = 0$', '$x^2 - x + 4 = 0$'],
          correctAnswerIndex: 1,
          explanation: 'Avec $S=4$ et $P=1$, $A$ et $B$ sont solutions de $x^2 - Sx + P = 0$, soit $x^2 - 4x + 1 = 0$ (ou $x^2 = 4x - 1$).',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q3',
          type: 'mcq',
          prompt: 'Quels sont les deux nombres réels dont la somme vaut $S = 2\\sqrt{5}$ et le produit $P = 3$ ?',
          options: [
            '$\\sqrt{5} - \\sqrt{2}$ et $\\sqrt{5} + \\sqrt{2}$',
            '$\\sqrt{5} - 3$ et $\\sqrt{5} + 3$',
            '$2\\sqrt{5}$ et $3$',
            'Aucun couple réel n’existe',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$S^2 - 4P = 20 - 12 = 8 \\ge 0$. L’équation $x^2 - 2\\sqrt{5}x + 3 = 0$ a $\\Delta = 8$, d’où $\\dfrac{2\\sqrt{5}\\pm 2\\sqrt{2}}{2} = \\sqrt{5} \\pm \\sqrt{2}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q4',
          type: 'mcq',
          prompt: 'Détermine deux réels dont la somme est $S = 28$ et le produit $P = 195$.',
          options: ['$12$ et $16$', '$13$ et $15$', '$11$ et $17$', '$9$ et $19$'],
          correctAnswerIndex: 1,
          explanation: '$x^2 - 28x + 195 = 0$ donne $\\Delta = 784 - 780 = 4$, soit $x = \\dfrac{28 \\pm 2}{2}$ : $13$ et $15$ ($13\\times 15 = 195$).',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q5',
          type: 'mcq',
          prompt: 'Quels sont les couples $(x\\,;y)$ solutions du système $\\begin{cases}x+y=2\\\\ x^2+y^2=34\\end{cases}$ ?',
          options: [
            '$(5\\,;-3)$ et $(-3\\,;5)$',
            '$(5\\,;3)$ et $(3\\,;5)$',
            '$(-5\\,;3)$ et $(3\\,;-5)$',
            '$(2\\,;32)$ et $(32\\,;2)$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$(x+y)^2 = 4 = 34 + 2xy \\implies xy = -15$. Les nombres $x$ et $y$ sont solutions de $t^2 - 2t - 15 = 0$, soit $5$ et $-3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p03_q6',
          type: 'mcq',
          prompt:
            "Un jardin rectangulaire a pour aire $360\\text{ m}^2$. En augmentant $L$ et $\\ell$ de $6\\text{ m}$ chacun, l'aire devient $630\\text{ m}^2$ (soit $L+\\ell=39$). Quelles sont $L$ et $\\ell$ ?",
          options: ['$L=24\\text{ m}$ et $\\ell=15\\text{ m}$', '$L=24\\text{ m}$ et $\\ell=14\\text{ m}$', '$L=30\\text{ m}$ et $\\ell=12\\text{ m}$', '$L=20\\text{ m}$ et $\\ell=18\\text{ m}$'],
          correctAnswerIndex: 0,
          explanation:
            '$L$ et $\\ell$ sont solutions de $x^2 - 39x + 360 = 0$ : $\\Delta = 1521 - 1440 = 81$, donc $L = \\dfrac{39+9}{2} = 24\\text{ m}$ et $\\ell = \\dfrac{39-9}{2} = 15\\text{ m}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Signe d'un polynôme et inéquations du second degré
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l01_equations_inequations_p04',
      order: 4,
      title: "Signe d'un polynôme et inéquations du second degré",
      summary: 'Dresser le tableau de signes de P(x) = ax² + bx + c selon Δ et résoudre une inéquation.',
      conceptExplanation:
        "Pour tout polynôme $P(x)=ax^2+bx+c$ ($a\\neq 0$) :\n- **Si $\\Delta > 0$** (racines $x_1 < x_2$) : $P(x)$ est du **signe de $a$ à l'extérieur des racines** ($]-\\infty;x_1[$ et $]x_2;+\\infty[$) et du **signe de $-a$ entre les racines** ($]x_1;x_2[$).\n- **Si $\\Delta = 0$** (zéro double $x_0$) : $P(x)$ est toujours du signe de $a$, et nul en $x_0$.\n- **Si $\\Delta < 0$** : $P(x)$ est strictement du signe de $a$ sur tout $\\mathbb{R}$.\n\nPour résoudre $P(x) > 0$, $\\ge 0$, $< 0$ ou $\\le 0$, on étudie le signe de $P(x)$ puis on lit l'intervalle (ou la réunion d'intervalles) correspondant.",
      keyRule:
        'Règle d’or : P(x) est du signe de a partout sur ℝ, SAUF entre les deux racines (quand Δ > 0) où il prend le signe contraire (−a).',
      formulas: [
        { name: 'Δ > 0', formula: '\\text{Signe de } a \\text{ sur } ]-\\infty;x_1[\\cup]x_2;+\\infty[,\\; -a \\text{ sur } ]x_1;x_2[' },
        { name: 'Δ ≤ 0', formula: 'P(x) \\text{ garde le signe de } a \\text{ (nul en } x_0 \\text{ si } \\Delta=0)' },
      ],
      workedExample: {
        title: 'Résoudre 2x² − 5x + 3 < 0',
        statement: 'Résous dans $\\mathbb{R}$ l’inéquation $2x^2 - 5x + 3 < 0$.',
        methodSteps: [
          'Pour $P(x)=2x^2-5x+3$, on a $a=2>0$ et $\\Delta = (-5)^2 - 4(2)(3) = 1 > 0$.',
          'Les racines sont $x_1 = \\dfrac{5-1}{4} = 1$ et $x_2 = \\dfrac{5+1}{4} = \\dfrac{3}{2}$.',
          '$P(x)$ est négatif (signe de $-a$) strictement entre les racines.',
        ],
        conclusion: '$S_{\\mathbb{R}} = \\left]1\\,;\\dfrac{3}{2}\\right[$.',
      },
      visualSchema: {
        type: 'sign_table',
        title: 'Signe de P(x) = 2x² − 8x + 6 (a = 2 > 0, racines 1 et 3)',
        caption: 'Signe de a (+) à l’extérieur des racines, signe de −a (−) entre 1 et 3.',
        signs: {
          xLabel: 'x',
          xValues: ['−∞', '1', '3', '+∞'],
          rows: [{ label: 'P(x)', cells: ['+', '0', '−', '0', '+'] }],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Tableau',
          stepTheme: 'Signe quand Δ > 0',
          stepTitle: 'Signe de a à l’extérieur, −a entre les racines',
          paragraphText:
            'Si $P$ a deux racines $x_1 < x_2$, on place $x_1$ puis $x_2$ dans le tableau : on met le signe de $a$ à gauche de $x_1$ et à droite de $x_2$, et le signe opposé entre $x_1$ et $x_2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q1',
            type: 'mcq',
            prompt: 'Les racines de $P(x)=2x^2-8x+6$ sont $1$ et $3$. Sur quel ensemble a-t-on $P(x) < 0$ ?',
            options: ['$]-\\infty\\,;1[\\cup]3\\,;+\\infty[$', '$]1\\,;3[$', '$[1\\,;3]$', '$\\mathbb{R}$'],
            correctAnswerIndex: 1,
            explanation: 'Comme $a=2>0$, $P(x)$ est négatif (signe de $-a$) strictement entre les racines, sur $]1\\,;3[$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Cas Δ < 0',
          stepTheme: 'Signe quand Δ < 0',
          stepTitle: 'Signe constant quand il n’y a aucune racine',
          paragraphText:
            'Si $\\Delta < 0$, $P(x)$ ne s’annule jamais et garde partout le signe de son coefficient dominant $a$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q2',
            type: 'mcq',
            prompt: 'Pour $Q(x) = -2x^2 - 8x - 11$, on a $\\Delta = -24 < 0$. Quel est le signe de $Q(x)$ sur $\\mathbb{R}$ ?',
            options: ['$Q(x) > 0$ pour tout $x\\in\\mathbb{R}$', '$Q(x) < 0$ pour tout $x\\in\\mathbb{R}$', '$Q(x)$ change de signe en $0$', '$Q(x)=0$ a deux solutions'],
            correctAnswerIndex: 1,
            explanation: 'Ici $\\Delta < 0$ et $a=-2 < 0$, donc $Q(x)$ garde toujours le signe de $a$ : $Q(x) < 0$ sur tout $\\mathbb{R}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Cas Δ = 0',
          stepTitle: 'Inéquations quand Δ = 0 (attention au zéro double)',
          paragraphText:
            "Si $a<0$ et $\\Delta=0$ (zéro double $x_0$), alors $P(x) \\le 0$ partout. Ainsi $P(x) \\ge 0$ n'a qu'une seule solution : $S=\\{x_0\\}$ !",
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q3',
            type: 'mcq',
            prompt: "Quel est l'ensemble solution dans $\\mathbb{R}$ de $-x^2 - 4x - 4 \\ge 0$ ?",
            options: ['$S = \\emptyset$', '$S = \\mathbb{R}$', '$S = \\{-2\\}$', '$S = ]-\\infty\\,;-2]$'],
            correctAnswerIndex: 2,
            explanation: '$-x^2-4x-4 = -(x+2)^2 \\le 0$ pour tout $x$. Il est supérieur ou égal à $0$ uniquement quand il vaut $0$, soit pour $x=-2$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Résoudre P(x) ≤ 0',
          stepTitle: 'Crochets ouverts ou fermés',
          paragraphText:
            'On inclut les racines (crochets fermés) pour $\\ge 0$ ou $\\le 0$, et on les exclut (crochets ouverts) pour $> 0$ ou $< 0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q4',
            type: 'mcq',
            prompt: "Résous dans $\\mathbb{R}$ l'inéquation $-3x^2 + 2x + 5 \\le 0$.",
            options: [
              '$\\left[-1\\,;\\dfrac{5}{3}\\right]$',
              '$]-\\infty\\,;-1]\\cup\\left[\\dfrac{5}{3}\\,;+\\infty\\right[$',
              '$]-\\infty\\,;-1[\\cup\\left]\\dfrac{5}{3}\\,;+\\infty\\right[$',
              '$\\mathbb{R}$',
            ],
            correctAnswerIndex: 1,
            explanation:
              '$\\Delta = 64$, racines $-1$ et $\\dfrac{5}{3}$. Comme $a=-3<0$, le polynôme est $\\le 0$ à l’extérieur des racines (crochets fermés).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Toujours positif',
          stepTitle: 'Inéquation vérifiée sur tout ℝ',
          paragraphText:
            'Si $a>0$ et $\\Delta<0$, alors $P(x)>0$ pour tout $x\\in\\mathbb{R}$ : l’ensemble solution est $S_{\\mathbb{R}}=\\mathbb{R}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q5',
            type: 'mcq',
            prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $x^2 + x + 2 > 0$ ?",
            options: ['$\\emptyset$', '$\\{0\\}$', '$]0\\,;+\\infty[$', '$\\mathbb{R}$'],
            correctAnswerIndex: 3,
            explanation: '$\\Delta = 1^2 - 4(1)(2) = -7 < 0$ et $a=1>0$, donc $x^2+x+2 > 0$ pour tout réel $x$ : $S=\\mathbb{R}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Situation',
          stepTheme: 'Problème de bénéfice',
          stepTitle: 'Modéliser un bénéfice par une inéquation du 2nd degré',
          paragraphText:
            "Dans un problème économique, le bénéfice vaut Recette $-$ Coût. Exiger un bénéfice supérieur ou égal à un seuil conduit à une inéquation du second degré.",
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q6',
            type: 'mcq',
            prompt:
              "Le bénéfice (en milliers de F) vaut $87q - (0{,}1q^2+10q+1500)$. La condition $B(q) \\ge 12\\,832{,}5$ équivaut à $q^2 - 770q + 143\\,325 \\le 0$ (racines $315$ et $455$). Pour quels $q$ la condition est-elle vérifiée ?",
            options: [
              '$q \\in [315\\,;455]$',
              '$q \\in ]-\\infty\\,;315]\\cup[455\\,;+\\infty[$',
              '$q \\in [310\\,;460]$ exactement',
              '$q \\in ]315\\,;455[$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans $q^2 - 770q + 143\\,325 \\le 0$, $a=1>0$, donc le polynôme est $\\le 0$ entre les racines : $q \\in [315\\,;455]$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q1',
          type: 'mcq',
          prompt: 'Les racines de $P(x)=2x^2-8x+6$ sont $1$ et $3$. Sur quel ensemble a-t-on $P(x) < 0$ ?',
          options: ['$]-\\infty\\,;1[\\cup]3\\,;+\\infty[$', '$]1\\,;3[$', '$[1\\,;3]$', '$\\mathbb{R}$'],
          correctAnswerIndex: 1,
          explanation: 'Comme $a=2>0$, $P(x)$ est négatif (signe de $-a$) strictement entre les racines, sur $]1\\,;3[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q2',
          type: 'mcq',
          prompt: 'Pour $Q(x) = -2x^2 - 8x - 11$, on a $\\Delta = -24 < 0$. Quel est le signe de $Q(x)$ sur $\\mathbb{R}$ ?',
          options: ['$Q(x) > 0$ pour tout $x\\in\\mathbb{R}$', '$Q(x) < 0$ pour tout $x\\in\\mathbb{R}$', '$Q(x)$ change de signe en $0$', '$Q(x)=0$ a deux solutions'],
          correctAnswerIndex: 1,
          explanation: 'Ici $\\Delta < 0$ et $a=-2 < 0$, donc $Q(x)$ garde toujours le signe de $a$ : $Q(x) < 0$ sur tout $\\mathbb{R}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q3',
          type: 'mcq',
          prompt: "Quel est l'ensemble solution dans $\\mathbb{R}$ de $-x^2 - 4x - 4 \\ge 0$ ?",
          options: ['$S = \\emptyset$', '$S = \\mathbb{R}$', '$S = \\{-2\\}$', '$S = ]-\\infty\\,;-2]$'],
          correctAnswerIndex: 2,
          explanation: '$-x^2-4x-4 = -(x+2)^2 \\le 0$ pour tout $x$. Il est supérieur ou égal à $0$ uniquement quand il vaut $0$, soit pour $x=-2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q4',
          type: 'mcq',
          prompt: "Résous dans $\\mathbb{R}$ l'inéquation $-3x^2 + 2x + 5 \\le 0$.",
          options: [
            '$\\left[-1\\,;\\dfrac{5}{3}\\right]$',
            '$]-\\infty\\,;-1]\\cup\\left[\\dfrac{5}{3}\\,;+\\infty\\right[$',
            '$]-\\infty\\,;-1[\\cup\\left]\\dfrac{5}{3}\\,;+\\infty\\right[$',
            '$\\mathbb{R}$',
          ],
          correctAnswerIndex: 1,
          explanation:
            '$\\Delta = 64$, racines $-1$ et $\\dfrac{5}{3}$. Comme $a=-3<0$, le polynôme est $\\le 0$ à l’extérieur des racines (crochets fermés).',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q5',
          type: 'mcq',
          prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $x^2 + x + 2 > 0$ ?",
          options: ['$\\emptyset$', '$\\{0\\}$', '$]0\\,;+\\infty[$', '$\\mathbb{R}$'],
          correctAnswerIndex: 3,
          explanation: '$\\Delta = 1^2 - 4(1)(2) = -7 < 0$ et $a=1>0$, donc $x^2+x+2 > 0$ pour tout réel $x$ : $S=\\mathbb{R}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p04_q6',
          type: 'mcq',
          prompt:
            "Le bénéfice (en milliers de F) vaut $87q - (0{,}1q^2+10q+1500)$. La condition $B(q) \\ge 12\\,832{,}5$ équivaut à $q^2 - 770q + 143\\,325 \\le 0$ (racines $315$ et $455$). Pour quels $q$ la condition est-elle vérifiée ?",
          options: [
            '$q \\in [315\\,;455]$',
            '$q \\in ]-\\infty\\,;315]\\cup[455\\,;+\\infty[$',
            '$q \\in [310\\,;460]$ exactement',
            '$q \\in ]315\\,;455[$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans $q^2 - 770q + 143\\,325 \\le 0$, $a=1>0$, donc le polynôme est $\\le 0$ entre les racines : $q \\in [315\\,;455]$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Équations bicarrées
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l01_equations_inequations_p05',
      order: 5,
      title: 'Équations bicarrées',
      summary: 'Poser X = x² (X ≥ 0), résoudre aX² + bX + c = 0 puis revenir à l’inconnue x.',
      conceptExplanation:
        "On appelle **équation bicarrée** toute équation de la forme :\n$$ax^4 + bx^2 + c = 0 \\qquad (a\\neq 0).$$\n\n**Méthode de résolution :**\n1. On pose $X = x^2$ (avec la contrainte $X \\ge 0$).\n2. L'équation devient $aX^2 + bX + c = 0$, que l'on résout à l'aide du discriminant.\n3. Pour chaque solution $X$ obtenue :\n   - si $X > 0$, on obtient deux solutions en $x$ : $x = -\\sqrt{X}$ et $x = \\sqrt{X}$ ;\n   - si $X = 0$, on obtient $x = 0$ ;\n   - si $X < 0$, l'équation $x^2 = X$ n'a aucune solution réelle (on rejette ce $X$).",
      keyRule:
        'Toujours poser X = x² ≥ 0 : ne jamais oublier d’écarter les solutions X < 0 et de prendre ±√X pour chaque X > 0 !',
      formulas: [
        { name: 'Changement d’inconnue', formula: 'X = x^2 \\ge 0 \\implies aX^2 + bX + c = 0' },
        { name: 'Retour à x (si X > 0)', formula: 'x^2 = X \\iff x = -\\sqrt{X} \\text{ ou } x = \\sqrt{X}' },
      ],
      workedExample: {
        title: 'Résoudre x⁴ − 5x² + 4 = 0',
        statement: 'Résous dans $\\mathbb{R}$ l’équation $x^4 - 5x^2 + 4 = 0$.',
        methodSteps: [
          'On pose $X = x^2$. L’équation devient $X^2 - 5X + 4 = 0$.',
          '$\\Delta = 25 - 16 = 9$, donc $X_1 = 1$ et $X_2 = 4$ (tous deux positifs).',
          '$x^2 = 1 \\iff x \\in \\{-1\\,;1\\}$ et $x^2 = 4 \\iff x \\in \\{-2\\,;2\\}$.',
        ],
        conclusion: '$S_{\\mathbb{R}} = \\{-2\\,;-1\\,;1\\,;2\\}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Reconnaître une bicarrée',
          stepTitle: 'Forme ax⁴ + bx² + c = 0',
          paragraphText:
            'Une équation bicarrée ne contient que des puissances paires $x^4$, $x^2$ et une constante : le changement $X=x^2$ la ramène au second degré.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q1',
            type: 'mcq',
            prompt: 'En posant $X = x^2$, que devient l’équation bicarrée $-3x^4 + 5x^2 - 2 = 0$ ?',
            options: [
              '$-3X^2 + 5X - 2 = 0$ avec $X \\ge 0$',
              '$-3X + 5\\sqrt{X} - 2 = 0$',
              '$-9X^2 + 25X - 2 = 0$',
              '$3X^2 - 5X - 2 = 0$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Puisque $x^4 = (x^2)^2 = X^2$, on obtient $-3X^2 + 5X - 2 = 0$ avec $X = x^2 \\ge 0$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: '4 solutions',
          stepTitle: 'Résoudre quand X₁ > 0 et X₂ > 0',
          paragraphText:
            'Si les deux solutions en $X$ sont strictement positives, l’équation bicarrée admet $4$ solutions réelles : $\\pm\\sqrt{X_1}$ et $\\pm\\sqrt{X_2}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q2',
            type: 'mcq',
            prompt: "Résous dans $\\mathbb{R}$ l'équation $x^4 - 5x^2 + 4 = 0$.",
            options: [
              '$\\{1\\,;4\\}$',
              '$\\{-2\\,;-1\\,;1\\,;2\\}$',
              '$\\{-4\\,;-1\\,;1\\,;4\\}$',
              '$\\{1\\,;2\\}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$X^2-5X+4=0$ donne $X=1$ ou $X=4$, d’où $x = \\pm 1$ ou $x = \\pm 2$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Racine carrée de fraction',
          stepTitle: 'Bien diviser par 2a et simplifier les racines',
          paragraphText:
            'Pour $2X^2 - 3X + 1 = 0$, n’oublie pas que $2a = 4$, d’où $X_1 = \\dfrac{1}{2}$ et $X_2 = 1$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q3',
            type: 'mcq',
            prompt: "Quelles sont toutes les solutions dans $\\mathbb{R}$ de $2x^4 - 3x^2 + 1 = 0$ ?",
            options: [
              '$\\{-1\\,; -\\sqrt{2}\\,; \\sqrt{2}\\,; 1\\}$',
              '$\\left\\{-1\\,; -\\dfrac{\\sqrt{2}}{2}\\,; \\dfrac{\\sqrt{2}}{2}\\,; 1\\right\\}$',
              '$\\left\\{\\dfrac{1}{2}\\,; 1\\right\\}$',
              '$\\{-1\\,; 1\\}$',
            ],
            correctAnswerIndex: 1,
            explanation:
              '$2X^2-3X+1=0$ donne $X_1=\\dfrac{1}{2}$ et $X_2=1$, soit $x = \\pm\\dfrac{1}{\\sqrt{2}} = \\pm\\dfrac{\\sqrt{2}}{2}$ et $x = \\pm 1$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Rejeter X < 0',
          stepTitle: 'Un carré x² ne peut jamais être négatif',
          paragraphText:
            'Si une solution $X$ trouvée est négative (par exemple $X_1=-4$), on l’écarte immédiatement car $x^2 = -4$ est impossible dans $\\mathbb{R}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q4',
            type: 'mcq',
            prompt: "Quelles sont les solutions réelles de $x^4 + 3x^2 - 4 = 0$ ?",
            options: [
              '$\\{-2\\,;-1\\,;1\\,;2\\}$',
              '$\\{-1\\,; 1\\}$',
              '$\\{-4\\,; 1\\}$',
              '$\\emptyset$',
            ],
            correctAnswerIndex: 1,
            explanation: '$X^2+3X-4=0$ donne $X_1=-4$ (impossible car $x^2\\ge 0$) et $X_2=1 \\implies x = \\pm 1$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Cas limite',
          stepTheme: 'Aucune solution',
          stepTitle: 'Quand toutes les solutions en X sont négatives',
          paragraphText:
            'Si $X_1 < 0$ et $X_2 < 0$ (ou si $\\Delta < 0$), alors l’équation bicarrée n’a aucune solution réelle.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q5',
            type: 'mcq',
            prompt: "Quel est l'ensemble solution dans $\\mathbb{R}$ de $x^4 + 5x^2 + 6 = 0$ ?",
            options: ['$\\{-\\sqrt{3}\\,;-\\sqrt{2}\\,;\\sqrt{2}\\,;\\sqrt{3}\\}$', '$\\{-2\\,;-3\\}$', '$\\emptyset$', '$\\{0\\}$'],
            correctAnswerIndex: 2,
            explanation: '$X^2+5X+6=0$ donne $X_1=-2$ et $X_2=-3$, tous deux négatifs : $S=\\emptyset$ (d’ailleurs $x^4+5x^2+6 \\ge 6 > 0$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Factorisation',
          stepTheme: 'Cas X = 0',
          stepTitle: 'Ne pas oublier la racine x = 0',
          paragraphText:
            'Lorsque $c=0$, $X=0$ est solution et fournit l’unique valeur $x=0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q6',
            type: 'mcq',
            prompt: "Quelles sont les solutions réelles de $x^4 - 9x^2 = 0$ ?",
            options: ['$\\{-3\\,; 3\\}$', '$\\{-3\\,; 0\\,; 3\\}$', '$\\{0\\,; 9\\}$', '$\\{-9\\,; 0\\,; 9\\}$'],
            correctAnswerIndex: 1,
            explanation: '$x^2(x^2-9)=0 \\iff x^2=0$ ou $x^2=9$, soit $S=\\{-3\\,;0\\,;3\\}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q1',
          type: 'mcq',
          prompt: 'En posant $X = x^2$, que devient l’équation bicarrée $-3x^4 + 5x^2 - 2 = 0$ ?',
          options: [
            '$-3X^2 + 5X - 2 = 0$ avec $X \\ge 0$',
            '$-3X + 5\\sqrt{X} - 2 = 0$',
            '$-9X^2 + 25X - 2 = 0$',
            '$3X^2 - 5X - 2 = 0$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Puisque $x^4 = (x^2)^2 = X^2$, on obtient $-3X^2 + 5X - 2 = 0$ avec $X = x^2 \\ge 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q2',
          type: 'mcq',
          prompt: "Résous dans $\\mathbb{R}$ l'équation $x^4 - 5x^2 + 4 = 0$.",
          options: [
            '$\\{1\\,;4\\}$',
            '$\\{-2\\,;-1\\,;1\\,;2\\}$',
            '$\\{-4\\,;-1\\,;1\\,;4\\}$',
            '$\\{1\\,;2\\}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$X^2-5X+4=0$ donne $X=1$ ou $X=4$, d’où $x = \\pm 1$ ou $x = \\pm 2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q3',
          type: 'mcq',
          prompt: "Quelles sont toutes les solutions dans $\\mathbb{R}$ de $2x^4 - 3x^2 + 1 = 0$ ?",
          options: [
            '$\\{-1\\,; -\\sqrt{2}\\,; \\sqrt{2}\\,; 1\\}$',
            '$\\left\\{-1\\,; -\\dfrac{\\sqrt{2}}{2}\\,; \\dfrac{\\sqrt{2}}{2}\\,; 1\\right\\}$',
            '$\\left\\{\\dfrac{1}{2}\\,; 1\\right\\}$',
            '$\\{-1\\,; 1\\}$',
          ],
          correctAnswerIndex: 1,
          explanation:
            '$2X^2-3X+1=0$ donne $X_1=\\dfrac{1}{2}$ et $X_2=1$, soit $x = \\pm\\dfrac{1}{\\sqrt{2}} = \\pm\\dfrac{\\sqrt{2}}{2}$ et $x = \\pm 1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q4',
          type: 'mcq',
          prompt: "Quelles sont les solutions réelles de $x^4 + 3x^2 - 4 = 0$ ?",
          options: [
            '$\\{-2\\,;-1\\,;1\\,;2\\}$',
            '$\\{-1\\,; 1\\}$',
            '$\\{-4\\,; 1\\}$',
            '$\\emptyset$',
          ],
          correctAnswerIndex: 1,
          explanation: '$X^2+3X-4=0$ donne $X_1=-4$ (impossible car $x^2\\ge 0$) et $X_2=1 \\implies x = \\pm 1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q5',
          type: 'mcq',
          prompt: "Quel est l'ensemble solution dans $\\mathbb{R}$ de $x^4 + 5x^2 + 6 = 0$ ?",
          options: ['$\\{-\\sqrt{3}\\,;-\\sqrt{2}\\,;\\sqrt{2}\\,;\\sqrt{3}\\}$', '$\\{-2\\,;-3\\}$', '$\\emptyset$', '$\\{0\\}$'],
          correctAnswerIndex: 2,
          explanation: '$X^2+5X+6=0$ donne $X_1=-2$ et $X_2=-3$, tous deux négatifs : $S=\\emptyset$ (d’ailleurs $x^4+5x^2+6 \\ge 6 > 0$).',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p05_q6',
          type: 'mcq',
          prompt: "Quelles sont les solutions réelles de $x^4 - 9x^2 = 0$ ?",
          options: ['$\\{-3\\,; 3\\}$', '$\\{-3\\,; 0\\,; 3\\}$', '$\\{0\\,; 9\\}$', '$\\{-9\\,; 0\\,; 9\\}$'],
          correctAnswerIndex: 1,
          explanation: '$x^2(x^2-9)=0 \\iff x^2=0$ ou $x^2=9$, soit $S=\\{-3\\,;0\\,;3\\}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Équations irrationnelles : √P(x) = Q(x)
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l01_equations_inequations_p06',
      order: 6,
      title: 'Équations irrationnelles : √P(x) = Q(x)',
      summary: 'Utiliser l’équivalence √P(x) = Q(x) ⇔ { Q(x) ≥ 0 et P(x) = (Q(x))² }.',
      conceptExplanation:
        "Une équation est dite **irrationnelle** lorsque l'inconnue figure sous un radical ($\\sqrt{\\phantom{x}}$).\n\nPour résoudre dans $\\mathbb{R}$ une équation du type $\\sqrt{P(x)} = Q(x)$, on utilise l'équivalence fondamentale :\n$$\\sqrt{P(x)} = Q(x) \\iff \\begin{cases} Q(x) \\ge 0 \\\\ P(x) = (Q(x))^2. \\end{cases}$$\nL'ensemble des solutions est l'intersection des solutions de $P(x)=(Q(x))^2$ avec la condition $Q(x)\\ge 0$. Il est inutile d'écrire $P(x)\\ge 0$ séparément car $P(x)=(Q(x))^2$ impose déjà $P(x)\\ge 0$.",
      keyRule:
        '√P(x) = Q(x) ⇔ Q(x) ≥ 0 et P(x) = [Q(x)]². Sans la condition Q(x) ≥ 0, élever au carré crée de fausses solutions !',
      formulas: [
        {
          name: 'Équation irrationnelle',
          formula: '\\sqrt{P(x)} = Q(x) \\iff \\begin{cases} Q(x) \\ge 0 \\\\ P(x) = (Q(x))^2 \\end{cases}',
        },
      ],
      workedExample: {
        title: 'Résoudre √(x² − 1) = x + 2',
        statement: 'Résous dans $\\mathbb{R}$ l’équation $\\sqrt{x^2-1} = x+2$.',
        methodSteps: [
          'Condition : $x+2 \\ge 0 \\iff x \\in [-2\\,;+\\infty[$.',
          'Égalité des carrés : $x^2-1 = (x+2)^2 = x^2+4x+4 \\iff 4x = -5 \\iff x = -\\dfrac{5}{4}$.',
          'On vérifie : $-\\dfrac{5}{4} = -1{,}25 \\in [-2\\,;+\\infty[$.',
        ],
        conclusion: '$S_{\\mathbb{R}} = \\left\\{-\\dfrac{5}{4}\\right\\}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Équivalence',
          stepTheme: 'Le bon système',
          stepTitle: 'Écrire le système équivalent sans condition superflue',
          paragraphText:
            'On remplace $\\sqrt{P(x)}=Q(x)$ par le système $\\begin{cases}Q(x)\\ge 0\\\\ P(x)=(Q(x))^2\\end{cases}$. Une racine carrée étant toujours $\\ge 0$, $Q(x)$ doit être positif ou nul.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q1',
            type: 'mcq',
            prompt: 'À quel système l’équation $\\sqrt{P(x)} = Q(x)$ est-elle équivalente dans $\\mathbb{R}$ ?',
            options: [
              '$P(x) = (Q(x))^2$ uniquement',
              '$Q(x) \\ge 0$ et $P(x) = (Q(x))^2$',
              '$P(x) \\ge 0$ et $Q(x) \\le 0$',
              '$Q(x) \\ge 0$ et $P(x) = Q(x)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Élever au carré préserve l’égalité si et seulement si les deux membres sont positifs ou nuls, donc $Q(x)\\ge 0$ et $P(x)=(Q(x))^2$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Pourquoi',
          stepTheme: 'Condition P(x) ≥ 0',
          stepTitle: 'Pourquoi P(x) ≥ 0 est automatiquement garanti',
          paragraphText:
            'Si $P(x) = (Q(x))^2$, comme un carré de nombre réel est toujours $\\ge 0$, la condition d’existence $P(x)\\ge 0$ est automatiquement vérifiée !',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q2',
            type: 'mcq',
            prompt: 'Si un réel $x$ vérifie $P(x) = (Q(x))^2$, pourquoi est-il inutile de vérifier en plus $P(x)\\ge 0$ ?',
            options: [
              'Parce que $(Q(x))^2 \\ge 0$ entraîne immédiatement $P(x) \\ge 0$',
              'Parce qu’une racine carrée peut être négative',
              'Parce que $Q(x)$ est toujours nul',
              'Uniquement quand $P$ est du 1er degré',
            ],
            correctAnswerIndex: 0,
            explanation: 'Tout carré réel est $\\ge 0$, donc si $P(x) = (Q(x))^2$, alors $P(x)\\ge 0$ est forcément vrai.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Solution négative valide',
          stepTitle: 'Attention : x peut être négatif tant que Q(x) ≥ 0 !',
          paragraphText:
            'Dans $\\sqrt{x^2-1}=x+2$, la solution $x=-\\dfrac{5}{4}$ est négative, mais $Q(x)=x+2 = \\dfrac{3}{4} \\ge 0$ : elle est donc bien valide.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q3',
            type: 'mcq',
            prompt: "Résous dans $\\mathbb{R}$ l'équation $\\sqrt{x^2-1} = x+2$.",
            options: [
              '$S = \\emptyset$',
              '$S = \\left\\{-\\dfrac{5}{4}\\right\\}$',
              '$S = \\left\\{\\dfrac{5}{4}\\right\\}$',
              '$S = \\{-2\\}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$x+2\\ge 0 \\iff x\\ge -2$, et $x^2-1=x^2+4x+4 \\implies x=-\\dfrac{5}{4} \\ge -2$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Filtrer les solutions',
          stepTitle: 'Éliminer les fausses solutions créées par le carré',
          paragraphText:
            "Quand $P(x)=(Q(x))^2$ donne deux valeurs, il faut vérifier lesquelles appartiennent à l'ensemble où $Q(x)\\ge 0$.",
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q4',
            type: 'mcq',
            prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\sqrt{x+6} = x$ ?",
            options: ['$\\{-2\\,;3\\}$', '$\\{3\\}$', '$\\{-2\\}$', '$\\emptyset$'],
            correctAnswerIndex: 1,
            explanation: '$x\\ge 0$ et $x+6=x^2 \\iff x^2-x-6=0$, racines $3$ et $-2$. On rejette $-2 < 0$ : $S=\\{3\\}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Lien bicarrée',
          stepTheme: 'Irrationnelle et bicarrée',
          stepTitle: 'Combiner équation irrationnelle et équation bicarrée',
          paragraphText:
            'Dans $x^2+1=\\sqrt{5-x^2}$, on a $Q(x)=x^2+1 > 0$ pour tout $x$, et l’élévation au carré mène à une équation bicarrée.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q5',
            type: 'mcq',
            prompt: "Résous dans $\\mathbb{R}$ l'équation $x^2 + 1 = \\sqrt{5 - x^2}$.",
            options: ['$\\{-2\\,;-1\\,;1\\,;2\\}$', '$\\{-1\\,; 1\\}$', '$\\{1\\}$', '$\\emptyset$'],
            correctAnswerIndex: 1,
            explanation:
              '$x^2+1\\ge 0$ toujours vrai ; $(x^2+1)^2=5-x^2 \\iff x^4+3x^2-4=0$. Avec $X=x^2\\ge 0$, $X=1$ ($X=-4$ rejeté), d’où $S=\\{-1\\,;1\\}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Réflexe',
          stepTheme: 'Membre négatif',
          stepTitle: 'Solution immédiate quand Q(x) est toujours strictement négatif',
          paragraphText:
            'Si $Q(x) < 0$ (par exemple $\\sqrt{2x+3} = -1$), l’équation est impossible sans aucun calcul car une racine carrée est toujours positive ou nulle.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q6',
            type: 'mcq',
            prompt: "Résous dans $\\mathbb{R}$ l'équation $\\sqrt{2x+3} = -1$.",
            options: ['$\\{-1\\}$', '$\\{-2\\}$', '$\\emptyset$', '$\\left\\{-\\dfrac{3}{2}\\right\\}$'],
            correctAnswerIndex: 2,
            explanation: 'On a $\\sqrt{2x+3} \\ge 0$ alors que $-1 < 0$, donc $S = \\emptyset$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q1',
          type: 'mcq',
          prompt: 'À quel système l’équation $\\sqrt{P(x)} = Q(x)$ est-elle équivalente dans $\\mathbb{R}$ ?',
          options: [
            '$P(x) = (Q(x))^2$ uniquement',
            '$Q(x) \\ge 0$ et $P(x) = (Q(x))^2$',
            '$P(x) \\ge 0$ et $Q(x) \\le 0$',
            '$Q(x) \\ge 0$ et $P(x) = Q(x)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Élever au carré préserve l’égalité si et seulement si les deux membres sont positifs ou nuls, donc $Q(x)\\ge 0$ et $P(x)=(Q(x))^2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q2',
          type: 'mcq',
          prompt: 'Si un réel $x$ vérifie $P(x) = (Q(x))^2$, pourquoi est-il inutile de vérifier en plus $P(x)\\ge 0$ ?',
          options: [
            'Parce que $(Q(x))^2 \\ge 0$ entraîne immédiatement $P(x) \\ge 0$',
            'Parce qu’une racine carrée peut être négative',
            'Parce que $Q(x)$ est toujours nul',
            'Uniquement quand $P$ est du 1er degré',
          ],
          correctAnswerIndex: 0,
          explanation: 'Tout carré réel est $\\ge 0$, donc si $P(x) = (Q(x))^2$, alors $P(x)\\ge 0$ est forcément vrai.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q3',
          type: 'mcq',
          prompt: "Résous dans $\\mathbb{R}$ l'équation $\\sqrt{x^2-1} = x+2$.",
          options: [
            '$S = \\emptyset$',
            '$S = \\left\\{-\\dfrac{5}{4}\\right\\}$',
            '$S = \\left\\{\\dfrac{5}{4}\\right\\}$',
            '$S = \\{-2\\}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$x+2\\ge 0 \\iff x\\ge -2$, et $x^2-1=x^2+4x+4 \\implies x=-\\dfrac{5}{4} \\ge -2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q4',
          type: 'mcq',
          prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\sqrt{x+6} = x$ ?",
          options: ['$\\{-2\\,;3\\}$', '$\\{3\\}$', '$\\{-2\\}$', '$\\emptyset$'],
          correctAnswerIndex: 1,
          explanation: '$x\\ge 0$ et $x+6=x^2 \\iff x^2-x-6=0$, racines $3$ et $-2$. On rejette $-2 < 0$ : $S=\\{3\\}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q5',
          type: 'mcq',
          prompt: "Résous dans $\\mathbb{R}$ l'équation $x^2 + 1 = \\sqrt{5 - x^2}$.",
          options: ['$\\{-2\\,;-1\\,;1\\,;2\\}$', '$\\{-1\\,; 1\\}$', '$\\{1\\}$', '$\\emptyset$'],
          correctAnswerIndex: 1,
          explanation:
            '$x^2+1\\ge 0$ toujours vrai ; $(x^2+1)^2=5-x^2 \\iff x^4+3x^2-4=0$. Avec $X=x^2\\ge 0$, $X=1$ ($X=-4$ rejeté), d’où $S=\\{-1\\,;1\\}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p06_q6',
          type: 'mcq',
          prompt: "Résous dans $\\mathbb{R}$ l'équation $\\sqrt{2x+3} = -1$.",
          options: ['$\\{-1\\}$', '$\\{-2\\}$', '$\\emptyset$', '$\\left\\{-\\dfrac{3}{2}\\right\\}$'],
          correctAnswerIndex: 2,
          explanation: 'On a $\\sqrt{2x+3} \\ge 0$ alors que $-1 < 0$, donc $S = \\emptyset$.',
        },
      ],
    },

    // ========================================================================
    // POINT 7 : Inéquations irrationnelles : √P(x) < Q(x) et √P(x) ≥ Q(x)
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l01_equations_inequations_p07',
      order: 7,
      title: 'Inéquations irrationnelles : √P(x) < Q(x) et √P(x) ≥ Q(x)',
      summary: 'Choisir le bon système d’équivalences selon le sens de l’inégalité.',
      conceptExplanation:
        "**Cas 1 — $\\sqrt{P(x)} < Q(x)$ :** il faut à la fois que $\\sqrt{P(x)}$ existe, que $Q(x)$ soit positif et que le carré conserve l'inégalité :\n$$\\sqrt{P(x)} < Q(x) \\iff \\begin{cases} P(x) \\ge 0 \\\\ Q(x) \\ge 0 \\text{ (ou } > 0\\text{)} \\\\ P(x) < (Q(x))^2. \\end{cases}$$\n\n**Cas 2 — $\\sqrt{P(x)} \\ge Q(x)$ :** deux situations rendent l'inégalité vraie !\n- Soit $Q(x) \\ge 0$ et $P(x) \\ge (Q(x))^2$ (les deux membres sont positifs, on peut élever au carré) ;\n- Soit $Q(x) \\le 0$ et $P(x) \\ge 0$ (car une racine carrée $\\sqrt{P(x)}\\ge 0$ est toujours supérieure à un nombre négatif ou nul).\nOn prend alors la **réunion** des solutions de ces deux systèmes.",
      keyRule:
        '√P < Q : P ≥ 0, Q ≥ 0 et P < Q² (intersection).  √P ≥ Q : (Q ≥ 0 et P ≥ Q²) OU (P ≥ 0 et Q ≤ 0) (réunion des deux cas).',
      formulas: [
        {
          name: 'Inéquation √P(x) < Q(x)',
          formula: '\\sqrt{P(x)} < Q(x) \\iff \\begin{cases} P(x) \\ge 0 \\\\ Q(x) \\ge 0 \\\\ P(x) < (Q(x))^2 \\end{cases}',
        },
        {
          name: 'Inéquation √P(x) ≥ Q(x)',
          formula:
            '\\sqrt{P(x)} \\ge Q(x) \\iff \\begin{cases} Q(x) \\ge 0 \\\\ P(x) \\ge (Q(x))^2 \\end{cases} \\text{ ou } \\begin{cases} P(x) \\ge 0 \\\\ Q(x) \\le 0 \\end{cases}',
        },
      ],
      workedExample: {
        title: 'Résoudre √(2 − x) ≥ x + 4',
        statement: 'Résous dans $\\mathbb{R}$ l’inéquation $\\sqrt{2-x} \\ge x+4$.',
        methodSteps: [
          'Cas 1 ($x+4 \\ge 0$ et $2-x \\ge (x+4)^2$) : $x\\ge -4$ et $x^2+9x+14\\le 0 \\iff x\\in[-7\\,;-2]$. Intersection : $[-4\\,;-2]$.',
          'Cas 2 ($2-x \\ge 0$ et $x+4 \\le 0$) : $x\\le 2$ et $x\\le -4$. Intersection : $]-\\infty\\,;-4]$.',
          'Réunion des deux cas : $]-\\infty\\,;-4] \\cup [-4\\,;-2] = ]-\\infty\\,;-2]$.',
        ],
        conclusion: '$S_{\\mathbb{R}} = ]-\\infty\\,;-2]$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Système <',
          stepTheme: 'Cas √P(x) < Q(x)',
          stepTitle: 'Les trois conditions pour √P(x) < Q(x)',
          paragraphText:
            'Dans $\\sqrt{P(x)} < Q(x)$, on ne doit jamais oublier la condition d’existence $P(x) \\ge 0$, car $P(x) < (Q(x))^2$ ne garantit pas que $P(x)$ est positif !',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q1',
            type: 'mcq',
            prompt: 'Pourquoi la condition $P(x) \\ge 0$ est-elle obligatoire dans $\\sqrt{P(x)} < Q(x)$ (contrairement à $\\sqrt{P}=Q$) ?',
            options: [
              'Parce que $P(x) < (Q(x))^2$ n’empêche pas $P(x)$ d’être négatif',
              'Parce que $Q(x)$ est négatif',
              'Parce que $\\sqrt{P(x)}$ peut être négatif',
              'Elle n’est pas obligatoire',
            ],
            correctAnswerIndex: 0,
            explanation: 'Être inférieur à un carré $(Q(x))^2$ n’empêche pas $P(x)$ d’être négatif ; il faut donc imposer $P(x)\\ge 0$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Application <',
          stepTheme: 'Résoudre √(x+3) < x+1',
          stepTitle: 'Calculer l’intersection des trois conditions',
          paragraphText:
            'On résout séparément $P(x)\\ge 0$, $Q(x)\\ge 0$ (strictement $>0$ ici) et $P(x) < (Q(x))^2$, puis on prend l’intersection des trois ensembles.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q2',
            type: 'mcq',
            prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\sqrt{x+3} < x+1$ ?",
            options: ['$]-\\infty\\,;-2[$', '$]-1\\,;+\\infty[$', '$]1\\,;+\\infty[$', '$[-3\\,;1[$'],
            correctAnswerIndex: 2,
            explanation:
              '$x\\ge -3$, $x > -1$, et $x+3 < (x+1)^2 \\iff x^2+x-2 > 0 \\iff x\\in]-\\infty\\,;-2[\\cup]1\\,;+\\infty[$. L’intersection vaut $]1\\,;+\\infty[$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Exemple du cours',
          stepTheme: 'Résoudre √(x²+5x+3) < 2x+1',
          stepTitle: 'Inéquation avec un trinôme sous le radical',
          paragraphText:
            'Dans $\\sqrt{x^2+5x+3} < 2x+1$, on compare $x \\ge -\\dfrac{1}{2}$, $x^2+5x+3 \\ge 0$ (racines $\\dfrac{-5\\pm\\sqrt{13}}{2}$) et $3x^2-x-2 > 0$ (racines $-\\dfrac{2}{3}$ et $1$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q3',
            type: 'mcq',
            prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\sqrt{x^2+5x+3} < 2x+1$ ?",
            options: [
              '$\\left[-\\dfrac{1}{2}\\,;+\\infty\\right[$',
              '$]1\\,;+\\infty[$',
              '$\\left]-\\infty\\,;-\\dfrac{2}{3}\\right[\\cup]1\\,;+\\infty[$',
              '$[1\\,;+\\infty[$',
            ],
            correctAnswerIndex: 1,
            explanation:
              'L’intersection de $x \\ge -\\dfrac{1}{2}$ (qui est déjà dans $[\\frac{-5+\\sqrt{13}}{2}\\,;+\\infty[$ car $-0{,}5 > -0{,}697$) avec $]-\\infty\\,;-\\dfrac{2}{3}[\\cup]1\\,;+\\infty[$ donne $]1\\,;+\\infty[$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Système ≥',
          stepTheme: 'Cas √P(x) ≥ Q(x)',
          stepTitle: 'Pourquoi √P(x) ≥ Q(x) se sépare en deux cas',
          paragraphText:
            'Si $Q(x)\\le 0$, on ne peut pas élever au carré, mais tant que $P(x)\\ge 0$, on a $\\sqrt{P(x)} \\ge 0 \\ge Q(x)$ : donc tous ces $x$ sont automatiquement solutions !',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q4',
            type: 'mcq',
            prompt: "Dans le cas $\\sqrt{P(x)} \\ge Q(x)$, quelle est la bonne traduction des solutions ?",
            options: [
              '$(Q(x)\\ge 0 \\text{ et } P(x)\\ge (Q(x))^2)$ OU $(P(x)\\ge 0 \\text{ et } Q(x)\\le 0)$',
              '$(Q(x)\\ge 0 \\text{ et } P(x)\\ge (Q(x))^2)$ uniquement',
              '$P(x)\\ge 0$ et $Q(x)\\ge 0$ uniquement',
              '$(Q(x)\\le 0 \\text{ et } P(x)\\le (Q(x))^2)$',
            ],
            correctAnswerIndex: 0,
            explanation: 'C’est la réunion des solutions où $Q\\ge 0$ (et $P\\ge Q^2$) et de celles où $\\sqrt{P}$ existe ($P\\ge 0$) avec $Q\\le 0$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple du cours',
          stepTheme: 'Résoudre √(2−x) ≥ x+4',
          stepTitle: 'Réunir les deux intervalles obtenus',
          paragraphText:
            'Pour $\\sqrt{2-x} \\ge x+4$, le cas $Q\\ge 0$ donne $[-4\\,;-2]$ et le cas $Q\\le 0$ donne $]-\\infty\\,;-4]$. Leur réunion se recolle en un seul intervalle.',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q5',
            type: 'mcq',
            prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\sqrt{2-x} \\ge x+4$ ?",
            options: ['$[-4\\,;-2]$', '$]-\\infty\\,;-4]$', '$]-\\infty\\,;-2]$', '$[-7\\,;2]$'],
            correctAnswerIndex: 2,
            explanation: 'La réunion $]-\\infty\\,;-4] \\cup [-4\\,;-2]$ donne l’intervalle $]-\\infty\\,;-2]$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Intersection vs Réunion',
          stepTitle: 'Ne pas confondre « et » (∩) et « ou » (∪)',
          paragraphText:
            'À l’intérieur d’un système d’accolade, les conditions doivent être vérifiées **en même temps** (intersection $\\cap$). Entre les deux systèmes du cas $\\ge$, on prend la **réunion** ($\\cup$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q6',
            type: 'mcq',
            prompt: "Que vaut l'ensemble solution dans $\\mathbb{R}$ de $\\sqrt{x-1} \\ge -3$ ?",
            options: ['$\\emptyset$', '$[1\\,;+\\infty[$', '$[10\\,;+\\infty[$', '$\\mathbb{R}$'],
            correctAnswerIndex: 1,
            explanation:
              'Comme $-3 \\le 0$ toujours, il suffit que $\\sqrt{x-1}$ existe ($x-1 \\ge 0$), donc $S = [1\\,;+\\infty[$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q1',
          type: 'mcq',
          prompt: 'Pourquoi la condition $P(x) \\ge 0$ est-elle obligatoire dans $\\sqrt{P(x)} < Q(x)$ (contrairement à $\\sqrt{P}=Q$) ?',
          options: [
            'Parce que $P(x) < (Q(x))^2$ n’empêche pas $P(x)$ d’être négatif',
            'Parce que $Q(x)$ est négatif',
            'Parce que $\\sqrt{P(x)}$ peut être négatif',
            'Elle n’est pas obligatoire',
          ],
          correctAnswerIndex: 0,
          explanation: 'Être inférieur à un carré $(Q(x))^2$ n’empêche pas $P(x)$ d’être négatif ; il faut donc imposer $P(x)\\ge 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q2',
          type: 'mcq',
          prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\sqrt{x+3} < x+1$ ?",
          options: ['$]-\\infty\\,;-2[$', '$]-1\\,;+\\infty[$', '$]1\\,;+\\infty[$', '$[-3\\,;1[$'],
          correctAnswerIndex: 2,
          explanation:
            '$x\\ge -3$, $x > -1$, et $x+3 < (x+1)^2 \\iff x^2+x-2 > 0 \\iff x\\in]-\\infty\\,;-2[\\cup]1\\,;+\\infty[$. L’intersection vaut $]1\\,;+\\infty[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q3',
          type: 'mcq',
          prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\sqrt{x^2+5x+3} < 2x+1$ ?",
          options: [
            '$\\left[-\\dfrac{1}{2}\\,;+\\infty\\right[$',
            '$]1\\,;+\\infty[$',
            '$\\left]-\\infty\\,;-\\dfrac{2}{3}\\right[\\cup]1\\,;+\\infty[$',
            '$[1\\,;+\\infty[$',
          ],
          correctAnswerIndex: 1,
          explanation:
            'L’intersection de $x \\ge -\\dfrac{1}{2}$ (qui est déjà dans $[\\frac{-5+\\sqrt{13}}{2}\\,;+\\infty[$ car $-0{,}5 > -0{,}697$) avec $]-\\infty\\,;-\\dfrac{2}{3}[\\cup]1\\,;+\\infty[$ donne $]1\\,;+\\infty[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q4',
          type: 'mcq',
          prompt: "Dans le cas $\\sqrt{P(x)} \\ge Q(x)$, quelle est la bonne traduction des solutions ?",
          options: [
            '$(Q(x)\\ge 0 \\text{ et } P(x)\\ge (Q(x))^2)$ OU $(P(x)\\ge 0 \\text{ et } Q(x)\\le 0)$',
            '$(Q(x)\\ge 0 \\text{ et } P(x)\\ge (Q(x))^2)$ uniquement',
            '$P(x)\\ge 0$ et $Q(x)\\ge 0$ uniquement',
            '$(Q(x)\\le 0 \\text{ et } P(x)\\le (Q(x))^2)$',
          ],
          correctAnswerIndex: 0,
          explanation: 'C’est la réunion des solutions où $Q\\ge 0$ (et $P\\ge Q^2$) et de celles où $\\sqrt{P}$ existe ($P\\ge 0$) avec $Q\\le 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q5',
          type: 'mcq',
          prompt: "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\sqrt{2-x} \\ge x+4$ ?",
          options: ['$[-4\\,;-2]$', '$]-\\infty\\,;-4]$', '$]-\\infty\\,;-2]$', '$[-7\\,;2]$'],
          correctAnswerIndex: 2,
          explanation: 'La réunion $]-\\infty\\,;-4] \\cup [-4\\,;-2]$ donne l’intervalle $]-\\infty\\,;-2]$.',
        },
        {
          id: 'premiere_c_maths_numerique_l01_equations_inequations_p07_q6',
          type: 'mcq',
          prompt: "Que vaut l'ensemble solution dans $\\mathbb{R}$ de $\\sqrt{x-1} \\ge -3$ ?",
          options: ['$\\emptyset$', '$[1\\,;+\\infty[$', '$[10\\,;+\\infty[$', '$\\mathbb{R}$'],
          correctAnswerIndex: 1,
          explanation:
            'Comme $-3 \\le 0$ toujours, il suffit que $\\sqrt{x-1}$ existe ($x-1 \\ge 0$), donc $S = [1\\,;+\\infty[$.',
        },
      ],
    },
  ],
};

