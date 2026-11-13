import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 7 : Extension de la notion de limite.pdf » (format v2).
export const MATHS_1RE_C_L07_EXTENSION_LIMITE: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l07_extension_limite',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 7,
  title: 'Leçon 7 : Extension de la notion de limite',
  summary:
    'Limites infinies en un point, asymptotes verticales et horizontales, limites à l’infini, opérations et formes indéterminées, polynômes et fractions rationnelles, propriétés de comparaison et radicaux.',
  officialVolumeHours: 9,
  contentVersion: 2,
  source: '1ère C - Leçon 7 : Extension de la notion de limite.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Limites infinies en un point a et parité de l'exposant
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l07_extension_limite_p01',
      order: 1,
      title: 'Limites infinies en un point et parité de l’exposant',
      summary: 'Déterminer les limites de 1/(x − a)ⁿ à gauche, à droite ou en a selon que n est pair ou impair.',
      conceptExplanation:
        "Soit $a$ un nombre réel et $n$ un entier naturel non nul ($n \\ge 1$). Lorsque $x$ s'approche de $a$, $(x - a)^n$ tend vers $0$, donc son inverse diverge vers l'infini avec un signe qui dépend du côté et de la parité de $n$ :\n- **Si $n$ est pair** : $(x-a)^n > 0$ des deux côtés, donc $\\lim_{x\\to a} \\dfrac{1}{(x-a)^n} = +\\infty$.\n- **À droite ($x > a$)** : $x - a > 0$, donc $\\lim_{\\substack{x\\to a\\\\>}} \\dfrac{1}{(x-a)^n} = +\\infty$ (que $n$ soit pair ou impair).\n- **À gauche ($x < a$), si $n$ est impair** : $(x-a)^n < 0$, donc $\\lim_{\\substack{x\\to a\\\\<}} \\dfrac{1}{(x-a)^n} = -\\infty$.\n\nCas particuliers ($n=1$) : $\\lim_{\\substack{x\\to a\\\\>}} \\dfrac{1}{x-a} = +\\infty$ et $\\lim_{\\substack{x\\to a\\\\<}} \\dfrac{1}{x-a} = -\\infty$.",
      keyRule:
        'Si l’exposant n est pair, 1/(x − a)ⁿ → +∞ des deux côtés ; s’il est impair, c’est +∞ à droite (x > a) et −∞ à gauche (x < a).',
      formulas: [
        { name: 'Exposant n pair', formula: '\\lim_{x\\to a}\\frac{1}{(x-a)^n} = +\\infty' },
        { name: 'À droite (tout n ≥ 1)', formula: '\\lim_{\\substack{x\\to a\\\\>}}\\frac{1}{(x-a)^n} = +\\infty' },
        { name: 'À gauche (n impair)', formula: '\\lim_{\\substack{x\\to a\\\\<}}\\frac{1}{(x-a)^n} = -\\infty' },
      ],
      workedExample: {
        title: 'Calculer quatre limites infinies en un point',
        statement:
          'Calcule $\\lim_{\\substack{x\\to 4\\\\>}} \\dfrac{1}{x-4}$, $\\lim_{x\\to 0} \\dfrac{1}{x^2}$, $\\lim_{\\substack{x\\to 4\\\\<}} \\dfrac{1}{(x-4)^5}$ et $\\lim_{\\substack{x\\to 8\\\\<}} \\dfrac{1}{(x-8)^4}$.',
        methodSteps: [
          'En $x \\to 4^>$, $x - 4 > 0$, donc $\\lim_{\\substack{x\\to 4\\\\>}} \\dfrac{1}{x-4} = +\\infty$.',
          'En $x \\to 0$, $n = 2$ est pair donc $x^2 > 0$ des deux côtés : $\\lim_{x\\to 0} \\dfrac{1}{x^2} = +\\infty$.',
          'En $x \\to 4^<$, $n = 5$ est impair et $x - 4 < 0$, donc $\\lim_{\\substack{x\\to 4\\\\<}} \\dfrac{1}{(x-4)^5} = -\\infty$.',
          'En $x \\to 8^<$, même à gauche, $n = 4$ est pair donc $(x-8)^4 > 0$ : $\\lim_{\\substack{x\\to 8\\\\<}} \\dfrac{1}{(x-8)^4} = +\\infty$.',
        ],
        conclusion: 'Respectivement $+\\infty$, $+\\infty$, $-\\infty$ et $+\\infty$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Cas d’un exposant pair',
          stepTitle: 'Quand n est pair, le dénominateur reste toujours positif',
          paragraphText:
            'Si $n$ est pair (par exemple $n=2$ ou $n=4$), $(x-a)^n > 0$ pour tout $x \\neq a$, que $x$ soit à gauche ou à droite de $a$. Donc $\\lim_{x\\to a} \\dfrac{1}{(x-a)^n} = +\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q1',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to 0} \\dfrac{1}{x^2}$ ?',
            options: ['$0$', '$+\\infty$', '$-\\infty$', 'N’existe pas'],
            correctAnswerIndex: 1,
            explanation: 'L’exposant $n = 2$ est pair : pour $x \\neq 0$, $x^2 > 0$ et tend vers $0$, donc $\\dfrac{1}{x^2} \\to +\\infty$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Limite à droite et à gauche pour n impair',
          stepTitle: 'Signe de 1/(x − a)ⁿ selon x > a ou x < a',
          paragraphText:
            'Lorsque $n$ est impair, $x - a > 0$ pour $x > a$ (donc limite $+\\infty$ à droite) et $x - a < 0$ pour $x < a$ (donc limite $-\\infty$ à gauche).',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q2',
            type: 'mcq',
            prompt: 'Que valent respectivement $\\lim_{\\substack{x\\to 4\\\\>}} \\dfrac{1}{x - 4}$ et $\\lim_{\\substack{x\\to 4\\\\<}} \\dfrac{1}{(x - 4)^5}$ ?',
            options: ['$+\\infty$ et $+\\infty$', '$+\\infty$ et $-\\infty$', '$-\\infty$ et $+\\infty$', '$-\\infty$ et $-\\infty$'],
            correctAnswerIndex: 1,
            explanation: 'À droite de $4$, $x - 4 > 0 \\implies +\\infty$. À gauche de $4$, avec $n=5$ impair, $(x-4)^5 < 0 \\implies -\\infty$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'À gauche avec un exposant pair',
          stepTitle: 'Attention : x < a ne veut pas toujours dire −∞ !',
          paragraphText:
            'Beaucoup d’élèves écrivent à tort $-\\infty$ dès qu’ils voient « $x \\to a$ avec $<$ ». Vérifie toujours la parité de l’exposant ! Pour $\\lim_{\\substack{x\\to 8\\\\<}} \\dfrac{1}{(x-8)^4}$, la puissance $4$ est paire donc $(x-8)^4 > 0$ même pour $x < 8$ : la limite vaut $+\\infty$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q3',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{\\substack{x\\to 8\\\\<}} \\dfrac{1}{(x - 8)^4}$ ?',
            options: ['$-\\infty$', '$0$', '$+\\infty$', '$-1$'],
            correctAnswerIndex: 2,
            explanation: 'Même si $x < 8$, l’exposant $4$ est pair donc $(x-8)^4 > 0$, ce qui donne $+\\infty$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Signe du dénominateur x + c',
          stepTitle: 'Écrire x + c sous la forme x − (−c)',
          paragraphText:
            'Si le dénominateur est $(x + 2)^3$ avec $x \\to -2^>$, réécris-le $(x - (-2))^3$. Comme $x > -2$, $x + 2 > 0$, donc $(x+2)^3 > 0$ et la limite vaut $+\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q4',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{\\substack{x\\to -2\\\\>}} \\dfrac{1}{(x + 2)^3}$ ?',
            options: ['$-\\infty$', '$0$', '$+\\infty$', '$\\dfrac{1}{8}$'],
            correctAnswerIndex: 2,
            explanation: 'Pour $x > -2$, $x + 2 > 0$, donc $(x+2)^3 > 0$ et tend vers $0$, d’où $\\dfrac{1}{(x+2)^3} \\to +\\infty$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Signe inversé (a − x)',
          stepTitle: 'Attention quand le dénominateur est (a − x) au lieu de (x − a)',
          paragraphText:
            'Pour $\\dfrac{1}{3 - x} = -\\dfrac{1}{x - 3}$, lorsque $x \\to 3^<$, on a $x < 3$ donc $3 - x > 0$ ! Par conséquent $\\lim_{\\substack{x\\to 3\\\\<}} \\dfrac{1}{3 - x} = +\\infty$ (et non $-\\infty$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q5',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{\\substack{x\\to 3\\\\<}} \\dfrac{1}{3 - x}$ ?',
            options: ['$-\\infty$', '$+\\infty$', '$0$', '$\\dfrac{1}{3}$'],
            correctAnswerIndex: 1,
            explanation: 'Pour $x < 3$, on a $3 - x > 0$ qui tend vers $0^+$, donc $\\dfrac{1}{3-x} \\to +\\infty$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Inverse en 0 à droite et à gauche',
          stepTitle: 'Cas fondamental de la fonction 1/x',
          paragraphText:
            'En $0$, $\\lim_{\\substack{x\\to 0\\\\>}} \\dfrac{1}{x} = +\\infty$ et $\\lim_{\\substack{x\\to 0\\\\<}} \\dfrac{1}{x} = -\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q6',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{\\substack{x\\to -4\\\\<}} \\dfrac{1}{x + 4}$ ?',
            options: ['$+\\infty$', '$-\\infty$', '$0$', '$-\\dfrac{1}{4}$'],
            correctAnswerIndex: 1,
            explanation: 'Pour $x < -4$, $x + 4 < 0$ et tend vers $0^-$, donc $\\dfrac{1}{x+4} \\to -\\infty$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q1',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to 0} \\dfrac{1}{x^2}$ ?',
          options: ['$0$', '$+\\infty$', '$-\\infty$', 'N’existe pas'],
          correctAnswerIndex: 1,
          explanation: 'L’exposant $n = 2$ est pair : pour $x \\neq 0$, $x^2 > 0$ et tend vers $0$, donc $\\dfrac{1}{x^2} \\to +\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q2',
          type: 'mcq',
          prompt: 'Que valent respectivement $\\lim_{\\substack{x\\to 4\\\\>}} \\dfrac{1}{x - 4}$ et $\\lim_{\\substack{x\\to 4\\\\<}} \\dfrac{1}{(x - 4)^5}$ ?',
          options: ['$+\\infty$ et $+\\infty$', '$+\\infty$ et $-\\infty$', '$-\\infty$ et $+\\infty$', '$-\\infty$ et $-\\infty$'],
          correctAnswerIndex: 1,
          explanation: 'À droite de $4$, $x - 4 > 0 \\implies +\\infty$. À gauche de $4$, avec $n=5$ impair, $(x-4)^5 < 0 \\implies -\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q3',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{\\substack{x\\to 8\\\\<}} \\dfrac{1}{(x - 8)^4}$ ?',
          options: ['$-\\infty$', '$0$', '$+\\infty$', '$-1$'],
          correctAnswerIndex: 2,
          explanation: 'Même si $x < 8$, l’exposant $4$ est pair donc $(x-8)^4 > 0$, ce qui donne $+\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q4',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{\\substack{x\\to -2\\\\>}} \\dfrac{1}{(x + 2)^3}$ ?',
          options: ['$-\\infty$', '$0$', '$+\\infty$', '$\\dfrac{1}{8}$'],
          correctAnswerIndex: 2,
          explanation: 'Pour $x > -2$, $x + 2 > 0$, donc $(x+2)^3 > 0$ et tend vers $0$, d’où $\\dfrac{1}{(x+2)^3} \\to +\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q5',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{\\substack{x\\to 3\\\\<}} \\dfrac{1}{3 - x}$ ?',
          options: ['$-\\infty$', '$+\\infty$', '$0$', '$\\dfrac{1}{3}$'],
          correctAnswerIndex: 1,
          explanation: 'Pour $x < 3$, on a $3 - x > 0$ qui tend vers $0^+$, donc $\\dfrac{1}{3-x} \\to +\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p01_q6',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{\\substack{x\\to -4\\\\<}} \\dfrac{1}{x + 4}$ ?',
          options: ['$+\\infty$', '$-\\infty$', '$0$', '$-\\dfrac{1}{4}$'],
          correctAnswerIndex: 1,
          explanation: 'Pour $x < -4$, $x + 4 < 0$ et tend vers $0^-$, donc $\\dfrac{1}{x+4} \\to -\\infty$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Asymptote verticale et asymptote horizontale
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l07_extension_limite_p02',
      order: 2,
      title: 'Asymptote verticale et asymptote horizontale',
      summary: 'Interpréter graphiquement une limite infinie en a (asymptote x = a) ou une limite finie à l’infini (asymptote y = b).',
      conceptExplanation:
        "Dans le plan muni d'un repère orthogonal :\n- **Asymptote verticale** : lorsque $\\lim_{\\substack{x\\to a\\\\>}} f(x)$, $\\lim_{\\substack{x\\to a\\\\<}} f(x)$ ou $\\lim_{x\\to a} f(x)$ est infinie ($+\\infty$ ou $-\\infty$), on dit que la droite verticale d'équation **$x = a$** est une asymptote verticale à $(C_f)$.\n- **Asymptote horizontale** : lorsque $\\lim_{x\\to +\\infty} f(x) = b$ (respectivement $\\lim_{x\\to -\\infty} f(x) = b$) où $b \\in \\mathbb{R}$, on dit que la droite horizontale d'équation **$y = b$** est asymptote horizontale à $(C_f)$ en $+\\infty$ (resp. en $-\\infty$).",
      keyRule:
        'x → réel et f(x) → ±∞ donne une asymptote VERTICALE x = a ; x → ±∞ et f(x) → réel b donne une asymptote HORIZONTALE y = b.',
      formulas: [
        { name: 'Asymptote verticale', formula: '\\lim_{x\\to a^{\\pm}} f(x) = \\pm\\infty \\implies (D) : x = a' },
        { name: 'Asymptote horizontale en ±∞', formula: '\\lim_{x\\to \\pm\\infty} f(x) = b \\implies (D) : y = b' },
      ],
      visualSchema: {
        type: 'function_plot',
        title: 'Asymptotes de f(x) = 1/(x + 1) : verticale x = −1 et horizontale y = 0',
        caption:
          'Quand x → −1⁺, f(x) → +∞ (asymptote verticale x = −1). Quand x → ±∞, f(x) → 0 (asymptote horizontale y = 0).',
        plot: {
          xMin: -4,
          xMax: 3,
          yMin: -4,
          yMax: 4,
          xStep: 1,
          yStep: 1,
          curves: [
            {
              label: 'f(x) = 1/(x+1)',
              color: 'blue',
              pieces: [
                { expr: '1/(x+1)', from: -4, to: -1.2 },
                { expr: '1/(x+1)', from: -0.8, to: 3 },
              ],
            },
          ],
          verticalLines: [{ x: -1, label: 'x = −1', color: 'orange' }],
          horizontalLines: [{ y: 0, label: 'y = 0', color: 'green' }],
        },
      },
      workedExample: {
        title: 'Étude asymptotique de f(x) = (5x − 2)/(3 − x) et plafond démographique',
        statement:
          '1. Pour $f(x) = \\dfrac{5x - 2}{3 - x}$ définie sur $\\mathbb{R}\\setminus\\{3\\}$, calcule $\\lim_{\\substack{x\\to 3\\\\<}} f(x)$ et $\\lim_{x\\to +\\infty} f(x)$, puis interprète graphiquement.\n2. La population d’une ville (en dizaines de milliers) suit $P(x) = \\dfrac{60x + 40}{x + 10}$ (fonction croissante). Peut-elle dépasser $600\\,000$ habitants ?',
        methodSteps: [
          '1. En $3^<$ : $\\dfrac{5x-2}{3-x} = (-5x+2)\\times\\dfrac{1}{x-3}$. Or $\\lim_{3^<}(-5x+2) = -13$ et $\\lim_{3^<}\\dfrac{1}{x-3} = -\\infty$, donc $\\lim_{3^<} f(x) = +\\infty$ : la droite $x = 3$ est asymptote verticale à $(C_f)$.',
          'En $+\\infty$ : $\\lim_{x\\to +\\infty}\\dfrac{5x-2}{3-x} = \\lim_{x\\to +\\infty}\\dfrac{5x}{-x} = -5$ : la droite $y = -5$ est asymptote horizontale à $(C_f)$ en $+\\infty$.',
          '2. $\\lim_{x\\to +\\infty} P(x) = \\lim_{x\\to +\\infty}\\dfrac{60x}{x} = 60$ (soit $60\\times 10\\,000 = 600\\,000$ habitants). Comme $P$ est croissante, la population reste inférieure à $600\\,000$ habitants.',
        ],
        conclusion: 'Asymptotes $x = 3$ et $y = -5$ ; la population ne dépassera jamais $600\\,000$ habitants.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Asymptote verticale x = a',
          stepTitle: 'Interpréter une limite infinie en un point a',
          paragraphText:
            'Dès que la limite de $f(x)$ à gauche en $a$, à droite en $a$, ou en $a$ est égale à $+\\infty$ ou $-\\infty$, la droite verticale d’équation $x = a$ est une asymptote verticale à $(C_f)$.',
          formula: { name: 'Asymptote verticale', formula: '\\lim_{x\\to a^<} f(x) = +\\infty \\implies x = a \\text{ asymptote verticale}' },
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q1',
            type: 'mcq',
            prompt: 'On sait que $\\lim_{\\substack{x\\to 6\\\\<}} f(x) = +\\infty$. Quelle est l’interprétation graphique de ce résultat ?',
            options: [
              'La droite d’équation $y = 6$ est asymptote horizontale à $(C_f)$',
              'La droite d’équation $x = 6$ est asymptote verticale à $(C_f)$',
              'La courbe $(C_f)$ passe par le point $(6; 0)$',
              'La droite d’équation $x = 0$ est asymptote verticale',
            ],
            correctAnswerIndex: 1,
            explanation: 'Une limite infinie lorsque $x$ tend vers un réel $a = 6$ signifie que la droite verticale $x = 6$ est asymptote à $(C_f)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Asymptote horizontale y = b',
          stepTitle: 'Interpréter une limite finie en +∞ ou −∞',
          paragraphText:
            'Si $\\lim_{x\\to +\\infty} f(x) = b$ (resp. $\\lim_{x\\to -\\infty} f(x) = b$) avec $b\\in\\mathbb{R}$, alors la droite horizontale d’équation $y = b$ est asymptote horizontale à $(C_f)$ en $+\\infty$ (resp. en $-\\infty$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q2',
            type: 'mcq',
            prompt:
              'Pour $f(x) = \\dfrac{1}{(x+2)^3}$, on a $\\lim_{x\\to -\\infty} f(x) = 0$. Quelle droite est asymptote horizontale à $(C_f)$ en $-\\infty$ ?',
            options: ['La droite $x = 0$', 'La droite $y = -2$', 'La droite $y = 0$', 'La droite $x = -2$'],
            correctAnswerIndex: 2,
            explanation: 'Puisque $\\lim_{x\\to -\\infty} f(x) = 0$, la droite d’équation $y = 0$ (axe des abscisses) est asymptote horizontale en $-\\infty$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre x = a et y = b',
          stepTitle: 'Ne jamais confondre asymptote verticale et horizontale',
          paragraphText:
            'Retiens bien : si $\\lim_{x\\to -7} f(x) = +\\infty$, la droite est $x = -7$ et c’est une asymptote **verticale** (jamais horizontale !). Une asymptote horizontale est toujours d’équation $y = b$ et correspond à $x \\to \\pm\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q3',
            type: 'mcq',
            prompt: 'Si $\\lim_{x\\to -7} f(x) = +\\infty$, que peut-on affirmer à propos de $(C_f)$ ?',
            options: [
              'La droite $x = -7$ est une asymptote horizontale',
              'La droite $y = -7$ est une asymptote horizontale',
              'La droite $x = -7$ est une asymptote verticale',
              'La droite $y = 0$ est une asymptote verticale',
            ],
            correctAnswerIndex: 2,
            explanation: 'Quand $x$ tend vers $-7$ et $f(x)$ tend vers $+\\infty$, l’asymptote est verticale d’équation $x = -7$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Fonction f(x) = (5x−2)/(3−x)',
          stepTitle: 'Trouver les deux asymptotes d’une fonction homographique',
          paragraphText:
            'Pour $f(x) = \\dfrac{5x-2}{3-x}$ : en $3^<$, $\\lim f(x) = +\\infty$ donc $x = 3$ est asymptote verticale ; en $+\\infty$, $\\lim f(x) = -5$ donc $y = -5$ est asymptote horizontale en $+\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q4',
            type: 'mcq',
            prompt: 'Quelles sont les asymptotes de la courbe de $f(x) = \\dfrac{5x - 2}{3 - x}$ en $x = 3$ et en $+\\infty$ ?',
            options: [
              'Asymptote verticale $x = 3$ et asymptote horizontale $y = -5$',
              'Asymptote verticale $x = -5$ et asymptote horizontale $y = 3$',
              'Asymptote verticale $x = 3$ et asymptote horizontale $y = 5$',
              'Asymptote horizontale $y = 0$ uniquement',
            ],
            correctAnswerIndex: 0,
            explanation: 'Le dénominateur s’annule en $x=3$ ($\\lim_{3^<} f = +\\infty$, AV $x=3$), et en $+\\infty$, $\\dfrac{5x}{-x} = -5$ (AH $y = -5$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Lecture graphique d’asymptotes',
          stepTitle: 'Lire les limites à partir des droites asymptotes',
          paragraphText:
            'Si une courbe se rapproche de la droite horizontale $y = 2$ quand $x \\to +\\infty$ et de $y = 0$ quand $x \\to -\\infty$, alors $\\lim_{x\\to +\\infty} f(x) = 2$ et $\\lim_{x\\to -\\infty} f(x) = 0$. Une fonction peut donc avoir deux asymptotes horizontales distinctes en $-\\infty$ et $+\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q5',
            type: 'mcq',
            prompt:
              'La courbe $(C_f)$ admet la droite $y = 2$ pour asymptote horizontale en $+\\infty$ et $y = 0$ en $-\\infty$. À gauche de $3$, elle plonge vers $+\\infty$ le long de $x=3$, et à droite de $3$ elle vient de $-\\infty$. Que vaut $\\lim_{x\\to +\\infty} f(x)$ et $\\lim_{\\substack{x\\to 3\\\\>}} f(x)$ ?',
            options: ['$2$ et $-\\infty$', '$0$ et $+\\infty$', '$2$ et $+\\infty$', '$3$ et $-\\infty$'],
            correctAnswerIndex: 0,
            explanation: 'L’asymptote horizontale en $+\\infty$ donne $\\lim_{+\\infty} f = 2$, et à droite de $3$ la branche vient de $-\\infty$, soit $\\lim_{3^>} f = -\\infty$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Situation complexe : évolution démographique',
          stepTitle: 'Interpréter une asymptote horizontale comme un plafond',
          paragraphText:
            'Si la population (en dizaines de milliers) croît selon $P(x) = \\dfrac{60x+40}{x+10}$, on trouve $\\lim_{x\\to +\\infty} P(x) = 60$, soit $600\\,000$ habitants. La population se rapproche de ce plafond sans jamais le dépasser.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q6',
            type: 'mcq',
            prompt:
              'Une population (en milliers d’habitants) suit la fonction croissante $P(t) = \\dfrac{80t + 20}{t + 5}$ pour $t \\ge 0$. Quelle est la population limite à long terme ($t \\to +\\infty$) ?',
            options: ['$4\\,000$ habitants', '$20\\,000$ habitants', '$80\\,000$ habitants', '$100\\,000$ habitants'],
            correctAnswerIndex: 2,
            explanation: '$\\lim_{t\\to +\\infty} \\dfrac{80t + 20}{t + 5} = \\lim_{t\\to +\\infty} \\dfrac{80t}{t} = 80$ milliers, soit $80\\,000$ habitants.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q1',
          type: 'mcq',
          prompt: 'On sait que $\\lim_{\\substack{x\\to 6\\\\<}} f(x) = +\\infty$. Quelle est l’interprétation graphique de ce résultat ?',
          options: [
            'La droite d’équation $y = 6$ est asymptote horizontale à $(C_f)$',
            'La droite d’équation $x = 6$ est asymptote verticale à $(C_f)$',
            'La courbe $(C_f)$ passe par le point $(6; 0)$',
            'La droite d’équation $x = 0$ est asymptote verticale',
          ],
          correctAnswerIndex: 1,
          explanation: 'Une limite infinie lorsque $x$ tend vers un réel $a = 6$ signifie que la droite verticale $x = 6$ est asymptote à $(C_f)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q2',
          type: 'mcq',
          prompt:
            'Pour $f(x) = \\dfrac{1}{(x+2)^3}$, on a $\\lim_{x\\to -\\infty} f(x) = 0$. Quelle droite est asymptote horizontale à $(C_f)$ en $-\\infty$ ?',
          options: ['La droite $x = 0$', 'La droite $y = -2$', 'La droite $y = 0$', 'La droite $x = -2$'],
          correctAnswerIndex: 2,
          explanation: 'Puisque $\\lim_{x\\to -\\infty} f(x) = 0$, la droite d’équation $y = 0$ (axe des abscisses) est asymptote horizontale en $-\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q3',
          type: 'mcq',
          prompt: 'Si $\\lim_{x\\to -7} f(x) = +\\infty$, que peut-on affirmer à propos de $(C_f)$ ?',
          options: [
            'La droite $x = -7$ est une asymptote horizontale',
            'La droite $y = -7$ est une asymptote horizontale',
            'La droite $x = -7$ est une asymptote verticale',
            'La droite $y = 0$ est une asymptote verticale',
          ],
          correctAnswerIndex: 2,
          explanation: 'Quand $x$ tend vers $-7$ et $f(x)$ tend vers $+\\infty$, l’asymptote est verticale d’équation $x = -7$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q4',
          type: 'mcq',
          prompt: 'Quelles sont les asymptotes de la courbe de $f(x) = \\dfrac{5x - 2}{3 - x}$ en $x = 3$ et en $+\\infty$ ?',
          options: [
            'Asymptote verticale $x = 3$ et asymptote horizontale $y = -5$',
            'Asymptote verticale $x = -5$ et asymptote horizontale $y = 3$',
            'Asymptote verticale $x = 3$ et asymptote horizontale $y = 5$',
            'Asymptote horizontale $y = 0$ uniquement',
          ],
          correctAnswerIndex: 0,
          explanation: 'Le dénominateur s’annule en $x=3$ ($\\lim_{3^<} f = +\\infty$, AV $x=3$), et en $+\\infty$, $\\dfrac{5x}{-x} = -5$ (AH $y = -5$).',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q5',
          type: 'mcq',
          prompt:
            'La courbe $(C_f)$ admet la droite $y = 2$ pour asymptote horizontale en $+\\infty$ et $y = 0$ en $-\\infty$. À gauche de $3$, elle plonge vers $+\\infty$ le long de $x=3$, et à droite de $3$ elle vient de $-\\infty$. Que vaut $\\lim_{x\\to +\\infty} f(x)$ et $\\lim_{\\substack{x\\to 3\\\\>}} f(x)$ ?',
          options: ['$2$ et $-\\infty$', '$0$ et $+\\infty$', '$2$ et $+\\infty$', '$3$ et $-\\infty$'],
          correctAnswerIndex: 0,
          explanation: 'L’asymptote horizontale en $+\\infty$ donne $\\lim_{+\\infty} f = 2$, et à droite de $3$ la branche vient de $-\\infty$, soit $\\lim_{3^>} f = -\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p02_q6',
          type: 'mcq',
          prompt:
            'Une population (en milliers d’habitants) suit la fonction croissante $P(t) = \\dfrac{80t + 20}{t + 5}$ pour $t \\ge 0$. Quelle est la population limite à long terme ($t \\to +\\infty$) ?',
          options: ['$4\\,000$ habitants', '$20\\,000$ habitants', '$80\\,000$ habitants', '$100\\,000$ habitants'],
          correctAnswerIndex: 2,
          explanation: '$\\lim_{t\\to +\\infty} \\dfrac{80t + 20}{t + 5} = \\lim_{t\\to +\\infty} \\dfrac{80t}{t} = 80$ milliers, soit $80\\,000$ habitants.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Limites à l'infini et opérations avec l'infini
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l07_extension_limite_p03',
      order: 3,
      title: 'Limites à l’infini et opérations avec l’infini',
      summary: 'Connaître les limites élémentaires en ±∞, la règle des signes des opérations et les 4 formes indéterminées.',
      conceptExplanation:
        "**1. Fonctions élémentaires à l'infini** ($n \\in \\mathbb{N}^*$) :\n- $\\lim_{\\pm\\infty} c = c$ ; $\\lim_{+\\infty} \\sqrt{x} = +\\infty$ ;\n- $\\lim_{+\\infty} x^n = +\\infty$ ; $\\lim_{-\\infty} x^n = +\\infty$ si $n$ est **pair**, et $-\\infty$ si $n$ est **impair** ;\n- $\\lim_{+\\infty} \\dfrac{1}{x^n} = 0$ et $\\lim_{-\\infty} \\dfrac{1}{x^n} = 0$.\n\n**2. Opérations (somme, produit, inverse, quotient)** : on applique la règle des signes pour $\\infty \\times l'$ ($l' \\neq 0$), $\\infty \\times \\infty$, $1/\\infty = 0$, $1/0^{\\pm} = \\pm\\infty$ et $\\dfrac{l}{\\infty} = 0$.\n\n**3. Les 4 formes indéterminées (« résultat pas immédiat »)** : $+\\infty - \\infty$, $0 \\times \\infty$, $\\dfrac{0}{0}$ et $\\dfrac{\\infty}{\\infty}$.",
      keyRule:
        'Il existe 4 formes indéterminées où l’on ne peut pas conclure directement : (+∞) + (−∞), 0 × ∞, 0/0 et ∞/∞. Pour un quotient l/g avec g → 0, étudie le signe de g !',
      formulas: [
        { name: 'Inverse de xⁿ en ±∞', formula: '\\lim_{x\\to\\pm\\infty}\\frac{1}{x^n} = 0' },
        { name: 'Puissance en −∞', formula: '\\lim_{x\\to -\\infty} x^n = \\begin{cases} +\\infty & (n \\text{ pair}) \\\\ -\\infty & (n \\text{ impair}) \\end{cases}' },
        { name: '4 formes indéterminées', formula: '+\\infty - \\infty,\\quad 0\\times\\infty,\\quad \\frac{0}{0},\\quad \\frac{\\infty}{\\infty}' },
      ],
      workedExample: {
        title: 'Calculer des limites par opérations avec l’infini',
        statement:
          'Calcule :\n1. $\\lim_{x\\to -\\infty} (x^7 + x^3)$ et $\\lim_{x\\to -\\infty} x^3\\left(-2 + \\dfrac{1}{x^7}\\right)$\n2. $\\lim_{\\substack{x\\to -4\\\\>}} \\dfrac{3x}{x+4}$ et $\\lim_{x\\to +\\infty} \\dfrac{15}{g(x)}$ si $\\lim_{x\\to +\\infty} g(x) = -\\infty$.',
        methodSteps: [
          '1. En $-\\infty$, $x^7 \\to -\\infty$ et $x^3 \\to -\\infty$ (exposants impairs), donc leur somme tend vers $-\\infty$ (pas d’indétermination !).',
          'En $-\\infty$, $x^3 \\to -\\infty$ et $-2 + \\dfrac{1}{x^7} \\to -2 < 0$, donc par produit de deux négatifs le résultat est $+\\infty$.',
          '2. En $-4^>$, $3x \\to -12$ et $\\dfrac{1}{x+4} \\to +\\infty$, donc $\\dfrac{3x}{x+4} = 3x\\times\\dfrac{1}{x+4} \\to -\\infty$. Et $\\dfrac{15}{-\\infty} \\to 0$.',
        ],
        conclusion: 'Respectivement $-\\infty$, $+\\infty$, $-\\infty$ et $0$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Limites de xⁿ et 1/xⁿ en −∞',
          stepTitle: 'Appliquer la parité de n en −∞',
          paragraphText:
            'En $-\\infty$, $x^6 \\to +\\infty$ ($6$ pair), $x^{15} \\to -\\infty$ ($15$ impair), tandis que $\\dfrac{1}{x^4} \\to 0$ et $\\dfrac{1}{x^3} \\to 0$ quelle que soit la parité.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q1',
            type: 'mcq',
            prompt: 'Que valent respectivement $\\lim_{x\\to -\\infty} x^6$, $\\lim_{x\\to -\\infty} x^{15}$ et $\\lim_{x\\to -\\infty} \\dfrac{1}{x^4}$ ?',
            options: [
              '$+\\infty$, $-\\infty$ et $0$',
              '$-\\infty$, $-\\infty$ et $0$',
              '$+\\infty$, $+\\infty$ et $0$',
              '$-\\infty$, $+\\infty$ et $+\\infty$',
            ],
            correctAnswerIndex: 0,
            explanation: '$6$ est pair donc $\\lim_{-\\infty} x^6 = +\\infty$ ; $15$ est impair donc $\\lim_{-\\infty} x^{15} = -\\infty$ ; $\\lim_{-\\infty} 1/x^4 = 0$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Inverse 1/f',
          stepTitle: 'Limite de 1/f selon la limite de f',
          paragraphText:
            'Si $f \\to \\pm\\infty$, alors $\\dfrac{1}{f} \\to 0$. Si $f \\to 0$ avec $f(x) > 0$, alors $\\dfrac{1}{f} \\to +\\infty$ (et si $f(x) < 0$, $\\dfrac{1}{f} \\to -\\infty$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q2',
            type: 'mcq',
            prompt: 'Que valent $\\lim_{\\substack{x\\to 0\\\\>}} \\dfrac{1}{\\sqrt{x}}$ et $\\lim_{x\\to -\\infty} \\dfrac{1}{x^2 + 3}$ ?',
            options: ['$0$ et $0$', '$+\\infty$ et $0$', '$+\\infty$ et $\\dfrac{1}{3}$', '$0$ et $+\\infty$'],
            correctAnswerIndex: 1,
            explanation: 'Pour $x\\to 0^>$, $\\sqrt{x} \\to 0^+$ donc $\\dfrac{1}{\\sqrt{x}} \\to +\\infty$. En $-\\infty$, $x^2+3 \\to +\\infty$ donc $\\dfrac{1}{x^2+3} \\to 0$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Règle des signes en produit et quotient',
          stepTitle: 'Déterminer le signe du résultat infini',
          paragraphText:
            'Pour un produit ou un quotient où l’un tend vers l’infini et l’autre vers un réel non nul $l$, on applique exactement la règle des signes habituelle : $(-\\infty)\\times(-2) = +\\infty$, $\\dfrac{+\\infty}{-6} = -\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q3',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to -\\infty} x^3\\left(-2 + \\dfrac{1}{x^7}\\right)$ ?',
            options: ['$-\\infty$', '$+\\infty$', '$0$', '$-2$'],
            correctAnswerIndex: 1,
            explanation: '$\\lim_{-\\infty} x^3 = -\\infty$ et $\\lim_{-\\infty}\\left(-2 + \\dfrac{1}{x^7}\\right) = -2 < 0$. Le produit de deux quantités négatives donne $+\\infty$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Reconnaître les 4 formes indéterminées',
          stepTitle: 'Ne pas confondre (+∞)+(+∞) avec (+∞)+(−∞)',
          paragraphText:
            'Attention : $(-\\infty) + (-\\infty) = -\\infty$ et $(+\\infty)\\times(+\\infty) = +\\infty$ NE SONT PAS des formes indéterminées ! En revanche, $(+\\infty) + (-\\infty)$, $0\\times\\infty$, $\\dfrac{0}{0}$ et $\\dfrac{\\infty}{\\infty}$ sont indéterminées.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q4',
            type: 'mcq',
            prompt: 'Laquelle des situations suivantes est une forme indéterminée ?',
            options: [
              '$\\lim f = -\\infty$ et $\\lim g = -\\infty$ pour $(f+g)$',
              '$\\lim f = +\\infty$ et $\\lim g = -6$ pour $(f/g)$',
              '$\\lim f = 0$ et $\\lim g = +\\infty$ pour $(f\\cdot g)$',
              '$\\lim f = 15$ et $\\lim g = -\\infty$ pour $(f/g)$',
            ],
            correctAnswerIndex: 2,
            explanation: '$0 \\times \\infty$ est une forme indéterminée ; les trois autres donnent directement $-\\infty$, $-\\infty$ et $0$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Quotient réécrit en produit',
          stepTitle: 'Calculer lim(x→−4>) 3x/(x + 4)',
          paragraphText:
            'En $x \\to -4^>$, le numérateur $3x$ tend vers $-12 < 0$ et le dénominateur $x + 4$ tend vers $0^+$, donc $\\dfrac{1}{x+4} \\to +\\infty$. Le produit vaut $(-12)\\times(+\\infty) = -\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q5',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{\\substack{x\\to -4\\\\>}} \\dfrac{3x}{x + 4}$ ?',
            options: ['$+\\infty$', '$-\\infty$', '$3$', '$-12$'],
            correctAnswerIndex: 1,
            explanation: '$\\lim_{-4^>} (3x) = -12$ et $\\lim_{-4^>} \\dfrac{1}{x+4} = +\\infty$, d’où $(-12)\\times(+\\infty) = -\\infty$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Quotient en +∞',
          stepTitle: 'Calculer lim((6 + 1/x)(−2 + 1/x⁷))',
          paragraphText:
            'En $+\\infty$, $6 + \\dfrac{1}{x} \\to 6$ et $-2 + \\dfrac{1}{x^7} \\to -2$, donc le produit tend vers $6 \\times (-2) = -12$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q6',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\left(6 + \\dfrac{1}{x}\\right)\\left(-2 + \\dfrac{1}{x^7}\\right)$ ?',
            options: ['$0$', '$-12$', '$+\\infty$', '$12$'],
            correctAnswerIndex: 1,
            explanation: 'Chaque facteur admet une limite finie ($6$ et $-2$), donc le produit tend vers $6\\times(-2) = -12$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q1',
          type: 'mcq',
          prompt: 'Que valent respectivement $\\lim_{x\\to -\\infty} x^6$, $\\lim_{x\\to -\\infty} x^{15}$ et $\\lim_{x\\to -\\infty} \\dfrac{1}{x^4}$ ?',
          options: [
            '$+\\infty$, $-\\infty$ et $0$',
            '$-\\infty$, $-\\infty$ et $0$',
            '$+\\infty$, $+\\infty$ et $0$',
            '$-\\infty$, $+\\infty$ et $+\\infty$',
          ],
          correctAnswerIndex: 0,
          explanation: '$6$ est pair donc $\\lim_{-\\infty} x^6 = +\\infty$ ; $15$ est impair donc $\\lim_{-\\infty} x^{15} = -\\infty$ ; $\\lim_{-\\infty} 1/x^4 = 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q2',
          type: 'mcq',
          prompt: 'Que valent $\\lim_{\\substack{x\\to 0\\\\>}} \\dfrac{1}{\\sqrt{x}}$ et $\\lim_{x\\to -\\infty} \\dfrac{1}{x^2 + 3}$ ?',
          options: ['$0$ et $0$', '$+\\infty$ et $0$', '$+\\infty$ et $\\dfrac{1}{3}$', '$0$ et $+\\infty$'],
          correctAnswerIndex: 1,
          explanation: 'Pour $x\\to 0^>$, $\\sqrt{x} \\to 0^+$ donc $\\dfrac{1}{\\sqrt{x}} \\to +\\infty$. En $-\\infty$, $x^2+3 \\to +\\infty$ donc $\\dfrac{1}{x^2+3} \\to 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q3',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to -\\infty} x^3\\left(-2 + \\dfrac{1}{x^7}\\right)$ ?',
          options: ['$-\\infty$', '$+\\infty$', '$0$', '$-2$'],
          correctAnswerIndex: 1,
          explanation: '$\\lim_{-\\infty} x^3 = -\\infty$ et $\\lim_{-\\infty}\\left(-2 + \\dfrac{1}{x^7}\\right) = -2 < 0$. Le produit de deux quantités négatives donne $+\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q4',
          type: 'mcq',
          prompt: 'Laquelle des situations suivantes est une forme indéterminée ?',
          options: [
            '$\\lim f = -\\infty$ et $\\lim g = -\\infty$ pour $(f+g)$',
            '$\\lim f = +\\infty$ et $\\lim g = -6$ pour $(f/g)$',
            '$\\lim f = 0$ et $\\lim g = +\\infty$ pour $(f\\cdot g)$',
            '$\\lim f = 15$ et $\\lim g = -\\infty$ pour $(f/g)$',
          ],
          correctAnswerIndex: 2,
          explanation: '$0 \\times \\infty$ est une forme indéterminée ; les trois autres donnent directement $-\\infty$, $-\\infty$ et $0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q5',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{\\substack{x\\to -4\\\\>}} \\dfrac{3x}{x + 4}$ ?',
          options: ['$+\\infty$', '$-\\infty$', '$3$', '$-12$'],
          correctAnswerIndex: 1,
          explanation: '$\\lim_{-4^>} (3x) = -12$ et $\\lim_{-4^>} \\dfrac{1}{x+4} = +\\infty$, d’où $(-12)\\times(+\\infty) = -\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p03_q6',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\left(6 + \\dfrac{1}{x}\\right)\\left(-2 + \\dfrac{1}{x^7}\\right)$ ?',
          options: ['$0$', '$-12$', '$+\\infty$', '$12$'],
          correctAnswerIndex: 1,
          explanation: 'Chaque facteur admet une limite finie ($6$ et $-2$), donc le produit tend vers $6\\times(-2) = -12$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Limites à l'infini des polynômes et fractions rationnelles
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l07_extension_limite_p04',
      order: 4,
      title: 'Polynômes et fonctions rationnelles à l’infini',
      summary: 'Utiliser la règle du monôme (et du quotient des monômes) de plus haut degré uniquement en +∞ et −∞.',
      conceptExplanation:
        "**1. Fonctions polynômes** : la limite en $+\\infty$ ou en $-\\infty$ d'un polynôme est égale à la limite en $+\\infty$ ou en $-\\infty$ de son **monôme de plus haut degré** ($a_n x^n$ avec $a_n \\neq 0$) :\n$$\\lim_{x\\to \\pm\\infty}(a_n x^n + a_{n-1}x^{n-1} + \\dots + a_0) = \\lim_{x\\to \\pm\\infty}(a_n x^n)$$\n\n**2. Fonctions rationnelles** : la limite en $\\pm\\infty$ d'un quotient de deux polynômes $\\dfrac{P(x)}{Q(x)}$ est égale à la limite en $\\pm\\infty$ du **quotient de leurs monômes de plus haut degré** $\\dfrac{a_n x^n}{b_p x^p}$ (après simplification par la plus petite puissance).",
      keyRule:
        'En +∞ ou −∞ SEULEMENT : un polynôme se comporte comme son monôme de plus haut degré, et une fraction rationnelle comme le quotient des deux monômes de plus haut degré.',
      formulas: [
        { name: 'Polynôme en ±∞', formula: '\\lim_{x\\to \\pm\\infty}(a_n x^n + \\dots + a_0) = \\lim_{x\\to \\pm\\infty}(a_n x^n)' },
        { name: 'Rationnelle en ±∞', formula: '\\lim_{x\\to \\pm\\infty}\\frac{a_n x^n + \\dots}{b_p x^p + \\dots} = \\lim_{x\\to \\pm\\infty}\\frac{a_n x^n}{b_p x^p}' },
      ],
      workedExample: {
        title: 'Calculer des limites en +∞ et −∞ par plus haut degré',
        statement:
          'Calcule :\n1. $\\lim_{x\\to -\\infty}(-4x^3 + 2x^2 - 6x^7 + 8x - 9)$\n2. $\\lim_{x\\to -\\infty}\\dfrac{3x^5 - 6x + 8}{5x^3 + 2x^2 - x + 7}$\n3. $\\lim_{x\\to +\\infty}\\dfrac{3x + 8}{2x^2 - x + 7}$',
        methodSteps: [
          '1. Le monôme de plus haut degré est $-6x^7$ (attention : il n’est pas écrit en premier !). Comme $7$ est impair, $\\lim_{-\\infty}(-6x^7) = (-6)\\times(-\\infty) = +\\infty$.',
          '2. Quotient des monômes de plus haut degré : $\\lim_{-\\infty}\\dfrac{3x^5}{5x^3} = \\lim_{-\\infty}\\dfrac{3}{5}x^2 = +\\infty$ (car $x^2 \\to +\\infty$).',
          '3. Quotient des monômes de plus haut degré : $\\lim_{+\\infty}\\dfrac{3x}{2x^2} = \\lim_{+\\infty}\\dfrac{3}{2x} = 0$.',
        ],
        conclusion: 'Respectivement $+\\infty$, $+\\infty$ et $0$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Monôme de plus haut degré',
          stepTitle: 'Repérer le vrai terme de plus haut degré',
          paragraphText:
            'Attention à bien lire tous les termes : dans $-4x^3 + 2x^2 - 6x^7 + 8x - 9$, le degré le plus élevé est $7$ ($-6x^7$), et non $3$ ($-4x^3$) !',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q1',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to -\\infty} (-4x^3 + 2x^2 - 6x^7 + 8x - 9)$ ?',
            options: ['$-\\infty$', '$+\\infty$', '$-6$', '$-9$'],
            correctAnswerIndex: 1,
            explanation: 'Le terme de plus haut degré est $-6x^7$. En $-\\infty$, $x^7 \\to -\\infty$, donc $-6x^7 \\to +\\infty$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Polynôme en +∞',
          stepTitle: 'Limiter (9 − 7x² + 6x − 8x⁴) en +∞',
          paragraphText:
            'Le terme de plus haut degré de $9 - 7x^2 + 6x - 8x^4$ est $-8x^4$, et $\\lim_{x\\to +\\infty}(-8x^4) = -\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q2',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to +\\infty} (9 - 7x^2 + 6x - 8x^4)$ ?',
            options: ['$9$', '$+\\infty$', '$-\\infty$', '$-8$'],
            correctAnswerIndex: 2,
            explanation: 'Le terme dominant est $-8x^4$, qui tend vers $-\\infty$ quand $x \\to +\\infty$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Degré numérateur > degré dénominateur',
          stepTitle: 'Simplifier d’abord le quotient des monômes',
          paragraphText:
            'Pour $\\dfrac{3x^5 - 6x + 8}{5x^3 + 2x^2 - x + 7}$ en $-\\infty$, on forme $\\dfrac{3x^5}{5x^3}$, qu’on simplifie en $\\dfrac{3}{5}x^2$ AVANT de passer à la limite : on obtient $+\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q3',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to -\\infty} \\dfrac{3x^5 - 6x + 8}{5x^3 + 2x^2 - x + 7}$ ?',
            options: ['$\\dfrac{3}{5}$', '$0$', '$-\\infty$', '$+\\infty$'],
            correctAnswerIndex: 3,
            explanation: '$\\lim_{-\\infty}\\dfrac{3x^5}{5x^3} = \\lim_{-\\infty}\\dfrac{3}{5}x^2 = +\\infty$ car $x^2 > 0$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Degré numérateur < degré dénominateur',
          stepTitle: 'Quand le dénominateur l’emporte à l’infini',
          paragraphText:
            'Lorsque le degré du dénominateur est strictement supérieur à celui du numérateur, le quotient simplifié garde une puissance de $x$ au dénominateur et sa limite en $\\pm\\infty$ vaut toujours $0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q4',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to -\\infty} \\dfrac{9 - 7x^2 + 6x}{x^3 + 2x - 4}$ ?',
            options: ['$-7$', '$0$', '$-\\infty$', '$+\\infty$'],
            correctAnswerIndex: 1,
            explanation: '$\\lim_{-\\infty}\\dfrac{-7x^2}{x^3} = \\lim_{-\\infty}\\dfrac{-7}{x} = 0$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Règle valable uniquement en ±∞',
          stepTitle: 'Ne jamais appliquer la règle du plus haut degré en un réel fini !',
          paragraphText:
            'Attention ! L’égalité $\\lim_{x\\to -1}(3x^2 + 2x - 8) = \\lim_{x\\to -1}(3x^2)$ est FAUSSE ! En $x = -1$, $3(-1)^2 + 2(-1) - 8 = -7$, alors que $3(-1)^2 = 3$. La règle du plus haut degré ne s’applique QU’EN $+\\infty$ et $-\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q5',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to -1} (3x^2 + 2x - 8)$ ?',
            options: ['$3$', '$-7$', '$-3$', '$-13$'],
            correctAnswerIndex: 1,
            explanation: 'En un réel fini $-1$, on substitue directement dans tout le polynôme : $3(-1)^2 + 2(-1) - 8 = 3 - 2 - 8 = -7$ (on ne garde surtout pas uniquement $3x^2$ !).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Degrés égaux au numérateur et dénominateur',
          stepTitle: 'Rapport des coefficients dominants',
          paragraphText:
            'Si numérateur et dénominateur ont le même degré, les puissances de $x$ se simplifient et la limite en $\\pm\\infty$ est le rapport des coefficients dominants.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q6',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\dfrac{6x^3 - x + 4}{-2x^3 + 5x^2 + 1}$ ?',
            options: ['$0$', '$-3$', '$+\\infty$', '$4$'],
            correctAnswerIndex: 1,
            explanation: '$\\lim_{+\\infty}\\dfrac{6x^3}{-2x^3} = \\dfrac{6}{-2} = -3$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q1',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to -\\infty} (-4x^3 + 2x^2 - 6x^7 + 8x - 9)$ ?',
          options: ['$-\\infty$', '$+\\infty$', '$-6$', '$-9$'],
          correctAnswerIndex: 1,
          explanation: 'Le terme de plus haut degré est $-6x^7$. En $-\\infty$, $x^7 \\to -\\infty$, donc $-6x^7 \\to +\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q2',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to +\\infty} (9 - 7x^2 + 6x - 8x^4)$ ?',
          options: ['$9$', '$+\\infty$', '$-\\infty$', '$-8$'],
          correctAnswerIndex: 2,
          explanation: 'Le terme dominant est $-8x^4$, qui tend vers $-\\infty$ quand $x \\to +\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q3',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to -\\infty} \\dfrac{3x^5 - 6x + 8}{5x^3 + 2x^2 - x + 7}$ ?',
          options: ['$\\dfrac{3}{5}$', '$0$', '$-\\infty$', '$+\\infty$'],
          correctAnswerIndex: 3,
          explanation: '$\\lim_{-\\infty}\\dfrac{3x^5}{5x^3} = \\lim_{-\\infty}\\dfrac{3}{5}x^2 = +\\infty$ car $x^2 > 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q4',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to -\\infty} \\dfrac{9 - 7x^2 + 6x}{x^3 + 2x - 4}$ ?',
          options: ['$-7$', '$0$', '$-\\infty$', '$+\\infty$'],
          correctAnswerIndex: 1,
          explanation: '$\\lim_{-\\infty}\\dfrac{-7x^2}{x^3} = \\lim_{-\\infty}\\dfrac{-7}{x} = 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q5',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to -1} (3x^2 + 2x - 8)$ ?',
          options: ['$3$', '$-7$', '$-3$', '$-13$'],
          correctAnswerIndex: 1,
          explanation: 'En un réel fini $-1$, on substitue directement dans tout le polynôme : $3(-1)^2 + 2(-1) - 8 = 3 - 2 - 8 = -7$ (on ne garde surtout pas uniquement $3x^2$ !).',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p04_q6',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\dfrac{6x^3 - x + 4}{-2x^3 + 5x^2 + 1}$ ?',
          options: ['$0$', '$-3$', '$+\\infty$', '$4$'],
          correctAnswerIndex: 1,
          explanation: '$\\lim_{+\\infty}\\dfrac{6x^3}{-2x^3} = \\dfrac{6}{-2} = -3$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Propriétés de comparaison à l'infini
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l07_extension_limite_p05',
      order: 5,
      title: 'Propriétés de comparaison des limites',
      summary: 'Déterminer une limite infinie en minorant vers +∞ ou en majorant vers −∞ (ex. avec cos ou sin).',
      conceptExplanation:
        "Soit $f$ une fonction et $a \\in \\mathbb{R} \\cup \\{+\\infty; -\\infty\\}$.\n\n- **Minoration vers $+\\infty$** : s'il existe une fonction $g$ telle que **$g \\le f$** au voisinage de $a$ et $\\lim_{x\\to a} g(x) = +\\infty$, alors $\\lim_{x\\to a} f(x) = +\\infty$.\n- **Majoration vers $-\\infty$** : s'il existe une fonction $g$ telle que **$f \\le g$** au voisinage de $a$ et $\\lim_{x\\to a} g(x) = -\\infty$, alors $\\lim_{x\\to a} f(x) = -\\infty$.\n\nCes théorèmes sont particulièrement utiles avec $\\sin$ et $\\cos$, qui n'ont pas de limite en $\\pm\\infty$ mais vérifient toujours $-1 \\le \\cos(\\dots) \\le 1$ et $-1 \\le \\sin(\\dots) \\le 1$.",
      keyRule:
        'Plus grand que +∞ donne +∞ (g ≤ f et g → +∞ ⇒ f → +∞). Plus petit que −∞ donne −∞ (f ≤ g et g → −∞ ⇒ f → −∞).',
      formulas: [
        { name: 'Minoration vers +∞', formula: 'g(x) \\le f(x) \\text{ et } \\lim_{x\\to a} g(x) = +\\infty \\implies \\lim_{x\\to a} f(x) = +\\infty' },
        { name: 'Majoration vers −∞', formula: 'f(x) \\le g(x) \\text{ et } \\lim_{x\\to a} g(x) = -\\infty \\implies \\lim_{x\\to a} f(x) = -\\infty' },
      ],
      workedExample: {
        title: 'Limites en −∞ et +∞ de f(x) = 2x + cos(x²)',
        statement: 'Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x + \\cos(x^2)$. Calcule $\\lim_{x\\to -\\infty} f(x)$ et $\\lim_{x\\to +\\infty} f(x)$.',
        methodSteps: [
          'Pour tout $x \\in \\mathbb{R}$, on a $-1 \\le \\cos(x^2) \\le 1$, donc $2x - 1 \\le f(x) \\le 2x + 1$.',
          'En $-\\infty$ : comme $f(x) \\le 2x + 1$ et $\\lim_{x\\to -\\infty}(2x+1) = -\\infty$, on obtient $\\lim_{x\\to -\\infty} f(x) = -\\infty$.',
          'En $+\\infty$ : comme $2x - 1 \\le f(x)$ et $\\lim_{x\\to +\\infty}(2x-1) = +\\infty$, on obtient $\\lim_{x\\to +\\infty} f(x) = +\\infty$.',
        ],
        conclusion: '$\\lim_{x\\to -\\infty} f(x) = -\\infty$ et $\\lim_{x\\to +\\infty} f(x) = +\\infty$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Théorème de minoration',
          stepTitle: 'Coincer f au-dessus d’une fonction qui tend vers +∞',
          paragraphText:
            'Si $g(x) \\le f(x)$ et que $\\lim_{x\\to +\\infty} g(x) = +\\infty$, alors $f(x)$ est poussée vers le haut et tend nécessairement vers $+\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q1',
            type: 'mcq',
            prompt: 'On sait que pour tout réel $x$, $f(x) \\ge 3x - 2$. Que vaut $\\lim_{x\\to +\\infty} f(x)$ ?',
            options: ['$0$', '$-\\infty$', '$+\\infty$', 'Impossible à savoir'],
            correctAnswerIndex: 2,
            explanation: 'Comme $3x - 2 \\le f(x)$ et $\\lim_{x\\to +\\infty}(3x - 2) = +\\infty$, par comparaison $\\lim_{x\\to +\\infty} f(x) = +\\infty$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Théorème de majoration',
          stepTitle: 'Coincer f en dessous d’une fonction qui tend vers −∞',
          paragraphText:
            'Si $f(x) \\le g(x)$ et que $\\lim_{x\\to -\\infty} g(x) = -\\infty$, alors $f(x)$ est poussée vers le bas et tend vers $-\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q2',
            type: 'mcq',
            prompt: 'Pour tout réel $x$, $f(x) \\le 2x + 1$. Que peut-on en déduire pour $\\lim_{x\\to -\\infty} f(x)$ ?',
            options: [
              '$\\lim_{x\\to -\\infty} f(x) = +\\infty$',
              '$\\lim_{x\\to -\\infty} f(x) = -\\infty$',
              '$\\lim_{x\\to -\\infty} f(x) = 1$',
              'On ne peut rien en déduire',
            ],
            correctAnswerIndex: 1,
            explanation: 'Puisque $f(x) \\le 2x + 1$ et $\\lim_{x\\to -\\infty}(2x+1) = -\\infty$, on obtient $\\lim_{x\\to -\\infty} f(x) = -\\infty$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Mauvais sens d’inégalité',
          stepTitle: 'Être plus petit que +∞ ou plus grand que −∞ ne prouve rien !',
          paragraphText:
            'Attention au sens des inégalités ! Savoir que $f(x) \\le 2x + 1$ quand $x \\to +\\infty$ (où $2x+1 \\to +\\infty$) NE PERMET PAS de conclure : $f$ pourrait tendre vers $+\\infty$, $0$ ou $-\\infty$. Pour $+\\infty$, il faut MINORER $f$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q3',
            type: 'mcq',
            prompt:
              'Laquelle de ces conditions NE PERMET PAS de déterminer la limite de $f$ en $+\\infty$ ?',
            options: [
              '$f(x) \\ge x^2$ pour tout $x \\in \\mathbb{R}$',
              '$f(x) \\le -x$ pour tout $x \\in \\mathbb{R}$',
              '$f(x) \\le x^2$ pour tout $x \\in \\mathbb{R}$',
              '$2x - 1 \\le f(x) \\le 2x + 1$ pour tout $x \\in \\mathbb{R}$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Être inférieur ou égal à $+\\infty$ ($f(x) \\le x^2$) ne donne aucune limite (par exemple $f(x)=-x^2$ ou $f(x)=0$ vérifient $f(x) \\le x^2$).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Encadrer cos ou sin',
          stepTitle: 'Utiliser −1 ≤ cos(u) ≤ 1 et −1 ≤ sin(u) ≤ 1',
          paragraphText:
            'Comme $\\cos(x^2)$ oscille indéfiniment entre $-1$ et $1$, il n’a pas de limite à l’infini. Mais on encadre d’abord $-1 \\le \\cos(x^2) \\le 1$, puis on ajoute $2x$ : $2x - 1 \\le 2x + \\cos(x^2) \\le 2x + 1$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q4',
            type: 'mcq',
            prompt: 'Quel encadrement obtient-on pour $f(x) = 2x + \\cos(x^2)$ sur $\\mathbb{R}$ ?',
            options: [
              '$0 \\le f(x) \\le 2x$',
              '$2x - 1 \\le f(x) \\le 2x + 1$',
              '$-1 \\le f(x) \\le 1$',
              '$2x - x^2 \\le f(x) \\le 2x + x^2$',
            ],
            correctAnswerIndex: 1,
            explanation: 'En partant de $-1 \\le \\cos(x^2) \\le 1$ et en ajoutant $2x$ aux trois membres, on obtient $2x - 1 \\le f(x) \\le 2x + 1$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Limite en +∞ avec sinus',
          stepTitle: 'Calculer lim(x→+∞) (x² − sin x)',
          paragraphText:
            'Pour tout $x \\in \\mathbb{R}$, $-1 \\le -\\sin x \\le 1$, donc $x^2 - 1 \\le x^2 - \\sin x$. Or $\\lim_{x\\to +\\infty}(x^2-1) = +\\infty$, donc $\\lim_{x\\to +\\infty}(x^2 - \\sin x) = +\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q5',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to +\\infty} (x^2 - \\sin x)$ ?',
            options: ['$0$', '$-\\infty$', '$+\\infty$', 'N’admet pas de limite'],
            correctAnswerIndex: 2,
            explanation: 'Puisque $x^2 - \\sin x \\ge x^2 - 1$ et $\\lim_{x\\to +\\infty}(x^2-1) = +\\infty$, par minoration la limite vaut $+\\infty$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Limite de −3x + sin x en +∞',
          stepTitle: 'Majorer −3x + sin x',
          paragraphText:
            'Pour tout $x \\in \\mathbb{R}$, $\\sin x \\le 1$ donc $-3x + \\sin x \\le -3x + 1$. Comme $\\lim_{x\\to +\\infty}(-3x+1) = -\\infty$, on conclut $\\lim_{x\\to +\\infty}(-3x + \\sin x) = -\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q6',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to +\\infty} (-3x + \\sin x)$ ?',
            options: ['$-\\infty$', '$+\\infty$', '$0$', '$-3$'],
            correctAnswerIndex: 0,
            explanation: 'Comme $-3x + \\sin x \\le -3x + 1$ et $\\lim_{x\\to +\\infty}(-3x+1) = -\\infty$, la limite est $-\\infty$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q1',
          type: 'mcq',
          prompt: 'On sait que pour tout réel $x$, $f(x) \\ge 3x - 2$. Que vaut $\\lim_{x\\to +\\infty} f(x)$ ?',
          options: ['$0$', '$-\\infty$', '$+\\infty$', 'Impossible à savoir'],
          correctAnswerIndex: 2,
          explanation: 'Comme $3x - 2 \\le f(x)$ et $\\lim_{x\\to +\\infty}(3x - 2) = +\\infty$, par comparaison $\\lim_{x\\to +\\infty} f(x) = +\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q2',
          type: 'mcq',
          prompt: 'Pour tout réel $x$, $f(x) \\le 2x + 1$. Que peut-on en déduire pour $\\lim_{x\\to -\\infty} f(x)$ ?',
          options: [
            '$\\lim_{x\\to -\\infty} f(x) = +\\infty$',
            '$\\lim_{x\\to -\\infty} f(x) = -\\infty$',
            '$\\lim_{x\\to -\\infty} f(x) = 1$',
            'On ne peut rien en déduire',
          ],
          correctAnswerIndex: 1,
          explanation: 'Puisque $f(x) \\le 2x + 1$ et $\\lim_{x\\to -\\infty}(2x+1) = -\\infty$, on obtient $\\lim_{x\\to -\\infty} f(x) = -\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q3',
          type: 'mcq',
          prompt:
            'Laquelle de ces conditions NE PERMET PAS de déterminer la limite de $f$ en $+\\infty$ ?',
          options: [
            '$f(x) \\ge x^2$ pour tout $x \\in \\mathbb{R}$',
            '$f(x) \\le -x$ pour tout $x \\in \\mathbb{R}$',
            '$f(x) \\le x^2$ pour tout $x \\in \\mathbb{R}$',
            '$2x - 1 \\le f(x) \\le 2x + 1$ pour tout $x \\in \\mathbb{R}$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Être inférieur ou égal à $+\\infty$ ($f(x) \\le x^2$) ne donne aucune limite (par exemple $f(x)=-x^2$ ou $f(x)=0$ vérifient $f(x) \\le x^2$).',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q4',
          type: 'mcq',
          prompt: 'Quel encadrement obtient-on pour $f(x) = 2x + \\cos(x^2)$ sur $\\mathbb{R}$ ?',
          options: [
            '$0 \\le f(x) \\le 2x$',
            '$2x - 1 \\le f(x) \\le 2x + 1$',
            '$-1 \\le f(x) \\le 1$',
            '$2x - x^2 \\le f(x) \\le 2x + x^2$',
          ],
          correctAnswerIndex: 1,
          explanation: 'En partant de $-1 \\le \\cos(x^2) \\le 1$ et en ajoutant $2x$ aux trois membres, on obtient $2x - 1 \\le f(x) \\le 2x + 1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q5',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to +\\infty} (x^2 - \\sin x)$ ?',
          options: ['$0$', '$-\\infty$', '$+\\infty$', 'N’admet pas de limite'],
          correctAnswerIndex: 2,
          explanation: 'Puisque $x^2 - \\sin x \\ge x^2 - 1$ et $\\lim_{x\\to +\\infty}(x^2-1) = +\\infty$, par minoration la limite vaut $+\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p05_q6',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to +\\infty} (-3x + \\sin x)$ ?',
          options: ['$-\\infty$', '$+\\infty$', '$0$', '$-3$'],
          correctAnswerIndex: 0,
          explanation: 'Comme $-3x + \\sin x \\le -3x + 1$ et $\\lim_{x\\to +\\infty}(-3x+1) = -\\infty$, la limite est $-\\infty$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Lever les formes indéterminées avec radicaux ou factorisations
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l07_extension_limite_p06',
      order: 6,
      title: 'Lever des formes indéterminées avec radicaux',
      summary: 'Utiliser l’expression conjuguée, la factorisation par √x ou le changement de variable X = √x.',
      conceptExplanation:
        "Pour lever une forme indéterminée contenant une racine carrée, trois techniques principales sont au programme :\n1. **Expression conjuguée** (forme $0/0$ ou $+\\infty - \\infty$ avec radical) : on multiplie par $\\sqrt{u} + v$ pour exploiter $(\\sqrt{u} - v)(\\sqrt{u} + v) = u - v^2$.\n2. **Factorisation par le terme dominant** (ex. $\\sqrt{x}$ dans $x - \\sqrt{x}$) : $x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1)$.\n3. **Changement de variable $X = \\sqrt{x}$** : comme $x = X^2$ et $X \\to +\\infty$ quand $x \\to +\\infty$, on se ramène à une fonction rationnelle en $X$.",
      keyRule:
        'Pour x − √x en +∞, factorise par √x (ou x). Pour un quotient avec √x en +∞, pose X = √x pour retrouver un quotient de polynômes ! Pour 0/0, utilise le conjugué.',
      formulas: [
        { name: 'Factorisation par √x', formula: 'x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1)' },
        { name: 'Changement de variable', formula: 'X = \\sqrt{x} \\implies x = X^2 \\text{ et } \\lim_{x\\to +\\infty} X = +\\infty' },
      ],
      workedExample: {
        title: 'Lever trois formes indéterminées issues des exercices d’approfondissement',
        statement:
          'Calcule :\n1. $\\lim_{x\\to 0} \\dfrac{1}{x}(\\sqrt{1+x^2}-1)$\n2. $\\lim_{x\\to +\\infty}(x - \\sqrt{x})$\n3. $\\lim_{x\\to +\\infty}\\dfrac{2x + 3}{1 - \\sqrt{x}}$',
        methodSteps: [
          '1. Forme $\\infty\\times 0$ : on multiplie par $\\sqrt{1+x^2}+1$, soit $\\dfrac{(1+x^2)-1}{x(\\sqrt{1+x^2}+1)} = \\dfrac{x}{\\sqrt{1+x^2}+1} \\xrightarrow[x\\to 0]{} \\dfrac{0}{2} = 0$.',
          '2. Forme $+\\infty - \\infty$ : on factorise par $\\sqrt{x}$ : $x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x}-1) \\xrightarrow[x\\to +\\infty]{} (+\\infty)\\times(+\\infty) = +\\infty$.',
          '3. En posant $X = \\sqrt{x}$, on a $x = X^2$ et $X \\to +\\infty$ : $\\dfrac{2x+3}{1-\\sqrt{x}} = \\dfrac{2X^2+3}{1-X}$, dont le quotient des plus hauts degrés est $\\dfrac{2X^2}{-X} = -2X \\to -\\infty$.',
        ],
        conclusion: 'Respectivement $0$, $+\\infty$ et $-\\infty$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Quantité conjuguée en 0',
          stepTitle: 'Lever l’indétermination ∞ × 0 par le conjugué',
          paragraphText:
            'Dans $\\dfrac{1}{x}(\\sqrt{1+x^2} - 1)$ en $0$, $\\sqrt{1+x^2}-1 \\to 0$ et $1/x$ diverge. Multiplier par $\\sqrt{1+x^2}+1$ donne $\\dfrac{x^2}{x(\\sqrt{1+x^2}+1)} = \\dfrac{x}{\\sqrt{1+x^2}+1}$, qui tend vers $0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q1',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to 0} \\dfrac{\\sqrt{1 + x^2} - 1}{x}$ ?',
            options: ['$1$', '$0$', '$\\dfrac{1}{2}$', '$+\\infty$'],
            correctAnswerIndex: 1,
            explanation: 'Après multiplication par $\\sqrt{1+x^2}+1$ et simplification par $x$, il reste $\\dfrac{x}{\\sqrt{1+x^2}+1} \\xrightarrow[x\\to 0]{} \\dfrac{0}{2} = 0$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Factoriser par √x',
          stepTitle: 'Transformer x − √x en produit en +∞',
          paragraphText:
            'En $+\\infty$, $x - \\sqrt{x}$ est une forme indéterminée $+\\infty - \\infty$. En factorisant par $\\sqrt{x}$, on obtient $\\sqrt{x}(\\sqrt{x} - 1)$, produit de deux facteurs tendant vers $+\\infty$, donc la limite est $+\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q2',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to +\\infty} (x - \\sqrt{x})$ ?',
            options: ['$0$', '$1$', '$+\\infty$', '$-\\infty$'],
            correctAnswerIndex: 2,
            explanation: '$x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1) \\to (+\\infty)\\times(+\\infty) = +\\infty$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Changement de variable X = √x',
          stepTitle: 'Ramener √x à une fonction rationnelle',
          paragraphText:
            'En posant $X = \\sqrt{x}$ pour $x > 0$, on a $x = X^2$ et lorsque $x \\to +\\infty$, $X \\to +\\infty$. L’expression $\\dfrac{2x+3}{1-\\sqrt{x}}$ devient $\\dfrac{2X^2+3}{1-X}$, qui équivaut en $+\\infty$ à $\\dfrac{2X^2}{-X} = -2X \\to -\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q3',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\dfrac{2x + 3}{1 - \\sqrt{x}}$ ?',
            options: ['$-2$', '$0$', '$+\\infty$', '$-\\infty$'],
            correctAnswerIndex: 3,
            explanation: 'Avec $X = \\sqrt{x}$, $\\lim_{X\\to +\\infty}\\dfrac{2X^2+3}{1-X} = \\lim_{X\\to +\\infty}(-2X) = -\\infty$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Simplifier un produit 0 × ∞',
          stepTitle: 'Réduire (1/x) · x⁷ avant de passer à la limite',
          paragraphText:
            'Dans $\\lim_{x\\to +\\infty}\\left(\\dfrac{1}{x} \\cdot x^7\\right)$, $\\dfrac{1}{x}\\to 0$ et $x^7\\to +\\infty$ (forme $0\\times\\infty$). Il suffit de simplifier : $\\dfrac{x^7}{x} = x^6 \\xrightarrow[x\\to +\\infty]{} +\\infty$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q4',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\left(\\dfrac{1}{x} \\cdot x^7\\right)$ ?',
            options: ['$0$', '$1$', '$+\\infty$', '$7$'],
            correctAnswerIndex: 2,
            explanation: 'Pour $x \\neq 0$, $\\dfrac{1}{x}\\cdot x^7 = x^6$, et $\\lim_{x\\to +\\infty} x^6 = +\\infty$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier la règle du conjugué à l’infini',
          stepTitle: 'Lever √(x² + 1) − x en +∞ par le conjugué',
          paragraphText:
            'Dans $\\sqrt{x^2+1} - x$ en $+\\infty$, on obtient $+\\infty - \\infty$. Multiplier par $\\sqrt{x^2+1} + x$ donne $\\dfrac{(x^2+1) - x^2}{\\sqrt{x^2+1}+x} = \\dfrac{1}{\\sqrt{x^2+1}+x}$, qui tend vers $0$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q5',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\left(\\sqrt{x^2 + 1} - x\\right)$ ?',
            options: ['$+\\infty$', '$1$', '$0$', '$\\dfrac{1}{2}$'],
            correctAnswerIndex: 2,
            explanation: 'Par expression conjuguée, $\\sqrt{x^2+1}-x = \\dfrac{1}{\\sqrt{x^2+1}+x} \\xrightarrow[x\\to +\\infty]{} 0$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Changement de variable X = √x (degrés égaux)',
          stepTitle: 'Calculer lim(x→+∞) (3x − 1)/(x + 2√x)',
          paragraphText:
            'En posant $X = \\sqrt{x}$, $\\dfrac{3x-1}{x+2\\sqrt{x}} = \\dfrac{3X^2-1}{X^2+2X}$, dont le quotient des termes dominants vaut $\\dfrac{3X^2}{X^2} = 3$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q6',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\dfrac{3x - 1}{x + 2\\sqrt{x}}$ ?',
            options: ['$0$', '$\\dfrac{3}{2}$', '$3$', '$+\\infty$'],
            correctAnswerIndex: 2,
            explanation: 'Avec $X = \\sqrt{x}$, $\\dfrac{3X^2-1}{X^2+2X} \\sim \\dfrac{3X^2}{X^2} = 3$ quand $X \\to +\\infty$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q1',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to 0} \\dfrac{\\sqrt{1 + x^2} - 1}{x}$ ?',
          options: ['$1$', '$0$', '$\\dfrac{1}{2}$', '$+\\infty$'],
          correctAnswerIndex: 1,
          explanation: 'Après multiplication par $\\sqrt{1+x^2}+1$ et simplification par $x$, il reste $\\dfrac{x}{\\sqrt{1+x^2}+1} \\xrightarrow[x\\to 0]{} \\dfrac{0}{2} = 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q2',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to +\\infty} (x - \\sqrt{x})$ ?',
          options: ['$0$', '$1$', '$+\\infty$', '$-\\infty$'],
          correctAnswerIndex: 2,
          explanation: '$x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1) \\to (+\\infty)\\times(+\\infty) = +\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q3',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\dfrac{2x + 3}{1 - \\sqrt{x}}$ ?',
          options: ['$-2$', '$0$', '$+\\infty$', '$-\\infty$'],
          correctAnswerIndex: 3,
          explanation: 'Avec $X = \\sqrt{x}$, $\\lim_{X\\to +\\infty}\\dfrac{2X^2+3}{1-X} = \\lim_{X\\to +\\infty}(-2X) = -\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q4',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\left(\\dfrac{1}{x} \\cdot x^7\\right)$ ?',
          options: ['$0$', '$1$', '$+\\infty$', '$7$'],
          correctAnswerIndex: 2,
          explanation: 'Pour $x \\neq 0$, $\\dfrac{1}{x}\\cdot x^7 = x^6$, et $\\lim_{x\\to +\\infty} x^6 = +\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q5',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\left(\\sqrt{x^2 + 1} - x\\right)$ ?',
          options: ['$+\\infty$', '$1$', '$0$', '$\\dfrac{1}{2}$'],
          correctAnswerIndex: 2,
          explanation: 'Par expression conjuguée, $\\sqrt{x^2+1}-x = \\dfrac{1}{\\sqrt{x^2+1}+x} \\xrightarrow[x\\to +\\infty]{} 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l07_extension_limite_p06_q6',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to +\\infty} \\dfrac{3x - 1}{x + 2\\sqrt{x}}$ ?',
          options: ['$0$', '$\\dfrac{3}{2}$', '$3$', '$+\\infty$'],
          correctAnswerIndex: 2,
          explanation: 'Avec $X = \\sqrt{x}$, $\\dfrac{3X^2-1}{X^2+2X} \\sim \\dfrac{3X^2}{X^2} = 3$ quand $X \\to +\\infty$.',
        },
      ],
    },
  ],
};
