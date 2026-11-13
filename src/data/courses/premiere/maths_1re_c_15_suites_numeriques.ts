import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 15 : Suites numériques.pdf » (format v2).
export const MATHS_1RE_C_L15_SUITES_NUMERIQUES: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l15_suites_numeriques',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 15,
  title: 'Leçon 15 : Suites numériques',
  summary:
    'Suites définies par formule explicite ou par récurrence, représentation graphique, suites arithmétiques et géométriques (terme général, somme), suites auxiliaires et modélisation.',
  officialVolumeHours: 9,
  contentVersion: 2,
  source: '1ère C - Leçon 15 : Suites numériques.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Définition d'une suite numérique et modes de génération
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01',
      order: 1,
      title: 'Définition d’une suite et modes de génération',
      summary:
        'Distinguer une suite numérique d’une fonction sur ℝ et calculer ses termes par formule explicite ou par récurrence.',
      conceptExplanation:
        "On appelle **suite numérique** toute fonction définie de $\\mathbb{N}$ (ou d'une partie de $\\mathbb{N}$ comme $\\mathbb{N}^*$) vers $\\mathbb{R}$ :\n$$U : \\mathbb{N} \\longrightarrow \\mathbb{R}, \\quad n \\longmapsto U(n) = U_n$$\nOn note la suite $(U_n)_{n\\in\\mathbb{N}}$ ou simplement $(U_n)$. Le nombre $U_n$ est le **terme d'indice $n$** (ou terme général).\n\nIl existe deux principales façons de définir une suite :\n- **Formule explicite** : $U_n = f(n)$ (ex. $U_n = 3n + 5$ ou $W_n = -6\\left(\\dfrac{1}{2}\\right)^n + 10$). On peut calculer $U_{10}$ directement en remplaçant $n$ par $10$.\n- **Formule de récurrence** : on donne un terme initial (ex. $V_0 = 7$) et une relation $V_{n+1} = f(V_n)$ liant chaque terme au précédent. Pour trouver $V_4$, il faut calculer successivement $V_1$, $V_2$, $V_3$, puis $V_4$.",
      keyRule:
        'Une suite est définie sur ℕ (ou ℕ*). Explicite : on calcule Uₙ directement ; récurrence : on calcule terme après terme depuis le rang initial.',
      formulas: [
        { name: 'Formule explicite', formula: 'U_n = f(n) \\quad (n \\in \\mathbb{N})' },
        { name: 'Formule de récurrence', formula: 'U_0 \\text{ donné et } \\forall n \\in \\mathbb{N},\\ U_{n+1} = f(U_n)' },
      ],
      workedExample: {
        title: 'Calculer des termes par formule explicite et par récurrence',
        statement:
          '1. Soit $(W_n)_{n\\in\\mathbb{N}}$ définie par $W_n = -6\\left(\\dfrac{1}{2}\\right)^n + 10$. Calcule $W_0$ et $W_5$.\n2. Soit $(V_n)_{n\\in\\mathbb{N}}$ définie par $V_0 = 7$ et $\\forall n\\in\\mathbb{N},\\ V_{n+1} = 2V_n - 5$. Calcule $V_1, V_2, V_3$.',
        methodSteps: [
          '1. Formule explicite : $W_0 = -6\\left(\\dfrac{1}{2}\\right)^0 + 10 = -6 + 10 = 4$. Et $W_5 = -6\\times\\dfrac{1}{32} + 10 = -\\dfrac{3}{16} + 10 = \\dfrac{157}{16}$.',
          '2. Formule de récurrence : $V_1 = 2V_0 - 5 = 2(7) - 5 = 9$.',
          'Puis $V_2 = 2V_1 - 5 = 2(9) - 5 = 13$, et $V_3 = 2V_2 - 5 = 2(13) - 5 = 21$.',
        ],
        conclusion: '$W_0 = 4$, $W_5 = \\dfrac{157}{16}$ ; et $V_1 = 9$, $V_2 = 13$, $V_3 = 21$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Ensemble de départ d’une suite',
          stepTitle: 'Distinguer une suite d’une fonction sur ℝ',
          paragraphText:
            'Une fonction définie de $\\mathbb{R}$ vers $\\mathbb{R}$ (comme $x \\mapsto 2x - 1$ sur $\\mathbb{R}$) n’est pas une suite. Une suite numérique a obligatoirement pour ensemble de départ $\\mathbb{N}$ (ou $\\{n \\in \\mathbb{N} : n \\ge n_0\\}$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q1',
            type: 'mcq',
            prompt: 'Parmi ces applications, laquelle définit une suite numérique ?',
            options: [
              '$f : \\mathbb{R} \\longrightarrow \\mathbb{R},\\ x \\longmapsto 2x - 1$',
              '$g : \\mathbb{R} \\longrightarrow \\mathbb{R},\\ x \\longmapsto \\dfrac{2x - 1}{x + 3}$',
              '$u : \\mathbb{N}^* \\longrightarrow \\mathbb{R},\\ n \\longmapsto \\dfrac{2n - 1}{n}$',
              '$h : [0; +\\infty[ \\longrightarrow \\mathbb{R},\\ x \\longmapsto \\sqrt{x}$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Une suite numérique est une application dont l’ensemble de départ est $\\mathbb{N}$ ou une partie $\\{n \\in \\mathbb{N} : n \\ge n_0\\}$ (ici $\\mathbb{N}^*$).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calcul direct via formule explicite',
          stepTitle: 'Évaluer les premiers termes de Uₙ = −5n + n² (Exercice 3)',
          paragraphText:
            'Pour une suite définie explicitement par $U_n = f(n)$, on remplace simplement $n$ par sa valeur entière pour obtenir directement le terme demandé.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q2',
            type: 'mcq',
            prompt: 'Soit $(U_n)_{n\\in\\mathbb{N}}$ définie par $U_n = -5n + n^2$. Quels sont les cinq premiers termes $U_0, U_1, U_2, U_3, U_4$ ?',
            options: [
              '$0 ; -4 ; -6 ; -6 ; -4$',
              '$0 ; 4 ; 6 ; 6 ; 4$',
              '$-5 ; -4 ; -1 ; 4 ; 11$',
              '$0 ; -4 ; -8 ; -12 ; -16$',
            ],
            correctAnswerIndex: 0,
            explanation: '$U_0=0$, $U_1=-5+1=-4$, $U_2=-10+4=-6$, $U_3=-15+9=-6$, $U_4=-20+16=-4$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calcul pas à pas par récurrence',
          stepTitle: 'Enchaîner Vₙ₊₁ = Vₙ / (1 − Vₙ) (Exercice 8)',
          paragraphText:
            'Lorsqu’une suite est définie par récurrence ($V_1 = -2$ et $V_{n+1} = \\dfrac{V_n}{1 - V_n}$), on calcule d’abord $V_2$ avec $V_1$, puis $V_3$ avec la fraction trouvée pour $V_2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q3',
            type: 'mcq',
            prompt:
              'Soit $(V_n)_{n\\in\\mathbb{N}^*}$ définie par $V_1 = -2$ et $V_{n+1} = \\dfrac{V_n}{1 - V_n}$. Que valent $V_2$ et $V_3$ ?',
            options: [
              '$V_2 = \\dfrac{2}{3}$ et $V_3 = 2$',
              '$V_2 = -\\dfrac{2}{3}$ et $V_3 = -\\dfrac{2}{5}$',
              '$V_2 = -2$ et $V_3 = -\\dfrac{2}{3}$',
              '$V_2 = -\\dfrac{2}{3}$ et $V_3 = -2$',
            ],
            correctAnswerIndex: 1,
            explanation:
              '$V_2 = \\dfrac{-2}{1 - (-2)} = -\\dfrac{2}{3}$, puis $V_3 = \\dfrac{-2/3}{1 - (-2/3)} = \\dfrac{-2/3}{5/3} = -\\dfrac{2}{5}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Calculer un terme de rang donné avec puissance',
          stepTitle: 'Évaluer W₅ et W₁₀ dans Wₙ = −6(1/2)ⁿ + 10',
          paragraphText:
            'Attention aux fractions avec exposants ! Pour $W_5 = -6\\left(\\dfrac{1}{2}\\right)^5 + 10$, comme $2^5 = 32$ et $\\dfrac{6}{32} = \\dfrac{3}{16}$, on obtient $-\\dfrac{3}{16} + 10 = \\dfrac{157}{16}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q4',
            type: 'mcq',
            prompt: 'Soit $W_n = -6\\left(\\dfrac{1}{2}\\right)^n + 10$ pour $n \\in \\mathbb{N}$. Quelle est la valeur exacte de $W_5$ ?',
            options: ['$\\dfrac{157}{12}$', '$\\dfrac{157}{16}$', '$\\dfrac{163}{16}$', '$\\dfrac{317}{32}$'],
            correctAnswerIndex: 1,
            explanation: '$W_5 = -\\dfrac{6}{32} + 10 = -\\dfrac{3}{16} + \\dfrac{160}{16} = \\dfrac{157}{16}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre le terme Uₙ et le terme Uₙ₊₁',
          stepTitle: 'Attention : le n-ième terme n’est pas toujours Uₙ !',
          paragraphText:
            'Si une suite commence à l’indice $0$ ($U_0, U_1, U_2, \\dots$), alors le $1^{\\text{er}}$ terme est $U_0$, le $2^{\\text{e}}$ est $U_1$, et le $5^{\\text{e}}$ est $U_4$ ! Si elle commence à $1$ ($n \\in \\mathbb{N}^*$), le $5^{\\text{e}}$ terme est $U_5$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q5',
            type: 'mcq',
            prompt: 'Pour une suite $(U_n)_{n\\in\\mathbb{N}}$ commençant à $U_0$, à quel indice correspond le $4^{\\text{e}}$ terme de la suite ?',
            options: ['$U_4$', '$U_3$', '$U_5$', '$U_2$'],
            correctAnswerIndex: 1,
            explanation: 'Les $4$ premiers termes sont $U_0$ (1er), $U_1$ (2e), $U_2$ (3e) et $U_3$ (4e).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calcul en cascade par récurrence',
          stepTitle: 'Calculer V₄ pour V₀ = 7 et Vₙ₊₁ = 2Vₙ − 5',
          paragraphText:
            'On enchaîne sans erreur de calcul : $V_1 = 2(7) - 5 = 9$, $V_2 = 2(9) - 5 = 13$, $V_3 = 2(13) - 5 = 21$, puis $V_4 = 2(21) - 5 = 37$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q6',
            type: 'mcq',
            prompt: 'Soit $(V_n)_{n\\in\\mathbb{N}}$ définie par $V_0 = 7$ et $V_{n+1} = 2V_n - 5$. Que vaut $V_4$ ?',
            options: ['$37$', '$41$', '$29$', '$21$'],
            correctAnswerIndex: 0,
            explanation: '$V_1 = 9$, $V_2 = 13$, $V_3 = 21$, et donc $V_4 = 2 \\times 21 - 5 = 37$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q1',
          type: 'mcq',
          prompt: 'Parmi ces applications, laquelle définit une suite numérique ?',
          options: [
            '$f : \\mathbb{R} \\longrightarrow \\mathbb{R},\\ x \\longmapsto 2x - 1$',
            '$g : \\mathbb{R} \\longrightarrow \\mathbb{R},\\ x \\longmapsto \\dfrac{2x - 1}{x + 3}$',
            '$u : \\mathbb{N}^* \\longrightarrow \\mathbb{R},\\ n \\longmapsto \\dfrac{2n - 1}{n}$',
            '$h : [0; +\\infty[ \\longrightarrow \\mathbb{R},\\ x \\longmapsto \\sqrt{x}$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Une suite numérique est une application dont l’ensemble de départ est $\\mathbb{N}$ ou une partie $\\{n \\in \\mathbb{N} : n \\ge n_0\\}$ (ici $\\mathbb{N}^*$).',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q2',
          type: 'mcq',
          prompt: 'Soit $(U_n)_{n\\in\\mathbb{N}}$ définie par $U_n = -5n + n^2$. Quels sont les cinq premiers termes $U_0, U_1, U_2, U_3, U_4$ ?',
          options: [
            '$0 ; -4 ; -6 ; -6 ; -4$',
            '$0 ; 4 ; 6 ; 6 ; 4$',
            '$-5 ; -4 ; -1 ; 4 ; 11$',
            '$0 ; -4 ; -8 ; -12 ; -16$',
          ],
          correctAnswerIndex: 0,
          explanation: '$U_0=0$, $U_1=-5+1=-4$, $U_2=-10+4=-6$, $U_3=-15+9=-6$, $U_4=-20+16=-4$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q3',
          type: 'mcq',
          prompt:
            'Soit $(V_n)_{n\\in\\mathbb{N}^*}$ définie par $V_1 = -2$ et $V_{n+1} = \\dfrac{V_n}{1 - V_n}$. Que valent $V_2$ et $V_3$ ?',
          options: [
            '$V_2 = \\dfrac{2}{3}$ et $V_3 = 2$',
            '$V_2 = -\\dfrac{2}{3}$ et $V_3 = -\\dfrac{2}{5}$',
            '$V_2 = -2$ et $V_3 = -\\dfrac{2}{3}$',
            '$V_2 = -\\dfrac{2}{3}$ et $V_3 = -2$',
          ],
          correctAnswerIndex: 1,
          explanation:
            '$V_2 = \\dfrac{-2}{1 - (-2)} = -\\dfrac{2}{3}$, puis $V_3 = \\dfrac{-2/3}{1 - (-2/3)} = \\dfrac{-2/3}{5/3} = -\\dfrac{2}{5}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q4',
          type: 'mcq',
          prompt: 'Soit $W_n = -6\\left(\\dfrac{1}{2}\\right)^n + 10$ pour $n \\in \\mathbb{N}$. Quelle est la valeur exacte de $W_5$ ?',
          options: ['$\\dfrac{157}{12}$', '$\\dfrac{157}{16}$', '$\\dfrac{163}{16}$', '$\\dfrac{317}{32}$'],
          correctAnswerIndex: 1,
          explanation: '$W_5 = -\\dfrac{6}{32} + 10 = -\\dfrac{3}{16} + \\dfrac{160}{16} = \\dfrac{157}{16}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q5',
          type: 'mcq',
          prompt: 'Pour une suite $(U_n)_{n\\in\\mathbb{N}}$ commençant à $U_0$, à quel indice correspond le $4^{\\text{e}}$ terme de la suite ?',
          options: ['$U_4$', '$U_3$', '$U_5$', '$U_2$'],
          correctAnswerIndex: 1,
          explanation: 'Les $4$ premiers termes sont $U_0$ (1er), $U_1$ (2e), $U_2$ (3e) et $U_3$ (4e).',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p01_q6',
          type: 'mcq',
          prompt: 'Soit $(V_n)_{n\\in\\mathbb{N}}$ définie par $V_0 = 7$ et $V_{n+1} = 2V_n - 5$. Que vaut $V_4$ ?',
          options: ['$37$', '$41$', '$29$', '$21$'],
          correctAnswerIndex: 0,
          explanation: '$V_1 = 9$, $V_2 = 13$, $V_3 = 21$, et donc $V_4 = 2 \\times 21 - 5 = 37$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Représentation graphique d'une suite
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02',
      order: 2,
      title: 'Représentation graphique d’une suite',
      summary:
        'Construire graphiquement les premiers termes d’une suite explicite via (Cf) et d’une suite récurrente via (Cf) et la première bissectrice y = x.',
      conceptExplanation:
        "On distingue deux constructions graphiques dans le plan muni d'un repère $(O, I, J)$ :\n\n1. **Suite explicite $U_n = f(n)$** : on trace la courbe $(C_f)$ de $f$, puis on lit les ordonnées des points de $(C_f)$ d'abscisses entières $0, 1, 2, 3\\dots$ et on les reporte (souvent sur l'axe des ordonnées).\n2. **Suite récurrente $U_{n+1} = f(U_n)$** : on trace $(C_f)$ **et** la première bissectrice $(\\Delta) : y = x$. Pour passer de $U_n$ à $U_{n+1}$ sur l'axe $(OI)$ :\n   - Partir de $U_n$ sur $(OI)$ ;\n   - Aller **verticalement** jusqu'à $(C_f)$ (l'ordonnée vaut alors $U_{n+1}$) ;\n   - Aller **horizontalement** jusqu'à $(\\Delta) : y = x$ ;\n   - Redescendre **verticalement** sur $(OI)$ pour marquer $U_{n+1}$.",
      keyRule:
        'Pour Uₙ₊₁ = f(Uₙ), fais l’escalier « vertical vers (Cf) → horizontal vers (Δ) y = x → vertical vers l’axe des abscisses (OI) ».',
      formulas: [
        { name: 'Première bissectrice', formula: '(\\Delta) : y = x' },
        { name: 'Point sur (Cf) d’abscisse Uₙ', formula: 'M_n\\bigl(U_n ; f(U_n)\\bigr) = (U_n ; U_{n+1})' },
      ],
      visualSchema: {
        type: 'function_plot',
        title: 'Construction de Uₙ₊₁ = (2/3)Uₙ + 2 avec U₀ = 0',
        caption:
          'Courbe (Cf) : y = (2/3)x + 2 (en bleu) et première bissectrice (Δ) : y = x (en orange). Depuis x = 0, on monte à y = 2 = U₁, puis on rejoint (Δ) pour reporter U₁ = 2 sur l’axe (OI).',
        plot: {
          xMin: -1,
          xMax: 7,
          yMin: -1,
          yMax: 7,
          xStep: 1,
          yStep: 1,
          curves: [
            {
              label: 'f(x) = (2/3)x + 2',
              color: 'blue',
              pieces: [{ expr: '(2/3)*x+2', from: -1, to: 7 }],
            },
            {
              label: '(Δ): y = x',
              color: 'orange',
              pieces: [{ expr: 'x', from: -1, to: 7 }],
            },
          ],
          verticalLines: [{ x: 2, label: 'U₁ = 2', color: 'green' }],
        },
      },
      workedExample: {
        title: 'Représenter graphiquement les 4 premiers termes (Exercice 9 p. 10-11)',
        statement:
          'Soit $(U_n)_{n\\in\\mathbb{N}}$ définie par $U_0 = 1$ et $\\forall n \\in \\mathbb{N},\\ U_{n+1} = 2U_n + 1$. Décris la construction et les valeurs des 4 premiers termes sur l’axe $(OI)$.',
        methodSteps: [
          'On trace la droite $(C_f): y = 2x + 1$ et la droite $(\\Delta): y = x$.',
          'On place $U_0 = 1$ sur l’axe des abscisses $(OI)$.',
          'On projette verticalement sur $(C_f)$ (hauteur $3$), horizontalement sur $(\\Delta)$, puis verticalement sur $(OI)$ : on obtient $U_1 = 3$.',
          'En répétant le procédé depuis $U_1 = 3$, on trouve $U_2 = 7$, puis depuis $U_2 = 7$, on trouve $U_3 = 15$.',
        ],
        conclusion: 'Sur l’axe $(OI)$, les 4 premiers termes sont marqués en $1, 3, 7$ et $15$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Rôle de la droite (Δ) : y = x',
          stepTitle: 'Pourquoi trace-t-on la première bissectrice ?',
          paragraphText:
            'Dans la construction d’une suite récurrente $U_{n+1} = f(U_n)$, la droite $(\\Delta): y = x$ sert à transformer une **ordonnée** ($y = U_{n+1}$ lue sur $(C_f)$) en une **abscisse** ($x = U_{n+1}$) prête pour l’étape suivante !',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q1',
            type: 'mcq',
            prompt: 'Lors de la construction graphique des termes d’une suite $U_{n+1} = f(U_n)$, à quoi sert la droite $(\\Delta): y = x$ ?',
            options: [
              'À calculer la somme des termes',
              'À reporter l’ordonnée $U_{n+1}$ sur l’axe des abscisses $(OI)$ pour poursuivre la construction',
              'À tracer la courbe de la suite inverse',
              'Elle n’est utile que pour les suites explicites',
            ],
            correctAnswerIndex: 1,
            explanation: 'Tout point de $(\\Delta)$ a une abscisse égale à son ordonnée ($x = y$), ce qui permet de rabattre $U_{n+1}$ de l’axe $(OJ)$ vers $(OI)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Ordre des projections',
          stepTitle: 'Enchaîner vertical → horizontal → vertical',
          paragraphText:
            'Pour passer de $U_0$ (sur $(OI)$) à $U_1$ (sur $(OI)$), on monte ou descend **verticalement** jusqu’à $(C_f)$, on va **horizontalement** jusqu’à $(\\Delta)$, puis on revient **verticalement** sur $(OI)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q2',
            type: 'mcq',
            prompt:
              'Dans la construction de $U_{n+1} = f(U_n)$, on vient de marquer $U_0$ sur l’axe des abscisses $(OI)$. Quelle est la toute première étape ?',
            options: [
              'Projeter $U_0$ horizontalement sur $(\\Delta)$',
              'Projeter $U_0$ verticalement sur la courbe $(C_f)$',
              'Relier $U_0$ directement à l’origine $O$',
              'Lire $U_0$ sur l’axe des ordonnées',
            ],
            correctAnswerIndex: 1,
            explanation: 'L’image de $U_0$ par $f$ s’obtient en rejoignant verticalement la courbe $(C_f)$ au point $(U_0; f(U_0))$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Cas de Uₙ₊₁ = (2/3)Uₙ + 2',
          stepTitle: 'Lire U₀, U₁, U₂ et le point fixe',
          paragraphText:
            'Dans l’exemple du cours (p. 4), $U_0 = 0$ et $U_{n+1} = \\dfrac{2}{3}U_n + 2$. On lit $U_1 = 2$, $U_2 = \\dfrac{10}{3} \\approx 3{,}33$, puis les termes se rapprochent de l’abscisse du point d’intersection entre $(C_f)$ et $(\\Delta)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q3',
            type: 'mcq',
            prompt:
              'Pour $U_0 = 0$ et $U_{n+1} = \\dfrac{2}{3}U_n + 2$, quelle est l’abscisse du point d’intersection de $(C_f): y = \\dfrac{2}{3}x + 2$ et $(\\Delta): y = x$ ?',
            options: ['$x = 2$', '$x = 4$', '$x = 6$', '$x = 3$'],
            correctAnswerIndex: 2,
            explanation: '$\\dfrac{2}{3}x + 2 = x \\iff \\dfrac{1}{3}x = 2 \\iff x = 6$. Graphiquement, les termes en escalier convergent vers $6$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Cas de Uₙ₊₁ = 2Uₙ + 1 (Exercice 9)',
          stepTitle: 'Calculer les 4 premiers termes marqués sur (OI)',
          paragraphText:
            'Dans l’Exercice 9, $U_0 = 1$ et $U_{n+1} = 2U_n + 1$. Graphiquement, l’escalier s’écarte de plus en plus du point d’intersection $(-1; -1)$ vers la droite.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q4',
            type: 'mcq',
            prompt: 'Soit $U_0 = 1$ et $U_{n+1} = 2U_n + 1$. Quelles sont les valeurs de $U_0, U_1, U_2, U_3$ placées sur l’axe $(OI)$ ?',
            options: ['$1 ; 2 ; 4 ; 8$', '$1 ; 3 ; 7 ; 15$', '$1 ; 3 ; 5 ; 7$', '$0 ; 1 ; 3 ; 7$'],
            correctAnswerIndex: 1,
            explanation: '$U_0 = 1$, $U_1 = 2(1)+1 = 3$, $U_2 = 2(3)+1 = 7$, $U_3 = 2(7)+1 = 15$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Tracer une courbe continue pour représenter une suite',
          stepTitle: 'Une suite est une succession de points isolés, pas un trait continu !',
          paragraphText:
            'Attention pour une suite explicite $U_n = 2n + 1$ : la droite $y = 2x + 1$ ne sert qu’à repérer les points d’abscisses **entières** $n = 0, 1, 2\\dots$ On ne doit pas dire qu’une suite prend des valeurs en $n = 1{,}5$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q5',
            type: 'mcq',
            prompt:
              'La représentation graphique directe d’une suite explicite $(U_n)_{n\\in\\mathbb{N}}$ dans le plan $(O, I, J)$ est constituée :',
            options: [
              'D’une droite ou courbe continue reliant tous les réels positifs',
              'D’un nuage de points isolés de coordonnées $(n; U_n)$ pour $n \\in \\mathbb{N}$',
              'D’une droite verticale uniquement',
              'De segments horizontaux uniquement',
            ],
            correctAnswerIndex: 1,
            explanation: 'Puisque $n$ ne prend que des valeurs entières naturelles, les points $(n; U_n)$ forment un ensemble de points isolés (discret).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Représentation sur (OJ) pour une suite explicite',
          stepTitle: 'Lire U₀, U₁, U₂ pour Uₙ = 2n + 1 (Exemple p. 3)',
          paragraphText:
            'Dans l’exemple de la page 3 du cours, avec $U_n = 2n + 1$, on trace $y = 2x + 1$ et l’on projette horizontalement les points d’abscisses $0, 1, 2$ sur l’axe des ordonnées pour y lire $U_0 = 1$, $U_1 = 3$, $U_2 = 5$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q6',
            type: 'mcq',
            prompt: 'Avec la suite explicite $U_n = 2n + 1$, quelles valeurs lit-on sur l’axe $(OJ)$ pour $U_0, U_1, U_2$ ?',
            options: ['$0 ; 2 ; 4$', '$1 ; 3 ; 5$', '$1 ; 2 ; 3$', '$2 ; 4 ; 6$'],
            correctAnswerIndex: 1,
            explanation: '$U_0 = 2(0)+1 = 1$, $U_1 = 2(1)+1 = 3$ et $U_2 = 2(2)+1 = 5$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q1',
          type: 'mcq',
          prompt: 'Lors de la construction graphique des termes d’une suite $U_{n+1} = f(U_n)$, à quoi sert la droite $(\\Delta): y = x$ ?',
          options: [
            'À calculer la somme des termes',
            'À reporter l’ordonnée $U_{n+1}$ sur l’axe des abscisses $(OI)$ pour poursuivre la construction',
            'À tracer la courbe de la suite inverse',
            'Elle n’est utile que pour les suites explicites',
          ],
          correctAnswerIndex: 1,
          explanation: 'Tout point de $(\\Delta)$ a une abscisse égale à son ordonnée ($x = y$), ce qui permet de rabattre $U_{n+1}$ de l’axe $(OJ)$ vers $(OI)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q2',
          type: 'mcq',
          prompt:
            'Dans la construction de $U_{n+1} = f(U_n)$, on vient de marquer $U_0$ sur l’axe des abscisses $(OI)$. Quelle est la toute première étape ?',
          options: [
            'Projeter $U_0$ horizontalement sur $(\\Delta)$',
            'Projeter $U_0$ verticalement sur la courbe $(C_f)$',
            'Relier $U_0$ directement à l’origine $O$',
            'Lire $U_0$ sur l’axe des ordonnées',
          ],
          correctAnswerIndex: 1,
          explanation: 'L’image de $U_0$ par $f$ s’obtient en rejoignant verticalement la courbe $(C_f)$ au point $(U_0; f(U_0))$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q3',
          type: 'mcq',
          prompt:
            'Pour $U_0 = 0$ et $U_{n+1} = \\dfrac{2}{3}U_n + 2$, quelle est l’abscisse du point d’intersection de $(C_f): y = \\dfrac{2}{3}x + 2$ et $(\\Delta): y = x$ ?',
          options: ['$x = 2$', '$x = 4$', '$x = 6$', '$x = 3$'],
          correctAnswerIndex: 2,
          explanation: '$\\dfrac{2}{3}x + 2 = x \\iff \\dfrac{1}{3}x = 2 \\iff x = 6$. Graphiquement, les termes en escalier convergent vers $6$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q4',
          type: 'mcq',
          prompt: 'Soit $U_0 = 1$ et $U_{n+1} = 2U_n + 1$. Quelles sont les valeurs de $U_0, U_1, U_2, U_3$ placées sur l’axe $(OI)$ ?',
          options: ['$1 ; 2 ; 4 ; 8$', '$1 ; 3 ; 7 ; 15$', '$1 ; 3 ; 5 ; 7$', '$0 ; 1 ; 3 ; 7$'],
          correctAnswerIndex: 1,
          explanation: '$U_0 = 1$, $U_1 = 2(1)+1 = 3$, $U_2 = 2(3)+1 = 7$, $U_3 = 2(7)+1 = 15$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q5',
          type: 'mcq',
          prompt:
            'La représentation graphique directe d’une suite explicite $(U_n)_{n\\in\\mathbb{N}}$ dans le plan $(O, I, J)$ est constituée :',
          options: [
            'D’une droite ou courbe continue reliant tous les réels positifs',
            'D’un nuage de points isolés de coordonnées $(n; U_n)$ pour $n \\in \\mathbb{N}$',
            'D’une droite verticale uniquement',
            'De segments horizontaux uniquement',
          ],
          correctAnswerIndex: 1,
          explanation: 'Puisque $n$ ne prend que des valeurs entières naturelles, les points $(n; U_n)$ forment un ensemble de points isolés (discret).',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p02_q6',
          type: 'mcq',
          prompt: 'Avec la suite explicite $U_n = 2n + 1$, quelles valeurs lit-on sur l’axe $(OJ)$ pour $U_0, U_1, U_2$ ?',
          options: ['$0 ; 2 ; 4$', '$1 ; 3 ; 5$', '$1 ; 2 ; 3$', '$2 ; 4 ; 6$'],
          correctAnswerIndex: 1,
          explanation: '$U_0 = 2(0)+1 = 1$, $U_1 = 2(1)+1 = 3$ et $U_2 = 2(2)+1 = 5$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Suites arithmétiques : définition, raison et terme général
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03',
      order: 3,
      title: 'Suites arithmétiques : raison et terme général',
      summary:
        'Démontrer qu’une suite est arithmétique, déterminer sa raison r et utiliser la formule générale Uₙ = Uₖ + (n − k)r.',
      conceptExplanation:
        "Une suite numérique $(U_n)$ est **arithmétique** s'il existe un nombre réel fixe $r$ (appelé **raison**) tel que :\n$$\\forall n,\\quad U_{n+1} = U_n + r \\quad (\\text{soit } U_{n+1} - U_n = r \\text{ constant})$$\n\n**Formule du terme général** : pour tous entiers $n$ et $k$ du domaine :\n$$U_n = U_k + (n - k)r$$\nCas particuliers essentiels :\n- Si le $1^{\\text{er}}$ terme est $U_0$ : $U_n = U_0 + nr$ ;\n- Si le $1^{\\text{er}}$ terme est $U_1$ : $U_n = U_1 + (n - 1)r$.",
      keyRule:
        'Pour prouver qu’une suite est arithmétique, calcule Uₙ₊₁ − Uₙ et vérifie que c’est une constante r indépendante de n. Utilise ensuite Uₙ = Uₖ + (n − k)r.',
      formulas: [
        { name: 'Définition', formula: 'U_{n+1} - U_n = r \\quad (r \\in \\mathbb{R} \\text{ indépendant de } n)' },
        { name: 'Terme général quelconque', formula: 'U_n = U_k + (n - k)r' },
      ],
      workedExample: {
        title: 'Retrouver la raison et un autre terme (Exercices 11 et 14 p. 11-12)',
        statement:
          '1. Soit $(P_n)$ définie par $P_0 = -2$ et $2P_{n+1} = 2P_n - 5$. Montre que $(P_n)_{n\\in\\mathbb{N}^*}$ est arithmétique et précise $r$ et $P_1$.\n2. Soit $(U_n)$ arithmétique telle que $U_8 = 4$ et $U_{20} = 28$. Calcule $r$ puis $U_{18}$.',
        methodSteps: [
          '1. En divisant par $2$, on a $P_{n+1} = P_n - \\dfrac{5}{2}$ : $(P_n)$ est arithmétique de raison $r = -\\dfrac{5}{2}$ et de premier terme sur $\\mathbb{N}^*$ égal à $P_1 = P_0 - \\dfrac{5}{2} = -2 - \\dfrac{5}{2} = -\\dfrac{9}{2}$.',
          '2. Avec $U_{20} = U_8 + (20 - 8)r$, on obtient $28 = 4 + 12r \\implies 12r = 24 \\implies r = 2$.',
          'Puis $U_{18} = U_{20} + (18 - 20)r = 28 - 2(2) = 24$.',
        ],
        conclusion: '$r = -\\dfrac{5}{2}, P_1 = -\\dfrac{9}{2}$ ; et pour la $2^{\\text{e}}$ suite, $r = 2$ et $U_{18} = 24$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Reconnaître une suite arithmétique',
          stepTitle: 'Tester si Uₙ₊₁ − Uₙ est constant',
          paragraphText:
            'Toute suite de la forme affine $U_n = an + b$ est arithmétique de raison $a$ car $U_{n+1} - U_n = a(n+1)+b - (an+b) = a$. À l’inverse, $u_n = -\\dfrac{2}{n} + 1$ ne donne pas une différence constante.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q1',
            type: 'mcq',
            prompt: 'Laquelle de ces suites est une suite arithmétique (Exercice 1 & 10) ?',
            options: [
              '$u_n = -\\dfrac{2}{n} + 1$ ($n \\ge 1$)',
              '$t_n = -6n + 3$ ($n \\in \\mathbb{N}^*$)',
              '$t_n = 3(2^n) - 1$',
              '$v_n = 6^n$',
            ],
            correctAnswerIndex: 1,
            explanation: '$t_{n+1} - t_n = (-6(n+1)+3) - (-6n+3) = -6$ (constante) : $(t_n)$ est arithmétique de raison $-6$ et $t_1 = -3$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Terme général avec origine U₀ ou U₂',
          stepTitle: 'Exprimer Uₙ en fonction de n à partir de U₂ (Exercice 4)',
          paragraphText:
            'Lorsque le terme connu n’est pas $U_0$ mais $U_2 = 5$ (avec $U_{n+1} = U_n - 3$), applique directement $U_n = U_2 + (n - 2)r$ sans même avoir à recalculer $U_0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q2',
            type: 'mcq',
            prompt: 'Soit $(U_n)$ la suite arithmétique telle que $U_2 = 5$ et $U_{n+1} = U_n - 3$ pour $n \\ge 2$. Quelle est l’expression de $U_n$ ?',
            options: ['$U_n = -3n + 5$', '$U_n = -3n + 11$', '$U_n = 3n - 1$', '$U_n = -3n + 8$'],
            correctAnswerIndex: 1,
            explanation: '$U_n = U_2 + (n - 2)\\times(-3) = 5 - 3n + 6 = -3n + 11$. (Vérification pour $n=2$ : $-6 + 11 = 5$.)',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Trouver la raison à partir de deux termes',
          stepTitle: 'Appliquer r = (Uₙ − Uₖ)/(n − k) (Exercices 5 et 14)',
          paragraphText:
            'Si l’on connaît deux termes quelconques d’une suite arithmétique, par exemple $U_6 = -3$ et $U_9 = -6$, la différence $U_9 - U_6$ vaut $(9 - 6)r = 3r$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q3',
            type: 'mcq',
            prompt: 'Soit $(U_n)$ une suite arithmétique telle que $U_6 = -3$ et $U_9 = -6$. Que vaut sa raison $r$ ?',
            options: ['$r = 1$', '$r = -1$', '$r = -3$', '$r = -\\dfrac{1}{3}$'],
            correctAnswerIndex: 1,
            explanation: '$U_9 = U_6 + (9 - 6)r \\implies -6 = -3 + 3r \\implies 3r = -3 \\implies r = -1$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Démontrer qu’une suite définie par relation est arithmétique',
          stepTitle: 'Isoler Pₙ₊₁ dans 2Pₙ₊₁ = 2Pₙ − 5 (Exercice 11)',
          paragraphText:
            'Attention aux coefficients devant $P_{n+1}$ ! Pour $2P_{n+1} = 2P_n - 5$, divise toute l’égalité par $2$ avant de lire la raison : $P_{n+1} = P_n - \\dfrac{5}{2}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q4',
            type: 'mcq',
            prompt:
              'Soit $(P_n)_{n\\in\\mathbb{N}}$ définie par $P_0 = -2$ et $2P_{n+1} = 2P_n - 5$. Quels sont la raison $r$ et le terme $P_1$ ?',
            options: [
              '$r = \\dfrac{5}{2}$ et $P_1 = \\dfrac{1}{2}$',
              '$r = -5$ et $P_1 = -7$',
              '$r = -\\dfrac{5}{2}$ et $P_1 = -\\dfrac{9}{2}$',
              '$r = -\\dfrac{5}{2}$ et $P_1 = -\\dfrac{1}{2}$',
            ],
            correctAnswerIndex: 2,
            explanation: '$P_{n+1} = P_n - \\dfrac{5}{2}$ donne $r = -\\dfrac{5}{2}$ et $P_1 = P_0 - \\dfrac{5}{2} = -2 - \\dfrac{5}{2} = -\\dfrac{9}{2}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier la parenthèse (n − 1) ou (n − k)',
          stepTitle: 'Ne confonds jamais U₀ + nr et U₁ + nr !',
          paragraphText:
            'Si la suite commence en $U_1$ et vaut $U_1$ au rang $1$, écrire $U_n = U_1 + nr$ donne $U_1 = U_1 + r$, ce qui est faux dès que $r \\neq 0$ ! Depuis $U_1$, c’est toujours $U_n = U_1 + (n - 1)r$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q5',
            type: 'mcq',
            prompt: 'Soit $(U_n)_{n\\in\\mathbb{N}}$ arithmétique de raison $-4$ et de premier terme $U_0 = 5$ (Exercice de fixation p. 5). Que vaut $U_{10}$ ?',
            options: ['$-31$', '$-35$', '$-39$', '$45$'],
            correctAnswerIndex: 1,
            explanation: 'Ici on part de $U_0 = 5$, donc $U_n = U_0 + nr = 5 - 4n$, et $U_{10} = 5 - 4\\times 10 = -35$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calculer un terme antérieur à partir de U₂₀',
          stepTitle: 'Trouver U₁₈ et U₁₉ sachant U₈ = 4 et U₂₀ = 28 (Exercice 14)',
          paragraphText:
            'Avec $U_8 = 4$ et $U_{20} = 28$, on trouve d’abord $r = \\dfrac{28 - 4}{20 - 8} = 2$, puis on utilise $U_{18} = U_{20} + (18 - 20)\\times 2 = 24$ et $U_{19} = U_{18} + 2 = 26$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q6',
            type: 'mcq',
            prompt: 'Pour une suite arithmétique telle que $U_8 = 4$ et $U_{20} = 28$, que vaut $U_{19}$ ?',
            options: ['$24$', '$25$', '$26$', '$30$'],
            correctAnswerIndex: 2,
            explanation: '$r = \\dfrac{28 - 4}{12} = 2$, donc $U_{19} = U_{20} - r = 28 - 2 = 26$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q1',
          type: 'mcq',
          prompt: 'Laquelle de ces suites est une suite arithmétique (Exercice 1 & 10) ?',
          options: [
            '$u_n = -\\dfrac{2}{n} + 1$ ($n \\ge 1$)',
            '$t_n = -6n + 3$ ($n \\in \\mathbb{N}^*$)',
            '$t_n = 3(2^n) - 1$',
            '$v_n = 6^n$',
          ],
          correctAnswerIndex: 1,
          explanation: '$t_{n+1} - t_n = (-6(n+1)+3) - (-6n+3) = -6$ (constante) : $(t_n)$ est arithmétique de raison $-6$ et $t_1 = -3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q2',
          type: 'mcq',
          prompt: 'Soit $(U_n)$ la suite arithmétique telle que $U_2 = 5$ et $U_{n+1} = U_n - 3$ pour $n \\ge 2$. Quelle est l’expression de $U_n$ ?',
          options: ['$U_n = -3n + 5$', '$U_n = -3n + 11$', '$U_n = 3n - 1$', '$U_n = -3n + 8$'],
          correctAnswerIndex: 1,
          explanation: '$U_n = U_2 + (n - 2)\\times(-3) = 5 - 3n + 6 = -3n + 11$. (Vérification pour $n=2$ : $-6 + 11 = 5$.)',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q3',
          type: 'mcq',
          prompt: 'Soit $(U_n)$ une suite arithmétique telle que $U_6 = -3$ et $U_9 = -6$. Que vaut sa raison $r$ ?',
          options: ['$r = 1$', '$r = -1$', '$r = -3$', '$r = -\\dfrac{1}{3}$'],
          correctAnswerIndex: 1,
          explanation: '$U_9 = U_6 + (9 - 6)r \\implies -6 = -3 + 3r \\implies 3r = -3 \\implies r = -1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q4',
          type: 'mcq',
          prompt:
            'Soit $(P_n)_{n\\in\\mathbb{N}}$ définie par $P_0 = -2$ et $2P_{n+1} = 2P_n - 5$. Quels sont la raison $r$ et le terme $P_1$ ?',
          options: [
            '$r = \\dfrac{5}{2}$ et $P_1 = \\dfrac{1}{2}$',
            '$r = -5$ et $P_1 = -7$',
            '$r = -\\dfrac{5}{2}$ et $P_1 = -\\dfrac{9}{2}$',
            '$r = -\\dfrac{5}{2}$ et $P_1 = -\\dfrac{1}{2}$',
          ],
          correctAnswerIndex: 2,
          explanation: '$P_{n+1} = P_n - \\dfrac{5}{2}$ donne $r = -\\dfrac{5}{2}$ et $P_1 = P_0 - \\dfrac{5}{2} = -2 - \\dfrac{5}{2} = -\\dfrac{9}{2}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q5',
          type: 'mcq',
          prompt: 'Soit $(U_n)_{n\\in\\mathbb{N}}$ arithmétique de raison $-4$ et de premier terme $U_0 = 5$ (Exercice de fixation p. 5). Que vaut $U_{10}$ ?',
          options: ['$-31$', '$-35$', '$-39$', '$45$'],
          correctAnswerIndex: 1,
          explanation: 'Ici on part de $U_0 = 5$, donc $U_n = U_0 + nr = 5 - 4n$, et $U_{10} = 5 - 4\\times 10 = -35$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p03_q6',
          type: 'mcq',
          prompt: 'Pour une suite arithmétique telle que $U_8 = 4$ et $U_{20} = 28$, que vaut $U_{19}$ ?',
          options: ['$24$', '$25$', '$26$', '$30$'],
          correctAnswerIndex: 2,
          explanation: '$r = \\dfrac{28 - 4}{12} = 2$, donc $U_{19} = U_{20} - r = 28 - 2 = 26$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Somme des termes consécutifs d'une suite arithmétique
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04',
      order: 4,
      title: 'Somme de termes consécutifs d’une suite arithmétique',
      summary:
        'Compter exactement le nombre de termes j − k + 1 et appliquer S = (nombre de termes) × (premier + dernier)/2.',
      conceptExplanation:
        "La somme de $n$ termes consécutifs d'une suite arithmétique est égale au produit du **nombre de termes** par la **demi-somme des termes extrêmes** :\n$$S = U_k + U_{k+1} + \\dots + U_j = (j - k + 1)\\times \\frac{U_k + U_j}{2}$$\n\nSommes classiques à connaître :\n- $1 + 2 + 3 + \\dots + n = \\dfrac{n(n+1)}{2}$ ;\n- $2 + 4 + 6 + \\dots + 2n = n(n+1)$ ;\n- $1 + 3 + 5 + \\dots + (2n + 1) = (n+1)^2$.",
      keyRule:
        'Nombre de termes de Uₖ à Uⱼ = j − k + 1 (n’oublie jamais le « + 1 » !), puis multiplie par (Uₖ + Uⱼ)/2.',
      formulas: [
        { name: 'Somme de Uₖ à Uⱼ', formula: '\\sum_{i=k}^{j} U_i = (j - k + 1)\\times\\frac{U_k + U_j}{2}' },
        { name: 'Somme des n premiers entiers', formula: '1 + 2 + \\dots + n = \\frac{n(n + 1)}{2}' },
      ],
      workedExample: {
        title: 'Calculer deux sommes de suite arithmétique (p. 6)',
        statement:
          'Soit $(U_n)_{n\\in\\mathbb{N}}$ la suite arithmétique de raison $9$ et de premier terme $U_0 = -2$. Calcule $S = U_0 + U_1 + \\dots + U_{n-1}$ en fonction de $n$, puis $T = U_3 + U_4 + \\dots + U_{77}$.',
        methodSteps: [
          '1. De $0$ à $n - 1$, il y a $(n - 1) - 0 + 1 = n$ termes. De plus $U_{n-1} = -2 + 9(n - 1) = 9n - 11$.',
          'Donc $S = \\dfrac{n}{2}(U_0 + U_{n-1}) = \\dfrac{n(-2 + 9n - 11)}{2} = \\dfrac{n(9n - 13)}{2}$.',
          '2. De $3$ à $77$, il y a $77 - 3 + 1 = 75$ termes. On calcule $U_3 = -2 + 3\\times 9 = 25$ et $U_{77} = -2 + 77\\times 9 = 691$.',
          'Donc $T = 75 \\times \\dfrac{25 + 691}{2} = 75 \\times 358 = 26\\,850$.',
        ],
        conclusion: '$S = \\dfrac{n(9n - 13)}{2}$ et $T = 26\\,850$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Compter le nombre de termes j − k + 1',
          stepTitle: 'Ne jamais se tromper entre j − k et j − k + 1',
          paragraphText:
            'Entre l’indice $k$ et l’indice $j$ inclus ($k \\le j$), il y a toujours $j - k + 1$ termes. Par exemple de $U_3$ à $U_{77}$, on compte $77 - 3 + 1 = 75$ termes, et de $U_0$ à $U_{n-1}$ on en compte $(n - 1) - 0 + 1 = n$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q1',
            type: 'mcq',
            prompt: 'Combien de termes comporte la somme $T = U_3 + U_4 + \\dots + U_{77}$ ?',
            options: ['$74$ termes', '$75$ termes', '$77$ termes', '$76$ termes'],
            correctAnswerIndex: 1,
            explanation: 'Le nombre de termes de l’indice $3$ à l’indice $77$ inclus vaut $77 - 3 + 1 = 75$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Somme des entiers consécutifs',
          stepTitle: 'Calculer 1 + 2 + … + 2020 (p. 5)',
          paragraphText:
            'Les entiers naturels consécutifs forment une suite arithmétique de raison $1$. De $1$ à $2020$, il y a $2020$ termes avec pour extrêmes $1$ et $2020$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q2',
            type: 'mcq',
            prompt: 'Que vaut la somme $S = 1 + 2 + 3 + \\dots + 2020$ ?',
            options: ['$2\\,040\\,200$', '$2\\,041\\,210$', '$4\\,082\\,420$', '$1\\,020\\,605$'],
            correctAnswerIndex: 1,
            explanation: '$S = 2020 \\times \\dfrac{1 + 2020}{2} = 1010 \\times 2021 = 2\\,041\\,210$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Somme des 100 premiers nombres impairs (Exercice 7)',
          stepTitle: 'Utiliser Uₙ = 2n + 1 de U₀ à U₉₉',
          paragraphText:
            'Dans l’Exercice 7, les $100$ premiers nombres impairs positifs sont $U_0 = 1, U_1 = 3, \\dots, U_{99} = 2\\times 99 + 1 = 199$. Il y a bien $99 - 0 + 1 = 100$ termes.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q3',
            type: 'mcq',
            prompt: 'Quelle est la somme des $100$ premiers nombres impairs ($1 + 3 + 5 + \\dots + 199$) ?',
            options: ['$9\\,900$', '$10\\,000$', '$10\\,100$', '$19\\,900$'],
            correctAnswerIndex: 1,
            explanation: '$S = 100 \\times \\dfrac{1 + 199}{2} = 100 \\times 100 = 10\\,000$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Somme littérale de U₀ à Uₙ₋₁',
          stepTitle: 'Exprimer S en fonction de n',
          paragraphText:
            'Si $U_0 = -2$ et $r = 9$, calcule d’abord $U_{n-1} = -2 + 9(n - 1) = 9n - 11$, puis remplace dans $\\dfrac{n}{2}(U_0 + U_{n-1})$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q4',
            type: 'mcq',
            prompt:
              'Soit $(U_n)_{n\\in\\mathbb{N}}$ arithmétique de raison $9$ et de premier terme $U_0 = -2$. Quelle est l’expression de $S = U_0 + U_1 + \\dots + U_{n-1}$ ?',
            options: [
              '$\\dfrac{n(9n - 4)}{2}$',
              '$\\dfrac{n(9n - 13)}{2}$',
              '$\\dfrac{(n + 1)(9n - 13)}{2}$',
              '$\\dfrac{n(9n - 11)}{2}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$U_0 + U_{n-1} = -2 + (9n - 11) = 9n - 13$, pour $n$ termes, d’où $S = \\dfrac{n(9n - 13)}{2}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier qu’entre U₀ et Uₙ il y a (n + 1) termes',
          stepTitle: 'Attention au dernier indice quand la somme démarre à U₀ !',
          paragraphText:
            'Pour $1 + 3 + 5 + \\dots + (2n + 1)$, l’indice part de $0$ ($2\\times 0 + 1 = 1$) et finit à $n$ ($2n + 1$), donc il y a $n + 1$ termes et non $n$ termes ! D’où $(n + 1) \\times \\dfrac{1 + (2n + 1)}{2} = (n + 1)^2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q5',
            type: 'mcq',
            prompt: 'Que vaut la somme $1 + 3 + 5 + \\dots + (2n + 1)$ pour tout $n \\in \\mathbb{N}$ ?',
            options: ['$n^2$', '$n(n + 1)$', '$(n + 1)^2$', '$(2n + 1)^2$'],
            correctAnswerIndex: 2,
            explanation: 'Il y a $(n + 1)$ termes dont la demi-somme des extrêmes vaut $\\dfrac{2n + 2}{2} = n + 1$, soit $(n + 1)^2$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Somme des entiers pairs consécutifs',
          stepTitle: 'Calculer 2 + 4 + 6 + … + 2n',
          paragraphText:
            'Ici chaque terme vaut $2k$ pour $k$ de $1$ à $n$ : il y a exactement $n$ termes, le premier vaut $2$ et le dernier vaut $2n$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q6',
            type: 'mcq',
            prompt: 'Pour tout entier $n \\ge 1$, à quoi est égale la somme $S = 2 + 4 + 6 + \\dots + 2n$ ?',
            options: ['$n(n - 1)$', '$n(n + 1)$', '$2n(n + 1)$', '$\\dfrac{n(n + 1)}{2}$'],
            correctAnswerIndex: 1,
            explanation: '$S = n \\times \\dfrac{2 + 2n}{2} = n(n + 1)$. (Pour $n=3$ : $2+4+6 = 12 = 3\\times 4$.)',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q1',
          type: 'mcq',
          prompt: 'Combien de termes comporte la somme $T = U_3 + U_4 + \\dots + U_{77}$ ?',
          options: ['$74$ termes', '$75$ termes', '$77$ termes', '$76$ termes'],
          correctAnswerIndex: 1,
          explanation: 'Le nombre de termes de l’indice $3$ à l’indice $77$ inclus vaut $77 - 3 + 1 = 75$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q2',
          type: 'mcq',
          prompt: 'Que vaut la somme $S = 1 + 2 + 3 + \\dots + 2020$ ?',
          options: ['$2\\,040\\,200$', '$2\\,041\\,210$', '$4\\,082\\,420$', '$1\\,020\\,605$'],
          correctAnswerIndex: 1,
          explanation: '$S = 2020 \\times \\dfrac{1 + 2020}{2} = 1010 \\times 2021 = 2\\,041\\,210$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q3',
          type: 'mcq',
          prompt: 'Quelle est la somme des $100$ premiers nombres impairs ($1 + 3 + 5 + \\dots + 199$) ?',
          options: ['$9\\,900$', '$10\\,000$', '$10\\,100$', '$19\\,900$'],
          correctAnswerIndex: 1,
          explanation: '$S = 100 \\times \\dfrac{1 + 199}{2} = 100 \\times 100 = 10\\,000$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q4',
          type: 'mcq',
          prompt:
            'Soit $(U_n)_{n\\in\\mathbb{N}}$ arithmétique de raison $9$ et de premier terme $U_0 = -2$. Quelle est l’expression de $S = U_0 + U_1 + \\dots + U_{n-1}$ ?',
          options: [
            '$\\dfrac{n(9n - 4)}{2}$',
            '$\\dfrac{n(9n - 13)}{2}$',
            '$\\dfrac{(n + 1)(9n - 13)}{2}$',
            '$\\dfrac{n(9n - 11)}{2}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$U_0 + U_{n-1} = -2 + (9n - 11) = 9n - 13$, pour $n$ termes, d’où $S = \\dfrac{n(9n - 13)}{2}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q5',
          type: 'mcq',
          prompt: 'Que vaut la somme $1 + 3 + 5 + \\dots + (2n + 1)$ pour tout $n \\in \\mathbb{N}$ ?',
          options: ['$n^2$', '$n(n + 1)$', '$(n + 1)^2$', '$(2n + 1)^2$'],
          correctAnswerIndex: 2,
          explanation: 'Il y a $(n + 1)$ termes dont la demi-somme des extrêmes vaut $\\dfrac{2n + 2}{2} = n + 1$, soit $(n + 1)^2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p04_q6',
          type: 'mcq',
          prompt: 'Pour tout entier $n \\ge 1$, à quoi est égale la somme $S = 2 + 4 + 6 + \\dots + 2n$ ?',
          options: ['$n(n - 1)$', '$n(n + 1)$', '$2n(n + 1)$', '$\\dfrac{n(n + 1)}{2}$'],
          correctAnswerIndex: 1,
          explanation: '$S = n \\times \\dfrac{2 + 2n}{2} = n(n + 1)$. (Pour $n=3$ : $2+4+6 = 12 = 3\\times 4$.)',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Suites géométriques : définition, terme général et somme
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05',
      order: 5,
      title: 'Suites géométriques : raison, terme général et somme',
      summary:
        'Montrer qu’une suite est géométrique, appliquer Uₙ = qⁿ⁻ᵏ Uₖ et calculer la somme de termes consécutifs.',
      conceptExplanation:
        "Une suite $(U_n)$ est **géométrique** s'il existe un réel $q$ (appelé **raison**) tel que :\n$$\\forall n,\\quad U_{n+1} = q\\, U_n$$\n\n- **Terme général** : pour $k \\le n$, $U_n = q^{n - k} U_k$ (en particulier $U_n = q^n U_0$ et $U_n = q^{n-1} U_1$).\n- **Somme de termes consécutifs** (soit $m$ termes à partir du terme de départ $U_k$) :\n  - Si $q \\neq 1$ : $U_k + U_{k+1} + \\dots + U_{k+m-1} = U_k \\times \\dfrac{1 - q^m}{1 - q}$ ;\n  - Si $q = 1$ : la suite est constante, donc la somme vaut $m \\times U_k$.",
      keyRule:
        'Géométrique : Uₙ₊₁ = q Uₙ et Uₙ = qⁿ⁻ᵏ Uₖ. Somme (si q ≠ 1) = (1er terme de la somme) × (1 − q^(nb de termes)) / (1 − q).',
      formulas: [
        { name: 'Terme général', formula: 'U_n = q^{n-k} U_k \\quad (U_n = q^n U_0,\\ U_n = q^{n-1} U_1)' },
        { name: 'Somme de m termes (q ≠ 1)', formula: 'S = U_k \\times \\frac{1 - q^m}{1 - q}' },
      ],
      workedExample: {
        title: 'Terme général et somme d’une suite géométrique (p. 6-7)',
        statement:
          '1. Montre que $U_n = 7 \\times 2^n$ ($n\\in\\mathbb{N}$) est géométrique et donne $U_0$ et $q$.\n2. Calcule $T = \\dfrac{1}{3} + \\dfrac{1}{3^2} + \\dots + \\dfrac{1}{3^7}$.',
        methodSteps: [
          '1. $\\forall n \\in \\mathbb{N},\\ U_{n+1} = 7 \\times 2^{n+1} = 2 \\times (7 \\times 2^n) = 2 U_n$ : $(U_n)$ est géométrique de raison $q = 2$ et de premier terme $U_0 = 7\\times 2^0 = 7$.',
          '2. $T$ est la somme des $7$ premiers termes (de $V_1$ à $V_7$) de la suite géométrique $V_n = \\left(\\dfrac{1}{3}\\right)^n$ de raison $q = \\dfrac{1}{3}$ et de premier terme $V_1 = \\dfrac{1}{3}$.',
          'Donc $T = \\dfrac{1}{3} \\times \\dfrac{1 - (1/3)^7}{1 - 1/3} = \\dfrac{1}{3} \\times \\dfrac{3}{2} \\left(1 - \\dfrac{1}{2187}\\right) = \\dfrac{1}{2} \\times \\dfrac{2186}{2187} = \\dfrac{1093}{2187}$.',
        ],
        conclusion: '$q = 2, U_0 = 7$ ; et $T = \\dfrac{1093}{2187}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Reconnaître une suite géométrique',
          stepTitle: 'Distinguer c·qⁿ d’une forme avec constante ajoutée',
          paragraphText:
            'Dans l’Exercice 1, $v_n = 6^n$ vérifie $v_{n+1} = 6 v_n$ (géométrique de raison $6$), tandis que $t_n = 3(2^n) - 1$ donne $t_0 = 2, t_1 = 5, t_2 = 11$ ($5/2 \\neq 11/5$ : non géométrique !).',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q1',
            type: 'mcq',
            prompt: 'Parmi ces suites définies sur $\\mathbb{N}$, laquelle est géométrique ?',
            options: [
              '$t_n = 3(2^n) - 1$',
              '$V_n = 3\\left(\\dfrac{1}{4}\\right)^n$',
              '$u_n = n^2 + 1$',
              '$r_n = -2n + 7$',
            ],
            correctAnswerIndex: 1,
            explanation: '$V_{n+1} = 3\\left(\\dfrac{1}{4}\\right)^{n+1} = \\dfrac{1}{4} V_n$ : $(V_n)$ est géométrique de raison $\\dfrac{1}{4}$ et $V_0 = 3$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Trouver q et V₁ depuis 2Vₙ₊₁ + 5Vₙ = 0 (Exercice 13)',
          stepTitle: 'Exprimer Vₙ₊₁ en fonction de Vₙ',
          paragraphText:
            'À partir de $2V_{n+1} + 5V_n = 0$, on isole $V_{n+1} = -\\dfrac{5}{2}V_n$. Si l’on demande le premier terme sur $\\mathbb{N}^*$, on calcule $V_1 = q V_0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q2',
            type: 'mcq',
            prompt:
              'Soit $(V_n)$ définie par $V_0 = 2$ et $2V_{n+1} + 5V_n = 0$. Quels sont la raison $q$ et le premier terme $V_1$ de $(V_n)_{n\\in\\mathbb{N}^*}$ ?',
            options: [
              '$q = \\dfrac{5}{2}$ et $V_1 = 5$',
              '$q = -\\dfrac{5}{2}$ et $V_1 = -5$',
              '$q = -5$ et $V_1 = -10$',
              '$q = -\\dfrac{2}{5}$ et $V_1 = -\\dfrac{4}{5}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$V_{n+1} = -\\dfrac{5}{2} V_n \\implies q = -\\dfrac{5}{2}$, et $V_1 = -\\dfrac{5}{2} \\times 2 = -5$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Terme général depuis V₁',
          stepTitle: 'Appliquer Vₙ = V₁ qⁿ⁻¹ (Exercice 2)',
          paragraphText:
            'Avec $V_1 = -2$ et $V_{n+1} = -5V_n$ pour $n \\in \\mathbb{N}^*$, le terme général est $V_n = V_1 q^{n-1} = -2\\times (-5)^{n-1}$ (surtout ne pas multiplier $-2$ et $-5$ pour écrire $10^{n-1}$ !).',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q3',
            type: 'mcq',
            prompt: 'Soit $(V_n)_{n\\in\\mathbb{N}^*}$ définie par $V_1 = -2$ et $V_{n+1} = -5V_n$. Que vaut $V_4$ ?',
            options: ['$-250$', '$250$', '$-1250$', '$1000$'],
            correctAnswerIndex: 1,
            explanation: '$V_4 = -2 \\times (-5)^{4-1} = -2 \\times (-125) = 250$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Retrouver les valeurs possibles de q (Exercice 6)',
          stepTitle: 'Utiliser V₃ = q² V₁',
          paragraphText:
            'Si l’on connaît deux termes $V_1 = -\\dfrac{3}{2}$ et $V_3 = -\\dfrac{27}{2}$, on écrit $V_3 = q^{3-1} V_1 = q^2 V_1$, ce qui donne une équation du type $q^2 = 9$ avec deux solutions possibles !',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q4',
            type: 'mcq',
            prompt: 'Soit $(V_n)$ une suite géométrique telle que $V_1 = -\\dfrac{3}{2}$ et $V_3 = -\\dfrac{27}{2}$. Quelles sont toutes les valeurs possibles de sa raison $q$ ?',
            options: ['$q = 3$ uniquement', '$q = -3$ uniquement', '$q = 3$ ou $q = -3$', '$q = 9$ ou $q = -9$'],
            correctAnswerIndex: 2,
            explanation: '$-\\dfrac{27}{2} = q^2\\left(-\\dfrac{3}{2}\\right) \\iff q^2 = 9 \\iff q = 3$ ou $q = -3$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier le nombre exact de termes dans la somme géométrique',
          stepTitle: 'Vérifie toujours si la somme démarre à q⁰ (= 1) ou à q¹ !',
          paragraphText:
            'Dans $T = \\dfrac{1}{3} + \\dfrac{1}{3^2} + \\dots + \\dfrac{1}{3^7}$, la somme démarre à $V_1 = \\dfrac{1}{3}$ (exposant $1$) et contient $7$ termes. S’il y avait $+ 1$ devant ($V_0 = 1$), il y aurait $8$ termes !',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q5',
            type: 'mcq',
            prompt: 'Que vaut la somme $S = 1 + 2 + 2^2 + \\dots + 2^5$ ?',
            options: ['$31$', '$63$', '$64$', '$127$'],
            correctAnswerIndex: 1,
            explanation: 'De $2^0$ à $2^5$, il y a $5 - 0 + 1 = 6$ termes, et le $1^{\\text{er}}$ terme vaut $1$ : $S = 1 \\times \\dfrac{1 - 2^6}{1 - 2} = 64 - 1 = 63$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calcul exact d’une somme géométrique de fractions',
          stepTitle: 'Simplifier T = 1/3 + 1/3² + … + 1/3⁷',
          paragraphText:
            'Diviser $\\dfrac{1}{3}$ par $1 - \\dfrac{1}{3} = \\dfrac{2}{3}$ revient à multiplier $\\dfrac{1}{3}$ par $\\dfrac{3}{2}$, ce qui se simplifie immédiatement en $\\dfrac{1}{2}$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q6',
            type: 'mcq',
            prompt: 'Quelle fraction simplifiée vaut la somme $T = \\dfrac{1}{3} + \\dfrac{1}{3^2} + \\dots + \\dfrac{1}{3^7}$ ?',
            options: ['$\\dfrac{1093}{2187}$', '$\\dfrac{2186}{2187}$', '$\\dfrac{3280}{2187}$', '$\\dfrac{364}{729}$'],
            correctAnswerIndex: 0,
            explanation: '$T = \\dfrac{1}{3}\\times\\dfrac{1 - (1/3)^7}{2/3} = \\dfrac{1}{2}\\left(1 - \\dfrac{1}{2187}\\right) = \\dfrac{2186}{2 \\times 2187} = \\dfrac{1093}{2187}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q1',
          type: 'mcq',
          prompt: 'Parmi ces suites définies sur $\\mathbb{N}$, laquelle est géométrique ?',
          options: [
            '$t_n = 3(2^n) - 1$',
            '$V_n = 3\\left(\\dfrac{1}{4}\\right)^n$',
            '$u_n = n^2 + 1$',
            '$r_n = -2n + 7$',
          ],
          correctAnswerIndex: 1,
          explanation: '$V_{n+1} = 3\\left(\\dfrac{1}{4}\\right)^{n+1} = \\dfrac{1}{4} V_n$ : $(V_n)$ est géométrique de raison $\\dfrac{1}{4}$ et $V_0 = 3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q2',
          type: 'mcq',
          prompt:
            'Soit $(V_n)$ définie par $V_0 = 2$ et $2V_{n+1} + 5V_n = 0$. Quels sont la raison $q$ et le premier terme $V_1$ de $(V_n)_{n\\in\\mathbb{N}^*}$ ?',
          options: [
            '$q = \\dfrac{5}{2}$ et $V_1 = 5$',
            '$q = -\\dfrac{5}{2}$ et $V_1 = -5$',
            '$q = -5$ et $V_1 = -10$',
            '$q = -\\dfrac{2}{5}$ et $V_1 = -\\dfrac{4}{5}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$V_{n+1} = -\\dfrac{5}{2} V_n \\implies q = -\\dfrac{5}{2}$, et $V_1 = -\\dfrac{5}{2} \\times 2 = -5$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q3',
          type: 'mcq',
          prompt: 'Soit $(V_n)_{n\\in\\mathbb{N}^*}$ définie par $V_1 = -2$ et $V_{n+1} = -5V_n$. Que vaut $V_4$ ?',
          options: ['$-250$', '$250$', '$-1250$', '$1000$'],
          correctAnswerIndex: 1,
          explanation: '$V_4 = -2 \\times (-5)^{4-1} = -2 \\times (-125) = 250$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q4',
          type: 'mcq',
          prompt: 'Soit $(V_n)$ une suite géométrique telle que $V_1 = -\\dfrac{3}{2}$ et $V_3 = -\\dfrac{27}{2}$. Quelles sont toutes les valeurs possibles de sa raison $q$ ?',
          options: ['$q = 3$ uniquement', '$q = -3$ uniquement', '$q = 3$ ou $q = -3$', '$q = 9$ ou $q = -9$'],
          correctAnswerIndex: 2,
          explanation: '$-\\dfrac{27}{2} = q^2\\left(-\\dfrac{3}{2}\\right) \\iff q^2 = 9 \\iff q = 3$ ou $q = -3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q5',
          type: 'mcq',
          prompt: 'Que vaut la somme $S = 1 + 2 + 2^2 + \\dots + 2^5$ ?',
          options: ['$31$', '$63$', '$64$', '$127$'],
          correctAnswerIndex: 1,
          explanation: 'De $2^0$ à $2^5$, il y a $5 - 0 + 1 = 6$ termes, et le $1^{\\text{er}}$ terme vaut $1$ : $S = 1 \\times \\dfrac{1 - 2^6}{1 - 2} = 64 - 1 = 63$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p05_q6',
          type: 'mcq',
          prompt: 'Quelle fraction simplifiée vaut la somme $T = \\dfrac{1}{3} + \\dfrac{1}{3^2} + \\dots + \\dfrac{1}{3^7}$ ?',
          options: ['$\\dfrac{1093}{2187}$', '$\\dfrac{2186}{2187}$', '$\\dfrac{3280}{2187}$', '$\\dfrac{364}{729}$'],
          correctAnswerIndex: 0,
          explanation: '$T = \\dfrac{1}{3}\\times\\dfrac{1 - (1/3)^7}{2/3} = \\dfrac{1}{2}\\left(1 - \\dfrac{1}{2187}\\right) = \\dfrac{2186}{2 \\times 2187} = \\dfrac{1093}{2187}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Suites auxiliaires et modélisation concrète
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06',
      order: 6,
      title: 'Suites auxiliaires et modélisation de situations',
      summary:
        'Étudier une suite intermédiaire (arithmétique ou géométrique) pour exprimer Uₙ en fonction de n et modéliser des évolutions en pourcentage.',
      conceptExplanation:
        "De nombreuses suites rencontrées en devoir ne sont ni arithmétiques ni géométriques (par exemple $U_{n+1} = a U_n + b$ ou $U_{n+1} = \\dfrac{aU_n + b}{cU_n + d}$). On passe alors par une **suite auxiliaire** $(V_n)$ :\n1. Exprimer $V_{n+1}$ en fonction de $V_n$ pour prouver que $(V_n)$ est arithmétique ou géométrique ;\n2. En déduire $V_n$ en fonction de $n$, puis isoler $U_n$ en fonction de $n$.\n\n**Évolutions en pourcentage** :\n- Une hausse de $t\\%$ multiplie la quantité par $q = 1 + \\dfrac{t}{100}$ (ex. $+5\\% \\implies q = 1{,}05$) ;\n- Une baisse de $t\\%$ multiplie la quantité par $q = 1 - \\dfrac{t}{100}$ (ex. $-3\\% \\implies q = 0{,}97$).",
      keyRule:
        'Pour trouver Uₙ depuis Vₙ : prouve la nature de (Vₙ), écris Vₙ en fonction de n, puis inverse la relation entre Vₙ et Uₙ. Baisse de 3% ⇔ ×0,97.',
      formulas: [
        { name: 'Hausse annuelle de t %', formula: 'C_{n+1} = \\left(1 + \\frac{t}{100}\\right) C_n' },
        { name: 'Baisse annuelle de t %', formula: 'P_{n+1} = \\left(1 - \\frac{t}{100}\\right) P_n' },
      ],
      workedExample: {
        title: 'Baisse annuelle de production de 3 % (Situation complexe p. 7-8)',
        statement:
          'En 2010, une usine produit $U_0 = 65\\,000$ articles. Chaque année, la production baisse de $3\\%$. Elle n’est plus rentable dès qu’elle devient strictement inférieure à $56\\,000$ articles. À partir de quelle année cela se produit-il ?',
        methodSteps: [
          'Une baisse de $3\\%$ donne $U_{n+1} = U_n - \\dfrac{3}{100}U_n = \\dfrac{97}{100}U_n = 0{,}97 U_n$ : $(U_n)$ est géométrique de raison $q = 0{,}97$ et $U_0 = 65\\,000$, donc $U_n = 65\\,000 \\times (0{,}97)^n$.',
          'On calcule année après année : $U_1 = 63\\,050$ (2011), $U_2 = 61\\,158{,}5$ (2012), $U_3 \\approx 59\\,323{,}7$ (2013), $U_4 \\approx 57\\,544{,}0$ (2014).',
          'Pour $n = 5$ (année $2010 + 5 = 2015$) : $U_5 = 65\\,000 \\times (0{,}97)^5 \\approx 55\\,817{,}7 < 56\\,000$.',
        ],
        conclusion: 'La production n’est plus rentable à partir de $2015$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Suite arithmético-géométrique (Exercice 16)',
          stepTitle: 'Passer par Vₙ = Uₙ − 3 pour trouver Uₙ',
          paragraphText:
            'Dans l’Exercice 16, $U_0 = 9$, $U_{n+1} = \\dfrac{1}{3}U_n + 2$ et $V_n = U_n - 3$. On calcule $V_{n+1} = U_{n+1} - 3 = \\dfrac{1}{3}U_n - 1 = \\dfrac{1}{3}(U_n - 3) = \\dfrac{1}{3}V_n$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q1',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 16 ($U_0 = 9$, $U_{n+1} = \\dfrac{1}{3}U_n + 2$ et $V_n = U_n - 3$), quelle est l’expression explicite de $U_n$ en fonction de $n$ ?',
            options: [
              '$U_n = 9\\left(\\dfrac{1}{3}\\right)^n + 3$',
              '$U_n = 6\\left(\\dfrac{1}{3}\\right)^n + 3$',
              '$U_n = 6\\left(\\dfrac{1}{3}\\right)^n - 3$',
              '$U_n = 3\\left(\\dfrac{1}{3}\\right)^n + 6$',
            ],
            correctAnswerIndex: 1,
            explanation: '$V_0 = U_0 - 3 = 6$ et $q = \\dfrac{1}{3}$, donc $V_n = 6\\left(\\dfrac{1}{3}\\right)^n$ puis $U_n = V_n + 3 = 6\\left(\\dfrac{1}{3}\\right)^n + 3$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Suite homographique et suite arithmétique auxiliaire (Exercice 15)',
          stepTitle: 'Calculer Uₙ via Vₙ = 1/(Uₙ − 3)',
          paragraphText:
            'Dans l’Exercice 15, $(V_n)_{n\\in\\mathbb{N}}$ est arithmétique de raison $1$ et de premier terme $V_0 = 1$, donc $V_n = 1 + n$. Puisque $V_n = \\dfrac{1}{U_n - 3}$, on inverse : $U_n - 3 = \\dfrac{1}{V_n}$, d’où $U_n = \\dfrac{1}{1 + n} + 3 = \\dfrac{4 + 3n}{1 + n}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q2',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 15, $V_n = 1 + n$ et $V_n = \\dfrac{1}{U_n - 3}$. Quelle est l’expression de $U_n$ en fonction de $n$ ?',
            options: [
              '$\\dfrac{1}{1 + n} - 3$',
              '$\\dfrac{4 + 3n}{1 + n}$',
              '$\\dfrac{3 + n}{1 + n}$',
              '$\\dfrac{1 + 3n}{1 + n}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$U_n = 3 + \\dfrac{1}{1 + n} = \\dfrac{3(1 + n) + 1}{1 + n} = \\dfrac{4 + 3n}{1 + n}$. (Pour $n=0$, on retrouve bien $U_0 = 4$.)',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Déduire une somme Sₙ de Tₙ (Exercice 16)',
          stepTitle: 'Relier U₁ + … + Uₙ à V₁ + … + Vₙ',
          paragraphText:
            'Puisque $U_k = V_k + 3$ pour chaque indice $k$ de $1$ à $n$, on additionne $n$ fois le nombre $3$ : $S_n = U_1 + \\dots + U_n = (V_1 + \\dots + V_n) + 3n = T_n + 3n$. Attention : $T_n = V_1 + \\dots + V_n$ démarre en $V_1 = 2$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q3',
            type: 'mcq',
            prompt: 'Avec $V_n = 6\\left(\\dfrac{1}{3}\\right)^n$, que vaut $T_n = V_1 + V_2 + \\dots + V_n$ (de $V_1 = 2$ à $V_n$) ?',
            options: [
              '$9\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right)$',
              '$3\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right)$',
              '$6\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right)$',
              '$2\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right)$',
            ],
            correctAnswerIndex: 1,
            explanation: '$V_1 = 2$, raison $q = \\dfrac{1}{3}$ et $n$ termes : $T_n = 2 \\times \\dfrac{1 - (1/3)^n}{1 - 1/3} = 2 \\times \\dfrac{3}{2}\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right) = 3\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right)$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Modéliser une baisse en pourcentage (Situation complexe)',
          stepTitle: 'Trouver l’année où la production passe sous 56 000',
          paragraphText:
            'Chaque baisse de $3\\%$ multiplie la production par $0{,}97$. En testant $65\\,000 \\times (0{,}97)^n$ pour $n = 1, 2, 3, 4, 5$, le seuil $56\\,000$ est franchi pour la première fois à $n = 5$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q4',
            type: 'mcq',
            prompt: 'Dans la situation complexe de l’usine (65 000 articles en 2010, baisse de 3% par an), à partir de quelle année la production devient-elle inférieure à 56 000 articles ?',
            options: ['$2013$', '$2014$', '$2015$', '$2016$'],
            correctAnswerIndex: 2,
            explanation: '$U_4 \\approx 57\\,544 > 56\\,000$ (en 2014) et $U_5 \\approx 55\\,818 < 56\\,000$ (en 2015) : à partir de $2015$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre le taux d’évolution et la raison',
          stepTitle: 'Un intérêt de 5 % donne q = 1,05 (et jamais q = 0,05) !',
          paragraphText:
            'Dans la situation d’apprentissage, la coopérative place son capital initial à un taux d’intérêt composé annuel de $5\\%$. Le capital de l’année suivante vaut $C_n + 0{,}05 C_n = 1{,}05 C_n$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q5',
            type: 'mcq',
            prompt:
              'Dans la situation d’apprentissage ($45$ membres cotisent $1\\,000\\text{ F CFA}$/mois pendant $9$ mois, puis placent la somme à $5\\%$ par an), quel est le capital initial déposé et la raison de la suite ?',
            options: [
              '$C_0 = 405\\,000\\text{ F CFA}$ et $q = 0{,}05$',
              '$C_0 = 405\\,000\\text{ F CFA}$ et $q = 1{,}05$',
              '$C_0 = 45\\,000\\text{ F CFA}$ et $q = 1{,}05$',
              '$C_0 = 405\\,000\\text{ F CFA}$ et $r = 5$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Cotisation : $45 \\times 1\\,000 \\times 9 = 405\\,000\\text{ F CFA}$. Une hausse de $5\\%$ correspond au coefficient multiplicateur $q = 1 + 0{,}05 = 1{,}05$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Vérifier si le projet est financé en 4 ans',
          stepTitle: 'Calculer C₄ = 405 000 × (1,05)⁴',
          paragraphText:
            'Après $4$ années à $5\\%$ d’intérêts composés, le capital vaut $405\\,000 \\times (1{,}05)^4 = 405\\,000 \\times 1{,}21550625 \\approx 492\\,280\\text{ F CFA}$, ce qui reste inférieur au budget de $623\\,000\\text{ F CFA}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q6',
            type: 'mcq',
            prompt:
              'Avec un dépôt initial de $405\\,000\\text{ F CFA}$ placé à $5\\%$ par an pendant $4$ ans, la coopérative atteindra-t-elle le budget de $623\\,000\\text{ F CFA}$ ?',
            options: [
              'Oui, elle disposera d’environ $650\\,000\\text{ F CFA}$',
              'Oui, elle atteindra exactement $623\\,000\\text{ F CFA}$',
              'Non, elle n’aura qu’environ $492\\,280\\text{ F CFA}$',
              'Non, car le capital diminue chaque année',
            ],
            correctAnswerIndex: 2,
            explanation: '$C_4 = 405\\,000 \\times (1{,}05)^4 \\approx 492\\,280\\text{ F CFA} < 623\\,000\\text{ F CFA}$ : ce sera insuffisant après $4$ ans.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q1',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 16 ($U_0 = 9$, $U_{n+1} = \\dfrac{1}{3}U_n + 2$ et $V_n = U_n - 3$), quelle est l’expression explicite de $U_n$ en fonction de $n$ ?',
          options: [
            '$U_n = 9\\left(\\dfrac{1}{3}\\right)^n + 3$',
            '$U_n = 6\\left(\\dfrac{1}{3}\\right)^n + 3$',
            '$U_n = 6\\left(\\dfrac{1}{3}\\right)^n - 3$',
            '$U_n = 3\\left(\\dfrac{1}{3}\\right)^n + 6$',
          ],
          correctAnswerIndex: 1,
          explanation: '$V_0 = U_0 - 3 = 6$ et $q = \\dfrac{1}{3}$, donc $V_n = 6\\left(\\dfrac{1}{3}\\right)^n$ puis $U_n = V_n + 3 = 6\\left(\\dfrac{1}{3}\\right)^n + 3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q2',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 15, $V_n = 1 + n$ et $V_n = \\dfrac{1}{U_n - 3}$. Quelle est l’expression de $U_n$ en fonction de $n$ ?',
          options: [
            '$\\dfrac{1}{1 + n} - 3$',
            '$\\dfrac{4 + 3n}{1 + n}$',
            '$\\dfrac{3 + n}{1 + n}$',
            '$\\dfrac{1 + 3n}{1 + n}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$U_n = 3 + \\dfrac{1}{1 + n} = \\dfrac{3(1 + n) + 1}{1 + n} = \\dfrac{4 + 3n}{1 + n}$. (Pour $n=0$, on retrouve bien $U_0 = 4$.)',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q3',
          type: 'mcq',
          prompt: 'Avec $V_n = 6\\left(\\dfrac{1}{3}\\right)^n$, que vaut $T_n = V_1 + V_2 + \\dots + V_n$ (de $V_1 = 2$ à $V_n$) ?',
          options: [
            '$9\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right)$',
            '$3\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right)$',
            '$6\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right)$',
            '$2\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right)$',
          ],
          correctAnswerIndex: 1,
          explanation: '$V_1 = 2$, raison $q = \\dfrac{1}{3}$ et $n$ termes : $T_n = 2 \\times \\dfrac{1 - (1/3)^n}{1 - 1/3} = 2 \\times \\dfrac{3}{2}\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right) = 3\\left(1 - \\left(\\dfrac{1}{3}\\right)^n\\right)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q4',
          type: 'mcq',
          prompt: 'Dans la situation complexe de l’usine (65 000 articles en 2010, baisse de 3% par an), à partir de quelle année la production devient-elle inférieure à 56 000 articles ?',
          options: ['$2013$', '$2014$', '$2015$', '$2016$'],
          correctAnswerIndex: 2,
          explanation: '$U_4 \\approx 57\\,544 > 56\\,000$ (en 2014) et $U_5 \\approx 55\\,818 < 56\\,000$ (en 2015) : à partir de $2015$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q5',
          type: 'mcq',
          prompt:
            'Dans la situation d’apprentissage ($45$ membres cotisent $1\\,000\\text{ F CFA}$/mois pendant $9$ mois, puis placent la somme à $5\\%$ par an), quel est le capital initial déposé et la raison de la suite ?',
          options: [
            '$C_0 = 405\\,000\\text{ F CFA}$ et $q = 0{,}05$',
            '$C_0 = 405\\,000\\text{ F CFA}$ et $q = 1{,}05$',
            '$C_0 = 45\\,000\\text{ F CFA}$ et $q = 1{,}05$',
            '$C_0 = 405\\,000\\text{ F CFA}$ et $r = 5$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Cotisation : $45 \\times 1\\,000 \\times 9 = 405\\,000\\text{ F CFA}$. Une hausse de $5\\%$ correspond au coefficient multiplicateur $q = 1 + 0{,}05 = 1{,}05$.',
        },
        {
          id: 'premiere_c_maths_numerique_l15_suites_numeriques_p06_q6',
          type: 'mcq',
          prompt:
            'Avec un dépôt initial de $405\\,000\\text{ F CFA}$ placé à $5\\%$ par an pendant $4$ ans, la coopérative atteindra-t-elle le budget de $623\\,000\\text{ F CFA}$ ?',
          options: [
            'Oui, elle disposera d’environ $650\\,000\\text{ F CFA}$',
            'Oui, elle atteindra exactement $623\\,000\\text{ F CFA}$',
            'Non, elle n’aura qu’environ $492\\,280\\text{ F CFA}$',
            'Non, car le capital diminue chaque année',
          ],
          correctAnswerIndex: 2,
          explanation: '$C_4 = 405\\,000 \\times (1{,}05)^4 \\approx 492\\,280\\text{ F CFA} < 623\\,000\\text{ F CFA}$ : ce sera insuffisant après $4$ ans.',
        },
      ],
    },
  ],
};
