import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 9 : Dérivation.pdf » (format v2).
export const MATHS_1RE_C_L09_DERIVATION: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l09_derivation',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 9,
  title: 'Leçon 9 : Dérivation',
  summary:
    'Nombre dérivé en un point, équation de la tangente, lien dérivabilité-continuité, dérivées de référence et opérations, sens de variation, extremums relatifs et optimisation.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: '1ère C - Leçon 9 : Dérivation.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Nombre dérivé en un point x₀
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l09_derivation_p01',
      order: 1,
      title: 'Nombre dérivé d’une fonction en un point x₀',
      summary: 'Calculer la limite du taux d’accroissement (f(x) − f(x₀))/(x − x₀) et reconnaître les cas de non-dérivabilité.',
      conceptExplanation:
        "Soit $f$ une fonction définie sur un intervalle ouvert $K$ contenant le réel $x_0$. On dit que **$f$ est dérivable en $x_0$** lorsque le taux d'accroissement $\\dfrac{f(x) - f(x_0)}{x - x_0}$ admet une **limite finie** (un nombre réel) lorsque $x \\to x_0$.\n\nCette limite finie est appelée **nombre dérivé de $f$ en $x_0$** et est notée **$f'(x_0)$** :\n$$f \\text{ est dérivable en } x_0 \\iff \\begin{cases} x_0 \\in D_f \\\\ \\displaystyle\\lim_{x\\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} \\in \\mathbb{R} \\end{cases}$$\n\nSi cette limite est $+\\infty$, $-\\infty$ ou n'existe pas, $f$ n'est pas dérivable en $x_0$.",
      keyRule:
        'f est dérivable en x₀ uniquement si la limite du taux d’accroissement en x₀ est un NOMBRE RÉEL FINI (jamais ±∞ !).',
      formulas: [
        {
          name: 'Nombre dérivé en x₀',
          formula: "f'(x_0) = \\lim_{x\\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} \\in \\mathbb{R}",
        },
      ],
      workedExample: {
        title: 'Dérivabilité en un point de f(x) = x² − 2, g(x) = √x et h(x) = √(3x + 1)',
        statement:
          'En utilisant la définition, étudie la dérivabilité :\n1. de $f(x) = x^2 - 2$ en $3$ ;\n2. de $g(x) = \\sqrt{x}$ en $0$ ;\n3. de $h(x) = \\sqrt{3x + 1}$ en $2$.',
        methodSteps: [
          '1. $\\dfrac{f(x)-f(3)}{x-3} = \\dfrac{(x^2-2)-7}{x-3} = \\dfrac{x^2-9}{x-3} = x + 3 \\xrightarrow[x\\to 3]{} 6 \\in \\mathbb{R}$, donc $f\'(3) = 6$.',
          '2. Pour $x > 0$, $\\dfrac{g(x)-g(0)}{x-0} = \\dfrac{\\sqrt{x}}{x} = \\dfrac{1}{\\sqrt{x}} \\xrightarrow[x\\to 0^>]{} +\\infty \\notin \\mathbb{R}$, donc $g$ n’est pas dérivable en $0$.',
          '3. Par conjugué : $\\dfrac{\\sqrt{3x+1}-\\sqrt{7}}{x-2} = \\dfrac{(3x+1)-7}{(x-2)(\\sqrt{3x+1}+\\sqrt{7})} = \\dfrac{3}{\\sqrt{3x+1}+\\sqrt{7}} \\xrightarrow[x\\to 2]{} \\dfrac{3}{2\\sqrt{7}} = \\dfrac{3\\sqrt{7}}{14}$.',
        ],
        conclusion: '$f\'(3) = 6$, $g$ n’est pas dérivable en $0$, et $h\'(2) = \\dfrac{3\\sqrt{7}}{14}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Critère de dérivabilité',
          stepTitle: 'Reconnaître quand f est dérivable en x₀',
          paragraphText:
            'Pour que $f$ soit dérivable en $x_0$, il faut que $x_0 \\in D_f$ et que $\\lim_{x\\to x_0}\\dfrac{f(x)-f(x_0)}{x-x_0}$ soit un nombre réel fini. Une limite égale à $+\\infty$ ou $-\\infty$ exclut la dérivabilité en $x_0$.',
          formula: { name: 'Critère', formula: "\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0} \\in \\mathbb{R}" },
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p01_q1',
            type: 'mcq',
            prompt:
              'Dans quel cas parmi les suivants la fonction $f$ (définie autour de $x_0$) est-elle dérivable en $x_0$ ?',
            options: [
              '$\\lim_{x\\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0} = -\\infty$',
              '$\\lim_{x\\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0} = +\\infty$',
              'La limite en $x_0$ de $\\dfrac{f(x)-f(x_0)}{x-x_0}$ n’existe pas',
              '$\\lim_{x\\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0} = -3$',
            ],
            correctAnswerIndex: 3,
            explanation: 'Seule une limite finie réelle ($-3 \\in \\mathbb{R}$) prouve que $f$ est dérivable en $x_0$ (avec $f\'(x_0) = -3$).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Taux d’accroissement d’un polynôme',
          stepTitle: 'Calculer f’(3) pour f(x) = x² − 2',
          paragraphText:
            'On calcule $f(3) = 7$, puis on factorise $f(x) - f(3) = x^2 - 9 = (x-3)(x+3)$ pour simplifier par $(x-3)$ et passer à la limite en $3$ : on trouve $f\'(3) = 6$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p01_q2',
            type: 'mcq',
            prompt: 'Pour $f(x) = x^2 + 2x - 3$, que vaut le nombre dérivé $f\'(-1)$ calculé par la définition ?',
            options: ['$-4$', '$0$', '$2$', '$-1$'],
            correctAnswerIndex: 1,
            explanation: '$f(-1) = -4$, donc $\\dfrac{x^2+2x-3 - (-4)}{x+1} = \\dfrac{(x+1)^2}{x+1} = x+1 \\xrightarrow[x\\to -1]{} 0$, soit $f\'(-1)=0$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Taux d’accroissement d’une fraction',
          stepTitle: 'Réduire au même dénominateur puis simplifier par (x − x₀)',
          paragraphText:
            'Pour $f(x) = \\dfrac{x+2}{x+1}$ en $x_0 = 0$, $f(0) = 2$, donc $\\dfrac{f(x)-2}{x} = \\dfrac{\\frac{x+2-2(x+1)}{x+1}}{x} = \\dfrac{-x}{x(x+1)} = \\dfrac{-1}{x+1} \\xrightarrow[x\\to 0]{} -1$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p01_q3',
            type: 'mcq',
            prompt: 'Soit $f(x) = \\dfrac{x + 2}{x + 1}$ ($x \\neq -1$). Que vaut $f\'(0)$ ?',
            options: ['$2$', '$1$', '$-1$', '$-2$'],
            correctAnswerIndex: 2,
            explanation: '$\\dfrac{f(x)-f(0)}{x} = \\dfrac{-1}{x+1} \\xrightarrow[x\\to 0]{} -1$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Taux d’accroissement avec radical',
          stepTitle: 'Multiplier par l’expression conjuguée',
          paragraphText:
            'Pour $f(x) = \\sqrt{3x+1}$ en $x_0 = 2$, $f(2) = \\sqrt{7}$. En multipliant haut et bas par $\\sqrt{3x+1}+\\sqrt{7}$, le numérateur devient $(3x+1)-7 = 3(x-2)$, qui se simplifie par $(x-2)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p01_q4',
            type: 'mcq',
            prompt: 'En utilisant le taux d’accroissement de $f(x) = \\sqrt{3x + 1}$ en $x_0 = 2$, que vaut $f\'(2)$ ?',
            options: ['$\\dfrac{1}{2\\sqrt{7}}$', '$\\dfrac{3\\sqrt{7}}{14}$', '$\\dfrac{3}{\\sqrt{7}}$', '$\\sqrt{7}$'],
            correctAnswerIndex: 1,
            explanation: '$\\lim_{x\\to 2}\\dfrac{3}{\\sqrt{3x+1}+\\sqrt{7}} = \\dfrac{3}{2\\sqrt{7}} = \\dfrac{3\\sqrt{7}}{14}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Non-dérivabilité de √x en 0',
          stepTitle: 'Une limite égale à +∞ signifie NON dérivable',
          paragraphText:
            'Pour $g(x) = \\sqrt{x}$, $\\dfrac{\\sqrt{x}-0}{x-0} = \\dfrac{1}{\\sqrt{x}} \\xrightarrow[x\\to 0^>]{} +\\infty$. Comme $+\\infty \\notin \\mathbb{R}$, $g$ n’est pas dérivable en $0$ (elle y admet une demi-tangente verticale).',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p01_q5',
            type: 'mcq',
            prompt: 'Pourquoi la fonction $g(x) = \\sqrt{x}$ définie sur $[0; +\\infty[$ n’est-elle pas dérivable en $0$ ?',
            options: [
              'Parce que $g(0)$ n’existe pas',
              'Parce que $g$ n’est pas continue en $0$',
              'Parce que $\\lim_{\\substack{x\\to 0\\\\>}} \\dfrac{\\sqrt{x} - 0}{x - 0} = +\\infty \\notin \\mathbb{R}$',
              'Parce que $\\sqrt{x}$ est toujours positive',
            ],
            correctAnswerIndex: 2,
            explanation: '$g$ est bien continue en $0$, mais son taux d’accroissement tend vers $+\\infty$, qui n’est pas un nombre réel.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Fonction cube par définition',
          stepTitle: 'Calculer g’(x₀) pour g(x) = x³',
          paragraphText:
            'Avec l’identité $x^3 - x_0^3 = (x - x_0)(x^2 + xx_0 + x_0^2)$, on obtient $\\lim_{x\\to x_0}\\dfrac{x^3-x_0^3}{x-x_0} = \\lim_{x\\to x_0}(x^2 + xx_0 + x_0^2) = 3x_0^2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p01_q6',
            type: 'mcq',
            prompt:
              'Quel facteur apparaît en simplifiant $\\dfrac{x^3 - x_0^3}{x - x_0}$ pour $x \\neq x_0$ ?',
            options: ['$x^2 - xx_0 + x_0^2$', '$x^2 + xx_0 + x_0^2$', '$(x - x_0)^2$', '$3x_0^2$'],
            correctAnswerIndex: 1,
            explanation: '$x^3 - x_0^3 = (x - x_0)(x^2 + xx_0 + x_0^2)$, dont la limite en $x_0$ donne $x_0^2 + x_0^2 + x_0^2 = 3x_0^2$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p01_q1',
          type: 'mcq',
          prompt:
            'Dans quel cas parmi les suivants la fonction $f$ (définie autour de $x_0$) est-elle dérivable en $x_0$ ?',
          options: [
            '$\\lim_{x\\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0} = -\\infty$',
            '$\\lim_{x\\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0} = +\\infty$',
            'La limite en $x_0$ de $\\dfrac{f(x)-f(x_0)}{x-x_0}$ n’existe pas',
            '$\\lim_{x\\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0} = -3$',
          ],
          correctAnswerIndex: 3,
          explanation: 'Seule une limite finie réelle ($-3 \\in \\mathbb{R}$) prouve que $f$ est dérivable en $x_0$ (avec $f\'(x_0) = -3$).',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p01_q2',
          type: 'mcq',
          prompt: 'Pour $f(x) = x^2 + 2x - 3$, que vaut le nombre dérivé $f\'(-1)$ calculé par la définition ?',
          options: ['$-4$', '$0$', '$2$', '$-1$'],
          correctAnswerIndex: 1,
          explanation: '$f(-1) = -4$, donc $\\dfrac{x^2+2x-3 - (-4)}{x+1} = \\dfrac{(x+1)^2}{x+1} = x+1 \\xrightarrow[x\\to -1]{} 0$, soit $f\'(-1)=0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p01_q3',
          type: 'mcq',
          prompt: 'Soit $f(x) = \\dfrac{x + 2}{x + 1}$ ($x \\neq -1$). Que vaut $f\'(0)$ ?',
          options: ['$2$', '$1$', '$-1$', '$-2$'],
          correctAnswerIndex: 2,
          explanation: '$\\dfrac{f(x)-f(0)}{x} = \\dfrac{-1}{x+1} \\xrightarrow[x\\to 0]{} -1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p01_q4',
          type: 'mcq',
          prompt: 'En utilisant le taux d’accroissement de $f(x) = \\sqrt{3x + 1}$ en $x_0 = 2$, que vaut $f\'(2)$ ?',
          options: ['$\\dfrac{1}{2\\sqrt{7}}$', '$\\dfrac{3\\sqrt{7}}{14}$', '$\\dfrac{3}{\\sqrt{7}}$', '$\\sqrt{7}$'],
          correctAnswerIndex: 1,
          explanation: '$\\lim_{x\\to 2}\\dfrac{3}{\\sqrt{3x+1}+\\sqrt{7}} = \\dfrac{3}{2\\sqrt{7}} = \\dfrac{3\\sqrt{7}}{14}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p01_q5',
          type: 'mcq',
          prompt: 'Pourquoi la fonction $g(x) = \\sqrt{x}$ définie sur $[0; +\\infty[$ n’est-elle pas dérivable en $0$ ?',
          options: [
            'Parce que $g(0)$ n’existe pas',
            'Parce que $g$ n’est pas continue en $0$',
            'Parce que $\\lim_{\\substack{x\\to 0\\\\>}} \\dfrac{\\sqrt{x} - 0}{x - 0} = +\\infty \\notin \\mathbb{R}$',
            'Parce que $\\sqrt{x}$ est toujours positive',
          ],
          correctAnswerIndex: 2,
          explanation: '$g$ est bien continue en $0$, mais son taux d’accroissement tend vers $+\\infty$, qui n’est pas un nombre réel.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p01_q6',
          type: 'mcq',
          prompt:
            'Quel facteur apparaît en simplifiant $\\dfrac{x^3 - x_0^3}{x - x_0}$ pour $x \\neq x_0$ ?',
          options: ['$x^2 - xx_0 + x_0^2$', '$x^2 + xx_0 + x_0^2$', '$(x - x_0)^2$', '$3x_0^2$'],
          correctAnswerIndex: 1,
          explanation: '$x^3 - x_0^3 = (x - x_0)(x^2 + xx_0 + x_0^2)$, dont la limite en $x_0$ donne $x_0^2 + x_0^2 + x_0^2 = 3x_0^2$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Tangente à une courbe et lien dérivabilité / continuité
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l09_derivation_p02',
      order: 2,
      title: 'Tangente à la courbe et lien avec la continuité',
      summary: 'Déterminer l’équation de la tangente y = f’(x₀)(x − x₀) + f(x₀) et maîtriser les implications entre dérivabilité et continuité.',
      conceptExplanation:
        "**1. Interprétation graphique (Tangente)** : si $f$ est dérivable en $x_0$, alors $(C_f)$ admet au point $A(x_0; f(x_0))$ une **tangente $(T)$** de coefficient directeur **$f'(x_0)$**, d'équation réduite :\n$$y = f'(x_0)(x - x_0) + f(x_0)$$\nEn particulier, si $f'(x_0) = 0$, la tangente a pour équation $y = f(x_0)$ : elle est **horizontale** (parallèle à l'axe des abscisses).\n\n**2. Dérivabilité et continuité** :\n- **Si $f$ est dérivable en $x_0$, alors $f$ est continue en $x_0$**.\n- Par contraposée, si $f$ n'est pas continue en $x_0$, alors $f$ n'est pas dérivable en $x_0$.\n- **Attention, la réciproque est FAUSSE** : $f$ peut être continue en $x_0$ sans être dérivable en $x_0$ (exemples : $\\sqrt{x}$ en $0$, ou $|x|$ en $0$).",
      keyRule:
        'Tangente en x₀ : y = f’(x₀)(x − x₀) + f(x₀). Si f’(x₀) = 0, la tangente est horizontale ! Dérivable ⇒ Continue, mais Continue ⇏ Dérivable.',
      formulas: [
        { name: 'Équation de la tangente en x₀', formula: 'y = f\'(x_0)(x - x_0) + f(x_0)' },
        { name: 'Implication logique', formula: 'f \\text{ dérivable en } x_0 \\implies f \\text{ continue en } x_0' },
      ],
      workedExample: {
        title: 'Équation de la tangente à la courbe de f(x) = 1/x en −2',
        statement: 'Soit $f(x) = \\dfrac{1}{x}$ sur $\\mathbb{R}^*$. Détermine une équation de la tangente $(T)$ à $(C_f)$ au point d’abscisse $x_0 = -2$.',
        methodSteps: [
          'On calcule $f(-2) = \\dfrac{1}{-2} = -\\dfrac{1}{2}$.',
          'Comme $f\'(x) = -\\dfrac{1}{x^2}$, on a $f\'(-2) = -\\dfrac{1}{(-2)^2} = -\\dfrac{1}{4}$.',
          'On applique la formule : $y = f\'(-2)(x - (-2)) + f(-2) = -\\dfrac{1}{4}(x + 2) - \\dfrac{1}{2} = -\\dfrac{1}{4}x - \\dfrac{1}{2} - \\dfrac{1}{2} = -\\dfrac{1}{4}x - 1$.',
        ],
        conclusion: 'La tangente $(T)$ a pour équation $y = -\\dfrac{1}{4}x - 1$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Équation de la tangente',
          stepTitle: 'Appliquer y = f’(x₀)(x − x₀) + f(x₀)',
          paragraphText:
            'Connaissant $f(x_0)$ et $f\'(x_0)$, la tangente en $x_0$ est la droite passant par $(x_0; f(x_0))$ de pente $f\'(x_0)$, donc $y = f\'(x_0)(x - x_0) + f(x_0)$.',
          formula: { name: 'Tangente (T)', formula: 'y = f\'(x_0)(x - x_0) + f(x_0)' },
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p02_q1',
            type: 'mcq',
            prompt: 'Soit $f$ dérivable en $2$ telle que $f(2) = -4$ et $f\'(2) = -3$. Quelle est l’équation de la tangente $(T)$ au point d’abscisse $2$ ?',
            options: ['$y = -3x - 4$', '$y = -3x + 2$', '$y = -4x - 3$', '$y = -3x + 10$'],
            correctAnswerIndex: 1,
            explanation: '$y = f\'(2)(x-2) + f(2) = -3(x-2) - 4 = -3x + 6 - 4 = -3x + 2$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Tangente avec abscisse négative',
          stepTitle: 'Attention au signe dans (x − x₀) quand x₀ < 0',
          paragraphText:
            'Si $x_0 = -2$, alors $x - x_0 = x - (-2) = x + 2$ ! Pour $f(x) = \\frac{1}{x}$, $f(-2) = -\\frac{1}{2}$ et $f\'(-2) = -\\frac{1}{4}$, donc $y = -\\frac{1}{4}(x+2) - \\frac{1}{2} = -\\frac{1}{4}x - 1$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p02_q2',
            type: 'mcq',
            prompt: 'Quelle est l’équation de la tangente à la courbe de $f(x) = \\dfrac{1}{x}$ au point d’abscisse $-2$ ?',
            options: [
              '$y = -\\dfrac{1}{4}x - 1$',
              '$y = \\dfrac{1}{4}x$',
              '$y = -\\dfrac{1}{4}x + 1$',
              '$y = -\\dfrac{1}{2}x - 1$',
            ],
            correctAnswerIndex: 0,
            explanation: '$f(-2) = -\\frac{1}{2}$ et $f\'(-2) = -\\frac{1}{4}$, d’où $y = -\\frac{1}{4}(x+2)-\\frac{1}{2} = -\\frac{1}{4}x - 1$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Tangente quand f’(a) = 0',
          stepTitle: 'f’(a) = 0 donne une tangente HORIZONTALE, pas verticale !',
          paragraphText:
            'Si $f\'(a) = 0$, le coefficient directeur de la tangente est nul, donc son équation est $y = f(a)$ : c’est une tangente **horizontale** (et non verticale !). Par exemple pour $g(2)=2$ et $g\'(2)=0$, $(T): y = 2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p02_q3',
            type: 'mcq',
            prompt: 'Si $f\'(a) = 0$ et $f(a) = 2$, que peut-on dire de la tangente à $(C_f)$ au point d’abscisse $a$ ?',
            options: [
              'Elle est verticale d’équation $x = a$',
              'Elle est horizontale d’équation $y = 2$',
              'Il n’existe pas de tangente en $a$',
              'Elle passe obligatoirement par l’origine $(0; 0)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Une pente nulle ($f\'(a)=0$) correspond à une tangente horizontale d’équation $y = f(a) = 2$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Dérivabilité entraîne continuité',
          stepTitle: 'Toute fonction dérivable en x₀ est continue en x₀',
          paragraphText:
            'Si $f$ est dérivable en $x_0$, alors $f$ est continue en $x_0$. Par conséquent (contraposée), toute fonction qui n’est pas continue en $x_0$ n’est pas dérivable en $x_0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p02_q4',
            type: 'mcq',
            prompt: 'Laquelle des affirmations suivantes est VRAIE pour toute fonction $f$ ?',
            options: [
              'Toute fonction continue en $x_0$ est dérivable en $x_0$',
              'Toute fonction qui n’est pas continue en $x_0$ peut être dérivable en $x_0$',
              'Toute fonction dérivable en $x_0$ est continue en $x_0$',
              'Une fonction continue en $x_0$ a toujours $f\'(x_0) = 0$',
            ],
            correctAnswerIndex: 2,
            explanation: 'La dérivabilité implique toujours la continuité ; en revanche la réciproque est fausse (ex. $\\sqrt{x}$ ou $|x|$ en $0$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Contraposée vs réciproque',
          stepTitle: 'Distinguer continuité non dérivable et discontinuité',
          paragraphText:
            'Réciproquement, être continue en $x_0$ NE SUFFIT PAS pour être dérivable en $x_0$ ($\\sqrt{x}$ et $|x|$ sont continues en $0$ mais pas dérivables en $0$). En revanche, si $f$ n’est pas continue en $x_0$, il est impossible qu’elle soit dérivable en $x_0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p02_q5',
            type: 'mcq',
            prompt: 'Parmi ces deux affirmations, laquelle est correcte ? (1) Non continue $\\implies$ non dérivable. (2) Continue $\\implies$ dérivable.',
            options: [
              'Les deux sont vraies',
              '(1) est vraie et (2) est fausse',
              '(1) est fausse et (2) est vraie',
              'Les deux sont fausses',
            ],
            correctAnswerIndex: 1,
            explanation: '(1) est la contraposée vraie de « dérivable $\\implies$ continue ». (2) est fausse (contre-exemple : $|x|$ en $0$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Tangente en 0 à un polynôme',
          stepTitle: 'Déterminer la tangente de h(x) = (1/3)x³ − x² − 3x + 2 en 0',
          paragraphText:
            'Pour $h(x) = \\frac{1}{3}x^3 - x^2 - 3x + 2$, $h\'(x) = x^2 - 2x - 3$. En $x_0 = 0$, $h(0) = 2$ et $h\'(0) = -3$, donc la tangente en $0$ a pour équation $y = -3(x - 0) + 2 = -3x + 2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p02_q6',
            type: 'mcq',
            prompt: 'Quelle est l’équation de la tangente à la courbe de $h(x) = \\dfrac{1}{3}x^3 - x^2 - 3x + 2$ au point d’abscisse $0$ ?',
            options: ['$y = 2x - 3$', '$y = -3x + 2$', '$y = -3x - 2$', '$y = 3x + 2$'],
            correctAnswerIndex: 1,
            explanation: '$h\'(x) = x^2 - 2x - 3$, donc $h\'(0) = -3$ et $h(0) = 2$, ce qui donne $y = -3x + 2$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p02_q1',
          type: 'mcq',
          prompt: 'Soit $f$ dérivable en $2$ telle que $f(2) = -4$ et $f\'(2) = -3$. Quelle est l’équation de la tangente $(T)$ au point d’abscisse $2$ ?',
          options: ['$y = -3x - 4$', '$y = -3x + 2$', '$y = -4x - 3$', '$y = -3x + 10$'],
          correctAnswerIndex: 1,
          explanation: '$y = f\'(2)(x-2) + f(2) = -3(x-2) - 4 = -3x + 6 - 4 = -3x + 2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p02_q2',
          type: 'mcq',
          prompt: 'Quelle est l’équation de la tangente à la courbe de $f(x) = \\dfrac{1}{x}$ au point d’abscisse $-2$ ?',
          options: [
            '$y = -\\dfrac{1}{4}x - 1$',
            '$y = \\dfrac{1}{4}x$',
            '$y = -\\dfrac{1}{4}x + 1$',
            '$y = -\\dfrac{1}{2}x - 1$',
          ],
          correctAnswerIndex: 0,
          explanation: '$f(-2) = -\\frac{1}{2}$ et $f\'(-2) = -\\frac{1}{4}$, d’où $y = -\\frac{1}{4}(x+2)-\\frac{1}{2} = -\\frac{1}{4}x - 1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p02_q3',
          type: 'mcq',
          prompt: 'Si $f\'(a) = 0$ et $f(a) = 2$, que peut-on dire de la tangente à $(C_f)$ au point d’abscisse $a$ ?',
          options: [
            'Elle est verticale d’équation $x = a$',
            'Elle est horizontale d’équation $y = 2$',
            'Il n’existe pas de tangente en $a$',
            'Elle passe obligatoirement par l’origine $(0; 0)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Une pente nulle ($f\'(a)=0$) correspond à une tangente horizontale d’équation $y = f(a) = 2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p02_q4',
          type: 'mcq',
          prompt: 'Laquelle des affirmations suivantes est VRAIE pour toute fonction $f$ ?',
          options: [
            'Toute fonction continue en $x_0$ est dérivable en $x_0$',
            'Toute fonction qui n’est pas continue en $x_0$ peut être dérivable en $x_0$',
            'Toute fonction dérivable en $x_0$ est continue en $x_0$',
            'Une fonction continue en $x_0$ a toujours $f\'(x_0) = 0$',
          ],
          correctAnswerIndex: 2,
          explanation: 'La dérivabilité implique toujours la continuité ; en revanche la réciproque est fausse (ex. $\\sqrt{x}$ ou $|x|$ en $0$).',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p02_q5',
          type: 'mcq',
          prompt: 'Parmi ces deux affirmations, laquelle est correcte ? (1) Non continue $\\implies$ non dérivable. (2) Continue $\\implies$ dérivable.',
          options: [
            'Les deux sont vraies',
            '(1) est vraie et (2) est fausse',
            '(1) est fausse et (2) est vraie',
            'Les deux sont fausses',
          ],
          correctAnswerIndex: 1,
          explanation: '(1) est la contraposée vraie de « dérivable $\\implies$ continue ». (2) est fausse (contre-exemple : $|x|$ en $0$).',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p02_q6',
          type: 'mcq',
          prompt: 'Quelle est l’équation de la tangente à la courbe de $h(x) = \\dfrac{1}{3}x^3 - x^2 - 3x + 2$ au point d’abscisse $0$ ?',
          options: ['$y = 2x - 3$', '$y = -3x + 2$', '$y = -3x - 2$', '$y = 3x + 2$'],
          correctAnswerIndex: 1,
          explanation: '$h\'(x) = x^2 - 2x - 3$, donc $h\'(0) = -3$ et $h(0) = 2$, ce qui donne $y = -3x + 2$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Fonction dérivée et dérivées des fonctions de référence
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l09_derivation_p03',
      order: 3,
      title: 'Fonction dérivée et dérivées des fonctions de référence',
      summary: 'Connaître le tableau complet des dérivées usuelles et leurs ensembles de dérivabilité.',
      conceptExplanation:
        "Une fonction $f$ est **dérivable sur un intervalle ouvert $K$** lorsqu'elle est dérivable en tout point de $K$. La fonction qui à tout $x \\in K$ associe $f'(x)$ est la **fonction dérivée** de $f$, notée $f'$.\n\n**Dérivées des fonctions de référence** :\n- $x \\mapsto k$ ($k \\in \\mathbb{R}$) $\\implies$ $0$ sur $\\mathbb{R}$ ;\n- $x \\mapsto ax + b$ $\\implies$ $a$ sur $\\mathbb{R}$ ;\n- $x \\mapsto x^n$ ($n \\in \\mathbb{N}^*$) $\\implies$ $n x^{n-1}$ sur $\\mathbb{R}$ ;\n- $x \\mapsto \\sqrt{x}$ $\\implies$ $\\dfrac{1}{2\\sqrt{x}}$ sur **$]0; +\\infty[$** ;\n- $x \\mapsto \\dfrac{1}{x}$ $\\implies$ $-\\dfrac{1}{x^2}$ sur $\\mathbb{R}^*$ ;\n- $x \\mapsto \\dfrac{1}{x^n}$ ($n \\in \\mathbb{N}^*$) $\\implies$ $-\\dfrac{n}{x^{n+1}}$ sur $\\mathbb{R}^*$ ;\n- $x \\mapsto \\sin x \\implies \\cos x$ sur $\\mathbb{R}$ ; $x \\mapsto \\cos x \\implies -\\sin x$ sur $\\mathbb{R}$ ;\n- $x \\mapsto \\tan x \\implies 1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x}$ sur $\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi,\\, k\\in\\mathbb{Z}\\right\\}$.",
      keyRule:
        'Apprends par cœur les 10 dérivées de référence et leur ensemble de dérivabilité : attention, √x est dérivable sur ]0 ; +∞[ (ouvert en 0 !).',
      formulas: [
        { name: 'Puissance xⁿ', formula: '(x^n)\' = n x^{n-1} \\quad (\\text{sur } \\mathbb{R})' },
        { name: 'Inverse 1/xⁿ', formula: '\\left(\\frac{1}{x^n}\\right)\' = -\\frac{n}{x^{n+1}} \\quad (\\text{sur } \\mathbb{R}^*)' },
        { name: 'Racine carrée', formula: '(\\sqrt{x})\' = \\frac{1}{2\\sqrt{x}} \\quad (\\text{sur } ]0;+\\infty[)' },
        { name: 'Trigonométrie', formula: '(\\sin x)\' = \\cos x,\\; (\\cos x)\' = -\\sin x,\\; (\\tan x)\' = 1+\\tan^2 x = \\frac{1}{\\cos^2 x}' },
      ],
      workedExample: {
        title: 'Associer des fonctions usuelles à leurs fonctions dérivées',
        statement: 'Détermine la fonction dérivée de : $x \\mapsto -3$, $x \\mapsto x^4$, $x \\mapsto \\dfrac{1}{x^4}$, $x \\mapsto \\cos x$ et $x \\mapsto \\tan x$.',
        methodSteps: [
          'Constante : $(-3)\' = 0$.',
          'Puissance $n=4$ : $(x^4)\' = 4x^3$.',
          'Inverse de puissance $\\frac{1}{x^4}$ ($n=4$) : $\\left(\\frac{1}{x^4}\\right)\' = -\\dfrac{4}{x^5}$ sur $\\mathbb{R}^*$.',
          'Trigonométrie : $(\\cos x)\' = -\\sin x$ et $(\\tan x)\' = \\dfrac{1}{\\cos^2 x} = 1 + \\tan^2 x$.',
        ],
        conclusion: 'Respectivement $0$, $4x^3$, $-\\dfrac{4}{x^5}$, $-\\sin x$ et $\\dfrac{1}{\\cos^2 x}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Constante, affine et puissance',
          stepTitle: 'Dériver k, ax + b et xⁿ',
          paragraphText:
            'La dérivée d’une constante $k$ vaut $0$, celle de $ax+b$ vaut $a$, et pour $n \\in \\mathbb{N}^*$, $(x^n)\' = n x^{n-1}$ sur $\\mathbb{R}$. Ainsi $(-3)\'=0$, $(-3x)\'=-3$ et $(x^4)\'=4x^3$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p03_q1',
            type: 'mcq',
            prompt: 'Quelles sont les dérivées respectives de $x \\mapsto -3$, $x \\mapsto -3x$ et $x \\mapsto x^4$ sur $\\mathbb{R}$ ?',
            options: ['$0$, $-3$ et $4x^3$', '$-3$, $-3$ et $4x^3$', '$0$, $0$ et $x^3$', '$0$, $-3$ et $4x^4$'],
            correctAnswerIndex: 0,
            explanation: 'Constante $\\mapsto 0$ ; fonction linéaire $-3x \\mapsto -3$ ; puissance $x^4 \\mapsto 4x^3$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Dérivée de 1/xⁿ',
          stepTitle: 'Dériver 1/x et 1/xⁿ sur ℝ*',
          paragraphText:
            'Pour tout entier $n \\ge 1$, $\\left(\\dfrac{1}{x^n}\\right)\' = -\\dfrac{n}{x^{n+1}}$ sur $\\mathbb{R}^*$. L’exposant au dénominateur augmente de $1$ et un signe « $-$ » apparaît.',
          formula: { name: 'Inverse de puissance', formula: '\\left(\\frac{1}{x^n}\\right)\' = -\\frac{n}{x^{n+1}}' },
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p03_q2',
            type: 'mcq',
            prompt: 'Quelle est la fonction dérivée de $f(x) = \\dfrac{1}{x^4}$ sur $\\mathbb{R}^*$ ?',
            options: ['$\\dfrac{1}{4x^3}$', '$-\\dfrac{4}{x^3}$', '$-\\dfrac{4}{x^5}$', '$\\dfrac{4}{x^5}$'],
            correctAnswerIndex: 2,
            explanation: 'Avec $n = 4$, $\\left(\\dfrac{1}{x^4}\\right)\' = -\\dfrac{4}{x^{4+1}} = -\\dfrac{4}{x^5}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Dérivées de sin, cos et tan',
          stepTitle: 'Retenir les signes des fonctions trigonométriques',
          paragraphText:
            'Sur $\\mathbb{R}$, $(\\sin x)\' = \\cos x$ et $(\\cos x)\' = -\\sin x$ (attention au signe moins !). Sur $\\mathbb{R}\\setminus\\{\\frac{\\pi}{2}+k\\pi\\}$, $(\\tan x)\' = 1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p03_q3',
            type: 'mcq',
            prompt: 'Quelles sont les dérivées respectives de $\\cos x$, $\\sin x$ et $\\tan x$ ?',
            options: [
              '$\\sin x$, $-\\cos x$ et $\\dfrac{1}{\\cos^2 x}$',
              '$-\\sin x$, $\\cos x$ et $\\dfrac{1}{\\cos^2 x}$',
              '$-\\sin x$, $-\\cos x$ et $\\dfrac{1}{\\sin^2 x}$',
              '$-\\sin x$, $\\cos x$ et $\\tan^2 x$',
            ],
            correctAnswerIndex: 1,
            explanation: '$(\\cos x)\' = -\\sin x$, $(\\sin x)\' = \\cos x$ et $(\\tan x)\' = 1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Ensemble de dérivabilité de √x et |x|',
          stepTitle: 'Ne pas inclure 0 dans l’ensemble de dérivabilité de √x ou |x|',
          paragraphText:
            'Même si $\\sqrt{x}$ est définie en $0$ et $|x|$ est définie sur $\\mathbb{R}$, $\\sqrt{x}$ n’est dérivable que sur **$]0; +\\infty[$**, et $|x|$ est dérivable uniquement sur $\\mathbb{R}\\setminus\\{0\\}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p03_q4',
            type: 'mcq',
            prompt: 'Quel est l’ensemble de dérivabilité et la dérivée de $x \\mapsto \\sqrt{x}$ ?',
            options: [
              'Dérivable sur $[0; +\\infty[$, dérivée $\\dfrac{1}{2\\sqrt{x}}$',
              'Dérivable sur $]0; +\\infty[$, dérivée $\\dfrac{1}{2\\sqrt{x}}$',
              'Dérivable sur $]0; +\\infty[$, dérivée $\\dfrac{1}{\\sqrt{x}}$',
              'Dérivable sur $\\mathbb{R}^*$, dérivée $-\\dfrac{1}{2\\sqrt{x}}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'En $0$, $\\sqrt{x}$ n’est pas dérivable ($\\lim = +\\infty$) et son dénominateur s’annule : elle est dérivable sur $]0; +\\infty[$ avec $(\\sqrt{x})\' = \\dfrac{1}{2\\sqrt{x}}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Polynômes et rationnelles',
          stepTitle: 'Ensemble de dérivabilité des fonctions polynômes et rationnelles',
          paragraphText:
            'Tout polynôme est dérivable sur $\\mathbb{R}$. Toute fonction rationnelle (quotient de deux polynômes) est dérivable sur tout intervalle ouvert inclus dans son ensemble de définition (donc en excluant les zéros du dénominateur).',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p03_q5',
            type: 'mcq',
            prompt: 'Quel est l’ensemble de dérivabilité de la fonction $g(x) = \\dfrac{1}{x+1}$ ?',
            options: ['$\\mathbb{R}$', '$]0; +\\infty[$', '$\\mathbb{R}\\setminus\\{-1\\}$', '$[-1; +\\infty[$'],
            correctAnswerIndex: 2,
            explanation: 'C’est une fonction rationnelle définie sur $\\mathbb{R}\\setminus\\{-1\\}$, donc dérivable sur tout intervalle ouvert inclus dans $\\mathbb{R}\\setminus\\{-1\\}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Dérivée de tan x sous deux formes',
          stepTitle: 'Savoir utiliser 1 + tan² x ou 1/cos² x',
          paragraphText:
            'Comme $\\cos^2 x + \\sin^2 x = 1$, en divisant par $\\cos^2 x$ on obtient $1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x}$. Les deux écritures de $(\\tan x)\'$ sont donc strictement équivalentes.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p03_q6',
            type: 'mcq',
            prompt: 'Sur quel ensemble la fonction $x \\mapsto \\tan x$ est-elle dérivable ?',
            options: [
              '$\\mathbb{R}$',
              '$\\mathbb{R}\\setminus\\{k\\pi,\\, k\\in\\mathbb{Z}\\}$',
              '$\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi,\\, k\\in\\mathbb{Z}\\right\\}$',
              '$]0; \\pi[$ uniquement',
            ],
            correctAnswerIndex: 2,
            explanation: '$\\tan x = \\dfrac{\\sin x}{\\cos x}$ est dérivable là où $\\cos x \\neq 0$, soit $\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi,\\, k\\in\\mathbb{Z}\\right\\}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p03_q1',
          type: 'mcq',
          prompt: 'Quelles sont les dérivées respectives de $x \\mapsto -3$, $x \\mapsto -3x$ et $x \\mapsto x^4$ sur $\\mathbb{R}$ ?',
          options: ['$0$, $-3$ et $4x^3$', '$-3$, $-3$ et $4x^3$', '$0$, $0$ et $x^3$', '$0$, $-3$ et $4x^4$'],
          correctAnswerIndex: 0,
          explanation: 'Constante $\\mapsto 0$ ; fonction linéaire $-3x \\mapsto -3$ ; puissance $x^4 \\mapsto 4x^3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p03_q2',
          type: 'mcq',
          prompt: 'Quelle est la fonction dérivée de $f(x) = \\dfrac{1}{x^4}$ sur $\\mathbb{R}^*$ ?',
          options: ['$\\dfrac{1}{4x^3}$', '$-\\dfrac{4}{x^3}$', '$-\\dfrac{4}{x^5}$', '$\\dfrac{4}{x^5}$'],
          correctAnswerIndex: 2,
          explanation: 'Avec $n = 4$, $\\left(\\dfrac{1}{x^4}\\right)\' = -\\dfrac{4}{x^{4+1}} = -\\dfrac{4}{x^5}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p03_q3',
          type: 'mcq',
          prompt: 'Quelles sont les dérivées respectives de $\\cos x$, $\\sin x$ et $\\tan x$ ?',
          options: [
            '$\\sin x$, $-\\cos x$ et $\\dfrac{1}{\\cos^2 x}$',
            '$-\\sin x$, $\\cos x$ et $\\dfrac{1}{\\cos^2 x}$',
            '$-\\sin x$, $-\\cos x$ et $\\dfrac{1}{\\sin^2 x}$',
            '$-\\sin x$, $\\cos x$ et $\\tan^2 x$',
          ],
          correctAnswerIndex: 1,
          explanation: '$(\\cos x)\' = -\\sin x$, $(\\sin x)\' = \\cos x$ et $(\\tan x)\' = 1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p03_q4',
          type: 'mcq',
          prompt: 'Quel est l’ensemble de dérivabilité et la dérivée de $x \\mapsto \\sqrt{x}$ ?',
          options: [
            'Dérivable sur $[0; +\\infty[$, dérivée $\\dfrac{1}{2\\sqrt{x}}$',
            'Dérivable sur $]0; +\\infty[$, dérivée $\\dfrac{1}{2\\sqrt{x}}$',
            'Dérivable sur $]0; +\\infty[$, dérivée $\\dfrac{1}{\\sqrt{x}}$',
            'Dérivable sur $\\mathbb{R}^*$, dérivée $-\\dfrac{1}{2\\sqrt{x}}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'En $0$, $\\sqrt{x}$ n’est pas dérivable ($\\lim = +\\infty$) et son dénominateur s’annule : elle est dérivable sur $]0; +\\infty[$ avec $(\\sqrt{x})\' = \\dfrac{1}{2\\sqrt{x}}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p03_q5',
          type: 'mcq',
          prompt: 'Quel est l’ensemble de dérivabilité de la fonction $g(x) = \\dfrac{1}{x+1}$ ?',
          options: ['$\\mathbb{R}$', '$]0; +\\infty[$', '$\\mathbb{R}\\setminus\\{-1\\}$', '$[-1; +\\infty[$'],
          correctAnswerIndex: 2,
          explanation: 'C’est une fonction rationnelle définie sur $\\mathbb{R}\\setminus\\{-1\\}$, donc dérivable sur tout intervalle ouvert inclus dans $\\mathbb{R}\\setminus\\{-1\\}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p03_q6',
          type: 'mcq',
          prompt: 'Sur quel ensemble la fonction $x \\mapsto \\tan x$ est-elle dérivable ?',
          options: [
            '$\\mathbb{R}$',
            '$\\mathbb{R}\\setminus\\{k\\pi,\\, k\\in\\mathbb{Z}\\}$',
            '$\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi,\\, k\\in\\mathbb{Z}\\right\\}$',
            '$]0; \\pi[$ uniquement',
          ],
          correctAnswerIndex: 2,
          explanation: '$\\tan x = \\dfrac{\\sin x}{\\cos x}$ est dérivable là où $\\cos x \\neq 0$, soit $\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi,\\, k\\in\\mathbb{Z}\\right\\}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Opérations sur les dérivées et dérivées de f(ax + b)
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l09_derivation_p04',
      order: 4,
      title: 'Opérations sur les dérivées et composées affines',
      summary: 'Dériver sommes, produits, inverses, quotients et fonctions de la forme u(ax + b).',
      conceptExplanation:
        "**1. Opérations** ($u$ et $v$ dérivables sur $K$) :\n- $(u + v)' = u' + v'$ et $(a u)' = a u'$ ($a \\in \\mathbb{R}$) ;\n- $(uv)' = u'v + uv'$ ;\n- $\\left(\\dfrac{1}{u}\\right)' = \\dfrac{-u'}{u^2}$ ($u \\neq 0$) ;\n- $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$ ($v \\neq 0$).\n\n**2. Dérivées de fonctions composées avec une fonction affine $ax + b$** :\n- $\\big(\\cos(ax+b)\\big)' = -a\\sin(ax+b)$ ;\n- $\\big(\\sin(ax+b)\\big)' = a\\cos(ax+b)$ ;\n- $\\big(\\sqrt{ax+b}\\big)' = \\dfrac{a}{2\\sqrt{ax+b}}$ (pour $ax+b > 0$) ;\n- $\\big((ax+b)^n\\big)' = n\\,a\\,(ax+b)^{n-1}$ et $\\big(\\tan(ax+b)\\big)' = a\\big(1 + \\tan^2(ax+b)\\big)$.",
      keyRule:
        'Pour dériver f(ax + b), on multiplie toujours par le coefficient a : (u(ax+b))’ = a·u’(ax+b). Et pour (1/v)’ = −v’/v², ne jamais oublier v’ au numérateur !',
      formulas: [
        { name: 'Produit (uv)’', formula: '(uv)\' = u\'v + uv\'' },
        { name: 'Inverse (1/u)’', formula: '\\left(\\frac{1}{u}\\right)\' = -\\frac{u\'}{u^2}' },
        { name: 'Quotient (u/v)’', formula: '\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}' },
        { name: 'Composée affine √(ax+b)', formula: '\\left(\\sqrt{ax+b}\\right)\' = \\frac{a}{2\\sqrt{ax+b}}' },
      ],
      workedExample: {
        title: 'Dériver une somme, un quotient et une composée affine',
        statement:
          'Détermine l’ensemble de dérivabilité et la dérivée de :\n1. $f(x) = x^3 + \\dfrac{1}{x} + \\cos x$\n2. $g(x) = \\dfrac{x^2}{x + 5}$\n3. $h(x) = \\sqrt{3x + 6}$',
        methodSteps: [
          '1. $f$ est dérivable sur $\\mathbb{R}^*$ : $f\'(x) = 3x^2 - \\dfrac{1}{x^2} - \\sin x$.',
          '2. $g$ est dérivable sur $\\mathbb{R}\\setminus\\{-5\\}$ : $g\'(x) = \\dfrac{2x(x+5) - x^2\\cdot 1}{(x+5)^2} = \\dfrac{x^2 + 10x}{(x+5)^2}$.',
          '3. $3x+6 > 0 \\iff x > -2$, donc $h$ est dérivable sur $]-2; +\\infty[$ et $h\'(x) = \\dfrac{3}{2\\sqrt{3x+6}}$.',
        ],
        conclusion: '$f\'(x)=3x^2-\\frac{1}{x^2}-\\sin x$, $g\'(x)=\\frac{x^2+10x}{(x+5)^2}$ et $h\'(x)=\\frac{3}{2\\sqrt{3x+6}}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Dérivée d’un quotient',
          stepTitle: 'Appliquer (u/v)’ = (u’v − uv’)/v² dans le bon ordre',
          paragraphText:
            'Dans $\\left(\\dfrac{u}{v}\\right)\' = \\dfrac{u\'v - uv\'}{v^2}$, on commence toujours par dériver le numérateur ($u\'v$), puis on soustrait $uv\'$.',
          formula: { name: 'Quotient', formula: '\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}' },
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p04_q1',
            type: 'mcq',
            prompt: 'Quelle est la fonction dérivée de $g(x) = \\dfrac{x^2}{x + 5}$ sur $\\mathbb{R}\\setminus\\{-5\\}$ ?',
            options: [
              '$\\dfrac{2x}{1}$',
              '$\\dfrac{x^2 + 10x}{(x + 5)^2}$',
              '$\\dfrac{3x^2 + 10x}{(x + 5)^2}$',
              '$\\dfrac{x^2 - 10x}{(x + 5)^2}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$g\'(x) = \\dfrac{2x(x+5) - x^2(1)}{(x+5)^2} = \\dfrac{2x^2 + 10x - x^2}{(x+5)^2} = \\dfrac{x^2 + 10x}{(x+5)^2}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier v’ dans (1/v)’',
          stepTitle: 'La dérivée de 1/v est −v’/v², jamais −1/v²',
          paragraphText:
            'Attention : l’affirmation $\\left(\\dfrac{1}{v}\\right)\' = \\dfrac{-1}{v^2}$ est FAUSSE en général ! Elle n’est vraie que si $v\'=1$ (comme pour $v(x)=x$). La formule exacte est $\\left(\\dfrac{1}{v}\\right)\' = \\dfrac{-v\'}{v^2}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p04_q2',
            type: 'mcq',
            prompt:
              'Laquelle de ces formules de dérivation (avec $v$ dérivable et non nulle sur $K$) est EXACTE ?',
            options: [
              '$\\left(\\dfrac{1}{v}\\right)\' = \\dfrac{-1}{v^2}$',
              '$\\left(\\dfrac{1}{v}\\right)\' = \\dfrac{-v\'}{v^2}$',
              '$(uv)\' = u\'v\'$',
              '$\\left(\\dfrac{u}{v}\\right)\' = \\dfrac{u\'}{v\'}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'On dérive $\\frac{1}{v}$ comme un quotient avec numérateur $1$ ($u\'=0$) : $\\dfrac{-v\'}{v^2}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Dériver (ax + b)ⁿ',
          stepTitle: 'Ne pas oublier le facteur a devant (ax + b)ⁿ⁻¹',
          paragraphText:
            'Pour dériver $(ax+b)^n$, on applique $n \\times a \\times (ax+b)^{n-1}$ en gardant exactement la même parenthèse $(ax+b)$ ! Ainsi, pour $(25x-1)^4$, on trouve $4\\times 25(25x-1)^3 = 100(25x-1)^3$, et pour $(-2x+5)^6$, $-12(-2x+5)^5$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p04_q3',
            type: 'mcq',
            prompt: 'Quelle est la dérivée sur $\\mathbb{R}$ de $f(x) = (-2x + 5)^6$ ?',
            options: [
              '$6(-2x + 5)^5$',
              '$-12(-2x + 5)^5$',
              '$-12(-2x + 4)^5$',
              '$-2(-2x + 5)^5$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Avec $n=6$ et $a=-2$, $f\'(x) = 6\\times(-2)(-2x+5)^{6-1} = -12(-2x+5)^5$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Dériver √(ax + b) et 1/√(1 − x)',
          stepTitle: 'Multiplier par a et exclure le point où ax + b = 0',
          paragraphText:
            'Pour $h(x) = \\sqrt{3x+6}$, l’intérieur doit être strictement positif ($x > -2$) et $h\'(x) = \\dfrac{3}{2\\sqrt{3x+6}}$. Pour $k(x) = \\dfrac{1}{\\sqrt{1-x}}$ sur $]-\\infty; 1[$, on applique $(1/u)\' = -u\'/u^2$ avec $u\'(x) = \\dfrac{-1}{2\\sqrt{1-x}}$, d’où $k\'(x) = \\dfrac{1}{2(1-x)\\sqrt{1-x}}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p04_q4',
            type: 'mcq',
            prompt: 'Quel est l’ensemble de dérivabilité et la dérivée de $h(x) = \\sqrt{3x + 6}$ ?',
            options: [
              'Sur $]-2; +\\infty[$, $h\'(x) = \\dfrac{3}{2\\sqrt{3x+6}}$',
              'Sur $[-2; +\\infty[$, $h\'(x) = \\dfrac{1}{2\\sqrt{3x+6}}$',
              'Sur $]-2; +\\infty[$, $h\'(x) = \\dfrac{1}{2\\sqrt{3x+6}}$',
              'Sur $\\mathbb{R}\\setminus\\{-2\\}$, $h\'(x) = \\dfrac{3}{\\sqrt{3x+6}}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Il faut $3x+6 > 0 \\iff x > -2$, et avec $a=3$, $(\\sqrt{3x+6})\' = \\dfrac{3}{2\\sqrt{3x+6}}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Dériver tan(2x + π)',
          stepTitle: 'Ne pas oublier le facteur 2 dans (tan(2x + π))’',
          paragraphText:
            'Attention ! La dérivée de $\\tan(ax+b)$ est $a\\big(1+\\tan^2(ax+b)\\big)$ ! Pour $f(x) = \\tan(2x+\\pi)$, $a = 2$, donc $f\'(x) = 2\\big(1 + \\tan^2(2x+\\pi)\\big) = \\dfrac{2}{\\cos^2(2x+\\pi)}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p04_q5',
            type: 'mcq',
            prompt: 'Quelle est la dérivée exacte de $f(x) = \\tan(2x + \\pi)$ sur son ensemble de dérivabilité ?',
            options: [
              '$1 + \\tan^2(2x + \\pi)$',
              '$2\\big(1 + \\tan^2(2x + \\pi)\\big)$',
              '$\\dfrac{1}{\\cos^2(2x + \\pi)}$',
              '$2\\tan(2x + \\pi)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'La composée par $2x+\\pi$ sort un facteur $a=2$ : $f\'(x) = 2\\big(1 + \\tan^2(2x+\\pi)\\big)$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Factoriser le numérateur de (x³/(x+1))’',
          stepTitle: 'Simplifier et factoriser f’(x) pour étudier son signe',
          paragraphText:
            'Pour $f(x) = \\dfrac{x^3}{x+1}$ sur $\\mathbb{R}\\setminus\\{-1\\}$, on calcule $f\'(x) = \\dfrac{3x^2(x+1) - x^3}{(x+1)^2} = \\dfrac{2x^3 + 3x^2}{(x+1)^2} = \\dfrac{x^2(2x+3)}{(x+1)^2}$, forme idéale pour le tableau de signes.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p04_q6',
            type: 'mcq',
            prompt: 'Quelle est l’expression factorisée de $f\'(x)$ pour $f(x) = \\dfrac{x^3}{x + 1}$ ($x \\neq -1$) ?',
            options: [
              '$\\dfrac{3x^2}{1}$',
              '$\\dfrac{x^2(2x + 3)}{(x + 1)^2}$',
              '$\\dfrac{4x^3 + 3x^2}{(x + 1)^2}$',
              '$\\dfrac{x^2(2x - 3)}{(x + 1)^2}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\dfrac{3x^2(x+1)-x^3}{(x+1)^2} = \\dfrac{2x^3+3x^2}{(x+1)^2} = \\dfrac{x^2(2x+3)}{(x+1)^2}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p04_q1',
          type: 'mcq',
          prompt: 'Quelle est la fonction dérivée de $g(x) = \\dfrac{x^2}{x + 5}$ sur $\\mathbb{R}\\setminus\\{-5\\}$ ?',
          options: [
            '$\\dfrac{2x}{1}$',
            '$\\dfrac{x^2 + 10x}{(x + 5)^2}$',
            '$\\dfrac{3x^2 + 10x}{(x + 5)^2}$',
            '$\\dfrac{x^2 - 10x}{(x + 5)^2}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$g\'(x) = \\dfrac{2x(x+5) - x^2(1)}{(x+5)^2} = \\dfrac{2x^2 + 10x - x^2}{(x+5)^2} = \\dfrac{x^2 + 10x}{(x+5)^2}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p04_q2',
          type: 'mcq',
          prompt:
            'Laquelle de ces formules de dérivation (avec $v$ dérivable et non nulle sur $K$) est EXACTE ?',
          options: [
            '$\\left(\\dfrac{1}{v}\\right)\' = \\dfrac{-1}{v^2}$',
            '$\\left(\\dfrac{1}{v}\\right)\' = \\dfrac{-v\'}{v^2}$',
            '$(uv)\' = u\'v\'$',
            '$\\left(\\dfrac{u}{v}\\right)\' = \\dfrac{u\'}{v\'}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'On dérive $\\frac{1}{v}$ comme un quotient avec numérateur $1$ ($u\'=0$) : $\\dfrac{-v\'}{v^2}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p04_q3',
          type: 'mcq',
          prompt: 'Quelle est la dérivée sur $\\mathbb{R}$ de $f(x) = (-2x + 5)^6$ ?',
          options: [
            '$6(-2x + 5)^5$',
            '$-12(-2x + 5)^5$',
            '$-12(-2x + 4)^5$',
            '$-2(-2x + 5)^5$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Avec $n=6$ et $a=-2$, $f\'(x) = 6\\times(-2)(-2x+5)^{6-1} = -12(-2x+5)^5$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p04_q4',
          type: 'mcq',
          prompt: 'Quel est l’ensemble de dérivabilité et la dérivée de $h(x) = \\sqrt{3x + 6}$ ?',
          options: [
            'Sur $]-2; +\\infty[$, $h\'(x) = \\dfrac{3}{2\\sqrt{3x+6}}$',
            'Sur $[-2; +\\infty[$, $h\'(x) = \\dfrac{1}{2\\sqrt{3x+6}}$',
            'Sur $]-2; +\\infty[$, $h\'(x) = \\dfrac{1}{2\\sqrt{3x+6}}$',
            'Sur $\\mathbb{R}\\setminus\\{-2\\}$, $h\'(x) = \\dfrac{3}{\\sqrt{3x+6}}$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Il faut $3x+6 > 0 \\iff x > -2$, et avec $a=3$, $(\\sqrt{3x+6})\' = \\dfrac{3}{2\\sqrt{3x+6}}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p04_q5',
          type: 'mcq',
          prompt: 'Quelle est la dérivée exacte de $f(x) = \\tan(2x + \\pi)$ sur son ensemble de dérivabilité ?',
          options: [
            '$1 + \\tan^2(2x + \\pi)$',
            '$2\\big(1 + \\tan^2(2x + \\pi)\\big)$',
            '$\\dfrac{1}{\\cos^2(2x + \\pi)}$',
            '$2\\tan(2x + \\pi)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'La composée par $2x+\\pi$ sort un facteur $a=2$ : $f\'(x) = 2\\big(1 + \\tan^2(2x+\\pi)\\big)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p04_q6',
          type: 'mcq',
          prompt: 'Quelle est l’expression factorisée de $f\'(x)$ pour $f(x) = \\dfrac{x^3}{x + 1}$ ($x \\neq -1$) ?',
          options: [
            '$\\dfrac{3x^2}{1}$',
            '$\\dfrac{x^2(2x + 3)}{(x + 1)^2}$',
            '$\\dfrac{4x^3 + 3x^2}{(x + 1)^2}$',
            '$\\dfrac{x^2(2x - 3)}{(x + 1)^2}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\dfrac{3x^2(x+1)-x^3}{(x+1)^2} = \\dfrac{2x^3+3x^2}{(x+1)^2} = \\dfrac{x^2(2x+3)}{(x+1)^2}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Dérivée et sens de variation d'une fonction
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l09_derivation_p05',
      order: 5,
      title: 'Dérivée et sens de variation sur un intervalle',
      summary: 'Relier le signe de f’ aux variations de f, et utiliser les conditions f(x₀) et f’(x₀) pour trouver des paramètres.',
      conceptExplanation:
        "Soit $f$ une fonction dérivable sur un intervalle ouvert $K$ :\n- $f$ est **croissante** sur $K$ $\\iff$ $f'(x) \\ge 0$ pour tout $x \\in K$ ;\n- $f$ est **décroissante** sur $K$ $\\iff$ $f'(x) \\le 0$ pour tout $x \\in K$ ;\n- $f$ est **constante** sur $K$ $\\iff$ $f'(x) = 0$ pour tout $x \\in K$.\n\n**Monotonie stricte** : si $f' > 0$ sur $K$ (ou si $f' \\ge 0$ et ne s'annule qu'en un nombre fini de points de $K$), alors $f$ est **strictement croissante** sur $K$ (respectivement strictement décroissante si $f' < 0$, ou $f' \\le 0$ avec zéros isolés).",
      keyRule:
        'C’est le signe de f’(x) (et JAMAIS celui de f(x) !) qui donne le sens de variation de f : f’ ≥ 0 ⇒ f croissante ; f’ ≤ 0 ⇒ f décroissante.',
      formulas: [
        { name: 'Croissance', formula: 'f\' \\ge 0 \\text{ sur } K \\iff f \\text{ croissante sur } K' },
        { name: 'Décroissance', formula: 'f\' \\le 0 \\text{ sur } K \\iff f \\text{ décroissante sur } K' },
      ],
      workedExample: {
        title: 'Étudier les variations de f(x) = x³ − 3x et déterminer a, b pour g(x)',
        statement:
          '1. Étudie les variations de $f(x) = x^3 - 3x$ sur $\\mathbb{R}$.\n2. Soit $g(x) = ax + b + \\dfrac{1}{3-x}$ sur $\\mathbb{R}\\setminus\\{3\\}$. Trouve $a$ et $b$ sachant que $(C_g)$ passe par $A(2;2)$ et $g\'(2) = 0$.',
        methodSteps: [
          '1. $f\'(x) = 3x^2 - 3 = 3(x+1)(x-1)$, qui s’annule en $-1$ et $1$. Par règle du signe du trinôme ($a=3>0$) : $f\'(x) > 0$ sur $]-\\infty;-1[$ et $]1;+\\infty[$, $f\'(x) < 0$ sur $]-1;1[$.',
          'Donc $f$ est strictement croissante sur $]-\\infty;-1]$ et $[1;+\\infty[$, et strictement décroissante sur $[-1;1]$.',
          '2. $g\'(x) = a + \\dfrac{1}{(3-x)^2}$, donc $g\'(2) = a + 1 = 0 \\implies a = -1$. Et $g(2) = 2(-1)+b+1 = b-1 = 2 \\implies b = 3$.',
        ],
        conclusion: '$f$ croît jusqu’en $-1$, décroît sur $[-1;1]$, puis croît ; $a=-1$ et $b=3$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Signe de f’ et variations',
          stepTitle: 'Associer le signe de f’ au sens de variation de f',
          paragraphText:
            'Sur un intervalle ouvert $K$, $f$ est croissante si et seulement si $f\' \\ge 0$ sur $K$, décroissante si et seulement si $f\' \\le 0$ sur $K$, et constante si et seulement si $f\' = 0$ sur $K$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p05_q1',
            type: 'mcq',
            prompt: 'Soit $f$ dérivable sur $K = ]-1; 1[$. Sachant que $\\forall x \\in ]-1; 1[,\\, f\'(x) < 0$, que conclut-on pour $f$ sur $K$ ?',
            options: [
              '$f$ est strictement positive sur $]-1; 1[$',
              '$f$ est strictement décroissante sur $]-1; 1[$',
              '$f$ est négative sur $]-1; 1[$',
              '$f$ est strictement croissante sur $]-1; 1[$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le signe strictement négatif de la dérivée $f\'$ assure que $f$ est strictement décroissante sur l’intervalle.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre signe de f et signe de f’',
          stepTitle: 'Une fonction positive n’est PAS forcément croissante !',
          paragraphText:
            'Attention ! L’affirmation « si $f$ est positive sur $K$, alors $f$ est croissante sur $K$ » est FAUSSE ! Par exemple $f(x) = -x + 10$ est positive sur $[0; 5]$ mais décroissante car $f\'(x) = -1 < 0$. C’est $f\' \\ge 0$ qui donne la croissance.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p05_q2',
            type: 'mcq',
            prompt: 'L’affirmation « Si $f$ est positive sur un intervalle $K$, alors $f$ est croissante sur $K$ » est-elle vraie ou fausse ?',
            options: [
              'Vraie, car $f(x) > 0$ fait augmenter la courbe',
              'Vraie uniquement pour les polynômes',
              'Fausse, c’est le signe de $f\'$ (et non celui de $f$) qui indique le sens de variation',
              'Fausse uniquement si $K$ contient $0$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Par exemple $f(x) = 1/x$ sur $]0;+\\infty[$ est strictement positive ($>0$), et pourtant strictement décroissante ($f\'(x) = -1/x^2 < 0$).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Zéros isolés de f’',
          stepTitle: 'Quand f’ s’annule en des points isolés',
          paragraphText:
            'Si $f\'$ est positive sur $K$ et ne s’annule qu’en un nombre fini de points de $K$ (comme $f\'(x)=3x^2$ qui s’annule uniquement en $0$), alors $f$ est quand même **strictement** croissante sur tout $K$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p05_q3',
            type: 'mcq',
            prompt: 'La fonction $f(x) = x^3$ a pour dérivée $f\'(x) = 3x^2$, qui est positive sur $\\mathbb{R}$ et s’annule en $0$. Que peut-on dire des variations de $f$ sur $\\mathbb{R}$ ?',
            options: [
              '$f$ est décroissante sur $]-\\infty; 0]$ puis croissante sur $[0; +\\infty[$',
              '$f$ est constante autour de $0$',
              '$f$ est strictement croissante sur $\\mathbb{R}$ tout entier',
              '$f$ n’est pas monotone sur $\\mathbb{R}$',
            ],
            correctAnswerIndex: 2,
            explanation: '$f\'(x) = 3x^2 \\ge 0$ et ne s’annule qu’en un unique point ($0$), donc $f(x) = x^3$ est strictement croissante sur $\\mathbb{R}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Variations de g(x) = −x + 3 + 1/(3−x)',
          stepTitle: 'Étudier un signe de dérivée avec valeur interdite',
          paragraphText:
            'Pour $g(x) = -x + 3 + \\dfrac{1}{3-x}$ sur $\\mathbb{R}\\setminus\\{3\\}$, on trouve $g\'(x) = \\dfrac{(4-x)(x-2)}{(3-x)^2}$. Comme $(3-x)^2 > 0$, le signe de $g\'(x)$ est celui du trinôme $-x^2 + 6x - 8$ : positif sur $]2;3[$ et $]3;4[$, négatif sur $]-\\infty;2[$ et $]4;+\\infty[$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p05_q4',
            type: 'mcq',
            prompt:
              'Sachant que $g\'(x) = \\dfrac{(4-x)(x-2)}{(3-x)^2}$ sur $\\mathbb{R}\\setminus\\{3\\}$, sur quels intervalles $g$ est-elle strictement croissante ?',
            options: [
              '$]-\\infty; 2[$ et $]4; +\\infty[$',
              '$]2; 3[$ et $]3; 4[$',
              '$]2; 4[$ d’un seul tenant, en incluant $3$',
              '$]-\\infty; 3[$ et $]3; +\\infty[$',
            ],
            correctAnswerIndex: 1,
            explanation: '$(4-x)(x-2) > 0$ pour $x \\in ]2; 4[$, mais $3$ est valeur interdite : il faut donc écrire séparément $]2; 3[$ et $]3; 4[$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Trouver des paramètres a et b',
          stepTitle: 'Traduire point de passage et dérivée nulle',
          paragraphText:
            'Dire que $(C_g)$ passe par $A(2; 2)$ donne $g(2) = 2$. Dire que la tangente en $x=2$ est horizontale (ou $g\'(2)=0$) fournit une seconde équation pour résoudre le système en $(a; b)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p05_q5',
            type: 'mcq',
            prompt:
              'Soit $g(x) = ax + b + \\dfrac{1}{3-x}$ ($x \\neq 3$). Sachant que $g(2) = 2$ et $g\'(2) = 0$, que valent $a$ et $b$ ?',
            options: ['$a = 1$ et $b = -1$', '$a = -1$ et $b = 3$', '$a = -1$ et $b = 1$', '$a = 3$ et $b = -1$'],
            correctAnswerIndex: 1,
            explanation: '$g\'(x) = a + \\dfrac{1}{(3-x)^2} \\implies g\'(2) = a + 1 = 0 \\implies a = -1$. Puis $g(2) = -2 + b + 1 = 2 \\implies b = 3$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Variations de f(x) = x³ − 3x',
          stepTitle: 'Factoriser f’(x) = 3(x² − 1)',
          paragraphText:
            'Pour $f(x) = x^3 - 3x$, $f\'(x) = 3x^2 - 3 = 3(x+1)(x-1)$, donc $f$ est strictement croissante sur $]-\\infty; -1]$ et $[1; +\\infty[$, et strictement décroissante sur $[-1; 1]$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p05_q6',
            type: 'mcq',
            prompt: 'Sur quel intervalle la fonction $f(x) = x^3 - 3x$ est-elle strictement décroissante ?',
            options: ['$]-\\infty; -1[$', '$]-1; 1[$', '$]1; +\\infty[$', '$\\mathbb{R}$ tout entier'],
            correctAnswerIndex: 1,
            explanation: '$f\'(x) = 3(x+1)(x-1) < 0$ entre les racines $-1$ et $1$, donc sur $]-1; 1[$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p05_q1',
          type: 'mcq',
          prompt: 'Soit $f$ dérivable sur $K = ]-1; 1[$. Sachant que $\\forall x \\in ]-1; 1[,\\, f\'(x) < 0$, que conclut-on pour $f$ sur $K$ ?',
          options: [
            '$f$ est strictement positive sur $]-1; 1[$',
            '$f$ est strictement décroissante sur $]-1; 1[$',
            '$f$ est négative sur $]-1; 1[$',
            '$f$ est strictement croissante sur $]-1; 1[$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le signe strictement négatif de la dérivée $f\'$ assure que $f$ est strictement décroissante sur l’intervalle.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p05_q2',
          type: 'mcq',
          prompt: 'L’affirmation « Si $f$ est positive sur un intervalle $K$, alors $f$ est croissante sur $K$ » est-elle vraie ou fausse ?',
          options: [
            'Vraie, car $f(x) > 0$ fait augmenter la courbe',
            'Vraie uniquement pour les polynômes',
            'Fausse, c’est le signe de $f\'$ (et non celui de $f$) qui indique le sens de variation',
            'Fausse uniquement si $K$ contient $0$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Par exemple $f(x) = 1/x$ sur $]0;+\\infty[$ est strictement positive ($>0$), et pourtant strictement décroissante ($f\'(x) = -1/x^2 < 0$).',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p05_q3',
          type: 'mcq',
          prompt: 'La fonction $f(x) = x^3$ a pour dérivée $f\'(x) = 3x^2$, qui est positive sur $\\mathbb{R}$ et s’annule en $0$. Que peut-on dire des variations de $f$ sur $\\mathbb{R}$ ?',
          options: [
            '$f$ est décroissante sur $]-\\infty; 0]$ puis croissante sur $[0; +\\infty[$',
            '$f$ est constante autour de $0$',
            '$f$ est strictement croissante sur $\\mathbb{R}$ tout entier',
            '$f$ n’est pas monotone sur $\\mathbb{R}$',
          ],
          correctAnswerIndex: 2,
          explanation: '$f\'(x) = 3x^2 \\ge 0$ et ne s’annule qu’en un unique point ($0$), donc $f(x) = x^3$ est strictement croissante sur $\\mathbb{R}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p05_q4',
          type: 'mcq',
          prompt:
            'Sachant que $g\'(x) = \\dfrac{(4-x)(x-2)}{(3-x)^2}$ sur $\\mathbb{R}\\setminus\\{3\\}$, sur quels intervalles $g$ est-elle strictement croissante ?',
          options: [
            '$]-\\infty; 2[$ et $]4; +\\infty[$',
            '$]2; 3[$ et $]3; 4[$',
            '$]2; 4[$ d’un seul tenant, en incluant $3$',
            '$]-\\infty; 3[$ et $]3; +\\infty[$',
          ],
          correctAnswerIndex: 1,
          explanation: '$(4-x)(x-2) > 0$ pour $x \\in ]2; 4[$, mais $3$ est valeur interdite : il faut donc écrire séparément $]2; 3[$ et $]3; 4[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p05_q5',
          type: 'mcq',
          prompt:
            'Soit $g(x) = ax + b + \\dfrac{1}{3-x}$ ($x \\neq 3$). Sachant que $g(2) = 2$ et $g\'(2) = 0$, que valent $a$ et $b$ ?',
          options: ['$a = 1$ et $b = -1$', '$a = -1$ et $b = 3$', '$a = -1$ et $b = 1$', '$a = 3$ et $b = -1$'],
          correctAnswerIndex: 1,
          explanation: '$g\'(x) = a + \\dfrac{1}{(3-x)^2} \\implies g\'(2) = a + 1 = 0 \\implies a = -1$. Puis $g(2) = -2 + b + 1 = 2 \\implies b = 3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p05_q6',
          type: 'mcq',
          prompt: 'Sur quel intervalle la fonction $f(x) = x^3 - 3x$ est-elle strictement décroissante ?',
          options: ['$]-\\infty; -1[$', '$]-1; 1[$', '$]1; +\\infty[$', '$\\mathbb{R}$ tout entier'],
          correctAnswerIndex: 1,
          explanation: '$f\'(x) = 3(x+1)(x-1) < 0$ entre les racines $-1$ et $1$, donc sur $]-1; 1[$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Extremums relatifs et tableau de variation
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l09_derivation_p06',
      order: 6,
      title: 'Extremums relatifs et tableau de variation',
      summary: 'Identifier un maximum ou un minimum relatif grâce au changement de signe de f’(x) en x₀.',
      conceptExplanation:
        "Soit $f$ une fonction dérivable sur un intervalle ouvert $K$ contenant $x_0$.\n\n- **Critère de l'extremum relatif** : si **$f'$ s'annule ET change de signe en $x_0$**, alors $f(x_0)$ est un **extremum relatif** de $f$ :\n  - Si $f'$ passe du signe **$+$** au signe **$-$** (la fonction croît puis décroît), alors $f(x_0)$ est un **maximum relatif**.\n  - Si $f'$ passe du signe **$-$** au signe **$+$** (la fonction décroît puis croît), alors $f(x_0)$ est un **minimum relatif**.\n- **Attention** : si $f'(x_0) = 0$ **sans changement de signe** (par exemple $-$ puis $-$), $f(x_0)$ n'est pas un extremum relatif.",
      keyRule:
        'f’(x₀) = 0 ne suffit PAS pour avoir un extremum : il faut que f’ CHANGE DE SIGNE en x₀ (+ puis − = maximum ; − puis + = minimum).',
      formulas: [
        { name: 'Maximum relatif', formula: 'f\' : + \\to 0 \\to - \\quad \\text{en } x_0 \\implies f(x_0) \\text{ max relatif}' },
        { name: 'Minimum relatif', formula: 'f\' : - \\to 0 \\to + \\quad \\text{en } x_0 \\implies f(x_0) \\text{ min relatif}' },
      ],
      visualSchema: {
        type: 'variation_table',
        title: 'Tableau de variation de h(x) = (1/3)x³ − x² − 3x + 2',
        caption: 'h’ s’annule en −1 (+ → − : maximum relatif 11/3) et en 3 (− → + : minimum relatif −7).',
        variation: {
          xValues: ['−∞', '−1', '3', '+∞'],
          values: [
            { text: '−∞', level: 'bottom' },
            { text: '11/3', level: 'top' },
            { text: '−7', level: 'bottom' },
            { text: '+∞', level: 'top' },
          ],
        },
      },
      workedExample: {
        title: 'Extrema de h(x) = (1/3)x³ − x² − 3x + 2 et de g(x) = x³/(x − 1)',
        statement:
          '1. Détermine les extrema relatifs de $h(x) = \\dfrac{1}{3}x^3 - x^2 - 3x + 2$ sur $\\mathbb{R}$.\n2. Pour $g(x) = \\dfrac{x^3}{x-1}$, sachant que $g\'(x)$ s’annule en $0$ (signe $-$ à gauche et $-$ à droite) et en $\\dfrac{3}{2}$ (signe $-$ puis $+$), quels sont ses extremums ?',
        methodSteps: [
          '1. $h\'(x) = x^2 - 2x - 3 = (x+1)(x-3)$ : en $-1$, $h\'$ passe de $+$ à $-$, donc $h(-1) = -\\frac{1}{3} - 1 + 3 + 2 = \\dfrac{11}{3}$ est un maximum relatif.',
          'En $3$, $h\'$ passe de $-$ à $+$, donc $h(3) = 9 - 9 - 9 + 2 = -7$ est un minimum relatif.',
          '2. Pour $g$, en $0$ la dérivée $g\'$ ne change pas de signe ($-$ puis $-$) donc pas d’extremum en $0$. En $\\dfrac{3}{2}$, $g\'$ passe de $-$ à $+$, donc $g\\left(\\frac{3}{2}\\right) = \\dfrac{27/8}{1/2} = \\dfrac{27}{4}$ est un minimum relatif.',
        ],
        conclusion: 'Pour $h$ : max relatif $\\dfrac{11}{3}$ en $-1$, min relatif $-7$ en $3$. Pour $g$ : min relatif $\\dfrac{27}{4}$ en $\\dfrac{3}{2}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Critère d’extremum relatif',
          stepTitle: 'Les deux conditions pour un extremum relatif',
          paragraphText:
            'Si $f$ est dérivable autour de $x_0$, $f(x_0)$ est un extremum relatif si et seulement si $f\'$ s’annule en $x_0$ ET change de signe de part et d’autre de $x_0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p06_q1',
            type: 'mcq',
            prompt:
              'Quand dit-on qu’une fonction dérivable $f$ admet un maximum relatif en $x_0$ ?',
            options: [
              'Quand $f\'(x_0) > 0$',
              'Quand $f\'(x_0) = 0$ sans changer de signe',
              'Quand $f\'$ s’annule en $x_0$ en passant du signe $+$ (avant $x_0$) au signe $-$ (après $x_0$)',
              'Quand $f\'$ s’annule en $x_0$ en passant du signe $-$ au signe $+$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Croissante ($f\' > 0$) avant $x_0$ puis décroissante ($f\' < 0$) après $x_0$ caractérise un sommet (maximum relatif).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'f’(x₀) = 0 sans changement de signe',
          stepTitle: 'S’annuler sans changer de signe ne donne PAS d’extremum !',
          paragraphText:
            'Pour $g(x) = \\dfrac{x^3}{x-1}$, $g\'(0) = 0$, mais $g\'(x) < 0$ pour $x < 0$ et $g\'(x) < 0$ pour $0 < x < 1$. Puisque $g$ reste décroissante de part et d’autre de $0$, $g(0)=0$ n’est NI un maximum NI un minimum.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p06_q2',
            type: 'mcq',
            prompt:
              'Pour $g(x) = \\dfrac{x^3}{x - 1}$, $g\'$ s’annule en $0$ tout en restant négative à gauche et à droite de $0$, et s’annule en $\\dfrac{3}{2}$ en passant de $-$ à $+$. Quel est le seul extremum relatif de $g$ ?',
            options: [
              'Un maximum relatif en $0$ égal à $0$',
              'Un minimum relatif en $\\dfrac{3}{2}$ égal à $\\dfrac{27}{4}$',
              'Un maximum relatif en $\\dfrac{3}{2}$ égal à $\\dfrac{27}{4}$',
              'Deux extremums : en $0$ et en $\\dfrac{3}{2}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'En $0$, $g\'$ ne change pas de signe (pas d’extremum). En $3/2$, $g\'$ passe de $-$ à $+$ : minimum relatif $g(3/2) = 27/4$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Extrema de h(x) = (1/3)x³ − x² − 3x + 2',
          stepTitle: 'Lire les extremums dans le tableau de variation',
          paragraphText:
            'Dans le tableau ci-dessus, $h\'$ change de signe en $-1$ ($+$ puis $-$) et en $3$ ($-$ puis $+$). On calcule $h(-1) = \\dfrac{11}{3}$ (maximum relatif) et $h(3) = -7$ (minimum relatif).',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p06_q3',
            type: 'mcq',
            prompt: 'Quels sont les extremums relatifs de $h(x) = \\dfrac{1}{3}x^3 - x^2 - 3x + 2$ ?',
            options: [
              'Maximum relatif $-1$ et minimum relatif $3$',
              'Maximum relatif $\\dfrac{11}{3}$ (en $-1$) et minimum relatif $-7$ (en $3$)',
              'Minimum relatif $\\dfrac{11}{3}$ (en $-1$) et maximum relatif $-7$ (en $3$)',
              'Aucun extremum relatif',
            ],
            correctAnswerIndex: 1,
            explanation: '$h\'(x) = (x+1)(x-3)$ passe de $+$ à $-$ en $-1$ ($h(-1)=11/3$ max) et de $-$ à $+$ en $3$ ($h(3)=-7$ min).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calcul de la valeur d’un extremum',
          stepTitle: 'Distinguer l’abscisse x₀ et la valeur f(x₀) de l’extremum',
          paragraphText:
            'Attention aux énoncés : « en quelle valeur de $x$ » demande $x_0$, tandis que « quel est le maximum / minimum de $f$ » demande la valeur de la fonction $f(x_0)$ (prise dans $f$, jamais dans $f\'$ !).',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p06_q4',
            type: 'mcq',
            prompt: 'La fonction $f(x) = x^3 - 3x$ admet un minimum relatif en $x = 1$. Combien vaut ce minimum relatif ?',
            options: ['$1$', '$0$', '$-2$', '$2$'],
            correctAnswerIndex: 2,
            explanation: 'Le minimum relatif est la valeur $f(1) = 1^3 - 3(1) = -2$ (en $x = 1$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Minimum et maximum d’un polynôme cubique',
          stepTitle: 'Trouver le maximum relatif de f(x) = x³ − 3x',
          paragraphText:
            'En $x = -1$, $f\'(x) = 3(x+1)(x-1)$ passe du signe $+$ au signe $-$. Le maximum relatif vaut $f(-1) = (-1)^3 - 3(-1) = -1 + 3 = 2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p06_q5',
            type: 'mcq',
            prompt: 'Que vaut le maximum relatif de $f(x) = x^3 - 3x$, et en quel point est-il atteint ?',
            options: [
              'Maximum relatif égal à $2$, atteint en $x = -1$',
              'Maximum relatif égal à $-1$, atteint en $x = 2$',
              'Maximum relatif égal à $4$, atteint en $x = 1$',
              'Maximum relatif égal à $0$, atteint en $x = 0$',
            ],
            correctAnswerIndex: 0,
            explanation: '$f\'$ passe de $+$ à $-$ en $x = -1$, et $f(-1) = (-1)^3 - 3(-1) = 2$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Extrema de g(x) = −x + 3 + 1/(3−x)',
          stepTitle: 'Repérer minimum et maximum de g autour de x = 3',
          paragraphText:
            'Puisque $g\'(x) = \\dfrac{(4-x)(x-2)}{(3-x)^2}$ est $<0$ avant $2$, $>0$ sur $]2;3[$ et $]3;4[$, et $<0$ après $4$, $g$ admet un minimum relatif en $2$ ($g(2)=2$) et un maximum relatif en $4$ ($g(4) = -4 + 3 - 1 = -2$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p06_q6',
            type: 'mcq',
            prompt:
              'Pour $g(x) = -x + 3 + \\dfrac{1}{3-x}$ ($g\'(x) = \\dfrac{(4-x)(x-2)}{(3-x)^2}$), quelle est la nature et la valeur de l’extremum en $x = 4$ ?',
            options: [
              'Un minimum relatif égal à $-2$',
              'Un maximum relatif égal à $-2$',
              'Un maximum relatif égal à $2$',
              'Pas d’extremum en $4$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Autour de $4$, $g\'$ passe de $+$ (sur $]3;4[$) à $-$ (sur $]4;+\\infty[$) : $g(4) = -4 + 3 + \\frac{1}{-1} = -2$ est un maximum relatif.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p06_q1',
          type: 'mcq',
          prompt:
            'Quand dit-on qu’une fonction dérivable $f$ admet un maximum relatif en $x_0$ ?',
          options: [
            'Quand $f\'(x_0) > 0$',
            'Quand $f\'(x_0) = 0$ sans changer de signe',
            'Quand $f\'$ s’annule en $x_0$ en passant du signe $+$ (avant $x_0$) au signe $-$ (après $x_0$)',
            'Quand $f\'$ s’annule en $x_0$ en passant du signe $-$ au signe $+$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Croissante ($f\' > 0$) avant $x_0$ puis décroissante ($f\' < 0$) après $x_0$ caractérise un sommet (maximum relatif).',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p06_q2',
          type: 'mcq',
          prompt:
            'Pour $g(x) = \\dfrac{x^3}{x - 1}$, $g\'$ s’annule en $0$ tout en restant négative à gauche et à droite de $0$, et s’annule en $\\dfrac{3}{2}$ en passant de $-$ à $+$. Quel est le seul extremum relatif de $g$ ?',
          options: [
            'Un maximum relatif en $0$ égal à $0$',
            'Un minimum relatif en $\\dfrac{3}{2}$ égal à $\\dfrac{27}{4}$',
            'Un maximum relatif en $\\dfrac{3}{2}$ égal à $\\dfrac{27}{4}$',
            'Deux extremums : en $0$ et en $\\dfrac{3}{2}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'En $0$, $g\'$ ne change pas de signe (pas d’extremum). En $3/2$, $g\'$ passe de $-$ à $+$ : minimum relatif $g(3/2) = 27/4$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p06_q3',
          type: 'mcq',
          prompt: 'Quels sont les extremums relatifs de $h(x) = \\dfrac{1}{3}x^3 - x^2 - 3x + 2$ ?',
          options: [
            'Maximum relatif $-1$ et minimum relatif $3$',
            'Maximum relatif $\\dfrac{11}{3}$ (en $-1$) et minimum relatif $-7$ (en $3$)',
            'Minimum relatif $\\dfrac{11}{3}$ (en $-1$) et maximum relatif $-7$ (en $3$)',
            'Aucun extremum relatif',
          ],
          correctAnswerIndex: 1,
          explanation: '$h\'(x) = (x+1)(x-3)$ passe de $+$ à $-$ en $-1$ ($h(-1)=11/3$ max) et de $-$ à $+$ en $3$ ($h(3)=-7$ min).',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p06_q4',
          type: 'mcq',
          prompt: 'La fonction $f(x) = x^3 - 3x$ admet un minimum relatif en $x = 1$. Combien vaut ce minimum relatif ?',
          options: ['$1$', '$0$', '$-2$', '$2$'],
          correctAnswerIndex: 2,
          explanation: 'Le minimum relatif est la valeur $f(1) = 1^3 - 3(1) = -2$ (en $x = 1$).',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p06_q5',
          type: 'mcq',
          prompt: 'Que vaut le maximum relatif de $f(x) = x^3 - 3x$, et en quel point est-il atteint ?',
          options: [
            'Maximum relatif égal à $2$, atteint en $x = -1$',
            'Maximum relatif égal à $-1$, atteint en $x = 2$',
            'Maximum relatif égal à $4$, atteint en $x = 1$',
            'Maximum relatif égal à $0$, atteint en $x = 0$',
          ],
          correctAnswerIndex: 0,
          explanation: '$f\'$ passe de $+$ à $-$ en $x = -1$, et $f(-1) = (-1)^3 - 3(-1) = 2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p06_q6',
          type: 'mcq',
          prompt:
            'Pour $g(x) = -x + 3 + \\dfrac{1}{3-x}$ ($g\'(x) = \\dfrac{(4-x)(x-2)}{(3-x)^2}$), quelle est la nature et la valeur de l’extremum en $x = 4$ ?',
          options: [
            'Un minimum relatif égal à $-2$',
            'Un maximum relatif égal à $-2$',
            'Un maximum relatif égal à $2$',
            'Pas d’extremum en $4$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Autour de $4$, $g\'$ passe de $+$ (sur $]3;4[$) à $-$ (sur $]4;+\\infty[$) : $g(4) = -4 + 3 + \\frac{1}{-1} = -2$ est un maximum relatif.',
        },
      ],
    },

    // ========================================================================
    // POINT 7 : Problèmes d'optimisation par la dérivation
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l09_derivation_p07',
      order: 7,
      title: 'Problèmes d’optimisation par la dérivation',
      summary: 'Modéliser une aire ou un coût par une fonction f(x) et trouver son minimum ou maximum grâce au signe de f’(x).',
      conceptExplanation:
        "La dérivation est l'outil privilégié pour résoudre les **problèmes d'optimisation** (aire maximale, surface minimale de matériau, coût minimal).\n\n**Méthode en 4 étapes** :\n1. **Modéliser** : choisir la variable $x$ avec son intervalle d'étude (ex. $x \\in ]0; 10[$ ou $]0; +\\infty[$) et exprimer la grandeur à optimiser sous forme d'une fonction $f(x)$ (Thalès, Pythagore, volume...).\n2. **Dériver** : calculer $f'(x)$ et l'écrire sous forme factorisée.\n3. **Étudier le signe de $f'(x)$** et dresser le tableau de variation de $f$ sur l'intervalle.\n4. **Conclure** concrètement en donnant la valeur de $x$ et l'extremum trouvé avec son unité.",
      keyRule:
        'Modéliser → Dériver f’(x) → Signe de f’(x) et tableau de variation → Calculer la valeur optimale f(x₀) dans l’expression de f (avec les bonnes unités).',
      formulas: [
        { name: 'Rectangle dans triangle (Ex 9)', formula: 'f(x) = \\frac{12}{5}x\\left(2 - \\frac{x}{5}\\right) \\implies f\'(x) = \\frac{24}{25}(5 - x)' },
        { name: 'Caisse de volume 8 m³', formula: 'f(x) = 2x^2 + \\frac{32}{x} \\implies f\'(x) = \\frac{4}{x^2}(x^3 - 8)' },
      ],
      workedExample: {
        title: 'Optimiser la caisse de Monsieur Moussa et l’aire du rectangle BPMQ',
        statement:
          '1. Une caisse fermée à base carrée de côté $x > 0$ a un volume $V = 8\\text{ m}^3$ et une aire totale $f(x) = 2x^2 + \\dfrac{32}{x}$. Quelles dimensions minimisent la quantité de bois ?\n2. Dans un triangle $ABC$ rectangle en $B$ ($AB=8, BC=6, AC=10$), l’aire du rectangle inscrit $BPMQ$ est $A(x) = \\dfrac{12}{5}x\\left(2 - \\dfrac{x}{5}\\right)$ pour $MC = x \\in ]0; 10[$. Quelle est son aire maximale ?',
        methodSteps: [
          '1. $f\'(x) = 4x - \\dfrac{32}{x^2} = \\dfrac{4(x^3 - 8)}{x^2}$, qui s’annule en $x = 2$ (car $2^3 = 8$). Négative sur $]0;2[$, positive sur $]2;+\\infty[$ : minimum en $x = 2\\text{ m}$, $h = \\dfrac{8}{2^2} = 2\\text{ m}$, et $f(2) = 2(4) + \\dfrac{32}{2} = 24\\text{ m}^2$.',
          '2. $A(x) = \\dfrac{24}{5}x - \\dfrac{12}{25}x^2$, donc $A\'(x) = \\dfrac{24}{25}(5 - x)$, positive sur $]0;5[$ et négative sur $]5;10[$.',
          'Le maximum est atteint en $x = 5\\text{ cm}$ et vaut $A(5) = \\dfrac{12}{5}\\times 5\\times(2 - 1) = 12\\text{ cm}^2$.',
        ],
        conclusion: 'Caisse : cube de côté $2\\text{ m}$ (aire $24\\text{ m}^2$). Rectangle : $x = 5\\text{ cm}$ (aire $12\\text{ cm}^2$).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Exprimer l’aire du rectangle BPMQ',
          stepTitle: 'Utiliser Thalès et Pythagore pour modéliser',
          paragraphText:
            'Dans le triangle $ABC$ rectangle en $B$ ($AB=8, BC=6, AC=10$) avec $MC=x$, $(MQ)\\parallel(BC)$ donne par Thalès $\\dfrac{10-x}{10} = \\dfrac{MQ}{6} \\implies MQ = 6 - \\dfrac{3x}{5}$, et Pythagore dans $CMP$ donne $MP = \\dfrac{4x}{5}$. D’où $f(x) = \\dfrac{12}{5}x\\left(2 - \\dfrac{x}{5}\\right)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p07_q1',
            type: 'mcq',
            prompt:
              'Dans la modélisation du rectangle $BPMQ$ ($MC = x \\in ]0;10[$), l’aire vaut $f(x) = \\dfrac{12}{5}x\\left(2 - \\dfrac{x}{5}\\right) = \\dfrac{24}{5}x - \\dfrac{12}{25}x^2$. Que vaut sa dérivée $f\'(x)$ ?',
            options: [
              '$f\'(x) = \\dfrac{24}{5} - \\dfrac{12}{25}x$',
              '$f\'(x) = \\dfrac{24}{25}(5 - x)$',
              '$f\'(x) = \\dfrac{12}{5}(2 - x)$',
              '$f\'(x) = \\dfrac{24}{25}(x - 5)$',
            ],
            correctAnswerIndex: 1,
            explanation: '$f\'(x) = \\dfrac{24}{5} - \\dfrac{24}{25}x = \\dfrac{24}{25}(5 - x)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Maximum de l’aire BPMQ',
          stepTitle: 'Trouver x optimal et l’aire maximale',
          paragraphText:
            'Comme $f\'(x) = \\dfrac{24}{25}(5 - x) > 0$ sur $]0; 5[$ et $< 0$ sur $]5; 10[$, $f$ atteint son maximum en $x = 5\\text{ cm}$, qui vaut $f(5) = \\dfrac{12}{5}\\times 5\\times(2 - 1) = 12\\text{ cm}^2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p07_q2',
            type: 'mcq',
            prompt:
              'Pour quelle valeur de $x$ l’aire du rectangle $BPMQ$ ($f(x) = \\dfrac{12}{5}x(2 - \\frac{x}{5})$) est-elle maximale, et combien vaut cette aire ?',
            options: [
              '$x = 5\\text{ cm}$ et aire $= 12\\text{ cm}^2$',
              '$x = 4\\text{ cm}$ et aire $= 12\\text{ cm}^2$',
              '$x = 5\\text{ cm}$ et aire $= 24\\text{ cm}^2$',
              '$x = 2\\text{ cm}$ et aire $= 10\\text{ cm}^2$',
            ],
            correctAnswerIndex: 0,
            explanation: '$f\'(x)=0 \\iff x=5$, et $f(5) = 12\\times(2 - 1) = 12\\text{ cm}^2$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Modéliser la caisse de M. Moussa',
          stepTitle: 'Exprimer la hauteur h et la surface totale en fonction de x',
          paragraphText:
            'Une caisse pavé droit à base carrée de côté $x > 0$ et de volume $V = 8\\text{ m}^3$ a pour hauteur $h = \\dfrac{8}{x^2}$. Ses $2$ faces carrées ont aire $2x^2$ et ses $4$ faces latérales ont aire $4xh = \\dfrac{32}{x}$, d’où $f(x) = 2x^2 + \\dfrac{32}{x}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p07_q3',
            type: 'mcq',
            prompt:
              'Une caisse fermée à base carrée de côté $x$ et de hauteur $h$ a un volume de $8\\text{ m}^3$. Quelle expression donne sa surface totale $f(x)$ ?',
            options: [
              '$f(x) = x^2 + \\dfrac{32}{x}$',
              '$f(x) = 2x^2 + \\dfrac{32}{x}$',
              '$f(x) = 2x^2 + \\dfrac{8}{x^2}$',
              '$f(x) = 4x^2 + \\dfrac{16}{x}$',
            ],
            correctAnswerIndex: 1,
            explanation: '2 bases carrées ($2x^2$) + 4 faces rectangulaires ($4\\times x \\times \\frac{8}{x^2} = \\frac{32}{x}$) donnent $f(x) = 2x^2 + \\dfrac{32}{x}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Dériver 2x² + 32/x',
          stepTitle: 'Factoriser f’(x) par (x³ − 8)',
          paragraphText:
            'Sur $]0; +\\infty[$, $f\'(x) = 4x - \\dfrac{32}{x^2} = \\dfrac{4x^3 - 32}{x^2} = \\dfrac{4}{x^2}(x^3 - 8)$. Comme $x^3 - 8 = 0 \\iff x = 2$, $f\'(x) < 0$ pour $0 < x < 2$ et $f\'(x) > 0$ pour $x > 2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p07_q4',
            type: 'mcq',
            prompt:
              'Quelle est la valeur de $x > 0$ qui annule $f\'(x) = \\dfrac{4}{x^2}(x^3 - 8)$ et la hauteur $h = \\dfrac{8}{x^2}$ correspondante ?',
            options: [
              '$x = 2\\text{ m}$ et $h = 2\\text{ m}$',
              '$x = 4\\text{ m}$ et $h = 0{,}5\\text{ m}$',
              '$x = 8\\text{ m}$ et $h = 1\\text{ m}$',
              '$x = 2\\text{ m}$ et $h = 4\\text{ m}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$x^3 = 8 \\implies x = 2\\text{ m}$, puis $h = \\dfrac{8}{2^2} = 2\\text{ m}$ (la caisse optimale est un cube !).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Calcul exact de la surface minimale f(2)',
          stepTitle: 'Additionner les deux termes de f(2) sans en oublier un !',
          paragraphText:
            'Une fois trouvé $x = 2$, calcule soigneusement l’aire totale $f(2) = 2x^2 + \\dfrac{32}{x} = 2(2^2) + \\dfrac{32}{2} = 8 + 16 = 24\\text{ m}^2$ (attention à ne pas oublier le terme $2\\times 2^2 = 8$ !).',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p07_q5',
            type: 'mcq',
            prompt: 'Quelle est l’aire minimale exacte de bois nécessaire $f(2) = 2(2)^2 + \\dfrac{32}{2}$ pour la caisse de $8\\text{ m}^3$ ?',
            options: ['$16\\text{ m}^2$', '$24\\text{ m}^2$', '$20\\text{ m}^2$', '$32\\text{ m}^2$'],
            correctAnswerIndex: 1,
            explanation: '$f(2) = 2\\times 4 + \\dfrac{32}{2} = 8 + 16 = 24\\text{ m}^2$ (6 faces carrées de côté $2\\text{ m}$ : $6\\times 4 = 24\\text{ m}^2$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Périmètre fixé, aire maximale',
          stepTitle: 'Optimiser l’aire d’un enclos rectangulaire',
          paragraphText:
            'Un paysan dispose de $40\\text{ m}$ de grillage pour clôturer un rectangle de longueur $x$ et largeur $20 - x$. L’aire $S(x) = x(20 - x) = 20x - x^2$ a pour dérivée $S\'(x) = 20 - 2x$, nulle en $x = 10\\text{ m}$ (carré d’aire $100\\text{ m}^2$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l09_derivation_p07_q6',
            type: 'mcq',
            prompt:
              'L’aire d’un rectangle de demi-périmètre $20\\text{ m}$ est donnée par $S(x) = 20x - x^2$ sur $]0; 20[$. Quelle est son aire maximale ?',
            options: ['$40\\text{ m}^2$', '$100\\text{ m}^2$', '$200\\text{ m}^2$', '$80\\text{ m}^2$'],
            correctAnswerIndex: 1,
            explanation: '$S\'(x) = 20 - 2x = 0 \\iff x = 10\\text{ m}$, et $S(10) = 20(10) - 10^2 = 100\\text{ m}^2$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p07_q1',
          type: 'mcq',
          prompt:
            'Dans la modélisation du rectangle $BPMQ$ ($MC = x \\in ]0;10[$), l’aire vaut $f(x) = \\dfrac{12}{5}x\\left(2 - \\dfrac{x}{5}\\right) = \\dfrac{24}{5}x - \\dfrac{12}{25}x^2$. Que vaut sa dérivée $f\'(x)$ ?',
          options: [
            '$f\'(x) = \\dfrac{24}{5} - \\dfrac{12}{25}x$',
            '$f\'(x) = \\dfrac{24}{25}(5 - x)$',
            '$f\'(x) = \\dfrac{12}{5}(2 - x)$',
            '$f\'(x) = \\dfrac{24}{25}(x - 5)$',
          ],
          correctAnswerIndex: 1,
          explanation: '$f\'(x) = \\dfrac{24}{5} - \\dfrac{24}{25}x = \\dfrac{24}{25}(5 - x)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p07_q2',
          type: 'mcq',
          prompt:
            'Pour quelle valeur de $x$ l’aire du rectangle $BPMQ$ ($f(x) = \\dfrac{12}{5}x(2 - \\frac{x}{5})$) est-elle maximale, et combien vaut cette aire ?',
          options: [
            '$x = 5\\text{ cm}$ et aire $= 12\\text{ cm}^2$',
            '$x = 4\\text{ cm}$ et aire $= 12\\text{ cm}^2$',
            '$x = 5\\text{ cm}$ et aire $= 24\\text{ cm}^2$',
            '$x = 2\\text{ cm}$ et aire $= 10\\text{ cm}^2$',
          ],
          correctAnswerIndex: 0,
          explanation: '$f\'(x)=0 \\iff x=5$, et $f(5) = 12\\times(2 - 1) = 12\\text{ cm}^2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p07_q3',
          type: 'mcq',
          prompt:
            'Une caisse fermée à base carrée de côté $x$ et de hauteur $h$ a un volume de $8\\text{ m}^3$. Quelle expression donne sa surface totale $f(x)$ ?',
          options: [
            '$f(x) = x^2 + \\dfrac{32}{x}$',
            '$f(x) = 2x^2 + \\dfrac{32}{x}$',
            '$f(x) = 2x^2 + \\dfrac{8}{x^2}$',
            '$f(x) = 4x^2 + \\dfrac{16}{x}$',
          ],
          correctAnswerIndex: 1,
          explanation: '2 bases carrées ($2x^2$) + 4 faces rectangulaires ($4\\times x \\times \\frac{8}{x^2} = \\frac{32}{x}$) donnent $f(x) = 2x^2 + \\dfrac{32}{x}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p07_q4',
          type: 'mcq',
          prompt:
            'Quelle est la valeur de $x > 0$ qui annule $f\'(x) = \\dfrac{4}{x^2}(x^3 - 8)$ et la hauteur $h = \\dfrac{8}{x^2}$ correspondante ?',
          options: [
            '$x = 2\\text{ m}$ et $h = 2\\text{ m}$',
            '$x = 4\\text{ m}$ et $h = 0{,}5\\text{ m}$',
            '$x = 8\\text{ m}$ et $h = 1\\text{ m}$',
            '$x = 2\\text{ m}$ et $h = 4\\text{ m}$',
          ],
          correctAnswerIndex: 0,
          explanation: '$x^3 = 8 \\implies x = 2\\text{ m}$, puis $h = \\dfrac{8}{2^2} = 2\\text{ m}$ (la caisse optimale est un cube !).',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p07_q5',
          type: 'mcq',
          prompt: 'Quelle est l’aire minimale exacte de bois nécessaire $f(2) = 2(2)^2 + \\dfrac{32}{2}$ pour la caisse de $8\\text{ m}^3$ ?',
          options: ['$16\\text{ m}^2$', '$24\\text{ m}^2$', '$20\\text{ m}^2$', '$32\\text{ m}^2$'],
          correctAnswerIndex: 1,
          explanation: '$f(2) = 2\\times 4 + \\dfrac{32}{2} = 8 + 16 = 24\\text{ m}^2$ (6 faces carrées de côté $2\\text{ m}$ : $6\\times 4 = 24\\text{ m}^2$).',
        },
        {
          id: 'premiere_c_maths_numerique_l09_derivation_p07_q6',
          type: 'mcq',
          prompt:
            'L’aire d’un rectangle de demi-périmètre $20\\text{ m}$ est donnée par $S(x) = 20x - x^2$ sur $]0; 20[$. Quelle est son aire maximale ?',
          options: ['$40\\text{ m}^2$', '$100\\text{ m}^2$', '$200\\text{ m}^2$', '$80\\text{ m}^2$'],
          correctAnswerIndex: 1,
          explanation: '$S\'(x) = 20 - 2x = 0 \\iff x = 10\\text{ m}$, et $S(10) = 20(10) - 10^2 = 100\\text{ m}^2$.',
        },
      ],
    },
  ],
};
