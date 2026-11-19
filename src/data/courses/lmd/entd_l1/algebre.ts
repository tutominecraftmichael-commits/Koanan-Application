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
// ALGÈBRE — ENTD LICENCE 1
// Programme structuré KONAN
// ============================================================================

export const ALGEBRE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Ensembles, relations et applications
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algebre_ch1',
    subjectId: 'lmd_algebre',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Algèbre 1',
    title: 'Chapitre 1 — Ensembles, relations et applications',
    summary:
      'Théorie naïve des ensembles, cardinalité, ensemble des parties, opérations ensemblistes (lois de De Morgan, différence symétrique) et propriétés des applications (injection, surjection, bijection).',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_algebre_ch1_p1',
        order: 1,
        title: 'Ensembles, cardinal, parties et opérations ensemblistes',
        summary:
          'Manipuler l’appartenance, l’inclusion, le cardinal d’un ensemble fini, $\\mathcal{P}(E)$ et les opérations $\\cup, \\cap, \\setminus, \\Delta$.',
        conceptExplanation:
          'Un **ensemble** $E$ est une collection d’objets distincts appelés éléments. L’ordre et la répétition n’ont aucune importance : les lettres distinctes d’un mot forment un ensemble fini dont le **cardinal** $\\operatorname{Card}(E)$ (noté aussi $|E|$) est le nombre d’éléments distincts.\n\n' +
          '• **Inclusion et égalité** : $A \\subset B \\iff (\\forall x,\\ x \\in A \\implies x \\in B)$, et $A = B \\iff (A \\subset B \\text{ et } B \\subset A)$ (méthode de double inclusion).\n' +
          '• **Ensemble des parties** : $\\mathcal{P}(E)$ est l’ensemble de tous les sous-ensembles de $E$ (y compris $\\emptyset$ et $E$). Si $|E| = n$, alors $|\\mathcal{P}(E)| = 2^n$.\n' +
          '• **Opérations** : réunion $A \\cup B$, intersection $A \\cap B$, différence $A \\setminus B$, complémentaire $\\bar{A} = \\complement_E A$, différence symétrique $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$, et produit cartésien $E \\times F$ avec $|E \\times F| = |E| \\cdot |F|$.',
        formulas: [
          {
            name: 'Formule de Poincaré (cardinal d’une réunion)',
            formula: '|A \\cup B| = |A| + |B| - |A \\cap B|',
            note: 'Si A et B sont disjoints (A ∩ B = ∅), alors |A ∪ B| = |A| + |B|.',
          },
          {
            name: 'Cardinal de l’ensemble des parties',
            formula: '|E| = n \\implies |\\mathcal{P}(E)| = 2^n',
            note: 'Chaque élément de E peut être choisi ou non dans une partie : 2 choix par élément.',
          },
          {
            name: 'Lois de De Morgan ensemblistes',
            formula: '\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B} \\quad \\text{et} \\quad \\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}',
            note: 'Le complémentaire échange réunion et intersection.',
          },
        ],
        keyRule:
          'Ne jamais confondre $\\in$ (élément dans un ensemble) et $\\subset$ (partie incluse dans un ensemble) : $a \\in E \\iff \\{a\\} \\subset E \\iff \\{a\\} \\in \\mathcal{P}(E)$.',
        workedExample: {
          title: 'Cardinal des lettres d’une ville ivoirienne et opérations',
          statement:
            '1) Déterminer l’ensemble $L$ des lettres distinctes du nom de la ville « YAMOUSSOUKRO » et son cardinal. 2) Soient $A = \\{1, 2, 4, 6\\}$ et $B = \\{2, 4, 5, 7\\}$. Calculer $A \\cap B$, $A \\setminus B$ et $A \\Delta B$.',
          methodSteps: [
            '1) On recense chaque lettre une seule fois : $L = \\{\\text{Y}, \\text{A}, \\text{M}, \\text{O}, \\text{U}, \\text{S}, \\text{K}, \\text{R}\\}$ (les répétitions de O, U, S ne comptent pas).',
            'On compte les éléments distincts : $|L| = 8$. De même, pour « MAN », l’ensemble $\\{\\text{M}, \\text{A}, \\text{N}\\}$ a pour cardinal $3$ ; pour « GAGNOA », $\\{\\text{G}, \\text{A}, \\text{N}, \\text{O}\\}$ a pour cardinal $4$.',
            '2) $A \\cap B = \\{2, 4\\}$, $A \\setminus B = \\{1, 6\\}$, $B \\setminus A = \\{5, 7\\}$.',
            'Donc $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = \\{1, 5, 6, 7\\}$.',
          ],
          conclusion: '$|\\text{lettres}(\\text{YAMOUSSOUKRO})| = 8$ et $A \\Delta B = \\{1, 5, 6, 7\\}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Cardinalité',
            stepTheme: 'blue',
            stepTitle: 'Unicité des éléments dans un ensemble',
            paragraphText:
              'Dans un ensemble, un élément ne figure qu’une seule fois. Par exemple, l’ensemble des lettres de la ville ivoirienne « ABIDJAN » est $\\{\\text{A}, \\text{B}, \\text{I}, \\text{D}, \\text{J}, \\text{N}\\}$ : la lettre A n’est comptée qu’une fois, donc son cardinal vaut $6$ (et non $7$).',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Quel est le cardinal de l’ensemble des lettres distinctes du nom de la ville ivoirienne « BOUAKÉ » (sans tenir compte de l’accent) ?',
              options: ['$5$', '$6$', '$7$', '$4$'],
              correctAnswerIndex: 1,
              explanation:
                'Toutes les lettres de B-O-U-A-K-E sont distinctes : l’ensemble est $\\{\\text{B}, \\text{O}, \\text{U}, \\text{A}, \\text{K}, \\text{E}\\}$, de cardinal $6$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Piège classique',
            stepTheme: 'orange',
            stepTitle: 'Distinguer appartenance ($\\in$) et inclusion ($\\subset$)',
            paragraphText:
              'Soit $E = \\{1, 2, 3\\}$. L’objet $2$ est un **élément** de $E$ ($2 \\in E$), tandis que le singleton $\\{2\\}$ est un **sous-ensemble** de $E$ ($\\{2\\} \\subset E$) et un élément de $\\mathcal{P}(E)$ ($\\{2\\} \\in \\mathcal{P}(E)$). L’ensemble vide $\\emptyset$ est inclus dans tout ensemble.',
            keyRule: 'Élément $\\in$ Ensemble ; Sous-ensemble $\\subset$ Ensemble.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Pour $E = \\{a, b, c\\}$, laquelle de ces écritures est **fausse** ?',
              options: [
                '$\\emptyset \\subset E$',
                '$\\{a\\} \\in \\mathcal{P}(E)$',
                '$a \\subset E$',
                '$\\{a, c\\} \\subset E$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$a$ est un élément de $E$, donc on écrit $a \\in E$ (ou $\\{a\\} \\subset E$), jamais $a \\subset E$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Ensemble des parties',
            stepTheme: 'violet',
            stepTitle: 'Cardinal de $\\mathcal{P}(E)$',
            paragraphText:
              'Si $E$ est un ensemble fini à $n$ éléments, l’ensemble $\\mathcal{P}(E)$ de toutes ses parties possède exactement $2^n$ éléments. En particulier, $\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$ possède $2^0 = 1$ élément.',
            formula: {
              name: 'Nombre de sous-ensembles',
              formula: '\\operatorname{Card}(\\mathcal{P}(E)) = 2^{\\operatorname{Card}(E)}',
            },
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Si un ensemble $E$ contient $4$ éléments, combien de parties **non vides** possède-t-il ?',
              options: ['$15$', '$16$', '$8$', '$14$'],
              correctAnswerIndex: 0,
              explanation:
                '$|\\mathcal{P}(E)| = 2^4 = 16$ parties au total. En retirant l’ensemble vide $\\emptyset$, il reste $16 - 1 = 15$ parties non vides.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Opérations',
            stepTheme: 'blue',
            stepTitle: 'Différence et différence symétrique $A \\Delta B$',
            paragraphText:
              'La différence $A \\setminus B$ regroupe les éléments de $A$ qui n’appartiennent pas à $B$. La différence symétrique $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$ regroupe les éléments appartenant à exactement l’un des deux ensembles.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Soient $A = \\{2, 5, 7\\}$ et $B = \\{1, 5, 7, 9\\}$. Que vaut $A \\Delta B$ ?',
              options: [
                '$\\{5, 7\\}$',
                '$\\{1, 2, 5, 7, 9\\}$',
                '$\\{2\\}$',
                '$\\{1, 2, 9\\}$',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$A \\setminus B = \\{2\\}$ et $B \\setminus A = \\{1, 9\\}$, donc $A \\Delta B = \\{1, 2, 9\\}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'De Morgan & Distributivité',
            stepTheme: 'violet',
            stepTitle: 'Lois de De Morgan et distributivité',
            paragraphText:
              'Dans un référentiel $E$, les lois de De Morgan stipulent que $\\complement_E(A \\cup B) = \\complement_E A \\cap \\complement_E B$ et $\\complement_E(A \\cap B) = \\complement_E A \\cup \\complement_E B$. De plus, $\\cap$ est distributive par rapport à $\\cup$ et réciproquement.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Dans un référentiel $E$, à quel ensemble est égal $\\overline{\\bar{A} \\cup B}$ ?',
              options: [
                '$A \\cup \\bar{B}$',
                '$A \\cap \\bar{B}$',
                '$\\bar{A} \\cap \\bar{B}$',
                '$\\bar{A} \\cup \\bar{B}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par De Morgan : $\\overline{\\bar{A} \\cup B} = \\overline{\\bar{A}} \\cap \\bar{B} = A \\cap \\bar{B} = A \\setminus B$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Produit cartésien',
            stepTheme: 'green',
            stepTitle: 'Produit cartésien $E \\times F$ et cardinal',
            paragraphText:
              'Le produit cartésien $E \\times F$ est l’ensemble des couples ordonnés $(x, y)$ tels que $x \\in E$ et $y \\in F$. En général $E \\times F \\neq F \\times E$, et pour des ensembles finis on a $|E \\times F| = |E| \\times |F|$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q6',
              type: 'mcq',
              prompt: 'Si $|E| = 3$ et $|F| = 4$, quel est le cardinal de $E \\times F$ ?',
              options: ['$7$', '$81$', '$12$', '$64$'],
              correctAnswerIndex: 2,
              explanation:
                '$|E \\times F| = |E| \\times |F| = 3 \\times 4 = 12$ couples ordonnés.',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_algebre_ch1_p2',
        order: 2,
        title: 'Applications : injection, surjection, bijection et réciproque',
        summary:
          'Caractériser et démontrer qu’une application est injective, surjective ou bijective, et calculer sa réciproque.',
        conceptExplanation:
          'Une **application** $f : E \\to F$ associe à **chaque** élément $x \\in E$ un **unique** élément $y = f(x) \\in F$ (son image). Pour $A \\subset E$ et $B \\subset F$, l’**image directe** est $f(A) = \\{f(x) \\mid x \\in A\\}$ et l’**image réciproque** est $f^{-1}(B) = \\{x \\in E \\mid f(x) \\in B\\}$.\n\n' +
          '• **Injective** : tout élément de $F$ a **au plus un** antécédent dans $E$, soit $\\forall x_1, x_2 \\in E,\\ f(x_1) = f(x_2) \\implies x_1 = x_2$.\n' +
          '• **Surjective** : tout élément de $F$ a **au moins un** antécédent dans $E$, soit $\\forall y \\in F,\\ \\exists x \\in E,\\ f(x) = y$ (autrement dit $f(E) = F$).\n' +
          '• **Bijective** : à la fois injective et surjective (tout $y \\in F$ admet un **unique** antécédent $x \\in E$). Elle possède alors une unique application réciproque $f^{-1} : F \\to E$ vérifiant $f^{-1} \\circ f = \\operatorname{id}_E$ et $f \\circ f^{-1} = \\operatorname{id}_F$.',
        formulas: [
          {
            name: 'Composition et bijection réciproque',
            formula: '(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}',
            note: 'Si f : E → F et g : F → G sont bijectives, l’ordre s’inverse pour la réciproque.',
          },
          {
            name: 'Critère de bijectivité',
            formula: 'f \\text{ bijective} \\iff \\forall y \\in F,\\ \\exists!\\, x \\in E,\\ f(x) = y',
            note: 'Résoudre l’équation f(x) = y d’inconnue x ∈ E et montrer qu’elle a une unique solution.',
          },
        ],
        keyRule:
          'L’injectivité et la surjectivité dépendent crucialement des ensembles de départ $E$ et d’arrivée $F$ ! Toujours vérifier $x \\in E$ lorsqu’on résout $f(x) = y$.',
        workedExample: {
          title: 'Bijectivité et réciproque d’une fonction homographique',
          statement:
            'Montrer que $f : \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$ définie par $f(x) = \\frac{3x + 1}{x - 2}$ est bijective et déterminer $f^{-1}(y)$.',
          methodSteps: [
            'Soit $y \\in \\mathbb{R} \\setminus \\{3\\}$. On résout $f(x) = y$ pour $x \\in \\mathbb{R} \\setminus \\{2\\}$.',
            '$\\frac{3x + 1}{x - 2} = y \\iff 3x + 1 = y(x - 2) \\iff (3 - y)x = -2y - 1$.',
            'Comme $y \\neq 3$, on peut diviser par $3 - y \\neq 0$ : $x = \\frac{-2y - 1}{3 - y} = \\frac{2y + 1}{y - 3}$.',
            'Vérifions que $x \\neq 2$ : si $\\frac{2y + 1}{y - 3} = 2$, alors $2y + 1 = 2y - 6 \\implies 1 = -6$, impossible !',
          ],
          conclusion:
            'Pour tout $y \\in \\mathbb{R} \\setminus \\{3\\}$, il existe un unique $x \\in \\mathbb{R} \\setminus \\{2\\}$ tel que $f(x) = y$. Donc $f$ est bijective et $f^{-1}(y) = \\frac{2y + 1}{y - 3}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Injection',
            stepTheme: 'blue',
            stepTitle: 'Caractérisation d’une application injective',
            paragraphText:
              'Une application $f : E \\to F$ est injective lorsque deux éléments distincts de $E$ ont toujours des images distinctes : $x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$, ou de façon équivalente par contraposée $f(x_1) = f(x_2) \\implies x_1 = x_2$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Parmi les applications de $\\mathbb{R}$ dans $\\mathbb{R}$ suivantes, laquelle est **injective** ?',
              options: [
                '$f(x) = x^2$',
                '$f(x) = 3x - 5$',
                '$f(x) = |x|$',
                '$f(x) = \\cos(x)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si $3x_1 - 5 = 3x_2 - 5$, alors $3x_1 = 3x_2$ donc $x_1 = x_2$. Les autres associent la même image à $1$ et $-1$ (ou $0$ et $2\\pi$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Surjection',
            stepTheme: 'blue',
            stepTitle: 'Caractérisation d’une application surjective',
            paragraphText:
              '$f : E \\to F$ est surjective si tout élément $y$ de l’ensemble d’arrivée $F$ est atteint au moins une fois : $f(E) = F$. Par exemple, $x \\mapsto x^2$ de $\\mathbb{R}$ dans $\\mathbb{R}$ n’est pas surjective (car $-1$ n’a pas d’antécédent), mais de $\\mathbb{R}$ dans $\\mathbb{R}_+$ elle l’est !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q2',
              type: 'mcq',
              prompt: 'L’application $g : \\mathbb{R} \\to \\mathbb{R}_+$ définie par $g(x) = x^2$ est :',
              options: [
                'Injective mais non surjective.',
                'Bijective.',
                'Surjective mais non injective.',
                'Ni injective ni surjective.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Tout $y \\geqslant 0$ possède un antécédent $\\sqrt{y} \\in \\mathbb{R}$ (surjective), mais $g(-2) = g(2) = 4$ (non injective).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Bijection',
            stepTheme: 'green',
            stepTitle: 'Calculer une bijection réciproque',
            paragraphText:
              'Pour trouver $f^{-1}(y)$, on pose $y = f(x)$ et on exprime $x$ en fonction de $y$. Par exemple, pour $f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = 2x + 7$, on a $y = 2x + 7 \\iff x = \\frac{y - 7}{2}$, donc $f^{-1}(y) = \\frac{y - 7}{2}$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Quelle est la bijection réciproque de $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = 5x - 3$ ?',
              options: [
                '$f^{-1}(y) = \\frac{y + 3}{5}$',
                '$f^{-1}(y) = \\frac{y - 3}{5}$',
                '$f^{-1}(y) = \\frac{1}{5y - 3}$',
                '$f^{-1}(y) = 5y + 3$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$y = 5x - 3 \\iff 5x = y + 3 \\iff x = \\frac{y + 3}{5}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Composition',
            stepTheme: 'violet',
            stepTitle: 'Composition d’applications',
            paragraphText:
              'Si $f : E \\to F$ et $g : F \\to G$, la composée $g \\circ f : E \\to G$ est définie par $(g \\circ f)(x) = g(f(x))$. La composition de deux injections est injective, celle de deux surjections est surjective, et si $f, g$ sont bijectives, $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q4',
              type: 'mcq',
              prompt: 'Soient $f(x) = x + 2$ et $g(x) = x^2$ sur $\\mathbb{R}$. Que vaut $(g \\circ f)(3)$ ?',
              options: ['$11$', '$13$', '$9$', '$25$'],
              correctAnswerIndex: 3,
              explanation:
                '$(g \\circ f)(3) = g(f(3)) = g(3 + 2) = g(5) = 5^2 = 25$. (Attention : $(f \\circ g)(3) = 3^2 + 2 = 11$.)',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Image réciproque',
            stepTheme: 'violet',
            stepTitle: 'Image directe et image réciproque d’une partie',
            paragraphText:
              'L’image réciproque $f^{-1}(B) = \\{x \\in E \\mid f(x) \\in B\\}$ existe **toujours**, même lorsque $f$ n’est pas bijective ! Elle conserve parfaitement toutes les opérations ensemblistes : $f^{-1}(B_1 \\cap B_2) = f^{-1}(B_1) \\cap f^{-1}(B_2)$ et $f^{-1}(B_1 \\cup B_2) = f^{-1}(B_1) \\cup f^{-1}(B_2)$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q5',
              type: 'mcq',
              prompt: 'Pour $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = x^2$, que vaut l’image réciproque $f^{-1}([1, 4])$ ?',
              options: [
                '$[1, 2]$',
                '$[-2, -1] \\cup [1, 2]$',
                '$[1, 16]$',
                '$[-2, 2]$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$x \\in f^{-1}([1, 4]) \\iff 1 \\leqslant x^2 \\leqslant 4 \\iff 1 \\leqslant |x| \\leqslant 2 \\iff x \\in [-2, -1] \\cup [1, 2]$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège fini',
            stepTheme: 'orange',
            stepTitle: 'Applications entre ensembles finis de même cardinal',
            paragraphText:
              'Lorsque $E$ et $F$ sont des ensembles **finis** de même cardinal ($|E| = |F|$), les propriétés « injective », « surjective » et « bijective » sont **équivalentes** ! En revanche, c’est faux pour des ensembles infinis (ex. $n \\mapsto 2n$ de $\\mathbb{N}$ dans $\\mathbb{N}$ est injective mais non surjective).',
            keyRule: 'En dimension finie avec $|E| = |F|$ : injective $\\iff$ surjective $\\iff$ bijective.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Soit $f : \\mathbb{N} \\to \\mathbb{N}$ définie par $f(n) = n + 1$. Quelle propriété vérifie-t-elle ?',
              options: [
                'Elle est bijective car $\\mathbb{N}$ est le même ensemble au départ et à l’arrivée.',
                'Elle est surjective mais non injective.',
                'Elle est injective mais non surjective (0 n’a pas d’antécédent dans $\\mathbb{N}$).',
                'Elle n’est ni injective ni surjective.',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$n_1 + 1 = n_2 + 1 \\implies n_1 = n_2$ (injective), mais $n + 1 = 0$ n’a pas de solution dans $\\mathbb{N}$ (non surjective).',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Arithmétique dans Z — Divisibilité, PGCD et Bézout
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algebre_ch2',
    subjectId: 'lmd_algebre',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Algèbre 1 (Arithmétique dans Z)',
    title: 'Chapitre 2 — Arithmétique dans $\\mathbb{Z}$ : divisibilité, PGCD et Bézout',
    summary:
      'Divisibilité, nombres premiers, division euclidienne (clé ISBN-10), algorithme d’Euclide, décomposition en facteurs premiers, identité de Bézout, lemme de Gauss et équations diophantiennes.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_algebre_ch2_p1',
        order: 1,
        title: 'Divisibilité, nombres premiers et division euclidienne',
        summary:
          'Maîtriser la relation $b \\mid a$, le test de primalité jusqu’à $\\sqrt{n}$ et le théorème de la division euclidienne dans $\\mathbb{Z}$.',
        conceptExplanation:
          'Soient $a, b \\in \\mathbb{Z}$. On dit que $b$ **divise** $a$ (noté $b \\mid a$) s’il existe $q \\in \\mathbb{Z}$ tel que $a = bq$. Si $c \\mid a$ et $c \\mid b$, alors pour tous $u, v \\in \\mathbb{Z}$, $c \\mid (ua + vb)$ (combinaison linéaire).\n\n' +
          'Un entier $n > 1$ est **premier** si ses seuls diviseurs positifs sont $1$ et $n$. Si $n$ est composé, son plus petit diviseur $d > 1$ est premier et vérifie $d \\leqslant \\sqrt{n}$ (ce qui permet de tester la primalité de $139$ en ne testant que les nombres premiers $\\leqslant 11$).\n\n' +
          '**Théorème de la division euclidienne** : pour tout $(a, b) \\in \\mathbb{Z} \\times \\mathbb{Z}^*$, il existe un unique couple $(q, r) \\in \\mathbb{Z} \\times \\mathbb{N}$ tel que $a = bq + r$ et $0 \\leqslant r < |b|$. Application concrète : la clé $c$ d’un numéro **ISBN-10** ($a_1\\dots a_9$) est le reste de la division euclidienne de $\\sum_{i=1}^9 i a_i$ par $11$.',
        formulas: [
          {
            name: 'Division euclidienne dans Z',
            formula: '\\forall (a, b) \\in \\mathbb{Z} \\times \\mathbb{Z}^*,\\ \\exists!\\, (q, r) \\in \\mathbb{Z} \\times \\mathbb{N},\\quad a = bq + r \\text{ et } 0 \\leqslant r < |b|',
            note: 'Le reste r est toujours positif ou nul et strictement inférieur à |b|.',
          },
          {
            name: 'Clé d’un numéro ISBN-10',
            formula: 'c = \\left( \\sum_{i=1}^{9} i \\cdot a_i \\right) \\bmod 11',
            note: 'Exemple : 0-901690-54-? donne 182 = 16 × 11 + 6, donc la clé est 6.',
          },
        ],
        keyRule:
          'Dans une division euclidienne d’un entier négatif $a$ par $b$, le reste $r$ doit impérativement rester dans $[0, |b|[$, jamais négatif !',
        workedExample: {
          title: 'Clé ISBN-10 et primalité de 139',
          statement:
            '1) Vérifier la clé du numéro ISBN-10 commençant par `0-901690-54`. 2) Montrer que $139$ est un nombre premier.',
          methodSteps: [
            '1) On calcule $S = 1(0) + 2(9) + 3(0) + 4(1) + 5(6) + 6(9) + 7(0) + 8(5) + 9(4) = 0 + 18 + 0 + 4 + 30 + 54 + 0 + 40 + 36 = 182$.',
            'Division euclidienne de $182$ par $11$ : $182 = 16 \\times 11 + 6$ avec $0 \\leqslant 6 < 11$, donc la clé est $c = 6$.',
            '2) Comme $\\sqrt{139} \\approx 11{,}79$, les nombres premiers inférieurs ou égaux à $\\sqrt{139}$ sont $2, 3, 5, 7, 11$.',
            '139 n’est divisible par aucun d’eux ($139 = 2\\times 69+1 = 3\\times 46+1 = 5\\times 27+4 = 7\\times 19+6 = 11\\times 12+7$).',
          ],
          conclusion: 'La clé ISBN-10 est $6$, et $139$ est un nombre premier.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Divisibilité',
            stepTheme: 'blue',
            stepTitle: 'Relation de divisibilité et combinaison linéaire',
            paragraphText:
              'On note $b \\mid a$ s’il existe $q \\in \\mathbb{Z}$ tel que $a = bq$. Si $c \\mid a$ et $c \\mid b$, alors $c$ divise toute combinaison linéaire $ua + vb$ ($u, v \\in \\mathbb{Z}$). En particulier, deux entiers consécutifs $n$ et $n + 1$ sont toujours premiers entre eux car si $d \\mid n$ et $d \\mid (n+1)$, alors $d \\mid ((n+1) - n) = 1$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Si un entier $d > 0$ divise à la fois $n$ et $n + 1$, quelle est l’unique valeur possible de $d$ ?',
              options: ['$d = 2$', '$d = n$', '$d = 1$', '$d = 0$'],
              correctAnswerIndex: 2,
              explanation:
                '$d \\mid n$ et $d \\mid (n + 1) \\implies d \\mid ((n + 1) - n) = 1$. Comme $d > 0$, on a nécessairement $d = 1$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Critères',
            stepTheme: 'green',
            stepTitle: 'Critères de divisibilité sans calculatrice (Application 1)',
            paragraphText:
              'Un entier est divisible par $3$ (resp. $9$) si la somme de ses chiffres l’est ; par $4$ si ses deux derniers chiffres forment un multiple de $4$ ; par $12$ s’il est divisible à la fois par $3$ et par $4$ ; par $5$ s’il se termine par $0$ ou $5$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q2',
              type: 'mcq',
              prompt: 'L’entier $302\\,328$ est-il divisible par $12$ ?',
              options: [
                'Oui, car la somme de ses chiffres vaut $18$ (multiple de 3) et $28$ est multiple de 4.',
                'Non, car il ne se termine pas par 0.',
                'Non, car la somme de ses chiffres vaut 16.',
                'Oui, uniquement parce qu’il est pair.',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$3+0+2+3+2+8 = 18$ est divisible par $3$, et les deux derniers chiffres $28 = 4 \\times 7$ sont divisibles par $4$. Comme $\\operatorname{pgcd}(3, 4) = 1$, $302\\,328$ est divisible par $12$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Primalité',
            stepTheme: 'violet',
            stepTitle: 'Test de primalité par les diviseurs premiers $\\leqslant \\sqrt{n}$',
            paragraphText:
              'Un entier $n > 1$ composé admet toujours un diviseur premier $d$ vérifiant $d \\leqslant \\sqrt{n}$. Il suffit donc de tester la divisibilité par les nombres premiers inférieurs ou égaux à $\\sqrt{n}$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Pour vérifier si $n = 167$ est premier, jusqu’à quel nombre premier au maximum suffit-il de tester la divisibilité ?',
              options: ['$167$', '$83$', '$17$', '$11$'],
              correctAnswerIndex: 3,
              explanation:
                '$\\sqrt{167} \\approx 12{,}92$. Le plus grand nombre premier inférieur ou égal à $12{,}92$ est $11$ (on teste $2, 3, 5, 7, 11$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Division euclidienne d’un entier négatif',
            paragraphText:
              'Dans la division euclidienne $a = bq + r$, la condition $0 \\leqslant r < |b|$ est impérative. Pour diviser $a = -17$ par $b = 5$, on n’écrit **pas** $-17 = 5(-3) - 2$ (reste négatif interdit !), mais $-17 = 5(-4) + 3$, donc $q = -4$ et $r = 3$.',
            keyRule: 'Le reste $r$ d’une division euclidienne dans $\\mathbb{Z}$ est toujours un entier naturel : $0 \\leqslant r < |b|$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Quels sont le quotient $q$ et le reste $r$ de la division euclidienne de $-23$ par $6$ ?',
              options: [
                '$q = -3$ et $r = -5$',
                '$q = -4$ et $r = 1$',
                '$q = -4$ et $r = -1$',
                '$q = 4$ et $r = 1$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$-23 = 6 \\times (-4) + 1$ avec $0 \\leqslant 1 < 6$, donc $q = -4$ et $r = 1$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Application ISBN',
            stepTheme: 'slate',
            stepTitle: 'Calcul de la clé de contrôle ISBN-10',
            paragraphText:
              'Pour les 9 premiers chiffres $a_1, \\dots, a_9$ d’un ISBN-10, la clé $c$ vaut le reste de la division euclidienne de $\\sum_{i=1}^9 i a_i$ par $11$. Si le reste vaut $10$, on note la clé par le symbole `X`.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Si pour un livre la somme pondérée $\\sum_{i=1}^9 i a_i$ vaut $205$, quelle est la clé $c$ de son ISBN-10 ?',
              options: ['$5$', '$9$', '$7$', '$3$'],
              correctAnswerIndex: 2,
              explanation:
                'On divise $205$ par $11$ : $205 = 18 \\times 11 + 7$ (car $18 \\times 11 = 198$). Le reste vaut $7$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application 5',
            stepTheme: 'slate',
            stepTitle: 'Reste modulo 4 d’une somme de deux carrés',
            paragraphText:
              'Tout entier $k$ s’écrit $2m$ ou $2m + 1$, donc son carré vérifie $k^2 = 4m^2$ (reste $0$ par $4$) ou $k^2 = 4m(m+1) + 1$ (reste $1$ par $4$). Ainsi, une somme de deux carrés $x^2 + y^2$ a pour reste dans la division par $4$ uniquement $0, 1$ ou $2$ — **jamais $3$** !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Parmi les entiers suivants, lequel est **certainement impossible** à écrire comme somme de deux carrés d’entiers ?',
              options: ['$2023$', '$2024$', '$2025$', '$2026$'],
              correctAnswerIndex: 0,
              explanation:
                '$2023 = 4 \\times 505 + 3$, son reste modulo $4$ est $3$. Or une somme de deux carrés ne peut jamais donner un reste de $3$ modulo $4$.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_algebre_ch2_p2',
        order: 2,
        title: 'PGCD, algorithme d’Euclide et décomposition en facteurs premiers',
        summary:
          'Calculer efficacement le PGCD par l’algorithme d’Euclide ou par décomposition primaire.',
        conceptExplanation:
          'Soient $a, b \\in \\mathbb{Z}$ non tous deux nuls. Le **plus grand commun diviseur** $\\operatorname{pgcd}(a, b)$ est le plus grand entier naturel divisant à la fois $a$ et $b$.\n\n' +
          'Propriétés fondamentales : $\\operatorname{pgcd}(a, b) = \\operatorname{pgcd}(|a|, |b|)$, $\\operatorname{pgcd}(ca, cb) = |c| \\operatorname{pgcd}(a, b)$, et si $a = bq + r$, alors $\\operatorname{pgcd}(a, b) = \\operatorname{pgcd}(b, r)$.\n\n' +
          '**Algorithme d’Euclide** : on effectue des divisions euclidiennes successives en remplaçant $(a, b)$ par $(b, r)$ jusqu’à obtenir un reste nul. Le PGCD est le **dernier reste non nul**.\n\n' +
          '**Théorème fondamental de l’arithmétique** : tout entier $n \\geqslant 2$ se décompose de façon unique en produit de facteurs premiers $n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\cdots p_r^{\\alpha_r}$. Le PGCD de deux entiers s’obtient en prenant les facteurs premiers **communs** affectés de leur **plus petit exposant**.',
        formulas: [
          {
            name: 'Invariance d’Euclide',
            formula: 'a = bq + r \\implies \\operatorname{pgcd}(a, b) = \\operatorname{pgcd}(b, r)',
            note: 'Base de l’algorithme d’Euclide : le PGCD est le dernier reste non nul.',
          },
          {
            name: 'PGCD par décomposition primaire',
            formula: '\\operatorname{pgcd}\\!\\left(\\prod p_i^{\\alpha_i},\\ \\prod p_i^{\\beta_i}\\right) = \\prod p_i^{\\min(\\alpha_i, \\beta_i)}',
            note: 'Alors que le PPCM prend les exposants max(α_i, β_i).',
          },
        ],
        keyRule:
          'Pour de grands nombres, utiliser l’algorithme d’Euclide (très rapide) ; pour des nombres faciles à factoriser, la décomposition en facteurs premiers donne immédiatement PGCD et PPCM.',
        workedExample: {
          title: 'Calcul de $\\operatorname{pgcd}(621, 405)$ par Euclide et $\\operatorname{pgcd}(126, 230)$ par facteurs premiers',
          statement:
            '1) Calculer $\\operatorname{pgcd}(621, 405)$ par l’algorithme d’Euclide. 2) Calculer $\\operatorname{pgcd}(126, 230)$ par décomposition en facteurs premiers.',
          methodSteps: [
            '1) Étape 1 : $621 = 405 \\times 1 + 216$.',
            'Étape 2 : $405 = 216 \\times 1 + 189$.',
            'Étape 3 : $216 = 189 \\times 1 + 27$.',
            'Étape 4 : $189 = 27 \\times 7 + 0$. Le dernier reste non nul est $27$, donc $\\operatorname{pgcd}(621, 405) = 27$.',
            '2) $126 = 2 \\times 3^2 \\times 7$ et $230 = 2 \\times 5 \\times 23$. Le seul facteur premier commun est $2^1$, donc $\\operatorname{pgcd}(126, 230) = 2$.',
          ],
          conclusion: '$\\operatorname{pgcd}(621, 405) = 27$ et $\\operatorname{pgcd}(126, 230) = 2$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Algorithme d’Euclide',
            stepTheme: 'blue',
            stepTitle: 'Principe de l’algorithme d’Euclide',
            paragraphText:
              'L’algorithme d’Euclide repose sur l’égalité $\\operatorname{pgcd}(a, b) = \\operatorname{pgcd}(b, r)$ où $r$ est le reste de la division euclidienne de $a$ par $b$. Comme la suite des restes est strictement décroissante dans $\\mathbb{N}$, elle atteint forcément $0$ : le PGCD est le **dernier reste non nul**.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Quel est le $\\operatorname{pgcd}(252, 105)$ obtenu par l’algorithme d’Euclide ?',
              options: ['$7$', '$21$', '$15$', '$35$'],
              correctAnswerIndex: 1,
              explanation:
                '$252 = 105 \\times 2 + 42$ ; $105 = 42 \\times 2 + 21$ ; $42 = 21 \\times 2 + 0$. Le dernier reste non nul est $21$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Propriétés du PGCD',
            stepTheme: 'violet',
            stepTitle: 'Propriétés algébriques du PGCD',
            paragraphText:
              'Pour tous entiers $(a, b) \\neq (0, 0)$ et $c \\in \\mathbb{Z}^*$ : $\\operatorname{pgcd}(0, a) = |a|$, $\\operatorname{pgcd}(1, a) = 1$, $\\operatorname{pgcd}(ca, cb) = |c| \\operatorname{pgcd}(a, b)$, et tout diviseur commun $d$ de $a$ et $b$ divise $\\operatorname{pgcd}(a, b)$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Sachant que $\\operatorname{pgcd}(15, 28) = 1$, que vaut $\\operatorname{pgcd}(-75, 140)$ ?',
              options: ['$1$', '$15$', '$5$', '$-5$'],
              correctAnswerIndex: 2,
              explanation:
                '$-75 = 5 \\times (-15)$ et $140 = 5 \\times 28$, donc $\\operatorname{pgcd}(-75, 140) = |5| \\operatorname{pgcd}(15, 28) = 5 \\times 1 = 5$ (un PGCD est toujours positif).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Facteurs premiers',
            stepTheme: 'blue',
            stepTitle: 'Décomposition en facteurs premiers',
            paragraphText:
              'Dans la décomposition en facteurs premiers $n = p_1^{\\alpha_1} \\cdots p_r^{\\alpha_r}$, tous les facteurs $p_i$ doivent être des **nombres premiers**. Ainsi $300 = 2^2 \\times 3^1 \\times 5^2$ est la décomposition de $300$, alors que $300 = 4 \\times 3 \\times 5^2$ ne l’est pas car $4$ n’est pas premier.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q3',
              type: 'mcq',
              prompt: 'Quelle est la décomposition en facteurs premiers de $360$ ?',
              options: [
                '$2^3 \\times 3^2 \\times 5$',
                '$2^2 \\times 3^2 \\times 10$',
                '$2^3 \\times 9 \\times 5$',
                '$2^4 \\times 3 \\times 5$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$360 = 36 \\times 10 = (2^2 \\times 3^2) \\times (2 \\times 5) = 2^3 \\times 3^2 \\times 5$. Tous les facteurs $2, 3, 5$ sont premiers.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'PGCD primaire',
            stepTheme: 'green',
            stepTitle: 'Déduire le PGCD des décompositions primaires',
            paragraphText:
              'Si $a = 2^3 \\times 3^2 \\times 5$ et $b = 2^2 \\times 3^3 \\times 7$, les facteurs premiers communs sont $2$ et $3$. En prenant l’exposant minimal pour chacun, on obtient $\\operatorname{pgcd}(a, b) = 2^2 \\times 3^2 = 36$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Soient $a = 2^4 \\times 3^2 \\times 5^3$ et $b = 2^2 \\times 3^5 \\times 7$. Quel est $\\operatorname{pgcd}(a, b)$ ?',
              options: [
                '$2^4 \\times 3^5$',
                '$2^2 \\times 3^2 \\times 5^3 \\times 7$',
                '$2^2 \\times 3^5$',
                '$2^2 \\times 3^2$',
              ],
              correctAnswerIndex: 3,
              explanation:
                'On ne conserve que les facteurs premiers présents dans les deux décompositions ($2$ et $3$) avec le plus petit exposant : $2^{\\min(4,2)} \\times 3^{\\min(2,5)} = 2^2 \\times 3^2 = 36$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Application 6',
            stepTheme: 'slate',
            stepTitle: 'Division euclidienne et PGCD de grands entiers',
            paragraphText:
              'Par exemple, avec $a = 1\\,111\\,111\\,111$ et $b = 123\\,456\\,789$, on trouve $a = 9b + 10$ ! Par l’algorithme d’Euclide, $\\operatorname{pgcd}(a, b) = \\operatorname{pgcd}(b, 10)$. Comme $b$ se termine par $9$, $b$ n’est divisible ni par $2$ ni par $5$, donc $\\operatorname{pgcd}(a, b) = 1$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Sachant que $1\\,111\\,111\\,111 = 9 \\times 123\\,456\\,789 + 10$, que vaut $\\operatorname{pgcd}(1\\,111\\,111\\,111,\\ 123\\,456\\,789)$ ?',
              options: ['$10$', '$1$', '$9$', '$3$'],
              correctAnswerIndex: 1,
              explanation:
                'Par Euclide, $\\operatorname{pgcd}(a, b) = \\operatorname{pgcd}(123\\,456\\,789,\\ 10)$. Or $10 = 2 \\times 5$ et $123\\,456\\,789$ n’est divisible ni par $2$ ni par $5$, donc le PGCD vaut $1$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Premiers entre eux',
            stepTheme: 'orange',
            stepTitle: 'Ne pas confondre « nombres premiers » et « premiers entre eux »',
            paragraphText:
              'Deux entiers $a$ et $b$ sont **premiers entre eux** si $\\operatorname{pgcd}(a, b) = 1$, même si aucun des deux n’est un nombre premier ! Par exemple, $8 = 2^3$ et $9 = 3^2$ sont tous deux composés, mais ils sont premiers entre eux.',
            keyRule: 'Premiers entre eux $\\iff \\operatorname{pgcd}(a, b) = 1$ (aucun facteur premier commun).',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Quel couple d’entiers composés est formé de deux nombres **premiers entre eux** ?',
              options: [
                '$(14, 21)$',
                '$(15, 25)$',
                '$(8, 15)$',
                '$(12, 18)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$8 = 2^3$ et $15 = 3 \\times 5$ n’ont aucun facteur premier commun : $\\operatorname{pgcd}(8, 15) = 1$. Les autres couples ont pour PGCD respectivement $7, 5$ et $6$.',
            },
          },
        ],
      }),

      // POINT 2.3
      makePoint({
        id: 'lmd_entd_l1_algebre_ch2_p3',
        order: 3,
        title: 'Identité de Bézout, lemme de Gauss et équations diophantiennes',
        summary:
          'Remonter l’algorithme d’Euclide pour trouver des coefficients de Bézout et résoudre entièrement $ax + by = c$ dans $\\mathbb{Z}^2$.',
        conceptExplanation:
          '**Identité de Bézout** : soit $d = \\operatorname{pgcd}(a, b)$. Il existe $(u, v) \\in \\mathbb{Z}^2$ (non uniques) tels que $au + bv = d$. En particulier, $a$ et $b$ sont premiers entre eux si et seulement s’il existe $(u, v) \\in \\mathbb{Z}^2$ tels que $au + bv = 1$ (Théorème de Bézout). On obtient $(u, v)$ en **remontant l’algorithme d’Euclide**.\n\n' +
          '**Lemme de Gauss** : si $a \\mid bc$ et $\\operatorname{pgcd}(a, b) = 1$, alors $a \\mid c$.\n\n' +
          '**Équation diophantienne $(E) : ax + by = c$** (inconnues $(x, y) \\in \\mathbb{Z}^2$) :\n' +
          '1. Existence : $(E)$ admet des solutions si et seulement si $d = \\operatorname{pgcd}(a, b)$ divise $c$.\n' +
          '2. Solution particulière : on trouve $(u, v)$ tel que $au + bv = d$, puis on multiplie par $c/d$ pour obtenir $(x_0, y_0)$.\n' +
          '3. Ensemble des solutions : en soustrayant $ax_0 + by_0 = c$, en divisant par $d$ (posons $a\' = a/d, b\' = b/d$) et en appliquant Gauss, toutes les solutions sont $(x_0 - b\'k,\\ y_0 + a\'k)$ avec $k \\in \\mathbb{Z}$.',
        formulas: [
          {
            name: 'Théorème de Bézout',
            formula: '\\operatorname{pgcd}(a, b) = 1 \\iff \\exists (u, v) \\in \\mathbb{Z}^2,\\quad au + bv = 1',
            note: 'Pour un PGCD d quelconque, il existe (u, v) tels que au + bv = d.',
          },
          {
            name: 'Solutions générales de ax + by = c',
            formula: '\\mathcal{S} = \\left\\{ \\left(x_0 - \\frac{b}{d}k,\\ y_0 + \\frac{a}{d}k\\right) \\;\\middle|\\; k \\in \\mathbb{Z} \\right\\}, \\quad d = \\operatorname{pgcd}(a, b)',
            note: 'Valable dès que d | c, où (x_0, y_0) est une solution particulière.',
          },
        ],
        keyRule:
          'Toujours vérifier d’abord si $\\operatorname{pgcd}(a, b) \\mid c$ avant de chercher une solution particulière, et ne jamais oublier de **diviser** l’équation homogène par $d = \\operatorname{pgcd}(a, b)$ avant d’appliquer le lemme de Gauss !',
        workedExample: {
          title: 'Résolution de $161x + 368y = 115$',
          statement:
            'Déterminer tous les couples d’entiers relatifs $(x, y) \\in \\mathbb{Z}^2$ solutions de $(E) : 161x + 368y = 115$.',
          methodSteps: [
            'Étape 1 (Existence) : Algorithme d’Euclide : $368 = 161 \\times 2 + 46$ ; $161 = 46 \\times 3 + 23$ ; $46 = 23 \\times 2 + 0$. Donc $d = \\operatorname{pgcd}(161, 368) = 23$. Comme $115 = 23 \\times 5$, $d \\mid 115$ : il existe des solutions.',
            'Étape 2 (Solution particulière) : Remontée d’Euclide : $23 = 161 - 3 \\times 46 = 161 - 3(368 - 2 \\times 161) = 7 \\times 161 - 3 \\times 368$. On multiplie par $5$ : $161(35) + 368(-15) = 115$, donc $(x_0, y_0) = (35, -15)$.',
            'Étape 3 (Toutes les solutions) : Par différence et division par $23$, on obtient $7(x - 35) = -16(y + 15)$.',
            'Comme $\\operatorname{pgcd}(7, 16) = 1$, le lemme de Gauss donne $7 \\mid (y + 15)$, soit $y = -15 + 7k$ ($k \\in \\mathbb{Z}$), puis $x = 35 - 16k$.',
          ],
          conclusion:
            '$\\mathcal{S} = \\{(35 - 16k,\\ -15 + 7k) \\mid k \\in \\mathbb{Z}\\}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Remontée d’Euclide',
            stepTheme: 'green',
            stepTitle: 'Déterminer les coefficients de Bézout (Exemple 4)',
            paragraphText:
              'Pour $a = 621$ et $b = 405$, l’algorithme d’Euclide donne $621 = 405 + 216$, $405 = 216 + 189$, $216 = 189 + 27$. En remontant : $27 = 216 - 189 = 216 - (405 - 216) = 2(216) - 405 = 2(621 - 405) - 405 = 2 \\times 621 - 3 \\times 405$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q1',
              type: 'mcq',
              prompt: 'Quel couple $(u, v)$ vérifie l’identité de Bézout $17u + 5v = 1$ ?',
              options: [
                '$(u, v) = (3, -10)$',
                '$(u, v) = (2, -7)$',
                '$(u, v) = (-2, 6)$',
                '$(u, v) = (1, -3)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$17 \\times 3 + 5 \\times (-10) = 51 - 50 = 1$. Les autres couples donnent respectivement $-1$, $-4$ et $2$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Condition d’existence',
            stepTheme: 'violet',
            stepTitle: 'Critère d’existence de solutions pour $ax + by = c$',
            paragraphText:
              'L’équation diophantienne $ax + by = c$ admet au moins une solution dans $\\mathbb{Z}^2$ si et seulement si $\\operatorname{pgcd}(a, b)$ divise $c$. Si ce n’est pas le cas, l’ensemble des solutions est vide.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q2',
              type: 'mcq',
              prompt: 'Laquelle de ces équations diophantiennes n’admet **aucune** solution dans $\\mathbb{Z}^2$ ?',
              options: [
                '$6x + 9y = 15$',
                '$14x + 21y = 10$',
                '$5x + 8y = 1$',
                '$12x + 18y = 6$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$\\operatorname{pgcd}(14, 21) = 7$, mais $7$ ne divise pas $10$. Donc $14x + 21y = 10$ n’a aucune solution entière.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Lemme de Gauss',
            stepTheme: 'violet',
            stepTitle: 'Utilisation du lemme de Gauss',
            paragraphText:
              'Le lemme de Gauss affirme que si $a \\mid bc$ et $\\operatorname{pgcd}(a, b) = 1$, alors $a \\mid c$. La condition $\\operatorname{pgcd}(a, b) = 1$ est indispensable : par exemple $6 \\mid (4 \\times 3) = 12$, mais $6$ ne divise ni $4$ ni $3$ car $\\operatorname{pgcd}(6, 4) = 2 \\neq 1$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q3',
              type: 'mcq',
              prompt: 'Si $7(x - 2) = 11(y + 1)$ avec $(x, y) \\in \\mathbb{Z}^2$, que permet de conclure immédiatement le lemme de Gauss ?',
              options: [
                '$x = 2$ et $y = -1$ est l’unique solution.',
                '$7$ divise $11$.',
                '$7$ divise $y + 1$, donc il existe $k \\in \\mathbb{Z}$ tel que $y = -1 + 7k$ et $x = 2 + 11k$.',
                '$x + y$ est un multiple de $77$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$7 \\mid 11(y + 1)$ et $\\operatorname{pgcd}(7, 11) = 1$, donc par Gauss $7 \\mid (y + 1)$, soit $y = -1 + 7k$, et en remplaçant, $x = 2 + 11k$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Application 10',
            stepTheme: 'slate',
            stepTitle: 'Constituer 59 euros avec des pièces de 2 € et billets de 5 €',
            paragraphText:
              'On modélise $2x + 5y = 59$ avec $x, y \\in \\mathbb{N}$. Une solution particulière est $(x_0, y_0) = (27, 1)$ (car $54 + 5 = 59$), d’où les solutions générales $(27 - 5k,\\ 1 + 2k)$. Avec $x \\geqslant 0$ et $y \\geqslant 0$, on obtient $k \\in \\{0, 1, 2, 3, 4, 5\\}$ : $y$ est toujours impair ($1, 3, 5, 7, 9, 11$), donc il y a au moins un billet de 5 € et jamais un nombre pair de billets !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q4',
              type: 'mcq',
              prompt: 'Pour payer exactement $59$ € avec $x$ pièces de $2$ € et $y$ billets de $5$ € ($2x + 5y = 59$, $x, y \\in \\mathbb{N}$), combien de façons différentes existe-t-il ?',
              options: ['$5$', '$11$', '$12$', '$6$'],
              correctAnswerIndex: 3,
              explanation:
                '$x = 27 - 5k \\geqslant 0 \\implies k \\leqslant 5$ et $y = 1 + 2k \\geqslant 0 \\implies k \\geqslant 0$. Les valeurs $k \\in \\{0, 1, 2, 3, 4, 5\\}$ donnent exactement $6$ solutions : $(27,1), (22,3), (17,5), (12,7), (7,9), (2,11)$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Oublier de diviser par $d = \\operatorname{pgcd}(a, b)$',
            paragraphText:
              'Pour résoudre $6x + 9y = 15$, une solution particulière est $(1, 1)$. Si l’on oublie de diviser $6(x-1) = -9(y-1)$ par $d = 3$, on obtiendrait $(1 - 9k, 1 + 6k)$, ce qui rate les deux tiers des solutions ! En divisant par $3$, on a $2(x-1) = -3(y-1)$ et les vraies solutions sont $(1 - 3k, 1 + 2k)$.',
            keyRule: 'Diviser impérativement $a(x - x_0) = -b(y - y_0)$ par $d = \\operatorname{pgcd}(a, b)$ pour rendre les coefficients premiers entre eux.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q5',
              type: 'mcq',
              prompt: 'Quel est l’ensemble complet des solutions dans $\\mathbb{Z}^2$ de $4x + 6y = 10$ sachant que $(1, 1)$ est solution particulière ?',
              options: [
                '$\\{(1 - 3k,\\ 1 + 2k) \\mid k \\in \\mathbb{Z}\\}$',
                '$\\{(1 - 6k,\\ 1 + 4k) \\mid k \\in \\mathbb{Z}\\}$',
                '$\\{(1 + 3k,\\ 1 + 2k) \\mid k \\in \\mathbb{Z}\\}$',
                '$\\{(1 - 2k,\\ 1 + 3k) \\mid k \\in \\mathbb{Z}\\}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$d = \\operatorname{pgcd}(4, 6) = 2$. En divisant par $2$ : $2(x - 1) = -3(y - 1)$. Par Gauss, $y - 1 = 2k$ et $x - 1 = -3k$, donc $(1 - 3k,\\ 1 + 2k)$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Vérification',
            stepTheme: 'orange',
            stepTitle: 'Unicité ou non-unicité des coefficients de Bézout',
            paragraphText:
              'Attention : le PGCD de deux entiers est unique, mais les coefficients de Bézout $(u, v)$ ne sont **pas uniques** ! Si $au_0 + bv_0 = d$, alors pour tout $k \\in \\mathbb{Z}$, $u = u_0 - (b/d)k$ et $v = v_0 + (a/d)k$ conviennent aussi.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q6',
              type: 'mcq',
              prompt: 'Pour $a, b \\in \\mathbb{Z}$ premiers entre eux, que peut-on dire du couple $(u, v) \\in \\mathbb{Z}^2$ vérifiant $au + bv = 1$ ?',
              options: [
                'Il est unique dans $\\mathbb{Z}^2$.',
                'Il existe une infinité de tels couples $(u, v)$ dans $\\mathbb{Z}^2$.',
                'Il n’existe que deux couples opposés.',
                'Il n’existe que si $a$ et $b$ sont des nombres premiers.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À partir d’un couple $(u_0, v_0)$, tous les couples $(u_0 - bk,\\ v_0 + ak)$ ($k \\in \\mathbb{Z}$) vérifient aussi $au + bv = 1$.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Congruences, cryptographie et nombres complexes
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algebre_ch3',
    subjectId: 'lmd_algebre',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Algèbre 1',
    title: 'Chapitre 3 — Congruences, cryptographie et nombres complexes',
    summary:
      'Calcul modulaire, équations de congruence, petit théorème de Fermat, théorème des restes chinois, chiffre de César et nombres complexes (formes algébrique, trigonométrique et exponentielle).',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_algebre_ch3_p1',
        order: 1,
        title: 'Congruences, Fermat, restes chinois et chiffre de César',
        summary:
          'Résoudre des congruences $ax \\equiv b \\pmod{n}$, réduire de grandes puissances avec Fermat et résoudre un système modulaire.',
        conceptExplanation:
          'Soit $n \\in \\mathbb{N}^*$. On dit que $a$ est **congru à $b$ modulo $n$**, noté $a \\equiv b \\pmod{n}$, si $n \\mid (a - b)$ (ce qui équivaut à avoir le même reste dans la division euclidienne par $n$). La congruence est une relation d’équivalence compatible avec l’addition, la multiplication et les puissances.\n\n' +
          '• **Équation $ax \\equiv b \\pmod{n}$** : admet des solutions ssi $d = \\operatorname{pgcd}(a, n) \\mid b$, de la forme $x = x_0 + l \\cdot \\frac{n}{d}$ ($l \\in \\mathbb{Z}$).\n' +
          '• **Petit théorème de Fermat** : si $p$ est premier, $a^p \\equiv a \\pmod{p}$, et si $p \\nmid a$, alors $a^{p-1} \\equiv 1 \\pmod{p}$.\n' +
          '• **Théorème des restes chinois** : si $n_1, \\dots, n_p$ sont deux à deux premiers entre eux, le système $x \\equiv a_k \\pmod{n_k}$ admet une unique solution modulo $N = \\prod n_k$, donnée par $x = \\sum a_k N_k u_k$ avec $N_k = N/n_k$ et $N_k u_k \\equiv 1 \\pmod{n_k}$.\n' +
          '• **Chiffre de César** : chiffrement par décalage modulo $26$ : $E(x) = (x + k) \\bmod 26$ (ex. $k = 3$ envoie A sur D).',
        formulas: [
          {
            name: 'Petit théorème de Fermat',
            formula: 'p \\text{ premier et } p \\nmid a \\implies a^{p-1} \\equiv 1 \\pmod{p}',
            note: 'Permet de réduire immédiatement les grands exposants modulo p - 1.',
          },
          {
            name: 'Chiffrement et déchiffrement de César (décalage k)',
            formula: 'y \\equiv x + k \\pmod{26} \\iff x \\equiv y - k \\pmod{26}',
            note: 'Avec A = 0, B = 1, ..., Z = 25 et k = 3 pour le chiffre historique de Jules César.',
          },
        ],
        keyRule:
          'Attention : la congruence n’est **pas** simplifiable par un facteur $c$ quelconque ! On ne peut diviser $ac \\equiv bc \\pmod{n}$ par $c$ que si $\\operatorname{pgcd}(c, n) = 1$ (sinon on divise aussi le module $n$ par $\\operatorname{pgcd}(c, n)$).',
        workedExample: {
          title: 'Petit théorème de Fermat ($14^{3141} \\pmod{17}$) et Restes chinois (Applications 14 & 15)',
          statement:
            '1) Calculer le reste de $14^{3141}$ modulo $17$ (Application 14). 2) Des objets rangés par 3 laissent 2, par 5 laissent 3, par 7 laissent 2 : trouver le plus petit nombre positif d’objets (Application 15).',
          methodSteps: [
            '1) $17$ est premier et $17 \\nmid 14$, donc par Fermat $14^{16} \\equiv 1 \\pmod{17}$.',
            'On divise l’exposant $3141$ par $16$ : $3141 = 16 \\times 196 + 5$. Ainsi $14^{3141} \\equiv 14^5 \\equiv (-3)^5 = -243 \\pmod{17}$.',
            'Comme $-243 = 17 \\times (-15) + 12$, on obtient $14^{3141} \\equiv 12 \\pmod{17}$.',
            '2) Système : $x \\equiv 2 \\pmod{3}$, $x \\equiv 3 \\pmod{5}$, $x \\equiv 2 \\pmod{7}$. Ici $N = 3 \\times 5 \\times 7 = 105$.',
            '$N_1 = 35 \\equiv 2 \\pmod{3} \\implies u_1 = 2$ ; $N_2 = 21 \\equiv 1 \\pmod{5} \\implies u_2 = 1$ ; $N_3 = 15 \\equiv 1 \\pmod{7} \\implies u_3 = 1$.',
            '$x \\equiv 2(35)(2) + 3(21)(1) + 2(15)(1) = 140 + 63 + 30 = 233 \\equiv 23 \\pmod{105}$.',
          ],
          conclusion: '$14^{3141} \\equiv 12 \\pmod{17}$, et le plus petit nombre d’objets est $23$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Calcul modulaire',
            stepTheme: 'blue',
            stepTitle: 'Carrés modulo 8',
            paragraphText:
              'Tout entier impair s’écrit $2k + 1$, d’où $(2k + 1)^2 = 4k(k+1) + 1$. Comme $k(k+1)$ est pair, $4k(k+1)$ est multiple de $8$, donc le carré de **tout** nombre impair est congru à $1$ modulo $8$ ! Pour un nombre pair $2k$, son carré est congru à $0$ ou $4$ modulo $8$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Si $a, b, c$ sont trois entiers impairs, quel est le reste de la division euclidienne de $a^2 + b^2 + c^2$ par $8$ ?',
              options: ['$1$', '$3$', '$5$', '$7$'],
              correctAnswerIndex: 1,
              explanation:
                'Chaque carré impair vérifie $a^2 \\equiv b^2 \\equiv c^2 \\equiv 1 \\pmod{8}$, donc $a^2 + b^2 + c^2 \\equiv 1 + 1 + 1 = 3 \\pmod{8}$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Équation modulaire',
            stepTheme: 'green',
            stepTitle: 'Résoudre $ax \\equiv b \\pmod{n}$ (Exemple 7 et Application 13)',
            paragraphText:
              'L’équation $9x \\equiv 6 \\pmod{24}$ admet des solutions car $\\operatorname{pgcd}(9, 24) = 3 \\mid 6$. En divisant toute la congruence (y compris le module !) par $3$, on se ramène à $3x \\equiv 2 \\pmod{8}$, dont les solutions sont $x \\equiv 6 \\pmod{8}$ (car $3 \\times 6 = 18 \\equiv 2 \\pmod{8}$).',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Quelle est la solution dans $\\{0, 1, \\dots, 34\\}$ de l’équation $12x \\equiv 5 \\pmod{35}$ ?',
              options: ['$x = 5$', '$x = 12$', '$x = 20$', '$x = 15$'],
              correctAnswerIndex: 3,
              explanation:
                'On cherche d’abord l’inverse de $12$ modulo $35$ : $12 \\times 3 = 36 \\equiv 1 \\pmod{35}$. En multipliant par $3$ : $x \\equiv 3 \\times 5 = 15 \\pmod{35}$ (vérification : $12 \\times 15 = 180 = 5 \\times 35 + 5 \\equiv 5 \\pmod{35}$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Fermat',
            stepTheme: 'violet',
            stepTitle: 'Réduire une puissance avec le petit théorème de Fermat',
            paragraphText:
              'Si $p$ est premier et $p \\nmid a$, alors $a^{p-1} \\equiv 1 \\pmod{p}$. Pour calculer $a^k \\pmod{p}$, il suffit de remplacer l’exposant $k$ par le reste de $k$ dans la division euclidienne par $p - 1$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Quel est le reste de la division euclidienne de $3^{100}$ par $11$ ?',
              options: ['$1$', '$3$', '$9$', '$5$'],
              correctAnswerIndex: 0,
              explanation:
                '$11$ est premier et $11 \\nmid 3$, donc par Fermat $3^{10} \\equiv 1 \\pmod{11}$. Ainsi $3^{100} = (3^{10})^{10} \\equiv 1^{10} = 1 \\pmod{11}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Restes chinois',
            stepTheme: 'green',
            stepTitle: 'Théorème des restes chinois',
            paragraphText:
              'Lorsque les modulos $n_1, n_2$ sont premiers entre eux, le système $\\{x \\equiv a_1 \\pmod{n_1},\\ x \\equiv a_2 \\pmod{n_2}\\}$ admet une unique solution modulo $n_1 n_2$. Si les modulos ne sont pas premiers entre eux, on les décompose en facteurs premiers entre eux (ex. $\\bmod 6$ devient $\\bmod 2$ et $\\bmod 3$).',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Quelle est la plus petite solution positive du système $\\{x \\equiv 1 \\pmod{3},\\ x \\equiv 2 \\pmod{5}\\}$ ?',
              options: ['$2$', '$11$', '$13$', '$7$'],
              correctAnswerIndex: 3,
              explanation:
                '$7 = 2 \\times 3 + 1 \\equiv 1 \\pmod{3}$ et $7 = 1 \\times 5 + 2 \\equiv 2 \\pmod{5}$. C’est bien l’unique solution dans $[0, 14]$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Cryptographie',
            stepTheme: 'slate',
            stepTitle: 'Le chiffre de César modulo 26',
            paragraphText:
              'Dans le chiffre de César avec décalage de $3$ à droite, on associe à chaque lettre son rang $0 \\dots 25$ et on ajoute $3$ modulo $26$ : `A(0) → D(3)`, `B(1) → E(4)`, ..., `X(23) → A(0)`, `Y(24) → B(1)`, `Z(25) → C(2)`. Pour déchiffrer, on retranche $3$ modulo $26$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Avec le chiffre de César de décalage $+3$, quel est le chiffré du mot « ZOO » ?',
              options: ['« CRR »', '« WLL »', '« BQQ »', '« DSS »'],
              correctAnswerIndex: 0,
              explanation:
                '`Z(25) + 3 = 28 ≡ 2 (mod 26) → C` ; `O(14) + 3 = 17 → R`. Le mot « ZOO » devient « CRR ».',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège de simplification',
            stepTheme: 'orange',
            stepTitle: 'Simplifier une congruence $ac \\equiv bc \\pmod{n}$',
            paragraphText:
              'Attention : $2 \\times 1 \\equiv 2 \\times 4 \\pmod{6}$ est vrai (car $2 \\equiv 8 \\pmod{6}$), mais $1 \\not\\equiv 4 \\pmod{6}$ ! En divisant par $2$, on doit diviser aussi le module $6$ par $\\operatorname{pgcd}(2, 6) = 2$, ce qui donne $1 \\equiv 4 \\pmod{3}$ (vrai).',
            keyRule: '$ac \\equiv bc \\pmod{n} \\iff a \\equiv b \\pmod{\\frac{n}{\\operatorname{pgcd}(c, n)}}$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q6',
              type: 'mcq',
              prompt: 'De la congruence $4x \\equiv 4 \\pmod{10}$, quelle conclusion exacte peut-on déduire ?',
              options: [
                '$x \\equiv 1 \\pmod{10}$ uniquement',
                '$x \\equiv 1 \\pmod{5}$',
                '$x \\equiv 0 \\pmod{10}$',
                '$x \\equiv 4 \\pmod{10}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$\\operatorname{pgcd}(4, 10) = 2$, donc en divisant par $4$ on divise le module par $2$ : $x \\equiv 1 \\pmod{5}$ (soit $x \\equiv 1$ ou $6 \\pmod{10}$).',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_algebre_ch3_p2',
        order: 2,
        title: 'Nombres complexes : algèbre, module, argument et forme exponentielle',
        summary:
          'Maîtriser les trois écritures d’un nombre complexe, les formules de Moivre/Euler et la résolution d’équations dans $\\mathbb{C}$.',
        conceptExplanation:
          'L’ensemble $\\mathbb{C}$ des **nombres complexes** prolonge $\\mathbb{R}$ en introduisant l’imaginaire $i$ tel que $i^2 = -1$. Tout $z \\in \\mathbb{C}$ s’écrit de manière unique sous **forme algébrique** $z = a + ib$ ($a = \\operatorname{Re}(z) \\in \\mathbb{R}$, $b = \\operatorname{Im}(z) \\in \\mathbb{R}$).\n\n' +
          '• **Conjugué** : $\\bar{z} = a - ib$, avec $z \\bar{z} = a^2 + b^2 = |z|^2$.\n' +
          '• **Module et argument** : $|z| = \\sqrt{a^2 + b^2}$. Pour $z \\neq 0$, tout réel $\\theta$ tel que $\\cos\\theta = a/|z|$ et $\\sin\\theta = b/|z|$ est un **argument** de $z$ (défini à $2\\pi$ près).\n' +
          '• **Formes trigonométrique et exponentielle** : $z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}$ (avec $r = |z| > 0$). Elles transforment les produits et puissances en additions et multiplications d’angles (formule de Moivre : $(e^{i\\theta})^n = e^{in\\theta}$).\n' +
          '• **Équation du second degré $az^2 + bz + c = 0$** ($a, b, c \\in \\mathbb{R}, a \\neq 0$) : si $\\Delta = b^2 - 4ac < 0$, elle admet deux racines complexes conjuguées $z = \\frac{-b \\pm i\\sqrt{-\\Delta}}{2a}$.',
        formulas: [
          {
            name: 'Module et inverse',
            formula: '|z| = \\sqrt{a^2 + b^2}, \\qquad \\frac{1}{z} = \\frac{\\bar{z}}{|z|^2} = \\frac{a - ib}{a^2 + b^2}',
            note: 'Pour mettre un quotient sous forme algébrique, multiplier numérateur et dénominateur par le conjugué du dénominateur.',
          },
          {
            name: 'Formule de Moivre et formules d’Euler',
            formula: '(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta), \\qquad \\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}',
            note: 'Et sin(θ) = (e^{iθ} - e^{-iθ}) / (2i).',
          },
        ],
        keyRule:
          'Pour les additions/soustractions, utiliser la forme algébrique $a + ib$ ; pour les produits, quotients, puissances et racines $n$-ièmes, passer en forme exponentielle $r e^{i\\theta}$ !',
        workedExample: {
          title: 'Mise sous forme exponentielle et calcul de $(1 + i)^8$',
          statement:
            'Écrire $z = 1 + i$ sous forme exponentielle puis en déduire la valeur exacte de $(1 + i)^8$.',
          methodSteps: [
            'Module : $|z| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.',
            'Argument : $\\cos\\theta = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$ et $\\sin\\theta = \\frac{\\sqrt{2}}{2}$, donc $\\theta \\equiv \\frac{\\pi}{4} \\pmod{2\\pi}$.',
            'Forme exponentielle : $1 + i = \\sqrt{2}\\, e^{i\\pi/4}$.',
            'Puissance 8 : $(1 + i)^8 = (\\sqrt{2})^8 e^{i \\cdot 8\\pi/4} = 2^4 e^{2i\\pi} = 16 \\times 1 = 16$.',
          ],
          conclusion: '$(1 + i)^8 = 16$ (un réel pur positif).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Quotient',
            stepTheme: 'green',
            stepTitle: 'Mettre un quotient complexe sous forme algébrique',
            paragraphText:
              'Pour écrire $\\frac{z_1}{z_2}$ sous la forme $a + ib$, on multiplie numérateur et dénominateur par le conjugué $\\overline{z_2}$, ce qui fait apparaître le réel positif $|z_2|^2$ au dénominateur.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Quelle est la forme algébrique de $z = \\frac{2 + i}{1 - i}$ ?',
              options: [
                '$\\frac{1}{2} + \\frac{3}{2}i$',
                '$\\frac{3}{2} + \\frac{1}{2}i$',
                '$2 - i$',
                '$1 + 3i$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\frac{(2+i)(1+i)}{(1-i)(1+i)} = \\frac{2 + 2i + i + i^2}{1^2 + 1^2} = \\frac{1 + 3i}{2} = \\frac{1}{2} + \\frac{3}{2}i$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Module',
            stepTheme: 'violet',
            stepTitle: 'Propriétés multiplicatives du module',
            paragraphText:
              'Le module vérifie $|z_1 z_2| = |z_1|\\,|z_2|$, $|z^n| = |z|^n$ et $|z_1 / z_2| = |z_1| / |z_2|$. Il n’est donc pas nécessaire de développer un produit ou un quotient pour calculer son module !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Quel est le module du nombre complexe $z = \\frac{(3 + 4i)^2}{1 - i\\sqrt{3}}$ ?',
              options: ['$5$', '$\\frac{25}{2}$', '$\\frac{5}{2}$', '$25$'],
              correctAnswerIndex: 1,
              explanation:
                '$|3 + 4i| = \\sqrt{9 + 16} = 5$ donc $|(3+4i)^2| = 25$. $|1 - i\\sqrt{3}| = \\sqrt{1 + 3} = 2$. Ainsi $|z| = \\frac{25}{2}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Forme exponentielle',
            stepTheme: 'blue',
            stepTitle: 'Passage en forme trigonométrique / exponentielle',
            paragraphText:
              'Pour $z = a + ib \\neq 0$, on factorise par le module $r = \\sqrt{a^2 + b^2}$ pour reconnaître un angle remarquable : $z = r\\left(\\frac{a}{r} + i\\frac{b}{r}\\right) = r e^{i\\theta}$. Par exemple, $-1 + i\\sqrt{3} = 2\\left(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right) = 2 e^{i 2\\pi/3}$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Quelle est la forme exponentielle de $z = \\sqrt{3} - i$ ?',
              options: [
                '$2 e^{i\\pi/6}$',
                '$2 e^{i\\pi/3}$',
                '$2 e^{-i\\pi/6}$',
                '$\\sqrt{2} e^{-i\\pi/4}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$|z| = \\sqrt{3 + 1} = 2$, et $\\cos\\theta = \\frac{\\sqrt{3}}{2}$, $\\sin\\theta = -\\frac{1}{2}$, ce qui correspond à $\\theta = -\\frac{\\pi}{6}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Puissances de i et Moivre',
            stepTheme: 'violet',
            stepTitle: 'Calculer une grande puissance complexe',
            paragraphText:
              'Les puissances de $i$ sont cycliques de période $4$ : $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, donc $i^n = i^{n \\bmod 4}$. Plus généralement, $(r e^{i\\theta})^n = r^n e^{i n\\theta}$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Que vaut $i^{2026}$ ?',
              options: ['$1$', '$i$', '$-i$', '$-1$'],
              correctAnswerIndex: 3,
              explanation:
                '$2026 = 4 \\times 506 + 2$, donc $i^{2026} = (i^4)^{506} \\cdot i^2 = 1 \\cdot (-1) = -1$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Second degré dans C',
            stepTheme: 'green',
            stepTitle: 'Résoudre $az^2 + bz + c = 0$ avec $\\Delta < 0$',
            paragraphText:
              'Lorsque les coefficients $a, b, c$ sont réels et que $\\Delta = b^2 - 4ac < 0$, on écrit $\\Delta = (i\\sqrt{-\\Delta})^2$ et les deux solutions dans $\\mathbb{C}$ sont conjuguées : $z_1 = \\frac{-b + i\\sqrt{-\\Delta}}{2a}$ et $z_2 = \\overline{z_1}$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Quelles sont les solutions dans $\\mathbb{C}$ de l’équation $z^2 - 2z + 5 = 0$ ?',
              options: [
                '$1 + 2i$ et $1 - 2i$',
                '$-1 + 2i$ et $-1 - 2i$',
                '$2 + i$ et $2 - i$',
                '$1 + 4i$ et $1 - 4i$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\Delta = (-2)^2 - 4(1)(5) = 4 - 20 = -16 = (4i)^2$. Les racines sont $z = \\frac{2 \\pm 4i}{2} = 1 \\pm 2i$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Module strictement positif dans la forme exponentielle',
            paragraphText:
              'Dans la forme exponentielle $z = r e^{i\\theta}$, le coefficient $r$ doit impérativement être **strictement positif** ($r > 0$). L’écriture $-2 e^{i\\pi/3}$ n’est **pas** une forme exponentielle : il faut absorber le signe moins via $-1 = e^{i\\pi}$, ce qui donne $2 e^{i(\\pi/3 + \\pi)} = 2 e^{i 4\\pi/3}$ (ou $2 e^{-i 2\\pi/3}$).',
            keyRule: 'Pour transformer $-r e^{i\\theta}$ ($r > 0$) en forme exponentielle, remplacer $-1$ par $e^{i\\pi}$ : $r e^{i(\\theta + \\pi)}$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Quelle est la véritable forme exponentielle du complexe $z = -3 e^{i\\pi/4}$ ?',
              options: [
                '$3 e^{-i\\pi/4}$',
                '$3 e^{i 5\\pi/4}$',
                '$3 e^{i 3\\pi/4}$',
                '$-3 e^{i\\pi/4}$ est déjà sous forme exponentielle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $-1 = e^{i\\pi}$, on a $z = 3 e^{i\\pi} e^{i\\pi/4} = 3 e^{i 5\\pi/4}$ (soit encore $3 e^{-i 3\\pi/4}$).',
            },
          },
        ],
      }),
    ],
  },
];
