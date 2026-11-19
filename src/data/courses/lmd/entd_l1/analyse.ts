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

// ============================================================================
// ANALYSE — ENTD LICENCE 1
// Programme structuré KONAN
// ============================================================================

export const ANALYSE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Nombres réels et suites numériques
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_analyse_ch1',
    subjectId: 'lmd_analyse',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Analyse 1',
    title: 'Chapitre 1 — Nombres réels et suites numériques',
    summary:
      'Corps $\\mathbb{R}$, bornes supérieure et inférieure, valeur absolue, partie entière $E(x)$, limites de suites, théorèmes de convergence (monotones bornées, gendarmes, adjacentes) et applications économiques.',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_analyse_ch1_p1',
        order: 1,
        title: 'Nombres réels : intervalles, bornes, valeur absolue et partie entière',
        summary:
          'Maîtriser les notions de voisinage, $\\sup / \\inf / \\max / \\min$, inégalités triangulaires et partie entière $E(x)$.',
        conceptExplanation:
          'Le corps $(\\mathbb{R}, +, \\times, \\leqslant)$ est un corps totalement ordonné qui vérifie l’**axiome de la borne supérieure** : toute partie non vide et majorée de $\\mathbb{R}$ admet une borne supérieure $\\sup(A)$ (le plus petit de ses majorants).\n\n' +
          '• **Caractérisation de $\\sup(E)$** : $M = \\sup(E) \\iff (\\forall x \\in E,\\ x \\leqslant M)$ et $(\\forall \\varepsilon > 0,\\ \\exists x \\in E,\\ M - \\varepsilon < x \\leqslant M)$.\n' +
          '• **Maximum / Minimum** : $\\max(E)$ existe ssi $\\sup(E) \\in E$, et $\\min(E)$ existe ssi $\\inf(E) \\in E$.\n' +
          '• **Voisinage** : $V \\subset \\mathbb{R}$ est un voisinage de $a$ s’il existe $\\varepsilon > 0$ tel que $[a - \\varepsilon, a + \\varepsilon] \\subset V$.\n' +
          '• **Valeur absolue** : $|x| = \\max(x, -x) = \\sqrt{x^2}$, avec les deux inégalités triangulaires $|x + y| \\leqslant |x| + |y|$ et $||x| - |y|| \\leqslant |x - y|$.\n' +
          '• **Partie entière $E(x)$** : unique entier relatif tel que $E(x) \\leqslant x < E(x) + 1$ (soit $x - 1 < E(x) \\leqslant x$).',
        formulas: [
          {
            name: 'Encadrement fondamental de la partie entière',
            formula: '\\forall x \\in \\mathbb{R},\\quad E(x) \\leqslant x < E(x) + 1 \\iff x - 1 < E(x) \\leqslant x',
            note: 'Exemple : E(π) = 3 et E(-π) = -4 (attention aux nombres négatifs !).',
          },
          {
            name: 'Inégalités triangulaires',
            formula: '\\big||x| - |y|\\big| \\leqslant |x - y| \\quad \\text{et} \\quad |x + y| \\leqslant |x| + |y|',
            note: 'Utiles pour majorer les distances |x - y| dans les démonstrations de limites.',
          },
          {
            name: 'Expression de max et min avec la valeur absolue',
            formula: '\\max(x, y) = \\frac{x + y + |x - y|}{2}, \\qquad \\min(x, y) = \\frac{x + y - |x - y|}{2}',
            note: 'Propriété fondamentale.',
          },
        ],
        keyRule:
          'Une borne supérieure ou inférieure n’appartient pas toujours à l’ensemble : si $M = \\sup(A) \\notin A$, alors $A$ n’a pas de maximum !',
        workedExample: {
          title: 'Bornes de $B = \\{1/n \\mid n \\in \\mathbb{N}^*\\}$ et identité $E(x) + E(-x)$',
          statement:
            '1) Déterminer $\\sup(B)$, $\\inf(B)$, $\\max(B)$ et $\\min(B)$ pour $B = \\left\\{\\frac{1}{n} \\mid n \\in \\mathbb{N}^*\\right\\}$. 2) Calculer $E(x) + E(-x)$ pour tout $x \\in \\mathbb{R}$.',
          methodSteps: [
            '1) Pour tout $n \\in \\mathbb{N}^*$, $0 < \\frac{1}{n} \\leqslant 1$, et $1 = \\frac{1}{1} \\in B$. Donc $\\sup(B) = \\max(B) = 1$.',
            'Pour tout $\\varepsilon > 0$, il existe $n > \\frac{1}{\\varepsilon}$ tel que $0 < \\frac{1}{n} < \\varepsilon$. Donc $\\inf(B) = 0$. Comme $0 \\notin B$, $B$ n’a pas de minimum.',
            '2) Si $x \\in \\mathbb{Z}$, alors $-x \\in \\mathbb{Z}$, donc $E(x) = x$ et $E(-x) = -x$, d’où $E(x) + E(-x) = 0$.',
            'Si $x \\notin \\mathbb{Z}$, posons $p = E(x)$ : on a $p < x < p + 1$, d’où $-(p + 1) < -x < -p$. Ainsi $E(-x) = -(p + 1)$ et $E(x) + E(-x) = p - (p + 1) = -1$.',
          ],
          conclusion:
            '$\\sup(B) = \\max(B) = 1$, $\\inf(B) = 0$ (pas de minimum) ; et $E(x) + E(-x) = 0$ si $x \\in \\mathbb{Z}$, $-1$ si $x \\notin \\mathbb{Z}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Bornes & Extrema',
            stepTheme: 'blue',
            stepTitle: 'Distinguer borne inférieure et minimum',
            paragraphText:
              'Pour l’intervalle semi-ouvert $A = ]0, 5]$, $0$ est le plus grand des minorants ($\\inf(A) = 0$) et $5$ est le plus petit des majorants ($\\sup(A) = 5$). Comme $5 \\in A$, $5 = \\max(A)$ ; mais comme $0 \\notin A$, $A$ ne possède **pas de minimum**.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Pour l’ensemble $A = ]0, 5]$, quelle affirmation est **exacte** ?',
              options: [
                '$\\min(A) = 0$ et $\\max(A) = 5$',
                '$\\inf(A) = 0$, $\\max(A) = 5$, et $A$ n’a pas de minimum',
                '$A$ n’a ni borne inférieure ni borne supérieure',
                '$\\sup(A) = 5$, mais $A$ n’a pas de maximum',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$0 = \\inf(A) \\notin A$ donc pas de minimum ; $5 = \\sup(A) \\in A$ donc $\\max(A) = 5$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Partie entière d’un nombre réel négatif',
            paragraphText:
              '$E(x)$ est le plus grand entier **inférieur ou égal** à $x$. Pour un réel négatif non entier, on ne tronque jamais les décimales ! Par exemple, $-4 < -\\pi \\approx -3{,}14 < -3$, donc $E(-\\pi) = -4$ (et non $-3$).',
            keyRule: 'Toujours vérifier l’encadrement $E(x) \\leqslant x < E(x) + 1$ avant de conclure.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Que vaut $E(-2{,}3) + E(2{,}3)$ ?',
              options: ['$0$', '$1$', '$-1$', '$-2$'],
              correctAnswerIndex: 2,
              explanation:
                '$E(-2{,}3) = -3$ (car $-3 \\leqslant -2{,}3 < -2$) et $E(2{,}3) = 2$, donc $E(-2{,}3) + E(2{,}3) = -3 + 2 = -1$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Axiome de R',
            stepTheme: 'violet',
            stepTitle: 'Complétude de $\\mathbb{R}$ face à $\\mathbb{Q}$',
            paragraphText:
              'La partie $X = \\{x \\in \\mathbb{Q} \\mid x^2 \\leqslant 2\\}$ est non vide et majorée (par $2$), mais elle n’a **pas** de borne supérieure dans $\\mathbb{Q}$ car $\\sqrt{2} \\notin \\mathbb{Q}$. Dans $\\mathbb{R}$, l’axiome de la borne supérieure garantit que $\\sup(X) = \\sqrt{2}$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Soit $A$ une partie non vide et majorée de $\\mathbb{R}$, et $B = \\{-x \\mid x \\in A\\}$. Quelle égalité est toujours vraie ?',
              options: [
                '$\\inf(B) = -\\sup(A)$',
                '$\\inf(B) = \\sup(A)$',
                '$\\sup(B) = -\\sup(A)$',
                '$B$ n’est pas nécessairement minoré',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Passer à l’opposé renverse l’ordre : $M$ majore $A \\iff -M$ minore $B$. Ainsi le plus grand minorant de $B$ est l’opposé du plus petit majorant de $A$ : $\\inf(B) = -\\sup(A)$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Voisinage',
            stepTheme: 'blue',
            stepTitle: 'Voisinage d’un point dans $\\mathbb{R}$',
            paragraphText:
              'Un sous-ensemble $V \\subset \\mathbb{R}$ est un voisinage de $a$ s’il contient un intervalle ouvert centré en $a$, c’est-à-dire $\\exists \\varepsilon > 0,\\ ]a - \\varepsilon, a + \\varepsilon[ \\subset V$. Ainsi $[0, 2]$ est un voisinage de $1$, mais **pas** de $0$ (il ne contient rien à gauche de $0$).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Parmi les ensembles suivants, lequel N’EST PAS un voisinage du point $2$ dans $\\mathbb{R}$ ?',
              options: [
                '$]1, 3[$',
                '$[0, 5]$',
                '$\\mathbb{R}$',
                '$[2, 4]$',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Pour tout $\\varepsilon > 0$, $2 - \\frac{\\varepsilon}{2} \\notin [2, 4]$, donc aucun intervalle $]2 - \\varepsilon, 2 + \\varepsilon[$ n’est inclus dans $[2, 4]$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Valeur absolue',
            stepTheme: 'violet',
            stepTitle: 'Inéquation $|x - a| \\leqslant r$ et deuxième inégalité triangulaire',
            paragraphText:
              'La distance entre $x$ et $y$ est $|x - y|$. L’inégalité $|x - a| \\leqslant r$ ($r > 0$) équivaut à $x \\in [a - r, a + r]$. De plus, la 2e inégalité triangulaire assure $||x| - |y|| \\leqslant |x - y|$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Quel est l’ensemble des réels $x$ vérifiant $|x - 3| \\leqslant 2$ ?',
              options: [
                '$[-2, 2]$',
                '$[1, 5]$',
                '$[-5, -1]$',
                '$]1, 5[$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$|x - 3| \\leqslant 2 \\iff -2 \\leqslant x - 3 \\leqslant 2 \\iff 1 \\leqslant x \\leqslant 5$, soit $x \\in [1, 5]$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Bornes de $C = \\{(-1)^n + \\frac{1}{n} \\mid n \\in \\mathbb{N}^*\\}$',
            paragraphText:
              'Pour $n$ pair ($n = 2k \\geqslant 2$), $c_{2k} = 1 + \\frac{1}{2k}$ décroît de $\\frac{3}{2}$ (pour $n=2$) vers $1$. Pour $n$ impair ($n = 2k+1 \\geqslant 1$), $c_{2k+1} = -1 + \\frac{1}{2k+1}$ décroît de $0$ (pour $n=1$) vers $-1$ sans jamais atteindre $-1$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q6',
              type: 'mcq',
              prompt: 'Pour $C = \\{(-1)^n + \\frac{1}{n} \\mid n \\in \\mathbb{N}^*\\}$, quelles sont les valeurs de $\\sup(C)$ et $\\inf(C)$ ?',
              options: [
                '$\\sup(C) = 2$ et $\\inf(C) = -1$',
                '$\\sup(C) = 1$ et $\\inf(C) = -1$',
                '$\\sup(C) = \\frac{3}{2}$ et $\\inf(C) = -1$',
                '$\\sup(C) = \\frac{3}{2}$ et $\\inf(C) = 0$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La plus grande valeur est atteinte pour $n = 2$ : $(-1)^2 + \\frac{1}{2} = \\frac{3}{2} = \\max(C) = \\sup(C)$. Pour $n$ impair grand, $-1 + \\frac{1}{n} \\to -1^+$ sans atteindre $-1$, donc $\\inf(C) = -1$ (pas de minimum).',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_analyse_ch1_p2',
        order: 2,
        title: 'Suites numériques : limites, théorème des gendarmes et monotonie',
        summary:
          'Définir la convergence d’une suite, appliquer les théorèmes généraux et étudier des suites classiques dont $(1 + 1/n)^n$.',
        conceptExplanation:
          'Une **suite numérique** $(u_n)_{n \\in \\mathbb{N}}$ est une application de $\\mathbb{N}$ dans $\\mathbb{R}$. Elle modélise les phénomènes discrets en économie (ex. intérêts composés $x_n = C(1 + i)^n$, intérêts continus $y_n = C(1 + i/n)^n$).\n\n' +
          '• **Convergence** : $\\lim_{n \\to +\\infty} u_n = a \\in \\mathbb{R} \\iff \\forall \\varepsilon > 0,\\ \\exists \\eta_\\varepsilon \\in \\mathbb{N},\\ n \\geqslant \\eta_\\varepsilon \\implies |u_n - a| \\leqslant \\varepsilon$. Si la limite existe, elle est **unique**.\n' +
          '• **Toute suite convergente est bornée** (mais la réciproque est fausse : $u_n = (-1)^n$ est bornée et diverge). Par contraposée, toute suite non bornée est divergente.\n' +
          '• **Théorème des gendarmes** : si $u_n \\leqslant w_n \\leqslant v_n$ et $\\lim u_n = \\lim v_n = a$, alors $\\lim w_n = a$.\n' +
          '• **Théorème de la limite monotone** : toute suite **croissante et majorée** converge (vers $\\sup u_n$) ; toute suite **décroissante et minorée** converge (vers $\\inf u_n$). Application phare : $u_n = \\left(1 + \\frac{1}{n}\\right)^n$ est croissante et majorée par $3$, donc converge vers $e \\approx 2{,}718$.',
        formulas: [
          {
            name: 'Suite des intérêts continus (Nombre e)',
            formula: '\\lim_{n \\to +\\infty} \\left(1 + \\frac{1}{n}\\right)^n = e \\approx 2{,}71828',
            note: 'Plus généralement, (1 + i/n)^n → e^i (capitalisation continue au taux i).',
          },
          {
            name: 'Somme des n premiers entiers',
            formula: '1 + 2 + \\dots + n = \\frac{n(n + 1)}{2}',
            note: 'Utilisée notamment pour montrer que (1+2+...+n)/n² = (n+1)/(2n) → 1/2.',
          },
        ],
        keyRule:
          'Convergence $\\implies$ Bornée (réciproque FAUSSE !). Croissante + Majorée $\\implies$ Convergente.',
        workedExample: {
          title: 'Étude de $u_n = \\sqrt{n + 1} - \\sqrt{n}$ et $v_n = \\frac{1 + 2 + \\dots + n}{n^2}$',
          statement:
            'Calculer $\\lim_{n \\to +\\infty} (\\sqrt{n + 1} - \\sqrt{n})$ et $\\lim_{n \\to +\\infty} \\frac{1 + 2 + \\dots + n}{n^2}$.',
          methodSteps: [
            '1) Forme indéterminée $(+\\infty) - (+\\infty)$. On multiplie par l’expression conjuguée $\\sqrt{n+1} + \\sqrt{n}$ :',
            '$u_n = \\frac{(\\sqrt{n+1} - \\sqrt{n})(\\sqrt{n+1} + \\sqrt{n})}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{(n+1) - n}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$.',
            'Comme $\\sqrt{n+1} + \\sqrt{n} \\to +\\infty$, on obtient $\\lim_{n \\to +\\infty} u_n = 0$.',
            '2) On remplace le numérateur par $\\frac{n(n+1)}{2}$ : $v_n = \\frac{n(n+1)}{2n^2} = \\frac{n+1}{2n} = \\frac{1}{2} + \\frac{1}{2n} \\xrightarrow[n \\to +\\infty]{} \\frac{1}{2}$.',
          ],
          conclusion: '$\\lim u_n = 0$ et $\\lim v_n = \\frac{1}{2}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Vérification',
            stepTheme: 'violet',
            stepTitle: 'Lien entre convergence, monotonie et suite bornée',
            paragraphText:
              'Question officielle du Quiz Chapitre 2 : toute suite convergente est bornée (à partir d’un rang, tous ses termes sont dans $[a-1, a+1]$ et les premiers termes sont en nombre fini). En revanche, une suite convergente n’est pas forcément monotone (ex. $\\frac{(-1)^n}{n} \\to 0$), et une suite bornée n’est pas forcément convergente (ex. $(-1)^n$).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Laquelle des affirmations suivantes est **correcte** ?',
              options: [
                'Toute suite convergente est monotone.',
                'Toute suite bornée est convergente.',
                'Toute suite convergente est bornée.',
                'Toute suite non bornée est convergente.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Propriété fondamentale : toute suite convergente est bornée. Les contre-exemples $(-1)^n/n$ et $(-1)^n$ réfutent les deux premières affirmations.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Application',
            stepTheme: 'orange',
            stepTitle: 'Piège de la valeur absolue : $\\lim |u_n| = |\\ell|$',
            paragraphText:
              'Si $\\lim u_n = \\ell$, alors $\\lim |u_n| = |\\ell|$ (vrai). Mais la réciproque est **fausse** en général : pour $u_n = (-1)^n$, on a $|u_n| = 1 \\to 1$, pourtant $(u_n)$ diverge ! (Seul le cas $\\ell = 0$ est une équivalence : $\\lim |u_n| = 0 \\iff \\lim u_n = 0$.)',
            keyRule: '$\\lim u_n = \\ell \\implies \\lim |u_n| = |\\ell|$, mais la réciproque n’est vraie que pour $\\ell = 0$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Si une suite vérifie $\\lim_{n \\to +\\infty} |u_n| = 3$, que peut-on conclure avec certitude sur $(u_n)$ ?',
              options: [
                '$(u_n)$ converge vers $3$.',
                '$(u_n)$ converge vers $3$ ou vers $-3$.',
                '$(u_n)$ est forcément monotone.',
                'On ne peut pas conclure que $(u_n)$ converge (ex. $u_n = 3(-1)^n$ diverge).',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La suite $u_n = 3(-1)^n$ vérifie $|u_n| = 3 \\to 3$, mais elle oscille entre $3$ et $-3$ et ne converge pas.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Limite monotone',
            stepTheme: 'violet',
            stepTitle: 'Théorème des suites monotones bornées',
            paragraphText:
              'Une suite croissante et majorée converge vers $\\sup_{n \\in \\mathbb{N}} u_n$. Une suite décroissante et minorée converge vers $\\inf_{n \\in \\mathbb{N}} u_n$. Attention : une suite croissante et **minorée** (sans majorant) peut tendre vers $+\\infty$ (ex. $u_n = n$).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Si $(u_n)$ est une suite décroissante et minorée par $2$, que garantit le théorème de la limite monotone ?',
              options: [
                '$(u_n)$ converge vers une limite finie $\\ell \\geqslant 2$.',
                '$(u_n)$ converge nécessairement vers $2$.',
                '$(u_n)$ tend vers $-\\infty$.',
                '$(u_n)$ est constante à partir d’un certain rang.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Décroissante et minorée par $2$ implique que $(u_n)$ converge vers $\\ell = \\inf u_n \\geqslant 2$ (pas forcément égal à $2$, par exemple $u_n = 5 + 1/n \\geqslant 2$ converge vers $5$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Gendarmes',
            stepTheme: 'green',
            stepTitle: 'Appliquer le théorème des gendarmes',
            paragraphText:
              'Pour une suite comportant $(-1)^n$, $\\sin(n)$ ou $\\cos(n)$, on encadre le terme oscillant entre $-1$ et $1$. Par exemple, $-\\frac{1}{n} \\leqslant \\frac{\\sin(n)}{n} \\leqslant \\frac{1}{n}$ donne $\\lim_{n \\to +\\infty} \\frac{\\sin(n)}{n} = 0$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q4',
              type: 'mcq',
              prompt: 'Quelle est la limite de la suite $w_n = \\frac{4n + (-1)^n}{2n + 1}$ lorsque $n \\to +\\infty$ ?',
              options: ['$0$', '$2$', '$4$', 'Elle n’a pas de limite'],
              correctAnswerIndex: 1,
              explanation:
                '$\\frac{4n - 1}{2n + 1} \\leqslant w_n \\leqslant \\frac{4n + 1}{2n + 1}$. Les deux suites encadrantes convergent vers $\\frac{4}{2} = 2$, donc par le théorème des gendarmes $\\lim w_n = 2$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Capitalisation continue',
            stepTheme: 'slate',
            stepTitle: 'Comportement de la suite $y_n = C\\left(1 + \\frac{i}{n}\\right)^n$',
            paragraphText:
              'Par exemple, un capital $C = 1\\,000\\,000$ placé au taux annuel $i = 7\\%$ capitalisé $n$ fois par an vaut $y_n = C\\left(1 + \\frac{0{,}07}{n}\\right)^n$. Quand $n \\to +\\infty$, la suite converge vers $C e^{0{,}07}$ (intérêts continus).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q5',
              type: 'mcq',
              prompt: 'Quelle est la limite lorsque $n \\to +\\infty$ de la suite $u_n = \\left(1 + \\frac{1}{n}\\right)^n$ ?',
              options: ['$1$', '$+\\infty$', '$e \\approx 2{,}718$', '$0$'],
              correctAnswerIndex: 2,
              explanation:
                'Propriété établie : $(u_n)$ est croissante et majorée par $3$, elle converge vers le nombre d’Euler $e \\approx 2{,}71828$. (Forme indéterminée $1^{+\\infty}$, jamais égal à $1$ !)',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Série harmonique vs série de Riemann d’ordre 2',
            paragraphText:
              'On rencontre deux suites de sommes partielles célèbres : $u_n = 1 + \\frac{1}{2^2} + \\dots + \\frac{1}{n^2}$ est croissante et majorée (par $2$) donc **converge** (vers $\\pi^2/6$), tandis que la série harmonique $H_n = 1 + \\frac{1}{2} + \\dots + \\frac{1}{n}$ **diverge vers $+\\infty$**.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Que peut-on dire de la suite $u_n = \\left(-\\frac{1}{9}\\right)^n$ ?',
              options: [
                'Elle converge vers $0$ car $\\left|-\\frac{1}{9}\\right| < 1$.',
                'Elle diverge car elle change de signe à chaque rang.',
                'Elle converge vers $-1$.',
                'Elle tend vers $+\\infty$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'C’est une suite géométrique de raison $q = -\\frac{1}{9}$ vérifiant $|q| < 1$ : toute suite géométrique avec $|q| < 1$ converge vers $0$.',
            },
          },
        ],
      }),

      // POINT 1.3
      makePoint({
        id: 'lmd_entd_l1_analyse_ch1_p3',
        order: 3,
        title: 'Suites adjacentes, suites géométriques et suites récurrentes',
        summary:
          'Appliquer le théorème des suites adjacentes, la somme géométrique (multiplicateur keynésien) et la méthode d’étude de $u_{n+1} = f(u_n)$.',
        conceptExplanation:
          '• **Suites adjacentes** : deux suites $(u_n)$ et $(v_n)$ sont adjacentes si $(u_n)$ est croissante, $(v_n)$ est décroissante et $\\lim_{n \\to +\\infty} (u_n - v_n) = 0$. Alors elles **convergent toutes deux vers la même limite $\\ell$** et $\\forall n,\\ u_n \\leqslant \\ell \\leqslant v_n$.\n\n' +
          '• **Suites géométriques** ($u_{n+1} = q u_n$, $u_n = u_0 q^n$) : la somme vaut $\\sum_{k=0}^n u_k = u_0 \\frac{1 - q^{n+1}}{1 - q}$ pour $q \\neq 1$. Si $|q| < 1$, la somme infinie converge vers $\\frac{u_0}{1 - q}$ (application économique du **multiplicateur keynésien** $\\frac{1}{1 - c}$).\n\n' +
          '• **Suites récurrentes $u_{n+1} = f(u_n)$** : méthode en 5 étapes : (a) domaine de définition, (b) premiers termes, (c) monotonie (signe de $u_{n+1} - u_n$), (d) borne par récurrence pour conclure à la convergence, (e) si $f$ est continue, la limite $\\ell$ est un **point fixe** vérifiant $\\ell = f(\\ell)$.',
        formulas: [
          {
            name: 'Somme d’une série géométrique (|q| < 1)',
            formula: '\\sum_{k=0}^{+\\infty} u_0 q^k = \\frac{u_0}{1 - q} \\quad (|q| < 1)',
            note: 'En macroéconomie : impact total = injection / (1 - c).',
          },
          {
            name: 'Point fixe d’une suite récurrente convergente',
            formula: 'u_{n+1} = f(u_n),\\ u_n \\to \\ell \\text{ et } f \\text{ continue en } \\ell \\implies f(\\ell) = \\ell',
            note: 'Attention : f(ℓ) = ℓ ne prouve pas la convergence, il faut d’abord prouver que (u_n) converge !',
          },
        ],
        keyRule:
          'Pour une suite récurrente $u_{n+1} = f(u_n)$, on prouve **d’abord** la convergence (monotone + bornée), et on résout **ensuite** l’équation du point fixe $\\ell = f(\\ell)$.',
        workedExample: {
          title: 'Suite récurrente $u_{n+1} = \\sqrt{6 + u_n}$ et Multiplicateur keynésien',
          statement:
            '1) Soit $u_0 = 0$ et $u_{n+1} = \\sqrt{6 + u_n}$. Prouver que $(u_n)$ converge et trouver sa limite. 2) L’État injecte 100 M€ avec une propension marginale à consommer $c = 0{,}8$. Calculer l’impact économique total.',
          methodSteps: [
            '1) Récurrence : $0 \\leqslant u_0 \\leqslant 3$. Si $0 \\leqslant u_n \\leqslant 3$, alors $6 \\leqslant 6 + u_n \\leqslant 9 \\implies \\sqrt{6} \\leqslant u_{n+1} \\leqslant 3$. Donc $(u_n)$ est majorée par $3$.',
            'Monotonie : $u_{n+1}^2 - u_n^2 = 6 + u_n - u_n^2 = (3 - u_n)(2 + u_n) \\geqslant 0$ car $0 \\leqslant u_n \\leqslant 3$. Comme $u_n \\geqslant 0$, $u_{n+1} \\geqslant u_n$ : $(u_n)$ est croissante.',
            'Croissante et majorée par $3$, donc convergente vers $\\ell \\in [0, 3]$. Par continuité de $x \\mapsto \\sqrt{6+x}$, $\\ell = \\sqrt{6 + \\ell} \\implies \\ell^2 - \\ell - 6 = 0 \\implies (\\ell - 3)(\\ell + 2) = 0$. Comme $\\ell \\geqslant 0$, $\\ell = 3$.',
            '2) Les dépenses successives forment une suite géométrique $100 + 100(0{,}8) + 100(0{,}8)^2 + \\dots = \\frac{100}{1 - 0{,}8} = \\frac{100}{0{,}2} = 500$ M€.',
          ],
          conclusion: '$\\lim u_n = 3$, et l’impact économique total est de $500$ millions d’euros (multiplicateur $= 5$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Suites adjacentes',
            stepTheme: 'blue',
            stepTitle: 'Les trois conditions des suites adjacentes',
            paragraphText:
              'Deux suites $(u_n)$ et $(v_n)$ sont adjacentes ssi : (1) $(u_n)$ est croissante, (2) $(v_n)$ est décroissante, (3) $\\lim_{n \\to +\\infty} (u_n - v_n) = 0$. Si ces trois conditions sont réunies, elles convergent nécessairement vers la **même limite**.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q1',
              type: 'mcq',
              prompt: 'Les suites $u_n = 1 + \\frac{1}{1!} + \\dots + \\frac{1}{n!}$ et $v_n = u_n + \\frac{1}{n!}$ sont-elles adjacentes ?',
              options: [
                'Non, car $v_n$ est croissante.',
                'Oui : $(u_n)$ est croissante, $(v_n)$ est décroissante et $v_n - u_n = \\frac{1}{n!} \\to 0$.',
                'Non, car $v_n - u_n$ tend vers $1$.',
                'Oui, et leur limite commune vaut $2$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$u_{n+1} - u_n = \\frac{1}{(n+1)!} > 0$ ; $v_{n+1} - v_n = \\frac{2}{(n+1)!} - \\frac{1}{n!} = \\frac{1 - n}{(n+1)!} \\leqslant 0$ (pour $n \\geqslant 1$) ; et $v_n - u_n = \\frac{1}{n!} \\to 0$. Elles convergent toutes deux vers $e$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Économie',
            stepTheme: 'green',
            stepTitle: 'Multiplicateur keynésien par suite géométrique',
            paragraphText:
              'Lorsque chaque euro de revenu génère une dépense de $c \\in ]0, 1[$ euro (propension marginale à consommer), une injection initiale $I$ engendre une somme totale $S = \\sum_{k=0}^{+\\infty} I \\cdot c^k = \\frac{I}{1 - c}$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q2',
              type: 'mcq',
              prompt: 'Si l’État injecte $60$ millions d’euros avec une propension marginale à consommer $c = 0{,}75$, quel est l’impact économique total ?',
              options: [
                '$180$ millions d’euros',
                '$45$ millions d’euros',
                '$240$ millions d’euros',
                '$300$ millions d’euros',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$S = \\frac{60}{1 - 0{,}75} = \\frac{60}{0{,}25} = 240$ millions d’euros (le multiplicateur keynésien est $4$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Suites géométriques',
            stepTheme: 'violet',
            stepTitle: 'Somme partielle et limite de $u_n = 1 + \\frac{1}{3} + \\dots + \\frac{1}{3^n}$',
            paragraphText:
              'Pour $q = \\frac{1}{3}$, la somme des $n + 1$ termes vaut $u_n = \\frac{1 - (1/3)^{n+1}}{1 - 1/3} = \\frac{3}{2}\\left(1 - \\frac{1}{3^{n+1}}\\right)$. Comme $\\left(\\frac{1}{3}\\right)^{n+1} \\to 0$, la suite converge vers $\\frac{3}{2}$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q3',
              type: 'mcq',
              prompt: 'Quelle est la limite lorsque $n \\to +\\infty$ de $S_n = 1 + \\frac{1}{4} + \\frac{1}{4^2} + \\dots + \\frac{1}{4^n}$ ?',
              options: ['$\\frac{4}{3}$', '$4$', '$\\frac{3}{4}$', '$+\\infty$'],
              correctAnswerIndex: 0,
              explanation:
                'Somme géométrique de premier terme $1$ et de raison $q = \\frac{1}{4} \\in ]-1, 1[$ : $\\lim S_n = \\frac{1}{1 - 1/4} = \\frac{4}{3}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Point fixe',
            stepTheme: 'green',
            stepTitle: 'Trouver la limite d’une suite récurrente convergente',
            paragraphText:
              'Si une suite définie par $u_{n+1} = f(u_n)$ converge vers $\\ell$ et si $f$ est continue en $\\ell$, alors $\\ell = f(\\ell)$. Par exemple, pour $u_{n+1} = \\frac{1}{2} u_n + 4$, le point fixe vérifie $\\ell = \\frac{1}{2}\\ell + 4 \\iff \\frac{1}{2}\\ell = 4 \\iff \\ell = 8$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q4',
              type: 'mcq',
              prompt: 'On admet que la suite définie par $u_0 = 1$ et $u_{n+1} = \\frac{1}{3} u_n + 6$ converge vers un réel $\\ell$. Quelle est la valeur de $\\ell$ ?',
              options: ['$3$', '$6$', '$18$', '$9$'],
              correctAnswerIndex: 3,
              explanation:
                'Par passage à la limite : $\\ell = \\frac{1}{3}\\ell + 6 \\iff \\frac{2}{3}\\ell = 6 \\iff \\ell = 9$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Un point fixe ne prouve pas la convergence !',
            paragraphText:
              'Considérons $u_0 = 2$ et $u_{n+1} = 2u_n - 1$. L’équation $\\ell = 2\\ell - 1$ admet bien la solution $\\ell = 1$, pourtant $u_0 = 2, u_1 = 3, u_2 = 5, u_3 = 9 \\to +\\infty$ ! La relation $\\ell = f(\\ell)$ n’est exploitable qu’**après** avoir établi la convergence de $(u_n)$.',
            keyRule: 'Toujours prouver la convergence (monotone + bornée, ou suite auxiliaire) AVANT de résoudre $\\ell = f(\\ell)$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q5',
              type: 'mcq',
              prompt: 'Pour $u_0 = 2$ et $u_{n+1} = 2u_n - 1$, pourquoi ne peut-on pas conclure que $\\lim u_n = 1$ à partir de $\\ell = 2\\ell - 1$ ?',
              options: [
                'Parce que $f(x) = 2x - 1$ n’est pas continue.',
                'Parce que $(u_n)$ n’est pas convergente : elle diverge vers $+\\infty$.',
                'Parce que $\\ell = 1$ n’est pas solution de $\\ell = 2\\ell - 1$.',
                'Parce que $u_0 > 0$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le théorème du point fixe est une implication : SI $(u_n)$ converge vers $\\ell$, ALORS $\\ell = f(\\ell)$. Ici $u_n = 2^n + 1 \\to +\\infty$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Application',
            stepTheme: 'violet',
            stepTitle: 'Limite du quotient $u_n / u_{n+1}$',
            paragraphText:
              'Si une suite $(u_n)$ converge vers $\\ell \\in \\mathbb{R}$ et si $\\lim_{n \\to +\\infty} \\frac{u_n}{u_{n+1}} = a \\neq 1$, alors comme $u_n = \\frac{u_n}{u_{n+1}} \\cdot u_{n+1}$, on obtient par passage à la limite $\\ell = a \\ell$, soit $(1 - a)\\ell = 0$. Comme $a \\neq 1$, nécessairement $\\ell = 0$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q6',
              type: 'mcq',
              prompt: 'Si $\\lim_{n \\to +\\infty} u_n = \\ell \\in \\mathbb{R}$ et $\\lim_{n \\to +\\infty} \\frac{u_n}{u_{n+1}} = 2$, que vaut nécessairement $\\ell$ ?',
              options: ['$2$', '$1$', '$0$', 'On ne peut pas savoir'],
              correctAnswerIndex: 2,
              explanation:
                '$u_n = \\frac{u_n}{u_{n+1}} u_{n+1}$ donne à la limite $\\ell = 2\\ell \\implies \\ell = 0$.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Limites, équivalents et continuité des fonctions
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_analyse_ch2',
    subjectId: 'lmd_analyse',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Analyse 1',
    title: 'Chapitre 2 — Limites, fonctions équivalentes et continuité',
    summary:
      'Limites finies, infinies et unilatérales, équivalents en $0$ et en $\\pm\\infty$, continuité, Théorème des Valeurs Intermédiaires (TVI), Weierstrass et point fixe.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_analyse_ch2_p1',
        order: 1,
        title: 'Limites de fonctions et fonctions équivalentes',
        summary:
          'Calculer des limites par encadrement, limites unilatérales et utilisation rigoureuse des équivalents.',
        conceptExplanation:
          '• **Limite en un point $a$** : $\\lim_{x \\to a} f(x) = \\ell \\iff \\forall \\varepsilon > 0,\\ \\exists \\eta > 0,\\ (|x - a| < \\eta \\text{ et } x \\neq a) \\implies |f(x) - \\ell| < \\varepsilon$. Une fonction admet une limite $\\ell$ en $a$ ssi ses limites à gauche ($x \\to a^-$) et à droite ($x \\to a^+$) existent et sont toutes deux égales à $\\ell$.\n\n' +
          '• **Fonctions équivalentes** : $f \\underset{a}{\\sim} g \\iff \\lim_{x \\to a} \\frac{f(x)}{g(x)} = 1$.\n' +
          '  — Au voisinage de $0$, un polynôme est équivalent à son **monôme de plus bas degré** (ex. $x^3 + 2x^2 + 5x \\underset{0}{\\sim} 5x$).\n' +
          '  — Au voisinage de $\\pm\\infty$, un polynôme est équivalent à son **monôme de plus haut degré** (ex. $5x^3 + 2x^2 + 5x \\underset{+\\infty}{\\sim} 5x^3$).\n' +
          '• **Règles opératoires** : les équivalents sont compatibles avec le **produit** et le **quotient**, mais **JAMAIS** avec l’addition ni la composition en général !',
        formulas: [
          {
            name: 'Équivalence de deux fonctions en a',
            formula: 'f \\underset{a}{\\sim} g \\iff \\lim_{x \\to a} \\frac{f(x)}{g(x)} = 1',
            note: 'Compatible avec produits et quotients, mais PAS avec les sommes ni les compositions.',
          },
          {
            name: 'Condition d’existence par limites unilatérales',
            formula: '\\lim_{x \\to a} f(x) = \\ell \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = \\ell',
            note: 'Exemple : |x|/x tend vers -1 en 0⁻ et +1 en 0⁺, donc pas de limite en 0.',
          },
        ],
        keyRule:
          'En $0$ : garder le **plus bas** degré d’un polynôme. En $\\pm\\infty$ : garder le **plus haut** degré. Ne jamais additionner deux équivalents sans vérifier l’absence d’annulation !',
        workedExample: {
          title: 'Équivalents d’une fraction rationnelle en $0$ et en $+\\infty$',
          statement:
            'Soit $f(x) = \\frac{(x^2 + 7x^3)(x + 3)}{x^5 + x^2}$. Trouver un équivalent et la limite de $f(x)$ quand $x \\to 0$ puis quand $x \\to +\\infty$.',
          methodSteps: [
            '1) En $0$ (plus bas degrés) : $x^2 + 7x^3 \\underset{0}{\\sim} x^2$, $x + 3 \\underset{0}{\\sim} 3$ et $x^5 + x^2 \\underset{0}{\\sim} x^2$.',
            'Par produit et quotient d’équivalents : $f(x) \\underset{0}{\\sim} \\frac{x^2 \\cdot 3}{x^2} = 3$, donc $\\lim_{x \\to 0} f(x) = 3$.',
            '2) En $+\\infty$ (plus hauts degrés) : $x^2 + 7x^3 \\underset{+\\infty}{\\sim} 7x^3$, $x + 3 \\underset{+\\infty}{\\sim} x$ et $x^5 + x^2 \\underset{+\\infty}{\\sim} x^5$.',
            'Donc $f(x) \\underset{+\\infty}{\\sim} \\frac{7x^3 \\cdot x}{x^5} = \\frac{7}{x}$, d’où $\\lim_{x \\to +\\infty} f(x) = 0$.',
          ],
          conclusion: '$f(x) \\underset{0}{\\sim} 3 \\implies \\lim_{0} f = 3$, et $f(x) \\underset{+\\infty}{\\sim} \\frac{7}{x} \\implies \\lim_{+\\infty} f = 0$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Vérification',
            stepTheme: 'blue',
            stepTitle: 'Limites à gauche et à droite différentes',
            paragraphText:
              'Si $\\lim_{x \\to a^-} f(x) = L_1$ et $\\lim_{x \\to a^+} f(x) = L_2$ avec $L_1 \\neq L_2$ (comme pour $f(x) = \\frac{|x|}{x}$ en $0$ où $L_1 = -1$ et $L_2 = 1$), la fonction n’admet **pas de limite** en $a$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Si $\\lim_{x \\to a^-} f(x) = L_1$ et $\\lim_{x \\to a^+} f(x) = L_2$ avec $L_1 \\neq L_2$, que conclure sur $\\lim_{x \\to a} f(x)$ (QCM Ch. 3) ?',
              options: [
                'La limite est la moyenne $\\frac{L_1 + L_2}{2}$.',
                'La limite n’existe pas.',
                'La limite est égale à $f(a)$.',
                'La limite vaut $L_2$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par la Proposition 1 du Chapitre 3, une limite en $a$ existe ssi les limites à gauche et à droite existent et sont égales.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Vérification',
            stepTheme: 'green',
            stepTitle: 'Limite en $+\\infty$ d’une fraction rationnelle',
            paragraphText:
              'Au voisinage de $+\\infty$, une fraction rationnelle est équivalente au quotient de ses monômes de plus haut degré. Par exemple, $\\frac{x^3 - 5x^2}{2x^4 - 7x^2} \\underset{+\\infty}{\\sim} \\frac{x^3}{2x^4} = \\frac{1}{2x} \\to 0$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Quelle est la valeur de $\\lim_{x \\to +\\infty} \\frac{x^3 - 5x^2}{2x^4 - 7x^2}$ (QCM Ch. 3) ?',
              options: ['$+\\infty$', '$\\frac{1}{2}$', '$0$', 'Elle n’existe pas'],
              correctAnswerIndex: 2,
              explanation:
                'Le degré du dénominateur ($4$) est strictement supérieur à celui du numérateur ($3$) : l’équivalent $\\frac{1}{2x}$ tend vers $0$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Équivalent en 0',
            stepTheme: 'green',
            stepTitle: 'Équivalent d’un polynôme au voisinage de $0$',
            paragraphText:
              'Au voisinage de $0$, les hautes puissances de $x$ sont négligeables devant les basses puissances : un polynôme est donc équivalent à son monôme non nul de **plus bas degré**.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Quelle fonction est équivalente à $f(x) = 4x^3 + 2x^2 - x$ au voisinage de $0$ (QCM Ch. 3) ?',
              options: ['$-x$', '$4x^3$', '$2x^2$', '$4x^3 + 2x^2$'],
              correctAnswerIndex: 0,
              explanation:
                '$\\lim_{x \\to 0} \\frac{4x^3 + 2x^2 - x}{-x} = \\lim_{x \\to 0} (-4x^2 - 2x + 1) = 1$, donc $f(x) \\underset{0}{\\sim} -x$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Équivalent en +∞',
            stepTheme: 'violet',
            stepTitle: 'Terme dominant en $+\\infty$ (QCM Ch. 3)',
            paragraphText:
              'Par croissances comparées en $+\\infty$, $e^x$ domine toute puissance $x^n$ qui domine $\\ln|x|$. Donc $\\lim_{x \\to +\\infty} \\frac{e^x + x^3 + \\ln|x|}{e^x} = \\lim_{x \\to +\\infty} \\left(1 + \\frac{x^3}{e^x} + \\frac{\\ln|x|}{e^x}\\right) = 1$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Quelle fonction est équivalente à $f(x) = e^x + x^3 + \\ln|x|$ au voisinage de $+\\infty$ (QCM Ch. 3) ?',
              options: ['$x^3$', '$\\ln|x|$', '$e^x + x^3$', '$e^x$'],
              correctAnswerIndex: 3,
              explanation:
                '$\\frac{x^3}{e^x} \\to 0$ et $\\frac{\\ln|x|}{e^x} \\to 0$ en $+\\infty$, donc $f(x) \\underset{+\\infty}{\\sim} e^x$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Interdiction d’additionner des équivalents',
            paragraphText:
              'Si $f_1(x) = x + x^2 \\underset{0}{\\sim} x$ et $f_2(x) = -x + x^3 \\underset{0}{\\sim} -x$, alors $f_1(x) + f_2(x) = x^2 + x^3 \\underset{0}{\\sim} x^2$, et **non** $x + (-x) = 0$ (on n’écrit d’ailleurs jamais $f \\sim 0$). En général, on ne peut rien conclure sur l’équivalent d’une somme.',
            keyRule: 'On multiplie et divise les équivalents ; on n’additionne et ne compose JAMAIS les équivalents sans précaution !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Si $f_1 \\underset{a}{\\sim} g_1$ et $f_2 \\underset{a}{\\sim} g_2$, laquelle de ces opérations est **toujours** valide ?',
              options: [
                '$f_1 + f_2 \\underset{a}{\\sim} g_1 + g_2$',
                '$f_1 f_2 \\underset{a}{\\sim} g_1 g_2$',
                '$e^{f_1} \\underset{a}{\\sim} e^{g_1}$',
                '$f_1 - f_2 \\underset{a}{\\sim} g_1 - g_2$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Proposition 5 du Chapitre 3 garantit la compatibilité avec le produit et le quotient, mais met en garde contre l’addition et la composition (ex. $x + 1 \\sim_{+\\infty} x$, mais $e^{x+1} = e \\cdot e^x \\not\\sim e^x$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Lever une forme indéterminée $0/0$ par factorisation',
            paragraphText:
              'Pour $f(x) = \\frac{x^2 - 1}{\\sqrt{x - 1}}$ quand $x \\to 1^+$, on factorise $x^2 - 1 = (x - 1)(x + 1) = (\\sqrt{x - 1})^2 (x + 1)$. En simplifiant par $\\sqrt{x - 1} > 0$, il reste $f(x) = \\sqrt{x - 1}\\,(x + 1) \\to 0 \\times 2 = 0$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Que vaut $\\lim_{x \\to 1^+} \\frac{x^2 - 1}{\\sqrt{x - 1}}$ ?',
              options: ['$+\\infty$', '$2$', '$0$', '$1$'],
              correctAnswerIndex: 2,
              explanation:
                'Pour $x > 1$, $\\frac{(x - 1)(x + 1)}{\\sqrt{x - 1}} = \\sqrt{x - 1}(x + 1) \\xrightarrow[x \\to 1^+]{} 0 \\times 2 = 0$.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_analyse_ch2_p2',
        order: 2,
        title: 'Continuité, TVI, théorème de Weierstrass et point fixe',
        summary:
          'Maîtriser les trois conditions de continuité en un point et les grands théorèmes globaux sur un segment $[a, b]$.',
        conceptExplanation:
          'Une fonction $f$ est **continue en $a$** lorsque $\\lim_{x \\to a} f(x) = f(a)$, ce qui exige trois conditions : (1) $f$ est définie en $a$, (2) $\\lim_{x \\to a} f(x)$ existe et est finie, (3) cette limite vaut $f(a)$. Elle est continue en $a$ ssi elle est continue à gauche et à droite en $a$.\n\n' +
          'Les grands théorèmes globaux sur un intervalle **fermé borné (segment) $[a, b]$** :\n' +
          '• **Théorème des Valeurs Intermédiaires (TVI)** : si $f$ est continue sur $[a, b]$, alors pour tout $d$ compris entre $f(a)$ et $f(b)$, il existe **au moins un** $c \\in [a, b]$ tel que $f(c) = d$. (En ajoutant la stricte monotonie, $c$ est unique.)\n' +
          '• **Théorème de Weierstrass (optimisation)** : toute fonction continue sur un segment $[a, b]$ est bornée et **atteint** son maximum global $M$ et son minimum global $m$ sur $[a, b]$.\n' +
          '• **Théorème du point fixe** : si $f$ est continue sur $[a, b]$ et $f([a, b]) \\subset [a, b]$, alors il existe au moins un $x \\in [a, b]$ tel que $f(x) = x$ (équilibre économique).',
        formulas: [
          {
            name: 'Continuité en un point a',
            formula: 'f \\text{ continue en } a \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)',
            note: 'Si lim_{x→a} f(x) = ℓ existe mais f n’est pas définie en a, on peut la prolonger par continuité en posant f(a) = ℓ.',
          },
          {
            name: 'Corollaire du TVI (existence de racine)',
            formula: 'f \\text{ continue sur } [a, b] \\text{ et } f(a)\\cdot f(b) \\leqslant 0 \\implies \\exists c \\in [a, b],\\ f(c) = 0',
            note: 'Si f est de plus strictement monotone sur [a, b], la racine c est unique.',
          },
        ],
        keyRule:
          'Continuité $\\neq$ Dérivabilité : toute fonction dérivable est continue, mais la continuité n’exige **pas** la dérivabilité (ex. $|x|$ est continue mais non dérivable en $0$).',
        workedExample: {
          title: 'Continuité d’un barème progressif de frais immobiliers',
          statement:
            'Un agent immobilier perçoit $14\\%$ sur la tranche de loyer $x \\in [0, 1000]$, puis $10\\%$ sur la tranche de $1000$ à $1500$, $6\\%$ de $1500$ à $3000$ et $4\\%$ au-delà de $3000$. Écrire la fonction $F(x)$ sur $[0, 1500]$ et vérifier sa continuité en $x = 1000$.',
          methodSteps: [
            'Pour $0 \\leqslant x \\leqslant 1000$ : $F(x) = 0{,}14x$. En particulier $F(1000) = 140$.',
            'Pour $1000 < x \\leqslant 1500$ : on paie $14\\%$ sur les premiers $1000$ (soit $140$) plus $10\\%$ sur la partie excédentaire $(x - 1000)$, donc $F(x) = 140 + 0{,}10(x - 1000) = 0{,}10x + 40$.',
            'Limite à gauche : $\\lim_{x \\to 1000^-} F(x) = 0{,}14(1000) = 140$.',
            'Limite à droite : $\\lim_{x \\to 1000^+} F(x) = 0{,}10(1000) + 40 = 140 = F(1000)$.',
          ],
          conclusion:
            'Les limites à gauche et à droite coïncident avec $F(1000) = 140$ : la fonction des frais par tranches est **continue** en $1000$ (un barème marginal par tranches est toujours continu, contrairement à un barème global à effet de seuil).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Vérification',
            stepTheme: 'blue',
            stepTitle: 'Conditions nécessaires de continuité en un point',
            paragraphText:
              'Pour que $f$ soit continue en $a$, il faut et il suffit que $f(a)$ existe, que $\\lim_{x \\to a} f(x)$ existe et soit finie, et que $\\lim_{x \\to a} f(x) = f(a)$. La dérivabilité en $a$ n’est **pas** nécessaire.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Pour qu’une fonction $f$ soit continue en un point $a$, laquelle de ces conditions N’EST PAS nécessaire (QCM Ch. 3) ?',
              options: [
                '$f$ doit être définie en $a$.',
                'La limite $\\lim_{x \\to a} f(x)$ doit exister et être finie.',
                '$f$ doit être dérivable en $a$.',
                '$\\lim_{x \\to a} f(x)$ doit être égale à $f(a)$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La continuité n’implique pas la dérivabilité (ex. $f(x) = |x|$ est continue en $0$ sans y être dérivable).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'TVI',
            stepTheme: 'violet',
            stepTitle: 'Ce que garantit — et ne garantit pas — le TVI',
            paragraphText:
              'Si $f$ est continue sur $[0, 2]$ avec $f(0) = -1$ et $f(2) = 5$, comme $0$ est compris entre $-1$ et $5$, le TVI garantit l’existence d’**au moins un** $c \\in [0, 2]$ tel que $f(c) = 0$. Sans information de stricte monotonie, le TVI ne garantit ni l’unicité de $c$, ni la croissance de $f$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Une fonction $f$ est continue sur $[0, 2]$ avec $f(0) = -1$ et $f(2) = 5$. Quel énoncé est garanti par le TVI (QCM Ch. 3) ?',
              options: [
                'Il existe au moins un $c \\in [0, 2]$ tel que $f(c) = 0$.',
                '$f$ est croissante sur $[0, 2]$.',
                '$f$ atteint son maximum en $x = 2$.',
                'Il existe un **unique** $c \\in [0, 2]$ tel que $f(c) = 0$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le TVI garantit l’existence d’au moins une solution $c \\in [0, 2]$ à $f(c) = 0$. L’unicité nécessiterait une hypothèse supplémentaire (stricte monotonie).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Weierstrass',
            stepTheme: 'violet',
            stepTitle: 'Conditions d’existence d’un maximum et d’un minimum globaux',
            paragraphText:
              'Le théorème de Weierstrass assure qu’une fonction continue sur un **intervalle fermé et borné** $[a, b]$ atteint son maximum et son minimum globaux. Sur un intervalle ouvert $]0, 1[$, $x \\mapsto 1/x$ ou $x \\mapsto x$ n’atteignent pas de maximum.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q3',
              type: 'mcq',
              prompt: 'Sous quelles conditions une fonction $f$ est-elle assurée d’atteindre un maximum et un minimum globaux (QCM Ch. 3) ?',
              options: [
                'Si elle est définie sur un intervalle ouvert.',
                'Si elle est continue sur $\\mathbb{R}$.',
                'Si elle est strictement croissante sur $]0, 1[$.',
                'Si elle est continue et définie sur un intervalle fermé et borné $[a, b]$.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'C’est l’énoncé exact du théorème d’optimisation de Weierstrass : continuité + intervalle fermé borné (compact) $[a, b]$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Point fixe',
            stepTheme: 'violet',
            stepTitle: 'Théorème du point fixe (équilibre économique)',
            paragraphText:
              'Si $f : [a, b] \\to [a, b]$ est continue (l’image du segment reste dans le segment), alors la fonction auxiliaire $g(x) = f(x) - x$ vérifie $g(a) \\geqslant 0$ et $g(b) \\leqslant 0$. Par le TVI, il existe $x^* \\in [a, b]$ tel que $f(x^*) = x^*$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Quelle hypothèse garantit, par le théorème du point fixe, l’existence d’au moins un $x \\in [0, 1]$ tel que $f(x) = x$ ?',
              options: [
                '$f$ est définie sur $[0, 1]$ et $f(0) = 1$.',
                '$f$ est continue sur $[0, 1]$ et $f([0, 1]) \\subset [0, 1]$.',
                '$f$ est croissante sur $\\mathbb{R}$.',
                '$f(x) > 0$ pour tout $x \\in [0, 1]$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Continuité sur le segment $[0, 1]$ et stabilité $f([0, 1]) \\subset [0, 1]$ sont les hypothèses exactes du théorème du point fixe.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Prolongement',
            stepTheme: 'green',
            stepTitle: 'Étudier la continuité en $0$ d’une fonction définie par morceaux',
            paragraphText:
              '$f(x) = \\frac{x + 2 - \\sqrt{4 - x^2}}{x}$ pour $x \\neq 0$ et $f(0) = 1$. En multipliant par la quantité conjuguée de $2 - \\sqrt{4 - x^2}$ : $\\frac{2 - \\sqrt{4 - x^2}}{x} = \\frac{x^2}{x(2 + \\sqrt{4 - x^2})} = \\frac{x}{2 + \\sqrt{4 - x^2}} \\to 0$, donc $f(x) = 1 + \\frac{x}{2 + \\sqrt{4 - x^2}} \\to 1 = f(0)$ : $f$ est continue en $0$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Pour quelle valeur du paramètre $k$ la fonction $g(x) = \\frac{x^2 - 9}{x - 3}$ (pour $x \\neq 3$) et $g(3) = k$ est-elle continue en $x = 3$ ?',
              options: ['$k = 0$', '$k = 3$', '$k = 6$', '$k = 9$'],
              correctAnswerIndex: 2,
              explanation:
                'Pour $x \\neq 3$, $g(x) = \\frac{(x-3)(x+3)}{x-3} = x + 3 \\xrightarrow[x \\to 3]{} 6$. Il faut poser $k = g(3) = 6$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Continuité de la fonction racine carrée sur $\\mathbb{R}_+$',
            paragraphText:
              'La fonction $f(x) = \\sqrt{x}$ est continue sur $[0, +\\infty[$ : en tout $a > 0$, $|\\sqrt{x} - \\sqrt{a}| = \\frac{|x - a|}{\\sqrt{x} + \\sqrt{a}} \\leqslant \\frac{|x - a|}{\\sqrt{a}} \\to 0$, et en $0$, $\\lim_{x \\to 0^+} \\sqrt{x} = 0 = f(0)$ (continuité à droite en $0$).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Que peut-on dire de la fonction $f(x) = \\sqrt{x}$ au point $a = 0$ ?',
              options: [
                'Elle est continue à droite en $0$ (car $\\lim_{x \\to 0^+} \\sqrt{x} = 0 = f(0)$), et $\\lim_{x \\to 0^-} \\sqrt{x}$ n’est pas définie.',
                'Elle n’est pas continue en $0$.',
                'Elle est dérivable en $0$ avec $f\'(0) = 0$.',
                'Elle tend vers $+\\infty$ en $0^+$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le domaine est $\\mathbb{R}_+$ : la limite à gauche n’a pas de sens, la limite à droite vaut $0 = f(0)$ (continue sur $\\mathbb{R}_+$), et sa dérivée tend vers $+\\infty$ en $0^+$ (tangente verticale).',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Dérivation, convexité et fonctions usuelles
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_analyse_ch3',
    subjectId: 'lmd_analyse',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Analyse 1',
    title: 'Chapitre 3 — Dérivation, convexité et fonctions usuelles',
    summary:
      'Taux d’accroissement, règles de dérivation, Rolle, TAF, règle de l’Hôpital, prolongement dérivable, convexité ($f\'\' \\geqslant 0$), $\\ln$, $\\exp$, puissances $x^a$ et croissances comparées.',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_analyse_ch3_p1',
        order: 1,
        title: 'Dérivabilité, Rolle, TAF, règle de l’Hôpital et prolongement dérivable',
        summary:
          'Maîtriser le calcul différentiel et les grands théorèmes globaux de la dérivation.',
        conceptExplanation:
          'Une fonction $f$ est **dérivable en $a$** si le taux d’accroissement $\\Delta_{a, f}(x) = \\frac{f(x) - f(a)}{x - a}$ admet une limite finie $f\'(a)$ quand $x \\to a$. Géométriquement, $f\'(a)$ est la pente de la tangente au graphe en $a$, et $f(x) = f(a) + f\'(a)(x - a) + o(x - a)$ (DL d’ordre 1).\n\n' +
          '• **Opérations** : $(fg)\' = f\'g + fg\'$, $(f/g)\' = (f\'g - fg\')/g^2$, composée $(g \\circ f)\' = (g\' \\circ f) \\cdot f\'$, bijection réciproque $(f^{-1})\' = \\frac{1}{f\' \\circ f^{-1}}$.\n' +
          '• **Théorème de Rolle** : si $f$ est continue sur $[a, b]$, dérivable sur $]a, b[$ et $f(a) = f(b)$, alors $\\exists c \\in ]a, b[,\\ f\'(c) = 0$.\n' +
          '• **Théorème des Accroissements Finis (TAF)** : sous les mêmes hypothèses de régularité, $\\exists c \\in ]a, b[,\\ f(b) - f(a) = f\'(c)(b - a)$. Si $|f\'| \\leqslant K$, alors $|f(b) - f(a)| \\leqslant K|b - a|$ ($f$ est $K$-lipschitzienne).\n' +
          '• **Règle de l’Hôpital** : pour une forme indéterminée $0/0$ ou $\\infty/\\infty$, si $\\lim_{x \\to \\alpha} \\frac{f\'(x)}{g\'(x)} = \\ell$, alors $\\lim_{x \\to \\alpha} \\frac{f(x)}{g(x)} = \\ell$.\n' +
          '• **Prolongement dérivable** : si $f$ est continue en $a$, dérivable sur $I \\setminus \\{a\\}$ et $\\lim_{x \\to a} f\'(x) = \\ell \\in \\mathbb{R}$, alors $f$ est dérivable en $a$ et $f\'(a) = \\ell$.',
        formulas: [
          {
            name: 'Théorème des Accroissements Finis (TAF)',
            formula: '\\exists c \\in ]a, b[,\\quad f(b) - f(a) = f\'(c)(b - a)',
            note: 'Cas particulier f(a) = f(b) : Théorème de Rolle (f\'(c) = 0).',
          },
          {
            name: 'Dérivée de la bijection réciproque',
            formula: '(f^{-1})\'(y) = \\frac{1}{f\'\\big(f^{-1}(y)\\big)}',
            note: 'Valable dès que f\'(f⁻¹(y)) ≠ 0.',
          },
        ],
        keyRule:
          'Si $f$ est dérivable en $a$, elle est continue en $a$. Mais attention : $f$ peut être dérivable en $0$ sans que sa dérivée $f\'$ soit continue en $0$ (par exemple : $x^2 \\sin(1/x)$) !',
        workedExample: {
          title: 'Dérivabilité en $0$ de $f(x) = x^2 \\sin(1/x)$',
          statement:
            'Soit $f(x) = x^2 \\sin(1/x)$ pour $x \\neq 0$ et $f(0) = 0$. Montrer que $f$ est dérivable sur $\\mathbb{R}$, mais que $f\'$ n’est pas continue en $0$.',
          methodSteps: [
            'En $x \\neq 0$, $f$ est dérivable par produit et composition : $f\'(x) = 2x \\sin(1/x) + x^2 \\cdot \\left(-\\frac{1}{x^2}\\right)\\cos(1/x) = 2x \\sin(1/x) - \\cos(1/x)$.',
            'En $x = 0$, calculons le taux d’accroissement : $\\frac{f(x) - f(0)}{x - 0} = x \\sin(1/x)$.',
            'Comme $|x \\sin(1/x)| \\leqslant |x| \\xrightarrow[x \\to 0]{} 0$, $f$ est dérivable en $0$ et $f\'(0) = 0$.',
            'Quand $x \\to 0$, $2x\\sin(1/x) \\to 0$, mais $-\\cos(1/x)$ n’a pas de limite en $0$. Donc $f\'$ n’est pas continue en $0$.',
          ],
          conclusion:
            '$f$ est dérivable partout avec $f\'(0) = 0$, mais $f$ n’est **pas** de classe $C^1$ en $0$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Rolle',
            stepTheme: 'violet',
            stepTitle: 'Énoncé exact du Théorème de Rolle',
            paragraphText:
              'Si $f$ est continue sur $[a, b]$, dérivable sur $]a, b[$ et vérifie $f(a) = f(b)$, alors il existe au moins un point intérieur $c \\in ]a, b[$ où la tangente est horizontale : $f\'(c) = 0$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Soit $f$ continue sur $[a, b]$, dérivable sur $]a, b[$, avec $f(a) = f(b)$. Que garantit le Théorème de Rolle (QCM Ch. 4) ?',
              options: [
                'Il existe $c \\in ]a, b[$ tel que $f(c) = 0$.',
                '$f$ est nécessairement constante sur $[a, b]$.',
                'Il existe $c \\in ]a, b[$ tel que $f\'(c) = 0$.',
                '$f\'(a) = f\'(b)$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le Théorème de Rolle garantit l’existence d’un point $c \\in ]a, b[$ où la **dérivée** s’annule ($f\'(c) = 0$), pas la fonction $f$ elle-même.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Prolongement',
            stepTheme: 'violet',
            stepTitle: 'Théorème du prolongement dérivable (Thm 4.3.9)',
            paragraphText:
              'Si $f$ est continue sur $I$, dérivable sur $I \\setminus \\{a\\}$ et si $\\lim_{x \\to a} f\'(x) = \\ell \\in \\mathbb{R}$, alors $f$ est dérivable en $a$ et $f\'(a) = \\ell$ (et $f\'$ est même continue en $a$). Si $\\ell = \\pm\\infty$, la courbe admet une tangente verticale en $a$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Si $f$ est continue sur $I$, dérivable sur $I \\setminus \\{a\\}$, et $\\lim_{x \\to a} f\'(x) = \\ell \\in \\mathbb{R}$, que peut-on affirmer (QCM Ch. 4) ?',
              options: [
                '$f$ n’est pas dérivable en $a$.',
                '$f$ est dérivable en $a$ et $f\'(a) = \\ell$.',
                '$f$ est seulement continue en $a$.',
                '$f(a) = \\ell$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par le théorème de prolongement dérivable : $f$ est dérivable en $a$ et $f\'(a) = \\ell$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Règle de l’Hôpital',
            stepTheme: 'green',
            stepTitle: 'Lever une forme $0/0$ par la règle de l’Hôpital',
            paragraphText:
              'Si $f(x)/g(x)$ est une forme indéterminée $0/0$ ou $\\infty/\\infty$ en $\\alpha$ et si $\\lim_{x \\to \\alpha} \\frac{f\'(x)}{g\'(x)} = \\ell$, alors $\\lim_{x \\to \\alpha} \\frac{f(x)}{g(x)} = \\ell$. Par exemple, pour $\\frac{e^{2x} - 1}{3x}$ en $0$, $\\frac{2e^{2x}}{3} \\to \\frac{2}{3}$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Par la règle de l’Hôpital, quelle est la limite $\\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{2x}$ ?',
              options: ['$2$', '$4$', '$\\frac{1}{2}$', '$0$'],
              correctAnswerIndex: 0,
              explanation:
                'Forme $0/0$. Le rapport des dérivées est $\\frac{4/(1 + 4x)}{2} = \\frac{2}{1 + 4x} \\xrightarrow[x \\to 0]{} 2$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'IAF & Lipschitz',
            stepTheme: 'violet',
            stepTitle: 'Inégalité des Accroissements Finis (IAF)',
            paragraphText:
              'Si $|f\'(x)| \\leqslant K$ sur $]a, b[$ (et $f$ continue sur $[a, b]$), alors $|f(b) - f(a)| \\leqslant K|b - a|$. Par exemple, pour $f(x) = \\sin(x)$, $|\\cos(x)| \\leqslant 1$ entraîne $|\\sin(b) - \\sin(a)| \\leqslant |b - a|$ pour tous $a, b \\in \\mathbb{R}$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Soit $f$ dérivable sur $\\mathbb{R}$ telle que $\\forall x \\in \\mathbb{R},\\ |f\'(x)| \\leqslant 3$. Que garantit l’IAF pour $|f(5) - f(2)|$ ?',
              options: [
                '$|f(5) - f(2)| \\leqslant 3$',
                '$|f(5) - f(2)| = 9$',
                '$|f(5) - f(2)| \\leqslant 6$',
                '$|f(5) - f(2)| \\leqslant 9$',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Par l’IAF : $|f(5) - f(2)| \\leqslant 3 \\times |5 - 2| = 3 \\times 3 = 9$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Composée & Réciproque',
            stepTheme: 'green',
            stepTitle: 'Dérivation d’une fonction composée',
            paragraphText:
              '$(g \\circ f)\'(x) = g\'(f(x)) \\cdot f\'(x)$. En particulier, $(\\ln(u))\' = \\frac{u\'}{u}$ (pour $u > 0$) et $(e^u)\' = u\' e^u$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Quelle est la dérivée de $h(x) = \\ln(x^2 + 1)$ sur $\\mathbb{R}$ ?',
              options: [
                '$\\frac{1}{x^2 + 1}$',
                '$\\frac{2x}{x^2 + 1}$',
                '$2x \\ln(x^2 + 1)$',
                '$\\frac{1}{2x}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Avec $u(x) = x^2 + 1 > 0$, $u\'(x) = 2x$, donc $(\\ln(u))\' = \\frac{u\'}{u} = \\frac{2x}{x^2 + 1}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Extremum local',
            stepTheme: 'orange',
            stepTitle: 'Condition nécessaire $f\'(a) = 0$ non suffisante !',
            paragraphText:
              'Si $a$ est un extremum local intérieur et $f$ est dérivable en $a$, alors $f\'(a) = 0$. **Attention** : la réciproque est fausse ! Pour $f(x) = x^3$, $f\'(0) = 0$, mais $0$ est un point d’inflexion, pas un extremum local (car $f\'(x) = 3x^2 \\geqslant 0$ ne change pas de signe).',
            keyRule: '$f\'(a) = 0$ est une condition **nécessaire** (non suffisante) pour un extremum local intérieur ; il faut un changement de signe de $f\'$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q6',
              type: 'mcq',
              prompt: 'Pour $f(x) = x^3$, on a $f\'(0) = 0$. Que peut-on dire du point $x = 0$ ?',
              options: [
                'C’est un minimum local.',
                'C’est un maximum local.',
                'Ce n’est pas un extremum local car $f\'(x) = 3x^2$ ne change pas de signe en $0$.',
                '$f$ n’est pas continue en $0$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$f$ est strictement croissante sur $\\mathbb{R}$ : pour $x < 0$, $x^3 < 0 = f(0)$ et pour $x > 0$, $x^3 > 0 = f(0)$, donc $0$ n’est pas un extremum.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_analyse_ch3_p2',
        order: 2,
        title: 'Convexité, fonctions usuelles ($\\ln$, $\\exp$, $x^a$) et croissances comparées',
        summary:
          'Caractériser la convexité/concavité via $f\'\'$, dériver $a^x$ et $x^a$, et appliquer la hiérarchie des croissances comparées.',
        conceptExplanation:
          '• **Convexité** : $f : I \\to \\mathbb{R}$ est **convexe** si son graphe est sous ses cordes : $\\forall x, y \\in I,\\ \\forall \\lambda \\in [0, 1],\\ f(\\lambda x + (1-\\lambda)y) \\leqslant \\lambda f(x) + (1-\\lambda)f(y)$. Si $f$ est deux fois dérivable : $f$ est **convexe** $\\iff f\'\' \\geqslant 0$ (graphe au-dessus des tangentes), et $f$ est **concave** $\\iff f\'\' \\leqslant 0$.\n\n' +
          '• **Logarithme népérien $\\ln$** : unique primitive de $1/x$ sur $]0, +\\infty[$ s’annulant en $1$. Strictement croissante et **concave** ($\\ln\'\'(x) = -1/x^2 < 0$). Logarithme de base $a > 0, a \\neq 1$ : $\\log_a(x) = \\frac{\\ln x}{\\ln a}$, de dérivée $\\frac{1}{x \\ln a}$.\n' +
          '• **Exponentielle $\\exp$ et $a^x$** : $\\exp : \\mathbb{R} \\to \\mathbb{R}_+^*$ est la réciproque de $\\ln$, strictement croissante et **convexe**. Pour $a > 0$, $a^x = e^{x \\ln a}$ et $(a^x)\' = (\\ln a)\\, a^x$.\n' +
          '• **Fonctions puissances $x^a$** ($a \\in \\mathbb{R}, x > 0$) : $x^a = e^{a \\ln x}$, $(x^a)\' = a x^{a-1}$. Convexe si $a > 1$ ou $a < 0$ ; concave si $0 < a < 1$.\n' +
          '• **Croissances comparées en $+\\infty$** : pour tous $\\alpha, \\beta > 0$ et $\\gamma \\in \\mathbb{R}$, $(\\ln x)^\\beta = o(x^\\alpha)$ et $x^\\gamma = o(e^{\\alpha x})$ : l’exponentielle l’emporte sur la puissance, qui l’emporte sur le logarithme.',
        formulas: [
          {
            name: 'Convexité / Concavité (classe C²)',
            formula: 'f \\text{ convexe} \\iff f\'\' \\geqslant 0, \\qquad f \\text{ concave} \\iff f\'\' \\leqslant 0',
            note: 'Si f est convexe et dérivable : f(x) ≥ f(x₀) + f\'(x₀)(x - x₀).',
          },
          {
            name: 'Dérivées de a^x et x^a',
            formula: '(a^x)\' = (\\ln a)\\,a^x \\quad (a > 0), \\qquad (x^a)\' = a x^{a-1} \\quad (x > 0)',
            note: 'Ne jamais confondre la variable en exposant (a^x) et la variable en base (x^a) !',
          },
          {
            name: 'Croissances comparées en +∞',
            formula: '\\lim_{x \\to +\\infty} \\frac{(\\ln x)^\\beta}{x^\\alpha} = 0, \\qquad \\lim_{x \\to +\\infty} \\frac{e^{\\alpha x}}{x^\\gamma} = +\\infty \\quad (\\alpha, \\beta > 0)',
            note: 'Et en 0⁺ : lim_{x→0⁺} x ln(x) = 0 ; en -∞ : lim_{x→-∞} x e^x = 0.',
          },
        ],
        keyRule:
          'Hiérarchie en $+\\infty$ : $\\ln(x) \\ll x^\\gamma \\ll e^{\\alpha x}$. Pour la convexité : $f\'\' \\geqslant 0 \\implies$ convexe (bol vers le haut) ; $f\'\' \\leqslant 0 \\implies$ concave.',
        workedExample: {
          title: 'Étude de convexité et limites par croissances comparées (Chapitre 5)',
          statement:
            '1) Montrer que $f(x) = \\ln(x)$ est concave sur $]0, +\\infty[$ et en déduire l’inégalité $\\ln(x) \\leqslant x - 1$. 2) Calculer $\\lim_{x \\to +\\infty} \\frac{e^{0{,}5x}}{x^{10}}$ et la dérivée de $g(x) = 2^x$.',
          methodSteps: [
            '1) Pour tout $x > 0$, $f\'(x) = \\frac{1}{x}$ et $f\'\'(x) = -\\frac{1}{x^2} < 0$, donc $\\ln$ est strictement concave sur $]0, +\\infty[$.',
            'Le graphe d’une fonction concave est situé sous toutes ses tangentes. En $x_0 = 1$, la tangente a pour équation $y = f(1) + f\'(1)(x - 1) = 0 + 1(x - 1) = x - 1$, d’où $\\ln(x) \\leqslant x - 1$.',
            '2) Par croissance comparée avec $\\alpha = 0{,}5 > 0$ et $\\gamma = 10$, l’exponentielle l’emporte sur la puissance : $\\lim_{x \\to +\\infty} \\frac{e^{0{,}5x}}{x^{10}} = +\\infty$.',
            'Enfin, $g(x) = 2^x = e^{x \\ln 2}$ a pour dérivée $g\'(x) = (\\ln 2)\\,2^x$.',
          ],
          conclusion:
            '$\\ln$ est concave avec $\\ln(x) \\leqslant x - 1$, $\\lim_{+\\infty} \\frac{e^{0{,}5x}}{x^{10}} = +\\infty$, et $(2^x)\' = (\\ln 2)\\,2^x$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Convexité',
            stepTheme: 'violet',
            stepTitle: 'Caractérisation d’une fonction concave par $f\'\'$',
            paragraphText:
              'Pour une fonction deux fois dérivable sur un intervalle $I$ : $f$ est convexe ssi $f\'\'(x) \\geqslant 0$ (graphe au-dessus de ses tangentes), et $f$ est **concave** ssi $f\'\'(x) \\leqslant 0$ (graphe en dessous de ses tangentes).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Une fonction $f$ deux fois dérivable sur $I$ est **concave** si et seulement si (QCM Ch. 4) :',
              options: [
                '$f\'(x) \\geqslant 0$ pour tout $x \\in I$.',
                '$f\'\'(x) \\geqslant 0$ pour tout $x \\in I$.',
                '$f\'\'(x) \\leqslant 0$ pour tout $x \\in I$.',
                'Le graphe de $f$ est au-dessus de ses tangentes.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Propriété : la concavité d’une fonction $C^2$ équivaut à $f\'\'(x) \\leqslant 0$ sur $I$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Logarithme',
            stepTheme: 'violet',
            stepTitle: 'Concavité du logarithme népérien',
            paragraphText:
              'La fonction $\\ln$ vérifie $\\ln\'(x) = \\frac{1}{x} > 0$ (strictement croissante) et $\\ln\'\'(x) = -\\frac{1}{x^2} < 0$ sur $]0, +\\infty[$ : elle est donc **concave** sur $]0, +\\infty[$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Sur $]0, +\\infty[$, la fonction logarithme népérien $\\ln(x)$ est (QCM Ch. 5) :',
              options: [
                'Convexe.',
                'Concave.',
                'Périodique.',
                'Décroissante.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sa dérivée seconde vaut $\\ln\'\'(x) = -\\frac{1}{x^2} < 0$ sur $]0, +\\infty[$, donc $\\ln$ est concave.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Puissances',
            stepTheme: 'violet',
            stepTitle: 'Dérivée de $x^a$ vs dérivée de $a^x$',
            paragraphText:
              'Attention à ne pas confondre la fonction puissance $x \\mapsto x^a$ ($x > 0$, dérivée $a x^{a-1}$) avec l’exponentielle de base $a > 0$, $x \\mapsto a^x = e^{x \\ln a}$ (dérivée $(\\ln a)\\,a^x$).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q3',
              type: 'mcq',
              prompt: 'La dérivée de la fonction puissance $f(x) = x^a$ ($a \\in \\mathbb{R}$) pour $x > 0$ est (QCM Ch. 5) :',
              options: [
                '$a x^{a-1}$',
                '$a x^a \\ln(x)$',
                '$x^a \\ln(x)$',
                '$(\\ln a)\\, x^a$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par dérivation composée, $(x^a)\' = (e^{a \\ln x})\' = \\frac{a}{x} e^{a \\ln x} = a x^{a-1}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Croissance comparée',
            stepTheme: 'violet',
            stepTitle: 'L’exponentielle domine toute puissance en $+\\infty$',
            paragraphText:
              'Pour tous $\\alpha > 0$ et $\\gamma > 0$, $\\lim_{x \\to +\\infty} \\frac{e^{\\alpha x}}{x^\\gamma} = +\\infty$, quelle que soit la grandeur de $\\gamma$ ou la petitesse de $\\alpha > 0$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Quelle est la limite $\\lim_{x \\to +\\infty} \\frac{e^{\\alpha x}}{x^\\gamma}$ où $\\alpha > 0$ et $\\gamma > 0$ (QCM Ch. 5) ?',
              options: ['$0$', '$1$', 'Elle dépend de $\\alpha$ et $\\gamma$', '$+\\infty$'],
              correctAnswerIndex: 3,
              explanation:
                'En croissance comparée, l’exponentielle croissante ($\\alpha > 0$) l’emporte toujours sur n’importe quelle puissance $x^\\gamma$ en $+\\infty$, donc la limite est $+\\infty$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Formule de Leibniz',
            stepTheme: 'green',
            stepTitle: 'Dérivée $n$-ième d’un produit (Proposition 4.4.2)',
            paragraphText:
              'La formule de Leibniz généralise $(fg)\' = f\'g + fg\'$ à l’ordre $n$ par analogie avec le binôme de Newton : $(fg)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} f^{(k)} g^{(n-k)}$. En particulier, pour $n = 2$, $(fg)\'\' = f\'\'g + 2f\'g\' + fg\'\'$.',
            formula: {
              name: 'Formule de Leibniz',
              formula: '(fg)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}',
            },
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q5',
              type: 'mcq',
              prompt: 'D’après la formule de Leibniz, que vaut la dérivée seconde $(fg)\'\'$ d’un produit de deux fonctions deux fois dérivables ?',
              options: [
                '$f\'\' g\'\'$',
                '$f\'\' g + 2 f\' g\' + f g\'\'$',
                '$f\'\' g + f g\'\'$',
                '$f\'\' g - 2 f\' g\' + f g\'\'$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Avec $n = 2$ et les coefficients binomiaux $\\binom{2}{0}=1, \\binom{2}{1}=2, \\binom{2}{2}=1$ : $(fg)\'\' = f\'\' g + 2f\'g\' + fg\'\'$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège en 0⁺ et -∞',
            stepTheme: 'orange',
            stepTitle: 'Croissances comparées en $0^+$ et en $-\\infty$',
            paragraphText:
              'Les formes indéterminées $0 \\times (-\\infty)$ ne donnent pas l’infini ! En $0^+$, $\\lim_{x \\to 0^+} x \\ln(x) = 0$ ; et en $-\\infty$, $\\lim_{x \\to -\\infty} x e^x = 0$. En revanche, $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$ (taux d’accroissement de $\\exp$ en $0$).',
            keyRule: 'Mémoriser les trois limites clés : $\\lim_{0^+} x \\ln x = 0$, $\\lim_{-\\infty} x e^x = 0$ et $\\lim_0 \\frac{e^x - 1}{x} = 1$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Quelle est la valeur de $\\lim_{x \\to 0^+} (x \\ln x + 3)$ ?',
              options: ['$-\\infty$', '$+\\infty$', '$3$', '$0$'],
              correctAnswerIndex: 2,
              explanation:
                'Par croissance comparée (Proposition 5.1.3), $\\lim_{x \\to 0^+} x \\ln(x) = 0$, donc $\\lim_{x \\to 0^+} (x \\ln x + 3) = 0 + 3 = 3$.',
            },
          },
        ],
      }),
    ],
  },
];
