import type {
  CurriculumChapter,
  CurriculumPoint,
  StructuredLessonStep,
} from '../../../../lib/curriculum/types';

const makePoint = (
  p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] },
): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

export const ANALYSE_2_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ============================================================================
  // CHAPITRE 1 : FORMULES DE TAYLOR ET DÉVELOPPEMENTS LIMITÉS
  // ============================================================================
  {
    id: 'lmd_srit_l1_analyse2_ch1',
    subjectId: 'lmd_analyse_2',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 1,
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (Semestre 2 — Code 1MTH3201)',
    title: 'Formules de Taylor et Développements Limités',
    summary:
      'Formules de Taylor-Lagrange et Taylor-Young, développements limités usuels au voisinage de 0, opérations algébriques et applications à l’étude locale des fonctions et aux limites.',
    points: [
      // ------------------------------------------------------------------------
      // Point 1.1 : Formules de Taylor et Développements Limités usuels
      // ------------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_analyse2_ch1_p1',
        order: 1,
        title: 'Formules de Taylor et Développements Limités usuels en 0',
        summary:
          'Théorèmes de Taylor-Lagrange et Taylor-Young, unicité du développement limité, parité et catalogue des DL usuels au voisinage de 0.',
        conceptExplanation:
          'Les formules de Taylor permettent d’approcher une fonction dérivable par un polynôme au voisinage d’un point $x_0$. Tandis que Taylor-Lagrange fournit une égalité exacte sur un segment avec un reste global faisant intervenir un point intermédiaire $c \\in ]a, b[$, Taylor-Young donne une approximation locale au voisinage de $x_0$ avec un reste négligeable en $o((x-x_0)^n)$. La maîtrise parfaite des développements limités usuels en $0$ est indispensable pour tout calcul d’analyse en Licence 1 SRIT.',
        formulas: [
          {
            name: 'Formule de Taylor-Young à l’ordre n en x_0',
            formula: 'f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k + o\\left((x - x_0)^n\\right)',
            note: 'Valable dès que f est n fois dérivable en x_0.',
          },
          {
            name: 'DL usuels exponentiel et logarithmique en 0',
            formula: 'e^x = \\sum_{k=0}^{n} \\frac{x^k}{k!} + o(x^n), \\quad \\ln(1+x) = \\sum_{k=1}^{n} (-1)^{k-1}\\frac{x^k}{k} + o(x^n)',
            note: 'Attention à l’alternance des signes et à l’absence de factorielle dans ln(1+x).',
          },
          {
            name: 'DL usuels trigonométriques en 0',
            formula: '\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^6), \\quad \\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^5)',
            note: 'sin(x) est impaire (puissances impaires) et cos(x) est paire (puissances paires).',
          },
        ],
        keyRule:
          'Si une fonction $f$ admet un $DL_n(0)$, sa partie régulière polynomiale est unique : si $f$ est paire, elle ne contient que des puissances paires ; si $f$ est impaire, elle ne contient que des puissances impaires.',
        workedExample: {
          title: 'Développement limité à l’ordre 3 en 0 de f(x) = sqrt(1 + x)',
          statement:
            'Déterminer le développement limité à l’ordre 3 au voisinage de $0$ de $f(x) = \\sqrt{1 + x} = (1+x)^{1/2}$.',
          methodSteps: [
            'Identifier la formule binomiale générale : $(1+x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\frac{\\alpha(\\alpha-1)(\\alpha-2)}{3!}x^3 + o(x^3)$.',
            'Poser $\\alpha = \\frac{1}{2}$ et calculer les coefficients successifs.',
            'Coefficient de $x$ : $\\alpha = \\frac{1}{2}$.',
            'Coefficient de $x^2$ : $\\frac{\\frac{1}{2}(\\frac{1}{2}-1)}{2} = \\frac{-1/4}{2} = -\\frac{1}{8}$.',
            'Coefficient de $x^3$ : $\\frac{\\frac{1}{2}(-\\frac{1}{2})(-\\frac{3}{2})}{6} = \\frac{3/8}{6} = \\frac{1}{16}$.',
          ],
          conclusion:
            'Au voisinage de $0$, $\\sqrt{1+x} = 1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + \\frac{1}{16}x^3 + o(x^3)$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Taylor-Lagrange',
            stepTheme: 'blue',
            stepTitle: 'Formule de Taylor-Lagrange et contrôle global du reste',
            paragraphText:
              'Soit $f : [a, b] \\to \\mathbb{R}$ une fonction de classe $\\mathcal{C}^n$ sur $[a, b]$ et $n+1$ fois dérivable sur $]a, b[$. La formule de Taylor-Lagrange généralise le théorème des accroissements finis à un ordre $n$ quelconque. Elle affirme qu’il existe au moins un réel $c \\in ]a, b[$ permettant d’exprimer exactement le reste sous forme d’une dérivée d’ordre $n+1$ évaluée en $c$. Cette formule est fondamentale pour majorer l’erreur commise lorsqu’on remplace $f$ par son polynôme de Taylor sur un intervalle.',
            formula: {
              name: 'Égalité de Taylor-Lagrange',
              formula: 'f(b) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(b - a)^k + \\frac{f^{(n+1)}(c)}{(n+1)!}(b - a)^{n+1}',
              note: 'Il existe c strictement compris entre a et b.',
            },
            keyRule:
              'Si $|f^{(n+1)}(t)| \\le M$ sur $[a, b]$, alors on obtient l’inégalité de Taylor-Lagrange : $|R_n(b)| \\le M \\frac{|b-a|^{n+1}}{(n+1)!}$.',
            konanTip:
              'Aux examens d’Analyse 2, utilisez Taylor-Lagrange dès que l’énoncé demande une majoration d’erreur numérique ou une inégalité globale sur un segment.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p1_ex1',
              type: 'mcq',
              prompt:
                'Quelle est l’expression exacte du reste de Lagrange d’ordre $n$ entre $a$ et $b$ pour une fonction $n+1$ fois dérivable ?',
              options: [
                '$\\frac{f^{(n+1)}(c)}{(n+1)!}(b-a)^{n+1}$ avec $c \\in ]a, b[$',
                '$\\frac{f^{(n)}(c)}{n!}(b-a)^n$ avec $c \\in ]a, b[$',
                '$\\int_a^b \\frac{(b-t)^{n+1}}{(n+1)!} f^{(n+1)}(t)\\,dt$',
                '$\\frac{f^{(n+1)}(a)}{(n+1)!}(b-a)^{n+1}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le reste de Taylor-Lagrange à l’ordre $n$ s’écrit $\\frac{f^{(n+1)}(c)}{(n+1)!}(b-a)^{n+1}$ pour un certain $c \\in ]a, b[$.',
              hint: 'Pour $n = 0$, on doit retrouver le théorème des accroissements finis $f(b) - f(a) = f\'(c)(b-a)$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Taylor-Young',
            stepTheme: 'violet',
            stepTitle: 'Formule de Taylor-Young et définition d’un Développement Limité',
            paragraphText:
              'Une fonction $f$ admet un développement limité d’ordre $n$ au voisinage de $x_0$ (noté $DL_n(x_0)$) s’il existe un polynôme $P_n$ de degré au plus $n$ tel que $f(x) = P_n(x - x_0) + o((x - x_0)^n)$ lorsque $x \\to x_0$. La notation de Landau $o(u^n)$ désigne une quantité de la forme $u^n \\varepsilon(u)$ où $\\lim_{u \\to 0} \\varepsilon(u) = 0$. Le théorème de Taylor-Young assure que toute fonction $n$ fois dérivable en $x_0$ admet un $DL_n(x_0)$ dont les coefficients sont donnés par les dérivées successives en $x_0$.',
            formula: {
              name: 'Développement de Maclaurin (Taylor-Young en 0)',
              formula: 'f(x) = f(0) + f\'(0)x + \\frac{f\'\'(0)}{2!}x^2 + \\cdots + \\frac{f^{(n)}(0)}{n!}x^n + o(x^n)',
              note: 'Le polynôme P_n(x) est appelé partie régulière du DL.',
            },
            keyRule:
              'Un $DL_n(0)$ est unique : si $f$ est paire, $P_n(x)$ ne comporte que des monômes de degré pair ; si $f$ est impaire, uniquement des degrés impairs.',
            konanTip:
              'Attention : l’existence d’un $DL_n(0)$ pour $n \\ge 2$ n’implique pas que $f$ soit $n$ fois dérivable en $0$ (elle assure seulement la continuité pour $n=0$ et la dérivabilité en $0$ pour $n=1$).',
            visualSchema: {
              type: 'function_plot',
              title: 'Approximations polynomiales de Taylor de exp(x) en 0',
              caption:
                'Comparaison entre exp(x), sa tangente T1(x) = 1 + x et sa parabole osculatrice T2(x) = 1 + x + x²/2 au voisinage de 0.',
              plot: {
                xMin: -2,
                xMax: 2,
                yMin: -1,
                yMax: 5,
                xStep: 1,
                yStep: 1,
                xLabel: 'x',
                yLabel: 'y',
                curves: [
                  {
                    label: '1 + x',
                    color: 'orange',
                    pieces: [{ expr: '1 + x', from: -2, to: 2 }],
                  },
                  {
                    label: '1 + x + 0.5x²',
                    color: 'blue',
                    pieces: [{ expr: '1 + x + 0.5*x^2', from: -2, to: 2 }],
                  },
                ],
                points: [{ x: 0, y: 1, label: 'A(0,1)', filled: true, color: 'violet' }],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p1_ex2',
              type: 'mcq',
              prompt:
                'Si une fonction $f$ trois fois dérivable en $0$ vérifie $f(x) = 2 - 3x + 5x^2 - 4x^3 + o(x^3)$ au voisinage de $0$, quelle est la valeur de $f^{(3)}(0)$ ?',
              options: ['$-24$', '$-4$', '$-2/3$', '$24$'],
              correctAnswerIndex: 0,
              explanation:
                'D’après l’unicité du développement de Taylor-Young, le coefficient de $x^3$ est $\\frac{f^{(3)}(0)}{3!} = \\frac{f^{(3)}(0)}{6} = -4$, d’où $f^{(3)}(0) = -4 \\times 6 = -24$.',
              hint: 'Identifiez le coefficient de $x^3$ avec $\\frac{f^{(3)}(0)}{3!}$ où $3! = 6$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'DL Exponentiels',
            stepTheme: 'violet',
            stepTitle: 'DL usuels en 0 : exponentielle, logarithme et fonctions hyperboliques',
            paragraphText:
              'À partir du développement de $e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots + \\frac{x^n}{n!} + o(x^n)$, on déduit immédiatement les développements de $\\cosh x = \\frac{e^x + e^{-x}}{2}$ (partie paire de $e^x$) et $\\sinh x = \\frac{e^x - e^{-x}}{2}$ (partie impaire de $e^x$). De même, à partir de la somme géométrique $\\frac{1}{1-x} = 1 + x + x^2 + \\cdots + x^n + o(x^n)$ et $\\frac{1}{1+x} = 1 - x + x^2 - x^3 + \\cdots + (-1)^n x^n + o(x^n)$, on obtient par primitivation le développement fondamental de $\\ln(1+x)$ et de $\\ln(1-x)$.',
            formula: {
              name: 'Développements hyperboliques et logarithmiques en 0',
              formula: '\\cosh x = 1 + \\frac{x^2}{2!} + \\frac{x^4}{4!} + o(x^5), \\quad \\ln(1-x) = -x - \\frac{x^2}{2} - \\frac{x^3}{3} - \\cdots - \\frac{x^n}{n} + o(x^n)',
              note: 'Tous les signes de cosh(x) et sinh(x) sont positifs ; tous ceux de ln(1-x) sont négatifs.',
            },
            keyRule:
              'Ne confondez jamais les dénominateurs : $e^x, \\cosh x, \\sinh x$ ont des factorielles $k!$, tandis que $\\ln(1+x)$ et $\\ln(1-x)$ ont des entiers simples $k$ sans factorielle.',
            konanTip:
              'Pour retrouver $\\ln(1-x)$ sans erreur de signe, remplacez simplement $x$ par $-x$ dans $\\ln(1+x)$ : tous les termes deviennent négatifs !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p1_ex3',
              type: 'mcq',
              prompt:
                'Quel est le développement limité à l’ordre 4 au voisinage de $0$ de la fonction $f(x) = \\ln(1+x)$ ?',
              options: [
                '$x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + o(x^4)$',
                '$x - \\frac{x^2}{2!} + \\frac{x^3}{3!} - \\frac{x^4}{4!} + o(x^4)$',
                '$1 + x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + o(x^4)$',
                '$x + \\frac{x^2}{2} + \\frac{x^3}{3} + \\frac{x^4}{4} + o(x^4)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par primitivation de $\\frac{1}{1+x} = 1 - x + x^2 - x^3 + o(x^3)$ avec $\\ln(1+0) = 0$, on obtient $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + o(x^4)$.',
              hint: 'En $x=0$, $\\ln(1)=0$, les signes alternent et les dénominateurs sont $1, 2, 3, 4$ (sans factorielle).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Binôme généralisé',
            stepTheme: 'violet',
            stepTitle: 'DL usuel de (1+x)^α et cas particuliers (racines et inverses)',
            paragraphText:
              'Pour tout réel $\\alpha \\in \\mathbb{R}$, la fonction puissance $(1+x)^\\alpha$ est indéfiniment dérivable au voisinage de $0$. Sa dérivée $k$-ième en $0$ vaut $\\alpha(\\alpha-1)\\cdots(\\alpha-k+1)$. Cette formule du binôme généralisé de Newton permet de retrouver instantanément les développements de $\\sqrt{1+x}$ ($\\alpha = 1/2$), de $\\frac{1}{\\sqrt{1+x}}$ ($\\alpha = -1/2$), de $\\frac{1}{1+x}$ ($\\alpha = -1$) ou encore de $\\frac{1}{(1+x)^2}$ ($\\alpha = -2$).',
            formula: {
              name: 'Développement binomial généralisé en 0',
              formula: '(1+x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\frac{\\alpha(\\alpha-1)(\\alpha-2)}{3!}x^3 + o(x^3)',
              note: 'En particulier : 1/sqrt(1+x) = 1 - (1/2)x + (3/8)x^2 - (5/16)x^3 + o(x^3).',
            },
            keyRule:
              'Mémorisez par cœur les trois premiers termes de $\\sqrt{1+x} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + o(x^2)$ et $\\frac{1}{\\sqrt{1+x}} = 1 - \\frac{x}{2} + \\frac{3x^2}{8} + o(x^2)$.',
            konanTip:
              'Si vous avez $\\sqrt{a + x}$ avec $a > 0$, factorisez d’abord par $\\sqrt{a}$ : $\\sqrt{a+x} = \\sqrt{a}\\sqrt{1 + \\frac{x}{a}}$, puis posez $u = \\frac{x}{a} \\to 0$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p1_ex4',
              type: 'mcq',
              prompt:
                'Quel est le développement limité à l’ordre 2 au voisinage de $0$ de $f(x) = \\frac{1}{\\sqrt{1+x}} = (1+x)^{-1/2}$ ?',
              options: [
                '$1 - \\frac{1}{2}x + \\frac{3}{8}x^2 + o(x^2)$',
                '$1 - \\frac{1}{2}x - \\frac{1}{8}x^2 + o(x^2)$',
                '$1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + o(x^2)$',
                '$1 - \\frac{1}{2}x + \\frac{1}{4}x^2 + o(x^2)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec $\\alpha = -1/2$, le coefficient de $x$ est $-1/2$ et celui de $x^2$ est $\\frac{(-1/2)(-3/2)}{2} = \\frac{3/4}{2} = \\frac{3}{8}$.',
              hint: 'Calculez $\\frac{\\alpha(\\alpha-1)}{2}$ pour $\\alpha = -\\frac{1}{2}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'DL Trigonométriques',
            stepTheme: 'violet',
            stepTitle: 'DL usuels en 0 : sin(x), cos(x), tan(x) et arctan(x)',
            paragraphText:
              'Les fonctions trigonométriques et réciproques possèdent des développements classiques très sollicités. Contrairement à $\\cosh x$ et $\\sinh x$ où tous les signes sont positifs, les signes de $\\cos x$ et $\\sin x$ alternent ($+, -, +, -$). Pour $\\arctan x$, sa dérivée étant $\\frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + o(x^6)$, une primitivation immédiate donne un développement impair à signes alternés sans factorielles. Quant à $\\tan x$, c’est une fonction impaire dont les premiers termes à l’ordre 3 sont tous positifs.',
            formula: {
              name: 'Développements de tan(x) et arctan(x) en 0',
              formula: '\\tan x = x + \\frac{x^3}{3} + \\frac{2x^5}{15} + o(x^6), \\quad \\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} + o(x^6)',
              note: 'Noter la différence de signe sur le terme en x^3 : +x^3/3 pour tan(x) et -x^3/3 pour arctan(x).',
            },
            keyRule:
              'En $0$, $\\tan x - \\sin x = \\left(x + \\frac{x^3}{3}\\right) - \\left(x - \\frac{x^3}{6}\\right) + o(x^3) = \\frac{x^3}{2} + o(x^3)$.',
            konanTip:
              'Un grand classique de partiel SRIT : $\\tan x$ et $\\sin x$ ont le même $DL_2(0)$ égal à $x + o(x^2)$. Il faut pousser au moins à l’ordre 3 pour calculer la limite de $\\frac{\\tan x - \\sin x}{x^3}$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p1_ex5',
              type: 'mcq',
              prompt:
                'Quel est le développement limité à l’ordre 3 au voisinage de $0$ de la fonction $f(x) = \\tan x$ ?',
              options: [
                '$x + \\frac{x^3}{3} + o(x^3)$',
                '$x - \\frac{x^3}{3} + o(x^3)$',
                '$x + \\frac{x^3}{6} + o(x^3)$',
                '$x - \\frac{x^3}{6} + o(x^3)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le développement limité à l’ordre 3 en $0$ de $\\tan x$ est $x + \\frac{x^3}{3} + o(x^3)$ (tandis que $x - \\frac{x^3}{3} + o(x^3)$ est celui de $\\arctan x$, et $x - \\frac{x^3}{6} + o(x^3)$ est celui de $\\sin x$).',
              hint: 'Pour $x > 0$ proche de $0$, on a $\\tan x > x$, donc le terme en $x^3$ est positif de coefficient $1/3$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Changement de centre',
            stepTheme: 'green',
            stepTitle: 'Ramener un DL au voisinage de x₀ ≠ 0 ou de l’infini en 0',
            paragraphText:
              'Les formulaires de développements limités ne sont donnés qu’au voisinage de $0$. Lorsqu’on cherche un $DL_n(x_0)$ avec $x_0 \\neq 0$, on ne calcule presque jamais les dérivées successives $f^{(k)}(x_0)$ : on effectue systématiquement la translation $h = x - x_0$ (c’est-à-dire $x = x_0 + h$ avec $h \\to 0$), puis on utilise les propriétés algébriques des fonctions usuelles pour se ramener aux $DL_n(0)$ en la variable $h$. De même, pour un développement asymptotique en $\\pm\\infty$, on pose $h = \\frac{1}{x} \\to 0$.',
            formula: {
              name: 'Translation en x_0',
              formula: 'x = x_0 + h \\iff h = x - x_0 \\underset{x \\to x_0}{\\longrightarrow} 0',
              note: 'Exemples : e^x = e^{x_0} e^h et ln(x) = ln(x_0) + ln(1 + h/x_0).',
            },
            keyRule:
              'Ne jamais appliquer un formulaire de $DL(0)$ directement à une variable $x$ qui ne tend pas vers $0$ ! Posez toujours $h = x - x_0 \\to 0$.',
            konanTip:
              'À la fin du calcul en $h$, n’oubliez jamais de remplacer $h$ par $(x - x_0)$ pour exprimer la réponse finale en fonction de $x$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p1_ex6',
              type: 'mcq',
              prompt:
                'Quel est le développement limité à l’ordre 2 de $f(x) = \\ln(x)$ au voisinage de $x_0 = 2$ ?',
              options: [
                '$\\ln(2) + \\frac{x-2}{2} - \\frac{(x-2)^2}{8} + o((x-2)^2)$',
                '$\\ln(2) + (x-2) - \\frac{(x-2)^2}{2} + o((x-2)^2)$',
                '$\\frac{x-2}{2} - \\frac{(x-2)^2}{4} + o((x-2)^2)$',
                '$\\ln(2) + \\frac{x-2}{2} + \\frac{(x-2)^2}{8} + o((x-2)^2)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En posant $h = x - 2 \\to 0$, on a $\\ln(2+h) = \\ln\\left(2\\left(1 + \\frac{h}{2}\\right)\\right) = \\ln 2 + \\ln\\left(1 + \\frac{h}{2}\\right) = \\ln 2 + \\frac{h}{2} - \\frac{1}{2}\\left(\\frac{h}{2}\\right)^2 + o(h^2) = \\ln 2 + \\frac{x-2}{2} - \\frac{(x-2)^2}{8} + o((x-2)^2)$.',
              hint: 'Écrivez $\\ln(x) = \\ln(2 + h) = \\ln(2) + \\ln(1 + h/2)$ avec $h = x - 2$.',
            },
          },
        ],
      }),

      // ------------------------------------------------------------------------
      // Point 1.2 : Opérations algébriques et analytiques sur les DL
      // ------------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_analyse2_ch1_p2',
        order: 2,
        title: 'Opérations sur les Développements Limités : Produit, Quotient, Composition, Intégration',
        summary:
          'Règles de troncature, multiplication, division selon les puissances croissantes, composition de DL, intégration et dérivation terme à terme.',
        conceptExplanation:
          'La puissance des développements limités réside dans leur compatibilité avec toutes les opérations algébriques (somme, produit, quotient, composition) et analytiques (primitivation). En revanche, chaque opération exige une gestion rigoureuse de l’ordre de troncature : on ne conserve que les monômes de degré $\\le n$, et toute perte de degrés (par exemple lors d’une division par $x^k$) oblige à développer le numérateur à l’ordre $n + k$.',
        formulas: [
          {
            name: 'Quotient par composition géométrique',
            formula: '\\frac{1}{1 - u} = 1 + u + u^2 + \\cdots + u^n + o(u^n) \\quad (u \\to 0)',
            note: 'Nécessite impérativement que lim u(x) = 0.',
          },
          {
            name: 'Intégration terme à terme d’un DL_n(0)',
            formula: 'f(x) = \\sum_{k=0}^{n} a_k x^k + o(x^n) \\implies \\int_0^x f(t)\\,dt = \\sum_{k=0}^{n} \\frac{a_k}{k+1} x^{k+1} + o(x^{n+1})',
            note: 'La primitivation d’un DL_n(0) fait gagner un ordre et donne un DL_{n+1}(0).',
          },
        ],
        keyRule:
          'On ne peut composer $g \\circ u$ avec un $DL_n(0)$ de $g$ que si $\\lim_{x \\to 0} u(x) = 0$ (c’est-à-dire si le terme constant du DL de $u$ en $0$ est nul).',
        workedExample: {
          title: 'Développement limité à l’ordre 3 en 0 de f(x) = exp(sin x)',
          statement:
            'Déterminer le $DL_3(0)$ de la fonction $f(x) = e^{\\sin x}$.',
          methodSteps: [
            'Développer $u(x) = \\sin x$ à l’ordre 3 en $0$ : $u = x - \\frac{x^3}{6} + o(x^3)$. On vérifie bien que $\\lim_{x \\to 0} u(x) = 0$.',
            'Écrire le $DL_3(0)$ de $e^u$ : $e^u = 1 + u + \\frac{u^2}{2} + \\frac{u^3}{6} + o(u^3)$.',
            'Calculer les puissances de $u$ en tronquant à l’ordre 3 : $u^2 = \\left(x - \\frac{x^3}{6}\\right)^2 + o(x^3) = x^2 + o(x^3)$ et $u^3 = x^3 + o(x^3)$.',
            'Regrouper les termes : $e^{\\sin x} = 1 + \\left(x - \\frac{x^3}{6}\\right) + \\frac{1}{2}x^2 + \\frac{1}{6}x^3 + o(x^3)$.',
          ],
          conclusion:
            'Les termes en $x^3$ se compensent exactement ($-\\frac{1}{6} + \\frac{1}{6} = 0$), d’où $e^{\\sin x} = 1 + x + \\frac{x^2}{2} + o(x^3)$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Troncature & Produit',
            stepTheme: 'green',
            stepTitle: 'Combinaison linéaire, produit et règle de troncature des DL',
            paragraphText:
              'Si $f$ et $g$ admettent chacune un développement limité à l’ordre $n$ en $0$, de parties régulières respectives $P_n(x)$ et $Q_n(x)$, alors leur produit $f \\times g$ admet un $DL_n(0)$ dont la partie régulière s’obtient en effectuant le produit polynomial $P_n(x) \\times Q_n(x)$ et en **tronquant** tous les monômes de degré strictement supérieur à $n$. Si toutefois l’une des fonctions est connue à l’ordre $n$ et l’autre seulement à l’ordre $m < n$, la somme s’arrête à l’ordre $\\min(n, m)$.',
            formula: {
              name: 'Produit de deux DL_n(0)',
              formula: '\\left(\\sum_{k=0}^n a_k x^k + o(x^n)\\right)\\left(\\sum_{j=0}^n b_j x^j + o(x^n)\\right) = \\sum_{m=0}^n \\left(\\sum_{k+j=m} a_k b_j\\right) x^m + o(x^n)',
              note: 'Tout terme de degré > n est absorbé dans o(x^n).',
            },
            keyRule:
              'Si $f(x) = x^p (b_0 + \\cdots + b_{n-p}x^{n-p} + o(x^{n-p}))$ commence par $x^p$, il suffit d’un $DL_{n-p}(0)$ de $g$ pour obtenir le produit $f(x)g(x)$ à l’ordre $n$.',
            konanTip:
              'Ne développez jamais inutilement les termes dont la somme des exposants dépasse l’ordre $n$ demandé : vous gagnerez un temps précieux et éviterez les erreurs de calcul.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p2_ex1',
              type: 'mcq',
              prompt:
                'Quel est le développement limité à l’ordre 2 au voisinage de $0$ du produit $f(x) = e^x \\ln(1+x)$ ?',
              options: [
                '$x + \\frac{x^2}{2} + o(x^2)$',
                '$x - \\frac{x^2}{2} + o(x^2)$',
                '$1 + x + \\frac{x^2}{2} + o(x^2)$',
                '$x + x^2 + o(x^2)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $\\ln(1+x) = x - \\frac{x^2}{2} + o(x^2)$ commence à l’ordre 1, il suffit d’écrire $e^x = 1 + x + o(x)$. Le produit donne $(1 + x)(x - \\frac{x^2}{2}) + o(x^2) = x - \\frac{x^2}{2} + x^2 + o(x^2) = x + \\frac{x^2}{2} + o(x^2)$.',
              hint: 'Multipliez $(1 + x + \\dots)$ par $(x - x^2/2 + \\dots)$ et gardez uniquement les degrés $\\le 2$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Quotient de DL',
            stepTheme: 'green',
            stepTitle: 'Quotient de deux DL : développement de 1/(1-u) et puissances croissantes',
            paragraphText:
              'Pour calculer le $DL_n(0)$ d’un quotient $\\frac{f(x)}{g(x)}$ lorsque $g(0) \\neq 0$, deux méthodes sont possibles. La première consiste à factoriser $g(0)$ au dénominateur pour se ramener à $\\frac{1}{1 - u(x)} = 1 + u + u^2 + \\cdots + u^n + o(u^n)$ avec $\\lim_{x \\to 0} u(x) = 0$, puis à multiplier par le DL de $f(x)$. La seconde méthode, souvent plus rapide à partir de l’ordre 3 ou 4, est la **division suivant les puissances croissantes** de la partie régulière de $f$ par celle de $g$ à l’ordre $n$.',
            formula: {
              name: 'Inversion d’un DL dont le terme constant vaut 1',
              formula: '\\frac{1}{1 + u} = 1 - u + u^2 - u^3 + \\cdots + (-1)^n u^n + o(u^n) \\quad (u(0) = 0)',
              note: 'Dans une division selon les puissances croissantes, on ordonne les polynômes du plus petit degré au plus grand.',
            },
            keyRule:
              'Si $g(0) = c \\neq 0$ et $c \\neq 1$, commencez toujours par mettre $c$ en facteur au dénominateur : $\\frac{1}{c + v(x)} = \\frac{1}{c} \\cdot \\frac{1}{1 + v(x)/c}$.',
            konanTip:
              'Pour retrouver le $DL_4(0)$ de $\\frac{1}{\\cos x}$, posez $\\cos x = 1 - u$ avec $u = \\frac{x^2}{2} - \\frac{x^4}{24} + o(x^4)$ : alors $\\frac{1}{\\cos x} = 1 + u + u^2 + o(x^4) = 1 + \\frac{x^2}{2} + \\frac{5x^4}{24} + o(x^4)$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p2_ex2',
              type: 'mcq',
              prompt:
                'Quel est le développement limité à l’ordre 4 au voisinage de $0$ de $f(x) = \\frac{1}{\\cos x}$ ?',
              options: [
                '$1 + \\frac{x^2}{2} + \\frac{5x^4}{24} + o(x^4)$',
                '$1 + \\frac{x^2}{2} - \\frac{x^4}{24} + o(x^4)$',
                '$1 - \\frac{x^2}{2} + \\frac{5x^4}{24} + o(x^4)$',
                '$1 + \\frac{x^2}{2} + \\frac{x^4}{4} + o(x^4)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On écrit $\\cos x = 1 - u$ avec $u = \\frac{x^2}{2} - \\frac{x^4}{24} + o(x^4)$. Alors $\\frac{1}{1-u} = 1 + u + u^2 + o(u^2) = 1 + \\left(\\frac{x^2}{2} - \\frac{x^4}{24}\\right) + \\frac{x^4}{4} + o(x^4) = 1 + \\frac{x^2}{2} + \\frac{5x^4}{24} + o(x^4)$.',
              hint: 'N’oubliez pas le terme $+u^2 = +\\frac{x^4}{4} = +\\frac{6x^4}{24}$ qui s’ajoute à $-\\frac{x^4}{24}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Simplification par x^k',
            stepTheme: 'orange',
            stepTitle: 'Quotient lorsque le dénominateur s’annule en 0 : perte d’ordre',
            paragraphText:
              'Un piège classique aux examens survient lorsqu’on cherche le $DL_n(0)$ d’un quotient $\\frac{f(x)}{g(x)}$ où $g(0) = 0$. Si le premier terme non nul du développement de $g(x)$ en $0$ est de degré $k \\ge 1$ (par exemple $g(x) = x^k h(x)$ avec $h(0) \\neq 0$), la simplification par $x^k$ entre le numérateur et le dénominateur **fait perdre $k$ ordres** au développement limité ! Pour obtenir un $DL_n(0)$ final après division par $x^k$, il faut impérativement développer le numérateur et le dénominateur à l’ordre $n + k$.',
            formula: {
              name: 'Loi de perte d’ordre lors de la division par x^k',
              formula: '\\frac{P_{n+k}(x) + o(x^{n+k})}{x^k} = \\frac{P_{n+k}(x)}{x^k} + o(x^n)',
              note: 'Un o(x^{n+k}) divisé par x^k devient un o(x^n).',
            },
            keyRule:
              'Pour calculer le $DL_n(0)$ de $\\frac{f(x)}{g(x)}$ où $g(x) \\sim c x^k$ en $0$, développez d’abord $f$ et $g$ à l’ordre $n + k$.',
            konanTip:
              'Exemple typique : pour avoir le $DL_2(0)$ de $\\frac{\\sin x}{x}$, comme le dénominateur est de degré $k = 1$, il faut développer $\\sin x$ à l’ordre $2 + 1 = 3$ : $\\frac{x - x^3/6 + o(x^3)}{x} = 1 - \\frac{x^2}{6} + o(x^2)$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p2_ex3',
              type: 'mcq',
              prompt:
                'À quel ordre minimal doit-on développer le numérateur $\\ln(1+x) - x$ pour obtenir le $DL_2(0)$ du quotient $f(x) = \\frac{\\ln(1+x) - x}{x^2}$ ?',
              options: [
                'À l’ordre $4$',
                'À l’ordre $2$',
                'À l’ordre $3$',
                'À l’ordre $5$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme on divise par $x^2$ ($k = 2$) et que l’on souhaite un résultat final à l’ordre $n = 2$, il faut un reste en $o(x^{2+2}) = o(x^4)$ au numérateur, donc un développement à l’ordre $4$.',
              hint: 'Utilisez la règle $n_{\\text{numérateur}} = n_{\\text{final}} + k$ où $k$ est la valuation du dénominateur.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Composition de DL',
            stepTheme: 'green',
            stepTitle: 'Composition de développements limités g ∘ u',
            paragraphText:
              'Soit $u$ une fonction admettant un $DL_n(0)$ telle que $\\lim_{x \\to 0} u(x) = 0$ (donc $u(0) = 0$). Si $g$ admet un $DL_n(0)$, alors la composée $g \\circ u$ admet un $DL_n(0)$ obtenu en remplaçant la variable de $g$ par la partie régulière de $u(x)$ et en tronquant à l’ordre $n$. Si en revanche $\\lim_{x \\to 0} u(x) = l \\neq 0$, on ne peut PAS injecter directement $u(x)$ dans le $DL(0)$ de $g$ : on doit poser $u(x) = l + v(x)$ avec $v(x) \\to 0$ et développer $g$ au voisinage de $l$.',
            formula: {
              name: 'Cas où u(0) = l ≠ 0 (exemple de l’exponentielle)',
              formula: 'e^{u(x)} = e^{l + v(x)} = e^l \\cdot e^{v(x)} = e^l \\left(1 + v(x) + \\frac{v(x)^2}{2!} + \\cdots\\right)',
              note: 'Ici v(x) = u(x) - u(0) tend bien vers 0 quand x tend vers 0.',
            },
            keyRule:
              'Vérifiez toujours que la quantité $v(x)$ que vous élevez aux puissances $v^2, v^3, \\dots$ a un terme constant nul ($v(0) = 0$) !',
            konanTip:
              'Erreur mortelle en contrôle : écrire $e^{\\cos x} = 1 + \\cos x + \\frac{\\cos^2 x}{2} + \\dots$ en $0$. C’est FAUX car $\\cos(0) = 1 \\neq 0$ ! Il faut écrire $e^{\\cos x} = e^{1 - x^2/2 + \\dots} = e \\cdot e^{-x^2/2 + \\dots}$.',
            visualSchema: {
              type: 'flowchart',
              title: 'Algorithme de composition d’un DL : g(u(x)) en x → 0',
              caption: 'Vérification obligatoire de la limite de u(x) avant toute substitution.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    id: 's1',
                    label: 'Calculer l = lim_{x→0} u(x)',
                    sublabel: 'Identifier le terme constant du DL de u(x)',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    id: 's2',
                    label: 'Est-ce que l = 0 ?',
                    sublabel: 'Condition impérative pour utiliser le DL(0) de g',
                    kind: 'decision',
                    color: 'orange',
                    branchLabel: 'Non (l ≠ 0) → Poser u(x) = l + v(x) avec v(0) = 0',
                  },
                  {
                    id: 's3',
                    label: 'Substituer v(x) dans le DL en 0',
                    sublabel: 'Calculer v², v³... en tronquant à l’ordre n',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    id: 's4',
                    label: 'Regrouper et ordonner les puissances de x',
                    sublabel: 'Ajouter le reste + o(x^n)',
                    kind: 'end',
                    color: 'green',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p2_ex4',
              type: 'mcq',
              prompt:
                'Quel est le développement limité à l’ordre 2 au voisinage de $0$ de la fonction composée $f(x) = e^{\\cos x}$ ?',
              options: [
                '$e - \\frac{e}{2}x^2 + o(x^2)$',
                '$1 + x - \\frac{x^2}{2} + o(x^2)$',
                '$e + \\frac{e}{2}x^2 + o(x^2)$',
                '$2 - \\frac{x^2}{2} + o(x^2)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Au voisinage de $0$, $\\cos x = 1 - \\frac{x^2}{2} + o(x^2)$. Donc $e^{\\cos x} = e^{1 - x^2/2 + o(x^2)} = e \\cdot e^{-x^2/2 + o(x^2)} = e\\left(1 - \\frac{x^2}{2} + o(x^2)\\right) = e - \\frac{e}{2}x^2 + o(x^2)$.',
              hint: 'Factorisez par $e^1 = e$ en écrivant $e^{\\cos x} = e \\cdot e^{\\cos x - 1}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Intégration & Dérivation',
            stepTheme: 'violet',
            stepTitle: 'Intégration et dérivation terme à terme d’un Développement Limité',
            paragraphText:
              'Une propriété remarquable permet d’intégrer n’importe quel développement limité d’une fonction continue : si $f$ est continue et admet un $DL_n(0)$ de partie régulière $P_n(x)$, alors toute primitive $F$ de $f$ admet un $DL_{n+1}(0)$ obtenu en primitivant terme à terme $P_n(x)$ et en ajoutant la constante $F(0)$. Inversement, on ne peut dériver terme à terme un $DL_n(0)$ de $f$ (ce qui donne un $DL_{n-1}(0)$ de $f\'$) que si l’on sait **au préalable** que $f\'$ admet un $DL_{n-1}(0)$ (par exemple si $f$ est de classe $\\mathcal{C}^n$).',
            formula: {
              name: 'DL de arctan(x) obtenu par intégration',
              formula: '\\arctan\'(x) = \\frac{1}{1+x^2} = 1 - x^2 + x^4 + o(x^4) \\implies \\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} + o(x^5)',
              note: 'De même pour arcsin(x) en intégrant (1 - x^2)^{-1/2} = 1 + x^2/2 + o(x^2).',
            },
            keyRule:
              'Intégrer un $DL_n(0)$ est toujours licite si $f$ est continue et donne un $DL_{n+1}(0)$ sans oublier la constante $F(0)$.',
            konanTip:
              'C’est la méthode royale pour trouver le $DL_3(0)$ de $\\arcsin x$ ou $\\arccos x$ : développez $(\\arcsin x)\' = (1-x^2)^{-1/2} = 1 + \\frac{x^2}{2} + o(x^2)$, puis primitivez terme à terme !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p2_ex5',
              type: 'mcq',
              prompt:
                'Sachant que $(\\arcsin x)\' = (1 - x^2)^{-1/2}$ et $\\arcsin(0) = 0$, quel est le $DL_3(0)$ de $\\arcsin x$ obtenu par intégration ?',
              options: [
                '$x + \\frac{x^3}{6} + o(x^3)$',
                '$x - \\frac{x^3}{6} + o(x^3)$',
                '$x + \\frac{x^3}{3} + o(x^3)$',
                '$x - \\frac{x^3}{3} + o(x^3)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a $(1 - x^2)^{-1/2} = 1 - \\frac{1}{2}(-x^2) + o(x^2) = 1 + \\frac{x^2}{2} + o(x^2)$. En primitivant terme à terme avec $\\arcsin(0) = 0$, on obtient $\\arcsin x = x + \\frac{x^3}{6} + o(x^3)$.',
              hint: 'Primitivez $1 + \\frac{x^2}{2} + o(x^2)$ entre $0$ et $x$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Puissance variable',
            stepTheme: 'slate',
            stepTitle: 'DL des formes exponentielles à exposant variable u(x)^{v(x)}',
            paragraphText:
              'Lorsqu’une fonction se présente sous la forme $f(x) = u(x)^{v(x)}$ avec $u(x) > 0$, il faut systématiquement repasser par l’écriture exponentielle-logarithme : $f(x) = \\exp\\left(v(x) \\ln(u(x))\\right)$. On calcule d’abord le développement limité de $\\ln(u(x))$, on le multiplie par celui de $v(x)$ pour obtenir le DL de l’exposant $w(x) = v(x)\\ln(u(x))$, puis on compose enfin avec le développement de l’exponentielle.',
            formula: {
              name: 'Passage à la forme exponentielle',
              formula: '(1+x)^{\\frac{1}{x}} = \\exp\\left(\\frac{1}{x}\\ln(1+x)\\right) = \\exp\\left(1 - \\frac{x}{2} + \\frac{x^2}{3} + o(x^2)\\right)',
              note: 'Ici l’exposant tend vers 1, donc on factorise par e^1 = e avant de développer.',
            },
            keyRule:
              'Pour $u(x)^{v(x)}$, écrivez toujours $\\exp(v(x)\\ln u(x))$ et surveillez la limite de $w(x) = v(x)\\ln u(x)$ en $0$.',
            konanTip:
              'Le développement de $(1+x)^{1/x}$ en $0$ est un grand classique des sujets : retenez que sa limite en $0$ est $e$ et que son $DL_1(0)$ est $e - \\frac{e}{2}x + o(x)$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p2_ex6',
              type: 'mcq',
              prompt:
                'Quel est le développement limité à l’ordre 1 au voisinage de $0$ de $f(x) = (1+x)^{1/x}$ ?',
              options: [
                '$e - \\frac{e}{2}x + o(x)$',
                '$1 + x + o(x)$',
                '$e + \\frac{e}{2}x + o(x)$',
                '$e - \\frac{1}{2}x + o(x)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a $\\frac{\\ln(1+x)}{x} = \\frac{x - x^2/2 + o(x^2)}{x} = 1 - \\frac{x}{2} + o(x)$. D’où $(1+x)^{1/x} = e^{1 - x/2 + o(x)} = e \\cdot e^{-x/2 + o(x)} = e\\left(1 - \\frac{x}{2} + o(x)\\right) = e - \\frac{e}{2}x + o(x)$.',
              hint: 'Développez $\\ln(1+x)$ à l’ordre 2 pour qu’après division par $x$, l’exposant soit connu à l’ordre 1.',
            },
          },
        ],
      }),

      // ------------------------------------------------------------------------
      // Point 1.3 : Applications des Développements Limités
      // ------------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_analyse2_ch1_p3',
        order: 3,
        title: 'Applications des DL : Limites, Équivalents, Tangentes et Asymptotes',
        summary:
          'Recherche d’équivalents simples, levée de formes indéterminées, équation de la tangente et position relative, développements asymptotiques et asymptotes obliques.',
        conceptExplanation:
          'Au-delà du calcul formel, les développements limités constituent l’outil le plus efficace pour lever les formes indéterminées complexes ($\\frac{0}{0}, \\infty - \\infty, 1^\\infty$), déterminer un équivalent simple d’une différence de fonctions, étudier la position locale d’une courbe par rapport à sa tangente (et détecter les points d’inflexion), ou encore déterminer l’équation d’une asymptote oblique en $\\pm\\infty$ ainsi que la position de la courbe par rapport à cette asymptote.',
        formulas: [
          {
            name: 'Équivalent donné par le premier terme non nul d’un DL',
            formula: 'f(x) = a_p (x - x_0)^p + o\\left((x - x_0)^p\\right) \\quad (a_p \\neq 0) \\implies f(x) \\underset{x \\to x_0}{\\sim} a_p (x - x_0)^p',
            note: 'Si tous les termes d’ordre < p s’annulent, il faut développer jusqu’au premier terme non nul.',
          },
          {
            name: 'DL asymptotique et asymptote oblique en ±∞',
            formula: 'f(x) = ax + b + \\frac{c}{x^k} + o\\left(\\frac{1}{x^k}\\right) \\quad (c \\neq 0, k \\ge 1)',
            note: 'y = ax + b est asymptote oblique et le signe de c/x^k donne la position relative.',
          },
        ],
        keyRule:
          'On n’additionne JAMAIS des équivalents ($f_1 \\sim g_1$ et $f_2 \\sim g_2$ n’autorise pas à additionner si $g_1 + g_2 = 0$), mais on additionne toujours des développements limités !',
        workedExample: {
          title: 'Calcul d’une limite indéterminée par Développement Limité',
          statement:
            'Calculer $\\lim_{x \\to 0} \\frac{e^x - 1 - \\sin x}{x^2}$.',
          methodSteps: [
            'Le dénominateur étant $x^2$, développer le numérateur à l’ordre 2 au voisinage de $0$.',
            'Écrire $e^x = 1 + x + \\frac{x^2}{2} + o(x^2)$ et $\\sin x = x + o(x^2)$.',
            'Soustraire : $e^x - 1 - \\sin x = \\left(1 + x + \\frac{x^2}{2}\\right) - 1 - x + o(x^2) = \\frac{x^2}{2} + o(x^2)$.',
            'Diviser par $x^2$ : $\\frac{e^x - 1 - \\sin x}{x^2} = \\frac{1}{2} + o(1)$.',
          ],
          conclusion:
            'La limite recherchée lorsque $x \\to 0$ est égale à $\\frac{1}{2}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Équivalents & DL',
            stepTheme: 'violet',
            stepTitle: 'Premier terme non nul d’un DL et équivalent simple au voisinage de x₀',
            paragraphText:
              'Deux fonctions $f$ et $g$ sont équivalentes au voisinage de $x_0$, ce que l’on note $f(x) \\sim_{x_0} g(x)$, si $f(x) = g(x)(1 + \\varepsilon(x))$ avec $\\lim_{x \\to x_0} \\varepsilon(x) = 0$. Lorsqu’une fonction $f$ admet un développement limité en $x_0$, son équivalent polynomial le plus simple est donné par le **premier monôme non nul** de sa partie régulière. Ainsi, si les premiers termes d’une différence se compensent, le développement limité permet de trouver rigoureusement l’équivalent là où les opérations directes sur les équivalents sont interdites.',
            formula: {
              name: 'Lien fondamental entre DL et équivalent',
              formula: 'f(x) = a_p x^p + o(x^p) \\text{ avec } a_p \\neq 0 \\iff f(x) \\underset{x \\to 0}{\\sim} a_p x^p',
              note: 'p est appelé la valuation du développement limité.',
            },
            keyRule:
              'Les équivalents sont compatibles avec le produit, le quotient et les puissances fixes, mais JAMAIS avec la somme/différence ni avec la composition par l’exponentielle ou le logarithme.',
            konanTip:
              'Dès que vous voyez une soustraction de deux termes qui ont le même équivalent en $0$ (comme $\\tan x - \\sin x$ ou $e^x - 1 - x$), passez immédiatement aux développements limités !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p3_ex1',
              type: 'mcq',
              prompt:
                'Quel est l’équivalent simple au voisinage de $0$ de la fonction $f(x) = \\cosh x - \\cos x$ ?',
              options: [
                '$x^2$',
                '$\\frac{x^2}{2}$',
                '$\\frac{x^4}{12}$',
                '$0$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En $0$, $\\cosh x = 1 + \\frac{x^2}{2} + o(x^2)$ et $\\cos x = 1 - \\frac{x^2}{2} + o(x^2)$. Leur différence vaut $\\cosh x - \\cos x = x^2 + o(x^2)$, donc $f(x) \\sim_0 x^2$.',
              hint: 'Soustrayez $1 - \\frac{x^2}{2}$ à $1 + \\frac{x^2}{2}$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calcul de limites',
            stepTheme: 'green',
            stepTitle: 'Levée de formes indéterminées par Développements Limités',
            paragraphText:
              'Pour calculer la limite en $0$ d’un quotient indéterminé $\\frac{N(x)}{D(x)}$ de la forme $\\frac{0}{0}$, la méthode consiste à déterminer d’abord l’ordre $p$ du premier terme non nul du dénominateur ($D(x) \\sim b_p x^p$), puis à développer le numérateur $N(x)$ au moins jusqu’à l’ordre $p$. Si $N(x) = a_q x^q + o(x^q)$ avec $a_q \\neq 0$, alors $\\frac{N(x)}{D(x)} \\sim \\frac{a_q}{b_p} x^{q-p}$ : si $q > p$, la limite vaut $0$ ; si $q = p$, la limite finie vaut $\\frac{a_p}{b_p}$ ; si $q < p$, la limite est infinie.',
            formula: {
              name: 'Limite d’un quotient via les premiers termes non nuls',
              formula: '\\lim_{x \\to 0} \\frac{a_p x^p + o(x^p)}{b_p x^p + o(x^p)} = \\frac{a_p}{b_p} \\quad (b_p \\neq 0)',
              note: 'Regarder le dénominateur en premier permet de connaître l’ordre auquel développer le numérateur.',
            },
            keyRule:
              'Analysez toujours l’ordre de grandeur du dénominateur en premier afin de choisir l’ordre exact du développement limité du numérateur.',
            konanTip:
              'En QCM, si le dénominateur est $x - \\sin x \\sim \\frac{x^3}{6}$, vous savez immédiatement qu’il faut développer le numérateur à l’ordre $3$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p3_ex2',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de la limite $\\lim_{x \\to 0} \\frac{\\ln(1+x) - \\sin x}{x^2}$ ?',
              options: [
                '$-\\frac{1}{2}$',
                '$0$',
                '$\\frac{1}{2}$',
                '$-\\frac{1}{6}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À l’ordre 2 en $0$, $\\ln(1+x) = x - \\frac{x^2}{2} + o(x^2)$ et $\\sin x = x + o(x^2)$. Ainsi $\\ln(1+x) - \\sin x = -\\frac{x^2}{2} + o(x^2)$, et en divisant par $x^2$, la limite vaut $-\\frac{1}{2}$.',
              hint: 'Développez $\\ln(1+x)$ et $\\sin x$ à l’ordre 2 en $0$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Tangente & Position',
            stepTheme: 'violet',
            stepTitle: 'Équation de la tangente, position relative locale et point d’inflexion',
            paragraphText:
              'Supposons que $f$ admette au voisinage de $x_0$ un développement limité de la forme $f(x) = a_0 + a_1(x - x_0) + a_p(x - x_0)^p + o((x - x_0)^p)$, où $p \\ge 2$ est l’indice du premier terme non nul après le terme d’ordre 1 ($a_p \\neq 0$). Alors la droite d’équation $y = a_0 + a_1(x - x_0)$ est la **tangente** $T_{x_0}$ à la courbe $\\mathcal{C}_f$ au point d’abscisse $x_0$. La position relative de $\\mathcal{C}_f$ par rapport à $T_{x_0}$ au voisinage de $x_0$ est donnée par le signe de $f(x) - y = a_p(x - x_0)^p + o((x - x_0)^p)$.',
            formula: {
              name: 'Écart local entre la courbe et sa tangente',
              formula: 'f(x) - \\big(a_0 + a_1(x - x_0)\\big) \\underset{x \\to x_0}{\\sim} a_p (x - x_0)^p \\quad (p \\ge 2,\\; a_p \\neq 0)',
              note: 'Si p est impair, (x - x_0)^p change de signe en x_0 : la courbe traverse sa tangente.',
            },
            keyRule:
              'Si $p$ est pair, $\\mathcal{C}_f$ reste du même côté de sa tangente (au-dessus si $a_p > 0$, en dessous si $a_p < 0$). Si $p$ est impair ($p \\ge 3$), la courbe traverse sa tangente : c’est un **point d’inflexion**.',
            konanTip:
              'Pas besoin que $p = 2$ pour étudier la position relative : si le terme en $(x-x_0)^2$ est nul, on pousse le DL jusqu’au premier terme non nul $(x-x_0)^p$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p3_ex3',
              type: 'mcq',
              prompt:
                'Une fonction $f$ admet en $x_0 = 1$ le développement limité $f(x) = 3 - 2(x-1) + 4(x-1)^3 + o((x-1)^3)$. Que peut-on affirmer au voisinage de $x_0 = 1$ ?',
              options: [
                'La tangente a pour équation $y = 3 - 2(x-1)$ et le point $(1, 3)$ est un point d’inflexion',
                'La courbe est toujours située au-dessus de sa tangente $y = 3 - 2(x-1)$ au voisinage de $1$',
                'La tangente est horizontale en $x_0 = 1$',
                'La courbe est toujours située en dessous de sa tangente au voisinage de $1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La partie affine donne la tangente $y = 3 - 2(x-1)$. Le premier terme suivant non nul est $4(x-1)^3$ de degré $p = 3$ impair : il change de signe en $x = 1$, donc la courbe traverse sa tangente (point d’inflexion).',
              hint: 'Regardez la parité de l’exposant $p = 3$ du premier terme non nul après la partie affine.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Asymptote oblique',
            stepTheme: 'green',
            stepTitle: 'Développement asymptotique en ±∞ et position par rapport à l’asymptote',
            paragraphText:
              'Pour étudier le comportement d’une fonction $f(x)$ lorsque $x \\to +\\infty$ (ou $-\\infty$), on cherche un développement limité généralisé (ou asymptotique) en posant $h = \\frac{1}{x} \\to 0$. Si l’on obtient une expression de la forme $f(x) = ax + b + \\frac{c}{x^k} + o\\left(\\frac{1}{x^k}\\right)$ avec $k \\ge 1$ et $c \\neq 0$, alors la droite $\\Delta : y = ax + b$ est **asymptote oblique** à la courbe $\\mathcal{C}_f$ au voisinage de l’infini considéré. De plus, le signe de $\\frac{c}{x^k}$ indique immédiatement si la courbe est au-dessus ($>0$) ou en dessous ($<0$) de $\\Delta$.',
            formula: {
              name: 'Développement asymptotique à l’infini',
              formula: 'f(x) - (ax + b) = \\frac{c}{x^k} + o\\left(\\frac{1}{x^k}\\right) \\underset{x \\to \\pm\\infty}{\\sim} \\frac{c}{x^k}',
              note: 'Un seul développement asymptotique donne à la fois l’asymptote y = ax + b et la position relative.',
            },
            keyRule:
              'En $+\\infty$, on factorise par le terme dominant $x > 0$ ; attention en $-\\infty$, $\\sqrt{x^2} = |x| = -x$ !',
            konanTip:
              'Le piège numéro 1 aux examens sur les asymptotes de fonctions avec racine carrée : quand $x \\to -\\infty$, $\\sqrt{x^2 + 1} = |x|\\sqrt{1 + 1/x^2} = -x\\sqrt{1 + 1/x^2}$.',
            visualSchema: {
              type: 'function_plot',
              title: 'Courbe et asymptote oblique y = x + 1 en +∞',
              caption:
                'Pour f(x) = x + 1 + 1/x, la courbe s’approche de la droite y = x + 1 par valeurs supérieures en +∞ (c/x = 1/x > 0).',
              plot: {
                xMin: 0.4,
                xMax: 4.5,
                yMin: 0,
                yMax: 6,
                xStep: 1,
                yStep: 1,
                xLabel: 'x',
                yLabel: 'y',
                curves: [
                  {
                    label: 'y = x + 1 (Asymptote)',
                    color: 'orange',
                    pieces: [{ expr: 'x + 1', from: 0.4, to: 4.5 }],
                  },
                  {
                    label: 'f(x) = x + 1 + 1/x',
                    color: 'blue',
                    pieces: [{ expr: 'x + 1 + 1/x', from: 0.4, to: 4.5 }],
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p3_ex4',
              type: 'mcq',
              prompt:
                'Au voisinage de $+\\infty$, on obtient le développement asymptotique $f(x) = 2x - 1 - \\frac{3}{x} + o\\left(\\frac{1}{x}\\right)$. Quelle est la conclusion géométrique exacte en $+\\infty$ ?',
              options: [
                'La droite $y = 2x - 1$ est asymptote oblique et $\\mathcal{C}_f$ est située en dessous de l’asymptote',
                'La droite $y = 2x - 1$ est asymptote oblique et $\\mathcal{C}_f$ est située au-dessus de l’asymptote',
                'La droite $y = 2x - 3$ est asymptote oblique en $+\\infty$',
                'La courbe admet une branche parabolique de direction $y = 2x$ sans asymptote',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a $f(x) - (2x - 1) = -\\frac{3}{x} + o(1/x) \\to 0$ en $+\\infty$, donc $y = 2x - 1$ est asymptote oblique. Comme $-\\frac{3}{x} < 0$ pour $x > 0$ grand, la courbe est en dessous de son asymptote.',
              hint: 'Étudiez le signe de $f(x) - (2x - 1) \\sim -\\frac{3}{x}$ lorsque $x \\to +\\infty$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Prolongement C¹',
            stepTheme: 'slate',
            stepTitle: 'Étude du prolongement par continuité et de la dérivabilité en un point',
            paragraphText:
              'Soit $f$ une fonction définie sur $I \\setminus \\{x_0\\}$. Si $f$ admet au voisinage de $x_0$ un développement limité à l’ordre 1 de la forme $f(x) = a_0 + a_1(x - x_0) + o(x - x_0)$, alors : (1) $\\lim_{x \\to x_0} f(x) = a_0$, donc $f$ est prolongeable par continuité en posant $f(x_0) = a_0$ ; (2) $\\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} = a_1$, donc la fonction prolongée est dérivable en $x_0$ et $f\'(x_0) = a_1$. Ainsi, un simple $DL_1(x_0)$ résout simultanément le prolongement par continuité et la dérivabilité !',
            formula: {
              name: 'Prolongement et dérivée via un DL_1(x_0)',
              formula: 'f(x) = a_0 + a_1(x - x_0) + o(x - x_0) \\implies \\begin{cases} f(x_0) = a_0 \\\\ f\'(x_0) = a_1 \\end{cases}',
              note: 'Si de plus f(x) = a_0 + a_1(x-x_0) + a_2(x-x_0)^2 + o((x-x_0)^2), cela donne l’allure locale de la courbe.',
            },
            keyRule:
              'Un $DL_1(x_0)$ suffit pour prouver qu’une fonction prolongée par continuité est dérivable en $x_0$ et pour lire la pente $f\'(x_0) = a_1$.',
            konanTip:
              'Très utile pour la fonction $f(x) = \\frac{\\sin x}{x}$ ou $g(x) = \\frac{e^x - 1}{x}$ en $0$ : on écrit le $DL_2(0)$ du numérateur, on divise par $x$, et on lit directement $g(0)$ et $g\'(0)$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p3_ex5',
              type: 'mcq',
              prompt:
                'Soit $f(x) = \\frac{e^x - 1}{x}$ pour $x \\neq 0$, prolongée par continuité en $0$. Quelles sont les valeurs de $f(0)$ et $f\'(0)$ ?',
              options: [
                '$f(0) = 1$ et $f\'(0) = \\frac{1}{2}$',
                '$f(0) = 1$ et $f\'(0) = 1$',
                '$f(0) = 0$ et $f\'(0) = 1$',
                '$f(0) = 1$ et $f\'(0) = \\frac{1}{6}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $x \\neq 0$, $f(x) = \\frac{(1 + x + x^2/2 + x^3/6 + o(x^3)) - 1}{x} = 1 + \\frac{x}{2} + \\frac{x^2}{6} + o(x^2)$. Par identification avec $f(0) + f\'(0)x + o(x)$, on lit $f(0) = 1$ et $f\'(0) = \\frac{1}{2}$.',
              hint: 'Développez $e^x - 1$ à l’ordre 2 puis divisez par $x$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Pièges classiques',
            stepTheme: 'orange',
            stepTitle: 'Les 3 erreurs fatales sur les DL et équivalents à éviter en examen',
            paragraphText:
              'Aux examens d’Analyse 2, trois erreurs reviennent systématiquement : (1) Additionner ou soustraire deux équivalents qui se compensent (ex: $\\sin x \\sim x$ et $\\tan x \\sim x$ mais $\\tan x - \\sin x \\not\\sim 0$) ; (2) Composer un équivalent par l’exponentielle ($u_n \\sim v_n$ n’implique PAS $e^{u_n} \\sim e^{v_n}$, il faut que $u_n - v_n \\to 0$) ; (3) Oublier que $o(x^n)$ dépend de l’ordre : dans une somme $P(x) + o(x^2) + Q(x) + o(x^4)$, le reste global est gouverné par le terme le moins précis, soit $o(x^2)$ !',
            formula: {
              name: 'Absorption des restes de Landau en 0',
              formula: 'o(x^n) + o(x^m) = o\\left(x^{\\min(n, m)}\\right) \\quad (x \\to 0)',
              note: 'Au voisinage de 0, plus l’exposant est petit, moins le reste est précis.',
            },
            keyRule:
              'En $x \\to 0$, $o(x^2) + o(x^4) = o(x^2)$ : c’est toujours le plus petit exposant qui absorbe le plus grand.',
            konanTip:
              'Relisez toujours la dernière ligne de votre calcul : aucun monôme de degré strictement supérieur à l’ordre du reste $o(x^n)$ ne doit subsister dans votre réponse finale !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch1_p3_ex6',
              type: 'mcq',
              prompt:
                'Au voisinage de $0$, si l’on additionne $f(x) = 1 + x + x^2 + o(x^2)$ et $g(x) = 2 - x + x^3 + o(x^3)$, quelle est l’écriture mathématiquement rigoureuse de $f(x) + g(x)$ ?',
              options: [
                '$3 + x^2 + o(x^2)$',
                '$3 + x^2 + x^3 + o(x^3)$',
                '$3 + x^2 + x^3 + o(x^2)$',
                '$3 + o(x^3)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $o(x^2) + o(x^3) = o(x^2)$ en $0$, le terme $x^3$ est lui-même un $o(x^2)$ et doit être absorbé dans $o(x^2)$. La somme n’est connue qu’à l’ordre $\\min(2, 3) = 2$, soit $3 + x^2 + o(x^2)$.',
              hint: 'Au voisinage de $0$, $x^3$ est négligeable devant $x^2$, donc $x^3 + o(x^2) = o(x^2)$.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 2 : INTÉGRALE DE RIEMANN ET CALCUL DE PRIMITIVES
  // ============================================================================
  {
    id: 'lmd_srit_l1_analyse2_ch2',
    subjectId: 'lmd_analyse_2',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 2,
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (Semestre 2 — Code 1MTH3201)',
    title: 'Intégrale de Riemann et Calcul de Primitives',
    summary:
      'Construction de l’intégrale de Riemann, sommes de Riemann, théorème fondamental de l’analyse, intégration par parties, changement de variable, fractions rationnelles et trigonométriques.',
    points: [
      // ------------------------------------------------------------------------
      // Point 2.1 : Construction de l'intégrale de Riemann et Sommes de Riemann
      // ------------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_analyse2_ch2_p1',
        order: 1,
        title: 'Intégrale de Riemann, Sommes de Riemann et Propriétés fondamentales',
        summary:
          'Subdivisions d’un segment, sommes de Darboux, intégrabilité au sens de Riemann, convergence des sommes de Riemann et inégalités fondamentales.',
        conceptExplanation:
          'L’intégrale de Riemann d’une fonction bornée $f : [a, b] \\to \\mathbb{R}$ se construit en encadrant $f$ par des fonctions en escalier associées à des subdivisions de plus en plus fines du segment $[a, b]$. Lorsque la borne supérieure des intégrales des minorantes en escalier coïncide avec la borne inférieure des intégrales des majorantes, $f$ est dite Riemann-intégrable. Ce cadre théorique conduit au théorème des sommes de Riemann, outil majeur pour calculer la limite de suites de sommes à $n$ termes.',
        formulas: [
          {
            name: 'Convergence des sommes de Riemann sur [0, 1]',
            formula: '\\lim_{n \\to +\\infty} \\frac{1}{n} \\sum_{k=1}^{n} f\\left(\\frac{k}{n}\\right) = \\lim_{n \\to +\\infty} \\frac{1}{n} \\sum_{k=0}^{n-1} f\\left(\\frac{k}{n}\\right) = \\int_{0}^{1} f(x)\\,dx',
            note: 'Valable pour toute fonction f continue (ou continue par morceaux) sur [0, 1].',
          },
          {
            name: 'Inégalité de Cauchy-Schwarz intégrale',
            formula: '\\left( \\int_a^b f(x)g(x)\\,dx \\right)^2 \\le \\left( \\int_a^b f(x)^2\\,dx \\right) \\left( \\int_a^b g(x)^2\\,dx \\right)',
            note: 'Provenant du produit scalaire canonique sur C([a, b]).',
          },
        ],
        keyRule:
          'Pour reconnaître une somme de Riemann sur $[0, 1]$, factorisez par $\\frac{1}{n}$ hors de la somme afin de faire apparaître une fonction de la variable $\\frac{k}{n}$.',
        workedExample: {
          title: 'Calcul d’une limite de suite à l’aide d’une somme de Riemann',
          statement:
            'Déterminer la limite quand $n \\to +\\infty$ de la suite $S_n = \\sum_{k=1}^{n} \\frac{n}{n^2 + k^2}$.',
          methodSteps: [
            'Factoriser par $n^2$ au dénominateur de chaque terme pour faire apparaître $\\frac{k}{n}$ : $\\frac{n}{n^2 + k^2} = \\frac{n}{n^2(1 + (k/n)^2)} = \\frac{1}{n} \\cdot \\frac{1}{1 + (k/n)^2}$.',
            'Réécrire la somme sous la forme standard : $S_n = \\frac{1}{n} \\sum_{k=1}^{n} f\\left(\\frac{k}{n}\\right)$ avec $f(x) = \\frac{1}{1 + x^2}$.',
            'Comme $f$ est continue sur $[0, 1]$, le théorème des sommes de Riemann donne $\\lim_{n \\to +\\infty} S_n = \\int_0^1 \\frac{1}{1 + x^2}\\,dx$.',
            'Calculer l’intégrale : $[\\arctan x]_0^1 = \\arctan(1) - \\arctan(0) = \\frac{\\pi}{4}$.',
          ],
          conclusion:
            'La suite $(S_n)$ converge et $\\lim_{n \\to +\\infty} \\sum_{k=1}^{n} \\frac{n}{n^2 + k^2} = \\frac{\\pi}{4}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Darboux & Riemann',
            stepTheme: 'blue',
            stepTitle: 'Subdivisions d’un segment, sommes de Darboux et fonctions intégrables',
            paragraphText:
              'Une subdivision $\\sigma = (x_0, x_1, \\dots, x_n)$ du segment $[a, b]$ est une suite finie strictement croissante telle que $a = x_0 < x_1 < \\dots < x_n = b$. Son **pas** est $\\delta(\\sigma) = \\max_{1 \\le k \\le n} (x_k - x_{k-1})$. Pour une fonction bornée $f : [a, b] \\to \\mathbb{R}$, on définit sur chaque sous-intervalle $I_k = [x_{k-1}, x_k]$ la borne inférieure $m_k = \\inf_{I_k} f$ et la borne supérieure $M_k = \\sup_{I_k} f$. La somme de Darboux inférieure est $s(f, \\sigma) = \\sum_{k=1}^n (x_k - x_{k-1})m_k$ et la somme supérieure est $S(f, \\sigma) = \\sum_{k=1}^n (x_k - x_{k-1})M_k$.',
            formula: {
              name: 'Critère d’intégrabilité de Riemann-Darboux',
              formula: '\\sup_{\\sigma} s(f, \\sigma) = \\inf_{\\sigma} S(f, \\sigma) = \\int_a^b f(x)\\,dx',
              note: 'f est Riemann-intégrable ssi pour tout ε > 0, il existe σ telle que S(f, σ) - s(f, σ) < ε.',
            },
            keyRule:
              'Toute fonction continue sur $[a, b]$, ou continue par morceaux sur $[a, b]$, ou monotone sur $[a, b]$, est Riemann-intégrable sur $[a, b]$.',
            konanTip:
              'Contre-exemple classique de cours : la fonction indicatrice des rationnels $\\mathbf{1}_{\\mathbb{Q}}$ sur $[0, 1]$ (fonction de Dirichlet) n’est PAS Riemann-intégrable car sur tout intervalle $m_k = 0$ et $M_k = 1$, donc $s = 0 \\neq S = 1$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p1_ex1',
              type: 'mcq',
              prompt:
                'Sur le segment $[0, 1]$, que valent les sommes de Darboux inférieure $s(f, \\sigma)$ et supérieure $S(f, \\sigma)$ pour la fonction de Dirichlet $f = \\mathbf{1}_{\\mathbb{Q}}$ (qui vaut $1$ sur $\\mathbb{Q}$ et $0$ sur $\\mathbb{R} \\setminus \\mathbb{Q}$) ?',
              options: [
                '$s(f, \\sigma) = 0$ et $S(f, \\sigma) = 1$, donc $f$ n’est pas Riemann-intégrable',
                '$s(f, \\sigma) = 1/2$ et $S(f, \\sigma) = 1/2$, donc $f$ est intégrable d’intégrale $1/2$',
                '$s(f, \\sigma) = 0$ et $S(f, \\sigma) = 0$, donc $f$ est intégrable d’intégrale $0$',
                '$s(f, \\sigma) = 1$ et $S(f, \\sigma) = 1$, donc $f$ est intégrable d’intégrale $1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par densité de $\\mathbb{Q}$ et de $\\mathbb{R} \\setminus \\mathbb{Q}$ dans tout sous-intervalle $[x_{k-1}, x_k]$ de longueur non nulle, on a $m_k = 0$ et $M_k = 1$, d’où $s(f, \\sigma) = 0$ et $S(f, \\sigma) = 1$ : $f$ n’est pas Riemann-intégrable.',
              hint: 'Dans tout intervalle $[x_{k-1}, x_k]$, il y a à la fois des rationnels et des irrationnels.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Sommes de Riemann',
            stepTheme: 'green',
            stepTitle: 'Sommes de Riemann à pas régulier et calcul de limites de suites',
            paragraphText:
              'En subdivisant $[a, b]$ en $n$ sous-intervalles de même longueur $\\frac{b-a}{n}$ avec $x_k = a + k\\frac{b-a}{n}$, on obtient la somme de Riemann régulière $R_n(f) = \\frac{b-a}{n} \\sum_{k=1}^{n} f\\left(a + k\\frac{b-a}{n}\\right)$. Si $f$ est continue (ou continue par morceaux) sur $[a, b]$, alors $\\lim_{n \\to +\\infty} R_n(f) = \\int_a^b f(x)\\,dx$. En particulier, sur $[0, 1]$, toute somme de la forme $\\frac{1}{n}\\sum_{k=1}^n f(k/n)$ converge vers $\\int_0^1 f(x)\\,dx$.',
            formula: {
              name: 'Formule générale des sommes de Riemann sur [a, b]',
              formula: '\\lim_{n \\to +\\infty} \\frac{b-a}{n} \\sum_{k=1}^{n} f\\left(a + k\\frac{b-a}{n}\\right) = \\int_{a}^{b} f(x)\\,dx',
              note: 'Le pas dx est remplacé par (b-a)/n et la variable x par a + k(b-a)/n.',
            },
            keyRule:
              'Pour calculer la limite d’un produit $P_n = \\prod_{k=1}^n u_{n,k}^{1/n}$, prenez d’abord le logarithme $\\ln(P_n) = \\frac{1}{n} \\sum_{k=1}^n \\ln(u_{n,k})$ pour vous ramener à une somme de Riemann !',
            konanTip:
              'Ne confondez pas $\\sum_{k=1}^n \\frac{1}{n+k} = \\frac{1}{n}\\sum_{k=1}^n \\frac{1}{1 + k/n} \\to \\int_0^1 \\frac{dx}{1+x} = \\ln 2$ avec la série harmonique divergente $\\sum_{k=1}^n \\frac{1}{k}$.',
            visualSchema: {
              type: 'bar_chart',
              title: 'Rectangles de Riemann de f(x) = x² sur [0, 1] (n = 5)',
              caption:
                'Approximation de l’aire sous la parabole y = x² sur [0, 1] par 5 rectangles de largeur 1/5 et de hauteur (k/5)².',
              barChart: {
                yLabel: 'f(k/5) = (k/5)²',
                unit: '',
                bars: [
                  { label: 'k=1 (0.2)', value: 0.04, color: 'blue', annotation: '1/25' },
                  { label: 'k=2 (0.4)', value: 0.16, color: 'blue', annotation: '4/25' },
                  { label: 'k=3 (0.6)', value: 0.36, color: 'violet', annotation: '9/25' },
                  { label: 'k=4 (0.8)', value: 0.64, color: 'violet', annotation: '16/25' },
                  { label: 'k=5 (1.0)', value: 1.0, color: 'green', annotation: '25/25' },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p1_ex2',
              type: 'mcq',
              prompt:
                'Quelle est la limite lorsque $n \\to +\\infty$ de la suite $u_n = \\sum_{k=1}^{n} \\frac{1}{n + k}$ ?',
              options: [
                '$\\ln(2)$',
                '$1$',
                '$+\\infty$',
                '$\\frac{\\pi}{4}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En mettant $n$ en facteur au dénominateur : $u_n = \\frac{1}{n}\\sum_{k=1}^n \\frac{1}{1 + k/n}$. C’est une somme de Riemann de $f(x) = \\frac{1}{1+x}$ sur $[0, 1]$, qui converge vers $\\int_0^1 \\frac{dx}{1+x} = [\\ln(1+x)]_0^1 = \\ln(2)$.',
              hint: 'Écrivez $\\frac{1}{n+k} = \\frac{1}{n} \\cdot \\frac{1}{1 + k/n}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Propriétés & Moyenne',
            stepTheme: 'violet',
            stepTitle: 'Linéarité, relation de Chasles, stricte positivité et valeur moyenne',
            paragraphText:
              'L’intégrale de Riemann est linéaire, vérifie la relation de Chasles $\\int_a^c f + \\int_c^b f = \\int_a^b f$, et respecte la positivité : si $a \\le b$ et $f \\ge 0$ sur $[a, b]$, alors $\\int_a^b f(x)\\,dx \\ge 0$, d’où l’inégalité triangulaire $|\\int_a^b f(x)\\,dx| \\le \\int_a^b |f(x)|\\,dx$. Un théorème fondamental de stricte positivité stipule que si $f$ est **continue**, positive ($f \\ge 0$) sur $[a, b]$ ($a < b$) et que $\\int_a^b f(x)\\,dx = 0$, alors $f$ est identiquement nulle sur $[a, b]$. Enfin, le théorème de la moyenne assure l’existence de $c \\in [a, b]$ tel que $f(c) = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.',
            formula: {
              name: 'Valeur moyenne d’une fonction continue sur [a, b]',
              formula: '\\mu = \\frac{1}{b - a} \\int_{a}^{b} f(x)\\,dx = f(c) \\quad (\\exists c \\in [a, b])',
              note: 'Attention : dans |∫_a^b f| ≤ ∫_a^b |f|, il faut impérativement que a ≤ b.',
            },
            keyRule:
              'Pour une fonction **continue** et positive sur $[a, b]$ ($a < b$) : $\\int_a^b f(x)\\,dx = 0 \\iff \\forall x \\in [a, b],\\; f(x) = 0$.',
            konanTip:
              'Si $f$ est seulement continue par morceaux (et non continue), $\\int_a^b f = 0$ avec $f \\ge 0$ n’implique PAS que $f = 0$ partout : $f$ peut être non nulle en un nombre fini de points isolés !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p1_ex3',
              type: 'mcq',
              prompt:
                'Soit $f : [0, 1] \\to \\mathbb{R}$ une fonction **continue** telle que $\\forall x \\in [0, 1],\\; f(x) \\ge 0$. Sous quelle condition a-t-on $\\int_0^1 f(x)\\,dx = 0$ ?',
              options: [
                'Si et seulement si $f(x) = 0$ pour tout $x \\in [0, 1]$',
                'Dès que $f(0) = f(1) = 0$',
                'Dès que $f$ s’annule en au moins un point $c \\in [0, 1]$',
                'Uniquement si $f$ est strictement décroissante sur $[0, 1]$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D’après le théorème de stricte positivité de l’intégrale d’une fonction continue et positive sur un segment $[a, b]$ ($a < b$), son intégrale est nulle si et seulement si la fonction est identiquement nulle sur tout le segment.',
              hint: 'Si une fonction continue positive était strictement positive en un point $x_0$, elle le resterait sur tout un voisinage de $x_0$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Théorème Fondamental',
            stepTheme: 'violet',
            stepTitle: 'Théorème Fondamental de l’Analyse et dérivation sous bornes variables',
            paragraphText:
              'Soit $f : I \\to \\mathbb{R}$ une fonction continue sur un intervalle $I$ et $a \\in I$. Le théorème fondamental de l’analyse affirme que la fonction $F(x) = \\int_a^x f(t)\\,dt$ est l’unique primitive de $f$ sur $I$ qui s’annule en $a$ : elle est de classe $\\mathcal{C}^1$ sur $I$ et $\\forall x \\in I,\\; F\'(x) = f(x)$. Plus généralement, si $u$ et $v$ sont deux fonctions dérivables à valeurs dans $I$, la fonction $G(x) = \\int_{u(x)}^{v(x)} f(t)\\,dt$ est dérivable et sa dérivée s’obtient par composition avec la règle de la chaîne.',
            formula: {
              name: 'Dérivée d’une intégrale à bornes variables',
              formula: '\\frac{d}{dx}\\left( \\int_{u(x)}^{v(x)} f(t)\\,dt \\right) = v\'(x) f\\big(v(x)\\big) - u\'(x) f\\big(u(x)\\big)',
              note: 'En effet, G(x) = F(v(x)) - F(u(x)) avec F\' = f.',
            },
            keyRule:
              'Pour dériver $G(x) = \\int_{u(x)}^{v(x)} f(t)\\,dt$, on n’a PAS besoin de calculer une primitive explicite de $f$ : on applique directement $v\'(x)f(v(x)) - u\'(x)f(u(x))$ !',
            konanTip:
              'N’oubliez jamais de multiplier par les dérivées des bornes $v\'(x)$ et $u\'(x)$ ! C’est l’oubli le plus fréquent lorsque la borne supérieure est $x^2$ ou $2x$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p1_ex4',
              type: 'mcq',
              prompt:
                'Soit $G(x) = \\int_{x}^{x^2} e^{-t^2}\\,dt$ définie sur $\\mathbb{R}$. Quelle est l’expression de sa dérivée $G\'(x)$ ?',
              options: [
                '$2x e^{-x^4} - e^{-x^2}$',
                '$e^{-x^4} - e^{-x^2}$',
                '$2x e^{-x^2} - e^{-x}$',
                '$-2x^3 e^{-x^4} + 2x e^{-x^2}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec $f(t) = e^{-t^2}$, $u(x) = x$ ($u\'(x) = 1$) et $v(x) = x^2$ ($v\'(x) = 2x$), la formule $G\'(x) = v\'(x)f(v(x)) - u\'(x)f(u(x))$ donne directement $G\'(x) = 2x e^{-(x^2)^2} - 1 \\cdot e^{-x^2} = 2x e^{-x^4} - e^{-x^2}$.',
              hint: 'Appliquez $v\'(x)f(v(x)) - u\'(x)f(u(x))$ avec $v(x) = x^2$ et $u(x) = x$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Intégration par Parties',
            stepTheme: 'green',
            stepTitle: 'Intégration par Parties (IPP) et règle mnémotechnique ALPES',
            paragraphText:
              'Soient $u$ et $v$ deux fonctions de classe $\\mathcal{C}^1$ sur $[a, b]$. La formule de dérivation d’un produit $(uv)\' = u\'v + uv\'$ donne par intégration la formule d’intégration par parties (IPP). Pour choisir quelle fonction dériver ($u$) et quelle fonction primitiver ($v\'$) dans le produit de deux fonctions de natures différentes, on utilise la hiérarchie **ALPES** : **A**rcsin/Arctan, **L**ogarithme, **P**olynôme, **E**xponentielle, **S**inus/Cosinus. On choisit $u$ (à dériver) en premier dans l’ordre ALPES.',
            formula: {
              name: 'Formule d’Intégration Par Parties (IPP)',
              formula: '\\int_{a}^{b} u(x)v\'(x)\\,dx = \\Big[ u(x)v(x) \\Big]_{a}^{b} - \\int_{a}^{b} u\'(x)v(x)\\,dx',
              note: 'Règle ALPES : on dérive la fonction située le plus à gauche dans A - L - P - E - S.',
            },
            keyRule:
              'Pour intégrer $\\ln(x)$, $\\arctan(x)$ ou $\\arcsin(x)$ seuls, posez $u(x) = \\text{la fonction}$ et $v\'(x) = 1$ (donc $v(x) = x$).',
            konanTip:
              'Face à $\\int P(x) e^{\\alpha x} dx$ ou $\\int P(x) \\cos(\\alpha x) dx$, on dérive le polynôme $P(x)$ (P avant E et S dans ALPES) ; face à $\\int P(x) \\ln(x) dx$, on dérive $\\ln(x)$ et on primitive le polynôme $P(x)$ (L avant P dans ALPES) !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p1_ex5',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de l’intégrale $I = \\int_{1}^{e} x \\ln(x)\\,dx$ calculée par intégration par parties ?',
              options: [
                '$\\frac{e^2 + 1}{4}$',
                '$\\frac{e^2 - 1}{4}$',
                '$\\frac{e^2}{2}$',
                '$\\frac{e^2 + 1}{2}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En posant $u(x) = \\ln x$ ($u\'(x) = 1/x$) et $v\'(x) = x$ ($v(x) = x^2/2$), on a $I = \\left[\\frac{x^2}{2}\\ln x\\right]_1^e - \\int_1^e \\frac{x}{2}\\,dx = \\frac{e^2}{2} - \\left[\\frac{x^2}{4}\\right]_1^e = \\frac{e^2}{2} - \\frac{e^2 - 1}{4} = \\frac{e^2 + 1}{4}$.',
              hint: 'Posez $u(x) = \\ln x$ et $v\'(x) = x$, donc $v(x) = \\frac{x^2}{2}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Changement de variable',
            stepTheme: 'green',
            stepTitle: 'Théorème de changement de variable dans une intégrale définie',
            paragraphText:
              'Soit $\\varphi : [\\alpha, \\beta] \\to [a, b]$ une fonction de classe $\\mathcal{C}^1$ et $f$ une fonction continue sur $[a, b]$. En posant $x = \\varphi(t)$, l’élément différentiel se transforme selon $dx = \\varphi\'(t)\\,dt$ et les bornes d’intégration $x = \\varphi(\\alpha)$ et $x = \\varphi(\\beta)$ deviennent $t = \\alpha$ et $t = \\beta$. Pour un calcul d’intégrale définie sur un segment, on transforme simultanément la fonction, l’élément différentiel $dx$ et les **bornes**, ce qui dispense de revenir à la variable initiale !',
            formula: {
              name: 'Formule de changement de variable',
              formula: '\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(x)\\,dx = \\int_{\\alpha}^{\\beta} f\\big(\\varphi(t)\\big)\\,\\varphi\'(t)\\,dt',
              note: 'Pour une fonction paire sur [-a, a] : ∫_{-a}^a f = 2∫_0^a f. Pour une fonction impaire : ∫_{-a}^a f = 0.',
            },
            keyRule:
              'Lors d’un changement de variable dans une intégrale définie, changez immédiatement les bornes et n’oubliez jamais le facteur différentiel $dx = \\varphi\'(t)\\,dt$.',
            konanTip:
              'Pour calculer $\\int_0^a \\sqrt{a^2 - x^2}\\,dx$, posez $x = a\\sin t$ avec $t \\in [0, \\pi/2]$ : alors $dx = a\\cos t\\,dt$ et $\\sqrt{a^2 - x^2} = a\\cos t$, ce qui donne $a^2 \\int_0^{\\pi/2} \\cos^2 t\\,dt = \\frac{\\pi a^2}{4}$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p1_ex6',
              type: 'mcq',
              prompt:
                'En effectuant le changement de variable $u = e^x$ ($du = e^x\\,dx$), quelle est la valeur de l’intégrale $I = \\int_{0}^{\\ln 3} \\frac{e^x}{1 + e^{2x}}\\,dx$ ?',
              options: [
                '$\\arctan(3) - \\frac{\\pi}{4}$',
                '$\\frac{1}{2}\\ln(5)$',
                '$\\arctan(\\ln 3)$',
                '$\\frac{\\pi}{3} - \\frac{\\pi}{4}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En posant $u = e^x$, on a $du = e^x\\,dx$. Pour $x = 0$, $u = 1$ ; pour $x = \\ln 3$, $u = 3$. Ainsi $I = \\int_1^3 \\frac{du}{1 + u^2} = [\\arctan u]_1^3 = \\arctan(3) - \\arctan(1) = \\arctan(3) - \\frac{\\pi}{4}$.',
              hint: 'Remplacez $e^x dx$ par $du$, $e^{2x}$ par $u^2$, et transformez les bornes $0 \\mapsto e^0 = 1$ et $\\ln 3 \\mapsto e^{\\ln 3} = 3$.',
            },
          },
        ],
      }),

      // ------------------------------------------------------------------------
      // Point 2.2 : Primitives de fractions rationnelles (Éléments simples)
      // ------------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_analyse2_ch2_p2',
        order: 2,
        title: 'Intégration des Fractions Rationnelles par Décomposition en Éléments Simples',
        summary:
          'Partie entière par division euclidienne, décomposition en éléments simples sur R, primitivation des éléments de première et de deuxième espèce.',
        conceptExplanation:
          'Toute fraction rationnelle $F(x) = \\frac{P(x)}{Q(x)}$ à coefficients réels peut être intégrée explicitement à l’aide des fonctions élémentaires (polynômes, fractions, logarithmes et arctangentes). La méthode canonique repose sur la Décomposition en Éléments Simples (DES) dans $\\mathbb{R}(X)$ : après extraction éventuelle de la partie entière polynomiale $E(x)$ (si $\\deg P \\ge \\deg Q$), on factorise le dénominateur $Q(x)$ en facteurs irréductibles du premier degré $(x - a)^m$ et du second degré $(x^2 + px + q)^n$ avec $\\Delta = p^2 - 4q < 0$.',
        formulas: [
          {
            name: 'Primitives des éléments simples de 1ère espèce',
            formula: '\\int \\frac{dx}{x - a} = \\ln|x - a| + C, \\quad \\int \\frac{dx}{(x - a)^m} = \\frac{-1}{(m-1)(x - a)^{m-1}} + C \\; (m \\ge 2)',
            note: 'Ne jamais oublier la valeur absolue dans ln|x - a|.',
          },
          {
            name: 'Primitive canonique conduisant à arctan',
            formula: '\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a} \\arctan\\left(\\frac{x}{a}\\right) + C \\quad (a > 0)',
            note: 'Tout trinôme x^2 + px + q avec Δ < 0 se ramène à u^2 + a^2 par mise sous forme canonique.',
          },
        ],
        keyRule:
          'Avant toute décomposition en éléments simples de $\\frac{P(x)}{Q(x)}$, vérifiez toujours que $\\deg P < \\deg Q$ ; sinon, effectuez d’abord la division euclidienne de $P$ par $Q$ !',
        workedExample: {
          title: 'Intégration d’une fraction rationnelle à pôles simples',
          statement:
            'Calculer $I = \\int_{2}^{3} \\frac{2}{x^2 - 1}\\,dx$.',
          methodSteps: [
            'Factoriser le dénominateur : $x^2 - 1 = (x - 1)(x + 1)$ et vérifier que $\\deg(2) = 0 < \\deg(x^2-1) = 2$.',
            'Poser la DES : $\\frac{2}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$.',
            'Par la méthode du cache : $A = \\left.\\frac{2}{x+1}\\right|_{x=1} = 1$ et $B = \\left.\\frac{2}{x-1}\\right|_{x=-1} = -1$.',
            'Intégrer terme à terme : $I = \\int_2^3 \\left(\\frac{1}{x-1} - \\frac{1}{x+1}\\right)dx = \\left[\\ln\\left|\\frac{x-1}{x+1}\\right|\\right]_2^3$.',
          ],
          conclusion:
            '$I = \\ln\\left(\\frac{2}{4}\\right) - \\ln\\left(\\frac{1}{3}\\right) = \\ln\\left(\\frac{1}{2}\\right) - \\ln\\left(\\frac{1}{3}\\right) = \\ln\\left(\\frac{3}{2}\\right)$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Partie entière',
            stepTheme: 'green',
            stepTitle: 'Étape préliminaire obligatoire : extraction de la partie entière E(x)',
            paragraphText:
              'Soit $F(x) = \\frac{P(x)}{Q(x)}$ une fraction rationnelle. Si $\\deg P \\ge \\deg Q$, la fraction n’est pas propre : on doit impérativement effectuer la **division euclidienne** du polynôme $P(x)$ par $Q(x)$ suivant les puissances décroissantes : $P(x) = E(x)Q(x) + R(x)$ avec $\\deg R < \\deg Q$. On obtient ainsi $F(x) = E(x) + \\frac{R(x)}{Q(x)}$, où le polynôme $E(x)$ est appelé la **partie entière** de la fraction rationnelle et s’intègre immédiatement terme à terme.',
            formula: {
              name: 'Décomposition en partie entière + fraction propre',
              formula: '\\frac{P(x)}{Q(x)} = E(x) + \\frac{R(x)}{Q(x)} \\quad \\text{avec } \\deg R < \\deg Q',
              note: 'Si deg P < deg Q dès le départ, la partie entière est nulle : E(x) = 0.',
            },
            keyRule:
              'Poser une décomposition en éléments simples sans partie entière alors que $\\deg P \\ge \\deg Q$ conduit à un système faux et impossible à résoudre !',
            konanTip:
              'Pour une division simple comme $\\frac{x^2}{x^2 + 1}$, nul besoin de poser la potence : faites apparaître le dénominateur au numérateur en écrivant $\\frac{(x^2 + 1) - 1}{x^2 + 1} = 1 - \\frac{1}{x^2 + 1}$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p2_ex1',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de l’intégrale $I = \\int_{0}^{1} \\frac{x^2}{x^2 + 1}\\,dx$ ?',
              options: [
                '$1 - \\frac{\\pi}{4}$',
                '$\\frac{\\pi}{4}$',
                '$\\frac{1}{2}\\ln(2)$',
                '$1 + \\frac{\\pi}{4}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $\\deg(x^2) = \\deg(x^2+1) = 2$, on extrait la partie entière : $\\frac{x^2}{x^2+1} = \\frac{x^2+1-1}{x^2+1} = 1 - \\frac{1}{x^2+1}$. En intégrant entre $0$ et $1$, on obtient $[x - \\arctan x]_0^1 = 1 - \\frac{\\pi}{4}$.',
              hint: 'Écrivez $\\frac{x^2}{x^2+1} = 1 - \\frac{1}{x^2+1}$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Structure de la DES',
            stepTheme: 'violet',
            stepTitle: 'Théorème de Décomposition en Éléments Simples (DES) dans ℝ(X)',
            paragraphText:
              'Dans $\\mathbb{R}[X]$, tout polynôme non constant $Q(x)$ se factorise en produit de facteurs du premier degré $(x - a_i)^{m_i}$ et de trinômes du second degré irréductibles $(x^2 + p_j x + q_j)^{n_j}$ à discriminant strictement négatif ($\\Delta_j = p_j^2 - 4q_j < 0$). À chaque facteur $(x - a)^m$ correspondent $m$ éléments simples de **première espèce** à numérateurs constants $\\frac{A_k}{(x-a)^k}$ ($1 \\le k \\le m$). À chaque facteur irréductible $(x^2 + px + q)^n$ correspondent $n$ éléments simples de **deuxième espèce** à numérateurs affines $\\frac{B_k x + C_k}{(x^2 + px + q)^k}$ ($1 \\le k \\le n$).',
            formula: {
              name: 'Éléments simples de 1ère et 2ème espèce sur R',
              formula: '\\sum_{k=1}^{m} \\frac{A_k}{(x - a)^k} \\quad \\text{et} \\quad \\sum_{k=1}^{n} \\frac{B_k x + C_k}{(x^2 + px + q)^k} \\; (\\Delta < 0)',
              note: 'A_k, B_k, C_k sont des constantes réelles uniques.',
            },
            keyRule:
              'Un pôle multiple d’ordre $m$, soit $(x-a)^m$, génère $m$ fractions avec toutes les puissances intermédiaires : $\\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \\cdots + \\frac{A_m}{(x-a)^m}$.',
            konanTip:
              'Ne mettez JAMAIS une simple constante $\\frac{C}{x^2 + px + q}$ au-dessus d’un facteur irréductible de degré 2 : le numérateur doit toujours être de degré $\\le 1$, donc de la forme $Bx + C$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p2_ex2',
              type: 'mcq',
              prompt:
                'Quelle est la forme théorique exacte de la décomposition en éléments simples sur $\\mathbb{R}$ de la fraction $F(x) = \\frac{1}{(x-1)^2(x^2+1)}$ ?',
              options: [
                '$\\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{Cx + D}{x^2+1}$',
                '$\\frac{A}{(x-1)^2} + \\frac{Cx + D}{x^2+1}$',
                '$\\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{x^2+1}$',
                '$\\frac{Ax + B}{(x-1)^2} + \\frac{C}{x^2+1}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le pôle double $x = 1$ génère deux éléments de 1ère espèce $\\frac{A}{x-1} + \\frac{B}{(x-1)^2}$, et le facteur irréductible $x^2 + 1$ ($\\Delta = -4 < 0$) génère un élément de 2ème espèce $\\frac{Cx + D}{x^2+1}$.',
              hint: 'Un pôle double $(x-1)^2$ nécessite à la fois un terme en $(x-1)$ et un terme en $(x-1)^2$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul des coefficients',
            stepTheme: 'green',
            stepTitle: 'Techniques rapides d’identification : méthode du cache, parité et limite x·F(x)',
            paragraphText:
              'Pour déterminer efficacement les coefficients d’une DES sans résoudre un système linéaire lourd, on combine quatre techniques : (1) **La méthode du cache (multiplication-évaluation)** : pour trouver le coefficient $A_m$ de la plus haute puissance $\\frac{A_m}{(x-a)^m}$, on multiplie l’égalité par $(x-a)^m$ et on évalue en $x = a$ ; (2) **La limite en $\\infty$** : on multiplie par $x$ et on fait tendre $x \\to +\\infty$ ; (3) **La parité** de $F(-x)$ si la fraction est paire ou impaire ; (4) **L’évaluation en une valeur particulière** comme $x = 0$.',
            formula: {
              name: 'Formule du cache pour un pôle simple a',
              formula: 'F(x) = \\frac{P(x)}{(x - a)Q_1(x)} \\quad (Q_1(a) \\neq 0) \\implies A = \\lim_{x \\to a} (x - a)F(x) = \\frac{P(a)}{Q_1(a)}',
              note: 'Pour un pôle multiple d’ordre m, cette méthode donne directement le coefficient A_m de (x-a)^m.',
            },
            keyRule:
              'La méthode du cache donne instantanément tous les coefficients des pôles simples ainsi que le coefficient de plus haut degré de chaque pôle multiple.',
            konanTip:
              'Astuce en or : en multipliant $F(x)$ par $x$ et en prenant la limite quand $x \\to +\\infty$, vous obtenez une relation linéaire immédiate entre les coefficients des termes en $\\frac{A_i}{x - a_i}$ et $\\frac{B_j x + C_j}{x^2 + p_j x + q_j}$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p2_ex3',
              type: 'mcq',
              prompt:
                'Dans la décomposition $\\frac{3x + 1}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$, quelles sont les valeurs de $A$ et $B$ obtenues par la méthode du cache ?',
              options: [
                '$A = \\frac{4}{3}$ et $B = \\frac{5}{3}$',
                '$A = 1$ et $B = 2$',
                '$A = \\frac{4}{3}$ et $B = -\\frac{5}{3}$',
                '$A = 2$ et $B = 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En cachant $(x-1)$ et en évaluant en $x = 1$ : $A = \\frac{3(1)+1}{1+2} = \\frac{4}{3}$. En cachant $(x+2)$ et en évaluant en $x = -2$ : $B = \\frac{3(-2)+1}{-2-1} = \\frac{-5}{-3} = \\frac{5}{3}$.',
              hint: 'Calculez $A = \\left.\\frac{3x+1}{x+2}\\right|_{x=1}$ et $B = \\left.\\frac{3x+1}{x-1}\\right|_{x=-2}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: '1ère espèce',
            stepTheme: 'green',
            stepTitle: 'Primitivation des éléments simples de première espèce',
            paragraphText:
              'Une fois la décomposition en éléments simples effectuée, l’intégration des éléments de première espèce est immédiate. L’élément d’ordre 1, $\\frac{A}{x - a}$, s’intègre en $A\\ln|x - a|$ sur tout intervalle ne contenant pas le pôle $a$. Pour un élément d’ordre $m \\ge 2$, $\\frac{A}{(x - a)^m} = A(x - a)^{-m}$, il s’agit d’une simple puissance $u^{-m}$ dont une primitive est $\\frac{A}{-m+1}(x - a)^{-m+1} = \\frac{-A}{(m-1)(x - a)^{m-1}}$.',
            formula: {
              name: 'Primitives des éléments de 1ère espèce (m = 1 et m ≥ 2)',
              formula: '\\int \\frac{A}{x - a}\\,dx = A\\ln|x - a| + C, \\quad \\int \\frac{A}{(x - a)^2}\\,dx = -\\frac{A}{x - a} + C',
              note: 'Un élément d’ordre m ≥ 2 ne donne JAMAIS de logarithme, mais une fraction rationnelle d’ordre m - 1.',
            },
            keyRule:
              'Seuls les termes de degré $1$ au dénominateur $\\frac{A}{x - a}$ produisent un logarithme $\\ln|x - a|$ ; les puissances $(x-a)^m$ avec $m \\ge 2$ donnent des fractions $\\frac{-A}{(m-1)(x-a)^{m-1}}$.',
            konanTip:
              'Vérifiez toujours votre signe en dérivant mentalement : la dérivée de $-\\frac{1}{x-a}$ est bien $+\\frac{1}{(x-a)^2}$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p2_ex4',
              type: 'mcq',
              prompt:
                'Quelle est une primitive sur $]1, +\\infty[$ de la fonction $f(x) = \\frac{2}{x - 1} + \\frac{3}{(x - 1)^2}$ ?',
              options: [
                '$2\\ln(x - 1) - \\frac{3}{x - 1}$',
                '$2\\ln(x - 1) + \\frac{3}{x - 1}$',
                '$2\\ln(x - 1) + 3\\ln((x - 1)^2)$',
                '$-\\frac{2}{(x - 1)^2} - \\frac{3}{x - 1}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sur $]1, +\\infty[$, une primitive de $\\frac{2}{x-1}$ est $2\\ln(x-1)$ et une primitive de $3(x-1)^{-2}$ est $-3(x-1)^{-1} = -\\frac{3}{x-1}$.',
              hint: 'La primitive de $\\frac{1}{(x-1)^2}$ est $-\\frac{1}{x-1}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: '2ème espèce',
            stepTheme: 'green',
            stepTitle: 'Primitivation des éléments simples de deuxième espèce (ln + arctan)',
            paragraphText:
              'Pour intégrer un élément simple de deuxième espèce $I = \\int \\frac{Bx + C}{x^2 + px + q}\\,dx$ avec $\\Delta = p^2 - 4q < 0$, on procède en deux étapes systématiques : (1) **Faire apparaître la dérivée du dénominateur** $2x + p$ au numérateur pour obtenir une forme $\\frac{u\'}{u}$ qui s’intègre en $\\ln(x^2 + px + q)$ ; (2) **Mettre le dénominateur sous forme canonique** $(x + \\frac{p}{2})^2 + \\omega^2$ pour intégrer la constante restante en $\\frac{1}{\\omega}\\arctan\\left(\\frac{x + p/2}{\\omega}\\right)$.',
            formula: {
              name: 'Décomposition en dérivée logarithmique + forme canonique',
              formula: '\\frac{Bx + C}{x^2 + px + q} = \\frac{B}{2} \\cdot \\frac{2x + p}{x^2 + px + q} + \\frac{C - Bp/2}{\\left(x + \\frac{p}{2}\\right)^2 + \\omega^2}',
              note: 'Le premier terme s’intègre en (B/2) ln(x^2 + px + q) et le second en ((C - Bp/2)/ω) arctan((x + p/2)/ω).',
            },
            keyRule:
              'Séparez toujours $\\frac{Bx + C}{x^2 + px + q}$ en une partie proportionnelle à $2x + p$ (qui donne un $\\ln$) et une constante résiduelle (qui donne un $\\arctan$).',
            konanTip:
              'Comme $\\Delta < 0$, le trinôme $x^2 + px + q$ est strictement positif sur $\\mathbb{R}$ tout entier : la valeur absolue dans $\\ln(x^2 + px + q)$ est donc toujours inutile !',
            visualSchema: {
              type: 'flowchart',
              title: 'Pipeline d’intégration d’une fraction rationnelle P(x)/Q(x)',
              caption: 'Les 4 étapes canoniques pour intégrer toute fraction rationnelle réelle.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    id: 'p1',
                    label: '1. Comparer deg(P) et deg(Q)',
                    sublabel: 'Si deg(P) ≥ deg(Q), division euclidienne → Partie entière E(x)',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    id: 'p2',
                    label: '2. Factoriser Q(x) dans ℝ[X]',
                    sublabel: 'Facteurs (x - a)^m et (x² + px + q)^n avec Δ < 0',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    id: 'p3',
                    label: '3. Identifier les coefficients de la DES',
                    sublabel: 'Méthode du cache, limite de x·F(x), parité, valeurs particulières',
                    kind: 'process',
                    color: 'orange',
                  },
                  {
                    id: 'p4',
                    label: '4. Primitiver chaque élément simple',
                    sublabel: '1ère espèce → ln|x-a| ou -1/((m-1)(x-a)^{m-1}) ; 2ème espèce → ln + arctan',
                    kind: 'end',
                    color: 'green',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p2_ex5',
              type: 'mcq',
              prompt:
                'Quelle est une primitive sur $\\mathbb{R}$ de l’élément simple de deuxième espèce $f(x) = \\frac{2x + 3}{x^2 + 1}$ ?',
              options: [
                '$\\ln(x^2 + 1) + 3\\arctan(x)$',
                '$2\\ln(x^2 + 1) + 3\\arctan(x)$',
                '$\\ln(x^2 + 1) + \\frac{3}{2}\\arctan(x)$',
                '$5\\arctan(x)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On sépare le numérateur : $\\frac{2x + 3}{x^2 + 1} = \\frac{2x}{x^2 + 1} + \\frac{3}{x^2 + 1}$. Le premier terme est de la forme $\\frac{u\'}{u}$ de primitive $\\ln(x^2 + 1)$, et le second a pour primitive $3\\arctan(x)$.',
              hint: 'Séparez la fraction en $\\frac{2x}{x^2+1} + \\frac{3}{x^2+1}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Forme canonique',
            stepTheme: 'slate',
            stepTitle: 'Intégration de 1/(x² + px + q) par mise sous forme canonique',
            paragraphText:
              'Lorsque le dénominateur est un trinôme irréductible $x^2 + px + q$ avec $p \\neq 0$ et $\\Delta < 0$, il suffit de compléter le carré : $x^2 + px + q = \\left(x + \\frac{p}{2}\\right)^2 + \\left(q - \\frac{p^2}{4}\\right) = u^2 + a^2$ où $u = x + \\frac{p}{2}$ ($du = dx$) et $a = \\sqrt{q - \\frac{p^2}{4}} > 0$. On applique alors directement la formule $\\int \\frac{du}{u^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{u}{a}\\right) + C$.',
            formula: {
              name: 'Mise sous forme canonique et primitive en arctan',
              formula: '\\int \\frac{dx}{(x - x_0)^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x - x_0}{a}\\right) + C \\quad (a > 0)',
              note: 'Ne jamais oublier le facteur 1/a devant arctan((x - x_0)/a) !',
            },
            keyRule:
              'N’oubliez jamais le coefficient $\\frac{1}{a}$ devant $\\arctan\\left(\\frac{u}{a}\\right)$ lorsque vous intégrez $\\frac{1}{u^2 + a^2}$.',
            konanTip:
              'Exemple ultra-classique : $x^2 + 2x + 5 = (x + 1)^2 + 4 = (x + 1)^2 + 2^2$. Ici $a = 2$, donc une primitive de $\\frac{1}{x^2 + 2x + 5}$ est $\\frac{1}{2}\\arctan\\left(\\frac{x+1}{2}\\right)$.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p2_ex6',
              type: 'mcq',
              prompt:
                'Quelle est une primitive sur $\\mathbb{R}$ de la fonction $f(x) = \\frac{1}{x^2 + 2x + 5}$ ?',
              options: [
                '$\\frac{1}{2}\\arctan\\left(\\frac{x + 1}{2}\\right)$',
                '$\\arctan\\left(\\frac{x + 1}{2}\\right)$',
                '$\\frac{1}{4}\\arctan\\left(\\frac{x + 1}{4}\\right)$',
                '$\\frac{1}{2}\\ln(x^2 + 2x + 5)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La forme canonique est $x^2 + 2x + 5 = (x + 1)^2 + 2^2$. Avec $u = x + 1$ et $a = 2$, la formule $\\frac{1}{a}\\arctan\\left(\\frac{u}{a}\\right)$ donne $\\frac{1}{2}\\arctan\\left(\\frac{x+1}{2}\\right)$.',
              hint: 'Écrivez $x^2 + 2x + 5 = (x+1)^2 + 2^2$ et appliquez $\\frac{1}{a}\\arctan(u/a)$ avec $a = 2$.',
            },
          },
        ],
      }),

      // ------------------------------------------------------------------------
      // Point 2.3 : Intégration des fonctions trigonométriques et radicaux
      // ------------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_analyse2_ch2_p3',
        order: 3,
        title: 'Intégration des Polynômes et Fractions Trigonométriques (Bioche & Linéarisation)',
        summary:
          'Polynômes en sin^p(x)cos^q(x), linéarisation d’Euler, règles de Bioche pour les fractions rationnelles en sin(x) et cos(x), changement de variable t = tan(x/2).',
        conceptExplanation:
          'Pour intégrer une expression trigonométrique $f(x) = R(\\cos x, \\sin x)$, choisir le bon changement de variable évite des calculs inextricables. Pour un polynôme trigonométrique $\\sin^p x \\cos^q x$, un exposant impair permet un changement immédiat ($u = \\sin x$ ou $u = \\cos x$), tandis que deux exposants pairs appellent la linéarisation. Pour une fraction rationnelle en $\\sin x$ et $\\cos x$, les **règles de Bioche** testent l’invariance de l’élément différentiel $\\omega(x) = f(x)\\,dx$ par les transformations $-x$, $\\pi - x$ et $\\pi + x$.',
        formulas: [
          {
            name: 'Formules de linéarisation du second degré',
            formula: '\\cos^2 x = \\frac{1 + \\cos(2x)}{2}, \\quad \\sin^2 x = \\frac{1 - \\cos(2x)}{2}, \\quad \\sin x \\cos x = \\frac{\\sin(2x)}{2}',
            note: 'Indispensables dès que les exposants p et q sont tous les deux pairs.',
          },
          {
            name: 'Formules de l’arc moitié avec t = tan(x/2)',
            formula: '\\cos x = \\frac{1 - t^2}{1 + t^2}, \\quad \\sin x = \\frac{2t}{1 + t^2}, \\quad dx = \\frac{2\\,dt}{1 + t^2}',
            note: 'Changement de variable universel sur ]-π, π[ lorsque les règles de Bioche échouent.',
          },
        ],
        keyRule:
          'Règles de Bioche : on teste l’invariance de $\\omega(x) = f(x)\\,dx$ (en incluant le signe de $dx$ !). Si $\\omega(-x) = \\omega(x) \\implies u = \\cos x$ ; si $\\omega(\\pi-x) = \\omega(x) \\implies u = \\sin x$ ; si $\\omega(\\pi+x) = \\omega(x) \\implies u = \\tan x$.',
        workedExample: {
          title: 'Intégration d’un monôme trigonométrique à exposant impair',
          statement:
            'Calculer $I = \\int_{0}^{\\pi/2} \\sin^2(x) \\cos^3(x)\\,dx$.',
          methodSteps: [
            'Repérer que l’exposant de $\\cos x$ est impair ($q = 3$) : l’élément différentiel $\\omega(x) = \\sin^2 x \\cos^3 x\\,dx$ est invariant par $x \\mapsto \\pi - x$.',
            'Poser le changement de variable $u = \\sin x$, d’où $du = \\cos x\\,dx$ et $\\cos^2 x = 1 - \\sin^2 x = 1 - u^2$.',
            'Transformer les bornes : pour $x = 0$, $u = 0$ ; pour $x = \\pi/2$, $u = 1$.',
            'Calculer l’intégrale polynomiale : $I = \\int_0^1 u^2(1 - u^2)\\,du = \\left[\\frac{u^3}{3} - \\frac{u^5}{5}\\right]_0^1 = \\frac{1}{3} - \\frac{1}{5}$.',
          ],
          conclusion:
            '$I = \\frac{2}{15}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Exposant impair',
            stepTheme: 'green',
            stepTitle: 'Intégration de sin^p(x)·cos^q(x) lorsqu’au moins un exposant est impair',
            paragraphText:
              'Pour intégrer $I = \\int \\sin^p(x)\\cos^q(x)\\,dx$ où au moins l’un des entiers $p$ ou $q$ est **impair**, on n’utilise PAS les formules d’Euler (trop longues) : on isole un facteur de la fonction qui a l’exposant impair pour former l’élément différentiel $du$, et on convertit le reste à l’aide de $\\cos^2 x + \\sin^2 x = 1$. Plus précisément : si $q = 2k+1$ (exposant de $\\cos x$ impair), on pose $u = \\sin x$ ($du = \\cos x\\,dx$) ; si $p = 2k+1$ (exposant de $\\sin x$ impair), on pose $u = \\cos x$ ($du = -\\sin x\\,dx$).',
            formula: {
              name: 'Réduction polynomiale lorsque q = 2k + 1 est impair',
              formula: '\\int \\sin^p x \\cos^{2k+1} x\\,dx = \\int \\sin^p x (1 - \\sin^2 x)^k (\\cos x\\,dx) = \\int u^p (1 - u^2)^k\\,du',
              note: 'Avec u = sin(x), on se ramène immédiatement à un polynôme en u.',
            },
            keyRule:
              'Dans $\\int \\sin^p x \\cos^q x\\,dx$, on pose $u = $ la fonction dont l’exposant est pair (ou on garde un facteur de celle qui a l’exposant impair avec $dx$).',
            konanTip:
              'Si $p$ et $q$ sont tous les deux impairs (ex: $\\sin^3 x \\cos^5 x$), choisissez de poser $u = $ la fonction qui a le plus grand exposant (ici $u = \\cos x$) pour n’avoir à développer que $(1 - u^2)^1$ au lieu de $(1 - u^2)^2$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p3_ex1',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de l’intégrale $I = \\int_{0}^{\\pi/2} \\sin^3(x)\\,dx$ ?',
              options: [
                '$\\frac{2}{3}$',
                '$\\frac{1}{3}$',
                '$\\frac{1}{4}$',
                '$\\frac{3}{4}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme l’exposant de $\\sin x$ est impair ($p = 3$), on écrit $\\sin^3 x\\,dx = (1 - \\cos^2 x)\\sin x\\,dx$. En posant $u = \\cos x$ ($du = -\\sin x\\,dx$), on obtient $I = \\int_0^1 (1 - u^2)\\,du = \\left[u - \\frac{u^3}{3}\\right]_0^1 = \\frac{2}{3}$.',
              hint: 'Écrivez $\\sin^3 x = (1 - \\cos^2 x)\\sin x$ et posez $u = \\cos x$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Linéarisation',
            stepTheme: 'green',
            stepTitle: 'Intégration de sin^p(x)·cos^q(x) lorsque p et q sont pairs : linéarisation',
            paragraphText:
              'Lorsque les exposants $p$ et $q$ dans $\\int \\sin^p(x)\\cos^q(x)\\,dx$ sont **tous les deux pairs**, les changements de variable $u = \\sin x$ ou $u = \\cos x$ font apparaître des racines carrées $\\sqrt{1 - u^2}$ qui compliquent le calcul. La méthode consiste alors à **linéariser** l’expression, c’est-à-dire à transformer le produit en une somme de termes en $\\cos(kx)$ et $\\sin(kx)$ à l’aide des formules de duplication ($\\cos^2 x = \\frac{1+\\cos 2x}{2}$, $\\sin^2 x = \\frac{1-\\cos 2x}{2}$) ou des formules d’Euler ($\\cos x = \\frac{e^{ix}+e^{-ix}}{2}$, $\\sin x = \\frac{e^{ix}-e^{-ix}}{2i}$).',
            formula: {
              name: 'Intégrales de Wallis d’ordre 2 sur [0, π/2]',
              formula: '\\int_{0}^{\\pi/2} \\cos^2(x)\\,dx = \\int_{0}^{\\pi/2} \\sin^2(x)\\,dx = \\frac{\\pi}{4}',
              note: 'Obtenues immédiatement en intégrant (1 ± cos(2x))/2 sur [0, π/2].',
            },
            keyRule:
              'Exposants tous deux pairs $\\implies$ linéarisation obligatoire avant d’intégrer.',
            konanTip:
              'Retenez par cœur que sur un quart de période $[0, \\pi/2]$, l’intégrale de $\\cos^2 x$ et celle de $\\sin^2 x$ valent toutes les deux la moitié de la longueur de l’intervalle, soit $\\frac{\\pi}{4}$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p3_ex2',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de l’intégrale $I = \\int_{0}^{\\pi/2} \\sin^2(x)\\cos^2(x)\\,dx$ ?',
              options: [
                '$\\frac{\\pi}{16}$',
                '$\\frac{\\pi}{8}$',
                '$\\frac{\\pi}{4}$',
                '$\\frac{1}{4}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On linéarise : $\\sin^2 x \\cos^2 x = \\left(\\frac{\\sin 2x}{2}\\right)^2 = \\frac{\\sin^2(2x)}{4} = \\frac{1 - \\cos(4x)}{8}$. En intégrant entre $0$ et $\\pi/2$, l’intégrale de $\\cos(4x)$ est nulle et il reste $\\frac{1}{8} \\times \\frac{\\pi}{2} = \\frac{\\pi}{16}$.',
              hint: 'Utilisez $\\sin x \\cos x = \\frac{\\sin(2x)}{2}$, puis $\\sin^2(2x) = \\frac{1 - \\cos(4x)}{2}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Règles de Bioche',
            stepTheme: 'violet',
            stepTitle: 'Les 3 règles de Bioche pour les fractions rationnelles R(cos x, sin x)',
            paragraphText:
              'Pour intégrer une fraction rationnelle en $\\cos x$ et $\\sin x$, notée $I = \\int f(x)\\,dx$, Charles Bioche a établi un critère basé sur l’invariance de la **forme différentielle** $\\omega(x) = f(x)\\,dx$ (attention : $d(-x) = -dx$, $d(\\pi - x) = -dx$ et $d(\\pi + x) = +dx$) : \n1. Si $\\omega(-x) = \\omega(x)$, on pose $u = \\cos x$ ;\n2. Si $\\omega(\\pi - x) = \\omega(x)$, on pose $u = \\sin x$ ;\n3. Si $\\omega(\\pi + x) = \\omega(x)$, on pose $u = \\tan x$.',
            formula: {
              name: 'Résumé des 3 invariances de Bioche pour ω(x) = f(x)dx',
              formula: '\\begin{cases} \\omega(-x) = \\omega(x) \\iff f(-x) = -f(x) & \\implies u = \\cos x \\\\ \\omega(\\pi - x) = \\omega(x) \\iff f(\\pi - x) = -f(x) & \\implies u = \\sin x \\\\ \\omega(\\pi + x) = \\omega(x) \\iff f(\\pi + x) = +f(x) & \\implies u = \\tan x \\end{cases}',
              note: 'Moyen mnémotechnique : la transformation qui laisse ω(x) invariante est exactement celle qui laisse u(x) invariante !',
            },
            keyRule:
              'Astuce mnémotechnique infaillible : quelle fonction parmi $\\cos x, \\sin x, \\tan x$ est invariante par $x \\mapsto -x$ ? C’est $\\cos x$ ! Par $x \\mapsto \\pi - x$ ? C’est $\\sin x$ ! Par $x \\mapsto \\pi + x$ ? C’est $\\tan x$ !',
            konanTip:
              'N’oubliez jamais le signe moins apporté par la différentielle $dx$ : lorsque $x$ est remplacé par $-x$ ou $\\pi - x$, l’élément $dx$ devient $-dx$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p3_ex3',
              type: 'mcq',
              prompt:
                'D’après les règles de Bioche, quel est le changement de variable optimal pour calculer $I = \\int \\frac{dx}{\\sin x}$ ?',
              options: [
                '$u = \\cos x$ car $\\omega(-x) = \\frac{d(-x)}{\\sin(-x)} = \\frac{-dx}{-\\sin x} = \\omega(x)$',
                '$u = \\sin x$ car $\\omega(\\pi - x) = \\omega(x)$',
                '$u = \\tan x$ car $\\omega(\\pi + x) = \\omega(x)$',
                '$u = \\sin^2 x$ car la fonction est impaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $\\omega(x) = \\frac{dx}{\\sin x}$, on a $\\omega(-x) = \\frac{-dx}{-\\sin x} = \\frac{dx}{\\sin x} = \\omega(x)$. L’invariance par $x \\mapsto -x$ impose de poser $u = \\cos x$ (en écrivant $\\frac{dx}{\\sin x} = \\frac{\\sin x\\,dx}{1 - \\cos^2 x} = \\frac{-du}{1 - u^2}$).',
              hint: 'Testez $\\omega(-x)$ en remplaçant à la fois $\\sin(-x) = -\\sin x$ et $d(-x) = -dx$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Arc moitié tan(x/2)',
            stepTheme: 'green',
            stepTitle: 'Changement de variable universel t = tan(x/2)',
            paragraphText:
              'Lorsque aucune des trois règles de Bioche ne s’applique (par exemple pour $\\int \\frac{dx}{2 + \\cos x}$ ou $\\int \\frac{dx}{1 + \\sin x + \\cos x}$), on utilise sur tout intervalle contenu dans $]-\\pi, \\pi[$ le changement de variable universel de l’arc moitié : $t = \\tan\\left(\\frac{x}{2}\\right)$. Comme $x = 2\\arctan(t)$, on a $dx = \\frac{2\\,dt}{1 + t^2}$, et les formules trigonométriques expriment rationnellement $\\cos x$, $\\sin x$ et $\\tan x$ en fonction de $t$, ramenant toute intégrale $\\int R(\\cos x, \\sin x)\\,dx$ à celle d’une fraction rationnelle en $t$.',
            formula: {
              name: 'Transformation universelle par t = tan(x/2)',
              formula: 't = \\tan\\left(\\frac{x}{2}\\right) \\implies dx = \\frac{2\\,dt}{1+t^2}, \\quad \\cos x = \\frac{1-t^2}{1+t^2}, \\quad \\sin x = \\frac{2t}{1+t^2}',
              note: 'Attention : ce changement de variable n’est pas défini en x = π (où tan(x/2) → ±∞).',
            },
            keyRule:
              'Le changement $t = \\tan(x/2)$ transforme systématiquement $\\int R(\\cos x, \\sin x)\\,dx$ en une intégrale de fraction rationnelle en $t$.',
            konanTip:
              'Testez toujours les règles de Bioche AVANT de poser $t = \\tan(x/2)$, car $t = \\tan(x/2)$ double les degrés des polynômes au dénominateur, alors que Bioche les divise par 2 !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p3_ex4',
              type: 'mcq',
              prompt:
                'En posant $t = \\tan(x/2)$, quelle intégrale en $t$ obtient-on pour calculer $I = \\int_{0}^{\\pi/2} \\frac{dx}{2 + \\cos x}$ ?',
              options: [
                '$\\int_{0}^{1} \\frac{2\\,dt}{3 + t^2}$',
                '$\\int_{0}^{1} \\frac{dt}{3 + t^2}$',
                '$\\int_{0}^{\\pi/4} \\frac{2\\,dt}{1 + 3t^2}$',
                '$\\int_{0}^{1} \\frac{2\\,dt}{1 + 3t^2}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $x = 0$, $t = 0$ ; pour $x = \\pi/2$, $t = \\tan(\\pi/4) = 1$. On remplace : $\\frac{dx}{2 + \\cos x} = \\frac{\\frac{2\\,dt}{1+t^2}}{2 + \\frac{1-t^2}{1+t^2}} = \\frac{2\\,dt}{2(1+t^2) + (1-t^2)} = \\frac{2\\,dt}{3 + t^2}$.',
              hint: 'Simplifiez $(1 + t^2)\\left(2 + \\frac{1 - t^2}{1 + t^2}\\right) = 2 + 2t^2 + 1 - t^2 = 3 + t^2$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Radicaux quadratiques',
            stepTheme: 'green',
            stepTitle: 'Changements de variable trigonométriques et hyperboliques pour les radicaux',
            paragraphText:
              'Pour éliminer une racine carrée portant sur une expression quadratique ($a > 0$), on utilise les identités fondamentales $\\cos^2 t + \\sin^2 t = 1$ et $\\cosh^2 t - \\sinh^2 t = 1$ :\n- Pour $\\sqrt{a^2 - x^2}$ (défini sur $[-a, a]$), on pose $x = a\\sin t$ ($t \\in [-\\pi/2, \\pi/2]$), d’où $\\sqrt{a^2 - x^2} = a\\cos t$ ;\n- Pour $\\sqrt{a^2 + x^2}$ (défini sur $\\mathbb{R}$), on pose $x = a\\sinh t$ (ou $x = a\\tan t$), d’où $\\sqrt{a^2 + x^2} = a\\cosh t$ ;\n- Pour $\\sqrt{x^2 - a^2}$ (sur $[a, +\\infty[$), on pose $x = a\\cosh t$ ($t \\ge 0$), d’où $\\sqrt{x^2 - a^2} = a\\sinh t$.',
            formula: {
              name: 'Primitives usuelles à radicaux quadratiques',
              formula: '\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C, \\quad \\int \\frac{dx}{\\sqrt{x^2 + a^2}} = \\text{argsinh}\\left(\\frac{x}{a}\\right) + C = \\ln\\left(x + \\sqrt{x^2+a^2}\\right) + C\'',
              note: 'Valable pour tout réel a > 0.',
            },
            keyRule:
              '$\\sqrt{a^2 - x^2} \\implies x = a\\sin t$ ; $\\sqrt{a^2 + x^2} \\implies x = a\\sinh t$ ; $\\sqrt{x^2 - a^2} \\implies x = a\\cosh t$.',
            konanTip:
              'Reconnaissez d’un coup d’œil la dérivée de $\\arcsin(x/a)$ : $\\int_0^a \\frac{dx}{\\sqrt{a^2 - x^2}} = \\left[\\arcsin\\left(\\frac{x}{a}\\right)\\right]_0^a = \\frac{\\pi}{2}$ (indépendant de $a > 0$ !).',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p3_ex5',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de l’intégrale $I = \\int_{0}^{1} \\sqrt{1 - x^2}\\,dx$ calculée par le changement de variable $x = \\sin t$ ?',
              options: [
                '$\\frac{\\pi}{4}$',
                '$\\frac{\\pi}{2}$',
                '$\\frac{1}{2}$',
                '$\\frac{2}{3}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En posant $x = \\sin t$ avec $t \\in [0, \\pi/2]$, on a $dx = \\cos t\\,dt$ et $\\sqrt{1 - x^2} = \\cos t$. L’intégrale devient $I = \\int_0^{\\pi/2} \\cos^2 t\\,dt = \\int_0^{\\pi/2} \\frac{1 + \\cos 2t}{2}\\,dt = \\frac{\\pi}{4}$.',
              hint: 'Géométriquement, $I$ représente l’aire d’un quart de disque de rayon $R = 1$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Double IPP cyclique',
            stepTheme: 'slate',
            stepTitle: 'Intégrales du type ∫ exp(ax)·cos(bx) dx par double IPP ou exponentielle complexe',
            paragraphText:
              'Pour calculer $I = \\int e^{ax}\\cos(bx)\\,dx$ ou $J = \\int e^{ax}\\sin(bx)\\,dx$ ($a, b \\neq 0$), deux méthodes élégantes existent. La première consiste à effectuer **deux intégrations par parties successives** dans le même sens, ce qui fait réapparaître l’intégrale $I$ au second membre et permet d’isoler $I$. La seconde méthode, encore plus rapide, consiste à passer en complexe : $I + iJ = \\int e^{(a + ib)x}\\,dx = \\frac{e^{(a+ib)x}}{a + ib} = \\frac{a - ib}{a^2 + b^2}e^{ax}(\\cos bx + i\\sin bx)$, puis à identifier la partie réelle et la partie imaginaire.',
            formula: {
              name: 'Primitives de e^{ax}cos(bx) et e^{ax}sin(bx)',
              formula: '\\int e^{ax}\\cos(bx)\\,dx = \\frac{e^{ax}\\big(a\\cos(bx) + b\\sin(bx)\\big)}{a^2 + b^2} + C',
              note: 'Obtenue immédiatement en prenant la partie réelle de e^{(a+ib)x}/(a+ib).',
            },
            keyRule:
              'Le passage par la partie réelle ou imaginaire de $\\int e^{(a+ib)x}\\,dx = \\frac{e^{(a+ib)x}}{a + ib}$ est deux fois plus rapide et moins risqué qu’une double IPP.',
            konanTip:
              'En Électrocinétique et Traitement du Signal, vous utiliserez constamment cette méthode complexe pour calculer les coefficients de Fourier et les réponses de circuits RLC !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch2_p3_ex6',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de l’intégrale $I = \\int_{0}^{\\pi} e^x \\sin(x)\\,dx$ ?',
              options: [
                '$\\frac{e^\\pi + 1}{2}$',
                '$\\frac{e^\\pi - 1}{2}$',
                '$e^\\pi + 1$',
                '$\\frac{e^\\pi}{2}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'C’est la partie imaginaire de $\\int_0^\\pi e^{(1+i)x}\\,dx = \\left[\\frac{e^{(1+i)x}}{1+i}\\right]_0^\\pi = \\frac{1-i}{2}\\left(e^\\pi e^{i\\pi} - 1\\right) = \\frac{1-i}{2}(-e^\\pi - 1) = \\frac{-(e^\\pi + 1)}{2} + i\\frac{e^\\pi + 1}{2}$. Sa partie imaginaire vaut donc $\\frac{e^\\pi + 1}{2}$.',
              hint: 'Une primitive de $e^x \\sin x$ est $\\frac{e^x(\\sin x - \\cos x)}{2}$, à évaluer entre $0$ et $\\pi$ (avec $\\cos \\pi = -1$).',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 3 : INTÉGRALES GÉNÉRALISÉES ET ÉQUATIONS DIFFÉRENTIELLES
  // ============================================================================
  {
    id: 'lmd_srit_l1_analyse2_ch3',
    subjectId: 'lmd_analyse_2',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 3,
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (Semestre 2 — Code 1MTH3201)',
    title: 'Intégrales Généralisées et Équations Différentielles Linéaires',
    summary:
      'Intégrales impropres sur un intervalle quelconque, intégrales de Riemann, critères de comparaison et d’équivalence, convergence absolue, équations différentielles linéaires d’ordre 1 et 2.',
    points: [
      // ------------------------------------------------------------------------
      // Point 3.1 : Intégrales généralisées (impropres) et critères de convergence
      // ------------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_analyse2_ch3_p1',
        order: 1,
        title: 'Intégrales Généralisées (Impropres) et Critères de Convergence',
        summary:
          'Définition par passage à la limite, intégrales de Riemann en +∞ et en 0, critères de comparaison et d’équivalence pour fonctions positives, convergence absolue et semi-convergence.',
        conceptExplanation:
          'L’intégrale de Riemann classique exige un segment borné $[a, b]$ et une fonction bornée. Les intégrales généralisées (ou impropres) étendent cette notion aux intervalles non bornés comme $[a, +\\infty[$ ou aux fonctions présentant une asymptote verticale en une borne (comme $\\frac{1}{\\sqrt{x}}$ en $0^+$). Lorsqu’on ne sait pas calculer explicitement une primitive, l’étude de la nature (convergente ou divergente) d’une intégrale impropre de fonction positive s’effectue par comparaison ou équivalence avec les intégrales de référence de Riemann.',
        formulas: [
          {
            name: 'Critères de Riemann en +∞ et en 0^+',
            formula: '\\int_{1}^{+\\infty} \\frac{dx}{x^\\alpha} \\text{ CV } \\iff \\alpha > 1, \\qquad \\int_{0}^{1} \\frac{dx}{x^\\alpha} \\text{ CV } \\iff \\alpha < 1',
            note: 'Pour α = 1, ∫ dx/x diverge aussi bien en +∞ qu’en 0^+.',
          },
          {
            name: 'Théorème d’équivalence pour fonctions positives',
            formula: 'f(x) \\underset{x \\to b}{\\sim} g(x) \\text{ avec } g(x) \\ge 0 \\implies \\int_a^b f(x)\\,dx \\text{ et } \\int_a^b g(x)\\,dx \\text{ ont même nature}',
            note: 'Nécessite impérativement que les fonctions gardent un signe constant au voisinage de b.',
          },
        ],
        keyRule:
          'Retenez l’inversion du critère de Riemann : en $+\\infty$, il faut que $x^\\alpha$ croisse assez vite au dénominateur ($\\alpha > 1$) ; en $0^+$, il ne faut pas que $x^\\alpha$ explose trop vite ($\\alpha < 1$).',
        workedExample: {
          title: 'Étude de la nature d’une intégrale impropre en 0 et en +∞',
          statement:
            'Étudier la convergence de l’intégrale généralisée $I = \\int_{0}^{+\\infty} \\frac{\\sin x}{x^{3/2}}\\,dx$ sur $]0, +\\infty[$.',
          methodSteps: [
            'La fonction $f(x) = \\frac{\\sin x}{x^{3/2}}$ est continue sur $]0, +\\infty[$. Il y a deux bornes critiques : $0^+$ et $+\\infty$. On coupe en $x = 1$.',
            'En $0^+$, $f(x) > 0$ et $\\frac{\\sin x}{x^{3/2}} \\sim_0 \\frac{x}{x^{3/2}} = \\frac{1}{x^{1/2}}$. Comme $\\alpha = \\frac{1}{2} < 1$, l’intégrale $\\int_0^1 f(x)\\,dx$ converge par équivalence avec Riemann en $0$.',
            'En $+\\infty$, on teste la convergence absolue : $|f(x)| = \\frac{|\\sin x|}{x^{3/2}} \\le \\frac{1}{x^{3/2}}$.',
            'Comme $\\alpha = \\frac{3}{2} > 1$, $\\int_1^{+\\infty} \\frac{dx}{x^{3/2}}$ converge, donc $\\int_1^{+\\infty} f(x)\\,dx$ converge absolument (et donc converge).',
          ],
          conclusion:
            'Les deux tronçons sur $]0, 1]$ et $[1, +\\infty[$ convergent, donc $I = \\int_0^{+\\infty} \\frac{\\sin x}{x^{3/2}}\\,dx$ est convergente.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition & Limite',
            stepTheme: 'blue',
            stepTitle: 'Définition d’une intégrale généralisée et règle de découpage des bornes',
            paragraphText:
              'Soit $f : [a, b[ \\to \\mathbb{R}$ ($b \\in \\mathbb{R} \\cup \\{+\\infty\\}$) une fonction localement intégrable (par exemple continue sur $[a, b[$). On dit que l’intégrale généralisée $\\int_a^b f(t)\\,dt$ **converge** si la fonction $F(x) = \\int_a^x f(t)\\,dt$ admet une limite finie lorsque $x \\to b^-$. Sinon, l’intégrale **diverge**. Si l’intégrale est impropre aux deux bornes sur $]a, b[$, on choisit un point intermédiaire quelconque $c \\in ]a, b[$ : par définition, $\\int_a^b f$ converge **si et seulement si** $\\int_a^c f$ ET $\\int_c^b f$ convergent indépendamment !',
            formula: {
              name: 'Définition par passage à la limite',
              formula: '\\int_{a}^{+\\infty} f(t)\\,dt = \\lim_{X \\to +\\infty} \\int_{a}^{X} f(t)\\,dt, \\qquad \\int_{a}^{b} f(t)\\,dt = \\lim_{x \\to a^+} \\int_{x}^{b} f(t)\\,dt',
              note: 'Si deux bornes posent problème, chaque demi-intégrale doit converger séparément.',
            },
            keyRule:
              'Pour que $\\int_{-\\infty}^{+\\infty} f(t)\\,dt$ converge, il faut que $\\lim_{A \\to -\\infty} \\int_A^0 f$ et $\\lim_{B \\to +\\infty} \\int_0^B f$ existent séparément (ne confondez jamais avec $\\lim_{X \\to +\\infty} \\int_{-X}^{X} f$).',
            konanTip:
              'Piège classique : $\\int_{-X}^{X} t\\,dt = 0$ pour tout $X$, mais $\\int_{-\\infty}^{+\\infty} t\\,dt$ **diverge** car $\\int_0^{+\\infty} t\\,dt = +\\infty$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p1_ex1',
              type: 'mcq',
              prompt:
                'Soit $I = \\int_{0}^{+\\infty} e^{-2t}\\,dt$. Quelle est la nature et la valeur éventuelle de cette intégrale généralisée ?',
              options: [
                'Elle converge et vaut $\\frac{1}{2}$',
                'Elle converge et vaut $2$',
                'Elle converge et vaut $1$',
                'Elle diverge vers $+\\infty$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour tout $X > 0$, $\\int_0^X e^{-2t}\\,dt = \\left[-\\frac{1}{2}e^{-2t}\\right]_0^X = \\frac{1}{2}\\left(1 - e^{-2X}\\right)$. Lorsque $X \\to +\\infty$, $e^{-2X} \\to 0$, donc l’intégrale converge et vaut $\\frac{1}{2}$.',
              hint: 'Calculez $\\int_0^X e^{-2t}\\,dt$ puis faites tendre $X \\to +\\infty$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Intégrales de Riemann',
            stepTheme: 'violet',
            stepTitle: 'Les intégrales de référence de Riemann en +∞, en 0 et en un point a',
            paragraphText:
              'Les intégrales de Riemann constituent l’étalon universel de comparaison :\n1. Au voisinage de $+\\infty$, $\\int_1^{+\\infty} \\frac{dt}{t^\\alpha}$ converge si et seulement si $\\alpha > 1$ (et vaut alors $\\frac{1}{\\alpha - 1}$) ;\n2. Au voisinage de $0^+$, $\\int_0^1 \\frac{dt}{t^\\alpha}$ converge si et seulement si $\\alpha < 1$ (et vaut alors $\\frac{1}{1 - \\alpha}$) ;\n3. Plus généralement, en un point fini $a$, $\\int_a^b \\frac{dt}{(t-a)^\\alpha}$ converge si et seulement si $\\alpha < 1$.',
            formula: {
              name: 'Valeurs des intégrales de Riemann convergentes',
              formula: '\\forall \\alpha > 1,\\; \\int_1^{+\\infty} \\frac{dt}{t^\\alpha} = \\frac{1}{\\alpha - 1} \\qquad \\text{et} \\qquad \\forall \\alpha < 1,\\; \\int_0^1 \\frac{dt}{t^\\alpha} = \\frac{1}{1 - \\alpha}',
              note: 'Conséquence : ∫_0^{+∞} dt/t^α diverge TOUJOURS quel que soit α ∈ ℝ !',
            },
            keyRule:
              'L’intégrale $\\int_0^{+\\infty} \\frac{dt}{t^\\alpha}$ diverge pour **tout** $\\alpha \\in \\mathbb{R}$, car on ne peut jamais avoir simultanément $\\alpha < 1$ (pour $0^+$) et $\\alpha > 1$ (pour $+\\infty$).',
            konanTip:
              'Dès qu’un QCM propose la convergence de $\\int_0^{+\\infty} \\frac{dx}{x^\\alpha}$, éliminez-le immédiatement : si ça converge en $0$, ça diverge en $+\\infty$, et inversement !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p1_ex2',
              type: 'mcq',
              prompt:
                'Pour quelles valeurs du réel $\\alpha$ les deux intégrales $I_1 = \\int_{0}^{1} \\frac{dx}{\\sqrt{x}}$ et $I_2 = \\int_{1}^{+\\infty} \\frac{dx}{x^\\alpha}$ sont-elles **toutes les deux convergentes** ?',
              options: [
                '$I_1$ converge (car $1/2 < 1$) et $I_2$ converge si et seulement si $\\alpha > 1$',
                '$I_1$ diverge et $I_2$ converge pour $\\alpha > 1$',
                '$I_1$ converge et $I_2$ converge pour $\\alpha \\ge 1$',
                '$I_1$ et $I_2$ convergent pour $1/2 < \\alpha < 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans $I_1 = \\int_0^1 \\frac{dx}{x^{1/2}}$, la borne critique est $0$ avec l’exposant $\\frac{1}{2} < 1$, donc $I_1$ converge (et vaut $2$). Dans $I_2$, la borne critique est $+\\infty$, donc $I_2$ converge si et seulement si $\\alpha > 1$.',
              hint: 'Appliquez le critère en $0^+$ (exposant $< 1$) pour $I_1$ et le critère en $+\\infty$ (exposant $> 1$) pour $I_2$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Comparaison & Équivalents',
            stepTheme: 'green',
            stepTitle: 'Théorèmes de comparaison, de domination o() et d’équivalence (f ≥ 0)',
            paragraphText:
              'Pour des fonctions **positives** au voisinage de la borne critique $b$ ($b \\le +\\infty$) :\n- **Majoration / Minoration** : si $0 \\le f(t) \\le g(t)$, alors la convergence de $\\int g$ entraîne celle de $\\int f$, et la divergence de $\\int f$ entraîne celle de $\\int g$ ;\n- **Équivalence** : si $f(t) \\sim_b g(t)$ avec $g(t) \\ge 0$, alors $\\int f$ et $\\int g$ ont **exactement la même nature** ;\n- **Négligeabilité** : si $f(t) = o(g(t))$ en $b$ et $\\int g$ converge, alors $\\int f$ converge (règle en $t^\\alpha f(t) \\to 0$ avec $\\alpha > 1$ en $+\\infty$).',
            formula: {
              name: 'Règle de t^α f(t) en +∞',
              formula: '\\lim_{t \\to +\\infty} t^\\alpha f(t) = 0 \\text{ avec } \\alpha > 1 \\implies f(t) = o\\left(\\frac{1}{t^\\alpha}\\right) \\implies \\int_a^{+\\infty} f(t)\\,dt \\text{ converge}',
              note: 'Très utile pour toute fonction contenant une décroissance exponentielle e^{-kt} (k > 0).',
            },
            keyRule:
              'Le théorème d’équivalence ($f \\sim g \\implies \\int f$ et $\\int g$ de même nature) exige impérativement que $f$ et $g$ soient de **signe constant** au voisinage de la borne critique !',
            konanTip:
              'Pour étudier $\\int_1^{+\\infty} \\frac{\\ln t}{t^2}\\,dt$, utilisez la règle $t^\\alpha f(t)$ avec un exposant intermédiaire $\\alpha = \\frac{3}{2} \\in ]1, 2[$ : $t^{3/2} \\frac{\\ln t}{t^2} = \\frac{\\ln t}{t^{1/2}} \\to 0$ en $+\\infty$, donc l’intégrale converge !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p1_ex3',
              type: 'mcq',
              prompt:
                'Quelle est la nature de l’intégrale généralisée $I = \\int_{1}^{+\\infty} \\ln\\left(1 + \\frac{1}{t^2}\\right)\\,dt$ ?',
              options: [
                'Convergente car $\\ln(1 + 1/t^2) \\sim_{+\\infty} \\frac{1}{t^2} > 0$ et $\\alpha = 2 > 1$',
                'Divergente car $\\ln(1 + 1/t^2) \\sim_{+\\infty} \\frac{1}{t}$',
                'Divergente car la fonction logarithme tend vers $+\\infty$',
                'Convergente car l’exposant est $\\alpha = 2 < 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La fonction est positive sur $[1, +\\infty[$. Lorsque $t \\to +\\infty$, $\\frac{1}{t^2} \\to 0$, donc $\\ln\\left(1 + \\frac{1}{t^2}\\right) \\sim_{+\\infty} \\frac{1}{t^2}$. Comme $\\int_1^{+\\infty} \\frac{dt}{t^2}$ converge (Riemann en $+\\infty$ avec $\\alpha = 2 > 1$), $I$ converge par équivalence de fonctions positives.',
              hint: 'Utilisez l’équivalent usuel $\\ln(1 + u) \\sim u$ lorsque $u = \\frac{1}{t^2} \\to 0$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Convergence absolue',
            stepTheme: 'violet',
            stepTitle: 'Convergence absolue et intégrales semi-convergentes (exemple de Dirichlet)',
            paragraphText:
              'Lorsque la fonction $f(t)$ change de signe une infinité de fois au voisinage de $+\\infty$ (comme $\\frac{\\sin t}{t^\\alpha}$), les théorèmes de comparaison pour fonctions positives ne s’appliquent pas directement à $f$. On étudie alors l’intégrale de la valeur absolue $\\int_a^b |f(t)|\\,dt$. Si $\\int_a^b |f(t)|\\,dt$ converge, on dit que $\\int_a^b f(t)\\,dt$ est **absolument convergente**, et un théorème fondamental assure que **toute intégrale absolument convergente est convergente**. Si en revanche $\\int f$ converge mais $\\int |f|$ diverge, l’intégrale est dite **semi-convergente**.',
            formula: {
              name: 'Théorème de convergence absolue et intégrale de Dirichlet',
              formula: '\\int_a^b |f(t)|\\,dt \\text{ CV } \\implies \\int_a^b f(t)\\,dt \\text{ CV}, \\qquad \\int_1^{+\\infty} \\frac{\\sin t}{t}\\,dt \\text{ est semi-convergente}',
              note: 'Pour montrer que ∫_1^{+∞} (sin t)/t dt converge, on intègre par parties en primitivant sin(t) en -cos(t).',
            },
            keyRule:
              'Convergence absolue $\\implies$ Convergence, mais la réciproque est fausse (l’intégrale de Dirichlet $\\int_1^{+\\infty} \\frac{\\sin t}{t}\\,dt$ converge, alors que $\\int_1^{+\\infty} \\frac{|\\sin t|}{t}\\,dt$ diverge).',
            konanTip:
              'Pour prouver qu’une intégrale oscillante comme $\\int_1^{+\\infty} \\frac{\\sin t}{t}\\,dt$ converge, faites une IPP en posant $u(t) = \\frac{1}{t}$ et $v\'(t) = \\sin t$ : cela fait apparaître $\\int_1^{+\\infty} \\frac{\\cos t}{t^2}\\,dt$ qui est absolument convergente !',
            visualSchema: {
              type: 'flowchart',
              title: 'Arbre de décision : étudier la convergence de ∫ f(t) dt',
              caption: 'Méthodologie systématique pour déterminer la nature d’une intégrale impropre.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    id: 'c1',
                    label: '1. Identifier les bornes critiques sur I',
                    sublabel: 'Où f n’est pas définie/bornée, ou bornes ±∞ → Découper si ≥ 2 bornes',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    id: 'c2',
                    label: '2. f garde-t-elle un signe constant au voisinage de la borne ?',
                    sublabel: 'Condition indispensable pour le théorème d’équivalence',
                    kind: 'decision',
                    color: 'orange',
                    branchLabel: 'Non (oscillante) → Tester ∫|f| (CV absolue) ou faire une IPP',
                  },
                  {
                    id: 'c3',
                    label: '3. Chercher un équivalent simple (DL) ou majorer',
                    sublabel: 'Comparer aux intégrales de Riemann 1/t^α ou à e^{-kt}',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    id: 'c4',
                    label: '4. Conclure sur chaque borne critique',
                    sublabel: 'L’intégrale globale converge ssi TOUTES les bornes convergent',
                    kind: 'end',
                    color: 'green',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p1_ex4',
              type: 'mcq',
              prompt:
                'Que peut-on affirmer concernant l’intégrale $I = \\int_{1}^{+\\infty} \\frac{\\cos(t)}{t^2}\\,dt$ ?',
              options: [
                'Elle est absolument convergente (et donc convergente) car $\\left|\\frac{\\cos t}{t^2}\\right| \\le \\frac{1}{t^2}$',
                'Elle est semi-convergente',
                'Elle diverge car $\\cos(t)$ n’admet pas de limite en $+\\infty$',
                'On peut lui appliquer directement le théorème d’équivalence car $\\cos(t) \\sim 1$ en $+\\infty$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour tout $t \\ge 1$, $\\left|\\frac{\\cos t}{t^2}\\right| \\le \\frac{1}{t^2}$. Comme $\\int_1^{+\\infty} \\frac{dt}{t^2}$ converge (Riemann avec $\\alpha = 2 > 1$), $\\int_1^{+\\infty} \\left|\\frac{\\cos t}{t^2}\\right|dt$ converge par majoration, donc $I$ est absolument convergente.',
              hint: 'Majorez la valeur absolue $|\\cos t|$ par $1$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Changement de variable',
            stepTheme: 'orange',
            stepTitle: 'IPP et changement de variable dans une intégrale impropre',
            paragraphText:
              'Lorsqu’on effectue une intégration par parties dans une intégrale généralisée $\\int_a^b u(t)v\'(t)\\,dt$, il est interdit d’écrire directement $[u(t)v(t)]_a^b - \\int_a^b u\'(t)v(t)\\,dt$ sans vérifier que le crochet $[u(t)v(t)]_a^b$ **admet une limite finie** aux bornes critiques ! On doit toujours rédiger l’IPP sur un segment compact $[x, X] \\subset ]a, b[$, puis passer à la limite quand $x \\to a^+$ et $X \\to b^-$. En revanche, un changement de variable $t = \\varphi(u)$ strictement monotone de classe $\\mathcal{C}^1$ bijectif de $]\\alpha, \\beta[$ sur $]a, b[$ conserve toujours la nature et la valeur de l’intégrale.',
            formula: {
              name: 'Condition de validité de l’IPP généralisée',
              formula: '\\lim_{\\substack{x \\to a^+ \\\\ X \\to b^-}} \\Big[u(t)v(t)\\Big]_x^X \\text{ existe et est finie} \\implies \\int_a^b uv\' \\text{ et } \\int_a^b u\'v \\text{ ont même nature}',
              note: 'Toujours vérifier la convergence du crochet aux bornes avant de séparer.',
            },
            keyRule:
              'Dans une IPP sur une intégrale impropre, vérifiez systématiquement que $\\lim_{t \\to b} u(t)v(t)$ et $\\lim_{t \\to a} u(t)v(t)$ sont finies.',
            konanTip:
              'C’est grâce à une IPP sur $[0, X]$ avec passage à la limite $X \\to +\\infty$ que l’on démontre la célèbre relation de la fonction Gamma d’Euler : $\\Gamma(x+1) = \\int_0^{+\\infty} t^x e^{-t}\\,dt = x\\Gamma(x)$ (d’où $\\Gamma(n+1) = n!$).',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p1_ex5',
              type: 'mcq',
              prompt:
                'Pour tout entier $n \\in \\mathbb{N}$, que vaut l’intégrale généralisée d’Euler $I_n = \\int_{0}^{+\\infty} t^n e^{-t}\\,dt$ ?',
              options: [
                '$n!$',
                '$(n-1)!$',
                '$\\frac{1}{n+1}$',
                '$n^n$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $n = 0$, $I_0 = \\int_0^{+\\infty} e^{-t}\\,dt = 1 = 0!$. Par intégration par parties ($u = t^n$, $v\' = -e^{-t}$), le crochet $[-t^n e^{-t}]_0^{+\\infty}$ est nul par croissances comparées et $I_n = n I_{n-1}$, d’où par récurrence $I_n = n!$.',
              hint: 'Calculez $I_0 = 1$, $I_1 = 1$, $I_2 = 2$ à l’aide de la relation de récurrence $I_n = n I_{n-1}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Limite en +∞ de f',
            stepTheme: 'orange',
            stepTitle: 'Piège classique : la convergence de ∫_1^{+∞} f(t) dt n’implique PAS lim f(t) = 0',
            paragraphText:
              'Contrairement aux séries numériques où $\\sum u_n$ converge implique $\\lim_{n \\to +\\infty} u_n = 0$, la convergence d’une intégrale généralisée $\\int_1^{+\\infty} f(t)\\,dt$ d’une fonction continue $f$ **n’implique PAS** que $\\lim_{t \\to +\\infty} f(t) = 0$ (on peut construire une fonction continue positive ayant des pics triangulaires de hauteur $1$ et de base $\\frac{1}{2^n}$ autour de chaque entier $n$). En revanche, **si $f$ admet une limite $l$ en $+\\infty$** et que $\\int_1^{+\\infty} f(t)\\,dt$ converge, alors nécessairement cette limite est nulle : $l = 0$ !',
            formula: {
              name: 'Implication correcte sur la limite en +∞',
              formula: '\\left( \\int_a^{+\\infty} f(t)\\,dt \\text{ CV } \\;\\text{ET}\\; \\lim_{t \\to +\\infty} f(t) = l \\text{ existe} \\right) \\implies l = 0',
              note: 'En particulier, si f est décroissante et positive et que ∫_a^{+∞} f converge, alors lim_{+∞} f = 0.',
            },
            keyRule:
              'Si $\\lim_{t \\to +\\infty} f(t) = l \\neq 0$ (ou $\\pm\\infty$), alors $\\int_a^{+\\infty} f(t)\\,dt$ **diverge** à coup sûr. Mais si $\\int_a^{+\\infty} f$ converge, $f$ peut osciller sans avoir de limite en $+\\infty$.',
            konanTip:
              'Cette question « $\\int_1^{+\\infty} f$ converge $\\implies \\lim_{+\\infty} f = 0$ : Vrai ou Faux ? » tombe régulièrement en QCM théorique d’Analyse 2 : la réponse est **FAUX** en général (mais VRAI si $f$ est monotone) !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p1_ex6',
              type: 'mcq',
              prompt:
                'Soit $f : [1, +\\infty[ \\to \\mathbb{R}$ une fonction continue telle que $\\int_{1}^{+\\infty} f(t)\\,dt$ converge. Laquelle des affirmations suivantes est **toujours vraie** ?',
              options: [
                'Si $f$ admet une limite finie $l$ en $+\\infty$, alors nécessairement $l = 0$',
                '$f$ admet nécessairement une limite en $+\\infty$ et cette limite vaut $0$',
                '$f$ est nécessairement bornée sur $[1, +\\infty[$',
                'Il existe $A > 1$ tel que pour tout $t \\ge A$, $|f(t)| \\le \\frac{1}{t}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une fonction continue dont l’intégrale sur $[1, +\\infty[$ converge peut ne pas avoir de limite en $+\\infty$ (ni même être bornée, avec des pics très étroits). En revanche, si elle possède une limite $l$ en $+\\infty$, cette limite ne peut être que $l = 0$.',
              hint: 'Si $f(t) \\to l \\neq 0$, alors $f(t) \\sim l$, dont l’intégrale sur $[1, +\\infty[$ diverge.',
            },
          },
        ],
      }),

      // ------------------------------------------------------------------------
      // Point 3.2 : Équations différentielles linéaires du premier ordre
      // ------------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_analyse2_ch3_p2',
        order: 2,
        title: 'Équations Différentielles Linéaires du Premier Ordre',
        summary:
          'Équation homogène associée, principe de superposition, méthode de variation de la constante, problème de Cauchy et recollement des solutions.',
        conceptExplanation:
          'Une équation différentielle linéaire du premier ordre sous forme normalisée s’écrit $y\' + a(x)y = b(x)$ où $a$ et $b$ sont des fonctions continues sur un intervalle $I$. Sa résolution suit une structure universelle en deux temps : on résout d’abord l’équation homogène (sans second membre) $y\' + a(x)y = 0$, dont les solutions forment une droite vectorielle engendrée par $e^{-A(x)}$ (où $A$ est une primitive de $a$), puis on ajoute une solution particulière $y_p(x)$ de l’équation complète obtenue par la méthode de **variation de la constante**.',
        formulas: [
          {
            name: 'Solution générale de l’équation homogène y\' + a(x)y = 0',
            formula: 'y_h(x) = C e^{-A(x)} \\quad \\text{où } A(x) = \\int a(x)\\,dx \\text{ et } C \\in \\mathbb{R}',
            note: 'Attention au signe MOINS devant la primitive A(x) lorsque l’équation est écrite y\' + a(x)y = 0.',
          },
          {
            name: 'Formule de variation de la constante pour y\' + a(x)y = b(x)',
            formula: 'y_p(x) = C(x) e^{-A(x)} \\implies C\'(x) = b(x) e^{+A(x)}',
            note: 'La solution générale sur I est y(x) = y_h(x) + y_p(x).',
          },
        ],
        keyRule:
          'Avant d’appliquer toute formule sur $\\alpha(x)y\' + \\beta(x)y = \\gamma(x)$, **normalisez** l’équation en divisant par $\\alpha(x)$ sur un intervalle $I$ où $\\alpha(x) \\neq 0$ !',
        workedExample: {
          title: 'Résolution complète d’une EDL du 1er ordre par variation de la constante',
          statement:
            'Résoudre sur $I = ]0, +\\infty[$ l’équation différentielle $x y\' - y = x^2 e^x$.',
          methodSteps: [
            'Normaliser en divisant par $x > 0$ : $y\' - \\frac{1}{x}y = x e^x$, soit $a(x) = -\\frac{1}{x}$ et $b(x) = x e^x$.',
            'Résoudre l’équation homogène $y\' - \\frac{1}{x}y = 0$ : une primitive de $a(x) = -\\frac{1}{x}$ est $A(x) = -\\ln x$, donc $y_h(x) = C e^{-(-\\ln x)} = C x$ ($C \\in \\mathbb{R}$).',
            'Appliquer la variation de la constante en posant $y_p(x) = C(x) x$ : alors $C\'(x) x = x e^x$, d’où $C\'(x) = e^x$ et on choisit $C(x) = e^x$.',
            'Additionner : $y(x) = y_h(x) + y_p(x) = Cx + x e^x = x(C + e^x)$ avec $C \\in \\mathbb{R}$.',
          ],
          conclusion:
            'Sur $]0, +\\infty[$, les solutions sont les fonctions $y(x) = x(e^x + C)$ où $C \\in \\mathbb{R}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Forme normalisée',
            stepTheme: 'blue',
            stepTitle: 'Mise sous forme normalisée et structure affine de l’ensemble des solutions',
            paragraphText:
              'Toute équation différentielle linéaire du premier ordre $\\alpha(x)y\' + \\beta(x)y = \\gamma(x)$ doit d’abord être étudiée sur un intervalle $I$ sur lequel le coefficient dominant $\\alpha(x)$ **ne s’annule pas**. En divisant par $\\alpha(x)$, on obtient la **forme normalisée** $(E) : y\' + a(x)y = b(x)$, à laquelle on associe l’équation homogène $(E_0) : y\' + a(x)y = 0$. L’ensemble des solutions de $(E_0)$ sur $I$ est un sous-espace vectoriel de dimension $1$ de $\\mathcal{C}^1(I, \\mathbb{R})$, et l’ensemble des solutions de $(E)$ est le sous-espace affine $y_p + \\mathcal{S}_0$ obtenu en ajoutant une solution particulière $y_p$ de $(E)$ à la solution générale $y_h$ de $(E_0)$.',
            formula: {
              name: 'Structure de la solution générale de (E)',
              formula: 'y(x) = y_h(x) + y_p(x) = C e^{-A(x)} + y_p(x) \\quad (C \\in \\mathbb{R})',
              note: 'La constante C est un réel arbitraire tant qu’aucune condition initiale n’est imposée.',
            },
            keyRule:
              'Ne calculez jamais $A(x) = \\int a(x)\\,dx$ avant d’avoir divisé toute l’équation par le coefficient de $y\'$ !',
            konanTip:
              'Si l’équation est $(1+x^2)y\' + 2xy = 1$, $a(x)$ n’est PAS $2x$, mais $a(x) = \\frac{2x}{1+x^2}$ et $b(x) = \\frac{1}{1+x^2}$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p2_ex1',
              type: 'mcq',
              prompt:
                'Quelle est la solution générale sur $\\mathbb{R}$ de l’équation différentielle homogène $(1 + x^2)y\' + 2xy = 0$ ?',
              options: [
                '$y_h(x) = \\frac{C}{1 + x^2}$ avec $C \\in \\mathbb{R}$',
                '$y_h(x) = C(1 + x^2)$ avec $C \\in \\mathbb{R}$',
                '$y_h(x) = C e^{-x^2}$ avec $C \\in \\mathbb{R}$',
                '$y_h(x) = C e^{x^2}$ avec $C \\in \\mathbb{R}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sous forme normalisée : $y\' + \\frac{2x}{1+x^2}y = 0$. Une primitive de $a(x) = \\frac{2x}{1+x^2}$ est $A(x) = \\ln(1+x^2)$. Donc $y_h(x) = C e^{-\\ln(1+x^2)} = \\frac{C}{1+x^2}$ ($C \\in \\mathbb{R}$). On pouvait aussi remarquer que $((1+x^2)y)\' = 0$.',
              hint: 'Normalisez d’abord en $y\' + \\frac{2x}{1+x^2}y = 0$, où $\\frac{2x}{1+x^2}$ est de la forme $\\frac{u\'}{u}$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Équation homogène',
            stepTheme: 'green',
            stepTitle: 'Résolution de l’équation homogène y\' + a(x)y = 0 et attention au signe',
            paragraphText:
              'Pour résoudre $(E_0) : y\' + a(x)y = 0$ sur un intervalle $I$, on détermine une primitive quelconque $A(x) = \\int a(x)\\,dx$ sur $I$ (sans ajouter de constante d’intégration à $A(x)$, car elle serait absorbée par la constante multiplicative $C$). Les solutions de $(E_0)$ sur $I$ sont alors toutes les fonctions de la forme $y_h(x) = C e^{-A(x)}$ avec $C \\in \\mathbb{R}$. Si l’équation est donnée sous la forme $y\' = k(x)y$, alors $a(x) = -k(x)$ et la solution homogène est $y_h(x) = C e^{+\\int k(x)\\,dx}$.',
            formula: {
              name: 'Démonstration rapide par facteur intégrant',
              formula: 'y\' + a(x)y = 0 \\iff e^{A(x)}y\' + a(x)e^{A(x)}y = 0 \\iff \\left(y(x)e^{A(x)}\\right)\' = 0 \\iff y(x) = C e^{-A(x)}',
              note: 'Multiplier par le facteur intégrant e^{A(x)} transforme le premier membre en la dérivée exacte d’un produit.',
            },
            keyRule:
              'Pour ne jamais vous tromper de signe dans $y_h(x) = C e^{\\pm A(x)}$, dérivez mentalement votre solution $y_h(x)$ et vérifiez que $y_h\' + a(x)y_h = 0$ !',
            konanTip:
              'Un test de 3 secondes qui sauve des points : si vous trouvez $y_h(x)$, calculez $y_h\'(x)$. Si les termes s’ajoutent au lieu de s’annuler dans $(E_0)$, c’est que vous avez oublié le signe moins dans l’exponentielle !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p2_ex2',
              type: 'mcq',
              prompt:
                'Quelle est la solution générale sur $]-\\pi/2, \\pi/2[$ de l’équation homogène $y\' - \\tan(x)\\,y = 0$ ?',
              options: [
                '$y_h(x) = \\frac{C}{\\cos x}$ avec $C \\in \\mathbb{R}$',
                '$y_h(x) = C \\cos x$ avec $C \\in \\mathbb{R}$',
                '$y_h(x) = C e^{\\tan x}$ avec $C \\in \\mathbb{R}$',
                '$y_h(x) = \\frac{C}{\\sin x}$ avec $C \\in \\mathbb{R}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Ici $a(x) = -\\tan x = \\frac{-\\sin x}{\\cos x}$, dont une primitive sur $]-\\pi/2, \\pi/2[$ est $A(x) = \\ln(\\cos x)$. Ainsi $y_h(x) = C e^{-A(x)} = C e^{-\\ln(\\cos x)} = \\frac{C}{\\cos x}$.',
              hint: 'Une primitive de $\\tan x = \\frac{\\sin x}{\\cos x}$ est $-\\ln(\\cos x)$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Variation de la constante',
            stepTheme: 'green',
            stepTitle: 'Méthode de variation de la constante pour trouver une solution particulière',
            paragraphText:
              'Lorsqu’aucune solution particulière évidente n’apparaît pour $(E) : y\' + a(x)y = b(x)$, on utilise la **méthode de variation de la constante** de Lagrange. On cherche une solution particulière sous la forme $y_p(x) = C(x) u_0(x)$ où $u_0(x) = e^{-A(x)}$ est une solution non nulle de l’équation homogène. En dérivant le produit : $y_p\'(x) = C\'(x)u_0(x) + C(x)u_0\'(x)$. En injectant dans $(E)$, les termes en $C(x)$ se simplifient toujours car $u_0\' + a(x)u_0 = 0$ ! Il ne reste plus que $C\'(x)u_0(x) = b(x)$.',
            formula: {
              name: 'Équation simplifiée de variation de la constante',
              formula: 'y_p(x) = C(x) u_0(x) \\implies C\'(x) u_0(x) = b(x) \\iff C\'(x) = \\frac{b(x)}{u_0(x)} = b(x) e^{A(x)}',
              note: 'Si les termes en C(x) ne s’éliminent pas lors de l’injection dans (E), c’est que votre solution homogène u_0(x) est fausse !',
            },
            keyRule:
              'Lors de la variation de la constante, la disparition des termes en $C(x)$ sert d’autocontrôle : si $C(x)$ ne disparaît pas, corrigez immédiatement votre solution homogène $u_0(x)$ !',
            konanTip:
              'Attention : dans $C\'(x) u_0(x) = b(x)$, utilisez bien le second membre **normalisé** $b(x)$ (après division par le coefficient de $y\'$) !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p2_ex3',
              type: 'mcq',
              prompt:
                'On résout $y\' + y = e^x$ sur $\\mathbb{R}$. Sachant que la solution homogène est $y_h(x) = C e^{-x}$, quelle fonction $C\'(x)$ obtient-on en posant $y_p(x) = C(x)e^{-x}$ ?',
              options: [
                '$C\'(x) = e^{2x}$, d’où $C(x) = \\frac{1}{2}e^{2x}$ et $y_p(x) = \\frac{1}{2}e^x$',
                '$C\'(x) = 1$, d’où $C(x) = x$ et $y_p(x) = x e^{-x}$',
                '$C\'(x) = e^x$, d’où $C(x) = e^x$ et $y_p(x) = 1$',
                '$C\'(x) = e^{-2x}$, d’où $C(x) = -\\frac{1}{2}e^{-2x}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’équation de variation de la constante donne $C\'(x) e^{-x} = e^x$, soit $C\'(x) = e^{2x}$. En intégrant : $C(x) = \\frac{1}{2}e^{2x}$, et en multipliant par $u_0(x) = e^{-x}$, on obtient $y_p(x) = \\frac{1}{2}e^{2x} e^{-x} = \\frac{1}{2}e^x$.',
              hint: 'Résolvez $C\'(x) e^{-x} = e^x$ en multipliant les deux membres par $e^x$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Superposition',
            stepTheme: 'violet',
            stepTitle: 'Principe de superposition et théorème de Cauchy-Lipschitz linéaire',
            paragraphText:
              'Par linéarité de la dérivation, si le second membre se décompose en une somme $b(x) = \\lambda_1 b_1(x) + \\lambda_2 b_2(x)$, et si $y_{p,1}$ et $y_{p,2}$ sont des solutions particulières associées respectivement à $b_1(x)$ et $b_2(x)$, alors $y_p = \\lambda_1 y_{p,1} + \\lambda_2 y_{p,2}$ est une solution particulière pour $b(x)$ : c’est le **principe de superposition**. Par ailleurs, le théorème de Cauchy-Lipschitz assure que pour tout couple $(x_0, y_0) \\in I \\times \\mathbb{R}$, il existe une **unique** solution de $(E)$ sur $I$ vérifiant la condition initiale $y(x_0) = y_0$.',
            formula: {
              name: 'Problème de Cauchy du 1er ordre sur I',
              formula: '\\begin{cases} y\' + a(x)y = b(x) \\\\ y(x_0) = y_0 \\end{cases} \\iff y(x) = y_0 e^{-(A(x)-A(x_0))} + \\int_{x_0}^{x} b(t) e^{-(A(x)-A(t))}\\,dt',
              note: 'Existence et unicité globales sur tout l’intervalle I où a et b sont continues.',
            },
            keyRule:
              'Ne déterminez la constante $C$ avec la condition initiale $y(x_0) = y_0$ qu’à la **toute fin**, sur la solution générale complète $y(x) = y_h(x) + y_p(x)$ (jamais sur $y_h$ seule !).',
            konanTip:
              'Erreur classique en contrôle : calculer $C$ sur $y_h(x_0) = y_0$ avant d’avoir ajouté $y_p(x)$. C’est faux sauf si vous avez choisi $y_p$ telle que $y_p(x_0) = 0$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p2_ex4',
              type: 'mcq',
              prompt:
                'Quelle est l’unique solution sur $\\mathbb{R}$ du problème de Cauchy $y\' + 2y = 4$ vérifiant la condition initiale $y(0) = 5$ ?',
              options: [
                '$y(x) = 3e^{-2x} + 2$',
                '$y(x) = 5e^{-2x} + 2$',
                '$y(x) = 3e^{2x} + 2$',
                '$y(x) = 5e^{-2x} + 4$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La solution homogène est $y_h(x) = C e^{-2x}$ et une solution particulière constante évidente est $y_p(x) = 2$. La solution générale est donc $y(x) = C e^{-2x} + 2$. La condition initiale $y(0) = 5$ donne $C + 2 = 5 \\implies C = 3$, soit $y(x) = 3e^{-2x} + 2$.',
              hint: 'Écrivez d’abord $y(x) = Ce^{-2x} + 2$, puis résolvez $y(0) = C + 2 = 5$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Recollement',
            stepTheme: 'green',
            stepTitle: 'Recollement des solutions lorsque le coefficient de y\' s’annule',
            paragraphText:
              'Lorsque le coefficient $\\alpha(x)$ devant $y\'$ dans $\\alpha(x)y\' + \\beta(x)y = \\gamma(x)$ s’annule en un point $x_0$ (par exemple $x y\' - 2y = 0$ en $x_0 = 0$), on résout d’abord l’équation séparément sur $I_- = ]-\\infty, 0[$ (avec une constante $C_-$) et sur $I_+ = ]0, +\\infty[$ (avec une constante $C_+$, a priori indépendante de $C_-$). Ensuite, on cherche à quelles conditions sur $(C_-, C_+)$ la fonction recollée sur $\\mathbb{R}$ est : (1) **continue** en $0$, (2) **dérivable** en $0$, et (3) **vérifie l’équation différentielle** en $x = 0$.',
            formula: {
              name: 'Exemple de recollement sur R pour x y\' - 2y = 0',
              formula: 'y(x) = \\begin{cases} C_- x^2 & \\text{si } x < 0 \\\\ 0 & \\text{si } x = 0 \\\\ C_+ x^2 & \\text{si } x > 0 \\end{cases} \\quad (C_-, C_+ \\in \\mathbb{R})',
              note: 'Ici, quels que soient C_- et C_+, la fonction est C^1 sur ℝ : l’espace des solutions sur ℝ est de dimension 2 !',
            },
            keyRule:
              'Sur deux intervalles disjoints $]-\\infty, x_0[$ et $]x_0, +\\infty[$, utilisez toujours **deux constantes distinctes** $C_-$ et $C_+$ avant d’étudier le recollement en $x_0$.',
            konanTip:
              'Comparez : pour $x y\' - y = 0$, on a $y(x) = C_- x$ ($x<0$) et $C_+ x$ ($x>0$), la dérivabilité en $0$ impose $C_- = C_+$ (dimension 1). Pour $x y\' + y = 0$, $y(x) = C/x$ explose en $0$ sauf si $C_- = C_+ = 0$ (seule la fonction nulle se recolle sur $\\mathbb{R}$) !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p2_ex5',
              type: 'mcq',
              prompt:
                'On considère l’équation $x y\' - y = 0$ sur $\\mathbb{R}$. Sur $]-\\infty, 0[$, $y(x) = C_- x$ et sur $]0, +\\infty[$, $y(x) = C_+ x$. Quelle condition est nécessaire et suffisante pour obtenir une solution dérivable sur $\\mathbb{R}$ tout entier ?',
              options: [
                '$C_- = C_+$ (la dérivée à gauche en $0$ doit être égale à la dérivée à droite en $0$)',
                '$C_- = C_+ = 0$ (seule la fonction nulle est solution sur $\\mathbb{R}$)',
                'Aucune condition : tout couple $(C_-, C_+) \\in \\mathbb{R}^2$ convient',
                '$C_- = -C_+$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En posant $y(0) = 0$, la fonction est continue en $0$ quels que soient $C_-$ et $C_+$. Mais sa dérivée à gauche en $0$ vaut $C_-$ et sa dérivée à droite vaut $C_+$ : elle est donc dérivable en $0$ si et seulement si $C_- = C_+$.',
              hint: 'Comparez la pente à gauche $y\'_g(0) = C_-$ et la pente à droite $y\'_d(0) = C_+$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Bernoulli & Riccati',
            stepTheme: 'slate',
            stepTitle: 'Équations de Bernoulli se ramenant à une équation linéaire du 1er ordre',
            paragraphText:
              'Une équation de **Bernoulli** est une équation différentielle non linéaire de la forme $y\' + a(x)y = b(x) y^\\alpha$ où $\\alpha \\in \\mathbb{R} \\setminus \\{0, 1\\}$. En supposant que $y$ ne s’annule pas, on divise par $y^\\alpha$ pour obtenir $y\' y^{-\\alpha} + a(x) y^{1-\\alpha} = b(x)$. En effectuant le changement de fonction inconnue $z(x) = y(x)^{1-\\alpha}$, on a $z\'(x) = (1-\\alpha)y\'(x)y(x)^{-\\alpha}$, ce qui transforme l’équation de Bernoulli en une **équation différentielle linéaire du premier ordre** en $z$ : $\\frac{1}{1-\\alpha}z\' + a(x)z = b(x)$.',
            formula: {
              name: 'Linéarisation d’une équation de Bernoulli par z = y^{1-α}',
              formula: 'y\' + a(x)y = b(x)y^\\alpha \\xrightarrow{z = y^{1-\\alpha}} z\' + (1-\\alpha)a(x)z = (1-\\alpha)b(x)',
              note: 'Pour α = 2 (y\' + a(x)y = b(x)y^2), on pose z = y^{1-2} = 1/y.',
            },
            keyRule:
              'Dans une équation de Bernoulli $y\' + a(x)y = b(x)y^\\alpha$, posez toujours $z = y^{1-\\alpha}$ (par exemple $z = \\frac{1}{y}$ lorsque $\\alpha = 2$).',
            konanTip:
              'Ce changement de fonction $z = y^{1-\\alpha}$ est systématiquement rappelé ou demandé en première question des exercices d’approfondissement de TD.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p2_ex6',
              type: 'mcq',
              prompt:
                'Quel changement de fonction inconnue $z(x)$ permet de transformer l’équation de Bernoulli $y\' + x y = x y^3$ ($y > 0$) en une équation différentielle linéaire du premier ordre ?',
              options: [
                '$z = y^{1-3} = \\frac{1}{y^2}$',
                '$z = \\frac{1}{y}$',
                '$z = y^3$',
                '$z = \\ln(y)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Ici l’exposant de Bernoulli est $\\alpha = 3$. Le changement de fonction canonique est donc $z = y^{1 - \\alpha} = y^{1 - 3} = y^{-2} = \\frac{1}{y^2}$ (qui donne $z\' - 2xz = -2x$).',
              hint: 'Appliquez la formule $z = y^{1 - \\alpha}$ avec $\\alpha = 3$.',
            },
          },
        ],
      }),

      // ------------------------------------------------------------------------
      // Point 3.3 : Équations différentielles linéaires du second ordre à coefficients constants
      // ------------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_analyse2_ch3_p3',
        order: 3,
        title: 'Équations Différentielles Linéaires du Second Ordre à Coefficients Constants',
        summary:
          'Équation caractéristique ar² + br + c = 0, discussion suivant le signe de Δ, recherche d’une solution particulière pour un second membre polynomial-exponentiel ou trigonométrique.',
        conceptExplanation:
          'Les équations différentielles linéaires du second ordre à coefficients constants $a y\'\' + b y\' + c y = f(x)$ ($a \\neq 0$) modélisent l’ensemble des oscillateurs mécaniques et des circuits électriques RLC en télécommunications et électronique. La résolution de l’équation homogène se ramène purement à l’algèbre du polynôme caractéristique $a r^2 + b r + c = 0$ suivant le signe de son discriminant $\\Delta = b^2 - 4ac$, tandis que la recherche d’une solution particulière s’appuie sur la forme du second membre $f(x) = P(x)e^{mx}$.',
        formulas: [
          {
            name: 'Solutions réelles de ay\'\' + by\' + cy = 0 suivant Δ = b^2 - 4ac',
            formula: '\\begin{cases} \\Delta > 0 : & y_h(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x} \\\\ \\Delta = 0 : & y_h(x) = (C_1 + C_2 x) e^{r_0 x} \\\\ \\Delta < 0 \\; (r = \\alpha \\pm i\\omega) : & y_h(x) = e^{\\alpha x}\\big(C_1 \\cos(\\omega x) + C_2 \\sin(\\omega x)\\big) \\end{cases}',
            note: 'C_1 et C_2 sont deux constantes réelles déterminées par les conditions initiales y(x_0) et y\'(x_0).',
          },
          {
            name: 'Forme de la solution particulière pour f(x) = P(x)e^{mx}',
            formula: 'y_p(x) = x^k Q(x) e^{mx} \\quad \\text{avec } \\deg Q = \\deg P \\text{ et } k \\in \\{0, 1, 2\\}',
            note: 'k est la multiplicité de m comme racine de l’équation caractéristique ar^2 + br + c = 0.',
          },
        ],
        keyRule:
          'Pour un second membre $f(x) = P(x)e^{mx}$, comptez toujours la multiplicité $k \\in \\{0, 1, 2\\}$ de $m$ parmi les racines de $ar^2 + br + c = 0$ afin de multiplier le polynôme d’essai $Q(x)$ par $x^k$ !',
        workedExample: {
          title: 'Résolution d’une EDL du second ordre avec résonance sur une racine simple',
          statement:
            'Résoudre sur $\\mathbb{R}$ l’équation différentielle $y\'\' - 3y\' + 2y = e^x$.',
          methodSteps: [
            'Former l’équation caractéristique : $r^2 - 3r + 2 = 0 \\iff (r - 1)(r - 2) = 0$, de racines réelles distinctes $r_1 = 1$ et $r_2 = 2$.',
            'Écrire la solution générale de l’équation homogène : $y_h(x) = C_1 e^x + C_2 e^{2x}$ avec $(C_1, C_2) \\in \\mathbb{R}^2$.',
            'Pour le second membre $f(x) = 1 \\cdot e^{1x}$, on a $m = 1$ qui est **racine simple** ($k = 1$) de l’équation caractéristique. On cherche donc $y_p(x) = A x e^x$.',
            'Calculer $y_p\'(x) = A(x+1)e^x$ et $y_p\'\'(x) = A(x+2)e^x$. En injectant : $A[(x+2) - 3(x+1) + 2x]e^x = -A e^x = e^x \\implies A = -1$.',
          ],
          conclusion:
            'La solution générale sur $\\mathbb{R}$ est $y(x) = C_1 e^x + C_2 e^{2x} - x e^x$ où $(C_1, C_2) \\in \\mathbb{R}^2$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Cas Δ > 0 et Δ = 0',
            stepTheme: 'violet',
            stepTitle: 'Équation caractéristique ar² + br + c = 0 : racines réelles (Δ > 0 et Δ = 0)',
            paragraphText:
              'En cherchant des solutions exponentielles $y(x) = e^{rx}$ de l’équation homogène $(E_0) : a y\'\' + b y\' + c y = 0$ ($a \\neq 0$), on obtient $e^{rx}(ar^2 + br + c) = 0$, d’où l’**équation caractéristique** $ar^2 + br + c = 0$ de discriminant $\\Delta = b^2 - 4ac$. L’espace des solutions de $(E_0)$ étant de dimension $2$ :\n- Si $\\Delta > 0$, le polynôme admet deux racines réelles distinctes $r_1 \\neq r_2$ et $y_h(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x}$ ;\n- Si $\\Delta = 0$, le polynôme admet une racine réelle double $r_0 = -\\frac{b}{2a}$ et une base de solutions est $(e^{r_0 x}, x e^{r_0 x})$, d’où $y_h(x) = (C_1 + C_2 x)e^{r_0 x}$.',
            formula: {
              name: 'Solutions homogènes pour Δ > 0 et Δ = 0',
              formula: '\\Delta > 0 \\implies y_h(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x}, \\qquad \\Delta = 0 \\implies y_h(x) = (C_1 + C_2 x)e^{r_0 x}',
              note: 'En physique (circuit RLC), Δ > 0 correspond au régime apériodique et Δ = 0 au régime critique.',
            },
            keyRule:
              'Lorsque $\\Delta = 0$ (racine double $r_0$), n’oubliez jamais le facteur $x$ devant $C_2$ : $y_h(x) = (C_1 + C_2 x)e^{r_0 x}$ !',
            konanTip:
              'Une équation différentielle d’ordre 2 doit toujours avoir **deux constantes indépendantes** $C_1$ et $C_2$ dans sa solution générale homogène.',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p3_ex1',
              type: 'mcq',
              prompt:
                'Quelle est la solution générale sur $\\mathbb{R}$ de l’équation différentielle homogène $y\'\' - 4y\' + 4y = 0$ ?',
              options: [
                '$y_h(x) = (C_1 + C_2 x)e^{2x}$ avec $(C_1, C_2) \\in \\mathbb{R}^2$',
                '$y_h(x) = C_1 e^{2x} + C_2 e^{-2x}$ avec $(C_1, C_2) \\in \\mathbb{R}^2$',
                '$y_h(x) = C_1 \\cos(2x) + C_2 \\sin(2x)$ avec $(C_1, C_2) \\in \\mathbb{R}^2$',
                '$y_h(x) = C_1 e^{2x}$ avec $C_1 \\in \\mathbb{R}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’équation caractéristique est $r^2 - 4r + 4 = (r - 2)^2 = 0$, qui admet une racine double $r_0 = 2$ ($\\Delta = 0$). La solution générale est donc $y_h(x) = (C_1 + C_2 x)e^{2x}$.',
              hint: 'Reconnaissez l’identité remarquable $r^2 - 4r + 4 = (r - 2)^2 = 0$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Cas Δ < 0 (Complexe)',
            stepTheme: 'violet',
            stepTitle: 'Équation caractéristique à racines complexes conjuguées (Δ < 0)',
            paragraphText:
              'Lorsque $\\Delta = b^2 - 4ac < 0$, l’équation caractéristique $ar^2 + br + c = 0$ à coefficients réels admet deux racines complexes conjuguées $r_1 = \\alpha + i\\omega$ et $r_2 = \\alpha - i\\omega$, où $\\alpha = -\\frac{b}{2a}$ est la partie réelle (amortissement) et $\\omega = \\frac{\\sqrt{|\\Delta|}}{2|a|} > 0$ est la pulsation propre. En prenant la partie réelle et la partie imaginaire de $e^{(\\alpha + i\\omega)x} = e^{\\alpha x}(\\cos(\\omega x) + i\\sin(\\omega x))$, on obtient la forme réelle générale des solutions homogènes.',
            formula: {
              name: 'Solution homogène réelle pour Δ < 0 (r = α ± iω)',
              formula: 'y_h(x) = e^{\\alpha x} \\Big( C_1 \\cos(\\omega x) + C_2 \\sin(\\omega x) \\Big) \\quad (C_1, C_2 \\in \\mathbb{R})',
              note: 'Cas particulier où α = 0 (y\'\' + ω^2 y = 0) : y_h(x) = C_1 cos(ωx) + C_2 sin(ωx).',
            },
            keyRule:
              'Dans $r = \\alpha \\pm i\\omega$, la partie réelle $\\alpha$ va dans l’exponentielle $e^{\\alpha x}$ et la partie imaginaire $\\omega$ va dans $\\cos(\\omega x)$ et $\\sin(\\omega x)$ !',
            konanTip:
              'Ne laissez jamais de nombre complexe $i$ dans la solution réelle d’une équation différentielle réelle : utilisez toujours la forme $e^{\\alpha x}(C_1 \\cos(\\omega x) + C_2 \\sin(\\omega x))$.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Synthèse des 4 régimes d’une EDL d’ordre 2 : ay\'\' + by\' + cy = f(x)',
              caption: 'Classification complète des solutions homogènes et particulières.',
              matrix2x2: {
                topAxis: ['Racines Réelles (Δ ≥ 0)', 'Racines Complexes (Δ < 0)'],
                leftAxis: ['Équation Homogène', 'Solution Particulière'],
                topLeft: {
                  title: 'Régimes Apériodique & Critique',
                  items: [
                    'Δ > 0 (r₁ ≠ r₂) : C₁e^{r₁x} + C₂e^{r₂x}',
                    'Δ = 0 (r₀ double) : (C₁ + C₂x)e^{r₀x}',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'Régime Pseudo-Périodique (r = α ± iω)',
                  items: [
                    'Δ < 0 : e^{αx}(C₁cos(ωx) + C₂sin(ωx))',
                    'Si α = 0 (y\'\' + ω²y = 0) : oscillateur harmonique',
                  ],
                  color: 'violet',
                },
                bottomLeft: {
                  title: 'Second membre f(x) = P(x)e^{mx}',
                  items: [
                    'm non racine (k=0) : y_p = Q(x)e^{mx}',
                    'm racine simple (k=1) : y_p = x·Q(x)e^{mx}',
                    'm racine double (k=2) : y_p = x²·Q(x)e^{mx}',
                  ],
                  color: 'green',
                },
                bottomRight: {
                  title: 'Second membre cos(ωx) ou sin(ωx)',
                  items: [
                    'Si iω non racine : y_p = A cos(ωx) + B sin(ωx)',
                    'Si iω racine : y_p = x(A cos(ωx) + B sin(ωx))',
                    'Ou passer en complexe avec Re(e^{iωx}) / Im(e^{iωx})',
                  ],
                  color: 'orange',
                },
              },
            },
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p3_ex2',
              type: 'mcq',
              prompt:
                'Quelle est la solution générale réelle sur $\\mathbb{R}$ de l’équation différentielle homogène $y\'\' + 2y\' + 5y = 0$ ?',
              options: [
                '$y_h(x) = e^{-x}\\big(C_1 \\cos(2x) + C_2 \\sin(2x)\\big)$',
                '$y_h(x) = e^{2x}\\big(C_1 \\cos(x) + C_2 \\sin(x)\\big)$',
                '$y_h(x) = e^{x}\\big(C_1 \\cos(2x) + C_2 \\sin(2x)\\big)$',
                '$y_h(x) = C_1 e^{-x} + C_2 e^{2x}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’équation caractéristique est $r^2 + 2r + 5 = (r + 1)^2 + 4 = 0$, dont les racines sont $r = -1 \\pm 2i$ ($\\alpha = -1$, $\\omega = 2$). La solution générale réelle est donc $y_h(x) = e^{-x}(C_1 \\cos(2x) + C_2 \\sin(2x))$.',
              hint: 'Résolvez $r^2 + 2r + 5 = 0$ pour trouver $\\alpha = -1$ et $\\omega = 2$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Second membre P(x)e^{mx}',
            stepTheme: 'green',
            stepTitle: 'Solution particulière pour un second membre polynomial-exponentiel P(x)e^{mx}',
            paragraphText:
              'Lorsque le second membre est de la forme $f(x) = P(x)e^{mx}$ où $P$ est un polynôme de degré $n$ et $m \\in \\mathbb{C}$ (notez que si $m = 0$, $f(x) = P(x)$ est un simple polynôme !), il existe une solution particulière de la forme $y_p(x) = x^k Q(x) e^{mx}$ où $\\deg Q = \\deg P = n$ et où l’entier $k \\in \\{0, 1, 2\\}$ dépend du fait que $m$ soit racine ou non de l’équation caractéristique $ar^2 + br + c = 0$ :\n- $k = 0$ si $am^2 + bm + c \\neq 0$ ($m$ n’est pas racine) ;\n- $k = 1$ si $m$ est racine simple ;\n- $k = 2$ si $m$ est racine double.',
            formula: {
              name: 'Règle de multiplicité k pour y_p(x) = x^k Q(x) e^{mx}',
              formula: 'k = \\begin{cases} 0 & \\text{si } m \\notin \\{r_1, r_2\\} \\\\ 1 & \\text{si } m \\text{ est racine simple de } ar^2+br+c=0 \\\\ 2 & \\text{si } m \\text{ est racine double de } ar^2+br+c=0 \\end{cases}',
              note: 'Pour un second membre purement polynomial P(x), on applique la même règle avec m = 0 !',
            },
            keyRule:
              'Un second membre purement polynomial $P(x)$ correspond à $m = 0$ ($e^{0x} = 1$) : si $c = 0$ dans $ay\'\' + by\' + cy$, alors $m = 0$ est racine caractéristique et il faut multiplier $Q(x)$ par $x$ (ou $x^2$ si $b = c = 0$) !',
            konanTip:
              'N’oubliez jamais tous les degrés intermédiaires dans votre polynôme d’essai $Q(x)$ : si $P(x) = x^2$, vous devez poser $Q(x) = Ax^2 + Bx + C$ complet (et non pas seulement $Ax^2$) !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p3_ex3',
              type: 'mcq',
              prompt:
                'Sous quelle forme doit-on chercher une solution particulière $y_p(x)$ de l’équation différentielle $y\'\' - 4y\' + 4y = 3 e^{2x}$ ?',
              options: [
                '$y_p(x) = A x^2 e^{2x}$ car $m = 2$ est racine double de $r^2 - 4r + 4 = 0$',
                '$y_p(x) = A e^{2x}$',
                '$y_p(x) = A x e^{2x}$',
                '$y_p(x) = (Ax + B)e^{2x}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le second membre est $P(x)e^{mx}$ avec $P(x) = 3$ (degré 0) et $m = 2$. Or l’équation caractéristique $(r - 2)^2 = 0$ admet $m = 2$ comme **racine double** ($k = 2$). On cherche donc $y_p(x) = x^2 Q(x)e^{2x} = A x^2 e^{2x}$ (ce qui donne d’ailleurs $2A e^{2x} = 3e^{2x} \\implies A = 3/2$).',
              hint: 'Quelle est la multiplicité $k$ de $m = 2$ comme racine de $(r - 2)^2 = 0$ ?',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Second membre trigo',
            stepTheme: 'green',
            stepTitle: 'Solution particulière pour un second membre trigonométrique et résonance',
            paragraphText:
              'Lorsque le second membre est de la forme $f(x) = \\alpha \\cos(\\omega x) + \\beta \\sin(\\omega x)$ (ou $e^{px}\\cos(\\omega x)$), deux approches sont possibles :\n1. **Approche réelle** : si $i\\omega$ n’est pas racine de $ar^2 + br + c = 0$, on cherche $y_p(x) = A\\cos(\\omega x) + B\\sin(\\omega x)$ (avec les deux termes $\\cos$ et $\\sin$ même si un seul figure dans $f(x)$ !). Si $i\\omega$ est racine (cas de résonance pure $y\'\' + \\omega^2 y = \\cos(\\omega x)$), on multiplie par $x$ : $y_p(x) = x(A\\cos(\\omega x) + B\\sin(\\omega x))$.\n2. **Approche complexe** : on résout avec le second membre $e^{i\\omega x}$, puis on prend la partie réelle (pour $\\cos$) ou imaginaire (pour $\\sin$).',
            formula: {
              name: 'Forme d’essai réelle pour f(x) = α cos(ωx) + β sin(ωx)',
              formula: 'y_p(x) = \\begin{cases} A\\cos(\\omega x) + B\\sin(\\omega x) & \\text{si } a(i\\omega)^2 + b(i\\omega) + c \\neq 0 \\\\ x\\big(A\\cos(\\omega x) + B\\sin(\\omega x)\\big) & \\text{si } i\\omega \\text{ est racine caractéristique} \\end{cases}',
              note: 'Dès que b ≠ 0 (présence d’un terme d’amortissement by\'), il faut inclure à la fois cos(ωx) et sin(ωx).',
            },
            keyRule:
              'Même si le second membre est uniquement $\\cos(\\omega x)$, cherchez toujours $y_p(x)$ sous la forme complète $A\\cos(\\omega x) + B\\sin(\\omega x)$ (ou multipliez par $x$ s’il y a résonance).',
            konanTip:
              'Pour résoudre $y\'\' + y = \\cos(x)$, comme $i$ est racine de $r^2 + 1 = 0$, passez en complexe avec $z\'\' + z = e^{ix}$ : en posant $z_p = A x e^{ix}$, on trouve immédiatement $2iA = 1 \\implies A = -i/2$, d’où $y_p = \\text{Re}\\left(-\\frac{i}{2}x(\\cos x + i\\sin x)\\right) = \\frac{1}{2}x\\sin x$ !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p3_ex4',
              type: 'mcq',
              prompt:
                'Quelle est une solution particulière sur $\\mathbb{R}$ de l’équation d’oscillateur en résonance $y\'\' + y = \\cos(x)$ ?',
              options: [
                '$y_p(x) = \\frac{1}{2} x \\sin(x)$',
                '$y_p(x) = \\frac{1}{2} \\cos(x)$',
                '$y_p(x) = \\frac{1}{2} x \\cos(x)$',
                '$y_p(x) = -\\frac{1}{2} \\sin(x)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’équation caractéristique est $r^2 + 1 = 0$ de racines $\\pm i$. Pour le second membre $\\cos(x) = \\text{Re}(e^{ix})$, $m = i$ est racine simple ($k = 1$). En cherchant $y_p(x) = x(A\\cos x + B\\sin x)$, on a $y_p\'\' + y_p = -2A\\sin x + 2B\\cos x = \\cos x$, d’où $A = 0$ et $B = \\frac{1}{2}$, soit $y_p(x) = \\frac{1}{2}x\\sin x$.',
              hint: 'Dérivez deux fois $y_p(x) = \\frac{1}{2}x\\sin(x)$ : vous obtiendrez $y_p\'\'(x) = \\cos(x) - \\frac{1}{2}x\\sin(x)$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Problème de Cauchy',
            stepTheme: 'violet',
            stepTitle: 'Problème de Cauchy d’ordre 2 : détermination de (C₁, C₂) par y(x₀) et y\'(x₀)',
            paragraphText:
              'Pour une équation différentielle linéaire du second ordre normalisée $y\'\' + p(x)y\' + q(x)y = g(x)$ à coefficients continus sur $I$, le théorème de Cauchy-Lipschitz stipule qu’il faut fixer **deux** conditions initiales en un même point $x_0 \\in I$ pour garantir l’existence et l’unicité de la solution : la position initiale $y(x_0) = y_0$ et la vitesse (ou pente) initiale $y\'(x_0) = v_0$. Ces deux conditions fournissent un système linéaire inversible de deux équations à deux inconnues $(C_1, C_2)$ sur la solution générale complète $y(x) = y_h(x) + y_p(x)$.',
            formula: {
              name: 'Système de Cauchy à l’instant initial x_0',
              formula: '\\begin{cases} y(x_0) = y_h(x_0) + y_p(x_0) = y_0 \\\\ y\'(x_0) = y_h\'(x_0) + y_p\'(x_0) = v_0 \\end{cases} \\implies \\text{couple unique } (C_1, C_2) \\in \\mathbb{R}^2',
              note: 'Le déterminant de ce système est le Wronskien W(x_0) ≠ 0 des deux solutions de base.',
            },
            keyRule:
              'Écrivez toujours la solution générale complète $y(x) = y_h(x) + y_p(x)$ et sa dérivée $y\'(x) = y_h\'(x) + y_p\'(x)$ AVANT de remplacer $x$ par $x_0$ pour calculer $C_1$ et $C_2$.',
            konanTip:
              'Pour $y(x) = C_1 \\cos(\\omega x) + C_2 \\sin(\\omega x)$ en $x_0 = 0$, le calcul est immédiat : $y(0) = C_1$ et $y\'(0) = \\omega C_2$ (n’oubliez pas le facteur $\\omega$ en dérivant $\\sin(\\omega x)$ !).',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p3_ex5',
              type: 'mcq',
              prompt:
                'Quelle est l’unique solution sur $\\mathbb{R}$ du problème de Cauchy $y\'\' + 4y = 0$ vérifiant $y(0) = 3$ et $y\'(0) = 4$ ?',
              options: [
                '$y(x) = 3\\cos(2x) + 2\\sin(2x)$',
                '$y(x) = 3\\cos(2x) + 4\\sin(2x)$',
                '$y(x) = 3e^{2x} + 2e^{-2x}$',
                '$y(x) = 4\\cos(2x) + 3\\sin(2x)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’équation caractéristique $r^2 + 4 = 0$ a pour racines $\\pm 2i$, donc $y(x) = C_1 \\cos(2x) + C_2 \\sin(2x)$ et $y\'(x) = -2C_1 \\sin(2x) + 2C_2 \\cos(2x)$. En $x = 0$, $y(0) = C_1 = 3$ et $y\'(0) = 2C_2 = 4 \\implies C_2 = 2$.',
              hint: 'Attention à la dérivée : $(\\sin(2x))\' = 2\\cos(2x)$, donc $y\'(0) = 2C_2$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Équation d’Euler',
            stepTheme: 'slate',
            stepTitle: 'Équations du second ordre à coefficients variables se ramenant à des coefficients constants',
            paragraphText:
              'Certaines équations différentielles linéaires du second ordre à coefficients variables, comme l’**équation d’Euler** $x^2 y\'\' + a x y\' + b y = f(x)$ sur $]0, +\\infty[$, se ramènent à une équation à coefficients constants grâce au changement de variable $x = e^t \\iff t = \\ln x$. En posant $z(t) = y(e^t)$, la règle de dérivation des fonctions composées donne $x y\'(x) = z\'(t)$ et $x^2 y\'\'(x) = z\'\'(t) - z\'(t)$, ce qui transforme l’équation d’Euler en $z\'\'(t) + (a - 1)z\'(t) + b z(t) = f(e^t)$ !',
            formula: {
              name: 'Transformation d’Euler par x = e^t (ou essai direct y(x) = x^r)',
              formula: 'x^2 y\'\' + a x y\' + b y = 0 \\xrightarrow{y(x) = x^r} r(r - 1) + a r + b = 0',
              note: 'En posant t = ln(x) et z(t) = y(e^t), on a x^2 y\'\' = z\'\'(t) - z\'(t) et x y\' = z\'(t).',
            },
            keyRule:
              'Face à une équation homogène d’Euler $x^2 y\'\' + a x y\' + b y = 0$ sur $]0, +\\infty[$, cherchez des solutions puissances $y(x) = x^r$ ou posez $x = e^t$.',
            konanTip:
              'Si l’énoncé d’examen vous donne une équation du 2nd ordre à coefficients variables, le changement de variable (comme $t = \\ln x$) ou une première solution $y_1(x)$ de l’équation homogène vous est toujours indiqué : suivez scrupuleusement les questions intermédiaires !',
            exercise: {
              id: 'lmd_srit_l1_analyse2_ch3_p3_ex6',
              type: 'mcq',
              prompt:
                'En cherchant des solutions de la forme $y(x) = x^r$ sur $]0, +\\infty[$ pour l’équation d’Euler $x^2 y\'\' - 2x y\' + 2y = 0$, quelle équation du second degré vérifie l’exposant $r$ et quelle est la solution générale ?',
              options: [
                '$r(r-1) - 2r + 2 = r^2 - 3r + 2 = 0$, d’où $y(x) = C_1 x + C_2 x^2$',
                '$r^2 - 2r + 2 = 0$, d’où $y(x) = C_1 e^x \\cos x + C_2 e^x \\sin x$',
                '$r(r-1) - 2r + 2 = 0$, d’où $y(x) = C_1 e^x + C_2 e^{2x}$',
                '$r^2 - r + 2 = 0$, d’où $y(x) = (C_1 + C_2 \\ln x)x$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $y(x) = x^r$, on a $x y\'(x) = r x^r$ et $x^2 y\'\'(x) = r(r-1)x^r$. En injectant dans l’équation, on obtient $[r(r-1) - 2r + 2]x^r = (r^2 - 3r + 2)x^r = 0$, dont les racines sont $r_1 = 1$ et $r_2 = 2$. La solution générale sur $]0, +\\infty[$ est donc $y(x) = C_1 x + C_2 x^2$.',
              hint: 'Remplacez $x^2 y\'\'$ par $r(r-1)x^r$ et $x y\'$ par $r x^r$.',
            },
          },
        ],
      }),
    ],
  },
];
